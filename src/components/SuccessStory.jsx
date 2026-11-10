import { Trophy, ArrowUpRight } from "lucide-react";
import { successStory as raw } from "../data/profile.js";
import { useLang } from "../i18n.jsx";

/* Success story card: Bosch NGTM, VDA Logistics Award 2024. Used in the career card and the management pillar. */
export default function SuccessStory({ compact = false }) {
  const { L } = useLang();
  const s = L(raw);
  return (
    <div className={`rounded-xl border border-signal/40 bg-gradient-to-br from-signal/15 to-signal/[0.04] ${compact ? "p-3.5" : "p-4"}`}>
      <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-signal"><Trophy size={14} />{s.label}</p>
      <p className="mt-1.5 text-base font-semibold leading-snug">{s.title}</p>
      <p className="mt-1 text-sm leading-relaxed text-snow/85">{s.text}</p>
      <a href={s.link} target="_blank" rel="noopener" className="mt-2 inline-flex items-center gap-1 text-sm text-signal hover:underline">{s.source}<ArrowUpRight size={13} /></a>
    </div>
  );
}
