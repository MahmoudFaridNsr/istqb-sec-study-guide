#!/usr/bin/env bash
# Rebuild all nine chapter guides (.docx) and their PDF renders. Run from tools/.
#   npm install        (once — installs docx)
#   ./build_all.sh
set -e
cd "$(dirname "$0")"
declare -A T=(
  [1]="01-the-basis-of-security-testing"
  [2]="02-security-testing-purposes-goals-and-strategies"
  [3]="03-security-testing-processes"
  [4]="04-security-testing-throughout-the-software-lifecycle"
  [5]="05-testing-security-mechanisms"
  [6]="06-human-factors-in-security-testing"
  [7]="07-security-test-evaluation-and-reporting"
  [8]="08-security-testing-tools"
  [9]="09-standards-and-industry-trends"
)
for n in 1 2 3 4 5 6 7 8 9; do
  node "build_sec_ch${n}.js" "../guides/${T[$n]}.docx"
done
cd ..
./tools/verify.sh guides/*.docx
