import { JSDOM } from 'jsdom';
import { createServer } from 'vite';

const GLOBAL_KEYS = [
  'window', 'document', 'navigator', 'HTMLElement', 'HTMLDivElement', 'SVGElement',
  'Node', 'Event', 'MouseEvent', 'MutationObserver', 'getComputedStyle',
  'requestAnimationFrame', 'cancelAnimationFrame', 'IS_REACT_ACT_ENVIRONMENT',
];

const VISIBILITY_CSS = `
.hidden { display: none !important; }
.invisible { visibility: hidden !important; }
.opacity-0 { opacity: 0 !important; }
`;
const HIDDEN_CLASS_NAMES = new Set(['hidden', 'invisible', 'opacity-0']);
const MIN_RENDERED_OPACITY = 0.05;

function installDomGlobals(dom) {
  const previous = new Map(GLOBAL_KEYS.map((key) => [key, Object.getOwnPropertyDescriptor(globalThis, key)]));
  const { window } = dom;
  const values = {
    window,
    document: window.document,
    navigator: window.navigator,
    HTMLElement: window.HTMLElement,
    HTMLDivElement: window.HTMLDivElement,
    SVGElement: window.SVGElement,
    Node: window.Node,
    Event: window.Event,
    MouseEvent: window.MouseEvent,
    MutationObserver: window.MutationObserver,
    getComputedStyle: window.getComputedStyle.bind(window),
    requestAnimationFrame: (callback) => setTimeout(() => callback(Date.now()), 0),
    cancelAnimationFrame: (id) => clearTimeout(id),
    IS_REACT_ACT_ENVIRONMENT: true,
  };
  for (const [key, value] of Object.entries(values)) {
    Object.defineProperty(globalThis, key, { configurable: true, writable: true, value });
  }
  return () => {
    for (const [key, descriptor] of previous) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else delete globalThis[key];
    }
  };
}

function issue(code, message) { return { code, message }; }
function numericOpacity(value) {
  const parsed = Number.parseFloat(value ?? '1');
  return Number.isFinite(parsed) ? parsed : 1;
}
function hiddenReason(element, window) {
  let current = element;
  while (current) {
    if (current.hasAttribute?.('hidden')) return 'atribut hidden';
    if (current.getAttribute?.('aria-hidden') === 'true') return 'aria-hidden=true';
    for (const className of current.classList ?? []) {
      if (HIDDEN_CLASS_NAMES.has(className)) return `class ${className}`;
    }
    const inline = current.style;
    if (inline?.display === 'none') return 'inline display:none';
    if (inline?.visibility === 'hidden' || inline?.visibility === 'collapse') return `inline visibility:${inline.visibility}`;
    if (numericOpacity(inline?.opacity) < MIN_RENDERED_OPACITY) return `inline opacity:${inline.opacity}`;
    const computed = window.getComputedStyle(current);
    if (computed.display === 'none') return 'computed display:none';
    if (computed.visibility === 'hidden' || computed.visibility === 'collapse') return `computed visibility:${computed.visibility}`;
    if (numericOpacity(computed.opacity) < MIN_RENDERED_OPACITY) return `computed opacity:${computed.opacity}`;
    current = current.parentElement;
  }
  return undefined;
}

export function validateRenderedGraphDom(document, graphId = 'unknown') {
  const issues = [];
  const { defaultView: window } = document;
  const panel = document.querySelector('[data-testid="pte-graph-panel"]');
  if (!panel) return [issue('RENDER_PANEL_MISSING', `${graphId}: GraphPanel tidak dirender`)];
  const panelHidden = hiddenReason(panel, window);
  if (panelHidden) issues.push(issue('RENDER_PANEL_HIDDEN', `${graphId}: GraphPanel atau ancestor disembunyikan oleh ${panelHidden}`));
  const host = panel.querySelector('[data-testid="pte-graph-svg-host"]');
  if (!host) issues.push(issue('RENDER_HOST_MISSING', `${graphId}: host SVG tidak dirender`));
  const hostHidden = host ? hiddenReason(host, window) : undefined;
  if (hostHidden) issues.push(issue('RENDER_HOST_HIDDEN', `${graphId}: host SVG atau ancestor disembunyikan oleh ${hostHidden}`));
  const svg = host?.querySelector('svg');
  if (!svg) issues.push(issue('RENDER_SVG_MISSING', `${graphId}: SVG tidak tersedia di DOM`));
  const svgHidden = svg ? hiddenReason(svg, window) : undefined;
  if (svgHidden) issues.push(issue('RENDER_SVG_HIDDEN', `${graphId}: SVG atau ancestor disembunyikan oleh ${svgHidden}`));
  if (svg && svg.getAttribute('role') !== 'img') issues.push(issue('RENDER_SVG_ROLE', `${graphId}: SVG DOM harus role=img`));
  return issues;
}

export async function runPteGraphRendererDomProbe({
  componentModule = '/src/components/PteBankQuestionCard.tsx',
  dataModule = '/src/data/banksoal/ekt109Bank.ts',
  projectRoot = process.cwd(),
} = {}) {
  const dom = new JSDOM(`<!doctype html><html><head><style>${VISIBILITY_CSS}</style></head><body><div id="root"></div></body></html>`, {
    url: 'http://127.0.0.1/course/EKT109',
    pretendToBeVisual: true,
  });
  const restoreGlobals = installDomGlobals(dom);
  let vite;
  let reactRoot;
  try {
    const ReactModule = await import('react');
    const React = ReactModule.default;
    const { act } = ReactModule;
    const { createRoot } = await import('react-dom/client');
    vite = await createServer({ root: projectRoot, appType: 'custom', logLevel: 'error', server: { middlewareMode: true, hmr: { port: 24778 } } });
    const component = await vite.ssrLoadModule(componentModule);
    const data = await vite.ssrLoadModule(dataModule);
    const questions = data.EKT109_BANK_QUESTIONS.filter((item) => item.kind === 'graph');
    if (questions.length !== 25) {
      return [issue('RENDER_GRAPH_FIXTURE_COUNT', `fixture grafik ${questions.length}, expected 25`)];
    }
    const container = dom.window.document.getElementById('root');
    reactRoot = createRoot(container);
    const issues = [];
    for (const [index, question] of questions.entries()) {
      await act(async () => reactRoot.render(React.createElement(component.default, {
        key: question.id,
        question,
        number: index + 1,
      })));
      issues.push(...validateRenderedGraphDom(dom.window.document, question.id));
    }
    return issues;
  } finally {
    if (reactRoot) {
      const { act } = await import('react');
      await act(async () => reactRoot.unmount());
    }
    await vite?.close();
    dom.window.close();
    restoreGlobals();
  }
}
