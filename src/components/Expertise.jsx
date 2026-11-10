import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";
import SectionHead from "./SectionHead.jsx";
import Icon from "./Icon.jsx";
import { domains as rawDomains, aiVertical as rawAi, corpNote as rawCorp } from "../data/profile.js";
import { useLang } from "../i18n.jsx";

/* Three equal pillars with AI as the vertical across all three (same model as the freelance page and the PDF). */
export default function Expertise({ domain, setDomain }) {
  const reduce = useReducedMotion();
  const { t, L, lang } = useLang();
  const domains = L(rawDomains), ai = L(rawAi), corp = L(rawCorp);
  const pillars = domains.filter(d => d.id !== "ai");
  const aiDomain = domains.find(d => d.id === "ai");
  const sel = domains.find(d => d.id === domain) || pillars[0];

  return (
    <section id="expertise" aria-labelledby="expertise-title" className="section">
      <div className="wrap">
        <SectionHead no="03" kicker={t("expKicker")} id="expertise-title" title={t("expTitle")} lead={t("expLead")} />

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {pillars.map(p => {
            const on = sel.id === p.id;
            return (
              <button key={p.id} type="button" onClick={() => setDomain(p.id)} aria-pressed={on}
                className={`flex min-w-0 flex-col rounded-2xl border p-5 text-left transition-all duration-300 ${on ? "border-signal/70 bg-navy/60 shadow-[0_0_50px_-24px_rgba(232,101,10,.7)]" : sel.id === "ai" ? "border-white/[0.08] bg-navy/20" : "border-white/[0.08] bg-navy/20 opacity-70 hover:opacity-100"}`}>
                <span className="flex items-start gap-3">
                  <span className={`grid h-11 w-11 flex-none place-items-center rounded-xl ${on ? "bg-signal text-ink" : "bg-white/[0.06] text-signal"}`}><Icon name={p.icon} size={20} /></span>
                  <span className="min-w-0">
                    <span className="block text-lg font-semibold leading-tight tracking-tight">{p.title}</span>
                    {p.subtitle && <span className="mt-0.5 block text-sm text-mist">{p.subtitle}</span>}
                  </span>
                </span>
                <span className="mt-4 flex flex-wrap gap-1.5">
                  {p.keywords.slice(0, 4).map(k => <span key={k} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-snow/80">{k}</span>)}
                </span>
              </button>
            );
          })}
        </div>

        {/* AI band across all three */}
        <button type="button" onClick={() => setDomain("ai")} aria-pressed={sel.id === "ai"}
          className={`relative mt-3 block w-full overflow-hidden rounded-2xl border p-4 text-left transition-colors sm:p-5 ${sel.id === "ai" ? "border-signal" : "border-signal/40 hover:border-signal/80"}`}>
          <span aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(232,101,10,.22),rgba(232,101,10,.08)_50%,rgba(232,101,10,.22))]" />
          {!reduce && <span aria-hidden="true" className="absolute inset-y-0 -left-1/3 w-1/3 animate-[sweep_4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />}
          <span className="relative flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-signal text-ink"><Icon name={aiDomain.icon} size={18} /></span>
            <span className="text-lg font-semibold">{aiDomain.title}</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-signal">{t("aiAcross")}</span>
          </span>
          <span className="relative mt-3 grid grid-cols-1 gap-2 md:grid-cols-3">
            {pillars.map(p => (
              <span key={p.id} className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors ${sel.id === "ai" || sel.id === p.id ? "border-signal/60 bg-ink/80" : "border-white/10 bg-ink/50"}`}>{ai.aspects[p.id]}</span>
            ))}
          </span>
        </button>

        {/* Detail */}
        <div className="panel mt-4 p-5 sm:p-7" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div key={sel.id + lang} initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0 }} transition={{ duration: 0.25 }}>
              <div className="flex flex-wrap items-baseline gap-x-3"><h3 className="text-xl font-semibold tracking-tight">{sel.title}</h3>{sel.subtitle && <span className="text-sm text-mist">{sel.subtitle}</span>}</div>
              {sel.id === "ai" && <p className="mt-1 text-mist">{ai.claim}</p>}
              {sel.id !== "ai" && <p className="mt-3 flex items-start gap-2.5 rounded-xl border border-signal/30 bg-signal/10 px-4 py-3 text-snow"><Check size={16} className="mt-1 flex-none text-signal" />{corp}</p>}
              <ul className="mt-4 flex flex-wrap gap-2">{sel.keywords.map(k => <li key={k} className="rounded-full border border-white/10 px-3 py-1.5 text-sm">{k}</li>)}</ul>
              <ul className="mt-5 grid gap-x-8 gap-y-2.5 border-t border-white/[0.07] pt-5 md:grid-cols-2">
                {sel.evidence.map(e => <li key={e} className="flex gap-3 text-snow/85"><Check size={16} className="mt-1 flex-none text-signal" />{e}</li>)}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
