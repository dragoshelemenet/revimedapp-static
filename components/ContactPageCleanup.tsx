"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function normalize(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function cleanOnlyEmptyCards() {
  const main = document.querySelector("main");
  if (!main) return;

  // Remove only truly empty contact/info cards.
  Array.from(main.querySelectorAll<HTMLElement>("div, a, article")).forEach((el) => {
    const text = normalize(el.textContent || "");
    const hasIconOnly =
      text === "" ||
      text === "Contact" ||
      text === "Fix" ||
      text === "Phone";

    const looksLikeCard =
      el.className.toString().toLowerCase().includes("card") ||
      el.className.toString().toLowerCase().includes("contact") ||
      el.className.toString().toLowerCase().includes("info");

    if (looksLikeCard && hasIconOnly) {
      el.remove();
    }
  });

  // Remove broken/empty images only.
  main.querySelectorAll<HTMLImageElement>('img[src=""], img[src*="/images/6.jpg"]').forEach((img) => {
    const parent = img.parentElement;
    if (parent && parent.children.length <= 1) parent.remove();
    else img.remove();
  });
}

export default function ContactPageCleanup() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.includes("/contact")) return;

    const t1 = window.setTimeout(cleanOnlyEmptyCards, 120);
    const t2 = window.setTimeout(cleanOnlyEmptyCards, 500);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [pathname]);

  return null;
}
