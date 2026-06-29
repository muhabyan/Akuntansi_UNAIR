const fs = require('fs');

const filePath = 'C:/cek/src/data/pte/ptePraUAS.ts';
let text = fs.readFileSync(filePath, 'utf-8');

// The issue: "svg": "<svg viewBox=\\"0 0 ...\\">"
// We want:   "svg": "<svg viewBox=\"0 0 ...\">"
// Which means replacing literal `\\"` with `\"`
text = text.replace(/\\\\"/g, '\\"');
text = text.replace(/\\\\n/g, '\\n');

fs.writeFileSync(filePath, text);
console.log('Fixed double escapes');
