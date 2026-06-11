import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const description =
  "A full iOS drawing studio with an AI coach that remembers what it told you last time. Four critique voices, Eve the coach, and a record of whether you acted on the feedback. It will never draw for you.";

export const metadata: Metadata = {
  title: "DrawEvolve. A drawing app with a coach that remembers.",
  description,
  metadataBase: new URL("https://drawevolve.com"),
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "DrawEvolve. A drawing app with a coach that remembers.",
    description,
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
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="antialiased font-sans bg-studio text-bone">
        {children}
      </body>
    </html>
  );
}
