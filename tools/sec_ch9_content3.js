// CT-SEC Chapter 9 — Sections 5 to 7
module.exports = function () {
  const B = [];

  B.push({ pagebreak: true });
  B.push({ h1: "Section 5 — Exam Tricks" });
  B.push({ h2: "5.1 Frequently tested topics (evidence-based)" });
  B.push({ table: { head: ["LO", "K", "Pts", "Sample #", "Format used officially"], widths: [2.0, 0.8, 0.8, 1.4, 9.0], rows: [
    ["9.1.1", "K2", "1", "#44", "Benefit of conforming → **no need to start from scratch**"],
    ["9.1.2", "K2", "1", "#45", "Advantage in contracts → **starting place for negotiation**"],
    ["**Chapter 9 total**", "—", "**2**", "**#44–#45**", "**The smallest chapter**"],
  ] } });
  B.push({ box: { title: "The arithmetic", body: "**2 points for 40 minutes.** Do it last, in one sitting; revisit only Section 7 before the exam." } });

  B.push({ h2: "5.2 Common distractors observed" });
  B.push({ ul: [
    "**Standards independent of project goals** — they may be named in them.",
    "**Standards as offense** — they are **defensive**.",
    "**Standards giving latitude** — they define practices (and should respond to changing threats).",
    "**Legal exit after a problem** — too late.",
    "**Making agreements public** — security agreements are likely private.",
    "**Contracts that change as standards change** — contracts don’t usually change that way.",
  ] });

  B.push({ h2: "5.3 Keyword recognition (map words → answers)" });
  B.push({ table: { head: ["If the stem says…", "Think…"], widths: [6.0, 8.0], rows: [
    ["“benefit of standards”", "**Framework / no blank page · effective defenses · tailorable · due diligence**"],
    ["“contract”", "**Starting point for negotiation**"],
    ["“awarded on compliance claim”", "**Follow strictly; document deviations**"],
    ["“regulated”, “approval”", "**Delayed/prevented approval; sanctions**"],
    ["“shall”", "**Mandatory**"],
    ["“should”, “may”", "**Optional**"],
    ["“most immediate”", "**Electronic alerts**"],
    ["“timely and targeted”", "**Professional society / community of practice**"],
  ] } });

  B.push({ h2: "5.4 Typical traps" });
  B.push({ ul: [
    "**Normative = mandatory = shall**; **informative = optional = should/may**.",
    "A **voluntary** standard becomes **binding** when imposed by a regulator, a non-negotiable contract, or a contract **won by claiming compliance**.",
  ] });

  B.push({ h2: "5.5 How to eliminate wrong answers" });
  B.push({ ol: ["Strike anything that makes standards **offensive**, **public**, **after-the-fact** or **self-changing**.", "Prefer wording about **frameworks, starting points, tailoring, due diligence**."] });

  B.push({ h2: "5.6 Scenario-solving shortcuts" });
  B.push({ table: { head: ["Scenario shape", "Shortcut"], widths: [5.0, 9.0], rows: [
    ["Choosing a standard", "Fit to **systems, assets, risk, compliance**; tailor"],
    ["Deviation from a standard", "**Justify, document, agree**"],
    ["Keeping up with threats", "**Alerts, societies, specialized sources**; track trends; right tools"],
  ] } });

  B.push({ h2: "5.7 Common candidate mistakes" });
  B.push({ ul: ["Over-studying the standards list — the syllabus asks about **how standards are used**, not their contents."] });

  B.push({ h2: "5.8 Mnemonics that carry the whole chapter" });
  B.push({ table: { head: ["Mnemonic", "Expands to"], widths: [3.6, 10.4], rows: [
    ["**F-E-T-D** (“Fewer Errors Through Discipline”)", "Benefits: **F**ramework, **E**ffective defenses/tests, **T**ailorable, **D**ue diligence"],
    ["**“Shall = Must; Should/May = Might”**", "Normative vs informative"],
    ["**“Regulator: obey. Contract: negotiate. Claim: comply.”**", "Applicability"],
  ] } });

  B.push({ h2: "5.9 Chapter 9 mind map" });
  B.push({ table: { head: ["Branch", "Leaves"], widths: [3.4, 10.6], rows: [
    ["**Standards**", "Consensus-based · vendor-specific lesser ones · regulated industries"],
    ["**Benefits**", "Framework · defenses and tests · tailorable · due diligence"],
    ["**Applicability**", "Regulatory (sanctions) · contractual (starting point) · claimed compliance (strict) · self-imposed"],
    ["**Applying**", "Shall vs should/may · misuse · documented, agreed deviations"],
    ["**Trends**", "News services · events · societies · alerts · periodic publicity · specialized sources · window of misuse · be ready"],
  ] } });

  B.push({ pagebreak: true });
  B.push({ h1: "Section 6 — Flashcards" });
  B.push({ lead: "Cover the back of each card and recall it from the front. All cards are drawn from Chapter 9 of the CTAL-SEC 2016 syllabus. Target: three clean passes before exam day." });
  B.push({ flash: [
    ["Define a consensus-based standard.", "**The considered opinion of a knowledgeable body of experts**, made available for **voluntary** use in **contractual agreements between suppliers and customers**."],
    ["Lesser “standards” come from…?", "**Informal or self-identified groups** — may be **vendor-specific**."],
    ["Regulated industries named?", "**Medical, financial, transportation, energy.**"],
    ["Four benefits of security testing standards?", "**Framework (no blank page) · effective defenses and how to test common attacks · tailorable · demonstrate due diligence.**"],
    ["Standards in regulated activities?", "Obligation to comply; failure can **delay or prevent approval** and bring **financial or criminal sanctions**."],
    ["Standards in contracts?", "**A reasonable and convenient basis for negotiation — a starting point.**"],
    ["If a contract was won by claiming compliance?", "**Follow the standards strictly and document any deviations.**"],
    ["How to select a standard?", "Research the most appropriate for **systems, applications, sensitive assets, risk level, compliance requirements**; **tailor**."],
    ["“Shall”?", "**Mandatory** — required to conform (normative)."],
    ["“Should” and “may”?", "**Optional** — not required to claim conformance (informative)."],
    ["Typical misuse of a standard?", "**Requiring an optional item or treating an obligatory item as optional.**"],
    ["Deviating from a standard?", "**Document the justification and get agreement from all parties.**"],
    ["Most immediate source of actionable trend information?", "**Electronic alerts.**"],
    ["Timely and targeted updates come from…?", "**A focused professional society or community of practice.**"],
    ["Where are industry-specific issues communicated?", "**Specialized publications and news services, technical conferences and professional events.**"],
    ["Best defense against evolving threats (§9.3.2)?", "**Awareness of the industry, close tracking of security trends, acquisition of the most appropriate tools.**"],
  ] });

  B.push({ pagebreak: true });
  B.push({ h1: "Section 7 — Revision Notes" });
  B.push({ h2: "7.1 One-page chapter summary" });
  B.push({ p: "Consensus-based standards capture expert opinion for voluntary use; regulators in medical, financial, transportation and energy sectors may make them mandatory. Standards give a framework (no blank page), describe defenses and tests for common attacks, can be tailored, and demonstrate due diligence. Under regulation, non-compliance risks approval and sanctions; in contracts, standards are a starting point for negotiation — unless compliance was claimed to win the contract, in which case follow strictly and document deviations. Shall is mandatory; should and may are optional; justify, document and agree any deviation. Track trends through news services, events, professional societies, electronic alerts (fastest) and specialized sources." });
  B.push({ h2: "7.2 Key definitions to memorize" });
  B.push({ table: { head: ["Term", "Definition"], widths: [3.4, 10.6], rows: [
    ["Consensus-based standard", "Considered opinion of experts for voluntary contractual use"],
    ["Normative clause", "Mandatory — shall"],
    ["Informative clause", "Optional — should / may"],
  ] } });
  B.push({ h2: "7.3 High-priority concepts (study first)" });
  B.push({ ol: ["Four benefits.", "Regulatory vs contractual.", "Shall vs should/may.", "Trend sources."] });
  B.push({ h2: "7.4 Last-minute revision sheet" });
  B.push({ box: { kind: "ok", title: "If you read nothing else", body: [
    "Benefits: **no blank page** · defenses and tests · tailorable · due diligence.",
    "Contract: **starting point for negotiation**. Regulated: **comply or face delay/sanctions**. Claimed: **strict + document deviations**.",
    "**Shall = mandatory; should/may = optional.**",
    "Trends: **electronic alerts (fastest)**, professional societies (targeted), specialized sources (industry-specific).",
  ] } });
  B.push({ h2: "7.5 Memorization checklist" });
  B.push({ table: { head: ["✓", "I can…"], widths: [0.8, 13.2], rows: [
    ["☐", "define a consensus-based standard and name the regulated industries"],
    ["☐", "list the four benefits of standards"],
    ["☐", "contrast regulatory, contractual and claimed-compliance situations"],
    ["☐", "classify shall / should / may and describe the typical misuse"],
    ["☐", "name five sources of trend information"],
  ] } });
  B.push({ h2: "7.6 Exam-day quick review" });
  B.push({ ul: ["**Starting point, not a cage** — unless a regulator or a claim makes it one.", "**Shall must; should/may might.**"] });

  return B;
};
