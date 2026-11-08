import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Copy, Check } from "lucide-react";
import { analyzeRole, highlight, shortProfile } from "../lib/match.js";
import { sampleRoles } from "../data/knowledge.js";
import { domains, person } from "../data/profile.js";
import { yearsSince } from "../lib/dates.js";

export default function ChallengeMe({ guest }) {
  const [text, setText] = useState("");
  const [res, setRes] = useState(null);
  const [copied, setCopied] = useState(false);
  const reduce = useReducedMotion();

  const run = t => {
    const v = (t ?? text).trim(); setText(t ?? text);
    if (v.length < 60) { setRes({ error: "Paste a longer role description, at least a few sentences." }); return; }
    const r = analyzeRole(v);
    if (!r.matched.length) { setRes({ error: "No overlap with this portfolio found. The role may be outside my profile, or the post uses very different words." }); return; }
    setRes({ ...r, text: v, letter: shortProfile(v, r, { years: yearsSince(person.careerStart), company: guest?.company, contact: guest?.contact }) });
  };
  const copy = async () => {
    try { await navigator.clipboard.writeText(res.letter); setCopied(true); setTimeout(() => setCopied(false), 1600); } catch { /* ignore */ }
  };
  const verdict = s => (s >= 75 ? "Strong fit" : s >= 55 ? "Good fit" : s >= 35 ? "Partial fit" : "Low fit");
  const C = 2 * Math.PI * 44;

  return (
    <div>
            <textarea id="role" rows={6} value={text} onChange={e => setText(e.target.value)} aria-label="Job post" placeholder="Paste a job post here."
        className="w-full resize-y rounded-xl border border-white/10 bg-ink p-4 text-[15px] leading-relaxed text-snow placeholder:text-mist/60 focus:border-signal focus:outline-none" />
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" className="btn-primary" onClick={() => run()}>Challenge me</button>
        <button type="button" className="btn-ghost" onClick={() => run(sampleRoles.security)}>Try: security</button>
        <button type="button" className="btn-ghost" onClick={() => run(sampleRoles.architecture)}>Try: architect</button>
      </div>

      {res?.error && <p className="mt-5 rounded-xl border-l-2 border-signal bg-white/[0.03] p-4 text-mist">{res.error}</p>}
      {res && !res.error && (
        <div className="mt-8 space-y-6" aria-live="polite">
          <div className="flex items-center gap-5">
            <div className="relative h-24 w-24 flex-none">
              <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90" aria-hidden="true">
                <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="8" />
                <motion.circle cx="50" cy="50" r="44" fill="none" stroke="#E8650A" strokeWidth="8" strokeLinecap="round" strokeDasharray={C}
                  initial={reduce ? false : { strokeDashoffset: C }} animate={{ strokeDashoffset: C * (1 - res.score / 100) }} transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }} />
              </svg>
              <span className="absolute inset-0 grid place-items-center text-3xl font-semibold tabular-nums">{res.score}</span>
            </div>
            <div><p className="text-xl font-semibold">{verdict(res.score)}</p><p className="text-sm text-mist">{res.matched.length} requirements backed by the portfolio{res.gaps.length ? `, ${res.gaps.length} outside my focus` : ""}</p></div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {domains.map(d => {
              const v = res.byDomain[d.id];
              return (
                <div key={d.id} className={v == null ? "opacity-40" : ""}>
                  <div className="flex justify-between text-sm"><span>{d.title}</span><span className="font-mono tabular-nums text-mist">{v ?? "–"}</span></div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                    <motion.div className="h-full rounded-full bg-signal" initial={reduce ? false : { width: 0 }} animate={{ width: `${v ?? 0}%` }} transition={{ duration: 0.9, delay: 0.2 }} />
                  </div>
                </div>
              );
            })}
          </div>
          <details className="rounded-xl border border-white/[0.07] p-4">
            <summary className="cursor-pointer text-sm font-medium">Your post with matches highlighted</summary>
            <p className="mt-3 max-h-56 overflow-auto whitespace-pre-wrap text-sm leading-relaxed text-mist">
              {highlight(res.text, res).map((p, i) => p.mark === "hit" ? <mark key={i} className="rounded bg-signal/90 px-0.5 text-ink">{p.t}</mark>
                : p.mark === "gap" ? <span key={i} className="text-snow line-through decoration-signal decoration-2">{p.t}</span> : <span key={i}>{p.t}</span>)}
            </p>
          </details>
          <div className="rounded-xl border border-white/10 bg-ink p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="label">Short profile for this role</p>
              <button type="button" onClick={copy} className="chip">{copied ? <Check size={14} className="mr-1.5 text-signal" /> : <Copy size={14} className="mr-1.5" />}{copied ? "Copied" : "Copy"}</button>
            </div>
            <pre className="mt-4 whitespace-pre-wrap font-sans text-sm leading-relaxed text-snow/90">{res.letter}</pre>
          </div>
          
        </div>
      )}
    </div>
  );
}
