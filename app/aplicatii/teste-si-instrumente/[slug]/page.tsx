import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RevimedSmartTool from "@/components/RevimedSmartTool";
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

const toolTitles: Record<ToolSlug, string> = {
  "test-postura-coloana": "Test postură și coloană",
  "monitor-dureri-spate": "Monitor dureri de spate",
  "test-risc-cadere-echilibru": "Test risc cădere și echilibru",
  "planner-exercitii-zilnice": "Planner exerciții zilnice",
  "test-stres-somn-respiratie": "Test stres, somn și respirație",
  "pregatire-consultatie": "Pregătire pentru consultație",
};

type Props = { params: Promise<{ slug: string }> };

function isToolSlug(slug: string): slug is ToolSlug {
  return tools.includes(slug as ToolSlug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isToolSlug(slug)) return {};
  return {
    title: `${toolTitles[slug]} | Aplicații Revimed PLUS+`,
    description: "Instrument educațional Revimed PLUS+ pentru pacienți.",
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!isToolSlug(slug)) notFound();

  return <RevimedSmartTool slug={slug as any} />;
}
