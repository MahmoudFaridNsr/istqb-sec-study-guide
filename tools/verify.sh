#!/usr/bin/env bash
# Verify built guides: renders each to PDF (with a populated table of contents) and
# reports page count, question count, flashcard count, blank pages and stray markup.
# Run from the repository root:  ./tools/verify.sh guides/*.docx
set -e
python3 tools/to_pdf.py guides/pdf "$@" >/dev/null
for f in "$@"; do
python3 - "guides/pdf/$(basename "${f%.docx}").pdf" <<'PY'
import pdfplumber, re, sys
p = pdfplumber.open(sys.argv[1])
pages = [(pg.extract_text() or "").strip() for pg in p.pages]
t = "\n".join(pages)
print("file      ", sys.argv[1])
print("pages     ", len(pages))
print("questions ", t.count("Correct answer"))
print("flashcards", t.count("FRONT"))
print("blank     ", [i+1 for i, x in enumerate(pages) if len(x) < 250])
stray = [l for l in t.split("\n") if '*' in l or re.search(r'(?<![A-Za-z0-9])_|_(?![A-Za-z0-9])', l)]
print("stray mkup", len(stray))
for l in stray[:10]: print("   >", l[:130])
print()
PY
done
