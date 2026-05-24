import Link from "next/link";
import { youtubeVideos } from "@/lib/videos";
import { site } from "@/lib/site";
import { translatedTools } from "@/lib/appMeta";
import { getStaticPublishedPosts, getStaticPostBySlug } from "@/lib/staticBlogPosts";
import { translateGalleryTitle } from "@/lib/galleryTranslate";
import { getPublishedServicesSmart, getPublishedPricesSmart, getPublishedPostsSmart, getServiceBySlugSmart, getPostBySlugSmart } from "@/lib/db";
import { getContactContentSmart, getContentBlockSmart, getPublishedGalleryItemsSmart } from "@/lib/content";
import { t, withLang, type Lang } from "@/lib/i18n";
import CurrencyConverter from "@/components/CurrencyConverter";
import PricesAccordion from "@/components/PricesAccordion";
import ReviewCarousel from "@/components/ReviewCarousel";
import IconVisual from "@/components/IconVisual";
import HomeCTA from "@/components/HomeCTA";
import HomeStats from "@/components/HomeStats";
import { cleanServiceText, getServiceSeo } from "@/lib/serviceSeoText";






const pageHeroCopy = {
  ro: {
    servicesTitle: "Servicii medicale",
    servicesLead: "Consultații, evaluări funcționale și programe de recuperare pentru sănătatea sistemului nervos.",
    appsTitle: "Teste și Instrumente",
    appsLead: "Instrumente educaționale pentru pacienți: autoevaluare, monitorizare și pregătire pentru consultație.",
    blogTitle: "Blog Revimed PLUS+",
    blogLead: "Articole educaționale despre sănătate, prevenție, recuperare și îngrijirea sistemului nervos."
  },
  en: {
    servicesTitle: "Medical services",
    servicesLead: "Consultations, functional assessments and rehabilitation programs focused on nervous system health.",
    appsTitle: "Tests and Tools",
    appsLead: "Educational tools for patients: self-assessment, monitoring and preparation for medical consultation.",
    blogTitle: "Revimed PLUS+ Blog",
    blogLead: "Educational articles about health, prevention, recovery and nervous system care."
  },
  ru: {
    servicesTitle: "Медицинские услуги",
    servicesLead: "Консультации, функциональная оценка и программы восстановления для здоровья нервной системы.",
    appsTitle: "Тесты и инструменты",
    appsLead: "Образовательные инструменты для пациентов: самооценка, наблюдение и подготовка к консультации.",
    blogTitle: "Блог Revimed PLUS+",
    blogLead: "Образовательные статьи о здоровье, профилактике, восстановлении и заботе о нервной системе."
  },
  ua: {
    servicesTitle: "Медичні послуги",
    servicesLead: "Консультації, функціональна оцінка та програми відновлення для здоров’я нервової системи.",
    appsTitle: "Тести та інструменти",
    appsLead: "Освітні інструменти для пацієнтів: самооцінка, спостереження та підготовка до консультації.",
    blogTitle: "Блог Revimed PLUS+",
    blogLead: "Освітні статті про здоров’я, профілактику, відновлення та догляд за нервовою системою."
  }
} as const;

function cleanHeroText(value: string | undefined | null, fallback: string) {
  const text = String(value || "").trim();
  if (!text) return fallback;

  const bad = [
    "Content will be added soon.",
    "Контент будет добавлен позже.",
    "Conținutul va fi adăugat mai târziu.",
    "Контент буде додано пізніше.",
    "Consultații, diagnostic, terapii și reabilitare organizate clar."
  ];

  if (bad.includes(text)) return fallback;
  return text;
}



function isCorrectBlogLanguage(post: any, lang: Lang) {
  const slug = String(post?.slug || "");
  const title = String(post?.title || "");
  const postLang = String(post?.lang || "ro");

  if (postLang !== lang) return false;

  const roOnlySlugs = [
    "cum-reducem-riscul-de-cancer",
    "7-alimente-sanatoase-pentru-energie-digestie-si-echilibru-metabolic"
  ];

  if (lang !== "ro" && roOnlySlugs.includes(slug)) return false;

  if (lang !== "ro") {
    const looksRomanian =
      /ă|â|î|ș|ţ|ț/i.test(title) ||
      /Cum reducem riscul|7 alimente sănătoase|prevenție|digestie|echilibru metabolic/i.test(title);

    if (looksRomanian) return false;
  }

  return true;
}


const serviceCardTranslations = {
  ro: {
    "Consultații Neurologice": {
      title: "Consultații Neurologice",
      desc: "Evaluări neurologice complete pentru diagnosticarea și gestionarea afecțiunilor neurologice."
    },
    "Consultații Neurochirurgie": {
      title: "Consultații Neurochirurgie",
      desc: "Consultații pentru evaluarea necesității intervențiilor chirurgicale și a patologiilor coloanei."
    },
    "Fizioterapie și Reabilitare": {
      title: "Fizioterapie și Reabilitare",
      desc: "Programe personalizate de reabilitare pentru recuperarea forței, mobilității și funcției."
    },
    "Diagnostic Funcțional": {
      title: "Diagnostic Funcțional",
      desc: "Evaluări funcționale pentru sistemul nervos, mușchi, coordonare și funcții asociate."
    },
    "Terapie Balneară": {
      title: "Terapie Balneară",
      desc: "Tratamente balneare, nămol, hidroterapie și terapii complementare."
    },
    "Electroterapie": {
      title: "Electroterapie",
      desc: "Electrostimulare și proceduri electroterapeutice pentru durere, mușchi și recuperare."
    }
  },
  en: {
    "Consultații Neurologice": {
      title: "Neurology Consultations",
      desc: "Complete neurological evaluations for diagnosis and management of neurological conditions."
    },
    "Consultații Neurochirurgie": {
      title: "Neurosurgery Consultations",
      desc: "Consultations for assessing surgical needs and spine-related conditions."
    },
    "Fizioterapie și Reabilitare": {
      title: "Physiotherapy and Rehabilitation",
      desc: "Personalized rehabilitation programs for restoring strength, mobility and function."
    },
    "Diagnostic Funcțional": {
      title: "Functional Diagnostics",
      desc: "Functional evaluations for the nervous system, muscles, coordination and related functions."
    },
    "Terapie Balneară": {
      title: "Balneotherapy",
      desc: "Balneotherapy, therapeutic mud, hydrotherapy and complementary treatments."
    },
    "Electroterapie": {
      title: "Electrotherapy",
      desc: "Electrostimulation and electrotherapy procedures for pain, muscles and recovery."
    }
  },
  ru: {
    "Consultații Neurologice": {
      title: "Неврологические консультации",
      desc: "Полная неврологическая оценка для диагностики и ведения неврологических состояний."
    },
    "Consultații Neurochirurgie": {
      title: "Консультации нейрохирурга",
      desc: "Консультации для оценки необходимости хирургического вмешательства и заболеваний позвоночника."
    },
    "Fizioterapie și Reabilitare": {
      title: "Физиотерапия и реабилитация",
      desc: "Индивидуальные программы восстановления силы, подвижности и функций."
    },
    "Diagnostic Funcțional": {
      title: "Функциональная диагностика",
      desc: "Функциональная оценка нервной системы, мышц, координации и связанных функций."
    },
    "Terapie Balneară": {
      title: "Бальнеотерапия",
      desc: "Бальнеологические процедуры, лечебная грязь, гидротерапия и дополнительные терапии."
    },
    "Electroterapie": {
      title: "Электротерапия",
      desc: "Электростимуляция и электротерапевтические процедуры при боли, для мышц и восстановления."
    }
  },
  ua: {
    "Consultații Neurologice": {
      title: "Неврологічні консультації",
      desc: "Повна неврологічна оцінка для діагностики та ведення неврологічних станів."
    },
    "Consultații Neurochirurgie": {
      title: "Консультації нейрохірурга",
      desc: "Консультації для оцінки потреби в хірургічному втручанні та станів хребта."
    },
    "Fizioterapie și Reabilitare": {
      title: "Фізіотерапія та реабілітація",
      desc: "Індивідуальні програми реабілітації для відновлення сили, рухливості та функції."
    },
    "Diagnostic Funcțional": {
      title: "Функціональна діагностика",
      desc: "Функціональна оцінка нервової системи, м’язів, координації та пов’язаних функцій."
    },
    "Terapie Balneară": {
      title: "Бальнеотерапія",
      desc: "Бальнеологічні процедури, лікувальні грязі, гідротерапія та додаткові терапії."
    },
    "Electroterapie": {
      title: "Електротерапія",
      desc: "Електростимуляція та електротерапевтичні процедури при болю, для м’язів і відновлення."
    }
  }
} as const;

function serviceCardCopy(service: any, lang: Lang) {
  const originalTitle = cleanServiceText(service?.title || "");
  const byLang = serviceCardTranslations[lang] || serviceCardTranslations.ro;
  const translated = byLang[originalTitle as keyof typeof byLang];

  return {
    title: translated?.title || originalTitle,
    desc: translated?.desc || service?.short_desc || ""
  };
}

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
      return <h2 className="blogContentHeading" key={idx}>{line}</h2>;
    }

    if (isPhone) {
      return <p className="blogPhoneLine" key={idx}>{line}</p>;
    }

    if (isAppointment) {
      return <p className="blogAppointmentLine" key={idx}>{line}</p>;
    }

    if (isDisclaimer) {
      return <p className="blogDisclaimerLine" key={idx}>{line}</p>;
    }

    return <p key={idx}>{line}</p>;
  });
}

const seoVisibleText = {
 ro: {
  servicesTitle: "Servicii medicale Revimed PLUS+ în Chișinău",
  servicesP1:
   "Centrul Medical Revimed PLUS+ oferă servicii orientate spre evaluarea sistemului nervos, recuperare funcțională, fizioterapie, diagnostic și terapii complementare. Pacienții se pot adresa pentru dureri de spate, dureri cervicale, amețeli, amorțeli, tulburări de mers, recuperare după afecțiuni neurologice sau pentru un plan personalizat de reabilitare.",
  servicesP2:
   "Scopul consultației este să înțelegem simptomele, să analizăm istoricul pacientului și să recomandăm pașii potriviți: evaluare neurologică, consultație neurochirurgicală, fizioterapie, electroterapie, terapie balneară sau monitorizare. Clinica se află în Chișinău, sectorul Ciocana.",
  prices: "Vezi prețurile",
  appointment: "Programează o consultație",
  tools: "Teste educaționale pentru pacienți",
  appsTitle: "Teste și instrumente educaționale pentru pacienți",
  appsP1:
   "Instrumentele digitale Revimed PLUS+ sunt create pentru orientare educațională înainte de consultație. Pacientul poate completa teste pentru postură și coloană, dureri de spate, echilibru, somn, respirație sau simptome neurologice, apoi poate tipări un raport cu răspunsurile selectate pentru a-l prezenta medicului.",
  appsP2:
   "Aceste aplicații nu pun diagnostic și nu înlocuiesc consultația medicală. Ele ajută pacientul să organizeze informațiile importante: când au început simptomele, ce le agravează, ce le ameliorează, ce semnale de alarmă există și ce întrebări trebuie pregătite pentru medic.",
  appsBullets: [
   "raport printabil cu răspunsurile pacientului;",
   "recomandări educaționale clare;",
   "semnale când este indicat consult rapid;",
   "pregătire mai bună pentru consultație la Revimed PLUS+ Chișinău."
  ],
  services: "Servicii medicale",
  contact: "Contact și programări"
 },
 en: {
  servicesTitle: "Revimed PLUS+ medical services in Chisinau",
  servicesP1:
   "Revimed PLUS+ Medical Center provides services focused on nervous system assessment, functional recovery, physiotherapy, diagnostics and complementary therapies. Patients may come for back pain, neck pain, dizziness, numbness, walking problems, recovery after neurological conditions or a personalized rehabilitation plan.",
  servicesP2:
   "The purpose of the consultation is to understand the symptoms, review the patient history and recommend the right next steps: neurological assessment, neurosurgical consultation, physiotherapy, electrotherapy, balneotherapy or monitoring. The clinic is located in Chisinau, Ciocana district.",
  prices: "View prices",
  appointment: "Book a consultation",
  tools: "Educational tools for patients",
  appsTitle: "Educational tests and tools for patients",
  appsP1:
   "Revimed PLUS+ digital tools are created for educational orientation before a consultation. Patients can complete tests for posture and spine, back pain, balance, sleep, breathing or neurological symptoms, then print a report with their selected answers to show the doctor.",
  appsP2:
   "These applications do not diagnose and do not replace a medical consultation. They help patients organize important information: when symptoms started, what makes them worse, what relieves them, which warning signs exist and what questions should be prepared for the doctor.",
  appsBullets: [
   "printable report with the patient’s answers;",
   "clear educational recommendations;",
   "warning signs when quick consultation is recommended;",
   "better preparation for a consultation at Revimed PLUS+ Chisinau."
  ],
  services: "Medical services",
  contact: "Contact and appointments"
 },
 ru: {
  servicesTitle: "Медицинские услуги Revimed PLUS+ в Кишиневе",
  servicesP1:
   "Медицинский центр Revimed PLUS+ предлагает услуги, направленные на оценку нервной системы, функциональное восстановление, физиотерапию, диагностику и дополнительные терапии. Пациенты могут обращаться при боли в спине, боли в шее, головокружении, онемении, нарушении ходьбы, восстановлении после неврологических состояний или для индивидуального плана реабилитации.",
  servicesP2:
   "Цель консультации — понять симптомы, оценить историю пациента и рекомендовать правильные следующие шаги: неврологическую оценку, консультацию нейрохирурга, физиотерапию, электротерапию, бальнеотерапию или наблюдение. Клиника находится в Кишиневе, сектор Чеканы.",
  prices: "Посмотреть цены",
  appointment: "Записаться на консультацию",
  tools: "Образовательные тесты для пациентов",
  appsTitle: "Образовательные тесты и инструменты для пациентов",
  appsP1:
   "Цифровые инструменты Revimed PLUS+ созданы для образовательной ориентации перед консультацией. Пациент может пройти тесты для осанки и позвоночника, боли в спине, равновесия, сна, дыхания или неврологических симптомов, а затем распечатать отчет с выбранными ответами для врача.",
  appsP2:
   "Эти приложения не ставят диагноз и не заменяют медицинскую консультацию. Они помогают пациенту организовать важную информацию: когда начались симптомы, что их усиливает, что облегчает, какие есть тревожные признаки и какие вопросы подготовить врачу.",
  appsBullets: [
   "печатный отчет с ответами пациента;",
   "понятные образовательные рекомендации;",
   "тревожные признаки, когда нужна быстрая консультация;",
   "лучшая подготовка к консультации в Revimed PLUS+ Кишинев."
  ],
  services: "Медицинские услуги",
  contact: "Контакты и запись"
 },
 ua: {
  servicesTitle: "Медичні послуги Revimed PLUS+ у Кишиневі",
  servicesP1:
   "Медичний центр Revimed PLUS+ пропонує послуги, спрямовані на оцінку нервової системи, функціональне відновлення, фізіотерапію, діагностику та додаткові терапії. Пацієнти можуть звертатися при болю в спині, болю в шиї, запамороченні, онімінні, порушенні ходи, відновленні після неврологічних станів або для індивідуального плану реабілітації.",
  servicesP2:
   "Мета консультації — зрозуміти симптоми, оцінити історію пацієнта та рекомендувати правильні наступні кроки: неврологічну оцінку, консультацію нейрохірурга, фізіотерапію, електротерапію, бальнеотерапію або спостереження. Клініка знаходиться у Кишиневі, сектор Чекани.",
  prices: "Переглянути ціни",
  appointment: "Записатися на консультацію",
  tools: "Освітні тести для пацієнтів",
  appsTitle: "Освітні тести та інструменти для пацієнтів",
  appsP1:
   "Цифрові інструменти Revimed PLUS+ створені для освітньої орієнтації перед консультацією. Пацієнт може пройти тести для постави та хребта, болю в спині, рівноваги, сну, дихання або неврологічних симптомів, а потім роздрукувати звіт з обраними відповідями для лікаря.",
  appsP2:
   "Ці застосунки не встановлюють діагноз і не замінюють медичну консультацію. Вони допомагають пацієнту організувати важливу інформацію: коли почалися симптоми, що їх посилює, що полегшує, які є тривожні ознаки та які питання підготувати лікарю.",
  appsBullets: [
   "друкований звіт з відповідями пацієнта;",
   "зрозумілі освітні рекомендації;",
   "тривожні ознаки, коли потрібна швидка консультація;",
   "краща підготовка до консультації в Revimed PLUS+ Кишинів."
  ],
  services: "Медичні послуги",
  contact: "Контакти та запис"
 }
} as const;

export function HomeTemplate({ lang }: { lang: Lang }) {
 const text = t(lang);

 return (
  <>
   <section className="homeHero">
    <div className="heroOverlay">
     <div className="rmShell heroCenter">
      <h1>{text.heroTitle}</h1>
      <p>{text.heroSubtitle}</p>
      <Link href={withLang("/servicii", lang)} className="blueBtn">{text.servicesButton}</Link>
     </div>
    </div>
   </section>

   <HomeStats lang={lang} />

   <section className="rmSection aboutBlock">
    <div className="rmShell aboutGrid">
     <div className="doctorVisual">
      <img src="/images/about-us.jpg" alt="Revimed PLUS+" />
     </div>
     <div>
      <h2>{text.aboutTitle}</h2>
      <p>{text.aboutText1}</p>
      <p>{text.aboutText2}</p>
      <Link className="softBtn" href={withLang("/despre-noi", lang)}>{text.readMore}</Link>
     </div>
    </div>
   </section>

   <section className="rmSection homeEquipmentBlock">
    <div className="rmShell">
     <h2 className="centerTitle">Utilaje Revimed PLUS+</h2>
     <div className="homeEquipmentGrid">
      <Link href={withLang("/utilaj/electrosomn-3", lang)} className="homeEquipmentCard">
       <img src="https://1profimed.ru/wp-content/uploads/electroson-03.jpg" alt="Electrosomn" />
       <div><span>Electrosomn</span><h3>Terapie prin electrosomn</h3></div>
      </Link>
      <Link href={withLang("/utilaj/transair-01p-transair-05", lang)} className="homeEquipmentCard">
       <img src="https://i.ytimg.com/vi/5CIIRU5jH68/maxresdefault.jpg" alt="Transair" />
       <div><span>Transair</span><h3>Proceduri transcraniene</h3></div>
      </Link>
      <Link href={withLang("/utilaj/bi-lenar", lang)} className="homeEquipmentCard">
       <img src="https://images.prom.ua/125888856_w300_h300_apparat-dlya-elektrostimulyatsii.jpg" alt="Bi-LENAR" />
       <div><span>Bi-LENAR</span><h3>Neurostimulare funcțională</h3></div>
      </Link>
     </div>
    </div>
   </section>

   <HomeCTA lang={lang} />

   <section className="testimonialBand">
    <div className="rmShell">
     <h2>{lang === "ro" ? "Reviews" : lang === "en" ? "Reviews" : lang === "ru" ? "Отзывы" : "Відгуки"}</h2>
     <ReviewCarousel lang={lang} />
    </div>
   </section>
  </>
 );
}

export function AboutTemplate({ lang }: { lang: Lang }) {
 const text = t(lang);
 const hero = getContentBlockSmart(lang, "despre-noi", "hero");

 return (
  <>
   <section className="pageHero aboutPageHero innerPageHero">
    <div className="rmShell">
     <p className="crumb">{text.home} / {text.about}</p>
     <h1>{lang === "ro" ? (hero?.title || text.aboutTitle) : text.aboutTitle}</h1>
     <p className="lead">{lang === "ro" ? (hero?.text || text.aboutText1) : text.aboutText1}</p>
    </div>
   </section>
   <section className="rmSection aboutPageSection">
    <div className="rmShell aboutGrid">
     <div className="doctorVisual">
      <img src="/images/about-us.jpg" alt="Revimed PLUS+" />
     </div>
     <div className="adminCard prose">
      <h2>{text.aboutTitle}</h2>
      <p>{text.aboutText1}</p>
      <p>{text.aboutText2}</p>
      <p>{site.description}</p>
      <p><b>{text.contact}:</b> {site.phone} · {site.phone2}</p>
      <p><b>{text.workHours}:</b> {site.hours}</p>
     </div>
    </div>
   </section>
  </>
 );
}

export function ServicesTemplate({ lang }: { lang: Lang }) {
 const text = t(lang);
 const seoText = seoVisibleText[lang] || seoVisibleText.ro;
 const hero = getContentBlockSmart(lang, "servicii", "hero");
 const services = getPublishedServicesSmart(lang);

 return (
  <>
   <section className="pageHero blogPostHero innerPageHero">
    <div className="rmShell">
     <p className="crumb">{text.home} / {text.services}</p>
     <h1>{lang === "ro" ? (hero?.title || text.services) : text.services}</h1>
     <p className="lead">{lang === "ro" ? (hero?.text || text.noItems) : text.noItems}</p>
    </div>
   </section>
   <section className="rmSection">
    <div className="rmShell serviceGrid">
     {services.map((service) => {
      const copy = serviceCardCopy(service, lang);
      return (
       <Link href={withLang(`/servicii/${service.slug}`, lang)} className="serviceTile" key={service.id}>
        <IconVisual src={service.icon} alt={copy.title} className="tileIconImg" />
        <h3>{copy.title}</h3>
        <p>{copy.desc}</p>
       </Link>
      );
     })}
    </div>

    <div className="rmShell seoContentBlock">
     <h2>{seoText.servicesTitle}</h2>
     <p>{seoText.servicesP1}</p>
     <p>{seoText.servicesP2}</p>
     <div className="seoLinks">
      <Link href={withLang("/preturi", lang)}>{seoText.prices}</Link>
      <Link href={withLang("/contact", lang)}>{seoText.appointment}</Link>
      <Link href={withLang("/aplicatii/teste-si-instrumente", lang)}>{seoText.tools}</Link>
     </div>
    </div>
   </section>
  </>
 );
}

export function ServiceTemplate({ lang, slug }: { lang: Lang; slug: string }) {
 const text = t(lang);
 const service = getServiceBySlugSmart(slug, lang);
 if (!service) return null;

 return (
  <>
   <section className="pageHero blogPostHero innerPageHero">
    <div className="rmShell">
     <p className="crumb">{text.home} / {text.services} / {cleanServiceText(service.title)}</p>
     <h1>{cleanServiceText(service.title)}</h1>
     <p className="lead">{service.short_desc}</p>
     <Link className="blueBtn" href={withLang("/contact", lang)}>{text.appointment}</Link>
    </div>
   </section>
   <section className="rmSection">
    <div className="rmShell contentGrid">
     <article className="adminCard serviceArticle blogArticleCard">
      <img src={service.image} alt={cleanServiceText(service.title)} className="serviceHeroImg" />
      <div className="textContent blogReadableContent">
       {service.full_content.split("\n").map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return <br key={idx} />;
        if (trimmed.startsWith("- ")) return <li key={idx}>{trimmed.replace("- ", "")}</li>;
        return <p key={idx}>{trimmed}</p>;
       })}
      </div>
     </article>
     <aside className="adminCard sideBox">
      <h2>{text.contact}</h2>
      <p>{site.phone}</p>
      <p>{site.phone2}</p>
      <p>{site.address}</p>
      <Link className="blueBtn" href={withLang("/contact", lang)}>{text.contact}</Link>
     </aside>
    </div>
   </section>
  </>
 );
}

export function AppsTemplate({ lang }: { lang: Lang }) {
 const text = t(lang);
 const appTools = translatedTools(lang);
 const seoText = seoVisibleText[lang] || seoVisibleText.ro;
 const hero = getContentBlockSmart(lang, "aplicatii", "hero");

 return (
  <>
   <section className="pageHero blogPostHero innerPageHero">
    <div className="rmShell">
     <p className="crumb">{text.home} / {text.apps}</p>
     <h1>{lang === "ro" ? (hero?.title || text.toolsTitle) : text.toolsTitle}</h1>
     <p className="lead">{lang === "ro" ? (hero?.text || text.toolsSubtitle) : text.toolsSubtitle}</p>
    </div>
   </section>
   <section className="rmSection">
    <div className="rmShell toolGrid">
     {appTools.map((tool) => (
      <Link href={withLang(tool.href, lang)} className="toolTile" key={tool.slug}>
       <span>{tool.tag}</span>
       <h3>{tool.title}</h3>
       <p>{tool.description}</p>
       <b>{text.readMore}</b>
      </Link>
     ))}
    </div>

    <div className="rmShell seoContentBlock">
     <h2>{seoText.appsTitle}</h2>
     <p>{seoText.appsP1}</p>
     <p>{seoText.appsP2}</p>
     <ul>
      {seoText.appsBullets.map((item) => <li key={item}>{item}</li>)}
     </ul>
     <div className="seoLinks">
      <Link href={withLang("/servicii", lang)}>{seoText.services}</Link>
      <Link href={withLang("/contact", lang)}>{seoText.contact}</Link>
      <Link href={withLang("/preturi", lang)}>{seoText.prices}</Link>
     </div>
    </div>
   </section>
  </>
 );
}

export function PricesTemplate({ lang }: { lang: Lang }) {
 const text = t(lang);
 const prices = getPublishedPricesSmart(lang);
 const groups = Array.from(new Set(prices.map((p) => p.category)));

 return (
  <>
   <section className="pageHero pricesHero innerPageHero">
    <div className="rmShell">
     <p className="crumb">{text.home} / {text.prices}</p>
     <h1>{text.pricesTitle}</h1>
     <p className="lead">{text.pricesSubtitle}</p>
    </div>
   </section>
   <section className="rmSection pricesCleanSection">
    <div className="rmShell pricesModernLayout">
     <CurrencyConverter labels={text} />
     <div className="priceNotice">
      <b>Info:</b> {text.priceNote}: {site.phone} · {site.phone2}
     </div>
     <PricesAccordion groups={groups} prices={prices} servicesCountLabel={text.servicesCount} />
    </div>
   </section>
  </>
 );
}

export function GalleryTemplate({ lang }: { lang: Lang }) {
 const text = t(lang);
 const galleryImages = getPublishedGalleryItemsSmart(lang);

 return (
  <>
   <section className="pageHero galleryHero innerPageHero">
    <div className="rmShell">
     <p className="crumb">{text.home} / {text.gallery}</p>
     <h1>{text.galleryTitle}</h1>
     <p className="lead">{text.gallerySubtitle}</p>
    </div>
   </section>

   <section className="rmSection galleryPageSection">
    <div className="rmShell">
     <h2 className="centerTitle">{text.photoGallery}</h2>
     <div className="galleryMasonry fixedGalleryGrid">
      {galleryImages.map((image: any, index: number) => (
       <a
        href={image.image}
        target="_blank"
        rel="noopener noreferrer"
        className={index === 0 || index === 3 ? "galleryPhoto galleryLarge" : "galleryPhoto"}
        key={image.id}
       >
        <img src={image.image} alt={image.alt || image.title} loading="lazy" />
        <span>{translateGalleryTitle(lang, image.title, image.image)}</span>
       </a>
      ))}
     </div>
    </div>
   </section>

   <section className="rmSection galleryVideoSection">
    <div className="rmShell">
     <h2 className="centerTitle">{text.ourVideos}</h2>
     <div className="galleryVideoGrid">
      {youtubeVideos.map((video) => (
       <article className="galleryVideoCard" key={video.embed}>
        <div className="youtubeFrame">
         <iframe
          src={video.embed}
          title={video.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
         />
        </div>
        <h3>{video.title}</h3>
       </article>
      ))}
     </div>
    </div>
   </section>
  </>
 );
}

export function BlogTemplate({ lang }: { lang: Lang }) {
 const text = t(lang);
 const posts = getStaticPublishedPosts(lang).filter((post: any) => isCorrectBlogLanguage(post, lang));

 return (
  <>
   <section className="pageHero blogPostHero innerPageHero">
    <div className="rmShell">
     <p className="crumb">{text.home} / {text.blog}</p>
     <h1>{text.blogTitle}</h1>
     <p className="lead">{text.blogSubtitle}</p>
    </div>
   </section>
   <section className="rmSection">
    <div className="rmShell grid3">
     {posts.length === 0 && <div className="adminCard"><p>{text.noPosts}</p></div>}
     {posts.map((post) => (
      <Link href={withLang(`/blog/${post.slug}`, lang)} className="card blogCard" key={post.id}>
       <div className="blogImage" style={{ backgroundImage: `url(${post.image})` }} />
       <h2>{post.title}</h2>
       <p>{post.excerpt}</p>
       <b>{text.readMore}</b>
      </Link>
     ))}
    </div>
   </section>
  </>
 );
}

export function BlogPostTemplate({ lang, slug }: { lang: Lang; slug: string }) {
 const text = t(lang);
 const post = getStaticPostBySlug(slug, lang as Lang);
 if (!post) return null;

 return (
  <>
   <section className="pageHero blogPostHero innerPageHero">
    <div className="rmShell">
     <p className="crumb">{text.blog} / {post.title}</p>
     <h1>{post.title}</h1>
     <p className="lead">{post.excerpt}</p>
    </div>
   </section>
   <section className="rmSection blogPostSection">
    <article className="rmShell adminCard prose blogPostArticle blogArticleCard">
     <div className="postHeroImage" style={{ backgroundImage: `url(${post.image})` }} />
     <div className="blogReadableContent">
      {renderBlogContent(post.content)}
     </div>
    </article>
   </section>
  </>
 );
}


function normalizeContactValue(value: string | undefined | null) {
 return String(value || "").replace(/[\s()–-]/g, "").trim();
}

function isUniqueContactValue(value: string | undefined | null, used: Set<string>) {
 const normalized = normalizeContactValue(value);
 if (!normalized) return false;
 if (used.has(normalized)) return false;
 used.add(normalized);
 return true;
}

export function ContactTemplate({ lang }: { lang: Lang }) {
 const text = t(lang);
 const contact = getContactContentSmart(lang);
 const hero = getContentBlockSmart(lang, "contact", "hero");

 const usedContactValues = new Set<string>();
 return (
  <>
   <section className="pageHero contactHero innerPageHero">
    <div className="rmShell">
     <p className="crumb">{text.home} / {text.contact}</p>
     <h1>{hero?.title || text.contactTitle}</h1>
     <p className="lead">{hero?.text || text.contactSubtitle}</p>
    </div>
   </section>

   <section className="rmSection contactModernSection">
    <div className="rmShell contactModernGrid">
     <div className="contactPrimaryCard">
      <span className="contactBadge">Revimed PLUS+</span>
      <h2>{text.contact}</h2>
      <p className="contactIntro">{text.contactSubtitle}</p>

      <div className="contactInfoList">
       {contact.fixed_phone && (
        <a href={`tel:${contact.fixed_phone.replaceAll(" ", "")}`}>
         <IconVisual src="https://img.icons8.com/color/96/phone.png" alt="phone" className="contactSmallIcon" />
         <div><b>Contact</b><strong>{contact.fixed_phone}</strong></div>
        </a>
       )}
       {contact.phone && contact.phone.replaceAll(" ", "") !== contact.fixed_phone.replaceAll(" ", "") && (
        <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>
         <IconVisual src="https://img.icons8.com/color/96/phone.png" alt="phone" className="contactSmallIcon" />
         <div><b>{text.contact}</b><strong>{contact.phone}</strong></div>
        </a>
       )}
       {contact.phone_alt && (
        <a href={`tel:${contact.phone_alt.replaceAll(" ", "")}`}>
         <IconVisual src="https://img.icons8.com/color/96/iphone.png" alt="phone" className="contactSmallIcon" />
         <div><b>Alt</b><strong>{contact.phone_alt}</strong></div>
        </a>
       )}
       {contact.email && (
        <a href={`mailto:${contact.email}`}>
         <IconVisual src="https://img.icons8.com/color/96/email.png" alt="email" className="contactSmallIcon" />
         <div><b>Email</b><strong>{contact.email}</strong></div>
        </a>
       )}
       {contact.address && (
        <div className="contactInfoStatic">
         <IconVisual src="https://img.icons8.com/color/96/marker.png" alt="address" className="contactSmallIcon" />
         <div><b>{text.contact}</b><strong>{contact.address}</strong></div>
        </div>
       )}
      </div>

      <div className="contactActionRow">
       <a className="blueBtn" href={`tel:${(contact.fixed_phone || contact.phone_alt).replaceAll(" ", "")}`}>{text.callNow}</a>
       <a className="softBtn" href={contact.map_link} target="_blank" rel="noopener noreferrer">{text.openMap}</a>
      </div>
     </div>

     <aside className="contactSidePanel">
      <div className="contactMiniCard">
       <h3>{text.workHours}</h3>
       <p>{contact.hours_week}</p>
       <p>{contact.hours_weekend}</p>
      </div>

      <div className="contactMiniCard">
       <h3>{text.transport}</h3>
       <div className="transportModern">
        <span><IconVisual src="https://img.icons8.com/color/96/bus.png" alt="bus" className="transportIcon" /> {contact.bus}</span>
        <span><IconVisual src="https://img.icons8.com/color/96/trolleybus.png" alt="trolleybus" className="transportIcon" /> {contact.trolleybus}</span>
        <span><IconVisual src="https://img.icons8.com/color/96/taxi.png" alt="transport" className="transportIcon" /> {contact.tram}</span>
       </div>
      </div>

      {(contact.image_one || contact.image_two) && (
       <div className="contactPhotoPair">
        {contact.image_one && contact.image_one !== "/images/6.jpg" && (
         <a href={contact.image_one} target="_blank" rel="noopener noreferrer">
          <img src={contact.image_one} alt="Revimed PLUS+" />
         </a>
        )}
        {contact.image_two && (
         <a href={contact.image_two} target="_blank" rel="noopener noreferrer">
          <img src={contact.image_two} alt="Revimed PLUS+ map" />
         </a>
        )}
       </div>
      )}
     </aside>
    </div>

    <div className="rmShell contactMapModern">
     <div className="mapHeader">
      <div>
       <span className="contactBadge">Map</span>
       <h2>{text.openMap}</h2>
      </div>
      <a className="softBtn" href={contact.map_link} target="_blank" rel="noopener noreferrer">Google Maps</a>
     </div>
     <iframe src={contact.map_embed} title="Revimed PLUS+ map" loading="lazy" allowFullScreen />
    </div>
   </section>
  </>
 );
}
