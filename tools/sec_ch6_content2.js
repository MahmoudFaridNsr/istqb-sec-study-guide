// CT-SEC Chapter 6 — Section 4 (questions)
const OFF = (n, pts) => `OFFICIAL · Sample Exam #${n} (${pts})`;
const DER = "Derived from syllabus";

module.exports = function () {
  const B = [];
  B.push({ pagebreak: true });
  B.push({ h1: "Section 4 — Demo Questions with Answers" });
  B.push({ lead: "Questions 1–5 are the **official ISTQB CTAL-SEC Sample Exam questions for Chapter 6** — #33 to #37 — with official answers and rationale. LO tags are inferred and match the Exam Structure Table. Questions 6–22 are derived strictly from the syllabus. Correct options are marked ✔." });

  B.push({ h2: "Part A — The 5 official Chapter 6 questions" });

  B.push({ q: { n: 1, tag: OFF(33, "1 pt"), meta: "LO: AS-6.1.1 (K2) | Syllabus §6.1.1", correct: ["a"],
    stem: "Which of the following is a potential security risk?",
    opts: [
      "Publishing an accounting department’s organization chart on the company’s web site",
      "Posting birthday wishes for a co-worker on Facebook",
      "Posting the company phone directory on the company Intranet",
      "Posting professional experience in a LinkedIn profile",
    ],
    why: "**(a)** — official rationale: **this information could be used to determine approval chains for invoice approvals which could then be used to create and approve fake invoices if the accounting system can be hacked.** (b) **the birth date should not be used in any employee information such as a password**. (c) **the company intranet should be behind the firewall**. (d) **this information is unlikely to be useful to a hacker**. Syllabus §6.1.1: **all information that is published … will be found and can/will be used in an attack**." } });

  B.push({ q: { n: 2, tag: OFF(34, "2 pts"), meta: "LO: AS-6.1.2 (K3) | Syllabus §6.1.2", correct: ["d"],
    stem: "You are responsible for security testing your company’s financial application. You have recently received email from a person who claims to have hacked into the system using Shodan and has discovered that you are running an out-of-date and vulnerable OS on one of your servers. You have checked and the hacker is correct. You have made sure the server has been updated. Your preliminary check has shown no trace of how the hacker got into your system. Should you be concerned?",
    opts: [
      "No, this is a “white hat” hacker and means no harm to your company",
      "No, you have fixed the vulnerability so the system is now safe",
      "Yes, your security testing is not sufficient and you need to re-run your tests to see what was missed",
      "Yes, since the hacker didn’t admit how he got in the system, he can still access it and may decide to exploit the vulnerability next time",
    ],
    why: "**(d)** — official rationale: **that is your biggest point of concern.** (a) **could be a dangerous assumption**. (b) **the hacker still has access to the system**. (c) **may be true, but re-running the same tests is not going to help with this issue**. Syllabus §6.1.2: Shodan finds e.g. **companies running a vulnerable version**; attackers **destroy evidence** to **lengthen the stay** and **continue the use of the system in the future**." } });

  B.push({ q: { n: 3, tag: OFF(35, "1 pt"), meta: "LO: AS-6.1.3 (K2) | Syllabus §6.1.3", correct: ["c"],
    stem: "Why is an attack from inside the organization particularly worrisome?",
    opts: [
      "The attacker is likely driven by curiosity and will be unrelenting",
      "The attacker is likely bored at work and will continue hacking the system for entertainment",
      "The attacker is already inside the firewall and is an authorized system user",
      "The attacker is likely to launch a DOS attack which will cripple the servers",
    ],
    why: "**(c)** — official rationale: **the biggest threat here is that the external protections are useless because the attacker is already inside the system.** (a) and (b) **are more likely to occur with an external attacker**. (d) **is not the most likely attack – generally internal users are after information they can sell or can use to embarrass the company**. Syllabus §6.1.3: insiders **compromise systems while being an authorized network user**." } });

  B.push({ q: { n: 4, tag: OFF(36, "3 pts"), meta: "LO: AS-6.1.4 (K4) | Syllabus §6.1.4", correct: ["c"],
    stem: "You are working in an organization where system administration access to the servers is highly restricted. Only three long-term and trusted employees know the root passwords. Recently though, there have been several odd occurrences. An unknown program, called “IKnowYourBirthday” was found to be running and was emailing birthday greetings to staff members. The birth dates were correct and the greetings were all signed “From your favorite server”. This program was killed and no one could figure out where it came from. A second problem occurred when the corporate phone list was hacked and all the phone numbers were changed to 867-5309 (apparently taken from the song by the same name). The correct list was restored and again no one could figure out how it had been done, although the new file had been created by “root”. You’ve just received a phone call from the lead system administrator telling you that the root password has been changed. It has been determined that the password was set to the lead system administrator’s dog’s name.\nFurther investigation has discovered that the problems started shortly after a series of virus–infected emails were detected. When the first one was found, safeguards were immediately put in place to stop any further spread of the virus, but now you are wondering if someone managed to get into the system via code that was introduced into the system by the virus.\nWhat should you do now as your next step of investigation?",
    opts: [
      "Look to see if the HR birthdate information was accessed from outside the system, and if so, trace the IP address",
      "Verify if the lead system administrator’s dog’s name is posted somewhere in social media",
      "Check the suspicious email that was sent and try to trace the IP address",
      "Check the personnel files of the other two system administrators to see if there is an indication that they are unhappy",
    ],
    why: "**(c)** — official rationale: **it’s the best place to start because it appears that this might have been where the problem originated. If C doesn’t find anything, then A and D would be the next likely paths to pursue since it’s possible this is an internal attack (D) or that the attacks are separate and the birthdate information might provide some information as to who has been near it. B might be pursued, but it would be easier to just ask the sys admin who would know the dog’s name.** Syllabus §6.1.4.2: **in the header of an email containing viruses, the IP address … may be shown**; use **X-Originating-IP** and **Whois**." } });

  B.push({ q: { n: 5, tag: OFF(37, "2 pts"), meta: "LO: AS-6.3.2 (K3) | Syllabus §6.3.2, §3.5", correct: ["d"],
    stem: "During testing of an upgrade, you have discovered that it is possible to create a man-in-the-middle attack that can change the amount charged to customers on your e-commerce web site. Your tester successfully changed the amount so that customers were all getting a 10% discount. What should you do first?",
    opts: [
      "The tester should be discouraged from creating these types of attacks as they are not realistic in the production environment",
      "Immediately inform management that the attack was created by the test team as part of testing, in case it is detected",
      "Work with the developers to implement checks such as SSL-trip to ensure certificates are valid and not self-signed",
      "Check production to see if the vulnerability is also in the production code",
    ],
    why: "**(d)** — official rationale: **the first priority is to see if the vulnerability is in the production code and get the problem fixed immediately. C should be the next step to ensure the developers are coding correctly and using all available tools to check for this type of issue. A is incorrect because this is exactly what security testers should be doing. B is incorrect because management permission should always be obtained prior to testing, not afterward.**" } });

  B.push({ h2: "Part B — 17 additional syllabus-derived questions" });

  B.push({ q: { n: 6, tag: DER, meta: "LO: AS-6.1.1 (K2) | Syllabus §6.1.1", correct: ["b"],
    stem: "According to the syllabus, what is the key phase in any attack?",
    opts: ["Exploitation", "The information gathering phase (reconnaissance)", "Covering tracks", "Privilege escalation"],
    why: "**(b)** — §6.1.1." } });
  B.push({ q: { n: 7, tag: DER, meta: "LO: AS-6.1.1 (K2) | Syllabus §6.1.1", correct: ["c"],
    stem: "How can changes in publicly published information affect security testing?",
    opts: [
      "They have no effect, because tests target code, not information",
      "They make all existing tests invalid immediately",
      "Security tests that were valid when created may not provide adequate coverage when published information changes",
      "They only affect penetration tests performed by external parties",
    ],
    why: "**(c)** — §6.1.1, the impact of human behaviour on **the effectiveness of security testing**." } });
  B.push({ q: { n: 8, tag: DER, meta: "LO: AS-6.1.1 (K2) | Syllabus §6.1.1", correct: ["a"],
    stem: "Which statement about how attackers operate is correct according to the syllabus?",
    opts: [
      "Attackers do not use a security policy or predefined procedures; they decide their strategy from the information they can collect and update their knowledge base for each attack",
      "Attackers always follow a fixed methodology, so tests can mirror it exactly",
      "Attackers only use information officially published by the organization",
      "Attackers never revisit known IP addresses",
    ],
    why: "**(a)** — §6.1.1. Employees’ social-network posts are also a source, and attackers **visit already known IP addresses**." } });
  B.push({ q: { n: 9, tag: DER, meta: "LO: AS-6.1.2 (K3) | Syllabus §6.1.2", correct: ["d"],
    stem: "Which of the following is an ACTIVE reconnaissance technique?",
    opts: ["A Whois lookup", "Searching the Google Hacking Database", "Browsing employees’ LinkedIn profiles", "A TCP/UDP scan with Nmap"],
    why: "**(d)**. Active techniques **touch the system**: pinging, **TCP/UDP scans (Nmap, Zenmap)**, OS detection, service fingerprinting. (a)–(c) are **passive** — no connection to the target." } });
  B.push({ q: { n: 10, tag: DER, meta: "LO: AS-6.1.2 (K3) | Syllabus §6.1.2", correct: ["b"],
    scenario: "A security tester wants to know what an attacker could learn about the company without touching its systems. The company’s job adverts list exact product versions, staff email addresses follow firstname.lastname@company, and a public server banner shows an old Apache version.",
    stem: "Which combination best identifies the exposure and a protective measure?",
    opts: [
      "Run Nmap against all servers; then disable the firewall to see what changes",
      "Use passive sources — search engines and the Google Hacking Database, Shodan for the vulnerable Apache version, social networks and Whois/DNS for names and email structure — then reduce published detail (versions in adverts, banners), patch the exposed server, and include what staff publish in awareness training",
      "Ask the attacker community on a forum what they know",
      "Wait for an incident and then trace the IP address",
    ],
    why: "**(b)**. Passive reconnaissance **without actually connecting** uses search engines, the **GHDB**, **Shodan** (e.g. **who runs a vulnerable Apache version**), social networks, **Whois, RIPE, DNS**. The K3 also asks to **apply measures to protect the environment**: reduce footprints, patch what is fingerprinted, and raise awareness." } });
  B.push({ q: { n: 11, tag: DER, meta: "LO: AS-6.1.2 (K3) | Syllabus §6.1.2", correct: ["c"],
    stem: "Why do attackers try to destroy evidence of a hack, according to the syllabus?",
    opts: [
      "Only to avoid prosecution",
      "To speed up the attack",
      "Because hacking is illegal, and also to lengthen the stay, continue using the system in future, and use the compromised system or botnet to attack others",
      "To reduce load on the compromised server",
    ],
    why: "**(c)** — §6.1.2. Tools include **NetCat, tunneling, altering log files, hide tools, rootkits and file streaming**." } });
  B.push({ q: { n: 12, tag: DER, meta: "LO: AS-6.1.3 (K2) | Syllabus §6.1.3", correct: ["a"],
    stem: "Which motivation does the syllabus describe as the most dangerous form, with the highest motivation?",
    opts: ["Revenge", "Curiosity", "Boredom", "Prestige"],
    why: "**(a)** — §6.1.3: **revenge where the latter is considered the most dangerous form (highest motivation)**. Revenge is also **the main insider motivation**." } });
  B.push({ q: { n: 13, tag: DER, meta: "LO: AS-6.1.3 (K2) | Syllabus §6.1.3", correct: ["b"],
    stem: "Who are “script kiddies”?",
    opts: [
      "Professional penetration testers",
      "Attackers at the lower end of the spectrum who simply execute the attacks others create",
      "Developers who write automation scripts",
      "Government-funded attack teams",
    ],
    why: "**(b)** — §6.1.3." } });
  B.push({ q: { n: 14, tag: DER, meta: "LO: AS-6.1.3 (K2) | Syllabus §6.1.3", correct: ["d"],
    stem: "What is hacktivism?",
    opts: [
      "Ethical hacking with written authorization",
      "Hacking performed by insiders for revenge",
      "Hacking out of boredom",
      "The attacking of systems on mainly political, but also economic or other demographic grounds",
    ],
    why: "**(d)** — §6.1.3." } });
  B.push({ q: { n: 15, tag: DER, meta: "LO: AS-6.1.4 (K4) | Syllabus §6.1.4", correct: ["c"],
    stem: "What are the three phases of the evidence recovering process in computer forensics?",
    opts: [
      "Detect, contain, eradicate",
      "Plan, execute, close",
      "Acquire and authenticate, analyze, report",
      "Identify, protect, recover",
    ],
    why: "**(c)** — §6.1.4." } });
  B.push({ q: { n: 16, tag: DER, meta: "LO: AS-6.1.4 (K4) | Syllabus §6.1.4.1", correct: ["a"],
    stem: "An IDS alerts on unusual outbound traffic from a database server. What is the correct order of the first actions?",
    opts: [
      "Snapshot/copy the system; authenticate the evidence and store a copy safely; analyze; eradicate the cause; recover",
      "Reboot the server; patch it; then look at the logs",
      "Restore from backup; analyze the backup; report",
      "Eradicate the cause; recover; then collect evidence",
    ],
    why: "**(a)** — the five steps of §6.1.4.1. Restoring or patching first **destroys evidence**; the syllabus says the system is restored **after evidence is collected and stored**." } });
  B.push({ q: { n: 17, tag: DER, meta: "LO: AS-6.1.4 (K4) | Syllabus §6.1.4.2", correct: ["b"],
    scenario: "A phishing email with a malicious attachment was sent from a web-mail account. The email header shows only the web-mail provider’s IP address. Separately, a DDoS against the company used thousands of home PCs.",
    stem: "Which investigative approach best follows the syllabus?",
    opts: [
      "For the email, give up because web-mail hides the sender; for the DDoS, trace every home PC owner and prosecute them",
      "For the email, look for the X-Originating-IP value and use Whois to contact the ISP; for the DDoS, recognize that botnet investigation is difficult — investigating clients may lead to the server, but access to the server is needed and owners may not know their machines are bots",
      "For both, use Netstat on the company firewall only",
      "For both, assume the attacker is an insider",
    ],
    why: "**(b)** — §6.1.4.2: for web-mail **look for the X-Originating-IP value**, then **Whois**; **investigating attacks that used a botnet is difficult** and **owners of these servers may not be aware**." } });
  B.push({ q: { n: 18, tag: DER, meta: "LO: AS-6.1.4 (K4) | Syllabus §6.1.4", correct: ["d"],
    scenario: "After a contractor’s access was revoked following a dispute, an internal file share was encrypted and customer pricing appeared on a competitor’s site. Logs show the actions came from a still-active service account that the contractor had created during the project.",
    stem: "What are the most likely source and motivation?",
    opts: [
      "An external script kiddie motivated by curiosity",
      "A hacktivist group motivated by politics",
      "A random botnet infection",
      "An insider (former contractor using an account they created) motivated by revenge and possibly economic gain from selling information",
    ],
    why: "**(d)**. Many attacks **come from inside**, **mostly revenge**, with **increasing economic espionage or theft**; the **unexplained account** is one of the syllabus’s incident symptoms." } });
  B.push({ q: { n: 19, tag: DER, meta: "LO: AS-6.2.1 (K2) | Syllabus §6.2", correct: ["c"],
    stem: "An unauthorized person follows an employee through a badge-controlled door. What is this called?",
    opts: ["Shoulder surfing", "Eavesdropping", "Tailgating or piggybacking", "Spear phishing"],
    why: "**(c)** — §6.2." } });
  B.push({ q: { n: 20, tag: DER, meta: "LO: AS-6.2.1 (K2) | Syllabus §6.2", correct: ["a"],
    stem: "What does the syllabus identify as the main defense against social engineering?",
    opts: [
      "Education and awareness at all levels in the organization",
      "A stronger firewall",
      "Encryption of all email",
      "A single, well-written social engineering policy",
    ],
    why: "**(a)**. **There is no single defense**; damage can be controlled by **least privilege, separation of duties, rotation of duties**, **but the main defense is education and awareness at all levels**." } });
  B.push({ q: { n: 21, tag: DER, meta: "LO: AS-6.3.1 (K2) | Syllabus §6.3.1", correct: ["b"],
    stem: "Why is regular security awareness training needed even when previously identified risks never materialized?",
    opts: [
      "Because regulators require annual training",
      "Because risks that did not become issues are easily forgotten and safeguards withdrawn, increasing opportunities for hacking and social engineering, while the threat model keeps changing",
      "Because training replaces technical controls",
      "Because only new employees need training",
    ],
    why: "**(b)** — §6.3.1." } });
  B.push({ q: { n: 22, tag: DER, meta: "LO: AS-6.3.2 (K3) | Syllabus §6.3.2", correct: ["c"],
    scenario: "A penetration test succeeded by phoning the helpdesk, posing as a travelling manager, and having a password reset without identity verification. The test report is complete and the vulnerability has been fixed.",
    stem: "Which action best uses this outcome to increase security awareness?",
    opts: [
      "Keep the result secret permanently and send a generic reminder about passwords",
      "Discipline the helpdesk agent publicly",
      "Build an awareness case study for helpdesk and general staff answering: how it was done; business consequences; costs to investigate; costs to repair; how it could have been avoided; which changes will be implemented",
      "Remove telephone support",
    ],
    why: "**(c)** — §6.3.2: training should contain **real case studies — discovered during security testing or in actual incidents** — and answer the **six questions**. (Results stay confidential while unresolved — Chapter 7 — but this one is fixed.)" } });

  B.push({ h2: "Most Important Questions From This Chapter" });
  B.push({ lead: "Ranking rationale: guaranteed **AS-6.1.2 (K3), 6.1.4 (K4), 6.3.2 (K3)** — 7 points; two K2 from 6.1.1/6.1.3/6.2.1/6.3.1." });
  B.push({ table: { head: ["Rank", "Topic / question focus", "LO", "Why it matters"], widths: [0.9, 6.2, 1.9, 5.0], rows: [
    ["1", "Attack scenario analysis and forensics — Q4, Q15–Q18", "AS-6.1.4", "**Guaranteed 3 points.** Follow the timeline."],
    ["2", "Reconnaissance and protective measures — Q2, Q9–Q11", "AS-6.1.2", "**Guaranteed 2 points.** Attacker may still be in."],
    ["3", "Test outcomes → awareness actions — Q5, Q22", "AS-6.3.2", "**Guaranteed 2 points.** Production first; case studies."],
    ["4", "Motivations and sources — Q3, Q12–Q14", "AS-6.1.3", "K2 pool; insider = inside the firewall."],
    ["5", "Published information risk — Q1, Q6–Q8", "AS-6.1.1", "K2 pool; process/authority leaks."],
    ["6", "Social engineering and awareness — Q19–Q21", "AS-6.2.1 / 6.3.1", "K2 pool."],
  ] } });

  return B;
};
