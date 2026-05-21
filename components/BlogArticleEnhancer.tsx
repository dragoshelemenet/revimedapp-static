"use client";

import { useEffect } from "react";

function getLang() {
  if (typeof window === "undefined") return "ro";
  const first = window.location.pathname.split("/").filter(Boolean)[0];
  if (["ro", "en", "ru", "ua"].includes(first)) return first;
  return document.documentElement.lang || "ro";
}

function t(lang: string) {
  const pack: Record<string, any> = {
    ro: {
      download: "Descarcă articolul ca document",
      saved: "Document pregătit pentru salvare",
      contact: "Date pentru programare",
      note: "Important",
      docTitle: "Articol Revimed PLUS+",
      footer: "Centrul Medical Revimed PLUS+ · Articol informativ"
    },
    en: {
      download: "Download article as document",
      saved: "Document ready to save",
      contact: "Appointment details",
      note: "Important",
      docTitle: "Revimed PLUS+ Article",
      footer: "Revimed PLUS+ Medical Center · Informational article"
    },
    ru: {
      download: "Скачать статью документом",
      saved: "Документ готов к сохранению",
      contact: "Данные для записи",
      note: "Важно",
      docTitle: "Статья Revimed PLUS+",
      footer: "Медицинский центр Revimed PLUS+ · Информационная статья"
    },
    ua: {
      download: "Завантажити статтю документом",
      saved: "Документ готовий до збереження",
      contact: "Дані для запису",
      note: "Важливо",
      docTitle: "Стаття Revimed PLUS+",
      footer: "Медичний центр Revimed PLUS+ · Інформаційна стаття"
    }
  };
  return pack[lang] || pack.ro;
}

function escapeHtml(value: string) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function highlightText(html: string) {
  let out = html;

  const patterns = [
    /(\bvitamine\b|\bminerale\b|\bклетчатка\b|\bвитамины\b|\bминералы\b|\bfibre\b|\bfiber\b|\bproteine\b|\bprotein\b|\bomega-3\b|\bомега-3\b)/gi,
    /(fosfataza alcalină|щелочная фосфатаза|alkaline phosphatase|фосфатаза alcalină)/gi,
    /(sistemul nervos|нервной системы|nervous system|нервової системи)/gi,
    /(screening|профилактик[аи]|prevenție|prevention|профілактик[аи])/gi
  ];

  for (const rx of patterns) {
    out = out.replace(rx, '<mark class="blogAutoMark">$1</mark>');
  }

  out = out.replace(/^([^:]{3,80}:)/, '<strong>$1</strong>');
  return out;
}

function makeSlugName(title: string) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9а-яёіїєґ]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "revimed-articol";
}

function formatArticle(article: HTMLElement) {
  if (article.dataset.blogEnhanced === "1") return;
  article.dataset.blogEnhanced = "1";

  const nodes = Array.from(article.querySelectorAll("p, div, li"))
    .filter((el) => {
      const txt = (el.textContent || "").trim();
      return txt.length > 15 && !el.closest(".blogExportBox");
    }) as HTMLElement[];

  for (const el of nodes) {
    const text = (el.textContent || "").trim();

    if (!text) continue;

    // Skip already structured elements.
    if (el.classList.contains("blogPrettyParagraph")) continue;

    const isNumbered = /^\d+\.\s+/.test(text);
    const isImportant =
      /important|важно|важный|atenție|atentie|reține|retine|rețineți|важно/i.test(text);
    const isContact =
      /programare|запис|запись|contact|sunați|sunaţi|suna|звоните|\+373|022\s*60\s*50\s*60|079\s*422\s*908|79\s*422\s*908/i.test(text);
    const isDisclaimer =
      /nu înlocuiește consultația|не заменяет консультац|informativ|информационн|oncologic|oncolog/i.test(text);

    if (isNumbered) {
      const title = text.replace(/^\d+\.\s+/, "").trim();
      el.outerHTML = `<h3 class="blogAutoHeading">${highlightText(escapeHtml(title))}</h3>`;
      continue;
    }

    if (isContact) {
      el.classList.add("blogInfoBox", "blogContactBox");
      el.innerHTML = `<span class="blogBoxLabel">📞</span><div>${highlightText(escapeHtml(text))}</div>`;
      continue;
    }

    if (isImportant || isDisclaimer) {
      el.classList.add("blogInfoBox", "blogImportantBox");
      el.innerHTML = `<span class="blogBoxLabel">⚠️</span><div>${highlightText(escapeHtml(text))}</div>`;
      continue;
    }

    el.classList.add("blogPrettyParagraph");
    el.innerHTML = highlightText(escapeHtml(text));
  }
}

function buildDocHtml(article: HTMLElement, lang: string) {
  const title =
    document.querySelector(".blogPostHero h1, .blogDetailHero h1, .pageHero h1")?.textContent?.trim() ||
    document.title ||
    "Revimed PLUS+";

  const logo = `${window.location.origin}/images/logo.png`;
  const pack = t(lang);

  const content = article.cloneNode(true) as HTMLElement;
  content.querySelectorAll(".blogExportBox, button, script").forEach((n) => n.remove());

  return `
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>${escapeHtml(title)}</title>
<style>
  body{
    font-family: Arial, sans-serif;
    color:#10233f;
    line-height:1.55;
    font-size:14pt;
    margin:36px;
  }
  .docHeader{
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    border-bottom:3px solid #0b8fd8;
    padding-bottom:16px;
    margin-bottom:28px;
  }
  .docTitle{
    font-size:28pt;
    line-height:1.05;
    font-weight:800;
    color:#08234a;
    max-width:70%;
  }
  .docLogo{
    width:170px;
    height:auto;
    object-fit:contain;
  }
  img{
    max-width:100%;
    border-radius:12px;
    margin:14px 0 22px;
  }
  h1,h2,h3{
    color:#08234a;
    line-height:1.15;
  }
  h3{
    margin-top:22px;
    padding:10px 14px;
    border-left:5px solid #0b8fd8;
    background:#eef8ff;
    border-radius:10px;
  }
  p, div, li{
    margin:0 0 12px;
  }
  strong{
    color:#08234a;
  }
  mark{
    background:#fff1b8;
    padding:1px 4px;
    border-radius:4px;
  }
  .blogInfoBox{
    border:1px solid #cfe7f8;
    background:#f4fbff;
    border-radius:12px;
    padding:12px 14px;
    margin:16px 0;
  }
  .blogImportantBox{
    border-color:#ffd9a8;
    background:#fff8ef;
  }
  .docFooter{
    margin-top:36px;
    padding-top:18px;
    border-top:2px solid #dcecf8;
    text-align:right;
    color:#52647b;
    font-size:11pt;
  }
  .docFooter img{
    width:145px;
    display:block;
    margin:0 0 8px auto;
  }
</style>
</head>
<body>
  <div class="docHeader">
    <div class="docTitle">${escapeHtml(title)}</div>
    <img class="docLogo" src="${logo}" alt="Revimed PLUS+">
  </div>

  <main>
    ${content.innerHTML}
  </main>

  <div class="docFooter">
    <img src="${logo}" alt="Revimed PLUS+">
    <div>${escapeHtml(pack.footer)}</div>
    <div>022 60 50 60 · +373 79 422 908</div>
  </div>
</body>
</html>`;
}

function injectExport(article: HTMLElement) {
  if (document.querySelector(".blogExportBox")) return;

  const lang = getLang();
  const pack = t(lang);

  const box = document.createElement("div");
  box.className = "blogExportBox";
  box.innerHTML = `
    <div class="blogExportText">
      <strong>📄 ${escapeHtml(pack.saved)}</strong>
      <span>${escapeHtml(pack.download)}</span>
    </div>
    <button type="button" class="blogExportBtn">${escapeHtml(pack.download)}</button>
  `;

  const btn = box.querySelector("button") as HTMLButtonElement;
  btn.addEventListener("click", () => {
    const html = buildDocHtml(article, lang);
    const blob = new Blob(["\ufeff", html], { type: "application/msword;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const title =
      document.querySelector(".blogPostHero h1, .blogDetailHero h1, .pageHero h1")?.textContent?.trim() ||
      "revimed-articol";

    const a = document.createElement("a");
    a.href = url;
    a.download = `${makeSlugName(title)}.doc`;
    document.body.appendChild(a);
    a.click();
    a.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1200);
  });

  article.appendChild(box);
}

export default function BlogArticleEnhancer() {
  useEffect(() => {
    const run = () => {
      const article = document.querySelector(
        ".blogReadableContent, .blogArticleCard, article.adminCard, .blogContent"
      ) as HTMLElement | null;

      const isBlogPost =
        !!article &&
        /\/blog\//.test(window.location.pathname) &&
        !article.closest("footer");

      if (!isBlogPost) return;

      article.classList.add("blogEnhancedArticle");
      formatArticle(article);
      injectExport(article);
    };

    run();

    const timer = window.setTimeout(run, 600);
    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
