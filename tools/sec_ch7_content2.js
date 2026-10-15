// CT-SEC Chapter 7 — Section 4 (questions)
const OFF = (n, pts) => `OFFICIAL · Sample Exam #${n} (${pts})`;
const DER = "Derived from syllabus";

module.exports = function () {
  const B = [];
  B.push({ pagebreak: true });
  B.push({ h1: "Section 4 — Demo Questions with Answers" });
  B.push({ lead: "Questions 1–3 are the **official ISTQB CTAL-SEC Sample Exam questions for Chapter 7** — #38 to #40 — with official answers and rationale. LO tags are inferred and match the Exam Structure Table. Questions 4–16 are derived strictly from the syllabus. Correct options are marked ✔." });

  B.push({ h2: "Part A — The 3 official Chapter 7 questions" });

  B.push({ q: { n: 1, tag: OFF(38, "1 pt"), meta: "LO: AS-7.1.1 (K2) | Syllabus §7.1", correct: ["b"],
    stem: "Why is it important to reassess security risk expectations on a frequent basis?",
    opts: [
      "Stakeholders have to be educated on all security risks at all times",
      "Stakeholders will make business decisions based on associated security risk levels",
      "Users must develop a manual-based risk mitigation plan",
      "Both user and stakeholder expectations regarding security should be kept from changing",
    ],
    why: "**(b)** — official rationale: **stakeholders often have to make business decisions regarding the security risk level that is acceptable and any necessary mitigation plans.** (a) **everyone doesn’t need to know everything**. (c) **a manual-based risk mitigation plan is not feasible and the users probably wouldn’t be implementing this anyway**. (d) **expectations should change**." } });

  B.push({ q: { n: 2, tag: OFF(39, "1 pt"), meta: "LO: AS-7.2.1 (K2) | Syllabus §7.2.1", correct: ["c"],
    stem: "Which of the following is an important aspect of security test results?",
    opts: [
      "They are published for users and stakeholders to access in order to help them better understand risk",
      "They should be shared with developers across the enterprise in order to mitigate risk for future development projects",
      "The fewer people that know the better",
      "Results should always be classified by criticality",
    ],
    why: "**(c)** — official rationale: **the results from security tests should be kept confidential and access to the results should be tightly controlled. This is because the outcome of the tests often identify weaknesses in the current system under test and often the same issues exist with the production system.** (a) **because of the need to tightly control access**. (b) **only limited parts of the report should be made available to the developers to improve their coding. Likewise, limited parts should be made available to infrastructure people.** (d) **is true, but is not the most important aspect**." } });

  B.push({ q: { n: 3, tag: OFF(40, "3 pts"), meta: "LO: AS-7.2.3 (K4) | Syllabus §7.2.3", correct: ["c"],
    stem: "You are finalizing your security test status report for a project that is ready for deployment into production. There is a high degree of risk for this project due to the nature of the system. As a result, you want to place particular emphasis on risk. Based on this, what is the best way to articulate risk on your report?",
    opts: [
      "A descriptive risk assessment included in the summary",
      "Overall risk included in the last section of the report",
      "Risk impact described in the summary and later detailed in terms of specific vulnerabilities",
      "Risk impact is not part of the summary of the report",
    ],
    why: "**(c)** — official rationale: **the risk impact should be described in the summary and detailed later in the report by discussing specific vulnerabilities.** (a) **the details should not be in the summary**. (b) **the information should not be recorded only at the end of the report**. (d) **this is an important part of the report**." } });

  B.push({ h2: "Part B — 13 additional syllabus-derived questions" });
  B.push({ lead: "The K-level in each question’s label is the level of the **learning objective** it practises, not of the question itself. Some Part B items are quick recall checks on a K3 or K4 objective. Use them to learn the facts, and use the scenario items (and Part A) to practise the reasoning the real K3/K4 questions need." });

  B.push({ q: { n: 4, tag: DER, meta: "LO: AS-7.1.1 (K2) | Syllabus §7.1", correct: ["a"],
    stem: "Midway through a project, a widely publicized attack on a competitor makes stakeholders demand stronger authentication. What does the syllabus recommend?",
    opts: [
      "Revisit the security risk assessment and incorporate the results into security test planning and execution, revising expectations and acceptance criteria",
      "Keep the original acceptance criteria to avoid scope creep",
      "Defer any change until the next project",
      "Ask users to write a manual mitigation plan",
    ],
    why: "**(a)** — §7.1: **awareness of a new threat might cause stakeholders to require higher levels of security than initially thought. This is one reason why security risk assessments need to be revisited throughout a project and the results incorporated into security test planning and execution.**" } });
  B.push({ q: { n: 5, tag: DER, meta: "LO: AS-7.1.1 (K2) | Syllabus §7.1", correct: ["d"],
    stem: "Against what are security test results measured to determine test completion?",
    opts: [
      "The number of test cases executed",
      "The number of hours spent",
      "The developers’ estimates",
      "Security expectations, exit criteria and/or acceptance criteria",
    ],
    why: "**(d)** — §7.1." } });
  B.push({ q: { n: 6, tag: DER, meta: "LO: AS-7.2.1 (K2) | Syllabus §7.2.1", correct: ["b"],
    stem: "What makes communicating security test results different from communicating other test results?",
    opts: [
      "Security testers know less about the system than developers",
      "The possible negative impact of communicating vulnerabilities to people other than the direct stakeholders",
      "Security results are always less accurate",
      "Security results do not need to be reported",
    ],
    why: "**(b)** — §7.2.1. Hence information should be available **only to those who need to know**." } });
  B.push({ q: { n: 7, tag: DER, meta: "LO: AS-7.2.1 (K2) | Syllabus §7.2.1", correct: ["c"],
    stem: "A product owner asks for the full penetration test report to be attached to the public release notes “for transparency”. What is the best response?",
    opts: [
      "Agree, since transparency builds trust",
      "Agree, but remove the tester names",
      "Decline: results should be available only to those who need to know; sharing conservatively is good practice, especially while vulnerabilities may be unresolved or also present in production",
      "Publish only the unresolved vulnerabilities",
    ],
    why: "**(c)** — §7.2.1 and the official Q39 rationale. (d) would be the most harmful option." } });
  B.push({ q: { n: 8, tag: DER, meta: "LO: AS-7.2.2 (K2) | Syllabus §7.2.2", correct: ["a"],
    stem: "Why must security defect reporting be especially precise and accurate?",
    opts: [
      "Security vulnerabilities are judged more sensitive, are usually categorized with higher severity than comparable functional defects, and receive higher management focus",
      "Because security defects are always cheaper to fix",
      "Because developers dislike vague reports",
      "Because security defects are rarely fixed",
    ],
    why: "**(a)** — §7.2.2." } });
  B.push({ q: { n: 9, tag: DER, meta: "LO: AS-7.2.2 (K2) | Syllabus §7.2.2", correct: ["d"],
    stem: "Which practice does the syllabus recommend for giving management access to security defect reports?",
    opts: [
      "Email every new defect to all managers immediately",
      "Provide reports only at project end",
      "Let each tester decide individually",
      "Discuss with management how and when they would like access to the security defect reports — e.g. a security test dashboard",
    ],
    why: "**(d)** — §7.2.2 and the LO’s own example of a **dashboard**." } });
  B.push({ q: { n: 10, tag: DER, meta: "LO: AS-7.2.2 (K2) | Syllabus §7.2.2", correct: ["b"],
    stem: "Which three qualities must the source data for security test status reports have, according to the learning objective?",
    opts: ["Cheap, fast, simple", "Timely, accurate and precise", "Public, complete, permanent", "Automated, visual, colourful"],
    why: "**(b)** — AS-7.2.2: **in a timely, accurate, and precise fashion**." } });
  B.push({ q: { n: 11, tag: DER, meta: "LO: AS-7.2.3 (K4) | Syllabus §7.2.3", correct: ["c"],
    stem: "Why does the syllabus encourage early security test reporting?",
    opts: [
      "It reduces the number of reports",
      "It satisfies auditors",
      "It allows more time to remediate security vulnerabilities",
      "It makes final reports unnecessary",
    ],
    why: "**(c)** — §7.2.3." } });
  B.push({ q: { n: 12, tag: DER, meta: "LO: AS-7.2.3 (K4) | Syllabus §7.2.3", correct: ["a"],
    scenario: "Interim report extract — Summary: “Testing is going well.” Results: 42 vulnerabilities found; 30 resolved; 9 unresolved (list attached with exploit steps). Coverage: “Most areas tested.” Distribution: all 120 project members and the client’s procurement team.",
    stem: "Which assessment of accuracy, understandability and stakeholder appropriateness is best?",
    opts: [
      "Inaccurate (30 + 9 ≠ 42; coverage not evaluated against plan criteria; untested items not explained), not understandable (no executive summary of key findings or risk impact), and inappropriate distribution (unresolved vulnerabilities with exploit steps sent far beyond need-to-know)",
      "Acceptable — it reports numbers and coverage",
      "Only the distribution is a problem",
      "Only the summary is a problem",
    ],
    why: "**(a)** checks all three dimensions: **accuracy** (counts don’t reconcile; section 4 requires **coverage against the plan’s criteria** and **explanation of untested items**), **understandability** (section 2 needs an **executive summary and key findings**; risk and impact of unresolved vulnerabilities belong in 6b), **appropriateness** (**need to know**; recipients and **tuning** determine effectiveness)." } });
  B.push({ q: { n: 13, tag: DER, meta: "LO: AS-7.2.3 (K4) | Syllabus §7.2.3", correct: ["d"],
    stem: "In which report section should the explanation for items or features that were not tested appear?",
    opts: ["Summary of activities", "Variances", "Approvals", "Comprehensive assessment"],
    why: "**(d)** — section 4: **(a) evaluation of test coverage based on the criteria in the test plan; (b) explanation for any items or features that were not tested**." } });
  B.push({ q: { n: 14, tag: DER, meta: "LO: AS-7.2.3 (K4) | Syllabus §7.2.3", correct: ["b"],
    stem: "A test team used a different vulnerability scanner than planned and changed its configuration. Where should this be reported?",
    opts: ["Summary of results", "Variances — test process followed, variances from the planned process, and methods and tools used", "Evaluation", "Report identifier"],
    why: "**(b)** — section 3." } });
  B.push({ q: { n: 15, tag: DER, meta: "LO: AS-7.2.3 (K4) | Syllabus §7.2.3", correct: ["c"],
    stem: "On what four things does the effectiveness of security test reporting depend?",
    opts: [
      "Length, layout, language, logo",
      "Number of defects, number of testers, budget, schedule",
      "Timing of the report, content, recipients, and tuning of the content to match the recipients’ need",
      "Tool used, format, frequency, approver",
    ],
    why: "**(c)** — §7.2.3; **multiple reports** may be needed — **an executive report differs from one for a system architect**." } });
  B.push({ q: { n: 16, tag: DER, meta: "LO: AS-7.2.3 (K4) | Syllabus §7.2.3", correct: ["a"],
    stem: "In which section is the impact of unresolved security vulnerabilities evaluated?",
    opts: ["Evaluation (risks identified and impact of unresolved vulnerabilities)", "Variances", "Approvals", "Report identifier"],
    why: "**(a)** — section 6b. The headline risk impact also appears in the **summary** (Q3)." } });

  B.push({ h2: "Most Important Questions From This Chapter" });
  B.push({ lead: "Ranking rationale: guaranteed **AS-7.1.1 (K2)** and **AS-7.2.3 (K4)**; one K2 from 7.2.1 / 7.2.2." });
  B.push({ table: { head: ["Rank", "Topic / question focus", "LO", "Why it matters"], widths: [0.9, 6.2, 1.9, 5.0], rows: [
    ["1", "Report structure and analysis — Q3, Q11–Q16", "AS-7.2.3", "**Guaranteed 3 points.**"],
    ["2", "Revisiting expectations — Q1, Q4, Q5", "AS-7.1.1", "**Guaranteed 1 point.**"],
    ["3", "Confidentiality — Q2, Q6, Q7", "AS-7.2.1", "Pooled 1 point; “fewer the better”."],
    ["4", "Precision, severity, dashboard — Q8–Q10", "AS-7.2.2", "Pooled 1 point."],
  ] } });

  return B;
};
