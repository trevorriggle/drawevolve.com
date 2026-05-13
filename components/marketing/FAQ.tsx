"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Does this finish my drawing for me?",
      a: "No. There is no button that touches your canvas. We read what you've made and write back. That's it.",
    },
    {
      q: "Will my drawings be used to train models?",
      a: "No. Your work isn't used for training by default. If we ever run opt-in research, we'll ask first, in plain English.",
    },
    {
      q: "Which devices are supported?",
      a: "iPad with Apple Pencil, iPadOS 16 or later. We started here because that's where most serious sketching happens. Other platforms later.",
    },
    {
      q: "What happened to the old web prototype?",
      a: "It got us through the question \"is this idea worth building?\". The answer was yes — so we rebuilt it native on iPad.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 sm:py-32 border-t border-rule">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-ink-mute mb-4">
            Questions
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight text-ink">
            The honest answers.
          </h2>
        </div>

        <dl className="divide-y divide-rule border-y border-rule">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <dt>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 text-left py-6 group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-xl sm:text-2xl text-ink group-hover:text-accent-deep transition-colors">
                      {item.q}
                    </span>
                    <span
                      className={`flex-none text-ink-mute font-serif text-2xl leading-none transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </dt>
                <dd
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-10 text-base leading-relaxed text-ink-soft text-pretty">
                      {item.a}
                    </p>
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
