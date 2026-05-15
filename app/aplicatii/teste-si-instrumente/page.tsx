import { makeMetadata } from "@/lib/seo";
import { AppsTemplate } from "@/lib/pageTemplates";

export const metadata = makeMetadata({
  lang: "ro",
  path: "/aplicatii/teste-si-instrumente",
  title: "Teste și instrumente medicale",
  description: "Instrumente educaționale pentru pacienți: Ayurveda Dosha, screening neurologic, respirație terapeutică, postură, echilibru, dureri de spate și pregătire consultație."
});

export const dynamic = "force-dynamic";
export default function Page() {
  return <AppsTemplate lang="ro" />;
}
