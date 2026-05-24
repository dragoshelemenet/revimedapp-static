import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EquipmentDetailPage } from "@/components/EquipmentPages";
import { getLocalizedEquipmentItem } from "@/lib/equipmentLocalized";
import { normalizeLang } from "@/lib/equipment";
export const dynamicParams = false;

const staticLangs = ['en', 'ru', 'ua'];
const staticEquipmentSlugs = ['aparat-amp', 'electrosomn-4t', 'electrosomn-5-es-10-5', 'electrosomn-3', 'etrans-1', 'etrans-2', 'etrans-3', 'transair-01p-transair-05', 'transair-01s-transair-04', 'transair-01s-transair-03', 'lenar', 'bi-lenar', 'mdm-k', 'mdm-101', 'mdm-2000', 'amplipuls-4', 'amplipuls-5', 'amplipuls-6', 'kandadzia-kang-da-jia-lqx-2000a', 'aparat-electroforeza-medicamentoasa', 'spectr-lc', 'lampa-solux', 'detox-spa-bio', 'spa-sy-f088-detox-bio-178', 'rheotest'];

export function generateStaticParams() {
  return staticLangs.flatMap((lang) => staticEquipmentSlugs.map((slug) => ({ lang, slug })));
}






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
