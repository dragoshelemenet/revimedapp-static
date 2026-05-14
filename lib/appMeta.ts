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
