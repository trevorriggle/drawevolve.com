import type { Metadata } from "next";
import Hero from "@/components/marketing/Hero";
import TheLoop from "@/components/marketing/TheLoop";
import SecondPass from "@/components/marketing/SecondPass";
import CoachVoices from "@/components/marketing/CoachVoices";
import Eve from "@/components/marketing/Eve";
import WhatsInside from "@/components/marketing/WhatsInside";
import Evolution from "@/components/marketing/Evolution";
import ArtistBillOfRights from "@/components/marketing/ArtistBillOfRights";
import AboutStory from "@/components/marketing/AboutStory";
import FAQ from "@/components/marketing/FAQ";
import GetTheApp from "@/components/marketing/GetTheApp";
import SiteFooter from "@/components/marketing/SiteFooter";
import SiteHeader from "@/components/marketing/SiteHeader";

export const metadata: Metadata = {
  title: "DrawEvolve. A drawing app with a coach that remembers.",
  description:
    "A full iOS drawing studio with an AI coach that remembers what it told you last time. Four critique voices, Eve the coach, and a record of whether you acted on the feedback. It will never draw for you.",
  alternates: {
    canonical: "https://drawevolve.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DrawEvolve",
  operatingSystem: "iOS",
  applicationCategory: "DesignApplication",
  description:
    "An iOS drawing studio with an AI coach that remembers its past critiques. Four critique voices, Eve the coach, and a skill record over time.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free during beta",
  },
  author: {
    "@type": "Organization",
    name: "RIG Tech, LLC",
  },
  url: "https://drawevolve.com",
};

export default function DrawEvolvePage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <Hero />
      <TheLoop />
      <SecondPass />
      <CoachVoices />
      <Eve />
      <WhatsInside />
      <Evolution />
      <ArtistBillOfRights />
      <AboutStory />
      <FAQ />
      <GetTheApp />
      <SiteFooter />
    </main>
  );
}
