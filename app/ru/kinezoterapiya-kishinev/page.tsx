import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/kinezoterapiya-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/kinetoterapie-chisinau/", ru: "/ru/kinezoterapiya-kishinev/", "x-default": "/kinetoterapie-chisinau/" },
 title: "Кинезотерапия Кишинёв (250 MDL/час) — Реабилитация спины и после инсульта",
 description: "Кинезотерапия и комбинированная электротерапия + кинезотерапия в Кишинёве (Чеканы) в Revimed PLUS+ — 250 MDL/час. Грыжа диска, остеохондроз, инсульт. 022 60 50 60."
});

export default function RuKinezoterapiyaKishinevPage() {
 return (
  <LocalConditionLanding
   lang="ru"
   path="/ru/kinezoterapiya-kishinev"
   crumbLabel="Кинезотерапия Кишинёв"
   h1="Кинезотерапия и реабилитация в Кишинёве (Чеканы)"
   lead="Индивидуальные программы кинезотерапии и физиотерапии для восстановления позвоночника, суставов и двигательных функций после инсульта и травм."
   directAnswer="В медицинском центре Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2) комбинированное лечение электротерапия + кинезотерапия стоит 250 MDL/час, мануальная физиотерапия (45 мин) — 180 MDL, сеанс физиотерапии — 150 MDL. Запись: 022 60 50 60."
   introParagraph="Медицинская кинезотерапия укрепляет глубокие мышцы спины, снимает перегрузку с межпозвоночных дисков и безопасно возвращает подвижность."
   symptomsHeading="Кому показана кинезотерапия"
   symptoms={[
    "Грыжа диска, протрузии, ишиас и хронические боли в пояснице и шее;",
    "Нейрореабилитация после инсульта и травм;",
    "Сколиоз, нарушения осанки и мышечный дисбаланс;",
    "Восстановление суставов и спины после операций."
]}
   approachHeading="Сочетание кинезотерапии и физиотерапии"
   approachParagraphs={[
    "Комбинация обезболивающей электротерапии (Амплипульс, электрофорез) с дозированным движением даёт быстрый и устойчивый результат.",
    "Программа подбирается индивидуально после консультации д-ра Игоря Ревенко."
]}
   equipmentHeading="Аппараты для реабилитации"
   equipmentCards={[
    {
        "slug": "amplipuls-5",
        "title": "Амплипульс (СМТ)",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Обезболивание и стимуляция мышц."
    },
    {
        "slug": "aparat-electroforeza-medicamentoasa",
        "title": "Электрофорез",
        "image": "/images/equipment/aparat-electroforeza-medicamentoasa.webp",
        "desc": "Местное противовоспалительное действие."
    },
    {
        "slug": "lampa-solux",
        "title": "Лампа Соллюкс",
        "image": "/images/equipment/lampa-solux.webp",
        "desc": "Расслабление мышц перед занятием."
    }
]}
   faqs={[
    {
        "q": "Сколько стоит кинезотерапия в Кишинёве?",
        "a": "Комбинированный сеанс электротерапия + кинезотерапия стоит 250 MDL/час, мануальная физиотерапия — 180 MDL."
    }
]}
   relatedLinks={[
    {
        "href": "/ru/fizioterapiya-kishinev/",
        "label": "Физиотерапия Кишинёв"
    },
    {
        "href": "/ru/lechebnyy-massazh-kishinev/",
        "label": "Лечебный массаж"
    },
    {
        "href": "/ru/gryzha-diska-kishinev/",
        "label": "Грыжа диска"
    },
    {
        "href": "/ru/preturi/",
        "label": "Цены (96 услуг)"
    }
]}
  />
 );
}
