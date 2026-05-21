import { makeAdvancedMetadata, appSeo } from "@/lib/seoAdvanced";
import { notFound } from "next/navigation";
import { isLang, type Lang } from "@/lib/i18n";
import Original from "@/app/aplicatii/teste-si-instrumente/respiratie-terapeutica/page";


export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 const safeLang = (["ro", "en", "ru", "ua"].includes(lang) ? lang : "ro") as Lang;

 return makeAdvancedMetadata({
  lang: safeLang,
  path: "/aplicatii/teste-si-instrumente/respiratie-terapeutica",
  title: appSeo["respiratie-terapeutica"]?.[safeLang]?.title || "Respirație terapeutică",
  description: appSeo["respiratie-terapeutica"]?.[safeLang]?.description || "Respirație terapeutică Revimed PLUS+ — instrument educațional pentru pacienți, cu rezultat orientativ și raport printabil pentru consultație.",
  keywords: appSeo["respiratie-terapeutica"]?.[safeLang]?.keywords || []
 });
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
 const { lang } = await params;
 if (!isLang(lang) || lang === "ro") notFound();
 return <Original />;
}
