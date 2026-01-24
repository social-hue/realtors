import { NextResponse } from "next/server";
import DiscountLead from "@/lib/models/DiscountLead";
import dbConnect from "@/lib/db";
import { rateLimit, getClientIP, rateLimitResponse } from "@/lib/rateLimit";

// Generate a unique discount code
function generateDiscountCode(): string {
    const prefix = "DHOLERA";
    const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
    const timestamp = Date.now().toString(36).toUpperCase().slice(-4);
    return `${prefix}-${randomPart}${timestamp}`;
}

export async function POST(req: Request) {
    try {
        // Rate limiting: 5 requests per IP per 15 minutes
        const clientIP = getClientIP(req);
        const rateLimitResult = rateLimit(`discount:${clientIP}`, {
            interval: 15 * 60 * 1000, // 15 minutes
            maxRequests: 5,
        });

        if (!rateLimitResult.success) {
            return rateLimitResponse(rateLimitResult.resetIn);
        }

        const { email } = await req.json();

        // Email validation
        if (!email || typeof email !== "string") {
            return NextResponse.json(
                { message: "Email is required" },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            return NextResponse.json(
                { message: "Invalid email address" },
                { status: 400 }
            );
        }

        await dbConnect();

        // Check if email already exists
        const existingLead = await DiscountLead.findOne({
            email: email.toLowerCase().trim()
        });

        if (existingLead) {
            return NextResponse.json(
                {
                    message: "You've already requested a discount code!",
                    discountCode: existingLead.discountCode,
                    alreadyExists: true
                },
                { status: 200 }
            );
        }

        // Generate unique discount code
        const discountCode = generateDiscountCode();

        // Create new lead
        const newLead = await DiscountLead.create({
            email: email.toLowerCase().trim(), 
            source: "dholera-city",
            discountCode,
        });

        return NextResponse.json(
            {
                message: "Discount code sent successfully!",
                discountCode: newLead.discountCode,
                alreadyExists: false
            },
            {
                status: 201,
                headers: {
                    "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
                }
            }
        );
    } catch (error) {
        console.error("DHOLERA DISCOUNT API ERROR:", error);
        return NextResponse.json(
            { message: "Something went wrong. Please try again later." },
            { status: 500 }
        );
    }
}
