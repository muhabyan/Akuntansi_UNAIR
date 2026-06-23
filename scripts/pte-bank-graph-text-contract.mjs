import { PTE_GRAPH_TEXT_CONTRACT } from './pte-bank-graph-text-contract-data.mjs';

export { PTE_GRAPH_TEXT_CONTRACT };

function attrs(tag) {
  const result = {};
  for (const match of tag.matchAll(/([\w:-]+)="([^"]*)"/g)) result[match[1]] = match[2];
  return result;
}
function fail(failures, id, message) { failures.push(`${id}: ${message}`); }
function assert(failures, id, condition, message) { if (!condition) fail(failures, id, message); }
function exactTagText(svg, tag) {
  const matches = [...svg.matchAll(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi'))];
  return matches.map((match) => match[1]);
}
function roleTags(svg, tag, role) {
  const pattern = new RegExp(`<${tag}\\b[^>]*data-role="${role}"[^>]*>(?:[\\s\\S]*?<\\/${tag}>)?`, 'gi');
  return [...svg.matchAll(pattern)].map((match) => match[0]);
}
function roleText(svg, role) {
  return roleTags(svg, 'text', role).map((tag) => tag.match(/>([\s\S]*?)<\/text>$/i)?.[1] ?? '');
}
function lineAttrs(svg, role) {
  return roleTags(svg, 'line', role).map((tag) => attrs(tag));
}
function validateAxes(svg, failures, id) {
  const xTags = lineAttrs(svg, 'x-axis');
  const yTags = lineAttrs(svg, 'y-axis');
  assert(failures, id, xTags.length === 1, `x-axis: expected 1 line, found ${xTags.length}`);
  assert(failures, id, yTags.length === 1, `y-axis: expected 1 line, found ${yTags.length}`);
  if (xTags[0]) {
    const x = Object.fromEntries(Object.entries(xTags[0]).map(([key, value]) => [key, Number(value)]));
    assert(failures, id, Math.abs(x.y1 - x.y2) < 0.01 && x.x2 > x.x1, 'x-axis harus horizontal dan mengarah ke kanan');
  }
  if (yTags[0]) {
    const y = Object.fromEntries(Object.entries(yTags[0]).map(([key, value]) => [key, Number(value)]));
    assert(failures, id, Math.abs(y.x1 - y.x2) < 0.01 && y.y2 < y.y1, 'y-axis harus vertikal dan mengarah ke atas');
  }
}

export function validatePteGraphTextSemantics(questions) {
  const failures = [];
  const graphs = questions.filter((question) => question.kind === 'graph');
  const contractIds = Object.keys(PTE_GRAPH_TEXT_CONTRACT);
  const actualIds = new Set(graphs.map((question) => question.id));
  assert(failures, 'GRAPH-TEXT-CONTRACT', graphs.length === contractIds.length, `graph count ${graphs.length}, expected ${contractIds.length}`);
  for (const id of contractIds) assert(failures, 'GRAPH-TEXT-CONTRACT', actualIds.has(id), `${id} contract tidak memiliki graph`);

  for (const question of graphs) {
    const id = question.id;
    const contract = PTE_GRAPH_TEXT_CONTRACT[id];
    if (!contract) {
      fail(failures, id, 'tidak memiliki text contract');
      continue;
    }
    const opening = question.svg.match(/<svg\b[^>]*>/i)?.[0] ?? '';
    const openingAttributes = attrs(opening);
    assert(failures, id, openingAttributes['data-graph-id'] === contract.graphId, `data-graph-id ${openingAttributes['data-graph-id']}, expected ${contract.graphId}`);
    assert(failures, id, openingAttributes['aria-labelledby'] === contract.ariaLabelledby, `aria-labelledby ${openingAttributes['aria-labelledby']}, expected ${contract.ariaLabelledby}`);
    const titles = exactTagText(question.svg, 'title');
    const descriptions = exactTagText(question.svg, 'desc');
    assert(failures, id, titles.length === 1 && titles[0] === contract.title, 'title tidak cocok');
    assert(failures, id, descriptions.length === 1 && descriptions[0] === contract.description, 'description tidak cocok');
    assert(failures, id, question.altText === contract.altText, 'altText tidak cocok dengan contract');
    if (contract.mode === 'cartesian') validateAxes(question.svg, failures, id);
    for (const [role, expectedText] of Object.entries(contract.labels)) {
      const values = roleText(question.svg, role);
      assert(failures, id, values.length === 1, `${role}: expected 1 text, found ${values.length}`);
      if (values[0] !== undefined) assert(failures, id, values[0] === expectedText, `${role}: ${values[0]}, expected ${expectedText}`);
    }
    const actualTextRoles = [...question.svg.matchAll(/<text\b[^>]*data-role="([^"]+)"[^>]*>/gi)].map((match) => match[1]).sort();
    const expectedTextRoles = Object.keys(contract.labels).sort();
    assert(failures, id, actualTextRoles.join('|') === expectedTextRoles.join('|'), `text roles ${actualTextRoles.join(', ')}, expected ${expectedTextRoles.join(', ')}`);
  }
  return failures;
}

function replaceRoleText(svg, role, value) {
  const pattern = new RegExp(`(<text\\b[^>]*data-role="${role}"[^>]*>)([\\s\\S]*?)(<\\/text>)`, 'i');
  if (!pattern.test(svg)) throw new Error(`${role}: text not found`);
  return svg.replace(pattern, `$1${value}$3`);
}
function removeRoleElement(svg, tag, role) {
  const pattern = new RegExp(`<${tag}\\b[^>]*data-role="${role}"[^>]*>(?:[\\s\\S]*?<\\/${tag}>)?`, 'i');
  if (!pattern.test(svg)) throw new Error(`${role}: ${tag} not found`);
  return svg.replace(pattern, '');
}
function swapRoleTexts(svg, firstRole, secondRole) {
  const first = roleText(svg, firstRole)[0];
  const second = roleText(svg, secondRole)[0];
  if (first === undefined || second === undefined) throw new Error(`${firstRole}/${secondRole}: label not found`);
  const marker = '__PTE_LABEL_SWAP__';
  return replaceRoleText(replaceRoleText(replaceRoleText(svg, firstRole, marker), secondRole, first), firstRole, second);
}

export function getPteGraphTextMutationCases() {
  const cases = [];
  for (const [id, contract] of Object.entries(PTE_GRAPH_TEXT_CONTRACT)) {
    cases.push({ id, type: 'alt-contradiction' });
    cases.push({ id, type: 'title-contradiction' });
    if (contract.mode === 'cartesian') {
      cases.push({ id, type: 'axis-swap' });
      cases.push({ id, type: 'axis-removal' });
    }
    const semanticRoles = Object.keys(contract.labels).filter((role) => !['x-axis-label', 'y-axis-label'].includes(role));
    if (semanticRoles.length >= 2) cases.push({ id, type: 'curve-label-swap', roles: semanticRoles.slice(0, 2) });
  }
  return cases;
}

export function mutatePteGraphText(questions, mutation) {
  const mutated = structuredClone(questions);
  const question = mutated.find((item) => item.id === mutation.id);
  if (!question?.svg) throw new Error(`${mutation.id}: graph not found`);
  if (mutation.type === 'alt-contradiction') question.altText = 'Deskripsi alternatif sengaja bertentangan dengan grafik.';
  else if (mutation.type === 'title-contradiction') question.svg = question.svg.replace(/(<title\b[^>]*>)[\s\S]*?(<\/title>)/i, '$1Judul grafik sengaja salah$2');
  else if (mutation.type === 'axis-swap') question.svg = swapRoleTexts(question.svg, 'x-axis-label', 'y-axis-label');
  else if (mutation.type === 'axis-removal') question.svg = removeRoleElement(question.svg, 'line', 'x-axis');
  else if (mutation.type === 'curve-label-swap') question.svg = swapRoleTexts(question.svg, mutation.roles[0], mutation.roles[1]);
  else throw new Error(`${mutation.id}: unknown mutation ${mutation.type}`);
  return mutated;
}
