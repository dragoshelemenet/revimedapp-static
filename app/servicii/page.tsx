import Link from "next/link";
import { getPublishedServicesAdmin } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Servicii medicale",
  description: "Servicii Revimed PLUS+: neurologie, neurochirurgie, fizioterapie, reabilitare medicală, diagnostic funcțional, terapie balneară și electroterapie."
};

export default function ServicesPage() {
  const services = getPublishedServicesAdmin();

  return (
    <>
      <section className="pageHero">
        <div className="rmShell">
          <p className="crumb">Acasă / Servicii</p>
          <h1>Servicii medicale</h1>
          <p className="lead">Consultații, diagnostic, terapii și reabilitare organizate clar.</p>
        </div>
      </section>

      <section className="rmSection">
        <div className="rmShell serviceGrid">
          {services.map((service) => (
            <Link href={`/servicii/${service.slug}`} className="serviceTile" key={service.id}>
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
