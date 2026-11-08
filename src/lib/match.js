import { skills, gaps, facts } from "../data/knowledge.js";

const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const B = "[^\\p{L}\\p{N}]";
export const keyRx = k => new RegExp(`(^|${B})(${reEsc(k)})(?![\\p{L}\\p{N}])`, "iu");

export function analyzeRole(text) {
  const hits = new Map();
  skills.forEach(s => { const f = s.keys.filter(k => keyRx(k).test(text)); if (f.length) hits.set(s, f); });
  const foundGaps = gaps.filter(k => keyRx(k).test(text));
  const matched = [...hits.keys()];
  if (!matched.length) return { matched, hits, gaps: foundGaps, score: 0, byDomain: {} };
  const strength = matched.reduce((a, s) => a + s.l / 4, 0) / matched.length;
  const coverage = Math.min(1, matched.length / 7);
  const score = Math.max(5, Math.round(100 * strength * Math.sqrt(coverage) * (1 - Math.min(0.3, foundGaps.length * 0.06))));
  const byDomain = {};
  ["security", "architecture", "management", "ai"].forEach(d => {
    const m = matched.filter(s => s.d === d);
    byDomain[d] = m.length ? Math.round(100 * m.reduce((a, s) => a + s.l / 4, 0) / m.length) : null;
  });
  return { matched, hits, gaps: foundGaps, score, byDomain };
}

export function highlight(text, result) {
  const terms = [...new Set([...result.matched.flatMap(s => result.hits.get(s)), ...result.gaps])].sort((a, b) => b.length - a.length);
  if (!terms.length) return [{ t: text }];
  const rx = new RegExp(`(^|${B})(${terms.map(reEsc).join("|")})(?![\\p{L}\\p{N}])`, "giu");
  const gapSet = new Set(result.gaps.map(g => g.toLowerCase()));
  const out = []; let last = 0, m;
  while ((m = rx.exec(text))) {
    const start = m.index + m[1].length;
    if (start > last) out.push({ t: text.slice(last, start) });
    out.push({ t: m[2], mark: gapSet.has(m[2].toLowerCase()) ? "gap" : "hit" });
    last = start + m[2].length;
  }
  if (last < text.length) out.push({ t: text.slice(last) });
  return out;
}

export function shortProfile(text, result, { years, company, contact } = {}) {
  const first = text.split(/\n/).map(s => s.trim()).find(Boolean) || "";
  const role = first.length > 3 && first.length < 90 ? first.replace(/\s*\((m|w|d|f)[^)]*\)/i, "").trim() : "this";
  const top = [...result.matched].sort((a, b) => result.hits.get(b).length * b.l - result.hits.get(a).length * a.l).slice(0, 4);
  const lines = [
    `Re: ${role}`, "",
    contact ? `Dear ${contact},` : "Dear hiring team,", "",
    `Your post for the ${role} role${company ? ` at ${company}` : ""} describes much of what I have done for ${years} years in corporate IT at Bosch, Daimler and TRUMPF. These requirements I bring directly:`, "",
    ...top.map(s => `• ${s.n}: ${s.ev}`), ""
  ];
  if (result.gaps.length) lines.push(`To be open: ${result.gaps.slice(0, 2).join(" and ")} is not one of my focus areas. I learn fast, as my path from office apprentice to cyber security engineer shows.`, "");
  lines.push("I look forward to talking.", "", "Engin Celenk", "engincelenk@web.de");
  return lines.join("\n");
}

const tokens = s => s.toLowerCase().match(/[\p{L}\p{N}+#/.-]+/gu) || [];
export function answer(q) {
  const qn = q.toLowerCase(); const w = new Set(tokens(q));
  let best = null, bestScore = 0;
  facts.forEach(f => {
    let sc = 0;
    f.k.forEach(k => { if (k.includes(" ") || k.includes("-") ? qn.includes(k) : w.has(k)) sc += 2; });
    tokens(f.q).forEach(x => { if (x.length > 3 && w.has(x)) sc += 1; });
    if (sc > bestScore) { bestScore = sc; best = f; }
  });
  const gap = gaps.find(g => keyRx(g).test(qn));
  if (gap && bestScore < 3) return `${gap[0].toUpperCase() + gap.slice(1)} is not one of Engin's focus areas, and this portfolio says so openly. He learns fast, as his path from office apprentice to cyber security engineer shows.`;
  return best && bestScore >= 2 ? best.a : null;
}
