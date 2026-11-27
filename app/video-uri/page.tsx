import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import VideoGalleryDropdown from "@/components/VideoGalleryDropdown";
import { t } from "@/lib/i18n";
import { youtubeVideos } from "@/lib/videos";
import { JsonLd, breadcrumbJsonLd, galleryPageJsonLd, makeMetadata } from "@/lib/seo";

const title = "Video-uri Revimed PLUS+";
const subtitle = "Prezentări medicale, demonstrații ale aparatelor de recuperare și materiale video de la Centrul Medical Revimed PLUS+ Chișinău.";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/video-uri",
 localized: true,
 title,
 description: subtitle
});

export default function VideoRoPage() {
 const text = t("ro");
 return (
  <>
   <JsonLd
    data={breadcrumbJsonLd([
     { name: text.home, path: "/" },
     { name: text.videos, path: "/video-uri/" }
    ])}
   />
   <JsonLd
    data={galleryPageJsonLd({
     name: title,
     description: subtitle,
     path: "/video-uri/",
     images: [],
     videos: youtubeVideos.map((v) => ({ title: v.title, embedUrl: v.embed }))
    })}
   />
   <PageHeading>
    <div>
     <p className="crumb">{text.home} / {text.videos}</p>
     <h1>{title}</h1>
     <p className="lead">{subtitle}</p>
    </div>
   </PageHeading>
   <section className="rmSection galleryVideoSection">
    <div className="rmShell">
     <aside className="rm-citable-summary" style={{ marginBottom: 20 }}>
      <div className="rm-citable-summary-head">
       <span className="rm-citable-pill">Arhivă Video Clinică · Revimed PLUS+ Chișinău (Ciocana)</span>
       <span className="rm-citable-date">6 Prezentări Video · Dr. Igor Revenco</span>
      </div>
      <p style={{ margin: 0 }}>
       Galeria video oficială a Centrului Medical Revimed PLUS+ (Chișinău, sectorul Ciocana, Str. Mircea cel Bătrân 13/2) prezintă demonstrații practice ale procedurilor de neurorecuperare, fizioterapie cu aparataj (Electrosomn-3, Transair TES, Bi-LENAR, Amplipuls SMT: 100 MDL / 30 min) și explicații clinice oferite de Dr. Igor Revenco (medic neurolog, neurochirurg și neuropediatru de categorie superioară, 35+ ani experiență, membru EANS). Programări consultații (500 MDL primară / 400 MDL repetată): 022 60 50 60.
      </p>
     </aside>
     <h2 className="centerTitle">{text.ourVideos}</h2>
     <VideoGalleryDropdown videos={youtubeVideos} lang="ro" />
     <div className="rm-quick-links-bar" style={{ justifyContent: "center", marginTop: 24 }}>
      <Link href="/galerie/" className="btn btn-outline-primary btn-sm">
       Deschide Galeria Foto
      </Link>
      <Link href="/contact/" className="btn btn-primary btn-sm">
       {text.contact}
      </Link>
     </div>
    </div>
   </section>
  </>
 );
}
