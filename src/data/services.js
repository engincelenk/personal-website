/* ------------------------------------------------------------------
   Freelance service portfolio, kept general on purpose.
   Three equal pillars + AI as the vertical across all three.
   Bilingual { en, de }. No prices, no availability.
------------------------------------------------------------------- */

export const pillars = [
  { id: "architecture", icon: "Boxes", title: { en: "Architecture", de: "Architektur" },
    claim: { en: "Solutions that integrate, scale and can be operated.", de: "Lösungen, die sich integrieren, skalieren und betreiben lassen." },
    offers: [
      { title: { en: "Architecture strategy & target picture", de: "Architekturstrategie & Zielbild" }, text: { en: "From business goals to a target architecture and roadmap that business and IT share.", de: "Von Geschäftszielen zu Zielarchitektur und Roadmap, die Fachbereich und IT teilen." } },
      { title: { en: "Architecture reviews & due diligence", de: "Architektur-Reviews & Due Diligence" }, text: { en: "An independent assessment of solutions, risks and technical debt.", de: "Unabhängige Bewertung von Lösungen, Risiken und technischen Schulden." } },
      { title: { en: "Platform, cloud & integration", de: "Plattform, Cloud & Integration" }, text: { en: "Platform and SaaS architectures, APIs and integration landscapes.", de: "Plattform- und SaaS-Architekturen, APIs und Integrationslandschaften." } },
      { title: { en: "Architecture governance", de: "Architektur-Governance" }, text: { en: "Principles, decision records and design boards that teams accept.", de: "Prinzipien, Architekturentscheidungen und Design Boards, die Teams mittragen." } },
      { title: { en: "Technology & vendor selection", de: "Technologie- & Anbieterauswahl" }, text: { en: "Decisions on criteria, not on demos.", de: "Entscheidungen nach Kriterien, nicht nach Demos." } }
    ],
    ai: { title: { en: "AI & agentic architecture", de: "KI- & Agentic-Architektur" }, text: { en: "Architectures for LLM apps and AI agents: tools, data access, MCP, guardrails.", de: "Architekturen für LLM-Anwendungen und KI-Agenten: Tools, Datenzugriffe, MCP, Leitplanken." } } },
  { id: "security", icon: "ShieldCheck", title: "Cyber Security",
    claim: { en: "Security built into strategy, design and operations.", de: "Security in Strategie, Design und Betrieb verankert." },
    offers: [
      { title: { en: "Security strategy & roadmap", de: "Security-Strategie & Roadmap" }, text: { en: "Business risk translated into priorities and a funded roadmap.", de: "Geschäftsrisiken in Prioritäten und eine tragfähige Roadmap übersetzt." } },
      { title: { en: "Security architecture & Zero Trust", de: "Security-Architektur & Zero Trust" }, text: { en: "Security by design for identity, cloud, platforms and products.", de: "Security by Design für Identität, Cloud, Plattformen und Produkte." } },
      { title: { en: "Threat & risk assessment", de: "Bedrohungs- & Risikoanalyse" }, text: { en: "TARA and threat modelling, risks rated and measures traceable.", de: "TARA und Threat Modeling, Risiken bewertet, Maßnahmen nachvollziehbar." } },
      { title: { en: "Governance, risk & compliance", de: "Governance, Risk & Compliance" }, text: { en: "NIST CSF, ISO 27001, NIS2 and CRA turned into concrete controls.", de: "NIST CSF, ISO 27001, NIS2 und CRA in konkrete Maßnahmen übersetzt." } },
      { title: { en: "Security assessments & secure development", de: "Security-Assessments & sichere Entwicklung" }, text: { en: "Maturity checks and security in the development lifecycle.", de: "Reifegrad-Checks und Security im Entwicklungsprozess." } }
    ],
    ai: { title: { en: "AI security", de: "KI-Security" }, text: { en: "Risks of LLMs and agents: prompt injection, data leakage, OWASP LLM Top 10, EU AI Act.", de: "Risiken von LLMs und Agenten: Prompt Injection, Datenabfluss, OWASP LLM Top 10, EU AI Act." } } },
  { id: "management", icon: "Workflow", title: { en: "Project, Program & Solution Management", de: "Projekt-, Programm- & Solution Management" },
    claim: { en: "Complex IT delivered, end to end.", de: "Komplexe IT ins Ziel gebracht, von Ende zu Ende." },
    offers: [
      { title: { en: "Program & project leadership", de: "Programm- & Projektleitung" }, text: { en: "Leading complex IT programs across teams, partners and budgets.", de: "Führung komplexer IT-Programme über Teams, Partner und Budgets." } },
      { title: { en: "Interim solution management", de: "Interim Solution Management" }, text: { en: "End-to-end ownership of an application or platform, for a defined time.", de: "End-to-End-Verantwortung für eine Anwendung oder Plattform, auf Zeit." } },
      { title: { en: "Project recovery", de: "Projekt-Recovery" }, text: { en: "Honest status, root causes and a realistic re-plan.", de: "Ehrlicher Status, Ursachen und eine realistische Neuplanung." } },
      { title: { en: "Agile & hybrid delivery, PMO", de: "Agile & hybride Delivery, PMO" }, text: { en: "Delivery models, governance and reporting that fit your organisation.", de: "Vorgehensmodelle, Steuerung und Reporting passend zur Organisation." } },
      { title: { en: "Logistics IT", de: "Logistik-IT" }, text: { en: "Transport management and logistics solutions with partners and carriers.", de: "Transportmanagement und Logistiklösungen mit Partnern und Dienstleistern." } }
    ],
    ai: { title: { en: "AI adoption programs", de: "KI-Einführungsprogramme" }, text: { en: "Use case portfolio, pilots and rollout of AI, plus AI-assisted delivery.", de: "Use-Case-Portfolio, Pilote und Rollout von KI, dazu KI-gestützte Projektarbeit." } } }
];

export const aiVertical = {
  icon: "Sparkles",
  title: { en: "AI & Agentic", de: "KI & Agentic" },
  claim: { en: "The vertical across all three: AI as part of architecture, security and delivery, not as a separate topic.", de: "Die Vertikale über alle drei: KI als Teil von Architektur, Security und Umsetzung, nicht als Insel." }
};

export const formats = {
  advisory: { en: "Advisory", de: "Beratung" },
  workshop: { en: "Workshop", de: "Workshop" },
  project: { en: "Project", de: "Projekt" },
  interim: { en: "Interim", de: "Interim" }
};

export const process = [
  { id: "talk", icon: "MessageSquare", year: "01", short: { en: "Intro call", de: "Erstgespräch" }, title: { en: "Intro call", de: "Erstgespräch" }, text: { en: "Your goal, your situation, the right approach.", de: "Ihr Ziel, Ihre Ausgangslage, der passende Ansatz." } },
  { id: "offer", icon: "FileText", year: "02", short: { en: "Offer", de: "Angebot" }, title: { en: "Offer", de: "Angebot" }, text: { en: "Clear scope and clear results.", de: "Klarer Umfang und klare Ergebnisse." } },
  { id: "deliver", icon: "Rocket", year: "03", short: { en: "Delivery", de: "Umsetzung" }, title: { en: "Delivery", de: "Umsetzung" }, text: { en: "Remote or on site in the Stuttgart region.", de: "Remote oder vor Ort in der Region Stuttgart." } },
  { id: "handover", icon: "Handshake", year: "04", short: { en: "Handover", de: "Übergabe" }, title: { en: "Handover", de: "Übergabe" }, text: { en: "Results your team can keep using.", de: "Ergebnisse, mit denen Ihr Team weiterarbeiten kann." } }
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
    title: "Engin Celenk · Freelance", desc: "Freelance: architecture, cyber security, project, program & solution management, with AI across all three.",
    back: "Portfolio", kicker: "Freelance", h1a: "Architecture. Security. Delivery.", h1b: "With AI across all three.",
    lead: "Three service areas of equal weight, connected by AI. Experience from more than a decade of corporate IT at Bosch, Daimler and TRUMPF.",
    cta: "Start a request",
    mapKicker: "Service portfolio", mapTitle: "Three pillars, one vertical.", mapLead: "Tap a pillar or the AI band.",
    aiAcross: "across all areas", inArea: "in",
    howKicker: "How I work", howTitle: "Four steps, no surprises.", howLead: "Tap a step.",
    expKicker: "Experience from", expTitle: "Industries and companies",
    cfgKicker: "Request", cfgTitle: "Put your request together.", cfgLead: "Choose areas, format and timing. Your request is prepared, you only add your details.",
    cfgAreas: "Areas", cfgFormat: "Format", cfgTiming: "Timing", cfgCompany: "Company (optional)", cfgNote: "Short description (optional)",
    cfgNotePh: "What do you want to achieve?", openMail: "Open email", copyText: "Copy text", copied: "Copied", preview: "Your request",
    none: "Choose at least one area.", subject: n => `Project request: ${n}`,
    body: (s, f, t, c, n) => `Hello Engin,\n\nwe are interested in:\n${s}\n\nFormat: ${f}\nTiming: ${t}${c ? `\nCompany: ${c}` : ""}${n ? `\n\nAbout the project:\n${n}` : ""}\n\nPlease get in touch for an intro call.\n\nBest regards`,
    note: "Details and prices after the intro call. No newsletter, no tracking."
  },
  de: {
    title: "Engin Celenk · Freelance", desc: "Freelance: Architektur, Cyber Security, Projekt-, Programm- & Solution Management, mit KI quer über alle drei.",
    back: "Portfolio", kicker: "Freelance", h1a: "Architektur. Security. Umsetzung.", h1b: "Mit KI quer über alle drei.",
    lead: "Drei gleichwertige Leistungsbereiche, verbunden durch KI. Erfahrung aus über zehn Jahren Konzern-IT bei Bosch, Daimler und TRUMPF.",
    cta: "Anfrage starten",
    mapKicker: "Leistungsportfolio", mapTitle: "Drei Säulen, eine Vertikale.", mapLead: "Säule oder KI-Band antippen.",
    aiAcross: "quer über alle Bereiche", inArea: "in",
    howKicker: "Arbeitsweise", howTitle: "Vier Schritte, keine Überraschungen.", howLead: "Schritt antippen.",
    expKicker: "Erfahrung aus", expTitle: "Branchen und Unternehmen",
    cfgKicker: "Anfrage", cfgTitle: "Stellen Sie Ihre Anfrage zusammen.", cfgLead: "Bereiche, Format und Zeitraum wählen. Ihre Anfrage wird vorbereitet, Sie ergänzen nur Ihre Daten.",
    cfgAreas: "Bereiche", cfgFormat: "Format", cfgTiming: "Zeitraum", cfgCompany: "Unternehmen (optional)", cfgNote: "Kurzbeschreibung (optional)",
    cfgNotePh: "Was möchten Sie erreichen?", openMail: "E-Mail öffnen", copyText: "Text kopieren", copied: "Kopiert", preview: "Ihre Anfrage",
    none: "Mindestens einen Bereich wählen.", subject: n => `Projektanfrage: ${n}`,
    body: (s, f, t, c, n) => `Hallo Engin,\n\nwir interessieren uns für:\n${s}\n\nFormat: ${f}\nZeitraum: ${t}${c ? `\nUnternehmen: ${c}` : ""}${n ? `\n\nZum Vorhaben:\n${n}` : ""}\n\nBitte melden Sie sich für ein Erstgespräch.\n\nViele Grüße`,
    note: "Details und Preise nach dem Erstgespräch. Kein Newsletter, kein Tracking."
  }
};
