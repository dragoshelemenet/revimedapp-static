import { translatedTools } from "@/lib/appMeta";
import { withLang, type Lang } from "@/lib/i18n";
import PageHeading from "./PageHeading";
import { ContentSection } from "./ContentLayout";
import SmartCatalogGrid from "./SmartCatalogGrid";
import { JsonLd, breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/seo";

export const applicationsCopy = {
 ro: ["Acasă", "Aplicații", "Aplicații Revimed PLUS+", "Instrumente simple pentru orientare, respirație, postură, recuperare și pregătire pentru consultație.", "Deschide", "Mai multe +", "Restrânge"],
 en: ["Home", "Applications", "Applications Revimed PLUS+", "Simple tools for patients.", "Open", "More +", "Show less"],
 ru: ["Главная", "Приложения", "Приложения Revimed PLUS+", "Простые инструменты для пациентов.", "Открыть", "Показать ещё +", "Свернуть"],
 ua: ["Головна", "Застосунки", "Застосунки Revimed PLUS+", "Прості інструменти для пацієнтів.", "Відкрити", "Показати ще +", "Згорнути"]
};

export default function ApplicationsPage({lang}: {lang: Lang}) {
 const [home,nav,title,subtitle,action,more,less] = applicationsCopy[lang];
 const tools = translatedTools(lang);
 const path = `${withLang("/aplicatii", lang)}/`;
 const items = tools.map((tool) => ({
  id: tool.slug,
  href: withLang(tool.href, lang),
  title: tool.title,
  description: tool.description,
  badge: tool.tag,
  action
 }));

 return <>
  <JsonLd data={breadcrumbJsonLd([
   { name: home, path: withLang("/", lang) },
   { name: nav, path }
  ])} />
  <JsonLd data={collectionPageJsonLd({
   name: title,
   description: subtitle,
   path,
   items: items.map((item) => ({ name: item.title, url: item.href }))
  })} />
  <PageHeading><div><p>{home} / {nav}</p><h1>{title}</h1><p>{subtitle}</p></div></PageHeading>
  <ContentSection>
   <SmartCatalogGrid
    items={items}
    initialCount={3}
    moreLabel={more}
    lessLabel={less}
    useInfoPopover
   />
  </ContentSection>
 </>;
}
