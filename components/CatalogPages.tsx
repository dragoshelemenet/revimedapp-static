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
 sections: { title: string; body: string[] }[];
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
  badge: item.category,
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
    initialCount={3}
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
  <PageHeading><div><p><Link href={`${base}/`}>{labels.nav}</Link> / {item.title}</p><h1>{item.title}</h1><p>{item.short}</p></div></PageHeading>
  <ContentSection narrow><ReadingCard>
   {item.image && (
    <figure className="rm-equip-hero-figure" data-glass-card>
     <img src={item.image} alt={item.imageAlt || item.title} width={960} height={720} loading="eager" decoding="async" />
     <figcaption>{item.imageAlt || item.title}</figcaption>
    </figure>
   )}
   {item.sections.map(section=><section key={section.title}><h2>{section.title}</h2>{section.body.length>1 ? <ul>{section.body.map((line,index)=><li key={index}>{line}</li>)}</ul> : <p>{section.body[0]}</p>}</section>)}
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
