import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/db";
import { isLang, type Lang } from "@/lib/i18n";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ lang: string; slug: string }> };

export default async function BlogPostLangPage({ params }: Props) {
  const { lang: raw, slug } = await params;
  if (!isLang(raw) || raw === "ro") notFound();

  const post = getPostBySlug(slug, raw as Lang);
  if (!post) notFound();

  return (
    <>
      <section className="pageHero">
        <div className="rmShell">
          <p className="crumb">Blog / {post.title}</p>
          <h1>{post.title}</h1>
          <p className="lead">{post.excerpt}</p>
        </div>
      </section>

      <section className="rmSection">
        <article className="rmShell adminCard prose">
          <div className="postHeroImage" style={{ backgroundImage: `url(${post.image})` }} />
          <div dangerouslySetInnerHTML={{ __html: post.content.replaceAll("\\n", "<br/>") }} />
        </article>
      </section>
    </>
  );
}
