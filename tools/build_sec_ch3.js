// Chapter 3 entry point:  node build_sec_ch3.js "../guides/03-security-testing-processes.docx"
require("./build_common")({
  n: 3,
  title: "Security Testing Processes",
  sections: "3.1 Security Test Process Definition · 3.2 Security Test Planning · 3.3 Security Test Design · 3.4 Security Test Execution · 3.5 Security Test Evaluation · 3.6 Security Test Maintenance",
  los: "8 examinable (AS-3.1.1 – AS-3.6.1) · K2 = 3 · K3 = 3 · K4 = 2",
  teaching: "140 minutes — **12 points**, 5.1 points per teaching hour",
  questions: "**6 of 45 questions · 12 of 80 points.** K2 = 2 · K3 = 2 · **K4 = 2**. Guaranteed: **AS-3.1.1** (K3), **AS-3.2.1** (K4), **AS-3.4.2** (K2), **AS-3.5.1** (K4). One K3 from 3.3.1/3.3.2; one K2 from 3.4.1/3.6.1",
  keywords: "account harvesting · password cracking · social engineering · test approach · test plan · test process",
  official: "**#11 – #16** (2 + 3 + 2 + 1 + 1 + 3 points)",
  howto: [
    "**Section 1** explains all eight learning objectives — read it once, slowly. **Section 2** explains every key concept from the ground up — plain words, how it works, a worked example, the exam angle, and what it is easily confused with — and ends with the chapter’s **fuzzy points clarified**. If the syllabus wording in Section 1 feels dense, read the matching Section 2 card first. **Section 3** holds the tables to reproduce from memory; **table 3.1 (activity → process step)**, **table 3.2 (plan checklist)** and **table 3.5 (first response to a vulnerability)** pay directly. **Section 4** is the question bank, **Section 5** exam tactics, **Section 6** is the revision sheet for the night before.",
    "**What makes Chapter 3 unusual:** it is the Foundation Level test process re-read through a security lens, but it carries **two guaranteed 3-point K4 questions** — reviewing a **security test plan** and handling a **discovered vulnerability**. Both are pattern questions with a fixed method.",
    "**Two rules that decide those six points:** first, a plan is reviewed against **six elements — scope, who, schedule, tasks and time, environment, authorizations** — and the missing one is the answer. Second, when testing an update finds a vulnerability, **check production first, record it in a secure tracker, notify the developer, test for more** — and **never** put it in a general stakeholder report.",
    "**Suggested schedule:** Day 1 — Section 1 §3.1 and §3.2. Day 2 — Section 1 §3.3 (the longest part: design categories, secure coding, DoS family). Day 3 — Section 1 §3.4–3.6 and Section 3. Day 4 — Section 4 and Section 5. Day 5 onwards — redo the questions you missed and re-read Section 2’s fuzzy points. Night before — Section 6.",
  ],
}, process.argv[2]);
