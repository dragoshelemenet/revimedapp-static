import { localizedToolMetadata } from "@/lib/toolMetadata";
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
 return localizedToolMetadata(params, "test-ayurveda-dosha");
}
export default function ToolLayout({ children }: { children: React.ReactNode }) { return children; }
