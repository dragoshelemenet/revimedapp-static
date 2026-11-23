import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, makeMetadata, siteUrl } from "@/lib/seo";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/termeni-si-conditii",
 localized: false,
 title: "Termeni și Condiții · Limitarea Răspunderii",
 description: "Termeni și condiții, lipsa garanțiilor și limitarea răspunderii pentru site-ul, conținutul și fotografiile Centrului Medical Revimed PLUS+ Chișinău."
});

export default function TermsPage() {
 return (
  <>
   <JsonLd
    data={breadcrumbJsonLd([
     { name: "Acasă", path: "/" },
     { name: "Termeni și Condiții", path: "/termeni-si-conditii/" }
    ])}
   />
   <JsonLd
    data={{
     "@context": "https://schema.org",
     "@type": "WebPage",
     name: "Termeni și Condiții",
     url: absoluteUrl("/termeni-si-conditii/"),
     publisher: { "@id": `${siteUrl}/#medical-clinic` }
    }}
   />
   <PageHeading>
    <div>
     <p className="crumb">Acasă / Termeni și Condiții</p>
     <h1>Termeni și Condiții · Limitarea Răspunderii</h1>
     <p className="lead">
      Reguli de utilizare, lipsa garanțiilor și exonerarea de răspundere pentru site-ul, medicii și echipa Revimed PLUS+.
     </p>
    </div>
   </PageHeading>

   <section className="rmSection legalSection">
    <article className="rmShell legalCard" data-glass-card>
     <h2>1. Date generale și natura strict orientativă a site-ului</h2>
     <p>
      Site-ul <strong>revimed.site</strong> este o platformă cu caracter exclusiv informativ și orientativ a
      Centrului Medical <strong>Revimed PLUS+</strong> (<strong>S.R.L. „REVIMED PLUS”</strong>, IDNO <strong>1011600011964</strong>,
      mun. Chișinău, sect. Ciocana, bd. Mircea cel Bătrân nr. 13/2, MD-2044, Republica Moldova, fondator și medic
      coordonator: <strong>Dr. Igor Revenco</strong>, tel. <strong>022 60 50 60</strong> / <strong>+373 79 422 908</strong>).
     </p>
     <p>
      Prin accesarea și utilizarea acestui site acceptați integral prezentii Termeni și Condiții. Navigarea pe site,
      citirea articolelor, utilizarea aplicațiilor sau apelul telefonic informativ <strong>nu constituie un act medical,
      nu creează o relație medic–pacient și nu reprezintă un contract sau o ofertă publică fermă</strong>.
     </p>

     <h2>2. Lipsa garanțiilor și neasumarea corespondenței în timp real cu realitatea</h2>
     <p>
      Întregul site și toate informațiile publicate pe el (inclusiv descrieri de servicii, proceduri, aparate,
      echipamente, prețuri, orar, fotografii, materiale video, articole de blog și instrumente interactive) sunt
      furnizate <strong>„ca atare” („as is”), fără nicio garanție expresă sau implicită</strong>.
     </p>
     <p>
      <strong>Informațiile de pe site nu garantează prezența sau disponibilitatea în realitate:</strong> Afișarea pe
      site a unui serviciu, aparat, tarif, program, membru al personalului sau element din fotografii <strong>nu
      garantează că acesta este disponibil, activ sau prezent fizic în clinică la un anumit moment</strong>. Dotările,
      serviciile, personalul, programul și tarifele reale din clinică pot fi modificate, suspendate sau înlocuite în
      orice moment, fără obligația actualizării prealabile a site-ului. Singurele informații valabile sunt cele
      confirmate verbal sau în scris la recepția clinicii în ziua prezentării.
     </p>

     <h2>3. Exonerarea de răspundere pentru clinică, Dr. Igor Revenco, site și dezvoltator</h2>
     <p>
      În măsura maximă permisă de lege, <strong>Centrul Medical Revimed PLUS+ (S.R.L. „REVIMED PLUS”), Dr. Igor Revenco,
      medicii și personalul clinicii, proprietarii site-ului, autorii conținutului și echipa tehnică de dezvoltare web
      (wsod.cloud) sunt exonerați de orice răspundere juridică, civilă, contravențională, medicală sau patrimonială</strong> față
      de orice vizitator, pacient sau terț pentru:
     </p>
     <ul>
      <li>orice diferență sau neconcordanță între informațiile, prețurile, aparatele ori fotografiile de pe site și situația faptică din realitate la sediul clinicii;</li>
      <li>orice decizie luată pe baza textelor, articolelor, testelor, calculatoarelor sau exercițiilor de pe site, inclusiv automedicația, modificarea unui tratament sau amânarea prezentării la medic;</li>
      <li>orice așteptare privind obținerea unui anumit rezultat medical sau de vindecare (rezultatele variază individual și nu sunt niciodată garantate);</li>
      <li>eventuale erori de redactare, omisiuni, întârzieri de actualizare, diferențe de traducere între RO / EN / RU / UA (versiunea în limba română și confirmarea de la recepție prevalează) sau întreruperi tehnice ale site-ului.</li>
     </ul>

     <h2>4. Nu înlocuiește consultația medicală · Urgențe medicale (112)</h2>
     <p>
      Niciun material de pe site (inclusiv articolele despre neurologie, coloană, fitoterapie, nutriție, prevenție
      generală sau aplicațiile de autoevaluare) nu reprezintă diagnostic, prescripție sau tratament. Centrul Medical
      Revimed PLUS+ <strong>nu oferă tratament oncologic și nu asigură serviciu de urgență</strong>.
     </p>
     <p>
      <strong>În caz de urgență medicală</strong> (durere acută în piept, paralizie bruscă, tulburări de vorbire,
      convulsii active, pierderea cunoștinței sau suspiciune de AVC), <strong>apelați imediat 112</strong>.
     </p>

     <h2>5. Fotografii, materiale video, acordul persoanelor și ștergerea imediată la cerere</h2>
     <p>
      Fotografiile și materialele video publicate pe site au rol strict ilustrativ și istoric de prezentare a
      activității centrului. Acestea <strong>nu garantează că persoanele, echipamentele sau spațiile care apar în
      imagini se regăsesc identic în prezent în clinică</strong>.
     </p>
     <p>
      Imaginile din galerie și materialele video au fost realizate în mod deschis în cadrul centrului, cu acordul
      persoanelor prezente, fără ca vreo persoană să își fi exprimat opoziția sau refuzul de a fi fotografiată ori
      filmată la momentul realizării lor.
     </p>
     <p>
      <strong>Ștergerea fotografiilor la simpla cerere:</strong> Respectăm pe deplin dreptul la imagine și viața
      privată. Dacă orice persoană care apare într-o fotografie sau într-un material video de pe site dorește
      eliminarea sau anonimizarea imaginii sale, este suficient să ne anunțe telefonic la <strong>022 60 50 60</strong> /
      <strong> +373 79 422 908</strong> sau direct la recepție, iar imaginea respectivă va fi <strong>ștearsă imediat,
      pe cale amiabilă și fără nicio formalitate suplimentară</strong>.
     </p>

     <h2>6. Prețuri orientative, convertor valutar și recenzii</h2>
     <p>
      Toate prețurile afișate pe site și conversiile valutare (EUR, RON, USD, UAH) sunt strict orientative, nu
      reprezintă o ofertă publică obligatorie și nu garantează tariful final. Plățile se fac exclusiv în <strong>MDL</strong>
      la recepție, conform tarifelor reale din clinica fizică la momentul efectuării serviciului.
     </p>
     <p>
      Recenziile afișate pe site sunt anonimizate (inițiale), reflectă opinii personale subiective și nu constituie o
      garanție de rezultat pentru alți pacienți.
     </p>

     <h2>7. Fitoterapie, suplimente și proceduri</h2>
     <p>
      Orice mențiune despre plante, suplimente, exerciții sau proceduri fizioterapeutice este pur informativă; pot
      exista contraindicații (sarcină, alăptare, epilepsie, pacemaker, boli cardiace, hepatice, renale, oncologice sau
      interacțiuni cu medicamente). Consultarea medicului este obligatorie.
     </p>

     <h2>8. Drepturi de autor, resurse vizuale și legea aplicabilă</h2>
     <p>
      Conținutul site-ului este protejat de legislația Republicii Moldova.
      Orice sesizare sau solicitare (inclusiv actualizarea unei informații ori ștergerea unei fotografii sau resurse
      vizuale) se soluționează prioritar și imediat pe cale amiabilă, prin apel la <strong>022 60 50 60</strong>.
     </p>

     <hr style={{ margin: "24px 0", opacity: 0.2 }} />

     <h2>Правовое уведомление, отсутствие гарантий и удаление фото по запросу (RU)</h2>
     <p>
      Сайт <strong>revimed.site</strong> носит исключительно справочно-ознакомительный характер и предоставляется «как
      есть» («as is») без каких-либо гарантий. Размещение любой информации на сайте (услуги, аппараты, цены, график,
      фото и видео) <strong>не гарантирует их фактического наличия или доступности в клинике в реальном времени</strong>.
      Клиника <strong>S.R.L. «REVIMED PLUS»</strong>, д-р Игорь Ревенко, персонал, администрация сайта и технический
      разработчик (wsod.cloud) не несут никакой ответственности за возможные расхождения между информацией на сайте и
      фактической ситуацией в клинике, а также за самостоятельное использование материалов сайта. В экстренных случаях
      звоните <strong>112</strong>. Все фотографии сделаны открыто и с согласия присутствующих; любое лицо может в
      любой момент запросить удаление фотографии со своим изображением по тел. <strong>022 60 50 60</strong>, и она
      будет незамедлительно удалена.
     </p>

     <div className="rm-quick-links-bar">
      <Link href="/cookies/" className="btn btn-outline-primary btn-sm">
       Cookies și Confidențialitate
      </Link>
      <Link href="/intrebari/" className="btn btn-outline-primary btn-sm">
       Întrebări frecvente
      </Link>
      <Link href="/contact/" className="btn btn-primary btn-sm">
       Contact
      </Link>
     </div>
    </article>
   </section>
  </>
 );
}
