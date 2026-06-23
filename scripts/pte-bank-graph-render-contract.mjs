import { JSDOM } from 'jsdom';

const SVG_PARSER_DOCUMENT = new JSDOM('<!doctype html><body></body>').window.document;
function parseSvgMarkup(markup) {
  const template = SVG_PARSER_DOCUMENT.createElement('template');
  template.innerHTML = markup ?? '';
  return { svg: template.content.querySelector('svg'), count: template.content.querySelectorAll('svg').length };
}
import {
  PTE_GRAPH_RENDER_CONTRACT,
  PTE_GRAPH_RENDER_CONTRACT_VERSION,
} from './pte-bank-graph-render-contract-data.mjs';

export { PTE_GRAPH_RENDER_CONTRACT, PTE_GRAPH_RENDER_CONTRACT_VERSION };

const EPSILON = 0.01;

function fail(failures, id, message) {
  failures.push(`${id}: ${message}`);
}
function assert(failures, id, condition, message) {
  if (!condition) fail(failures, id, message);
}
function numeric(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}
function styleValue(element, property) {
  const inline = element.style?.getPropertyValue(property)?.trim();
  if (inline) return inline;
  const attribute = element.getAttribute(property);
  return attribute === null ? undefined : attribute.trim();
}
function inheritedValue(element, property) {
  let current = element;
  while (current?.nodeType === 1) {
    const value = styleValue(current, property);
    if (value !== undefined && value !== '') return value;
    current = current.parentElement;
  }
  return undefined;
}
function effectiveOpacity(element) {
  let opacity = 1;
  let current = element;
  while (current?.nodeType === 1) {
    const value = styleValue(current, 'opacity');
    if (value !== undefined) {
      const parsed = numeric(value);
      if (parsed !== undefined) opacity *= parsed;
    }
    current = current.parentElement;
  }
  return opacity;
}
function isHiddenByTree(element) {
  let current = element;
  while (current?.nodeType === 1) {
    const display = styleValue(current, 'display')?.toLowerCase();
    const visibility = styleValue(current, 'visibility')?.toLowerCase();
    if (display === 'none' || visibility === 'hidden' || visibility === 'collapse') return true;
    current = current.parentElement;
  }
  return false;
}
function colorVisible(value, opacity = 1) {
  if (opacity <= 0) return false;
  if (value === undefined || value === '') return true;
  const normalized = value.replace(/\s+/g, '').toLowerCase();
  if (normalized === 'none' || normalized === 'transparent') return false;
  if (/^rgba\([^,]+,[^,]+,[^,]+,0(?:\.0+)?\)$/.test(normalized)) return false;
  if (/^#[0-9a-f]{8}$/.test(normalized) && normalized.endsWith('00')) return false;
  return true;
}
function paintVisible(element, property) {
  const value = inheritedValue(element, property);
  const opacityProperty = property === 'fill' ? 'fill-opacity' : 'stroke-opacity';
  const localOpacity = numeric(inheritedValue(element, opacityProperty)) ?? 1;
  return colorVisible(value, effectiveOpacity(element) * localOpacity);
}
function roleMap(svg) {
  const map = new Map();
  for (const element of svg.querySelectorAll('[data-role]')) {
    const role = element.getAttribute('data-role');
    const values = map.get(role) ?? [];
    values.push(element);
    map.set(role, values);
  }
  return map;
}
function parseViewBox(svg) {
  const values = (svg.getAttribute('viewBox') ?? '').trim().split(/[ ,]+/).map(Number);
  return values.length === 4 && values.every(Number.isFinite) ? values : undefined;
}
function within(value, minimum, maximum) {
  return Number.isFinite(value) && value >= minimum - EPSILON && value <= maximum + EPSILON;
}
function geometryPoints(element) {
  const tag = element.tagName.toLowerCase();
  const n = (name) => numeric(element.getAttribute(name));
  if (tag === 'line') return [[n('x1'), n('y1')], [n('x2'), n('y2')]];
  if (tag === 'circle') return [[n('cx'), n('cy')]];
  if (tag === 'rect') {
    const x = n('x'); const y = n('y'); const width = n('width'); const height = n('height');
    if (![x, y, width, height].every(Number.isFinite)) return [];
    return [[x, y], [x + width, y], [x, y + height], [x + width, y + height], [x + width / 2, y + height / 2]];
  }
  if (tag === 'polygon' || tag === 'polyline') {
    const values = (element.getAttribute('points') ?? '').match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi)?.map(Number) ?? [];
    return Array.from({ length: Math.floor(values.length / 2) }, (_, index) => [values[index * 2], values[index * 2 + 1]]);
  }
  if (tag === 'path') {
    const values = (element.getAttribute('d') ?? '').match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi)?.map(Number) ?? [];
    return Array.from({ length: Math.floor(values.length / 2) }, (_, index) => [values[index * 2], values[index * 2 + 1]]);
  }
  return [];
}
function pointSegmentDistance(px, py, first, second) {
  const [x1, y1] = first; const [x2, y2] = second;
  const dx = x2 - x1; const dy = y2 - y1; const lengthSquared = dx * dx + dy * dy;
  if (!lengthSquared) return Math.hypot(px - x1, py - y1);
  const ratio = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / lengthSquared));
  return Math.hypot(px - (x1 + ratio * dx), py - (y1 + ratio * dy));
}
function distanceToElement(x, y, element) {
  const points = geometryPoints(element).filter(([px, py]) => Number.isFinite(px) && Number.isFinite(py));
  let distance = Number.POSITIVE_INFINITY;
  for (let index = 0; index < points.length; index += 1) {
    distance = Math.min(distance, Math.hypot(x - points[index][0], y - points[index][1]));
    if (index > 0) distance = Math.min(distance, pointSegmentDistance(x, y, points[index - 1], points[index]));
  }
  return distance;
}
function validateVisibleElement(element, failures, id, role) {
  const tag = element.tagName.toLowerCase();
  assert(failures, id, !isHiddenByTree(element), `${role}: display/visibility menyembunyikan elemen`);
  assert(failures, id, effectiveOpacity(element) > 0, `${role}: opacity efektif harus lebih dari 0`);
  if (tag === 'text') {
    const fontSize = numeric(inheritedValue(element, 'font-size')) ?? 16;
    assert(failures, id, fontSize > 0, `${role}: font-size harus lebih dari 0`);
    assert(failures, id, paintVisible(element, 'fill'), `${role}: fill teks tidak terlihat`);
  } else if (tag === 'line' || tag === 'polyline' || tag === 'path') {
    const strokeWidth = numeric(inheritedValue(element, 'stroke-width')) ?? 1;
    assert(failures, id, strokeWidth > 0, `${role}: stroke-width harus lebih dari 0`);
    assert(failures, id, paintVisible(element, 'stroke'), `${role}: stroke tidak terlihat`);
  } else if (tag === 'rect' || tag === 'circle' || tag === 'polygon') {
    assert(failures, id, paintVisible(element, 'fill') || paintVisible(element, 'stroke'), `${role}: fill dan stroke sama-sama tidak terlihat`);
  }
}
function validateAria(svg, contract, failures, id) {
  const tokens = (svg.getAttribute('aria-labelledby') ?? '').trim().split(/\s+/).filter(Boolean);
  assert(failures, id, tokens.length === 2, `aria-labelledby harus memiliki 2 ID, ditemukan ${tokens.length}`);
  const allIds = [...svg.querySelectorAll('[id]')].map((element) => element.id);
  assert(failures, id, new Set(allIds).size === allIds.length, 'ID SVG harus unik');
  const title = tokens[0] ? svg.querySelector(`#${tokens[0]}`) : null;
  const description = tokens[1] ? svg.querySelector(`#${tokens[1]}`) : null;
  assert(failures, id, tokens[0] === contract.titleId, `title ID ${tokens[0]}, expected ${contract.titleId}`);
  assert(failures, id, tokens[1] === contract.descriptionId, `description ID ${tokens[1]}, expected ${contract.descriptionId}`);
  assert(failures, id, title?.tagName.toLowerCase() === 'title', `aria title ID ${tokens[0] ?? '(kosong)'} tidak merujuk <title>`);
  assert(failures, id, description?.tagName.toLowerCase() === 'desc', `aria description ID ${tokens[1] ?? '(kosong)'} tidak merujuk <desc>`);
}

export function validatePteGraphRenderedQuestion(question) {
  const failures = [];
  const id = question.id;
  const contract = PTE_GRAPH_RENDER_CONTRACT[id];
  if (!contract) return [`${id}: tidak memiliki render contract`];
  const { svg } = parseSvgMarkup(question.svg ?? '');
  if (!svg) return [`${id}: SVG tidak dapat diparse`];
  const viewBox = parseViewBox(svg);
  assert(failures, id, Boolean(viewBox), 'viewBox tidak valid');
  if (viewBox) {
    assert(failures, id, viewBox.every((value, index) => Math.abs(value - contract.viewBox[index]) <= EPSILON), `viewBox ${viewBox.join(' ')}, expected ${contract.viewBox.join(' ')}`);
  }
  validateAria(svg, contract, failures, id);
  const actualRoles = roleMap(svg);
  const expectedRoleNames = Object.keys(contract.roles).sort();
  const actualRoleNames = [...actualRoles.keys()].sort();
  assert(failures, id, actualRoleNames.join('|') === expectedRoleNames.join('|'), `render roles ${actualRoleNames.join(', ')}, expected ${expectedRoleNames.join(', ')}`);

  for (const [role, roleContract] of Object.entries(contract.roles)) {
    const elements = actualRoles.get(role) ?? [];
    assert(failures, id, elements.length === 1, `${role}: expected 1 element, found ${elements.length}`);
    const element = elements[0];
    if (!element) continue;
    assert(failures, id, element.tagName.toLowerCase() === roleContract.tag, `${role}: tag ${element.tagName.toLowerCase()}, expected ${roleContract.tag}`);
    validateVisibleElement(element, failures, id, role);
    if (roleContract.tag === 'text') {
      const x = numeric(element.getAttribute('x')); const y = numeric(element.getAttribute('y'));
      const fontSize = numeric(inheritedValue(element, 'font-size')) ?? 16;
      assert(failures, id, Math.abs(x - roleContract.position.x) <= EPSILON && Math.abs(y - roleContract.position.y) <= EPSILON, `${role}: posisi (${x}, ${y}), expected (${roleContract.position.x}, ${roleContract.position.y})`);
      assert(failures, id, Math.abs(fontSize - roleContract.fontSize) <= EPSILON, `${role}: font-size ${fontSize}, expected ${roleContract.fontSize}`);
      if (viewBox) {
        const [minX, minY, width, height] = viewBox;
        assert(failures, id, within(x, minX, minX + width) && within(y, minY, minY + height), `${role}: label berada di luar viewBox`);
      }
      if (roleContract.anchorRole) {
        const target = actualRoles.get(roleContract.anchorRole)?.[0];
        assert(failures, id, Boolean(target), `${role}: anchor ${roleContract.anchorRole} tidak ditemukan`);
        if (target) {
          const distance = distanceToElement(x, y, target);
          assert(failures, id, Number.isFinite(distance) && distance <= roleContract.maxAnchorDistance + EPSILON, `${role}: jarak ke ${roleContract.anchorRole} ${distance.toFixed(2)}, maksimum ${roleContract.maxAnchorDistance}`);
        }
      }
    }
  }
  return failures;
}
export function validatePteGraphRenderedSemantics(questions) {
  const failures = [];
  const graphs = questions.filter((question) => question.kind === 'graph');
  const expectedIds = Object.keys(PTE_GRAPH_RENDER_CONTRACT).sort();
  const actualIds = graphs.map((question) => question.id).sort();
  assert(failures, 'GRAPH-RENDER-CONTRACT', actualIds.join('|') === expectedIds.join('|'), `graph IDs ${actualIds.join(', ')}, expected ${expectedIds.join(', ')}`);
  for (const question of graphs) failures.push(...validatePteGraphRenderedQuestion(question));
  return failures;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function replaceOpeningAttribute(opening, name, value) {
  const pattern = new RegExp(`\\s${escapeRegExp(name)}="[^"]*"`, 'i');
  if (pattern.test(opening)) return opening.replace(pattern, ` ${name}="${value}"`);
  return opening.replace(/\s*\/>$|>$/, (ending) => ` ${name}="${value}"${ending}`);
}
function mutateRoleOpening(svg, role, mutate) {
  const pattern = new RegExp(`<([a-z][\\w:-]*)\\b(?=[^>]*\\bdata-role="${escapeRegExp(role)}")[^>]*>`, 'i');
  const opening = svg.match(pattern)?.[0];
  if (!opening) throw new Error(`${role}: element not found`);
  return svg.replace(pattern, mutate(opening));
}
function setRoleAttribute(svg, role, name, value) {
  return mutateRoleOpening(svg, role, (opening) => replaceOpeningAttribute(opening, name, String(value)));
}
function semanticTextRoles(contract) {
  return Object.entries(contract.roles)
    .filter(([role, value]) => value.tag === 'text' && !['x-axis-label', 'y-axis-label'].includes(role))
    .map(([role]) => role);
}

export function getPteGraphRenderedMutationCases() {
  const cases = [];
  for (const [id, contract] of Object.entries(PTE_GRAPH_RENDER_CONTRACT)) {
    cases.push({ id, type: 'title-id-wrong' });
    cases.push({ id, type: 'description-id-wrong' });
    for (const [role, roleContract] of Object.entries(contract.roles)) {
      cases.push({ id, type: 'role-opacity-zero', role });
      if (roleContract.tag === 'text') {
        cases.push({ id, type: 'text-fill-none', role });
        cases.push({ id, type: 'text-font-zero', role });
        cases.push({ id, type: 'text-offcanvas', role });
        cases.push({ id, type: 'text-position-shift', role });
      }
      if (roleContract.tag === 'line' || roleContract.tag === 'polyline' || roleContract.tag === 'path') {
        cases.push({ id, type: 'stroke-none', role });
      }
    }
    const textRoles = semanticTextRoles(contract);
    if (textRoles.length >= 2) cases.push({ id, type: 'label-to-peer', role: textRoles[1], peerRole: textRoles[0] });
  }
  return cases;
}

export function mutatePteGraphRendered(questions, mutation) {
  const mutated = structuredClone(questions);
  const question = mutated.find((item) => item.id === mutation.id);
  const contract = PTE_GRAPH_RENDER_CONTRACT[mutation.id];
  if (!question?.svg || !contract) throw new Error(`${mutation.id}: graph not found`);
  if (mutation.type === 'title-id-wrong') {
    question.svg = question.svg.replace(new RegExp(`(<title\\b[^>]*\\bid=")${escapeRegExp(contract.titleId)}(")`, 'i'), '$1BROKEN-TITLE-ID$2');
  } else if (mutation.type === 'description-id-wrong') {
    question.svg = question.svg.replace(new RegExp(`(<desc\\b[^>]*\\bid=")${escapeRegExp(contract.descriptionId)}(")`, 'i'), '$1BROKEN-DESC-ID$2');
  } else if (mutation.type === 'role-opacity-zero') question.svg = setRoleAttribute(question.svg, mutation.role, 'opacity', 0);
  else if (mutation.type === 'text-fill-none') question.svg = setRoleAttribute(question.svg, mutation.role, 'fill', 'none');
  else if (mutation.type === 'text-font-zero') question.svg = setRoleAttribute(question.svg, mutation.role, 'font-size', 0);
  else if (mutation.type === 'text-offcanvas') {
    const [minX, minY, width, height] = contract.viewBox;
    question.svg = setRoleAttribute(setRoleAttribute(question.svg, mutation.role, 'x', minX + width + 1000), mutation.role, 'y', minY + height + 1000);
  } else if (mutation.type === 'text-position-shift') {
    const position = contract.roles[mutation.role].position;
    question.svg = setRoleAttribute(setRoleAttribute(question.svg, mutation.role, 'x', position.x + 47), mutation.role, 'y', position.y + 31);
  } else if (mutation.type === 'stroke-none') question.svg = setRoleAttribute(question.svg, mutation.role, 'stroke', 'none');
  else if (mutation.type === 'label-to-peer') {
    const peer = contract.roles[mutation.peerRole].position;
    question.svg = setRoleAttribute(setRoleAttribute(question.svg, mutation.role, 'x', peer.x), mutation.role, 'y', peer.y);
  } else throw new Error(`${mutation.id}: unknown rendered mutation ${mutation.type}`);
  return mutated;
}
