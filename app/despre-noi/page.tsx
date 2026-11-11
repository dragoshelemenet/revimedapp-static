import { sectionMetadata } from "@/lib/sectionMetadata";
import { AboutTemplate } from "@/lib/pageTemplates";
export const dynamic = "force-static";
export const metadata = sectionMetadata("ro", "/despre-noi");
export default function Page() {
 return <AboutTemplate lang="ro" />;
}
