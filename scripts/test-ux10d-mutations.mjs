import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { spawn } from 'node:child_process';

const sourceRoot = process.cwd();
const testScript = 'scripts/test-ux10d-reading.mjs';
const mutations = [
  {
    id: 'akbi_gate_removed',
    mode: 'static',
    file: 'src/components/course/CourseLayout.tsx',
    from: "if (course.code === 'AKM201' && currentReading && !isCurrentSimulationReading)",
    to: 'if (currentReading && !isCurrentSimulationReading)',
  },
  {
    id: 'simulation_guard_removed',
    mode: 'static',
    file: 'src/components/course/CourseLayout.tsx',
    from: "if (course.code === 'AKM201' && currentReading && !isCurrentSimulationReading)",
    to: "if (course.code === 'AKM201' && currentReading)",
  },
  {
    id: 'wide_grid_collapsed',
    mode: 'static',
    file: 'src/styles/ux-v2-reading.css',
    from: 'grid-template-columns: 210px minmax(0, 760px) 180px;',
    to: 'grid-template-columns: minmax(0, 760px);',
  },
  {
    id: 'reading_selector_unscoped',
    mode: 'static',
    file: 'src/styles/ux-v2-reading.css',
    from: '.ux-v2--akbi .akbi-reading-shell {',
    to: '.akbi-reading-shell {',
  },
  {
    id: 'decorative_gradient_added',
    mode: 'static',
    file: 'src/styles/ux-v2-reading.css',
    from: 'background: var(--ux-surface-raised);',
    to: 'background: linear-gradient(135deg, var(--ux-surface-raised), var(--ux-accent-soft));',
  },
  {
    id: 'escape_close_removed',
    mode: 'dynamic',
    file: 'src/components/course/AkbiReadingShell.tsx',
    from: "restoreFocusRef.current = true;\n        onCloseRef.current();\n        return;",
    to: "restoreFocusRef.current = true;\n        return;",
  },
  {
    id: 'drawer_scroll_lock_removed',
    mode: 'dynamic',
    file: 'src/components/course/AkbiReadingShell.tsx',
    from: "document.body.style.overflow = 'hidden';",
    to: "document.body.style.overflow = bodyOverflow;",
  },
  {
    id: 'drawer_focus_restore_removed',
    mode: 'dynamic',
    file: 'src/components/course/AkbiReadingShell.tsx',
    from: 'if (restoreFocusRef.current) trigger?.focus();',
    to: 'if (restoreFocusRef.current) panelRef.current?.focus();',
  },
  {
    id: 'anchor_focus_removed',
    mode: 'dynamic',
    file: 'src/components/course/AkbiReadingShell.tsx',
    from: 'target.focus({ preventScroll: true });',
    to: 'target.blur();',
  },
  {
    id: 'editorial_region_prop_dropped',
    mode: 'dynamic',
    file: 'src/components/course/AkbiReadingShell.tsx',
    from: '<div className={className} data-callout-variant={calloutVariant}>\n      <CourseBlockCard block={block} enableEditorialReading />',
    to: '<div className={className} data-callout-variant={calloutVariant}>\n      <CourseBlockCard block={block} />',
  },
  {
    id: 'toc_drawer_stays_open_after_selection',
    mode: 'dynamic',
    file: 'src/components/course/AkbiReadingShell.tsx',
    from: "restoreFocusRef.current = false;\n    setDrawer(null);\n    setActiveHeadingId(id);",
    to: "restoreFocusRef.current = false;\n    setActiveHeadingId(id);",
  },
  {
    id: 'completion_callback_dropped',
    mode: 'dynamic',
    file: 'src/components/course/AkbiReadingShell.tsx',
    from: 'className={done ? \'is-done\' : \'\'} onClick={onToggleDone}',
    to: 'className={done ? \'is-done\' : \'\'} onClick={() => {}}',
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
      if (top === 'scripts') return relative === 'scripts' || relative === testScript;
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
        UX10D_ROOT: tempRoot,
        ...(mutation.mode === 'static' ? { UX10D_STATIC_ONLY: '1' } : { UX10D_DYNAMIC_ONLY: '1' }),
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
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), `ux10d-${mutation.id}-`));
  try {
    copyProject(tempRoot);
    const target = path.join(tempRoot, mutation.file);
    const source = fs.readFileSync(target, 'utf8');
    if (!source.includes(mutation.from)) throw new Error(`Mutation fixture missing for ${mutation.id}`);
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
