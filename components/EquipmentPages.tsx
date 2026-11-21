import Link from "next/link";
import { notFound } from "next/navigation";
import { equipmentText, langPrefix, normalizeLang } from "@/lib/equipment";
import { getLocalizedEquipmentItem, getLocalizedEquipmentItems } from "@/lib/equipmentLocalized";
import { getEquipmentSeo } from "@/lib/equipmentSeo";
import { JsonLd, breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/seo";
import PageHeading from "./PageHeading";
import { ContentSection } from "./ContentLayout";
import { CatalogDetail } from "./CatalogPages";
import EquipmentCatalogGrid from "./EquipmentCatalogGrid";

export function EquipmentListPage({ lang = "ro" }: { lang?: string }) {
 const locale = normalizeLang(lang);
 const base = `${langPrefix(locale)}/utilaj`;
 const homePath = langPrefix(locale) || "/";
 const labels = equipmentText[locale];
 const rawItems = getLocalizedEquipmentItems(locale);
 const items = rawItems.map((item) => {
  const seo = getEquipmentSeo(item.slug, locale);
  return {
   id: item.slug,
   href: `${base}/${item.slug}/`,
   title: item.title,
   description: seo?.seoDescription || item.short,
   badge: item.category,
   image: seo?.image,
   imageAlt: seo?.alt,
   action: labels.open
  };
 });

 return (
  <>
   <JsonLd
    data={breadcrumbJsonLd([
     { name: labels.home, path: homePath },
     { name: labels.nav, path: `${base}/` }
    ])}
   />
   <JsonLd
    data={collectionPageJsonLd({
     name: labels.title,
     description: labels.subtitle,
     path: `${base}/`,
     items: items.map((item) => ({ name: item.title, url: item.href }))
    })}
   />
   <PageHeading>
    <div>
     <p>
      <Link href={homePath}>{labels.home}</Link> / {labels.nav}
     </p>
     <h1>{labels.title}</h1>
     <p>{labels.subtitle}</p>
    </div>
   </PageHeading>
   <ContentSection>
    <EquipmentCatalogGrid items={items} lang={locale} />
   </ContentSection>
  </>
 );
}

export function EquipmentDetailPage({ lang = "ro", slug }: { lang?: string; slug: string }) {
 const locale = normalizeLang(lang);
 const item = getLocalizedEquipmentItem(locale, slug);
 if (!item) notFound();
 const seo = getEquipmentSeo(item.slug, locale);
 return (
  <CatalogDetail
   base={`${langPrefix(locale)}/utilaj`}
   labels={equipmentText[locale]}
   item={{
    ...item,
    image: seo?.image,
    imageAlt: seo?.alt
   }}
  />
 );
}
