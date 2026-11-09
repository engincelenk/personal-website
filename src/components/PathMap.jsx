import { useRef } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import Logo from "./Logo.jsx";
import Icon from "./Icon.jsx";

/* A path through stations. Clicking a station draws the path up to it and
   opens its card. Desktop: a map (curve or staircase). Phone: a rail. */
function Node({ item, state, size = "h-12 w-12", logoSize = "h-12 w-20" }) {
  const ring = state === "active" ? "ring-2 ring-signal ring-offset-4 ring-offset-ink scale-110" : state === "done" ? "ring-1 ring-signal/50" : "opacity-60 grayscale";
  return item.logo
    ? <Logo id={item.logo} className={`${logoSize} transition-all duration-300 ${ring}`} pad="p-1.5" />
    : <span className={`grid ${size} flex-none place-items-center rounded-xl border border-white/15 bg-navy text-snow transition-all duration-300 ${ring}`}><Icon name={item.icon} size={20} /></span>;
}

export default function PathMap({ items, mode = "curve", active, setActive, renderCard, label }) {
  const reduce = useReducedMotion();
  const root = useRef(null);
  const seen = useInView(root, { once: true, amount: 0.3 }) || reduce;
  const n = items.length, real = items.findIndex(x => x.id === active);
  const ai = seen ? real : -1; // the path draws itself once the section scrolls into view
  const pop = i => reduce ? {} : { initial: { opacity: 0, scale: 0.7 }, animate: seen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }, transition: { duration: 0.4, delay: i * 0.09, ease: [0.2, 0.8, 0.2, 1] } };
  const W = 1000, H = mode === "stairs" ? 330 : 250, padX = 56;
  const pts = items.map((_, i) => {
    const x = padX + (i * (W - 2 * padX)) / (n - 1);
    const y = mode === "stairs" ? H - 70 - (i * (H - 150)) / (n - 1) : i % 2 ? 70 : 150;
    return [x, y];
  });
  const seg = i => {
    const [x0, y0] = pts[i], [x1, y1] = pts[i + 1];
    if (mode === "stairs") return `M ${x0} ${y0} H ${x1} V ${y1}`;
    const mx = (x0 + x1) / 2; return `M ${x0} ${y0} C ${mx} ${y0}, ${mx} ${y1}, ${x1} ${y1}`;
  };
  const state = i => (i === ai ? "active" : i < ai ? "done" : "todo");
  const draw = i => reduce ? {} : { initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 0.22, delay: i * 0.14, ease: "easeInOut" } };
  const card = real >= 0 && (
    <AnimatePresence mode="wait">
      <motion.div key={items[real].id} initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -6 }}
        transition={{ duration: 0.3, delay: reduce ? 0 : Math.min(0.5, real * 0.06) }}>
        {renderCard(items[real])}
      </motion.div>
    </AnimatePresence>
  );

  return (
    <div ref={root}>
      {/* Desktop map */}
      <div className="hidden md:block">
        <div className="relative w-full" style={{ aspectRatio: `${W} / ${H}` }} role="group" aria-label={label}>
          <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
            {pts.slice(0, -1).map((_, i) => <path key={`b${i}`} d={seg(i)} fill="none" stroke="rgba(169,180,194,.22)" strokeWidth="2" strokeDasharray="4 6" />)}
            {pts.slice(0, -1).map((_, i) => i < ai && (
              <motion.path key={`a${ai}-${i}`} d={seg(i)} fill="none" stroke="#E8650A" strokeWidth="3" strokeLinecap="round" {...draw(i)} />
            ))}
          </svg>
          {items.map((it, i) => (
            <button key={it.id} type="button" onClick={() => setActive(it.id)} aria-pressed={i === real}
              className="group absolute flex w-28 -translate-x-1/2 -translate-y-6 flex-col items-center text-center"
              style={{ left: `${(pts[i][0] / W) * 100}%`, top: `${(pts[i][1] / H) * 100}%` }}>
              <motion.span {...pop(i)} className="block"><Node item={it} state={state(i)} /></motion.span>
              <span className={`mt-3 font-mono text-[11px] ${i <= ai ? "text-signal" : "text-mist"}`}>{it.year || " "}</span>
              <span className={`mt-0.5 text-[13px] font-medium leading-tight transition-colors ${i === ai ? "text-snow" : "text-mist group-hover:text-snow"}`}>{it.short}</span>
            </button>
          ))}
        </div>
        <div className="mx-auto mt-6 max-w-3xl">{card}</div>
      </div>

      {/* Phone rail */}
      <ol className="md:hidden" aria-label={label}>
        {items.map((it, i) => (
          <li key={it.id} className="relative pl-16">
            {i < n - 1 && (
              <span className="absolute left-[23px] top-14 h-[calc(100%-3rem)] w-0.5 bg-white/10" aria-hidden="true">
                {i < ai && <motion.span key={`r${ai}`} className="absolute inset-0 origin-top bg-signal" initial={reduce ? false : { scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.2, delay: i * 0.12 }} />}
              </span>
            )}
            <button type="button" onClick={() => setActive(it.id)} aria-expanded={i === real} className="flex min-h-[64px] w-full items-center gap-4 py-2 text-left">
              <motion.span {...pop(i)} className="absolute left-0"><Node item={it} state={state(i)} logoSize="h-12 w-12" /></motion.span>
              <span>
                <span className={`block font-mono text-[11px] ${i <= ai ? "text-signal" : "text-mist"}`}>{it.year || " "}</span>
                <span className={`block text-base font-medium leading-tight ${i === ai ? "text-snow" : "text-snow/75"}`}>{it.short}</span>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {i === real && (
                <motion.div className="overflow-hidden" initial={reduce ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={reduce ? undefined : { height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                  <div className="pb-5 pt-1">{renderCard(it, true)}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ol>
    </div>
  );
}
