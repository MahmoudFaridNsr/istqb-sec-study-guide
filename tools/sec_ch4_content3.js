// CT-SEC Chapter 4 — Sections 5 and 6
module.exports = function () {
  const B = [];

  // ================= SECTION 5 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 5 — Exam Tricks" });

  B.push({ h2: "5.1 Frequently tested topics (evidence-based)" });
  B.push({ table: { head: ["LO", "K", "Qs", "Pts", "Sample #", "Format used officially"], widths: [2.0, 0.8, 0.8, 0.8, 1.4, 8.2], rows: [
    ["AS-4.1.1", "K2", "1", "1", "#17", "“At what point in the SDLC…” → **component testing**"],
    ["AS-4.1.2", "**K3**", "1", "2", "#18", "When and how to document security requirements"],
    ["AS-4.2.1 / 4.3.1", "**K4**", "1", "**3**", "#19", "Production deficiency + proposed fix → **realistic concern**"],
    ["AS-4.4.1 / 4.4.4", "K2", "1", "1", "#20", "Why review compiler warnings?"],
    ["AS-4.4.2 / 4.4.5", "**K3**", "1", "2", "#21", "How to approach integration security testing"],
    ["AS-4.4.3", "**K4**", "1", "**3**", "#22", "EP minimum input set for SQLi"],
    ["AS-4.5.1 / 4.6.1", "**K3**", "1", "2", "#23", "Minimum condition list for a requirement"],
    ["AS-4.5.2", "**K3**", "1", "2", "#24", "Pick the valid acceptance criteria from 8"],
    ["**Chapter 4 total**", "—", "**8**", "**16**", "**#17–#24**", "**20% of the paper — the largest chapter**"],
  ] } });
  B.push({ box: { title: "The arithmetic", body: "Chapter 4 is **16 of 80 points**. Its four K3 questions are worth **8 points**, and **two of them share one requirement** (password reset). Master the **condition table** and the **acceptance-criteria filter** on that one requirement and you have answered **4 points** of the official paper." } });

  B.push({ h2: "5.2 Common distractors observed" });
  B.push({ ul: [
    "**Over-testing** — adding buffer overflow, SQLi and XSS when the question asks for **functional security** conditions; adding extra characters when it asks for the **EP minimum**.",
    "**Under-testing** — valid conditions only, or invalid only, or an attack input without a valid input.",
    "**“Logical but unspecified”** acceptance criteria — e.g. prompting the password rules on a failed reset.",
    "**Dropped qualifiers** — “more than two requests” vs “more than two requests **without a reset**”; “error” vs “**locked**”.",
    "**Integration as a sum** of component vulnerabilities, or as **reducing** risk.",
    "**Security requirements in design, or undocumented** for secrecy.",
    "**Warnings that “must be fixed”** — they are **potential issues to investigate**.",
    "**A fix that “won’t work”** when it clearly closes the gap — look instead for the **trade-off** (performance).",
  ] });

  B.push({ h2: "5.3 Keyword recognition (map words → answers)" });
  B.push({ table: { head: ["If the stem says…", "Think…"], widths: [6.0, 8.0], rows: [
    ["“secure coding practices followed”", "**Component testing**"],
    ["“security requirements documented”", "**Requirements phase, detailed and unambiguous**"],
    ["“secure”, “authorized personnel” in a requirement", "**Testability deficiency** — make specific"],
    ["“check on every request / every URL”", "**Performance trade-off**"],
    ["“compiler warnings”", "**Potential issues to investigate**"],
    ["“20 components tested; now integrate”", "**New vulnerabilities; expand testing** to the larger system"],
    ["“stubs and drivers removed”", "**New paths to vulnerabilities**"],
    ["“minimum”, “equivalence partitioning”", "**One per class** incl. a **valid** value"],
    ["“statement coverage 100%”", "Weaker than branch; check **decision outcomes**"],
    ["“all entry-to-exit paths”", "**Path coverage** (strongest, usually infeasible)"],
    ["“abuse cases”", "Requirements-based coverage / end-to-end scenario source"],
    ["“doing x should not allow y”", "**System-level** security scenario"],
    ["“acceptance criteria”", "**Restate the requirement exactly**"],
    ["“efficiency / usability enhancement”", "**Prone to sacrificing security controls** → regression"],
  ] } });

  B.push({ h2: "5.4 Typical traps" });
  B.push({ ul: [
    "**System vs acceptance.** System = first end-to-end, usually **development** environment, emergent properties. Acceptance = **realistic operational** environment, external interfaces and **real threat agents**.",
    "**Both are black-box.** Component and integration testing exploit internals.",
    "**Requirements-based vs data-driven vs model-based vs structural** coverage — classify the measure, not the tool.",
    "**Algebraic models → axioms**; **pre-post → cause-effect and postcondition disjuncts**; **transition models → states, transitions, pairs, cycles**.",
    "**Fuzzing** is random data in **massive amounts**; white-box fuzzing is **faster on small blocks** and **instruments the code**.",
    "**Maintenance types**: corrective (fix), adaptive (environment change), perfective (enhance).",
  ] });

  B.push({ h2: "5.5 How to eliminate wrong answers" });
  B.push({ ol: [
    "For **minimum sets**, strike any set lacking a **valid** case, then any with **duplicates of a class**.",
    "For **condition lists**, strike lists with only one polarity, then lists that add **attack** tests the stem did not request.",
    "For **acceptance criteria**, compare each number word-for-word with the requirement; strike sets containing an unspecified or mis-worded criterion.",
    "For **fix analysis**, if the fix plainly addresses the cause, strike “won’t fix”; then choose the **trade-off** the syllabus names (security vs performance or usability) that applies.",
    "For **lifecycle timing**, choose the **earliest** phase where the activity is possible.",
  ] });

  B.push({ h2: "5.6 Scenario-solving shortcuts" });
  B.push({ table: { head: ["Scenario shape", "Shortcut"], widths: [5.0, 9.0], rows: [
    ["Requirement text with rules and limits", "Build the **valid/invalid table** (3.3)"],
    ["Same requirement, “acceptance criteria”", "Apply the **filter** (3.4)"],
    ["Input field, “EP minimum”", "**One valid + one per invalid class asked about**"],
    ["Coverage numbers", "Find the **low** family and **where** the gaps are"],
    ["Design extract", "Run the **IEEE ten**; trust, authorize-after-authenticate, data/control separation are the usual hits"],
    ["Requirement extract", "Run the **six checklist headings**; testability first"],
    ["Change to a live system", "**End-to-end security regression**, especially for efficiency/usability changes"],
  ] } });

  B.push({ h2: "5.7 Common candidate mistakes" });
  B.push({ ul: [
    "Applying “more testing is better” to **minimum** questions.",
    "Applying “better requirements” instincts to **acceptance-criteria** questions — criteria **must not improve** on the requirement.",
    "Forgetting that **coverage is the key adequacy measure** at component level.",
    "Treating CERT’s ten practices as optional; one or two appear in every component question.",
  ] });

  B.push({ h2: "5.8 Mnemonics that carry the whole chapter" });
  B.push({ table: { head: ["Mnemonic", "Expands to"], widths: [3.6, 10.4], rows: [
    ["**T-R-T-E** (“Try Each Time”)", "Lifecycle reasons: prescribed **T**ime, **R**eview checkpoints, **T**est checkpoints, **E**ntry/exit criteria"],
    ["**P-C-V-T-U-P** (“Please Check Very Thoroughly, Users Pay”)", "Requirements checklist: **P**rivacy, **C**ompliance, **V**ulnerabilities, **T**estability, **U**sability, **P**erformance"],
    ["**R-D-M-S**", "Coverage families: **R**equirements-based, **D**ata-driven, **M**odel-based, **S**tructural"],
    ["**“Sum? No — Some new”**", "Integration is not the sum of component vulnerabilities; new attack vectors appear"],
    ["**“Valid + Invalid, nothing invented”**", "K3 design questions in one line"],
    ["**“Faster = Weaker”**", "Usability/efficiency enhancements are prone to sacrificing security"],
  ] } });

  B.push({ h2: "5.9 Chapter 4 mind map" });
  B.push({ table: { head: ["Branch", "Leaves"], widths: [3.4, 10.6], rows: [
    ["**Lifecycle**", "Built in, not patched · four reasons · phase objectives and activities · black-box system/acceptance"],
    ["**Requirements**", "Five truths · six-heading checklist · ambiguous terms"],
    ["**Design**", "Security-degrading practices · IEEE ten"],
    ["**Component**", "Static then dynamic · white-box · fuzzing · overflows, malicious code, backdoors · creativity · CERT ten · coverage families · control-flow criteria"],
    ["**Integration**", "Not a sum · mitigation possible · top-down/bottom-up timing · scaffolding removal"],
    ["**System / acceptance**", "Emergent properties · x-not-y · use/abuse/process/state models · realistic environment · criteria early · global vs specific"],
    ["**Maintenance**", "Resist defeat · usability/efficiency risk · end-to-end security regression · all change types"],
  ] } });

  // ================= SECTION 6 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 6 — Revision Notes" });
  B.push({ h2: "6.1 One-page chapter summary" });
  B.push({ p: "**Lifecycle.** Security is built in through design and verification, not patched in. Integrating testing gives prescribed times, review and test checkpoints, and entry/exit criteria. Each phase has security objectives and activities: requirements (all perspectives, detailed and unambiguous), design (meet them), implementation (secure code, component tests and reviews), system (end-to-end in an approximate target environment), acceptance (users vs criteria in the operational environment), maintenance (confirmation and regression after any change)." });
  B.push({ p: "**Requirements and design.** Analyze requirements with the six-heading checklist — privacy, compliance, vulnerabilities, testability, usability, performance; vague words are the first deficiency. Analyze designs against the IEEE ten; trust, authorization after authentication, and data/control separation are the usual failures." });
  B.push({ p: "**Component and integration.** Static, then dynamic. White-box targets controls and measures coverage; fuzzing finds memory faults; structural testing finds overflows, malicious code and backdoors. Design component tests from CERT’s ten practices, focused by risk. Adequacy is judged by coverage — requirements-based, data-driven, model-based, structural. Integration creates new attack vectors; removing scaffolding exposes new paths." });
  B.push({ p: "**System, acceptance, maintenance.** System tests probe “doing x should not allow y” with scenarios from use, abuse, process and state models. Acceptance criteria are defined early and restate the requirement precisely. After any change, run end-to-end security regression scenarios — especially after efficiency or usability improvements." });
  B.push({ h2: "6.2 Key definitions to memorize" });
  B.push({ table: { head: ["Term", "Definition"], widths: [3.4, 10.6], rows: [
    ["Fuzz testing", "Massive amounts of random data input to discover vulnerabilities"],
    ["Backdoor", "Undocumented developer-only interface bypassing security controls"],
    ["Abuse case", "Description of misuse; source for scenarios and coverage"],
    ["Path coverage", "All entry-to-exit paths — strongest, usually infeasible"],
    ["Branch coverage", "Percentage of decision outcomes exercised"],
    ["Statement coverage", "Percentage of executable lines exercised"],
  ] } });
  B.push({ h2: "6.3 High-priority concepts (study first)" });
  B.push({ ol: [
    "Coverage families and EP minimum (**AS-4.4.3**, 3 pts).",
    "Requirements checklist and IEEE ten (**AS-4.2.1 / 4.3.1**, 3 pts).",
    "Acceptance-criteria filter (**AS-4.5.2**, 2 pts) and condition table (**AS-4.5.1**, 2 pts).",
    "Lifecycle activities (**AS-4.1.2**, 2 pts) and reasons (**AS-4.1.1**, 1 pt).",
    "Integration not a sum; scaffolding; CERT ten (**AS-4.4.x**, 1 + 2 pts).",
  ] });
  B.push({ h2: "6.4 Last-minute revision sheet" });
  B.push({ box: { kind: "ok", title: "If you read nothing else", body: [
    "Secure coding checked at **component testing** — as soon as code is written.",
    "Security requirements: **requirements phase, detailed and unambiguous**.",
    "Vague requirement words → **testability** deficiency. Branch-visit-only unlock → **usability**.",
    "Session/URL check on every request → fixes it, **costs performance**.",
    "Compiler warnings → **potential issues to investigate**.",
    "Integration → **new vulnerabilities; expand testing**.",
    "EP minimum → **one valid + one invalid per class** (‘ and ab123).",
    "Conditions → **valid and invalid for every rule, no attacks unless asked**.",
    "Acceptance criteria → **exact restatement**; “without a reset”, “locked”; nothing logical-but-unspecified.",
    "Efficiency changes → **end-to-end security regression**.",
  ] } });
  B.push({ h2: "6.5 Memorization checklist" });
  B.push({ table: { head: ["✓", "I can…"], widths: [0.8, 13.2], rows: [
    ["☐", "give the four lifecycle reasons with an example each"],
    ["☐", "state objectives and activities for all six phases"],
    ["☐", "list the six requirements checklist headings with a question each"],
    ["☐", "name eight of the ten IEEE design approaches"],
    ["☐", "name the three structural-testing vulnerabilities and define a backdoor"],
    ["☐", "recite the CERT ten"],
    ["☐", "classify any coverage measure into its family"],
    ["☐", "build a valid/invalid condition table from a requirement"],
    ["☐", "filter candidate acceptance criteria"],
    ["☐", "design an end-to-end security regression set"],
  ] } });
  B.push({ h2: "6.6 Exam-day quick review" });
  B.push({ ul: [
    "Largest chapter: **16 points**. Expect **two scenario questions on one requirement**.",
    "**Minimum** means minimum. **Acceptance criteria** mean the requirement, exactly.",
    "**Integration adds; it does not sum.**",
  ] });

  return B;
};
