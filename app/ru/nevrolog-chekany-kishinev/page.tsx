import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/nevrolog-chekany-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/neurolog-ciocana-chisinau/", ru: "/ru/nevrolog-chekany-kishinev/", "x-default": "/neurolog-ciocana-chisinau/" },
 title: "Невролог Чеканы Кишинёв — ул. Мирча чел Бэтрын 13/2",
 description:
  "Клиника неврологии, нейрохирургии, детской неврологии и физиотерапии на Чеканах в Кишинёве — ул. Мирча чел Бэтрын 13/2. Д-р Игорь Ревенко, 35+ лет опыта. Запись: 022 60 50 60."
});

export default function Page() {
 return (
  <LocalConditionLanding
   lang="ru"
   path="/ru/nevrolog-chekany-kishinev"
   crumbLabel="Невролог Чеканы Кишинёв"
   h1="Невролог, Нейрохирург и Физиотерапия на Чеканах, Кишинёв"
   lead="Медицинский центр Revimed PLUS+ на ул. Мирча чел Бэтрын 13/2 — более 20 лет работы в секторе Чеканы и 25 аппаратов реабилитации на месте."
   directAnswer="В медицинском центре Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2) приём взрослых и детей ведёт д-р Игорь Ревенко (35+ лет опыта, высшая категория, член EANS). Первичный приём невролога стоит 500 MDL (повторный 400 MDL), нейрохирурга 500 MDL, а физиотерапевтические процедуры (Электросон, Амплипульс, электрофорез, лазер) — 100 MDL / 30 мин. На месте доступны ЭЭГ (1600 MDL), РЭГ RHEOTEST (500 MDL) и экспресс-анализатор АМП (1000 MDL). Запись: 022 60 50 60."
   introParagraph="Если вы живёте на Чеканах, Рышкановке или Старой Почте и ищете опытного невролога, нейрохирурга или кабинет физиотерапии рядом с домом, центр Revimed PLUS+ принимает пациентов с понедельника по пятницу (09:00–15:00)."
   symptomsHeading="Что доступно в клинике на Чеканах"
   symptoms={[
    "Консультации взрослого и детского невролога;",
    "Консультации нейрохирурга — разбор МРТ/КТ и грыжи позвоночника;",
    "Физиотерапия и электротерапия (Амплипульс СМТ, электрофорез, Соллюкс);",
    "Электросон, Трансаир ТЭС, Би-ЛЕНАР и МДМ-терапия;",
    "Функциональная диагностика сосудов RHEOTEST и анализатор АМП."
   ]}
   approachHeading="Удобный проезд по бульвару Мирча чел Бэтрын"
   approachParagraphs={[
    "Клиника расположена по адресу ул. Мирча чел Бэтрын 13/2 (MD-2044) с прямым доступом на троллейбусах, автобусах и маршрутках."
   ]}
   equipmentHeading="Оборудование в клинике на Чеканах"
   equipmentCards={[
    { slug: "electrosomn-3", title: "Электросон-3", image: "/images/equipment/electrosomn-3.webp", desc: "Терапия электросном при стрессе, мигренях и нарушениях сна." },
    { slug: "transair-01p-transair-05", title: "Трансаир ТЭС", image: "/images/equipment/transair.webp", desc: "Транскраниальная электростимуляция для естественного обезболивания." },
    { slug: "amplipuls-5", title: "Амплипульс-5", image: "/images/equipment/amplipuls-5.webp", desc: "СМТ-физиотерапия при болях в спине и суставах." }
   ]}
   faqs={[
    { q: "Точный адрес и график работы на Чеканах?", a: "Ул. Мирча чел Бэтрын 13/2, MD-2044, Кишинёв. Пн–Пт: 09:00–15:00." },
    { q: "Телефоны для записи?", a: "022 60 50 60 или +373 79 422 908." }
   ]}
   relatedLinks={[
    { href: "/ru/nevrolog-kishinev/", label: "Невролог Кишинёв" },
    { href: "/ru/gryzha-diska-kishinev/", label: "Грыжа диска Кишинёв" },
    { href: "/ru/detskiy-nevrolog-kishinev/", label: "Детский невролог" }
   ]}
  />
 );
}
