import type { Metadata } from "next";
import SiteFooter from "@/components/marketing/SiteFooter";
import SiteHeader from "@/components/marketing/SiteHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | DrawEvolve",
  description: "How DrawEvolve collects, uses, and protects your data — including your artwork, account information, and feedback history.",
  alternates: {
    canonical: "https://drawevolve.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader hrefPrefix="/" />

      <article className="mx-auto max-w-3xl px-6 lg:px-8 py-16 sm:py-24">
        <header className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-ink-mute mb-4">
            Last updated April 30, 2026
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl leading-[1.05] tracking-tight text-ink">
            Privacy Policy
          </h1>
        </header>

        <div className="space-y-12 text-base leading-relaxed text-ink-soft">
          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">Introduction</h2>
            <p>
              DrawEvolve is operated by RIG Tech LLC, an Ohio limited liability company (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This Privacy Policy describes how we collect, use, and share information when you use DrawEvolve (the &quot;Service&quot;). By using the Service, you agree to this Policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-ink-mute">
              <li><strong className="font-semibold text-ink">Account information:</strong> your email address, used for authentication via magic link, Sign in with Apple, or Sign in with Google.</li>
              <li><strong className="font-semibold text-ink">Artwork:</strong> drawings you create or upload to the Service.</li>
              <li><strong className="font-semibold text-ink">Critique data:</strong> prompts, requested feedback parameters, and AI-generated critiques associated with your drawings.</li>
              <li><strong className="font-semibold text-ink">Usage information:</strong> rate-limiting counters, feature usage, error logs.</li>
              <li><strong className="font-semibold text-ink">Device information:</strong> IP address (used for security and rate limiting), device type, OS version, app version.</li>
              <li><strong className="font-semibold text-ink">Authentication tokens</strong> from Apple or Google when you sign in with those providers.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-ink-mute">
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
            <h2 className="font-serif text-2xl text-ink mb-4">Your Artwork</h2>
            <p>
              You retain full ownership of all drawings you create or upload. We use your artwork only to operate the Service: storing it for you, transmitting it to OpenAI to generate critiques, and displaying it back to you. We do not use your artwork to train any AI model, and OpenAI does not train its models on data submitted via its API. We do not display, share, publish, or distribute your artwork without your explicit action.
            </p>
            <p className="mt-4">
              Future versions of DrawEvolve may add optional features that allow you to share artwork with other users. Any such sharing will be initiated by you, and we will not share your artwork on your behalf.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">Sharing and Disclosure</h2>
            <p>We share information with the following sub-processors solely to operate the Service:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-ink-mute">
              <li><strong className="font-semibold text-ink">Apple</strong> (App Store, Sign in with Apple)</li>
              <li><strong className="font-semibold text-ink">Google</strong> (Sign in with Google)</li>
              <li><strong className="font-semibold text-ink">Supabase</strong> (database, file storage, authentication)</li>
              <li><strong className="font-semibold text-ink">Cloudflare</strong> (request routing, rate limiting, abuse prevention)</li>
              <li><strong className="font-semibold text-ink">OpenAI</strong> (AI-generated critique generation)</li>
              <li><strong className="font-semibold text-ink">Resend</strong> (transactional email delivery)</li>
              <li><strong className="font-semibold text-ink">Vercel</strong> (web hosting for drawevolve.com)</li>
            </ul>
            <p className="mt-4">
              We may disclose information when required by law, valid legal process, or to protect the rights, safety, or property of RIG Tech LLC, our users, or others.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">Data Retention and Deletion</h2>
            <p>
              We retain your account and content while your account is active. You may delete your account at any time from within the app, which permanently removes your account, drawings, critique history, and associated metadata. Some logs may be retained briefly for security and abuse-prevention purposes before automatic deletion.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">Your Rights and Choices</h2>
            <p>
              Depending on your jurisdiction, you may have rights to access, correct, delete, or export your personal information. To exercise these rights, contact us at{" "}
              <a href="mailto:trevor@drawevolve.com" className="text-ink underline underline-offset-4 decoration-rule hover:decoration-ink transition-colors">
                trevor@drawevolve.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">Children&apos;s Privacy</h2>
            <p>
              DrawEvolve is intended for users 17 and older. We do not knowingly collect information from children under 17. If we learn we have collected information from a child under 17, we will delete it.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material changes, we will notify you in the app or by email. The &quot;Last updated&quot; date at the top reflects the most recent revision.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-ink mb-4">Contact Us</h2>
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
