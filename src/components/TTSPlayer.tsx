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
    <div className="flex items-center gap-2 mb-8 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl border border-blue-100 dark:border-blue-900/30">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300">
        <Volume2 size={20} />
      </div>
      <div className="flex-1 ml-2">
        <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">Dengarkan Materi</p>
        <p className="text-xs text-blue-700 dark:text-blue-300">Cocok untuk gaya belajar auditori.</p>
      </div>
      
      <div className="flex items-center gap-1">
        <button 
          onClick={togglePlay}
          className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm transition active:scale-95"
          title={isPlaying && !isPaused ? "Pause" : "Play"}
        >
          {isPlaying && !isPaused ? <Pause size={18} className="fill-current" /> : <Play size={18} className="fill-current ml-0.5" />}
        </button>
        {isPlaying && (
          <button 
            onClick={stopPlay}
            className="p-2.5 bg-rose-100 hover:bg-rose-200 dark:bg-rose-900/30 dark:hover:bg-rose-900/50 text-rose-600 dark:text-rose-400 rounded-lg transition active:scale-95"
            title="Stop"
          >
            <Square size={16} className="fill-current" />
          </button>
        )}
      </div>
    </div>
  );
}
