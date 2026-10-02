// Chapter 7 entry point:  node build_sec_ch7.js "../guides/07-security-test-evaluation-and-reporting.docx"
require("./build_common")({
  n: 7,
  title: "Security Test Evaluation and Reporting",
  sections: "7.1 Security Test Evaluation · 7.2 Security Test Reporting",
  los: "4 examinable (AS-7.1.1 – AS-7.2.3) · K2 = 3 · K4 = 1",
  teaching: "70 minutes — **5 points**, 4.3 points per teaching hour",
  questions: "**3 of 45 questions · 5 of 80 points.** K2 = 2 · **K4 = 1**. Guaranteed: **AS-7.1.1** (K2) and **AS-7.2.3** (K4). One K2 from 7.2.1/7.2.2",
  keywords: "acceptance criteria · attack vector · dashboard · exit criteria",
  official: "**#38 – #40** (1 + 1 + 3 points)",
  howto: [
    "**Section 1** explains the four learning objectives. **Section 2** compresses them. **Section 3**, **table 3.1 (where does it go in the report?)**, is the K4 in table form. **Section 4** is the question bank, **Section 5** exam tactics, **Section 6** spaced repetition, **Section 7** the night before.",
    "**What makes Chapter 7 unusual:** three questions, and **one of them is worth 3 points** — analyzing a security test status report for **accuracy, understandability and stakeholder appropriateness**.",
    "**The rule that decides it:** **risk impact goes in the summary and is detailed later by specific vulnerability**, and **security results go only to those who need to know** — “the fewer people that know the better”.",
    "**Suggested schedule:** one session for Sections 1–3, one for Sections 4–5; Section 6 daily; Section 7 the night before.",
  ],
}, process.argv[2]);
