import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/hernie-cervicala-c5-c6-dureri-gat-ameteli-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/hernie-cervicala-c5-c6-dureri-gat-ameteli-chisinau/", ru: "/ru/gryzha-sheynogo-otdela-c5-c6-golovokruzhenie-kishinev/", "x-default": "/hernie-cervicala-c5-c6-dureri-gat-ameteli-chisinau/" },
 title: "Hernie Cervicală C5–C6 / C6–C7 & Dureri de Gât cu Amețeli — Ghid Chișinău",
 description: "Simptomele herniei cervicale C5–C6 și C6–C7 (durere de gât, amețeli, amorțeală în braț și degete). Analiză RMN neurochirurg (500 MDL), REG (500 MDL) și fizioterapie blândă (100 MDL) în Chișinău. 022 60 50 60."
});

export default function HernieCervicalaC5C6DureriGatAmeteliChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/hernie-cervicala-c5-c6-dureri-gat-ameteli-chisinau"
   crumbLabel="Hernie Cervicală C5–C6 & Amețeli"
   h1="Hernie Cervicală C5–C6 / C6–C7 și Dureri de Gât cu Amețeli — Ghid RMN & Recuperare în Chișinău"
   lead="Harta exactă a rădăcinilor cervicale (C5, C6, C7, C8), evaluarea circulației vertebro-bazilare (REG 500 MDL) și a doua opinie neurochirurgicală pe RMN cu Dr. Igor Revenco."
   directAnswer="Hernia de disc cervicală C5–C6 sau C6–C7 se manifestă tipic prin durere de gât care coboară în umăr și degete, amorțeală și uneori amețeli reflexe. La Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), analiza directă a RMN-ului cervical cu neurochirurgul Dr. Igor Revenco (35+ ani, membru EANS) costă 500 MDL (repetată 400 MDL), reoencefalografia REG 500 MDL, iar procedurile cervicale blânde (electroforeză, laser, magnetoterapie, Amplipuls) costă 100 MDL / 30 min (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Coloana cervicală este cea mai mobilă și mai delicată regiune vertebrală: prin orificiile sale trec atât rădăcinile nervoase care controlează brațele și degetele, cât și arterele vertebrale care irigă zona posterioară a creierului. De aceea, o hernie la C5–C6 sau C6–C7 necesită o abordare mult mai fină decât zona lombară — manipulările bruște („trosnitul gâtului”) pot fi periculoase."
   symptomsHeading="Simptome tipice în hernia cervicală și sindromul vertebro-bazilar"
   symptoms={[
    "Durere în ceafă și umăr care coboară pe braț, antebraț până în degetul mare (C6) sau mijlociu (C7);",
    "Furnicături, amorțeală în degete și slăbiciune la ridicarea brațului ori prinderea obiectelor;",
    "Amețeli la întoarcerea bruscă a capului, cefalee occipitală și senzație de „cap greu” (componentă vasculară/cervicogenă);",
    "Tensiune severă în trapez și durere care se accentuează noaptea pe pernă nepotrivită."
]}
   approachHeading="Siguranța înainte de toate: evaluare neurochirurgicală fără manipulări agresive"
   approachParagraphs={[
    "Dr. Igor Revenco analizează imaginile RMN cervical pentru a exclude compresia măduvei spinării (mielopatia cervicală) și verifică prin REG (500 MDL) impactul asupra circulației cerebrale.",
    "În lipsa indicației chirurgicale absolute, decompresia conservatoare se face blând și sigur: electroforeză medicală pe zona gulerului, laseroterapie (Spectr-LC), magnetoterapie, Bioptron, acupunctură (100 MDL / 30 min) și masaj cervical medical (200 MDL)."
]}
   equipmentHeading="Diagnostic și fizioterapie blândă pentru gât"
   equipmentCards={[
    {
        "slug": "rheotest",
        "title": "RHEOTEST (REG Cerebral)",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Verificarea circulației vertebro-bazilare în amețelile cervicale — 500 MDL."
    },
    {
        "slug": "aparat-electroforeza-medicamentoasa",
        "title": "Electroforeză Cervicală",
        "image": "/images/equipment/aparat-electroforeza-medicamentoasa.webp",
        "desc": "Calmarea inflamației radiculare C5–C7 fără manevre bruște — 100 MDL / 30 min."
    },
    {
        "slug": "spectr-lc",
        "title": "Spectr-LC (Laser & Magnet)",
        "image": "/images/equipment/spectr-lc.webp",
        "desc": "Reducerea edemului și relaxarea musculaturii cefei — 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Harta clinică a segmentelor cervicale (ce degete amorțesc la fiecare nivel)",
    "columns": [
        "Nivel discal",
        "Rădăcină",
        "Traseul durerii / amorțelii",
        "Mușchi afectați frecvent"
    ],
    "rows": [
        [
            "C4–C5",
            "C5",
            "Partea superioară a umărului și fața externă a brațului",
            "Deltoid (ridicarea brațului în lateral)"
        ],
        [
            "C5–C6",
            "C6",
            "Braț, antebraț extern până la degetul mare (police) și arătător",
            "Biceps, extensia încheieturii mâinii"
        ],
        [
            "C6–C7",
            "C7",
            "Partea posterioară a brațului până la degetul mijlociu",
            "Triceps (întinderea cotului)"
        ],
        [
            "C7–T1",
            "C8",
            "Marginea internă a antebrațului până la inelar și degetul mic",
            "Forța de prindere a degetelor mâinii"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "Recomandări practice până ajungi la consultația pentru hernia cervicală",
    "steps": [
        "Evită complet manevrele bruște de rotire/„trosnire” a gâtului și exercițiile cu greutăți deasupra capului.",
        "Folosește o pernă ortopedică joasă care menține gâtul aliniat neutru în somn (nu două perne înalte).",
        "Adu la consultație CD-ul RMN-ului cervical și eventualele investigații Doppler sau radiografii."
    ]
}}
   redFlagsNotice={{
    "heading": "Semne de mielopatie cervicală — evaluare neurochirurgicală urgentă / 112:",
    "items": [
        "Senzație de „curent electric” pe coloană la aplecarea bărbiei în piept (semnul Lhermitte) sau instabilitate bruscă la mers;",
        "Scădere rapidă a îndemânării ambelor mâini (nu poți încheia nasturii) sau slăbiciune apărută simultan în mâini și picioare;",
        "Amețeli brutale cu vedere dublă sau tulburare de vorbire (apelați 112)."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/test-postura-coloana/",
    "label": "Fă Testul orientativ de Postură și Coloană (2 min) →",
    "desc": "Verifică obiceiurile de lucru la birou care suprasolicită segmentul C5–C7:"
}}
   faqs={[
    {
        "q": "De ce mă doare gâtul și mă ia cu amețeală în același timp?",
        "a": "Spasmul profund al mușchilor suboccipitali și modificările cervicale (hernie C5–C6, spondiloză) pot irita receptorii proprioceptivi și influența circulația vertebro-bazilară; la Revimed PLUS+ evaluăm clinic + REG (500 MDL)."
    },
    {
        "q": "Hernia cervicală C5–C6 se operează obligatoriu?",
        "a": "Nu. Fără compresie medulară severă sau deficit motor progresiv, prima linie este tratamentul conservator ghidat de neurochirurg (500 MDL) + fizioterapie blândă (100 MDL / 30 min)."
    }
]}
   relatedLinks={[
    { href: "/nevralgie-occipitala-arnold-durere-ceafa-chisinau/", label: "Nevralgie Occipitală (Ceafă)" },
    {
        "href": "/osteocondroza-cervicala-chisinau/",
        "label": "Osteocondroză Cervicală"
    },
    {
        "href": "/neurochirurg-chisinau/",
        "label": "Neurochirurg Chișinău (500 MDL)"
    },
    {
        "href": "/tinitus-zgomote-urechi-spondiloza-cervicala-chisinau/",
        "label": "Tinitus & Spondiloză Cervicală"
    },
    {
        "href": "/tunel-carpian-amorteli-maini-chisinau/",
        "label": "Tunel Carpian vs. Cervicală"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
