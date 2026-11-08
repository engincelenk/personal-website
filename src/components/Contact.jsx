import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Mail, Phone, Copy, Check, Download, ExternalLink, Linkedin, Github, Contact as Card } from "lucide-react";
import SectionHead from "./SectionHead.jsx";
import { person, focuses, domains } from "../data/profile.js";

function useCopy() {
  const [done, setDone] = useState(null);
  return [done, async (key, text) => { try { await navigator.clipboard.writeText(text); setDone(key); setTimeout(() => setDone(null), 1600); } catch { /* ignore */ } }];
}

export default function Contact({ focus, setFocus }) {
  const reduce = useReducedMotion();
  const [phoneShown, setPhoneShown] = useState(false);
  const [done, copy] = useCopy();
  const f = focuses.find(x => x.id === focus) || focuses[0];
  const phone = person.phone.join(" ");

  const vcard = () => {
    const v = ["BEGIN:VCARD", "VERSION:3.0", "N:Celenk;Engin;;;", "FN:Engin Celenk", "TITLE:Cyber Security Engineer",
      `EMAIL;TYPE=INTERNET:${person.email}`, `TEL;TYPE=CELL:${person.phone.join("")}`, "ADR;TYPE=HOME:;;;Pleidelsheim;;74385;Germany", `URL:${person.site}`, "END:VCARD"].join("\r\n");
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([v], { type: "text/vcard" })); a.download = "Engin-Celenk.vcf";
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="section">
      <div className="wrap">
        <SectionHead no="07" kicker="Contact" id="contact-title" title="Let’s build what’s next."
          lead="Open to conversations about cyber security, IT architecture and technology leadership roles." />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          {/* Direct contact */}
          <div className="space-y-3">
            <div className="panel p-6">
              <p className="label flex items-center gap-2"><Mail size={13} />Email</p>
              <p className="mt-3 select-all break-all text-xl font-medium tracking-tight sm:text-2xl">{person.email}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a className="btn-primary" href={`mailto:${person.email}`}>Write an email</a>
                <button type="button" className="btn-ghost" onClick={() => copy("mail", person.email)}>{done === "mail" ? <Check size={16} /> : <Copy size={16} />}{done === "mail" ? "Copied" : "Copy"}</button>
              </div>
            </div>
            <div className="panel p-6">
              <p className="label flex items-center gap-2"><Phone size={13} />Phone</p>
              <p className="mt-3 text-xl font-medium tabular-nums tracking-tight">{phoneShown ? phone : "+49 163 ••• ••••"}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {phoneShown ? <a className="btn-ghost" href={`tel:${person.phone.join("")}`}>Call</a>
                  : <button type="button" className="btn-ghost" onClick={() => setPhoneShown(true)}>Show number</button>}
                <button type="button" className="btn-ghost" onClick={vcard}><Card size={16} />Save contact</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {person.linkedin && <a className="btn-ghost" href={person.linkedin} target="_blank" rel="noopener"><Linkedin size={16} />LinkedIn</a>}
              <a className="btn-ghost" href={person.github} target="_blank" rel="noopener"><Github size={16} />GitHub</a>
            </div>
          </div>

          {/* Tailored CV */}
          <div className="panel p-6 sm:p-8">
            <p className="label text-signal">Tailored CV</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">Choose your focus.</h3>
            <p className="mt-2 text-mist">The CV reorders itself around what matters to you. View it online or download the matching PDF.</p>
            <div role="radiogroup" aria-label="CV focus" className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {focuses.map(x => (
                <button key={x.id} type="button" role="radio" aria-checked={x.id === f.id} onClick={() => setFocus(x.id)}
                  className={`min-h-[48px] rounded-xl border px-4 text-sm font-medium transition-colors ${x.id === f.id ? "border-signal bg-signal/10 text-snow" : "border-white/10 text-mist hover:border-white/25 hover:text-snow"}`}>
                  {x.label}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={f.id} initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0 }} transition={{ duration: 0.25 }}
                className="mt-6 rounded-xl border border-white/[0.07] bg-ink p-5">
                <p className="font-semibold leading-snug">{f.headline}</p>
                <p className="mt-2 text-sm leading-relaxed text-mist">{f.profile}</p>
                <ol className="mt-4 flex flex-wrap gap-2">
                  {f.domains.map((d, i) => <li key={d} className="rounded-full bg-white/[0.05] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-mist"><span className="text-signal">{i + 1}</span> {domains.find(x => x.id === d).title}</li>)}
                </ol>
              </motion.div>
            </AnimatePresence>
            <div className="mt-6 flex flex-wrap gap-2">
              <a className="btn-primary" href={f.file} download><Download size={16} />Download PDF</a>
              <a className="btn-ghost" href={`/cv.html?focus=${f.id}`} target="_blank" rel="noopener"><ExternalLink size={16} />Open web version</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
