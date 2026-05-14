import { youtubeVideos } from "@/lib/videos";

export const metadata = {
  title: "Galerie",
  description: "Galerie foto și video Revimed PLUS+ din Chișinău."
};

const galleryImages = [
  {
    src: "/images/2pic.jpg",
    alt: "Echipamente Medicale"
  },
  {
    src: "/images/1pic.jpg",
    alt: "Sala de Consultații"
  },
  {
    src: "/images/3.jpg",
    alt: "Reabilitare"
  },
  {
    src: "/images/pre.jpg",
    alt: "Facilități Moderne"
  },
  {
    src: "/images/pre1.jpg",
    alt: "Personal Medical"
  },
  {
    src: "/images/31.jpg",
    alt: "Clinic"
  }
];

export default function GalleryPage() {
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

          <div className="galleryMasonry">
            {galleryImages.map((image, index) => (
              <a
                href={image.src}
                target="_blank"
                rel="noopener noreferrer"
                className={index === 0 || index === 3 ? "galleryPhoto galleryLarge" : "galleryPhoto"}
                key={image.src}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
                <span>{image.alt}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="rmSection galleryVideoSection">
        <div className="rmShell">
          <h2 className="centerTitle">Video-urile Noastre</h2>

          <div className="youtubeGrid galleryYoutubeGrid">
            {youtubeVideos.map((video, index) => (
              <article className={index === 0 ? "youtubeCard youtubeBig" : "youtubeCard"} key={video.embed}>
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
