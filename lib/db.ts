import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";
import { cleanServiceText, getServiceSeo } from "@/lib/serviceSeoText";

type Lang = "ro" | "en" | "ru" | "ua";

const dataDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const dbPath = path.join(dataDir, "revimed.sqlite");
export const db = new Database(dbPath);
db.pragma("journal_mode = WAL");

db.exec(`
CREATE TABLE IF NOT EXISTS posts (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 lang TEXT NOT NULL DEFAULT 'ro',
 title TEXT NOT NULL,
 slug TEXT NOT NULL,
 excerpt TEXT NOT NULL,
 content TEXT NOT NULL,
 image TEXT NOT NULL DEFAULT '/images/medical-bg.jpg',
 keywords TEXT NOT NULL DEFAULT '',
 published INTEGER NOT NULL DEFAULT 1,
 created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 edited_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 UNIQUE(lang, slug)
);

CREATE TABLE IF NOT EXISTS services_admin (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 lang TEXT NOT NULL DEFAULT 'ro',
 title TEXT NOT NULL,
 slug TEXT NOT NULL,
 icon TEXT NOT NULL DEFAULT '⚕️',
 image TEXT NOT NULL DEFAULT '/images/medical-bg.jpg',
 short_desc TEXT NOT NULL,
 full_content TEXT NOT NULL,
 keywords TEXT NOT NULL DEFAULT '',
 position INTEGER NOT NULL DEFAULT 0,
 published INTEGER NOT NULL DEFAULT 1,
 created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 edited_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 UNIQUE(lang, slug)
);

CREATE TABLE IF NOT EXISTS prices (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 group_key TEXT NOT NULL DEFAULT '',
 lang TEXT NOT NULL DEFAULT 'ro',
 category TEXT NOT NULL DEFAULT 'General',
 service TEXT NOT NULL,
 price TEXT NOT NULL,
 note TEXT NOT NULL DEFAULT '',
 position INTEGER NOT NULL DEFAULT 0,
 published INTEGER NOT NULL DEFAULT 1,
 created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 edited_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS gallery_items (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 lang TEXT NOT NULL DEFAULT 'ro',
 image TEXT NOT NULL,
 title TEXT NOT NULL,
 alt TEXT NOT NULL DEFAULT '',
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

if (!hasColumn("posts", "lang")) db.exec("ALTER TABLE posts ADD COLUMN lang TEXT NOT NULL DEFAULT 'ro'");
if (!hasColumn("services_admin", "lang")) db.exec("ALTER TABLE services_admin ADD COLUMN lang TEXT NOT NULL DEFAULT 'ro'");
if (!hasColumn("prices", "lang")) db.exec("ALTER TABLE prices ADD COLUMN lang TEXT NOT NULL DEFAULT 'ro'");
if (!hasColumn("prices", "group_key")) db.exec("ALTER TABLE prices ADD COLUMN group_key TEXT NOT NULL DEFAULT ''");
if (!hasColumn("prices", "category")) db.exec("ALTER TABLE prices ADD COLUMN category TEXT NOT NULL DEFAULT 'General'");

db.prepare("UPDATE prices SET group_key = 'price_' || id WHERE group_key = '' OR group_key IS NULL").run();

export type Post = {
 id: number;
 lang: Lang;
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
 lang: Lang;
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
 group_key: string;
 lang: Lang;
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
 const insert = db.prepare(`
  INSERT INTO services_admin
  (lang,title,slug,icon,image,short_desc,full_content,keywords,position,published)
  VALUES ('ro',?,?,?,?,?,?,?,?,1)
 `);

 [
  ["Consultații Neurologice","consultatii-neurologice","🧠","/images/about-us.jpg","Evaluări neurologice complete pentru diagnosticarea și gestionarea afecțiunilor neurologice.","Consultațiile neurologice reprezintă un pas esențial pentru diagnosticarea și tratamentul afecțiunilor sistemului nervos central și periferic.","neurolog Chișinău, consultație neurologică",1],
  ["Consultații Neurochirurgie","consultatii-neurochirurgie","⚕️","/images/medical-bg.jpg","Consultații pentru evaluarea necesității intervențiilor chirurgicale și a patologiilor coloanei.","Consultațiile de neurochirurgie sunt disponibile pentru pacienții care necesită evaluarea detaliată a afecțiunilor coloanei și sistemului nervos.","neurochirurg Chișinău, hernie de disc",2],
  ["Fizioterapie și Reabilitare","fizioterapie-si-reabilitare","🏃","/images/medical-bg.jpg","Programe personalizate de reabilitare pentru recuperarea forței, mobilității și funcției.","Fizioterapia și reabilitarea sunt dedicate recuperării fizice, reducerii durerii și îmbunătățirii mobilității.","fizioterapie Chișinău, reabilitare",3],
  ["Diagnostic Funcțional","diagnostic-functional","💓","/images/medical-bg.jpg","Evaluări funcționale pentru sistemul nervos, mușchi, coordonare și funcții asociate.","Diagnosticul funcțional oferă pacienților evaluări pentru înțelegerea funcției sistemului nervos și a recuperării.","diagnostic funcțional, EEG, EMG",4],
  ["Terapie Balneară","terapie-balneara","🌿","/images/medical-bg.jpg","Tratamente balneare, nămol, hidroterapie și terapii complementare.","Terapia balneară include tratamente naturale și complementare pentru relaxare și recuperare.","terapie balneară, hidroterapie",5],
  ["Electroterapie","electroterapie","🎵","/images/medical-bg.jpg","Electrostimulare și proceduri electroterapeutice pentru durere, mușchi și recuperare.","Electroterapia folosește stimuli electrici și proceduri moderne pentru reducerea durerii și recuperare.","electroterapie, electrostimulare",6]
 ].forEach((row) => insert.run(...row));
}

const priceCount = db.prepare("SELECT COUNT(*) as c FROM prices").get() as { c: number };
if (priceCount.c === 0) {
 const insert = db.prepare(`
  INSERT INTO prices (group_key, lang, category, service, price, note, position, published)
  VALUES (?, 'ro', ?, ?, ?, ?, ?, 1)
 `);

 const prices: [string,string,string,string,string,number][] = [
  ["neuro_1","Consultații Neurologice","Consultație primară cu neurolog","500 MDL","Evaluare neurologică inițială",1],
  ["neuro_2","Consultații Neurologice","Consultație repetată cu neurolog","400 MDL","Consultație de control",2],
  ["neuro_3","Consultații Neurologice","Electroencefalogramă (EEG)","1400 MDL","Evaluarea activității electrice cerebrale",3],
  ["neuro_4","Consultații Neurologice","Reoencefalogramă","500 MDL","Evaluarea circulației cerebrale",4],  ["neurochir_1","Consultații Neurochirurgie","Consultație primară cu chirurg","300 MDL","Evaluare inițială",8],
  ["neurochir_2","Consultații Neurochirurgie","Consultație repetată cu chirurg","300 MDL","Consultație de control",9],
  ["neurochir_3","Consultații Neurochirurgie","Planificare pre-operatorie","400 MDL","Recomandări și planificare",10],
  ["fizio_1","Fizioterapie și Reabilitare","Ședință de fizioterapie (30 min)","150 MDL","Ședință individuală",14],
  ["fizio_2","Fizioterapie și Reabilitare","Masaj terapeutic (60 min)","200 MDL","Masaj terapeutic",15],
  ["fizio_3","Fizioterapie și Reabilitare","Electroterapie combinată","150 MDL","Procedură combinată",16],
  ["diag_1","Diagnostic Funcțional","Teste funcționale neurologice","500 MDL","Evaluare funcțională",23],
  ["diag_2","Diagnostic Funcțional","Evaluări cognitive","700 MDL","Evaluare funcții cognitive",24],
  ["balneo_1","Terapie Balneară","Băi curative cu nămol","150 MDL/sesiune","Tratament balnear",27],
  ["balneo_2","Terapie Balneară","Hidroterapie","200 MDL/oră","Terapie cu apă",28],
  ["electro_1","Electroterapie","Electrostimulare musculară","150 MDL/oră","Activare musculară",33],
  ["electro_2","Electroterapie","Terapie cu ultrasunete (30 min)","180 MDL","Ultrasunete terapeutice",36]
 ];

 prices.forEach((p) => insert.run(...p));
}

export function getPublishedPosts(lang: Lang = "ro") {
 return db.prepare("SELECT * FROM posts WHERE published = 1 AND lang = ? ORDER BY datetime(created_at) DESC").all(lang) as Post[];
}

export function getAllPosts(lang?: Lang) {
 if (lang) return db.prepare("SELECT * FROM posts WHERE lang = ? ORDER BY datetime(created_at) DESC").all(lang) as Post[];
 return db.prepare("SELECT * FROM posts ORDER BY lang ASC, datetime(created_at) DESC").all() as Post[];
}

export function getPostBySlug(slug: string, lang: Lang = "ro") {
 return db.prepare("SELECT * FROM posts WHERE slug = ? AND lang = ? AND published = 1").get(slug, lang) as Post | undefined;
}


// Permanent correction for neurology price list.
// Keeps old seeded/admin data from returning after deploys.
db.exec(`
DELETE FROM prices
WHERE group_key IN ('neuro_5','neuro_6')
   OR lower(service) LIKE '%imagistic%'
   OR lower(service) LIKE '%tomograf%'
   OR lower(service) LIKE '%irm%'
   OR lower(service) LIKE '%tomografie ct%';

UPDATE prices
SET
  service = CASE lang
    WHEN 'en' THEN 'Electroencephalogram (EEG)'
    WHEN 'ru' THEN 'Электроэнцефалограмма (ЭЭГ)'
    WHEN 'ua' THEN 'Електроенцефалограма (ЕЕГ)'
    ELSE 'Electroencefalogramă (EEG)'
  END,
  price = '1400 MDL',
  note = CASE lang
    WHEN 'en' THEN 'Evaluation of brain electrical activity'
    WHEN 'ru' THEN 'Оценка электрической активности мозга'
    WHEN 'ua' THEN 'Оцінка електричної активності мозку'
    ELSE 'Evaluarea activității electrice cerebrale'
  END
WHERE group_key = 'neuro_3';

UPDATE prices
SET
  service = CASE lang
    WHEN 'en' THEN 'Rheoencephalogram'
    WHEN 'ru' THEN 'Реоэнцефалограмма'
    WHEN 'ua' THEN 'Реоенцефалограма'
    ELSE 'Reoencefalogramă'
  END,
  price = '500 MDL',
  note = CASE lang
    WHEN 'en' THEN 'Evaluation of cerebral blood circulation'
    WHEN 'ru' THEN 'Оценка мозгового кровообращения'
    WHEN 'ua' THEN 'Оцінка мозкового кровообігу'
    ELSE 'Evaluarea circulației cerebrale'
  END
WHERE group_key = 'neuro_4';

UPDATE prices SET category='Consultații Neurologice' WHERE lang='ro' AND group_key LIKE 'neuro_%';
UPDATE prices SET category='Neurology Consultations' WHERE lang='en' AND group_key LIKE 'neuro_%';
UPDATE prices SET category='Неврологические консультации' WHERE lang='ru' AND group_key LIKE 'neuro_%';
UPDATE prices SET category='Неврологічні консультації' WHERE lang='ua' AND group_key LIKE 'neuro_%';
`);


// FULL_PRICE_LIST_2026_05_START
// Permanent official prices list. Keeps old demo/seed prices from returning after deploys.
db.exec(`
DELETE FROM prices;

INSERT INTO prices (lang, group_key, category, service, price, note, position) VALUES
('ro', 'consultatii_specialitate_001', 'CONSULTAȚII DE SPECIALITATE', 'Consultație primară cu neurolog', '500 MDL', '', 1),
('en', 'consultatii_specialitate_001', 'SPECIALIST CONSULTATIONS', 'Consultație primară cu neurolog', '500 MDL', '', 1),
('ru', 'consultatii_specialitate_001', 'КОНСУЛЬТАЦИИ СПЕЦИАЛИСТОВ', 'Consultație primară cu neurolog', '500 MDL', '', 1),
('ua', 'consultatii_specialitate_001', 'КОНСУЛЬТАЦІЇ СПЕЦІАЛІСТІВ', 'Consultație primară cu neurolog', '500 MDL', '', 1),
('ro', 'consultatii_specialitate_002', 'CONSULTAȚII DE SPECIALITATE', 'Consultație repetată cu neurolog', '400 MDL', '', 2),
('en', 'consultatii_specialitate_002', 'SPECIALIST CONSULTATIONS', 'Consultație repetată cu neurolog', '400 MDL', '', 2),
('ru', 'consultatii_specialitate_002', 'КОНСУЛЬТАЦИИ СПЕЦИАЛИСТОВ', 'Consultație repetată cu neurolog', '400 MDL', '', 2),
('ua', 'consultatii_specialitate_002', 'КОНСУЛЬТАЦІЇ СПЕЦІАЛІСТІВ', 'Consultație repetată cu neurolog', '400 MDL', '', 2),
('ro', 'consultatii_specialitate_003', 'CONSULTAȚII DE SPECIALITATE', 'Consultație primară cu neurochirurg', '300 MDL', '', 3),
('en', 'consultatii_specialitate_003', 'SPECIALIST CONSULTATIONS', 'Consultație primară cu neurochirurg', '300 MDL', '', 3),
('ru', 'consultatii_specialitate_003', 'КОНСУЛЬТАЦИИ СПЕЦИАЛИСТОВ', 'Consultație primară cu neurochirurg', '300 MDL', '', 3),
('ua', 'consultatii_specialitate_003', 'КОНСУЛЬТАЦІЇ СПЕЦІАЛІСТІВ', 'Consultație primară cu neurochirurg', '300 MDL', '', 3),
('ro', 'consultatii_specialitate_004', 'CONSULTAȚII DE SPECIALITATE', 'Consultație repetată cu neurochirurg', '300 MDL', '', 4),
('en', 'consultatii_specialitate_004', 'SPECIALIST CONSULTATIONS', 'Consultație repetată cu neurochirurg', '300 MDL', '', 4),
('ru', 'consultatii_specialitate_004', 'КОНСУЛЬТАЦИИ СПЕЦИАЛИСТОВ', 'Consultație repetată cu neurochirurg', '300 MDL', '', 4),
('ua', 'consultatii_specialitate_004', 'КОНСУЛЬТАЦІЇ СПЕЦІАЛІСТІВ', 'Consultație repetată cu neurochirurg', '300 MDL', '', 4),
('ro', 'consultatii_specialitate_005', 'CONSULTAȚII DE SPECIALITATE', 'Consultație primară cu medic internist', '300 MDL', '', 5),
('en', 'consultatii_specialitate_005', 'SPECIALIST CONSULTATIONS', 'Consultație primară cu medic internist', '300 MDL', '', 5),
('ru', 'consultatii_specialitate_005', 'КОНСУЛЬТАЦИИ СПЕЦИАЛИСТОВ', 'Consultație primară cu medic internist', '300 MDL', '', 5),
('ua', 'consultatii_specialitate_005', 'КОНСУЛЬТАЦІЇ СПЕЦІАЛІСТІВ', 'Consultație primară cu medic internist', '300 MDL', '', 5),
('ro', 'consultatii_specialitate_006', 'CONSULTAȚII DE SPECIALITATE', 'Consultație repetată cu medic internist', '200 MDL', '', 6),
('en', 'consultatii_specialitate_006', 'SPECIALIST CONSULTATIONS', 'Consultație repetată cu medic internist', '200 MDL', '', 6),
('ru', 'consultatii_specialitate_006', 'КОНСУЛЬТАЦИИ СПЕЦИАЛИСТОВ', 'Consultație repetată cu medic internist', '200 MDL', '', 6),
('ua', 'consultatii_specialitate_006', 'КОНСУЛЬТАЦІЇ СПЕЦІАЛІСТІВ', 'Consultație repetată cu medic internist', '200 MDL', '', 6),
('ro', 'consultatii_specialitate_007', 'CONSULTAȚII DE SPECIALITATE', 'Consultație primară cu medic fitoterapeut', '500 MDL', '', 7),
('en', 'consultatii_specialitate_007', 'SPECIALIST CONSULTATIONS', 'Consultație primară cu medic fitoterapeut', '500 MDL', '', 7),
('ru', 'consultatii_specialitate_007', 'КОНСУЛЬТАЦИИ СПЕЦИАЛИСТОВ', 'Consultație primară cu medic fitoterapeut', '500 MDL', '', 7),
('ua', 'consultatii_specialitate_007', 'КОНСУЛЬТАЦІЇ СПЕЦІАЛІСТІВ', 'Consultație primară cu medic fitoterapeut', '500 MDL', '', 7),
('ro', 'consultatii_specialitate_008', 'CONSULTAȚII DE SPECIALITATE', 'Consultație primară cu reflexolog', '500 MDL', '', 8),
('en', 'consultatii_specialitate_008', 'SPECIALIST CONSULTATIONS', 'Consultație primară cu reflexolog', '500 MDL', '', 8),
('ru', 'consultatii_specialitate_008', 'КОНСУЛЬТАЦИИ СПЕЦИАЛИСТОВ', 'Consultație primară cu reflexolog', '500 MDL', '', 8),
('ua', 'consultatii_specialitate_008', 'КОНСУЛЬТАЦІЇ СПЕЦІАЛІСТІВ', 'Consultație primară cu reflexolog', '500 MDL', '', 8),
('ro', 'consultatii_specialitate_009', 'CONSULTAȚII DE SPECIALITATE', 'Consultație repetată cu reflexolog', '400 MDL', '', 9),
('en', 'consultatii_specialitate_009', 'SPECIALIST CONSULTATIONS', 'Consultație repetată cu reflexolog', '400 MDL', '', 9),
('ru', 'consultatii_specialitate_009', 'КОНСУЛЬТАЦИИ СПЕЦИАЛИСТОВ', 'Consultație repetată cu reflexolog', '400 MDL', '', 9),
('ua', 'consultatii_specialitate_009', 'КОНСУЛЬТАЦІЇ СПЕЦІАЛІСТІВ', 'Consultație repetată cu reflexolog', '400 MDL', '', 9),
('ro', 'consultatii_specialitate_010', 'CONSULTAȚII DE SPECIALITATE', 'Consultație psihoterapeut', '300 MDL', '', 10),
('en', 'consultatii_specialitate_010', 'SPECIALIST CONSULTATIONS', 'Consultație psihoterapeut', '300 MDL', '', 10),
('ru', 'consultatii_specialitate_010', 'КОНСУЛЬТАЦИИ СПЕЦИАЛИСТОВ', 'Consultație psihoterapeut', '300 MDL', '', 10),
('ua', 'consultatii_specialitate_010', 'КОНСУЛЬТАЦІЇ СПЕЦІАЛІСТІВ', 'Consultație psihoterapeut', '300 MDL', '', 10),
('ro', 'consultatii_specialitate_011', 'CONSULTAȚII DE SPECIALITATE', 'Consultație primară cu acupuncturist', '400 MDL', '', 11),
('en', 'consultatii_specialitate_011', 'SPECIALIST CONSULTATIONS', 'Consultație primară cu acupuncturist', '400 MDL', '', 11),
('ru', 'consultatii_specialitate_011', 'КОНСУЛЬТАЦИИ СПЕЦИАЛИСТОВ', 'Consultație primară cu acupuncturist', '400 MDL', '', 11),
('ua', 'consultatii_specialitate_011', 'КОНСУЛЬТАЦІЇ СПЕЦІАЛІСТІВ', 'Consultație primară cu acupuncturist', '400 MDL', '', 11),
('ro', 'consultatii_specialitate_012', 'CONSULTAȚII DE SPECIALITATE', 'Consultație repetată cu acupuncturist', '350 MDL', '', 12),
('en', 'consultatii_specialitate_012', 'SPECIALIST CONSULTATIONS', 'Consultație repetată cu acupuncturist', '350 MDL', '', 12),
('ru', 'consultatii_specialitate_012', 'КОНСУЛЬТАЦИИ СПЕЦИАЛИСТОВ', 'Consultație repetată cu acupuncturist', '350 MDL', '', 12),
('ua', 'consultatii_specialitate_012', 'КОНСУЛЬТАЦІЇ СПЕЦІАЛІСТІВ', 'Consultație repetată cu acupuncturist', '350 MDL', '', 12),
('ro', 'diagnostic_functional_001', 'DIAGNOSTIC FUNCȚIONAL', 'Cartografierea creierului computerizată / Examinare neuroenergometrică', '600 MDL', '', 13),
('en', 'diagnostic_functional_001', 'FUNCTIONAL DIAGNOSTICS', 'Cartografierea creierului computerizată / Examinare neuroenergometrică', '600 MDL', '', 13),
('ru', 'diagnostic_functional_001', 'ФУНКЦИОНАЛЬНАЯ ДИАГНОСТИКА', 'Cartografierea creierului computerizată / Examinare neuroenergometrică', '600 MDL', '', 13),
('ua', 'diagnostic_functional_001', 'ФУНКЦІОНАЛЬНА ДІАГНОСТИКА', 'Cartografierea creierului computerizată / Examinare neuroenergometrică', '600 MDL', '', 13),
('ro', 'diagnostic_functional_002', 'DIAGNOSTIC FUNCȚIONAL', 'Electroencefalografie / Electroencefalogramă', '1400 MDL', '', 14),
('en', 'diagnostic_functional_002', 'FUNCTIONAL DIAGNOSTICS', 'Electroencefalografie / Electroencefalogramă', '1400 MDL', '', 14),
('ru', 'diagnostic_functional_002', 'ФУНКЦИОНАЛЬНАЯ ДИАГНОСТИКА', 'Electroencefalografie / Electroencefalogramă', '1400 MDL', '', 14),
('ua', 'diagnostic_functional_002', 'ФУНКЦІОНАЛЬНА ДІАГНОСТИКА', 'Electroencefalografie / Electroencefalogramă', '1400 MDL', '', 14),
('ro', 'diagnostic_functional_003', 'DIAGNOSTIC FUNCȚIONAL', 'Reoencefalografie', '500 MDL', '', 15),
('en', 'diagnostic_functional_003', 'FUNCTIONAL DIAGNOSTICS', 'Reoencefalografie', '500 MDL', '', 15),
('ru', 'diagnostic_functional_003', 'ФУНКЦИОНАЛЬНАЯ ДИАГНОСТИКА', 'Reoencefalografie', '500 MDL', '', 15),
('ua', 'diagnostic_functional_003', 'ФУНКЦІОНАЛЬНА ДІАГНОСТИКА', 'Reoencefalografie', '500 MDL', '', 15),
('ro', 'diagnostic_functional_004', 'DIAGNOSTIC FUNCȚIONAL', 'Examinare computerizată cu electrospondilografie', '800 MDL', '', 16),
('en', 'diagnostic_functional_004', 'FUNCTIONAL DIAGNOSTICS', 'Examinare computerizată cu electrospondilografie', '800 MDL', '', 16),
('ru', 'diagnostic_functional_004', 'ФУНКЦИОНАЛЬНАЯ ДИАГНОСТИКА', 'Examinare computerizată cu electrospondilografie', '800 MDL', '', 16),
('ua', 'diagnostic_functional_004', 'ФУНКЦІОНАЛЬНА ДІАГНОСТИКА', 'Examinare computerizată cu electrospondilografie', '800 MDL', '', 16),
('ro', 'diagnostic_functional_005', 'DIAGNOSTIC FUNCȚIONAL', 'Examinare electrocardiografică ECG computerizată', '200 MDL', '', 17),
('en', 'diagnostic_functional_005', 'FUNCTIONAL DIAGNOSTICS', 'Examinare electrocardiografică ECG computerizată', '200 MDL', '', 17),
('ru', 'diagnostic_functional_005', 'ФУНКЦИОНАЛЬНАЯ ДИАГНОСТИКА', 'Examinare electrocardiografică ECG computerizată', '200 MDL', '', 17),
('ua', 'diagnostic_functional_005', 'ФУНКЦІОНАЛЬНА ДІАГНОСТИКА', 'Examinare electrocardiografică ECG computerizată', '200 MDL', '', 17),
('ro', 'diagnostic_functional_006', 'DIAGNOSTIC FUNCȚIONAL', 'Testări electrodiagnostice computerizate ale sistemelor și organelor umane MEDISKRIN PROFESSIONAL', '800 MDL', '', 18),
('en', 'diagnostic_functional_006', 'FUNCTIONAL DIAGNOSTICS', 'Testări electrodiagnostice computerizate ale sistemelor și organelor umane MEDISKRIN PROFESSIONAL', '800 MDL', '', 18),
('ru', 'diagnostic_functional_006', 'ФУНКЦИОНАЛЬНАЯ ДИАГНОСТИКА', 'Testări electrodiagnostice computerizate ale sistemelor și organelor umane MEDISKRIN PROFESSIONAL', '800 MDL', '', 18),
('ua', 'diagnostic_functional_006', 'ФУНКЦІОНАЛЬНА ДІАГНОСТИКА', 'Testări electrodiagnostice computerizate ale sistemelor și organelor umane MEDISKRIN PROFESSIONAL', '800 MDL', '', 18),
('ro', 'diagnostic_functional_007', 'DIAGNOSTIC FUNCȚIONAL', 'Examinare EHO-Encefalografie', '250 MDL', '', 19),
('en', 'diagnostic_functional_007', 'FUNCTIONAL DIAGNOSTICS', 'Examinare EHO-Encefalografie', '250 MDL', '', 19),
('ru', 'diagnostic_functional_007', 'ФУНКЦИОНАЛЬНАЯ ДИАГНОСТИКА', 'Examinare EHO-Encefalografie', '250 MDL', '', 19),
('ua', 'diagnostic_functional_007', 'ФУНКЦІОНАЛЬНА ДІАГНОСТИКА', 'Examinare EHO-Encefalografie', '250 MDL', '', 19),
('ro', 'diagnostic_functional_008', 'DIAGNOSTIC FUNCȚIONAL', 'Examinarea cu ultrasunete a organelor interne', '250 MDL', '', 20),
('en', 'diagnostic_functional_008', 'FUNCTIONAL DIAGNOSTICS', 'Examinarea cu ultrasunete a organelor interne', '250 MDL', '', 20),
('ru', 'diagnostic_functional_008', 'ФУНКЦИОНАЛЬНАЯ ДИАГНОСТИКА', 'Examinarea cu ultrasunete a organelor interne', '250 MDL', '', 20),
('ua', 'diagnostic_functional_008', 'ФУНКЦІОНАЛЬНА ДІАГНОСТИКА', 'Examinarea cu ultrasunete a organelor interne', '250 MDL', '', 20),
('ro', 'diagnostic_functional_009', 'DIAGNOSTIC FUNCȚIONAL', 'Examen expres de laborator Uro-test', '200 MDL', '', 21),
('en', 'diagnostic_functional_009', 'FUNCTIONAL DIAGNOSTICS', 'Examen expres de laborator Uro-test', '200 MDL', '', 21),
('ru', 'diagnostic_functional_009', 'ФУНКЦИОНАЛЬНАЯ ДИАГНОСТИКА', 'Examen expres de laborator Uro-test', '200 MDL', '', 21),
('ua', 'diagnostic_functional_009', 'ФУНКЦІОНАЛЬНА ДІАГНОСТИКА', 'Examen expres de laborator Uro-test', '200 MDL', '', 21),
('ro', 'diagnostic_functional_010', 'DIAGNOSTIC FUNCȚIONAL', 'Examinare neinvazivă 117 indici clinici Biopromin AMP-Tech', '1000 MDL', '', 22),
('en', 'diagnostic_functional_010', 'FUNCTIONAL DIAGNOSTICS', 'Examinare neinvazivă 117 indici clinici Biopromin AMP-Tech', '1000 MDL', '', 22),
('ru', 'diagnostic_functional_010', 'ФУНКЦИОНАЛЬНАЯ ДИАГНОСТИКА', 'Examinare neinvazivă 117 indici clinici Biopromin AMP-Tech', '1000 MDL', '', 22),
('ua', 'diagnostic_functional_010', 'ФУНКЦІОНАЛЬНА ДІАГНОСТИКА', 'Examinare neinvazivă 117 indici clinici Biopromin AMP-Tech', '1000 MDL', '', 22),
('ro', 'diagnostic_functional_011', 'DIAGNOSTIC FUNCȚIONAL', 'Termalgometrie RUNO - Testarea cu feedback computerizat a sistemului nervos vegetativ', '500 MDL', '', 23),
('en', 'diagnostic_functional_011', 'FUNCTIONAL DIAGNOSTICS', 'Termalgometrie RUNO - Testarea cu feedback computerizat a sistemului nervos vegetativ', '500 MDL', '', 23),
('ru', 'diagnostic_functional_011', 'ФУНКЦИОНАЛЬНАЯ ДИАГНОСТИКА', 'Termalgometrie RUNO - Testarea cu feedback computerizat a sistemului nervos vegetativ', '500 MDL', '', 23),
('ua', 'diagnostic_functional_011', 'ФУНКЦІОНАЛЬНА ДІАГНОСТИКА', 'Termalgometrie RUNO - Testarea cu feedback computerizat a sistemului nervos vegetativ', '500 MDL', '', 23),
('ro', 'diagnostic_functional_012', 'DIAGNOSTIC FUNCȚIONAL', 'Evaluare funcțională neuropsihologică', '700 MDL', '', 24),
('en', 'diagnostic_functional_012', 'FUNCTIONAL DIAGNOSTICS', 'Evaluare funcțională neuropsihologică', '700 MDL', '', 24),
('ru', 'diagnostic_functional_012', 'ФУНКЦИОНАЛЬНАЯ ДИАГНОСТИКА', 'Evaluare funcțională neuropsihologică', '700 MDL', '', 24),
('ua', 'diagnostic_functional_012', 'ФУНКЦІОНАЛЬНА ДІАГНОСТИКА', 'Evaluare funcțională neuropsihologică', '700 MDL', '', 24),
('ro', 'diagnostic_functional_013', 'DIAGNOSTIC FUNCȚIONAL', 'Testare cognitivă avansată', '800 MDL', '', 25),
('en', 'diagnostic_functional_013', 'FUNCTIONAL DIAGNOSTICS', 'Testare cognitivă avansată', '800 MDL', '', 25),
('ru', 'diagnostic_functional_013', 'ФУНКЦИОНАЛЬНАЯ ДИАГНОСТИКА', 'Testare cognitivă avansată', '800 MDL', '', 25),
('ua', 'diagnostic_functional_013', 'ФУНКЦІОНАЛЬНА ДІАГНОСТИКА', 'Testare cognitivă avansată', '800 MDL', '', 25),
('ro', 'diagnostic_functional_014', 'DIAGNOSTIC FUNCȚIONAL', 'Evaluare biomecanică a mișcării', '600 MDL', '', 26),
('en', 'diagnostic_functional_014', 'FUNCTIONAL DIAGNOSTICS', 'Evaluare biomecanică a mișcării', '600 MDL', '', 26),
('ru', 'diagnostic_functional_014', 'ФУНКЦИОНАЛЬНАЯ ДИАГНОСТИКА', 'Evaluare biomecanică a mișcării', '600 MDL', '', 26),
('ua', 'diagnostic_functional_014', 'ФУНКЦІОНАЛЬНА ДІАГНОСТИКА', 'Evaluare biomecanică a mișcării', '600 MDL', '', 26),
('ro', 'diagnostic_functional_015', 'DIAGNOSTIC FUNCȚIONAL', 'Evaluare ergonomică personalizată', '550 MDL', '', 27),
('en', 'diagnostic_functional_015', 'FUNCTIONAL DIAGNOSTICS', 'Evaluare ergonomică personalizată', '550 MDL', '', 27),
('ru', 'diagnostic_functional_015', 'ФУНКЦИОНАЛЬНАЯ ДИАГНОСТИКА', 'Evaluare ergonomică personalizată', '550 MDL', '', 27),
('ua', 'diagnostic_functional_015', 'ФУНКЦІОНАЛЬНА ДІАГНОСТИКА', 'Evaluare ergonomică personalizată', '550 MDL', '', 27),
('ro', 'testari_psihodiagnostice_001', 'TESTĂRI PSIHODIAGNOSTICE COMPUTERIZATE', 'MMPI', '200 MDL', '', 28),
('en', 'testari_psihodiagnostice_001', 'COMPUTERIZED PSYCHODIAGNOSTIC TESTING', 'MMPI', '200 MDL', '', 28),
('ru', 'testari_psihodiagnostice_001', 'КОМПЬЮТЕРНОЕ ПСИХОДИАГНОСТИЧЕСКОЕ ТЕСТИРОВАНИЕ', 'MMPI', '200 MDL', '', 28),
('ua', 'testari_psihodiagnostice_001', 'КОМП’ЮТЕРНЕ ПСИХОДІАГНОСТИЧНЕ ТЕСТУВАННЯ', 'MMPI', '200 MDL', '', 28),
('ro', 'testari_psihodiagnostice_002', 'TESTĂRI PSIHODIAGNOSTICE COMPUTERIZATE', 'Testări psihologice Luscher', '200 MDL', '', 29),
('en', 'testari_psihodiagnostice_002', 'COMPUTERIZED PSYCHODIAGNOSTIC TESTING', 'Testări psihologice Luscher', '200 MDL', '', 29),
('ru', 'testari_psihodiagnostice_002', 'КОМПЬЮТЕРНОЕ ПСИХОДИАГНОСТИЧЕСКОЕ ТЕСТИРОВАНИЕ', 'Testări psihologice Luscher', '200 MDL', '', 29),
('ua', 'testari_psihodiagnostice_002', 'КОМП’ЮТЕРНЕ ПСИХОДІАГНОСТИЧНЕ ТЕСТУВАННЯ', 'Testări psihologice Luscher', '200 MDL', '', 29),
('ro', 'testari_psihodiagnostice_003', 'TESTĂRI PSIHODIAGNOSTICE COMPUTERIZATE', 'Testări psihologice Sondy', '200 MDL', '', 30),
('en', 'testari_psihodiagnostice_003', 'COMPUTERIZED PSYCHODIAGNOSTIC TESTING', 'Testări psihologice Sondy', '200 MDL', '', 30),
('ru', 'testari_psihodiagnostice_003', 'КОМПЬЮТЕРНОЕ ПСИХОДИАГНОСТИЧЕСКОЕ ТЕСТИРОВАНИЕ', 'Testări psihologice Sondy', '200 MDL', '', 30),
('ua', 'testari_psihodiagnostice_003', 'КОМП’ЮТЕРНЕ ПСИХОДІАГНОСТИЧНЕ ТЕСТУВАННЯ', 'Testări psihologice Sondy', '200 MDL', '', 30),
('ro', 'testari_psihodiagnostice_004', 'TESTĂRI PSIHODIAGNOSTICE COMPUTERIZATE', 'Psihoterapie', '300 MDL', '', 31),
('en', 'testari_psihodiagnostice_004', 'COMPUTERIZED PSYCHODIAGNOSTIC TESTING', 'Psihoterapie', '300 MDL', '', 31),
('ru', 'testari_psihodiagnostice_004', 'КОМПЬЮТЕРНОЕ ПСИХОДИАГНОСТИЧЕСКОЕ ТЕСТИРОВАНИЕ', 'Psihoterapie', '300 MDL', '', 31),
('ua', 'testari_psihodiagnostice_004', 'КОМП’ЮТЕРНЕ ПСИХОДІАГНОСТИЧНЕ ТЕСТУВАННЯ', 'Psihoterapie', '300 MDL', '', 31),
('ro', 'testari_psihodiagnostice_005', 'TESTĂRI PSIHODIAGNOSTICE COMPUTERIZATE', 'Test de personalitate', '250 MDL', '', 32),
('en', 'testari_psihodiagnostice_005', 'COMPUTERIZED PSYCHODIAGNOSTIC TESTING', 'Test de personalitate', '250 MDL', '', 32),
('ru', 'testari_psihodiagnostice_005', 'КОМПЬЮТЕРНОЕ ПСИХОДИАГНОСТИЧЕСКОЕ ТЕСТИРОВАНИЕ', 'Test de personalitate', '250 MDL', '', 32),
('ua', 'testari_psihodiagnostice_005', 'КОМП’ЮТЕРНЕ ПСИХОДІАГНОСТИЧНЕ ТЕСТУВАННЯ', 'Test de personalitate', '250 MDL', '', 32),
('ro', 'testari_psihodiagnostice_006', 'TESTĂRI PSIHODIAGNOSTICE COMPUTERIZATE', 'Test de inteligență emoțională', '300 MDL', '', 33),
('en', 'testari_psihodiagnostice_006', 'COMPUTERIZED PSYCHODIAGNOSTIC TESTING', 'Test de inteligență emoțională', '300 MDL', '', 33),
('ru', 'testari_psihodiagnostice_006', 'КОМПЬЮТЕРНОЕ ПСИХОДИАГНОСТИЧЕСКОЕ ТЕСТИРОВАНИЕ', 'Test de inteligență emoțională', '300 MDL', '', 33),
('ua', 'testari_psihodiagnostice_006', 'КОМП’ЮТЕРНЕ ПСИХОДІАГНОСТИЧНЕ ТЕСТУВАННЯ', 'Test de inteligență emoțională', '300 MDL', '', 33),
('ro', 'testari_psihodiagnostice_007', 'TESTĂRI PSIHODIAGNOSTICE COMPUTERIZATE', 'Evaluare psihosocială', '350 MDL', '', 34),
('en', 'testari_psihodiagnostice_007', 'COMPUTERIZED PSYCHODIAGNOSTIC TESTING', 'Evaluare psihosocială', '350 MDL', '', 34),
('ru', 'testari_psihodiagnostice_007', 'КОМПЬЮТЕРНОЕ ПСИХОДИАГНОСТИЧЕСКОЕ ТЕСТИРОВАНИЕ', 'Evaluare psihosocială', '350 MDL', '', 34),
('ua', 'testari_psihodiagnostice_007', 'КОМП’ЮТЕРНЕ ПСИХОДІАГНОСТИЧНЕ ТЕСТУВАННЯ', 'Evaluare psihosocială', '350 MDL', '', 34),
('ro', 'testari_psihodiagnostice_008', 'TESTĂRI PSIHODIAGNOSTICE COMPUTERIZATE', 'Test de stres post-traumatic', '400 MDL', '', 35),
('en', 'testari_psihodiagnostice_008', 'COMPUTERIZED PSYCHODIAGNOSTIC TESTING', 'Test de stres post-traumatic', '400 MDL', '', 35),
('ru', 'testari_psihodiagnostice_008', 'КОМПЬЮТЕРНОЕ ПСИХОДИАГНОСТИЧЕСКОЕ ТЕСТИРОВАНИЕ', 'Test de stres post-traumatic', '400 MDL', '', 35),
('ua', 'testari_psihodiagnostice_008', 'КОМП’ЮТЕРНЕ ПСИХОДІАГНОСТИЧНЕ ТЕСТУВАННЯ', 'Test de stres post-traumatic', '400 MDL', '', 35),
('ro', 'testari_psihodiagnostice_009', 'TESTĂRI PSIHODIAGNOSTICE COMPUTERIZATE', 'Evaluare a funcțiilor executive', '300 MDL', '', 36),
('en', 'testari_psihodiagnostice_009', 'COMPUTERIZED PSYCHODIAGNOSTIC TESTING', 'Evaluare a funcțiilor executive', '300 MDL', '', 36),
('ru', 'testari_psihodiagnostice_009', 'КОМПЬЮТЕРНОЕ ПСИХОДИАГНОСТИЧЕСКОЕ ТЕСТИРОВАНИЕ', 'Evaluare a funcțiilor executive', '300 MDL', '', 36),
('ua', 'testari_psihodiagnostice_009', 'КОМП’ЮТЕРНЕ ПСИХОДІАГНОСТИЧНЕ ТЕСТУВАННЯ', 'Evaluare a funcțiilor executive', '300 MDL', '', 36),
('ro', 'fizioterapie_reabilitare_001', 'FIZIOTERAPIE ȘI REABILITARE', 'Ședință de fizioterapie 30 min', '150 MDL', '', 37),
('en', 'fizioterapie_reabilitare_001', 'PHYSIOTHERAPY AND REHABILITATION', 'Ședință de fizioterapie 30 min', '150 MDL', '', 37),
('ru', 'fizioterapie_reabilitare_001', 'ФИЗИОТЕРАПИЯ И РЕАБИЛИТАЦИЯ', 'Ședință de fizioterapie 30 min', '150 MDL', '', 37),
('ua', 'fizioterapie_reabilitare_001', 'ФІЗІОТЕРАПІЯ ТА РЕАБІЛІТАЦІЯ', 'Ședință de fizioterapie 30 min', '150 MDL', '', 37),
('ro', 'fizioterapie_reabilitare_002', 'FIZIOTERAPIE ȘI REABILITARE', 'Masaj terapeutic 60 min', '200 MDL', '', 38),
('en', 'fizioterapie_reabilitare_002', 'PHYSIOTHERAPY AND REHABILITATION', 'Masaj terapeutic 60 min', '200 MDL', '', 38),
('ru', 'fizioterapie_reabilitare_002', 'ФИЗИОТЕРАПИЯ И РЕАБИЛИТАЦИЯ', 'Masaj terapeutic 60 min', '200 MDL', '', 38),
('ua', 'fizioterapie_reabilitare_002', 'ФІЗІОТЕРАПІЯ ТА РЕАБІЛІТАЦІЯ', 'Masaj terapeutic 60 min', '200 MDL', '', 38),
('ro', 'fizioterapie_reabilitare_003', 'FIZIOTERAPIE ȘI REABILITARE', 'Electroterapie combinată', '150 MDL', '', 39),
('en', 'fizioterapie_reabilitare_003', 'PHYSIOTHERAPY AND REHABILITATION', 'Electroterapie combinată', '150 MDL', '', 39),
('ru', 'fizioterapie_reabilitare_003', 'ФИЗИОТЕРАПИЯ И РЕАБИЛИТАЦИЯ', 'Electroterapie combinată', '150 MDL', '', 39),
('ua', 'fizioterapie_reabilitare_003', 'ФІЗІОТЕРАПІЯ ТА РЕАБІЛІТАЦІЯ', 'Electroterapie combinată', '150 MDL', '', 39),
('ro', 'fizioterapie_reabilitare_004', 'FIZIOTERAPIE ȘI REABILITARE', 'Fizioterapie manuală 45 min', '180 MDL', '', 40),
('en', 'fizioterapie_reabilitare_004', 'PHYSIOTHERAPY AND REHABILITATION', 'Fizioterapie manuală 45 min', '180 MDL', '', 40),
('ru', 'fizioterapie_reabilitare_004', 'ФИЗИОТЕРАПИЯ И РЕАБИЛИТАЦИЯ', 'Fizioterapie manuală 45 min', '180 MDL', '', 40),
('ua', 'fizioterapie_reabilitare_004', 'ФІЗІОТЕРАПІЯ ТА РЕАБІЛІТАЦІЯ', 'Fizioterapie manuală 45 min', '180 MDL', '', 40),
('ro', 'fizioterapie_reabilitare_005', 'FIZIOTERAPIE ȘI REABILITARE', 'Reabilitare post-operatorie 60 min', '220 MDL', '', 41),
('en', 'fizioterapie_reabilitare_005', 'PHYSIOTHERAPY AND REHABILITATION', 'Reabilitare post-operatorie 60 min', '220 MDL', '', 41),
('ru', 'fizioterapie_reabilitare_005', 'ФИЗИОТЕРАПИЯ И РЕАБИЛИТАЦИЯ', 'Reabilitare post-operatorie 60 min', '220 MDL', '', 41),
('ua', 'fizioterapie_reabilitare_005', 'ФІЗІОТЕРАПІЯ ТА РЕАБІЛІТАЦІЯ', 'Reabilitare post-operatorie 60 min', '220 MDL', '', 41),
('ro', 'fizioterapie_reabilitare_006', 'FIZIOTERAPIE ȘI REABILITARE', 'Programe personalizate de exerciții', '300 MDL', '', 42),
('en', 'fizioterapie_reabilitare_006', 'PHYSIOTHERAPY AND REHABILITATION', 'Programe personalizate de exerciții', '300 MDL', '', 42),
('ru', 'fizioterapie_reabilitare_006', 'ФИЗИОТЕРАПИЯ И РЕАБИЛИТАЦИЯ', 'Programe personalizate de exerciții', '300 MDL', '', 42),
('ua', 'fizioterapie_reabilitare_006', 'ФІЗІОТЕРАПІЯ ТА РЕАБІЛІТАЦІЯ', 'Programe personalizate de exerciții', '300 MDL', '', 42),
('ro', 'fizioterapie_reabilitare_007', 'FIZIOTERAPIE ȘI REABILITARE', 'Reabilitare echilibrată și coordonată', '250 MDL', '', 43),
('en', 'fizioterapie_reabilitare_007', 'PHYSIOTHERAPY AND REHABILITATION', 'Reabilitare echilibrată și coordonată', '250 MDL', '', 43),
('ru', 'fizioterapie_reabilitare_007', 'ФИЗИОТЕРАПИЯ И РЕАБИЛИТАЦИЯ', 'Reabilitare echilibrată și coordonată', '250 MDL', '', 43),
('ua', 'fizioterapie_reabilitare_007', 'ФІЗІОТЕРАПІЯ ТА РЕАБІЛІТАЦІЯ', 'Reabilitare echilibrată și coordonată', '250 MDL', '', 43),
('ro', 'terapie_balneara_001', 'TERAPIE BALNEARĂ', 'Băi curative cu nămol', '150 MDL/sesiune', '', 44),
('en', 'terapie_balneara_001', 'BALNEOTHERAPY', 'Băi curative cu nămol', '150 MDL/sesiune', '', 44),
('ru', 'terapie_balneara_001', 'БАЛЬНЕОТЕРАПИЯ', 'Băi curative cu nămol', '150 MDL/sesiune', '', 44),
('ua', 'terapie_balneara_001', 'БАЛЬНЕОТЕРАПІЯ', 'Băi curative cu nămol', '150 MDL/sesiune', '', 44),
('ro', 'terapie_balneara_002', 'TERAPIE BALNEARĂ', 'Hidroterapie', '200 MDL/oră', '', 45),
('en', 'terapie_balneara_002', 'BALNEOTHERAPY', 'Hidroterapie', '200 MDL/oră', '', 45),
('ru', 'terapie_balneara_002', 'БАЛЬНЕОТЕРАПИЯ', 'Hidroterapie', '200 MDL/oră', '', 45),
('ua', 'terapie_balneara_002', 'БАЛЬНЕОТЕРАПІЯ', 'Hidroterapie', '200 MDL/oră', '', 45),
('ro', 'terapie_balneara_003', 'TERAPIE BALNEARĂ', 'Sauna terapeutică', '250 MDL/oră', '', 46),
('en', 'terapie_balneara_003', 'BALNEOTHERAPY', 'Sauna terapeutică', '250 MDL/oră', '', 46),
('ru', 'terapie_balneara_003', 'БАЛЬНЕОТЕРАПИЯ', 'Sauna terapeutică', '250 MDL/oră', '', 46),
('ua', 'terapie_balneara_003', 'БАЛЬНЕОТЕРАПІЯ', 'Sauna terapeutică', '250 MDL/oră', '', 46),
('ro', 'terapie_balneara_004', 'TERAPIE BALNEARĂ', 'Masaj cu nămol 60 min', '300 MDL', '', 47),
('en', 'terapie_balneara_004', 'BALNEOTHERAPY', 'Masaj cu nămol 60 min', '300 MDL', '', 47),
('ru', 'terapie_balneara_004', 'БАЛЬНЕОТЕРАПИЯ', 'Masaj cu nămol 60 min', '300 MDL', '', 47),
('ua', 'terapie_balneara_004', 'БАЛЬНЕОТЕРАПІЯ', 'Masaj cu nămol 60 min', '300 MDL', '', 47),
('ro', 'terapie_balneara_005', 'TERAPIE BALNEARĂ', 'Terapie cu vitamine și minerale', '350 MDL/oră', '', 48),
('en', 'terapie_balneara_005', 'BALNEOTHERAPY', 'Terapie cu vitamine și minerale', '350 MDL/oră', '', 48),
('ru', 'terapie_balneara_005', 'БАЛЬНЕОТЕРАПИЯ', 'Terapie cu vitamine și minerale', '350 MDL/oră', '', 48),
('ua', 'terapie_balneara_005', 'БАЛЬНЕОТЕРАПІЯ', 'Terapie cu vitamine și minerale', '350 MDL/oră', '', 48),
('ro', 'terapie_balneara_006', 'TERAPIE BALNEARĂ', 'Tratament combinat hidroterapie + masaj', '400 MDL/oră', '', 49),
('en', 'terapie_balneara_006', 'BALNEOTHERAPY', 'Tratament combinat hidroterapie + masaj', '400 MDL/oră', '', 49),
('ru', 'terapie_balneara_006', 'БАЛЬНЕОТЕРАПИЯ', 'Tratament combinat hidroterapie + masaj', '400 MDL/oră', '', 49),
('ua', 'terapie_balneara_006', 'БАЛЬНЕОТЕРАПІЯ', 'Tratament combinat hidroterapie + masaj', '400 MDL/oră', '', 49),
('ro', 'electroterapie_001', 'ELECTROTERAPIE', 'Electrostimulare musculară', '150 MDL/oră', '', 50),
('en', 'electroterapie_001', 'ELECTROTHERAPY', 'Electrostimulare musculară', '150 MDL/oră', '', 50),
('ru', 'electroterapie_001', 'ЭЛЕКТРОТЕРАПИЯ', 'Electrostimulare musculară', '150 MDL/oră', '', 50),
('ua', 'electroterapie_001', 'ЕЛЕКТРОТЕРАПІЯ', 'Electrostimulare musculară', '150 MDL/oră', '', 50),
('ro', 'electroterapie_002', 'ELECTROTERAPIE', 'Electroneurostimulare', '150 MDL/oră', '', 51),
('en', 'electroterapie_002', 'ELECTROTHERAPY', 'Electroneurostimulare', '150 MDL/oră', '', 51),
('ru', 'electroterapie_002', 'ЭЛЕКТРОТЕРАПИЯ', 'Electroneurostimulare', '150 MDL/oră', '', 51),
('ua', 'electroterapie_002', 'ЕЛЕКТРОТЕРАПІЯ', 'Electroneurostimulare', '150 MDL/oră', '', 51),
('ro', 'electroterapie_003', 'ELECTROTERAPIE', 'Electroterapie combinată', '200 MDL/oră', '', 52),
('en', 'electroterapie_003', 'ELECTROTHERAPY', 'Electroterapie combinată', '200 MDL/oră', '', 52),
('ru', 'electroterapie_003', 'ЭЛЕКТРОТЕРАПИЯ', 'Electroterapie combinată', '200 MDL/oră', '', 52),
('ua', 'electroterapie_003', 'ЕЛЕКТРОТЕРАПІЯ', 'Electroterapie combinată', '200 MDL/oră', '', 52),
('ro', 'electroterapie_004', 'ELECTROTERAPIE', 'Terapie cu ultrasunete 30 min', '180 MDL', '', 53),
('en', 'electroterapie_004', 'ELECTROTHERAPY', 'Terapie cu ultrasunete 30 min', '180 MDL', '', 53),
('ru', 'electroterapie_004', 'ЭЛЕКТРОТЕРАПИЯ', 'Terapie cu ultrasunete 30 min', '180 MDL', '', 53),
('ua', 'electroterapie_004', 'ЕЛЕКТРОТЕРАПІЯ', 'Terapie cu ultrasunete 30 min', '180 MDL', '', 53),
('ro', 'electroterapie_005', 'ELECTROTERAPIE', 'Terapie cu curenți alternanți', '150 MDL/oră', '', 54),
('en', 'electroterapie_005', 'ELECTROTHERAPY', 'Terapie cu curenți alternanți', '150 MDL/oră', '', 54),
('ru', 'electroterapie_005', 'ЭЛЕКТРОТЕРАПИЯ', 'Terapie cu curenți alternanți', '150 MDL/oră', '', 54),
('ua', 'electroterapie_005', 'ЕЛЕКТРОТЕРАПІЯ', 'Terapie cu curenți alternanți', '150 MDL/oră', '', 54),
('ro', 'electroterapie_006', 'ELECTROTERAPIE', 'Terapie cu curenți continui', '150 MDL/oră', '', 55),
('en', 'electroterapie_006', 'ELECTROTHERAPY', 'Terapie cu curenți continui', '150 MDL/oră', '', 55),
('ru', 'electroterapie_006', 'ЭЛЕКТРОТЕРАПИЯ', 'Terapie cu curenți continui', '150 MDL/oră', '', 55),
('ua', 'electroterapie_006', 'ЕЛЕКТРОТЕРАПІЯ', 'Terapie cu curenți continui', '150 MDL/oră', '', 55),
('ro', 'echipamente_metode_001', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Băi curative cu nămol din SAKI, Hidrosulfurică, cu magneziu, IodoBrom, Turbintina, extract de pin, băi de slăbit', '150 MDL/sesiune', '', 56),
('en', 'echipamente_metode_001', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Băi curative cu nămol din SAKI, Hidrosulfurică, cu magneziu, IodoBrom, Turbintina, extract de pin, băi de slăbit', '150 MDL/sesiune', '', 56),
('ru', 'echipamente_metode_001', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Băi curative cu nămol din SAKI, Hidrosulfurică, cu magneziu, IodoBrom, Turbintina, extract de pin, băi de slăbit', '150 MDL/sesiune', '', 56),
('ua', 'echipamente_metode_001', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Băi curative cu nămol din SAKI, Hidrosulfurică, cu magneziu, IodoBrom, Turbintina, extract de pin, băi de slăbit', '150 MDL/sesiune', '', 56),
('ro', 'echipamente_metode_002', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Aeroionoterapia în peștera de sare', '100 MDL/oră', '', 57),
('en', 'echipamente_metode_002', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Aeroionoterapia în peștera de sare', '100 MDL/oră', '', 57),
('ru', 'echipamente_metode_002', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Aeroionoterapia în peștera de sare', '100 MDL/oră', '', 57),
('ua', 'echipamente_metode_002', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Aeroionoterapia în peștera de sare', '100 MDL/oră', '', 57),
('ro', 'echipamente_metode_003', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Sauna curativă cu plante', '250 MDL/oră', '', 58),
('en', 'echipamente_metode_003', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Sauna curativă cu plante', '250 MDL/oră', '', 58),
('ru', 'echipamente_metode_003', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Sauna curativă cu plante', '250 MDL/oră', '', 58),
('ua', 'echipamente_metode_003', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Sauna curativă cu plante', '250 MDL/oră', '', 58),
('ro', 'echipamente_metode_004', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Fizioterapie + Naturoterapie', '150 MDL/oră', '', 59),
('en', 'echipamente_metode_004', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Fizioterapie + Naturoterapie', '150 MDL/oră', '', 59),
('ru', 'echipamente_metode_004', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Fizioterapie + Naturoterapie', '150 MDL/oră', '', 59),
('ua', 'echipamente_metode_004', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Fizioterapie + Naturoterapie', '150 MDL/oră', '', 59),
('ro', 'echipamente_metode_005', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Vibro-masaj cranial', '150 MDL/oră', '', 60),
('en', 'echipamente_metode_005', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Vibro-masaj cranial', '150 MDL/oră', '', 60),
('ru', 'echipamente_metode_005', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Vibro-masaj cranial', '150 MDL/oră', '', 60),
('ua', 'echipamente_metode_005', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Vibro-masaj cranial', '150 MDL/oră', '', 60),
('ro', 'echipamente_metode_006', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Instructor Visus computerizat', '150 MDL/oră', '', 61),
('en', 'echipamente_metode_006', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Instructor Visus computerizat', '150 MDL/oră', '', 61),
('ru', 'echipamente_metode_006', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Instructor Visus computerizat', '150 MDL/oră', '', 61),
('ua', 'echipamente_metode_006', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Instructor Visus computerizat', '150 MDL/oră', '', 61),
('ro', 'echipamente_metode_007', 'ECHIPAMENTE ȘI METODE CURATIVE', 'AVS stimularea creierului audio-video cu alfa, beta, theta', '150 MDL/oră', '', 62),
('en', 'echipamente_metode_007', 'THERAPEUTIC EQUIPMENT AND METHODS', 'AVS stimularea creierului audio-video cu alfa, beta, theta', '150 MDL/oră', '', 62),
('ru', 'echipamente_metode_007', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'AVS stimularea creierului audio-video cu alfa, beta, theta', '150 MDL/oră', '', 62),
('ua', 'echipamente_metode_007', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'AVS stimularea creierului audio-video cu alfa, beta, theta', '150 MDL/oră', '', 62),
('ro', 'echipamente_metode_008', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Darsanvalizare', '150 MDL/oră', '', 63),
('en', 'echipamente_metode_008', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Darsanvalizare', '150 MDL/oră', '', 63),
('ru', 'echipamente_metode_008', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Darsanvalizare', '150 MDL/oră', '', 63),
('ua', 'echipamente_metode_008', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Darsanvalizare', '150 MDL/oră', '', 63),
('ro', 'echipamente_metode_009', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Ozonoterapia', '150 MDL/oră', '', 64),
('en', 'echipamente_metode_009', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Ozonoterapia', '150 MDL/oră', '', 64),
('ru', 'echipamente_metode_009', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Ozonoterapia', '150 MDL/oră', '', 64),
('ua', 'echipamente_metode_009', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Ozonoterapia', '150 MDL/oră', '', 64),
('ro', 'echipamente_metode_010', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Electropunctură-Subosi', '150 MDL/oră', '', 65),
('en', 'echipamente_metode_010', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Electropunctură-Subosi', '150 MDL/oră', '', 65),
('ru', 'echipamente_metode_010', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Electropunctură-Subosi', '150 MDL/oră', '', 65),
('ua', 'echipamente_metode_010', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Electropunctură-Subosi', '150 MDL/oră', '', 65),
('ro', 'echipamente_metode_011', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Magnetoterapie', '150 MDL/oră', '', 66),
('en', 'echipamente_metode_011', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Magnetoterapie', '150 MDL/oră', '', 66),
('ru', 'echipamente_metode_011', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Magnetoterapie', '150 MDL/oră', '', 66),
('ua', 'echipamente_metode_011', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Magnetoterapie', '150 MDL/oră', '', 66),
('ro', 'echipamente_metode_012', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Masaj KDJ', '150 MDL/oră', '', 67),
('en', 'echipamente_metode_012', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Masaj KDJ', '150 MDL/oră', '', 67),
('ru', 'echipamente_metode_012', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Masaj KDJ', '150 MDL/oră', '', 67),
('ua', 'echipamente_metode_012', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Masaj KDJ', '150 MDL/oră', '', 67),
('ro', 'echipamente_metode_013', 'ECHIPAMENTE ȘI METODE CURATIVE', 'JAD-masaj pat cu pietre de jad', '150 MDL/oră', '', 68),
('en', 'echipamente_metode_013', 'THERAPEUTIC EQUIPMENT AND METHODS', 'JAD-masaj pat cu pietre de jad', '150 MDL/oră', '', 68),
('ru', 'echipamente_metode_013', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'JAD-masaj pat cu pietre de jad', '150 MDL/oră', '', 68),
('ua', 'echipamente_metode_013', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'JAD-masaj pat cu pietre de jad', '150 MDL/oră', '', 68),
('ro', 'echipamente_metode_014', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Vibromasaj de relaxare', '150 MDL/oră', '', 69),
('en', 'echipamente_metode_014', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Vibromasaj de relaxare', '150 MDL/oră', '', 69),
('ru', 'echipamente_metode_014', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Vibromasaj de relaxare', '150 MDL/oră', '', 69),
('ua', 'echipamente_metode_014', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Vibromasaj de relaxare', '150 MDL/oră', '', 69),
('ro', 'echipamente_metode_015', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Electroneurostimulare', '150 MDL/oră', '', 70),
('en', 'echipamente_metode_015', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Electroneurostimulare', '150 MDL/oră', '', 70),
('ru', 'echipamente_metode_015', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Electroneurostimulare', '150 MDL/oră', '', 70),
('ua', 'echipamente_metode_015', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Electroneurostimulare', '150 MDL/oră', '', 70),
('ro', 'echipamente_metode_016', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Fototerapie / Cromoterapie', '60 MDL', '', 71),
('en', 'echipamente_metode_016', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Fototerapie / Cromoterapie', '60 MDL', '', 71),
('ru', 'echipamente_metode_016', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Fototerapie / Cromoterapie', '60 MDL', '', 71),
('ua', 'echipamente_metode_016', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Fototerapie / Cromoterapie', '60 MDL', '', 71),
('ro', 'echipamente_metode_017', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Radamir-3 FRI program cu frecvențe de biorezonanță revitalizare', '150 MDL/oră', '', 72),
('en', 'echipamente_metode_017', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Radamir-3 FRI program cu frecvențe de biorezonanță revitalizare', '150 MDL/oră', '', 72),
('ru', 'echipamente_metode_017', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Radamir-3 FRI program cu frecvențe de biorezonanță revitalizare', '150 MDL/oră', '', 72),
('ua', 'echipamente_metode_017', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Radamir-3 FRI program cu frecvențe de biorezonanță revitalizare', '150 MDL/oră', '', 72),
('ro', 'echipamente_metode_018', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Radamir-4 CVC program de frecvență a biorezonanței antiparazitare', '150 MDL/oră', '', 73),
('en', 'echipamente_metode_018', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Radamir-4 CVC program de frecvență a biorezonanței antiparazitare', '150 MDL/oră', '', 73),
('ru', 'echipamente_metode_018', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Radamir-4 CVC program de frecvență a biorezonanței antiparazitare', '150 MDL/oră', '', 73),
('ua', 'echipamente_metode_018', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Radamir-4 CVC program de frecvență a biorezonanței antiparazitare', '150 MDL/oră', '', 73),
('ro', 'echipamente_metode_019', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Raze infraroșii + ultraviolete', '60 MDL', '', 74),
('en', 'echipamente_metode_019', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Raze infraroșii + ultraviolete', '60 MDL', '', 74),
('ru', 'echipamente_metode_019', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Raze infraroșii + ultraviolete', '60 MDL', '', 74),
('ua', 'echipamente_metode_019', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Raze infraroșii + ultraviolete', '60 MDL', '', 74),
('ro', 'echipamente_metode_020', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Electroforeză medicală', '150 MDL/oră', '', 75),
('en', 'echipamente_metode_020', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Electroforeză medicală', '150 MDL/oră', '', 75),
('ru', 'echipamente_metode_020', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Electroforeză medicală', '150 MDL/oră', '', 75),
('ua', 'echipamente_metode_020', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Electroforeză medicală', '150 MDL/oră', '', 75),
('ro', 'echipamente_metode_021', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Vibrofonoterapie Vitafon', '150 MDL/oră', '', 76),
('en', 'echipamente_metode_021', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Vibrofonoterapie Vitafon', '150 MDL/oră', '', 76),
('ru', 'echipamente_metode_021', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Vibrofonoterapie Vitafon', '150 MDL/oră', '', 76),
('ua', 'echipamente_metode_021', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Vibrofonoterapie Vitafon', '150 MDL/oră', '', 76),
('ro', 'echipamente_metode_022', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Electroacupunctură', '150 MDL/oră', '', 77),
('en', 'echipamente_metode_022', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Electroacupunctură', '150 MDL/oră', '', 77),
('ru', 'echipamente_metode_022', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Electroacupunctură', '150 MDL/oră', '', 77),
('ua', 'echipamente_metode_022', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Electroacupunctură', '150 MDL/oră', '', 77),
('ro', 'echipamente_metode_023', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Electrosomn', '150 MDL/oră', '', 78),
('en', 'echipamente_metode_023', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Electrosomn', '150 MDL/oră', '', 78),
('ru', 'echipamente_metode_023', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Electrosomn', '150 MDL/oră', '', 78),
('ua', 'echipamente_metode_023', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Electrosomn', '150 MDL/oră', '', 78),
('ro', 'echipamente_metode_024', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Fototerapie Bioptron', '150 MDL/oră', '', 79),
('en', 'echipamente_metode_024', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Fototerapie Bioptron', '150 MDL/oră', '', 79),
('ru', 'echipamente_metode_024', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Fototerapie Bioptron', '150 MDL/oră', '', 79),
('ua', 'echipamente_metode_024', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Fototerapie Bioptron', '150 MDL/oră', '', 79),
('ro', 'echipamente_metode_025', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Farmacopunctură / Mezoterapie', '100 MDL', '', 80),
('en', 'echipamente_metode_025', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Farmacopunctură / Mezoterapie', '100 MDL', '', 80),
('ru', 'echipamente_metode_025', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Farmacopunctură / Mezoterapie', '100 MDL', '', 80),
('ua', 'echipamente_metode_025', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Farmacopunctură / Mezoterapie', '100 MDL', '', 80),
('ro', 'echipamente_metode_026', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Electrostimulare plantară LANAFORM', '150 MDL/oră', '', 81),
('en', 'echipamente_metode_026', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Electrostimulare plantară LANAFORM', '150 MDL/oră', '', 81),
('ru', 'echipamente_metode_026', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Electrostimulare plantară LANAFORM', '150 MDL/oră', '', 81),
('ua', 'echipamente_metode_026', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Electrostimulare plantară LANAFORM', '150 MDL/oră', '', 81),
('ro', 'echipamente_metode_027', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Masajul plantar Vibro-Infraroșu', '150 MDL/oră', '', 82),
('en', 'echipamente_metode_027', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Masajul plantar Vibro-Infraroșu', '150 MDL/oră', '', 82),
('ru', 'echipamente_metode_027', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Masajul plantar Vibro-Infraroșu', '150 MDL/oră', '', 82),
('ua', 'echipamente_metode_027', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Masajul plantar Vibro-Infraroșu', '150 MDL/oră', '', 82),
('ro', 'echipamente_metode_028', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Acupunctura auriculară', '100 MDL/sesiune', '', 83),
('en', 'echipamente_metode_028', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Acupunctura auriculară', '100 MDL/sesiune', '', 83),
('ru', 'echipamente_metode_028', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Acupunctura auriculară', '100 MDL/sesiune', '', 83),
('ua', 'echipamente_metode_028', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Acupunctura auriculară', '100 MDL/sesiune', '', 83),
('ro', 'echipamente_metode_029', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Acupunctura corporală', '150 MDL/sesiune', '', 84),
('en', 'echipamente_metode_029', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Acupunctura corporală', '150 MDL/sesiune', '', 84),
('ru', 'echipamente_metode_029', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Acupunctura corporală', '150 MDL/sesiune', '', 84),
('ua', 'echipamente_metode_029', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Acupunctura corporală', '150 MDL/sesiune', '', 84),
('ro', 'echipamente_metode_030', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Terapia cu laser', '150 MDL/oră', '', 85),
('en', 'echipamente_metode_030', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Terapia cu laser', '150 MDL/oră', '', 85),
('ru', 'echipamente_metode_030', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Terapia cu laser', '150 MDL/oră', '', 85),
('ua', 'echipamente_metode_030', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Terapia cu laser', '150 MDL/oră', '', 85),
('ro', 'echipamente_metode_031', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Masaj general', '200 MDL/60 min', '', 86),
('en', 'echipamente_metode_031', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Masaj general', '200 MDL/60 min', '', 86),
('ru', 'echipamente_metode_031', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Masaj general', '200 MDL/60 min', '', 86),
('ua', 'echipamente_metode_031', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Masaj general', '200 MDL/60 min', '', 86),
('ro', 'echipamente_metode_032', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Terapia cu ultrasunete', '150 MDL/oră', '', 87),
('en', 'echipamente_metode_032', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Terapia cu ultrasunete', '150 MDL/oră', '', 87),
('ru', 'echipamente_metode_032', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Terapia cu ultrasunete', '150 MDL/oră', '', 87),
('ua', 'echipamente_metode_032', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Terapia cu ultrasunete', '150 MDL/oră', '', 87),
('ro', 'echipamente_metode_033', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Terapia Fotocataliza magnetică', '150 MDL/oră', '', 88),
('en', 'echipamente_metode_033', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Terapia Fotocataliza magnetică', '150 MDL/oră', '', 88),
('ru', 'echipamente_metode_033', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Terapia Fotocataliza magnetică', '150 MDL/oră', '', 88),
('ua', 'echipamente_metode_033', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Terapia Fotocataliza magnetică', '150 MDL/oră', '', 88),
('ro', 'echipamente_metode_034', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Detoxifierea organismului ION-DETOX', '250 MDL', '', 89),
('en', 'echipamente_metode_034', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Detoxifierea organismului ION-DETOX', '250 MDL', '', 89),
('ru', 'echipamente_metode_034', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Detoxifierea organismului ION-DETOX', '250 MDL', '', 89),
('ua', 'echipamente_metode_034', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Detoxifierea organismului ION-DETOX', '250 MDL', '', 89),
('ro', 'echipamente_metode_035', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Terapia cu Amplipuls', '150 MDL/oră', '', 90),
('en', 'echipamente_metode_035', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Terapia cu Amplipuls', '150 MDL/oră', '', 90),
('ru', 'echipamente_metode_035', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Terapia cu Amplipuls', '150 MDL/oră', '', 90),
('ua', 'echipamente_metode_035', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Terapia cu Amplipuls', '150 MDL/oră', '', 90),
('ro', 'echipamente_metode_036', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Electrostimulare mezodiencefalică transcraniană', '150 MDL/oră', '', 91),
('en', 'echipamente_metode_036', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Electrostimulare mezodiencefalică transcraniană', '150 MDL/oră', '', 91),
('ru', 'echipamente_metode_036', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Electrostimulare mezodiencefalică transcraniană', '150 MDL/oră', '', 91),
('ua', 'echipamente_metode_036', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Electrostimulare mezodiencefalică transcraniană', '150 MDL/oră', '', 91),
('ro', 'echipamente_metode_037', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Terapie combinată magnetoterapie + acupunctură', '200 MDL/oră', '', 92),
('en', 'echipamente_metode_037', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Terapie combinată magnetoterapie + acupunctură', '200 MDL/oră', '', 92),
('ru', 'echipamente_metode_037', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Terapie combinată magnetoterapie + acupunctură', '200 MDL/oră', '', 92),
('ua', 'echipamente_metode_037', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Terapie combinată magnetoterapie + acupunctură', '200 MDL/oră', '', 92),
('ro', 'echipamente_metode_038', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Biofeedback pentru controlul stresului', '180 MDL/oră', '', 93),
('en', 'echipamente_metode_038', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Biofeedback pentru controlul stresului', '180 MDL/oră', '', 93),
('ru', 'echipamente_metode_038', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Biofeedback pentru controlul stresului', '180 MDL/oră', '', 93),
('ua', 'echipamente_metode_038', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Biofeedback pentru controlul stresului', '180 MDL/oră', '', 93),
('ro', 'echipamente_metode_039', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Masaj terapeutic profund', '220 MDL/oră', '', 94),
('en', 'echipamente_metode_039', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Masaj terapeutic profund', '220 MDL/oră', '', 94),
('ru', 'echipamente_metode_039', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Masaj terapeutic profund', '220 MDL/oră', '', 94),
('ua', 'echipamente_metode_039', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Masaj terapeutic profund', '220 MDL/oră', '', 94),
('ro', 'echipamente_metode_040', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Terapie cu vibrații', '160 MDL/oră', '', 95),
('en', 'echipamente_metode_040', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Terapie cu vibrații', '160 MDL/oră', '', 95),
('ru', 'echipamente_metode_040', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Terapie cu vibrații', '160 MDL/oră', '', 95),
('ua', 'echipamente_metode_040', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Terapie cu vibrații', '160 MDL/oră', '', 95),
('ro', 'echipamente_metode_041', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Programe de reabilitare neuro-motorie', '300 MDL/oră', '', 96),
('en', 'echipamente_metode_041', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Programe de reabilitare neuro-motorie', '300 MDL/oră', '', 96),
('ru', 'echipamente_metode_041', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Programe de reabilitare neuro-motorie', '300 MDL/oră', '', 96),
('ua', 'echipamente_metode_041', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Programe de reabilitare neuro-motorie', '300 MDL/oră', '', 96),
('ro', 'echipamente_metode_042', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Tratament combinat electroterapie + kinetoterapie', '250 MDL/oră', '', 97),
('en', 'echipamente_metode_042', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Tratament combinat electroterapie + kinetoterapie', '250 MDL/oră', '', 97),
('ru', 'echipamente_metode_042', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Tratament combinat electroterapie + kinetoterapie', '250 MDL/oră', '', 97),
('ua', 'echipamente_metode_042', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Tratament combinat electroterapie + kinetoterapie', '250 MDL/oră', '', 97),
('ro', 'echipamente_metode_043', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Terapie cu frecvențe de biorezonanță', '150 MDL/oră', '', 98),
('en', 'echipamente_metode_043', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Terapie cu frecvențe de biorezonanță', '150 MDL/oră', '', 98),
('ru', 'echipamente_metode_043', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Terapie cu frecvențe de biorezonanță', '150 MDL/oră', '', 98),
('ua', 'echipamente_metode_043', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Terapie cu frecvențe de biorezonanță', '150 MDL/oră', '', 98),
('ro', 'echipamente_metode_044', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Electroterapie integrată', '200 MDL/oră', '', 99),
('en', 'echipamente_metode_044', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Electroterapie integrată', '200 MDL/oră', '', 99),
('ru', 'echipamente_metode_044', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Electroterapie integrată', '200 MDL/oră', '', 99),
('ua', 'echipamente_metode_044', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Electroterapie integrată', '200 MDL/oră', '', 99),
('ro', 'echipamente_metode_045', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Reabilitare cu tehnologie avansată', '300 MDL/oră', '', 100),
('en', 'echipamente_metode_045', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Reabilitare cu tehnologie avansată', '300 MDL/oră', '', 100),
('ru', 'echipamente_metode_045', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Reabilitare cu tehnologie avansată', '300 MDL/oră', '', 100),
('ua', 'echipamente_metode_045', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Reabilitare cu tehnologie avansată', '300 MDL/oră', '', 100),
('ro', 'echipamente_metode_046', 'ECHIPAMENTE ȘI METODE CURATIVE', 'Programe personalizate de recuperare', '350 MDL/oră', '', 101),
('en', 'echipamente_metode_046', 'THERAPEUTIC EQUIPMENT AND METHODS', 'Programe personalizate de recuperare', '350 MDL/oră', '', 101),
('ru', 'echipamente_metode_046', 'ЛЕЧЕБНОЕ ОБОРУДОВАНИЕ И МЕТОДЫ', 'Programe personalizate de recuperare', '350 MDL/oră', '', 101),
('ua', 'echipamente_metode_046', 'ЛІКУВАЛЬНЕ ОБЛАДНАННЯ ТА МЕТОДИ', 'Programe personalizate de recuperare', '350 MDL/oră', '', 101);

DELETE FROM prices
WHERE lower(service) LIKE '%electromiografie%'
   OR lower(service) LIKE '%emg%'
   OR lower(service) LIKE '%imagistică irm%'
   OR lower(service) LIKE '%imagistica irm%'
   OR lower(service) LIKE '%tomografie ct%';
`);
// FULL_PRICE_LIST_2026_05_END

export function getAllPrices(lang?: Lang) {
 if (lang) return db.prepare("SELECT * FROM prices WHERE lang = ? ORDER BY position ASC, id ASC").all(lang) as Price[];
 return db.prepare("SELECT * FROM prices ORDER BY lang ASC, position ASC, id ASC").all() as Price[];
}

export function getPublishedPrices(lang: Lang = "ro") {
 return db.prepare("SELECT * FROM prices WHERE published = 1 AND lang = ? ORDER BY position ASC, id ASC").all(lang) as Price[];
}

export function getAllServicesAdmin(lang?: Lang) {
 if (lang) return db.prepare("SELECT * FROM services_admin WHERE lang = ? ORDER BY position ASC, id ASC").all(lang) as ServiceAdmin[];
 return db.prepare("SELECT * FROM services_admin ORDER BY lang ASC, position ASC, id ASC").all() as ServiceAdmin[];
}

export function getPublishedServicesAdmin(lang: Lang = "ro") {
 return db.prepare("SELECT * FROM services_admin WHERE published = 1 AND lang = ? ORDER BY position ASC, id ASC").all(lang) as ServiceAdmin[];
}

export function getServiceBySlug(slug: string, lang: Lang = "ro") {
 return db.prepare("SELECT * FROM services_admin WHERE slug = ? AND lang = ? AND published = 1").get(slug, lang) as ServiceAdmin | undefined;
}


export type GalleryItem = {
 id: number;
 lang: Lang;
 image: string;
 title: string;
 alt: string;
 position: number;
 published: number;
 created_at: string;
 edited_at: string;
};

const galleryCount = db.prepare("SELECT COUNT(*) as c FROM gallery_items").get() as { c: number };
if (galleryCount.c === 0) {
 const insertGallery = db.prepare(`
  INSERT INTO gallery_items (lang, image, title, alt, position, published)
  VALUES ('ro', ?, ?, ?, ?, 1)
 `);

 [
  ["/images/2pic.jpg", "Recepție Revimed PLUS+", "Recepție și spațiu de așteptare Revimed PLUS+", 1],
  ["/images/1pic.jpg", "Angajați prietenoși", "Echipă prietenoasă Revimed PLUS+", 2],
  ["/images/3.jpg", "Reabilitare medicală", "Proceduri de reabilitare medicală", 3],
  ["/images/pre.jpg", "Sală de terapie", "Spațiu pentru terapie și recuperare", 4],
  ["/images/pre1.jpg", "Proceduri terapeutice", "Proceduri medicale și recuperare", 5],
  ["/images/31.jpg", "Doctor Igor Revenco", "Doctor Igor Revenco - Centrul Medical Revimed PLUS+", 6]
 ].forEach((row) => insertGallery.run(...row));
}

export function getAllGalleryItems(lang?: Lang) {
 if (lang) return db.prepare("SELECT * FROM gallery_items WHERE lang = ? ORDER BY position ASC, id ASC").all(lang) as GalleryItem[];
 return db.prepare("SELECT * FROM gallery_items ORDER BY lang ASC, position ASC, id ASC").all() as GalleryItem[];
}

export function getPublishedGalleryItems(lang: Lang = "ro") {
 return db.prepare("SELECT * FROM gallery_items WHERE lang = ? AND published = 1 ORDER BY position ASC, id ASC").all(lang) as GalleryItem[];
}

export function getPublishedPostsSmart(lang: Lang = "ro") {
  return db
    .prepare("SELECT * FROM posts WHERE published = 1 AND lang = ? ORDER BY id DESC")
    .all(lang) as any[];
}

export function getAllPostsSmart(lang: Lang = "ro") {
 const rows = getAllPosts(lang);
 if (rows.length || lang === "ro") return rows;
 return getAllPosts("ro");
}

export function getPostBySlugSmart(slug: string, lang: Lang = "ro") {
  return db
    .prepare("SELECT * FROM posts WHERE published = 1 AND slug = ? AND lang = ? LIMIT 1")
    .get(slug, lang) as any | null;
}

export function getPublishedPricesSmart(lang: Lang = "ro") {
 const rows = getPublishedPrices(lang);
 if (rows.length || lang === "ro") return rows;
 return getPublishedPrices("ro");
}

export function getPublishedServicesSmart(lang: Lang = "ro") {
 const rows = getPublishedServicesAdmin(lang);
 if (rows.length || lang === "ro") return rows;
 return getPublishedServicesAdmin("ro");
}

export function getServiceBySlugSmart(slug: string, lang: Lang = "ro") {
 return getServiceBySlug(slug, lang) || getServiceBySlug(slug, "ro");
}

const iconMigrationMap: Record<string, string> = {
 "🧠": "https://img.icons8.com/color/96/brain.png",
 "⚕️": "https://img.icons8.com/color/96/medical-doctor.png",
 "🏃": "https://img.icons8.com/color/96/physical-therapy.png",
 "💓": "https://img.icons8.com/color/96/heart-health.png",
 "🌿": "https://img.icons8.com/color/96/spa.png",
 "🎵": "https://img.icons8.com/color/96/electrical.png"
};

try {
 const updateIcon = db.prepare("UPDATE services_admin SET icon = ? WHERE icon = ?");
 for (const [emoji, iconUrl] of Object.entries(iconMigrationMap)) {
  updateIcon.run(iconUrl, emoji);
 }
} catch {}

try {
 db.prepare("UPDATE services_admin SET icon = ? WHERE icon = ?").run(
  "https://img.icons8.com/color/96/electrical.png",
  "https://img.icons8.com/color/96/electrotherapy.png"
 );
} catch {}
