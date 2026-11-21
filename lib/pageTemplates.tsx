import { ContentSection, ReadingCard } from "@/components/ContentLayout";
import { getPrices, getContact, getGallery, getContentBlock } from "@/lib/publicContent";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/seo";
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
 const hero = getContentBlock(lang, "despre-noi", "hero");

 return (
  <>
   <PageHeading>
    <div>
     <p className="crumb">{text.home} / {text.about}</p>
     <h1>{lang === "ro" ? (hero?.title || text.aboutTitle) : text.aboutTitle}</h1>
     <p className="lead">{lang === "ro" ? (hero?.text || text.aboutText1) : text.aboutText1}</p>
    </div>
   </PageHeading>
   <section className="rmSection aboutPageSection">
    <div className="rmShell aboutGrid rm-about-motion-grid">
     <DoctorMotionCard lang={lang} />
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

export function PricesTemplate({ lang }: { lang: Lang }) {
 const text = t(lang);
 const prices = getPrices(lang);
 const groups = Array.from(new Set(prices.map((p) => p.category)));

 return (
  <>
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
   </section>
  </>
 );
}

export function GalleryTemplate({ lang }: { lang: Lang }) {
 const text = t(lang);
 const galleryImages = getGallery(lang);

 return (
  <>
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
     <GalleryLightbox
      items={galleryImages.map((image: any) => {
       const translated = translateGalleryTitle(lang, image.title, image.image);
       return {
        id: image.id,
        src: toWebpSrc(image.image),
        title: translated,
        alt: image.alt || translated
       };
      })}
     />
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
    image: post.image.startsWith("http") ? post.image : absoluteUrl(post.image),
    publisher: { "@type": "Organization", name: site.name, url: site.url }
   }} />
   <PageHeading>
    <div>
     <p className="crumb">{text.blog} / {post.title}</p>
     <h1>{post.title}</h1>
     <p className="lead">{post.excerpt}</p>
    </div>
   </PageHeading>
   <ContentSection narrow><ReadingCard>
    <img src={toWebpSrc(post.image)} alt={post.title} width={1200} height={675} loading="lazy" decoding="async" />
    <div data-blog-content>{renderBlogContent(post.content)}</div>
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

 return (
  <>
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
       <div className="transportModern">
        <span><IconVisual src="https://img.icons8.com/color/96/bus.png" alt="bus" className="transportIcon" /> {contact.bus}</span>
        <span><IconVisual src="https://img.icons8.com/color/96/trolleybus.png" alt="trolleybus" className="transportIcon" /> {contact.trolleybus}</span>
        <span><IconVisual src="https://img.icons8.com/color/96/taxi.png" alt="transport" className="transportIcon" /> {contact.tram}</span>
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
   </section>
  </>
 );
}
