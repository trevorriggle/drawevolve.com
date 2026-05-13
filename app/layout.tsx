import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DrawEvolve. A drawing app with a coach that remembers.",
  description: "A universal iOS drawing app and an AI coach that remembers what it told you last time. Six brushes, layers, pose reference, symmetry. Free during the beta.",
  metadataBase: new URL("https://drawevolve.com"),
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "DrawEvolve. A drawing app with a coach that remembers.",
    description: "A universal iOS drawing app and an AI coach that remembers what it told you last time. Six brushes, layers, pose reference, symmetry. Free during the beta.",
    url: "https://drawevolve.com",
    siteName: "DrawEvolve",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "DrawEvolve. A drawing app with an AI coach that remembers.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DrawEvolve. A drawing app with a coach that remembers.",
    description: "A universal iOS drawing app and an AI coach that remembers what it told you last time. Six brushes, layers, pose reference, symmetry. Free during the beta.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interTight.variable} ${inter.variable}`}>
      <body className="antialiased font-sans bg-paper text-ink">{children}</body>
    </html>
  );
}
