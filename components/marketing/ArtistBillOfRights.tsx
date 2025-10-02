export default function ArtistBillOfRights() {
  const rights = [
    "Your art stays yours. We don't publish or sell it.",
    "No auto-finishing. We give feedback; you do the art.",
    "Clear data controls and deletion at any time.",
    "We'll always be transparent about how DrawEvolve works.",
  ];

  return (
    <section id="ethos" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Artist Bill of Rights
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We built DrawEvolve because harsh critique culture sucks. You deserve feedback that helps you grow—without the judgment.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
          <ul className="space-y-4">
            {rights.map((right, index) => (
              <li key={index} className="flex gap-4">
                <svg
                  className="h-6 w-6 flex-none text-blue-600 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base text-gray-900 dark:text-white font-medium">
                  {right}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                AI as mentor, not replacement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
