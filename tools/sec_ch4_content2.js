// CT-SEC Chapter 4 — Section 4 (questions)
const OFF = (n, pts) => `OFFICIAL · Sample Exam #${n} (${pts})`;
const DER = "Derived from syllabus";
const RESET = "A user will be allowed to request their password. If they make this request, they must answer two of their three security questions correctly. If they answer correctly, a link will be sent to their email. The link will take them to a page where they can reset their password. Once reset, they can login with the new password. The link must be disabled 1 hour after it is sent. The user is allowed only two password requests without a reset, after which they will have to call the help desk. For any other errors, the user ID is locked and must be unlocked by the help desk.";

const RESET24 = "A user will be allowed to request their password. If they make this request, they must answer two of their three security questions correctly. If they answer correctly, a link will be sent to their email address. The link will take them to a page where they can reset their password. Once reset, they can login with the new password. The link must be disabled one hour after it is sent. The user is allowed only two password requests without a reset, after which he will have to call the helpdesk. For any other errors, the user ID is locked and must be unlocked by the help desk.";

module.exports = function () {
  const B = [];
  B.push({ pagebreak: true });
  B.push({ h1: "Section 4 — Demo Questions with Answers" });
  B.push({ lead: "Questions 1–8 are the **official ISTQB CTAL-SEC Sample Exam questions for Chapter 4** — #17 to #24 — with official answers and rationale. LO tags are inferred and match the Exam Structure Table. Questions 9–32 are derived strictly from the syllabus. Correct options are marked ✔." });

  B.push({ h2: "Part A — The 8 official Chapter 4 questions" });

  B.push({ q: { n: 1, tag: OFF(17, "1 pt"), meta: "LO: AS-4.1.1 (K2) | Syllabus §4.1.1", correct: ["a"],
    stem: "At what point in the SDLC should there be checking to ensure that proper secure coding practices have been followed?",
    opts: ["Component testing", "Integration testing", "System testing", "Security acceptance testing"],
    why: "**(a)** — official rationale: **the checking should be done as soon as the code is written.** Syllabus §4.1.1 (checkpoints for testing): **in development, component tests should be documented and performed to verify that secure coding practices have been followed and successfully implemented**." } });

  B.push({ q: { n: 2, tag: OFF(18, "2 pts"), meta: "LO: AS-4.1.2 (K3) | Syllabus §4.1.2", correct: ["b"],
    stem: "You have been asked by the business analyst to help with defining the requirements for the security aspects of a system. This is a safety-critical system that stores medical information for patients and supplies this information to health professionals at hospitals, doctors’ offices and ambulances. At what point in the lifecycle should the security requirements be documented and at what level of detail?",
    opts: [
      "They should not be documented formally because of the need to protect the security implementation within the code from outsiders",
      "They should be documented in a detailed and unambiguous way in the requirements documents during the requirements phase",
      "They should be documented during the design phase when the code approach is known rather than at the requirements phase when the approach is not known",
      "They should be restricted to the functional access and availability requirements from the user’s perspective and should be documented during the requirements phase",
    ],
    why: "**(b)** — official rationale. (a) is wrong, **although it is important that the documented requirements be protected from those who do not need to know**. (c) **although they may be refined at the design level, they should be initially captured during the requirements definition phase**. (d) **security requirements also need to include secure coding practices, etc.** Syllabus §4.1.2: **documenting security needs in a way that is detailed and unambiguous**, traceable to implementation and testing." } });

  B.push({ q: { n: 3, tag: OFF(19, "3 pts"), meta: "LO: AS-4.3.1 (K4) | Syllabus §4.3, §4.2", correct: ["c"],
    stem: "A deficiency has been discovered in production. If an unauthorized user copies a URL from a session of an authorized user, the unauthorized user can paste the URL into their session and continue to process with the authorized user’s rights. In the case that was reported, the unauthorized user was able to use the authorized user’s URL to change the system administration password. In order to close this gap, the developers will check the session ID and the user ID anytime a URL is used.\nWhat is a realistic concern for this fix?",
    opts: [
      "It will not fix the problem and session hijacking will still be possible",
      "It will fix the problem, but the usability may be adversely affected",
      "It will fix the problem, but performance may be adversely affected",
      "It will not fix the problem and will expose a new vulnerability with session IDs",
    ],
    why: "**(c)** — official rationale: **it is likely that this level of checking will slow down the system because it will have to check on each screen change.** (a) and (d) **are not correct because the fix should fix the problem**. (b) **there should be no impact to usability (unless you are the hacker!)**. The design flaw violated **“authorize after you authenticate”**; the requirements checklist names the **security/performance trade-off**." } });

  B.push({ q: { n: 4, tag: OFF(20, "1 pt"), meta: "LO: AS-4.4.1 (K2) | Syllabus §4.4.1, §4.4.2", correct: ["b"],
    stem: "During component level testing, why should the security tester review compiler warnings?",
    opts: [
      "Because these indicate security problems that must be fixed",
      "Because these indicate potential issues that should be investigated",
      "Because these indicate coding issues that will cause functional defects",
      "Because these indicate poor programming practices that will increase maintainability",
    ],
    why: "**(b)** — official rationale: **from a security testing standpoint, compiler warnings indicate potential issues that could lead to security gaps.** (a) **warnings do not necessarily require a fix**. (c) and (d) **may be true, but are not related to security testing**. CERT practice #2: **heed compiler warnings**." } });

  B.push({ q: { n: 5, tag: OFF(21, "2 pts"), meta: "LO: AS-4.4.5 (K3) | Syllabus §4.4.4, §4.4.5", correct: ["c"],
    stem: "You have been testing a system that has 20 defined components. You have done extensive security testing on each of the components. The system is now ready to move into component integration security testing. How should you approach this testing?",
    opts: [
      "Since component integration testing is concerned with the summation of the vulnerabilities of the individual components, conducting the same tests on the integrated components is the best approach.",
      "The main risk is now in the integration of the components themselves, so testing should cover each interface and verify that there are no vulnerabilities in the interfaces and the components should also be retested.",
      "It is likely that new vulnerabilities are present with the integrated components as well as with the larger system and infrastructure that is now testable, so testing should expand to include these new areas.",
      "Since the components are now integrated, the security risks will be reduced because the possible interactions are now limited so only the integration points should be tested and no component re-testing is needed.",
    ],
    why: "**(c)** — official rationale: **new vulnerabilities may be present with the integrated components and new testing areas are likely to be available.** (a) **component integration testing is not the sum of the individual components**. (b) **testing should not be limited to just the interfaces and the original components**. (d) **security risks are likely to be increased, not decreased**." } });

  B.push({ q: { n: 6, tag: OFF(22, "3 pts"), meta: "LO: AS-4.4.3 (K4) | Syllabus §4.4.3", correct: ["c"],
    stem: "You are creating security test cases to check for SQL injection on an input field that allows up to 5 alphanumeric characters. You are planning to apply equivalence partitioning to reduce the number of test cases you will need to execute. Given this information, which of the following is the minimum set of inputs you would need to use to test this field?",
    opts: ["bbbbb, 12345, ‘", "%, ‘, @, ab123", "‘, ab123", "‘"],
    why: "**(c)** — official rationale: **this has one test for SQL injection and one for a valid input. This is the minimum number of tests.** (a) and (b) **have more than the minimum**; (d) **doesn’t have enough tests because it doesn’t test the valid input**. **It would be advisable to do more testing on the various characters that can support SQL injection, but this question is asking to apply EP and get the minimum number of test cases.** Syllabus §4.4.3: **one representative from each class**." } });

  B.push({ q: { n: 7, tag: OFF(23, "2 pts"), meta: "LO: AS-4.5.1 (K3) | Syllabus §4.5.1", correct: ["a"],
    scenario: `You have been given the following requirement for security testing. ${RESET}`,
    stem: "Which of the following is the minimum list of test conditions to adequately test the functional security covered by this requirement?",
    opts: [
      "Invalid user; valid user; 2 correct answers; 2 incorrect answers; good email; bad email; reset with good password; reset with bad password; link good; link expired; two requests without reset; three requests without reset",
      "Valid user; 2 correct answers; good email; reset with good password; link good; two requests without reset",
      "Invalid user; 2 incorrect answers; bad email; reset with bad password; link expired; three requests without reset",
      "Buffer overflow on each input field; SQL injection on each input field; XSS on the login page and reset password page, invalid user; valid user; 2 correct answers; 2 incorrect answers; good email; bad email; reset with good password; reset with bad password; link good; link expired; two requests without reset; three requests without reset",
    ],
    why: "**(a)** — official rationale: **it covers the main scenarios for the functional security specified in the requirement. B tests only the valid tests. C tests only the error conditions. D expands into attack testing as well as functional testing.**" } });

  B.push({ q: { n: 8, tag: OFF(24, "2 pts"), meta: "LO: AS-4.5.2 (K3) | Syllabus §4.5.2", correct: ["d"],
    scenario: RESET24,
    stem: "Which of the following is a valid set of acceptance criteria for this requirement?\n1. User can reset password if less than three requests have been made since last reset, and two security questions are answered correctly, and the link is used to reset and a valid password is entered at the reset prompt.\n2. More than two requests results in user ID locked.\n3. More than two requests without a reset results in user ID locked.\n4. More than two security questions missed results in error.\n5. More than two security questions missed, user ID is locked.\n6. If email error is received by the system, user ID is locked.\n7. If invalid password is entered on reset, the user is prompted with the proper rules.\n8. Reset password can be used to log into the system.",
    opts: ["1, 2, 4, 6, 7, 8", "1, 2, 3, 4, 5, 6, 7, 8", "3, 5, 6, 7, 8", "1, 3, 5, 6, 8"],
    why: "**(d)** — official rationale: **it provides the acceptance criteria based on the requirement. 7 is tempting and would be logical, but it is not specified in the requirement. … 2 is incorrect where 3 is correct. 4 is incorrect where 5 is correct.** Criteria restate the requirement exactly: the qualifier **“without a reset”** and the outcome **“locked”** (for “any other errors”) both matter." } });

  B.push({ h2: "Part B — 24 additional syllabus-derived questions" });
  B.push({ lead: "The K-level in each question’s label is the level of the **learning objective** it practises, not of the question itself. Some Part B items are quick recall checks on a K3 or K4 objective. Use them to learn the facts, and use the scenario items (and Part A) to practise the reasoning the real K3/K4 questions need." });

  B.push({ q: { n: 9, tag: DER, meta: "LO: AS-4.1.1 (K2) | Syllabus §4.1.1", correct: ["d"],
    stem: "Which of the following is one of the reasons the syllabus gives for integrating security testing into the software lifecycle?",
    opts: [
      "To allow security testing to be outsourced at the end of the project",
      "To reduce the number of security requirements",
      "To replace secure coding with penetration testing",
      "To provide entry and exit criteria throughout the project",
    ],
    why: "**(d)**. The four reasons: **a prescribed time for security-related activities · checkpoints for review · checkpoints for testing · entry and exit criteria throughout the project** (e.g. no component enters integration until all security activities are complete)." } });

  B.push({ q: { n: 10, tag: DER, meta: "LO: AS-4.1.1 (K2) | Syllabus §4.1.1", correct: ["a"],
    stem: "Why does the syllabus recommend reviewing code changes as a lifecycle checkpoint?",
    opts: [
      "To detect the presence of malicious coding by internal employees or contractors",
      "To measure developer productivity",
      "To check that code comments are complete",
      "To decide which tests can be skipped",
    ],
    why: "**(a)** — §4.1.1: **code changes should also be reviewed to detect the presence of malicious coding by internal employees or contractors.**" } });

  B.push({ q: { n: 11, tag: DER, meta: "LO: AS-4.1.2 (K3) | Syllabus §4.1.2", correct: ["b"],
    stem: "During which phase are security tests performed in “some approximation of the final target environment”, requiring a transition from the development environment?",
    opts: ["Component testing", "System testing", "Requirements review", "Implementation"],
    why: "**(b)** — §4.1.2 system testing activities: **performing security tests in some approximation of the final target environment, necessitating a transition from the development environment in which previous implementation and integration activities have occurred**." } });

  B.push({ q: { n: 12, tag: DER, meta: "LO: AS-4.1.2 (K3) | Syllabus §4.1.2", correct: ["c"],
    scenario: "A team is adopting two-week sprints for a banking app. The product owner asks where security activities fit.",
    stem: "Which plan best implements the syllabus’s lifecycle activities for this iterative project?",
    opts: [
      "Run all security testing in a dedicated hardening sprint before go-live",
      "Document security requirements once at project start and never revisit them",
      "Capture security needs in each sprint’s user stories and acceptance criteria and review them; design on a whiteboard to meet those needs; write secure code with component tests and reviews in-sprint; run system-level security tests frequently in an approximation of the target environment; regression-test security after each change",
      "Leave security to acceptance testers, because acceptance testing is black-box",
    ],
    why: "**(c)** maps each syllabus phase into the iteration: requirements **documented, reviewed and traceable**; design **documented appropriately — e.g. on a whiteboard in an iterative approach**; implementation with **component testing and component reviews**; **iterative approaches can system-test much more frequently**; maintenance/regression after change. (a) and (d) defer security to the end." } });

  B.push({ q: { n: 13, tag: DER, meta: "LO: AS-4.1.2 (K3) | Syllabus §4.1.2", correct: ["a"],
    stem: "A database is upgraded to a new major version on a live system. What does the syllabus say about security testing this change?",
    opts: [
      "Maintenance includes upgrades such as databases and should be treated with the same care as original development: confirmation and regression testing to ensure no new vulnerabilities and that existing defenses are still effective",
      "Upgrades of third-party components are out of scope for security testing",
      "Only a functional smoke test is needed after an upgrade",
      "Security testing is only required if application code changes",
    ],
    why: "**(a)**. §4.1.2: **maintenance can include upgrades (e.g. operating system, databases), coding changes, data conversions and platform migrations … any maintenance activity should be treated with the same care and attention as the original development.**" } });

  B.push({ q: { n: 14, tag: DER, meta: "LO: AS-4.2.1 (K4) | Syllabus §4.2", correct: ["b"],
    scenario: "Requirement REQ-17: “The patient portal shall be secure. Access to lab results is only granted to authorized personnel. Patients can view their own results online.”",
    stem: "Which deficiency should a security tester raise FIRST?",
    opts: [
      "The requirement does not specify the font size for lab results",
      "Terms such as “shall be secure” and “authorized personnel” are ambiguous and must be clarified into specific, testable statements (who is authorized, for which data types, under what conditions)",
      "The requirement should specify the encryption algorithm to be used",
      "The requirement should be moved to the design document",
    ],
    why: "**(b)**. The checklist’s **testability** heading names exactly these examples: **“processing must be secure” and “access is only granted to authorized personnel”** must be **identified and clarified to be specific and testable**. Until they are, no security test can be written. (c) is a design choice, not a requirement deficiency." } });

  B.push({ q: { n: 15, tag: DER, meta: "LO: AS-4.2.1 (K4) | Syllabus §4.2", correct: ["d"],
    scenario: "A requirement for an online bank states: “After three failed logins the account is locked permanently. Unlocking requires a visit to a branch with photo ID.” The bank has 2 million mostly online customers, and predictable customer numbers are used as user IDs.",
    stem: "Which security-checklist headings reveal the most significant deficiencies?",
    opts: [
      "Performance only — branch visits take time",
      "Compliance only — the policy reference is missing",
      "Privacy only — photo ID is personal data",
      "Usability (no practical remedy for legitimate locked-out users) and common vulnerabilities (predictable IDs plus permanent lockout enable a logical denial of service)",
    ],
    why: "**(d)**. **Usability:** **are remedies specified for legitimate users who may experience problems?** — a branch visit for 2 million online users is not practical. **Common vulnerabilities:** predictable user names + permanent lockout is the syllabus’s **logical DoS** example (Chapter 3). These are higher-risk than (a)–(c)." } });

  B.push({ q: { n: 16, tag: DER, meta: "LO: AS-4.2.1 (K4) | Syllabus §4.2", correct: ["a"],
    stem: "Which statement about requirements is NOT among the syllabus’s general considerations?",
    opts: [
      "Requirements are stable once approved and seldom change",
      "Many organizations are challenged to write clear, unambiguous, complete, correct and testable requirements",
      "Requirements can contain gaps and errors, so both verification and validation are needed",
      "Quality characteristics such as security are often overlooked in favor of functionality",
    ],
    why: "**(a)** contradicts §4.2: **requirements are highly subject to change throughout a project**." } });

  B.push({ q: { n: 17, tag: DER, meta: "LO: AS-4.3.1 (K4) | Syllabus §4.3", correct: ["c"],
    scenario: "Design extract: “To improve responsiveness, the mobile client validates all input and checks the user’s role before calling the REST API. The API trusts requests that include a valid session token and executes the requested operation. Reports are generated by concatenating user-supplied filter text into a SQL statement.”",
    stem: "Which IEEE Center for Secure Design principles does this design violate?",
    opts: [
      "Always consider the users; be flexible about future changes",
      "Use cryptography correctly; identify sensitive data",
      "Earn or give, but never assume, trust (server trusts client validation and role checks); authorize after you authenticate (the API does not authorize the operation); strictly separate data and control instructions (user text concatenated into SQL)",
      "Understand how external components change the attack surface",
    ],
    why: "**(c)**. Client-side validation and role checks **assume trust** in the client; the API authenticates (token) but **does not authorize** the operation; concatenating user data into SQL **mixes data and control instructions** from an untrusted source. Each maps to a named IEEE approach." } });

  B.push({ q: { n: 18, tag: DER, meta: "LO: AS-4.3.1 (K4) | Syllabus §4.3", correct: ["b"],
    stem: "A design adds a third-party analytics SDK and a new partner API to an existing application without updating the threat model. Which IEEE design principle is most directly at stake?",
    opts: [
      "Authorize after you authenticate",
      "Understand how integrating external components changes your attack surface",
      "Use an authentication mechanism that cannot be bypassed",
      "Always consider the users",
    ],
    why: "**(b)** — the IEEE list includes **understand how integrating external components change your attack surface**." } });

  B.push({ q: { n: 19, tag: DER, meta: "LO: AS-4.4.1 (K2) | Syllabus §4.4.1", correct: ["c"],
    stem: "Which vulnerability is specifically named by the syllabus as identifiable and fixable during structural testing?",
    opts: [
      "Social engineering",
      "Weak password policy",
      "“Backdoor” access — an undocumented interface known only to the developer that bypasses normal security controls",
      "Denial of service from a botnet",
    ],
    why: "**(c)**. §4.4.1.1 lists **memory buffer overflows**, **malicious code inserted by an internal employee or contractor**, and **“backdoor” access**." } });

  B.push({ q: { n: 20, tag: DER, meta: "LO: AS-4.4.1 (K2) | Syllabus §4.4.1", correct: ["a"],
    stem: "What advantage does white-box fuzz testing have over black-box fuzzing, according to the syllabus?",
    opts: [
      "On small software blocks (functions, classes) it might get usable results in much less time, and by instrumenting code it can detect memory corruption and buffer overflow",
      "It needs no random data",
      "It replaces the need for functional security testing",
      "It is the only way to test encryption",
    ],
    why: "**(a)** — §4.4.1.1: **white-box fuzz testing (on small software blocks, functions, classes) might get usable results in much less time than a black-box fuzzing tool**; **white-box fuzz testing tools are able to detect memory corruption, buffer overflow, etc., by instrumenting the code**." } });

  B.push({ q: { n: 21, tag: DER, meta: "LO: AS-4.4.1 (K2) | Syllabus §4.4.1.2", correct: ["d"],
    stem: "How is the adequacy of functional security testing at any level determined?",
    opts: [
      "By the number of tests executed per day",
      "Only by observing responses to unspecified stresses",
      "By the absence of compiler warnings",
      "By confirming satisfaction of specified security requirements, in addition to observing responses to stresses not explicitly specified — which requires creativity",
    ],
    why: "**(d)** — §4.4.1.2, which adds that **creativity is required … because testers are probing for what the software developers have overlooked**." } });

  B.push({ q: { n: 22, tag: DER, meta: "LO: AS-4.4.2 (K3) | Syllabus §4.4.2", correct: ["b"],
    scenario: "Coding specification for a component that writes customer notes to a database and forwards them to a CRM: “Notes up to 500 characters; only users with role AGENT may write; the component runs under a dedicated service account; outbound data to the CRM must be encoded.”",
    stem: "Which set of abstract component-level security tests best reflects the CERT practices?",
    opts: [
      "Measure throughput of 1,000 writes per second",
      "Submit notes over 500 characters and with SQL metacharacters (validate input); attempt a write as a non-AGENT user (default deny / policy); verify the service account has only the rights needed (least privilege); send notes with control characters and verify encoding before the CRM call (sanitize data sent to other systems)",
      "Verify the user interface colors meet branding guidelines",
      "Run the component with administrator rights to check it works",
    ],
    why: "**(b)** maps the specification to CERT practices **validate input, default deny, architect for security policies, least privilege, sanitize data sent to other systems**. (d) contradicts least privilege. Tests should focus on **the most crucial requirements in terms of probability of attack and consequences of compromise**." } });

  B.push({ q: { n: 23, tag: DER, meta: "LO: AS-4.4.2 (K3) | Syllabus §4.4.2", correct: ["a"],
    stem: "On what basis should component tests against secure-coding checklists be focused?",
    opts: [
      "A well-documented risk analysis incorporating realistic threat modeling — focusing on the most crucial requirements in terms of probability of attack and consequences of compromise",
      "Equal effort on all ten practices regardless of risk",
      "The developer’s preference",
      "The number of lines of code per component",
    ],
    why: "**(a)** — §4.4.2." } });

  B.push({ q: { n: 24, tag: DER, meta: "LO: AS-4.4.3 (K4) | Syllabus §4.4.3", correct: ["c"],
    scenario: "Component test results for an authorization module: statement coverage 100%; branch coverage 62%; all 14 requirements tested; 3 of 9 abuse cases tested. The untested branches are all in the code path that handles expired sessions.",
    stem: "What is the best assessment of the adequacy of the code from a security perspective?",
    opts: [
      "Adequate — 100% statement coverage proves all code works",
      "Adequate — all requirements are tested",
      "Not yet adequate — branch coverage and abuse-case coverage are low, and the untested decision outcomes are in security-relevant expired-session handling; tests should target those outcomes and the remaining abuse cases",
      "Not adequate — path coverage must be 100% before release",
    ],
    why: "**(c)**. Structural coverage: statement coverage is weaker than **branch coverage (% of decision outcomes)**; untested outcomes lie in **security-relevant** code. Requirements-based coverage includes **% of specified use/abuse cases tested** — only 3 of 9. (d) is unrealistic: **exhaustive path testing is generally not feasible because of loops**." } });

  B.push({ q: { n: 25, tag: DER, meta: "LO: AS-4.4.3 (K4) | Syllabus §4.4.3", correct: ["d"],
    stem: "Which is the strongest of the control-flow-based coverage criteria named in the syllabus?",
    opts: ["Statement coverage", "Branch coverage", "Critical path coverage", "Path coverage"],
    why: "**(d)** — **path coverage, which measures against all entry-to-exit paths**; **generally not feasible** because of loops, so **critical path** and **branch** coverage are less stringent alternatives." } });

  B.push({ q: { n: 26, tag: DER, meta: "LO: AS-4.4.3 (K4) | Syllabus §4.4.3", correct: ["b"],
    stem: "A state-transition model of a session (Anonymous → Authenticated → Elevated → Expired) is used for security testing. Which coverage criteria belong to this kind of model?",
    opts: [
      "Percentage of requirements and use cases tested",
      "Percentage of states, transitions, transition-pairs and cycles",
      "Coverage of axioms",
      "Percentage of packages and classes executed",
    ],
    why: "**(b)** — for **transition-based models** the syllabus lists **% nodes (states), % transitions, % transition-pairs, % cycles**. (c) is for **algebraic** notations; (a) is requirements-based; (d) structural." } });

  B.push({ q: { n: 27, tag: DER, meta: "LO: AS-4.4.3 (K4) | Syllabus §4.4.3", correct: ["a"],
    stem: "A numeric PIN field accepts exactly 4 digits. Applying equivalence partitioning with the aim of a minimum set for security-relevant input validation, which set is best?",
    opts: [
      "1234 (valid), 12a4 (non-numeric), 123 (too short), 12345 (too long)",
      "0000, 1111, 2222, 3333",
      "1234 only",
      "‘ only",
    ],
    why: "**(a)** gives **one representative per class**: valid; invalid type (non-numeric); invalid length **below** the range; invalid length **above** the range. “Too short” and “too long” are **two separate invalid partitions**, because the system can handle each side differently. (b) repeats one class; (c) and (d) miss classes — just as in the official Q22, a set without **a valid input** is incomplete." } });

  B.push({ q: { n: 28, tag: DER, meta: "LO: AS-4.4.4 (K2) | Syllabus §4.4.4", correct: ["c"],
    stem: "Which statement about security during component integration testing is correct?",
    opts: [
      "Vulnerabilities after integration equal the sum of the vulnerabilities of each component",
      "Integration can only increase security",
      "New attack vectors become possible through interactions, while some interactions may mitigate or block breach sequences; the integration approach (top-down, bottom-up) can affect when concerns are revealed",
      "Integration testing does not require creativity because the interfaces are specified",
    ],
    why: "**(c)** — §4.4.4 in full; the syllabus also says testers **need to be creative** at this level." } });

  B.push({ q: { n: 29, tag: DER, meta: "LO: AS-4.4.5 (K3) | Syllabus §4.4.5", correct: ["d"],
    stem: "During integration, stubs replace the payment and identity services. As the real services are integrated and stubs removed, what should the security tester expect and do?",
    opts: [
      "Expect fewer vulnerabilities and reduce testing",
      "Stop testing, since the services were tested by their vendors",
      "Rerun only the original component tests",
      "Expect new paths to vulnerabilities to become exploitable and design additional integration security tests, based on risk analysis and threat modeling",
    ],
    why: "**(d)** — §4.4.5: **as more implemented components are added … scaffolding is incrementally removed, allowing for fuller assessment of functionality as well as new paths to vulnerabilities that might be exploited.**" } });

  B.push({ q: { n: 30, tag: DER, meta: "LO: AS-4.5.1 (K3) | Syllabus §4.5.1", correct: ["b"],
    scenario: "Security requirement: “While transferring funds, the system shall not allow the debit account to be changed after the one-time code has been verified.” Functional process: select accounts → enter amount → receive one-time code → verify code → confirm transfer.",
    stem: "Which end-to-end security test scenario best verifies the requirement within the functional process?",
    opts: [
      "Transfer funds between two accounts and check the balance",
      "Perform the transfer up to code verification, then attempt to change the debit account (via UI and by tampering with the request) before confirmation; verify the change is rejected and the transfer uses the originally verified account, and that the attempt is logged",
      "Run a vulnerability scanner against the transfer page",
      "Verify that the one-time code is six digits",
    ],
    why: "**(b)** follows the syllabus pattern **“in the process of doing x the system should not allow y to happen”** — it runs the **functional process end to end** while **probing for ways the security constraint might be violated**." } });

  B.push({ q: { n: 31, tag: DER, meta: "LO: AS-4.5.2 (K3) | Syllabus §4.5.2", correct: ["a"],
    stem: "When is the best time to define and document acceptance criteria, according to the syllabus?",
    opts: [
      "Before system development or purchase",
      "After system testing is complete",
      "During deployment",
      "After the first production incident",
    ],
    why: "**(a)** — §4.5.2, so **an initial understanding can be made between the supplier and acquirer, even if both are in the same organization**; changing criteria should be **analyzed for their impact on security testing**." } });

  B.push({ q: { n: 32, tag: DER, meta: "LO: AS-4.6.1 (K3) | Syllabus §4.6", correct: ["c"],
    scenario: "A retailer releases a change that speeds up checkout by caching customer profiles. The existing regression suite contains 600 individual function tests.",
    stem: "Which security regression approach best follows the syllabus?",
    opts: [
      "Rerun only the 600 function tests",
      "Skip security regression — performance changes do not affect security",
      "Run a defined set of end-to-end security scenarios (e.g. log in and complete a purchase without compromising personal information; users only perform actions in their rights), paying particular attention to the caching change because efficiency enhancements are prone to sacrificing security controls",
      "Run a penetration test once a year",
    ],
    why: "**(c)** — §4.6: **enhancements to usability or efficiency are especially prone to sacrificing security controls**; individual function tests are **often insufficient**; **end-to-end regression test scenarios are more robust** and should be run **each time a change is made**." } });

  B.push({ h2: "Most Important Questions From This Chapter" });
  B.push({ lead: "Ranking rationale: guaranteed **AS-4.1.1 (K2), 4.1.2 (K3), 4.4.3 (K4), 4.5.2 (K3)**; pools 4.2.1/4.3.1 (K4), 4.4.1/4.4.4 (K2), 4.4.2/4.4.5 (K3), 4.5.1/4.6.1 (K3)." });
  B.push({ table: { head: ["Rank", "Topic / question focus", "LO", "Why it matters"], widths: [0.9, 6.2, 1.9, 5.0], rows: [
    ["1", "Coverage analysis and EP minimum — Q6, Q24–Q27", "AS-4.4.3", "**Guaranteed 3 points.**"],
    ["2", "Requirements and design deficiencies — Q3, Q14–Q18", "AS-4.2.1 / 4.3.1", "**3 points** from the pool; checklist + IEEE ten."],
    ["3", "Acceptance criteria — Q8, Q31", "AS-4.5.2", "**Guaranteed 2 points**; no invented rules."],
    ["4", "Lifecycle activities — Q2, Q11–Q13", "AS-4.1.2", "**Guaranteed 2 points.**"],
    ["5", "End-to-end scenarios and regression — Q7, Q30, Q32", "AS-4.5.1 / 4.6.1", "**2 points** from the pool."],
    ["6", "Component and integration tests — Q4, Q5, Q19–Q23, Q28, Q29", "AS-4.4.x", "**1 + 2 points** from two pools."],
    ["7", "Why a lifecycle — Q1, Q9, Q10", "AS-4.1.1", "**Guaranteed 1 point.**"],
  ] } });

  return B;
};
