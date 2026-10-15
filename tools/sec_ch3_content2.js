// CT-SEC Chapter 3 — Section 4 (questions)
const OFF = (n, pts) => `OFFICIAL · Sample Exam #${n} (${pts})`;
const DER = "Derived from syllabus";

module.exports = function () {
  const B = [];
  B.push({ pagebreak: true });
  B.push({ h1: "Section 4 — Demo Questions with Answers" });
  B.push({ lead: "Questions 1–6 are the **official ISTQB CTAL-SEC Sample Exam questions for Chapter 3** — #11 to #16 — with official answers and rationale. LO tags are inferred and match the Exam Structure Table. Questions 7–26 are derived strictly from the syllabus. Correct options are marked ✔." });

  B.push({ h2: "Part A — The 6 official Chapter 3 questions" });

  B.push({ q: { n: 1, tag: OFF(11, "2 pts"), meta: "LO: AS-3.1.1 (K3) | Syllabus §3.1.1", correct: ["b"],
    stem: "As a Security Administrator you are responsible for all aspects of the security process, including testing. For this particular process you are to use conceptual tests as a basis for manual tests and execute these from an external vendor’s perspective. Which security testing process does this most parallel?",
    opts: [
      "Security test creation of conditions and objectives",
      "Security test implementation",
      "Overall evaluating and reporting of security testing",
      "Security test analysis and design",
    ],
    why: "**(b)** — official rationale: **the use of the conceptual tests to create the manual tests and perform the execution is part of the security test implementation.** (a) and (d) **have already been done with the creation of the conceptual tests**. (c) **will occur after the tests have been executed**. Syllabus Table 3.1: implementation and execution **translates conceptual tests into tests that can be executed either manually or with tools … using a variety of security test perspectives – internal user, external user, malicious user**." } });

  B.push({ q: { n: 2, tag: OFF(12, "3 pts"), meta: "LO: AS-3.2.1 (K4) | Syllabus §3.2.2", correct: ["b"],
    stem: "You have been developing a security test plan for a system that will store medical information for patients and will transfer that data to specialist doctors. You have covered the following areas in your plan:\n• Scope (what’s in scope and out of scope)\n• Roles and assignments\n• Responsibilities (vendors vs. internal)\n• High level schedule\n• Environment requirements and setup\n• List of necessary authorizations and approvals\nWhat information do you still need to supply in this test plan to meet the minimum requirements as noted in the syllabus?",
    opts: [
      "A list of the necessary credentials and training for the personnel who will be conducting the testing",
      "A schedule showing the time that will be required to design, run and evaluate the security tests",
      "A copy of the regulatory standards that must be met by this system",
      "A list of the individuals who will be doing the testing and their contact information in the event of a security breach",
    ],
    why: "**(b)** — official rationale: **correct per the syllabus**. (a) **might be needed but that is not one of the minimum requirements and may already be understood in the roles and responsibilities section**. (c) **the standards might be referenced but not included in the plan**. (d) **this level of detail does not belong in the plan and the individual testers should not be contacted during a breach**. Syllabus §3.2.2 element: **defining the tasks to be performed and the time required for each** (design, evaluate and report, regression, environment)." } });

  B.push({ q: { n: 3, tag: OFF(13, "2 pts"), meta: "LO: AS-3.3.2 (K3) | Syllabus §3.3.2", correct: ["a"],
    stem: "Which of the following test cases would best test a system’s security procedure?",
    opts: [
      "Three unsuccessful login attempts will generate a lock-out message. Contact your manager or the System Administrator so they can give you a temporary password over the phone. You must then change the temporary password upon logging in. You log out then log back in using your newly created password.",
      "You receive a lock-out message after several attempts to log in. You call IT support to obtain a new password. You log in with the temporary password, log back out, then log in again and enter a new password.",
      "After several attempts you are locked out of the system. You use a password that worked previously. However, it no longer works. You attempt to create a new password but you are now locked out. A complete reboot of the machine is the next step to take you to the prompt to re-enter the password.",
      "After the first attempt to use an invalid password you immediately pull up a list of passwords on your notepad on your PC to ensure you are using the correct one. You try another password from the list and it works.",
    ],
    why: "**(a)** — official rationale: **B and C are not correct because of the word “several”. D is not correct because this would definitely not be a good security practice.** Syllabus §3.3.2 example: three failed attempts → lock-out message → identity verified and temporary password issued → log in with temporary password → create a policy-conformant new password → log out → log in with the new password." } });

  B.push({ q: { n: 4, tag: OFF(14, "1 pt"), meta: "LO: AS-3.4.1 (K2) | Syllabus §3.4.1", correct: ["c"],
    stem: "Which of the following are main characteristics of an effective security test environment?",
    opts: [
      "Closely tied to production systems to enhance security at all points",
      "Isolates different old versions of the operating systems for use in the environment",
      "Mimics the production environment in terms of access rights",
      "Includes all production environment plug-ins as well as other plug-ins not in the production environment in order to ensure the most comprehensive setup",
    ],
    why: "**(c)** — official rationale: **the closer the test environment mimics production, the more valid the testing will be. This is particularly true when it comes to access rights and delegation settings.** (a) **the systems don’t need to be and probably shouldn’t be connected**. (b) **may be useful, but is not a main characteristic**. (d) **includes plug-ins that are not in production which could result in both false positives and false negatives**." } });

  B.push({ q: { n: 5, tag: OFF(15, "1 pt"), meta: "LO: AS-3.4.2 (K2) | Syllabus §3.4.2", correct: ["a"],
    stem: "What is a significant concern when seeking approval for the security testing tools?",
    opts: [
      "Some countries prohibit the use of certain security testing tools",
      "Ensure the approval process for security testing tools can be bypassed on an exception basis in cases where a malicious event is in progress",
      "The risks of the tool are rarely known before it is procured and are better discovered when the tool is in use",
      "Because security testing tool risks are usually known, there is no need for a mitigating strategy",
    ],
    why: "**(a)** — official rationale: **while some tools are quite good and effective for testing, they may be prohibited by some countries and some organizations.** (b) **there is always a danger of deploying a sub-optimal tool to deal with a crisis. A fast-track approval process makes sense, but a complete bypass is risky.** (c) and (d) **there may be unknown risks from tools and it’s better to do the due diligence in tool selection**. Syllabus §3.4.2: **in some countries it is even against the law to have access to security testing tools**." } });

  B.push({ q: { n: 6, tag: OFF(16, "3 pts"), meta: "LO: AS-3.5.1 (K4) | Syllabus §3.5", correct: ["b"],
    stem: "You are reviewing a set of security test results run on a product that is going through final testing before release to production. This is an update of a version that is currently in production. The application just tested was your e-commerce site, and it has a defect that allows cross-site scripting. Which of the following is the proper set of steps you should take?",
    opts: [
      "Report the problem to the developer, add it to the stakeholder report, and continue testing for other types of defects",
      "Test if the problem exists in the current production version, document the defect in a secure system, notify the developer, continue testing for other XSS defects",
      "Investigate the extent of the problem by conducting further tests on the planned release with particular concentration on other XSS issues, conduct static analysis on the code",
      "Inform management, document the defect and include it in your weekly status report to stakeholders, continue testing for other security defects to determine the extent of the security issues",
    ],
    why: "**(b)** — official rationale: **the first priority is to see if the problem exists in the production version. The defect should be documented only in a secure defect tracking system since the problem may exist in production. Since one XSS issue was found, there may be others so continued testing is warranted.** (a) **the defect should not be publicized in the stakeholder report**. (c) **while further testing is needed, notification is critical**. (d) **because of the stakeholder reporting**." } });

  B.push({ h2: "Part B — 20 additional syllabus-derived questions" });
  B.push({ lead: "The K-level in each question’s label is the level of the **learning objective** it practises, not of the question itself. Some Part B items are quick recall checks on a K3 or K4 objective. Use them to learn the facts, and use the scenario items (and Part A) to practise the reasoning the real K3/K4 questions need." });

  B.push({ q: { n: 7, tag: DER, meta: "LO: AS-3.1.1 (K3) | Syllabus §3.1.1", correct: ["d"],
    stem: "A tester reviews the latest security risk assessment, the security requirements and the password policy, and then defines test conditions for each identified risk and the tools applicable to each. Which security test process step is this?",
    opts: [
      "Security test planning and control",
      "Security test implementation and execution",
      "Evaluating and reporting results of security testing",
      "Security test analysis and design",
    ],
    why: "**(d)**. Table 3.1: analysis and design tasks are **review items that serve as the basis (risk assessments, requirements, policies)** and **define security test conditions** based on objectives, risks, standards and known vulnerabilities, defenses, scope and **applicability of security test tools**." } });

  B.push({ q: { n: 8, tag: DER, meta: "LO: AS-3.1.1 (K3) | Syllabus §3.1.1", correct: ["a"],
    stem: "At the end of a release’s security testing, the team confirms that all planned security tests were performed, that reports were delivered, and archives the results and test data in a secure location. Which additional task belongs to the same process step?",
    opts: [
      "Analyze security test results to improve system and application development in terms of security",
      "Define security test estimates and schedules",
      "Set up the security test environment",
      "Define entry and exit criteria",
    ],
    why: "**(a)** is a **test closure** task in Table 3.1, alongside ensuring all tests were run, confirming deliverables and **archiving results, test data and other sensitive information in secure locations**. (b) and (d) are planning; (c) is implementation." } });

  B.push({ q: { n: 9, tag: DER, meta: "LO: AS-3.1.1 (K3) | Syllabus §3.1.2", correct: ["c"],
    stem: "A company plans to deploy a commercial off-the-shelf HR package without customization. Which security testing activity is NOT possible?",
    opts: [
      "Black-box testing of access rights",
      "Verifying that vendor security patches are applied",
      "Structural analysis and structural testing of the code",
      "Testing the configuration of the package in the target environment",
    ],
    why: "**(c)**. §3.1.2: COTS projects **are often black-box in nature … There is no access to the code, so structural analysis and structural testing is not possible.** They often require **frequent security updates and patches**." } });

  B.push({ q: { n: 10, tag: DER, meta: "LO: AS-3.1.1 (K3) | Syllabus §3.1.2", correct: ["b"],
    stem: "In an Agile project, a security risk is identified during sprint 4. What does the syllabus say about addressing it?",
    opts: [
      "It must be deferred to a dedicated security sprint at the end of the project",
      "It can (should) be addressed in the iteration in which it is identified, although some risks may not be fully mitigated and tested within one short release cycle",
      "It must be documented in the software requirement specification before any testing",
      "It should be handed to the acceptance testers",
    ],
    why: "**(b)** — §3.1.2 iterative/incremental: **security needs and risks may change during the project, and can (should) be addressed in the iteration in which they are identified** … **it may not be possible to completely mitigate and test it during one short release cycle**." } });

  B.push({ q: { n: 11, tag: DER, meta: "LO: AS-3.2.1 (K4) | Syllabus §3.2", correct: ["d"],
    scenario: "A security test plan for a vendor-supplied payroll module contains: scope and exclusions; a named in-house tester with tool training; a schedule that tests logins and access rights first; time estimates for design, execution, reporting, regression and environment build; and a description of an isolated test environment with the scanning tools to be installed. Reviewers note that the vendor has a contract clause stating it performs its own penetration tests.",
    stem: "Which feedback identifies the most significant weakness of the plan?",
    opts: [
      "The schedule should test logins last, after functional testing",
      "Tool training should be removed, as testers are expected to know the tools",
      "The environment should be shared with production to save cost",
      "The plan does not state who must authorize and approve the tests, when authorization is needed, or whether budget is sufficient — and it does not clarify which tests are the vendor’s responsibility and which are the customer’s",
    ],
    why: "**(d)**. Checking the six elements: scope ✓, who ✓ (but **vendor vs customer responsibility** is unresolved despite the contract clause), schedule ✓ (**access rights and logins first** is a strength), tasks and time ✓, environment ✓, **authorizations and approvals ✗**. (a) and (c) would turn strengths into weaknesses; (b) contradicts the syllabus question **do security testers need training in specific tools?**" } });

  B.push({ q: { n: 12, tag: DER, meta: "LO: AS-3.2.1 (K4) | Syllabus §3.2.2", correct: ["a"],
    stem: "Who should be included in the review of a security test plan, according to the syllabus?",
    opts: [
      "Knowledgeable people from all areas impacted by the security aspects of the plan — not necessarily security experts — with IT auditors and security administrators being especially helpful",
      "Only certified security testers, to keep the plan confidential",
      "Only the author of the plan and the test manager",
      "External penetration testers who will execute the tests",
    ],
    why: "**(a)** — §3.2.2: the review team should include **knowledgeable people from all areas impacted**; members **may not necessarily be security testers**; e.g. **a business-unit manager** may know risks; **IT auditors and security administrators are especially helpful** because of their knowledge of policies and procedures." } });

  B.push({ q: { n: 13, tag: DER, meta: "LO: AS-3.2.1 (K4) | Syllabus §3.2.1", correct: ["c"],
    stem: "What are the two aspects security testing should generally focus on, according to §3.2.1?",
    opts: [
      "Performance under attack and recovery time",
      "Compliance with ISO 27001 and PCI",
      "Verifying designed defenses are implemented and function as designed, and verifying that no vulnerabilities are introduced during development",
      "Finding all vulnerabilities and proving the system is secure",
    ],
    why: "**(c)** — verbatim. Testing for introduced vulnerabilities **starts with an assessment of the practices used by the development team**." } });

  B.push({ q: { n: 14, tag: DER, meta: "LO: AS-3.3.1 (K3) | Syllabus §3.3.1", correct: ["b"],
    stem: "Which test best addresses the risk of account harvesting on a login page?",
    opts: [
      "Enter a valid user name and valid password and confirm access",
      "Enter a correct user name with an incorrect password and verify the error message does not indicate which of the two items is incorrect",
      "Enter 1,000 random user names to measure response time",
      "Verify that passwords are stored hashed",
    ],
    why: "**(b)** is the syllabus’s example: **account harvesting is the practice of identifying a user name … A common test is to verify that when a correct user name is entered with an incorrect password, the error message does not indicate which of the items is incorrect.**" } });

  B.push({ q: { n: 15, tag: DER, meta: "LO: AS-3.3.1 (K3) | Syllabus §3.3.1", correct: ["d"],
    stem: "An application has three roles: clerk, supervisor and administrator. Which conceptual test targets structural access controls?",
    opts: [
      "Verify the login page uses TLS",
      "Verify that password rules are enforced",
      "Verify that a withdrawal above a limit requires a second approval",
      "Create a test account for each access level and verify that a clerk cannot perform supervisor-level or administrator-level actions",
    ],
    why: "**(d)** — §3.3.1: tests of structural access controls include **creation of test user accounts for each level of security access and verifying that each level of access does not have access rights that are restricted for that level**. (c) is a **functional security control** (transaction control); (b) a **functional access control**." } });

  B.push({ q: { n: 16, tag: DER, meta: "LO: AS-3.3.1 (K3) | Syllabus §3.3.1", correct: ["a"],
    stem: "Which of the following is a secure coding practice listed in the syllabus?",
    opts: [
      "Run services with the least possible privileges, never under root, each with its own operating system account",
      "Display the stack trace to users so they can report errors accurately",
      "Allow the application to issue commands directly to the operating system for efficiency",
      "Pass sensitive information in HTTP GET requests so it can be bookmarked",
    ],
    why: "**(a)** is listed. The syllabus says the opposite of (b) (**error handlers should not display stack trace**), (c) (**should not issue commands directly to the OS; use built-in APIs**) and (d) (**HTTP GET requests should not include sensitive information**)." } });

  B.push({ q: { n: 17, tag: DER, meta: "LO: AS-3.3.1 (K3) | Syllabus §3.3.1", correct: ["c"],
    stem: "An attacker discovers that user names follow the pattern firstname.lastname and that accounts are permanently locked after three failed logins. The attacker locks hundreds of accounts. What type of attack is this?",
    opts: [
      "Amplification attack",
      "Resource exhaustion attack",
      "Logical denial of service attack",
      "Man-in-the-middle attack",
    ],
    why: "**(c)** — §3.3.1’s own example of a **logical DoS**: an attacker **abuses intended functionality** (predictable user names + permanent lockout) to prevent users accessing the system, **indirectly DoS-ing the helpdesk**." } });

  B.push({ q: { n: 18, tag: DER, meta: "LO: AS-3.3.1 (K3) | Syllabus §3.3.1", correct: ["b"],
    stem: "Which of the following is one of the four levels of testing for DDoS described in the syllabus?",
    opts: [
      "Measure maximum throughput of the web server under expected load",
      "Test the ability of the intrusion detection systems to quickly identify multiple requests from a single computer in a short period of time",
      "Verify that all users can reset their passwords",
      "Run a code review of the login page",
    ],
    why: "**(b)**. The four levels: **(1) computers not infected with known malware; (2) IDS quickly identifies multiple requests from one computer; (3) identify configurations allowing abusable functionality (SSL, web server, DNS); (4) identify logic defects that can allow a DoS.**" } });

  B.push({ q: { n: 19, tag: DER, meta: "LO: AS-3.3.1 (K3) | Syllabus §3.3.1", correct: ["a"],
    stem: "Which situation does the syllabus explicitly state is NOT an intrusion attack?",
    opts: [
      "Intercepting a network transmission sent from inside an organization to someone in another organization",
      "Performing steps out of order in a shopping cart to obtain a discount",
      "Injecting SQL into a login field",
      "Exploiting a known firewall vulnerability",
    ],
    why: "**(a)** — §3.3.1: **intercepting a network transmission sent from inside an organization to someone in another organization is not considered an intrusion attack, but rather an internal breach.** (b) is an **application logic attack**, listed as an intrusion method." } });

  B.push({ q: { n: 20, tag: DER, meta: "LO: AS-3.3.1 (K3) | Syllabus §3.3.1", correct: ["d"],
    stem: "For testing the “recover lost password” process, which form of test description is most appropriate?",
    opts: [
      "Independent test cases with no defined order",
      "An exploratory charter with no recorded results",
      "A single test case covering one condition",
      "A test procedure, because the sequence of steps is important",
    ],
    why: "**(d)** — §3.3.1: **test procedures are used when sequence is important. For example, a test procedure would be helpful in testing the “recover lost password” process.** Even exploratory tests should **record the conditions tested and actual results**." } });

  B.push({ q: { n: 21, tag: DER, meta: "LO: AS-3.3.2 (K3) | Syllabus §3.3.2", correct: ["c"],
    stem: "A policy states: “Audit records contain all audited events with date/time stamp and are traceable to specific individuals.” Which test approach does the syllabus describe for this kind of policy?",
    opts: [
      "Declare the policy untestable and exclude it",
      "Review the vendor’s documentation only",
      "Trigger a sample set of events to be logged and verify the logged information — such as user ID and date/time stamp — is correct",
      "Delete the audit log and check whether it regenerates",
    ],
    why: "**(c)**. §3.3.2: **while not impossible to test**, actions **would need to be performed to trigger a sample set of events to be logged … and the accuracy of the information logged would need to be verified as correct, such as the user ID and the date and time stamp**." } });

  B.push({ q: { n: 22, tag: DER, meta: "LO: AS-3.3.2 (K3) | Syllabus §3.3.2", correct: ["a"],
    stem: "What are the goals of designing tests to validate security policies and procedures?",
    opts: [
      "Understand the purpose and scope of the policy or procedure, assess its testability, and create tests related directly to it",
      "Rewrite the policy so that it is testable, then hand it to developers",
      "Replace other perspectives of security testing with policy-based tests",
      "Prove that the policy is legally compliant",
    ],
    why: "**(a)** — §3.3.2. The syllabus also warns that **security policies and procedures should not be the only basis of testing**, contradicting (c)." } });

  B.push({ q: { n: 23, tag: DER, meta: "LO: AS-3.4.1 (K2) | Syllabus §3.4.1", correct: ["b"],
    stem: "A team must security-test an untrusted open source component of unknown provenance. Which environment is advisable?",
    opts: [
      "The shared integration environment, because it is cheapest",
      "An isolated or virtual test environment, because of the risk of malware corrupting a server or network",
      "The production environment, for realism",
      "A developer’s laptop",
    ],
    why: "**(b)** — §3.4.1: **when testing unknown and untrusted code, the possibility of malware corrupting a server and/or network makes it advisable to test in an isolated or virtual test environment**." } });

  B.push({ q: { n: 24, tag: DER, meta: "LO: AS-3.4.2 (K2) | Syllabus §3.4.2", correct: ["c"],
    stem: "Which item should an authorization form for security testing contain?",
    opts: [
      "The tester’s home address and date of birth",
      "The list of vulnerabilities the tester expects to find",
      "An attestation that the customer has backed up all systems and data and has tested that the system can be restored",
      "A guarantee that no outage will occur",
    ],
    why: "**(c)**. Attestations: customer **owns** the system, has **authority** to authorize, has **performed a backup**, has **tested restore**, **understands the risks** — plus a **hold harmless** clause and **signatures**. Tests **may** lead to outages, so (d) cannot be guaranteed." } });

  B.push({ q: { n: 25, tag: DER, meta: "LO: AS-3.5.1 (K4) | Syllabus §3.5", correct: ["d"],
    scenario: "An independent security testing firm finds a privilege-escalation flaw in a bank’s internal portal. The bank’s defect tracker is visible to all 400 IT staff and contractors. The fix is scheduled for next quarter.",
    stem: "What is the best way to record and report this finding?",
    opts: [
      "Log it in the defect tracker with normal visibility so all staff can avoid the affected screens",
      "Report it only verbally to avoid a paper trail",
      "Publish it in the weekly project newsletter so stakeholders are informed",
      "File an incident report with nature, extent, impact and suggested remediation under a special security category with restricted access — the IT auditor can decide on access",
    ],
    why: "**(d)**. All three syllabus triggers for securing results apply: **independent organization** reporting into a tool **with few restrictions**, a vulnerability **not immediately resolved**, and **internal personnel may be a potential threat**. Reports should have **a special category** and may need to be **secured**; **the IT auditor should be able to make the determination** on restricting access." } });

  B.push({ q: { n: 26, tag: DER, meta: "LO: AS-3.6.1 (K2) | Syllabus §3.6", correct: ["a"],
    stem: "Why must the security testing process be designed to change easily?",
    opts: [
      "Because security testing targets and threats change daily, and maintaining the process often means adding new types of tests for new types of threats",
      "Because ISTQB updates the syllabus every year",
      "Because the test team rotates every release",
      "Because regulators require a new process for every project",
    ],
    why: "**(a)** — §3.6: **the security testing targets and threats change daily, so the security testing process needs to be designed to change easily**; testers should also **keep up with new tools**." } });

  B.push({ h2: "Most Important Questions From This Chapter" });
  B.push({ lead: "Ranking rationale: guaranteed questions on **AS-3.1.1 (K3), 3.2.1 (K4), 3.4.2 (K2), 3.5.1 (K4)**; one K3 from 3.3.1/3.3.2; one K2 from 3.4.1/3.6.1." });
  B.push({ table: { head: ["Rank", "Topic / question focus", "LO", "Why it matters"], widths: [0.9, 6.2, 1.9, 5.0], rows: [
    ["1", "Evaluate, secure and report vulnerabilities — Q6, Q25", "AS-3.5.1", "**Guaranteed 3 points**; production first, secure tracker, never the stakeholder report."],
    ["2", "Plan review against six elements — Q2, Q11, Q12, Q13", "AS-3.2.1", "**Guaranteed 3 points**; tick-list method."],
    ["3", "Process step recognition — Q1, Q7, Q8, Q9, Q10", "AS-3.1.1", "**Guaranteed 2 points**; Table 3.1."],
    ["4", "Policy-based and conceptual test design — Q3, Q14–Q22", "AS-3.3.1 / 3.3.2", "**2 points**; exact numbers, account harvesting, access levels, procedures."],
    ["5", "Approvals — Q5, Q24", "AS-3.4.2", "**Guaranteed 1 point**; legality, IDS, outages, form contents."],
    ["6", "Environment and maintenance — Q4, Q23, Q26", "AS-3.4.1 / 3.6.1", "**1 point**; isolated, complete, restorable."],
  ] } });

  return B;
};
