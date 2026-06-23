import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function IntroSplash() {
  const [stage, setStage] = useState<'hidden' | 'entering' | 'glowing' | 'exiting'>('hidden');

  useEffect(() => {
    // Cek apakah animasi sudah dijalankan di sesi ini (agar tidak terus muncul tiap ganti halaman)
    const hasPlayed = sessionStorage.getItem('splash_played');
    if (hasPlayed) return;

    // Mulai animasi
    setStage('entering');
    
    const t0 = setTimeout(() => setStage('glowing'), 100);
    const t1 = setTimeout(() => setStage('exiting'), 2500);
    const t2 = setTimeout(() => {
      setStage('hidden');
      sessionStorage.setItem('splash_played', 'true');
    }, 3200);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (stage === 'hidden') return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 transition-transform duration-700 ease-in-out ${
        stage === 'exiting' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Efek Glow Latar Belakang */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <div className={`absolute w-[25rem] h-[25rem] md:w-[35rem] md:h-[35rem] rounded-full bg-blue-600/20 blur-[100px] transition-opacity duration-1000 ${stage === 'glowing' ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] rounded-full bg-yellow-500/10 blur-[80px] transition-opacity duration-1000 delay-300 ${stage === 'glowing' ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      <div className={`relative z-10 flex flex-col items-center transform transition-all duration-1000 ${stage === 'entering' ? 'translate-y-12 opacity-0 scale-95' : 'translate-y-0 opacity-100 scale-100'}`}>
        <div className="mb-6 flex items-center justify-center">
          <Sparkles 
            className={`w-10 h-10 md:w-14 md:h-14 text-yellow-500 transition-all duration-1000 delay-500 ${stage === 'glowing' ? 'opacity-100 rotate-12 scale-100' : 'opacity-0 -rotate-45 scale-50'}`} 
            strokeWidth={1.5} 
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-100 via-slate-200 to-slate-400 tracking-tight text-center leading-tight">
          Akuntansi<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600">UNAIR</span>
        </h1>
        
        <p className={`mt-6 font-bold tracking-[0.25em] text-blue-400/90 uppercase text-[10px] md:text-xs transition-all duration-1000 delay-300 ${stage === 'glowing' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Excellence with Morality
        </p>

        <div className={`mt-8 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent transition-all duration-1000 delay-700 ease-out ${stage === 'glowing' ? 'w-32 md:w-48 opacity-100' : 'w-0 opacity-0'}`} />
      </div>
    </div>
  );
}
