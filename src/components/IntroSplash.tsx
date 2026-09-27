import { useCallback, useEffect, useRef, useState } from 'react';
import { Wordmark } from './brand/AkuntansiHubLogo';
import './IntroSplash.css';

const STORAGE_KEY = 'splash_played';
const PANELS = [
  'M7 29 L20 22.5 V52 L7 58.5 Z',
  'M24 5 L43 15.5 L24 25.5 Z',
  'M27 28.5 L39.5 22 V50 L27 56.5 Z',
  'M44 22.5 L57 29 V58.5 L44 52 Z',
];

export default function IntroSplash() {
  const [visible, setVisible] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  const close = useCallback(() => {
    window.clearTimeout(timer.current);
    setVisible(false);
  }, []);

  useEffect(() => {
    let played = false;
    try {
      played = sessionStorage.getItem(STORAGE_KEY) === 'true';
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch { /* Storage may be unavailable in private mode. */ }
    if (played) return;
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    setVisible(true);
    timer.current = window.setTimeout(() => setVisible(false), reduced ? 500 : 1600);
    return () => window.clearTimeout(timer.current);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [visible, close]);

  if (!visible) return null;
  return (
    <div className="ahs-root fixed inset-0 z-[9999] flex items-center justify-center bg-bg text-ink"
      onClick={close} role="status" aria-label="Membuka AkuntansiHub">
      <button type="button" onClick={close}
        className="absolute right-4 top-[calc(env(safe-area-inset-top)+1rem)] min-h-11 rounded-lg border border-line-strong bg-surface px-4 text-sm font-semibold text-secondary hover:text-ink">
        Lewati
      </button>
      <div className="ahs-lockup" aria-hidden="true">
        <svg viewBox="0 0 64 64" className="ahs-mark" fill="none">
          <g strokeLinejoin="round" strokeWidth="2.4">
            {PANELS.map((d, index) => (
              <path key={d} className={`ahs-panel ahs-panel-${index + 1}`} d={d}
                fill={index === 2 ? 'var(--logo-support)' : 'var(--logo-primary)'}
                stroke={index === 2 ? 'var(--logo-support)' : 'var(--logo-primary)'} />
            ))}
          </g>
        </svg>
        <div className="ahs-word"><Wordmark className="text-3xl sm:text-5xl" /></div>
      </div>
    </div>
  );
}
