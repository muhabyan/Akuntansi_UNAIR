import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { build } from 'esbuild';

const root = process.cwd();
const host = '127.0.0.1';
const port = 4174;
const baseUrl = `http://${host}:${port}`;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function start(command, args) {
  return spawn(command, args, { cwd: root, stdio: ['ignore', 'pipe', 'pipe'] });
}

async function waitFor(url, timeout = 20000) {
  const started = Date.now();
  let lastError;
  while (Date.now() - started < timeout) {
    try {
      const response = await fetch(url);
      if (response.ok) return response;
    } catch (error) {
      lastError = error;
    }
    await sleep(200);
  }
  throw new Error(`Timeout waiting for ${url}: ${lastError ?? ''}`);
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

/**
 * Exam-session persistence, checked by running the real module (src/data/quizSession.ts) against an in-memory
 * localStorage: a saved session comes back unchanged, a session saved for other questions (different dataset
 * fingerprint) is ignored, unreadable data is ignored, a full or disabled storage never throws, and the key names
 * the course, the set and the duration so two exams never share a session.
 */
async function checkExamSessionPersistence() {
  const bundle = await build({
    entryPoints: [path.join(root, 'src/data/quizSession.ts')],
    bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent',
  });
  const { getExamSessionKey, readStoredExamSession, saveStoredExamSession } = await import(
    `data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`
  );
  const store = new Map();
  const storage = {
    getItem: (key) => (store.has(key) ? store.get(key) : null),
    setItem: (key, value) => { store.set(key, String(value)); },
  };
  const previous = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  Object.defineProperty(globalThis, 'localStorage', { value: storage, configurable: true, writable: true });
  try {
    const key = getExamSessionKey('PJK201', 'uas', 5400);
    for (const part of ['PJK201', 'uas', '5400']) assert(key.includes(part), `Exam session key "${key}" does not name ${part}`);
    const others = [getExamSessionKey('EKT109', 'uas', 5400), getExamSessionKey('PJK201', 'uts', 5400), getExamSessionKey('PJK201', 'uas', 3600)];
    assert(new Set([key, ...others]).size === 4, 'Exam session keys collide across course, set or duration');

    const session = {
      picks: { 0: 2, 3: 1 }, fillAnswers: { a: 'x' }, matchAnswers: { b: 'y' }, multiAnswers: { c: [0, 2] }, orderingAnswers: { d: 'z' },
      markedForReview: { 0: true }, submitted: false, autoSubmitted: false, examStarted: true, examDeadlineMs: 1_700_000_000_000,
      datasetFingerprint: 'fnv1a-0badcafe', savedAt: 1_699_999_999_000,
    };
    saveStoredExamSession(key, session);
    assert(store.has(key), 'Exam session was not written to localStorage');
    assert(JSON.stringify(readStoredExamSession(key, 'fnv1a-0badcafe')) === JSON.stringify(session), 'A saved exam session does not read back unchanged');
    assert(readStoredExamSession(key, 'fnv1a-11111111') === null, 'A session saved for a different question set (other fingerprint) must be ignored');
    assert(readStoredExamSession(others[0], 'fnv1a-0badcafe') === null, 'A session must not be readable under another exam key');
    store.set(key, '{not json');
    assert(readStoredExamSession(key, 'fnv1a-0badcafe') === null, 'An unreadable stored session must be ignored, not thrown');

    Object.defineProperty(globalThis, 'localStorage', {
      value: { getItem: () => { throw new Error('disabled'); }, setItem: () => { throw new Error('quota'); } }, configurable: true, writable: true,
    });
    saveStoredExamSession(key, session);
    assert(readStoredExamSession(key, 'fnv1a-0badcafe') === null, 'A disabled storage must read as no session');
  } finally {
    if (previous) Object.defineProperty(globalThis, 'localStorage', previous);
    else delete globalThis.localStorage;
  }
}

let preview;
try {
  preview = start(process.execPath, [
    path.join(root, 'node_modules/vite/bin/vite.js'),
    'preview', '--host', host, '--port', String(port), '--strictPort',
  ]);
  await waitFor(baseUrl);

  for (const route of ['/', '/course/PJK201', '/course/FEB25603006', '/course/UNKNOWN', '/nonexistent-route']) {
    const response = await fetch(`${baseUrl}${route}`);
    assert(response.status === 200, `${route} returned ${response.status}, expected SPA shell 200`);
    const html = await response.text();
    assert(html.includes('<div id="root"></div>'), `${route} did not return the React SPA shell`);
  }

  const malformed = await fetch(`${baseUrl}/course/%E0%A4%A`);
  assert(malformed.status === 400, `Malformed route returned ${malformed.status}, expected 400`);

  const indexHtml = await fs.readFile(path.join(root, 'dist/index.html'), 'utf8');
  const assetPaths = [...indexHtml.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)].map((match) => match[1]);
  assert(assetPaths.length >= 2, 'Built index did not reference expected JS/CSS assets');
  for (const assetPath of assetPaths) {
    const response = await fetch(`${baseUrl}${assetPath}`);
    assert(response.ok, `${assetPath} returned ${response.status}`);
    assert(Number(response.headers.get('content-length') ?? 1) > 0, `${assetPath} is empty`);
  }

  const appSource = await fs.readFile(path.join(root, 'src/App.tsx'), 'utf8');
  assert(appSource.includes('decodeURIComponent'), 'Course route decode logic is missing');
  assert(/try\s*\{[\s\S]*decodeURIComponent/.test(appSource), 'decodeURIComponent is not protected by try/catch');
  assert(appSource.includes('Halaman tidak ditemukan'), 'Client-side 404 content is missing');

  const quizSource = await fs.readFile(path.join(root, 'src/components/QuizView.tsx'), 'utf8');
  assert(quizSource.includes("PJK201: ['uts', 'uas']"), 'PJK201 UTS/UAS timed registry is missing');
  assert(quizSource.includes('90 * 60'), '90-minute exam duration constant is missing');
  await checkExamSessionPersistence();
  for (const hook of ['getExamSessionKey(', 'readStoredExamSession(', 'saveStoredExamSession(']) {
    assert(quizSource.includes(hook), `QuizView no longer calls ${hook.slice(0, -1)}: exam sessions would not persist`);
  }
  assert(quizSource.includes('getQuizDatasetFingerprint'), 'Exam dataset fingerprint guard is missing');

  console.log(`Runtime smoke PASS: ${assetPaths.length} assets, SPA routes, malformed-route guard, 404 source, timer registry, dataset fingerprint, exam-session persistence behaviour, and persistence hooks`);
} finally {
  if (preview && preview.exitCode === null) preview.kill('SIGTERM');
  await sleep(300);
  if (preview && preview.exitCode === null) preview.kill('SIGKILL');
}
