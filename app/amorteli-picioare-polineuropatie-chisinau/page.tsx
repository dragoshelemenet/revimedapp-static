import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/amorteli-picioare-polineuropatie-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/amorteli-picioare-polineuropatie-chisinau/", ru: "/ru/onemenie-nog-polineyropatiya-kishinev/", "x-default": "/amorteli-picioare-polineuropatie-chisinau/" },
 title: "De ce Amorțesc Picioarele (Noaptea / Sub Genunchi)? — Neurolog Chișinău",
 description: "Cauzele amorțelii în picioare și tălpi (polineuropatie diabetică/metabolică, sciatică L4–S1, circulație periferică). Neurolog (500 MDL), Reovasografie (500 MDL), fizioterapie plantară (100 MDL) în Chișinău. 022 60 50 60."
});

export default function AmorteliPicioarePolineuropatieChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/amorteli-picioare-polineuropatie-chisinau"
   crumbLabel="Amorțeli Picioare & Polineuropatie"
   h1="De ce Amorțesc Picioarele Noaptea sau Sub Genunchi? — Polineuropatie vs. Coloană (Ghid Chișinău)"
   lead="Cum deosebim polineuropatia periferică („în șosete”), compresia nervului sciatic și problemele circulatorii la Centrul Medical Revimed PLUS+ (Ciocana), cu Dr. Igor Revenco."
   directAnswer="Amorțeala simetrică a ambelor tălpi și gambe (mai ales noaptea, cu arsuri sau „ace”) indică frecvent o polineuropatie periferică (diabetică, metabolică sau prin deficit de B12), în timp ce amorțeala pe un singur picior însoțită de durere lombară sugerează o radiculopatie L4–S1. La Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația neurologică costă 500 MDL (repetată 400 MDL), analiza neinvazivă AMP 117 indici 1000 MDL, reovasografia/REG 500 MDL, iar procedurile de electrostimulare plantară LANAFORM, masaj plantar vibro-infraroșu și magnetoterapie costă 100 MDL / 30 min (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Senzația de „picioare de lemn”, furnicături în tălpi, arsuri nocturne sau cârcei recurenți nu ar trebui ignorate: cu cât cauza (metabolică, vertebrală sau vasculară) este identificată mai devreme, cu atât fibrele nervoase periferice pot fi protejate mai bine împotriva deteriorării ireversibile."
   symptomsHeading="Manifestări ale neuropatiei periferice și compresiei lombare"
   symptoms={[
    "Furnicături, arsuri sau pierderea sensibilității simetric în ambele tălpi și de la genunchi în jos („în șosete”);",
    "Amorțeală pe traseul unui singur picior care apare la stat jos sau mers (radiculopatie L4–L5 / L5–S1);",
    "Senzație de tălpi reci, crampe musculare nocturne și nesiguranță la mers pe întuneric;",
    "Amorțeli apărute la pacienți cu diabet zaharat, prediabet, afecțiuni tiroidiene sau hernie lombară."
]}
   approachHeading="Diagnostic diferențial complet și stimulare neuro-vasculară plantară"
   approachParagraphs={[
    "La examenul clinic, Dr. Igor Revenco testează sensibilitatea tactilă/vibratorie, reflexele achiliene/rotuliene și diferențiază cauza vertebrală (electrospondilografie — 500 MDL) de cea vasculară (reovasografie RHEOTEST — 500 MDL) sau metabolică (screening AMP — 1000 MDL + recomandare analize laborator glicemie/HbA1c/vitamina B12).",
    "Recuperarea nervilor periferici combină tratamentul cauzei de bază cu proceduri de îmbunătățire a microcirculației și conducerii nervoase: electrostimulare plantară LANAFORM, masaj plantar vibro-infraroșu, Amplipuls, magnetoterapie, laser și ozonoterapie (100 MDL / 30 min)."
]}
   equipmentHeading="Proceduri dedicate picioarelor și nervilor periferici"
   equipmentCards={[
    {
        "slug": "amplipuls-5",
        "title": "Electrostimulare Plantară & SMT",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Stimularea conducerii nervoase periferice și a tălpilor — 100 MDL / 30 min."
    },
    {
        "slug": "kandadzia-kang-da-jia-lqx-2000a",
        "title": "Masaj Plantar Vibro-Infraroșu",
        "image": "/images/equipment/kandadzia-kang-da-jia-lqx-2000a.webp",
        "desc": "Activarea microcirculației periferice la gambe și tălpi — 100 MDL / 30 min."
    },
    {
        "slug": "rheotest",
        "title": "RHEOTEST (Reovasografie)",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Evaluarea circulației arterio-venoase periferice — 500 MDL."
    }
]}
   customDecisionTable={{
    "heading": "De ce amorțesc picioarele? — 4 cauze principale comparate",
    "columns": [
        "Cauză",
        "Tipar tipic",
        "Simptome asociate",
        "Investigație & pas următor"
    ],
    "rows": [
        [
            "Polineuropatie (diabet / B12)",
            "Simetric la ambele tălpi/gambe („în șosete”)",
            "Arsuri nocturne, înțepături, mers nesigur",
            "Neurolog (500 MDL) + HbA1c/B12 + stimulare plantară (100 MDL)"
        ],
        [
            "Compresie lombară (L4–S1)",
            "De regulă pe UN picior, pe un traseu precis",
            "Durere de spate/fesă, crește la șezut/tuse",
            "Neurochirurg (500 MDL) + RMN / ESG (500 MDL) + Amplipuls"
        ],
        [
            "Boală vasculară periferică",
            "Picioare reci, crampe în gambe la mers",
            "Paloare/cianoză degete, puls slab la picior",
            "Reovasografie RHEOTEST (500 MDL) / Doppler vascular"
        ],
        [
            "Dezechilibru electrolitic / RLS",
            "Cârcei nocturni, nevoie irezistibilă de a mișca picioarele",
            "Se calmează temporar la mișcare, tulbură somnul",
            "Evaluare neurologică + analize Mg/Fe/feritină"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "Ce analize recente ajută la consultația pentru amorțeli în picioare",
    "steps": [
        "Dacă ai analize recente de glicemie, hemoglobină glicozilată (HbA1c), vitamina B12, TSH sau fier/feritină, adu-le la consult.",
        "Poartă încălțăminte ușor de scos pentru examinarea reflexelor și a sensibilității plantare.",
        "Notează dacă amorțeala este pe ambele picioare sau doar pe unul și dacă apare mai mult noaptea sau la stat pe scaun."
    ]
}}
   redFlagsNotice={{
    "heading": "Semne de urgență — apelați imediat 112:",
    "items": [
        "Amorțeală apărută BRUSC pe o jumătate a corpului (față + braț + picior) sau slăbiciune bruscă la mers (suspiciune AVC);",
        "Picior brusc foarte rece, palid și intens dureros (ischemie arterială acută);",
        "Amorțeală bruscă în ambele picioare cu pierderea controlului urinar (compresie medulară acută)."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/test-risc-cadere-echilibru/",
    "label": "Verifică echilibrul în Testul de Risc de Cădere (2 min) →",
    "desc": "Polineuropatia poate afecta stabilitatea la mers — testează-ți orientativ echilibrul:"
}}
   faqs={[
    {
        "q": "De ce amorțesc picioarele mai tare noaptea în pat?",
        "a": "Noaptea lipsesc stimulii de mers care maschează disconfortul, circulația periferică încetinește, iar fibrele nervoase iritate (în polineuropatie sau compresie lombară) transmit mai intens senzația de furnicături și arsură."
    },
    {
        "q": "Ce proceduri aveți pentru amorțeala tălpilor și polineuropatie?",
        "a": "Pe lângă terapia neurologică de bază, efectuăm electrostimulare plantară LANAFORM, masaj plantar vibro-infraroșu, magnetoterapie, laser și Amplipuls la tariful orientativ de 100 MDL / 30 min."
    }
]}
   relatedLinks={[
    {
        "href": "/nevralgie-neuropatie-chisinau/",
        "label": "Nevralgie & Neuropatie"
    },
    {
        "href": "/dureri-de-spate-sciatica-chisinau/",
        "label": "Dureri de Spate & Sciatică"
    },
    {
        "href": "/protruzie-discala-l4-l5-l5-s1-stenoza-chisinau/",
        "label": "Protruzie L4–L5 / L5–S1"
    },
    {
        "href": "/neurolog-chisinau/",
        "label": "Neurolog Chișinău (500 MDL)"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
