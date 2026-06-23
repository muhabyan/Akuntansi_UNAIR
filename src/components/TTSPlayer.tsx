import { useState, useEffect, useRef } from 'react';
import { Volume2, Square, Pause, Play } from 'lucide-react';

interface TTSPlayerProps {
  title: string;
  intro: string;
  blocks: any[];
}

function extractText(blocks: any[]): string {
  let text = '';
  blocks.forEach(b => {
    if (b.text) text += b.text + '. ';
    if (b.items) text += b.items.join('. ') + '. ';
    if (b.caption) text += b.caption + '. ';
    if (b.blocks) text += extractText(b.blocks);
    // Omit complex tables or journals to avoid confusing audio
  });
  return text.replace(/[*_#`~]/g, '');
}

export default function TTSPlayer({ title, intro, blocks }: TTSPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    // Prepare text
    const fullText = `${title}. ${intro}. ${extractText(blocks)}`;
    
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'id-ID'; // Indonesian
    utterance.rate = 0.9;     // Slightly slower for learning
    
    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = (e) => {
      if (e.error !== 'interrupted') {
        console.error('TTS Error:', e);
      }
      setIsPlaying(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [title, intro, blocks]);

  const togglePlay = () => {
    if (!isSupported || !utteranceRef.current) return;

    if (isPlaying) {
      if (isPaused) {
        window.speechSynthesis.resume();
        setIsPaused(false);
      } else {
        window.speechSynthesis.pause();
        setIsPaused(true);
      }
    } else {
      // Cancel any ongoing speech first just in case
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utteranceRef.current);
      setIsPlaying(true);
      setIsPaused(false);
    }
  };

  const stopPlay = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  if (!isSupported) return null;

  return (
    <div className="fixed bottom-24 right-6 z-40 flex items-center gap-2">
      <div 
        className={`flex items-center gap-2 bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 p-2 rounded-full transition-all duration-300 origin-right ${
          isPlaying || isPaused ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-4 scale-95 pointer-events-none absolute right-full mr-2'
        }`}
      >
        <button 
          onClick={stopPlay}
          className="w-10 h-10 flex items-center justify-center bg-rose-100 hover:bg-rose-200 dark:bg-rose-900/30 dark:hover:bg-rose-900/50 text-rose-600 dark:text-rose-400 rounded-full transition active:scale-95"
          title="Stop"
        >
          <Square size={16} className="fill-current" />
        </button>
        <div className="px-3 flex flex-col justify-center">
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Sedang Dibacakan</span>
          <span className="text-[10px] text-slate-500">
            {isPaused ? 'Dijeda' : 'Memutar materi...'}
          </span>
        </div>
      </div>

      <button
        onClick={togglePlay}
        className={`w-14 h-14 flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 ${
          isPlaying && !isPaused
            ? 'bg-blue-600 text-white'
            : isPaused 
              ? 'bg-amber-500 text-white'
              : 'bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-900'
        }`}
        title={isPlaying && !isPaused ? "Pause" : "Play Bacakan"}
      >
        <div className="relative">
          {isPlaying && !isPaused ? <Pause size={24} className="fill-current" /> : <Play size={24} className="fill-current ml-1" />}
          {isPlaying && !isPaused && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
          )}
        </div>
      </button>
    </div>
  );
}
