import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "react-hot-toast";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import CTA from "./components/CTA";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      </head>
      <body
        className={`${playfair.variable} ${lato.variable} antialiased bg-dholera-light text-dholera-900`}
      >
        <Header />
        {children}
        <Toaster position="top-right" />
        <Footer />
        <CTA />
        <Analytics />
      </body>
    </html>
  );
}
