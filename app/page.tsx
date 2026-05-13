import type { Metadata } from "next";
import Hero from "@/components/marketing/Hero";
import WhatsInside from "@/components/marketing/WhatsInside";
import CoachVoices from "@/components/marketing/CoachVoices";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import DifferentCoaching from "@/components/marketing/DifferentCoaching";
import ArtistBillOfRights from "@/components/marketing/ArtistBillOfRights";
import DemoTeaser from "@/components/marketing/DemoTeaser";
import AboutStory from "@/components/marketing/AboutStory";
import FAQ from "@/components/marketing/FAQ";
import GetTheApp from "@/components/marketing/GetTheApp";
import SiteFooter from "@/components/marketing/SiteFooter";
import SiteHeader from "@/components/marketing/SiteHeader";

export const metadata: Metadata = {
  title: "DrawEvolve. A drawing app with a coach that remembers.",
  description: "A universal iOS drawing app and an AI coach that remembers what it told you last time. Six brushes, layers, pose reference, symmetry. Free during the beta.",
  alternates: {
    canonical: "https://drawevolve.com",
  },
};

export default function DrawEvolvePage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <WhatsInside />
      <CoachVoices />
      <FeatureGrid />
      <DifferentCoaching />
      <DemoTeaser />
      <ArtistBillOfRights />
      <AboutStory />
      <FAQ />
      <GetTheApp />
      <SiteFooter />
    </main>
  );
}
