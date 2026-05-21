
const yogaV2Fallback = {
 slug: "revimed-yoga-tibetan",
 href: "/aplicatii/teste-si-instrumente/revimed-yoga-tibetan",
 title: {
  ro: "REVIMED Yoga Tibetan",
  en: "REVIMED Tibetan Yoga",
  ru: "REVIMED Тибетская йога",
  ua: "REVIMED Тибетська йога"
 },
 description: {
  ro: "Respirație ghidată cu programe pentru anxietate, somn, respirație, cardiovascular, digestiv și energie.",
  en: "Guided breathing programs for anxiety, sleep, breathing, cardiovascular, digestion and energy.",
  ru: "Дыхательные программы для тревоги, сна, дыхания, сердца, пищеварения и энергии.",
  ua: "Дихальні програми для тривоги, сну, дихання, серця, травлення та енергії."
 },
 tag: { ro: "Respirație", en: "Breathing", ru: "Дыхание", ua: "Дихання" },
 position: 3
};

import type { Lang } from "@/lib/i18n";
import { getVisibleAppsForLang } from "@/lib/appsRegistry";

export type AppTool = {
 slug: string;
 href: string;
 title: string;
 description: string;
 tag: string;
 image: string;
};

export function translatedTools(lang: Lang): AppTool[] {
 return getVisibleAppsForLang(lang).map((app) => ({
  slug: app.slug,
  href: app.href,
  title: app.title,
  description: app.description,
  tag: app.tag,
  image: app.image
 }));
}
