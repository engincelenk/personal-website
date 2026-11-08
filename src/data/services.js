/* ------------------------------------------------------------------
   Freelance service catalogue. Each service is a product with a clear
   outcome, format and typical duration. Bilingual { en, de }.
   No prices, no availability by design.
------------------------------------------------------------------- */

export const areas = [
  { id: "security", icon: "ShieldCheck", title: "Cyber Security" },
  { id: "architecture", icon: "Boxes", title: { en: "Architecture", de: "Architektur" } },
  { id: "management", icon: "Workflow", title: { en: "Management & Logistics", de: "Management & Logistik" } },
  { id: "ai", icon: "Sparkles", title: { en: "AI & Agentic", de: "KI & Agentic" } }
];

const F = {
  workshop: { en: "Workshop", de: "Workshop" },
  sprint: { en: "Sprint", de: "Sprint" },
  project: { en: "Project", de: "Projekt" },
  interim: { en: "Interim", de: "Interim" }
};
export const formats = F;

export const services = [
  /* ---------- Cyber Security ---------- */
  { id: "sec-check", area: "security", icon: "ShieldCheck", format: F.sprint, duration: { en: "typically 1–2 weeks", de: "typisch 1–2 Wochen" },
    name: "Cyber Security Check",
    claim: { en: "Where do you stand? Security maturity along NIST CSF 2.0, from Govern to Recover.", de: "Wo stehen Sie? Security-Reifegrad entlang NIST CSF 2.0, von Govern bis Recover." },
    deliver: [{ en: "Maturity heatmap across the six CSF functions", de: "Reifegrad-Heatmap über die sechs CSF-Funktionen" }, { en: "Top risks with business impact", de: "Top-Risiken mit Geschäftsauswirkung" }, { en: "12-month roadmap with quick wins", de: "12-Monats-Roadmap mit Quick Wins" }],
    for: { en: "Management that wants an honest security status", de: "Geschäftsführung, die einen ehrlichen Security-Status will" },
    frameworks: ["NIST CSF 2.0", "CIS Controls", "OWASP SAMM", "BSI IT-Grundschutz"] },
  { id: "compliance-ready", area: "security", icon: "ClipboardList", format: F.project, duration: { en: "typically 3–6 weeks", de: "typisch 3–6 Wochen" },
    name: { en: "NIS2 & CRA Readiness", de: "NIS2- & CRA-Readiness" },
    claim: { en: "Are you affected, what is missing, what comes first?", de: "Sind Sie betroffen, was fehlt, was kommt zuerst?" },
    deliver: [{ en: "Applicability check for NIS2 and Cyber Resilience Act", de: "Betroffenheitsprüfung für NIS2 und Cyber Resilience Act" }, { en: "Gap analysis against requirements", de: "Gap-Analyse gegen die Anforderungen" }, { en: "Prioritised action plan incl. SBOM and reporting duties", de: "Priorisierter Maßnahmenplan inkl. SBOM und Meldepflichten" }],
    for: { en: "Manufacturers and operators in the EU", de: "Hersteller und Betreiber in der EU" },
    frameworks: ["NIS2", "Cyber Resilience Act", "ISO/IEC 27001", "SBOM"] },
  { id: "tara-sprint", area: "security", icon: "ShieldAlert", format: F.sprint, duration: { en: "typically 2–3 weeks", de: "typisch 2–3 Wochen" },
    name: "TARA Sprint",
    claim: { en: "Threat analysis and risk assessment for your digital product.", de: "Bedrohungs- und Risikoanalyse für Ihr digitales Produkt." },
    deliver: [{ en: "System model with assets and data flows", de: "Systemmodell mit Assets und Datenflüssen" }, { en: "STRIDE threat scenarios and risk ratings", de: "STRIDE-Bedrohungsszenarien und Risikobewertung" }, { en: "Prioritised measures as a backlog", de: "Priorisierte Maßnahmen als Backlog" }],
    for: { en: "Product teams before release or certification", de: "Produktteams vor Release oder Zertifizierung" },
    frameworks: ["ISO/SAE 21434", "STRIDE", "MITRE ATT&CK", "NIST SP 800-30"] },
  { id: "sbd-check", area: "security", icon: "FileSearch", format: F.sprint, duration: { en: "typically 1 week", de: "typisch 1 Woche" },
    name: "Security-by-Design Check",
    claim: { en: "Security review of a planned solution, before it is built.", de: "Security-Review einer geplanten Lösung, bevor sie gebaut wird." },
    deliver: [{ en: "Findings ranked by risk", de: "Befunde nach Risiko priorisiert" }, { en: "Concrete design changes", de: "Konkrete Änderungen am Design" }, { en: "Decision memo for management", de: "Entscheidungsvorlage fürs Management" }],
    for: { en: "Projects in the concept or design phase", de: "Projekte in Konzept- oder Designphase" },
    frameworks: ["OWASP Top 10", "Zero Trust", "STRIDE"] },
  { id: "sec-requirements", area: "security", icon: "ClipboardList", format: F.workshop, duration: { en: "typically 3–5 days", de: "typisch 3–5 Tage" },
    name: { en: "Security Requirements Kit", de: "Security-Anforderungspaket" },
    claim: { en: "Security requirements for tenders, specifications and vendors.", de: "Sicherheitsanforderungen für Ausschreibung, Lastenheft und Dienstleister." },
    deliver: [{ en: "Requirements catalogue tailored to your solution", de: "Anforderungskatalog passend zu Ihrer Lösung" }, { en: "Evaluation criteria for vendor offers", de: "Bewertungskriterien für Angebote" }, { en: "Acceptance checklist", de: "Abnahme-Checkliste" }],
    for: { en: "Procurement, IT and product owners", de: "Einkauf, IT und Product Owner" },
    frameworks: ["OWASP ASVS", "IEC 62443", "ISO/IEC 27002"] },
  { id: "sec-governance", area: "security", icon: "Scale", format: F.project, duration: { en: "typically 4–8 weeks", de: "typisch 4–8 Wochen" },
    name: { en: "Security Governance Setup", de: "Security-Governance-Aufbau" },
    claim: { en: "Clear responsibilities for security across teams and products.", de: "Klare Verantwortung für Security über Teams und Produkte hinweg." },
    deliver: [{ en: "Security profiles per solution type", de: "Security-Profile je Lösungstyp" }, { en: "Role and task model", de: "Rollen- und Aufgabenmodell" }, { en: "Process checkpoints that teams can live with", de: "Prozess-Checkpoints, mit denen Teams leben können" }],
    for: { en: "Organisations with many teams and suppliers", de: "Organisationen mit vielen Teams und Lieferanten" },
    frameworks: ["NIST CSF 2.0", "ISO/IEC 27001"] },

  /* ---------- Architecture ---------- */
  { id: "arch-review", area: "architecture", icon: "Layers", format: F.sprint, duration: { en: "typically 1–2 weeks", de: "typisch 1–2 Wochen" },
    name: { en: "Architecture Review", de: "Architektur-Review" },
    claim: { en: "An independent view on your solution: strengths, risks, next steps.", de: "Ein unabhängiger Blick auf Ihre Lösung: Stärken, Risiken, nächste Schritte." },
    deliver: [{ en: "Review report with risk map", de: "Review-Bericht mit Risikolandkarte" }, { en: "Architecture decision records", de: "Architekturentscheidungen dokumentiert (ADRs)" }, { en: "Prioritised improvement roadmap", de: "Priorisierte Verbesserungs-Roadmap" }],
    for: { en: "Before go-live, scaling or a major change", de: "Vor Go-live, Skalierung oder großem Umbau" } },
  { id: "target-arch", area: "architecture", icon: "Map", format: F.project, duration: { en: "typically 3–6 weeks", de: "typisch 3–6 Wochen" },
    name: { en: "Target Architecture Blueprint", de: "Zielarchitektur-Blueprint" },
    claim: { en: "From requirements to a target picture that business and IT share.", de: "Von Anforderungen zu einem Zielbild, das Fachbereich und IT teilen." },
    deliver: [{ en: "Target architecture (C4 views)", de: "Zielarchitektur (C4-Sichten)" }, { en: "Transition roadmap", de: "Migrations-Roadmap" }, { en: "Security and operations built in", de: "Security und Betrieb von Anfang an" }],
    for: { en: "Digital platforms, e-commerce, customer experience", de: "Digitale Plattformen, E-Commerce, Customer Experience" } },
  { id: "api-strategy", area: "architecture", icon: "Plug", format: F.workshop, duration: { en: "typically 1–2 weeks", de: "typisch 1–2 Wochen" },
    name: { en: "Integration & API Strategy", de: "Integrations- & API-Strategie" },
    claim: { en: "Order in your interface landscape.", de: "Ordnung in Ihrer Schnittstellenlandschaft." },
    deliver: [{ en: "Interface map and pain points", de: "Schnittstellenlandkarte und Schwachstellen" }, { en: "API principles and patterns", de: "API-Prinzipien und Muster" }, { en: "Integration roadmap", de: "Integrations-Roadmap" }],
    for: { en: "Grown system landscapes, SaaS and partner integrations", de: "Gewachsene Systemlandschaften, SaaS- und Partner-Anbindungen" } },
  { id: "saas-selection", area: "architecture", icon: "Scale", format: F.project, duration: { en: "typically 2–4 weeks", de: "typisch 2–4 Wochen" },
    name: { en: "SaaS & Vendor Selection", de: "SaaS- & Anbieterauswahl" },
    claim: { en: "The right solution, chosen on criteria, not on demos.", de: "Die richtige Lösung, nach Kriterien gewählt, nicht nach Demos." },
    deliver: [{ en: "Requirements and scoring matrix", de: "Anforderungen und Bewertungsmatrix" }, { en: "Security and integration check per vendor", de: "Security- und Integrationscheck je Anbieter" }, { en: "Recommendation for decision makers", de: "Empfehlung für Entscheider" }],
    for: { en: "Before signing a platform contract", de: "Vor dem Plattform-Vertrag" } },

  /* ---------- Management & Logistics ---------- */
  { id: "interim-sm", area: "management", icon: "UserCog", format: F.interim, duration: { en: "from 3 months", de: "ab 3 Monaten" },
    name: "Interim Solution Manager",
    claim: { en: "End-to-end responsibility for your application, for a defined time.", de: "End-to-End-Verantwortung für Ihre Anwendung, auf Zeit." },
    deliver: [{ en: "Stable operations and clear priorities", de: "Stabiler Betrieb und klare Prioritäten" }, { en: "Steering of vendors and partners", de: "Steuerung von Dienstleistern und Partnern" }, { en: "Clean handover to your team", de: "Saubere Übergabe an Ihr Team" }],
    for: { en: "Vacancies, transitions, critical phases", de: "Vakanzen, Übergänge, kritische Phasen" } },
  { id: "logistics-check", area: "management", icon: "Truck", format: F.sprint, duration: { en: "typically 2 weeks", de: "typisch 2 Wochen" },
    name: { en: "Logistics IT Health Check", de: "Logistik-IT-Check" },
    claim: { en: "Transport management and logistics IT under the magnifying glass.", de: "Transportmanagement und Logistik-IT unter der Lupe." },
    deliver: [{ en: "Landscape of TMS, partners and integrations", de: "Landkarte aus TMS, Partnern und Schnittstellen" }, { en: "Weak points and quick wins", de: "Schwachstellen und Quick Wins" }, { en: "Roadmap for the next generation", de: "Roadmap für die nächste Generation" }],
    for: { en: "Shippers and logistics teams with growing complexity", de: "Verlader und Logistikteams mit wachsender Komplexität" } },
  { id: "project-rescue", area: "management", icon: "LifeBuoy", format: F.sprint, duration: { en: "analysis in 1–2 weeks", de: "Analyse in 1–2 Wochen" },
    name: { en: "Project Rescue", de: "Projekt-Rettung" },
    claim: { en: "Getting a struggling IT project back on track.", de: "Ein IT-Projekt in Schieflage wieder auf Kurs bringen." },
    deliver: [{ en: "Honest status and root causes", de: "Ehrlicher Status und Ursachen" }, { en: "Re-plan with realistic scope", de: "Neuplanung mit realistischem Umfang" }, { en: "Optional: leading the turnaround", de: "Optional: Führung der Umsetzung" }],
    for: { en: "Projects over time, budget or scope", de: "Projekte über Zeit, Budget oder Umfang" } },
  { id: "agile-setup", area: "management", icon: "Route", format: F.workshop, duration: { en: "typically 2–4 weeks", de: "typisch 2–4 Wochen" },
    name: { en: "Agile Delivery Setup", de: "Agiles Delivery-Setup" },
    claim: { en: "Scrum or hybrid, set up the way your teams actually work.", de: "Scrum oder hybrid, so aufgesetzt, wie Ihre Teams wirklich arbeiten." },
    deliver: [{ en: "Roles, ceremonies and backlog structure", de: "Rollen, Termine und Backlog-Struktur" }, { en: "JIRA setup and reporting", de: "JIRA-Setup und Reporting" }, { en: "Coaching for product owners", de: "Coaching für Product Owner" }],
    for: { en: "Teams moving from classic to agile delivery", de: "Teams auf dem Weg von klassisch zu agil" } },

  /* ---------- AI & Agentic ---------- */
  { id: "ai-kickstart", area: "ai", icon: "Lightbulb", format: F.workshop, duration: { en: "1 day", de: "1 Tag" },
    name: { en: "AI Kickstart", de: "KI-Kickstart" },
    claim: { en: "From AI curiosity to three concrete use cases.", de: "Von KI-Neugier zu drei konkreten Use Cases." },
    deliver: [{ en: "Prioritised use cases with value and effort", de: "Priorisierte Use Cases mit Nutzen und Aufwand" }, { en: "Risks and data protection at a glance", de: "Risiken und Datenschutz auf einen Blick" }, { en: "Plan for the first pilot", de: "Plan für den ersten Pilot" }],
    for: { en: "Management and teams starting with AI", de: "Geschäftsführung und Teams, die mit KI starten" } },
  { id: "agentic-blueprint", area: "ai", icon: "Bot", format: F.project, duration: { en: "typically 2–4 weeks", de: "typisch 2–4 Wochen" },
    name: { en: "Agentic Architecture Blueprint", de: "Agentic-Architektur-Blueprint" },
    claim: { en: "An architecture for AI agents that is useful and controllable.", de: "Eine Architektur für KI-Agenten, die nützt und beherrschbar bleibt." },
    deliver: [{ en: "Agent, tool and data access design (incl. MCP)", de: "Design für Agenten, Tools und Datenzugriffe (inkl. MCP)" }, { en: "Guardrails, permissions, human in the loop", de: "Leitplanken, Berechtigungen, Human in the Loop" }, { en: "Pilot scope and success criteria", de: "Pilot-Umfang und Erfolgskriterien" }],
    for: { en: "Companies planning AI agents in real processes", de: "Unternehmen, die KI-Agenten in echte Prozesse bringen" },
    frameworks: ["MCP", "OWASP Top 10 for LLM"] },
  { id: "ai-security", area: "ai", icon: "ShieldAlert", format: F.sprint, duration: { en: "typically 1–2 weeks", de: "typisch 1–2 Wochen" },
    name: { en: "AI Security Review", de: "KI-Security-Review" },
    claim: { en: "TARA for LLM apps and agents: prompt injection, data leakage, misuse.", de: "TARA für LLM-Anwendungen und Agenten: Prompt Injection, Datenabfluss, Missbrauch." },
    deliver: [{ en: "Threat model for your AI solution", de: "Bedrohungsmodell für Ihre KI-Lösung" }, { en: "Risk ratings and measures", de: "Risikobewertung und Maßnahmen" }, { en: "Checklist for safe operation", de: "Checkliste für den sicheren Betrieb" }],
    for: { en: "Teams with AI in production or close to it", de: "Teams mit KI im oder kurz vor dem Betrieb" },
    frameworks: ["OWASP Top 10 for LLM", "NIST AI RMF", "EU AI Act"] },
  { id: "prototype", area: "ai", icon: "FlaskConical", format: F.sprint, duration: { en: "typically 1–2 weeks", de: "typisch 1–2 Wochen" },
    name: { en: "Prototype Sprint", de: "Prototyp-Sprint" },
    claim: { en: "A clickable, working prototype built with AI, like ImmoFuchs or this site.", de: "Ein klickbarer, funktionierender Prototyp mit KI gebaut, wie ImmoFuchs oder diese Seite." },
    deliver: [{ en: "Working web prototype", de: "Funktionierender Web-Prototyp" }, { en: "User feedback from real tests", de: "Feedback aus echten Nutzertests" }, { en: "Decision basis: build, buy or stop", de: "Entscheidungsgrundlage: bauen, kaufen oder stoppen" }],
    for: { en: "Ideas that need proof before budget", de: "Ideen, die vor dem Budget einen Beweis brauchen" } }
];

export const process = [
  { id: "talk", icon: "MessageSquare", year: "01", short: { en: "Intro call", de: "Erstgespräch" }, title: { en: "Intro call", de: "Erstgespräch" }, text: { en: "30 minutes, free of charge: your goal, your situation, the right service.", de: "30 Minuten, kostenlos: Ihr Ziel, Ihre Ausgangslage, die passende Leistung." } },
  { id: "offer", icon: "FileText", year: "02", short: { en: "Offer", de: "Angebot" }, title: { en: "Fixed-scope offer", de: "Angebot mit festem Umfang" }, text: { en: "Clear deliverables, timeline and price. No open-ended hours.", de: "Klare Ergebnisse, Zeitplan und Preis. Keine offenen Stundenkontingente." } },
  { id: "deliver", icon: "Rocket", year: "03", short: { en: "Delivery", de: "Umsetzung" }, title: { en: "Delivery", de: "Umsetzung" }, text: { en: "Remote or on site in the Stuttgart region, with short feedback loops.", de: "Remote oder vor Ort in der Region Stuttgart, mit kurzen Feedbackschleifen." } },
  { id: "handover", icon: "Handshake", year: "04", short: { en: "Handover", de: "Übergabe" }, title: { en: "Handover", de: "Übergabe" }, text: { en: "Results that your team can keep using without me.", de: "Ergebnisse, mit denen Ihr Team ohne mich weiterarbeiten kann." } }
];

export const industries = [
  { en: "Automotive", de: "Automotive" }, { en: "Mechanical engineering", de: "Maschinenbau" }, { en: "Logistics", de: "Logistik" },
  { en: "E-commerce & CX", de: "E-Commerce & CX" }, { en: "Industrial IoT", de: "Industrial IoT" }, { en: "Real estate tech", de: "Immobilien-Tech" }
];

export const timing = [
  { id: "asap", label: { en: "As soon as possible", de: "So bald wie möglich" } },
  { id: "q", label: { en: "In 1–3 months", de: "In 1–3 Monaten" } },
  { id: "later", label: { en: "Later / exploring", de: "Später / erst informieren" } }
];

export const fl = {
  en: {
    title: "Engin Celenk · Freelance", desc: "Freelance services in cyber security, architecture, solution management, logistics IT and agentic AI.",
    back: "Portfolio", kicker: "Freelance", h1a: "Expertise as a service.", h1b: "Clear scope, clear result.",
    lead: "Cyber security, architecture, logistics IT and agentic AI from someone who has done it in corporate IT for over a decade. Every service is a product with a defined outcome.",
    cta: "Plan a project", catalogue: "Services", catalogueLead: "Pick an area. Tap a service for details.", all: "All",
    youGet: "You get", forWhom: "For", request: "Request this", selected: "Selected",
    howKicker: "How I work", howTitle: "Four steps, no surprises.", howLead: "Tap a step.",
    expKicker: "Experience from", expTitle: "Industries and companies",
    cfgKicker: "Request", cfgTitle: "Put your request together.", cfgLead: "Choose services, format and timing. You get a ready-made email.",
    cfgServices: "Services", cfgFormat: "Format", cfgTiming: "Timing", cfgCompany: "Company (optional)", cfgNote: "Short description (optional)",
    cfgNotePh: "What do you want to achieve?", openMail: "Open email", copyText: "Copy text", copied: "Copied", preview: "Your email",
    none: "No service selected yet.", subject: n => `Project request: ${n}`,
    body: (s, f, t, c, n) => `Hello Engin,\n\nwe are interested in:\n${s}\n\nFormat: ${f}\nTiming: ${t}${c ? `\nCompany: ${c}` : ""}${n ? `\n\nAbout the project:\n${n}` : ""}\n\nPlease get in touch for an intro call.\n\nBest regards`,
    note: "Prices on request after the intro call. No newsletter, no tracking."
  },
  de: {
    title: "Engin Celenk · Freelance", desc: "Freelance-Leistungen in Cyber Security, Architektur, Solution Management, Logistik-IT und agentischer KI.",
    back: "Portfolio", kicker: "Freelance", h1a: "Expertise als Leistung.", h1b: "Klarer Umfang, klares Ergebnis.",
    lead: "Cyber Security, Architektur, Logistik-IT und agentische KI von jemandem, der das seit über zehn Jahren in der Konzern-IT macht. Jede Leistung ist ein Produkt mit definiertem Ergebnis.",
    cta: "Projekt planen", catalogue: "Leistungen", catalogueLead: "Bereich wählen. Leistung antippen für Details.", all: "Alle",
    youGet: "Sie erhalten", forWhom: "Für", request: "Anfragen", selected: "Ausgewählt",
    howKicker: "Arbeitsweise", howTitle: "Vier Schritte, keine Überraschungen.", howLead: "Schritt antippen.",
    expKicker: "Erfahrung aus", expTitle: "Branchen und Unternehmen",
    cfgKicker: "Anfrage", cfgTitle: "Stellen Sie Ihre Anfrage zusammen.", cfgLead: "Leistungen, Format und Zeitraum wählen. Sie erhalten eine fertige E-Mail.",
    cfgServices: "Leistungen", cfgFormat: "Format", cfgTiming: "Zeitraum", cfgCompany: "Unternehmen (optional)", cfgNote: "Kurzbeschreibung (optional)",
    cfgNotePh: "Was möchten Sie erreichen?", openMail: "E-Mail öffnen", copyText: "Text kopieren", copied: "Kopiert", preview: "Ihre E-Mail",
    none: "Noch keine Leistung ausgewählt.", subject: n => `Projektanfrage: ${n}`,
    body: (s, f, t, c, n) => `Hallo Engin,\n\nwir interessieren uns für:\n${s}\n\nFormat: ${f}\nZeitraum: ${t}${c ? `\nUnternehmen: ${c}` : ""}${n ? `\n\nZum Vorhaben:\n${n}` : ""}\n\nBitte melden Sie sich für ein Erstgespräch.\n\nViele Grüße`,
    note: "Preise auf Anfrage nach dem Erstgespräch. Kein Newsletter, kein Tracking."
  }
};
