import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/reoentsefalografiya-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/reoencefalografie-chisinau/", ru: "/ru/reoentsefalografiya-kishinev/", "x-default": "/reoencefalografie-chisinau/" },
 title: "РЭГ Кишинёв (500 MDL) — Реоэнцефалография сосудов мозга",
 description: "Реоэнцефалография (РЭГ) сосудов головного мозга в Кишинёве (Чеканы) на аппарате RHEOTEST — 500 MDL. Головокружение, мигрени, шум в ушах. Запись: 022 60 50 60."
});

export default function RuReoentsefalografiyaKishinevPage() {
 return (
  <LocalConditionLanding
   lang="ru"
   path="/ru/reoentsefalografiya-kishinev"
   crumbLabel="РЭГ Кишинёв"
   h1="Реоэнцефалография (РЭГ) в Кишинёве — Проверка сосудов мозга"
   lead="Неинвазивное обследование мозгового кровообращения на системе RHEOTEST в Кишинёве (Чеканы) при головокружении, мигренях, шуме в ушах и шейном остеохондрозе."
   directAnswer="В медицинском центре Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2) реоэнцефалография (РЭГ) стоит 500 MDL, консультация невролога (д-р Игорь Ревенко, 35+ лет) — 500 MDL. Процедура безболезненна и занимает около 15 минут. Запись: 022 60 50 60."
   introParagraph="РЭГ оценивает тонус и эластичность сосудов мозга, кровенаполнение и венозный отток, помогая неврологу точно подобрать лечение при головных болях и головокружении."
   symptomsHeading="Показания к РЭГ сосудов мозга"
   symptoms={[
    "Головокружение, шум в ушах, потемнение в глазах и шаткость;",
    "Мигрени, пульсирующие головные боли и метеозависимость;",
    "Шейный остеохондроз с нарушением кровотока;",
    "Гипертония, ВСД и снижение памяти."
]}
   approachHeading="Диагностика и лечение в одной клинике"
   approachParagraphs={[
    "Обследование выполняется без облучения и контраста, а результат интерпретируется д-ром Игорем Ревенко.",
    "При необходимости сразу подбирается курс сосудистой терапии и физиотерапии (от 150 MDL)."
]}
   equipmentHeading="Оборудование клиники"
   equipmentCards={[
    {
        "slug": "rheotest",
        "title": "RHEOTEST (РЭГ)",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Компьютерная реоэнцефалография — 500 MDL."
    },
    {
        "slug": "transair-01p-transair-05",
        "title": "Трансаир ТЭС",
        "image": "/images/equipment/transair.webp",
        "desc": "Транскраниальная стимуляция при мигренях и ВСД."
    },
    {
        "slug": "aparat-amp",
        "title": "Анализатор АМП",
        "image": "/images/equipment/aparat-amp.webp",
        "desc": "117 показателей без крови — 1000 MDL."
    }
]}
   faqs={[
    {
        "q": "Сколько стоит РЭГ в Кишинёве?",
        "a": "Реоэнцефалография (РЭГ) стоит 500 MDL в центре Revimed PLUS+."
    },
    {
        "q": "Есть ли противопоказания к РЭГ?",
        "a": "Метод неинвазивный и безопасный, подходит взрослым и детям."
    }
]}
   relatedLinks={[
    {
        "href": "/ru/eeg-kishinev/",
        "label": "ЭЭГ Кишинёв"
    },
    {
        "href": "/ru/lechenie-migreni-kishinev/",
        "label": "Лечение мигрени"
    },
    {
        "href": "/ru/osteohondroz-kishinev/",
        "label": "Остеохондроз Кишинёв"
    },
    {
        "href": "/ru/nevrolog-kishinev/",
        "label": "Невролог Кишинёв"
    },
    {
        "href": "/ru/preturi/",
        "label": "Цены (97 услуг)"
    }
]}
  />
 );
}
