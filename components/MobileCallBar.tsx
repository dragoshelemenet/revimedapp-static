"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { isLang, withLang, type Lang } from "@/lib/i18n";

const barLabels: Record<Lang, { toggle: string; call: string; prices: string; contact: string }> = {
  ro: { toggle: "Contact & Prețuri", call: "022 60 50 60", prices: "Prețuri", contact: "Hartă" },
  en: { toggle: "Contact & Prices", call: "022 60 50 60", prices: "Prices", contact: "Map" },
  ru: { toggle: "Запись и цены", call: "022 60 50 60", prices: "Цены", contact: "Карта" },
  ua: { toggle: "Запис та ціни", call: "022 60 50 60", prices: "Ціни", contact: "Карта" }
};

export default function MobileCallBar() {
  const pathname = usePathname() || "/";
  const first = pathname.split("/").filter(Boolean)[0];
  const lang: Lang = isLang(first) ? first : "ro";
  const labels = barLabels[lang] || barLabels.ro;
  const isContactPage = /^\/(?:(?:en|ru|ua)\/)?contact\/?$/i.test(pathname);
  const [open, setOpen] = useState(false);
  const [pastHeader, setPastHeader] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY >= 160;
      setPastHeader(scrolled);
      if (!scrolled) setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open]);

  if (isContactPage || !pastHeader) {
    return null;
  }

  return (
    <div
      ref={rootRef}
      className={`mobileCallBar rm-mbar-dock${open ? " is-open" : ""}`}
      role="navigation"
      aria-label="Quick actions"
    >
      {open && (
        <div className="rm-mbar-dropdown" role="menu">
          <a
            href={`tel:${site.phone.replaceAll(" ", "")}`}
            className="rm-mbar-item rm-mbar-primary"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>{labels.call}</span>
          </a>
          <a
            href={`tel:${site.phone2.replaceAll(" ", "")}`}
            className="rm-mbar-item rm-mbar-primary"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="6" y="2" width="12" height="20" rx="2.5" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
            <span>{site.phone2}</span>
          </a>
          <Link
            href={withLang("/preturi/", lang)}
            className="rm-mbar-item"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
              <line x1="7" y1="7" x2="7.01" y2="7" />
            </svg>
            <span>{labels.prices}</span>
          </Link>
          <Link
            href={withLang("/contact/", lang)}
            className="rm-mbar-item"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{labels.contact}</span>
          </Link>
        </div>
      )}

      <button
        type="button"
        className="rm-mbar-trigger"
        aria-label={labels.toggle}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </button>
    </div>
  );
}
