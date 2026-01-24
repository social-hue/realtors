import { NextResponse } from "next/server";

interface RateLimitOptions {
    interval: number; // Time window in milliseconds
    maxRequests: number; // Max requests allowed in the interval
}

interface RateLimitEntry {
    count: number;
    firstRequest: number;
}

// In-memory store for rate limiting (consider Redis for production at scale)
const rateLimitStore = new Map<string, RateLimitEntry>();

// Clean up old entries periodically
setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of rateLimitStore.entries()) {
        if (now - entry.firstRequest > 3600000) { // Clean entries older than 1 hour
            rateLimitStore.delete(key);
        }
    }
}, 60000); // Run cleanup every minute

export function getClientIP(request: Request): string {
    // Try various headers for IP detection
    const forwarded = request.headers.get("x-forwarded-for");
    if (forwarded) {
        return forwarded.split(",")[0].trim();
    }

    const realIP = request.headers.get("x-real-ip");
    if (realIP) {
        return realIP;
    }

    // Fallback for local development
    return "127.0.0.1";
}

export function rateLimit(
    identifier: string,
    options: RateLimitOptions
): { success: boolean; remaining: number; resetIn: number } {
    const { interval, maxRequests } = options;
    const now = Date.now();

    const entry = rateLimitStore.get(identifier);

    if (!entry) {
        // First request from this identifier
        rateLimitStore.set(identifier, { count: 1, firstRequest: now });
        return {
            success: true,
            remaining: maxRequests - 1,
            resetIn: interval,
        };
    }

    const timePassed = now - entry.firstRequest;

    if (timePassed > interval) {
        // Reset the window
        rateLimitStore.set(identifier, { count: 1, firstRequest: now });
        return {
            success: true,
            remaining: maxRequests - 1,
            resetIn: interval,
        };
    }

    if (entry.count >= maxRequests) {
        // Rate limit exceeded
        return {
            success: false,
            remaining: 0,
            resetIn: interval - timePassed,
        };
    }

    // Increment the count
    entry.count += 1;
    rateLimitStore.set(identifier, entry);

    return {
        success: true,
        remaining: maxRequests - entry.count,
        resetIn: interval - timePassed,
    };
}

export function rateLimitResponse(resetIn: number) {
    const retryAfter = Math.ceil(resetIn / 1000);
    return NextResponse.json(
        {
            message: "Too many requests. Please try again later.",
            retryAfter,
        },
        {
            status: 429,
            headers: {
                "Retry-After": retryAfter.toString(),
                "X-RateLimit-Reset": new Date(Date.now() + resetIn).toISOString(),
            },
        }
    );
}
