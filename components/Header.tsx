import Link from "next/link";
import { site, tools } from "@/lib/site";

export default function Header() {
  return (
    <header className="rmHeader">
      <div className="rmTop">
        <div className="rmShell">
          <span></span>
          <span className="langs">EN&nbsp;&nbsp; RU&nbsp;&nbsp; UA</span>
        </div>
      </div>

      <nav className="rmNav rmShell">
        <Link href="/" className="rmLogo" aria-label={site.name}>
          <img src="/images/logo.png" alt="REVIMED" />
          <span className="rmLogoText">REVIMED</span>
        </Link>

        <div className="rmLinks">
          <Link href="/">Acasă</Link>
          <Link href="/despre-noi">Despre Noi</Link>
          <Link href="/servicii">Servicii</Link>

          <div className="rmDrop">
            <Link href="/aplicatii">Aplicații</Link>
            <div className="rmDropPanel">
              <Link href="/aplicatii/teste-si-instrumente">
                <b>Teste și Instrumente</b>
                <small>Toate aplicațiile medicale</small>
              </Link>
              {tools.map((tool) => (
                <Link key={tool.slug} href={tool.href}>
                  <b>{tool.title}</b>
                  <small>{tool.description}</small>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/preturi">Prețuri</Link>
          <Link href="/galerie">Galerie</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
