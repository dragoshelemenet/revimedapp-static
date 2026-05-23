import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EquipmentDetailPage } from "@/components/EquipmentPages";
import { getLocalizedEquipmentItem } from "@/lib/equipmentLocalized";
import { normalizeLang } from "@/lib/equipment";

type Props = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const safeLang = normalizeLang(lang);
  const item = getLocalizedEquipmentItem(safeLang, slug);
  if (!item) return {};

  const suffix =
    safeLang === "en" ? "Medical equipment Revimed PLUS+" :
    safeLang === "ru" ? "Медицинское оборудование Revimed PLUS+" :
    safeLang === "ua" ? "Медичне обладнання Revimed PLUS+" :
    "Utilaj medical Revimed PLUS+";

  return {
    title: `${item.title} | ${suffix}`,
    description: item.short,
  };
}

export default async function Page({ params }: Props) {
  const { lang, slug } = await params;
  const safeLang = normalizeLang(lang);
  if (!getLocalizedEquipmentItem(safeLang, slug)) notFound();
  return <EquipmentDetailPage lang={safeLang} slug={slug} />;
}
