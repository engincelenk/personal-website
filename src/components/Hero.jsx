import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import NetworkCanvas from "./NetworkCanvas.jsx";
import { hero, person, focuses } from "../data/profile.js";

export default function Hero({ guest, focus }) {
  const reduce = useReducedMotion();
  const cv = (focuses.find(f => f.id === focus) || focuses[0]).file;
  const rise = i => reduce ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.2, 0.8, 0.2, 1] } };

  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28">
      <div className="absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_70%_45%,rgba(30,58,95,.55),transparent_70%)]" />
      <div className="absolute inset-0 -z-10 opacity-45 md:opacity-100 md:[mask-image:linear-gradient(to_right,rgba(0,0,0,.35),black_55%)]"><NetworkCanvas /></div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-ink" />

      <div className="wrap">
        {guest && (
          <motion.p {...rise(0)} className="mb-8 inline-flex max-w-xl items-center gap-3 rounded-full border border-signal/30 bg-signal/10 px-4 py-2 text-sm text-snow">
            <span className="h-1.5 w-1.5 flex-none rounded-full bg-signal" />{guest}
          </motion.p>
        )}
        <motion.p {...rise(0)} className="label flex items-center gap-3">
          <span className="h-px w-8 bg-signal" />{hero.eyebrow}
        </motion.p>
        <motion.h1 {...rise(1)} id="hero-title" className="mt-6 max-w-[15ch] text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[5.4rem]">
          {hero.title[0]} <span className="text-signal">{hero.title[1]}</span>
        </motion.h1>
        <motion.p {...rise(2)} className="mt-6 text-xl font-medium tracking-tight text-snow/90 md:text-2xl">{hero.claim}</motion.p>
        <motion.ul {...rise(3)} className="mt-6 flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.12em] text-mist" aria-label="Roles">
          {person.roles.map((r, i) => <li key={r} className="flex items-center gap-3">{i > 0 && <span className="text-signal">·</span>}{r}</li>)}
        </motion.ul>
        <motion.p {...rise(4)} className="mt-6 max-w-md text-base leading-relaxed text-mist">{hero.line}</motion.p>
        <motion.div {...rise(5)} className="mt-10 flex flex-wrap gap-3">
          <a href="#journey" className="btn-primary">Explore my journey <ArrowUpRight size={16} /></a>
          <a href={cv} download className="btn-ghost">Download CV <Download size={16} /></a>
        </motion.div>
      </div>

      <a href="#intro" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-mist sm:flex">
        Scroll to discover my perspective
        <ArrowDown size={14} className={reduce ? "" : "animate-bounce"} />
      </a>
    </section>
  );
}
