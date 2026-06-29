const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'pte', 'ptePraUAS.ts');
let text = fs.readFileSync(filePath, 'utf-8');

const tm10Content = fs.readFileSync('C:/cek/tm10_valid_recovered.ts', 'utf-8');
const tm11Content = fs.readFileSync('C:/cek/tm11_valid_recovered.ts', 'utf-8');

function replaceBlock(varName, newContent) {
    const startIdx = text.indexOf(`const ${varName}: Reading = {`);
    if (startIdx === -1) {
        console.log(`Could not find ${varName}`);
        return;
    }
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

    if (objEnd !== -1) {
        let replacement = newContent.trim();
        if (!replacement.startsWith('const ' + varName)) {
            replacement = `const ${varName}: Reading = ` + replacement;
        }
        if (!replacement.endsWith(';')) replacement += ';';

        const oldFullString = text.substring(startIdx, objEnd + 1);
        
        // Let's make sure oldFullString doesn't have an extra semicolon that we duplicate, or if it does, it's fine we replace exactly up to '}' and our replacement adds ';'
        text = text.replace(oldFullString, replacement);
        console.log(`Successfully replaced ${varName}`);
    } else {
        console.log(`Could not find end of ${varName}`);
    }
}

replaceBlock('tm10', tm10Content);
replaceBlock('tm11', tm11Content);

fs.writeFileSync(filePath, text);
