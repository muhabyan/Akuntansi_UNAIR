import { useEffect, useRef, useState } from 'react';
import { Bot, Clock3, MessageSquare, MessageSquarePlus, X, Wrench } from 'lucide-react';

const actions = [
  { label: 'AI Tutor', icon: Bot, event: 'open-ai-tutor' },
  { label: 'Kelas Global', icon: MessageSquare, event: 'open-global-chat' },
  { label: 'Pomodoro', icon: Clock3, event: 'open-pomodoro' },
  { label: 'Request Materi & Feedback', icon: MessageSquarePlus, event: 'open-material-request' },
] as const;

export default function StudyUtilityDock() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      event.stopPropagation();
      setOpen(false);
      triggerRef.current?.focus();
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} data-open={open} className={`study-utility-dock fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom))] right-3 md:hidden ${open ? 'z-[120]' : 'z-[90]'}`}>
      {open && (
        <div id="study-utility-menu" role="group" aria-label="Alat belajar" className="study-utility-menu mb-2 w-64 max-w-[calc(100vw-1.5rem)] rounded-2xl border border-slate-200 p-1.5 shadow-lg dark:border-slate-700">
          {actions.map(({ label, icon: Icon, event }) => (
            <button
              key={event}
              type="button"
              title={label}
              onClick={() => {
                setOpen(false);
                window.dispatchEvent(new Event(event));
              }}
              className="study-utility-menu-action flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-left text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
            >
              <Icon size={18} aria-hidden="true" /> {label}
            </button>
          ))}
        </div>
      )}
      <button
        ref={triggerRef}
        type="button"
        aria-label={open ? 'Tutup alat belajar' : 'Buka alat belajar: AI Tutor, Kelas Global, Pomodoro, dan Feedback'}
        aria-expanded={open}
        aria-controls="study-utility-menu"
        title={open ? 'Tutup alat belajar' : 'Alat belajar'}
        onClick={() => {
          if (!open) window.dispatchEvent(new Event('akuntansihub:close-utility'));
          setOpen(!open);
        }}
        className="ml-auto flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-300 bg-white text-slate-700 shadow-md shadow-slate-900/10 transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
      >
        {open ? <X size={19} aria-hidden="true" /> : <Wrench size={19} aria-hidden="true" />}
      </button>
    </div>
  );
}
