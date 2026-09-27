// @ts-expect-error virtual module might not have types locally
import { useRegisterSW } from 'virtual:pwa-register/react';
import { RefreshCw, X, ArrowUpCircle } from 'lucide-react';
import { useState } from 'react';

export default function PWAPrompt() {
  const [isUpdating, setIsUpdating] = useState(false);

  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    immediate: true,
    onRegistered(registration: any) {
      if (!registration) return;

      // 1. Cek update seketika 2.5 detik setelah aplikasi selesai inisialisasi
      const initialTimer = setTimeout(() => {
        registration.update().catch(() => {});
      }, 2500);

      // 2. Cek update otomatis saat tab dibuka kembali dari background / multitask
      const handleVisibilityOrFocus = () => {
        if (document.visibilityState === 'visible' && navigator.onLine) {
          registration.update().catch(() => {});
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityOrFocus);
      window.addEventListener('focus', handleVisibilityOrFocus);

      // 3. Cek berkala di background setiap 5 menit (300.000 ms)
      const intervalTimer = setInterval(() => {
        if (navigator.onLine) {
          registration.update().catch(() => {});
        }
      }, 5 * 60 * 1000);

      return () => {
        clearTimeout(initialTimer);
        clearInterval(intervalTimer);
        document.removeEventListener('visibilitychange', handleVisibilityOrFocus);
        window.removeEventListener('focus', handleVisibilityOrFocus);
      };
    },
    onRegisterError(error: any) {
      console.warn('SW registration warning:', error);
    },
  });

  const handleUpdate = () => {
    setIsUpdating(true);
    // Trigger Workbox skipWaiting & reload window
    updateServiceWorker(true);
  };

  if (!needRefresh) return null;

  return (
    <aside
      aria-label="Pemberitahuan Pembaruan Aplikasi"
      className="fixed bottom-4 left-4 right-4 z-[9999] rounded-xl border border-line bg-surface p-4 shadow-md animate-in fade-in duration-200 md:left-auto md:right-4 md:w-96"
    >
      <div className="flex items-start justify-between mb-2.5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-emerald-100 dark:bg-emerald-950/70 rounded-full text-emerald-600 dark:text-emerald-400 ring-4 ring-emerald-500/10">
            <RefreshCw size={18} className={isUpdating ? "animate-spin text-emerald-600" : "animate-spin-slow"} />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm md:text-base leading-tight md:leading-tight">
              Update Baru Tersedia!
            </h3>
            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
              Vercel Deploy Terdeteksi
            </span>
          </div>
        </div>
        <button 
          onClick={() => setNeedRefresh(false)}
          className="text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          title="Tutup notifikasi"
          aria-label="Tutup"
        >
          <X size={18} />
        </button>
      </div>
      
      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-3.5 leading-relaxed">
        Versi terbaru aplikasi telah siap. Klik tombol di bawah untuk langsung memperbarui materi dan fitur baru tanpa kehilangan data.
      </p>
      
      <div className="flex gap-2">
        <button
          onClick={handleUpdate}
          disabled={isUpdating}
          className="inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-gray-800 disabled:opacity-75 md:text-sm"
        >
          {isUpdating ? (
            <>
              <RefreshCw size={15} className="animate-spin" />
              <span>Memperbarui...</span>
            </>
          ) : (
            <>
              <ArrowUpCircle size={16} />
              <span>Update Sekarang</span>
            </>
          )}
        </button>
        <button
          onClick={() => setNeedRefresh(false)}
          disabled={isUpdating}
          className="px-3.5 py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 font-medium rounded-xl text-xs md:text-sm transition-colors cursor-pointer"
        >
          Nanti Saja
        </button>
      </div>
    </aside>
  );
}
