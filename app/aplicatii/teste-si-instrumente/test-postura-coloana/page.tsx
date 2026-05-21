import { makeAdvancedMetadata, appSeo } from "@/lib/seoAdvanced";
import RevimedSmartTool from "@/components/RevimedSmartTool";


export const metadata = makeAdvancedMetadata({
 lang: "ro",
 path: "/aplicatii/teste-si-instrumente/test-postura-coloana",
 title: appSeo["test-postura-coloana"]?.ro?.title || "Instrument medical educațional",
 description: appSeo["test-postura-coloana"]?.ro?.description || "Instrument medical educațional Revimed PLUS+ — instrument educațional pentru pacienți, cu rezultat orientativ și raport printabil pentru consultație.",
 keywords: appSeo["test-postura-coloana"]?.ro?.keywords || []
});

export default function Page() {
 return <RevimedSmartTool slug="test-postura-coloana" />;
}
