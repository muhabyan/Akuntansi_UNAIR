import { spawnSync } from 'node:child_process';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const timeoutMs = Number(process.env.CI_TEST_TIMEOUT_MS ?? 120_000);

const standardTasks = [
  ['data_validation', 'scripts/validate-data.mjs'],
  ['uiux_course_consistency', 'scripts/test-uiux-course-consistency.mjs'],
  ['flashcard_behavior', 'scripts/test-flashcard-behavior.mjs'],
  ['pte_bank_validation', 'scripts/validate-pte-bank.mjs'],
  ['pte_bank_alignment', 'scripts/validate-pte-bank-alignment.mjs'],
  ['pte_bank_registry', 'scripts/validate-pte-bank-registry.mjs'],
  ['pte_bank_behavior', 'scripts/test-pte-bank-behavior.mjs'],
  ['pte_simulator_validation', 'scripts/validate-pte-simulator.mjs'],
  ['pte_simulator_integrity', 'scripts/test-pte-simulator-integrity.mjs'],
  ['ux10a_foundation', 'scripts/test-ux10a-foundation.mjs'],
  ['ux10a_cascade', 'scripts/test-ux10a-cascade.mjs'],
  ['ux10b_catalog_source', 'scripts/test-ux10b-catalog-source-contract.mjs'],
  ['stage1_home_experience', 'scripts/test-stage1-home-experience.mjs'],
  ['stage2_home_refinement', 'scripts/test-stage2-home-refinement.mjs'],
  ['stage3_home_continuity', 'scripts/test-stage3-home-continuity.mjs'],
  ['stage4_home_pathway', 'scripts/test-stage4-home-pathway.mjs'],
  ['stage5_home_locator', 'scripts/test-stage5-home-locator.mjs'],
  ['stage6_home_consolidation', 'scripts/test-stage6-home-consolidation.mjs'],
  ['stage7_final_handoff', 'scripts/test-stage7-final-handoff.mjs'],
  ['stage8_visual_polish', 'scripts/test-stage8-visual-polish.mjs'],
  ['stage9_navbar_scroll_reveal', 'scripts/test-stage9-navbar-scroll-reveal.mjs'],
];

const extendedTasks = [
  ['data_validation', 'scripts/validate-data.mjs'],
  ['flashcard_behavior', 'scripts/test-flashcard-behavior.mjs'],
  ['e2e_policy_detection', 'scripts/test-e2e-policy-detection.mjs'],
  ['pte_bank_validation', 'scripts/validate-pte-bank.mjs'],
  ['pte_bank_alignment', 'scripts/validate-pte-bank-alignment.mjs'],
  ['pte_bank_registry', 'scripts/validate-pte-bank-registry.mjs'],
  ['pte_bank_competencies', 'scripts/validate-pte-bank-competencies.mjs'],
  ['pte_bank_graphs', 'scripts/validate-pte-bank-graphs.mjs'],
  ['pte_bank_behavior', 'scripts/test-pte-bank-behavior.mjs'],
  ['pte_bank_graph_renderer_dom', 'scripts/test-pte-bank-graph-renderer-dom.mjs'],
  ['pte_bank_interactions', 'scripts/test-pte-bank-interactions.mjs'],
  ['pte_bank_dom_focus', 'scripts/test-pte-bank-dom-focus.mjs'],
  ['pte_simulator_validation', 'scripts/validate-pte-simulator.mjs'],
  ['pte_simulator_integrity', 'scripts/test-pte-simulator-integrity.mjs'],
  ['pte_simulator_dom', 'scripts/test-pte-simulator-dom.mjs'],
  ['ux10a_foundation', 'scripts/test-ux10a-foundation.mjs'],
  ['ux10a_cascade', 'scripts/test-ux10a-cascade.mjs'],
  ['ux10b_catalog_source', 'scripts/test-ux10b-catalog-source-contract.mjs'],
  ['stage1_home_experience', 'scripts/test-stage1-home-experience.mjs'],
  ['stage2_home_refinement', 'scripts/test-stage2-home-refinement.mjs'],
  ['stage3_home_continuity', 'scripts/test-stage3-home-continuity.mjs'],
  ['stage4_home_pathway', 'scripts/test-stage4-home-pathway.mjs'],
  ['stage5_home_locator', 'scripts/test-stage5-home-locator.mjs'],
  ['stage6_home_consolidation', 'scripts/test-stage6-home-consolidation.mjs'],
  ['stage7_final_handoff', 'scripts/test-stage7-final-handoff.mjs'],
  ['stage8_visual_polish', 'scripts/test-stage8-visual-polish.mjs'],
  ['stage9_navbar_scroll_reveal', 'scripts/test-stage9-navbar-scroll-reveal.mjs'],
  ['ux10c1_state_persistence', 'scripts/test-ux10c1-state-persistence.mjs'],
  ['ux10d1_focus', 'scripts/test-ux10d1-focus.mjs'],
  ['ux10d2_focus_stability', 'scripts/test-ux10d2-focus-stability.mjs'],
  ['ux10e1_findings', 'scripts/test-ux10e1-findings.mjs'],
];

const mutationTasks = [
  ['pte_bank_competency_mutations', 'scripts/test-pte-bank-competency-mutations.mjs'],
  ['pte_bank_graph_mutations', 'scripts/test-pte-bank-graph-mutations.mjs'],
  ['pte_bank_graph_renderer_mutations', 'scripts/test-pte-bank-graph-renderer-mutations.mjs'],
  ['pte_bank_focus_mutation', 'scripts/test-pte-bank-focus-mutation.mjs'],
  ['pte_simulator_mutations', 'scripts/test-pte-simulator-mutations.mjs'],
  ['ux10a_mutations', 'scripts/test-ux10a-mutations.mjs'],
  ['ux10b_mutations', 'scripts/test-ux10b-mutations.mjs'],
  ['ux10c_mutations', 'scripts/test-ux10c-mutation-matrix.mjs'],
  ['ux10c1_mutations', 'scripts/test-ux10c1-mutations.mjs'],
  ['ux10d_mutations', 'scripts/test-ux10d-mutations.mjs'],
  ['ux10d1_mutations', 'scripts/test-ux10d1-mutations.mjs'],
  ['ux10d2_mutations', 'scripts/test-ux10d2-mutations.mjs'],
  ['ux10e_mutations', 'scripts/test-ux10e-mutations.mjs'],
  ['ux10e1_mutations', 'scripts/test-ux10e1-mutations.mjs'],
  ['ux10e2_mutations', 'scripts/test-ux10e2-mutations.mjs'],
];

const mode = process.env.CI_TEST_MODE ?? 'standard';
const tasks = mode === 'full'
  ? [...extendedTasks, ...mutationTasks]
  : mode === 'extended'
    ? extendedTasks
    : mode === 'mutations'
      ? mutationTasks
      : standardTasks;

function trimOutput(value, size = 4000) {
  const text = String(value ?? '').trim();
  return text.length > size ? text.slice(-size) : text;
}

function runTask([id, script, extraEnv = {}]) {
  const start = Date.now();
  const result = spawnSync(process.execPath, [path.join(root, script)], {
    cwd: root,
    env: { ...process.env, ...extraEnv },
    timeout: timeoutMs,
    killSignal: 'SIGKILL',
    stdio: 'ignore',
  });
  const durationMs = Date.now() - start;
  const timedOut = result.error?.code === 'ETIMEDOUT' || result.signal === 'SIGTERM' || result.signal === 'SIGKILL';
  return {
    id,
    script,
    pass: result.status === 0 && !timedOut && !result.error,
    exitCode: result.status,
    signal: result.signal,
    timedOut,
    durationMs,
    stdoutTail: '',
    stderrTail: trimOutput(result.error ? result.error.stack ?? result.error.message : ''),
  };
}

const runStartedAt = Date.now();
const results = [];
for (const task of tasks) {
  const result = runTask(task);
  results.push(result);
  const seconds = (result.durationMs / 1000).toFixed(2);
  console.log(`${result.pass ? 'PASS' : 'FAIL'} ${result.id} ${seconds}s`);
  if (!result.pass) {
    if (result.stdoutTail) console.log(`--- ${result.id} stdout tail ---\n${result.stdoutTail}`);
    if (result.stderrTail) console.error(`--- ${result.id} stderr tail ---\n${result.stderrTail}`);
    break;
  }
}

const failed = results.filter((result) => !result.pass);
const summary = {
  pass: failed.length === 0,
  total: results.length,
  passed: results.length - failed.length,
  failed: failed.length,
  concurrency: 1,
  timeoutMs,
  mode,
  wallDurationMs: Date.now() - runStartedAt,
  maxTaskDurationMs: results.reduce((max, result) => Math.max(max, result.durationMs), 0),
  failures: failed.map(({ id, script, exitCode, signal, timedOut, durationMs, stdoutTail, stderrTail }) => ({
    id, script, exitCode, signal, timedOut, durationMs, stdoutTail, stderrTail,
  })),
};
console.log(JSON.stringify(summary, null, 2));
if (failed.length) {
  process.exit(1);
}

// Force a clean successful termination for CI runners. Some imported test helpers
// can leave timers or jsdom handles behind even after all child tasks pass.
process.exit(0);
