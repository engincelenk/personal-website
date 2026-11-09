import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ContactForm from "./components/ContactForm.jsx";
import { LangProvider, useLang } from "./i18n.jsx";
import LangSwitch from "./components/LangSwitch.jsx";
import SectionHead from "./components/SectionHead.jsx";
import PathMap from "./components/PathMap.jsx";
import Logo from "./components/Logo.jsx";
import NetworkCanvas from "./components/NetworkCanvas.jsx";
import ServiceMatrix from "./components/ServiceMatrix.jsx";
import Footer from "./components/Footer.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Spotlight from "./components/Spotlight.jsx";
import LogoMarquee from "./components/LogoMarquee.jsx";
import { person, logoStrip } from "./data/profile.js";
import { pillars as rawPillars, aiVertical as rawAi, process as rawProcess, industries, timing as rawTiming, formats as rawFormats, fl } from "./data/services.js";

function Page() {
  const { lang, L } = useLang();
  const T = L(fl);
  const pillars = L(rawPillars), ai = L(rawAi), steps = L(rawProcess), timing = L(rawTiming), formats = L(rawFormats);
  const areas = [...pillars.map(p => ({ id: p.id, title: p.title })), { id: "ai", title: ai.title }];
  const [picked, setPicked] = useState([]);
  const [format, setFormat] = useState("advisory");
  const [when, setWhen] = useState("q");
  const [company, setCompany] = useState("");
  const [note, setNote] = useState("");
  const [step, setStep] = useState(steps[0].id);

  useEffect(() => { document.title = T.title; document.querySelector('meta[name="description"]')?.setAttribute("content", T.desc); }, [T]);
  const toggle = id => setPicked(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);

  const mail = useMemo(() => {
    const names = areas.filter(a => picked.includes(a.id)).map(a => a.title);
    const subject = T.subject(names.join(", "));
    const body = T.body(names.map(n => `• ${n}`).join("\n"), formats[format], timing.find(t => t.id === when).label, company.trim(), note.trim());
    return { names, subject, body };
  }, [picked, format, when, company, note, lang]); // eslint-disable-line react-hooks/exhaustive-deps
  const chip = on => `min-h-[44px] rounded-xl border px-3 text-sm font-medium transition-colors ${on ? "border-signal bg-signal/10 text-snow" : "border-white/10 text-mist hover:text-snow"}`;

  return (
    <>
      <ScrollProgress />
      <Spotlight />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-ink/85 backdrop-blur-xl" style={{ paddingTop: "env(safe-area-inset-top)" }}>
        <div className="wrap flex h-16 items-center justify-between gap-3">
          <a href={`/?lang=${lang}`} className="inline-flex min-w-0 items-center gap-2 text-sm text-mist hover:text-snow"><ArrowLeft size={16} /><span className="truncate"><span className="text-snow">{person.name}</span>, {person.degree} · {T.back}</span></a>
          <LangSwitch />
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden pb-10 pt-28 md:pt-36">
          <div className="absolute inset-0 -z-10 opacity-40 md:opacity-80 md:[mask-image:linear-gradient(to_right,rgba(0,0,0,.2),black_60%)]"><NetworkCanvas /></div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-ink" />
          <div className="wrap">
            <p className="label flex items-center gap-3"><span className="h-px w-8 bg-signal" />{T.kicker}</p>
            <h1 className="mt-5 max-w-[20ch] text-[2.3rem] font-semibold leading-[1.04] tracking-[-0.04em] sm:text-6xl">{T.h1a} <span className="text-signal">{T.h1b}</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{T.lead}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#request" className="btn-primary">{T.cta} <ArrowUpRight size={16} /></a>
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-ink/60 py-1.5 pl-1.5 pr-4 backdrop-blur">
                <img src="/engin.jpg" alt="" className="h-9 w-9 rounded-full object-cover" />
                <span className="text-sm">{person.name}, {person.degree}</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section scroll-mt-16">
          <div className="wrap">
            <SectionHead no="01" kicker={T.mapKicker} title={T.mapTitle} lead={T.mapLead} />
            <ServiceMatrix T={T} />
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <SectionHead no="02" kicker={T.howKicker} title={T.howTitle} lead={T.howLead} />
            <PathMap items={steps} mode="curve" active={step} setActive={setStep} label={T.howKicker}
              renderCard={(x, compact) => <div className={`panel ${compact ? "p-4" : "p-6"}`}><h3 className="text-lg font-semibold">{x.title}</h3><p className="mt-1 text-mist">{x.text}</p></div>} />
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <SectionHead no="03" kicker={T.expKicker} title={T.expTitle} />
            <ul className="flex flex-wrap gap-2">{L(industries).map(i => <li key={i} className="rounded-full border border-white/10 px-4 py-2 text-sm">{i}</li>)}</ul>
<div className="mt-2"><LogoMarquee /></div>
          </div>
        </section>

        <section id="request" className="section scroll-mt-16">
          <div className="wrap">
            <SectionHead no="04" kicker={T.cfgKicker} title={T.cfgTitle} lead={T.cfgLead} />
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
              <div className="panel min-w-0 space-y-6 p-5 sm:p-7">
                <fieldset>
                  <legend className="label">{T.cfgAreas}</legend>
                  <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {areas.map(a => <button key={a.id} type="button" aria-pressed={picked.includes(a.id)} onClick={() => toggle(a.id)} className={`${chip(picked.includes(a.id))} text-left`}>{a.title}</button>)}
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="label">{T.cfgFormat}</legend>
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {Object.entries(formats).map(([id, label]) => <button key={id} type="button" aria-pressed={format === id} onClick={() => setFormat(id)} className={chip(format === id)}>{label}</button>)}
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="label">{T.cfgTiming}</legend>
                  <div className="mt-3 grid gap-2 sm:grid-cols-3">
                    {timing.map(t => <button key={t.id} type="button" aria-pressed={when === t.id} onClick={() => setWhen(t.id)} className={chip(when === t.id)}>{t.label}</button>)}
                  </div>
                </fieldset>
                <label className="block"><span className="label">{T.cfgCompany}</span>
                  <input value={company} onChange={e => setCompany(e.target.value)} className="mt-2 min-h-[48px] w-full rounded-xl border border-white/10 bg-ink px-4 text-[16px] focus:border-signal focus:outline-none" /></label>
                <label className="block"><span className="label">{T.cfgNote}</span>
                  <textarea rows={3} value={note} onChange={e => setNote(e.target.value)} placeholder={T.cfgNotePh} className="mt-2 w-full rounded-xl border border-white/10 bg-ink p-4 text-[16px] placeholder:text-mist/60 focus:border-signal focus:outline-none" /></label>
              </div>
              <div className="panel flex min-w-0 flex-col p-5 sm:p-7 lg:sticky lg:top-24 lg:self-start">
                <p className="label">{T.preview}</p>
                {mail.names.length
                  ? <div className="mt-4"><ContactForm key={mail.subject} initialMessage={mail.body} subject={mail.subject} source="freelance" /></div>
                  : <p className="mt-3 rounded-xl border border-dashed border-white/15 p-6 text-center text-mist">{T.none}</p>}
                <p className="mt-5 text-xs text-mist">{T.note}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function FreelanceApp() { return <LangProvider><Page /></LangProvider>; }
