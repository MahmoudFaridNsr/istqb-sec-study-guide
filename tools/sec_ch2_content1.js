// CT-SEC Chapter 2 — Sections 1 to 3
module.exports = function () {
  const B = [];

  // ================= SECTION 1 =================
  B.push({ h1: "Section 1 — Syllabus Explanation" });
  B.push({ p: "Chapter 2, **Security Testing Purposes, Goals and Strategies**, carries **10 learning objectives** across seven sub-chapters (2.1 Introduction · 2.2 Purpose · 2.3 Organizational Context · 2.4 Objectives · 2.5 Scope and Coverage · 2.6 Approaches · 2.7 Improving Practices). The Exam Structure Table allocates **6 questions** and **11 of the 80 points**. Recommended teaching time is **130 minutes** — **5.1 points per teaching hour**, one of the better returns on the paper." });
  B.push({ p: "Three **K3** objectives are guaranteed a 2-point question each: **identifying test objectives (AS-2.4.2)**, **scope versus asset integrity (AS-2.5.1)** and **stakeholder benefits (AS-2.6.3)**. Together they are **6 of the chapter’s 11 points**, and each of them is decided by a short list you can learn in an evening. Two K2 questions come from the four “why and where” objectives, and one 3-point K4 comes from the three analysis objectives." });
  B.push({ table: { head: ["LO ID", "K", "Objective (syllabus statement)", "Qs", "Pts"], widths: [1.7, 0.7, 9.6, 1.0, 1.0], rows: [
    ["AS-2.2.1", "K2", "Understand why security testing is needed in an organization, including benefits such as risk reduction and higher levels of confidence and trust.", "2 of 4†", "1 each"],
    ["AS-2.3.1", "K2", "Understand how project realities, business constraints, software development lifecycle, and other considerations affect the mission of the security testing team.", "2 of 4†", "1 each"],
    ["AS-2.4.1", "K2", "Explain why security testing goals and objectives must align with the organization’s security policy and other test objectives in the organization.", "2 of 4†", "1 each"],
    ["AS-2.4.2", "**K3**", "For a given project scenario, demonstrate the ability to identify security test objectives based on functionality, technology attributes and known vulnerabilities.", "**1**", "**2**"],
    ["AS-2.4.3", "K2", "Understand the relationship between information assurance and security testing.", "2 of 4†", "1 each"],
    ["AS-2.5.1", "**K3**", "For a given project, demonstrate the ability to define the relationship between security test objectives and the need for strength of integrity of sensitive digital and physical assets.", "**1**", "**2**"],
    ["AS-2.6.1", "**K4**", "Analyze a given situation and determine which security testing approaches are most likely to succeed.", "1 of 3‡", "3"],
    ["AS-2.6.2", "**K4**", "Analyze a situation in which a given security testing approach failed, identifying the likely causes of failure.", "1 of 3‡", "3"],
    ["AS-2.6.3", "**K3**", "For a given scenario, demonstrate the ability to identify the various stakeholders and illustrate the benefits of security testing for each stakeholder group.", "**1**", "**2**"],
    ["AS-2.7.1", "**K4**", "Analyze KPIs to identify security testing practices needing improvement and elements not needing improvement.", "1 of 3‡", "3"],
    ["**Chapter 2 total**", "—", "**K2 = 2 · K3 = 3 · K4 = 1**", "**6**", "**11**"],
  ] } });
  B.push({ lead: "† Two K2 questions drawn from AS-2.2.1, 2.3.1, 2.4.1, 2.4.3 — the Sample Exam drew **2.2.1** (Q5) and **2.4.3** (Q6). ‡ One K4 question drawn from AS-2.6.1, 2.6.2, 2.7.1 — the Sample Exam’s Q9 is a failed-approach scenario (**2.6.2**)." });
  B.push({ box: { title: "Exam allocation you must know", body: "Chapter 2 = **6 questions / 11 points**. In the official Sample Exam these are questions **#5 to #10** (1 + 1 + 2 + 2 + 3 + 2 points). It is the **fourth-largest chapter by points** after Chapters 4, 3 and 5 — and **cheaper per point** than any of them." } });
  B.push({ box: { kind: "warn", title: "The one thing that decides this chapter", body: "**Everything flows from the security policy.** The organization’s **security policy** (approved by senior management) comes first; the **security testing policy** is written from it and must align with it; the **strategy** formalizes direction; **approaches** implement the strategy per project; **objectives** define scope. When a scenario shows sporadic, unfunded, uncoordinated testing, the fix is **policy first** — the official answer to the 3-point Q9 is “**create a security policy and security testing policy and demonstrate how that aligns with your proposed testing approach**”." } });

  // --- 2.1 ---
  B.push({ h2: "§2.1 — Introduction (no learning objective, but heavily used)" });
  B.push({ p: "Before applying specialized techniques you must understand **why security testing is needed, what its purpose is and how it fits into the organization**. Security testing **differs from other forms of functional testing in two significant areas** [ATTA syllabus]:" });
  B.push({ ol: [
    "**Standard techniques for selecting test input data may miss important security issues.**",
    "**The symptoms of security defects are very different** from those found with other types of functional testing.",
  ] });
  B.push({ p: "**Security testing assesses a system’s vulnerability to threats by attempting to compromise the system’s security policy.** The syllabus lists the threats to explore — these reappear as distractors and as stems throughout the paper:" });
  B.push({ table: { title: "Threats to explore during security testing", head: ["Threat", "Syllabus description"], widths: [3.6, 10.4], rows: [
    ["**Unauthorized copying**", "Of applications or data."],
    ["**Unauthorized access control**", "Ability to perform tasks for which the user **does not have rights**. **User rights, access and privileges** are the focus — this information **should be available in the system specifications**."],
    ["**Unintended side effects**", "Software that does its job but has a side effect — a **media player that plays audio correctly but writes files to unencrypted temporary storage**, exploitable by **software pirates**."],
    ["**Cross-site scripting (XSS)**", "**Code inserted into a web page that may be exercised by subsequent users**; this code may be malicious."],
    ["**Buffer overflow (overrun)**", "Data strings **longer than the code can handle** entered into a UI field — an **opportunity for running malicious code instructions**."],
    ["**Denial of service**", "Prevents users from interacting with an application, e.g. **overloading a web server with “nuisance” requests**."],
    ["**Man in the middle**", "**Interception, mimicking and/or altering and relaying** of communications (e.g. **credit card transactions**) by a third party **while the user remains unaware**."],
    ["**Breaking encryption**", "Breaking the codes used to protect sensitive data."],
    ["**Logic bombs (“Easter eggs”)**", "Maliciously inserted code that **activates only under certain conditions** (e.g. a specific date) and may **delete files or format disks**."],
  ] } });
  B.push({ p: "**Security testing must be integrated with all other development and testing activities**, considering the organization’s **unique needs, existing security policies, current security testing skill sets and existing test strategies**." });

  // --- AS-2.2.1 ---
  B.push({ h2: "AS-2.2.1 (K2) — The Purpose of Security Testing" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand why security testing is needed in an organization, including benefits to the organization such as risk reduction and higher levels of confidence and trust." } });
  B.push({ table: { head: ["Statement", "Syllabus wording"], widths: [3.8, 10.2], rows: [
    ["**What it cannot do**", "Like testing in general, security testing **cannot guarantee** a system or organization will be **safe from attack**."],
    ["**What it can do**", "**Help identify risks** and **evaluate the effectiveness of existing security defenses**."],
    ["**What supplements it**", "**Audits and reviews of security practices.**"],
    ["**Due diligence (legal)**", "It **shows that due diligence has been performed** in protecting digital assets. After a breach, **legal action may result**; if a company can show **reasonable steps** such as **testing for vulnerabilities**, **there may be a defense in a court of law**."],
    ["**Assurance to clients**", "It can be **an assurance to clients and customers** that the organization **takes adequate steps to protect sensitive information** — the **confidence and trust** in the LO."],
  ] } });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective", body: "Sample Q5: after a breach and legal action, how does prior security testing help? **It shows the organization has done due diligence.** Rejected: test documentation to **track down the perpetrator** (probably not helpful); the pre-test **backup to restore** compromised data (likely out of date — and data was stolen or viewed, not necessarily corrupted); **tracing documented tests to discover how the breach happened** (may show where testing fell short, but **does not support the legal defense**). Legal action → **due diligence**." } });

  // --- AS-2.3.1 ---
  B.push({ h2: "AS-2.3.1 (K2) — The Organizational Context" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand how project realities, business constraints, software development lifecycle, and other considerations affect the mission of the security testing team." } });
  B.push({ ul: [
    "**Security is often one type of functional testing** performed alongside others. With **limited test time**, the **test manager must decide how much testing** — including security testing — can be done.",
    "Security testing is **often seen as a specialist role** and therefore **outsourced** to a specialist organization.",
    "**The extent of security testing is ultimately driven by business or organizational risks that are security-based.** **More security risks → more extensive security testing.**",
    "**Information security is a lifecycle activity:** needs **defined in requirements, expressed in design, implemented in code**; then testing **verifies and validates** correctness and effectiveness.",
    "**Security can’t be effectively patched into code or tested into code.** Only when security is **built in using secure coding and design techniques** can software be secure.",
    "**The realities of limited time, resources and scope, along with risk levels, security testing skill sets and lifecycle approaches greatly impact the success of a security testing team.**",
  ] });
  B.push({ box: { kind: "ok", title: "The six realities — learn the list", body: "**Time · resources · scope · risk levels · skill sets · lifecycle approach.** A K2 question on AS-2.3.1 will offer one of these as the answer and three things the syllabus never mentions (tool brand, office location, team size in the abstract)." } });

  // --- AS-2.4.1 ---
  B.push({ h2: "AS-2.4.1 (K2) — The Alignment of Security Testing Goals" });
  B.push({ box: { title: "Original syllabus statement", body: "Explain why security testing goals and objectives must align with the organization’s security policy and other test objectives in the organization." } });
  B.push({ p: "**The security testing policy can be written once the organization’s security policy has been approved by senior management.** Security testing goals and objectives, **as expressed in the security testing policy**, must be **in alignment with the overall security policy**. Otherwise **one of two failures** follows:" });
  B.push({ table: { head: ["If goals are not aligned…", "…the consequence"], widths: [5.0, 9.0], rows: [
    ["Tests go beyond what the security policy authorizes", "**Unauthorized security tests will be performed**"],
    ["Tests do not reflect what the policy actually requires", "**Security tests may not achieve the desired purposes**"],
  ] } });
  B.push({ p: "Order matters: **security policy (senior management) → security testing policy → strategy → approach → tasks**. A question that writes the testing policy before the security policy, or lets a project approach contradict the policy, has the hierarchy backwards (see Chapter 3, Figure 3.1)." });

  // --- AS-2.4.2 ---
  B.push({ h2: "AS-2.4.2 (K3) — Identification of Security Test Objectives" });
  B.push({ box: { title: "Original syllabus statement", body: "For a given project scenario, demonstrate the ability to identify security test objectives based on functionality, technology attributes and known vulnerabilities." } });
  B.push({ p: "Security test objectives are **like functional test objectives but focused on security goals**. The syllabus gives two rules:" });
  B.push({ ol: [
    "**There should be one or more security test objectives for each security feature** of the system or application.",
    "Objectives must **also** be based on **attributes of the technology** (e.g. **web, mobile, cloud, LAN**) and **known vulnerabilities** — both **application-specific and generic**.",
  ] });
  B.push({ table: { title: "The syllabus’s three example objectives — and the source each comes from", head: ["Example objective", "Source"], widths: [9.0, 5.0], rows: [
    ["Verify that **password authentication applies the correct rule for password strength**", "**Functionality** (a security feature)"],
    ["Verify that **all data entry fields are input validated to prevent SQL injection**", "**Known vulnerability** (generic)"],
    ["Verify that **customer data files are encrypted at the correct strength**", "**Technology attribute / asset protection**"],
  ] } });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K3, 2 points)", body: ["Sample Q7: after an audit found weak passwords, a bank issues new **password strength** requirements. Which are reasonable objectives for **general password rule testing**? Correct set: **length · character, number, letter and capitalization usage · no re-use within a year · reset every three months** (items 1, 2, 4, 5).", "Rejected items, per the official rationale: **“passwords can be retried three times”** is **functional rather than security-related** (unless it locks the account — the stem does not say); **“user can request the password by email”** and **“administrator can reset a locked password”** are **functional rather than specific security requirements**.", "**Technique:** keep only items that test **the strength rule itself** (the security feature named in the stem). Strike items about convenience, support workflow or retry counts without a security consequence."] } });

  // --- AS-2.4.3 ---
  B.push({ h2: "AS-2.4.3 (K2) — Information Assurance versus Security Testing" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the relationship between information assurance and security testing." } });
  B.push({ table: { head: ["Term", "Definition quoted by the syllabus"], widths: [3.4, 10.6], rows: [
    ["**Information Assurance (IA)**", "“**Measures that protect and defend information and information systems by ensuring their availability, integrity, authentication, confidentiality, and non-repudiation.** These measures include providing for **restoration** of information systems by incorporating **protection, detection, and reaction** capabilities.” [NISTIR 7298]"],
    ["**Security testing**", "“**A process used to determine that the security features of a system are implemented as designed and that they are adequate for a proposed application environment.**” [MDA1]"],
  ] } });
  B.push({ box: { kind: "ok", title: "The relationship in one line", body: "**IA is the wider, more encompassing term. Security testing is part of IA — as software testing is part of quality assurance.** Sample Q6’s answer: “**Security testing is a part of information assurance.**” Distractors invert it (IA part of testing), equate them, or call them different areas. Syllabus §0.5 adds that IA is called out **only in section 2.4**, and that the syllabus **does not use the term “cybersecurity”**." } });
  B.push({ p: "**Memory aid — IA’s five properties:** **A**vailability, **I**ntegrity, **A**uthentication, **C**onfidentiality, **N**on-repudiation (“**AIACN**”), plus restoration through **protection, detection and reaction**." });

  // --- AS-2.5.1 ---
  B.push({ h2: "AS-2.5.1 (K3) — Scope and Coverage of Security Test Objectives" });
  B.push({ box: { title: "Original syllabus statement", body: "For a given project, demonstrate the ability to define the relationship between security test objectives and the need for strength of integrity of sensitive digital and physical assets." } });
  B.push({ p: "**The greater the need for integrity of sensitive digital and physical assets, the greater the need for coverage of the security test objectives.** Security test objectives **essentially describe the scope** of security testing." });
  B.push({ table: { head: ["If the scope is…", "…the syllabus consequence"], widths: [4.0, 10.0], rows: [
    ["**Too small**", "**The confidence that security is adequate will not be achieved.**"],
    ["**Too large**", "**Resources may be depleted before the test can be finished.**"],
  ] } });
  B.push({ p: "Objectives should describe what testing is expected to achieve in **verifying and validating the protections** for sensitive digital and physical assets, and should **relate directly to specific assets, protective measures, risks and the identification of security vulnerabilities**." });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K3, 2 points)", body: "Sample Q8: after a headline breach, management orders that **the scope of security test objectives be expanded immediately**. The reasonable concern per the syllabus: **the testing scope may be too large and there may not be adequate resources to complete it.** The official rationale notes that “not well-focused” and “objectives not clearly defined” are reasonable worries **but you do not yet know how the objectives will be defined**, so they may be controllable; outsourcing has not been mentioned. When a stem says **scope is being expanded broadly**, answer with **resource depletion**." } });

  // --- 2.6 intro ---
  B.push({ h2: "§2.6 — Security Testing Approaches: strategy versus approach" });
  B.push({ p: "**The security testing strategy formalizes and communicates an organization’s overall direction for security testing. Approaches are then defined that implement the strategy.** A security testing approach is **defined at the project level**, must be **consistent with the organization’s test policy and strategy**, and is **a unique blend of techniques, tools and skills** to address the project’s security test objectives." });

  // --- AS-2.6.1 ---
  B.push({ h2: "AS-2.6.1 (K4) — Analysis of Security Test Approaches" });
  B.push({ box: { title: "Original syllabus statement", body: "Analyze a given situation and determine which security testing approaches are most likely to succeed." } });
  B.push({ p: "Each organization has **unique business and mission concerns** requiring unique strategies and approaches, but **some concerns are common** to many organizations. When analyzing a situation to define an approach, consider **thirteen factors**:" });
  B.push({ table: { head: ["#", "Factor to consider", "#", "Factor to consider"], widths: [0.6, 6.4, 0.6, 6.4], rows: [
    ["1", "**The source** of the systems or applications", "8", "**Common security risks**"],
    ["2", "**Any previous security testing**", "9", "**The test organization structure**"],
    ["3", "**The security policy**", "10", "**The project team structure**"],
    ["4", "**The security testing policy**", "11", "**The test team’s experience with security testing tools**"],
    ["5", "**Security risk assessments already performed**", "12", "**Constraints** — limited resources, time, **lack of access to environments**"],
    ["6", "**The technical environment** — software type and version, frameworks, languages, OS", "13", "**Assumptions** — e.g. about prior forms of security testing"],
    ["7", "**Security testing skills in the test team**", "", ""],
  ] } });
  B.push({ h3: "Technology changes the approach" });
  B.push({ ul: [
    "**Different technical environments** (client/server, web, mainframe) **require different approaches**. Development may need **code reviews** for vulnerabilities; testing may need **obfuscation of test data**. **Web applications have different vulnerabilities than mainframes.**",
    "**Some vulnerabilities are common to multiple technologies** — **buffer overflow** occurs in client-server, web and mobile, differing by **memory management**; the result is the same everywhere: **unpredictable behavior that may let an attacker perform disallowed tasks**.",
    "**Inadequate data protection can occur anywhere**, but **encryption differs**: web and mobile must protect **data in transit over the Internet**; **in all technologies sensitive data should be stored encrypted**. Example: **The Cattles Group lost two unencrypted backup tapes** with data on about **1.4 million customers** — mainframe data physically shipped unencrypted.",
  ] });
  B.push({ p: "**K4 method.** Read the scenario, tick off which of the thirteen factors it states, and prefer the approach that **fits the technical environment, uses the skills and tools the team actually has, respects the constraints and builds on existing policy and risk assessment**. An approach that ignores a stated constraint (no environment access, no skills) is the one “least likely to succeed”." });

  // --- AS-2.6.2 ---
  B.push({ h2: "AS-2.6.2 (K4) — Analysis of Failures in Security Test Approaches" });
  B.push({ box: { title: "Original syllabus statement", body: "Analyze a situation in which a given security testing approach failed, identifying the likely causes of failure." } });
  B.push({ p: "**There are degrees of failure.** A vulnerability that is not detected and resolved **does not necessarily mean the approach failed** — there are too many possible vulnerabilities, with **new ones discovered daily**. But some approaches **have been inadequate** and led to compromised assets. **Root cause analysis** identifies why. The syllabus lists **twelve possible causes**, which group naturally:" });
  B.push({ table: { head: ["Group", "Possible causes of failure (syllabus list)"], widths: [3.2, 10.8], rows: [
    ["**Leadership and resources**", "**Lack of executive leadership** in establishing security testing · **lack of executive provision of resources** (funding, time, resources)"],
    ["**Implementation and skills**", "**Lack of effective implementation** of the approach (e.g. skills to perform tasks) · **lack of effective tools** · **lack of skills in security testing**"],
    ["**Support**", "**Lack of organizational understanding and support** · **lack of stakeholder understanding and support**"],
    ["**Alignment**", "**Lack of alignment with the security policy** · **lack of alignment with the security testing policy and strategy**"],
    ["**Knowledge**", "**Lack of understanding of security risks** · **lack of understanding of the purpose of the system** · **lack of technical information about the system (causing wrong assumptions)**"],
  ] } });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K4, 3 points)", body: ["Sample Q9: you inherit sensitive medical-data security; consultants tested before but **nothing was documented, nothing changed, coverage unknown**; executives **agree in principle** but have **allocated no budget or time** and **don’t understand what should be done**. First step to align them? **Create a security policy and security testing policy and demonstrate how that aligns with your proposed testing approach.**", "Why: the failure causes in the scenario are **lack of executive leadership, lack of executive provision of resources, lack of alignment with policy and strategy**. Without a policy, the official rationale says, **testing may continue to be sporadic and high-level support and funding will be difficult**. Presenting an approach (b) is wrong because **you need an overall policy before you define the approach**; listing every hole (a) or bringing in legal (c) may help **later** if funding stalls."] } });

  // --- AS-2.6.3 ---
  B.push({ h2: "AS-2.6.3 (K3) — Stakeholder Identification" });
  B.push({ box: { title: "Original syllabus statement", body: "For a given scenario, demonstrate the ability to identify the various stakeholders and illustrate the benefits of security testing for each stakeholder group." } });
  B.push({ p: "For a security testing effort to be effective, **a business case must be made to management**, clearly defining **the risks of security lapses** and **the benefits of an effective security testing approach** for the project. **Different stakeholders see different benefits:**" });
  B.push({ table: { head: ["Stakeholder", "Benefit they see", "Trigger words in a stem"], widths: [3.6, 6.0, 4.4], rows: [
    ["**Executive management**", "**Business protection**", "brand, survival, the business as a whole"],
    ["**Senior management**", "**Due diligence**", "legal defense, reasonable steps"],
    ["**Business customers**", "**Protection from fraud**", "fraudulent access, credit cards, their data"],
    ["**Compliance officers** (internal corporate security policies)", "**Assurance the organization is compliant in terms of legal obligations**", "internal policy compliance, legal obligations"],
    ["**Regulatory officers** (external security laws)", "**Security regulations are being followed**", "external law, regulator, regulation"],
    ["**Privacy officers**", "**Private data is kept secure and due diligence shown** in protecting digital assets", "privacy, personal data"],
  ] } });
  B.push({ box: { kind: "warn", title: "How the official exam used this table (K3, 2 points)", body: "Sample Q10: objectives to protect data from **fraudulent access, particularly credit card information**. Which stakeholder group most sees the benefit? **Business customers** — **it is their data that is vulnerable**, and their row is **protection from fraud**. Executives, compliance and regulatory officers should be involved, but **this is not usually their primary benefit**." } });

  // --- AS-2.7.1 ---
  B.push({ h2: "AS-2.7.1 (K4) — Improving Security Testing Practices" });
  B.push({ box: { title: "Original syllabus statement", body: "Analyze KPIs (key performance indicators) to identify security testing practices needing improvement and elements not needing improvement." } });
  B.push({ p: "To improve, **first evaluate existing practices objectively**, using **key metrics for security testing goals** from which the **degree of success of key strategy elements** can be identified. Practices must be evaluated:" });
  B.push({ ul: [
    "**From a short-term and a long-term perspective**",
    "**Considering process and organization**",
    "**Considering people, tools, systems and techniques**",
  ] });
  B.push({ table: { title: "The four key metrics (KPIs) the syllabus names", head: ["KPI", "What a weak value suggests"], widths: [6.4, 7.6], rows: [
    ["**Coverage of security risks by tests**", "Risk assessment not driving test design; high-risk areas untested"],
    ["**Coverage of security policies and practices by tests**", "Policies not being verified — the “in place but ineffective” risk is unmanaged"],
    ["**Coverage of security requirements by tests**", "Traceability gap between requirements and tests"],
    ["**Effectiveness of past security testing**, based on **when and where vulnerabilities were identified — both pre- and post-release**", "Many **post-release** vulnerabilities, or vulnerabilities found late, indicate the practices that need improvement"],
  ] } });
  B.push({ p: "**K4 method.** In a KPI table, a metric that is **high and stable** marks an element **not needing improvement**; one that is **low**, or a high count of **post-release** vulnerabilities in a specific area, marks the practice to improve. Always ask **where** vulnerabilities were found (which phase, which component) — that locates the weak practice. The right answer usually names **both** what to improve **and** what to leave alone, because the LO asks for both." });

  // ================= SECTION 2 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 2 — Key Concepts" });
  B.push({ h2: "2.1 How security testing differs" });
  B.push({ ul: [
    "Standard **input selection techniques may miss** security issues; **symptoms differ** from functional defects.",
    "It **attempts to compromise the security policy** to assess vulnerability to threats.",
    "Threats to explore: **unauthorized copying · unauthorized access · unintended side effects · XSS · buffer overflow · DoS · man in the middle · breaking encryption · logic bombs**.",
    "Must be **integrated with all other development and testing activities**.",
  ] });
  B.push({ h2: "2.2 Purpose and context" });
  B.push({ ul: [
    "**Cannot guarantee safety**; **identifies risks** and **evaluates defenses**; supplemented by **audits and reviews**.",
    "**Due diligence** → possible **legal defense**; **assurance** → confidence and trust of clients.",
    "**Extent driven by security-based business risk.** Often **specialist / outsourced**.",
    "**Lifecycle activity** — can’t be **patched or tested into** code.",
    "Success depends on **time, resources, scope, risk levels, skills, lifecycle approach**.",
  ] });
  B.push({ h2: "2.3 Objectives, IA and scope" });
  B.push({ ul: [
    "**Security policy** (senior management) **→ security testing policy** aligned to it; otherwise **unauthorized tests** or **purposes missed**.",
    "**≥ 1 objective per security feature**, plus objectives from **technology attributes** and **known vulnerabilities**.",
    "**IA ⊃ security testing** (as QA ⊃ testing). IA = availability, integrity, authentication, confidentiality, non-repudiation + restoration.",
    "**More integrity need → more coverage.** Scope **too small → no confidence**; **too large → resources depleted**.",
  ] });
  B.push({ h2: "2.4 Approaches, failures, stakeholders, KPIs" });
  B.push({ ul: [
    "**Strategy** = organization’s overall direction. **Approach** = project-level blend of techniques, tools and skills, consistent with policy and strategy.",
    "**Thirteen factors** shape the approach (source, previous testing, policies, risk assessments, environment, skills, risks, structures, tool experience, constraints, assumptions).",
    "**Degrees of failure**; use **root cause analysis**; twelve causes (leadership, resources, implementation, support, alignment, understanding, information, tools, skills).",
    "**Business case to management**; six stakeholder groups, six benefits.",
    "**KPIs:** coverage of risks, of policies/practices, of requirements; **effectiveness by when and where vulnerabilities were found, pre- and post-release**.",
  ] });
  B.push({ h2: "2.5 Chapter 2 keyword glossary" });
  B.push({ table: { head: ["Keyword", "Working definition for the exam"], widths: [3.4, 10.6], rows: [
    ["**cross-site scripting**", "Code inserted into a web page that may be exercised by subsequent users; may be malicious."],
    ["**data obfuscation**", "Making data non-understandable to humans — here named as something **testing may require** for test data (detail in Chapter 5)."],
    ["**denial of service**", "Preventing users from interacting with an application, e.g. by overloading a server with nuisance requests."],
    ["**information assurance**", "Measures that protect and defend information and systems by ensuring availability, integrity, authentication, confidentiality and non-repudiation — **broader than security testing**."],
    ["**security policy**", "The organization’s approved statement of security principles; the **security testing policy is aligned to it**."],
    ["**security testing**", "A process to determine that security features are **implemented as designed** and **adequate** for the proposed environment."],
    ["**security vulnerability**", "A weakness that could be exploited by a threat source."],
    ["**software lifecycle**", "The framework within which security needs are defined, designed, implemented and tested — security is a lifecycle activity."],
    ["**test strategy**", "The organization’s overall direction for (security) testing, implemented through project-level approaches."],
  ] } });

  // ================= SECTION 3 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 3 — Tables and Summaries" });
  B.push({ table: { title: "3.1 The chapter on one page", head: ["Topic", "What to remember", "LO"], widths: [3.0, 9.0, 2.0], rows: [
    ["Purpose", "Cannot guarantee safety · identify risks · evaluate defenses · **due diligence** · assurance", "AS-2.2.1"],
    ["Context", "Risk drives extent · specialist/outsourced · lifecycle · time, resources, scope, risk, skills, lifecycle", "AS-2.3.1"],
    ["Alignment", "Security policy → testing policy; else unauthorized tests or missed purposes", "AS-2.4.1"],
    ["Objectives", "≥1 per security feature + technology attributes + known vulnerabilities", "AS-2.4.2"],
    ["IA", "IA ⊃ security testing (QA ⊃ testing)", "AS-2.4.3"],
    ["Scope", "More integrity need → more coverage; too small = no confidence, too large = resources depleted", "AS-2.5.1"],
    ["Approaches", "13 situational factors; technology drives approach", "AS-2.6.1"],
    ["Failures", "Degrees of failure; root cause analysis; 12 causes", "AS-2.6.2"],
    ["Stakeholders", "Six groups, six benefits; business case", "AS-2.6.3"],
    ["KPIs", "Coverage of risks / policies / requirements; effectiveness pre- and post-release", "AS-2.7.1"],
  ] } });
  B.push({ table: { title: "3.2 Stakeholder → benefit (the K3 decider)", head: ["Stakeholder", "Benefit"], widths: [6.0, 8.0], rows: [
    ["Executive management", "Business protection"],
    ["Senior management", "Due diligence"],
    ["Business customers", "Protection from fraud"],
    ["Compliance officers (internal policies)", "Compliant with legal obligations"],
    ["Regulatory officers (external laws)", "Regulations being followed"],
    ["Privacy officers", "Private data secure; due diligence in protecting digital assets"],
  ] } });
  B.push({ table: { title: "3.3 Security vs functional objective — the Q7 filter", head: ["Candidate objective", "Security?", "Why"], widths: [7.0, 1.6, 5.4], rows: [
    ["Password length enforced", "**Yes**", "Strength rule"],
    ["Mixed character classes enforced", "**Yes**", "Strength rule"],
    ["No re-use within a year", "**Yes**", "Strength / history rule"],
    ["Reset every three months", "**Yes**", "Strength / ageing rule"],
    ["Password can be retried three times", "No†", "Functional — unless it locks the account"],
    ["Password can be emailed on request", "No", "Functional support workflow"],
    ["Admin can reset a locked password", "No", "Functional support workflow"],
  ] } });
  B.push({ lead: "† Retry-then-lockout is a security control (Chapter 3); a bare retry count is not." });
  B.push({ table: { title: "3.4 Failure cause → remedy", head: ["Observed in the scenario", "Likely cause", "First remedy"], widths: [5.0, 4.5, 4.5], rows: [
    ["Executives agree “in principle” but fund nothing", "Lack of executive leadership / provision of resources", "**Policy + testing policy + business case**"],
    ["Tests run, nobody acts on findings", "Lack of organizational / stakeholder support", "Stakeholder benefits, business case"],
    ["Consultants tested the wrong things", "Lack of alignment with policy and strategy; lack of understanding of risks", "Align objectives to policy and risk assessment"],
    ["Wrong assumptions about architecture", "Lack of technical information about the system", "Obtain design and environment information"],
    ["Team can’t run the scanner", "Lack of skills / effective tools", "Training, tool selection (Chapter 8)"],
  ] } });
  B.push({ box: { kind: "ok", title: "Reproduce from memory before moving on", body: ["**Table 3.2** — six stakeholders, six benefits (guaranteed 2 points).", "**The scope rule** — too small / too large (guaranteed 2 points).", "**Objective sources** — feature, technology attribute, known vulnerability, and the security-vs-functional filter (guaranteed 2 points).", "**Policy first** — the hierarchy and the twelve failure causes (likely 3 points)."] } });

  return B;
};
