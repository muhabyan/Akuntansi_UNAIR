// @ts-ignore
import { useRegisterSW } from 'virtual:pwa-register/react';
import { RefreshCw, X } from 'lucide-react';

export default function PWAPrompt() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r: any) {
      console.log('SW Registered: ' + r);
    },
    onRegisterError(error: any) {
      console.log('SW registration error', error);
    },
  });

  if (!needRefresh) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-[9999] p-4 bg-white dark:bg-slate-800 border border-emerald-500/30 dark:border-emerald-500/30 shadow-2xl rounded-2xl animate-in slide-in-from-bottom-5">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-full text-emerald-600 dark:text-emerald-400">
            <RefreshCw size={18} className="animate-spin-slow" />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white">Update Tersedia!</h3>
        </div>
        <button 
          onClick={() => setNeedRefresh(false)}
          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
        >
          <X size={20} />
        </button>
      </div>
      
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
        Ada versi terbaru dari aplikasi ini (patch/materi baru). Klik tombol di bawah untuk langsung memperbarui tanpa harus install ulang.
      </p>
      
      <div className="flex gap-2">
        <button
          onClick={() => updateServiceWorker(true)}
          className="flex-1 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition-colors"
        >
          Update Sekarang
        </button>
        <button
          onClick={() => setNeedRefresh(false)}
          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-semibold rounded-xl text-sm transition-colors"
        >
          Nanti Saja
        </button>
      </div>
    </div>
  );
}
