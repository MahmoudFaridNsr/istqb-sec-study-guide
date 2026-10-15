// CT-SEC Chapter 4 — Sections 1 to 3
module.exports = function () {
  const B = [];

  // ================= SECTION 1 =================
  B.push({ h1: "Section 1 — Syllabus Explanation" });
  B.push({ p: "Chapter 4, **Security Testing Throughout the Software Lifecycle**, carries **12 learning objectives** across six sub-chapters (4.1 Role in a Lifecycle · 4.2 Requirements · 4.3 Design · 4.4 Implementation · 4.5 System and Acceptance · 4.6 Maintenance). The Exam Structure Table allocates **8 questions** and **16 of the 80 points** — **the largest chapter on the paper**, one-fifth of all points. Teaching time is **225 minutes** — **4.3 points per teaching hour**." });
  B.push({ p: "It is also the chapter with the **most K3 and K4** content: **four K3 questions and two K4s**. Only **two of its eight questions are K2**. You cannot pass CT-SEC comfortably without Chapter 4: a perfect score everywhere else is **64 points**, and a weak Chapter 4 makes 52 a tightrope." });
  B.push({ table: { head: ["LO ID", "K", "Objective (syllabus statement)", "Qs", "Pts"], widths: [1.7, 0.7, 9.6, 1.0, 1.0], rows: [
    ["AS-4.1.1", "K2", "Explain why security is best achieved within a lifecycle process.", "**1**", "1"],
    ["AS-4.1.2", "**K3**", "Implement the appropriate security-related activities for a given software lifecycle (e.g. iterative, sequential).", "**1**", "**2**"],
    ["AS-4.2.1", "**K4**", "Analyze a given set of requirements from the security perspective to identify deficiencies.", "1 of 2†", "3"],
    ["AS-4.3.1", "**K4**", "Analyze a given design document from the security perspective to identify deficiencies.", "1 of 2†", "3"],
    ["AS-4.4.1", "K2", "Understand the role of security testing during component testing.", "1 of 2‡", "1"],
    ["AS-4.4.2", "**K3**", "Implement component level security tests (abstract) given a defined coding specification.", "1 of 2§", "2"],
    ["AS-4.4.3", "**K4**", "Analyze the results from a given component level test to determine the adequacy of code from the security perspective.", "**1**", "**3**"],
    ["AS-4.4.4", "K2", "Understand the role of security testing during component integration testing.", "1 of 2‡", "1"],
    ["AS-4.4.5", "**K3**", "Implement component integration security tests (abstract) given a defined system specification.", "1 of 2§", "2"],
    ["AS-4.5.1", "**K3**", "Implement an end-to-end test scenario for security testing which verifies one or more given security requirements and tests a described functional process.", "1 of 2¶", "2"],
    ["AS-4.5.2", "**K3**", "Demonstrate the ability to define a set of acceptance criteria for the security aspects of a given acceptance test.", "**1**", "**2**"],
    ["AS-4.6.1", "**K3**", "Implement an end-to-end security retest/regression test approach based on a given scenario.", "1 of 2¶", "2"],
    ["**Chapter 4 total**", "—", "**K2 = 2 · K3 = 4 · K4 = 2**", "**8**", "**16**"],
  ] } });
  B.push({ lead: "Pools: † 4.2.1 / 4.3.1 (K4) · ‡ 4.4.1 / 4.4.4 (K2) · § 4.4.2 / 4.4.5 (K3) · ¶ 4.5.1 / 4.6.1 (K3). Sample Exam draws: **4.3.1** (Q19), **4.4.1** (Q20), **4.4.5** (Q21), **4.5.1** (Q23)." });
  B.push({ box: { title: "Exam allocation you must know", body: "Chapter 4 = **8 questions / 16 points**; Sample Exam **#17 to #24** (1 + 2 + 3 + 1 + 2 + 3 + 2 + 2 points). The two guaranteed K3s (**AS-4.1.2, 4.5.2**) and the guaranteed K4 (**AS-4.4.3**) are **7 points** on their own." } });
  B.push({ box: { kind: "warn", title: "The one thing that decides this chapter", body: "**Test exactly what the specification says — no more, no less.** The K3 questions in this chapter are **test-design exercises**: minimum equivalence classes for an input (Q22), the minimum condition set for a requirement (Q23), the acceptance criteria a requirement actually supports (Q24). The right answer **covers both valid and invalid behaviour of the stated rules**, does **not** add attack tests the question did not ask for, and does **not** invent rules the requirement does not state (“tempting and logical, but not specified”)." } });

  // --- 4.1 ---
  B.push({ h2: "AS-4.1.1 (K2) — Why Security Is Best Achieved Within a Lifecycle" });
  B.push({ box: { title: "Original syllabus statement", body: "Explain why security is best achieved within a lifecycle process." } });
  B.push({ p: "**Security is not tested or patched into an already-built application. Rather, it is achieved through security-oriented design and verification throughout the process of construction.** The concepts apply to **any lifecycle — sequential or iterative** [IEEE 12207]. The syllabus gives **four reasons** for integrating security testing into the lifecycle:" });
  B.push({ table: { head: ["Reason", "Syllabus example"], widths: [4.4, 9.6], rows: [
    ["**1. A prescribed time for security-related activities**", "When capturing needs, the analyst asks: **which levels of security access are needed? any assets needing special defenses? how “open” is the application? what are the security risks?** During **coding**, the developer has **the best opportunity to apply secure coding practices** against **SQL injection and buffer overflow** — finding them later is **difficult and costly** because many components may need the same fix."],
    ["**2. Checkpoints for review**", "**Security requirements or user stories reviewed** for the security aspects of user needs; **code changes reviewed to detect malicious coding by internal employees or contractors**."],
    ["**3. Checkpoints for testing**", "In development, **component tests documented and performed to verify secure coding practices** have been followed."],
    ["**4. Entry and exit criteria throughout the project**", "**No component accepted into an integrated test environment until all security-related activities (development and testing) are complete** — especially important later, when a vulnerability **could impact the entire system**."],
  ] } });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective", body: "Sample Q17: at what point should there be checking that **proper secure coding practices have been followed**? **Component testing** — official rationale: **the checking should be done as soon as the code is written.** The syllabus: in development, **component tests should be documented and performed to verify that secure coding practices have been followed**." } });

  B.push({ h2: "AS-4.1.2 (K3) — Security-Related Activities in the Software Lifecycle" });
  B.push({ box: { title: "Original syllabus statement", body: "Implement the appropriate security-related activities for a given software lifecycle (e.g. iterative, sequential)." } });
  B.push({ p: "These activities are **performed alongside other project activities, not in a separate lifecycle**." });
  B.push({ table: { title: "Objectives and activities by phase", head: ["Phase", "Objectives", "Activities"], widths: [2.2, 5.8, 6.0], rows: [
    ["**Requirements**", "**Understand and identify security needs from all perspectives inside and outside the organization** (e.g. the customer’s need for private data to stay secure) · **document them in a detailed and unambiguous way** so implementation and testing are **traceable** and requirements can be **verified and validated**. Requirements may go beyond user needs: **regulatory, technical, business**.", "**Define all impacted and knowledgeable people** · gather needs from each group via **interviews, workshops**, etc. (can be done with other elicitation) · **document so they can be reviewed and traced** · **review for correctness, completeness, understandability and non-ambiguity**."],
    ["**Design**", "**Create a design that meets the stated security requirements** — requirements express needs; design translates them into a workable solution.", "**Analyze** the documented requirements · arrive at **the most workable approach to develop securely** · **document** the design appropriately for the lifecycle (whiteboard in iterative, models in others)."],
    ["**Implementation** (coding)", "**Translate requirements and design into secure code** meeting functional needs · implement other **procedures or technology** (firewalls, tokens…).", "**Create code meeting security requirements** · **component testing** for correctness, efficiency and security · **component reviews** to visually inspect the same."],
    ["**System testing**", "**End-to-end test** of the full system (**hardware, software, data, people, procedures**) after integration · test that **security requirements are implemented correctly from a system perspective**. Iterative models can system-test **much more frequently**.", "Perform security tests **in some approximation of the final target environment** — a **transition from the development environment**."],
    ["**Acceptance testing**", "**Users or their agents perform security testing against security-related acceptance criteria** — often focused on **functional security controls and processes**.", "**Install into the operational environment** · **perform tests based on acceptance criteria** · **determine acceptance** from results."],
    ["**Maintenance**", "Corrective, adaptive or perfective changes; **confirmation testing** of fixes and **regression testing** of core functionality to **ensure no new vulnerabilities** and **verify existing defenses still effective**.", "Covers **upgrades (OS, databases), coding changes, data conversions, platform migrations** — **treated with the same care as original development**."],
  ] } });
  B.push({ p: "**System and acceptance testing are essentially black-box (stimulus-response).** Component and integration testing are complementary — they **consider and exploit the internal architecture of components and their interactions**." });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K3, 2 points)", body: "Sample Q18: a safety-critical medical system — when and how should security requirements be documented? **In a detailed and unambiguous way in the requirements documents during the requirements phase.** Rejected: **not documented formally** to hide them (they should be documented, but **protected from those who don’t need to know**); **during design** once the code approach is known (they may be **refined** in design, but are **captured in requirements**); **only functional access and availability** requirements (security requirements also include **secure coding practices, etc.**)." } });

  // --- 4.2 ---
  B.push({ h2: "AS-4.2.1 (K4) — Analyzing Requirements from the Security Perspective" });
  B.push({ box: { title: "Original syllabus statement", body: "Analyze a given set of requirements from the security perspective to identify deficiencies." } });
  B.push({ p: "**Five general truths about requirements** set the context:" });
  B.push({ ol: [
    "Many organizations **struggle to write basic requirements** that are **clear, unambiguous, complete, correct and testable**.",
    "Requirements are **highly subject to change**, so **maintaining** them is a challenge.",
    "**Special skills** are needed to understand user, compliance and technical needs before documenting them.",
    "Requirements **contain gaps and errors**, so **both verification and validation** are needed.",
    "Requirements **should contain quality characteristics** — security, performance, usability — but **these are often overlooked in favor of functionality only**.",
  ] });
  B.push({ p: "**An effective technique is a checklist.** The syllabus’s security starting point has **six headings**:" });
  B.push({ table: { title: "The security requirements checklist", head: ["Heading", "Checklist questions"], widths: [3.0, 11.0], rows: [
    ["**Privacy needs**", "All **user groups and their data privacy needs** identified and documented? All **data types** impacted identified with privacy needs? **User access rights** identified and defined?"],
    ["**Compliance needs** (to security policies)", "All **relevant security policies** identified and documented? Any **exceptions to policies** identified and documented?"],
    ["**Common vulnerabilities**", "All **common and known vulnerabilities for the feature** identified as **known risks**? (They change over time, are defined as risks at requirements time, and **become the basis for security tests**.)"],
    ["**Testability**", "Written so **security tests and other tests can be written** from it? **Ambiguous terms** — e.g. **“processing must be secure”**, **“access is only granted to authorized personnel”** — identified and made **specific and testable**?"],
    ["**Usability**", "Trade-off: a login **so confusing customers give up and go elsewhere**. Appropriate level of security process **for the function**? Procedures **clear and understandable**? **Remedies for legitimate users** who have access problems?"],
    ["**Performance**", "Trade-off: **high levels of encryption can slow performance**. Appropriate level of **security efficiency** for the function?"],
  ] } });
  B.push({ box: { kind: "ok", title: "K4 method for a requirements question", body: ["Run the six headings over the requirement text. Typical deficiencies:", "**Privacy** — a data type or user group with no stated privacy need. **Compliance** — no reference to the governing policy, or an unstated exception. **Vulnerabilities** — an input feature with no stated injection or overflow risk. **Testability** — vague words (“secure”, “authorized”, “appropriate”). **Usability** — no remedy for a locked-out legitimate user. **Performance** — no bound on the cost of a security mechanism.", "The best answer usually identifies the deficiency **that blocks testing** (ambiguity) or the one **with the highest risk** to the asset in the stem."] } });

  // --- 4.3 ---
  B.push({ h2: "AS-4.3.1 (K4) — Analyzing a Design from the Security Perspective" });
  B.push({ box: { title: "Original syllabus statement", body: "Analyze a given design document from the security perspective to identify deficiencies." } });
  B.push({ p: "**Security-degrading design practices should be identified and avoided.** Testing contributes by **recognizing designs likely to be vulnerable to compromise** and **directing design toward strong, identifiable security properties**. The **IEEE Computer Society Center for Secure Design** recommends ten key approaches:" });
  B.push({ table: { title: "IEEE Center for Secure Design — ten design approaches", head: ["#", "Approach", "Deficiency it reveals in a design"], widths: [0.6, 6.2, 7.2], rows: [
    ["1", "**Earn or give, but never assume, trust**", "Client-side checks trusted by the server; implicit trust between components"],
    ["2", "**Use an authentication mechanism that cannot be bypassed or tampered with**", "Alternate paths (deep links, APIs) that skip login"],
    ["3", "**Authorize after you authenticate**", "Authorization checked once at login and never again; URLs usable by anyone"],
    ["4", "**Strictly separate data and control instructions; never process control instructions from untrusted sources**", "Injection — data interpreted as commands"],
    ["5", "**Define an approach that ensures all data are explicitly validated**", "Unvalidated inputs, inconsistent validation"],
    ["6", "**Use cryptography correctly**", "Home-grown crypto, weak keys, wrong modes"],
    ["7", "**Identify sensitive data and how it should be handled**", "Sensitive data unclassified, logged or cached"],
    ["8", "**Always consider the users**", "Security so hard to use that it is bypassed"],
    ["9", "**Understand how integrating external components changes your attack surface**", "Third-party libraries and services added without review"],
    ["10", "**Be flexible when considering future changes to objects and actors**", "Designs that break when roles or components change"],
  ] } });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K4, 3 points)", body: ["Sample Q19: in production, **copying a URL from an authorized session into an unauthorized session** lets the attacker continue with the authorized user’s rights — and change the admin password. The fix: **check the session ID and the user ID any time a URL is used**. Realistic concern? **It will fix the problem, but performance may be adversely affected** — official rationale: **this level of checking will slow down the system because it will have to check on each screen change.**", "Rejected: it **will** fix the problem (so not a and d); **no impact on usability** (unless you are the hacker). Reasoning link: the defect violated **“authorize after you authenticate”**; the fix restores it, and the syllabus’s requirements checklist names the **security/performance trade-off**."] } });

  // --- 4.4 ---
  B.push({ h2: "§4.4 — Security Testing in Implementation: the frame" });
  B.push({ p: "Security testing **begins at the lowest level of implementation**, exercising separate components that will be assembled into the system. **After the static evaluation** of components, testing adds **appraisal of dynamic behavior in response to both valid and invalid inputs**." });

  B.push({ h2: "AS-4.4.1 (K2) — Security Testing During Component Testing" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the role of security testing during component testing." } });
  B.push({ h3: "White-box / glass-box considerations (§4.4.1.1)" });
  B.push({ ul: [
    "**Static testing** — the whole range of **inspection, walkthrough, audit, technical review** — has already been noted.",
    "**White-box (structural)** tests are designed **with visibility into design or implementation**; **black-box** (functional and non-functional) is **stimulus-response** without structural information.",
    "White-box testing can **target specific controls implemented within the module** and determine their effectiveness; visibility also lets **coverage be measured** — % statements, % decision outcomes, % logic paths.",
    "Structural security testing may use **automated static analysis tools and security scanning tools**.",
    "**Fuzz testing** discovers vulnerabilities **by inputting massive amounts of random data, called fuzz**, to the component or system. **White-box fuzzing** on small blocks (functions, classes) **may get usable results in much less time than black-box fuzzing**; white-box fuzz tools detect **memory corruption, buffer overflow, etc. by instrumenting the code**.",
  ] });
  B.push({ table: { title: "Vulnerabilities identifiable and fixable during structural testing", head: ["Vulnerability", "Note"], widths: [5.0, 9.0], rows: [
    ["**Memory buffer overflows**", "Also found by dynamic memory tools (Chapter 3)"],
    ["**Malicious code inserted by an internal employee or contractor**", "Why code changes are reviewed (§4.1.1)"],
    ["**“Backdoor” access**", "**Access via an undocumented interface only known to the developer**, intentionally implemented **to bypass normal security controls**"],
  ] } });
  B.push({ h3: "Functional security testing considerations (§4.4.1.2)" });
  B.push({ p: "**Adequacy at any level is determined by confirming satisfaction of specified security requirements** — **in addition to** observing responses to **stresses not explicitly specified** in requirements and risk assessments. **Creativity is required** because testers are **probing for what developers have overlooked**." });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective", body: "Sample Q20: why review **compiler warnings** during component testing? **Because they indicate potential issues that should be investigated** — they **could lead to security gaps**. Rejected: they are problems that **must** be fixed (warnings **do not necessarily require a fix**); functional defects or maintainability (true perhaps, but **not related to security testing**). “**Heed compiler warnings**” is item 2 of the CERT list in §4.4.2." } });

  B.push({ h2: "AS-4.4.2 (K3) — Security Test Design at the Component Level" });
  B.push({ box: { title: "Original syllabus statement", body: "Implement component level security tests (abstract) given a defined coding specification." } });
  B.push({ p: "One set of high-level coding best practices is **CERT’s “Top 10 Secure Coding Practices”**: tests for any component should include **assessment of possible violations** of these practices." });
  B.push({ table: { title: "CERT Top 10 Secure Coding Practices — and an abstract component test for each", head: ["#", "Practice", "Abstract component-level test"], widths: [0.6, 4.6, 8.8], rows: [
    ["1", "**Validate input**", "Supply out-of-range, wrong-type, over-length and metacharacter inputs; expect rejection"],
    ["2", "**Heed compiler warnings**", "Review warnings at the highest level; investigate each as a potential security issue"],
    ["3", "**Architect and design for security policies**", "Check the component enforces the policy it is responsible for (e.g. role check present)"],
    ["4", "**Keep it simple**", "Flag unnecessary complexity in security-relevant code (high cyclomatic complexity)"],
    ["5", "**Default deny**", "Request an action not explicitly permitted; expect denial"],
    ["6", "**Adhere to the principle of least privilege**", "Verify the component runs and calls with the minimum rights needed"],
    ["7", "**Sanitize data sent to other systems**", "Send data containing control characters to downstream calls; verify encoding/escaping"],
    ["8", "**Practice defense in depth**", "Disable one control; verify another still prevents the attack"],
    ["9", "**Use effective quality assurance techniques**", "Confirm static analysis, reviews, fuzzing were applied"],
    ["10", "**Adopt a secure coding standard**", "Check the code against the adopted standard’s rules"],
  ] } });
  B.push({ lead: "The third column is illustrative; the syllabus lists the ten practices and says tests should assess violations of them." });
  B.push({ p: "**Focus:** tests against checklists should be based on **a well-documented risk analysis incorporating realistic threat modeling** — **focus on the most crucial requirements in terms of the probability of attack and the consequences of compromise**." });

  B.push({ h2: "AS-4.4.3 (K4) — Analysis of Security Tests at the Component Level" });
  B.push({ box: { title: "Original syllabus statement", body: "Analyze the results from a given component level test to determine the adequacy of code from the security perspective." } });
  B.push({ p: "**One key measure of adequacy is test coverage**, and coverage measures **derive from the nature of the testing performed**:" });
  B.push({ table: { title: "Four families of coverage", head: ["Testing type", "What it gives assurance of", "Coverage measures"], widths: [2.6, 4.8, 6.6], rows: [
    ["**Requirements-based** (black-box)", "The system **satisfies its requirements as specified**, without regard for implementation", "**% of requirements tested · % of specified use/abuse cases tested · % of critical functions, scenarios, or mission threads tested**"],
    ["**Data-driven**", "Behavior across a **range and combination of input data**, with **as few values as possible**: divide the data space into **equivalence classes** and select **one representative from each class**", "**Equivalence class coverage · pairwise · N-wise** coverage criteria"],
    ["**Model-based**", "Coverage **in terms of a chosen modeling notation**", "**Pre-post notation:** cause-effect coverage, coverage of all **disjuncts in the postcondition**. **Algebraic:** coverage of the **axioms**. **Transition-based** graphs: **% nodes (states), % transitions, % transition-pairs, % cycles**"],
    ["**Structural**", "Based on **visibility into the actual implementation**", "**% packages, classes, methods, decisions or lines of executable code** executed — **lines = statement coverage**"],
  ] } });
  B.push({ h3: "Control-flow criteria" });
  B.push({ ul: [
    "**Cyclomatic complexity** = **how many different independent paths exist** through an element; visualized as a **control flow graph** (nodes = decision points, arcs = paths).",
    "**Path coverage** — all entry-to-exit paths — is **the strongest** control-flow criterion, but **exhaustive path testing is generally not feasible because of loops**.",
    "Less stringent alternatives: **critical path coverage** (selected logical paths considered critical) and **branch coverage** (**% of decision outcomes** exercised).",
  ] });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K4, 3 points)", body: ["Sample Q22: SQL injection tests for a field accepting **up to 5 alphanumeric characters**, using **equivalence partitioning** for the **minimum** set. Answer: **‘ and ab123** — **one test for SQL injection and one for a valid input**.", "Rejected: **bbbbb, 12345, ‘** and **%, ‘, @, ab123** have **more than the minimum**; **‘ alone** is **not enough because it doesn’t test the valid input**. The rationale adds that more SQL-injection characters would be advisable in practice, **but the question asks to apply EP and get the minimum**. Data-driven rule: **one representative per class** — here, two classes: valid alphanumeric and SQL metacharacter."] } });

  B.push({ h2: "AS-4.4.4 (K2) — Security Testing During Component Integration Testing" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the role of security testing during component integration testing." } });
  B.push({ ul: [
    "As components integrate into subsystems and the full system, **breach possibilities are not simply the summation of the vulnerabilities in each component** — **new attack vectors become possible** through interactions **between components and with larger system and organizational elements**.",
    "Conversely, **some interactions might mitigate or block** possible breach sequences.",
    "Testers must again be **creative** in looking for what developers overlooked.",
    "Integration testing shows **the complexity of a system design and the stability of its behavior**; the **integration approach (top-down or bottom-up)** can affect **the timing of revealing security concerns** or the need for **additional security-specific tests**.",
  ] });

  B.push({ h2: "AS-4.4.5 (K3) — Security Test Design at the Component Integration Level" });
  B.push({ box: { title: "Original syllabus statement", body: "Implement component integration security tests (abstract) given a defined system specification." } });
  B.push({ p: "As with component testing, integration tests should be designed on **well-documented risk analysis incorporating realistic threat modeling**. **Scaffolding (stubs and drivers)** may be needed to test less-than-complete paths. As more real components are added, **scaffolding is incrementally removed**, allowing **fuller assessment of functionality** and revealing **new paths to vulnerabilities**." });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K3, 2 points)", body: "Sample Q21: 20 components, each extensively security-tested; now integration. Approach? **New vulnerabilities are likely present in the integrated components and in the larger system and infrastructure that is now testable, so testing should expand to include these new areas.** Rejected: integration = **summation** of component vulnerabilities (a); testing **only interfaces plus retest** (b — too narrow); risks **reduced** by integration so only integration points tested (d — risks are **likely increased**)." } });

  // --- 4.5 ---
  B.push({ h2: "AS-4.5.1 (K3) — Security Testing in System Testing" });
  B.push({ box: { title: "Original syllabus statement", body: "Implement an end-to-end test scenario for security testing which verifies one or more given security requirements and tests a described functional process." } });
  B.push({ ul: [
    "System testing is **the first end-to-end exercising of the fully integrated components**. Usually in a **development environment**, it should reveal **emergent properties** not observable before integration.",
    "Security requirements are **typically considered in conjunction with one or more functional requirements**: **“In the process of doing x the system should not allow y to happen.”** As functional tests run, **probe for ways security constraints might be violated**.",
    "Functional requirements **address the imperatives**. **Use cases, abuse cases, process models and state transition models** describe **procedures** from which **end-to-end security scenarios** are defined.",
  ] });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K3, 2 points)", body: ["Sample Q23: the **password-reset requirement** (two of three security questions; emailed link; link disabled after 1 hour; two requests without reset, then helpdesk; other errors lock the ID). Minimum test conditions for **functional security**? **Invalid user; valid user; 2 correct answers; 2 incorrect answers; good email; bad email; reset with good password; reset with bad password; link good; link expired; two requests without reset; three requests without reset.**", "Rejected: **valid conditions only** (b); **error conditions only** (c); and (d), which **expands into attack testing** (buffer overflow, SQLi, XSS) beyond the functional security asked for. **Each rule in the requirement yields a valid and an invalid condition.**"] } });

  B.push({ h2: "AS-4.5.2 (K3) — Security Testing in Acceptance Testing" });
  B.push({ box: { title: "Original syllabus statement", body: "Demonstrate the ability to define a set of acceptance criteria for the security aspects of a given acceptance test." } });
  B.push({ ul: [
    "Acceptance testing differs from system testing by being performed **in a realistic operational environment**, if not the actual one — allowing evaluation of **performance and other behaviors through external interfaces**, and placing the system **where external threat agents will seek weaknesses day to day**.",
    "It should **validate that initial project goals have been delivered**, by designing and performing tests that **acceptance criteria are met**. **Security needs should be documented in the acceptance criteria.**",
    "**The best time to define acceptance criteria is before system development or purchase**, so supplier and acquirer (even in the same organization) reach an initial understanding. Criteria **commonly change or emerge**; **analyze their impact on security testing**.",
    "Criteria may be **global** — applied to all functions: **user authentication, user rights, encryption levels, audit trails** — or **specific** — e.g. **payments above an amount require two people to approve**.",
  ] });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K3, 2 points)", body: ["Sample Q24, same password-reset requirement: valid acceptance criteria are **1, 3, 5, 6, 8** — reset succeeds under the stated conditions (1); **more than two requests without a reset → ID locked** (3); **more than two security questions missed → ID locked** (5); **email error → ID locked** (6); **reset password works for login** (8).", "Why not the others: **2** omits “without a reset” (3 is the correct form); **4** says “error” where the requirement says **locked** (5 is correct); **7** (prompting with password rules) is **tempting and logical, but not specified in the requirement**. **Acceptance criteria restate the requirement precisely — they do not improve it.**"] } });

  // --- 4.6 ---
  B.push({ h2: "AS-4.6.1 (K3) — Security Testing in Maintenance" });
  B.push({ box: { title: "Original syllabus statement", body: "Implement an end-to-end security retest/regression test approach based on a given scenario." } });
  B.push({ ul: [
    "**Regression testing** confirms previously acceptable behaviors remain after modifications. In the negative aspects of security testing, that means checking **the system continues to successfully resist attempts to defeat established controls**.",
    "**Enhancements to usability or efficiency are especially prone to sacrificing security controls.**",
    "Security regression tests focus on **confirming all security requirements** and **testing for new vulnerabilities** introduced by maintenance.",
    "Regression suites built from **individual function tests are often insufficient** for security. **End-to-end regression scenarios are more robust** and give **higher confidence that complete transactions can be performed securely**.",
    "Define **a set of security test scenarios run each time a change is made** — changes include **hardware, configuration files, OS, DBMS, networking and software**; **any** of these can cause regression defects with security impact.",
  ] });
  B.push({ table: { title: "The syllabus’s example end-to-end security regression scenarios", head: ["Scenario"], widths: [14.0], rows: [
    ["Users can **log in and complete a purchase securely without compromising personal information**."],
    ["Users can **only perform actions defined in their user rights and privileges** — a payroll user may **add a new employee** but **not access their banking information**."],
  ] } });

  // ================= SECTION 2 =================
  B.push({ pagebreak: true });
  B.push(...require("./sec_ch4_concepts")());
  B.push({ h2: "2.7 Chapter 4 keyword glossary" });
  B.push({ table: { head: ["Keyword", "Working definition for the exam"], widths: [3.4, 10.6], rows: [
    ["**abuse case**", "A use-case-like description of how a system could be misused; a source for end-to-end security scenarios and a requirements-based coverage measure (% use/abuse cases tested)."],
    ["**fuzz testing**", "Inputting **massive amounts of random data (fuzz)** to discover vulnerabilities; white-box fuzzing instruments code to detect memory corruption and buffer overflows."],
    ["**backdoor**", "Undocumented interface known only to the developer, intentionally implemented to bypass normal security controls."],
    ["**cyclomatic complexity**", "Number of independent paths through an element."],
    ["**scaffolding**", "Stubs and drivers used during integration; removed incrementally as real components arrive."],
  ] } });
  B.push({ box: { title: "Two keywords, one chapter", body: "The syllabus lists only **abuse case** and **fuzz testing** as Chapter 4 keywords, but the questions lean on the vocabulary of **coverage** and **test levels** from Foundation Level. If any of statement, branch, path, equivalence partitioning or state transition coverage feels shaky, revise it before Section 4." } });

  // ================= SECTION 3 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 3 — Tables and Summaries" });
  B.push({ table: { title: "3.1 Which level finds what?", head: ["Level", "Typical security focus", "Box"], widths: [3.0, 9.0, 2.0], rows: [
    ["Static (reviews, analysis)", "Requirements gaps, design flaws, coding-standard violations, malicious code", "—"],
    ["Component", "Secure coding practices, input validation, buffer overflow, backdoors, fuzzing", "White + black"],
    ["Integration", "New attack vectors from interactions; scaffolding removal reveals paths", "White + black"],
    ["System", "End-to-end; emergent properties; transaction security; “x should not allow y”", "**Black**"],
    ["Acceptance", "Security acceptance criteria in a realistic environment; external interfaces", "**Black**"],
    ["Maintenance", "Confirmation + end-to-end security regression after any change", "Black (mainly)"],
  ] } });
  B.push({ table: { title: "3.2 Coverage measure → testing family", head: ["Measure in the stem", "Family"], widths: [9.0, 5.0], rows: [
    ["% requirements / % use and abuse cases / % critical functions or mission threads", "Requirements-based"],
    ["One value per equivalence class; pairwise; N-wise", "Data-driven"],
    ["Cause-effect; postcondition disjuncts; axioms; states, transitions, transition-pairs, cycles", "Model-based"],
    ["% packages, classes, methods, decisions, lines (statement)", "Structural"],
    ["All entry-to-exit paths (strongest) · critical paths · % decision outcomes (branch)", "Structural / control flow"],
  ] } });
  B.push({ table: { title: "3.3 From a security rule to test conditions (Q23 method)", head: ["Rule in the requirement", "Valid condition", "Invalid condition"], widths: [5.0, 4.5, 4.5], rows: [
    ["User must exist", "Valid user", "Invalid user"],
    ["Answer 2 of 3 security questions", "2 correct answers", "2 incorrect answers"],
    ["Link sent to email", "Good email", "Bad email"],
    ["Reset to a new password", "Reset with good password", "Reset with bad password"],
    ["Link disabled after 1 hour", "Link good", "Link expired"],
    ["Max two requests without reset", "Two requests without reset", "Three requests without reset"],
  ] } });
  B.push({ table: { title: "3.4 Acceptance-criteria filter (Q24 method)", head: ["Test for each candidate criterion", "Keep if…"], widths: [7.0, 7.0], rows: [
    ["Is every condition in it stated in the requirement?", "Yes — no invented rules"],
    ["Is the outcome the requirement’s outcome (locked vs error)?", "Exactly the same word"],
    ["Is a qualifier missing (“without a reset”)?", "No qualifier dropped"],
    ["Is it “logical but unspecified”?", "Then reject it"],
  ] } });
  B.push({ box: { kind: "ok", title: "Reproduce from memory before moving on", body: ["**Four lifecycle reasons** and **phase activities** — 3 points guaranteed (AS-4.1.1, 4.1.2).", "**Coverage families** and the **EP minimum** method — 3 points guaranteed (AS-4.4.3).", "**Acceptance-criteria filter** — 2 points guaranteed (AS-4.5.2).", "**Requirements checklist** and **IEEE ten** — the 3-point K4 pool.", "**Integration ≠ sum** and **condition table** — the K3 pools."] } });

  return B;
};
