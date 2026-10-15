// CT-SEC Chapter 3 — Section 2, Key Concepts: each concept explained from the ground up.
module.exports = function () {
  const B = [];
  B.push({ h1: "Section 2 — Key Concepts" });
  B.push({ lead: "Section 1 gives the syllabus wording objective by objective. This section explains what that wording means. Each card builds one idea in order: plain words first, then how it works, an example, how the exam uses it, and what it is easily confused with." });

  B.push({ h2: "2.1 The storyline of Chapter 3" });
  B.push({ p: "Chapter 3 takes the **Foundation Level test process** you already know (planning and control → analysis and design → implementation and execution → evaluating exit criteria and reporting → closure) and asks, at each step, **“what changes when the thing being tested is security?”** Three answers run through the whole chapter:" });
  B.push({ ol: [
    "**Security testing is dangerous.** It can break systems, trigger alarms and break the law. So it needs an **isolated environment** and **written authorization before you start**.",
    "**Security results are dangerous.** A vulnerability report is a map for an attacker. So results go into a **secure tracker** for **need-to-know** readers, and the **first** question about any finding is **“does this exist in production?”**",
    "**Security never stands still.** Threats change daily, so the process must be **easy to change**, and tests must be maintained.",
  ] });

  B.push({ h2: "2.2 The process and the lifecycle" });
  B.push({ concept: {
    title: "The five steps of the security test process (AS-3.1.1, guaranteed K3)",
    plain: "Each Foundation Level test step has a **security version** with its own goal. You must be able to look at an activity and name **which step it belongs to**.",
    how: ["**Planning and control**: define a **scope that corresponds to the security risks**. Set objectives, resources, estimates, schedule, metrics, entry and exit criteria. **Monitor** progress and **act** on what other activities report.", "**Analysis and design**: understand the **specific threats and risks**, using **risk assessments, audits and known-vulnerability sources**. **Review the test basis** (risk assessments, security requirements, policies) and define **test conditions**. Decide **which tools apply**.", "**Implementation and execution**: **turn conceptual tests into executable ones** (manual or automated), **run them from several perspectives** (**internal user, external user, malicious user**), and **set up the environment**.", "**Evaluating and reporting**: done **alongside execution**, so that **new threats are reported as soon as possible**. Determine the specific vulnerabilities, evaluate risk levels, and report interim and final results to **authorized** parties.", "**Closure**: make sure all planned tests ran and reports were delivered. **Archive testware, data and results securely**, so tests can be repeated. **Feed lessons back** into secure development."],
    example: "You already have conceptual tests (“verify an outside vendor cannot reach payroll data”). You now write step-by-step manual tests from them and run them while logged in as a vendor account. Writing and running them is **implementation and execution**. The conceptual tests themselves were produced in **analysis and design**.",
    exam: "Official Q11: “use conceptual tests as a basis for manual tests and execute them from an external vendor’s perspective” → **implementation**. Keywords: **conceptual → executable**, **perspectives** → implementation and execution. **Conditions, objectives, test basis** → analysis and design. **Scope corresponding to risk, criteria, monitoring** → planning and control.",
    confuse: "The steps are **not necessarily sequential**: they follow the project’s lifecycle, and evaluation runs **during** execution. The example tasks in the syllabus’s table are **examples, not mandatory requirements**.",
  } });
  B.push({ concept: {
    title: "Security testing in different lifecycle models",
    plain: "The **same process** is fitted to whatever lifecycle the project uses. The risks for the tester differ by model.",
    how: ["**Sequential (e.g. V-model):** security needs are written **early** in the requirements. The danger is that they **change but the documents do not**, so tests look complete but are **out of date**. Testing often happens **late**, when fixes are expensive.", "**Iterative / Agile:** needs **emerge in every iteration** (user stories, acceptance criteria, prototypes) and should be **tested in the iteration where they appear**. The danger is that some risks **cannot be fully tested in one short cycle**.", "**COTS (bought software):** usually **black-box**. **No source code → no structural analysis or structural testing.** Expect frequent **patches**.", "**Open source:** a variant of COTS, but **anyone can read the code**, including attackers. Once a vulnerability is **public**, everyone running that version or older is at risk, so **patch promptly**."],
    example: "In the syllabus’s iterative example, the first four-week iteration delivers **four security functions used by everything after it**: login, SSL enablement, lost-password reset, and lockout after three failures. The tester works with the developer and tests each one **as it is built**. Each later iteration confirms the controls still work and that no new vulnerabilities appeared.",
    exam: "If a stem has no source code (COTS), any answer involving **code review or structural coverage** is wrong. If the stem leaves security testing until **acceptance**, that is the trap the syllabus warns about: it is **especially costly and risky** at the end.",
    confuse: "**“Can be done any time but commonly late”** describes sequential projects. It is a risk to avoid, not a recommendation.",
  } });

  B.push({ h2: "2.3 Planning"});
  B.push({ concept: {
    title: "What a security test plan must contain: the six elements (AS-3.2.1, guaranteed K4)",
    plain: "Security testing has **two aims**: confirm the **designed defenses are implemented and work**, and confirm that **no new vulnerabilities were introduced** during development. Both start from a **risk analysis**. A plan that meets the syllabus minimum answers **six questions**.",
    how: ["**1 Scope**: what is in and out? What is **achievable** with these resources, risks and time?", "**2 Who**: do we have the **skills**? Will we **outsource**? For vendor software, **which tests are the vendor’s and which are ours**? Is **tool training** needed?", "**3 Schedule**: what must be tested **before** other testing can start (**logins and access rights**)? When will features be ready? How long will it take?", "**4 Tasks and time for each**: time to **design** tests, to **evaluate and report**, to run **security regression**, and to **build the environment**.", "**5 Environment**: its extent (platform, technology, size, location), whether it is **new**, and which **tools** must be installed.", "**6 Authorizations and approvals**: **who** approves, **when**, and is the **budget** enough?"],
    example: "A plan lists scope, roles, vendor/internal responsibilities, a **high-level** schedule, environment set-up, and approvals. Ticking the six elements shows that **element 4 is missing**: nothing says **how long** it will take to design, run and evaluate the security tests. A high-level schedule (element 3) is not the same thing.",
    exam: "Official Q12 (3 points) is exactly this example. **Method: tick the six elements against the stem; the unticked one is the answer.** Reject things that are useful but **not in the minimum** (tester credentials, a copy of the regulations, breach contact lists).",
    confuse: "**Schedule** (element 3: order and calendar) vs **tasks and time** (element 4: the effort for each kind of task). Exam options use this difference.",
  } });
  B.push({ concept: {
    title: "Reviewing a security test plan",
    plain: "A plan is reviewed for **completeness and correctness**, like any other test document. Because security plans are technical, the review is usually **technical**, and it needs people who know the **policies**.",
    how: ["Review types: a **technical review** is most appropriate. **Walkthroughs and inspections** can also work.", "Use a **standard checklist** (for example, the six elements).", "Feedback must be **constructive** and **not aimed at the author**.", "Reviewers come from **all impacted areas**, not only security testers. A **business-unit manager** may know risks the testers do not. **IT auditors and security administrators** are especially useful because they know the **policies and procedures**."],
    example: "The finance manager reviewing a plan notices it never mentions the month-end batch that moves all payments. The testers did not know about it. That one comment adds the highest-risk process to the scope.",
    exam: "If asked who should review, prefer the option that **includes IT auditors and security administrators** and business people, over “only the security test team”.",
    confuse: "A plan review is **not** the plan-element check itself. The six elements are **what** must be present. The review is **how** you find out whether they are present and correct.",
  } });

  B.push({ h2: "2.4 Design" });
  B.push({ concept: {
    title: "From risks to concrete tests: the basis and attributes of security test design (AS-3.3.1)",
    plain: "Design turns **risks, threats and requirements** into **conceptual tests**. Design can start from **any** of three bases, and the resulting tests must have five qualities.",
    how: ["**Starting points (any of these is workable):** a performed **risk analysis**, an available **threat model**, or an **ad hoc categorization** of where the security risks originate.", "**Functional vs structural security risks:** **functional** risks abuse what the system does (**SQL injection, account harvesting, password cracking**). **Structural** risks abuse how it is built (**buffer overflow**, getting in through a memory failure).", "**Five attributes of detailed security tests:** **prioritized** (by risks and threat models) · **traced** (to security requirements) · **audience-defined** (developers, functional testers, security testers) · **based on security defect profiles** · **designed to be automated where applicable**.", "**Design flow:** test approach → risks, threat models and requirements → design techniques → test cases and scenarios. **A design process must be able to produce tests from any identified risk, requirement or threat.**"],
    example: "Threat model for an e-commerce login: account harvesting is ranked high. Conceptual test: “With a valid user name and a wrong password, the error message must **not reveal which of the two was wrong**.” It is **prioritized** (high risk), **traced** (to requirement SEC-LOGIN-04), written **for the functional testers**, based on the **harvesting defect profile**, and **automatable**.",
    exam: "K3 design questions give an approach and some risks and ask for the right conceptual test. Choose the test that **targets the stated risk directly**. Classify the risk first: a functional abuse gets a functional test, and a memory or code-structure flaw gets a structural test.",
    confuse: "**Account harvesting and password cracking are functional security risks** in the syllabus, even though they sound technical. **Buffer overflow is structural.**",
  } });
  B.push({ concept: {
    title: "The design categories: functional controls, access controls and the rest",
    plain: "The syllabus sorts what to test into categories. The three that are most often confused are **functional security controls**, **functional access controls** and **structural access controls**.",
    how: ["**Functional security controls** (e.g. transaction controls): business rules that stop unauthorized **actions**. Example: a bank teller cannot approve a withdrawal over a limit **without the head teller’s approval in the system**.", "**Functional access controls** (logins, passwords, tokens): is the **front door** applied correctly? Password policy enforced, the level of control right for the risk, resistant to cracking tools, and **error messages that do not help harvesting**.", "**Structural access controls** (user rights, encryption levels, authentication settings): how **rights** are configured behind the scenes by admins and DBAs. Test with **one test account per access level** (minimal, manager, admin) and verify that a minimal user **cannot** do manager tasks.", "**Other categories:** **secure coding practices** (mostly static analysis; dynamic tests for validation and error handling) · **operating system access** (can rootkits be planted?) · **language vulnerabilities** (no language is secure by itself; implementation matters) · **platform vulnerabilities** (patches applied promptly everywhere) · **external threats** (DoS, intrusion) · **internal threats** (often the greatest)."],
    example: "Payroll system. Functional security control: a pay-rate change needs a second approver. Functional access control: lockout after three failed logins. Structural access control: a clerk account cannot open the salary-history table even through a report tool.",
    exam: "When an option describes **a business rule** → functional security control. **The login itself** → functional access control. **Rights configured by administrators** → structural access control.",
    confuse: "**WhiteHat 2014** found **negligible differences** in vulnerability rates between languages (.NET, Java, PHP…). An option claiming one language is inherently secure is wrong.",
  } });
  B.push({ concept: {
    title: "Denial of service and intrusion: the external threats",
    plain: "**DoS** makes a system **unavailable to legitimate users**. **Intrusion** means someone **breaks in**. The syllabus describes several forms of each, and a four-level way to test for DDoS.",
    how: ["**DoS**: overloading bandwidth, connections or services. **DDoS**: launched **indirectly** from many machines, through **amplification** or **botnets** (machines compromised by viruses or Trojans).", "**Amplification / reflection**: send a small request to a protocol that gives a **large answer** (DNS, NTP), with the **victim’s address forged** as the sender, so the large answers hit the victim.", "**Resource exhaustion**: abuse an expensive function, for example by asking for **SSL key renegotiation** over and over until the server does nothing else.", "**Logical DoS**: abuse **intended** functionality. With **predictable user names and permanent lockout after three failures**, an attacker can lock out everyone and swamp the helpdesk.", "**Testing DDoS in four levels:** (1) no **known malware** on the machines · (2) the **IDS spots many requests from one machine** quickly · (3) **configurations** that allow abuse (SSL, web server, DNS) · (4) **logic defects** that allow DoS.", "**Intrusion methods:** social engineering, injection, account compromise (harvesting, password reset), known vulnerabilities, malware, insecure configuration, authorization defects, and **application-logic attacks** (doing shopping-cart steps **out of order** to get a discount)."],
    example: "A ticket site permanently locks accounts after three wrong passwords, and user names are e-mail addresses that can be guessed from a public list. On sale day an attacker locks 50,000 accounts. Nothing was hacked, but the service is denied. That is a **logical DoS**, and level 4 of DDoS testing (logic defects) would have caught it.",
    exam: "Match the mechanism to the name: “forged source address + DNS” → **amplification**. “Repeated SSL renegotiation” → **resource exhaustion**. “Lockout of guessable accounts” → **logical DoS**.",
    confuse: "**Intercepting a transmission sent from inside the organization to another organization is not an intrusion. The syllabus calls it an internal breach.**",
  } });
  B.push({ concept: {
    title: "Test case, test procedure or exploratory test?",
    plain: "Security tests use the **same formats** as other tests (IEEE 829, ISO/IEC/IEEE 29119-3, tailored). Only the **target** and the **environment** differ. Choose the format by whether the **order of steps matters**.",
    how: ["**Test case**: the most standalone form. **No required order.** Usually **one condition** (e.g. one password-format rule).", "**Test procedure**: a **sequence** of steps. Use it **when order matters** (e.g. “recover lost password”). A **test script** is an **automated** test procedure.", "**Experience-based (exploratory) test**: conditions and expected results are **not defined in advance**, but the **conditions tested and actual results must be recorded**."],
    example: "“Password shorter than 12 characters is rejected” → a test case. “Lock the account, call the helpdesk, use the temporary password, set a new password, log in again” → a test procedure, because each step depends on the one before.",
    exam: "If the stem describes **state that carries from step to step** (lockout, reset, multi-step approval), the answer is a **test procedure**.",
    confuse: "Exploratory does **not** mean undocumented. What you tried and what happened must still be **recorded**.",
  } });
  B.push({ concept: {
    title: "Turning a policy or procedure into tests (AS-3.3.2, K3 pool)",
    plain: "When the **test basis is a policy or procedure**, a security test becomes almost a form of **security audit**: it checks that the documented steps really happen and really protect. The syllabus gives three goals and one worked procedure.",
    how: ["**Goal 1:** understand the **purpose and scope** of the policy or procedure. **Goal 2:** assess its **testability**. **Goal 3:** create tests that relate **directly** to it.", "**The worked lockout procedure:** (1) three failed logins → lockout message on the **third** · (2) contact IT and **verify identity** → temporary password to a **known email address** · (3) log in with it · (4) set a **new password that follows the policy** (a chance to test the password policy too) · (5) log out · (6) log in with the new password.", "**Not every policy is that testable.** “Audit records contain all audited events with a timestamp, traceable to an individual” → you must **trigger sample events** and **check what is logged**."],
    example: "A procedure says “after **three** failed attempts the account is locked”. A test case that says “after **several** failed attempts” cannot verify the procedure, because “several” could be two or ten. **Exact numbers in the procedure are test data.**",
    exam: "Official Q13: reject any lockout test that says **“several”** attempts, and any test using passwords **kept in a notepad on the PC**. The correct one follows the procedure **exactly**: three attempts → message → temporary password → change → log out → log in.",
    confuse: "Policies are **a** test basis, but **should not be the only one**. Attacker-perspective tests are still needed.",
  } });

  B.push({ h2: "2.5 Execution, evaluation and maintenance" });
  B.push({ concept: {
    title: "The security test environment: isolated, complete, restorable (AS-3.4.1)",
    plain: "Security tests can **spread malware, corrupt servers and take networks down**. So the environment where they run must be **separated from everything else**, must **look exactly like production**, and must be **easy to reset**.",
    how: ["**Isolated** from other systems, **to the degree the malware risk requires**. Untrusted code (third-party, open source) needs an **isolated or virtual** environment. Low-risk functional security tests may run in a normal integrated environment.", "**Complete**: it mirrors the **production** environment in OS (**exact version and configuration**), network, middleware, desktops, mobile devices, databases, **access rights**, **browsers and plug-ins**, **co-existing applications**, and **data** (engineered, or **obfuscated** production data).", "**Restorable**: so tests can be **repeated** and the environment **recovered after corruption**."],
    example: "A tester wants to check whether a new PDF plug-in can be exploited. They use a **virtual machine** (isolated), with the **same OS build, browser version and user rights** as staff laptops (complete), from a **snapshot** they can roll back after each attempt (restorable).",
    exam: "Official Q14: the main characteristic → **mimics production in terms of access rights**. Reject: **closely tied to production** (it should **not** be connected), **old OS versions**, and **extra plug-ins not in production** (these cause **false positives and false negatives**).",
    confuse: "“**Mimics** production” is right. “**Connected to** production” is wrong. The environment should look the same but be separate.",
  } });
  B.push({ concept: {
    title: "Planning and approvals before ANY security test (AS-3.4.2, guaranteed K2)",
    plain: "Without **written, specific, prior permission**, a security test can be a **crime**. Approval protects the organization and the tester.",
    how: ["**Legality:** in almost all countries it is illegal to (try to) access systems without permission, and **in some countries even to possess certain security testing tools**. You need a **waiver from the system or data owner** and **approval from your management**.", "**Detection:** tests may set off the **IDS**, and the tester may look like a **malicious insider**.", "**Damage:** tests can cause **major failures and blackouts**, so the risks must be known and precautions taken.", "**Personal consequences:** without prior and **specific** authorization the tester can face **dismissal or prosecution**.", "**The authorization form:** the authorizing entity · the testers · the **statement of work** · the **dates** · details such as **source IP addresses and accounts** · **attestations** (the customer owns the system, has authority, **has backed up and tested the restore**, and understands the risks) · a **hold-harmless clause** for the testers · **signatures** of someone authorized to sign."],
    example: "A tester runs a port scan against a partner’s server “just to check”, without the partner’s signed waiver. Even if nothing breaks, this may be an offence, and the partner’s IDS reports an attack.",
    exam: "Official Q15: the significant concern about tools → **some countries prohibit the use of certain security testing tools**. A **fast-track** approval in a crisis is fine. A **complete bypass** of approval is not.",
    confuse: "Permission is obtained **before** testing, not after (this also decides a Chapter 6 question). And it must be **specific**: a general “go ahead” is not enough.",
  } });
  B.push({ concept: {
    title: "Evaluating a vulnerability and reporting it safely (AS-3.5.1, guaranteed K4)",
    plain: "When a test finds a vulnerability, you must work out **what it is, how far it reaches, how bad it could be, and how to fix it**, and you must report it **without creating a new risk**. A vulnerability report is a map for an attacker.",
    how: ["**Minimum incident report:** tester name · test environment · steps performed (**to reproduce it**) · **nature** · **extent** · **potential impact** · **suggested remediation**.", "**Same defect tool, special category:** use the normal incident system, but give security defects a **special category** and **restrict access**, especially when an independent tester reports into a widely visible tool, when a fix will take time, or when **insiders may be a threat**.", "**The IT auditor** can decide whether access to results should be restricted. Even the **final report** may need to be confidential, depending on whether the vulnerabilities have been fixed.", "**First response to a finding:** (1) **is it in production?** (2) **record it in the secure tracker** (3) **notify the developer** (4) **keep testing for similar defects** (the extent)."],
    example: "While testing an **update** to a live e-commerce site, you find XSS in the search box. You check the **current production version**: it is there too. You log it in the restricted security category, tell the developer the same day, and spend the afternoon testing the other input fields for XSS, because one usually means more.",
    exam: "Official Q16 (3 points) is this example. Reject any option that **adds the vulnerability to a general stakeholder or weekly status report** (it publicizes the flaw), and any option that **skips notifying the developer**.",
    confuse: "**Nature** = what kind of flaw. **Extent** = where else it exists. **Impact** = how much harm it could cause. Options sometimes put one in place of another.",
  } });
  B.push({ concept: {
    title: "Maintaining the security test process (AS-3.6.1)",
    plain: "Attack techniques change **every day**, so a security test process that cannot change quickly becomes useless. Maintenance is mostly about **adding new kinds of tests for new kinds of threats**.",
    how: ["Design the process **to be easy to change**.", "**Add new test types** as new threat types appear.", "**Watch for new tools**, and evaluate which ones add **power and flexibility**."],
    example: "A new attack against file-upload parsers is published. A maintained process adds “malformed upload” tests to the regression suite within a week. A rigid process waits for next year’s plan.",
    exam: "In K2 questions on maintenance, the reason is always **evolving technology and threats**. Avoid options that freeze the process or the test suite.",
    confuse: "Process maintenance (changing **how** you test) is not the same as **regression testing** after a code change. Regression is Chapter 4.",
  } });

  B.push({ h2: "2.6 Fuzzy points clarified" });
  B.push({ box: { kind: "warn", title: "Places where the wording is easy to misread", body: [
    "**“Evaluating and reporting” runs alongside execution, yet Q11 says evaluation comes “after execution”.** Both are true. Each **individual** test is evaluated right after it runs, so evaluation happens **during** the execution period, not in a separate phase at the end.",
    "**“Security test approach” in planning vs in Chapter 2.** It is the same thing: the project-level implementation of the strategy (Figure 3.1). Design starts **from** the approach.",
    "**“Isolated” is not absolute.** The syllabus says isolated **depending on the level of malware risk**. Isolation is a must for untrusted code, but not for every test.",
    "**“Secret” test results vs “confidential” reports.** The syllabus does not use classification levels here. It says reports may need **restricted access**, and the **IT auditor** decides whether to restrict them.",
    "**Q12’s “high-level schedule” is a trap.** It satisfies element 3 (schedule), but element 4 (the **time for each task**: design, run, evaluate) is still missing.",
  ] } });
  return B;
};
