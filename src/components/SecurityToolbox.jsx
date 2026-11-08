import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import SectionHead from "./SectionHead.jsx";
import Icon from "./Icon.jsx";
import { principal as rawPrincipal, frameworkGroups as rawGroups, toolboxText } from "../data/frameworks.js";
import { services as rawServices } from "../data/services.js";
import { useLang } from "../i18n.jsx";

/* Principal capabilities + interactive framework explorer.
   onService: called with a service id (freelance page); linkServices: link to /freelance.html (main page). */
export default function SecurityToolbox({ no = "04", id = "security", onService, linkServices = true }) {
  const { L, lang } = useLang();
  const reduce = useReducedMotion();
  const T = L(toolboxText), caps = L(rawPrincipal), groups = L(rawGroups), services = L(rawServices);
  const [g, setG] = useState(groups[0].id);
  const group = groups.find(x => x.id === g);
  const [fw, setFw] = useState(group.items[0].name);
  const cur = group.items.find(x => x.name === fw) || group.items[0];
  const pickGroup = gid => { setG(gid); setFw(groups.find(x => x.id === gid).items[0].name); };

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="section">
      <div className="wrap">
        <SectionHead no={no} kicker={T.kicker} id={`${id}-title`} title={T.title} lead={T.lead} />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="min-w-0">
            <p className="label">{T.caps}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {caps.map(c => (
                <li key={c.title} className="flex gap-3 rounded-xl border border-white/[0.07] bg-navy/20 p-3.5">
                  <Icon name={c.icon} size={18} className="mt-0.5 flex-none text-signal" />
                  <span><span className="block text-sm font-semibold">{c.title}</span><span className="block text-sm leading-snug text-mist">{c.text}</span></span>
                </li>
              ))}
            </ul>
          </div>
          <div className="panel min-w-0 self-start p-5 sm:p-7">
            <p className="label">{T.fw}</p>
            <div role="tablist" aria-label={T.fw} className="no-scrollbar -mx-1 mt-4 flex gap-1.5 overflow-x-auto px-1 pb-1">
              {groups.map(x => (
                <button key={x.id} role="tab" type="button" aria-selected={g === x.id} onClick={() => pickGroup(x.id)}
                  className={`min-h-[38px] flex-none rounded-full px-3.5 text-sm transition-colors ${g === x.id ? "bg-snow text-ink" : "text-mist hover:text-snow"}`}>{x.title}</button>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2" role="tabpanel">
              {group.items.map(x => (
                <button key={x.name} type="button" aria-pressed={x.name === cur.name} onClick={() => setFw(x.name)}
                  className={`min-h-[40px] rounded-xl border px-3.5 font-mono text-[13px] transition-colors ${x.name === cur.name ? "border-signal bg-signal/10 text-snow" : "border-white/10 text-mist hover:border-white/25 hover:text-snow"}`}>{x.name}</button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={cur.name + lang} initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0 }} transition={{ duration: 0.2 }}
                className="mt-5 rounded-xl bg-ink p-5" aria-live="polite">
                <p className="text-lg font-semibold">{cur.name}</p>
                <p className="mt-1 leading-relaxed text-mist">{cur.what}</p>
                <p className="label mt-4">{T.usedIn}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {cur.services.map(sid => {
                    const s = services.find(x => x.id === sid); if (!s) return null;
                    const cls = "inline-flex min-h-[34px] items-center gap-1.5 rounded-full border border-white/10 px-3 text-sm text-snow/90 transition-colors hover:border-signal hover:text-signal";
                    if (onService) return <button key={sid} type="button" className={cls} onClick={() => onService(sid)}>{s.name}</button>;
                    if (linkServices) return <a key={sid} className={cls} href={`/freelance.html?lang=${lang}#svc-${sid}`}>{s.name}<ArrowUpRight size={13} /></a>;
                    return <span key={sid} className="rounded-full bg-white/[0.05] px-3 py-1.5 text-sm text-snow/80">{s.name}</span>;
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
