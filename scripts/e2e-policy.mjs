const AUTHORITATIVE_STRUCTURED_POLICY_ERROR_PATTERNS = [
  /ERR_BLOCKED_BY_ADMINISTRATOR/i,
];

const POLICY_ERROR_PAGE_PATTERNS = [
  /blocked by (?:your )?organization(?:'s)? policy/i,
  /blocked by organization policy/i,
  /administrator has blocked/i,
  /is blocked by your organization/i,
  /doesn[’']?t allow you to view this site/i,
];

export function isEnterprisePolicyBlock(state = {}) {
  const url = String(state.url ?? '');
  const body = String(state.body ?? '');
  const errorText = String(state.errorText ?? '');

  // ERR_BLOCKED_BY_ADMINISTRATOR is an authoritative structured Chromium
  // navigation result. ERR_BLOCKED_BY_CLIENT is deliberately not accepted on
  // its own because extensions, client-side filters, and local browser
  // configuration can emit it without any enterprise policy being involved.
  if (AUTHORITATIVE_STRUCTURED_POLICY_ERROR_PATTERNS.some((pattern) => pattern.test(errorText))) return true;

  // Human-readable policy wording is authoritative only on Chromium's own
  // error page. Application or third-party content may legitimately mention
  // administrators, organizations, blocked resources, or policy.
  if (!url.startsWith('chrome-error://')) return false;
  return POLICY_ERROR_PAGE_PATTERNS.some((pattern) => pattern.test(body))
    || (/\bblocked\b/i.test(body) && /organization|administrator|policy/i.test(body));
}

export function createEnterprisePolicyBlockError(state = {}) {
  const detail = [state.errorText, state.url].filter(Boolean).join(' | ');
  const error = new Error(`Browser navigation blocked by container enterprise URL policy${detail ? `: ${detail}` : ''}`);
  error.code = 'E2E_ENVIRONMENT_POLICY_BLOCK';
  return error;
}
