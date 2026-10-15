// CT-SEC Chapter 8 — Sections 1 to 3
module.exports = function () {
  const B = [];

  B.push({ h1: "Section 1 — Syllabus Explanation" });
  B.push({ p: "Chapter 8, **Security Testing Tools**, carries **4 learning objectives** across two sub-chapters (8.1 Types and Purposes · 8.2 Tool Selection). The Exam Structure Table allocates **3 questions** and **5 of the 80 points**. Teaching time is **55 minutes** — **5.5 points per teaching hour, the best return in the syllabus**." });
  B.push({ p: "The chapter’s **3-point K4 (AS-8.2.1)** asks you to analyze security testing needs that tools should address. In the official Sample Exam that question is a **firewall test scenario** — so it draws on **Chapter 5** knowledge as much as Chapter 8. The other two questions are K2: one guaranteed on **static vs dynamic tools (AS-8.1.1)**, one from **open source issues** or **vendor capabilities**." });
  B.push({ table: { head: ["LO ID", "K", "Objective (syllabus statement)", "Qs", "Pts"], widths: [1.7, 0.7, 9.6, 1.0, 1.0], rows: [
    ["AS-8.1.1", "K2", "Explain the role of static and dynamic analysis tools in security testing.", "**1**", "1"],
    ["AS-8.2.1", "**K4**", "Analyze and document security testing needs to be addressed by one or more tools.", "**1**", "**3**"],
    ["AS-8.2.2", "K2", "Understand the issues with open source tools.", "1 of 2†", "1"],
    ["AS-8.2.3", "K2", "Understand the need to evaluate the vendor’s capabilities to update tools on a frequent basis to stay current with security threats.", "1 of 2†", "1"],
    ["**Chapter 8 total**", "—", "**K2 = 2 · K4 = 1**", "**3**", "**5**"],
  ] } });
  B.push({ lead: "† One K2 drawn from AS-8.2.2 / 8.2.3 — the Sample Exam drew **8.2.2** (Q43, a GNU GPL tool)." });
  B.push({ box: { title: "Exam allocation you must know", body: "Chapter 8 = **3 questions / 5 points**; Sample Exam **#41 to #43** (1 + 3 + 1 points)." } });
  B.push({ box: { kind: "warn", title: "The one thing that decides this chapter", body: "**Open source has no vendor — so the question is your own team’s capacity.** For a GNU GPL tool (Q43), the maintenance consideration is **the technical capabilities of your team to support and customize the tool**; every option mentioning a **vendor**, **updates from the vendor** or **licence and support contract cost** is wrong. For commercial tools the mirror rule applies: **evaluate the vendor’s ability to update frequently** to keep pace with threats." } });

  B.push({ h2: "AS-8.1.1 (K2) — Types and Purposes of Security Testing Tools" });
  B.push({ box: { title: "Original syllabus statement", body: "Explain the role of static and dynamic analysis tools in security testing." } });
  B.push({ h3: "Where security tools came from" });
  B.push({ ul: [
    "**Exploits devised by the hacking community drove the development of security testing tools.** Early tools (e.g. **password cracking**) were **shared and improved** by hackers; **dedicated** to tasks and environments; **usability was not an issue** for technical users.",
    "Some **hacker tools became the basis for legitimate security testing tools**. Example: **John the Ripper** — an early **open source password cracker** for Unix, now **used legitimately to detect weak Unix passwords**.",
    "As major suppliers built security tools, they gained **broader functionality and better usability** — but **more complex configuration and implementation concerns**.",
    "Frameworks such as **Nessus and Metasploit** emerged as **open source** with expanded functionality and in some cases **an easily learnable GUI**.",
  ] });
  B.push({ h3: "Today’s landscape" });
  B.push({ ul: [
    "**The number of tools is massive** — a dedicated tool exists for almost any environment or task, open source or licensed.",
    "The challenge: most are **intelligent systems deploying non-standardized tests** — they may use **different test data, implementations and interpretations of results**. Since the same defense or vulnerability can be **implemented in different ways**, **selecting and using tools is a challenge**.",
    "Tools **automate the evaluation of defenses** and **detect known types of vulnerabilities**.",
    "Lists of categorized tools: **Web Application Security Consortium**, **OWASP**; frameworks **BackTrack / Kali Linux** offer other classifications; **sectools.org**. **Commercial tools are few compared with open source.** The advanced tester **maintains and updates his or her own tool list**.",
  ] });
  B.push({ h3: "Static vs dynamic in security testing" });
  B.push({ table: { head: ["", "Static analysis tools", "Dynamic analysis tools"], widths: [2.4, 5.8, 5.8], rows: [
    ["**Advantage**", "**Can be performed very early in the lifecycle**; available for **most languages**; usually **report on security aspects**", "Exercise the running system"],
    ["**Definition (security context)**", "Test activities while the object **is not in operational mode**", "Running probes — but **often probing the system rather than the application under test**"],
    ["**The twist**", "—", "A **dynamic** security tool may perform a **static scan** — e.g. **of a database**. If **the entire system** is the test object, they truly are dynamic tools"],
  ] } });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective", body: "Sample Q41: how do dynamic **security** analysis tools differ from general dynamic analysis tools? **The security tools probe the system rather than just the application under test.** Rejected: “work the same in dynamic or static mode” (there are **both** dynamic and static security tools); “better at memory leaks” (**general** dynamic tools detect leaks); “tailored to the language” (true of **all static analysis tools**)." } });

  B.push({ h2: "AS-8.2.1 (K4) — Analyzing and Documenting Security Testing Needs" });
  B.push({ box: { title: "Original syllabus statement", body: "Analyze and document security testing needs to be addressed by one or more tools." } });
  B.push({ table: { title: "Documents that can form a test basis for security testing", head: ["#", "Test basis"], widths: [0.8, 13.2], rows: [
    ["1", "**The organization’s security policy**"],
    ["2", "**The organization’s test policy**"],
    ["3", "**Results of threat and risk analysis** for the actual system/project"],
    ["4", "**Requirements and other system specifications**"],
    ["5", "**System architecture and design**"],
    ["6", "**Security (test) strategy**"],
    ["7", "**The system or application under test**"],
    ["8", "**Known security threats, exploits and vulnerabilities**"],
    ["9", "**User profiles**"],
  ] } });
  B.push({ p: "Requirements and design documents should show **how data is protected**, giving an overview of:" });
  B.push({ ul: [
    "**Interfaces to be tested (including the GUI)**",
    "**Protocols and standards to be verified**",
    "**Web coding guidelines** promoting secure coding to be used",
    "**System component configurations to be verified (hardened)**",
  ] });
  B.push({ p: "Also determine **whether security testing will be a development activity or a maintenance/operations activity**. **All this leads to the requirements for the security test tool set.**" });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K4, 3 points)", body: ["Sample Q42: you have **reviewed the firewall implementation plan, verified the vendor configuration and conducted port scanning**; the organization is worried about **DoS** (it had one with the old firewall). What testing detects unexpected behavior exploitable by DoS? **Create tests that send malformed network packets or fuzzed data and see if they are detected and rejected by the firewall.**", "Rejected: **stress test the servers for failover** and **test whether encryption is fast enough under a DoS** (the goal is to **prevent the attack**, not let it through); **software component hardening** (helps components, **not the firewall**). This is **§5.4.2** knowledge applied to a tool-needs question: the stated need (unexpected behaviour under DoS) determines the tool capability (packet crafting, network fuzzing)."] } });
  B.push({ box: { kind: "ok", title: "K4 method — from need to tool capability", body: "Read the scenario for **what is already done** (strike it), **the remaining risk** (the stated worry), and **the test basis items** it touches (architecture, configurations, protocols, interfaces). The answer names the **tool capability** that addresses that remaining risk — and nothing that addresses a different goal (performance, failover, a different layer)." } });

  B.push({ h2: "AS-8.2.2 (K2) — Issues with Open Source Tools" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the issues with open source tools." } });
  B.push({ ul: [
    "Many security tools are **open source**, under licences that **allow free use and modification of the source code**. (The Advanced Test Manager syllabus covers open source issues in full.)",
    "**Not all organizations can use them** — **regulatory compliance** may force **commercial or otherwise certified tools only**.",
    "Often **free to obtain**, but the organization **may need technical capacity for support and specific configuration**; lacking it, **cost may be incurred to obtain it from the software’s developer**.",
    "**Manuals**, if any, target **a technical audience** and **seldom cover all functionality**; **YouTube** is an additional source.",
  ] });
  B.push({ table: { title: "Aspects of an ROI calculation for an open source tool", head: ["Aspect"], widths: [14.0], rows: [
    ["**Limited scope** of the tool — usually no further functionality is offered"],
    ["**Time to learn** to administer, configure and use it"],
    ["**Time invested in user forums and groups** during the lifecycle"],
    ["**Time to update and upgrade** (and the internal policy on upgrades)"],
    ["**Future direction** — some tools **go away or go commercial**"],
    ["**Responsiveness of the support community**"],
  ] } });
  B.push({ p: "**Licences:** most businesses need **one or a few** security tool licences; only large companies consider more. The number depends on **functional areas delivered** (web application, web services, code analysis…), **frequency and time of use**, and **the number of security testers**." });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective", body: "Sample Q43: for a tool under the **GNU General Public License**, important maintenance consideration? **Technical capabilities of your team to support and customize the tool for your environment.** Rationale: **the GNU license is free and it is an open source community so there is no vendor**; vendor reliability and vendor updates are wrong for that reason; licence and support-contract cost is wrong because **the tool is free** (though customization has development costs)." } });

  B.push({ h2: "AS-8.2.3 (K2) — Evaluating a Tool Vendor’s Capabilities" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the need to evaluate the vendor’s capabilities to update tools on a frequent basis to stay current with security threats." } });
  B.push({ p: "A purchased tool’s vendor should offer services that **allow the security testing service to start and grow to the needed level of internal support**. Attributes to evaluate:" });
  B.push({ table: { head: ["Attribute", "Examples"], widths: [5.0, 9.0], rows: [
    ["**Types of licences**", "**Fixed / desk / floating / token**"],
    ["**Licence scalability**", "**Per functional area, number of licences**"],
    ["**Helpdesk / support facilities**", "**Hours of support**"],
    ["**Forum / user community**", "—"],
    ["**Update frequency**", "**Staying current with security threats** — the LO’s focus"],
    ["**Administration and user manuals**", "—"],
    ["**Support and maintenance contracts**", "—"],
  ] } });

  B.push({ pagebreak: true });
  B.push(...require("./sec_ch8_concepts")());
  B.push({ h2: "2.4 Chapter 8 keyword glossary" });
  B.push({ p: "The syllabus lists **no keywords** for Chapter 8. Useful working terms: **static analysis tool** (analyzes artifacts not in operational mode; early), **dynamic analysis tool** (probes a running system), **vulnerability scanner** (Chapter 5), **ROI** (return on investment in a tool), **floating licence** (shared pool of concurrent licences), **token licence** (usage-based licence units)." });

  B.push({ pagebreak: true });
  B.push({ h1: "Section 3 — Tables and Summaries" });
  B.push({ table: { title: "3.1 Open source vs commercial — what to evaluate", head: ["Concern", "Open source", "Commercial"], widths: [3.4, 5.3, 5.3], rows: [
    ["Support", "**Your team’s capacity**; community responsiveness", "Vendor helpdesk hours, contracts"],
    ["Updates", "Time to update/upgrade; internal upgrade policy", "**Vendor update frequency** vs threats"],
    ["Cost", "Free to obtain; learning, forum, customization time", "Licence types and scalability"],
    ["Documentation", "Technical, incomplete; YouTube", "Administration and user manuals"],
    ["Longevity", "May **go away or go commercial**", "Vendor viability (implicit)"],
    ["Compliance", "May be **forbidden** by regulation", "Certified tools may be required"],
  ] } });
  B.push({ table: { title: "3.2 Need → tool capability (illustrative)", head: ["Need in the scenario", "Capability"], widths: [7.0, 7.0], rows: [
    ["Code-level vulnerabilities early", "Static analysis / security-oriented analyzer"],
    ["Firewall unexpected behaviour (DoS)", "Malformed packet generation, network fuzzing"],
    ["Firewall policy implemented?", "Port scanner"],
    ["Weak passwords on Unix", "Password auditing (e.g. John the Ripper)"],
    ["Known vulnerabilities across many hosts", "Vulnerability scanner"],
    ["Exploitability of a known vulnerability", "Exploitation framework (e.g. Metasploit)"],
  ] } });
  B.push({ lead: "Table 3.2 links Chapter 8’s selection logic to tests named in Chapters 3 and 5; the syllabus names John the Ripper, Nessus and Metasploit but does not map tools to needs." });
  B.push({ box: { kind: "ok", title: "Reproduce from memory before moving on", body: ["**Dynamic security tools probe the system** — the guaranteed K2.", "**Nine test-basis items** and the **need → capability** method — the 3-point K4.", "**Open source = no vendor; your team** and **vendor update frequency** — the pooled K2."] } });

  return B;
};
