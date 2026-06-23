import { JSDOM } from 'jsdom';
import { createServer } from 'vite';

const GLOBAL_KEYS = [
  'window', 'document', 'navigator', 'HTMLElement', 'HTMLButtonElement',
  'HTMLDivElement', 'Node', 'Event', 'MouseEvent', 'MutationObserver',
  'getComputedStyle', 'requestAnimationFrame', 'cancelAnimationFrame',
  'IS_REACT_ACT_ENVIRONMENT',
];

function installDomGlobals(dom) {
  const previous = new Map(GLOBAL_KEYS.map((key) => [key, Object.getOwnPropertyDescriptor(globalThis, key)]));
  const { window } = dom;
  const values = {
    window,
    document: window.document,
    navigator: window.navigator,
    HTMLElement: window.HTMLElement,
    HTMLButtonElement: window.HTMLButtonElement,
    HTMLDivElement: window.HTMLDivElement,
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
    Object.defineProperty(globalThis, key, {
      configurable: true,
      writable: true,
      value,
    });
  }
  return () => {
    for (const [key, descriptor] of previous) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else delete globalThis[key];
    }
  };
}

export async function runPteBankDomFocusProbe({
  componentModule = '/src/components/PteBankSoalTab.tsx',
} = {}) {
  const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
    url: 'http://127.0.0.1/course/EKT109',
    pretendToBeVisual: true,
  });
  const restoreGlobals = installDomGlobals(dom);
  const { document, HTMLDivElement, HTMLButtonElement, MouseEvent } = dom.window;
  let vite;
  let reactRoot;

  try {
    const ReactModule = await import('react');
    const React = ReactModule.default;
    const { act } = ReactModule;
    const { createRoot } = await import('react-dom/client');

    vite = await createServer({
      appType: 'custom',
      logLevel: 'error',
      server: { middlewareMode: true, hmr: { port: 24778 } },
    });
    const loaded = await vite.ssrLoadModule(componentModule);
    const PteBankSoalTab = loaded.default;
    const container = document.getElementById('root');
    if (!container) throw new Error('DOM test root tidak tersedia');

    reactRoot = createRoot(container);
    await act(async () => {
      reactRoot.render(React.createElement(PteBankSoalTab));
    });

    const summary = document.querySelector('[data-testid="pte-bank-results-summary"]');
    const next = document.querySelector('[data-testid="pte-bank-next-page"]');
    if (!(summary instanceof HTMLDivElement)) throw new Error('Result summary DOM tidak ditemukan');
    if (!(next instanceof HTMLButtonElement)) throw new Error('Tombol halaman berikutnya DOM tidak ditemukan');
    if (summary.tabIndex !== -1) throw new Error(`Result summary harus memiliki tabIndex -1, aktual ${summary.tabIndex}`);

    await act(async () => {
      next.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
      await Promise.resolve();
    });

    const summaryText = summary.textContent ?? '';
    if (!/halaman\s+2\s+dari\s+10/.test(summaryText)) {
      throw new Error(`Navigasi DOM tidak berpindah ke halaman 2: ${summaryText}`);
    }
    if (document.activeElement !== summary) {
      const active = document.activeElement?.getAttribute?.('data-testid') ?? document.activeElement?.tagName ?? 'unknown';
      throw new Error(`Result summary did not receive DOM focus after page navigation; active=${active}`);
    }
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
