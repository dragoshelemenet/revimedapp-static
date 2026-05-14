import Link from "next/link";
import { site } from "@/lib/site";

const facebookUrl = "https://www.facebook.com/p/Centrul-Medical-REVIMED-100047070376925/";

export default function Footer() {
  return (
    <footer className="rmFooter">
      <div className="rmShell rmFooterGrid">
        <div className="footerBrand">
          <img src="/images/logo.png" alt="REVIMED" className="footerLogo" />
          <p>© {new Date().getFullYear()} Centru Medical Revimed PLUS+. All rights reserved.</p>
        </div>

        <div className="footerSchedule">
          <h3>Program de lucru:</h3>
          <p>📍 {site.address}</p>
          <p>{site.hours}</p>
          <p>{site.phone}</p>
        </div>

        <div className="footerLinks">
          <h3>Linkuri utile</h3>
          <div>
            <Link href="/">Acasă</Link>
            <Link href="/despre-noi">Despre Noi</Link>
            <Link href="/servicii">Servicii</Link>
            <Link href="/preturi">Prețuri</Link>
            <Link href="/aplicatii/teste-si-instrumente">Teste și Instrumente</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/termeni-si-conditii">Termeni și Condiții</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>

        <div className="footerSocial">
          <h3>Urmăriți-ne</h3>
          <a className="fb" href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook Revimed">
            <span>f</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
