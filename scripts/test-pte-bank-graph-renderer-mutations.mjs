import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { runPteGraphRendererDomProbe } from './pte-bank-graph-renderer-dom-contract.mjs';

const projectRoot = process.cwd();
const sourceRelative = 'src/components/PteBankQuestionCard.tsx';
const originalSourcePath = path.join(projectRoot, sourceRelative);
const original = fs.readFileSync(originalSourcePath, 'utf8');
const firstGraphId = 'PTE-BANK-UTS-009';
const cases = [
  {
    name: 'panel-hidden-attribute',
    expected: 'RENDER_PANEL_HIDDEN',
    mutate: (source) => source.replace('<div data-testid="pte-graph-panel"', '<div hidden data-testid="pte-graph-panel"'),
  },
  {
    name: 'panel-hidden-class',
    expected: 'RENDER_PANEL_HIDDEN',
    mutate: (source) => source.replace('className="rounded-2xl border border-sky-400/20', 'className="hidden rounded-2xl border border-sky-400/20'),
  },
  {
    name: 'panel-invisible-class',
    expected: 'RENDER_PANEL_HIDDEN',
    mutate: (source) => source.replace('className="rounded-2xl border border-sky-400/20', 'className="invisible rounded-2xl border border-sky-400/20'),
  },
  {
    name: 'panel-opacity-zero-class',
    expected: 'RENDER_PANEL_HIDDEN',
    mutate: (source) => source.replace('className="rounded-2xl border border-sky-400/20', 'className="opacity-0 rounded-2xl border border-sky-400/20'),
  },
  {
    name: 'panel-inline-display-none',
    expected: 'RENDER_PANEL_HIDDEN',
    mutate: (source) => source.replace('<div data-testid="pte-graph-panel"', '<div data-testid="pte-graph-panel" style={{ display: \'none\' }}'),
  },
  {
    name: 'panel-inline-visibility-hidden',
    expected: 'RENDER_PANEL_HIDDEN',
    mutate: (source) => source.replace('<div data-testid="pte-graph-panel"', '<div data-testid="pte-graph-panel" style={{ visibility: \'hidden\' }}'),
  },
  {
    name: 'panel-inline-opacity-zero',
    expected: 'RENDER_PANEL_HIDDEN',
    mutate: (source) => source.replace('<div data-testid="pte-graph-panel"', '<div data-testid="pte-graph-panel" style={{ opacity: 0 }}'),
  },
  {
    name: 'host-hidden-class',
    expected: 'RENDER_HOST_HIDDEN',
    mutate: (source) => source.replace('className="mx-auto max-w-2xl overflow-x-auto"', 'className="hidden mx-auto max-w-2xl overflow-x-auto"'),
  },
  {
    name: 'panel-removed',
    expected: 'RENDER_PANEL_MISSING',
    mutate: (source) => source.replace("{question.kind === 'graph' && <GraphPanel question={question} />}", "{false && <GraphPanel question={question} />}")
  },
  {
    name: 'all-but-first-removed',
    expected: 'RENDER_PANEL_MISSING',
    minimumCount: 24,
    mutate: (source) => source.replace(
      'export function GraphPanel({ question }: { question: PteBankGraphQuestion }) {\n  return (',
      `export function GraphPanel({ question }: { question: PteBankGraphQuestion }) {\n  if (question.id !== '${firstGraphId}') return null;\n  return (`,
    ),
  },
];

function copyProjectToTemporaryRoot() {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'pte-graph-renderer-mutation-'));
  fs.cpSync(projectRoot, tempRoot, {
    recursive: true,
    filter: (source) => {
      const relative = path.relative(projectRoot, source);
      if (!relative) return true;
      const top = relative.split(path.sep)[0];
      return top !== 'node_modules' && top !== 'dist' && top !== '.git';
    },
  });
  fs.symlinkSync(path.join(projectRoot, 'node_modules'), path.join(tempRoot, 'node_modules'), 'dir');
  return tempRoot;
}

const failures = [];
const tempRoot = copyProjectToTemporaryRoot();
const tempSourcePath = path.join(tempRoot, sourceRelative);
try {
  for (const testCase of cases) {
    const mutated = testCase.mutate(original);
    if (mutated === original) throw new Error(`${testCase.name}: source mutation tidak diterapkan`);
    fs.writeFileSync(tempSourcePath, mutated);
    const issues = await runPteGraphRendererDomProbe({
      projectRoot: tempRoot,
      componentModule: `/src/components/PteBankQuestionCard.tsx?mutation=${testCase.name}`,
    });
    const matching = issues.filter((item) => item.code === testCase.expected);
    if (matching.length < (testCase.minimumCount ?? 1)) {
      failures.push(`${testCase.name}: expected ${testCase.expected} x${testCase.minimumCount ?? 1}, got ${issues.map((item) => item.code).join(', ') || 'PASS'}`);
    }
    fs.writeFileSync(tempSourcePath, original);
  }
} finally {
  fs.rmSync(tempRoot, { recursive: true, force: true });
}

if (fs.readFileSync(originalSourcePath, 'utf8') !== original) {
  failures.push('source produksi berubah selama mutation test');
}
if (failures.length) {
  console.error(`PTE graph renderer mutation test failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log(`PTE graph renderer mutation test passed: ${cases.length}/${cases.length} all-graph CSS visibility/removal mutations rejected in an isolated temporary root.`);
