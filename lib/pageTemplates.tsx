import Link from "next/link";
import { youtubeVideos } from "@/lib/videos";
import { site } from "@/lib/site";
import { translatedTools } from "@/lib/appMeta";
import { getPublishedServicesSmart, getPublishedPricesSmart, getPublishedPostsSmart, getServiceBySlugSmart, getPostBySlugSmart } from "@/lib/db";
import { getContactContentSmart, getContentBlockSmart, getPublishedGalleryItemsSmart } from "@/lib/content";
import { t, withLang, type Lang } from "@/lib/i18n";
import CurrencyConverter from "@/components/CurrencyConverter";
import PricesAccordion from "@/components/PricesAccordion";
import ReviewCarousel from "@/components/ReviewCarousel";
import IconVisual from "@/components/IconVisual";
import HomeCTA from "@/components/HomeCTA";

export function HomeTemplate({ lang }: { lang: Lang }) {
  const text = t(lang);
  const services = getPublishedServicesSmart(lang).slice(0, 6);
  const appTools = translatedTools(lang);

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

      <section className="rmSection servicesBlock">
        <div className="rmShell">
          <h2 className="centerTitle">{text.services}</h2>
          <div className="serviceGrid">
            {services.map((service) => (
              <Link key={service.id} href={withLang(`/servicii/${service.slug}`, lang)} className="serviceTile">
                <IconVisual src={service.icon} alt={service.title} className="tileIconImg" />
                <h3>{service.title}</h3>
                <p>{service.short_desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="rmSection appBlock">
        <div className="rmShell">
          <h2 className="centerTitle">{text.tools}</h2>
          <div className="toolGrid">
            {appTools.map((tool) => (
              <Link href={withLang(tool.href, lang)} className="toolTile" key={tool.slug}>
                <span>{tool.tag}</span>
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
                <b>{text.readMore}</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HomeCTA />

      <section className="testimonialBand">
        <div className="rmShell">
          <h2>Reviews</h2>
          <ReviewCarousel />
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
      <section className="pageHero">
        <div className="rmShell">
          <p className="crumb">{text.home} / {text.about}</p>
          <h1>{hero?.title || text.aboutTitle}</h1>
          <p className="lead">{hero?.text || text.aboutText1}</p>
        </div>
      </section>
      <section className="rmSection">
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
  const hero = getContentBlockSmart(lang, "servicii", "hero");
  const services = getPublishedServicesSmart(lang);

  return (
    <>
      <section className="pageHero">
        <div className="rmShell">
          <p className="crumb">{text.home} / {text.services}</p>
          <h1>{hero?.title || text.services}</h1>
          <p className="lead">{hero?.text || text.noItems}</p>
        </div>
      </section>
      <section className="rmSection">
        <div className="rmShell serviceGrid">
          {services.map((service) => (
            <Link href={withLang(`/servicii/${service.slug}`, lang)} className="serviceTile" key={service.id}>
              <IconVisual src={service.icon} alt={service.title} className="tileIconImg" />
              <h3>{service.title}</h3>
              <p>{service.short_desc}</p>
            </Link>
          ))}
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
      <section className="pageHero">
        <div className="rmShell">
          <p className="crumb">{text.home} / {text.services} / {service.title}</p>
          <h1>{service.icon} {service.title}</h1>
          <p className="lead">{service.short_desc}</p>
          <Link className="blueBtn" href={withLang("/contact", lang)}>{text.appointment}</Link>
        </div>
      </section>
      <section className="rmSection">
        <div className="rmShell contentGrid">
          <article className="adminCard serviceArticle">
            <img src={service.image} alt={service.title} className="serviceHeroImg" />
            <div className="textContent">
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
  const hero = getContentBlockSmart(lang, "aplicatii", "hero");
  const appTools = translatedTools(lang);

  return (
    <>
      <section className="pageHero">
        <div className="rmShell">
          <p className="crumb">{text.home} / {text.apps}</p>
          <h1>{hero?.title || text.toolsTitle}</h1>
          <p className="lead">{hero?.text || text.toolsSubtitle}</p>
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
      <section className="pageHero pricesHero">
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
      <section className="pageHero galleryHero">
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
                <span>{image.title}</span>
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
  const posts = getPublishedPostsSmart(lang);

  return (
    <>
      <section className="pageHero">
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
  const post = getPostBySlugSmart(slug, lang);
  if (!post) return null;

  return (
    <>
      <section className="pageHero">
        <div className="rmShell">
          <p className="crumb">Blog / {post.title}</p>
          <h1>{post.title}</h1>
          <p className="lead">{post.excerpt}</p>
        </div>
      </section>
      <section className="rmSection">
        <article className="rmShell adminCard prose">
          <div className="postHeroImage" style={{ backgroundImage: `url(${post.image})` }} />
          <div dangerouslySetInnerHTML={{ __html: post.content.replaceAll("\n", "<br/>") }} />
        </article>
      </section>
    </>
  );
}

export function ContactTemplate({ lang }: { lang: Lang }) {
  const text = t(lang);
  const contact = getContactContentSmart(lang);
  const hero = getContentBlockSmart(lang, "contact", "hero");

  return (
    <>
      <section className="pageHero contactHero">
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
              <a href={`tel:${contact.fixed_phone.replaceAll(" ", "")}`}><IconVisual src="https://img.icons8.com/color/96/phone.png" alt="phone" className="contactSmallIcon" /><div><b>Fix</b><strong>{contact.fixed_phone}</strong></div></a>
              <a href={`tel:${contact.phone.replaceAll(" ", "")}`}><IconVisual src="https://img.icons8.com/color/96/phone.png" alt="phone" className="contactSmallIcon" /><div><b>{text.contact}</b><strong>{contact.phone}</strong></div></a>
              <a href={`tel:${contact.phone_alt.replaceAll(" ", "")}`}><IconVisual src="https://img.icons8.com/color/96/iphone.png" alt="phone" className="contactSmallIcon" /><div><b>Alt</b><strong>{contact.phone_alt}</strong></div></a>
              <a href={`mailto:${contact.email}`}><IconVisual src="https://img.icons8.com/color/96/email.png" alt="email" className="contactSmallIcon" /><div><b>Email</b><strong>{contact.email}</strong></div></a>
              <div className="contactInfoStatic"><IconVisual src="https://img.icons8.com/color/96/marker.png" alt="address" className="contactSmallIcon" /><div><b>{text.contact}</b><strong>{contact.address}</strong></div></div>
            </div>

            <div className="contactActionRow">
              <a className="blueBtn" href={`tel:${contact.phone.replaceAll(" ", "")}`}>{text.callNow}</a>
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

            <div className="contactPhotoPair">
              <a href={contact.image_one} target="_blank" rel="noopener noreferrer"><img src={contact.image_one} alt="Revimed PLUS+" /></a>
              <a href={contact.image_two} target="_blank" rel="noopener noreferrer"><img src={contact.image_two} alt="Revimed PLUS+ map" /></a>
            </div>
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
