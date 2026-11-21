import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/nevrolog-buyukany-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/neurolog-buiucani-chisinau/", ru: "/ru/nevrolog-buyukany-kishinev/", "x-default": "/neurolog-buiucani-chisinau/" },
 title: "Невролог и физиотерапия для жителей Буюкан, Кишинёв — Revimed PLUS+",
 description: "Консультация невролога (500 MDL), нейрохирурга (300 MDL), ЭЭГ (1400 MDL) и 25 аппаратов физиотерапии в Revimed PLUS+ Кишинёв — д-р Игорь Ревенко, 35+ лет. 022 60 50 60."
});

export default function RuNevrologBuyukanyKishinevPage() {
 return (
  <LocalConditionLanding
   lang="ru"
   path="/ru/nevrolog-buyukany-kishinev"
   crumbLabel="Невролог Буюканы"
   h1="Невролог, нейрохирург и физиотерапия для пациентов с Буюкан, Кишинёв"
   lead="Комплексная неврологическая помощь и 25 аппаратов физиотерапии в клинике Revimed PLUS+ под руководством д-ра Игоря Ревенко (35+ лет опыта)."
   directAnswer="Пациенты с Буюкан обращаются в центр Revimed PLUS+ (Кишинёв, ул. Мирча чел Бэтрын 13/2) к д-ру Игорю Ревенко (35+ лет, член EANS): невролог — 500 MDL, нейрохирург — 300 MDL, ЭЭГ — 1400 MDL, физиотерапия — 150 MDL. Запись: 022 60 50 60."
   introParagraph="В одной клинике можно получить консультацию опытного невролога и нейрохирурга, пройти ЭЭГ, РЭГ или АМП и сразу начать курс физиотерапии."
   symptomsHeading="Основные направления приёма"
   symptoms={[
    "Разбор МРТ/КТ позвоночника и головного мозга + консервативное лечение;",
    "Взрослый и детский невролог;",
    "25 аппаратов физиотерапии (от 150 MDL) и лечебный массаж (200 MDL)."
]}
   approachHeading="Запись без очередей"
   approachParagraphs={[
    "Запись по телефонам 022 60 50 60 / +373 79 422 908 (Пн–Пт 09:00–15:00)."
]}
   equipmentHeading="Оборудование клиники"
   equipmentCards={[
    {
        "slug": "aparat-amp",
        "title": "Анализатор АМП",
        "image": "/images/equipment/aparat-amp.webp",
        "desc": "117 показателей без крови — 1000 MDL."
    },
    {
        "slug": "electrosomn-5-es-10-5",
        "title": "Электросон-5",
        "image": "/images/equipment/electrosomn-5-es-10-5.webp",
        "desc": "Бессонница и стресс — 150 MDL."
    },
    {
        "slug": "amplipuls-5",
        "title": "Амплипульс (СМТ)",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Боли в спине — 150 MDL."
    }
]}
   faqs={[
    {
        "q": "Сколько стоит приём невролога и нейрохирурга?",
        "a": "Невролог — 500 MDL (повторный 400 MDL), нейрохирург — 300 MDL."
    }
]}
   relatedLinks={[
    {
        "href": "/ru/nevrolog-kishinev/",
        "label": "Невролог Кишинёв"
    },
    {
        "href": "/ru/neyrohirurg-kishinev/",
        "label": "Нейрохирург Кишинёв"
    },
    {
        "href": "/ru/preturi/",
        "label": "Цены (101 услуга)"
    }
]}
  />
 );
}
