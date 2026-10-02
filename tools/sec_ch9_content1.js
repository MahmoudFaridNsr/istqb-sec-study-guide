// CT-SEC Chapter 9 — Sections 1 to 3
module.exports = function () {
  const B = [];

  B.push({ h1: "Section 1 — Syllabus Explanation" });
  B.push({ p: "Chapter 9, **Standards and Industry Trends**, carries **4 learning objectives**, all **K2**, across three sub-chapters (9.1 Understanding Standards · 9.2 Applying Standards · 9.3 Industry Trends). The Exam Structure Table allocates **2 questions** and **2 of the 80 points**. Teaching time is **40 minutes** — **3.0 points per teaching hour**." });
  B.push({ p: "It is the **smallest chapter on the paper**. Both questions are one-point recall items drawn from the four objectives; in the official Sample Exam both came from **9.1** (benefits of standards; standards in contracts). Spend **one short session** here, learn the lists, and move on." });
  B.push({ table: { head: ["LO ID", "K", "Objective (syllabus statement)", "Qs", "Pts"], widths: [1.7, 0.7, 9.6, 1.0, 1.0], rows: [
    ["9.1.1", "K2", "Understand the benefits of using security testing standards and where to find them.", "2 of 4†", "1 each"],
    ["9.1.2", "K2", "Understand the difference in applicability of standards in regulatory versus contractual situations.", "2 of 4†", "1 each"],
    ["9.2.1", "K2", "Understand the difference between mandatory (normative) and optional (informative) clauses within any standard.", "2 of 4†", "1 each"],
    ["9.3.1", "K2", "Understand where to learn of industry trends in information security.", "2 of 4†", "1 each"],
    ["**Chapter 9 total**", "—", "**K2 = 2**", "**2**", "**2**"],
  ] } });
  B.push({ lead: "† Two K2 questions drawn from the four objectives — the Sample Exam drew **9.1.1** (Q44) and **9.1.2** (Q45). The syllabus prints Chapter 9’s LO identifiers without the “AS-” prefix; they are AS-9.1.1 etc. Sections 9.1.3 and 9.3.2 carry no learning objective of their own." });
  B.push({ box: { title: "Exam allocation you must know", body: "Chapter 9 = **2 questions / 2 points**; Sample Exam **#44 and #45** (1 + 1 points)." } });
  B.push({ box: { kind: "warn", title: "The one thing that decides this chapter", body: "**Standards are a starting point, not a cage — except where a regulator or a signed contract makes them one.** Benefits: a **framework so you don’t start from a blank page**, effective defenses and tests, **tailorable**, and **demonstrable due diligence**. In contracts they give **a starting place for negotiation**. In regulated work, failure to comply can **delay or prevent approval** and bring **financial or criminal sanctions**. And within a standard, **“shall” is mandatory; “should” and “may” are optional**." } });

  B.push({ h2: "§9.1 — Understanding Security Testing Standards" });
  B.push({ p: "Standards provide **visibility into professional consensus or regulatory obligations**. **A consensus-based standard represents the considered opinion of a knowledgeable body of experts and is made available for voluntary use (in whole or in part) in contractual agreements between suppliers and customers.** There are **lesser so-called standards** from **informal or self-identified groups**, which **may be vendor-specific**. In **regulated industries — medical, financial, transportation, energy** — **government agencies may require compliance** with their own regulations or **their interpretations of otherwise voluntary standards**." });

  B.push({ h2: "9.1.1 (K2) — The Benefits of Using Security Testing Standards" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the benefits of using security testing standards and where to find them." } });
  B.push({ p: "Standards provide **guidance and consistency**, typically **developed by subject matter experts based on consensus of effective practices**. Four benefits:" });
  B.push({ table: { head: ["#", "Benefit"], widths: [0.8, 13.2], rows: [
    ["1", "**They define a framework for security testing, eliminating the need to start from a blank page.**"],
    ["2", "**They describe effective defenses and how to test for the most common security attacks.**"],
    ["3", "**They can be tailored to meet the needs of the project or organization.**"],
    ["4", "**Due diligence in security testing can be demonstrated by following recognized standards.**"],
  ] } });
  B.push({ p: "**Where to find them:** the syllabus’s reference list (Chapter 10) names **ISO/IEC/IEEE 29119-3** (test documentation), **IEEE 12207** (lifecycle processes), **COBIT** (ISACA), **ISO 27001** (information security management) and **PCI** (Payment Card Industry standard), alongside NIST SP 800-30 and NISTIR 7298, OWASP and CERT guides, and SANS lists." });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective", body: "Sample Q44: a benefit of conforming to security testing standards? **They are the building blocks for future security testing, eliminating the need to start from scratch.** Rejected: **separate and independent from project goals** (standards **may be mentioned in project goals and objectives**); **an effective offense** (standards are **defensive in nature**); **latitude in practices** because threats change (they **define standards that help define practices**, and should be **responsive to changes in threats**)." } });

  B.push({ h2: "9.1.2 (K2) — Regulatory Versus Contractual Situations" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the difference in applicability of standards in regulatory versus contractual situations." } });
  B.push({ table: { head: ["", "Regulatory situation", "Contractual situation"], widths: [2.6, 5.7, 5.7], rows: [
    ["**Nature**", "Standards **imposed** — all parties must know their obligations to comply", "Standards are **a reasonable and convenient basis for negotiating** project and product requirements"],
    ["**Consequence / role**", "Failure to comply **could delay or prevent approval** of the product and, in extreme cases, bring **financial or criminal sanctions**", "**A starting point instead of beginning with nothing**; consensus standards let **best practices be communicated and adopted or adapted**"],
    ["**Flexibility**", "None unless the regulator allows", "**Unless imposed unilaterally by a regulator or a non-negotiable contract**, standards can be the **basic framework for a negotiated agreement** or **self-imposed** on one’s own work"],
    ["**If you claimed compliance**", "—", "If a contract was **awarded on a claim to comply with specific standards**, the entity must **follow them strictly and document any deviations**"],
  ] } });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective", body: "Sample Q45: advantage of imposing security standards in contracts? **They provide a starting place for both parties to begin their negotiations** — each party can then determine what is required and **further specify** it. Rejected: a **legal exit** after an unforeseen issue (**too late then!**); making the agreement **public** (security agreements are **likely kept private**); standards **changing after the contract is final** (**contracts don’t usually change in this way**)." } });

  B.push({ h2: "§9.1.3 — Selection of Security Standards (no separate LO)" });
  B.push({ p: "**Not all standards apply to all situations.** The organization must **research the most appropriate standard(s)** for its **systems, applications, sensitive digital assets, level of risk and compliance requirements**. **Many standards may be tailored.** Common standards are listed in Chapter 10 of the syllabus." });

  B.push({ h2: "9.2.1 (K2) — Mandatory Versus Optional Clauses" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the difference between mandatory (normative) and optional (informative) clauses within any standard." } });
  B.push({ table: { head: ["Word", "Meaning", "Needed to claim conformance?"], widths: [2.6, 6.4, 5.0], rows: [
    ["**shall**", "**Mandatory requirement** (normative)", "**Yes**"],
    ["**should**", "**Optional** task (informative)", "No"],
    ["**may**", "**Optional** task (informative)", "No"],
  ] } });
  B.push({ ul: [
    "**Typical misuse: confusing the distinction — either requiring an optional item, or treating an obligatory item as optional.**",
    "Organization- or project-specific situations **may dictate deviation** from the strict sense of a standard. **Justification for omissions, modifications or additions must be documented and agreed upon by all parties.**",
  ] });

  B.push({ h2: "9.3.1 (K2) — Where to Learn of Industry Trends" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand where to learn of industry trends in information security." } });
  B.push({ table: { head: ["Source", "What it offers (syllabus)"], widths: [5.0, 9.0], rows: [
    ["**General-purpose and industry-specific news services** — publications, websites, email distributions", "Information and discussion of new or growing concerns"],
    ["**Events** — conferences, trade shows, professional society meetings", "Same; plus specialized technical content"],
    ["**A focused professional society or community of practice**", "**Timely and targeted updates**"],
    ["**Electronic alerts**", "**The most immediate actionable responses**, given the speed of new exploits"],
    ["**Periodic publicity of the most frequent or damaging exploits**", "**Widespread trends** — but pay attention to issues **specific to your industry, application area or products**, more likely found in **specialized publications, news services, technical conferences and professional events**"],
  ] } });

  B.push({ h2: "§9.3.2 — Evaluating Practices for Improvement (no separate LO)" });
  B.push({ ul: [
    "New technologies or novel uses open **a window of opportunity for misuse** until risks and limits are understood — e.g. **location-aware mobile services**, where people accept **minute-by-minute tracking** for convenience.",
    "**More motivations and resources** from **criminal, hacktivist, economic and political** agents; **extortion and protection schemes** have moved **from physical threats to digital**.",
    "**Large ad hoc networks of ideologically driven individuals** can be directed against targets **at very short notice**; **corporate espionage** is well funded; **nation-states** are particularly well resourced and may believe themselves **immune to sanctions**.",
    "**Because threats constantly change, security testers must always be ready for the next threat. Awareness of the industry, close tracking of security trends and acquisition of the most appropriate tools provide the best defense.**",
  ] });

  B.push({ pagebreak: true });
  B.push({ h1: "Section 2 — Key Concepts" });
  B.push({ h2: "2.1 Standards" });
  B.push({ ul: [
    "Consensus-based standard = **considered opinion of a knowledgeable body of experts**, for **voluntary** use in contracts. Lesser “standards” may be **vendor-specific**.",
    "Regulated industries: **medical, financial, transportation, energy** — agencies may **require** compliance.",
    "Benefits: **framework (no blank page) · effective defenses and tests · tailorable · due diligence**.",
    "Regulatory: comply or risk **delayed approval, sanctions**. Contractual: **starting point for negotiation**; if compliance was claimed, **follow strictly and document deviations**.",
    "Select the appropriate standard for systems, assets, risk and compliance; tailor.",
    "**Shall = mandatory; should/may = optional**; document and agree justified deviations.",
  ] });
  B.push({ h2: "2.2 Trends" });
  B.push({ ul: [
    "News services, events, **professional societies (timely, targeted)**, **electronic alerts (most immediate)**, periodic publicity (widespread), specialized sources (industry-specific).",
    "New technology = window of misuse; growing range of motivated, resourced attackers; be ready for the next threat.",
  ] });
  B.push({ h2: "2.3 Chapter 9 keyword glossary" });
  B.push({ table: { head: ["Keyword", "Working definition for the exam"], widths: [3.4, 10.6], rows: [
    ["**consensus-based standard**", "A standard representing the considered opinion of a knowledgeable body of experts, made available for voluntary use (in whole or in part) in contractual agreements between suppliers and customers."],
    ["**normative clause**", "A mandatory requirement — signalled by **shall**."],
    ["**informative clause**", "Optional guidance — signalled by **should** or **may**."],
  ] } });

  B.push({ pagebreak: true });
  B.push({ h1: "Section 3 — Tables and Summaries" });
  B.push({ table: { title: "3.1 Benefit or not? (the Q44 filter)", head: ["Candidate statement", "Benefit?"], widths: [11.0, 3.0], rows: [
    ["Framework — no need to start from a blank page / scratch", "**Yes**"],
    ["Describe effective defenses and how to test common attacks", "**Yes**"],
    ["Can be tailored", "**Yes**"],
    ["Demonstrate due diligence", "**Yes**"],
    ["Independent of project goals", "No"],
    ["Effective offense", "No — **defensive**"],
    ["Latitude because threats change", "No"],
  ] } });
  B.push({ table: { title: "3.2 Standards in three situations", head: ["Situation", "Standard is…", "Deviation"], widths: [3.6, 5.4, 5.0], rows: [
    ["Regulated", "**Imposed** obligation", "Risk of delayed approval or sanctions"],
    ["Contract — negotiable", "**Starting point** for negotiation", "Agreed between parties"],
    ["Contract — awarded on a compliance claim", "**Binding**", "**Follow strictly; document deviations**"],
    ["Self-imposed", "Voluntary framework", "Document justification"],
  ] } });
  B.push({ box: { kind: "ok", title: "Reproduce from memory before moving on", body: ["**Four benefits**, **regulatory vs contractual**, **shall vs should/may**, **where trends come from**. That is the whole chapter."] } });

  return B;
};
