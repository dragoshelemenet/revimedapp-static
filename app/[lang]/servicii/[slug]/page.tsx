import { makeAdvancedMetadata, serviceSeo, faqJsonLd, breadcrumbJsonLd, medicalWebPageJsonLd, JsonLdBlock } from "@/lib/seoAdvanced";
import { notFound } from "next/navigation";
import { ServiceTemplate } from "@/lib/pageTemplates";
import { isLang, type Lang } from "@/lib/i18n";
import { cleanServiceText, getServiceSeo } from "@/lib/serviceSeoText";
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const safeLang = (["ro", "en", "ru", "ua"].includes(lang) ? lang : "ro") as any;
  const seo = serviceSeo[slug]?.[safeLang];

  return makeAdvancedMetadata({
    lang: safeLang,
    path: `/servicii/${slug}`,
    title: seo?.title || "Servicii medicale Revimed PLUS+",
    description: seo?.description || "Servicii medicale Revimed PLUS+ Chișinău: neurologie, neurochirurgie, fizioterapie, recuperare și diagnostic.",
    keywords: seo?.keywords || []
  });
}

export default async function Page({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isLang(lang) || lang === "ro") notFound();
  const page = ServiceTemplate({ lang: lang as Lang, slug });
  if (!page) notFound();
  return page;
}
