import { servicesRo, normalizeLang, type ServiceItem, type SiteLang } from "@/lib/services";
import { servicesEn } from "@/lib/services.en";
import { servicesRu } from "@/lib/services.ru";
import { servicesUa } from "@/lib/services.ua";

type VisualMeta = {
  image: string;
  price: Record<SiteLang, string>;
  highlights: Record<SiteLang, string[]>;
};

const serviceVisuals: Record<string, VisualMeta> = {
  "consultatii-neurologice": {
    image: "/images/services/consultatii-neurologice.webp",
    price: { ro: "500 MDL", en: "500 MDL", ru: "500 MDL", ua: "500 MDL" },
    highlights: {
      ro: ["Adulți & Copii", "Dr. Igor Revenco · 35+ ani", "Repetată: 400 MDL"],
      en: ["Adults & Children", "Dr. Igor Revenco · 35+ yrs", "Follow-up: 400 MDL"],
      ru: ["Взрослые и дети", "Д-р Игорь Ревенко · 35+ лет", "Повторный: 400 MDL"],
      ua: ["Дорослим і дітям", "Д-р Ігор Ревенко · 35+ років", "Повторна: 400 MDL"]
    }
  },
  "consultatii-neurochirurgie": {
    image: "/images/services/consultatii-neurochirurgie.webp",
    price: { ro: "500 MDL", en: "500 MDL", ru: "500 MDL", ua: "500 MDL" },
    highlights: {
      ro: ["Evaluare RMN / CT", "Hernie de disc & stenoză", "A doua opinie EANS"],
      en: ["MRI / CT Review", "Disc Herniation & Stenosis", "EANS Second Opinion"],
      ru: ["Разбор МРТ / КТ", "Грыжа диска и стеноз", "Второе мнение EANS"],
      ua: ["Розбір МРТ / КТ", "Грижа диска та стеноз", "Друга думка EANS"]
    }
  },
  "fizioterapie-si-reabilitare": {
    image: "/images/services/fizioterapie-si-reabilitare.webp",
    price: { ro: "100 MDL / 30 min", en: "100 MDL / 30 min", ru: "100 MDL / 30 мин", ua: "100 MDL / 30 хв" },
    highlights: {
      ro: ["25 aparate medicale", "Masaj 60 min: 200 MDL", "Kinetoterapie: 250 MDL"],
      en: ["25 Medical Devices", "Massage 60 min: 200 MDL", "Kinesiotherapy: 250 MDL"],
      ru: ["25 аппаратов", "Массаж 60 мин: 200 MDL", "Кинезотерапия: 250 MDL"],
      ua: ["25 апаратів", "Масаж 60 хв: 200 MDL", "Кінезотерапія: 250 MDL"]
    }
  },
  "diagnostic-functional": {
    image: "/images/services/diagnostic-functional.webp",
    price: { ro: "200–1600 MDL", en: "200–1600 MDL", ru: "200–1600 MDL", ua: "200–1600 MDL" },
    highlights: {
      ro: ["EEG: 1600 MDL", "AMP 117 indici: 1000 MDL", "REG RHEOTEST: 500 MDL"],
      en: ["EEG: 1600 MDL", "AMP 117 indices: 1000 MDL", "REG RHEOTEST: 500 MDL"],
      ru: ["ЭЭГ: 1600 MDL", "АМП 117 пок.: 1000 MDL", "РЭГ RHEOTEST: 500 MDL"],
      ua: ["ЕЕГ: 1600 MDL", "АМП 117 пок.: 1000 MDL", "РЕГ RHEOTEST: 500 MDL"]
    }
  },
  "terapie-balneara": {
    image: "/images/services/terapie-balneara.webp",
    price: { ro: "150–400 MDL", en: "150–400 MDL", ru: "150–400 MDL", ua: "150–400 MDL" },
    highlights: {
      ro: ["Masaj cu nămol: 300 MDL", "Acupunctură: 400 MDL", "Hidroterapie + masaj"],
      en: ["Mud Massage: 300 MDL", "Acupuncture: 400 MDL", "Hydrotherapy + Massage"],
      ru: ["Массаж с грязью: 300 MDL", "Иглоукалывание: 400 MDL", "Гидротерапия + массаж"],
      ua: ["Масаж з гряззю: 300 MDL", "Голкорефлексотерапія: 500 MDL", "Гідротерапія + масаж"]
    }
  },
  "electroterapie": {
    image: "/images/services/electroterapie.webp",
    price: { ro: "150 MDL / oră", en: "150 MDL / hr", ru: "150 MDL / час", ua: "150 MDL / год" },
    highlights: {
      ro: ["Electrosomn-3/4T/5", "Amplipuls-4/5/6 (SMT)", "Electroforeză & Transair"],
      en: ["Electrosomn-3/4T/5", "Amplipuls-4/5/6 (SMT)", "Electrophoresis & Transair"],
      ru: ["Электросон-3/4Т/5", "Амплипульс-4/5/6 (СМТ)", "Электрофорез и Трансаир"],
      ua: ["Електросон-3/4Т/5", "Ампліпульс-4/5/6 (СМТ)", "Електрофорез і Трансаір"]
    }
  }
};

function enrichService(item: ServiceItem, lang: SiteLang): ServiceItem {
  const v = serviceVisuals[item.slug];
  if (!v) return item;
  return {
    ...item,
    image: v.image,
    priceBadge: v.price[lang],
    highlights: v.highlights[lang]
  };
}

export function getLocalizedServices(lang?: string): ServiceItem[] {
  const safeLang = normalizeLang(lang);
  const raw =
    safeLang === "en"
      ? servicesRo.map((item) => servicesEn[item.slug] || item)
      : safeLang === "ru"
        ? servicesRo.map((item) => servicesRu[item.slug] || item)
        : safeLang === "ua"
          ? servicesRo.map((item) => servicesUa[item.slug] || item)
          : servicesRo;
  return raw.map((item) => enrichService(item, safeLang));
}

export function getLocalizedService(lang: string | undefined, slug: string): ServiceItem | undefined {
  const safeLang = normalizeLang(lang);
  const base =
    safeLang === "en" && servicesEn[slug]
      ? servicesEn[slug]
      : safeLang === "ru" && servicesRu[slug]
        ? servicesRu[slug]
        : safeLang === "ua" && servicesUa[slug]
          ? servicesUa[slug]
          : servicesRo.find((item) => item.slug === slug);
  return base ? enrichService(base, safeLang) : undefined;
}
