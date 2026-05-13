export default function CoachVoices() {
  const voices = [
    {
      name: "Studio Mentor",
      role: "Honest, balanced. Praises what works before pushing on what doesn't.",
      sample:
        "Your line confidence is up from last week. Two things tugging at me: the right hand is reading flatter than the left, and the negative space between the legs wants tightening.",
    },
    {
      name: "The Crit",
      role: "MFA peer review. Direct. Brings up what the others are too polite to say.",
      sample:
        "The face is finished and the body is sketched. Pick one. Either commit the rest to the same level of finish or knock the head back.",
    },
    {
      name: "Fundamentals Coach",
      role: "Drills the basics. Proportion, value, perspective. Will assign a five-minute exercise without asking.",
      sample:
        "Proportion check: the head is half a unit too small for the shoulder span. Try this: five quick gestures, head-to-shoulder ratio only, three minutes each.",
    },
    {
      name: "Renaissance Master",
      role: "A Florentine workshop persona. Treats every drawing like it's going on a chapel wall.",
      sample:
        "The light falls from above and behind. Let it. Your shadows are timid. A workshop apprentice would deepen them, then we would see if the figure stands.",
    },
  ];

  return (
    <section id="voices" className="relative py-24 sm:py-32 bg-paper-warm border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-ink-mute mb-4">
            The voices
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight tracking-tight text-ink text-balance">
            Four coaches. Pick the one you can hear.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {voices.map((v) => (
            <article key={v.name} className="bg-paper border border-rule p-6 sm:p-8 flex flex-col">
              <h3 className="font-display text-2xl text-ink">{v.name}</h3>
              <p className="mt-2 text-sm text-ink-mute text-pretty">{v.role}</p>
              <blockquote className="mt-5 border-l-2 border-accent pl-4 text-base leading-relaxed text-ink-soft text-pretty italic">
                &ldquo;{v.sample}&rdquo;
              </blockquote>
            </article>
          ))}
        </div>

        <p className="mt-12 text-base text-ink-soft text-pretty max-w-xl">
          Or write your own. A line describing the teacher you want, in your words. Save it. Use it again.
        </p>
      </div>
    </section>
  );
}
