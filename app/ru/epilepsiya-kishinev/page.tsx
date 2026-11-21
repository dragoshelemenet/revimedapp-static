import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/epilepsiya-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/epilepsie-convulsii-chisinau/", ru: "/ru/epilepsiya-kishinev/", "x-default": "/epilepsie-convulsii-chisinau/" },
 title: "Эпилепсия, обмороки и ЭЭГ в Кишинёве — Д-р Игорь Ревенко",
 description: "Консультация невролога (500 MDL) и ЭЭГ (1400 MDL) при эпилепсии, судорогах и обмороках у взрослых и детей в Кишинёве, Revimed PLUS+. Запись: 022 60 50 60."
});

export default function RuEpilepsiyaKishinevPage() {
 return (
  <LocalConditionLanding
   lang="ru"
   path="/ru/epilepsiya-kishinev"
   crumbLabel="Эпилепсия и ЭЭГ"
   h1="Диагностика эпилепсии, судорог и обмороков в Кишинёве (ЭЭГ + Невролог)"
   lead="Приём взрослого и детского невролога д-ра Игоря Ревенко (35+ лет опыта) и электроэнцефалография (ЭЭГ) на месте в клинике Revimed PLUS+."
   directAnswer="В медицинском центре Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2) консультация невролога при эпилепсии, судорогах и обмороках (д-р Игорь Ревенко, 35+ лет) стоит 500 MDL, ЭЭГ на месте — 1400 MDL. Запись: 022 60 50 60."
   introParagraph="Точное разграничение обмороков, сосудистых состояний и эпилептических приступов требует опытного невролога и качественной ЭЭГ."
   symptomsHeading="Когда необходимы ЭЭГ и осмотр невролога"
   symptoms={[
    "Обмороки, внезапные потери сознания, кратковременные «замирания»;",
    "Судорожные приступы и ночные эпизоды;",
    "Контроль противосудорожной терапии у взрослых и детей."
]}
   approachHeading="Индивидуальный контроль терапии"
   approachParagraphs={[
    "Д-р Игорь Ревенко анализирует ЭЭГ и МРТ головного мозга и подбирает безопасную схему наблюдения и лечения."
]}
   equipmentHeading="Диагностика в клинике"
   equipmentCards={[
    {
        "slug": "rheotest",
        "title": "RHEOTEST (РЭГ)",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Сосуды головного мозга — 500 MDL."
    },
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
        "desc": "Только по строгому назначению невролога."
    }
]}
   faqs={[
    {
        "q": "Можно ли пройти ЭЭГ и консультацию невролога в одной клинике?",
        "a": "Да, ЭЭГ (1400 MDL) и приём д-ра Игоря Ревенко (500 MDL) доступны в Revimed PLUS+."
    }
]}
   relatedLinks={[
    {
        "href": "/ru/eeg-kishinev/",
        "label": "ЭЭГ Кишинёв (1400 MDL)"
    },
    {
        "href": "/ru/nevrolog-kishinev/",
        "label": "Невролог Кишинёв"
    },
    {
        "href": "/ru/detskiy-nevrolog-kishinev/",
        "label": "Детский невролог"
    },
    {
        "href": "/ru/preturi/",
        "label": "Цены (101 услуга)"
    }
]}
  />
 );
}
