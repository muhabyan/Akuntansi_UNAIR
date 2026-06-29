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

// Fix 1: Restore flowchart text colors
// Since the flowchart boxes use #0f172a or #1e293b, their text should be white (#f8fafc).
// We previously converted #e2e8f0 and #94a3b8 to currentColor globally in all SVGs.
// This ruined the flowcharts where the background is dark.
// Let's replace currentColor inside <text> tags with #f8fafc ONLY for flowcharts.
// Wait, actually, let's just make ALL SVGs use #f8fafc for text IF it's inside a dark rect.
// Instead of that, let's target the specific flowcharts by title.
tm12.blocks.forEach(block => {
  if (block.kind === 'figure' && block.svg) {
    // If it's a flowchart (Shock Nilai Tukar atau Peta Identitas)
    if (block.title.includes('Shock Nilai Tukar') || block.title.includes('PETA IDENTITAS') || block.title.includes('Peta Identitas')) {
      block.svg = block.svg.replace(/fill="currentColor"/g, 'fill="#f8fafc"');
    }
    
    // Fix 2: Increase viewBox for Mankiw SVGs
    if (block.title.includes('Keseimbangan Dua Pasar Ekonomi Terbuka Mankiw') || 
        block.title.includes('Efek Defisit Anggaran') ||
        block.title.includes('Efek Kebijakan Perdagangan') ||
        block.title.includes('Efek Ketidakstabilan Ekonomi')) {
      
      // Change viewBox to prevent clipping
      block.svg = block.svg.replace(/viewBox="0 0 900 600"/g, 'viewBox="0 0 1000 600"');
      
      // For any text inside a dark rect, ensure it is #f8fafc and not currentColor
      // Wait, in update_svgs_tm12 I already used fill="#f8fafc" for the new SVGs.
      // But for the Defisit Anggaran SVG, I used #f8fafc in my manual replace.
      // Let's make sure the text isn't cut off inside the SVGs:
      // In Capital Flight: "5. ...which causes peso to depreciate."
      // The box is at x="420" width="100". 420+100=520.
      // The text "peso to depreciate." is much wider than 100px.
      // Let's widen the boxes that are too small.
      block.svg = block.svg.replace(/<rect x="420" y="470" width="100" height="40"/, '<rect x="410" y="470" width="115" height="40"');
      block.svg = block.svg.replace(/<rect x="30" y="190" width="100" height="40"/, '<rect x="20" y="190" width="100" height="40"');
      block.svg = block.svg.replace(/<rect x="740" y="380" width="150" height="40"/, '<rect x="735" y="380" width="170" height="40"');
      
      // Import Quota graph boxes
      block.svg = block.svg.replace(/<rect x="730" y="360" width="160" height="40"/, '<rect x="730" y="360" width="175" height="40"');
      block.svg = block.svg.replace(/<rect x="420" y="450" width="150" height="40"/, '<rect x="400" y="450" width="170" height="40"');
      
      // Also shift text left if rect moved left
      block.svg = block.svg.replace(/<text x="430" y="465"/, '<text x="410" y="465"');
      block.svg = block.svg.replace(/<text x="430" y="480"/, '<text x="410" y="480"');
      
      block.svg = block.svg.replace(/<text x="430" y="485"/, '<text x="420" y="485"');
      block.svg = block.svg.replace(/<text x="430" y="500"/, '<text x="420" y="500"');
    }
  }
});


const finalTm12String = JSON.stringify(tm12, null, 2);
const finalContent = text.substring(0, objStart) + finalTm12String + text.substring(objEnd);
fs.writeFileSync(filePath, finalContent);
console.log("Visuals fixed successfully.");
