export default function WhatsInside() {
  const drawing = [
    {
      title: "Six calibrated brushes.",
      body: "Pencil, brush, ink pen, marker, airbrush, charcoal. Each with its own shape and feel.",
    },
    {
      title: "Multi-layer canvas.",
      body: "Undo, redo, the basics that should be table stakes.",
    },
    {
      title: "The full toolkit.",
      body: "Eraser, smudge, blur, paint bucket, eyedropper, shapes, and text along a curve.",
    },
    {
      title: "Selection that works.",
      body: "Marquee or lasso. Free scale and rotate.",
    },
    {
      title: "Symmetry and pose overlays.",
      body: "Mirror modes for anything with an axis. Trace a hand or body from a photo.",
    },
    {
      title: "Touch or Apple Pencil.",
      body: "iPad gets the most room. iPhone works too.",
    },
  ];

  const critique = [
    {
      title: "Four built-in coach voices.",
      body: "Pick whichever fits the session.",
    },
    {
      title: "Custom prompts.",
      body: "Tune focus, tone, and depth. Save the ones that work and reuse them.",
    },
    {
      title: "Or write your own.",
      body: "Describe the teacher you want in a single line. \"A retired sumi-e master who critiques in haiku,\" for example.",
    },
    {
      title: "Summary first, depth on tap.",
      body: "Every critique opens with bullets. The full text is one tap away.",
    },
    {
      title: "My Evolution.",
      body: "A skill radar across eight categories. A studio wall of past critiques you can filter.",
    },
  ];

  return (
    <section id="inside" className="relative py-24 sm:py-32 border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-ink-mute mb-4">
            Inside the app
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight tracking-tight text-ink text-balance">
            Two halves of one studio.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent-deep mb-6">
              Drawing
            </p>
            <ul className="space-y-6">
              {drawing.map((item) => (
                <li key={item.title} className="border-t border-rule pt-4">
                  <p className="font-display text-xl text-ink mb-1">{item.title}</p>
                  <p className="text-base leading-relaxed text-ink-soft text-pretty">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent-deep mb-6">
              Critique
            </p>
            <ul className="space-y-6">
              {critique.map((item) => (
                <li key={item.title} className="border-t border-rule pt-4">
                  <p className="font-display text-xl text-ink mb-1">{item.title}</p>
                  <p className="text-base leading-relaxed text-ink-soft text-pretty">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
