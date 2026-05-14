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

type Price = {
  id: number;
  service: string;
  price: string;
  note: string;
  position: number;
  published: number;
};

export default function AdminClient({
  loggedIn,
  posts,
  prices = []
}: {
  loggedIn: boolean;
  posts: Post[];
  prices?: Price[];
}) {
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [editingPrice, setEditingPrice] = useState<Price | null>(null);
  const [message, setMessage] = useState("");

  async function login(formData: FormData) {
    const res = await fetch("/api/admin/login", { method: "POST", body: formData });
    if (res.ok) location.reload();
    else setMessage("Date greșite.");
  }

  async function savePost(formData: FormData) {
    const id = formData.get("id");
    const url = id ? `/api/admin/posts/${id}` : "/api/admin/posts";
    const method = id ? "PUT" : "POST";
    const res = await fetch(url, { method, body: formData });
    if (res.ok) location.reload();
    else setMessage("Nu s-a salvat articolul.");
  }

  async function removePost(id: number) {
    if (!confirm("Ștergi articolul?")) return;
    const res = await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
    if (res.ok) location.reload();
  }

  async function savePrice(formData: FormData) {
    const id = formData.get("id");
    const url = id ? `/api/admin/prices/${id}` : "/api/admin/prices";
    const method = id ? "PUT" : "POST";
    const res = await fetch(url, { method, body: formData });
    if (res.ok) location.reload();
    else setMessage("Nu s-a salvat prețul.");
  }

  async function removePrice(id: number) {
    if (!confirm("Ștergi prețul?")) return;
    const res = await fetch(`/api/admin/prices/${id}`, { method: "DELETE" });
    if (res.ok) location.reload();
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    location.reload();
  }

  if (!loggedIn) {
    return (
      <section className="adminBg">
        <div className="rmShell adminLogin">
          <form action={login} className="adminCard">
            <h1>Revimed Login</h1>
            <label>Utilizator</label>
            <input name="username" required />
            <label>Parolă</label>
            <input name="password" type="password" required />
            <button className="blueBtn">Intră</button>
            {message && <p className="dangerText">{message}</p>}
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="adminBg">
      <div className="rmShell adminPanel">
        <div className="adminTop">
          <h1>Panou Revimed</h1>
          <button className="softBtn" onClick={logout}>Ieșire</button>
        </div>

        <div className="adminColumns">
          <div className="adminCard">
            <h2>Blog</h2>
            <form action={savePost} className="adminForm">
              <input type="hidden" name="id" value={editingPost?.id || ""} />
              <label>Titlu</label>
              <input name="title" defaultValue={editingPost?.title || ""} required />
              <label>Slug URL</label>
              <input name="slug" defaultValue={editingPost?.slug || ""} />
              <label>Descriere SEO</label>
              <textarea name="excerpt" defaultValue={editingPost?.excerpt || ""} required rows={3} />
              <label>Imagine</label>
              <input name="image" defaultValue={editingPost?.image || "/images/medical-bg.jpg"} required />
              <label>Cuvinte cheie</label>
              <input name="keywords" defaultValue={editingPost?.keywords || ""} />
              <label>Conținut</label>
              <textarea name="content" defaultValue={editingPost?.content || ""} required rows={10} />
              <label className="checkLine">
                <input type="checkbox" name="published" defaultChecked={editingPost ? Boolean(editingPost.published) : true} />
                Publicat
              </label>
              <button className="blueBtn">{editingPost ? "Salvează articolul" : "Adaugă articol"}</button>
              {editingPost && <button className="softBtn" type="button" onClick={() => setEditingPost(null)}>Anulează</button>}
            </form>

            <div className="adminList">
              {posts.map((post) => (
                <div className="adminItem" key={post.id}>
                  <b>{post.title}</b>
                  <small>/{post.slug}</small>
                  <button onClick={() => setEditingPost(post)}>Editare</button>
                  <button onClick={() => removePost(post.id)}>Șterge</button>
                </div>
              ))}
            </div>
          </div>

          <div className="adminCard">
            <h2>Prețuri</h2>
            <form action={savePrice} className="adminForm">
              <input type="hidden" name="id" value={editingPrice?.id || ""} />
              <label>Serviciu</label>
              <input name="service" defaultValue={editingPrice?.service || ""} required />
              <label>Preț</label>
              <input name="price" defaultValue={editingPrice?.price || ""} required />
              <label>Notă</label>
              <input name="note" defaultValue={editingPrice?.note || ""} />
              <label>Ordine</label>
              <input name="position" type="number" defaultValue={editingPrice?.position || 0} />
              <label className="checkLine">
                <input type="checkbox" name="published" defaultChecked={editingPrice ? Boolean(editingPrice.published) : true} />
                Publicat
              </label>
              <button className="blueBtn">{editingPrice ? "Salvează prețul" : "Adaugă preț"}</button>
              {editingPrice && <button className="softBtn" type="button" onClick={() => setEditingPrice(null)}>Anulează</button>}
            </form>

            <div className="adminList">
              {prices.map((price) => (
                <div className="adminItem" key={price.id}>
                  <b>{price.service}</b>
                  <small>{price.price}</small>
                  <button onClick={() => setEditingPrice(price)}>Editare</button>
                  <button onClick={() => removePrice(price.id)}>Șterge</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {message && <p>{message}</p>}
      </div>
    </section>
  );
}
