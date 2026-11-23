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
