import type { Metadata } from "next";
import "../styles/global.css";
import { JsonLd, clinicJsonLd, websiteJsonLd } from "@/lib/seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LanguageFlagOverlay from "../components/LanguageFlagOverlay";
import RouteTransition from "../components/RouteTransition";
import MobileCallBar from "../components/MobileCallBar";
import { site } from "../lib/site";
import "../lib/seedLanguages";

import { JsonLdBlock, localMedicalBusinessJsonLd } from "@/lib/seoAdvanced";
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
 const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: site.name,
  url: site.url,
  image: `${site.url}${site.image}`,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  address: {
   "@type": "PostalAddress",
   streetAddress: "Str. Mircea cel Bătrân 13/2",
   addressLocality: "Chișinău",
   addressRegion: "Ciocana",
   addressCountry: "MD"
  },
  openingHours: "Mo-Fr 09:00-19:00",
  medicalSpecialty: ["Neurology", "Neurosurgery", "PhysicalTherapy", "Rehabilitation"]
 };

 return (
  <html lang="ro">
   <body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <RouteTransition />
    <Header />
    <LanguageFlagOverlay />
    <main><JsonLd data={clinicJsonLd("ro")} />
    <JsonLd data={websiteJsonLd()} />
    <JsonLdBlock data={localMedicalBusinessJsonLd()} />
    {children}</main>
    <Footer />
    <MobileCallBar />
   </body>
  </html>
 );
}
