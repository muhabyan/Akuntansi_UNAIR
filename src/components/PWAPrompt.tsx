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
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-[9999] p-4 bg-white/95 dark:bg-slate-850/95 backdrop-blur-md border border-emerald-500/40 dark:border-emerald-500/40 shadow-2xl rounded-2xl animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start justify-between mb-2.5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-emerald-100 dark:bg-emerald-950/70 rounded-full text-emerald-600 dark:text-emerald-400 ring-4 ring-emerald-500/10">
            <RefreshCw size={18} className={isUpdating ? "animate-spin text-emerald-600" : "animate-spin-slow"} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base leading-tight">
              Update Baru Tersedia!
            </h3>
            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
              Vercel Deploy Terdeteksi
            </span>
          </div>
        </div>
        <button 
          onClick={() => setNeedRefresh(false)}
          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title="Tutup notifikasi"
          aria-label="Tutup"
        >
          <X size={18} />
        </button>
      </div>
      
      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mb-3.5 leading-relaxed">
        Versi terbaru aplikasi telah siap. Klik tombol di bawah untuk langsung memperbarui materi dan fitur baru tanpa kehilangan data.
      </p>
      
      <div className="flex gap-2">
        <button
          onClick={handleUpdate}
          disabled={isUpdating}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 disabled:opacity-75 text-white font-semibold rounded-xl text-xs md:text-sm shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
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
          className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-xl text-xs md:text-sm transition-colors cursor-pointer"
        >
          Nanti Saja
        </button>
      </div>
    </aside>
  );
}
