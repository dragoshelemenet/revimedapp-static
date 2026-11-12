import { translatedTools } from "@/lib/appMeta";
import { withLang, type Lang } from "@/lib/i18n";
import PageHeading from "./PageHeading";
import { ContentSection, CardGrid, ListingCard } from "./ContentLayout";
export const applicationsCopy = {
 ro: ["Acasă", "Aplicații", "Aplicații Revimed PLUS+", "Instrumente simple pentru orientare, respirație, postură, recuperare și pregătire pentru consultație.", "Deschide"],
 en: ["Home", "Applications", "Applications Revimed PLUS+", "Simple tools for patients.", "Open"],
 ru: ["Главная", "Приложения", "Приложения Revimed PLUS+", "Простые инструменты для пациентов.", "Открыть"],
 ua: ["Головна", "Застосунки", "Застосунки Revimed PLUS+", "Прості інструменти для пацієнтів.", "Відкрити"]
};
export default function ApplicationsPage({lang}: {lang: Lang}) {
 const [home,nav,title,subtitle,action] = applicationsCopy[lang];
 return <><PageHeading><div><p>{home} / {nav}</p><h1>{title}</h1><p>{subtitle}</p></div></PageHeading>
  <ContentSection><CardGrid>{translatedTools(lang).map(tool => <ListingCard key={tool.slug} href={withLang(tool.href,lang)} title={tool.title} description={tool.description} badge={tool.tag} action={action} />)}</CardGrid></ContentSection>
 </>;
}
