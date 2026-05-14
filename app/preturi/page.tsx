import { getPublishedPrices } from "@/lib/db";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Prețuri",
  description:
    "Lista de prețuri Revimed PLUS+ pentru consultații neurologice, neurochirurgie, fizioterapie, diagnostic funcțional, terapie balneară și electroterapie."
};

export default function PricesPage() {
  const prices = getPublishedPrices();
  const groups = Array.from(new Set(prices.map((p) => p.category)));

  return (
    <>
      <section className="pageHero pricesHero">
        <div className="rmShell">
          <p className="crumb">Acasă / Prețuri</p>
          <h1>Prețuri Revimed PLUS+</h1>
          <p className="lead">
            Alege categoria și verifică rapid serviciul. Pentru confirmare și programare, contactează centrul.
          </p>
        </div>
      </section>

      <section className="rmSection pricesCleanSection">
        <div className="rmShell pricesLayout">
          <aside className="priceCategoryMenu">
            <h2>Categorii</h2>
            {groups.map((group) => (
              <a href={`#${group.toLowerCase().replaceAll(" ", "-").replaceAll("ă", "a").replaceAll("ț", "t").replaceAll("ș", "s")}`} key={group}>
                {group}
              </a>
            ))}
            <div className="priceContactBox">
              <b>Programare</b>
              <span>{site.phone}</span>
              <span>{site.phone2}</span>
            </div>
          </aside>

          <div className="pricesContent">
            {groups.map((group) => {
              const id = group.toLowerCase().replaceAll(" ", "-").replaceAll("ă", "a").replaceAll("ț", "t").replaceAll("ș", "s");
              const rows = prices.filter((p) => p.category === group);

              return (
                <section className="priceGroupClean" id={id} key={group}>
                  <h2>{group}</h2>

                  <div className="priceListClean">
                    {rows.map((p) => (
                      <article className="priceItemClean" key={p.id}>
                        <div>
                          <h3>{p.service}</h3>
                          {p.note && <p>{p.note}</p>}
                        </div>
                        <strong>{p.price}</strong>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}

            <div className="priceDisclaimer">
              Prețurile pot fi actualizate. Pentru informații exacte, sunați la {site.phone} sau {site.phone2}.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
