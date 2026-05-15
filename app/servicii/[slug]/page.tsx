import { makeAdvancedMetadata, serviceSeo, faqJsonLd, breadcrumbJsonLd, medicalWebPageJsonLd, JsonLdBlock } from "@/lib/seoAdvanced";
import { notFound } from "next/navigation";
import { ServiceTemplate } from "@/lib/pageTemplates";
import { cleanServiceText, getServiceSeo } from "@/lib/serviceSeoText";
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const seo = serviceSeo[slug]?.ro;

  return makeAdvancedMetadata({
    lang: "ro",
    path: `/servicii/${slug}`,
    title: seo?.title || "Servicii medicale Revimed PLUS+",
    description: seo?.description || "Servicii medicale Revimed PLUS+ Chișinău: neurologie, neurochirurgie, fizioterapie, recuperare și diagnostic.",
    keywords: seo?.keywords || []
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = ServiceTemplate({ lang: "ro", slug });
  if (!page) notFound();
  return page;
}
