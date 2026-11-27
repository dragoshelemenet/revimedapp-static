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
    <aside className="rm-citable-summary" style={{ marginBottom: 18 }}>
     <div className="rm-citable-summary-head">
      <span className="rm-citable-pill">{labels.nav} · Revimed PLUS+ Chișinău (Ciocana)</span>
      <span className="rm-citable-date">
       {locale === "en" ? "Updated: November 2026" : locale === "ru" ? "Обновлено: Ноябрь 2026" : locale === "ua" ? "Оновлено: Листопад 2026" : "Actualizat: Noiembrie 2026"}
      </span>
     </div>
     <p style={{ margin: 0 }}>
      {locale === "en"
       ? `Revimed PLUS+ Medical Center in Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2) operates ${items.length} specialized medical devices for functional diagnostics (RHEOTEST 500 MDL, AMP 1600 MDL) and neurotropic physiotherapy (Electrosomn, Transair TES, Etrans, LENAR, MDM, Amplipuls, Spectr-LC, Solux: 100 MDL / 30 min) under Dr. Igor Revenco. Appointments: 022 60 50 60.`
       : locale === "ru"
         ? `Медицинский центр Revimed PLUS+ в Кишинёве (Чеканы, ул. Мирча чел Бэтрын 13/2) оснащён ${items.length} профильными аппаратами для функциональной диагностики (RHEOTEST 500 MDL, АМП 1600 MDL) и нейротропной физиотерапии (Электросон, Трансаир ТЭС, Этранс, ЛЭНАР, МДМ, Амплипульс, Спектр-ЛЦ, Соллюкс: 100 MDL / 30 мин) под руководством д-ра Игоря Ревенко. Запись: 022 60 50 60.`
         : locale === "ua"
           ? `Медичний центр Revimed PLUS+ у Кишиневі (Чокана, вул. Мірча чел Бетрин 13/2) оснащений ${items.length} профільними апаратами для функціональної діагностики (RHEOTEST 500 MDL, АМП 1600 MDL) та нейротропної фізіотерапії (Електросон, Трансаір ТЕС, Етранс, ЛЕНАР, МДМ, Ампліпульс, Спектр-ЛЦ, Соллюкс: 100 MDL / 30 хв) під керівництвом д-ра Ігоря Ревенка. Запис: 022 60 50 60.`
           : `Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2) dispune de ${items.length} echipamente medicale specializate pentru diagnostic funcțional (RHEOTEST 500 MDL, AMP 1600 MDL) și fizioterapie neurotropă (Electrosomn, Transair TES, Etrans, LENAR, MDM, Amplipuls, Spectr-LC, Solux: 100 MDL / 30 min), sub coordonarea Dr. Igor Revenco. Programări: 022 60 50 60.`}
     </p>
    </aside>
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
