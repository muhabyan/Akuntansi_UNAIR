import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { spawnSync } from 'node:child_process';

const sourceRoot = process.cwd();
const testScript = 'scripts/test-ux10c1-state-persistence.mjs';
const mutations = [
  {
    id: 'owner_resets_set_on_primary_navigation',
    file: 'src/components/course/CourseLayout.tsx',
    from: `onPrimaryTabChange={(tab) => {\n          if (tab === 'materi') switchTab(akbiMaterialPhase);\n          else switchTab(tab);\n        }}`,
    to: `onPrimaryTabChange={(tab) => {\n          setAkbiSimulationSetId('uts');\n          if (tab === 'materi') switchTab(akbiMaterialPhase);\n          else switchTab(tab);\n        }}`,
  },
  {
    id: 'owner_value_hardcoded_to_uts',
    file: 'src/components/course/CourseLayout.tsx',
    from: 'simulationSetId={akbiSimulationSetId}',
    to: 'simulationSetId="uts"',
  },
  {
    id: 'quizview_ignores_controlled_set',
    file: 'src/components/QuizView.tsx',
    from: 'const effectiveSetId = validControlledSetId ?? activeSetId;',
    to: 'const effectiveSetId = activeSetId;',
  },
  {
    id: 'quizcard_drops_change_callback',
    file: 'src/components/course/QuizCard.tsx',
    from: 'onSelectedSetIdChange={onSelectedSetIdChange}',
    to: 'onSelectedSetIdChange={undefined}',
  },
  {
    id: 'shell_drops_controlled_set_value',
    file: 'src/components/course/AkbiCourseDashboardShell.tsx',
    from: 'selectedSetId={simulationSetId}',
    to: 'selectedSetId={undefined}',
  },
];

function copyProject(destination) {
  fs.cpSync(sourceRoot, destination, {
    recursive: true,
    filter(source) {
      const relative = path.relative(sourceRoot, source);
      return relative !== 'node_modules' &&
        !relative.startsWith(`node_modules${path.sep}`) &&
        relative !== 'dist' &&
        !relative.startsWith(`dist${path.sep}`);
    },
  });
  const sharedModules = path.join(sourceRoot, 'node_modules');
  if (fs.existsSync(sharedModules)) {
    fs.symlinkSync(fs.realpathSync(sharedModules), path.join(destination, 'node_modules'), 'dir');
  }
}

const evidence = [];
for (const mutation of mutations) {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), `ux10c1-${mutation.id}-`));
  try {
    copyProject(tempRoot);
    const target = path.join(tempRoot, mutation.file);
    const source = fs.readFileSync(target, 'utf8');
    if (!source.includes(mutation.from)) throw new Error(`Mutation fixture missing for ${mutation.id}`);
    fs.writeFileSync(target, source.replace(mutation.from, mutation.to));

    const run = spawnSync(process.execPath, [path.join(tempRoot, testScript)], {
      cwd: tempRoot,
      env: {
        ...process.env,
        UX10C1_ROOT: tempRoot,
        UX10C1_DYNAMIC_ONLY: '1',
      },
      encoding: 'utf8',
      timeout: 120_000,
    });
    const timedOut = run.error?.code === 'ETIMEDOUT';
    let assertionResult = null;
    try {
      assertionResult = JSON.parse(run.stdout.trim());
    } catch {
      assertionResult = null;
    }
    const assertionFailure = assertionResult?.pass === false &&
      Array.isArray(assertionResult.failures) && assertionResult.failures.length > 0;
    const killed = run.status !== 0 && !run.signal && !timedOut && assertionFailure;
    evidence.push({
      id: mutation.id,
      killed,
      exitCode: run.status,
      signal: run.signal,
      timedOut,
      assertionFailure,
      failures: assertionResult?.failures ?? [],
      outputTail: `${run.stdout}\n${run.stderr}`.trim().slice(-1800),
    });
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
}

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
