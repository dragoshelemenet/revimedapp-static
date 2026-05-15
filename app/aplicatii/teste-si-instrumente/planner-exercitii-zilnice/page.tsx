import { makeAdvancedMetadata, appSeo } from "@/lib/seoAdvanced";
import RevimedSmartTool from "@/components/RevimedSmartTool";


export const metadata = makeAdvancedMetadata({
  lang: "ro",
  path: "/aplicatii/teste-si-instrumente/planner-exercitii-zilnice",
  title: appSeo["planner-exercitii-zilnice"]?.ro?.title || "Planner exerciții zilnice",
  description: appSeo["planner-exercitii-zilnice"]?.ro?.description || "Planner exerciții zilnice Revimed PLUS+ — instrument educațional pentru pacienți, cu rezultat orientativ și raport printabil pentru consultație.",
  keywords: appSeo["planner-exercitii-zilnice"]?.ro?.keywords || []
});

export default function Page() {
  return <RevimedSmartTool slug="planner-exercitii-zilnice" />;
}
