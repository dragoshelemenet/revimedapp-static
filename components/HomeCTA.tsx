"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { site } from "@/lib/site";
import { withLang, type Lang } from "@/lib/i18n";

const ctaText: Record<
  Lang,
  {
    badge: string;
    title: string;
    text: string;
    call: string;
    contact: string;
    openNow: string;
    closedNow: string;
    callTitle: string;
    landline: string;
    mobile: string;
  }
> = {
  ro: {
    badge: "Revimed PLUS+",
    title: "Ai nevoie de o consultație sau recuperare?",
    text: "Contactează centrul pentru programare, servicii disponibile și orientare rapidă.",
    call: "Sună acum",
    contact: "Vezi contact",
    openNow: "Deschis acum · 09:00–15:00",
    closedNow: "Program L–V · 09:00–15:00",
    callTitle: "Alege numărul de telefon",
    landline: "Recepție (Fix)",
    mobile: "Mobil"
  },
  en: {
    badge: "Revimed PLUS+",
    title: "Need a consultation or recovery plan?",
    text: "Contact the center for appointments, available services and quick guidance.",
    call: "Call now",
    contact: "View contact",
    openNow: "Open now · 09:00–15:00",
    closedNow: "Mon–Fri · 09:00–15:00",
    callTitle: "Choose phone number",
    landline: "Reception (Landline)",
    mobile: "Mobile"
  },
  ru: {
    badge: "Revimed PLUS+",
    title: "Нужна консультация или восстановление?",
    text: "Свяжитесь с центром для записи, информации об услугах и быстрой ориентации.",
    call: "Позвонить",
    contact: "Контакты",
    openNow: "Открыто сейчас · 09:00–15:00",
    closedNow: "Пн–Пт · 09:00–15:00",
    callTitle: "Выберите номер телефона",
    landline: "Ресепшн (Городской)",
    mobile: "Мобильный"
  },
  ua: {
    badge: "Revimed PLUS+",
    title: "Потрібна консультація або відновлення?",
    text: "Зв’яжіться з центром для запису, інформації про послуги та швидкої орієнтації.",
    call: "Подзвонити",
    contact: "Контакти",
    openNow: "Відчинено зараз · 09:00–15:00",
    closedNow: "Пн–Пт · 09:00–15:00",
    callTitle: "Оберіть номер телефону",
    landline: "Рецепція (Міський)",
    mobile: "Мобільний"
  }
};

function isClinicOpenChisinau(): boolean {
  try {
    const now = new Date();
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "Europe/Chisinau",
      weekday: "short",
      hour: "numeric",
      hour12: false
    }).formatToParts(now);
    const weekday = parts.find((p) => p.type === "weekday")?.value || "";
    const hour = Number(parts.find((p) => p.type === "hour")?.value || "-1");
    const isWeekday = ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(weekday);
    return isWeekday && hour >= 9 && hour < 15;
  } catch {
    return false;
  }
}

export default function HomeCTA({ lang = "ro" }: { lang?: Lang }) {
  const text = ctaText[lang] || ctaText.ro;
  const [callOpen, setCallOpen] = useState(false);
  const [openNow, setOpenNow] = useState(false);

  useEffect(() => {
    setOpenNow(isClinicOpenChisinau());
  }, []);

  useEffect(() => {
    if (!callOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCallOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [callOpen]);

  return (
    <section className="homeCtaWrap">
      <div className="rmShell homeCta">
        <div>
          <div className="rm-cta-badges">
            <span>{text.badge}</span>
            <span className={`rm-live-status ${openNow ? "is-open" : ""}`}>
              <i className="rm-live-dot" aria-hidden="true" />
              {openNow ? text.openNow : text.closedNow}
            </span>
          </div>
          <h2>{text.title}</h2>
          <p>{text.text}</p>
        </div>

        <div className="ctaActions">
          <button type="button" className="blueBtn" onClick={() => setCallOpen(true)}>
            {text.call}
          </button>
          <Link className="softBtn" href={withLang("/contact", lang)}>
            {text.contact}
          </Link>
        </div>
      </div>

      {callOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="rm-lightbox-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={text.callTitle}
            onClick={() => setCallOpen(false)}
          >
            <div className="rm-call-modal-glass" onClick={(e) => e.stopPropagation()}>
              <div className="rm-lightbox-top">
                <div className="rm-lightbox-title">
                  <strong style={{ color: "#08234a", textShadow: "none" }}>{text.callTitle}</strong>
                </div>
                <button
                  type="button"
                  className="rm-lightbox-btn rm-lightbox-close"
                  aria-label="Close"
                  onClick={() => setCallOpen(false)}
                >
                  ✕
                </button>
              </div>
              <div className="rm-call-options">
                <a
                  href={`tel:${site.phone.replaceAll(" ", "")}`}
                  className="rm-call-option"
                  onClick={() => setCallOpen(false)}
                >
                  <span className="rm-call-option-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6.2 6.2l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2z" />
                    </svg>
                  </span>
                  <span className="rm-call-option-meta">
                    <small>{text.landline}</small>
                    <strong>{site.phone}</strong>
                  </span>
                  <span className="rm-call-option-go" aria-hidden="true">→</span>
                </a>
                <a
                  href={`tel:${site.phone2.replaceAll(" ", "")}`}
                  className="rm-call-option"
                  onClick={() => setCallOpen(false)}
                >
                  <span className="rm-call-option-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6.2 6.2l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2z" />
                    </svg>
                  </span>
                  <span className="rm-call-option-meta">
                    <small>{text.mobile}</small>
                    <strong>{site.phone2}</strong>
                  </span>
                  <span className="rm-call-option-go" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
