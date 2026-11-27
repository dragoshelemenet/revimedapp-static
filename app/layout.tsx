import type { Metadata, Viewport } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import "../styles/foundation.css";
import "../styles/global.css";
import "../styles/liquid-glass.css";

export const viewport: Viewport = {
 themeColor: "#0b8fd8"
};

const sourceSans = Source_Sans_3({
 subsets: ["latin", "latin-ext", "cyrillic"],
 weight: ["400", "600", "700"],
 variable: "--font-body",
 display: "swap",
 preload: false
});

const montserrat = Montserrat({
 subsets: ["latin", "latin-ext", "cyrillic"],
 weight: ["600", "700", "800"],
 variable: "--font-display",
 display: "swap",
 preload: false
});
import { JsonLd, clinicJsonLd, websiteJsonLd } from "@/lib/seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlassSheenController from "../components/GlassSheenController";
import ScrollToTopOnRoute from "../components/ScrollToTopOnRoute";
import ScrollExperience from "../components/ScrollExperience";

import MobileCallBar from "../components/MobileCallBar";
import CookieConsentAndMeta from "../components/CookieConsentAndMeta";
import { site } from "../lib/site";


export const metadata: Metadata = {
 metadataBase: new URL(site.url),
 title: {
  default: site.name,
  template: `%s | ${site.shortName}`
 },
 description: site.description,
 keywords: [
  "Revimed",
  "centru medical Chișinău",
  "neurolog Chișinău",
  "neurochirurg Chișinău",
  "fizioterapie Chișinău",
  "reabilitare medicală Chișinău"
 ],
 openGraph: {
  type: "website",
  locale: "ro_MD",
  url: site.url,
  siteName: site.name,
  title: site.name,
  description: site.description,
  images: [{ url: site.image, width: 1200, height: 630, alt: site.name }]
 },
 twitter: {
  card: "summary_large_image",
  title: site.name,
  description: site.description,
  images: [site.image]
 },
 icons: {
  icon: "/favicon.svg",
  shortcut: "/favicon.svg",
  apple: "/favicon.svg"
 },
 alternates: {
  types: {
   "application/rss+xml": `${site.url}/feed.xml`
  }
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

export default function RootLayout({ children }: { children: React.ReactNode }) {

 return (
  <html lang="ro" className={`${sourceSans.variable} ${montserrat.variable}`} suppressHydrationWarning>
   <head><link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs Knowledge Base" /></head>
    <body>
    <a href="#main-content" className="rm-skip-link">Skip to content</a>
    <div className="rm-top-scroll-veil" aria-hidden="true" />
    <Header />
    <main id="main-content"><JsonLd data={clinicJsonLd("ro")} />
    <JsonLd data={websiteJsonLd()} />
    {children}</main>
    <Footer />
    <MobileCallBar />
    <CookieConsentAndMeta />
    <GlassSheenController />
    <ScrollToTopOnRoute />
    <ScrollExperience />

      </body>
  </html>
 );
}