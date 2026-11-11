import { equipmentItems, normalizeLang } from "@/lib/equipment";
import { equipmentEn } from "@/lib/equipment.en";
import { equipmentRu } from "@/lib/equipment.ru";
import { equipmentUa } from "@/lib/equipment.ua";

export function getLocalizedEquipmentItems(lang?: string) {
  const safeLang = normalizeLang(lang);

  if (safeLang === "en") {
    return equipmentItems.map((item) => equipmentEn[item.slug] || item);
  }

  if (safeLang === "ru") {
    return equipmentItems.map((item) => equipmentRu[item.slug] || item);
  }

  if (safeLang === "ua") {
    return equipmentItems.map((item) => equipmentUa[item.slug] || item);
  }

  return equipmentItems;
}

export function getLocalizedEquipmentItem(lang: string | undefined, slug: string) {
 return getLocalizedEquipmentItems(lang).find(item => item.slug === slug);
}

const equipmentSlugs = equipmentItems.map(item => item.slug);
if (new Set(equipmentSlugs).size !== equipmentSlugs.length) throw new Error("Duplicate equipment slug");
