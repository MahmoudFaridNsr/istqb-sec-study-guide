// CT-SEC Chapter 6 — Sections 1 to 3
module.exports = function () {
  const B = [];

  // ================= SECTION 1 =================
  B.push({ h1: "Section 1 — Syllabus Explanation" });
  B.push({ p: "Chapter 6, **Human Factors in Security Testing**, carries **7 learning objectives** across three sub-chapters (6.1 Understanding the Attackers · 6.2 Social Engineering · 6.3 Security Awareness). The Exam Structure Table allocates **5 questions** and **9 of the 80 points**. Teaching time is **105 minutes** — **5.1 points per teaching hour**, among the best returns on the paper." });
  B.push({ p: "Three objectives are guaranteed: **attacker reconnaissance (AS-6.1.2, K3)**, **analyzing an attack scenario (AS-6.1.4, K4)** and **actions to increase awareness after test outcomes (AS-6.3.2, K3)** — **7 of the chapter’s 9 points**. The remaining two K2 questions are drawn from the four “understand” objectives." });
  B.push({ table: { head: ["LO ID", "K", "Objective (syllabus statement)", "Qs", "Pts"], widths: [1.7, 0.7, 9.6, 1.0, 1.0], rows: [
    ["AS-6.1.1", "K2", "Explain how human behavior can lead to security risks and how it impacts the effectiveness of security testing.", "2 of 4†", "1 each"],
    ["AS-6.1.2", "**K3**", "For a given scenario, demonstrate the ability to identify ways in which an attacker could discover key information about a target and apply measures to protect the environment.", "**1**", "**2**"],
    ["AS-6.1.3", "K2", "Explain the common motivations and sources for performing computer system attacks.", "2 of 4†", "1 each"],
    ["AS-6.1.4", "**K4**", "Analyze an attack scenario (attack performed and discovered) and identify possible sources and motivation for the attack.", "**1**", "**3**"],
    ["AS-6.2.1", "K2", "Explain how security defenses can be compromised by social engineering.", "2 of 4†", "1 each"],
    ["AS-6.3.1", "K2", "Understand the importance of security awareness throughout the organization.", "2 of 4†", "1 each"],
    ["AS-6.3.2", "**K3**", "Given certain test outcomes, apply appropriate actions to increase security awareness.", "**1**", "**2**"],
    ["**Chapter 6 total**", "—", "**K2 = 2 · K3 = 2 · K4 = 1**", "**5**", "**9**"],
  ] } });
  B.push({ lead: "† Two K2 questions drawn from AS-6.1.1, 6.1.3, 6.2.1, 6.3.1 — the Sample Exam drew **6.1.1** (Q33) and **6.1.3** (Q35)." });
  B.push({ box: { title: "Exam allocation you must know", body: "Chapter 6 = **5 questions / 9 points**; Sample Exam **#33 to #37** (1 + 2 + 1 + 3 + 2 points)." } });
  B.push({ box: { kind: "warn", title: "The one thing that decides this chapter", body: "**Think like the investigator: start where the evidence points, and assume the attacker is still in.** The 3-point forensic scenario (Q36) is answered by **checking the suspicious email and tracing its IP address** — the problems started after virus-infected emails, so that is where the trail begins. The Shodan scenario (Q34) is answered by **“yes, be concerned — he can still access the system”**: fixing the vulnerability does not remove an attacker who is already inside. Never assume good intent (“white hat”), never assume a patch closes a breach." } });

  B.push({ h2: "Chapter framing — the human is both threat and weakest defense" });
  B.push({ p: "**In the context of information security, the human being is both the largest threat and weakest point in defense.** Attacks are performed by people with various skills and motivations, and **humans are the (biggest) enablers for most attacks**. Understanding the technology is not enough: testers need to understand **the mindset, motivations and methods of malicious attackers** and **the human weaknesses in the line of defense**." });

  // 6.1.1
  B.push({ h2: "AS-6.1.1 (K2) — The Impact of Human Behavior on Security Risks" });
  B.push({ box: { title: "Original syllabus statement", body: "Explain how human behavior can lead to security risks and how it impacts the effectiveness of security testing." } });
  B.push({ ul: [
    "**The key phase in any attack is information gathering (reconnaissance).** **All information published — sometimes unknowingly — about an organization, its systems, etc. will be found and can/will be used. It is not a question of “if” but “when”.**",
    "Besides official publications, **employees publish information about the company on their social networks**; the amount and content **change continuously**, often giving attackers **key information**.",
    "**Attackers do not use a security policy or predefined procedures.** They decide their strategy **from the information they can collect**, and **update their knowledge base** for each attack with selective searches and **visits to already known IP addresses**.",
    "Security policies are written **from the facts available at the time** — often **not including all publicly accessible information**, which **is likely to change anyway**.",
    "**Impact on testing:** **security tests that were valid when created may not provide adequate coverage when published information changes.**",
  ] });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective", body: "Sample Q33: which is a potential security risk? **Publishing an accounting department’s organization chart on the company’s web site** — it reveals **approval chains for invoices**, which could be used to **create and approve fake invoices** if the accounting system is hacked. Rejected: birthday wishes on Facebook (birth dates **should not be used** in passwords anyway); the phone directory on the **intranet** (behind the firewall); professional experience on LinkedIn (**unlikely to be useful** to a hacker). **The risk is published information that reveals process or authority.**" } });

  // 6.1.2
  B.push({ h2: "AS-6.1.2 (K3) — Understanding the Attacker Mentality" });
  B.push({ box: { title: "Original syllabus statement", body: "For a given scenario, demonstrate the ability to identify ways in which an attacker could discover key information about a target and apply measures to protect the environment." } });
  B.push({ p: "During **reconnaissance or footprinting**, the attacker gathers all kinds of information **by passive and/or active means**. **Most IT equipment facing public networks leaves a footprint, and these footprints can and will be found.**" });
  B.push({ table: { title: "Passive vs active reconnaissance", head: ["", "Passive (without connecting to the target)", "Active (touching the system)"], widths: [2.2, 5.9, 5.9], rows: [
    ["**Sources / tools**", "**Google** (incl. **Google Earth and Street View**) and other search engines · **Shodan** · **Facebook, LinkedIn** and other social networks · **The Google Hacking Database** (hundreds of queries) · **Whois** · **RIPE** (European IP networks) database · **DNS searches**", "**Pinging** — Fping, Hping · **TCP/UDP scan** — Nmap, Zenmap · **OS detection** — Nmap, Xprobe2 · **Service fingerprinting** — Nmap compares a discovered service’s **fingerprint** with its database to find **type and version**"],
    ["**Information found**", "**IP addresses, web pages, telephone numbers, names and email address structures, OS and applications**", "**Hosts, open ports, OS, applications and versions**"],
    ["**Shodan example**", "Find **which companies in an area run an Apache server with a vulnerable version**", "—"],
  ] } });
  B.push({ h3: "Hiding the evidence" });
  B.push({ p: "Because hacking is **illegal in most, if not all, countries**, the attacker **tries to destroy all evidence** — also to **lengthen the stay**, **continue using the system in future**, and **use the compromised system or botnet to attack others**. Tools and methods: **NetCat**, **IP Tracer**-style sites, **tunneling**, **altering log files**, **hide tools, rootkits and file streaming**. Most are available on the Internet — e.g. **Kali Linux** and the **OWASP** site." });
  B.push({ box: { kind: "ok", title: "Protective measures (K3 “apply measures”)", body: ["The syllabus gives the attack side; the protective side follows from it and from other chapters:", "**Minimise and review published information** — org charts, email address formats, technology details in job adverts, banners exposing versions (reconnaissance is “when”, not “if”). **Patch and harden** what Shodan or Nmap fingerprinting would reveal (Chapter 5). **Remote, protected logging** so evidence survives (§5.1.1). **IDS** tuned to detect scanning (Chapter 3’s DDoS level 2). **Awareness training** on what employees post (§6.3)."] } });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K3, 2 points)", body: "Sample Q34: someone emails that they **hacked into your financial system using Shodan** and found an **out-of-date, vulnerable OS** on a server. You confirm it and **update the server**, but **find no trace of how they got in**. Should you be concerned? **Yes — since the hacker didn’t admit how he got in, he can still access it and may exploit the vulnerability next time.** Rejected: “white hat, means no harm” (**a dangerous assumption**); “fixed, so safe” (**the hacker still has access**); “re-run your tests” (**re-running the same tests won’t help**)." } });

  // 6.1.3
  B.push({ h2: "AS-6.1.3 (K2) — Common Motivations and Sources of Attacks" });
  B.push({ box: { title: "Original syllabus statement", body: "Explain the common motivations and sources for performing computer system attacks." } });
  B.push({ table: { head: ["Source", "Share", "Motivations (syllabus)"], widths: [3.0, 2.6, 8.4], rows: [
    ["**Insiders** (internal hackers, insider threats) — **malicious authorized users**", "**Many attacks** come from inside", "**Mostly revenge**; recent trends show **increasing economic espionage or theft**"],
    ["**External hackers**", "**The minority** of attacks", "**Curiosity** (one of the first motivators, still is) · **prestige** (knowing what others don’t) · **notoriety or fame** · **challenge** · **boredom** · **revenge** — **the most dangerous form (highest motivation)**"],
  ] } });
  B.push({ table: { title: "The attacker spectrum", head: ["End", "Who", "Abilities"], widths: [2.2, 5.6, 6.2], rows: [
    ["**Lower end**", "**Script kiddies** — **simply execute the attacks others create**", "Some system and networking knowledge, a **simple home computer**"],
    ["**Upper end**", "**Professional (governmental, hacktivism) organizations and individuals**", "**Highly trained**, with **labs, proxy networks** and all needed equipment"],
  ] } });
  B.push({ ul: [
    "**Hacktivism** = attacking systems on **mainly political**, but also **economic or other demographic** grounds.",
    "Motivation scales **from playing around for fun to knocking an organization completely down** — political, ideological, economic, warfare, commercial, terrorism.",
    "**Having a picture of potential attackers helps an organization implement protection and gives a guideline for the security test strategy.**",
  ] });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective", body: "Sample Q35: why is an inside attack particularly worrisome? **The attacker is already inside the firewall and is an authorized system user** — **external protections are useless**. Rejected: curiosity and boredom (**more likely with external attackers**); DoS (insiders are **generally after information they can sell or use to embarrass the company**)." } });

  // 6.1.4
  B.push({ h2: "AS-6.1.4 (K4) — Understanding Attack Scenarios and Motivations" });
  B.push({ box: { title: "Original syllabus statement", body: "Analyze an attack scenario (attack performed and discovered) and identify possible sources and motivation for the attack." } });
  B.push({ p: "**A security incident is a security-relevant system event in which the system’s security policy is disobeyed or otherwise breached** [RFC 2828]. Finding **what happened and who was responsible** is the target of **computer forensics** — finding **digital evidence**. The evidence recovery process has **three phases: acquire and authenticate · analyze · report**." });
  B.push({ h3: "Phase 1 — Acquire and authenticate" });
  B.push({ p: "The incident management process should **restore the system to its pre-attack state after evidence is collected and stored**. It starts when the sysadmin is alerted by the **IDS or other monitoring**. **Typical symptoms of security incidents:**" });
  B.push({ table: { head: ["Symptom", "Symptom"], widths: [7.0, 7.0], rows: [
    ["**Suspicious log entries**", "**Unexplained user accounts**"],
    ["**Modified files/folders**", "**Unusual services running**"],
    ["**Unusual system behavior**", "**Unsuccessful login attempts**"],
  ] } });
  B.push({ table: { title: "The five-step response after an alert", head: ["Step", "Action"], widths: [1.0, 13.0], rows: [
    ["1", "**Snapshot or copy** the system under investigation to collect all evidence"],
    ["2", "After **authenticating the evidence** (genuine and complete copy), **create a copy and store it safely**"],
    ["3", "**Analyze** the evidence"],
    ["4", "After forensics, **remove the cause** of the incident — **eradication**"],
    ["5", "Bring the system back to normal — **recovery**"],
  ] } });
  B.push({ p: "Vulnerabilities are removed during these steps with **patches or new software**. The report describes **the process followed and the tools used**." });
  B.push({ h3: "Phase 2 — Analyze" });
  B.push({ ul: [
    "Find the source by examining **system log files** and **active network connections**; **copy all logs** and capture **process status**. **During an active attack, gather information about the attacker before locking them out.**",
    "**Any Internet attack can be traced to the originating IP address** (email or connection) — **only a matter of time, money and effort**. Attackers use **proxies, chains of proxies, Tor**; **more proxies, more time**; **local laws** where proxies sit may obstruct.",
    "Tools: **Netstat** (connections, ports, services — look for strange IPs or ports), **Tracert / traceroute**, the **IP Tracer** website.",
    "**Email:** the header may show the **ISP’s IP**; for web mail (Gmail, Yahoo, Outlook.com) look for **X-Originating-IP**; then **Whois** to contact the ISP. **Private servers and open relays** make the source very hard to identify.",
    "**Botnets are difficult to investigate** — the attacker needs no online connection to the bot server or clients; **investigating clients may lead to the server**, but you need **access to the server**; owners **may not know** their machines are part of a botnet.",
  ] });
  B.push({ h3: "Phase 3 — Report" });
  B.push({ p: "Reporting of security vulnerabilities is covered in **Chapter 7**." });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K4, 3 points)", body: ["Sample Q36: root access is tightly held by three trusted admins. Odd events: a program **“IKnowYourBirthday”** emails staff correct birthday greetings “From your favorite server”; the **phone list is overwritten** (file created by **root**); the **root password is changed** to the **lead admin’s dog’s name**. The problems **started shortly after a series of virus-infected emails**. Next step? **Check the suspicious email that was sent and try to trace the IP address.**", "Rationale: **it appears this might have been where the problem originated**. If that finds nothing, **A** (was HR birthdate data accessed from outside? trace the IP) and **D** (are the other two admins unhappy? — **an internal attack**) are the next paths; **B** (dog’s name on social media) could be pursued, **but it is easier just to ask the admin**. **Method: follow the timeline to the first event and start the trace there.**"] } });

  // 6.2
  B.push({ h2: "AS-6.2.1 (K2) — Social Engineering" });
  B.push({ box: { title: "Original syllabus statement", body: "Explain how security defenses can be compromised by social engineering." } });
  B.push({ p: "Employees **need access** to assets to do their work, from desktops, notebooks, phones and tablets. **Physical defenses at the office are meaningless if the IT manager’s working area at home can easily be compromised.** **The human being and his or her behavior is the greatest threat** — sloppiness with sensitive information leaves footprints and **broadcasts information too loudly** in public places." });
  B.push({ p: "**Social engineering is the art of exploiting the human using its general behavior as an attack vector.** People are **willing to trust and help strangers**; by **manipulating, influencing and persuading helpful people**, attackers gather **access, authorization details or other sensitive information**." });
  B.push({ table: { head: ["Direct human interaction (in person)", "Computer-based"], widths: [7.0, 7.0], rows: [
    ["**Tailgating / piggybacking** — someone without authentication **follows an employee into a restricted area**", "**Emails infected with malware**"],
    ["**Eavesdropping** — listening to private conversations without knowledge", "**Chat / instant messaging** — anonymous, true identity unknown, **data easily sniffed**"],
    ["**Shoulder surfing** — looking over someone’s shoulder at the screen or writing", "**Pop-up screens** — e.g. “network connection lost, re-enter user name and password”; a planted program sends them to a remote site"],
    ["**Telephone** — getting a password by **impersonating a manager or tech support**", "**Spam email** — fraudulent offers and links that **install malware**"],
    ["", "**Phishing** to infected sites — **broad**, or **highly individualized (spear phishing)**"],
  ] } });
  B.push({ box: { kind: "ok", title: "The defense", body: "**There is no single defense against social engineering.** Damage control: **least privilege**, **separation of duties**, **rotation of duties** — **but the main defense is education and awareness at all levels of the organization.**" } });

  // 6.3
  B.push({ h2: "AS-6.3.1 (K2) — The Importance of Security Awareness" });
  B.push({ box: { title: "Original syllabus statement", body: "Understand the importance of security awareness throughout the organization." } });
  B.push({ ul: [
    "**The threat model is constantly changing**: networks evolve, new applications and interfaces go live, **new vulnerabilities are introduced and discovered**.",
    "The human factor: **risks once identified but which did not become issues are easily forgotten, and safeguards are withdrawn** — more opportunity for **hacking and social engineering**.",
    "**Regular security awareness training** keeps **security administrators and all employees alert and informed** about changes in the threat model.",
    "Training can target **different user groups: developers, operations, management and general staff**.",
  ] });

  B.push({ h2: "AS-6.3.2 (K3) — Increasing Security Awareness" });
  B.push({ box: { title: "Original syllabus statement", body: "Given certain test outcomes, apply appropriate actions to increase security awareness." } });
  B.push({ p: "Keep a **“security aware” mindset**. Beyond general information about company defenses, training should contain **real case studies — discovered during security testing or in actual incidents**. Building on them makes it **easier to discuss defenses or changes**. The case-study section should answer **six questions**:" });
  B.push({ table: { head: ["#", "Question for the awareness case study"], widths: [0.8, 13.2], rows: [
    ["1", "**How did they (we) do it?**"],
    ["2", "**What were the business consequences?**"],
    ["3", "**What were the costs to investigate and process the incident?**"],
    ["4", "**What were the costs to repair the problem?**"],
    ["5", "**How could the incident have been avoided?**"],
    ["6", "**Which changes will be implemented?**"],
  ] } });
  B.push({ box: { kind: "warn", title: "How the official exam used this objective (K3, 2 points)", body: "Sample Q37: testing an upgrade, a tester performs a **man-in-the-middle attack that changes amounts charged** (a 10% discount). What first? **Check production to see if the vulnerability is also in the production code** — **get the problem fixed immediately**. Next: **work with developers** on checks such as **SSL-trip** for certificate validity (C). Rejected: discouraging the tester (**this is exactly what security testers should be doing**); telling management afterwards (**permission should always be obtained prior to testing, not afterward**). The case then becomes awareness material: how was it done, consequences, costs, avoidance, changes." } });

  // ================= SECTION 2 =================
  B.push({ pagebreak: true });
  B.push(...require("./sec_ch6_concepts")());
  B.push({ h2: "2.5 Chapter 6 keyword glossary" });
  B.push({ table: { head: ["Keyword", "Working definition for the exam"], widths: [3.4, 10.6], rows: [
    ["**attacker**", "A person who attempts to breach security — insider or external, from script kiddie to state actor."],
    ["**botnet**", "A large number of previously compromised computers under an attacker’s control; hard to trace."],
    ["**computer forensics**", "Finding digital evidence of what happened in a security incident and who was responsible."],
    ["**hacker**", "Used in the syllabus for attackers; internal hackers are insider threats; ethical hacking is authorized testing (Ch1)."],
    ["**reconnaissance**", "The information-gathering (footprinting) phase — passive or active — and the key phase of any attack."],
    ["**script kiddies**", "Attackers at the lower end who simply execute attacks others create."],
  ] } });

  // ================= SECTION 3 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 3 — Tables and Summaries" });
  B.push({ table: { title: "3.1 Attacker profile → test strategy implication", head: ["Profile", "Typical motive", "Implication for testing"], widths: [3.4, 4.2, 6.4], rows: [
    ["Insider", "Revenge; espionage/theft", "Test authorization, segregation of duties, logging; external defenses don’t help"],
    ["Script kiddie", "Curiosity, fame, boredom", "Known exploits — patching and hardening tests"],
    ["Hacktivist", "Political, economic", "Availability (DoS), defacement, data leaks"],
    ["Professional / governmental", "Espionage, warfare", "Advanced, persistent; detection and forensics readiness"],
  ] } });
  B.push({ table: { title: "3.2 Investigation order (Q36 method)", head: ["Step", "Question"], widths: [1.0, 13.0], rows: [
    ["1", "What was the **first** anomalous event on the timeline? Start the trace **there**"],
    ["2", "What **external** origin could it have (email IP, connection IP)?"],
    ["3", "Could it be **internal** (who has access, who is unhappy)?"],
    ["4", "What could be learned **cheaply** (just ask the admin) before investigating publicly?"],
  ] } });
  B.push({ table: { title: "3.3 Social engineering — channel and countermeasure", head: ["Technique", "Channel", "Countermeasure in the syllabus spirit"], widths: [3.2, 3.0, 7.8], rows: [
    ["Tailgating", "In person", "Physical access control, awareness"],
    ["Shoulder surfing", "In person", "Awareness, screen placement"],
    ["Phone impersonation", "Telephone", "Verification procedure (identity check before reset — Ch3)"],
    ["Pop-up re-login", "Computer", "Malware protection, awareness"],
    ["Spear phishing", "Email", "Awareness with real case studies; anti-malware"],
  ] } });
  B.push({ box: { kind: "ok", title: "Reproduce from memory before moving on", body: ["**Passive vs active reconnaissance tools** — the K3 on AS-6.1.2.", "**Five forensic steps** and **six symptoms** — the K4 on AS-6.1.4.", "**Six case-study questions** — the K3 on AS-6.3.2.", "**Insider vs external motives** — a likely K2."] } });

  return B;
};
