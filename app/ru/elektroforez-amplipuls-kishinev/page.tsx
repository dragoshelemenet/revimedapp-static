import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/elektroforez-amplipuls-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/electroforeza-amplipuls-chisinau/", ru: "/ru/elektroforez-amplipuls-kishinev/", "x-default": "/electroforeza-amplipuls-chisinau/" },
 title: "Электрофорез и Амплипульс (СМТ) Кишинёв (150 MDL) — Revimed PLUS+",
 description: "Лекарственный электрофорез и СМТ-терапия Амплипульс в Кишинёве (Чеканы) — 150 MDL/час в Revimed PLUS+. Грыжа диска, остеохондроз, невралгии, суставы. 022 60 50 60."
});

export default function RuElektroforezAmplipulsKishinevPage() {
 return (
  <LocalConditionLanding
   lang="ru"
   path="/ru/elektroforez-amplipuls-kishinev"
   crumbLabel="Электрофорез и Амплипульс"
   h1="Лекарственный электрофорез и Амплипульс (СМТ) в Кишинёве"
   lead="Прицельная противовоспалительная и обезболивающая физиотерапия в Кишинёве (Чеканы) при грыже диска, остеохондрозе, радикулите и болях в суставах."
   directAnswer="В медицинском центре Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2) лекарственный электрофорез и терапия Амплипульс (СМТ) стоят 150 MDL/час. В клинике работают аппараты Амплипульс-4, 5, 6 и аппарат лекарственного электрофореза. Запись: 022 60 50 60."
   introParagraph="Электрофорез доставляет лекарство прямо в очаг воспаления без нагрузки на желудок, а синусоидальные модулированные токи Амплипульс (СМТ) быстро снимают боль, отёк и мышечный спазм."
   symptomsHeading="Показания к электрофорезу и Амплипульсу"
   symptoms={[
    "Грыжа межпозвоночного диска, протрузии, остеохондроз и ишиас;",
    "Невралгии, невриты, радикулопатии и боли в суставах;",
    "Мышечные спазмы и восстановление после травм;",
    "Щадящая альтернатива при непереносимости таблеток."
]}
   approachHeading="Точная настройка процедур"
   approachParagraphs={[
    "Процедуры проводятся на сертифицированных аппаратах Амплипульс-4/5/6 и лекарственного электрофореза под контролем медперсонала.",
    "Можно пройти курс по направлению вашего врача или по назначению д-ра Игоря Ревенко."
]}
   equipmentHeading="Используемое оборудование"
   equipmentCards={[
    {
        "slug": "aparat-electroforeza-medicamentoasa",
        "title": "Лекарственный электрофорез",
        "image": "/images/equipment/aparat-electroforeza-medicamentoasa.webp",
        "desc": "Локальное введение препаратов — 150 MDL/час."
    },
    {
        "slug": "amplipuls-5",
        "title": "Амплипульс-5 (СМТ)",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Обезболивающие и расслабляющие токи — 150 MDL/час."
    },
    {
        "slug": "amplipuls-6",
        "title": "Амплипульс-6",
        "image": "/images/equipment/amplipuls-6.webp",
        "desc": "Нейромышечная реабилитация."
    }
]}
   faqs={[
    {
        "q": "Сколько стоит электрофорез или Амплипульс в Кишинёве?",
        "a": "Сеанс электрофореза или терапии Амплипульс стоит 150 MDL/час в центре Revimed PLUS+."
    }
]}
   relatedLinks={[
    {
        "href": "/ru/fizioterapiya-kishinev/",
        "label": "Физиотерапия Кишинёв"
    },
    {
        "href": "/ru/gryzha-diska-kishinev/",
        "label": "Грыжа диска"
    },
    {
        "href": "/ru/osteohondroz-kishinev/",
        "label": "Остеохондроз"
    },
    {
        "href": "/ru/lechebnyy-massazh-kishinev/",
        "label": "Лечебный массаж"
    },
    {
        "href": "/ru/preturi/",
        "label": "Цены (97 услуг)"
    }
]}
  />
 );
}
