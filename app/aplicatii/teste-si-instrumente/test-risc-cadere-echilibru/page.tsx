import { makeAdvancedMetadata, appSeo } from "@/lib/seoAdvanced";
import RevimedSmartTool from "@/components/RevimedSmartTool";


export const metadata = makeAdvancedMetadata({
 lang: "ro",
 path: "/aplicatii/teste-si-instrumente/test-risc-cadere-echilibru",
 title: appSeo["test-risc-cadere-echilibru"]?.ro?.title || "Test risc cădere și echilibru",
 description: appSeo["test-risc-cadere-echilibru"]?.ro?.description || "Test risc cădere și echilibru Revimed PLUS+ — instrument educațional pentru pacienți, cu rezultat orientativ și raport printabil pentru consultație.",
 keywords: appSeo["test-risc-cadere-echilibru"]?.ro?.keywords || []
});

export default function Page() {
 return <RevimedSmartTool slug="test-risc-cadere-echilibru" />;
}
