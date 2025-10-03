import Image from "next/image";

export default function DemoTeaser() {
  return (
    <section id="demo" className="relative py-20 sm:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            See what you'll get
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Supportive feedback designed to help you improve, not replace your creativity.
          </p>
        </div>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Sketch area - left side */}
            <div className="lg:col-span-3 bg-white dark:bg-gray-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-850 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
                Your sketch
              </p>
            </div>

            {/* Growth Notes - right side */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-gray-950 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-800 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Growth Notes
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-xs font-medium text-blue-600">
                    1
                  </span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Your proportions show real understanding—keep refining the shoulder angles.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-xs font-medium text-blue-600">
                    2
                  </span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Try adding lighter values in the background to make your subject pop.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-xs font-medium text-blue-600">
                    3
                  </span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Next time: quick 5-min gesture study of hands for more confidence.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
