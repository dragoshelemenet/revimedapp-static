import Link from "next/link";
import { services, site, tools } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container heroInner">
          <div>
            <span className="eyebrow">Centru medical în Chișinău</span>
            <h1>Sănătatea ta, organizată mai clar.</h1>
            <p className="lead">
              Consultații medicale, reabilitare, fizioterapie și instrumente digitale pentru pacienți într-o structură rapidă, curată și ușor de găsit pe Google.
            </p>
            <div className="actions">
              <Link className="btn" href="/contact">Programează-te</Link>
              <Link className="btn secondary" href="/aplicatii/teste-si-instrumente">Teste și Instrumente</Link>
            </div>
            <div className="stats">
              <div><b>6+</b><span>servicii principale</span></div>
              <div><b>SEO</b><span>pagini dedicate</span></div>
              <div><b>Blog</b><span>din panou admin</span></div>
            </div>
          </div>

          <div className="glassCard">
            <h2>Revimed PLUS+</h2>
            <p>Neurologie, neurochirurgie, recuperare medicală, diagnostic funcțional și terapii integrate.</p>
            <ul className="cleanList">
              <li>Consultații specializate</li>
              <li>Reabilitare personalizată</li>
              <li>Instrumente digitale pentru pacienți</li>
              <li>Articole medicale publicabile din admin</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <div className="visualDoctor"></div>
          <div>
            <span className="eyebrow">Despre noi</span>
            <h2>Centru medical modern, cu pagini clare pentru fiecare serviciu.</h2>
            <p className="muted">
              Site-ul este structurat pentru pacienți și motoare de căutare: fiecare serviciu are pagină proprie, fiecare instrument are descriere proprie, iar blogul creează conținut indexabil constant.
            </p>
            <Link className="btn" href="/despre-noi">Află detalii</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Servicii</span>
          <h2>Direcții medicale</h2>
          <div className="grid3">
            {services.map((service) => (
              <Link key={service.slug} href={`/servicii/${service.slug}`} className="card serviceCard">
                <span className="icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <span className="eyebrow">Aplicații</span>
          <h2>Teste și instrumente</h2>
          <div className="grid3">
            {tools.map((tool) => (
              <Link key={tool.slug} href={tool.href} className="card toolCard">
                <span className="tag">{tool.tag}</span>
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
                <b>Deschide →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section contactBand">
        <div className="container split">
          <div>
            <span className="eyebrow light">Contact</span>
            <h2>Programează o consultație</h2>
            <p>{site.address}</p>
            <p>{site.phone} · {site.phone2}</p>
          </div>
          <Link className="btn secondary" href="/contact">Contactează-ne</Link>
        </div>
      </section>
    </>
  );
}
