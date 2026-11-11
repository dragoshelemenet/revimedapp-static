"use client";

import { getTranslatedBlogSlug } from "@/lib/blogSlugTranslations";
import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";
import { cleanPath, isLang, languages, langLabels, t, type Lang, withLang } from "@/lib/i18n";

export default function Header() {
 const [open, setOpen] = useState(false);
 const pathname = usePathname();
 const first = pathname.split("/").filter(Boolean)[0];
 const lang: Lang = isLang(first) ? first : "ro";
 const text = t(lang);
 const currentCleanPath = cleanPath(pathname);
 const close = () => setOpen(false);
 const languageHref = (target: Lang) => {
  if (currentCleanPath === "/_not-found" || currentCleanPath === "/404") return withLang("/", target);
  if (currentCleanPath === "/video-uri" && target === "ro") return "/galerie";
  if (target === lang) return pathname;
  if (["/intrebari", "/cookies", "/termeni-si-conditii"].includes(currentCleanPath)) return withLang("/", target);
  // Article slugs differ by language; use the translated listing until pairs are curated.
  if (currentCleanPath.startsWith("/blog/")) return withLang("/blog/" + getTranslatedBlogSlug(currentCleanPath.split("/")[2], target), target);
  return withLang(currentCleanPath, target);
 };
 const link = (path: string) => path === "/intrebari" ? path : withLang(path, lang);
 const isActive = (path: string) => {
  const clean = cleanPath(pathname);
  if (path === "/") return clean === "/";
  return clean === path || clean.startsWith(`${path}/`);
 };

 return (
  <header className={styles.header}>
   <div className={styles.top}>
    <div className={styles.shell}>
     <span></span>
     <span className={styles.languages}>
      {languages.map((l) => (
       <Link
        key={l}
        href={languageHref(l)}
        className={l === lang ? styles.selectedLanguage : ""}
        onClick={close}
       >
        {langLabels[l]}
       </Link>
      ))}
     </span>
    </div>
   </div>

   <nav className={styles.nav}>
    <Link href={link("/")} className={styles.logo} aria-label={site.name} onClick={close}>
     <img src="/images/logo.png" alt="REVIMED" />
    </Link>

    <button
     className={styles.toggle}
     type="button"
     aria-label="Meniu"
     aria-expanded={open}
     onClick={() => setOpen((v) => !v)}
    >
     <span></span>
     <span></span>
     <span></span>
    </button>

    <div className={`${styles.links} ${open ? styles.open : ""}`}>
     <Link className={isActive("/") ? styles.active : ""} href={link("/")} onClick={close}>{text.home}</Link>
     <Link className={isActive("/despre-noi") ? styles.active : ""} href={link("/despre-noi")} onClick={close}>{text.about}</Link>
     <Link className={isActive("/servicii") ? styles.active : ""} href={link("/servicii")} onClick={close}>{text.services}</Link>
     <Link className={isActive("/aplicatii") ? styles.active : ""} href={link("/aplicatii")} onClick={close}>{text.apps}</Link>
     <Link className={isActive("/utilaj") ? styles.active : ""} href={link("/utilaj")} onClick={close}>{text.equipment || "Equipment"}</Link>
     <Link className={isActive("/preturi") ? styles.active : ""} href={link("/preturi")} onClick={close}>{text.prices}</Link>
     <Link className={isActive("/galerie") ? styles.active : ""} href={link("/galerie")} onClick={close}>{text.gallery}</Link>
     <Link className={isActive("/blog") ? styles.active : ""} href={link("/blog")} onClick={close}>{text.blog}</Link>
     <Link className={isActive("/intrebari") ? styles.active : ""} href={link("/intrebari")} onClick={close}>{text.questions || "Întrebări"}</Link>
     <Link className={isActive("/contact") ? styles.active : ""} href={link("/contact")} onClick={close}>{text.contact}</Link>
    </div>
   </nav>

   {open && <button className={styles.backdrop} aria-label="Închide meniul" onClick={close}></button>}
  </header>
 );
}
