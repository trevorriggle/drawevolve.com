import Image from "next/image";

export default function DemoTeaser() {
  return (
    <section id="demo" className="relative py-24 sm:py-32 bg-paper-warm border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-ink-mute mb-4">
            What you get back
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight text-ink text-balance">
            A few honest notes. Not a rewrite of your drawing.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <figure className="lg:col-span-7">
            <div className="aspect-[4/3] bg-paper border border-rule overflow-hidden">
              <Image
                src="/marketing/ipad-screenshot.png"
                alt="A drawing in progress on iPad"
                width={800}
                height={600}
                className="w-full h-full object-contain"
              />
            </div>
            <figcaption className="mt-3 text-sm text-ink-mute italic">
              Your sketch — kept private.
            </figcaption>
          </figure>

          <div className="lg:col-span-5">
            <div className="border-l-2 border-accent pl-6">
              <p className="text-sm uppercase tracking-[0.2em] text-accent-deep mb-3">
                Growth notes
              </p>
              <ol className="space-y-7">
                <li>
                  <p className="font-serif text-xl text-ink mb-1">
                    Strong foundations
                  </p>
                  <p className="text-base leading-relaxed text-ink-soft text-pretty">
                    Your proportions read well. Push the shoulder line a touch — the right side is sitting higher than the left.
                  </p>
                </li>
                <li>
                  <p className="font-serif text-xl text-ink mb-1">
                    Light and atmosphere
                  </p>
                  <p className="text-base leading-relaxed text-ink-soft text-pretty">
                    Background values are competing with the face. Try knocking them back half a step so the head reads first.
                  </p>
                </li>
                <li>
                  <p className="font-serif text-xl text-ink mb-1">
                    Try next
                  </p>
                  <p className="text-base leading-relaxed text-ink-soft text-pretty">
                    Five minutes of loose gesture sketching before your next session — see if it carries into your line confidence.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
