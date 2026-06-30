const fs = require('fs');

const lines = fs.readFileSync('c:/cek/closed_economy_antigravity_package/closed_economy_tm9_tm10_spec.md', 'utf-8').split('\n');

let tm9Blocks = [];
let tm10Blocks = [];
let currentBlocks = null;
let currentList = null;
let currentTable = null;
let currentFormula = null;

let i = 0;
while (i < lines.length) {
  let line = lines[i].trim();

  if (line.startsWith('# TM 9:')) {
    currentBlocks = tm9Blocks;
    i++;
    continue;
  }
  if (line.startsWith('# TM 10:')) {
    currentBlocks = tm10Blocks;
    i++;
    continue;
  }

  if (!currentBlocks) {
    i++;
    continue;
  }

  if (line.startsWith('## Slide ')) {
    // End any open blocks
    if (currentList) { currentBlocks.push(currentList); currentList = null; }
    if (currentTable) { currentBlocks.push(currentTable); currentTable = null; }

    const titleMatch = line.match(/## Slide \d+\. (.+)/);
    if (titleMatch) {
      currentBlocks.push({ kind: 'h2', text: titleMatch[1] });
    }
    i++;
    continue;
  }

  if (line.startsWith('```math')) {
    if (currentList) { currentBlocks.push(currentList); currentList = null; }
    let formulaText = [];
    i++;
    while (i < lines.length && !lines[i].startsWith('```')) {
      formulaText.push(lines[i].trim());
      i++;
    }
    currentBlocks.push({ kind: 'formula', text: formulaText.join('\n') });
    i++;
    continue;
  }

  if (line.match(/^[-*] /) || line.match(/^\d+\. /)) {
    if (!currentList) {
      currentList = { kind: line.match(/^\d+\. /) ? 'ol' : 'ul', items: [] };
    }
    currentList.items.push(line.replace(/^[-*\d.]+\s*/, ''));
    i++;
    continue;
  } else {
    if (currentList) {
      currentBlocks.push(currentList);
      currentList = null;
    }
  }

  if (line.startsWith('|')) {
    if (!currentTable) {
      currentTable = { kind: 'table', headers: [], rows: [] };
      // Parse header
      const headers = line.split('|').filter(c => c).map(c => c.trim());
      currentTable.headers = headers;
      i++; // skip header row
      i++; // skip divider row (assuming it exists)
      continue;
    } else {
      if (!line.includes('---')) {
        const cells = line.split('|').filter(c => c).map(c => c.trim());
        if (cells.length > 0) currentTable.rows.push(cells);
      }
      i++;
      continue;
    }
  } else {
    if (currentTable) {
      currentBlocks.push(currentTable);
      currentTable = null;
    }
  }

  if (line.startsWith('Asset referensi: ')) {
    const match = line.match(/assets\/(.+?\.(jpg|png))/);
    if (match) {
      currentBlocks.push({
        kind: 'figure',
        url: `/assets/pte/${match[1]}`,
        caption: 'Referensi visual dari sumber asli',
        altText: 'Gambar referensi'
      });
    }
    i++;
    continue;
  }

  if (line.length > 0) {
    // Normal paragraph
    currentBlocks.push({ kind: 'p', text: line });
  }

  i++;
}

if (currentList) currentBlocks.push(currentList);
if (currentTable) currentBlocks.push(currentTable);

const tm9 = {
  tm: 9,
  title: "Closed Economy: Consumption, Saving, and Investment",
  ref: "Salinan 9-10. Closed Economy",
  intro: "Membahas hubungan konsumsi, tabungan, dan investasi dalam ekonomi tertutup.",
  objectives: [
    "Memahami konsep Consumption dan Saving.",
    "Memahami fungsi konsumsi dan tabungan.",
    "Memahami konsep Marginal Propensity to Consume (MPC) dan Marginal Propensity to Save (MPS).",
    "Memahami konsep Investasi."
  ],
  blocks: tm9Blocks
};

const tm10 = {
  tm: 10,
  title: "Closed Economy: Equilibrium Output, Multiplier, and Fiscal Policy",
  ref: "Salinan 9-10. Closed Economy",
  intro: "Menentukan keseimbangan output nasional, memahami multiplier model, dan peran kebijakan fiskal.",
  objectives: [
    "Memahami penentuan output keseimbangan (Equilibrium Output).",
    "Memahami model Multiplier.",
    "Menganalisis keseimbangan tiga sektor dengan peran kebijakan fiskal.",
    "Memahami konsep Output Gap dan Paradox of Thrift."
  ],
  blocks: tm10Blocks
};

fs.writeFileSync('c:/cek/tm9_tm10_parsed.json', JSON.stringify({ tm9, tm10 }, null, 2), 'utf-8');
console.log('Successfully parsed to tm9_tm10_parsed.json');
