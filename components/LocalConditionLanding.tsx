import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import { ContentSection, ReadingCard } from "@/components/ContentLayout";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, siteUrl } from "@/lib/seo";
import { revimedReviews } from "@/lib/revimedReviews";

export type LocalLandingProps = {
 lang: "ro" | "ru";
 path: string;
 crumbLabel: string;
 h1: string;
 lead: string;
 directAnswer?: string;
 introParagraph: string;
 symptomsHeading: string;
 symptoms: string[];
 approachHeading: string;
 approachParagraphs: string[];
 equipmentHeading: string;
 equipmentCards: { slug: string; title: string; image: string; desc: string }[];
 faqs: { q: string; a: string }[];
 relatedLinks: { href: string; label: string }[];
};

export default function LocalConditionLanding(p: LocalLandingProps) {
 const isRu = p.lang === "ru";
 const homePath = isRu ? "/ru/" : "/";
 const homeLabel = isRu ? "Главная" : "Acasă";
 const utilajBase = isRu ? "/ru/utilaj/" : "/utilaj/";
 const doctorHref = isRu ? "/ru/dr-igor-revenco/" : "/dr-igor-revenco/";
 const pricesHref = isRu ? "/ru/preturi/" : "/preturi/";
 const contactHref = isRu ? "/ru/contact/" : "/contact/";

 return (
  <>
   <JsonLd
    data={breadcrumbJsonLd([
     { name: homeLabel, path: homePath },
     { name: p.crumbLabel, path: `${p.path}/` }
    ])}
   />
   <JsonLd
    data={{
     "@context": "https://schema.org",
     "@type": "MedicalWebPage",
     name: p.h1,
     description: p.lead,
     url: absoluteUrl(`${p.path}/`),
     inLanguage: isRu ? "ru" : "ro",
     datePublished: "2026-11-21",
     dateModified: "2026-11-21",
     lastReviewed: "2026-11-21",
     about: { "@id": `${siteUrl}/#medical-clinic` },
     reviewedBy: { "@id": `${siteUrl}/dr-igor-revenco/#physician` },
     author: { "@id": `${siteUrl}/dr-igor-revenco/#physician` }
    }}
   />
   <JsonLd
    data={{
     "@context": "https://schema.org",
     "@type": "FAQPage",
     mainEntity: p.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
     }))
    }}
   />

   <PageHeading>
    <div>
     <p>
      <Link href={homePath}>{homeLabel}</Link> / {p.crumbLabel}
     </p>
     <h1>{p.h1}</h1>
     <p>{p.lead}</p>
    </div>
   </PageHeading>

   <ContentSection narrow>
    <ReadingCard>
     <div className="rm-trust-banner">
      <div className="rm-trust-banner-meta">
       <strong>Dr. Igor Revenco</strong> ·{" "}
       {isRu
        ? "Высшая категория · Член EANS · 35+ лет опыта · Пн–Пт 09:00–15:00 · Чеканы"
        : "Categorie superioară · Membru EANS · 35+ ani · Luni–Vineri 09:00–15:00 · Ciocana"}
      </div>
      <div className="rm-trust-banner-actions">
       <a href="tel:022605060" className="btn btn-primary btn-sm">
        {isRu ? "Позвонить: 022 60 50 60" : "Sună: 022 60 50 60"}
       </a>
       <a
        href="https://wa.me/37379422908"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-sm btn-whatsapp-soft"
       >
        WhatsApp
       </a>
       <Link href={pricesHref} className="btn btn-outline-primary btn-sm">
        {isRu ? "Цены (96 услуг)" : "Prețuri (96)"}
       </Link>
       <Link
        href={isRu ? "/ru/aplicatii/teste-si-instrumente/screening-neurologic/" : "/aplicatii/teste-si-instrumente/screening-neurologic/"}
        className="btn btn-outline-primary btn-sm"
       >
        {isRu ? "Тест 2 мин →" : "Test 2 min →"}
       </Link>
      </div>
     </div>

     <div className="rm-kpi-strip" aria-label={isRu ? "Ключевые показатели клиники" : "Indicatori cheie Revimed PLUS+"}>
      <div className="rm-kpi-card">
       <strong>500 / 400 MDL</strong>
       <span>{isRu ? "Невролог · Нейрохирург" : "Neurolog · Neurochirurg"}</span>
      </div>
      <div className="rm-kpi-card">
       <strong>150 MDL · 25</strong>
       <span>{isRu ? "Физиотерапия · аппаратов" : "Fizioterapie · aparate medicale"}</span>
      </div>
      <div className="rm-kpi-card">
       <strong>35+ {isRu ? "лет · EANS" : "ani · EANS"}</strong>
       <span>{isRu ? "Д-р Игорь Ревенко · Чеканы" : "Dr. Igor Revenco · Ciocana"}</span>
      </div>
     </div>

     <aside className="rm-citable-summary" aria-label={isRu ? "Краткий ответ и цены" : "Pe scurt — date cheie și prețuri"}>
      <div className="rm-citable-summary-head">
       <span className="rm-citable-pill">{isRu ? "Кратко — ключевые факты" : "Pe scurt — date cheie Revimed PLUS+"}</span>
       <span className="rm-citable-date">{isRu ? "Обновлено: Ноябрь 2026" : "Actualizat medical: Noiembrie 2026"}</span>
      </div>
      <p style={{ margin: 0 }}>
       {p.directAnswer ||
        (isRu
         ? `В медицинском центре Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2) первичный приём невролога стоит 500 MDL (повторный — 400 MDL), нейрохирурга — 500 MDL (повторный — 400 MDL), сеанс физиотерапии (Электросон, Амплипульс, Электрофорез) — 150 MDL. Приём ведёт д-р Игорь Ревенко (35+ лет опыта, член EANS). Запись: 022 60 50 60.`
         : `La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), consultația primară la neurolog costă 500 MDL (repetată 400 MDL), la neurochirurg 300 MDL, iar o ședință de fizioterapie (Electrosomn, Amplipuls, Electroforeză) costă 150 MDL. Consultațiile sunt realizate de Dr. Igor Revenco (35+ ani experiență, membru EANS). Programări: 022 60 50 60.`)}
      </p>
     </aside>

     <p>{p.introParagraph}</p>

     <h2>{p.symptomsHeading}</h2>
     <ul>
      {p.symptoms.map((s) => (
       <li key={s}>{s}</li>
      ))}
     </ul>

     <h2>{p.approachHeading}</h2>
     {p.approachParagraphs.map((para) => (
      <p key={para}>{para}</p>
     ))}

     <h2>{p.equipmentHeading}</h2>
     <div className="rm-home-services-grid" style={{ marginBottom: 22 }}>
      {p.equipmentCards.map((eq) => (
       <Link
        key={eq.slug}
        href={`${utilajBase}${eq.slug}/`}
        className="rm-home-service-card"
        data-glass-card
       >
        <img
         src={eq.image}
         alt={`${eq.title} — Revimed PLUS+`}
         width={480}
         height={360}
         loading="lazy"
         decoding="async"
         style={{ width: "100%", height: 130, objectFit: "cover", borderRadius: 12, marginBottom: 6 }}
        />
        <h3>{eq.title}</h3>
        <p>{eq.desc}</p>
       </Link>
      ))}
     </div>

     <h2>{isRu ? "Прозрачная стоимость курса (2026) — без скрытых доплат" : "Cost estimativ transparent (2026) — fără costuri ascunse"}</h2>
     <div className="rm-price-advantage-grid">
      <div className="rm-price-adv-card">
       <span className="rm-adv-tag">{isRu ? "Консультация" : "Consultație"}</span>
       <strong>500 / 400 MDL</strong>
       <span>{isRu ? "Первичный приём 500 MDL · Повторный 400 MDL (ниже среднего по Кишинёву 600–650 MDL)" : "Consultație primară 500 MDL · Repetată 400 MDL (sub media din Chișinău 600–650 MDL)"}</span>
      </div>
      <div className="rm-price-adv-card">
       <span className="rm-adv-tag">{isRu ? "Курс 5 сеансов" : "Curs 5 ședințe"}</span>
       <strong>750 MDL</strong>
       <span>{isRu ? "5 процедур физиотерапии / Электросна / Амплипульса (по 150 MDL)" : "5 ședințe fizioterapie / Electrosomn / Amplipuls (150 MDL/ședință)"}</span>
      </div>
      <div className="rm-price-adv-card">
       <span className="rm-adv-tag">{isRu ? "Курс 10 сеансов" : "Curs 10 ședințe"}</span>
       <strong>1500 MDL</strong>
       <span>{isRu ? "Полный курс восстановления из 10 процедур · Лечебный массаж — 200 MDL" : "Curs complet de 10 proceduri · Masaj terapeutic 60 min — 200 MDL"}</span>
      </div>
     </div>

     <h2>{isRu ? "Как выбрать направление в Revimed PLUS+" : "Ghid rapid: ce consultație sau procedură ți se potrivește"}</h2>
     <div className="rm-decision-table-wrap">
      <table className="rm-decision-table">
       <thead>
        <tr>
         <th>{isRu ? "Ситуация" : "Situația ta"}</th>
         <th>{isRu ? "Рекомендуемый шаг" : "Pasul recomandat"}</th>
         <th>{isRu ? "Что взять с собой" : "Ce să aduci"}</th>
        </tr>
       </thead>
       <tbody>
        <tr style={{ borderBottom: "1px solid rgba(11, 143, 216, 0.14)" }}>
         <td style={{ padding: "10px 12px" }}>{isRu ? "Мигрень, головокружение, бессонница, онемение" : "Migrene, amețeli, insomnie, amorțeli, stres"}</td>
         <td style={{ padding: "10px 12px" }}><strong>{isRu ? "Консультация невролога + RHEOTEST" : "Consultație neurolog + RHEOTEST"}</strong></td>
         <td style={{ padding: "10px 12px" }}>{isRu ? "Список лекарств и старые выписки" : "Lista medicamentelor și analizele anterioare"}</td>
        </tr>
        <tr style={{ borderBottom: "1px solid rgba(11, 143, 216, 0.14)" }}>
         <td style={{ padding: "10px 12px" }}>{isRu ? "Грыжа диска, ишиас, прострел в ногу или руку" : "Hernie de disc, sciatică, durere pe picior/braț"}</td>
         <td style={{ padding: "10px 12px" }}><strong>{isRu ? "Консультация нейрохирурга (разбор МРТ)" : "Consultație neurochirurg (analiză RMN)"}</strong></td>
         <td style={{ padding: "10px 12px" }}>{isRu ? "Диск / плёнка МРТ или КТ" : "Imaginile RMN sau CT pe CD / film"}</td>
        </tr>
        <tr>
         <td style={{ padding: "10px 12px" }}>{isRu ? "Боль в спине, спазм, восстановление" : "Dureri de spate, contracturi, recuperare"}</td>
         <td style={{ padding: "10px 12px" }}><strong>{isRu ? "Курс физиотерапии (5–10 сеансов)" : "Curs fizioterapie (5–10 ședințe)"}</strong></td>
         <td style={{ padding: "10px 12px" }}>{isRu ? "Назначение врача (или осмотр на месте)" : "Recomandarea medicului (sau consult pe loc)"}</td>
        </tr>
       </tbody>
      </table>
     </div>

     <h2>{isRu ? "Отзывы пациентов Revimed PLUS+ (Google Maps)" : "Recenzii reale ale pacienților (Google Maps)"}</h2>
     <div className="rm-home-services-grid" style={{ marginBottom: 22 }}>
      {(isRu
       ? [
          { name: "R. R.", text: "Место, где тебя действительно слышат. Д-р Игорь Ревенко — настоящий профессионал, внимательный и терпеливый, подробно объяснил каждый шаг лечения." },
          { name: "I. B.", text: "Профессионализм, чуткость и заметный результат! Д-р Ревенко — отличный специалист по проблемам позвоночника, индивидуальный план помог даже при грыже диска." },
          { name: "D. T.", text: "Очень опытный невролог. Для нашей семьи это врач, который реально помог детям нормально развиваться и чувствовать себя уверенно." }
         ]
       : revimedReviews.slice(0, 3)
      ).map((rev) => (
       <blockquote
        key={rev.name}
        className="rm-home-service-card"
        data-glass-card
        style={{ margin: 0 }}
       >
        <span className="rm-home-service-badge">★★★★★ · Google</span>
        <p style={{ fontStyle: "italic" }}>„{rev.text}”</p>
        <footer style={{ fontSize: 12.5, fontWeight: 700, color: "#075f9e" }}>— {rev.name}</footer>
       </blockquote>
      ))}
     </div>

     <h2>{isRu ? "Частые вопросы пациентов" : "Întrebări frecvente ale pacienților"}</h2>
     {p.faqs.map((f) => (
      <details
       style={{
        marginBottom: 10,
        padding: "12px 14px",
        borderRadius: 14,
        background: "rgba(240, 248, 255, 0.72)",
        border: "1px solid rgba(11, 143, 216, 0.16)"
       }}
      >
       <summary style={{ fontWeight: 700, color: "#08234a", cursor: "pointer" }}>{f.q}</summary>
       <p style={{ margin: "8px 0 0", color: "#334e68" }}>{f.a}</p>
      </details>
     ))}

     <div className="rm-quick-links-bar" style={{ marginTop: 22 }}>
      <Link href={doctorHref} className="btn btn-outline-primary btn-sm">
       {isRu ? "Д-р Игорь Ревенко" : "Dr. Igor Revenco"}
      </Link>
      {p.relatedLinks.map((rl) => (
       <Link key={rl.href} href={rl.href} className="btn btn-outline-primary btn-sm">
        {rl.label}
       </Link>
      ))}
      <Link href={contactHref} className="btn btn-primary btn-sm">
       {isRu ? "Записаться на приём" : "Programare & Hartă"}
      </Link>
     </div>
    </ReadingCard>
   </ContentSection>
  </>
 );
}
