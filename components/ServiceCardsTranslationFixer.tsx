"use client";

import { useEffect } from "react";

type Lang = "en" | "ru" | "ua";

const translations: Record<Lang, Record<string, string>> = {
  en: {
    "Consultații Neurologice": "Neurology Consultations",
    "Consultații Neurochirurgie": "Neurosurgery Consultations",
    "Fizioterapie și Reabilitare": "Physiotherapy and Rehabilitation",
    "Diagnostic Funcțional": "Functional Diagnostics",
    "Terapie Balneară": "Balneotherapy",
    "Electroterapie": "Electrotherapy",

    "Evaluări neurologice complete pentru diagnosticarea și gestionarea afecțiunilor neurologice.":
      "Complete neurological assessments for diagnosing and managing neurological conditions.",
    "Consultații pentru evaluarea necesității intervențiilor chirurgicale și a patologiilor coloanei.":
      "Consultations for assessing the need for surgical interventions and spine conditions.",
    "Programe personalizate de reabilitare pentru recuperarea forței, mobilității și funcției.":
      "Personalized rehabilitation programs for restoring strength, mobility and function.",
    "Evaluări funcționale pentru sistemul nervos, mușchi, coordonare și funcții asociate.":
      "Functional assessments for the nervous system, muscles, coordination and related functions.",
    "Tratamente balneare, nămol, hidroterapie și terapii complementare.":
      "Balneotherapy, therapeutic mud, hydrotherapy and complementary therapies.",
    "Electrostimulare și proceduri electroterapeutice pentru durere, mușchi și recuperare.":
      "Electrostimulation and electrotherapy procedures for pain, muscles and recovery.",

    "Revimed PLUS+ medical services in Chisinau": "Revimed PLUS+ medical services in Chisinau"
  },

  ru: {
    "Consultații Neurologice": "Неврологические консультации",
    "Consultații Neurochirurgie": "Консультации нейрохирурга",
    "Fizioterapie și Reabilitare": "Физиотерапия и реабилитация",
    "Diagnostic Funcțional": "Функциональная диагностика",
    "Terapie Balneară": "Бальнеотерапия",
    "Electroterapie": "Электротерапия",

    "Evaluări neurologice complete pentru diagnosticarea și gestionarea afecțiunilor neurologice.":
      "Полная неврологическая оценка для диагностики и ведения неврологических состояний.",
    "Consultații pentru evaluarea necesității intervențiilor chirurgicale și a patologiilor coloanei.":
      "Консультации для оценки необходимости хирургического вмешательства и заболеваний позвоночника.",
    "Programe personalizate de reabilitare pentru recuperarea forței, mobilității și funcției.":
      "Индивидуальные программы реабилитации для восстановления силы, подвижности и функций.",
    "Evaluări funcționale pentru sistemul nervos, mușchi, coordonare și funcții asociate.":
      "Функциональная оценка нервной системы, мышц, координации и связанных функций.",
    "Tratamente balneare, nămol, hidroterapie și terapii complementare.":
      "Бальнеологические процедуры, лечебная грязь, гидротерапия и дополнительные терапии.",
    "Electrostimulare și proceduri electroterapeutice pentru durere, mușchi și recuperare.":
      "Электростимуляция и электротерапевтические процедуры при боли, для мышц и восстановления.",

    "Revimed PLUS+ medical services in Chisinau": "Медицинские услуги Revimed PLUS+ в Кишинёве"
  },

  ua: {
    "Consultații Neurologice": "Неврологічні консультації",
    "Consultații Neurochirurgie": "Консультації нейрохірурга",
    "Fizioterapie și Reabilitare": "Фізіотерапія та реабілітація",
    "Diagnostic Funcțional": "Функціональна діагностика",
    "Terapie Balneară": "Бальнеотерапія",
    "Electroterapie": "Електротерапія",

    "Evaluări neurologice complete pentru diagnosticarea și gestionarea afecțiunilor neurologice.":
      "Повна неврологічна оцінка для діагностики та ведення неврологічних станів.",
    "Consultații pentru evaluarea necesității intervențiilor chirurgicale și a patologiilor coloanei.":
      "Консультації для оцінки потреби в хірургічному втручанні та станів хребта.",
    "Programe personalizate de reabilitare pentru recuperarea forței, mobilității și funcției.":
      "Індивідуальні програми реабілітації для відновлення сили, рухливості та функції.",
    "Evaluări funcționale pentru sistemul nervos, mușchi, coordonare și funcții asociate.":
      "Функціональна оцінка нервової системи, м’язів, координації та пов’язаних функцій.",
    "Tratamente balneare, nămol, hidroterapie și terapii complementare.":
      "Бальнеологічні процедури, лікувальні грязі, гідротерапія та додаткові терапії.",
    "Electrostimulare și proceduri electroterapeutice pentru durere, mușchi și recuperare.":
      "Електростимуляція та електротерапевтичні процедури при болю, для м’язів і відновлення.",

    "Revimed PLUS+ medical services in Chisinau": "Медичні послуги Revimed PLUS+ у Кишиневі"
  }
};

function getLang(): Lang | null {
  const first = window.location.pathname.split("/").filter(Boolean)[0];
  if (first === "en" || first === "ru" || first === "ua") return first;
  return null;
}

function normalize(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function translateNodeText(node: Text, dict: Record<string, string>) {
  const raw = node.nodeValue || "";
  const clean = normalize(raw);
  if (!clean) return;

  for (const [from, to] of Object.entries(dict)) {
    if (clean === from) {
      node.nodeValue = raw.replace(raw.trim(), to);
      return;
    }
  }
}

function runTranslation() {
  const lang = getLang();
  if (!lang) return;

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
  nodes.forEach((node) => translateNodeText(node, dict));
}

export default function ServiceCardsTranslationFixer() {
  useEffect(() => {
    runTranslation();

    const observer = new MutationObserver(() => runTranslation());
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
