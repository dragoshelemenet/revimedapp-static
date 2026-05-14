import Link from "next/link";
import { notFound } from "next/navigation";
import ReviewCarousel from "@/components/ReviewCarousel";
import { getPublishedServicesAdmin } from "@/lib/db";
import { tools } from "@/lib/site";
import { isLang, t, withLang, type Lang } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export default async function LangHomePage({ params }: Props) {
  const { lang: raw } = await params;
  if (!isLang(raw) || raw === "ro") notFound();

  const lang = raw as Lang;
  const text = t(lang);
  const services = getPublishedServicesAdmin(lang);

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

      <section className="rmSection servicesBlock">
        <div className="rmShell">
          <h2 className="centerTitle">{text.services}</h2>
          <div className="serviceGrid">
            {services.map((service) => (
              <Link key={service.id} href={withLang(`/servicii/${service.slug}`, lang)} className="serviceTile">
                <div className="tileIcon">{service.icon}</div>
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
            {tools.map((tool) => (
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

      <section className="testimonialBand">
        <div className="rmShell">
          <h2>Reviews</h2>
          <ReviewCarousel />
        </div>
      </section>
    </>
  );
}
