import { equipmentItems, normalizeLang } from "@/lib/equipment";
import { equipmentRu } from "@/lib/equipment.ru";
import { equipmentUa } from "@/lib/equipment.ua";

export function getLocalizedEquipmentItems(lang?: string) {
  const safeLang = normalizeLang(lang);

  if (safeLang === "ru") {
    return equipmentItems.map((item) => equipmentRu[item.slug] || item);
  }

  if (safeLang === "ua") {
    return equipmentItems.map((item) => equipmentUa[item.slug] || item);
  }

  return equipmentItems;
}

export function getLocalizedEquipmentItem(lang: string | undefined, slug: string) {
  const safeLang = normalizeLang(lang);

  if (safeLang === "ru" && equipmentRu[slug]) return equipmentRu[slug];
  if (safeLang === "ua" && equipmentUa[slug]) return equipmentUa[slug];

  return equipmentItems.find((item) => item.slug === slug);
}
