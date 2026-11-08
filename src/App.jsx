import { useMemo, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Intro from "./components/Intro.jsx";
import Journey from "./components/Journey.jsx";
import Expertise from "./components/Expertise.jsx";
import Showcase from "./components/Showcase.jsx";
import Innovation from "./components/Innovation.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

/* Personal application links: ?firma=…&an=…&rolle=…&fokus=sec|arch|e2e|pm (German or English keys). */
const FOCUS = { sec: "security", security: "security", arch: "architecture", architecture: "architecture", e2e: "architecture", pm: "architecture", ai: "innovation", innovation: "innovation" };
const DOMAIN = { security: "security", architecture: "architecture", innovation: "ai" };
const clean = s => (s || "").replace(/[<>]/g, "").trim().slice(0, 80);

export default function App() {
  const guest = useMemo(() => {
    const p = new URLSearchParams(location.search);
    const company = clean(p.get("firma") || p.get("company")), contact = clean(p.get("an") || p.get("to")), role = clean(p.get("rolle") || p.get("role"));
    const focus = FOCUS[(p.get("fokus") || p.get("focus") || "").toLowerCase()] || null;
    if (!company && !contact && !role) return { focus };
    const hi = contact ? `Hello ${contact}` : company ? `Hello ${company} team` : "Welcome";
    const msg = role ? `${hi} — prepared for the ${role} role${company ? ` at ${company}` : ""}.` : `${hi} — this portfolio was prepared for you.`;
    return { company, contact, role, focus, msg };
  }, []);
  const [domain, setDomain] = useState(guest.focus ? DOMAIN[guest.focus] : null);
  const [focus, setFocus] = useState(guest.focus || "security");

  return (
    <>
      <a href="#intro" className="sr-only z-[60] rounded bg-signal px-3 py-2 text-ink focus:not-sr-only focus:fixed focus:left-3 focus:top-3">Skip to content</a>
      <Nav />
      <main>
        <Hero guest={guest.msg} focus={focus} />
        <Intro />
        <Journey domain={domain} />
        <Expertise domain={domain || "security"} setDomain={setDomain} />
        <Showcase domain={domain} />
        <Innovation guest={guest} />
        <About />
        <Contact focus={focus} setFocus={setFocus} />
      </main>
      <Footer />
    </>
  );
}
