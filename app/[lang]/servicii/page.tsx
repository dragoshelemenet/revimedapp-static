import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedServicesAdmin } from "@/lib/db";
import { isLang, t, withLang, type Lang } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export default async function ServicesLangPage({ params }: Props) {
  const { lang: raw } = await params;
  if (!isLang(raw) || raw === "ro") notFound();

  const lang = raw as Lang;
  const text = t(lang);
  const services = getPublishedServicesAdmin(lang);

  return (
    <>
      <section className="pageHero">
        <div className="rmShell">
          <p className="crumb">{text.home} / {text.services}</p>
          <h1>{text.services}</h1>
          <p className="lead">{text.languageVersion}: {raw.toUpperCase()}</p>
        </div>
      </section>

      <section className="rmSection">
        <div className="rmShell serviceGrid">
          {services.map((service) => (
            <Link href={withLang(`/servicii/${service.slug}`, lang)} className="serviceTile" key={service.id}>
              <div className="tileIcon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.short_desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
