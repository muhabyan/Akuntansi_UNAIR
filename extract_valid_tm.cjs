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
                    // Only target ptePraUAS.ts
                    if (args.TargetFile && args.TargetFile.includes('ptePraUAS.ts')) {
                        let contentToSave = null;
                        if (args.ReplacementContent && args.ReplacementContent.includes('const tm10: Reading')) {
                            contentToSave = args.ReplacementContent;
                            fs.writeFileSync('C:/cek/tm10_valid_recovered.ts', contentToSave);
                            console.log("Saved tm10 valid");
                        } else if (args.ReplacementChunks) {
                            for (let chunk of args.ReplacementChunks) {
                                if (chunk.ReplacementContent && chunk.ReplacementContent.includes('const tm10: Reading')) {
                                    contentToSave = chunk.ReplacementContent;
                                    fs.writeFileSync('C:/cek/tm10_valid_recovered.ts', contentToSave);
                                    console.log("Saved tm10 valid from chunk");
                                }
                            }
                        }
                        
                        if (args.ReplacementContent && args.ReplacementContent.includes('const tm11: Reading')) {
                            contentToSave = args.ReplacementContent;
                            fs.writeFileSync('C:/cek/tm11_valid_recovered.ts', contentToSave);
                            console.log("Saved tm11 valid");
                        } else if (args.ReplacementChunks) {
                            for (let chunk of args.ReplacementChunks) {
                                if (chunk.ReplacementContent && chunk.ReplacementContent.includes('const tm11: Reading')) {
                                    contentToSave = chunk.ReplacementContent;
                                    fs.writeFileSync('C:/cek/tm11_valid_recovered.ts', contentToSave);
                                    console.log("Saved tm11 valid from chunk");
                                }
                            }
                        }
                    }
                }
            }
        }
    } catch(e) {}
}
