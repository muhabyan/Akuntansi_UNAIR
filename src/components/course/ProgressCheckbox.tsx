import { Check } from 'lucide-react';

interface ProgressCheckboxProps {
  checked: boolean;
  onToggle: () => void;
  size?: number;
}

export default function ProgressCheckbox({ checked, onToggle, size = 14 }: ProgressCheckboxProps) {
  return (
    <button
      type="button"
      aria-label={checked ? 'Tandai materi belum selesai' : 'Tandai materi selesai'}
      title={checked ? 'Sudah selesai' : 'Tandai selesai'}
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/35"
    >
      <span className={`flex h-6 w-6 items-center justify-center rounded-md border transition-all ${
        checked ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-gray-300 text-transparent hover:border-blue-500 dark:border-gray-600'
      }`}
      >
        <Check size={size} strokeWidth={3} />
      </span>
    </button>
  );
}
