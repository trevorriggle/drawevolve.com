"use client";

export default function PricingTeaser() {
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for exploring ideas and quick sketches.",
      features: [
        "Basic canvas tools",
        "PNG export",
        "5 AI analyses per month",
        "Public project sharing",
      ],
      cta: "Start Free",
      href: "/app",
      primary: false,
    },
    {
      name: "Pro",
      price: "$12",
      description: "For professionals who need unlimited AI insights.",
      features: [
        "Unlimited AI vision",
        "Private projects",
        "Priority processing queue",
        "Team collaboration",
        "Advanced export options",
      ],
      cta: "Get Early Access",
      href: "#email-capture",
      primary: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Start free, upgrade when you need more power.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-8 ${
                tier.primary
                  ? "bg-blue-600 ring-2 ring-blue-600"
                  : "bg-gray-50 dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800"
              }`}
            >
              <h3
                className={`text-2xl font-bold ${
                  tier.primary ? "text-white" : "text-gray-900 dark:text-white"
                }`}
              >
                {tier.name}
              </h3>
              <p
                className={`mt-4 text-sm ${
                  tier.primary ? "text-blue-100" : "text-gray-600 dark:text-gray-400"
                }`}
              >
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span
                  className={`text-4xl font-bold tracking-tight ${
                    tier.primary ? "text-white" : "text-gray-900 dark:text-white"
                  }`}
                >
                  {tier.price}
                </span>
                {tier.price !== "Free" && (
                  <span
                    className={`text-sm font-semibold ${
                      tier.primary ? "text-blue-100" : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    /month
                  </span>
                )}
              </p>
              <ul
                className={`mt-8 space-y-3 text-sm ${
                  tier.primary ? "text-blue-100" : "text-gray-600 dark:text-gray-400"
                }`}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg
                      className={`h-6 w-5 flex-none ${
                        tier.primary ? "text-white" : "text-blue-600"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                className={`mt-8 block rounded-lg px-4 py-3 text-center text-sm font-semibold transition-colors ${
                  tier.primary
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-500"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
