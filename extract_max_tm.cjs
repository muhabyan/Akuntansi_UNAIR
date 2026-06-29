const fs = require('fs');

const lines = fs.readFileSync('C:/Users/Lenovo/.gemini/antigravity-ide/brain/80287752-bb0e-4547-a57c-38f53e0f1a42/.system_generated/logs/transcript_full.jsonl', 'utf-8').split('\n');

let maxTm10 = "";
let maxTm11 = "";

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
                        if (text.includes('const tm10: Reading')) {
                            const match = text.match(/const tm10: Reading = \{[\s\S]*?\n\};/);
                            if (match) {
                                if (match[0].length > maxTm10.length) {
                                    maxTm10 = match[0];
                                }
                            } else {
                                if (text.length > maxTm10.length) maxTm10 = text;
                            }
                        }
                        if (text.includes('const tm11: Reading')) {
                            const match = text.match(/const tm11: Reading = \{[\s\S]*?\n\};/);
                            if (match) {
                                if (match[0].length > maxTm11.length) {
                                    maxTm11 = match[0];
                                }
                            } else {
                                if (text.length > maxTm11.length) maxTm11 = text;
                            }
                        }
                    }
                }
            }
        }
    } catch(e) {}
}

if (maxTm10) {
    fs.writeFileSync('C:/cek/tm10_max.ts', maxTm10);
    console.log('Saved tm10_max.ts with length ' + maxTm10.length);
}
if (maxTm11) {
    fs.writeFileSync('C:/cek/tm11_max.ts', maxTm11);
    console.log('Saved tm11_max.ts with length ' + maxTm11.length);
}
