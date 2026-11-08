import { useState } from "react";
import SectionHead from "./SectionHead.jsx";
import PathMap from "./PathMap.jsx";
import Logo from "./Logo.jsx";
import Icon from "./Icon.jsx";
import { education } from "../data/profile.js";
import { useLang } from "../i18n.jsx";

function Card({ e, compact }) {
  return (
    <div className={`panel ${compact ? "p-4" : "p-6"}`}>
      <div className="flex items-center gap-4">
        {e.logo ? <Logo id={e.logo} className={compact ? "h-10 w-16" : "h-14 w-24"} pad="p-1.5" /> : <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-navy"><Icon name={e.icon} size={20} /></span>}
        <div className="min-w-0">
          <h3 className="text-lg font-semibold leading-snug tracking-tight">{e.title}</h3>
          <p className="text-sm text-mist">{e.text}</p>
        </div>
      </div>
      {e.extra && (
        <div className="mt-4 flex items-center gap-3 rounded-xl bg-white/[0.04] p-3">
          <Logo id={e.extra.logo} className="h-9 w-16" pad="p-1" />
          <p className="text-sm text-snow/85">{e.extra.text}</p>
        </div>
      )}
    </div>
  );
}

export default function Education() {
  const { t, L } = useLang();
  const items = L(education);
  const [active, setActive] = useState(items[items.length - 1].id);
  return (
    <section id="education" aria-labelledby="education-title" className="section">
      <div className="wrap">
        <SectionHead no="02" kicker={t("eduKicker")} id="education-title" title={t("eduTitle")} lead={t("eduLead")} />
        <PathMap items={items} mode="stairs" active={active} setActive={setActive} label={t("eduSteps")} renderCard={(e, compact) => <Card e={e} compact={compact} />} />
      </div>
    </section>
  );
}
