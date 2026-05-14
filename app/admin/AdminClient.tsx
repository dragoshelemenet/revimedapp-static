"use client";

import AdminApplicationsManager from "@/components/AdminApplicationsManager";
import { useMemo, useState } from "react";


function adminCleanIconUrl(value: any) {
  return String(value || "")
    .replace(new RegExp("https?://img\\.icons8\\.com/\\S+", "gi"), "")
    .replace(new RegExp("\\s+", "g"), " ")
    .trim();
}

function adminVisibleTitle(item: any, lang: string) {
  const raw =
    item?.["title_" + lang] ||
    item?.[lang + "_title"] ||
    item?.translations?.[lang]?.title ||
    item?.i18n?.[lang]?.title ||
    item?.title?.[lang] ||
    item?.title ||
    item?.name ||
    item?.label ||
    item?.slug ||
    "Element";

  return adminCleanIconUrl(raw);
}

function adminVisibleDescription(item: any, lang: string) {
  const raw =
    item?.["description_" + lang] ||
    item?.[lang + "_description"] ||
    item?.translations?.[lang]?.description ||
    item?.i18n?.[lang]?.description ||
    item?.description?.[lang] ||
    item?.description ||
    item?.short ||
    item?.excerpt ||
    "";

  return adminCleanIconUrl(raw);
}

function adminIconSrc(item: any) {
  return item?.icon_url || item?.iconUrl || item?.icon || "";
}



function pickLangText(item: any, field: string, lang: string) {
  if (!item) return "";

  const direct = item[field];

  const key1 = field + "_" + lang;
  const key2 = lang + "_" + field;

  const langValue =
    item[key1] ??
    item[key2] ??
    item.translations?.[lang]?.[field] ??
    item.i18n?.[lang]?.[field] ??
    item[field]?.[lang];

  if (typeof langValue === "string" && langValue.trim()) return cleanAdminIconUrl(langValue);
  if (typeof direct === "string" && direct.trim()) return cleanAdminIconUrl(direct);
  if (typeof direct === "object" && direct?.[lang]) return cleanAdminIconUrl(direct[lang]);

  return "";
}

function cleanAdminIconUrl(value: string) {
  return String(value || "")
    .replace(/https?:\/\/img\.icons8\.com\/\S+/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function adminTitle(item: any, lang: string) {
  return (
    pickLangText(item, "title", lang) ||
    pickLangText(item, "name", lang) ||
    pickLangText(item, "label", lang) ||
    item?.slug ||
    "Element"
  );
}

function adminDescription(item: any, lang: string) {
  return (
    pickLangText(item, "description", lang) ||
    pickLangText(item, "short", lang) ||
    pickLangText(item, "excerpt", lang) ||
    ""
  );
}


type Lang = "ro" | "en" | "ru" | "ua";
type Screen =
  | "home"
  | "blog"
  | "blog-list"
  | "blog-form"
  | "services"
  | "services-list"
  | "services-form"
  | "prices"
  | "prices-list"
  | "prices-form"
  | "gallery"
  | "gallery-list"
  | "gallery-form"
  | "contact"
  | "content"
  | "content-list"
  | "content-form"
  | "applications";

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
  group_key: string;
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

type GalleryItem = {
  id: number;
  lang: Lang;
  image: string;
  title: string;
  alt: string;
  position: number;
  published: number;
};

type ContactContent = {
  id: number;
  lang: Lang;
  fixed_phone: string;
  phone: string;
  phone_alt: string;
  email: string;
  address: string;
  hours_week: string;
  hours_weekend: string;
  bus: string;
  trolleybus: string;
  tram: string;
  image_one: string;
  image_two: string;
  map_link: string;
  map_embed: string;
};

type ContentBlock = {
  id: number;
  lang: Lang;
  page_key: string;
  block_key: string;
  title: string;
  text: string;
  image: string;
  position: number;
  published: number;
};

const langOptions: Lang[] = ["ro", "en", "ru", "ua"];

export default function AdminClient({
  loggedIn,
  posts,
  prices = [],
  services = [],
  gallery = [],
  contactContent = null,
  contentBlocks = [],
  selectedLang = "ro"
}: {
  loggedIn: boolean;
  posts: Post[];
  prices?: Price[];
  services?: ServiceAdmin[];
  gallery?: GalleryItem[];
  contactContent?: ContactContent | null;
  contentBlocks?: ContentBlock[];
  selectedLang?: Lang;
}) {
  const [workingLang, setWorkingLang] = useState<Lang>(selectedLang || "ro");
  const adminFlag = {
    ro: "🇷🇴",
    en: "🇬🇧",
    ru: "🇷🇺",
    ua: "🇺🇦"
  }[workingLang];

  const adminLangName = {
    ro: "Română",
    en: "English",
    ru: "Русский",
    ua: "Українська"
  }[workingLang];
  const [screen, setScreen] = useState<Screen>("home");
  const [message, setMessage] = useState("");
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [editingService, setEditingService] = useState<ServiceAdmin | null>(null);
  const [editingPrice, setEditingPrice] = useState<Price | null>(null);
  const [editingGallery, setEditingGallery] = useState<GalleryItem | null>(null);
  const [editingContent, setEditingContent] = useState<ContentBlock | null>(null);

  const screenTitle = useMemo(() => {
    const map: Record<Screen, string> = {
      home: "Dashboard",
      blog: "Blog",
      "blog-list": "Articole blog",
      "blog-form": editingPost ? "Editează articol" : "Adaugă articol",
      services: "Servicii",
      "services-list": "Lista servicii",
      "services-form": editingService ? "Editează serviciu" : "Adaugă serviciu",
      prices: "Prețuri",
      "prices-list": "Lista prețuri",
      "prices-form": editingPrice ? "Editează preț" : "Adaugă preț",
      gallery: "Galerie",
      "gallery-list": "Imagini galerie",
      "gallery-form": editingGallery ? "Editează imagine" : "Adaugă imagine",
      contact: "Contact",
      content: "Texte pagini",
      applications: "Aplicații",
      "content-list": "Texte existente",
      "content-form": editingContent ? "Editează text pagină" : "Adaugă text pagină"
    };
    return map[screen];
  }, [screen, editingPost, editingService, editingPrice, editingGallery, editingContent]);

  async function login(formData: FormData) {
    const res = await fetch("/api/admin/login", { method: "POST", body: formData });
    if (res.ok) location.reload();
    else setMessage("Login sau parolă greșită.");
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    location.reload();
  }

  function changeLang(lang: Lang) {
    window.location.href = `/revimed-login?lang=${lang}`;
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

  async function saveService(formData: FormData) {
    const id = formData.get("id");
    const url = id ? `/api/admin/services/${id}` : "/api/admin/services";
    const method = id ? "PUT" : "POST";
    const res = await fetch(url, { method, body: formData });
    if (res.ok) location.reload();
    else setMessage("Nu s-a salvat serviciul.");
  }

  async function removeService(id: number) {
    if (!confirm("Ștergi serviciul?")) return;
    const res = await fetch(`/api/admin/services/${id}`, { method: "DELETE" });
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

  async function saveGallery(formData: FormData) {
    const id = formData.get("id");
    const url = id ? `/api/admin/gallery/${id}` : "/api/admin/gallery";
    const method = id ? "PUT" : "POST";
    const res = await fetch(url, { method, body: formData });
    if (res.ok) location.reload();
    else setMessage("Nu s-a salvat imaginea.");
  }

  async function removeGallery(id: number) {
    if (!confirm("Ștergi imaginea?")) return;
    const res = await fetch(`/api/admin/gallery/${id}`, { method: "DELETE" });
    if (res.ok) location.reload();
  }

  async function saveContact(formData: FormData) {
    const res = await fetch("/api/admin/contact", { method: "POST", body: formData });
    if (res.ok) location.reload();
    else setMessage("Nu s-a salvat contactul.");
  }

  async function saveContentBlock(formData: FormData) {
    const id = formData.get("id");
    const url = id ? `/api/admin/content-blocks/${id}` : "/api/admin/content-blocks";
    const method = id ? "PUT" : "POST";
    const res = await fetch(url, { method, body: formData });
    if (res.ok) location.reload();
    else setMessage("Nu s-a salvat textul.");
  }

  async function removeContentBlock(id: number) {
    if (!confirm("Ștergi textul?")) return;
    const res = await fetch(`/api/admin/content-blocks/${id}`, { method: "DELETE" });
    if (res.ok) location.reload();
  }

  function openEditPost(post: Post) {
    setEditingPost(post);
    setScreen("blog-form");
  }

  function openNewPost() {
    setEditingPost(null);
    setScreen("blog-form");
  }

  function openEditService(item: ServiceAdmin) {
    setEditingService(item);
    setScreen("services-form");
  }

  function openNewService() {
    setEditingService(null);
    setScreen("services-form");
  }

  function openEditPrice(item: Price) {
    setEditingPrice(item);
    setScreen("prices-form");
  }

  function openNewPrice() {
    setEditingPrice(null);
    setScreen("prices-form");
  }

  function openEditGallery(item: GalleryItem) {
    setEditingGallery(item);
    setScreen("gallery-form");
  }

  function openNewGallery() {
    setEditingGallery(null);
    setScreen("gallery-form");
  }

  function openEditContent(item: ContentBlock) {
    setEditingContent(item);
    setScreen("content-form");
  }

  function openNewContent() {
    setEditingContent(null);
    setScreen("content-form");
  }

  if (!loggedIn) {
    return (
      <section className="adminLoginPage">
        <div className="adminLoginShell">
          <div className="adminLoginBrand">
            <img src="/images/logo.png" alt="REVIMED" />
            <span>Panou securizat</span>
            <h1>Revimed Login</h1>
            <p>Administrare blog, servicii, prețuri, galerie, contact și texte pe limbi.</p>
          </div>

          <form action={login} className="adminLoginCard">
            <h2>Autentificare</h2>
            <label>Utilizator</label>
            <input name="username" defaultValue="revimed1" autoComplete="username" required />
            <label>Parolă</label>
            <input name="password" type="password" autoComplete="current-password" required />
            <button className="blueBtn">Intră în admin</button>
            {message && <p className="adminLoginError">{message}</p>}
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="adminSimplePage">
      <aside className="adminSidebar">
        <div className="adminSideLogo withLogo">
          <a href="/" target="_blank" rel="noopener noreferrer" title="Deschide site-ul principal">
            <img src="/images/logo.png" alt="REVIMED" />
          </a>
          <b>Admin</b>
        </div>

        <button className={screen === "home" ? "active" : ""} onClick={() => setScreen("home")}>Dashboard</button>
        <button className={screen.startsWith("blog") ? "active" : ""} onClick={() => setScreen("blog")}>Blog</button>
        <button className={screen.startsWith("services") ? "active" : ""} onClick={() => setScreen("services")}>Servicii</button>
        <button className={screen.startsWith("prices") ? "active" : ""} onClick={() => setScreen("prices")}>Prețuri</button>
        <button className={screen === "applications" ? "active" : ""} onClick={() => setScreen("applications")}>Aplicații</button>
        <button className={screen.startsWith("gallery") ? "active" : ""} onClick={() => setScreen("gallery")}>Galerie</button>
        <button className={screen === "contact" ? "active" : ""} onClick={() => setScreen("contact")}>Contact</button>
        <button className={screen.startsWith("content") ? "active" : ""} onClick={() => setScreen("content")}>Texte pagini</button>

        <button className="logoutSide" onClick={logout}>Ieșire</button>
      </aside>

      <main className="adminSimpleMain">
        <div className="adminSimpleTop">
          <div>
            <button className="backBtn" onClick={() => setScreen("home")}>← Dashboard</button>
            <h1>{screenTitle}</h1>
          </div>

          <div className="adminLangSelect">
            <span>Limba:</span>
            {langOptions.map((l) => (
              <button key={l} className={workingLang === l ? "active" : ""} onClick={() => changeLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className={`adminEdgeFlag adminEdgeFlag-${workingLang}`} aria-hidden="true">
          <span>{adminFlag}</span>
          <b>{adminLangName}</b>
        </div>

        {message && <div className="adminNotice">{message}</div>}

        {screen === "home" && (
          <div className="adminHomeGrid">
            <button onClick={() => setScreen("blog")}><b>Blog</b><span>{posts.length} articole</span></button>
            <button onClick={() => setScreen("services")}><b>Servicii</b><span>{services.length} servicii</span></button>
            <button onClick={() => setScreen("prices")}><b>Prețuri</b><span>{prices.length} rânduri</span></button>
            <button onClick={() => setScreen("applications")}><b>Aplicații</b><span>Vizibilitate, HTML upload, înlocuire</span></button>
            <button onClick={() => setScreen("gallery")}><b>Galerie</b><span>{gallery.length} imagini</span></button>
            <button onClick={() => setScreen("contact")}><b>Contact</b><span>Telefon, hartă, program</span></button>
            <button onClick={() => setScreen("content")}><b>Texte pagini</b><span>Hero și texte generale</span></button>
          </div>
        )}

        {screen === "blog" && (
          <div className="adminActionGrid">
            <button onClick={() => setScreen("blog-list")}><b>Vezi articole</b><span>Editează sau șterge articole existente</span></button>
            <button onClick={openNewPost}><b>Adaugă articol</b><span>Scrie articol nou pentru limba {workingLang.toUpperCase()}</span></button>
          </div>
        )}

        {screen === "blog-list" && (
          <ListShell title="Articole" onAdd={openNewPost}>
            {posts.map((post) => (
              <ListItem
                key={post.id}
                title={adminTitle(post, workingLang)}
                subtitle={`/${post.slug} · ${post.published ? "publicat" : "ascuns"}`}
                onEdit={() => openEditPost(post)}
                onDelete={() => removePost(post.id)}
              />
            ))}
          </ListShell>
        )}

        {screen === "blog-form" && (
          <FormCard title={editingPost ? "Editează articol" : "Adaugă articol"}>
            <form action={savePost} className="adminFormSimple">
              <input type="hidden" name="id" value={editingPost?.id || ""} />
              <input type="hidden" name="lang" value={workingLang} />
              <Field label="Titlu"><input name="title" defaultValue={editingPost?.title || ""} required /></Field>
              <Field label="Slug URL"><input name="slug" defaultValue={editingPost?.slug || ""} /></Field>
              <Field label="Descriere SEO"><textarea name="excerpt" rows={3} defaultValue={editingPost?.excerpt || ""} required /></Field>
              <Field label="Imagine"><UploadInput name="image" defaultValue={editingPost?.image || "/images/medical-bg.jpg"} placeholder="/images/medical-bg.jpg sau /uploads/photo.jpg" /></Field>
              <Field label="Cuvinte cheie"><input name="keywords" defaultValue={editingPost?.keywords || ""} /></Field>
              <Field label="Conținut"><textarea name="content" rows={14} defaultValue={editingPost?.content || ""} required /></Field>
              <Check defaultChecked={editingPost ? Boolean(editingPost.published) : true} />
              <FormActions back={() => setScreen("blog-list")} />
            </form>
          </FormCard>
        )}

        {screen === "services" && (
          <div className="adminActionGrid">
            <button onClick={() => setScreen("services-list")}><b>Vezi servicii</b><span>Editează serviciile și paginile lor</span></button>
            <button onClick={openNewService}><b>Adaugă serviciu</b><span>Creează o pagină nouă de serviciu</span></button>
          </div>
        )}

        {screen === "services-list" && (
          <ListShell title="Servicii" onAdd={openNewService}>
            {services.map((item) => (
              <ListItem
                key={item.id}
                title={`$ ${adminTitle(item, workingLang)}`}
                subtitle={`/${item.slug} · ordine ${item.position} · ${item.published ? "publicat" : "ascuns"}`}
                onEdit={() => openEditService(item)}
                onDelete={() => removeService(item.id)}
              />
            ))}
          </ListShell>
        )}

        {screen === "services-form" && (
          <FormCard title={editingService ? "Editează serviciu" : "Adaugă serviciu"}>
            <form action={saveService} className="adminFormSimple">
              <input type="hidden" name="id" value={editingService?.id || ""} />
              <input type="hidden" name="lang" value={workingLang} />
              <Field label="Titlu"><input name="title" defaultValue={editingService?.title || ""} required /></Field>
              <Field label="Slug URL"><input name="slug" defaultValue={editingService?.slug || ""} /></Field>
              <Field label="Icon URL/path sau upload"><UploadInput name="icon" defaultValue={editingService?.icon || "https://img.icons8.com/color/96/medical-doctor.png"} placeholder="https://img.icons8.com/color/96/brain.png sau /uploads/icon.png" /></Field>
              <Field label="Imagine"><UploadInput name="image" defaultValue={editingService?.image || "/images/medical-bg.jpg"} placeholder="/images/medical-bg.jpg sau /uploads/photo.jpg" /></Field>
              <Field label="Descriere scurtă"><textarea name="short_desc" rows={3} defaultValue={editingService?.short_desc || ""} required /></Field>
              <Field label="Text complet pagină"><textarea name="full_content" rows={14} defaultValue={editingService?.full_content || ""} required /></Field>
              <Field label="SEO keywords"><input name="keywords" defaultValue={editingService?.keywords || ""} /></Field>
              <Field label="Ordine"><input type="number" name="position" defaultValue={editingService?.position || 0} /></Field>
              <Check defaultChecked={editingService ? Boolean(editingService.published) : true} />
              <FormActions back={() => setScreen("services-list")} />
            </form>
          </FormCard>
        )}

        {screen === "prices" && (
          <div className="adminActionGrid">
            <button onClick={() => setScreen("prices-list")}><b>Vezi prețuri</b><span>Editează lista de prețuri</span></button>
            <button onClick={openNewPrice}><b>Adaugă preț</b><span>Adaugă un rând nou de preț</span></button>
          </div>
        )}

        {screen === "prices-list" && (
          <ListShell title="Prețuri" onAdd={openNewPrice}>
            {prices.map((item) => (
              <ListItem
                key={item.id}
                title={`${item.category}: ${item.service}`}
                subtitle={`${item.price} · group_key: ${item.group_key || "-"} · ${item.published ? "publicat" : "ascuns"}`}
                onEdit={() => openEditPrice(item)}
                onDelete={() => removePrice(item.id)}
              />
            ))}
          </ListShell>
        )}

        {screen === "prices-form" && (
          <FormCard title={editingPrice ? "Editează preț" : "Adaugă preț"}>
            <form action={savePrice} className="adminFormSimple">
              <input type="hidden" name="id" value={editingPrice?.id || ""} />
              <input type="hidden" name="lang" value={workingLang} />
              <Field label="Group key — același key sincronizează prețul numeric în toate limbile">
                <input name="group_key" defaultValue={editingPrice?.group_key || `price_${Date.now()}`} />
              </Field>
              <Field label="Categorie"><input name="category" defaultValue={editingPrice?.category || ""} required /></Field>
              <Field label="Serviciu"><input name="service" defaultValue={editingPrice?.service || ""} required /></Field>
              <Field label="Preț"><input name="price" defaultValue={editingPrice?.price || ""} required /></Field>
              <Field label="Notă"><input name="note" defaultValue={editingPrice?.note || ""} /></Field>
              <Field label="Ordine"><input type="number" name="position" defaultValue={editingPrice?.position || 0} /></Field>
              <Check defaultChecked={editingPrice ? Boolean(editingPrice.published) : true} />
              <FormActions back={() => setScreen("prices-list")} />
            </form>
          </FormCard>
        )}

        {screen === "gallery" && (
          <div className="adminActionGrid">
            <button onClick={() => setScreen("gallery-list")}><b>Vezi imagini</b><span>Editează textele și imaginile din galerie</span></button>
            <button onClick={openNewGallery}><b>Adaugă imagine</b><span>Adaugă poză nouă în galerie</span></button>
          </div>
        )}

        {screen === "gallery-list" && (
          <ListShell title="Galerie" onAdd={openNewGallery}>
            {gallery.map((item) => (
              <ListItem
                key={item.id}
                title={adminTitle(item, workingLang)}
                subtitle={`${item.image} · ordine ${item.position} · ${item.published ? "publicat" : "ascuns"}`}
                onEdit={() => openEditGallery(item)}
                onDelete={() => removeGallery(item.id)}
                image={item.image}
              />
            ))}
          </ListShell>
        )}

        {screen === "gallery-form" && (
          <FormCard title={editingGallery ? "Editează imagine" : "Adaugă imagine"}>
            <form action={saveGallery} className="adminFormSimple">
              <input type="hidden" name="id" value={editingGallery?.id || ""} />
              <input type="hidden" name="lang" value={workingLang} />
              <Field label="Imagine"><UploadInput name="image" defaultValue={editingGallery?.image || "/images/2pic.jpg"} placeholder="/images/2pic.jpg sau /uploads/photo.jpg" /></Field>
              <Field label="Text pe poză"><input name="title" defaultValue={editingGallery?.title || ""} required /></Field>
              <Field label="Alt SEO"><input name="alt" defaultValue={editingGallery?.alt || ""} /></Field>
              <Field label="Ordine"><input type="number" name="position" defaultValue={editingGallery?.position || 0} /></Field>
              <Check defaultChecked={editingGallery ? Boolean(editingGallery.published) : true} />
              <FormActions back={() => setScreen("gallery-list")} />
            </form>
          </FormCard>
        )}


        {screen === "applications" && (
          <AdminApplicationsManager workingLang={workingLang} />
        )}

        {screen === "contact" && (
          <FormCard title="Contact / Hartă / Transport">
            <form action={saveContact} className="adminFormSimple">
              <input type="hidden" name="lang" value={workingLang} />
              <div className="adminTwoCols">
                <Field label="Fix"><input name="fixed_phone" defaultValue={contactContent?.fixed_phone || "(022) 60-50-60"} /></Field>
                <Field label="Telefon"><input name="phone" defaultValue={contactContent?.phone || "(+373) 069773816"} /></Field>
                <Field label="Telefon alternativ"><input name="phone_alt" defaultValue={contactContent?.phone_alt || "(+373) 079422908"} /></Field>
                <Field label="Email"><input name="email" defaultValue={contactContent?.email || "doctor-revenco@ya.ru"} /></Field>
              </div>
              <Field label="Adresă"><input name="address" defaultValue={contactContent?.address || ""} /></Field>
              <div className="adminTwoCols">
                <Field label="Program luni-vineri"><input name="hours_week" defaultValue={contactContent?.hours_week || ""} /></Field>
                <Field label="Program weekend"><input name="hours_weekend" defaultValue={contactContent?.hours_weekend || ""} /></Field>
                <Field label="Autobuz"><input name="bus" defaultValue={contactContent?.bus || ""} /></Field>
                <Field label="Troleibuz"><input name="trolleybus" defaultValue={contactContent?.trolleybus || ""} /></Field>
                <Field label="Tramvai"><input name="tram" defaultValue={contactContent?.tram || ""} /></Field>
                <Field label="Poza 1"><UploadInput name="image_one" defaultValue={contactContent?.image_one || "/images/6.jpg"} placeholder="/images/6.jpg sau /uploads/photo.jpg" /></Field>
                <Field label="Poza 2"><UploadInput name="image_two" defaultValue={contactContent?.image_two || "/images/1.jpg"} placeholder="/images/1.jpg sau /uploads/photo.jpg" /></Field>
              </div>
              <Field label="Google Maps link"><textarea name="map_link" rows={3} defaultValue={contactContent?.map_link || ""} /></Field>
              <Field label="Google Maps embed src"><textarea name="map_embed" rows={4} defaultValue={contactContent?.map_embed || ""} /></Field>
              <FormActions back={() => setScreen("home")} />
            </form>
          </FormCard>
        )}

        {screen === "content" && (
          <div className="adminActionGrid">
            <button onClick={() => setScreen("content-list")}><b>Vezi texte</b><span>Hero și texte existente</span></button>
            <button onClick={openNewContent}><b>Adaugă text</b><span>Adaugă text pentru o pagină</span></button>
          </div>
        )}

        {screen === "content-list" && (
          <ListShell title="Texte pagini" onAdd={openNewContent}>
            {contentBlocks.map((item) => (
              <ListItem
                key={item.id}
                title={`${item.page_key} / ${item.block_key}`}
                subtitle={`${adminTitle(item, workingLang)} · ${item.published ? "publicat" : "ascuns"}`}
                onEdit={() => openEditContent(item)}
                onDelete={() => removeContentBlock(item.id)}
              />
            ))}
          </ListShell>
        )}

        {screen === "content-form" && (
          <FormCard title={editingContent ? "Editează text" : "Adaugă text"}>
            <form action={saveContentBlock} className="adminFormSimple">
              <input type="hidden" name="id" value={editingContent?.id || ""} />
              <input type="hidden" name="lang" value={workingLang} />
              <Field label="Pagina">
                <select name="page_key" defaultValue={editingContent?.page_key || "contact"}>
                  <option value="contact">Contact</option>
                  <option value="galerie">Galerie</option>
                  <option value="preturi">Prețuri</option>
                  <option value="servicii">Servicii</option>
                  <option value="aplicatii">Aplicații</option>
                  <option value="blog">Blog</option>
                  <option value="despre-noi">Despre Noi</option>
                </select>
              </Field>
              <Field label="Block key"><input name="block_key" defaultValue={editingContent?.block_key || "hero"} /></Field>
              <Field label="Titlu"><input name="title" defaultValue={editingContent?.title || ""} /></Field>
              <Field label="Text"><textarea name="text" rows={6} defaultValue={editingContent?.text || ""} /></Field>
              <Field label="Imagine"><UploadInput name="image" defaultValue={editingContent?.image || ""} placeholder="/images/medical-bg.jpg sau /uploads/photo.jpg" /></Field>
              <Field label="Ordine"><input type="number" name="position" defaultValue={editingContent?.position || 0} /></Field>
              <Check defaultChecked={editingContent ? Boolean(editingContent.published) : true} />
              <FormActions back={() => setScreen("content-list")} />
            </form>
          </FormCard>
        )}
      </main>
    </section>
  );
}


function UploadInput({
  name,
  defaultValue,
  placeholder,
  accept = "image/*"
}: {
  name: string;
  defaultValue?: string;
  placeholder?: string;
  accept?: string;
}) {
  const [value, setValue] = useState(defaultValue || "");
  const [busy, setBusy] = useState(false);

  async function upload(file: File) {
    setBusy(true);
    const data = new FormData();
    data.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: data });
    const json = await res.json();
    setBusy(false);

    if (json?.url) setValue(json.url);
    else alert(json?.error || "Upload failed");
  }

  return (
    <div
      className="uploadInput"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file) upload(file);
      }}
    >
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />

      <label className="uploadButton">
        {busy ? "Uploading..." : "Upload / drag-drop"}
        <input
          type="file"
          accept={accept}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) upload(file);
          }}
        />
      </label>

      {value && (
        <div className="uploadPreview">
          <img src={value} alt="" />
          <small>{value}</small>
        </div>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="adminField">
      <span>{label}</span>
      {children}
    </label>
  );
}

function Check({ defaultChecked }: { defaultChecked: boolean }) {
  return (
    <label className="adminCheck">
      <input type="checkbox" name="published" defaultChecked={defaultChecked} />
      Publicat
    </label>
  );
}

function FormActions({ back }: { back: () => void }) {
  return (
    <div className="adminFormActions">
      <button className="blueBtn">Salvează</button>
      <button type="button" className="softBtn" onClick={back}>Înapoi</button>
    </div>
  );
}

function FormCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="adminSimpleCard">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function ListShell({ title, onAdd, children }: { title: string; onAdd: () => void; children: React.ReactNode }) {
  return (
    <section className="adminSimpleCard">
      <div className="adminListHead">
        <h2>{title}</h2>
        <button className="blueBtn" onClick={onAdd}>Adaugă</button>
      </div>
      <div className="adminSimpleList">{children}</div>
    </section>
  );
}

function ListItem({
  title,
  subtitle,
  onEdit,
  onDelete,
  image
}: {
  title: string;
  subtitle: string;
  onEdit: () => void;
  onDelete: () => void;
  image?: string;
}) {
  return (
    <article className="adminSimpleItem">
      {image && <img src={image} alt="" />}
      <div>
        <b>{title}</b>
        <span>{subtitle}</span>
      </div>
      <div className="adminItemActions">
        <button onClick={onEdit}>Edit</button>
        <button className="danger" onClick={onDelete}>Șterge</button>
      </div>
    </article>
  );
}
