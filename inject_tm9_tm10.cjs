const fs = require('fs');

const parsed = JSON.parse(fs.readFileSync('c:/cek/tm9_tm10_parsed.json', 'utf-8'));

let tsFile = fs.readFileSync('c:/cek/src/data/pte/ptePraUAS.ts', 'utf-8');

const tm9Start = tsFile.indexOf('const tm9: Reading = {');
const tm11Start = tsFile.indexOf('const tm11: Reading = {');

if (tm9Start === -1 || tm11Start === -1) {
  console.error("Could not find tm9 or tm11 bounds!");
  process.exit(1);
}

const beforeTm9 = tsFile.substring(0, tm9Start);
const afterTm10 = tsFile.substring(tm11Start);

const tm9Str = `const tm9: Reading = ${JSON.stringify(parsed.tm9, null, 2)};\n\n`;
const tm10Str = `const tm10: Reading = ${JSON.stringify(parsed.tm10, null, 2)};\n\n`;

const newTsFile = beforeTm9 + tm9Str + tm10Str + afterTm10;

fs.writeFileSync('c:/cek/src/data/pte/ptePraUAS.ts', newTsFile, 'utf-8');
console.log("Successfully injected tm9 and tm10!");
