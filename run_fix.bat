@echo off
cd /d f:\frstclo
node fix_color_schemes.js > fix_output.txt 2>&1
type fix_output.txt
