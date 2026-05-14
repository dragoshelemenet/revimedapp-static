"use client";

import { useState } from "react";

type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  keywords: string;
  published: number;
};

export default function AdminClient({ loggedIn, posts }: { loggedIn: boolean; posts: Post[] }) {
  const [isLogged, setIsLogged] = useState(loggedIn);
  const [items, setItems] = useState(posts);
  const [editing, setEditing] = useState<Post | null>(null);
  const [message, setMessage] = useState("");

  async function login(formData: FormData) {
    const res = await fetch("/api/admin/login", { method: "POST", body: formData });
    if (res.ok) location.reload();
    else setMessage("Date greșite.");
  }

  async function save(formData: FormData) {
    const id = formData.get("id");
    const url = id ? `/api/admin/posts/${id}` : "/api/admin/posts";
    const method = id ? "PUT" : "POST";
    const res = await fetch(url, { method, body: formData });
    if (res.ok) location.reload();
    else setMessage("Nu s-a salvat.");
  }

  async function remove(id: number) {
    if (!confirm("Ștergi articolul?")) return;
    const res = await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
    if (res.ok) location.reload();
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    location.reload();
  }

  if (!isLogged) {
    return (
      <section className="section adminBg">
        <div className="container narrow">
          <form action={login} className="card adminForm">
            <h1>Admin Revimed</h1>
            <label>Utilizator</label>
            <input name="username" required />
            <label>Parolă</label>
            <input name="password" type="password" required />
            <button className="btn">Intră</button>
            {message && <p className="dangerText">{message}</p>}
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="section adminBg">
      <div className="container adminGrid">
        <div className="card">
          <div className="adminTop">
            <h1>Blog Admin</h1>
            <button className="btn secondary" onClick={logout}>Ieșire</button>
          </div>

          <form action={save} className="adminForm">
            <input type="hidden" name="id" value={editing?.id || ""} />
            <label>Titlu</label>
            <input name="title" defaultValue={editing?.title || ""} required />

            <label>Slug URL</label>
            <input name="slug" defaultValue={editing?.slug || ""} placeholder="se generează automat dacă lași gol" />

            <label>Descriere SEO / extras</label>
            <textarea name="excerpt" defaultValue={editing?.excerpt || ""} required rows={3} />

            <label>Imagine URL</label>
            <input name="image" defaultValue={editing?.image || "/images/blog-default.jpg"} required />

            <label>Cuvinte cheie SEO</label>
            <input name="keywords" defaultValue={editing?.keywords || ""} placeholder="neurologie, reabilitare, dureri de spate" />

            <label>Conținut articol</label>
            <textarea name="content" defaultValue={editing?.content || ""} required rows={12} />

            <label className="checkLine">
              <input type="checkbox" name="published" defaultChecked={editing ? Boolean(editing.published) : true} />
              Publicat
            </label>

            <button className="btn">{editing ? "Salvează articolul" : "Adaugă articol"}</button>
            {editing && <button className="btn secondary" type="button" onClick={() => setEditing(null)}>Anulează</button>}
            {message && <p>{message}</p>}
          </form>
        </div>

        <div className="card">
          <h2>Articole</h2>
          {items.map((post) => (
            <div className="adminPost" key={post.id}>
              <b>{post.title}</b>
              <small>/{post.slug}</small>
              <div>
                <button className="miniBtn" onClick={() => setEditing(post)}>Editare</button>
                <button className="miniBtn dangerBtn" onClick={() => remove(post.id)}>Șterge</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
