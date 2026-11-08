const parse = s => { const [y, m] = s.split("-").map(Number); return { y, m }; };
const MONTHS = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  de: ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."]
};
const PRESENT = { en: "Present", de: "heute" };
export const fmt = (s, lang = "en") => { if (!s) return PRESENT[lang]; const { y, m } = parse(s); return `${MONTHS[lang][m - 1]} ${y}`; };
export const period = (a, b, lang = "en") => `${fmt(a, lang)} – ${fmt(b, lang)}`;
export function duration(a, b, lang = "en") {
  const s = parse(a); const now = new Date();
  const e = b ? parse(b) : { y: now.getFullYear(), m: now.getMonth() + 1 };
  const months = (e.y - s.y) * 12 + (e.m - s.m) + 1;
  const y = Math.floor(months / 12), m = months % 12;
  const Y = lang === "de" ? `${y} J.` : `${y} yr${y > 1 ? "s" : ""}`, M = lang === "de" ? `${m} Mon.` : `${m} mo`;
  return [y ? Y : "", m ? M : ""].filter(Boolean).join(" ");
}
export const yearsSince = s => { const { y, m } = parse(s); const n = new Date(); return Math.floor((n.getFullYear() + n.getMonth() / 12) - (y + (m - 1) / 12)); };
export const yearOf = s => (s ? parse(s).y : new Date().getFullYear());
