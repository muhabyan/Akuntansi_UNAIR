import { runPteBankDomFocusProbe } from './pte-bank-dom-focus-harness.mjs';

const componentModule = process.env.PTE_FOCUS_COMPONENT_MODULE || '/src/components/PteBankSoalTab.tsx';

try {
  await runPteBankDomFocusProbe({ componentModule });
  console.log('PTE bank DOM focus test passed: native click moved document.activeElement to the result summary.');
} catch (error) {
  console.error(`PTE bank DOM focus test failed: ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
}
