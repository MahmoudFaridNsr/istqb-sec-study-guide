# ISTQB® CT-SEC — Complete Study Guide

Chapter-by-chapter study guides for the **ISTQB® Certified Tester Advanced Level — Security Tester
(CT-SEC, formerly CTAL-SEC), Syllabus 2016**, plus the prerequisites, background material and study
plans that make the syllabus click instead of just being memorised.

Nine guides, **249 pages**, **205 practice questions** and **294 flashcards**. Every learning
objective explained, every official sample-exam question mapped to the objective it tests.

> **Unofficial.** Not affiliated with, endorsed by, accredited by or sponsored by the ISTQB®.
> ISTQB® is a registered trademark of the International Software Testing Qualifications Board.
> See [`NOTICE.md`](NOTICE.md) for full copyright and attribution, and
> [`docs/COPYRIGHT-RISK.md`](docs/COPYRIGHT-RISK.md) before publishing a fork.

> **Check the exam is still offered before you book.** The ISTQB® site still lists CT-SEC
> (syllabus v1.0, 2016), but ISTQB® has since released a **Security Test Engineer (CT-STE)**
> syllabus, and third-party sources describe CT-SEC as being split into new security modules.
> Confirm with your exam provider which syllabus your exam is set against.

---

## The exam in one table

| | |
| --- | --- |
| **Questions** | 45 |
| **Points** | **80** — K2 = 1 point, K3 = 2 points, K4 = 3 points |
| **Time** | 120 minutes (150 with the 25% non-native-language allowance) |
| **Pass mark** | 65% = **52 points** |
| **K-levels** | K2 = 20 questions (20 pts) · K3 = 15 (30 pts) · K4 = 10 (30 pts) |
| **Syllabus** | Version 2016, released by the ISTQB® General Assembly on 18 March 2016 |
| **Entry requirement** | Foundation Level certificate **and** at least three years of relevant academic, practical or consulting experience |

---

## The guides

Each guide is a self-contained `.docx` with a cover page, live table of contents and seven sections:
**1** syllabus explanation per objective · **2** key concepts · **3** tables and summaries ·
**4** question bank with answers · **5** exam tricks · **6** flashcards · **7** revision notes.

| # | Chapter | Read | Edit | Exam Qs | Points | Teaching | Pts/hr | Pages | Practice Qs | Cards |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | The Basis of Security Testing | [PDF](guides/pdf/01-the-basis-of-security-testing.pdf) | [docx](guides/01-the-basis-of-security-testing.docx) | 4 | 8 | 105 min | 4.6 | 34 | 22 | 39 |
| 2 | Security Testing Purposes, Goals and Strategies | [PDF](guides/pdf/02-security-testing-purposes-goals-and-strategies.pdf) | [docx](guides/02-security-testing-purposes-goals-and-strategies.docx) | 6 | 11 | 130 min | **5.1** | 32 | 26 | 35 |
| 3 | Security Testing Processes | [PDF](guides/pdf/03-security-testing-processes.pdf) | [docx](guides/03-security-testing-processes.docx) | 6 | 12 | 140 min | **5.1** | 33 | 26 | 42 |
| 4 | Security Testing Throughout the Software Lifecycle | [PDF](guides/pdf/04-security-testing-throughout-the-software-lifecycle.pdf) | [docx](guides/04-security-testing-throughout-the-software-lifecycle.docx) | **8** | **16** | 225 min | 4.3 | 36 | 32 | 42 |
| 5 | Testing Security Mechanisms | [PDF](guides/pdf/05-testing-security-mechanisms.pdf) | [docx](guides/05-testing-security-mechanisms.docx) | 8 | 12 | **240 min** | 3.0 | 34 | 32 | 48 |
| 6 | Human Factors in Security Testing | [PDF](guides/pdf/06-human-factors-in-security-testing.pdf) | [docx](guides/06-human-factors-in-security-testing.docx) | 5 | 9 | 105 min | **5.1** | 26 | 22 | 35 |
| 7 | Security Test Evaluation and Reporting | [PDF](guides/pdf/07-security-test-evaluation-and-reporting.pdf) | [docx](guides/07-security-test-evaluation-and-reporting.docx) | 3 | 5 | 70 min | 4.3 | 18 | 16 | 18 |
| 8 | Security Testing Tools | [PDF](guides/pdf/08-security-testing-tools.pdf) | [docx](guides/08-security-testing-tools.docx) | 3 | 5 | 55 min | **5.5** | 19 | 15 | 19 |
| 9 | Standards and Industry Trends | [PDF](guides/pdf/09-standards-and-industry-trends.pdf) | [docx](guides/09-standards-and-industry-trends.docx) | 2 | 2 | 40 min | 3.0 | 17 | 14 | 16 |
| | **Total** | | | **45** | **80** | 1,110 min | | **249** | **205** | **294** |

The `.docx` files keep a live table of contents (right-click → *Update Field* in Word). The PDFs
are rendered with the table of contents already filled in, for reading on GitHub or on a phone.

**Recall alone cannot pass this exam.** The 20 K2 questions are worth only **20 of the 80 points**.
Even with every K2 right you still need **32 of the 60 points** carried by the 25 K3 and K4
scenario questions. Every guide therefore puts its weight on the scenario objectives and on the
reasoning the official rationale uses.

**Where the points are.** Chapter 4 is the largest chapter (**16 points, one-fifth of the paper**)
and, with Chapter 3, forms the process core — **28 points, over a third of the exam**. Chapter 5 is
the longest to teach (**240 minutes**) for only **12 points**; its sixteen objectives feed eight
questions, so roughly half of what you learn there is not examined on any given paper.

**Best value per hour.** Chapter 8 (**5.5 points per teaching hour**), then Chapters 2, 3 and 6
(**5.1**). The lowest are Chapters 5 and 9 (**3.0**).

**Guaranteed objectives.** The Exam Structure Table fixes one question on each of these; the rest
are drawn from pools of objectives:

| Chapter | Guaranteed objectives (K-level, points) |
| --- | --- |
| 1 | AS-1.2.1 (K2, 1) · **AS-1.2.2 (K4, 3)** |
| 2 | AS-2.4.2 (K3, 2) · AS-2.5.1 (K3, 2) · AS-2.6.3 (K3, 2) |
| 3 | AS-3.1.1 (K3, 2) · **AS-3.2.1 (K4, 3)** · AS-3.4.2 (K2, 1) · **AS-3.5.1 (K4, 3)** |
| 4 | AS-4.1.1 (K2, 1) · AS-4.1.2 (K3, 2) · **AS-4.4.3 (K4, 3)** · AS-4.5.2 (K3, 2) |
| 5 | none — 4 K2 and 4 K3 drawn from the 16 objectives |
| 6 | AS-6.1.2 (K3, 2) · **AS-6.1.4 (K4, 3)** · AS-6.3.2 (K3, 2) |
| 7 | AS-7.1.1 (K2, 1) · **AS-7.2.3 (K4, 3)** |
| 8 | AS-8.1.1 (K2, 1) · **AS-8.2.1 (K4, 3)** |
| 9 | none — 2 K2 drawn from the 4 objectives |

---

## Start here

| If you… | Read |
| --- | --- |
| are fuzzy on SQL injection, XSS, TLS, DMZs, IDS, Nmap or the Foundation Level test process | [`docs/PREREQUISITES.md`](docs/PREREQUISITES.md) |
| want the official documents, the syllabus's own references and hands-on practice, mapped to chapters | [`docs/RESOURCES.md`](docs/RESOURCES.md) |
| want a day-by-day plan | [`docs/STUDY-PLAN.md`](docs/STUDY-PLAN.md) |
| want the exam mechanics, scoring maths and question formats | [`docs/EXAM-STRATEGY.md`](docs/EXAM-STRATEGY.md) |
| are forking or publishing this | [`NOTICE.md`](NOTICE.md) then [`docs/COPYRIGHT-RISK.md`](docs/COPYRIGHT-RISK.md) |

**You still need the official documents.** They are free. Download them before you start —
[`docs/RESOURCES.md`](docs/RESOURCES.md) has the links. They are deliberately **not** committed to
this repository.

---

## How to use a guide

1. **Section 1 once, slowly.** It walks the learning objectives in syllabus order, quotes the
   wording that gets examined, and shows exactly how the official sample exam used each objective.
2. **Sections 2 and 3 to compress.** Then rebuild the chapter's key table on blank paper. If you
   can reproduce the six security test plan elements (Ch3), the requirements checklist and coverage
   families (Ch4) and the mechanism → weakness → test table (Ch5) from memory, you have already
   secured a large share of the paper.
3. **Section 4 with the answer box covered.** Read the rationale even when you were right — the
   reasoning is the transferable part, not the answer letter.
4. **Section 5 before the exam.** Distractor patterns, keyword → answer mappings, elimination rules.
5. **Section 6 daily.** Spaced repetition; three clean passes per chapter.
6. **Section 7 the night before.** One-page summary, last-minute sheet, exam-day checklist.

---

## The ten things that decide the most marks

A cross-chapter distillation. If you learn nothing else, learn these.

1. **Testing proves; auditing and policy review only describe.** Policy effectiveness is shown by
   **security test results** — a policy can be in place, followed, and still ineffective (Ch1,
   3 points). **Audit finds; test proves.**
2. **Everything flows from the security policy.** Security policy → security testing policy →
   strategy (organization) → approach and tasks (project). When testing is sporadic and unfunded,
   the first step is **the policy, aligned to the approach** (Ch2, 3 points).
3. **Scope too small = no confidence; scope too large = resources run out.** And the greater the
   need for asset integrity, the greater the coverage (Ch2).
4. **Six stakeholders, six benefits.** Executive → business protection · senior → due diligence ·
   customers → protection from fraud · compliance → legal obligations · regulatory → regulations
   followed · privacy → private data secure (Ch2).
5. **A security test plan has six elements** — scope, who, schedule, tasks and time, environment,
   authorizations. The missing one is the answer (Ch3, 3 points).
6. **A found vulnerability: production first, secure tracker, notify, look for more — never the
   stakeholder report.** Results go to those who need to know; **the fewer people that know the
   better** (Ch3, Ch6, Ch7).
7. **Test exactly what the specification says.** EP minimum = one value per class **including a
   valid one**; condition lists = valid and invalid for every rule, **no attack tests unless asked**;
   acceptance criteria = **the requirement restated exactly**, nothing "logical but unspecified"
   (Ch4 — the official exam spends two questions on one password-reset requirement).
8. **Integration is not a sum** — new attack vectors appear, and removing scaffolding reveals new
   paths (Ch4).
9. **Every mechanism has a named weakness, and the test exploits it.** Anti-malware only knows the
   known (EICAR, pilot first); signature IDS misses the unknown (evasion); behaviour IDS drifts
   (feed it malicious traffic); obfuscation is reversible (brute force); humans are the weakest link
   (social engineering) (Ch5).
10. **Investigate like a forensic analyst.** Start at the first event on the timeline; assume the
    attacker is still inside until you know how they got in; never assume good intent (Ch6).

---

## Repository layout

```
istqb-ct-sec-study-guide/
├── README.md                   ← you are here
├── NOTICE.md                   ← third-party copyright, attribution, takedown contact
├── LICENSE                     ← CC BY-NC-SA 4.0, scoped to original material only
├── .gitignore                  ← blocks official ISTQB® PDFs from ever being committed
├── guides/
│   ├── *.docx                  ← the nine chapter study guides (editable source)
│   └── pdf/                    ← same nine, rendered with a filled-in table of contents
├── docs/
│   ├── PREREQUISITES.md        ← what to know before the syllabus stops hurting
│   ├── RESOURCES.md            ← official documents, cited references, practice — mapped to chapters
│   ├── STUDY-PLAN.md           ← four-week and ten-day schedules
│   ├── EXAM-STRATEGY.md        ← scoring maths, question formats, time budget
│   └── COPYRIGHT-RISK.md       ← read before making a fork public
└── tools/                      ← the generators; the guides are built, not hand-written
    ├── render.js               ← shared renderer, owns all styling
    ├── build_common.js         ← shared cover page, contents and assembly
    ├── sec_ch<N>_content1|2|3.js ← chapter content as typed blocks
    ├── build_sec_ch<N>.js      ← per-chapter entry point (chapter metadata)
    ├── build_all.sh            ← rebuild all nine guides and PDFs
    ├── to_pdf.py               ← LibreOffice/UNO PDF export with the TOC populated
    └── verify.sh               ← page / question / flashcard / markup checks
```

**The guides are generated.** To fix a typo, edit the relevant `tools/sec_ch<N>_content*.js` and
rebuild — see [`tools/README.md`](tools/README.md). Do not hand-edit the `.docx` files; the next
rebuild will overwrite them.

---

## Notes on the official documents

These are real, they are in ISTQB®'s own files, and knowing about them prevents confusion:

1. **The GA Sample Exam has no learning-objective tags** ("LOs removed" in its revision history).
   The LO shown against each official question in the guides is **inferred** from question order
   and point value. The inference is consistent with the Exam Structure Table: the sample exam's
   points per chapter are exactly **8 · 11 · 12 · 16 · 12 · 9 · 5 · 5 · 2 = 80**.
2. **Sample Q27's rationale says a key "minimum of 768 bits should be used"**, while the syllabus
   (§5.3.2) says **an RSA key under 2048 bits is considered insecure (as of 2015)**. The correct
   option (symmetric encryption modes) is unaffected. Answer key-size questions from the syllabus.
3. **Sample Q30's rationale labels the first rejected option "B"** where it plainly means option A.
4. **The syllabus says cryptography ensures "… and repudiation"** (§5.3.1); read it as
   **non-repudiation**.
5. **Learning-objective identifiers are inconsistent in the syllabus**: Chapter 9's appear without
   the "AS-" prefix, AS-5.8.2 is printed "As-5.8.2", §0.5 refers to sections 2.3.1 and 2.7.2 that
   do not exist, and §9.1.3 and §9.3.2 carry no learning objective.
6. **Six obvious typos in the official sample-exam text are corrected in the guides** ("than" →
   "that" in #9, "tools is" → "tool is" in #15, "isses" → "issues" in #16, "XXS" → "XSS" in #23,
   "Linked In" → "LinkedIn" in #33, "is is" → "is" in #35). Nothing else in the questions, options
   or answers was changed.

---

## Sources

Everything in the guides is traceable to the official ISTQB® documents:

- ISTQB® *Certified Tester Advanced Level Syllabus — Security Tester*, Version 2016, released
  18 March 2016
- ISTQB® *Advanced Level Security Testing Sample Exam — Questions*, Version 1.0 GA, 15 March 2016
- ISTQB® *Advanced Level Security Testing Sample Exam — Answers*, Version 1.0 GA, 15 March 2016
- ISTQB® *Exam Structure Tables* (CT-SEC section) and the CT-SEC certification page on istqb.org

A small number of explicitly labelled additions — illustrative examples in tables, protective
measures in Chapter 6, working definitions in the glossaries — are the maintainer's own and are
marked as such in the guides.

Copyright © International Software Testing Qualifications Board. Used under the ISTQB® condition of
use for extracts with acknowledgement — full notice in [`NOTICE.md`](NOTICE.md).

The external learning resources in [`docs/RESOURCES.md`](docs/RESOURCES.md) belong to their
creators, who are credited individually there and in [`NOTICE.md`](NOTICE.md).

---

## Contributing

Corrections are welcome — especially anywhere a guide diverges from the official syllabus wording.
Open an issue with the chapter, the section and the syllabus reference. Please do **not** submit
pull requests that add more verbatim official exam content; see
[`docs/COPYRIGHT-RISK.md`](docs/COPYRIGHT-RISK.md) for why.
