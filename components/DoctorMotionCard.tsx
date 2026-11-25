"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { withLang, type Lang } from "@/lib/i18n";

const doctorCopy: Record<
  Lang,
  {
    name: string;
    role: string;
    expBadge: string;
    credits: string[];
    cta: string;
  }
> = {
  ro: {
    name: "Dr. Igor Revenco",
    role: "Medic Neuropediatru, Neurochirurg consultant",
    expBadge: "35+ ani",
    credits: [
      "Categorie superioară",
      "Dr. neurochirurgie (USMF)",
      "Membru EANS (Europa)",
      "Fondator Revimed PLUS+"
    ],
    cta: "Vezi profilul Dr. Igor Revenco & publicații →"
  },
  en: {
    name: "Dr. Igor Revenco",
    role: "Pediatric Neurologist, Consultant Neurosurgeon",
    expBadge: "35+ yrs",
    credits: [
      "Superior Category",
      "PhD Neurosurgery (USMF)",
      "EANS Member (Europe)",
      "Founder, Revimed PLUS+"
    ],
    cta: "View Dr. Igor Revenco’s profile & publications →"
  },
  ru: {
    name: "Д-р Игорь Ревенко",
    role: "Детский невролог, Нейрохирург-консультант",
    expBadge: "35+ лет",
    credits: [
      "Высшая категория",
      "Д-р нейрохирургии (USMF)",
      "Член EANS (Европа)",
      "Основатель Revimed PLUS+"
    ],
    cta: "Профиль д-ра Игоря Ревенко и публикации →"
  },
  ua: {
    name: "Д-р Ігор Ревенко",
    role: "Дитячий невролог, Нейрохірург-консультант",
    expBadge: "35+ років",
    credits: [
      "Вища категорія",
      "Д-р нейрохірургії (USMF)",
      "Член EANS (Європа)",
      "Засновник Revimed PLUS+"
    ],
    cta: "Профіль д-ра Ігоря Ревенка та публікації →"
  }
};

export default function DoctorMotionCard({ lang = "ro" }: { lang?: Lang }) {
  const copy = doctorCopy[lang] || doctorCopy.ro;
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -10px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const profileHref = withLang("/dr-igor-revenco/", lang);

  return (
    <Link
      href={profileHref}
      ref={stageRef as any}
      className={`rm-doctor-motion ${visible ? "rm-in-view" : ""}`}
      data-glass-card
      aria-label={`${copy.name} — ${copy.role}`}
    >
      {/* Animated neural-pulse glow & orbit behind photo */}
      <span className="rm-doctor-orb rm-doctor-orb-a" aria-hidden="true" />
      <span className="rm-doctor-orb rm-doctor-orb-b" aria-hidden="true" />

      <div className="rm-doctor-frame">
        <img
          src="/images/about-us.webp"
          alt={`${copy.name} — ${copy.role}`}
          width={360}
          height={420}
          loading="lazy"
          decoding="async"
        />

        {/* Floating top-right experience badge */}
        <span className="rm-doctor-exp-pill">
          <span className="rm-pulse-dot" aria-hidden="true" />
          {copy.expBadge}
        </span>

        {/* Liquid Glass lower-third nameplate directly on the main photo */}
        <div className="rm-doctor-plate">
          <strong>{copy.name}</strong>
          <span>{copy.role}</span>
        </div>
      </div>

      {/* Motion-graphic staggered credential chips */}
      <div className="rm-doctor-credits" aria-label={copy.name}>
        {copy.credits.map((credit, idx) => (
          <span
            key={credit}
            className="rm-doctor-credit-chip"
            style={{ transitionDelay: `${40 + idx * 55}ms` }}
          >
            {credit}
          </span>
        ))}
      </div>

      <span
        className="btn btn-primary btn-sm"
        style={{
          marginTop: 12,
          width: "100%",
          justifyContent: "center",
          textAlign: "center",
          fontWeight: 700
        }}
      >
        {copy.cta}
      </span>
    </Link>
  );
}
