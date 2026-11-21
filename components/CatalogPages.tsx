import Link from "next/link";
import PageHeading from "./PageHeading";
import { ContentSection, ReadingCard, ContentNote } from "./ContentLayout";
import SmartCatalogGrid from "./SmartCatalogGrid";
import { JsonLd, breadcrumbJsonLd, collectionPageJsonLd, serviceJsonLd } from "@/lib/seo";

type Item = { slug: string; title: string; short: string; category: string; sections: {title: string; body: string[]}[] };
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

export function CatalogDetail({base, labels, item}: Props & {item: Item}) {
 const homePath = base.split("/").slice(0, -1).join("/") || "/";
 const itemPath = `${base}/${item.slug}/`;
 return <>
  <JsonLd data={breadcrumbJsonLd([
   { name: labels.home, path: homePath },
   { name: labels.nav, path: `${base}/` },
   { name: item.title, path: itemPath }
  ])} />
  <JsonLd data={serviceJsonLd({
   name: item.title,
   description: item.short,
   path: itemPath
  })} />
  <PageHeading><div><p><Link href={`${base}/`}>{labels.nav}</Link> / {item.title}</p><h1>{item.title}</h1><p>{item.short}</p></div></PageHeading>
  <ContentSection narrow><ReadingCard>
   {item.sections.map(section=><section key={section.title}><h2>{section.title}</h2>{section.body.length>1 ? <ul>{section.body.map((line,index)=><li key={index}>{line}</li>)}</ul> : <p>{section.body[0]}</p>}</section>)}
   <ContentNote>{labels.note}</ContentNote>
   <Link href={`${base}/`} className="rm-back-link" aria-label={labels.back}>←</Link>
  </ReadingCard></ContentSection>
 </>;
}
