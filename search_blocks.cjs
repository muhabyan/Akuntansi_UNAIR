const fs = require('fs');
const lines = fs.readFileSync('C:/Users/Lenovo/.gemini/antigravity-ide/brain/80287752-bb0e-4547-a57c-38f53e0f1a42/.system_generated/logs/transcript_full.jsonl', 'utf-8').split('\n');

let maxContent = "";

for (const line of lines) {
    if (!line.trim()) continue;
    try {
        const obj = JSON.parse(line);
        if (obj.tool_calls) {
            for (const call of obj.tool_calls) {
                if (call.name === 'replace_file_content' || call.name === 'multi_replace_file_content' || call.name === 'write_to_file') {
                    const args = call.args;
                    let contentsToCheck = [];
                    if (args.ReplacementContent) contentsToCheck.push(args.ReplacementContent);
                    if (args.CodeContent) contentsToCheck.push(args.CodeContent);
                    if (args.ReplacementChunks) {
                        for (let chunk of args.ReplacementChunks) {
                            if (chunk.ReplacementContent) contentsToCheck.push(chunk.ReplacementContent);
                        }
                    }
                    
                    for (let text of contentsToCheck) {
                        // Look for key phrases that indicate it's TM10 contents
                        if (text.includes('Perekonomian Tertutup (Bagian 2)') || text.includes('Keseimbangan 3-Sektor')) {
                            if (text.length > maxContent.length && !text.includes('const tm9: Reading')) {
                                maxContent = text;
                            }
                        }
                    }
                }
            }
        }
    } catch(e) {}
}

if (maxContent) {
    fs.writeFileSync('C:/cek/tm10_real_max.ts', maxContent);
    console.log('Saved tm10_real_max.ts with length ' + maxContent.length);
} else {
    console.log('No matches found for TM10');
}
