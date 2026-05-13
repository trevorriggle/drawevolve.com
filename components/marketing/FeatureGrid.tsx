export default function FeatureGrid() {
  const steps = [
    {
      title: "Pick your focus",
      body: "Tell us what you're working on — portraits, gesture, perspective, anatomy. Feedback comes back tuned to that.",
    },
    {
      title: "Draw the way you draw",
      body: "Pencil on iPad. No special tools, no parlor tricks. Sketch the way you already sketch.",
    },
    {
      title: "Send it",
      body: "One tap. Your drawing is critiqued privately — never published, never sold.",
    },
    {
      title: "Read the notes",
      body: "A short read: what's working, where to push, and one small thing to try next session. History is kept so you can see yourself improve.",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 border-t border-rule">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-ink-mute mb-4">
            How it works
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight text-ink text-balance">
            Four steps. No miracle cure for drawing.
          </h2>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-ink pt-6">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-2xl text-ink-mute tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl text-ink">{step.title}</h3>
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
