export const languages = ["ro", "en", "ru", "ua"] as const;
export type Lang = typeof languages[number];

export const langLabels: Record<Lang, string> = {
  ro: "RO",
  en: "EN",
  ru: "RU",
  ua: "UA"
};

export function isLang(value: string | undefined): value is Lang {
  return value === "ro" || value === "en" || value === "ru" || value === "ua";
}

export function cleanPath(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (isLang(parts[0])) parts.shift();
  return "/" + parts.join("/");
}

export function withLang(path: string, lang: Lang) {
  if (lang === "ro") return path;
  if (path === "/") return `/${lang}`;
  return `/${lang}${path}`;
}

export const dictionary: Record<Lang, any> = {
  ro: {
    home: "Acasă",
    about: "Despre Noi",
    services: "Servicii",
    apps: "Aplicații",
    prices: "Prețuri",
    gallery: "Galerie",
    blog: "Blog",
    videos: "Video-uri",
    contact: "Contact",
    tools: "Teste și Instrumente",
    heroTitle: "Centru Medical Revimed PLUS+",
    heroSubtitle: "Sănătatea ta, prioritatea noastră",
    servicesButton: "Serviciile Noastre",
    toolsTitle: "Teste și Instrumente",
    toolsSubtitle: "Instrumente educaționale curate, rapide și ușor de folosit.",
    pricesTitle: "Prețuri Revimed PLUS+",
    pricesSubtitle: "Alege categoria și verifică rapid serviciul.",
    readMore: "Deschide →",
    appointment: "Programare",
    languageVersion: "Versiune"
  },
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    apps: "Apps",
    prices: "Prices",
    gallery: "Gallery",
    blog: "Blog",
    videos: "Videos",
    contact: "Contact",
    tools: "Tests and Tools",
    heroTitle: "Revimed PLUS+ Medical Center",
    heroSubtitle: "Your health, our priority",
    servicesButton: "Our Services",
    toolsTitle: "Tests and Tools",
    toolsSubtitle: "Clean, fast and easy-to-use educational tools.",
    pricesTitle: "Revimed PLUS+ Prices",
    pricesSubtitle: "Choose a category and quickly check the service.",
    readMore: "Open →",
    appointment: "Appointment",
    languageVersion: "Version"
  },
  ru: {
    home: "Главная",
    about: "О нас",
    services: "Услуги",
    apps: "Приложения",
    prices: "Цены",
    gallery: "Галерея",
    blog: "Блог",
    videos: "Видео",
    contact: "Контакты",
    tools: "Тесты и инструменты",
    heroTitle: "Медицинский центр Revimed PLUS+",
    heroSubtitle: "Ваше здоровье — наш приоритет",
    servicesButton: "Наши услуги",
    toolsTitle: "Тесты и инструменты",
    toolsSubtitle: "Удобные образовательные инструменты для пациентов.",
    pricesTitle: "Цены Revimed PLUS+",
    pricesSubtitle: "Выберите категорию и быстро проверьте услугу.",
    readMore: "Открыть →",
    appointment: "Запись",
    languageVersion: "Версия"
  },
  ua: {
    home: "Головна",
    about: "Про нас",
    services: "Послуги",
    apps: "Застосунки",
    prices: "Ціни",
    gallery: "Галерея",
    blog: "Блог",
    videos: "Відео",
    contact: "Контакти",
    tools: "Тести та інструменти",
    heroTitle: "Медичний центр Revimed PLUS+",
    heroSubtitle: "Ваше здоров’я — наш пріоритет",
    servicesButton: "Наші послуги",
    toolsTitle: "Тести та інструменти",
    toolsSubtitle: "Зручні освітні інструменти для пацієнтів.",
    pricesTitle: "Ціни Revimed PLUS+",
    pricesSubtitle: "Оберіть категорію та швидко перевірте послугу.",
    readMore: "Відкрити →",
    appointment: "Запис",
    languageVersion: "Версія"
  }
};

export function t(lang: Lang) {
  return dictionary[lang] || dictionary.ro;
}
