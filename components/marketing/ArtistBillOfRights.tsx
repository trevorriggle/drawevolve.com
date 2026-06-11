export default function ArtistBillOfRights() {
  const rights = [
    {
      title: "It will never draw for you.",
      body: "No generation. No autocomplete. Your hand only. The coach reads what you made and writes back — nothing in the app touches your canvas. In an era of AI slop, that's a flag, not a footnote.",
    },
    {
      title: "Your art stays yours.",
      body: "We don't publish, sell, or sublicense your drawings. They aren't used to train models. Not now. Not later.",
    },
    {
      title: "Delete on demand.",
      body: "Wipe your account, your drawings, and your critique history any time. One tap.",
    },
    {
      title: "Plain language about changes.",
      body: "If how the product works changes meaningfully, we tell you in plain language first, before it happens.",
    },
  ];

  return (
    <section id="ethos" className="relative py-24 sm:py-32 border-t border-seam">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-bone-mute mb-4">
            Our ethos · mentor, not replacement
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-bone text-balance max-w-2xl">
            Four promises in writing.
          </h2>
        </div>

        <ul className="space-y-10">
          {rights.map((right, i) => (
            <li
              key={right.title}
              className="grid grid-cols-12 gap-6 border-t border-seam pt-8"
            >
              <span className="col-span-2 sm:col-span-1 font-mono text-sm text-sang-soft pt-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="col-span-10 sm:col-span-11">
                <h3 className="font-display text-2xl sm:text-3xl text-bone mb-2">
                  {right.title}
                </h3>
                <p className="text-lg leading-relaxed text-bone-soft text-pretty max-w-2xl">
                  {right.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
