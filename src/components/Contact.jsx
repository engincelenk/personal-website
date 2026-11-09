import { Download, ExternalLink, Linkedin } from "lucide-react";
import SectionHead from "./SectionHead.jsx";
import ContactForm from "./ContactForm.jsx";
import { person, cv as rawCv, domains as rawDomains } from "../data/profile.js";
import { useLang } from "../i18n.jsx";

export default function Contact() {
  const { t, L, lang } = useLang();
  const cv = L(rawCv), domains = L(rawDomains);

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
            <div className="mt-5 rounded-xl border border-white/[0.07] bg-ink p-5">
              <p className="font-semibold leading-snug">{cv.headline}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {domains.map(d => <li key={d.id} className={`rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${d.id === "ai" ? "bg-signal/15 text-signal" : "bg-white/[0.05] text-mist"}`}>{d.title}</li>)}
              </ul>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <a className="btn-primary" href={cv.file} download><Download size={16} />{t("downloadPdf")}</a>
              <a className="btn-ghost" href={`/cv.html?lang=${lang}`} target="_blank" rel="noopener"><ExternalLink size={16} />{t("webVersion")}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
