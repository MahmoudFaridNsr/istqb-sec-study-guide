// CT-SEC Chapter 6 — Sections 5 to 7
module.exports = function () {
  const B = [];

  // ================= SECTION 5 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 5 — Exam Tricks" });

  B.push({ h2: "5.1 Frequently tested topics (evidence-based)" });
  B.push({ table: { head: ["LO", "K", "Pts", "Sample #", "Format used officially"], widths: [2.0, 0.8, 0.8, 1.4, 9.0], rows: [
    ["AS-6.1.1", "K2", "1", "#33", "Which published item is a **potential security risk**?"],
    ["AS-6.1.2", "**K3**", "2", "#34", "Shodan hacker, fixed server, no trace → **should you be concerned?**"],
    ["AS-6.1.3", "K2", "1", "#35", "Why is an **inside** attack particularly worrisome?"],
    ["AS-6.1.4", "**K4**", "**3**", "#36", "Long incident story → **next step of investigation**"],
    ["AS-6.3.2", "**K3**", "2", "#37", "MITM found in an upgrade → **what first?**"],
    ["**Chapter 6 total**", "—", "**9**", "**#33–#37**", "**5.1 points per teaching hour**"],
  ] } });
  B.push({ box: { title: "The arithmetic", body: "Chapter 6 gives **9 points for 105 minutes** — the same rate as Chapters 2 and 3. Its K4 is a **story question**: long to read, quick to answer once you look for the **first event on the timeline**." } });

  B.push({ h2: "5.2 Common distractors observed" });
  B.push({ ul: [
    "**Assuming good intent** — “white hat, means no harm”.",
    "**Assuming a patch ends a breach** — the attacker may still have access.",
    "**Re-running the same tests** — won’t reveal an unknown entry point.",
    "**Curiosity and boredom for insiders** — those fit external attackers; insiders are mostly **revenge**, increasingly **theft/espionage**.",
    "**Interesting but secondary leads** in a forensic story (dog’s name on social media, unhappy colleagues) ahead of **the origin event**.",
    "**Discouraging the tester** or **telling management after the fact** — testers should attack, and permission comes **before** testing.",
  ] });

  B.push({ h2: "5.3 Keyword recognition (map words → answers)" });
  B.push({ table: { head: ["If the stem says…", "Think…"], widths: [6.0, 8.0], rows: [
    ["“published”, “web site”, “social network”", "**Reconnaissance material** — will be found"],
    ["“org chart”, “approval chain”", "**Fraud enabler** (fake invoices)"],
    ["“Shodan”, “Google hacking”, “Whois”", "**Passive** reconnaissance"],
    ["“Nmap”, “ping”, “fingerprint”", "**Active** reconnaissance"],
    ["“no trace of how they got in”", "**They can still get in**"],
    ["“inside the firewall”, “authorized user”", "**Insider** — external defenses useless"],
    ["“script kiddie”", "**Executes others’ attacks**"],
    ["“political grounds”", "**Hacktivism**"],
    ["“problems started after virus emails”", "**Trace the email / IP** first"],
    ["“X-Originating-IP”", "Web-mail sender tracing"],
    ["“botnet”", "**Very hard to trace**"],
    ["“follow into restricted area”", "**Tailgating / piggybacking**"],
    ["“case study”, “how did we do it?”", "**Awareness training** (six questions)"],
  ] } });

  B.push({ h2: "5.4 Typical traps" });
  B.push({ ul: [
    "**Many** attacks come from insiders; external hackers are **the minority**.",
    "**Revenge** appears twice: main insider motive and **most dangerous** external motive.",
    "**Restore after evidence**, not before.",
    "**Eradication** (remove the cause) comes **before recovery** (back to normal).",
    "During an **active** attack, gather information **before locking the attacker out**.",
    "Any Internet attack **can** be traced — **at a cost** of time, money and effort.",
  ] });

  B.push({ h2: "5.5 How to eliminate wrong answers" });
  B.push({ ol: [
    "Strike options built on **trust in the attacker**.",
    "Strike options that **close the case** without knowing the entry point.",
    "In investigations, strike options that skip the **earliest evidence**.",
    "In awareness questions, strike options that **punish** rather than **educate**, or that are **generic** rather than case-based.",
  ] });

  B.push({ h2: "5.6 Scenario-solving shortcuts" });
  B.push({ table: { head: ["Scenario shape", "Shortcut"], widths: [5.0, 9.0], rows: [
    ["What is risky to publish?", "Information revealing **process, authority or technology**"],
    ["Attacker disclosed one hole", "Assume **persistent access**; find the entry point"],
    ["Incident with a timeline", "**Start at the first event**; then external origin; then insider"],
    ["Who did it?", "Authorized-account traces + grievance → **insider, revenge**"],
    ["Test found a serious hole in an upgrade", "**Production first**, then fix and developer practices"],
    ["Test outcome to share", "**Case study with six questions**"],
  ] } });

  B.push({ h2: "5.7 Common candidate mistakes" });
  B.push({ ul: [
    "Over-reading the Q36 story — the trick is **when** the problems started.",
    "Confusing **passive** and **active** reconnaissance — passive never touches the target.",
    "Forgetting **pop-up screens** and **chat** as computer-based social engineering.",
  ] });

  B.push({ h2: "5.8 Mnemonics that carry the whole chapter" });
  B.push({ table: { head: ["Mnemonic", "Expands to"], widths: [3.6, 10.4], rows: [
    ["**“If? No — When.”**", "Published information will be found"],
    ["**A-A-R**", "Forensics: **A**cquire & authenticate, **A**nalyze, **R**eport"],
    ["**S-C-A-E-R**", "Steps: **S**napshot, **C**opy (authenticated), **A**nalyze, **E**radicate, **R**ecover"],
    ["**C-P-F-C-B-R**", "External motives: **C**uriosity, **P**restige, **F**ame, **C**hallenge, **B**oredom, **R**evenge"],
    ["**T-E-S-T** (in person)", "**T**ailgating, **E**avesdropping, **S**houlder surfing, **T**elephone"],
    ["**How · Biz · Investigate · Repair · Avoid · Change**", "Six awareness case-study questions"],
  ] } });

  B.push({ h2: "5.9 Chapter 6 mind map" });
  B.push({ table: { head: ["Branch", "Leaves"], widths: [3.4, 10.6], rows: [
    ["**Behaviour**", "Largest threat, weakest defense · reconnaissance key · published info found · tests lose coverage"],
    ["**Attacker mentality**", "Passive (search, Shodan, GHDB, social, Whois, RIPE, DNS) · active (ping, Nmap, OS detection, fingerprinting) · hide evidence"],
    ["**Motivation**", "Insiders (revenge, theft) · externals (curiosity…revenge) · script kiddies → professionals · hacktivism"],
    ["**Forensics**", "Incident (RFC 2828) · acquire/authenticate, analyze, report · symptoms · five steps · tracing tools · proxies, Tor, botnets"],
    ["**Social engineering**", "Trust and helpfulness · in person · computer-based · no single defense · education and awareness"],
    ["**Awareness**", "Changing threat model · forgotten risks · user groups · real case studies · six questions"],
  ] } });

  // ================= SECTION 6 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 6 — Flashcards" });
  B.push({ lead: "Cover the back of each card and recall it from the front. All cards are drawn from Chapter 6 of the CTAL-SEC 2016 syllabus. Target: three clean passes before exam day." });
  B.push({ flash: [
    ["The human in information security is…?", "**Both the largest threat and the weakest point in defense** — and the biggest enabler of attacks."],
    ["Key phase in any attack?", "**Information gathering — reconnaissance.**"],
    ["Will published information be found?", "**Yes — not “if” but “when”.**"],
    ["Do attackers follow a policy?", "**No** — they choose strategy from collected information and update their knowledge base each attack."],
    ["Effect of changing published information on testing?", "Tests valid at creation **may no longer give adequate coverage**."],
    ["Name five passive reconnaissance sources.", "**Google/search engines (Earth, Street View) · Shodan · social networks · Google Hacking Database · Whois · RIPE · DNS searches.**"],
    ["Name four active reconnaissance methods and tools.", "**Pinging (Fping, Hping) · TCP/UDP scans (Nmap, Zenmap) · OS detection (Nmap, Xprobe2) · service fingerprinting (Nmap).**"],
    ["What does Shodan find, per the syllabus example?", "**Which companies in an area run an Apache server with a vulnerable version.**"],
    ["Why do attackers destroy evidence?", "Hacking is **illegal**; also to **lengthen the stay**, **reuse** the system, and **attack others** from it."],
    ["Evidence-hiding methods?", "**NetCat · tunneling · altering logs · hide tools · rootkits · file streaming.**"],
    ["Where do many attacks come from?", "**From inside the organization** — malicious authorized users."],
    ["Main insider motivation and trend?", "**Revenge**; increasing **economic espionage or theft**."],
    ["External motivations?", "**Curiosity · prestige · notoriety/fame · challenge · boredom · revenge.**"],
    ["Most dangerous motivation?", "**Revenge (highest motivation).**"],
    ["Script kiddies?", "**Lower end — execute attacks others create.**"],
    ["Upper end of the attacker spectrum?", "**Professional (governmental, hacktivism) organizations and individuals** with labs and proxy networks."],
    ["Define hacktivism.", "Attacking systems on **mainly political**, also economic or demographic, grounds."],
    ["Why profile attackers?", "Helps **implement protection** and gives **a guideline for the security test strategy**."],
    ["Define a security incident (RFC 2828).", "**A security-relevant system event in which the system’s security policy is disobeyed or otherwise breached.**"],
    ["What is computer forensics?", "Finding **digital evidence** of what happened and who was responsible."],
    ["Three phases of evidence recovery?", "**Acquire and authenticate · analyze · report.**"],
    ["Six incident symptoms?", "**Suspicious log entries · unexplained user accounts · modified files/folders · unusual services · unusual behavior · unsuccessful login attempts.**"],
    ["Five response steps?", "**Snapshot/copy · authenticate and store a copy · analyze · eradicate · recover.**"],
    ["During an active attack…?", "**Gather information about the attacker before locking them out.**"],
    ["Can every Internet attack be traced?", "**Yes, to the originating IP — a matter of time, money and effort**; proxies, Tor and local laws slow it."],
    ["Tracing tools?", "**Netstat · Tracert/traceroute · IP Tracer · Whois.**"],
    ["Web-mail sender IP?", "Look for **X-Originating-IP**."],
    ["Why are botnet attacks hard to investigate?", "No online link needed between attacker and bots; need **access to the server**; owners **may not know**."],
    ["Define social engineering.", "**The art of exploiting the human using its general behavior as an attack vector.**"],
    ["Four in-person techniques?", "**Tailgating/piggybacking · eavesdropping · shoulder surfing · telephone impersonation.**"],
    ["Five computer-based techniques?", "**Malware emails · chat/IM · pop-up screens · spam · phishing / spear phishing.**"],
    ["Defense against social engineering?", "**No single defense**; least privilege, separation and rotation of duties; **main defense = education and awareness**."],
    ["Why is awareness needed continuously?", "Threat model **changes**; forgotten risks lead to **withdrawn safeguards**."],
    ["Awareness training user groups?", "**Developers · operations · management · general staff.**"],
    ["Six case-study questions?", "**How did they (we) do it? · business consequences? · costs to investigate? · costs to repair? · how avoidable? · which changes?**"],
  ] });

  // ================= SECTION 7 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 7 — Revision Notes" });
  B.push({ h2: "7.1 One-page chapter summary" });
  B.push({ p: "People are the largest threat and the weakest defense. Attacks begin with **reconnaissance**: everything published will be found, by passive means (search engines, Shodan, GHDB, social networks, Whois, RIPE, DNS) or active ones (ping, Nmap scans, OS detection, service fingerprinting). Attackers follow no policy and hide their tracks to stay longer. Many attacks are internal (revenge, theft); external ones are fewer and driven by curiosity through to revenge; attackers range from script kiddies to state-level professionals." });
  B.push({ p: "**Forensics** acquires and authenticates evidence, analyzes it and reports: snapshot, copy, analyze, eradicate, recover; trace via logs, connections, Netstat, Tracert, X-Originating-IP and Whois — hard through proxies, Tor and botnets. **Social engineering** exploits trust in person and by computer; the main defense is **education and awareness**, refreshed as the threat model changes, using **real case studies** answered with six questions." });
  B.push({ h2: "7.2 Key definitions to memorize" });
  B.push({ table: { head: ["Term", "Definition"], widths: [3.4, 10.6], rows: [
    ["Reconnaissance", "Information gathering / footprinting; the key phase of any attack"],
    ["Security incident", "System event where the security policy is disobeyed or breached"],
    ["Computer forensics", "Finding digital evidence of what happened and who was responsible"],
    ["Social engineering", "Exploiting human behaviour as an attack vector"],
    ["Script kiddie", "Attacker who executes attacks created by others"],
    ["Hacktivism", "Attacks on political (also economic, demographic) grounds"],
  ] } });
  B.push({ h2: "7.3 High-priority concepts (study first)" });
  B.push({ ol: [
    "Forensic phases, steps, tracing (**AS-6.1.4**, 3 pts).",
    "Passive vs active reconnaissance and protective measures (**AS-6.1.2**, 2 pts).",
    "Awareness case studies; production-first on test outcomes (**AS-6.3.2**, 2 pts).",
    "Motivations and sources; social engineering techniques (K2 pool).",
  ] });
  B.push({ h2: "7.4 Last-minute revision sheet" });
  B.push({ box: { kind: "ok", title: "If you read nothing else", body: [
    "Published info will be found. Org charts → fake-invoice approval chains.",
    "Passive: Google, Shodan, GHDB, LinkedIn/Facebook, Whois, RIPE, DNS. Active: ping, Nmap, Xprobe2, fingerprinting.",
    "Hacker told you one hole and hid the entry → **they can still get in**.",
    "Insider = **inside the firewall, authorized**. Motive: revenge (also theft).",
    "Forensics: acquire & authenticate → analyze → report. Snapshot → copy → analyze → eradicate → recover.",
    "Incident after virus emails → **trace the email/IP first**.",
    "Social engineering: tailgating, eavesdropping, shoulder surfing, phone; malware mail, chat, pop-ups, spam, (spear) phishing. Main defense: **awareness**.",
    "Awareness: case studies — how, consequences, investigate cost, repair cost, avoidance, changes.",
  ] } });
  B.push({ h2: "7.5 Memorization checklist" });
  B.push({ table: { head: ["✓", "I can…"], widths: [0.8, 13.2], rows: [
    ["☐", "explain why reconnaissance is the key phase and how published info affects testing"],
    ["☐", "list five passive and four active reconnaissance tools/methods"],
    ["☐", "contrast insider and external motivations and name the most dangerous"],
    ["☐", "give the three forensic phases, six symptoms and five steps"],
    ["☐", "explain how to trace email and why botnets are hard"],
    ["☐", "list nine social engineering techniques and the main defense"],
    ["☐", "give the six awareness case-study questions"],
  ] } });
  B.push({ h2: "7.6 Exam-day quick review" });
  B.push({ ul: [
    "**Trust no attacker; assume persistence.**",
    "**First event on the timeline = first place to investigate.**",
    "**Insiders are already past the firewall.**",
  ] });

  return B;
};
