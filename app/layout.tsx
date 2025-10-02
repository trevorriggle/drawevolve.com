import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DrawEvolve — Grow as an artist, one drawing at a time",
  description: "Supportive, AI-guided feedback after you draw—so you improve. No auto-finishing. No shortcuts. Built for artists on iPad.",
  metadataBase: new URL("https://drawevolve.com"),
  openGraph: {
    title: "DrawEvolve — Grow as an artist, one drawing at a time",
    description: "Supportive, AI-guided feedback after you draw—so you improve. No auto-finishing. No shortcuts. Built for artists on iPad.",
    url: "https://drawevolve.com",
    siteName: "DrawEvolve",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "DrawEvolve - AI-guided feedback for artists",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DrawEvolve — Grow as an artist, one drawing at a time",
    description: "Supportive, AI-guided feedback after you draw—so you improve. No auto-finishing. No shortcuts. Built for artists on iPad.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
