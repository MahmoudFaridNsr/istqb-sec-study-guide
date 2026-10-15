# Review notes — what was corrected and clarified

A full review of the nine guides against the CT-SEC 2016 syllabus and the official sample exam.
The aim was to make the guides **faster to understand** and **safer to study from**. That meant
explaining concepts properly instead of compressing them, fixing the few places that were wrong,
and marking the places where the wording is easy to misread.

---

## 1. Key Concepts rewritten (all nine chapters)

**Problem.** Section 2 (“Key Concepts”) was a set of one-line bullet lists, for example
*“Hierarchy: policy, strategy (organization) → approach, tasks (project)”*. That works as a reminder
if you already understand the topic. If you do not, it does not teach you anything, so readers ended
up memorising words without understanding them, which does not hold up in K3/K4 scenario
questions.

**Change.** Section 2 of every guide is now a sequence of **concept cards** (74 in total). Each card
has some or all of these rows:

| Row | What it gives you |
| --- | --- |
| **In plain words** | The idea with no jargon |
| **How it works** | The mechanism or list, in the syllabus’s terms |
| **How to test it / How to defend / Method** | Where relevant: the test, the protective measure, or the step-by-step method for a K4 |
| **Example** | A worked, concrete scenario (often the official sample-exam question, worked through) |
| **Exam angle** | How the exam asks about it and which option wins |
| **Don’t confuse** | The distractor or neighbouring concept that catches people |

Every chapter’s Section 2 now also starts with **2.1 The storyline**, a short explanation of how the
chapter’s ideas connect, and ends with a **“Fuzzy points clarified”** box (see section 3 below). The
keyword glossary is kept, after the cards.

## 2. Flashcards removed

Section 6 (Flashcards, 294 cards) has been removed from every guide. The old Section 7 (Revision
Notes) is now **Section 6**. The study plan’s flashcard habit is replaced by explaining one concept
card aloud each day, with your own example.

## 3. Errors and misleading content fixed

| Where | Problem | Fix |
| --- | --- | --- |
| Ch 4, Part B **Q27** (EP minimum for a 4-digit PIN) | The “correct” set had valid, non-numeric and too-long, but **no too-short** value, and the rationale called length one class. Too short and too long are two separate invalid partitions, so the set taught incomplete EP | Correct option now has **1234 · 12a4 · 123 · 12345**, and the rationale explains why there are two length partitions |
| Ch 1, Section 1, **auditor task table** | Static/dynamic labels for every task were presented as syllabus fact. The syllabus only names *witnessing processes* as dynamic | Column labelled as the guide’s reading, with a note underneath |
| All chapters, **Part B question labels** | Questions carry the K-level of their **learning objective**, so quick recall items were labelled K3/K4 and could mislead about difficulty | A note at the start of every Part B explains the labels |
| Ch 1–9, **“How to use this guide”** boxes | Referred to the old flashcard and revision sections and called Section 2 a compression | Rewritten for the new six-section structure |

The 45 official questions, their answers and the quoted syllabus wording were **not changed**.

## 4. Fuzzy points now called out in the guides

Each chapter’s “Fuzzy points clarified” box lists the places where the syllabus or the sample exam
is easy to misread. The most exam-relevant ones:

- **Ch 1:** “risk assessment” means two things (the whole NIST process, and the step that assigns a
  value) · audit is a “manual examination” and yet uses tools at architectural level · read the risk
  matrix by meaning (“medium likelihood × high impact = high”), not by cell position.
- **Ch 2:** security policy vs security testing policy vs test policy · Q7’s retry item is
  functional only because the stem has no lockout · executive (business protection) ≠ senior
  management (due diligence).
- **Ch 3:** evaluation runs *during* execution, though Q11 says evaluation comes “after” execution
  (each test is evaluated after it runs) · “isolated” depends on malware risk · Q12’s high-level
  schedule is not the “tasks and time for each” element.
- **Ch 4:** “minimum” means one value per class in EP, but every stated rule (valid and invalid,
  nothing extra) in condition lists · where system testing runs (development environment that
  approximates the target) · statement vs branch vs path coverage.
- **Ch 5:** RSA 2048 (syllabus) vs 768 (sample-exam rationale) · negative/positive IDS models are
  not false negatives/positives · hashing is listed as “used during encryption”.
- **Ch 6:** forensic phases (3) vs steps (5) · “any attack can be traced” is not “every attacker is
  found”.
- **Ch 7:** “summary” (section 2) vs “summary of results” (section 5) · need-to-know is not no
  report.
- **Ch 8:** “probe the system rather than the application” is the security-tool distinction · the
  K4 is really a Chapter 5 firewall question.
- **Ch 9:** objective IDs printed without “AS-” · §9.1.3 and §9.3.2 have no objective of their own.

## 5. Build fixes

- `tools/build_all.sh` used `declare -A`, which fails on the bash 3.2 that ships with macOS. It now
  uses a plain array.
- `tools/to_pdf.py` needed `import uno` in the system Python, which is not possible on macOS
  (LibreOffice’s bundled Python cannot be started on its own). It now runs the export as a macro
  **inside** LibreOffice, in a throw-away profile, so `soffice` on `PATH` is all it needs.
- `tools/verify.sh` reports concept cards instead of flashcards, and accepts `PYTHON=` to point at
  an interpreter that has pdfplumber.
