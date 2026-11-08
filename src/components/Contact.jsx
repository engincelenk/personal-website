import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Mail, Phone, Copy, Check, Download, ExternalLink, Linkedin, Contact as Card } from "lucide-react";
import SectionHead from "./SectionHead.jsx";
import { person, focuses as rawFocuses, domains as rawDomains } from "../data/profile.js";
import { useLang } from "../i18n.jsx";

export default function Contact({ focus, setFocus }) {
  const { t, L, lang } = useLang();
  const reduce = useReducedMotion();
  const [phoneShown, setPhoneShown] = useState(false);
  const [done, setDone] = useState(null);
  const focuses = L(rawFocuses), domains = L(rawDomains);
  const f = focuses.find(x => x.id === focus) || focuses[0];
  const copy = async (k, v) => { try { await navigator.clipboard.writeText(v); setDone(k); setTimeout(() => setDone(null), 1600); } catch { /* ignore */ } };

  const vcard = () => {
    const v = ["BEGIN:VCARD", "VERSION:3.0", "N:Celenk;Engin;;;", "FN:Engin Celenk, M.Sc.", "TITLE:Cyber Security Engineer",
      `EMAIL;TYPE=INTERNET:${person.email}`, `TEL;TYPE=CELL:${person.phone.join("")}`, "ADR;TYPE=HOME:;;;Pleidelsheim;;74385;Germany", `URL:${person.site}`, "END:VCARD"].join("\r\n");
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([v], { type: "text/vcard" })); a.download = "Engin-Celenk.vcf";
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="section">
      <div className="wrap">
        <SectionHead no="07" kicker={t("contactKicker")} id="contact-title" title={t("contactTitle")} />
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <div className="space-y-3">
            <div className="panel p-6">
              <p className="label flex items-center gap-2"><Mail size={13} />{t("email")}</p>
              <p className="mt-3 select-all break-all text-xl font-medium tracking-tight sm:text-2xl">{person.email}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a className="btn-primary" href={`mailto:${person.email}`}>{t("writeEmail")}</a>
                <button type="button" className="btn-ghost" onClick={() => copy("mail", person.email)}>{done === "mail" ? <Check size={16} /> : <Copy size={16} />}{done === "mail" ? t("copied") : t("copy")}</button>
                {person.linkedin && <a className="btn-ghost" href={person.linkedin} target="_blank" rel="noopener"><Linkedin size={16} />LinkedIn</a>}
              </div>
            </div>
            <div className="panel p-6">
              <p className="label flex items-center gap-2"><Phone size={13} />{t("phone")}</p>
              <p className="mt-3 text-xl font-medium tabular-nums tracking-tight">{phoneShown ? person.phone.join(" ") : "+49 163 ••• ••••"}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {phoneShown ? <a className="btn-ghost" href={`tel:${person.phone.join("")}`}>{t("call")}</a>
                  : <button type="button" className="btn-ghost" onClick={() => setPhoneShown(true)}>{t("showNumber")}</button>}
                <button type="button" className="btn-ghost" onClick={vcard}><Card size={16} />{t("saveContact")}</button>
              </div>
            </div>
          </div>
          <div className="panel p-6 sm:p-8">
            <p className="label text-signal">{t("tailored")}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">{t("tailoredTitle")}</h3>
            <div role="radiogroup" aria-label={t("cvFocus")} className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {focuses.map(x => (
                <button key={x.id} type="button" role="radio" aria-checked={x.id === f.id} onClick={() => setFocus(x.id)}
                  className={`min-h-[48px] rounded-xl border px-4 text-sm font-medium transition-colors ${x.id === f.id ? "border-signal bg-signal/10 text-snow" : "border-white/10 text-mist hover:border-white/25 hover:text-snow"}`}>{x.label}</button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={f.id + lang} initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0 }} transition={{ duration: 0.25 }}
                className="mt-6 rounded-xl border border-white/[0.07] bg-ink p-5">
                <p className="font-semibold leading-snug">{f.headline}</p>
                <ol className="mt-4 flex flex-wrap gap-2">
                  {f.domains.map((d, i) => <li key={d} className="rounded-full bg-white/[0.05] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-mist"><span className="text-signal">{i + 1}</span> {domains.find(x => x.id === d).title}</li>)}
                </ol>
              </motion.div>
            </AnimatePresence>
            <div className="mt-6 flex flex-wrap gap-2">
              <a className="btn-primary" href={f.file} download><Download size={16} />{t("downloadPdf")}</a>
              <a className="btn-ghost" href={`/cv.html?focus=${f.id}&lang=${lang}`} target="_blank" rel="noopener"><ExternalLink size={16} />{t("webVersion")}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
