import React from 'react';

/**
 * AKS1 Logo 3D — HIMA Akuntansi S1 UNAIR
 *
 * Uses the actual vector SVG logo file (public/aks1-logo.svg) with colors
 * corrected to warm golden yellow (#F0C800) and rich blue (#2B4E8C).
 *
 * Multiple image layers are stacked along the Z-axis to create
 * a pseudo-3D volume effect, then the whole assembly spins around Y.
 */
export default function Aks1Logo3D() {
  const layerCount = 5;

  return (
    <div className="absolute inset-0 flex items-center justify-end pr-[10%] pointer-events-none overflow-hidden opacity-[0.18] dark:opacity-[0.30]">
      <style>{`
        @keyframes logo-spin-y {
          from { transform: rotateY(0deg) rotateX(8deg); }
          to   { transform: rotateY(360deg) rotateX(8deg); }
        }
        .animate-logo-3d {
          animation: logo-spin-y 20s linear infinite;
          transform-style: preserve-3d;
        }
      `}</style>

      <div
        className="relative w-[600px] h-[500px] flex items-center justify-center animate-logo-3d"
        style={{ perspective: '1200px' }}
      >
        {Array.from({ length: layerCount }, (_, i) => (
          <img
            key={i}
            src="/aks1-logo.svg"
            alt=""
            aria-hidden="true"
            draggable={false}
            className="absolute inset-0 w-full h-full object-contain select-none"
            style={{
              transform: `translateZ(${i * 6}px)`,
              opacity: 1 - i * 0.15,
              filter: i === 0 ? 'drop-shadow(0 0 30px rgba(43, 78, 140, 0.6))' : 'none',
            }}
          />
        ))}
      </div>
    </div>
  );
}
