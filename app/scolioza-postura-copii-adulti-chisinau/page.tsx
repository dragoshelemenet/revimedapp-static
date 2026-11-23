import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/scolioza-postura-copii-adulti-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/scolioza-postura-copii-adulti-chisinau/", ru: "/ru/lechenie-skolioza-kishinev/", "x-default": "/scolioza-postura-copii-adulti-chisinau/" },
 title: "Tratament Scolioză & Postură Copii și Adulți Chișinău — Revimed PLUS+",
 description: "Evaluare neurologică/vertebrală, electrospondilografie (500 MDL), kinetoterapie, masaj și electrostimulare pentru scolioză și cifoză la copii și adulți în Chișinău. 022 60 50 60."
});

export default function ScoliozaPosturaCopiiAdultiChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/scolioza-postura-copii-adulti-chisinau"
   crumbLabel="Scolioză & Postură Chișinău"
   h1="Scolioză și Tulburări de Postură la Copii și Adulți în Chișinău — Evaluare și Recuperare"
   lead="Diagnostic funcțional al coloanei (electrospondilografie fără radiații — 500 MDL), kinetoterapie personalizată, masaj medical și electrostimulare paravertebrală la Revimed PLUS+ (Ciocana)."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), consultația primară la medic neurolog/neurochirurg (Dr. Igor Revenco) costă 500 MDL (repetată 400 MDL), examinarea computerizată cu electrospondilografie 500 MDL, procedurile de electrostimulare/fizioterapie 100 MDL / 30 min, masajul terapeutic 200 MDL, iar evaluarea biomecanică a mișcării 600 MDL (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Scolioza (deviația laterală a coloanei vertebrale, frecvent toraco-lombară sau în „S”) și cifoza posturală apar deseori în perioadele de creștere rapidă la școlari sau se agravează la adulții cu muncă sedentară, generând asimetrie musculară, dureri dorsale și suprasolicitarea discurilor intervertebrale."
   symptomsHeading="Semne care indică necesitatea evaluării coloanei"
   symptoms={[
    "Un umăr sau un omoplat vizibil mai ridicat, asimetria taliei sau înclinarea trunchiului la copil/adolescent;",
    "Oboseală rapidă a spatelui la statul în bancă sau la birou, dureri interscapulare și lombare;",
    "Cifoză („spate rotund”), cap proiectat înainte și tensiune cervicală recurentă;",
    "Monitorizarea non-iradiantă a evoluției posturale în timpul programului de recuperare."
]}
   approachHeading="Corectare musculară simetrică, fără suprasolicitare"
   approachParagraphs={[
    "Evaluarea combină examenul clinic neuro-vertebral și analiza radiografiilor existente cu electrospondilografia computerizată (500 MDL), care identifică dezechilibrele segmentare fără expunere suplimentară la raze X.",
    "Planul conservator îmbină tonifierea musculaturii hipotone prin electrostimulare blândă, relaxarea contracturilor paravertebrale prin masaj medical/vibromasaj (100–200 MDL) și exerciții corective individualizate."
]}
   equipmentHeading="Suport funcțional în recuperarea scoliozei"
   equipmentCards={[
    {
        "slug": "amplipuls-5",
        "title": "Electrostimulare Paravertebrală",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Tonifierea selectivă a musculaturii slăbite a spatelui — 100 MDL / 30 min."
    },
    {
        "slug": "kandadzia-kang-da-jia-lqx-2000a",
        "title": "Relaxare Paravertebrală & Jad",
        "image": "/images/equipment/kandadzia-kang-da-jia-lqx-2000a.webp",
        "desc": "Detensionarea lanțului muscular contracturat — 100 MDL / 30 min."
    },
    {
        "slug": "aparat-amp",
        "title": "Electrospondilografie Coloană",
        "image": "/images/equipment/aparat-amp.webp",
        "desc": "Evaluare funcțională fără radiații a segmentelor vertebrale — 500 MDL."
    }
]}
   faqs={[
    {
        "q": "Se poate corecta scolioza la copii fără corset sau operație?",
        "a": "În gradele ușoare (grad I–II) și tulburările posturale funcționale, kinetoterapia consecventă, masajul și electrostimularea sub supraveghere medicală pot stabiliza și corecta postura; gradele avansate necesită evaluare ortopedică/neurochirurgicală individuală."
    },
    {
        "q": "Există și un test orientativ online de postură pe site?",
        "a": "Da, în secțiunea Teste și Instrumente este disponibil Testul orientativ de Postură și Coloană (cu scop exclusiv educațional)."
    }
]}
   relatedLinks={[
    { href: "/evaluare-biomecanica-ergonomie-birou-chisinau/", label: "Evaluare Biomecanică & Ergonomie" },
    {
        "href": "/electrospondilografie-chisinau/",
        "label": "Electrospondilografie (500 MDL)"
    },
    {
        "href": "/kinetoterapie-chisinau/",
        "label": "Kinetoterapie Chișinău"
    },
    {
        "href": "/masaj-terapeutic-chisinau/",
        "label": "Masaj Terapeutic"
    },
    {
        "href": "/neuropediatru-chisinau/",
        "label": "Neuropediatru Chișinău"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
