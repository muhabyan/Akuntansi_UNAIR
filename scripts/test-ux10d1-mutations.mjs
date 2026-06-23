import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { spawn } from 'node:child_process';

const sourceRoot = process.cwd();
const testScript = 'scripts/test-ux10d1-focus.mjs';
const browserScript = 'scripts/test-ux10d-browser.mjs';
const mutations = [
  {
    id: 'initial_backward_panel_boundary_removed',
    mode: 'dynamic',
    file: 'src/components/course/AkbiReadingShell.tsx',
    from: "if (event.shiftKey && (!focusIsInside || activeElement === currentPanel || activeElement === first))",
    to: "if (event.shiftKey && (!focusIsInside || activeElement === first))",
  },
  {
    id: 'first_control_backward_boundary_removed',
    mode: 'dynamic',
    file: 'src/components/course/AkbiReadingShell.tsx',
    from: "if (event.shiftKey && (!focusIsInside || activeElement === currentPanel || activeElement === first))",
    to: "if (event.shiftKey && (!focusIsInside || activeElement === currentPanel))",
  },
  {
    id: 'initial_forward_panel_boundary_removed',
    mode: 'dynamic',
    file: 'src/components/course/AkbiReadingShell.tsx',
    from: "} else if (!event.shiftKey && (!focusIsInside || activeElement === currentPanel || activeElement === last))",
    to: "} else if (!event.shiftKey && (!focusIsInside || activeElement === last))",
  },
  {
    id: 'last_control_forward_boundary_removed',
    mode: 'dynamic',
    file: 'src/components/course/AkbiReadingShell.tsx',
    from: "} else if (!event.shiftKey && (!focusIsInside || activeElement === currentPanel || activeElement === last))",
    to: "} else if (!event.shiftKey && (!focusIsInside || activeElement === currentPanel))",
  },
  {
    id: 'programmatic_focus_containment_removed',
    mode: 'dynamic',
    file: 'src/components/course/AkbiReadingShell.tsx',
    from: "document.addEventListener('focusin', onFocusIn);",
    to: "void onFocusIn;",
  },
  {
    id: 'backdrop_returned_to_tab_order',
    mode: 'dynamic',
    file: 'src/components/course/AkbiReadingShell.tsx',
    from: "tabIndex={-1}\n        onClick={() => {",
    to: "tabIndex={0}\n        onClick={() => {",
  },
  {
    id: 'browser_toc_selector_regressed',
    mode: 'static',
    file: 'scripts/test-ux10d-browser.mjs',
    from: "button[aria-controls=\"akbi-reading-toc-drawer\"]",
    to: "[data-testid=\"toc-trigger\"]",
  },
  {
    id: 'browser_utility_selector_regressed',
    mode: 'static',
    file: 'scripts/test-ux10d-browser.mjs',
    from: "button[aria-controls=\"akbi-reading-utility-drawer\"]",
    to: "[data-testid=\"utility-trigger\"]",
  },
];

function copyProject(destination) {
  const rootFiles = new Set([
    'package.json',
    'index.html',
    'postcss.config.js',
    'tailwind.config.js',
    'tsconfig.json',
    'tsconfig.node.json',
    'vite.config.ts',
  ]);
  fs.cpSync(sourceRoot, destination, {
    recursive: true,
    filter(source) {
      const relative = path.relative(sourceRoot, source);
      if (!relative) return true;
      const [top] = relative.split(path.sep);
      if (top === 'src') return true;
      if (top === 'scripts') return relative === 'scripts' || relative === testScript || relative === browserScript;
      return !relative.includes(path.sep) && rootFiles.has(relative);
    },
  });
  const sharedModules = path.join(sourceRoot, 'node_modules');
  if (fs.existsSync(sharedModules)) fs.symlinkSync(fs.realpathSync(sharedModules), path.join(destination, 'node_modules'), 'dir');
}

function executeMutation(tempRoot, mutation) {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [path.join(tempRoot, testScript)], {
      cwd: tempRoot,
      env: {
        ...process.env,
        UX10D1_ROOT: tempRoot,
        ...(mutation.mode === 'static' ? { UX10D1_STATIC_ONLY: '1' } : { UX10D1_DYNAMIC_ONLY: '1' }),
      },
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let stdout = '';
    let stderr = '';
    let timedOut = false;
    child.stdout.setEncoding('utf8');
    child.stderr.setEncoding('utf8');
    child.stdout.on('data', (chunk) => { stdout += chunk; });
    child.stderr.on('data', (chunk) => { stderr += chunk; });
    const timer = setTimeout(() => {
      timedOut = true;
      child.kill('SIGKILL');
    }, 60_000);
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
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), `ux10d1-${mutation.id}-`));
  try {
    copyProject(tempRoot);
    const target = path.join(tempRoot, mutation.file);
    const source = fs.readFileSync(target, 'utf8');
    const occurrences = source.split(mutation.from).length - 1;
    if (occurrences !== 1) throw new Error(`Mutation fixture count for ${mutation.id}: expected 1, found ${occurrences}`);
    fs.writeFileSync(target, source.replace(mutation.from, mutation.to));
    const run = await executeMutation(tempRoot, mutation);
    let assertionResult = null;
    try { assertionResult = JSON.parse(run.stdout.trim()); } catch { assertionResult = null; }
    const assertionFailure = assertionResult?.pass === false && Array.isArray(assertionResult.failures) && assertionResult.failures.length > 0;
    const killed = run.status !== 0 && !run.signal && !run.timedOut && assertionFailure;
    return {
      id: mutation.id,
      mode: mutation.mode,
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
      mode: mutation.mode,
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

const evidence = new Array(mutations.length);
let cursor = 0;
async function worker() {
  while (true) {
    const index = cursor;
    cursor += 1;
    if (index >= mutations.length) return;
    evidence[index] = await runMutation(mutations[index]);
  }
}
await Promise.all(Array.from({ length: 2 }, () => worker()));

const survivors = evidence.filter((entry) => !entry.killed);
const result = {
  pass: survivors.length === 0,
  total: evidence.length,
  killed: evidence.length - survivors.length,
  timeoutOrSignal: evidence.filter((entry) => entry.timedOut || entry.signal).length,
  concurrency: 2,
  survivors,
  evidence,
};
console.log(JSON.stringify(result, null, 2));
if (!result.pass) process.exit(1);
