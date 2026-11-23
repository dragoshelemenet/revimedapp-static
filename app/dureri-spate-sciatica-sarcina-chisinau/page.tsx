import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/dureri-spate-sciatica-sarcina-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/dureri-spate-sciatica-sarcina-chisinau/", ru: "/ru/bol-v-spine-ishias-pri-beremennosti-kishinev/", "x-default": "/dureri-spate-sciatica-sarcina-chisinau/" },
 title: "Dureri de Spate și Sciatică în Sarcină Chișinău — Ce e Sigur & Ce e Contraindicat",
 description: "Ghid de siguranță pentru durerile lombare și sciatica în sarcină în Chișinău: consult ginecolog + neurolog Dr. Igor Revenco (500 MDL), ce proceduri sunt contraindicate și ce măsuri blânde sunt sigure."
});

export default function DureriSpateSciaticaSarcinaChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/dureri-spate-sciatica-sarcina-chisinau"
   crumbLabel="Spate & Sciatică în Sarcină"
   h1="Dureri de Spate și Sciatică în Sarcină în Chișinău — Ce Este Sigur și Ce Este Contraindicat"
   lead="Reguli clare de siguranță pentru mamă și copil: de ce multe proceduri de fizioterapie și antiinflamatoare sunt interzise în sarcină și cum te ajută evaluarea neurologică coordonată cu medicul ginecolog."
   directAnswer="Durerile lombare și sciatica în sarcină sunt frecvente din cauza hormonului relaxină, deplasării centrului de greutate și presiunii asupra nervului sciatic sau mușchiului piriform — însă orice intervenție necesită mai întâi acordul medicului ginecolog-obstetrician. La Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația neurologică de siguranță cu Dr. Igor Revenco (35+ ani experiență, membru EANS) costă 500 MDL (repetată 400 MDL, tarife orientative) și stabilește exact ce măsuri non-medicamentoase blânde (postură, kinetoterapie prenatală adaptată) sunt permise și ce proceduri (electroterapie, magnetoterapie, ultrasunete lombar, băi fierbinți) rămân strict contraindicate în sarcină. Programări: 022 60 50 60."
   introParagraph="Gravidele cu dureri lombare sau junghiuri pe picior primesc adesea sfaturi contradictorii online. Prioritatea absolută este siguranța sarcinii: majoritatea antiinflamatoarelor uzuale și a procedurilor de fizioterapie cu curenți, câmp magnetic sau căldură profundă pe zona lombară sunt contraindicate — dar există metode blânde, validate medical, pentru a reduce presiunea pe coloană."
   symptomsHeading="Când este util consultul neurologic în sarcină (cu acordul ginecologului)"
   symptoms={[
    "Durere lombară joasă sau în zona articulațiilor sacro-iliace care limitează mersul și somnul în trimestrul II–III;",
    "Durere de tip sciatic (din fesă pe spatele coapsei sau gambei) agravată la stat în picioare ori la întoarcerea în pat;",
    "Furnicături sau amorțeli în degetele mâinilor (sindrom de tunel carpian de sarcină prin retenție de lichide) sau ale picioarelor;",
    "Istoric anterior de hernie de disc L4–S1 sau scolioză care necesită supraveghere sigură pe durata sarcinii."
]}
   approachHeading="Principiul „siguranța pe primul loc” la Revimed PLUS+"
   approachParagraphs={[
    "Dr. Igor Revenco evaluează clinic fără investigații cu radiații (fără raze X / CT!) originea durerii — diferențiind suprasolicitarea sacro-iliacă și spasmul piriform de o compresie radiculară autentică — și colaborează transparent cu recomandările medicului obstetrician-ginecolog care urmărește sarcina.",
    "Planul de confort în sarcină exclude strict procedurile riscante și se bazează pe ergonomie, posturi de descărcare (dormit pe partea stângă cu pernă între genunchi), exerciții blânde de mobilitate pelvină adaptate trimestrului și, numai cu aviz explicit al ginecologului, masaj prenatal foarte delicat (fără presiune lombară profundă)."
]}
   equipmentHeading="Evaluare clinică fără radiații și recuperare adaptată"
   equipmentCards={[
    {
        "slug": "rheotest",
        "title": "Evaluare Clinică Fără Radiații",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Consult neurologic sigur cu Dr. Igor Revenco (500 MDL) — fără raze X și fără proceduri riscante."
    },
    {
        "slug": "electrosomn-3",
        "title": "Contraindicații Verificate Strict",
        "image": "/images/equipment/electrosomn-3.webp",
        "desc": "Fiecare procedură fizioterapeutică este verificată strict de medic pentru siguranța sarcinii."
    },
    {
        "slug": "bi-lenar",
        "title": "Reabilitare Postpartum",
        "image": "/images/equipment/bi-lenar.webp",
        "desc": "Plan complet de refacere a coloanei după naștere, când toate procedurile redevin disponibile."
    }
]}
   customDecisionTable={{
    "heading": "Matrice de siguranță în sarcină: Ce este PERMIS (cu aviz medical) vs. STRICT CONTRAINDICAT",
    "columns": [
        "Metodă / Procedură",
        "Status în sarcină",
        "Explicație medicală"
    ],
    "rows": [
        [
            "Electroterapie, Amplipuls, Electroforeză, Magnetoterapie, Ultrasunete lombar/abdomen",
            "CONTRAINDICAT",
            "Curenții electrici, câmpul magnetic și ultrasunetele profunde pe trunchi/pelvis sunt interzise în sarcină"
        ],
        [
            "Băi fierbinți, nămol Saki, saună terapeutică, comprese foarte fierbinți",
            "CONTRAINDICAT",
            "Creșterea temperaturii corporale și vasodilatația pelvină prezintă riscuri pentru sarcină"
        ],
        [
            "Antiinflamatoare uzuale (AINS) sau unguente forte fără rețetă",
            "INTERZIS fără aviz ginecolog",
            "Multe antiinflamatoare sunt strict contraindicate mai ales în trimestrul I și III"
        ],
        [
            "Consult Neurolog (500 MDL), postură, pernă de sarcină, kinetoterapie prenatală blândă",
            "SIGUR (cu acordul ginecologului)",
            "Descarcă mecanic coloana și nervul sciatic fără riscuri medicamentoase sau fizice"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "5 măsuri zilnice blânde pentru spatele gravidei",
    "steps": [
        "Confirmă întâi cu medicul ginecolog că durerea lombară nu reprezintă contracții uterine sau complicație obstetricală.",
        "Dormi pe o parte (ideal pe partea stângă) cu o pernă fermă între genunchi și o pernă sub abdomen pentru alinierea bazinului.",
        "Evită statul nemișcat în picioare mult timp și poartă încălțăminte comodă cu talpă joasă și susținere (nu balerini complet plați și nu tocuri).",
        "Ridică-te din pat întorcându-te mai întâi pe o parte și împingând cu brațele, fără a forța musculatura abdominală.",
        "Adu carnetul gravidei și eventualele RMN-uri efectuate înainte de sarcină la consultația neurologică."
    ]
}}
   redFlagsNotice={{
    "heading": "Sună IMEDIAT la 112 sau la medicul ginecolog / maternitate dacă durerea de spate se asociază cu:",
    "items": [
        "Durere ritmică cu întărirea abdomenului (contracții), sângerare vaginală sau scurgere de lichid amniotic;",
        "Febră, frisoane sau usturime la urinare (suspiciune de infecție renală/pielonefrită de sarcină);",
        "Durere de cap severă cu vedere încețoșată, umflare bruscă a feței/mâinilor sau tensiune arterială crescută (preeclampsie);",
        "Pierderea controlului vezicii/intestinului sau slăbiciune bruscă severă într-un picior."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/respiratie-terapeutica/",
    "label": "Încearcă exercițiul blând de Respirație de Relaxare →",
    "desc": "Respirația calmă reduce tensiunea lombară și ajută relaxarea de seară:"
}}
   faqs={[
    {
        "q": "Pot face fizioterapie (ultrasunete, magnet, Amplipuls) pentru durerea de spate în sarcină?",
        "a": "Nu — procedurile de electroterapie, magnetoterapie, ultrasunete pe zona lombară/abdominală și băile fierbinți sunt contraindicate în sarcină. Abordarea sigură constă în consultul ginecologului + neurologului (500 MDL), ergonomie și mișcare prenatală blândă."
    },
    {
        "q": "Când pot începe recuperarea completă a coloanei după naștere?",
        "a": "După controlul postnatal al medicului ginecolog (de obicei după 6–8 săptămâni, adaptat dacă alăptezi), la Revimed PLUS+ putem construi un plan complet de recuperare a spatelui (kinetoterapie, masaj terapeutic 200 MDL, fizioterapie 100 MDL / 30 min)."
    }
]}
   relatedLinks={[
    {
        "href": "/contraindicatii-fizioterapie-siguranta-chisinau/",
        "label": "Contraindicații Fizioterapie (Ghid)"
    },
    {
        "href": "/sindrom-piriform-durere-fesa-picior-chisinau/",
        "label": "Sindrom Piriform vs. Sciatică"
    },
    {
        "href": "/tunel-carpian-amorteli-maini-chisinau/",
        "label": "Tunel Carpian & Amorțeli Mâini"
    },
    {
        "href": "/dureri-de-spate-sciatica-chisinau/",
        "label": "Dureri de Spate & Sciatică"
    },
    {
        "href": "/kinetoterapie-chisinau/",
        "label": "Kinetoterapie (250 MDL)"
    }
]}
  />
 );
}
