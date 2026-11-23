"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

type Lang = "ro" | "en" | "ru" | "ua";

const facebookUrl = "https://www.facebook.com/p/Centrul-Medical-REVIMED-100047070376925/";

const footerText: Record<Lang, {
  tagline: string;
  rights: string;
  credit: string;
  schedule: string;
  useful: string;
  follow: string;
  hours: string;
  address: string;
  legalNotice: string;
  links: Record<string, string>;
}> = {
  ro: {
    tagline: "Neurologie, neurochirurgie, recuperare medicală și fizioterapie în Chișinău.",
    rights: "Toate drepturile rezervate.",
    credit: "Creare site, UI/UX & SEO realizat de",
    schedule: "Program & Contact",
    useful: "Navigare rapidă",
    follow: "Facebook",
    hours: site.hours,
    address: site.address,
    legalNotice: "Conținut exclusiv informativ — nu înlocuiește consultația medicală și nu garantează rezultate clinice. Prețurile sunt orientative (nu constituie ofertă publică). În urgențe medicale apelați 112.",
    links: {
      home: "Acasă",
      about: "Despre Noi",
      services: "Servicii",
      prices: "Prețuri",
      tools: "Teste și Instrumente",
      contact: "Contact",
      terms: "Termeni și Condiții",
      cookies: "Cookies"
    }
  },
  en: {
    tagline: "Neurology, neurosurgery, medical rehabilitation, and physiotherapy in Chișinău.",
    rights: "All rights reserved.",
    credit: "Website creation, UI/UX & SEO by",
    schedule: "Hours & Contact",
    useful: "Quick Links",
    follow: "Facebook",
    hours: "Monday–Friday: 09:00–15:00",
    address: "Mircea cel Bătrân St. 13/2",
    legalNotice: "Informational content only — does not replace medical consultation or guarantee clinical outcomes. Prices are indicative (not a binding public offer). For medical emergencies call 112.",
    links: {
      home: "Home",
      about: "About",
      services: "Services",
      prices: "Prices",
      tools: "Tests & Tools",
      contact: "Contact",
      terms: "Terms & Conditions",
      cookies: "Cookies"
    }
  },
  ru: {
    tagline: "Неврология, нейрохирургия, медицинская реабилитация и физиотерапия в Кишинёве.",
    rights: "Все права защищены.",
    credit: "Создание сайта, UI/UX и SEO от",
    schedule: "График и контакты",
    useful: "Навигация",
    follow: "Facebook",
    hours: "Понедельник–Пятница: 09:00–15:00",
    address: "ул. Мирча чел Бэтрын 13/2",
    legalNotice: "Информация носит исключительно ознакомительный характер — не заменяет консультацию врача и не является гарантией результата. Цены ориентировочные (не публичная оферта). В экстренных случаях звоните 112.",
    links: {
      home: "Главная",
      about: "О нас",
      services: "Услуги",
      prices: "Цены",
      tools: "Тесты и инструменты",
      contact: "Контакты",
      terms: "Условия использования",
      cookies: "Cookies"
    }
  },
  ua: {
    tagline: "Неврологія, нейрохірургія, медична реабілітація та фізіотерапія в Кишиневі.",
    rights: "Усі права захищені.",
    credit: "Створення сайту, UI/UX та SEO від",
    schedule: "Графік і контакти",
    useful: "Навігація",
    follow: "Facebook",
    hours: "Понеділок–П’ятниця: 09:00–15:00",
    address: "вул. Мірча чел Бетрин 13/2",
    legalNotice: "Інформація має виключно ознайомчий характер — не замінює консультацію лікаря та не гарантує клінічного результату. Ціни орієнтовні (не є публічною офертою). У невідкладних випадках телефонуйте 112.",
    links: {
      home: "Головна",
      about: "Про нас",
      services: "Послуги",
      prices: "Ціни",
      tools: "Тести та інструменти",
      contact: "Контакти",
      terms: "Умови використання",
      cookies: "Cookies"
    }
  }
};

function getLang(pathname: string | null): Lang {
  const first = (pathname || "").split("/").filter(Boolean)[0];
  return first === "en" || first === "ru" || first === "ua" ? first : "ro";
}

function withLang(path: string, lang: Lang) {
  return lang === "ro" ? path : `/${lang}${path}`;
}

export default function Footer() {
  const pathname = usePathname();
  const lang = getLang(pathname);
  const text = footerText[lang];

  return (
    <footer className="rmFooter">
      <div className="rmShell">
        <div className="rm-footer-glass">
          <div className="rm-footer-top">
            <div className="rm-footer-brand">
              <img src="/images/logo.webp" alt="REVIMED Centrul Medical" className="footerLogo" width={136} height={36} loading="lazy" decoding="async" />
              <p className="rm-footer-tagline">{text.tagline}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                <a className="rm-footer-social-pill" href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook Revimed PLUS+">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.4H7.5v3.2h2.7V22h3.3z" />
                  </svg>
                  <span>{text.follow}</span>
                </a>
                <a className="rm-footer-social-pill" href="https://www.youtube.com/@revimedpluschisinau" target="_blank" rel="noopener noreferrer" aria-label="YouTube Revimed PLUS+">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
                  </svg>
                  <span>YouTube</span>
                </a>
              </div>
            </div>

            <div className="rm-footer-col">
              <h3>{text.schedule}</h3>
              <ul className="rm-footer-meta">
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  <span>{text.address}</span>
                </li>
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  <span>{text.hours}</span>
                </li>
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6.2 6.2l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2z" />
                  </svg>
                  <a href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a>
                </li>
              </ul>
            </div>

            <div className="rm-footer-col">
              <h3>{text.useful}</h3>
              <nav className="rm-footer-nav" aria-label={text.useful}>
                <Link href={withLang("/", lang)}>{text.links.home}</Link>
                <Link href={withLang("/despre-noi", lang)}>{text.links.about}</Link>
                <Link href={withLang("/servicii", lang)}>{text.links.services}</Link>
                <Link href={withLang("/preturi", lang)}>{text.links.prices}</Link>
                <Link href={withLang("/aplicatii", lang)}>{text.links.tools}</Link>
                <Link href={withLang("/contact", lang)}>{text.links.contact}</Link>
                {lang === "ro" && (
                  <>
                    <Link href="/neurolog-chisinau/">Neurolog Chișinău</Link>
                    <Link href="/neurochirurg-chisinau/">Neurochirurg Chișinău</Link>
                    <Link href="/fizioterapie-chisinau/">Fizioterapie Chișinău</Link>
                    <Link href="/eeg-chisinau/">EEG Chișinău</Link>
                  </>
                )}
                {lang === "ru" && (
                  <>
                    <Link href="/ru/nevrolog-kishinev/">Невролог Кишинёв</Link>
                    <Link href="/ru/neyrohirurg-kishinev/">Нейрохирург Кишинёв</Link>
                    <Link href="/ru/fizioterapiya-kishinev/">Физиотерапия Кишинёв</Link>
                    <Link href="/ru/eeg-kishinev/">ЭЭГ Кишинёв</Link>
                  </>
                )}
              </nav>
            </div>
          </div>

          <p className="rm-footer-disclaimer" style={{ margin: "14px 0 0", paddingTop: 12, borderTop: "1px solid rgba(15, 23, 42, 0.08)", fontSize: "0.78rem", lineHeight: 1.5, color: "#475569", textAlign: "center" }}>{text.legalNotice}</p>
          <div className="rm-footer-bottom">
            <span>© {new Date().getFullYear()} Centrul Medical Revimed PLUS+. {text.rights}</span>
            <a
              className="rm-footer-credit"
              href="https://wsod.cloud"
              target="_blank"
              rel="noopener noreferrer"
            >
              {text.credit} <strong>wsod.cloud</strong>
            </a>
            <div className="rm-footer-legal">
              <Link href="/termeni-si-conditii">{text.links.terms}</Link>
              <Link href="/cookies">{text.links.cookies}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
