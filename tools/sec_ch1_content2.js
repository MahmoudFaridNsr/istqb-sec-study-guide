// CT-SEC Chapter 1 — Section 4 (questions)
const OFF = (n, pts) => `OFFICIAL · Sample Exam #${n} (${pts})`;
const DER = "Derived from syllabus";

module.exports = function () {
  const B = [];
  B.push({ pagebreak: true });
  B.push({ h1: "Section 4 — Demo Questions with Answers" });
  B.push({ lead: "Questions 1–4 are the **official ISTQB CTAL-SEC Sample Exam questions for Chapter 1** — #1 to #4 — with their official correct answers and rationale. The GA sample exam removed the learning-objective tags; the LO shown is inferred from question order and point value, and matches the Exam Structure Table. Questions 5–22 are derived strictly from the syllabus text in the same style. Correct options are marked ✔ — cover the green box and self-test first." });

  B.push({ h2: "Part A — The 4 official Chapter 1 questions" });

  B.push({ q: { n: 1, tag: OFF(1, "1 pt"), meta: "LO: AS-1.3.1 (K2) | Syllabus §1.3.1", correct: ["b"],
    stem: "Which of the following is a purpose of a security audit?",
    opts: [
      "To prevent users from using simple passwords",
      "To reveal insufficient patch updates provided by the vendor",
      "To halt unauthorized intruders from accessing the system",
      "To require users to change their password after a predetermined set of days",
    ],
    why: "**(b)** — official rationale: **keeping the patch updates current on the system is one of the purposes of a security audit.** The others **are good practices, but not the purpose of the security audit**. Syllabus §1.3.1 lists **inadequate application of vendor security updates** among the items an audit might detect. Notice the verbs: an audit **reveals**; (a) prevents, (c) halts and (d) requires — those are controls, not audits." } });

  B.push({ q: { n: 2, tag: OFF(2, "3 pts"), meta: "LO: AS-1.1.3 (K4) | Syllabus §1.1.3", correct: ["c"],
    stem: "You are responsible for ensuring that new vendors brought on externally for the project are fully compliant with government mandated guidelines as part of your risk assessment. On which stakeholders should you primarily focus to ensure these outside vendors continue to comply?",
    opts: [
      "Customers, users, and vendors to ensure there is good communication between them",
      "Public users and vendors who will follow the law as it applies to the source of information",
      "Federal and local agencies that communicate guidelines to follow",
      "Both internal and external sources that will use the information for further analyzing the risk",
    ],
    why: "**(c)** — official rationale: **this is the source of the guidelines. The guidelines may change so it’s important to keep the communications channels open with these folks.** (a), (b) and (d) all need to be informed, **but the information needs to come from the federal and local agencies**. Syllabus §1.1.3: **regulatory agencies** are included in the risk assessment because they are **necessary for ensuring compliance with applicable laws**. (a) is the customers-and-users row (good communication), (b) is the public-and-society row." } });

  B.push({ q: { n: 3, tag: OFF(3, "1 pt"), meta: "LO: AS-1.2.1 (K2) | Syllabus §1.2.1", correct: ["c"],
    stem: "Which of the following is a consequence of a policy that minimizes access to a system or device to acceptable levels?",
    opts: [
      "More devices are added to mitigate the impact",
      "Proper controls of self-provisioning devices such as routers are prohibited",
      "Devices that do not conform are removed from the wireless network",
      "Access to the VPN is severely restricted",
    ],
    why: "**(c)** — official rationale: **when this policy is implemented, non-conforming devices will be removed until they conform.** (a) is **not an expected result**. (b) is wrong because **these controls will be encouraged**. (d) is wrong because **access will be controlled, not severely limited**. Syllabus §1.2.1: the network access policy **often prohibits users from adding unauthorized devices such as routers and hot spots**; minimum access prevents rights **in excess of what is needed** — a control, not a severe restriction." } });

  B.push({ q: { n: 4, tag: OFF(4, "3 pts"), meta: "LO: AS-1.2.2 (K4) | Syllabus §1.2.2", correct: ["b"],
    stem: "Your role as the Security Administrator is to help your organization understand the effectiveness of security policies and procedures across the enterprise. You will report your effectiveness findings to Senior Management after your analysis has been completed. Which of the following is the optimum strategy to accomplish this?",
    opts: [
      "Implement a static analysis evaluation independently for both policies and procedures",
      "Analyze the results from a security test to validate effectiveness",
      "Evaluate security test results that focus on current threats and attacks",
      "Evaluate the static test results for new and emerging software threats",
    ],
    why: "**(b)** — official rationale: **you should analyze the results of a security test to see if the policies and procedures have been followed and are effective.** (a) is wrong because **the static analysis should be over the code, if anything**. (c) is wrong because **the focus shouldn’t just be on current threats and attacks, but also on configurations, etc.** (d) is wrong because **the focus is not just on the emerging threats**. Syllabus §1.2.2: tests **focus on the risk that a security policy may be in place, may be followed, but is not effective**." } });

  B.push({ h2: "Part B — 18 additional syllabus-derived questions" });

  B.push({ q: { n: 5, tag: DER, meta: "LO: AS-1.1.1 (K2) | Syllabus §1.1.1", correct: ["a"],
    stem: "Why should security tests be prioritized using the results of a security risk assessment?",
    opts: [
      "So that the highest test rigor and coverage are focused on the areas with the greatest risk exposure, aligning testing with business security objectives",
      "So that every asset receives the same depth of testing regardless of its value",
      "Because a risk assessment remains valid for the lifetime of the system and need not be repeated",
      "Because it removes the need to involve stakeholders in defining security test objectives",
    ],
    why: "**(a)** is the syllabus wording: prioritizing by the assessment focuses **the highest level of test rigor and coverage on the areas with the greatest risk exposure**, and **the tests become aligned with business security objectives**. (b) contradicts prioritization. (c) is wrong: an assessment is **only a snapshot** and should be repeated at regular intervals. (d) is wrong: alignment only happens if the assessment reflects **the impacted stakeholders**." } });

  B.push({ q: { n: 6, tag: DER, meta: "LO: AS-1.1.1 (K2) | Syllabus §1.1.1", correct: ["d"],
    stem: "A team fears its security risk assessment has missed important risks because several participants had little security knowledge. Which TWO measures does the syllabus recommend? (Choose the option that names both.)",
    opts: [
      "Increase the number of penetration tests and shorten the release cycle",
      "Replace the assessment with an external audit and accept its findings",
      "Limit participation to security specialists and remove business representatives",
      "Use an established security risk assessment methodology as a checklist, and get input from multiple people",
    ],
    why: "**(d)** — the syllabus: **ways to deal with the possibility of missing or incomplete risk information include using an established security risk assessment methodology as a checklist and getting input from multiple people** (NIST 800-30 is the example methodology). (c) inverts the advice to **solicit input from a variety of people**. (a) and (b) do not address the knowledge gap." } });

  B.push({ q: { n: 7, tag: DER, meta: "LO: AS-1.1.1 (K2) | Syllabus §1.1.1", correct: ["b"],
    stem: "An organization last performed a security risk assessment two years ago, before moving its customer portal to the cloud. Which statement best reflects the syllabus?",
    opts: [
      "The assessment is still valid because risk assessments describe stable organizational properties",
      "The assessment should be repeated: it is only a snapshot, new threats emerge daily, and the interval should reflect the degree of change",
      "The assessment only needs to be repeated if a security breach has occurred",
      "The assessment should be replaced by continuous penetration testing",
    ],
    why: "**(b)**. The syllabus states that **any risk assessment is only a snapshot at a given point in time**, that **security risks change continually … since new threats emerge daily**, and that assessments **should be performed at regular intervals** — typically **three to six months** or **annually**, depending on **the degree of change** the organization experiences. A cloud migration is exactly such a change." } });

  B.push({ q: { n: 8, tag: DER, meta: "LO: AS-1.1.2 (K4) | Syllabus §1.1.2", correct: ["c"],
    scenario: "A design consultancy keeps client drawings on a file server, prints large-format proofs that are left on studio tables, and couriers final designs to clients on encrypted USB drives. Staff also work from home over a VPN. The managing partner asks you which information is needed to assess the level of security required for the client drawings.",
    stem: "Which set of information best supports that assessment?",
    opts: [
      "The number of employees and the brand of the file server",
      "The cost of the encryption software licences and the VPN bandwidth",
      "The drawings’ value (e.g. to a competitor, cost to recreate, fines for loss), where they exist in digital and physical form, how they are accessed (VPN, USB, print) and how each copy is secured",
      "Only the value of the drawings, since value alone determines the level of security needed",
    ],
    why: "**(c)** walks the syllabus’s asset questions: **how valuable** (value to a competitor, time and effort to recreate, fines and penalties), **where located** — including **non-digital copies** such as printed proofs, **how accessed** (VPN, **physical data stores passed person to person**) and **how secured** (encryption — **who has the keys**). (d) stops at value; the syllabus says the asset may exist **both in digital and physical format** and both must be considered. (a) and (b) are not asset-security data." } });

  B.push({ q: { n: 9, tag: DER, meta: "LO: AS-1.1.2 (K4) | Syllabus §1.1.2", correct: ["a"],
    stem: "Which of the following is NOT listed by the syllabus as a method for determining the value of a digital asset?",
    opts: [
      "The number of times the asset has been backed up",
      "The future revenue to be generated by the asset",
      "The time and effort needed to recreate the asset",
      "Fines and penalties for not being able to produce the information when needed, e.g. for an audit",
    ],
    why: "**(a)**. The syllabus lists: **future revenue · value to a competitor · time and effort to recreate · fines and penalties for not producing the information when needed (audit or lawsuit) · fines and penalties for the loss of customer data**. Backup frequency is a protection measure, not a value method." } });

  B.push({ q: { n: 10, tag: DER, meta: "LO: AS-1.1.2 (K4) | Syllabus §1.1.2", correct: ["b"],
    stem: "Which of the following is an example of a physical or intangible asset given by the syllabus?",
    opts: [
      "Tax statements",
      "Company reputation and trust",
      "Financial spreadsheets",
      "Employee records",
    ],
    why: "**(b)**. The syllabus’s physical or intangible examples are **physical prototypes of new devices under development · the ability to deliver services · company reputation and trust**. (a), (c) and (d) are on the list of **high-value sensitive information**." } });

  B.push({ q: { n: 11, tag: DER, meta: "LO: AS-1.1.3 (K4) | Syllabus §1.1.3", correct: ["d"],
    stem: "A risk analyst lists these tasks for conducting a security risk assessment: (1) determine adverse impacts, (2) identify threat sources, (3) identify vulnerabilities and predisposing conditions, (4) determine likelihood, (5) identify threat events. Which order follows NIST 800-30 as presented in the syllabus?",
    opts: [
      "1, 4, 2, 5, 3",
      "3, 2, 5, 1, 4",
      "2, 3, 5, 4, 1",
      "2, 5, 3, 4, 1",
    ],
    why: "**(d)**: **threat sources → threat events produced by those sources → vulnerabilities and predisposing conditions → likelihood (that sources initiate events and that events succeed) → adverse impacts.** The logic is causal: a source produces an event that exploits a vulnerability; only then can likelihood and impact be judged." } });

  B.push({ q: { n: 12, tag: DER, meta: "LO: AS-1.1.3 (K4) | Syllabus §1.1.3", correct: ["a"],
    scenario: "An online pharmacy is preparing a security risk assessment. The project manager proposes to invite only the internal development team and the security officer, so that the assessment stays “manageable”.",
    stem: "What is the most significant weakness of this approach?",
    opts: [
      "It omits external stakeholders — customers and users, the public, and regulatory agencies — whose perspectives the syllabus says a security risk assessment should include",
      "It includes the security officer, who should be independent of risk assessments",
      "It will make the assessment too broad to complete",
      "It fails to involve the vendor of the database, who owns the risk",
    ],
    why: "**(a)**. The syllabus: **a security risk assessment should include the perspectives of external security testing stakeholders** — **customers and users** (perspective, input, communication), **the public and society** (security as a community responsibility), **regulatory agencies** (compliance with law). A pharmacy is a regulated business handling personal data, so missing regulators and customers is the critical gap." } });

  B.push({ q: { n: 13, tag: DER, meta: "LO: AS-1.1.3 (K4) | Syllabus §1.1.3, §1.3.2", correct: ["c"],
    stem: "Which practice best helps a risk assessment identify FUTURE as well as current security threats?",
    opts: [
      "Using only the list of attacks seen in the last twelve months",
      "Basing likelihood exclusively on historical evidence for adversarial threats",
      "Repeating the assessment regularly and maintaining it throughout the lifecycle with continuous monitoring, because emergent vulnerabilities appear as environments and technologies change",
      "Removing predisposing conditions from the risk model to simplify the analysis",
    ],
    why: "**(c)**. The syllabus warns of **emergent vulnerabilities** that arise **as missions, environments and technologies change**, notes that **controls degrade in effectiveness over time**, and stresses **maintaining risk assessments during the entire software lifecycle** and **continuous monitoring**. (b) is wrong: adversarial likelihood is based on **intent, capability and targeting**; historical evidence is for **non-adversarial** events." } });

  B.push({ q: { n: 14, tag: DER, meta: "LO: AS-1.2.1 (K2) | Syllabus §1.2.1", correct: ["b"],
    stem: "A merger and acquisition plan known only to company officers would be classified at which level in the syllabus’s example structure?",
    opts: [
      "Confidential",
      "Private",
      "Public",
      "Secret",
    ],
    why: "**(b) Private**: information **often restricted to officers of the organization** who must be specifically authorized; disclosure could cause **major negative impact such as financial harm**; examples include **R&D information, merger and acquisition plans** and customer card and account data. **Secret** (d) is information **obtained from an external party** that may have **no tangible value for the organization itself**." } });

  B.push({ q: { n: 15, tag: DER, meta: "LO: AS-1.2.1 (K2) | Syllabus §1.2.1", correct: ["a"],
    stem: "Who is typically responsible for classifying data according to a data classification policy?",
    opts: [
      "The business area that creates the data",
      "The IT security administrator",
      "The external auditor",
      "The database administrator",
    ],
    why: "**(a)**. The syllabus: **typically, the business area that creates the data is responsible for its classification based on a standard classification structure**." } });

  B.push({ q: { n: 16, tag: DER, meta: "LO: AS-1.2.1 (K2) | Syllabus §1.2.1", correct: ["c"],
    stem: "Which statement best describes the difference between a security policy and a security procedure?",
    opts: [
      "A policy is mandatory; a procedure is optional guidance",
      "A procedure is approved by senior management; a policy is written by system administrators",
      "Policies, standards and guidelines describe the controls that should be in place; a procedure explains how to implement them step by step",
      "A procedure is only written after a security incident has occurred",
    ],
    why: "**(c)** is the syllabus definition. Procedures specify **the steps to be taken in implementing a specific policy or control, and the steps to be taken in response to a specific security incident** — so (d) is only half the story, and procedures facilitate implementation of policies rather than being optional (a)." } });

  B.push({ q: { n: 17, tag: DER, meta: "LO: AS-1.2.1 (K2) | Syllabus §1.2.1", correct: ["d"],
    stem: "Which policy most directly prohibits downloading and installing unapproved software?",
    opts: [
      "Acceptable Use",
      "Malware Protection",
      "Configuration and Change Management",
      "Software Licensing",
    ],
    why: "**(d)**. The syllabus: under Software Licensing, **downloading and installing unapproved software is a key prohibition often found in this policy**, because violating commercial licences exposes the organization to **fines and legal action**. Malware Protection’s example is **restricting USB drives**." } });

  B.push({ q: { n: 18, tag: DER, meta: "LO: AS-1.2.2 (K4) | Syllabus §1.2.2", correct: ["b"],
    scenario: "A bank’s password policy requires 8 characters with mixed case and a change every 60 days. Interviews show that staff believe the policy is followed, and an audit of the policy document finds it complete. A security tester then runs a password cracking tool against a copy of the credential store and recovers 40% of passwords within an hour, most of them variants of the season and year.",
    stem: "What is the best conclusion about the effectiveness of the password policy and procedure?",
    opts: [
      "The policy is effective, because it is documented and followed",
      "The policy is in place and followed but is not effective in protecting the asset; the test result shows it falls short of its goals",
      "The policy is ineffective only because the interviews were not sufficiently detailed",
      "No conclusion is possible until a second static review is performed",
    ],
    why: "**(b)** is the precise risk the syllabus says security tests target: **a security policy may be in place, may be followed, but is not effective in protecting assets**. The syllabus’s own example: **a password policy may seem reasonable and effective on paper, but when a password cracking tool is used, the procedure may fall short of its goals.** (a) and (d) rely on static evidence only." } });

  B.push({ q: { n: 19, tag: DER, meta: "LO: AS-1.2.2 (K4) | Syllabus §1.2.2", correct: ["a"],
    stem: "Before evaluating a set of security policies and procedures, what should be defined FIRST?",
    opts: [
      "The objective(s) of the evaluation and the criteria by which to judge adequacy",
      "The penetration testing tools to be purchased",
      "The list of employees to be disciplined for non-compliance",
      "The remediation budget for any weaknesses found",
    ],
    why: "**(a)**. The syllabus: **before evaluating a set of security policies and procedures it is important to determine the objective(s) of the evaluation and define a set of criteria by which to judge the adequacy** — criteria may come from **COBIT, ISO 27001 or PCI**. Resources, measures, location and a checklist follow." } });

  B.push({ q: { n: 20, tag: DER, meta: "LO: AS-1.2.2 (K4) | Syllabus §1.2.2", correct: ["c"],
    stem: "An organization has a detailed set of technical security controls (firewalls, IDS, encryption) but no written procedures, no awareness training, and no locks on its server room. Based on the syllabus’s view of controls, what is the main weakness?",
    opts: [
      "There are too many technical controls, which will reduce usability",
      "Detective controls should always be replaced by preventive ones",
      "Controls are provided from only one category; in general controls must be provided from each category (administrative, technical, physical) to protect an asset effectively",
      "Technical controls cannot be tested and therefore cannot be relied upon",
    ],
    why: "**(c)**. The main control types are **administrative, technical and physical**; within each, controls are **preventive, detective, corrective or recovery**. **These control types work together, and in general, controls must be provided from each category to effectively protect an asset.**" } });

  B.push({ q: { n: 21, tag: DER, meta: "LO: AS-1.3.1 (K2) | Syllabus §1.3", correct: ["b"],
    stem: "How does the scope of a security audit compare with that of security testing?",
    opts: [
      "They have the same scope but audits are performed by external parties",
      "Auditing has a much larger scope and covers procedures, policies and controls that are difficult to test directly; testing is more involved with the technologies supporting security",
      "Testing has a larger scope because it includes penetration testing",
      "Audits only examine physical security, while testing covers all logical controls",
    ],
    why: "**(b)** — syllabus §1.3: **the scope of security auditing is much larger than security testing. Security auditing often investigates areas such as procedures, policies and controls that are difficult to test in a direct way. Security testing is more involved with the technologies to support security, such as firewall configuration, correct application of authentication and encryption, and application of user rights.**" } });

  B.push({ q: { n: 22, tag: DER, meta: "LO: AS-1.3.1 (K2) | Syllabus §1.3", correct: ["d"],
    stem: "Which of the five pillars of security auditing is described as including root cause analysis to determine which process, procedure and technology changes reduce the likelihood of the same vulnerability in future?",
    opts: [
      "Assessment",
      "Detection",
      "Reaction",
      "Recovery",
    ],
    why: "**(d) Recovery** — it **starts with determining what occurred** so systems are recovered **without recreating the same vulnerability**, and **does not end with restoring the system**: **root cause analysis** follows. Reaction (c) is about **speed and efficiency of incident response** — the **key indicator** of security effectiveness." } });

  B.push({ h2: "Most Important Questions From This Chapter" });
  B.push({ lead: "Ranking rationale: the Exam Structure Table guarantees one question each on **AS-1.2.1 (K2)** and **AS-1.2.2 (K4)**, plus one K2 from {1.1.1, 1.3.1} and one K4 from {1.1.2, 1.1.3}. The two K4 items are **6 of the chapter’s 8 points**." });
  B.push({ table: { head: ["Rank", "Topic / question focus", "LO", "Why it matters"], widths: [0.9, 6.2, 1.9, 5.0], rows: [
    ["1", "Test results prove policy effectiveness — Q4, Q18, Q19, Q20", "AS-1.2.2", "**Guaranteed 3-point question.** Static review alone is always the distractor."],
    ["2", "External stakeholders and the NIST task sequence — Q2, Q11, Q12, Q13", "AS-1.1.3", "**Half of the floating 3-point K4.** Compliance → regulatory agencies."],
    ["3", "Five asset questions; digital and physical — Q8, Q9, Q10", "AS-1.1.2", "**Other half of the floating K4.** Value alone is never enough."],
    ["4", "Policy recognition and data classification — Q3, Q14, Q15, Q16, Q17", "AS-1.2.1", "**Guaranteed 1-point question.** Table 3.2 decides it."],
    ["5", "Audit purpose, scope and pillars — Q1, Q21, Q22", "AS-1.3.1", "Shares a K2 slot with AS-1.1.1; **audit reveals, controls prevent**."],
    ["6", "Risk assessment as snapshot and prioritizer — Q5, Q6, Q7", "AS-1.1.1", "Shares a K2 slot; also the conceptual base for Chapters 2 and 3."],
  ] } });

  return B;
};
