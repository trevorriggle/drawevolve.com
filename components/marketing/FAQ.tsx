"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How fast is the AI analysis?",
      answer: "Most analyses complete in under 3 seconds. Pro users get priority queue access for even faster results during peak times.",
    },
    {
      question: "Is my work private and secure?",
      answer: "Yes. All drawings are encrypted in transit and at rest. You control sharing—projects are private by default. We never train AI models on your data.",
    },
    {
      question: "What file formats can I export?",
      answer: "Currently PNG with transparency. SVG and layered PSD exports are on our roadmap for Pro users.",
    },
    {
      question: "Can I use DrawEvolve offline?",
      answer: "Not yet. We're exploring offline canvas editing with sync. AI analysis requires an internet connection.",
    },
    {
      question: "What's on the roadmap?",
      answer: "Multi-user live collaboration, version history, integrations with Figma/Miro, custom AI prompts, and mobile apps. Join our mailing list for updates!",
    },
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <dl className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800"
            >
              <dt>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-start justify-between text-left px-6 py-4"
                >
                  <span className="text-base font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <svg
                      className={`h-6 w-6 transform transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
              </dt>
              {openIndex === index && (
                <dd className="px-6 pb-4">
                  <p className="text-base text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
