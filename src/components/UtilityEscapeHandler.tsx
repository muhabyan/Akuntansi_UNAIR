import { useEffect } from 'react';

export default function UtilityEscapeHandler() {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || document.querySelector('[data-auth-modal]')) return;
      if (!document.querySelector('[data-utility-panel][aria-hidden="false"]')) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      window.dispatchEvent(new Event('akuntansihub:close-utility'));
    };
    window.addEventListener('keydown', onKeyDown, true);
    return () => window.removeEventListener('keydown', onKeyDown, true);
  }, []);
  return null;
}
