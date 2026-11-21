import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import { ContentSection, ReadingCard } from "@/components/ContentLayout";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, makeMetadata, siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/fizioterapiya-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/fizioterapie-chisinau/", ru: "/ru/fizioterapiya-kishinev/", "x-default": "/fizioterapie-chisinau/" },
 title: "Физиотерапия Кишинёв (Чеканы) — 25 аппаратов реабилитации",
 description:
  "Физиотерапия и восстановление в Кишинёве (Чеканы) в Revimed PLUS+: 25 аппаратов (Электросон, Трансаир ТЭС, Амплипульс СМТ, Электрофорез, МДМ, Соллюкс) при болях в спине и неврологии."
});

const faqs = [
 {
  q: "Какие физиотерапевтические аппараты есть в Revimed PLUS+?",
  a: "25 медицинских аппаратов: Амплипульс-4/5/6 (СМТ), лекарственный электрофорез, Электросон-3/4Т/5, Трансаир (ТЭС), Би-ЛЕНАР, МДМ-2000, Соллюкс, Спектр-ЛЦ, Кандадзя и DETOX Spa Bio."
 },
 {
  q: "Сколько процедур обычно входит в курс?",
  a: "Обычно курс составляет 5–10 сеансов, которые подбираются врачом индивидуально."
 }
];

export default function FizioterapiyaKishinevPage() {
 return (
  <>
   <JsonLd data={breadcrumbJsonLd([{ name: "Главная", path: "/ru/" }, { name: "Физиотерапия Кишинёв", path: "/ru/fizioterapiya-kishinev/" }])} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "MedicalWebPage",
     datePublished: "2026-11-21",
     dateModified: "2026-11-21",
     lastReviewed: "2026-11-21", name: "Физиотерапия Кишинёв — Revimed PLUS+", url: absoluteUrl("/ru/fizioterapiya-kishinev/"), about: { "@id": `${siteUrl}/#medical-clinic` }, reviewedBy: { "@id": `${siteUrl}/dr-igor-revenco/#physician` } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
   <PageHeading>
    <div>
     <p><Link href="/ru/">Главная</Link> / Физиотерапия Кишинёв</p>
     <h1>Физиотерапия и реабилитация в Кишинёве (Чеканы)</h1>
     <p>Индивидуальные курсы физиотерапии и нейростимуляции на 25 медицинских аппаратах под наблюдением врача.</p>
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
      <p style={{ margin: 0 }}>В медицинском центре Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2) сеанс физиотерапии (30 мин), Электросон, Амплипульс или Электрофорез стоит 150 MDL, лечебный массаж (60 мин) — 200 MDL, комбинированная электротерапия + кинезотерапия — 250 MDL/час. В клинике работают 25 медицинских аппаратов. Запись: 022 60 50 60.</p>
     </aside>
     <h2>Основные процедуры в клинике</h2>
     <ul>
      <li><strong>Амплипульс СМТ</strong> — боли в спине, шее, ишиас и мышечные спазмы;</li>
      <li><strong>Лекарственный электрофорез</strong> — локальное неинвазивное введение препаратов;</li>
      <li><strong>Электросон и Трансаир ТЭС</strong> — бессонница, стресс, мигрени, ВСД;</li>
      <li><strong>Би-ЛЕНАР, МДМ и лампа Соллюкс</strong> — мягкое восстановление и тепловая терапия.</li>
     </ul>
     <h2>Частые вопросы</h2>
     {faqs.map((f) => (
      <details key={f.q} open style={{ marginBottom: 10, padding: "12px 14px", borderRadius: 14, background: "rgba(240, 248, 255, 0.72)", border: "1px solid rgba(11, 143, 216, 0.16)" }}>
       <summary style={{ fontWeight: 700, color: "#08234a", cursor: "pointer" }}>{f.q}</summary>
       <p style={{ margin: "8px 0 0", color: "#334e68" }}>{f.a}</p>
      </details>
     ))}
     <div className="rm-quick-links-bar">
      <Link href="/ru/utilaj/" className="btn btn-outline-primary btn-sm">Все 25 аппаратов</Link>
      <Link href="/ru/nevrolog-kishinev/" className="btn btn-outline-primary btn-sm">Невролог Кишинёв</Link>
      <Link href="/ru/neyrohirurg-kishinev/" className="btn btn-outline-primary btn-sm">Нейрохирург Кишинёв</Link>
      <Link href="/ru/preturi/" className="btn btn-outline-primary btn-sm">Цены</Link>
      <Link href="/ru/contact/" className="btn btn-primary btn-sm">Запись: 022 60 50 60</Link>
     </div>
    </ReadingCard>
   </ContentSection>
  </>
 );
}
