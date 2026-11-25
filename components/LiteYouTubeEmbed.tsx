"use client";

import { useState } from "react";

export default function LiteYouTubeEmbed({
  videoId,
  title,
  playLabel = "Redă prezentarea video"
}: {
  videoId: string;
  title: string;
  playLabel?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const thumbWebp = `https://i.ytimg.com/vi_webp/${videoId}/hqdefault.webp`;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 9",
        borderRadius: 18,
        overflow: "hidden",
        marginBottom: 22,
        border: "1px solid rgba(11, 143, 216, 0.22)",
        background: "#071f3f"
      }}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ width: "100%", height: "100%", border: 0, display: "block" }}
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`${playLabel}: ${title}`}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            padding: 0,
            border: 0,
            background: "transparent",
            cursor: "pointer",
            display: "block"
          }}
        >
          <img
            src={thumbWebp}
            alt={title}
            width={480}
            height={360}
            loading="lazy"
            decoding="async"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(180deg, rgba(7,31,63,0.12), rgba(7,31,63,0.42))"
            }}
          >
            <span
              style={{
                width: 68,
                height: 68,
                borderRadius: "50%",
                background: "rgba(11, 143, 216, 0.92)",
                color: "#fff",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                paddingLeft: 4,
                boxShadow: "0 10px 28px rgba(7, 31, 63, 0.35)",
                border: "2px solid rgba(255, 255, 255, 0.9)"
              }}
            >
              ▶
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
