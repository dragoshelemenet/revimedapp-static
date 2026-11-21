import Link from "next/link";
import { withLang, type Lang } from "@/lib/i18n";

const data: Record<Lang, { value: string; label: string; href: string }[]> = {
  ro: [
    { value: "Neurologie", label: "consultații și orientare medicală", href: "/servicii/consultatii-neurologice/" },
    { value: "Reabilitare", label: "recuperare funcțională și terapii", href: "/servicii/fizioterapie-si-reabilitare/" },
    { value: "Diagnostic", label: "evaluări și instrumente educaționale", href: "/aplicatii/" }
  ],
  en: [
    { value: "Neurology", label: "medical consultations and guidance", href: "/servicii/consultatii-neurologice/" },
    { value: "Rehabilitation", label: "functional recovery and therapies", href: "/servicii/fizioterapie-si-reabilitare/" },
    { value: "Diagnostics", label: "assessments and educational tools", href: "/aplicatii/" }
  ],
  ru: [
    { value: "Неврология", label: "консультации и медицинская ориентация", href: "/servicii/consultatii-neurologice/" },
    { value: "Реабилитация", label: "функциональное восстановление и терапии", href: "/servicii/fizioterapie-si-reabilitare/" },
    { value: "Диагностика", label: "оценки и образовательные инструменты", href: "/aplicatii/" }
  ],
  ua: [
    { value: "Неврологія", label: "консультації та медична орієнтація", href: "/servicii/consultatii-neurologice/" },
    { value: "Реабілітація", label: "функціональне відновлення та терапії", href: "/servicii/fizioterapie-si-reabilitare/" },
    { value: "Діагностика", label: "оцінки та освітні інструменти", href: "/aplicatii/" }
  ]
};

export default function HomeStats({ lang = "ro" }: { lang?: Lang }) {
  const items = data[lang] || data.ro;

  return (
    <section className="homeStats">
      <div className="rmShell statGrid">
        {items.map((item) => (
          <Link href={withLang(item.href, lang)} className="statCard rm-stat-link" key={item.value}>
            <div className="rm-stat-head">
              <h3>{item.value}</h3>
              <span className="rm-stat-arrow" aria-hidden="true">→</span>
            </div>
            <p>{item.label}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
