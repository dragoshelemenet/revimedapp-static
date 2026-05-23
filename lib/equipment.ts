export type SiteLang = "ro" | "en" | "ru" | "ua";

export type EquipmentItem = {
  slug: string;
  title: string;
  short: string;
  category: string;
};

export const equipmentItems: EquipmentItem[] = [
  {
    slug: "aparat-amp",
    title: "Aparat AMP",
    category: "Diagnostic expres",
    short: "Analizator spectral al formulei sanguine / laborator expres.",
  },
  {
    slug: "electrosomn-4t",
    title: "Electrosomn-4T",
    category: "Electrosomn",
    short: "Aparat portabil pentru terapia prin electrosomn.",
  },
  {
    slug: "electrosomn-5-es-10-5",
    title: "Electrosomn-5 / ES-10-5",
    category: "Electrosomn",
    short: "Aparat portabil pentru terapia prin electrosomn.",
  },
  {
    slug: "electrosomn-3",
    title: "Electrosomn-3",
    category: "Electrosomn",
    short: "Aparat staționar pentru terapia prin electrosomn, pentru 4 pacienți simultan.",
  },
  {
    slug: "etrans-1",
    title: "Etrans-1",
    category: "Electroanalgezie transcraniană",
    short: "Aparat pentru electroanalgezie / electrotranchilizare transcraniană.",
  },
  {
    slug: "etrans-2",
    title: "Etrans-2",
    category: "Electroanalgezie transcraniană",
    short: "Aparat pentru proceduri transcraniene.",
  },
  {
    slug: "etrans-3",
    title: "Etrans-3",
    category: "Electroanalgezie transcraniană",
    short: "Aparat pentru proceduri transcraniene.",
  },
  {
    slug: "transair-01p-transair-05",
    title: "Transair-01P / Transair-05",
    category: "Stimulare transcraniană",
    short: "Aparat din gama Transair pentru proceduri de stimulare transcraniană.",
  },
  {
    slug: "transair-01s-transair-04",
    title: "Transair-01S / Transair-04",
    category: "Stimulare transcraniană",
    short: "Aparat din gama Transair pentru proceduri de stimulare transcraniană.",
  },
  {
    slug: "transair-01s-transair-03",
    title: "Transair-01S / Transair-03",
    category: "Stimulare transcraniană",
    short: "Aparat din gama Transair pentru proceduri de stimulare transcraniană.",
  },
  {
    slug: "lenar",
    title: "LENAR",
    category: "Neurostimulare",
    short: "Echipament utilizat în proceduri de neurostimulare și reglare funcțională.",
  },
  {
    slug: "bi-lenar",
    title: "Bi-LENAR",
    category: "Neurostimulare",
    short: "Echipament din gama LENAR pentru proceduri funcționale.",
  },
  {
    slug: "mdm-k",
    title: "MDM-K",
    category: "Modulare mezodiencefalică",
    short: "Aparat compact pentru modulare mezodiencefalică.",
  },
  {
    slug: "mdm-101",
    title: "MDM-101",
    category: "Modulare mezodiencefalică",
    short: "Aparat pentru 4 pacienți.",
  },
  {
    slug: "mdm-2000",
    title: "MDM-2000",
    category: "Modulare mezodiencefalică",
    short: "Complex computerizat pentru MDM.",
  },
  {
    slug: "amplipuls-4",
    title: "Amplipuls-4",
    category: "Amplipulsterapie",
    short: "Aparat pentru amplipulsterapie transcraniană.",
  },
  {
    slug: "amplipuls-5",
    title: "Amplipuls-5",
    category: "Amplipulsterapie",
    short: "Aparat pentru proceduri de amplipulsterapie.",
  },
  {
    slug: "amplipuls-6",
    title: "Amplipuls-6",
    category: "Amplipulsterapie",
    short: "Aparat pentru proceduri de amplipulsterapie.",
  },
  {
    slug: "kandadzia-kang-da-jia-lqx-2000a",
    title: "Kandadzia / Kang Da Jia / LQX-2000A",
    category: "Vibromasaj și electrostimulare",
    short: "Aparat vibromasaj / electrostimulator de masaj reflex.",
  },
  {
    slug: "aparat-electroforeza-medicamentoasa",
    title: "Aparat pentru electroforeză medicamentoasă",
    category: "Electroforeză",
    short: "Echipament pentru proceduri de electroforeză medicamentoasă.",
  },
  {
    slug: "spectr-lc",
    title: "Spectr-LC",
    category: "Infraroșu",
    short: "Aparat pentru iradiere infraroșie.",
  },
  {
    slug: "lampa-solux",
    title: "Lampă Solux",
    category: "Proceduri termice",
    short: "Lampă pentru proceduri termice.",
  },
  {
    slug: "detox-spa-bio",
    title: "DETOX Spa Bio",
    category: "Detoxifiere ionică",
    short: "Sistem de curățare ionică / detoxifiere.",
  },
  {
    slug: "spa-sy-f088-detox-bio-178",
    title: "SPA SY-F088 / DETOX BIO-178",
    category: "Detoxifiere ionică",
    short: "Sistem de curățare și detoxifiere.",
  },
  {
    slug: "rheotest",
    title: "RHEOTEST",
    category: "Diagnostic funcțional",
    short: "Reograf computerizat.",
  },
];

export function normalizeLang(lang?: string): SiteLang {
  if (lang === "en" || lang === "ru" || lang === "ua") return lang;
  return "ro";
}

export function getEquipmentItem(slug: string) {
  return equipmentItems.find((item) => item.slug === slug);
}

export const equipmentText: Record<SiteLang, {
  nav: string;
  breadcrumbHome: string;
  listTitle: string;
  listSubtitle: string;
  detailEyebrow: string;
  open: string;
  back: string;
  seoTitle: string;
  seoDescription: string;
  placeholderTitle: string;
  placeholderText: string;
  usefulFor: string;
  medicalNote: string;
}> = {
  ro: {
    nav: "Utilaj",
    breadcrumbHome: "Acasă",
    listTitle: "Utilaj medical Revimed PLUS+",
    listSubtitle: "Echipamente, aparate și metode utilizate pentru diagnostic funcțional, recuperare și proceduri complementare.",
    detailEyebrow: "Utilaj Revimed PLUS+",
    open: "Deschide",
    back: "Înapoi la utilaj",
    seoTitle: "Utilaj medical Revimed PLUS+",
    seoDescription: "Listă de echipamente medicale și tehnologii utilizate la Revimed PLUS+.",
    placeholderTitle: "Descriere completă în pregătire",
    placeholderText: "Această pagină este pregătită pentru SEO. Urmează să adăugăm descriere detaliată, indicații orientative, beneficii, limite, imagini și explicații clare pentru pacienți.",
    usefulFor: "Pentru ce poate fi util",
    medicalNote: "Informațiile au caracter educațional și nu înlocuiesc consultația medicală.",
  },
  en: {
    nav: "Equipment",
    breadcrumbHome: "Home",
    listTitle: "Revimed PLUS+ medical equipment",
    listSubtitle: "Equipment, devices and methods used for functional diagnostics, recovery and complementary procedures.",
    detailEyebrow: "Revimed PLUS+ equipment",
    open: "Open",
    back: "Back to equipment",
    seoTitle: "Revimed PLUS+ medical equipment",
    seoDescription: "Medical equipment and technologies used at Revimed PLUS+.",
    placeholderTitle: "Full description coming soon",
    placeholderText: "This page is prepared for SEO. We will add detailed explanations, indicative uses, benefits, limitations, images and patient-friendly information.",
    usefulFor: "What it may be useful for",
    medicalNote: "The information is educational and does not replace medical consultation.",
  },
  ru: {
    nav: "Оборудование",
    breadcrumbHome: "Главная",
    listTitle: "Медицинское оборудование Revimed PLUS+",
    listSubtitle: "Оборудование, аппараты и методы для функциональной диагностики, восстановления и дополнительных процедур.",
    detailEyebrow: "Оборудование Revimed PLUS+",
    open: "Открыть",
    back: "Назад к оборудованию",
    seoTitle: "Медицинское оборудование Revimed PLUS+",
    seoDescription: "Медицинское оборудование и технологии, используемые в Revimed PLUS+.",
    placeholderTitle: "Полное описание готовится",
    placeholderText: "Эта страница подготовлена для SEO. Позже мы добавим подробное описание, ориентировочные показания, преимущества, ограничения, изображения и понятные объяснения для пациентов.",
    usefulFor: "Для чего может быть полезно",
    medicalNote: "Информация носит образовательный характер и не заменяет консультацию врача.",
  },
  ua: {
    nav: "Обладнання",
    breadcrumbHome: "Головна",
    listTitle: "Медичне обладнання Revimed PLUS+",
    listSubtitle: "Обладнання, апарати та методи для функціональної діагностики, відновлення і додаткових процедур.",
    detailEyebrow: "Обладнання Revimed PLUS+",
    open: "Відкрити",
    back: "Назад до обладнання",
    seoTitle: "Медичне обладнання Revimed PLUS+",
    seoDescription: "Медичне обладнання та технології, що використовуються в Revimed PLUS+.",
    placeholderTitle: "Повний опис готується",
    placeholderText: "Ця сторінка підготовлена для SEO. Пізніше ми додамо детальний опис, орієнтовне застосування, переваги, обмеження, зображення і зрозумілі пояснення для пацієнтів.",
    usefulFor: "Для чого може бути корисним",
    medicalNote: "Інформація має освітній характер і не замінює консультацію лікаря.",
  },
};

export function langPrefix(lang: SiteLang) {
  return lang === "ro" ? "" : `/${lang}`;
}
