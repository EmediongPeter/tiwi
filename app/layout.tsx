import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TIWI Protocol | Multi Chain DeFi Super App for Trading, Yield, Lending, NFTs, and Payments",
  description: "TIWI Protocol is a multi chain decentralized finance Super App that unifies trading, liquidity, staking, lending, payments, NFTs, and governance. Trade across blockchains, earn yields, and pay with crypto using one wallet and one app. Mobile first, non custodial, and built for global adoption.",
  keywords: [
    "TIWI Protocol",
    "TIWI Ecosystem",
    "TIWI DEX",
    "DeFi",
    "multi chain swap",
    "crypto trading",
    "staking",
    "farming",
    "lending",
    "borrowing",
    "NFT marketplace",
    "TIWI Pay",
    "TWC token",
    "Web3 payments",
    "decentralized exchange",
    "cross chain DeFi",
    "non custodial wallet",
    "relayer",
    "crypto payroll",
    "Web3 Super App"
  ],
  authors: [{ name: "TIWI Ecosystem" }],
  metadataBase: new URL("https://tiwiprotocol.xyz"),
  openGraph: {
    title: "TIWI Protocol | Multi Chain DeFi Super App",
    description: "Trade across blockchains, earn yields, and pay with crypto using one wallet and one app. Mobile first, non custodial, and built for global adoption.",
    url: "https://tiwiprotocol.xyz",
    siteName: "TIWI Protocol",
    images: [
      {
        url: "/images/Metadata.png",
        width: 1200,
        height: 630,
        alt: "TIWI Protocol - Multi Chain DeFi Super App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TIWI Protocol | Multi Chain DeFi Super App",
    description: "Trade across blockchains, earn yields, and pay with crypto using one wallet and one app. Mobile first, non custodial, and built for global adoption.",
    images: ["/images/Metadata.png"],
    site: "@TIWIProtocol",
    creator: "@TIWIProtocol",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: '#010501' }}
      >
        <Navbar />
        {children}
        <Footer />
        
      </body>
    </html>
  );
}
