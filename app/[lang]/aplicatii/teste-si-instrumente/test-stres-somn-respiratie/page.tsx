import { makeAdvancedMetadata, appSeo } from "@/lib/seoAdvanced";
import { notFound } from "next/navigation";
import { isLang, type Lang } from "@/lib/i18n";
import Original from "@/app/aplicatii/teste-si-instrumente/test-stres-somn-respiratie/page";


export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const safeLang = (["ro", "en", "ru", "ua"].includes(lang) ? lang : "ro") as Lang;

  return makeAdvancedMetadata({
    lang: safeLang,
    path: "/aplicatii/teste-si-instrumente/test-stres-somn-respiratie",
    title: appSeo["test-stres-somn-respiratie"]?.[safeLang]?.title || "Test stres, somn și respirație",
    description: appSeo["test-stres-somn-respiratie"]?.[safeLang]?.description || "Test stres, somn și respirație Revimed PLUS+ — instrument educațional pentru pacienți, cu rezultat orientativ și raport printabil pentru consultație.",
    keywords: appSeo["test-stres-somn-respiratie"]?.[safeLang]?.keywords || []
  });
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang) || lang === "ro") notFound();
  return <Original />;
}
