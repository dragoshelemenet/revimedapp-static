import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/lechenie-migreni-kishinev",
 localized: false,
 title: "Лечение мигрени и головной боли Кишинёв — Невролог",
 description:
  "Диагностика и индивидуальное лечение мигрени, головных болей и головокружения в Кишинёве (Чеканы) — невролог д-р Игорь Ревенко, реография RHEOTEST, Электросон и Трансаир ТЭС."
});

export default function Page() {
 return (
  <LocalConditionLanding
   lang="ru"
   path="/ru/lechenie-migreni-kishinev"
   crumbLabel="Лечение мигрени Кишинёв"
   h1="Лечение мигрени, головных болей и головокружения в Кишинёве"
   lead="Неврологическая диагностика, неинвазивная реография сосудов RHEOTEST и мягкая ТЭС-терапия (Трансаир, Электросон) в Revimed PLUS+ (Чеканы)."
   introParagraph="Повторяющиеся мигрени, головные боли напряжения и головокружение требуют точного поиска причины — сосудистой, шейной или вегетативной — вместо постоянного приёма обезболивающих."
   symptomsHeading="Когда стоит обратиться к неврологу"
   symptoms={[
    "Пульсирующие головные боли с чувствительностью к свету или звукам;",
    "Головные боли напряжения и дискомфорт в шейном отделе;",
    "Головокружение, шум в ушах, неустойчивость при ходьбе;",
    "Нарушения сна, стресс и вегетативная дистония."
   ]}
   approachHeading="Комплексный и щадящий подход в Кишинёве"
   approachParagraphs={[
    "Д-р Игорь Ревенко сочетает неврологический осмотр с неинвазивной реографией RHEOTEST и мягкими немедикаментозными методиками (Трансаир ТЭС, Электросон, МДМ)."
   ]}
   equipmentHeading="Аппараты при мигренях и головокружении"
   equipmentCards={[
    { slug: "rheotest", title: "RHEOTEST", image: "/images/equipment/rheotest.webp", desc: "Неинвазивная оценка мозгового кровообращения." },
    { slug: "transair-01p-transair-05", title: "Трансаир ТЭС", image: "/images/equipment/transair.webp", desc: "Транскраниальная стимуляция для снижения частоты приступов боли." },
    { slug: "electrosomn-5-es-10-5", title: "Электросон-5", image: "/images/equipment/electrosomn-5-es-10-5.webp", desc: "Мягкая релаксация и нормализация сна." }
   ]}
   faqs={[
    { q: "Можно ли уменьшить приступы мигрени без избытка таблеток?", a: "Да, сочетание индивидуального плана и мягкой нейростимуляции (Трансаир, Электросон) помогает многим пациентам снизить частоту приступов." }
   ]}
   relatedLinks={[
    { href: "/ru/nevrolog-kishinev/", label: "Невролог Кишинёв" },
    { href: "/ru/osteohondroz-kishinev/", label: "Остеохондроз Кишинёв" },
    { href: "/ru/preturi/", label: "Цены" }
   ]}
  />
 );
}
