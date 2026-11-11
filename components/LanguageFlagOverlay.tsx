"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { isLang, type Lang } from "@/lib/i18n";

const flags: Record<Lang, string> = {
 ro: "🇷🇴",
 en: "🇬🇧",
 ru: "🇷🇺",
 ua: "🇺🇦"
};

const names: Record<Lang, string> = {
 ro: "Română",
 en: "English",
 ru: "Русский",
 ua: "Українська"
};

export default function LanguageFlagOverlay() {
 const pathname = usePathname();
 const first = pathname.split("/").filter(Boolean)[0];
 const lang: Lang = isLang(first) ? first : "ro";

 useEffect(() => { document.documentElement.lang = lang === "ua" ? "uk" : lang; }, [lang]);

 return (
  <div className={`languageFlagOverlay flag-${lang}`} aria-hidden="true">
   <span className="flagEmoji">{flags[lang]}</span>
   <span className="flagLabel">{names[lang]}</span>
  </div>
 );
}
