"use client";

import { getTranslatedBlogSlug } from "@/lib/blogSlugTranslations";
import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
  if (currentCleanPath === "/_not-found" || currentCleanPath === "/404") return withLang("/", target);  if (target === lang) return pathname;  if (currentCleanPath === "/neurolog-chisinau" || currentCleanPath === "/nevrolog-kishinev") {
    if (target === "ro") return "/neurolog-chisinau";
    if (target === "ru") return "/ru/nevrolog-kishinev";
    return withLang("/servicii/consultatii-neurologice", target);
  }
  if (currentCleanPath === "/neurochirurg-chisinau" || currentCleanPath === "/neyrohirurg-kishinev") {
    if (target === "ro") return "/neurochirurg-chisinau";
    if (target === "ru") return "/ru/neyrohirurg-kishinev";
    return withLang("/servicii/consultatii-neurochirurgie", target);
  }
  if (currentCleanPath === "/fizioterapie-chisinau" || currentCleanPath === "/fizioterapiya-kishinev") {
    if (target === "ro") return "/fizioterapie-chisinau";
    if (target === "ru") return "/ru/fizioterapiya-kishinev";
    return withLang("/servicii/fizioterapie-si-reabilitare", target);
  }
  if (currentCleanPath === "/neuropediatru-chisinau" || currentCleanPath === "/detskiy-nevrolog-kishinev") {
    if (target === "ro") return "/neuropediatru-chisinau";
    if (target === "ru") return "/ru/detskiy-nevrolog-kishinev";
    return withLang("/servicii/consultatii-neurologice", target);
  }
  if (currentCleanPath === "/hernie-de-disc-chisinau" || currentCleanPath === "/gryzha-diska-kishinev") {
    if (target === "ro") return "/hernie-de-disc-chisinau";
    if (target === "ru") return "/ru/gryzha-diska-kishinev";
    return withLang("/servicii/consultatii-neurochirurgie", target);
  }
  if (currentCleanPath === "/neurolog-ciocana-chisinau" || currentCleanPath === "/nevrolog-chekany-kishinev") {
    if (target === "ro") return "/neurolog-ciocana-chisinau";
    if (target === "ru") return "/ru/nevrolog-chekany-kishinev";
    return withLang("/contact", target);
  }
  if (currentCleanPath === "/tratament-migrene-chisinau" || currentCleanPath === "/lechenie-migreni-kishinev") {
    if (target === "ro") return "/tratament-migrene-chisinau";
    if (target === "ru") return "/ru/lechenie-migreni-kishinev";
    return withLang("/servicii/consultatii-neurologice", target);
  }
  if (currentCleanPath === "/osteocondroza-cervicala-chisinau" || currentCleanPath === "/osteohondroz-kishinev") {
    if (target === "ro") return "/osteocondroza-cervicala-chisinau";
    if (target === "ru") return "/ru/osteohondroz-kishinev";
    return withLang("/servicii/fizioterapie-si-reabilitare", target);
  }
  const pairedLocalRoutes: [string, string, string][] = [
    ["/eeg-chisinau", "/eeg-kishinev", "/servicii/diagnostic-functional"],
    ["/masaj-terapeutic-chisinau", "/lechebnyy-massazh-kishinev", "/servicii/fizioterapie-si-reabilitare"],
    ["/diagnostic-amp-chisinau", "/diagnostika-amp-kishinev", "/utilaj/aparat-amp"],
    ["/reoencefalografie-chisinau", "/reoentsefalografiya-kishinev", "/utilaj/rheotest"],
    ["/kinetoterapie-chisinau", "/kinezoterapiya-kishinev", "/servicii/fizioterapie-si-reabilitare"],
    ["/acupunctura-reflexoterapie-chisinau", "/igloukalyvanie-kishinev", "/servicii"],    ["/electroforeza-amplipuls-chisinau", "/elektroforez-amplipuls-kishinev", "/servicii/fizioterapie-si-reabilitare"],
    ["/nevralgie-neuropatie-chisinau", "/nevralgiya-neyropatiya-kishinev", "/servicii/consultatii-neurologice"],
    ["/epilepsie-convulsii-chisinau", "/epilepsiya-kishinev", "/servicii/consultatii-neurologice"],
    ["/electrosomn-chisinau", "/elektroson-kishinev", "/utilaj/electrosomn-3"],
    ["/recuperare-dupa-avc-chisinau", "/reabilitatsiya-posle-insulta-kishinev", "/servicii/consultatii-neurologice"],
    ["/dureri-de-spate-sciatica-chisinau", "/boli-v-spine-ishias-kishinev", "/servicii/fizioterapie-si-reabilitare"],
    ["/ameteli-vertij-chisinau", "/golovokruzhenie-kishinev", "/servicii/consultatii-neurologice"],
    ["/insomnie-tratament-chisinau", "/lechenie-bessonnitsy-kishinev", "/utilaj/electrosomn-3"],
    ["/electrospondilografie-chisinau", "/elektrospondilografiya-kishinev", "/servicii/diagnostic-functional"],
    ["/magnetoterapie-laser-chisinau", "/magnitoterapiya-lazer-kishinev", "/servicii/fizioterapie-si-reabilitare"],
    ["/ozonoterapie-darsonval-chisinau", "/ozonoterapiya-darsonval-kishinev", "/servicii/fizioterapie-si-reabilitare"],
    ["/eeg-copii-chisinau", "/eeg-detyam-kishinev", "/servicii/diagnostic-functional"],
    ["/fizioterapie-ciocana-chisinau", "/fizioterapiya-chekany-kishinev", "/servicii/fizioterapie-si-reabilitare"],
    ["/camera-salina-bai-namol-chisinau", "/solyanaya-peshchera-gryazevye-vanny-kishinev", "/servicii/terapie-balneara"],
    ["/fitoterapeut-chisinau", "/fitoterapevt-kishinev", "/servicii"],
    ["/ecografie-ecg-chisinau", "/uzi-ekg-kishinev", "/servicii/diagnostic-functional"],
    ["/distonie-neurovegetativa-chisinau", "/vsd-distoniya-kishinev", "/servicii/consultatii-neurologice"],
    ["/cartografierea-creierului-chisinau", "/kartirovanie-mozga-kishinev", "/servicii/diagnostic-functional"],
    ["/nevralgie-trigemen-pareza-faciala-chisinau", "/nevralgiya-troynichnogo-nerva-kishinev", "/servicii/consultatii-neurologice"],
    ["/tunel-carpian-amorteli-maini-chisinau", "/tunnelnyy-sindrom-onemenie-ruk-kishinev", "/servicii/consultatii-neurologice"],
    ["/ticuri-nervoase-balbaiala-copii-chisinau", "/nervnye-tiki-zaikanie-detyam-kishinev", "/servicii/consultatii-neurologice"],
    ["/reabilitare-medicala-neurologica-chisinau", "/meditsinskaya-reabilitatsiya-kishinev", "/servicii/fizioterapie-si-reabilitare"],
    ["/scolioza-postura-copii-adulti-chisinau", "/lechenie-skolioza-kishinev", "/servicii/fizioterapie-si-reabilitare"],
    ["/pinten-calcanean-artroza-chisinau", "/pyatochnaya-shpora-artroz-kishinev", "/servicii/fizioterapie-si-reabilitare"],
    ["/boala-parkinson-tremor-memorie-chisinau", "/bolezn-parkinsona-tremor-kishinev", "/servicii/consultatii-neurologice"],
    ["/recuperare-postoperatorie-coloana-chisinau", "/reabilitatsiya-posle-operatsii-pozvonochnika-kishinev", "/servicii/consultatii-neurochirurgie"],
    ["/protruzie-discala-l4-l5-l5-s1-stenoza-chisinau", "/protruziya-diska-l4-l5-l5-s1-stenoz-kishinev", "/servicii/consultatii-neurochirurgie"],
    ["/tinitus-zgomote-urechi-spondiloza-cervicala-chisinau", "/shum-v-ushah-tinnitus-spondilez-kishinev", "/servicii/consultatii-neurologice"],
    ["/cefalee-tensiune-vs-migrena-chisinau", "/golovnaya-bol-napryazheniya-vs-migren-kishinev", "/servicii/consultatii-neurologice"],
    ["/ghid-diagnostic-functional-eeg-reg-amp-chisinau", "/gid-funktsionalnaya-diagnostika-eeg-reg-amp-kishinev", "/servicii/diagnostic-functional"],
    ["/nevralgie-intercostala-durere-omoplati-chisinau", "/mezhrebernaya-nevralgiya-bol-mezhdu-lopatkami-kishinev", "/servicii/consultatii-neurologice"],
    ["/hernie-cervicala-c5-c6-dureri-gat-ameteli-chisinau", "/gryzha-sheynogo-otdela-c5-c6-golovokruzhenie-kishinev", "/servicii/consultatii-neurochirurgie"],
    ["/amorteli-picioare-polineuropatie-chisinau", "/onemenie-nog-polineyropatiya-kishinev", "/servicii/consultatii-neurologice"],
    ["/contraindicatii-fizioterapie-siguranta-chisinau", "/protivopokazaniya-k-fizioterapii-kishinev", "/servicii/fizioterapie-si-reabilitare"],
    ["/enurezis-nocturn-copii-neuropediatru-chisinau", "/enurez-u-detey-nevrolog-kishinev", "/servicii/consultatii-neurologice"],
    ["/spasmofilie-crize-hiperexcitabilitate-chisinau", "/spazmofiliya-sudorogi-nevrolog-kishinev", "/servicii/consultatii-neurologice"],
    ["/recuperare-comotie-cerebrala-traumatism-chisinau", "/sotryasenie-mozga-vosstanovlenie-kishinev", "/servicii/consultatii-neurochirurgie"],
    ["/intarziere-vorbire-copii-neuropediatru-chisinau", "/zaderzhka-rechi-u-rebenka-nevrolog-kishinev", "/servicii/consultatii-neurologice"],
    ["/convulsii-febrile-copii-eeg-neuropediatru-chisinau", "/febrilnye-sudorogi-u-detey-eeg-kishinev", "/servicii/consultatii-neurologice"]
  ];
  for (const [roRoute, ruRoute, fallback] of pairedLocalRoutes) {
    if (currentCleanPath === roRoute || currentCleanPath === ruRoute) {
      if (target === "ro") return roRoute;
      if (target === "ru") return `/ru${ruRoute}`;
      return withLang(fallback, target);
    }
  }  // Article slugs differ by language; use the translated listing until pairs are curated.
  if (currentCleanPath.startsWith("/blog/")) return withLang("/blog/" + getTranslatedBlogSlug(currentCleanPath.split("/")[2], target), target);
  return withLang(currentCleanPath, target);
 };
 const link = (path: string) => withLang(path, lang);
 const isActive = (path: string) => {
  const clean = cleanPath(pathname);
  if (path === "/") return clean === "/";
  return clean === path || clean.startsWith(`${path}/`);
 };

 useEffect(() => {
  if (!open) return;
  const onKeyDown = (e: KeyboardEvent) => {
   if (e.key === "Escape") setOpen(false);
  };
  window.addEventListener("keydown", onKeyDown);
  return () => window.removeEventListener("keydown", onKeyDown);
 }, [open]);

 const navItems = [
  { href: link("/"), label: text.home, active: isActive("/") },
  { href: link("/despre-noi"), label: text.about, active: isActive("/despre-noi") },
  { href: link("/servicii"), label: text.services, active: isActive("/servicii") },
  { href: link("/aplicatii"), label: text.apps, active: isActive("/aplicatii") },
  { href: link("/utilaj"), label: text.equipment || "Equipment", active: isActive("/utilaj") },
  { href: link("/preturi"), label: text.prices, active: isActive("/preturi") },
  { href: link("/galerie"), label: text.gallery, active: isActive("/galerie") },
  { href: link("/blog"), label: text.blog, active: isActive("/blog") },
  { href: link("/intrebari"), label: text.questions || "Întrebări", active: isActive("/intrebari") },
  { href: link("/contact"), label: text.contact, active: isActive("/contact") }
 ];

 return (
  <header className={styles.header}>
   <div className="rm-header-row">
    <nav className={styles.nav}>
     <Link href={link("/")} className={styles.logo} aria-label={site.name} onClick={close}>
      <img src="/images/logo.webp" alt="REVIMED Centrul Medical" width={120} height={32} decoding="async" />
     </Link>

     <button
      className={styles.toggle}
      type="button"
      aria-label={lang === "en" ? "Menu" : lang === "ru" ? "Меню" : lang === "ua" ? "Меню" : "Meniu"}
      aria-expanded={open}
      onClick={() => setOpen((v) => !v)}
     >
      <span></span>
      <span></span>
      <span></span>
     </button>

     <div className={styles.links}>
      {navItems.map((item) => (
       <Link key={item.href} className={item.active ? styles.active : ""} href={item.href} onClick={close}>
        {item.label}
       </Link>
      ))}
     </div>
    </nav>

    <div className="rm-header-langs">
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
    </div>
   </div>

   {open &&
    typeof document !== "undefined" &&
    createPortal(
     <>
      <button
       type="button"
       className="rm-mobile-glass-backdrop"
       aria-label={lang === "en" ? "Close menu" : lang === "ru" ? "Закрыть меню" : lang === "ua" ? "Закрити меню" : "Închide meniul"}
       onClick={close}
      />
      <div className="rm-mobile-glass-drawer" role="dialog" aria-label="Menu">
       {navItems.map((item) => (
        <Link
         key={item.href}
         href={item.href}
         className={`rm-mobile-glass-link ${item.active ? "is-active" : ""}`}
         onClick={close}
        >
         <span>{item.label}</span>
         <span aria-hidden="true">›</span>
        </Link>
       ))}
      </div>
     </>,
     document.body
    )}
  </header>
 );
}
