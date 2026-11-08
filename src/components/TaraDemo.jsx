import { useMemo, useState } from "react";
import { ShieldCheck, ShieldAlert } from "lucide-react";
import { taraDemo } from "../data/profile.js";

const STRIDE = { S: "Spoofing", T: "Tampering", R: "Repudiation", I: "Information disclosure", D: "Denial of service", E: "Elevation of privilege" };
const level = r => (r >= 15 ? ["Critical", "#E8650A"] : r >= 9 ? ["High", "#F09A5A"] : r >= 5 ? ["Medium", "#A9B4C2"] : ["Low", "#5E6E84"]);

export default function TaraDemo() {
  const { elements, flows, threats } = taraDemo;
  const [sel, setSel] = useState("api");
  const [mitigated, setMitigated] = useState(false);
  const feasOf = t => (mitigated ? Math.max(1, t.feas - 2) : t.feas);
  const all = useMemo(() => Object.entries(threats).flatMap(([el, ts]) => ts.map(t => ({ ...t, el }))), [threats]);
  const highCount = all.filter(t => t.impact * feasOf(t) >= 9).length;
  const byId = Object.fromEntries(elements.map(e => [e.id, e]));
  const elRisk = id => Math.max(...threats[id].map(t => t.impact * feasOf(t)));

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-deep/80">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] px-5 py-4">
        <div>
          <p className="label text-signal">Interactive demo</p>
          <p className="mt-1 text-sm text-mist">Mini TARA on a {taraDemo.system.toLowerCase()}. Illustrative example, no company data.</p>
        </div>
        <button type="button" role="switch" aria-checked={mitigated} onClick={() => setMitigated(m => !m)}
          className={`inline-flex min-h-[40px] items-center gap-3 rounded-full border px-4 text-sm transition-colors ${mitigated ? "border-signal/60 text-snow" : "border-white/15 text-mist hover:text-snow"}`}>
          <span className={`relative h-5 w-9 rounded-full transition-colors ${mitigated ? "bg-signal" : "bg-white/15"}`}>
            <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-snow transition-all ${mitigated ? "left-[18px]" : "left-0.5"}`} />
          </span>
          Apply measures
        </button>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.15fr_1fr]">
        {/* System model */}
        <div className="border-b border-white/[0.06] p-4 sm:p-6 lg:border-b-0 lg:border-r">
          <p className="label mb-3">1 · System model — select an element</p>
          <div role="group" aria-label="System elements" className="grid grid-cols-2 gap-2 sm:hidden">
            {elements.map(e => {
              const on = sel === e.id; const [lv, col] = level(elRisk(e.id));
              return (
                <button key={e.id} type="button" onClick={() => setSel(e.id)} aria-pressed={on}
                  className={`min-h-[52px] rounded-lg border px-3 py-2 text-left transition-colors ${on ? "border-signal bg-ink" : "border-white/15 bg-ink/90"}`}>
                  <span className="block text-sm font-medium leading-tight">{e.name}</span>
                  <span className="mt-1 flex items-center gap-1.5 text-[11px] text-mist"><span className="h-1.5 w-1.5 rounded-full" style={{ background: col }} />{e.kind} · {lv}</span>
                </button>
              );
            })}
          </div>
          <div className="relative hidden aspect-[16/10] w-full sm:block">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <path d="M21 8 H97 V54 H73 V92 H21 Z" fill="none" stroke="rgba(232,101,10,.35)" strokeDasharray="1.2 1.2" strokeWidth=".35" vectorEffect="non-scaling-stroke" />
              {flows.map(([a, b]) => {
                const A = byId[a], Bb = byId[b], on = sel === a || sel === b;
                return <line key={a + b} x1={A.x + 8} y1={A.y} x2={Bb.x + 8} y2={Bb.y} stroke={on ? "#E8650A" : "rgba(169,180,194,.35)"} strokeWidth={on ? 1.6 : 1} vectorEffect="non-scaling-stroke" />;
              })}
            </svg>
            <span className="absolute left-[22%] top-[9%] font-mono text-[9px] uppercase tracking-wider text-signal/70">Trust boundary</span>
            {elements.map(e => {
              const on = sel === e.id; const [, col] = level(elRisk(e.id));
              return (
                <button key={e.id} type="button" onClick={() => setSel(e.id)} aria-pressed={on}
                  style={{ left: `${e.x}%`, top: `${e.y}%` }}
                  className={`absolute w-[17%] min-w-[64px] -translate-y-1/2 rounded-lg border px-1.5 py-1.5 text-center transition-all sm:px-2 sm:py-2
                    ${e.kind === "Data store" ? "rounded-none border-x-0" : ""} ${e.kind === "External entity" ? "rounded-sm" : ""}
                    ${on ? "border-signal bg-ink shadow-[0_0_30px_-8px_rgba(232,101,10,.8)]" : "border-white/15 bg-ink/90 hover:border-white/35"}`}>
                  <span className="block text-[10px] font-medium leading-tight sm:text-xs">{e.name}</span>
                  <span className="mt-1 block h-1 rounded-full" style={{ background: col }} />
                </button>
              );
            })}
          </div>
          <p className="mt-3 hidden text-xs text-mist sm:block">Bar colour = highest risk at this element. Lines = data flows.</p>
        </div>

        {/* Threats + matrix */}
        <div className="p-4 sm:p-6">
          <p className="label mb-3">2 · STRIDE threats & risk — {byId[sel].name}</p>
          <ul className="space-y-2.5">
            {threats[sel].map(t => {
              const r = t.impact * feasOf(t); const [lv, col] = level(r);
              return (
                <li key={t.t} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
                  <div className="flex items-start gap-3">
                    <span title={STRIDE[t.s]} className="grid h-7 w-7 flex-none place-items-center rounded-md border border-white/15 font-mono text-xs font-semibold">{t.s}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium leading-snug">{t.t}</p>
                      <p className="mt-0.5 text-xs text-mist">{STRIDE[t.s]} · impact {t.impact} × feasibility {feasOf(t)}</p>
                      {mitigated && <p className="mt-1.5 flex gap-1.5 text-xs text-snow/80"><ShieldCheck size={14} className="flex-none text-signal" />{t.m}</p>}
                    </div>
                    <span className="flex-none rounded-full px-2 py-0.5 font-mono text-[10px] uppercase" style={{ color: col, border: `1px solid ${col}` }}>{lv}</span>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex items-end gap-5">
            <div>
              <p className="label mb-2">3 · Risk matrix</p>
              <div className="relative grid grid-cols-5 gap-[3px]" role="img" aria-label="Risk matrix of all threats, impact by feasibility">
                {Array.from({ length: 25 }, (_, i) => {
                  const imp = 5 - Math.floor(i / 5), fe = (i % 5) + 1; const [, col] = level(imp * fe);
                  const here = all.filter(t => t.impact === imp && feasOf(t) === fe);
                  const mine = here.some(t => t.el === sel);
                  return (
                    <span key={i} className="relative grid h-6 w-6 place-items-center rounded-[4px] sm:h-7 sm:w-7" style={{ background: `${col}22` }}>
                      {here.length > 0 && <span className={`h-2.5 w-2.5 rounded-full ${mine ? "ring-2 ring-snow" : ""}`} style={{ background: col }} />}
                    </span>
                  );
                })}
              </div>
              <p className="mt-1.5 flex justify-between font-mono text-[9px] uppercase text-mist"><span>feasibility →</span></p>
            </div>
            <div className="pb-6">
              <p className="flex items-center gap-2 text-3xl font-semibold tabular-nums">
                {mitigated ? <ShieldCheck className="text-signal" /> : <ShieldAlert className="text-mist" />}{highCount}
              </p>
              <p className="mt-1 max-w-[16ch] text-xs leading-snug text-mist">of {all.length} threats rated high or critical {mitigated ? "after measures" : "before measures"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
