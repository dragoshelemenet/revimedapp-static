import Link from "next/link";
import type { Metadata } from "next";
import { getPublishedPosts } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog medical",
  description: "Articole medicale Revimed PLUS+ despre neurologie, reabilitare, fizioterapie, recuperare și sănătatea sistemului nervos."
};

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <section className="pageHero">
        <div className="container">
          <p className="crumb">Acasă / Blog</p>
          <h1>Blog medical</h1>
          <p className="lead">Articole, noutăți și materiale educaționale Revimed PLUS+.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid3">
          {posts.length === 0 && (
            <div className="card">
              <h2>Încă nu există articole</h2>
              <p>Intră în /admin și adaugă primul articol.</p>
            </div>
          )}

          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} className="card blogCard" key={post.id}>
              <div className="blogImage" style={{ backgroundImage: `url(${post.image})` }} />
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <b>Citește →</b>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
