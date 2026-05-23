import Link from "next/link";

const apps = [
  ["test-ayurveda-dosha", "Test Ayurveda Dosha", "Test educațional pentru orientare."],
  ["respiratie-terapeutica", "Respirație terapeutică", "Exerciții simple de respirație și relaxare."],
  ["screening-neurologic", "Screening neurologic", "Întrebări simple despre simptome neurologice."],
  ["revimed-yoga-tibetan", "Revimed Yoga Tibetan", "Respirație, concentrare și mișcare conștientă."],
  ["calculator-recuperare-personalizata", "Calculator recuperare personalizată", "Orientare pentru recuperare și obiective."],
  ["test-postura-coloana", "Test postură și coloană", "Checklist pentru postură și simptome de coloană."]
];

export default function Page() {
  return (
    <main>
      <section className="pageHero">
        <div className="rmShell">
          <p className="breadcrumbs">Acasă / Aplicații</p>
          <h1>Aplicații și teste educaționale Revimed PLUS+</h1>
          <p>Instrumente simple pentru orientare, respirație, postură, recuperare și pregătire pentru consultație.</p>
        </div>
      </section>

      <section className="rmSection">
        <div className="rmShell">
          <div className="equipmentGrid">
            {apps.map(([slug, title, text]) => (
              <Link className="equipmentCard" href={`/aplicatii/${slug}`} key={slug}>
                <span className="equipmentBadge">Aplicație</span>
                <h2>{title}</h2>
                <p>{text}</p>
                <b>Deschide →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
