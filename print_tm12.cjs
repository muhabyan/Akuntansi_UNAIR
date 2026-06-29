const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'pte', 'ptePraUAS.ts');
const text = fs.readFileSync(filePath, 'utf-8');

const startIdx = text.indexOf('const tm12: Reading = {');
const objStart = text.indexOf('{', startIdx);
let open = 0, objEnd = -1, inString = false, escape = false;

for (let i = objStart; i < text.length; i++) {
  const char = text[i];
  if (inString) {
    if (escape) escape = false;
    else if (char === '\\') escape = true;
    else if (char === '"') inString = false;
  } else {
    if (char === '"') inString = true;
    else if (char === '{') open++;
    else if (char === '}') {
      open--;
      if (open === 0) { objEnd = i + 1; break; }
    }
  }
}

const tm12Str = text.substring(objStart, objEnd);
const tm12 = eval('(' + tm12Str + ')');
tm12.blocks.filter(b => b.kind === 'markdown' || b.kind === 'ul').forEach(b => {
  if (b.kind === 'markdown') {
    console.log("MARKDOWN: " + b.content.substring(0, 100) + "...");
  } else if (b.kind === 'ul') {
    console.log("UL:");
    b.items.forEach(it => console.log(" - " + it.substring(0, 100) + "..."));
  }
});
