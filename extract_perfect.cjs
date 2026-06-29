const fs = require('fs');

const pyScript = fs.readFileSync('C:/cek/tm10_real_max.ts', 'utf-8');

const match10 = pyScript.match(/const tm10: Reading = \{[\s\S]*?\n\};/);
if (match10) {
    fs.writeFileSync('C:/cek/tm10_perfect.ts', match10[0]);
    console.log('Saved tm10_perfect.ts, length ' + match10[0].length);
} else {
    console.log('Failed to extract tm10_perfect');
}

const tm11Str = fs.readFileSync('C:/cek/tm11_final.ts', 'utf-8');
const match11 = tm11Str.match(/const tm11: Reading = \{[\s\S]*?\n\};/);
if (match11) {
    fs.writeFileSync('C:/cek/tm11_perfect.ts', match11[0]);
    console.log('Saved tm11_perfect.ts, length ' + match11[0].length);
} else {
    console.log('Failed to extract tm11_perfect');
}
