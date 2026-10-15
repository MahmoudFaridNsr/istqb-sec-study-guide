// CT-SEC Chapter 8 — Sections 5 and 6
module.exports = function () {
  const B = [];

  B.push({ pagebreak: true });
  B.push({ h1: "Section 5 — Exam Tricks" });
  B.push({ h2: "5.1 Frequently tested topics (evidence-based)" });
  B.push({ table: { head: ["LO", "K", "Pts", "Sample #", "Format used officially"], widths: [2.0, 0.8, 0.8, 1.4, 9.0], rows: [
    ["AS-8.1.1", "K2", "1", "#41", "Dynamic security tools vs general → **probe the system**"],
    ["AS-8.2.1", "**K4**", "**3**", "#42", "Firewall done + port scan; DoS worry → **malformed packets / fuzzing**"],
    ["AS-8.2.2", "K2", "1", "#43", "GNU GPL tool maintenance → **your team’s capability**"],
    ["**Chapter 8 total**", "—", "**5**", "**#41–#43**", "**5.5 points per teaching hour — the best in the syllabus**"],
  ] } });
  B.push({ box: { title: "The arithmetic", body: "**5 points for 55 minutes.** Learn this chapter early: it is the cheapest per hour, and its K4 reuses Chapter 5 firewall tests." } });

  B.push({ h2: "5.2 Common distractors observed" });
  B.push({ ul: [
    "**Vendor attributes for an open source tool** — there is no vendor.",
    "**Licence cost** for a GPL tool — it is free (customization costs aside).",
    "**Memory leaks** as a security-tool strength — that is general dynamic analysis.",
    "**Failover, performance or encryption speed** when the need is to **detect and reject** malformed traffic.",
    "**Component hardening** when the object is the **firewall**.",
  ] });

  B.push({ h2: "5.3 Keyword recognition (map words → answers)" });
  B.push({ table: { head: ["If the stem says…", "Think…"], widths: [6.0, 8.0], rows: [
    ["“GNU”, “GPL”, “open source”", "**No vendor — team capacity**"],
    ["“regulated”, “certified tools”", "Open source **may be forbidden**"],
    ["“dynamic security tool”", "**Probes the system**"],
    ["“early in the lifecycle”", "**Static analysis**"],
    ["“John the Ripper”", "Hacker tool → **legitimate weak-password detection**"],
    ["“Nessus”, “Metasploit”", "Early **open source frameworks** with GUIs"],
    ["“update frequency”", "**Vendor evaluation** — stay current with threats"],
    ["“fixed / desk / floating / token”", "**Licence types**"],
    ["“go commercial”, “go away”", "Open source **future direction** risk"],
  ] } });

  B.push({ h2: "5.4 Typical traps" });
  B.push({ ul: [
    "A **dynamic** security tool can run a **static** scan — static vs dynamic depends on whether the object is **operational**.",
    "**Commercial security tools are few** compared with open source.",
    "Testing may be a **development** or an **operations** activity — tool needs differ.",
  ] });

  B.push({ h2: "5.5 How to eliminate wrong answers" });
  B.push({ ol: [
    "Ask **“is there a vendor?”** — strike vendor options for open source.",
    "In need questions, strike options for **what is already done** and options aimed at a **different goal**.",
  ] });

  B.push({ h2: "5.6 Scenario-solving shortcuts" });
  B.push({ table: { head: ["Scenario shape", "Shortcut"], widths: [5.0, 9.0], rows: [
    ["Open source tool maintenance", "**Your team supports and customizes**"],
    ["Commercial tool choice", "**Update frequency**, licences, support hours, community, manuals, contracts"],
    ["Documented need list", "Interfaces · protocols/standards · coding guidelines · configurations · dev vs ops"],
  ] } });

  B.push({ h2: "5.7 Common candidate mistakes" });
  B.push({ ul: ["Skipping this chapter as “just tools” — it is the best value per hour.", "Forgetting the firewall K4 lives here."] });

  B.push({ h2: "5.8 Mnemonics that carry the whole chapter" });
  B.push({ table: { head: ["Mnemonic", "Expands to"], widths: [3.6, 10.4], rows: [
    ["**“No vendor, your team”**", "Open source maintenance"],
    ["**S-L-F-U-F-R** (“Some Learn Fast, Upgrade For Results”)", "Open source ROI: **S**cope limited, **L**earning time, **F**orum time, **U**pdate/upgrade time, **F**uture direction, **R**esponsiveness"],
    ["**L-S-H-F-U-M-C**", "Vendor: **L**icence types, **S**calability, **H**elpdesk, **F**orum, **U**pdate frequency, **M**anuals, **C**ontracts"],
    ["**I-P-W-C**", "Overview from requirements/design: **I**nterfaces, **P**rotocols & standards, **W**eb coding guidelines, **C**onfigurations"],
  ] } });

  B.push({ h2: "5.9 Chapter 8 mind map" });
  B.push({ table: { head: ["Branch", "Leaves"], widths: [3.4, 10.6], rows: [
    ["**History**", "Hacking drove tools · John the Ripper · Nessus, Metasploit · usability vs complexity"],
    ["**Landscape**", "Massive, non-standardized · automate defense evaluation · detect known vulnerabilities · own list"],
    ["**Static/dynamic**", "Static early · dynamic probes the system · static scans by dynamic tools"],
    ["**Needs**", "Nine test-basis items · interfaces, protocols, guidelines, configurations · dev vs ops"],
    ["**Open source**", "Free, modifiable · regulation · team capacity · manuals · ROI aspects · licence count"],
    ["**Vendors**", "Licence types, scalability, support, community, update frequency, manuals, contracts"],
  ] } });

  B.push({ pagebreak: true });
  B.push({ h1: "Section 6 — Revision Notes" });
  B.push({ h2: "6.1 One-page chapter summary" });
  B.push({ p: "Security tools grew out of hacker tools (John the Ripper; Nessus and Metasploit frameworks). There are many, mostly open source, running non-standardized tests — so choosing is hard. Tools automate defense evaluation and detect known vulnerability types. Static tools work early; dynamic security tools probe the system and may even scan statically. Tool needs come from nine test-basis items and from the interfaces, protocols, coding guidelines and configurations they reveal, plus whether testing is a development or operations activity. Open source is free but needs your own technical capacity and may be ruled out by regulation; commercial vendors must be judged on licences, support, community, manuals, contracts — and above all **update frequency**." });
  B.push({ h2: "6.2 Key definitions to memorize" });
  B.push({ table: { head: ["Term", "Definition"], widths: [3.4, 10.6], rows: [
    ["Static analysis (security)", "Analysis while the object is not operational; early; most languages"],
    ["Dynamic security tool", "Probes the system rather than just the application"],
    ["ROI aspects (open source)", "Scope, learning, forums, upgrades, future direction, community"],
  ] } });
  B.push({ h2: "6.3 High-priority concepts (study first)" });
  B.push({ ol: ["Needs → capability; firewall malformed/fuzz (3 pts).", "Dynamic security tools probe the system (1 pt).", "Open source = no vendor; vendor update frequency (1 pt)."] });
  B.push({ h2: "6.4 Last-minute revision sheet" });
  B.push({ box: { kind: "ok", title: "If you read nothing else", body: [
    "Dynamic security tools **probe the system**; static tools work **early**.",
    "Firewall + DoS worry → **malformed packets / fuzzed data**.",
    "GPL → **no vendor → your team**.",
    "Vendor → **update frequency** (plus licences, support, community, manuals, contracts).",
    "Needs: interfaces, protocols/standards, coding guidelines, configurations; dev vs ops.",
  ] } });
  B.push({ h2: "6.5 Memorization checklist" });
  B.push({ table: { head: ["✓", "I can…"], widths: [0.8, 13.2], rows: [
    ["☐", "explain static vs dynamic security tools including the static-scan twist"],
    ["☐", "list the nine test-basis items and four overview items"],
    ["☐", "list open source issues and the six ROI aspects"],
    ["☐", "list the seven vendor attributes and four licence types"],
  ] } });
  B.push({ h2: "6.6 Exam-day quick review" });
  B.push({ ul: ["**Probes the system** decides the static/dynamic question.", "**Need → capability** decides the K4; **is there a vendor?** decides the open-source/vendor question."] });

  return B;
};
