import { getPostBySlug } from "@/lib/db";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }]
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: post.title,
    description: post.excerpt,
    image: `${site.url}${post.image}`,
    datePublished: post.created_at,
    dateModified: post.edited_at,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="pageHero">
        <div className="container">
          <p className="crumb">Blog / {post.title}</p>
          <h1>{post.title}</h1>
          <p className="lead">{post.excerpt}</p>
        </div>
      </section>

      <section className="section">
        <article className="container narrow card prose">
          <div className="postHeroImage" style={{ backgroundImage: `url(${post.image})` }} />
          <div dangerouslySetInnerHTML={{ __html: post.content.replaceAll("\\n", "<br/>") }} />
        </article>
      </section>
    </>
  );
}
