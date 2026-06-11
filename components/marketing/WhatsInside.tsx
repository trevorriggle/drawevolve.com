export default function WhatsInside() {
  const canvas = [
    {
      title: "Six calibrated brushes.",
      body: "Pencil, brush, ink pen, marker, airbrush, charcoal — with a wet-ink stroke system underneath.",
    },
    {
      title: "A full layers panel.",
      body: "Add, delete, reorder, opacity, blend modes, visibility. Undo and redo that go deep.",
    },
    {
      title: "The whole toolkit.",
      body: "Eraser, smudge, blur brush, paint bucket, eyedropper, shapes, text — including type on a path.",
    },
    {
      title: "Selection that works.",
      body: "Marquee or lasso, move, free transform with scale and rotate.",
    },
    {
      title: "Pose reference built in.",
      body: "Trace a hand or full body from a photo, mapped by Apple's Vision framework.",
    },
    {
      title: "Touch or Apple Pencil.",
      body: "iPad gets the most room. iPhone works too, and sync keeps your layers intact between them.",
    },
  ];

  return (
    <section id="inside" className="relative py-24 sm:py-32 border-t border-seam">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-bone-mute mb-4">
            The canvas
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-bone text-balance">
            A Metal-backed studio, not a sketch toy.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
            {canvas.map((item) => (
              <li key={item.title} className="border-t border-seam pt-4">
                <p className="font-display text-xl text-bone mb-1">
                  {item.title}
                </p>
                <p className="text-[15px] leading-relaxed text-bone-soft text-pretty">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>

          <aside className="lg:col-span-5">
            <div className="relative bg-studio-2 border border-seam p-7 sm:p-8 rotate-[0.75deg]">
              <span className="tape" aria-hidden="true" />
              <p className="text-[11px] uppercase tracking-[0.18em] text-sang-soft mb-4">
                The symmetry mirror
              </p>
              <p className="font-display text-2xl leading-snug text-bone text-pretty">
                Mirror modes for anything with an axis — faces, vases,
                mandalas, wings.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-bone-soft text-pretty">
                Draw one side, watch the other appear, flip and recenter when
                you change your mind. It&rsquo;s the feature we built to win
                over the toughest reviewer we know: the founder&rsquo;s dad,
                a lifelong Sketchbook loyalist.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
