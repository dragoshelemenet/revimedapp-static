"use client";

import { useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/i18n";

type VideoItem = {
  title: string;
  embed: string;
};

const copy: Record<Lang, { open: string; close: string; play: string }> = {
  ro: { open: "Vezi videoclipurile", close: "Ascunde videoclipurile", play: "Redă video" },
  en: { open: "Show videos", close: "Hide videos", play: "Play video" },
  ru: { open: "Показать видео", close: "Скрыть видео", play: "Смотреть видео" },
  ua: { open: "Показати відео", close: "Сховати відео", play: "Дивитися відео" }
};

function getYouTubeId(embedUrl: string): string {
  const m = embedUrl.match(/\/embed\/([^?&/]+)/);
  return m ? m[1] : "";
}

export default function VideoGalleryDropdown({
  videos,
  lang = "ro"
}: {
  videos: VideoItem[];
  lang?: Lang;
}) {
  const [open, setOpen] = useState(false);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const labels = copy[lang] || copy.ro;

  useEffect(() => {
    if (!open) return;

    const onScroll = () => {
      const el = panelRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -140) {
        const heightLost = el.offsetHeight;
        setOpen(false);
        setPlayingId(null);
        window.requestAnimationFrame(() => {
          window.scrollBy({ top: -heightLost, behavior: "instant" as ScrollBehavior });
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <div className="rm-video-dropdown">
      <div className="rm-video-dropdown-trigger-wrap">
        <button
          type="button"
          className="rm-more-btn rm-video-toggle"
          aria-expanded={open}
          onClick={() => {
            setOpen((v) => !v);
            if (open) setPlayingId(null);
          }}
        >
          <span>{open ? labels.close : `${labels.open} (${videos.length})`}</span>
          <span aria-hidden="true">{open ? "▴" : "▾"}</span>
        </button>
      </div>

      {open && (
        <div ref={panelRef} className="rm-video-dropdown-panel">
          <div className="rm-video-grid">
            {videos.map((video) => {
              const id = getYouTubeId(video.embed);
              const isPlaying = playingId === video.embed;
              const thumb = id ? `https://i.ytimg.com/vi_webp/${id}/hqdefault.webp` : "";

              return (
                <article className="rm-video-card" key={video.embed} data-glass-card>
                  <div className="rm-video-frame">
                    {isPlaying ? (
                      <iframe
                        src={`${video.embed}?autoplay=1&rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <button
                        type="button"
                        className="rm-video-poster"
                        aria-label={`${labels.play}: ${video.title}`}
                        onClick={() => setPlayingId(video.embed)}
                      >
                        {thumb && (
                          <img
                            src={thumb}
                            alt={video.title}
                            loading="lazy"
                            decoding="async"
                            width={480}
                            height={360}
                          />
                        )}
                        <span className="rm-video-play" aria-hidden="true">
                          ▶
                        </span>
                      </button>
                    )}
                  </div>
                  <h3>{video.title}</h3>
                </article>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
