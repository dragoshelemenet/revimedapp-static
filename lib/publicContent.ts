import pages from "@/content/public-pages.json";
import type { Lang } from "@/lib/i18n";

// Snapshot of the previously displayed content, now the only public source.
// Editing the legacy SQLite file no longer changes or overrides the site.
export const getPrices = (lang: Lang) => pages[lang].prices;
export const getContact = (lang: Lang) => pages[lang].contact;
export const getGallery = (lang: Lang) => pages[lang].gallery;
export const getContentBlock = (lang: Lang, page: string, block: string) =>
  pages[lang].blocks.find(item => item.page_key === page && item.block_key === block);
