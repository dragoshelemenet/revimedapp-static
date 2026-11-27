"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type GalleryPhotoItem = {
  id: string | number;
  src: string;
  title: string;
  alt: string;
};

export default function GalleryLightbox({ items }: { items: GalleryPhotoItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") {
        setActiveIndex((cur) => (cur === null ? null : cur === 0 ? items.length - 1 : cur - 1));
      }
      if (e.key === "ArrowRight") {
        setActiveIndex((cur) => (cur === null ? null : cur === items.length - 1 ? 0 : cur + 1));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, items.length]);

  const active = activeIndex !== null ? items[activeIndex] : null;

  return (
    <>
      <div className="rm-gallery-grid">
        {items.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            className="galleryPhoto rm-gallery-card"
            data-glass-card
            onClick={() => setActiveIndex(idx)}
            aria-label={item.title}
          >
            <img
              src={item.src}
              alt={item.alt || item.title}
              loading={idx === 0 ? "eager" : "lazy"}
              fetchPriority={idx === 0 ? "high" : "auto"}
              decoding="async"
              width={640}
              height={420}
            />
            <span className="rm-gallery-caption">{item.title}</span>
          </button>
        ))}
      </div>

      {active &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="rm-lightbox-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={() => setActiveIndex(null)}
          >
            <div className="rm-lightbox-glass" onClick={(e) => e.stopPropagation()}>
              <div className="rm-lightbox-top">
                <div className="rm-lightbox-title">
                  <strong>{active.title}</strong>
                  <span>
                    {(activeIndex ?? 0) + 1} / {items.length}
                  </span>
                </div>
                <button
                  type="button"
                  className="rm-lightbox-btn rm-lightbox-close"
                  aria-label="Close"
                  onClick={() => setActiveIndex(null)}
                >
                  ✕
                </button>
              </div>

              <div className="rm-lightbox-stage">
                <button
                  type="button"
                  className="rm-lightbox-btn rm-lightbox-nav"
                  aria-label="Previous photo"
                  onClick={() =>
                    setActiveIndex((cur) => (cur === null ? 0 : cur === 0 ? items.length - 1 : cur - 1))
                  }
                >
                  ‹
                </button>

                <img src={active.src} alt={active.alt || active.title} />

                <button
                  type="button"
                  className="rm-lightbox-btn rm-lightbox-nav"
                  aria-label="Next photo"
                  onClick={() =>
                    setActiveIndex((cur) => (cur === null ? 0 : cur === items.length - 1 ? 0 : cur + 1))
                  }
                >
                  ›
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
