import { useCallback, useEffect, useRef, useState } from 'react';
import './IntroSplash.css';

/**
 * Splash pembuka AkuntansiHub (±2 detik, sekali per sesi).
 *
 * 0.0–0.9s  akun T tergambar, saldo Debit & Kredit berputar sampai sama
 * 0.9–1.3s  akun T mengecil, logo "Neraca" (H) dan wordmark muncul
 * 1.3–1.7s  tagline
 * 1.7–2.0s  splash memudar, home page tampil
 *
 * Klik/tap di mana saja atau tekan Esc untuk melewati.
 * Pengguna dengan "reduce motion" hanya melihat logo statis sebentar.
 */

const STORAGE_KEY = 'splash_played';
const DURATION_MS = 2000;
const REDUCED_DURATION_MS = 600;

// Saldo yang ditampilkan: 1.250.000 (digit → posisi stagger)
const AMOUNT = ['1', '.', '2', '5', '0', '.', '0', '0', '0'];
const DIGITS = '0123456789'.split('');

function RollingAmount({ side }: { side: 'L' | 'R' }) {
  let digitIndex = 0;
  return (
    <div className={`ahs-amount ahs-${side}`}>
      {AMOUNT.map((ch, i) => {
        if (ch === '.') {
          return (
            <span key={i} className="ahs-dot">
              .
            </span>
          );
        }
        digitIndex += 1;
        return (
          <span key={i} className="ahs-dg">
            <span className={`ahs-st ahs-d${ch} ahs-w${digitIndex}`}>
              {DIGITS.map((d) => (
                <span key={d} className="ahs-digit">
                  {d}
                </span>
              ))}
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default function IntroSplash() {
  const [visible, setVisible] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  const close = useCallback(() => {
    window.clearTimeout(timer.current);
    setVisible(false);
  }, []);

  useEffect(() => {
    let alreadyPlayed = false;
    try {
      alreadyPlayed = sessionStorage.getItem(STORAGE_KEY) === 'true';
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // sessionStorage bisa diblokir (mode privat tertentu): tetap tampilkan sekali.
    }
    if (alreadyPlayed) return;

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    setVisible(true);
    timer.current = window.setTimeout(() => setVisible(false), reduced ? REDUCED_DURATION_MS : DURATION_MS);

    return () => window.clearTimeout(timer.current);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [visible, close]);

  if (!visible) return null;

  return (
    <div
      className="ahs-root fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
      onClick={close}
      role="status"
      aria-label="Membuka AkuntansiHub"
    >
      <button
        type="button"
        onClick={close}
        className="absolute right-4 top-[calc(env(safe-area-inset-top)+1rem)] min-h-11 rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-600 transition-colors hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white"
      >
        Lewati
      </button>

      <div className="ahs-stage" aria-hidden="true">
        {/* Babak 1: akun T yang seimbang */}
        <div className="ahs-intro">
          <div className="ahs-labels text-gray-500 dark:text-gray-400">
            <span className="ahs-lbl">DEBIT</span>
            <span className="ahs-lbl">KREDIT</span>
          </div>
          <div className="ahs-bar bg-gray-900 dark:bg-white" />
          <div className="ahs-stem bg-gray-900 dark:bg-white" />
          <RollingAmount side="L" />
          <RollingAmount side="R" />
          <div className="ahs-dl ahs-dl1 bg-blue-600 dark:bg-blue-400" />
          <div className="ahs-dl ahs-dl2 bg-blue-600 dark:bg-blue-400" />
          <div className="ahs-dl ahs-dr1 bg-blue-600 dark:bg-blue-400" />
          <div className="ahs-dl ahs-dr2 bg-blue-600 dark:bg-blue-400" />
        </div>

        {/* Babak 2: logo Neraca + wordmark */}
        <div className="ahs-lockup">
          <svg viewBox="0 0 64 64" className="ahs-tile">
            <rect width="64" height="64" rx="15" className="fill-blue-50 dark:fill-blue-400/15" />
            <rect x="17" y="14" width="8" height="36" rx="2" className="ahs-barL fill-gray-900 dark:fill-white" />
            <rect x="39" y="14" width="8" height="36" rx="2" className="ahs-barR fill-gray-900 dark:fill-white" />
            <rect x="25" y="29" width="14" height="6" rx="1" className="ahs-cross fill-blue-600 dark:fill-blue-400" />
          </svg>
          <span className="ahs-wm font-display">
            akuntansi<span className="text-blue-600 dark:text-blue-400">hub</span>
          </span>
        </div>
      </div>

      <p className="ahs-tag mt-2 px-6 text-center font-sans text-base font-medium text-gray-600 dark:text-gray-300 md:text-xl">
        Paham dulu, <span className="font-bold text-gray-900 dark:text-white">balance</span> menyusul.
      </p>
    </div>
  );
}
