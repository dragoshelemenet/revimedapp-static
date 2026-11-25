"use client";

import { useState } from "react";
import Link from "next/link";
import { withLang, type Lang } from "@/lib/i18n";

type SymptomGroup = {
  id: string;
  pill: string;
  title: string;
  consultation: string;
  investigation: string;
  price: string;
  guideHref: string;
  guideLabel: string;
};

const finderCopy: Record<
  Lang,
  {
    badge: string;
    heading: string;
    subtitle: string;
    consultLabel: string;
    investLabel: string;
    priceLabel: string;
    callBtn: string;
    pricesBtn: string;
    groups: SymptomGroup[];
  }
> = {
  ro: {
    badge: "Orientare rapidă · Pacienți & Părinți",
    heading: "Nu știi ce consultație sau investigație ți se potrivește?",
    subtitle:
      "Alege simptomele de mai jos și vezi imediat recomandarea orientativă pentru consultație la Dr. Igor Revenco, investigația funcțională și tariful transparent.",
    consultLabel: "Consultație recomandată",
    investLabel: "Investigație / Procedură",
    priceLabel: "Tarif orientativ",
    callBtn: "Sună acum: 022 60 50 60",
    pricesBtn: "Vezi toate prețurile (96)",
    groups: [
      {
        id: "pediatrie",
        pill: "Copii · TSA / Vorbire / Somn",
        title: "Neuropediatrie: întârziere de vorbire, TSA, ticuri, cefalee sau tulburări de somn la copii",
        consultation: "Dr. Igor Revenco — Medic Neuropediatru, Neurochirurg consultant",
        investigation: "EEG 19 canale pentru copii + evaluare neuropsihologică",
        price: "Consultație 500 MDL · EEG 1600 MDL",
        guideHref: "/autism-tsa-copii-neuropediatru-chisinau/",
        guideLabel: "Ghid Neuropediatrie & TSA →"
      },
      {
        id: "coloana",
        pill: "Coloană · Hernie / Sciatică",
        title: "Dureri de spate, hernie de disc, lumbago acut, sciatică sau torticolis",
        consultation: "Consultație Neurochirurg / Neurolog (analiză RMN / CT)",
        investigation: "Electrospondilografie (ESG) + fizioterapie (Bi-LENAR, Amplipuls, masaj)",
        price: "Consultație 500 MDL · Proceduri 100 MDL / 30 min",
        guideHref: "/hernie-de-disc-chisinau/",
        guideLabel: "Hernie de disc fără operație →"
      },
      {
        id: "cap",
        pill: "Cap · Migrene / Amețeli / Somn",
        title: "Migrene, amețeli, vertij, tinitus, insomnie, atacuri de panică sau oboseală cronică",
        consultation: "Consultație Neurolog + evaluare sistem nervos vegetativ",
        investigation: "Reoencefalografie (RheoTest) · Termalgometrie RUNO · Electrosomn",
        price: "Consultație 500 MDL · RheoTest 500 MDL · Electrosomn 100 MDL",
        guideHref: "/ameteli-vertij-chisinau/",
        guideLabel: "Ghid Amețeli & Vertij →"
      },
      {
        id: "diagnostic",
        pill: "Diagnostic · EEG / RheoTest / AMP",
        title: "Screening funcțional complet, circulație cerebrală, Eco-EG sau evaluare 117 indici",
        consultation: "Interpretare clinică completă de Dr. Igor Revenco",
        investigation: "EEG 19 canale · RheoTest · Eco-EG · Biopromin AMP-Tech (117 indici)",
        price: "Eco-EG 250 MDL · RheoTest 500 MDL · AMP 1000 MDL · EEG 1600 MDL",
        guideHref: "/ghid-diagnostic-functional-eeg-reg-amp-chisinau/",
        guideLabel: "Compară EEG vs. RheoTest vs. AMP →"
      }
    ]
  },
  ru: {
    badge: "Быстрый подбор · Взрослые и Дети",
    heading: "Не знаете, какая консультация или диагностика вам подходит?",
    subtitle:
      "Выберите симптомы ниже, чтобы сразу увидеть рекомендацию по приёму у д-ра Игоря Ревенко, нужное обследование и прозрачную стоимость.",
    consultLabel: "Рекомендуемая консультация",
    investLabel: "Обследование / Процедуры",
    priceLabel: "Ориентировочная цена",
    callBtn: "Позвонить: 022 60 50 60",
    pricesBtn: "Все цены (96 услуг)",
    groups: [
      {
        id: "pediatrie",
        pill: "Дети · РАС / Речь / Сон",
        title: "Детская неврология: задержка речи, РАС, тики, головные боли, энурез или нарушения сна",
        consultation: "Д-р Игорь Ревенко — Детский невролог, нейрохирург-консультант",
        investigation: "ЭЭГ 19 каналов для детей + нейропсихологическая оценка",
        price: "Приём 500 MDL · ЭЭГ 1600 MDL",
        guideHref: "/ru/autizm-ras-u-detey-nevrolog-kishinev/",
        guideLabel: "Гид: Детская неврология и РАС →"
      },
      {
        id: "coloana",
        pill: "Позвоночник · Грыжа / Ишиас",
        title: "Боль в спине, грыжа диска, люмбаго, ишиас, заклинило шею или плечо",
        consultation: "Консультация нейрохирурга / невролога (разбор снимков МРТ / КТ)",
        investigation: "Электроспондилография (ESG) + физиотерапия (Bi-LENAR, Амплипульс, массаж)",
        price: "Приём 500 MDL · Процедуры 100 MDL / 30 мин",
        guideHref: "/ru/gryzha-diska-kishinev/",
        guideLabel: "Грыжа диска без операции →"
      },
      {
        id: "cap",
        pill: "Голова · Мигрень / Головокружение / Сон",
        title: "Мигрени, головокружение, шум в ушах, бессонница, панические атаки или ВСД",
        consultation: "Консультация невролога + оценка вегетативной нервной системы",
        investigation: "Реоэнцефалография (RheoTest) · Тест РУНО · Электросон",
        price: "Приём 500 MDL · RheoTest 500 MDL · Электросон 100 MDL",
        guideHref: "/ru/golovokruzhenie-kishinev/",
        guideLabel: "Гид: Головокружение и вертиго →"
      },
      {
        id: "diagnostic",
        pill: "Диагностика · ЭЭГ / РЭГ / АМП",
        title: "Комплексная функциональная диагностика сосудов мозга, Эхо-ЭГ или 117 показателей",
        consultation: "Клиническая расшифровка результатов у д-ра Игоря Ревенко",
        investigation: "ЭЭГ 19 каналов · RheoTest · Эхо-ЭГ · Biopromin AMP-Tech (117 показателей)",
        price: "Эхо-ЭГ 250 MDL · РЭГ 500 MDL · АМП 1000 MDL · ЭЭГ 1600 MDL",
        guideHref: "/ru/gid-funktsionalnaya-diagnostika-eeg-reg-amp-kishinev/",
        guideLabel: "Сравнить ЭЭГ vs. РЭГ vs. АМП →"
      }
    ]
  },
  en: {
    badge: "Quick Guide · Adults & Children",
    heading: "Not sure which consultation or diagnostic test fits your symptoms?",
    subtitle:
      "Select your symptom group below to see the recommended evaluation with Dr. Igor Revenco, functional diagnostics, and transparent MDL pricing.",
    consultLabel: "Recommended consultation",
    investLabel: "Diagnostics / Therapy",
    priceLabel: "Indicative fee",
    callBtn: "Call now: 022 60 50 60",
    pricesBtn: "View all prices (96)",
    groups: [
      {
        id: "pediatrie",
        pill: "Children · ASD / Speech / Sleep",
        title: "Pediatric neurology: speech delay, ASD, headaches, tics, or sleep disturbances",
        consultation: "Dr. Igor Revenco — Pediatric Neurologist, Consultant Neurosurgeon",
        investigation: "19-channel pediatric EEG + neuropsychological assessment",
        price: "Consultation 500 MDL · EEG 1600 MDL",
        guideHref: "/en/dr-igor-revenco/",
        guideLabel: "Dr. Igor Revenco Profile →"
      },
      {
        id: "coloana",
        pill: "Spine · Disc Hernia / Sciatica",
        title: "Back pain, disc herniation, acute lumbago, sciatica, or neck stiffness",
        consultation: "Neurosurgeon / Neurologist consultation (MRI / CT review)",
        investigation: "Electrospondylography (ESG) + physiotherapy (Bi-LENAR, Amplipuls, massage)",
        price: "Consultation 500 MDL · Procedures 100 MDL / 30 min",
        guideHref: "/en/servicii/consultatii-neurochirurgie/",
        guideLabel: "Neurosurgery & Spine Care →"
      },
      {
        id: "cap",
        pill: "Head · Migraines / Vertigo / Sleep",
        title: "Migraines, dizziness, vertigo, tinnitus, insomnia, panic attacks, or burnout",
        consultation: "Neurology consultation + autonomic nervous system assessment",
        investigation: "Rheoencephalography (RheoTest) · RUNO test · Electrosleep",
        price: "Consultation 500 MDL · RheoTest 500 MDL · Electrosleep 100 MDL",
        guideHref: "/en/servicii/consultatii-neurologice/",
        guideLabel: "Neurology Consultations →"
      },
      {
        id: "diagnostic",
        pill: "Diagnostics · EEG / RheoTest / AMP",
        title: "Complete functional brain & vascular screening, Echo-EG, or 117-index scan",
        consultation: "Clinical interpretation by Dr. Igor Revenco",
        investigation: "19-channel EEG · RheoTest · Echo-EG · Biopromin AMP-Tech (117 indices)",
        price: "Echo-EG 250 MDL · RheoTest 500 MDL · AMP 1000 MDL · EEG 1600 MDL",
        guideHref: "/en/servicii/diagnostic-functional/",
        guideLabel: "Functional Diagnostics →"
      }
    ]
  },
  ua: {
    badge: "Швидкий підбір · Дорослі та Діти",
    heading: "Не знаєте, яка консультація чи діагностика вам підходить?",
    subtitle:
      "Оберіть симптоми нижче, щоб одразу побачити рекомендацію щодо прийому у д-ра Ігоря Ревенка, потрібне обстеження та прозору вартість.",
    consultLabel: "Рекомендована консультація",
    investLabel: "Обстеження / Процедури",
    priceLabel: "Орієнтовна ціна",
    callBtn: "Зателефонувати: 022 60 50 60",
    pricesBtn: "Усі ціни (96 послуг)",
    groups: [
      {
        id: "pediatrie",
        pill: "Діти · РАС / Мовлення / Сон",
        title: "Дитяча неврологія: затримка мовлення, РАС, тики, головний біль або порушення сну",
        consultation: "Д-р Ігор Ревенко — Дитячий невролог, нейрохірург-консультант",
        investigation: "ЕЕГ 19 каналів для дітей + нейропсихологічна оцінка",
        price: "Прийом 500 MDL · ЕЕГ 1600 MDL",
        guideHref: "/ua/dr-igor-revenco/",
        guideLabel: "Профіль д-ра Ігоря Ревенка →"
      },
      {
        id: "coloana",
        pill: "Хребет · Грижа / Ішіас",
        title: "Біль у спині, грижа диска, люмбаго, ішіас або заклинило шию",
        consultation: "Консультація нейрохірурга / невролога (розбір МРТ / КТ)",
        investigation: "Електроспондилографія (ESG) + фізіотерапія (Bi-LENAR, Ампліпульс, масаж)",
        price: "Прийом 500 MDL · Процедури 100 MDL / 30 хв",
        guideHref: "/ua/servicii/consultatii-neurochirurgie/",
        guideLabel: "Нейрохірургія та хребет →"
      },
      {
        id: "cap",
        pill: "Голова · Мігрень / Запаморочення / Сон",
        title: "Мігрені, запаморочення, шум у вухах, безсоння або панічні атаки",
        consultation: "Консультація невролога + оцінка вегетативної нервової системи",
        investigation: "Реоенцефалографія (RheoTest) · Тест РУНО · Електросон",
        price: "Прийом 500 MDL · RheoTest 500 MDL · Електросон 100 MDL",
        guideHref: "/ua/servicii/consultatii-neurologice/",
        guideLabel: "Консультації невролога →"
      },
      {
        id: "diagnostic",
        pill: "Діагностика · ЕЕГ / РЕГ / АМП",
        title: "Комплексна функціональна діагностика судин мозку, Ехо-ЕГ або 117 показників",
        consultation: "Клінічна інтерпретація у д-ра Ігоря Ревенка",
        investigation: "ЕЕГ 19 каналів · RheoTest · Ехо-ЕГ · Biopromin AMP-Tech (117 показників)",
        price: "Ехо-ЕГ 250 MDL · РЕГ 500 MDL · АМП 1000 MDL · ЕЕГ 1600 MDL",
        guideHref: "/ua/servicii/diagnostic-functional/",
        guideLabel: "Функціональна діагностика →"
      }
    ]
  }
};

export default function SymptomDiagnosticFinder({ lang }: { lang: Lang }) {
  const copy = finderCopy[lang] || finderCopy.ro;
  const [selectedId, setSelectedId] = useState<string>(copy.groups[0].id);
  const active = copy.groups.find((g) => g.id === selectedId) || copy.groups[0];

  return (
    <section className="rmSection" style={{ paddingTop: 18, paddingBottom: 18 }}>
      <div className="rmShell" style={{ maxWidth: "min(1120px, 100%)", marginInline: "auto" }}>
        <article className="rm-seo-bento-shell" data-glass-card>
          <span className="rm-citable-pill" style={{ marginBottom: 10, display: "inline-block" }}>
            {copy.badge}
          </span>
          <h2 style={{ marginTop: 0, marginBottom: 8 }}>{copy.heading}</h2>
          <p style={{ marginTop: 0, marginBottom: 16, maxWidth: "74ch", color: "#334e68" }}>
            {copy.subtitle}
          </p>

          <div className="rm-faq-cats" role="tablist" aria-label={copy.heading} style={{ marginBottom: 16 }}>
            {copy.groups.map((g) => {
              const isActive = g.id === active.id;
              return (
                <button
                  key={g.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedId(g.id)}
                  className={`rm-faq-cat-pill${isActive ? " is-active" : ""}`}
                >
                  <span>{g.pill}</span>
                </button>
              );
            })}
          </div>

          <div
            style={{
              padding: "16px 18px",
              borderRadius: 16,
              background: "rgba(255, 255, 255, 0.62)",
              border: "1px solid rgba(11, 143, 216, 0.16)"
            }}
          >
            <h3 style={{ margin: "0 0 12px", fontSize: "1.08rem", color: "#08234a" }}>{active.title}</h3>
            <div className="rm-kpi-strip" style={{ marginBottom: 14 }}>
              <div className="rm-kpi-card">
                <span style={{ fontSize: "0.78rem", color: "#486581" }}>{copy.consultLabel}</span>
                <strong style={{ fontSize: "0.95rem" }}>{active.consultation}</strong>
              </div>
              <div className="rm-kpi-card">
                <span style={{ fontSize: "0.78rem", color: "#486581" }}>{copy.investLabel}</span>
                <strong style={{ fontSize: "0.95rem" }}>{active.investigation}</strong>
              </div>
              <div className="rm-kpi-card">
                <span style={{ fontSize: "0.78rem", color: "#486581" }}>{copy.priceLabel}</span>
                <strong style={{ fontSize: "0.95rem" }}>{active.price}</strong>
              </div>
            </div>

            <div className="rm-quick-links-bar" style={{ marginTop: 0 }}>
              <a href="tel:022605060" className="btn btn-primary btn-sm">
                {copy.callBtn}
              </a>
              <Link href={active.guideHref} className="btn btn-outline-primary btn-sm">
                {active.guideLabel}
              </Link>
              <Link href={withLang("/preturi/", lang)} className="btn btn-outline-primary btn-sm">
                {copy.pricesBtn}
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
