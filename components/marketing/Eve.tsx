export default function Eve() {
  return (
    <section id="eve" className="relative py-24 sm:py-32 bg-studio-2 border-t border-seam">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="text-xs uppercase tracking-[0.22em] text-bone-mute mb-4">
            DrawEvolve, powered by Eve
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-bone text-balance">
            The critics judge the work. Eve coaches the artist.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-bone-soft text-pretty">
            <p>
              Eve is a fifth, separate voice — a warm, persistent coach you
              can just talk to. She reads your critiques and helps you make
              sense of them: what to tackle first, why an exercise was
              assigned, what &ldquo;lost edge&rdquo; even means.
            </p>
            <p>
              She doesn&rsquo;t write the critiques, and she won&rsquo;t
              pretend to. Ask her to judge your drawing and she&rsquo;ll send
              you to Get Feedback. The critics keep their honesty; Eve keeps
              the relationship.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 self-center" role="figure" aria-label="A short conversation with Eve">
          <div className="space-y-4 max-w-md lg:ml-auto">
            <div className="bg-studio border border-seam rounded-2xl rounded-br-md px-5 py-4 ml-10">
              <p className="text-[15px] leading-relaxed text-bone-soft">
                The Crit just told me to &ldquo;knock the head back.&rdquo;
                Knock it back where??
              </p>
            </div>
            <div className="bg-studio-3 border border-seam rounded-2xl rounded-bl-md px-5 py-4 mr-10">
              <p className="text-[11px] uppercase tracking-[0.18em] text-sang-soft mb-2">
                Eve
              </p>
              <p className="text-[15px] leading-relaxed text-bone">
                Ha — it means soften it, not erase it. The face is more
                finished than everything else, so it pops forward. Blur an
                edge or two and let the body catch up. Want me to pull up
                what the Mentor said about your edges last week? It connects.
              </p>
            </div>
            <div className="bg-studio border border-seam rounded-2xl rounded-br-md px-5 py-4 ml-10">
              <p className="text-[15px] leading-relaxed text-bone-soft">
                Can you just critique it for me?
              </p>
            </div>
            <div className="bg-studio-3 border border-seam rounded-2xl rounded-bl-md px-5 py-4 mr-10">
              <p className="text-[11px] uppercase tracking-[0.18em] text-sang-soft mb-2">
                Eve
              </p>
              <p className="text-[15px] leading-relaxed text-bone">
                Not my chair. Tap Get Feedback and pick your critic —
                I&rsquo;ll be here when the verdict lands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
