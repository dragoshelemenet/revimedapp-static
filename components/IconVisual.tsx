import type { ReactNode } from "react";

type IconKey =
 | "phone"
 | "mobile"
 | "email"
 | "marker"
 | "bus"
 | "trolleybus"
 | "taxi"
 | "brain"
 | "doctor"
 | "therapy"
 | "heart"
 | "spa"
 | "electrical"
 | "spine"
 | "backpain"
 | "walking"
 | "exercise"
 | "lungs"
 | "clipboard";

function resolveIconKey(value: string): IconKey | null {
 const v = value.toLowerCase();
 if (v.includes("iphone") || value === "📱") return "mobile";
 if (v.includes("phone") || value === "☎" || value === "📞") return "phone";
 if (v.includes("email") || value === "✉") return "email";
 if (v.includes("marker") || value === "📍") return "marker";
 if (v.includes("trolleybus") || value === "🚎") return "trolleybus";
 if (v.includes("bus") || value === "🚌") return "bus";
 if (v.includes("taxi") || value === "🚕") return "taxi";
 if (v.includes("brain") || value === "🧠") return "brain";
 if (v.includes("medical-doctor") || value === "⚕️") return "doctor";
 if (v.includes("physical-therapy") || value === "🏃") return "therapy";
 if (v.includes("heart-health") || value === "💓") return "heart";
 if (v.includes("spa") || value === "🌿") return "spa";
 if (v.includes("electrical") || value === "🎵") return "electrical";
 if (v.includes("spine")) return "spine";
 if (v.includes("back-pain")) return "backpain";
 if (v.includes("walking")) return "walking";
 if (v.includes("exercise")) return "exercise";
 if (v.includes("lungs")) return "lungs";
 if (v.includes("clipboard")) return "clipboard";
 return null;
}

const svgPaths: Record<IconKey, ReactNode> = {
 phone: (
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
 ),
 mobile: (
  <>
   <rect x="6" y="2" width="12" height="20" rx="2.5" />
   <line x1="12" y1="18" x2="12.01" y2="18" />
  </>
 ),
 email: (
  <>
   <rect x="2" y="4" width="20" height="16" rx="2" />
   <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </>
 ),
 marker: (
  <>
   <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
   <circle cx="12" cy="10" r="3" />
  </>
 ),
 bus: (
  <>
   <rect x="4" y="4" width="16" height="14" rx="2" />
   <path d="M4 11h16" />
   <path d="M8 18v2" />
   <path d="M16 18v2" />
   <circle cx="8" cy="14.5" r="1" />
   <circle cx="16" cy="14.5" r="1" />
  </>
 ),
 trolleybus: (
  <>
   <path d="M7 2 12 4l5-2" />
   <rect x="4" y="5" width="16" height="13" rx="2" />
   <path d="M4 11h16" />
   <path d="M8 18v2" />
   <path d="M16 18v2" />
   <circle cx="8" cy="14.5" r="1" />
   <circle cx="16" cy="14.5" r="1" />
  </>
 ),
 taxi: (
  <>
   <path d="M10 3h4" />
   <path d="M5 11l2-5h10l2 5" />
   <rect x="3" y="11" width="18" height="7" rx="2" />
   <circle cx="7.5" cy="14.5" r="1" />
   <circle cx="16.5" cy="14.5" r="1" />
   <path d="M6 18v2" />
   <path d="M18 18v2" />
  </>
 ),
 brain: (
  <>
   <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-5.04Z" />
   <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-5.04Z" />
  </>
 ),
 doctor: (
  <>
   <path d="M11 2v4" />
   <path d="M5 2v4" />
   <path d="M5 4H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V6a2 2 0 0 0-2-2h-1" />
   <path d="M8 15a6 6 0 0 0 12 0v-3" />
   <circle cx="20" cy="10" r="2" />
  </>
 ),
 therapy: (
  <>
   <circle cx="12" cy="5" r="2" />
   <path d="m4 17 5-5 3 2 5-6" />
   <path d="M15 8h2v2" />
   <path d="M10 14v6" />
   <path d="M14 14l3 6" />
  </>
 ),
 heart: (
  <>
   <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
   <path d="M7 11h2.5l1.5-2.5 2 5 1.5-2.5H17" />
  </>
 ),
 spa: (
  <>
   <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
   <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </>
 ),
 electrical: (
  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
 ),
 spine: (
  <>
   <path d="M12 3v18" />
   <path d="M8 6h8" />
   <path d="M7 10h10" />
   <path d="M7 14h10" />
   <path d="M8 18h8" />
  </>
 ),
 backpain: (
  <>
   <circle cx="12" cy="4" r="2" />
   <path d="M12 6v7" />
   <path d="M8 10l4 2 4-2" />
   <path d="M9 21l3-8 3 8" />
   <path d="M18 11l2-1" />
   <path d="M18 14l2 1" />
  </>
 ),
 walking: (
  <>
   <circle cx="13" cy="4" r="2" />
   <path d="m7 21 3-6 2 2 2 4" />
   <path d="M10 15l2-6 4 2 3-2" />
   <path d="M7 11l3-2" />
  </>
 ),
 exercise: (
  <>
   <path d="M6.5 6.5 17.5 17.5" />
   <path d="m21 21-1-1" />
   <path d="m3 3 1 1" />
   <path d="m18 22 4-4" />
   <path d="m2 6 4-4" />
   <path d="m3 10 7-7" />
   <path d="m14 21 7-7" />
  </>
 ),
 lungs: (
  <>
   <path d="M12 3v9" />
   <path d="M12 9c-3 0-6 2.5-7 6.5-.6 2.4.8 4.5 3 4.5 2 0 4-1.5 4-4" />
   <path d="M12 9c3 0 6 2.5 7 6.5.6 2.4-.8 4.5-3 4.5-2 0-4-1.5-4-4" />
  </>
 ),
 clipboard: (
  <>
   <rect x="8" y="2" width="8" height="4" rx="1" />
   <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
   <path d="M9 12h6" />
   <path d="M9 16h6" />
  </>
 )
};

export default function IconVisual({
 src,
 alt,
 className = "iconVisual"
}: {
 src?: string;
 alt: string;
 className?: string;
}) {
 const value = src || "";
 const key = resolveIconKey(value);

 if (key) {
  return (
   <span className={`rm-svg-icon-wrap ${className}`} role="img" aria-label={alt}>
    <svg
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     strokeWidth="1.9"
     strokeLinecap="round"
     strokeLinejoin="round"
     aria-hidden="true"
    >
     {svgPaths[key]}
    </svg>
   </span>
  );
 }

 if (value.startsWith("/")) {
  return <img className={className} src={value} alt={alt} loading="lazy" decoding="async" />;
 }

 return (
  <span className={`rm-svg-icon-wrap ${className}`} role="img" aria-label={alt}>
   <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
   >
    {svgPaths.doctor}
   </svg>
  </span>
 );
}
