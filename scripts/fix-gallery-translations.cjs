const Database = require("better-sqlite3");
const path = require("path");
const fs = require("fs");

const dbPath = path.join(process.cwd(), "data", "revimed.sqlite");
if (!fs.existsSync(dbPath)) {
  console.log("No sqlite database found, skipping DB gallery translation.");
  process.exit(0);
}

const db = new Database(dbPath);

const table = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='gallery_items'").get();
if (!table) {
  console.log("gallery_items table not found, skipping.");
  db.close();
  process.exit(0);
}

const titleMap = {
  en: {
    "Recepție Revimed PLUS+": "Revimed PLUS+ Reception",
    "Recepție": "Reception",
    "Sala de Consultații": "Consultation Room",
    "Consultație medicală": "Medical Consultation",
    "Reabilitare": "Medical Rehabilitation",
    "Reabilitare medicală": "Medical Rehabilitation",
    "Proceduri terapeutice": "Therapeutic Procedures",
    "Cabinet medical": "Medical Office",
    "Sală de terapie": "Therapy Room",
    "Facilități Moderne": "Modern Facilities",
    "Personal Medical": "Medical Staff",
    "Clinici": "Clinic",
    "Clinic": "Clinic",
    "Echipamente Medicale": "Medical Equipment"
  },
  ru: {
    "Recepție Revimed PLUS+": "Ресепшн Revimed PLUS+",
    "Recepție": "Ресепшн",
    "Sala de Consultații": "Кабинет консультаций",
    "Consultație medicală": "Медицинская консультация",
    "Reabilitare": "Медицинская реабилитация",
    "Reabilitare medicală": "Медицинская реабилитация",
    "Proceduri terapeutice": "Терапевтические процедуры",
    "Cabinet medical": "Медицинский кабинет",
    "Sală de terapie": "Терапевтический зал",
    "Facilități Moderne": "Современные условия",
    "Personal Medical": "Медицинский персонал",
    "Clinici": "Клиника",
    "Clinic": "Клиника",
    "Echipamente Medicale": "Медицинское оборудование"
  },
  ua: {
    "Recepție Revimed PLUS+": "Ресепшн Revimed PLUS+",
    "Recepție": "Ресепшн",
    "Sala de Consultații": "Кабінет консультацій",
    "Consultație medicală": "Медична консультація",
    "Reabilitare": "Медична реабілітація",
    "Reabilitare medicală": "Медична реабілітація",
    "Proceduri terapeutice": "Терапевтичні процедури",
    "Cabinet medical": "Медичний кабінет",
    "Sală de terapie": "Терапевтична зала",
    "Facilități Moderne": "Сучасні умови",
    "Personal Medical": "Медичний персонал",
    "Clinici": "Клініка",
    "Clinic": "Клініка",
    "Echipamente Medicale": "Медичне обладнання"
  }
};

const byImage = {
  en: ["Revimed PLUS+ Reception", "Medical Consultation", "Medical Rehabilitation", "Therapeutic Procedures", "Medical Office", "Therapy Room"],
  ru: ["Ресепшн Revimed PLUS+", "Медицинская консультация", "Медицинская реабилитация", "Терапевтические процедуры", "Медицинский кабинет", "Терапевтический зал"],
  ua: ["Ресепшн Revimed PLUS+", "Медична консультація", "Медична реабілітація", "Терапевтичні процедури", "Медичний кабінет", "Терапевтична зала"]
};

const update = db.prepare("UPDATE gallery_items SET title=?, alt=?, edited_at=CURRENT_TIMESTAMP WHERE id=?");
const rows = db.prepare("SELECT * FROM gallery_items WHERE lang IN ('en','ru','ua') ORDER BY lang, position, id").all();

for (const lang of ["en", "ru", "ua"]) {
  const langRows = rows.filter((r) => r.lang === lang);
  langRows.forEach((row, index) => {
    const current = String(row.title || "").trim();
    const translated = titleMap[lang][current] || byImage[lang][index] || current;
    update.run(translated, translated, row.id);
  });
}

db.close();
console.log("Gallery translations fixed.");
