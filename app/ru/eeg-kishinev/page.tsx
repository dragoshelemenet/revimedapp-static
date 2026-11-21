import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/eeg-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/eeg-chisinau/", ru: "/ru/eeg-kishinev/", "x-default": "/eeg-chisinau/" },
 title: "ЭЭГ Кишинёв (1400 MDL) — Электроэнцефалография для взрослых и детей",
 description: "Электроэнцефалография (ЭЭГ) в Кишинёве (Чеканы) в Revimed PLUS+ — 1400 MDL с расшифровкой невролога д-ра Игоря Ревенко (35+ лет). Мигрени, судороги, бессонница. 022 60 50 60."
});

export default function RuEegKishinevPage() {
 return (
  <LocalConditionLanding
   lang="ru"
   path="/ru/eeg-kishinev"
   crumbLabel="ЭЭГ Кишинёв"
   h1="Электроэнцефалография (ЭЭГ) в Кишинёве — Взрослым и детям"
   lead="Неинвазивное обследование ЭЭГ в Кишинёве (Чеканы) с клинической расшифровкой д-ра Игоря Ревенко (35+ лет опыта в неврологии и детской неврологии)."
   directAnswer="В медицинском центре Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2) электроэнцефалография (ЭЭГ) стоит 1400 MDL, компьютерное картирование мозга — 600 MDL, первичный приём невролога (д-р Игорь Ревенко, 35+ лет опыта) — 500 MDL. Процедура безболезненна и безопасна. Запись: 022 60 50 60."
   introParagraph="Электроэнцефалография (ЭЭГ) оценивает биоэлектрическую активность мозга без облучения и боли. В Revimed PLUS+ результаты сразу сопоставляются с неврологическим осмотром для точного диагноза."
   symptomsHeading="Когда назначают ЭЭГ в Кишинёве"
   symptoms={[
    "Обмороки, судороги, подозрение на эпилепсию и пароксизмальные состояния;",
    "Частые мигрени, головные боли, бессонница и нарушения сна;",
    "Головокружение, снижение памяти, внимания и хроническая усталость;",
    "Восстановление после черепно-мозговых травм и инсульта;",
    "Детская неврология: тики, задержки развития, беспокойный сон."
]}
   approachHeading="Почему пациенты выбирают ЭЭГ в Revimed PLUS+"
   approachParagraphs={[
    "Расшифровку проводит д-р Игорь Ревенко — невролог и нейрохирург высшей категории, член EANS, с 35+ годами практики.",
    "При необходимости на месте можно дополнить обследование РЭГ (500 MDL) или неинвазивной диагностикой АМП (1000 MDL)."
]}
   equipmentHeading="Функциональная диагностика в клинике"
   equipmentCards={[
    {
        "slug": "aparat-amp",
        "title": "Анализатор АМП (117 показателей)",
        "image": "/images/equipment/aparat-amp.webp",
        "desc": "Неинвазивный скрининг без проколов — 1000 MDL."
    },
    {
        "slug": "rheotest",
        "title": "RHEOTEST (РЭГ)",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Оценка сосудов мозга и кровообращения — 500 MDL."
    },
    {
        "slug": "electrosomn-5-es-10-5",
        "title": "Электросон-5",
        "image": "/images/equipment/electrosomn-5-es-10-5.webp",
        "desc": "Мягкая нейростимуляция для сна и нервной системы — 150 MDL."
    }
]}
   faqs={[
    {
        "q": "Сколько стоит ЭЭГ в Кишинёве в Revimed PLUS+?",
        "a": "Электроэнцефалография (ЭЭГ) стоит 1400 MDL, картирование мозга — 600 MDL, консультация невролога — 500 MDL."
    },
    {
        "q": "Как подготовиться к ЭЭГ?",
        "a": "Вымойте голову без лака и геля, избегайте кофе и энергетиков за 6 часов до процедуры."
    }
]}
   relatedLinks={[
    {
        "href": "/ru/nevrolog-kishinev/",
        "label": "Невролог Кишинёв"
    },
    {
        "href": "/ru/detskiy-nevrolog-kishinev/",
        "label": "Детский невролог"
    },
    {
        "href": "/ru/reoentsefalografiya-kishinev/",
        "label": "РЭГ сосудов мозга"
    },
    {
        "href": "/ru/diagnostika-amp-kishinev/",
        "label": "Диагностика АМП"
    },
    {
        "href": "/ru/preturi/",
        "label": "Цены (101 услуга)"
    }
]}
  />
 );
}
