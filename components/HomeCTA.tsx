import Link from "next/link";
import { site } from "@/lib/site";
import { withLang, type Lang } from "@/lib/i18n";

const ctaText: Record<Lang, { badge: string; title: string; text: string; call: string; contact: string }> = {
  ro: {
    badge: "Revimed PLUS+",
    title: "Ai nevoie de o consultație sau recuperare?",
    text: "Contactează centrul pentru programare, servicii disponibile și orientare rapidă.",
    call: "Sună acum",
    contact: "Vezi contact"
  },
  en: {
    badge: "Revimed PLUS+",
    title: "Need a consultation or recovery plan?",
    text: "Contact the center for appointments, available services and quick guidance.",
    call: "Call now",
    contact: "View contact"
  },
  ru: {
    badge: "Revimed PLUS+",
    title: "Нужна консультация или восстановление?",
    text: "Свяжитесь с центром для записи, информации об услугах и быстрой ориентации.",
    call: "Позвонить",
    contact: "Контакты"
  },
  ua: {
    badge: "Revimed PLUS+",
    title: "Потрібна консультація або відновлення?",
    text: "Зв’яжіться з центром для запису, інформації про послуги та швидкої орієнтації.",
    call: "Подзвонити",
    contact: "Контакти"
  }
};

export default function HomeCTA({ lang = "ro" }: { lang?: Lang }) {
  const text = ctaText[lang] || ctaText.ro;

  return (
    <section className="homeCtaWrap">
      <div className="rmShell homeCta">
        <div>
          <span>{text.badge}</span>
          <h2>{text.title}</h2>
          <p>{text.text}</p>
        </div>

        <div className="ctaActions">
          <a className="blueBtn" href={`tel:${site.phone2.replaceAll(" ", "")}`}>
            {text.call}
          </a>
          <Link className="softBtn" href={withLang("/contact", lang)}>
            {text.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}
