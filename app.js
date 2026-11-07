(() => {
  const P = window.PROFILE;
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, attrs = {}, html = "") => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    if (html) n.innerHTML = html;
    return n;
  };
  const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const dots = l => "●".repeat(l) + "○".repeat(5 - l);
  const group = id => P.groups.find(g => g.id === id);
  let lens = P.lenses[0];
  let activeSkill = null;

  /* ---------- hero ---------- */
  $("#langs").textContent = "Working languages: " + P.languages.join(", ") + ".";
  $("#year").textContent = "© " + new Date().getFullYear();
  $("#brand").textContent = P.name;

  const lensBox = $("#lenses");
  P.lenses.forEach(L => {
    const b = el("button", { class: "lens", role: "radio", "aria-checked": "false", type: "button", "data-id": L.id });
    b.textContent = L.label;
    b.addEventListener("click", () => setLens(L.id));
    b.addEventListener("keydown", e => {
      const i = P.lenses.indexOf(lens);
      if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); setLens(P.lenses[(i + 1) % P.lenses.length].id, true); }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); setLens(P.lenses[(i + P.lenses.length - 1) % P.lenses.length].id, true); }
    });
    lensBox.appendChild(b);
  });

  function setLens(id, focusIt) {
    lens = P.lenses.find(l => l.id === id);
    document.body.dataset.lens = id;
    lensBox.querySelectorAll(".lens").forEach(b => {
      const on = b.dataset.id === id;
      b.setAttribute("aria-checked", on);
      b.tabIndex = on ? 0 : -1;
      if (on && focusIt) b.focus();
    });
    const h = $("#headline"), s = $("#sub");
    h.classList.add("swap"); s.classList.add("swap");
    setTimeout(() => {
      h.textContent = lens.head; s.textContent = lens.sub;
      h.classList.remove("swap"); s.classList.remove("swap");
    }, matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 200);
    renderSkills(); renderTimeline(); renderLists();
  }

  /* ---------- skills ---------- */
  function orderedGroups() {
    const f = lens.focus;
    return [...P.groups].sort((a, b) => {
      const ia = f.indexOf(a.id), ib = f.indexOf(b.id);
      return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
    });
  }
  function renderSkills(hits = new Set()) {
    const box = $("#skillgroups");
    box.innerHTML = "";
    orderedGroups().forEach(g => {
      const wrap = el("div", { class: "group" + (lens.focus.includes(g.id) ? "" : " dim") });
      wrap.appendChild(el("h3", {}, esc(g.label)));
      wrap.appendChild(el("p", {}, esc(g.blurb)));
      const list = el("div", { class: "skills" });
      P.skills.filter(s => s.g === g.id).sort((a, b) => b.l - a.l).forEach(s => {
        const b = el("button", { class: "skill" + (hits.has(s) ? " hit" : ""), type: "button", "aria-pressed": String(activeSkill === s) });
        b.innerHTML = `${esc(s.n)}<span class="dots" aria-label="Level ${s.l} of 5">${dots(s.l)}</span>`;
        b.addEventListener("click", () => {
          activeSkill = s;
          $("#evidence").innerHTML = `<strong>${esc(s.n)}</strong> (${esc(group(s.g).label)}, level ${s.l} of 5)<br>${esc(s.ev)}`;
          list.closest("#skillgroups").querySelectorAll(".skill").forEach(x => x.setAttribute("aria-pressed", "false"));
          b.setAttribute("aria-pressed", "true");
        });
        list.appendChild(b);
      });
      wrap.appendChild(list);
      box.appendChild(wrap);
    });
  }

  /* ---------- timeline, projects, certs ---------- */
  function renderTimeline() {
    const ol = $("#timeline"); ol.innerHTML = "";
    P.experience.forEach(x => {
      const focus = x.tags.some(t => lens.focus.includes(t));
      const li = el("li", { class: focus ? "focus" : "dim" });
      li.innerHTML = `<span class="when">${esc(x.when)}</span><h3>${esc(x.title)}, ${esc(x.org)}</h3><ul>${x.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>`;
      ol.appendChild(li);
    });
  }
  const rank = tags => Math.min(...tags.map(t => { const i = lens.focus.indexOf(t); return i < 0 ? 99 : i; }));
  function renderLists() {
    const pl = $("#projectlist"); pl.innerHTML = "";
    [...P.projects].sort((a, b) => rank(a.tags) - rank(b.tags)).forEach(p => {
      const d = el("div", { class: "project" });
      const name = p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.name)}</a>` : esc(p.name);
      d.innerHTML = `<h3>${name}</h3><span class="status">${esc(p.status)}</span><p>${esc(p.text)}</p>`;
      pl.appendChild(d);
    });
    const cl = $("#certlist"); cl.innerHTML = "";
    [...P.certs].sort((a, b) => rank(a.tags) - rank(b.tags)).forEach(c => {
      const ph = c.name.startsWith("[");
      cl.appendChild(el("li", {}, `<span class="${ph ? "ph" : ""}">${esc(c.name)}</span><span class="${ph ? "ph" : ""}">${esc(c.issuer)}, ${esc(c.year)}</span>`));
    });
  }

  /* ---------- fit check ---------- */
  const SAMPLE = `Senior IT Project Manager Cloud Platform (m/f/d)
We are looking for someone to lead our cloud platform program. You manage stakeholders across business and IT, own the budget and risk log, and work in an agile setup with Scrum teams.
You work with solution architects on API-based integration, support our IAM and zero trust initiative, and make sure the platform meets ISO 27001 and NIS2 requirements. Experience with Azure, CI/CD pipelines and ITIL is expected. Knowledge of Python or Terraform is a plus.`;

  function keyRegex(k) {
    return new RegExp("(^|[^a-z0-9])(" + reEsc(k) + ")(?![a-z0-9])", "i");
  }
  function analyze(text) {
    const hits = new Map(); // skill -> terms
    P.skills.forEach(s => {
      const found = s.keys.filter(k => keyRegex(k).test(text));
      if (found.length) hits.set(s, found);
    });
    const gaps = P.gaps.filter(k => keyRegex(k).test(text));
    return { hits, gaps };
  }
  function runFit() {
    const text = $("#jd").value.trim();
    const out = $("#result");
    out.hidden = false;
    if (text.length < 40) {
      out.innerHTML = "<p>Paste a longer job description (at least a few sentences) to get a useful result.</p>";
      return;
    }
    const { hits, gaps } = analyze(text);
    if (!hits.size) {
      out.innerHTML = "<p>No overlap found with the skills on this page. That can mean the role is outside my focus, or the post uses very different words. Ask me directly in the contact section.</p>";
      renderSkills(); return;
    }
    const matched = [...hits.keys()];
    const strength = matched.reduce((a, s) => a + s.l / 5, 0) / matched.length;
    const coverage = Math.min(1, matched.length / 6);
    const gapPenalty = Math.min(0.25, gaps.length * 0.05);
    const fit = Math.max(5, Math.round(100 * strength * Math.sqrt(coverage) * (1 - gapPenalty)));

    const bars = P.groups.map(g => {
      const m = matched.filter(s => s.g === g.id);
      if (!m.length) return null;
      const v = Math.round(100 * m.reduce((a, s) => a + s.l / 5, 0) / m.length);
      return `<div class="bar"><span>${esc(g.label)}</span><i><b style="width:0" data-w="${v}"></b></i><em>${v}</em></div>`;
    }).filter(Boolean).join("");

    const terms = [...new Set([...matched.flatMap(s => hits.get(s)), ...gaps])].sort((a, b) => b.length - a.length);
    const rx = new RegExp("(^|[^a-z0-9])(" + terms.map(reEsc).join("|") + ")(?![a-z0-9])", "gi");
    const gapSet = new Set(gaps.map(g => g.toLowerCase()));
    const marked = esc(text).replace(rx, (m, pre, t) => `${pre}<mark class="${gapSet.has(t.toLowerCase()) ? "gap" : ""}">${t}</mark>`);

    const strong = matched.filter(s => s.l >= 4).sort((a, b) => b.l - a.l);
    const lighter = matched.filter(s => s.l < 4);
    out.innerHTML = `
      <div class="score"><strong>${fit}</strong><span>out of 100: how strongly my skills cover what this post asks for</span></div>
      <div class="bars">${bars}</div>
      <div class="hl" aria-label="Job post with matches highlighted">${marked}</div>
      <div class="cols">
        <div><h3>Where I am strong</h3><ul>${strong.map(s => `<li>${esc(s.n)}</li>`).join("") || "<li>No level 4 or 5 matches</li>"}</ul></div>
        <div><h3>Where I am solid</h3><ul>${lighter.map(s => `<li>${esc(s.n)}</li>`).join("") || "<li>None</li>"}</ul></div>
        <div><h3>Not my strength</h3><ul>${gaps.map(g => `<li>${esc(g)}</li>`).join("") || "<li>Nothing flagged in this post</li>"}</ul></div>
      </div>
      <p class="note">Method: the page looks for skill terms in the post, averages my own ratings for the matches, and lowers the score for each tool I do not claim. It is a quick signal for a conversation, not a verdict.</p>`;
    requestAnimationFrame(() => out.querySelectorAll("[data-w]").forEach(b => b.style.width = b.dataset.w + "%"));
    renderSkills(new Set(matched));
  }
  $("#run").addEventListener("click", runFit);
  $("#sample").addEventListener("click", () => { $("#jd").value = SAMPLE; runFit(); });

  /* ---------- ask ---------- */
  const sug = $("#suggest");
  P.facts.slice(0, 5).forEach(f => {
    const c = el("button", { class: "chip", type: "button" }); c.textContent = f.q;
    c.addEventListener("click", () => { $("#q").value = f.q; ask(f.q); });
    sug.appendChild(c);
  });
  const words = s => s.toLowerCase().match(/[a-zäöüß0-9+#.]+/g) || [];
  async function ask(q) {
    const out = $("#answer");
    if (!q.trim()) { out.textContent = "Type a question or pick one above."; return; }
    if (P.askEndpoint) {
      try {
        out.textContent = "Thinking…";
        const r = await fetch(P.askEndpoint, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ question: q }) });
        if (!r.ok) throw new Error(r.status);
        const j = await r.json();
        out.innerHTML = esc(j.answer || "") + "<small>Generated by an AI model from the facts on this page.</small>";
        return;
      } catch (e) { /* fall through to offline answer */ }
    }
    const w = new Set(words(q));
    let best = null, bestScore = 0;
    P.facts.forEach(f => {
      let sc = f.k.filter(k => w.has(k)).length * 2;
      words(f.q).forEach(x => { if (w.has(x) && x.length > 3) sc += 1; });
      if (sc > bestScore) { bestScore = sc; best = f; }
    });
    out.innerHTML = best
      ? esc(best.a) + "<small>Answered from the facts on this page.</small>"
      : "I do not have a stored answer for that. Try one of the questions above, or use the contact links below.";
  }
  $("#askform").addEventListener("submit", e => { e.preventDefault(); ask($("#q").value); });

  /* ---------- contact ---------- */
  const cb = $("#contactlinks");
  const c = P.contact;
  if (c.email) cb.appendChild(el("a", { class: "btn", href: "mailto:" + c.email }, "Email me"));
  if (c.linkedin) cb.appendChild(el("a", { class: "btn ghost", href: c.linkedin, target: "_blank", rel: "noopener" }, "LinkedIn"));
  if (c.github) cb.appendChild(el("a", { class: "btn ghost", href: c.github, target: "_blank", rel: "noopener" }, "GitHub"));
  const cv = el("a", { class: "btn ghost", href: c.cv, download: "" }, "Download CV (PDF)");
  cb.appendChild(cv);
  fetch(c.cv, { method: "HEAD" }).then(r => { if (!r.ok) throw 0; }).catch(() => {
    cv.setAttribute("aria-disabled", "true"); cv.removeAttribute("href"); cv.textContent = "CV download coming soon";
  });

  setLens("all");
  $("#headline").textContent = lens.head; $("#sub").textContent = lens.sub;
})();
