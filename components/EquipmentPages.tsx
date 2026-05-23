import Link from "next/link";
import { equipmentItems, equipmentText, getEquipmentItem, langPrefix, normalizeLang, type SiteLang } from "@/lib/equipment";

export function EquipmentListPage({ lang = "ro" }: { lang?: string }) {
  const safeLang = normalizeLang(lang);
  const t = equipmentText[safeLang];
  const prefix = langPrefix(safeLang);

  return (
    <main>
      <section className="pageHero equipmentHero">
        <div className="rmShell">
          <p className="breadcrumbs">{t.breadcrumbHome} / {t.nav}</p>
          <h1>{t.listTitle}</h1>
          <p>{t.listSubtitle}</p>
        </div>
      </section>

      <section className="rmSection equipmentSection">
        <div className="rmShell">
          <div className="equipmentGrid">
            {equipmentItems.map((item) => (
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
  const item = getEquipmentItem(slug);

  if (!item) {
    return (
      <main>
        <section className="pageHero equipmentHero">
          <div className="rmShell">
            <p className="breadcrumbs">{t.breadcrumbHome} / {t.nav}</p>
            <h1>Utilaj</h1>
            <p>{t.seoDescription}</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="pageHero equipmentHero">
        <div className="rmShell">
          <p className="breadcrumbs">{t.breadcrumbHome} / {t.nav} / {item.title}</p>
          <h1>{item.title}</h1>
          <p>{item.short}</p>
        </div>
      </section>

      <section className="rmSection equipmentDetailSection">
        <div className="rmShell">
          <article className="equipmentDetailCard">
            <span className="equipmentBadge">{t.detailEyebrow}</span>
            <h2>{item.title}</h2>
            <p className="equipmentLead">{item.short}</p>

            <div className="equipmentInfoBox">
              <h3>{t.usefulFor}</h3>
              <p>{item.category}</p>
            </div>

            <div className="equipmentInfoBox soft">
              <h3>{t.placeholderTitle}</h3>
              <p>{t.placeholderText}</p>
            </div>

            <p className="equipmentNote">⚠️ {t.medicalNote}</p>

            <Link className="rmBtn light" href={`${prefix}/utilaj`}>
              ← {t.back}
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
