import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import SectionHead from "./SectionHead.jsx";
import Icon from "./Icon.jsx";
import { domains, cases } from "../data/profile.js";

/* Where two domains meet, a strength emerges. Order matches the 2×2 grid. */
const seams = [
  { between: ["security", "architecture"], label: "Security by design", pos: "top" },
  { between: ["architecture", "ai"], label: "Future architecture", pos: "right" },
  { between: ["management", "ai"], label: "Product development", pos: "bottom" },
  { between: ["security", "management"], label: "Governance", pos: "left" }
];
const order = ["security", "architecture", "management", "ai"];
const posCls = {
  top: "left-1/2 top-[calc(25%-2px)] -translate-x-1/2 -translate-y-1/2",
  right: "right-[calc(25%-2px)] top-1/2 translate-x-1/2 -translate-y-1/2",
  bottom: "left-1/2 bottom-[calc(25%-2px)] -translate-x-1/2 translate-y-1/2",
  left: "left-[calc(25%-2px)] top-1/2 -translate-x-1/2 -translate-y-1/2"
};

export default function Expertise({ domain, setDomain }) {
  const reduce = useReducedMotion();
  const sel = domains.find(d => d.id === domain) || domains[0];
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });

  return (
    <section id="expertise" aria-labelledby="expertise-title" className="section">
      <div className="wrap">
        <SectionHead no="03" kicker="Core expertise" id="expertise-title" title="Where my strengths connect."
          lead="Not twenty separate skills, but one competence model. Select a domain to explore how I think, what backs it up and where it shows." />

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
          {/* The model */}
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            <div className="grid h-full grid-cols-2 grid-rows-2 gap-2.5">
              {order.map(id => {
                const d = domains.find(x => x.id === id); const on = sel.id === id;
                return (
                  <button key={id} type="button" onClick={() => setDomain(id)} aria-pressed={on}
                    className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 sm:p-6
                      ${on ? "border-signal/70 bg-navy/60 shadow-[0_0_60px_-20px_rgba(232,101,10,.6)]" : "border-white/[0.07] bg-navy/20 hover:border-white/20 hover:bg-navy/35"}`}>
                    <Icon name={d.icon} size={22} className={on ? "text-signal" : "text-mist"} />
                    <span>
                      <span className="block text-base font-semibold tracking-tight sm:text-xl">{d.title}</span>
                      <span className="mt-1 hidden text-xs leading-snug text-mist sm:block">{d.keywords.slice(0, 3).join(" · ")}</span>
                    </span>
                  </button>
                );
              })}
            </div>
            {/* hub */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-signal/50 bg-ink font-mono text-xs font-semibold sm:h-20 sm:w-20">
              <span className="absolute inset-0 rounded-full border border-signal/20 motion-safe:animate-ping [animation-duration:3s]" />EC
            </div>
            {seams.map(s => {
              const on = s.between.includes(sel.id);
              return (
                <span key={s.label} className={`pointer-events-none absolute z-10 hidden whitespace-nowrap rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors sm:block ${posCls[s.pos]}
                  ${on ? "border-signal/50 bg-ink text-signal" : "border-white/10 bg-ink text-mist/70"}`}>{s.label}</span>
              );
            })}
          </div>

          {/* The detail */}
          <div className="panel min-h-[420px] p-6 sm:p-8" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div key={sel.id} initial={reduce ? false : { opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={reduce ? undefined : { opacity: 0, x: -8 }} transition={{ duration: 0.3 }}>
                <div className="flex items-center gap-3"><Icon name={sel.icon} size={20} className="text-signal" /><h3 className="text-2xl font-semibold tracking-tight">{sel.title}</h3></div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {sel.keywords.map(k => <li key={k} className="rounded-full border border-white/10 px-3 py-1 text-sm text-snow/85">{k}</li>)}
                </ul>
                <p className="label mt-8">How I think</p>
                <p className="mt-3 text-lg leading-relaxed text-snow/90">{sel.thinking}</p>
                <p className="label mt-8">Backed by</p>
                <ul className="mt-3 space-y-2">
                  {sel.evidence.map(e => <li key={e} className="flex gap-3 text-mist"><Check size={16} className="mt-1 flex-none text-signal" />{e}</li>)}
                </ul>
                <div className="mt-8 flex flex-wrap gap-2">
                  {sel.cases.map(id => {
                    const c = cases.find(x => x.id === id);
                    return <button key={id} type="button" className="chip" onClick={() => go(`case-${id}`)}>{c.label}: {c.title}<ArrowRight size={14} className="ml-1.5" /></button>;
                  })}
                  {sel.journey.length > 0 && <button type="button" className="chip" onClick={() => go("journey")}>See it in the journey<ArrowRight size={14} className="ml-1.5" /></button>}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
