/* Security capabilities and the frameworks & standards I work with. */

export const capabilities = [
  { icon: "Compass", title: { en: "Security strategy", de: "Security-Strategie" },
    text: { en: "Turn business risk into a security roadmap that management funds.", de: "Geschäftsrisiken in eine Security-Roadmap übersetzen, die das Management trägt." } },
  { icon: "Boxes", title: { en: "Security architecture", de: "Security-Architektur" },
    text: { en: "Design reviews across the portfolio, Zero Trust, identity and cloud.", de: "Design-Reviews über das Portfolio, Zero Trust, Identität und Cloud." } },
  { icon: "ShieldAlert", title: { en: "Threat & risk management", de: "Bedrohungs- & Risikomanagement" },
    text: { en: "TARA, STRIDE and MITRE ATT&CK; risks rated, measures traceable.", de: "TARA, STRIDE und MITRE ATT&CK; Risiken bewertet, Maßnahmen nachvollziehbar." } },
  { icon: "Scale", title: { en: "Governance & compliance", de: "Governance & Compliance" },
    text: { en: "NIST CSF, ISO 27001, NIS2 and CRA translated into concrete controls.", de: "NIST CSF, ISO 27001, NIS2 und CRA in konkrete Maßnahmen übersetzt." } },
  { icon: "Workflow", title: { en: "Secure development", de: "Sichere Entwicklung" },
    text: { en: "OWASP SAMM and ASVS, security in the pipeline, SBOM.", de: "OWASP SAMM und ASVS, Security in der Pipeline, SBOM." } },
  { icon: "Bot", title: { en: "AI security", de: "KI-Security" },
    text: { en: "OWASP Top 10 for LLM apps and NIST AI RMF for agents and LLMs.", de: "OWASP Top 10 für LLM-Anwendungen und NIST AI RMF für Agenten und LLMs." } },
  { icon: "Handshake", title: { en: "Leadership & communication", de: "Führung & Kommunikation" },
    text: { en: "Explain risk to executives, steer vendors, mentor teams.", de: "Risiken für Entscheider erklären, Dienstleister steuern, Teams befähigen." } }
];

export const frameworkGroups = [
  { id: "gov", title: { en: "Governance", de: "Governance" }, items: [
    { name: "NIST CSF 2.0", what: { en: "Six functions from Govern to Recover: the common language for security maturity.", de: "Sechs Funktionen von Govern bis Recover: die gemeinsame Sprache für Security-Reife." } },
    { name: "ISO/IEC 27001 · 27002", what: { en: "Information security management system and control set.", de: "Managementsystem für Informationssicherheit und Maßnahmenkatalog." } },
    { name: "BSI IT-Grundschutz", what: { en: "German baseline for security management and measures.", de: "Deutscher Standard für Sicherheitsmanagement und Basismaßnahmen." } },
    { name: "CIS Controls v8", what: { en: "Prioritised technical safeguards, good for quick wins.", de: "Priorisierte technische Schutzmaßnahmen, gut für Quick Wins." } }
  ] },
  { id: "risk", title: { en: "Threat & risk", de: "Bedrohung & Risiko" }, items: [
    { name: "TARA · ISO/SAE 21434", what: { en: "Threat analysis and risk assessment for products, from automotive.", de: "Bedrohungs- und Risikoanalyse für Produkte, aus dem Automotive-Umfeld." } },
    { name: "STRIDE", what: { en: "Systematic threat modelling per system element.", de: "Systematische Bedrohungsmodellierung je Systemelement." } },
    { name: "MITRE ATT&CK", what: { en: "Real attacker techniques to test assumptions and detections.", de: "Echte Angreifertechniken, um Annahmen und Erkennung zu prüfen." } },
    { name: "NIST SP 800-30", what: { en: "Method for structured risk assessments.", de: "Methode für strukturierte Risikobewertungen." } }
  ] },
  { id: "eng", title: { en: "Engineering", de: "Engineering" }, items: [
    { name: "OWASP Top 10", what: { en: "The most critical web application risks.", de: "Die kritischsten Risiken für Webanwendungen." } },
    { name: "OWASP ASVS", what: { en: "Verifiable security requirements for applications.", de: "Prüfbare Sicherheitsanforderungen für Anwendungen." } },
    { name: "OWASP SAMM", what: { en: "Maturity model for secure software development.", de: "Reifegradmodell für sichere Softwareentwicklung." } },
    { name: "Zero Trust · NIST SP 800-207", what: { en: "Never trust, always verify: identity-centric architecture.", de: "Never trust, always verify: identitätszentrierte Architektur." } },
    { name: "SBOM", what: { en: "Software bill of materials for supply chain transparency.", de: "Software-Stückliste für Transparenz in der Lieferkette." } }
  ] },
  { id: "reg", title: { en: "Regulation & industry", de: "Regulierung & Industrie" }, items: [
    { name: "NIS2", what: { en: "EU directive: security duties for essential and important entities.", de: "EU-Richtlinie: Sicherheitspflichten für wesentliche und wichtige Einrichtungen." } },
    { name: "EU Cyber Resilience Act", what: { en: "Security requirements for products with digital elements.", de: "Sicherheitsanforderungen an Produkte mit digitalen Elementen." } },
    { name: "UNECE R155 · R156", what: { en: "Cyber security and update management for vehicles.", de: "Cyber Security und Update-Management für Fahrzeuge." } },
    { name: "IEC 62443", what: { en: "Security for industrial automation and control systems.", de: "Security für industrielle Automatisierungs- und Steuerungssysteme." } },
    { name: "TISAX", what: { en: "Information security assessment for the automotive supply chain.", de: "Informationssicherheits-Prüfung für die Automotive-Lieferkette." } },
    { name: { en: "GDPR", de: "DSGVO" }, what: { en: "Data protection by design in every solution.", de: "Datenschutz by Design in jeder Lösung." } }
  ] },
  { id: "ai", title: { en: "AI", de: "KI" }, items: [
    { name: "OWASP Top 10 for LLM", what: { en: "Prompt injection, data leakage and more for LLM apps and agents.", de: "Prompt Injection, Datenabfluss und mehr für LLM-Anwendungen und Agenten." } },
    { name: "NIST AI RMF", what: { en: "Risk management framework for trustworthy AI.", de: "Risikomanagement-Rahmen für vertrauenswürdige KI." } },
    { name: "EU AI Act", what: { en: "Risk classes and duties for AI systems in the EU.", de: "Risikoklassen und Pflichten für KI-Systeme in der EU." } }
  ] }
];

export const toolboxText = {
  en: { kicker: "Cyber Security", title: "Security, built on established frameworks.", lead: "What I bring and the frameworks I work with. Tap a framework.", caps: "Capabilities", fw: "Frameworks & standards" },
  de: { kicker: "Cyber Security", title: "Security auf Basis etablierter Frameworks.", lead: "Was ich mitbringe und mit welchen Frameworks ich arbeite. Framework antippen.", caps: "Kompetenzen", fw: "Frameworks & Standards" }
};
