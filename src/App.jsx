import { useMemo, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Career from "./components/Career.jsx";
import Education from "./components/Education.jsx";
import Expertise from "./components/Expertise.jsx";
import Lab from "./components/Lab.jsx";
import SecurityToolbox from "./components/SecurityToolbox.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { LangProvider, useLang } from "./i18n.jsx";

/* Personal application links: ?company=…&to=…&role=…&focus=security|architecture|innovation&lang=de|en (German keys also work). */
const FOCUS = { sec: "security", security: "security", arch: "architecture", architecture: "architecture", e2e: "architecture", pm: "architecture", ai: "innovation", innovation: "innovation" };
const DOMAIN = { security: "security", architecture: "architecture", innovation: "ai" };
const clean = s => (s || "").replace(/[<>]/g, "").trim().slice(0, 80);

function Page() {
  const { t } = useLang();
  const guest = useMemo(() => {
    const p = new URLSearchParams(location.search);
    return {
      company: clean(p.get("firma") || p.get("company")), contact: clean(p.get("an") || p.get("to")), role: clean(p.get("rolle") || p.get("role")),
      focus: FOCUS[(p.get("fokus") || p.get("focus") || "").toLowerCase()] || null
    };
  }, []);
  const msg = guest.company || guest.contact || guest.role
    ? (guest.role ? t("guestRole", t("guestHello", guest.contact, guest.company), guest.role, guest.company) : t("guestNoRole", t("guestHello", guest.contact, guest.company)))
    : null;
  const [domain, setDomain] = useState(guest.focus ? DOMAIN[guest.focus] : "security");
  const [focus, setFocus] = useState(guest.focus || "security");

  return (
    <>
      <a href="#journey" className="sr-only z-[60] rounded bg-signal px-3 py-2 text-ink focus:not-sr-only focus:fixed focus:left-3 focus:top-3">{t("skip")}</a>
      <Nav showFreelance={!msg} />
      <main>
        <Hero guest={msg} focus={focus} />
        <Career />
        <Education />
        <Expertise domain={domain} setDomain={setDomain} />
        <SecurityToolbox no="04" />
        <Lab guest={guest} />
        <About />
        <Contact focus={focus} setFocus={setFocus} />
      </main>
      <Footer />
    </>
  );
}

export default function App() { return <LangProvider><Page /></LangProvider>; }
