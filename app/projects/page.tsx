import type { Metadata, Viewport } from 'next';
import Project from '../components/Project';

// SEO Metadata for Projects Page
export const metadata: Metadata = {
  title: 'Vrindavan City Dholera | Premium Gated Community Plots in India\'s First Smart City',
  description: 'Explore Vrindavan City - premium residential plots in Dholera SIR gated community. NA, NOC, title clear with immediate registry. Near Ahmedabad-Dholera Expressway, International Airport, and Monorail Station. Government approved with strategic master plan.',
  keywords: [
    'Vrindavan City Dholera',
    'Dholera gated community',
    'Dholera residential plots',
    'Dholera SIR projects',
    'premium plots Dholera',
    'government approved plots Dholera',
    'NA plots Dholera',
    'Dholera expressway plots',
    'plots near international airport',
    'Dholera master plan',
    'Shyama Sector Dholera',
    'Kalindi Sector Dholera',
    'Yamuna Sector Dholera',
    'Dholera investment opportunity',
    'smart city plots Gujarat',
    'Dholera gated society',
    'title clear plots Dholera',
    'immediate registry Dholera',
    'Dholera temple township',
    'Umang Realtors projects'
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
    url: 'https://www.umangrealtors.com/projects',
    siteName: 'Umang Realtors - Dholera Projects',
    title: 'Vrindavan City Dholera | Premium Gated Community - Government Approved Plots',
    description: 'Invest in Vrindavan City - Dholera\'s premier gated community. NA, NOC, title clear plots with immediate registry. Strategic location near expressway, airport & monorail. Own the divine in India\'s first green smart city.',
    images: [
      {
        url: '/og-projects.jpg',
        width: 1200,
        height: 630,
        alt: 'Vrindavan City Dholera - Premium Gated Community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vrindavan City Dholera | Premium Gated Community Plots in Smart City',
    description: 'Government approved NA plots in Dholera SIR gated community. Near expressway, airport & iconic temple. Title clear with immediate registry. Own the divine.',
    images: ['/twitter-projects.jpg'],
    creator: '@UmangRealtors',
  },
  alternates: {
    canonical: 'https://www.umangrealtors.com/projects',
  },
  category: 'Real Estate',
  classification: 'Real Estate Projects',
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Dholera SIR',
    'geo.position': '22.2455;72.1887',
    'ICBM': '22.2455, 72.1887',
  },
};

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const DholeraCapitalLanding = () => {

  return (
    <Project />
  );
};

export default DholeraCapitalLanding;