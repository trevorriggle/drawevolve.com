import type { Metadata } from "next";
import SiteFooter from "@/components/marketing/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Service | DrawEvolve",
  description: "The terms that govern your use of DrawEvolve — your account, your artwork, and the AI guided feedback we provide.",
  alternates: {
    canonical: "https://drawevolve.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <nav className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between py-4">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="DrawEvolve" className="h-12 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="/#how-it-works" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              How it works
            </a>
            <a href="/#ethos" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Our ethos
            </a>
            <a href="/#demo" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Demo
            </a>
            <a href="/#faq" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              FAQ
            </a>
          </div>

          <a
            href="/#waitlist"
            className="rounded-lg bg-gray-900 dark:bg-gray-100 px-4 py-2 text-sm font-semibold text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2"
          >
            Join the iPad beta
          </a>
        </nav>
      </header>

      <div className="pt-16">
        <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24 lg:px-8">
          <header className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Last updated: April 30, 2026
            </p>
          </header>

          <div className="space-y-10 text-base leading-7 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                Agreement to Terms
              </h2>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your use of DrawEvolve (the &quot;Service&quot;), operated by RIG Tech LLC, an Ohio limited liability company (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By creating an account or using the Service, you agree to these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                Eligibility and Accounts
              </h2>
              <p>
                You must be at least 17 years old to use the Service. By creating an account, you represent that you meet this age requirement, that the information you provide is accurate, and that you will keep it current. You are responsible for all activity that occurs under your account, and for keeping your account credentials secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                Your Content and License
              </h2>
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
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                AI Guided Feedback
              </h2>
              <p>
                DrawEvolve provides AI-generated critiques as a creative tool. AI-generated content may be inaccurate, incomplete, or unsuitable for your purpose. AI critiques are not professional artistic, educational, or psychological advice. Use your judgment when applying or disregarding feedback.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                Acceptable Use
              </h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1 mt-4">
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
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                Subscriptions and Payments
              </h2>
              <p>
                Some features may require a paid subscription. Subscriptions are billed through the Apple App Store and are subject to Apple&apos;s terms. Refunds are handled by Apple in accordance with their refund policy. Free-tier limits, paid-tier limits, and pricing may change, and we will notify you of material changes before they take effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                Termination
              </h2>
              <p>
                You may terminate your account at any time from within the app. We may suspend or terminate your account for violation of these Terms or for any reason with reasonable notice. Upon termination, your right to use the Service ends immediately. Provisions of these Terms that by their nature should survive termination will survive (including ownership, disclaimers, limitation of liability, and governing law).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                Disclaimers
              </h2>
              <p>
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS, OR THAT AI-GENERATED CONTENT WILL BE ACCURATE OR USEFUL.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                Limitation of Liability
              </h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, RIG TECH LLC AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR EXEMPLARY DAMAGES ARISING FROM OR RELATED TO YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS OR THE SERVICE WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US IN THE TWELVE MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                Governing Law and Disputes
              </h2>
              <p>
                These Terms are governed by the laws of the State of Ohio, without regard to conflict-of-law principles. Any dispute arising from these Terms or the Service will be resolved in the state or federal courts located in Franklin County, Ohio, and you consent to personal jurisdiction in those courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                Changes to These Terms
              </h2>
              <p>
                We may update these Terms from time to time. If we make material changes, we will notify you in the app or by email at least 14 days before the changes take effect. Your continued use of the Service after the effective date constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p>RIG Tech LLC</p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:trevor@drawevolve.com"
                  className="font-medium text-gray-900 dark:text-white underline underline-offset-4 hover:no-underline"
                >
                  trevor@drawevolve.com
                </a>
              </p>
            </section>
          </div>
        </article>

        <SiteFooter />
      </div>
    </main>
  );
}
