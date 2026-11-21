import { notFound } from "next/navigation";
import { equipmentText, langPrefix, normalizeLang } from "@/lib/equipment";
import { getLocalizedEquipmentItem, getLocalizedEquipmentItems } from "@/lib/equipmentLocalized";
import { getEquipmentSeo } from "@/lib/equipmentSeo";
import { CatalogList, CatalogDetail } from "./CatalogPages";

export function EquipmentListPage({ lang = "ro" }: { lang?: string }) {
 const locale = normalizeLang(lang);
 const items = getLocalizedEquipmentItems(locale).map((item) => {
  const seo = getEquipmentSeo(item.slug, locale);
  return {
   ...item,
   image: seo?.image,
   imageAlt: seo?.alt
  };
 });
 return <CatalogList base={`${langPrefix(locale)}/utilaj`} labels={equipmentText[locale]} items={items} />;
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
