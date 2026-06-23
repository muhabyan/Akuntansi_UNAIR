import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const failures = [];
const sourceFiles = fs.readdirSync(path.join(root, 'src'), { recursive: true })
  .filter((entry) => typeof entry === 'string' && /\.(ts|tsx)$/.test(entry));

for (const rel of sourceFiles) {
  const source = fs.readFileSync(path.join(root, 'src', rel), 'utf8');
  const label = `src/${rel}`;
  if (/\bdebugger\s*;/.test(source)) failures.push(`${label}: debugger statement`);
  if (/console\.(log|debug)\s*\(/.test(source)) failures.push(`${label}: console.log/debug`);
  if (/REPLACE_ME|example\.com\/replace/i.test(source)) failures.push(`${label}: placeholder URL/text`);
  if (/<a\b[\s\S]{0,350}aria-disabled=\{[^}]+\}[\s\S]{0,350}<\/a>/.test(source)) {
    failures.push(`${label}: disabled action must use <button disabled>, not <a aria-disabled>`);
  }
  const blankLinks = [...source.matchAll(/<a\b([\s\S]*?)>/g)];
  for (const match of blankLinks) {
    const attrs = match[1];
    if (/target=["']_blank["']/.test(attrs) && !/rel=["'][^"']*noopener/.test(attrs)) {
      failures.push(`${label}: target=_blank without rel=noopener`);
    }
  }
}


const lockfilePath = path.join(root, 'package-lock.json');
if (fs.existsSync(lockfilePath)) {
  const lockfile = fs.readFileSync(lockfilePath, 'utf8');
  if (/applied-caas-gateway|internal\.api\.openai\.org/i.test(lockfile)) {
    failures.push('package-lock.json: private/internal registry URL detected');
  }
}

if (failures.length) {
  console.error('Source lint FAILED');
  failures.slice(0, 100).forEach((failure) => console.error(`- ${failure}`));
  if (failures.length > 100) console.error(`- ... ${failures.length - 100} temuan lain`);
  process.exit(1);
}
console.log(`Source lint PASS (${sourceFiles.length} TypeScript/TSX files)`);
