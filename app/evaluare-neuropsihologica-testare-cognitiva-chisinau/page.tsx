import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/evaluare-neuropsihologica-testare-cognitiva-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/evaluare-neuropsihologica-testare-cognitiva-chisinau/", ru: "/ru/neyropsihologicheskoe-obsledovanie-pamyat-mmpi-kishinev/", "x-default": "/evaluare-neuropsihologica-testare-cognitiva-chisinau/" },
 title: "Evaluare Neuropsihologică, Testare Cognitivă Memorie & MMPI Chișinău",
 description: "Testare cognitivă avansată pentru memorie și atenție (800 MDL), evaluare funcțională neuropsihologică (700 MDL) și testări computerizate MMPI, Luscher, Sondy (200 MDL) în Chișinău — Revimed PLUS+."
});

export default function EvaluareNeuropsihologicaTestareCognitivaChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/evaluare-neuropsihologica-testare-cognitiva-chisinau"
   crumbLabel="Evaluare Neuropsihologică & Cognitivă"
   h1="Evaluare Neuropsihologică, Testare Cognitivă (Memorie/Atenție) și Teste Computerizate în Chișinău"
   lead="Măsurare obiectivă a memoriei, atenției, funcțiilor executive și profilului emoțional (MMPI, Luscher, Sondy) — integrată cu consultul neurologic al Dr. Igor Revenco la Revimed PLUS+."
   directAnswer="La Centrul Medical Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2) efectuăm evaluare funcțională neuropsihologică (700 MDL), testare cognitivă avansată pentru memorie și atenție (800 MDL), evaluarea funcțiilor executive (300 MDL), test de stres post-traumatic (400 MDL) și testări psihodiagnostice computerizate standardizate — MMPI, Luscher, Sondy (200 MDL), profil de personalitate (250 MDL), inteligență emoțională (300 MDL) și evaluare psihosocială (350 MDL; tarife orientative). Rezultatele se corelează cu evaluarea neurologică (Dr. Igor Revenco — 500 MDL). Programări: 022 60 50 60."
   introParagraph="Când apar uitări frecvente, dificultăți de concentrare după stres intens, traumatism cranian ori AVC, sau când familia se îngrijorează de schimbări de memorie la părinții seniori, o impresie subiectivă nu este suficientă. Bateriile neuropsihologice și testările computerizate măsoară obiectiv funcțiile corticale superioare și diferențiază oboseala/stresul de declinul cognitiv real."
   symptomsHeading="Când este utilă o evaluare cognitivă sau testare computerizată"
   symptoms={[
    "Tulburări de memorie recentă (uitarea conversațiilor, programărilor, numelor sau a pașilor din activități zilnice);",
    "Dificultăți de concentrare, lentoare în gândire („ceață mentală”) sau blocaje decizionale după burnout, COVID, comoție sau AVC;",
    "Evaluarea obiectivă a funcțiilor executive (planificare, organizare, atenție susținută) la adulți activi și seniori;",
    "Clarificarea impactului stresului cronic ori post-traumatic asupra echilibrului emoțional și al somnului (MMPI, Luscher, test stres post-traumatic)."
]}
   approachHeading="Corelarea testării cognitive cu diagnosticul neurologic complet"
   approachParagraphs={[
    "Un avantaj major al evaluării în cadrul Revimed PLUS+ este integrarea medicală: rezultatele testării cognitive sau ale bateriilor computerizate (MMPI, Luscher, Sondy, funcții executive) pot fi corelate direct de neurologul Dr. Igor Revenco (35+ ani experiență) cu examenul neurologic, EEG 19 canale (1600 MDL), Cartografierea creierului (600 MDL) sau Reoencefalografia REG (500 MDL).",
    "Această abordare separă precis cauzele reversibile (insomnie cronică, epuizare neuro-vegetativă, tulburări vasculare sau carențe) de afecțiunile neurodegenerative, oferind familiei un plan clar de monitorizare și recuperare neuro-cognitivă (inclusiv Electrosomn, Biofeedback și stimulare AVS — 100 MDL / 30 min)."
]}
   equipmentHeading="Diagnostic neuro-cognitiv și suport funcțional complementar"
   equipmentCards={[
    {
        "slug": "rheotest",
        "title": "Cartografiere Creier 3D & EEG",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Corelarea testării cognitive cu activitatea corticală: Cartografiere (600 MDL), EEG (1600 MDL), REG (500 MDL)."
    },
    {
        "slug": "electrosomn-3",
        "title": "Electrosomn & Biofeedback",
        "image": "/images/equipment/electrosomn-3.webp",
        "desc": "Refacerea somnului și reducerea stresului care blochează memoria — 100 MDL / 30 min."
    },
    {
        "slug": "bi-lenar",
        "title": "Bi-LENAR & Stimulare AVS",
        "image": "/images/equipment/bi-lenar.webp",
        "desc": "Suport neuro-vegetativ și antrenament al ritmurilor alfa/beta/theta — 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Ce evaluare alegi din lista Revimed PLUS+ (tarife orientative 2026)",
    "columns": [
        "Obiectivul tău",
        "Evaluarea potrivită",
        "Tarif orientativ",
        "Cu ce se asociază util"
    ],
    "rows": [
        [
            "Verificare completă memorie, atenție, orientare (seniori / post-AVC)",
            "Testare cognitivă avansată / Evaluare funcțională neuropsihologică",
            "800 MDL / 700 MDL",
            "Consult Neurolog (500 MDL) + REG (500 MDL) / EEG (1600 MDL)"
        ],
        [
            "Planificare, concentrare, memorie de lucru, organizare",
            "Evaluare a funcțiilor executive",
            "300 MDL",
            "Cartografiere creier (600 MDL) + Biofeedback / AVS (100 MDL)"
        ],
        [
            "Profil clinic de personalitate, anxietate, reacție la stres",
            "Testări computerizate MMPI / Luscher / Sondy / Personalitate",
            "200–250 MDL",
            "Consult Neurolog (500 MDL) + test vegetativ RUNO (500 MDL)"
        ],
        [
            "Simptome persistente după un eveniment traumatic major",
            "Test de stres post-traumatic / Evaluare psihosocială",
            "400 MDL / 350 MDL",
            "Electrosomn (100 MDL / 30 min) + Biofeedback (100 MDL / 30 min)"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "Pregătirea pentru o testare cognitivă sau computerizată precisă (5 pași)",
    "steps": [
        "Odihnește-te bine cu o noapte înainte — privarea de somn scade artificial scorurile de atenție și memorie de lucru.",
        "Vino cu ochelarii de citit și/sau aparatul auditiv (dacă folosești), esențiale pentru probele vizuale și verbale.",
        "Adu lista medicamentelor zilnice (sedativele sau anumite pastile de somn pot influența viteza de reacție) și analizele recente (TSH, vitamina B12, glicemie).",
        "Pentru evaluarea seniorilor, este foarte util ca un membru al familiei să însoțească pacientul pentru a oferi context despre evoluția ultimelor luni.",
        "Evită alcoolul cu 24h înainte și excesul de cafea imediat înainte de testare."
    ]
}}
   redFlagsNotice={{
    "heading": "Când confuzia sau pierderea de memorie este o urgență medicală (sună la 112):",
    "items": [
        "Confuzie instalată brusc în câteva minute sau ore (delirium acut, AVC, hipoglicemie severă sau infecție acută);",
        "Pierdere de memorie apărută imediat după o lovitură la cap ori însoțită de febră mare și durere intensă de cap;",
        "Dezorientare bruscă însoțită de dificultăți de vorbire, asimetrie facială ori pierderea echilibrului."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/screening-neurologic/",
    "label": "Începe cu Screening-ul Neurologic Orientativ (2 min) →",
    "desc": "Identifică principalele dificultăți de memorie, somn sau atenție înainte de programare:"
}}
   faqs={[
    {
        "q": "Cât durează testările computerizate (MMPI, Luscher) și evaluarea cognitivă?",
        "a": "Testele individuale rapide (Luscher, Sondy, funcții executive) durează în medie 20–40 de minute, iar inventarul complet MMPI sau evaluarea neuropsihologică/cognitivă avansată poate dura 60–90+ minute, în funcție de ritmul pacientului."
    },
    {
        "q": "Deosebește testarea cognitivă uitarea normală de la stres de începutul demenței?",
        "a": "Evaluarea neuropsihologică (700 MDL) și testarea cognitivă avansată (800 MDL), corelate cu consultul neurologului (500 MDL) și analizele/imagistica recomandate, ajută la diferențierea tulburărilor funcționale reversibile (stres, insomnie, carențe) de declinul cognitiv obiectiv."
    },
    {
        "q": "Se pot combina testările computerizate cu terapii nefarmacologice la Revimed PLUS+?",
        "a": "Da — pe lângă evaluarea neurologică (500 MDL), diagnosticele funcționale (EEG, REG, Cartografiere, RUNO) și testările psihodiagnostice computerizate, medicul poate recomanda metode nefarmacologice blânde precum Biofeedback, stimulare AVS și Electrosomn (100 MDL / 30 min, tarife orientative), iar la nevoie oferă recomandare spre alte specialități."
    }
]}
   relatedLinks={[
    {
        "href": "/boala-parkinson-tremor-memorie-chisinau/",
        "label": "Parkinson, Tremor & Memorie"
    },
    {
        "href": "/oboseala-cronica-burnout-biofeedback-chisinau/",
        "label": "Oboseală Cronică & Biofeedback"
    },
    {
        "href": "/cartografierea-creierului-chisinau/",
        "label": "Cartografiere Creier 3D (600 MDL)"
    },
    {
        "href": "/recuperare-dupa-avc-chisinau/",
        "label": "Recuperare după AVC"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
