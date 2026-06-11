export default function TheLoop() {
  const steps = [
    {
      title: "Draw.",
      body: "A real Metal canvas. Six brushes, layers with blend modes, symmetry, pose reference. Make a thing.",
    },
    {
      title: "Get critiqued.",
      body: "Tap Get Feedback and pick a voice. An opinionated read comes back — private to you, summary first.",
    },
    {
      title: "Act on it.",
      body: "Push the darks. Fix the proportion. Do the five-minute exercise it assigned. Or don't — it'll notice either way.",
    },
    {
      title: "Get re-critiqued.",
      body: "The next critique reads the previous ones first — on this drawing, and across your recent work. It says out loud whether you moved.",
    },
    {
      title: "Watch the graph climb.",
      body: "Every critique feeds My Evolution: eight skill categories, charted over time. Improvement you can point at.",
    },
  ];

  return (
    <section id="loop" className="relative py-24 sm:py-32 border-t border-seam">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-bone-mute mb-4">
            The loop
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-bone text-balance">
            Every drawing app sells tools. This one sells a loop.
          </h2>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-seam pt-5">
              <span className="font-mono text-xs text-sang-soft tracking-[0.1em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-2xl text-bone">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-bone-soft text-pretty">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
