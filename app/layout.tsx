import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DrawEvolve — feedback for artists, not finished art",
  description: "A drawing companion for iPad. You draw; we send back a short critique tuned to what you're working on.",
  metadataBase: new URL("https://drawevolve.com"),
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "DrawEvolve — feedback for artists, not finished art",
    description: "A drawing companion for iPad. You draw; we send back a short critique tuned to what you're working on.",
    url: "https://drawevolve.com",
    siteName: "DrawEvolve",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "DrawEvolve — feedback for artists",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DrawEvolve — feedback for artists, not finished art",
    description: "A drawing companion for iPad. You draw; we send back a short critique tuned to what you're working on.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased font-sans bg-paper text-ink">{children}</body>
    </html>
  );
}
