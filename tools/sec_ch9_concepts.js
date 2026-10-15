// CT-SEC Chapter 9 — Section 2, Key Concepts: each concept explained from the ground up.
module.exports = function () {
  const B = [];
  B.push({ h1: "Section 2 — Key Concepts" });
  B.push({ lead: "Section 1 gives the syllabus wording objective by objective. This section explains what that wording means. Chapter 9 is worth only 2 points, so the cards are short: learn the four ideas below and move on." });

  B.push({ h2: "2.1 The storyline of Chapter 9" });
  B.push({ p: "Standards save you from **starting with a blank page** and show that you did things the **recognised way**. **How binding** a standard is depends on the situation: **imposed** by a regulator, **negotiated** in a contract, or **self-imposed**. Inside any standard, the **wording** tells you what is required (“shall”) and what is optional (“should”, “may”). Because threats keep changing, testers also need **reliable sources of news** about new threats." });

  B.push({ h2: "2.2 Standards and trends" });
  B.push({ concept: {
    title: "What standards are, and their four benefits (9.1.1)",
    plain: "A **consensus-based standard** is the **considered opinion of a knowledgeable body of experts**, made available for **voluntary** use (in whole or in part) in agreements between suppliers and customers. Some so-called “standards” come from **informal or self-identified groups** and may be **vendor-specific**. In **regulated industries** (medical, financial, transportation, energy), **agencies may require** compliance with their own regulations or with their interpretation of voluntary standards.",
    how: ["**Benefit 1:** a **framework** for security testing, so you **do not start from a blank page**.", "**Benefit 2:** a description of **effective defenses** and **how to test for the most common attacks**.", "**Benefit 3:** they can be **tailored** to the project or organization.", "**Benefit 4:** following recognised standards **demonstrates due diligence**.", "**Where to find them:** the syllabus’s reference list, for example ISO/IEC/IEEE 29119, IEEE 12207, ISO 27001, COBIT, PCI, NIST SP 800-30, and the OWASP, CERT and SANS guides."],
    example: "A team starting security testing for a payment service adopts the OWASP testing guidance and PCI requirements as a baseline (no blank page), tailors them to its mobile app, and can later show an auditor that it followed recognised standards (due diligence).",
    exam: "Official Q44: a benefit of conforming to standards → **they are building blocks for future security testing, so you do not start from scratch.** Standards are **defensive**, not an “effective offense”. They are **linked** to project goals, not independent of them.",
    confuse: "**Tailorable** does not mean **optional everywhere**. Where a regulator or a contract imposes a standard, tailoring is limited (next card).",
  } });
  B.push({ concept: {
    title: "Regulatory vs contractual use of standards (9.1.2)",
    plain: "**Regulator imposes it** → you **must comply**, or approval can be **delayed or refused**, and in extreme cases there are **financial or criminal sanctions**. **Contract** → the standard is **a convenient starting point for negotiation** between the parties, **unless** a regulator or a non-negotiable contract imposes it.",
    how: ["**Regulatory:** all parties must know their obligations. Failure to comply puts the product’s approval at risk.", "**Contractual:** consensus standards let **best practices be communicated and adopted or adapted**. Standards can also be **self-imposed** on your own work.", "**Special case:** if a contract was **won by claiming compliance** with specific standards, you must **follow them strictly and document any deviations**.", "**Selecting standards (§9.1.3):** not every standard fits every situation. Research the most appropriate ones for your **systems, applications, sensitive assets, level of risk and compliance requirements**, and **tailor** them where allowed."],
    example: "A medical-device maker **must** follow the regulator’s required standard, or the device is not approved. The same company negotiating with a hospital software supplier uses ISO 27001 as **the starting point** of the security clauses, and then agrees changes. Separately, a supplier that won a tender by promising PCI compliance must follow PCI **strictly**.",
    exam: "Official Q45: an advantage of imposing standards in contracts → **they give both parties a starting place for their negotiations.** Reject: a legal exit after a problem appears (too late), making the agreement public (security agreements stay private), and standards changing after the contract is final.",
    confuse: "**Contract standard = negotiable starting point.** But a contract **awarded on a compliance claim** = binding, followed strictly. Read the stem for that claim.",
  } });
  B.push({ concept: {
    title: "Mandatory vs optional clauses: shall, should, may (9.2.1)",
    plain: "Inside a standard, the **verb** tells you whether a clause is required. **“Shall” = mandatory** (normative): you must meet it to claim conformance. **“Should” and “may” = optional** (informative): recommended or permitted, but not required.",
    how: ["**Typical misuse:** confusing the two, either **requiring an optional item** or **treating a mandatory item as optional**.", "Your situation may justify **deviating** from the strict text. **The justification for any omission, modification or addition must be documented and agreed by all parties.**"],
    example: "A standard says “The tester **shall** obtain written authorization before testing” and “The report **should** include an executive summary.” Skipping authorization breaks conformance. Skipping the summary does not, although it is a bad idea.",
    exam: "Classify the verb: **shall → mandatory**. **should / may → optional**. If an option demands a “should” clause as obligatory, or waives a “shall” clause, that is the misuse.",
    confuse: "**Normative** = mandatory. **Informative** = optional guidance. The words sound alike, so link **normative** with **norm**, the rule you must follow.",
  } });
  B.push({ concept: {
    title: "Where to learn about industry trends (9.3.1)",
    plain: "Threats change constantly, so testers must **always be ready for the next one**. The syllabus lists where news comes from, and **each source has a speciality**.",
    how: ["**General and industry-specific news services** (publications, websites, email lists): new and growing concerns.", "**Events** (conferences, trade shows, professional society meetings): the same, plus specialized technical content.", "**A focused professional society or community of practice**: **timely and targeted** updates.", "**Electronic alerts**: **the most immediate actionable responses**, because exploits spread fast.", "**Periodic publicity of the most frequent or damaging exploits**: **widespread** trends. For issues **specific to your industry, application area or products**, use specialized publications, news services, technical conferences and professional events.", "**Why it matters (§9.3.2):** new technologies open **a window of opportunity for misuse** until their risks are understood (e.g. location-aware mobile services). Attackers are more numerous, motivated and resourced (criminal, hacktivist, economic, political, nation-state). **The best defense is awareness of the industry, close tracking of security trends, and acquiring the most appropriate tools.**"],
    example: "A vulnerability in a widely used logging library is disclosed on a Friday night. The team learns of it from a **vendor security alert** within an hour (most immediate), gets practical detection guidance from its **professional community** the next day (timely, targeted), and hears the post-mortem talks at a **conference** months later.",
    exam: "“Most immediate” → **electronic alerts**. “Timely and targeted” → **a focused professional society or community of practice**. “Specific to your industry” → **specialized** publications and events.",
    confuse: "**Periodic “top exploits” lists** show **widespread** trends, but they may miss what matters for **your** industry.",
  } });

  B.push({ h2: "2.3 Fuzzy points clarified" });
  B.push({ box: { kind: "warn", title: "Places where the wording is easy to misread", body: [
    "**Learning-objective IDs.** The syllabus prints Chapter 9’s objectives without the “AS-” prefix (9.1.1, 9.1.2, 9.2.1, 9.3.1). They are the same objectives.",
    "**§9.1.3 (selection) and §9.3.2 (evaluating practices) have no learning objective of their own**, but their content supports 9.1.x and 9.3.1 questions.",
    "**The list of example standards in section 2.2 comes from the syllabus’s reference chapter**, not from §9.1.1 itself. The objective asks **where to find** standards, so “in the syllabus’s reference list and from standards bodies” is the expected idea.",
  ] } });
  return B;
};
