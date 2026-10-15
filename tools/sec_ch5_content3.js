// CT-SEC Chapter 5 — Sections 5 and 6
module.exports = function () {
  const B = [];

  // ================= SECTION 5 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 5 — Exam Tricks" });

  B.push({ h2: "5.1 Frequently tested topics (evidence-based)" });
  B.push({ table: { head: ["Mechanism", "K", "Pts", "Sample #", "Format used officially"], widths: [3.0, 0.8, 0.8, 1.4, 8.0], rows: [
    ["Hardening", "**K3**", "2", "#25", "Procedure to ensure hardening works → **monitor security reports and metrics**"],
    ["AuthN/AuthZ", "K2", "1", "#26", "Key attribute of authentication → **user is legitimate**"],
    ["Encryption", "**K3**", "2", "#27", "Gain confidence → **symmetric modes test**"],
    ["Firewall / zones", "K2", "1", "#28", "Relationship → **sub-network = zone; firewall = traffic-monitoring software**"],
    ["IDS", "**K3**", "2", "#29", "Most effective test → **malicious traffic to add intrusive specifications**"],
    ["Anti-malware", "K2", "1", "#30", "Main disadvantage → **only known malware**"],
    ["Obfuscation", "**K3**", "2", "#31", "Verify masking → **brute force**"],
    ["Training", "K2", "1", "#32", "Weakest link → **human behavior**"],
    ["**Chapter 5 total**", "—", "**12**", "**#25–#32**", "**15% of the points from the longest chapter**"],
  ] } });
  B.push({ box: { title: "The arithmetic", body: "Chapter 5 takes **240 of 1,110 teaching minutes (22%)** but returns **12 of 80 points (15%)** — **3.0 points per hour**, tied lowest with Chapter 9. With **16 objectives for 8 questions**, roughly **half of what you learn here will not be examined on any given paper**. Study the **concept + weakness + test** triple for each mechanism (Table 3.1) and stop there." } });

  B.push({ h2: "5.2 Common distractors observed" });
  B.push({ ul: [
    "**Authorization described as authentication** (profile, rights, limited parts of the system).",
    "**Shared credentials** — each individual should have unique credentials.",
    "**“Random algorithms”** for randomness — the default random() is easy to crack.",
    "**Key-size numbers** not from the syllabus (256 bits) — the syllabus figure is **RSA ≥ 2048 bits (as of 2015)**.",
    "**The zone as the blocker** — the **firewall** blocks; zones define authorized flows.",
    "**Known-scenario testing of an IDS** — useful, but less effective than **malicious traffic that adds new intrusive specifications**.",
    "**Manual inspection** of masked data — not feasible at volume; **brute force** is the test.",
    "**Hiring a known hacker** — risk they don’t tell you what they found.",
    "**Equilibrium** of hardening across components — critical areas may warrant more.",
  ] });

  B.push({ h2: "5.3 Keyword recognition (map words → answers)" });
  B.push({ table: { head: ["If the stem says…", "Think…"], widths: [6.0, 8.0], rows: [
    ["“reduce attack surface”", "**Hardening**"],
    ["“default passwords”, “unnecessary services and ports”", "**Hardening audit**"],
    ["“who is the user / is it really them”", "**Authentication**"],
    ["“rights to do an action”, “level of access”", "**Authorization**"],
    ["“123456”, “pet name”", "**Brute force / dictionary**"],
    ["“../../”, “/admin”", "**Unauthorized URI / URL**"],
    ["“modes”, “key size”, “self-signed”", "**Encryption design** tests"],
    ["“random()”, “timing”, “power”", "**Encryption construction** tests"],
    ["“cipher order”, “downgrade”", "**Encryption configuration** test"],
    ["“DMZ”, “trust level”", "**Network zones**"],
    ["“port scan”, “malformed packets”, “fragmentation”", "**Firewall** tests"],
    ["“blacklist”, “signature”", "**Negative** model"],
    ["“white list”, “behaviour”, “regular expression”", "**Positive** model"],
    ["“EICAR”", "**Anti-malware** functional test"],
    ["“quarantined OS files”", "Test anti-malware on a **representative platform** first"],
    ["“masking”, “anonymization”", "**Obfuscation**"],
    ["“decompiler”, “unXOR”", "**Code obfuscation** tests"],
    ["“sticky notes”, “fake support call”", "**Training effectiveness** tests"],
  ] } });

  B.push({ h2: "5.4 Typical traps" });
  B.push({ ul: [
    "**IDS vs firewall.** Firewall **stops** (looks outward); IDS **alerts** (analyzes suspicious intrusions).",
    "**Negative vs positive** — the names are counter-intuitive: **negative = blacklist = signatures**.",
    "**False negative** = an alert that **should have been reported but wasn’t**.",
    "**Phishing and pharming** are listed as **anti-malware detection targets**.",
    "**Obfuscation** is used **by attackers** too.",
    "**Code cannot fully protect itself against de-obfuscation**, because debugging can always be used.",
    "**Password audit tools** carry a risk — **passwords may be viewable to the tester**.",
  ] });

  B.push({ h2: "5.5 How to eliminate wrong answers" });
  B.push({ ol: [
    "Identify the **mechanism** in the stem, then the **weakness** the syllabus names for it.",
    "Strike options that **don’t test** the mechanism (they configure, buy, or remove it).",
    "Strike options that **reduce** coverage of the weakness (remove WEP, disable heuristics).",
    "Strike options that introduce **new risk** (hire a hacker, deploy without a pilot).",
    "Of the remainder, choose the one using **syllabus test vocabulary**.",
  ] });

  B.push({ h2: "5.6 Scenario-solving shortcuts" });
  B.push({ table: { head: ["Scenario shape", "Shortcut"], widths: [5.0, 9.0], rows: [
    ["“Is hardening working?”", "Audit configs + scanner + metrics; also check **over-restriction**"],
    ["“Is login safe?”", "Brute force/dictionary · SQLi · URL/URI · unpatched exploit"],
    ["“Is encryption strong?”", "Design (modes, keys, certs, replay) · construction (code review, fuzzing, timing, power) · configuration (TLS, cipher order) · ageing"],
    ["“Is the firewall effective?”", "Port scan → malformed/fuzzed packets → fragmentation; WAF → encoded payloads"],
    ["“Is the IDS effective?”", "Evasion for signatures; **malicious traffic to extend specifications** for behaviour"],
    ["“Is anti-malware effective?”", "EICAR; representative-platform pilot"],
    ["“Is masking effective?”", "Brute force/dictionary; decompilers for code"],
    ["“Did training work?”", "Social engineering call · desk sweep · password audit · tester SQLi · physical access"],
  ] } });

  B.push({ h2: "5.7 Common candidate mistakes" });
  B.push({ ul: [
    "Spending a week here. **Three evenings is enough** for 12 points.",
    "Bringing outside crypto knowledge into answers — answer **from the syllabus’s lists**.",
    "Forgetting that hardening tests include checking it is **not too restrictive**.",
    "Assuming the official answer key is always internally consistent — see the Q27 and Q30 notes.",
  ] });

  B.push({ h2: "5.8 Mnemonics that carry the whole chapter" });
  B.push({ table: { head: ["Mnemonic", "Expands to"], widths: [3.6, 10.4], rows: [
    ["**“Hard Auth Enc Fire IDS Mal Obf Train”** (“**H**ow **A**re **E**very **F**ortress’s **I**nner **M**oats **O**ften **T**ested?”)", "The eight mechanisms in syllabus order"],
    ["**D-C-C + Age**", "Encryption tests: **D**esign, **C**onstruction, **C**onfiguration, plus ageing"],
    ["**P-M-F** (“Please Mind Fragments”)", "Firewall tests: **P**ort scan, **M**alformed packets/fuzzing, **F**ragmentation"],
    ["**“Negative = Naughty list”**", "Negative model = blacklist of known attacks"],
    ["**“Who? Really? May I?”**", "Login (who) · password (really) · authorization (may I)"],
    ["**“Known only”**", "Anti-malware’s main disadvantage"],
  ] } });

  B.push({ h2: "5.9 Chapter 5 mind map" });
  B.push({ table: { head: ["Branch", "Leaves"], widths: [3.4, 10.6], rows: [
    ["**Hardening**", "Design/construction/configuration · remove, patch, configure, remote logs · mechanisms to use · balance · audits, scanner, static analysis"],
    ["**AuthN/AuthZ**", "ID + token · OTP, certificates, SSO · rights and levels · brute force, SQLi, URI/URL, exploit"],
    ["**Encryption**", "Plain/cypher · at rest, in transit · symmetric/asymmetric · hashing, salting · DCC + ageing tests"],
    ["**Firewall**", "Host/network · zones of trust · filters · WAF · port scan, malformed, fragmentation, encoding"],
    ["**IDS**", "OSI layers · negative/positive · alerts vs blocks · evasion · false negatives · poisoning test"],
    ["**Anti-malware**", "Signatures + heuristics · phishing, pharming · evasion techniques · EICAR · pilot"],
    ["**Obfuscation**", "Masking, anonymization · techniques · encryption caveat · key control · brute force, decompilers"],
    ["**Training**", "Humans weakest · lifecycle-wide · social engineering, insiders · four effectiveness tests"],
  ] } });

  // ================= SECTION 6 =================
  B.push({ pagebreak: true });
  B.push({ h1: "Section 6 — Revision Notes" });
  B.push({ h2: "6.1 One-page chapter summary" });
  B.push({ p: "Eight layers, none sufficient alone. **Hardening** shrinks the attack surface (remove, patch, configure, log remotely) — test with configuration audits, scanners and static analysis, and check it is not over-restrictive. **Authentication** asks who and whether truly; **authorization** asks what they may do — test with brute force, injection, URL tampering and unpatched exploits. **Encryption** turns plain into cypher text with algorithms and secrets — test design, construction, configuration and ageing." });
  B.push({ p: "**Firewalls** filter between zones of trust; **WAFs** add users and data patterns — test with port scans, malformed packets and fragmentation. **IDS** alert on policy violations via negative (signature) or positive (behaviour) models — test with evasion encodings and with malicious traffic to extend the behavioural specification. **Anti-malware** detects only what it knows — test with EICAR and a representative pilot. **Obfuscation** hides data and code — test with brute force and decompilers. **Training** addresses the weakest link — test with social engineering, desk sweeps and password audits." });
  B.push({ h2: "6.2 Key definitions to memorize" });
  B.push({ table: { head: ["Term", "Definition"], widths: [3.4, 10.6], rows: [
    ["System hardening", "Step-by-step attack-surface reduction by policy and layers of protection"],
    ["Authentication", "Verifying user identifier and token — who, and really who"],
    ["Authorization", "Rights of the authenticated user; level of access"],
    ["Encryption", "Plain → cypher text with algorithm and secrets"],
    ["Firewall", "Restricts access between a protected network and others"],
    ["Network zone", "Sub-network with a defined level of trust"],
    ["IDS", "Monitors OSI layers to detect policy violations and alert"],
    ["Data obfuscation", "Making data/code non-understandable for humans"],
  ] } });
  B.push({ h2: "6.3 High-priority concepts (study first)" });
  B.push({ ol: [
    "Table 3.1 — mechanism → weakness → test (all four K3s).",
    "Authentication vs authorization; firewall vs zone vs IDS (common K2s).",
    "Negative vs positive IDS models.",
    "Encryption test families.",
    "Humans weakest link; anti-malware only knows the known.",
  ] });
  B.push({ h2: "6.4 Last-minute revision sheet" });
  B.push({ box: { kind: "ok", title: "If you read nothing else", body: [
    "Hardening → audit defaults/services/ports/versions; scanner; static analysis; not too restrictive.",
    "AuthN = legitimate user. AuthZ = rights. Tests: brute force, SQLi, ../../ and /admin, unpatched exploit.",
    "Encryption → **symmetric modes**, RSA ≥ 2048, certificates, replay; no random(); timing/power; TLS cipher order; ageing.",
    "Zone = sub-network with trust level; firewall blocks; WAF filters users and patterns. Tests: port scan, malformed/fuzz, fragmentation.",
    "IDS negative = signature = blacklist; positive = behaviour = white list. Test: evasion; **malicious traffic adds intrusive specs**.",
    "Anti-malware: **known only**; EICAR; pilot on representative platform.",
    "Obfuscation: brute force/dictionary; decompilers; key control.",
    "Training: **humans weakest**; fake support call, sticky notes, password audit.",
  ] } });
  B.push({ h2: "6.5 Memorization checklist" });
  B.push({ table: { head: ["✓", "I can…"], widths: [0.8, 13.2], rows: [
    ["☐", "explain hardening and list five removals and three audits"],
    ["☐", "separate authentication from authorization and list four tests"],
    ["☐", "list encryption tests under design, construction, configuration and ageing"],
    ["☐", "describe zones, firewall filters, WAF filters and three firewall tests"],
    ["☐", "contrast negative and positive IDS models and name their tests"],
    ["☐", "state anti-malware’s weakness, EICAR, and the pilot rule"],
    ["☐", "list obfuscation techniques and tests"],
    ["☐", "give three training-effectiveness tests"],
  ] } });
  B.push({ h2: "6.6 Exam-day quick review" });
  B.push({ ul: [
    "Expect **one question per mechanism**, alternating K2 and K3.",
    "**Find the weakness; the test exploits it.**",
    "Answer encryption key-size questions **from the syllabus (2048-bit RSA)**.",
  ] });

  return B;
};
