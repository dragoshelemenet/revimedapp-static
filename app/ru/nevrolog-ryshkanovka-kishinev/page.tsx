import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/nevrolog-ryshkanovka-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/neurolog-riscani-chisinau/", ru: "/ru/nevrolog-ryshkanovka-kishinev/", "x-default": "/neurolog-riscani-chisinau/" },
 title: "Невролог рядом с Рышкановкой, Кишинёв (500 MDL) — Д-р Игорь Ревенко",
 description: "Ищете невролога на Рышкановке в Кишинёве? Revimed PLUS+ в 7–10 минутах (ул. Мирча чел Бэтрын 13/2): невролог 500 MDL, нейрохирург 300 MDL, ЭЭГ и 25 аппаратов физиотерапии. 022 60 50 60."
});

export default function RuNevrologRyshkanovkaKishinevPage() {
 return (
  <LocalConditionLanding
   lang="ru"
   path="/ru/nevrolog-ryshkanovka-kishinev"
   crumbLabel="Невролог Рышкановка"
   h1="Невролог рядом с Рышкановкой (Кишинёв) — 7–10 минут до клиники"
   lead="Удобный приём взрослого и детского невролога, нейрохирурга, ЭЭГ и 25 аппаратов физиотерапии для жителей Рышкановки (Московский проспект, ул. Алеку Руссо) в центре Revimed PLUS+."
   directAnswer="Жители Рышкановки добираются за 7–10 минут до центра Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2). Приём невролога д-ра Игоря Ревенко (35+ лет опыта, член EANS) — 500 MDL, нейрохирурга — 300 MDL, ЭЭГ — 1400 MDL, физиотерапия — 150 MDL. Запись: 022 60 50 60."
   introParagraph="С Московского проспекта и улицы Алеку Руссо легко доехать напрямую на Мирча чел Бэтрын 13/2 без пробок центра — и пройти осмотр, диагностику и процедуры в одном месте."
   symptomsHeading="Популярные услуги для пациентов с Рышкановки"
   symptoms={[
    "Взрослый и детский невролог (500 MDL первичный / 400 MDL повторный);",
    "Нейрохирург — разбор МРТ/КТ при грыже диска (300 MDL);",
    "ЭЭГ (1400 MDL), РЭГ (500 MDL), неинвазивный анализатор АМП (1000 MDL);",
    "Физиотерапия, Электросон, Амплипульс (150 MDL) и лечебный массаж (200 MDL)."
]}
   approachHeading="Быстрый проезд с Рышкановки"
   approachParagraphs={[
    "Прямое сообщение через ул. Алеку Руссо — 7–10 минут на авто или прямым общественным транспортом.",
    "Запись по телефону 022 60 50 60 (Пн–Пт 09:00–15:00) позволяет прийти точно ко времени."
]}
   equipmentHeading="Оборудование клиники"
   equipmentCards={[
    {
        "slug": "electrosomn-5-es-10-5",
        "title": "Электросон-5",
        "image": "/images/equipment/electrosomn-5-es-10-5.webp",
        "desc": "Восстановление сна и снятие стресса — 150 MDL."
    },
    {
        "slug": "amplipuls-5",
        "title": "Амплипульс (СМТ)",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Обезболивание при болях в спине — 150 MDL."
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
        "q": "Как быстро добраться с Рышкановки в Revimed PLUS+?",
        "a": "7–10 минут через ул. Алеку Руссо на бул. Мирча чел Бэтрын 13/2."
    }
]}
   relatedLinks={[
    {
        "href": "/ru/nevrolog-kishinev/",
        "label": "Невролог Кишинёв"
    },
    {
        "href": "/ru/nevrolog-chekany-kishinev/",
        "label": "Невролог Чеканы"
    },
    {
        "href": "/ru/fizioterapiya-kishinev/",
        "label": "Физиотерапия"
    },
    {
        "href": "/ru/preturi/",
        "label": "Цены (101 услуга)"
    }
]}
  />
 );
}
