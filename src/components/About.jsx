import { ArrowUpRight } from "lucide-react";
import SectionHead from "./SectionHead.jsx";
import { values, quote, person, certificates, trainings, sideProject } from "../data/profile.js";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="wrap">
        <SectionHead no="05" kicker="About" id="about-title" title="The person behind the technology." />
        <div className="grid gap-5 lg:grid-cols-3">
          {/* Who */}
          <div className="panel flex flex-col p-6 lg:row-span-2">
            <div className="flex items-center gap-4">
              <img src="/engin.png" alt="Portrait of Engin Celenk" width="456" height="456" loading="lazy" className="h-20 w-20 rounded-full object-cover ring-2 ring-signal/50 ring-offset-4 ring-offset-ink" />
              <div><p className="text-lg font-semibold">{person.name}, {person.degree}</p><p className="text-sm text-mist">{person.location}</p></div>
            </div>
            <blockquote className="mt-6 border-l-2 border-signal pl-4 text-lg font-medium leading-snug">“{quote}”</blockquote>
            <ul className="mt-6 flex flex-wrap gap-2">{values.map(v => <li key={v} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-snow/85">{v}</li>)}</ul>
            <a href={sideProject.link} target="_blank" rel="noopener" className="mt-6 flex items-center justify-between gap-3 rounded-xl bg-white/[0.04] p-4 transition-colors hover:bg-white/[0.07] lg:mt-auto">
              <span><span className="block text-sm font-semibold">Side project: {sideProject.name}</span><span className="block text-xs text-mist">{sideProject.text}</span></span>
              <ArrowUpRight size={18} className="flex-none text-signal" />
            </a>
          </div>
          {/* Certificates */}
          <div className="panel p-6 lg:col-span-2">
            <p className="label">Certificates</p>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {certificates.map(c => (
                <li key={c.name} className="flex flex-col items-center gap-2 rounded-xl border border-white/[0.07] p-3 text-center">
                  {c.badge ? <img src={c.badge} alt="" className="h-14 w-14 object-contain" />
                    : <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-signal/60 font-mono text-xs font-semibold">{c.short}</span>}
                  <span className="text-xs leading-tight text-snow/85">{c.name}</span>
                  {c.year && <span className="font-mono text-[10px] text-mist">{c.year}</span>}
                </li>
              ))}
            </ul>
            <details className="mt-4 text-sm">
              <summary className="cursor-pointer text-mist hover:text-snow">+ {trainings.length} further trainings</summary>
              <ul className="mt-3 flex flex-wrap gap-2">{trainings.map(t => <li key={t.name} className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-mist"><span className="font-mono">{t.year}</span> · {t.name}</li>)}</ul>
            </details>
          </div>
          {/* Languages */}
          <div className="panel p-6 lg:col-span-2">
            <p className="label">Languages</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {person.languages.map(l => (
                <li key={l.name} className="rounded-xl border border-white/[0.07] p-4"><p className="font-semibold">{l.name}</p><p className="mt-0.5 text-sm text-mist">{l.level}</p></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
