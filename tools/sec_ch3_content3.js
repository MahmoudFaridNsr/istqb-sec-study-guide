// CT-SEC Chapter 3 — Sections 5 to 7
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
  B.push({ h1: "Section 6 — Flashcards" });
  B.push({ lead: "Cover the back of each card and recall it from the front. All cards are drawn from Chapter 3 of the CTAL-SEC 2016 syllabus. Target: three clean passes before exam day." });
  B.push({ flash: [
    ["Goal of security test planning and control?", "**Define an appropriate scope of testing that corresponds to the security risks.**"],
    ["Goal of security test analysis and design?", "**Understand specific threats and risks** based on **security assessments, audits and standard sources of known vulnerabilities**."],
    ["Goal of security test implementation and execution?", "**Translate conceptual tests into executable tests** (manual or tool) and perform them from **internal, external and malicious user** perspectives."],
    ["Goal of evaluating and reporting?", "Evaluate individual tests **alongside execution** and **report new threats as soon as possible**."],
    ["Goal of test closure?", "Bring activities to closure so tests **can be maintained and repeated**; store all testware and results **securely** but available."],
    ["Is the security test process sequential?", "**Not necessarily** — it aligns with the lifecycle; activities run **alongside** others."],
    ["Hierarchy of security test planning?", "**Policy, strategy** (organizational) → **approach, tasks** (project)."],
    ["COTS limitation?", "**No access to code — no structural analysis or structural testing.**"],
    ["Open source key risk?", "Code is public; **once a vulnerability is publicized, users of that version and earlier are at risk** — patch promptly."],
    ["Iterative: when should an identified security risk be addressed?", "**In the iteration in which it is identified** — though some may need more than one cycle."],
    ["Four security functions in the iterative example?", "**User login · SSL enablement · reset lost password · lockout after three tries.**"],
    ["Two aspects security testing should focus on?", "**Defenses implemented and functioning as designed**; **no vulnerabilities introduced during development**."],
    ["Six key plan elements?", "**Scope · who performs it · schedule · tasks and time for each · environment(s) · authorizations and approvals.**"],
    ["Which items must be tested before others?", "E.g. **access rights and logins**."],
    ["Best review type for a security test plan?", "Often a **technical review** (walkthroughs and inspections may also suit), with a **checklist**."],
    ["Who is especially helpful in reviewing the plan?", "**IT auditors and security administrators.**"],
    ["Three starting points for test design?", "**Risk analysis · threat model · ad hoc origin categorization of risks.**"],
    ["Functional vs structural security risks (e-commerce)?", "Functional: **SQL injection, account harvesting, password cracking.** Structural: **buffer overflow**."],
    ["Five attributes of detailed security tests?", "**Prioritized** by risk/threat model · **traced** to requirements · defined for **audience** · based on **defect profiles** · **automatable** if applicable."],
    ["Four-step design flow?", "**Approach → risks, threat models, requirements → design techniques → test cases and scenarios.**"],
    ["Test for account harvesting?", "Correct user name + wrong password → **error must not say which item is incorrect**."],
    ["Test for structural access controls?", "**Test accounts per access level**; verify each level cannot do what is restricted."],
    ["Example of a functional security control?", "**Bank teller needs head teller approval** above a withdrawal limit."],
    ["Five secure coding practices?", "Random session IDs · server-side authorization · no secrets in errors · no stack traces · no sensitive data in GET · validate/sanitize input · least privilege, never root."],
    ["Key principle behind secure coding?", "**Many attacks exploit software defects to make a system behave unexpectedly.**"],
    ["What did WhiteHat 2014 find about languages?", "**Negligible differences** in security between languages; **how the code is implemented** is the key factor."],
    ["Define DDoS.", "DoS **launched indirectly using other computers** — **amplification** or **botnets**."],
    ["Amplification example?", "Ask a DNS server for **all records** while **spoofing the victim’s address**; the victim is flooded."],
    ["Resource exhaustion example?", "Repeated **SSL key regeneration** requests."],
    ["Logical DoS example?", "**Predictable user names + permanent lockout after three failures.**"],
    ["Four levels of DDoS testing?", "No known **malware** · **IDS** detects many requests from one machine · **abusable configurations** · **logic defects**."],
    ["Name five intrusion methods.", "Social engineering · injection · account compromise · exploiting known vulnerabilities · malware · insecure configuration · authorization defects · **application logic attacks**."],
    ["Internal threat sources?", "Corporate espionage · outsourced personnel taking information · theft of drives · disgruntled employees (leaks, fake invoices)."],
    ["Test case vs test procedure?", "Test case: **standalone, single condition**. Procedure: **sequence matters**; a script is an **automated procedure**."],
    ["Three goals of policy-based test design?", "**Understand purpose and scope · assess testability · create direct tests.**"],
    ["Three attributes of a security test environment?", "**Isolated · complete · restorable.**"],
    ["Four reasons approval is needed?", "**Illegal otherwise** (even tool possession in some countries) · **IDS alerts / look like an insider** · **major failures and blackouts** · **termination or prosecution**."],
    ["Attestations on an authorization form?", "Customer **owns** the system · has **authority** · has **backed up** · has **tested restore** · **understands risks**."],
    ["Minimum incident report contents?", "**Tester · environment · steps · nature · extent · impact · suggested remediation.**"],
    ["When should security reports be restricted?", "**Independent tester using an open tool · not immediately resolved · internal personnel may be a threat.**"],
    ["Who decides on restricting access to results?", "**The IT auditor.**"],
    ["Why must the process change easily?", "**Targets and threats change daily.**"],
  ] });

  // ================= SECTION 7 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 7 — Revision Notes" });
  B.push({ h2: "7.1 One-page chapter summary" });
  B.push({ p: "**Process.** Security testing is a lifecycle activity aligned with development: planning and control (scope matched to risk), analysis and design (understand threats from assessments, audits, vulnerability sources), implementation and execution (make conceptual tests executable; test from many perspectives), evaluating and reporting (alongside execution), closure (secure archive, improve development). Policy and strategy are organizational; approach and tasks are project-level. Sequential, iterative, COTS and open source each change what is possible." });
  B.push({ p: "**Planning.** Verify defenses work as designed and that no vulnerabilities are introduced. Plan: scope, who, schedule, tasks and time, environment, authorizations. Review technically with a checklist; include IT auditors and security administrators." });
  B.push({ p: "**Design.** Start from risk analysis, threat model or ad hoc categorization. Tests are prioritized, traced, audience-defined, defect-profiled, automatable. Cover functional and structural access controls, functional security controls, secure coding, OS, language and platform vulnerabilities, external (DoS family, intrusions) and internal threats. Policy-based tests: purpose and scope, testability, direct tests using the policy’s exact values." });
  B.push({ p: "**Execution and evaluation.** Environment: isolated, complete, restorable. Never test without authorization. Incident reports carry nature, extent, impact and remediation; file them securely; check production first; notify; look for more. Maintain the process for constant change." });
  B.push({ h2: "7.2 Key definitions to memorize" });
  B.push({ table: { head: ["Term", "Definition"], widths: [3.4, 10.6], rows: [
    ["Account harvesting", "Identifying valid user names, leaving only the password to guess"],
    ["Logical DoS", "Abusing intended functionality to deny access to others"],
    ["Amplification attack", "Abusing protocol responses with a spoofed victim address to multiply traffic"],
    ["Test procedure", "Specifies the sequence of test case execution; a script is an automated procedure"],
    ["Hold harmless clause", "Authorization-form clause protecting the testing entity"],
  ] } });
  B.push({ h2: "7.3 High-priority concepts (study first)" });
  B.push({ ol: [
    "Incident handling and confidentiality (**AS-3.5.1**, 3 pts).",
    "Six plan elements (**AS-3.2.1**, 3 pts).",
    "Process steps and goals (**AS-3.1.1**, 2 pts).",
    "Policy-based and conceptual test design (**AS-3.3.x**, 2 pts).",
    "Approvals (**AS-3.4.2**, 1 pt); environment and maintenance (**AS-3.4.1 / 3.6.1**, 1 pt).",
  ] });
  B.push({ h2: "7.4 Last-minute revision sheet" });
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
  B.push({ h2: "7.5 Memorization checklist" });
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
  B.push({ h2: "7.6 Exam-day quick review" });
  B.push({ ul: [
    "Two 3-point questions here: **plan gaps** and **vulnerability handling**.",
    "**What already exists?** → the answer is the next process step.",
    "**Exact numbers** beat “several”.",
  ] });

  return B;
};
