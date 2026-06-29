const fs = require('fs');
const path = require('path');

const historyDir = 'C:/Users/Lenovo/AppData/Roaming/Code/User/History';
if (!fs.existsSync(historyDir)) {
  console.log("No history dir found.");
  process.exit(0);
}

let candidates = [];

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else {
      // only check files modified in the last 2 days
      if (Date.now() - stat.mtimeMs < 2 * 24 * 60 * 60 * 1000) {
        if (fullPath.endsWith('.json')) {
            try {
                const content = fs.readFileSync(fullPath, 'utf8');
                if (content.includes('ptePraUAS.ts')) {
                    const dirName = path.dirname(fullPath);
                    console.log('Found ptePraUAS.ts in history directory:', dirName);
                    // Now find all files in this directory (other than entries.json)
                    const entryFiles = fs.readdirSync(dirName);
                    for(const entry of entryFiles) {
                        if (entry !== 'entries.json') {
                            const entryPath = path.join(dirName, entry);
                            const entryStat = fs.statSync(entryPath);
                            candidates.push({path: entryPath, time: entryStat.mtimeMs});
                        }
                    }
                }
            } catch(e) {}
        }
      }
    }
  }
}

walk(historyDir);

candidates.sort((a, b) => b.time - a.time);

console.log(`Found ${candidates.length} candidate backup files.`);

let found = false;
for (const cand of candidates.slice(0, 50)) {
  try {
    const content = fs.readFileSync(cand.path, 'utf8');
    if (content.includes('tm10') && content.includes('PTE_PRA_UAS_READINGS')) {
      console.log(`\n--- Candidate: ${cand.path} (Time: ${new Date(cand.time).toLocaleString()}) ---`);
      
      // try to extract tm10 title or some content to show it has data
      const tm10Idx = content.indexOf('const tm10: Reading = {');
      if (tm10Idx !== -1) {
          console.log("Found tm10 block.");
          const titleMatch = content.substring(tm10Idx, tm10Idx + 300).match(/title:\s*["']([^"']+)["']/);
          if (titleMatch) console.log("tm10 title:", titleMatch[1]);
          found = true;
          // save the best candidate to a recovery file
          fs.writeFileSync('C:/cek/recovered_ptePraUAS.ts', content);
          console.log("Saved the most recent candidate to C:/cek/recovered_ptePraUAS.ts");
          break;
      }
    }
  } catch(e) {}
}

if (!found) {
    console.log("Could not find tm10 content in the history files.");
}
