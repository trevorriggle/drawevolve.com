import PortraitSketch from "./PortraitSketch";
import Reveal from "./Reveal";

/**
 * The moat section: iterative + cross-drawing critique memory, shown as
 * two passes of the same drawing with the second critique's receipts.
 */
export default function SecondPass() {
  return (
    <section id="memory" className="relative py-24 sm:py-32 bg-studio-2 border-t border-seam">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-sang-soft mb-4">
            Two nights, one drawing
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-bone text-balance">
            The second critique reads the first one before it says a word.
          </h2>
        </div>

        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
            <figure className="lg:col-span-3 reveal-item">
              <div className="bg-studio border border-seam p-4">
                <PortraitSketch
                  pass={1}
                  className="block w-full h-auto"
                  label="Pass one of a portrait — values flagged as flat"
                />
              </div>
              <figcaption className="mt-3 flex justify-between text-[11px] uppercase tracking-[0.18em] text-bone-mute">
                <span>Pass 01 · Tue 23:42</span>
              </figcaption>
              <p className="mt-3 font-mono text-[11px] tracking-[0.06em]">
                <span className="inline-block border border-sang/40 text-sang-soft px-2.5 py-1 rounded">
                  ⚑ OPEN · value structure
                </span>
              </p>
            </figure>

            <figure className="lg:col-span-3 reveal-item">
              <div className="bg-studio border border-sang/50 p-4">
                <PortraitSketch
                  pass={2}
                  className="block w-full h-auto"
                  label="Pass two of the same portrait — shadow shapes committed"
                />
              </div>
              <figcaption className="mt-3 flex justify-between text-[11px] uppercase tracking-[0.18em] text-bone-mute">
                <span>Pass 02 · Thu 21:08</span>
              </figcaption>
              <p className="mt-3 flex flex-wrap gap-2 font-mono text-[11px] tracking-[0.06em]">
                <span className="inline-block border border-moss/40 text-moss px-2.5 py-1 rounded">
                  ✓ ADDRESSED · value structure
                </span>
                <span className="inline-block border border-amber/40 text-amber px-2.5 py-1 rounded">
                  → NEXT · edge control
                </span>
              </p>
            </figure>

            <div className="lg:col-span-6 lg:pl-6 border-l-2 border-sang pl-6 reveal-item">
              <p className="text-[11px] uppercase tracking-[0.18em] text-sang-soft mb-5">
                Critique 02 · same drawing
              </p>
              <blockquote className="font-display text-2xl sm:text-[1.7rem] leading-snug text-bone text-pretty">
                &ldquo;
                <em className="italic text-sang-soft">
                  <span className="coach-underline">
                    You fixed the value structure I flagged last time.
                  </span>
                </em>{" "}
                The head turns now. So let&rsquo;s talk about what the shadows
                revealed: that jaw edge is too hard where it should melt into
                the neck.&rdquo;
              </blockquote>
              <p className="mt-5 text-sm text-bone-mute">
                Studio Mentor · read its own Pass 01 critique before writing
                this
              </p>

              <div className="mt-9 pt-7 border-t border-seam space-y-5 text-base leading-relaxed text-bone-soft text-pretty">
                <p>
                  It works across drawings, too. Start a new piece and the
                  coach can call back to what it told you on the last few —
                  &ldquo;same instinct that fixed the portrait, apply it to
                  this torso.&rdquo;
                </p>
                <p className="font-display text-xl text-bone">
                  A real teacher remembers. That&rsquo;s the entire reason
                  DrawEvolve exists. It compounds.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
