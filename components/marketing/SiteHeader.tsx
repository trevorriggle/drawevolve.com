type Props = {
  hrefPrefix?: string;
};

export default function SiteHeader({ hrefPrefix = "" }: Props) {
  return (
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur-md border-b border-rule">
      <nav className="mx-auto max-w-6xl px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="/" className="flex items-center" aria-label="DrawEvolve home">
          <img
            src="/logo.png"
            alt="DrawEvolve"
            className="h-7 w-auto"
            width={1129}
            height={372}
          />
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm">
          <a href={`${hrefPrefix}#how-it-works`} className="text-ink-soft hover:text-ink transition-colors">
            How it works
          </a>
          <a href={`${hrefPrefix}#demo`} className="text-ink-soft hover:text-ink transition-colors">
            See it
          </a>
          <a href={`${hrefPrefix}#ethos`} className="text-ink-soft hover:text-ink transition-colors">
            Ethos
          </a>
          <a href={`${hrefPrefix}#faq`} className="text-ink-soft hover:text-ink transition-colors">
            FAQ
          </a>
        </div>

        <a
          href={`${hrefPrefix}#get-app`}
          className="inline-flex items-center rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-paper hover:bg-accent-deep transition-colors"
        >
          Get the app
        </a>
      </nav>
    </header>
  );
}
