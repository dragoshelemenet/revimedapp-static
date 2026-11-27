import Link from "next/link";
import PageHeading from "./PageHeading";
import { ContentSection, ReadingCard, ContentNote } from "./ContentLayout";
import SmartCatalogGrid from "./SmartCatalogGrid";
import { JsonLd, breadcrumbJsonLd, collectionPageJsonLd, serviceJsonLd, medicalDeviceJsonLd } from "@/lib/seo";
import { getRelatedBlogPostsForPost, getRelatedClinicalPagesForPost } from "@/lib/topicClusterLinks";
import type { Lang } from "@/lib/i18n";

type Item = {
 slug: string;
 title: string;
 short: string;
 category: string;
 image?: string;
 imageAlt?: string;
 priceBadge?: string;
 highlights?: string[];
 sections: { title: string; body: string[] }[];
 faqs?: { q: string; a: string }[];
};
type Labels = { home: string; nav: string; title: string; subtitle: string; open: string; note: string; back: string };
type Props = { base: string; labels: Labels };

function getMoreLabels(base: string) {
 if (base.startsWith("/en")) return { more: "More +", less: "Show less" };
 if (base.startsWith("/ru")) return { more: "Показать ещё +", less: "Свернуть" };
 if (base.startsWith("/ua")) return { more: "Показати ще +", less: "Згорнути" };
 return { more: "Mai multe +", less: "Restrânge" };
}

export function CatalogList({base, labels, items}: Props & {items: Item[]}) {
 const homePath = base.split("/").slice(0, -1).join("/") || "/";
 const ui = getMoreLabels(base);
 const smartItems = items.map((item) => ({
  id: item.slug,
  href: `${base}/${item.slug}/`,
  title: item.title,
  description: item.short,
  badge: item.priceBadge ? `${item.category} · ${item.priceBadge}` : item.category,
  highlights: item.highlights,
  image: item.image,
  action: labels.open
 }));

 return <>
  <JsonLd data={breadcrumbJsonLd([
   { name: labels.home, path: homePath },
   { name: labels.nav, path: `${base}/` }
  ])} />
  <JsonLd data={collectionPageJsonLd({
   name: labels.title,
   description: labels.subtitle,
   path: `${base}/`,
   items: items.map((item) => ({ name: item.title, url: `${base}/${item.slug}/` }))
  })} />
  <PageHeading><div><p><Link href={homePath}>{labels.home}</Link> / {labels.nav}</p><h1>{labels.title}</h1><p>{labels.subtitle}</p></div></PageHeading>
  <ContentSection>
   <aside className="rm-citable-summary" style={{ marginBottom: 18 }}>
    <div className="rm-citable-summary-head">
     <span className="rm-citable-pill">{labels.nav} · Revimed PLUS+ Chișinău (Ciocana)</span>
     <span className="rm-citable-date">
      {base.startsWith("/en") ? "Updated: November 2026" : base.startsWith("/ru") ? "Обновлено: Ноябрь 2026" : base.startsWith("/ua") ? "Оновлено: Листопад 2026" : "Actualizat: Noiembrie 2026"}
     </span>
    </div>
    <p style={{ margin: 0 }}>
     {base.startsWith("/en")
      ? `Revimed PLUS+ Medical Center in Chișinău (Str. Mircea cel Bătrân 13/2, Ciocana) provides ${items.length} core medical directions led by Dr. Igor Revenco (35+ years experience, EANS member): neurology and neurosurgery consultations (500 MDL primary, 400 MDL follow-up), functional diagnostics (EEG 1600 MDL, REG RHEOTEST 500 MDL, AMP 1600 MDL), and physiotherapy rehabilitation (from 100 MDL / 30 min). Direct phone booking: 022 60 50 60.`
      : base.startsWith("/ru")
        ? `Медицинский центр Revimed PLUS+ в Кишинёве (Чеканы, ул. Мирча чел Бэтрын 13/2) объединяет ${items.length} профильных направлений под руководством д-ра Игоря Ревенко (35+ лет опыта, член EANS): консультации невролога и нейрохирурга (500 MDL первичная, 400 MDL повторная), функциональную диагностику (ЭЭГ 1600 MDL, РЭГ RHEOTEST 500 MDL, АМП 1600 MDL) и физиотерапию (от 100 MDL / 30 мин). Запись: 022 60 50 60.`
        : base.startsWith("/ua")
          ? `Медичний центр Revimed PLUS+ у Кишиневі (Чокана, вул. Мірча чел Бетрин 13/2) об’єднує ${items.length} профільних напрямів під керівництвом д-ра Ігоря Ревенка (35+ років досвіду, член EANS): консультації невролога та нейрохірурга (500 MDL первинна, 400 MDL повторна), функціональну діагностику (ЕЕГ 1600 MDL, РЕГ RHEOTEST 500 MDL, АМП 1600 MDL) та фізіотерапію (від 100 MDL / 30 хв). Запис: 022 60 50 60.`
          : `Centrul Medical Revimed PLUS+ din Chișinău (sectorul Ciocana, Str. Mircea cel Bătrân 13/2) reunește ${items.length} direcții clinice coordonate de Dr. Igor Revenco (35+ ani experiență, membru EANS): consultații neurologice și neurochirurgicale (500 MDL primară, 400 MDL repetată), diagnostic funcțional (EEG 1600 MDL, REG RHEOTEST 500 MDL, AMP 1600 MDL) și fizioterapie cu aparataj (100 MDL / 30 min). Programări: 022 60 50 60.`}
    </p>
   </aside>
   <SmartCatalogGrid
    items={smartItems}
    initialCount={items.length <= 6 ? 6 : 3}
    groupByCategory={items.length > 8}
    moreLabel={ui.more}
    lessLabel={ui.less}
    useInfoPopover
   />
  </ContentSection>
 </>;
}

function getDetailLinks(base: string) {
 if (base.startsWith("/en")) return { prefix: "/en", doctor: "Dr. Igor Revenco", prices: "Prices", contact: "Book appointment" };
 if (base.startsWith("/ru")) return { prefix: "/ru", doctor: "Д-р Игорь Ревенко", prices: "Цены", contact: "Записаться" };
 if (base.startsWith("/ua")) return { prefix: "/ua", doctor: "Д-р Ігор Ревенко", prices: "Ціни", contact: "Записатися" };
 return { prefix: "", doctor: "Dr. Igor Revenco", prices: "Prețuri", contact: "Programare & Contact" };
}

function getCatalogItemFee(slug: string, isEquipment: boolean, priceBadge: string | undefined, lang: Lang): string {
 if (slug === "aparat-amp") return "1600 MDL";
 if (slug === "rheotest") return "500 MDL";
 if (priceBadge) return priceBadge;
 if (isEquipment) {
  return lang === "ru" ? "100 MDL / 30 мин" : lang === "ua" ? "100 MDL / 30 хв" : "100 MDL / 30 min";
 }
 return "500 MDL";
}

function buildDynamicCitableSummary(item: Item, isEquipment: boolean, lang: Lang): string {
 const fee = getCatalogItemFee(item.slug, isEquipment, item.priceBadge, lang);
 const cleanShort = item.short.replace(/\.+$/, "");
 if (lang === "en") {
  return `${item.title} (${item.category}): ${cleanShort}. Available at Revimed PLUS+ Medical Center in Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2) under Dr. Igor Revenco (35+ years experience, EANS member). Indicative tariff: ${fee}; primary neurology or neurosurgery consultation: 500 MDL (follow-up: 400 MDL). Direct booking: 022 60 50 60.`;
 }
 if (lang === "ru") {
  return `${item.title} (${item.category}): ${cleanShort}. Доступно в медицинском центре Revimed PLUS+ в Кишинёве (Чеканы, ул. Мирча чел Бэтрын 13/2) под руководством д-ра Игоря Ревенко (35+ лет клинического опыта, член EANS). Ориентировочная стоимость: ${fee}; первичный приём невролога или нейрохирурга: 500 MDL (повторный: 400 MDL). Запись по телефону: 022 60 50 60.`;
 }
 if (lang === "ua") {
  return `${item.title} (${item.category}): ${cleanShort}. Доступно у медичному центрі Revimed PLUS+ у Кишиневі (Чокана, вул. Мірча чел Бетрин 13/2) під керівництвом д-ра Ігоря Ревенка (35+ років клінічного досвіду, член EANS). Орієнтовна вартість: ${fee}; первинна консультація невролога або нейрохірурга: 500 MDL (повторна: 400 MDL). Запис за телефоном: 022 60 50 60.`;
 }
 return `${item.title} (${item.category}): ${cleanShort}. Disponibil la Centrul Medical Revimed PLUS+ din Chișinău (sectorul Ciocana, Str. Mircea cel Bătrân 13/2), sub coordonarea Dr. Igor Revenco (35+ ani experiență clinică, membru EANS). Tarif orientativ: ${fee}; consultație primară neurolog sau neurochirurg: 500 MDL (repetată: 400 MDL). Programări telefonice: 022 60 50 60.`;
}

function buildFallbackEquipmentSections(item: Item, lang: Lang): { title: string; body: string[] }[] {
 const fee = getCatalogItemFee(item.slug, true, item.priceBadge, lang);
 if (lang === "en") {
  return [
   {
    title: "Clinical protocol and session duration at Revimed PLUS+",
    body: [
     `Procedures with ${item.title} (${item.category}) are performed in a quiet clinical room at Revimed PLUS+ (Chișinău, Ciocana) with parameters individually calibrated to patient comfort and clinical indication.`,
     `A typical session lasts 15 to 30 minutes (indicative fee: ${fee}), and a therapeutic course generally comprises 5 to 10 sessions combined with neurological follow-up.`
    ]
   },
   {
    title: "Medical safety and contraindication screening",
    body: [
     `Before starting ${item.title}, Dr. Igor Revenco reviews medical history, blood pressure, and any existing imaging or laboratory reports to ensure safety.`,
     "General physiotherapy precautions apply: implanted electronic pacemakers, acute febrile infections, active skin lesions at application sites, or individual intolerance require alternative protocols."
    ]
   }
  ];
 }
 if (lang === "ru") {
  return [
   {
    title: "Клинический протокол и длительность сеанса в Revimed PLUS+",
    body: [
     `Процедуры на аппарате ${item.title} (${item.category}) проводятся в спокойной обстановке кабинета Revimed PLUS+ (Кишинёв, Чеканы) с индивидуальным подбором параметров по переносимости и показаниям.`,
     `Стандартный сеанс длится от 15 до 30 минут (ориентировочный тариф: ${fee}), а рекомендуемый курс обычно включает 5–10 процедур под наблюдением врача.`
    ]
   },
   {
    title: "Медицинская безопасность и учёт противопоказаний",
    body: [
     `Перед назначением ${item.title} д-р Игорь Ревенко оценивает анамнез, артериальное давление и имеющиеся обследования пациента.`,
     "Учитываются общие противопоказания к аппаратной физиотерапии: наличие кардиостимулятора, острые инфекционные состояния, повреждения кожи в зоне наложения электродов или индивидуальная непереносимость."
    ]
   }
  ];
 }
 if (lang === "ua") {
  return [
   {
    title: "Клінічний протокол і тривалість сеансу в Revimed PLUS+",
    body: [
     `Процедури на апараті ${item.title} (${item.category}) проводяться у спокійній обстановці кабінету Revimed PLUS+ (Кишинів, Чокана) з індивідуальним підбором параметрів за переносимістю та показаннями.`,
     `Стандартний сеанс триває від 15 до 30 хвилин (орієнтовний тариф: ${fee}), а рекомендований курс зазвичай включає 5–10 процедур під наглядом лікаря.`
    ]
   },
   {
    title: "Медична безпека та врахування протипоказань",
    body: [
     `Перед призначенням ${item.title} д-р Ігор Ревенко оцінює анамнез, артеріальний тиск і наявні обстеження пацієнта.`,
     "Враховуються загальні протипоказання до апаратної фізіотерапії: наявність кардіостимулятора, гострі інфекційні стани, пошкодження шкіри в зоні електродів або індивідуальна непереносимість."
    ]
   }
  ];
 }
 return [
  {
   title: "Protocol clinic și durata ședinței la Revimed PLUS+",
   body: [
    `Procedurile cu ${item.title} (${item.category}) se desfășoară în condiții de confort și liniște la Centrul Medical Revimed PLUS+ (Chișinău, Ciocana), cu parametri calibrați individual în funcție de toleranță și obiectivul terapeutic.`,
    `O ședință durează între 15 și 30 de minute (tarif orientativ: ${fee}), iar un curs complet recomandat de medic include de regulă între 5 și 10 ședințe.`
   ]
  },
  {
   title: "Siguranță medicală și verificarea contraindicațiilor",
   body: [
    `Înainte de utilizarea ${item.title}, Dr. Igor Revenco evaluează istoricul medical, tensiunea arterială și investigațiile existente pentru a confirma indicația optimă.`,
    "Se verifică precauțiile standard în fizioterapie: stimulator cardiac implantat, stări febrile acute, leziuni cutanate în zona de aplicare sau intoleranță individuală la curent."
   ]
  }
 ];
}

function buildFallbackFaqs(item: Item, isEquipment: boolean, lang: Lang): { q: string; a: string }[] {
 const fee = getCatalogItemFee(item.slug, isEquipment, item.priceBadge, lang);
 if (lang === "en") {
  return [
   {
    q: `How much does ${item.title} cost at Revimed PLUS+ in Chișinău?`,
    a: `The indicative tariff for ${item.title} (${item.category}) is ${fee}. A primary consultation with Dr. Igor Revenco (neurologist and consultant neurosurgeon) costs 500 MDL (follow-up: 400 MDL).`
   },
   {
    q: `Do I need a medical consultation before starting ${item.title}?`,
    a: `Yes, a brief clinical assessment or existing medical referral ensures that ${item.title} is safely indicated for your symptoms and that any contraindications are excluded.`
   },
   {
    q: `How do I book an appointment for ${item.title}?`,
    a: "Call 022 60 50 60 or +373 79 422 908 (Monday to Friday, 09:00 - 15:00) at Revimed PLUS+, Str. Mircea cel Bătrân 13/2, Ciocana, Chișinău."
   }
  ];
 }
 if (lang === "ru") {
  return [
   {
    q: `Сколько стоит ${item.title} в клинике Revimed PLUS+ в Кишинёве?`,
    a: `Ориентировочная стоимость (${item.title}, категория: ${item.category}) составляет ${fee}. Первичная консультация д-ра Игоря Ревенко стоит 500 MDL (повторная: 400 MDL).`
   },
   {
    q: `Нужен ли осмотр врача перед процедурой на аппарате ${item.title}?`,
    a: `Да, предварительная оценка врача позволяет исключить противопоказания и подобрать оптимальную частоту, интенсивность и количество сеансов для ${item.title}.`
   },
   {
    q: `Как записаться на ${item.title} на Чеканах?`,
    a: "Позвоните по телефону 022 60 50 60 или +373 79 422 908 (Пн - Пт, 09:00 - 15:00). Адрес: Кишинёв, сектор Чеканы, ул. Мирча чел Бэтрын 13/2."
   }
  ];
 }
 if (lang === "ua") {
  return [
   {
    q: `Скільки коштує ${item.title} у клініці Revimed PLUS+ у Кишиневі?`,
    a: `Орієнтовна вартість (${item.title}, категорія: ${item.category}) становить ${fee}. Первинна консультація д-ра Ігоря Ревенка коштує 500 MDL (повторна: 400 MDL).`
   },
   {
    q: `Чи потрібен огляд лікаря перед процедурою ${item.title}?`,
    a: `Так, попередня оцінка лікаря дозволяє виключити протипоказання та підібрати оптимальні параметри й кількість сеансів для ${item.title}.`
   },
   {
    q: `Як записатися на ${item.title} у Кишиневі?`,
    a: "Зателефонуйте за номером 022 60 50 60 або +373 79 422 908 (Пн - Пт, 09:00 - 15:00). Адреса: Кишинів, сектор Чокана, вул. Мірча чел Бетрин 13/2."
   }
  ];
 }
 return [
  {
   q: `Cât costă ${item.title} la Centrul Medical Revimed PLUS+ din Chișinău?`,
   a: `Tariful orientativ pentru ${item.title} (${item.category}) este de ${fee}. Consultația primară la Dr. Igor Revenco (neurolog și neurochirurg consultant) costă 500 MDL (repetată: 400 MDL).`
  },
  {
   q: `Este necesară evaluarea medicului înainte de ${item.title}?`,
   a: `Da, evaluarea medicală permite excluderea contraindicațiilor și calibrarea exactă a parametrilor și numărului de ședințe pentru ${item.title} în funcție de simptomele dumneavoastră.`
  },
  {
   q: `Cum mă programez pentru ${item.title} în sectorul Ciocana?`,
   a: "Sunați la 022 60 50 60 sau +373 79 422 908 (Luni - Vineri, 09:00 - 15:00), Str. Mircea cel Bătrân 13/2, Chișinău (Ciocana)."
  }
 ];
}

export function CatalogDetail({base, labels, item}: Props & {item: Item}) {
 const homePath = base.split("/").slice(0, -1).join("/") || "/";
 const itemPath = `${base}/${item.slug}/`;
 const links = getDetailLinks(base);
 const lang: Lang = base.startsWith("/en") ? "en" : base.startsWith("/ru") ? "ru" : base.startsWith("/ua") ? "ua" : "ro";
 const isEquipment = base.includes("/utilaj");
 const allSections = isEquipment && item.sections.length < 3
  ? [...item.sections, ...buildFallbackEquipmentSections(item, lang)]
  : item.sections;
 const allFaqs = item.faqs && item.faqs.length > 0 ? item.faqs : buildFallbackFaqs(item, isEquipment, lang);
 const citableSummary = buildDynamicCitableSummary(item, isEquipment, lang);
 const matchedClinical = getRelatedClinicalPagesForPost(item.slug, item.title, item.short, lang, 6);
 const matchedBlogs = getRelatedBlogPostsForPost(item.slug, lang, 4, `${item.title} ${item.short}`);

 return <>
  <JsonLd data={breadcrumbJsonLd([
   { name: labels.home, path: homePath },
   { name: labels.nav, path: `${base}/` },
   { name: item.title, path: itemPath }
  ])} />
  <JsonLd data={isEquipment ? medicalDeviceJsonLd({
   name: item.title,
   description: item.short,
   path: itemPath,
   image: item.image
  }) : serviceJsonLd({
   name: item.title,
   description: item.short,
   path: itemPath,
   image: item.image
  })} />
  {allFaqs.length > 0 && (
   <JsonLd
    data={{
     "@context": "https://schema.org",
     "@type": "FAQPage",
     mainEntity: allFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
     }))
    }}
   />
  )}
  <PageHeading><div><p><Link href={`${base}/`}>{labels.nav}</Link> / {item.title}</p><h1>{item.title}</h1><p>{item.short}</p></div></PageHeading>
  <ContentSection narrow><ReadingCard>
   <div className="rm-trust-banner">
    <div className="rm-trust-banner-meta">
     <strong>Dr. Igor Revenco</strong> ·{" "}
     {lang === "ru"
      ? "Высшая категория · Член EANS · 35+ лет опыта · Пн - Пт 09:00 - 15:00 · Чеканы"
      : lang === "ua"
        ? "Вища категорія · Член EANS · 35+ років досвіду · Пн - Пт 09:00 - 15:00 · Чокана"
        : lang === "en"
          ? "Superior Category · EANS Member · 35+ Years Experience · Mon - Fri 09:00 - 15:00 · Ciocana"
          : "Categorie superioară · Membru EANS · 35+ ani · Luni - Vineri 09:00 - 15:00 · Ciocana"}
    </div>
    <div className="rm-trust-banner-actions">
     <a href="tel:022605060" className="btn btn-primary btn-sm">
      {lang === "ru" ? "Позвонить: 022 60 50 60" : lang === "ua" ? "Зателефонувати: 022 60 50 60" : lang === "en" ? "Call: 022 60 50 60" : "Sună: 022 60 50 60"}
     </a>
     <a
      href="https://wa.me/37379422908"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-sm btn-whatsapp-soft"
     >
      WhatsApp
     </a>
     <Link href={`${links.prefix}/preturi/`} className="btn btn-outline-primary btn-sm">
      {lang === "ru" ? "Цены (96 услуг)" : lang === "ua" ? "Ціни (96 послуг)" : lang === "en" ? "Prices (96)" : "Prețuri (96)"}
     </Link>
     <Link
      href={`${links.prefix}/aplicatii/teste-si-instrumente/screening-neurologic/`}
      className="btn btn-outline-primary btn-sm"
     >
      {lang === "ru" ? "Тест 2 мин →" : lang === "ua" ? "Тест 2 хв →" : lang === "en" ? "2-Min Test →" : "Test 2 min →"}
     </Link>
    </div>
   </div>
   <aside className="rm-citable-summary">
    <div className="rm-citable-summary-head">
     <span className="rm-citable-pill">{item.category} · Revimed PLUS+ Chișinău</span>
     <span className="rm-citable-date">
      {lang === "en"
       ? "Updated: November 2026"
       : lang === "ru"
         ? "Обновлено: Ноябрь 2026"
         : lang === "ua"
           ? "Оновлено: Листопад 2026"
           : "Actualizat: Noiembrie 2026"}
     </span>
    </div>
    <p style={{ margin: 0 }}>{citableSummary}</p>
   </aside>
   {item.image && (
    <figure className="rm-equip-hero-figure" data-glass-card>
     <img src={item.image} alt={item.imageAlt || item.title} width={960} height={720} loading="eager" decoding="async" />
     <figcaption>{item.imageAlt || item.title}</figcaption>
    </figure>
   )}
   {allSections.map(section=><section key={section.title}><h2>{section.title}</h2>{section.body.length>1 ? <ul>{section.body.map((line,index)=><li key={index}>{line}</li>)}</ul> : <p>{section.body[0]}</p>}</section>)}
   {allFaqs.length > 0 && (
    <section style={{ marginTop: 22 }}>
     <h2>{lang === "en" ? "Frequently asked questions" : lang === "ru" ? "Частые вопросы пациентов" : lang === "ua" ? "Часті запитання пацієнтів" : "Întrebări frecvente ale pacienților"}</h2>
     {allFaqs.map((f) => (
      <details key={f.q} style={{ marginBottom: 10, padding: "12px 14px", borderRadius: 14, background: "rgba(240, 248, 255, 0.72)", border: "1px solid rgba(11, 143, 216, 0.16)" }}>
       <summary style={{ fontWeight: 700, color: "#08234a", cursor: "pointer" }}>{f.q}</summary>
       <p style={{ margin: "8px 0 0", color: "#334e68" }}>{f.a}</p>
      </details>
     ))}
    </section>
   )}
   <ContentNote>{labels.note}</ContentNote>
   {matchedBlogs.length > 0 && (
    <aside className="rm-citable-summary" style={{ marginTop: 18, marginBottom: 14 }}>
     <div className="rm-citable-summary-head">
      <span className="rm-citable-pill">
       {lang === "ru"
        ? "Клинические статьи и руководства по теме"
        : lang === "ua"
          ? "Клінічні статті та посібники за темою"
          : lang === "en"
            ? "Related Clinical Guides & Medical Articles"
            : "Ghiduri clinice și articole medicale pe această temă"}
      </span>
     </div>
     <ul style={{ margin: "8px 0 0", paddingLeft: 18 }}>
      {matchedBlogs.map((bg) => (
       <li key={bg.slug} style={{ marginBottom: 6, fontSize: "0.93rem", lineHeight: 1.5 }}>
        <Link href={bg.href} style={{ fontWeight: 600, color: "#075f9e" }}>
         {bg.title}
        </Link>
       </li>
      ))}
     </ul>
    </aside>
   )}
   <nav aria-label="Related clinic pages" style={{ display: "flex", flexWrap: "wrap", gap: "10px", margin: "18px 0 10px" }}>
    <Link href={`${links.prefix}/dr-igor-revenco/`} className="btn btn-outline-primary btn-sm">{links.doctor}</Link>
    {matchedClinical.map((cp) => (
     <Link key={cp.href} href={cp.href} className="btn btn-outline-primary btn-sm">
      {cp.label}
     </Link>
    ))}
    <Link href={`${links.prefix}/preturi/`} className="btn btn-outline-primary btn-sm">{links.prices}</Link>
    <Link href={`${links.prefix}/contact/`} className="btn btn-primary btn-sm">{links.contact}</Link>
   </nav>
   <Link href={`${base}/`} className="rm-back-link" aria-label={labels.back}>←</Link>
  </ReadingCard></ContentSection>
 </>;
}
