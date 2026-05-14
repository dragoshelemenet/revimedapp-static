"use client";

import Link from "next/link";
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
  const link = (path: string) => withLang(path, lang);

  return (
    <header className="rmHeader">
      <div className="rmTop">
        <div className="rmShell">
          <span></span>
          <span className="langs">
            {languages.map((l) => (
              <Link
                key={l}
                href={withLang(currentCleanPath, l)}
                className={l === lang ? "langActive" : ""}
                onClick={close}
              >
                {langLabels[l]}
              </Link>
            ))}
          </span>
        </div>
      </div>

      <nav className="rmNav rmShell">
        <Link href={link("/")} className="rmLogo" aria-label={site.name} onClick={close}>
          <img src="/images/logo.png" alt="REVIMED" />
        </Link>

        <button
          className={open ? "hamburger active" : "hamburger"}
          type="button"
          aria-label="Meniu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={open ? "rmLinks mobileOpen" : "rmLinks"}>
          <Link href={link("/")} onClick={close}>{text.home}</Link>
          <Link href={link("/despre-noi")} onClick={close}>{text.about}</Link>
          <Link href={link("/servicii")} onClick={close}>{text.services}</Link>
          <Link href={link("/aplicatii")} onClick={close}>{text.apps}</Link>
          <Link href={link("/preturi")} onClick={close}>{text.prices}</Link>
          <Link href={link("/galerie")} onClick={close}>{text.gallery}</Link>
          <Link href={link("/blog")} onClick={close}>{text.blog}</Link>
          <Link href={link("/contact")} onClick={close}>{text.contact}</Link>
        </div>
      </nav>

      {open && <button className="menuBackdrop" aria-label="Închide meniul" onClick={close}></button>}
    </header>
  );
}
