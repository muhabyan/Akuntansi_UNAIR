const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'pte', 'ptePraUAS.ts');
let text = fs.readFileSync(filePath, 'utf-8');

const startIdx = text.indexOf('const tm12: Reading = {');
if (startIdx === -1) throw new Error("tm12 not found");

const objStart = text.indexOf('{', startIdx);
let open = 0;
let objEnd = -1;
let inString = false;
let escape = false;

for (let i = objStart; i < text.length; i++) {
  const char = text[i];
  if (inString) {
    if (escape) { escape = false; }
    else if (char === '\\') { escape = true; }
    else if (char === '"') { inString = false; }
  } else {
    if (char === '"') { inString = true; }
    else if (char === '{') { open++; }
    else if (char === '}') {
      open--;
      if (open === 0) {
        objEnd = i + 1;
        break;
      }
    }
  }
}

let tm12String = text.substring(objStart, objEnd);
let tm12;
try {
  tm12 = eval('(' + tm12String + ')');
} catch(e) {
  console.error("Eval failed", e);
  process.exit(1);
}

tm12.blocks.forEach(block => {
  if (block.kind === 'figure' && block.svg) {
    if (block.title.includes('Shock Nilai Tukar') || block.title.includes('PETA IDENTITAS') || block.title.includes('Peta Identitas')) {
      // Revert everything to currentColor
      block.svg = block.svg.replace(/fill="#f8fafc"/g, 'fill="currentColor"');
      
      // But for <text> elements, we want them to be #f8fafc
      // Note: text elements might not have fill="currentColor" if they didn't have it, but we just set it.
      // We can use regex to find <text ... fill="currentColor" ...> and change it to fill="#f8fafc"
      block.svg = block.svg.replace(/(<text[^>]*)fill="currentColor"([^>]*>)/g, '$1fill="#f8fafc"$2');
    }
  }
});

const finalTm12String = JSON.stringify(tm12, null, 2);
const finalContent = text.substring(0, objStart) + finalTm12String + text.substring(objEnd);
fs.writeFileSync(filePath, finalContent);
console.log("Arrows fixed successfully.");
