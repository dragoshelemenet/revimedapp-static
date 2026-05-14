import Link from "next/link";
import { tools } from "@/lib/site";

export const metadata = {
  title: "Teste și Instrumente",
  description: "Colecție de teste și instrumente digitale Revimed PLUS+ pentru pacienți: Ayurveda Dosha, respirație terapeutică și screening neurologic."
};

export default function ToolsPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <p className="crumb">Acasă / Aplicații / Teste și Instrumente</p>
          <h1>Teste și Instrumente</h1>
          <p className="lead">Instrumente educaționale curate, rapide și ușor de folosit.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid3">
          {tools.map((tool) => (
            <Link href={tool.href} className="card toolCard" key={tool.slug}>
              <span className="tag">{tool.tag}</span>
              <h2>{tool.title}</h2>
              <p>{tool.description}</p>
              <b>Deschide →</b>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
