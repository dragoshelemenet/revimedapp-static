import Link from "next/link";
import { site } from "@/lib/site";

export default function HomeCTA() {
  return (
    <section className="homeCtaBand">
      <div className="rmShell homeCtaInner">
        <div>
          <span className="sectionEyebrow">Revimed PLUS+</span>
          <h2>Ai nevoie de o consultație sau recuperare?</h2>
          <p>
            Contactează centrul pentru programare, servicii disponibile și orientare rapidă.
          </p>
        </div>

        <div className="homeCtaActions">
          <a className="blueBtn" href={`tel:${site.phone2.replaceAll(" ", "")}`}>Sună acum</a>
          <Link className="softBtn" href="/contact">Vezi contact</Link>
        </div>
      </div>
    </section>
  );
}
