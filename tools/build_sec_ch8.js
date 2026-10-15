// Chapter 8 entry point:  node build_sec_ch8.js "../guides/08-security-testing-tools.docx"
require("./build_common")({
  n: 8,
  title: "Security Testing Tools",
  sections: "8.1 Types and Purposes of Security Testing Tools · 8.2 Tool Selection",
  los: "4 examinable (AS-8.1.1 – AS-8.2.3) · K2 = 3 · K4 = 1",
  teaching: "55 minutes — **5 points**, **5.5 points per teaching hour — the best return in the syllabus**",
  questions: "**3 of 45 questions · 5 of 80 points.** K2 = 2 · **K4 = 1**. Guaranteed: **AS-8.1.1** (K2) and **AS-8.2.1** (K4). One K2 from 8.2.2/8.2.3",
  keywords: "none listed by the syllabus",
  official: "**#41 – #43** (1 + 3 + 1 points)",
  howto: [
    "**Section 1** explains the four learning objectives. **Section 2** explains every key concept from the ground up — plain words, how it works, a worked example, the exam angle, and what it is easily confused with — and ends with the chapter’s **fuzzy points clarified**. If the syllabus wording in Section 1 feels dense, read the matching Section 2 card first. **Section 3** compares open source and commercial tools and maps needs to capabilities. **Section 4** is the question bank, **Section 5** exam tactics, **Section 6** is the revision sheet for the night before.",
    "**What makes Chapter 8 unusual:** it is the **best value per hour on the paper**, and its **3-point K4 is a firewall testing scenario** — the answer comes from **Chapter 5** (malformed packets and network fuzzing).",
    "**The rules that decide it:** **dynamic security tools probe the system, not just the application**; for an **open source (GPL) tool there is no vendor**, so maintenance depends on **your team’s capability**; for a commercial tool, judge the vendor’s **update frequency** against evolving threats.",
    "**Suggested schedule:** one session for Sections 1–3, one for Sections 4–5; redo missed questions and re-read Section 2’s fuzzy points; Section 6 the night before.",
  ],
}, process.argv[2]);
