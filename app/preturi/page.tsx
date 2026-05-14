import { getPublishedPrices } from "@/lib/db";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Prețuri",
  description: "Lista de prețuri Revimed PLUS+ pentru servicii medicale în Chișinău."
};

export default function Page() {
  const prices = getPublishedPrices();

  return (
    <>
      <section className="pageHero">
        <div className="rmShell">
          <p className="crumb">Acasă / Prețuri</p>
          <h1>Prețuri</h1>
          <p className="lead">Lista de prețuri pentru serviciile Revimed PLUS+.</p>
        </div>
      </section>

      <section className="rmSection">
        <div className="rmShell priceTable">
          {prices.map((p) => (
            <div className="priceRow" key={p.id}>
              <div>
                <h3>{p.service}</h3>
                <p>{p.note}</p>
              </div>
              <strong>{p.price}</strong>
            </div>
          ))}
          <div className="priceNote">
            Pentru programare: {site.phone} · {site.phone2}
          </div>
        </div>
      </section>
    </>
  );
}
