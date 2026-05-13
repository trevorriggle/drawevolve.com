import type { Metadata } from "next";
import Hero from "@/components/marketing/Hero";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import ArtistBillOfRights from "@/components/marketing/ArtistBillOfRights";
import DemoTeaser from "@/components/marketing/DemoTeaser";
import FAQ from "@/components/marketing/FAQ";
import EmailCapture from "@/components/marketing/EmailCapture";
import SiteFooter from "@/components/marketing/SiteFooter";
import SiteHeader from "@/components/marketing/SiteHeader";

export const metadata: Metadata = {
  title: "DrawEvolve — feedback for artists, not finished art",
  description: "A drawing companion for iPad. You draw; we send back a short critique tuned to what you're working on.",
  alternates: {
    canonical: "https://drawevolve.com",
  },
};

export default function DrawEvolvePage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <FeatureGrid />
      <DemoTeaser />
      <ArtistBillOfRights />
      <FAQ />
      <EmailCapture />
      <SiteFooter />
    </main>
  );
}
