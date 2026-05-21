"use client";

import { useEffect } from "react";

type Lang = "en" | "ru" | "ua";

const translations: Record<Lang, Record<string, string>> = {
  en: {
    "consultații și orientare medicală": "medical consultations and guidance",
    "recuperare funcțională și terapii": "functional recovery and therapies",
    "evaluări și instrumente educaționale": "assessments and educational tools",

    "Ai nevoie de o consultație sau recuperare?": "Need a consultation or recovery plan?",
    "Contactează centrul pentru programare, servicii disponibile și orientare rapidă.": "Contact the center for appointments, available services and quick guidance.",
    "Sună acum": "Call now",
    "Vezi contact": "View contact",

    "Reviews": "Reviews",
    "- DR R": "- Patient review",
    "DR R": "Patient review",
    "După mult timp de umblat pe la medici, s-a depistat, în sfârșit, problema și am primit un tratament cu rezultat pozitiv. Mulțumesc mult, domnule Igor!": "After a long time visiting different doctors, the problem was finally identified and I received treatment with a positive result. Thank you very much, Mr. Igor!",

    "Program de lucru:": "Working hours:",
    "Luni–Vineri:": "Monday–Friday:",
    "Linkuri utile": "Useful links",
    "Urmăriți-ne": "Follow us",
    "Acasă": "Home",
    "Despre Noi": "About",
    "Servicii": "Services",
    "Prețuri": "Prices",
    "Teste și Instrumente": "Tests and Tools",
    "Termeni și Condiții": "Terms and Conditions",
    "Contact": "Contact",
    "Str. Mircea cel Bătrân 13/2": "Mircea cel Bătrân St. 13/2"
  },

  ru: {
    "consultații și orientare medicală": "консультации и медицинская ориентация",
    "recuperare funcțională și terapii": "функциональное восстановление и терапии",
    "evaluări și instrumente educaționale": "оценки и образовательные инструменты",

    "Ai nevoie de o consultație sau recuperare?": "Нужна консультация или восстановление?",
    "Contactează centrul pentru programare, servicii disponibile și orientare rapidă.": "Свяжитесь с центром для записи, информации об услугах и быстрой ориентации.",
    "Sună acum": "Позвонить",
    "Vezi contact": "Контакты",

    "Reviews": "Отзывы",
    "- DR R": "- Отзыв пациента",
    "DR R": "Отзыв пациента",
    "După mult timp de umblat pe la medici, s-a depistat, în sfârșit, problema și am primit un tratament cu rezultat pozitiv. Mulțumesc mult, domnule Igor!": "После долгих обращений к разным врачам проблему наконец выявили, и я получил лечение с положительным результатом. Большое спасибо, господин Игорь!",

    "Program de lucru:": "График работы:",
    "Luni–Vineri:": "Понедельник–Пятница:",
    "Linkuri utile": "Полезные ссылки",
    "Urmăriți-ne": "Мы в соцсетях",
    "Acasă": "Главная",
    "Despre Noi": "О нас",
    "Servicii": "Услуги",
    "Prețuri": "Цены",
    "Teste și Instrumente": "Тесты и инструменты",
    "Termeni și Condiții": "Условия использования",
    "Contact": "Контакты",
    "Str. Mircea cel Bătrân 13/2": "ул. Мирча чел Бэтрын 13/2"
  },

  ua: {
    "consultații și orientare medicală": "консультації та медична орієнтація",
    "recuperare funcțională și terapii": "функціональне відновлення та терапії",
    "evaluări și instrumente educaționale": "оцінки та освітні інструменти",

    "Ai nevoie de o consultație sau recuperare?": "Потрібна консультація або відновлення?",
    "Contactează centrul pentru programare, servicii disponibile și orientare rapidă.": "Зв’яжіться з центром для запису, інформації про послуги та швидкої орієнтації.",
    "Sună acum": "Подзвонити",
    "Vezi contact": "Контакти",

    "Reviews": "Відгуки",
    "- DR R": "- Відгук пацієнта",
    "DR R": "Відгук пацієнта",
    "După mult timp de umblat pe la medici, s-a depistat, în sfârșit, problema și am primit un tratament cu rezultat pozitiv. Mulțumesc mult, domnule Igor!": "Після тривалих звернень до різних лікарів проблему нарешті виявили, і я отримав лікування з позитивним результатом. Щиро дякую, пане Ігорю!",

    "Program de lucru:": "Графік роботи:",
    "Luni–Vineri:": "Понеділок–П’ятниця:",
    "Linkuri utile": "Корисні посилання",
    "Urmăriți-ne": "Слідкуйте за нами",
    "Acasă": "Головна",
    "Despre Noi": "Про нас",
    "Servicii": "Послуги",
    "Prețuri": "Ціни",
    "Teste și Instrumente": "Тести та інструменти",
    "Termeni și Condiții": "Умови використання",
    "Contact": "Контакти",
    "Str. Mircea cel Bătrân 13/2": "вул. Мірча чел Бетрин 13/2"
  }
};

function getLang(): Lang | null {
  const first = window.location.pathname.split("/").filter(Boolean)[0];
  if (first === "en" || first === "ru" || first === "ua") return first;
  return null;
}

function normalizeText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function replaceTextNode(node: Text, dict: Record<string, string>) {
  const raw = node.nodeValue || "";
  const normalized = normalizeText(raw);
  if (!normalized) return;

  for (const [from, to] of Object.entries(dict)) {
    if (normalized === from) {
      node.nodeValue = raw.replace(raw.trim(), to);
      return;
    }

    if (normalized.includes(from)) {
      node.nodeValue = raw.replace(from, to);
      return;
    }
  }
}


function translateReviews(lang: Lang) {
  const reviewPack: Record<Lang, { title: string; quote: string; author: string }> = {
    en: {
      title: "Reviews",
      quote: "After a long time visiting different doctors, the problem was finally identified and I received treatment with a positive result. Thank you very much, Mr. Igor!",
      author: "- Patient review"
    },
    ru: {
      title: "Отзывы",
      quote: "После долгих обращений к разным врачам проблему наконец выявили, и я получил лечение с положительным результатом. Большое спасибо, господин Игорь!",
      author: "- Отзыв пациента"
    },
    ua: {
      title: "Відгуки",
      quote: "Після тривалих звернень до різних лікарів проблему нарешті виявили, і я отримав лікування з позитивним результатом. Щиро дякую, пане Ігорю!",
      author: "- Відгук пацієнта"
    }
  };

  const pack = reviewPack[lang];

  document.querySelectorAll("h2, h3, .reviewsTitle, .reviewTitle").forEach((el) => {
    if ((el.textContent || "").trim() === "Reviews") {
      el.textContent = pack.title;
    }
  });

  document.querySelectorAll("section, div").forEach((el) => {
    const txt = (el.textContent || "").replace(/\s+/g, " ").trim();

    const looksLikeReview =
      txt.includes("După mult timp de umblat pe la medici") ||
      txt.includes("Mulțumesc mult, domnule Igor") ||
      txt.includes("DR R") ||
      txt.includes("1 / 24");

    if (!looksLikeReview) return;

    el.querySelectorAll("p, div, strong, span").forEach((child) => {
      const childText = (child.textContent || "").replace(/\s+/g, " ").trim();

      if (
        childText.includes("După mult timp de umblat pe la medici") ||
        childText.includes("Mulțumesc mult, domnule Igor")
      ) {
        child.textContent = `“${pack.quote}”`;
      }

      if (childText === "- DR R" || childText === "DR R" || childText === "-DR R") {
        child.textContent = pack.author;
      }
    });
  });
}


function translateDom(lang: Lang) {
  const dict = translations[lang];

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (["SCRIPT", "STYLE", "TEXTAREA", "INPUT"].includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  nodes.forEach((node) => replaceTextNode(node, dict));

  // Also fix button/title aria labels if any.
  translateReviews(lang);

  document.querySelectorAll<HTMLElement>("a, button, span, div, p, strong, h1, h2, h3").forEach((el) => {
    const aria = el.getAttribute("aria-label");
    if (aria && dict[aria]) el.setAttribute("aria-label", dict[aria]);

    const title = el.getAttribute("title");
    if (title && dict[title]) el.setAttribute("title", dict[title]);
  });
}

export default function SiteTranslationFixer() {
  useEffect(() => {
    const lang = getLang();
    if (!lang) return;

    translateDom(lang);

    const observer = new MutationObserver(() => {
      translateDom(lang);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
