import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/nevralgiya-neyropatiya-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/nevralgie-neuropatie-chisinau/", ru: "/ru/nevralgiya-neyropatiya-kishinev/", "x-default": "/nevralgie-neuropatie-chisinau/" },
 title: "Лечение невралгии и нейропатии в Кишинёве — Невролог Revimed PLUS+",
 description: "Диагностика и лечение невралгии тройничного нерва, межрёберной невралгии, онемения и полинейропатии в Кишинёве в Revimed PLUS+ (д-р Игорь Ревенко). 022 60 50 60."
});

export default function RuNevralgiyaNeyropatiyaKishinevPage() {
 return (
  <LocalConditionLanding
   lang="ru"
   path="/ru/nevralgiya-neyropatiya-kishinev"
   crumbLabel="Невралгия и нейропатия"
   h1="Лечение невралгии и периферической нейропатии в Кишинёве"
   lead="Приём невролога (35+ лет опыта) и обезболивающая физиотерапия при невралгии тройничного нерва, межрёберной невралгии, онемении и диабетической полинейропатии."
   directAnswer="В центре Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2) приём невролога при невралгиях и нейропатиях (д-р Игорь Ревенко) стоит 500 MDL, физиотерапия (Амплипульс, электрофорез, МДМ) — 150 MDL. Запись: 022 60 50 60."
   introParagraph="Стреляющая боль в лице, прострелы между рёбрами или жжение и онемение в стопах и кистях требуют точной неврологической диагностики и комплексной терапии."
   symptomsHeading="Основные симптомы"
   symptoms={[
    "Приступы острой боли в лице (невралгия тройничного нерва);",
    "Боль по ходу рёбер при вдохе и движении (межрёберная невралгия);",
    "Онемение, покалывание и жжение в ногах и руках (полинейропатия)."
]}
   approachHeading="Комплексное лечение"
   approachParagraphs={[
    "Сочетание медикаментозной терапии с лекарственным электрофорезом, Амплипульсом (150 MDL) и иглорефлексотерапией быстрее снимает нейропатическую боль."
]}
   equipmentHeading="Применяемое оборудование"
   equipmentCards={[
    {
        "slug": "aparat-electroforeza-medicamentoasa",
        "title": "Электрофорез",
        "image": "/images/equipment/aparat-electroforeza-medicamentoasa.webp",
        "desc": "Локальное снятие воспаления — 150 MDL."
    },
    {
        "slug": "amplipuls-5",
        "title": "Амплипульс (СМТ)",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Обезболивание нервных корешков — 150 MDL."
    },
    {
        "slug": "mdm-101",
        "title": "МДМ-101",
        "image": "/images/equipment/mdm-101.webp",
        "desc": "Восстановление нервной проводимости."
    }
]}
   faqs={[
    {
        "q": "Можно ли сделать ЭКГ на месте при болях в груди?",
        "a": "Да, в клинике доступна компьютерная ЭКГ (200 MDL) для исключения сердечной причины."
    }
]}
   relatedLinks={[
    {
        "href": "/ru/blog/nevralgiya-troynichnogo-nerva-artroz-pyatochnaya-shpora-fizioterapiya-kishinev/",
        "label": "Статья: Невралгия тройничного нерва"
    },
    {
        "href": "/ru/blog/tunnelnyy-sindrom-kompressionnye-neyropatii-onemenie-ruk-kishinev/",
        "label": "Статья: Туннельный синдром"
    },
    {
        "href": "/ru/blog/plechelopatochnyy-periartroz-zamorozhennoe-plecho-pleksit-fizioterapiya-kishinev/",
        "label": "Статья: Плечевой плексит и периартроз"
    },
    {
        "href": "/ru/elektroforez-amplipuls-kishinev/",
        "label": "Электрофорез и Амплипульс"
    },
    {
        "href": "/ru/preturi/",
        "label": "Цены (96 услуг)"
    }
]}
  />
 );
}
