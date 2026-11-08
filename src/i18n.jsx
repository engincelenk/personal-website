import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { strings } from "./strings.js";

/* Resolve bilingual leaves ({ en, de }) anywhere in a value. */
const isBi = v => v && typeof v === "object" && !Array.isArray(v) && "en" in v && "de" in v && Object.keys(v).length === 2;
export function localize(v, lang) {
  if (isBi(v)) return v[lang] ?? v.en;
  if (Array.isArray(v)) return v.map(x => localize(x, lang));
  if (v && typeof v === "object") return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, localize(x, lang)]));
  return v;
}

export function initialLang() {
  const p = new URLSearchParams(location.search).get("lang");
  if (p === "de" || p === "en") return p;
  try { const s = localStorage.getItem("lang"); if (s === "de" || s === "en") return s; } catch { /* ignore */ }
  return (navigator.language || "en").toLowerCase().startsWith("de") ? "de" : "en";
}

const Ctx = createContext(null);
export function LangProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);
  const setLang = useCallback(l => { setLangState(l); try { localStorage.setItem("lang", l); } catch { /* ignore */ } }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = strings[lang].metaTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", strings[lang].metaDesc);
  }, [lang]);
  const value = useMemo(() => ({
    lang, setLang,
    t: (k, ...a) => { const s = strings[lang][k] ?? strings.en[k] ?? k; return typeof s === "function" ? s(...a) : s; },
    L: v => localize(v, lang)
  }), [lang, setLang]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export const useLang = () => useContext(Ctx);
