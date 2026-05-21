"use client";

import { useEffect } from "react";

export default function HeroBottomScrollHint() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(
      "main section.homeHero, main section.pageHero, main section.blogPostHero, main section.blogDetailHero"
    );

    if (!hero) return;

    hero.classList.add("hasRealScrollHint");

    let hint = hero.querySelector<HTMLButtonElement>(".realHeroScrollHint");
    if (!hint) {
      hint = document.createElement("button");
      hint.type = "button";
      hint.className = "realHeroScrollHint";
      hint.setAttribute("aria-label", "Scroll");
      hint.innerHTML = "⌄";

      hint.addEventListener("click", () => {
        const next = hero.nextElementSibling as HTMLElement | null;
        if (next) {
          next.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: hero.offsetHeight, behavior: "smooth" });
        }
      });

      hero.appendChild(hint);
    }

    const update = () => {
      if (window.scrollY > 24) {
        document.body.classList.add("heroScrolled");
      } else {
        document.body.classList.remove("heroScrolled");
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return null;
}
