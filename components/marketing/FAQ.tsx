"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this AI art that finishes my drawing?",
      answer: "No. DrawEvolve never auto finishes your piece. It gives feedback so you finish it yourself and improve your skills along the way.",
    },
    {
      question: "Will my images be used to train models?",
      answer: "No by default. Your art stays private. If we ever explore opt in research, we will ask clearly first.",
    },
    {
      question: "Which devices are supported?",
      answer: "iPad first (iPadOS 16 or later). We are starting with iPad to deliver the best Apple Pencil experience. Other platforms later.",
    },
    {
      question: "I used the old web prototype, is that still a thing?",
      answer: "The web prototype proved the concept. The product is now iPad first, built specifically for artists who draw with Apple Pencil.",
    },
  ];

  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-white dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
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
              className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-md transition-all duration-200 carbon-fiber"
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
              <dd className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-4">
                  <p className="text-base text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
