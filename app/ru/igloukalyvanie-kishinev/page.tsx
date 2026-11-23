import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/igloukalyvanie-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/acupunctura-reflexoterapie-chisinau/", ru: "/ru/igloukalyvanie-kishinev/", "x-default": "/acupunctura-reflexoterapie-chisinau/" },
 title: "Иглоукалывание и рефлексотерапия Кишинёв (500 MDL) — Revimed PLUS+",
 description: "Медицинское иглоукалывание (500 MDL) и рефлексотерапия (500 MDL) в Кишинёве (Чеканы) в Revimed PLUS+. Боли в спине, мигрени, невралгии, стресс и бессонница. 022 60 50 60."
});

export default function RuIgloukalyvanieKishinevPage() {
 return (
  <LocalConditionLanding
   lang="ru"
   path="/ru/igloukalyvanie-kishinev"
   crumbLabel="Иглоукалывание Кишинёв"
   h1="Иглоукалывание и рефлексотерапия в Кишинёве (Чеканы)"
   lead="Медицинская акупунктура и рефлексотерапия в неврологической клинике Revimed PLUS+ при болях в спине, невралгиях, мигренях и стрессе."
   directAnswer="В медицинском центре Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2) первичная консультация акупунктуриста стоит 500 MDL (повторная — 400 MDL), рефлексотерапевта — 500 MDL (повторная — 400 MDL). Запись: 022 60 50 60."
   introParagraph="С точки зрения современной нейрофизиологии медицинское иглоукалывание действует на трёх уровнях: местном (улучшение микроциркуляции и снятие мышечного спазма), сегментарно-спинальном (блокировка болевой импульсации) и центральном (активация выработки собственных эндорфинов, энкефалинов и серотонина для баланса вегетативной нервной системы)."
   symptomsHeading="Показания к иглоукалыванию и рефлексотерапии"
   symptoms={[
    "Боли в спине и шее, ишиас, туннельный синдром, межрёберная и лицевая невралгия;",
    "Мигрени, хронические головные боли напряжения и бессонница;",
    "Хронический стресс, тревожность и вегето-сосудистая дистония (ВСД);",
    "Восстановление после неврита лицевого нерва, парезов и нейропатий."
]}
   approachHeading="Безопасность, интегративный подход и МДМ-терапия"
   approachParagraphs={[
    "Процедуры проводятся стерильными одноразовыми иглами в неврологической клинике и при необходимости сочетаются с физиотерапией (Электросон, Трансаир ТЭС, Амплипульс — 100 MDL / 30 мин) и мезодиэнцефальной модуляцией (МДМ-101 / МДМ-2000-1 / МДМ-К) для регуляции адаптационных центров мозга.",
    "Назначение согласуется с неврологическим статусом пациента."
]}
   equipmentHeading="Дополнительные методики"
   equipmentCards={[
    {
        "slug": "electrosomn-5-es-10-5",
        "title": "Электросон-5",
        "image": "/images/equipment/electrosomn-5-es-10-5.webp",
        "desc": "Глубокое расслабление нервной системы — 100 MDL / 30 мин."
    },
    {
        "slug": "bi-lenar",
        "title": "Би-ЛЕНАР",
        "image": "/images/equipment/bi-lenar.webp",
        "desc": "Мягкая нейровегетативная регуляция."
    },
    {
        "slug": "mdm-101",
        "title": "МДМ-101",
        "image": "/images/equipment/mdm-101.webp",
        "desc": "Мезодиэнцефальная модуляция."
    }
]}
   faqs={[
    {
        "q": "Сколько стоит иглоукалывание в Кишинёве?",
        "a": "Первичная консультация врача-акупунктуриста — 500 MDL (повторная 400 MDL), рефлексолога — 500 MDL."
    }
]}
   relatedLinks={[
    {
        "href": "/ru/nevrolog-kishinev/",
        "label": "Невролог Кишинёв"
    },
    {
        "href": "/ru/lechenie-migreni-kishinev/",
        "label": "Лечение мигрени"
    },
    {
        "href": "/ru/preturi/",
        "label": "Цены (96 услуг)"
    }
]}
  />
 );
}
