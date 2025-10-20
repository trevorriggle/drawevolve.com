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
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-850 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                <Image
                  src="/marketing/ipad-screenshot.png"
                  alt="DrawEvolve on iPad"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
                Your sketch
              </p>
            </div>

            {/* Growth Notes - right side */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-950 rounded-2xl p-6 border-2 border-gray-300 dark:border-gray-700 shadow-xl carbon-fiber">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">✏️</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Growth Notes
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-900 dark:bg-gray-100 flex items-center justify-center text-xs font-medium text-white dark:text-gray-900">
                    1
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      Strong Foundations
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Your proportions show genuine understanding — keep refining subtle angles like the shoulders for even better balance.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-900 dark:bg-gray-100 flex items-center justify-center text-xs font-medium text-white dark:text-gray-900">
                    2
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      Light and Atmosphere
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Consider introducing softer background values to make your main subject stand out and feel more dimensional.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-900 dark:bg-gray-100 flex items-center justify-center text-xs font-medium text-white dark:text-gray-900">
                    3
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      Practice Focus
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Next session, try a quick 5 minute gesture sketch to build confidence and loosen up your lines.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
