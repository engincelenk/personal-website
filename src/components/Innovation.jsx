import { useState } from "react";
import { ArrowUpRight, MessageSquare, Target } from "lucide-react";
import SectionHead from "./SectionHead.jsx";
import Reveal from "./Reveal.jsx";
import Icon from "./Icon.jsx";
import AskPortfolio from "./AskPortfolio.jsx";
import ChallengeMe from "./ChallengeMe.jsx";
import { innovation } from "../data/profile.js";

const tabs = [["ask", "Ask my portfolio", MessageSquare], ["challenge", "Challenge me", Target]];

export default function Innovation({ guest }) {
  const [tab, setTab] = useState("ask");
  return (
    <section id="innovation" aria-labelledby="innovation-title" className="section">
      <div className="wrap">
        <SectionHead no="05" kicker="Innovation lab" id="innovation-title" title="Curiosity drives innovation."
          lead="Where I am heading. Not a claim to be an expert in every future technology, but a clear direction and things already built." />

        <div className="grid gap-4 md:grid-cols-3">
          {innovation.map((x, i) => (
            <Reveal key={x.title} delay={i * 0.08} className="panel flex flex-col p-7">
              <Icon name={x.icon} size={22} className="text-signal" />
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{x.title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-mist">{x.text}</p>
              {x.link && <a href={x.link} target="_blank" rel="noopener" className="mt-5 inline-flex items-center gap-1.5 text-sm text-signal hover:underline">immofuchs.info <ArrowUpRight size={14} /></a>}
            </Reveal>
          ))}
        </div>

        <Reveal className="panel mt-10 overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] px-5 py-4 sm:px-8">
            <div>
              <p className="label text-signal">Live lab</p>
              <p className="mt-1 text-sm text-mist">Two small tools built for this portfolio. Both run entirely in your browser.</p>
            </div>
            <div role="tablist" aria-label="Live lab tools" className="flex rounded-full border border-white/10 p-1">
              {tabs.map(([id, label, I]) => (
                <button key={id} role="tab" type="button" aria-selected={tab === id} aria-controls={`panel-${id}`} id={`tab-${id}`} onClick={() => setTab(id)}
                  className={`inline-flex min-h-[40px] items-center gap-2 rounded-full px-4 text-sm transition-colors ${tab === id ? "bg-snow text-ink" : "text-mist hover:text-snow"}`}>
                  <I size={15} />{label}
                </button>
              ))}
            </div>
          </div>
          <div className="p-5 sm:p-8">
            <div role="tabpanel" id="panel-ask" aria-labelledby="tab-ask" hidden={tab !== "ask"}><AskPortfolio /></div>
            <div role="tabpanel" id="panel-challenge" aria-labelledby="tab-challenge" hidden={tab !== "challenge"}><ChallengeMe guest={guest} /></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
