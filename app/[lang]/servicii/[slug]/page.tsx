import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/ServicesPages";
import { getLocalizedService } from "@/lib/servicesLocalized";
import { normalizeLang } from "@/lib/services";
const staticLangs = ['en', 'ru', 'ua'];
const staticServiceSlugs = ['consultatii-neurologice', 'consultatii-neurochirurgicale', 'fizioterapie-si-reabilitare', 'diagnostic-functional', 'terapie-balneara', 'electroterapie'];

export function generateStaticParams() {
  return staticLangs.flatMap((lang) => staticServiceSlugs.map((slug) => ({ lang, slug })));
}










type Props = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const safeLang = normalizeLang(lang);
  const item = getLocalizedService(safeLang, slug);
  if (!item) return {};
  const suffix =
    safeLang === "en" ? "Medical services Revimed PLUS+" :
    safeLang === "ru" ? "Медицинские услуги Revimed PLUS+" :
    safeLang === "ua" ? "Медичні послуги Revimed PLUS+" :
    "Servicii medicale Revimed PLUS+";

  return {
    title: `${item.title} | ${suffix}`,
    description: item.short,
  };
}

export default async function Page({ params }: Props) {
  const { lang, slug } = await params;
  const safeLang = normalizeLang(lang);
  if (!getLocalizedService(safeLang, slug)) notFound();
  return <ServiceDetailPage lang={safeLang} slug={slug} />;
}
