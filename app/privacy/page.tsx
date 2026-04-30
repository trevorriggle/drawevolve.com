import type { Metadata } from "next";
import SiteFooter from "@/components/marketing/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | DrawEvolve",
  description: "How DrawEvolve collects, uses, and protects your data — including your artwork, account information, and feedback history.",
  alternates: {
    canonical: "https://drawevolve.com/privacy",
  },
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Last updated: April 30, 2026
            </p>
          </header>

          <div className="space-y-10 text-base leading-7 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                Introduction
              </h2>
              <p>
                DrawEvolve is operated by RIG Tech LLC, an Ohio limited liability company (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This Privacy Policy describes how we collect, use, and share information when you use DrawEvolve (the &quot;Service&quot;). By using the Service, you agree to this Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                Information We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong className="font-semibold text-gray-900 dark:text-white">Account information:</strong> your email address, used for authentication via magic link, Sign in with Apple, or Sign in with Google.
                </li>
                <li>
                  <strong className="font-semibold text-gray-900 dark:text-white">Artwork:</strong> drawings you create or upload to the Service.
                </li>
                <li>
                  <strong className="font-semibold text-gray-900 dark:text-white">Critique data:</strong> prompts, requested feedback parameters, and AI-generated critiques associated with your drawings.
                </li>
                <li>
                  <strong className="font-semibold text-gray-900 dark:text-white">Usage information:</strong> rate-limiting counters, feature usage, error logs.
                </li>
                <li>
                  <strong className="font-semibold text-gray-900 dark:text-white">Device information:</strong> IP address (used for security and rate limiting), device type, OS version, app version.
                </li>
                <li>
                  <strong className="font-semibold text-gray-900 dark:text-white">Authentication tokens</strong> from Apple or Google when you sign in with those providers.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>To provide and operate the Service (authenticate you, store your drawings, generate critiques).</li>
                <li>To send AI-generated feedback by transmitting your artwork and prompt to OpenAI for processing.</li>
                <li>To prevent abuse via rate limiting and anomaly detection.</li>
                <li>To communicate with you about your account or material changes to the Service.</li>
                <li>To diagnose errors and improve reliability.</li>
              </ul>
              <p className="mt-4">
                We do not use your information for advertising, and we do not sell your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                Your Artwork
              </h2>
              <p>
                You retain full ownership of all drawings you create or upload. We use your artwork only to operate the Service: storing it for you, transmitting it to OpenAI to generate critiques, and displaying it back to you. We do not use your artwork to train any AI model, and OpenAI does not train its models on data submitted via its API. We do not display, share, publish, or distribute your artwork without your explicit action.
              </p>
              <p className="mt-4">
                Future versions of DrawEvolve may add optional features that allow you to share artwork with other users. Any such sharing will be initiated by you, and we will not share your artwork on your behalf.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                Sharing and Disclosure
              </h2>
              <p>
                We share information with the following sub-processors solely to operate the Service:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-4">
                <li>
                  <strong className="font-semibold text-gray-900 dark:text-white">Apple</strong> (App Store, Sign in with Apple)
                </li>
                <li>
                  <strong className="font-semibold text-gray-900 dark:text-white">Google</strong> (Sign in with Google)
                </li>
                <li>
                  <strong className="font-semibold text-gray-900 dark:text-white">Supabase</strong> (database, file storage, authentication)
                </li>
                <li>
                  <strong className="font-semibold text-gray-900 dark:text-white">Cloudflare</strong> (request routing, rate limiting, abuse prevention)
                </li>
                <li>
                  <strong className="font-semibold text-gray-900 dark:text-white">OpenAI</strong> (AI-generated critique generation)
                </li>
                <li>
                  <strong className="font-semibold text-gray-900 dark:text-white">Resend</strong> (transactional email delivery)
                </li>
                <li>
                  <strong className="font-semibold text-gray-900 dark:text-white">Vercel</strong> (web hosting for drawevolve.com)
                </li>
              </ul>
              <p className="mt-4">
                We may disclose information when required by law, valid legal process, or to protect the rights, safety, or property of RIG Tech LLC, our users, or others.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                Data Retention and Deletion
              </h2>
              <p>
                We retain your account and content while your account is active. You may delete your account at any time from within the app, which permanently removes your account, drawings, critique history, and associated metadata. Some logs may be retained briefly for security and abuse-prevention purposes before automatic deletion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                Your Rights and Choices
              </h2>
              <p>
                Depending on your jurisdiction, you may have rights to access, correct, delete, or export your personal information. To exercise these rights, contact us at{" "}
                <a
                  href="mailto:trevor@drawevolve.com"
                  className="font-medium text-gray-900 dark:text-white underline underline-offset-4 hover:no-underline"
                >
                  trevor@drawevolve.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                Children&apos;s Privacy
              </h2>
              <p>
                DrawEvolve is intended for users 17 and older. We do not knowingly collect information from children under 17. If we learn we have collected information from a child under 17, we will delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. If we make material changes, we will notify you in the app or by email. The &quot;Last updated&quot; date at the top reflects the most recent revision.
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
