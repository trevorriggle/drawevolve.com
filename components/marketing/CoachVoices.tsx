export default function CoachVoices() {
  const voices = [
    {
      name: "Studio Mentor",
      role: "Honest, balanced. Praises what works before pushing on what doesn't.",
      sample:
        "Your line confidence is up from last week. Two things tugging at me: the right hand is reading flatter than the left, and the negative space between the legs wants tightening.",
      tilt: "-rotate-1",
    },
    {
      name: "The Crit",
      role: "MFA peer review. Direct. Brings up what the others are too polite to say.",
      sample:
        "The face is finished and the body is sketched. Pick one. Either commit the rest to the same level of finish or knock the head back.",
      tilt: "rotate-[0.75deg]",
    },
    {
      name: "Fundamentals Coach",
      role: "Drills the basics. Proportion, value, perspective. Will assign a five-minute exercise without asking.",
      sample:
        "Proportion check: the head is half a unit too small for the shoulder span. Try this: five quick gestures, head-to-shoulder ratio only, three minutes each.",
      tilt: "rotate-1",
    },
    {
      name: "Renaissance Master",
      role: "A Florentine workshop persona. Treats every drawing like it's going on a chapel wall.",
      sample:
        "The light falls from above and behind. Let it. Your shadows are timid. A workshop apprentice would deepen them, then we would see if the figure stands.",
      tilt: "-rotate-[0.75deg]",
    },
  ];

  return (
    <section id="voices" className="relative py-24 sm:py-32 border-t border-seam">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-bone-mute mb-4">
            The voices
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-bone text-balance">
            Choose whose studio you stand in.
          </h2>
          <p className="mt-5 text-lg text-bone-soft text-pretty">
            This isn&rsquo;t a generic feedback button. Four critics with real
            differences — and the differences are the feature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {voices.map((v) => (
            <article
              key={v.name}
              className={`relative bg-studio-2 border border-seam p-6 sm:p-8 ${v.tilt}`}
            >
              <span className="tape" aria-hidden="true" />
              <h3 className="font-display text-2xl text-bone">{v.name}</h3>
              <p className="mt-2 text-sm text-bone-mute text-pretty">{v.role}</p>
              <blockquote className="mt-5 border-l-2 border-sang pl-4 font-display italic text-[17px] leading-relaxed text-bone-soft text-pretty">
                &ldquo;{v.sample}&rdquo;
              </blockquote>
            </article>
          ))}
        </div>

        <p className="mt-14 text-base text-bone-soft text-pretty max-w-xl">
          Or build your own. Describe the teacher you want in a line —{" "}
          <em className="font-display italic text-bone">
            &ldquo;a retired sumi-e master who critiques in haiku&rdquo;
          </em>{" "}
          — save it, and use it again.
        </p>
      </div>
    </section>
  );
}
