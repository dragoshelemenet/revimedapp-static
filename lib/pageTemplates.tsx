import { ContentSection, CardGrid, ListingCard, ReadingCard } from "@/components/ContentLayout";
import { getPrices, getContact, getGallery, getContentBlock } from "@/lib/publicContent";
import { JsonLd, absoluteUrl } from "@/lib/seo";

import PageHeading from "@/components/PageHeading";
import Link from "next/link";
import { youtubeVideos } from "@/lib/videos";
import { site } from "@/lib/site";
import { getStaticPublishedPosts, getStaticPostBySlug } from "@/lib/staticBlogPosts";
import { translateGalleryTitle } from "@/lib/galleryTranslate";
import { t, withLang, type Lang } from "@/lib/i18n";
import CurrencyConverter from "@/components/CurrencyConverter";
import PricesAccordion from "@/components/PricesAccordion";
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

function HomeTrustSection() {
 return (
  <section className="rmSection revimedHomeTrust">
   <div className="rmShell">
    <div className="revimedTrustGrid">
     <div className="revimedTrustText">
      <span className="revimedTrustBadge">Revimed PLUS+</span>
      <h2>Experiență medicală, tratament individual și acordul pacientului</h2>
      <p><b>Dr. Igor Revenco</b> are peste <b>35 de ani de experiență</b>, iar clinica <b>Revimed PLUS+</b> activează de peste <b>20 de ani</b> în Chișinău.</p>
      <p>La Revimed PLUS+, tratamentul se alege individual pentru fiecare pacient. Medicul discută simptomele, istoricul, preferințele, reacțiile anterioare la tratament și posibilitățile reale ale fiecărui caz.</p>
      <p>Dacă situația permite, pacientul poate opta pentru o abordare mai tradițională sau pentru metode mai blânde, cu direcție mai naturistă. Totul trebuie să fie sigur, explicat clar și făcut cu acordul pacientului.</p>
     </div>
     <div className="revimedTrustCards">
      <div><strong>35+ ani</strong><span>experiență medicală Dr. Igor Revenco</span></div>
      <div><strong>20+ ani</strong><span>experiență clinică Revimed PLUS+</span></div>
      <div><strong>Individual</strong><span>tratamentul se alege pentru fiecare pacient</span></div>
      <div><strong>Cu acord</strong><span>pacientul înțelege și acceptă planul</span></div>
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

   <HomeTrustSection />

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
 const posts = getStaticPublishedPosts(lang);

 return (
  <>
   <PageHeading>
    <div>
     <p className="crumb">{text.home} / {text.blog}</p>
     <h1>{text.blogTitle}</h1>
     <p className="lead">{text.blogSubtitle}</p>
    </div>
   </PageHeading>
   <ContentSection><CardGrid>
    {posts.map(post => <ListingCard key={post.id} href={withLang(`/blog/${post.slug}/`, lang)} title={post.title} description={post.excerpt} image={post.image} action={text.readMore.replace(/\s*→$/, "")} />)}
    {posts.length === 0 && <p>{text.noPosts}</p>}
   </CardGrid></ContentSection>
  </>
 );
}

export function BlogPostTemplate({ lang, slug }: { lang: Lang; slug: string }) {
 const text = t(lang);
 const post = getStaticPostBySlug(slug, lang as Lang);
 if (!post) return null;

 return (
  <>
   <JsonLd data={{
    "@context": "https://schema.org", "@type": "BlogPosting",
    headline: post.title, description: post.excerpt,
    mainEntityOfPage: absoluteUrl(withLang(`/blog/${post.slug}/`, lang)),
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
    <img src={post.image} alt={post.title} width={1200} height={675} loading="lazy" />
    <div data-blog-content>{renderBlogContent(post.content)}</div>
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
