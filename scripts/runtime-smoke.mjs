import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';

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
  assert(quizSource.includes('exam-session:'), 'Exam session localStorage key is missing');
  assert(quizSource.includes("'PJK201:uas': 'v4'"), 'PJK201 UAS session version v4 is missing');
  assert(quizSource.includes('getQuizDatasetFingerprint'), 'Exam dataset fingerprint guard is missing');

  console.log(`Runtime smoke PASS: ${assetPaths.length} assets, SPA routes, malformed-route guard, 404 source, timer registry, session v4, dataset fingerprint, and persistence hooks`);
} finally {
  if (preview && preview.exitCode === null) preview.kill('SIGTERM');
  await sleep(300);
  if (preview && preview.exitCode === null) preview.kill('SIGKILL');
}
