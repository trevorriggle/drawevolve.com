"use client";

import { useEffect } from "react";

export default function EmailCapture() {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="waitlist" className="py-24 sm:py-32 bg-blue-600">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          iPad Beta Waitlist
        </h2>
        <p className="mt-4 text-lg text-blue-100">
          Be first to try DrawEvolve. We'll invite testers in waves and send occasional progress notes. No spam.
        </p>
        <div className="mt-8">
          <iframe
            data-tally-src="https://tally.so/embed/nPV1G0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="200"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="iPad Beta Waitlist"
            className="mx-auto"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
