// CT-SEC Chapter 2 — Section 4 (questions)
const OFF = (n, pts) => `OFFICIAL · Sample Exam #${n} (${pts})`;
const DER = "Derived from syllabus";

module.exports = function () {
  const B = [];
  B.push({ pagebreak: true });
  B.push({ h1: "Section 4 — Demo Questions with Answers" });
  B.push({ lead: "Questions 1–6 are the **official ISTQB CTAL-SEC Sample Exam questions for Chapter 2** — #5 to #10 — with their official answers and rationale. LO tags are inferred (the GA sample exam removed them) and match the Exam Structure Table. Questions 7–26 are derived strictly from the syllabus text. Correct options are marked ✔." });

  B.push({ h2: "Part A — The 6 official Chapter 2 questions" });

  B.push({ q: { n: 1, tag: OFF(5, "1 pt"), meta: "LO: AS-2.2.1 (K2) | Syllabus §2.2", correct: ["a"],
    stem: "If an organization experiences a security breach and legal action results, how does it help the organization to have done security testing?",
    opts: [
      "It can show that the organization has done due diligence to try to prevent such an incident",
      "The documentation from the security testing can be used to track down the perpetrator",
      "Since any important information would have been backed up before security testing, this backup can be used to restore any compromised information",
      "By tracing through the documented tests, the security testing team can discover how the breach was possible",
    ],
    why: "**(a)** — official rationale: **correct per the syllabus**. (b) **this information would probably not be helpful**. (c) **the backup would likely be out of date and the information was not necessarily corrupted, but rather stolen or viewed**. (d) **may help point to areas where testing was not sufficient, but it will not support the organization’s defense of legal actions**. Syllabus §2.2: **if a company can show that it took reasonable steps to protect digital assets, such as testing for vulnerabilities, there may be a defense in a court of law**." } });

  B.push({ q: { n: 2, tag: OFF(6, "1 pt"), meta: "LO: AS-2.4.3 (K2) | Syllabus §2.4.3", correct: ["c"],
    stem: "Which of the following is a correct statement?",
    opts: [
      "Information assurance is a part of security testing",
      "Information assurance and security testing are two terms for the same thing",
      "Security testing is a part of information assurance",
      "The two terms refer to different areas of security",
    ],
    why: "**(c)** — official rationale: **security testing is a part of the larger area of information assurance**. Syllabus §2.4.3: **IA is a wider, more encompassing term. This relationship is similar to that between Quality Assurance (QA) and Software Testing.**" } });

  B.push({ q: { n: 3, tag: OFF(7, "2 pts"), meta: "LO: AS-2.4.2 (K3) | Syllabus §2.4.2", correct: ["b"],
    stem: "You are working at a bank as part of the security testing team. During a recent security audit it was noted that the user’s passwords were not strong enough. Since that time, a new set of requirements has been issued to ensure password strength. Given this information, what would be a reasonable set of security objectives for general password rule testing?\n1. Verify that passwords meet the requirements for length\n2. Verify that passwords meet the requirements for usage of characters, numbers, letters and capitalization\n3. Verify that passwords can be retried three times\n4. Verify that passwords cannot be re-used within a one year timeframe\n5. Verify that passwords must be reset every three months\n6. Verify that the user can request to have their password emailed to them\n7. Verify that the system administrator can reset a locked password",
    opts: [
      "1, 2, 3, 4",
      "1, 2, 4, 5",
      "3, 4, 6, 7",
      "4, 5, 6, 7",
    ],
    why: "**(b)** — official rationale: **all of these are valid security objectives**. (a) is wrong because **3 is functional rather than security-related (unless it locks them out, but we don’t know that from this description)**. (c) is wrong because **6 and 7 are both functional rather than specific security requirements**; (d) for the same reason. Syllabus §2.4.2: objectives focus on **security goals** — e.g. **verify that password authentication applies the correct rule for password strength**." } });

  B.push({ q: { n: 4, tag: OFF(8, "2 pts"), meta: "LO: AS-2.5.1 (K3) | Syllabus §2.5", correct: ["c"],
    stem: "Your company recently made headlines after a security breach resulted in confidential customer information being stolen. Management has reacted with an edict that the scope of the security testing objectives needs to be expanded immediately. While you agree that something needs to be done, you are worried that this approach may be too reactive and may not result in the testing that is needed.\nAccording to the syllabus, what is a reasonable concern if these initiatives are implemented?",
    opts: [
      "The testing will still miss issues because it will not be well-focused",
      "The testing will be outsourced so that it can be done more efficiently",
      "The testing scope may be too large and there may not be adequate resources to complete it",
      "The testing objectives are not clearly defined and may miss the same issues as previously escaped to production",
    ],
    why: "**(c)** — official rationale: **correct per the syllabus as this is a common problem when the objectives are broadly defined**. (a) and (d) **are reasonable concerns, but you don’t know when or how the test objectives will be defined, so this may be controllable**. (b) **is always a possibility … but there has been no indication that outsourcing will occur**. Syllabus §2.5: **if the scope is too large, resources may be depleted before the test can be finished**." } });

  B.push({ q: { n: 5, tag: OFF(9, "3 pts"), meta: "LO: AS-2.6.2 (K4) | Syllabus §2.4.1, §2.6.2", correct: ["d"],
    stem: "You have just accepted a job to create a security testing team for a company that handles sensitive medical information that is shared between doctors and hospitals. You have noticed that the security around this information is not sufficient to protect it from hackers or even accidental exposure. The person who had your job previously brought in a number of consultants to do testing, but the findings were not documented and no changes were implemented. In fact, you don’t even know what the coverage was from the testing. You have presented your findings to the executive management team. While they have agreed in principle that they need security testing, they have not allocated the necessary budget or time to the project. It appears that while they think security is a good idea, they really have no understanding of what should be done or how it should be done. What should be your first step toward getting the executives aligned with the work that needs to be done?",
    opts: [
      "Create a detailed list of all the possible security holes and present these to the executives",
      "Provide a summary of the testing approach that you propose and give examples of how the testing will be conducted",
      "Bring in the legal team to explain what a security breach could cost the organization",
      "Create a security policy and security testing policy and demonstrate how that aligns with your proposed testing approach",
    ],
    why: "**(d)** — official rationale: **at this point, the organization needs a high level policy and plan to move forward. Without this policy, the testing may continue to be sporadic and high level support and funding will be difficult.** (a) and (c) **might be useful if you have trouble getting funding when you work to implement the policy**. (b) **is not right because you need an overall policy before you define the approach**. The scenario exhibits the failure causes **lack of executive leadership**, **lack of executive provision of resources** and **lack of alignment with policy and strategy** (§2.6.2)." } });

  B.push({ q: { n: 6, tag: OFF(10, "2 pts"), meta: "LO: AS-2.6.3 (K3) | Syllabus §2.6.3", correct: ["c"],
    stem: "You have just come from a meeting where there was much discussion regarding the security approach of the organization. One of the points of emphasis was the importance of testing to ensure that data is protected from fraudulent access, particularly credit card information. You have been asked to prepare a set of testing objectives that will help address this risk area. One of your tasks is to ensure that you are covering all the concerns of the stakeholders. Which stakeholder group is most likely to see the benefits from your efforts?",
    opts: [
      "Executive management",
      "Compliancy officers",
      "Business customers",
      "Regulatory officers",
    ],
    why: "**(c)** — official rationale: **the business customers will be most concerned with protection from fraudulent access as it is their data that is vulnerable**. You would hope (a), (b) and (d) are also involved, **but this is not usually their primary benefit**. Syllabus §2.6.3: **business customers may see protection from fraud**." } });

  B.push({ h2: "Part B — 20 additional syllabus-derived questions" });
  B.push({ lead: "The K-level in each question’s label is the level of the **learning objective** it practises, not of the question itself. Some Part B items are quick recall checks on a K3 or K4 objective. Use them to learn the facts, and use the scenario items (and Part A) to practise the reasoning the real K3/K4 questions need." });

  B.push({ q: { n: 7, tag: DER, meta: "LO: AS-2.2.1 (K2) | Syllabus §2.2", correct: ["b"],
    stem: "Which statement about the purpose of security testing is correct?",
    opts: [
      "Security testing, if performed thoroughly, guarantees the organization will be safe from attack",
      "Security testing can help identify risks and evaluate the effectiveness of existing security defenses, and is supplemented by audits and reviews",
      "Security testing replaces the need for security audits",
      "Security testing is only needed when an organization handles credit card data",
    ],
    why: "**(b)**. Syllabus §2.2: **security testing cannot guarantee a system or organization will be safe from attack. However, security testing can help identify risks and evaluate the effectiveness of existing security defenses. There are other activities to supplement security testing, such as audits and reviews of security practices.**" } });

  B.push({ q: { n: 8, tag: DER, meta: "LO: AS-2.2.1 (K2) | Syllabus §2.2", correct: ["d"],
    stem: "A sales director asks how security testing benefits the relationship with clients. Which answer reflects the syllabus?",
    opts: [
      "It allows the organization to publish its vulnerability list for transparency",
      "It removes the need to encrypt client data",
      "It guarantees clients will never suffer a breach",
      "It can be an assurance to clients and customers that the organization takes adequate steps to protect sensitive information",
    ],
    why: "**(d)** is the syllabus wording — the **higher levels of confidence and trust** named in the LO. (a) contradicts the confidentiality of security results (Chapter 7). (c) is never claimed." } });

  B.push({ q: { n: 9, tag: DER, meta: "LO: AS-2.3.1 (K2) | Syllabus §2.3", correct: ["a"],
    stem: "What ultimately drives the extent of security testing in an organization?",
    opts: [
      "Business or organizational risks that are security-based",
      "The number of security testers available",
      "The number of open source security tools available",
      "The length of the release cycle",
    ],
    why: "**(a)**. Syllabus §2.3: **the extent of security testing is ultimately driven by business or organizational risks that are security-based. When security risks are numerous in an organization, more extensive security testing is needed.** (b) and (d) are realities that affect success, not what drives extent." } });

  B.push({ q: { n: 10, tag: DER, meta: "LO: AS-2.3.1 (K2) | Syllabus §2.3", correct: ["c"],
    stem: "A project manager proposes to “add security at the end” by running a penetration test before go-live and patching whatever it finds. Which syllabus statement best explains why this is weak?",
    opts: [
      "Penetration tests are illegal without a court order",
      "Security testing is always outsourced, so the project cannot schedule it",
      "Security can’t be effectively patched into code or tested into code; it must be built in using secure coding and design techniques",
      "Penetration testing does not find vulnerabilities in web applications",
    ],
    why: "**(c)**. Syllabus §2.3: **information security is a lifecycle activity … Security can’t be effectively patched into code or tested into code. Only when security is built into software using secure coding and design techniques can software be secure.**" } });

  B.push({ q: { n: 11, tag: DER, meta: "LO: AS-2.3.1 (K2) | Syllabus §2.3", correct: ["b"],
    stem: "Which list contains only factors the syllabus says greatly impact the success of a security testing team?",
    opts: [
      "Office location, programming language, team size",
      "Limited time, resources and scope; risk levels; security testing skill sets; lifecycle approaches",
      "Tool vendor, licence type, test management tool",
      "Number of stakeholders, number of releases, number of defects",
    ],
    why: "**(b)** — verbatim from §2.3: **the realities of limited time, resources and scope, along with risk levels, security testing skill sets and lifecycle approaches greatly impact the success of a security testing team**." } });

  B.push({ q: { n: 12, tag: DER, meta: "LO: AS-2.4.1 (K2) | Syllabus §2.4.1", correct: ["a"],
    stem: "Why must security testing goals and objectives align with the organization’s security policy?",
    opts: [
      "Otherwise either unauthorized security tests will be performed, or security tests may not achieve the desired purposes",
      "Because the security policy defines which tools may be purchased",
      "Because the security testing policy must be approved before the security policy",
      "Otherwise the test manager cannot estimate effort",
    ],
    why: "**(a)** — verbatim from §2.4.1. (c) inverts the order: **the security testing policy can be written once the organization’s security policy has been approved by senior management**." } });

  B.push({ q: { n: 13, tag: DER, meta: "LO: AS-2.4.1 (K2) | Syllabus §2.4.1", correct: ["d"],
    stem: "When can the security testing policy be written?",
    opts: [
      "Before the security policy, so that the security policy can reference it",
      "At any time, since the two documents are independent",
      "After the first penetration test has been performed",
      "Once the organization’s security policy has been approved by senior management",
    ],
    why: "**(d)** — syllabus §2.4.1." } });

  B.push({ q: { n: 14, tag: DER, meta: "LO: AS-2.4.2 (K3) | Syllabus §2.4.2", correct: ["c"],
    scenario: "A retailer is building a mobile app that stores loyalty-card numbers on the device and calls a cloud API to redeem points. Security features specified: login with PIN, session timeout after 5 minutes, and encrypted local storage.",
    stem: "Which set of security test objectives best follows the syllabus’s guidance on identifying objectives?",
    opts: [
      "Verify that the app loads within 2 seconds; verify that the loyalty balance is correct",
      "Verify that the PIN login works; verify that points can be redeemed",
      "Verify that the PIN rule is enforced and sessions time out after 5 minutes; verify that locally stored card numbers are encrypted at the correct strength; verify that API inputs are validated against known injection vulnerabilities; verify protection of data in transit for the mobile-to-cloud call",
      "Verify that all OWASP tests are executed against every screen",
    ],
    why: "**(c)** has **one or more objectives for each security feature** (PIN, timeout, encrypted storage), plus objectives from **technology attributes** (mobile, cloud — data in transit) and **known vulnerabilities** (injection). (a) and (b) are functional/performance objectives. (d) is not tied to features, technology or specific vulnerabilities, and risks an unbounded scope." } });

  B.push({ q: { n: 15, tag: DER, meta: "LO: AS-2.4.2 (K3) | Syllabus §2.4.2", correct: ["b"],
    stem: "According to the syllabus, how many security test objectives should exist for each security feature of a system?",
    opts: [
      "Exactly one",
      "One or more",
      "At least three, one per CIA property",
      "None — objectives are defined per risk, not per feature",
    ],
    why: "**(b)**. §2.4.2: **there should be one or more security test objectives for each security feature of the system or application.**" } });

  B.push({ q: { n: 16, tag: DER, meta: "LO: AS-2.4.3 (K2) | Syllabus §2.4.3", correct: ["a"],
    stem: "Which of the following is part of the NISTIR 7298 definition of information assurance quoted in the syllabus?",
    opts: [
      "Ensuring availability, integrity, authentication, confidentiality and non-repudiation, including restoration through protection, detection and reaction capabilities",
      "Determining that security features are implemented as designed and adequate for a proposed application environment",
      "Testing the system’s vulnerability to threats by attempting to compromise its security policy",
      "A manual examination that identifies weaknesses in security processes and infrastructure",
    ],
    why: "**(a)** is IA. (b) is the **security testing** definition [MDA1]. (c) is the §2.1 description of what security testing does. (d) is the definition of a **security audit** (Chapter 1)." } });

  B.push({ q: { n: 17, tag: DER, meta: "LO: AS-2.5.1 (K3) | Syllabus §2.5", correct: ["d"],
    scenario: "Two systems are being tested by the same team: (1) an internal cafeteria menu site and (2) a hospital system storing patient diagnoses and prescriptions. The team has a fixed budget.",
    stem: "How should the coverage of security test objectives be set?",
    opts: [
      "Equal coverage for both, to be fair to both product owners",
      "More coverage for the menu site, because it is Internet-facing",
      "Coverage determined by the number of screens in each system",
      "More coverage for the hospital system, because the greater the need for integrity of sensitive assets, the greater the need for coverage — while keeping scope within the resources available",
    ],
    why: "**(d)**. §2.5: **the greater the need for integrity of sensitive digital and physical assets, the greater the need is for coverage of the security test objectives**; objectives **relate directly to specific assets, protective measures, risks and vulnerabilities**; and **too large a scope depletes resources**." } });

  B.push({ q: { n: 18, tag: DER, meta: "LO: AS-2.5.1 (K3) | Syllabus §2.5", correct: ["a"],
    stem: "A security test plan restricts objectives to the login page of a payments platform “to finish on time”. What is the syllabus’s concern?",
    opts: [
      "If the scope is too small, the confidence that security is adequate will not be achieved",
      "If the scope is too small, resources will be depleted",
      "A small scope always produces more false positives",
      "Login pages are out of scope for security testing",
    ],
    why: "**(a)**. §2.5: **if the scope is too small, the confidence that security is adequate will not be achieved. If the scope is too large, resources may be depleted before the test can be finished.** (b) swaps the two consequences." } });

  B.push({ q: { n: 19, tag: DER, meta: "LO: AS-2.6.1 (K4) | Syllabus §2.6.1", correct: ["c"],
    scenario: "A bank must security-test a 30-year-old COBOL mainframe batch system that exchanges files with partners on tape and over SFTP. The test team is skilled in web application scanning tools but has no mainframe experience. There is no separate mainframe test environment, and nightly production batch windows cannot be disturbed.",
    stem: "Which approach is most likely to succeed?",
    opts: [
      "Run the team’s web vulnerability scanner against the mainframe’s production IP address during the batch window",
      "Skip security testing, because mainframes have no vulnerabilities",
      "Tailor an approach to the mainframe environment: involve people with mainframe skills, focus on data protection at rest and in transit (including whether partner files and tapes are encrypted), review access rights and code where possible, and plan around the environment constraint rather than testing in production",
      "Reuse last year’s web-application test approach unchanged to save time",
    ],
    why: "**(c)** respects the syllabus factors: **technical environment** (different environments **require different approaches**; mainframes differ from web), **skills in the team**, **constraints such as lack of access to environments**, and the **data protection** point — **sensitive data should be stored encrypted in all technologies**, with the **Cattles Group lost-tapes** example. (a) ignores constraints and environment; (b) is false; (d) ignores the technical environment." } });

  B.push({ q: { n: 20, tag: DER, meta: "LO: AS-2.6.1 (K4) | Syllabus §2.6.1", correct: ["b"],
    stem: "Which statement about vulnerabilities across technologies is consistent with the syllabus?",
    opts: [
      "Buffer overflows only occur in mainframe systems",
      "Buffer overflows can occur in client-server, web and mobile applications, with differences based on memory management, but the result is the same: unpredictable behavior that may let an attacker perform disallowed tasks",
      "Encryption algorithms for web and mainframe environments must always be different",
      "Data in transit only needs protection in mainframe environments",
    ],
    why: "**(b)** — §2.6.1. On encryption, the syllabus says the **algorithms may be the same (or similar)**; the difference is that **web and mobile must protect data in transit over the Internet**." } });

  B.push({ q: { n: 21, tag: DER, meta: "LO: AS-2.6.2 (K4) | Syllabus §2.6.2", correct: ["a"],
    scenario: "A security test approach for a new portal used a commercial scanner configured by a contractor. The scanner’s report was clean, but within a month an attacker exploited a business-logic flaw in the checkout. Post-incident review finds: the contractor was never given the architecture documents and assumed a single-tier design; nobody on the internal team could interpret the scanner configuration; the security testing policy required manual testing of business logic but the approach did not include it.",
    stem: "Which causes of failure are most clearly evidenced?",
    opts: [
      "Lack of technical information about the system (wrong assumptions), lack of skills in security testing, and lack of alignment between the approach and the security testing policy",
      "Lack of executive leadership and lack of funding",
      "Lack of effective tools only — the scanner was inadequate",
      "No failure occurred, because one vulnerability does not mean the approach failed",
    ],
    why: "**(a)** maps each observation to a syllabus cause: no architecture documents → **lack of technical information about the system (causing wrong assumptions)**; nobody could interpret the configuration → **lack of skills**; policy required logic testing but approach omitted it → **lack of alignment with the security testing policy and strategy**. (d) misapplies “degrees of failure”: here the approach demonstrably missed what policy required, and assets were compromised." } });

  B.push({ q: { n: 22, tag: DER, meta: "LO: AS-2.6.2 (K4) | Syllabus §2.6.2", correct: ["c"],
    stem: "What technique does the syllabus recommend to identify why a security testing approach may have failed?",
    opts: [
      "A new penetration test",
      "A customer survey",
      "Root cause analysis",
      "A static code review",
    ],
    why: "**(c)**. §2.6.2: **root cause analysis can help identify why a security testing approach may have failed.**" } });

  B.push({ q: { n: 23, tag: DER, meta: "LO: AS-2.6.3 (K3) | Syllabus §2.6.3", correct: ["d"],
    stem: "A security test program for a health insurer is shown to demonstrate that patient records are protected and that reasonable steps have been taken to safeguard them. Which stakeholder group is this benefit most directly aimed at?",
    opts: [
      "Executive management",
      "Business customers",
      "Regulatory officers",
      "Privacy officers",
    ],
    why: "**(d)**. §2.6.3: **privacy officers may see the benefit that private data is kept secure and due diligence has been shown in the protection of digital assets**." } });

  B.push({ q: { n: 24, tag: DER, meta: "LO: AS-2.6.3 (K3) | Syllabus §2.6.3", correct: ["b"],
    stem: "Which pairing of stakeholder and benefit is correct according to the syllabus?",
    opts: [
      "Executive management — protection from fraud",
      "Compliance officers — assurance that the organization is compliant in terms of legal obligations",
      "Business customers — due diligence",
      "Regulatory officers — business protection",
    ],
    why: "**(b)**. The correct pairings: executive management → **business protection**; senior management → **due diligence**; business customers → **protection from fraud**; compliance officers → **compliant with legal obligations** (internal policies); regulatory officers → **regulations being followed** (external laws); privacy officers → **private data secure**." } });

  B.push({ q: { n: 25, tag: DER, meta: "LO: AS-2.7.1 (K4) | Syllabus §2.7", correct: ["a"],
    scenario: "KPIs for the last four releases: coverage of security requirements by tests 96–98%; coverage of security policies by tests 95%; coverage of identified security risks by tests 52–58%. Vulnerabilities found: pre-release 40, 38, 41, 39; post-release (production) 9, 11, 12, 14 — all post-release vulnerabilities were in areas rated high-risk in the risk assessment but without linked tests.",
    stem: "Which conclusion best follows from the KPIs?",
    opts: [
      "Risk-based test coverage needs improvement — high-risk areas lack tests and post-release vulnerabilities are rising there; requirement and policy coverage do not need improvement",
      "Requirement coverage needs improvement because it is below 100%",
      "Everything is fine because pre-release vulnerability counts are stable",
      "Policy coverage is the weakest area and should be the focus",
    ],
    why: "**(a)**. The syllabus measures **coverage of security risks, of policies and practices, and of requirements by tests**, and **effectiveness based on when and where vulnerabilities were identified, pre- and post-release**. Risk coverage is low and post-release escapes cluster in **untested high-risk areas** and are **increasing** — that is the practice to improve. Requirement and policy coverage are high and stable — **elements not needing improvement**, which the LO explicitly asks you to identify." } });

  B.push({ q: { n: 26, tag: DER, meta: "LO: AS-2.7.1 (K4) | Syllabus §2.7", correct: ["c"],
    stem: "From which perspectives must security testing practices be evaluated, according to the syllabus?",
    opts: [
      "Only from a cost perspective",
      "Only from the perspective of the most recent release",
      "Short-term and long-term; process and organization; people, tools, systems and techniques",
      "Developer productivity and defect density",
    ],
    why: "**(c)** — §2.7 lists exactly these three evaluation perspectives." } });

  B.push({ h2: "Most Important Questions From This Chapter" });
  B.push({ lead: "Ranking rationale: three K3 questions are guaranteed (AS-2.4.2, 2.5.1, 2.6.3 — 6 points); one K4 (3 points) comes from 2.6.1/2.6.2/2.7.1; two K2 (2 points) from 2.2.1/2.3.1/2.4.1/2.4.3." });
  B.push({ table: { head: ["Rank", "Topic / question focus", "LO", "Why it matters"], widths: [0.9, 6.2, 1.9, 5.0], rows: [
    ["1", "Policy first; failure causes — Q5, Q21, Q22", "AS-2.6.2", "**3 points** if drawn; also explains Q9’s logic across the paper."],
    ["2", "Stakeholder benefits — Q6, Q23, Q24", "AS-2.6.3", "**Guaranteed 2 points.** Six rows to learn."],
    ["3", "Scope vs integrity — Q4, Q17, Q18", "AS-2.5.1", "**Guaranteed 2 points.** Too small / too large."],
    ["4", "Identifying objectives — Q3, Q14, Q15", "AS-2.4.2", "**Guaranteed 2 points.** Security vs functional filter."],
    ["5", "KPIs and approaches — Q19, Q20, Q25, Q26", "AS-2.6.1 / 2.7.1", "Other candidates for the 3-point K4."],
    ["6", "Purpose, context, alignment, IA — Q1, Q2, Q7–Q13, Q16", "AS-2.2.1 / 2.3.1 / 2.4.1 / 2.4.3", "Two K2 points; due diligence and IA ⊃ testing are the reliable ones."],
  ] } });

  return B;
};
