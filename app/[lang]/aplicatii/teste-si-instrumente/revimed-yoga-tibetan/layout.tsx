import { localizedToolMetadata } from "@/lib/toolMetadata";
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
 return localizedToolMetadata(params, "revimed-yoga-tibetan");
}
export default function ToolLayout({ children }: { children: React.ReactNode }) { return children; }
