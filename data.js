/* ------------------------------------------------------------------
   ALLE INHALTE STEHEN HIER. Datei ändern, die Seite baut sich neu.
   Texte sind zweisprachig: { de: "...", en: "..." }.
   Quelle: Lebenslauf Engin Celenk (Stand 2026).
------------------------------------------------------------------- */
window.PROFILE = {
  name: "Engin Celenk",
  photo: "assets/engin.png",
  location: { de: "Pleidelsheim · Raum Stuttgart", en: "Pleidelsheim · Stuttgart region" },
  careerStart: "2012-03",           // Beginn der IT-Konzernpraxis (für die Jahreszahl im Kopf)
  contact: {
    email: "engincelenk@web.de",
    phone: ["+49", "163", "685", "4373"],   // wird erst nach Klick angezeigt (Schutz vor Bots)
    linkedin: "",                           // optional: "https://www.linkedin.com/in/..."
    github: "https://github.com/engincelenk"
  },
  // Optional: URL eines kleinen Proxys, der Fragen an ein Sprachmodell weiterleitet.
  // Leer lassen = der Zwilling antwortet nur aus den Fakten unten (läuft komplett im Browser).
  askEndpoint: "",

  character: { de: ["Teamplayer", "sozial kompetent", "selbstständig", "lernbereit", "zielstrebig"],
               en: ["team player", "socially competent", "independent", "eager to learn", "purposeful"] },
  interests: { de: ["Kochen", "Geschichte", "Gärtnern"], en: ["cooking", "history", "gardening"] },

  /* Die vier Säulen der Kompetenz = die Blickwinkel (Linsen) der Seite */
  pillars: [
    { id: "pm",   label: { de: "IT-Projekt- & Plattformmanagement", en: "IT project & platform management" }, short: { de: "Projektleitung", en: "Project lead" } },
    { id: "e2e",  label: { de: "IT Solution Management (E2E)", en: "IT solution management (E2E)" }, short: { de: "Solution Manager", en: "Solution manager" } },
    { id: "arch", label: { de: "IT-Solution-Architektur", en: "IT solution architecture" }, short: { de: "Architekt", en: "Architect" } },
    { id: "sec",  label: { de: "Cyber Security Engineering", en: "Cyber security engineering" }, short: { de: "Cyber Security", en: "Cyber security" } }
  ],

  lenses: [
    { id: "all", focus: ["sec", "arch", "e2e", "pm"],
      head: { de: "Ich verbinde IT-Projekte, Architektur und Cyber Security.", en: "I connect IT delivery, architecture and cyber security." },
      sub:  { de: "Vier Disziplinen, die sonst in getrennten Teams sitzen, in einer Person. Wählen Sie einen Blickwinkel, und die ganze Seite stellt sich darauf ein.",
              en: "Four disciplines that usually sit in separate teams, in one person. Pick a lens and the whole page adapts to it." } },
    { id: "sec", focus: ["sec", "arch"],
      head: { de: "Ich mache digitale Lösungen sicher, bevor sie live gehen.", en: "I make digital solutions secure before they go live." },
      sub:  { de: "Cyber Security Engineer bei Bosch Digital: Bedrohungs- und Risikoanalysen (TARA) und Sicherheit im Digital Business.",
              en: "Cyber security engineer at Bosch Digital: threat analysis and risk assessment (TARA) and security in digital business." } },
    { id: "arch", focus: ["arch", "sec"],
      head: { de: "Ich entwerfe Lösungen, die sich integrieren und tragen.", en: "I design solutions that integrate and last." },
      sub:  { de: "Lead Architect für Digital Business und Customer Experience bei Bosch, Solution Architect bei TRUMPF und Daimler.",
              en: "Lead architect for digital business and customer experience at Bosch, solution architect at TRUMPF and Daimler." } },
    { id: "e2e", focus: ["e2e", "pm"],
      head: { de: "Ich übernehme Verantwortung von Ende zu Ende.", en: "I take responsibility end to end." },
      sub:  { de: "E2E-Verantwortung für die weltweite Transport-Management-Anwendung von Bosch, gemeinsam mit SupplyOn und Eurolog.",
              en: "End-to-end responsibility for Bosch's worldwide transport management application, together with SupplyOn and Eurolog." } },
    { id: "pm", focus: ["pm", "e2e"],
      head: { de: "Ich bringe komplexe IT-Projekte ins Ziel.", en: "I get complex IT projects delivered." },
      sub:  { de: "Projektleitung für mercedes-benz.com und mymercedes.me, zertifiziert nach IPMA Level D, Scrum Master und Product Owner.",
              en: "Project lead for mercedes-benz.com and mymercedes.me, IPMA Level D certified, Scrum Master and Product Owner." } }
  ],

  /* Skala 1–4 wie im Lebenslauf. keys = Begriffe für den Stellen-Fit-Check (DE + EN). */
  skills: [
    { p: "sec", l: 4, n: { de: "Cyber Security", en: "Cyber security" },
      keys: ["cyber security", "cybersecurity", "cyber", "it-sicherheit", "it security", "informationssicherheit", "information security", "security engineer", "security", "sicherheit"],
      ev: { de: "Cyber Security Engineer bei Bosch Digital seit 01/2024.", en: "Cyber security engineer at Bosch Digital since 01/2024." } },
    { p: "sec", l: 4, n: { de: "TARA: Bedrohungs- und Risikoanalyse", en: "TARA: threat analysis and risk assessment" },
      keys: ["tara", "threat analysis", "threat model", "threat modeling", "threat modelling", "bedrohungsanalyse", "risikoanalyse", "risk assessment", "risikobewertung", "iso 21434", "iso/sae 21434", "21434"],
      ev: { de: "TARA in verschiedenen Projekten bei Bosch Digital.", en: "TARA in several projects at Bosch Digital." } },
    { p: "sec", l: 3, n: { de: "Security by Design", en: "Security by design" },
      keys: ["security by design", "secure by design", "sicherheitsarchitektur", "security architecture", "security requirements", "sicherheitsanforderungen"],
      ev: { de: "Verbindet Architekturerfahrung mit Security: Risiken schon im Design adressieren.", en: "Combines architecture experience with security: address risks in the design." } },

    { p: "arch", l: 4, n: { de: "Solution-Architektur", en: "Solution architecture" },
      keys: ["solution architect", "solution architecture", "lösungsarchitekt", "lösungsarchitektur", "architekt", "architect", "architektur", "architecture", "it-architektur"],
      ev: { de: "Lead Architect bei Bosch Central IT (2019–2021), Solution Architect bei TRUMPF und Daimler. Bosch Confirmed Architect.", en: "Lead architect at Bosch Central IT (2019–2021), solution architect at TRUMPF and Daimler. Bosch Confirmed Architect." } },
    { p: "arch", l: 4, n: { de: "E-Commerce & Customer Experience", en: "E-commerce & customer experience" },
      keys: ["e-commerce", "ecommerce", "customer experience", "cx", "webshop", "online shop", "onlineshop", "hybris", "sap commerce", "intershop", "website", "portal", "marketing"],
      ev: { de: "mymercedes.me, mercedes-benz.com, MyTRUMPF, Bosch Smart Home Website, ATMO E-Commerce.", en: "mymercedes.me, mercedes-benz.com, MyTRUMPF, Bosch Smart Home website, ATMO e-commerce." } },
    { p: "arch", l: 3, n: { de: "Integration, APIs & SOA", en: "Integration, APIs & SOA" },
      keys: ["api", "apis", "schnittstelle", "schnittstellen", "integration", "soa", "middleware", "microservices", "interface"],
      ev: { de: "API-Training bei Daimler, Masterarbeit und Publikation zum Monitoring von SOA-Plattformen.", en: "API training at Daimler, master's work and publication on monitoring SOA platforms." } },
    { p: "arch", l: 3, n: { de: "Cloud & SaaS", en: "Cloud & SaaS" },
      keys: ["cloud", "saas", "azure", "aws", "cloud computing", "public cloud"],
      ev: { de: "Audit SaaS, MAM mit Sharedien und eLAKE bei Bosch Central IT.", en: "Audit SaaS, MAM with Sharedien and eLAKE at Bosch Central IT." } },
    { p: "arch", l: 2, n: { de: "IBM Mainframe", en: "IBM mainframe" },
      keys: ["mainframe", "ibm z", "z/os"],
      ev: { de: "Solution Architect für Technologien im IBM-Mainframe-Umfeld bei Daimler.", en: "Solution architect for technologies in the IBM mainframe area at Daimler." } },

    { p: "e2e", l: 4, n: { de: "E2E-Verantwortung", en: "End-to-end responsibility" },
      keys: ["e2e", "end-to-end", "end to end", "ende-zu-ende", "gesamtverantwortung", "application owner", "applikationsverantwortung", "anwendungsverantwortung", "solution manager", "service owner", "product owner", "produktverantwortung"],
      ev: { de: "Weltweite Transport-Management-Anwendung von Bosch (2021–2023), E2E bei Daimler Protics.", en: "Bosch's worldwide transport management application (2021–2023), E2E at Daimler Protics." } },
    { p: "e2e", l: 4, n: { de: "Logistik & Transport-Management", en: "Logistics & transport management" },
      keys: ["logistik", "logistics", "transport", "tms", "supply chain", "lieferkette", "supplyon", "spedition"],
      ev: { de: "IT Solution Manager in Logistics bei Bosch Digital mit SupplyOn und Eurolog.", en: "IT solution manager in logistics at Bosch Digital with SupplyOn and Eurolog." } },
    { p: "e2e", l: 3, n: { de: "Betrieb & ITIL", en: "Operations & ITIL" },
      keys: ["itil", "operations", "betrieb", "it-betrieb", "service management", "incident", "sla", "it service"],
      ev: { de: "ITIL Foundation, Betrieb einer global genutzten Anwendung.", en: "ITIL Foundation, running a globally used application." } },
    { p: "e2e", l: 3, n: { de: "Dienstleistersteuerung", en: "Vendor management" },
      keys: ["dienstleister", "dienstleistersteuerung", "vendor", "supplier", "lieferant", "provider", "externe partner"],
      ev: { de: "Steuerung externer Partner wie SupplyOn und Eurolog.", en: "Steering external partners such as SupplyOn and Eurolog." } },

    { p: "pm", l: 4, n: { de: "Projektmanagement", en: "Project management" },
      keys: ["projektmanagement", "project management", "projektleiter", "projektleiterin", "projektleitung", "project manager", "project lead", "pmo", "ipma", "programm", "program"],
      ev: { de: "IT-Projektmanager bei Daimler (mercedes-benz.com), IPMA Level D (GPM).", en: "IT project manager at Daimler (mercedes-benz.com), IPMA Level D (GPM)." } },
    { p: "pm", l: 4, n: { de: "Agilität & Scrum", en: "Agility & Scrum" },
      keys: ["agil", "agile", "agility", "scrum", "kanban", "scrum master", "safe", "jira", "sprint"],
      ev: { de: "Professional Scrum Master I und Professional Scrum Product Owner I.", en: "Professional Scrum Master I and Professional Scrum Product Owner I." } },
    { p: "pm", l: 4, n: { de: "Stakeholder & Kommunikation", en: "Stakeholders & communication" },
      keys: ["stakeholder", "kommunikation", "communication", "verhandlung", "negotiation", "change management", "moderation", "workshop"],
      ev: { de: "Trainings zu Verhandlung, Kommunikation und Change Management; Arbeit zwischen Fachbereich und IT in drei Konzernen.", en: "Training in negotiation, communication and change management; work between business and IT in three corporations." } },
    { p: "pm", l: 3, n: { de: "Testmanagement", en: "Test management" },
      keys: ["test", "testing", "testmanagement", "test management", "qa", "quality assurance", "qualitätssicherung", "abnahme"],
      ev: { de: "Test- und Abnahmeverantwortung in E-Commerce-Projekten; Methodik Agile, Monitoring, Testing.", en: "Test and acceptance responsibility in e-commerce projects; agile, monitoring and testing methods." } },

    { p: "arch", l: 2, n: { de: "Entwicklung: C#, Java, Objective-C", en: "Development: C#, Java, Objective-C" },
      keys: ["c#", "java", "objective-c", "ios", "softwareentwicklung", "software development"],
      ev: { de: "C#-Tools bei Bosch Gasoline Systems, iOS-App-Prototyp in der Masterarbeit.", en: "C# tools at Bosch Gasoline Systems, iOS app prototype in the master's thesis." } },
    { p: "e2e", l: 2, n: { de: "SAP & Business Intelligence", en: "SAP & business intelligence" },
      keys: ["sap", "business intelligence", "netweaver", "srm", "reporting", "kpi"],
      ev: { de: "Bachelorarbeit in SAP NetWeaver BI 7.0, Schwerpunkt SAP SRM.", en: "Bachelor's thesis in SAP NetWeaver BI 7.0, focus on SAP SRM." } },
    { p: "arch", l: 3, n: { de: "KI-gestütztes Arbeiten", en: "AI-assisted work" },
      keys: ["ki", "ai", "künstliche intelligenz", "artificial intelligence", "llm", "generative", "genai", "claude", "copilot"],
      ev: { de: "Diese Seite und immofuchs.info entstanden mit KI-Unterstützung.", en: "This site and immofuchs.info were built with AI assistance." } }
  ],

  /* Begriffe aus Stellenanzeigen, die ausdrücklich KEINE Stärke sind. Der Fit-Check bleibt dadurch ehrlich. */
  gaps: ["python", "golang", "rust", "c++", "kotlin", "kubernetes", "terraform", "ansible", "embedded", "autosar", "pentest", "penetration test", "penetrationstest", "red team", "malware", "reverse engineering", "data science", "tensorflow", "pytorch", "french", "französisch fließend"],

  languages: [
    { n: { de: "Deutsch", en: "German" }, l: 4 },
    { n: { de: "Türkisch", en: "Turkish" }, l: 4 },
    { n: { de: "Englisch", en: "English" }, l: 3 },
    { n: { de: "Französisch", en: "French" }, l: 1 }
  ],

  /* type: job | practice | edu */
  timeline: [
    { type: "job", from: "2024-01", to: null, place: "Stuttgart", logo: "BOSCH", tags: ["sec", "arch"],
      title: { de: "Cyber Security Engineer", en: "Cyber Security Engineer" },
      org: "Bosch Digital · Robert Bosch GmbH",
      points: { de: ["Verschiedene Projekte im Digital Business", "Bedrohungs- und Risikoanalysen (TARA)"],
                en: ["Various projects in digital business", "Threat analysis and risk assessment (TARA)"] } },
    { type: "job", from: "2021-07", to: "2023-12", place: "Stuttgart", logo: "BOSCH", tags: ["e2e", "pm"],
      title: { de: "IT Solution Manager Logistik", en: "IT Solution Manager in Logistics" },
      org: "Bosch Digital · Robert Bosch GmbH",
      points: { de: ["E2E-Verantwortung für die zentrale Transport-Management-Anwendung von Bosch weltweit", "Zusammenarbeit mit SupplyOn und Eurolog"],
                en: ["End-to-end responsibility for Bosch's central transport management application worldwide", "Working with SupplyOn and Eurolog"] } },
    { type: "job", from: "2019-05", to: "2021-11", place: "Stuttgart", logo: "BOSCH", tags: ["arch"],
      title: { de: "IT (Senior) Solution (Lead) Architect Digital Business & Customer Experience", en: "IT (Senior) Solution (Lead) Architect for Digital Business & Customer Experience" },
      org: "Central IT · Robert Bosch GmbH",
      points: { de: ["Bosch Smart Home Website", "ATMO E-Commerce", "Media Asset Management mit Sharedien", "Audit SaaS und eLAKE"],
                en: ["Bosch Smart Home website", "ATMO e-commerce", "Media asset management with Sharedien", "Audit SaaS and eLAKE"] } },
    { type: "job", from: "2017-09", to: "2019-04", place: "Ditzingen", logo: "TRUMPF", tags: ["arch", "pm"],
      title: { de: "IT (Senior) Consultant Digitalisierung & IT (Senior) Solution Architect", en: "IT (Senior) Consultant Digitalization & IT (Senior) Solution Architect" },
      org: "TRUMPF GmbH + Co. KG · IT Marketing & Sales",
      points: { de: ["Customer Experience Platform", "Kundenportal MyTRUMPF"], en: ["Customer experience platform", "Customer portal MyTRUMPF"] } },
    { type: "job", from: "2014-10", to: "2017-08", place: "Stuttgart", logo: "DAIMLER", tags: ["pm", "arch"],
      title: { de: "IT (Senior) Projektmanager / IT Solution Architect", en: "IT (Senior) Project Manager / IT Solution Architect" },
      org: "Daimler AG · IT Sales & Marketing",
      points: { de: ["Customer Experience und E-Commerce für mymercedes.me", "Projektmanager für mercedes-benz.com", "Solution Architect für Technologien im IBM-Mainframe-Umfeld"],
                en: ["Customer experience and e-commerce for mymercedes.me", "Project manager for mercedes-benz.com", "Solution architect for technologies in the IBM mainframe area"] } },
    { type: "job", from: "2012-03", to: "2014-09", place: "Stuttgart", logo: "DAIMLER PROTICS", tags: ["pm", "e2e"],
      title: { de: "IT Consultant / IT Projektmanager", en: "IT Consultant / IT Project Manager" },
      org: "Daimler Protics GmbH · Virtual Engineering",
      points: { de: ["E-Commerce", "E2E-Verantwortung"], en: ["E-commerce", "End-to-end responsibility"] } },
    { type: "practice", from: "2011-09", to: "2012-02", place: "Stuttgart", logo: "DAIMLER TSS", tags: ["arch"],
      title: { de: "Masterarbeit", en: "Master's thesis" },
      org: "Daimler TSS GmbH · SAP Solutions",
      points: { de: ["Evaluierung und prototypische Umsetzung einer iOS-App auf Basis der Sybase Unwired Platform zur internen Verteilung von Unternehmensdaten der Daimler AG"],
                en: ["Evaluation and prototype of an iOS app based on the Sybase Unwired Platform for distributing Daimler AG company data internally"] } },
    { type: "edu", from: "2010-03", to: "2012-02", place: "Reutlingen", logo: "HS REUTLINGEN", tags: ["arch"],
      title: { de: "Wirtschaftsinformatik, Master of Science (Note 1,7)", en: "Business Informatics, Master of Science (grade 1.7)" },
      org: "Hochschule Reutlingen",
      points: { de: ["Schwerpunkt: Integriertes Monitoring von SOA-Plattformen am Beispiel von GlassFish und Nagios", "Preis der Fakultät Informatik für das Jahresprojekt", "Publikation: „Semantikbasiertes integrales Monitoring von SOA-Plattformen“"],
                en: ["Focus: integrated monitoring of SOA platforms using GlassFish and Nagios", "Faculty of Computer Science award for the annual project", "Publication: “Semantics-based integral monitoring of SOA platforms”"] } },
    { type: "practice", from: "2008-03", to: "2009-08", place: "Stuttgart", logo: "APSOLUT", tags: ["e2e"],
      title: { de: "Bachelorarbeit", en: "Bachelor's thesis" },
      org: "apsolut GmbH · SAP Consulting",
      points: { de: ["Anforderungsanalyse von Kennzahlen für ein optimiertes Beschaffungscontrolling", "Umsetzung von Kennzahlen und Berichten in SAP NetWeaver Business Intelligence 7.0"],
                en: ["Requirements analysis of metrics for optimized procurement controlling", "Implementation of indicators and reports in SAP NetWeaver Business Intelligence 7.0"] } },
    { type: "edu", from: "2008-03", to: "2009-08", place: "Reutlingen", logo: "HS REUTLINGEN", tags: ["e2e"],
      title: { de: "Wirtschaftsinformatik, Bachelor of Science", en: "Business Informatics, Bachelor of Science" },
      org: "Hochschule Reutlingen",
      points: { de: ["Schwerpunkt: SAP SRM, Business Intelligence 7.0"], en: ["Focus: SAP SRM, Business Intelligence 7.0"] } },
    { type: "practice", from: "2007-08", to: "2008-02", place: "Ludwigsburg", logo: "BOSCH", tags: ["arch"],
      title: { de: "Praktikum", en: "Internship" },
      org: "Robert Bosch GmbH · Gasoline Systems",
      points: { de: ["Planung und Entwicklung von zwei Tools in C# zur Messung und Auswertung von LabCar-Testsystemen"],
                en: ["Planned and built two C# tools for measuring and evaluating LabCar test systems"] } },
    { type: "edu", from: "2005-09", to: "2008-02", place: "Heilbronn", logo: "HS HEILBRONN", tags: ["arch"],
      title: { de: "Studium Software Engineering (Bachelor)", en: "Software Engineering studies (Bachelor)" },
      org: "Hochschule Heilbronn",
      points: { de: [], en: [] } },
    { type: "job", from: "2005-08", to: "2005-09", place: "Ludwigsburg", logo: "AKZONOBEL", tags: [],
      title: { de: "Junior HR-Specialist", en: "Junior HR Specialist" },
      org: "Akzo Nobel AG · Human Resources",
      points: { de: ["Verschiedene Aufgaben im Personalwesen"], en: ["Various tasks in human resources"] } },
    { type: "edu", from: "2003-09", to: "2005-07", place: "Ludwigsburg", logo: "AKZONOBEL", tags: [],
      title: { de: "Ausbildung zum Bürokaufmann", en: "Apprenticeship as office administrator" },
      org: "Akzo Nobel AG",
      points: { de: [], en: [] } }
  ],

  /* Bildungstreppe: jede Stufe eine Etappe */
  stairs: [
    { y: "1994", t: { de: "Ankunft in Deutschland", en: "Arrival in Germany" }, d: { de: "Der Anfang der Treppe.", en: "The bottom of the stairs." } },
    { y: "", t: { de: "Grundschule", en: "Primary school" }, d: { de: "Der Einstieg ins deutsche Schulsystem.", en: "Entering the German school system." } },
    { y: "", t: { de: "Hauptschule", en: "Hauptschule" }, d: { de: "Die nächste Stufe.", en: "The next step." } },
    { y: "", t: { de: "Werkrealschule", en: "Werkrealschule" }, d: { de: "Und noch eine.", en: "And another one." } },
    { y: "", t: { de: "Wirtschaftsgymnasium", en: "Business high school" }, d: { de: "Mit Schwerpunkt Wirtschaft.", en: "With a focus on business." } },
    { y: "2003", t: { de: "Ausbildung Bürokaufmann", en: "Office apprenticeship" }, d: { de: "Akzo Nobel AG, Ludwigsburg.", en: "Akzo Nobel AG, Ludwigsburg." } },
    { y: "2005", t: { de: "Software Engineering", en: "Software engineering" }, d: { de: "Hochschule Heilbronn.", en: "Heilbronn University." } },
    { y: "2009", t: { de: "B.Sc. Wirtschaftsinformatik", en: "B.Sc. Business Informatics" }, d: { de: "Hochschule Reutlingen.", en: "Reutlingen University." } },
    { y: "2012", t: { de: "M.Sc. Wirtschaftsinformatik, 1,7", en: "M.Sc. Business Informatics, 1.7" }, d: { de: "Mit Fakultätspreis und Publikation.", en: "With a faculty award and a publication." } },
    { y: "2024", t: { de: "Cyber Security Engineer, Bosch", en: "Cyber security engineer, Bosch" }, d: { de: "Nach 12 Jahren Projekt-, Architektur- und E2E-Verantwortung.", en: "After 12 years of project, architecture and E2E responsibility." } }
  ],

  /* Weiterbildungen. tag = Säule, der sie zugeordnet sind */
  trainings: [
    { y: 2022, cat: "soft", tag: "pm",   n: { de: "Selbstbewusstsein und Durchsetzungsvermögen", en: "Self-confidence and assertiveness" } },
    { y: 2018, cat: "agile", tag: "pm",  n: { de: "Professional Scrum Product Owner I", en: "Professional Scrum Product Owner I" }, cert: true },
    { y: 2018, cat: "soft", tag: "pm",   n: { de: "Design Thinking", en: "Design thinking" } },
    { y: 2017, cat: "soft", tag: "pm",   n: { de: "Kommunikation & Persönlichkeit", en: "Communication & personality" } },
    { y: 2016, cat: "tech", tag: "arch", n: { de: "API (Application Programming Interface) bei Daimler", en: "API (application programming interface) at Daimler" } },
    { y: 2015, cat: "agile", tag: "pm",  n: { de: "Agile Projekte mit JIRA", en: "Agile projects with JIRA" } },
    { y: 2015, cat: "tech", tag: "arch", n: { de: "Hybris End User Training (E-Commerce)", en: "Hybris end user training (e-commerce)" } },
    { y: 2014, cat: "pm",   tag: "pm",   n: { de: "Certified Project Management Associate (IPMA Level D), GPM", en: "Certified Project Management Associate (IPMA Level D), GPM" }, cert: true },
    { y: 2014, cat: "agile", tag: "pm",  n: { de: "Professional Scrum Master I", en: "Professional Scrum Master I" }, cert: true },
    { y: 2013, cat: "tech", tag: "e2e",  n: { de: "ITIL Foundation 2011", en: "ITIL Foundation 2011" }, cert: true },
    { y: 2012, cat: "pm",   tag: "pm",   n: { de: "Houston IT", en: "Houston IT" } },
    { y: 2012, cat: "tech", tag: "arch", n: { de: "Intershop (E-Commerce), technischer Überblick", en: "Intershop (e-commerce) technical overview" } }
  ],
  trainingCats: {
    pm:    { de: "Projektmanagement", en: "Project management" },
    agile: { de: "Agilität", en: "Agility" },
    soft:  { de: "Softskills & Methodik", en: "Soft skills & methods" },
    tech:  { de: "Technik", en: "Technical" }
  },

  /* „Mechie“ & „Techi“: der Kompetenzbaum aus dem Lebenslauf, von unten nach oben */
  tree: {
    mechie: [
      { id: "proc", n: { de: "Prozesse & Softskills", en: "Processes & soft skills" }, s: { de: "Allgemeine und Konzernprozesse", en: "General and corporate processes" },
        certs: { de: ["Verhandlungs- und Gesprächsführung", "Kommunikation & Persönlichkeit", "Design Thinking", "Selbstbewusstsein & Durchsetzung"], en: ["Negotiation and conversation", "Communication & personality", "Design thinking", "Self-confidence & assertiveness"] }, lens: "pm" },
      { id: "e2e", n: { de: "E2E-Verantwortung Plattform", en: "E2E platform responsibility" }, s: { de: "Transport Management bei Bosch", en: "Transport management at Bosch" },
        certs: { de: ["Change Management"], en: ["Change management"] }, lens: "e2e" },
      { id: "pm", n: { de: "Projektmanagement", en: "Project management" }, s: { de: "B-, C- und D-Projekte", en: "B, C and D projects" },
        certs: { de: ["Scrum Product Owner", "Scrum Master", "IPMA Level D", "Houston IT"], en: ["Scrum Product Owner", "Scrum Master", "IPMA Level D", "Houston IT"] }, lens: "pm" },
      { id: "sm", n: { de: "Solution Manager", en: "Solution manager" }, s: { de: "Fachlich und technisch verantwortlich", en: "Responsible for business and technology" },
        certs: { de: [], en: [] }, lens: "e2e" }
    ],
    techi: [
      { id: "dev", n: { de: "Entwicklung & Customizing", en: "Development & customizing" }, s: { de: "C#, Java, Objective-C, SAP", en: "C#, Java, Objective-C, SAP" },
        certs: { de: [], en: [] }, lens: "arch" },
      { id: "ops", n: { de: "Operations", en: "Operations" }, s: { de: "Prozesse & Infrastruktur", en: "Processes & infrastructure" },
        certs: { de: ["ITIL Foundation"], en: ["ITIL Foundation"] }, lens: "e2e" },
      { id: "sa", n: { de: "Solution-Architektur", en: "Solution architecture" }, s: { de: "State-of-the-Art-Technologien", en: "State-of-the-art technologies" },
        certs: { de: ["Bosch Confirmed Architect (Associate)"], en: ["Bosch Confirmed Architect (Associate)"] }, lens: "arch" },
      { id: "cse", n: { de: "Cyber Security Engineer", en: "Cyber security engineer" }, s: { de: "TARA und Digital Business", en: "TARA and digital business" },
        certs: { de: [], en: [] }, lens: "sec" }
    ],
    base: [
      { de: "Methodik & Tools: Agile, Monitoring, Testing", en: "Methods & tools: agile, monitoring, testing" },
      { de: "Fachliche Führung von Menschen", en: "Technical leadership of people" },
      { de: "Akademische & berufliche Ausbildung", en: "Academic & vocational training" }
    ]
  },

  projects: [
    { name: "immofuchs.info", link: "https://immofuchs.info", status: { de: "Live", en: "Live" },
      text: { de: "Kostenloser Immobilienrechner für den deutschen Markt. Läuft im Browser, ohne Anmeldung.", en: "Free real estate calculator for the German market. Runs in the browser, no sign-up." } },
    { name: { de: "Diese Seite", en: "This site" }, link: "https://github.com/engincelenk/personal-website", status: { de: "Live", en: "Live" },
      text: { de: "Aus drei Screenshots eines Lebenslaufs mit KI gebaut. Quellcode offen auf GitHub.", en: "Built with AI from three screenshots of a CV. Source code open on GitHub." } }
  ],

  /* Wissensbasis des digitalen Zwillings. k = Stichwörter (DE + EN) */
  facts: [
    { q: { de: "Was machst du aktuell?", en: "What do you do right now?" }, k: ["aktuell", "derzeit", "heute", "job", "rolle", "current", "now", "today", "role", "machst", "do"],
      a: { de: "Seit Januar 2024 bin ich Cyber Security Engineer bei Bosch Digital in Stuttgart. Ich arbeite in Projekten des Digital Business und erstelle Bedrohungs- und Risikoanalysen (TARA).",
           en: "Since January 2024 I have been a cyber security engineer at Bosch Digital in Stuttgart. I work on digital business projects and do threat analysis and risk assessment (TARA)." } },
    { q: { de: "Was ist TARA?", en: "What is TARA?" }, k: ["tara", "threat", "risiko", "risk", "bedrohung", "21434"],
      a: { de: "TARA steht für Threat Analysis and Risk Assessment. Man untersucht systematisch, wie ein System angegriffen werden kann, bewertet das Risiko und legt Maßnahmen fest, bevor etwas live geht. Genau das mache ich bei Bosch Digital.",
           en: "TARA stands for threat analysis and risk assessment. You systematically examine how a system can be attacked, rate the risk and decide on measures before anything goes live. That is what I do at Bosch Digital." } },
    { q: { de: "Bist du eher Manager oder Techniker?", en: "Are you more of a manager or an engineer?" }, k: ["manager", "techniker", "technisch", "engineer", "technical", "mechie", "techi", "hands-on", "management"],
      a: { de: "Beides, und das ist Absicht. Mein „Mechie“-Strang reicht von Softskills über Projektmanagement bis zum Solution Manager, mein „Techi“-Strang von der Entwicklung über Operations und Architektur bis zur Cyber Security. Ich kann ein Lenkungsgremium leiten und eine Bedrohungsanalyse diskutieren.",
           en: "Both, on purpose. My “Mechie” strand runs from soft skills through project management to solution manager, my “Techi” strand from development through operations and architecture to cyber security. I can run a steering committee and discuss a threat analysis." } },
    { q: { de: "Welche Projekte hast du verantwortet?", en: "Which projects have you led?" }, k: ["projekt", "projekte", "project", "projects", "mercedes", "trumpf", "smart home", "verantwortet", "led"],
      a: { de: "Unter anderem mercedes-benz.com und mymercedes.me bei Daimler, die Customer Experience Platform MyTRUMPF, die Bosch Smart Home Website, ATMO E-Commerce sowie die weltweite Transport-Management-Anwendung von Bosch.",
           en: "Among others mercedes-benz.com and mymercedes.me at Daimler, the MyTRUMPF customer experience platform, the Bosch Smart Home website, ATMO e-commerce and Bosch's worldwide transport management application." } },
    { q: { de: "Welche Zertifikate hast du?", en: "Which certificates do you hold?" }, k: ["zertifikat", "zertifikate", "certificate", "certificates", "zertifiziert", "certified", "ipma", "itil", "scrum", "psm", "pspo"],
      a: { de: "IPMA Level D (GPM), Professional Scrum Master I, Professional Scrum Product Owner I, ITIL Foundation und Bosch Confirmed Architect (Associate).",
           en: "IPMA Level D (GPM), Professional Scrum Master I, Professional Scrum Product Owner I, ITIL Foundation and Bosch Confirmed Architect (Associate)." } },
    { q: { de: "Welche Sprachen sprichst du?", en: "Which languages do you speak?" }, k: ["sprache", "sprachen", "language", "languages", "deutsch", "türkisch", "englisch", "german", "turkish", "english", "französisch", "french"],
      a: { de: "Deutsch und Türkisch auf muttersprachlichem Niveau, Englisch sehr gut im Berufsalltag, Französisch in Grundzügen.",
           en: "German and Turkish at native level, very good English for business, basic French." } },
    { q: { de: "Wie sieht dein Bildungsweg aus?", en: "What is your educational path?" }, k: ["bildung", "studium", "ausbildung", "schule", "education", "study", "degree", "master", "bachelor", "1994", "abschluss"],
      a: { de: "1994 kam ich nach Deutschland. Über Grund-, Haupt- und Werkrealschule ging es aufs Wirtschaftsgymnasium, dann Ausbildung zum Bürokaufmann, Software Engineering in Heilbronn, B.Sc. und M.Sc. in Wirtschaftsinformatik in Reutlingen, Abschluss mit 1,7, Fakultätspreis und Publikation.",
           en: "I came to Germany in 1994. Primary, Haupt- and Werkrealschule led to a business high school, then an office apprenticeship, software engineering in Heilbronn, and a B.Sc. and M.Sc. in business informatics in Reutlingen, graduating with 1.7, a faculty award and a publication." } },
    { q: { de: "Hast du Erfahrung mit Agilität?", en: "Do you have agile experience?" }, k: ["agil", "agile", "scrum", "kanban", "jira", "sprint", "product owner", "scrum master"],
      a: { de: "Ja. Ich bin zertifizierter Professional Scrum Master I und Product Owner I und arbeite seit Jahren in agilen und hybriden Projekten, auch mit JIRA.",
           en: "Yes. I am a certified Professional Scrum Master I and Product Owner I and have worked in agile and hybrid projects for years, including with JIRA." } },
    { q: { de: "Kennst du dich mit Cloud aus?", en: "Do you know cloud?" }, k: ["cloud", "saas", "azure", "aws", "kubernetes"],
      a: { de: "Ja, auf Architektur- und Betriebsebene: Audit SaaS, Media Asset Management mit Sharedien und eLAKE bei Bosch. Tiefes Kubernetes- oder Terraform-Engineering ist nicht mein Schwerpunkt.",
           en: "Yes, at architecture and operations level: Audit SaaS, media asset management with Sharedien and eLAKE at Bosch. Deep Kubernetes or Terraform engineering is not my focus." } },
    { q: { de: "Programmierst du selbst?", en: "Do you code yourself?" }, k: ["programmieren", "programmierst", "code", "coding", "entwickler", "developer", "java", "c#", "python"],
      a: { de: "Ich habe in C#, Java und Objective-C entwickelt und SAP customized, etwa Testtools bei Bosch und eine iOS-App in der Masterarbeit. Heute nutze ich das Wissen vor allem, um mit Entwicklern auf Augenhöhe zu sprechen, und baue kleine Tools mit KI-Unterstützung.",
           en: "I have developed in C#, Java and Objective-C and customized SAP, for example test tools at Bosch and an iOS app in my master's thesis. Today I mainly use that to talk with developers as a peer, and I build small tools with AI assistance." } },
    { q: { de: "Wie nutzt du KI?", en: "How do you use AI?" }, k: ["ki", "ai", "llm", "claude", "chatgpt", "künstliche", "artificial", "seite", "site", "gebaut", "built"],
      a: { de: "Diese Seite ist das beste Beispiel: Sie entstand mit KI aus drei Screenshots meines Lebenslaufs. Ich setze KI ein, um schneller zu analysieren, zu bauen und zu testen, und prüfe das Ergebnis immer selbst.",
           en: "This site is the best example: it was built with AI from three screenshots of my CV. I use AI to analyze, build and test faster, and I always review the result myself." } },
    { q: { de: "Wo wohnst du, bist du flexibel?", en: "Where are you based? Are you flexible?" }, k: ["wo", "wohnort", "standort", "where", "based", "location", "remote", "umzug", "relocate", "flexibel", "flexible", "stuttgart"],
      a: { de: "Ich wohne in Pleidelsheim im Raum Stuttgart. Über Standort und Remote-Anteile spreche ich gern direkt.",
           en: "I live in Pleidelsheim near Stuttgart. I am happy to talk about location and remote work directly." } },
    { q: { de: "Was zeichnet dich persönlich aus?", en: "What are you like as a person?" }, k: ["persönlich", "charakter", "person", "personal", "character", "hobby", "hobbys", "interessen", "interests", "freizeit"],
      a: { de: "Teamplayer, sozial kompetent, selbstständig, lernbereit und zielstrebig. Privat koche ich gern, interessiere mich für Geschichte und arbeite im Garten.",
           en: "Team player, socially competent, independent, eager to learn and purposeful. In my free time I cook, read about history and garden." } },
    { q: { de: "Wie erreiche ich dich?", en: "How can I reach you?" }, k: ["kontakt", "erreichen", "email", "mail", "telefon", "anrufen", "contact", "reach", "phone", "call", "gespräch", "interview"],
      a: { de: "Am besten per E-Mail an engincelenk@web.de. Die Telefonnummer finden Sie im Kontaktbereich unten.",
           en: "Best by email at engincelenk@web.de. You will find my phone number in the contact section below." } }
  ]
};
