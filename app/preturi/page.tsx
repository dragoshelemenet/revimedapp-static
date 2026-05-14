import { site, services } from "@/lib/site";

export const metadata = {
  title: "Prețuri",
  description: "Prețuri pentru servicii medicale Revimed PLUS+."
};

export default function Page() {
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <p className="crumb">Acasă / Prețuri</p>
          <h1>Prețuri</h1>
          <p className="lead">Pentru prețuri exacte și programări, contactați centrul medical.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid3">
          {services.map((service) => (
            <div className="card serviceCard" key={service.slug}>
              <span className="icon">{service.icon}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <p><b>Preț:</b> la solicitare</p>
            </div>
          ))}
        </div>
        <div className="container card" style={{ marginTop: 24 }}>
          <h2>Contact</h2>
          <p>{site.phone} · {site.phone2}</p>
          <p>{site.address}</p>
        </div>
      </section>
    </>
  );
}
