import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Download, ExternalLink, Linkedin } from "lucide-react";
import SectionHead from "./SectionHead.jsx";
import ContactForm from "./ContactForm.jsx";
import { person, focuses as rawFocuses, domains as rawDomains } from "../data/profile.js";
import { useLang } from "../i18n.jsx";

export default function Contact({ focus, setFocus }) {
  const { t, L, lang } = useLang();
  const reduce = useReducedMotion();
  const focuses = L(rawFocuses), domains = L(rawDomains);
  const f = focuses.find(x => x.id === focus) || focuses[0];

  return (
    <section id="contact" aria-labelledby="contact-title" className="section">
      <div className="wrap">
        <SectionHead no="06" kicker={t("contactKicker")} id="contact-title" title={t("contactTitle")} />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="panel min-w-0 p-5 sm:p-7">
            <p className="label text-signal">{t("writeMe")}</p>
            <div className="mt-4"><ContactForm /></div>
            {person.linkedin && (
              <a className="mt-6 inline-flex items-center gap-2 text-sm text-mist hover:text-snow" href={person.linkedin} target="_blank" rel="noopener">
                <Linkedin size={16} className="text-signal" />{t("orLinkedin")}
              </a>
            )}
          </div>
          <div className="panel min-w-0 self-start p-5 sm:p-7">
            <p className="label text-signal">{t("tailored")}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">{t("tailoredTitle")}</h3>
            <div role="radiogroup" aria-label={t("cvFocus")} className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
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
