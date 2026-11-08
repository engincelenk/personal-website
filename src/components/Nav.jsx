import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { person } from "../data/profile.js";
import { useLang } from "../i18n.jsx";
import LangSwitch from "./LangSwitch.jsx";

const ids = ["home", "journey", "education", "expertise", "lab", "about", "contact"];

export default function Nav() {
  const { t } = useLang();
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }), { rootMargin: "-45% 0px -50% 0px" });
    ids.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "border-b border-white/[0.06] bg-ink/85 backdrop-blur-xl" : ""}`} style={{ paddingTop: "env(safe-area-inset-top)" }}>
      <div className="wrap flex h-16 items-center justify-between gap-3">
        <a href="#home" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 flex-none place-items-center rounded-lg border border-white/15 font-mono text-xs font-semibold">{person.initials}</span>
          <span className="truncate text-sm font-medium tracking-tight">{person.name}<span className="text-mist">, {person.degree}</span></span>
        </a>
        <div className="flex items-center gap-2">
          <nav aria-label={t("sections")} className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {ids.slice(1).map(id => (
                <li key={id}>
                  <a href={`#${id}`} aria-current={active === id ? "true" : undefined} className={`relative rounded-full px-3 py-2 text-sm transition-colors ${active === id ? "text-snow" : "text-mist hover:text-snow"}`}>
                    {t("nav")[id]}{active === id && <span className="absolute inset-x-3 -bottom-0.5 h-px bg-signal" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <LangSwitch />
          <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 lg:hidden" aria-expanded={open} aria-controls="mobile-menu"
            aria-label={open ? t("closeMenu") : t("openMenu")} onClick={() => setOpen(o => !o)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label={t("sections")} className="wrap h-[calc(100dvh-64px)] overflow-y-auto pb-10 pt-4 lg:hidden">
          <ul className="flex flex-col">
            {ids.map((id, i) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)} className="flex items-baseline gap-4 border-b border-white/[0.06] py-4 text-2xl font-medium tracking-tight">
                  <span className="font-mono text-xs text-signal">0{i}</span>{t("nav")[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
