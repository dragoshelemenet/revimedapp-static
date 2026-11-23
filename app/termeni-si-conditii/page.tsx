import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, makeMetadata, siteUrl } from "@/lib/seo";

export const metadata = makeMetadata({
 lang: "ro",
 path: "/termeni-si-conditii",
 localized: false,
 title: "Termeni și Condiții · Limitarea Răspunderii",
 description: "Termeni și condiții, limitarea maximă a răspunderii și reguli de utilizare pentru site-ul și instrumentele educaționale Revimed PLUS+ Chișinău."
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
      Reguli de utilizare, declinarea răspunderii pentru conținutul informativ și cadrul legal aplicabil site-ului Revimed PLUS+.
     </p>
    </div>
   </PageHeading>

   <section className="rmSection legalSection">
    <article className="rmShell legalCard" data-glass-card>
     <h2>1. Date de identificare ale prestatorului și natura informativă a site-ului</h2>
     <p>
      Site-ul <strong>revimed.site</strong> este platforma oficială de prezentare și informare generală operată pentru
      <strong> S.R.L. „REVIMED PLUS”</strong> (Centrul Medical <strong>Revimed PLUS+</strong>), înregistrată în
      Republica Moldova:
     </p>
     <ul>
      <li><strong>Denumire juridică:</strong> Societatea cu Răspundere Limitată „REVIMED PLUS” (S.R.L.)</li>
      <li><strong>IDNO (Cod fiscal):</strong> 1011600011964 (data înregistrării: 31.03.2011)</li>
      <li><strong>Administrator / Fondator:</strong> Dr. Igor Revenco</li>
      <li><strong>Sediu / Adresă clinică:</strong> mun. Chișinău, sect. Ciocana, bd. Mircea cel Bătrân nr. 13/2, MD-2044, Republica Moldova</li>
      <li><strong>Telefon recepție:</strong> 022 60 50 60 / +373 79 422 908</li>
      <li><strong>Autorizare:</strong> Activitate medicală desfășurată în conformitate cu autorizațiile și actele permisive emise de autoritățile competente ale Republicii Moldova (disponibile spre consultare la recepția clinicii).</li>
     </ul>
     <p>
      Prin accesarea și utilizarea acestui site acceptați integral prezentii Termeni și Condiții.
      Navigarea pe site, parcurgerea articolelor, utilizarea instrumentelor educaționale sau contactarea telefonică
      preliminară <strong>nu constituie un act medical, nu creează o relație medic–pacient și nu reprezintă un contract
      de prestare a serviciilor medicale la distanță (telemedicină)</strong>.
     </p>

     <h2>2. Nu înlocuiește consultația medicală · Urgențe medicale (112)</h2>
     <p>
      Toate textele, articolele de blog, descrierile de servicii, aparate, teste interactive, scoruri orientative,
      exerciții de respirație/postură, materiale despre fitoterapie, nutriție sau prevenție au <strong>caracter
      strict informativ și educațional</strong>. Acestea nu reprezintă și nu înlocuiesc consultația medicală directă,
      examinarea clinică, investigațiile paraclinice, diagnosticul medical sau planul terapeutic prescris de un medic.
     </p>
     <p>
      <strong>ATENȚIE — URGENȚE MEDICALE:</strong> În cazul oricărei urgențe medicale (durere acută în piept,
      paralizie sau amorțeală bruscă, tulburări bruște de vorbire/vedere, convulsii active, pierderea cunoștinței,
      traumatisme craniene/vertebrale sau dificultăți severe de respirație), <strong>apelați imediat Serviciul Unic de
      Urgență 112</strong> sau prezentați-vă la cea mai apropiată unitate de primiri urgențe. Nu amânați asistența
      medicală de urgență pe baza informațiilor citite pe acest site.
     </p>

     <h2>3. Limitarea maximă a răspunderii pentru conținutul informativ și instrumentele online</h2>
     <p>
      În măsura maximă permisă de legislația Republicii Moldova, <strong>Revimed PLUS+</strong>, conducerea,
      medicii colaboratori, autorii, dezvoltatorii tehnici și administratorii site-ului <strong>nu își asumă nicio
      răspundere juridică, civilă sau patrimonială</strong> pentru:
     </p>
     <ul>
      <li>decizii medicale, automedicație, întreruperea sau modificarea unui tratament prescris ori amânarea consultației medicale;</li>
      <li>interpretarea sau aplicarea pe cont propriu a articolelor, ghidurilor, exercițiilor fizice/respiratorii sau scorurilor din secțiunea Teste și Instrumente;</li>
      <li>eventuale daune directe, indirecte, incidentale sau consecutive rezultate din utilizarea ori imposibilitatea utilizării site-ului;</li>
      <li>inexactități tehnice involuntare, omisiuni temporare sau diferențe de traducere între versiunile RO / EN / RU / UA (în caz de neconcordanță, prevalează versiunea în limba română și informațiile confirmate la recepție).</li>
     </ul>
     <p>
      <strong>Fără garanții de vindecare sau rezultate identice:</strong> Nicio informație de pe site nu constituie o
      promisiune sau garanție de vindecare ori obținere a unui rezultat clinic determinat. Evoluția fiecărui pacient
      depinde de diagnostic, comorbidități și particularități biologice individuale.
     </p>
     <p>
      <strong>Clarificare privind afecțiunile oncologice și patologiile severe:</strong> Articolele educaționale generale
      (inclusiv cele privind reducerea factorilor de risc) au scop pur informativ. Centrul Medical Revimed PLUS+
      <strong> nu oferă tratament oncologic</strong> și nu înlocuiește medicul oncolog, cardiolog de urgență sau alte
      specialități de profil.
     </p>

     <h2>4. Fitoterapie, suplimente, exerciții și proceduri</h2>
     <p>
      Orice mențiune privind plante medicinale, suplimente, nutriție, exerciții fizice/respiratorii sau proceduri
      fizioterapeutice are caracter general. Acestea pot avea contraindicații sau interacțiuni medicamentoase (în special
      în sarcină, alăptare, epilepsie, afecțiuni cardiovasculare, oncologice, hepatice, renale, tiroidiene, implanturi
      metalice/pacemaker sau tratamente anticoagulante/antidiabetice). Consultarea medicului înainte de orice procedură
      sau administrare este obligatorie.
     </p>

     <h2>5. Prețuri orientative și convertor valutar</h2>
     <p>
      Toate tarifele afișate pe site au <strong>caracter strict orientativ și informativ</strong> și <strong>nu
      constituie o ofertă publică fermă</strong>. Prețurile pot fi actualizate fără notificare prealabilă. Convertorul
      valutar (EUR, RON, USD, UAH) oferă exclusiv estimări aproximative; toate plățile se efectuează în <strong>MDL
      (lei moldovenești)</strong> la recepția centrului, conform listei oficiale de prețuri în vigoare la data
      prestării serviciului și planului medical stabilit individual.
     </p>

     <h2>6. Recenzii și mărturii</h2>
     <p>
      Recenziile publicate pe site reflectă experiențe subiective individuale ale pacienților, sunt afișate în formă
      anonimizată (inițiale) pentru protejarea vieții private și nu reprezintă o garanție a unor rezultate identice
      pentru alți pacienți.
     </p>

     <h2>7. Linkuri externe, servicii terțe și disponibilitate tehnică</h2>
     <p>
      Site-ul poate conține linkuri sau integrări către servicii terțe (Google Maps, YouTube, Facebook). Revimed PLUS+
      nu controlează și nu răspunde pentru conținutul, disponibilitatea, securitatea sau politicile acestor platforme
      externe. Site-ul este furnizat „ca atare” („as is”), fără garanții privind disponibilitatea neîntreruptă.
     </p>

     <h2>8. Proprietate intelectuală și legea aplicabilă</h2>
     <p>
      Textele, imaginile, structura și elementele grafice aparțin Revimed PLUS+ sau sunt utilizate legal în scop de
      prezentare. Reproducerea sau utilizarea comercială fără acord scris este interzisă.
     </p>
     <p>
      Prezentii Termeni și Condiții sunt guvernați de <strong>legislația Republicii Moldova</strong>. Orice eventual
      diferend va fi soluționat prioritar pe cale amiabilă, iar în lipsa unui acord, de instanțele judecătorești
      competente din mun. Chișinău.
     </p>

     <hr style={{ margin: "24px 0", opacity: 0.2 }} />

     <h2>Правовое уведомление и ограничение ответственности (RU)</h2>
     <p>
      Сайт <strong>revimed.site</strong> носит исключительно информационный и ознакомительный характер. Материалы
      сайта, статьи, тесты и калькуляторы не являются медицинской консультацией, диагнозом, назначением лечения или
      гарантией результата. В экстренных случаях немедленно звоните <strong>112</strong>. Все цены и конвертация валют
      являются ориентировочными и не являются публичной офертой; оплата производится в MDL по действующему прайсу
      клиники. Использование материалов сайта осуществляется пользователем самостоятельно и под собственную
      ответственность; в случае расхождений приоритет имеет версия на румынском языке.
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
