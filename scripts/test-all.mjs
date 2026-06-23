import { spawn } from 'node:child_process';
import process from 'node:process';

const child = spawn(process.execPath, ['scripts/test-ci-bounded.mjs'], {
  cwd: process.cwd(),
  env: { ...process.env, CI_TEST_MODE: process.env.CI_TEST_MODE ?? 'standard' },
  stdio: 'inherit',
});

child.on('exit', (code, signal) => {
  if (signal) {
    console.error(`test-all.mjs terminated by ${signal}`);
    process.exit(1);
  }
  process.exit(code ?? 1);
});
child.on('error', (error) => {
  console.error(error.stack ?? error.message);
  process.exit(1);
});
