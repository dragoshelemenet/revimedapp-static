import { notFound } from "next/navigation";
import { isLang } from "@/lib/i18n";
import { readHtmlApp } from "@/lib/appsRegistry";

export const dynamic = "force-dynamic";

export default async function HtmlAppPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
 const { lang, slug } = await params;
 if (!isLang(lang) || lang === "ro") notFound();

 const data = await readHtmlApp(slug);
 if (!data) notFound();

 const title = data.app.title[lang] || data.app.title.ro;
 const description = data.app.description[lang] || data.app.description.ro;

 return (
  <>
   <section className="pageHero forceImageHero innerHeroImage">
    <div className="rmShell">
     <p className="crumb">Apps / HTML App</p>
     <h1>{title}</h1>
     <p className="lead">{description}</p>
    </div>
   </section>

   <section className="rmSection htmlAppSection">
    <div className="rmShell htmlAppFrameWrap">
     <iframe
      className="htmlAppFrame"
      srcDoc={data.html}
      title={title}
      sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-modals"
     />
    </div>
   </section>
  </>
 );
}
