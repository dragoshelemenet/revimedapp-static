import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, site } from "@/lib/site";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    openGraph: {
      title: `${service.title} | ${site.shortName}`,
      description: service.description,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.title }]
    }
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.description,
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
        <div className="container">
          <p className="crumb">Acasă / Servicii / {service.title}</p>
          <h1>{service.title}</h1>
          <p className="lead">{service.description}</p>
          <Link className="btn" href="/contact">Programează-te</Link>
        </div>
      </section>

      <section className="section">
        <div className="container contentGrid">
          <article className="card prose">
            <h2>Când poate fi util acest serviciu?</h2>
            <p>{service.description}</p>
            <h2>Ce primește pacientul?</h2>
            <ul>
              <li>Evaluare orientată pe simptome și istoricul pacientului.</li>
              <li>Recomandări clare pentru pașii următori.</li>
              <li>Plan de recuperare sau investigații, când este necesar.</li>
              <li>Explicații simple, fără limbaj inutil complicat.</li>
            </ul>
            <h2>Întrebări frecvente</h2>
            <h3>Este necesară programarea?</h3>
            <p>Da, programarea ajută la organizarea consultației și reducerea timpului de așteptare.</p>
            <h3>Pot veni cu investigații anterioare?</h3>
            <p>Da, este recomandat să aduceți analize, imagini, concluzii medicale sau tratamente deja urmate.</p>
          </article>

          <aside className="card sideBox">
            <h3>Contact rapid</h3>
            <p>{site.phone}</p>
            <p>{site.address}</p>
            <Link className="btn" href="/contact">Contact</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
