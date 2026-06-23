import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';

const sourceRoot = process.cwd();
const testScript = 'scripts/test-ux10e2-isolation.mjs';
const mutations = [
  {
    id: 'akbi_guard_removed_from_reduced_motion_branch',
    file: 'src/components/FlashcardDeck.tsx',
    from: 'return isAkbiWorkspace && prefersReducedMotion;',
    to: 'return prefersReducedMotion;',
  },
  {
    id: 'generic_media_observer_guard_removed',
    file: 'src/components/FlashcardDeck.tsx',
    from: "    if (!isAkbiWorkspace) {\n      setPrefersReducedMotion(false);\n      return undefined;\n    }",
    to: "    if (false) {\n      setPrefersReducedMotion(false);\n      return undefined;\n    }",
  },
  {
    id: 'generic_state_initialization_guard_removed',
    file: 'src/components/FlashcardDeck.tsx',
    from: "    isAkbiWorkspace\n    && typeof window !== 'undefined'",
    to: "    typeof window !== 'undefined'",
  },
];

function copyProject(destination) {
  const rootFiles = new Set([
    'package.json', 'index.html', 'postcss.config.js', 'tailwind.config.js',
    'tsconfig.json', 'tsconfig.node.json', 'vite.config.ts',
  ]);
  fs.cpSync(sourceRoot, destination, {
    recursive: true,
    filter(source) {
      const relative = path.relative(sourceRoot, source);
      if (!relative) return true;
      const [top] = relative.split(path.sep);
      if (top === 'src') return true;
      if (top === 'scripts') return relative === 'scripts' || relative === testScript;
      return !relative.includes(path.sep) && rootFiles.has(relative);
    },
  });
  const sharedModules = path.join(sourceRoot, 'node_modules');
  if (fs.existsSync(sharedModules)) fs.symlinkSync(fs.realpathSync(sharedModules), path.join(destination, 'node_modules'), 'dir');
}

function executeMutation(tempRoot) {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [path.join(tempRoot, testScript)], {
      cwd: tempRoot,
      env: { ...process.env, UX10E2_ROOT: tempRoot, UX10E2_DYNAMIC_ONLY: '1' },
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let stdout = '';
    let stderr = '';
    let timedOut = false;
    child.stdout.setEncoding('utf8');
    child.stderr.setEncoding('utf8');
    child.stdout.on('data', (chunk) => { stdout += chunk; });
    child.stderr.on('data', (chunk) => { stderr += chunk; });
    const timer = setTimeout(() => { timedOut = true; child.kill('SIGKILL'); }, 90_000);
    child.on('error', (error) => {
      clearTimeout(timer);
      resolve({ status: null, signal: null, timedOut, stdout, stderr: `${stderr}\n${error.stack ?? error.message}` });
    });
    child.on('close', (status, signal) => {
      clearTimeout(timer);
      resolve({ status, signal, timedOut, stdout, stderr });
    });
  });
}

async function runMutation(mutation) {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), `ux10e2-${mutation.id}-`));
  try {
    copyProject(tempRoot);
    const target = path.join(tempRoot, mutation.file);
    const source = fs.readFileSync(target, 'utf8');
    const occurrences = source.split(mutation.from).length - 1;
    if (occurrences !== 1) throw new Error(`Mutation fixture count for ${mutation.id}: expected 1, found ${occurrences}`);
    fs.writeFileSync(target, source.replace(mutation.from, mutation.to));
    const run = await executeMutation(tempRoot);
    let assertionResult = null;
    try { assertionResult = JSON.parse(run.stdout.trim()); } catch { assertionResult = null; }
    const assertionFailure = assertionResult?.pass === false && Array.isArray(assertionResult.failures) && assertionResult.failures.length > 0;
    const killed = run.status !== 0 && !run.signal && !run.timedOut && assertionFailure;
    return {
      id: mutation.id,
      killed,
      exitCode: run.status,
      signal: run.signal,
      timedOut: run.timedOut,
      assertionFailure,
      failures: assertionResult?.failures ?? [],
      outputTail: `${run.stdout}\n${run.stderr}`.trim().slice(-1800),
    };
  } catch (error) {
    return {
      id: mutation.id,
      killed: false,
      exitCode: null,
      signal: null,
      timedOut: false,
      assertionFailure: false,
      failures: [`Infrastructure failure: ${error instanceof Error ? error.message : String(error)}`],
      outputTail: error instanceof Error ? error.stack ?? error.message : String(error),
    };
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
}

const evidence = [];
for (const mutation of mutations) evidence.push(await runMutation(mutation));
const survivors = evidence.filter((entry) => !entry.killed);
const result = {
  pass: survivors.length === 0,
  total: evidence.length,
  killed: evidence.length - survivors.length,
  timeoutOrSignal: evidence.filter((entry) => entry.timedOut || entry.signal).length,
  survivors,
  evidence,
};
console.log(JSON.stringify(result, null, 2));
if (!result.pass) process.exit(1);
