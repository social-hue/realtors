import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "react-hot-toast";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import CTA from "./components/CTA";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import ExpresswayPopup from "./components/ExpresswayPopup";

// 2. Configure them

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif", // Matches your CSS variable
  weight: ["400", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-sans", // Matches your CSS variable
  weight: ["300", "400", "700"],
});

// 3. Setup Metadata (Title, Description, and FAVICON)
export const metadata: Metadata = {
  metadataBase: new URL('https://www.umangrealtors.com'),
  title: "Umang Realtors | Premium Real Estate",
  description: "Invest in India's first smart city.",
  icons: {
    icon: "/favicon.ico", // Path to your favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="-qvdPNOX-5F3FJe-QD6frX4UduhJccOLR-eE3pdgSRQ" />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init','1460641318783652');
              fbq('track','PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1460641318783652&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}

      </head>
      <body
        className={`${playfair.variable} ${lato.variable} antialiased bg-dholera-light text-dholera-900`}
      >
        <Header />
        {children}
        <Toaster position="top-right" />
        <Footer />
        <CTA />
        {/* <ExpresswayPopup /> */}
        <Analytics />
      </body>
    </html>
  );
}
