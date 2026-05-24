import { BlogTemplate } from "@/lib/pageTemplates";
export const dynamic = "force-static";
export const metadata = { title: "Blog" };
export default function Page() {
 return <BlogTemplate lang="ro" />;
}
