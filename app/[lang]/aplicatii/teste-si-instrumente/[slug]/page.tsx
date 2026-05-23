import { notFound } from "next/navigation";
import RevimedSmartTool from "@/components/RevimedSmartTool";

const tools = [
  "test-ayurveda-dosha",
  "respiratie-terapeutica",
  "screening-neurologic",
  "revimed-yoga-tibetan",
  "calculator-recuperare-personalizata",
  "test-postura-coloana",
  "monitor-dureri-spate",
  "test-risc-cadere-echilibru",
  "planner-exercitii-zilnice",
  "test-stres-somn-respiratie",
  "pregatire-consultatie",
] as const;

type ToolSlug = typeof tools[number];

type Props = { params: Promise<{ lang: string; slug: string }> };

function isToolSlug(slug: string): slug is ToolSlug {
  return tools.includes(slug as ToolSlug);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!isToolSlug(slug)) notFound();

  return <RevimedSmartTool slug={slug as any} />;
}
