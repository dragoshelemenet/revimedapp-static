import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/recuperare-dupa-avc-chisinau",
 localized: false,
 title: "Recuperare după AVC Chișinău — Neurolog & Fizioterapie Ciocana",
 description:
  "Program individual de recuperare medicală după accident vascular cerebral (AVC) în Chișinău (Ciocana) — monitorizare neurologică Dr. Igor Revenco, neurostimulare și fizioterapie."
});

export default function Page() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/recuperare-dupa-avc-chisinau"
   crumbLabel="Recuperare după AVC Chișinău"
   h1="Recuperare Medicală după AVC în Chișinău (Ciocana)"
   lead="Monitorizare neurologică atentă, evaluare vasculară RHEOTEST și proceduri blânde de neurostimulare și fizioterapie adaptate fiecărei etape post-AVC."
   introParagraph="După externarea din spital în urma unui accident vascular cerebral, continuarea supravegherii neurologice și a recuperării funcționale este esențială pentru recâștigarea echilibrului, mobilității și independenței zilnice."
   symptomsHeading="Obiectivele recuperării post-AVC la Revimed PLUS+"
   symptoms={[
    "Monitorizarea neurologică periodică și ajustarea planului terapeutic;",
    "Susținerea tonusului muscular și reducerea spasticității sau durerilor secundare;",
    "Îmbunătățirea echilibrului, coordonării și încrederii la mers;",
    "Evaluarea circulației cerebrale prin reografie neinvazivă RHEOTEST;",
    "Sprijin pentru somn, echilibru emoțional și prevenție secundară."
   ]}
   approachHeading="Recuperare etapizată, sigură și explicată familiei"
   approachParagraphs={[
    "Dr. Igor Revenco stabilește un program realist și sigur, adaptat vârstei, tensiunii arteriale și toleranței fiecărui pacient. Familia este informată clar la fiecare pas."
   ]}
   equipmentHeading="Aparataj folosit în recuperarea neurologică"
   equipmentCards={[
    { slug: "bi-lenar", title: "Bi-LENAR", image: "/images/equipment/bi-lenar.webp", desc: "Neurostimulare funcțională blândă pentru reglare neurovegetativă și suport de recuperare." },
    { slug: "amplipuls-6", title: "Amplipuls-6 (SMT)", image: "/images/equipment/amplipuls-6.webp", desc: "Curenți modulați digital pentru stimularea și relaxarea musculaturii." },
    { slug: "rheotest", title: "RHEOTEST", image: "/images/equipment/rheotest.webp", desc: "Evaluare neinvazivă a circulației cerebrale și periferice." }
   ]}
   faqs={[
    { q: "Când se poate începe recuperarea ambulatorie după AVC?", a: "Imediat ce starea pacientului este stabilă după externare și medicul neurolog confirmă că procedurile sunt sigure." },
    { q: "Pot veni membrii familiei la consultație?", a: "Da, implicarea familiei este încurajată pentru continuitatea recuperării acasă." }
   ]}
   relatedLinks={[
    { href: "/neurolog-chisinau/", label: "Neurolog Chișinău" },
    { href: "/fizioterapie-chisinau/", label: "Fizioterapie Chișinău" },
    { href: "/utilaj/", label: "Toate cele 25 utilaje" }
   ]}
  />
 );
}
