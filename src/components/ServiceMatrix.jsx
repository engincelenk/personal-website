import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";
import Icon from "./Icon.jsx";
import SuccessStory from "./SuccessStory.jsx";
import { pillars as rawPillars, aiVertical as rawAi } from "../data/services.js";
import { corpNote as rawCorp } from "../data/profile.js";
import { useLang } from "../i18n.jsx";

/* Three equal pillars with AI as the band across all three.
   Tap a pillar to focus it, tap the band to focus AI in every pillar. */
export default function ServiceMatrix({ T }) {
  const { L, lang } = useLang();
  const reduce = useReducedMotion();
  const pillars = L(rawPillars), ai = L(rawAi), corp = L(rawCorp);
  const [sel, setSel] = useState(null);
  const toggle = id => setSel(s => (s === id ? null : id));
  const dimCol = id => sel && sel !== "ai" && sel !== id;
  const cur = pillars.find(p => p.id === sel);

  return (
    <div>
      {/* Pillars */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {pillars.map(p => (
          <div key={p.id} className={`flex min-w-0 flex-col rounded-2xl border transition-all duration-300 ${sel === p.id ? "border-signal/70 bg-navy/50" : "border-white/[0.08] bg-navy/20"} ${dimCol(p.id) ? "opacity-40" : ""}`}>
            <button type="button" onClick={() => toggle(p.id)} aria-pressed={sel === p.id} className="flex items-start gap-3 p-5 text-left">
              <span className={`grid h-11 w-11 flex-none place-items-center rounded-xl ${sel === p.id ? "bg-signal text-ink" : "bg-white/[0.06] text-signal"}`}><Icon name={p.icon} size={20} /></span>
              <span className="min-w-0">
                <span className="block text-lg font-semibold leading-tight tracking-tight">{p.title}</span>
                {p.subtitle && <span className="mt-0.5 block text-xs text-mist">{p.subtitle}</span>}
                <span className="mt-1 block text-sm text-mist">{p.claim}</span>
              </span>
            </button>
            <ul className={`space-y-1.5 px-5 pb-5 transition-opacity ${sel === "ai" ? "opacity-40" : ""}`}>
              {p.offers.map(o => (
                <li key={o.title} className="flex gap-2.5 text-[15px] text-snow/90"><span className="mt-[0.6em] h-1.5 w-1.5 flex-none rounded-full bg-mist/60" />{o.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* AI band across all three */}
      <button type="button" onClick={() => toggle("ai")} aria-pressed={sel === "ai"}
        className={`group relative mt-3 block w-full overflow-hidden rounded-2xl border p-4 text-left transition-colors sm:p-5 ${sel === "ai" ? "border-signal" : "border-signal/40 hover:border-signal/80"}`}>
        <span aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(232,101,10,.22),rgba(232,101,10,.08)_50%,rgba(232,101,10,.22))]" />
        {!reduce && <span aria-hidden="true" className="absolute inset-y-0 -left-1/3 w-1/3 animate-[sweep_4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />}
        <span className="relative flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-signal text-ink"><Icon name={ai.icon} size={18} /></span>
          <span className="text-lg font-semibold">{ai.title}</span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-signal">{T.aiAcross}</span>
        </span>
        <span className="relative mt-3 grid grid-cols-1 gap-2 md:grid-cols-3">
          {pillars.map(p => (
            <span key={p.id} className={`rounded-xl border px-4 py-3 transition-all ${sel === "ai" || sel === p.id ? "border-signal/60 bg-ink/80" : "border-white/10 bg-ink/50"} ${dimCol(p.id) ? "opacity-40" : ""}`}>
              <span className="block text-sm font-semibold">{p.ai.title}</span>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-mist">{T.inArea} {p.title}</span>
            </span>
          ))}
        </span>
      </button>

      {/* Detail */}
      <AnimatePresence mode="wait">
        {sel && (
          <motion.div key={sel + lang} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0 }} transition={{ duration: 0.25 }}
            className="panel mt-4 p-5 sm:p-7" aria-live="polite">
            {sel === "ai" ? (
              <>
                <p className="text-lg font-semibold">{ai.title}</p>
                <p className="mt-1 text-mist">{ai.claim}</p>
                <ul className="mt-4 grid gap-3 md:grid-cols-3">
                  {pillars.map(p => <li key={p.id}><p className="text-sm font-semibold">{p.ai.title}</p><p className="mt-0.5 text-sm text-mist">{p.ai.text}</p></li>)}
                </ul>
              </>
            ) : (
              <>
                <p className="text-lg font-semibold">{cur.title}</p>
                <p className="mt-3 flex items-start gap-2.5 rounded-xl border border-signal/30 bg-signal/10 px-4 py-3 text-snow"><Check size={16} className="mt-1 flex-none text-signal" />{corp}</p>
                <ul className="mt-4 grid gap-x-6 gap-y-3 md:grid-cols-2">
                  {cur.offers.map(o => <li key={o.title} className="flex gap-2.5"><Check size={16} className="mt-1 flex-none text-signal" /><span><span className="block text-sm font-semibold">{o.title}</span><span className="block text-sm text-mist">{o.text}</span></span></li>)}
                  {cur.id === "management" && <li className="md:col-span-2"><SuccessStory compact /></li>}
                  <li className="flex gap-2.5"><Icon name="Sparkles" size={16} className="mt-1 flex-none text-signal" /><span><span className="block text-sm font-semibold">{cur.ai.title}</span><span className="block text-sm text-mist">{cur.ai.text}</span></span></li>
                </ul>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
