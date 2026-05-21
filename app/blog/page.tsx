import { BlogTemplate } from "@/lib/pageTemplates";
export const dynamic = "force-dynamic";
export const metadata = { title: "Blog" };
export default function Page() {
 return <BlogTemplate lang="ro" />;
}
