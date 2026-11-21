import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/nevrolog-tsentr-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/neurolog-centru-chisinau/", ru: "/ru/nevrolog-tsentr-kishinev/", "x-default": "/neurolog-centru-chisinau/" },
 title: "Невролог и нейрохирург Кишинёв Центр — Без очередей | Revimed PLUS+",
 description: "Быстрая запись без очередей для пациентов из центра Кишинёва: д-р Игорь Ревенко (35+ лет, EANS) в Revimed PLUS+ — невролог 500 MDL, нейрохирург 300 MDL, физиотерапия 150 MDL. 022 60 50 60."
});

export default function RuNevrologTsentrKishinevPage() {
 return (
  <LocalConditionLanding
   lang="ru"
   path="/ru/nevrolog-tsentr-kishinev"
   crumbLabel="Невролог Центр"
   h1="Невролог и нейрохирург для пациентов из Центра Кишинёва — Без очередей"
   lead="Внимательный приём д-ра Игоря Ревенко (35+ лет опыта), функциональная диагностика и 25 аппаратов физиотерапии в 12–15 минутах от центра."
   directAnswer="Медицинский центр Revimed PLUS+ (Кишинёв, ул. Мирча чел Бэтрын 13/2, 12–15 мин от Центра): приём невролога д-ра Игоря Ревенко — 500 MDL, нейрохирурга — 300 MDL, ЭЭГ — 1400 MDL, физиотерапия — 150 MDL. Запись без направления: 022 60 50 60."
   introParagraph="Без многонедельных очередей: точное время приёма, разбор МРТ/КТ, диагностика и процедуры реабилитации в одной клинике."
   symptomsHeading="Доступные направления"
   symptoms={[
    "Взрослый и детский невролог (500 MDL), нейрохирург (300 MDL);",
    "ЭЭГ (1400 MDL), РЭГ (500 MDL), АМП 117 показателей (1000 MDL);",
    "Физиотерапия (150 MDL), лечебный массаж (200 MDL), кинезотерапия (250 MDL)."
]}
   approachHeading="Запись без направления"
   approachParagraphs={[
    "Направление семейного врача не требуется. Запись: 022 60 50 60 (Пн–Пт 09:00–15:00)."
]}
   equipmentHeading="Оборудование клиники"
   equipmentCards={[
    {
        "slug": "rheotest",
        "title": "RHEOTEST (РЭГ)",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Сосуды мозга — 500 MDL."
    },
    {
        "slug": "electrosomn-5-es-10-5",
        "title": "Электросон-5",
        "image": "/images/equipment/electrosomn-5-es-10-5.webp",
        "desc": "Стресс и сон — 150 MDL."
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
        "q": "Нужно ли направление от семейного врача?",
        "a": "Нет, запись ведётся напрямую по телефону 022 60 50 60."
    }
]}
   relatedLinks={[
    {
        "href": "/ru/nevrolog-kishinev/",
        "label": "Невролог Кишинёв"
    },
    {
        "href": "/ru/dr-igor-revenco/",
        "label": "Д-р Игорь Ревенко"
    },
    {
        "href": "/ru/preturi/",
        "label": "Цены (101 услуга)"
    }
]}
  />
 );
}
