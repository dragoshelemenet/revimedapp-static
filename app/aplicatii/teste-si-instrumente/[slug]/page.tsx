import { toolMetadata } from "@/lib/toolMetadata";
import { isLang } from "@/lib/i18n";
import { notFound } from "next/navigation";
import RevimedSmartTool from "@/components/RevimedSmartTool";
export const dynamicParams = false;

const staticAppSlugs = ['test-postura-coloana', 'monitor-dureri-spate', 'test-risc-cadere-echilibru', 'planner-exercitii-zilnice', 'test-stres-somn-respiratie', 'pregatire-consultatie'];

export function generateStaticParams() {
  return staticAppSlugs.map((slug) => ({ slug }));
}




const tools = [
  "test-postura-coloana",
  "monitor-dureri-spate",
  "test-risc-cadere-echilibru",
  "planner-exercitii-zilnice",
  "test-stres-somn-respiratie",
  "pregatire-consultatie",
] as const;

type ToolSlug = typeof tools[number];


type Props = { params: Promise<{ slug: string }> };

function isToolSlug(slug: string): slug is ToolSlug {
  return tools.includes(slug as ToolSlug);
}


export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!isToolSlug(slug)) notFound();

  return <RevimedSmartTool slug={slug as any} />;
}

export async function generateMetadata({ params }: Props) {
 const { slug } = await params;
 if (!isToolSlug(slug)) notFound();
 return toolMetadata("ro", slug);
}
