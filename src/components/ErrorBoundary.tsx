// =============================================================
// src/components/ErrorBoundary.tsx
// Error Boundary premium bergaya glassmorphism untuk menangkap
// kegagalan rendering & chunk load errors (lazy import failure)
// sehingga mencegah layar blank saat navigasi antar mata kuliah.
// =============================================================
import { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  onReset?: () => void;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in ErrorBoundary:', error, errorInfo);

    // Cek apakah error disebabkan oleh gagal muat chunk dynamic import (misal setelah deploy/update)
    const isChunkLoadError =
      error?.message?.includes('Failed to fetch dynamically imported module') ||
      error?.message?.includes('Loading chunk') ||
      error?.message?.includes('Importing a module script failed') ||
      error?.name === 'ChunkLoadError';

    if (isChunkLoadError) {
      const storageKey = 'chunk_reload_attempted';
      const hasAttempted = sessionStorage.getItem(storageKey);

      if (!hasAttempted) {
        sessionStorage.setItem(storageKey, 'true');
        window.location.reload();
        return;
      } else {
        sessionStorage.removeItem(storageKey);
      }
    }
  }

  private handleReload = () => {
    sessionStorage.removeItem('chunk_reload_attempted');
    window.location.reload();
  };

  private handleGoHome = () => {
    sessionStorage.removeItem('chunk_reload_attempted');
    if (this.props.onReset) {
      this.setState({ hasError: false, error: null });
      this.props.onReset();
    } else {
      window.location.href = '/';
    }
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-[70vh] w-full flex-col items-center justify-center px-4 py-16 animate-fade-in-up">
          <div className="course-card-glass max-w-md w-full rounded-[2rem] border border-gold/30 bg-navy-900/80 p-8 text-center shadow-2xl backdrop-blur-xl">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/15 text-gold shadow-inner">
              <AlertTriangle size={32} className="animate-pulse" />
            </div>

            <h2 className="mb-3 text-xl font-black tracking-tight text-white md:text-2xl">
              Terjadi Kendala Memuat Halaman
            </h2>

            <p className="mb-6 text-sm leading-6 text-slate-300">
              Sistem mengalami kendala saat memuat modul mata kuliah ini. Hal ini biasanya terjadi akibat pembaruan sistem baru atau koneksi internet yang sempat terputus sesaat.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={this.handleReload}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold to-amber-500 px-5 py-3.5 text-sm font-bold text-navy-950 shadow-lg transition hover:brightness-110 active:scale-[0.98]"
              >
                <RefreshCw size={16} />
                Muat Ulang Halaman
              </button>

              <button
                type="button"
                onClick={this.handleGoHome}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 active:scale-[0.98]"
              >
                <Home size={16} />
                Beranda
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
