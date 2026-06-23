import { createEnterprisePolicyBlockError, isEnterprisePolicyBlock } from './e2e-policy.mjs';

const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };

const blockedStates = [
  { errorText: 'net::ERR_BLOCKED_BY_ADMINISTRATOR', url: 'http://127.0.0.1:4173/course/PJK201' },
  { url: 'chrome-error://chromewebdata/', body: '127.0.0.1 is blocked by organization policy' },
  { url: 'chrome-error://chromewebdata/', body: "Your organization doesn't allow you to view this site" },
  { url: 'chrome-error://chromewebdata/', body: 'The administrator has blocked access to this page.' },
  {
    errorText: 'net::ERR_BLOCKED_BY_CLIENT',
    url: 'chrome-error://chromewebdata/',
    body: 'This page is blocked by your organization policy.',
  },
];
for (const state of blockedStates) assert(isEnterprisePolicyBlock(state), `Policy block tidak terdeteksi: ${JSON.stringify(state)}`);

const ordinaryFailures = [
  { url: 'chrome-error://chromewebdata/', body: 'This site can’t be reached. DNS_PROBE_FINISHED_NXDOMAIN' },
  { url: 'http://127.0.0.1:4173/course/PJK201', body: 'Perpajakan I' },
  { url: 'http://127.0.0.1:4173/course/EKT109', body: 'Administrator has blocked duplicate submissions in this quiz.' },
  { url: 'http://127.0.0.1:4173/course/EKT109', body: 'This feature is blocked by organization policy until review.' },
  { url: 'https://example.test/help', body: "Your organization doesn't allow you to view this site in an iframe." },
  { url: 'http://127.0.0.1:4173/course/EKT109', errorText: 'net::ERR_CONNECTION_REFUSED', body: '' },
  { url: 'http://127.0.0.1:4173/course/EKT109', errorText: 'net::ERR_BLOCKED_BY_CLIENT', body: '' },
  { url: 'https://cdn.example.test/library.js', errorText: 'net::ERR_BLOCKED_BY_CLIENT', body: '' },
  {
    url: 'http://127.0.0.1:4173/course/EKT109',
    errorText: 'net::ERR_BLOCKED_BY_CLIENT',
    body: 'Administrator and organization policy are discussed in this application page.',
  },
  { url: 'about:blank', body: '' },
];
for (const state of ordinaryFailures) assert(!isEnterprisePolicyBlock(state), `False positive policy block: ${JSON.stringify(state)}`);

const error = createEnterprisePolicyBlockError(blockedStates[0]);
assert(error.code === 'E2E_ENVIRONMENT_POLICY_BLOCK', `Error code invalid: ${error.code}`);

if (failures.length) {
  console.error(`E2E policy detection test failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log('E2E policy detection test passed: authoritative administrator errors, chrome-error policy pages, and ERR_BLOCKED_BY_CLIENT false positives covered.');
}
