import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "./cv.css";
import * as raw from "./data/profile.js";
import { localize } from "./i18n.jsx";
import { period } from "./lib/dates.js";

const params = new URLSearchParams(location.search);
const lang = params.get("lang") === "de" ? "de" : "en";
const { person, focuses, domains, career, education, certificates, trainings, logos } = localize({ ...raw }, lang);
const T = {
  en: { cv: "Curriculum vitae", exp: "Experience", edu: "Education", expertise: "Expertise", certs: "Certificates", training: "Training", langs: "Languages", projects: "Projects", interactive: "Interactive portfolio", dl: "Download PDF", back: "Back to portfolio" },
  de: { cv: "Lebenslauf", exp: "Berufserfahrung", edu: "Ausbildung", expertise: "Expertise", certs: "Zertifikate", training: "Weiterbildung", langs: "Sprachen", projects: "Projekte", interactive: "Interaktives Portfolio", dl: "PDF laden", back: "Zum Portfolio" }
}[lang];
document.documentElement.lang = lang;

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const f = focuses.find(x => x.id === params.get("focus")) || focuses[0];
const key = c => c.domains.includes(f.domains[0]);
const logo = id => logos[id]?.src ? `<img class="lg" src="${logos[id].src}" alt="${esc(logos[id].name)}">` : "";
const studies = education.filter(e => e.logo);
document.title = `Engin Celenk · ${T.cv} · ${f.label}`;

document.getElementById("cv").innerHTML = `
<article class="page">
  <header class="head">
    <div>
      <p class="eyebrow">${T.cv} · ${esc(f.label)}</p>
      <h1>${esc(person.name)}<span>, ${esc(person.degree)}</span></h1>
      <p class="headline">${esc(f.headline)}</p>
    </div>
    <img src="/engin.png" alt="" class="photo">
  </header>
  <p class="contact"><span>${esc(person.email)}</span><span>${esc(person.location)}</span><span>${esc(person.site.replace("https://", ""))}</span></p>
  <section class="profile"><p>${esc(f.profile)}</p></section>
  <div class="cols">
    <div class="main">
      <h2>${T.exp}</h2>
      ${[...career].reverse().map(c => `
        <div class="job ${key(c) ? "key" : ""}">${logo(c.logo)}
          <div>
            <p class="when">${esc(period(c.from, c.to, lang))} · ${esc(c.place)}</p>
            <h3>${esc(c.role)}</h3><p class="org">${esc(c.org)}</p>
            <ul>${c.points.map(r => `<li>${esc(r)}</li>`).join("")}${c.projects ? `<li>${T.projects}: ${esc(c.projects.join(", "))}</li>` : ""}</ul>
          </div>
        </div>`).join("")}
      <h2>${T.edu}</h2>
      ${[...studies].reverse().map(e => `
        <div class="job ${e.id === "msc" ? "key" : ""}">${logo(e.logo)}
          <div><h3>${esc(e.title)}</h3><p class="org">${esc(e.text)}</p>${e.extra ? `<ul><li>${esc(e.extra.text)}</li></ul>` : ""}</div>
        </div>`).join("")}
    </div>
    <aside class="side">
      <h2>${T.expertise}</h2>
      ${f.domains.concat(domains.map(d => d.id).filter(d => !f.domains.includes(d))).map(id => {
        const d = domains.find(x => x.id === id);
        return `<div class="dom"><h3>${esc(d.title)}</h3><p>${esc(d.keywords.join(" · "))}</p></div>`;
      }).join("")}
      <h2>${T.certs}</h2>
      <ul class="plain">${certificates.map(c => `<li>${c.year ? `<b>${c.year}</b> ` : ""}${esc(c.name)}</li>`).join("")}</ul>
      <h2>${T.training}</h2>
      <ul class="plain">${trainings.slice(0, 5).map(c => `<li><b>${c.year}</b> ${esc(c.name)}</li>`).join("")}</ul>
      <h2>${T.langs}</h2>
      <ul class="plain">${person.languages.map(l => `<li>${esc(l.name)} · ${esc(l.level)}</li>`).join("")}</ul>
    </aside>
  </div>
  <footer class="foot">${T.interactive}: ${esc(person.site.replace("https://", ""))}</footer>
</article>
<nav class="tools no-print">
  ${focuses.map(x => `<a href="?focus=${x.id}&lang=${lang}" ${x.id === f.id ? 'aria-current="true"' : ""}>${esc(x.label)}</a>`).join("")}
  <a href="?focus=${f.id}&lang=${lang === "de" ? "en" : "de"}">${lang === "de" ? "EN" : "DE"}</a>
  <a class="dl" href="${f.file}" download>${T.dl}</a>
  <a href="/?lang=${lang}">${T.back}</a>
</nav>`;
