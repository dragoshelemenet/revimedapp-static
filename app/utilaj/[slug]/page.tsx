import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EquipmentDetailPage } from "@/components/EquipmentPages";
import { getEquipmentItem } from "@/lib/equipment";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getEquipmentItem(slug);
  if (!item) return {};
  return {
    title: `${item.title} | Utilaj medical Revimed PLUS+`,
    description: item.short,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!getEquipmentItem(slug)) notFound();
  return <EquipmentDetailPage lang="ro" slug={slug} />;
}
