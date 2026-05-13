export default function FeatureGrid() {
  const steps = [
    {
      title: "Set the scene.",
      body: "Pick a coach. Tell it what you're chasing this session. Proportion, gesture, value, edge control, anatomy, whatever.",
    },
    {
      title: "Draw.",
      body: "Touch or Pencil. Six brushes, layers, pose reference if you need one. Make a thing.",
    },
    {
      title: "Send.",
      body: "One tap. A critique comes back, private to you, summary first.",
    },
    {
      title: "Send again.",
      body: "This is where it gets useful. The coach reads what it told you on this drawing before. It checks whether you addressed it. Then it pushes on the next thing.",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 border-t border-rule">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-ink-mute mb-4">
            How it works
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight tracking-tight text-ink text-balance">
            Four steps. Same routine every time.
          </h2>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-ink pt-6">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-2xl text-ink-mute tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-ink">{step.title}</h3>
              </div>
              <p className="mt-3 text-base leading-relaxed text-ink-soft text-pretty">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
