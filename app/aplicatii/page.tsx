import { tools } from "@/lib/site";
import Link from "next/link";

export const metadata = {
  title: "Aplicații medicale",
  description: "Aplicații medicale digitale Revimed PLUS+: teste educaționale, instrumente pentru pacienți și autoevaluări."
};

export default function AppsPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <p className="crumb">Acasă / Aplicații</p>
          <h1>Aplicații medicale</h1>
          <p className="lead">Teste și instrumente educaționale pentru pacienți.</p>
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
