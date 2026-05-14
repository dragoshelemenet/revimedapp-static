import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedPosts } from "@/lib/db";
import { isLang, t, withLang, type Lang } from "@/lib/i18n";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ lang: string }> };

export default async function BlogLangPage({ params }: Props) {
  const { lang: raw } = await params;
  if (!isLang(raw) || raw === "ro") notFound();

  const lang = raw as Lang;
  const text = t(lang);
  const posts = getPublishedPosts(lang);

  return (
    <>
      <section className="pageHero">
        <div className="rmShell">
          <p className="crumb">{text.home} / {text.blog}</p>
          <h1>{text.blog}</h1>
          <p className="lead">{text.languageVersion}: {raw.toUpperCase()}</p>
        </div>
      </section>

      <section className="rmSection">
        <div className="rmShell grid3">
          {posts.map((post) => (
            <Link href={withLang(`/blog/${post.slug}`, lang)} className="card blogCard" key={post.id}>
              <div className="blogImage" style={{ backgroundImage: `url(${post.image})` }} />
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <b>{text.readMore}</b>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
