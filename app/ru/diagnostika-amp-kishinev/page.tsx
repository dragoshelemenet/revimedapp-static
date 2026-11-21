import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/diagnostika-amp-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/diagnostic-amp-chisinau/", ru: "/ru/diagnostika-amp-kishinev/", "x-default": "/diagnostic-amp-chisinau/" },
 title: "Диагностика АМП Кишинёв (117 показателей без крови · 1000 MDL)",
 description: "Неинвазивный анализатор Biopromin AMP-Tech (117 клинических показателей без забора крови) в Кишинёве в Revimed PLUS+ — 1000 MDL. Результат сразу. 022 60 50 60."
});

export default function RuDiagnostikaAmpKishinevPage() {
 return (
  <LocalConditionLanding
   lang="ru"
   path="/ru/diagnostika-amp-kishinev"
   crumbLabel="Диагностика АМП Кишинёв"
   h1="Неинвазивная диагностика АМП в Кишинёве — 117 показателей без уколов"
   lead="Быстрый функциональный скрининг на аппарате Biopromin AMP-Tech в Кишинёве (Чеканы): оценка 117 параметров организма без забора крови, результат на месте."
   directAnswer="В медицинском центре Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2) неинвазивное обследование на анализаторе Biopromin AMP-Tech (117 клинических показателей без уколов) стоит 1000 MDL. Результат выдаётся сразу на месте. Запись: 022 60 50 60."
   introParagraph="Аппарат АМП оценивает показатели кровообращения, обмена веществ и нервной системы с помощью 5 внешних микропроцессорных датчиков — полностью безболезненно и без проколов кожи."
   symptomsHeading="Кому подходит обследование АМП"
   symptoms={[
    "Пациентам, желающим пройти быстрый неинвазивный скрининг без уколов;",
    "При хронической усталости, стрессе, перепадах давления и вегетативной дистонии;",
    "Для контроля динамики организма во время курса реабилитации и физиотерапии;",
    "В комплексе с консультацией невролога д-ра Игоря Ревенко."
]}
   approachHeading="Как проходит процедура АМП в Revimed PLUS+"
   approachParagraphs={[
    "Обследование занимает 10–15 минут, абсолютно безболезненно и сразу формирует отчёт по 117 показателям.",
    "Врач объясняет ключевые отклонения и при необходимости подбирает прицельную диагностику (ЭЭГ, РЭГ) или лечение."
]}
   equipmentHeading="Функциональная диагностика клиники"
   equipmentCards={[
    {
        "slug": "aparat-amp",
        "title": "Анализатор АМП",
        "image": "/images/equipment/aparat-amp.webp",
        "desc": "117 показателей без забора крови — 1000 MDL."
    },
    {
        "slug": "rheotest",
        "title": "RHEOTEST (РЭГ)",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Оценка сосудов головного мозга — 500 MDL."
    },
    {
        "slug": "electrosomn-5-es-10-5",
        "title": "Электросон-5",
        "image": "/images/equipment/electrosomn-5-es-10-5.webp",
        "desc": "Восстановление нервной системы — 150 MDL."
    }
]}
   faqs={[
    {
        "q": "Сколько стоит диагностика АМП в Кишинёве?",
        "a": "Неинвазивное обследование Biopromin AMP-Tech (117 показателей) стоит 1000 MDL."
    },
    {
        "q": "Сколько времени занимает процедура?",
        "a": "Около 10–15 минут, результат выдаётся сразу после завершения измерения."
    }
]}
   relatedLinks={[
    {
        "href": "/ru/eeg-kishinev/",
        "label": "ЭЭГ Кишинёв"
    },
    {
        "href": "/ru/reoentsefalografiya-kishinev/",
        "label": "РЭГ Кишинёв"
    },
    {
        "href": "/ru/nevrolog-kishinev/",
        "label": "Невролог Кишинёв"
    },
    {
        "href": "/ru/preturi/",
        "label": "Цены (101 услуга)"
    }
]}
  />
 );
}
