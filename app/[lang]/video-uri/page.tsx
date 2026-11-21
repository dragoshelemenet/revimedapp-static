import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeading from "@/components/PageHeading";
import VideoGalleryDropdown from "@/components/VideoGalleryDropdown";
import { isLang, t, withLang, type Lang } from "@/lib/i18n";
import { youtubeVideos } from "@/lib/videos";
import { JsonLd, breadcrumbJsonLd, galleryPageJsonLd, makeMetadata } from "@/lib/seo";

export const dynamicParams = false;

const staticLangs: Lang[] = ["en", "ru", "ua"];

export function generateStaticParams() {
 return staticLangs.map((lang) => ({ lang }));
}

const videoCopy: Record<Exclude<Lang, "ro">, { title: string; subtitle: string; galleryCta: string }> = {
 en: {
  title: "Revimed PLUS+ Videos",
  subtitle: "Watch medical presentations, rehabilitation equipment demonstrations, and clinic highlights from Chișinău.",
  galleryCta: "Open Photo Gallery"
 },
 ru: {
  title: "Видео Revimed PLUS+",
  subtitle: "Смотрите медицинские презентации, обзоры реабилитационного оборудования и материалы клиники в Кишинёве.",
  galleryCta: "Открыть фотогалерею"
 },
 ua: {
  title: "Відео Revimed PLUS+",
  subtitle: "Дивіться медичні презентації, огляди реабілітаційного обладнання та матеріали клініки в Кишиневі.",
  galleryCta: "Відкрити фотогалерею"
 }
};

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
 const { lang } = await params;
 if (!isLang(lang) || lang === "ro") return {};
 const copy = videoCopy[lang];
 return makeMetadata({
  lang,
  path: "/video-uri",
  localized: false,
  title: copy.title,
  description: copy.subtitle
 });
}

export default async function VideoLangPage({ params }: Props) {
 const { lang } = await params;
 if (!isLang(lang) || lang === "ro") notFound();
 const text = t(lang);
 const copy = videoCopy[lang];
 const pagePath = `${withLang("/video-uri", lang)}/`;

 return (
  <>
   <JsonLd
    data={breadcrumbJsonLd([
     { name: text.home, path: withLang("/", lang) },
     { name: text.videos, path: pagePath }
    ])}
   />
   <JsonLd
    data={galleryPageJsonLd({
     name: copy.title,
     description: copy.subtitle,
     path: pagePath,
     images: [],
     videos: youtubeVideos.map((v) => ({ title: v.title, embedUrl: v.embed }))
    })}
   />
   <PageHeading>
    <div>
     <p className="crumb">{text.home} / {text.videos}</p>
     <h1>{copy.title}</h1>
     <p className="lead">{copy.subtitle}</p>
    </div>
   </PageHeading>
   <section className="rmSection galleryVideoSection">
    <div className="rmShell">
     <h2 className="centerTitle">{text.ourVideos}</h2>
     <VideoGalleryDropdown videos={youtubeVideos} lang={lang} />
     <div className="rm-quick-links-bar" style={{ justifyContent: "center", marginTop: 24 }}>
      <Link href={withLang("/galerie/", lang)} className="btn btn-outline-primary btn-sm">
       {copy.galleryCta}
      </Link>
      <Link href={withLang("/contact/", lang)} className="btn btn-primary btn-sm">
       {text.contact}
      </Link>
     </div>
    </div>
   </section>
  </>
 );
}
