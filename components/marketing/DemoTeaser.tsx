import Image from "next/image";

export default function DemoTeaser() {
  return (
    <section id="demo" className="relative py-24 sm:py-32 bg-paper-warm border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-ink-mute mb-4">
            Critique two
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight tracking-tight text-ink text-balance">
            A second pass that remembers the first.
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
              Your sketch. Kept private.
            </figcaption>
          </figure>

          <div className="lg:col-span-5">
            <div className="border-l-2 border-accent pl-6">
              <p className="text-sm uppercase tracking-[0.2em] text-accent-deep mb-3">
                Critique 2 · same drawing
              </p>
              <ol className="space-y-7">
                <li>
                  <p className="font-display text-xl text-ink mb-1">
                    Picking up where we left off
                  </p>
                  <p className="text-base leading-relaxed text-ink-soft text-pretty">
                    Last time we worked on value structure. The midtones on the cheek are stronger now. They&rsquo;re carrying the form. Nice.
                  </p>
                </li>
                <li>
                  <p className="font-display text-xl text-ink mb-1">
                    The new thing to push
                  </p>
                  <p className="text-base leading-relaxed text-ink-soft text-pretty">
                    The shadow shape under the jaw is reading flat. There&rsquo;s a soft edge where the neck meets the jawline that wants to disappear into the shadow. Right now it&rsquo;s a hard line.
                  </p>
                </li>
                <li>
                  <p className="font-display text-xl text-ink mb-1">
                    Exercise for next pass
                  </p>
                  <p className="text-base leading-relaxed text-ink-soft text-pretty">
                    Three thumbnail studies of the jaw-to-neck transition. Five minutes. Don&rsquo;t render. Just block the shadow shape.
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
