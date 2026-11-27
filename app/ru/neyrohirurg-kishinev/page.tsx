import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import { ContentSection, ReadingCard } from "@/components/ContentLayout";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, makeMetadata, siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/neyrohirurg-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/neurochirurg-chisinau/", ru: "/ru/neyrohirurg-kishinev/", "x-default": "/neurochirurg-chisinau/" },
 title: "Нейрохирург Кишинёв (Чеканы) — Грыжа диска и разбор МРТ",
 description:
  "Консультация нейрохирурга в Кишинёве — д-р Игорь Ревенко (доктор нейрохирургии, член EANS, 35+ лет опыта). Разбор снимков МРТ/КТ, грыжа диска, ишиас и консервативное лечение."
});

const faqs = [
 {
  q: "Нужно ли приносить диск МРТ на приём нейрохирурга?",
  a: "Да, обязательно возьмите диск или снимки МРТ/КТ — врач оценивает сами срезы в сочетании с осмотром."
 },
 {
  q: "Можно ли вылечить грыжу диска без операции?",
  a: "Во многих случаях без нарастающего двигательного дефицита правильно подобранное консервативное лечение и физиотерапия дают стойкое улучшение."
 }
];

export default function NeyrohirurgKishinevPage() {
 return (
  <>
   <JsonLd data={breadcrumbJsonLd([{ name: "Главная", path: "/ru/" }, { name: "Нейрохирург Кишинёв", path: "/ru/neyrohirurg-kishinev/" }])} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "MedicalWebPage",
     datePublished: "2026-11-21",
     dateModified: "2026-11-21",
     lastReviewed: "2026-11-21", name: "Нейрохирург Кишинёв — Revimed PLUS+", url: absoluteUrl("/ru/neyrohirurg-kishinev/"), about: { "@id": `${siteUrl}/#medical-clinic` }, reviewedBy: { "@id": `${siteUrl}/dr-igor-revenco/#physician` } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
   <PageHeading>
    <div>
     <p><Link href="/ru/">Главная</Link> / Нейрохирург Кишинёв</p>
     <h1>Нейрохирург в Кишинёве — Грыжа диска, позвоночник и оценка МРТ</h1>
     <p>Объективное второе мнение нейрохирурга — д-р Игорь Ревенко (член EANS, 35+ лет клинического опыта) в клинике Revimed PLUS+ (Чеканы).</p>
    </div>
   </PageHeading>
   <ContentSection narrow>
    <ReadingCard>
     <aside
      className="rm-citable-summary"
      aria-label="Кратко - ключевые факты и цены"
      style={{
       padding: "14px 18px",
       marginBottom: 18,
       borderRadius: 16,
       background: "rgba(240, 248, 255, 0.85)",
       borderLeft: "4px solid #0b8fd8",
       fontSize: 14.5,
       lineHeight: 1.58,
       color: "#0b2545"
      }}
     >
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 6, marginBottom: 6, fontSize: 12.5, fontWeight: 700, color: "#075f9e" }}>
       <span>Кратко — ключевые факты и цены</span>
       <span>Обновлено: Ноябрь 2026</span>
      </div>
      <p style={{ margin: 0 }}>В медицинском центре Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2) первичная консультация нейрохирурга стоит 500 MDL, а повторная — 400 MDL. Д-р Игорь Ревенко (доктор нейрохирургии USMF, член EANS, 35+ лет опыта) проводит разбор МРТ/КТ при грыже диска и стенозе, даёт объективное второе мнение и составляет план реабилитации (физиопроцедуры от 100 MDL / 30 мин). Запись: 022 60 50 60.</p>
     </aside>
     <h2>Основные направления консультации нейрохирурга</h2>
     <ul>
      <li>Грыжа и протрузия межпозвоночного диска (поясничный, шейный отдел);</li>
      <li>Ишиас, корешковые боли в ноге или руке, стеноз позвоночного канала;</li>
      <li>Выбор тактики: консервативное лечение и физиотерапия или операция;</li>
      <li>Наблюдение и реабилитация после нейрохирургических вмешательств.</li>
     </ul>
     <h2>Частые вопросы</h2>
     {faqs.map((f) => (
      <details key={f.q} style={{ marginBottom: 10, padding: "12px 14px", borderRadius: 14, background: "rgba(240, 248, 255, 0.72)", border: "1px solid rgba(11, 143, 216, 0.16)" }}>
       <summary style={{ fontWeight: 700, color: "#08234a", cursor: "pointer" }}>{f.q}</summary>
       <p style={{ margin: "8px 0 0", color: "#334e68" }}>{f.a}</p>
      </details>
     ))}
     <div className="rm-quick-links-bar">
      <Link href="/ru/dr-igor-revenco/" className="btn btn-outline-primary btn-sm">Д-р Игорь Ревенко</Link>
      <Link href="/ru/nevrolog-kishinev/" className="btn btn-outline-primary btn-sm">Невролог Кишинёв</Link>
      <Link href="/ru/fizioterapiya-kishinev/" className="btn btn-outline-primary btn-sm">Физиотерапия</Link>
      <Link href="/ru/preturi/" className="btn btn-outline-primary btn-sm">Цены</Link>
      <Link href="/ru/contact/" className="btn btn-primary btn-sm">Запись: 022 60 50 60</Link>
     </div>
    </ReadingCard>
   </ContentSection>
  </>
 );
}
