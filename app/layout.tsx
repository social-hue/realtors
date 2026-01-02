import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Playfair_Display, Lato } from "next/font/google"; 
import "./globals.css";
import CTA from "./components/CTA";

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
  title: "Dholera Capital | Premium Real Estate",
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
      <body
      className={`${playfair.variable} ${lato.variable} antialiased bg-dholera-light text-dholera-900`}
  >
        {children}
        <Toaster position="top-right" />
        <CTA />
      </body>
    </html>
  );
}
