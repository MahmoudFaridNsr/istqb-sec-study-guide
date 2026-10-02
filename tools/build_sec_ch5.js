// Chapter 5 entry point:  node build_sec_ch5.js "../guides/05-testing-security-mechanisms.docx"
require("./build_common")({
  n: 5,
  title: "Testing Security Mechanisms",
  sections: "5.1 System Hardening · 5.2 Authentication and Authorization · 5.3 Encryption · 5.4 Firewalls and Network Zones · 5.5 Intrusion Detection · 5.6 Malware Scanning · 5.7 Data Obfuscation · 5.8 Training",
  los: "16 examinable (AS-5.1.1 – AS-5.8.2) · K2 = 8 · K3 = 8 — one “understand” and one “test” objective per mechanism",
  teaching: "240 minutes — **the longest chapter** — **12 points**, 3.0 points per teaching hour",
  questions: "**8 of 45 questions · 12 of 80 points.** **K2 = 4** (drawn from the 8 K2 objectives) · **K3 = 4** (drawn from the 8 K3 objectives). In the Sample Exam each mechanism appeared once",
  keywords: "anti-malware · authentication · authorization · demilitarized zone · encryption · firewall · hashing · insider threat · intrusion detection system · malware · malware scanning · network zone · pharming · phishing · salting · system hardening · vulnerability scanner",
  official: "**#25 – #32** (2 + 1 + 2 + 1 + 2 + 1 + 2 + 1 points)",
  howto: [
    "**Section 1** walks the eight mechanisms, each with its K2 concept and K3 effectiveness test — read it once. **Section 2** puts each mechanism on one row. **Section 3**, **table 3.1 (mechanism → weakness → test)**, is the single most useful table in this guide. **Section 4** is the question bank, **Section 5** exam tactics, **Section 6** spaced repetition, **Section 7** the night before.",
    "**What makes Chapter 5 unusual:** it is the **longest chapter (240 minutes)** for only **12 points** — **3.0 points per hour**, the joint-lowest return. Sixteen objectives feed eight questions, so on any paper about half of the content is not examined. **Breadth beats depth here.**",
    "**The rule that decides it:** for every mechanism, **know the weakness the syllabus names, because the test exploits it** — anti-malware only knows the known (EICAR, pilot first), signature IDS misses the unknown (evasion), behaviour IDS drifts (feed it malicious traffic), obfuscation is reversible (brute force, decompilers), humans are the weakest link (social engineering, sticky notes).",
    "**Suggested schedule:** Day 1 — §5.1–5.4. Day 2 — §5.5–5.8 and Section 3. Day 3 — Section 4 and Section 5. Day 4 onwards — Section 6 daily, Section 7 the night before.",
  ],
}, process.argv[2]);
