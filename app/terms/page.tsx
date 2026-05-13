import type { Metadata } from "next";
import SiteFooter from "@/components/marketing/SiteFooter";
import SiteHeader from "@/components/marketing/SiteHeader";

export const metadata: Metadata = {
  title: "Terms of Service | DrawEvolve",
  description: "The terms that govern your use of DrawEvolve. Your account, your artwork, and the feedback we provide.",
  alternates: {
    canonical: "https://drawevolve.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader hrefPrefix="/" />

      <article className="mx-auto max-w-3xl px-6 lg:px-8 py-16 sm:py-24">
        <header className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-ink-mute mb-4">
            Last updated April 30, 2026
          </p>
          <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] tracking-tight text-ink">
            Terms of Service
          </h1>
        </header>

        <div className="space-y-12 text-base leading-relaxed text-ink-soft">
          <section>
            <h2 className="font-display text-2xl text-ink mb-4">Agreement to Terms</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of DrawEvolve (the &quot;Service&quot;), operated by RIG Tech LLC, an Ohio limited liability company (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By creating an account or using the Service, you agree to these Terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink mb-4">Eligibility and Accounts</h2>
            <p>
              You must be at least 17 years old to use the Service. By creating an account, you represent that you meet this age requirement, that the information you provide is accurate, and that you will keep it current. You are responsible for all activity that occurs under your account, and for keeping your account credentials secure.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink mb-4">Your Content and License</h2>
            <p>
              You retain all ownership rights in artwork and other content you create or upload to the Service (&quot;Your Content&quot;). You grant RIG Tech LLC a worldwide, royalty-free, non-exclusive license to host, store, transmit, display, and process Your Content solely for the purpose of operating and providing the Service to you, including transmitting Your Content to AI service providers to generate critiques.
            </p>
            <p className="mt-4">
              This license is limited to operation of the Service. We do not use Your Content to train AI models. We do not display, share, or publish Your Content without your explicit action.
            </p>
            <p className="mt-4">
              If we add optional features that allow you to share Your Content with other users (e.g., publishing critiques or artwork to a public feed), we will only share Your Content when you take an affirmative action to do so.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink mb-4">AI Guided Feedback</h2>
            <p>
              DrawEvolve provides AI-generated critiques as a creative tool. AI-generated content may be inaccurate, incomplete, or unsuitable for your purpose. AI critiques are not professional artistic, educational, or psychological advice. Use your judgment when applying or disregarding feedback.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink mb-4">Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-ink-mute">
              <li>Use the Service for any unlawful purpose.</li>
              <li>Upload content that is infringing, defamatory, harassing, sexually exploitative, or that depicts minors in a sexual or suggestive context.</li>
              <li>Attempt to circumvent rate limits, security controls, or authentication mechanisms.</li>
              <li>Reverse-engineer, scrape, or extract data from the Service in bulk.</li>
              <li>Use the Service to harass, abuse, or harm any person.</li>
              <li>Resell, sublicense, or redistribute the Service without our written consent.</li>
            </ul>
            <p className="mt-4">We may suspend or terminate your account for violations.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink mb-4">Subscriptions and Payments</h2>
            <p>
              Some features may require a paid subscription. Subscriptions are billed through the Apple App Store and are subject to Apple&apos;s terms. Refunds are handled by Apple in accordance with their refund policy. Free-tier limits, paid-tier limits, and pricing may change, and we will notify you of material changes before they take effect.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink mb-4">Termination</h2>
            <p>
              You may terminate your account at any time from within the app. We may suspend or terminate your account for violation of these Terms or for any reason with reasonable notice. Upon termination, your right to use the Service ends immediately. Provisions of these Terms that by their nature should survive termination will survive (including ownership, disclaimers, limitation of liability, and governing law).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink mb-4">Disclaimers</h2>
            <p>
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS, OR THAT AI-GENERATED CONTENT WILL BE ACCURATE OR USEFUL.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink mb-4">Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, RIG TECH LLC AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR EXEMPLARY DAMAGES ARISING FROM OR RELATED TO YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS OR THE SERVICE WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US IN THE TWELVE MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink mb-4">Governing Law and Disputes</h2>
            <p>
              These Terms are governed by the laws of the State of Ohio, without regard to conflict-of-law principles. Any dispute arising from these Terms or the Service will be resolved in the state or federal courts located in Franklin County, Ohio, and you consent to personal jurisdiction in those courts.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink mb-4">Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. If we make material changes, we will notify you in the app or by email at least 14 days before the changes take effect. Your continued use of the Service after the effective date constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink mb-4">Contact Us</h2>
            <p>RIG Tech LLC</p>
            <p className="mt-2">
              Email:{" "}
              <a href="mailto:trevor@drawevolve.com" className="text-ink underline underline-offset-4 decoration-rule hover:decoration-ink transition-colors">
                trevor@drawevolve.com
              </a>
            </p>
          </section>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
