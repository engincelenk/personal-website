import { useState } from "react";
import { MapPin } from "lucide-react";
import SuccessStory from "./SuccessStory.jsx";
import SectionHead from "./SectionHead.jsx";
import PathMap from "./PathMap.jsx";
import Logo from "./Logo.jsx";
import { career } from "../data/profile.js";
import { period, duration, yearOf } from "../lib/dates.js";
import { useLang } from "../i18n.jsx";

function Card({ c, compact, lang }) {
  return (
    <div className={`panel flex gap-5 ${compact ? "p-4" : "p-6"}`}>
      {!compact && <Logo id={c.logo} className="hidden h-16 w-28 sm:flex" pad="p-2" />}
      <div className="min-w-0">
        <p className="font-mono text-xs text-signal">{period(c.from, c.to, lang)} · {duration(c.from, c.to, lang)}</p>
        <h3 className="mt-1.5 text-lg font-semibold leading-snug tracking-tight">{c.role}</h3>
        <p className="mt-0.5 flex flex-wrap items-center gap-x-2 text-sm text-mist">{c.org}<span className="inline-flex items-center gap-1"><MapPin size={12} />{c.place}</span></p>
        <ul className="mt-3 space-y-1.5 text-[15px] text-snow/85">
          {c.points.map(p => <li key={p} className="flex gap-2.5"><span className="mt-[0.55em] h-1.5 w-1.5 flex-none rounded-full bg-signal" />{p}</li>)}
        </ul>
        {c.story && <div className="mt-4"><SuccessStory compact /></div>}
        {c.projects && <div className="mt-3 flex flex-wrap gap-1.5">{c.projects.map(p => <span key={p} className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs text-snow/80">{p}</span>)}</div>}
      </div>
    </div>
  );
}

export default function Career() {
  const { t, L, lang } = useLang();
  const items = L(career).map(c => ({ ...c, year: `${yearOf(c.from)}` }));
  const [active, setActive] = useState(items[items.length - 1].id);
  return (
    <section id="journey" aria-labelledby="journey-title" className="section">
      <div className="wrap">
        <SectionHead no="01" kicker={t("careerKicker")} id="journey-title" title={t("careerTitle")} lead={t("careerLead")} />
        <PathMap items={items} mode="curve" active={active} setActive={setActive} label={t("careerStations")} renderCard={(c, compact) => <Card c={c} compact={compact} lang={lang} />} />
      </div>
    </section>
  );
}
