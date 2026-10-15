# tools/ — guide generators

The nine study guides in `../guides/` are **generated**, not hand-written. This directory holds the
source. Fix a typo once here, rebuild, and every affected guide is corrected consistently.

> ⚠️ **These files contain official ISTQB® sample-exam questions and rationale as plain text.**
> Inside a `.docx` that content is at least compressed and not indexed; here it is searchable source
> that GitHub renders directly. **Do not publish this directory in a public repository** without
> first reading [`../docs/COPYRIGHT-RISK.md`](../docs/COPYRIGHT-RISK.md) and trimming Part A of each
> `*_content2.js`.

---

## Layout

| File | Role |
| --- | --- |
| `render.js` | Shared renderer. Turns a typed block list into `docx` document elements. Owns all styling |
| `build_common.js` | Shared assembly — cover page, contents, “How to use this guide” box, header and footer |
| `sec_ch<N>_content1.js` | Chapter *N*, Sections 1–3 — syllabus explanation, then pulls in Section 2, then the keyword glossary and tables |
| `sec_ch<N>_concepts.js` | Chapter *N*, Section 2 — the key-concept cards, the chapter storyline and “fuzzy points clarified” |
| `sec_ch<N>_content2.js` | Chapter *N*, Section 4 — the question bank (Part A official, Part B derived) |
| `sec_ch<N>_content3.js` | Chapter *N*, Sections 5–6 — exam tricks, revision notes |
| `build_sec_ch<N>.js` | Chapter *N* entry point — chapter metadata for the cover and the how-to box |
| `build_all.sh` | Rebuilds all nine `.docx` files, renders the PDFs and runs the checks |
| `to_pdf.py` | Drives LibreOffice over UNO: opens each `.docx`, **updates the table of contents**, exports PDF |
| `verify.sh` | Renders guides to PDF and reports page, question and concept-card counts, blank pages and stray markup |

## Build

```bash
cd tools
npm install                 # installs docx (once)
./build_all.sh              # all nine guides + PDFs + checks
```

One chapter:

```bash
node build_sec_ch4.js "../guides/04-security-testing-throughout-the-software-lifecycle.docx"
cd .. && ./tools/verify.sh guides/04-security-testing-throughout-the-software-lifecycle.docx
```

PDF rendering needs **LibreOffice** (`soffice` on `PATH`, or `SOFFICE=/path/to/soffice`) and
**pdfplumber** for the checks (`pip install pdfplumber`; point `PYTHON=` at another interpreter if
pdfplumber lives in a virtualenv). `to_pdf.py` runs its export as a macro **inside** LibreOffice, so
the system Python does not need the UNO bridge. That is what makes it work on macOS (`brew install
--cask libreoffice`). Plain `soffice --headless --convert-to pdf` also works, but leaves the table of
contents empty — that is why `to_pdf.py` exists.

---

## Content model

Each `content*.js` exports a function returning an array of typed blocks. `render.js` maps each
block to document elements, so content files never touch formatting.

| Block | Renders as |
| --- | --- |
| `{ h1: "…" }` | Section heading, navy banner, TOC level 1 |
| `{ h2: "…" }` | Sub-heading, TOC level 2 |
| `{ h3: "…" }` | Minor heading, blue |
| `{ p: "…" }` | Body paragraph |
| `{ lead: "…" }` | Small italic grey note |
| `{ ul: [...] }` / `{ ol: [...] }` | Bulleted / numbered list |
| `{ table: { title, head, widths, rows } }` | Table. `widths` are relative (they are scaled to the page) |
| `{ box: { title, body, kind } }` | Callout. `kind`: default (blue), `warn` (amber), `ok` (green). `body` may be a string or an array of strings |
| `{ q: { n, tag, meta, stem, opts, correct, why, scenario } }` | Question with green answer box |
| `{ concept: { title, plain, how, test, defend, method, why, example, exam, confuse, remember } }` | Key-concept card: a navy title bar, then one labelled row per field present (“In plain words”, “How it works”, “How to test it”, “How to defend”, “Method”, “Why it matters”, “Example”, “Exam angle”, “Don’t confuse”, “Remember”). Only `title` is required; each field may be a string or an array of strings |
| `{ pagebreak: true }` · `{ spacer: N }` | Page break · vertical space (twips) |

A `pagebreak` immediately before an `h1` is rendered as *page-break-before* on that heading, and no
spacer is emitted in front of a page break. That prevents a table or box that exactly fills a page
from pushing an empty paragraph onto a blank page of its own.

### Inline markup

`**bold**` and `_italic_`, parsed by a character-scanning toggle in `runs()`. Nesting works
(`**bold with _italics_ inside**`).

**Gotchas:** a single `*` renders literally, and **any underscore toggles italics** — so never put
identifiers like `ISTQB_ATM_SYL` or URLs containing `_` into content. For a literal footnote marker
use `†`, `‡`, `§` or `¶`. Backslash escaping is not supported. Use typographic quotes (“ ” ‘ ’)
inside strings to avoid escaping.

### Question blocks

- `correct` is an array of option letters — `["b"]`
- `stem` may contain `\n`; each line becomes its own paragraph (used for numbered lists in stems)
- `scenario` renders as an italic preamble above the stem
- `why` is the rationale printed inside the green box
- Official questions use the tag `OFFICIAL · Sample Exam #N (P pts)`; the checks below rely on it

The shared password-reset requirement used by official #23 and #24 is declared once at the top of
`sec_ch4_content2.js` (`RESET`, `RESET24`) so the wording stays exactly as published.

---

## Verifying a build

```bash
cd ..
./tools/verify.sh guides/*.docx
```

It prints, per guide:

```
file       guides/pdf/04-security-testing-throughout-the-software-lifecycle.pdf
pages      38
questions  32
concepts   11
blank      []
stray mkup 0
```

- **questions** counts *Correct answer* — it should match the README table.
- **concepts** counts *In plain words* — the number of Section 2 concept cards.
- **blank** must be `[]`. A page with under 250 characters of text is flagged.
- **stray mkup** must be `0`. Anything else means a literal `*` or an unpaired `_` reached the PDF.

### Answer-key check

All 45 official answers can be checked against the official key in one command:

```bash
node -e '
const key="b c c b a c b c d c b b a c a b a b c b c c a d a c c c b b b c a d c c d b c c a a c b b".split(" ");
let bad=0; for (let ch=1; ch<=9; ch++) for (const b of require(`./sec_ch${ch}_content2`)()) {
  const m=b.q && b.q.tag.match(/Sample Exam #(\d+)/); if (m && b.q.correct[0]!==key[m[1]-1]) { bad++; console.log("mismatch #"+m[1]); } }
console.log(bad ? bad+" mismatches" : "all 45 official answers match");'
```

---

## Attribution

`render.js`, `build_common.js`, `to_pdf.py`, the block model and all commentary, key-concept
explanations, derived questions and tables are original work under CC BY-NC-SA 4.0 (see
[`../LICENSE`](../LICENSE)). Quoted ISTQB® syllabus wording and sample-exam content embedded in the
`content*.js` files remains © International Software Testing Qualifications Board — see
[`../NOTICE.md`](../NOTICE.md).
