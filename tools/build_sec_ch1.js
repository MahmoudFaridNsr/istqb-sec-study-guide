// Chapter 1 entry point:  node build_sec_ch1.js "../guides/01-the-basis-of-security-testing.docx"
require("./build_common")({
  n: 1,
  title: "The Basis of Security Testing",
  sections: "1.1 Security Risks · 1.2 Information Security Policies and Procedures · 1.3 Security Auditing and Its Role in Security Testing",
  los: "6 examinable (AS-1.1.1 – AS-1.3.1) · K2 = 3 · K4 = 3",
  teaching: "105 minutes — **8 points**, 4.6 points per teaching hour",
  questions: "**4 of 45 questions · 8 of 80 points.** K2 = 2 · K3 = 0 · **K4 = 2**. Guaranteed: **AS-1.2.1** (K2) and **AS-1.2.2** (K4). One K2 from AS-1.1.1/1.3.1; one K4 from AS-1.1.2/1.1.3",
  keywords: "data privacy · ethical hacker · information security · penetration testing · risk assessment · risk exposure · risk mitigation · security attack · security audit · security policy · security procedure · security risk",
  official: "**#1 – #4** (1 + 3 + 1 + 3 points)",
  howto: [
    "**Section 1** explains all six learning objectives in syllabus order — read it once, slowly. **Section 2** compresses the same material into recall-ready notes. **Section 3** holds the tables to reproduce from memory; **table 3.2 (behaviour → policy)** and **the risk matrix** pay directly. **Section 4** is the question bank — cover the green box, answer, then read the rationale even when you were right. **Section 5** converts that into exam tactics. **Section 6** is for daily spaced repetition. **Section 7** is for the morning of the exam.",
    "**What makes Chapter 1 unusual:** it reads like an introduction but **two of its four questions are 3-point K4 scenarios**. Those two items are **6 of the chapter’s 8 points** — as much as six K2 questions elsewhere on the paper.",
    "**Two rules that decide those six points:** first, **policy effectiveness is shown by security test results**, never by review alone — a policy can be in place, followed and still ineffective. Second, a security risk assessment must include **external stakeholders**, and when the stem is about **legal compliance** the stakeholder that matters is the **regulator who issues the guidelines**.",
    "**Suggested schedule:** Day 1 — Section 1 (AS-1.1.x). Day 2 — Section 1 (AS-1.2.x and 1.3.1) and Section 3. Day 3 — Section 2 and Section 4 Part A. Day 4 — Section 4 Part B and Section 5. Day 5 onwards — Section 6 daily, Section 7 the night before.",
  ],
}, process.argv[2]);
