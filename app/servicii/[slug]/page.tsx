import type { Metadata } from "next";
import { makeMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/ServicesPages";
import { getLocalizedService } from "@/lib/servicesLocalized";
export const dynamicParams = false;

const staticServiceSlugs = ['consultatii-neurologice', 'consultatii-neurochirurgie', 'fizioterapie-si-reabilitare', 'diagnostic-functional', 'terapie-balneara', 'electroterapie'];

export function generateStaticParams() {
  return staticServiceSlugs.map((slug) => ({ slug }));
}









type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getLocalizedService("ro", slug);
  if (!item) return {};
  return makeMetadata({ lang: "ro", path: "/servicii/" + slug, title: item.title, description: item.short });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!getLocalizedService("ro", slug)) notFound();
  return <ServiceDetailPage lang="ro" slug={slug} />;
}
