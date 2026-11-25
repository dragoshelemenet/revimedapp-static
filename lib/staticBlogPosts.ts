import aliases from "@/content/blog-aliases.json";
import blogPosts from "@/content/blog.json";
import { blogSlugGroups, getTranslatedBlogSlug } from "@/lib/blogSlugTranslations";
export type StaticBlogPost = {
  id: number;
  lang: "ro" | "en" | "ru" | "ua";
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  keywords: string;
  published: number;
  created_at: string;
  edited_at: string;
};

// SEO-first display order across all 4 languages: commercial Chișinău neurology/neurosurgery/diagnostics/physio guides first, general wellness last.
const SEO_GROUP_ORDER = [
  "neurologyPrices2026",
  "herniaDisc",
  "migraineVertigo",
  "insomniaStress",
  "eegGuideChisinau",
  "ampNonInvasive",
  "endorphinsSerotoninTes",
  "sciaticaBackPain",
  "pediatricNeuro",
  "pediatricTicsSchool",
  "cervicalOsteochondrosis",
  "amplipulsElectrophoresis",
  "trigeminalJointPhysio",
  "carpalTunnelNeuropathy",
  "vegetativeDystoniaChestPain",
  "postSpineSurgeryRehab",
  "frozenShoulderPlexitis",
  "postStrokeRehab",
  "parkinsonMemoryRehab",
  "childStutteringAdhd",
  "mriPrep",
  "healthyFoods",
  "plastics",
  "cancer"
];

const slugRankMap = new Map<string, number>();
SEO_GROUP_ORDER.forEach((groupKey, idx) => {
  const group = blogSlugGroups[groupKey];
  if (!group) return;
  for (const slug of Object.values(group)) {
    slugRankMap.set(slug, idx);
  }
});

// Edit content/blog.json only. SQLite posts are legacy, never a display fallback.
export const staticBlogPosts = blogPosts as StaticBlogPost[];
type Lang = StaticBlogPost["lang"];
export function getStaticPostBySlug(slug: string, lang: Lang = "ro") {
 const translated = getTranslatedBlogSlug(slug, lang);
 return staticBlogPosts.find(p => p.lang === lang && p.slug === translated && (p.published === 1 || (p as any).status === "published"))
  || staticBlogPosts.find(p => p.lang === lang && p.slug === slug && (p.published === 1 || (p as any).status === "published"));
}
export function getStaticPublishedPosts(lang: Lang = "ro") {
 return staticBlogPosts
  .filter(p => p.lang === lang && (p.published === 1 || (p as any).status === "published") && getStaticPostBySlug(p.slug, lang)?.slug === p.slug)
  .sort((a, b) => {
   const ra = slugRankMap.get(a.slug) ?? 999;
   const rb = slugRankMap.get(b.slug) ?? 999;
   if (ra !== rb) return ra - rb;
   return b.id - a.id;
  });
}
export function getStaticBlogSlugs(lang?: Lang) {
 // Existing aliases remain exported and use canonical article content.
 return [...staticBlogPosts.filter(p => (p.published === 1 || (p as any).status === "published") && (!lang || p.lang === lang)), ...aliases.filter(p => (!lang || p.lang === lang) && getStaticPostBySlug(p.slug, p.lang as Lang))].map(p => p.slug);
}

const keys = new Set<string>();
for (const post of staticBlogPosts) {
 const key = `${post.lang}/${post.slug}`;
 if (keys.has(key)) throw new Error(`Duplicate blog entry: ${key}`);
 keys.add(key);
}
