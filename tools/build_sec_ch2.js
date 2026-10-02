// Chapter 2 entry point:  node build_sec_ch2.js "../guides/02-security-testing-purposes-goals-and-strategies.docx"
require("./build_common")({
  n: 2,
  title: "Security Testing Purposes, Goals and Strategies",
  titleSize: 40,
  sections: "2.1 Introduction · 2.2 The Purpose of Security Testing · 2.3 The Organizational Context · 2.4 Security Testing Objectives · 2.5 The Scope and Coverage of Security Testing Objectives · 2.6 Security Testing Approaches · 2.7 Improving the Security Testing Practices",
  los: "10 examinable (AS-2.2.1 – AS-2.7.1) · K2 = 4 · K3 = 3 · K4 = 3",
  teaching: "130 minutes — **11 points**, 5.1 points per teaching hour",
  questions: "**6 of 45 questions · 11 of 80 points.** K2 = 2 · **K3 = 3** · K4 = 1. Guaranteed: **AS-2.4.2, 2.5.1, 2.6.3** (K3). Two K2 from 2.2.1/2.3.1/2.4.1/2.4.3; one K4 from 2.6.1/2.6.2/2.7.1",
  keywords: "cross-site scripting · data obfuscation · denial of service · information assurance · security policy · security testing · security vulnerability · software lifecycle · test strategy",
  official: "**#5 – #10** (1 + 1 + 2 + 2 + 3 + 2 points)",
  howto: [
    "**Section 1** explains all ten learning objectives — read it once, slowly. **Section 2** compresses it. **Section 3** holds the tables to reproduce from memory; **table 3.2 (stakeholder → benefit)** and **table 3.3 (security vs functional objective)** pay directly. **Section 4** is the question bank. **Section 5** is exam tactics, **Section 6** spaced repetition, **Section 7** the night before.",
    "**What makes Chapter 2 unusual:** **three K3 questions are guaranteed**, each worth 2 points, and each is decided by a short list — **six stakeholder benefits**, **two scope consequences**, **three sources of objectives**. That is **6 points from one evening of learning**, the best return in the first half of the syllabus.",
    "**The rule that decides the 3-point question:** everything flows from the **security policy**. When a scenario shows sporadic, unfunded, uncoordinated testing, the first step is to **create a security policy and a security testing policy and show how the approach aligns with them** — not to present an approach, a list of holes, or the lawyers.",
    "**Suggested schedule:** Day 1 — Section 1 up to AS-2.5.1. Day 2 — Section 1 from §2.6, and Section 3. Day 3 — Section 4 Part A and Section 2. Day 4 — Section 4 Part B and Section 5. Day 5 onwards — Section 6 daily, Section 7 the night before.",
  ],
}, process.argv[2]);
