/** Four Knowledge Panels, traced from design/brand/logo-mark*.svg. */
type LogoMarkProps = {
  className?: string;
  compact?: boolean;
  mono?: boolean;
  title?: string;
};

const panels = [
  'M7 29 L20 22.5 V52 L7 58.5 Z',
  'M24 5 L43 15.5 L24 25.5 Z',
  'M27 28.5 L39.5 22 V50 L27 56.5 Z',
  'M44 22.5 L57 29 V58.5 L44 52 Z',
];

export function LogoMark({ className = 'h-10 w-10', mono = false, title }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}
      role={title ? 'img' : undefined} aria-hidden={title ? undefined : true}
      aria-label={title} focusable="false">
      <g strokeLinejoin="round" strokeWidth="2.4">
        {panels.map((d, index) => (
          <path key={d} d={d}
            fill={mono ? 'currentColor' : index === 2 ? 'var(--logo-support)' : 'var(--logo-primary)'}
            stroke={mono ? 'currentColor' : index === 2 ? 'var(--logo-support)' : 'var(--logo-primary)'}
            opacity={mono && index === 2 ? 0.45 : undefined} />
        ))}
      </g>
    </svg>
  );
}

export function Wordmark({ className = 'text-lg' }: { className?: string }) {
  return (
    <span className={`font-display leading-none tracking-[-0.045em] text-primary ${className}`}>
      <strong className="font-bold">Akuntansi</strong><span className="font-normal">Hub</span>
    </span>
  );
}
