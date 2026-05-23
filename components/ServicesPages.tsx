import Link from "next/link";
import { langPrefix, normalizeLang, servicesText } from "@/lib/services";
import { getLocalizedService, getLocalizedServices } from "@/lib/servicesLocalized";

export function ServicesListPage({ lang = "ro" }: { lang?: string }) {
  const safeLang = normalizeLang(lang);
  const t = servicesText[safeLang];
  const prefix = langPrefix(safeLang);
  const items = getLocalizedServices(safeLang);

  return (
    <main>
      <section className="pageHero servicesNewHero">
        <div className="rmShell">
          <p className="breadcrumbs">{t.home} / {t.nav}</p>
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </div>
      </section>

      <section className="rmSection servicesNewSection">
        <div className="rmShell">
          <div className="servicesNewGrid">
            {items.map((item) => (
              <Link className="servicesNewCard" href={`${prefix}/servicii/${item.slug}`} key={item.slug}>
                <span className="servicesNewBadge">{item.category}</span>
                <h2>{item.title}</h2>
                <p>{item.short}</p>
                <b>{t.open} →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function ServiceDetailPage({ lang = "ro", slug }: { lang?: string; slug: string }) {
  const safeLang = normalizeLang(lang);
  const t = servicesText[safeLang];
  const prefix = langPrefix(safeLang);
  const item = getLocalizedService(safeLang, slug);

  if (!item) return null;

  return (
    <main>
      <section className="pageHero servicesNewHero">
        <div className="rmShell">
          <p className="breadcrumbs">{t.home} / {t.nav} / {item.title}</p>
          <h1>{item.title}</h1>
          <p>{item.short}</p>
        </div>
      </section>

      <section className="rmSection servicesNewDetailSection">
        <div className="rmShell">
          <article className="servicesNewDetailCard">
            <span className="servicesNewBadge">{item.category}</span>
            <h2>{item.title}</h2>
            <p className="servicesNewLead">{item.short}</p>

            {item.sections.map((section) => (
              <section className="servicesNewInfoBox" key={section.title}>
                <h3>{section.title}</h3>
                {section.body.length > 1 ? (
                  <ul>{section.body.map((line) => <li key={line}>{line}</li>)}</ul>
                ) : (
                  <p>{section.body[0]}</p>
                )}
              </section>
            ))}

            <p className="servicesNewNote">⚠️ {t.note}</p>

            <Link className="rmBtn light" href={`${prefix}/servicii`}>
              ← {t.back}
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
