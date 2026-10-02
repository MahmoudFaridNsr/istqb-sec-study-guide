// Chapter 4 entry point:  node build_sec_ch4.js "../guides/04-security-testing-throughout-the-software-lifecycle.docx"
require("./build_common")({
  n: 4,
  title: "Security Testing Throughout the Software Lifecycle",
  titleSize: 38,
  sections: "4.1 The Role of Security Testing in a Software Lifecycle · 4.2 … in Requirements · 4.3 … in Design · 4.4 … in Implementation Activities · 4.5 … in System and Acceptance Test Activities · 4.6 … in Maintenance",
  los: "12 examinable (AS-4.1.1 – AS-4.6.1) · K2 = 3 · K3 = 6 · K4 = 3",
  teaching: "225 minutes — **16 points**, 4.3 points per teaching hour",
  questions: "**8 of 45 questions · 16 of 80 points — the largest chapter.** K2 = 2 · **K3 = 4** · **K4 = 2**. Guaranteed: **AS-4.1.1** (K2), **4.1.2** (K3), **4.4.3** (K4), **4.5.2** (K3). Pools: 4.2.1/4.3.1 (K4) · 4.4.1/4.4.4 (K2) · 4.4.2/4.4.5 (K3) · 4.5.1/4.6.1 (K3)",
  keywords: "abuse case · fuzz testing",
  official: "**#17 – #24** (1 + 2 + 3 + 1 + 2 + 3 + 2 + 2 points)",
  howto: [
    "**Section 1** explains all twelve learning objectives — read it once, slowly. **Section 2** compresses it. **Section 3** holds the tables to reproduce from memory; **table 3.3 (rule → valid/invalid conditions)** and **table 3.4 (acceptance-criteria filter)** pay directly. **Section 4** is the question bank, **Section 5** exam tactics, **Section 6** spaced repetition, **Section 7** the night before.",
    "**What makes Chapter 4 unusual:** it is **one-fifth of the paper (16 points)** and the most hands-on chapter — four K3 test-design questions and two K4 analysis questions. **Only two of its eight questions are K2.** It is the chapter you cannot afford to be weak in.",
    "**The rule that decides most of it:** **test exactly what the specification says.** Minimum EP sets contain **one value per class including a valid one**; condition lists contain **the valid and invalid case for every stated rule and nothing else**; acceptance criteria **restate the requirement word for word** — “logical but unspecified” criteria are wrong. The official Sample Exam uses **one password-reset requirement for two questions**.",
    "**Suggested schedule:** Day 1 — §4.1–4.3 (lifecycle, requirements checklist, IEEE ten). Day 2 — §4.4 (component, CERT ten, coverage, integration). Day 3 — §4.5–4.6 and Section 3. Day 4 — Section 4 Part A, then Part B. Day 5 — Section 5. Day 6 onwards — Section 6 daily, Section 7 the night before.",
  ],
}, process.argv[2]);
