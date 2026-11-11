import { sectionMetadata } from "@/lib/sectionMetadata";
import { ContactTemplate } from "@/lib/pageTemplates";
export const dynamic = "force-static";
export const metadata = sectionMetadata("ro", "/contact");
export default function Page() {
 return <ContactTemplate lang="ro" />;
}
