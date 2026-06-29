const fs = require('fs');

const lines = fs.readFileSync('C:/Users/Lenovo/.gemini/antigravity-ide/brain/80287752-bb0e-4547-a57c-38f53e0f1a42/.system_generated/logs/transcript_full.jsonl', 'utf-8').split('\n');

for (const line of lines) {
    if (!line.trim()) continue;
    try {
        const obj = JSON.parse(line);
        if (obj.tool_calls) {
            for (const call of obj.tool_calls) {
                if (call.name === 'replace_file_content' || call.name === 'multi_replace_file_content') {
                    const args = call.args;
                    if (args.Description && args.Description.includes('TM10')) {
                        console.log("Found TM10 replacement content!");
                        if (args.ReplacementContent) {
                            fs.writeFileSync('C:/cek/tm10_recovered.ts', args.ReplacementContent);
                        } else if (args.ReplacementChunks) {
                            fs.writeFileSync('C:/cek/tm10_recovered.ts', args.ReplacementChunks[0].ReplacementContent);
                        }
                    }
                    if (args.Description && args.Description.includes('TM11')) {
                        console.log("Found TM11 replacement content!");
                        if (args.ReplacementContent) {
                            fs.writeFileSync('C:/cek/tm11_recovered.ts', args.ReplacementContent);
                        } else if (args.ReplacementChunks) {
                            fs.writeFileSync('C:/cek/tm11_recovered.ts', args.ReplacementChunks[0].ReplacementContent);
                        }
                    }
                }
            }
        }
    } catch(e) {}
}
console.log("Done checking transcript.");
