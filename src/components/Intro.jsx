import Reveal from "./Reveal.jsx";
import Icon from "./Icon.jsx";
import { intro } from "../data/profile.js";

export default function Intro() {
  return (
    <section id="intro" aria-labelledby="intro-title" className="section">
      <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="label flex items-center gap-3"><span className="text-signal">01</span><span className="h-px w-8 bg-white/15" />Personal introduction</p>
          <h2 id="intro-title" className="h2 mt-4">More than a job title.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xl leading-relaxed text-snow/90 md:text-2xl md:leading-relaxed">{intro.text}</p>
        </Reveal>
      </div>
      <div className="wrap mt-16 grid gap-4 md:grid-cols-3">
        {intro.pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className="panel group p-7 transition-colors hover:border-signal/40">
            <Icon name={p.icon} size={22} className="text-signal" />
            <h3 className="mt-6 text-lg font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-2 leading-relaxed text-mist">{p.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
