import { notFound } from "next/navigation";
import { getPublishedPrices } from "@/lib/db";
import { site } from "@/lib/site";
import { isLang, t, type Lang } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export default async function PricesLangPage({ params }: Props) {
  const { lang: raw } = await params;
  if (!isLang(raw) || raw === "ro") notFound();

  const lang = raw as Lang;
  const text = t(lang);
  const prices = getPublishedPrices(lang);
  const groups = Array.from(new Set(prices.map((p) => p.category)));

  return (
    <>
      <section className="pageHero pricesHero">
        <div className="rmShell">
          <p className="crumb">{text.home} / {text.prices}</p>
          <h1>{text.pricesTitle}</h1>
          <p className="lead">{text.pricesSubtitle}</p>
        </div>
      </section>

      <section className="rmSection pricesCleanSection">
        <div className="rmShell pricesLayout">
          <aside className="priceCategoryMenu">
            <h2>{text.prices}</h2>
            {groups.map((group) => (
              <a href={`#${group.toLowerCase().replaceAll(" ", "-")}`} key={group}>{group}</a>
            ))}
            <div className="priceContactBox">
              <b>{text.appointment}</b>
              <span>{site.phone}</span>
              <span>{site.phone2}</span>
            </div>
          </aside>

          <div className="pricesContent">
            {groups.map((group) => (
              <section className="priceGroupClean" id={group.toLowerCase().replaceAll(" ", "-")} key={group}>
                <h2>{group}</h2>
                <div className="priceListClean">
                  {prices.filter((p) => p.category === group).map((p) => (
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
