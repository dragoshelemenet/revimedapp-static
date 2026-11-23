import LocalConditionLanding from "@/components/LocalConditionLanding";
import { makeMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/camera-salina-bai-namol-chisinau",
 localized: false,
 alternatesLanguages: { ro: "/camera-salina-bai-namol-chisinau/", ru: "/ru/solyanaya-peshchera-gryazevye-vanny-kishinev/", "x-default": "/camera-salina-bai-namol-chisinau/" },
 title: "Cameră Salină (100 MDL) & Băi cu Nămol Saki (150 MDL) Chișinău",
 description: "Aeroionoterapie în peștera de sare (cameră salină — 100 MDL/oră), băi curative cu nămol din Saki (150 MDL) și saună cu plante (250 MDL) în Chișinău (Ciocana). 022 60 50 60."
});

export default function CameraSalinaBaiNamolChisinauPage() {
 return (
  <LocalConditionLanding
   lang="ro"
   path="/camera-salina-bai-namol-chisinau"
   crumbLabel="Cameră Salină & Băi cu Nămol"
   h1="Cameră Salină (Peșteră de Sare) și Băi Curative cu Nămol Saki în Chișinău"
   lead="Terapie balneară, haloterapie (aeroionoterapie în peștera de sare), băi cu nămol de Saki, magneziu, iod-brom și saună cu plante la Centrul Medical Revimed PLUS+ (Ciocana)."
   directAnswer="La Centrul Medical Revimed PLUS+ din Chișinău (Ciocana, Str. Mircea cel Bătrân 13/2), aeroionoterapia în peștera de sare (camera salină) are tariful orientativ de 100 MDL/oră, băile curative cu nămol din Saki, hidrosulfurice, cu magneziu, iod-brom sau extract de pin costă 150 MDL/sesiune, sauna curativă cu plante 250 MDL/oră, iar masajul cu nămol (60 min) 300 MDL. Programări: 022 60 50 60."
   introParagraph="Procedurile balneare și aeroionoterapia în camera salină completează programele de recuperare neurologică, articulară și respiratorie, oferind pacienților din Chișinău acces la aplicații cu nămol de Saki și microclimat salin fără deplasare în stațiuni balneare."
   symptomsHeading="Proceduri balneare și de haloterapie în lista clinicii"
   symptoms={[
    "Aeroionoterapie în peștera de sare (cameră salină pentru adulți și copii) — 100 MDL/oră;",
    "Băi curative cu nămol din Saki, hidrosulfurice, cu magneziu, IodoBrom, terebentină sau extract de pin — 150 MDL/sesiune;",
    "Saună curativă cu plante medicinale — 250 MDL/oră și hidroterapie — 200 MDL/oră;",
    "Masaj cu nămol (60 min) — 300 MDL și tratament combinat hidroterapie + masaj — 400 MDL/oră."
]}
   approachHeading="Recomandare medicală și verificarea disponibilității la recepție"
   approachParagraphs={[
    "Băile calde cu nămol și sauna au contraindicații specifice (hipertensiune necontrolată, afecțiuni cardiace decompensate, stări febrile, sarcină, afecțiuni oncologice sau dermatologice acute), motiv pentru care se efectuează după consult medical.",
    "Toate tarifele și procedurile afișate pe site au caracter orientativ; disponibilitatea programărilor pentru procedurile balneare se confirmă telefonic la recepția clinicii (022 60 50 60)."
]}
   equipmentHeading="Terapie balneară și recuperare complementară"
   equipmentCards={[
    {
        "slug": "detox-spa-bio",
        "title": "Terapie Balneară & Spa Clinic",
        "image": "/images/equipment/detox-spa-bio.webp",
        "desc": "Băi curative cu nămol Saki (150 MDL) și peșteră de sare (100 MDL/oră)."
    },
    {
        "slug": "spa-sy-f088-detox-bio-178",
        "title": "Relaxare & Hidroterapie",
        "image": "/images/equipment/spa-sy-f088-detox-bio-178.webp",
        "desc": "Programe complementare de relaxare și recuperare."
    },
    {
        "slug": "kandadzia-kang-da-jia-lqx-2000a",
        "title": "Masaj & Vibromasaj",
        "image": "/images/equipment/kandadzia-kang-da-jia-lqx-2000a.webp",
        "desc": "Asociere cu masaj terapeutic și fizioterapie."
    }
]}
   faqs={[
    {
        "q": "Cât costă o ședință la camera salină (peștera de sare) în Chișinău?",
        "a": "Tariful orientativ pentru aeroionoterapie în peștera de sare la Revimed PLUS+ (Ciocana) este de 100 MDL/oră."
    },
    {
        "q": "Cât costă băile cu nămol din Saki?",
        "a": "Tariful orientativ pentru o sesiune de băi curative cu nămol din Saki (sau cu magneziu, iod-brom, extract de pin) este de 150 MDL/sesiune."
    }
]}
   relatedLinks={[
    {
        "href": "/servicii/terapie-balneara/",
        "label": "Terapie Balneară"
    },
    {
        "href": "/fizioterapie-ciocana-chisinau/",
        "label": "Fizioterapie Ciocana"
    },
    {
        "href": "/masaj-terapeutic-chisinau/",
        "label": "Masaj Terapeutic"
    },
    {
        "href": "/fitoterapeut-chisinau/",
        "label": "Medic Fitoterapeut"
    },
    {
        "href": "/preturi/",
        "label": "Prețuri (96 servicii)"
    }
]}
  />
 );
}
