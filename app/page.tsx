import Link from "next/link";
import ReviewCarousel from "@/components/ReviewCarousel";
import { youtubeVideos } from "@/lib/videos";
import { site, tools } from "@/lib/site";
import { getPublishedServicesAdmin } from "@/lib/db";


export const dynamic = "force-dynamic";

export default function HomePage() {
  const services = getPublishedServicesAdmin();

  return (
    <>
      <section className="homeHero">
        <div className="heroOverlay">
          <div className="rmShell heroCenter">
            <h1>Centru Medical Revimed PLUS+</h1>
            <p>Sănătatea ta, prioritatea noastră</p>
            <Link href="/servicii" className="blueBtn">SERVICIILE NOASTRE</Link>
          </div>
        </div>
      </section>

      <section className="rmSection aboutBlock">
        <div className="rmShell aboutGrid">
          <div className="doctorVisual">
            <img src="/images/about-us.jpg" alt="Medic Revimed PLUS+" />
            <span className="floatIcon i1">🩺</span>
            <span className="floatIcon i2">➕</span>
            <span className="floatIcon i3">🔍</span>
            <span className="floatIcon i4">👤</span>
          </div>
          <div>
            <h2>Despre Noi</h2>
            <p>
              Centru Medical Revimed PLUS+ este o unitate medicală orientată spre sănătate, recuperare și îngrijire responsabilă.
            </p>
            <p>
              Specialistul în afecțiunile sistemului nervos, reabilitare și terapii funcționale oferă pacienților un parcurs medical clar, calm și bine organizat.
            </p>
            <Link className="softBtn" href="/despre-noi">Află detalii</Link>
          </div>
        </div>
      </section>

      <section className="rmSection servicesBlock">
        <div className="rmShell">
          <h2 className="centerTitle">Serviciile Noastre</h2>
          <div className="serviceGrid">
            {services.map((service) => (
              <Link key={service.slug} href={`/servicii/${service.slug}`} className="serviceTile">
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
          <h2 className="centerTitle">Aplicații Medicale</h2>
          <div className="toolGrid">
            {tools.map((tool) => (
              <Link href={tool.href} className="toolTile" key={tool.slug}>
                <span>{tool.tag}</span>
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
                <b>Deschide →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <section className="rmSection">
        <div className="rmShell contactGrid">
          <div>
            <h2>Contactați-ne</h2>
            <p><b>For:</b> {site.phone}</p>
            <p><b>Telefon:</b> {site.phone2}</p>
            <p><b>Email:</b> {site.email}</p>
            <p><b>Adress:</b> {site.address}</p>
            <p><b>Program de lucru:</b><br />{site.hours}</p>
          </div>
          <div className="mapBox">
            <iframe title="Revimed map" src="https://www.google.com/maps?q=Str.%20Mircea%20cel%20B%C4%83tr%C3%A2n%2018%2F1%20Chi%C8%99in%C4%83u&output=embed"></iframe>
          </div>
        </div>
      </section>

      <section className="testimonialBand">
        <div className="rmShell">
          <h2>Ce Spun Pacienții Noștri</h2>
          <ReviewCarousel />
        </div>
      </section>

    </>
  );
}
