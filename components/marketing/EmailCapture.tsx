"use client";

import { useEffect } from "react";

export default function EmailCapture() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="waitlist" className="relative py-24 sm:py-32 bg-paper-warm border-t border-rule">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-ink-mute mb-4">
            iPad beta
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight text-ink text-balance">
            Want in early?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft max-w-lg text-pretty">
            We invite testers in small waves and send the occasional note on how the app is coming along. That's it.
          </p>
        </div>

        <div className="bg-paper border border-rule p-6 sm:p-8">
          <iframe
            data-tally-src="https://tally.so/embed/nPV1G0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="200"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="iPad Beta Waitlist"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
