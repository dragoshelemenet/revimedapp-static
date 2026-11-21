import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/nevrolog-botanika-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/neurolog-botanica-chisinau/", ru: "/ru/nevrolog-botanika-kishinev/", "x-default": "/neurolog-botanica-chisinau/" },
 title: "Невролог и физиотерапия для жителей Ботаники, Кишинёв — Revimed PLUS+",
 description: "Ищете опытного невролога из сектора Ботаника в Кишинёве? Revimed PLUS+ (д-р Игорь Ревенко, 35+ лет): невролог 500 MDL, нейрохирург 300 MDL, 25 аппаратов физиотерапии от 150 MDL. 022 60 50 60."
});

export default function RuNevrologBotanikaKishinevPage() {
 return (
  <LocalConditionLanding
   lang="ru"
   path="/ru/nevrolog-botanika-kishinev"
   crumbLabel="Невролог Ботаника"
   h1="Невролог и реабилитация для пациентов с Ботаники, Кишинёв"
   lead="Опытный невролог и нейрохирург (35+ лет практики), ЭЭГ, РЭГ и 25 аппаратов физиотерапии в одной клинике с прозрачными ценами."
   directAnswer="Пациенты из сектора Ботаника выбирают Revimed PLUS+ (Кишинёв, ул. Мирча чел Бэтрын 13/2) ради 35-летнего опыта д-ра Игоря Ревенко и доступных цен: невролог 500 MDL, нейрохирург 300 MDL, физиотерапия и Электросон — 150 MDL. Запись: 022 60 50 60."
   introParagraph="В Revimed PLUS+ собраны консультации взрослого и детского невролога, нейрохирурга, функциональная диагностика и 25 аппаратов физиотерапии без очередей крупных центров."
   symptomsHeading="Почему пациенты с Ботаники приезжают в Revimed PLUS+"
   symptoms={[
    "Объективное второе мнение нейрохирурга по МРТ/КТ при грыже диска (300 MDL);",
    "Лечение мигреней, головокружений, бессонницы и болей в спине;",
    "Доступные цены: физиотерапия от 150 MDL, лечебный массаж — 200 MDL."
]}
   approachHeading="Удобная запись без ожидания"
   approachParagraphs={[
    "Прямое транспортное сообщение с Ботаники до ул. Мирча чел Бэтрын 13/2 (Чеканы).",
    "Запись по телефону 022 60 50 60 (Пн–Пт 09:00–15:00)."
]}
   equipmentHeading="Аппаратура клиники"
   equipmentCards={[
    {
        "slug": "amplipuls-5",
        "title": "Амплипульс (СМТ)",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Снятие боли в спине — 150 MDL."
    },
    {
        "slug": "electrosomn-5-es-10-5",
        "title": "Электросон-5",
        "image": "/images/equipment/electrosomn-5-es-10-5.webp",
        "desc": "Сон и антистресс — 150 MDL."
    },
    {
        "slug": "rheotest",
        "title": "RHEOTEST (РЭГ)",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Сосуды мозга — 500 MDL."
    }
]}
   faqs={[
    {
        "q": "Можно ли начать физиотерапию в день консультации?",
        "a": "Да, после осмотра врача многие процедуры доступны сразу на месте."
    }
]}
   relatedLinks={[
    {
        "href": "/ru/nevrolog-kishinev/",
        "label": "Невролог Кишинёв"
    },
    {
        "href": "/ru/gryzha-diska-kishinev/",
        "label": "Грыжа диска"
    },
    {
        "href": "/ru/preturi/",
        "label": "Цены (101 услуга)"
    }
]}
  />
 );
}
