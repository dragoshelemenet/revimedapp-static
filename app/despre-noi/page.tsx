import { site } from "@/lib/site";

export const metadata = {
  title: "Despre noi",
  description: "Despre Centrul Medical Revimed PLUS+ din Chișinău."
};

export default function Page() {
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <p className="crumb">Acasă / Despre noi</p>
          <h1>Despre noi</h1>
          <p className="lead">Centru medical în Chișinău pentru consultații, reabilitare și terapii integrate.</p>
        </div>
      </section>
      <section className="section">
        <div className="container contentGrid">
          <div className="card prose">
            <h2>Centrul Medical Revimed PLUS+</h2>
            <p>{site.description}</p>
            <p>Structura centrului este orientată spre evaluare clară, recomandări practice și recuperare personalizată pentru pacient.</p>
            <p><b>Adresă:</b> {site.address}</p>
            <p><b>Telefon:</b> {site.phone} · {site.phone2}</p>
            <p><b>Program:</b> {site.hours}</p>
          </div>
          <div className="card sideBox">
            <h3>Programare</h3>
            <p>Pentru programare, sunați la numărul afișat sau folosiți pagina de contact.</p>
            <a className="btn" href={"tel:" + site.phone.replaceAll(" ", "")}>Sună acum</a>
          </div>
        </div>
      </section>
    </>
  );
}
