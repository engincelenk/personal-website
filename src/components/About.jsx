import SectionHead from "./SectionHead.jsx";
import Reveal from "./Reveal.jsx";
import { values, quote, person, certificates, trainings } from "../data/profile.js";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="wrap">
        <SectionHead no="06" kicker="Beyond the professional" id="about-title" title="The person behind the technology." />
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <Reveal>
            <figure className="relative">
              <div className="flex items-center gap-5 lg:flex-col lg:items-start">
                <div className="relative flex-none">
                  <span className="absolute -inset-2 rounded-full border border-signal/40" aria-hidden="true" />
                  <img src="/engin.png" alt="Portrait of Engin Celenk" width="456" height="456" loading="lazy"
                    className="h-28 w-28 rounded-full object-cover grayscale-[25%] sm:h-36 sm:w-36 lg:h-56 lg:w-56" />
                </div>
                <figcaption>
                  <p className="text-xl font-semibold tracking-tight">{person.name}</p>
                  <p className="mt-1 text-sm text-mist">{person.location}</p>
                </figcaption>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {person.languages.map(l => (
                  <li key={l.name} className="rounded-xl border border-white/[0.07] px-4 py-3"><p className="text-sm font-medium">{l.name}</p><p className="text-xs text-mist">{l.level}</p></li>
                ))}
              </ul>
            </figure>
          </Reveal>
          <div>
            <ul className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
              {values.map((v, i) => (
                <Reveal as="li" key={v.title} delay={i * 0.05} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8">
                  <span className="font-mono text-xs text-signal">0{i + 1}</span>
                  <span className="text-xl font-medium tracking-tight sm:w-72 sm:flex-none">{v.title}</span>
                  <span className="text-mist">{v.text}</span>
                </Reveal>
              ))}
            </ul>
            <Reveal as="blockquote" className="mt-12 border-l-2 border-signal pl-6">
              <p className="text-2xl font-medium leading-snug tracking-tight md:text-3xl">“{quote}”</p>
              <footer className="mt-4 text-sm text-mist">— {person.name}</footer>
            </Reveal>
            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="label">Certificates</p>
                <ul className="mt-4 space-y-3">{certificates.map(c => <li key={c.name} className="flex gap-4 text-sm"><span className="w-10 flex-none font-mono text-mist">{c.year ?? "—"}</span><span>{c.name}</span></li>)}</ul>
              </div>
              <div>
                <p className="label">Further training</p>
                <ul className="mt-4 space-y-3">{trainings.map(c => <li key={c.name} className="flex gap-4 text-sm text-mist"><span className="w-10 flex-none font-mono">{c.year}</span><span>{c.name}</span></li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
