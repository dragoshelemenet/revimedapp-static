import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import { ContentSection, ReadingCard } from "@/components/ContentLayout";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, makeMetadata, siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/nevrolog-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/neurolog-chisinau/", ru: "/ru/nevrolog-kishinev/", "x-default": "/neurolog-chisinau/" },
 title: "Невролог Кишинёв (Чеканы) — Взрослый и детский приём",
 description:
  "Консультация невролога в Кишинёве (Чеканы) — д-р Игорь Ревенко, опыт 35+ лет, взрослые и дети. Мигрени, головокружение, боли в спине, онемение, бессонница. Запись: 022 60 50 60."
});

const faqs = [
 {
  q: "Как записаться к неврологу в Кишинёве (Чеканы)?",
  a: "Позвоните по телефону 022 60 50 60 или +373 79 422 908 (Пн–Пт 09:00–15:00). Адрес: ул. Мирча чел Бэтрын 13/2, Кишинёв."
 },
 {
  q: "Принимаете ли вы детей (детский невролог в Кишинёве)?",
  a: "Да, д-р Игорь Ревенко имеет более 35 лет опыта во взрослой и детской неврологии."
 }
];

export default function NevrologKishinevPage() {
 return (
  <>
   <JsonLd data={breadcrumbJsonLd([{ name: "Главная", path: "/ru/" }, { name: "Невролог Кишинёв", path: "/ru/nevrolog-kishinev/" }])} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "MedicalWebPage",
     datePublished: "2026-11-21",
     dateModified: "2026-11-21",
     lastReviewed: "2026-11-21", name: "Невролог Кишинёв — Revimed PLUS+", url: absoluteUrl("/ru/nevrolog-kishinev/"), about: { "@id": `${siteUrl}/#medical-clinic` }, reviewedBy: { "@id": `${siteUrl}/dr-igor-revenco/#physician` } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
   <PageHeading>
    <div>
     <p><Link href="/ru/">Главная</Link> / Невролог Кишинёв</p>
     <h1>Невролог в Кишинёве (Чеканы) — Взрослый и детский приём</h1>
     <p>Индивидуальная неврологическая консультация у д-ра Игоря Ревенко (35+ лет опыта), функциональная диагностика и 25 аппаратов физиотерапии в одной клинике.</p>
    </div>
   </PageHeading>
   <ContentSection narrow>
    <ReadingCard>
     <aside
      aria-label="Кратко — ключевые факты и цены"
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
      <p style={{ margin: 0 }}>В медицинском центре Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2) первичный приём невролога стоит 500 MDL, повторный — 400 MDL. Консультации для взрослых и детей ведёт д-р Игорь Ревенко (35+ лет опыта, высшая категория, член EANS). На месте доступны ЭЭГ (1400 MDL), РЭГ (500 MDL), АМП (1000 MDL) и 25 аппаратов физиотерапии (от 150 MDL). Запись: 022 60 50 60.</p>
     </aside>
     <h2>С какими симптомами обращаются к неврологу</h2>
     <ul>
      <li>Головные боли, мигрени, головокружение, шум в ушах;</li>
      <li>Боли в шее и пояснице, остеохондроз, радикулит, ишиас;</li>
      <li>Онемение рук и ног, слабость, полинейропатии;</li>
      <li>Бессонница, хронический стресс, вегетативная дистония;</li>
      <li>Детская неврология и восстановление после инсульта.</li>
     </ul>
     <h2>Частые вопросы</h2>
     {faqs.map((f) => (
      <details key={f.q} open style={{ marginBottom: 10, padding: "12px 14px", borderRadius: 14, background: "rgba(240, 248, 255, 0.72)", border: "1px solid rgba(11, 143, 216, 0.16)" }}>
       <summary style={{ fontWeight: 700, color: "#08234a", cursor: "pointer" }}>{f.q}</summary>
       <p style={{ margin: "8px 0 0", color: "#334e68" }}>{f.a}</p>
      </details>
     ))}
     <div className="rm-quick-links-bar">
      <Link href="/ru/dr-igor-revenco/" className="btn btn-outline-primary btn-sm">Д-р Игорь Ревенко</Link>
      <Link href="/ru/neyrohirurg-kishinev/" className="btn btn-outline-primary btn-sm">Нейрохирург Кишинёв</Link>
      <Link href="/ru/fizioterapiya-kishinev/" className="btn btn-outline-primary btn-sm">Физиотерапия Кишинёв</Link>
      <Link href="/ru/preturi/" className="btn btn-outline-primary btn-sm">Цены</Link>
      <Link href="/ru/contact/" className="btn btn-primary btn-sm">Запись: 022 60 50 60</Link>
     </div>
    </ReadingCard>
   </ContentSection>
  </>
 );
}
