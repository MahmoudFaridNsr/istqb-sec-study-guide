// CT-SEC Chapter 9 — Section 4 (questions)
const OFF = (n, pts) => `OFFICIAL · Sample Exam #${n} (${pts})`;
const DER = "Derived from syllabus";

module.exports = function () {
  const B = [];
  B.push({ pagebreak: true });
  B.push({ h1: "Section 4 — Demo Questions with Answers" });
  B.push({ lead: "Questions 1–2 are the **official ISTQB CTAL-SEC Sample Exam questions for Chapter 9** — #44 and #45 — with official answers and rationale. LO tags are inferred and match the Exam Structure Table. Questions 3–14 are derived strictly from the syllabus. Correct options are marked ✔." });

  B.push({ h2: "Part A — The 2 official Chapter 9 questions" });

  B.push({ q: { n: 1, tag: OFF(44, "1 pt"), meta: "LO: AS-9.1.1 (K2) | Syllabus §9.1.1", correct: ["b"],
    stem: "Which of the following is a benefit of conforming to security testing standards?",
    opts: [
      "They are consistent and easy to follow as they are separate and independent from project goals and objectives",
      "They are the building blocks for future security testing, eliminating the need to start from scratch",
      "They outline an effective offense to meet threats before they enter the system",
      "They allow for latitude in security practices since threats are always changing dynamically",
    ],
    why: "**(b)** — official answer. (a) **security standards may be mentioned in the project goals and objectives**. (c) **they are defensive in nature**. (d) **they define certain standards that help define practices – the standards should be responsive to changes in the threats**. Syllabus: **they define a framework for security testing eliminating the need to start from a blank page**." } });

  B.push({ q: { n: 2, tag: OFF(45, "1 pt"), meta: "LO: AS-9.1.2 (K2) | Syllabus §9.1.2", correct: ["b"],
    stem: "What are advantages to imposing security standards in contracts?",
    opts: [
      "They provide each party a legal exit when an unforeseen security issue adversely affects the product",
      "They provide a starting place for both parties to begin their negotiations",
      "They are a convenient way to make public the agreement between parties",
      "They can change as standards change, even when the contract is finalized",
    ],
    why: "**(b)** — official rationale: **by defining the security standards, each party can then determine what is required and further specify those requirements.** (a) **it’s too late then!** (c) **the security agreements are likely to be kept private**. (d) **contracts don’t usually change in this way**." } });

  B.push({ h2: "Part B — 12 additional syllabus-derived questions" });

  B.push({ q: { n: 3, tag: DER, meta: "LO: AS-9.1.1 (K2) | Syllabus §9.1.1", correct: ["c"],
    stem: "How can following recognized security testing standards help an organization after a breach?",
    opts: [
      "It transfers liability to the standards body",
      "It guarantees no vulnerabilities existed",
      "It can demonstrate due diligence in security testing",
      "It removes the need for incident response",
    ],
    why: "**(c)** — benefit 4 in §9.1.1; compare Chapter 2’s due-diligence argument." } });
  B.push({ q: { n: 4, tag: DER, meta: "LO: AS-9.1.1 (K2) | Syllabus §9.1", correct: ["a"],
    stem: "What is a consensus-based standard?",
    opts: [
      "The considered opinion of a knowledgeable body of experts, made available for voluntary use in contractual agreements between suppliers and customers",
      "A vendor’s internal coding rules",
      "A law passed by a national government",
      "Any document with the word “standard” in its title",
    ],
    why: "**(a)** — §9.1. Lesser so-called standards from informal or self-identified groups **may be vendor-specific**." } });
  B.push({ q: { n: 5, tag: DER, meta: "LO: AS-9.1.1 (K2) | Syllabus §9.1.1", correct: ["d"],
    stem: "Which statement about tailoring security testing standards is correct?",
    opts: [
      "Standards must always be applied in full",
      "Tailoring invalidates any claim of due diligence",
      "Only regulators may tailor standards",
      "Standards can be tailored to meet the needs of the project or organization",
    ],
    why: "**(d)** — benefit 3; §9.1.3 also says **many standards may be tailored**. In regulated or contract-claimed situations, deviations must be **justified, documented and agreed**." } });
  B.push({ q: { n: 6, tag: DER, meta: "LO: AS-9.1.2 (K2) | Syllabus §9.1.2", correct: ["b"],
    stem: "In a regulated activity, what may happen if imposed standards are not complied with?",
    opts: [
      "Nothing — standards are always voluntary",
      "Approval of the product may be delayed or prevented and, in extreme cases, financial or criminal sanctions may result",
      "The contract automatically renegotiates",
      "The standard is updated to match the product",
    ],
    why: "**(b)** — §9.1.2." } });
  B.push({ q: { n: 7, tag: DER, meta: "LO: AS-9.1.2 (K2) | Syllabus §9.1.2", correct: ["c"],
    stem: "A supplier won a contract by stating it would comply with a specific security testing standard. What is its obligation?",
    opts: [
      "To follow the standard where convenient",
      "To renegotiate the standard after award",
      "To follow the standard strictly and document any deviations",
      "To follow only the informative clauses",
    ],
    why: "**(c)** — §9.1.2." } });
  B.push({ q: { n: 8, tag: DER, meta: "LO: AS-9.1.2 (K2) | Syllabus §9.1", correct: ["a"],
    stem: "In which industries does the syllabus say government agencies may require compliance with their regulations or interpretations of voluntary standards?",
    opts: ["Medical, financial, transportation and energy", "Retail and entertainment", "Education and tourism", "Agriculture and media"],
    why: "**(a)** — §9.1." } });
  B.push({ q: { n: 9, tag: DER, meta: "LO: AS-9.2.1 (K2) | Syllabus §9.2", correct: ["d"],
    stem: "A clause reads: “The tester should record the tool version.” What does this mean for conformance?",
    opts: [
      "It is mandatory; omitting it breaks conformance",
      "It is forbidden",
      "It applies only to regulated industries",
      "It is optional; it is not required to claim conformance",
    ],
    why: "**(d)** — §9.2: **shall** identifies mandatory requirements; **should** and **may** indicate optional tasks **not required to claim conformance**." } });
  B.push({ q: { n: 10, tag: DER, meta: "LO: AS-9.2.1 (K2) | Syllabus §9.2", correct: ["b"],
    stem: "What is the typical misuse of a standard described by the syllabus?",
    opts: [
      "Applying it to too many projects",
      "Confusing mandatory and optional clauses — requiring an optional item, or treating an obligatory item as optional",
      "Reading it too carefully",
      "Using more than one standard",
    ],
    why: "**(b)** — §9.2." } });
  B.push({ q: { n: 11, tag: DER, meta: "LO: AS-9.2.1 (K2) | Syllabus §9.2", correct: ["c"],
    stem: "A project must omit a mandatory clause of an adopted standard because of a technical constraint. What does the syllabus require?",
    opts: [
      "Silently omit it",
      "Abandon the standard",
      "Document the justification for the omission and have it agreed upon by all parties",
      "Reclassify the clause as informative",
    ],
    why: "**(c)** — §9.2: **justification for omissions, modifications, or additions … need to be documented and agreed upon by all parties**. (d) is the misuse the syllabus warns about." } });
  B.push({ q: { n: 12, tag: DER, meta: "LO: AS-9.3.1 (K2) | Syllabus §9.3.1", correct: ["a"],
    stem: "Which source offers the most immediate actionable responses to new exploits?",
    opts: ["Electronic alerts", "Annual trade shows", "Textbooks", "Periodic publicity of the most damaging exploits"],
    why: "**(a)** — §9.3.1: **with the speed at which new exploits develop, electronic alerts can offer the most immediate actionable responses**." } });
  B.push({ q: { n: 13, tag: DER, meta: "LO: AS-9.3.1 (K2) | Syllabus §9.3.1", correct: ["d"],
    stem: "Where are issues specific to your industry, application area or products most likely to be communicated?",
    opts: [
      "General newspapers",
      "Social media trends",
      "Vendor marketing",
      "Specialized publications and news services, technical conferences and professional events",
    ],
    why: "**(d)** — §9.3.1. **Periodic publicity** shows **widespread** trends; **focused professional societies** give **timely and targeted** updates." } });
  B.push({ q: { n: 14, tag: DER, meta: "LO: AS-9.3.1 (K2) | Syllabus §9.3.2", correct: ["b"],
    stem: "According to §9.3.2, what provides the best defense given constantly changing threats?",
    opts: [
      "A single comprehensive standard applied once",
      "Awareness of the industry, close tracking of security trends and the acquisition of the most appropriate tools",
      "Outsourcing all security testing",
      "Avoiding new technologies",
    ],
    why: "**(b)** — §9.3.2." } });

  B.push({ h2: "Most Important Questions From This Chapter" });
  B.push({ lead: "Ranking rationale: two K2 questions drawn from four objectives; the Sample Exam used 9.1.1 and 9.1.2." });
  B.push({ table: { head: ["Rank", "Topic / question focus", "LO", "Why it matters"], widths: [0.9, 6.2, 1.9, 5.0], rows: [
    ["1", "Benefits — Q1, Q3–Q5", "9.1.1", "Blank page; tailorable; due diligence."],
    ["2", "Regulatory vs contractual — Q2, Q6–Q8", "9.1.2", "Starting point for negotiation."],
    ["3", "Shall vs should/may — Q9–Q11", "9.2.1", "One-line rule."],
    ["4", "Trend sources — Q12–Q14", "9.3.1", "Electronic alerts are fastest."],
  ] } });

  return B;
};
