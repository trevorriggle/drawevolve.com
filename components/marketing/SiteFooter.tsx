export default function SiteFooter() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              DrawEvolve
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a
              href="/privacy"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Terms
            </a>
            <a
              href="mailto:hello@drawevolve.com"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
            <a
              href="https://twitter.com/drawevolve"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              X
            </a>
          </nav>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} DrawEvolve. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
