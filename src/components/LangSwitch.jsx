import { useLang } from "../i18n.jsx";
export default function LangSwitch({ className = "" }) {
  const { lang, setLang, t } = useLang();
  return (
    <div role="group" aria-label={t("language")} className={`flex rounded-full border border-white/15 p-0.5 font-mono text-xs ${className}`}>
      {["de", "en"].map(l => (
        <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)} lang={l}
          className={`min-h-[36px] min-w-[40px] rounded-full px-2.5 uppercase transition-colors ${lang === l ? "bg-snow text-ink" : "text-mist hover:text-snow"}`}>{l}</button>
      ))}
    </div>
  );
}
