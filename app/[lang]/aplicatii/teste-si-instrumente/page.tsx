import Link from "next/link";
import { notFound } from "next/navigation";
import { tools } from "@/lib/site";
import { isLang, t, withLang, type Lang } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export default async function AppsLangPage({ params }: Props) {
  const { lang: raw } = await params;
  if (!isLang(raw) || raw === "ro") notFound();
  const lang = raw as Lang;
  const text = t(lang);

  return (
    <>
      <section className="pageHero">
        <div className="rmShell">
          <p className="crumb">{text.home} / {text.apps}</p>
          <h1>{text.apps}</h1>
          <p className="lead">{text.toolsSubtitle}</p>
        </div>
      </section>
      <section className="rmSection">
        <div className="rmShell toolGrid">
          {tools.map((tool) => (
            <Link href={withLang(tool.href, lang)} className="toolTile" key={tool.slug}>
              <span>{tool.tag}</span>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
              <b>{text.readMore}</b>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
