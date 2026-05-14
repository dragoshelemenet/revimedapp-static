"use client";

import { useMemo, useState } from "react";

const questions = [
  ["Sunt slab(ă), cu constituție fină, iau greu în greutate.", "Я худощавый(ая), с тонким телосложением, мне трудно набрать вес.", "v"],
  ["Am constituție medie, bine definită, cu masă musculară bună.", "У меня среднее, хорошо сформированное телосложение, развитая мускулатура.", "p"],
  ["Am constituție robustă, ușor mă îngraș și rețin lichide.", "У меня крепкое телосложение, я легко набираю вес и задерживаю жидкость.", "k"],
  ["Am mâinile și picioarele reci, nu suport frigul și vântul.", "У меня часто холодные руки и ноги, я плохо переношу холод и ветер.", "v"],
  ["Îmi este adesea cald, nu suport căldura, prefer răcoarea.", "Мне часто жарко, я не люблю жару и предпочитаю прохладу.", "p"],
  ["Tolerez bine frigul, iar vremea rece și umedă mă obosește.", "Я сравнительно хорошо переношу холод, но сырая погода делает меня вялым.", "k"],
  ["Am apetit variabil, pot să sar peste mese fără probleme.", "У меня переменный аппетит.", "v"],
  ["Am apetit puternic, devin iritabil(ă) dacă sar peste masă.", "У меня сильный аппетит.", "p"],
  ["Am digestie lentă, greutate după mâncare, în special seara.", "У меня медленное пищеварение.", "k"],
  ["Somnul meu este ușor, cu treziri frecvente sau insomnie.", "У меня лёгкий сон.", "v"],
  ["Somnul meu este mediu, de obicei bun, dar se tulbură la stres.", "Сон обычно хороший, но портится при стрессе.", "p"],
  ["Dorm profund și mult, îmi este greu să mă trezesc dimineața.", "Я сплю глубоко и долго.", "k"],
  ["Mă mișc repede, gesticulez mult, vorbesc repede.", "Я двигаюсь и говорю быстро.", "v"],
  ["Sunt hotărât(ă), direct(ă), uneori critic(ă).", "Я решительный и прямой.", "p"],
  ["Sunt calm(ă), stabil(ă), am reacții lente.", "Я спокойный и стабильный.", "k"],
  ["Sunt adesea neliniștit(ă), îngrijorat(ă), cu multe gânduri.", "Я часто тревожусь.", "v"],
  ["Mă enervez repede, pot avea izbucniri de furie.", "Я быстро злюсь.", "p"],
  ["Tind să devin letargic(ă) și lipsit(ă) de motivație.", "Я склонен к вялости.", "k"],
  ["Am pielea uscată și rece, mai ales iarna.", "У меня сухая и холодная кожа.", "v"],
  ["Am pielea caldă, uneori înroșită, predispusă la iritații.", "У меня тёплая кожа.", "p"],
  ["Am pielea groasă, catifelată, uneori umedă.", "У меня плотная мягкая кожа.", "k"],
  ["Învăț repede, dar uit repede.", "Я быстро учусь и быстро забываю.", "v"],
  ["Învăț moderat, dar îmi amintesc bine detaliile.", "Я хорошо запоминаю детали.", "p"],
  ["Învăț încet, dar am memorie de lungă durată.", "У меня долговременная память.", "k"],
  ["Digestia mea este imprevizibilă.", "Моё пищеварение непредсказуемое.", "v"],
  ["Am scaun moale sau diaree când sunt stresat(ă).", "При стрессе бывает жидкий стул.", "p"],
  ["Am scaun rar, greu, cu tendință la constipație cronică.", "Склонность к запорам.", "k"],
  ["Tind să mă agit și să încep multe lucruri deodată.", "Я склонен суетиться.", "v"],
  ["Îmi place competiția și provocarea.", "Я люблю конкуренцию.", "p"],
  ["Prefer stabilitatea, rutina, evit schimbările bruște.", "Я предпочитаю стабильность.", "k"],
  ["Simt frecvent anxietate, frică, nesiguranță.", "Часто тревога и страх.", "v"],
  ["Simt frecvent iritabilitate și critică.", "Часто раздражительность.", "p"],
  ["Simt frecvent apatie și lipsă de motivație.", "Часто апатия.", "k"],
  ["Am o voce subțire, schimbătoare, vorbesc repede.", "Тонкий голос, быстро говорю.", "v"],
  ["Am voce clară, pătrunzătoare, uneori aspră.", "Ясный голос.", "p"],
  ["Am voce gravă, calmă, vorbesc încet și rar.", "Низкий спокойный голос.", "k"],
  ["Prefer mâncărurile calde, uleioase, condimente blânde.", "Люблю тёплую пищу.", "v"],
  ["Prefer salate, gust intens, picant, acru.", "Люблю яркий вкус.", "p"],
  ["Prefer dulciuri, lactate, făinoase, gustări dese.", "Люблю сладкое и молочное.", "k"],
  ["Mă simt mai bine în mediu cald, liniștit, cu rutină.", "Лучше в тёплой спокойной обстановке.", "v"]
];

const protocols: Record<string, any> = {
  v: {
    name: "Vata",
    summary: "Domină mobilitatea, uscăciunea, sensibilitatea la frig, anxietatea și somnul ușor.",
    foods: ["mese calde și regulate", "supe, terciuri, legume gătite", "uleiuri blânde, ghimbir moderat"],
    herbs: [
      ["Ashwagandha", "300–600 mg/zi extract sau 3–6 g pulbere de rădăcină"],
      ["Triphala", "1–3 g seara, adaptat toleranței"],
      ["Ulei de susan extern", "masaj 10–20 minute, 2–3 ori/săptămână"]
    ],
    avoid: ["frig, vânt, mese sărite", "exces de cafea", "suprasolicitare mentală"]
  },
  p: {
    name: "Pitta",
    summary: "Domină căldura, intensitatea, iritabilitatea, digestia puternică și tendința inflamatorie.",
    foods: ["alimente răcoritoare", "legume verzi", "gust dulce-amărui-astringent"],
    herbs: [
      ["Guduchi", "300–500 mg/zi extract sau 1–3 g pulbere"],
      ["Triphala", "1–2 g seara, cu prudență dacă există diaree"],
      ["Aloe / plante răcoritoare", "doze adaptate clinic"]
    ],
    avoid: ["picant excesiv", "alcool", "căldură intensă", "competiție permanentă"]
  },
  k: {
    name: "Kapha",
    summary: "Domină stabilitatea, greutatea, digestia lentă, retenția de lichide și tendința la letargie.",
    foods: ["mese ușoare și calde", "condimente stimulente", "legume gătite, mai puține lactate"],
    herbs: [
      ["Trikatu", "0.5–3 g/zi, cu prudență gastrică"],
      ["Guggulu", "500–1000 mg/zi extract, doar cu recomandare"],
      ["Triphala", "1–3 g seara"]
    ],
    avoid: ["dulciuri", "lactate excesive", "somn excesiv", "sedentarism"]
  }
};

export default function DoshaPage() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [show, setShow] = useState(false);

  const scores = useMemo(() => {
    const s = { v: 0, p: 0, k: 0 };
    Object.values(answers).forEach((a) => {
      if (a === "v" || a === "p" || a === "k") s[a]++;
    });
    return s;
  }, [answers]);

  const dominant = (Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] || "v") as "v" | "p" | "k";
  const proto = protocols[dominant];

  return (
    <>
      <section className="pageHero ayurHero">
        <div className="rmShell">
          <p className="crumb">Teste și Instrumente / Ayurveda Dosha</p>
          <h1>Ayurveda Dosha Test – Revimed Plus</h1>
          <p className="lead">Protocol educațional cu scor, recomandări, doze orientative și contraindicații.</p>
        </div>
      </section>

      <section className="rmSection">
        <div className="rmShell doshaShell">
          <div className="doshaIntro">
            <b>Instrucțiuni:</b> Selectați DA dacă afirmația vi se potrivește. Dozele sunt orientative și nu înlocuiesc consultația medicală.
          </div>

          <div className="doshaGrid">
            {questions.map(([ro, ru, type], index) => (
              <div className="doshaQuestion" key={index}>
                <p><b>{index + 1}.</b> {ro}</p>
                <small>{ru}</small>
                <div>
                  <label><input type="radio" name={`q${index}`} onChange={() => setAnswers({ ...answers, [index]: type })} /> DA / Да</label>
                  <label><input type="radio" name={`q${index}`} onChange={() => setAnswers({ ...answers, [index]: "none" })} /> NU / Нет</label>
                </div>
              </div>
            ))}
          </div>

          <div className="toolActions">
            <button className="blueBtn" onClick={() => setShow(true)}>Calculează dosha</button>
            <button className="softBtn" onClick={() => window.print()}>Tipărește concluzia</button>
            <button className="softBtn" onClick={() => { setAnswers({}); setShow(false); }}>Resetare</button>
          </div>

          {show && (
            <div className="doshaResult">
              <h2>Concluzie: {proto.name}</h2>
              <p>Scor Vata: {scores.v} · Pitta: {scores.p} · Kapha: {scores.k}</p>
              <p>{proto.summary}</p>

              <h3>Recomandări alimentare</h3>
              <ul>{proto.foods.map((x: string) => <li key={x}>{x}</li>)}</ul>

              <h3>Fitoterapie orientativă</h3>
              {proto.herbs.map(([h, d]: string[]) => (
                <div className="protocolCard" key={h}>
                  <b>{h}</b>
                  <p>{d}</p>
                </div>
              ))}

              <h3>De evitat</h3>
              <ul>{proto.avoid.map((x: string) => <li key={x}>{x}</li>)}</ul>

              <div className="noteBox">
                Notă importantă: contraindicațiile, sarcina, alăptarea, bolile autoimune, tratamentele sedative, tiroidiene, antidiabetice, anticoagulante și istoricul hepatic trebuie discutate cu un specialist.
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
