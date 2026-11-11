import { t, type Lang } from "@/lib/i18n";
import { makeMetadata } from "@/lib/seo";

const sections = {
 "/despre-noi": ["aboutTitle", "aboutText1"],
 "/preturi": ["pricesTitle", "pricesSubtitle"],
 "/contact": ["contactTitle", "contactSubtitle"],
 "/galerie": ["galleryTitle", "gallerySubtitle"],
 "/blog": ["blogTitle", "blogSubtitle"],
} as const;

export type SectionPath = keyof typeof sections;
export function sectionMetadata(lang: Lang, path: SectionPath) {
 const text = t(lang);
 const [title, description] = sections[path];
 return makeMetadata({ lang, path, title: text[title], description: text[description] });
}
