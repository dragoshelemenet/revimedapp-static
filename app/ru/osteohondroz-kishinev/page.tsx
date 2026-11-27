import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/osteohondroz-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/osteocondroza-cervicala-chisinau/", ru: "/ru/osteohondroz-kishinev/", "x-default": "/osteocondroza-cervicala-chisinau/" },
 title: "Лечение остеохондроза в Кишинёве — Невролог и Физиотерапия",
 description:
  "Диагностика и физиотерапия при шейном и поясничном остеохондрозе в Кишинёве (Чеканы) — д-р Игорь Ревенко, Амплипульс СМТ, лекарственный электрофорез и лампа Соллюкс."
});

export default function Page() {
 return (
  <LocalConditionLanding
   lang="ru"
   path="/ru/osteohondroz-kishinev"
   crumbLabel="Остеохондроз Кишинёв"
   h1="Лечение шейного и поясничного остеохондроза в Кишинёве"
   lead="Консультация невролога/нейрохирурга и целевые процедуры физиотерапии (Амплипульс СМТ, электрофорез, Соллюкс) на Чеканах."
   directAnswer="В медицинском центре Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2) лечение шейного и поясничного остеохондроза ведёт д-р Игорь Ревенко (35+ лет опыта). Программа включает первичный приём (500 MDL, повторный 400 MDL) и процедуры цифрового Амплипульса-6 (СМТ), электрофореза и инфракрасной лампы Соллюкс (100 MDL / 30 мин) для снятия мышечных спазмов и боли без операции. Запись: 022 60 50 60."
   introParagraph="Шейный и поясничный остеохондроз часто вызывают хронические боли в спине, спазмы, онемение пальцев и головные боли. В Revimed PLUS+ лечение подбирается индивидуально с учётом снимков и переносимости."
   symptomsHeading="Основные проявления остеохондроза"
   symptoms={[
    "Боли в шее, плечах или пояснице при сидячей работе и нагрузке;",
    "Скованность по утрам и болезненный мышечный спазм;",
    "Головные боли в затылке и головокружение при шейном остеохондрозе;",
    "Онемение или покалывание в руках и ногах."
   ]}
   approachHeading="Неврология + физиотерапия в одной клинике"
   approachParagraphs={[
    "После осмотра д-р Игорь Ревенко подбирает курс процедур прямо в клинике на ул. Мирча чел Бэтрын 13/2, чтобы снять воспаление и восстановить подвижность."
   ]}
   equipmentHeading="Процедуры при остеохондрозе"
   equipmentCards={[
    { slug: "amplipuls-6", title: "Амплипульс-6 (СМТ)", image: "/images/equipment/amplipuls-6.webp", desc: "Цифровая СМТ-терапия для снятия боли и спазма." },
    { slug: "aparat-electroforeza-medicamentoasa", title: "Электрофорез", image: "/images/equipment/aparat-electroforeza-medicamentoasa.webp", desc: "Локальное введение противовоспалительных препаратов." },
    { slug: "lampa-solux", title: "Лампа Соллюкс", image: "/images/equipment/lampa-solux.webp", desc: "Мягкое инфракрасное тепло для расслабления мышц." }
   ]}
   faqs={[
    { q: "Сколько процедур нужно при остеохондрозе?", a: "Обычно курс составляет 5–10 сеансов по назначению врача." }
   ]}
   relatedLinks={[
    { href: "/ru/gryzha-diska-kishinev/", label: "Грыжа диска Кишинёв" },
    { href: "/ru/fizioterapiya-kishinev/", label: "Физиотерапия Кишинёв" },
    { href: "/ru/nevrolog-chekany-kishinev/", label: "Невролог Чеканы" }
   ]}
  />
 );
}
