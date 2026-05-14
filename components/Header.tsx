import Link from "next/link";
import { site, tools } from "@/lib/site";

export default function Header() {
  return (
    <header className="header">
      <div className="topbar">
        <div className="container topbarInner">
          <span>{site.address}</span>
          <span>RO · RU · UA</span>
        </div>
      </div>

      <nav className="container nav">
        <Link href="/" className="logo" aria-label={site.name}>
          <span className="logoMark">⚕️</span>
          <span>
            <b>REVIMED</b>
            <small>PLUS+</small>
          </span>
        </Link>

        <div className="navLinks">
          <Link href="/">Acasă</Link>
          <Link href="/despre-noi">Despre noi</Link>
          <Link href="/servicii">Servicii</Link>

          <div className="dropdown">
            <Link href="/aplicatii">Aplicații ▾</Link>
            <div className="dropdownPanel">
              <Link href="/aplicatii/teste-si-instrumente" className="dropItem">
                <strong>Teste și Instrumente</strong>
                <span>Aplicații medicale digitale</span>
              </Link>
              {tools.map((tool) => (
                <Link key={tool.slug} href={tool.href} className="dropItem">
                  <strong>{tool.title}</strong>
                  <span>{tool.tag}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/blog">Blog</Link>
          <Link href="/preturi">Prețuri</Link>
          <Link href="/galerie">Galerie</Link>
          <Link href="/contact">Contact</Link>
          <Link href={`tel:${site.phone.replaceAll(" ", "")}`} className="navCta">Sună</Link>
        </div>
      </nav>
    </header>
  );
}
