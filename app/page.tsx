import type { Metadata } from "next";
import Hero from "@/components/marketing/Hero";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import ArtistBillOfRights from "@/components/marketing/ArtistBillOfRights";
import DemoTeaser from "@/components/marketing/DemoTeaser";
import FAQ from "@/components/marketing/FAQ";
import EmailCapture from "@/components/marketing/EmailCapture";
import SiteFooter from "@/components/marketing/SiteFooter";

export const metadata: Metadata = {
  title: "DrawEvolve — Grow as an artist, one drawing at a time",
  description: "Supportive, AI-guided feedback after you draw—so you improve. No auto-finishing. No shortcuts. Built for artists on iPad.",
  alternates: {
    canonical: "https://drawevolve.com",
  },
};

export default function DrawEvolvePage() {
  return (
    <main className="min-h-screen">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <nav className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
            <span className="text-lg font-bold text-gray-900 dark:text-white">DrawEvolve</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              How it works
            </a>
            <a href="#ethos" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Our ethos
            </a>
            <a href="#demo" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Demo
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              FAQ
            </a>
          </div>

          <a
            href="#waitlist"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Join the iPad beta
          </a>
        </nav>
      </header>

      {/* Add padding to account for fixed header */}
      <div className="pt-16">
        <Hero />
        <FeatureGrid />
        <ArtistBillOfRights />
        <DemoTeaser />
        <FAQ />
        <EmailCapture />
        <SiteFooter />
      </div>
    </main>
  );
}
