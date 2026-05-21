import { makeAdvancedMetadata, appSeo } from "@/lib/seoAdvanced";
import RevimedSmartTool from "@/components/RevimedSmartTool";


export const metadata = makeAdvancedMetadata({
 lang: "ro",
 path: "/aplicatii/teste-si-instrumente/monitor-dureri-spate",
 title: appSeo["monitor-dureri-spate"]?.ro?.title || "Instrument medical educațional",
 description: appSeo["monitor-dureri-spate"]?.ro?.description || "Instrument medical educațional Revimed PLUS+ — instrument educațional pentru pacienți, cu rezultat orientativ și raport printabil pentru consultație.",
 keywords: appSeo["monitor-dureri-spate"]?.ro?.keywords || []
});

export default function Page() {
 return <RevimedSmartTool slug="monitor-dureri-spate" />;
}
