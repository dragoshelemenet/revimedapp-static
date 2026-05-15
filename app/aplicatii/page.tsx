import { makeMetadata } from "@/lib/seo";
import { AppsTemplate } from "@/lib/pageTemplates";

export const metadata = makeMetadata({
  lang: "ro",
  path: "/aplicatii",
  title: "Aplicații și teste medicale educaționale",
  description: "Teste și instrumente educaționale Revimed PLUS+ pentru postură, dureri de spate, echilibru, respirație, somn și pregătire pentru consultație."
});

export const dynamic = "force-dynamic";
export default function Page() {
  return <AppsTemplate lang="ro" />;
}
