"use client";

import { useEffect, useState } from "react";

type Lang = "ro" | "en" | "ru" | "ua";

type ManagedApp = {
 id: string;
 slug: string;
 title: Record<Lang, string>;
 description: Record<Lang, string>;
 tag: Record<Lang, string>;
 href: string;
 image: string;
 visible: boolean;
 kind: "react" | "html";
 htmlPath: string;
 position: number;
};

function emptyTitles() {
 return { ro: "", en: "", ru: "", ua: "" };
}

export default function AdminApplicationsManager({ workingLang }: { workingLang: Lang }) {
 const [apps, setApps] = useState<ManagedApp[]>([]);
 const [mode, setMode] = useState<"list" | "add" | "edit">("list");
 const [editing, setEditing] = useState<ManagedApp | null>(null);
 const [message, setMessage] = useState("");
 const [uploadBusy, setUploadBusy] = useState(false);
 const [newFile, setNewFile] = useState<File | null>(null);
 const [replaceFile, setReplaceFile] = useState<File | null>(null);
 const [form, setForm] = useState({
  slug: "",
  image: "/images/medical-bg.jpg",
  title: emptyTitles(),
  description: emptyTitles(),
  tag: { ro: "Aplicație", en: "App", ru: "Приложение", ua: "Застосунок" }
 });

 async function loadApps() {
  const res = await fetch("/api/admin/apps", { cache: "no-store" });
  const json = await res.json();
  if (json.ok) setApps(json.apps);
 }

 useEffect(() => {
  loadApps();
 }, []);

 function setLangField(
  field: "title" | "description" | "tag",
  lang: Lang,
  value: string
 ) {
  setForm((prev) => ({
   ...prev,
   [field]: {
    ...prev[field],
    [lang]: value
   }
  }));
 }

 function startAdd() {
  setMode("add");
  setEditing(null);
  setNewFile(null);
  setMessage("");
  setForm({
   slug: "",
   image: "/images/medical-bg.jpg",
   title: emptyTitles(),
   description: emptyTitles(),
   tag: { ro: "Aplicație", en: "App", ru: "Приложение", ua: "Застосунок" }
  });
 }

 function startEdit(app: ManagedApp) {
  setMode("edit");
  setEditing(app);
  setReplaceFile(null);
  setMessage("");
  setForm({
   slug: app.slug,
   image: app.image,
   title: app.title,
   description: app.description,
   tag: app.tag
  });
 }

 async function saveSettings(app: ManagedApp, changes?: Partial<ManagedApp>) {
  const payload = {
   id: app.id,
   visible: changes?.visible ?? app.visible,
   position: changes?.position ?? app.position,
   image: changes?.image ?? app.image,
   title: changes?.title ?? app.title,
   description: changes?.description ?? app.description,
   tag: changes?.tag ?? app.tag
  };

  const res = await fetch("/api/admin/apps", {
   method: "PUT",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify(payload)
  });

  const json = await res.json();

  if (json.ok) {
   setMessage("Setările aplicației au fost salvate.");
   await loadApps();
  } else {
   setMessage(json.error || "Nu s-a salvat.");
  }
 }

 async function addHtmlApp() {
  if (!newFile) {
   setMessage("Încarcă un fișier HTML.");
   return;
  }

  const fd = new FormData();
  fd.append("file", newFile);
  fd.append("slug", form.slug);
  fd.append("image", form.image);

  fd.append("titleRo", form.title.ro);
  fd.append("titleEn", form.title.en);
  fd.append("titleRu", form.title.ru);
  fd.append("titleUa", form.title.ua);

  fd.append("descriptionRo", form.description.ro);
  fd.append("descriptionEn", form.description.en);
  fd.append("descriptionRu", form.description.ru);
  fd.append("descriptionUa", form.description.ua);

  fd.append("tagRo", form.tag.ro);
  fd.append("tagEn", form.tag.en);
  fd.append("tagRu", form.tag.ru);
  fd.append("tagUa", form.tag.ua);

  setUploadBusy(true);
  const res = await fetch("/api/admin/apps/upload", { method: "POST", body: fd });
  const json = await res.json();
  setUploadBusy(false);

  if (json.ok) {
   setMessage("Aplicația HTML a fost adăugată cu succes.");
   await loadApps();
   setMode("list");
  } else {
   setMessage(json.error || "Upload eșuat.");
  }
 }

 async function replaceHtmlApp() {
  if (!editing) return;

  if (editing.kind !== "html") {
   setMessage("Nu poți înlocui fișierul acestei aplicații din admin pentru că nu este HTML simplu. Este aplicație React/Next/Node și trebuie modificată din cod.");
   return;
  }

  if (!replaceFile) {
   setMessage("Încarcă noul fișier HTML.");
   return;
  }

  const fd = new FormData();
  fd.append("id", editing.id);
  fd.append("file", replaceFile);

  setUploadBusy(true);
  const res = await fetch("/api/admin/apps/replace", { method: "POST", body: fd });
  const json = await res.json();
  setUploadBusy(false);

  if (json.ok) {
   setMessage("A fost schimbat fișierul cu succes. Aplicația e înlocuită cu noua versiune.");
   setReplaceFile(null);
  } else {
   setMessage(json.error || "Fișierul nu a fost înlocuit.");
  }
 }

 async function saveEdit() {
  if (!editing) return;

  await saveSettings(editing, {
   image: form.image,
   title: form.title,
   description: form.description,
   tag: form.tag
  });
 }

 function DropZone({
  file,
  setFile,
  label
 }: {
  file: File | null;
  setFile: (file: File | null) => void;
  label: string;
 }) {
  return (
   <div
    className="htmlDropZone"
    onDragOver={(e) => e.preventDefault()}
    onDrop={(e) => {
     e.preventDefault();
     setFile(e.dataTransfer.files?.[0] || null);
    }}
   >
    <b>{label}</b>
    <p>Drag & drop `.html` aici sau apasă pentru upload.</p>
    <label>
     Selectează HTML
     <input
      type="file"
      accept=".html,.htm,text/html"
      onChange={(e) => setFile(e.target.files?.[0] || null)}
     />
    </label>
    {file && <small>Fișier ales: {file.name}</small>}
   </div>
  );
 }

 if (mode === "add") {
  return (
   <section className="adminSimpleCard">
    <div className="adminListHead">
     <h2>Adaugă aplicație HTML</h2>
     <button className="softBtn" onClick={() => setMode("list")}>Înapoi</button>
    </div>

    {message && <div className="adminNotice">{message}</div>}

    <div className="adminFormSimple">
     <DropZone file={newFile} setFile={setNewFile} label="Fișier aplicație HTML" />

     <div className="adminTwoCols">
      <label className="adminField">
       <span>Slug URL</span>
       <input value={form.slug} onChange={(e) => setForm((p) => ({ ...p, slug: e.target.value }))} placeholder="ex: calculator-medical" />
      </label>
      <label className="adminField">
       <span>Imagine card</span>
       <input value={form.image} onChange={(e) => setForm((p) => ({ ...p, image: e.target.value }))} />
      </label>
     </div>

     <div className="adminLangEditorGrid">
      {(["ro", "en", "ru", "ua"] as Lang[]).map((lang) => (
       <div className="adminLangMiniCard" key={lang}>
        <h3>{lang.toUpperCase()}</h3>
        <label>Titlu</label>
        <input value={form.title[lang]} onChange={(e) => setLangField("title", lang, e.target.value)} />
        <label>Descriere</label>
        <textarea rows={3} value={form.description[lang]} onChange={(e) => setLangField("description", lang, e.target.value)} />
        <label>Tag</label>
        <input value={form.tag[lang]} onChange={(e) => setLangField("tag", lang, e.target.value)} />
       </div>
      ))}
     </div>

     <button className="blueBtn" disabled={uploadBusy} onClick={addHtmlApp}>
      {uploadBusy ? "Se încarcă..." : "Adaugă aplicația HTML"}
     </button>
    </div>
   </section>
  );
 }

 if (mode === "edit" && editing) {
  return (
   <section className="adminSimpleCard">
    <div className="adminListHead">
     <h2>Editează aplicația</h2>
     <button className="softBtn" onClick={() => setMode("list")}>Înapoi</button>
    </div>

    {message && <div className="adminNotice">{message}</div>}

    <div className="appEditNotice">
     <b>Tip aplicație: {editing.kind === "html" ? "HTML simplu" : "React/Next/Node"}</b>
     <p>
      {editing.kind === "html"
       ? "Această aplicație poate fi înlocuită prin upload de fișier .html."
       : "Această aplicație nu poate fi înlocuită prin upload HTML. Poți modifica titlul, descrierea, imaginea și vizibilitatea, dar logica aplicației se schimbă din cod."}
     </p>
    </div>

    <div className="adminFormSimple">
     <div className="adminTwoCols">
      <label className="adminField">
       <span>Imagine card</span>
       <input value={form.image} onChange={(e) => setForm((p) => ({ ...p, image: e.target.value }))} />
      </label>
      <label className="adminField">
       <span>Slug</span>
       <input value={form.slug} disabled />
      </label>
     </div>

     <div className="adminLangEditorGrid">
      {(["ro", "en", "ru", "ua"] as Lang[]).map((lang) => (
       <div className={workingLang === lang ? "adminLangMiniCard active" : "adminLangMiniCard"} key={lang}>
        <h3>{lang.toUpperCase()}</h3>
        <label>Titlu</label>
        <input value={form.title[lang]} onChange={(e) => setLangField("title", lang, e.target.value)} />
        <label>Descriere</label>
        <textarea rows={3} value={form.description[lang]} onChange={(e) => setLangField("description", lang, e.target.value)} />
        <label>Tag</label>
        <input value={form.tag[lang]} onChange={(e) => setLangField("tag", lang, e.target.value)} />
       </div>
      ))}
     </div>

     <div className="adminFormActions">
      <button className="blueBtn" onClick={saveEdit}>Salvează textele</button>
      <button
       className="softBtn"
       onClick={() => {
        const next = { ...editing, visible: !editing.visible };
        saveSettings(editing, { visible: next.visible });
       }}
      >
       {editing.visible ? "Ascunde aplicația" : "Afișează aplicația"}
      </button>
     </div>

     <div className="replaceHtmlBox">
      <h3>Înlocuire fișier aplicație</h3>
      <DropZone file={replaceFile} setFile={setReplaceFile} label="Fișier nou HTML" />
      <button className="blueBtn" disabled={uploadBusy} onClick={replaceHtmlApp}>
       {uploadBusy ? "Se înlocuiește..." : "Înlocuiește aplicația"}
      </button>
     </div>
    </div>
   </section>
  );
 }

 return (
  <section className="adminSimpleCard">
   <div className="adminListHead">
    <h2>Aplicații</h2>
    <button className="blueBtn" onClick={startAdd}>Adaugă aplicație HTML</button>
   </div>

   {message && <div className="adminNotice">{message}</div>}

   <div className="adminAppsList">
    {apps.map((app) => (
     <article className="adminAppRow" key={app.id}>
      <img src={app.image || "/images/medical-bg.jpg"} alt="" />
      <div>
       <b>{app.title[workingLang] || app.title.ro}</b>
       <span>{app.kind === "html" ? "HTML app" : "React/Next app"} · {app.visible ? "vizibilă" : "ascunsă"} · /{app.slug}</span>
       <small>{app.description[workingLang] || app.description.ro}</small>
      </div>

      <div className="adminAppActions">
       <button onClick={() => startEdit(app)}>Edit</button>
       <button
        onClick={() => saveSettings(app, { visible: !app.visible })}
        className={app.visible ? "" : "success"}
       >
        {app.visible ? "Ascunde" : "Afișează"}
       </button>
      </div>
     </article>
    ))}
   </div>
  </section>
 );
}
