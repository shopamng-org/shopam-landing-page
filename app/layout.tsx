import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NewsletterSection from "@/components/home/Footer";
import HeaderWrapper from "@/components/shared/HeaderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const terminaFont = localFont({
  src: [
    {
      path: "../public/fonts/termina/TerminaTest-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/termina/TerminaTest-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/termina/TerminaTest-Demi.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/termina/TerminaTest-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-termina",
});

export const metadata: Metadata = {
  title: "ShopAm",
  description:
    "ShopAm is a live-streaming e-commerce platform that connects buyers and sellers in real-time.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${terminaFont.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <HeaderWrapper />
        {children}
        <NewsletterSection />
      </body>
    </html>
  );
}
