import { TESTFLIGHT_URL } from "@/lib/links";

export default function GetTheApp() {
  return (
    <section id="get-app" className="relative py-24 sm:py-32 bg-paper-warm border-t border-rule">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-ink-mute mb-4">
            Get DrawEvolve
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight tracking-tight text-ink text-balance">
            It just shipped.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft max-w-lg text-pretty">
            The app is in App Store review. While that wraps up you can join the TestFlight beta and start drawing today. Free during the beta.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
          <a
            href={TESTFLIGHT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-base font-medium text-paper hover:bg-accent-deep transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Join the TestFlight beta
          </a>
          <a
            href="mailto:trevor@drawevolve.com"
            className="text-base text-ink-soft hover:text-ink underline underline-offset-[6px] decoration-rule hover:decoration-ink transition-colors"
          >
            Found a bug? trevor@drawevolve.com
          </a>
        </div>
      </div>
    </section>
  );
}
