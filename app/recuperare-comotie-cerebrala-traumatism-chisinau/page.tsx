import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/recuperare-comotie-cerebrala-traumatism-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/recuperare-comotie-cerebrala-traumatism-chisinau/", ru: "/ru/sotryasenie-mozga-vosstanovlenie-kishinev/", "x-default": "/recuperare-comotie-cerebrala-traumatism-chisinau/" },
 title: "Recuperare după Comoție Cerebrală Chișinău — Neurochirurg, EEG & REG",
 description: "Ghid medical pentru recuperarea după comoție cerebrală și sindrom post-comoțional în Chișinău — Neurolog & Neurochirurg Dr. Igor Revenco (500 MDL), EEG (1600 MDL), REG (500 MDL), Electrosomn (100 MDL / 30 min)."
});

export default function RecuperareComotieCerebralaTraumatismChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/recuperare-comotie-cerebrala-traumatism-chisinau"
   crumbLabel="Recuperare Comoție Cerebrală"
   h1="Recuperare după Comoție Cerebrală și Traumatism Cranian Ușor în Chișinău"
   lead="Ce investigații urmează după excluderea urgenței la spital (CT): evaluare neurolog-neurochirurg (Dr. Igor Revenco, membru EANS), EEG, circulație cerebrală REG și recuperare blândă."
   directAnswer="Imediat după orice lovitură la cap este obligatorie evaluarea de urgență (112 / spital de urgență + CT cerebral) pentru excluderea unui hematom sau a unei fracturi. În etapa de monitorizare și recuperare post-comoțională, la Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația la Dr. Igor Revenco (neurolog și doctor în neurochirurgie, membru EANS, 35+ ani experiență) costă 500 MDL (repetată 400 MDL), EEG 19 canale 1600 MDL, Reoencefalografia (REG) 500 MDL, Cartografierea creierului 600 MDL, iar procedurile blânde de refacere (Electrosomn, Transair, Bi-LENAR) costă 100 MDL / 30 min (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Multe persoane consideră o comoție cerebrală ușoară „trecută” după câteva zile, dar revin prea repede la ecrane, muncă intensă sau sport și dezvoltă sindrom post-comoțional (dureri de cap persistente, vertij, fotofobie, ceață mentală, insomnie). Monitorizarea de către un medic cu dublă specializare — neurolog și neurochirurg — asigură o revenire etapizată și sigură."
   symptomsHeading="Simptome post-comoționale care necesită urmărire neurologică"
   symptoms={[
    "Cefalee (durere de cap) surdă sau pulsatilă care se accentuează la ecran, citit sau efort intelectual;",
    "Amețeli la schimbarea poziției, instabilitate la mers sau senzație de zgomot/țiuit în urechi;",
    "Sensibilitate crescută la lumină puternică (fotofobie) ori zgomot, oboseală rapidă și dificultăți de concentrare;",
    "Somn superficial, treziri nocturne, iritabilitate sau anxietate apărute la zile–săptămâni după traumatism."
]}
   approachHeading="Protocol etapizat de evaluare funcțională și neuro-recuperare"
   approachParagraphs={[
    "Dr. Igor Revenco analizează documentele din serviciul de urgență (bilet de externare, CT/RMN), efectuează examenul neurochirurgical și neurologic al nervilor cranieni, echilibrului și reflexelor, iar în faza de recuperare poate indica EEG 19 canale (1600 MDL) și Cartografierea creierului (600 MDL) pentru evaluarea funcției bioelectrice corticale și excluderea iritației post-traumatice, alături de Reoencefalografie REG (500 MDL) pentru tonusul vascular cerebral.",
    "Odată stabilizat stadiul acut, recuperarea blândă neinvazivă (Electrosomn, Bi-LENAR sau Transair — 100 MDL / 30 min) și regimul corect de repaus cognitiv progresiv sprijină refacerea somnului, diminuarea cefaleei post-traumatice și reducerea oboselii neuro-vegetative."
]}
   equipmentHeading="Investigații funcționale și recuperare blândă post-traumatism"
   equipmentCards={[
    {
        "slug": "rheotest",
        "title": "EEG 19 Canale & REG",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Evaluarea activității bioelectrice (EEG — 1600 MDL) și a tonusului vascular cerebral (REG — 500 MDL)."
    },
    {
        "slug": "electrosomn-3",
        "title": "Electrosomn-3",
        "image": "/images/equipment/electrosomn-3.webp",
        "desc": "Refacerea somnului odihnitor și calmarea cefaleei post-comoționale — 100 MDL / 30 min."
    },
    {
        "slug": "transair-01p-transair-05",
        "title": "Transair (TES-terapie)",
        "image": "/images/equipment/transair.webp",
        "desc": "Susținerea reglării neuro-vegetative și a stării generale în etapa subacută/recuperare — 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Etapele corecte după o lovitură la cap — când mergi la Urgență (112) și când la Revimed PLUS+",
    "columns": [
        "Faza post-traumatism",
        "Ce se întâmplă",
        "Unde mergi prioritar",
        "Investigații / măsuri"
    ],
    "rows": [
        [
            "Faza acută (0–48 ore)",
            "Impact cranian, amețeală, greață, posibilă pierdere scurtă de cunoștință",
            "Urgență / 112 (Institutul de Medicină Urgentă) — obligatoriu prima dată",
            "Excludere hematom/fractură (CT cerebral + consult urgență)"
        ],
        [
            "Faza subacută (Zilele 3–14)",
            "Urgența exclusă; persistă cefalee, oboseală, sensibilitate la ecrane",
            "Neurolog / Neurochirurg Dr. Igor Revenco (500 MDL)",
            "Examen neurologic + plan de repaus cognitiv progresiv"
        ],
        [
            "Sindrom post-comoțional (>2–4 săptămâni)",
            "Dureri de cap recurente, vertij, tulburări de somn sau memorie/atenție",
            "Evaluare funcțională completă Revimed PLUS+",
            "EEG (1600 MDL) + REG (500 MDL) / Cartografiere (600 MDL)"
        ],
        [
            "Reabilitare neuro-vegetativă",
            "Consolidarea somnului, reducerea cefaleei și revenirea treptată la activitate",
            "Program fizioterapeutic blând indicat de medic",
            "Electrosomn / Bi-LENAR / Transair (100 MDL / 30 min)"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "Checklist practic pentru recuperarea după comoție cerebrală (5 pași)",
    "steps": [
        "Adu la consultație biletul de externare din camera de gardă și discul/rezultatul CT sau RMN cerebral (dacă a fost efectuat).",
        "În primele zile după traumatism, limitează telefonul, calculatorul, televizorul și lectura intensă — „repausul creierului” scurtează recuperarea.",
        "Ține un scurt jurnal al durerilor de cap, episoadelor de amețeală și orelor de somn pentru a evalua evoluția la consult.",
        "Dacă urmează EEG (1600 MDL), vino cu părul curat și uscat (fără gel, fixativ sau uleiuri) și evită cofeina în ziua examinării.",
        "Nu relua sporturile de contact, condusul prelungit sau consumul de alcool înainte ca medicul neurolog/neurochirurg să confirme recuperarea."
    ]
}}
   redFlagsNotice={{
    "heading": "Semnale de alarmă după orice lovitură la cap — apelează IMEDIAT 112:",
    "items": [
        "Durere de cap care se agravează progresiv și nu cedează, sau vărsături repetate;",
        "Somnolență excesivă, dificultate de trezire, confuzie, vorbire împleticită sau comportament neobișnuit;",
        "Pupile inegale, vedere dublă bruscă, slăbiciune/amorțeală într-un braț sau picior ori convulsii;",
        "Scurgere de lichid limpede sau sânge din nas ori ureche după traumatism."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/screening-neurologic/",
    "label": "Completează Screening-ul Neurologic Orientativ (2 min) →",
    "desc": "Notează-ți rapid simptomele persistente înainte de consultația la Dr. Igor Revenco:"
}}
   researchCitations={[
    {
     year: "2023",
     title: "Trauma craniocerebrală la copii: teste radioimunologice",
     source: "IBN · Conferința USMF, ISSN 2345-1476",
     url: "https://ibn.idsi.md/vizualizare_articol/194511"
    },
    {
     year: "2022",
     title: "Semnificația modificărilor neuroendocrine (TSH, T3, T4, cortizol) în traumatismul craniocerebral la copiii de vârstă școlară: Monografie (Acces liber PDF)",
     source: "DOI 10.5281/zenodo.24532588 · ISBN 978-5-88554-160-2",
     url: "https://doi.org/10.5281/zenodo.24532588"
    }
   ]}
   faqs={[
    {
        "q": "Pot veni direct la Revimed PLUS+ imediat după ce m-am lovit la cap?",
        "a": "Nu în urgență acută: imediat după un traumatism cranian este necesară evaluarea în secția de urgență (112) cu acces la tomografie computerizată (CT) pentru excluderea hemoragiei intracraniene. Revimed PLUS+ oferă evaluarea de urmărire, diagnosticul funcțional (EEG, REG) și recuperarea post-comoțională."
    },
    {
        "q": "La câte zile după comoție se recomandă efectuarea EEG?",
        "a": "De regulă, EEG-ul (1600 MDL) este util în etapa subacută sau de recuperare (după stabilizarea acută ori dacă persistă cefalee, vertij, tulburări de somn sau suspiciune de iritație corticală), momentul exact fiind stabilit de medicul neurolog/neurochirurg."
    },
    {
        "q": "Cât durează recuperarea după o comoție cerebrală ușoară?",
        "a": "La majoritatea pacienților simptomele se ameliorează în 2–4 săptămâni cu repaus cognitiv corect și urmărire medicală, însă la unele persoane sindromul post-comoțional poate necesita o monitorizare mai atentă și suport fizioterapeutic blând."
    }
]}
   relatedLinks={[
    {
        "href": "/neurochirurg-chisinau/",
        "label": "Neurochirurg Chișinău (500 MDL)"
    },
    {
        "href": "/eeg-chisinau/",
        "label": "EEG Chișinău (1600 MDL)"
    },
    {
        "href": "/reoencefalografie-chisinau/",
        "label": "Reoencefalografie REG (500 MDL)"
    },
    {
        "href": "/cartografierea-creierului-chisinau/",
        "label": "Cartografiere Creier 3D (600 MDL)"
    },
    {
        "href": "/electrosomn-chisinau/",
        "label": "Electrosomn (100 MDL / 30 min)"
    }
]}
  />
 );
}
