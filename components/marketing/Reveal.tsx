"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Adds the "revealed" class once the element scrolls into view, which
 * triggers the CSS-only animations defined in globals.css (coach-underline,
 * reveal-item, radar-now). Renders children immediately; with JS disabled or
 * prefers-reduced-motion, content is fully visible via the CSS fallbacks.
 */
export default function Reveal({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${revealed ? "revealed" : ""} ${className ?? ""}`}>
      {children}
    </div>
  );
}
