import AboutPage from "../components/AboutPage";
import type { Metadata, Viewport } from "next";

// SEO Metadata for About Page
export const metadata: Metadata = {
  title: 'About Umang Realtors | Founded by Sanjay Bhardwaj - Trusted Real Estate Experts in Dholera',
  description: 'Learn about Umang Realtors, founded by Mr. Sanjay Bhardwaj. We specialize in transparent, trust-based real estate services in Dholera SIR. Our mission: making property decisions simpler, safer, and more meaningful with end-to-end support.',
  keywords: [
    'Umang Realtors',
    'Sanjay Bhardwaj',
    'Dholera real estate company',
    'about Umang Realtors',
    'real estate advisory Gujarat',
    'property investment advisory',
    'transparent real estate services',
    'trusted property consultants',
    'Dholera SIR experts',
    'residential commercial sales',
    'real estate transparency',
    'property transaction support',
    'client representation real estate',
    'real estate founder story',
    'professional real estate services India',
    'long-term property investment',
    'Dholera property consultants'
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
    url: 'https://www.umangrealtors.com/about',
    siteName: 'Umang Realtors',
    title: 'About Umang Realtors | Founder Sanjay Bhardwaj - Trust & Transparency in Real Estate',
    description: 'Founded by Mr. Sanjay Bhardwaj, Umang Realtors redefines property transactions through transparency, trust, and informed decision-making. We specialize in Dholera SIR investments with end-to-end support.',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Umang Realtors - Founded by Sanjay Bhardwaj',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Umang Realtors | Founded by Sanjay Bhardwaj - Trusted Dholera Real Estate Experts',
    description: 'Founded on trust, transparency & long-term value. Mr. Sanjay Bhardwaj leads our mission to make real estate decisions simpler, safer & more meaningful.',
    images: ['/twitter-about.jpg'],
    creator: '@UmangRealtors',
  },
  alternates: {
    canonical: 'https://www.umangrealtors.com/about',
  },
  category: 'Real Estate',
  classification: 'Company Information',
};

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function About() {
  return (
    <AboutPage />
  );
}
