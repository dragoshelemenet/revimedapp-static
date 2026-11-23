"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = [
  ".rm-home-service-card",
  ".homeEquipmentCard",
  ".revimedTrustCards > div",
  ".statCard",
  ".rm-about-copy-card",
  ".rm-seo-bento-shell",
  ".reviewSlide",
  ".rm-listing-card",
  ".contactPrimaryCard",
  ".contactMiniCard",
  ".priceAccordionGroup",
  ".rm-doc-glass-block",
  ".rm-doc-summary-card",
  ".rm-doc-photo-card"
].join(", ");

export default function ScrollExperience() {
  const pathname = usePathname();
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

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    if (!elements.length) return;

    const viewportLimit = window.innerHeight * 0.94;
    const toObserve: HTMLElement[] = [];

    elements.forEach((el, idx) => {
      el.classList.remove("rm-scroll-reveal", "rm-revealed");
      const rect = el.getBoundingClientRect();
      // Keep above-the-fold elements instantly visible (zero LCP/CLS impact)
      if (rect.top >= viewportLimit) {
        el.style.setProperty("--rm-reveal-delay", `${(idx % 3) * 55}ms`);
        el.classList.add("rm-scroll-reveal");
        toObserve.push(el);
      }
    });

    if (!toObserve.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add("rm-revealed");
            io.unobserve(target);
          }
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -32px 0px" }
    );

    toObserve.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, [pathname]);

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
