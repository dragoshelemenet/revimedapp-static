import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/psihoterapevt-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/psihoterapeut-stres-anxietate-chisinau/", ru: "/ru/psihoterapevt-kishinev/", "x-default": "/psihoterapeut-stres-anxietate-chisinau/" },
 title: "Психотерапевт Кишинёв (300 MDL) — Стресс, тревожность и ВСД",
 description: "Консультация психотерапевта в Кишинёве (Чеканы) в Revimed PLUS+ — 300 MDL + психодиагностика (200 MDL) и терапия Электросон (150 MDL). Запись: 022 60 50 60."
});

export default function RuPsihoterapevtKishinevPage() {
 return (
  <LocalConditionLanding
   lang="ru"
   path="/ru/psihoterapevt-kishinev"
   crumbLabel="Психотерапевт Кишинёв"
   h1="Психотерапевт в Кишинёве — Стресс, тревожность, панические атаки и ВСД"
   lead="Конфиденциальная психотерапевтическая помощь в Кишинёве (Чеканы) с возможностью комплексной неврологической оценки и мягкой нейростимуляции."
   directAnswer="В медицинском центре Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2) консультация психотерапевта стоит 300 MDL, компьютерная психодиагностика (MMPI, Люшер, Сонди) — 200 MDL, сеанс Электросна — 150 MDL/час. Запись: 022 60 50 60."
   introParagraph="Хронический стресс, тревога, выгорание и ВСД затрагивают и психику, и нервную систему. Комплексный подход в клинике помогает быстрее вернуть внутреннее равновесие и здоровый сон."
   symptomsHeading="С чем обращаются к психотерапевту"
   symptoms={[
    "Тревожность, панические атаки, внутреннее напряжение;",
    "Бессонница, эмоциональное выгорание и хроническая усталость;",
    "Вегетососудистая дистония и психосоматические жалобы;",
    "Сложные жизненные периоды и длительный стресс."
]}
   approachHeading="Психотерапия + мягкая нейрореабилитация"
   approachParagraphs={[
    "В одной клинике доступны консультация психотерапевта (300 MDL), компьютерное тестирование (200 MDL) и расслабляющая физиотерапия (Электросон, Трансаир ТЭС — 150 MDL).",
    "При необходимости подключается консультация невролога д-ра Игоря Ревенко."
]}
   equipmentHeading="Мягкие процедуры для нервной системы"
   equipmentCards={[
    {
        "slug": "electrosomn-5-es-10-5",
        "title": "Электросон-5",
        "image": "/images/equipment/electrosomn-5-es-10-5.webp",
        "desc": "Восстановление сна и снятие стресса — 150 MDL."
    },
    {
        "slug": "transair-01p-transair-05",
        "title": "Трансаир ТЭС",
        "image": "/images/equipment/transair.webp",
        "desc": "ТЭС-терапия для выработки эндорфинов."
    },
    {
        "slug": "bi-lenar",
        "title": "Би-ЛЕНАР",
        "image": "/images/equipment/bi-lenar.webp",
        "desc": "Вегетативный баланс без медикаментов."
    }
]}
   faqs={[
    {
        "q": "Сколько стоит приём психотерапевта в Кишинёве?",
        "a": "Консультация психотерапевта стоит 300 MDL, компьютерная психодиагностика — 200 MDL."
    }
]}
   relatedLinks={[
    {
        "href": "/ru/blog/kak-povysit-endorfin-serotonin-dofamin-transair-tes-elektroson-kishinev/",
        "label": "Статья: Эндорфины, серотонин и ТЭС"
    },
    {
        "href": "/ru/blog/vsd-skrytaya-depressiya-bol-v-grudi-nevrolog-kishinev/",
        "label": "Статья: ВСД и скрытая депрессия"
    },
    {
        "href": "/ru/nevrolog-kishinev/",
        "label": "Невролог Кишинёв"
    },
    {
        "href": "/ru/fizioterapiya-kishinev/",
        "label": "Физиотерапия Кишинёв"
    },
    {
        "href": "/ru/preturi/",
        "label": "Цены (97 услуг)"
    }
]}
  />
 );
}
