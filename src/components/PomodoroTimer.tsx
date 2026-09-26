import { useState, useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw, Timer, X, Coffee, Brain } from 'lucide-react';
import { useDraggableWidget } from '../hooks/useDraggableWidget';

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
  
  const draggable = useDraggableWidget({
    id: 'pomodoro-timer',
    defaultPosition: { x: 16, y: window.innerHeight / 2 - 28 }
  });

  const openPanel = useCallback(() => {
    window.dispatchEvent(new CustomEvent('akuntansihub:utility-open', { detail: { id: 'pomodoro-timer' } }));
    setIsOpen(true);
  }, []);

  useEffect(() => {
    window.addEventListener('open-pomodoro', openPanel);
    return () => window.removeEventListener('open-pomodoro', openPanel);
  }, [openPanel]);

  useEffect(() => {
    const closeWhenAnotherUtilityOpens = (event: Event) => {
      if ((event as CustomEvent<{ id?: string }>).detail?.id !== 'pomodoro-timer') setIsOpen(false);
    };
    const closeUtility = () => setIsOpen(false);
    window.addEventListener('akuntansihub:utility-open', closeWhenAnotherUtilityOpens);
    window.addEventListener('akuntansihub:close-utility', closeUtility);
    return () => {
      window.removeEventListener('akuntansihub:utility-open', closeWhenAnotherUtilityOpens);
      window.removeEventListener('akuntansihub:close-utility', closeUtility);
    };
  }, []);
  
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
      console.error('Audio error', e);
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
      openPanel(); // Pop up when done
    }

    return () => window.clearInterval(interval);
  }, [isRunning, timeLeft, mode, openPanel]);

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

  const isLeftHalf = typeof window !== 'undefined' ? draggable.position.x < (document.documentElement.clientWidth || window.innerWidth) / 2 : false;
  const isTopHalf = typeof window !== 'undefined' ? draggable.position.y < window.innerHeight / 2 : false;

  return (
    <>
      {/* Expanded Panel */}
      <div 
        id="pomodoro-panel"
        data-utility-panel="pomodoro-timer"
        aria-hidden={!isOpen}
        ref={(panel) => { panel?.toggleAttribute('inert', !isOpen); }}
        className={`mobile-utility-panel mobile-utility-panel--pomodoro fixed z-[100] transition-[transform,opacity] duration-200 ease-out ${
          isTopHalf ? 'origin-top' : 'origin-bottom'
        }-${isLeftHalf ? 'left' : 'right'} ${
          !isOpen ? 'scale-90 opacity-0 pointer-events-none' : 'scale-100 opacity-100 pointer-events-auto'
        }`}
        style={draggable.isDesktop ? draggable.getPanelStyle(288, 300) : undefined}
      >
        <div className="mobile-utility-card mobile-utility-card--pomodoro w-72 max-h-full overflow-y-auto rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/15 dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/30">
          <div className="mb-3 flex select-none items-center justify-between border-b border-slate-200 pb-2 dark:border-slate-700">
            <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100">
              <Timer size={18} className="text-blue-500" /> Pomodoro
            </h3>
            <button 
              onPointerDown={(e) => e.stopPropagation()}
              onPointerUp={(e) => e.stopPropagation()}
              onClick={() => setIsOpen(false)}
              aria-label="Tutup Pomodoro"
              className="relative z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
              title="Tutup Pomodoro"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <div className="mb-3 flex gap-2">
            <button
              onClick={() => switchMode('focus')}
              className={`flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-lg border px-2 text-sm font-semibold transition-colors ${
                mode === 'focus' 
                  ? 'border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-700 dark:bg-blue-950/60 dark:text-blue-200'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {MODES.focus.icon} {MODES.focus.label}
            </button>
            <button
              onClick={() => switchMode('break')}
              className={`flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-lg border px-2 text-sm font-semibold transition-colors ${
                mode === 'break' 
                  ? 'border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {MODES.break.icon} {MODES.break.label}
            </button>
          </div>

          <div className="relative mb-3 flex flex-col items-center justify-center">
            {/* Progress Circle (Decorative) */}
            <svg className="h-28 w-28 -rotate-90" viewBox="0 0 112 112" aria-hidden="true">
              <circle
                cx="56" cy="56" r="50"
                fill="none" strokeWidth="6"
                className="stroke-slate-100 dark:stroke-slate-800"
              />
              <circle
                cx="56" cy="56" r="50"
                fill="none" strokeWidth="6"
                strokeLinecap="round"
                className={`transition-all duration-1000 ${mode === 'focus' ? 'stroke-blue-500' : 'stroke-emerald-500'}`}
                strokeDasharray="314" // approximately 2 * PI * 50
                strokeDashoffset={314 - (314 * progress) / 100}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={toggleTimer}
              aria-label={isRunning ? 'Jeda Pomodoro' : 'Mulai Pomodoro'}
              className={`pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full text-white shadow-sm transition-transform hover:scale-105 active:scale-95 ${
                mode === 'focus' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-emerald-600 hover:bg-emerald-700'
              }`}
            >
              {isRunning ? <Pause size={20} className="fill-current" /> : <Play size={20} className="fill-current ml-1" />}
            </button>
            <button
              onClick={resetTimer}
              aria-label="Reset Pomodoro"
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
              title="Reset Timer"
            >
              <RotateCcw size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Toggle Button */}
      <button
        ref={draggable.ref}
        {...(draggable.isDesktop ? draggable.handlers : {})}
        type="button"
        aria-label={isOpen ? 'Tutup Pomodoro' : 'Buka Pomodoro'}
        aria-controls="pomodoro-panel"
        aria-expanded={isOpen}
        title={isOpen ? 'Tutup Pomodoro' : 'Buka Pomodoro'}
        onClick={(e) => {
          if (draggable.isMoved) {
            e.preventDefault();
            e.stopPropagation();
            return;
          }
          if (isOpen) setIsOpen(false);
          else openPanel();
        }}
        style={draggable.isDesktop ? {
          ...draggable.handlers.style,
          position: 'fixed',
          left: `clamp(0px, ${draggable.position.x}px, calc(100vw - 48px))`,
          top: `clamp(70px, ${draggable.position.y}px, calc(100vh - 48px))`,
          zIndex: 100
        } : undefined}
        className={`utility-launcher-quiet group flex items-center justify-center shadow-md ${!isOpen ? 'mobile-utility-launcher mobile-utility-launcher--pomodoro' : ''} ${
          draggable.isDragging ? 'transition-none cursor-grabbing scale-105' : 'transition-[all] duration-300'
        } touch-none ${
          draggable.isLongPressing ? 'shadow-xl ring-4 ring-slate-400/50' : 'cursor-pointer active:scale-95'
        } ${
          isOpen 
            ? 'w-0 h-0 opacity-0 overflow-hidden' 
            : (() => {
                if (!draggable.isDesktop) {
                  if (draggable.edgeState === 'left') return draggable.isLongPressing ? 'w-12 h-12 rounded-r-2xl bg-white dark:bg-slate-900 border-y border-r border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200' : 'w-1.5 h-10 rounded-r-md bg-white/60 dark:bg-slate-900/60 active:w-12 active:h-12 active:rounded-r-2xl active:bg-white active:dark:bg-slate-900 border-y border-r border-slate-200/50 dark:border-slate-700/50 text-slate-800 dark:text-slate-200';
                  if (draggable.edgeState === 'right') return draggable.isLongPressing ? 'w-12 h-12 rounded-l-2xl bg-white dark:bg-slate-900 border-y border-l border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200' : 'w-1.5 h-10 rounded-l-md bg-white/60 dark:bg-slate-900/60 active:w-12 active:h-12 active:rounded-l-2xl active:bg-white active:dark:bg-slate-900 border-y border-l border-slate-200/50 dark:border-slate-700/50 text-slate-800 dark:text-slate-200';
                  return 'w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 opacity-50';
                } else {
                  if (draggable.edgeState === 'left') return 'w-10 h-12 rounded-r-xl bg-white dark:bg-slate-900 border-y border-r border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200';
                  if (draggable.edgeState === 'right') return 'w-10 h-12 rounded-l-xl bg-white dark:bg-slate-900 border-y border-l border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200';
                  return 'w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 opacity-50 hover:opacity-100 transition-opacity';
                }
              })()
        }`}
      >
        {!isOpen && <Timer size={20} className={`${isRunning ? 'text-blue-500 animate-pulse' : ''} ${!draggable.isDesktop && draggable.edgeState && !draggable.isLongPressing ? 'opacity-0 group-active:opacity-100 transition-opacity duration-200' : ''}`} />}
      </button>
    </>
  );
}
