import Reveal from "./Reveal";

const CATEGORIES = [
  "value",
  "line",
  "anatomy",
  "color",
  "composition",
  "perspective",
  "subject",
  "general",
];

export default function Evolution() {
  const record = [
    {
      when: "WK 1 · pass 01",
      what: <>“Shadow side matches the lit side — <b className="font-medium text-bone">flat</b>.”</>,
      chip: { text: "⚑ flagged", cls: "border-sang/40 text-sang-soft" },
    },
    {
      when: "WK 1 · pass 02",
      what: <>“Darks under the jaw are <b className="font-medium text-bone">doing real work now</b>.”</>,
      chip: { text: "✓ addressed", cls: "border-moss/40 text-moss" },
    },
    {
      when: "WK 4 · new piece",
      what: <>“Same instinct that fixed the portrait — <b className="font-medium text-bone">apply it to this torso</b>.”</>,
      chip: { text: "→ carried over", cls: "border-amber/40 text-amber" },
    },
    {
      when: "WK 9 · new piece",
      what: <>“Value isn&rsquo;t your weak point anymore. <b className="font-medium text-bone">Edges are.</b> Switching focus.”</>,
      chip: { text: "✓ climbing", cls: "border-moss/40 text-moss" },
    },
  ];

  return (
    <section id="evolution" className="relative py-24 sm:py-32 bg-studio-2 border-t border-seam">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-sang-soft mb-4">
            My Evolution · the payoff
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-bone text-balance">
            Watch yourself get better — as a record, not a feeling.
          </h2>
          <p className="mt-5 text-lg text-bone-soft text-pretty">
            Every critique is classified into eight skill categories and
            charted over time. The radar fills in as the record grows.
          </p>
        </div>

        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <figure className="lg:col-span-5 reveal-item">
              <div className="bg-studio border border-seam p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone-mute">
                  Skill radar · 8 categories
                </p>
                <svg
                  viewBox="0 0 360 340"
                  className="mt-2 w-full h-auto"
                  role="img"
                  aria-label={`Radar chart comparing week one and week nine across ${CATEGORIES.join(", ")}`}
                >
                  <g transform="translate(180,170)">
                    <g fill="none" stroke="var(--seam)">
                      <polygon points="0,-120 84.9,-84.9 120,0 84.9,84.9 0,120 -84.9,84.9 -120,0 -84.9,-84.9" />
                      <polygon points="0,-90 63.6,-63.6 90,0 63.6,63.6 0,90 -63.6,63.6 -90,0 -63.6,-63.6" />
                      <polygon points="0,-60 42.4,-42.4 60,0 42.4,42.4 0,60 -42.4,42.4 -60,0 -42.4,-42.4" />
                      <polygon points="0,-30 21.2,-21.2 30,0 21.2,21.2 0,30 -21.2,21.2 -30,0 -21.2,-21.2" />
                      <path d="M0,-120 L0,120 M-120,0 L120,0 M-84.9,-84.9 L84.9,84.9 M84.9,-84.9 L-84.9,84.9" />
                    </g>
                    <polygon
                      points="0,-48 28.3,-28.3 36,0 21.2,21.2 0,42 -25.5,25.5 -54,0 -29.7,-29.7"
                      fill="rgba(135,123,105,0.16)"
                      stroke="var(--bone-mute)"
                      strokeWidth="1.5"
                    />
                    <polygon
                      className="radar-now"
                      points="0,-96 59.4,-59.4 78,0 46.7,46.7 0,78 -46.7,46.7 -96,0 -67.9,-67.9"
                      fill="rgba(210,100,63,0.14)"
                      stroke="var(--sang)"
                      strokeWidth="2"
                    />
                    <g
                      fontSize="10.5"
                      fill="var(--bone-soft)"
                      textAnchor="middle"
                      fontFamily="var(--font-mono), monospace"
                    >
                      <text y="-132">value</text>
                      <text x="104" y="-96">line</text>
                      <text x="142" y="4">anatomy</text>
                      <text x="104" y="104">color</text>
                      <text y="138">composition</text>
                      <text x="-104" y="104">perspective</text>
                      <text x="-138" y="4">subject</text>
                      <text x="-104" y="-96">general</text>
                    </g>
                  </g>
                </svg>
                <figcaption className="mt-2 flex gap-6 font-mono text-[11px] text-bone-mute">
                  <span>
                    <i className="inline-block w-4 h-0.5 bg-bone-mute align-middle mr-2" />
                    week 1
                  </span>
                  <span className="text-sang-soft">
                    <i className="inline-block w-4 h-0.5 bg-sang align-middle mr-2" />
                    week 9
                  </span>
                </figcaption>
              </div>
            </figure>

            <div className="lg:col-span-7 reveal-item">
              <div className="bg-studio border border-seam">
                <p className="px-6 py-4 border-b border-seam font-mono text-[11px] uppercase tracking-[0.14em] text-bone-mute">
                  The record · filtered to &ldquo;value&rdquo;
                </p>
                {record.map((row) => (
                  <div
                    key={row.when}
                    className="grid grid-cols-[110px_1fr] sm:grid-cols-[120px_1fr_auto] gap-x-5 gap-y-2 items-center px-6 py-4 border-b border-seam last:border-b-0"
                  >
                    <span className="font-mono text-[11px] text-bone-mute uppercase">
                      {row.when}
                    </span>
                    <span className="text-[14.5px] text-bone-soft">
                      {row.what}
                    </span>
                    <span
                      className={`col-start-2 sm:col-start-3 justify-self-start font-mono text-[11px] border px-2.5 py-1 rounded ${row.chip.cls}`}
                    >
                      {row.chip.text}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-base text-bone-soft text-pretty max-w-xl">
                A studio wall of every past critique, filterable by category.
                Watch what changed, and when — growth as data, not vibes.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
