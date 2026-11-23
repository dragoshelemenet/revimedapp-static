import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentSection, ReadingCard } from "@/components/ContentLayout";
import FaqInteractive, { type FaqEntry } from "@/components/FaqInteractive";
import PageHeading from "@/components/PageHeading";
import { isLang, t, withLang, type Lang } from "@/lib/i18n";
import { JsonLd, breadcrumbJsonLd, makeMetadata } from "@/lib/seo";

export const dynamicParams = false;

const staticLangs: Exclude<Lang, "ro">[] = ["en", "ru", "ua"];

export function generateStaticParams() {
 return staticLangs.map((lang) => ({ lang }));
}

const faqData: Record<Exclude<Lang, "ro">, {
 title: string;
 metaDesc: string;
 h1: string;
 lead: string;
 summaryH2: string;
 summaryP: string;
 faqs: FaqEntry[];
}> = {
 en: {
  title: "Frequently Asked Questions | Revimed PLUS+",
  metaDesc: "Frequently asked questions about neurology, neurosurgery, pediatric neurology, physiotherapy, indicative prices, and booking at Revimed PLUS+ Chișinău.",
  h1: "Frequently Asked Questions",
  lead: "Clear answers about consultations, bookings, indicative prices, individualized rehabilitation, physiotherapy, neurology, and neurosurgery at Revimed PLUS+.",
  summaryH2: "At a Glance",
  summaryP: "Revimed PLUS+ has served patients in Chișinău for over 20 years. Dr. Igor Revenco has over 35 years of clinical experience. Every care plan is individualized and agreed upon with the patient.",
  faqs: [
   {
    id: "ce-medic",
    category: "consultatii",
    question: "Do I need to know in advance which specialist to see?",
    answer: "Not necessarily. Many patients come with mixed symptoms: headaches, dizziness, numbness, neck or lower back pain, fatigue, or nervous tension. The physician reviews your case and determines the appropriate diagnostic and recovery plan."
   },
   {
    id: "tratament-individual",
    category: "consultatii",
    question: "Is the treatment plan identical for all patients?",
    answer: "No. Every plan is individualized based on symptoms, age, medical history, prior imaging/lab results, and patient tolerance."
   },
   {
    id: "varianta-blanda",
    category: "consultatii",
    question: "Can I opt for non-surgical physiotherapy or gentler integrative rehabilitation?",
    answer: "Whenever clinically appropriate, yes. We combine neurological evaluation with physiotherapy, electrotherapy, therapeutic massage, kinesiotherapy, acupuncture, reflexology, or phytotherapy consultations."
   },
   {
    id: "acord-pacient",
    category: "consultatii",
    question: "Are procedures explained before starting?",
    answer: "Yes. The recommended plan, expected steps, and available alternatives are explained clearly so the patient can make an informed decision."
   },
   {
    id: "urgente-simptome",
    category: "consultatii",
    question: "When should I seek immediate emergency care (112)?",
    answer: "If you experience sudden paralysis or numbness, speech disturbance, facial asymmetry, loss of consciousness, active seizures, or acute chest pain, call emergency services at 112 immediately."
   },
   {
    id: "ce-acte-aduc",
    category: "consultatii",
    question: "What medical documents should I bring to my first consultation?",
    answer: "Bring any prior MRI, CT, X-ray, EEG, blood tests, discharge summaries, and a list of current medications so the physician can evaluate the full clinical picture."
   },
   {
    id: "programare-orar",
    category: "programari",
    question: "How do I book an appointment and what are your working hours?",
    answer: "Appointments are scheduled by phone at 022 60 50 60 or +373 79 422 908. Clinic hours: Monday to Friday, 09:00–15:00."
   },
   {
    id: "preturi-valute",
    category: "programari",
    question: "Where can I check prices and convert currencies?",
    answer: "Our indicative price list for all 96 medical services is available on the Prices page, featuring instant search and an approximate currency converter (MDL, EUR, RON, USD, UAH). Primary consultations cost 500 MDL and follow-up consultations 400 MDL. Final prices are confirmed at reception in MDL."
   },
   {
    id: "adresa-transport",
    category: "programari",
    question: "Where is Revimed PLUS+ located and how do I get there by public transport?",
    answer: "We are located in Chișinău, Ciocana sector, Mircea cel Bătrân St. 13/2, MD-2044. Public transport stops directly on Mircea cel Bătrân Blvd.: trolleybuses 12, 13, 23, 24, 26; buses 5, 23; minibuses 113, 191."
   },
   {
    id: "specialitati-clinica",
    category: "clinica",
    question: "What specialties and equipment does Revimed PLUS+ offer?",
    answer: "Neurology, neurosurgery, pediatric neurology (Dr. Igor Revenco, 35+ years experience, EANS member), functional diagnostics (19-channel EEG 1600 MDL, AMP 117 indices 1000 MDL, REG 500 MDL, electrospondylography 500 MDL), and medical rehabilitation across 25 physiotherapy devices."
   }
  ]
 },
 ru: {
  title: "Частые вопросы (FAQ) | Revimed PLUS+",
  metaDesc: "Ответы на частые вопросы о консультациях невролога, нейрохирурга, детского невролога, ЭЭГ, физиотерапии и ценах в Revimed PLUS+ Кишинёв (Чеканы).",
  h1: "Частые вопросы",
  lead: "Понятные ответы о консультациях, записи, ориентировочных ценах, индивидуальной реабилитации, физиотерапии, неврологии и нейрохирургии в Revimed PLUS+.",
  summaryH2: "Коротко о главном",
  summaryP: "Медицинский центр Revimed PLUS+ работает в Кишинёве более 20 лет. Стаж д-ра Игоря Ревенко — более 35 лет. План обследования и реабилитации подбирается индивидуально по согласованию с пациентом.",
  faqs: [
   {
    id: "ce-medic",
    category: "consultatii",
    question: "Нужно ли заранее знать, какая именно процедура или специалист мне нужны?",
    answer: "Не обязательно. Многие пациенты обращаются со смешанными симптомами: головная боль, головокружение, онемение, боль в шее или пояснице, усталость или нарушение сна. Врач проводит осмотр и определяет оптимальное направление диагностики и восстановления."
   },
   {
    id: "tratament-individual",
    category: "consultatii",
    question: "Одинакова ли программа лечения для всех пациентов?",
    answer: "Нет. Программа подбирается индивидуально с учётом симптомов, возраста, анамнеза, результатов МРТ/КТ/ЭЭГ и сопутствующих состояний."
   },
   {
    id: "varianta-blanda",
    category: "consultatii",
    question: "Можно ли выбрать щадящее консервативное лечение и физиотерапию?",
    answer: "Да, при отсутствии противопоказаний врач комбинирует неврологическое наблюдение с физиотерапией (от 100 MDL / 30 мин), электротерапией, лечебным массажем, кинезиотерапией, иглорефлексотерапией или фитотерапией."
   },
   {
    id: "acord-pacient",
    category: "consultatii",
    question: "Согласовывается ли план лечения с пациентом?",
    answer: "Да. Врач подробно объясняет предлагаемые обследования и процедуры, их цель и альтернативы, после чего план выполняется с согласия пациента."
   },
   {
    id: "urgente-simptome",
    category: "consultatii",
    question: "В каких случаях нужно немедленно вызывать скорую помощь (112)?",
    answer: "При внезапном параличе или онемении, нарушении речи, асимметрии лица, потере сознания, судорогах или острой боли в груди немедленно звоните в экстренную службу 112."
   },
   {
    id: "ce-acte-aduc",
    category: "consultatii",
    question: "Какие документы и обследования взять на первый приём?",
    answer: "Если у вас есть предыдущие снимки или диски МРТ, КТ, рентген, ЭЭГ, анализы крови, выписки и список принимаемых препаратов — возьмите их с собой."
   },
   {
    id: "programare-orar",
    category: "programari",
    question: "Как записаться на приём и какой график работы клиники?",
    answer: "Запись ведётся по телефонам 022 60 50 60 и +373 79 422 908. График работы: понедельник – пятница, с 09:00 до 15:00."
   },
   {
    id: "preturi-valute",
    category: "programari",
    question: "Где посмотреть прайс-лист и пересчитать цены в другую валюту?",
    answer: "Ориентировочный список всех 96 медицинских услуг доступен на странице «Цены» с мгновенным поиском и конвертером в MDL, EUR, RON, USD и UAH. Первичная консультация специалиста — 500 MDL, повторная — 400 MDL. Оплата производится в MDL на рецепции."
   },
   {
    id: "adresa-transport",
    category: "programari",
    question: "Где находится Revimed PLUS+ и как добраться общественным транспортом?",
    answer: "Клиника расположена в Кишинёве, сектор Чеканы, ул. Мирча чел Бэтрын 13/2, MD-2044. Прямой транспорт по бул. Мирча чел Бэтрын: троллейбусы 12, 13, 23, 24, 26; автобусы 5, 23; маршрутки 113, 191."
   },
   {
    id: "specialitati-clinica",
    category: "clinica",
    question: "На чём специализируется клиника и принимаете ли вы детей?",
    answer: "Неврология для взрослых и детей (детский невролог), нейрохирургия (д-р Игорь Ревенко, высшая категория, член EANS, 35+ лет опыта), функциональная диагностика (ЭЭГ 1600 MDL, АМП 117 показателей 1000 MDL, РЭГ 500 MDL, электроспондилография 500 MDL) и физиотерапия на 25 аппаратах."
   }
  ]
 },
 ua: {
  title: "Часті питання (FAQ) | Revimed PLUS+",
  metaDesc: "Відповіді на часті питання про консультації невролога, нейрохірурга, дитячого невролога, ЕЕГ, фізіотерапію та ціни в Revimed PLUS+ Кишинів (Чокана).",
  h1: "Часті питання",
  lead: "Зрозумілі відповіді про консультації, запис, орієнтовні ціни, індивідуальну реабілітацію, фізіотерапію, неврологію та нейрохірургію в Revimed PLUS+.",
  summaryH2: "Коротко про головне",
  summaryP: "Медичний центр Revimed PLUS+ працює в Кишиневі понад 20 років. Досвід д-ра Ігоря Ревенка — понад 35 років. План обстеження та реабілітації підбирається індивідуально за погодженням із пацієнтом.",
  faqs: [
   {
    id: "ce-medic",
    category: "consultatii",
    question: "Чи потрібно заздалегідь знати, яка саме процедура або спеціаліст мені потрібні?",
    answer: "Не обов’язково. Багато пацієнтів звертаються зі змішаними симптомами: головний біль, запаморочення, оніміння, біль у шиї чи попереку, втома або порушення сну. Лікар проводить огляд і визначає оптимальний напрямок діагностики та відновлення."
   },
   {
    id: "tratament-individual",
    category: "consultatii",
    question: "Чи однакова програма лікування для всіх пацієнтів?",
    answer: "Ні. Програма підбирається індивідуально з урахуванням симптомів, віку, анамнезу, результатів МРТ/КТ/ЕЕГ та супутніх станів."
   },
   {
    id: "varianta-blanda",
    category: "consultatii",
    question: "Чи можна обрати щадне консервативне лікування та фізіотерапію?",
    answer: "Так, за відсутності протипоказань лікар поєднує неврологічний нагляд із фізіотерапією (від 100 MDL / 30 хв), електротерапією, лікувальним масажем, кінезіотерапією, голкорефлексотерапією або фітотерапією."
   },
   {
    id: "acord-pacient",
    category: "consultatii",
    question: "Чи узгоджується план лікування з пацієнтом?",
    answer: "Так. Лікар детально пояснює пропоновані обстеження та процедури, їхню мету й альтернативи, після чого план виконується за згодою пацієнта."
   },
   {
    id: "urgente-simptome",
    category: "consultatii",
    question: "У яких випадках потрібно негайно викликати швидку допомогу (112)?",
    answer: "У разі раптового паралічу або оніміння, порушення мовлення, асиметрії обличчя, втрати свідомості, судом чи гострого болю в грудях негайно телефонуйте до екстреної служби 112."
   },
   {
    id: "ce-acte-aduc",
    category: "consultatii",
    question: "Які документи та обстеження взяти на перший прийом?",
    answer: "Якщо у вас є попередні знімки або диски МРТ, КТ, рентген, ЕЕГ, аналізи крові, виписки та список препаратів — візьміть їх із собою."
   },
   {
    id: "programare-orar",
    category: "programari",
    question: "Як записатися на прийом і який графік роботи клініки?",
    answer: "Запис ведеться за телефонами 022 60 50 60 та +373 79 422 908. Графік роботи: понеділок – п’ятниця, з 09:00 до 15:00."
   },
   {
    id: "preturi-valute",
    category: "programari",
    question: "Де подивитися прайс-лист і перерахувати ціни в іншу валюту?",
    answer: "Орієнтовний список усіх 96 медичних послуг доступний на сторінці «Ціни» з миттєвим пошуком і конвертером у MDL, EUR, RON, USD та UAH. Первинна консультація спеціаліста — 500 MDL, повторна — 400 MDL. Оплата здійснюється в MDL на рецепції."
   },
   {
    id: "adresa-transport",
    category: "programari",
    question: "Де знаходиться Revimed PLUS+ і як дістатися громадським транспортом?",
    answer: "Клініка розташована в Кишиневі, сектор Чокана, вул. Мірча чел Бетрин 13/2, MD-2044. Прямий транспорт по бул. Мірча чел Бетрин: тролейбуси 12, 13, 23, 24, 26; автобуси 5, 23; маршрутки 113, 191."
   },
   {
    id: "specialitati-clinica",
    category: "clinica",
    question: "На чому спеціалізується клініка і чи приймаєте ви дітей?",
    answer: "Неврологія для дорослих і дітей (дитячий невролог), нейрохірургія (д-р Ігор Ревенко, вища категорія, член EANS, 35+ років досвіду), функціональна діагностика (ЕЕГ 1600 MDL, АМП 117 показників 1000 MDL, РЕГ 500 MDL, електроспондилографія 500 MDL) та фізіотерапія на 25 апаратах."
   }
  ]
 }
};

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
 const { lang } = await params;
 if (!isLang(lang) || lang === "ro") return {};
 const copy = faqData[lang];
 return makeMetadata({
  lang,
  path: "/intrebari",
  localized: true,
  title: copy.title,
  description: copy.metaDesc
 });
}

export default async function LocalizedQuestionsPage({ params }: Props) {
 const { lang } = await params;
 if (!isLang(lang) || lang === "ro") notFound();
 const text = t(lang);
 const copy = faqData[lang];
 const pagePath = `${withLang("/intrebari", lang)}/`;

 return (
  <>
   <JsonLd
    data={breadcrumbJsonLd([
     { name: text.home, path: withLang("/", lang) },
     { name: copy.h1, path: pagePath }
    ])}
   />
   <JsonLd
    data={{
     "@context": "https://schema.org",
     "@type": "FAQPage",
     mainEntity: copy.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer }
     }))
    }}
   />
   <PageHeading>
    <div>
     <p>{text.home} / {copy.h1}</p>
     <h1>{copy.h1}</h1>
     <p>{copy.lead}</p>
    </div>
   </PageHeading>
   <ContentSection narrow>
    <ReadingCard>
     <h2>{copy.summaryH2}</h2>
     <p>{copy.summaryP}</p>
     <div className="rm-quick-links-bar">
      <Link href={withLang("/dr-igor-revenco/", lang)} className="btn btn-outline-primary btn-sm">
       Dr. Igor Revenco
      </Link>
      <Link href={withLang("/servicii/", lang)} className="btn btn-outline-primary btn-sm">
       {text.services}
      </Link>
      <Link href={withLang("/preturi/", lang)} className="btn btn-outline-primary btn-sm">
       {text.prices}
      </Link>
      <Link href={withLang("/contact/", lang)} className="btn btn-primary btn-sm">
       {text.contact}
      </Link>
     </div>
    </ReadingCard>

    <FaqInteractive items={copy.faqs} lang={lang} />

    <div className="sr-only" aria-hidden="true">
     {copy.faqs.map((f) => (
      <section key={f.id}>
       <h3>{f.question}</h3>
       <p>{f.answer}</p>
      </section>
     ))}
    </div>
   </ContentSection>
  </>
 );
}
