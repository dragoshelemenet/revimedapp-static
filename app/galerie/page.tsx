import { youtubeVideos } from "@/lib/videos";
import { getPublishedGalleryItems } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Galerie",
  description: "Galerie foto și video Revimed PLUS+ din Chișinău."
};

export default function GalleryPage() {
  const galleryImages = getPublishedGalleryItems("ro");

  return (
    <>
      <section className="pageHero galleryHero">
        <div className="rmShell">
          <p className="crumb">Acasă / Galerie</p>
          <h1>Galerie Revimed PLUS+</h1>
          <p className="lead">
            Imagini din centru și video-uri despre proceduri, recuperare și activitatea Revimed PLUS+.
          </p>
        </div>
      </section>

      <section className="rmSection galleryPageSection">
        <div className="rmShell">
          <h2 className="centerTitle">Galerie Foto</h2>

          <div className="galleryMasonry fixedGalleryGrid">
            {galleryImages.map((image, index) => (
              <a
                href={image.image}
                target="_blank"
                rel="noopener noreferrer"
                className={index === 0 || index === 3 ? "galleryPhoto galleryLarge" : "galleryPhoto"}
                key={image.id}
              >
                <img src={image.image} alt={image.alt || image.title} loading="lazy" />
                <span>{image.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="rmSection galleryVideoSection">
        <div className="rmShell">
          <h2 className="centerTitle">Video-urile Noastre</h2>

          <div className="galleryVideoGrid">
            {youtubeVideos.map((video) => (
              <article className="galleryVideoCard" key={video.embed}>
                <div className="youtubeFrame">
                  <iframe
                    src={video.embed}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <h3>{video.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
