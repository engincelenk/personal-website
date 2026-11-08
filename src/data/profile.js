/* ------------------------------------------------------------------
   All content of the site lives here. Keep it short: every line is read
   by a recruiter in a few seconds. Facts come from Engin's CV.
------------------------------------------------------------------- */

export const person = {
  name: "Engin Celenk",
  degree: "M.Sc.",
  initials: "EC",
  roles: ["M.Sc. Business Informatics", "Cyber Security Engineer", "IT Architect"],
  location: "Stuttgart region, Germany",
  email: "engincelenk@web.de",
  phone: ["+49", "163", "685", "4373"], // shown only after a click
  linkedin: "", // e.g. "https://www.linkedin.com/in/…"
  github: "https://github.com/engincelenk",
  site: "https://ec.immofuchs.info",
  careerStart: "2012-03",
  languages: [
    { name: "German", level: "Native" },
    { name: "Turkish", level: "Native" },
    { name: "English", level: "Fluent · daily working language" }
  ]
};

export const hero = {
  title: ["I connect technology,", "security & business."],
  line: "IT through and through: from code to architecture to security."
};

/* Logos cropped from the original CV. */
export const logos = {
  bosch: { src: "/logos/bosch.png", name: "Bosch" },
  daimler: { src: "/logos/daimler.png", name: "Daimler" },
  protics: { src: "/logos/daimler-protics.png", name: "Daimler Protics" },
  tss: { src: "/logos/daimler-tss.png", name: "Daimler TSS" },
  trumpf: { src: "/logos/trumpf.png", name: "TRUMPF" },
  akzonobel: { src: "/logos/akzonobel.png", name: "AkzoNobel" },
  apsolut: { src: "/logos/apsolut.png", name: "apsolut" },
  reutlingen: { src: "/logos/hs-reutlingen.png", name: "Reutlingen University" },
  heilbronn: { src: "/logos/hs-heilbronn.png", name: "Heilbronn University" }
};
export const logoStrip = ["bosch", "daimler", "trumpf", "reutlingen", "heilbronn", "akzonobel"];

/* Career path, oldest first. Keep points to two or three. */
export const career = [
  { id: "protics", from: "2012-03", to: "2014-09", logo: "protics", short: "IT Consultant",
    role: "IT Consultant / IT Project Manager", org: "Daimler Protics GmbH", place: "Stuttgart",
    points: ["E-commerce", "End-to-end responsibility"], domains: ["management"] },
  { id: "daimler", from: "2014-10", to: "2017-08", logo: "daimler", short: "Project Manager & Architect",
    role: "IT (Senior) Project Manager / IT Solution Architect", org: "Daimler AG · IT Sales & Marketing", place: "Stuttgart",
    points: ["Project manager for mercedes-benz.com", "Customer experience & e-commerce for mymercedes.me", "Solution architect, IBM mainframe area"],
    projects: ["mercedes-benz.com", "mymercedes.me"], domains: ["management", "architecture"] },
  { id: "trumpf", from: "2017-09", to: "2019-04", logo: "trumpf", short: "Consultant & Architect",
    role: "IT (Senior) Consultant Digitalization & Solution Architect", org: "TRUMPF GmbH + Co. KG · IT Marketing & Sales", place: "Ditzingen",
    points: ["Customer experience platform", "Customer portal MyTRUMPF"], projects: ["MyTRUMPF"], domains: ["architecture", "management"] },
  { id: "bosch-arch", from: "2019-05", to: "2021-11", logo: "bosch", short: "Lead Solution Architect",
    role: "IT (Senior) Solution (Lead) Architect · Digital Business & CX", org: "Robert Bosch GmbH · Central IT", place: "Stuttgart",
    points: ["Lead architect for customer-facing digital platforms"], projects: ["Bosch Smart Home website", "ATMO e-commerce", "MAM with Sharedien", "Audit SaaS", "eLAKE"], domains: ["architecture"] },
  { id: "bosch-logistics", from: "2021-07", to: "2023-12", logo: "bosch", short: "IT Solution Manager",
    role: "IT Solution Manager in Logistics", org: "Bosch Digital · Robert Bosch GmbH", place: "Stuttgart",
    points: ["E2E responsibility for Bosch's central transport management application, worldwide", "Partners: SupplyOn & Eurolog"], domains: ["management"] },
  { id: "bosch-cse", from: "2024-01", to: null, logo: "bosch", short: "Cyber Security Engineer",
    role: "Cyber Security Engineer", org: "Bosch Digital · Robert Bosch GmbH", place: "Stuttgart",
    points: ["Security engineering in digital business projects", "Threat analysis & risk assessment (TARA)"], domains: ["security", "architecture"] }
];

/* Education staircase, bottom step first. */
export const education = [
  { id: "arrival", year: "1994", icon: "MapPin", short: "Arrival in Germany", title: "Arrival in Germany", text: "The first step." },
  { id: "grund", year: "", icon: "School", short: "Grundschule", title: "Grundschule", text: "Primary school." },
  { id: "haupt", year: "", icon: "School", short: "Hauptschule", title: "Hauptschule", text: "Secondary school." },
  { id: "werkreal", year: "", icon: "School", short: "Werkrealschule", title: "Werkrealschule", text: "Secondary school." },
  { id: "wg", year: "", icon: "School", short: "Wirtschafts­gymnasium", title: "Wirtschaftsgymnasium", text: "Business high school." },
  { id: "azubi", year: "2003", logo: "akzonobel", short: "Apprenticeship", title: "Apprenticeship · office administrator", text: "Akzo Nobel AG, Ludwigsburg · 2003–2005" },
  { id: "hhn", year: "2005", logo: "heilbronn", short: "Software Engineering", title: "Software Engineering studies", text: "Heilbronn University · 2005–2008",
    extra: { logo: "bosch", text: "Internship Bosch Gasoline Systems: two C# tools for LabCar test systems" } },
  { id: "bsc", year: "2009", logo: "reutlingen", short: "B.Sc.", title: "B.Sc. Business Informatics", text: "Reutlingen University · 2008–2009 · focus SAP SRM & BI",
    extra: { logo: "apsolut", text: "Thesis at apsolut: procurement KPIs in SAP NetWeaver BI 7.0" } },
  { id: "msc", year: "2012", logo: "reutlingen", short: "M.Sc. · 1.7", title: "M.Sc. Business Informatics · grade 1.7", text: "Reutlingen University · 2010–2012 · faculty award · publication on SOA monitoring",
    extra: { logo: "tss", text: "Thesis at Daimler TSS: iOS app on Sybase Unwired Platform" } }
];

/* Competence model. Short on purpose. */
export const domains = [
  { id: "security", icon: "ShieldCheck", title: "Cyber Security",
    keywords: ["Security Engineering", "TARA", "STRIDE", "Risk Assessment", "Governance"],
    evidence: ["Cyber Security Engineer, Bosch Digital, since 2024"] },
  { id: "architecture", icon: "Boxes", title: "Architecture",
    keywords: ["Solution Architecture", "System Design", "Integration", "Cloud & SaaS"],
    evidence: ["Lead Architect, Bosch Central IT", "Solution Architect at TRUMPF & Daimler", "Bosch Confirmed Architect"] },
  { id: "management", icon: "Workflow", title: "Management",
    keywords: ["Solution Management", "E2E Ownership", "Stakeholders", "Agile Delivery"],
    evidence: ["E2E owner of Bosch's worldwide TMS", "PM for mercedes-benz.com", "IPMA D · PSM I · PSPO I · ITIL"] },
  { id: "ai", icon: "Sparkles", title: "AI & Innovation",
    keywords: ["AI Applications", "AI-assisted Security", "Product Development"],
    evidence: ["Built ImmoFuchs", "Built this portfolio with AI"] }
];

export const values = ["Analytical thinking", "Ownership & reliability", "Continuous learning", "Cross-functional collaboration", "Pragmatic problem solving"];
export const quote = "The best solutions emerge when different perspectives come together.";

export const certificates = [
  { year: null, name: "Bosch Confirmed Architect", badge: "/logos/bosch-architect-badge.png" },
  { year: 2018, name: "Professional Scrum Product Owner I", short: "PSPO I" },
  { year: 2014, name: "Professional Scrum Master I", short: "PSM I" },
  { year: 2014, name: "IPMA Level D (GPM)", short: "IPMA D" },
  { year: 2013, name: "ITIL Foundation", short: "ITIL" }
];

export const trainings = [
  { year: 2022, name: "Self-confidence and assertiveness" },
  { year: 2018, name: "Design thinking" },
  { year: 2017, name: "Communication & personality" },
  { year: 2016, name: "APIs, Daimler" },
  { year: 2015, name: "Agile projects with JIRA" },
  { year: 2015, name: "Hybris (e-commerce)" },
  { year: 2012, name: "Houston IT" },
  { year: 2012, name: "Intershop (e-commerce)" }
];

export const sideProject = { name: "ImmoFuchs", link: "https://immofuchs.info", text: "Real estate analysis product, built independently with AI." };

/* Tailored CV focuses. Each has a matching PDF in /public/cv. */
export const focuses = [
  { id: "security", label: "Cyber Security", file: "/cv/Engin-Celenk-CV-Cyber-Security.pdf",
    headline: "Cyber Security Engineer with an architecture and delivery background",
    profile: "Cyber security engineer at Bosch Digital (TARA, security engineering). Over a decade of solution architecture and solution management in corporate IT at Bosch, TRUMPF and Daimler.",
    domains: ["security", "architecture", "management"] },
  { id: "architecture", label: "IT Architecture", file: "/cv/Engin-Celenk-CV-IT-Architecture.pdf",
    headline: "IT Solution Architect for secure digital platforms",
    profile: "Solution architect for digital business and customer experience platforms at Bosch, TRUMPF and Daimler, now in cyber security. Integrations that teams can operate and that are secure by design.",
    domains: ["architecture", "security", "management"] },
  { id: "innovation", label: "Technology & Innovation", file: "/cv/Engin-Celenk-CV-Technology-Innovation.pdf",
    headline: "IT professional connecting security, architecture and AI",
    profile: "Cyber security engineer at Bosch Digital with a background in architecture and solution management. Builds digital products with AI, such as ImmoFuchs.",
    domains: ["ai", "architecture", "security"] }
];
