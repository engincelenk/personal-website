import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "./cv.css";
import { person, focuses, domains, journey, cases, certificates, trainings } from "./data/profile.js";
import { period } from "./lib/dates.js";

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const params = new URLSearchParams(location.search);
const f = focuses.find(x => x.id === params.get("focus")) || focuses[0];
const rank = s => { const i = Math.min(...s.domains.map(d => { const k = f.domains.indexOf(d); return k < 0 ? 9 : k; })); return isFinite(i) ? i : 9; };

const work = journey.filter(s => s.id !== "foundations");
const caseList = cases.filter(c => f.domains.slice(0, 2).includes(c.domain) || (f.id === "innovation" && c.id === "immofuchs")).slice(0, 3);
document.title = `Engin Celenk · CV · ${f.label}`;

document.getElementById("cv").innerHTML = `
<article class="page">
  <header class="head">
    <div>
      <p class="eyebrow">Curriculum vitae · ${esc(f.label)}</p>
      <h1>${esc(person.name)}</h1>
      <p class="headline">${esc(f.headline)}</p>
    </div>
    <img src="/engin.png" alt="" class="photo">
  </header>
  <p class="contact"><span>${esc(person.email)}</span><span>${esc(person.location)}</span><span>${esc(person.site.replace("https://", ""))}</span></p>

  <section class="profile"><p>${esc(f.profile)}</p></section>

  <div class="cols">
    <div class="main">
      <h2>Experience</h2>
      ${work.map(s => `
        <div class="job ${rank(s) === 0 ? "key" : ""}">
          <p class="when">${esc(period(s.from, s.to))} · ${esc(s.place)}</p>
          <h3>${esc(s.role)}</h3>
          <p class="org">${esc(s.org)}</p>
          <ul>${s.responsibilities.map(r => `<li>${esc(r)}</li>`).join("")}</ul>
        </div>`).join("")}
      <h2>Selected case studies</h2>
      ${caseList.map(c => `<div class="case"><h3>${esc(c.title)}</h3><p>${esc(c.result)}</p></div>`).join("")}
    </div>
    <aside class="side">
      <h2>Expertise</h2>
      ${f.domains.concat(domains.map(d => d.id).filter(d => !f.domains.includes(d))).map(id => {
        const d = domains.find(x => x.id === id);
        return `<div class="dom"><h3>${esc(d.title)}</h3><p>${esc(d.keywords.join(" · "))}</p></div>`;
      }).join("")}
      <h2>Education</h2>
      <div class="edu"><h3>M.Sc. Business Informatics</h3><p>Reutlingen University · 2010–2012 · grade 1.7, faculty award, publication</p></div>
      <div class="edu"><h3>B.Sc. Business Informatics</h3><p>Reutlingen University · 2008–2009</p></div>
      <div class="edu"><h3>Software Engineering studies</h3><p>Heilbronn University · 2005–2008</p></div>
      <div class="edu"><h3>Apprenticeship, office administrator</h3><p>Akzo Nobel AG · 2003–2005</p></div>
      <h2>Certificates</h2>
      <ul class="plain">${certificates.map(c => `<li>${c.year ? `<b>${c.year}</b> ` : ""}${esc(c.name)}</li>`).join("")}</ul>
      <h2>Training</h2>
      <ul class="plain">${trainings.slice(0, 6).map(c => `<li><b>${c.year}</b> ${esc(c.name)}</li>`).join("")}</ul>
      <h2>Languages</h2>
      <ul class="plain">${person.languages.map(l => `<li>${esc(l.name)} · ${esc(l.level)}</li>`).join("")}</ul>
    </aside>
  </div>
  <footer class="foot">Interactive portfolio with case studies and live demos: ${esc(person.site.replace("https://", ""))}</footer>
</article>
<nav class="tools no-print">
  ${focuses.map(x => `<a href="?focus=${x.id}" ${x.id === f.id ? 'aria-current="true"' : ""}>${esc(x.label)}</a>`).join("")}
  <a class="dl" href="${f.file}" download>Download PDF</a>
  <a href="/">Back to portfolio</a>
</nav>`;
