import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/adhd-hiperactivitate-copii-neuropediatru-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/adhd-hiperactivitate-copii-neuropediatru-chisinau/", ru: "/ru/sdvg-giperaktivnost-u-detey-nevrolog-kishinev/", "x-default": "/adhd-hiperactivitate-copii-neuropediatru-chisinau/" },
 title: "ADHD & Hiperactivitate la Copii Chișinău — Neuropediatru, EEG & Funcții Executive",
 description: "Cum deosebești un copil energic de ADHD (deficit de atenție și hiperactivitate) în Chișinău — neuropediatru Dr. Igor Revenco (500 MDL), rolul EEG pediatric (1600 MDL), funcții executive (300 MDL) și Biofeedback/Electrosomn (100 MDL)."
});

export default function AdhdHiperactivitateCopiiNeuropediatruChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/adhd-hiperactivitate-copii-neuropediatru-chisinau"
   crumbLabel="ADHD & Atenție Copii"
   h1="ADHD (Deficit de Atenție și Hiperactivitate) la Copii în Chișinău — Evaluare Neuropediatrică și Rolul EEG"
   lead="Cum diferențiem copilul activ de ADHD real, ce condiții imită neatenția (lipsa somnului, ecrane, absențe subclinice pe EEG) și ce metode blânde ajută concentrarea la Revimed PLUS+."
   directAnswer="Evaluarea ADHD (deficit de atenție și hiperactivitate) la copii este una clinică și multidisciplinară, începând cu consultul neuropediatric pentru verificarea dezvoltării sistemului nervos și excluderea cauzelor medicale care imită neatenția (tulburări de somn, absențe epileptice subclinice, deficit de fier sau probleme de auz/vedere). La Revimed PLUS+ (Chișinău, Ciocana, Str. Mircea cel Bătrân 13/2), consultația primară la neuropediatrul Dr. Igor Revenco (35+ ani experiență) costă 500 MDL (repetată 400 MDL), EEG pediatric 19 canale 1600 MDL, Evaluarea funcțiilor executive 300 MDL, iar procedurile blânde de suport (Biofeedback, Electrosomn pediatric, Bi-LENAR) costă 100 MDL / 30 min (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Nu orice copil agitat sau care se plictisește la teme are ADHD — dar atunci când neatenția, impulsivitatea și agitația persistă peste 6 luni în mai multe medii (atât acasă, cât și la grădiniță/școală) și afectează învățarea și prieteniile, o evaluare neuropediatrică calmă oferă familiei direcție clară fără etichetări pripite."
   symptomsHeading="Semnale care justifică o evaluare neuropediatrică a atenției"
   symptoms={[
    "Dificultate persistentă de menținere a atenției la lecții/teme, greșeli frecvente din neatenție, pierderea lucrurilor și impresia că „nu ascultă” când i se vorbește direct;",
    "Agitație motorie continuă (se foieste, se ridică din bancă, vorbește excesiv) sau impulsivitate (întrerupe, nu își poate aștepta rândul);",
    "Episoade scurte de „visat cu ochii deschiși” / privire fixă în gol (care trebuie diferențiate riguros de absențele epileptice prin EEG);",
    "Asociere cu somn agitat, ticuri nervoase, dificultăți de autoreglare emoțională sau randament școlar sub potențialul real al copilului."
]}
   approachHeading="Ce arată (și ce NU arată) EEG-ul în ADHD și cum construim suportul"
   approachParagraphs={[
    "Un aspect esențial pe care Dr. Igor Revenco îl explică transparent părinților: EEG-ul nu pune de unul singur diagnosticul de ADHD, însă EEG pediatric 19 canale (1600 MDL) și/sau Cartografierea creierului (600 MDL) sunt foarte valoroase la indicație pentru a verifica maturizarea corticală și a exclude descărcările epileptiforme subclinice sau absențele care imită exact „neatenția” la școală.",
    "Pe lângă evaluarea funcțiilor executive (300 MDL) și colaborarea multidisciplinară (psihopedagog, logoped, rutină fără ecrane și somn regulat), la Revimed PLUS+ sunt disponibile metode blânde nefarmacologice de autoreglare — Biofeedback pentru controlul stresului și atenției, Electrosomn pediatric și Bi-LENAR (100 MDL / 30 min) — adaptate vârstei copilului."
]}
   equipmentHeading="Evaluare neinvazivă și suport blând pentru concentrare și somn"
   equipmentCards={[
    {
        "slug": "rheotest",
        "title": "EEG Pediatric 19 Canale & Cartografiere",
        "image": "/images/equipment/rheotest.webp",
        "desc": "Excluderea absențelor subclinice și analiza maturizării ritmurilor — EEG 1600 MDL, Cartografiere 600 MDL."
    },
    {
        "slug": "electrosomn-4t",
        "title": "Electrosomn Pediatric & Biofeedback",
        "image": "/images/equipment/electrosomn-4t.webp",
        "desc": "Calmare blândă, igiena somnului și antrenament al autoreglării — 100 MDL / 30 min."
    },
    {
        "slug": "bi-lenar",
        "title": "Bi-LENAR",
        "image": "/images/equipment/bi-lenar.webp",
        "desc": "Reducerea tensiunii emoționale și a hiperexcitabilității școlare — 100 MDL / 30 min."
    }
]}
   customDecisionTable={{
    "heading": "Copil energic vs. Tipuri de ADHD vs. Cauze medicale care IMITĂ ADHD-ul",
    "columns": [
        "Profil",
        "Manifestare tipică",
        "Context (acasă vs. școală)",
        "Evaluare recomandată"
    ],
    "rows": [
        [
            "Copil energic / curios (normal)",
            "Activ la joacă, dar se poate concentra la povești, LEGO sau jocuri preferate fără suferință",
            "Se adaptează cu reguli consecvente și pauze de mișcare",
            "Rutină clară de somn, sport, limitarea ecranelor (nu necesită etichetare)"
        ],
        [
            "ADHD — tip predominant neatent",
            "„Visează” la ore, uită sarcini, dezorganizat, adesea trece neobservat la fete",
            "Prezent >6 luni atât acasă, cât și la școală",
            "Neuropediatru (500 MDL) + Funcții executive (300 MDL) + evaluare psihopedagogică"
        ],
        [
            "ADHD — tip hiperactiv / combinat",
            "Agitație motorie, impulsivitate, întrerupere frecventă, dificultate de așteptare",
            "Prezent >6 luni în mai multe medii, afectează adaptarea",
            "Neuropediatru (500 MDL) + Biofeedback / Electrosomn (100 MDL) + suport comportamental"
        ],
        [
            "Cauze care IMITĂ ADHD-ul",
            "Privire fixă în gol (absențe), somn insuficient, sforăit/polipi, ecrane excesive, deficit de fier",
            "Se ameliorează clar odată corectată cauza medicală",
            "EEG pediatric (1600 MDL) + verificare somn/ORL/auz/vedere + analize sânge"
        ]
    ]
}}
   preparationChecklist={{
    "heading": "Cum pregătești evaluarea neuropediatrică pentru atenție și hiperactivitate (5 pași)",
    "steps": [
        "Cere o notă scurtă din partea educatoarei/învățătoarei despre comportamentul copilului la ore (atenție, stat în bancă, relația cu colegii).",
        "Notează programul real de somn al copilului (ora de culcare, treziri, sforăit) și timpul zilnic petrecut la telefon/tabletă/TV.",
        "Adu caiete de lucru reprezentative, fișa de dezvoltare timpurie și eventuale analize recente (hemoleucogramă, feritină, TSH).",
        "Dacă este programat EEG pediatric (1600 MDL), spală părul copilului fără balsam/ulei și explică-i pe ton de joc că va purta o „căscuță de astronaut”.",
        "Evită băuturile dulci/cu cofeină și snacks-urile bogate în zahăr în dimineața consultației."
    ]
}}
   redFlagsNotice={{
    "heading": "Situații care necesită evaluare neuropediatrică rapidă (sau 112 în crize acute):",
    "items": [
        "Episoade repetate de „înghețare” bruscă a privirii (5–15 secunde) în care copilul nu răspunde la strigare sau atingere (suspiciune absențe epileptice);",
        "Regres brusc al vorbirii, scrisului sau al abilităților deja dobândite;",
        "Crize convulsive, pierderi de cunoștință sau dureri de cap matinale cu vărsături (112)."
    ]
}}
   interactiveTool={{
    "href": "/aplicatii/teste-si-instrumente/respiratie-terapeutica/",
    "label": "Încearcă jocul de Respirație Calmă de 3 minute împreună cu copilul →",
    "desc": "Un exercițiu simplu de seară care ajută copilul să facă tranziția spre liniște și somn:"
}}
   faqs={[
    {
        "q": "Dacă facem EEG, putem afla sigur dacă copilul are ADHD?",
        "a": "Nu — diagnosticul de ADHD este clinic (bazat pe istoricul pe >6 luni acasă și la școală, consult neuropediatric/psihiatric pediatric și scale standardizate). EEG pediatric (1600 MDL) este folosit de medic pentru a exclude absențele epileptice subclinice și a evalua maturizarea electrică cerebrală."
    },
    {
        "q": "Înseamnă consultul la neuropediatru că va primi automat medicație puternică?",
        "a": "Nu. Prima linie include întotdeauna igiena somnului, reducerea ecranelor, structurarea mediului școlar/familial, suport comportamental și metode nefarmacologice blânde (Biofeedback, Electrosomn pediatric — 100 MDL / 30 min). Orice decizie medicală se discută transparent cu părinții."
    },
    {
        "q": "De la ce vârstă se poate evalua corect deficitul de atenție?",
        "a": "Deși semnele de hiperexcitabilitate pot apărea mai devreme, evaluarea structurată a ADHD-ului se realizează de regulă după vârsta de 5–6 ani, când cerințele de atenție susținută devin relevante, iar neuropediatrul poate evalua dezvoltarea la orice vârstă."
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
        "href": "/ticuri-nervoase-balbaiala-copii-chisinau/",
        "label": "Ticuri & Logonevroză Copii"
    },
    {
        "href": "/intarziere-vorbire-copii-neuropediatru-chisinau/",
        "label": "Întârziere de Vorbire Copii"
    },
    {
        "href": "/evaluare-neuropsihologica-testare-cognitiva-chisinau/",
        "label": "Funcții Executive & Evaluare Cognitivă"
    }
]}
  />
 );
}
