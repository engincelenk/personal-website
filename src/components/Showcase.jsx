import { ArrowUpRight, Lock } from "lucide-react";
import SectionHead from "./SectionHead.jsx";
import Reveal from "./Reveal.jsx";
import TaraDemo from "./TaraDemo.jsx";
import { cases, domains } from "../data/profile.js";

const steps = [["situation", "Situation"], ["challenge", "Challenge"], ["approach", "Approach"], ["result", "Result"]];

export default function Showcase({ domain }) {
  return (
    <section id="showcase" aria-labelledby="showcase-title" className="section">
      <div className="wrap">
        <SectionHead no="04" kicker="The showcase" id="showcase-title" title="Show, don’t tell."
          lead="Selected case studies that show how I work. Internal company information and confidential system details stay out: this is about the way of thinking, not about company data." />

        <div className="space-y-6">
          {cases.map(c => {
            const dim = domain && c.domain !== domain && !domains.find(d => d.id === domain)?.cases.includes(c.id);
            return (
              <Reveal key={c.id} as="article" className={`panel scroll-mt-24 p-5 transition-opacity duration-300 sm:p-8 lg:p-10 ${dim ? "opacity-50" : ""}`}>
                <div id={`case-${c.id}`} className="scroll-mt-24" />
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="label"><span className="text-signal">{c.label}</span> · {domains.find(d => d.id === c.domain).title}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{c.title}</h3>
                    <p className="mt-2 max-w-2xl text-mist">{c.teaser}</p>
                  </div>
                  {c.link && <a href={c.link} target="_blank" rel="noopener" className="btn-ghost">Visit {new URL(c.link).host}<ArrowUpRight size={16} /></a>}
                </div>
                <ol className="mt-8 grid gap-px overflow-hidden rounded-xl bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
                  {steps.map(([k, label], i) => (
                    <li key={k} className="bg-ink/95 p-4 sm:p-5">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-mist"><span className={k === "result" ? "text-signal" : "text-snow/60"}>{String(i + 1).padStart(2, "0")}</span> {label}</p>
                      {Array.isArray(c[k])
                        ? <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-snow/85">{c[k].map(a => <li key={a} className="flex gap-2"><span className="text-signal">›</span>{a}</li>)}</ul>
                        : <p className={`mt-3 text-sm leading-relaxed ${k === "result" ? "text-snow" : "text-snow/85"}`}>{c[k]}</p>}
                    </li>
                  ))}
                </ol>
                {c.demo && <TaraDemo />}
              </Reveal>
            );
          })}
        </div>
        <p className="mt-6 flex items-center gap-2 text-sm text-mist"><Lock size={14} />Case studies are generalised. No confidential details from employers or customers.</p>
      </div>
    </section>
  );
}
