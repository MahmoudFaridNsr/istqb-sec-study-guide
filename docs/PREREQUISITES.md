# Prerequisites — what to know before CT-SEC stops hurting

## The formal requirement

To be certified, candidates **must hold the Certified Tester Foundation Level certificate** and
**satisfy the exam board that they have sufficient practical experience** — **not less than three
years of relevant academic, practical, or consulting experience**. Each exam board sets its own
evidence rules; check with yours.

Everything below is the *informal* prerequisite: the background that makes the syllabus read as
sense rather than as vocabulary. It is **not** syllabus text, and none of it is examined directly —
the exam asks about the syllabus’s own wording. But the syllabus uses these terms without defining
them, and the scenario questions assume you can picture them.

---

## 1. What you need from Foundation Level (and the Advanced syllabi it cites)

| Concept | Where CT-SEC relies on it |
| --- | --- |
| **The ISTQB test process** — planning and control, analysis and design, implementation and execution, evaluating exit criteria and reporting, closure | **Chapter 3, Table 3.1** is this process seen through a security lens — a guaranteed **K3** |
| **Test levels** — component, integration, system, acceptance; **static vs dynamic testing**; reviews (walkthrough, technical review, inspection) | **Chapter 4** is organised by level; Sample #17 asks which level checks secure coding |
| **Risk-based testing** — likelihood and impact | **Chapter 1** risk exposure and the risk matrix |
| **Test basis, conditions, cases, procedures, scripts** | **Chapter 3** design and format; Sample #13, #23 |
| **Equivalence partitioning** | **Sample #22** (3 points) is an EP minimum-set question |
| **Statement, branch (decision) and path coverage; state transition testing** | **AS-4.4.3** (guaranteed K4) — the coverage families |
| **Test plan, incident report, exit criteria, test summary report** | **Chapters 3 and 7** |
| **Sequential vs iterative lifecycles; COTS** | **§3.1.2**, **AS-4.1.2** |
| **Maintenance types** — corrective, adaptive, perfective; confirmation vs regression testing | **§4.1.2**, **AS-4.6.1** |
| **Security as a quality characteristic** (ATTA syllabus) | §2.1 quotes the Technical Test Analyst syllabus’s list of threats |

---

## 2. Security vocabulary the syllabus uses without teaching

### Principles

| Term | What you need to know |
| --- | --- |
| **CIA** | **Confidentiality, Integrity, Availability** — the three properties whose loss defines an information security risk |
| **Non-repudiation** | Being unable to deny having performed an action. Part of the IA definition (Ch2) |
| **Least privilege** | Give each user or process only the rights it needs. A CERT practice and the Minimum Access policy |
| **Defense in depth** | Several independent layers, so one failure does not expose the asset. A CERT practice; the reason Ch5 says no mechanism is sufficient alone |
| **Separation / rotation of duties** | Splitting critical tasks between people; changing who does them. Damage control against social engineering (Ch6) |
| **Attack surface** | Everything an attacker can reach. Hardening reduces it; integration and external components grow it |

### Attacks

| Term | What you need to know |
| --- | --- |
| **SQL injection** | User input interpreted as database commands. The syllabus’s favourite example; tested with a quote character (Sample #22) |
| **Cross-site scripting (XSS)** | Script injected into a page and run in other users’ browsers |
| **Buffer overflow** | Input longer than the memory reserved for it, overwriting adjacent memory — a door to running attacker code |
| **Man-in-the-middle (MITM)** | An attacker silently intercepting and possibly altering traffic between two parties |
| **Session hijacking** | Taking over another user’s authenticated session (Sample #19) |
| **DoS / DDoS** | Making a service unavailable; distributed versions use **botnets** or **amplification** |
| **Privilege escalation** | Gaining rights beyond those granted |
| **Brute force / dictionary attack** | Trying all values / likely values to guess a secret |
| **Phishing / spear phishing / pharming** | Luring users to a fake site or message (broad / targeted); redirecting traffic to a fraudulent site |
| **Rootkit / Trojan / backdoor / logic bomb** | Hidden malware that conceals itself / disguises itself / bypasses controls / triggers on a condition |

### Defenses and infrastructure

| Term | What you need to know |
| --- | --- |
| **Authentication vs authorization** | Who you are vs what you may do. The Ch5 K2 separates them |
| **Symmetric vs asymmetric encryption** | One shared key vs a public/private pair |
| **Hashing and salting** | One-way transformation of a secret; random data added first so identical secrets hash differently |
| **TLS / SSL, certificates** | Encrypted transport; certificates prove server identity — a **self-signed** certificate proves nothing |
| **Firewall, DMZ, WAF** | Traffic filter between zones; an intermediate zone for public-facing servers; a firewall that understands web requests |
| **IDS** | A system that detects and alerts on suspicious activity (an IPS would also block) |
| **OSI model** | Seven network layers, physical (1) to application (7). An IDS can monitor all seven |
| **Ports, TCP/UDP** | The numbered endpoints services listen on; port scanning finds which are open |
| **Sandbox** | An isolated execution environment |

### Tools named by the syllabus

| Tool | What it is |
| --- | --- |
| **Nmap / Zenmap** | Network scanner: hosts, open ports, OS and service versions (active reconnaissance) |
| **Shodan** | Search engine for Internet-connected devices and their banners (passive reconnaissance) |
| **Google Hacking Database** | Search-engine queries that find exposed information |
| **Whois, RIPE, DNS lookups** | Registration and addressing information about domains and IP ranges |
| **Kali Linux (formerly BackTrack)** | A Linux distribution bundling security testing tools |
| **John the Ripper** | Password cracker / weak-password auditor |
| **Nessus** | Vulnerability scanner |
| **Metasploit** | Exploitation framework |
| **NetCat, Netstat, Tracert** | Raw network connections; local connection listing; route tracing |
| **EICAR test file** | A harmless file every anti-malware product detects, for testing |

---

## 3. A mental model that helps everywhere

```
Asset ← Threat source → Threat event → exploits Vulnerability → Impact   (× Likelihood = Risk)
                                                ↑
                         Controls: administrative / technical / physical
                                    preventive / detective / corrective / recovery
                                                ↑
            Policy → Testing policy → Strategy → Approach → Tests that PROVE the controls work
```

If you can place any stem on this picture — is it asking about the asset, the threat, the control,
or the test that proves the control? — most CT-SEC questions narrow to one or two options at once.
