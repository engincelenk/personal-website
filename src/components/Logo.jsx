import { logos } from "../data/profile.js";
/* Logos sit on white tiles so the original brand colours stay intact on the dark page. */
export default function Logo({ id, className = "h-12 w-12", pad = "p-1.5" }) {
  const l = logos[id]; if (!l) return null;
  return (
    <span className={`flex flex-none items-center justify-center overflow-hidden rounded-xl bg-white ${pad} ${className}`}>
      {l.src ? <img src={l.src} alt={l.name} loading="lazy" className="max-h-full max-w-full object-contain" />
        : <span role="img" aria-label={l.name} className="text-lg font-bold tracking-tight text-[#000099]">{l.text}</span>}
    </span>
  );
}
