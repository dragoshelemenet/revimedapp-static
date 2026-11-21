"use client";

import { useEffect, useState } from "react";

export default function ScrollExperience() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const y = window.scrollY || 0;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 120 ? Math.min(100, Math.max(0, (y / docHeight) * 100)) : 0;
      setProgress(pct);
      setShowTop(y > 460);
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div className="rm-scroll-progress-track" aria-hidden="true">
        <div className="rm-scroll-progress-bar" style={{ transform: `scaleX(${progress / 100})` }} />
      </div>

      {showTop && (
        <button
          type="button"
          className="rm-back-to-top"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
    </>
  );
}
