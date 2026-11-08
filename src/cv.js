import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "./cv.css";
import { person, focuses, domains, career, education, certificates, trainings, logos } from "./data/profile.js";
import { period } from "./lib/dates.js";

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const f = focuses.find(x => x.id === new URLSearchParams(location.search).get("focus")) || focuses[0];
const key = c => c.domains.includes(f.domains[0]);
const logo = id => logos[id] ? `<img class="lg" src="${logos[id].src}" alt="${esc(logos[id].name)}">` : "";
const studies = education.filter(e => e.logo);
document.title = `Engin Celenk · CV · ${f.label}`;

document.getElementById("cv").innerHTML = `
<article class="page">
  <header class="head">
    <div>
      <p class="eyebrow">Curriculum vitae · ${esc(f.label)}</p>
      <h1>${esc(person.name)}<span>, ${esc(person.degree)}</span></h1>
      <p class="headline">${esc(f.headline)}</p>
    </div>
    <img src="/engin.png" alt="" class="photo">
  </header>
  <p class="contact"><span>${esc(person.email)}</span><span>${esc(person.location)}</span><span>${esc(person.site.replace("https://", ""))}</span></p>
  <section class="profile"><p>${esc(f.profile)}</p></section>

  <div class="cols">
    <div class="main">
      <h2>Experience</h2>
      ${[...career].reverse().map(c => `
        <div class="job ${key(c) ? "key" : ""}">
          ${logo(c.logo)}
          <div>
            <p class="when">${esc(period(c.from, c.to))} · ${esc(c.place)}</p>
            <h3>${esc(c.role)}</h3>
            <p class="org">${esc(c.org)}</p>
            <ul>${c.points.map(r => `<li>${esc(r)}</li>`).join("")}${c.projects ? `<li>Projects: ${esc(c.projects.join(", "))}</li>` : ""}</ul>
          </div>
        </div>`).join("")}
      <h2>Education</h2>
      ${[...studies].reverse().map(e => `
        <div class="job ${e.id === "msc" ? "key" : ""}">
          ${logo(e.logo)}
          <div><h3>${esc(e.title)}</h3><p class="org">${esc(e.text)}</p>${e.extra ? `<ul><li>${esc(e.extra.text)}</li></ul>` : ""}</div>
        </div>`).join("")}
    </div>
    <aside class="side">
      <h2>Expertise</h2>
      ${f.domains.concat(domains.map(d => d.id).filter(d => !f.domains.includes(d))).map(id => {
        const d = domains.find(x => x.id === id);
        return `<div class="dom"><h3>${esc(d.title)}</h3><p>${esc(d.keywords.join(" · "))}</p></div>`;
      }).join("")}
      <h2>Certificates</h2>
      <ul class="plain">${certificates.map(c => `<li>${c.year ? `<b>${c.year}</b> ` : ""}${esc(c.name)}</li>`).join("")}</ul>
      <h2>Training</h2>
      <ul class="plain">${trainings.slice(0, 5).map(c => `<li><b>${c.year}</b> ${esc(c.name)}</li>`).join("")}</ul>
      <h2>Languages</h2>
      <ul class="plain">${person.languages.map(l => `<li>${esc(l.name)} · ${esc(l.level)}</li>`).join("")}</ul>
    </aside>
  </div>
  <footer class="foot">Interactive portfolio: ${esc(person.site.replace("https://", ""))}</footer>
</article>
<nav class="tools no-print">
  ${focuses.map(x => `<a href="?focus=${x.id}" ${x.id === f.id ? 'aria-current="true"' : ""}>${esc(x.label)}</a>`).join("")}
  <a class="dl" href="${f.file}" download>Download PDF</a>
  <a href="/">Back to portfolio</a>
</nav>`;
