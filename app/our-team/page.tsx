import OurTeam from "../components/OurTeam";
import type { Metadata, Viewport } from "next";

// SEO Metadata for Our Team Page
export const metadata: Metadata = {
    title: 'Our Team | Umang Realtors - Meet the Experts Behind Your Real Estate Journey',
    description: 'Meet the leadership team at Umang Realtors. Our experienced professionals — Varsha Jailswa, Shakil Ahmed, and Apurva Jha — bring strategic planning, digital marketing, and sales expertise to deliver exceptional real estate services in Dholera SIR.',
    keywords: [
        'Umang Realtors team',
        'real estate experts Dholera',
        'Varsha Jailswa',
        'Shakil Ahmed',
        'Apurva Jha',
        'real estate consultants',
        'Dholera SIR experts',
        'property investment team',
        'real estate leadership',
        'digital marketing real estate',
    ],
    authors: [{ name: 'Umang Realtors' }],
    creator: 'Umang Realtors',
    publisher: 'Umang Realtors',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://www.umangrealtors.com/our-team',
        siteName: 'Umang Realtors',
        title: 'Our Team | Umang Realtors - Meet the Experts',
        description: 'Get to know the dedicated professionals at Umang Realtors who drive strategic planning, digital marketing, and sales excellence in Dholera real estate.',
        images: [
            {
                url: '/og-team.jpg',
                width: 1200,
                height: 630,
                alt: 'Umang Realtors Team',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Our Team | Umang Realtors - Meet the Experts',
        description: 'Meet the leadership team at Umang Realtors — experts in real estate strategy, digital marketing, and sales in Dholera SIR.',
        images: ['/twitter-team.jpg'],
        creator: '@UmangRealtors',
    },
    alternates: {
        canonical: 'https://www.umangrealtors.com/our-team',
    },
    category: 'Real Estate',
    classification: 'Team Information',
};

// Viewport configuration
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export default function OurTeamPage() {
    return (
        <OurTeam />
    );
}
