import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/evaluare-biomecanica-ergonomie-birou-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/evaluare-biomecanica-ergonomie-birou-chisinau/", ru: "/ru/biomehanicheskaya-otsenka-ergonomika-ofis-kishinev/", "x-default": "/evaluare-biomecanica-ergonomie-birou-chisinau/" },
 title: "Evaluare Biomecanică (600 MDL) & Ergonomie Birou (550 MDL) Chișinău — Coloană & Postură",
 description: "Evaluare biomecanică a mișcării (600 MDL), evaluare ergonomică personalizată (550 MDL) și Electrospondilografie (500 MDL) pentru programatori, șoferi și dureri de spate la birou în Chișinău — Revimed PLUS+."
});

export default function EvaluareBiomecanicaErgonomieBirouChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/evaluare-biomecanica-ergonomie-birou-chisinau"
   crumbLabel="Biomecanică & Ergonomie"
   h1="Evaluare Biomecanică a Mișcării și Ergonomie Personalizată la Birou în Chișinău"
   lead="De ce revine durerea cervicală („tech neck”), de umeri și lombară la 2 săptămâni după masaj dacă nu corectezi mecanica mișcării și poziția de lucru — soluția completă Revimed PLUS+."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2) oferim Evaluare biomecanică a mișcării (600 MDL), Evaluare ergonomică personalizată pentru locul de muncă/birou (550 MDL) și Electrospondilografie computerizată a coloanei (500 MDL), completate de consult neurologic (500 MDL), kinetoterapie / programe personalizate de exerciții (250–300 MDL) și masaj terapeutic 60 min (200 MDL; tarife orientative). Aceste evaluări identifică exact asimetriile posturale care întrețin durerile de gât, spate și încheieturi la programatori, contabili și șoferi. Programări: 022 60 50 60."
   introParagraph="Statul 8–10 ore pe zi la calculator sau la volan modifică treptat biomecanica întregii coloane: capul se deplasează înainte (dublând sau triplând sarcina pe vertebrele C5–C7), umerii se rotunjesc, iar zona lombară L4–S1 preia presiune constantă. Fără o evaluare biomecanică și ajustare ergonomică concretă, durerea reapare ciclic după fiecare pauză."
   symptomsHeading="Cui i se potrivește evaluarea biomecanică și ergonomică"
   symptoms={[
    "Programatori, specialiști IT, contabili, designeri și angajați remote cu durere zilnică între omoplați, ceafă rigidă sau amorțeli în mâini;",
    "Șoferi profesioniști și persoane care conduc zilnic peste 2 ore cu dureri lombare sau sindrom piriform recurent;",
    "Persoane active / sportivi amatori cu asimetrii de mers, dureri unilaterale de genunchi/șold sau blocaje repetate de spate;",
    "Adolescenți și studenți cu postură cifotică („spate cocoșat”), umeri inegali și oboseală la birou."
]}
   approachHeading="Cum transformăm evaluarea în rezultate durabile fără durere"
   approachParagraphs={[
    "Evaluarea biomecanică a mișcării (600 MDL) analizează aliniamentul coloanei, mobilitatea articulațiilor (cervicală, umeri, bazin, șolduri), compensările musculare și modul în care corpul distribuie sarcina la mers, aplecare și șezut. Pentru obiectivarea segmentelor vertebrale suprasolicitate, se poate asocia cu Electrospondilografia computerizată (500 MDL — fără radiații).",
    "Evaluarea ergonomică personalizată (550 MDL) traduce constatările clinice în reglaje exacte pentru biroul tău (înălțimea monitorului și scaunului, unghiul coatelor/încheieturilor pentru prevenirea tunelului carpian, ritmul micro-pauzelor), urmate la nevoie de programe personalizate de exerciții (300 MDL), masaj terapeutic (200 MDL) și fizioterapie (100 MDL / 30 min)."
]}
   equipmentHeading="Diagnostic funcțional al coloanei și recuperare biomecanică"
   equipmentCards={[
    {
        "slug": "rheotest",
        "title": "Electrospondilografie (500 MDL)",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Scanare computerizată neinvazivă a segmentelor coloanei fără radiații."
    },
    {
        "slug": "amplipuls-5",
        "title": "Amplipuls & Fizioterapie (100 MDL)",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Relaxarea contracturilor paravertebrale acumulate la birou — 100 MDL / 30 min."
    },
    {
        "slug": "kandadzia-kang-da-jia-lqx-2000a",
        "title": "Vibro-Relaxare & Kinetoterapie",
        "image": "/images/equipment/kandadzia-kang-da-jia-lqx-2000a.webp",
        "desc": "Activarea circulației și reeducarea posturii — proceduri de la 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Ce evaluare din lista Revimed PLUS+ se potrivește profilului tău",
    "columns": [
        "Profil / Obiectiv",
        "Serviciu recomandat",
        "Tarif orientativ",
        "Rezultat concret"
    ],
    "rows": [
        [
            "Asimetrii posturale, dureri recurente la mers/sport/aplecare",
            "Evaluare biomecanică a mișcării",
            "600 MDL",
            "Hartă clară a dezechilibrelor musculare + plan de exerciții țintite"
        ],
        [
            "Muncă 8+ ore la laptop/birou, „tech neck”, dureri încheieturi",
            "Evaluare ergonomică personalizată",
            "550 MDL",
            "Protocol exact de reglare a stației de lucru + micro-pauze anti-durere"
        ],
        [
            "Verificarea segmentelor coloanei fără raze X",
            "Electrospondilografie computerizată",
            "500 MDL",
            "Identificarea zonelor cervicale/toracale/lombare suprasolicitate"
        ],
        [
            "Durere cu iradiere pe braț/picior sau amorțeli",
            "Consult Neurolog / Neurochirurg Dr. Igor Revenco",
            "500 MDL",
            "Diagnostic medical + plan complet de recuperare (fizioterapie 100 MDL)"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "Cum te pregătești pentru evaluarea biomecanică & ergonomică (4 pași)",
    "steps": [
        "Fă 2 fotografii din profil și din spate ale biroului/scaunului tău obișnuit (cu tine așezat la laptop/monitor) ca specialistul să vadă exact unghiurile reale.",
        "Poartă haine sport lejere care permit evaluarea aliniamentului umerilor, coloanei și genunchilor.",
        "Adu încălțămintea pe care o porți cel mai des (uzura tălpii oferă indicii biomecanice valoroase).",
        "Notează după câte minute de stat pe scaun apare disconfortul și care este zona principală (ceafă, între omoplați, lombar sau încheieturi)."
    ]
}}
   redFlagsNotice={{
    "heading": "Atenție — când este necesar consult medical/urgență 112 înainte de exerciții:",
    "items": [
        "Amorțeală progresivă, slăbiciune bruscă în braț/picior sau dificultate la prinderea obiectelor;",
        "Durere de spate nocturnă severă care nu cedează la nicio poziție ori asociată cu febră și scădere în greutate;",
        "Pierdere de control urinar/intestinal (urgență neurochirurgicală 112)."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/test-postura-coloana/",
    "label": "Fă acum Testul Interactiv de Postură & Coloană (2 min) →",
    "desc": "Verifică orientativ riscul tău postural înainte de evaluarea biomecanică:"
}}
   faqs={[
    {
        "q": "Cât durează evaluarea biomecanică sau ergonomică și primesc recomandări scrise?",
        "a": "Evaluarea durează în medie 45–60 de minute și se încheie cu recomandări practice clare de corecție posturală, exerciții adaptate și reglaje ergonomice ale locului de muncă."
    },
    {
        "q": "Ajută evaluarea ergonomică dacă am deja o protruzie cervicală sau lombară?",
        "a": "Da — după confirmarea diagnosticului la neurolog/neurochirurg (500 MDL), eliminarea suprasolicitării zilnice de la birou este factorul nr. 1 care previne recidiva durerilor după curele de fizioterapie."
    }
]}
   relatedLinks={[
    {
        "href": "/scolioza-postura-copii-adulti-chisinau/",
        "label": "Scolioză & Postură Copii și Adulți"
    },
    {
        "href": "/electrospondilografie-chisinau/",
        "label": "Electrospondilografie (500 MDL)"
    },
    {
        "href": "/tunel-carpian-amorteli-maini-chisinau/",
        "label": "Tunel Carpian & Amorțeli Mâini"
    },
    {
        "href": "/kinetoterapie-chisinau/",
        "label": "Kinetoterapie (250 MDL)"
    },
    {
        "href": "/masaj-terapeutic-chisinau/",
        "label": "Masaj Terapeutic (200 MDL)"
    }
]}
  />
 );
}
