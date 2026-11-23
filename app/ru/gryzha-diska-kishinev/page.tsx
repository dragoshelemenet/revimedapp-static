import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/gryzha-diska-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/hernie-de-disc-chisinau/", ru: "/ru/gryzha-diska-kishinev/", "x-default": "/hernie-de-disc-chisinau/" },
 title: "Лечение грыжи диска без операции Кишинёв — Нейрохирург",
 description:
  "Разбор МРТ и консервативное лечение грыжи позвоночника в Кишинёве (Чеканы) — нейрохирург д-р Игорь Ревенко (член EANS, 35+ лет опыта), Амплипульс СМТ, электрофорез и физиотерапия."
});

export default function Page() {
 return (
  <LocalConditionLanding
   lang="ru"
   path="/ru/gryzha-diska-kishinev"
   crumbLabel="Грыжа диска Кишинёв"
   h1="Лечение грыжи диска без операции в Кишинёве"
   lead="Прямой разбор снимков МРТ/КТ нейрохирургом д-ром Игорем Ревенко (член EANS, 35+ лет опыта) и целевая физиотерапия в клинике Revimed PLUS+ (Чеканы)."
   directAnswer="В медицинском центре Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2) разбор МРТ и консультация нейрохирурга д-ра Игоря Ревенко (член EANS, 35+ лет) стоит 300 MDL (невролог 500 MDL), сеанс физиотерапии (Амплипульс, электрофорез) — 150 MDL, лечебный массаж — 200 MDL, кинезиотерапия — 250 MDL/час. Запись: 022 60 50 60."
   introParagraph="Межпозвоночная грыжа поясничного или шейного отдела в большинстве случаев успешно лечится консервативно без хирургического вмешательства. В Revimed PLUS+ мы сопоставляем снимки МРТ с осмотром и подбираем безопасный курс восстановления."
   symptomsHeading="Симптомы грыжи диска, требующие оценки специалиста"
   symptoms={[
    "Боль в пояснице или шее, отдающая в ногу (ишиас) или руку;",
    "Онемение, покалывание или жжение по ходу нерва;",
    "Мышечный спазм и ограничение подвижности позвоночника;",
    "Усиление боли при сидении, наклонах или нагрузке."
   ]}
   approachHeading="Консервативный подход и физиотерапия на месте"
   approachParagraphs={[
    "Д-р Игорь Ревенко оценивает реальные срезы МРТ/КТ, чтобы избежать лишних операций, а при показаниях к консервативному лечению сразу назначает индивидуальный курс физиотерапии на базе клиники."
   ]}
   equipmentHeading="Оборудование для восстановления позвоночника"
   equipmentCards={[
    { slug: "amplipuls-5", title: "Амплипульс-5 (СМТ)", image: "/images/equipment/amplipuls-5.webp", desc: "Синусоидальные модулированные токи для снятия боли и мышечного спазма." },
    { slug: "aparat-electroforeza-medicamentoasa", title: "Лекарственный электрофорез", image: "/images/equipment/aparat-electroforeza-medicamentoasa.webp", desc: "Локальное неинвазивное введение противовоспалительных препаратов." },
    { slug: "lampa-solux", title: "Лампа Соллюкс", image: "/images/equipment/lampa-solux.webp", desc: "Мягкое инфракрасное прогревание и улучшение микроциркуляции." }
   ]}
   faqs={[
    { q: "Нужно ли брать диск МРТ на консультацию?", a: "Да, обязательно возьмите диск или плёнку МРТ/КТ, а не только бумажное заключение." },
    { q: "Сколько процедур физиотерапии обычно нужно?", a: "В среднем 5–10 сеансов по индивидуальному назначению врача." }
   ]}
   relatedLinks={[
    { href: "/ru/blog/reabilitaciya-lfk-posle-operacii-na-pozvonochnike-kishinev/", label: "Статья: ЛФК после операции на позвоночнике" },
    { href: "/ru/neyrohirurg-kishinev/", label: "Нейрохирург Кишинёв (500 MDL)" },
    { href: "/ru/fizioterapiya-kishinev/", label: "Физиотерапия Кишинёв (150 MDL)" },
    { href: "/ru/nevrolog-kishinev/", label: "Невролог Кишинёв" }
   ]}
  />
 );
}
