/* ------------------------------------------------------------------
   ALL CONTENT LIVES HERE. Edit this file, the page rebuilds itself.
   Items marked TODO are placeholders: check or replace before going live.
------------------------------------------------------------------- */
window.PROFILE = {
  name: "Engin Celenk",                       // TODO confirm spelling
  role: "IT project, platform and security professional",
  location: "Germany",                         // TODO city
  languages: ["German", "Turkish", "English"],
  contact: {
    email: "",                                 // TODO add public email, e.g. "name@domain.com"
    linkedin: "",                              // TODO e.g. "https://www.linkedin.com/in/..."
    github: "https://github.com/engincelenk",
    cv: "Engin-Celenk-CV.pdf"                  // TODO put the PDF next to index.html
  },
  // Optional: URL of a small proxy that forwards questions to an LLM. Leave empty to stay fully offline.
  askEndpoint: "",

  groups: [
    { id: "pm", label: "IT project management",
      blurb: "Getting complex IT work delivered across teams, budgets and stakeholders." },
    { id: "platform", label: "Platform management",
      blurb: "Running internal platforms as products with clear owners, roadmaps and service levels." },
    { id: "arch", label: "Solution architecture",
      blurb: "Turning requirements into designs that integrate, scale and can be explained." },
    { id: "sec", label: "Cybersecurity engineering",
      blurb: "Building security in early instead of bolting it on at the end." },
    { id: "build", label: "Digital product building",
      blurb: "Shipping small, useful tools end to end, from idea to live site." }
  ],

  // level: 1 working knowledge ... 5 deep expertise.   TODO verify every level.
  skills: [
    { g: "pm", n: "Stakeholder management", l: 5, keys: ["stakeholder"], ev: "Aligning business, IT and security interests in large corporate programs." },
    { g: "pm", n: "Agile and hybrid delivery", l: 4, keys: ["agile", "scrum", "kanban", "safe", "hybrid"], ev: "Scrum and hybrid plans depending on what the work needs." },
    { g: "pm", n: "Planning and budgeting", l: 4, keys: ["budget", "planning", "resource planning", "forecast"], ev: "Scope, cost and capacity plans for multi-team IT work." },
    { g: "pm", n: "Risk and issue management", l: 4, keys: ["risk", "issue management", "mitigation"], ev: "Early risk logs with owners and decisions, not just lists." },
    { g: "pm", n: "Vendor and supplier steering", l: 3, keys: ["vendor", "supplier", "procurement", "outsourcing"], ev: "Steering external partners against clear acceptance criteria." },
    { g: "pm", n: "Reporting to leadership", l: 4, keys: ["reporting", "steering committee", "executive", "status report"], ev: "Short status views that lead to decisions." },
    { g: "pm", n: "Project management (PMP, PRINCE2 style)", l: 4, keys: ["project management", "project manager", "pmo", "pmp", "prince2", "program management"], ev: "Structured delivery from initiation to handover." },

    { g: "platform", n: "Platform ownership", l: 4, keys: ["platform", "platform management", "platform owner", "product owner"], ev: "Treating a platform as a product: users, roadmap, adoption." },
    { g: "platform", n: "Cloud platforms", l: 4, keys: ["cloud", "azure", "aws", "gcp", "multi-cloud"], ev: "Operating and governing workloads on public cloud." },
    { g: "platform", n: "Service management (ITIL)", l: 3, keys: ["itil", "service management", "sla", "incident", "service desk"], ev: "Service levels, change and incident processes that teams can live with." },
    { g: "platform", n: "CI/CD and automation", l: 3, keys: ["ci/cd", "pipeline", "devops", "automation", "jenkins", "gitlab", "github actions"], ev: "Repeatable build and release paths." },
    { g: "platform", n: "Platform governance and cost", l: 4, keys: ["governance", "finops", "cost optimization", "compliance", "policy"], ev: "Guardrails that keep platforms safe, compliant and affordable." },
    { g: "platform", n: "Team onboarding and enablement", l: 4, keys: ["onboarding", "enablement", "adoption", "self-service"], ev: "Making it easy for teams to start on the platform." },

    { g: "arch", n: "Solution design", l: 5, keys: ["solution architecture", "solution architect", "architecture", "solution design", "design"], ev: "End-to-end designs from requirements to deployable building blocks." },
    { g: "arch", n: "Integration and APIs", l: 4, keys: ["api", "rest", "integration", "microservices", "event-driven", "middleware"], ev: "Connecting systems through clear, versioned interfaces." },
    { g: "arch", n: "Cloud-native patterns", l: 4, keys: ["cloud-native", "container", "docker", "serverless", "kubernetes"], ev: "Patterns for resilient, scalable workloads." },
    { g: "arch", n: "Architecture documentation (C4, arc42, ADRs)", l: 4, keys: ["c4", "arc42", "adr", "architecture decision", "documentation", "togaf"], ev: "Decisions written down so the next team understands why." },
    { g: "arch", n: "Non-functional requirements", l: 4, keys: ["non-functional", "scalability", "availability", "performance", "resilience"], ev: "Making availability, performance and security explicit early." },
    { g: "arch", n: "Data and identity flows", l: 3, keys: ["data architecture", "data flow", "data model", "database"], ev: "Where data lives, who touches it, and how it moves." },

    { g: "sec", n: "Threat modelling", l: 4, keys: ["threat model", "stride", "attack surface", "risk assessment"], ev: "Finding design weaknesses before code exists." },
    { g: "sec", n: "Identity and access management", l: 4, keys: ["iam", "identity", "access management", "sso", "oauth", "oidc", "saml", "zero trust", "rbac"], ev: "Least privilege and strong identity as the default." },
    { g: "sec", n: "Secure development lifecycle", l: 4, keys: ["secure sdlc", "devsecops", "sast", "dast", "code review", "secure coding", "owasp"], ev: "Security checks inside the pipeline instead of after it." },
    { g: "sec", n: "Vulnerability and patch management", l: 3, keys: ["vulnerability", "patch", "cve", "penetration", "pentest"], ev: "Prioritizing what matters and closing it on time." },
    { g: "sec", n: "Cloud and network security", l: 4, keys: ["cloud security", "network security", "firewall", "segmentation", "encryption", "tls", "key management"], ev: "Segmentation, encryption and hardened baselines." },
    { g: "sec", n: "Security standards and compliance", l: 3, keys: ["iso 27001", "27001", "nis2", "bsi", "grundschutz", "tisax", "gdpr", "dsgvo", "soc 2", "nist"], ev: "Translating standards into concrete controls." },
    { g: "sec", n: "Incident response", l: 3, keys: ["incident response", "soc", "siem", "forensic", "detection"], ev: "Playbooks and communication when something breaks." },

    { g: "build", n: "AI-assisted development", l: 4, keys: ["ai", "llm", "generative", "claude", "prompt", "machine learning", "artificial intelligence", "ki"], ev: "Using LLMs to design, build and test tools much faster." },
    { g: "build", n: "Web apps (HTML, CSS, JavaScript)", l: 3, keys: ["javascript", "html", "css", "web app", "frontend", "typescript", "react"], ev: "Small browser tools that run without a backend." },
    { g: "build", n: "Real estate and proptech", l: 3, keys: ["real estate", "proptech", "immobilien", "property"], ev: "Calculators and tools for the German property market." },
    { g: "build", n: "Product thinking and marketing", l: 3, keys: ["product management", "marketing", "seo", "go-to-market", "positioning", "user research"], ev: "Starting from a user problem and shipping a clear message." }
  ],

  // Mentioned in job posts but NOT a claimed strength. Used by the Fit Lab to stay honest.
  gaps: ["sap", "salesforce", "java", "python", "c++", "c#", ".net", "golang", "rust", "terraform", "ansible", "tensorflow", "pytorch", "data science", "mainframe", "cobol", "embedded", "autosar", "kubernetes certification"],

  lenses: [
    { id: "all", label: "Everything", focus: ["pm", "platform", "arch", "sec", "build"],
      head: "I connect IT delivery, platforms, architecture and security.",
      sub: "Four disciplines that usually sit in different teams, in one person. Choose a lens to see the page from one angle." },
    { id: "pm", label: "Project lead", focus: ["pm", "platform"],
      head: "I get complicated IT programs delivered.",
      sub: "Stakeholders, budgets, risks and teams, kept moving toward a date that holds." },
    { id: "platform", label: "Platform owner", focus: ["platform", "pm"],
      head: "I run internal platforms like products.",
      sub: "Clear owners, a roadmap, service levels and teams who want to use it." },
    { id: "arch", label: "Architect", focus: ["arch", "sec"],
      head: "I design solutions that integrate and last.",
      sub: "From requirements to documented building blocks, with security and operations in the room." },
    { id: "sec", label: "Security engineer", focus: ["sec", "arch"],
      head: "I build security into the design, not around it.",
      sub: "Threat models, identity, secure pipelines and controls that map to standards." },
    { id: "build", label: "Builder", focus: ["build", "arch"],
      head: "I ship small digital products end to end.",
      sub: "Idea, build, launch. Real tools for real users, made faster with AI." }
  ],

  // TODO: replace with your real positions, dates and results.
  experience: [
    { when: "Today", org: "Bosch Digital", title: "IT project and platform management",   // TODO exact title and start year
      tags: ["pm", "platform", "arch", "sec"],
      points: ["Delivers and steers IT projects and platform services inside a global industrial technology company.",
               "Works between business, architecture and security teams to keep designs practical and safe."] },
    { when: "Earlier", org: "[Previous employer]", title: "[Role: solution architecture]",
      tags: ["arch"], points: ["[Add one concrete result with a number.]"] },
    { when: "Earlier", org: "[Previous employer]", title: "[Role: cybersecurity engineering]",
      tags: ["sec"], points: ["[Add one concrete result with a number.]"] }
  ],

  projects: [
    { name: "immofuchs.info", tags: ["build"], status: "Live",
      text: "A free calculator for the German real estate market that runs in the browser. No sign-up, no data leaves the device.",
      link: "https://immofuchs.info" },
    { name: "AI consulting for companies", tags: ["build", "arch", "sec"], status: "In planning",
      text: "A practical offer for businesses that want to use AI safely: where to start, what to avoid, how to roll it out.",
      link: "" },
    { name: "This site", tags: ["build"], status: "Live",
      text: "A CV you can interrogate. The lens switcher, the job-fit check and the question box all run in your browser.",
      link: "https://github.com/engincelenk/personal-website" }
  ],

  // TODO: add your real certificates. Anything starting with "[" is shown as a placeholder.
  certs: [
    { name: "[Certificate name]", issuer: "[Issuer]", year: "[Year]", tags: ["sec"] },
    { name: "[Certificate name]", issuer: "[Issuer]", year: "[Year]", tags: ["pm"] },
    { name: "[Certificate name]", issuer: "[Issuer]", year: "[Year]", tags: ["arch"] }
  ],

  // Facts for the question box. Each answer is shown as written.
  facts: [
    { q: "What do you do?", k: ["do", "job", "role", "work", "current", "bosch"], a: "I work at Bosch Digital in IT project and platform management, with a background in solution architecture and cybersecurity engineering." },
    { q: "What are your strongest skills?", k: ["strong", "best", "skill", "expert", "strength"], a: "Stakeholder management and solution design are my deepest skills. Right behind them: project delivery, platform ownership, IAM and threat modelling." },
    { q: "Which languages do you speak?", k: ["language", "speak", "german", "turkish", "english", "deutsch"], a: "German, Turkish and English. I switch between them in daily work depending on the team." },
    { q: "Do you do security work or only management?", k: ["security", "cyber", "hands-on", "technical", "engineer"], a: "Both. I started in cybersecurity engineering, so I can discuss threat models and identity design as well as plans and budgets." },
    { q: "What have you built on your own?", k: ["built", "project", "side", "own", "immofuchs", "tool", "calculator"], a: "immofuchs.info, a free real estate calculator for the German market, and this site. I am also planning an AI consulting offer for companies." },
    { q: "Where are you based?", k: ["where", "based", "location", "relocate", "remote", "live"], a: "In the German-speaking market. Reach out to talk about location and remote options." },
    { q: "How do you use AI?", k: ["ai", "llm", "claude", "ki", "generative"], a: "To build and test tools faster, and to advise on safe adoption. I treat AI output as a draft that still needs review." },
    { q: "How can I contact you?", k: ["contact", "email", "reach", "hire", "talk", "linkedin"], a: "Use the contact links at the bottom of this page." }
  ]
};
