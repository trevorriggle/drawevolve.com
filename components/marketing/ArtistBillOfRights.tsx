export default function ArtistBillOfRights() {
  const rights = [
    {
      title: "Your art stays yours.",
      body: "We don't publish, sell, or sublicense your drawings. Not now. Not later.",
    },
    {
      title: "No auto-finishing.",
      body: "The coach reads. You draw. Nothing in the app touches your canvas.",
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
    <section id="ethos" className="relative py-24 sm:py-32 bg-ink text-paper">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-paper/60 mb-4">
            Our ethos
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight tracking-tight text-paper text-balance max-w-2xl">
            Four promises in writing.
          </h2>
        </div>

        <ul className="space-y-10">
          {rights.map((right, i) => (
            <li key={right.title} className="grid grid-cols-12 gap-6 border-t border-paper/15 pt-8">
              <span className="col-span-2 sm:col-span-1 font-display text-2xl text-paper/40 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="col-span-10 sm:col-span-11">
                <h3 className="font-display text-2xl sm:text-3xl text-paper mb-2">
                  {right.title}
                </h3>
                <p className="text-lg leading-relaxed text-paper/75 text-pretty max-w-2xl">
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
