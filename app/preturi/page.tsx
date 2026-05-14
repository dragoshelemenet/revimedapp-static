import { getPublishedPrices } from "@/lib/db";
import { site } from "@/lib/site";
import CurrencyConverter from "@/components/CurrencyConverter";
import PricesAccordion from "@/components/PricesAccordion";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Prețuri",
  description:
    "Lista de prețuri Revimed PLUS+ pentru consultații neurologice, neurochirurgie, fizioterapie, diagnostic funcțional, terapie balneară și electroterapie."
};

export default function PricesPage() {
  const prices = getPublishedPrices("ro");
  const groups = Array.from(new Set(prices.map((p) => p.category)));

  return (
    <>
      <section className="pageHero pricesHero">
        <div className="rmShell">
          <p className="crumb">Acasă / Prețuri</p>
          <h1>Prețuri Revimed PLUS+</h1>
          <p className="lead">
            Alege categoria pentru a vedea serviciile. Listele sunt închise implicit pentru citire mai ușoară.
          </p>
        </div>
      </section>

      <section className="rmSection pricesCleanSection">
        <div className="rmShell pricesModernLayout">
          <CurrencyConverter />

          <div className="priceNotice">
            <b>Notă:</b> Prețurile pot fi actualizate. Pentru confirmare și programare: {site.phone} · {site.phone2}
          </div>

          <PricesAccordion groups={groups} prices={prices} />
        </div>
      </section>
    </>
  );
}
