/* ------------------------------------------------------------------
   All content of the site. Texts are bilingual: { en: "…", de: "…" }.
   Keep it short: every line is read by a recruiter in a few seconds.
------------------------------------------------------------------- */

export const person = {
  name: "Engin Celenk",
  degree: "M.Sc.",
  initials: "EC",
  roles: [{ en: "M.Sc. Computer Science", de: "M.Sc. Informatik" }, "Cyber Security Engineer", "IT Architect"],
  location: { en: "Stuttgart region, Germany", de: "Region Stuttgart" },
  email: "engincelenk@web.de",
  phone: ["+49", "163", "685", "4373"], // shown only after a click
  linkedin: "https://de.linkedin.com/in/engin-celenk",
  site: "https://ec.immofuchs.info",
  careerStart: "2012-03",
  languages: [
    { name: { en: "German", de: "Deutsch" }, level: { en: "Native", de: "Muttersprache" } },
    { name: { en: "Turkish", de: "Türkisch" }, level: { en: "Native", de: "Muttersprache" } },
    { name: { en: "English", de: "Englisch" }, level: { en: "Fluent · daily working language", de: "Fließend · tägliche Arbeitssprache" } }
  ]
};

export const hero = {
  title: [{ en: "I connect technology,", de: "Ich verbinde Technologie," }, { en: "security & business.", de: "Security & Business." }],
  line: { en: "IT through and through: from code to architecture to security.", de: "Durch und durch Informatiker: von Code über Architektur bis Security." }
};

/* Logos cropped from the original CV. `text` = wordmark tile when no logo file exists. */
export const logos = {
  bosch: { src: "/logos/bosch.png", name: "Bosch" },
  daimler: { src: "/logos/daimler.png", name: "Daimler" },
  protics: { src: "/logos/daimler-protics.png", name: "Daimler Protics" },
  tss: { src: "/logos/daimler-tss.png", name: "Daimler TSS" },
  trumpf: { src: "/logos/trumpf.png", name: "TRUMPF" },
  akzonobel: { src: "/logos/akzonobel.png", name: "AkzoNobel" },
  apsolut: { src: "/logos/apsolut.png", name: "apsolut" },
  enbw: { text: "EnBW", name: "EnBW" },
  reutlingen: { src: "/logos/hs-reutlingen.png", name: "Reutlingen University" },
  heilbronn: { src: "/logos/hs-heilbronn.png", name: "Heilbronn University" }
};
export const logoStrip = ["bosch", "daimler", "trumpf", "protics", "tss", "apsolut", "enbw", "reutlingen", "heilbronn", "akzonobel"];

/* Career path, oldest first. */
export const career = [
  { id: "protics", from: "2012-03", to: "2014-09", logo: "protics", place: "Stuttgart",
    short: { en: "IT Consultant", de: "IT-Consultant" },
    role: { en: "IT Consultant / IT Project Manager", de: "IT-Consultant / IT-Projektmanager" }, org: "Daimler Protics GmbH",
    points: [{ en: "E-commerce", de: "E-Commerce" }, { en: "End-to-end responsibility", de: "End-to-End-Verantwortung" }], domains: ["management"] },
  { id: "daimler", from: "2014-10", to: "2017-08", logo: "daimler", place: "Stuttgart",
    short: { en: "Project Manager & Architect", de: "Projektmanager & Architekt" },
    role: { en: "IT (Senior) Project Manager / IT Solution Architect", de: "IT (Senior) Projektmanager / IT Solution Architect" }, org: "Daimler AG · IT Sales & Marketing",
    points: [
      { en: "Project manager for mercedes-benz.com", de: "Projektmanager für mercedes-benz.com" },
      { en: "Customer experience & e-commerce for mymercedes.me", de: "Customer Experience & E-Commerce für mymercedes.me" },
      { en: "Solution architect, IBM mainframe area", de: "Solution Architect im IBM-Mainframe-Umfeld" }],
    projects: ["mercedes-benz.com", "mymercedes.me"], domains: ["management", "architecture"] },
  { id: "trumpf", from: "2017-09", to: "2019-04", logo: "trumpf", place: "Ditzingen",
    short: { en: "Solution Architect", de: "Solution Architect" },
    role: { en: "IT (Senior) Solution Architect & Consultant Digitalization", de: "IT (Senior) Solution Architect & Consultant Digitalisierung" }, org: "TRUMPF GmbH + Co. KG · IT Marketing & Sales",
    points: [{ en: "Customer experience platform", de: "Customer-Experience-Plattform" }, { en: "Customer portal MyTRUMPF", de: "Kundenportal MyTRUMPF" }],
    projects: ["MyTRUMPF"], domains: ["architecture", "management"] },
  { id: "bosch-arch", from: "2019-05", to: "2021-11", logo: "bosch", place: "Stuttgart",
    short: { en: "Lead Solution Architect", de: "Lead Solution Architect" },
    role: { en: "IT (Senior) Solution (Lead) Architect · Digital Business & CX", de: "IT (Senior) Solution (Lead) Architect · Digital Business & CX" }, org: "Robert Bosch GmbH · Central IT",
    points: [{ en: "Lead architect for customer-facing digital platforms", de: "Lead-Architekt für kundennahe digitale Plattformen" }],
    projects: ["Bosch Smart Home Website", "ATMO E-Commerce", "MAM / Sharedien", "Audit SaaS", "eLAKE"], domains: ["architecture"] },
  { id: "bosch-logistics", from: "2021-07", to: "2023-12", logo: "bosch", place: "Stuttgart",
    short: { en: "IT Solution Manager", de: "IT Solution Manager" },
    role: { en: "IT Solution Manager in Logistics", de: "IT Solution Manager Logistik" }, org: "Bosch Digital · Robert Bosch GmbH",
    points: [
      { en: "Overall responsibility for Bosch's central IT solution for transport management worldwide: Next Generation Transport Management (NGTM)", de: "Gesamtverantwortung für die zentrale IT-Lösung von Bosch für das weltweite Transportmanagement: Next Generation Transport Management (NGTM)" },
      { en: "Expert for logistics IT solutions, partners SupplyOn & Eurolog", de: "Experte für Logistiklösungen, Partner SupplyOn & Eurolog" }],
    projects: ["NGTM", "SupplyOn", "Eurolog"], domains: ["management"] },
  { id: "bosch-cse", from: "2024-01", to: null, logo: "bosch", place: "Stuttgart",
    short: { en: "Cyber Security Engineer", de: "Cyber Security Engineer" },
    role: { en: "Cyber Security Engineer", de: "Cyber Security Engineer" }, org: "Bosch Digital · Robert Bosch GmbH",
    points: [
      { en: "Security engineering in digital business projects", de: "Security Engineering in Digital-Business-Projekten" },
      { en: "Threat analysis & risk assessment (TARA)", de: "Bedrohungs- und Risikoanalysen (TARA)" }], domains: ["security", "architecture"] }
];

/* Education staircase, bottom step first. */
export const education = [
  { id: "arrival", year: "1994", icon: "MapPin", short: { en: "Arrival in Germany", de: "Ankunft in Deutschland" }, title: { en: "Arrival in Germany", de: "Ankunft in Deutschland" }, text: { en: "The first step.", de: "Die erste Stufe." } },
  { id: "grund", year: "", icon: "School", short: { en: "Primary school", de: "Grundschule" }, title: { en: "Primary school", de: "Grundschule" }, text: { en: "Grundschule", de: "Die Grundlage." } },
  { id: "haupt", year: "", icon: "School", short: { en: "Lower secondary", de: "Hauptschule" }, title: { en: "Lower secondary school", de: "Hauptschule" }, text: { en: "Hauptschule", de: "Nächste Stufe." } },
  { id: "werkreal", year: "", icon: "School", short: { en: "Vocational secondary", de: "Werkrealschule" }, title: { en: "Vocational secondary school", de: "Werkrealschule" }, text: { en: "Werkrealschule", de: "Nächste Stufe." } },
  { id: "wg", year: "", icon: "School", short: { en: "Business high school", de: "Wirtschafts­gymnasium" }, title: { en: "Business high school", de: "Wirtschaftsgymnasium" }, text: { en: "Wirtschaftsgymnasium", de: "Schwerpunkt Wirtschaft." } },
  { id: "azubi", year: "2003", logo: "akzonobel", short: { en: "Apprenticeship", de: "Ausbildung" }, title: { en: "Apprenticeship · office administrator", de: "Ausbildung zum Bürokaufmann" }, text: { en: "Akzo Nobel AG, Ludwigsburg · 2003–2005", de: "Akzo Nobel AG, Ludwigsburg · 2003–2005" } },
  { id: "hhn", year: "2005", logo: "heilbronn", short: { en: "Software Engineering", de: "Software Engineering" }, title: { en: "Software Engineering studies", de: "Studium Software Engineering" }, text: { en: "Heilbronn University · 2005–2008", de: "Hochschule Heilbronn · 2005–2008" },
    extra: { logo: "bosch", text: { en: "Internship Bosch Gasoline Systems: two C# tools for LabCar test systems", de: "Praktikum Bosch Gasoline Systems: zwei C#-Tools für LabCar-Testsysteme" } } },
  { id: "bsc", year: "2009", logo: "reutlingen", short: { en: "B.Sc.", de: "B.Sc." }, title: { en: "B.Sc. Computer Science", de: "B.Sc. Informatik" }, text: { en: "Reutlingen University · 2008–2009 · Wirtschaftsinformatik · focus SAP SRM & BI", de: "Hochschule Reutlingen · 2008–2009 · Wirtschaftsinformatik · Schwerpunkt SAP SRM & BI" },
    extra: { logo: "apsolut", text: { en: "Thesis at apsolut: procurement KPIs in SAP NetWeaver BI 7.0", de: "Abschlussarbeit bei apsolut: Einkaufskennzahlen in SAP NetWeaver BI 7.0" } } },
  { id: "msc", year: "2012", logo: "reutlingen", short: { en: "M.Sc. · 1.7", de: "M.Sc. · 1,7" }, title: { en: "M.Sc. Computer Science · grade 1.7", de: "M.Sc. Informatik · Note 1,7" }, text: { en: "Reutlingen University · 2010–2012 · Wirtschaftsinformatik · faculty award · publication on SOA monitoring", de: "Hochschule Reutlingen · 2010–2012 · Wirtschaftsinformatik · Fakultätspreis · Publikation zu SOA-Monitoring" },
    extra: { logo: "tss", text: { en: "Thesis at Daimler TSS: iOS app on Sybase Unwired Platform", de: "Masterarbeit bei Daimler TSS: iOS-App auf Sybase Unwired Platform" } } }
];

/* Competence model. */
export const domains = [
  { id: "security", icon: "ShieldCheck", title: "Cyber Security",
    keywords: ["Security Engineering", "TARA", "STRIDE", { en: "Risk Assessment", de: "Risikobewertung" }, "Governance", "NIST CSF", "OWASP", "ISO 27001"],
    evidence: [{ en: "Cyber Security Engineer, Bosch Digital, since 2024", de: "Cyber Security Engineer, Bosch Digital, seit 2024" }] },
  { id: "architecture", icon: "Boxes", title: { en: "Architecture", de: "Architektur" },
    keywords: ["Solution Architecture", "System Design", "Integration", "Cloud & SaaS"],
    evidence: [{ en: "Lead Architect, Bosch Central IT", de: "Lead Architect, Bosch Central IT" }, { en: "Solution Architect at TRUMPF & Daimler", de: "Solution Architect bei TRUMPF & Daimler" }, "Bosch Confirmed Architect"] },
  { id: "management", icon: "Workflow", title: { en: "Management & Logistics", de: "Management & Logistik" },
    keywords: ["Solution Management", { en: "Logistics Solutions", de: "Logistiklösungen" }, "Transport Management", { en: "E2E Ownership", de: "E2E-Verantwortung" }, "Stakeholder", { en: "Agile Delivery", de: "Agile Umsetzung" }],
    evidence: [{ en: "Overall responsibility for Bosch's worldwide transport management (NGTM)", de: "Gesamtverantwortung für das weltweite Transportmanagement von Bosch (NGTM)" }, { en: "Expert for logistics IT solutions", de: "Experte für Logistiklösungen" }, { en: "PM for mercedes-benz.com", de: "Projektleitung mercedes-benz.com" }, "IPMA D · PSM I · PSPO I · ITIL"] },
  { id: "ai", icon: "Sparkles", title: { en: "AI & Innovation", de: "KI & Innovation" },
    keywords: [{ en: "Agentic Architectures", de: "Agentische Architekturen" }, { en: "AI Applications", de: "KI-Anwendungen" }, { en: "AI-assisted Security", de: "KI-gestützte Security" }, { en: "Product Development", de: "Produktentwicklung" }],
    evidence: [{ en: "Familiar with agentic AI architectures", de: "Vertraut mit agentischen KI-Architekturen" }, { en: "Built ImmoFuchs", de: "ImmoFuchs entwickelt" }, { en: "Built this portfolio with AI", de: "Dieses Portfolio mit KI gebaut" }] }
];

export const values = [
  { en: "Analytical thinking", de: "Analytisches Denken" }, { en: "Ownership & reliability", de: "Verantwortung & Verlässlichkeit" },
  { en: "Continuous learning", de: "Kontinuierliches Lernen" }, { en: "Cross-functional collaboration", de: "Bereichsübergreifende Zusammenarbeit" },
  { en: "Pragmatic problem solving", de: "Pragmatische Lösungen" }
];
export const quote = { en: "The best solutions emerge when different perspectives come together.", de: "Die besten Lösungen entstehen, wenn unterschiedliche Perspektiven zusammenkommen." };

export const certificates = [
  { year: null, name: "Bosch Confirmed Architect", badge: "/logos/bosch-confirmed-architect.svg" },
  { year: 2018, name: "Professional Scrum Product Owner I", short: "PSPO I" },
  { year: 2014, name: "Professional Scrum Master I", short: "PSM I" },
  { year: 2014, name: "IPMA Level D (GPM)", short: "IPMA D" },
  { year: 2013, name: "ITIL Foundation", short: "ITIL" }
];

export const trainings = [
  { year: 2022, name: { en: "Self-confidence and assertiveness", de: "Selbstbewusstsein und Durchsetzungsvermögen" } },
  { year: 2018, name: "Design Thinking" },
  { year: 2017, name: { en: "Communication & personality", de: "Kommunikation & Persönlichkeit" } },
  { year: 2016, name: "APIs, Daimler" },
  { year: 2015, name: { en: "Agile projects with JIRA", de: "Agile Projekte mit JIRA" } },
  { year: 2015, name: "Hybris (E-Commerce)" },
  { year: 2012, name: "Houston IT" },
  { year: 2012, name: "Intershop (E-Commerce)" }
];

export const sideProject = { name: "ImmoFuchs", link: "https://immofuchs.info", text: { en: "Real estate analysis product, built independently with AI.", de: "Immobilien-Analyseprodukt, eigenständig mit KI entwickelt." } };

/* Tailored CV focuses. PDFs live in /public/cv (…-CV-… English, …-Lebenslauf-… German). */
export const focuses = [
  { id: "security", label: "Cyber Security", file: { en: "/cv/Engin-Celenk-CV-Cyber-Security.pdf", de: "/cv/Engin-Celenk-Lebenslauf-Cyber-Security.pdf" },
    headline: { en: "Cyber Security Engineer with an architecture and delivery background", de: "Cyber Security Engineer mit Architektur- und Projekterfahrung" },
    profile: { en: "Cyber security engineer at Bosch Digital (TARA, security engineering). Over a decade of solution architecture and solution management in corporate IT at Bosch, TRUMPF and Daimler, including overall responsibility for Bosch's worldwide transport management (NGTM).",
      de: "Cyber Security Engineer bei Bosch Digital (TARA, Security Engineering). Über zehn Jahre Solution-Architektur und Solution Management in der Konzern-IT von Bosch, TRUMPF und Daimler, unter anderem mit Gesamtverantwortung für das weltweite Transportmanagement von Bosch (NGTM)." },
    domains: ["security", "architecture", "management"] },
  { id: "architecture", label: { en: "IT Architecture", de: "IT-Architektur" }, file: { en: "/cv/Engin-Celenk-CV-IT-Architecture.pdf", de: "/cv/Engin-Celenk-Lebenslauf-IT-Architektur.pdf" },
    headline: { en: "IT Solution Architect for secure digital platforms", de: "IT Solution Architect für sichere digitale Plattformen" },
    profile: { en: "Solution architect for digital business and customer experience platforms at Bosch, TRUMPF and Daimler, now in cyber security. Integrations that teams can operate and that are secure by design.",
      de: "Solution Architect für Digital-Business- und Customer-Experience-Plattformen bei Bosch, TRUMPF und Daimler, heute in der Cyber Security. Integrationen, die Teams betreiben können und die sicher by Design sind." },
    domains: ["architecture", "security", "management"] },
  { id: "innovation", label: { en: "Technology & Innovation", de: "Technologie & Innovation" }, file: { en: "/cv/Engin-Celenk-CV-Technology-Innovation.pdf", de: "/cv/Engin-Celenk-Lebenslauf-Technologie-Innovation.pdf" },
    headline: { en: "IT professional connecting security, architecture and AI", de: "Informatiker an der Schnittstelle von Security, Architektur und KI" },
    profile: { en: "Cyber security engineer at Bosch Digital with a background in architecture and solution management. Familiar with agentic AI architectures; builds digital products with AI, such as ImmoFuchs.",
      de: "Cyber Security Engineer bei Bosch Digital mit Hintergrund in Architektur und Solution Management. Vertraut mit agentischen KI-Architekturen; entwickelt digitale Produkte mit KI, zum Beispiel ImmoFuchs." },
    domains: ["ai", "architecture", "security"] }
];
