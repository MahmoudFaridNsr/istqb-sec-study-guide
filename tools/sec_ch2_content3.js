// CT-SEC Chapter 2 — Sections 5 to 7
module.exports = function () {
  const B = [];

  // ================= SECTION 5 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 5 — Exam Tricks" });

  B.push({ h2: "5.1 Frequently tested topics (evidence-based)" });
  B.push({ table: { head: ["LO", "K", "Qs", "Pts", "Sample #", "Format used officially"], widths: [2.0, 0.8, 0.8, 0.8, 1.4, 8.2], rows: [
    ["AS-2.2.1", "K2", "pool", "1", "#5", "“How does it help … to have done security testing?” → **due diligence**"],
    ["AS-2.4.3", "K2", "pool", "1", "#6", "“Which is a correct statement?” → **security testing is part of IA**"],
    ["AS-2.4.2", "**K3**", "1", "**2**", "#7", "Numbered list of 7 candidate objectives → pick the **security** four"],
    ["AS-2.5.1", "**K3**", "1", "**2**", "#8", "Scope expanded by edict → **too large, resources depleted**"],
    ["AS-2.6.x / 2.7.1", "**K4**", "1", "**3**", "#9", "Long failed-program scenario → **policy + testing policy first**"],
    ["AS-2.6.3", "**K3**", "1", "**2**", "#10", "Fraud / credit card → **business customers**"],
    ["**Chapter 2 total**", "—", "**6**", "**11**", "**#5–#10**", "**14% of the points at 5.1 points per teaching hour**"],
  ] } });
  B.push({ box: { title: "The arithmetic", body: "Chapter 2’s **three K3 questions are each worth two K2s**. Learning **three short lists** — six stakeholder benefits, the two scope consequences, the three sources of objectives — secures **6 points**, more than an entire K2-only chapter would give." } });

  B.push({ h2: "5.2 Common distractors observed" });
  B.push({ ul: [
    "**Using test records for forensics or recovery** (track the perpetrator, restore from the pre-test backup) instead of **due diligence**.",
    "**IA inside security testing**, or the two being the same — the hierarchy is **IA ⊃ testing**.",
    "**Functional items in a security-objective list** — retry counts without lockout, emailing a password, admin resets.",
    "**Worries that may be controllable** (“not well-focused”, “not clearly defined”) beside the syllabus consequence (**too large → resources depleted**).",
    "**Approach before policy** — presenting a test approach to executives who have no policy to anchor it.",
    "**The stakeholder who is involved but not the primary beneficiary** — executives and regulators for a fraud-protection objective.",
  ] });

  B.push({ h2: "5.3 Keyword recognition (map words → answers)" });
  B.push({ table: { head: ["If the stem says…", "Think…"], widths: [6.0, 8.0], rows: [
    ["“legal action”, “court”, “breach occurred”", "**Due diligence**"],
    ["“assurance to clients”", "**Confidence and trust**"],
    ["“information assurance”", "**Broader than** security testing (like QA)"],
    ["“scope expanded immediately”", "**Too large → resources depleted**"],
    ["“only the login page”", "**Too small → no confidence**"],
    ["“agreed in principle, no budget”", "**Lack of executive leadership / resources → write the policy**"],
    ["“fraud”, “credit card”", "**Business customers**"],
    ["“legal obligations”, “internal policy”", "**Compliance officers**"],
    ["“external laws”, “regulations”", "**Regulatory officers**"],
    ["“private data”, “personal information”", "**Privacy officers**"],
    ["“due diligence” as a stakeholder benefit", "**Senior management**"],
    ["“business protection”", "**Executive management**"],
    ["“post-release vulnerabilities”", "**Effectiveness KPI** — locate when and where"],
  ] } });

  B.push({ h2: "5.4 Typical traps" });
  B.push({ ul: [
    "**Senior vs executive management.** Executive → **business protection**; senior → **due diligence**. Learn the pair.",
    "**Compliance vs regulatory officers.** Compliance = **internal** corporate policies, legal obligations. Regulatory = **external** security laws.",
    "**Strategy vs approach.** Strategy = **organization** level overall direction. Approach = **project** level blend of techniques, tools, skills.",
    "**Degrees of failure.** One missed vulnerability does **not** by itself mean the approach failed — but a missed vulnerability **in an area the policy required testing** does indicate failure.",
    "**IA properties.** The IA definition includes **authentication and non-repudiation**, not only CIA.",
  ] });

  B.push({ h2: "5.5 How to eliminate wrong answers" });
  B.push({ ol: [
    "**Strike anything that guarantees** safety, completeness or zero vulnerabilities.",
    "**Strike options that skip a level of the hierarchy** — approach without policy, testing policy before security policy.",
    "In objective lists, **strike items with no security consequence** stated in the stem.",
    "In stakeholder questions, **find the stakeholder whose own asset or duty is at stake**.",
    "In KPI questions, **strike options that call a high, stable metric a problem** because it is not 100%.",
  ] });

  B.push({ h2: "5.6 Scenario-solving shortcuts" });
  B.push({ table: { head: ["Scenario shape", "Shortcut"], widths: [5.0, 9.0], rows: [
    ["Long story of sporadic, undocumented, unfunded testing", "**Policy and testing policy, aligned to the approach**"],
    ["Management widens scope after a breach", "**Resources may run out** before testing finishes"],
    ["List of candidate objectives", "Keep only those that verify **the security feature named**"],
    ["New technology (mobile, cloud, mainframe) in the scenario", "Add objectives for **technology attributes** — e.g. data in transit"],
    ["Team lacks skills / environment", "The approach **least likely to succeed** ignores that constraint"],
    ["KPI table", "Find the **low coverage + post-release escapes**; leave the high stable ones alone"],
  ] } });

  B.push({ h2: "5.7 Common candidate mistakes" });
  B.push({ ul: [
    "Answering stakeholder questions by **seniority** rather than by **whose benefit** the stem describes.",
    "Forgetting that §2.1’s list of threats (XSS, buffer overflow, MITM, logic bombs…) is examinable vocabulary everywhere.",
    "Treating “security testing is often outsourced” as advice — it is an **observation** about the organizational context.",
    "Missing that the syllabus says security testing is **often one type of functional testing**.",
  ] });

  B.push({ h2: "5.8 Mnemonics that carry the whole chapter" });
  B.push({ table: { head: ["Mnemonic", "Expands to"], widths: [3.6, 10.4], rows: [
    ["**F-T-V** (“Feature, Tech, Vuln”)", "Sources of security test objectives"],
    ["**Small = Sure-not; Large = Lack**", "Scope too small → no confidence; too large → lack of resources"],
    ["**“EBe, SDue, CuFraud, CoLaw, ReReg, PriPriv”**", "Executive–business protection · Senior–due diligence · Customers–fraud · Compliance–legal obligations · Regulatory–regulations · Privacy–private data"],
    ["**P → TP → S → A → T**", "Security Policy → Testing Policy → Strategy → Approach → Tasks"],
    ["**AIACN**", "IA properties: Availability, Integrity, Authentication, Confidentiality, Non-repudiation"],
    ["**R-P-R** KPIs + E", "Coverage of **R**isks, **P**olicies, **R**equirements; **E**ffectiveness (when and where, pre/post release)"],
  ] } });

  B.push({ h2: "5.9 Chapter 2 mind map" });
  B.push({ table: { head: ["Branch", "Leaves"], widths: [3.4, 10.6], rows: [
    ["**Why**", "Identify risks · evaluate defenses · due diligence · assurance · cannot guarantee safety"],
    ["**Context**", "Risk drives extent · specialist/outsourced · lifecycle activity · six realities"],
    ["**Objectives**", "Aligned to policy · per feature + technology + vulnerabilities · IA ⊃ testing · scope ↔ integrity"],
    ["**Approaches**", "Strategy vs approach · 13 factors · technology-specific · 12 failure causes · RCA"],
    ["**People**", "Business case · six stakeholder benefits"],
    ["**Improvement**", "Short/long term · process/organization · people/tools/systems/techniques · four KPIs"],
  ] } });

  // ================= SECTION 6 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 6 — Flashcards" });
  B.push({ lead: "Cover the back of each card and recall it from the front. All cards are drawn from Chapter 2 of the CTAL-SEC 2016 syllabus. Target: three clean passes before exam day." });
  B.push({ flash: [
    ["Two ways security testing differs from other functional testing?", "**Standard input selection techniques may miss important security issues**; **symptoms of security defects are very different**."],
    ["How does security testing assess vulnerability?", "**By attempting to compromise the system’s security policy.**"],
    ["Name six threats to explore during security testing.", "Unauthorized copying · unauthorized access · unintended side effects · **XSS** · **buffer overflow** · **DoS** · **man in the middle** · breaking encryption · **logic bombs**."],
    ["What is a logic bomb?", "Malicious code that **activates only under certain conditions** (e.g. a date) and may delete files or format disks — sometimes called an **Easter egg**."],
    ["Example of an unintended side effect?", "A media player that plays audio correctly but **writes files to unencrypted temporary storage**, exploitable by **software pirates**."],
    ["What can’t security testing do?", "**Guarantee** a system or organization will be safe from attack."],
    ["Legal benefit of security testing?", "Shows **due diligence** — reasonable steps such as testing for vulnerabilities **may be a defense in a court of law**."],
    ["What supplements security testing?", "**Audits and reviews** of security practices."],
    ["What ultimately drives the extent of security testing?", "**Business or organizational risks that are security-based.**"],
    ["Why can’t security be added at the end?", "**Security can’t be effectively patched into code or tested into code**; it must be **built in** using secure coding and design."],
    ["Six realities affecting a security test team’s success?", "**Limited time, resources and scope · risk levels · security testing skill sets · lifecycle approaches.**"],
    ["When can the security testing policy be written?", "**Once the organization’s security policy has been approved by senior management.**"],
    ["Two consequences of misalignment with the security policy?", "**Unauthorized security tests are performed**, or **tests don’t achieve the desired purposes**."],
    ["How many objectives per security feature?", "**One or more.**"],
    ["Three bases for security test objectives?", "**Functionality (security features) · technology attributes (web, mobile, cloud, LAN) · known vulnerabilities (application and generic).**"],
    ["The syllabus’s three example objectives?", "Password strength rule applied · all data entry fields validated against SQL injection · customer data files encrypted at the correct strength."],
    ["Define information assurance.", "Measures that protect and defend information and systems by ensuring **availability, integrity, authentication, confidentiality and non-repudiation**, incl. **restoration** via protection, detection and reaction."],
    ["Define security testing (MDA).", "A process to determine that **security features are implemented as designed** and **adequate for a proposed application environment**."],
    ["IA vs security testing?", "**IA is wider; security testing is part of IA** — like QA and software testing."],
    ["Scope rule?", "**The greater the need for integrity of sensitive assets, the greater the need for coverage.**"],
    ["Scope too small? Too large?", "Too small → **confidence not achieved**. Too large → **resources depleted before the test finishes**."],
    ["Strategy vs approach?", "**Strategy** formalizes and communicates the organization’s overall direction. **Approach** is project-level, implements the strategy — a **blend of techniques, tools and skills**."],
    ["Name eight of the thirteen factors to analyse for an approach.", "Source of systems · previous testing · security policy · security testing policy · prior risk assessments · technical environment · team skills · common risks · test org structure · project team structure · tool experience · **constraints** · **assumptions**."],
    ["What did the Cattles Group lose?", "**Two unencrypted backup tapes** with data on about **1.4 million customers**."],
    ["How to find why an approach failed?", "**Root cause analysis.**"],
    ["Name six causes of approach failure.", "Lack of **executive leadership** · lack of **executive provision of resources** · ineffective **implementation** · lack of **organizational/stakeholder support** · lack of understanding of **risks** · lack of **alignment** with policy/strategy · lack of understanding of system **purpose** · lack of **technical information** · lack of **tools** · lack of **skills**."],
    ["What must be made to management for security testing to be effective?", "**A business case** — risks of lapses and benefits of an effective approach."],
    ["Executive management sees…?", "**Business protection.**"],
    ["Senior management sees…?", "**Due diligence.**"],
    ["Business customers see…?", "**Protection from fraud.**"],
    ["Compliance officers see…?", "**Assurance the organization is compliant in terms of legal obligations** (internal policies)."],
    ["Regulatory officers see…?", "**Security regulations are being followed** (external laws)."],
    ["Privacy officers see…?", "**Private data kept secure; due diligence shown** in protecting digital assets."],
    ["Three perspectives for evaluating test practices?", "**Short- and long-term · process and organization · people, tools, systems and techniques.**"],
    ["Four key metrics?", "Coverage of **security risks** · of **policies and practices** · of **security requirements** · **effectiveness** of past testing by **when and where** vulnerabilities were found, **pre- and post-release**."],
  ] });

  // ================= SECTION 7 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 7 — Revision Notes" });
  B.push({ h2: "7.1 One-page chapter summary" });
  B.push({ p: "**Why:** security testing assesses vulnerability by trying to compromise the security policy. It cannot guarantee safety, but it identifies risks, evaluates defenses, demonstrates **due diligence** (a possible legal defense) and gives clients **assurance**. **Where:** its extent is driven by security-based business risk; it is a lifecycle activity — security cannot be patched or tested in; success depends on time, resources, scope, risk, skills and lifecycle." });
  B.push({ p: "**What:** the security testing policy follows and aligns to the approved security policy. Objectives exist **per security feature**, and also from **technology attributes** and **known vulnerabilities**. IA is the umbrella; testing sits inside it. Coverage grows with the **integrity need** of the assets — but too small a scope gives no confidence and too large a scope runs out of resources." });
  B.push({ p: "**How:** the strategy sets direction; project approaches implement it, shaped by thirteen situational factors and by technology. When approaches fail, root cause analysis finds the cause among twelve. A business case wins management; each stakeholder sees a different benefit. Practices improve by measuring coverage of risks, policies and requirements, and effectiveness pre- and post-release." });
  B.push({ h2: "7.2 Key definitions to memorize" });
  B.push({ table: { head: ["Term", "Definition"], widths: [3.4, 10.6], rows: [
    ["Information assurance", "Protect and defend information and systems: availability, integrity, authentication, confidentiality, non-repudiation; restoration via protection, detection, reaction"],
    ["Security testing", "Determine security features are implemented as designed and adequate for the environment"],
    ["Security test strategy", "The organization’s overall direction for security testing"],
    ["Security test approach", "Project-level blend of techniques, tools and skills implementing the strategy"],
  ] } });
  B.push({ h2: "7.3 High-priority concepts (study first)" });
  B.push({ ol: [
    "Stakeholder → benefit table (**AS-2.6.3**, 2 pts guaranteed).",
    "Scope too small / too large (**AS-2.5.1**, 2 pts guaranteed).",
    "Objective sources and the security-vs-functional filter (**AS-2.4.2**, 2 pts guaranteed).",
    "Policy first; twelve failure causes; thirteen approach factors; four KPIs (**K4 pool**, 3 pts).",
    "Due diligence; IA ⊃ testing; six realities; alignment (**K2 pool**, 2 pts).",
  ] });
  B.push({ h2: "7.4 Last-minute revision sheet" });
  B.push({ box: { kind: "ok", title: "If you read nothing else", body: [
    "Breach + legal action → **due diligence**. IA ⊃ security testing.",
    "Extent driven by **security-based business risk**. Can’t patch or test security in.",
    "Security policy (senior mgmt) → testing policy → strategy → approach. Misaligned = unauthorized tests or missed purposes.",
    "Objectives: ≥1 per security feature + technology attributes + known vulnerabilities. Retry counts and email resets are functional.",
    "More integrity need → more coverage. Too small = no confidence; too large = resources depleted.",
    "Exec = business protection · Senior = due diligence · Customers = fraud · Compliance = legal obligations · Regulatory = regulations · Privacy = private data.",
    "Failed approach → RCA; leadership, resources, alignment, skills, information. Fix = **policy first**.",
    "KPIs: coverage of risks, policies, requirements; effectiveness pre/post release.",
  ] } });
  B.push({ h2: "7.5 Memorization checklist" });
  B.push({ table: { head: ["✓", "I can…"], widths: [0.8, 13.2], rows: [
    ["☐", "list the §2.1 threats and describe XSS, buffer overflow, MITM and logic bombs"],
    ["☐", "state what security testing can and cannot do, and its legal benefit"],
    ["☐", "name the six realities that affect a security test team"],
    ["☐", "explain the policy hierarchy and the two consequences of misalignment"],
    ["☐", "filter a list of objectives into security and functional"],
    ["☐", "quote the IA definition’s five properties and place IA relative to testing"],
    ["☐", "state the scope rule and both consequences"],
    ["☐", "list ten of the thirteen approach factors and ten of the twelve failure causes"],
    ["☐", "map all six stakeholders to their benefits"],
    ["☐", "name the four KPIs and interpret a KPI table"],
  ] } });
  B.push({ h2: "7.6 Exam-day quick review" });
  B.push({ ul: [
    "Three K3 questions = **6 points** from three lists. Do them carefully but quickly.",
    "**Fraud → customers. Law → regulators. Internal policy → compliance. Privacy → privacy officers.**",
    "**Long sad scenario → policy first.**",
  ] });

  return B;
};
