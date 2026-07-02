import { useState, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';

export default function IntroSplash() {
  const [stage, setStage] = useState<'hidden' | 'entering' | 'visible' | 'exiting'>('hidden');

  useEffect(() => {
    // Cek apakah animasi sudah dijalankan di sesi ini
    const hasPlayed = sessionStorage.getItem('splash_played');
    if (hasPlayed) return;

    // Mulai sequence animasi
    setStage('entering');
    
    // Sedikit delay agar transisi masuk (entering -> visible) terlihat sangat smooth
    const t0 = setTimeout(() => setStage('visible'), 100);
    
    // Tahan di layar selama 2.5 detik, lalu mulai proses keluar
    const t1 = setTimeout(() => setStage('exiting'), 2500);
    
    // Bersihkan layar setelah efek memudar selesai
    const t2 = setTimeout(() => {
      setStage('hidden');
      sessionStorage.setItem('splash_played', 'true');
    }, 3300);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (stage === 'hidden') return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#09090b] overflow-hidden transition-opacity duration-[800ms] ease-in-out ${
        stage === 'exiting' ? 'opacity-0 pointer-events-none backdrop-blur-sm' : 'opacity-100 backdrop-blur-none'
      }`}
    >
      {/* --- ELEGANT AMBIENT BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Subtle Minimalist Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 mask-radial-faded" />
        
        {/* Single Elegant Central Glow */}
        <div className={`absolute w-[50rem] h-[50rem] rounded-full bg-blue-600/10 blur-[120px] transition-all duration-[2000ms] ease-out ${
          stage === 'visible' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`} />
      </div>

      {/* --- MAIN CONTENT (GLASSMORPHISM & CLEAN TYPOGRAPHY) --- */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        
        {/* Glass Icon Box */}
        <div className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          stage === 'visible' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="w-20 h-20 mb-8 rounded-2xl bg-gradient-to-tr from-gray-800/60 to-gray-700/30 border border-gray-600/30 flex items-center justify-center shadow-2xl shadow-black/80 backdrop-blur-md relative overflow-hidden">
            {/* Shimmer effect inside box */}
            <div className={`absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-[1500ms] ease-in-out delay-[800ms] ${
              stage === 'visible' ? 'translate-x-[200%]' : '-translate-x-full'
            }`} />
            
            <GraduationCap 
              className="w-10 h-10 text-gray-200" 
              strokeWidth={1.5} 
            />
          </div>
        </div>
        
        {/* Typography Sequence */}
        <div className="text-center overflow-hidden flex flex-col items-center">
          <h1 className={`text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-[200ms] ${
            stage === 'visible' ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-8 opacity-0 blur-sm'
          }`}>
            Akuntansi
          </h1>
          <p className={`text-sm md:text-base font-medium tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 uppercase transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-[400ms] ${
            stage === 'visible' ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-8 opacity-0 blur-sm'
          }`}>
            FEB UNAIR
          </p>
        </div>
        
        {/* Subtle decorative dividing line */}
        <div className={`w-16 h-px bg-gradient-to-r from-transparent via-gray-500/40 to-transparent mt-10 transition-all duration-[1500ms] ease-out delay-[600ms] ${
          stage === 'visible' ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
        }`} />
      </div>
    </div>
  );
}
