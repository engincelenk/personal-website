/* Knowledge used by "Ask my portfolio" and "Challenge me".
   Everything here must be backed by the CV. */

// level: 1–4 (CV scale). domain: security | architecture | management | ai
export const skills = [
  { d: "security", l: 4, n: "Cyber security", keys: ["cyber security", "cybersecurity", "it security", "information security", "security engineer", "security", "infosec"], ev: "Cyber security engineer at Bosch Digital since 01/2024." },
  { d: "security", l: 4, n: "TARA & risk assessment", keys: ["tara", "threat analysis", "threat model", "threat modeling", "threat modelling", "risk assessment", "risk analysis", "iso 21434", "iso/sae 21434", "21434", "stride"], ev: "Threat analysis and risk assessment (TARA) in projects at Bosch Digital." },
  { d: "security", l: 3, n: "Security by design & governance", keys: ["security by design", "secure by design", "security architecture", "security requirements", "security governance", "governance", "security concept"], ev: "Brings architecture experience into security: risks are addressed in the design and responsibilities are made explicit." },
  { d: "architecture", l: 4, n: "Solution architecture", keys: ["solution architect", "solution architecture", "architect", "architecture", "system design", "enterprise architecture", "technology strategy"], ev: "Lead architect at Bosch Central IT (2019–2021), solution architect at TRUMPF and Daimler, Bosch Confirmed Architect." },
  { d: "architecture", l: 4, n: "E-commerce & customer experience", keys: ["e-commerce", "ecommerce", "customer experience", "cx", "webshop", "online shop", "hybris", "sap commerce", "intershop", "portal", "website", "digital business"], ev: "mymercedes.me, mercedes-benz.com, MyTRUMPF, Bosch Smart Home website, ATMO e-commerce." },
  { d: "architecture", l: 3, n: "Integration & APIs", keys: ["api", "apis", "integration", "interfaces", "soa", "middleware", "microservices"], ev: "API training at Daimler, master's work and publication on monitoring SOA platforms." },
  { d: "architecture", l: 3, n: "Cloud & SaaS", keys: ["cloud", "saas", "azure", "aws", "cloud computing"], ev: "Audit SaaS, media asset management with Sharedien and eLAKE at Bosch Central IT." },
  { d: "architecture", l: 2, n: "Development (C#, Java, Objective-C)", keys: ["c#", "java", "objective-c", "ios", "software development"], ev: "C# tools at Bosch Gasoline Systems, iOS app prototype in the master's thesis." },
  { d: "architecture", l: 2, n: "IBM mainframe", keys: ["mainframe", "z/os"], ev: "Solution architect for technologies in the IBM mainframe area at Daimler." },
  { d: "management", l: 4, n: "End-to-end responsibility", keys: ["end-to-end", "end to end", "e2e", "ownership", "application owner", "solution manager", "service owner", "product owner"], ev: "End-to-end responsibility for Bosch's worldwide transport management application (2021–2023)." },
  { d: "management", l: 4, n: "Project management", keys: ["project management", "project manager", "project lead", "pmo", "ipma", "program management", "delivery"], ev: "IT project manager at Daimler (mercedes-benz.com), IPMA Level D (GPM)." },
  { d: "management", l: 4, n: "Agile & Scrum", keys: ["agile", "scrum", "kanban", "scrum master", "safe", "jira", "sprint"], ev: "Professional Scrum Master I and Professional Scrum Product Owner I." },
  { d: "management", l: 4, n: "Stakeholder alignment", keys: ["stakeholder", "stakeholders", "communication", "negotiation", "change management", "workshops"], ev: "Worked between business, IT and partners at Bosch, Daimler and TRUMPF; training in communication and negotiation." },
  { d: "management", l: 4, n: "Logistics & transport", keys: ["logistics", "transport", "tms", "supply chain", "supplyon"], ev: "IT solution manager in logistics at Bosch Digital with SupplyOn and Eurolog." },
  { d: "management", l: 3, n: "Operations & ITIL", keys: ["itil", "operations", "it service management", "service management", "incident", "sla"], ev: "ITIL Foundation; running a globally used application." },
  { d: "management", l: 3, n: "Vendor management", keys: ["vendor", "vendors", "supplier", "suppliers", "external partners", "service providers"], ev: "Steering external partners such as SupplyOn and Eurolog." },
  { d: "management", l: 3, n: "Test management", keys: ["test management", "testing", "quality assurance", "qa", "acceptance"], ev: "Test and acceptance responsibility in e-commerce projects." },
  { d: "ai", l: 3, n: "AI-assisted work", keys: ["ai", "artificial intelligence", "llm", "generative ai", "genai", "machine learning"], ev: "Built ImmoFuchs and this portfolio with AI assistance." },
  { d: "ai", l: 3, n: "Product development", keys: ["product development", "product management", "innovation", "mvp", "startup"], ev: "Developed ImmoFuchs, a real estate analysis product, end to end." }
];

// Mentioned in job posts but not a claimed strength. Keeps the match honest.
export const gaps = ["python", "golang", "rust", "c++", "kotlin", "kubernetes", "terraform", "ansible", "embedded", "autosar", "pentest", "penetration test", "penetration testing", "red team", "malware analysis", "reverse engineering", "data science", "tensorflow", "pytorch", "forensics"];

export const facts = [
  { q: "What is his experience in TARA?", k: ["tara", "threat", "risk", "stride", "21434", "assessment"],
    a: "Since January 2024 Engin has worked as a cyber security engineer at Bosch Digital, doing threat analysis and risk assessment (TARA) in digital business projects. He models the system, identifies assets, applies STRIDE, rates risks by impact and feasibility and makes each measure traceable to a risk. The Showcase section has an interactive example." },
  { q: "How does his architecture background support cybersecurity?", k: ["architecture", "architect", "background", "support", "help", "design"],
    a: "Engin spent years as a solution architect at Bosch, TRUMPF and Daimler. He knows how integrations, SaaS components and customer platforms are built and operated, which is exactly where attack paths come from. That lets him bring security into design decisions instead of adding it at the end." },
  { q: "What makes his profile different?", k: ["different", "unique", "special", "why", "stand", "difference", "hire"],
    a: "The combination. Most people come from one side: architecture, delivery or security. Engin has done all three in corporate IT: lead architect, end-to-end solution manager for a worldwide application, and now cyber security engineer. He can talk to a managing director, a project team and a security lead in their own terms." },
  { q: "What does he do today?", k: ["today", "current", "currently", "now", "role", "job"],
    a: "Cyber security engineer at Bosch Digital in Stuttgart since January 2024: security in digital business projects and TARA." },
  { q: "Which projects has he worked on?", k: ["projects", "project", "worked", "mercedes", "trumpf", "smart", "home", "platform"],
    a: "Among others: the Bosch Smart Home website, ATMO e-commerce, media asset management with Sharedien, Audit SaaS and eLAKE at Bosch; MyTRUMPF at TRUMPF; mymercedes.me and mercedes-benz.com at Daimler; and Bosch's worldwide transport management application." },
  { q: "Which certificates does he hold?", k: ["certificate", "certificates", "certified", "certification", "ipma", "itil", "scrum"],
    a: "IPMA Level D (GPM), Professional Scrum Master I, Professional Scrum Product Owner I, ITIL Foundation and Bosch Confirmed Architect (Associate)." },
  { q: "What is his educational background?", k: ["education", "study", "studies", "degree", "master", "bachelor", "university", "school"],
    a: "M.Sc. and B.Sc. in Business Informatics from Reutlingen University (master's grade 1.7, faculty award, one publication), software engineering studies at Heilbronn University and an apprenticeship as office administrator. He came to Germany in 1994 and went through the school system step by step." },
  { q: "Does he use AI?", k: ["ai", "artificial", "llm", "claude", "chatgpt", "innovation"],
    a: "Yes, as a tool. He built ImmoFuchs and this portfolio with AI assistance and is exploring AI support for threat identification and TARA. He reviews every result himself." },
  { q: "Which languages does he speak?", k: ["language", "languages", "speak", "german", "english", "turkish"],
    a: "German and Turkish at native level, very good English, basic French." },
  { q: "Is he hands-on or management?", k: ["hands-on", "technical", "manager", "management", "engineer", "coding", "code"],
    a: "Both, deliberately. He has developed in C#, Java and Objective-C, worked as architect and security engineer, and led projects and a worldwide application end to end." },
  { q: "Where is he based?", k: ["where", "based", "location", "remote", "relocate", "live"],
    a: "In Pleidelsheim near Stuttgart, Germany. Location and remote work are best discussed directly." },
  { q: "How can I contact him?", k: ["contact", "email", "reach", "call", "phone", "talk", "interview"],
    a: "By email at engincelenk@web.de. The contact section also has his phone number and the tailored CVs." }
];

export const sampleRoles = {
  security: `Senior Cyber Security Engineer – Digital Products
You own the security of our digital products from concept to operation. You perform threat analysis and risk assessments (TARA, STRIDE), define security requirements and guide architecture decisions following security by design.
You work closely with solution architects, product owners and external vendors in an agile setup with Scrum and JIRA. Experience with cloud and SaaS solutions and APIs is required. Python or penetration testing skills are a plus.`,
  architecture: `IT Solution Architect – Customer Experience Platform
You design the target architecture of our e-commerce and customer experience platform and own integration via APIs. You align stakeholders across business and IT, steer external vendors and make sure the platform is secure by design and ready for operations (ITIL).
Experience with cloud and SaaS, agile delivery and project management is expected. Kubernetes knowledge is a plus.`
};
