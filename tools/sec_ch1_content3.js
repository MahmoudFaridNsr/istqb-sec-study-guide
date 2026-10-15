// CT-SEC Chapter 1 — Sections 5 and 6
module.exports = function () {
  const B = [];

  // ================= SECTION 5 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 5 — Exam Tricks" });

  B.push({ h2: "5.1 Frequently tested topics (evidence-based)" });
  B.push({ p: "The Exam Structure Table gives Chapter 1 **four questions worth eight points**. Two are fixed (**AS-1.2.1**, **AS-1.2.2**); two are drawn from pairs. The official Sample Exam drew **AS-1.3.1** and **AS-1.1.3**." });
  B.push({ table: { head: ["LO", "K", "Qs", "Pts", "Sample #", "Format used officially"], widths: [1.8, 0.8, 0.9, 0.9, 1.6, 8.0], rows: [
    ["AS-1.1.1 / 1.3.1", "K2", "1", "1", "#1", "“Which of the following is **a purpose of a security audit**?” — one audit outcome among three controls"],
    ["AS-1.1.2 / 1.1.3", "**K4**", "1", "**3**", "#2", "Scenario + “**on which stakeholders should you primarily focus**?” — compliance with government guidelines"],
    ["AS-1.2.1", "K2", "1", "1", "#3", "“Which is **a consequence of** a policy that minimizes access…?”"],
    ["AS-1.2.2", "**K4**", "1", "**3**", "#4", "Scenario + “**optimum strategy**” to determine effectiveness of policies and procedures"],
    ["**Chapter 1 total**", "—", "**4**", "**8**", "**#1–#4**", "**10% of the points; two 3-point items carry three-quarters of the chapter**"],
  ] } });
  B.push({ box: { title: "The arithmetic before you sit the exam", body: "CT-SEC is **45 questions worth 80 points in 120 minutes**; pass = **52 points (65%)**. Points per question: **K2 = 1, K3 = 2, K4 = 3**. There are **20 K2, 15 K3 and 10 K4** questions — so **K2 recall is only 20 of 80 points**. Even a perfect K2 score leaves you needing **32 of the 60 scenario points**. Chapter 1’s two K4 items are worth as much as **six K2 questions**." } });

  B.push({ h2: "5.2 Common distractors observed" });
  B.push({ ul: [
    "**Controls dressed up as audit purposes** — “prevent simple passwords”, “halt intruders”, “require password changes”. An audit **reveals and evaluates**; it does not enforce.",
    "**Static review offered as proof of effectiveness** — “a static analysis evaluation of policies and procedures”. The syllabus: effectiveness is shown by **security test results**.",
    "**Half-scoped testing** — “security test results that focus on current threats” or “emerging threats” only. The official rationale rejects both: **configurations, etc.** must also be covered.",
    "**The right stakeholder group, but the wrong reason** — customers for “good communication” when the stem is about **legal compliance** (→ regulators).",
    "**Value-only asset assessment** — the level of security needed also depends on **where** the asset is, **how** it is accessed and **how** it is secured.",
    "**Treating a risk assessment as permanent** — it is a **snapshot**.",
    "**Restriction confused with control** — minimum access means access is **controlled**, not **severely limited**; controls over self-provisioned devices are **encouraged**, not prohibited.",
  ] });

  B.push({ h2: "5.3 Keyword recognition (map words → answers)" });
  B.push({ table: { head: ["If the stem says…", "Think…"], widths: [6.0, 8.0], rows: [
    ["“government mandated”, “law”, “regulation”, “compliance”", "**Regulatory agencies** — the source of the guidelines"],
    ["“effectiveness of policies and procedures”", "**Analyze security test results**"],
    ["“in place and followed, but…”", "**Not effective** — only a test reveals it"],
    ["“purpose of an audit”, “audit finding”", "**Reveal / identify** weaknesses — e.g. **vendor security updates not applied**"],
    ["“snapshot”, “point in time”", "Repeat risk assessments **regularly** (3–6 months to annually)"],
    ["“missed risks”, “incomplete information”", "**Methodology as checklist** + **many participants**"],
    ["“impact × likelihood”", "**Risk exposure**"],
    ["“medium likelihood, high impact”", "**High** severity (syllabus matrix)"],
    ["“two people must approve”", "A **control** (administrative, preventive)"],
    ["“dumpster diving”", "**Inadequate physical security** audit finding"],
    ["“PasswordA / PasswordB”", "**Inadequate password maintenance** — password history in audit tools"],
    ["“people, process, technology”", "**Iron triangle**; every incident traces back to one"],
    ["“only way to know for sure”", "**Test from an attacker perspective** — ethical hacking / penetration testing"],
  ] } });

  B.push({ h2: "5.4 Typical traps" });
  B.push({ ul: [
    "**Confidential vs private vs secret.** Confidential is the **default** for internal documents. Private is **officers only** (M&A, card data). Secret is **external-party** information that may have **no tangible value to the organization itself** — so it is **not a trade secret**.",
    "**Threat vs threat source vs vulnerability.** A **source** (hostile attacker, human error, structural failure, disaster) causes a **threat event**, which exploits a **vulnerability** (a weakness in a system, procedure, control or implementation).",
    "**Adversarial vs non-adversarial likelihood.** Adversarial → **intent, capability, targeting**. Non-adversarial → **historical evidence, empirical data**.",
    "**Business vs technical impact.** Use **business impact** when available; technical impact is **the next best thing**.",
    "**Audit scope.** Larger than testing, not smaller; audits cover what is **hard to test directly**.",
    "**Recovery vs reaction.** Speed of incident response = **reaction** (the key effectiveness indicator). Root cause analysis = **recovery**.",
  ] });

  B.push({ h2: "5.5 How to eliminate wrong answers" });
  B.push({ ol: [
    "**Check the verb.** Audits reveal; controls prevent; tests prove; assessments value and prioritise. An option with the wrong verb for the activity is wrong.",
    "**Check the evidence.** If the stem asks about effectiveness, strike every option that relies only on documents, interviews or static review.",
    "**Check the scope.** Strike options limited to “current” or “emerging” threats when the syllabus wants both — and configurations too.",
    "**Check the source.** For compliance, the right stakeholder is the one who **issues** the rules.",
    "**Check completeness.** For asset questions, value + location + access + protection beats any single factor.",
  ] });

  B.push({ h2: "5.6 Scenario-solving shortcuts" });
  B.push({ table: { head: ["Scenario shape", "Shortcut"], widths: [5.0, 9.0], rows: [
    ["“Report effectiveness to senior management”", "Pick the option that **analyses test results**."],
    ["“Ensure vendors keep complying with government guidelines”", "Pick the option naming the **agencies that issue** the guidelines."],
    ["“What data do you need to assess the security level of asset X?”", "Pick the option that answers **value, location, access, protection**."],
    ["“Risk assessment missed something”", "Pick **checklist methodology + broader participation**, or **repeat the assessment**."],
    ["“Audit found X; what next?”", "**Evaluate risk and put an improvement plan in place**; then test to prove or disprove."],
    ["“Known critical risk deferred”", "The organization carries **liability** (tax-agency example)."],
  ] } });

  B.push({ h2: "5.7 Common candidate mistakes" });
  B.push({ ul: [
    "Treating Chapter 1 as “intro” and skipping it — it holds **two 3-point questions**.",
    "Memorising all eighteen policies word-for-word instead of learning the **identifying phrase** of each (Table 3.2).",
    "Forgetting that assets can be **physical or intangible** (reputation, ability to deliver services).",
    "Believing an audit **guarantees** finding all vulnerabilities — neither audits nor tests do.",
    "Reading the risk matrix with the axes swapped. Rows are **impact**, columns are **likelihood** in this guide’s rendering; the syllabus reading is **medium likelihood × high impact = high**.",
  ] });

  B.push({ h2: "5.8 Mnemonics that carry the whole chapter" });
  B.push({ table: { head: ["Mnemonic", "Expands to"], widths: [3.6, 10.4], rows: [
    ["**W-H-W-H-H** (Which, How valuable, Where, How accessed, How secured)", "The five asset questions"],
    ["**S-E-V-L-I** (“Seven lives”)", "NIST conduct order: **S**ources → **E**vents → **V**ulnerabilities → **L**ikelihood → **I**mpact"],
    ["**A-P-D-R-R** (“A Pretty Dull Risk Report”)", "Five audit pillars: **A**ssessment, **P**revention, **D**etection, **R**eaction, **R**ecovery"],
    ["**ATP × PDCR**", "Control types **A**dministrative, **T**echnical, **P**hysical × functions **P**reventive, **D**etective, **C**orrective, **R**ecovery"],
    ["**P-C-HC-P-S** (“Please Call Him Privately, Sir”)", "Data classification: **P**ublic, **C**onfidential, **H**ighly **C**onfidential, **P**rivate, **S**ecret"],
    ["**“Audit finds, test proves”**", "The auditing–testing relationship in four words"],
  ] } });

  B.push({ h2: "5.9 Chapter 1 mind map" });
  B.push({ table: { head: ["Branch", "Leaves"], widths: [3.4, 10.6], rows: [
    ["**Security risk**", "Impact × likelihood · CIA loss · NIST 800-30 · OWASP risk rating · snapshot · checklist + many people"],
    ["**Assets**", "Information · physical · intangible · value methods · location · access · protection"],
    ["**Risk assessment**", "External stakeholders · prepare / conduct / communicate · threats, vulnerabilities, impact, likelihood, predisposing conditions · 0–9 scoring · matrix"],
    ["**Policies**", "18 examples · data classification · procedures (how) · controls ATP × PDCR"],
    ["**Policy analysis**", "Objectives + criteria · checklist · auditor tasks (static + dynamic) · test results prove effectiveness"],
    ["**Auditing**", "Manual examination · larger scope than testing · 5 pillars · typical findings · people/process/technology · attacker perspective"],
  ] } });

  // ================= SECTION 6 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 6 — Revision Notes" });
  B.push({ h2: "6.1 One-page chapter summary" });
  B.push({ p: "**Security testing starts from security risk.** A security risk assessment tells you which assets are at risk and how much; it is the basis for planning, designing and prioritizing tests, and aligns them with business objectives — provided it reflects real threats, stakeholders and assets. It is a snapshot, so repeat it; and it misses things, so use a methodology checklist and many participants." });
  B.push({ p: "**Assets** are information, physical items and intangibles. Assess **which** matter, **how valuable** they are, **where** they live, **how** they are accessed and **how** they are protected. **Risk assessment technique** (NIST 800-30): prepare, conduct (sources → events → vulnerabilities → likelihood → impact), communicate; include customers, the public and regulators." });
  B.push({ p: "**Policies** rest on the risk assessment; **procedures** implement them step by step; **controls** (administrative, technical, physical × preventive, detective, corrective, recovery) enforce them. **Effectiveness is proven by security test results**, not by paperwork." });
  B.push({ p: "**Audits** manually examine and evaluate, with a larger scope than testing, along five pillars. **Audit finds; test proves.** Risk exposure = impact × likelihood; severity drives the urgency of mitigation." });
  B.push({ h2: "6.2 Key definitions to memorize" });
  B.push({ table: { head: ["Term", "Definition"], widths: [3.4, 10.6], rows: [
    ["Risk", "Function of adverse impact and likelihood of occurrence"],
    ["Information security risk", "Risk from loss of confidentiality, integrity or availability"],
    ["Risk exposure", "Impact × likelihood"],
    ["Threat", "Circumstance or event with potential adverse impact via an information system"],
    ["Vulnerability", "Weakness in a system, procedure, internal control or implementation that a threat source could exploit"],
    ["Security control", "Safeguard or countermeasure to avoid, counteract or minimize loss"],
    ["Security procedure", "Steps to implement a policy or control, or respond to an incident"],
    ["Security audit", "Manual examination and evaluation identifying weaknesses in security processes and infrastructure"],
  ] } });
  B.push({ h2: "6.3 High-priority concepts (study first)" });
  B.push({ ol: [
    "**Test results prove policy effectiveness** (AS-1.2.2 — guaranteed 3 points).",
    "**External stakeholders and NIST process** (AS-1.1.3 — possible 3 points).",
    "**Five asset questions** (AS-1.1.2 — possible 3 points).",
    "**Policy recognition and data classification** (AS-1.2.1 — guaranteed 1 point).",
    "**Audit purpose and pillars** (AS-1.3.1 — possible 1 point).",
  ] });
  B.push({ h2: "6.4 Last-minute revision sheet" });
  B.push({ box: { kind: "ok", title: "If you read nothing else", body: [
    "Risk = impact × likelihood. Info-sec risk = loss of C, I or A. Assessment = snapshot → repeat; checklist + many people.",
    "Assets: which · how valuable · where · accessed how · secured how. Physical/intangible: prototypes, service delivery, reputation.",
    "External stakeholders: customers/users (communication) · public (community) · **regulators (law)**.",
    "NIST conduct: sources → events → vulnerabilities → likelihood → impact.",
    "Policy basis = risk assessment. Procedure = how. Controls: ATP × PDCR, from each category.",
    "**Effectiveness = security test results.** In place + followed ≠ effective.",
    "Audit = manual examination; scope larger than testing; pillars APDRR; reveals e.g. missing vendor updates.",
    "Matrix: medium likelihood × high impact = high. Business impact > technical impact.",
  ] } });
  B.push({ h2: "6.5 Memorization checklist" });
  B.push({ table: { head: ["✓", "I can…"], widths: [0.8, 13.2], rows: [
    ["☐", "state the role of a risk assessment in planning, design, prioritization and alignment"],
    ["☐", "list the five asset questions and give two examples for each"],
    ["☐", "name the three external stakeholder groups and why each is included"],
    ["☐", "order the NIST conducting tasks"],
    ["☐", "match at least twelve behaviours to their policy"],
    ["☐", "order the five data classification levels and give one example each"],
    ["☐", "explain why test results, not documents, show policy effectiveness"],
    ["☐", "name the five audit pillars and seven typical audit findings"],
    ["☐", "compute risk exposure and read the syllabus risk matrix"],
  ] } });
  B.push({ h2: "6.6 Exam-day quick review" });
  B.push({ ul: [
    "Two of the four Chapter 1 questions are **3-point K4s** — read their scenarios slowly.",
    "**Audit = reveal.** **Control = prevent.** **Test = prove.**",
    "**Compliance question → regulators.**",
    "**Effectiveness question → test results.**",
  ] });

  return B;
};
