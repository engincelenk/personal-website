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

const pick = (v, lang) => (v && typeof v === "object" ? v[lang] ?? v.en : v);

export function shortProfile(text, result, { years, company, contact, lang = "en" } = {}) {
  const de = lang === "de";
  const first = text.split(/\n/).map(s => s.trim()).find(Boolean) || "";
  const role = first.length > 3 && first.length < 90 ? first.replace(/\s*\((m|w|d|f)[^)]*\)/i, "").trim() : (de ? "diese Stelle" : "this");
  const top = [...result.matched].sort((a, b) => result.hits.get(b).length * b.l - result.hits.get(a).length * a.l).slice(0, 4);
  const gapsTxt = result.gaps.slice(0, 2).join(de ? " und " : " and ");
  const lines = de ? [
    `Betreff: ${role}`, "",
    contact ? `Guten Tag ${contact},` : "Sehr geehrte Damen und Herren,", "",
    `Ihre Anzeige für die Position ${role}${company ? ` bei ${company}` : ""} beschreibt vieles, was ich seit ${years} Jahren in der Konzern-IT von Bosch, Daimler und TRUMPF mache. Diese Anforderungen bringe ich direkt mit:`, ""
  ] : [
    `Re: ${role}`, "",
    contact ? `Dear ${contact},` : "Dear hiring team,", "",
    `Your post for the ${role} role${company ? ` at ${company}` : ""} describes much of what I have done for ${years} years in corporate IT at Bosch, Daimler and TRUMPF. These requirements I bring directly:`, ""
  ];
  lines.push(...top.map(s => `• ${pick(s.n, lang)}: ${pick(s.ev, lang)}`), "");
  if (result.gaps.length) lines.push(de ? `Offen gesagt: ${gapsTxt} gehört nicht zu meinen Schwerpunkten. Ich arbeite mich schnell ein.` : `To be open: ${gapsTxt} is not one of my focus areas. I learn fast.`, "");
  lines.push(de ? "Ich freue mich auf ein Gespräch." : "I look forward to talking.", "", "Engin Celenk, M.Sc.", "ec.immofuchs.info");
  return lines.join("\n");
}

const tokens = s => s.toLowerCase().match(/[\p{L}\p{N}+#/.-]+/gu) || [];
export function answer(q, lang = "en") {
  const qn = q.toLowerCase(); const w = new Set(tokens(q));
  let best = null, bestScore = 0;
  facts.forEach(f => {
    let sc = 0;
    f.k.forEach(k => { if (k.includes(" ") || k.includes("-") ? qn.includes(k) : w.has(k)) sc += 2; });
    [f.q.en, f.q.de].forEach(x => tokens(x).forEach(t => { if (t.length > 3 && w.has(t)) sc += 1; }));
    if (sc > bestScore) { bestScore = sc; best = f; }
  });
  const gap = gaps.find(g => keyRx(g).test(qn));
  const G = gap && gap[0].toUpperCase() + gap.slice(1);
  if (gap && bestScore < 3) return lang === "de" ? `${G} gehört nicht zu Engins Schwerpunkten.` : `${G} is not one of Engin's focus areas.`;
  return best && bestScore >= 2 ? pick(best.a, lang) : null;
}
