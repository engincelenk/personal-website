(() => {
  "use strict";
  const P = window.PROFILE;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };
  const params = new URLSearchParams(location.search);

  /* ---------------- language ---------------- */
  let lang = params.get("lang") || store.get("lang") || "de";
  if (!["de", "en"].includes(lang)) lang = "de";
  const t = v => (v && typeof v === "object" && !Array.isArray(v) && ("de" in v || "en" in v)) ? (v[lang] ?? v.de) : v;

  const UI = {
    de: {
      skip: "Zum Fit-Check springen", "nav.fit": "Fit-Check", "nav.path": "Werdegang", "nav.tree": "Profil", "nav.twin": "Fragen", "nav.contact": "Kontakt",
      "lens.prompt": "Lebenslauf ansehen als", "lens.all": "Gesamtbild",
      "fit.kicker": "Für Recruiter", "fit.title": "Passt Engin zu Ihrer Stelle?",
      "fit.lead": "Fügen Sie eine Stellenanzeige ein. Die Seite vergleicht sie mit dem Lebenslauf, markiert Treffer, zeigt ehrlich, was nicht passt, und schreibt ein Kurzprofil für genau diese Stelle. Alles läuft in Ihrem Browser, nichts wird übertragen.",
      "fit.label": "Stellenanzeige", "fit.run": "Passung prüfen", "fit.sample1": "Beispiel: Security", "fit.sample2": "Beispiel: Projektleitung",
      "fit.ph": "Stellenanzeige hier einfügen, zum Beispiel aus StepStone, LinkedIn oder Ihrer Karriereseite.",
      "fit.empty.t": "Was Sie in wenigen Sekunden bekommen",
      "fit.empty.1": "Einen Passungswert von 0 bis 100 mit Aufschlüsselung nach den vier Kompetenzsäulen",
      "fit.empty.2": "Ihre Anzeige mit markierten Treffern und ehrlich markierten Lücken",
      "fit.empty.3": "Ein Kurzprofil, das Engins Erfahrung auf Ihre Anforderungen abbildet",
      "fit.short": "Bitte fügen Sie eine längere Stellenanzeige ein, mindestens ein paar Sätze.",
      "fit.none": "Keine Überschneidung mit diesem Lebenslauf gefunden. Entweder liegt die Stelle außerhalb meines Profils, oder die Anzeige nutzt ganz andere Begriffe. Schreiben Sie mir gern direkt.",
      "fit.scoreOf": "von 100", "fit.v4": "Starke Passung", "fit.v3": "Gute Passung", "fit.v2": "Teilweise Passung", "fit.v1": "Geringe Passung",
      "fit.matches": n => `${n} Anforderungen erkannt, die im Lebenslauf belegt sind`,
      "fit.strong": "Hier bin ich stark", "fit.solid": "Hier bin ich solide", "fit.gaps": "Nicht mein Schwerpunkt", "fit.nogaps": "In dieser Anzeige nichts gefunden",
      "fit.hl": "Ihre Anzeige mit markierten Treffern",
      "fit.letter": "Kurzprofil für diese Stelle", "fit.letterNote": "Automatisch aus Ihrer Anzeige und den Fakten dieser Seite erstellt, direkt in Ihrem Browser.",
      "fit.copy": "Text kopieren", "fit.copied": "Kopiert", "fit.method": "Methode: Die Seite sucht Fachbegriffe aus dem Lebenslauf in der Anzeige, gewichtet sie mit meiner Selbsteinschätzung und zieht für jede Anforderung ab, die ich nicht abdecke. Ein schnelles Signal für ein Gespräch, kein Urteil.",
      "pil.kicker": "Kompetenz", "pil.title": "Vier Säulen, eine Person",
      "pil.lead": "Tippen Sie auf eine Säule oder eine Fähigkeit. Die Punkte sind meine eigene Einschätzung auf der Skala des Lebenslaufs, 1 bis 4.",
      "pil.pick": "Wählen Sie eine Fähigkeit, um den Nachweis zu sehen.", "pil.level": (l) => `Stufe ${l} von 4`,
      "path.kicker": "Werdegang", "path.title": "23 Jahre auf einen Blick", "path.lead": "Jeder Balken ist eine Station. Tippen Sie darauf, um zu den Details zu springen.",
      "type.job": "Beruf", "type.practice": "Praxis & Abschlussarbeiten", "type.edu": "Ausbildung & Studium", "type.all": "Alle",
      "now": "heute", "yrs": (y, m) => [y ? `${y} J.` : "", m ? `${m} Mon.` : ""].filter(Boolean).join(" "),
      "st.kicker": "Bildungsweg", "st.title": "Von 1994 an, Stufe für Stufe", "st.lead": "Keine Abkürzung, jede Stufe einzeln genommen. Tippen Sie auf eine Stufe.",
      "tree.kicker": "Profil", "tree.title": "Eine Mischung aus „Mechie“ und „Techi“",
      "tree.lead": "Management und Technik wachsen aus demselben Fundament. Tippen Sie auf eine Stufe, um die zugehörigen Nachweise zu sehen.",
      "tree.mechie": "„Mechie“", "tree.mechieSub": "Management", "tree.techi": "„Techi“", "tree.techiSub": "Technik",
      "tree.certs": "Nachweise", "tree.nocerts": "Belegt durch die Berufspraxis im Werdegang.", "tree.lens": "Seite aus diesem Blickwinkel zeigen",
      "tree.pick": "Tippen Sie auf eine Stufe im Baum.",
      "tr.kicker": "Weiterbildung", "tr.title": "Zertifikate und Trainings", "tr.cert": "Zertifikat",
      "lang.title": "Sprachen", "char.title": "Persönlich", "proj.title": "Eigene Projekte", "interests": "Interessen: ",
      "twin.kicker": "Digitaler Zwilling", "twin.title": "Fragen Sie mich etwas",
      "twin.lead": "Der Zwilling antwortet nur mit Fakten aus diesem Lebenslauf. Was er nicht weiß, sagt er.",
      "twin.label": "Ihre Frage", "twin.send": "Fragen", "twin.ph": "Zum Beispiel: Bist du eher Manager oder Techniker?",
      "twin.hello": "Hallo, ich bin Engins digitaler Zwilling. Fragen Sie mich zu Erfahrung, Projekten, Zertifikaten oder Bildungsweg.",
      "twin.gap": term => `${term} gehört nicht zu meinen Schwerpunkten, und das sage ich lieber offen. Ich arbeite mich schnell ein, mein Weg vom Bürokaufmann zum Cyber Security Engineer zeigt das.`,
      "twin.unknown": "Dazu habe ich keine gesicherte Antwort im Lebenslauf. Fragen Sie Engin am besten direkt: engincelenk@web.de.",
      "twin.source": "Aus den Fakten dieser Seite", "twin.ai": "Von einem Sprachmodell aus den Fakten dieser Seite formuliert",
      "mk.kicker": "Hinter der Seite", "mk.title": "So ist diese Bewerbung entstanden",
      "mk.lead": "Diese Seite ist selbst eine Arbeitsprobe: Sie zeigt, wie ich KI einsetze, um aus vorhandenem Material schnell etwas Nützliches zu machen.",
      "ct.kicker": "Kontakt", "ct.title": "Lassen Sie uns sprechen", "ct.lead": "Offen für Rollen in Cyber Security, Solution-Architektur, Solution Management und IT-Projektleitung.",
      "ct.mail": "E-Mail", "ct.phone": "Telefon", "ct.show": "Nummer anzeigen", "ct.vcard": "Visitenkarte", "ct.vcardBtn": "Kontakt speichern (.vcf)",
      "ct.share": "Diese Seite", "ct.shareBtn": "Link kopieren", "ct.write": "E-Mail schreiben", "ct.call": "Anrufen",
      "foot": "Gebaut mit HTML, CSS, JavaScript und KI. Keine Cookies, kein Tracking.",
      "facts.years": "Jahre Konzern-IT", "facts.corps": "Konzerne: Bosch, Daimler, TRUMPF", "facts.grade": "Master-Note, mit Fakultätspreis", "facts.langs": "Sprachen",
      "now.role": "Aktuell Cyber Security Engineer bei Bosch Digital",
      "welcome": (an, firma, rolle) => {
        const hi = an ? `Guten Tag ${an},` : (firma ? `Hallo ${firma}-Team,` : "Willkommen,");
        const what = rolle ? ` diese Seite ist für die Position „${rolle}“${firma ? ` bei ${firma}` : ""} vorbereitet.` : (firma ? ` schön, dass Sie da sind. Diese Seite ist für ${firma} vorbereitet.` : " schön, dass Sie da sind.");
        return hi + what + " Fügen Sie Ihre Anzeige unten in den Fit-Check ein.";
      },
      "letter.subject": r => `Bewerbung als ${r}`, "letter.hello": an => an ? `Guten Tag ${an},` : "Sehr geehrte Damen und Herren,",
      "letter.open": (r, f, y) => `Ihre Anzeige für die Position ${r}${f ? ` bei ${f}` : ""} beschreibt vieles, was ich seit ${y} Jahren in der Konzern-IT von Bosch, Daimler und TRUMPF mache. Diese Anforderungen aus Ihrer Anzeige bringe ich direkt mit:`,
      "letter.gap": g => `Offen gesagt: ${g} gehört nicht zu meinen Schwerpunkten. Ich arbeite mich schnell ein, mein Weg vom Bürokaufmann zum Cyber Security Engineer zeigt das.`,
      "letter.close": "Ich freue mich auf ein Gespräch.", "letter.role": "diese Stelle"
    },
    en: {
      skip: "Skip to fit check", "nav.fit": "Fit check", "nav.path": "Career", "nav.tree": "Profile", "nav.twin": "Ask", "nav.contact": "Contact",
      "lens.prompt": "View this CV as", "lens.all": "Full picture",
      "fit.kicker": "For recruiters", "fit.title": "Is Engin a fit for your role?",
      "fit.lead": "Paste a job post. The page compares it with the CV, highlights matches, says plainly what does not fit and writes a short profile for exactly this role. Everything runs in your browser and nothing is sent anywhere.",
      "fit.label": "Job post", "fit.run": "Check fit", "fit.sample1": "Sample: security", "fit.sample2": "Sample: project lead",
      "fit.ph": "Paste the job post here, for example from LinkedIn or your careers page.",
      "fit.empty.t": "What you get in a few seconds",
      "fit.empty.1": "A fit score from 0 to 100, broken down by the four competence pillars",
      "fit.empty.2": "Your post with matches highlighted and gaps marked honestly",
      "fit.empty.3": "A short profile that maps Engin's experience to your requirements",
      "fit.short": "Please paste a longer job post, at least a few sentences.",
      "fit.none": "No overlap with this CV found. Either the role is outside my profile or the post uses very different words. Feel free to write to me directly.",
      "fit.scoreOf": "of 100", "fit.v4": "Strong fit", "fit.v3": "Good fit", "fit.v2": "Partial fit", "fit.v1": "Low fit",
      "fit.matches": n => `${n} requirements found that the CV backs up`,
      "fit.strong": "Where I am strong", "fit.solid": "Where I am solid", "fit.gaps": "Not my focus", "fit.nogaps": "Nothing flagged in this post",
      "fit.hl": "Your post with matches highlighted",
      "fit.letter": "Short profile for this role", "fit.letterNote": "Generated from your post and the facts on this page, right in your browser.",
      "fit.copy": "Copy text", "fit.copied": "Copied", "fit.method": "Method: the page looks for CV terms in the post, weights them by my own rating and deducts for every requirement I do not cover. A quick signal for a conversation, not a verdict.",
      "pil.kicker": "Competence", "pil.title": "Four pillars, one person",
      "pil.lead": "Tap a pillar or a skill. The dots are my own rating on the CV's scale from 1 to 4.",
      "pil.pick": "Pick a skill to see the evidence.", "pil.level": (l) => `Level ${l} of 4`,
      "path.kicker": "Career", "path.title": "23 years at a glance", "path.lead": "Every bar is one position. Tap it to jump to the details.",
      "type.job": "Work", "type.practice": "Practice & theses", "type.edu": "Training & studies", "type.all": "All",
      "now": "present", "yrs": (y, m) => [y ? `${y} yr` : "", m ? `${m} mo` : ""].filter(Boolean).join(" "),
      "st.kicker": "Education", "st.title": "From 1994, one step at a time", "st.lead": "No shortcut, every step taken on its own. Tap a step.",
      "tree.kicker": "Profile", "tree.title": "A mix of “Mechie” and “Techi”",
      "tree.lead": "Management and technology grow from the same foundation. Tap a level to see the evidence behind it.",
      "tree.mechie": "“Mechie”", "tree.mechieSub": "Management", "tree.techi": "“Techi”", "tree.techiSub": "Technology",
      "tree.certs": "Evidence", "tree.nocerts": "Backed by the work experience in the career section.", "tree.lens": "Show the page from this angle",
      "tree.pick": "Tap a level in the tree.",
      "tr.kicker": "Learning", "tr.title": "Certificates and training", "tr.cert": "Certificate",
      "lang.title": "Languages", "char.title": "Personal", "proj.title": "Own projects", "interests": "Interests: ",
      "twin.kicker": "Digital twin", "twin.title": "Ask me something",
      "twin.lead": "The twin only answers with facts from this CV. If it does not know, it says so.",
      "twin.label": "Your question", "twin.send": "Ask", "twin.ph": "For example: Are you more of a manager or an engineer?",
      "twin.hello": "Hi, I am Engin's digital twin. Ask me about experience, projects, certificates or education.",
      "twin.gap": term => `${term} is not one of my focus areas, and I prefer to say that openly. I learn fast, as my path from office apprentice to cyber security engineer shows.`,
      "twin.unknown": "I do not have a reliable answer to that in the CV. Best ask Engin directly: engincelenk@web.de.",
      "twin.source": "From the facts on this page", "twin.ai": "Phrased by a language model from the facts on this page",
      "mk.kicker": "Behind the page", "mk.title": "How this application was made",
      "mk.lead": "This page is a work sample in itself: it shows how I use AI to turn existing material into something useful, fast.",
      "ct.kicker": "Contact", "ct.title": "Let's talk", "ct.lead": "Open to roles in cyber security, solution architecture, solution management and IT project leadership.",
      "ct.mail": "Email", "ct.phone": "Phone", "ct.show": "Show number", "ct.vcard": "Contact card", "ct.vcardBtn": "Save contact (.vcf)",
      "ct.share": "This page", "ct.shareBtn": "Copy link", "ct.write": "Write an email", "ct.call": "Call",
      "foot": "Built with HTML, CSS, JavaScript and AI. No cookies, no tracking.",
      "facts.years": "years of corporate IT", "facts.corps": "corporations: Bosch, Daimler, TRUMPF", "facts.grade": "master's grade, with faculty award", "facts.langs": "languages",
      "now.role": "Currently cyber security engineer at Bosch Digital",
      "welcome": (an, firma, rolle) => {
        const hi = an ? `Hello ${an},` : (firma ? `Hello ${firma} team,` : "Welcome,");
        const what = rolle ? ` this page has been prepared for the ${rolle} role${firma ? ` at ${firma}` : ""}.` : (firma ? ` glad you are here. This page has been prepared for ${firma}.` : " glad you are here.");
        return hi + what + " Paste your job post into the fit check below.";
      },
      "letter.subject": r => `Application: ${r}`, "letter.hello": an => an ? `Dear ${an},` : "Dear hiring team,",
      "letter.open": (r, f, y) => `Your post for the ${r} role${f ? ` at ${f}` : ""} describes much of what I have done for ${y} years in corporate IT at Bosch, Daimler and TRUMPF. These requirements from your post are ones I bring directly:`,
      "letter.gap": g => `To be open: ${g} is not one of my focus areas. I learn fast, as my path from office apprentice to cyber security engineer shows.`,
      "letter.close": "I look forward to talking.", "letter.role": "this"
    }
  };
  const u = (k, ...a) => { const v = UI[lang][k] ?? UI.de[k]; return typeof v === "function" ? v(...a) : v; };

  /* ---------------- personalisation via link ---------------- */
  const clean = s => (s || "").replace(/[<>]/g, "").trim().slice(0, 80);
  const who = { firma: clean(params.get("firma") || params.get("company")), an: clean(params.get("an") || params.get("to")), rolle: clean(params.get("rolle") || params.get("role")) };

  /* ---------------- date helpers ---------------- */
  const ym = s => { const [y, m] = s.split("-").map(Number); return y + (m - 1) / 12; };
  const nowYM = () => { const d = new Date(); return d.getFullYear() + d.getMonth() / 12; };
  const fmt = s => s ? s.split("-").reverse().join("/") : u("now");
  const dur = (a, b) => {
    const [y1, m1] = a.split("-").map(Number);
    const d = new Date(); const [y2, m2] = b ? b.split("-").map(Number) : [d.getFullYear(), d.getMonth() + 1];
    const months = (y2 - y1) * 12 + (m2 - m1) + 1;
    return u("yrs", Math.floor(months / 12), months % 12);
  };
  const yearsIT = Math.floor(nowYM() - ym(P.careerStart));

  /* ---------------- state ---------------- */
  const lensIds = P.lenses.map(l => l.id);
  let lens = P.lenses.find(l => l.id === (params.get("fokus") || params.get("lens"))) || P.lenses[0];
  let activeSkill = null, tlType = "all", lastFit = null, typingJob = 0;
  const pillar = id => P.pillars.find(p => p.id === id);
  const inFocus = tags => lens.id === "all" || tags.some(x => lens.focus.includes(x));

  /* ================= static UI text ================= */
  function applyUI() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(n => { n.textContent = u(n.dataset.i18n); });
    $$(".langswitch button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    $("#jd").placeholder = u("fit.ph");
    $("#q").placeholder = u("twin.ph");
    $("#year").textContent = "© " + new Date().getFullYear();
    $("#path h2").textContent = lang === "de" ? `${Math.ceil(nowYM() - 2003)} Jahre auf einen Blick` : `${Math.ceil(nowYM() - 2003)} years at a glance`;
    $("#nowrole").textContent = u("now.role");
    $("#hero-eyebrow").textContent = `${t(P.location)} · ${lang === "de" ? "M.Sc. Wirtschaftsinformatik" : "M.Sc. Business Informatics"}`;
    const w = $("#welcome");
    if (who.firma || who.an || who.rolle) { w.hidden = false; w.textContent = u("welcome", who.an, who.firma, who.rolle); }
  }

  /* ================= hero ================= */
  function renderHero(animate) {
    const box = $("#lenses"); box.innerHTML = "";
    P.lenses.forEach(L => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "lens"; b.setAttribute("role", "radio");
      b.dataset.id = L.id;
      b.textContent = L.id === "all" ? u("lens.all") : t(pillar(L.id).short);
      b.setAttribute("aria-checked", String(L === lens)); b.tabIndex = L === lens ? 0 : -1;
      b.addEventListener("click", () => setLens(L.id));
      b.addEventListener("keydown", e => {
        const i = P.lenses.indexOf(lens), n = P.lenses.length;
        if (["ArrowRight", "ArrowDown"].includes(e.key)) { e.preventDefault(); setLens(P.lenses[(i + 1) % n].id, true); }
        if (["ArrowLeft", "ArrowUp"].includes(e.key)) { e.preventDefault(); setLens(P.lenses[(i + n - 1) % n].id, true); }
      });
      box.appendChild(b);
    });
    const h = $("#headline"), s = $("#sub");
    const words = t(lens.head).split(" ");
    h.innerHTML = words.map((w, i) => `<span class="w" style="--i:${i}">${esc(w)}</span>`).join(" ");
    if (animate && !reduced) { h.classList.remove("rise"); void h.offsetWidth; h.classList.add("rise"); }
    s.textContent = t(lens.sub);

    const f = $("#facts");
    const items = [[yearsIT, "+", u("facts.years")], [3, "", u("facts.corps")], [lang === "de" ? "1,7" : "1.7", "", u("facts.grade")], [P.languages.length, "", u("facts.langs")]];
    f.innerHTML = items.map(([n, suf, l]) => `<div><dt data-n="${esc(n)}">${esc(n)}${suf}</dt><dd>${esc(l)}</dd></div>`).join("");
  }
  function countUp() {
    if (reduced) return;
    $$("#facts dt").forEach(dt => {
      const end = Number(dt.dataset.n); if (!Number.isInteger(end) || end < 3) return;
      const suf = dt.textContent.replace(String(end), ""); const t0 = performance.now();
      const step = now => { const k = Math.min(1, (now - t0) / 900); dt.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suf; if (k < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    });
  }

  function setLens(id, focusIt) {
    lens = P.lenses.find(l => l.id === id) || P.lenses[0];
    document.body.dataset.lens = lens.id;
    renderHero(true);
    if (focusIt) $(`#lenses [data-id="${lens.id}"]`)?.focus();
    renderPillars(); renderGantt(); renderTimeline(); renderTraining(); renderTree();
  }

  /* ================= fit check ================= */
  const SAMPLES = {
    de: [
      `Cyber Security Engineer (m/w/d) Digital Business
Sie verantworten die Sicherheit unserer digitalen Produkte von der Konzeption bis zum Betrieb. Sie erstellen Bedrohungs- und Risikoanalysen (TARA nach ISO/SAE 21434), definieren Sicherheitsanforderungen und begleiten Architekturentscheidungen im Sinne von Security by Design.
Sie arbeiten eng mit Solution Architects, Product Ownern und externen Dienstleistern zusammen, in einem agilen Umfeld mit Scrum und JIRA. Erfahrung mit Cloud- und SaaS-Lösungen sowie Schnittstellen (APIs) ist erforderlich. Kenntnisse in Python oder Penetrationstests sind von Vorteil.`,
      `IT-Projektleiter (m/w/d) E-Commerce Plattform
Sie leiten Projekte rund um unsere Customer-Experience- und E-Commerce-Plattform und tragen die End-to-End-Verantwortung von der Anforderung bis zum Betrieb. Sie steuern Stakeholder aus Fachbereich und IT sowie externe Dienstleister, verantworten Planung, Budget und Testmanagement.
Sie arbeiten agil (Scrum) oder hybrid, kennen ITIL-Prozesse und bringen Erfahrung in Solution-Architektur und Integration über APIs mit. Eine Projektmanagement-Zertifizierung (z. B. IPMA) ist wünschenswert. Kubernetes-Kenntnisse sind ein Plus.`
    ],
    en: [
      `Cyber Security Engineer, Digital Business
You own the security of our digital products from concept to operations. You perform threat analysis and risk assessment (TARA per ISO/SAE 21434), define security requirements and guide architecture decisions following security by design.
You work closely with solution architects, product owners and external vendors in an agile setup with Scrum and JIRA. Experience with cloud and SaaS solutions and APIs is required. Python or penetration testing skills are a plus.`,
      `IT Project Manager, E-Commerce Platform
You lead projects around our customer experience and e-commerce platform and take end-to-end responsibility from requirements to operations. You manage stakeholders across business and IT as well as external vendors, and own planning, budget and test management.
You work agile (Scrum) or hybrid, know ITIL processes and bring experience in solution architecture and integration via APIs. A project management certification (e.g. IPMA) is desirable. Kubernetes knowledge is a plus.`
    ]
  };
  const B = "[^\\p{L}\\p{N}]";
  const keyRx = k => new RegExp(`(^|${B})(${reEsc(k)})(?![\\p{L}\\p{N}])`, "iu");
  function analyze(text) {
    const hits = new Map();
    P.skills.forEach(s => { const f = s.keys.filter(k => keyRx(k).test(text)); if (f.length) hits.set(s, f); });
    const gaps = P.gaps.filter(k => keyRx(k).test(text));
    return { hits, gaps };
  }
  function fitEmpty() {
    $("#result").innerHTML = `<div class="empty"><h3>${esc(u("fit.empty.t"))}</h3><ol>
      <li><span class="ring-mini" aria-hidden="true"></span>${esc(u("fit.empty.1"))}</li>
      <li><span class="mark-mini" aria-hidden="true">Aa</span>${esc(u("fit.empty.2"))}</li>
      <li><span class="doc-mini" aria-hidden="true"></span>${esc(u("fit.empty.3"))}</li></ol></div>`;
  }
  function guessRole(text) {
    if (who.rolle) return who.rolle;
    const first = text.split(/\n/).map(s => s.trim()).find(Boolean) || "";
    return first.length > 3 && first.length < 90 ? first.replace(/\s*\((m|w|d|f)[^)]*\)/i, "").trim() : u("letter.role");
  }
  function runFit() {
    const text = $("#jd").value.trim();
    const out = $("#result");
    if (text.length < 60) { out.innerHTML = `<p class="msg">${esc(u("fit.short"))}</p>`; lastFit = null; renderPillars(); return; }
    const { hits, gaps } = analyze(text);
    if (!hits.size) { out.innerHTML = `<p class="msg">${esc(u("fit.none"))}</p>`; lastFit = null; renderPillars(); return; }
    const matched = [...hits.keys()];
    const strength = matched.reduce((a, s) => a + s.l / 4, 0) / matched.length;
    const coverage = Math.min(1, matched.length / 7);
    const fit = Math.max(5, Math.round(100 * strength * Math.sqrt(coverage) * (1 - Math.min(0.3, gaps.length * 0.06))));
    lastFit = { text, hits, gaps, matched, fit };
    const verdict = fit >= 75 ? u("fit.v4") : fit >= 55 ? u("fit.v3") : fit >= 35 ? u("fit.v2") : u("fit.v1");

    const bars = P.pillars.map(p => {
      const m = matched.filter(s => s.p === p.id);
      const v = m.length ? Math.round(100 * m.reduce((a, s) => a + s.l / 4, 0) / m.length) : 0;
      return `<div class="bar${m.length ? "" : " off"}"><span>${esc(t(p.label))}</span><i><b data-w="${v}"></b></i><em>${m.length ? v : "–"}</em></div>`;
    }).join("");

    const terms = [...new Set([...matched.flatMap(s => hits.get(s)), ...gaps])].sort((a, b) => b.length - a.length);
    const rx = new RegExp(`(^|${B})(${terms.map(k => reEsc(esc(k))).join("|")})(?![\\p{L}\\p{N}])`, "giu");
    const gapSet = new Set(gaps.map(g => g.toLowerCase()));
    const marked = esc(text).replace(rx, (m, pre, w) => `${pre}<mark class="${gapSet.has(w.toLowerCase()) ? "gap" : ""}">${w}</mark>`);

    const strong = matched.filter(s => s.l >= 4), solid = matched.filter(s => s.l < 4);
    const C = 2 * Math.PI * 52;
    out.innerHTML = `
      <div class="score">
        <svg viewBox="0 0 120 120" class="ring" aria-hidden="true"><circle cx="60" cy="60" r="52" class="track"/><circle cx="60" cy="60" r="52" class="val" style="stroke-dasharray:${C};stroke-dashoffset:${C}" data-off="${C * (1 - fit / 100)}"/></svg>
        <div class="score-n"><strong id="scoreNum">${fit}</strong><span>${esc(u("fit.scoreOf"))}</span></div>
        <div class="score-t"><b>${esc(verdict)}</b><span>${esc(u("fit.matches", matched.length))}</span></div>
      </div>
      <div class="bars">${bars}</div>
      <div class="cols">
        <div><h3>${esc(u("fit.strong"))}</h3><ul>${strong.map(s => `<li>${esc(t(s.n))}</li>`).join("") || "<li>–</li>"}</ul></div>
        <div><h3>${esc(u("fit.solid"))}</h3><ul>${solid.map(s => `<li>${esc(t(s.n))}</li>`).join("") || "<li>–</li>"}</ul></div>
        <div><h3>${esc(u("fit.gaps"))}</h3><ul class="gaplist">${gaps.map(g => `<li>${esc(g)}</li>`).join("") || `<li>${esc(u("fit.nogaps"))}</li>`}</ul></div>
      </div>
      <details class="hlbox"><summary>${esc(u("fit.hl"))}</summary><div class="hl">${marked}</div></details>
      <div class="letter">
        <div class="letter-head"><h3>${esc(u("fit.letter"))}</h3><button type="button" class="btn small ghost" id="copyLetter">${esc(u("fit.copy"))}</button></div>
        <pre id="letterText" class="letter-text"></pre>
        <p class="note">${esc(u("fit.letterNote"))}</p>
      </div>
      <p class="note">${esc(u("fit.method"))}</p>`;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      out.querySelectorAll("[data-w]").forEach(b => b.style.width = b.dataset.w + "%");
      const r = out.querySelector(".val"); if (r) r.style.strokeDashoffset = r.dataset.off;
    }));
    typeOut($("#letterText"), buildLetter(lastFit));
    $("#copyLetter").addEventListener("click", e => copy($("#letterText").dataset.full, e.currentTarget, u("fit.copied")));
    renderPillars();
  }
  function buildLetter(F) {
    const role = guessRole(F.text);
    const top = [...F.matched].sort((a, b) => (F.hits.get(b).length * b.l) - (F.hits.get(a).length * a.l)).slice(0, 4);
    const lines = [
      u("letter.subject", role), "", u("letter.hello", who.an), "",
      u("letter.open", role, who.firma, yearsIT), "",
      ...top.map(s => `• ${t(s.n)}: ${t(s.ev)}`), ""
    ];
    if (F.gaps.length) lines.push(u("letter.gap", F.gaps.slice(0, 2).join(lang === "de" ? " und " : " and ")), "");
    lines.push(u("letter.close"), "", "Engin Celenk", P.contact.email, location.origin.startsWith("http") ? location.origin + location.pathname : "");
    return lines.join("\n").trim();
  }
  function typeOut(node, text) {
    node.dataset.full = text;
    const job = ++typingJob;
    if (reduced) { node.textContent = text; return; }
    node.textContent = ""; let i = 0;
    const tick = () => {
      if (job !== typingJob) return;
      i = Math.min(text.length, i + 6); node.textContent = text.slice(0, i);
      if (i < text.length) setTimeout(tick, 12); else node.classList.add("done");
    };
    node.classList.remove("done"); tick();
  }
  function copy(text, btn, done) {
    const ok = () => { const o = btn.textContent; btn.textContent = done; setTimeout(() => btn.textContent = o, 1600); };
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(ok).catch(() => fallbackCopy(text, ok)); else fallbackCopy(text, ok);
  }
  function fallbackCopy(text, ok) {
    const ta = document.createElement("textarea"); ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); ok(); } catch (e) { /* ignore */ }
    ta.remove();
  }
  $("#run").addEventListener("click", runFit);
  $("#sample1").addEventListener("click", () => { $("#jd").value = SAMPLES[lang][0]; runFit(); });
  $("#sample2").addEventListener("click", () => { $("#jd").value = SAMPLES[lang][1]; runFit(); });

  /* ================= pillars & skills ================= */
  const dots = l => `<span class="dots" aria-label="${esc(u("pil.level", l))}">${[1, 2, 3, 4].map(i => `<i class="${i <= l ? "on" : ""}"></i>`).join("")}</span>`;
  function renderPillars() {
    const hits = lastFit ? new Set(lastFit.matched) : new Set();
    const box = $("#pillarlist"); box.innerHTML = "";
    P.pillars.forEach(p => {
      const card = document.createElement("div");
      card.className = "pillar" + (inFocus([p.id]) ? "" : " dim") + (lens.id === p.id ? " on" : "");
      const skills = P.skills.filter(s => s.p === p.id).sort((a, b) => b.l - a.l);
      card.innerHTML = `<button type="button" class="pillar-h" data-lens="${p.id}"><span>${esc(t(p.label))}</span></button>
        <div class="skills">${skills.map(s => `<button type="button" class="skill${hits.has(s) ? " hit" : ""}" aria-pressed="${activeSkill === s}" data-i="${P.skills.indexOf(s)}"><span>${esc(t(s.n))}</span>${dots(s.l)}</button>`).join("")}</div>`;
      box.appendChild(card);
    });
    box.querySelectorAll(".pillar-h").forEach(b => b.addEventListener("click", () => setLens(lens.id === b.dataset.lens ? "all" : b.dataset.lens)));
    box.querySelectorAll(".skill").forEach(b => b.addEventListener("click", () => { activeSkill = P.skills[b.dataset.i]; renderPillars(); }));
    const ev = $("#evidence");
    ev.innerHTML = activeSkill
      ? `<strong>${esc(t(activeSkill.n))}</strong> <span class="muted">· ${esc(t(pillar(activeSkill.p).label))} · ${esc(u("pil.level", activeSkill.l))}</span><br>${esc(t(activeSkill.ev))}`
      : `<span class="muted">${esc(u("pil.pick"))}</span>`;
  }

  /* ================= gantt + timeline ================= */
  function renderGantt() {
    const start = 2003, end = Math.floor(nowYM()) + 1, span = end - start;
    const types = ["job", "practice", "edu"];
    const pos = v => ((v - start) / span * 100).toFixed(3) + "%";
    let html = `<div class="g-axis">${Array.from({ length: span + 1 }, (_, i) => start + i).map(y => `<span style="left:${pos(y)}" class="${(y - start) % 3 ? "minor" : ""}">${(y - start) % 3 || y === end ? "" : y}</span>`).join("")}</div>`;
    types.forEach(ty => {
      const items = P.timeline.map((x, i) => ({ x, i })).filter(o => o.x.type === ty).sort((a, b) => ym(a.x.from) - ym(b.x.from));
      const lanes = [];
      items.forEach(o => {
        const a = ym(o.x.from), b = o.x.to ? ym(o.x.to) + 1 / 12 : nowYM() + 1 / 12;
        let li = lanes.findIndex(e => e <= a + 0.001); if (li < 0) { lanes.push(0); li = lanes.length - 1; }
        lanes[li] = b; o.lane = li; o.a = a; o.b = b;
      });
      html += `<div class="g-row" style="--lanes:${Math.max(1, lanes.length)}"><span class="g-lbl">${esc(u("type." + ty))}</span><div class="g-track">` +
        items.map(o => `<button type="button" class="g-bar t-${ty}${inFocus(o.x.tags) ? "" : " dim"}" style="left:${pos(o.a)};width:calc(${pos(o.b)} - ${pos(o.a)});--lane:${o.lane}" data-i="${o.i}" title="${esc(t(o.x.title))} · ${esc(o.x.org)}"><span>${esc(o.x.logo)}</span></button>`).join("") +
        `</div></div>`;
    });
    const g = $("#gantt"); g.innerHTML = html;
    g.querySelectorAll(".g-bar").forEach(b => b.addEventListener("click", () => {
      tlType = "all"; renderTimeline();
      const li = $(`#tl-${b.dataset.i}`); if (!li) return;
      li.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
      li.classList.remove("flash"); void li.offsetWidth; li.classList.add("flash");
    }));
    $("#legend").innerHTML = types.map(ty => `<span><i class="t-${ty}"></i>${esc(u("type." + ty))}</span>`).join("");
  }
  function renderTimeline() {
    const f = $("#tlfilter");
    f.innerHTML = ["all", "job", "practice", "edu"].map(ty => `<button type="button" class="chip" aria-pressed="${tlType === ty}" data-t="${ty}">${esc(u("type." + ty))}</button>`).join("");
    f.querySelectorAll("button").forEach(b => b.addEventListener("click", () => { tlType = b.dataset.t; renderTimeline(); }));
    const ol = $("#timeline"); ol.innerHTML = "";
    P.timeline.map((x, i) => ({ x, i })).filter(o => tlType === "all" || o.x.type === tlType)
      .sort((a, b) => ym(b.x.from) - ym(a.x.from))
      .forEach(({ x, i }) => {
        const li = document.createElement("li");
        li.id = "tl-" + i; li.className = `t-${x.type}` + (inFocus(x.tags) ? " focus" : " dim");
        const pts = t(x.points) || [];
        li.innerHTML = `<div class="when"><b>${esc(fmt(x.from))} – ${esc(fmt(x.to))}</b><span>${esc(dur(x.from, x.to))} · ${esc(x.place)}</span></div>
          <div class="what"><div class="what-h"><h3>${esc(t(x.title))}</h3><span class="logo">${esc(x.logo)}</span></div>
          <p class="org">${esc(x.org)}</p>${pts.length ? `<ul>${pts.map(p => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
          ${x.tags.length ? `<p class="tags">${x.tags.map(tg => `<span>${esc(t(pillar(tg).short))}</span>`).join("")}</p>` : ""}</div>`;
        ol.appendChild(li);
      });
  }

  /* ================= stairs ================= */
  let stairActive = P.stairs.length - 1;
  function renderStairs() {
    const ol = $("#stairlist");
    ol.innerHTML = P.stairs.map((s, i) => `<li style="--i:${i}"><button type="button" class="step${i === stairActive ? " on" : ""}" data-i="${i}" aria-pressed="${i === stairActive}">
      <span class="yr">${esc(s.y || "\u00a0")}</span><span class="st">${esc(t(s.t))}</span></button></li>`).join("");
    ol.querySelectorAll(".step").forEach(b => b.addEventListener("click", () => { stairActive = Number(b.dataset.i); renderStairs(); }));
    const s = P.stairs[stairActive];
    $("#stairnote").innerHTML = `<b>${esc(t(s.t))}</b>${s.y ? ` <span class="muted">(${esc(s.y)})</span>` : ""}. ${esc(t(s.d))}`;
  }
  function climb() {
    if (reduced) return;
    const steps = $$("#stairlist .step"); let i = 0;
    stairActive = 0; renderStairs();
    const go = () => { if (i >= P.stairs.length - 1) return; i++; stairActive = i; renderStairs(); setTimeout(go, 260); };
    setTimeout(go, 260);
  }

  /* ================= mechie / techi tree ================= */
  let treeSel = null;
  function renderTree() {
    const T = P.tree;
    const col = (key, title, sub, nodes) => `<div class="branch ${key}">
      <div class="branch-h"><b>${esc(title)}</b><span>${esc(sub)}</span></div>
      <ol>${[...nodes].reverse().map(n => `<li><button type="button" class="node${treeSel === n.id ? " on" : ""}${inFocus([n.lens]) ? "" : " dim"}" data-id="${n.id}" aria-pressed="${treeSel === n.id}">
        <b>${esc(t(n.n))}</b><span>${esc(t(n.s))}</span>${(t(n.certs) || []).length ? `<em>${(t(n.certs)).length}</em>` : ""}</button></li>`).join("")}</ol></div>`;
    $("#treebox").innerHTML = `<div class="apex">Engin</div>
      <div class="branches">${col("mechie", u("tree.mechie"), u("tree.mechieSub"), T.mechie)}${col("techi", u("tree.techi"), u("tree.techiSub"), T.techi)}</div>
      <div class="base">${T.base.map(b => `<span>${esc(t(b))}</span>`).join("")}</div>`;
    $$("#treebox .node").forEach(b => b.addEventListener("click", () => { treeSel = b.dataset.id; renderTree(); }));
    const d = $("#treedetail");
    const n = [...T.mechie, ...T.techi].find(x => x.id === treeSel);
    if (!n) { d.innerHTML = `<span class="muted">${esc(u("tree.pick"))}</span>`; return; }
    const certs = t(n.certs) || [];
    d.innerHTML = `<h3>${esc(t(n.n))}</h3><p class="muted">${esc(t(n.s))}</p>
      <p class="lbl">${esc(u("tree.certs"))}</p>
      ${certs.length ? `<ul class="paper">${certs.map(c => `<li>${esc(c)}</li>`).join("")}</ul>` : `<p>${esc(u("tree.nocerts"))}</p>`}
      <button type="button" class="btn small ghost" id="treeLens">${esc(u("tree.lens"))}: ${esc(t(pillar(n.lens).short))}</button>`;
    $("#treeLens").addEventListener("click", () => { setLens(n.lens); $("#top").scrollIntoView({ behavior: reduced ? "auto" : "smooth" }); });
  }

  /* ================= training, languages, personal ================= */
  function renderTraining() {
    const cats = Object.keys(P.trainingCats);
    $("#trainlist").innerHTML = cats.map(c => `<div class="tcat"><h3>${esc(t(P.trainingCats[c]))}</h3><ul>${P.trainings.filter(x => x.cat === c).sort((a, b) => b.y - a.y)
      .map(x => `<li class="${inFocus([x.tag]) ? "" : "dim"}"><span class="y">${x.y}</span><span>${esc(t(x.n))}${x.cert ? ` <em class="badge">${esc(u("tr.cert"))}</em>` : ""}</span></li>`).join("")}</ul></div>`).join("");
    $("#langlist").innerHTML = P.languages.map(l => `<li><span>${esc(t(l.n))}</span>${dots(l.l)}</li>`).join("");
    $("#character").innerHTML = t(P.character).map(c => `<span class="tag">${esc(c)}</span>`).join(" ");
    $("#interests").textContent = u("interests") + t(P.interests).join(", ");
    $("#projectlist").innerHTML = P.projects.map(p => `<div class="proj"><a href="${esc(p.link)}" target="_blank" rel="noopener">${esc(t(p.name))}</a> <span class="st">${esc(t(p.status))}</span><p>${esc(t(p.text))}</p></div>`).join("");
  }

  /* ================= digital twin ================= */
  const norm = s => s.toLowerCase().normalize("NFC");
  const tokens = s => norm(s).match(/[\p{L}\p{N}+#/.-]+/gu) || [];
  function bubble(who_, html, note) {
    const d = document.createElement("div"); d.className = "msg-b " + who_;
    d.innerHTML = `<p>${html}</p>${note ? `<small>${esc(note)}</small>` : ""}`;
    $("#log").appendChild(d); $("#log").scrollTop = $("#log").scrollHeight; return d;
  }
  function localAnswer(q) {
    const qn = norm(q), w = new Set(tokens(q));
    const gap = P.gaps.find(g => keyRx(g).test(qn));
    let best = null, bestScore = 0;
    P.facts.forEach(f => {
      let sc = 0;
      f.k.forEach(k => { if (k.includes(" ") ? qn.includes(k) : w.has(k)) sc += 2; });
      tokens(t(f.q)).forEach(x => { if (x.length > 3 && w.has(x)) sc += 1; });
      if (sc > bestScore) { bestScore = sc; best = f; }
    });
    if (gap && (!best || bestScore < 3)) return u("twin.gap", gap.charAt(0).toUpperCase() + gap.slice(1));
    return best && bestScore >= 2 ? t(best.a) : null;
  }
  async function ask(q) {
    q = q.trim(); if (!q) return;
    bubble("me", esc(q));
    $("#q").value = "";
    const typing = bubble("bot typing", "<span></span><span></span><span></span>");
    let answer = null, note = u("twin.source");
    if (P.askEndpoint) {
      try {
        const r = await fetch(P.askEndpoint, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ question: q, lang }) });
        if (r.ok) { const j = await r.json(); if (j.answer) { answer = j.answer; note = u("twin.ai"); } }
      } catch (e) { /* offline fallback */ }
    }
    if (!answer) { await new Promise(r => setTimeout(r, reduced ? 0 : 550)); answer = localAnswer(q) || u("twin.unknown"); }
    typing.remove();
    const b = bubble("bot", "", note);
    typeOut(b.querySelector("p"), answer);
  }
  function renderTwin() {
    $("#log").innerHTML = "";
    bubble("bot", esc(u("twin.hello")));
    const sug = $("#suggest"); sug.innerHTML = "";
    [2, 1, 3, 6, 4, 0].map(i => P.facts[i]).forEach(f => {
      const c = document.createElement("button"); c.type = "button"; c.className = "chip"; c.textContent = t(f.q);
      c.addEventListener("click", () => ask(t(f.q))); sug.appendChild(c);
    });
  }
  $("#askform").addEventListener("submit", e => { e.preventDefault(); ask($("#q").value); });

  /* ================= making of ================= */
  function renderSteps() {
    const S = lang === "de" ? [
      ["Ausgangsmaterial", "Drei Handy-Screenshots meines bisherigen PDF-Lebenslaufs. Sonst nichts."],
      ["Lesen und strukturieren", "Die KI liest die Bilder und überführt Stationen, Zertifikate, Skills und den Kompetenzbaum in eine einzige, zweisprachige Datendatei."],
      ["Entwerfen und bauen", "Fit-Check mit Kurzprofil, Zeitstrahl, Bildungstreppe und digitaler Zwilling. Reines HTML, CSS und JavaScript, ohne Frameworks und ohne Server."],
      ["Prüfen", "Ich lese jede Aussage gegen. Die Seite behauptet nichts, was nicht im Lebenslauf steht, und benennt Lücken offen."],
      ["Veröffentlichen und personalisieren", "Automatisch über GitHub Pages. Für jede Bewerbung erzeuge ich einen eigenen Link, der Firma, Ansprechpartner und Stelle begrüßt."]
    ] : [
      ["Raw material", "Three phone screenshots of my previous PDF CV. Nothing else."],
      ["Read and structure", "The AI reads the images and turns positions, certificates, skills and the competence tree into a single bilingual data file."],
      ["Design and build", "Fit check with short profile, timeline, education stairs and digital twin. Plain HTML, CSS and JavaScript, no frameworks, no server."],
      ["Review", "I check every statement. The page claims nothing that is not in the CV and names gaps openly."],
      ["Publish and personalize", "Automatically via GitHub Pages. For each application I create a dedicated link that greets the company, contact person and role."]
    ];
    $("#steps").innerHTML = S.map(([h, p]) => `<li><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join("");
  }

  /* ================= contact ================= */
  function renderContact() {
    const c = P.contact, phone = c.phone.join(" ");
    const card = (lbl, body) => `<div class="ccard"><p class="lbl">${esc(lbl)}</p>${body}</div>`;
    let html = card(u("ct.mail"), `<p class="big sel">${esc(c.email)}</p><div class="row"><a class="btn small" href="mailto:${esc(c.email)}">${esc(u("ct.write"))}</a><button type="button" class="btn small ghost" data-copy="${esc(c.email)}">${esc(u("fit.copy"))}</button></div>`);
    html += card(u("ct.phone"), `<p class="big sel" id="phone">+49 163 ••• ••••</p><div class="row"><button type="button" class="btn small ghost" id="showPhone">${esc(u("ct.show"))}</button></div>`);
    html += card(u("ct.vcard"), `<p class="muted">Engin Celenk · ${esc(t(P.location))}</p><div class="row"><button type="button" class="btn small ghost" id="vcard">${esc(u("ct.vcardBtn"))}</button></div>`);
    html += card(u("ct.share"), `<p class="muted">${esc(location.host || "ec.immofuchs.info")}</p><div class="row"><button type="button" class="btn small ghost" data-copy="${esc(location.href)}">${esc(u("ct.shareBtn"))}</button>${c.github ? `<a class="btn small ghost" href="${esc(c.github)}" target="_blank" rel="noopener">GitHub</a>` : ""}${c.linkedin ? `<a class="btn small ghost" href="${esc(c.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>` : ""}</div>`);
    $("#contactcards").innerHTML = html;
    $$("#contactcards [data-copy]").forEach(b => b.addEventListener("click", () => copy(b.dataset.copy, b, u("fit.copied"))));
    $("#showPhone").addEventListener("click", e => {
      $("#phone").textContent = phone;
      const a = document.createElement("a"); a.className = "btn small"; a.href = "tel:" + c.phone.join(""); a.textContent = u("ct.call");
      e.currentTarget.replaceWith(a);
    });
    $("#vcard").addEventListener("click", () => {
      const v = ["BEGIN:VCARD", "VERSION:3.0", "N:Celenk;Engin;;;", "FN:Engin Celenk", "TITLE:Cyber Security Engineer",
        `EMAIL;TYPE=INTERNET:${c.email}`, `TEL;TYPE=CELL:${c.phone.join("")}`, "ADR;TYPE=HOME:;;;Pleidelsheim;;74385;Germany",
        location.origin.startsWith("http") ? `URL:${location.origin}` : "", "END:VCARD"].filter(Boolean).join("\r\n");
      const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([v], { type: "text/vcard" })); a.download = "Engin-Celenk.vcf";
      document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    });
  }

  /* ================= boot ================= */
  function renderAll(animate) {
    applyUI(); renderHero(animate); renderPillars(); renderGantt(); renderTimeline();
    renderStairs(); renderTree(); renderTraining(); renderTwin(); renderSteps(); renderContact();
    if (lastFit) runFit(); else if (!$("#result .msg")) fitEmpty();
  }
  $$(".langswitch button").forEach(b => b.addEventListener("click", () => {
    if (lang === b.dataset.lang) return;
    const swap = s => { const i = SAMPLES[lang].indexOf($("#jd").value); return i; };
    const si = swap(); lang = b.dataset.lang; store.set("lang", lang);
    if (si >= 0) $("#jd").value = SAMPLES[lang][si];
    renderAll(true);
  }));

  document.body.dataset.lens = lens.id;
  renderAll(true);
  countUp();
  if ("IntersectionObserver" in window && !reduced) {
    let climbed = false;
    new IntersectionObserver((es, o) => { if (es.some(e => e.isIntersecting) && !climbed) { climbed = true; climb(); o.disconnect(); } }, { threshold: 0.5 }).observe($("#stairlist"));
  }
})();
