import type { Metadata } from "next";
import { makeMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { EquipmentDetailPage } from "@/components/EquipmentPages";
import { getLocalizedEquipmentItems, getLocalizedEquipmentItem } from "@/lib/equipmentLocalized";
export const dynamicParams = false;


export function generateStaticParams() {
  return getLocalizedEquipmentItems("ro").map(({ slug }) => ({ slug }));
}





type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getLocalizedEquipmentItem("ro", slug);
  if (!item) return {};
  return makeMetadata({ lang: "ro", path: "/utilaj/" + slug, title: item.title, description: item.short });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!getLocalizedEquipmentItem("ro", slug)) notFound();
  return <EquipmentDetailPage lang="ro" slug={slug} />;
}
