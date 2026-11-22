import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import { ContentSection, ReadingCard } from "@/components/ContentLayout";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, makeMetadata, siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ru",
 path: "/nevrolog-kishinev",
 localized: false,
 alternatesLanguages: { ro: "/neurolog-chisinau/", ru: "/ru/nevrolog-kishinev/", "x-default": "/neurolog-chisinau/" },
 title: "Невролог Кишинёв (500 MDL) — Взрослый и детский приём | Revimed PLUS+",
 description:
  "Консультация невролога в Кишинёве (Чеканы) — д-р Игорь Ревенко, опыт 35+ лет, взрослые и дети (500 MDL). ЭЭГ, РЭГ, АМП и 25 аппаратов физиотерапии. Запись: 022 60 50 60."
});

const faqs = [
 {
  q: "Сколько стоит консультация невролога в Кишинёве в Revimed PLUS+?",
  a: "Первичный приём невролога (взрослые и дети) стоит 500 MDL, повторный — 400 MDL. Консультация нейрохирурга (разбор МРТ/КТ при грыже диска) стоит 300 MDL."
 },
 {
  q: "Как записаться к неврологу без долгих очередей?",
  a: "Позвоните по телефону 022 60 50 60 или напишите в WhatsApp +373 79 422 908 (Пн–Пт 09:00–15:00). Направление от семейного врача не требуется. Адрес: ул. Мирча чел Бэтрын 13/2, Чеканы, Кишинёв."
 },
 {
  q: "Принимаете ли вы детей (детский невролог в Кишинёве)?",
  a: "Да, д-р Игорь Ревенко имеет более 35 лет клинического опыта во взрослой неврологии, нейрохирургии и детской неврологии."
 },
 {
  q: "Какие обследования можно пройти прямо на месте в клинике?",
  a: "Доступны электроэнцефалография (ЭЭГ — 1400 MDL), картирование мозга (600 MDL), реоэнцефалография (РЭГ — 500 MDL), электроспондилография (800 MDL), неинвазивный анализатор АМП (117 показателей — 1000 MDL) и 25 аппаратов физиотерапии (от 150 MDL)."
 },
 {
  q: "Что взять с собой на первый приём?",
  a: "Если у вас уже есть снимки/диски МРТ, КТ, результаты ЭЭГ, Допплера сосудов или список принимаемых препаратов — возьмите их с собой. Если обследований нет, врач назначит только действительно необходимое после осмотра."
 },
 {
  q: "Удобно ли добираться с Рышкановки, Ботаники, Буюкан и Центра?",
  a: "Да. Клиника расположена на бул. Мирча чел Бэтрын 13/2 (Чеканы): 7–10 минут от Рышкановки через ул. Алеку Руссо и 12–15 минут от Центра, с прямым общественным транспортом и парковкой рядом."
 }
];

export default function NevrologKishinevPage() {
 return (
  <>
   <JsonLd data={breadcrumbJsonLd([{ name: "Главная", path: "/ru/" }, { name: "Невролог Кишинёв", path: "/ru/nevrolog-kishinev/" }])} />
   <JsonLd
    data={{
     "@context": "https://schema.org",
     "@type": "MedicalWebPage",
     datePublished: "2026-11-21",
     dateModified: "2026-11-22",
     lastReviewed: "2026-11-22",
     name: "Невролог Кишинёв — Revimed PLUS+",
     url: absoluteUrl("/ru/nevrolog-kishinev/"),
     about: { "@id": `${siteUrl}/#medical-clinic` },
     reviewedBy: { "@id": `${siteUrl}/dr-igor-revenco/#physician` }
    }}
   />
   <JsonLd
    data={{
     "@context": "https://schema.org",
     "@type": "FAQPage",
     mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
     }))
    }}
   />
   <PageHeading>
    <div>
     <p><Link href="/ru/">Главная</Link> / Невролог Кишинёв</p>
     <h1>Невролог в Кишинёве — Взрослый и детский приём</h1>
     <p>
      Индивидуальная неврологическая консультация у д-ра Игоря Ревенко (35+ лет опыта, высшая категория, член EANS),
      функциональная диагностика на месте (ЭЭГ, РЭГ, АМП) и 25 аппаратов физиотерапии в одной клинике.
     </p>
    </div>
   </PageHeading>
   <ContentSection narrow>
    <ReadingCard>
     <div className="rm-trust-banner">
      <div className="rm-trust-banner-meta">
       <strong>Д-р Игорь Ревенко</strong> · Высшая категория · Доктор нейрохирургии USMF · Член EANS · 35+ лет опыта
      </div>
      <div className="rm-trust-banner-actions">
       <a href="tel:022605060" className="btn btn-primary btn-sm">Позвонить: 022 60 50 60</a>
       <a href="https://wa.me/37379422908" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-whatsapp-soft">WhatsApp</a>
       <Link href="/ru/preturi/" className="btn btn-outline-primary btn-sm">Все цены (101)</Link>
      </div>
     </div>

     <div className="rm-kpi-strip" aria-label="Ключевые показатели неврологии в Кишинёве">
      <div className="rm-kpi-card">
       <strong>500 / 400 MDL</strong>
       <span>Невролог первичный / повторный</span>
      </div>
      <div className="rm-kpi-card">
       <strong>300 MDL</strong>
       <span>Нейрохирург (разбор МРТ/КТ)</span>
      </div>
      <div className="rm-kpi-card">
       <strong>150 MDL · 25</strong>
       <span>Физиотерапия · аппаратов</span>
      </div>
     </div>

     <aside className="rm-citable-summary" aria-label="Кратко — ключевые факты и цены">
      <div className="rm-citable-summary-head">
       <span className="rm-citable-pill">Кратко — ключевые факты и цены 2026</span>
       <span className="rm-citable-date">Обновлено: Ноябрь 2026</span>
      </div>
      <p style={{ margin: 0 }}>
       В медицинском центре Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2) первичный приём невролога стоит{" "}
       <strong>500 MDL</strong>, повторный — <strong>400 MDL</strong>, нейрохирурга — <strong>300 MDL</strong>.
       Консультации для взрослых и детей ведёт <strong>д-р Игорь Ревенко</strong> (35+ лет опыта, высшая категория, член EANS).
       На месте доступны ЭЭГ (1400 MDL), РЭГ (500 MDL), АМП (1000 MDL) и 25 аппаратов физиотерапии (от 150 MDL).
       Запись без направления: <strong>022 60 50 60</strong>.
      </p>
     </aside>

     <h2>С какими симптомами обращаются к неврологу</h2>
     <p>
      Многие неврологические проблемы начинаются постепенно — с периодических головных болей, онемения пальцев или плохого сна.
      Своевременная диагностика позволяет избежать хронической боли и ненужных операций.
     </p>
     <ul>
      <li><strong>Головные боли и мигрени</strong>: частые приступы мигрени, головная боль напряжения, лицевые невралгии;</li>
      <li><strong>Головокружение и сосудистые симптомы</strong>: шаткость при ходьбе, шум в ушах, скачки давления, снижение памяти;</li>
      <li><strong>Боли в спине и шее</strong>: <Link href="/ru/osteohondroz-kishinev/">остеохондроз</Link>, <Link href="/ru/gryzha-diska-kishinev/">грыжа диска</Link>, протрузии, радикулит, ишиас;</li>
      <li><strong>Онемение и слабость</strong>: покалывание, жжение в руках и ногах, <Link href="/ru/nevralgiya-neyropatiya-kishinev/">полинейропатии и невралгии</Link>;</li>
      <li><strong>Сон, стресс и ВСД</strong>: хроническая бессонница, тревожность, эмоциональное выгорание, вегетососудистая дистония;</li>
      <li><strong>Эпилепсия, обмороки и дети</strong>: обследование при <Link href="/ru/epilepsiya-kishinev/">судорогах и обмороках</Link>, реабилитация после инсульта и <Link href="/ru/detskiy-nevrolog-kishinev/">детская неврология</Link>.</li>
     </ul>

     <h2>Как проходит консультация у д-ра Игоря Ревенко</h2>
     <ol>
      <li><strong>Подробный разбор жалоб и МРТ/КТ</strong>: врач изучает историю симптомов и лично оценивает снимки/диски МРТ, КТ и предыдущие анализы.</li>
      <li><strong>Полный неврологический осмотр</strong>: проверка рефлексов, чувствительности, мышечной силы, равновесия и черепных нервов.</li>
      <li><strong>Прицельная диагностика на месте</strong>: при необходимости выполняются ЭЭГ, РЭГ сосудов мозга, картирование мозга или неинвазивный скрининг АМП (117 показателей).</li>
      <li><strong>Понятный план лечения</strong>: сочетание медикаментозной терапии и физиотерапии (Электросон, Трансаир ТЭС, Амплипульс, электрофорез, лечебный массаж, кинезотерапия).</li>
     </ol>

     <h2>Официальные цены 2026 — Неврология и диагностика на месте</h2>
     <div className="rm-decision-table-wrap">
      <table className="rm-decision-table">
       <thead>
        <tr>
         <th>Услуга</th>
         <th>Цена (MDL)</th>
         <th>Описание</th>
        </tr>
       </thead>
       <tbody>
        <tr>
         <td><strong>Первичный приём невролога</strong></td>
         <td><strong>500 MDL</strong></td>
         <td>Взрослые и дети (д-р Игорь Ревенко, 35+ лет)</td>
        </tr>
        <tr>
         <td>Повторный приём невролога</td>
         <td>400 MDL</td>
         <td>Контроль динамики и коррекция схемы</td>
        </tr>
        <tr>
         <td><strong>Консультация нейрохирурга</strong></td>
         <td><strong>300 MDL</strong></td>
         <td>Разбор МРТ/КТ, второе мнение при грыже диска</td>
        </tr>
        <tr>
         <td><Link href="/ru/eeg-kishinev/">Электроэнцефалография (ЭЭГ)</Link></td>
         <td>1400 MDL</td>
         <td>Биоэлектрическая активность мозга</td>
        </tr>
        <tr>
         <td><Link href="/ru/diagnostika-amp-kishinev/">Неинвазивный анализатор АМП</Link></td>
         <td>1000 MDL</td>
         <td>117 показателей без забора крови</td>
        </tr>
        <tr>
         <td><Link href="/ru/reoentsefalografiya-kishinev/">Реоэнцефалография (РЭГ)</Link></td>
         <td>500 MDL</td>
         <td>Оценка сосудов головного мозга (RHEOTEST)</td>
        </tr>
        <tr>
         <td><Link href="/ru/fizioterapiya-kishinev/">Физиотерапия / Электросон / Амплипульс</Link></td>
         <td>150 MDL</td>
         <td>25 медицинских аппаратов в клинике</td>
        </tr>
       </tbody>
      </table>
     </div>

     <h2>Невролог и нейрохирург в одном специалисте</h2>
     <p>
      Д-р Игорь Ревенко объединяет две смежные специальности — <strong>неврологию и нейрохирургию</strong> (доктор нейрохирургии USMF, член Европейской ассоциации нейрохирургов EANS).
      При грыже межпозвоночного диска или стенозе вы получаете в одном визите объективный ответ: можно ли восстановиться консервативно с помощью физиотерапии или действительно требуется операция.
     </p>

     <h2>Удобное расположение для всех секторов Кишинёва</h2>
     <p>
      Клиника Revimed PLUS+ находится в секторе <strong>Чеканы, ул. Мирча чел Бэтрын 13/2 (MD-2044)</strong> — в 7–10 минутах езды от Рышкановки и в 12–15 минутах от Центра, с прямым транспортом из Ботаники и Буюкан. График работы: <strong>Пн–Пт, 09:00–15:00</strong>.
     </p>

     <h2>Частые вопросы — Невролог Кишинёв</h2>
     {faqs.map((f) => (
      <details className="rm-faq-glass-item">
       <summary>{f.q}</summary>
       <p>{f.a}</p>
      </details>
     ))}

     <div className="rm-quick-links-bar" style={{ marginTop: 20 }}>
      <Link href="/ru/dr-igor-revenco/" className="btn btn-outline-primary btn-sm">Д-р Игорь Ревенко</Link>
      <Link href="/ru/neyrohirurg-kishinev/" className="btn btn-outline-primary btn-sm">Нейрохирург (300 MDL)</Link>
      <Link href="/ru/fizioterapiya-kishinev/" className="btn btn-outline-primary btn-sm">Физиотерапия (150 MDL)</Link>
      <Link href="/ru/eeg-kishinev/" className="btn btn-outline-primary btn-sm">ЭЭГ Кишинёв (1400 MDL)</Link>
      <Link href="/ru/preturi/" className="btn btn-outline-primary btn-sm">Цены (101 услуга)</Link>
      <Link href="/ru/contact/" className="btn btn-primary btn-sm">Запись: 022 60 50 60</Link>
     </div>
    </ReadingCard>
   </ContentSection>
  </>
 );
}
