"use client";

import { track } from "@/lib/analytics";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
          Sketch. Evolve. Ship.
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Draw on a canvas, annotate ideas, and send them to AI for instant analysis.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/app"
            onClick={() => track("cta_start_drawing_click", { location: "hero" })}
            className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
          >
            Start Drawing
          </a>
          <button
            onClick={() => {
              track("cta_demo_click", { location: "hero" });
              // Placeholder: open lightbox
              alert("Demo video coming soon!");
            }}
            className="text-base font-semibold leading-6 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Watch 60s demo <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Social proof */}
        <div className="mt-16">
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-6">
            Trusted by innovative teams
          </p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-20 h-12 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
