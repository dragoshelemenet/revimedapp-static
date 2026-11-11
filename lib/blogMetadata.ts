import { getTranslatedBlogSlug } from "@/lib/blogSlugTranslations";
import { absoluteUrl } from "@/lib/seo";
import { withLang } from "@/lib/i18n";
import { notFound } from "next/navigation";
import type { Lang } from "@/lib/i18n";
import { makeMetadata } from "@/lib/seo";
import { getStaticPostBySlug } from "@/lib/staticBlogPosts";

export function blogMetadata(lang: Lang, slug: string) {
 const post = getStaticPostBySlug(slug, lang);
 if (!post) notFound();
 // Posts have independent translated slugs; do not invent translation pairs.
 const metadata = makeMetadata({ lang, path: `/blog/${post.slug}`, title: post.title,
  description: post.excerpt, image: post.image, localized: false });
 const languages: Record<string, string> = {};
 for (const target of ["ro", "en", "ru", "ua"] as const) {
  const translated = getStaticPostBySlug(getTranslatedBlogSlug(post.slug, target), target);
  if (translated) languages[target === "ua" ? "uk" : target] = absoluteUrl(withLang(`/blog/${translated.slug}/`, target));
 }
 if (languages.ro) languages["x-default"] = languages.ro;
 return { ...metadata, alternates: { ...metadata.alternates, languages }, openGraph: { ...metadata.openGraph, type: "article" as const } };
}
