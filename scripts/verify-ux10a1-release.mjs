import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(process.env.UX10A1_RELEASE_ROOT || process.cwd());
const mode = process.env.UX10A1_VERIFY_MODE || 'release';
const manifestName = 'UX1_0A_1_PACKAGE_MANIFEST_SHA256.txt';
const manifestPath = path.join(root, manifestName);
const failures = [];

function fail(message) { failures.push(message); }
function sha256(file) { return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex'); }

if (!fs.existsSync(manifestPath) || !fs.statSync(manifestPath).isFile()) {
  console.error(JSON.stringify({ pass: false, status: 'MANIFEST_MISSING', failures: [manifestName] }, null, 2));
  process.exit(1);
}

const entries = new Map();
for (const [index, raw] of fs.readFileSync(manifestPath, 'utf8').split(/\r?\n/).entries()) {
  const line = raw.trim();
  if (!line || line.startsWith('#')) continue;
  const match = line.match(/^([0-9a-f]{64})[ ]{2}(.+)$/);
  if (!match) { fail(`Malformed manifest line ${index + 1}`); continue; }
  const [, hash, rel] = match;
  if (rel === manifestName || path.isAbsolute(rel) || rel.split('/').includes('..')) fail(`Invalid manifest path: ${rel}`);
  if (entries.has(rel)) fail(`Duplicate manifest entry: ${rel}`);
  entries.set(rel, hash);
}

const ignoredTopLevel = mode === 'post-install' ? new Set(['node_modules', 'dist']) : new Set();
const inventory = new Map();
function walk(dir, relDir = '') {
  for (const dirent of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = relDir ? `${relDir}/${dirent.name}` : dirent.name;
    const abs = path.join(dir, dirent.name);
    if (!relDir && ignoredTopLevel.has(dirent.name)) continue;
    if (dirent.isSymbolicLink()) { fail(`Symlink not allowed: ${rel}`); continue; }
    if (dirent.isDirectory()) {
      if (mode === 'release' && (dirent.name === 'node_modules' || dirent.name === 'dist' || dirent.name === '.git')) fail(`Forbidden release directory: ${rel}`);
      else walk(abs, rel);
    } else if (dirent.isFile()) {
      if (rel === manifestName) continue;
      inventory.set(rel, sha256(abs));
    } else fail(`Unsupported filesystem entry: ${rel}`);
  }
}
walk(root);

for (const [rel, expected] of entries) {
  const actual = inventory.get(rel);
  if (!actual) fail(`Manifest file missing: ${rel}`);
  else if (actual !== expected) fail(`Hash mismatch: ${rel}`);
}
for (const rel of inventory.keys()) if (!entries.has(rel)) fail(`Untracked file: ${rel}`);

const result = {
  pass: failures.length === 0,
  status: failures.length ? 'FAILED' : 'VERIFIED',
  mode,
  manifest_entries: entries.size,
  inventory_entries: inventory.size,
  exact_inventory: entries.size === inventory.size,
  failures,
};
console.log(JSON.stringify(result, null, 2));
if (failures.length) process.exit(1);
