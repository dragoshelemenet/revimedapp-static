import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/spasmofilie-crize-hiperexcitabilitate-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/spasmofilie-crize-hiperexcitabilitate-chisinau/", ru: "/ru/spazmofiliya-sudorogi-nevrolog-kishinev/", "x-default": "/spasmofilie-crize-hiperexcitabilitate-chisinau/" },
 title: "Spasmofilie și Crize de Hiperexcitabilitate Chișinău — Neurolog & Electrosomn",
 description: "Ghid clinic despre spasmofilie (tetanie latentă), furnicături în degete/gură, spasme și hiperventilație în Chișinău — Neurolog Dr. Igor Revenco (500 MDL), test vegetativ RUNO (500 MDL), Electrosomn (100 MDL / 30 min)."
});

export default function SpasmofilieCrizeHiperexcitabilitateChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/spasmofilie-crize-hiperexcitabilitate-chisinau"
   crumbLabel="Spasmofilie & Spasme"
   h1="Spasmofilie și Crize de Hiperexcitabilitate Neuromusculară în Chișinău — Ghid Diferențial"
   lead="Cum deosebești o criză de spasmofilie de atacul de panică, deficitul electrolitic sau o criză convulsivă și cum abordează medicul neurolog Dr. Igor Revenco echilibrul neuro-vegetativ la Revimed PLUS+."
   directAnswer="Spasmofilia (tetania latentă) reprezintă o hiperexcitabilitate neuromusculară și vegetativă declanșată frecvent de stres prelungit, hiperventilație și dezechilibre ale metabolismului calciului și magneziului. La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), consultația primară la neurologul Dr. Igor Revenco (35+ ani experiență) costă 500 MDL (repetată 400 MDL), evaluarea vegetativă RUNO 500 MDL, EEG 1600 MDL, ECG 200 MDL, iar procedurile blânde de relaxare neuro-vegetativă (Electrosomn, Bi-LENAR) costă 100 MDL / 30 min (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Senzația bruscă de lipsă de aer, furnicăturile în jurul gurii și în vârful degetelor, cârceii musculari sau încleștarea involuntară a mâinilor sperie intens pacientul și imită adesea urgențe cardiace ori convulsive. Rolul consultației neurologice este să diferențieze precis spasmofilia de alte afecțiuni neurologice, endocrine sau cardiace și să elimine automedicația haotică."
   symptomsHeading="Manifestări tipice între crize și în timpul unei crize de spasmofilie"
   symptoms={[
    "Furnicături (parestezii) periorale (în jurul buzelor), în degetele mâinilor sau picioarelor, accentuate la stres ori respirație rapidă;",
    "Crampe musculare recurente (gambe, tălpi, pleoapă care „zbate”) sau contractură carpiană tranzitorie în criză;",
    "Senzație de „nod în gât”, oftat frecvent, respirație superficială (hiperventilație), palpitații și oboseală matinală;",
    "Hipersensibilitate la zgomote/lumină, somn fragmentat, iritabilitate și episoade de amețeală."
]}
   approachHeading="Cum se stabilește diagnosticul diferențial și planul personalizat"
   approachParagraphs={[
    "Dr. Igor Revenco efectuează examenul neurologic complet (inclusiv semnele clinice de hiperexcitabilitate neuromusculară), corelează simptomele cu analizele de laborator necesare (calciu total/ionic, magneziu, potasiu, vitamina D, funcție tiroidiană — analizele de sânge rămân standardul de confirmare electrolitică) și poate recomanda investigații funcționale complementare precum testul vegetativ RUNO (500 MDL), ECG (200 MDL) sau EEG (1600 MDL) atunci când este necesară excluderea unei cauze epileptice.",
    "Pe lângă corecția medicală prescrisă strict individual la consult (fără scheme standardizate online), procedurile nefarmacologice precum Electrosomn, Bi-LENAR și Transair (100 MDL / 30 min) ajută la stabilizarea ritmului respirator-vegetativ, reducerea hiperexcitabilității și îmbunătățirea calității somnului."
]}
   equipmentHeading="Metode blânde de echilibrare neuro-vegetativă"
   equipmentCards={[
    {
        "slug": "bi-lenar",
        "title": "Bi-LENAR",
        "image": "/images/equipment/bi-lenar.webp",
        "desc": "Stabilizarea tonusului vegetativ și reducerea hiperexcitabilității induse de stres — 100 MDL / 30 min."
    },
    {
        "slug": "electrosomn-3",
        "title": "Electrosomn-3",
        "image": "/images/equipment/electrosomn-3.webp",
        "desc": "Normalizarea somnului și a echilibrului dintre sistemul nervos simpatic și parasimpatic — 100 MDL / 30 min."
    },
    {
        "slug": "aparat-amp",
        "title": "Diagnostic Funcțional AMP",
        "image": "/images/equipment/aparat-amp.webp",
        "desc": "Screening funcțional neinvaziv complementar (nu înlocuiește analizele de laborator) — 1000 MDL."
    }
]}
   customDecisionTable={{
    "heading": "Tabel diferențial: Spasmofilie vs. Atac de panică vs. Crampe vs. Criză epileptică",
    "columns": [
        "Tablou clinic",
        "Semne caracteristice",
        "Starea de conștiență",
        "Pasul medical corect"
    ],
    "rows": [
        [
            "Spasmofilie (tetanie latentă)",
            "Hiperventilație, furnicături în jurul gurii și degetelor, contractură simetrică a mâinilor",
            "Păstrată integral (pacientul aude și răspunde)",
            "Neurolog (500 MDL) + analize electroliți (Ca/Mg/K) + RUNO / Electrosomn"
        ],
        [
            "Distonie neurovegetativă / reacție de panică",
            "Palpitații bruște, transpirații, frică intensă, valuri de căldură/frig fără spasme prelungite",
            "Păstrată, dar cu agitație acută",
            "ECG (200 MDL) + Neurolog (500 MDL) + test RUNO (500 MDL) + tehnici respiratorii"
        ],
        [
            "Crampe musculare izolate (nocturne)",
            "Cârcel localizat la o gambă/talpă după efort, deshidratare sau stat prelungit în picioare",
            "Păstrată, fără hiperventilație",
            "Hidratare, evaluare electroliți / circulație venoasă + consult medicului"
        ],
        [
            "Criză convulsivă / epileptică",
            "Debut brusc, pierdere de contact, mișcări ritmice involuntare, mușcarea limbii, confuzie după episod",
            "Alterată sau pierdută temporar",
            "Urgență 112 la prima criză + Neurolog (500 MDL) + EEG 19 canale (1600 MDL)"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "Cum să te pregătești pentru consultația neurologică (5 pași practici)",
    "steps": [
        "Dacă ai efectuat recent analize de sânge (calciu total/ionic, magneziu, potasiu, vitamina D, TSH, glicemie), adu buletinele la consult; nu lua suplimente în doze mari din proprie inițiativă înainte de evaluare.",
        "Notează pe telefon ultimele 3–4 episoade: ora, factorul declanșator (stres, oboseală, cafea, lipsă de somn), durata și zonele unde apar furnicăturile.",
        "Într-un episod ușor de hiperventilație, așază-te confortabil și încetinește conștient expirația (expir mai lung decât inspirul) pentru a opri eliminarea excesivă de CO₂.",
        "Evită cafeaua tare, băuturile energizante și fumatul cu 3–4 ore înainte de consultație sau de testul vegetativ RUNO.",
        "Menționează medicului toate medicamentele curente (inclusiv diuretice, tratamente tiroidiene sau antiacide) care pot influența nivelul mineralelor."
    ]
}}
   redFlagsNotice={{
    "heading": "Semnale de alarmă — sună imediat la 112 (NU aștepta consultația programată):",
    "items": [
        "Pierderea cunoștinței, cădere bruscă sau convulsii ritmice cu confuzie ulterioară;",
        "Durere toracică apăsătoare care iradiază în braț/maxilar, bătăi cardiace foarte neregulate sau dificultate severă de respirație cu cianoză;",
        "Spasm laringian (senzație de blocare reală a căilor aeriene, respirație șuierătoare la inspir);",
        "Slăbiciune bruscă pe o singură parte a feței sau a corpului ori tulburare bruscă de vorbire."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/respiratie-terapeutica/",
    "label": "Deschide exercițiul ghidat de Respirație Terapeutică →",
    "desc": "Încetinirea ritmului respirator este prima măsură practică pentru reducerea hiperventilației:"
}}
   faqs={[
    {
        "q": "Spasmofilia se vede automat pe EEG sau doar din analizele de sânge?",
        "a": "Diagnosticul este clinic și de laborator (examen neurologic + dozări de calciu ionic/total, magneziu, vitamina D, TSH). EEG (1600 MDL) este indicat de medic atunci când există suspiciunea unor episoade paroxistice ce trebuie deosebite de convulsii."
    },
    {
        "q": "Pot lua singur suplimente de calciu și magneziu fără consult?",
        "a": "Nu este recomandată automedicația: excesul de calciu fără evaluare poate avea riscuri renale sau cardiovasculare, iar uneori cauza principală este hiperventilația de stres sau o tulburare tiroidiană. Dozajul corect se stabilește exclusiv de medic după consult."
    },
    {
        "q": "Ajută Electrosomnul și Bi-LENAR în spasmofilie?",
        "a": "Ca terapii complementare indicate de neurolog, Electrosomn și Bi-LENAR (100 MDL / 30 min, tarif orientativ) contribuie la reglarea somnului și la diminuarea hiperreactivității neuro-vegetative care alimentează crizele."
    }
]}
   relatedLinks={[
    {
        "href": "/distonie-neurovegetativa-chisinau/",
        "label": "Distonie Neurovegetativă & RUNO (500 MDL)"
    },
    {
        "href": "/electrosomn-chisinau/",
        "label": "Electrosomn & TES (100 MDL / 30 min)"
    },
    {
        "href": "/ameteli-vertij-chisinau/",
        "label": "Amețeli & Vertij Chișinău"
    },
    {
        "href": "/epilepsie-convulsii-chisinau/",
        "label": "Epilepsie & EEG (1600 MDL)"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
