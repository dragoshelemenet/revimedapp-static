"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n";

const copyByLang: Record<Lang, { open: string; close: string; external: string }> = {
  ro: { open: "Deschide harta", close: "Ascunde harta", external: "Deschide în Google Maps ↗" },
  en: { open: "Open map", close: "Hide map", external: "Open in Google Maps ↗" },
  ru: { open: "Открыть карту", close: "Скрыть карту", external: "Открыть в Google Maps ↗" },
  ua: { open: "Відкрити карту", close: "Сховати карту", external: "Відкрити в Google Maps ↗" }
};

export default function ContactMapDropdown({
  lang = "ro",
  mapEmbed,
  mapLink
}: {
  lang?: Lang;
  mapEmbed: string;
  mapLink: string;
}) {
  const [open, setOpen] = useState(false);
  const copy = copyByLang[lang] || copyByLang.ro;

  return (
    <div className="rmShell rm-map-dropdown-wrap">
      <button
        type="button"
        className="rm-more-btn"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{open ? copy.close : copy.open}</span>
        <span aria-hidden="true">{open ? "▴" : "▾"}</span>
      </button>

      {open && (
        <div className="contactMapModern rm-map-dropdown-panel" data-glass-card>
          <div className="mapHeader">
            <div>
              <span className="contactBadge">Google Maps</span>
              <h2>Revimed PLUS+ · Str. Mircea cel Bătrân 13/2</h2>
            </div>
            <a className="softBtn" href={mapLink} target="_blank" rel="noopener noreferrer">
              {copy.external}
            </a>
          </div>
          <iframe src={mapEmbed} title="Revimed PLUS+ map" loading="lazy" allowFullScreen />
        </div>
      )}
    </div>
  );
}
