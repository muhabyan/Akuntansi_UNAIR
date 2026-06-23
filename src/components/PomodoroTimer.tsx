import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Timer, X, Coffee, Brain } from 'lucide-react';

type TimerMode = 'focus' | 'break';

const MODES = {
  focus: { label: 'Fokus', minutes: 25, icon: <Brain size={16} /> },
  break: { label: 'Istirahat', minutes: 5, icon: <Coffee size={16} /> }
};

export default function PomodoroTimer() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<TimerMode>('focus');
  const [timeLeft, setTimeLeft] = useState(MODES.focus.minutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  
  const playBell = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const playTone = (freq: number, startTime: number, duration: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.5, startTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + duration);
      };
      playTone(880, ctx.currentTime, 1);       // A5
      playTone(1108.73, ctx.currentTime + 0.15, 1.5); // C#6
    } catch (e) {
      console.log('Audio error', e);
    }
  };

  useEffect(() => {
    let interval: number | undefined;

    if (isRunning && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      playBell();
      
      // Auto switch mode
      if (mode === 'focus') {
        switchMode('break');
      } else {
        switchMode('focus');
      }
      setIsOpen(true); // Pop up when done
    }

    return () => window.clearInterval(interval);
  }, [isRunning, timeLeft, mode]);

  const switchMode = (newMode: TimerMode) => {
    setMode(newMode);
    setTimeLeft(MODES[newMode].minutes * 60);
    setIsRunning(false);
  };

  const toggleTimer = () => setIsRunning(!isRunning);

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(MODES[mode].minutes * 60);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progress = 100 - (timeLeft / (MODES[mode].minutes * 60)) * 100;

  return (
    <div className="fixed top-[60%] left-0 w-0 h-0 z-50 pointer-events-none -translate-y-1/2">
      {/* Expanded Panel */}
      <div 
        className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 origin-left ${
          isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-72 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <Timer size={18} className="text-blue-500" /> Pomodoro
            </h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 p-1 rounded-full transition"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg mb-6">
            <button
              onClick={() => switchMode('focus')}
              className={`flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-1.5 rounded-md transition-all ${
                mode === 'focus' 
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              {MODES.focus.icon} {MODES.focus.label}
            </button>
            <button
              onClick={() => switchMode('break')}
              className={`flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-1.5 rounded-md transition-all ${
                mode === 'break' 
                  ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              {MODES.break.icon} {MODES.break.label}
            </button>
          </div>

          <div className="flex flex-col items-center justify-center mb-6 relative">
            {/* Progress Circle (Decorative) */}
            <svg className="w-32 h-32 transform -rotate-90">
              <circle
                cx="64" cy="64" r="60"
                fill="none" strokeWidth="6"
                className="stroke-slate-100 dark:stroke-slate-800"
              />
              <circle
                cx="64" cy="64" r="60"
                fill="none" strokeWidth="6"
                strokeLinecap="round"
                className={`transition-all duration-1000 ${mode === 'focus' ? 'stroke-blue-500' : 'stroke-emerald-500'}`}
                strokeDasharray="377" // 2 * PI * 60
                strokeDashoffset={377 - (377 * progress) / 100}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-black text-slate-800 dark:text-slate-100 tracking-tighter">
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={toggleTimer}
              className={`pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-105 active:scale-95 ${
                mode === 'focus' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-emerald-600 hover:bg-emerald-700'
              }`}
            >
              {isRunning ? <Pause size={20} className="fill-current" /> : <Play size={20} className="fill-current ml-1" />}
            </button>
            <button
              onClick={resetTimer}
              className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-transform hover:scale-105 active:scale-95"
              title="Reset Timer"
            >
              <RotateCcw size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center shadow-lg transition-all duration-300 hover:pl-2 active:scale-95 ${
          isOpen 
            ? 'w-0 h-0 opacity-0 overflow-hidden' 
            : 'w-10 h-16 rounded-r-2xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white border-y border-r border-slate-200 dark:border-slate-700'
        }`}
      >
        <Timer size={20} className={isRunning ? 'text-blue-500 animate-pulse' : ''} />
      </button>
    </div>
  );
}
