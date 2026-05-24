import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EquipmentDetailPage } from "@/components/EquipmentPages";
import { getEquipmentItem } from "@/lib/equipment";
export const dynamicParams = false;

const staticEquipmentSlugs = ['aparat-amp', 'electrosomn-4t', 'electrosomn-5-es-10-5', 'electrosomn-3', 'etrans-1', 'etrans-2', 'etrans-3', 'transair-01p-transair-05', 'transair-01s-transair-04', 'transair-01s-transair-03', 'lenar', 'bi-lenar', 'mdm-k', 'mdm-101', 'mdm-2000', 'amplipuls-4', 'amplipuls-5', 'amplipuls-6', 'kandadzia-kang-da-jia-lqx-2000a', 'aparat-electroforeza-medicamentoasa', 'spectr-lc', 'lampa-solux', 'detox-spa-bio', 'spa-sy-f088-detox-bio-178', 'rheotest'];

export function generateStaticParams() {
  return staticEquipmentSlugs.map((slug) => ({ slug }));
}





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
