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
  localized: true,
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
     <aside className="rm-citable-summary" style={{ marginBottom: 20 }}>
      <div className="rm-citable-summary-head">
       <span className="rm-citable-pill">{copy.title} · Revimed PLUS+ Chișinău</span>
       <span className="rm-citable-date">6 Clinical Videos · Dr. Igor Revenco</span>
      </div>
      <p style={{ margin: 0 }}>
       {lang === "ru"
        ? "Официальная видеогалерея медицинского центра Revimed PLUS+ (Кишинёв, сектор Чеканы, ул. Мирча чел Бэтрын 13/2): демонстрации аппаратной физиотерапии (Электросон-3, Трансаир ТЭС, Би-ЛЕНАР, Амплипульс СМТ: 100 MDL / 30 мин), процедур нейрореабилитации и клинические разъяснения д-ра Игоря Ревенко (невролог, нейрохирург и детский невролог высшей категории, 35+ лет стажа, член EANS). Запись на приём (500 MDL первичный / 400 MDL повторный): 022 60 50 60."
        : lang === "ua"
          ? "Офіційна відеогалерея медичного центру Revimed PLUS+ (Кишинів, сектор Чокана, вул. Мірча чел Бетрин 13/2): демонстрації апаратної фізіотерапії (Електросон-3, Трансаїр ТЕС, Бі-ЛЕНАР, Ампліпульс СМТ: 100 MDL / 30 хв), процедур нейрореабілітації та клінічні роз’яснення д-ра Ігоря Ревенка (невролог, нейрохірург і дитячий невролог вищої категорії, 35+ років стажу, член EANS). Запис на прийом (500 MDL первинний / 400 MDL повторний): 022 60 50 60."
          : "Official video gallery of Revimed PLUS+ Medical Center (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2): clinical demonstrations of apparatus physiotherapy (Electrosleep-3, Transair TES, Bi-LENAR, Amplipuls SMT: 100 MDL / 30 min), neuro-rehabilitation workflows, and medical presentations by Dr. Igor Revenco (Senior Neurologist, Neurosurgeon & Pediatric Neurologist, 35+ years experience, EANS member). Appointments (500 MDL primary / 400 MDL follow-up): 022 60 50 60."}
      </p>
     </aside>
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
