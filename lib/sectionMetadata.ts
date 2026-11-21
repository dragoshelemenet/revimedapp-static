import { t, type Lang } from "@/lib/i18n";
import { makeMetadata } from "@/lib/seo";

const sections = {
 "/despre-noi": ["aboutTitle", "aboutText1"],
 "/preturi": ["pricesTitle", "pricesSubtitle"],
 "/contact": ["contactTitle", "contactSubtitle"],
 "/galerie": ["galleryTitle", "gallerySubtitle"],
 "/blog": ["blogTitle", "blogSubtitle"]
} as const;

const seoOverrides: Partial<Record<SectionPath, Record<Lang, { title: string; description: string }>>> = {
 "/preturi": {
  ro: {
   title: "Prețuri Neurolog, Neurochirurg & Fizioterapie Chișinău",
   description:
    "Lista orientativă de prețuri pentru 101 servicii medicale la Revimed PLUS+ Chișinău (Ciocana): consultație neurolog, neurochirurg, neuropediatru, fizioterapie și recuperare, cu convertor MDL/EUR/RON."
  },
  en: {
   title: "Prices — Neurology, Neurosurgery & Physiotherapy Chișinău",
   description:
    "Indicative price list for 101 medical services at Revimed PLUS+ Chișinău: neurology, neurosurgery, pediatric neurology, physiotherapy, and rehabilitation with MDL/EUR/USD converter."
  },
  ru: {
   title: "Цены: Невролог, Нейрохирург и Физиотерапия Кишинёв",
   description:
    "Ориентировочные цены на 101 медицинскую услугу в Revimed PLUS+ Кишинёв (Чеканы): консультация невролога, нейрохирурга, детского невролога, физиотерапия и реабилитация с конвертером валют."
  },
  ua: {
   title: "Ціни: Невролог, Нейрохірург і Фізіотерапія Кишинів",
   description:
    "Орієнтовні ціни на 101 медичну послугу в Revimed PLUS+ Кишинів (Чекани): консультація невролога, нейрохірурга, дитячого невролога, фізіотерапія та реабілітація з конвертером валют."
  }
 },
 "/contact": {
  ro: {
   title: "Contact & Programări Neurolog Chișinău (Ciocana)",
   description:
    "Programări la Centrul Medical Revimed PLUS+ Chișinău, Str. Mircea cel Bătrân 13/2 (Ciocana). Telefon 022 60 50 60 / +373 79 422 908, orar Luni–Vineri 09:00–15:00 și hartă interactivă."
  },
  en: {
   title: "Contact & Appointments — Neurology Clinic Chișinău",
   description:
    "Book an appointment at Revimed PLUS+ Medical Center, Str. Mircea cel Bătrân 13/2, Chișinău. Phone 022 60 50 60 / +373 79 422 908, Mon–Fri 09:00–15:00, interactive map & transit."
  },
  ru: {
   title: "Контакты и запись к неврологу в Кишинёве (Чеканы)",
   description:
    "Запись в медицинский центр Revimed PLUS+ Кишинёв, ул. Мирча чел Бэтрын 13/2 (Чеканы). Телефон 022 60 50 60 / +373 79 422 908, Пн–Пт 09:00–15:00, карта и транспорт."
  },
  ua: {
   title: "Контакти та запис до невролога в Кишиневі (Чекани)",
   description:
    "Запис у медичний центр Revimed PLUS+ Кишинів, вул. Мірча чел Бетрин 13/2 (Чекани). Телефон 022 60 50 60 / +373 79 422 908, Пн–Пт 09:00–15:00, карта і транспорт."
  }
 },
 "/despre-noi": {
  ro: {
   title: "Despre Centrul Medical Revimed PLUS+ Chișinău",
   description:
    "Peste 20 de ani de activitate clinică în Chișinău și peste 35 de ani experiență Dr. Igor Revenco în neurologie, neurochirurgie, neuropediatrie, fizioterapie și recuperare medicală."
  },
  en: {
   title: "About Revimed PLUS+ Medical Center Chișinău",
   description:
    "Over 20 years of clinical care in Chișinău led by Dr. Igor Revenco (35+ years experience in neurology, neurosurgery, pediatric neurology, and medical rehabilitation)."
  },
  ru: {
   title: "О медицинском центре Revimed PLUS+ Кишинёв",
   description:
    "Более 20 лет клинической практики в Кишинёве под руководством д-ра Игоря Ревенко (35+ лет опыта в неврологии, нейрохирургии, детской неврологии и физиотерапии)."
  },
  ua: {
   title: "Про медичний центр Revimed PLUS+ Кишинів",
   description:
    "Понад 20 років клінічної практики в Кишиневі під керівництвом д-ра Ігоря Ревенка (35+ років досвіду в неврології, нейрохірургії, дитячій неврології та фізіотерапії)."
  }
 }
};

export type SectionPath = keyof typeof sections;

export function sectionMetadata(lang: Lang, path: SectionPath) {
 const override = seoOverrides[path]?.[lang];
 if (override) {
  return makeMetadata({ lang, path, title: override.title, description: override.description });
 }
 const text = t(lang);
 const [title, description] = sections[path];
 return makeMetadata({ lang, path, title: text[title], description: text[description] });
}
