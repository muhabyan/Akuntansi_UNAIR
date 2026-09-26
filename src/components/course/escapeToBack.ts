import { useEffect, useRef } from 'react';

/**
 * Esc on a layered reading does what its on-page back button does, unless the key belongs to something else:
 * typing in a field, an open dialog, drawer, utility panel or navbar menu, or the Zen/fullscreen view.
 */
export function escapeShouldGoBack(event: KeyboardEvent, doc: Document = document): boolean {
  if (event.key !== 'Escape' || event.defaultPrevented || event.isComposing) return false;
  const active = doc.activeElement;
  if (active instanceof HTMLElement && (/^(INPUT|TEXTAREA|SELECT)$/.test(active.tagName) || active.isContentEditable)) return false;
  if (doc.fullscreenElement || doc.body.classList.contains('zen-mode-active')) return false;
  return !doc.querySelector('[aria-modal="true"], [data-auth-modal], [data-utility-panel][aria-hidden="false"], .nav-menu-container [aria-expanded="true"]');
}

export function useEscapeToBack(enabled: boolean, onBack: () => void) {
  const onBackRef = useRef(onBack);
  useEffect(() => {
    onBackRef.current = onBack;
  }, [onBack]);
  useEffect(() => {
    if (!enabled) return;
    // Bubble phase on window: panels that handle Esc themselves (utility dock, drawers) stop it before it gets here.
    const onKeyDown = (event: KeyboardEvent) => {
      if (!escapeShouldGoBack(event)) return;
      event.preventDefault();
      onBackRef.current();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [enabled]);
}
