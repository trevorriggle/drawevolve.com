import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DrawEvolve — Sketch. Evolve. Ship.",
  description: "Draw on a canvas, annotate ideas, and send them to AI for instant analysis.",
  metadataBase: new URL("https://drawevolve.com"),
  openGraph: {
    title: "DrawEvolve — Sketch. Evolve. Ship.",
    description: "Draw on a canvas, annotate ideas, and send them to AI for instant analysis.",
    images: ["/marketing/og.png"],
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
