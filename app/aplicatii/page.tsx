import Link from "next/link";
import { translatedTools } from "@/lib/appMeta";

export default function Page() {
  const apps = translatedTools("ro");

  return (
    <main>
      <section className="pageHero">
        <div className="rmShell">
          <p className="breadcrumbs">Acasă / Aplicații</p>
          <h1>Aplicații Revimed PLUS+</h1>
          <p>Instrumente simple pentru orientare, respirație, postură, recuperare și pregătire pentru consultație.</p>
        </div>
      </section>

      <section className="rmSection">
        <div className="rmShell">
          <div className="equipmentGrid">
            {apps.map((tool) => (
              <Link className="equipmentCard" href={tool.href} key={tool.slug}>
                <span className="equipmentBadge">{tool.tag}</span>
                <h2>{tool.title}</h2>
                <p>{tool.description}</p>
                <b>Deschide →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
