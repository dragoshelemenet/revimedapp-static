import { makeAdvancedMetadata, appSeo } from "@/lib/seoAdvanced";
import RevimedSmartTool from "@/components/RevimedSmartTool";


export const metadata = makeAdvancedMetadata({
  lang: "ro",
  path: "/aplicatii/teste-si-instrumente/test-stres-somn-respiratie",
  title: appSeo["test-stres-somn-respiratie"]?.ro?.title || "Test stres, somn și respirație",
  description: appSeo["test-stres-somn-respiratie"]?.ro?.description || "Test stres, somn și respirație Revimed PLUS+ — instrument educațional pentru pacienți, cu rezultat orientativ și raport printabil pentru consultație.",
  keywords: appSeo["test-stres-somn-respiratie"]?.ro?.keywords || []
});

export default function Page() {
  return <RevimedSmartTool slug="test-stres-somn-respiratie" />;
}
