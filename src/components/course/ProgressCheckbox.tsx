import { Check } from 'lucide-react';

interface ProgressCheckboxProps {
  checked: boolean;
  onToggle: () => void;
  size?: number;
}

export default function ProgressCheckbox({ checked, onToggle, size = 14 }: ProgressCheckboxProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      className={`w-6 h-6 rounded-md border flex items-center justify-center shrink-0 transition-all ${
        checked ? 'bg-gold border-gold text-navy-900' : 'border-navy-500 text-transparent hover:border-gold/50'
      }`}
    >
      <Check size={size} strokeWidth={3} />
    </button>
  );
}
