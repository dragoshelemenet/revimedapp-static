import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EquipmentDetailPage } from "@/components/EquipmentPages";
import { getLocalizedEquipmentItems, getLocalizedEquipmentItem } from "@/lib/equipmentLocalized";
import { getEquipmentSeo } from "@/lib/equipmentSeo";
import { normalizeLang } from "@/lib/equipment";
import { makeMetadata } from "@/lib/seo";
export const dynamicParams = false;

const staticLangs = ['en', 'ru', 'ua'];

export function generateStaticParams() {
  return staticLangs.flatMap((lang) => getLocalizedEquipmentItems(lang).map(({ slug }) => ({ lang, slug })));
}






type Props = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const safeLang = normalizeLang(lang);
  const item = getLocalizedEquipmentItem(safeLang, slug);
  if (!item) return {};
  const seo = getEquipmentSeo(slug, safeLang);
  const cityLabel = safeLang === "ru" ? "Кишинёв" : safeLang === "ua" ? "Кишинів" : "Chișinău";
  return makeMetadata({
    lang: safeLang,
    path: "/utilaj/" + slug,
    title: `${item.title} (${item.category}) ${cityLabel}`,
    description: seo?.seoDescription || item.short,
    image: seo?.image
  });
}

export default async function Page({ params }: Props) {
  const { lang, slug } = await params;
  const safeLang = normalizeLang(lang);
  if (!getLocalizedEquipmentItem(safeLang, slug)) notFound();
  return <EquipmentDetailPage lang={safeLang} slug={slug} />;
}
