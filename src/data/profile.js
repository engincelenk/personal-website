/* ------------------------------------------------------------------
   All content of the site. Texts are bilingual: { en: "…", de: "…" }.
   Keep it short: every line is read by a recruiter in a few seconds.
------------------------------------------------------------------- */

export const person = {
  name: "Engin Celenk",
  degree: "M.Sc.",
  initials: "EC",
  roles: [{ en: "M.Sc. Computer Science", de: "M.Sc. Informatik" }, "Cyber Security Engineer", "IT Architect", "IT Management"],
  location: { en: "Stuttgart region, Germany", de: "Region Stuttgart" },
  // Contact form target (FormSubmit). After activation, put the random alias from FormSubmit into `alias` to hide the address completely.
  linkedin: "https://de.linkedin.com/in/engin-celenk",
  site: "https://ec.immofuchs.info",
  careerStart: "2012-03",
  languages: [
    { name: { en: "German", de: "Deutsch" }, level: { en: "Native", de: "Muttersprache" } },
    { name: { en: "Turkish", de: "Türkisch" }, level: { en: "Native", de: "Muttersprache" } },
    { name: { en: "English", de: "Englisch" }, level: { en: "Fluent · daily working language", de: "Fließend · tägliche Arbeitssprache" } }
  ]
};

export const contactForm = { user: "engincelenk", domain: "web.de", alias: "" };

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
  { id: "akzo-hr", from: "2005-08", to: "2005-09", logo: "akzonobel", place: "Ludwigsburg",
    short: { en: "HR Administrator", de: "Sachbearbeiter HR" },
    role: { en: "HR Administrator", de: "Sachbearbeiter HR" }, org: "Akzo Nobel AG · Human Resources",
    points: [{ en: "Various tasks in human resources", de: "Verschiedene Aufgaben im Personalwesen" }], domains: ["management"] },
  { id: "apsolut-thesis", from: "2008-03", to: "2009-08", logo: "apsolut", place: "Stuttgart",
    short: { en: "Bachelor's thesis", de: "Bachelorarbeit" },
    role: { en: "Bachelor's thesis", de: "Bachelorarbeit" }, org: "apsolut GmbH · SAP Consulting",
    points: [
      { en: "Requirements analysis of metrics for optimised procurement controlling", de: "Anforderungsanalyse von Kennzahlen für ein optimiertes Beschaffungscontrolling" },
      { en: "Implementation of indicators and reports in SAP NetWeaver Business Intelligence 7.0", de: "Umsetzung von Kennzahlen und Berichten in SAP NetWeaver Business Intelligence 7.0" }],
    domains: ["management"] },
  { id: "tss-thesis", from: "2011-09", to: "2012-02", logo: "tss", place: "Stuttgart",
    short: { en: "Master's thesis", de: "Masterarbeit" },
    role: { en: "Master's thesis", de: "Masterarbeit" }, org: "Daimler TSS GmbH · SAP Solutions",
    points: [{ en: "Evaluation and prototype of an iOS app based on the Sybase Unwired Platform for distributing Daimler AG company data internally", de: "Evaluierung und prototypische Umsetzung einer iOS-App auf Basis der Sybase Unwired Platform zur internen Verteilung von Unternehmensdaten der Daimler AG" }],
    domains: ["architecture"] },
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
    points: [{ en: "Lead architect for customer-facing digital platforms", de: "Lead-Architekt für kundennahe digitale Plattformen" }, { en: "Microservice, cloud and SaaS architectures", de: "Microservice-, Cloud- und SaaS-Architekturen" }],
    projects: ["Bosch Smart Home Website", "ATMO E-Commerce", "MAM / Sharedien", "Audit SaaS", "eLAKE"], domains: ["architecture"] },
  { id: "bosch-logistics", from: "2021-07", to: "2023-12", logo: "bosch", place: "Stuttgart",
    short: { en: "IT Solution Manager", de: "IT Solution Manager" },
    role: { en: "IT Solution Manager in Logistics", de: "IT Solution Manager Logistik" }, org: "Bosch Digital · Robert Bosch GmbH",
    points: [
      { en: "Overall responsibility for Bosch's central IT solution for transport management worldwide: Next Generation Transport Management (NGTM)", de: "Gesamtverantwortung für die zentrale IT-Lösung von Bosch für das weltweite Transportmanagement: Next Generation Transport Management (NGTM)" },
      { en: "Single point of contact on the IT side, full budget and project responsibility", de: "Single Point of Contact auf IT-Seite, volle Budget- und Projektverantwortung" },
      { en: "Expert for logistics IT solutions, partners SupplyOn & Eurolog", de: "Experte für Logistiklösungen, Partner SupplyOn & Eurolog" }],
    projects: ["NGTM", "SupplyOn", "Eurolog"], domains: ["management"] },
  { id: "bosch-cse", from: "2024-01", to: null, logo: "bosch", place: "Stuttgart",
    short: { en: "Cyber Security Engineer", de: "Cyber Security Engineer" },
    role: { en: "Cyber Security Engineer", de: "Cyber Security Engineer" }, org: "Bosch Digital · Robert Bosch GmbH",
    points: [
      { en: "Cyber security for multiple projects within Bosch worldwide", de: "Cyber Security für mehrere Projekte innerhalb von Bosch weltweit" },
      { en: "Implementing security concepts in line with the cyber security policy", de: "Umsetzung von Security-Konzepten gemäß Cyber Security Policy" },
      { en: "TARA for various projects and SAP", de: "TARA für verschiedene Projekte und SAP" },
      { en: "Cyber security mentoring within the Bosch Group", de: "Cyber-Security-Mentoring in der Bosch-Gruppe" }], domains: ["security", "architecture"] }
];

/* Education staircase, bottom step first. */
export const education = [
  { id: "arrival", year: "1994", icon: "MapPin", short: { en: "Arrival in Germany", de: "Ankunft in Deutschland" }, title: { en: "Arrival in Germany", de: "Ankunft in Deutschland" }, text: { en: "The first step.", de: "Die erste Stufe." } },
  { id: "haupt", year: "", icon: "School", short: { en: "Lower secondary", de: "Hauptschule" }, title: { en: "Lower secondary school", de: "Hauptschule" }, text: { en: "Hauptschule", de: "Nächste Stufe." } },
  { id: "werkreal", year: "", icon: "School", short: { en: "Vocational secondary", de: "Werkrealschule" }, title: { en: "Vocational secondary school", de: "Werkrealschule" }, text: { en: "Werkrealschule", de: "Nächste Stufe." } },
  { id: "wg", year: "", icon: "School", short: { en: "Business high school", de: "Wirtschafts­gymnasium" }, title: { en: "Business high school", de: "Wirtschaftsgymnasium" }, text: { en: "Wirtschaftsgymnasium", de: "Schwerpunkt Wirtschaft." } },
  { id: "azubi", year: "2003", logo: "akzonobel", short: { en: "Apprenticeship", de: "Ausbildung" }, title: { en: "Apprenticeship · office administrator", de: "Ausbildung zum Bürokaufmann" }, text: { en: "Akzo Nobel AG, Ludwigsburg · 2003–2005", de: "Akzo Nobel AG, Ludwigsburg · 2003–2005" } },
  { id: "hhn", year: "2005", logo: "heilbronn", short: { en: "Software Engineering", de: "Software Engineering" }, title: { en: "Software Engineering studies", de: "Studium Software Engineering" }, text: { en: "Heilbronn University · 2005–2008", de: "Hochschule Heilbronn · 2005–2008" },
    extra: { logo: "bosch", text: { en: "Internship Bosch Gasoline Systems: two C# tools for LabCar test systems", de: "Praktikum Bosch Gasoline Systems: zwei C#-Tools für LabCar-Testsysteme" } } },
  { id: "bsc", year: "2009", logo: "reutlingen", short: { en: "B.Sc.", de: "B.Sc." }, title: { en: "B.Sc. Computer Science", de: "B.Sc. Informatik" }, text: { en: "Reutlingen University · 2008–2009 · Wirtschaftsinformatik · focus SAP SRM & BI", de: "Hochschule Reutlingen · 2008–2009 · Wirtschaftsinformatik · Schwerpunkt SAP SRM & BI" },
    extra: { logo: "apsolut", text: { en: "Thesis at apsolut: procurement KPIs in SAP NetWeaver BI 7.0", de: "Abschlussarbeit bei apsolut: Einkaufskennzahlen in SAP NetWeaver BI 7.0" } } },
  { id: "msc", year: "2012", logo: "reutlingen", short: { en: "M.Sc.", de: "M.Sc." }, title: { en: "M.Sc. Computer Science", de: "M.Sc. Informatik" }, grade: { en: "grade 1.7", de: "Note 1,7" }, text: { en: "Reutlingen University · 2010–2012 · Wirtschaftsinformatik · faculty award · publication on SOA monitoring", de: "Hochschule Reutlingen · 2010–2012 · Wirtschaftsinformatik · Fakultätspreis · Publikation zu SOA-Monitoring" },
    extra: { logo: "tss", text: { en: "Thesis at Daimler TSS: iOS app on Sybase Unwired Platform", de: "Masterarbeit bei Daimler TSS: iOS-App auf Sybase Unwired Platform" } } }
];

/* Competence model. `evidence` = concrete, CV-backed highlights shown when a domain is opened. */
export const domains = [
  { id: "architecture", icon: "Boxes", title: { en: "IT Architecture", de: "IT-Architektur" },
    keywords: ["Solution Architecture", { en: "Microservices", de: "Microservices" }, "Cloud & SaaS", "Integration & APIs", "System Design"],
    evidence: [
      { en: "Architect for multiple Bosch projects worldwide, across different technologies", de: "Als Architekt für mehrere Bosch-Projekte weltweit beauftragt, über verschiedene Technologien hinweg" },
      { en: "Microservice architectures", de: "Microservice-Architekturen" },
      { en: "Architectures for Security Class 3 (SC3) solutions", de: "Architekturen für Lösungen der Security Class 3 (SC3)" },
      { en: "Cloud and SaaS architectures", de: "Cloud- und SaaS-Architekturen" },
      { en: "Lead Architect at Bosch Central IT, Solution Architect at TRUMPF and Daimler", de: "Lead Architect bei Bosch Central IT, Solution Architect bei TRUMPF und Daimler" },
      "Bosch Confirmed Architect"] },
  { id: "security", icon: "ShieldCheck", title: "Cyber Security",
    keywords: ["Security Engineering", "TARA", "STRIDE", { en: "Risk Management", de: "Risikomanagement" }, "NIST CSF", "OWASP", "ISO 27001"],
    evidence: [
      { en: "Cyber security engineer for multiple projects within Bosch worldwide", de: "Als Cyber Security Engineer für mehrere Projekte innerhalb von Bosch weltweit beauftragt" },
      { en: "Implementing cyber security concepts in line with the corporate cyber security policy", de: "Umsetzung von Cyber-Security-Konzepten gemäß Cyber Security Policy" },
      { en: "Threat analysis and risk assessment (TARA) for various projects and SAP", de: "Bedrohungs- und Risikoanalysen (TARA) für verschiedene Projekte und SAP" },
      { en: "Cyber security mentoring within the Bosch Group", de: "Cyber-Security-Mentoring innerhalb der Bosch-Gruppe" }] },
  { id: "management", icon: "Workflow", title: "IT Management", subtitle: { en: "Project, program & solution management", de: "Projekt-, Programm- & Solution Management" },
    keywords: ["Solution Management", { en: "Project Management", de: "Projektmanagement" }, { en: "Budget Responsibility", de: "Budgetverantwortung" }, "Stakeholder", { en: "Logistics Solutions", de: "Logistiklösungen" }],
    evidence: [
      { en: "Single point of contact on the IT side", de: "Single Point of Contact auf IT-Seite" },
      { en: "Full budget and project responsibility", de: "Volle Budget- und Projektverantwortung" },
      { en: "Contracting and steering of further roles", de: "Beauftragung und Steuerung weiterer Rollen" },
      { en: "Project management for B, C and D projects", de: "Projektmanagement für B-, C- und D-Projekte" },
      { en: "Stakeholder management from team to executive level", de: "Stakeholder-Management vom Team bis zur Führungsebene" },
      { en: "Overall responsibility for Bosch's worldwide transport management (NGTM)", de: "Gesamtverantwortung für das weltweite Transportmanagement von Bosch (NGTM)" },
      "IPMA D · PSM I · PSPO I · ITIL"] },
  { id: "ai", icon: "Sparkles", title: { en: "AI & Agentic", de: "KI & Agentic" },
    keywords: [{ en: "Agentic Architectures", de: "Agentische Architekturen" }, { en: "AI Applications", de: "KI-Anwendungen" }, { en: "AI-assisted Security", de: "KI-gestützte Security" }, { en: "Product Development", de: "Produktentwicklung" }],
    evidence: [{ en: "Familiar with agentic AI architectures", de: "Vertraut mit agentischen KI-Architekturen" }, { en: "Built ImmoFuchs", de: "ImmoFuchs entwickelt" }, { en: "Built this portfolio with AI", de: "Dieses Portfolio mit KI gebaut" }] }
];

/* AI as the vertical across the three pillars. Same wording on CV page, PDF and freelance page. */
export const aiVertical = {
  claim: { en: "The vertical across all three pillars: AI as part of architecture, security and delivery.", de: "Die Vertikale über alle drei Säulen: KI als Teil von Architektur, Security und Umsetzung." },
  aspects: {
    architecture: { en: "AI & agentic architecture", de: "KI- & Agentic-Architektur" },
    security: { en: "AI security", de: "KI-Security" },
    management: { en: "AI adoption & AI-assisted delivery", de: "KI-Einführung & KI-gestützte Umsetzung" }
  }
};

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
  { year: 2018, name: "Design Thinking" }
];

export const sideProject = { name: "ImmoFuchs", link: "https://immofuchs.info", text: { en: "Real estate analysis product, built independently with AI.", de: "Immobilien-Analyseprodukt, eigenständig mit KI entwickelt." } };

/* One CV per language. */
export const cv = {
  file: { en: "/cv/Engin-Celenk-CV.pdf", de: "/cv/Engin-Celenk-Lebenslauf.pdf" },
  headline: { en: "IT Architecture · Cyber Security · IT Management, with AI as the vertical", de: "IT-Architektur · Cyber Security · IT Management, mit KI als Vertikale" },
  profile: {
    en: "Computer scientist (M.Sc.) with many years of project experience in large corporations such as Bosch, Daimler and TRUMPF. My profile rests on three equal pillars: IT architecture, cyber security and IT management (project, program and solution management). AI and agentic architectures connect all three as a vertical. I bring this combination into demanding, international projects.",
    de: "Informatiker (M.Sc.) mit langjähriger Projekterfahrung in Großunternehmen wie Bosch, Daimler und TRUMPF. Mein Profil ruht auf drei gleichwertigen Säulen: IT-Architektur, Cyber Security und IT Management (Projekt-, Programm- und Solution Management). KI und agentische Architekturen verbinden alle drei als Vertikale. Diese Kombination bringe ich in anspruchsvolle, internationale Projekte ein."
  }
};
