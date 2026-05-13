export default function AboutStory() {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-rule">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-ink-mute mb-6">
          Why this exists
        </p>
        <h2 className="font-display text-4xl sm:text-5xl leading-tight tracking-tight text-ink text-balance">
          Drawing is a slow skill.
        </h2>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink-soft text-pretty">
          <p>
            The hard part isn&rsquo;t picking up the pencil. The hard part is getting useful feedback often enough to actually improve. Most artists have one critique partner if they&rsquo;re lucky, an art-school teacher if they were lucky earlier, or a feed of strangers who don&rsquo;t know what you were trying to do.
          </p>
          <p>
            DrawEvolve is a working studio in your pocket. Real brushes. Real layers. A coach who knows what you asked it to watch for, and remembers what it said last time.
          </p>
        </div>

        <figure className="mt-12 border-l-2 border-accent pl-6">
          <blockquote className="font-display text-xl sm:text-2xl text-ink leading-snug text-pretty">
            &ldquo;I built DrawEvolve because I wanted a teacher who remembered what they said last week, and didn&rsquo;t have one.&rdquo;
          </blockquote>
          <figcaption className="mt-3 text-sm uppercase tracking-[0.2em] text-ink-mute">
            Trevor Riggle, founder
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
