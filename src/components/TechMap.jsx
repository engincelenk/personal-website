import { sap as rawSap, techMap as rawTech } from "../data/profile.js";
import { useLang } from "../i18n.jsx";

/* Lighter strip below the pillars: SAP project experience first, then technologies per role.
   Deliberately framed as a selection, no levels. */
export default function TechMap() {
  const { L } = useLang();
  const sap = L(rawSap), tm = L(rawTech);
  return (
    <div className="mt-10">
      <div className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold tracking-tight">{tm.title}</h3>
        <p className="font-mono text-[11px] uppercase tracking-wider text-mist">{tm.note}</p>
      </div>

      <div className="rounded-2xl border border-white/[0.08] bg-navy/20 p-4 sm:p-5">
        <p className="label text-signal">{sap.title}</p>
        <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
          {sap.modules.map(m => (
            <li key={m.id} className="rounded-xl border border-white/10 bg-ink/60 px-3 py-2.5">
              <span className="block text-base font-semibold tracking-tight">{m.id}</span>
              <span className="block text-xs leading-snug text-mist">{m.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
        {tm.groups.map(g => (
          <div key={g.id} className="rounded-2xl border border-white/[0.07] p-4 sm:p-5">
            <p className="label">{g.role}</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {g.items.map(i => <li key={i} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-snow/85">{i}</li>)}
              <li className="rounded-full border border-dashed border-white/20 px-2.5 py-1 text-xs text-mist">{tm.more}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
