export default function AboutStory() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-studio-2 border-t border-seam">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.22em] text-bone-mute mb-6">
          Why this exists
        </p>
        <h2 className="font-display text-4xl sm:text-5xl leading-tight text-bone text-balance">
          Drawing is a slow skill.
        </h2>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-bone-soft text-pretty">
          <p>
            The hard part isn&rsquo;t picking up the pencil. The hard part is
            getting useful feedback often enough to actually improve. Most
            artists have one critique partner if they&rsquo;re lucky, an
            art-school teacher if they were lucky earlier, or a feed of
            strangers who don&rsquo;t know what you were trying to do.
          </p>
          <p>
            DrawEvolve is a working studio in your pocket. Real brushes. Real
            layers. Critics who know what you asked them to watch for, and a
            coach who remembers what they said last time.
          </p>
        </div>

        <figure className="mt-12 border-l-2 border-sang pl-6">
          <blockquote className="font-display italic text-xl sm:text-2xl text-bone leading-snug text-pretty">
            &ldquo;I built DrawEvolve because I wanted a teacher who
            remembered what they said last week, and didn&rsquo;t have
            one.&rdquo;
          </blockquote>
          <figcaption className="mt-3 text-xs uppercase tracking-[0.22em] text-bone-mute">
            Trevor Riggle, founder
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
