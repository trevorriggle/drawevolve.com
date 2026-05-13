"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Does the app finish my drawing for me?",
      a: "No. Nothing in the app touches your canvas. The coach reads what you made and writes back. You draw.",
    },
    {
      q: "Do I need an Apple Pencil?",
      a: "No. Touch works. Pencil is great if you have one, but it isn't required.",
    },
    {
      q: "Which devices?",
      a: "Universal iOS. iPad and iPhone. iPad gets the most room. The iPhone build is real and shipping.",
    },
    {
      q: "What about my drawings?",
      a: "They stay yours. We don't publish or sell them. They aren't used to train models. If we ever change that we'll ask first, in plain language, before anything happens.",
    },
    {
      q: "Is there a free version?",
      a: "The whole app is free right now. We're in beta. Pricing isn't announced.",
    },
    {
      q: "What's coming next?",
      a: "Better brush sets, including oil and watercolor with real texture. More export options. Shareable evolution profiles so you can post your skill radar without screenshots.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 sm:py-32 border-t border-rule">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-ink-mute mb-4">
            Questions
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight tracking-tight text-ink">
            Honest answers.
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
                    <span className="font-display text-xl sm:text-2xl text-ink group-hover:text-accent-deep transition-colors">
                      {item.q}
                    </span>
                    <span
                      className={`flex-none text-ink-mute font-display text-2xl leading-none transition-transform ${
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
