// CT-SEC Chapter 8 — Section 2, Key Concepts: each concept explained from the ground up.
module.exports = function () {
  const B = [];
  B.push({ h1: "Section 2 — Key Concepts" });
  B.push({ lead: "Section 1 gives the syllabus wording objective by objective. This section explains what that wording means. Each card builds one idea in order: plain words first, then how it works, an example, how the exam uses it, and what it is easily confused with." });

  B.push({ h2: "2.1 The storyline of Chapter 8" });
  B.push({ p: "Chapter 8 asks three questions about tools. **What kinds are there?** (Many, mostly open source, grown out of hacker tools, running non-standard tests, both static and dynamic.) **How do you decide what you need?** (Start from the test basis, the system’s interfaces, protocols and configurations, and the risk still uncovered, then pick the capability that addresses that risk.) **Who keeps the tool working?** (For **open source**, your **own team**, because there is no vendor. For **commercial** tools, judge the **vendor’s ability to update quickly** as threats change.)" });

  B.push({ h2: "2.2 Tools: types, needs and selection" });
  B.push({ concept: {
    title: "Static and dynamic security tools (AS-8.1.1, guaranteed K2)",
    plain: "**Static** tools examine something **that is not running** (source code, configuration files, a database). **Dynamic** tools exercise a **running** system. Security tools add one twist: dynamic **security** tools usually **probe the whole system** (network, server, platform), not just the application under test.",
    how: ["**History:** **hacker exploits drove the creation of security tools.** **John the Ripper** began as an open source password cracker and is now used **legitimately to find weak Unix passwords**. **Nessus** and **Metasploit** grew into open source frameworks, some with an easy GUI. Commercial tools added functionality and usability, but also configuration complexity.", "**Today:** a **massive** number of tools, mostly open source, from lists such as **WASC, OWASP, Kali Linux (formerly BackTrack) and sectools.org**. Because tools run **non-standardized tests** (different data, implementations and interpretations), **choosing and using them is a challenge**. Advanced testers **keep their own up-to-date tool list**.", "**Tools automate the evaluation of defenses and detect known types of vulnerabilities.**", "**Static tools:** can run **very early in the lifecycle**, exist for **most languages**, and usually **report on security aspects**.", "**Dynamic security tools** probe **the system rather than only the application**. Some dynamic tools even perform a **static scan** (for example, of a database). When the **whole system** is the test object, they are truly dynamic."],
    example: "A static analyzer flags a hard-coded database password in the source on day 3 of coding. Months later, a dynamic vulnerability scanner run against the test server finds an outdated SSL library in the **web server**, a finding about the platform, not the application code.",
    exam: "Official Q41: how do dynamic **security** analysis tools differ from general dynamic analysis tools? → **they probe the system rather than just the application under test.** Memory-leak detection is a feature of **general** dynamic tools. “Tailored to the language” describes **static** tools in general.",
    confuse: "“Dynamic” describes **how** the tool works (running object), not **what** it scans. A dynamic security tool can still scan something **statically**.",
  } });
  B.push({ concept: {
    title: "Analyzing and documenting the needs a tool must meet (AS-8.2.1, guaranteed K4)",
    plain: "Do not start from a tool catalogue. Start from **what must be tested and what risk is still uncovered**, write it down as **requirements for the tool set**, and then choose tools whose **capabilities** match.",
    how: ["**Nine possible test-basis documents:** the **security policy** · the **test policy** · **threat and risk analysis results** · **requirements and specifications** · **architecture and design** · the **security (test) strategy** · **the system under test** itself · **known threats, exploits and vulnerabilities** · **user profiles**.", "**From requirements and design, extract:** the **interfaces** to test (including the GUI) · the **protocols and standards** to verify · the **web coding guidelines** to check · the **component configurations** to verify (hardening).", "**Decide** whether security testing is a **development** activity or a **maintenance/operations** activity, because that changes who uses the tools and how.", "**All of this becomes the requirements for the security test tool set.**"],
    method: "(1) strike everything the scenario says is **already done** · (2) find the **remaining risk** (the stated worry) · (3) pick the tool **capability** that tests that risk, and nothing aimed at a different goal (performance, failover, a different layer).",
    example: "Official Q42: the firewall plan has been reviewed, the vendor configuration verified, and ports scanned. The worry is **DoS**, which happened with the old firewall. Remaining need: unexpected behaviour that DoS could exploit → **send malformed packets or fuzzed data and check the firewall detects and rejects them** (packet-crafting or network-fuzzing capability).",
    exam: "In Q42, reject failover stress tests and “is encryption fast enough during DoS” (they **let the attack through** instead of preventing it), and component hardening (it helps **components**, not the **firewall**). This question uses **Chapter 5 §5.4.2** knowledge.",
    confuse: "A **need** is a test goal (“detect unexpected firewall behaviour under malformed input”). A **tool** is a means. K4 options often name a real, useful tool that serves a **different** need.",
  } });
  B.push({ concept: {
    title: "Open source tools: free to get, not free to own (AS-8.2.2, K2 pool)",
    plain: "Many security tools are **open source**: you may **use and modify** them for free. But **there is no vendor**, so **your own team** must have the **technical capacity to support, configure and customize** them, or pay someone (possibly the tool’s developer) for it.",
    how: ["**Regulation may forbid them:** some organizations must use **commercial or certified** tools only.", "**Manuals**, if they exist, are written for a **technical audience** and **seldom cover everything**. **YouTube** is an extra source.", "**Return-on-investment aspects:** the **limited scope** of the tool · **time to learn** to administer and use it · **time spent in forums and user groups** · **time to update and upgrade** (and your internal upgrade policy) · the tool’s **future direction** (some **disappear or go commercial**) · how **responsive** the **support community** is.", "**How many licences:** most businesses need **one or a few**. The number depends on the **functional areas** covered (web apps, web services, code analysis…), **how often and how long** the tools are used, and the **number of security testers**."],
    example: "A team adopts a GPL-licensed scanner. It costs nothing to download, but the team spends three weeks learning to configure it for their single-sign-on setup, writes custom plug-ins, and must track community releases themselves. Those weeks are the real cost.",
    exam: "Official Q43: for a **GNU GPL** tool, the important maintenance consideration → **the technical capabilities of your team to support and customize the tool for your environment.** Any option about a **vendor’s** reliability or updates, or about **licence and support-contract costs**, is wrong: the licence is free and there is no vendor.",
    confuse: "**Free licence ≠ zero cost.** Customization and support still cost time and money.",
  } });
  B.push({ concept: {
    title: "Evaluating a commercial vendor: can it keep up with threats? (AS-8.2.3, K2 pool)",
    plain: "When you **buy** a tool, the vendor’s services must let your security testing **start and grow** to the level of internal support you need. Above all, the vendor must **update the tool often enough to stay current with new threats**. A security tool that does not know this month’s attacks is out of date.",
    how: ["**Attributes to evaluate:** **licence types** (fixed, desk, floating, token) · **licence scalability** (per functional area, number of licences) · **helpdesk and support** (hours of support) · **forum and user community** · **update frequency** · **administration and user manuals** · **support and maintenance contracts**."],
    example: "Two commercial scanners are compared. Scanner A releases new vulnerability checks within 48 hours of major disclosures. Scanner B updates quarterly. For a public-facing web estate, A wins on the attribute this objective is about, even if B’s floating licences are cheaper.",
    exam: "If the stem is about **staying current with security threats**, the answer is the vendor’s **update frequency**. If the stem is about **open source**, there is no vendor to evaluate, so look at your **own team’s capacity**.",
    confuse: "**Floating** licence = a shared pool used concurrently. **Token** licence = usage-based units. **Desk** licence = tied to a workstation. **Fixed** licence = tied to a named user or machine. You only need to recognise the four names.",
  } });

  B.push({ h2: "2.3 Fuzzy points clarified" });
  B.push({ box: { kind: "warn", title: "Places where the wording is easy to misread", body: [
    "**“Dynamic tools … often probing the system rather than the application”** is the syllabus’s distinction between **security** dynamic tools and **general** dynamic analysis tools. It does not mean dynamic security tools never test the application.",
    "**The need → capability table (Section 3, table 3.2) is this guide’s mapping.** The syllabus names John the Ripper, Nessus and Metasploit, but does not map tools to needs.",
    "**The licence-type explanations in section 2.2 are general industry meanings.** The syllabus only lists the names: fixed, desk, floating and token.",
    "**Chapter 8’s K4 is really a Chapter 5 question.** Revise the firewall tests (port scan, malformed packets and fuzzing, fragmentation, WAF encoding) before attempting it.",
  ] } });
  return B;
};
