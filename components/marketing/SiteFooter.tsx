export default function SiteFooter() {
  return (
    <footer className="bg-studio border-t border-seam">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <p className="font-display text-xl text-bone tracking-tight">
              Draw<em className="italic text-sang-soft">Evolve</em>
            </p>
            <p className="mt-4 text-sm text-bone-mute max-w-xs">
              A drawing app with a coach that remembers. It will never draw
              for you.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="/privacy" className="text-bone-soft hover:text-bone underline underline-offset-4 decoration-seam hover:decoration-bone transition-colors">
              Privacy
            </a>
            <a href="/terms" className="text-bone-soft hover:text-bone underline underline-offset-4 decoration-seam hover:decoration-bone transition-colors">
              Terms
            </a>
            <a href="mailto:trevor@drawevolve.com" className="text-bone-soft hover:text-bone underline underline-offset-4 decoration-seam hover:decoration-bone transition-colors">
              Contact
            </a>
            <a href="https://x.com/drawevolve" target="_blank" rel="noopener noreferrer" className="text-bone-soft hover:text-bone underline underline-offset-4 decoration-seam hover:decoration-bone transition-colors">
              X
            </a>
            <a href="https://instagram.com/drawevolveapp" target="_blank" rel="noopener noreferrer" className="text-bone-soft hover:text-bone underline underline-offset-4 decoration-seam hover:decoration-bone transition-colors">
              Instagram
            </a>
          </nav>
        </div>

        <p className="mt-10 pt-6 border-t border-seam text-xs text-bone-mute">
          A product of RIG Tech, LLC · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
