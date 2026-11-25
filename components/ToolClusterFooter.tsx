import Link from "next/link";
import { withLang, type Lang } from "@/lib/i18n";
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

  return (
    <section className="rmSection" style={{ paddingTop: 0 }}>
      <div className="rmShell" style={{ maxWidth: "min(960px, 100%)", marginInline: "auto" }}>
        <article className="adminCard prose" data-glass-card>
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
  );
}
