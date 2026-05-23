import { servicesRo, normalizeLang } from "@/lib/services";
import { servicesEn } from "@/lib/services.en";
import { servicesRu } from "@/lib/services.ru";
import { servicesUa } from "@/lib/services.ua";

export function getLocalizedServices(lang?: string) {
  const safeLang = normalizeLang(lang);
  if (safeLang === "en") return servicesRo.map((item) => servicesEn[item.slug] || item);
  if (safeLang === "ru") return servicesRo.map((item) => servicesRu[item.slug] || item);
  if (safeLang === "ua") return servicesRo.map((item) => servicesUa[item.slug] || item);
  return servicesRo;
}

export function getLocalizedService(lang: string | undefined, slug: string) {
  const safeLang = normalizeLang(lang);
  if (safeLang === "en" && servicesEn[slug]) return servicesEn[slug];
  if (safeLang === "ru" && servicesRu[slug]) return servicesRu[slug];
  if (safeLang === "ua" && servicesUa[slug]) return servicesUa[slug];
  return servicesRo.find((item) => item.slug === slug);
}
