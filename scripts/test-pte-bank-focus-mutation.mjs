import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = process.cwd();
const sourcePath = path.join(root, 'src/components/PteBankSoalTab.tsx');
const source = fs.readFileSync(sourcePath, 'utf8');
const marker = 'resultsSummaryRef.current?.focus();';
const markerCount = source.split(marker).length - 1;
if (markerCount !== 1) {
  console.error(`PTE focus mutation test setup failed: expected one focus marker, found ${markerCount}`);
  process.exitCode = 1;
} else {
  const mutantName = `.PteBankSoalTab.focus-mutant-${process.pid}-${Date.now()}.tsx`;
  const mutantPath = path.join(root, 'src/components', mutantName);
  const mutantModule = `/src/components/${mutantName}`;
  const testScript = fileURLToPath(new URL('./test-pte-bank-dom-focus.mjs', import.meta.url));

  try {
    fs.writeFileSync(mutantPath, source.replace(marker, 'void resultsSummaryRef.current;'));
    const result = spawnSync(process.execPath, [testScript], {
      cwd: root,
      env: { ...process.env, PTE_FOCUS_COMPONENT_MODULE: mutantModule },
      encoding: 'utf8',
      timeout: 120000,
    });
    const output = `${result.stdout ?? ''}\n${result.stderr ?? ''}`;
    if (result.error) {
      console.error(`PTE focus mutation test runner error: ${result.error.message}`);
      process.exitCode = 1;
    } else if (result.status === 0) {
      console.error('PTE focus mutation test failed: mutant survived after .focus() was disabled.');
      process.exitCode = 1;
    } else if (!output.includes('Result summary did not receive DOM focus after page navigation')) {
      console.error('PTE focus mutation test failed for an unexpected reason.');
      console.error(output.trim());
      process.exitCode = 1;
    } else {
      console.log('PTE focus mutation test passed: disabling .focus() is detected and fails closed.');
    }
  } finally {
    fs.rmSync(mutantPath, { force: true });
  }
}
