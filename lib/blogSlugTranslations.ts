import type { Lang } from "@/lib/i18n";

export const blogSlugGroups: Record<string, Record<Lang, string>> = {
  plastics: { ro: "protocol-reducerea-expunerii-la-micro-si-nanoplastice", en: "practical-protocol-reducing-exposure-to-micro-and-nanoplastics", ru: "prakticheskiy-protokol-snizhenie-vozdeystviya-mikro-i-nanoplastika", ua: "praktychnyi-protokol-zmenshennia-vplyvu-mikro-ta-nanoplastyku" },
  cancer: {
    ro: "cum-reducem-riscul-de-cancer",
    en: "how-to-reduce-cancer-risk",
    ru: "kak-snizit-risk-raka",
    ua: "yak-znyzyty-ryzyk-raku"
  },
  healthyFoods: {
    ro: "7-alimente-sanatoase-pentru-energie-digestie-si-metabolism",
    en: "7-healthy-foods-for-energy-digestion-and-metabolism",
    ru: "7-poleznyh-produktov-dlya-energii-pishchevareniya-i-metabolizma",
    ua: "7-korysnyh-produktiv-dlya-energiyi-travlennya-i-metabolizmu"
  }
};

export function getTranslatedBlogSlug(slug: string, lang: Lang) {
  for (const group of Object.values(blogSlugGroups)) {
    if (Object.values(group).includes(slug)) {
      return group[lang] || slug;
    }
  }

  return slug;
}
