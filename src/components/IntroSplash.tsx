import { useState, useEffect } from 'react';
import { Sparkles, GraduationCap } from 'lucide-react';

export default function IntroSplash() {
  const [stage, setStage] = useState<'hidden' | 'entering' | 'glowing' | 'exiting'>('hidden');

  useEffect(() => {
    // Cek apakah animasi sudah dijalankan di sesi ini
    const hasPlayed = sessionStorage.getItem('splash_played');
    if (hasPlayed) return;

    // Mulai animasi
    setStage('entering');
    
    // Sequence timing
    const t0 = setTimeout(() => setStage('glowing'), 150);
    const t1 = setTimeout(() => setStage('exiting'), 3200);
    const t2 = setTimeout(() => {
      setStage('hidden');
      sessionStorage.setItem('splash_played', 'true');
    }, 4200);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (stage === 'hidden') return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712] overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        stage === 'exiting' ? 'opacity-0 scale-[1.1] blur-xl pointer-events-none' : 'opacity-100 scale-100 blur-0'
      }`}
    >
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {/* Grid pattern subtle */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 mask-radial-faded" />
        
        {/* Dynamic Orbs */}
        <div className={`absolute top-0 left-0 w-[30rem] h-[30rem] bg-indigo-600/30 rounded-full blur-[100px] transition-all duration-[3s] ease-out ${
          stage === 'glowing' ? 'translate-x-10 translate-y-10 scale-150 opacity-100' : '-translate-x-32 -translate-y-32 scale-50 opacity-0'
        }`} />
        <div className={`absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-amber-500/20 rounded-full blur-[100px] transition-all duration-[3s] ease-out delay-300 ${
          stage === 'glowing' ? '-translate-x-10 -translate-y-10 scale-150 opacity-100' : 'translate-x-32 translate-y-32 scale-50 opacity-0'
        }`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] bg-blue-400/20 rounded-full blur-[80px] transition-all duration-[2s] ease-in-out ${
          stage === 'glowing' ? 'scale-[2.5] opacity-0' : 'scale-0 opacity-100'
        }`} />
      </div>

      {/* --- RIPPLE EXPANSION --- */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full transition-all duration-[2.5s] ease-out ${
        stage === 'glowing' ? 'scale-[4] opacity-0' : 'scale-0 opacity-100'
      }`} />

      {/* --- CONTENT --- */}
      <div className={`relative z-10 flex flex-col items-center transform transition-all duration-[1.2s] cubic-bezier(0.34, 1.56, 0.64, 1) ${
        stage === 'entering' ? 'translate-y-24 opacity-0 scale-75' : 'translate-y-0 opacity-100 scale-100'
      }`}>
        
        {/* Icon & Sparkles */}
        <div className="relative mb-6 flex items-center justify-center">
          <div className={`absolute transition-all duration-1000 delay-500 ${stage === 'glowing' ? 'scale-[3] opacity-0' : 'scale-50 opacity-100'}`}>
            <div className="w-16 h-16 rounded-full bg-amber-400/30 blur-xl" />
          </div>
          
          <GraduationCap 
            className={`w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-1000 delay-300 relative z-10 ${
              stage === 'glowing' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} 
            strokeWidth={1.5} 
          />
          
          <Sparkles 
            className={`absolute -right-6 -top-4 w-6 h-6 md:w-8 md:h-8 text-amber-400 transition-all duration-1000 delay-[800ms] ${
              stage === 'glowing' ? 'opacity-100 rotate-12 scale-100' : 'opacity-0 -rotate-90 scale-0'
            }`} 
            strokeWidth={2} 
          />
          <Sparkles 
            className={`absolute -left-6 bottom-0 w-4 h-4 md:w-6 md:h-6 text-indigo-400 transition-all duration-1000 delay-[1000ms] ${
              stage === 'glowing' ? 'opacity-100 -rotate-12 scale-100' : 'opacity-0 rotate-90 scale-0'
            }`} 
            strokeWidth={2} 
          />
        </div>
        
        {/* Title */}
        <div className="text-center relative">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-1 relative z-10">
            <span className={`inline-block transition-all duration-[1s] delay-[400ms] ${stage === 'glowing' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              Akuntansi
            </span>
          </h1>
          <h1 className="text-5xl md:text-7xl font-black leading-none mb-2">
            <span className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 transition-all duration-[1s] delay-[600ms] ${stage === 'glowing' ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-110'}`}>
              UNAIR
            </span>
          </h1>
          
          {/* Subtle light sweep across text */}
          <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] transition-all duration-[1.5s] ease-in-out delay-[1000ms] ${stage === 'glowing' ? 'translate-x-[200%] opacity-100' : '-translate-x-[100%] opacity-0'}`} style={{ mixBlendMode: 'overlay' }} />
        </div>
        
        {/* Tagline */}
        <div className="relative mt-8 overflow-hidden rounded-full px-6 py-2">
          {/* Background pill glow */}
          <div className={`absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-amber-500/10 to-indigo-500/10 transition-all duration-1000 delay-[1200ms] ${stage === 'glowing' ? 'opacity-100' : 'opacity-0'}`} />
          
          <p className={`relative z-10 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-white to-amber-200 transition-all duration-[1s] delay-[900ms] ${
            stage === 'glowing' ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'
          }`}>
            Excellence with Morality
          </p>
          
          {/* Top & bottom borders extending */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-1000 delay-[1000ms] ${stage === 'glowing' ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
          <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-1000 delay-[1000ms] ${stage === 'glowing' ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
        </div>

      </div>
    </div>
  );
}
