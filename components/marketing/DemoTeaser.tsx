import Image from "next/image";

export default function DemoTeaser() {
  return (
    <section id="demo" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            See what AI sees
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Your sketches transformed into actionable insights in seconds.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
            <Image
              src="/marketing/demo.png"
              alt="DrawEvolve AI analysis demo"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
              <p className="text-white text-lg font-medium">
                What AI sees: composition, color theory, spatial relationships, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
