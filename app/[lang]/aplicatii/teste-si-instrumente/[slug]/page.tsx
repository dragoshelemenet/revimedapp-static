import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RevimedSmartTool from "@/components/RevimedSmartTool";

const reactTools = [
  "test-postura-coloana",
  "monitor-dureri-spate",
  "test-risc-cadere-echilibru",
  "planner-exercitii-zilnice",
  "test-stres-somn-respiratie",
  "pregatire-consultatie",
] as const;

const infoApps = [
  "test-ayurveda-dosha",
  "respiratie-terapeutica",
  "screening-neurologic",
  "revimed-yoga-tibetan",
  "calculator-recuperare-personalizata",
] as const;

type ReactToolSlug = typeof reactTools[number];
type InfoAppSlug = typeof infoApps[number];
type AnySlug = ReactToolSlug | InfoAppSlug;

const appInfo: Record<AnySlug, { title: string; tag: string; text: string; bullets: string[] }> = {
  "test-ayurveda-dosha": {
    title: "Test Ayurveda Dosha",
    tag: "Ayurveda",
    text: "Instrument educațional pentru orientare asupra profilului Vata, Pitta sau Kapha. Rezultatul este informativ și nu reprezintă diagnostic medical.",
    bullets: ["observă tendințe de stil de viață", "ajută la pregătirea întrebărilor pentru specialist", "nu înlocuiește consultația medicală"]
  },
  "respiratie-terapeutica": {
    title: "Respirație terapeutică",
    tag: "Respirație",
    text: "Ghid educațional pentru respirație calmă, ritm și relaxare. Exercițiile sunt orientative și trebuie adaptate stării personale.",
    bullets: ["respirație ghidată", "relaxare și ritm", "oprire dacă apare amețeală sau disconfort"]
  },
  "screening-neurologic": {
    title: "Screening neurologic",
    tag: "Neurologie",
    text: "Chestionar educațional pentru simptome neurologice și semnale de alarmă. Nu stabilește diagnostic, dar ajută la orientarea către consultație.",
    bullets: ["amețeli, amorțeli, slăbiciune", "dureri de cap sau tulburări de mers", "semnale când este indicat consult rapid"]
  },
  "revimed-yoga-tibetan": {
    title: "REVIMED Yoga Tibetan",
    tag: "Respirație",
    text: "Program educațional pentru respirație, concentrare și relaxare. Practica trebuie făcută blând, fără forțare.",
    bullets: ["respirație ghidată", "relaxare și atenție corporală", "adaptare la mobilitate și stare de sănătate"]
  },
  "calculator-recuperare-personalizata": {
    title: "Calculator recuperare personalizată",
    tag: "Recuperare",
    text: "Instrument educațional pentru orientare asupra pașilor de recuperare în funcție de durere, mobilitate și obiectiv.",
    bullets: ["durere și mobilitate", "obiectiv de recuperare", "pași orientativi pentru discuția cu specialistul"]
  },
  "test-postura-coloana": {
    title: "Test postură și coloană",
    tag: "Postură",
    text: "Instrument interactiv Revimed PLUS+.",
    bullets: []
  },
  "monitor-dureri-spate": {
    title: "Monitor dureri de spate",
    tag: "Durere",
    text: "Instrument interactiv Revimed PLUS+.",
    bullets: []
  },
  "test-risc-cadere-echilibru": {
    title: "Test risc cădere și echilibru",
    tag: "Echilibru",
    text: "Instrument interactiv Revimed PLUS+.",
    bullets: []
  },
  "planner-exercitii-zilnice": {
    title: "Planner exerciții zilnice",
    tag: "Exerciții",
    text: "Instrument interactiv Revimed PLUS+.",
    bullets: []
  },
  "test-stres-somn-respiratie": {
    title: "Test stres, somn și respirație",
    tag: "Somn",
    text: "Instrument interactiv Revimed PLUS+.",
    bullets: []
  },
  "pregatire-consultatie": {
    title: "Pregătire pentru consultație",
    tag: "Consultație",
    text: "Instrument interactiv Revimed PLUS+.",
    bullets: []
  },
};

type Props = { params: Promise<{ lang: string; slug: string }> };

function isReactTool(slug: string): slug is ReactToolSlug {
  return reactTools.includes(slug as ReactToolSlug);
}

function isInfoApp(slug: string): slug is InfoAppSlug {
  return infoApps.includes(slug as InfoAppSlug);
}

function isAnySlug(slug: string): slug is AnySlug {
  return isReactTool(slug) || isInfoApp(slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isAnySlug(slug)) return {};
  return {
    title: `${appInfo[slug].title} | Aplicații Revimed PLUS+`,
    description: appInfo[slug].text,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!isAnySlug(slug)) notFound();

  if (isReactTool(slug)) {
    return <RevimedSmartTool slug={slug as any} />;
  }

  const app = appInfo[slug];

  return (
    <main>
      <section className="pageHero">
        <div className="rmShell">
          <p className="breadcrumbs">Acasă / Aplicații / {app.title}</p>
          <h1>{app.title}</h1>
          <p>{app.text}</p>
        </div>
      </section>

      <section className="rmSection">
        <div className="rmShell">
          <article className="appsNewDetailCard">
            <span className="appsNewBadge">{app.tag}</span>
            <h2>{app.title}</h2>
            <p className="appsNewLead">{app.text}</p>
            <section className="appsNewInfoBox">
              <h3>Ce include</h3>
              <ul>
                {app.bullets.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
            <p className="appsNewInfoBox">
              Acest material este educațional și nu înlocuiește consultația medicală.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
