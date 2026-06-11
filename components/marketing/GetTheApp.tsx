import { TESTFLIGHT_URL } from "@/lib/links";

export default function GetTheApp() {
  return (
    <section id="get-app" className="relative py-24 sm:py-32 bg-studio-2 border-t border-seam">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.22em] text-bone-mute mb-4">
            Get DrawEvolve
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-bone text-balance">
            The studio light is on.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-bone-soft max-w-lg text-pretty">
            DrawEvolve is on its way to the App Store. While that wraps up,
            join the TestFlight beta and start drawing tonight. Free during
            the beta.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
          <a
            href={TESTFLIGHT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-bone px-7 py-3.5 text-base font-medium text-studio hover:bg-sang transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bone"
          >
            Join the TestFlight beta
          </a>
          <a
            href="mailto:trevor@drawevolve.com"
            className="text-base text-bone-soft hover:text-bone underline underline-offset-[6px] decoration-seam hover:decoration-bone transition-colors"
          >
            Found a bug? trevor@drawevolve.com
          </a>
        </div>
      </div>
    </section>
  );
}
