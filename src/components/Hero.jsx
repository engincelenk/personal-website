import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Download } from "lucide-react";
import NetworkCanvas from "./NetworkCanvas.jsx";
import Logo from "./Logo.jsx";
import { hero, person, focuses, logoStrip } from "../data/profile.js";
import { useLang } from "../i18n.jsx";

export default function Hero({ guest, focus }) {
  const reduce = useReducedMotion();
  const { t, L } = useLang();
  const h = L(hero), p = L(person);
  const cv = L((focuses.find(f => f.id === focus) || focuses[0]).file);
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
        <motion.ul {...rise(2)} className="mt-6 flex flex-wrap gap-2" aria-label={t("profileLabel")}>
          {p.roles.map(r => <li key={r} className="rounded-full border border-white/12 bg-ink/60 px-3.5 py-1.5 text-sm text-snow/90 backdrop-blur">{r}</li>)}
        </motion.ul>
        <motion.p {...rise(3)} className="mt-5 max-w-md text-mist">{h.line}</motion.p>
        <motion.div {...rise(4)} className="mt-8 flex flex-wrap gap-3">
          <a href="#journey" className="btn-primary">{t("explore")} <ArrowUpRight size={16} /></a>
          <a href={cv} download className="btn-ghost">{t("downloadCv")} <Download size={16} /></a>
        </motion.div>
        </div>
        <motion.figure {...rise(2)} className="relative hidden lg:block">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-signal/20 blur-3xl" aria-hidden="true" />
          <img src="/engin.jpg" alt={t("portrait")} width="720" height="720" className="aspect-square w-full rounded-[2rem] border border-white/10 object-cover shadow-2xl" />
          <figcaption className="absolute -bottom-4 left-6 rounded-full border border-white/10 bg-ink/90 px-4 py-2 text-sm backdrop-blur">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400 align-middle" />Cyber Security Engineer · Bosch
          </figcaption>
        </motion.figure>
        </div>
        <motion.div {...rise(5)} className="mt-16 md:mt-20">
          <p className="label">{t("workedAt")}</p>
          <ul className="no-scrollbar -mx-5 mt-4 flex gap-3 overflow-x-auto px-5 pb-1 sm:mx-0 sm:grid sm:max-w-[620px] sm:grid-cols-5 sm:overflow-visible sm:px-0">
            {logoStrip.map(id => <li key={id}><Logo id={id} className="h-14 w-28 sm:w-full" pad="p-2" /></li>)}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
