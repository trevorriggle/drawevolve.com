"use client";

import { track } from "@/lib/analytics";

export default function Hero() {
  const scrollToWaitlist = () => {
    track("cta_join_beta_click", { location: "hero" });
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToEthos = () => {
    track("cta_bill_of_rights_click", { location: "hero" });
    document.getElementById("ethos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-black px-6 py-24 sm:py-32 lg:px-8 carbon-fiber-subtle">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-500/10 rounded-full blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
          Grow as an artist, one drawing at a time.
        </h1>
        <p className="mt-6 text-lg leading-8 text-white max-w-2xl mx-auto">
          Supportive, AI guided feedback after you draw so you improve. No auto finishing. No shortcuts.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
          <button
            onClick={scrollToWaitlist}
            className="w-full sm:w-auto rounded-lg bg-white px-6 py-3 text-base font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
          >
            Join the iPad beta
          </button>
          <button
            onClick={scrollToEthos}
            className="w-full sm:w-auto text-base font-semibold leading-6 text-white hover:text-gray-200 transition-colors"
          >
            Artist Bill of Rights <span aria-hidden="true">→</span>
          </button>
        </div>

        <p className="mt-8 text-sm text-white">
          Built by designers. Made for artists. Your art stays yours.
        </p>
      </div>
    </section>
  );
}
