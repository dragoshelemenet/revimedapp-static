import { notFound } from "next/navigation";
import { equipmentText, langPrefix, normalizeLang } from "@/lib/equipment";
import { getLocalizedEquipmentItem, getLocalizedEquipmentItems } from "@/lib/equipmentLocalized";
import { CatalogList, CatalogDetail } from "./CatalogPages";
export function EquipmentListPage({lang = "ro"}: {lang?: string}) {
 const locale = normalizeLang(lang);
 return <CatalogList base={`${langPrefix(locale)}/utilaj`} labels={equipmentText[locale]} items={getLocalizedEquipmentItems(locale)} />;
}
export function EquipmentDetailPage({lang = "ro", slug}: {lang?: string; slug: string}) {
 const locale = normalizeLang(lang), item = getLocalizedEquipmentItem(locale, slug);
 if (!item) notFound();
 return <CatalogDetail base={`${langPrefix(locale)}/utilaj`} labels={equipmentText[locale]} item={item} />;
}
