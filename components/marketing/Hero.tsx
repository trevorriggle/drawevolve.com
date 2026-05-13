"use client";

import Image from "next/image";
import { track } from "@/lib/analytics";

export default function Hero() {
  const scrollToWaitlist = () => {
    track("cta_join_beta_click", { location: "hero" });
    document.getElementById("get-app")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:px-8">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <p className="text-sm uppercase tracking-[0.2em] text-ink-mute mb-6">
            Universal iOS. iPad and iPhone.
          </p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] tracking-tight text-ink text-balance">
            A drawing app whose <em className="not-italic text-accent-deep">AI coach remembers</em> what it told you last time.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft max-w-xl text-pretty">
            DrawEvolve is a full drawing app and an AI critic in one. You draw. You send. You get a critique that picks up where the last one left off, not a fresh take pretending you started today.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <button
              onClick={scrollToWaitlist}
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-base font-medium text-paper hover:bg-accent-deep transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              Join the TestFlight beta
            </button>
            <a
              href="#inside"
              className="text-base font-medium text-ink-soft hover:text-ink underline underline-offset-[6px] decoration-rule hover:decoration-ink transition-colors"
            >
              See what's inside
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
            <Image
              src="/marketing/ipad-screenshot.png"
              alt="DrawEvolve running on an iPad"
              fill
              priority
              sizes="(min-width: 1024px) 32vw, 80vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
