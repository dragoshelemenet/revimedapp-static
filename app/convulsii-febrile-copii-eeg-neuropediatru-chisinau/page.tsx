import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/convulsii-febrile-copii-eeg-neuropediatru-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/convulsii-febrile-copii-eeg-neuropediatru-chisinau/", ru: "/ru/febrilnye-sudorogi-u-detey-eeg-kishinev/", "x-default": "/convulsii-febrile-copii-eeg-neuropediatru-chisinau/" },
 title: "Convulsii Febrile la Copii Chișinău — Prim Ajutor, Neuropediatru & Când e Indicat EEG",
 description: "Ghid calm pentru părinți despre convulsiile febrile simple vs. complexe la copii (6 luni – 5 ani), prim ajutor corect (112) și când este indicat EEG-ul la neuropediatrul Dr. Igor Revenco (500 MDL, EEG 1600 MDL)."
});

export default function ConvulsiiFebrileCopiiEegNeuropediatruChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/convulsii-febrile-copii-eeg-neuropediatru-chisinau"
   crumbLabel="Convulsii Febrile Copii"
   h1="Convulsii Febrile la Copii în Chișinău — Prim Ajutor, Simple vs. Complexe și Când e Indicat EEG"
   lead="De ce o convulsie febrilă simplă NU înseamnă automat epilepsie, ce trebuie și ce NU trebuie să faci în timpul episodului și când recomandă neuropediatrul Dr. Igor Revenco efectuarea EEG."
   directAnswer="Convulsiile febrile apar la copii între 6 luni și 5 ani pe fondul creșterii rapide a febrei (de obicei >38°C) și, în forma lor simplă (<15 min, generalizată, un singur episod în 24h), au evoluție benignă și nu echivalează cu epilepsia. Prima convulsie impune evaluare medicală de urgență (112 / pediatru) pentru identificarea cauzei febrei. Ulterior, la Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), evaluarea neuropediatrică cu Dr. Igor Revenco (35+ ani experiență) costă 500 MDL (repetată 400 MDL), iar EEG pediatric 19 canale (când există indicație clinică) costă 1600 MDL (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Pentru orice părinte, o convulsie febrilă este unul dintre cele mai înfricoșătoare momente posibile. Informarea medicală corectă reduce panica, previne manevrele periculoase (cum ar fi introducerea obiectelor în gură) și clarifică precis diferența dintre convulsiile febrile simple și cele complexe, precum și momentul optim pentru un EEG pediatric."
   symptomsHeading="Când este necesar consultul neuropediatric după o convulsie febrilă"
   symptoms={[
    "După primul episod de convulsie febrilă (odată rezolvată evaluarea pediatrică de urgență), pentru informarea corectă și planul de acțiune al familiei;",
    "Dacă episodul a fost complex: a durat peste 15 minute, s-a repetat în decurs de 24 de ore sau a afectat doar o singură parte a corpului;",
    "Când convulsiile febrile se repetă la mai multe episoade de febră, apar sub vârsta de 6 luni sau după 5 ani, ori există antecedente familiale de epilepsie;",
    "Când părinții vor să diferențieze clar convulsiile febrile reale de frisoanele febrile puternice."
]}
   approachHeading="Când este indicat EEG-ul și cum decurge evaluarea la Dr. Igor Revenco"
   approachParagraphs={[
    "Conform ghidurilor clinice internaționale, o convulsie febrilă simplă tipică nu impune obligatoriu EEG de rutină imediat în febră — de fapt, un EEG efectuat în plină infecție febrilă poate arăta modificări nespecifice tranzitorii care sperie inutil părinții. În schimb, la convulsiile febrile complexe, recurente, asimetrice sau asociate cu întârzieri de dezvoltare, neuropediatrul Dr. Igor Revenco recomandă efectuarea EEG pediatric 19 canale (1600 MDL) de obicei după vindecarea episodului acut (la 10–14 zile sau conform indicației individuale).",
    "La consultație (500 MDL), medicul analizează descrierea exactă a episodului, istoricul febrei și examenul neurologic, explică părinților ce este benign, care sunt regulile de siguranță la viitoarele viroze și, la nevoie, recomandă evaluări funcționale neinvazive suplimentare."
]}
   equipmentHeading="Diagnostic pediatric neinvaziv la indicația neuropediatrului"
   equipmentCards={[
    {
        "slug": "rheotest",
        "title": "EEG Pediatric 19 Canale",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Investigație complet nedureroasă recomandată în convulsii complexe sau recurente — 1600 MDL."
    },
    {
        "slug": "aparat-amp",
        "title": "Screening Funcțional AMP",
        "image": "/images/equipment/aparat-amp.webp",
        "desc": "Evaluare neinvazivă complementară a stării generale funcționale — 1000 MDL."
    },
    {
        "slug": "electrosomn-4t",
        "title": "Electrosomn Pediatric",
        "image": "/images/equipment/electrosomn-4t.webp",
        "desc": "Suport blând al somnului numai dacă este indicat ulterior de neuropediatru (nu în stare febrilă) — 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Diferențiere esențială: Convulsie febrilă SIMPLĂ vs. COMPLEXĂ vs. Frison febril",
    "columns": [
        "Tip episod",
        "Caracteristici clinice",
        "Risc de epilepsie / evoluție",
        "Indicație EEG & conduită"
    ],
    "rows": [
        [
            "Convulsie febrilă SIMPLĂ",
            "Vârsta 6 luni – 5 ani, <15 min (de obicei 1–3 min), generalizată simetric, un singur episod în 24h",
            "Evoluție benignă; nu afectează dezvoltarea intelectuală a copilului",
            "Consult pediatric acut + control neuropediatru (500 MDL); EEG nu este obligatoriu de rutină"
        ],
        [
            "Convulsie febrilă COMPLEXĂ",
            "Durată >15 min, focală (o singură mână/parte a corpului) sau >1 episod în aceleași 24h",
            "Necesită supraveghere neuropediatrică atentă pentru excluderea cauzelor subiacente",
            "Urgență 112 + Neuropediatru (500 MDL) + EEG pediatric (1600 MDL) la indicația medicului"
        ],
        [
            "Frison febril (NU e convulsie)",
            "Tremur fin al corpului/bărbiei la creșterea temperaturii; copilul rămâne conștient și răspunde",
            "Reacție fiziologică obișnuită la febră, fără risc neurologic",
            "Controlul febrei conform sfatului pediatrului; nu necesită EEG"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "5 reguli de prim ajutor calm în convulsia febrilă și pregătirea pentru consult",
    "steps": [
        "Așază copilul ușor pe o parte (poziție laterală de siguranță) pe o suprafață plană și îndepărtează obiectele dure din jur.",
        "NU băga NICIODATĂ linguri, degete, batiste sau apă în gura copilului și nu încerca să îi imobilizezi cu forța brațele/picioarele.",
        "Urmărește ceasul pentru durata exactă și observă dacă mișcările sunt pe ambele părți ale corpului sau doar pe una (detaliu cheie pentru neuropediatru).",
        "După evaluarea pediatrică de urgență a cauzei febrei, adu la Dr. Igor Revenco (500 MDL) biletul de la spital/pediatru și valorile temperaturii.",
        "Dacă medicul indică EEG pediatric (1600 MDL), programează-l când copilul este afebril, cu părul curat și uscat (fără balsam/ulei)."
    ]
}}
   redFlagsNotice={{
    "heading": "Sună IMEDIAT la 112 dacă observi oricare dintre următoarele:",
    "items": [
        "Este prima convulsie din viața copilului sau convulsia durează peste 5 minute;",
        "Apar convulsii repetate în același episod febril ori copilul are dificultăți de respirație / buze vineții;",
        "Copilul are gâtul rigid, erupție cutanată care nu pălește la apăsare cu un pahar, vărsături repetate sau somnolență extremă după episod;",
        "Convulsia a apărut fără febră (convulsie afebrilă) sau la un sugar sub 6 luni."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/screening-neurologic/",
    "label": "Deschide Screening-ul Neurologic Orientativ →",
    "desc": "Organizează istoricul simptomelor înainte de consultația cu neuropediatrul Dr. Igor Revenco:"
}}
   faqs={[
    {
        "q": "Deteriorează o convulsie febrilă scurtă creierul copilului?",
        "a": "Nu. Dovezile medicale arată că o convulsie febrilă simplă (scurtă, sub 15 minute) nu provoacă leziuni cerebrale și nu afectează inteligența sau dezvoltarea ulterioară a copilului."
    },
    {
        "q": "La cât timp după o convulsie febrilă se face EEG-ul, dacă este indicat?",
        "a": "De regulă, atunci când neuropediatrul consideră EEG-ul necesar (de ex. în convulsii complexe sau recurente), examinarea (1600 MDL) se programează după ce febra și infecția acută au trecut complet (frecvent la 10–14 zile), pentru un traseu curat și relevant."
    },
    {
        "q": "Pot preveni antitermicele apariția convulsiilor febrile?",
        "a": "Antitermicele recomandate de pediatru cresc confortul copilului în febră, însă studiile arată că ele nu pot preveni întotdeauna apariția unei convulsii febrile atunci când temperatura urcă brusc. De aceea, cel mai important este ca părinții să cunoască regulile calme de prim ajutor și să aibă un plan clar de la neuropediatru."
    }
]}
   relatedLinks={[
    {
        "href": "/neuropediatru-chisinau/",
        "label": "Neuropediatru Chișinău (500 MDL)"
    },
    {
        "href": "/eeg-copii-chisinau/",
        "label": "EEG Copii Chișinău (1600 MDL)"
    },
    {
        "href": "/epilepsie-convulsii-chisinau/",
        "label": "Epilepsie & Convulsii"
    },
    {
        "href": "/intarziere-vorbire-copii-neuropediatru-chisinau/",
        "label": "Întârziere de Vorbire Copii"
    },
    {
        "href": "/enurezis-nocturn-copii-neuropediatru-chisinau/",
        "label": "Enurezis Nocturn Copii"
    }
]}
  />
 );
}
