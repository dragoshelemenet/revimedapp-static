import Link from "next/link";
import PageHeading from "./PageHeading";
import { ContentSection, ReadingCard, ContentNote } from "./ContentLayout";
import SmartCatalogGrid from "./SmartCatalogGrid";
import { JsonLd, breadcrumbJsonLd, collectionPageJsonLd, serviceJsonLd } from "@/lib/seo";

type Item = {
 slug: string;
 title: string;
 short: string;
 category: string;
 image?: string;
 imageAlt?: string;
 priceBadge?: string;
 highlights?: string[];
 sections: { title: string; body: string[] }[];
 faqs?: { q: string; a: string }[];
};
type Labels = { home: string; nav: string; title: string; subtitle: string; open: string; note: string; back: string };
type Props = { base: string; labels: Labels };

function getMoreLabels(base: string) {
 if (base.startsWith("/en")) return { more: "More +", less: "Show less" };
 if (base.startsWith("/ru")) return { more: "Показать ещё +", less: "Свернуть" };
 if (base.startsWith("/ua")) return { more: "Показати ще +", less: "Згорнути" };
 return { more: "Mai multe +", less: "Restrânge" };
}

export function CatalogList({base, labels, items}: Props & {items: Item[]}) {
 const homePath = base.split("/").slice(0, -1).join("/") || "/";
 const ui = getMoreLabels(base);
 const smartItems = items.map((item) => ({
  id: item.slug,
  href: `${base}/${item.slug}/`,
  title: item.title,
  description: item.short,
  badge: item.priceBadge ? `${item.category} · ${item.priceBadge}` : item.category,
  highlights: item.highlights,
  image: item.image,
  action: labels.open
 }));

 return <>
  <JsonLd data={breadcrumbJsonLd([
   { name: labels.home, path: homePath },
   { name: labels.nav, path: `${base}/` }
  ])} />
  <JsonLd data={collectionPageJsonLd({
   name: labels.title,
   description: labels.subtitle,
   path: `${base}/`,
   items: items.map((item) => ({ name: item.title, url: `${base}/${item.slug}/` }))
  })} />
  <PageHeading><div><p><Link href={homePath}>{labels.home}</Link> / {labels.nav}</p><h1>{labels.title}</h1><p>{labels.subtitle}</p></div></PageHeading>
  <ContentSection>
   <SmartCatalogGrid
    items={smartItems}
    initialCount={items.length <= 6 ? 6 : 3}
    groupByCategory={items.length > 8}
    moreLabel={ui.more}
    lessLabel={ui.less}
    useInfoPopover
   />
  </ContentSection>
 </>;
}

function getDetailLinks(base: string) {
 if (base.startsWith("/en")) return { prefix: "/en", doctor: "Dr. Igor Revenco", prices: "Prices", contact: "Book appointment" };
 if (base.startsWith("/ru")) return { prefix: "/ru", doctor: "Д-р Игорь Ревенко", prices: "Цены", contact: "Записаться" };
 if (base.startsWith("/ua")) return { prefix: "/ua", doctor: "Д-р Ігор Ревенко", prices: "Ціни", contact: "Записатися" };
 return { prefix: "", doctor: "Dr. Igor Revenco", prices: "Prețuri", contact: "Programare & Contact" };
}

export function CatalogDetail({base, labels, item}: Props & {item: Item}) {
 const homePath = base.split("/").slice(0, -1).join("/") || "/";
 const itemPath = `${base}/${item.slug}/`;
 const links = getDetailLinks(base);
 return <>
  <JsonLd data={breadcrumbJsonLd([
   { name: labels.home, path: homePath },
   { name: labels.nav, path: `${base}/` },
   { name: item.title, path: itemPath }
  ])} />
  <JsonLd data={serviceJsonLd({
   name: item.title,
   description: item.short,
   path: itemPath,
   image: item.image
  })} />
  {item.faqs && item.faqs.length > 0 && (
   <JsonLd
    data={{
     "@context": "https://schema.org",
     "@type": "FAQPage",
     mainEntity: item.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
     }))
    }}
   />
  )}
  <PageHeading><div><p><Link href={`${base}/`}>{labels.nav}</Link> / {item.title}</p><h1>{item.title}</h1><p>{item.short}</p></div></PageHeading>
  <ContentSection narrow><ReadingCard>
   <aside className="rm-citable-summary">
    <div className="rm-citable-summary-head">
     <span className="rm-citable-pill">Revimed PLUS+ · Chișinău (Ciocana)</span>
     <span className="rm-citable-date">
      {base.startsWith("/en")
       ? "Updated: November 2026"
       : base.startsWith("/ru")
         ? "Обновлено: Ноябрь 2026"
         : base.startsWith("/ua")
           ? "Оновлено: Листопад 2026"
           : "Actualizat: Noiembrie 2026"}
     </span>
    </div>
    <p style={{ margin: 0 }}>
     {base.startsWith("/en")
      ? "Available at Revimed PLUS+ Medical Center (Str. Mircea cel Bătrân 13/2, Chișinău) under Dr. Igor Revenco (35+ years experience, EANS member). Neurology & neurosurgery consultation: 500 MDL (follow-up: 400 MDL); Physiotherapy procedures: from 100 MDL / 30 min. Appointments: 022 60 50 60."
      : base.startsWith("/ru")
        ? "Доступно в медицинском центре Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2) под руководством д-ра Игоря Ревенко (35+ лет опыта, член EANS). Приём невролога и нейрохирурга — 500 MDL (повторный — 400 MDL), физиопроцедуры — от 100 MDL / 30 мин. Запись: 022 60 50 60."
        : base.startsWith("/ua")
          ? "Доступно у медичному центрі Revimed PLUS+ (Кишинів, Чекани, вул. Мірча чел Бетрин 13/2) під керівництвом д-ра Ігоря Ревенка (35+ років досвіду, член EANS). Консультація невролога та нейрохірурга — 500 MDL (повторна — 400 MDL), фізіопроцедури — від 100 MDL / 30 хв. Запис: 022 60 50 60."
          : "Disponibil la Centrul Medical Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), sub coordonarea Dr. Igor Revenco (35+ ani experiență, membru EANS). Consultație neurolog / neurochirurg: 500 MDL (repetată: 400 MDL); proceduri fizioterapie: de la 100 MDL / 30 min. Programări: 022 60 50 60."}
    </p>
   </aside>
   {item.image && (
    <figure className="rm-equip-hero-figure" data-glass-card>
     <img src={item.image} alt={item.imageAlt || item.title} width={960} height={720} loading="eager" decoding="async" />
     <figcaption>{item.imageAlt || item.title}</figcaption>
    </figure>
   )}
   {item.sections.map(section=><section key={section.title}><h2>{section.title}</h2>{section.body.length>1 ? <ul>{section.body.map((line,index)=><li key={index}>{line}</li>)}</ul> : <p>{section.body[0]}</p>}</section>)}
   {item.faqs && item.faqs.length > 0 && (
    <section style={{ marginTop: 22 }}>
     <h2>{base.startsWith("/en") ? "Frequently asked questions" : base.startsWith("/ru") ? "Частые вопросы" : base.startsWith("/ua") ? "Часті запитання" : "Întrebări frecvente"}</h2>
     {item.faqs.map((f) => (
      <details style={{ marginBottom: 10, padding: "12px 14px", borderRadius: 14, background: "rgba(240, 248, 255, 0.72)", border: "1px solid rgba(11, 143, 216, 0.16)" }}>
       <summary style={{ fontWeight: 700, color: "#08234a", cursor: "pointer" }}>{f.q}</summary>
       <p style={{ margin: "8px 0 0", color: "#334e68" }}>{f.a}</p>
      </details>
     ))}
    </section>
   )}
   <ContentNote>{labels.note}</ContentNote>
   <nav aria-label="Related clinic pages" style={{ display: "flex", flexWrap: "wrap", gap: "10px", margin: "18px 0 10px" }}>
    <Link href={`${links.prefix}/dr-igor-revenco/`} className="btn btn-outline-primary btn-sm">{links.doctor}</Link>
    <Link href={`${links.prefix}/preturi/`} className="btn btn-outline-primary btn-sm">{links.prices}</Link>
    <Link href={`${links.prefix}/contact/`} className="btn btn-primary btn-sm">{links.contact}</Link>
   </nav>
   <Link href={`${base}/`} className="rm-back-link" aria-label={labels.back}>←</Link>
  </ReadingCard></ContentSection>
 </>;
}
