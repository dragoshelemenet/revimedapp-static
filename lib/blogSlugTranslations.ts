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
  },
  herniaDisc: {
    ro: "hernie-de-disc-fara-operatie-cand-ajuta-fizioterapia-chisinau",
    en: "disc-herniation-without-surgery-physiotherapy-neurosurgeon-chisinau",
    ru: "gryzha-diska-bez-operacii-fizioterapiya-neyrohirurg-kishinev",
    ua: "hryzha-dyska-bez-operatsiyi-fizioterapiya-neyrohirurg-kyshyniv"
  },
  migraineVertigo: {
    ro: "dureri-de-cap-migrene-ameteli-cand-mergi-la-neurolog-chisinau",
    en: "headaches-migraines-dizziness-when-to-see-neurologist-chisinau",
    ru: "golovnye-boli-migreni-golovokruzhenie-nevrolog-kishinev",
    ua: "holovni-boli-mihreni-zapamorochennya-nevroloh-kyshyniv"
  },
  pediatricNeuro: {
    ro: "neuropediatru-chisinau-cand-are-nevoie-copilul-de-consultatie",
    en: "pediatric-neurologist-chisinau-when-your-child-needs-consultation",
    ru: "detskiy-nevrolog-kishinev-kogda-pokazat-rebenka-vrachu",
    ua: "dytyachyy-nevroloh-kyshyniv-koly-pokazaty-dytynu-likaryu"
  },
  postStrokeRehab: {
    ro: "recuperare-dupa-avc-chisinau-neurolog-fizioterapie",
    en: "post-stroke-rehabilitation-chisinau-neurology-physiotherapy",
    ru: "reabilitaciya-posle-insulta-kishinev-nevrolog-fizioterapiya",
    ua: "reabilitatsiya-pislya-insultu-kyshyniv-nevroloh-fizioterapiya"
  },
  sciaticaBackPain: {
    ro: "dureri-lombare-sciatica-fizioterapie-chisinau",
    en: "lower-back-pain-sciatica-physiotherapy-chisinau",
    ru: "boli-v-poyasnice-ishias-fizioterapiya-kishinev",
    ua: "boli-v-popereku-ishias-fizioterapiya-kyshyniv"
  },
  insomniaStress: {
    ro: "insomnie-stres-distonie-electrosomn-tes-chisinau",
    en: "insomnia-chronic-stress-electrosleep-tes-therapy-chisinau",
    ru: "bessonnica-stress-vsd-elektroson-tes-terapiya-kishinev",
    ua: "bezsonnya-stres-vsd-elektroson-tes-terapiya-kyshyniv"
  },
  mriPrep: {
    ro: "rmn-ct-reografie-rheotest-pregatire-consultatie-neurologica",
    en: "mri-ct-rheotest-how-to-prepare-neurology-consultation",
    ru: "mrt-kt-reografiya-rheotest-podgotovka-k-nevrologu",
    ua: "mrt-kt-reohrafiya-rheotest-pidhotovka-do-nevroloha"
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
