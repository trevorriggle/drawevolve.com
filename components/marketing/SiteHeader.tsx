type Props = {
  hrefPrefix?: string;
};

export default function SiteHeader({ hrefPrefix = "" }: Props) {
  return (
    <header className="sticky top-0 z-50 bg-studio/85 backdrop-blur-md border-b border-seam">
      <nav className="mx-auto max-w-6xl px-6 lg:px-8 flex items-center justify-between h-16">
        <a
          href="/"
          className="font-display text-xl text-bone tracking-tight"
          aria-label="DrawEvolve home"
        >
          Draw<em className="italic text-sang-soft">Evolve</em>
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm">
          <a href={`${hrefPrefix}#loop`} className="text-bone-soft hover:text-bone transition-colors">
            The loop
          </a>
          <a href={`${hrefPrefix}#voices`} className="text-bone-soft hover:text-bone transition-colors">
            Voices
          </a>
          <a href={`${hrefPrefix}#eve`} className="text-bone-soft hover:text-bone transition-colors">
            Eve
          </a>
          <a href={`${hrefPrefix}#evolution`} className="text-bone-soft hover:text-bone transition-colors">
            Evolution
          </a>
          <a href={`${hrefPrefix}#faq`} className="text-bone-soft hover:text-bone transition-colors">
            FAQ
          </a>
        </div>

        <a
          href={`${hrefPrefix}#get-app`}
          className="inline-flex items-center rounded-full border border-sang px-4 py-1.5 text-sm font-medium text-bone hover:bg-sang hover:text-studio transition-colors"
        >
          Get the beta
        </a>
      </nav>
    </header>
  );
}
