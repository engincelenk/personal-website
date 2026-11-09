import { useEffect, useState } from "react";
import { Check, Loader2, Send } from "lucide-react";
import { contactForm } from "../data/profile.js";
import { useLang } from "../i18n.jsx";

/* Contact form without a visible address. Messages are relayed by FormSubmit
   to the inbox in data/profile.js (contactForm). No address in the page text. */
const endpoint = () => `https://formsubmit.co/ajax/${contactForm.alias || [contactForm.user, contactForm.domain].join("@")}`;

const T = {
  en: { name: "Name", email: "Your email", company: "Company (optional)", message: "Message", send: "Send message", sending: "Sending…",
    ok: "Thank you. Your message has been sent, I will get back to you soon.", err: "Sending failed. Please try again later or write via LinkedIn.",
    consent: "I agree that my details are used to answer my request.", privacy: "Privacy", required: "Please fill in name, email and message and confirm the consent.",
    subject: "New message via ec.immofuchs.info" },
  de: { name: "Name", email: "Ihre E-Mail", company: "Unternehmen (optional)", message: "Nachricht", send: "Nachricht senden", sending: "Wird gesendet…",
    ok: "Vielen Dank. Ihre Nachricht ist angekommen, ich melde mich zeitnah.", err: "Senden fehlgeschlagen. Bitte später erneut versuchen oder über LinkedIn schreiben.",
    consent: "Ich bin einverstanden, dass meine Angaben zur Beantwortung meiner Anfrage verwendet werden.", privacy: "Datenschutz", required: "Bitte Name, E-Mail und Nachricht ausfüllen und die Einwilligung bestätigen.",
    subject: "Neue Nachricht über ec.immofuchs.info" }
};

export default function ContactForm({ initialMessage = "", subject, source = "portfolio" }) {
  const { lang } = useLang();
  const t = T[lang];
  const [f, setF] = useState({ name: "", email: "", company: "", message: initialMessage, consent: false, hp: "" });
  const [state, setState] = useState("idle");
  const [hint, setHint] = useState("");
  useEffect(() => { if (initialMessage) setF(x => ({ ...x, message: initialMessage })); }, [initialMessage]);
  const set = k => e => setF(x => ({ ...x, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const submit = async e => {
    e.preventDefault();
    if (f.hp) return;
    if (!f.name.trim() || !/^\S+@\S+\.\S+$/.test(f.email) || !f.message.trim() || !f.consent) { setHint(t.required); return; }
    setHint(""); setState("sending");
    try {
      const r = await fetch(endpoint(), {
        method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: f.name, email: f.email, company: f.company, message: f.message, source, _subject: subject || t.subject, _template: "table", _captcha: "false", _replyto: f.email })
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || String(j.success) !== "true") throw new Error(j.message || r.status);
      setState("ok"); setF(x => ({ ...x, message: "", consent: false }));
    } catch { setState("err"); }
  };

  const field = "mt-2 min-h-[48px] w-full rounded-xl border border-white/10 bg-ink px-4 text-[16px] text-snow placeholder:text-mist/60 focus:border-signal focus:outline-none";
  if (state === "ok") return <p className="flex items-start gap-3 rounded-xl border border-signal/40 bg-signal/10 p-5" role="status"><Check size={20} className="mt-0.5 flex-none text-signal" />{t.ok}</p>;

  return (
    <form onSubmit={submit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block"><span className="label">{t.name}</span><input autoComplete="name" value={f.name} onChange={set("name")} className={field} /></label>
        <label className="block"><span className="label">{t.email}</span><input type="email" autoComplete="email" value={f.email} onChange={set("email")} className={field} /></label>
      </div>
      <label className="block"><span className="label">{t.company}</span><input autoComplete="organization" value={f.company} onChange={set("company")} className={field} /></label>
      <label className="block"><span className="label">{t.message}</span><textarea rows={6} value={f.message} onChange={set("message")} className={`${field} py-3 leading-relaxed`} /></label>
      <input type="text" tabIndex={-1} autoComplete="off" value={f.hp} onChange={set("hp")} className="hidden" aria-hidden="true" />
      <label className="flex items-start gap-3 text-sm text-mist">
        <input type="checkbox" checked={f.consent} onChange={set("consent")} className="mt-1 h-5 w-5 flex-none accent-[#E8650A]" />
        <span>{t.consent} <a className="text-snow underline decoration-signal" href={`/legal.html?lang=${lang}#privacy`}>{t.privacy}</a></span>
      </label>
      {hint && <p className="text-sm text-signal" role="alert">{hint}</p>}
      {state === "err" && <p className="text-sm text-signal" role="alert">{t.err}</p>}
      <button type="submit" disabled={state === "sending"} className="btn-primary disabled:opacity-60">
        {state === "sending" ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}{state === "sending" ? t.sending : t.send}
      </button>
    </form>
  );
}
