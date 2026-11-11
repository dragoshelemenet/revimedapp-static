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
 return { ...metadata, openGraph: { ...metadata.openGraph, type: "article" as const } };
}
