import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "../styles/foundation.css";
import "../styles/global.css";
import "../styles/liquid-glass.css";

const inter = Inter({
 subsets: ["latin", "latin-ext", "cyrillic"],
 weight: ["400", "500", "600", "700"],
 variable: "--font-body",
 display: "swap"
});

const manrope = Manrope({
 subsets: ["latin", "latin-ext", "cyrillic"],
 weight: ["600", "700", "800"],
 variable: "--font-display",
 display: "swap"
});
import { JsonLd, clinicJsonLd, websiteJsonLd } from "@/lib/seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LanguageFlagOverlay from "../components/LanguageFlagOverlay";
import GlassSheenController from "../components/GlassSheenController";

import MobileCallBar from "../components/MobileCallBar";
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
  <html lang="ro" className={`${inter.variable} ${manrope.variable}`} suppressHydrationWarning>
   <body>
    <a href="#main-content" className="rm-skip-link">Skip to content</a>
    <div className="rm-top-scroll-veil" aria-hidden="true" />
    <Header />
    <main id="main-content"><JsonLd data={clinicJsonLd("ro")} />
    <JsonLd data={websiteJsonLd()} />
    {children}</main>
    <Footer />
    <MobileCallBar />
    <GlassSheenController />

      </body>
  </html>
 );
}