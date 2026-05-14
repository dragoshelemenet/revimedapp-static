"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const programs: Record<string, any> = {
  profund: { name: "Vindecare profundă", phases: [4, 4, 6, 2], info: "Ritm calm pentru relaxare globală, recuperare și echilibrare." },
  anx: { name: "Anxietate / stres", phases: [4, 2, 7, 2], info: "Expirație lungă pentru reducerea hiperactivării." },
  somn: { name: "Insomnie / somn profund", phases: [4, 4, 8, 2], info: "Program lent pentru seară și liniștirea sistemului nervos." },
  resp: { name: "Respirator / Buteyko blând", phases: [3, 2, 5, 2], info: "Respirație blândă, fără forțare." },
  cardio: { name: "Cardiovascular", phases: [5, 2, 6, 2], info: "Ritm egalizat, calm, fără retenții agresive." },
  digestiv: { name: "Digestiv / abdomen", phases: [4, 2, 6, 2], info: "Respirație abdominală pentru relaxare digestivă." },
  energie: { name: "Energie / burnout", phases: [4, 1, 4, 1], info: "Ritm ușor activator, fără hiperventilație." }
};

const organs: Record<string, any> = {
  snv: ["Sistem nervos vegetativ", "Relaxare, tonus vagal, reducerea tensiunii interne."],
  creier: ["Creier / somn / memorie", "Calmare mentală, concentrare, pregătire pentru somn."],
  inima: ["Inimă / torace", "Respirație calmă și percepție corporală blândă."],
  plamani: ["Plămâni / bronhii", "Ritm ușor, fără forțare sau apnee agresivă."],
  digestiv: ["Stomac / colon / abdomen", "Respirație abdominală lentă."],
  gat: ["Gât / voce", "Relaxarea gâtului, maxilarului și toracelui superior."]
};

const phaseNames = ["Inspiră", "Ține", "Expiră", "Pauză"];

export default function TibetanYogaPage() {
  const [program, setProgram] = useState("profund");
  const [organ, setOrgan] = useState("snv");
  const [duration, setDuration] = useState(300);
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [phaseLeft, setPhaseLeft] = useState(programs.profund.phases[0]);
  const [voice, setVoice] = useState(false);
  const [music, setMusic] = useState(false);
  const audioCtx = useRef<AudioContext | null>(null);

  const cfg = programs[program];
  const organInfo = organs[organ];
  const progress = Math.min(100, Math.round((elapsed / duration) * 100));

  useEffect(() => {
    setPhaseIndex(0);
    setPhaseLeft(cfg.phases[0]);
    setElapsed(0);
    setRunning(false);
  }, [program, duration]);

  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => {
      setElapsed((e) => {
        if (e + 1 >= duration) {
          setRunning(false);
          return duration;
        }
        return e + 1;
      });

      setPhaseLeft((left) => {
        if (left > 1) return left - 1;
        setPhaseIndex((pi) => {
          const next = (pi + 1) % 4;
          if (voice && typeof window !== "undefined" && "speechSynthesis" in window) {
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(new SpeechSynthesisUtterance(phaseNames[next]));
          }
          return next;
        });
        return cfg.phases[(phaseIndex + 1) % 4];
      });

      if (music) playTone();
    }, 1000);

    return () => clearInterval(timer);
  }, [running, cfg, phaseIndex, duration, voice, music]);

  function playTone() {
    try {
      audioCtx.current ||= new AudioContext();
      const ctx = audioCtx.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = 174 + phaseIndex * 33;
      gain.gain.value = 0.035;
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.22);
    } catch {}
  }

  const auraClass = ["inhale", "hold", "exhale", "hold2"][phaseIndex];

  return (
    <section className="tibetanPage">
      <div className="tibetanWrap">
        <div className="tibetanHeader">
          <h1>REVIMED – YOGA TIBETAN PREMIUM</h1>
          <p>MOD UȘOR PENTRU PACIENT: urmărește cercul, nu secunda</p>
        </div>

        <div className="tibetanGrid">
          <aside className="tPanel">
            <h2>SETARE</h2>
            <label>Patologie / scop</label>
            <select value={program} onChange={(e) => setProgram(e.target.value)}>
              {Object.entries(programs).map(([k, v]) => <option key={k} value={k}>{v.name}</option>)}
            </select>

            <label>Organ / sistem</label>
            <select value={organ} onChange={(e) => setOrgan(e.target.value)}>
              {Object.entries(organs).map(([k, v]) => <option key={k} value={k}>{v[0]}</option>)}
            </select>

            <label>Durată</label>
            <select value={duration} onChange={(e) => setDuration(Number(e.target.value))}>
              <option value={180}>3 minute</option>
              <option value={300}>5 minute</option>
              <option value={600}>10 minute</option>
              <option value={900}>15 minute</option>
            </select>

            <div className="tRow">
              <button className="start" onClick={() => setRunning(true)}>▶ START</button>
              <button className="pause" onClick={() => setRunning(false)}>⏸ PAUZĂ</button>
            </div>
            <button className="reset" onClick={() => { setRunning(false); setElapsed(0); setPhaseIndex(0); setPhaseLeft(cfg.phases[0]); }}>↺ RESET</button>
            <button className="voice" onClick={() => setVoice(!voice)}>🗣 Ghid vocal: {voice ? "ON" : "OFF"}</button>
            <button className="music" onClick={() => setMusic(!music)}>🎵 Sunet tibetan: {music ? "ON" : "OFF"}</button>

            <div className="tInfo">
              <b>{cfg.name}</b><br />
              {cfg.info}<br /><br />
              <b>{organInfo[0]}</b><br />
              {organInfo[1]}
            </div>
            <div className="tWarn"><b>Regulă ușoară:</b> inspiră când cercul crește, ține când stă, expiră când cercul scade.</div>
          </aside>

          <main className="tPanel center">
            <div className={`aura ${auraClass}`}>
              <div className="circleText">{phaseLeft}</div>
            </div>
            <div className="phase">{phaseNames[phaseIndex]}</div>
            <div className="phaseSec">{phaseLeft} secunde</div>
            <div className="progressBox"><div className="progress" style={{ width: `${progress}%` }} /></div>
            <div className="easyText">{Math.floor(elapsed / 60)}:{String(elapsed % 60).padStart(2, "0")} / {Math.floor(duration / 60)}:{String(duration % 60).padStart(2, "0")}</div>

            <div className="miniSquare">
              <svg viewBox="0 0 200 200">
                <line className={`side s0 ${phaseIndex === 0 ? "" : "dim"}`} x1="35" y1="35" x2="165" y2="35" />
                <line className={`side s1 ${phaseIndex === 1 ? "" : "dim"}`} x1="165" y1="35" x2="165" y2="165" />
                <line className={`side s2 ${phaseIndex === 2 ? "" : "dim"}`} x1="165" y1="165" x2="35" y2="165" />
                <line className={`side s3 ${phaseIndex === 3 ? "" : "dim"}`} x1="35" y1="165" x2="35" y2="35" />
                <circle className="ball" cx={phaseIndex === 0 ? 100 : phaseIndex === 1 ? 165 : phaseIndex === 2 ? 100 : 35} cy={phaseIndex === 0 ? 35 : phaseIndex === 1 ? 100 : phaseIndex === 2 ? 165 : 100} r="10" />
              </svg>
            </div>
          </main>

          <aside className="tPanel">
            <h2>EFECTE</h2>
            <div className="metric"><b>Program:</b> {cfg.name}</div>
            <div className="metric"><b>Organ:</b> {organInfo[0]}</div>
            <div className="metric"><b>Ritm:</b> {cfg.phases.join(" - ")}</div>
            <div className="effect">🟢 relaxare</div>
            <div className="effect">🟡 atenție pe corp</div>
            <div className="effect">🔵 respirație calmă</div>
            <div className="effect">🟣 reglare emoțională</div>
            <div className="tWarn">Nu forța respirația. Oprește exercițiul dacă apare disconfort, amețeală sau durere.</div>
          </aside>
        </div>
      </div>
    </section>
  );
}
