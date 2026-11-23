import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/enurezis-nocturn-copii-neuropediatru-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/enurezis-nocturn-copii-neuropediatru-chisinau/", ru: "/ru/enurez-u-detey-nevrolog-kishinev/", "x-default": "/enurezis-nocturn-copii-neuropediatru-chisinau/" },
 title: "Enurezis Nocturn la Copii Chișinău — Neuropediatru, EEG & Electrosomn",
 description: "Evaluare neuropediatrică blândă pentru enurezis nocturn la copii (>5 ani) în Chișinău (Ciocana) — Dr. Igor Revenco (500 MDL), EEG (1600 MDL) și Electrosomn (100 MDL / 30 min). 022 60 50 60."
});

export default function EnurezisNocturnCopiiNeuropediatruChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/enurezis-nocturn-copii-neuropediatru-chisinau"
   crumbLabel="Enurezis Nocturn Copii"
   h1="Enurezis Nocturn la Copii în Chișinău — Evaluare Neuropediatrică și Abordare Blândă"
   lead="Înțelegerea legăturii dintre somnul excesiv de profund, maturizarea neuro-vezicală și stresul copilului — evaluare calmă cu neuropediatrul Dr. Igor Revenco la Revimed PLUS+."
   directAnswer="Enurezisul nocturn (pierderea involuntară de urină în somn după vârsta de 5 ani) este frecvent legat de întârzierea maturizării reflexului de trezire la semnalul vezicii, de somnul foarte profund sau de stres emoțional. La Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația primară la neuropediatrul Dr. Igor Revenco (35+ ani experiență) costă 500 MDL (repetată 400 MDL), examenul expres Uro-test 200 MDL, EEG pediatric 1600 MDL, iar procedurile blânde de neuro-reglare (Electrosomn, Bi-LENAR) costă 100 MDL / 30 min (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Primul mesaj esențial pentru părinți: copilul NU face intenționat și nu trebuie certat sau rușinat — presiunea emoțională agravează și mai mult enurezisul. Evaluarea corectă diferențiază enurezisul primar (de maturizare) de enurezisul secundar (apărut după o perioadă uscată de peste 6 luni) și exclude cauzele urologice sau metabolice."
   symptomsHeading="Când este recomandată evaluarea neuropediatrică"
   symptoms={[
    "Episoade nocturne persistente după vârsta de 5 ani (de 2+ ori pe săptămână);",
    "Somn extrem de profund din care copilul se trezește foarte greu chiar și la stimuli puternici;",
    "Reapariția episoadelor după un stres (început de școală/grădiniță, schimbări în familie);",
    "Asocierea cu somn agitat, pavor nocturn, ticuri nervoase sau oboseală diurnă."
]}
   approachHeading="Abordare blândă, fără culpabilizarea copilului"
   approachParagraphs={[
    "Dr. Igor Revenco evaluează dezvoltarea neurologică, regimul de somn/lichide și recomandă excluderea unei infecții urinare sau a constipației cronice (uro-test / consult pediatric/nefrologic când este cazul) și, la indicație, o electroencefalogramă pediatrică (EEG — 1600 MDL) pentru analiza profunzimii și maturizării somnului.",
    "În planul de suport, procedurile fizioterapeutice blânde nefarmacologice (Electrosomn pediatric, Bi-LENAR, magnetoterapie ușoară — 100 MDL / 30 min) și rutina calmă de seară susțin maturizarea controlului nocturn."
]}
   equipmentHeading="Evaluare și terapie blândă pediatrică"
   equipmentCards={[
    {
        "slug": "electrosomn-4t",
        "title": "Electrosomn Pediatric",
        "image": "/images/equipment/electrosomn-4t.webp",
        "desc": "Reglarea blândă a profunzimii fazelor de somn — 100 MDL / 30 min."
    },
    {
        "slug": "bi-lenar",
        "title": "Bi-LENAR",
        "image": "/images/equipment/bi-lenar.webp",
        "desc": "Reducerea tensiunii emoționale și a stresului școlar — 100 MDL / 30 min."
    },
    {
        "slug": "rheotest",
        "title": "EEG Pediatric 19 Canale",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Evaluarea neinvazivă a maturizării bioelectrice corticale — 1600 MDL."
    }
]}
   customDecisionTable={{
    "heading": "Tipuri de enurezis la copii și direcția corectă de evaluare",
    "columns": [
        "Tip",
        "Descriere",
        "Cauze frecvente",
        "Evaluare recomandată"
    ],
    "rows": [
        [
            "Enurezis primar monosimptomatic",
            "Copilul >5 ani nu a avut perioadă uscată >6 luni, ziua e normal",
            "Somn foarte profund, maturizare lentă a reflexului vezical, ereditate",
            "Consult neuropediatru (500 MDL) + rutină + Electrosomn (100 MDL)"
        ],
        [
            "Enurezis secundar",
            "Reapare după cel puțin 6 luni de nopți uscate",
            "Stres emoțional, infecție urinară, constipație sau factori metabolici",
            "Sumar urină (Uro-test 200 MDL) + Neuropediatru + Pediatru"
        ],
        [
            "Enurezis cu simptome diurne",
            "Urinări foarte dese ziua, usturime sau pierderi și ziua",
            "Vezică hiperactivă, infecție urinară sau cauză urologică",
            "Evaluare prioritară nefrologie/urologie pediatrică + neuropediatru"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "5 pași blânzi de igienă a somnului înainte de consultație (fără presiune pe copil)",
    "steps": [
        "Oferă hidratare suficientă dimineața și la prânz, reducând treptat lichidele dulci/carbogazoase cu 2 ore înainte de culcare.",
        "Include mersul liniștit la toaletă ca ultim pas înainte de somn, fără grabă și fără reproșuri.",
        "Oprește ecranele (telefon, tabletă, TV) cu 60 de minute înainte de culcare pentru un somn mai echilibrat.",
        "Ține un calendar simplu de 2 săptămâni (nopți uscate vs. umede) și verifică tranzitul intestinal (constipația apasă pe vezică).",
        "Adu la consult un sumar de urină recent (sau efectuează Uro-test — 200 MDL) pentru a exclude o infecție urinară."
    ]
}}
   redFlagsNotice={{
    "heading": "Când este necesară evaluare pediatrică/urologică rapidă (sau urgență 112):",
    "items": [
        "Sete excesivă bruscă, urinări foarte abundente și scădere în greutate (se verifică urgent glicemia — diabet infantil);",
        "Febră, usturime la urinare, dureri lombare sau sânge în urină (infecție urinară acută);",
        "Pierdere de urină însoțită de tulburări de mers ori slăbiciune în picioare."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/respiratie-terapeutica/",
    "label": "Încearcă exercițiul blând de Respirație Terapeutică de seară →",
    "desc": "O rutină calmă de 3 minute înainte de culcare ajută la relaxarea sistemului nervos:"
}}
   faqs={[
    {
        "q": "De la ce vârstă este considerat enurezisul o problemă care necesită consult?",
        "a": "Până la 5 ani controlul nocturn este încă în maturizare; după 5 ani, dacă episoadele persistă regulat, evaluarea la neuropediatru (500 MDL) ajută la stabilirea unui plan calm și eficient."
    },
    {
        "q": "Este dureros sau sperios Electrosomnul pentru un copil?",
        "a": "Nu. Procedura este blândă, complet nedureroasă și se desfășoară în prezența părintelui, la tariful orientativ de 100 MDL / 30 min."
    }
]}
   relatedLinks={[
    {
        "href": "/neuropediatru-chisinau/",
        "label": "Neuropediatru Chișinău (500 MDL)"
    },
    {
        "href": "/ticuri-nervoase-balbaiala-copii-chisinau/",
        "label": "Ticuri & Logonevroză Copii"
    },
    {
        "href": "/eeg-copii-chisinau/",
        "label": "EEG Copii (1600 MDL)"
    },
    {
        "href": "/electrosomn-chisinau/",
        "label": "Electrosomn (100 MDL)"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
