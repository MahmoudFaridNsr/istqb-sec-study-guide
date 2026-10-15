// CT-SEC Chapter 7 — Section 2, Key Concepts: each concept explained from the ground up.
module.exports = function () {
  const B = [];
  B.push({ h1: "Section 2 — Key Concepts" });
  B.push({ lead: "Section 1 gives the syllabus wording objective by objective. This section explains what that wording means. Each card builds one idea in order: plain words first, then how it works, an example, how the exam uses it, and what it is easily confused with." });

  B.push({ h2: "2.1 The storyline of Chapter 7" });
  B.push({ p: "Chapter 7 is about the **end of the test process**: deciding whether testing is done, and telling people what was found. Two things make this harder for security than for ordinary testing. **First, the target moves:** what counts as “secure enough” changes as new threats appear, so expectations and acceptance criteria must be **revisited**. **Second, the results are dangerous:** a list of vulnerabilities helps attackers, so it goes **only to those who need to know**, and each audience gets **the level of detail it needs**: a summary of risk impact at the top, specifics further down." });

  B.push({ h2: "2.2 Evaluation and reporting" });
  B.push({ concept: {
    title: "Revising security expectations and acceptance criteria (AS-7.1.1, guaranteed K2)",
    plain: "Testing is complete when results meet the **security expectations, exit criteria and/or acceptance criteria**. But you **cannot know every security risk at the start** of a project, and stakeholders may **change their minds** about how much security they need. So the criteria must be **revised as the project evolves**.",
    how: ["**Measure** the results and **evaluate status** against the expectations and criteria to decide whether testing is complete.", "**New threats change expectations.** For example, news of a new attack makes stakeholders demand **more** security than they first asked for.", "That is why **security risk assessments are revisited throughout the project**, and their results **fed back into test planning and execution**."],
    example: "Halfway through a project, a widely reported attack on a competitor exploits weak multi-factor fallback via SMS. The product owner now requires app-based MFA. The acceptance criteria, the risk assessment and the remaining test plan are all updated, and “SMS fallback works” is **no longer** an acceptable result.",
    exam: "Official Q38: why reassess security risk expectations frequently? → **Stakeholders make business decisions based on the associated risk levels** (what risk is acceptable, and which mitigation plans to fund). Reject: everyone educated on **all** risks at **all** times, a **manual** user mitigation plan, and keeping expectations **from changing** (they **should** change).",
    confuse: "**Revising** criteria because the risk picture changed is correct. **Lowering** criteria just to declare testing finished is not what the syllabus means.",
  } });
  B.push({ concept: {
    title: "Keeping security test results confidential (AS-7.2.1, K2 pool)",
    plain: "After testing, the tester knows the system’s **weak points better than almost anyone**. With security testing, those weak points are **ways in for an attacker**. So results are shared **only with those who need to know**, and **being conservative with sharing is good practice**.",
    how: ["The difference from ordinary testing is the **possible negative impact of telling people other than the direct stakeholders**.", "Developers get the **limited parts** they need to fix the code. **Infrastructure staff** get the infrastructure findings.", "Often **the same issues exist in production**, so a leaked test report can be an immediate attack guide."],
    example: "A penetration test finds that the HR portal allows privilege escalation. The full report goes to the security manager and the HR system owner. The developers get the specific defect and the steps to reproduce it. The company-wide newsletter says only that “a security test of HR systems was completed and findings are being addressed”.",
    exam: "Official Q39: the important aspect of security test results → **the fewer people that know, the better.** Reject: publishing them to users and stakeholders, sharing them with **all** developers across the enterprise, and “always classify by criticality” (true, but not the **most important** aspect).",
    confuse: "**Need to know** is not **secrecy from everyone**. Stakeholders who must decide or act get what they need, at the right level of detail.",
  } });
  B.push({ concept: {
    title: "Controls and data-gathering for status reporting (AS-7.2.2, K2 pool)",
    plain: "Security defects are judged **more sensitive** than ordinary defects and are usually given a **higher severity**, so **management watches them more closely**. The data behind security status reports must therefore be **timely, accurate and precise**, and collected through **proper controls**, for example feeding a **security test dashboard**.",
    how: ["Report the **nature of each defect and its implied risk** precisely.", "Assess the **impact** carefully and check the **accuracy** of the test results before reporting.", "Make reports available in a **well-defined, timely** way.", "**Good practice:** ask management **how and when** they want to see security defect information (dashboard, weekly briefing, immediate alert for critical issues)."],
    example: "Management agrees with the test manager that new critical security findings are reported to the CISO **within four hours**, while the dashboard shows open security defects by severity, updated nightly from the restricted category of the defect tracker. The data is only as good as the tracker, so testers must log consistently.",
    exam: "If an option makes security reporting **less** precise or **slower** than functional reporting, it is wrong. The syllabus wants it **more** precise and accurate because of the higher severity and focus.",
    confuse: "A dashboard is **an example** of a data-gathering and reporting mechanism, not a requirement. The point is **timely, accurate, precise** source data.",
  } });
  B.push({ concept: {
    title: "Analyzing an interim security status report (AS-7.2.3, guaranteed K4)",
    plain: "Reports can be produced **during** testing (interim) or **at the end**. **Early reporting is encouraged, because it leaves more time to fix vulnerabilities.** A good security report follows an **eight-section structure** and is judged on **accuracy, understandability and stakeholder appropriateness**.",
    how: ["**The eight sections:** **1 identifier** · **2 summary** (2a **executive summary**, 2b **key findings**) · **3 variances** (process followed, deviations, methods and tools) · **4 comprehensive assessment** (coverage against the plan’s criteria, and **why items were not tested**) · **5 summary of results** (**resolved** vulnerabilities and their fixes, and **unresolved** ones) · **6 evaluation** (status **against exit criteria**, and **risks and the impact of unresolved vulnerabilities**) · **7 summary of activities** · **8 approvals**.", "**Effectiveness depends on:** **timing** (early enough to act) · **content** (accurate and complete) · **recipients** (authorized, need-to-know) · **tuning to the recipients** (an executive report differs from one for a system architect; **several reports** may be needed)."],
    method: ["**Accuracy:** do the numbers add up (found = resolved + unresolved)? Are coverage claims backed by the plan’s criteria? Are untested items explained?", "**Understandability:** is there an executive summary with key findings? Is risk stated in **business** terms before the technical detail?", "**Stakeholder appropriateness:** is exploit-level detail restricted to need-to-know readers? Does each audience get the level of detail it needs?"],
    example: "An interim report for the board lists 14 open vulnerabilities with CVE numbers and exploit steps on page 1, and states the overall risk only on the last page. **Problems:** wrong audience detail (exploit steps for a board), the risk impact is **not in the summary**, and confidentiality is broken. **Fix:** the summary states the business risk impact. Section 6 details the risk by vulnerability. Exploit steps go to the technical report only.",
    exam: "Official Q40 (3 points): for a high-risk project, articulate risk as **risk impact in the summary, then detailed in terms of specific vulnerabilities later.** Reject a full risk assessment in the summary, risk only in the last section, and no risk in the summary at all.",
    confuse: "**Summary** = headline impact (what it means for the business). **Section 6b** = the detailed risks and the impact of each unresolved vulnerability. The answer needs **both**, in that order.",
  } });

  B.push({ h2: "2.3 Fuzzy points clarified" });
  B.push({ box: { kind: "warn", title: "Places where the wording is easy to misread", body: [
    "**The three report-quality tests (accuracy, understandability, stakeholder appropriateness) come from the learning objective.** The checks under each are this guide’s method. The syllabus gives the eight sections and the four effectiveness factors.",
    "**“Summary” appears twice in the eight sections.** Section 2 is the **summary** (executive summary and key findings). Section 5 is the **summary of results** (resolved and unresolved vulnerabilities). Q40’s “summary” is section 2.",
    "**“The fewer the better” does not mean no report.** It means restricted distribution. Q40 still wants risk **in** the summary, for the authorized audience.",
    "**Interim vs final.** The syllabus encourages **early** (interim) reports because they leave more remediation time. A final report may **also** need to be confidential, depending on whether the vulnerabilities have been fixed (Chapter 3).",
  ] } });
  return B;
};
