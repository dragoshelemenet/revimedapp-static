"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Lang } from "@/lib/i18n";

type ContactPhoto = {
  src: string;
  alt: string;
};

const hintByLang: Record<Lang, string> = {
  ro: "Apasă pentru a mări",
  en: "Click to expand",
  ru: "Нажмите, чтобы увеличить",
  ua: "Натисніть, щоб збільшити"
};

export default function ContactPhotoLightbox({
  photos,
  lang = "ro"
}: {
  photos: ContactPhoto[];
  lang?: Lang;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const hint = hintByLang[lang] || hintByLang.ro;

  useEffect(() => {
    if (activeIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft" && photos.length > 1) {
        setActiveIndex((cur) => (cur === null ? null : cur === 0 ? photos.length - 1 : cur - 1));
      }
      if (e.key === "ArrowRight" && photos.length > 1) {
        setActiveIndex((cur) => (cur === null ? null : cur === photos.length - 1 ? 0 : cur + 1));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, photos.length]);

  if (photos.length === 0) return null;
  const active = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <>
      <div className="contactPhotoPair rm-contact-photo-pair">
        {photos.map((photo, idx) => (
          <button
            key={photo.src}
            type="button"
            className="rm-contact-photo-btn"
            data-glass-card
            aria-label={`${hint} — ${photo.alt}`}
            onClick={() => setActiveIndex(idx)}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" width={640} height={420} />
            <span className="rm-expand-hand-badge" aria-hidden="true">
              <svg className="rm-hand-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 11V6a2 2 0 0 0-4 0" />
                <path d="M14 10V4a2 2 0 0 0-4 0v6" />
                <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
                <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.8-5.9-2.2L3.3 17a2 2 0 0 1 2.8-2.8L8 16" />
              </svg>
              <span>{hint}</span>
              <span className="rm-expand-arrow">↗</span>
            </span>
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
            aria-label={active.alt}
            onClick={() => setActiveIndex(null)}
          >
            <div className="rm-lightbox-glass" onClick={(e) => e.stopPropagation()}>
              <div className="rm-lightbox-top">
                <div className="rm-lightbox-title">
                  <strong>{active.alt}</strong>
                  {photos.length > 1 && (
                    <span>
                      {(activeIndex ?? 0) + 1} / {photos.length}
                    </span>
                  )}
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

              <div className={photos.length > 1 ? "rm-lightbox-stage" : "rm-lightbox-stage rm-lightbox-single"}>
                {photos.length > 1 && (
                  <button
                    type="button"
                    className="rm-lightbox-btn rm-lightbox-nav"
                    aria-label="Previous photo"
                    onClick={() =>
                      setActiveIndex((cur) => (cur === null ? 0 : cur === 0 ? photos.length - 1 : cur - 1))
                    }
                  >
                    ‹
                  </button>
                )}

                <img src={active.src} alt={active.alt} />

                {photos.length > 1 && (
                  <button
                    type="button"
                    className="rm-lightbox-btn rm-lightbox-nav"
                    aria-label="Next photo"
                    onClick={() =>
                      setActiveIndex((cur) => (cur === null ? 0 : cur === photos.length - 1 ? 0 : cur + 1))
                    }
                  >
                    ›
                  </button>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
