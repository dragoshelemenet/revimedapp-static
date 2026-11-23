import { ContentSection, ReadingCard } from "@/components/ContentLayout";
import { getPrices, getContact, getGallery, getContentBlock } from "@/lib/publicContent";
import {
 JsonLd,
 aboutPageJsonLd,
 absoluteUrl,
 breadcrumbJsonLd,
 collectionPageJsonLd,
 contactPageJsonLd,
 galleryPageJsonLd,
 offerCatalogJsonLd
} from "@/lib/seo";
import InfoPopover from "@/components/InfoPopover";
import SmartCatalogGrid from "@/components/SmartCatalogGrid";
import DoctorMotionCard from "@/components/DoctorMotionCard";
import GalleryLightbox from "@/components/GalleryLightbox";
import VideoGalleryDropdown from "@/components/VideoGalleryDropdown";
import ContactPhotoLightbox from "@/components/ContactPhotoLightbox";
import ContactActionsBar from "@/components/ContactActionsBar";

import PageHeading from "@/components/PageHeading";
import Link from "next/link";
import { youtubeVideos } from "@/lib/videos";
import { site } from "@/lib/site";
import { getStaticPublishedPosts, getStaticPostBySlug } from "@/lib/staticBlogPosts";
import { translateGalleryTitle } from "@/lib/galleryTranslate";
import { t, withLang, type Lang } from "@/lib/i18n";
import CurrencyConverter from "@/components/CurrencyConverter";
import PricesInteractiveSection from "@/components/PricesInteractiveSection";
import ReviewCarousel from "@/components/ReviewCarousel";
import IconVisual from "@/components/IconVisual";
import HomeCTA from "@/components/HomeCTA";
import { getLocalizedServices } from "@/lib/servicesLocalized";
import HomeStats from "@/components/HomeStats";

function renderBlogContent(content: string) {
  const lines = String(content || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  return lines.map((line, idx) => {
    const isNumberTitle = /^\d+\.\s+/.test(line);
    const isDisclaimer = /informativ|informational|информационный|інформаційний|nu înlocuiește|does not replace|не заменяет|не замінює/i.test(line);
    const isAppointment = /programare|appointments|запись|запис|sunați|call|звоните|телефонуйте/i.test(line);
    const isPhone = /^(\+?\d[\d\s()–-]{5,})$/.test(line);

    if (isNumberTitle) {
      return <h2 key={idx}>{line}</h2>;
    }

    if (isPhone) {
      return <p key={idx}>{line}</p>;
    }

    if (isAppointment) {
      return <p key={idx}>{line}</p>;
    }

    if (isDisclaimer) {
      return <p key={idx}>{line}</p>;
    }

    return <p key={idx}>{line}</p>;
  });
}

function toWebpSrc(src: string | undefined): string {
  if (!src) return "";
  if (src.startsWith("/images/") && /\.(jpg|jpeg|png)$/i.test(src)) {
    return src.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  }
  return src;
}

const trustCopy: Record<
  Lang,
  {
    title: string;
    popoverTitle: string;
    lead: string;
    p1: string;
    p2: string;
    cards: [string, string][];
  }
> = {
  ro: {
    title: "Experiență medicală, tratament individual și acordul pacientului",
    popoverTitle: "Abordarea Revimed PLUS+",
    lead: "Dr. Igor Revenco are peste 35 de ani de experiență, iar clinica Revimed PLUS+ activează de peste 20 de ani în Chișinău.",
    p1: "La Revimed PLUS+, tratamentul se alege individual pentru fiecare pacient. Medicul discută simptomele, istoricul, preferințele, reacțiile anterioare la tratament și posibilitățile reale ale fiecărui caz.",
    p2: "Dacă situația permite, pacientul poate opta pentru o abordare mai tradițională sau pentru metode mai blânde, cu direcție mai naturistă. Totul trebuie să fie sigur, explicat clar și făcut cu acordul pacientului.",
    cards: [
      ["35+ ani", "experiență medicală Dr. Igor Revenco"],
      ["20+ ani", "experiență clinică Revimed PLUS+"],
      ["Individual", "tratamentul se alege pentru fiecare pacient"],
      ["Cu acord", "pacientul înțelege și acceptă planul"]
    ]
  },
  en: {
    title: "Medical experience, individualized care, and informed consent",
    popoverTitle: "The Revimed PLUS+ Approach",
    lead: "Dr. Igor Revenco brings over 35 years of clinical experience, and Revimed PLUS+ has served patients in Chișinău for over 20 years.",
    p1: "At Revimed PLUS+, every treatment plan is tailored individually. The physician reviews symptoms, medical history, preferences, prior treatment responses, and realistic options for each case.",
    p2: "When clinically safe and appropriate, patients may choose between conventional therapy or gentler, integrative methods. Every step is explained clearly and performed with the patient’s consent.",
    cards: [
      ["35+ yrs", "medical experience — Dr. Igor Revenco"],
      ["20+ yrs", "clinical activity — Revimed PLUS+"],
      ["Tailored", "individual plan for every patient"],
      ["Consent", "clear explanation & patient agreement"]
    ]
  },
  ru: {
    title: "Медицинский опыт, индивидуальное лечение и согласие пациента",
    popoverTitle: "Подход Revimed PLUS+",
    lead: "Д-р Игорь Ревенко имеет более 35 лет медицинского опыта, а клиника Revimed PLUS+ работает в Кишинёве более 20 лет.",
    p1: "В Revimed PLUS+ лечение подбирается индивидуально для каждого пациента с учётом симптомов, истории болезни, предпочтений и реакций на предыдущую терапию.",
    p2: "Если позволяет состояние, пациент может выбрать традиционный подход или более мягкие, щадящие методы. Всё объясняется понятно и проводится с согласия пациента.",
    cards: [
      ["35+ лет", "медицинский опыт д-ра Игоря Ревенко"],
      ["20+ лет", "клиническая практика Revimed PLUS+"],
      ["Индивидуально", "план подбирается для каждого пациента"],
      ["С согласия", "пациент понимает и принимает план"]
    ]
  },
  ua: {
    title: "Медичний досвід, індивідуальне лікування та згода пацієнта",
    popoverTitle: "Підхід Revimed PLUS+",
    lead: "Д-р Ігор Ревенко має понад 35 років медичного досвіду, а клініка Revimed PLUS+ працює в Кишиневі понад 20 років.",
    p1: "У Revimed PLUS+ лікування підбирається індивідуально для кожного пацієнта з урахуванням симптомів, історії хвороби, уподобань та попередніх реакцій.",
    p2: "Якщо стан дозволяє, пацієнт може обрати традиційний підхід або м’якші методи. Усе пояснюється зрозуміло й виконується за згодою пацієнта.",
    cards: [
      ["35+ років", "медичний досвід д-ра Ігоря Ревенка"],
      ["20+ років", "клінічна практика Revimed PLUS+"],
      ["Індивідуально", "план підбирається для кожного пацієнта"],
      ["За згодою", "пацієнт розуміє та приймає план"]
    ]
  }
};

const homeEquipmentCopy: Record<Lang, { heading: string; e1: string; e2: string; e3: string }> = {
  ro: { heading: "Utilaje Revimed PLUS+", e1: "Terapie prin electrosomn", e2: "Proceduri transcraniene", e3: "Neurostimulare funcțională" },
  en: { heading: "Revimed PLUS+ Equipment", e1: "Electrosleep therapy", e2: "Transcranial procedures", e3: "Functional neurostimulation" },
  ru: { heading: "Оборудование Revimed PLUS+", e1: "Терапия электросном", e2: "Транскраниальные процедуры", e3: "Функциональная нейростимуляция" },
  ua: { heading: "Обладнання Revimed PLUS+", e1: "Терапія електросном", e2: "Транскраніальні процедури", e3: "Функціональна нейростимуляція" }
};

function HomeTrustSection({ lang = "ro" }: { lang?: Lang }) {
 const copy = trustCopy[lang] || trustCopy.ro;
 return (
  <section className="rmSection revimedHomeTrust">
   <div className="rmShell">
    <div className="revimedTrustGrid">
     <div className="revimedTrustText">
      <span className="revimedTrustBadge">Revimed PLUS+</span>
      <div className="rm-title-with-info">
       <h2>{copy.title}</h2>
       <InfoPopover title={copy.popoverTitle} ariaLabel={copy.popoverTitle}>
        <p>{copy.p1}</p>
        <p>{copy.p2}</p>
       </InfoPopover>
      </div>
      <p>{copy.lead}</p>
     </div>
     <div className="revimedTrustCards">
      {copy.cards.map(([val, desc]) => (
       <div key={val} data-glass-card><strong>{val}</strong><span>{desc}</span></div>
      ))}
     </div>
    </div>
   </div>
  </section>
 );
}

const homeFaqCopy: Record<Lang, { heading: string; items: { q: string; a: string }[] }> = {
 ro: {
  heading: "Întrebări frecvente despre consultații în Chișinău",
  items: [
   {
    q: "Cum mă programez la neurolog sau neurochirurg la Revimed PLUS+?",
    a: "Programările se fac telefonic la 022 60 50 60 sau +373 79 422 908, de luni până vineri între 09:00 și 15:00. Clinica se află în Chișinău, sectorul Ciocana, Str. Mircea cel Bătrân 13/2."
   },
   {
    q: "Cine efectuează consultațiile neurologice și neurochirurgicale?",
    a: "Consultațiile sunt conduse de Dr. Igor Revenco — medic neurolog, neurochirurg și neuropediatru de categorie superioară, doctor în neurochirurgie (USMF) și membru EANS, cu peste 35 de ani de experiență."
   },
   {
    q: "Se fac proceduri de fizioterapie și recuperare medicală în aceeași clinică?",
    a: "Da. Clinica dispune de 25 de aparate medicale de fizioterapie, neurostimulare și diagnostic funcțional (Electrosomn, Transair, Bi-LENAR, Amplipuls SMT, Electroforeză, MDM, Solux, RHEOTEST, AMP)."
   },
   {
    q: "Oferiți consultații și pentru copii (neuropediatrie)?",
    a: "Da, oferim consultații de neurologie pediatrică pentru copii și adolescenți, cu abordare blândă și individualizată."
   }
  ]
 },
 en: {
  heading: "Frequently Asked Questions — Neurology & Rehab in Chișinău",
  items: [
   {
    q: "How do I book a neurology or neurosurgery consultation at Revimed PLUS+?",
    a: "Call 022 60 50 60 or +373 79 422 908 Monday–Friday, 09:00–15:00. The clinic is located at Str. Mircea cel Bătrân 13/2, Ciocana, Chișinău."
   },
   {
    q: "Who leads the consultations?",
    a: "Dr. Igor Revenco — Senior Neurologist, Neurosurgeon, and Pediatric Neurologist (PhD in Neurosurgery, EANS member) with 35+ years of clinical experience."
   },
   {
    q: "Are physiotherapy and functional diagnostics available on-site?",
    a: "Yes. Revimed PLUS+ is equipped with 25 medical devices including Electrosleep, Transair TES, Bi-LENAR, Amplipuls SMT, Electrophoresis, MDM, Sollux, RHEOTEST, and AMP."
   },
   {
    q: "Do you see pediatric neurology patients?",
    a: "Yes, we provide pediatric neurology consultations for children and adolescents with individualized care."
   }
  ]
 },
 ru: {
  heading: "Частые вопросы о приёме невролога и физиотерапии в Кишинёве",
  items: [
   {
    q: "Как записаться к неврологу или нейрохирургу в Revimed PLUS+?",
    a: "Запись по телефонам 022 60 50 60 или +373 79 422 908 с понедельника по пятницу, 09:00–15:00. Адрес: Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2."
   },
   {
    q: "Кто проводит консультации в клинике?",
    a: "Приём ведёт д-р Игорь Ревенко — невролог, нейрохирург и детский невролог высшей категории, доктор нейрохирургии (USMF), член EANS, с опытом более 35 лет."
   },
   {
    q: "Доступны ли физиотерапия и диагностика на месте?",
    a: "Да. В клинике работают 25 медицинских аппаратов: Электросон, Трансаир ТЭС, Би-ЛЕНАР, Амплипульс СМТ, Электрофорез, МДМ, Соллюкс, RHEOTEST и АМП."
   },
   {
    q: "Принимаете ли вы детей (детский невролог)?",
    a: "Да, проводится приём по детской неврологии с бережным и индивидуальным подходом."
   }
  ]
 },
 ua: {
  heading: "Часті запитання про прийом невролога та фізіотерапію у Кишиневі",
  items: [
   {
    q: "Як записатися до невролога або нейрохірурга в Revimed PLUS+?",
    a: "Запис за телефонами 022 60 50 60 або +373 79 422 908, Пн–Пт 09:00–15:00. Адреса: Кишинів, Чекани, вул. Мірча чел Бетрин 13/2."
   },
   {
    q: "Хто проводить консультації?",
    a: "Д-р Ігор Ревенко — невролог, нейрохірург і дитячий невролог вищої категорії, член EANS, досвід понад 35 років."
   },
   {
    q: "Чи доступні фізіотерапія та діагностика в клініці?",
    a: "Так, у клініці працюють 25 медичних апаратів: Електросон, Трансаір, Бі-ЛЕНАР, Ампліпульс СМТ, Електрофорез, МДМ, Соллюкс, RHEOTEST та АМП."
   },
   {
    q: "Чи приймаєте дітей (дитячий невролог)?",
    a: "Так, надаються консультації з дитячої неврології з індивідуальним підходом."
   }
  ]
 }
};

export function HomeTemplate({ lang }: { lang: Lang }) {
 const text = t(lang);
 const coreServices = getLocalizedServices(lang);
 const homeFaq = homeFaqCopy[lang] || homeFaqCopy.ro;
 const servicesHeading =
  lang === "en"
   ? "Core Medical Services in Chișinău"
   : lang === "ru"
     ? "Основные медицинские услуги в Кишинёве"
     : lang === "ua"
       ? "Основні медичні послуги в Кишиневі"
       : "Servicii medicale principale în Chișinău";

 return (
  <>
   <link rel="preload" as="image" href="/images/medical-bg.webp" fetchPriority="high" />
   <section className="homeHero">
    <div className="heroOverlay">
     <div className="rmShell heroCenter">
      <h1>{text.heroTitle}</h1>
      <p>{text.heroSubtitle}</p>
      <div className="rm-hero-actions">
       <Link href={withLang("/servicii", lang)} className="blueBtn">{text.servicesButton}</Link>
       <Link href={withLang("/contact", lang)} className="rm-hero-secondary-btn">{text.contact}</Link>
      </div>
     </div>
    </div>
   </section>

   <HomeStats lang={lang} />

   <section className="rmSection rm-home-services-section">
    <div className="rmShell">
     <h2 className="centerTitle">{servicesHeading}</h2>
     <div className="rm-home-services-grid">
       {coreServices.map((srv, idx) => (
        <Link
         key={srv.slug}
         href={withLang(`/servicii/${srv.slug}/`, lang)}
         className="rm-home-service-card rm-home-service-visual-card"
         data-glass-card
        >
         {srv.image && (
          <div className="rm-home-service-thumb">
           <img
            src={srv.image}
            alt={`${srv.title} — Revimed PLUS+`}
            width={640}
            height={420}
            loading={idx === 0 ? "eager" : "lazy"}
            fetchPriority={idx === 0 ? "high" : "auto"}
            decoding="async"
           />
           {srv.priceBadge && <span className="rm-home-service-price-pill">{srv.priceBadge}</span>}
          </div>
         )}
         <span className="rm-home-service-badge">{srv.category}</span>
         <h3>{srv.title}</h3>
         <p>{srv.short}</p>
         {srv.highlights && srv.highlights.length > 0 && (
          <div className="rm-service-highlights-row">
           {srv.highlights.map((h) => (
            <span key={h} className="rm-service-highlight-chip">{h}</span>
           ))}
          </div>
         )}
         <span className="rm-home-service-cta">{text.readMore} →</span>
        </Link>
       ))}
      </div>
    </div>
   </section>

   <section className="rmSection aboutBlock">
    <div className="rmShell aboutGrid rm-about-motion-grid">
     <DoctorMotionCard lang={lang} />
     <div className="rm-about-copy-card" data-glass-card>
      <h2>{text.aboutTitle}</h2>
      <p>{text.aboutText1}</p>
      <p>{text.aboutText2}</p>
      <Link className="softBtn" href={withLang("/despre-noi", lang)}>{text.readMore}</Link>
     </div>
    </div>
   </section>

   <section className="rmSection homeEquipmentBlock">
    <div className="rmShell">
     <h2 className="centerTitle">{(homeEquipmentCopy[lang] || homeEquipmentCopy.ro).heading}</h2>
     <div className="homeEquipmentGrid">
      <Link href={withLang("/utilaj/electrosomn-3", lang)} className="homeEquipmentCard" data-glass-card>
       <img src="/images/equipment/electrosomn-3.webp" alt="Electrosomn" width={640} height={420} loading="lazy" decoding="async" />
       <div><span>Electrosomn</span><h3>{(homeEquipmentCopy[lang] || homeEquipmentCopy.ro).e1}</h3></div>
      </Link>
      <Link href={withLang("/utilaj/transair-01p-transair-05", lang)} className="homeEquipmentCard" data-glass-card>
       <img src="/images/equipment/transair.webp" alt="Transair" width={640} height={420} loading="lazy" decoding="async" />
       <div><span>Transair</span><h3>{(homeEquipmentCopy[lang] || homeEquipmentCopy.ro).e2}</h3></div>
      </Link>
      <Link href={withLang("/utilaj/bi-lenar", lang)} className="homeEquipmentCard" data-glass-card>
       <img src="/images/equipment/bi-lenar.webp" alt="Bi-LENAR" width={640} height={420} loading="lazy" decoding="async" />
       <div><span>Bi-LENAR</span><h3>{(homeEquipmentCopy[lang] || homeEquipmentCopy.ro).e3}</h3></div>
      </Link>
     </div>
    </div>
   </section>

   <HomeCTA lang={lang} />

   <HomeTrustSection lang={lang} />

   {(lang === "ro" || lang === "ru") && (
    <section className="rmSection rm-seo-bento-section">
     <div className="rmShell">
      <div className="rm-seo-bento-shell" data-glass-card>
       <div className="rm-seo-bento-head">
        <h2>
         {lang === "ru"
          ? "Все направления, диагностика и процедуры в Кишинёве (Чеканы)"
          : "Specialități, Diagnostic Funcțional & Tratamente în Chișinău"}
        </h2>
        <p>
         {lang === "ru"
          ? "Выберите нужную консультацию, обследование или процедуру физиотерапии с актуальными ценами 2026 года:"
          : "Accesează direct consultația, investigația sau procedura dorită, cu prețuri oficiale 2026 în MDL:"}
        </p>
       </div>
       <div className="rm-seo-bento-grid">
        {(lang === "ru"
         ? [
            {
             heading: "Консультации специалистов",
             links: [
              { href: "/ru/nevrolog-kishinev/", label: "Невролог Кишинёв (500 MDL)" },
              { href: "/ru/neyrohirurg-kishinev/", label: "Нейрохирург Кишинёв (500 MDL)" },
              { href: "/ru/detskiy-nevrolog-kishinev/", label: "Детский невролог (500 MDL)" },
              { href: "/ru/igloukalyvanie-kishinev/", label: "Иглоукалывание и рефлексолог (500 MDL)" },
              { href: "/ru/fitoterapevt-kishinev/", label: "Врач-фитотерапевт (500 MDL)" },
              { href: "/ru/nevrolog-chekany-kishinev/", label: "Невролог Чеканы (клиника)" },
              { href: "/ru/fizioterapiya-chekany-kishinev/", label: "Физиотерапия Чеканы" }
             ]
            },
            {
             heading: "Диагностика и физиотерапия",
             links: [
              { href: "/ru/eeg-kishinev/", label: "ЭЭГ Кишинёв (1600 MDL)" },
              { href: "/ru/eeg-detyam-kishinev/", label: "ЭЭГ детям (1600 MDL)" },
              { href: "/ru/kartirovanie-mozga-kishinev/", label: "Картирование мозга 3D (600 MDL)" },
              { href: "/ru/diagnostika-amp-kishinev/", label: "Диагностика АМП 117 (1000 MDL)" },
              { href: "/ru/reoentsefalografiya-kishinev/", label: "РЭГ сосудов мозга (500 MDL)" },
              { href: "/ru/elektrospondilografiya-kishinev/", label: "Электроспондилография (500 MDL)" },
              { href: "/ru/uzi-ekg-kishinev/", label: "УЗИ и ЭКГ (200–250 MDL)" },
              { href: "/ru/fizioterapiya-kishinev/", label: "Физиотерапия (от 100 MDL / 30 мин)" },
              { href: "/ru/elektroson-kishinev/", label: "Электросон и ТЭС (100 MDL / 30 мин)" },
              { href: "/ru/elektroforez-amplipuls-kishinev/", label: "Электрофорез & Амплипульс (100 MDL)" },
              { href: "/ru/magnitoterapiya-lazer-kishinev/", label: "Магнитотерапия & Лазер (100 MDL)" },
              { href: "/ru/ozonoterapiya-darsonval-kishinev/", label: "Озонотерапия & Дарсонваль (100 MDL)" },
              { href: "/ru/solyanaya-peshchera-gryazevye-vanny-kishinev/", label: "Соляная пещера & Грязи (100–150 MDL)" },
              { href: "/ru/lechebnyy-massazh-kishinev/", label: "Лечебный массаж (200 MDL)" },
              { href: "/ru/kinezoterapiya-kishinev/", label: "Кинезотерапия (250 MDL)" }
             ]
            },
            {
             heading: "Заболевания и реабилитация",
             links: [
              { href: "/ru/gryzha-diska-kishinev/", label: "Грыжа диска без операции" },
              { href: "/ru/boli-v-spine-ishias-kishinev/", label: "Боль в спине и ишиас" },
              { href: "/ru/osteohondroz-kishinev/", label: "Остеохондроз" },
              { href: "/ru/lechenie-skolioza-kishinev/", label: "Сколиоз и осанка" },
              { href: "/ru/reabilitatsiya-posle-operatsii-pozvonochnika-kishinev/", label: "После операции на позвоночнике" },
              { href: "/ru/pyatochnaya-shpora-artroz-kishinev/", label: "Пяточная шпора и артроз" },
              { href: "/ru/lechenie-migreni-kishinev/", label: "Лечение мигрени" },
              { href: "/ru/golovokruzhenie-kishinev/", label: "Головокружение и шум в ушах" },
              { href: "/ru/lechenie-bessonnitsy-kishinev/", label: "Лечение бессонницы" },
              { href: "/ru/vsd-distoniya-kishinev/", label: "ВСД и тест ВНС РУНО" },
              { href: "/ru/reabilitatsiya-posle-insulta-kishinev/", label: "Реабилитация после инсульта" },
              { href: "/ru/meditsinskaya-reabilitatsiya-kishinev/", label: "Центр реабилитации" },
              { href: "/ru/nevralgiya-neyropatiya-kishinev/", label: "Невралгия и нейропатия" },
              { href: "/ru/nevralgiya-troynichnogo-nerva-kishinev/", label: "Невралгия тройничного нерва" },
              { href: "/ru/tunnelnyy-sindrom-onemenie-ruk-kishinev/", label: "Туннельный синдром рук" },
              { href: "/ru/epilepsiya-kishinev/", label: "Эпилепсия и ЭЭГ" },
              { href: "/ru/nervnye-tiki-zaikanie-detyam-kishinev/", label: "Тики и заикание у детей" },
              { href: "/ru/bolezn-parkinsona-tremor-kishinev/", label: "Болезнь Паркинсона и тремор" },
              { href: "/ru/protruziya-diska-l4-l5-l5-s1-stenoz-kishinev/", label: "Протрузия L4–L5 / L5–S1 и стеноз (Гид МРТ)" },
              { href: "/ru/shum-v-ushah-tinnitus-spondilez-kishinev/", label: "Шум в ушах (тиннитус) и спондилёз" },
              { href: "/ru/golovnaya-bol-napryazheniya-vs-migren-kishinev/", label: "Головная боль vs. Мигрень (Гид)" },
              { href: "/ru/gid-funktsionalnaya-diagnostika-eeg-reg-amp-kishinev/", label: "Гид диагностики: ЭЭГ vs. РЭГ vs. АМП" },
              { href: "/ru/mezhrebernaya-nevralgiya-bol-mezhdu-lopatkami-kishinev/", label: "Межрёберная невралгия vs. Сердце" },
              { href: "/ru/gryzha-sheynogo-otdela-c5-c6-golovokruzhenie-kishinev/", label: "Грыжа шеи C5–C6 и головокружение" },
              { href: "/ru/onemenie-nog-polineyropatiya-kishinev/", label: "Онемение ног и полинейропатия" },
              { href: "/ru/protivopokazaniya-k-fizioterapii-kishinev/", label: "Противопоказания к физиотерапии" },
              { href: "/ru/enurez-u-detey-nevrolog-kishinev/", label: "Ночной энурез у детей (невролог)" }
             ]
            }
           ]
         : [
            {
             heading: "Consultații & Specialități",
             links: [
              { href: "/neurolog-chisinau/", label: "Neurolog Chișinău (500 MDL)" },
              { href: "/neurochirurg-chisinau/", label: "Neurochirurg Chișinău (500 MDL)" },
              { href: "/neuropediatru-chisinau/", label: "Neuropediatru Chișinău (500 MDL)" },
              { href: "/acupunctura-reflexoterapie-chisinau/", label: "Acupunctură & Reflexolog (500 MDL)" },
              { href: "/fitoterapeut-chisinau/", label: "Medic Fitoterapeut (500 MDL)" },
              { href: "/neurolog-ciocana-chisinau/", label: "Neurolog Ciocana (sediu)" },
              { href: "/fizioterapie-ciocana-chisinau/", label: "Fizioterapie Ciocana" }
             ]
            },
            {
             heading: "Diagnostic & Fizioterapie",
             links: [
              { href: "/eeg-chisinau/", label: "EEG Chișinău (1600 MDL)" },
              { href: "/eeg-copii-chisinau/", label: "EEG Copii (1600 MDL)" },
              { href: "/cartografierea-creierului-chisinau/", label: "Cartografiere Creier 3D (600 MDL)" },
              { href: "/diagnostic-amp-chisinau/", label: "Diagnostic AMP 117 (1000 MDL)" },
              { href: "/reoencefalografie-chisinau/", label: "Reoencefalografie REG (500 MDL)" },
              { href: "/electrospondilografie-chisinau/", label: "Electrospondilografie (500 MDL)" },
              { href: "/ecografie-ecg-chisinau/", label: "Ecografie & ECG (200–250 MDL)" },
              { href: "/fizioterapie-chisinau/", label: "Fizioterapie (de la 100 MDL / 30 min)" },
              { href: "/electrosomn-chisinau/", label: "Electrosomn & TES (100 MDL / 30 min)" },
              { href: "/electroforeza-amplipuls-chisinau/", label: "Electroforeză & Amplipuls (100 MDL)" },
              { href: "/magnetoterapie-laser-chisinau/", label: "Magnetoterapie & Laser (100 MDL)" },
              { href: "/ozonoterapie-darsonval-chisinau/", label: "Ozonoterapie & Darsonval (100 MDL)" },
              { href: "/camera-salina-bai-namol-chisinau/", label: "Cameră Salină & Nămol Saki (100–150 MDL)" },
              { href: "/masaj-terapeutic-chisinau/", label: "Masaj Terapeutic (200 MDL)" },
              { href: "/kinetoterapie-chisinau/", label: "Kinetoterapie (250 MDL)" }
             ]
            },
            {
             heading: "Afecțiuni & Recuperare",
             links: [
              { href: "/hernie-de-disc-chisinau/", label: "Hernie de disc fără operație" },
              { href: "/dureri-de-spate-sciatica-chisinau/", label: "Dureri de spate & Sciatică" },
              { href: "/osteocondroza-cervicala-chisinau/", label: "Osteocondroză cervicală" },
              { href: "/scolioza-postura-copii-adulti-chisinau/", label: "Scolioză & Postură" },
              { href: "/recuperare-postoperatorie-coloana-chisinau/", label: "Recuperare Post-Operatorie Coloană" },
              { href: "/pinten-calcanean-artroza-chisinau/", label: "Pinten Calcanean & Artroză" },
              { href: "/tratament-migrene-chisinau/", label: "Tratament Migrene" },
              { href: "/ameteli-vertij-chisinau/", label: "Amețeli & Vertij" },
              { href: "/insomnie-tratament-chisinau/", label: "Tratament Insomnie" },
              { href: "/distonie-neurovegetativa-chisinau/", label: "Distonie Neurovegetativă & RUNO" },
              { href: "/recuperare-dupa-avc-chisinau/", label: "Recuperare după AVC" },
              { href: "/reabilitare-medicala-neurologica-chisinau/", label: "Centru de Reabilitare" },
              { href: "/nevralgie-neuropatie-chisinau/", label: "Nevralgie & Neuropatie" },
              { href: "/nevralgie-trigemen-pareza-faciala-chisinau/", label: "Nevralgie Trigemen & Pareză Facială" },
              { href: "/tunel-carpian-amorteli-maini-chisinau/", label: "Tunel Carpian & Amorțeli Mâini" },
              { href: "/epilepsie-convulsii-chisinau/", label: "Epilepsie & EEG" },
              { href: "/ticuri-nervoase-balbaiala-copii-chisinau/", label: "Ticuri & Logonevroză Copii" },
              { href: "/boala-parkinson-tremor-memorie-chisinau/", label: "Parkinson, Tremor & Memorie" },
              { href: "/protruzie-discala-l4-l5-l5-s1-stenoza-chisinau/", label: "Protruzie L4–L5 / L5–S1 & Stenoză (Ghid RMN)" },
              { href: "/tinitus-zgomote-urechi-spondiloza-cervicala-chisinau/", label: "Tinitus (Zgomote urechi) & Spondiloză" },
              { href: "/cefalee-tensiune-vs-migrena-chisinau/", label: "Cefalee vs. Migrenă (Ghid Diferențial)" },
              { href: "/ghid-diagnostic-functional-eeg-reg-amp-chisinau/", label: "Ghid Diagnostic: EEG vs. REG vs. AMP" },
              { href: "/nevralgie-intercostala-durere-omoplati-chisinau/", label: "Nevralgie Intercostală vs. Inimă" },
              { href: "/hernie-cervicala-c5-c6-dureri-gat-ameteli-chisinau/", label: "Hernie Cervicală C5–C6 & Amețeli" },
              { href: "/amorteli-picioare-polineuropatie-chisinau/", label: "Amorțeli Picioare & Polineuropatie" },
              { href: "/contraindicatii-fizioterapie-siguranta-chisinau/", label: "Contraindicații Fizioterapie (Ghid)" },
              { href: "/enurezis-nocturn-copii-neuropediatru-chisinau/", label: "Enurezis Nocturn la Copii" }
             ]
            }
           ]
        ).map((col) => (
         <div key={col.heading} className="rm-seo-bento-col">
          <h3>{col.heading}</h3>
          <div className="rm-seo-bento-links">
           {col.links.map((item) => (
            <Link key={item.href} href={item.href} className="btn btn-outline-primary btn-sm">
             {item.label}
            </Link>
           ))}
          </div>
         </div>
        ))}
       </div>
      </div>
     </div>
    </section>
   )}

   <JsonLd
    data={{
     "@context": "https://schema.org",
     "@type": "FAQPage",
     mainEntity: homeFaq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
     }))
    }}
   />
   <section className="rmSection rm-home-faq-section">
    <div className="rmShell">
     <h2 className="centerTitle">{homeFaq.heading}</h2>
     <div className="rm-home-faq-grid">
      {homeFaq.items.map((f) => (
       <details className="rm-home-faq-card" data-glass-card>
        <summary>{f.q}</summary>
        <p>{f.a}</p>
       </details>
      ))}
     </div>
    </div>
   </section>

      <section className="testimonialBand">
    <div className="rmShell">
     <h2>{lang === "ro" ? "Recenzii pacienți" : lang === "en" ? "Patient Reviews" : lang === "ru" ? "Отзывы пациентов" : "Відгуки пацієнтів"}</h2>
     <ReviewCarousel lang={lang} />
    </div>
   </section>
  </>
 );
}

export function AboutTemplate({ lang }: { lang: Lang }) {
 const text = t(lang);
 const hero = getContentBlock(lang, "despre-noi", "hero");
 const aboutPath = `${withLang("/despre-noi", lang)}/`;
 const aboutTitle = lang === "ro" ? (hero?.title || text.aboutTitle) : text.aboutTitle;
 const aboutLead = lang === "ro" ? (hero?.text || text.aboutText1) : text.aboutText1;

 return (
  <>
   <JsonLd data={breadcrumbJsonLd([
    { name: text.home, path: withLang("/", lang) },
    { name: text.about, path: aboutPath }
   ])} />
   <JsonLd data={aboutPageJsonLd({
    name: aboutTitle,
    description: aboutLead,
    path: aboutPath
   })} />
   <PageHeading>
    <div>
     <p className="crumb">{text.home} / {text.about}</p>
     <h1>{aboutTitle}</h1>
     <p className="lead">{aboutLead}</p>
    </div>
   </PageHeading>
   <section className="rmSection aboutPageSection">
    <div className="rmShell aboutGrid rm-about-motion-grid">
     <DoctorMotionCard lang={lang} />
     <div className="adminCard prose" data-glass-card>
      <h2>{text.aboutTitle}</h2>
      <p>{text.aboutText1}</p>
      <p>{text.aboutText2}</p>
      <p>{site.description}</p>
      <p><b>{text.contact}:</b> {site.phone} · {site.phone2}</p>
      <p><b>{text.workHours}:</b> {site.hours}</p>
      <div className="rm-quick-links-bar">
       <Link href={withLang("/dr-igor-revenco/", lang)} className="btn btn-outline-primary btn-sm">Dr. Igor Revenco</Link>
       <Link href={withLang("/servicii/", lang)} className="btn btn-outline-primary btn-sm">{text.services}</Link>
       <Link href={withLang("/preturi/", lang)} className="btn btn-outline-primary btn-sm">{text.prices}</Link>
       <Link href={withLang("/contact/", lang)} className="btn btn-primary btn-sm">{text.contact}</Link>
      </div>
     </div>
    </div>
   </section>
  </>
 );
}

export function PricesTemplate({ lang }: { lang: Lang }) {
 const text = t(lang);
 const prices = getPrices(lang);
 const groups = Array.from(new Set(prices.map((p) => p.category)));
 const pricesPath = `${withLang("/preturi", lang)}/`;

 return (
  <>
   <JsonLd data={breadcrumbJsonLd([
    { name: text.home, path: withLang("/", lang) },
    { name: text.prices, path: pricesPath }
   ])} />
   <JsonLd data={offerCatalogJsonLd({
    name: text.pricesTitle,
    description: text.pricesSubtitle,
    path: pricesPath,
    items: prices.map((p: any) => ({ name: p.name, category: p.category, price: p.price }))
   })} />
   <PageHeading>
    <div>
     <p className="crumb">{text.home} / {text.prices}</p>
     <h1>{text.pricesTitle}</h1>
     <p className="lead">{text.pricesSubtitle}</p>
    </div>
   </PageHeading>
   <section className="rmSection pricesCleanSection">
    <div className="rmShell pricesModernLayout">
     <PricesInteractiveSection
      lang={lang}
      groups={groups}
      prices={prices}
      servicesCountLabel={text.servicesCount}
      converterLabels={text}
     />
    </div>
    <div className="rmShell rm-prices-bottom-shell" style={{ marginTop: 24 }}>
     <article className="rm-seo-bento-shell" data-glass-card style={{ textAlign: "center" }}>
      <h2 style={{ marginTop: 0 }}>
       {lang === "en"
        ? "Transparent Pricing & Individual Treatment Plans in Chișinău"
        : lang === "ru"
          ? "Ориентировочные цены и индивидуальный план в Кишинёве"
          : lang === "ua"
            ? "Орієнтовні ціни та індивідуальний план у Кишиневі"
            : "Tarife orientative și plan de tratament individual în Chișinău"}
      </h2>
      <p style={{ maxWidth: "78ch", margin: "0 auto 18px" }}>
       {lang === "en"
        ? "Revimed PLUS+ Medical Center (Str. Mircea cel Bătrân 13/2, Ciocana) lists 96 medical services across neurology, neurosurgery, pediatric neurology, physiotherapy, and functional diagnostics. Prices can be previewed in MDL, EUR, RON, USD, and UAH and are confirmed upon booking."
        : lang === "ru"
          ? "В медицинском центре Revimed PLUS+ (Кишинёв, Чеканы, ул. Мирча чел Бэтрын 13/2) представлено 96 направлений: консультация невролога, нейрохирурга, детского невролога, физиотерапия и диагностика. Актуальную стоимость уточняйте при записи."
          : lang === "ua"
            ? "У медичному центрі Revimed PLUS+ (Кишинів, Чекани, вул. Мірча чел Бетрин 13/2) представлено 96 послуг: невролог, нейрохірург, дитячий невролог, фізіотерапія та діагностика."
            : "Centrul Medical Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2) oferă 96 servicii medicale: consultații neurologice adulți și copii, neurochirurgie, fizioterapie, electroterapie și diagnostic funcțional. Tarifele orientative pot fi convertite instant în MDL, EUR, RON, USD și UAH și se confirmă la programare."}
      </p>
      <div className="rm-quick-links-bar" style={{ justifyContent: "center" }}>
       <Link href={withLang("/servicii/consultatii-neurologice/", lang)} className="btn btn-outline-primary btn-sm">
        {lang === "ru" ? "Невролог Кишинёв" : lang === "ua" ? "Невролог Кишинів" : lang === "en" ? "Neurology" : "Consultații neurologice"}
       </Link>
       <Link href={withLang("/servicii/consultatii-neurochirurgie/", lang)} className="btn btn-outline-primary btn-sm">
        {lang === "ru" ? "Нейрохирург Кишинёв" : lang === "ua" ? "Нейрохірург Кишинів" : lang === "en" ? "Neurosurgery" : "Neurochirurgie"}
       </Link>
       <Link href={withLang("/servicii/fizioterapie-si-reabilitare/", lang)} className="btn btn-outline-primary btn-sm">
        {lang === "ru" ? "Физиотерапия" : lang === "ua" ? "Фізіотерапія" : lang === "en" ? "Physiotherapy" : "Fizioterapie"}
       </Link>
       <Link href={withLang("/dr-igor-revenco/", lang)} className="btn btn-outline-primary btn-sm">
        Dr. Igor Revenco
       </Link>
       <Link href={withLang("/contact/", lang)} className="btn btn-primary btn-sm">
        {text.contact}
       </Link>
      </div>
     </article>
    </div>
   </section>
  </>
 );
}

export function GalleryTemplate({ lang }: { lang: Lang }) {
 const text = t(lang);
 const galleryImages = getGallery(lang);
 const galleryPath = `${withLang("/galerie", lang)}/`;
 const lightboxItems = galleryImages.map((image: any) => {
  const translated = translateGalleryTitle(lang, image.title, image.image);
  return {
   id: image.id,
   src: toWebpSrc(image.image),
   title: translated,
   alt: image.alt || translated
  };
 });

 return (
  <>
   <JsonLd data={breadcrumbJsonLd([
    { name: text.home, path: withLang("/", lang) },
    { name: text.gallery, path: galleryPath }
   ])} />
   <JsonLd data={galleryPageJsonLd({
    name: text.galleryTitle,
    description: text.gallerySubtitle,
    path: galleryPath,
    images: lightboxItems.map((img) => ({ url: img.src, caption: img.title })),
    videos: youtubeVideos.map((v) => ({ title: v.title, embedUrl: v.embed }))
   })} />
   <PageHeading>
    <div>
     <p className="crumb">{text.home} / {text.gallery}</p>
     <h1>{text.galleryTitle}</h1>
     <p className="lead">{text.gallerySubtitle}</p>
    </div>
   </PageHeading>

   <section className="rmSection galleryPageSection">
    <div className="rmShell">
     <h2 className="centerTitle">{text.photoGallery}</h2>
     <GalleryLightbox items={lightboxItems} />
    </div>
   </section>

   <section className="rmSection galleryVideoSection">
    <div className="rmShell">
     <h2 className="centerTitle">{text.ourVideos}</h2>
     <VideoGalleryDropdown videos={youtubeVideos} lang={lang} />
    </div>
   </section>
  </>
 );
}

export function BlogTemplate({ lang }: { lang: Lang }) {
 const text = t(lang);
 const posts = getStaticPublishedPosts(lang);
 const blogPath = `${withLang("/blog", lang)}/`;
 const moreLabel = lang === "en" ? "More +" : lang === "ru" ? "Показать ещё +" : lang === "ua" ? "Показати ще +" : "Mai multe +";
 const lessLabel = lang === "en" ? "Show less" : lang === "ru" ? "Свернуть" : lang === "ua" ? "Згорнути" : "Restrânge";

 const smartItems = posts.map((post) => ({
  id: String(post.id),
  href: withLang(`/blog/${post.slug}/`, lang),
  title: post.title,
  description: post.excerpt,
  image: toWebpSrc(post.image),
  action: text.readMore.replace(/\s*→$/, "")
 }));

 return (
  <>
   <JsonLd data={breadcrumbJsonLd([
    { name: text.home, path: withLang("/", lang) },
    { name: text.blog, path: blogPath }
   ])} />
   <JsonLd data={collectionPageJsonLd({
    name: text.blogTitle,
    description: text.blogSubtitle,
    path: blogPath,
    items: smartItems.map((item) => ({ name: item.title, url: item.href }))
   })} />
   <PageHeading>
    <div>
     <p className="crumb">{text.home} / {text.blog}</p>
     <h1>{text.blogTitle}</h1>
     <p className="lead">{text.blogSubtitle}</p>
    </div>
   </PageHeading>
   <ContentSection>
    {posts.length > 0 ? (
     <SmartCatalogGrid
      items={smartItems}
      initialCount={3}
      moreLabel={moreLabel}
      lessLabel={lessLabel}
      useInfoPopover
     />
    ) : (
     <p>{text.noPosts}</p>
    )}
   </ContentSection>
  </>
 );
}

export function BlogPostTemplate({ lang, slug }: { lang: Lang; slug: string }) {
 const text = t(lang);
 const post = getStaticPostBySlug(slug, lang as Lang);
 if (!post) return null;
 const postPath = withLang(`/blog/${post.slug}/`, lang);
 const blogPath = `${withLang("/blog", lang)}/`;

 return (
  <>
   <JsonLd data={breadcrumbJsonLd([
    { name: text.home, path: withLang("/", lang) },
    { name: text.blog, path: blogPath },
    { name: post.title, path: postPath }
   ])} />
   <JsonLd data={{
    "@context": "https://schema.org", "@type": "BlogPosting",
    headline: post.title, description: post.excerpt,
    mainEntityOfPage: absoluteUrl(postPath),
    inLanguage: lang === "ua" ? "uk" : lang,
    datePublished: "2026-11-21",
    dateModified: "2026-11-21",
    image: post.image.startsWith("http") ? post.image : absoluteUrl(post.image),
    author: {
     "@type": "Physician",
     "@id": `${site.url}/dr-igor-revenco/#physician`,
     name: "Dr. Igor Revenco",
     url: absoluteUrl(withLang("/dr-igor-revenco/", lang))
    },
    reviewedBy: {
     "@type": "Physician",
     "@id": `${site.url}/dr-igor-revenco/#physician`,
     name: "Dr. Igor Revenco"
    },
    publisher: { "@id": `${site.url}/#medical-clinic`, "@type": "MedicalClinic", name: site.name, url: site.url }
   }} />
   <PageHeading>
    <div>
     <p className="crumb">{text.blog} / {post.title}</p>
     <h1>{post.title}</h1>
     <p className="lead">{post.excerpt}</p>
    </div>
   </PageHeading>
   <ContentSection narrow><ReadingCard>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 16, fontSize: 13.5, color: "#516575" }}>
     <span>
      {lang === "en" ? "Medical review:" : lang === "ru" ? "Медицинская редакция:" : lang === "ua" ? "Медична редакція:" : "Revizie medicală:"}{" "}
      <Link href={withLang("/dr-igor-revenco/", lang)} style={{ fontWeight: 700, color: "#075f9e" }}>
       Dr. Igor Revenco
      </Link>
      {" · "}
      <time dateTime="2026-11-21">
       {lang === "en" ? "Updated: November 2026" : lang === "ru" ? "Обновлено: Ноябрь 2026" : lang === "ua" ? "Оновлено: Листопад 2026" : "Actualizat: Noiembrie 2026"}
      </time>
     </span>
     <Link href={withLang("/contact/", lang)} style={{ fontWeight: 600, color: "#0b8fd8" }}>
      {text.contact} →
     </Link>
    </div>
    <img src={toWebpSrc(post.image)} alt={post.title} width={1200} height={675} loading="lazy" decoding="async" />
    <div data-blog-content>{renderBlogContent(post.content)}</div>
    <div className="rm-blog-related-box" data-glass-card>
     <h2>
      {lang === "en"
       ? "Related Services & Guides at Revimed PLUS+"
       : lang === "ru"
         ? "Связанные услуги и статьи Revimed PLUS+"
         : lang === "ua"
           ? "Пов’язані послуги та статті Revimed PLUS+"
           : "Servicii și articole utile la Revimed PLUS+"}
     </h2>
     <div className="rm-quick-links-bar" style={{ marginTop: 10 }}>
      <Link href={withLang("/servicii/consultatii-neurologice/", lang)} className="btn btn-outline-primary btn-sm">
       {lang === "ru" ? "Невролог Кишинёв" : lang === "ua" ? "Невролог Кишинів" : lang === "en" ? "Neurology" : "Consultații neurologice"}
      </Link>
      <Link href={withLang("/servicii/consultatii-neurochirurgie/", lang)} className="btn btn-outline-primary btn-sm">
       {lang === "ru" ? "Нейрохирург" : lang === "ua" ? "Нейрохірург" : lang === "en" ? "Neurosurgery" : "Neurochirurgie"}
      </Link>
      <Link href={withLang("/servicii/fizioterapie-si-reabilitare/", lang)} className="btn btn-outline-primary btn-sm">
       {lang === "ru" ? "Физиотерапия" : lang === "ua" ? "Фізіотерапія" : lang === "en" ? "Physiotherapy" : "Fizioterapie"}
      </Link>
      <Link href={withLang("/preturi/", lang)} className="btn btn-outline-primary btn-sm">
       {text.prices}
      </Link>
      <Link href={withLang("/contact/", lang)} className="btn btn-primary btn-sm">
       {text.contact}
      </Link>
     </div>
     <ul style={{ marginTop: 14, marginBottom: 0, paddingLeft: 18 }}>
      {getStaticPublishedPosts(lang)
       .filter((p) => p.slug !== post.slug)
       .slice(0, 3)
       .map((rel) => (
        <li key={rel.slug} style={{ marginBottom: 6 }}>
         <Link href={withLang(`/blog/${rel.slug}/`, lang)} style={{ color: "#075f9e", fontWeight: 600 }}>
          {rel.title}
         </Link>
        </li>
       ))}
     </ul>
    </div>
    <div style={{ marginTop: 24 }}>
     <Link href={blogPath} className="rm-back-link" aria-label={text.blog}>←</Link>
    </div>
   </ReadingCard></ContentSection>
  </>
 );
}

export function ContactTemplate({ lang }: { lang: Lang }) {
 const text = t(lang);
 const contact = getContact(lang);
 const hero = getContentBlock(lang, "contact", "hero");
 const contactPath = `${withLang("/contact", lang)}/`;

 return (
  <>
   <JsonLd data={breadcrumbJsonLd([
    { name: text.home, path: withLang("/", lang) },
    { name: text.contact, path: contactPath }
   ])} />
   <JsonLd data={contactPageJsonLd({
    name: hero?.title || text.contactTitle,
    description: hero?.text || text.contactSubtitle,
    path: contactPath
   })} />
   <PageHeading>
    <div>
     <p className="crumb">{text.home} / {text.contact}</p>
     <h1>{hero?.title || text.contactTitle}</h1>
     <p className="lead">{hero?.text || text.contactSubtitle}</p>
    </div>
   </PageHeading>

   <section className="rmSection contactModernSection">
    <div className="rmShell contactModernGrid">
     <div className="contactPrimaryCard">
      <span className="contactBadge">Revimed PLUS+</span>
      <h2>{text.contact}</h2>
      <p className="contactIntro">{text.contactSubtitle}</p>

      <div className="contactInfoList">
       {contact.fixed_phone && (
        <a href={`tel:${contact.fixed_phone.replaceAll(" ", "")}`}>
         <IconVisual src="phone" alt="phone" className="contactSmallIcon" />
         <div><b>Fix</b><strong>{contact.fixed_phone}</strong></div>
        </a>
       )}
       {contact.phone && contact.phone.replaceAll(" ", "") !== contact.fixed_phone.replaceAll(" ", "") && (
        <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>
         <IconVisual src="iphone" alt="phone" className="contactSmallIcon" />
         <div><b>Mobil</b><strong>{contact.phone}</strong></div>
        </a>
       )}
       {contact.phone_alt && (
        <a href={`tel:${contact.phone_alt.replaceAll(" ", "")}`}>
         <IconVisual src="iphone" alt="phone" className="contactSmallIcon" />
         <div><b>Alt</b><strong>{contact.phone_alt}</strong></div>
        </a>
       )}
       {contact.email && (
        <a href={`mailto:${contact.email}`}>
         <IconVisual src="email" alt="email" className="contactSmallIcon" />
         <div><b>Email</b><strong>{contact.email}</strong></div>
        </a>
       )}
       {contact.address && (
        <div className="contactInfoStatic">
         <IconVisual src="marker" alt="address" className="contactSmallIcon" />
         <div><b>{lang === "en" ? "Address" : lang === "ru" ? "Адрес" : lang === "ua" ? "Адреса" : "Adresă"}</b><strong>{contact.address}</strong></div>
        </div>
       )}
      </div>

      <ContactActionsBar
       lang={lang}
       callLabel={text.callNow}
       mapLabel={text.openMap}
       fixedPhone={contact.fixed_phone}
       mobilePhone={contact.phone}
       altPhone={contact.phone_alt}
       mapEmbed={contact.map_embed}
       mapLink={contact.map_link}
      />
     </div>

     <aside className="contactSidePanel">
      <div className="contactMiniCard">
       <h3>{text.workHours}</h3>
       <p>{contact.hours_week}</p>
       <p>{contact.hours_weekend}</p>
      </div>

      <div className="contactMiniCard">
       <h3>{text.transport}</h3>
       <div className="transportModern rm-transport-list">
        {contact.trolleybus && (
         <div className="rm-transport-row">
          <IconVisual src="trolleybus" alt="trolleybus" className="contactSmallIcon" />
          <div>
           <b>{lang === "en" ? "Trolleybus" : lang === "ru" ? "Троллейбус" : lang === "ua" ? "Тролейбус" : "Troleibuz"}</b>
           <strong>{contact.trolleybus}</strong>
          </div>
         </div>
        )}
        {contact.bus && (
         <div className="rm-transport-row">
          <IconVisual src="bus" alt="bus" className="contactSmallIcon" />
          <div>
           <b>{lang === "en" ? "Bus" : lang === "ru" ? "Автобус" : lang === "ua" ? "Автобус" : "Autobuz"}</b>
           <strong>{contact.bus}</strong>
          </div>
         </div>
        )}
        {contact.tram && (
         <div className="rm-transport-row">
          <IconVisual src="taxi" alt="minibus" className="contactSmallIcon" />
          <div>
           <b>{lang === "en" ? "Minibus" : lang === "ru" ? "Маршрутка" : lang === "ua" ? "Маршрутка" : "Microbuz"}</b>
           <strong>{contact.tram}</strong>
          </div>
         </div>
        )}
       </div>
      </div>

      {(contact.image_one || contact.image_two) && (
       <ContactPhotoLightbox
        lang={lang}
        photos={[
         ...(contact.image_one && contact.image_one !== "/images/6.jpg"
          ? [{ src: toWebpSrc(contact.image_one), alt: "Revimed PLUS+" }]
          : []),
         ...(contact.image_two
          ? [{ src: toWebpSrc(contact.image_two), alt: "Revimed PLUS+ — Localizare" }]
          : [])
        ]}
       />
      )}
     </aside>
    </div>
    <div className="rmShell" style={{ marginTop: 22 }}>
     <article className="rm-seo-bento-shell" data-glass-card>
      <h2 style={{ marginTop: 0 }}>
       {lang === "en"
        ? "Location, Directions & Consultation Preparation — Ciocana, Chișinău"
        : lang === "ru"
          ? "Как добраться и подготовиться к приёму — Кишинёв, Чеканы"
          : lang === "ua"
            ? "Як дістатися та підготуватися до прийому — Кишинів, Чекани"
            : "Acces, localizare și pregătire pentru consultație — Chișinău, Ciocana"}
      </h2>
      <p style={{ maxWidth: "none", marginBottom: 16 }}>
       {lang === "en"
        ? "Revimed PLUS+ Medical Center is located on Str. Mircea cel Bătrân 13/2 (MD-2044, Ciocana sector, Chișinău), with convenient public transit access. Please bring any previous MRI, CT, X-ray images (CD/film) and medication lists for consultations with Dr. Igor Revenco."
        : lang === "ru"
          ? "Медицинский центр Revimed PLUS+ расположен в Кишинёве (сектор Чеканы, ул. Мирча чел Бэтрын 13/2, MD-2044) с удобным доступом на общественном транспорте. На приём к д-ру Игорю Ревенко желательно взять снимки/диски МРТ, КТ и список лекарств."
          : lang === "ua"
            ? "Медичний центр Revimed PLUS+ розташований у Кишиневі (сектор Чекани, вул. Мірча чел Бетрин 13/2, MD-2044). На прийом до д-ра Ігоря Ревенка бажано взяти знімки/диски МРТ, КТ та список ліків."
            : "Centrul Medical Revimed PLUS+ se află pe Str. Mircea cel Bătrân 13/2 (MD-2044, sectorul Ciocana, Chișinău), cu acces direct la transport public. Pentru consultațiile cu Dr. Igor Revenco, aduceți imaginile RMN/CT (CD sau film) și lista tratamentelor anterioare, dacă le aveți."}
      </p>
      <div className="rm-quick-links-bar">
       <Link href={withLang("/dr-igor-revenco/", lang)} className="btn btn-outline-primary btn-sm">Dr. Igor Revenco</Link>
       <Link href={withLang("/servicii/consultatii-neurologice/", lang)} className="btn btn-outline-primary btn-sm">{lang === "ru" ? "Невролог Кишинёв" : lang === "ua" ? "Невролог Кишинів" : lang === "en" ? "Neurology" : "Consultații neurologice"}</Link>
       <Link href={withLang("/preturi/", lang)} className="btn btn-outline-primary btn-sm">{text.prices}</Link>
       <Link href="/intrebari/" className="btn btn-outline-primary btn-sm">FAQ</Link>
      </div>
     </article>
    </div>
   </section>
  </>
 );
}
