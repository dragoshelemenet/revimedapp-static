import { sectionMetadata } from "@/lib/sectionMetadata";
import { BlogTemplate } from "@/lib/pageTemplates";
export const dynamic = "force-static";
export const metadata = sectionMetadata("ro", "/blog");
export default function Page() {
 return <BlogTemplate lang="ro" />;
}
