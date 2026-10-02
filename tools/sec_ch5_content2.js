// CT-SEC Chapter 5 — Section 4 (questions)
const OFF = (n, pts) => `OFFICIAL · Sample Exam #${n} (${pts})`;
const DER = "Derived from syllabus";

module.exports = function () {
  const B = [];
  B.push({ pagebreak: true });
  B.push({ h1: "Section 4 — Demo Questions with Answers" });
  B.push({ lead: "Questions 1–8 are the **official ISTQB CTAL-SEC Sample Exam questions for Chapter 5** — #25 to #32 — with official answers and rationale. LO tags are inferred and match the Exam Structure Table. Questions 9–32 are derived strictly from the syllabus, three per mechanism. Correct options are marked ✔." });

  B.push({ h2: "Part A — The 8 official Chapter 5 questions" });

  B.push({ q: { n: 1, tag: OFF(25, "2 pts"), meta: "LO: AS-5.1.2 (K3) | Syllabus §5.1.2", correct: ["a"],
    stem: "You are implementing procedures for evaluating system hardening in an effort to test the system’s security effectiveness. What procedure might you follow to ensure the hardening mechanisms put in place are working as expected?",
    opts: [
      "Closely monitor various security performance reports and metrics to determine if the correct level of access and authentication is achieved",
      "Frequently audit strong authentication to ensure a high level of intrusion protection is maintained at all times",
      "Evaluate the hardware components that have been hardened and compare these to other hardened software components to ensure equilibrium is being achieved",
      "Enlist a known hacker to conduct an independent assessment of the hardening effectiveness",
    ],
    why: "**(a)** — official rationale: **there are security performance reports and metrics available that can be used to determine if you have achieved the right level of hardening.** (b) **strong authentication is just one aspect of hardening**. (c) **equilibrium is not needed. The more critical areas may warrant better hardening.** (d) **there is the danger of the hacker not telling you what is found.** Syllabus §5.1.2: tests should show hardening is **working, applied in the right places and in the right ways**." } });

  B.push({ q: { n: 2, tag: OFF(26, "1 pt"), meta: "LO: AS-5.2.1 (K2) | Syllabus §5.2.1", correct: ["c"],
    stem: "What are key attributes of security authentication of a medium complexity IT system?",
    opts: [
      "It verifies that the user has the correct profile and corresponding rights to access limited parts of the system",
      "It is key in identifying the amount of system resources the user can utilize",
      "It verifies that user entering the system is legitimate",
      "It uses common credentials among users to gain entry into the system",
    ],
    why: "**(c)** — official rationale: **it verifies that the user is legitimate and authorized**. (a) **is not looking at access rights** (that is authorization). (b) **system resource utilization is not a consideration**. (d) **common credential verification should not be used – each individual should have unique credentials**." } });

  B.push({ q: { n: 3, tag: OFF(27, "2 pts"), meta: "LO: AS-5.3.2 (K3) | Syllabus §5.3.2", correct: ["c"],
    stem: "Typical encryption mechanisms are vulnerable to threats which makes it important to understand their effectiveness at any given time. Identify which of the following you should implement to gain confidence in your encryption mechanisms?",
    opts: [
      "Evaluate cryptographic keys to ensure they are at least 256 bits in size",
      "Ensure you are applying random algorithms to generate random numbers where possible",
      "Develop tests that ensure symmetric encryption is used in the right modes",
      "Remove all WEP protocols to see how the system performs",
    ],
    why: "**(c)** — official rationale: **correct per the syllabus**. (b) **the random algorithm is easy to crack**. (d) **WEP protocols should be left in place, not removed**. For (a) the official rationale says **“a minimum of 768 bits should be used”**; the syllabus itself says **as of 2015 an RSA key less than 2048 bit is considered insecure**. Either way (a) is not the syllabus test — **assessment that right modes are used in symmetric encryption** is." } });

  B.push({ q: { n: 4, tag: OFF(28, "1 pt"), meta: "LO: AS-5.4.1 (K2) | Syllabus §5.4.1", correct: ["c"],
    stem: "Which is true of the relationship between a firewall and a network zone?",
    opts: [
      "Both a network zone and firewall focus on the size of data that is being passed through",
      "A network zone communicates through safe protocol options while a firewall ensures those protocols are safe",
      "A sub-network can be considered a network zone and a firewall can be traffic monitoring software",
      "A network zone blocks malicious traffic from an untrusted zone which the firewall does not filter",
    ],
    why: "**(c)** — official rationale: **correct per the syllabus**. (a) **network zones do not focus on size of data**. (b) **network zones are parts of the configuration of the firewall and define the authorized flow of data between networks**. (d) **the firewall blocks the traffic, not the network zone**. Syllabus: **a network zone is an identified sub-network with a defined level of trust**; a network-based firewall is **software that monitors traffic between networks**." } });

  B.push({ q: { n: 5, tag: OFF(29, "2 pts"), meta: "LO: AS-5.5.2 (K3) | Syllabus §5.5.2", correct: ["b"],
    stem: "Which of the following would you apply to most effectively test the abilities of an intrusion detection tool?",
    opts: [
      "Develop a series of scenarios based on past experience",
      "Use tests that generate malicious traffic to add new intrusive specifications",
      "Apply it to situations of known malicious traffic",
      "Use it in conjunction with other IDS products when possible",
    ],
    why: "**(b)** — official rationale: **these tests can be used to add new intrusive specifications which were formerly considered to be authorized traffic.** (a) and (c) **might be useful, but will not be as effective as B in making sure the tool will work for the future as well as the present**. (d) **is true for the usage, but not for the testing**." } });

  B.push({ q: { n: 6, tag: OFF(30, "1 pt"), meta: "LO: AS-5.6.1 (K2) | Syllabus §5.6.1", correct: ["b"],
    stem: "Which of the following is a main disadvantage to malware scanning tools?",
    opts: [
      "They only detect certain levels of malware",
      "They can only detect malware that is known to the tool",
      "They tend to be overly complex to run",
      "They do not provide updating and reporting capabilities",
    ],
    why: "**(b)** — official rationale: **the malware tool can only detect malware that it already knows about.** (a) **may be correct depending on the particular focus of the tool, but is not a main disadvantage** (the official text labels this “B”; it refers to option a). (c) **the tools are normally easy to run**. (d) **the tools provide the ability to update themselves with new findings and to produce reports**." } });

  B.push({ q: { n: 7, tag: OFF(31, "2 pts"), meta: "LO: AS-5.7.2 (K3) | Syllabus §5.7.2", correct: ["b"],
    stem: "You need to remove personal identification numbers from a legacy system in order to reduce risk during testing. Part of your data obfuscation plan includes verifying how effectively the data is masked. Which of the following is the most effective approach to use?",
    opts: [
      "Manually verify in the database that the data targeted for obfuscation is no longer understandable for logical human interpretation",
      "Design a brute force attack on the obfuscated data",
      "Substitute the sensitive data with random data of varying string lengths",
      "Enlist the development teams to generate a program to stress the database for vulnerabilities",
    ],
    why: "**(b)** — official rationale: **a brute force or dictionary attack can be used to see if personal information is still accessible.** (a) **is generally not feasible because of the amount of data and time it would take**. (c) **is more of an anonymizing exercise. Also, the field length might be limited so this may corrupt the data.** (d) **we are not trying to stress test the database itself**." } });

  B.push({ q: { n: 8, tag: OFF(32, "1 pt"), meta: "LO: AS-5.8.1 (K2) | Syllabus §5.8.1", correct: ["c"],
    stem: "What is often considered the weakest link in software security?",
    opts: [
      "The lack of a consistent and comprehensive security training plan",
      "The effort necessary to maintain document and procedure updates in order to keep up with continuing security threats",
      "The behavior of humans",
      "The constant advancement in malicious techniques",
    ],
    why: "**(c)** — official rationale: **it’s the people and their behavior that is the weakest link.** Syllabus §5.8.1: **humans are often the weakest link in the overall security picture.**" } });

  B.push({ h2: "Part B — 24 additional syllabus-derived questions" });

  // 5.1
  B.push({ q: { n: 9, tag: DER, meta: "LO: AS-5.1.1 (K2) | Syllabus §5.1.1", correct: ["b"],
    stem: "Why does the syllabus recommend configuring a remote logging server (e.g. rsyslog) as part of system hardening?",
    opts: [
      "To speed up log analysis",
      "So that if a machine is compromised, the attacker can delete log files only on the compromised machine, not on the remote log server",
      "To comply with software licensing policies",
      "To remove the need for an IDS",
    ],
    why: "**(b)** — verbatim reasoning from §5.1.1." } });
  B.push({ q: { n: 10, tag: DER, meta: "LO: AS-5.1.1 (K2) | Syllabus §5.1.1", correct: ["d"],
    stem: "A default administrator password left unchanged on a database server is an example of which kind of vulnerability?",
    opts: ["By design", "By construction", "By obsolescence", "By configuration"],
    why: "**(d)**. §5.1.1: vulnerabilities come from **design errors (by design)**, **source code defects (by construction)** or **lack of rigor in the configuration (by configuration)**." } });
  B.push({ q: { n: 11, tag: DER, meta: "LO: AS-5.1.2 (K3) | Syllabus §5.1.2", correct: ["a"],
    scenario: "A multi-site retailer has hardened 300 store servers. Management wants evidence that hardening is effective without slowing store operations.",
    stem: "Which set of tests best follows the syllabus?",
    opts: [
      "Audit server and database configurations for changed default passwords and unnecessary services and ports; verify component and library versions are not obsolete; run a vulnerability scanner across sites; and check that hardening is not so restrictive that it blocks store work",
      "Disable all USB ports and assume compliance",
      "Ask store managers to confirm by email that servers are hardened",
      "Run a load test on one store server",
    ],
    why: "**(a)** combines the syllabus tests — configuration audits (**default passwords**, **unnecessary services and network ports**), **version verification**, a **vulnerability scanner** for **complex multi-site** environments — with the instruction to **test for protections that are too restrictive**." } });

  // 5.2
  B.push({ q: { n: 12, tag: DER, meta: "LO: AS-5.2.1 (K2) | Syllabus §5.2.1", correct: ["c"],
    stem: "A user can log in to an FTP server but can only write to their own dedicated directory. Which mechanism enforces the directory restriction?",
    opts: ["Authentication", "Encryption", "Authorization", "Obfuscation"],
    why: "**(c)** — the syllabus’s own example of authorization: **a user is authorized to use an FTP server but only on their dedicated space**." } });
  B.push({ q: { n: 13, tag: DER, meta: "LO: AS-5.2.1 (K2) | Syllabus §5.2.1", correct: ["a"],
    stem: "Which of the following is listed by the syllabus as an authentication architecture option?",
    opts: ["Single Sign-On (SSO)", "Network zones", "Data masking", "Virtual patching"],
    why: "**(a)**. Architectures: **local authentication, server authentication, network authentication, Single Sign-On**. Implementations: weak-password detection, **OTP**, fingerprinting, software certificates, certificates in hard tokens." } });
  B.push({ q: { n: 14, tag: DER, meta: "LO: AS-5.2.2 (K3) | Syllabus §5.2.2", correct: ["d"],
    stem: "Which test exploits a lack of input filtering to bypass authentication?",
    opts: [
      "Trying “123456” as a password",
      "Entering ../../ in an FTP path",
      "Checking the TLS cipher order",
      "Injecting SQL into the login fields to be authenticated without any known login/password",
    ],
    why: "**(d)** — §5.2.2. (a) is **brute force/dictionary**; (b) is an **unauthorized URI** test; (c) is an encryption configuration test." } });
  B.push({ q: { n: 15, tag: DER, meta: "LO: AS-5.2.2 (K3) | Syllabus §5.2.2", correct: ["b"],
    scenario: "A web shop’s admin console is at /admin and is “hidden” from the menu. Customer accounts use passwords of at least 6 characters. The shop runs a framework version two years old.",
    stem: "Which set of tests best evaluates authentication and authorization effectiveness?",
    opts: [
      "Measure response time of /admin",
      "Request /admin as an anonymous and as a customer user; run brute force and dictionary attacks starting with “123456”, “111111”, dates of birth and pet names; test login fields for SQL injection; check whether the old framework has a known exploitable vulnerability leading to privilege escalation",
      "Review the marketing copy on the login page",
      "Confirm passwords are at least 6 characters long",
    ],
    why: "**(b)** applies all four syllabus test types: **unauthorized URL (site address/admin)**, **brute force and dictionary**, **SQL injection**, and **exploiting an unpatched vulnerability** for **privilege escalation**. (d) only re-checks the rule, not its effectiveness." } });

  // 5.3
  B.push({ q: { n: 16, tag: DER, meta: "LO: AS-5.3.1 (K2) | Syllabus §5.3.1", correct: ["a"],
    stem: "What distinguishes asymmetric from symmetric encryption, as described in the syllabus?",
    opts: [
      "Asymmetric uses a private and public key; symmetric uses a shared secret key",
      "Asymmetric is used only for stored data; symmetric only for communication",
      "Asymmetric uses hashing; symmetric uses salting",
      "Symmetric encryption is always weaker",
    ],
    why: "**(a)** — §5.3.1. Both may protect data **stored** (cyphered passwords, drives) or **in communication** (email, SSL/TLS)." } });
  B.push({ q: { n: 17, tag: DER, meta: "LO: AS-5.3.2 (K3) | Syllabus §5.3.2", correct: ["c"],
    stem: "A code review finds that session tokens are generated using the language’s default random() function. Which category of encryption vulnerability does this test address?",
    opts: ["Design vulnerability", "Configuration vulnerability", "Construction vulnerability", "Ageing vulnerability"],
    why: "**(c)** — §5.3.2 lists **code reviews (e.g. to verify that the default function random() is not used to generate random numbers (seed) because the random algorithm is relatively easy to crack)** under **construction vulnerabilities**, with fuzzing, timing attacks and power analysis." } });
  B.push({ q: { n: 18, tag: DER, meta: "LO: AS-5.3.2 (K3) | Syllabus §5.3.2", correct: ["d"],
    stem: "A tester checks whether an attacker can force the server to negotiate a weaker cipher. Which syllabus test is this?",
    opts: [
      "Power analysis",
      "Replay attack against WEP",
      "Timing attack",
      "TLS cipher order on the server side, to see if the cipher can be downgraded or renegotiated",
    ],
    why: "**(d)** — a **configuration** vulnerability test in §5.3.2." } });

  // 5.4
  B.push({ q: { n: 19, tag: DER, meta: "LO: AS-5.4.1 (K2) | Syllabus §5.4.1", correct: ["b"],
    stem: "Which zone is considered the most trusted?",
    opts: ["The Internet / public zone", "Private / internal networks", "The DMZ", "All zones are equally trusted"],
    why: "**(b)** — the syllabus: Internet/public **untrusted**; DMZs with **different levels of trust**; private/internal **most trusted**." } });
  B.push({ q: { n: 20, tag: DER, meta: "LO: AS-5.4.1 (K2) | Syllabus §5.4.1", correct: ["c"],
    stem: "What can a Web Application Firewall filter on that a traditional firewall typically does not, according to the syllabus?",
    opts: ["TCP/UDP ports", "Fragmentation and TTL options", "Users being the connections, and data using pattern descriptions", "Source and destination IP addresses"],
    why: "**(c)**. Firewalls filter **addresses and protocols, protocol options, size of data**; WAFs **also** filter **users being the connections** and **data (pattern descriptions)**." } });
  B.push({ q: { n: 21, tag: DER, meta: "LO: AS-5.4.2 (K3) | Syllabus §5.4.2", correct: ["a"],
    stem: "Which test attempts to bypass firewall filtering so that an attack can be carried out behind the firewall?",
    opts: ["Fragmentation attacks", "Port scanning", "Password auditing", "EICAR test file"],
    why: "**(a)** — §5.4.2: **fragmentation attacks to bypass filtering features with the objective to carry on the attack behind the firewall**. Port scanning verifies **the policy is well implemented**." } });

  // 5.5
  B.push({ q: { n: 22, tag: DER, meta: "LO: AS-5.5.1 (K2) | Syllabus §5.5.1", correct: ["d"],
    stem: "Which statement describes the positive security model for intrusion detection?",
    opts: [
      "All that is not explicitly forbidden is allowed",
      "Detection is based on a list of known attacks",
      "It is also called blacklist detection",
      "All that is not explicitly allowed is rejected; detection is based on a specification of the expected behavior of the system",
    ],
    why: "**(d)**. (a), (b) and (c) describe the **negative** (signature-based, blacklist) model." } });
  B.push({ q: { n: 23, tag: DER, meta: "LO: AS-5.5.1 (K2) | Syllabus §5.5.1", correct: ["b"],
    stem: "How does an IDS differ from a firewall?",
    opts: [
      "An IDS blocks all traffic from untrusted zones",
      "A firewall looks outwardly at the traffic to stop intrusions, whereas an IDS analyzes suspicious intrusions and raises an alert if they are confirmed",
      "An IDS only works at the network layer",
      "A firewall cannot be software",
    ],
    why: "**(b)** — §5.5.1. An IDS monitors **all 7 OSI layers**, so (c) is wrong; firewalls can be **host-based software** or network software, so (d) is wrong." } });
  B.push({ q: { n: 24, tag: DER, meta: "LO: AS-5.5.2 (K3) | Syllabus §5.5.2", correct: ["c"],
    stem: "A signature-based IDS is to be tested for robustness against evasion. Which set of tests fits the syllabus?",
    opts: [
      "Port scanning and password cracking",
      "Load testing at peak volume",
      "Character encoding or modification (white space, end of lines), IP fragmentation and TCP segmentation, encryption and obfuscation, URL encoding",
      "Comparing two IDS vendors’ marketing claims",
    ],
    why: "**(c)** — §5.5.2: **scenario-based detection is easy to bypass because only known attacks are detected**; the listed **evasion techniques** test it." } });

  // 5.6
  B.push({ q: { n: 25, tag: DER, meta: "LO: AS-5.6.1 (K2) | Syllabus §5.6.1", correct: ["a"],
    stem: "What helps anti-malware detect slight variations of known malicious patterns?",
    opts: ["A heuristic mechanism", "A larger firewall rule set", "Data obfuscation", "Single Sign-On"],
    why: "**(a)** — §5.6.1: **a heuristic mechanism often is embedded in anti-malware to identify slight variations of known malicious patterns**." } });
  B.push({ q: { n: 26, tag: DER, meta: "LO: AS-5.6.2 (K3) | Syllabus §5.6.2", correct: ["d"],
    stem: "How can the effectiveness of an anti-malware product be functionally tested without developing real malicious code?",
    opts: ["By disabling the product and observing", "By running a password audit tool", "By fragmenting IP packets", "By using the EICAR anti-malware test file"],
    why: "**(d)** — §5.6.2." } });
  B.push({ q: { n: 27, tag: DER, meta: "LO: AS-5.6.2 (K3) | Syllabus §5.6.2", correct: ["b"],
    scenario: "An organization plans to roll out a new anti-malware version to all 8,000 desktops and servers over a weekend.",
    stem: "What is the most important test consideration, according to the syllabus?",
    opts: [
      "Measure how long a full scan takes",
      "Test the implementation on a representative platform before deploying to the entire organization, because anti-malware has falsely quarantined legitimate OS files and shut down organizations’ computing capability",
      "Disable the heuristic engine to avoid false positives",
      "Deploy first and monitor the helpdesk for complaints",
    ],
    why: "**(b)** — §5.6.2’s explicit warning." } });

  // 5.7
  B.push({ q: { n: 28, tag: DER, meta: "LO: AS-5.7.1 (K2) | Syllabus §5.7.1", correct: ["c"],
    stem: "Why is encryption described as an obfuscation technique “with issues”?",
    opts: [
      "It cannot be applied to source code",
      "It is too slow for databases",
      "The cyphered data remains viewable to those with valid keys",
      "It cannot be reversed",
    ],
    why: "**(c)** — §5.7.1: **encryption is also an obfuscation technique but with issues because the cyphered data will remain viewable to those with valid keys**." } });
  B.push({ q: { n: 29, tag: DER, meta: "LO: AS-5.7.2 (K3) | Syllabus §5.7.2", correct: ["a"],
    stem: "To verify that a commercial Java application’s code obfuscation protects a proprietary algorithm, which test fits the syllabus?",
    opts: [
      "Attempt to reverse-engineer the byte code with a Java decompiler, and attempt brute force against weak obfuscation mechanisms (e.g. unXOR)",
      "Encrypt the source repository",
      "Run a port scan on the application server",
      "Count the lines of obfuscated code",
    ],
    why: "**(a)** — §5.7.2 tests to verify obfuscation of code: **reverse-engineering of Java byte code (Java Decompiler) or .NET programs (.NET Reflector)** and **brute force attacks (e.g. unXOR)**." } });
  B.push({ q: { n: 30, tag: DER, meta: "LO: AS-5.7.2 (K3) | Syllabus §5.7.2", correct: ["d"],
    stem: "After obfuscating a test database, testers discover some records cannot be restored for a reconciliation test. What is the most likely cause, per the syllabus?",
    opts: [
      "Obfuscation never allows data to be restored",
      "The database was too large",
      "Brute force attacks corrupted the data",
      "Lack of tight configuration control between the obfuscated data and the keys used, so the wrong key versions were applied",
    ],
    why: "**(d)** — §5.7.2: **tight configuration control between the obfuscated data and keys used for the obfuscation is needed to ensure the correct versions of keys are used. Otherwise, the data can not be un-obfuscated for use.**" } });

  // 5.8
  B.push({ q: { n: 31, tag: DER, meta: "LO: AS-5.8.1 (K2) | Syllabus §5.8.1", correct: ["b"],
    stem: "Which topics should security training cover, according to the syllabus?",
    opts: [
      "Only the password policy",
      "The identification of social engineering attacks and insider threats, updated as new policies and threats arise, throughout the lifecycle",
      "Only secure coding for developers",
      "Only the use of anti-malware tools",
    ],
    why: "**(b)** — §5.8.1." } });
  B.push({ q: { n: 32, tag: DER, meta: "LO: AS-5.8.2 (K3) | Syllabus §5.8.2", correct: ["c"],
    scenario: "A security tester injects a SQL command through a data entry field that lacks a field-level edit and views the customer database. The developer had attended secure-coding training last year.",
    stem: "What follow-up best tests and improves training effectiveness?",
    opts: [
      "Dismiss the finding because the developer was trained",
      "Remove the field from the application",
      "Conclude the developer needs additional secure-coding training, and examine other developers’ code to see whether the practice is widespread — if so, start a general process improvement initiative",
      "Run a password audit on the developer’s account",
    ],
    why: "**(c)** — the syllabus’s second training-effectiveness example in §5.8.2." } });

  B.push({ h2: "Most Important Questions From This Chapter" });
  B.push({ lead: "Ranking rationale: **four K2 and four K3** drawn from sixteen objectives. In the Sample Exam each mechanism appeared once. Weight your effort evenly, with a slight bias to the K3 (test) side, which is worth double." });
  B.push({ table: { head: ["Rank", "Topic / question focus", "LO", "Why it matters"], widths: [0.9, 6.2, 1.9, 5.0], rows: [
    ["1", "IDS models and testing — Q5, Q22–Q24", "AS-5.5.x", "Most counter-intuitive answer (poison the profile); 2 points if K3."],
    ["2", "Encryption testing families — Q3, Q16–Q18", "AS-5.3.x", "Longest test list; design / construction / configuration / ageing."],
    ["3", "Obfuscation — Q7, Q28–Q30", "AS-5.7.x", "Brute force and decompilers; key control."],
    ["4", "Hardening — Q1, Q9–Q11", "AS-5.1.x", "Audit + scanner + over-restriction."],
    ["5", "AuthN vs AuthZ — Q2, Q12–Q15", "AS-5.2.x", "Clean K2 split; four test types."],
    ["6", "Firewalls and zones — Q4, Q19–Q21", "AS-5.4.x", "Zone ≠ blocker; port scan / malformed / fragmentation."],
    ["7", "Anti-malware — Q6, Q25–Q27", "AS-5.6.x", "Only known; EICAR; representative platform."],
    ["8", "Training — Q8, Q31, Q32", "AS-5.8.x", "Humans weakest; three test examples."],
  ] } });

  return B;
};
