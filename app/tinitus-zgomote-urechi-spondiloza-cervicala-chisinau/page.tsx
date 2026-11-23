import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/tinitus-zgomote-urechi-spondiloza-cervicala-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/tinitus-zgomote-urechi-spondiloza-cervicala-chisinau/", ru: "/ru/shum-v-ushah-tinnitus-spondilez-kishinev/", "x-default": "/tinitus-zgomote-urechi-spondiloza-cervicala-chisinau/" },
 title: "Zgomote în Urechi (Tinitus) & Spondiloză Cervicală Chișinău — REG 500 MDL",
 description: "Diagnostic diferențial pentru tinitus (zgomote/țiuit în urechi) și amețeli din spondiloza cervicală în Chișinău (Ciocana): Neurolog 500 MDL, REG 500 MDL, fizioterapie 100 MDL. 022 60 50 60."
});

export default function TinitusZgomoteUrechiSpondilozaCervicalaChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/tinitus-zgomote-urechi-spondiloza-cervicala-chisinau"
   crumbLabel="Tinitus & Spondiloză Cervicală"
   h1="Tinitus (Zgomote în Urechi) și Spondiloză Cervicală cu Amețeli — Diagnostic Diferențial în Chișinău"
   lead="Cum diferențiem tinitusul vascular, cervicogen și neuro-vegetativ prin reoencefalografie REG (500 MDL) și evaluare neurologică cu Dr. Igor Revenco la Revimed PLUS+ (Ciocana)."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), evaluarea neurologică pentru zgomote în urechi (tinitus) și amețeli cervicale costă 500 MDL (repetată 400 MDL), reoencefalografia vasculară cerebrală REG (RHEOTEST) costă 500 MDL, termalgometria vegetativă RUNO 500 MDL, iar procedurile fizioterapeutice cervicale și de neuro-reglare costă 100 MDL / 30 min (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Țiuitul, vâjâitul sau sunetul pulsatil în una ori ambele urechi (tinitus), adesea asociat cu amețeli la întoarcerea capului și tensiune în ceafă, nu are întotdeauna o cauză strict ORL: contractura musculară cervicală din spondiloză, disfuncția microcirculației vertebro-bazilare și hiperreactivitatea sistemului nervos autonom sunt cauze neurologice frecvente."
   symptomsHeading="Indicii care sugerează o componentă vasculară sau cervicală a tinitusului"
   symptoms={[
    "Zgomotul în urechi se modifică la mișcările gâtului, strângerea maxilarului sau după ore lungi la monitor;",
    "Vâjâit pulsatil în ritmul bătăilor inimii, accentuat la efort sau variații ale tensiunii arteriale;",
    "Amețeli, instabilitate, vedere ușor încețoșată și durere surdă în ceafă (spondiloză / osteocondroză cervicală);",
    "Zgomot mai intens seara în liniște, care întreține insomnia și iritabilitatea nervoasă."
]}
   approachHeading="Evaluare vasculară cerebrală REG și decontracturare cervicală blândă"
   approachParagraphs={[
    "După excluderea unui dop de cerumen sau a unei patologii auditive (ORL/audiogramă), Dr. Igor Revenco evaluează circulația cerebrală prin reoencefalografie (REG RHEOTEST — 500 MDL) și tonusul vegetativ prin RUNO (500 MDL).",
    "În tinitusul cervicogen și vascular, combinarea tratamentului vasodilatator/trofic cu fizioterapia zonei cervicale (electroforeză, magnetoterapie, laser, Electrosomn, Transair TES — 100 MDL / 30 min) și masaj cervical reduce tensiunea neuro-vasculară."
]}
   equipmentHeading="Diagnostic vascular și fizioterapie cervicală"
   equipmentCards={[
    {
        "slug": "rheotest",
        "title": "RHEOTEST (REG Cerebral)",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Evaluarea elasticității vasculare și a drenajului venos cerebral — 500 MDL."
    },
    {
        "slug": "aparat-electroforeza-medicamentoasa",
        "title": "Electroforeză Zona Gulerului",
        "image": "/images/equipment/aparat-electroforeza-medicamentoasa.webp",
        "desc": "Îmbunătățirea microcirculației cervicale în spondiloză — 100 MDL / 30 min."
    },
    {
        "slug": "transair-01p-transair-05",
        "title": "Transair TES & Electrosomn",
        "image": "/images/equipment/transair.webp",
        "desc": "Reducerea hiperexcitabilității centrale și a insomniei asociate — 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Diagnostic diferențial: 4 tipuri frecvente de zgomote în urechi (tinitus)",
    "columns": [
        "Tip tinitus",
        "Cum se manifestă",
        "Investigație utilă",
        "Direcție terapeutică"
    ],
    "rows": [
        [
            "Cervicogen (spondiloză)",
            "Se schimbă la mișcarea gâtului/umerilor + durere ceafă",
            "Consult neurolog (500 MDL) + Electrospondilografie (500 MDL)",
            "Fizioterapie cervicală (100 MDL) + masaj"
        ],
        [
            "Vascular / pulsatil",
            "Sunet ritmic în tact cu pulsul, amețeli, oscilații TA",
            "REG RHEOTEST (500 MDL) + ECG (200 MDL)",
            "Control vascular + reglare microcirculație"
        ],
        [
            "Neuro-vegetativ / stres",
            "Țiuit bilateral accentuat noaptea, insomnie, stres",
            "Termalgometrie RUNO (500 MDL) / EEG (1600 MDL)",
            "Electrosomn, Transair TES, Biofeedback (100 MDL)"
        ],
        [
            "ORL / acustic",
            "După zgomot puternic, otită sau scădere bruscă de auz",
            "Evaluare ORL + audiogramă (prioritar)",
            "Colaborare ORL + suport neurologic"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "Ce pregătești înainte de vizita pentru tinitus și amețeli",
    "steps": [
        "Măsoară tensiunea arterială dimineața și seara timp de 3–5 zile și adu valorile notate.",
        "Dacă ai deja o audiogramă, consult ORL, RMN cervical sau Doppler carotidian, ia rezultatele cu tine.",
        "Evită cafeaua și energizantele cu 3 ore înainte de reoencefalografia REG pentru un traseu vascular fidel."
    ]
}}
   redFlagsNotice={{
    "heading": "Semne care impun evaluare medicală de urgență (112):",
    "items": [
        "Scădere bruscă a auzului la o ureche în câteva ore (surditate brusc instalată — urgență ORL);",
        "Amețeală brutală însoțită de vedere dublă, tulburare de vorbire, asimetrie facială sau amorțeală pe o jumătate a corpului (suspiciune AVC — apelați 112)."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/screening-neurologic/",
    "label": "Completează Screeningul Neurologic orientativ (2 min) →",
    "desc": "Organizează-ți simptomele înainte de consultație cu instrumentul nostru gratuit de auto-evaluare orientativă:"
}}
   faqs={[
    {
        "q": "Poate spondiloza cervicală să dea amețeli și țiuit în urechi?",
        "a": "Da, contractura profundă a mușchilor suboccipitali și afectarea circulației vertebro-bazilare din spondiloza cervicală provoacă frecvent amețeli și tinitus cervicogen."
    },
    {
        "q": "Cât costă investigația REG pentru circulația cerebrală?",
        "a": "Reoencefalografia (REG) pe sistemul RHEOTEST are tariful orientativ de 500 MDL la Revimed PLUS+."
    }
]}
   relatedLinks={[
    {
        "href": "/reoencefalografie-chisinau/",
        "label": "Reoencefalografie REG (500 MDL)"
    },
    {
        "href": "/ameteli-vertij-chisinau/",
        "label": "Amețeli & Vertij Chișinău"
    },
    {
        "href": "/osteocondroza-cervicala-chisinau/",
        "label": "Osteocondroză Cervicală"
    },
    {
        "href": "/distonie-neurovegetativa-chisinau/",
        "label": "Distonie Neurovegetativă"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
