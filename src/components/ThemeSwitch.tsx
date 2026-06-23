import { Moon, Sun } from 'lucide-react';

interface ThemeSwitchProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  variant?: 'legacy' | 'quiet';
}

const starPath =
  'M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z';

function CircleSvg({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <circle cx="50" cy="50" r="50" />
    </svg>
  );
}

function StarSvg({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d={starPath} />
    </svg>
  );
}

export default function ThemeSwitch({ theme, onToggleTheme, variant = 'legacy' }: ThemeSwitchProps) {
  const isDark = theme === 'dark';

  if (variant === 'quiet') {
    const label = isDark ? 'Ganti ke mode terang' : 'Ganti ke mode gelap';
    return (
      <button
        type="button"
        className="ux-v2-theme-toggle"
        onClick={onToggleTheme}
        aria-label={label}
        title={label}
      >
        {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
      </button>
    );
  }

  return (
    <label
      className="theme-switch"
      title={isDark ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
      aria-label={isDark ? 'Mode gelap aktif. Ganti ke mode terang' : 'Mode terang aktif. Ganti ke mode gelap'}
    >
      <input
        className="theme-switch-input"
        type="checkbox"
        checked={isDark}
        onChange={onToggleTheme}
        aria-checked={isDark}
      />
      <span className="theme-switch-slider" aria-hidden="true">
        <span className="theme-switch-orb">
          <CircleSvg className="theme-moon-dot theme-moon-dot-1" />
          <CircleSvg className="theme-moon-dot theme-moon-dot-2" />
          <CircleSvg className="theme-moon-dot theme-moon-dot-3" />
          <CircleSvg className="theme-light-ray theme-light-ray-1" />
          <CircleSvg className="theme-light-ray theme-light-ray-2" />
          <CircleSvg className="theme-light-ray theme-light-ray-3" />
          <CircleSvg className="theme-cloud theme-cloud-dark theme-cloud-1" />
          <CircleSvg className="theme-cloud theme-cloud-dark theme-cloud-2" />
          <CircleSvg className="theme-cloud theme-cloud-dark theme-cloud-3" />
          <CircleSvg className="theme-cloud theme-cloud-light theme-cloud-4" />
          <CircleSvg className="theme-cloud theme-cloud-light theme-cloud-5" />
          <CircleSvg className="theme-cloud theme-cloud-light theme-cloud-6" />
        </span>
        <span className="theme-stars">
          <StarSvg className="theme-star theme-star-1" />
          <StarSvg className="theme-star theme-star-2" />
          <StarSvg className="theme-star theme-star-3" />
          <StarSvg className="theme-star theme-star-4" />
        </span>
      </span>
    </label>
  );
}
