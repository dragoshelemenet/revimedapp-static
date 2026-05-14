import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Contact Revimed PLUS+ Chișinău, telefon, adresă și program."
};

export default function Page() {
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <p className="crumb">Acasă / Contact</p>
          <h1>Contact</h1>
          <p className="lead">Programează o consultație la Centrul Medical Revimed PLUS+.</p>
        </div>
      </section>
      <section className="section">
        <div className="container contentGrid">
          <div className="card prose">
            <h2>Date de contact</h2>
            <p><b>Adresă:</b> {site.address}</p>
            <p><b>Telefon:</b> {site.phone} · {site.phone2}</p>
            <p><b>Email:</b> {site.email}</p>
            <p><b>Program:</b> {site.hours}</p>
            <a className="btn" href={"tel:" + site.phone.replaceAll(" ", "")}>Sună acum</a>
          </div>
          <div className="card sideBox fixedMapCard">
            <h3>Hartă</h3>
            <p>Str. Mircea cel Bătrân Nr. 18/1, Chișinău, Ciocana</p>
            <a className="btn secondary" href="https://www.google.com/maps/search/?api=1&query=Centrul%20Medical%20Revimed%20PLUS%20Chisinau">Deschide harta</a>
          </div>
        </div>
      </section>
    </>
  );
}
