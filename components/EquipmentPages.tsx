import Link from "next/link";
import {
  equipmentText,
  langPrefix,
  normalizeLang,
} from "@/lib/equipment";
import {
  getLocalizedEquipmentItem,
  getLocalizedEquipmentItems,
} from "@/lib/equipmentLocalized";

export function EquipmentListPage({ lang = "ro" }: { lang?: string }) {
  const safeLang = normalizeLang(lang);
  const t = equipmentText[safeLang];
  const prefix = langPrefix(safeLang);
  const items = getLocalizedEquipmentItems(safeLang);

  return (
    <main>
      <section className="pageHero equipmentHero">
        <div className="rmShell">
          <p className="breadcrumbs">{t.home} / {t.nav}</p>
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </div>
      </section>

      <section className="rmSection equipmentSection">
        <div className="rmShell">
          <div className="equipmentGrid">
            {items.map((item) => (
              <Link className="equipmentCard" href={`${prefix}/utilaj/${item.slug}`} key={item.slug}>
                <span className="equipmentBadge">{item.category}</span>
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

export function EquipmentDetailPage({ lang = "ro", slug }: { lang?: string; slug: string }) {
  const safeLang = normalizeLang(lang);
  const t = equipmentText[safeLang];
  const prefix = langPrefix(safeLang);
  const item = getLocalizedEquipmentItem(safeLang, slug);

  if (!item) return null;

  return (
    <main>
      <section className="pageHero equipmentHero">
        <div className="rmShell">
          <p className="breadcrumbs">{t.home} / {t.nav} / {item.title}</p>
          <h1>{item.title}</h1>
          <p>{item.short}</p>
        </div>
      </section>

      <section className="rmSection equipmentDetailSection">
        <div className="rmShell">
          <article className="equipmentDetailCard">
            <span className="equipmentBadge">{item.category}</span>
            <h2>{item.title}</h2>
            <p className="equipmentLead">{item.short}</p>

            {item.sections.map((section) => (
              <section className="equipmentInfoBox" key={section.title}>
                <h3>{section.title}</h3>
                {section.body.length > 1 ? (
                  <ul>
                    {section.body.map((line) => <li key={line}>{line}</li>)}
                  </ul>
                ) : (
                  <p>{section.body[0]}</p>
                )}
              </section>
            ))}

            <p className="equipmentNote">⚠️ {t.note}</p>

            <Link className="rmBtn light" href={`${prefix}/utilaj`}>
              ← {t.back}
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
