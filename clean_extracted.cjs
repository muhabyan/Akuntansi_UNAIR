const fs = require('fs');

const t10Full = fs.readFileSync('C:/cek/tm10_max.ts', 'utf-8');
const tm10Match = t10Full.match(/const tm10: Reading = \{[\s\S]*?\n\};/);

if (tm10Match) {
    fs.writeFileSync('C:/cek/tm10_final.ts', tm10Match[0]);
    console.log('Saved tm10_final.ts with length ' + tm10Match[0].length);
} else {
    console.log('Could not extract tm10 from tm10_max.ts');
}

const t11Full = fs.readFileSync('C:/cek/tm11_max.ts', 'utf-8');
const tm11Match = t11Full.match(/const tm11: Reading = \{[\s\S]*?\n\};/);

if (tm11Match) {
    fs.writeFileSync('C:/cek/tm11_final.ts', tm11Match[0]);
    console.log('Saved tm11_final.ts with length ' + tm11Match[0].length);
} else {
    console.log('Could not extract tm11 from tm11_max.ts');
}
