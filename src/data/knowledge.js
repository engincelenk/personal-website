/* Knowledge used by "Ask my portfolio" and "Challenge me". Backed by the CV.
   keys: English and German terms found in job posts. */

// level: 1–4 (CV scale). domain: security | architecture | management | ai
export const skills = [
  { d: "security", l: 4, n: { en: "Cyber security", de: "Cyber Security" },
    keys: ["cyber security", "cybersecurity", "it security", "information security", "security engineer", "security", "infosec", "it-sicherheit", "informationssicherheit", "sicherheit"],
    ev: { en: "Cyber security engineer at Bosch Digital since 01/2024.", de: "Cyber Security Engineer bei Bosch Digital seit 01/2024." } },
  { d: "security", l: 4, n: { en: "TARA & risk assessment", de: "TARA & Risikobewertung" },
    keys: ["tara", "threat analysis", "threat model", "threat modeling", "threat modelling", "risk assessment", "risk analysis", "iso 21434", "iso/sae 21434", "21434", "stride", "bedrohungsanalyse", "risikoanalyse", "risikobewertung"],
    ev: { en: "TARA for various projects and SAP within Bosch worldwide.", de: "TARA für verschiedene Projekte und SAP innerhalb von Bosch weltweit." } },
  { d: "security", l: 3, n: { en: "Security by design & governance", de: "Security by Design & Governance" },
    keys: ["security by design", "secure by design", "security architecture", "security requirements", "security governance", "governance", "security concept", "sicherheitsarchitektur", "sicherheitsanforderungen", "sicherheitskonzept"],
    ev: { en: "Brings architecture experience into security work.", de: "Bringt Architekturerfahrung in die Security-Arbeit ein." } },
  { d: "security", l: 3, n: { en: "Security frameworks & compliance", de: "Security-Frameworks & Compliance" },
    keys: ["nist", "nist csf", "owasp", "asvs", "samm", "iso 27001", "27001", "iso 27002", "nis2", "nis-2", "cyber resilience act", "cra", "iec 62443", "62443", "unece r155", "r155", "tisax", "mitre att&ck", "mitre", "zero trust", "cis controls", "bsi", "grundschutz", "gdpr", "dsgvo", "ai act", "ki-verordnung", "compliance"],
    ev: { en: "Works with NIST CSF, ISO 27001, OWASP, MITRE ATT&CK and current EU regulation such as NIS2 and CRA.", de: "Arbeitet mit NIST CSF, ISO 27001, OWASP, MITRE ATT&CK und aktueller EU-Regulierung wie NIS2 und CRA." } },
  { d: "architecture", l: 4, n: { en: "Solution architecture", de: "Solution-Architektur" },
    keys: ["solution architect", "solution architecture", "architect", "architecture", "system design", "enterprise architecture", "technology strategy", "architekt", "architektur", "lösungsarchitektur", "it-architektur"],
    ev: { en: "Lead architect at Bosch Central IT, solution architect at TRUMPF and Daimler, Bosch Confirmed Architect.", de: "Lead Architect bei Bosch Central IT, Solution Architect bei TRUMPF und Daimler, Bosch Confirmed Architect." } },
  { d: "architecture", l: 4, n: { en: "E-commerce & customer experience", de: "E-Commerce & Customer Experience" },
    keys: ["e-commerce", "ecommerce", "customer experience", "cx", "webshop", "online shop", "onlineshop", "hybris", "sap commerce", "intershop", "portal", "website", "digital business"],
    ev: { en: "mymercedes.me, mercedes-benz.com, MyTRUMPF, Bosch Smart Home website, ATMO e-commerce.", de: "mymercedes.me, mercedes-benz.com, MyTRUMPF, Bosch Smart Home Website, ATMO E-Commerce." } },
  { d: "architecture", l: 3, n: { en: "Integration & APIs", de: "Integration & APIs" },
    keys: ["api", "apis", "integration", "interfaces", "soa", "middleware", "microservices", "schnittstelle", "schnittstellen"],
    ev: { en: "API training at Daimler, master's work and publication on SOA monitoring.", de: "API-Training bei Daimler, Masterarbeit und Publikation zu SOA-Monitoring." } },
  { d: "architecture", l: 3, n: { en: "Cloud & SaaS", de: "Cloud & SaaS" },
    keys: ["cloud", "saas", "azure", "aws", "cloud computing", "microservices", "microservice", "micro services", "cloud-native", "cloud native"],
    ev: { en: "Microservice, cloud and SaaS architectures for Bosch projects worldwide.", de: "Microservice-, Cloud- und SaaS-Architekturen für Bosch-Projekte weltweit." } },
  { d: "architecture", l: 2, n: { en: "Development (C#, Java, Objective-C)", de: "Entwicklung (C#, Java, Objective-C)" },
    keys: ["c#", "java", "objective-c", "ios", "software development", "softwareentwicklung"],
    ev: { en: "C# tools at Bosch, iOS app prototype in the master's thesis.", de: "C#-Tools bei Bosch, iOS-App-Prototyp in der Masterarbeit." } },
  { d: "architecture", l: 2, n: { en: "IBM mainframe", de: "IBM Mainframe" },
    keys: ["mainframe", "z/os"],
    ev: { en: "Solution architect in the IBM mainframe area at Daimler.", de: "Solution Architect im IBM-Mainframe-Umfeld bei Daimler." } },
  { d: "management", l: 4, n: { en: "End-to-end responsibility", de: "End-to-End-Verantwortung" },
    keys: ["end-to-end", "end to end", "e2e", "ownership", "application owner", "solution manager", "service owner", "product owner", "gesamtverantwortung", "anwendungsverantwortung"],
    ev: { en: "Overall responsibility for Bosch's central IT solution for transport management worldwide (NGTM).", de: "Gesamtverantwortung für die zentrale IT-Lösung von Bosch für das weltweite Transportmanagement (NGTM)." } },
  { d: "management", l: 4, n: { en: "Project management", de: "Projektmanagement" },
    keys: ["project management", "project manager", "project lead", "pmo", "ipma", "program management", "delivery", "projektmanagement", "projektleiter", "projektleitung", "projektmanager"],
    ev: { en: "IT project manager at Daimler (mercedes-benz.com), IPMA Level D.", de: "IT-Projektmanager bei Daimler (mercedes-benz.com), IPMA Level D." } },
  { d: "management", l: 4, n: { en: "Agile & Scrum", de: "Agilität & Scrum" },
    keys: ["agile", "agil", "scrum", "kanban", "scrum master", "safe", "jira", "sprint"],
    ev: { en: "Professional Scrum Master I and Product Owner I.", de: "Professional Scrum Master I und Product Owner I." } },
  { d: "management", l: 4, n: { en: "Budget & project responsibility", de: "Budget- & Projektverantwortung" },
    keys: ["budget", "budget responsibility", "single point of contact", "spoc", "contracting", "sourcing", "budgetverantwortung", "ansprechpartner", "beauftragung"],
    ev: { en: "Single point of contact on the IT side with full budget and project responsibility, contracting further roles.", de: "Single Point of Contact auf IT-Seite mit voller Budget- und Projektverantwortung, Beauftragung weiterer Rollen." } },
  { d: "security", l: 3, n: { en: "Security mentoring", de: "Security-Mentoring" },
    keys: ["mentoring", "mentor", "coaching", "awareness", "enablement", "schulung"],
    ev: { en: "Cyber security mentoring within the Bosch Group.", de: "Cyber-Security-Mentoring innerhalb der Bosch-Gruppe." } },
  { d: "management", l: 4, n: { en: "Stakeholder alignment", de: "Stakeholder-Management" },
    keys: ["stakeholder", "stakeholders", "communication", "negotiation", "change management", "workshops", "kommunikation", "verhandlung"],
    ev: { en: "Between business, IT and partners at Bosch, Daimler and TRUMPF.", de: "Zwischen Fachbereich, IT und Partnern bei Bosch, Daimler und TRUMPF." } },
  { d: "management", l: 4, n: { en: "Logistics & transport", de: "Logistik & Transport" },
    keys: ["logistics", "transport", "tms", "transport management", "supply chain", "supplyon", "ngtm", "logistik", "lieferkette", "transportmanagement", "logistiklösungen"],
    ev: { en: "Expert for logistics IT solutions: IT solution manager for Bosch's worldwide transport management (NGTM).", de: "Experte für Logistiklösungen: IT Solution Manager für das weltweite Transportmanagement von Bosch (NGTM)." } },
  { d: "management", l: 3, n: { en: "Operations & ITIL", de: "Betrieb & ITIL" },
    keys: ["itil", "operations", "it service management", "service management", "incident", "sla", "betrieb", "it-betrieb"],
    ev: { en: "ITIL Foundation; running a globally used application.", de: "ITIL Foundation; Betrieb einer weltweit genutzten Anwendung." } },
  { d: "management", l: 3, n: { en: "Vendor management", de: "Dienstleistersteuerung" },
    keys: ["vendor", "vendors", "supplier", "suppliers", "external partners", "service providers", "dienstleister", "dienstleistersteuerung", "lieferanten"],
    ev: { en: "Steering partners such as SupplyOn and Eurolog.", de: "Steuerung von Partnern wie SupplyOn und Eurolog." } },
  { d: "management", l: 3, n: { en: "Test management", de: "Testmanagement" },
    keys: ["test management", "testing", "quality assurance", "qa", "acceptance", "testmanagement", "qualitätssicherung", "abnahme"],
    ev: { en: "Test and acceptance responsibility in e-commerce projects.", de: "Test- und Abnahmeverantwortung in E-Commerce-Projekten." } },
  { d: "ai", l: 3, n: { en: "AI-assisted work", de: "KI-gestütztes Arbeiten" },
    keys: ["ai", "artificial intelligence", "llm", "generative ai", "genai", "machine learning", "ki", "künstliche intelligenz"],
    ev: { en: "Built ImmoFuchs and this portfolio with AI.", de: "ImmoFuchs und dieses Portfolio mit KI gebaut." } },
  { d: "ai", l: 3, n: { en: "Agentic architectures", de: "Agentische Architekturen" },
    keys: ["agentic", "agentic ai", "ai agents", "ai agent", "multi-agent", "agent architecture", "agentic architecture", "agentic architectures", "mcp", "model context protocol", "agentische", "ki-agenten", "agentenbasiert", "agentensysteme"],
    ev: { en: "Familiar with agentic AI architectures.", de: "Vertraut mit agentischen KI-Architekturen." } },
  { d: "ai", l: 3, n: { en: "Product development", de: "Produktentwicklung" },
    keys: ["product development", "product management", "innovation", "mvp", "startup", "produktentwicklung", "produktmanagement"],
    ev: { en: "Developed ImmoFuchs end to end.", de: "ImmoFuchs von A bis Z entwickelt." } }
];

// Mentioned in job posts but not a claimed strength. Keeps the match honest.
export const gaps = ["python", "golang", "rust", "c++", "kotlin", "kubernetes", "terraform", "ansible", "embedded", "autosar", "pentest", "penetration test", "penetration testing", "penetrationstest", "red team", "malware analysis", "reverse engineering", "data science", "tensorflow", "pytorch", "forensics", "forensik"];

export const facts = [
  { q: { en: "What is his experience in TARA?", de: "Welche Erfahrung hat er mit TARA?" }, k: ["tara", "threat", "risk", "stride", "21434", "assessment", "bedrohung", "risiko"],
    a: { en: "Since 2024 he has carried out TARAs for various projects and SAP within Bosch worldwide, implements security concepts according to the cyber security policy and mentors colleagues in cyber security.", de: "Seit 2024 führt er TARAs für verschiedene Projekte und SAP innerhalb von Bosch weltweit durch, setzt Security-Konzepte gemäß Cyber Security Policy um und ist Cyber-Security-Mentor in der Bosch-Gruppe." } },
  { q: { en: "How does architecture help his security work?", de: "Wie hilft ihm die Architektur in der Security?" }, k: ["architecture", "architect", "background", "support", "help", "design", "architektur", "architekt", "hilft"],
    a: { en: "Years as lead and solution architect at Bosch, TRUMPF and Daimler: he knows how systems are built, so he sees where they can be attacked.", de: "Jahre als Lead und Solution Architect bei Bosch, TRUMPF und Daimler: Er weiß, wie Systeme gebaut sind, und sieht deshalb, wo sie angreifbar sind." } },
  { q: { en: "What makes his profile different?", de: "Was macht sein Profil besonders?" }, k: ["different", "unique", "special", "why", "stand", "difference", "hire", "besonders", "anders", "warum", "unterschied"],
    a: { en: "Architect, E2E solution manager and security engineer in one person, all in corporate IT.", de: "Architekt, E2E Solution Manager und Security Engineer in einer Person, alles in der Konzern-IT." } },
  { q: { en: "What does he do today?", de: "Was macht er heute?" }, k: ["today", "current", "currently", "now", "role", "job", "heute", "aktuell", "derzeit", "rolle"],
    a: { en: "Cyber Security Engineer at Bosch Digital, Stuttgart, since January 2024.", de: "Cyber Security Engineer bei Bosch Digital in Stuttgart, seit Januar 2024." } },
  { q: { en: "Which projects?", de: "Welche Projekte?" }, k: ["projects", "project", "worked", "mercedes", "trumpf", "smart", "home", "platform", "projekte", "projekt", "plattform"],
    a: { en: "Bosch Smart Home website, ATMO e-commerce, Bosch's worldwide transport management NGTM, MyTRUMPF, mercedes-benz.com, mymercedes.me.", de: "Bosch Smart Home Website, ATMO E-Commerce, das weltweite Transportmanagement NGTM von Bosch, MyTRUMPF, mercedes-benz.com, mymercedes.me." } },
  { q: { en: "Logistics experience?", de: "Erfahrung in der Logistik?" }, k: ["logistics", "logistik", "transport", "tms", "ngtm", "supply", "supplyon", "eurolog", "transportmanagement"],
    a: { en: "Yes, he is an expert for logistics IT solutions: from 2021 to 2023 he had overall responsibility for Bosch's central IT solution for transport management worldwide (NGTM), with SupplyOn and Eurolog.", de: "Ja, er ist Experte für Logistiklösungen: Von 2021 bis 2023 hatte er die Gesamtverantwortung für die zentrale IT-Lösung von Bosch für das weltweite Transportmanagement (NGTM), mit SupplyOn und Eurolog." } },
  { q: { en: "Which certificates?", de: "Welche Zertifikate?" }, k: ["certificate", "certificates", "certified", "certification", "ipma", "itil", "scrum", "zertifikat", "zertifikate", "zertifiziert"],
    a: { en: "Bosch Confirmed Architect, IPMA Level D, PSM I, PSPO I, ITIL Foundation.", de: "Bosch Confirmed Architect, IPMA Level D, PSM I, PSPO I, ITIL Foundation." } },
  { q: { en: "What did he study?", de: "Was hat er studiert?" }, k: ["education", "study", "studies", "studied", "degree", "master", "bachelor", "university", "school", "msc", "studium", "studiert", "abschluss", "hochschule", "bildung"],
    a: { en: "M.Sc. and B.Sc. Computer Science (Wirtschaftsinformatik), Reutlingen University (M.Sc. grade 1.7), plus Software Engineering at Heilbronn University.", de: "M.Sc. und B.Sc. Informatik (Wirtschaftsinformatik) an der Hochschule Reutlingen (M.Sc. Note 1,7), dazu Software Engineering an der Hochschule Heilbronn." } },
  { q: { en: "Does he know agentic AI?", de: "Kennt er agentische KI?" }, k: ["agentic", "agent", "agents", "agenten", "agentische", "agentisch", "mcp", "multi-agent"],
    a: { en: "Yes, he is familiar with agentic AI architectures and uses AI agents in his own work, for example to build this portfolio.", de: "Ja, er ist vertraut mit agentischen KI-Architekturen und nutzt KI-Agenten in der eigenen Arbeit, zum Beispiel für dieses Portfolio." } },
  { q: { en: "Does he code?", de: "Programmiert er selbst?" }, k: ["hands-on", "technical", "coding", "code", "developer", "programming", "c#", "java", "programmiert", "programmieren", "entwickler"],
    a: { en: "Yes: C#, Java, Objective-C and SAP customizing. Today he builds tools with AI, such as ImmoFuchs.", de: "Ja: C#, Java, Objective-C und SAP-Customizing. Heute baut er Tools mit KI, zum Beispiel ImmoFuchs." } },
  { q: { en: "Languages?", de: "Sprachen?" }, k: ["language", "languages", "speak", "german", "english", "turkish", "sprache", "sprachen", "englisch", "deutsch", "türkisch"],
    a: { en: "German and Turkish native, English fluent and used daily at work.", de: "Deutsch und Türkisch als Muttersprache, Englisch fließend und täglich im Job." } },
  { q: { en: "Where is he based?", de: "Wo wohnt er?" }, k: ["where", "based", "location", "remote", "relocate", "live", "wo", "wohnt", "standort", "umzug"],
    a: { en: "Stuttgart region, Germany.", de: "In der Region Stuttgart." } },
  { q: { en: "How to contact him?", de: "Wie erreiche ich ihn?" }, k: ["contact", "email", "reach", "call", "phone", "talk", "interview", "kontakt", "erreichen", "telefon", "anrufen", "gespräch"],
    a: { en: "Via the contact form at the bottom of the page or on LinkedIn.", de: "Über das Kontaktformular unten auf der Seite oder auf LinkedIn." } }
];

export const sampleRoles = {
  security: {
    en: `Senior Cyber Security Engineer – Digital Products
You own the security of our digital products from concept to operation. You perform threat analysis and risk assessments (TARA, STRIDE), define security requirements and guide architecture decisions following security by design.
You work closely with solution architects, product owners and external vendors in an agile setup with Scrum and JIRA. Experience with cloud and SaaS solutions and APIs is required. Python or penetration testing skills are a plus.`,
    de: `Senior Cyber Security Engineer (m/w/d) – Digitale Produkte
Sie verantworten die Sicherheit unserer digitalen Produkte von der Konzeption bis zum Betrieb. Sie erstellen Bedrohungs- und Risikoanalysen (TARA, STRIDE), definieren Sicherheitsanforderungen und begleiten Architekturentscheidungen nach Security by Design.
Sie arbeiten eng mit Architekten, Product Ownern und externen Dienstleistern in einem agilen Umfeld mit Scrum und JIRA. Erfahrung mit Cloud- und SaaS-Lösungen sowie Schnittstellen ist erforderlich. Python oder Penetrationstests sind ein Plus.`
  },
  architecture: {
    en: `IT Solution Architect – Customer Experience Platform
You design the target architecture of our e-commerce and customer experience platform and own integration via APIs. You align stakeholders across business and IT, steer external vendors and make sure the platform is secure by design and ready for operations (ITIL).
Experience with cloud and SaaS, agile delivery and project management is expected. Kubernetes knowledge is a plus.`,
    de: `IT Solution Architect (m/w/d) – Customer-Experience-Plattform
Sie entwerfen die Zielarchitektur unserer E-Commerce- und Customer-Experience-Plattform und verantworten die Integration über Schnittstellen. Sie stimmen Stakeholder aus Fachbereich und IT ab, steuern Dienstleister und sorgen dafür, dass die Plattform sicher und betriebsbereit ist (ITIL).
Erfahrung mit Cloud und SaaS, agiler Arbeitsweise und Projektmanagement wird erwartet. Kubernetes-Kenntnisse sind ein Plus.`
  }
};
