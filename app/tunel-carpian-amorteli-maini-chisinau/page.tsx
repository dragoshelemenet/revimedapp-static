import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/tunel-carpian-amorteli-maini-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/tunel-carpian-amorteli-maini-chisinau/", ru: "/ru/tunnelnyy-sindrom-onemenie-ruk-kishinev/", "x-default": "/tunel-carpian-amorteli-maini-chisinau/" },
 title: "Sindrom de Tunel Carpian & Amorțeli Mâini Chișinău — Tratament",
 description: "Diagnostic și tratament conservator pentru sindrom de tunel carpian, amorțeli în mâini/degete și neuropatii compresive în Chișinău (Ciocana) — Dr. Igor Revenco. 022 60 50 60."
});

export default function TunelCarpianAmorteliMainiChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/tunel-carpian-amorteli-maini-chisinau"
   crumbLabel="Tunel Carpian & Amorțeli Mâini"
   h1="Sindrom de Tunel Carpian și Amorțeli în Mâini în Chișinău — Evaluare și Fizioterapie"
   lead="Diferențierea precisă între compresia nervului median la încheietură (tunel carpian) și radiculopatia cervicală, cu tratament fizioterapeutic conservator la Revimed PLUS+ (Ciocana)."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), consultația primară la medicul neurolog sau neurochirurg Dr. Igor Revenco costă 500 MDL (repetată 400 MDL), electrospondilografia coloanei 500 MDL, iar procedurile fizioterapeutice pentru decompresie și troficitate nervoasă (ultrasunete, electroforeză, laser, magnetoterapie) costă 100 MDL / 30 min (tarife orientative). Programări: 022 60 50 60."
   introParagraph="Amorțeala și furnicăturile nocturne în degetele mâinii (în special policelui, arătătorului și degetului mijlociu), scăparea obiectelor din mână sau durerea în încheietură pot proveni fie din compresia nervului median în canalul carpian, fie dintr-o hernie/osteocondroză cervicală (C6–C8) ori dintr-o compresie dublă („double crush syndrome”)."
   symptomsHeading="Simptome care indică necesitatea evaluării neurologice"
   symptoms={[
    "Amorțeli, furnicături sau arsură în palmă și degete, mai ales noaptea sau dimineața la trezire;",
    "Durere în încheietura mâinii sau antebraț la lucrul la calculator ori activități manuale repetitive;",
    "Scăderea forței de prindere (scăparea cănii sau telefonului din mână);",
    "Amorțeli asociate cu durere în ceafă și umăr (suspiciune de radiculopatie cervicală)."
]}
   approachHeading="Când ajută tratamentul conservator și când este necesară chirurgia"
   approachParagraphs={[
    "Ca medic neurolog și neurochirurg (35+ ani experiență, membru EANS), Dr. Igor Revenco testează clinic teritoriile nervoase (median, ulnar, radial) și coloana cervicală pentru a stabili dacă neuropatia poate fi recuperată conservator sau are indicație chirurgicală.",
    "În formele ușoare și moderate, fizioterapia locală (terapie cu ultrasunete, electroforeză antiinflamatoare, laseroterapie, magnetoterapie și acupunctură — 100 MDL / 30 min) asociată cu repaus ergonomic reduce edemul din canalul carpian."
]}
   equipmentHeading="Proceduri fizioterapeutice pentru neuropatii compresive"
   equipmentCards={[
    {
        "slug": "spectr-lc",
        "title": "Laser & Fotocataliză Magnetică",
        "image": "/images/equipment/spectr-lc.webp",
        "desc": "Reducerea inflamației în canalul carpian și tendoane — 100 MDL / 30 min."
    },
    {
        "slug": "aparat-electroforeza-medicamentoasa",
        "title": "Electroforeză Locală",
        "image": "/images/equipment/aparat-electroforeza-medicamentoasa.webp",
        "desc": "Terapie locală fără suprasolicitare gastrică — 100 MDL / 30 min."
    },
    {
        "slug": "amplipuls-5",
        "title": "Electroneurostimulare & SMT",
        "image": "/images/equipment/amplipuls-5.webp",
        "desc": "Susținerea conducerii nervoase și troficității musculare — 100 MDL / 30 min."
    }
]}
   faqs={[
    {
        "q": "Se poate trata sindromul de tunel carpian fără operație?",
        "a": "În stadiile incipiente și moderate (fără atrofie musculară severă), tratamentul conservator ghidat de neurolog și fizioterapia țintită (100 MDL / 30 min) pot ameliora semnificativ simptomele."
    },
    {
        "q": "De ce îmi amorțesc mâinile noaptea?",
        "a": "Cele mai frecvente cauze sunt compresia nervului median în tunelul carpian (accentuată de poziția flectată a încheieturii în somn) și osteocondroza/radiculopatia cervicală."
    }
]}
   relatedLinks={[
    {
        "href": "/nevralgie-neuropatie-chisinau/",
        "label": "Nevralgie & Neuropatie"
    },
    {
        "href": "/osteocondroza-cervicala-chisinau/",
        "label": "Osteocondroză Cervicală"
    },
    {
        "href": "/magnetoterapie-laser-chisinau/",
        "label": "Magnetoterapie & Laser"
    },
    {
        "href": "/neurochirurg-chisinau/",
        "label": "Neurochirurg Chișinău"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
