import { createElement } from "react";
import type { Metadata } from "next";
import { type Lang, withLang } from "@/lib/i18n";
import { site } from "@/lib/site";

export const siteUrl = site.url;

export const seoBase = {
 name: "Centrul Medical Revimed PLUS+",
 shortName: "Revimed PLUS+",
 url: siteUrl,
 logo: `${siteUrl}/images/logo.png`,
 image: `${siteUrl}${site.image}`,
 phone: "022 60 50 60",
 phone2: "+373 79 422 908",
 address: "Str. Mircea cel Bătrân 13/2",
 city: "Chișinău",
 country: "MD",
 languages: ["ro", "en", "ru", "ua"]
};

const langNames: Record<Lang, string> = {
 ro: "ro_MD",
 en: "en",
 ru: "ru",
 ua: "uk"
};

export function absoluteUrl(path = "/") {
 const clean = path.startsWith("/") ? path : `/${path}`;
 return `${siteUrl}${clean}`;
}

export function seoTitle(title: string) {
 return `${title} | Revimed PLUS+ Chișinău`;
}

export function makeMetadata({
 lang,
 path,
 title,
 description,
 image,
 localized = true
}: {
 lang: Lang;
 path: string;
 title: string;
 description: string;
 image?: string;
 localized?: boolean;
}): Metadata {
 const canonicalPath = `${withLang(path, lang).replace(/\/+$/, "")}/`;
 const canonical = absoluteUrl(canonicalPath);
 const ogImage = image?.startsWith("http") ? image : absoluteUrl(image || site.image);

 return {
  metadataBase: new URL(siteUrl),
  title: { absolute: seoTitle(title) },
  description,
  keywords: [
   "Revimed PLUS+",
   "centru medical Chișinău",
   "neurologie Chișinău",
   "neurochirurgie Chișinău",
   "recuperare medicală Chișinău",
   "fizioterapie Chișinău",
   "diagnostic funcțional Chișinău",
   "electroterapie Chișinău",
   "terapie balneară Chișinău"
  ],
  alternates: {
   canonical,
   languages: localized ? {
    ro: absoluteUrl(`${withLang(path, "ro").replace(/\/+$/, "")}/`),
    en: absoluteUrl(`${withLang(path, "en").replace(/\/+$/, "")}/`),
    ru: absoluteUrl(`${withLang(path, "ru").replace(/\/+$/, "")}/`),
    uk: absoluteUrl(`${withLang(path, "ua").replace(/\/+$/, "")}/`),
    "x-default": absoluteUrl(`${withLang(path, "ro").replace(/\/+$/, "")}/`)
   } : undefined
  },
  openGraph: {
   type: "website",
   locale: langNames[lang],
   url: canonical,
   siteName: seoBase.name,
   title: seoTitle(title),
   description,
   images: [
    {
     url: ogImage,
     width: 1200,
     height: 630,
     alt: title
    }
   ]
  },
  twitter: {
   card: "summary_large_image",
   title: seoTitle(title),
   description,
   images: [ogImage]
  },
  robots: {
   index: true,
   follow: true,
   googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1
   }
  }
 };
}

export function clinicJsonLd(_lang: Lang = "ro") {
 return {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${siteUrl}/#medical-clinic`,
  name: seoBase.name,
  url: siteUrl,
  logo: seoBase.logo,
  image: seoBase.image,
  telephone: [seoBase.phone, seoBase.phone2],
  address: {
   "@type": "PostalAddress",
   streetAddress: "Str. Mircea cel Bătrân 13/2",
   addressLocality: "Chișinău",
   addressRegion: "Chișinău",
   addressCountry: "MD"
  },
  medicalSpecialty: [
   "Neurology",
   "Neurosurgery",
   "Physiotherapy",
   "PhysicalTherapy",
   "Rehabilitation"
  ],
  availableLanguage: ["Romanian", "English", "Russian", "Ukrainian"],
  priceRange: "$$",
  sameAs: []
 };
}

export function websiteJsonLd() {
 return {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: seoBase.name,
  url: siteUrl
 };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
 return {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
   "@type": "ListItem",
   position: index + 1,
   name: item.name,
   item: absoluteUrl(item.path)
  }))
 };
}

export function serviceJsonLd({
 name,
 description,
 path,
 image
}: {
 name: string;
 description: string;
 path: string;
 image?: string;
}) {
 return {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name,
  description,
  image: absoluteUrl(image || "/images/medical-bg.jpg"),
  url: absoluteUrl(path),
  provider: {
   "@id": `${siteUrl}/#medical-clinic`
  }
 };
}

export function JsonLd({ data }: { data: unknown }) {
 return createElement("script", {
  type: "application/ld+json",
  dangerouslySetInnerHTML: {
   __html: JSON.stringify(data).replace(/</g, "\\u003c")
  }
 });
}
