import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/dureri-de-spate-sciatica-chisinau",
 localized: false,
 title: "Dureri de Spate & Sciatică Chișinău — Neurolog & Fizioterapie",
 description:
  "Tratament pentru dureri lombare, cervicale și sciatică în Chișinău (Ciocana) — evaluare neurolog/neurochirurg Dr. Igor Revenco, Amplipuls SMT, electroforeză și terapie Solux."
});

export default function Page() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/dureri-de-spate-sciatica-chisinau"
   crumbLabel="Dureri de spate & Sciatică"
   h1="Tratament Dureri de Spate, Lombalgie și Sciatică în Chișinău"
   lead="Evaluare neurologică și neurochirurgicală rapidă + fizioterapie țintită (Amplipuls SMT, electroforeză, Solux) în sectorul Ciocana."
   introParagraph="Durerile de spate lombare sau cervicale și crizele de sciatică pot bloca complet activitatea zilnică. La Revimed PLUS+ Chișinău combinăm diagnosticul precis cu proceduri fizioterapeutice care reduc rapid inflamația și spasmul muscular."
   symptomsHeading="Când este indicat consultul de specialitate"
   symptoms={[
    "Durere lombară acută sau cronică (lumbago) care revine frecvent;",
    "Durere ascuțită care coboară pe fesă și picior (sciatică);",
    "Durere cervicală cu iradiere în umăr, braț sau cu amețeli;",
    "Rigiditate matinală și contracturi musculare dureroase;",
    "Amorțeli sau furnicături la nivelul membrelor."
   ]}
   approachHeading="De ce combinăm neurologia cu fizioterapia pe loc"
   approachParagraphs={[
    "În loc să amâni recuperarea mergând între mai multe clinici, primești evaluarea medicului neurolog/neurochirurg și începi cursul de fizioterapie în aceeași locație, cu parametri ajustați exact toleranței tale."
   ]}
   equipmentHeading="Proceduri eficiente pentru durerile de coloană"
   equipmentCards={[
    { slug: "amplipuls-4", title: "Amplipuls-4 / 5 / 6", image: "/images/equipment/amplipuls-4.webp", desc: "Amplipulsterapie SMT cu efect analgezic și miorelaxant dovedit clinic." },
    { slug: "aparat-electroforeza-medicamentoasa", title: "Electroforeză medicamentoasă", image: "/images/equipment/aparat-electroforeza-medicamentoasa.webp", desc: "Introduce local substanțe antiinflamatoare fără a irita stomacul." },
    { slug: "spectr-lc", title: "Spectr-LC & Lampă Solux", image: "/images/equipment/spectr-lc.webp", desc: "Fototerapie infraroșie pentru microcirculație și regenerare tisulară." }
   ]}
   faqs={[
    { q: "Pot face fizioterapie în faza dureroasă a sciaticii?", a: "Da, anumite regimuri blânde (Amplipuls analgezic, electroforeză) sunt concepute exact pentru reducerea durerii și inflamației, stabilite de medic." },
    { q: "Unde văd prețurile pentru ședințele de fizioterapie?", a: "Toate cele 101 servicii cu tarife orientative sunt disponibile pe pagina Prețuri, cu convertor în MDL, EUR și RON." }
   ]}
   relatedLinks={[
    { href: "/hernie-de-disc-chisinau/", label: "Hernie de disc Chișinău" },
    { href: "/fizioterapie-chisinau/", label: "Fizioterapie Chișinău" },
    { href: "/neurochirurg-chisinau/", label: "Neurochirurg Chișinău" }
   ]}
  />
 );
}
