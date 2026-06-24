import { useEffect, useRef } from 'react';

export default function MotionBackground() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 192}px, ${e.clientY - 192}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-[rgb(var(--color-bg-page))]">
      {/* Interactive Cursor Aura */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-96 h-96 bg-blue-500/20 dark:bg-blue-400/10 rounded-full filter blur-[120px] transition-transform duration-150 ease-out"
        style={{ transform: 'translate(-1000px, -1000px)' }}
      ></div>

      {/* Motion Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full filter blur-[120px] opacity-15 animate-blob"></div>
        <div className="absolute top-20 -right-20 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full filter blur-[120px] opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[400px] left-1/3 w-96 h-96 bg-indigo-400 dark:bg-indigo-600 rounded-full filter blur-[120px] opacity-15 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
}
