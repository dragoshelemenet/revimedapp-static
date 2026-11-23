# Handoff & Permanent Zero-Legal-Risk Policy (`revimedapp-static` / `revimed.site`)

Acest fișier stabilește regulile permanente și obligatorii pentru orice sesiune viitoare sau agent care modifică `revimed.site`.

## 1. Regula de Aur — ZERO Risc Juridic (Republica Moldova)
**NICIODATĂ** nu adăuga pe site conținut, funcționalități sau formulări cu risc juridic pentru clinică (`S.R.L. „REVIMED PLUS”`, IDNO `1011600011964`) sau pentru dezvoltatorul tehnic (`wsod.cloud`):

1. **Fără doze medicale / prescripții online:** Nu scrie niciodată doze în `mg/zi`, `g/zi`, `ml/zi` sau scheme de automedicație în articole, teste sau aplicații (`/aplicatii/`). Orice mențiune de fitoterapie/suplimente trebuie să trimită exclusiv la consultul medicului specialist.
2. **Fără promisiuni de vindecare sau superlative comparative (Legea nr. 62/2022 privind publicitatea):**
   - Interzis: *„garantăm vindecarea”*, *„100% vindecare”*, *„fără efecte secundare”*, *„fără contraindicații”*, *„cel mai bun neurolog”*, *„самый лучший”*, *„înlocuiește analizele de sânge”*.
   - Orice articol despre afecțiuni grave (ex. prevenție oncologică, AVC, epilepsie) trebuie să păstreze clar nota că **Revimed PLUS+ nu oferă tratament oncologic sau asistență de urgență (112)**.
3. **Zero discrepanțe de prețuri (Legea nr. 105/2003 privind protecția consumatorilor):**
   - Orice modificare de tarif în `content/public-pages.json` trebuie sincronizată simultan în toate cele 4 limbi (`ro`, `en`, `ru`, `ua`) și în toate paginile/componentele (`lib/servicesLocalized.ts`, `components/LocalConditionLanding.tsx`, `components/CatalogPages.tsx`, `app/**/page.tsx`, `content/blog.json`, `scripts/generate-search-files.mjs`).
   - Toate prețurile trebuie prezentate ca **orientative (nu constituie ofertă publică fermă)**.
4. **Servicii și poze eliminate de Dr. Igor — INTERZIS să fie reintroduse:**
   - Poza lui Liviu (`/images/1pic.jpg`)
   - Consultație primară / repetată cu medic internist
   - Consultație psihoterapeut / Psihoterapie / paginile de psihoterapeut
   - Testări electrodiagnostice computerizate MEDISKRIN PROFESSIONAL
5. **Protecția datelor și Cookies (Legea nr. 133/2011):**
   - Nu adăuga formulare publice care colectează date personale de sănătate, Google Analytics sau Meta Pixel fără consimțământ explicit și actualizarea politicii.
   - Toate embed-urile YouTube trebuie să folosească exclusiv `https://www.youtube-nocookie.com/embed/...`.
   - Recenziile pacienților rămân strict anonimizate cu inițiale (`R. R.`, `I. B.`).
6. **Clauzele obligatorii din `/termeni-si-conditii/` și Footer (protecție unificată pentru Clinică, Dr. Igor Revenco, Site și Dezvoltator):**
   - Protejează simultan și în egală măsură **Centrul Medical Revimed PLUS+ (`S.R.L. „REVIMED PLUS”`, IDNO `1011600011964`), pe Dr. Igor Revenco, personalul clinicii, site-ul și dezvoltatorul tehnic (`wsod.cloud`)** — fără a plasa răspunderea de la unul la celălalt.
   - Păstrează obligatoriu clauza că **nicio informație de pe site (servicii, aparate, prețuri, orar, poze, video) nu garantează prezența sau disponibilitatea efectivă în realitate** la sediul clinicii („ca atare” / „as is”).
   - Păstrează obligatoriu clauza că **fotografiile și materialele video au fost realizate deschis, cu acordul celor prezenți (fără ca cineva să fi refuzat fotografierea) și că orice fotografie poate fi ștearsă imediat la simpla cerere** (`022 60 50 60`).
   - Păstrează avertismentul de urgență **`112`** și disclaimerul permanent din `components/Footer.tsx` în toate cele 4 limbi.

> Notă tehnică: `scripts/verify-static-release.mjs` verifică automat aceste reguli la fiecare `npm run build` și blochează build-ul dacă apare vreo încălcare.
