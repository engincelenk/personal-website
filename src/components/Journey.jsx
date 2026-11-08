import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown, MapPin } from "lucide-react";
import SectionHead from "./SectionHead.jsx";
import { journey, domains } from "../data/profile.js";
import { period, duration, yearOf } from "../lib/dates.js";

const domainTitle = id => domains.find(d => d.id === id)?.title;

function Detail({ s }) {
  return (
    <div className="space-y-6">
      <p className="leading-relaxed text-snow/90">{s.summary}</p>
      <Block title="Responsibilities" items={s.responsibilities} />
      <Block title="Challenges" items={s.challenges} />
      <Block title="Results & learnings" items={s.learnings} accent />
      {s.domains.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {s.domains.map(d => <span key={d} className="rounded-full bg-white/[0.05] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-mist">{domainTitle(d)}</span>)}
        </div>
      )}
    </div>
  );
}
function Block({ title, items, accent }) {
  if (!items?.length) return null;
  return (
    <div>
      <p className="label">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map(x => (
          <li key={x} className="flex gap-3 leading-relaxed text-mist">
            <span className={`mt-[0.6em] h-1.5 w-1.5 flex-none rounded-full ${accent ? "bg-signal" : "bg-mist/50"}`} />
            <span className={accent ? "text-snow/90" : ""}>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Journey({ domain }) {
  const [active, setActive] = useState(journey[0].id);
  const reduce = useReducedMotion();
  const current = journey.find(s => s.id === active);
  const dimmed = s => domain && !s.domains.includes(domain);

  return (
    <section id="journey" aria-labelledby="journey-title" className="section">
      <div className="wrap">
        <SectionHead no="02" kicker="Career journey" id="journey-title" title="A journey across technology."
          lead="From apprenticeship to cyber security engineer. Select a station to see responsibilities, challenges and what it taught me." />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <ol className="relative border-l border-white/10" aria-label="Career stations">
            {journey.map(s => {
              const on = s.id === active;
              return (
                <li key={s.id} className={`relative transition-opacity duration-300 ${dimmed(s) ? "opacity-40" : ""}`}>
                  <span aria-hidden="true" className={`absolute -left-[5px] top-7 h-2.5 w-2.5 rounded-full ring-4 ring-ink transition-colors ${on ? "bg-signal" : s.highlight ? "bg-snow" : "bg-mist/50"}`} />
                  <button type="button" onClick={() => setActive(on && window.innerWidth < 1024 ? null : s.id)} aria-expanded={on}
                    className={`group flex w-full items-start justify-between gap-4 rounded-r-xl py-5 pl-7 pr-3 text-left transition-colors ${on ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"}`}>
                    <span>
                      <span className="font-mono text-xs text-mist">{yearOf(s.from)} – {s.to ? yearOf(s.to) : "today"}</span>
                      <span className={`mt-1 block text-lg font-medium leading-snug tracking-tight ${on ? "text-snow" : "text-snow/80 group-hover:text-snow"}`}>{s.role}</span>
                      <span className="mt-1 block text-sm text-mist">{s.org}</span>
                    </span>
                    <ChevronDown size={18} className={`mt-6 flex-none text-mist transition-transform lg:hidden ${on ? "rotate-180 text-signal" : ""}`} />
                  </button>
                  {/* Mobile: details inline */}
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.div key="m" className="overflow-hidden lg:hidden"
                        initial={reduce ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}>
                        <div className="pb-6 pl-7 pr-2 pt-1">
                          <p className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-mist">
                            <span>{period(s.from, s.to)}</span><span>· {duration(s.from, s.to)}</span>
                            <span className="inline-flex items-center gap-1"><MapPin size={13} />{s.place}</span>
                          </p>
                          <Detail s={s} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ol>

          {/* Desktop: sticky detail panel */}
          <div className="hidden lg:block">
            <div className="panel sticky top-24 p-8">
              <AnimatePresence mode="wait">
                {current && (
                  <motion.div key={current.id} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -6 }} transition={{ duration: 0.3 }}>
                    <p className="font-mono text-xs uppercase tracking-wider text-signal">{period(current.from, current.to)} · {duration(current.from, current.to)}</p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight">{current.role}</h3>
                    <p className="mt-2 flex items-center gap-2 text-mist">{current.org}<span className="text-white/20">|</span><MapPin size={14} />{current.place}</p>
                    <div className="my-6 h-px bg-white/10" />
                    <Detail s={current} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
