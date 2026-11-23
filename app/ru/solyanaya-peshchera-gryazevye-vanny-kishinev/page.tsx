import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/solyanaya-peshchera-gryazevye-vanny-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/camera-salina-bai-namol-chisinau/", ru: "/ru/solyanaya-peshchera-gryazevye-vanny-kishinev/", "x-default": "/camera-salina-bai-namol-chisinau/" },
 title: "Соляная пещера (100 MDL) и Грязевые ванны (150 MDL) в Кишинёве",
 description: "Аэроионотерапия в соляной пещере (100 MDL/час), лечебные сакские грязевые ванны (150 MDL) и фитосауна (250 MDL) в Кишинёве (Чеканы) в Revimed PLUS+. 022 60 50 60."
});

export default function RuSolyanayaPeshcheraGryazevyeVannyKishinevPage() {
 return (
  <LocalConditionLanding
   lang="ru"
   path="/ru/solyanaya-peshchera-gryazevye-vanny-kishinev"
   crumbLabel="Соляная пещера и Грязи"
   h1="Соляная пещера и Сакские грязевые ванны в Кишинёве (Чеканы)"
   lead="Бальнеотерапия, галотерапия (соляная комната), лечебные ванны с сакской грязью, магнием, йодо-бромом и фитосауна в медицинском центре Revimed PLUS+."
   directAnswer="В медицинском центре Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2) аэроионотерапия в соляной пещере стоит 100 MDL/час, лечебные ванны с сакской грязью, сероводородные, магниевые, йодо-бромные, скипидарные или хвойные — 150 MDL/сеанс, лечебная фитосауна — 250 MDL/час, массаж с грязью (60 мин) — 300 MDL (цены ориентировочные). Запись: 022 60 50 60."
   introParagraph="Бальнеологические процедуры и микроклимат соляной пещеры дополняют программы восстановления суставов, позвоночника и нервной системы прямо в Кишинёве без необходимости выезда на курорт."
   symptomsHeading="Бальнеологические процедуры в прайс-листе клиники"
   symptoms={[
    "Аэроионотерапия в соляной пещере (соляная комната для взрослых и детей) — 100 MDL/час;",
    "Лечебные ванны с сакской грязью, сероводородные, магниевые, йодо-бромные, скипидарные, с экстрактом сосны — 150 MDL/сеанс;",
    "Лечебная фитосауна с травами — 250 MDL/час и гидротерапия — 200 MDL/час;",
    "Грязевой массаж (60 мин) — 300 MDL и комбинированная гидротерапия с массажем — 400 MDL/час."
]}
   approachHeading="Врачебный допуск и предварительная запись"
   approachParagraphs={[
    "Тёплые грязевые ванны и сауна имеют медицинские противопоказания (неконтролируемая гипертония, декомпенсированные сердечно-сосудистые заболевания, острые воспаления, беременность, онкология) и проводятся после консультации врача.",
    "Все цены и перечень процедур на сайте носят ориентировочный характер; актуальное расписание бальнеопроцедур уточняйте на рецепции по тел. 022 60 50 60."
]}
   equipmentHeading="Бальнеотерапия и оздоровление"
   equipmentCards={[
    {
        "slug": "detox-spa-bio",
        "title": "Бальнеотерапия и СПА",
        "image": "/images/equipment/detox-spa-bio.webp",
        "desc": "Сакские грязевые ванны (150 MDL) и соляная пещера (100 MDL/час)."
    },
    {
        "slug": "spa-sy-f088-detox-bio-178",
        "title": "Гидротерапия и Релаксация",
        "image": "/images/equipment/spa-sy-f088-detox-bio-178.webp",
        "desc": "Комплементарные программы восстановления и релаксации."
    },
    {
        "slug": "kandadzia-kang-da-jia-lqx-2000a",
        "title": "Массаж и Физиотерапия",
        "image": "/images/equipment/kandadzia-kang-da-jia-lqx-2000a.webp",
        "desc": "Сочетание с лечебным массажем и физиопроцедурами."
    }
]}
   faqs={[
    {
        "q": "Сколько стоит посещение соляной пещеры в Кишинёве?",
        "a": "Ориентировочный тариф на аэроионотерапию в соляной пещере в Revimed PLUS+ (Чеканы) составляет 100 MDL/час."
    },
    {
        "q": "Сколько стоят грязевые ванны?",
        "a": "Ориентировочная стоимость сеанса лечебных ванн с сакской грязью, магнием или хвойным экстрактом — 150 MDL/сеанс."
    }
]}
   relatedLinks={[
    {
        "href": "/ru/servicii/terapie-balneara/",
        "label": "Бальнеотерапия"
    },
    {
        "href": "/ru/fizioterapiya-chekany-kishinev/",
        "label": "Физиотерапия Чеканы"
    },
    {
        "href": "/ru/lechebnyy-massazh-kishinev/",
        "label": "Лечебный массаж"
    },
    {
        "href": "/ru/fitoterapevt-kishinev/",
        "label": "Врач-фитотерапевт"
    },
    {
        "href": "/ru/preturi/",
        "label": "Цены (96 услуг)"
    }
]}
  />
 );
}
