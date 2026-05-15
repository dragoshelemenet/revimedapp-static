import { makeAdvancedMetadata, appSeo } from "@/lib/seoAdvanced";
import { notFound } from "next/navigation";
import { isLang } from "@/lib/i18n";
import Original from "@/app/aplicatii/teste-si-instrumente/calculator-recuperare-personalizata/page";


export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const safeLang = (["ro", "en", "ru", "ua"].includes(lang) ? lang : "ro") as any;

  return makeAdvancedMetadata({
    lang: safeLang,
    path: "/aplicatii/teste-si-instrumente/calculator-recuperare-personalizata",
    title: appSeo["calculator-recuperare-personalizata"]?.[safeLang]?.title || "Calculator recuperare personalizată",
    description: appSeo["calculator-recuperare-personalizata"]?.[safeLang]?.description || "Calculator recuperare personalizată Revimed PLUS+ — instrument educațional pentru pacienți, cu rezultat orientativ și raport printabil pentru consultație.",
    keywords: appSeo["calculator-recuperare-personalizata"]?.[safeLang]?.keywords || []
  });
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang) || lang === "ro") notFound();
  return <Original />;
}
