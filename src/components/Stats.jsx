import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { person, career } from "../data/profile.js";
import { yearsSince } from "../lib/dates.js";
import { useLang } from "../i18n.jsx";

function Count({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [v, setV] = useState(to);
  useEffect(() => {
    if (!inView || reduce) return;
    const t0 = performance.now(); let raf;
    const step = now => { const k = Math.min(1, (now - t0) / 1100); setV(Math.round(to * (1 - Math.pow(1 - k, 3)))); if (k < 1) raf = requestAnimationFrame(step); };
    setV(0); raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, to]);
  return <span ref={ref} className="tabular-nums">{v}{suffix}</span>;
}

/* Only verifiable figures. */
export default function Stats() {
  const { t } = useLang();
  const items = [
    [<Count to={yearsSince(person.careerStart)} suffix="+" />, t("statYears")],
    [<Count to={3} />, t("statCorps")],
    [<Count to={career.length} />, t("statStations")],
    [<><Count to={3} /><span className="text-signal"> + {t("statAi")}</span></>, t("statPillars")]
  ];
  return (
    <section aria-label={t("statLabel")} className="wrap">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-4">
        {items.map(([n, l], i) => (
          <div key={i} className="spot bg-ink p-5 sm:p-6">
            <dt className="text-4xl font-semibold tracking-tight sm:text-5xl">{n}</dt>
            <dd className="mt-2 text-sm leading-snug text-mist">{l}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
