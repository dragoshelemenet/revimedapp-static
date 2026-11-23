import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/lechebnyy-massazh-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/masaj-terapeutic-chisinau/", ru: "/ru/lechebnyy-massazh-kishinev/", "x-default": "/masaj-terapeutic-chisinau/" },
 title: "Лечебный массаж Кишинёв (200 MDL / 60 мин) — Спина и позвоночник",
 description: "Медицинский лечебный массаж в Кишинёве (Чеканы) в Revimed PLUS+: 200 MDL/60 мин, глубокий массаж 220 MDL, грязевой 300 MDL + физиотерапия. Запись: 022 60 50 60."
});

export default function RuLechebnyyMassazhKishinevPage() {
 return (
  <LocalConditionLanding
   lang="ru"
   path="/ru/lechebnyy-massazh-kishinev"
   crumbLabel="Лечебный массаж Кишинёв"
   h1="Лечебный массаж в Кишинёве (Чеканы) — Спина, шея и реабилитация"
   lead="Медицинский лечебный массаж под контролем невролога в клинике Revimed PLUS+ при остеохондрозе, мышечных спазмах, протрузиях и болях в спине."
   directAnswer="В медицинском центре Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2) лечебный массаж (60 мин) стоит 200 MDL, глубокий лечебный массаж — 220 MDL, массаж с лечебной грязью — 300 MDL, нефритовая кровать и вибромассаж — 150 MDL/час. Запись: 022 60 50 60."
   introParagraph="В отличие от спа-салонов, лечебный массаж в Revimed PLUS+ проводится в специализированной неврологической клинике и сочетается с физиотерапией (Амплипульс, электрофорез, Соллюкс) для стойкого снятия боли."
   symptomsHeading="Показания к лечебному массажу"
   symptoms={[
    "Боли и скованность в шее, плечах и пояснице при сидячей работе;",
    "Остеохондроз, мышечно-тонический синдром, сколиоз;",
    "Консервативное восстановление при грыжах и протрузиях диска (после осмотра врача);",
    "Головные боли напряжения и хроническая усталость спины."
]}
   approachHeading="Комплексный подход к восстановлению спины"
   approachParagraphs={[
    "Сочетание лечебного массажа (200 MDL) с физиотерапией (150 MDL) и кинезотерапией ускоряет снятие спазма и восстанавливает подвижность позвоночника.",
    "При болях с отдачей в ногу или онемении предварительно рекомендуется осмотр д-ра Игоря Ревенко (невролог — 500 MDL, нейрохирург — 500 MDL)."
]}
   equipmentHeading="Дополнительные процедуры в клинике"
   equipmentCards={[
    {
        "slug": "amplipuls-5",
        "title": "Амплипульс (СМТ)",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Обезболивающие токи для спины — 150 MDL/час."
    },
    {
        "slug": "lampa-solux",
        "title": "Лампа Соллюкс",
        "image": "/images/equipment/lampa-solux.webp",
        "desc": "Инфракрасное прогревание мышц перед массажем."
    },
    {
        "slug": "kandadzia-kang-da-jia-lqx-2000a",
        "title": "Вибромассаж Kang Da Jia",
        "image": "/images/equipment/kandadzia-kang-da-jia-lqx-2000a.webp",
        "desc": "Улучшение кровотока и снятие спазма — 150 MDL."
    }
]}
   faqs={[
    {
        "q": "Сколько стоит лечебный массаж в Кишинёве?",
        "a": "Лечебный массаж (60 минут) стоит 200 MDL, глубокий лечебный массаж — 220 MDL, массаж с грязью — 300 MDL."
    },
    {
        "q": "Можно ли делать массаж при грыже диска?",
        "a": "Да, щадящие методики применяются после оценки МРТ врачом-неврологом или нейрохирургом."
    }
]}
   relatedLinks={[
    {
        "href": "/ru/fizioterapiya-kishinev/",
        "label": "Физиотерапия Кишинёв"
    },
    {
        "href": "/ru/kinezoterapiya-kishinev/",
        "label": "Кинезотерапия Кишинёв"
    },
    {
        "href": "/ru/gryzha-diska-kishinev/",
        "label": "Грыжа диска Кишинёв"
    },
    {
        "href": "/ru/osteohondroz-kishinev/",
        "label": "Остеохондроз Кишинёв"
    },
    {
        "href": "/ru/preturi/",
        "label": "Цены (96 услуг)"
    }
]}
  />
 );
}
