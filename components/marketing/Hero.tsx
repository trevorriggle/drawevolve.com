import PortraitSketch from "./PortraitSketch";

export default function Hero() {
  return (
    <section className="relative px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.22em] text-bone-mute mb-7">
            An iOS studio · iPad &amp; iPhone · free during beta
          </p>
          <h1 className="font-display text-[clamp(2.6rem,5.6vw,4.6rem)] leading-[1.04] text-bone text-balance">
            You came back to the easel.{" "}
            <em className="italic text-sang-soft">Your coach noticed.</em>
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-bone-soft max-w-xl text-pretty">
            DrawEvolve is a full drawing studio with an AI coach that rereads
            its own past critiques before writing the next one. Draw, get an
            honest read, act on it — and the second pass knows whether you did.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
            <a
              href="#get-app"
              className="inline-flex items-center justify-center rounded-full bg-bone px-7 py-3.5 text-base font-medium text-studio hover:bg-sang transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bone"
            >
              Get the beta
            </a>
            <p className="text-sm text-bone-mute">
              It will never draw for you.{" "}
              <span className="text-bone-soft">That&rsquo;s the point.</span>
            </p>
          </div>
        </div>

        {/* the wall: a sketch pinned above tonight's critique */}
        <div
          className="lg:col-span-5 relative min-h-[480px] sm:min-h-[540px]"
          aria-label="A sketch pinned to the studio wall above a critique note"
        >
          <div className="absolute top-0 right-[4%] w-[min(330px,80%)] -rotate-2 bg-studio-2 border border-seam p-4 pb-3 shadow-[0_30px_60px_rgba(0,0,0,0.45)]">
            <span className="tape" aria-hidden="true" />
            <PortraitSketch
              pass={1}
              className="block w-full h-auto"
              label="Placeholder portrait sketch — pass one"
            />
            <p className="mt-3 flex justify-between text-[11px] uppercase tracking-[0.18em] text-bone-mute">
              <span>Pass 01</span>
              <span>Tuesday, 11:42 pm</span>
            </p>
          </div>

          <div className="absolute bottom-[2%] left-0 w-[min(300px,72%)] rotate-[1.6deg] bg-studio-2 border border-seam px-6 py-5 shadow-[0_30px_60px_rgba(0,0,0,0.45)]">
            <span className="tape" aria-hidden="true" />
            <p className="text-[11px] uppercase tracking-[0.18em] text-bone-mute mb-3">
              Critique · Studio Mentor
            </p>
            <p className="font-display italic text-[17px] leading-normal text-bone">
              &ldquo;The likeness is arriving. But{" "}
              <span className="mark-sang">
                the shadow side of the face is the same value as the lit side
              </span>{" "}
              — squint and the head goes flat. Push the dark under the jaw,
              then show me.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
