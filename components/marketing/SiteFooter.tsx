export default function SiteFooter() {
  return (
    <footer className="bg-paper border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <p className="font-serif text-2xl text-ink leading-none">DrawEvolve</p>
            <p className="mt-3 text-sm text-ink-mute max-w-xs">
              A drawing companion for iPad. You draw; we send back a short critique.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="/privacy" className="text-ink-soft hover:text-ink underline underline-offset-4 decoration-rule hover:decoration-ink transition-colors">
              Privacy
            </a>
            <a href="/terms" className="text-ink-soft hover:text-ink underline underline-offset-4 decoration-rule hover:decoration-ink transition-colors">
              Terms
            </a>
            <a href="mailto:trevor@drawevolve.com" className="text-ink-soft hover:text-ink underline underline-offset-4 decoration-rule hover:decoration-ink transition-colors">
              Contact
            </a>
            <a href="https://x.com/drawevolve" target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-ink underline underline-offset-4 decoration-rule hover:decoration-ink transition-colors">
              X
            </a>
            <a href="https://instagram.com/drawevolveapp" target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-ink underline underline-offset-4 decoration-rule hover:decoration-ink transition-colors">
              Instagram
            </a>
          </nav>
        </div>

        <p className="mt-10 pt-6 border-t border-rule text-xs text-ink-mute">
          A product of RIG Tech, LLC · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
