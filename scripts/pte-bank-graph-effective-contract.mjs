import { createHash } from 'node:crypto';
import { JSDOM } from 'jsdom';

const SVG_PARSER_DOCUMENT = new JSDOM('<!doctype html><body></body>').window.document;
function parseSvgMarkup(markup) {
  const template = SVG_PARSER_DOCUMENT.createElement('template');
  template.innerHTML = markup ?? '';
  return { svg: template.content.querySelector('svg'), count: template.content.querySelectorAll('svg').length };
}
import {
  PTE_GRAPH_EFFECTIVE_CONTRACT_VERSION,
  PTE_GRAPH_EFFECTIVE_HASHES,
} from './pte-bank-graph-effective-contract-data.mjs';

export { PTE_GRAPH_EFFECTIVE_CONTRACT_VERSION, PTE_GRAPH_EFFECTIVE_HASHES };

const MIN_VISIBLE_OPACITY = 0.05;
const MIN_STROKE_WIDTH = 0.5;
const MIN_FONT_SIZE = 8;
const FORBIDDEN_ELEMENTS = 'style,script,foreignObject,animate,animateMotion,animateTransform,set,use';
const FORBIDDEN_REFERENCE_ATTRIBUTES = ['clip-path', 'mask', 'filter'];
const VISUAL_TAGS = new Set(['line', 'rect', 'circle', 'ellipse', 'path', 'polygon', 'polyline', 'text']);
function visualElementsInDocumentOrder(svg) {
  return [...svg.querySelectorAll('*')].filter((element) => VISUAL_TAGS.has(element.tagName.toLowerCase()) && !element.closest('defs'));
}

export const PTE_GRAPH_EFFECTIVE_ERROR_CODES = Object.freeze({
  CONTRACT_MISSING: 'EFFECTIVE_CONTRACT_MISSING',
  SVG_COUNT: 'EFFECTIVE_SVG_COUNT',
  ROOT_WIDTH: 'EFFECTIVE_ROOT_WIDTH',
  ROOT_HEIGHT: 'EFFECTIVE_ROOT_HEIGHT',
  ROOT_ROLE: 'EFFECTIVE_ROOT_ROLE',
  ROOT_ARIA_HIDDEN: 'EFFECTIVE_ROOT_ARIA_HIDDEN',
  ROOT_TRANSFORM: 'EFFECTIVE_ROOT_TRANSFORM',
  ROOT_STYLE: 'EFFECTIVE_ROOT_STYLE',
  ROOT_OPACITY: 'EFFECTIVE_ROOT_OPACITY',
  FORBIDDEN_ELEMENT: 'EFFECTIVE_FORBIDDEN_ELEMENT',
  FORBIDDEN_TRANSFORM: 'EFFECTIVE_FORBIDDEN_TRANSFORM',
  FORBIDDEN_STYLE: 'EFFECTIVE_FORBIDDEN_STYLE',
  FORBIDDEN_DEFINITION: 'EFFECTIVE_FORBIDDEN_DEFINITION',
  FORBIDDEN_REFERENCE: 'EFFECTIVE_FORBIDDEN_REFERENCE',
  FORBIDDEN_HREF: 'EFFECTIVE_FORBIDDEN_HREF',
  FORBIDDEN_EVENT: 'EFFECTIVE_FORBIDDEN_EVENT',
  LOW_OPACITY: 'EFFECTIVE_LOW_OPACITY',
  LOW_STROKE_WIDTH: 'EFFECTIVE_LOW_STROKE_WIDTH',
  LOW_FONT_SIZE: 'EFFECTIVE_LOW_FONT_SIZE',
  FULL_OVERLAY: 'EFFECTIVE_FULL_OVERLAY',
  FINGERPRINT: 'EFFECTIVE_FINGERPRINT',
  ID_SET: 'EFFECTIVE_ID_SET',
});

function fail(failures, id, code, message) { failures.push(`${id} [${code}]: ${message}`); }
function assert(failures, id, code, condition, message) { if (!condition) fail(failures, id, code, message); }
function numeric(value) {
  if (value === null || value === undefined || String(value).trim() === '') return undefined;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}
function sha256(value) { return createHash('sha256').update(value, 'utf8').digest('hex'); }
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
    if (value !== undefined) opacity *= numeric(value) ?? 1;
    current = current.parentElement;
  }
  return opacity;
}
function hasUnsafeEventAttribute(element) {
  return [...element.attributes].some((attribute) => /^on/i.test(attribute.name));
}
function validateRoot(svg, failures, id) {
  const C = PTE_GRAPH_EFFECTIVE_ERROR_CODES;
  assert(failures, id, C.ROOT_WIDTH, svg.getAttribute('width') === '100%', `root width harus 100%, ditemukan ${svg.getAttribute('width') ?? '(kosong)'}`);
  assert(failures, id, C.ROOT_HEIGHT, !svg.hasAttribute('height'), 'root height tidak boleh dikunci agar responsif');
  assert(failures, id, C.ROOT_ROLE, svg.getAttribute('role') === 'img', `root role harus img, ditemukan ${svg.getAttribute('role') ?? '(kosong)'}`);
  assert(failures, id, C.ROOT_ARIA_HIDDEN, !svg.hasAttribute('aria-hidden') || svg.getAttribute('aria-hidden') === 'false', 'root SVG tidak boleh aria-hidden');
  assert(failures, id, C.ROOT_TRANSFORM, !svg.hasAttribute('transform'), 'root SVG tidak boleh memiliki transform');
  assert(failures, id, C.ROOT_STYLE, !svg.hasAttribute('style'), 'root SVG tidak boleh memiliki inline style');
  assert(failures, id, C.ROOT_OPACITY, effectiveOpacity(svg) >= MIN_VISIBLE_OPACITY, `root opacity harus >= ${MIN_VISIBLE_OPACITY}`);
}
function validateForbiddenConstructs(svg, failures, id) {
  const C = PTE_GRAPH_EFFECTIVE_ERROR_CODES;
  assert(failures, id, C.FORBIDDEN_ELEMENT, svg.querySelectorAll(FORBIDDEN_ELEMENTS).length === 0, `elemen terlarang ditemukan: ${FORBIDDEN_ELEMENTS}`);
  assert(failures, id, C.FORBIDDEN_TRANSFORM, svg.querySelectorAll('[transform]').length === 0, 'transform tidak diizinkan pada SVG terkontrak');
  assert(failures, id, C.FORBIDDEN_STYLE, svg.querySelectorAll('[style]').length === 0, 'inline style tidak diizinkan pada SVG terkontrak');
  assert(failures, id, C.FORBIDDEN_DEFINITION, svg.querySelectorAll('clipPath,mask,filter').length === 0, 'clipPath/mask/filter definition tidak diizinkan');
  for (const attribute of FORBIDDEN_REFERENCE_ATTRIBUTES) {
    const count = (svg.hasAttribute(attribute) ? 1 : 0) + svg.querySelectorAll(`[${attribute}]`).length;
    assert(failures, id, C.FORBIDDEN_REFERENCE, count === 0, `${attribute} tidak diizinkan`);
  }
  assert(failures, id, C.FORBIDDEN_HREF, svg.querySelectorAll('[href],[xlink\\:href]').length === 0, 'referensi href/xlink:href tidak diizinkan');
  for (const element of [svg, ...svg.querySelectorAll('*')]) {
    assert(failures, id, C.FORBIDDEN_EVENT, !hasUnsafeEventAttribute(element), `${element.tagName.toLowerCase()}: event-handler attribute tidak diizinkan`);
  }
}
function validateVisualThresholds(svg, failures, id) {
  const C = PTE_GRAPH_EFFECTIVE_ERROR_CODES;
  const visualElements = visualElementsInDocumentOrder(svg);
  for (const element of visualElements) {
    const label = element.getAttribute('data-role') ?? `${element.tagName.toLowerCase()} tanpa data-role`;
    const opacity = effectiveOpacity(element);
    assert(failures, id, C.LOW_OPACITY, opacity >= MIN_VISIBLE_OPACITY, `${label}: opacity efektif ${opacity} di bawah ${MIN_VISIBLE_OPACITY}`);
    const tag = element.tagName.toLowerCase();
    if (tag === 'line' || tag === 'path' || tag === 'polyline') {
      const stroke = inheritedValue(element, 'stroke');
      if (stroke && stroke.toLowerCase() !== 'none' && stroke.toLowerCase() !== 'transparent') {
        const width = numeric(inheritedValue(element, 'stroke-width')) ?? 1;
        assert(failures, id, C.LOW_STROKE_WIDTH, width >= MIN_STROKE_WIDTH, `${label}: stroke-width ${width} di bawah ${MIN_STROKE_WIDTH}`);
      }
    }
    if (tag === 'text') {
      const size = numeric(inheritedValue(element, 'font-size')) ?? 16;
      assert(failures, id, C.LOW_FONT_SIZE, size >= MIN_FONT_SIZE, `${label}: font-size ${size} di bawah ${MIN_FONT_SIZE}`);
    }
  }
}
function viewLength(value, axisSize) {
  if (value === null || value === undefined) return undefined;
  const text = String(value).trim();
  if (text.endsWith('%')) {
    const percent = Number.parseFloat(text.slice(0, -1));
    return Number.isFinite(percent) ? axisSize * percent / 100 : undefined;
  }
  return numeric(text);
}
function bboxFromPoints(points) {
  if (!points.length) return undefined;
  const xs = points.map(([x]) => x).filter(Number.isFinite);
  const ys = points.map(([, y]) => y).filter(Number.isFinite);
  if (!xs.length || !ys.length) return undefined;
  return { minX: Math.min(...xs), minY: Math.min(...ys), maxX: Math.max(...xs), maxY: Math.max(...ys) };
}
function polygonBBox(element) {
  const values = (element.getAttribute('points') ?? '').trim().split(/[ ,]+/).map(Number);
  if (values.length < 6 || values.some((value) => !Number.isFinite(value))) return undefined;
  const points = [];
  for (let index = 0; index + 1 < values.length; index += 2) points.push([values[index], values[index + 1]]);
  return bboxFromPoints(points);
}
function simplePathBBox(element) {
  const tokens = (element.getAttribute('d') ?? '').match(/[A-Za-z]|-?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?/g) ?? [];
  if (!tokens.length) return undefined;
  let command;
  let x = 0;
  let y = 0;
  let startX = 0;
  let startY = 0;
  const points = [];
  for (let index = 0; index < tokens.length;) {
    const token = tokens[index];
    if (/^[A-Za-z]$/.test(token)) {
      if (!/^[MLHVZmlhvz]$/.test(token)) return undefined;
      command = token;
      index += 1;
      if (/^[Zz]$/.test(command)) { x = startX; y = startY; points.push([x, y]); }
      continue;
    }
    if (!command) return undefined;
    const relative = command === command.toLowerCase();
    const upper = command.toUpperCase();
    if (upper === 'M' || upper === 'L') {
      if (index + 1 >= tokens.length) return undefined;
      const nextX = Number(tokens[index]);
      const nextY = Number(tokens[index + 1]);
      if (!Number.isFinite(nextX) || !Number.isFinite(nextY)) return undefined;
      x = relative ? x + nextX : nextX;
      y = relative ? y + nextY : nextY;
      if (upper === 'M') { startX = x; startY = y; command = relative ? 'l' : 'L'; }
      points.push([x, y]);
      index += 2;
    } else if (upper === 'H') {
      const nextX = Number(tokens[index]);
      if (!Number.isFinite(nextX)) return undefined;
      x = relative ? x + nextX : nextX;
      points.push([x, y]);
      index += 1;
    } else if (upper === 'V') {
      const nextY = Number(tokens[index]);
      if (!Number.isFinite(nextY)) return undefined;
      y = relative ? y + nextY : nextY;
      points.push([x, y]);
      index += 1;
    } else return undefined;
  }
  return bboxFromPoints(points);
}
function visualBBox(element, viewBox) {
  const [vx, vy, vw, vh] = viewBox;
  const tag = element.tagName.toLowerCase();
  if (tag === 'rect') {
    const x = viewLength(element.getAttribute('x') ?? '0', vw);
    const y = viewLength(element.getAttribute('y') ?? '0', vh);
    const width = viewLength(element.getAttribute('width'), vw);
    const height = viewLength(element.getAttribute('height'), vh);
    if ([x, y, width, height].some((value) => value === undefined)) return undefined;
    return { minX: vx + x, minY: vy + y, maxX: vx + x + width, maxY: vy + y + height };
  }
  if (tag === 'ellipse') {
    const cx = viewLength(element.getAttribute('cx'), vw);
    const cy = viewLength(element.getAttribute('cy'), vh);
    const rx = viewLength(element.getAttribute('rx'), vw);
    const ry = viewLength(element.getAttribute('ry'), vh);
    if ([cx, cy, rx, ry].some((value) => value === undefined)) return undefined;
    return { minX: vx + cx - rx, minY: vy + cy - ry, maxX: vx + cx + rx, maxY: vy + cy + ry };
  }
  if (tag === 'polygon') return polygonBBox(element);
  if (tag === 'path') return simplePathBBox(element);
  return undefined;
}
function hasOpaqueFill(element) {
  const fill = (inheritedValue(element, 'fill') ?? '').toLowerCase();
  if (!fill || fill === 'none' || fill === 'transparent') return false;
  const fillOpacity = numeric(inheritedValue(element, 'fill-opacity')) ?? 1;
  return effectiveOpacity(element) * fillOpacity >= MIN_VISIBLE_OPACITY;
}
function coversViewBox(bbox, viewBox) {
  if (!bbox) return false;
  const [vx, vy, vw, vh] = viewBox;
  const toleranceX = Math.max(1, vw * 0.01);
  const toleranceY = Math.max(1, vh * 0.01);
  return bbox.minX <= vx + toleranceX
    && bbox.minY <= vy + toleranceY
    && bbox.maxX >= vx + vw - toleranceX
    && bbox.maxY >= vy + vh - toleranceY;
}
function validateNoFullOverlay(svg, failures, id) {
  const C = PTE_GRAPH_EFFECTIVE_ERROR_CODES;
  const viewBox = svg.getAttribute('viewBox')?.trim().split(/[ ,]+/).map(Number);
  if (!viewBox || viewBox.length !== 4 || viewBox.some((value) => !Number.isFinite(value))) return;
  const visuals = visualElementsInDocumentOrder(svg);
  const firstContracted = visuals.findIndex((element) => element.hasAttribute('data-role'));
  const lateOverlay = visuals.findIndex((element, index) => {
    if (index <= firstContracted || element.hasAttribute('data-role') || !hasOpaqueFill(element)) return false;
    return coversViewBox(visualBBox(element, viewBox), viewBox);
  });
  const overlay = lateOverlay >= 0 ? visuals[lateOverlay] : undefined;
  assert(failures, id, C.FULL_OVERLAY, lateOverlay === -1, `primitive opaque ${overlay?.tagName.toLowerCase() ?? '(unknown)'} ${overlay ? [...overlay.attributes].map((attribute) => `${attribute.name}=${attribute.value}`).join(' ') : ''} setelah elemen terkontrak dapat menutup seluruh viewBox`);
}

export function validatePteGraphEffectiveQuestion(question, { skipFingerprint = false, expectedHash } = {}) {
  const failures = [];
  const id = question.id;
  const C = PTE_GRAPH_EFFECTIVE_ERROR_CODES;
  const contractHash = expectedHash ?? PTE_GRAPH_EFFECTIVE_HASHES[id];
  if (!contractHash) return [`${id} [${C.CONTRACT_MISSING}]: tidak memiliki effective SVG contract`];
  const parsed = parseSvgMarkup(question.svg ?? '');
  assert(failures, id, C.SVG_COUNT, parsed.count === 1, `harus tepat satu root SVG, ditemukan ${parsed.count}`);
  const svg = parsed.svg;
  if (!svg) return failures;
  validateRoot(svg, failures, id);
  validateForbiddenConstructs(svg, failures, id);
  validateVisualThresholds(svg, failures, id);
  validateNoFullOverlay(svg, failures, id);
  if (!skipFingerprint) {
    const actualHash = sha256(question.svg ?? '');
    assert(failures, id, C.FINGERPRINT, actualHash === contractHash, `effective SVG fingerprint ${actualHash}, expected ${contractHash}`);
  }
  return failures;
}
export function validatePteGraphEffectiveSemantics(questions) {
  const failures = [];
  const C = PTE_GRAPH_EFFECTIVE_ERROR_CODES;
  const graphs = questions.filter((question) => question.kind === 'graph');
  const actualIds = graphs.map((question) => question.id).sort();
  const expectedIds = Object.keys(PTE_GRAPH_EFFECTIVE_HASHES).sort();
  assert(failures, 'GRAPH-EFFECTIVE-CONTRACT', C.ID_SET, actualIds.join('|') === expectedIds.join('|'), `graph IDs ${actualIds.join(', ')}, expected ${expectedIds.join(', ')}`);
  for (const question of graphs) failures.push(...validatePteGraphEffectiveQuestion(question));
  return failures;
}

function escapeRegExp(value) { return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function replaceRootOpening(svg, mutate) {
  const opening = svg.match(/<svg\b[^>]*>/i)?.[0];
  if (!opening) throw new Error('root SVG not found');
  return svg.replace(opening, mutate(opening));
}
function replaceAttribute(opening, name, value) {
  const pattern = new RegExp(`\\s${escapeRegExp(name)}="[^"]*"`, 'i');
  if (pattern.test(opening)) return opening.replace(pattern, ` ${name}="${value}"`);
  return opening.replace(/>$/, ` ${name}="${value}">`);
}
function firstRoleOpening(svg) {
  const match = svg.match(/<([a-z][\w:-]*)\b(?=[^>]*\bdata-role="[^"]+")[^>]*>/i);
  if (!match) throw new Error('role element not found');
  return match[0];
}
function mutateFirstRole(svg, mutate) {
  const opening = firstRoleOpening(svg);
  return svg.replace(opening, mutate(opening));
}
function firstStrokedRoleOpening(svg) {
  const match = svg.match(/<(?:line|path|polyline)\b(?=[^>]*\bdata-role="[^"]+")(?=[^>]*\bstroke="(?!none|transparent)[^"]+")[^>]*>/i);
  if (!match) throw new Error('stroked role element not found');
  return match[0];
}

const MUTATION_CODES = Object.freeze({
  'root-width-zero': PTE_GRAPH_EFFECTIVE_ERROR_CODES.ROOT_WIDTH,
  'root-height-zero': PTE_GRAPH_EFFECTIVE_ERROR_CODES.ROOT_HEIGHT,
  'root-style-zero': PTE_GRAPH_EFFECTIVE_ERROR_CODES.ROOT_STYLE,
  'root-aria-hidden': PTE_GRAPH_EFFECTIVE_ERROR_CODES.ROOT_ARIA_HIDDEN,
  'root-transform-scale-zero': PTE_GRAPH_EFFECTIVE_ERROR_CODES.ROOT_TRANSFORM,
  'role-transform-scale-zero': PTE_GRAPH_EFFECTIVE_ERROR_CODES.FORBIDDEN_TRANSFORM,
  'role-transform-offcanvas': PTE_GRAPH_EFFECTIVE_ERROR_CODES.FORBIDDEN_TRANSFORM,
  'style-hide-roles': PTE_GRAPH_EFFECTIVE_ERROR_CODES.FORBIDDEN_ELEMENT,
  'style-tiny-opacity': PTE_GRAPH_EFFECTIVE_ERROR_CODES.FORBIDDEN_ELEMENT,
  'role-tiny-opacity': PTE_GRAPH_EFFECTIVE_ERROR_CODES.LOW_OPACITY,
  'stroke-tiny': PTE_GRAPH_EFFECTIVE_ERROR_CODES.LOW_STROKE_WIDTH,
  'full-overlay': PTE_GRAPH_EFFECTIVE_ERROR_CODES.FULL_OVERLAY,
  'full-overlay-percent-rect': PTE_GRAPH_EFFECTIVE_ERROR_CODES.FULL_OVERLAY,
  'full-overlay-polygon': PTE_GRAPH_EFFECTIVE_ERROR_CODES.FULL_OVERLAY,
  'full-overlay-path': PTE_GRAPH_EFFECTIVE_ERROR_CODES.FULL_OVERLAY,
  'full-overlay-ellipse': PTE_GRAPH_EFFECTIVE_ERROR_CODES.FULL_OVERLAY,
  'root-clip-path': PTE_GRAPH_EFFECTIVE_ERROR_CODES.FORBIDDEN_REFERENCE,
  'root-mask': PTE_GRAPH_EFFECTIVE_ERROR_CODES.FORBIDDEN_REFERENCE,
  'root-filter': PTE_GRAPH_EFFECTIVE_ERROR_CODES.FORBIDDEN_REFERENCE,
  'foreign-object': PTE_GRAPH_EFFECTIVE_ERROR_CODES.FORBIDDEN_ELEMENT,
  'fingerprint-only': PTE_GRAPH_EFFECTIVE_ERROR_CODES.FINGERPRINT,
});

export function getPteGraphEffectiveMutationCases() {
  const cases = [];
  for (const id of Object.keys(PTE_GRAPH_EFFECTIVE_HASHES)) {
    for (const [type, expectedCode] of Object.entries(MUTATION_CODES)) {
      cases.push({ id, type, expectedCode, skipFingerprint: type !== 'fingerprint-only' });
    }
  }
  return cases;
}

export function mutatePteGraphEffective(questions, mutation) {
  const mutated = structuredClone(questions);
  const question = mutated.find((item) => item.id === mutation.id);
  if (!question?.svg) throw new Error(`${mutation.id}: graph not found`);
  let svg = question.svg;
  if (mutation.type === 'root-width-zero') svg = replaceRootOpening(svg, (opening) => replaceAttribute(opening, 'width', '0'));
  else if (mutation.type === 'root-height-zero') svg = replaceRootOpening(svg, (opening) => replaceAttribute(opening, 'height', '0'));
  else if (mutation.type === 'root-style-zero') svg = replaceRootOpening(svg, (opening) => replaceAttribute(opening, 'style', 'width:0;height:0'));
  else if (mutation.type === 'root-aria-hidden') svg = replaceRootOpening(svg, (opening) => replaceAttribute(opening, 'aria-hidden', 'true'));
  else if (mutation.type === 'root-transform-scale-zero') svg = replaceRootOpening(svg, (opening) => replaceAttribute(opening, 'transform', 'scale(0)'));
  else if (mutation.type === 'role-transform-scale-zero') svg = mutateFirstRole(svg, (opening) => replaceAttribute(opening, 'transform', 'scale(0)'));
  else if (mutation.type === 'role-transform-offcanvas') svg = mutateFirstRole(svg, (opening) => replaceAttribute(opening, 'transform', 'translate(1000 1000)'));
  else if (mutation.type === 'style-hide-roles') svg = svg.replace(/(<svg\b[^>]*>)/i, '$1<style>[data-role]{display:none!important}</style>');
  else if (mutation.type === 'style-tiny-opacity') svg = svg.replace(/(<svg\b[^>]*>)/i, '$1<style>[data-role]{opacity:0.000001!important}</style>');
  else if (mutation.type === 'role-tiny-opacity') svg = mutateFirstRole(svg, (opening) => replaceAttribute(opening, 'opacity', '0.000001'));
  else if (mutation.type === 'stroke-tiny') {
    const opening = firstStrokedRoleOpening(svg);
    svg = svg.replace(opening, replaceAttribute(opening, 'stroke-width', '0.000001'));
  } else if (mutation.type.startsWith('full-overlay')) {
    const viewBox = svg.match(/\bviewBox="([^"]+)"/i)?.[1]?.trim().split(/[ ,]+/).map(Number);
    if (!viewBox || viewBox.length !== 4) throw new Error(`${mutation.id}: viewBox not found`);
    const [x, y, width, height] = viewBox;
    let overlay;
    if (mutation.type === 'full-overlay') overlay = `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="#000"/>`;
    else if (mutation.type === 'full-overlay-percent-rect') overlay = '<rect x="0" y="0" width="100%" height="100%" fill="#000"/>';
    else if (mutation.type === 'full-overlay-polygon') overlay = `<polygon points="${x},${y} ${x + width},${y} ${x + width},${y + height} ${x},${y + height}" fill="#000"/>`;
    else if (mutation.type === 'full-overlay-path') overlay = `<path d="M ${x} ${y} H ${x + width} V ${y + height} H ${x} Z" fill="#000"/>`;
    else if (mutation.type === 'full-overlay-ellipse') overlay = `<ellipse cx="${x + width / 2}" cy="${y + height / 2}" rx="${width / 2}" ry="${height / 2}" fill="#000"/>`;
    else throw new Error(`${mutation.id}: unknown overlay mutation ${mutation.type}`);
    svg = svg.replace(/<\/svg>\s*$/i, `${overlay}</svg>`);
  } else if (mutation.type === 'root-clip-path') svg = replaceRootOpening(svg, (opening) => replaceAttribute(opening, 'clip-path', 'url(#zero-clip)'));
  else if (mutation.type === 'root-mask') svg = replaceRootOpening(svg, (opening) => replaceAttribute(opening, 'mask', 'url(#zero-mask)'));
  else if (mutation.type === 'root-filter') svg = replaceRootOpening(svg, (opening) => replaceAttribute(opening, 'filter', 'url(#hidden-filter)'));
  else if (mutation.type === 'foreign-object') svg = svg.replace(/<\/svg>\s*$/i, '<foreignObject x="0" y="0" width="100%" height="100%"><div>overlay</div></foreignObject></svg>');
  else if (mutation.type === 'fingerprint-only') svg = `${svg} `;
  else throw new Error(`${mutation.id}: unknown effective mutation ${mutation.type}`);
  question.svg = svg;
  return mutated;
}
