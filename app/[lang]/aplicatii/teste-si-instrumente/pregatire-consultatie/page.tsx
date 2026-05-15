import { makeAdvancedMetadata, appSeo } from "@/lib/seoAdvanced";
import { notFound } from "next/navigation";
import { isLang, type Lang } from "@/lib/i18n";
import Original from "@/app/aplicatii/teste-si-instrumente/pregatire-consultatie/page";


export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const safeLang = (["ro", "en", "ru", "ua"].includes(lang) ? lang : "ro") as Lang;

  return makeAdvancedMetadata({
    lang: safeLang,
    path: "/aplicatii/teste-si-instrumente/pregatire-consultatie",
    title: appSeo["pregatire-consultatie"]?.[safeLang]?.title || "Pregătire pentru consultație",
    description: appSeo["pregatire-consultatie"]?.[safeLang]?.description || "Pregătire pentru consultație Revimed PLUS+ — instrument educațional pentru pacienți, cu rezultat orientativ și raport printabil pentru consultație.",
    keywords: appSeo["pregatire-consultatie"]?.[safeLang]?.keywords || []
  });
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang) || lang === "ro") notFound();
  return <Original />;
}
