"use client";

import { useEffect, useState } from "react";

export default function EmailCapture() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Trigger fade-in animation
    setIsVisible(true);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="waitlist"
      className="relative py-24 sm:py-32 bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden carbon-fiber-subtle"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative mx-auto max-w-2xl px-6 lg:px-8">
        {/* Card with fade-in animation */}
        <div
          className={`
            bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8
            shadow-2xl border border-white/20
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className="text-center mb-6">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
              iPad Beta Waitlist
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-xl mx-auto leading-relaxed">
              Be first to try DrawEvolve. We will invite testers in waves and send occasional progress notes. No spam.
            </p>
          </div>

          {/* Tally form container with custom styling */}
          <div className="mt-6 relative">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <iframe
                data-tally-src="https://tally.so/embed/nPV1G0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="200"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="iPad Beta Waitlist"
                className="mx-auto"
              ></iframe>
            </div>
          </div>

          {/* Made with Tally badge - subtle and repositioned */}
          <div className="mt-6 text-center">
            <a
              href="https://tally.so"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white/60 transition-colors"
            >
              <span>Made with</span>
              <span className="font-semibold">Tally</span>
            </a>
          </div>
        </div>
      </div>

      {/* Custom animation keyframes via style tag */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
