import Link from "next/link";
import { withLang, type Lang } from "@/lib/i18n";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, siteUrl } from "@/lib/seo";
import { getRelatedBlogPostsForPost, getRelatedClinicalPagesForPost } from "@/lib/topicClusterLinks";

type ToolClusterFooterProps = {
  slug: string;
  lang: Lang;
  title: string;
  description: string;
};

const headings: Record<Lang, { guides: string; clinics: string; doctor: string; neurology: string; prices: string; contact: string }> = {
  ro: {
    guides: "Ghiduri clinice și articole utile pe această temă",
    clinics: "Consultații și proceduri recomandate la Revimed PLUS+",
    doctor: "Dr. Igor Revenco",
    neurology: "Consultații neurologice",
    prices: "Prețuri",
    contact: "Programare & Contact"
  },
  en: {
    guides: "Related Clinical Guides & Medical Articles",
    clinics: "Recommended Consultations & Procedures at Revimed PLUS+",
    doctor: "Dr. Igor Revenco",
    neurology: "Neurology",
    prices: "Prices",
    contact: "Book Appointment"
  },
  ru: {
    guides: "Полезные клинические статьи и руководства по теме",
    clinics: "Рекомендуемые консультации и процедуры в Revimed PLUS+",
    doctor: "Д-р Игорь Ревенко",
    neurology: "Невролог Кишинёв",
    prices: "Цены",
    contact: "Записаться на приём"
  },
  ua: {
    guides: "Корисні клінічні статті та посібники за темою",
    clinics: "Рекомендовані консультації та процедури в Revimed PLUS+",
    doctor: "Д-р Ігор Ревенко",
    neurology: "Невролог Кишинів",
    prices: "Ціни",
    contact: "Записатися на прийом"
  }
};

export default function ToolClusterFooter({ slug, lang, title, description }: ToolClusterFooterProps) {
  const copy = headings[lang] || headings.ro;
  const matchedClinical = getRelatedClinicalPagesForPost(slug, title, description, lang, 6);
  const matchedBlogs = getRelatedBlogPostsForPost(slug, lang, 4, `${title} ${description}`);
  const prefix = lang === "ro" ? "" : `/${lang}`;
  const homePath = prefix || "/";
  const appsPath = `${prefix}/aplicatii/`;
  const toolPath = `${prefix}/aplicatii/teste-si-instrumente/${slug}/`;
  const homeLabel = lang === "ru" ? "Главная" : lang === "ua" ? "Головна" : lang === "en" ? "Home" : "Acasă";
  const appsLabel = lang === "ru" ? "Приложения" : lang === "ua" ? "Додатки" : lang === "en" ? "Apps" : "Aplicații";

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: homeLabel, path: homePath },
          { name: appsLabel, path: appsPath },
          { name: title, path: toolPath }
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "@id": `${absoluteUrl(toolPath)}#webapp`,
          name: title,
          description,
          url: absoluteUrl(toolPath),
          inLanguage: lang === "ua" ? "uk" : lang,
          applicationCategory: "HealthApplication",
          operatingSystem: "Any",
          isAccessibleForFree: true,
          isPartOf: { "@id": `${siteUrl}/#website` },
          provider: { "@id": `${siteUrl}/#medical-clinic` },
          author: { "@id": `${siteUrl}/dr-igor-revenco/#physician` },
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "MDL",
            availability: "https://schema.org/InStock"
          }
        }}
      />
      <section className="rmSection" style={{ paddingTop: 0 }}>
        <div className="rmShell" style={{ maxWidth: "min(960px, 100%)", marginInline: "auto" }}>
          <article className="adminCard prose" data-glass-card>
            <aside className="rm-citable-summary" style={{ marginBottom: 18 }}>
              <div className="rm-citable-summary-head">
                <span className="rm-citable-pill">{title} · Revimed PLUS+ Chișinău</span>
                <span className="rm-citable-date">
                  {lang === "en" ? "Free Clinical Tool" : lang === "ru" ? "Бесплатный онлайн-инструмент" : lang === "ua" ? "Безкоштовний онлайн-інструмент" : "Instrument clinic gratuit"}
                </span>
              </div>
              <p style={{ margin: 0 }}>
                {lang === "en"
                  ? `${title}: ${description} Designed for patients of Revimed PLUS+ Medical Center in Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2) under Dr. Igor Revenco (35+ years experience, EANS member). Primary neurology or neurosurgery consultation: 500 MDL (follow-up: 400 MDL); physiotherapy procedures: 100 MDL / 30 min. Phone: 022 60 50 60.`
                  : lang === "ru"
                    ? `${title}: ${description} Разработано для пациентов медицинского центра Revimed PLUS+ в Кишинёве (Чеканы, ул. Мирча чел Бэтрын 13/2) под руководством д-ра Игоря Ревенко (35+ лет опыта, член EANS). Первичный приём невролога или нейрохирурга: 500 MDL (повторный: 400 MDL); физиопроцедуры: 100 MDL / 30 мин. Запись: 022 60 50 60.`
                    : lang === "ua"
                      ? `${title}: ${description} Розроблено для пацієнтів медичного центру Revimed PLUS+ у Кишиневі (Чокана, вул. Мірча чел Бетрин 13/2) під керівництвом д-ра Ігоря Ревенка (35+ років досвіду, член EANS). Первинний прийом невролога або нейрохірурга: 500 MDL (повторний: 400 MDL); фізіопроцедури: 100 MDL / 30 хв. Запис: 022 60 50 60.`
                      : `${title}: ${description} Instrument digital creat pentru pacienții Centrului Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), sub coordonarea Dr. Igor Revenco (35+ ani experiență, membru EANS). Consultație primară neurolog sau neurochirurg: 500 MDL (repetată: 400 MDL); proceduri fizioterapie: 100 MDL / 30 min. Programări: 022 60 50 60.`}
              </p>
            </aside>
            <h2 style={{ marginTop: 0 }}>{copy.guides}</h2>
          {matchedBlogs.length > 0 && (
            <ul style={{ marginTop: 10, marginBottom: 16, paddingLeft: 18 }}>
              {matchedBlogs.map((bg) => (
                <li key={bg.slug} style={{ marginBottom: 6 }}>
                  <Link href={bg.href} style={{ fontWeight: 600, color: "#075f9e" }}>
                    {bg.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <h3 style={{ fontSize: "1rem", margin: "0 0 10px" }}>{copy.clinics}</h3>
          <div className="rm-quick-links-bar">
            <Link href={withLang("/dr-igor-revenco/", lang)} className="btn btn-outline-primary btn-sm">
              {copy.doctor}
            </Link>
            {matchedClinical.map((cp) => (
              <Link key={cp.href} href={cp.href} className="btn btn-outline-primary btn-sm">
                {cp.label}
              </Link>
            ))}
            <Link href={withLang("/servicii/consultatii-neurologice/", lang)} className="btn btn-outline-primary btn-sm">
              {copy.neurology}
            </Link>
            <Link href={withLang("/preturi/", lang)} className="btn btn-outline-primary btn-sm">
              {copy.prices}
            </Link>
            <Link href={withLang("/contact/", lang)} className="btn btn-primary btn-sm">
              {copy.contact}
            </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
