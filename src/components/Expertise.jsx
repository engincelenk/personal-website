import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";
import SectionHead from "./SectionHead.jsx";
import Icon from "./Icon.jsx";
import { domains } from "../data/profile.js";

const seams = [
  { between: ["security", "architecture"], label: "Security by design", pos: "left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2" },
  { between: ["architecture", "ai"], label: "Future architecture", pos: "left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2" },
  { between: ["management", "ai"], label: "Product development", pos: "left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2" },
  { between: ["security", "management"], label: "Governance", pos: "left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2" }
];
const order = ["security", "architecture", "management", "ai"];

export default function Expertise({ domain, setDomain }) {
  const reduce = useReducedMotion();
  const sel = domains.find(d => d.id === domain) || domains[0];
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="section">
      <div className="wrap">
        <SectionHead no="03" kicker="Expertise" id="expertise-title" title="Where my strengths connect." lead="Four domains, one profile. Tap a domain." />
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <div className="grid h-full grid-cols-2 grid-rows-2 gap-2.5">
              {order.map(id => {
                const d = domains.find(x => x.id === id), on = sel.id === id;
                return (
                  <button key={id} type="button" onClick={() => setDomain(id)} aria-pressed={on}
                    className={`flex flex-col justify-between rounded-2xl border p-4 text-left transition-all duration-300 sm:p-6 ${on ? "border-signal/70 bg-navy/60 shadow-[0_0_60px_-20px_rgba(232,101,10,.6)]" : "border-white/[0.07] bg-navy/20 hover:border-white/20"}`}>
                    <Icon name={d.icon} size={24} className={on ? "text-signal" : "text-mist"} />
                    <span className="text-base font-semibold tracking-tight sm:text-xl">{d.title}</span>
                  </button>
                );
              })}
            </div>
            <div className="pointer-events-none absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-signal/50 bg-ink font-mono text-xs font-semibold sm:h-20 sm:w-20">
              <span className="absolute inset-0 rounded-full border border-signal/20 motion-safe:animate-ping [animation-duration:3s]" />EC
            </div>
            {seams.map(s => (
              <span key={s.label} className={`pointer-events-none absolute z-10 hidden whitespace-nowrap rounded-full border bg-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors sm:block ${s.pos} ${s.between.includes(sel.id) ? "border-signal/50 text-signal" : "border-white/10 text-mist/60"}`}>{s.label}</span>
            ))}
          </div>
          <div className="panel p-6 sm:p-8" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div key={sel.id} initial={reduce ? false : { opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={reduce ? undefined : { opacity: 0, x: -8 }} transition={{ duration: 0.25 }}>
                <div className="flex items-center gap-3"><Icon name={sel.icon} size={22} className="text-signal" /><h3 className="text-2xl font-semibold tracking-tight">{sel.title}</h3></div>
                <ul className="mt-5 flex flex-wrap gap-2">{sel.keywords.map((k, i) => (
                  <motion.li key={k} initial={reduce ? false : { opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.05 * i }}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-sm">{k}</motion.li>))}
                </ul>
                <ul className="mt-6 space-y-2 border-t border-white/[0.07] pt-5">
                  {sel.evidence.map(e => <li key={e} className="flex gap-3 text-mist"><Check size={16} className="mt-1 flex-none text-signal" />{e}</li>)}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
