// CT-SEC Chapter 8 — Section 4 (questions)
const OFF = (n, pts) => `OFFICIAL · Sample Exam #${n} (${pts})`;
const DER = "Derived from syllabus";

module.exports = function () {
  const B = [];
  B.push({ pagebreak: true });
  B.push({ h1: "Section 4 — Demo Questions with Answers" });
  B.push({ lead: "Questions 1–3 are the **official ISTQB CTAL-SEC Sample Exam questions for Chapter 8** — #41 to #43 — with official answers and rationale. LO tags are inferred and match the Exam Structure Table. Questions 4–15 are derived strictly from the syllabus. Correct options are marked ✔." });

  B.push({ h2: "Part A — The 3 official Chapter 8 questions" });

  B.push({ q: { n: 1, tag: OFF(41, "1 pt"), meta: "LO: AS-8.1.1 (K2) | Syllabus §8.1", correct: ["a"],
    stem: "In what way are dynamic security analysis tools different from general dynamic analysis tools?",
    opts: [
      "The security tools probe the system rather than just the application under test",
      "The security tools work the same in dynamic or static mode",
      "The security tools are better suited to detect problems such as memory leaks",
      "The security tools need to be tailored to the language in which the application is implemented",
    ],
    why: "**(a)** — official answer. (b) **there are both dynamic and static analysis security tools**. (c) **memory leaks are detected by the general dynamic analysis tools, not the security specific ones**. (d) **this is true of all static analysis tools**. Syllabus §8.1: **it is not unusual for the security dynamic testing tools to probe the system rather than the application under test**." } });

  B.push({ q: { n: 2, tag: OFF(42, "3 pts"), meta: "LO: AS-8.2.1 (K4) | Syllabus §8.2.1, §5.4.2", correct: ["a"],
    stem: "You have been given the job of testing the organization’s firewall. You have reviewed the implementation plan and steps, verified that the configuration has been set up as instructed by the firewall vendor and have conducted port scanning. Your organization is particularly concerned about denial of service (DOS) attacks, particularly since they had one when the old firewall was in place. What type of testing should you conduct to help detect unexpected behavior that could be exploited by a DOS attack?",
    opts: [
      "Create tests that will send malformed network packets or fuzzed data and see if they are detected and rejected by the firewall",
      "Implement automated tests to stress test the servers to test the failover capabilities",
      "Test the encryption and decryption algorithms to determine if they are fast enough to deal with the load of a DOS attack",
      "Conduct software component hardening to ensure the attack surface is reduced as much as possible",
    ],
    why: "**(a)** — official rationale: **both of these techniques are used to test firewalls.** (b) and (c) **the goal is to prevent the attack rather than let it get through the firewall**. (d) **software component hardening will help the individual software components, but not the firewall and its implementation**. Syllabus §5.4.2: **using malformed network packets and network fuzzing to exploit an unexpected behavior (e.g. a Denial Of Service)**." } });

  B.push({ q: { n: 3, tag: OFF(43, "1 pt"), meta: "LO: AS-8.2.2 (K2) | Syllabus §8.2.2", correct: ["c"],
    stem: "If you have acquired a tool that is used under the GNU General Public License, which of the following is an important consideration for tool maintenance?",
    opts: [
      "Reliability of the vendor and ability to provide support",
      "Frequency and availability of updates from the vendor",
      "Technical capabilities of your team to support and customize the tool for your environment",
      "License cost and support contract cost",
    ],
    why: "**(c)** — official rationale: **the GNU license is free and it is an open source community so there is no vendor.** (a) and (b) **because there is no vendor**. (d) **the tool is free although you may have development costs in customizing the tool**. Syllabus §8.2.2: **the organization may need to have technical capacity available for support and specific configuration**." } });

  B.push({ h2: "Part B — 12 additional syllabus-derived questions" });

  B.push({ q: { n: 4, tag: DER, meta: "LO: AS-8.1.1 (K2) | Syllabus §8.1", correct: ["b"],
    stem: "What is the main advantage of static analysis tools in security testing, according to the syllabus?",
    opts: [
      "They detect memory leaks at run time",
      "They can be used very early in the development lifecycle and are available for most languages, usually reporting on security aspects",
      "They probe the whole system including the network",
      "They require no configuration",
    ],
    why: "**(b)** — §8.1." } });
  B.push({ q: { n: 5, tag: DER, meta: "LO: AS-8.1.1 (K2) | Syllabus §8.1", correct: ["d"],
    stem: "A dynamic security testing tool performs a scan of a database’s configuration while the application is not running. How does the syllabus describe this?",
    opts: [
      "It is a misuse of the tool",
      "It is purely dynamic testing",
      "It is impossible",
      "Such dynamic tools are then used as a kind of static testing tool — though if the entire system is the test object, they truly are dynamic tools",
    ],
    why: "**(d)** — §8.1: **a dynamic security test tool may perform a static scan of a database**." } });
  B.push({ q: { n: 6, tag: DER, meta: "LO: AS-8.1.1 (K2) | Syllabus §8.1", correct: ["a"],
    stem: "Why is selecting and using security testing tools a challenge?",
    opts: [
      "Most tools are intelligent systems deploying non-standardized tests with different test data, implementations and interpretations, while the same defense or vulnerability can be implemented in different ways",
      "There are almost no security tools available",
      "All tools give identical results, so differentiation is hard",
      "Security tools cannot be automated",
    ],
    why: "**(a)** — §8.1." } });
  B.push({ q: { n: 7, tag: DER, meta: "LO: AS-8.1.1 (K2) | Syllabus §8.1", correct: ["c"],
    stem: "What does the John the Ripper example illustrate?",
    opts: [
      "That commercial tools are always better",
      "That password cracking should never be done",
      "That some hacker tools became the basis for legitimate security testing tools — it now detects weak Unix passwords",
      "That open source tools cannot be used by regulated organizations",
    ],
    why: "**(c)** — §8.1." } });
  B.push({ q: { n: 8, tag: DER, meta: "LO: AS-8.2.1 (K4) | Syllabus §8.2.1", correct: ["b"],
    stem: "Which of the following is listed by the syllabus as a test basis for security testing?",
    opts: ["The marketing plan", "User profiles", "The office floor plan", "Developer timesheets"],
    why: "**(b)**. The list: security policy · test policy · threat and risk analysis results · requirements and specifications · architecture and design · security (test) strategy · the system under test · known threats, exploits and vulnerabilities · **user profiles**." } });
  B.push({ q: { n: 9, tag: DER, meta: "LO: AS-8.2.1 (K4) | Syllabus §8.2.1", correct: ["a"],
    scenario: "A bank plans a new public REST API for partners, built in Java, deployed on hardened Linux servers behind a WAF. Security testing will continue after go-live as part of operations. The security policy requires TLS 1.2+ and the bank’s web coding guidelines. The test team has scanner experience but no API tooling.",
    stem: "Which documented set of tool needs best follows the syllabus analysis?",
    opts: [
      "Static analysis for Java against the web coding guidelines; API interface testing including input fuzzing; protocol/standard verification (TLS configuration); configuration verification of the hardened servers and WAF; and tooling suitable for ongoing operations use as well as development — noting the team’s gap in API tooling",
      "A load testing tool to measure API throughput",
      "A single GUI scanner for the partner portal only",
      "No tools — manual review is sufficient",
    ],
    why: "**(a)** derives needs from the syllabus overview: **interfaces to be tested**, **protocols and standards to be verified**, **web coding guidelines**, **system component configurations to be verified (hardened)**, and **whether security testing will be a development or a maintenance/operations activity**." } });
  B.push({ q: { n: 10, tag: DER, meta: "LO: AS-8.2.1 (K4) | Syllabus §8.2.1", correct: ["c"],
    stem: "What overview should requirements and design documents provide to help define tool requirements?",
    opts: [
      "Budget and schedule",
      "Names of the testers",
      "Interfaces to be tested (including the GUI), protocols and standards to be verified, web coding guidelines, and system component configurations to be verified (hardened)",
      "List of open defects",
    ],
    why: "**(c)** — §8.2.1." } });
  B.push({ q: { n: 11, tag: DER, meta: "LO: AS-8.2.2 (K2) | Syllabus §8.2.2", correct: ["d"],
    stem: "Why might an organization be unable to use open source security tools?",
    opts: [
      "Open source tools cannot be modified",
      "Open source tools never have a GUI",
      "Open source tools are always less effective",
      "Regulatory compliance issues can force organizations to use only commercial or otherwise certified tools",
    ],
    why: "**(d)** — §8.2.2." } });
  B.push({ q: { n: 12, tag: DER, meta: "LO: AS-8.2.2 (K2) | Syllabus §8.2.2", correct: ["a"],
    stem: "Which item belongs in an ROI calculation for an open source security tool?",
    opts: [
      "The future direction of the tool — some tools may go away or go commercial",
      "The vendor’s helpdesk hours",
      "Floating licence pricing",
      "The vendor’s support contract",
    ],
    why: "**(a)**. The six aspects: limited scope · time to learn · time in forums · time to update/upgrade · **future direction** · community responsiveness. (b)–(d) are **vendor** attributes (§8.2.3)." } });
  B.push({ q: { n: 13, tag: DER, meta: "LO: AS-8.2.2 (K2) | Syllabus §8.2.2", correct: ["b"],
    stem: "What mainly determines the number of security testing tool licences an organization needs?",
    opts: [
      "The number of developers",
      "The functional areas delivered by the tool, the frequency and time of use, and the number of security testers",
      "The number of servers in production",
      "The number of open vulnerabilities",
    ],
    why: "**(b)** — §8.2.2; **most businesses need one or a few**." } });
  B.push({ q: { n: 14, tag: DER, meta: "LO: AS-8.2.3 (K2) | Syllabus §8.2.3", correct: ["c"],
    stem: "Why is a vendor’s update frequency especially important for security testing tools?",
    opts: [
      "Because licences expire with each update",
      "Because updates reduce licence costs",
      "Because tools must stay current with constantly changing security threats",
      "Because updates replace the need for support contracts",
    ],
    why: "**(c)** — AS-8.2.3: evaluate the vendor’s capability **to update tools on a frequent basis to stay current with security threats**." } });
  B.push({ q: { n: 15, tag: DER, meta: "LO: AS-8.2.3 (K2) | Syllabus §8.2.3", correct: ["a"],
    stem: "Which of the following is a licence type listed among vendor attributes?",
    opts: ["Floating", "Copyleft", "Freeware", "Shareware"],
    why: "**(a)** — **fixed / desk / floating / token**." } });

  B.push({ h2: "Most Important Questions From This Chapter" });
  B.push({ lead: "Ranking rationale: guaranteed **AS-8.1.1 (K2)** and **AS-8.2.1 (K4)**; one K2 from 8.2.2 / 8.2.3." });
  B.push({ table: { head: ["Rank", "Topic / question focus", "LO", "Why it matters"], widths: [0.9, 6.2, 1.9, 5.0], rows: [
    ["1", "Needs → tool capability — Q2, Q8–Q10", "AS-8.2.1", "**Guaranteed 3 points**; uses Chapter 5 tests."],
    ["2", "Static vs dynamic security tools — Q1, Q4–Q7", "AS-8.1.1", "**Guaranteed 1 point.**"],
    ["3", "Open source — Q3, Q11–Q13", "AS-8.2.2", "Pooled 1 point; no vendor."],
    ["4", "Vendor evaluation — Q14, Q15", "AS-8.2.3", "Pooled 1 point; update frequency."],
  ] } });

  return B;
};
