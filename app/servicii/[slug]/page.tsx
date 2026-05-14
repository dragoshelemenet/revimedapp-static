import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getPublishedPrices } from "@/lib/db";
import { site } from "@/lib/site";
import Link from "next/link";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.short_desc,
    keywords: service.keywords,
    openGraph: {
      title: `${service.title} | ${site.shortName}`,
      description: service.short_desc,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.title }]
    }
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const allPrices = getPublishedPrices();
  const relatedPrices = allPrices.filter((p) => p.category.toLowerCase().includes(service.title.toLowerCase().split(" ")[0].toLowerCase()));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: service.title,
    description: service.short_desc,
    image: `${site.url}${service.image}`,
    provider: {
      "@type": "MedicalClinic",
      name: site.name,
      telephone: site.phone,
      address: site.address
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="pageHero">
        <div className="rmShell">
          <p className="crumb">Acasă / Servicii / {service.title}</p>
          <h1>{service.icon} {service.title}</h1>
          <p className="lead">{service.short_desc}</p>
          <Link className="blueBtn" href="/contact">Programează-te</Link>
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
            <h2>Contact rapid</h2>
            <p>{site.phone}</p>
            <p>{site.phone2}</p>
            <p>{site.address}</p>
            <Link className="blueBtn" href="/contact">Contact</Link>

            {relatedPrices.length > 0 && (
              <>
                <h2 style={{ marginTop: 28 }}>Prețuri</h2>
                {relatedPrices.slice(0, 6).map((p) => (
                  <div className="miniPrice" key={p.id}>
                    <b>{p.service}</b>
                    <span>{p.price}</span>
                  </div>
                ))}
              </>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
