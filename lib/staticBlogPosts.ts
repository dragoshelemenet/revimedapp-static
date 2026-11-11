import aliases from "@/content/blog-aliases.json";
import blogPosts from "@/content/blog.json";
import { getTranslatedBlogSlug } from "@/lib/blogSlugTranslations";
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

// Edit content/blog.json only. SQLite posts are legacy, never a display fallback.
export const staticBlogPosts = blogPosts as StaticBlogPost[];
type Lang = StaticBlogPost["lang"];
export function getStaticPostBySlug(slug: string, lang: Lang = "ro") {
 const translated = getTranslatedBlogSlug(slug, lang);
 return staticBlogPosts.find(p => p.lang === lang && p.slug === translated && p.published === 1)
  || staticBlogPosts.find(p => p.lang === lang && p.slug === slug && p.published === 1);
}
export function getStaticPublishedPosts(lang: Lang = "ro") {
 return staticBlogPosts.filter(p => p.lang === lang && p.published === 1 && getStaticPostBySlug(p.slug, lang)?.slug === p.slug);
}
export function getStaticBlogSlugs(lang?: Lang) {
 // Existing aliases remain exported and use canonical article content.
 return [...staticBlogPosts.filter(p => p.published === 1 && (!lang || p.lang === lang)), ...aliases.filter(p => (!lang || p.lang === lang) && getStaticPostBySlug(p.slug, p.lang as Lang))].map(p => p.slug);
}

const keys = new Set<string>();
for (const post of staticBlogPosts) {
 const key = `${post.lang}/${post.slug}`;
 if (keys.has(key)) throw new Error(`Duplicate blog entry: ${key}`);
 keys.add(key);
}
