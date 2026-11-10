import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { ArrowUpRight, Download } from "lucide-react";
import NetworkCanvas from "./NetworkCanvas.jsx";
import LogoWall from "./LogoWall.jsx";
import { hero, person, cv as rawCv, domains } from "../data/profile.js";
import { useLang } from "../i18n.jsx";

export default function Hero({ guest }) {
  const reduce = useReducedMotion();
  const { t, L } = useLang();
  const h = L(hero), p = L(person);
  const cv = L(rawCv.file);
  const words = L(domains).map(d => d.title);
  const [wi, setWi] = useState(0);
  useEffect(() => { if (reduce) return; const id = setInterval(() => setWi(i => (i + 1) % words.length), 2200); return () => clearInterval(id); }, [reduce, words.length]);
  // photo tilts gently towards the pointer
  const fig = useRef(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 120, damping: 14 }), ry = useSpring(useMotionValue(0), { stiffness: 120, damping: 14 });
  const tilt = e => { if (reduce || !fig.current) return; const r = fig.current.getBoundingClientRect(); ry.set(((e.clientX - r.left) / r.width - 0.5) * 14); rx.set(-((e.clientY - r.top) / r.height - 0.5) * 14); };
  const untilt = () => { rx.set(0); ry.set(0); };
  const rise = i => reduce ? {} : { initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.2, 0.8, 0.2, 1] } };

  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden pb-14 pt-28 md:pt-36">
      <div className="absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_70%_40%,rgba(30,58,95,.55),transparent_70%)]" />
      <div className="absolute inset-0 -z-10 opacity-40 md:opacity-100 md:[mask-image:linear-gradient(to_right,rgba(0,0,0,.3),black_55%)]"><NetworkCanvas /></div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-ink" />
      <div className="wrap">
        {guest && (
          <motion.p {...rise(0)} className="mb-8 inline-flex max-w-xl items-center gap-3 rounded-full border border-signal/30 bg-signal/10 px-4 py-2 text-sm">
            <span className="h-1.5 w-1.5 flex-none rounded-full bg-signal" />{guest}
          </motion.p>
        )}
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center lg:gap-12">
        <div>
        <motion.p {...rise(0)} className="flex items-center gap-3 text-lg font-medium tracking-tight sm:text-xl">
          <img src="/engin.jpg" alt="" width="720" height="720" className="h-12 w-12 rounded-full object-cover ring-2 ring-signal/60 lg:hidden" />
          <span>{p.name}<span className="text-signal">, {p.degree}</span></span>
        </motion.p>
        <motion.h1 {...rise(1)} id="hero-title" className="mt-4 max-w-[16ch] text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[5.2rem]">
          {h.title[0]} <span className="text-signal">{h.title[1]}</span>
        </motion.h1>
        <motion.p {...rise(2)} className="mt-5 flex h-9 items-center gap-3 text-xl font-medium tracking-tight sm:text-2xl" aria-hidden={reduce ? undefined : "true"}>
          <span className="h-px w-8 flex-none bg-signal" />
          {reduce ? <span className="text-base text-snow/90">{words.join(" · ")}</span> : (
            <span className="relative block h-9 flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span key={words[wi]} className={`absolute inset-0 flex items-center ${wi === words.length - 1 ? "text-signal" : "text-snow"}`}
                  initial={{ y: 22, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -22, opacity: 0 }} transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}>{words[wi]}</motion.span>
              </AnimatePresence>
            </span>
          )}
        </motion.p>
        <motion.ul {...rise(2)} className="mt-5 flex flex-wrap gap-2" aria-label={t("profileLabel")}>
          {p.roles.map(r => <li key={r} className="rounded-full border border-white/12 bg-ink/60 px-3.5 py-1.5 text-sm text-snow/90 backdrop-blur">{r}</li>)}
        </motion.ul>
        <motion.p {...rise(3)} className="mt-5 max-w-md text-mist">{h.line}</motion.p>
        <motion.div {...rise(4)} className="mt-8 flex flex-wrap gap-3">
          <a href="#journey" className="btn-primary">{t("explore")} <ArrowUpRight size={16} /></a>
          <a href={cv} download className="btn-ghost">{t("downloadCv")} <Download size={16} /></a>
        </motion.div>
        </div>
        <motion.figure {...rise(2)} ref={fig} onPointerMove={tilt} onPointerLeave={untilt} style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }} className="relative hidden lg:block">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-signal/20 blur-3xl" aria-hidden="true" />
          <img src="/engin.jpg" alt={t("portrait")} width="720" height="720" className="aspect-square w-full rounded-[2rem] border border-white/10 object-cover shadow-2xl" />
          <figcaption className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-white/10 bg-ink/90 px-4 py-2 text-sm backdrop-blur">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400 align-middle" />{t("photoLabel")}
          </figcaption>
        </motion.figure>
        </div>
        <motion.div {...rise(5)} className="mt-16 md:mt-20">
          <p className="label">{t("workedAt")}</p>
          <LogoWall />
        </motion.div>
      </div>
    </section>
  );
}
