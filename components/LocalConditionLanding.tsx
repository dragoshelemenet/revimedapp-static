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
     <div
      style={{
       display: "flex",
       flexWrap: "wrap",
       alignItems: "center",
       justifyContent: "space-between",
       gap: 10,
       padding: "12px 16px",
       marginBottom: 20,
       borderRadius: 16,
       background: "linear-gradient(135deg, rgba(11, 143, 216, 0.1), rgba(56, 189, 248, 0.05))",
       border: "1px solid rgba(11, 143, 216, 0.22)"
      }}
     >
      <div style={{ fontSize: 13.5, color: "#08234a" }}>
       <strong>Dr. Igor Revenco</strong> ·{" "}
       {isRu
        ? "Высшая категория · Член EANS · 35+ лет опыта · Пн–Пт 09:00–15:00 · Чеканы"
        : "Categorie superioară · Membru EANS · 35+ ani · Luni–Vineri 09:00–15:00 · Ciocana"}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
       <a href="tel:022605060" className="btn btn-primary btn-sm">
        {isRu ? "Позвонить: 022 60 50 60" : "Sună acum: 022 60 50 60"}
       </a>
       <Link href={pricesHref} className="btn btn-outline-primary btn-sm">
        {isRu ? "Цены (101 услуга)" : "Vezi prețurile"}
       </Link>
       <Link
        href={isRu ? "/ru/aplicatii/teste-si-instrumente/screening-neurologic/" : "/aplicatii/teste-si-instrumente/screening-neurologic/"}
        className="btn btn-outline-primary btn-sm"
       >
        {isRu ? "Бесплатный тест 2 мин →" : "Test neurologic gratuit 2 min →"}
       </Link>
      </div>
     </div>

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

     <h2>{isRu ? "Как выбрать направление в Revimed PLUS+" : "Ghid rapid: ce consultație sau procedură ți se potrivește"}</h2>
     <div style={{ overflowX: "auto", marginBottom: 22 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
       <thead>
        <tr style={{ background: "rgba(11, 143, 216, 0.12)", color: "#08234a" }}>
         <th style={{ textAlign: "left", padding: "10px 12px", borderRadius: "10px 0 0 0" }}>{isRu ? "Ситуация" : "Situația ta"}</th>
         <th style={{ textAlign: "left", padding: "10px 12px" }}>{isRu ? "Рекомендуемый шаг" : "Pasul recomandat"}</th>
         <th style={{ textAlign: "left", padding: "10px 12px", borderRadius: "0 10px 0 0" }}>{isRu ? "Что взять с собой" : "Ce să aduci"}</th>
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
       key={f.q}
       open
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
