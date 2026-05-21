import { notFound } from "next/navigation";
import { isLang, t } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export default async function SimpleLangPage({ params }: Props) {
 const { lang } = await params;
 if (!isLang(lang) || lang === "ro") notFound();
 const text = t(lang);
 const titleMap: Record<string, string> = {
  contact: text.contact,
  galerie: text.gallery,
  "video-uri": text.videos
 };

 return (
  <>
   <section className="pageHero forceImageHero">
    <div className="rmShell">
     <p className="crumb">{text.home}</p>
     <h1>{titleMap["contact"] || text.contact}</h1>
     <p className="lead">{text.languageVersion}: {lang.toUpperCase()}</p>
    </div>
   </section>
   <section className="rmSection">
    <div className="rmShell adminCard">
     <p>Localized page placeholder. Main content can be translated from admin where applicable.</p>
    </div>
   </section>
  </>
 );
}
