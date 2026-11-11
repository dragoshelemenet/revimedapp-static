import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EquipmentDetailPage } from "@/components/EquipmentPages";
import { getLocalizedEquipmentItems, getLocalizedEquipmentItem } from "@/lib/equipmentLocalized";
import { normalizeLang, equipmentText } from "@/lib/equipment";
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
  return makeMetadata({ lang: safeLang, path: "/utilaj/" + slug, title: item.title, description: item.short });
}

export default async function Page({ params }: Props) {
  const { lang, slug } = await params;
  const safeLang = normalizeLang(lang);
  if (!getLocalizedEquipmentItem(safeLang, slug)) notFound();
  return <EquipmentDetailPage lang={safeLang} slug={slug} />;
}
