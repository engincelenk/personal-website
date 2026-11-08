import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { facts } from "../data/knowledge.js";
import { answer } from "../lib/match.js";
import { useLang } from "../i18n.jsx";

export default function AskPortfolio() {
  const { t, lang } = useLang();
  const [log, setLog] = useState([]);
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState(false);
  const box = useRef(null);
  useEffect(() => { box.current?.scrollTo({ top: box.current.scrollHeight, behavior: "smooth" }); }, [log]);
  const suggestions = [2, 0, 5, 7, 8].map(i => facts[i].q[lang]);

  const ask = async text => {
    text = text.trim(); if (!text || busy) return;
    setQ(""); setBusy(true);
    setLog(l => [...l, { who: "me", text }, { who: "bot", text: "", typing: true }]);
    await new Promise(r => setTimeout(r, 400));
    const full = answer(text, lang) || t("noAnswer");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let i = reduce ? full.length : 0;
    const tick = () => {
      i = Math.min(full.length, i + 4);
      setLog(l => [...l.slice(0, -1), { who: "bot", text: full.slice(0, i), typing: i < full.length, src: true }]);
      if (i < full.length) setTimeout(tick, 14); else setBusy(false);
    };
    tick();
  };

  return (
    <div className="flex flex-col">
      <div ref={box} className="no-scrollbar flex max-h-[360px] min-h-[180px] flex-col gap-3 overflow-y-auto pb-2" aria-live="polite">
        <div className="max-w-[88%] self-start rounded-2xl rounded-bl-md bg-white/[0.05] px-4 py-3 text-[15px] text-snow/90">{t("askHello")}</div>
        {log.map((m, i) => (
          <div key={i} className={`max-w-[88%] rounded-2xl px-4 py-3 text-[15px] leading-relaxed ${m.who === "me" ? "self-end rounded-br-md bg-signal text-ink" : "self-start rounded-bl-md bg-white/[0.05] text-snow/90"}`}>
            {m.typing && !m.text ? <span className="flex gap-1 py-1">{[0, 1, 2].map(k => <span key={k} className="h-1.5 w-1.5 animate-bounce rounded-full bg-mist" style={{ animationDelay: `${k * 0.12}s` }} />)}</span>
              : <span className={m.typing ? "caret" : ""}>{m.text}</span>}
            {m.src && !m.typing && <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-wider text-mist">{t("fromFacts")}</span>}
          </div>
        ))}
      </div>
      <div className="no-scrollbar -mx-1 mt-3 flex gap-2 overflow-x-auto px-1 pb-1">
        {suggestions.map(s => <button key={s} type="button" className="chip flex-none whitespace-nowrap" onClick={() => ask(s)}>{s}</button>)}
      </div>
      <form className="mt-3 flex gap-2" onSubmit={e => { e.preventDefault(); ask(q); }}>
        <label htmlFor="ask" className="sr-only">{t("yourQuestion")}</label>
        <input id="ask" value={q} onChange={e => setQ(e.target.value)} autoComplete="off" placeholder={t("askPh")}
          className="min-h-[48px] min-w-0 flex-1 rounded-full border border-white/10 bg-ink px-5 text-[16px] text-snow placeholder:text-mist/60 focus:border-signal focus:outline-none" />
        <button type="submit" aria-label={t("ask")} className="grid h-12 w-12 flex-none place-items-center rounded-full bg-signal text-ink transition-colors hover:bg-[#ff7a1f] disabled:opacity-50" disabled={busy}><ArrowUp size={18} /></button>
      </form>
    </div>
  );
}
