
import PageHeading from "@/components/PageHeading";
import { makeMetadata } from "@/lib/seo";
import { isLang } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Link from "next/link";
import { translatedTools } from "@/lib/appMeta";

export default function Page() {
  const apps = translatedTools("ro");

  return (
    <div>
      <PageHeading>
        <div className="rmShell">
          <p className="breadcrumbs">Acasă / Aplicații</p>
          <h1>Aplicații Revimed PLUS+</h1>
          <p>Instrumente simple pentru orientare, respirație, postură, recuperare și pregătire pentru consultație.</p>
        </div>
      </PageHeading>

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
    </div>
  );
}

export const metadata = makeMetadata({ lang: "ro", path: "/aplicatii", title: "Aplicații Revimed PLUS+", description: "Instrumente simple pentru orientare, respirație, postură, recuperare și pregătire pentru consultație." });
