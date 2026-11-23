import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/insomnie-tratament-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/insomnie-tratament-chisinau/", ru: "/ru/lechenie-bessonnitsy-kishinev/", "x-default": "/insomnie-tratament-chisinau/" },
 title: "Tratament Insomnie & Stres Cronic Chișinău — Neurolog & Electrosomn",
 description:
  "Tratament blând și individualizat pentru insomnie, tulburări de somn, stres cronic și distonie neurovegetativă în Chișinău — neurolog Dr. Igor Revenco, Electrosomn și Transair TES."
});

export default function Page() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/insomnie-tratament-chisinau"
   crumbLabel="Tratament insomnie Chișinău"
   h1="Tratament Insomnie, Stres Cronic și Distonie în Chișinău"
   lead="Abordare neurologică modernă și proceduri blânde nemedicamentoase (Electrosomn, Transair TES, MDM) la Revimed PLUS+ Ciocana."
   introParagraph="Insomnia prelungită, trezirile nocturne frecvente și epuizarea nervoasă afectează memoria, tensiunea arterială și imunitatea. La Revimed PLUS+ Chișinău oferim evaluare neurologică completă și terapii blânde pentru restabilirea somnului fiziologic."
   symptomsHeading="Semne că ai nevoie de ajutor medical pentru somn"
   symptoms={[
    "Adormire dificilă (peste 30–45 minute) mai multe nopți pe săptămână;",
    "Treziri repetate în timpul nopții sau trezire foarte devreme cu oboseală;",
    "Tensiune nervoasă, palpitații funcționale și distonie neurovegetativă;",
    "Cefalee matinală, iritabilitate și scăderea concentrării."
   ]}
   approachHeading="Restabilirea somnului fără dependență de somnifere"
   approachParagraphs={[
    "Dr. Igor Revenco stabilește un plan personalizat care poate include igiena somnului, corecție blândă și cure de Electrosomn, Transair TES sau Bi-LENAR pentru calmarea sistemului nervos central."
   ]}
   equipmentHeading="Aparataj dedicat pentru insomnie și stres"
   equipmentCards={[
    { slug: "electrosomn-3", title: "Electrosomn-3", image: "/images/equipment/electrosomn-3.webp", desc: "Terapie clasică prin electrosomn pentru susținerea somnului fiziologic." },
    { slug: "electrosomn-5-es-10-5", title: "Electrosomn-5", image: "/images/equipment/electrosomn-5-es-10-5.webp", desc: "Impulsuri blânde de joasă frecvență pentru reducerea tensiunii nervoase." },
    { slug: "mdm-2000", title: "MDM-2000", image: "/images/equipment/mdm-2000.webp", desc: "Modulare mezodiencefalică pentru echilibru neuroendocrin și anti-stres." }
   ]}
   faqs={[
    { q: "Electrosomnul creează dependență?", a: "Nu. Este o procedură fizioterapeutică neinvazivă care susține mecanismele naturale de relaxare ale creierului." },
    { q: "Câte ședințe sunt recomandate?", a: "De obicei 5–10 ședințe, ajustate individual de medicul neurolog." }
   ]}
   relatedLinks={[
    { href: "/sindromul-picioarelor-nelinistite-neurolog-chisinau/", label: "Picioare Neliniștite (Willis-Ekbom)" },
    { href: "/oboseala-cronica-burnout-biofeedback-chisinau/", label: "Oboseală Cronică & Biofeedback" },
    { href: "/electrosomn-chisinau/", label: "Electrosomn Chișinău" },
    { href: "/neurolog-chisinau/", label: "Neurolog Chișinău" },
    { href: "/preturi/", label: "Prețuri" }
   ]}
  />
 );
}
