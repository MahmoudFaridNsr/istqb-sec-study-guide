// CT-SEC Chapter 3 — Sections 1 to 3
module.exports = function () {
  const B = [];

  // ================= SECTION 1 =================
  B.push({ h1: "Section 1 — Syllabus Explanation" });
  B.push({ p: "Chapter 3, **Security Testing Processes**, carries **8 learning objectives** across six sub-chapters (3.1 Process Definition · 3.2 Planning · 3.3 Design · 3.4 Execution · 3.5 Evaluation · 3.6 Maintenance). The Exam Structure Table allocates **6 questions** and **12 of the 80 points**. Teaching time is **140 minutes** — **5.1 points per teaching hour**." });
  B.push({ p: "This is the **process** chapter: the test process from Foundation Level, re-read through a security lens. It has **two guaranteed 3-point K4 questions** — **analyzing a test plan (AS-3.2.1)** and **analyzing test results / incidents (AS-3.5.1)** — and one guaranteed K3 on **defining the process (AS-3.1.1)**. Those three questions are **8 of the 12 points**." });
  B.push({ table: { head: ["LO ID", "K", "Objective (syllabus statement)", "Qs", "Pts"], widths: [1.7, 0.7, 9.6, 1.0, 1.0], rows: [
    ["AS-3.1.1", "**K3**", "For a given project, demonstrate the ability to define the elements of an effective security test process.", "**1**", "**2**"],
    ["AS-3.2.1", "**K4**", "Analyze a given security test plan, giving feedback on strengths and weaknesses of the plan.", "**1**", "**3**"],
    ["AS-3.3.1", "**K3**", "For a given project, implement conceptual (abstract) security tests, based on a given security test approach, along with identified functional and structural security risks.", "1 of 2†", "2"],
    ["AS-3.3.2", "**K3**", "Implement test cases to validate security policies and procedures.", "1 of 2†", "2"],
    ["AS-3.4.1", "K2", "Understand the key elements and characteristics of an effective security test environment.", "1 of 2‡", "1"],
    ["AS-3.4.2", "K2", "Understand the importance of planning and obtaining approvals before performing any security test.", "**1**", "1"],
    ["AS-3.5.1", "**K4**", "Analyze security test results to determine: nature, extent and potential impact of the vulnerability; suggested remediation; optimal test reporting methods.", "**1**", "**3**"],
    ["AS-3.6.1", "K2", "Understand the importance of maintaining security testing processes given the evolving nature of technology and threats.", "1 of 2‡", "1"],
    ["**Chapter 3 total**", "—", "**K2 = 2 · K3 = 2 · K4 = 2**", "**6**", "**12**"],
  ] } });
  B.push({ lead: "† One K3 from AS-3.3.1 / 3.3.2 — the Sample Exam drew **3.3.2** (Q13). ‡ One K2 from AS-3.4.1 / 3.6.1 — the Sample Exam drew **3.4.1** (Q14)." });
  B.push({ box: { title: "Exam allocation you must know", body: "Chapter 3 = **6 questions / 12 points**; in the Sample Exam questions **#11 to #16** (2 + 3 + 2 + 1 + 1 + 3 points). With Chapter 4 it forms the **process core** of the syllabus — **28 points between them, over a third of the paper**." } });
  B.push({ box: { kind: "warn", title: "The one thing that decides this chapter", body: "**Security test results are sensitive, and the first question about any vulnerability is “is it in production?”** The 3-point AS-3.5.1 item (Sample Q16) is answered by: **test whether the problem exists in the current production version, document the defect in a secure system, notify the developer, continue testing for similar defects.** Any option that puts the vulnerability into a **general stakeholder report** is wrong. The same instinct answers Chapter 6’s man-in-the-middle question and Chapter 7’s confidentiality questions." } });

  // --- 3.1 ---
  B.push({ h2: "AS-3.1.1 (K3) — Security Test Process Definition" });
  B.push({ box: { title: "Original syllabus statement", body: "For a given project, demonstrate the ability to define the elements of an effective security test process." } });
  B.push({ p: "**Security testing is a lifecycle activity.** Failing to implement and test security defenses throughout a project can lead to **severe security defects which may never be fully resolved**. The security test process **must be aligned with the development process** so activities happen when needed, and **defined in the context of** the organization’s nature, technical environments, development process and business risks." });
  B.push({ table: { title: "Table 3.1 — The ISTQB Security Testing Process", head: ["ISTQB test process", "Security test process — goal", "Example security testing tasks"], widths: [2.6, 4.8, 6.6], rows: [
    ["**Test Planning and Control**", "**Security Test Planning and Control** — define **an appropriate scope of testing that corresponds to the security risks**.", "Define security test **objectives** · define the **scope** · identify **resources** · define **estimates and schedules** · define **metrics, entry and exit criteria** · **monitor** progress and results · **take actions** in response to information from other activities."],
    ["**Test Analysis and Design**", "**Security Test Analysis and Design** — gain understanding of **specific threats and risks** based on **security assessments, audits and standard sources of known vulnerabilities**.", "**Review the basis** (risk assessments, security requirements, security policies) · define **test conditions** based on objectives, risks, standards and known vulnerabilities, implemented defenses, scope, **applicability of security test tools**."],
    ["**Test Implementation and Execution**", "**Security Test Implementation and Execution** — **translate conceptual tests into executable tests** (manual or tool), performed from **a variety of perspectives — internal user, external user, malicious user**, etc.", "**Create** test cases, scenarios, scripts · perform **functional security tests** from specifications · perform **functional security and penetration testing based on tester knowledge and intuition** · test **based on a model** · **set up the test environment**."],
    ["**Evaluating Exit Criteria and Reporting**", "**Evaluating and Reporting Results** — often **alongside execution**, to evaluate individual tests and **report new threats as soon as possible**.", "Determine **specific vulnerabilities** from outcomes · evaluate **security risk levels** · report **interim and final** results to **management and other authorized parties**."],
    ["**Test Closure**", "**Test Closure** — bring activities to closure so tests **can be maintained and performed regularly**; **all testware and results stored in a secured way** yet available for future use.", "Ensure **all planned tests performed** · confirm **deliverables (reports) delivered** · **archive results, test data and sensitive information in secure locations** · **analyze results to improve development** in terms of security."],
  ] } });
  B.push({ ul: [
    "The process is **not necessarily sequential** — it **aligns with the organization’s lifecycle**, and security activities run **alongside and during** other project activities and tests.",
    "Table 3.1’s tasks are **examples, not prescriptive requirements**; actual tasks depend on the **strategy and approach** adopted.",
  ] });
  B.push({ table: { title: "Figure 3.1 — Hierarchy of security test planning", head: ["Level", "Element"], widths: [4.0, 10.0], rows: [
    ["**Organizational**", "**Security test policy**"],
    ["**Organizational**", "**Security test strategy**"],
    ["**Project**", "**Security test approach**"],
    ["**Project**", "**Security test tasks**"],
  ] } });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K3, 2 points)", body: "Sample Q11: you **use conceptual tests as a basis for manual tests and execute them from an external vendor’s perspective**. Which process step? **Security test implementation.** Official rationale: turning conceptual tests into manual tests and executing them **is part of implementation**; creating conditions and objectives and analysis/design **have already been done** (the conceptual tests exist); evaluating and reporting comes **after execution**. Key phrase: **“translate conceptual tests into tests that can be executed … from a variety of perspectives”**." } });

  B.push({ h3: "§3.1.2 — Aligning the process to a lifecycle model" });
  B.push({ table: { head: ["Lifecycle", "What the security tester should be aware of"], widths: [3.2, 10.8], rows: [
    ["**Sequential**", "Security needs and risks **defined early**, documented in **software requirement specifications** · needs **may change but not be reflected** in updated requirements, so tests may look specific and complete but **not be current** due to **late-project risks** · tests **can be done any time but commonly late** · **results may be difficult to address at the end**."],
    ["**Iterative / incremental** (e.g. Agile)", "Needs and risks **emerge throughout**, per iteration/sprint, in requirements, **user stories, models, acceptance criteria, prototypes** · **can (should) be addressed in the iteration in which they are identified** · tests **performed continuously** · some risks **may not be fully mitigated and tested in one short release cycle**."],
    ["**COTS**", "Often **black-box**, possibly customized · **often contain vulnerabilities** requiring **frequent updates and patches** · **no access to code — structural analysis and structural testing are not possible**."],
    ["**Open source**", "A **variant of COTS** — but **the code is available for all the world to see** · has vulnerabilities, so **patches must be kept up to date** · **once a vulnerability is publicized, users of that version (and earlier) are at risk**."],
  ] } });
  B.push({ table: { title: "Example — security testing in a sequential lifecycle", head: ["Phase", "Security testing tasks"], widths: [3.0, 11.0], rows: [
    ["**Requirements**", "Security requirements **defined and reviewed**; use cases written; **a security test approach should be developed**."],
    ["**Analysis and design**", "BA refines requirements; architect proposes a solution with security as a functional and non-functional need; testers learn the architecture; **major security test objectives defined**."],
    ["**Detailed design**", "UIs and databases designed; security test design becomes more detailed; **first security tests may be performed based on models**."],
    ["**Coding / implementation**", "**First opportunity to test the structure** — buffer overflow, field-level edits that might permit **SQL injection**; **static analysis and code reviews from the security perspective**; component testing; small-assembly integration."],
    ["**System testing**", "Systems and sub-systems incl. hardware, data, procedures and people; often **transactional**; system integration testing; a **wider view** — **transaction security** incl. authentication, data storage, firewall implementation, procedural controls."],
    ["**User acceptance testing**", "Validates real-world business processes; **security should already be largely performed**, but **business-process-level security scenarios** remain."],
    ["**Deployment**", "Pilot, massive or **parallel** deployment; risk that **security configurations are not correct in the target environment** — e.g. **database access rights wrong in live**."],
    ["**Maintenance**", "Test changes and **regression**; ensure **no new vulnerabilities**; keep **firewalls and security technology current**; **continuous monitoring** for suspicious activity."],
  ] } });
  B.push({ p: "**Iterative example.** Four-week releases from a prioritized backlog of user stories with acceptance criteria. First iteration delivers **four security functions** needed by many later features: **user login · SSL enablement · reset lost password · lockout after three unsuccessful tries**. The security tester **works with the developer** to ensure correct policies and protocols are in the code and **tests functions as they are developed**; each iteration confirms controls work and **no new vulnerabilities** were introduced." });
  B.push({ box: { kind: "ok", title: "Avoid the acceptance-phase trap", body: "The syllabus is explicit: **avoid the situation where security testing is not performed until the acceptance phase** — at the end of the project it is **especially costly and risky** to deal with defects. In both lifecycle examples **the security testing process steps are integral tasks**." } });

  // --- 3.2 ---
  B.push({ h2: "AS-3.2.1 (K4) — Security Test Planning" });
  B.push({ box: { title: "Original syllabus statement", body: "Analyze a given security test plan, giving feedback on strengths and weaknesses of the plan." } });
  B.push({ h3: "Planning objectives (§3.2.1)" });
  B.push({ p: "Security testing should focus on **two aspects**: **(1) verifying the designed security defenses are implemented and function as designed**, and **(2) verifying that no vulnerabilities are introduced during development**. All defenses should be **based on a risk analysis** — the starting point for planning. Many unintended vulnerabilities can be avoided by **QA activities and best practices** in architecture, design and coding; testing for introduced vulnerabilities **starts with an assessment of the practices used by the development team**, which may lead to **additional security tests**." });
  B.push({ h3: "The six key plan elements and their questions (§3.2.2)" });
  B.push({ table: { head: ["Plan element", "Questions to ask"], widths: [3.8, 10.2], rows: [
    ["**1. Scope**", "What is **in and out of scope**? What is **achievable** given resources, risks and time?"],
    ["**2. Who performs it**", "Do we have people with **appropriate skills**? Are we comfortable **outsourcing**? For commercial/vendor software, **which tests are the vendor’s and which the customer’s**? Do testers need **training on specific tools**?"],
    ["**3. Schedule**", "Which security items must be **implemented and tested before other testing** (e.g. **access rights and logins**)? **When** will features be available? **How long** will testing take?"],
    ["**4. Tasks and time for each**", "Time to **design** tests · to **evaluate and report** results · to perform **security regression tests** · to **establish the environment**."],
    ["**5. Test environment(s)**", "**Extent** (platform, technology, size, location)? **New** environment? Which **tools** must be installed?"],
    ["**6. Authorizations and approvals**", "**Who** must authorize and approve? **When** is authorization needed? Are **budget and funding** sufficient?"],
  ] } });
  B.push({ h3: "Reviewing the plan" });
  B.push({ ul: [
    "Review for **completeness and correctness**. Because security tests are technical, a **technical review** may be most appropriate; **walkthroughs and inspections** may also suit.",
    "A **standard checklist** helps; feedback must be **constructive and not aimed at the producer**.",
    "Reviewers come from **all areas impacted** — **not necessarily security testers**; e.g. a **business-unit manager** may know risks that belong in the plan. **IT auditors and security administrators** are especially helpful because they know **policies and procedures**.",
  ] });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K4, 3 points)", body: ["Sample Q12: a plan for a medical-records system covers **scope · roles and assignments · responsibilities (vendors vs internal) · high-level schedule · environment requirements and setup · authorizations and approvals**. What is still missing to meet the syllabus minimum? **A schedule showing the time required to design, run and evaluate the security tests** — element 4, **tasks and the time for each**.", "Rejected: credentials and training (may be needed but **not a minimum requirement**, and may be covered by roles), a copy of regulatory standards (**referenced, not included**), testers’ contact details for a breach (**not plan-level detail**). Method: **tick the six elements off against the stem; the unticked one is the answer**."] } });

  // --- 3.3 ---
  B.push({ h2: "AS-3.3.1 (K3) — Security Test Design" });
  B.push({ box: { title: "Original syllabus statement", body: "For a given project, implement conceptual (abstract) security tests, based on a given security test approach, along with identified functional and structural security risks." } });
  B.push({ p: "Design may start **from a performed risk analysis**, **from an available threat model**, or **from an ad hoc origin categorization of security risks** — **any of these can form a workable basis**. Ensure there are security tests **in every applicable development phase**." });
  B.push({ p: "Detailed tests are based on **security risks, a security test strategy and sources such as threat models**, and can be seen as **functional and structural**. For an e-commerce site, **functional security risks** include **SQL injection, account harvesting and password cracking**; a **structural** risk is a **buffer overflow** allowing access **through a memory failure**." });
  B.push({ table: { title: "Five essential attributes of detailed security tests", head: ["Attribute", "Meaning"], widths: [5.0, 9.0], rows: [
    ["**Prioritized**", "By identified **security risks and threat models**"],
    ["**Traced**", "To defined **security requirements**"],
    ["**Audience-defined**", "For the **intended audience** — developers, functional testers, security testers"],
    ["**Defect-profiled**", "Based on **security defect profiles**"],
    ["**Automatable**", "**Designed to be automated, if applicable**"],
  ] } });
  B.push({ p: "**Basic flow of security test design:** (1) **security test approach** (project) → (2) **risks, threat models and requirements** (project) → (3) **design techniques** based on risks, requirements and application → (4) **test cases and scenarios**. Key principle: **a design process should be able to create and implement tests based on any identified security risk, requirement, or threat.** Stay current with **standards and threat lists** (Chapter 9)." });
  B.push({ h3: "Design categories — what to test and an example of each" });
  B.push({ table: { head: ["Category", "What the tests do", "Syllabus example"], widths: [3.0, 6.0, 5.0], rows: [
    ["**Functional security controls** (e.g. transaction controls)", "Verify controls are **in place, working correctly and effective** in **detecting and preventing unauthorized actions**", "A **bank teller** may not authorize a cash withdrawal over a limit **without the head teller’s approval** in the system"],
    ["**Functional access controls** (logins, passwords, tokens)", "Username and password **policies applied correctly** · access control level **appropriate for the risk** · **resistant to password cracking software**", "**Account harvesting**: with a correct user name and wrong password, the **error message must not indicate which item is incorrect**"],
    ["**Structural access controls** (user rights, encryption levels, authentication)", "Test how **rights** are set for **data access, functional access and privacy levels** — set by sysadmins, security admins or DBAs, in app config or infrastructure", "Create **test accounts per access level** (minimal, manager, admin) and verify a **minimal user cannot perform manager-level activities**"],
    ["**Secure coding practices**", "**Primarily static** — are developers following established security methods? Dynamic tests check **data validation and error messaging**; **dynamic memory tools** find buffer overflows", "See the practices list below"],
    ["**Operating system access**", "Once an attacker reaches the OS they control **data, network access and malware**", "Test the ability to **plant rootkits and other malicious code**"],
    ["**Language vulnerabilities**", "No language is inherently secure; **how the code is implemented** is the key factor", "**WhiteHat 2014**: ~30,000 sites — **negligible differences** between .NET, Java, PHP, ASP, ColdFusion, Perl; SQLi and XSS **pervasive**. CERT publications, tools and **Vulnerability Notes Database**"],
    ["**Platform vulnerabilities** (Windows, Linux, Mac OS, iOS, Android)", "Ensure **platform security updates are applied promptly and across all devices**", "—"],
    ["**External threats**", "DoS/DDoS and intrusions", "See below"],
    ["**Internal threats**", "**The greatest threats may be internal**", "Corporate espionage · info kept by outsourced staff · theft of drives · disgruntled employees (leaks, fake invoices)"],
  ] } });
  B.push({ h3: "Secure coding practices (the syllabus’s short list)" });
  B.push({ p: "Key principle: **many security attacks are accomplished through exploiting software defects to cause a system to behave in an unexpected way.**" });
  B.push({ table: { head: ["Practice", "Practice"], widths: [7.0, 7.0], rows: [
    ["**Proven session management** creates **random session identifiers**", "**Authorization decisions only by trusted system objects** — e.g. **server side**"],
    ["**No secure information in error messages** (system details, session IDs, account info)", "**Handle errors within the application**, not via server configuration"],
    ["**HTTP GET requests must not include sensitive information**", "**Error handlers must not display stack traces** or debugging information"],
    ["**Log all data input validation failures**", "**Protect temporary sensitive data** on the server (encrypt) and **clear it when no longer needed**"],
    ["**No direct OS commands** from the application — use **built-in APIs**", "**No clear-text passwords or connection strings on clients** (cookies); prohibit embedding in Flash, compiled code, **MS viewstate**"],
    ["**Encrypt all sensitive data in transmission** — **TLS** for HTTP; encryption for non-HTTP", "**User data never passed directly to a dynamic “include”**"],
    ["**Sanitize and validate all user-provided data**", "**Strongly typed variables** where supported (numeric fields reject alpha), also in the database"],
    ["**Use tested, trusted, approved code** under configuration management rather than new unmanaged code", "**Run services with least privilege — never as root — each with its own OS account**"],
  ] } });
  B.push({ lead: "References: OWASP Secure Coding Practices Quick Reference Guide, CERT Top 10 Secure Coding Practices, SANS Top 25 Most Dangerous Software Errors." });
  B.push({ h3: "External threats — DoS, DDoS and intrusion" });
  B.push({ table: { head: ["Attack", "Mechanism", "Syllabus example"], widths: [3.0, 6.0, 5.0], rows: [
    ["**DoS**", "**Overloading** system or application resources so it is **inaccessible to legitimate users** — targets bandwidth, connectivity or specific services", "—"],
    ["**DDoS**", "Launched **indirectly using other computers** — **amplification** or **botnets** (many previously compromised machines under an attacker’s control, gained via **viruses or Trojans**)", "—"],
    ["**Amplification / reflection**", "Abuse a protocol (**DNS, NTP**); send traffic to broadcast addresses with the **victim’s spoofed source address**; responses **multiply** toward the victim", "Attacker A asks system B for **all DNS records** while impersonating victim C; B **floods C** with the amplified answer"],
    ["**Resource exhaustion**", "Abuse a desired function to **consume CPU, memory, disk**", "Repeated **SSL key renegotiation** requests until the server **only generates keys**"],
    ["**Logical DoS**", "Abuse **intended functionality** to lock others out", "**Predictable user names + permanent lockout after three failures** → attacker locks many accounts (and indirectly DoSes the **helpdesk**)"],
  ] } });
  B.push({ table: { title: "The four levels of testing for DDoS", head: ["Level", "Test"], widths: [1.2, 12.8], rows: [
    ["1", "Ensure computers are **not infected with known malware**"],
    ["2", "Test the **IDS’s ability to quickly identify multiple requests from a single computer** in a short time"],
    ["3", "Identify **configurations allowing abusable functionality** (SSL, web server, DNS)"],
    ["4", "Identify **logic defects** that can allow a DoS"],
  ] } });
  B.push({ p: "**Intrusion methods** (someone “breaking into” a system): **social engineering · injection attacks (SQL, malicious code) · account compromise (harvesting, password reset) · exploiting known vulnerabilities (firewall, OS, framework, application) · malware · insecure configuration · authorization defects · application logic attacks** (e.g. steps **out of order** in a shopping cart to get a discount). **Intercepting a transmission sent from inside the organization to another organization is not an intrusion, but an internal breach.**" });
  B.push({ h3: "Security test format and structure" });
  B.push({ ul: [
    "Use the **same format as other testing**; only the **target** and the **environment** differ. Standards (**IEEE 829-2008, ISO/IEC/IEEE 29119-3**) should be **tailored**; test management tools often provide structure.",
    "**Test cases** are the **most standalone** form; **no sequential execution**; typically **single conditions** — e.g. **password formatting rules**.",
    "**Test procedures** specify **sequence**; a **test script** is an **automated test procedure**. Use procedures **when sequence is important** — e.g. **“recover lost password”**.",
    "**Experience-based tests** (exploratory): conditions and expected results **not defined in advance**, but **conditions tested and actual results should be recorded**.",
  ] });

  B.push({ h2: "AS-3.3.2 (K3) — Security Test Design Based on Policies and Procedures" });
  B.push({ box: { title: "Original syllabus statement", body: "Implement test cases to validate security policies and procedures." } });
  B.push({ p: "Here **policies and procedures become the test basis**, so **security tests are almost a means of security auditing**. They **should not be the only basis** — other perspectives are needed. The three goals:" });
  B.push({ ol: [
    "**Understand the purpose and scope** of the policy or procedure",
    "**Assess the testability** of the policy/procedure",
    "**Create tests related directly** to the policy/procedure",
  ] });
  B.push({ table: { title: "The syllabus’s worked lockout procedure — six steps", head: ["Step", "Action", "Expected result"], widths: [0.8, 7.2, 6.0], rows: [
    ["1", "Attempt logging in **three times unsuccessfully**", "**Lock-out message on the third** attempt; further attempts receive the lock-out message"],
    ["2", "**Contact IT support and verify identity**", "A **temporary password** is issued **to a known email address**"],
    ["3", "Log in with the **temporary password**", "Access granted"],
    ["4", "**Create a new password** conforming to the password policy", "Accepted — **also an opportunity to test the password policy**"],
    ["5", "**Log out**", "—"],
    ["6", "Log in with the **newly created password**", "Access granted"],
  ] } });
  B.push({ p: "**Not all policies are this testable.** “Audit records contain **all audited events with date/time stamp** and are **traceable to specific individuals**…” — testable in principle, but you must **trigger a sample set of events** and **verify the logged information** (user ID, date and time) is correct." });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K3, 2 points)", body: "Sample Q13 offers four lockout test cases. Correct: **three unsuccessful attempts → lock-out message → temporary password from manager or administrator → change it at login → log out → log back in with the new password.** Options (b) and (c) are wrong **because of the word “several”** — the procedure specifies **three**. (d) uses passwords **kept in a notepad on the PC** — definitely not good practice. **Exact numbers in a procedure are test data; vague quantifiers are a defect in the test case.**" } });

  // --- 3.4 ---
  B.push({ h2: "AS-3.4.1 (K2) — An Effective Security Test Environment" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the key elements and characteristics of an effective security test environment." } });
  B.push({ p: "Security testing has **unique risks that require a segregated approach**, especially for **untrusted applications** (third-party, open source). Functional controls and session management may be tested in a typical integrated environment **without high risk**, but for **unknown and untrusted code** the risk of **malware corrupting a server or network** makes an **isolated or virtual** environment advisable." });
  B.push({ table: { title: "The three attributes", head: ["Attribute", "Meaning"], widths: [2.6, 11.4], rows: [
    ["**1. Isolated**", "From other systems — **depending on the level of malware risk**"],
    ["**2. Complete**", "Reflects the **target (production)** environment in: systems under test · **OS (exact version and configuration)** · networking · middleware · desktops · mobile devices · databases · **access rights** · **browsers and plug-ins** · **co-existing applications** · **data (engineered, or obfuscated production data)**"],
    ["**3. Restorable**", "To **repeat tests** and **recover from corruption**"],
  ] } });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective", body: "Sample Q14: main characteristic? **Mimics the production environment in terms of access rights** — the closer to production, the more valid the testing, **particularly for access rights and delegation settings**. Rejected: **closely tied to production** (it **shouldn’t be connected**), **old OS versions** (not a main characteristic), **extra plug-ins not in production** (cause **false positives and false negatives**)." } });

  B.push({ h2: "AS-3.4.2 (K2) — Planning and Approvals Before Any Security Test" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the importance of planning and obtaining approvals before performing any security test." } });
  B.push({ table: { title: "Why approval is needed", head: ["Reason", "Syllabus wording"], widths: [3.4, 10.6], rows: [
    ["**Legality**", "In almost all countries it is **against the law to (try to) get access** to data systems; **in some countries even to have access to security testing tools**. The only way is a **waiver from the system or data owner and approval from your management**."],
    ["**Detection**", "Tests may **trigger IDS alerts**; the tester may **appear to be a malicious insider** — **penetration testing especially** needs authorization."],
    ["**Damage**", "Tests may lead to **major system failures and blackouts**; risks must be known and **precautions in place**."],
    ["**Personal consequence**", "Without prior **and specific** authorization the tester may **violate policies and procedures** and be subject to **termination or prosecution**."],
  ] } });
  B.push({ table: { title: "Contents of an authorization form", head: ["Field", "Detail"], widths: [4.4, 9.6], rows: [
    ["Name of **authorizing entity**", ""],
    ["Names of **testing personnel and/or entity**", ""],
    ["**Statement of work**", ""],
    ["**Dates of authorization** (to/from)", ""],
    ["Other details", "**Originating IP addresses, user accounts**, etc."],
    ["**Attestations**", "Customer **owns** the system · has **authority** to authorize · has **backed up** all systems and data · has **tested restore** from backup · **understands the risks**"],
    ["**“Hold harmless” clause**", "For the **testing entity**"],
    ["**Signatures**", "Of a customer representative **authorized to enter into such agreements**"],
  ] } });
  B.push({ box: { kind: "ok", title: "How the official exam used this objective", body: "Sample Q15: significant concern when seeking approval for tools? **Some countries prohibit the use of certain security testing tools.** Rejected: a **bypass** of approval in a crisis (a fast-track makes sense; **a complete bypass is risky**), and claims that tool risks are **rarely known** or **always known** (do the due diligence in tool selection)." } });

  // --- 3.5 ---
  B.push({ h2: "AS-3.5.1 (K4) — Security Test Evaluation" });
  B.push({ box: { title: "Original syllabus statement", body: "Analyze security test results to determine: nature of security vulnerability · extent of security vulnerability · potential impact of security vulnerability · suggested remediation · optimal test reporting methods." } });
  B.push({ p: "Evaluation is performed **during execution** as individual tests run — it is **the evaluation of the outcome of a security test**. When a vulnerability is found, **an incident report should be filed** containing **at a minimum**:" });
  B.push({ table: { head: ["Minimum incident report content", "Purpose"], widths: [6.0, 8.0], rows: [
    ["**Name of tester** observing the vulnerability", "Accountability"],
    ["**Test environment** where observed", "Reproduction"],
    ["**Test steps performed**", "**To facilitate re-creation**"],
    ["**Nature** of the vulnerability", "What it is"],
    ["**Extent** of the vulnerability", "How far it reaches — where else it exists"],
    ["**Potential impact**", "Severity, risk"],
    ["**Suggested remediation** course of action", "Fix"],
  ] } });
  B.push({ h3: "Securing the reports" });
  B.push({ p: "Use the **same incident management system** as other testing, but **assign a special category** and possibly **secure reports from unauthorized personnel**, e.g. when:" });
  B.push({ ul: [
    "testing is by an **independent organization** reporting into a tool with **few viewing restrictions**",
    "vulnerabilities are identified but **not immediately resolved**",
    "**internal personnel may be a potential threat** to exploit the vulnerabilities",
  ] });
  B.push({ p: "**The IT auditor should be able to decide whether to restrict access** to results. A **final security test report** at the end of a major effort (e.g. system testing) **may also need to be confidential**, depending on **vulnerability resolution status**." });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K4, 3 points)", body: ["Sample Q16: final testing of an **update to a version already in production** finds **XSS** on the e-commerce site. Proper steps? **Test if the problem exists in the current production version, document the defect in a secure system, notify the developer, continue testing for other XSS defects.**", "Rationale: **first priority — is it in production?** Document **only in a secure defect tracking system**, because production may be exposed. **One XSS suggests others**, so continue. Rejected: adding it to the **stakeholder report** (a) and **weekly status report** (d) — **the defect should not be publicized**; (c) investigates extent but **omits notification, which is critical**."] } });

  // --- 3.6 ---
  B.push({ h2: "AS-3.6.1 (K2) — Security Test Maintenance" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the importance of maintaining security testing processes given the evolving nature of technology and threats." } });
  B.push({ ul: [
    "Often maintenance only means **adding new types of tests in response to new types of threats**.",
    "**Security testing targets and threats change daily**, so **the process must be designed to change easily**.",
    "**New tools appear**; testers should **keep up** and **evaluate which tools add power and flexibility**.",
  ] });

  // ================= SECTION 2 =================
  B.push({ pagebreak: true });
  B.push(...require("./sec_ch3_concepts")());
  B.push({ h2: "2.7 Chapter 3 keyword glossary" });
  B.push({ table: { head: ["Keyword", "Working definition for the exam"], widths: [3.4, 10.6], rows: [
    ["**account harvesting**", "Identifying valid user names; once a name is known, only the password remains. Test: error messages must not reveal which item was wrong."],
    ["**password cracking**", "Recovering passwords, e.g. by tools; access controls must be **resistant to password cracking software**."],
    ["**social engineering**", "Exploiting human behaviour as an attack vector — listed as an intrusion method (detail in Chapter 6)."],
    ["**test approach**", "Project-level implementation of the strategy for a specific project."],
    ["**test plan**", "Document of scope, approach, resources, schedule — for security: six key elements."],
    ["**test process**", "Planning and control, analysis and design, implementation and execution, evaluating and reporting, closure."],
  ] } });

  // ================= SECTION 3 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 3 — Tables and Summaries" });
  B.push({ table: { title: "3.1 Which process step? — activity lookup", head: ["Activity in the stem", "Step"], widths: [9.0, 5.0], rows: [
    ["Define scope corresponding to risks; estimates; entry/exit criteria; monitor", "**Planning and control**"],
    ["Review risk assessments and policies; define test conditions; tool applicability", "**Analysis and design**"],
    ["Turn conceptual tests into manual/automated tests; execute from internal/external/malicious perspectives; set up environment", "**Implementation and execution**"],
    ["Determine vulnerabilities from outcomes; evaluate risk levels; report interim/final results", "**Evaluating and reporting**"],
    ["Confirm all tests run; archive results securely; analyze to improve development", "**Closure**"],
  ] } });
  B.push({ table: { title: "3.2 Plan review checklist (tick against the stem)", head: ["Element", "Present?"], widths: [11.0, 3.0], rows: [
    ["Scope — in/out, achievable", "☐"],
    ["Who — skills, outsourcing, vendor vs customer, tool training", "☐"],
    ["Schedule — what first, when available, how long", "☐"],
    ["Tasks and time — design, evaluate/report, regression, environment", "☐"],
    ["Environment — extent, new?, tools", "☐"],
    ["Authorizations — who, when, budget", "☐"],
  ] } });
  B.push({ table: { title: "3.3 Test case or test procedure?", head: ["Test object", "Form", "Why"], widths: [5.0, 3.0, 6.0], rows: [
    ["Password formatting rules", "**Test cases**", "Single, independent conditions"],
    ["Recover lost password", "**Test procedure**", "**Sequence matters**"],
    ["Three-try lockout and reset", "**Test procedure**", "Ordered steps with state"],
    ["Probing an unknown admin page", "**Exploratory**", "Record conditions and actual results"],
  ] } });
  B.push({ table: { title: "3.4 DoS family", head: ["Type", "Abuses", "Example"], widths: [3.4, 5.0, 5.6], rows: [
    ["Volumetric DoS", "Bandwidth / resources", "Nuisance requests"],
    ["DDoS (botnet)", "Many compromised machines", "Trojans, viruses"],
    ["Amplification", "Protocol responses (DNS, NTP) + spoofed source", "Full DNS record list sent to victim"],
    ["Resource exhaustion", "Expensive function", "SSL renegotiation"],
    ["Logical DoS", "Intended function", "Lockout of guessable accounts"],
  ] } });
  B.push({ table: { title: "3.5 First response to a found vulnerability", head: ["Order", "Action"], widths: [1.4, 12.6], rows: [
    ["1", "**Check whether it exists in production**"],
    ["2", "**Document in a secure defect tracking system** (special category, restricted access)"],
    ["3", "**Notify the developer** (and management as appropriate)"],
    ["4", "**Continue testing for similar defects** — determine **extent**"],
    ["Never", "Put it into a **general stakeholder or weekly status report**"],
  ] } });
  B.push({ box: { kind: "ok", title: "Reproduce from memory before moving on", body: ["**Table 3.1 of the syllabus** (five steps × goal) — guaranteed K3.", "**The six plan elements** — guaranteed K4.", "**The incident report minimum and table 3.5** — guaranteed K4.", "**Isolated, complete, restorable**; **why approval** — K2s."] } });

  return B;
};
