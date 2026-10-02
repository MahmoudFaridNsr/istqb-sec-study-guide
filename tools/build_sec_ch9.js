// Chapter 9 entry point:  node build_sec_ch9.js "../guides/09-standards-and-industry-trends.docx"
require("./build_common")({
  n: 9,
  title: "Standards and Industry Trends",
  sections: "9.1 Understanding Security Testing Standards · 9.2 Applying Security Standards · 9.3 Industry Trends",
  los: "4 examinable (9.1.1, 9.1.2, 9.2.1, 9.3.1) · all K2",
  teaching: "40 minutes — **2 points**, 3.0 points per teaching hour",
  questions: "**2 of 45 questions · 2 of 80 points.** K2 = 2, drawn from the four objectives",
  keywords: "consensus-based standard",
  official: "**#44 – #45** (1 + 1 points)",
  howto: [
    "**Section 1** explains the four learning objectives and the two un-numbered sections (9.1.3, 9.3.2). **Section 2** compresses them. **Section 3** holds two short filter tables. **Section 4** is the question bank, **Section 5** exam tactics, **Section 6** spaced repetition, **Section 7** the night before.",
    "**What makes Chapter 9 unusual:** it is the **smallest chapter** — two K2 points. Learn it in **one sitting** and do not over-invest.",
    "**The rule that decides it:** standards are **a framework and a starting point** — for testing (no blank page, tailorable, due diligence) and for **contract negotiation** — and become **binding** under a regulator or when compliance was claimed. **“Shall” is mandatory; “should” and “may” are optional.**",
    "**Suggested schedule:** one session for everything; Section 6 a few times; Section 7 the night before.",
  ],
}, process.argv[2]);
