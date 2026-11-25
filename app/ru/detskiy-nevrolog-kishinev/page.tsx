import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/detskiy-nevrolog-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/neuropediatru-chisinau/", ru: "/ru/detskiy-nevrolog-kishinev/", "x-default": "/neuropediatru-chisinau/" },
 title: "Детский невролог Кишинёв (Чеканы) — Д-р Игорь Ревенко",
 description:
  "Приём детского невролога (нейропедиатра) в Кишинёве (Чеканы) — д-р Игорь Ревенко, опыт 35+ лет. Нарушения сна, головные боли, речь, тики, внимание и тонус. Запись: 022 60 50 60."
});

export default function Page() {
 return (
  <LocalConditionLanding
   lang="ru"
   path="/ru/detskiy-nevrolog-kishinev"
   crumbLabel="Детский невролог Кишинёв"
   h1="Детский невролог (нейропедиатр) в Кишинёве (Чеканы)"
   lead="Бережная и внимательная неврологическая оценка для детей и подростков у д-ра Игоря Ревенко — более 35 лет клинического опыта."
   directAnswer="В медицинском центре Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2) первичный приём детского невролога (д-р Игорь Ревенко, 35+ лет опыта) стоит 500 MDL (повторный 400 MDL), 19-канальная ЭЭГ — 1600 MDL, неинвазивный скрининг АМП без уколов — 1000 MDL, мягкая терапия Электросон — 100 MDL / 30 мин. Запись: 022 60 50 60."
   introParagraph="Своевременная консультация детского невролога помогает родителям спокойно разобраться с нарушениями сна, головными болями, задержкой речи, тиками, логоневрозом или школьной утомляемостью."
   symptomsHeading="Когда стоит записаться к детскому неврологу"
   symptoms={[
    "Частые пробуждения, беспокойный сон или ночные страхи;",
    "Регулярные головные боли и быстрая утомляемость в школе;",
    "Задержка речевого, моторного развития или координации;",
    "Тики, навязчивые движения, повышенная тревожность;",
    "Наблюдение после травм головы или сложного перинатального периода."
   ]}
   approachHeading="Индивидуальный и щадящий подход к детям"
   approachParagraphs={[
    "Д-р Игорь Ревенко подробно объясняет родителям каждый шаг диагностики и отдаёт приоритет безопасным, щадящим и клинически обоснованным методам."
   ]}
   equipmentHeading="Щадящая диагностика и процедуры"
   equipmentCards={[
    { slug: "rheotest", title: "RHEOTEST", image: "/images/equipment/rheotest.webp", desc: "Неинвазивная оценка сосудистого кровообращения без боли." },
    { slug: "electrosomn-4t", title: "Электросон-4Т", image: "/images/equipment/electrosomn-4t.webp", desc: "Мягкая нейротропная релаксация по показаниям врача." },
    { slug: "aparat-amp", title: "Анализатор АМП", image: "/images/equipment/aparat-amp.webp", desc: "Экспресс-оценка показателей без забора крови." }
   ]}
   researchCitations={[
    {
     year: "2024",
     title: "Селективный блокатор глутаматных (NMDA) рецепторов в адъювантной терапии у детей с расстройством аутистического спектра",
     source: "IBN · Конференция USMF, ISSN 2345-1467",
     url: "https://ibn.idsi.md/vizualizare_articol/224130"
    },
    {
     year: "2023",
     title: "Черепно-мозговая травма у детей: радиоиммунологические тесты",
     source: "IBN · Конференция USMF, ISSN 2345-1476",
     url: "https://ibn.idsi.md/vizualizare_articol/194511"
    },
    {
     year: "2022",
     title: "Значение нейроэндокринных изменений (ТТГ, Т3, Т4, кортизол) при черепно-мозговой травме у детей школьного возраста: Монография",
     source: "Репозиторий USMF, ISBN 978-5-88554-160-2",
     url: "https://repository.usmf.md/handle/20.500.12710/27457"
    }
   ]}
   faqs={[
    { q: "Как записаться к детскому неврологу на Чеканах?", a: "Позвоните по номеру 022 60 50 60 или +373 79 422 908 (Пн–Пт 09:00–15:00)." },
    { q: "Где находится клиника?", a: "Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2." }
   ]}
   relatedLinks={[
    { href: "/ru/autizm-ras-u-detey-nevrolog-kishinev/", label: "Аутизм (РАС) и ЗПРР — Невролог" },
    { href: "/ru/blog/nervnye-tiki-gipervozbudimost-u-detey-eeg-detskiy-nevrolog-kishinev/", label: "Статья: Тики и возбудимость у детей" },
    { href: "/ru/blog/logonevroz-zaikanie-sdvg-trevozhnost-u-detey-eeg-elektroson-kishinev/", label: "Статья: Логоневроз и СДВГ" },
    { href: "/ru/eeg-kishinev/", label: "ЭЭГ детям (1600 MDL)" },
    { href: "/ru/nevrolog-kishinev/", label: "Невролог Кишинёв" },
    { href: "/ru/preturi/", label: "Цены" }
   ]}
  />
 );
}
