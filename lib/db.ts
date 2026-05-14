import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";

const dataDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const dbPath = path.join(dataDir, "revimed.sqlite");
export const db = new Database(dbPath);
db.pragma("journal_mode = WAL");

db.exec(`
CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image TEXT NOT NULL DEFAULT '/images/medical-bg.jpg',
  keywords TEXT NOT NULL DEFAULT '',
  published INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  edited_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS services_admin (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  icon TEXT NOT NULL DEFAULT '⚕️',
  image TEXT NOT NULL DEFAULT '/images/medical-bg.jpg',
  short_desc TEXT NOT NULL,
  full_content TEXT NOT NULL,
  keywords TEXT NOT NULL DEFAULT '',
  position INTEGER NOT NULL DEFAULT 0,
  published INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  edited_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS prices (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category TEXT NOT NULL DEFAULT 'General',
  service TEXT NOT NULL,
  price TEXT NOT NULL,
  note TEXT NOT NULL DEFAULT '',
  position INTEGER NOT NULL DEFAULT 0,
  published INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  edited_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
`);

function hasColumn(table: string, column: string) {
  const cols = db.prepare(`PRAGMA table_info(${table})`).all() as { name: string }[];
  return cols.some((c) => c.name === column);
}

if (!hasColumn("prices", "category")) {
  db.exec("ALTER TABLE prices ADD COLUMN category TEXT NOT NULL DEFAULT 'General'");
}

export type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  keywords: string;
  published: number;
  created_at: string;
  edited_at: string;
};

export type ServiceAdmin = {
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
  created_at: string;
  edited_at: string;
};

export type Price = {
  id: number;
  category: string;
  service: string;
  price: string;
  note: string;
  position: number;
  published: number;
  created_at: string;
  edited_at: string;
};

const serviceCount = db.prepare("SELECT COUNT(*) as c FROM services_admin").get() as { c: number };

if (serviceCount.c === 0) {
  const insertService = db.prepare(`
    INSERT INTO services_admin
    (title, slug, icon, image, short_desc, full_content, keywords, position, published)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)
  `);

  const services = [
    {
      title: "Consultații Neurologice",
      slug: "consultatii-neurologice",
      icon: "🧠",
      image: "/images/about-us.jpg",
      short_desc: "Evaluări neurologice complete pentru diagnosticarea și gestionarea afecțiunilor neurologice.",
      full_content: `
Consultațiile neurologice reprezintă un pas esențial pentru diagnosticarea și tratamentul afecțiunilor sistemului nervos central și periferic.

Ce include o consultație neurologică:
- Anamneză detaliată.
- Examinare clinică: reflexe, forță musculară, coordonare, echilibru, sensibilitate și funcții cognitive.
- Evaluare pentru migrene, neuropatii, tulburări de mișcare, epilepsie, hernii de disc, radiculopatii, AVC și recuperare post-AVC.

Beneficii:
- Diagnostic precis.
- Plan de tratament personalizat.
- Monitorizare și prevenție.
- Recomandări clare pentru pașii următori.

La Revimed PLUS, consultațiile sunt orientate spre pacient, explicații clare și soluții practice.
      `.trim(),
      keywords: "neurolog Chișinău, consultație neurologică, migrene, neuropatii, hernie de disc, AVC",
      position: 1
    },
    {
      title: "Consultații Neurochirurgie",
      slug: "consultatii-neurochirurgie",
      icon: "⚕️",
      image: "/images/medical-bg.jpg",
      short_desc: "Consultații pentru evaluarea necesității intervențiilor chirurgicale și a patologiilor coloanei.",
      full_content: `
Consultațiile de neurochirurgie sunt disponibile pentru pacienții care necesită evaluarea detaliată a afecțiunilor coloanei vertebrale, sistemului nervos central sau periferic.

În cadrul consultațiilor:
- Nu sunt efectuate intervenții chirurgicale la Revimed PLUS.
- Pacientul primește explicații despre opțiunile chirurgicale și alternativele disponibile.
- Se evaluează hernii de disc, dureri lombare și cervicale, radiculopatii, leziuni ale coloanei și cazuri complexe.
- Se pot oferi recomandări pentru recuperare, investigații și planificare postoperatorie.

Consultația este potrivită pentru pacienți care doresc o a doua opinie sau o evaluare clară înainte de decizii importante.
      `.trim(),
      keywords: "neurochirurg Chișinău, consultație neurochirurgie, hernie de disc, coloană vertebrală, dureri lombare",
      position: 2
    },
    {
      title: "Fizioterapie și Reabilitare",
      slug: "fizioterapie-si-reabilitare",
      icon: "🏃",
      image: "/images/medical-bg.jpg",
      short_desc: "Programe personalizate de reabilitare pentru recuperarea forței, mobilității și funcției.",
      full_content: `
Fizioterapia și reabilitarea sunt servicii dedicate pacienților care au nevoie de recuperare fizică, reducerea durerilor musculare și articulare sau îmbunătățirea mobilității.

Servicii posibile:
- Electroterapie pentru stimulare musculară.
- Masaj terapeutic.
- Exerciții asistate.
- Fizioterapie manuală.
- Reabilitare postoperatorie.
- Programe pentru echilibru, coordonare și postură.

Beneficii:
- Ameliorarea durerilor cronice.
- Recuperare după intervenții sau traumatisme.
- Îmbunătățirea circulației și flexibilității.
- Prevenirea recidivelor.
- Plan personalizat în funcție de obiectivele pacientului.
      `.trim(),
      keywords: "fizioterapie Chișinău, reabilitare medicală, recuperare medicală, masaj terapeutic, kinetoterapie",
      position: 3
    },
    {
      title: "Diagnostic Funcțional",
      slug: "diagnostic-functional",
      icon: "💓",
      image: "/images/medical-bg.jpg",
      short_desc: "Evaluări funcționale pentru sistemul nervos, mușchi, coordonare și funcții asociate.",
      full_content: `
Diagnosticul funcțional oferă pacienților evaluări pentru înțelegerea funcției sistemului nervos, aparatului locomotor și a recuperării.

Servicii incluse:
- Electroencefalografie EEG.
- Electromiografie EMG.
- Teste funcționale neurologice.
- Evaluări cognitive.
- Teste de reacție și coordonare.
- Evaluarea sistemului motor.

Beneficii:
- Detectarea precoce a unor probleme.
- Monitorizarea eficienței tratamentului.
- Planificarea unui tratament personalizat.
- Identificarea nevoilor de reabilitare.
      `.trim(),
      keywords: "diagnostic funcțional Chișinău, EEG, EMG, evaluare neurologică, teste funcționale",
      position: 4
    },
    {
      title: "Terapie Balneară",
      slug: "terapie-balneara",
      icon: "🌿",
      image: "/images/medical-bg.jpg",
      short_desc: "Tratamente balneare, nămol, hidroterapie și terapii complementare pentru relaxare și recuperare.",
      full_content: `
Terapia balneară include tratamente naturale și complementare pentru relaxare, recuperare și susținerea stării generale de sănătate.

Servicii:
- Băi curative cu nămol.
- Hidroterapie.
- Saună terapeutică.
- Masaj cu nămol.
- Terapie cu vitamine și minerale.
- Tratamente combinate.

Beneficii:
- Relaxare musculară.
- Îmbunătățirea circulației.
- Reducerea stresului.
- Ameliorarea durerilor articulare și musculare.
- Stimularea stării generale de bine.
      `.trim(),
      keywords: "terapie balneară Chișinău, nămol terapeutic, hidroterapie, saună terapeutică",
      position: 5
    },
    {
      title: "Electroterapie",
      slug: "electroterapie",
      icon: "🎵",
      image: "/images/medical-bg.jpg",
      short_desc: "Electrostimulare și proceduri electroterapeutice pentru durere, mușchi și recuperare.",
      full_content: `
Electroterapia folosește stimuli electrici și proceduri moderne pentru reducerea durerii, activare musculară și recuperare.

Servicii disponibile:
- Electrostimulare musculară.
- Electroneurostimulare.
- Electroterapie combinată.
- Terapie cu ultrasunete.
- Terapie cu curenți alternanți.
- Terapie cu curenți continui.

Este potrivită pentru pacienți cu dureri cronice, probleme musculare sau necesitate de reabilitare.
      `.trim(),
      keywords: "electroterapie Chișinău, electrostimulare, ultrasunete, recuperare musculară",
      position: 6
    }
  ];

  services.forEach((s) => insertService.run(
    s.title,
    s.slug,
    s.icon,
    s.image,
    s.short_desc,
    s.full_content,
    s.keywords,
    s.position
  ));
}

const priceCount = db.prepare("SELECT COUNT(*) as c FROM prices").get() as { c: number };

if (priceCount.c < 25) {
  db.prepare("DELETE FROM prices").run();

  const insertPrice = db.prepare(`
    INSERT INTO prices (category, service, price, note, position, published)
    VALUES (?, ?, ?, ?, ?, 1)
  `);

  const prices: [string, string, string, string, number][] = [
    ["Consultații Neurologice", "Consultație primară cu neurolog", "500 MDL", "Evaluare neurologică inițială", 1],
    ["Consultații Neurologice", "Consultație repetată cu neurolog", "400 MDL", "Consultație de control", 2],
    ["Consultații Neurologice", "Electroencefalografie (EEG)", "1000 MDL", "Evaluarea activității electrice cerebrale", 3],
    ["Consultații Neurologice", "Electromiografie (EMG)", "800 MDL", "Evaluarea nervilor și mușchilor", 4],
    ["Consultații Neurologice", "Imagistică IRM", "2000 MDL", "Investigație imagistică", 5],
    ["Consultații Neurologice", "Tomografie CT", "1500 MDL", "Investigație imagistică", 6],
    ["Consultații Neurologice", "Stimulare magnetică transcraniană (TMS)", "2500 MDL", "Procedură specializată", 7],

    ["Consultații Neurochirurgie", "Consultație primară cu chirurg", "300 MDL", "Evaluare inițială", 8],
    ["Consultații Neurochirurgie", "Consultație repetată cu chirurg", "300 MDL", "Consultație de control", 9],
    ["Consultații Neurochirurgie", "Planificare pre-operatorie", "400 MDL", "Recomandări și planificare", 10],
    ["Consultații Neurochirurgie", "Consultație post-operatorie", "250 MDL", "Evaluare după intervenție", 11],
    ["Consultații Neurochirurgie", "Evaluare imagistică pre-chirurgicală", "1500 MDL", "Analiză imagistică", 12],
    ["Consultații Neurochirurgie", "Consultare multidisciplinară", "500 MDL", "Evaluare complexă", 13],

    ["Fizioterapie și Reabilitare", "Ședință de fizioterapie (30 min)", "150 MDL", "Ședință individuală", 14],
    ["Fizioterapie și Reabilitare", "Masaj terapeutic (60 min)", "200 MDL", "Masaj terapeutic", 15],
    ["Fizioterapie și Reabilitare", "Electroterapie combinată", "150 MDL", "Procedură combinată", 16],
    ["Fizioterapie și Reabilitare", "Fizioterapie manuală (45 min)", "180 MDL", "Terapie manuală", 17],
    ["Fizioterapie și Reabilitare", "Reabilitare post-operatorie (60 min)", "220 MDL", "Recuperare postoperatorie", 18],
    ["Fizioterapie și Reabilitare", "Programe personalizate de exerciții", "300 MDL", "Program individual", 19],
    ["Fizioterapie și Reabilitare", "Reabilitare echilibrată și coordonată", "250 MDL", "Echilibru și coordonare", 20],

    ["Diagnostic Funcțional", "Electroencefalografie (EEG)", "1000 MDL", "Diagnostic funcțional", 21],
    ["Diagnostic Funcțional", "Electromiografie (EMG)", "800 MDL", "Diagnostic nervi și mușchi", 22],
    ["Diagnostic Funcțional", "Teste funcționale neurologice", "500 MDL", "Evaluare funcțională", 23],
    ["Diagnostic Funcțional", "Evaluări cognitive", "700 MDL", "Evaluare funcții cognitive", 24],
    ["Diagnostic Funcțional", "Teste de reacție și coordonare", "600 MDL", "Evaluare coordonare", 25],
    ["Diagnostic Funcțional", "Evaluare completă a sistemului motor", "900 MDL", "Evaluare motorie", 26],

    ["Terapie Balneară", "Băi curative cu nămol", "150 MDL/sesiune", "Tratament balnear", 27],
    ["Terapie Balneară", "Hidroterapie", "200 MDL/oră", "Terapie cu apă", 28],
    ["Terapie Balneară", "Sauna terapeutică", "250 MDL/oră", "Saună terapeutică", 29],
    ["Terapie Balneară", "Masaj cu nămol (60 min)", "300 MDL", "Masaj balnear", 30],
    ["Terapie Balneară", "Terapie cu vitamine și minerale", "350 MDL/oră", "Terapie complementară", 31],
    ["Terapie Balneară", "Tratament combinat hidroterapie + masaj", "400 MDL/oră", "Tratament combinat", 32],

    ["Electroterapie", "Electrostimulare musculară", "150 MDL/oră", "Activare musculară", 33],
    ["Electroterapie", "Electroneurostimulare", "150 MDL/oră", "Stimulare nervoasă", 34],
    ["Electroterapie", "Electroterapie combinată", "200 MDL/oră", "Procedură combinată", 35],
    ["Electroterapie", "Terapie cu ultrasunete (30 min)", "180 MDL", "Ultrasunete terapeutice", 36],
    ["Electroterapie", "Terapie cu curenți alternanți", "150 MDL/oră", "Curent alternativ", 37],
    ["Electroterapie", "Terapie cu curenți continui", "150 MDL/oră", "Curent continuu", 38]
  ];

  prices.forEach((p) => insertPrice.run(...p));
}

export function getPublishedPosts() {
  return db.prepare("SELECT * FROM posts WHERE published = 1 ORDER BY datetime(created_at) DESC").all() as Post[];
}

export function getAllPosts() {
  return db.prepare("SELECT * FROM posts ORDER BY datetime(created_at) DESC").all() as Post[];
}

export function getPostBySlug(slug: string) {
  return db.prepare("SELECT * FROM posts WHERE slug = ? AND published = 1").get(slug) as Post | undefined;
}

export function getAllPrices() {
  return db.prepare("SELECT * FROM prices ORDER BY position ASC, id ASC").all() as Price[];
}

export function getPublishedPrices() {
  return db.prepare("SELECT * FROM prices WHERE published = 1 ORDER BY position ASC, id ASC").all() as Price[];
}

export function getAllServicesAdmin() {
  return db.prepare("SELECT * FROM services_admin ORDER BY position ASC, id ASC").all() as ServiceAdmin[];
}

export function getPublishedServicesAdmin() {
  return db.prepare("SELECT * FROM services_admin WHERE published = 1 ORDER BY position ASC, id ASC").all() as ServiceAdmin[];
}

export function getServiceBySlug(slug: string) {
  return db.prepare("SELECT * FROM services_admin WHERE slug = ? AND published = 1").get(slug) as ServiceAdmin | undefined;
}
