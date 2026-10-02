# Resources — CT-SEC

Everything here is **external** to this repository. Nothing is hosted, mirrored or transcribed; all
works belong to their creators and publishers, credited in [`NOTICE.md`](../NOTICE.md).

The guides themselves are built from the official ISTQB® documents. This file is for the official
documents you must download yourself, for the references the syllabus itself cites, and for the
background and hands-on practice that make the syllabus make sense.

> Links move. If one is dead, search for the document title — every item below is named in full.

---

## 1. The official documents — download these first

All of them are free. **They are not committed to this repository.**

| Document | Where to get it |
| --- | --- |
| **CT-SEC Syllabus, Version 2016** (Advanced Level Security Tester) | ISTQB® certification page — <https://istqb.org/certifications/certified-tester-security-tester-ct-sec/> — and member-board sites |
| **CT-SEC Sample Exam — Questions** (v1.0 GA, March 2016) | Same page, under sample exams |
| **CT-SEC Sample Exam — Answers** (v1.0 GA, March 2016) | Same page. **The most valuable document after the syllabus** — the rationale shows how the exam board reasons |
| **ISTQB® Exam Structure Tables** | <https://istqb.org> — the source of every question-count and K-level figure in this repository |
| **ISTQB® Foundation Level Syllabus** | <https://istqb.org> — the formal entry requirement, and the source of the test process and coverage techniques CT-SEC assumes |
| **ISTQB® Advanced Technical Test Analyst and Test Manager syllabi** | <https://istqb.org> — cited by CT-SEC for security as a quality characteristic and for open source tool issues |
| **ISTQB® Glossary** | <https://glossary.istqb.org> |

> **Successor certification.** ISTQB® has released a **Security Test Engineer (CT-STE)**
> syllabus. If your provider has moved to it, much of the material here still applies, but the
> objectives and the exam are different. Search the ISTQB® site for “Security Test Engineer”.

---

## 2. The references the syllabus itself cites — mapped to chapters

| Work | Why the syllabus cites it | Maps to |
| --- | --- | --- |
| **NIST SP 800-30 Rev. 1**, *Guide for Conducting Risk Assessments* — <https://csrc.nist.gov/pubs/sp/800/30/r1/final> | The risk model: prepare / conduct / communicate, threats, vulnerabilities, likelihood, impact | **Ch1** §1.1.3, §1.3.2 |
| **OWASP Risk Rating Methodology** — <https://owasp.org/www-community/OWASP_Risk_Rating_Methodology> | Alternative likelihood × impact method | **Ch1** §1.3.2 |
| **Christopher Jackson, *Network Security Auditing*** (Cisco Press, 2010) | The eighteen example policies, five audit pillars, people/process/technology | **Ch1** |
| **SANS / CIS Critical Security Controls** — <https://www.cisecurity.org/controls> | The “Top 20 Critical Security Controls” (now maintained by CIS) | **Ch1** §1.2.2 |
| **COBIT** (ISACA), **ISO/IEC 27001**, **PCI DSS** | Criteria for evaluating policies; common standards | **Ch1** §1.2.2, **Ch9** |
| **NISTIR 7298 Rev. 2**, *Glossary of Key Information Security Terms* | Definition of **information assurance** | **Ch2** §2.4.3 |
| **OWASP Secure Coding Practices Quick Reference Guide** — <https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/> | Source list for secure coding practices | **Ch3** §3.3.1 |
| **SEI CERT Top 10 Secure Coding Practices** — <https://wiki.sei.cmu.edu/confluence/display/seccode/Top+10+Secure+Coding+Practices> | The ten practices for component tests | **Ch3**, **Ch4** §4.4.2 |
| **CWE Top 25 Most Dangerous Software Weaknesses** (MITRE; the successor of the SANS Top 25) — <https://cwe.mitre.org/top25/> | “Top 25 Most Dangerous Software Errors” | **Ch3** §3.3.1 |
| **OWASP authorization form** | Sample security-testing authorization form | **Ch3** §3.4.2 |
| **ISO/IEC/IEEE 29119-3** | Test documentation formats, tailored | **Ch3** §3.3.1 |
| **IEEE Center for Secure Design, *Avoiding the Top 10 Software Security Design Flaws*** — <https://www.computer.org/press-room/news-archive/ieee-center-for-secure-design> | The ten design approaches | **Ch4** §4.3 |
| **Chapman, Cooper, Zwicky, *Building Internet Firewalls*** (O’Reilly, 2000) | Definition of a firewall | **Ch5** §5.4.1 |
| **SANS Password Construction Guidelines** — <https://www.sans.org/information-security-policy/> | Current good practice for password rules | **Ch5** §5.2.2 |
| **EICAR anti-malware test file** — <https://www.eicar.org> | Functional test of anti-malware | **Ch5** §5.6.2 |
| **RFC 2828**, *Internet Security Glossary* (since updated as RFC 4949) | Definition of a security incident | **Ch6** §6.1.4 |

---

## 3. Background reading, mapped to chapters

None of this is examinable. All of it makes the syllabus easier to hold in your head.

### Chapters 1–2 — Risk, policy, purpose

- **NIST SP 800-30** — read Chapter 2 (the risk model) and Appendix tables on threat sources. It is
  the syllabus’s backbone for §1.3.2.
- Any organization’s published **information security policy set** — compare it with the
  syllabus’s eighteen policy types.

### Chapters 3–4 — Process, design and the lifecycle

- **NIST SP 800-115**, *Technical Guide to Information Security Testing and Assessment* —
  <https://csrc.nist.gov/pubs/sp/800/115/final>. A government-standard view of planning, approvals
  and rules of engagement that matches §3.2 and §3.4.2 closely.
- **OWASP Web Security Testing Guide** — <https://owasp.org/www-project-web-security-testing-guide/>.
  Concrete test cases for authentication, session management, input validation and business logic;
  the best way to turn §3.3 and §4.5 from lists into tests.
- **OWASP Top 10** — <https://owasp.org/www-project-top-ten/>. The industry’s short list of web
  risks; useful context for the “known vulnerabilities” the syllabus keeps referring to.

### Chapter 5 — Mechanisms

- **CIS Benchmarks** (hardening guides) — <https://www.cisecurity.org/cis-benchmarks> — show what
  “remove, patch, configure” looks like for real platforms.
- **Mozilla Server Side TLS guidelines** — a practical TLS configuration guide of the kind §5.3.2
  refers to.

### Chapter 6 — Human factors

- **Exploit Database — Google Hacking Database** — <https://www.exploit-db.com/google-hacking-database>
- **Shodan** — <https://www.shodan.io>. Search your own organization’s public footprint (only your
  own, and only passively).

### Chapters 7–9 — Reporting, tools, standards

- **sectools.org** — the syllabus’s own pointer to a list of network security tools.
- **Kali Linux tools listing** — <https://www.kali.org/tools/> — the tool classification the
  syllabus mentions.

### A free all-round primer

- **Professor Messer’s free security-fundamentals video course** — <https://www.professormesser.com>.
  Not ISTQB®-specific, but a fast way to fill the vocabulary gaps listed in
  [`PREREQUISITES.md`](PREREQUISITES.md).

---

## 4. Hands-on practice — legally

> ⚠️ **Only ever test systems you own or are explicitly authorized to test.** The syllabus is
> blunt: without authorization, security testing breaks the law in almost every country (§3.4.2).
> Use deliberately vulnerable labs.

| Resource | What it teaches | Maps to |
| --- | --- | --- |
| **PortSwigger Web Security Academy** — <https://portswigger.net/web-security> (free labs) | SQL injection, XSS, authentication, access control, business logic | **Ch3** design categories, **Ch5** §5.2 |
| **OWASP Juice Shop** — <https://owasp.org/www-project-juice-shop/> | A deliberately insecure web shop to practise on locally | **Ch3**, **Ch4** |
| **OWASP ZAP** — <https://www.zaproxy.org> | Open source web scanner / proxy — a dynamic security tool | **Ch8** |
| **Nmap** — <https://nmap.org> | Port scanning, OS and service detection on your own lab network | **Ch5** §5.4.2, **Ch6** §6.1.2 |
| **John the Ripper** — <https://www.openwall.com/john/> | Password auditing against your own test hashes | **Ch5** §5.8.2, **Ch8** §8.1 |
| **EICAR test file** — <https://www.eicar.org> | Watching anti-malware detect a harmless test string | **Ch5** §5.6.2 |

**A one-evening exercise worth several marks.** In Juice Shop or a Web Security Academy lab:

1. Find a login form and try a single quote — see how input validation fails (**Sample #22**,
   §3.3.1 secure coding).
2. Log in with a wrong password for a real user and a fake user — compare the error messages
   (**account harvesting**, §3.3.1).
3. Change an ID in a URL to another user’s — see broken authorization (**Sample #19**, IEEE
   “authorize after you authenticate”).
4. Write your findings as an incident report with **nature, extent, impact and suggested
   remediation** (§3.5) — and notice how quickly you want to restrict who can read it (Ch7).

---

## 5. Practice questions

- **The official CT-SEC Sample Exam** is the only source whose questions are guaranteed to reflect
  the real paper’s style and difficulty. **Take it cold before you study**, and again at the end.
- **Section 4 of each guide in this repository** reproduces all 45 official questions with their
  official rationale, and adds 160 further questions derived from the syllabus text.
- Be sceptical of third-party CT-SEC question banks. Many are written from general security
  knowledge rather than the syllabus, and several circulate with answers that contradict the
  official rationale on exactly the points the exam tests (scope too large, policy first,
  production first, “the fewer that know the better”).
