"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Does the app finish my drawing for me?",
      a: "No, and it never will. Nothing in the app touches your canvas — no generation, no autocomplete. The coach reads what you made and writes back. You draw.",
    },
    {
      q: "Who is Eve? Is she the one critiquing?",
      a: "No. Eve is a separate coach you can talk to — she reads your critiques and helps you work through them, but she doesn't write them. Ask her to judge your drawing and she'll point you to Get Feedback. The critics critique; Eve coaches.",
    },
    {
      q: "Do I need an Apple Pencil?",
      a: "No. Touch works. Pencil is great if you have one, but it isn't required.",
    },
    {
      q: "Which devices?",
      a: "Universal iOS — iPad and iPhone. iPad gets the most room. Sync carries your work between them with layers preserved.",
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
      a: "Richer brush sets and more export options. What's not coming: a social feed, and AI image generation — that one's a matter of principle, not roadmap.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 sm:py-32 border-t border-seam">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.22em] text-bone-mute mb-4">
            Questions
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-bone">
            Honest answers.
          </h2>
        </div>

        <dl className="divide-y divide-seam border-y border-seam">
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
                    <span className="font-display text-xl sm:text-2xl text-bone group-hover:text-sang-soft transition-colors">
                      {item.q}
                    </span>
                    <span
                      className={`flex-none text-bone-mute font-display text-2xl leading-none transition-transform motion-reduce:transition-none ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </dt>
                <dd
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-10 text-base leading-relaxed text-bone-soft text-pretty">
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
