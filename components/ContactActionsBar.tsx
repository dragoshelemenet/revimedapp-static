"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Lang } from "@/lib/i18n";

type PhoneOption = {
  label: string;
  number: string;
};

const copyByLang: Record<
  Lang,
  {
    callTitle: string;
    callHint: string;
    landline: string;
    mobile: string;
    mapTitle: string;
    externalMap: string;
  }
> = {
  ro: {
    callTitle: "Alege numărul de telefon",
    callHint: "Selectează numărul la care dorești să suni la Revimed PLUS+:",
    landline: "Recepție (Fix)",
    mobile: "Mobil",
    mapTitle: "Hartă — Revimed PLUS+",
    externalMap: "Deschide în Google Maps ↗"
  },
  en: {
    callTitle: "Choose phone number",
    callHint: "Select the number you would like to call at Revimed PLUS+:",
    landline: "Reception (Landline)",
    mobile: "Mobile",
    mapTitle: "Map — Revimed PLUS+",
    externalMap: "Open in Google Maps ↗"
  },
  ru: {
    callTitle: "Выберите номер телефона",
    callHint: "Выберите номер для звонка в Revimed PLUS+:",
    landline: "Ресепшн (Городской)",
    mobile: "Мобильный",
    mapTitle: "Карта — Revimed PLUS+",
    externalMap: "Открыть в Google Maps ↗"
  },
  ua: {
    callTitle: "Оберіть номер телефону",
    callHint: "Оберіть номер для дзвінка до Revimed PLUS+:",
    landline: "Рецепція (Міський)",
    mobile: "Мобільний",
    mapTitle: "Карта — Revimed PLUS+",
    externalMap: "Відкрити в Google Maps ↗"
  }
};

export default function ContactActionsBar({
  lang = "ro",
  callLabel,
  mapLabel,
  fixedPhone,
  mobilePhone,
  altPhone,
  mapEmbed,
  mapLink
}: {
  lang?: Lang;
  callLabel: string;
  mapLabel: string;
  fixedPhone?: string;
  mobilePhone?: string;
  altPhone?: string;
  mapEmbed: string;
  mapLink: string;
}) {
  const [modal, setModal] = useState<"call" | "map" | null>(null);
  const copy = copyByLang[lang] || copyByLang.ro;

  const phones: PhoneOption[] = [];
  const seen = new Set<string>();
  const addPhone = (label: string, num?: string) => {
    const clean = String(num || "").trim();
    const digits = clean.replaceAll(" ", "");
    if (!clean || seen.has(digits)) return;
    seen.add(digits);
    phones.push({ label, number: clean });
  };

  addPhone(copy.landline, fixedPhone);
  addPhone(copy.mobile, mobilePhone);
  addPhone(copy.mobile, altPhone);

  useEffect(() => {
    if (!modal) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModal(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [modal]);

  return (
    <>
      <div className="contactActionRow">
        <button type="button" className="blueBtn" onClick={() => setModal("call")}>
          {callLabel}
        </button>
        <button type="button" className="softBtn" onClick={() => setModal("map")}>
          {mapLabel}
        </button>
      </div>

      {modal === "call" &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="rm-lightbox-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={copy.callTitle}
            onClick={() => setModal(null)}
          >
            <div className="rm-call-modal-glass" onClick={(e) => e.stopPropagation()}>
              <div className="rm-lightbox-top">
                <div className="rm-lightbox-title">
                  <strong style={{ color: "#08234a", textShadow: "none" }}>{copy.callTitle}</strong>
                </div>
                <button
                  type="button"
                  className="rm-lightbox-btn rm-lightbox-close"
                  aria-label="Close"
                  onClick={() => setModal(null)}
                >
                  ✕
                </button>
              </div>
              <p className="rm-call-modal-hint">{copy.callHint}</p>
              <div className="rm-call-options">
                {phones.map((p) => (
                  <a
                    key={p.number}
                    href={`tel:${p.number.replaceAll(" ", "")}`}
                    className="rm-call-option"
                    onClick={() => setModal(null)}
                  >
                    <span className="rm-call-option-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6.2 6.2l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2z" />
                      </svg>
                    </span>
                    <span className="rm-call-option-meta">
                      <small>{p.label}</small>
                      <strong>{p.number}</strong>
                    </span>
                    <span className="rm-call-option-go" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}

      {modal === "map" &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="rm-lightbox-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={copy.mapTitle}
            onClick={() => setModal(null)}
          >
            <div className="rm-lightbox-glass rm-map-modal-glass" onClick={(e) => e.stopPropagation()}>
              <div className="rm-lightbox-top">
                <div className="rm-lightbox-title">
                  <strong>{copy.mapTitle}</strong>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <a
                    className="softBtn"
                    style={{ padding: "7px 14px", fontSize: "13px" }}
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {copy.externalMap}
                  </a>
                  <button
                    type="button"
                    className="rm-lightbox-btn rm-lightbox-close"
                    aria-label="Close"
                    onClick={() => setModal(null)}
                  >
                    ✕
                  </button>
                </div>
              </div>
              <iframe
                src={mapEmbed}
                title="Revimed PLUS+ Google Maps"
                className="rm-map-modal-iframe"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
