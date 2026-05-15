import { makeAdvancedMetadata, appSeo } from "@/lib/seoAdvanced";
import RevimedSmartTool from "@/components/RevimedSmartTool";


export const metadata = makeAdvancedMetadata({
  lang: "ro",
  path: "/aplicatii/teste-si-instrumente/pregatire-consultatie",
  title: appSeo["pregatire-consultatie"]?.ro?.title || "Pregătire pentru consultație",
  description: appSeo["pregatire-consultatie"]?.ro?.description || "Pregătire pentru consultație Revimed PLUS+ — instrument educațional pentru pacienți, cu rezultat orientativ și raport printabil pentru consultație.",
  keywords: appSeo["pregatire-consultatie"]?.ro?.keywords || []
});

export default function Page() {
  return <RevimedSmartTool slug="pregatire-consultatie" />;
}
