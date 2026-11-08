const parse = s => { const [y, m] = s.split("-").map(Number); return { y, m }; };
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const fmt = s => { if (!s) return "Present"; const { y, m } = parse(s); return `${MONTHS[m - 1]} ${y}`; };
export const period = (a, b) => `${fmt(a)} – ${fmt(b)}`;
export function duration(a, b) {
  const s = parse(a); const now = new Date();
  const e = b ? parse(b) : { y: now.getFullYear(), m: now.getMonth() + 1 };
  const months = (e.y - s.y) * 12 + (e.m - s.m) + 1;
  const y = Math.floor(months / 12), m = months % 12;
  return [y ? `${y} yr${y > 1 ? "s" : ""}` : "", m ? `${m} mo` : ""].filter(Boolean).join(" ");
}
export const yearsSince = s => { const { y, m } = parse(s); const n = new Date(); return Math.floor((n.getFullYear() + n.getMonth() / 12) - (y + (m - 1) / 12)); };
export const yearOf = s => (s ? parse(s).y : new Date().getFullYear());
