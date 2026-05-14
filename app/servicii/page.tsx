import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicii medicale",
  description: "Servicii Revimed PLUS+: neurologie, neurochirurgie, fizioterapie, reabilitare medicală, diagnostic funcțional, Bemer și electrostimulare în Chișinău."
};

export default function ServicesPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <p className="crumb">Acasă / Servicii</p>
          <h1>Servicii medicale</h1>
          <p className="lead">Pagini separate pentru fiecare serviciu, cu structură clară și conținut util.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid3">
          {services.map((service) => (
            <Link key={service.slug} className="card serviceCard" href={`/servicii/${service.slug}`}>
              <span className="icon">{service.icon}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
