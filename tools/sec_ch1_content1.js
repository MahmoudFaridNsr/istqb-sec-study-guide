// CT-SEC Chapter 1 — Sections 1 to 3
module.exports = function () {
  const B = [];

  // ================= SECTION 1 =================
  B.push({ h1: "Section 1 — Syllabus Explanation" });
  B.push({ p: "Chapter 1, **The Basis of Security Testing**, carries **6 learning objectives** across three sub-chapters (1.1 Security Risks · 1.2 Information Security Policies and Procedures · 1.3 Security Auditing and Its Role in Security Testing). The ISTQB Exam Structure Table allocates **4 of the 45 questions** and **8 of the 80 points** to it. Recommended teaching time is **105 minutes**, which works out at **4.6 points per teaching hour** — roughly the paper average." });
  B.push({ p: "The chapter looks like a gentle introduction, but **half its questions are K4**. Two of the four questions are 3-point analysis items — one on analysing policies against test results (**AS-1.2.2**, guaranteed) and one drawn from the asset / risk-assessment pair (**AS-1.1.2 or AS-1.1.3**). Those two questions are **6 of the chapter’s 8 points**. Get the K4 reasoning right and the chapter pays well; treat it as vocabulary and it does not." });
  B.push({ table: { head: ["LO ID", "K", "Objective (syllabus statement)", "Qs", "Pts"], widths: [1.7, 0.7, 9.6, 1.0, 1.0], rows: [
    ["AS-1.1.1", "K2", "Understand the role of risk assessment in supplying information for security test planning and design and aligning security testing with business needs.", "1 of 2†", "1"],
    ["AS-1.1.2", "**K4**", "Identify the significant assets to be protected, the value of each asset and the data required to assess the level of security needed for each asset.", "1 of 2‡", "3"],
    ["AS-1.1.3", "**K4**", "Analyze the effective use of risk assessment techniques in a given situation to identify current and future security threats.", "1 of 2‡", "3"],
    ["AS-1.2.1", "K2", "Understand the concept of security policies and procedures and how they are applied in information systems.", "**1**", "1"],
    ["AS-1.2.2", "**K4**", "Analyze a given set of security policies and procedures along with security test results to determine effectiveness.", "**1**", "**3**"],
    ["AS-1.3.1", "K2", "Understand the purpose of a security audit.", "1 of 2†", "1"],
    ["**Chapter 1 total**", "—", "**K2 = 2 · K3 = 0 · K4 = 2**", "**4**", "**8**"],
  ] } });
  B.push({ lead: "† One K2 question is drawn from AS-1.1.1 and AS-1.3.1 together. ‡ One K4 question is drawn from AS-1.1.2 and AS-1.1.3 together. In the official Sample Exam the draws fell on **AS-1.3.1** (Q1) and **AS-1.1.3** (Q2). Advanced Level points: K2 = 1, K3 = 2, K4 = 3." });
  B.push({ box: { title: "Exam allocation you must know", body: "Chapter 1 = **4 questions / 8 points** of 45 questions and 80 points. In the official Sample Exam these are questions **#1 to #4** (1 + 3 + 1 + 3 points). The CT-SEC exam is **45 questions worth 80 points in 120 minutes** (**150 minutes** with the 25% non-native-language allowance) and the pass mark is **65% = 52 points**." } });
  B.push({ box: { kind: "warn", title: "The one thing that decides this chapter", body: "**Testing proves; auditing and policy review only describe.** The guaranteed K4 question (AS-1.2.2) asks how to determine whether policies and procedures are **effective**, and the syllabus answer is always the same: **use the results of security tests designed to verify or validate them** — because a policy can be in place and followed and still not protect the asset. The official answer to Q4 is literally “analyze the results from a security test to validate effectiveness”. Any option built on static review alone, or on emerging threats alone, is the distractor." } });

  // --- intro ---
  B.push({ h2: "Chapter framing — what makes security testing different" });
  B.push({ p: "The chapter opens with one sentence worth memorising: **functional testing is based on risks, requirements, use cases and models; security testing is based on the security aspects of those specifications but also seeks to verify and validate security risks, security procedures and policies, attacker behavior and known security vulnerabilities.** That list — **risks · procedures and policies · attacker behavior · known vulnerabilities** — is the test basis the rest of the syllabus keeps returning to." });

  // --- AS-1.1.1 ---
  B.push({ h2: "AS-1.1.1 (K2) — The Role of Risk Assessment in Security Testing" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the role of risk assessment in supplying information for security test planning and design and aligning security testing with business needs." } });
  B.push({ p: "**Security test objectives are based on security risks**, and those risks are identified by performing a **security risk assessment**. General risk management is assumed from Foundation Level and the Advanced Test Manager syllabus." });
  B.push({ p: "**Risk** is a measure of the extent to which an entity is threatened by a potential circumstance or event, and is typically a function of **(1) the adverse impacts that would arise if the circumstance or event occurs** and **(2) the likelihood of occurrence**." });
  B.push({ p: "**Information security risks** arise from the **loss of confidentiality, integrity, or availability** of information or information systems, and reflect potential adverse impacts to **organizational operations (mission, functions, image, reputation), organizational assets, individuals, other organizations, and a country** [NIST 800-30]." });
  B.push({ h3: "What a security risk assessment gives the tester" });
  B.push({ table: { head: ["Role of the assessment", "Syllabus wording to recognise"], widths: [4.0, 10.0], rows: [
    ["For the organization", "Understand **which areas and assets may be at risk** and **determine the magnitude of each risk**."],
    ["For planning and design", "**A rich source of information from which security tests can be planned and designed.**"],
    ["For prioritization", "**Prioritize security tests** so that the **highest level of test rigor and coverage** is focused on areas with the **greatest risk exposure**."],
    ["For business alignment", "Prioritizing by the assessment makes tests **aligned with business security objectives** — **but only if** the assessment **accurately reflects the organization’s security threats, the impacted stakeholders and the assets to be protected**."],
  ] } });
  B.push({ h3: "The two weaknesses of any risk assessment" });
  B.push({ ul: [
    "**It is a snapshot.** Any risk assessment (security or otherwise) is **only a snapshot at a given point in time**, based on **limited information** that may lead to **invalid assumptions and conclusions**. **New threats emerge daily**, so assessments should be **performed at regular intervals** — some organizations every **three to six months**, others **annually**; the interval depends on the organization and **the degree of change it experiences**.",
    "**It depends on its participants’ knowledge.** Risks are missed through **lack of detailed information**, or because people **do not understand security threats and risks**. Hence: **solicit input from a variety of people** and **pay careful attention to the level of detail** in what they provide.",
  ] });
  B.push({ box: { kind: "ok", title: "The two remedies the syllabus names", body: "Wrong assumptions are a **realistic expectation**. To deal with missing or incomplete risk information: **(1) use an established security risk assessment methodology as a checklist** (e.g. NIST 800-30), and **(2) get input from multiple people**. If a stem asks how to reduce the chance of missing risks, the answer is one of these two — not “run more tests”." } });

  // --- AS-1.1.2 ---
  B.push({ h2: "AS-1.1.2 (K4) — Asset Identification" });
  B.push({ box: { title: "Original syllabus statement", body: "Identify the significant assets to be protected, the value of each asset and the data required to assess the level of security needed for each asset." } });
  B.push({ p: "**Not all information to be secured is digital.** Copied documents — contracts, plans, written notes, **logins and passwords in written form** — may have **high value**. The first question is therefore **which information is digital and which is not**, recognising that **the same asset may exist in both forms**." });
  B.push({ p: "The syllabus structures asset identification as **five questions**. A K4 item will hand you a scenario and expect you to work through them; learn them as a sequence." });
  B.push({ table: { head: ["#", "Question", "What the syllabus lists"], widths: [0.6, 3.4, 10.0], rows: [
    ["1", "**Which assets are valuable?**", "High-value **information**: customer data · business plans · proprietary software · system documentation · company pictures and diagrams · **intellectual property** (processes, trade secrets) · financial spreadsheets · presentations and training courses · documents · emails · employee records · tax statements. **Physical or intangible** assets: **physical prototypes** of devices under development · **the ability to deliver services** · **company reputation and trust**."],
    ["2", "**How valuable is the asset?**", "Some have a tangible value; others are **measured in the costs and consequences of their loss**. Methods: **future revenue** the asset generates · **value to a competitor** · **time and effort to recreate** it · **fines and penalties for not producing it** when needed (audit, lawsuit) · **fines and penalties for losing customer data**."],
    ["3", "**Where are the digital assets located?**", "Historically servers, desktops, CDs, disks — **an outdated and disorganized approach**, but sensitive data may still sit on **old CDs, DVDs, USB drives**. More secure: **secure enterprise servers with strong encryption**, requiring **authentication and authorization**, plus e.g. **digital certificates** for Internet access. Now also **mobile devices, thumb drives and cloud storage** (a **new set of concerns based on data access**)."],
    ["4", "**How are the digital assets accessed?**", "**LAN or Wi-Fi** · **remote access via VPN or cloud drive** · **passing physical data stores (CDs, DVDs, USB) person to person** — **low-tech but very common** · **sending files by email**."],
    ["5", "**How are the digital assets secured?**", "**Encryption** (what type and strength, **who has the keys?**) · **authentication and tokens** (digital certificates? password policies **adequate and followed**?) · **authorization** (which **levels of privilege** have been granted?)."],
  ] } });
  B.push({ box: { kind: "warn", title: "The insider example the syllabus chose", body: "Storage matters because **people entrusted with sensitive data have simply walked out of a building with a hard drive** of private customer and business data. The syllabus cites a **hard drive stolen from a secured area at a government security agency** containing payroll and bank information for **over 100,000** current and former workers [Washington Post, 2007]. Location and physical control of data are asset questions, not only technical ones." } });
  B.push({ p: "**How to answer a K4 asset item.** Read the scenario and classify each item it mentions: is it an **asset** (information, physical or intangible)? a **value method** (revenue, competitor value, recreation cost, fines)? a **location**? an **access route**? a **protection** (encryption, authentication, authorization)? The option that names the **data required to assess the level of security** usually combines **value + location + access + protection** — not value alone." });

  // --- AS-1.1.3 ---
  B.push({ h2: "AS-1.1.3 (K4) — Analysis of Risk Assessment Techniques" });
  B.push({ box: { title: "Original syllabus statement", body: "Analyze the effective use of risk assessment techniques in a given situation to identify current and future security threats." } });
  B.push({ p: "A security risk assessment is **very similar to a standard risk assessment**, the main difference being **the focus on security-related areas**. It **should include the perspectives of external security testing stakeholders** — people or parties **outside the company** with a clear stake in the security of the project or product." });
  B.push({ table: { title: "External stakeholders and why each is included", head: ["External stakeholder", "Why the syllabus includes them"], widths: [3.6, 10.4], rows: [
    ["**Customers and users**", "Useful for **understanding perspective, getting input for security testing, and establishing good communication**."],
    ["**The public and society**", "Important to convey that **information security is a community effort and responsibility**."],
    ["**Regulatory agencies**", "Necessary for **ensuring compliance with applicable laws** regarding information security."],
  ] } });
  B.push({ box: { kind: "warn", title: "How the official exam used this table", body: "Sample Q2: you must keep **external vendors compliant with government-mandated guidelines**. The answer is **federal and local agencies that communicate the guidelines** — they are the **source** of the guidelines, and the guidelines may change, so the channel to them must stay open. Customers, users, vendors and the public all need to be informed, but **the information comes from the regulators**. Map the stem’s concern (compliance with law) to the stakeholder whose row says “compliance” — **regulatory agencies**." } });
  B.push({ h3: "The NIST 800-30 task lists — three phases" });
  B.push({ table: { head: ["Phase", "Tasks [NIST 800-30]"], widths: [3.0, 11.0], rows: [
    ["**Preparing** for a risk assessment", "Identify the **purpose** · identify the **scope** · identify the **assumptions and constraints** · identify the **sources of information** to be used as inputs · identify the **risk model and analytic approaches** (assessment and analysis approaches)."],
    ["**Conducting** a risk assessment", "Identify **threat sources** relevant to the organization · identify **threat events** those sources could produce · identify **vulnerabilities** that could be exploited, and the **predisposing conditions** affecting successful exploitation · determine the **likelihood** that sources would **initiate** events and that the events **would be successful** · determine the **adverse impacts** to operations and assets, individuals, other organizations and the nation."],
    ["**Communicating and sharing**", "**Communicate** the risk assessment results · **share information** developed during the assessment to **support other risk management activities**."],
  ] } });
  B.push({ p: "**Order inside “conducting” is examinable logic:** sources → events → vulnerabilities and predisposing conditions → likelihood → impact. A threat source produces a threat event that exploits a vulnerability; only then can you say how likely and how damaging it is. An option that determines impact before identifying threat sources has the chain backwards." });
  B.push({ p: "**“Current and future” threats.** The LO says to identify **current and future** security threats. That is why the assessment must be **repeated at intervals** (§1.1.1), why **emergent vulnerabilities** arise as missions, environments and technologies change (§1.3.2), and why **continuous monitoring** is recommended. A technique that only catalogues today’s known attacks is incomplete." });

  // --- AS-1.2.1 ---
  B.push({ h2: "AS-1.2.1 (K2) — Understanding Security Policies and Procedures" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the concept of security policies and procedures and how they are applied in information systems." } });
  B.push({ p: "Policies **vary among organizations** by business model, industry and unique risks, but **their goals are similar**. **The basis of all security policies should be a security risk assessment** that examines specific threats and how they impact the organization [Jackson, 2010]. The syllabus then lists **eighteen example policies**. One K2 question is guaranteed on this objective, and it is usually decided by **matching a behaviour to the policy that governs it**." });
  B.push({ table: { title: "The eighteen example security policies", head: ["Policy", "What it defines — the words that identify it"], widths: [3.4, 10.6], rows: [
    ["**Acceptable Use**", "Practices a user **must adhere to**; **acceptable and non-acceptable behavior** using networks, websites and data; applies to **internal and external users**; should define rules for **acceptable, unacceptable and required behavior**."],
    ["**Minimum Access**", "The **minimum levels of access needed to perform certain tasks** — prevents access rights **in excess of what is needed**, which create opportunities for **inadvertent or intentional abuse of privileges**."],
    ["**Network Access**", "Criteria for accessing **LANs and wireless networks**; what is permissible on the network; **often prohibits users from adding unauthorized devices such as routers and hot spots**."],
    ["**Remote Access**", "What is needed so **remote network access** can be granted to internal and external users; **VPN usage** is often covered here."],
    ["**Internet Access**", "Permissible **Internet usage by employees and guests** — which **types of websites** may be accessed, and whether **non-business use** is allowed. Sometimes split out from acceptable use because so many people do business on the Internet."],
    ["**User Account Management**", "**Creation, maintenance and deletion** of user accounts, plus **regular auditing of accounts**."],
    ["**Data Classification**", "Which data are **sensitive** and must be secured, so controls match **value to the organization and its customers**. **The business area that creates the data classifies it.** Example scale: **public · confidential · highly confidential · private · secret**."],
    ["**Configuration and Change Management**", "How security settings are applied to devices and applications; **standard configurations**, an **approval process for all changes**, and a **rollback process**. Risk: an **unauthorized change** creates an **undetected vulnerability**."],
    ["**Server Security**", "Responsibility of **server owners** to follow corporate and industry practice; **baseline configurations** defined and maintained; backup and recovery; **limiting active services** to those necessary; monitoring and auditing."],
    ["**Mobile Devices**", "Lost or stolen laptops and phones, **high malware risk**; which data must be **encrypted**, anti-malware currency, **passwords**, which organizational information may reside on the device, **cable locks**, reporting **lost or stolen devices**."],
    ["**Guest Access**", "Protects the organization while **hosting guests on its networks** — guests **read and agree to the acceptable use policy**, e.g. sign it and receive **a code for temporary access**."],
    ["**Physical Security**", "Controls for **physical facilities**, because **physical proximity** raises breach risk; also **power loss, theft, fire, natural disasters**, and which devices may be **taken out of or brought into** sensitive areas."],
    ["**Password Policy**", "Minimum requirements for **strong passwords**; time between **mandatory changes**; protecting privacy — **no “remember password” in browsers, no sharing, no sending passwords by email**."],
    ["**Malware Protection**", "Framework of defenses and behaviors for **preventing, detecting and removing malware** — e.g. **restricting USB drives**."],
    ["**Incident Response**", "How to respond to a **security-related incident** — **in place before** an incident, to avoid case-by-case decisions; covers **communication, media responses and law enforcement notification**."],
    ["**Audit Policy**", "**Authorizes auditors to request access** to systems — log data, network traffic records, forensic data."],
    ["**Software Licensing**", "How software is obtained and licensed; licence violations bring **fines and legal action**; key prohibition: **downloading and installing unapproved software**."],
    ["**Electronic Monitoring and Privacy**", "The organization’s **right and responsibility to monitor** communications (email, social media); which monitoring is done and which data is collected; **legal counsel is needed** because laws vary by country."],
  ] } });
  B.push({ h3: "Data classification — the five levels in order" });
  B.push({ table: { head: ["Level", "Who may see it", "Example"], widths: [2.6, 6.2, 5.2], rows: [
    ["**Public**", "**Anyone, inside or outside** the organization.", "Outward-facing documents and webpages."],
    ["**Confidential**", "**Normally the default** for internally created documents; **only authorized users**; **NDAs** often required before sharing with third parties.", "A **sales report**; internal email, reports, presentations."],
    ["**Highly confidential**", "**Only certain people**; sharing **not allowed except with explicit permission of the data owner**.", "**Trade secrets, strategic plans, product designs, nonpublic financial data**."],
    ["**Private**", "Often restricted to **officers of the organization**, specifically authorized; disclosure could cause **major negative impact such as financial harm**; **protect with extreme care**.", "**R&D information, merger and acquisition plans, customer credit card and account information**."],
    ["**Secret**", "Corporate: information **obtained from an external party** that must not become known **inside or outside**; comparable to highly confidential but **may have no tangible value for the organization itself** — so **not a trade secret**. Military/government: known only to people with **security clearance**.", "A **consultant’s design document** for a multi-company technology; particulars of **defense research projects**."],
  ] } });
  B.push({ h3: "Policies versus procedures" });
  B.push({ p: "**Security procedures specify the steps** to be taken in **implementing a specific policy or control**, and the steps to be taken **in response to a specific security incident**. **Policies, standards and guidelines describe the controls that should be in place; a procedure explains how to implement them step by step** — e.g. a procedure for **granting user access levels** so that the rights satisfy the applicable policy. Formal, documented procedures **facilitate implementation** of policies and mandated controls." });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective", body: "Sample Q3 asked for **a consequence of a policy that minimizes access to a system or device to acceptable levels**. The official answer: **devices that do not conform are removed from the wireless network** — non-conforming devices are removed **until they conform**. Rejected: “more devices are added” (not an expected result), “controls of self-provisioning devices such as routers are prohibited” (such controls are **encouraged**), and “VPN access is severely restricted” (access is **controlled, not severely limited**). The wording blends **minimum access** with the **network access** policy’s ban on unauthorized routers and hot spots — learn both rows together." } });

  // --- AS-1.2.2 ---
  B.push({ h2: "AS-1.2.2 (K4) — Analysis of Security Policies and Procedures" });
  B.push({ box: { title: "Original syllabus statement", body: "Analyze a given set of security policies and procedures along with security test results to determine effectiveness." } });
  B.push({ p: "**Before evaluating** a set of policies and procedures, **determine the objective(s) of the evaluation** and **define criteria by which to judge adequacy**. Criteria may come from standards such as **COBIT, ISO 27001 or PCI**. It is also necessary to define:" });
  B.push({ ul: [
    "**Which resources are needed** in terms of skills and knowledge in the areas being evaluated",
    "**How to measure the adequacy** of the policies and procedures",
    "**What to measure and assess** — e.g. **effectiveness, efficiency, usability, adoption**",
    "**Where the policies and procedures are located** in the organization",
    "**A checklist** to guide the assessment and add consistency — it **directs the auditor where to look and what to expect**",
  ] });
  B.push({ h3: "What the auditor does — static and dynamic tasks" });
  B.push({ p: "Tools such as **password audit tools** help test whether controls accomplish their goals and generate data for later risk assessment. The auditor looks for **“proof” of compliance** to policies, controls and standards. Some tasks are **static**, others — such as **observing processes in action** — are **dynamic**:" });
  B.push({ table: { head: ["Auditor task", "Static or dynamic? (guide’s reading)"], widths: [10.0, 4.0], rows: [
    ["Reviews **system documentation**", "Static"],
    ["**Surveys** people on their perception of effectiveness", "Static (opinion)"],
    ["**Interviews** key personnel involved in the controlled processes", "Static (opinion)"],
    ["**Witnesses** systems and processes being performed", "**Dynamic**"],
    ["Analyzes **previous audit results** to discover trends", "Static"],
    ["Analyzes **logs and reports**", "Static (evidence)"],
    ["Reviews **technical control configuration** — firewall, IDS configuration", "Static"],
    ["**Samples data transactions** for anomalies or suspicious transactions", "Dynamic / evidence-based"],
  ] } });
  B.push({ lead: "The syllabus names only **witnessing processes in action** as a dynamic task. The other labels in this table are this guide’s reading and are not examined as such." });
  B.push({ h3: "Controls — three types, four functions" });
  B.push({ p: "**Security controls are technical or administrative safeguards or countermeasures to avoid, counteract or minimize loss or unavailability due to threats acting on their matching vulnerability**, i.e. security risk [Northcutt, 2014]. Example: in a payroll system, **two people must separately approve a change to an employee’s pay rate**. Security testers must know their organization’s controls and **include tests for them**." });
  B.push({ table: { head: ["Control types (categories)", "Specific controls under each category"], widths: [6.0, 8.0], rows: [
    ["**Administrative · Technical · Physical**", "**Preventive · Detective · Corrective · Recovery**"],
  ] } });
  B.push({ p: "The types **work together**: **in general, controls must be provided from each category** to effectively protect an asset [Jackson, 2010]. The **SANS Top 20 Critical Security Controls** list is cited as a reference." });
  B.push({ h3: "Why security tests are needed on top of policy analysis" });
  B.push({ p: "**The primary difference** between security testing and a **static analysis** of policies and procedures is **the use of results from tests designed specifically to verify or validate their effectiveness**. These tests **focus on the risk that a security policy may be in place, may be followed, but is not effective in protecting assets.**" });
  B.push({ ul: [
    "You may be **told** during an assessment that certain tasks are performed; **a security test of those tasks** shows how effective they are **in practice**.",
    "A **password policy** may seem reasonable and effective **on paper**, but **when a password cracking tool is used, the procedure may fall short of its goals**.",
    "Policies and procedures are **a source of security tests**, but **attacks are always evolving** — new attacks emerge and new defects become evident — so testers must also test **from the attacker mindset**.",
  ] });
  B.push({ box: { kind: "ok", title: "The K4 decision rule", body: "Asked for the **optimum way to determine effectiveness** of policies and procedures (Sample Q4, 3 points): **analyze the results from a security test to validate effectiveness.** Reject: **static analysis alone** (static analysis belongs on the code, if anywhere), **current threats and attacks only** (the focus must also include configurations and more), **emerging threats only**. The syllabus’s concern is a policy that is **in place and followed but ineffective** — only a test can expose that." } });

  // --- AS-1.3.1 ---
  B.push({ h2: "AS-1.3.1 (K2) — Security Auditing and the Purpose of a Security Audit" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the purpose of a security audit." } });
  B.push({ p: "**Security auditing is a manual examination and evaluation that identifies weaknesses in an organization’s security processes and infrastructure.** Audits at the **procedural level** (e.g. reviewing internal controls) may be **manual**; audits at the **architectural level** are often performed with **security audit tools**, possibly aligned with a vendor’s networking, server and workstation solution." });
  B.push({ p: "Like testing, **an audit does not guarantee that all vulnerabilities will be found** — it is **one more activity** to identify problem areas and **indicate where remediation is needed**." });
  B.push({ table: { title: "Auditing versus testing — the scope distinction", head: ["", "Security auditing", "Security testing"], widths: [2.4, 5.8, 5.8], rows: [
    ["**Scope**", "**Much larger** than testing", "Narrower, technology-focused"],
    ["**Typical targets**", "**Procedures, policies and controls that are difficult to test in a direct way**", "**Technologies that support security** — **firewall configuration, correct application of authentication and encryption, application of user rights**"],
    ["**Relationship**", "**Identifies deficiencies and areas of importance to test**", "**Proves or disproves that the security controls are actually in place and working effectively**"],
    ["**Overlap**", "Some auditing approaches **include testing** as part of the audit", "Testing from an attacker perspective = **ethical hacking / penetration testing**"],
  ] } });
  B.push({ h3: "The five pillars of security auditing [Jackson, 2010]" });
  B.push({ table: { head: ["Pillar", "Key syllabus points"], widths: [2.4, 11.6], rows: [
    ["**Assessment**", "Document and identify **potential threats, key assets, policies and procedures, and management’s tolerance for risk**. **Not one-time events** — performed regularly, which also shows whether policies are **still relevant and effective**."],
    ["**Prevention**", "**Beyond technology**: administrative, operational and technical controls; policies, procedures and **awareness**. Preventing all attacks is **unrealistic**, but combined defenses make attacks **much more difficult**."],
    ["**Detection**", "How a breach or intrusion is **identified**. Without it you **do not know whether the network has been compromised**. **Early detection enables appropriate reaction** to recover services quickly."],
    ["**Reaction**", "Reaction time is greatly reduced with good defenses and detection. **The speed and efficiency of incident response is a key indicator** of the effectiveness of an organization’s security efforts."],
    ["**Recovery**", "Determine **what occurred** so recovery does **not recreate the same vulnerability**. **Does not end with restoring the system** — **root cause analysis** decides what process, procedure and technology changes reduce recurrence. The auditor ensures there is **a recovery plan that includes preventing similar incidents**."],
  ] } });
  B.push({ h3: "What a security audit might detect (§1.3.1)" });
  B.push({ table: { head: ["Finding", "Syllabus example"], widths: [4.4, 9.6], rows: [
    ["**Inadequate physical security**", "Policy requires encryption of customer data, but a **weekly printed customer report** is thrown in the trash by managers — **“dumpster diving”**."],
    ["**Inadequate password maintenance**", "Users change passwords every 30 days but **alternate between “PasswordA” and “PasswordB”**. (**Password history** is a common feature of password auditing tools.)"],
    ["**Inadequate controls for user rights and sharing privileges**", "Users with **more access rights than their job needs**; an individual’s files **shared on the network** when they should be private — especially notebook users on home or public **Wi-Fi**."],
    ["**Inadequate server-level security**", "**Port allocation and security · protection of data · protection of user accounts** (logins and other sensitive information)."],
    ["**Inadequate application of vendor security updates**", "Patches not applied — **the official answer to Sample Q1**."],
    ["**Inadequate intrusion detection mechanisms**", "Breaches go unnoticed."],
    ["**Inadequate response plans** in the event of a breach", "No incident response readiness."],
  ] } });
  B.push({ box: { kind: "warn", title: "Purpose versus practice — the Q1 trap", body: "Sample Q1 asked for **a purpose of a security audit**. Correct: **to reveal insufficient patch updates provided by the vendor**. The distractors — prevent simple passwords, halt unauthorized intruders, force periodic password changes — are **good practices or controls**, not the purpose of an audit. **An audit reveals and evaluates; it does not prevent, halt or enforce.** Any option whose verb is a control verb (prevent, halt, require, block) is not describing an audit." } });

  // --- 1.3.2 ---
  B.push({ h2: "§1.3.2 — Risk Identification, Assessment and Mitigation (supports AS-1.1.x and 1.3.1)" });
  B.push({ p: "Once the audit identifies problem areas, **risk must be evaluated and an improvement plan put in place**. **Risk identification** is **documenting a risk or an area of risk**; **risk assessment** **assigns a value** to the identified risks. **Traditional IT risk assessment models are not sufficient for IT security risks** — the model must be **specifically oriented to IT security risk profiles**." });
  B.push({ box: { title: "Risk exposure — the one formula in the chapter", body: "**Risk exposure = potential impact (or loss) × likelihood of that loss occurring.** Likelihood may be determined with **NIST SP 800-30** (Guide for Conducting Risk Assessments) or the **OWASP Risk Rating Methodology**. The syllabus’s illustration: one customer’s account is compromised — what if that customer had **$100 million** on deposit?" } });
  B.push({ h3: "The five risk factors (NIST 800-30)" });
  B.push({ table: { head: ["Factor", "Definition and the points that get examined"], widths: [3.2, 10.8], rows: [
    ["**Threat**", "**Any circumstance or event with the potential to adversely impact** operations and assets, individuals, other organizations or a country **through an information system** via **unauthorized access, destruction, disclosure, modification of information, and/or denial of service**. Threat events are caused by **threat sources**, characterised by **intent and method** targeted at exploiting a vulnerability, or a **situation and method that may accidentally** exploit one. **Source types: hostile cyber or physical attacks · human errors of omission or commission · structural failures of organization-controlled resources · natural and man-made disasters, accidents and failures beyond the organization’s control.** **Multiple sources can cause the same event** — a provisioning server taken offline by DoS, a malicious admin, an admin error, a hardware fault or a power failure."],
    ["**Vulnerability**", "**A weakness in an information system, system security procedures, internal controls, or implementation that could be exploited by a threat source.** Mostly linked to controls **not applied** or **applied with a weakness**. **Emergent vulnerabilities** arise over time as missions, environments and technologies change — **controls degrade**, so risk assessments must be **maintained across the lifecycle** with **continuous monitoring**. Vulnerabilities also live in **governance structures**, **external relationships** (energy, supply chains, telecoms), **mission/business processes** and **enterprise/security architectures** (e.g. lack of diversity or resiliency)."],
    ["**Predisposing condition**", "Conditions that affect the likelihood that a threat event, once initiated, results in adverse impact (grouped with vulnerabilities by the syllabus)."],
    ["**Impact**", "**Magnitude of harm** from **unauthorized disclosure, modification, destruction of information, or loss of availability**. Felt by heads of agencies, mission/business owners, information owners, process owners, system owners, and the public relying on the organization. Organizations should document **the process, assumptions, sources and methods, and rationale** for impact determinations."],
    ["**Likelihood**", "The **probability (or possibility) that the threat event will result in an adverse impact, regardless of the magnitude of harm**. Combines likelihood of **initiation** with likelihood of **impact**. For **adversarial threats**: **adversary intent, capability and targeting**. For **non-adversarial** events: **historical evidence, empirical data**. Always assessed **within a specific time frame**."],
  ] } });
  B.push({ h3: "Scoring and the risk matrix" });
  B.push({ p: "Likelihood and impact may be scored **0–9** against specific criteria, or estimated **low / medium / high**. The syllabus’s data-privacy example:" });
  B.push({ table: { head: ["Band", "Likelihood criterion (data privacy)", "Impact criterion"], widths: [2.4, 6.8, 4.8], rows: [
    ["**0 – <3 Low**", "Private data **not stored on local devices** and **encrypted** on secure media", "Fewer than **200** people affected"],
    ["**3 – <6 Medium**", "Private data **may reside on notebooks, but encrypted**", "**200 to 1,000** people"],
    ["**6 – 9 High**", "**Not known** whether private data resides on local devices; **encryption cannot be assured**", "Over **1,000** people"],
  ] } });
  B.push({ table: { title: "Overall risk severity matrix (syllabus example)", head: ["Impact ↓ / Likelihood →", "Low", "Medium", "High"], widths: [4.4, 3.2, 3.2, 3.2], rows: [
    ["**High**", "Medium", "**High**", "**Critical**"],
    ["**Medium**", "Medium", "Medium", "High"],
    ["**Low**", "Low", "Low", "Medium"],
  ] } });
  B.push({ ul: [
    "**Medium likelihood × high impact = high** — the syllabus’s worked reading of the matrix.",
    "**Business impact information beats technical impact information**; use technical impact only when there is no business information.",
    "The report should state **whether a risk is ongoing** — **continual risks indicate increased likelihood** of loss.",
    "**The higher the severity, the more immediate the required response.** The **level of detail** matches the **purpose** of the assessment.",
  ] });

  // --- 1.3.3 ---
  B.push({ h2: "§1.3.3 — People, Process and Technology" });
  B.push({ p: "Every security incident — **from break-ins to lost customer records** — can usually be traced back to **a deficiency attributable to people, process, or technology** [Jackson, 2010]. Together the three form an **“iron triangle”**; **ignore any one and the whole IT delivery and security effort suffers**." });
  B.push({ table: { head: ["Component", "Syllabus points"], widths: [2.4, 11.6], rows: [
    ["**People**", "End-users, sysadmins, data owners, managers — varying **skills, attitudes and agendas**. **Policies and controls are ineffective if people do not follow them**; remediation may be **awareness training or penalties for noncompliance**."],
    ["**Process**", "How IT and security services are delivered; procedures and standards. To be effective processes must be **defined, up to date, consistent, and follow best practices**; they define **roles, responsibilities, controls, tools and steps**."],
    ["**Technology**", "Facilities, equipment, hardware and software. Lets people do repetitive jobs **faster and with fewer errors**; some tasks (e.g. **password enforcement**) are impossible without tools. Risk: **technology used incorrectly helps people make mistakes faster**."],
  ] } });
  B.push({ p: "**The auditor should look at a system from the perspective of an attacker** and anticipate how people, process or technology could be exploited. Management is **often surprised** that mechanisms they thought secure are not. **The only way to know for sure is to test from an attacker perspective — ethical hacking or penetration testing.** This is where auditing and testing meet most directly: **auditing identifies deficiencies; testing proves or disproves that controls are in place and effective.**" });
  B.push({ box: { kind: "warn", title: "The tax-agency scenario — accepting a known risk has a price", body: "An audit finds criminals can file **fraudulent tax returns** and collect refunds; **security testing confirms it** and the risk is rated **critical**. The agency acknowledges the risk but **decides not to act until next year**. Defrauded taxpayers who **followed all prescribed procedures** can claim against an agency **that was aware of the defect** — **the agency is liable**. Lesson: once testing confirms a risk, deferring mitigation shifts liability onto the organization." } });

  // ================= SECTION 2 =================
  B.push({ pagebreak: true });
  B.push(...require("./sec_ch1_concepts")());
  B.push({ h2: "2.7 Chapter 1 keyword glossary" });
  B.push({ table: { head: ["Keyword", "Working definition for the exam"], widths: [3.4, 10.6], rows: [
    ["**data privacy**", "Protection of personal and sensitive data from unauthorized disclosure — the subject of the 0–9 scoring example and of the Electronic Monitoring and Privacy policy."],
    ["**ethical hacker**", "Someone who tests a system **from an attacker perspective with authorization** — the syllabus equates this with **penetration testing**."],
    ["**information security**", "Protection of information and systems against loss of **confidentiality, integrity and availability**."],
    ["**penetration testing**", "Testing **from an attacker perspective** to know whether a defense is **working and effective** — the only way to know for sure."],
    ["**risk assessment**", "The activity that **assigns a value** to identified risks (impact and likelihood); also the overall NIST process."],
    ["**risk exposure**", "**Potential impact or loss × likelihood** of the loss occurring."],
    ["**risk mitigation**", "Actions to reduce risk, prioritised by severity — **the higher the severity, the more immediate the response**."],
    ["**security attack**", "An attempt to gain unauthorized access to, or use of, a system, service, resource or information."],
    ["**security audit**", "**Manual examination and evaluation** that identifies weaknesses in security processes and infrastructure."],
    ["**security policy**", "A high-level document describing the principles, approach and major objectives of the organization regarding security; **based on a risk assessment**."],
    ["**security procedure**", "**Steps** to implement a specific policy or control, or to respond to a specific incident."],
    ["**security risk**", "A risk associated with a security weakness — loss of confidentiality, integrity or availability."],
  ] } });

  // ================= SECTION 3 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 3 — Tables and Summaries" });
  B.push({ table: { title: "3.1 The chapter on one page", head: ["Topic", "What to remember", "LO"], widths: [3.0, 9.0, 2.0], rows: [
    ["Risk assessment role", "Source for planning and design · prioritization by exposure · business alignment · snapshot · checklist + many people", "AS-1.1.1"],
    ["Assets", "Five questions: which · how valuable · where · accessed how · secured how", "AS-1.1.2"],
    ["Risk assessment technique", "External stakeholders · NIST prepare / conduct / communicate · current **and future** threats", "AS-1.1.3"],
    ["Policies", "18 example policies · data classification (5 levels) · procedures = steps", "AS-1.2.1"],
    ["Policy analysis", "Objectives + criteria first · checklist · auditor tasks · controls (3 types × 4 functions) · **test results prove effectiveness**", "AS-1.2.2"],
    ["Audit purpose", "Manual examination identifying weaknesses · 5 pillars · typical findings · **audit identifies, test proves**", "AS-1.3.1"],
  ] } });
  B.push({ table: { title: "3.2 Behaviour → policy lookup", head: ["If the stem mentions…", "…the policy is"], widths: [9.0, 5.0], rows: [
    ["A user adding a home router or hot spot to the office network", "**Network Access**"],
    ["Rights “in excess of what is needed” for a task", "**Minimum Access**"],
    ["VPN rules for contractors working from home", "**Remote Access**"],
    ["Gambling sites, non-business browsing", "**Internet Access**"],
    ["Leavers’ accounts still active; periodic account review", "**User Account Management**"],
    ["Who decides that a sales report is “confidential”", "**Data Classification** (the creating business area)"],
    ["An unapproved change to a firewall rule; rollback", "**Configuration and Change Management**"],
    ["Default services left running on a server; baseline configuration", "**Server Security**"],
    ["Lost phone; cable locks; encrypted laptop", "**Mobile Devices**"],
    ["Visitor Wi-Fi code after signing the AUP", "**Guest Access**"],
    ["Badge access to the server room; fire; devices carried out", "**Physical Security**"],
    ["“Remember password” in the browser; emailed passwords", "**Password Policy**"],
    ["USB drives restricted", "**Malware Protection**"],
    ["Who talks to the press and police after a breach", "**Incident Response**"],
    ["Auditors requesting log data and traffic records", "**Audit Policy**"],
    ["Installing unapproved software", "**Software Licensing**"],
    ["Monitoring employee email and social media", "**Electronic Monitoring and Privacy**"],
  ] } });
  B.push({ table: { title: "3.3 Audit versus test versus policy review", head: ["Activity", "Verb", "Nature", "Output"], widths: [3.4, 2.6, 3.6, 4.4], rows: [
    ["Policy and procedure review", "Describe", "Static", "Gaps on paper; adequacy against criteria"],
    ["Security audit", "Identify / evaluate", "Mostly manual; static + witnessing", "Deficiencies and areas to test; recommendations"],
    ["Security test", "**Prove / disprove**", "Dynamic, attacker perspective", "**Evidence of effectiveness** in practice"],
    ["Risk assessment", "Value / prioritise", "Analytic, periodic", "Severity per risk → test priority"],
  ] } });
  B.push({ table: { title: "3.4 Control matrix (fill one control in each cell to self-test)", head: ["", "Preventive", "Detective", "Corrective", "Recovery"], widths: [2.6, 2.85, 2.85, 2.85, 2.85], rows: [
    ["**Administrative**", "Acceptable use policy, two-person approval", "Audit of user accounts", "Disciplinary action, retraining", "Incident response plan"],
    ["**Technical**", "Firewall, authentication, encryption", "IDS, log analysis", "Patching, quarantine", "Backup restore"],
    ["**Physical**", "Locks, badge access", "CCTV, guards", "Repair of broken locks", "Alternate site"],
  ] } });
  B.push({ lead: "Table 3.4 examples are illustrative, not syllabus text; the syllabus defines only the three types and four functions and the rule that controls from each category are needed." });
  B.push({ table: { title: "3.5 Five pillars of auditing — one line each", head: ["Pillar", "Question it answers"], widths: [3.0, 11.0], rows: [
    ["Assessment", "What threats, assets, policies and risk tolerance do we have — **still relevant**?"],
    ["Prevention", "How hard have we made an attack (people, process, technology)?"],
    ["Detection", "Would we **know** if we were compromised?"],
    ["Reaction", "How **fast** do we respond? (**key indicator** of security effectiveness)"],
    ["Recovery", "Can we restore **without recreating the vulnerability**, and did we do **root cause analysis**?"],
  ] } });
  B.push({ box: { kind: "ok", title: "Reproduce from memory before moving on", body: ["**Table 3.2** (behaviour → policy) and the **data-classification ladder** carry the guaranteed AS-1.2.1 mark.", "**The rule “test results prove effectiveness”** carries the guaranteed AS-1.2.2 K4 mark.", "**The five asset questions** and **the NIST conduct sequence** carry the floating K4 mark (AS-1.1.2 / 1.1.3)."] } });

  return B;
};
