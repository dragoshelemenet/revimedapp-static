import { getPublishedPrices } from "@/lib/db";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Tabel de Prețuri",
  description: "Lista completă de prețuri Revimed PLUS+ pentru consultații neurologice, neurochirurgie, fizioterapie, diagnostic funcțional, terapie balneară și electroterapie."
};

export default function PricesPage() {
  const prices = getPublishedPrices();
  const groups = Array.from(new Set(prices.map((p) => p.category)));

  return (
    <>
      <section className="pageHero">
        <div className="rmShell">
          <p className="crumb">Acasă / Prețuri</p>
          <h1>Tabel de Prețuri</h1>
          <p className="lead">Prețurile sunt afișate din panoul de administrare și pot fi modificate oricând.</p>
        </div>
      </section>

      <section className="rmSection">
        <div className="rmShell fullPriceTable">
          {groups.map((group) => (
            <div className="priceGroup" key={group}>
              <h2>{group}</h2>
              <div className="priceRows">
                {prices.filter((p) => p.category === group).map((p) => (
                  <div className="priceRow" key={p.id}>
                    <div>
                      <h3>{p.service}</h3>
                      {p.note && <p>{p.note}</p>}
                    </div>
                    <strong>{p.price}</strong>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="priceNote">
            Pentru confirmarea prețului și programare: {site.phone} · {site.phone2}
          </div>
        </div>
      </section>
    </>
  );
}
