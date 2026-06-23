import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.env.UX10C_ROOT ? path.resolve(process.env.UX10C_ROOT) : process.cwd();
const worker = path.join(root, 'scripts/test-ux10c-mutations.mjs');
const workerSource = fs.readFileSync(worker, 'utf8');
const records = [...workerSource.matchAll(/id: '([^']+)'[\s\S]*?dynamic: (true|false)/g)]
  .map((match) => ({ id: match[1], dynamic: match[2] === 'true' }));
const staticIds = records.filter((entry) => !entry.dynamic).map((entry) => entry.id);
const dynamicIds = records.filter((entry) => entry.dynamic).map((entry) => entry.id);
const concurrency = Math.max(1, Math.min(2, Number(process.env.UX10C_MUTATION_CONCURRENCY ?? 2)));

function runWorker(ids) {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [worker], {
      cwd: root,
      env: {
        ...process.env,
        UX10C_ROOT: root,
        UX10C_MUTATION_IDS: ids.join(','),
      },
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let stdout = '';
    let stderr = '';
    const timer = setTimeout(() => child.kill('SIGKILL'), 180_000);
    child.stdout.on('data', (chunk) => { stdout += chunk; });
    child.stderr.on('data', (chunk) => { stderr += chunk; });
    child.on('close', (code, signal) => {
      clearTimeout(timer);
      let result = null;
      try {
        result = JSON.parse(stdout.trim());
      } catch {
        result = null;
      }
      resolve({ ids, code, signal, result, stdout, stderr });
    });
  });
}

async function runQueue(ids, limit) {
  const queue = [...ids];
  const outputs = [];
  async function consume() {
    while (queue.length > 0) {
      const id = queue.shift();
      outputs.push(await runWorker([id]));
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, queue.length) }, consume));
  return outputs;
}

const batches = [];
if (staticIds.length > 0) batches.push(await runWorker(staticIds));
batches.push(...await runQueue(dynamicIds, concurrency));

const evidence = [];
const infrastructureFailures = [];
for (const batch of batches) {
  if (!batch.result || !Array.isArray(batch.result.evidence)) {
    infrastructureFailures.push({
      ids: batch.ids,
      code: batch.code,
      signal: batch.signal,
      outputTail: `${batch.stdout}\n${batch.stderr}`.trim().slice(-2400),
    });
    continue;
  }
  evidence.push(...batch.result.evidence);
}

const stackNoisePattern = /goroutine|deadlock|fatal error|esbuild service stopped/i;
const retriedIds = [];
for (const noisy of evidence.filter((entry) => stackNoisePattern.test(entry.outputTail ?? ''))) {
  retriedIds.push(noisy.id);
  const retry = await runWorker([noisy.id]);
  const replacement = retry.result?.evidence?.find((entry) => entry.id === noisy.id);
  const index = evidence.findIndex((entry) => entry.id === noisy.id);
  if (replacement && index >= 0) evidence[index] = replacement;
  else infrastructureFailures.push({
    ids: [noisy.id],
    code: retry.code,
    signal: retry.signal,
    outputTail: `${retry.stdout}\n${retry.stderr}`.trim().slice(-2400),
  });
}
const stackNoise = evidence.filter((entry) => stackNoisePattern.test(entry.outputTail ?? '')).map((entry) => entry.id);

const expected = new Set(records.map((entry) => entry.id));
const observed = new Set(evidence.map((entry) => entry.id));
const missing = [...expected].filter((id) => !observed.has(id));
const survivors = evidence.filter((entry) => !entry.killed);
const result = {
  pass: infrastructureFailures.length === 0 && missing.length === 0 && survivors.length === 0 && stackNoise.length === 0,
  total: records.length,
  killed: evidence.filter((entry) => entry.killed).length,
  dynamicMutations: records.filter((entry) => entry.dynamic).length,
  timeoutOrSignal: evidence.filter((entry) => entry.timedOut || entry.signal).length + infrastructureFailures.filter((entry) => entry.signal).length,
  concurrency,
  retriedIds,
  stackNoise,
  missing,
  survivors,
  infrastructureFailures,
  evidence: records.map((record) => evidence.find((entry) => entry.id === record.id)).filter(Boolean),
};
console.log(JSON.stringify(result, null, 2));
if (!result.pass) process.exit(1);
