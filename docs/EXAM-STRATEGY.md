# Exam strategy — CT-SEC

Everything in this file comes from the ISTQB® CT-SEC certification page, the *Exam Structure
Tables* (CT-SEC section), the Advanced Level Security Tester syllabus (2016) and the official
Sample Exam with its answers. Where something is inferred rather than stated, it says so.

---

## 1. The numbers

| | |
| --- | --- |
| Questions | **45** |
| Points | **80** — **K2 = 1 point, K3 = 2 points, K4 = 3 points** |
| Pass mark | **65% = 52 points** |
| Time | **120 minutes** |
| Time with the non-native-language allowance | **150 minutes** (+25%) |
| Entry requirement | **Foundation Level certificate** and **at least three years** of relevant academic, practical or consulting experience (the exam board sets its own evidence rules) |

### K-level distribution

| K-level | Questions | Points each | Points |
| --- | --- | --- | --- |
| K2 — Understand | 20 | 1 | **20** |
| K3 — Apply | 15 | 2 | **30** |
| K4 — Analyze | 10 | 3 | **30** |
| **Total** | **45** | | **80** |

There are **no K1 questions**. The syllabus says all its content, terms and the major elements of
the standards it lists shall at least be remembered and understood, even where an objective does not
say so — so recall is assumed, not examined on its own.

### Chapter distribution

| Chapter | Qs | Points | K2 | K3 | K4 | Teaching | Points per teaching hour |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 — The Basis of Security Testing | 4 | 8 | 2 | 0 | 2 | 105 min | 4.6 |
| 2 — Purposes, Goals and Strategies | 6 | 11 | 2 | 3 | 1 | 130 min | **5.1** |
| 3 — Security Testing Processes | 6 | 12 | 2 | 2 | 2 | 140 min | **5.1** |
| 4 — Throughout the Software Lifecycle | **8** | **16** | 2 | 4 | 2 | 225 min | 4.3 |
| 5 — Testing Security Mechanisms | 8 | 12 | 4 | 4 | 0 | **240 min** | 3.0 |
| 6 — Human Factors | 5 | 9 | 2 | 2 | 1 | 105 min | **5.1** |
| 7 — Evaluation and Reporting | 3 | 5 | 2 | 0 | 1 | 70 min | 4.3 |
| 8 — Security Testing Tools | 3 | 5 | 2 | 0 | 1 | 55 min | **5.5** |
| 9 — Standards and Industry Trends | 2 | 2 | 2 | 0 | 0 | 40 min | 3.0 |
| **Total** | **45** | **80** | **20** | **15** | **10** | **1,110 min** | 4.3 |

> **How these figures were assembled.** The totals, the per-chapter question counts and the
> objectives with a fixed question come from the Exam Structure Tables. Several objectives share a
> question ("one K2 from AS-1.1.1 or AS-1.3.1"); those pools are reconstructed from the same table
> and cross-checked against the official Sample Exam, whose points per chapter are exactly
> **8 · 11 · 12 · 16 · 12 · 9 · 5 · 5 · 2**. If your exam provider publishes a newer structure
> table, it wins.

---

## 2. The arithmetic that should shape your study

**Recall cannot carry you.** The 20 K2 questions are **20 points**. The pass mark is **52**. A
perfect K2 score still leaves you needing **32 of the 60 scenario points** — **more than half of
every K3 and K4 point on the paper**. Every hour spent memorising lists must be matched by time on
the scenario questions in Section 4 of each guide.

**The process core decides the result.** Chapters 3 and 4 are **28 points**. Add Chapter 2 (**11**)
and you have **39 points — three-quarters of the pass mark — from three chapters** whose questions
are mostly scenario-based and pattern-driven.

**Three sensible target profiles:**

| Profile | Ch1 | Ch2 | Ch3 | Ch4 | Ch5 | Ch6 | Ch7 | Ch8 | Ch9 | Total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Comfortable pass | 6 | 9 | 9 | 12 | 9 | 7 | 4 | 4 | 2 | **62** |
| Bare pass | 5 | 8 | 8 | 10 | 7 | 6 | 3 | 4 | 1 | **52** |
| Recall-only (fails) | 2 | 2 | 2 | 2 | 4 | 2 | 2 | 2 | 2 | **20** — every K2 right, every scenario wrong |

**Cheapest points first.** Chapter 8 (**5.5 per hour**), then Chapters 2, 3 and 6 (**5.1**). The
guaranteed K3s of Chapter 2 — **six stakeholder benefits, the two scope consequences, the three
sources of objectives** — are **6 points from one evening**.

**Most expensive points.** Chapter 5: **240 minutes for 12 points**, sixteen objectives feeding
eight questions. Learn the mechanism → weakness → test table and stop.

---

## 3. Time budget in the room

At **120 minutes for 45 questions** you have **2 minutes 40 seconds per question** on average — but
the questions are not equal, and the long ones are worth three times the short ones.

| Type | Count | Suggested pace | Running total |
| --- | --- | --- | --- |
| K2 (1 point) | 20 | 60–75 seconds | ~24 min |
| K3 (2 points) | 15 | 2.5–3 minutes | ~66 min |
| K4 (3 points) | 10 | 4–4.5 minutes | ~108 min |
| **Review** | | | **~12 min spare** |

**With the 25% language allowance (150 minutes) you gain 30 minutes.** Spend them on the K4s.

**Practical rules:**

- **Answer every question.** There is no negative marking.
- **Points, not questions.** A K4 is worth three K2s. Never rush a 3-point scenario to save time
  for a 1-point recall item.
- **Read the long scenarios once, for the decisive fact.** In the official exam: *“the problems
  started shortly after a series of virus-infected emails”* (#36); *“this is an update of a version
  that is currently in production”* (#16); *“you have covered the following areas in your plan”*
  (#12).
- **Two questions share one requirement** (#23 and #24, password reset). Build the valid/invalid
  condition table once and reuse it.
- **Flag and move on.** If a K4 is not resolving in four minutes, mark it and come back.

---

## 4. Question formats used by the official sample exam

| Format | Where it appears | How to handle it |
| --- | --- | --- |
| **Purpose / benefit / characteristic** (“Which is a purpose of…?”) | #1, #5, #14, #26, #30, #32, #38, #39, #41, #44, #45 | Check the **verb**: audits reveal, controls prevent, tests prove |
| **Stakeholder selection** | #2, #10 | Whose **asset or duty** is at stake? Compliance → regulators; fraud → customers |
| **Numbered list → choose the valid subset** | #7, #24 | Work by **exclusion**; strike functional items and invented or mis-worded items |
| **“What is still missing?”** | #12 | Tick off the stem against the **six plan elements** |
| **Long failed-programme story → first step** | #9 | **Policy first** |
| **Which process step?** | #11 | What already exists → the answer is the **next** step |
| **Which test case is best?** | #13 | Exact numbers beat “several”; no insecure practices |
| **Found a vulnerability → what now?** | #16, #37 | **Production first**, secure tracker, notify, extent; never public reports |
| **Fix proposed → realistic concern** | #19 | If the fix works, look for the **trade-off** (performance) |
| **Minimum test set** | #22, #23 | One value per class **incl. valid**; valid **and** invalid per rule; no extras |
| **Mechanism → effective test** | #25, #27, #29, #31, #42 | Find the mechanism’s **named weakness**; the test exploits it |
| **Attacker / investigation scenario** | #34, #36 | Assume persistence; start at the **first event** |
| **Report structure** | #40 | Risk impact in the **summary**, detailed **later** |

---

## 5. Elimination rules that work across the paper

1. **Strike anything that guarantees** — safety, completeness, zero vulnerabilities, no outage.
2. **Strike anything that widens access to security results** — stakeholder reports, newsletters,
   enterprise-wide sharing.
3. **Strike options that skip a level** — approach before policy; testing policy before security
   policy; testing before authorization.
4. **Strike options that test more or less than asked** — attack tests in a functional condition
   list; extra values in an EP minimum; a set without a valid input.
5. **Strike options that invent rules** — “logical but not specified” acceptance criteria.
6. **Strike options that trust the attacker or assume a patch ends a breach.**
7. **When two options survive, choose the one in the syllabus’s own vocabulary.**

---

## 6. The patterns you should be able to run cold

```
Plan review           Scope · Who · Schedule · Tasks+time · Environment · Authorizations  → the gap
Found vulnerability   Production? → secure tracker → notify developer → test for more
EP minimum            one valid value + one per invalid class asked about
Condition list        each rule → valid case + invalid case; no attacks unless asked
Acceptance criteria   restate the requirement word for word; drop nothing, add nothing
Stakeholder benefit   Exec=protection · Senior=due diligence · Customers=fraud ·
                      Compliance=legal obligations · Regulatory=regulations · Privacy=private data
Mechanism test        name the weakness → the syllabus test that exploits it
Incident              first event on the timeline → external origin → insider
Report                summary (risk impact) → … → evaluation (detail by vulnerability)
```

---

## 7. Exam-day checklist

- [ ] Bring photo ID and your **Foundation Level** certificate details if your exam provider
      requires them; have evidence of experience ready if asked.
- [ ] Confirm whether you qualify for the **25% non-native-language allowance** (30 extra minutes)
      — it usually has to be requested when booking.
- [ ] Re-read Section 7 of each guide the night before; do not learn anything new.
- [ ] In the first two minutes, note on scratch paper: **52 to pass · K2/K3/K4 = 1/2/3 ·
      six plan elements · six stakeholder benefits · production first · policy first**.
- [ ] Give the K4s the time they are worth.
- [ ] Leave nothing blank.
