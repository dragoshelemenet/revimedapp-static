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

 const emojiFallback: Record<string, string> = {
  "🧠": "https://img.icons8.com/color/96/brain.png",
  "⚕️": "https://img.icons8.com/color/96/medical-doctor.png",
  "🏃": "https://img.icons8.com/color/96/physical-therapy.png",
  "💓": "https://img.icons8.com/color/96/heart-health.png",
  "🌿": "https://img.icons8.com/color/96/spa.png",
  "🎵": "https://img.icons8.com/color/96/electrical.png",
  "📍": "https://img.icons8.com/color/96/marker.png",
  "☎": "https://img.icons8.com/color/96/phone.png",
  "📞": "https://img.icons8.com/color/96/phone.png",
  "📱": "https://img.icons8.com/color/96/iphone.png",
  "✉": "https://img.icons8.com/color/96/email.png",
  "🚌": "https://img.icons8.com/color/96/bus.png",
  "🚎": "https://img.icons8.com/color/96/trolleybus.png",
  "🚕": "https://img.icons8.com/color/96/taxi.png"
 };

 const iconSrc =
  value.startsWith("http") || value.startsWith("/") ? value : emojiFallback[value] || "https://img.icons8.com/color/96/medical-doctor.png";

 return <img className={className} src={iconSrc} alt={alt} loading="lazy" />;
}
