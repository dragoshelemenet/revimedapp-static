import { sectionMetadata } from "@/lib/sectionMetadata";
import { PricesTemplate } from "@/lib/pageTemplates";
export const dynamic = "force-static";
export const metadata = sectionMetadata("ro", "/preturi");
export default function Page() {
 return <PricesTemplate lang="ro" />;
}
