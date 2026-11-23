import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/sindromul-picioarelor-nelinistite-neurolog-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/sindromul-picioarelor-nelinistite-neurolog-chisinau/", ru: "/ru/sindrom-bespokoynyh-nog-nevrolog-kishinev/", "x-default": "/sindromul-picioarelor-nelinistite-neurolog-chisinau/" },
 title: "Sindromul Picioarelor Neliniștite Chișinău — Neurolog, Electrosomn & Fizioterapie",
 description: "Nevoie incontrolabilă de a mișca picioarele seara și noaptea (boala Willis-Ekbom) — diferențiere față de polineuropatie/varice și evaluare la neurologul Dr. Igor Revenco (500 MDL) în Chișinău."
});

export default function SindromulPicioarelorNelinistiteNeurologChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/sindromul-picioarelor-nelinistite-neurolog-chisinau"
   crumbLabel="Picioare Neliniștite"
   h1="Sindromul Picioarelor Neliniștite (Willis-Ekbom) în Chișinău — Diagnostic Neurologic și Suport pentru Somn"
   lead="De ce apar furnicăturile adânci și nevoia imperioasă de a mișca picioarele exact când te întinzi seara, ce analize sunt esențiale (feritina) și cum ajută neurologul Dr. Igor Revenco."
   directAnswer="Sindromul picioarelor neliniștite (boala Willis-Ekbom) este o tulburare neurologică senzitivo-motorie definită prin senzații neplăcute adânci în gambe în repaus — mai ales seara și noaptea — însoțite de nevoia irezistibilă de a mișca picioarele, mișcarea aducând o ușurare imediată, dar temporară. La Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația primară la neurologul Dr. Igor Revenco (35+ ani experiență) costă 500 MDL (repetată 400 MDL), iar terapiile nefarmacologice de suport pentru picioare și somn (Electrostimulare plantară LANAFORM, Masaj plantar Vibro-Infraroșu, Magnetoterapie, Electrosomn) costă 100 MDL / 30 min (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Pacienții cu sindromul picioarelor neliniștite trec adesea ani întregi cu diagnostice greșite de „varice”, „circulație proastă” sau „simplă insomnie”. Criteriul-cheie este tiparul circadian: simptomele izbucnesc în repaus seara și se calmează imediat ce te ridici și mergi prin cameră, revenind imediat ce te așezi din nou în pat."
   symptomsHeading="Cele 4 criterii clinice tipice ale sindromului picioarelor neliniștite"
   symptoms={[
    "Nevoie imperioasă, greu de stăpânit, de a mișca picioarele, însoțită de senzații profunde neplăcute („târâre”, furnicături interne, tensiune sau mâncărime profundă);",
    "Apariția sau agravarea clară în perioadele de repaus (în pat, la televizor, în avion sau mașină);",
    "Ameliorare imediată, parțială sau completă pe durata mișcării (mers, întindere, masaj), cu revenire rapidă la oprire;",
    "Tipar accentuat seara și noaptea, ducând frecvent la adormire foarte dificilă, smucituri nocturne ale picioarelor și oboseală diurnă."
]}
   approachHeading="Cum investighează neurologul cauza (feritină, neuropatii, somn) și ce terapii ajută"
   approachParagraphs={[
    "Dr. Igor Revenco diferențiază sindromul picioarelor neliniștite primar de formele secundare reversibile — în special deficitul de depozite de fier (feritină scăzută chiar și când hemoglobina pare normală!), carențele de magneziu/folat, afectarea renală, sarcina, polineuropatia sau reacțiile la anumite medicamente (ex. unele antihistaminice ori antidepresive).",
    "Alături de planul medical personalizat stabilit strict la consult (fără doze de suplimente online), procedurile nefarmacologice blânde — Electrostimulare plantară LANAFORM, Masaj plantar Vibro-Infraroșu, Magnetoterapie și Electrosomn (100 MDL / 30 min) — reduc disconfortul neuromuscular al gambelor și sprijină reinstalarea unui somn continuu."
]}
   equipmentHeading="Suport fizioterapeutic blând pentru gambe și somn odihnitor (100 MDL / 30 min)"
   equipmentCards={[
    {
        "slug": "electrosomn-3",
        "title": "Electrosomn-3",
        "image": "/images/equipment/electrosomn-3.webp",
        "desc": "Corectarea insomniei secundare și calmarea hiperexcitabilității nocturne — 100 MDL / 30 min."
    },
    {
        "slug": "kandadzia-kang-da-jia-lqx-2000a",
        "title": "Vibro-Masaj & Plantar LANAFORM",
        "image": "/images/equipment/kandadzia-kang-da-jia-lqx-2000a.webp",
        "desc": "Relaxarea microcirculației și a terminațiilor senzitive ale picioarelor — 100 MDL / 30 min."
    },
    {
        "slug": "bi-lenar",
        "title": "Bi-LENAR",
        "image": "/images/equipment/bi-lenar.webp",
        "desc": "Stabilizarea ritmului neuro-vegetativ de seară — 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Cum deosebești Sindromul Picioarelor Neliniștite de alte 3 probleme frecvente ale picioarelor",
    "columns": [
        "Afecțiune",
        "Ce simte pacientul",
        "Efectul mersului",
        "Ce verifică medicul"
    ],
    "rows": [
        [
            "Sindromul picioarelor neliniștite (SPN)",
            "Tensiune/furnicături interne seara în repaus + impuls de mișcare",
            "Ameliorare IMEDIATĂ cât timp mergi",
            "Neurolog (500 MDL) + feritină/fier/Mg/creatinină + igiena somnului"
        ],
        [
            "Polineuropatie periferică",
            "Amorțeli, arsuri sau „șosete strânse” constante zi și noapte",
            "NU dispar imediat prin mișcare",
            "Neurolog (500 MDL) + glicemie/HbA1c/B12 + fizioterapie plantară"
        ],
        [
            "Insuficiență venoasă / varice",
            "Picioare grele, umflate la glezne la finalul zilei după stat în picioare",
            "Se ameliorează la ridicarea picioarelor, nu neapărat la mișcare în pat",
            "Ecografie Doppler venos + consult vascular/flebo"
        ],
        [
            "Crampe musculare nocturne",
            "Contractură bruscă, dureroasă, tare la palpare într-un singur mușchi",
            "Necesită întindere pasivă a gambei",
            "Hidratare, electroliți (Ca/Mg/K) + evaluare neurologică/vasculară"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "5 pași practici înainte de consultația pentru picioare neliniștite",
    "steps": [
        "Dacă poți, adu un set recent de analize de sânge incluzând FERITINA (rezerva de fier), hemoleucograma, magneziul, glicemia și creatinina.",
        "Notează toate medicamentele luate seara (unele antialergice de generație veche, antivomitive sau tratamente de răceală agravează SPN).",
        "Elimină cafeaua, ceaiul negru/verde, cola, nicotina și alcoolul după ora 14:00 timp de 7 zile și observă diferența.",
        "Încearcă un duș cald sau alternativ pe gambe și o plimbare moderată după-amiaza (evitând sportul intens chiar înainte de culcare).",
        "Întreabă partenerul dacă observă tresăriri ritmice ale picioarelor tale în timpul somnului."
    ]
}}
   redFlagsNotice={{
    "heading": "Semnale care indică o altă urgență vasculară/neurologică (sună la 112 / Urgență):",
    "items": [
        "Un singur picior brusc umflat, roșu, cald și dureros în gambă (suspiciune de tromboză venoasă profundă — urgență!);",
        "Picior brusc rece, palid sau albăstrui cu durere intensă (ischemie arterială acută);",
        "Slăbiciune bruscă la mers ori pierderea sensibilității instalată rapid în ambele picioare."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/respiratie-terapeutica/",
    "label": "Încearcă rutina de Respirație & Relaxare de seară (3 min) →",
    "desc": "Relaxarea vegetativă înainte de culcare reduce tensiunea de adormire asociată:"
}}
   faqs={[
    {
        "q": "De ce cere neurologul feritina dacă hemoglobina mea este normală?",
        "a": "Creierul are nevoie de depozite suficiente de fier (măsurate prin feritină) pentru sinteza dopaminei. Feritina poate fi scăzută chiar și fără anemie evidentă pe hemoleucogramă, declanșând sau agravând picioarele neliniștite."
    },
    {
        "q": "Este sindromul picioarelor neliniștite periculos sau progresiv?",
        "a": "Nu pune viața în pericol, dar fragmentează sever somnul și duce la oboseală cronică și iritabilitate. Identificarea cauzelor secundare (ex. deficit de feritină) și un plan neurologic corect aduc de regulă o ameliorare semnificativă a calității nopților."
    },
    {
        "q": "Poate apărea sindromul picioarelor neliniștite în sarcină?",
        "a": "Da, este relativ frecvent în trimestrul al treilea de sarcină pe fondul creșterii necesarului de fier/folat și se ameliorează de obicei după naștere; orice recomandare în sarcină se face strict de medic."
    }
]}
   relatedLinks={[
    {
        "href": "/amorteli-picioare-polineuropatie-chisinau/",
        "label": "Amorțeli Picioare & Polineuropatie"
    },
    {
        "href": "/insomnie-tratament-chisinau/",
        "label": "Tratament Insomnie Chișinău"
    },
    {
        "href": "/electrosomn-chisinau/",
        "label": "Electrosomn (100 MDL / 30 min)"
    },
    {
        "href": "/spasmofilie-crize-hiperexcitabilitate-chisinau/",
        "label": "Spasmofilie & Crampe"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
