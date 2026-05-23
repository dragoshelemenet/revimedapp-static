import type { Metadata } from "next";
import { EquipmentListPage } from "@/components/EquipmentPages";
import { equipmentText, normalizeLang } from "@/lib/equipment";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const safeLang = normalizeLang(lang);
  return {
    title: equipmentText[safeLang].seoTitle,
    description: equipmentText[safeLang].seoDescription,
  };
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return <EquipmentListPage lang={lang} />;
}
