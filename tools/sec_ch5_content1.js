// CT-SEC Chapter 5 — Sections 1 to 3
module.exports = function () {
  const B = [];

  const mech = (id, k, stmt) => { B.push({ h2: `${id} (${k}) — ${stmt.title}` }); B.push({ box: { title: "Original syllabus statement", body: stmt.text } }); };

  // ================= SECTION 1 =================
  B.push({ h1: "Section 1 — Syllabus Explanation" });
  B.push({ p: "Chapter 5, **Testing Security Mechanisms**, covers **eight mechanisms** — system hardening, authentication and authorization, encryption, firewalls and network zones, intrusion detection, malware scanning, data obfuscation, and training — each with a **K2 “understand” objective** and a **K3 “test the effectiveness” objective**: **16 learning objectives** in all. The Exam Structure Table allocates **8 questions** and **12 of the 80 points**." });
  B.push({ p: "Teaching time is **240 minutes — the longest chapter in the syllabus** — for **3.0 points per teaching hour**, the joint-lowest return. The questions are drawn as **four K2 (1 point) from the eight “understand” objectives** and **four K3 (2 points) from the eight “test” objectives**. In the official Sample Exam, **each mechanism appeared exactly once**, alternating K3 and K2 (Q25 to Q32). Learn every mechanism to the same depth, but **do not over-invest**: the content is broad and the marks are thin." });
  B.push({ table: { head: ["Mechanism", "K2 — understand", "K3 — test effectiveness", "Sample #"], widths: [3.6, 2.6, 2.6, 5.2], rows: [
    ["5.1 System hardening", "AS-5.1.1", "AS-5.1.2", "#25 (K3, 2 pts)"],
    ["5.2 Authentication and authorization", "AS-5.2.1", "AS-5.2.2", "#26 (K2, 1 pt)"],
    ["5.3 Encryption", "AS-5.3.1", "AS-5.3.2", "#27 (K3, 2 pts)"],
    ["5.4 Firewalls and network zones", "AS-5.4.1", "AS-5.4.2", "#28 (K2, 1 pt)"],
    ["5.5 Intrusion detection", "AS-5.5.1", "AS-5.5.2", "#29 (K3, 2 pts)"],
    ["5.6 Malware scanning", "AS-5.6.1", "AS-5.6.2", "#30 (K2, 1 pt)"],
    ["5.7 Data obfuscation", "AS-5.7.1", "AS-5.7.2", "#31 (K3, 2 pts)"],
    ["5.8 Training", "AS-5.8.1", "AS-5.8.2", "#32 (K2, 1 pt)"],
    ["**Chapter 5 total**", "**4 questions × 1**", "**4 questions × 2**", "**8 questions · 12 points**"],
  ] } });
  B.push({ box: { title: "Exam allocation you must know", body: "Chapter 5 = **8 questions / 12 points** from **16 objectives**; Sample Exam **#25 to #32**. Every K3 objective has the same verb — **“demonstrate how to test the effectiveness of …”** — and every K2 has the same shape — **“understand the concept of … and how it is applied”**. A K3 question usually offers **one test technique the syllabus names for that mechanism** among three plausible activities that are not tests of it." } });
  B.push({ box: { kind: "warn", title: "The one thing that decides this chapter", body: "**For each mechanism, know its weakness — the test exploits the weakness.** Hardening: defaults and unnecessary services → **audit configuration, run a vulnerability scanner**. Authentication: weak passwords and unfiltered input → **brute force, dictionary, injection, URL/URI tampering**. Encryption: small keys, wrong modes, bad randomness, weak configuration → **key size, modes, certificates, code review, TLS configuration**. Firewalls: complexity → **port scanning, malformed packets, fragmentation**. IDS: signatures miss the unknown, behaviour drifts → **evasion encodings, malicious traffic to poison the profile**. Anti-malware: **only knows what it knows** → **EICAR**, test before deploying. Obfuscation: reversible → **brute force, decompilers**. Training: humans → **social engineering, sticky notes, password audits**." } });

  B.push({ h2: "Chapter framing — mechanisms are layers, not solutions" });
  B.push({ p: "Each mechanism can be applied through **tools and infrastructure** or **manual effort**. **None of these mechanisms alone is sufficient in most cases** to secure information; **each has its own advantages and disadvantages**. Testers need to understand **the nuances of each line of defense** to design tests that **verify and validate their effectiveness**, and advanced testers should **design a test architecture that provides a framework for continuous security testing**." });

  // 5.1
  mech("AS-5.1.1", "K2", { title: "Understanding System Hardening", text: "Understand the concept of system hardening and its role in enhancing security." });
  B.push({ p: "Systems grow more complex, so **their attack surface is continuously growing**. Vulnerabilities come from three sources:" });
  B.push({ table: { head: ["Source", "Syllabus term", "Example"], widths: [3.6, 4.4, 6.0], rows: [
    ["**Design errors**", "**By design** vulnerabilities", "Missing authorization layer"],
    ["**Source code defects**", "**By construction** vulnerabilities", "Buffer overflow"],
    ["**Lack of rigor in configuration**", "**By configuration** vulnerabilities", "Default passwords, open ports"],
  ] } });
  B.push({ p: "**System hardening is the step-by-step process of reducing the attack surface by applying a security policy and different layers of protection. The main objective is to secure the system and reduce the risks of compromising security.** It can be applied to **a component, a product/application, a system, or a system of systems**." });
  B.push({ table: { title: "Organizational and technical defenses to apply", head: ["Defense", "Why (syllabus)"], widths: [7.0, 7.0], rows: [
    ["Remove unnecessary **software**", "Can contain defects"],
    ["Remove unnecessary **libraries and developer tools**", "Can contain defects"],
    ["Remove unnecessary **accounts/logins**", "Attack vectors"],
    ["Remove unnecessary **applications and network services**", "Defects; attack vectors"],
    ["Remove unnecessary **peripherals and hardware ports** (USB, card readers)", "—"],
    ["**Promptly patch** and install updates (e.g. **automatic updates**)", "—"],
    ["**Update configurations**", "—"],
    ["**Follow coding rules**", "Avoid **by-construction** vulnerabilities"],
    ["**Configure a remote logging server** (e.g. **rsyslog**)", "An attacker can delete logs **only on the compromised machine, not on the remote log server**"],
  ] } });
  B.push({ p: "**Security mechanisms that hardening should use:** **strong authentication** and efficient **authorization** (only the rights needed, by role) · **encryption** (communication and local storage) · **firewalls** (personal, system, web application) and **security zones** (e.g. a **sandbox**) · **IDS** · **anti-malware/anti-spyware** · **obfuscation** of data and applications (against reverse-engineering)." });
  B.push({ box: { kind: "warn", title: "The balance", body: "Rules must be applied **at the right level and balanced with usability**. **At the extreme, protections are disabled because they block the productivity of the company** — over-hardening defeats itself." } });

  mech("AS-5.1.2", "K3", { title: "Testing the Effectiveness of System Hardening", text: "Demonstrate how to test the effectiveness of common system hardening mechanisms." });
  B.push({ p: "Tests depend on **the nature of the system, the sensitivity of assets and the identified threats**. Hardening **restricts access to the right roles, opens only needed services, and monitors application updates** — so tests should show hardening is **working, applied in the right places, and applied in the right ways**. **Also test for protections that are too restrictive** and excessive in view of the risks." });
  B.push({ ul: [
    "Some tests are **review- or audit-based**; others test **the ability of user groups to perform actions or access data**.",
    "**Audit database and application server configuration** to verify **default passwords have been changed**.",
    "**Audit system configuration** to identify **unnecessary services and network ports**.",
    "**Verify components, libraries and application versions** are **not obsolete and vulnerable**.",
    "Run a **vulnerability scanner** to ease vulnerability assessment, especially in **complex (e.g. multi-site)** systems.",
    "Use **static analysis tools** to detect **violations of coding rules** (construction vulnerabilities); **security-oriented analyzers** are particularly useful.",
  ] });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K3, 2 points)", body: "Sample Q25: procedure to ensure hardening mechanisms work as expected? **Closely monitor security performance reports and metrics to determine if the correct level of access and authentication is achieved.** Rejected: auditing **strong authentication** (just **one aspect** of hardening); seeking **equilibrium** between hardened components (not needed — **more critical areas may warrant better hardening**); enlisting **a known hacker** (**the danger of the hacker not telling you what is found**)." } });

  // 5.2
  mech("AS-5.2.1", "K2", { title: "Authentication and Authorization", text: "Understand the relationship between authentication and authorization and how they are applied in securing information systems." });
  B.push({ table: { head: ["", "Authentication", "Authorization"], widths: [2.4, 5.8, 5.8], rows: [
    ["**Question answered**", "**Login: who is the user? Password: is the user really who he pretends to be?**", "**Does the authenticated user have the rights to do this action?** Which **level of access** to resources?"],
    ["**Based on**", "Verification of **a user identifier and a token**", "Rights assigned to the authenticated identity"],
    ["**Implementations**", "Detecting **weak passwords** · **one-time passwords (OTP)** · **fingerprinting** · **software certificates** · **certificates in hard tokens**", "e.g. can log into a server **but not modify its data**; FTP use **only in a dedicated space**"],
    ["**Architectures**", "**Local · server · network authentication · Single Sign-On (SSO)**", "Role-based levels"],
  ] } });
  B.push({ p: "**The link:** **a non-authenticated user has no rights or restricted rights** (not authorized to manipulate sensitive data). Merchant site example: an anonymous user **can see the product list**; to buy, they **create an account**; the authenticated user **can purchase but cannot perform administrative functions**." });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K2, 1 point)", body: "Sample Q26: key attribute of **authentication**? **It verifies that the user entering the system is legitimate.** Rejected: **correct profile and rights to limited parts** (that is authorization — **not looking at access rights**); **system resources** (not a consideration); **common credentials** (**each individual should have unique credentials**)." } });

  mech("AS-5.2.2", "K3", { title: "Testing Authentication and Authorization", text: "Demonstrate how to test the effectiveness of common authentication and authorization mechanisms." });
  B.push({ p: "Attackers aim **to steal passwords or bypass systems** to execute unauthorized actions, exploiting **coding errors (lack of input filtering) · old vulnerable library versions · configuration errors (default passwords, default rights) · weak passwords** (the most used is **“123456”**). Password rules **don’t help if users aren’t diligent**, and must reflect **current good practice** (e.g. **SANS Password Construction Guidelines**)." });
  B.push({ table: { title: "Tests for authentication and authorization", head: ["Test", "Example"], widths: [4.4, 9.6], rows: [
    ["**Brute force and dictionary attacks**", "Try **“123456”, “111111”, date of birth, name of pet**…"],
    ["**Exploit lack of input filtering**", "**Inject SQL** to be **authenticated without any known login/password**"],
    ["**Unauthorized URI / URL**", "**../../** in an FTP account; **site address/admin** to reach sensitive data"],
    ["**Exploit an unpatched vulnerability**", "Cause unintended behavior → **gain control** → **privilege escalation**"],
  ] } });

  // 5.3
  mech("AS-5.3.1", "K2", { title: "Understanding Encryption", text: "Understand the concept of encryption and how it is applied in securing information systems." });
  B.push({ p: "**Encryption is a process of encoding data (plain text) into cypher data (cypher text), using a cryptographic algorithm and secrets, so that only authorized persons can access it by using a decryption mechanism.** The secret is **shared and only known to authorized users**. Goal: strong enough that an attacker **who has stolen encrypted data cannot recover the plain text**. **Hashing and salting are methods used during encryption.**" });
  B.push({ table: { head: ["Protects data…", "Examples"], widths: [4.0, 10.0], rows: [
    ["**Stored** in a system", "**Cyphered passwords in a database**, logical cyphered drive, **whole cyphered hard drive**"],
    ["**During communication**", "**Cyphered email**, cyphered protocols (**SSL, TLS**)"],
  ] } });
  B.push({ table: { head: ["Protocol family", "Key model"], widths: [5.0, 9.0], rows: [
    ["**Symmetric encryption**", "**Shared secret key**"],
    ["**Asymmetric encryption**", "**Private and public key**"],
  ] } });
  B.push({ lead: "The syllabus says cryptography helps ensure confidentiality, integrity, availability of sensitive assets “and repudiation of manipulating them” — read this as **non-repudiation**." });

  mech("AS-5.3.2", "K3", { title: "Testing Common Encryption Mechanisms", text: "Demonstrate how to test the effectiveness of common encryption mechanisms." });
  B.push({ p: "Some mechanisms are **weak because of short or static keys**; others because they are **not implemented with best practices** or **embed coding defects** (e.g. buffer overflow). Tests fall into **three families plus ageing** — the same design / construction / configuration split as hardening:" });
  B.push({ table: { head: ["Family", "Tests"], widths: [3.4, 10.6], rows: [
    ["**Design** vulnerabilities", "**Right modes used in symmetric encryption** · **key size not too small** (as of 2015, **RSA under 2048 bits is insecure**) · **certificate validity** and **alerts on self-signed certificates** (**SSL-trip** can be used to avoid man-in-the-middle) · **replay attacks** (e.g. against **WEP**) · **attacks on cryptographic protocols** to verify strength [Bittau]"],
    ["**Construction** vulnerabilities", "**Code reviews** — e.g. verify the **default random() is not used** to seed (relatively easy to crack) · **fuzzing** · **timing attacks** (time taken by crypto algorithms) · **power analysis** (encrypted hardware devices)"],
    ["**Configuration** vulnerabilities", "**Protocol configuration assessment** (TLS server-side, client-side authorized protocols, per a TLS configuration guide) · **TLS cipher order on the server** — can the cipher be **downgraded or renegotiated**?"],
    ["**Ageing**", "Verify mechanisms that **may have become weak and prone to being cracked**"],
  ] } });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K3, 2 points)", body: "Sample Q27: what to implement to gain confidence in encryption? **Develop tests that ensure symmetric encryption is used in the right modes** — per the syllabus. Rejected: “keys **at least 256 bits**”; “**apply random algorithms** to generate random numbers” (**random() is easy to crack**); “**remove all WEP protocols** to see how the system performs” (the rationale says WEP should be **left in place**, not removed). Note: the official rationale for (a) says “**a minimum of 768 bits should be used**”, which does not match the syllabus’s **2048-bit RSA** statement — answer from the syllabus." } });

  // 5.4
  mech("AS-5.4.1", "K2", { title: "Understanding Firewalls and Network Zones", text: "Understand the concept of firewalls and the use of network zones and how they are applied in securing information systems." });
  B.push({ p: "**“A firewall is a component or a set of components that restricts access between a protected network and the Internet, or between other sets of networks”** [Chapman 2000]. It **implements and enforces a security policy** based on **authorized and forbidden communications**. It may be **host-based** (software on one host monitoring application inputs/outputs) or **network-based** (software monitoring traffic between networks). Its main task: **control traffic between trusted zones by filtering data**, so **malicious traffic from an untrusted zone is detected and blocked**." });
  B.push({ table: { title: "Network zones — a sub-network with a defined level of trust", head: ["Zone", "Trust"], widths: [7.0, 7.0], rows: [
    ["**Internet / public zone**", "**Untrusted**"],
    ["**Demilitarized zones (DMZs)** — several possible", "**Different levels of trust**"],
    ["**Private / internal networks**", "**Most trusted**"],
  ] } });
  B.push({ p: "**Zones are part of the firewall configuration**: they define **the authorized flows between networks**; **all forbidden traffic is blocked**." });
  B.push({ table: { head: ["Firewall filters on…", "A WAF also filters on…"], widths: [7.0, 7.0], rows: [
    ["**Source and target addresses and protocols** (Ethernet/IP addresses, TCP/UDP ports)", "**Users being the connections**"],
    ["**Protocol options** (fragmentation, TTL)", "**Data filtering** (e.g. **pattern descriptions**)"],
    ["**Size of data**", ""],
  ] } });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K2, 1 point)", body: "Sample Q28: relationship between a firewall and a network zone? **A sub-network can be considered a network zone and a firewall can be traffic monitoring software.** Rejected: both focus on **size of data** (zones don’t); zones **communicate through safe protocols** (zones are **part of the firewall configuration** defining authorized flows); **the zone blocks** traffic (**the firewall blocks**, not the zone)." } });

  mech("AS-5.4.2", "K3", { title: "Testing Firewall Effectiveness", text: "Demonstrate how to test the effectiveness of existing firewall implementations and network zones." });
  B.push({ p: "Because of **the number of protocols, their options and network complexity**, **it is difficult to configure a firewall efficiently**. Tests should include:" });
  B.push({ table: { head: ["Test", "Purpose"], widths: [5.4, 8.6], rows: [
    ["**Port scanning**", "Verify **the security policy is well implemented**"],
    ["**Malformed network packets and network fuzzing**", "Exploit **unexpected behavior** — e.g. a **denial of service**"],
    ["**Fragmentation attacks**", "**Bypass filtering** to carry the attack **behind the firewall**"],
    ["**WAF: encode, compress or obfuscate data**", "**Hide the malicious information** conveying the attack"],
  ] } });
  B.push({ lead: "Chapter 8’s official Q42 (3 points) is a firewall scenario: after configuration checks and port scanning, the test that detects unexpected behaviour exploitable by DoS is **malformed packets or fuzzed data**." });

  // 5.5
  mech("AS-5.5.1", "K2", { title: "Understanding Intrusion Detection Tools", text: "Understand the concept of intrusion detection tools and how they are applied in securing information systems." });
  B.push({ p: "**Attacks increase every year, techniques evolve quickly and no system is 100% safe.** An **IDS** is **a standalone appliance or application** that **monitors activities at different levels — network to application, the 7 layers of the OSI model — to detect violations of the security policy**. Deviations from normal behavior raise **alerts** for further action (**traffic blocking, virtual patching**)." });
  B.push({ table: { title: "Two security models (IETF Intrusion Detection Exchange Format working group)", head: ["", "Negative security model", "Positive security model"], widths: [2.4, 5.8, 5.8], rows: [
    ["**Also called**", "**Signature-based / blacklist** detection", "**Behavior-based / white list** detection"],
    ["**Rule**", "**“All that is not explicitly forbidden is allowed”**", "**“All that is not explicitly allowed is rejected”**"],
    ["**Detects by**", "A **list of known attacks or patterns**", "**Specification of expected behavior** — e.g. an input’s characteristics as a **regular expression**; **trusted traffic** may generate the specification"],
    ["**Weakness**", "**Easy to bypass — only known attacks are detected**", "**Large numbers of false positives and false negatives**; behaviour can be **deviated** so intrusive traffic becomes “normal”"],
  ] } });
  B.push({ box: { kind: "ok", title: "Firewall vs IDS", body: "**A firewall looks outwardly at the traffic to stop intrusions; an IDS analyzes suspicious intrusions and raises an alert if they are confirmed.**" } });

  mech("AS-5.5.2", "K3", { title: "Testing Intrusion Detection Tools", text: "Demonstrate how to test the effectiveness of existing intrusion detection tool implementations." });
  B.push({ table: { head: ["Target", "Tests"], widths: [4.0, 10.0], rows: [
    ["**Signature/scenario-based detection**", "**Evasion techniques:** **character encoding or modification** (white space, end of lines) · **IP fragmentation, TCP segmentation** · **encryption, obfuscation** · **URL encoding**"],
    ["**Behavior-based detection**", "Check **false negatives** (alerts that should have been reported but weren’t — e.g. **new attacks**, or **rules that catch some attacks and miss others**) and **accuracy**. Because an attacker can **deviate the learned behavior** until intrusive traffic is “normal”, **complementary tests should use malicious traffic in order to add new intrusive specifications considered as authorized traffic**"],
    ["**Test inputs**", "**Protection Profile for IDS** [PP-IDS] · **Web Application Firewall Evaluation Criteria** [WAFEC]"],
  ] } });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K3, 2 points)", body: "Sample Q29: most effective test of an IDS? **Use tests that generate malicious traffic to add new intrusive specifications** — they target specifications **formerly considered authorized traffic**. Scenarios from past experience and known malicious traffic **might be useful but are less effective for the future**; combining IDS products is **true for usage, not for testing**." } });

  // 5.6
  mech("AS-5.6.1", "K2", { title: "Understanding Malware Scanning Tools", text: "Understand the concept of malware scanning tools and how they are applied in securing information systems." });
  B.push({ ul: [
    "Malicious code reaches servers and end-user machines via **email attachments, fake URLs, client-side code execution**, etc.",
    "**Anti-malware** analyzes, detects and removes malicious code; detection targets: **malware, phishing and pharming**.",
    "**Main detection = signature-based**: search a database for **known patterns**. **New malware, or malware whose signature is not in the database, will not be detected.**",
    "A **heuristic mechanism** is often embedded to identify **slight variations of known patterns**.",
  ] });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K2, 1 point)", body: "Sample Q30: main disadvantage of malware scanning tools? **They can only detect malware that is known to the tool.** Rejected: “only certain levels” (depends on focus, not the main disadvantage), “overly complex to run” (generally **easy to run**), “no updating or reporting” (they **do** update and report). (The official rationale mislabels the first rejection as “B”; the reasoning refers to option a.)" } });

  mech("AS-5.6.2", "K3", { title: "Testing Malware Scanning Tools", text: "Demonstrate how to test the effectiveness of existing malware scanning tool implementations." });
  B.push({ table: { title: "How malware evades analysis and detection", head: ["Technique", "Example"], widths: [5.0, 9.0], rows: [
    ["**Exploiting system library functions**", "**FindWindow** used to **close an anti-malware application**"],
    ["**String obfuscation**", "Encryption; **JavaScript stored in a PDF**; compression with **UPX** (Ultimate Packer for Executables)"],
    ["**Dynamic loading** of functions and libraries", "Limits analysis of the malicious code"],
    ["**Automatic update of applications**", "**Skype Trojan**"],
    ["**Using other hardware**", "**GPU** decompresses code into memory — **cannot be analyzed before execution**"],
  ] } });
  B.push({ ul: [
    "Functional test: **EICAR anti-malware test file** checks effectiveness **without developing real malicious code**.",
    "**Test a new or upgraded anti-malware implementation on a representative platform before deploying it organization-wide** — products have **falsely identified legitimate OS files as malware and quarantined them**, **shutting down the organization’s entire computing capability**.",
  ] });

  // 5.7
  mech("AS-5.7.1", "K2", { title: "Understanding Data Obfuscation", text: "Understand the concept of data obfuscation tools and how they are applied in securing information systems." });
  B.push({ p: "**Obfuscation (sometimes called data masking) makes data and source code non-understandable for a human.** It protects sensitive data against **copying (to bypass licence protection)** and **reverse-engineering (to understand code and exploit vulnerabilities)**." });
  B.push({ ul: [
    "Lets **support personnel, functional testers, etc.** work with **non-sensitive data** while **sensitive data is hidden** — also called **data anonymization** (keeps personal data anonymous).",
    "Protects **source code** against **copy-paste** (e.g. an innovative algorithm) and reuse after reverse-engineering.",
    "Optimizing code (e.g. **parts in assembly**) can incidentally obfuscate it.",
    "Protects **sensitive HTML pages** (connection, administration) against **script injection**, whose success depends on knowing the site’s structure.",
    "**Techniques:** **base64-encoding · XORing · randomly renaming functions · methods overriding · tab-return-space deletion · shuffling**. **Encryption** is also obfuscation, **but cyphered data remains viewable to those with valid keys**.",
    "**Attackers also use obfuscation** to hide malicious code and attacks.",
  ] });

  mech("AS-5.7.2", "K3", { title: "Testing Data Obfuscation Approaches", text: "Demonstrate how to test the effectiveness of data obfuscation approaches." });
  B.push({ ul: [
    "**Tight configuration control between obfuscated data and keys** — otherwise data **cannot be un-obfuscated**.",
    "Obfuscation renders **production data used in a system test environment anonymous** — e.g. a **health information system** must not divulge patient data to testers.",
    "**Data tests:** **brute force or dictionary attacks** to try to get plain data from obfuscated data.",
    "**Code tests:** **reverse-engineer Java byte code** (e.g. **Java Decompiler**) or **.NET** (e.g. **.NET Reflector**); **brute force** on vulnerable mechanisms (e.g. **unXOR**).",
    "**In theory code cannot protect itself against de-obfuscation, because debugging can always be used**; anti-decompilation tools exist but **risks and limitations remain**.",
  ] });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K3, 2 points)", body: "Sample Q31: removing personal identification numbers from a legacy system for testing — how to verify masking effectiveness? **Design a brute force attack on the obfuscated data.** Rejected: **manual inspection in the database** (not feasible for the volume of data and time); **substituting random data of varying lengths** (an anonymizing exercise, and field lengths may corrupt data); **stressing the database** (not the goal)." } });

  // 5.8
  mech("AS-5.8.1", "K2", { title: "The Importance of Security Training", text: "Understand the concept of security training as a software lifecycle activity and why it is needed in securing information systems." });
  B.push({ p: "**Humans are often the weakest link in the overall security picture.** Hence **consistent and continuous training** to remind people **why policies matter** and to follow them. Training should occur **throughout the software lifecycle**, be **updated as new policies and threats arise**, and cover **identification of social engineering attacks and insider threats**." });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K2, 1 point)", body: "Sample Q32: weakest link in software security? **The behavior of humans.** The other options (no training plan, effort to maintain documents, advancing attack techniques) are concerns, **but people and their behavior are the weakest link**." } });

  mech("AS-5.8.2", "K3", { title: "Testing the Effectiveness of Security Training", text: "Demonstrate how to test the effectiveness of security training." });
  B.push({ table: { head: ["Training topic", "Effectiveness test", "What a failure means"], widths: [3.4, 6.2, 4.4], rows: [
    ["**Strong, confidential passwords**", "**Social engineering** call from a **fake technical support person** · **look around desks for sticky notes** (especially **under keyboards**) · run **password audit tools** — risk: **passwords may be viewable to the person running the test**", "Users need retraining"],
    ["**Secure coding**", "Tester **injects SQL** through a field with **no field-level edit** and sees the customer database", "**This developer needs training**; **check other developers’ code** — if widespread, a **general process improvement initiative** is needed"],
    ["**Physical security / clean desk**", "Tester attempts **unauthorized physical access** and **views documents left in the open**", "Awareness and physical controls need reinforcement"],
  ] } });

  // ================= SECTION 2 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 2 — Key Concepts" });
  B.push({ h2: "2.1 One line per mechanism" });
  B.push({ table: { head: ["Mechanism", "Concept (K2)", "Test (K3)"], widths: [2.8, 5.6, 5.6], rows: [
    ["**Hardening**", "Step-by-step attack-surface reduction by policy and layers; remove, patch, configure, remote logs; balance usability", "Audit defaults, services, ports, versions; vulnerability scanner; static analysis; check over-restriction"],
    ["**AuthN / AuthZ**", "AuthN = who and is it really you (ID + token); AuthZ = rights and access level; unauthenticated = no/restricted rights", "Brute force, dictionary, SQL injection to bypass login, ../../ and /admin, exploit unpatched flaws"],
    ["**Encryption**", "Plain → cypher text with algorithm + secret; at rest and in transit; symmetric (shared key) vs asymmetric (public/private); hashing and salting", "Modes, key size (RSA ≥ 2048), certificates/self-signed, replay; code review (random()), fuzzing, timing, power; TLS config and cipher order; ageing"],
    ["**Firewalls / zones**", "Restricts access between networks; host- or network-based; zones of trust (public, DMZ, internal); filters addresses, options, size; WAF filters users and data patterns", "Port scanning, malformed packets and fuzzing, fragmentation; WAF: encode, compress, obfuscate"],
    ["**IDS**", "Monitors OSI layers for policy violations; negative (signature, blacklist) vs positive (behaviour, white list); IDS alerts, firewall blocks", "Evasion (encoding, fragmentation, encryption, URL encoding); false negatives; malicious traffic to add intrusive specifications; PP-IDS, WAFEC"],
    ["**Anti-malware**", "Signature-based + heuristic; malware, phishing, pharming; misses the unknown", "EICAR; test on a representative platform first; know evasion techniques (FindWindow, UPX, dynamic loading, GPU)"],
    ["**Obfuscation**", "Make data/code non-understandable; masking, anonymization; base64, XOR, renaming, shuffling; encryption with key caveat", "Key/data configuration control; brute force/dictionary; decompilers; unXOR; code can’t fully protect itself"],
    ["**Training**", "Humans weakest link; continuous, lifecycle-wide; social engineering and insider threats", "Fake support call; sticky notes; password audit; SQLi by a tester; physical access attempt"],
  ] } });
  B.push({ h2: "2.2 Chapter 5 keyword glossary" });
  B.push({ table: { head: ["Keyword", "Working definition for the exam"], widths: [3.4, 10.6], rows: [
    ["**anti-malware**", "Software to analyze, detect and remove malicious code; mainly signature-based plus heuristics."],
    ["**authentication**", "Verifying a user identifier and token — who the user is and whether they are who they claim."],
    ["**authorization**", "Verifying an authenticated user’s rights to an action and level of access."],
    ["**demilitarized zone**", "A network zone between untrusted and internal networks with an intermediate level of trust."],
    ["**encryption**", "Encoding plain text into cypher text with an algorithm and secrets so only authorized persons can decrypt."],
    ["**firewall**", "Component(s) restricting access between a protected network and the Internet or other networks."],
    ["**hashing**", "A one-way transformation used during encryption (e.g. of stored passwords)."],
    ["**insider threat**", "A threat from an authorized user inside the organization."],
    ["**intrusion detection system**", "Appliance or application monitoring activity to detect security-policy violations and raise alerts."],
    ["**malware**", "Malicious code placed at a target via email, fake URLs, client-side execution, etc."],
    ["**malware scanning**", "Detecting malware by known signatures and heuristics."],
    ["**network zone**", "A sub-network with a defined level of trust."],
    ["**pharming**", "Redirecting users to fraudulent sites; a detection target of anti-malware."],
    ["**phishing**", "Luring users to reveal information or visit infected sites; a detection target of anti-malware."],
    ["**salting**", "Adding random data before hashing, used during encryption to strengthen stored secrets."],
    ["**system hardening**", "Step-by-step reduction of the attack surface by applying a security policy and layers of protection."],
    ["**vulnerability scanner**", "A tool that eases vulnerability assessment, especially in complex systems."],
  ] } });

  // ================= SECTION 3 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 3 — Tables and Summaries" });
  B.push({ table: { title: "3.1 Mechanism → weakness → test (the K3 decider)", head: ["Mechanism", "Weakness the syllabus names", "Test the syllabus names"], widths: [2.8, 5.2, 6.0], rows: [
    ["Hardening", "Defaults, unnecessary services and ports, obsolete versions", "Configuration audit; vulnerability scanner; static analysis"],
    ["AuthN/AuthZ", "Weak passwords, no input filtering, default rights, old libraries", "Brute force/dictionary; SQLi; URI/URL tampering; exploit unpatched flaw"],
    ["Encryption", "Short/static keys, wrong modes, bad randomness, poor configuration, ageing", "Key size; modes; certificates; code review; timing/power; TLS config; ageing"],
    ["Firewall", "Hard to configure efficiently", "Port scan; malformed packets/fuzzing; fragmentation; WAF encoding"],
    ["IDS", "Signatures miss unknown attacks; behaviour models drift", "Evasion encodings; malicious traffic to add intrusive specifications"],
    ["Anti-malware", "Only detects known malware; false positives can kill systems", "EICAR; representative platform first"],
    ["Obfuscation", "Reversible; keys must match", "Brute force/dictionary; decompilers; unXOR"],
    ["Training", "Humans", "Social engineering call; desk sweep; password audit; SQLi; physical access"],
  ] } });
  B.push({ table: { title: "3.2 Design / construction / configuration — the recurring triad", head: ["Vulnerability type", "Hardening example", "Encryption example"], widths: [3.6, 5.2, 5.2], rows: [
    ["**By design**", "Wrong architecture", "Wrong mode; small key; self-signed certificate; replayable protocol"],
    ["**By construction**", "Coding-rule violation (static analysis)", "random() seed; fuzzing; timing; power analysis"],
    ["**By configuration**", "Default passwords; open ports", "TLS configuration; cipher order downgrade"],
  ] } });
  B.push({ table: { title: "3.3 Negative vs positive security models", head: ["", "Negative", "Positive"], widths: [3.0, 5.5, 5.5], rows: [
    ["Rule", "Not forbidden → allowed", "Not allowed → rejected"],
    ["Also called", "Signature / blacklist", "Behaviour / white list"],
    ["Fails by", "Missing unknown attacks (bypass)", "False positives and negatives; drift"],
    ["Test with", "Evasion encodings", "Malicious traffic to add intrusive specifications"],
  ] } });
  B.push({ box: { kind: "ok", title: "Reproduce from memory before moving on", body: ["**Table 3.1** — every K3 question in this chapter is a row of it.", "**Authentication vs authorization** and **firewall vs zone vs IDS** — the usual K2s.", "**Humans are the weakest link** — the training K2."] } });

  return B;
};
