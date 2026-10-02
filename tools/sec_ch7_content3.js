// CT-SEC Chapter 7 — Sections 5 to 7
module.exports = function () {
  const B = [];

  B.push({ pagebreak: true });
  B.push({ h1: "Section 5 — Exam Tricks" });
  B.push({ h2: "5.1 Frequently tested topics (evidence-based)" });
  B.push({ table: { head: ["LO", "K", "Pts", "Sample #", "Format used officially"], widths: [2.0, 0.8, 0.8, 1.4, 9.0], rows: [
    ["AS-7.1.1", "K2", "1", "#38", "Why reassess risk expectations? → **stakeholders make business decisions on risk levels**"],
    ["AS-7.2.1", "K2", "1", "#39", "Important aspect of results → **the fewer people that know the better**"],
    ["AS-7.2.3", "**K4**", "**3**", "#40", "How to articulate risk → **summary + detailed vulnerabilities later**"],
    ["**Chapter 7 total**", "—", "**5**", "**#38–#40**", "**Three questions, one rule each**"],
  ] } });
  B.push({ box: { title: "The arithmetic", body: "**5 points for 70 minutes.** The K4 alone is **3 points** and turns on **one structural fact**: risk impact sits in the **summary** and is **detailed later** by vulnerability." } });

  B.push({ h2: "5.2 Common distractors observed" });
  B.push({ ul: [
    "**Educate everyone on all risks** — need-to-know instead.",
    "**Freeze expectations** — they **should** change.",
    "**Publish or share widely** — conservative sharing.",
    "**“Always classify by criticality”** — true but not the **most important** aspect.",
    "**Detail in the summary** / **risk only at the end** / **no risk in the summary** — all wrong for a risk-heavy report.",
  ] });

  B.push({ h2: "5.3 Keyword recognition (map words → answers)" });
  B.push({ table: { head: ["If the stem says…", "Think…"], widths: [6.0, 8.0], rows: [
    ["“reassess”, “expectations change”, “new threat”", "**Revisit risk assessment; stakeholders decide acceptable risk**"],
    ["“who should see results”", "**Need to know — fewer the better**"],
    ["“developers across the enterprise”", "**Limited parts** only"],
    ["“higher severity”, “management focus”", "**Precise, accurate, timely** reporting"],
    ["“dashboard”", "**Agree how and when** management accesses defect reports"],
    ["“emphasis on risk” in a report", "**Summary + later detail**"],
    ["“not tested”", "**Comprehensive assessment (4b)**"],
    ["“different tool than planned”", "**Variances (3)**"],
    ["“executive vs architect”", "**Multiple reports, tuned content**"],
  ] } });

  B.push({ h2: "5.4 Typical traps" });
  B.push({ ul: [
    "**Interim vs final** — interim reports are **encouraged** (more time to remediate).",
    "**Key findings** live in the **summary**, not in the results section.",
    "**Resolved and unresolved** vulnerabilities are both listed (5b and 5c).",
  ] });

  B.push({ h2: "5.5 How to eliminate wrong answers" });
  B.push({ ol: [
    "Strike anything that **widens access** to results.",
    "Strike anything that **freezes** expectations or criteria.",
    "In structure questions, strike options that put **all detail in the summary** or **nothing in it**.",
  ] });

  B.push({ h2: "5.6 Scenario-solving shortcuts" });
  B.push({ table: { head: ["Scenario shape", "Shortcut"], widths: [5.0, 9.0], rows: [
    ["Report to analyze", "Check **accuracy** (numbers, coverage vs plan, untested explained) → **understandability** (executive summary, key findings, risk) → **appropriateness** (need to know, tuned)"],
    ["Stakeholders’ needs changed", "**Revisit risk assessment; revise criteria**"],
    ["Request to share results", "**Need to know**; limited parts to those who fix"],
  ] } });

  B.push({ h2: "5.7 Common candidate mistakes" });
  B.push({ ul: [
    "Treating this as a Foundation-level reporting chapter — the twist is **confidentiality**.",
    "Forgetting **Approvals** as the last section.",
  ] });

  B.push({ h2: "5.8 Mnemonics that carry the whole chapter" });
  B.push({ table: { head: ["Mnemonic", "Expands to"], widths: [3.6, 10.4], rows: [
    ["**I-S-V-C-R-E-A-A** (“I Seldom Verify Critical Results Except At Approval”)", "**I**dentifier, **S**ummary, **V**ariances, **C**omprehensive assessment, **R**esults summary, **E**valuation, **A**ctivities summary, **A**pprovals"],
    ["**T-C-R-T**", "Reporting effectiveness: **T**iming, **C**ontent, **R**ecipients, **T**uning"],
    ["**“Top line, then detail”**", "Risk impact in the summary, detailed later"],
    ["**“Need to know”**", "Confidentiality of results"],
  ] } });

  B.push({ h2: "5.9 Chapter 7 mind map" });
  B.push({ table: { head: ["Branch", "Leaves"], widths: [3.4, 10.6], rows: [
    ["**Evaluation**", "Against expectations, exit and acceptance criteria · risks unknown at outset · expectations change · revisit risk assessment"],
    ["**Confidentiality**", "Tester knows weaknesses · negative impact of sharing · need to know · conservative"],
    ["**Controls & data**", "More sensitive · higher severity · management focus · precise, accurate, timely · agree access (dashboard)"],
    ["**Report**", "Early encouraged · eight sections · timing, content, recipients, tuning · multiple reports"],
  ] } });

  // ================= SECTION 6 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 6 — Flashcards" });
  B.push({ lead: "Cover the back of each card and recall it from the front. All cards are drawn from Chapter 7 of the CTAL-SEC 2016 syllabus. Target: three clean passes before exam day." });
  B.push({ flash: [
    ["What determines security test completion?", "Evaluating results against **security expectations, exit criteria and/or acceptance criteria**."],
    ["Why revise security expectations during a project?", "Not all risks are known at the outset; **expectations change** (e.g. a **new threat**) — so **revisit risk assessments** and feed planning and execution."],
    ["Why reassess risk expectations frequently (official)?", "**Stakeholders make business decisions based on security risk levels.**"],
    ["What is different about communicating security results?", "**The negative impact of communicating vulnerabilities to people other than direct stakeholders.**"],
    ["Rule for sharing security results?", "**Only to those who need to know; being conservative is good practice** — the fewer the better."],
    ["Why are security defects reported more precisely?", "They are **more sensitive**, usually **higher severity**, under **higher management focus**."],
    ["Three qualities of status-report source data?", "**Timely, accurate, precise.**"],
    ["Example of a reporting mechanism?", "A **security test dashboard**; agree with management **how and when** they access reports."],
    ["Why report early?", "**More time to remediate vulnerabilities.**"],
    ["Eight sections of a security test report?", "**Identifier · Summary · Variances · Comprehensive assessment · Summary of results · Evaluation · Summary of activities · Approvals.**"],
    ["Summary subsections?", "**Executive summary · key findings.**"],
    ["Variances subsections?", "**Process followed · variances from plan · methods and tools used.**"],
    ["Comprehensive assessment subsections?", "**Coverage vs plan criteria · explanation of items not tested.**"],
    ["Summary of results subsections?", "**Summarized results · resolved vulnerabilities and resolutions · unresolved vulnerabilities.**"],
    ["Evaluation subsections?", "**Status vs exit criteria · risks (classifications) and impact of unresolved vulnerabilities.**"],
    ["Four factors of reporting effectiveness?", "**Timing · content · recipients · tuning to recipients’ needs.**"],
    ["Best way to emphasise risk in a report?", "**Risk impact in the summary, detailed later by specific vulnerabilities.**"],
    ["Executive report vs architect report?", "**Different content** — multiple reports may be needed."],
  ] });

  // ================= SECTION 7 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 7 — Revision Notes" });
  B.push({ h2: "7.1 One-page chapter summary" });
  B.push({ p: "Completion is judged against security expectations, exit and acceptance criteria — which change as risks and stakeholder expectations change, so the risk assessment is revisited throughout. Security results reveal weaknesses that may also exist in production; share them only on a need-to-know basis. Security defects are more sensitive and severe, so their reporting must be precise, accurate and timely, through mechanisms such as a dashboard agreed with management. Report early. A report has eight sections; risk impact is summarised up front and detailed by vulnerability later; effectiveness depends on timing, content, recipients and tuning, often with different reports for different audiences." });
  B.push({ h2: "7.2 Key definitions to memorize" });
  B.push({ table: { head: ["Term", "Definition"], widths: [3.4, 10.6], rows: [
    ["Need to know", "Make security information available only to those who need it"],
    ["Security test dashboard", "Mechanism for timely, accurate, precise status access"],
    ["Interim report", "Report during testing — encouraged to allow remediation time"],
  ] } });
  B.push({ h2: "7.3 High-priority concepts (study first)" });
  B.push({ ol: ["Eight report sections; risk in summary + evaluation (3 pts).", "Revisit expectations (1 pt).", "Need to know; precision and severity (1 pt)."] });
  B.push({ h2: "7.4 Last-minute revision sheet" });
  B.push({ box: { kind: "ok", title: "If you read nothing else", body: [
    "Expectations change → revisit risk assessment; stakeholders decide acceptable risk.",
    "Results: **the fewer people that know the better**; limited parts to developers and infrastructure.",
    "Security defects: higher severity, precise, timely, dashboard.",
    "Report: Identifier · Summary (exec, key findings) · Variances · Comprehensive assessment · Results · Evaluation · Activities · Approvals.",
    "Risk: **summary + later detail by vulnerability**.",
  ] } });
  B.push({ h2: "7.5 Memorization checklist" });
  B.push({ table: { head: ["✓", "I can…"], widths: [0.8, 13.2], rows: [
    ["☐", "explain why acceptance criteria and expectations are revised"],
    ["☐", "explain need-to-know for security results"],
    ["☐", "explain why security defect reporting must be precise and timely"],
    ["☐", "list the eight report sections with subsections"],
    ["☐", "assess a report for accuracy, understandability and appropriateness"],
  ] } });
  B.push({ h2: "7.6 Exam-day quick review" });
  B.push({ p: "**Top line, then detail. Fewer is better. Expectations should change.**" });

  return B;
};
