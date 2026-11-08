import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Check, ChevronDown, Copy, Mail, Plus } from "lucide-react";
import { LangProvider, useLang } from "./i18n.jsx";
import LangSwitch from "./components/LangSwitch.jsx";
import SectionHead from "./components/SectionHead.jsx";
import PathMap from "./components/PathMap.jsx";
import Logo from "./components/Logo.jsx";
import Icon from "./components/Icon.jsx";
import NetworkCanvas from "./components/NetworkCanvas.jsx";
import Footer from "./components/Footer.jsx";
import { person, logoStrip } from "./data/profile.js";
import { areas as rawAreas, services as rawServices, process as rawProcess, industries, timing as rawTiming, formats as rawFormats, fl } from "./data/services.js";

function ServiceCard({ s, open, onToggle, selected, onSelect, T }) {
  const reduce = useReducedMotion();
  return (
    <motion.li layout={!reduce} className={`panel flex flex-col overflow-hidden transition-colors ${selected ? "border-signal/60" : ""}`}>
      <button type="button" onClick={onToggle} aria-expanded={open} className="flex w-full items-start gap-4 p-5 text-left">
        <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-signal/10 text-signal"><Icon name={s.icon} size={20} /></span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-lg font-semibold leading-tight tracking-tight">{s.name}</span>
            <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-mist">{s.format}</span>
          </span>
          <span className="mt-1.5 block text-sm leading-relaxed text-mist">{s.claim}</span>
        </span>
        <ChevronDown size={18} className={`mt-1 flex-none text-mist transition-transform ${open ? "rotate-180 text-signal" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={reduce ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={reduce ? undefined : { height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="border-t border-white/[0.06] px-5 pb-5 pt-4">
              <p className="label">{T.youGet}</p>
              <ul className="mt-2 space-y-1.5">{s.deliver.map(d => <li key={d} className="flex gap-2.5 text-sm text-snow/90"><Check size={15} className="mt-0.5 flex-none text-signal" />{d}</li>)}</ul>
              <p className="mt-4 text-sm text-mist"><span className="text-snow/80">{T.forWhom}:</span> {s.for}</p>
              <p className="mt-1 font-mono text-xs text-mist">{s.duration}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mt-auto px-5 pb-5">
        <button type="button" onClick={onSelect} aria-pressed={selected}
          className={`inline-flex min-h-[40px] items-center gap-2 rounded-full px-4 text-sm font-medium transition-colors ${selected ? "bg-signal text-ink" : "border border-white/15 text-snow hover:border-signal hover:text-signal"}`}>
          {selected ? <Check size={15} /> : <Plus size={15} />}{selected ? T.selected : T.request}
        </button>
      </div>
    </motion.li>
  );
}

function Page() {
  const { lang, L } = useLang();
  const T = L(fl);
  const areas = L(rawAreas), services = L(rawServices), steps = L(rawProcess), timing = L(rawTiming), formats = L(rawFormats);
  const [area, setArea] = useState("all");
  const [open, setOpen] = useState(null);
  const [picked, setPicked] = useState([]);
  const [format, setFormat] = useState("sprint");
  const [when, setWhen] = useState("q");
  const [company, setCompany] = useState("");
  const [note, setNote] = useState("");
  const [step, setStep] = useState(steps[0].id);
  const [copied, setCopied] = useState(false);

  useEffect(() => { document.title = T.title; document.querySelector('meta[name="description"]')?.setAttribute("content", T.desc); }, [T]);
  const shown = services.filter(s => area === "all" || s.area === area);
  const toggle = id => setPicked(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);
  const select = id => { if (!picked.includes(id)) setPicked(p => [...p, id]); document.getElementById("request")?.scrollIntoView({ behavior: "smooth", block: "start" }); };

  const mail = useMemo(() => {
    const names = picked.map(id => services.find(s => s.id === id)?.name).filter(Boolean);
    const subject = T.subject(names.slice(0, 2).join(", ") + (names.length > 2 ? " …" : ""));
    const body = T.body(names.map(n => `• ${n}`).join("\n"), formats[format], timing.find(t => t.id === when).label, company.trim(), note.trim());
    return { names, subject, body, href: `mailto:${person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` };
  }, [picked, format, when, company, note, lang]); // eslint-disable-line react-hooks/exhaustive-deps

  const copy = async () => { try { await navigator.clipboard.writeText(`${mail.subject}\n\n${mail.body}`); setCopied(true); setTimeout(() => setCopied(false), 1600); } catch { /* ignore */ } };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-ink/85 backdrop-blur-xl" style={{ paddingTop: "env(safe-area-inset-top)" }}>
        <div className="wrap flex h-16 items-center justify-between gap-3">
          <a href={`/?lang=${lang}`} className="inline-flex min-w-0 items-center gap-2 text-sm text-mist hover:text-snow"><ArrowLeft size={16} /><span className="truncate"><span className="text-snow">{person.name}</span>, {person.degree} · {T.back}</span></a>
          <LangSwitch />
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden pb-12 pt-28 md:pt-36">
          <div className="absolute inset-0 -z-10 opacity-40 md:opacity-80 md:[mask-image:linear-gradient(to_right,rgba(0,0,0,.2),black_60%)]"><NetworkCanvas /></div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-ink" />
          <div className="wrap">
            <p className="label flex items-center gap-3"><span className="h-px w-8 bg-signal" />{T.kicker}</p>
            <h1 className="mt-5 max-w-[18ch] text-[2.4rem] font-semibold leading-[1.03] tracking-[-0.04em] sm:text-6xl">{T.h1a} <span className="text-signal">{T.h1b}</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{T.lead}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#request" className="btn-primary">{T.cta} <ArrowUpRight size={16} /></a>
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-ink/60 py-1.5 pl-1.5 pr-4 backdrop-blur">
                <img src="/engin.jpg" alt="" className="h-9 w-9 rounded-full object-cover" />
                <span className="text-sm">{person.name}, {person.degree}</span>
              </div>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {areas.map(a => (
                <li key={a.id}><a href="#services" onClick={() => setArea(a.id)} className="flex min-h-[56px] items-center gap-3 rounded-xl border border-white/[0.08] bg-navy/30 px-4 text-sm font-medium transition-colors hover:border-signal/50">
                  <Icon name={a.icon} size={18} className="flex-none text-signal" />{a.title}
                </a></li>
              ))}
            </ul>
          </div>
        </section>

        <section id="services" className="section scroll-mt-16">
          <div className="wrap">
            <SectionHead no="01" kicker={T.catalogue} title={`${services.length} ${lang === "de" ? "Leistungen in vier Bereichen." : "services in four areas."}`} lead={T.catalogueLead} />
            <div role="group" aria-label={T.catalogue} className="no-scrollbar -mx-5 mb-6 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
              {[{ id: "all", title: T.all, icon: null }, ...areas].map(a => (
                <button key={a.id} type="button" aria-pressed={area === a.id} onClick={() => setArea(a.id)}
                  className={`inline-flex min-h-[40px] flex-none items-center gap-2 rounded-full border px-4 text-sm transition-colors ${area === a.id ? "border-signal bg-signal/10 text-snow" : "border-white/10 text-mist hover:text-snow"}`}>
                  {a.icon && <Icon name={a.icon} size={15} />}{a.title}
                  <span className="font-mono text-[11px] text-mist">{a.id === "all" ? services.length : services.filter(s => s.area === a.id).length}</span>
                </button>
              ))}
            </div>
            <motion.ul layout className="grid items-start gap-4 md:grid-cols-2">
              {shown.map(s => <ServiceCard key={s.id} s={s} T={T} open={open === s.id} onToggle={() => setOpen(o => o === s.id ? null : s.id)} selected={picked.includes(s.id)} onSelect={() => select(s.id)} />)}
            </motion.ul>
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
            <ul className="no-scrollbar -mx-5 mt-6 flex gap-3 overflow-x-auto px-5 pb-1 sm:mx-0 sm:grid sm:max-w-[620px] sm:grid-cols-5 sm:overflow-visible sm:px-0">
              {logoStrip.map(id => <li key={id}><Logo id={id} className="h-14 w-28 sm:w-full" pad="p-2" /></li>)}
            </ul>
          </div>
        </section>

        <section id="request" className="section scroll-mt-16">
          <div className="wrap">
            <SectionHead no="04" kicker={T.cfgKicker} title={T.cfgTitle} lead={T.cfgLead} />
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
              <div className="panel space-y-6 p-5 sm:p-7">
                <fieldset>
                  <legend className="label">{T.cfgServices}</legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {services.map(s => (
                      <button key={s.id} type="button" aria-pressed={picked.includes(s.id)} onClick={() => toggle(s.id)}
                        className={`min-h-[36px] rounded-full border px-3 text-sm transition-colors ${picked.includes(s.id) ? "border-signal bg-signal text-ink" : "border-white/10 text-mist hover:text-snow"}`}>{s.name}</button>
                    ))}
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="label">{T.cfgFormat}</legend>
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {Object.entries(formats).map(([id, label]) => (
                      <button key={id} type="button" aria-pressed={format === id} onClick={() => setFormat(id)}
                        className={`min-h-[44px] rounded-xl border text-sm font-medium transition-colors ${format === id ? "border-signal bg-signal/10" : "border-white/10 text-mist hover:text-snow"}`}>{label}</button>
                    ))}
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="label">{T.cfgTiming}</legend>
                  <div className="mt-3 grid gap-2 sm:grid-cols-3">
                    {timing.map(t => (
                      <button key={t.id} type="button" aria-pressed={when === t.id} onClick={() => setWhen(t.id)}
                        className={`min-h-[44px] rounded-xl border px-3 text-sm transition-colors ${when === t.id ? "border-signal bg-signal/10" : "border-white/10 text-mist hover:text-snow"}`}>{t.label}</button>
                    ))}
                  </div>
                </fieldset>
                <label className="block"><span className="label">{T.cfgCompany}</span>
                  <input value={company} onChange={e => setCompany(e.target.value)} className="mt-2 min-h-[48px] w-full rounded-xl border border-white/10 bg-ink px-4 text-[16px] focus:border-signal focus:outline-none" /></label>
                <label className="block"><span className="label">{T.cfgNote}</span>
                  <textarea rows={3} value={note} onChange={e => setNote(e.target.value)} placeholder={T.cfgNotePh} className="mt-2 w-full rounded-xl border border-white/10 bg-ink p-4 text-[16px] placeholder:text-mist/60 focus:border-signal focus:outline-none" /></label>
              </div>
              <div className="panel flex flex-col p-5 sm:p-7 lg:sticky lg:top-24 lg:self-start">
                <p className="label">{T.preview}</p>
                {mail.names.length ? (
                  <>
                    <p className="mt-3 text-sm font-semibold">{mail.subject}</p>
                    <pre className="mt-3 max-h-80 overflow-auto whitespace-pre-wrap rounded-xl bg-ink p-4 font-sans text-sm leading-relaxed text-snow/90">{mail.body}</pre>
                    <div className="mt-5 flex flex-wrap gap-2">
                      <a href={mail.href} className="btn-primary"><Mail size={16} />{T.openMail}</a>
                      <button type="button" onClick={copy} className="btn-ghost">{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? T.copied : T.copyText}</button>
                    </div>
                  </>
                ) : <p className="mt-3 rounded-xl border border-dashed border-white/15 p-6 text-center text-mist">{T.none}</p>}
                <p className="mt-5 text-xs text-mist">{T.note}</p>
                <p className="mt-2 select-all text-sm">{person.email}</p>
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
