"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { isLang, withLang, type Lang } from "@/lib/i18n";

const barLabels: Record<Lang, { call: string; contact: string }> = {
  ro: { call: "Sună", contact: "Contact" },
  en: { call: "Call", contact: "Contact" },
  ru: { call: "Позвонить", contact: "Контакты" },
  ua: { call: "Подзвонити", contact: "Контакти" }
};

export default function MobileCallBar() {
  const pathname = usePathname() || "/";
  const first = pathname.split("/").filter(Boolean)[0];
  const lang: Lang = isLang(first) ? first : "ro";
  const labels = barLabels[lang] || barLabels.ro;

  return (
    <div className="mobileCallBar">
      <a href={`tel:${site.phone2.replaceAll(" ", "")}`}>{labels.call}</a>
      <Link href={withLang("/contact", lang)}>{labels.contact}</Link>
    </div>
  );
}
