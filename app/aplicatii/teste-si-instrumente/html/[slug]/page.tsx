import { notFound } from "next/navigation";
import { readHtmlApp } from "@/lib/appsRegistry";

export const dynamic = "force-dynamic";

export default async function HtmlAppPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await readHtmlApp(slug);

  if (!data) notFound();

  return (
    <>
      <section className="pageHero">
        <div className="rmShell">
          <p className="crumb">Aplicații / HTML App</p>
          <h1>{data.app.title.ro}</h1>
          <p className="lead">{data.app.description.ro}</p>
        </div>
      </section>

      <section className="rmSection htmlAppSection">
        <div className="rmShell htmlAppFrameWrap">
          <iframe
            className="htmlAppFrame"
            srcDoc={data.html}
            title={data.app.title.ro}
            sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-modals"
          />
        </div>
      </section>
    </>
  );
}
