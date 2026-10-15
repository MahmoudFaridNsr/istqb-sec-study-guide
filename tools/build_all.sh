#!/usr/bin/env bash
# Rebuild all nine chapter guides (.docx) and their PDF renders. Run from tools/.
#   npm install        (once — installs docx)
#   ./build_all.sh
# Works with the bash 3.2 that ships with macOS (no associative arrays).
set -e
cd "$(dirname "$0")"
NAMES=(
  ""
  "01-the-basis-of-security-testing"
  "02-security-testing-purposes-goals-and-strategies"
  "03-security-testing-processes"
  "04-security-testing-throughout-the-software-lifecycle"
  "05-testing-security-mechanisms"
  "06-human-factors-in-security-testing"
  "07-security-test-evaluation-and-reporting"
  "08-security-testing-tools"
  "09-standards-and-industry-trends"
)
for n in 1 2 3 4 5 6 7 8 9; do
  node "build_sec_ch${n}.js" "../guides/${NAMES[$n]}.docx"
done
cd ..
./tools/verify.sh guides/*.docx
