import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <h3>{site.name}</h3>
          <p>Neurologie, neurochirurgie, reabilitare medicală, fizioterapie și instrumente digitale pentru pacienți.</p>
        </div>
        <div>
          <h3>Meniu</h3>
          <Link href="/servicii">Servicii</Link>
          <Link href="/aplicatii/teste-si-instrumente">Teste și Instrumente</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <p>{site.address}</p>
          <p>{site.phone}</p>
          <p>{site.email}</p>
          <p>{site.hours}</p>
        </div>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} {site.name}. Toate drepturile rezervate.</div>
    </footer>
  );
}
