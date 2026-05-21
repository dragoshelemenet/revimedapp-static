type Lang = "ro" | "en" | "ru" | "ua";

const data: Record<Lang, { value: string; label: string }[]> = {
  ro: [
    { value: "Neurologie", label: "consultații și orientare medicală" },
    { value: "Reabilitare", label: "recuperare funcțională și terapii" },
    { value: "Diagnostic", label: "evaluări și instrumente educaționale" }
  ],
  en: [
    { value: "Neurology", label: "medical consultations and guidance" },
    { value: "Rehabilitation", label: "functional recovery and therapies" },
    { value: "Diagnostics", label: "assessments and educational tools" }
  ],
  ru: [
    { value: "Неврология", label: "консультации и медицинская ориентация" },
    { value: "Реабилитация", label: "функциональное восстановление и терапии" },
    { value: "Диагностика", label: "оценки и образовательные инструменты" }
  ],
  ua: [
    { value: "Неврологія", label: "консультації та медична орієнтація" },
    { value: "Реабілітація", label: "функціональне відновлення та терапії" },
    { value: "Діагностика", label: "оцінки та освітні інструменти" }
  ]
};

export default function HomeStats({ lang = "ro" }: { lang?: Lang }) {
  const items = data[lang] || data.ro;

  return (
    <section className="homeStats">
      <div className="rmShell statGrid">
        {items.map((item) => (
          <div className="statCard" key={item.value}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
