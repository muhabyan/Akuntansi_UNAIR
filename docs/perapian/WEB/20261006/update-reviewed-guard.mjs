import fs from 'node:fs';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
const hash = data => createHash('sha256').update(data).digest('hex');
const fixture = 'scripts/fixtures/mnu307/protected-files.json';
const original = JSON.parse(fs.readFileSync(fixture, 'utf8'));
const allowed = ['src/components/course/CourseBlockCard.tsx','src/components/course/CourseLayout.tsx','src/components/course/LayeredBlocks.tsx','src/components/course/ReportTable.tsx','src/types.ts'];
const log = [];
for (const p of allowed) {
  const before = execFileSync('git', ['show', `origin/main:${p}`]);
  const after = fs.readFileSync(p);
  assert.ok(Object.values(original[p]).includes(hash(before)), `frozen main hash must match original guard: ${p}`);
  if (p.endsWith('CourseBlockCard.tsx')) {
    const figures = s => s.toString('utf8').replace(/\r\n/g,'\n').split("    case 'figure':")[1].split("    case 'solution-reveal':")[0];
    assert.equal(figures(before), figures(after), 'the complete figure renderer is byte-identical after EOL normalization');
  }
  if (p.endsWith('CourseLayout.tsx')) {
    const identity = s => s.toString('utf8').replace(/\r\n/g,'\n').split('// Reset transient answers/drafts')[1].split('reading={currentReading}')[0].trim();
    assert.equal(identity(before), identity(after), 'reading/review/course key from #47 remains exactly intact');
  }
  const next = { worktree: hash(after), repository: hash(after.toString('utf8').replace(/\r\n/g,'\n')) };
  log.push({file:p, before:original[p], after:next, reason:p.endsWith('types.ts')?'Optional presentation-only table title field':'Reviewed title/phone-table presentation diff; no figure or lifecycle changes'});
  original[p] = next;
}
// A merge can produce a CRLF variant absent from a historic two-hash fixture.
// Restore the already-approved LF bytes; do not broaden the academic-data guard.
for (let tm=1;tm<=6;tm++) {
  const p=`src/data/manstrat/modules/tm${tm}.ts`, bytes=fs.readFileSync(p), lf=bytes.toString('utf8').replace(/\r\n/g,'\n');
  if (!Object.values(original[p]).includes(hash(bytes))) {
    assert.ok(Object.values(original[p]).includes(hash(lf)), `only checkout EOL conversion may explain ${p}`);
    fs.writeFileSync(p,lf);
    log.push({file:p,action:'Restore existing guarded LF checkout bytes; no guard entry or academic string changed',beforeSha256:hash(bytes),afterSha256:hash(lf)});
  }
}
fs.writeFileSync('docs/perapian/WEB/20261006/guard-before-after.json',JSON.stringify(log,null,2));
fs.writeFileSync(fixture, JSON.stringify(original,null,2)+'\n');
console.log(`Updated exactly ${allowed.length} reviewed entries; restored guarded academic EOL bytes where needed`);
