/* ------------------------------------------------------------------
   All content of the site lives here. Edit this file, the site follows.
   Facts come from Engin's CV. Case studies are kept generic on purpose:
   no internal company information, no confidential system details.
------------------------------------------------------------------- */

export const person = {
  name: "Engin Celenk",
  initials: "EC",
  roles: ["Cyber Security Engineer", "IT Architect", "Technology Innovator"],
  location: "Pleidelsheim · Stuttgart region, Germany",
  email: "engincelenk@web.de",
  phone: ["+49", "163", "685", "4373"], // shown only after a click
  linkedin: "", // e.g. "https://www.linkedin.com/in/…"
  github: "https://github.com/engincelenk",
  site: "https://ec.immofuchs.info",
  careerStart: "2012-03",
  languages: [
    { name: "German", level: "Native" },
    { name: "Turkish", level: "Native" },
    { name: "English", level: "Very good" },
    { name: "French", level: "Basic" }
  ]
};

export const hero = {
  eyebrow: "Personal portfolio / 2026",
  title: ["I connect technology,", "security & business."],
  claim: "Turning complexity into clarity.",
  line: "I think beyond systems. I understand the bigger picture."
};

export const intro = {
  text: "My background combines IT architecture, solution management and cybersecurity. This enables me to look at technology from different perspectives – from business requirements and system design to information security and risk management.",
  pillars: [
    { icon: "Compass", title: "Think strategically", text: "Understand the business first, then place every technical decision in that context." },
    { icon: "Network", title: "Design holistically", text: "Bring architecture, processes and security together instead of solving them one by one." },
    { icon: "Wrench", title: "Act pragmatically", text: "Reduce complexity, decide, and get solutions into operation." }
  ]
};

/* Expertise model. Each domain links to journey stations and case studies. */
export const domains = [
  {
    id: "security", icon: "ShieldCheck", title: "Cyber Security",
    keywords: ["Security Engineering", "TARA", "STRIDE", "Risk Assessment", "Governance"],
    thinking: "Security is a design property. I start from assets and attack paths, rate risks transparently and make every measure traceable to a risk.",
    evidence: ["Cyber Security Engineer at Bosch Digital since 2024", "Threat analysis and risk assessment (TARA) in digital business projects"],
    cases: ["tara", "governance"], journey: ["bosch-cse"]
  },
  {
    id: "architecture", icon: "Boxes", title: "Architecture",
    keywords: ["Solution Architecture", "System Design", "Integration", "Technology Strategy"],
    thinking: "Good architecture makes trade-offs visible. I design for integration, operations and security from the first sketch, not after go-live.",
    evidence: ["Lead Architect for Digital Business & Customer Experience at Bosch Central IT", "Solution Architect at TRUMPF and Daimler", "Bosch Confirmed Architect (Associate)", "M.Sc. thesis and publication on monitoring SOA platforms"],
    cases: ["cx", "tara"], journey: ["bosch-arch", "trumpf", "daimler"]
  },
  {
    id: "management", icon: "Workflow", title: "Management",
    keywords: ["Solution Management", "Stakeholder Alignment", "Delivery", "Governance"],
    thinking: "Delivery is about people and decisions. I keep business, IT and partners aligned on one goal and own the result end to end.",
    evidence: ["End-to-end responsibility for Bosch's worldwide transport management application", "Project manager for mercedes-benz.com", "IPMA Level D, Professional Scrum Master I, Professional Scrum Product Owner I, ITIL Foundation"],
    cases: ["governance", "cx"], journey: ["bosch-logistics", "daimler", "protics"]
  },
  {
    id: "ai", icon: "Sparkles", title: "AI & Innovation",
    keywords: ["AI Applications", "AI-assisted Security", "Product Development"],
    thinking: "AI is a tool for thinking faster, not for thinking less. I use it to build, analyse and test, and I review every result myself.",
    evidence: ["Built ImmoFuchs, a real estate analysis product", "Built this portfolio with AI from three screenshots of a CV"],
    cases: ["immofuchs"], journey: []
  }
];

/* Career journey. `highlight` marks the stations shown first. */
export const journey = [
  {
    id: "bosch-cse", from: "2024-01", to: null, place: "Stuttgart", highlight: true, domains: ["security", "architecture"],
    role: "Cyber Security Engineer", org: "Bosch Digital · Robert Bosch GmbH",
    summary: "Cyber security in digital business projects, with a focus on threat analysis and risk assessment (TARA).",
    responsibilities: ["Security engineering in various digital business projects", "Threat analysis and risk assessment (TARA)", "Deriving security requirements and measures together with project teams"],
    challenges: ["Making risks understandable for technical and business stakeholders alike", "Bringing security in early, while architectures are still open"],
    learnings: ["Architecture experience is a strong lever for security: knowing how systems are built shows where they break"]
  },
  {
    id: "bosch-logistics", from: "2021-07", to: "2023-12", place: "Stuttgart", highlight: true, domains: ["management"],
    role: "IT Solution Manager in Logistics", org: "Bosch Digital · Robert Bosch GmbH",
    summary: "End-to-end responsibility for the central transport management application of Bosch worldwide.",
    responsibilities: ["End-to-end responsibility for the central transport management application", "Interface between logistics business and IT", "Working with the external partners SupplyOn and Eurolog"],
    challenges: ["A globally used application with many stakeholders and external partners", "Balancing operations, change requests and further development"],
    learnings: ["Ownership means being accountable for the whole chain, from requirement to stable operation"]
  },
  {
    id: "bosch-arch", from: "2019-05", to: "2021-11", place: "Stuttgart", highlight: true, domains: ["architecture"],
    role: "IT (Senior) Solution (Lead) Architect – Digital Business & Customer Experience", org: "Central IT · Robert Bosch GmbH",
    summary: "Solution architecture for customer-facing digital platforms, including the Bosch Smart Home website.",
    responsibilities: ["Bosch Smart Home website", "ATMO e-commerce", "Media asset management with Sharedien", "Audit SaaS and eLAKE"],
    challenges: ["Several platforms with different technologies, vendors and SaaS components", "Designing integrations that teams can operate and extend"],
    learnings: ["Architecture is communication: decisions only last when every team understands them"]
  },
  {
    id: "trumpf", from: "2017-09", to: "2019-04", place: "Ditzingen", domains: ["architecture", "management"],
    role: "IT (Senior) Consultant Digitalization & IT (Senior) Solution Architect", org: "TRUMPF GmbH + Co. KG · IT Marketing & Sales",
    summary: "Customer experience platform and the customer portal MyTRUMPF.",
    responsibilities: ["Customer experience platform", "Customer portal MyTRUMPF"],
    challenges: ["Connecting marketing, sales and IT around one customer experience"],
    learnings: ["Digitalization succeeds when business value and architecture are designed together"]
  },
  {
    id: "daimler", from: "2014-10", to: "2017-08", place: "Stuttgart", domains: ["management", "architecture"],
    role: "IT (Senior) Project Manager / IT Solution Architect", org: "Daimler AG · IT Sales & Marketing",
    summary: "Customer experience and e-commerce for mymercedes.me, project management for mercedes-benz.com.",
    responsibilities: ["Customer experience and e-commerce for mymercedes.me", "Project manager for mercedes-benz.com", "Solution architect for technologies in the IBM mainframe area"],
    challenges: ["High-visibility brand platforms with many stakeholders", "Bridging modern web platforms and mainframe technologies"],
    learnings: ["Clear structure and honest status reporting keep large projects on track"]
  },
  {
    id: "protics", from: "2012-03", to: "2014-09", place: "Stuttgart", domains: ["management"],
    role: "IT Consultant / IT Project Manager", org: "Daimler Protics GmbH · Virtual Engineering",
    summary: "E-commerce with end-to-end responsibility.",
    responsibilities: ["E-commerce", "End-to-end responsibility"],
    challenges: ["First full responsibility for delivery in a corporate environment"],
    learnings: ["The foundation for project management, later certified with IPMA Level D"]
  },
  {
    id: "foundations", from: "2003-09", to: "2012-02", place: "Ludwigsburg · Heilbronn · Reutlingen · Stuttgart", domains: ["architecture", "management"],
    role: "Foundations: apprenticeship, studies and theses", org: "Akzo Nobel · Hochschule Heilbronn · Hochschule Reutlingen · Bosch · apsolut · Daimler TSS",
    summary: "Arrived in Germany in 1994, then step by step from Grundschule via Hauptschule, Werkrealschule and Wirtschaftsgymnasium to a Master of Science.",
    responsibilities: [
      "2003–2005 Apprenticeship as office administrator, Akzo Nobel AG",
      "2005–2008 Software Engineering studies, Hochschule Heilbronn",
      "2007–2008 Internship at Bosch Gasoline Systems: two C# tools for LabCar test systems",
      "2008–2009 B.Sc. Business Informatics, Hochschule Reutlingen; thesis on procurement KPIs in SAP NetWeaver BI 7.0 (apsolut GmbH)",
      "2010–2012 M.Sc. Business Informatics, Hochschule Reutlingen, grade 1.7"
    ],
    challenges: ["No shortcut: every step taken on its own"],
    learnings: ["Faculty of Computer Science award for the annual project on integrated monitoring of SOA platforms", "Publication: “Semantics-based integral monitoring of SOA platforms”", "Master's thesis at Daimler TSS: iOS app prototype on the Sybase Unwired Platform"]
  }
];

/* Case studies: generic by design. */
export const cases = [
  {
    id: "tara", domain: "security", label: "Case study A", title: "Security & TARA",
    teaser: "A structured, traceable security assessment for a complex IT system.",
    situation: "A complex IT system with many interfaces, cloud services and different user groups.",
    challenge: "Identify assets, threats and realistic attack paths early enough that measures can still shape the design.",
    approach: ["Model the system and its data flows", "Identify assets and their security properties", "Apply STRIDE per element and derive threat scenarios", "Rate risk by impact and feasibility", "Define security goals and measures, traceable to each risk"],
    result: "A structured and reproducible security assessment that teams can act on and reviewers can follow.",
    demo: true
  },
  {
    id: "governance", domain: "security", label: "Case study B", title: "Security Governance",
    teaser: "Making security responsibilities transparent in a complex organisation.",
    situation: "Security requirements in a large organisation with many teams, products and suppliers.",
    challenge: "Create transparency on what applies where, and who is responsible for which task.",
    approach: ["Security profiles that define requirements per type of solution", "A task model with clear responsibilities", "Governance processes with defined checkpoints"],
    result: "Security steering that is traceable: every requirement has an owner and a place in the process."
  },
  {
    id: "cx", domain: "architecture", label: "Case study C", title: "Customer Experience Platforms",
    teaser: "Architecture and delivery for brand platforms at Bosch, TRUMPF and Daimler.",
    situation: "Customer-facing platforms such as the Bosch Smart Home website, MyTRUMPF, mymercedes.me and mercedes-benz.com.",
    challenge: "High visibility, many stakeholders, multiple vendors and SaaS components that must work as one experience.",
    approach: ["Translate marketing and sales goals into a target architecture", "Design integrations between web, commerce, content and backend systems", "Steer delivery across internal teams and external partners"],
    result: "Platforms that business teams can evolve and IT can operate, with architecture decisions everyone understands."
  },
  {
    id: "immofuchs", domain: "ai", label: "Case study D", title: "Digital Product & AI",
    teaser: "ImmoFuchs: a real estate analysis product, built independently.",
    situation: "The idea for a digital product that helps people analyse real estate investments in Germany.",
    challenge: "Combine technical implementation, user experience and a viable business model, alone and alongside a full-time role.",
    approach: ["Concept from the user's problem, not from technology", "AI-assisted design, development and testing", "Iterative releases on a lean, browser-based stack"],
    result: "An independently developed real estate analysis product, live at immofuchs.info.",
    link: "https://immofuchs.info"
  }
];

/* Illustrative TARA demo: a fictional customer portal. No company data. */
export const taraDemo = {
  system: "Fictional customer portal",
  elements: [
    { id: "user", name: "User device", kind: "External entity", x: 1, y: 50 },
    { id: "web", name: "Web portal", kind: "Process", x: 24, y: 50 },
    { id: "api", name: "API gateway", kind: "Process", x: 48, y: 28 },
    { id: "idp", name: "Identity provider", kind: "Process", x: 48, y: 72 },
    { id: "db", name: "Customer data", kind: "Data store", x: 77, y: 28 },
    { id: "ext", name: "Partner service", kind: "External entity", x: 79, y: 78 }
  ],
  flows: [["user", "web"], ["web", "api"], ["web", "idp"], ["api", "db"], ["api", "ext"]],
  threats: {
    user: [
      { s: "S", t: "Phishing of user credentials", impact: 3, feas: 4, m: "Phishing-resistant MFA, login anomaly detection" },
      { s: "R", t: "User disputes a submitted change", impact: 2, feas: 2, m: "Signed audit trail of user actions" }
    ],
    web: [
      { s: "T", t: "Injection via input fields", impact: 4, feas: 3, m: "Input validation, secure coding, SAST in pipeline" },
      { s: "I", t: "Session token leaked to third-party scripts", impact: 3, feas: 3, m: "HttpOnly cookies, strict CSP, script inventory" },
      { s: "D", t: "Bot traffic overloads login", impact: 3, feas: 4, m: "Rate limiting, WAF, CAPTCHA on anomalies" }
    ],
    api: [
      { s: "E", t: "Broken object-level authorisation", impact: 5, feas: 3, m: "Authorisation per object, API security tests" },
      { s: "T", t: "Manipulated requests between portal and API", impact: 4, feas: 2, m: "mTLS, request signing" },
      { s: "D", t: "Unbounded queries exhaust resources", impact: 3, feas: 3, m: "Quotas, pagination, timeouts" }
    ],
    idp: [
      { s: "S", t: "Token forgery with weak signing keys", impact: 5, feas: 2, m: "Strong key management, key rotation, HSM" },
      { s: "E", t: "Over-privileged default roles", impact: 4, feas: 3, m: "Least privilege, role reviews" }
    ],
    db: [
      { s: "I", t: "Customer data exposed through misconfigured backup", impact: 5, feas: 2, m: "Encryption at rest, backup access controls" },
      { s: "T", t: "Unauthorised change of customer records", impact: 4, feas: 2, m: "Integrity checks, restricted write paths" }
    ],
    ext: [
      { s: "S", t: "Impersonated partner sends forged data", impact: 4, feas: 2, m: "Mutual authentication, payload validation" },
      { s: "I", t: "Partner receives more data than needed", impact: 3, feas: 3, m: "Data minimisation, contract and interface review" }
    ]
  }
};

export const innovation = [
  { icon: "BrainCircuit", title: "AI in Cyber Security", text: "Exploring how AI can support threat identification and TARA: suggesting threat scenarios, checking completeness, keeping documentation consistent. The engineer stays in charge of every rating." },
  { icon: "Rocket", title: "Digital Product Innovation", text: "ImmoFuchs shows how I take a product from idea to release on my own: user problem, design, build, launch.", link: "https://immofuchs.info" },
  { icon: "Layers", title: "Future Architecture", text: "Secure and scalable architectures for the next generation of digital solutions: security by design, clear interfaces, operable cloud services." }
];

export const values = [
  { title: "Analytical thinking", text: "Understand the system before changing it." },
  { title: "Ownership & reliability", text: "Accountable from requirement to operation." },
  { title: "Continuous learning", text: "From office apprentice to cyber security engineer." },
  { title: "Cross-functional collaboration", text: "Business, IT, security and partners at one table." },
  { title: "Pragmatic problem solving", text: "The simplest solution that holds." }
];

export const quote = "I believe the best solutions emerge when different perspectives come together.";

export const certificates = [
  { year: 2018, name: "Professional Scrum Product Owner I" },
  { year: 2014, name: "Professional Scrum Master I" },
  { year: 2014, name: "Certified Project Management Associate (IPMA Level D), GPM" },
  { year: 2013, name: "ITIL Foundation 2011" },
  { year: null, name: "Bosch Confirmed Architect (Associate)" }
];

export const trainings = [
  { year: 2022, name: "Self-confidence and assertiveness" },
  { year: 2018, name: "Design thinking" },
  { year: 2017, name: "Communication & personality" },
  { year: 2016, name: "APIs (application programming interfaces), Daimler" },
  { year: 2015, name: "Agile projects with JIRA" },
  { year: 2015, name: "Hybris end user training (e-commerce)" },
  { year: 2012, name: "Houston IT" },
  { year: 2012, name: "Intershop (e-commerce) technical overview" }
];

/* Tailored CV focuses. Each has a matching PDF in /public/cv. */
export const focuses = [
  { id: "security", label: "Cyber Security", file: "/cv/Engin-Celenk-CV-Cyber-Security.pdf",
    headline: "Cyber Security Engineer with an architecture and delivery background",
    profile: "Cyber security engineer at Bosch Digital, focused on threat analysis and risk assessment (TARA). More than a decade of solution architecture and solution management in corporate IT gives me a clear view of how systems are built, operated and attacked.",
    domains: ["security", "architecture", "management"] },
  { id: "architecture", label: "IT Architecture", file: "/cv/Engin-Celenk-CV-IT-Architecture.pdf",
    headline: "IT Solution Architect for secure digital platforms",
    profile: "Solution architect for digital business and customer experience platforms at Bosch, TRUMPF and Daimler, now working in cyber security. I design integrations that teams can operate and that are secure by design.",
    domains: ["architecture", "security", "management"] },
  { id: "innovation", label: "Technology & Innovation", file: "/cv/Engin-Celenk-CV-Technology-Innovation.pdf",
    headline: "Technology professional connecting security, architecture and AI",
    profile: "I connect technology, security and business. Next to my role as cyber security engineer at Bosch Digital, I build digital products with AI, such as ImmoFuchs, and explore how AI can support security work.",
    domains: ["ai", "architecture", "security"] }
];
