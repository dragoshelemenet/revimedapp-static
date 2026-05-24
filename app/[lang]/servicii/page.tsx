import type { Metadata } from "next";
import { ServicesListPage } from "@/components/ServicesPages";
import { normalizeLang, servicesText } from "@/lib/services";
const staticLangs = ["en", "ru", "ua"];

export function generateStaticParams() {
  return staticLangs.map((lang) => ({ lang }));
}



type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const safeLang = normalizeLang(lang);
  return {
    title: servicesText[safeLang].title,
    description: servicesText[safeLang].subtitle,
  };
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return <ServicesListPage lang={lang} />;
}
