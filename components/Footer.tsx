"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import IconVisual from "@/components/IconVisual";

type Lang = "ro" | "en" | "ru" | "ua";

const facebookUrl = "https://www.facebook.com/p/Centrul-Medical-REVIMED-100047070376925/";

const footerText: Record<Lang, {
  rights: string;
  schedule: string;
  useful: string;
  follow: string;
  hours: string;
  address: string;
  links: Record<string, string>;
}> = {
  ro: {
    rights: "Toate drepturile rezervate.",
    schedule: "Program de lucru:",
    useful: "Linkuri utile",
    follow: "Urmăriți-ne",
    hours: site.hours,
    address: site.address,
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
    rights: "All rights reserved.",
    schedule: "Working hours:",
    useful: "Useful links",
    follow: "Follow us",
    hours: "Monday–Friday: 09:00–15:00",
    address: "Mircea cel Bătrân St. 13/2",
    links: {
      home: "Home",
      about: "About",
      services: "Services",
      prices: "Prices",
      tools: "Tests and Tools",
      contact: "Contact",
      terms: "Terms and Conditions",
      cookies: "Cookies"
    }
  },
  ru: {
    rights: "Все права защищены.",
    schedule: "График работы:",
    useful: "Полезные ссылки",
    follow: "Мы в соцсетях",
    hours: "Понедельник–Пятница: 09:00–15:00",
    address: "ул. Мирча чел Бэтрын 13/2",
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
    rights: "Усі права захищені.",
    schedule: "Графік роботи:",
    useful: "Корисні посилання",
    follow: "Слідкуйте за нами",
    hours: "Понеділок–П’ятниця: 09:00–15:00",
    address: "вул. Мірча чел Бетрин 13/2",
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
      <div className="rmShell rmFooterGrid">
        <div className="footerBrand">
          <img src="/images/logo.png" alt="REVIMED" className="footerLogo" />
          <p>© {new Date().getFullYear()} Centrul Medical Revimed PLUS+. {text.rights}</p>
        </div>

        <div className="footerSchedule">
          <h3>{text.schedule}</h3>
          <p className="footerAddress">
            <IconVisual src="https://img.icons8.com/color/96/marker.png" alt="address" className="footerMiniIcon" />{" "}
            {text.address}
          </p>
          <p>{text.hours}</p>
          <p>{site.phone}</p>
        </div>

        <div className="footerLinks">
          <h3>{text.useful}</h3>
          <div>
            <Link href={withLang("/", lang)}>{text.links.home}</Link>
            <Link href={withLang("/despre-noi", lang)}>{text.links.about}</Link>
            <Link href={withLang("/servicii", lang)}>{text.links.services}</Link>
            <Link href={withLang("/preturi", lang)}>{text.links.prices}</Link>
            <Link href={withLang("/aplicatii/teste-si-instrumente", lang)}>{text.links.tools}</Link>
            <Link href={withLang("/contact", lang)}>{text.links.contact}</Link>
            <Link href={withLang("/termeni-si-conditii", lang)}>{text.links.terms}</Link>
            <Link href={withLang("/cookies", lang)}>{text.links.cookies}</Link>
          </div>
        </div>

        <div className="footerSocial">
          <h3>{text.follow}</h3>
          <a className="fbIcon8" href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook Revimed">
            <img src="https://img.icons8.com/color/96/facebook-new.png" alt="Facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
}
