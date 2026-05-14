import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceBySlug } from "@/lib/db";
import { site } from "@/lib/site";
import { isLang, t, withLang, type Lang } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string; slug: string }> };

export default async function ServiceLangPage({ params }: Props) {
  const { lang: raw, slug } = await params;
  if (!isLang(raw) || raw === "ro") notFound();

  const lang = raw as Lang;
  const text = t(lang);
  const service = getServiceBySlug(slug, lang);
  if (!service) notFound();

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
              {service.full_content.split("\\n").map((line, idx) => {
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
