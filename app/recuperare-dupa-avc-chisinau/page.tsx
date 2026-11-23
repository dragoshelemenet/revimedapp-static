import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/recuperare-dupa-avc-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/recuperare-dupa-avc-chisinau/", ru: "/ru/reabilitatsiya-posle-insulta-kishinev/", "x-default": "/recuperare-dupa-avc-chisinau/" },
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
   lead="Monitorizare neurologică atentă, evaluare vasculară RHEOTEST și proceduri blânde de neurostimulare, masaj diferențiat și fizioterapie adaptate fiecărei etape post-AVC."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), recuperarea ambulatorie post-AVC este coordonată de Dr. Igor Revenco (consultație neurolog 500 MDL / repetată 400 MDL) și include evaluare vasculară REG (500 MDL), neuromiostimulare Amplipuls / electroforeză / Electrosomn (150 MDL/ședință), masaj terapeutic diferențiat (200 MDL) și electroterapie + kinetoterapie combinată (250 MDL/oră). Programări: 022 60 50 60."
   introParagraph="După externarea din spital în urma unui accident vascular cerebral (ischemic sau hemoragic), continuarea supravegherii neurologice și a recuperării funcționale ambulatorii în primele 3–12 luni este esențială pentru neuroplasticitate, reducerea spasticității, controlul durerii post-AVC și recâștigarea independenței zilnice."
   symptomsHeading="Obiectivele recuperării post-AVC la Revimed PLUS+"
   symptoms={[
    "Monitorizarea neurologică periodică, ajustarea tratamentului și prevenția secundară a unui nou AVC;",
    "Masaj terapeutic diferențiat post-AVC (200 MDL): relaxarea blândă a mușchilor spastici și tonifierea selectivă a grupelor musculare slăbite (antagoniști);",
    "Neuromiostimulare selectivă cu Amplipuls-6 (SMT) și electroforeză (150 MDL) pentru recuperarea forței și combaterea sindroamelor dureroase post-AVC (inclusiv durerea de umăr hemiplegic);",
    "Evaluarea circulației cerebrale prin reoencefalografie neinvazivă RHEOTEST (500 MDL) și EEG 19 canale (1600 MDL) la nevoie;",
    "Sprijin pentru somn, memorie și echilibru emoțional prin Bi-LENAR, Electrosomn sau Transair TES (150 MDL/oră)."
   ]}
   approachHeading="Recuperare etapizată, sigură și explicată familiei"
   approachParagraphs={[
    "Dr. Igor Revenco stabilește un program ambulatoriu realist și sigur, adaptat vârstei, tensiunii arteriale și toleranței fiecărui pacient. În recuperarea post-AVC, procedurile sunt dozate progresiv pentru a evita oboseala excesivă sau creșterea spasticității.",
    "Familia primește recomandări clare de exerciții zilnice și poziționare corectă acasă, astfel încât progresul obținut în clinică (kinetoterapie + electroterapie — 250 MDL/oră) să se consolideze între ședințe."
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
