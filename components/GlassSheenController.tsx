"use client";

import { useEffect } from "react";

const CARD_SELECTOR =
  "[data-glass-card], .statCard, .homeEquipmentCard, .revimedTrustCards > div, .reviewSlide, .rm-listing-card, .rm-glass-folder, .galleryPhoto, .priceAccordionGroup, .contactPrimaryCard, .contactMiniCard";

export default function GlassSheenController() {
  useEffect(() => {
    let timer: number | undefined;
    let clearTimer: number | undefined;
    let activeEl: Element | null = null;

    const scheduleNext = () => {
      const delay = 2800 + Math.random() * 2600; // 2.8s – 5.4s
      timer = window.setTimeout(() => {
        const candidates = Array.from(document.querySelectorAll(CARD_SELECTOR)).filter((el) => {
          const rect = el.getBoundingClientRect();
          return (
            rect.width > 40 &&
            rect.height > 40 &&
            rect.bottom > 40 &&
            rect.top < window.innerHeight - 40
          );
        });

        if (candidates.length > 0) {
          const chosen = candidates[Math.floor(Math.random() * candidates.length)];
          if (activeEl) activeEl.classList.remove("rm-glass-sheen-active");
          activeEl = chosen;
          chosen.classList.add("rm-glass-sheen-active");
          clearTimer = window.setTimeout(() => {
            chosen.classList.remove("rm-glass-sheen-active");
            if (activeEl === chosen) activeEl = null;
          }, 1250);
        }

        scheduleNext();
      }, delay);
    };

    const initTimer = window.setTimeout(() => {
      scheduleNext();
    }, 4500);

    return () => {
      window.clearTimeout(initTimer);
      if (timer) window.clearTimeout(timer);
      if (clearTimer) window.clearTimeout(clearTimer);
      if (activeEl) activeEl.classList.remove("rm-glass-sheen-active");
    };
  }, []);

  return null;
}
