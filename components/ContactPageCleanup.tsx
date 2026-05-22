"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function normalize(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function cleanContactPage() {
  const main = document.querySelector("main");
  if (!main) return;

  // Remove broken/empty image placeholders from contact page.
  main.querySelectorAll<HTMLImageElement>("img").forEach((img) => {
    const src = img.getAttribute("src") || "";
    const current = img.currentSrc || "";

    const isBad =
      !src ||
      src === "" ||
      src.includes("/images/6.jpg") ||
      current.includes("/images/6.jpg");

    if (isBad) {
      const parent = img.parentElement;
      if (parent && parent.children.length <= 1) {
        parent.remove();
      } else {
        img.remove();
      }
    }

    img.addEventListener("error", () => {
      const parent = img.parentElement;
      if (parent && parent.children.length <= 1) {
        parent.remove();
      } else {
        img.remove();
      }
    }, { once: true });
  });

  // Remove empty Contact card: the bad duplicate has only label "Contact" and no value.
  Array.from(main.querySelectorAll<HTMLElement>("div, a, article, section")).forEach((el) => {
    const text = normalize(el.textContent || "");

    if (text === "Contact") {
      let card: HTMLElement | null = el;

      for (let i = 0; i < 5 && card?.parentElement; i++) {
        const parentText = normalize(card.parentElement.textContent || "");

        if (
          parentText === "Contact" ||
          /^Contact\s*$/.test(parentText)
        ) {
          card = card.parentElement;
        } else {
          break;
        }
      }

      if (card && normalize(card.textContent || "") === "Contact") {
        card.remove();
      }
    }
  });

  // Remove duplicate phone cards if same number appears twice.
  const seenPhones = new Set<string>();

  Array.from(main.querySelectorAll<HTMLElement>("div, a, article")).forEach((el) => {
    const text = normalize(el.textContent || "");
    const hasPhone = text.includes("022 60 50 60");
    if (!hasPhone) return;

    const normalizedPhone = "022605060";

    const isSmallCard =
      text.length < 80 &&
      text.includes("Contact") &&
      text.includes("022 60 50 60");

    if (!isSmallCard) return;

    if (seenPhones.has(normalizedPhone)) {
      el.remove();
    } else {
      seenPhones.add(normalizedPhone);
    }
  });
}

export default function ContactPageCleanup() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.includes("/contact")) return;

    const t1 = window.setTimeout(cleanContactPage, 60);
    const t2 = window.setTimeout(cleanContactPage, 350);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [pathname]);

  return null;
}
