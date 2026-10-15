// CT-SEC Chapter 3 — Sections 5 and 6
module.exports = function () {
  const B = [];

  // ================= SECTION 5 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 5 — Exam Tricks" });

  B.push({ h2: "5.1 Frequently tested topics (evidence-based)" });
  B.push({ table: { head: ["LO", "K", "Qs", "Pts", "Sample #", "Format used officially"], widths: [2.0, 0.8, 0.8, 0.8, 1.4, 8.2], rows: [
    ["AS-3.1.1", "**K3**", "1", "2", "#11", "Activity described → **which process step**?"],
    ["AS-3.2.1", "**K4**", "1", "**3**", "#12", "Plan contents listed → **what is still missing**?"],
    ["AS-3.3.x", "**K3**", "1", "2", "#13", "Four test cases → **which best tests the procedure**?"],
    ["AS-3.4.1 / 3.6.1", "K2", "1", "1", "#14", "Main characteristic of an effective environment"],
    ["AS-3.4.2", "K2", "1", "1", "#15", "Concern when seeking approval for tools"],
    ["AS-3.5.1", "**K4**", "1", "**3**", "#16", "XSS found in an update → **proper set of steps**"],
    ["**Chapter 3 total**", "—", "**6**", "**12**", "**#11–#16**", "**15% of the points; two 3-point K4s**"],
  ] } });
  B.push({ box: { title: "The arithmetic", body: "Chapter 3’s two K4s and one guaranteed K3 total **8 points** — two-thirds of the chapter, and as much as **eight K2 questions** anywhere else on the paper. The plan-review and incident-handling questions are **pattern questions**: once you have the six-element checklist and the “production first, secure tracker” sequence, they are fast." } });

  B.push({ h2: "5.2 Common distractors observed" });
  B.push({ ul: [
    "**Publicising a vulnerability** — stakeholder report, weekly status report. Always wrong while unresolved.",
    "**Investigating without notifying** — further tests and static analysis, but no notification. **Notification is critical.**",
    "**Plausible plan extras** — credentials and training lists, copies of regulations, tester phone numbers. Not among the six minimum elements.",
    "**“Several” attempts** in a lockout test case — the procedure says **three**.",
    "**Environment tied to production** or with **extra plug-ins** — false positives and negatives.",
    "**Approval bypass in a crisis** — a fast track is fine, a complete bypass is risky.",
    "**Choosing analysis/design** when conceptual tests **already exist** — the next step is implementation.",
  ] });

  B.push({ h2: "5.3 Keyword recognition (map words → answers)" });
  B.push({ table: { head: ["If the stem says…", "Think…"], widths: [6.0, 8.0], rows: [
    ["“conceptual tests → manual tests, execute”", "**Implementation and execution**"],
    ["“define scope corresponding to risks”", "**Planning and control**"],
    ["“review risk assessment, define conditions”", "**Analysis and design**"],
    ["“archive results securely”", "**Closure**"],
    ["“what is still missing from the plan”", "Tick the **six elements**"],
    ["“version currently in production”", "**Check production first**"],
    ["“found one XSS”", "**Continue testing for others** (extent)"],
    ["“untrusted code”, “third-party”", "**Isolated / virtual** environment"],
    ["“mimics production”", "**Complete** — incl. **access rights**"],
    ["“against the law”, “prohibited tools”", "**Approval / authorization**"],
    ["“hold harmless”", "**Authorization form**"],
    ["“COTS”", "**No structural testing** possible"],
    ["“open source”, “publicized vulnerability”", "**Patch promptly**"],
    ["“wrong error message reveals user name”", "**Account harvesting**"],
    ["“steps out of order for a discount”", "**Application logic attack**"],
  ] } });

  B.push({ h2: "5.4 Typical traps" });
  B.push({ ul: [
    "**Functional vs structural access controls.** Functional = logins, passwords, tokens (does the login behave correctly?). Structural = **rights configured** per user level, encryption levels, authentication — test accounts per level.",
    "**Functional security controls** are **transaction controls** (head-teller approval) — a third, separate category.",
    "**Internal breach vs intrusion.** Intercepting outbound transmissions is an **internal breach**.",
    "**Test case vs procedure vs script.** Script = **automated procedure**.",
    "**Sequential lifecycle** — tests _can_ be done any time but are **commonly late**; that is a risk, not a rule.",
    "**DDoS vs amplification vs logical DoS** — botnet vs protocol reflection vs abusing intended function.",
  ] });

  B.push({ h2: "5.5 How to eliminate wrong answers" });
  B.push({ ol: [
    "In incident questions, **strike any option that widens the audience** of an unresolved vulnerability.",
    "Then **strike any option that omits notification** or omits **checking production**.",
    "In plan questions, **strike options the stem already covers**, then strike items that are **referenced, not included** (standards) or **too detailed** (phone numbers).",
    "In design questions, **strike vague quantifiers** (“several”, “a few”) and **insecure practices** (passwords in notepad).",
    "In process-step questions, ask **what already exists** — the answer is the **next** step.",
  ] });

  B.push({ h2: "5.6 Scenario-solving shortcuts" });
  B.push({ table: { head: ["Scenario shape", "Shortcut"], widths: [5.0, 9.0], rows: [
    ["Vulnerability found during final testing of an update", "**Production? → secure tracker → notify → extent**"],
    ["Plan with a bullet list", "**Six-element tick list**"],
    ["Policy text quoted", "**Purpose/scope → testability → direct tests** with the policy’s exact numbers"],
    ["Role-based system", "**Test account per level**, verify restrictions"],
    ["E-commerce risks listed", "SQLi, account harvesting, password cracking = **functional**; buffer overflow = **structural**"],
    ["Third-party or open source code to test", "**Isolated/virtual, complete, restorable**"],
  ] } });

  B.push({ h2: "5.7 Common candidate mistakes" });
  B.push({ ul: [
    "Learning Table 3.1 as five headings without the **goal sentence** for each — the goal sentences are what the questions paraphrase.",
    "Forgetting that **evaluation runs alongside execution** to report new threats **as soon as possible**.",
    "Assuming the plan review must be done by security experts only.",
    "Treating the secure coding list as optional reading — it is the source for Chapter 4’s component tests too.",
  ] });

  B.push({ h2: "5.8 Mnemonics that carry the whole chapter" });
  B.push({ table: { head: ["Mnemonic", "Expands to"], widths: [3.6, 10.4], rows: [
    ["**S-W-S-T-E-A** (“Sweet Tea”)", "Plan elements: **S**cope, **W**ho, **S**chedule, **T**asks and time, **E**nvironment, **A**uthorizations"],
    ["**I-C-R** (“I See Red”)", "Environment: **I**solated, **C**omplete, **R**estorable"],
    ["**P-T-D-A-A**", "Design attributes: **P**rioritized, **T**raced, audience-**D**efined, defect-profile **A**ligned, **A**utomatable"],
    ["**T-E-S + N-E-I-R**", "Incident report: **T**ester, **E**nvironment, **S**teps + **N**ature, **E**xtent, **I**mpact, **R**emediation"],
    ["**Prod → Secure → Tell → Search**", "Response to a found vulnerability"],
    ["**P-T-C**", "Policy-based test goals: **P**urpose & scope, **T**estability, **C**reate tests"],
  ] } });

  B.push({ h2: "5.9 Chapter 3 mind map" });
  B.push({ table: { head: ["Branch", "Leaves"], widths: [3.4, 10.6], rows: [
    ["**Process**", "Five steps · goals · example tasks · not sequential · hierarchy · lifecycles (sequential, iterative, COTS, open source)"],
    ["**Planning**", "Two aims · six elements · technical review · IT auditors and security admins"],
    ["**Design**", "Risk/threat model/ad hoc · functional vs structural · five attributes · nine categories · secure coding list · DoS family · intrusions · internal threats · format"],
    ["**Policy tests**", "Purpose → testability → tests · lockout example · audit records example"],
    ["**Execution**", "Isolated · complete · restorable · approvals · authorization form"],
    ["**Evaluation**", "Incident report minimum · special category · IT auditor · confidential final report"],
    ["**Maintenance**", "Change easily · new tests for new threats · new tools"],
  ] } });

  // ================= SECTION 6 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 6 — Revision Notes" });
  B.push({ h2: "6.1 One-page chapter summary" });
  B.push({ p: "**Process.** Security testing is a lifecycle activity aligned with development: planning and control (scope matched to risk), analysis and design (understand threats from assessments, audits, vulnerability sources), implementation and execution (make conceptual tests executable; test from many perspectives), evaluating and reporting (alongside execution), closure (secure archive, improve development). Policy and strategy are organizational; approach and tasks are project-level. Sequential, iterative, COTS and open source each change what is possible." });
  B.push({ p: "**Planning.** Verify defenses work as designed and that no vulnerabilities are introduced. Plan: scope, who, schedule, tasks and time, environment, authorizations. Review technically with a checklist; include IT auditors and security administrators." });
  B.push({ p: "**Design.** Start from risk analysis, threat model or ad hoc categorization. Tests are prioritized, traced, audience-defined, defect-profiled, automatable. Cover functional and structural access controls, functional security controls, secure coding, OS, language and platform vulnerabilities, external (DoS family, intrusions) and internal threats. Policy-based tests: purpose and scope, testability, direct tests using the policy’s exact values." });
  B.push({ p: "**Execution and evaluation.** Environment: isolated, complete, restorable. Never test without authorization. Incident reports carry nature, extent, impact and remediation; file them securely; check production first; notify; look for more. Maintain the process for constant change." });
  B.push({ h2: "6.2 Key definitions to memorize" });
  B.push({ table: { head: ["Term", "Definition"], widths: [3.4, 10.6], rows: [
    ["Account harvesting", "Identifying valid user names, leaving only the password to guess"],
    ["Logical DoS", "Abusing intended functionality to deny access to others"],
    ["Amplification attack", "Abusing protocol responses with a spoofed victim address to multiply traffic"],
    ["Test procedure", "Specifies the sequence of test case execution; a script is an automated procedure"],
    ["Hold harmless clause", "Authorization-form clause protecting the testing entity"],
  ] } });
  B.push({ h2: "6.3 High-priority concepts (study first)" });
  B.push({ ol: [
    "Incident handling and confidentiality (**AS-3.5.1**, 3 pts).",
    "Six plan elements (**AS-3.2.1**, 3 pts).",
    "Process steps and goals (**AS-3.1.1**, 2 pts).",
    "Policy-based and conceptual test design (**AS-3.3.x**, 2 pts).",
    "Approvals (**AS-3.4.2**, 1 pt); environment and maintenance (**AS-3.4.1 / 3.6.1**, 1 pt).",
  ] });
  B.push({ h2: "6.4 Last-minute revision sheet" });
  B.push({ box: { kind: "ok", title: "If you read nothing else", body: [
    "Plan → scope · Analysis/design → threats & conditions · Implementation → conceptual → executable · Evaluate alongside · Closure → secure archive.",
    "Plan = Scope, Who, Schedule, Tasks+time, Environment, Authorizations.",
    "Found a vulnerability in an update? **Production? → secure tracker → notify developer → test for more.** Never the stakeholder report.",
    "Environment: isolated · complete (access rights!) · restorable. No extra plug-ins.",
    "Approval: illegal otherwise · IDS · outages · prosecution. Some countries ban tools.",
    "Lockout test: **exactly three**, temporary password, change it, log out, log back in.",
    "Account harvesting: error message must not reveal which field is wrong.",
    "COTS = no structural testing. Open source = patch once public.",
  ] } });
  B.push({ h2: "6.5 Memorization checklist" });
  B.push({ table: { head: ["✓", "I can…"], widths: [0.8, 13.2], rows: [
    ["☐", "state the goal and three tasks of each of the five process steps"],
    ["☐", "describe security testing concerns for sequential, iterative, COTS and open source"],
    ["☐", "list the six plan elements with one question each"],
    ["☐", "name the five design attributes and the four-step design flow"],
    ["☐", "give an example test for functional security controls, functional access controls and structural access controls"],
    ["☐", "list eight secure coding practices"],
    ["☐", "distinguish DoS, DDoS, amplification, resource exhaustion and logical DoS"],
    ["☐", "write the six-step lockout procedure"],
    ["☐", "list the three environment attributes and four approval reasons"],
    ["☐", "list the seven minimum incident report items and three reasons to restrict them"],
  ] } });
  B.push({ h2: "6.6 Exam-day quick review" });
  B.push({ ul: [
    "Two 3-point questions here: **plan gaps** and **vulnerability handling**.",
    "**What already exists?** → the answer is the next process step.",
    "**Exact numbers** beat “several”.",
  ] });

  return B;
};
