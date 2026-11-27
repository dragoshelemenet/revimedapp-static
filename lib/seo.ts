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

const citySuffix: Record<Lang, string> = {
 ro: "Revimed PLUS+ Chișinău",
 en: "Revimed PLUS+ Moldova",
 ru: "Revimed PLUS+ Кишинёв",
 ua: "Revimed PLUS+ Кишинів"
};

const shortDescSuffix: Record<Lang, string> = {
 ro: ": Centrul Medical Revimed PLUS+ Chișinău (Ciocana), neurologie, neurochirurgie și recuperare medicală.",
 en: ": Revimed PLUS+ Medical Center Chișinău (Moldova), neurology, neurosurgery, and medical rehabilitation.",
 ru: ": Медицинский центр Revimed PLUS+ Кишинёв (Чеканы), неврология, нейрохирургия и физиотерапия.",
 ua: ": Медичний центр Revimed PLUS+ Кишинів (Чекани), неврологія, нейрохірургія та фізіотерапія."
};

function clampWords(text: string, maxLen: number) {
 const clean = text.replace(/\s+/g, " ").trim();
 if (clean.length <= maxLen) return clean;
 const cut = clean.slice(0, maxLen - 1);
 const lastSpace = cut.lastIndexOf(" ");
 return (lastSpace > maxLen * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[,:;—–|/-]+$/, "").trim() + "…";
}

export function seoTitle(title: string, lang: Lang = "ro") {
 const clean = title.replace(/\s*\|\s*Revimed PLUS\+(?:\s+(?:Chișinău|Chisinau|Moldova|Кишинёв|Кишинев|Кишинів))?\s*$/i, "").trim();
 const hasCity = /Chișinău|Chisinau|Moldova|Кишинёв|Кишинев|Кишинів/i.test(clean);
 const suffix = hasCity ? "Revimed PLUS+" : citySuffix[lang];
 const maxBase = Math.max(24, 62 - suffix.length - 3);
 let trimmedBase = (clean.length > maxBase ? clampWords(clean, maxBase).replace(/…$/, "") : clean);
 trimmedBase = trimmedBase
  .replace(/\s*(?:[,:;—–|/&+-]+|\b(?:Dr\.?|în|in|for|and|de|și|cu|la|din|pe|pentru|и|в|для|на|с|та|для))\s*$/gi, "")
  .replace(/\s*(?:[,:;—–|/&+-]+)\s*$/g, "")
  .trim();
 return `${trimmedBase} | ${suffix}`;
}

function normalizeDescription(description: string, lang: Lang) {
 const clean = description.replace(/\s+/g, " ").trim();
 if (clean.length < 90) {
  return clampWords(`${clean.replace(/\.$/, "")}${shortDescSuffix[lang]}`, 160);
 }
 if (clean.length > 165) {
  return clampWords(clean, 160);
 }
 return clean;
}

export function makeMetadata({
 lang,
 path,
 title,
 description,
 image,
 localized = true,
 alternatesLanguages
}: {
 lang: Lang;
 path: string;
 title: string;
 description: string;
 image?: string;
 localized?: boolean;
 alternatesLanguages?: Record<string, string>;
}): Metadata {
 const canonicalPath = `${withLang(path, lang).replace(/\/+$/, "")}/`;
 const canonical = absoluteUrl(canonicalPath);
 const ogImage = image?.startsWith("http") ? image : absoluteUrl(image || site.image);
 const fullTitle = seoTitle(title, lang);
 const cleanDesc = normalizeDescription(description, lang);

 return {
  metadataBase: new URL(siteUrl),
  title: { absolute: fullTitle },
  description: cleanDesc,
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
   types: { "application/rss+xml": absoluteUrl("/feed.xml") },
   languages: alternatesLanguages
    ? Object.fromEntries(Object.entries(alternatesLanguages).map(([k, v]) => [k, v.startsWith("http") ? v : absoluteUrl(v)]))
    : localized ? {
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
   title: fullTitle,
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
   title: fullTitle,
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

const clinicDescriptions: Record<Lang, string> = {
 ro: "Centrul Medical Revimed PLUS+ din Chișinău: neurologie, neurochirurgie, neuropediatrie, recuperare medicală, fizioterapie, kinetoterapie și medicină integrativă cu experiență clinică din 1991, condus de Dr. Igor Revenco.",
 en: "Revimed PLUS+ Medical Center in Chișinău, Moldova: neurology, neurosurgery, pediatric neurology, medical rehabilitation, physiotherapy, and integrative medicine since 1991, led by Dr. Igor Revenco.",
 ru: "Медицинский центр Revimed PLUS+ в Кишинёве: неврология, нейрохирургия, детская неврология, медицинская реабилитация, физиотерапия и интегративная медицина с 1991 года под руководством д-ра Игоря Ревенко.",
 ua: "Медичний центр Revimed PLUS+ у Кишиневі: неврологія, нейрохірургія, дитяча неврологія, медична реабілітація, фізіотерапія та інтегративна медицина з 1991 року під керівництвом д-ра Ігоря Ревенка."
};

export function clinicJsonLd(lang: Lang = "ro") {
 return {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${siteUrl}/#medical-clinic`,
  name: seoBase.name,
  alternateName: ["Revimed", "Revimed PLUS+", "Centrul Medical Revimed Chișinău"],
  description: clinicDescriptions[lang],
  url: siteUrl,
  logo: seoBase.logo,
  image: seoBase.image,
  telephone: [seoBase.phone, seoBase.phone2],
  address: {
   "@type": "PostalAddress",
   streetAddress: "Str. Mircea cel Bătrân 13/2",
   addressLocality: "Chișinău",
   addressRegion: "Chișinău",
   postalCode: "MD-2044",
   addressCountry: "MD"
  },
  geo: {
   "@type": "GeoCoordinates",
   latitude: 47.0477461,
   longitude: 28.8887469
  },
  hasMap: "https://www.google.com/maps/place/Centrul+Medical+Revimed/@47.0477461,28.8887469,17z",
  areaServed: [
   { "@type": "City", name: "Chișinău" },
   { "@type": "AdministrativeArea", name: "Sectorul Ciocana, Chișinău" },
   { "@type": "AdministrativeArea", name: "Sectorul Rîșcani, Chișinău" },
   { "@type": "AdministrativeArea", name: "Sectorul Botanica, Chișinău" },
   { "@type": "AdministrativeArea", name: "Sectorul Buiucani, Chișinău" },
   { "@type": "AdministrativeArea", name: "Sectorul Centru, Chișinău" },
   { "@type": "Country", name: "Republica Moldova" }
  ],
  knowsAbout: [
   "Neurologie Chișinău",
   "Neurochirurgie Chișinău",
   "Neuropediatrie",
   "Hernie de disc fără operație",
   "Terapia Electrosomn",
   "Electroencefalografie (EEG)",
   "Reoencefalografie (REG)",
   "Diagnostic neinvaziv AMP 117 indici",
   "Fizioterapie Amplipuls și Electroforeză",
   "Masaj terapeutic și Kinetoterapie",
   "Recuperare după AVC",
   "Tratament migrene și vertij",
   "EHO-Encefalografie (ECHO-EG)",
   "Electrospondilografie computerizată (ESG)",
   "Cartografierea creierului 3D",
   "Termalgometrie RUNO (sistem nervos vegetativ)",
   "Evaluare funcțională neuropsihologică și testare cognitivă MMPI",
   "Biofeedback și stimulare cerebrală audio-video AVS",
   "Terapie cu ultrasunete și electrostimulare musculară",
   "Sindrom piriform, sciatică și protruzii discale L4-L5 / L5-S1 / C5-C6",
   "Tensiune intracraniană și recuperare după comoție cerebrală",
   "Spasmofilie și sindromul picioarelor neliniștite",
   "ADHD, întârziere de vorbire, enurezis nocturn și convulsii febrile la copii"
  ],
  medicalSpecialty: [
   "Neurology",
   "Neurosurgery",
   "Pediatric",
   "Physiotherapy",
   "PhysicalTherapy",
   "Rehabilitation"
  ],
  founder: {
   "@id": `${siteUrl}/dr-igor-revenco/#physician`,
   "@type": "Physician",
   name: "Dr. Igor Revenco",
   jobTitle: "Medic Neuropediatru, Neurochirurg consultant",
   url: `${siteUrl}/dr-igor-revenco/`,
   alumniOf: {
    "@type": "EducationalOrganization",
    name: "Universitatea de Stat de Medicină și Farmacie „Nicolae Testemițanu” (USMF)"
   },
   memberOf: {
    "@type": "Organization",
    name: "European Association of Neurosurgical Societies (EANS)"
   },
   sameAs: [
    "https://orcid.org/0009-0005-9098-8175",
    "https://scholar.google.com/citations?user=UDE8BpcAAAAJ",
    "https://doi.org/10.5281/zenodo.24532588"
   ]
  },
  contactPoint: [
   {
    "@type": "ContactPoint",
    telephone: "+373-22-60-50-60",
    contactType: "appointments",
    areaServed: "MD",
    availableLanguage: ["Romanian", "English", "Russian", "Ukrainian"]
   },
   {
    "@type": "ContactPoint",
    telephone: "+373-79-422-908",
    contactType: "customer service",
    areaServed: "MD",
    availableLanguage: ["Romanian", "English", "Russian", "Ukrainian"]
   }
  ],
  aggregateRating: {
   "@type": "AggregateRating",
   ratingValue: "4.2",
   reviewCount: "98",
   bestRating: "5",
   worstRating: "1"
  },
  availableLanguage: ["Romanian", "English", "Russian", "Ukrainian"],
  openingHoursSpecification: [
   {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "15:00"
   }
  ],
  legalName: "S.R.L. REVIMED PLUS",
    taxID: "1011600011964",
    priceRange: "100 - 1600 MDL",
  sameAs: [
   "https://www.facebook.com/p/Centrul-Medical-REVIMED-100047070376925/",
   "https://www.google.com/maps/place/Centrul+Medical+Revimed/@47.0477461,28.8887469,17z",
   "https://www.youtube.com/@revimedpluschisinau",
   "https://www.youtube.com/channel/UCdQz5Tf3106Cnosp0SGbPfA"
  ]
 };
}

export function collectionPageJsonLd({
 name,
 description,
 path,
 items
}: {
 name: string;
 description: string;
 path: string;
 items: { name: string; url: string }[];
}) {
 return {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name,
  description,
  url: absoluteUrl(path),
  mainEntity: {
   "@type": "ItemList",
   numberOfItems: items.length,
   itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    url: item.url.startsWith("http") ? item.url : absoluteUrl(item.url)
   }))
  }
 };
}

export function websiteJsonLd() {
 return {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: seoBase.name,
  url: siteUrl,
  inLanguage: ["ro", "en", "ru", "uk"],
  publisher: { "@id": `${siteUrl}/#medical-clinic` },
  creator: {
   "@type": "Organization",
   "@id": "https://wsod.cloud/#organization",
   name: "wsod.cloud",
   url: "https://wsod.cloud/",
   description: "Web Architecture, UI/UX Design, Full-Stack Development, Technical SEO & Generative Engine Optimization (GEO)"
  },
  sdPublisher: {
   "@id": "https://wsod.cloud/#organization"
  }
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
  "@id": `${absoluteUrl(path)}#procedure`,
  name,
  description,
  image: absoluteUrl(image || "/images/medical-bg.webp"),
  url: absoluteUrl(path),
  isPartOf: { "@id": `${siteUrl}/#website` },
  performer: { "@id": `${siteUrl}/dr-igor-revenco/#physician` },
  provider: {
   "@id": `${siteUrl}/#medical-clinic`
  }
 };
}

export function medicalDeviceJsonLd({
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
  "@type": "MedicalDevice",
  "@id": `${absoluteUrl(path)}#device`,
  name,
  description,
  image: absoluteUrl(image || "/images/medical-bg.webp"),
  url: absoluteUrl(path),
  isPartOf: { "@id": `${siteUrl}/#website` },
  owner: {
   "@id": `${siteUrl}/#medical-clinic`
  }
 };
}

export function offerCatalogJsonLd({
 name,
 description,
 path,
 items
}: {
 name: string;
 description: string;
 path: string;
 items: { name: string; category: string; price: string }[];
}) {
 const offers = items
  .map((item) => {
   const numeric = Number(String(item.price || "").replace(/[^\d.]/g, ""));
   if (!numeric || !Number.isFinite(numeric)) return null;
   return {
    "@type": "Offer",
    price: String(numeric),
    priceCurrency: "MDL",
    availability: "https://schema.org/InStock",
    category: item.category,
    itemOffered: {
     "@type": "MedicalProcedure",
     name: item.name
    }
   };
  })
  .filter(Boolean);

 return {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name,
  description,
  url: absoluteUrl(path),
  about: { "@id": `${siteUrl}/#medical-clinic` },
  mainEntity: {
   "@type": "OfferCatalog",
   name,
   numberOfItems: offers.length,
   itemListElement: offers
  }
 };
}

export function aboutPageJsonLd({
 name,
 description,
 path
}: {
 name: string;
 description: string;
 path: string;
}) {
 return {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name,
  description,
  url: absoluteUrl(path),
  mainEntity: { "@id": `${siteUrl}/#medical-clinic` }
 };
}

export function contactPageJsonLd({
 name,
 description,
 path
}: {
 name: string;
 description: string;
 path: string;
}) {
 return {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name,
  description,
  url: absoluteUrl(path),
  mainEntity: { "@id": `${siteUrl}/#medical-clinic` }
 };
}

export function galleryPageJsonLd({
 name,
 description,
 path,
 images,
 videos
}: {
 name: string;
 description: string;
 path: string;
 images: { url: string; caption: string }[];
 videos: { title: string; embedUrl: string }[];
}) {
 return {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name,
  description,
  url: absoluteUrl(path),
  publisher: { "@id": `${siteUrl}/#medical-clinic` },
  associatedMedia: images.map((img) => ({
   "@type": "ImageObject",
   contentUrl: img.url.startsWith("http") ? img.url : absoluteUrl(img.url),
   caption: img.caption
  })),
  video: videos.map((vid) => {
   const ytMatch = String(vid.embedUrl || "").match(/embed\/([A-Za-z0-9_-]{6,})/);
   const ytId = ytMatch ? ytMatch[1] : null;
   return {
    "@type": "VideoObject",
    name: vid.title,
    description: `${vid.title}: ${seoBase.name} (Chișinău, Ciocana, Dr. Igor Revenco)`,
    embedUrl: vid.embedUrl,
    thumbnailUrl: ytId ? `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg` : seoBase.image,
    uploadDate: "2024-03-15",
    creator: {
     "@type": "Person",
     "@id": `${siteUrl}/dr-igor-revenco/#physician`,
     name: "Dr. Igor Revenco",
     url: `${siteUrl}/dr-igor-revenco/`
    },
    publisher: { "@id": `${siteUrl}/#medical-clinic` }
   };
  })
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
