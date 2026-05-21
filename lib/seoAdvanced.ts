import { createElement } from "react";
import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";

export const SEO_SITE_URL = (
 process.env.NEXT_PUBLIC_SITE_URL ||
 process.env.SITE_URL ||
 "https://revimed.site"
).replace(/\/$/, "");

export const SEO_LANGS: Lang[] = ["ro", "en", "ru", "ua"];

export const SEO_LANG_PREFIX: Record<Lang, string> = {
 ro: "",
 en: "/en",
 ru: "/ru",
 ua: "/ua"
};

export function seoUrl(path = "/", lang: Lang = "ro") {
 const cleanPath = path.startsWith("/") ? path : `/${path}`;
 const prefix = SEO_LANG_PREFIX[lang] || "";
 const full = `${SEO_SITE_URL}${prefix}${cleanPath}`;
 return full.replace(/([^:]\/)\/+/g, "$1");
}

export function seoImage(path = "/images/hero-bg.jpg") {
 if (path.startsWith("http")) return path;
 return `${SEO_SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const clinicSeo = {
 name: "Centrul Medical Revimed PLUS+",
 brand: "Revimed PLUS+",
 city: "Chișinău",
 area: "Ciocana",
 country: "Moldova",
 address: "Str. Mircea cel Bătrân 13/2",
 phone: "022 60 50 60",
 phone2: "+373 79 422 908",
 hours: "Luni–Vineri: 09:00–15:00"
};

export const pageSeoText: Record<Lang, Record<string, { title: string; description: string }>> = {
 ro: {
  home: {
   title: "Centru medical neurologie, recuperare și fizioterapie în Chișinău",
   description: "Centrul Medical Revimed PLUS+ din Chișinău, Ciocana: consultații neurologice, neurochirurgie, recuperare medicală, fizioterapie, diagnostic funcțional, electroterapie și terapie balneară."
  },
  services: {
   title: "Servicii medicale Revimed PLUS+ în Chișinău",
   description: "Servicii medicale pentru neurologie, neurochirurgie, fizioterapie, reabilitare, diagnostic funcțional, electroterapie și terapie balneară în Chișinău."
  },
  prices: {
   title: "Prețuri consultații și recuperare medicală Chișinău",
   description: "Prețuri orientative pentru consultații neurologice, neurochirurgie, fizioterapie, recuperare, diagnostic funcțional și terapii la Revimed PLUS+ Chișinău."
  },
  contact: {
   title: "Contact Revimed PLUS+ Chișinău",
   description: "Programează o consultație la Revimed PLUS+ Chișinău, Ciocana. Telefon, adresă, program de lucru și hartă."
  },
  apps: {
   title: "Teste și instrumente medicale educaționale",
   description: "Teste educaționale Revimed PLUS+ pentru postură, dureri de spate, echilibru, respirație, somn, screening neurologic și pregătire pentru consultație."
  }
 },
 en: {
  home: {
   title: "Medical center for neurology, recovery and physiotherapy in Chisinau",
   description: "Revimed PLUS+ Medical Center in Chisinau: neurology consultations, neurosurgery, medical recovery, physiotherapy, functional diagnostics, electrotherapy and balneotherapy."
  },
  services: {
   title: "Medical services at Revimed PLUS+ Chisinau",
   description: "Medical services for neurology, neurosurgery, physiotherapy, rehabilitation, functional diagnostics, electrotherapy and balneotherapy in Chisinau."
  },
  prices: {
   title: "Prices for consultations and medical recovery in Chisinau",
   description: "Indicative prices for neurology, neurosurgery, physiotherapy, recovery, functional diagnostics and therapies at Revimed PLUS+ Chisinau."
  },
  contact: {
   title: "Contact Revimed PLUS+ Chisinau",
   description: "Book a consultation at Revimed PLUS+ Chisinau. Phone, address, opening hours and map."
  },
  apps: {
   title: "Educational medical tests and tools",
   description: "Revimed PLUS+ educational tools for posture, back pain, balance, breathing, sleep, neurological screening and consultation preparation."
  }
 },
 ru: {
  home: {
   title: "Медицинский центр неврологии, восстановления и физиотерапии в Кишиневе",
   description: "Медицинский центр Revimed PLUS+ в Кишиневе: неврология, нейрохирургия, восстановление, физиотерапия, функциональная диагностика, электротерапия и бальнеотерапия."
  },
  services: {
   title: "Медицинские услуги Revimed PLUS+ в Кишиневе",
   description: "Услуги неврологии, нейрохирургии, физиотерапии, реабилитации, функциональной диагностики, электротерапии и бальнеотерапии в Кишиневе."
  },
  prices: {
   title: "Цены на консультации и восстановление в Кишиневе",
   description: "Ориентировочные цены на консультации, физиотерапию, восстановление, диагностику и процедуры в Revimed PLUS+ Кишинев."
  },
  contact: {
   title: "Контакты Revimed PLUS+ Кишинев",
   description: "Запишитесь на консультацию в Revimed PLUS+ Кишинев. Телефон, адрес, часы работы и карта."
  },
  apps: {
   title: "Образовательные медицинские тесты и инструменты",
   description: "Инструменты Revimed PLUS+ для осанки, боли в спине, равновесия, дыхания, сна, неврологического скрининга и подготовки к консультации."
  }
 },
 ua: {
  home: {
   title: "Медичний центр неврології, відновлення та фізіотерапії в Кишиневі",
   description: "Медичний центр Revimed PLUS+ у Кишиневі: неврологія, нейрохірургія, відновлення, фізіотерапія, функціональна діагностика, електротерапія та бальнеотерапія."
  },
  services: {
   title: "Медичні послуги Revimed PLUS+ у Кишиневі",
   description: "Послуги неврології, нейрохірургії, фізіотерапії, реабілітації, функціональної діагностики, електротерапії та бальнеотерапії у Кишиневі."
  },
  prices: {
   title: "Ціни на консультації та відновлення у Кишиневі",
   description: "Орієнтовні ціни на консультації, фізіотерапію, відновлення, діагностику та процедури в Revimed PLUS+ Кишинів."
  },
  contact: {
   title: "Контакти Revimed PLUS+ Кишинів",
   description: "Запишіться на консультацію в Revimed PLUS+ Кишинів. Телефон, адреса, години роботи та карта."
  },
  apps: {
   title: "Освітні медичні тести та інструменти",
   description: "Інструменти Revimed PLUS+ для постави, болю в спині, рівноваги, дихання, сну, неврологічного скринінгу та підготовки до консультації."
  }
 }
};

export const serviceSeo: Record<string, Record<Lang, { title: string; description: string; keywords: string[]; faq: { q: string; a: string }[] }>> = {
 "consultatii-neurologice": {
  ro: {
   title: "Consultații neurologice în Chișinău",
   description: "Consultații neurologice la Revimed PLUS+ Chișinău pentru dureri de cap, amețeli, amorțeli, tulburări de mers, dureri de spate cu simptome neurologice și evaluare sistem nervos.",
   keywords: ["neurolog Chișinău", "consultație neurologică Chișinău", "amețeli", "amorțeli", "dureri de cap", "Revimed PLUS+"],
   faq: [
    { q: "Când este recomandată consultația neurologică?", a: "Consultația este recomandată pentru dureri de cap persistente, amețeli, amorțeli, slăbiciune, tulburări de mers, dureri care coboară pe braț sau picior și simptome neurologice repetate." },
    { q: "Ce trebuie să aduc la neurolog?", a: "Este util să aduci investigații anterioare, lista medicamentelor, analize și un rezumat al simptomelor: când au început, ce le agravează și ce le ameliorează." }
   ]
  },
  en: {
   title: "Neurology consultations in Chisinau",
   description: "Neurology consultations at Revimed PLUS+ Chisinau for headaches, dizziness, numbness, walking problems, back pain with neurological symptoms and nervous system assessment.",
   keywords: ["neurologist Chisinau", "neurology consultation", "dizziness", "numbness", "headache"],
   faq: [
    { q: "When should I see a neurologist?", a: "A neurology consultation is recommended for persistent headaches, dizziness, numbness, weakness, walking problems and pain radiating to an arm or leg." },
    { q: "What should I bring?", a: "Bring previous investigations, medication list and a clear symptom summary." }
   ]
  },
  ru: {
   title: "Консультация невролога в Кишиневе",
   description: "Консультации невролога в Revimed PLUS+ Кишинев при головных болях, головокружении, онемении, нарушении ходьбы и неврологических симптомах.",
   keywords: ["невролог Кишинев", "консультация невролога", "головокружение", "онемение"],
   faq: [
    { q: "Когда нужна консультация невролога?", a: "При стойкой головной боли, головокружении, онемении, слабости, нарушении ходьбы и боли, отдающей в руку или ногу." },
    { q: "Что взять с собой?", a: "Возьмите обследования, список лекарств и краткое описание симптомов." }
   ]
  },
  ua: {
   title: "Консультація невролога в Кишиневі",
   description: "Консультації невролога в Revimed PLUS+ Кишинів при головному болю, запамороченні, онімінні, порушенні ходи та неврологічних симптомах.",
   keywords: ["невролог Кишинів", "консультація невролога", "запаморочення", "оніміння"],
   faq: [
    { q: "Коли потрібна консультація невролога?", a: "При стійкому головному болю, запамороченні, онімінні, слабкості, порушенні ходи та болю, що віддає в руку або ногу." },
    { q: "Що взяти з собою?", a: "Візьміть обстеження, список ліків і короткий опис симптомів." }
   ]
  }
 },
 "consultatii-neurochirurgie": {
  ro: {
   title: "Consultații neurochirurgie în Chișinău",
   description: "Consultații neurochirurgicale pentru evaluarea patologiilor coloanei, herniilor de disc, durerilor radiculare, amorțelilor și indicațiilor pentru tratament conservator sau chirurgical.",
   keywords: ["neurochirurg Chișinău", "consultație neurochirurgie", "hernie de disc", "coloană", "durere radiculară"],
   faq: [
    { q: "Când merg la neurochirurg?", a: "Când există dureri de coloană cu amorțeală, slăbiciune, durere pe braț sau picior, hernie de disc sau recomandare pentru evaluare chirurgicală." },
    { q: "Neurochirurgia înseamnă automat operație?", a: "Nu. Consultația clarifică opțiunile: tratament conservator, recuperare, monitorizare sau, doar dacă este necesar, intervenție." }
   ]
  },
  en: {
   title: "Neurosurgery consultation in Chisinau",
   description: "Neurosurgery consultations for spine conditions, disc herniation, radicular pain, numbness and evaluation of conservative or surgical treatment options.",
   keywords: ["neurosurgeon Chisinau", "disc herniation", "spine consultation"],
   faq: [
    { q: "When should I see a neurosurgeon?", a: "For spine pain with numbness, weakness, radiating arm/leg pain, disc herniation or surgical evaluation." },
    { q: "Does neurosurgery consultation always mean surgery?", a: "No. It helps choose conservative treatment, recovery, monitoring or surgery only when necessary." }
   ]
  },
  ru: {
   title: "Консультация нейрохирурга в Кишиневе",
   description: "Консультации нейрохирурга при заболеваниях позвоночника, грыже диска, корешковой боли, онемении и выборе лечения.",
   keywords: ["нейрохирург Кишинев", "грыжа диска", "позвоночник"],
   faq: [
    { q: "Когда обращаться к нейрохирургу?", a: "При боли в позвоночнике с онемением, слабостью, болью в руку/ногу, грыже диска или необходимости хирургической оценки." },
    { q: "Это обязательно операция?", a: "Нет. Консультация помогает выбрать консервативное лечение, восстановление, наблюдение или операцию только при необходимости." }
   ]
  },
  ua: {
   title: "Консультація нейрохірурга в Кишиневі",
   description: "Консультації нейрохірурга при хворобах хребта, грижі диска, корінцевому болю, онімінні та виборі лікування.",
   keywords: ["нейрохірург Кишинів", "грижа диска", "хребет"],
   faq: [
    { q: "Коли звертатися до нейрохірурга?", a: "При болю в хребті з онімінням, слабкістю, болем у руку/ногу, грижі диска або потребі хірургічної оцінки." },
    { q: "Це обов’язково операція?", a: "Ні. Консультація допомагає обрати консервативне лікування, відновлення, спостереження або операцію лише за потреби." }
   ]
  }
 }
};

export const appSeo: Record<string, Record<Lang, { title: string; description: string; keywords: string[] }>> = {
 "test-postura-coloana": {
  ro: {
   title: "Test postură și coloană online",
   description: "Test educațional pentru postură, coloană, dureri cervicale/lombare, amorțeli și obiceiuri de lucru. Primești raport printabil pentru medic.",
   keywords: ["test postură", "test coloană", "dureri lombare", "dureri cervicale", "Chișinău"]
  },
  en: {
   title: "Online posture and spine test",
   description: "Educational test for posture, spine, neck/lower back pain, numbness and work habits. Printable report for the doctor.",
   keywords: ["posture test", "spine test", "back pain"]
  },
  ru: {
   title: "Онлайн тест осанки и позвоночника",
   description: "Образовательный тест для осанки, позвоночника, боли в шее/пояснице и привычек работы. Печатный отчет для врача.",
   keywords: ["тест осанки", "позвоночник", "боль в спине"]
  },
  ua: {
   title: "Онлайн тест постави та хребта",
   description: "Освітній тест для постави, хребта, болю в шиї/попереку та робочих звичок. Друкований звіт для лікаря.",
   keywords: ["тест постави", "хребет", "біль у спині"]
  }
 },
 "monitor-dureri-spate": {
  ro: {
   title: "Monitor dureri de spate online",
   description: "Instrument educațional pentru monitorizarea durerilor de spate, factorilor agravanți, limitărilor și semnalelor de alarmă. Raport printabil pentru consultație.",
   keywords: ["monitor dureri spate", "dureri de spate Chișinău", "durere lombară"]
  },
  en: {
   title: "Online back pain monitor",
   description: "Educational tool for tracking back pain, aggravating factors, limitations and warning signs. Printable consultation report.",
   keywords: ["back pain monitor", "lower back pain"]
  },
  ru: {
   title: "Онлайн монитор боли в спине",
   description: "Инструмент для отслеживания боли в спине, факторов ухудшения, ограничений и тревожных признаков.",
   keywords: ["боль в спине", "монитор боли"]
  },
  ua: {
   title: "Онлайн монітор болю в спині",
   description: "Інструмент для відстеження болю в спині, факторів погіршення, обмежень та тривожних ознак.",
   keywords: ["біль у спині", "монітор болю"]
  }
 }
};

export function makeAdvancedMetadata({
 lang,
 path,
 title,
 description,
 image = "/images/hero-bg.jpg",
 keywords = []
}: {
 lang: Lang;
 path: string;
 title: string;
 description: string;
 image?: string;
 keywords?: string[];
}): Metadata {
 const canonical = seoUrl(path, lang);
 const languages: Record<string, string> = {
  ro: seoUrl(path, "ro"),
  en: seoUrl(path, "en"),
  ru: seoUrl(path, "ru"),
  uk: seoUrl(path, "ua"),
  "x-default": seoUrl(path, "ro")
 };

 return {
  metadataBase: new URL(SEO_SITE_URL),
  title: `${title} | Revimed PLUS+`,
  description,
  keywords: [
   ...keywords,
   "Revimed PLUS+",
   "Centrul Medical Revimed",
   "Chișinău",
   "Ciocana",
   "neurologie Chișinău",
   "recuperare medicală Chișinău",
   "fizioterapie Chișinău"
  ],
  alternates: {
   canonical,
   languages
  },
  openGraph: {
   type: "website",
   url: canonical,
   title: `${title} | Revimed PLUS+`,
   description,
   siteName: clinicSeo.name,
   images: [
    {
     url: seoImage(image),
     width: 1200,
     height: 630,
     alt: title
    }
   ]
  },
  twitter: {
   card: "summary_large_image",
   title: `${title} | Revimed PLUS+`,
   description,
   images: [seoImage(image)]
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

export function faqJsonLd(faq: { q: string; a: string }[]) {
 return {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
   "@type": "Question",
   name: item.q,
   acceptedAnswer: {
    "@type": "Answer",
    text: item.a
   }
  }))
 };
}

export function localMedicalBusinessJsonLd() {
 return {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "LocalBusiness"],
  "@id": `${SEO_SITE_URL}/#revimed-plus`,
  name: clinicSeo.name,
  alternateName: clinicSeo.brand,
  url: SEO_SITE_URL,
  image: seoImage("/images/hero-bg.jpg"),
  logo: seoImage("/images/logo.png"),
  telephone: [clinicSeo.phone, clinicSeo.phone2],
  priceRange: "$$",
  address: {
   "@type": "PostalAddress",
   streetAddress: "Str. Mircea cel Bătrân 13/2",
   addressLocality: "Chișinău",
   addressRegion: "Chișinău",
   postalCode: "",
   addressCountry: "MD"
  },
  areaServed: [
   "Chișinău",
   "Ciocana",
   "Moldova"
  ],
  openingHours: "Mo-Fr 09:00-19:00",
  medicalSpecialty: [
   "Neurology",
   "Neurosurgery",
   "Physical therapy",
   "Rehabilitation",
   "Functional diagnostics"
  ],
  availableLanguage: ["Romanian", "English", "Russian", "Ukrainian"],
  hasMap: `${SEO_SITE_URL}/contact`
 };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
 return {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
   "@type": "ListItem",
   position: index + 1,
   name: item.name,
   item: item.url.startsWith("http") ? item.url : `${SEO_SITE_URL}${item.url}`
  }))
 };
}

export function medicalWebPageJsonLd({
 title,
 description,
 path,
 lang
}: {
 title: string;
 description: string;
 path: string;
 lang: Lang;
}) {
 return {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: title,
  description,
  url: seoUrl(path, lang),
  inLanguage: lang === "ua" ? "uk" : lang,
  about: {
   "@id": `${SEO_SITE_URL}/#revimed-plus`
  },
  publisher: {
   "@id": `${SEO_SITE_URL}/#revimed-plus`
  }
 };
}

export function JsonLdBlock({ data }: { data: any }) {
 return createElement("script", {
  type: "application/ld+json",
  dangerouslySetInnerHTML: {
   __html: JSON.stringify(data).replace(/</g, "\u003c")
  }
 });
}
