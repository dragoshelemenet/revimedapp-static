import type { Metadata } from "next";
import { EquipmentListPage } from "@/components/EquipmentPages";
import { equipmentText, normalizeLang } from "@/lib/equipment";
export const dynamicParams = false;

const staticLangs = ["en", "ru", "ua"];

export function generateStaticParams() {
  return staticLangs.map((lang) => ({ lang }));
}



type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const safeLang = normalizeLang(lang);
  return {
    title: equipmentText[safeLang].title,
    description: equipmentText[safeLang].subtitle,
  };
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return <EquipmentListPage lang={lang} />;
}
