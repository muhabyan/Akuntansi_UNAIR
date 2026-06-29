const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'pte', 'ptePraUAS.ts');
let text = fs.readFileSync(filePath, 'utf-8');

const tm10Content = fs.readFileSync('C:/cek/tm10_clean.ts', 'utf-8');
const tm11Content = fs.readFileSync('C:/cek/tm11_valid_recovered.ts', 'utf-8');

const tm10Start = text.indexOf('const tm10: Reading = {');
const tm11Start = text.indexOf('const tm11: Reading = {');
const tm12Start = text.indexOf('const tm12: Reading = {');

if (tm10Start !== -1 && tm11Start !== -1 && tm12Start !== -1) {
    // Extract everything before tm10
    const beforeTm10 = text.substring(0, tm10Start);
    // Extract everything from tm12 onwards
    const afterTm11 = text.substring(tm12Start);
    
    // Stitch it all together with the new contents
    const newText = beforeTm10 + tm10Content.trim() + '\n\n' + tm11Content.trim() + '\n\n' + afterTm11;
    
    fs.writeFileSync(filePath, newText);
    console.log('Successfully injected tm10 and tm11 with clean precision!');
} else {
    console.log('Error finding boundaries.');
}
