// CT-SEC Chapter 2 — Section 2, Key Concepts: each concept explained from the ground up.
module.exports = function () {
  const B = [];
  B.push({ h1: "Section 2 — Key Concepts" });
  B.push({ lead: "Section 1 gives the syllabus wording objective by objective. This section explains what that wording means. Each card builds one idea in order: plain words first, then how it works, an example, how the exam uses it, and what it is easily confused with." });

  B.push({ h2: "2.1 The storyline of Chapter 2" });
  B.push({ p: "Chapter 2 answers **“why do we test security, and how do we organize it?”** in a fixed order. **Why** test (to reduce risk and show due diligence) → **what limits** the testing team (time, resources, skills, lifecycle) → **what it must align with** (the security policy, through a chain of documents) → **what to test** (objectives from features, technology and known vulnerabilities) → **how much** (scope grows with the need for integrity) → **how** (a project approach chosen from thirteen factors) → **why approaches fail** (twelve causes) → **who benefits** (six stakeholder groups) → **how to improve** (four KPIs)." });
  B.push({ p: "Most questions are decided by one of four short lists: **the document hierarchy**, **the three sources of objectives**, **the two scope consequences**, and **the six stakeholder benefits**. The cards below explain each list so that you can work out the answer, not only recognise it." });

  B.push({ h2: "2.2 What security testing is and why it is needed" });
  B.push({ concept: {
    title: "How security testing differs from ordinary functional testing",
    plain: "Functional testing checks that the system **does what it should**. Security testing checks that the system **cannot be made to do what it should not**. Its method is to **try to compromise the security policy**, which means behaving like someone who wants to break the rules.",
    how: ["**Difference 1:** normal ways of choosing test inputs (typical values, boundaries of valid ranges) **may miss security problems**. Attackers use inputs nobody expected, such as SQL fragments, very long strings or script tags.", "**Difference 2:** the **symptoms** of security defects look different. A functional defect usually shows as a wrong result. A security defect often shows **no visible error at all**: the system works, but data leaks, a log is skipped, or a privilege is wrongly granted.", "The syllabus lists threats to explore: **unauthorized copying**, **unauthorized access** (doing tasks without the right), **unintended side effects**, **XSS**, **buffer overflow**, **denial of service**, **man in the middle**, **breaking encryption**, and **logic bombs** (code that activates on a condition, such as a date)."],
    example: "The syllabus’s **unintended side effect**: a media player plays audio perfectly (so every functional test passes) but writes the decoded files to **unencrypted temporary storage**, where pirates can copy them. No functional test would flag it, because the defect is in what the software does **besides** its job.",
    exam: "Recognise the threat from its description. “Code inserted into a page and run by later users” → **XSS**. “Activates only under certain conditions” → **logic bomb**. “Intercepts and relays while the user is unaware” → **man in the middle**.",
    confuse: "Security testing is **integrated** with all other development and testing activities. It is **not** a separate phase at the end.",
  } });
  B.push({ concept: {
    title: "The purpose of security testing: risk reduction, due diligence, confidence and trust (AS-2.2.1)",
    plain: "Security testing **cannot guarantee** that a system is safe. What it can do is **find risks** and **check how well the existing defenses work**. As a side effect, it gives the organization **evidence that it behaved responsibly**.",
    how: ["**Identify risks and evaluate defenses.** This is the direct benefit. It is supplemented by **audits and reviews** of security practices.", "**Due diligence.** If a breach leads to legal action, an organization that can show it took **reasonable steps**, such as testing for vulnerabilities, **may have a defense in court**.", "**Assurance to clients.** Customers gain **confidence and trust** that sensitive information is protected."],
    example: "A retailer is breached and sued. Its test reports from the last two years show regular vulnerability testing and fixes. The reports do not undo the breach, but they show the retailer was **not negligent**, which is exactly the due-diligence benefit.",
    exam: "Official Q5: after a breach and a lawsuit, how does earlier security testing help? → **It shows due diligence.** Reject: using test records to **find the attacker**, restoring from the **pre-test backup**, or tracing tests to see **how the breach happened**. None of these supports the **legal** defense.",
    confuse: "**“Cannot guarantee safety”** is always true. An option that promises security testing makes a system secure is wrong.",
  } });
  B.push({ concept: {
    title: "What shapes the security testing team’s mission (AS-2.3.1)",
    plain: "The security test team never works in ideal conditions. **How much** it can test, and how well, depends on the realities of the project and the organization.",
    how: ["**The six realities** the syllabus names: **limited time, resources and scope**, plus **risk levels**, **security testing skill sets**, and the **lifecycle approach**.", "**The extent of security testing is driven by security-based business risk.** More risk means more testing.", "Security is often treated as **one type of functional testing**, competing for limited test time. The **test manager decides how much** is done.", "It is often seen as a **specialist role** and **outsourced**.", "**Security cannot be patched or tested into code.** It must be **built in** through secure design and coding. Testing then **verifies and validates** it."],
    example: "A two-week sprint has three days of testing. The team has no penetration tester, and the product handles card data. The realities are **time** (3 days), **skills** (none in-house) and **risk** (high). So the manager outsources a focused test of the payment flow, and the team runs scripted checks on the rest.",
    exam: "A K2 question gives one of the six realities among options the syllabus never mentions (office location, tool brand, team morale). Choose the reality.",
    confuse: "“Security can’t be tested into code” does **not** mean testing is useless. It means testing **confirms** security that was **designed and built in**, and cannot add it afterwards.",
  } });

  B.push({ h2: "2.3 Alignment, objectives and scope" });
  B.push({ concept: {
    title: "The document hierarchy and why alignment matters (AS-2.4.1)",
    plain: "Security testing is governed by a **chain of documents**, each written from the one above it: **security policy → security testing policy → security test strategy → security test approach → security test tasks.** If a lower level does not match the level above, testing goes wrong in one of two ways.",
    how: ["**Security policy**: the organization’s security rules, **approved by senior management**. It comes first.", "**Security testing policy**: written **once the security policy is approved**, and **aligned** with it. It states the goals and objectives of security testing.", "**Strategy** (organization level): the overall direction for security testing. **Approach** (project level): how one project implements the strategy. **Tasks**: the actual work.", "**Failure 1:** testing goes beyond what the policy authorizes → **unauthorized security tests are performed**. **Failure 2:** testing does not reflect what the policy requires → **tests do not achieve their purpose**."],
    example: "A project team decides on its own to run a phishing simulation against all staff. The security policy does not authorize social-engineering tests, so this is an **unauthorized test**, even though the intent is good. The opposite case: the policy requires card data to be encrypted at rest, but the test plan only covers login screens, so the tests **miss their purpose**.",
    exam: "If a scenario shows testing that is **sporadic, unfunded and uncoordinated**, the fix is at the **top of the chain**. Official Q9 (3 points): **create a security policy and a security testing policy, and show how the proposed approach aligns with them.** Presenting an approach first is wrong, because there is no policy to anchor it.",
    confuse: "**Organizational level** = policy and strategy. **Project level** = approach and tasks. An option that puts the approach at organizational level, or writes the testing policy before the security policy, has the hierarchy backwards.",
  } });
  B.push({ concept: {
    title: "Where security test objectives come from (AS-2.4.2, guaranteed K3)",
    plain: "A security test objective states **what a security test should confirm**. The syllabus gives **three sources** for objectives, and a good set uses all three.",
    how: ["**Functionality**: **at least one objective per security feature** of the system (login, password rules, encryption, audit logging…).", "**Technology attributes**: the kind of technology brings its own risks (**web, mobile, cloud, LAN**).", "**Known vulnerabilities**: both **generic** (SQL injection, XSS) and **application-specific** (a flaw found in an earlier release)."],
    example: "The syllabus’s three examples map to the three sources: “password authentication applies the **correct strength rule**” (a feature), “all data entry fields are **validated against SQL injection**” (a known generic vulnerability), and “customer data files are **encrypted at the correct strength**” (asset protection and technology).",
    exam: ["Official Q7 (2 points): from a list, keep only the items that test the **security rule named in the stem**. For password-strength rules: **length**, **character mix**, **no re-use within a year** and **change every three months** are security. **Retry three times** (with no lockout), **email the password on request** and **admin can reset** are **functional** items.", "**Method:** for each candidate, ask “does this check the **strength or protection** the stem is about, or is it a **convenience or support workflow**?”"],
    confuse: "A retry limit becomes a security objective only when it **locks the account** (a lockout control). A bare retry count is functional. Read the stem for the consequence.",
  } });
  B.push({ concept: {
    title: "Information assurance vs security testing (AS-2.4.3)",
    plain: "**Information assurance (IA)** is the **whole effort** to protect information and systems. **Security testing is one part of it**, in the same way that software testing is one part of quality assurance.",
    how: ["**IA** (NISTIR 7298): measures that protect and defend information and systems by ensuring **availability, integrity, authentication, confidentiality and non-repudiation**, including **restoration** through **protection, detection and reaction** capabilities.", "**Security testing**: a process to determine that **security features are implemented as designed** and are **adequate** for the proposed environment.", "**Relationship:** IA is the wider term. Security testing is a part of IA."],
    example: "A bank’s IA programme includes policies, staff vetting, encryption, backups, incident response and security testing. The tests check that encryption and access controls really work. That is the testing **part** of the assurance picture.",
    exam: "Official Q6: “**Security testing is a part of information assurance.**” Reject options that say IA is part of testing, that the two are the same, or that they are unrelated.",
    confuse: "IA has **five** properties: CIA (**confidentiality, integrity, availability**) **plus authentication and non-repudiation**. Do not shorten it to the CIA triad.",
  } });
  B.push({ concept: {
    title: "Scope, coverage and the need for integrity (AS-2.5.1, guaranteed K3)",
    plain: "The **more important it is that an asset stays correct and protected**, the **more of it your security test objectives must cover**. The objectives **are** the scope: they say what testing will look at. Getting the size of that scope right is a balance.",
    how: ["**Rule:** greater need for **integrity** of sensitive digital and physical assets → greater need for **coverage** by the security test objectives.", "**Scope too small** → **the confidence that security is adequate will not be achieved.**", "**Scope too large** → **resources may be depleted before the test can be finished.**", "Objectives should relate **directly to specific assets, protective measures, risks and the identification of vulnerabilities**."],
    example: "A hospital tests its patient-prescription module (high integrity need: a changed dose can kill) much more thoroughly than its cafeteria-menu page. If management suddenly orders “test everything to the same depth”, the team will run out of time before finishing, and the prescription module may end up **less** tested than before.",
    exam: "Official Q8: management orders the scope to be **expanded immediately** after a breach in the news. The reasonable concern → **the scope may be too large, and there may not be enough resources to complete it.** “Objectives not well-focused” is a possible worry but not yet known. **Broad expansion → resource depletion.**",
    confuse: "**Too small** costs **confidence**. **Too large** costs **resources**. Exam options often swap the two consequences.",
  } });

  B.push({ h2: "2.4 Approaches, failures, stakeholders and improvement" });
  B.push({ concept: {
    title: "Strategy vs approach, and the thirteen factors that shape an approach (AS-2.6.1)",
    plain: "The **strategy** is the organization’s overall direction for security testing. An **approach** is how **one project** puts that strategy into practice: a **unique blend of techniques, tools and skills** that fits that project. To choose the blend, look at the project’s situation through thirteen factors.",
    how: ["**What already exists:** the **source** of the system (in-house, vendor, open source), **previous security testing**, the **security policy**, the **security testing policy**, and **risk assessments already performed**.", "**The technology:** the **technical environment** (software type and version, frameworks, languages, OS) and the **common security risks** for it.", "**The people and organization:** **security testing skills** in the team, the **test organization structure**, the **project team structure**, and the team’s **experience with security tools**.", "**The limits:** **constraints** (resources, time, **no access to environments**) and **assumptions** (for example, about earlier testing).", "**Technology changes the approach.** Web applications have different vulnerabilities from mainframes. Some (buffer overflow, poor data protection) occur everywhere, but they show up differently."],
    example: "Project A is a vendor-supplied web portal with no source code, a team experienced with web scanners, and no access to production. The approach is black-box web scanning plus manual tests in a copy of the environment, with **no code review** (there is no code). Project B is an in-house mainframe batch system: code reviews, test-data obfuscation, and checks that backup tapes are encrypted (the syllabus’s Cattles Group lost 1.4 million records on unencrypted tapes).",
    exam: "For “which approach is **most likely to succeed**?”, tick off the factors the scenario states. The best approach **fits the technology, uses the skills and tools the team actually has, respects the stated constraints, and builds on existing policy and risk assessments**. An approach that ignores a stated constraint is the one likely to fail.",
    confuse: "**Strategy = organization, approach = project.** The approach must be **consistent with** the policy and strategy. It cannot replace them.",
  } });
  B.push({ concept: {
    title: "Why security test approaches fail (AS-2.6.2, a K4 pool)",
    plain: "One missed vulnerability does **not** prove the approach failed, because nobody can find every vulnerability. There are **degrees of failure**. When an approach really was inadequate, **root cause analysis** finds out why. The syllabus lists twelve possible causes.",
    how: ["**Leadership and money:** lack of **executive leadership** · lack of **executive provision of resources** (funding, time, people).", "**Doing the work:** lack of **effective implementation** · lack of **effective tools** · lack of **security testing skills**.", "**Support:** lack of **organizational** understanding and support · lack of **stakeholder** understanding and support.", "**Alignment:** lack of alignment with the **security policy** · lack of alignment with the **security testing policy and strategy**.", "**Knowledge:** lack of understanding of **security risks** · of **the purpose of the system** · lack of **technical information** about the system, which leads to wrong assumptions."],
    example: "The syllabus’s Q9 scenario: consultants tested once, documented nothing, nothing changed, and coverage is unknown. Executives agree “in principle” but give no budget or time and do not understand what is needed. The causes are **no leadership, no resources and no policy alignment**. The first remedy is therefore a **policy and testing policy**, with the approach shown to align with them.",
    exam: "Map each symptom to its cause group, then pick the remedy that addresses the **earliest** cause in the chain (policy and leadership before tools and skills). Listing every hole or calling in lawyers may help **later**, but they are not the first step.",
    confuse: "“A vulnerability was found in production” on its own is **not** evidence that the approach failed. Look for **systemic** causes.",
  } });
  B.push({ concept: {
    title: "Six stakeholder groups, six benefits (AS-2.6.3, guaranteed K3)",
    plain: "To get support and money for security testing you must make a **business case**, and different people value **different benefits**. Learn each group with its one benefit.",
    how: ["**Executive management** → **business protection** (the survival and brand of the whole business).", "**Senior management** → **due diligence** (evidence of reasonable steps).", "**Business customers** → **protection from fraud** (it is **their** data and money at risk).", "**Compliance officers** (internal corporate security policies) → **assurance the organization meets its legal obligations**.", "**Regulatory officers** (external security laws) → **assurance that security regulations are being followed**.", "**Privacy officers** → **private data is kept secure**, and due diligence is shown in protecting digital assets."],
    example: "A test objective is to protect stored credit-card numbers from fraudulent access. Executives, compliance and regulators all care, but the group that **most directly benefits** is the **business customers**, because their cards would be used fraudulently.",
    exam: "Official Q10: fraud and credit cards → **business customers**. **Find the stakeholder whose benefit names the concern in the stem**, not the stakeholder who is merely involved.",
    confuse: ["**Executive** (business protection) ≠ **senior** (due diligence). The syllabus keeps them separate.", "**Compliance officers** look at **internal** policies and legal obligations. **Regulatory officers** look at **external** regulations.", "**Due diligence** appears for both senior management and privacy officers. If the stem is about **personal data**, choose **privacy officers**."],
  } });
  B.push({ concept: {
    title: "Improving security testing with KPIs (AS-2.7.1, a K4 pool)",
    plain: "To improve, first **measure** how well current practices work, honestly and objectively. The syllabus names **four key metrics**, and you judge each practice **short-term and long-term**, considering **process and organization**, and **people, tools, systems and techniques**.",
    how: ["**Coverage of security risks** by tests.", "**Coverage of security policies and practices** by tests.", "**Coverage of security requirements** by tests.", "**Effectiveness of past security testing**, based on **when and where** vulnerabilities were found, **before and after release**."],
    example: "A KPI report shows 95% of security requirements covered, but 40% of high risks untested, and most production vulnerabilities in one payments component. **Leave alone:** requirements traceability (it is working). **Improve:** risk-based test design, and testing of the payments component.",
    exam: "The LO asks for practices **needing** improvement **and** elements **not needing** improvement. The best option usually names both. A **high and stable** metric is not where to act. **Many post-release vulnerabilities in one area** point to the practice to fix.",
    confuse: "Coverage of **requirements** is not coverage of **risks**. A team can trace every requirement and still miss high risks that no requirement mentions.",
  } });

  B.push({ h2: "2.5 Fuzzy points clarified" });
  B.push({ box: { kind: "warn", title: "Places where the wording is easy to misread", body: [
    "**“Security policy”, “security testing policy” and “test policy” are three different documents.** The security policy is the organization’s security rules. The security testing policy states how security testing supports them. The general test policy covers all testing. The thirteen approach factors list the first two separately.",
    "**“Strategy” is organization-level, but the syllabus also says the approach must be “consistent with the test policy and strategy”.** This is not a contradiction: the approach is **derived from** the strategy, for one project.",
    "**The “what a weak value suggests” column of the KPI table, and the K4 KPI method in Section 1, are this guide’s interpretation.** The syllabus names only the four metrics and the perspectives (short/long term; process and organization; people, tools, systems, techniques).",
    "**Q7’s retry item is functional only because the stem says nothing about lockout.** If a stem adds “and then the account is locked”, the same item becomes a security objective (a lockout control, Chapter 3).",
    "**IA appears only in §2.4 of the syllabus, and the syllabus deliberately does not use the word “cybersecurity”.** If an option uses “cybersecurity”, judge it by its content, not by the word.",
  ] } });
  return B;
};
