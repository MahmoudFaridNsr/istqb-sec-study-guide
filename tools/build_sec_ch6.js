// Chapter 6 entry point:  node build_sec_ch6.js "../guides/06-human-factors-in-security-testing.docx"
require("./build_common")({
  n: 6,
  title: "Human Factors in Security Testing",
  sections: "6.1 Understanding the Attackers · 6.2 Social Engineering · 6.3 Security Awareness",
  los: "7 examinable (AS-6.1.1 – AS-6.3.2) · K2 = 4 · K3 = 2 · K4 = 1",
  teaching: "105 minutes — **9 points**, 5.1 points per teaching hour",
  questions: "**5 of 45 questions · 9 of 80 points.** K2 = 2 · **K3 = 2** · **K4 = 1**. Guaranteed: **AS-6.1.2** (K3), **6.1.4** (K4), **6.3.2** (K3). Two K2 from 6.1.1/6.1.3/6.2.1/6.3.1",
  keywords: "attacker · botnet · computer forensics · hacker · reconnaissance · script kiddies",
  official: "**#33 – #37** (1 + 2 + 1 + 3 + 2 points)",
  howto: [
    "**Section 1** explains all seven learning objectives — read it once. **Section 2** explains every key concept from the ground up — plain words, how it works, a worked example, the exam angle, and what it is easily confused with — and ends with the chapter’s **fuzzy points clarified**. If the syllabus wording in Section 1 feels dense, read the matching Section 2 card first. **Section 3** holds the tables to reproduce; **table 3.2 (investigation order)** decides the K4. **Section 4** is the question bank, **Section 5** exam tactics, **Section 6** is the revision sheet for the night before.",
    "**What makes Chapter 6 unusual:** it is about **people, not technology** — attackers, their reconnaissance and motives, forensics, social engineering and awareness. **Three of its five questions are guaranteed scenario items worth 7 points**, at one of the best rates per hour on the paper.",
    "**The rule that decides it:** think like an investigator. **Start where the evidence begins** (problems began after virus emails → trace the email), **assume the attacker is still inside** until you know how they got in, and **never assume good intent**. After any serious test finding, **check production first**, then turn the case into **awareness material**.",
    "**Suggested schedule:** Day 1 — Section 1 §6.1. Day 2 — §6.2–6.3, Sections 2–3. Day 3 — Section 4 and Section 5. Day 4 onwards — redo the questions you missed and re-read Section 2’s fuzzy points. Night before — Section 6.",
  ],
}, process.argv[2]);
