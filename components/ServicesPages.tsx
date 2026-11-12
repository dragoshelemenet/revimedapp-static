import { notFound } from "next/navigation";
import { servicesText, langPrefix, normalizeLang } from "@/lib/services";
import { getLocalizedService, getLocalizedServices } from "@/lib/servicesLocalized";
import { CatalogList, CatalogDetail } from "./CatalogPages";
export function ServicesListPage({lang = "ro"}: {lang?: string}) {
 const locale = normalizeLang(lang);
 return <CatalogList base={`${langPrefix(locale)}/servicii`} labels={servicesText[locale]} items={getLocalizedServices(locale)} />;
}
export function ServiceDetailPage({lang = "ro", slug}: {lang?: string; slug: string}) {
 const locale = normalizeLang(lang), item = getLocalizedService(locale, slug);
 if (!item) notFound();
 return <CatalogDetail base={`${langPrefix(locale)}/servicii`} labels={servicesText[locale]} item={item} />;
}
