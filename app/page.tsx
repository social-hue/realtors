import type { Metadata, Viewport } from 'next';
import Home from './components/Home';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Dholera SIR Real Estate Investment | Premium Land Parcels in India\'s Future Smart City',
  description: 'Invest in premium industrial and residential land parcels in Dholera SIR, India\'s first greenfield smart city. 2M+ sq. ft. delivered, 100+ happy investors, 150% appreciation. Secure your legacy in the next global economic hub.',
  keywords: [
    'Dholera SIR',
    'Dholera real estate',  
    'Dholera land investment',
    'Dholera industrial plots',
    'Dholera residential land',
    'smart city investment India',
    'Gujarat real estate',
    'Dholera Special Investment Region',
    'premium land parcels Dholera',
    'industrial land Gujarat',
    'Dholera property investment',
    'real estate India',
    'Dholera SIR projects',
    'land appreciation Dholera',
    'invest in Dholera',
    'future smart city India',
    'Gujarat industrial land',
    'Dholera plots for sale',
    'Umang Realtors'
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
    url: 'https://www.umangrealtors.com',
    siteName: 'Dholera Capital - Umang Realtors',
    title: 'Invest in Dholera SIR | Premium Industrial & Residential Land Parcels',
    description: 'Premium industrial and residential land parcels in Dholera SIR. 2M+ sq. ft. delivered, 100+ happy investors, 150% appreciation. Secure your legacy in India\'s future global economic hub.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dholera SIR Real Estate Investment',
      },
    ],
  }, 
  twitter: {
    card: 'summary_large_image',
    title: 'Invest in Dholera SIR | Premium Land Parcels in India\'s Future Smart City',
    description: 'Premium industrial and residential land in Dholera SIR. 2M+ sq. ft. delivered, 100+ investors, 150% appreciation. Secure your legacy today.',
    images: ['/twitter-image.jpg'],
    creator: '@UmangRealtors',
  },
  alternates: {
    canonical: 'https://www.umangrealtors.com',
  },
  category: 'Real Estate',
  classification: 'Real Estate Investment',
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Dholera',
    'geo.position': '22.2455;72.1887',
    'ICBM': '22.2455, 72.1887',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const DholeraCapitalLanding = () => {
  return (
    <Home />
  );
};

export default DholeraCapitalLanding;

// export default function Home() {
//   return (
//     <main className="min-h-screen flex items-center justify-center bg-cover bg-[url('/showdown.jpg')] px-6">
//       <div className="max-w-3xl w-full text-center p-10 md:p-14">
        
//         {/* Brand */}
//         <h1 className="text-3xl md:text-4xl font-semibold tracking-wide text-gray-900">
//           Umang Realtors
//         </h1>
//         <p className="mt-2 text-sm uppercase tracking-widest text-gray-500">
//           Real Estate • Trust • Growth
//         </p>

//         {/* Divider */}
//         <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

//         {/* Main Message */}
//         <h2 className="text-2xl md:text-3xl font-medium text-gray-800">
//           We’re Improving Your Experience
//         </h2>
//         <p className="mt-4 text-gray-600 leading-relaxed text-base md:text-lg">
//           Our website is currently undergoing scheduled maintenance.  
//           We’re refining the experience to serve you better with premium real estate offerings, seamless browsing, and enhanced performance.
//         </p>

//         {/* Status */}
//         <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-gray-100 px-6 py-2 text-sm text-gray-700">
//           <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
//           Maintenance in progress
//         </div>

//         {/* CTA */}
//         <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
//           <a
//             href="mailto:info@umangliving.com"
//             className="rounded-xl px-8 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
//           >
//             Contact Us
//           </a>
//           <a
//             href="tel:+919560986669"
//             className="rounded-xl px-8 py-3 border border-gray-300 text-gray-50 text-sm font-medium hover:text-black hover:bg-gray-50 transition"
//           >
//             Call Now
//           </a>
//         </div>

//         {/* Footer */}
//         <p className="mt-12 text-xs text-white">
//           © {new Date().getFullYear()} Umang Realtors. All rights reserved.
//         </p>
//       </div>
//     </main>
//   );
// }
