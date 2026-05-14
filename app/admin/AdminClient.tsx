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
  category: string;
  service: string;
  price: string;
  note: string;
  position: number;
  published: number;
};

type ServiceAdmin = {
  id: number;
  title: string;
  slug: string;
  icon: string;
  image: string;
  short_desc: string;
  full_content: string;
  keywords: string;
  position: number;
  published: number;
};

export default function AdminClient({
  loggedIn,
  posts,
  prices = [],
  services = []
}: {
  loggedIn: boolean;
  posts: Post[];
  prices?: Price[];
  services?: ServiceAdmin[];
  selectedLang?: "ro" | "en" | "ru" | "ua";
}) {
  const [workingLang, setWorkingLang] = useState<"ro" | "en" | "ru" | "ua">(selectedLang);
  const [tab, setTab] = useState<"services" | "prices" | "blog">("services");
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [editingPrice, setEditingPrice] = useState<Price | null>(null);
  const [editingService, setEditingService] = useState<ServiceAdmin | null>(null);
  const [message, setMessage] = useState("");

  async function login(formData: FormData) {
    const res = await fetch("/api/admin/login", { method: "POST", body: formData });
    if (res.ok) location.reload();
    else setMessage("Date greșite.");
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    location.reload();
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
    if (!confirm("Ștergi rândul de preț?")) return;
    const res = await fetch(`/api/admin/prices/${id}`, { method: "DELETE" });
    if (res.ok) location.reload();
  }

  async function saveService(formData: FormData) {
    const id = formData.get("id");
    const url = id ? `/api/admin/services/${id}` : "/api/admin/services";
    const method = id ? "PUT" : "POST";
    const res = await fetch(url, { method, body: formData });
    if (res.ok) location.reload();
    else setMessage("Nu s-a salvat serviciul.");
  }

  async function removeService(id: number) {
    if (!confirm("Ștergi serviciul? Pagina lui nu va mai apărea.")) return;
    const res = await fetch(`/api/admin/services/${id}`, { method: "DELETE" });
    if (res.ok) location.reload();
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

        <div className="adminLangPicker">
          <b>Alege limba cu care lucrezi:</b>
          {(["ro","en","ru","ua"] as const).map((l) => (
            <button
              key={l}
              className={workingLang === l ? "active" : ""}
              type="button"
              onClick={() => { window.location.href = `/revimed-login?lang=${l}`; }}
            >
              {l.toUpperCase()}
            </button>
          ))}
          <small>Blog/servicii/text prețuri se editează pe limba aleasă. Prețul numeric se sincronizează pe toate limbile prin group_key.</small>
        </div>

        <div className="adminTabs">
          <button className={tab === "services" ? "active" : ""} onClick={() => setTab("services")}>Servicii</button>
          <button className={tab === "prices" ? "active" : ""} onClick={() => setTab("prices")}>Prețuri</button>
          <button className={tab === "blog" ? "active" : ""} onClick={() => setTab("blog")}>Blog</button>
        </div>

        {tab === "services" && (
          <div className="adminColumns">
            <div className="adminCard">
              <h2>{editingService ? "Editează serviciu" : "Adaugă serviciu"}</h2>
              <form action={saveService} className="adminForm">
                <input type="hidden" name="id" value={editingService?.id || ""} />
                <input type="hidden" name="lang" value={workingLang} />

                <label>Titlu serviciu</label>
                <input name="title" defaultValue={editingService?.title || ""} required />

                <label>Slug URL</label>
                <input name="slug" defaultValue={editingService?.slug || ""} placeholder="se generează automat dacă lași gol" />

                <label>Icon</label>
                <input name="icon" defaultValue={editingService?.icon || "⚕️"} />

                <label>Imagine</label>
                <input name="image" defaultValue={editingService?.image || "/images/medical-bg.jpg"} />

                <label>Descriere scurtă</label>
                <textarea name="short_desc" rows={3} defaultValue={editingService?.short_desc || ""} required />

                <label>Text complet pagină serviciu</label>
                <textarea name="full_content" rows={12} defaultValue={editingService?.full_content || ""} required />

                <label>Cuvinte cheie SEO</label>
                <input name="keywords" defaultValue={editingService?.keywords || ""} />

                <label>Ordine</label>
                <input name="position" type="number" defaultValue={editingService?.position || 0} />

                <label className="checkLine">
                  <input type="checkbox" name="published" defaultChecked={editingService ? Boolean(editingService.published) : true} />
                  Publicat
                </label>

                <button className="blueBtn">{editingService ? "Salvează serviciul" : "Adaugă serviciu"}</button>
                {editingService && <button type="button" className="softBtn" onClick={() => setEditingService(null)}>Anulează</button>}
              </form>
            </div>

            <div className="adminCard">
              <h2>Servicii existente</h2>
              <div className="adminList">
                {services.map((service) => (
                  <div className="adminItem" key={service.id}>
                    <b>{service.icon} {service.title}</b>
                    <small>/{service.slug} · ordine {service.position} · {service.published ? "publicat" : "ascuns"}</small>
                    <button onClick={() => setEditingService(service)}>Editare</button>
                    <button onClick={() => removeService(service.id)}>Șterge</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "prices" && (
          <div className="adminColumns">
            <div className="adminCard">
              <h2>{editingPrice ? "Editează preț" : "Adaugă preț"}</h2>
              <form action={savePrice} className="adminForm">
                <input type="hidden" name="id" value={editingPrice?.id || ""} />
                <input type="hidden" name="lang" value={workingLang} />

                <label>Cheie comună preț / group_key</label>
                <input name="group_key" defaultValue={editingPrice?.group_key || ""} placeholder="ex: neuro_1. Aceeași cheie = același preț în toate limbile" />

                <label>Categorie</label>
                <input name="category" defaultValue={editingPrice?.category || ""} placeholder="ex: Consultații Neurologice" required />

                <label>Serviciu / rând în tabel</label>
                <input name="service" defaultValue={editingPrice?.service || ""} required />

                <label>Preț</label>
                <input name="price" defaultValue={editingPrice?.price || ""} required />

                <label>Notă / descriere</label>
                <input name="note" defaultValue={editingPrice?.note || ""} />

                <label>Ordine</label>
                <input name="position" type="number" defaultValue={editingPrice?.position || 0} />

                <label className="checkLine">
                  <input type="checkbox" name="published" defaultChecked={editingPrice ? Boolean(editingPrice.published) : true} />
                  Publicat
                </label>

                <button className="blueBtn">{editingPrice ? "Salvează prețul" : "Adaugă preț"}</button>
                {editingPrice && <button type="button" className="softBtn" onClick={() => setEditingPrice(null)}>Anulează</button>}
              </form>
            </div>

            <div className="adminCard">
              <h2>Tabel prețuri</h2>
              <div className="adminList">
                {prices.map((price) => (
                  <div className="adminItem" key={price.id}>
                    <b>{price.category}: {price.service}</b>
                    <small>{price.price} · ordine {price.position} · {price.published ? "publicat" : "ascuns"}</small>
                    {price.note && <small>{price.note}</small>}
                    <button onClick={() => setEditingPrice(price)}>Editare</button>
                    <button onClick={() => removePrice(price.id)}>Șterge</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "blog" && (
          <div className="adminColumns">
            <div className="adminCard">
              <h2>{editingPost ? "Editează articol" : "Adaugă articol"}</h2>
              <form action={savePost} className="adminForm">
                <input type="hidden" name="id" value={editingPost?.id || ""} />
                <input type="hidden" name="lang" value={workingLang} />

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
            </div>

            <div className="adminCard">
              <h2>Articole</h2>
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
          </div>
        )}

        {message && <p>{message}</p>}
      </div>
    </section>
  );
}
