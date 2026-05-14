const Database = require("better-sqlite3");
const path = require("path");
const fs = require("fs");

const dbPath = path.join(process.cwd(), "data", "revimed.sqlite");
if (!fs.existsSync(dbPath)) {
  console.log("No SQLite DB found, skipping DB gallery labels.");
  process.exit(0);
}

const db = new Database(dbPath);
const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all().map((r) => r.name);
const table = tables.find((t) => ["gallery", "gallery_items", "site_gallery"].includes(t));

if (!table) {
  console.log("No gallery table found, skipping DB gallery labels.");
  db.close();
  process.exit(0);
}

const cols = db.prepare(`PRAGMA table_info(${table})`).all().map((c) => c.name);
const has = (c) => cols.includes(c);

const titleCol = ["title", "name", "label"].find(has);
const altCol = ["alt", "alt_text"].find(has);
const imageCol = ["image", "src", "url", "image_url"].find(has);
const langCol = ["lang", "language", "locale"].find(has);

if (!titleCol || !imageCol) {
  console.log("Gallery table missing title/image columns, skipping.");
  db.close();
  process.exit(0);
}

const labels = {
  ro: {
    reception: "Recepție Revimed PLUS+",
    friendly_staff: "Angajați prietenoși",
    rehabilitation: "Reabilitare medicală",
    therapeutic_procedures: "Proceduri terapeutice",
    doctor_igor_revenco: "Doctor Igor Revenco",
    therapy_room: "Sală de terapie"
  },
  en: {
    reception: "Revimed PLUS+ Reception",
    friendly_staff: "Friendly Staff",
    rehabilitation: "Medical Rehabilitation",
    therapeutic_procedures: "Therapeutic Procedures",
    doctor_igor_revenco: "Doctor Igor Revenco",
    therapy_room: "Therapy Room"
  },
  ru: {
    reception: "Ресепшн Revimed PLUS+",
    friendly_staff: "Дружелюбный персонал",
    rehabilitation: "Медицинская реабилитация",
    therapeutic_procedures: "Терапевтические процедуры",
    doctor_igor_revenco: "Доктор Игорь Ревенко",
    therapy_room: "Терапевтический зал"
  },
  ua: {
    reception: "Рецепція Revimed PLUS+",
    friendly_staff: "Дружній персонал",
    rehabilitation: "Медична реабілітація",
    therapeutic_procedures: "Терапевтичні процедури",
    doctor_igor_revenco: "Доктор Ігор Ревенко",
    therapy_room: "Терапевтична зала"
  }
};

function keyFrom(row) {
  const image = String(row[imageCol] || "").split("/").pop().toLowerCase();
  const title = String(row[titleCol] || "").toLowerCase();

  if (image.includes("1pic") || image === "1.jpg" || title.includes("recep") || title.includes("recept")) return "reception";
  if (image.includes("3pic") || image === "2.jpg" || title.includes("consulta") || title.includes("consult")) return "friendly_staff";
  if (image.includes("4pic") || image === "3.jpg" || title.includes("reabilitare") || title.includes("rehabilitation")) return "rehabilitation";
  if (image.includes("5pic") || image === "4.jpg" || title.includes("proced")) return "therapeutic_procedures";
  if (image.includes("6pic") || image === "5.jpg" || title.includes("cabinet") || title.includes("clinic") || title.includes("clinici")) return "doctor_igor_revenco";
  if (image.includes("2pic") || image === "6.jpg" || title.includes("terapie") || title.includes("facilit")) return "therapy_room";

  return null;
}

const rows = db.prepare(`SELECT * FROM ${table}`).all();
const setCols = altCol ? `${titleCol}=?, ${altCol}=?` : `${titleCol}=?`;
const update = db.prepare(`UPDATE ${table} SET ${setCols} WHERE id=?`);

for (const row of rows) {
  const key = keyFrom(row);
  if (!key) continue;

  const lang = langCol && labels[row[langCol]] ? row[langCol] : "ro";
  const label = labels[lang][key];

  if (altCol) update.run(label, label, row.id);
  else update.run(label, row.id);
}

db.close();
console.log("Gallery labels fixed.");
