// CT-SEC Chapter 7 — Sections 1 to 3
module.exports = function () {
  const B = [];

  // ================= SECTION 1 =================
  B.push({ h1: "Section 1 — Syllabus Explanation" });
  B.push({ p: "Chapter 7, **Security Test Evaluation and Reporting**, carries **4 learning objectives** across two sub-chapters (7.1 Evaluation · 7.2 Reporting). The Exam Structure Table allocates **3 questions** and **5 of the 80 points**. Teaching time is **70 minutes** — **4.3 points per teaching hour**." });
  B.push({ p: "One question is a **3-point K4** on **analyzing an interim status report (AS-7.2.3)** — **60% of the chapter**. The rest are two K2s: one guaranteed on **revising expectations and acceptance criteria (AS-7.1.1)**, one from **confidentiality** or **controls and data gathering** (AS-7.2.1 / 7.2.2)." });
  B.push({ table: { head: ["LO ID", "K", "Objective (syllabus statement)", "Qs", "Pts"], widths: [1.7, 0.7, 9.6, 1.0, 1.0], rows: [
    ["AS-7.1.1", "K2", "Understand the need to revise security expectations and acceptance criteria as the scope and goals of a project evolve.", "**1**", "1"],
    ["AS-7.2.1", "K2", "Understand the importance of keeping security test results confidential and secure.", "1 of 2†", "1"],
    ["AS-7.2.2", "K2", "Understand the need to create proper controls and data-gathering mechanisms to provide the source data for the security test status reports in a timely, accurate, and precise fashion (e.g. a security test dashboard).", "1 of 2†", "1"],
    ["AS-7.2.3", "**K4**", "Analyze a given interim security test status report to determine the level of accuracy, understandability, and stakeholder appropriateness.", "**1**", "**3**"],
    ["**Chapter 7 total**", "—", "**K2 = 2 · K4 = 1**", "**3**", "**5**"],
  ] } });
  B.push({ lead: "† One K2 drawn from AS-7.2.1 / 7.2.2 — the Sample Exam drew **7.2.1** (Q39)." });
  B.push({ box: { title: "Exam allocation you must know", body: "Chapter 7 = **3 questions / 5 points**; Sample Exam **#38 to #40** (1 + 1 + 3 points)." } });
  B.push({ box: { kind: "warn", title: "The one thing that decides this chapter", body: "**Summary up top, detail below — and the fewer people who see it, the better.** The 3-point report question (Q40) is answered by **risk impact described in the summary and later detailed in terms of specific vulnerabilities**: not the full assessment in the summary, not risk only at the end, and never absent. The confidentiality question (Q39) is answered by **“the fewer people that know the better.”**" } });

  // 7.1
  B.push({ h2: "AS-7.1.1 (K2) — Security Test Evaluation" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the need to revise security expectations and acceptance criteria as the scope and goals of a project evolve." } });
  B.push({ ul: [
    "**Measuring security test results and evaluating status against security expectations, exit criteria and/or acceptance criteria are required to determine test completion.**",
    "**It is difficult to know all the security risks at the outset of a project.**",
    "**Stakeholder and user expectations sometimes change** regarding the level of security needed — e.g. **awareness of a new threat** might cause stakeholders to **require higher levels of security** than initially thought.",
    "**This is one reason why security risk assessments need to be revisited throughout a project**, and the results **incorporated into security test planning and execution**.",
  ] });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective", body: "Sample Q38: why reassess security risk expectations frequently? **Stakeholders will make business decisions based on associated security risk levels** — they decide **which risk level is acceptable** and on **mitigation plans**. Rejected: stakeholders educated on **all risks at all times** (**everyone doesn’t need to know everything**); a **manual risk mitigation plan by users** (not feasible); expectations **kept from changing** (**expectations should change**)." } });

  // 7.2.1
  B.push({ h2: "AS-7.2.1 (K2) — Confidentiality of Security Test Results" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the importance of keeping security test results confidential and secure." } });
  B.push({ ul: [
    "The average tester **knows more about the test object after testing** than most developers or designers — the **most important weaknesses and strong points**. The same applies to security testing, which may find **hidden holes and vulnerabilities**.",
    "**The difference lies in the possible negative impact of communicating these vulnerabilities to people other than the direct stakeholders.**",
    "**Information should be made available only to those who need to know** — and **being conservative with sharing security test results is considered good practice**.",
  ] });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective", body: "Sample Q39: important aspect of security test results? **The fewer people that know the better** — results should be **kept confidential and access tightly controlled**, because they identify weaknesses, and **often the same issues exist in production**. Rejected: **published for users and stakeholders**; **shared with developers across the enterprise** (only **limited parts** to developers to improve coding, and to **infrastructure people** to fix infrastructure issues); **always classified by criticality** (true, but **not the most important aspect**)." } });

  // 7.2.2
  B.push({ h2: "AS-7.2.2 (K2) — Controls and Data Gathering for Status Reporting" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the need to create proper controls and data-gathering mechanisms to provide the source data for the security test status reports in a timely, accurate, and precise fashion (e.g. a security test dashboard)." } });
  B.push({ ul: [
    "**The impact of a security vulnerability is normally judged more sensitive than “normal” defects**, so reporting must be **more precise and accurate** about **the nature of the defect and the implied risks**.",
    "**In most projects security defects are categorized with a higher severity than comparable functional defects** — so **management has a higher focus** on them, their risks and resolutions.",
    "Security defect reporting must **carefully assess the impact**, **the accuracy of test results**, and be **available in a well-defined and timely manner**.",
    "**Good practice: discuss with management how and when they would like access to security defect reports** (e.g. a **dashboard**).",
  ] });

  // 7.2.3
  B.push({ h2: "AS-7.2.3 (K4) — Analyzing Interim Security Test Status Reports" });
  B.push({ box: { title: "Original syllabus statement", body: "Analyze a given interim security test status report to determine the level of accuracy, understandability, and stakeholder appropriateness." } });
  B.push({ p: "Reports may be produced **throughout testing** or **only at the end** (end of system security testing, or of acceptance-level security tests). **Early security test reporting is encouraged because it allows more time to remediate vulnerabilities.** Following this syllabus’s process, the team may discover vulnerabilities and document observations **during all test activities**." });
  B.push({ table: { title: "The eight sections of a security test report", head: ["#", "Section", "Contents"], widths: [0.6, 3.4, 10.0], rows: [
    ["1", "**Report identifier**", "—"],
    ["2", "**Summary**", "a. **Executive summary** · b. **Key findings**"],
    ["3", "**Variances**", "a. **Test process followed** · b. **Variances from the planned process** · c. **Methods and tools** (configurations, policies) used"],
    ["4", "**Comprehensive assessment**", "a. **Evaluation of test coverage** against the criteria in the test plan · b. **Explanation for items or features not tested**"],
    ["5", "**Summary of results**", "a. Summarization of results · b. **All resolved vulnerabilities and their resolutions** · c. **All unresolved vulnerabilities**"],
    ["6", "**Evaluation**", "a. Evaluation of results and status **against exit criteria** · b. **Risks identified (classifications) and impact of unresolved vulnerabilities**"],
    ["7", "**Summary of activities**", "—"],
    ["8", "**Approvals**", "—"],
  ] } });
  B.push({ table: { title: "Effectiveness of security test reporting depends on…", head: ["Factor", "Question to ask of a given report"], widths: [3.6, 10.4], rows: [
    ["**Timing**", "Is it early enough to allow remediation? Interim, not only final?"],
    ["**Content**", "Are all eight sections there, accurate and precise? Unresolved vulnerabilities and their risk impact stated?"],
    ["**Recipients**", "Is the audience authorized and need-to-know?"],
    ["**Tuning to recipients’ needs**", "Is the level of detail right for them? **An executive report differs from one for a system architect.** **Multiple reports** may be needed"],
  ] } });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K4, 3 points)", body: ["Sample Q40: a high-risk project is ready for deployment and you want **particular emphasis on risk**. Best way to articulate it? **Risk impact described in the summary and later detailed in terms of specific vulnerabilities.**", "Rejected: **a descriptive risk assessment in the summary** (**details should not be in the summary**); **overall risk only in the last section** (**should not be recorded only at the end**); **risk not in the summary** (**an important part of the report**). Structure: **Summary (2: executive summary, key findings) → Evaluation (6b: risks and impact of unresolved vulnerabilities)**."] } });
  B.push({ box: { kind: "ok", title: "K4 method — the three tests of a status report", body: ["**Accuracy:** are numbers consistent (resolved + unresolved = found)? Are coverage claims backed by the plan’s criteria? Are untested items explained?", "**Understandability:** is there an executive summary with key findings? Is risk stated in business terms before technical detail?", "**Stakeholder appropriateness:** is sensitive detail (exploit steps, unresolved vulnerability specifics) limited to need-to-know readers? Does each audience get the level of detail it needs?"] } });

  // ================= SECTION 2 =================
  B.push({ pagebreak: true });
  B.push(...require("./sec_ch7_concepts")());
  B.push({ h2: "2.4 Chapter 7 keyword glossary" });
  B.push({ table: { head: ["Keyword", "Working definition for the exam"], widths: [3.4, 10.6], rows: [
    ["**acceptance criteria**", "Criteria a system must satisfy to be accepted; security needs belong in them and may need revising as goals evolve."],
    ["**attack vector**", "A path or means by which an attacker gains access to a system."],
    ["**dashboard**", "A representation of test status for timely management access; an example of a data-gathering and reporting mechanism."],
    ["**exit criteria**", "Conditions for completing testing; security results are evaluated against them (report section 6a)."],
  ] } });

  // ================= SECTION 3 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 3 — Tables and Summaries" });
  B.push({ table: { title: "3.1 Where does it go in the report?", head: ["Item", "Section"], widths: [9.0, 5.0], rows: [
    ["Headline risk impact for executives", "**2a Executive summary**"],
    ["Top three findings", "**2b Key findings**"],
    ["We skipped the mobile app because the build was late", "**4b** (not tested — explanation)"],
    ["We used a different scanner than planned", "**3b / 3c** (variance; tools)"],
    ["Coverage against plan criteria", "**4a**"],
    ["Fixed SQL injection in login (resolution)", "**5b**"],
    ["Open privilege escalation", "**5c**, with risk and impact in **6b**"],
    ["Status vs exit criteria", "**6a**"],
    ["Sign-offs", "**8**"],
  ] } });
  B.push({ table: { title: "3.2 Who gets what?", head: ["Audience", "Content focus", "Sensitivity handling"], widths: [3.4, 5.6, 5.0], rows: [
    ["Executive management", "Business risk impact, decisions needed", "No exploit detail"],
    ["Security / test manager", "Full report", "Need-to-know"],
    ["Developers", "Specific defects to fix, coding lessons", "**Limited parts** only"],
    ["Infrastructure staff", "Infrastructure issues to fix", "**Limited parts** only"],
    ["System architect", "Design-level weaknesses", "Need-to-know"],
    ["General stakeholders / users", "Not the vulnerability detail", "**The fewer the better**"],
  ] } });
  B.push({ box: { kind: "ok", title: "Reproduce from memory before moving on", body: ["**The eight report sections** and **where risk goes (2 and 6b)** — the 3-point K4.", "**Why revisit expectations** — the guaranteed K2.", "**Need to know / fewer is better** and **higher severity, precise, timely** — the pooled K2."] } });

  return B;
};
