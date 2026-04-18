import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webuildbrands.in"),
  title: {
    default: "We Build Brands | Creative Growth & Digital Agency",
    template: "%s | We Build Brands",
  },
  description:
    "WBB is a creative growth and digital agency helping startups and founders build impactful, scalable brands through strategy, design, content, and AI-powered systems.",
  keywords: [
    "branding agency",
    "digital marketing",
    "brand strategy",
    "web design",
    "content production",
    "SEO",
    "growth agency",
    "India",
    "Ayodhya",
  ],
  authors: [{ name: "We Build Brands" }],
  creator: "We Build Brands",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://webuildbrands.in",
    siteName: "We Build Brands",
    title: "We Build Brands | Creative Growth & Digital Agency",
    description:
      "Helping brands build impactful & scalable compounding growth through strategy, design, content, and AI-powered systems.",
    images: [
      {
        url: "/og/home.png",
        width: 1200,
        height: 630,
        alt: "We Build Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "We Build Brands | Creative Growth & Digital Agency",
    description:
      "Helping brands build impactful & scalable compounding growth.",
    images: ["/og/home.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="bg-brand-black text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
