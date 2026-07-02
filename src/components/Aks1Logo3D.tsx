import React from 'react';

/**
 * AKS1 Logo 3D — HIMA Akuntansi S1 UNAIR
 *
 * The logo is a symmetric triangle (like letter A, no crossbar) whose RIGHT leg
 * extends past the apex as a "flying arm" to the UPPER-LEFT.
 *
 * Geometry (viewBox 0 0 100 100):
 *   Bottom-left   ( 5, 88)
 *   Bottom-right   (90, 88)
 *   Intersection   (48, 37)  — where left leg meets the right leg line
 *   Tip            (22,  6)  — end of right leg extension (upper-left)
 *
 * Drawing order ensures the right leg visually passes OVER the left leg:
 *   1. Closed triangle path (behind)  — left leg + base + short right leg
 *   2. Full right-leg line  (in front) — overlays at the intersection
 *
 * Concentric strokes (outermost → innermost):
 *   Yellow(22) → Blue(18) → Yellow(14) → Blue(10) → Yellow(6) → Blue(2)
 *   = yellow border, 3 blue stripes, 2 yellow gaps  (all ~2 units wide)
 */
export default function Aks1Logo3D() {
  const stripes: [string, number][] = [
    ['#FACC15', 22],  // Yellow outer border
    ['#2563EB', 18],  // Blue stripe 1 (outermost)
    ['#FACC15', 14],  // Yellow gap 1
    ['#2563EB', 10],  // Blue stripe 2 (middle)
    ['#FACC15',  6],  // Yellow gap 2
    ['#2563EB',  2],  // Blue stripe 3 (innermost)
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.18] dark:opacity-[0.30]">
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
        className="relative w-[600px] h-[600px] flex items-center justify-center animate-logo-3d"
        style={{ perspective: '1200px' }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <svg
            key={i}
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            style={{
              transform: `translateZ(${i * 6}px)`,
              opacity: 1 - i * 0.15,
              filter: i === 0 ? 'drop-shadow(0 0 30px rgba(37,99,235,0.6))' : 'none',
            }}
          >
            {/*
              LAYER 1 — BEHIND
              Closed triangle: intersection → bottom-left → bottom-right → back
              Contains the LEFT leg (stops at intersection), base, and
              the lower portion of the right leg.
            */}
            {stripes.map(([color, width], j) => (
              <path
                key={`tri-${j}`}
                d="M 48 37 L 5 88 L 90 88 Z"
                stroke={color}
                strokeWidth={width}
                fill="none"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
              />
            ))}

            {/*
              LAYER 2 — IN FRONT
              Full RIGHT leg: bottom-right (90,88) → tip upper-left (22,6)
              Passes through intersection (48,37). Drawn AFTER the triangle,
              so its stripes overlay the left leg at the crossing.
            */}
            {stripes.map(([color, width], j) => (
              <line
                key={`leg-${j}`}
                x1="90" y1="88"
                x2="22" y2="6"
                stroke={color}
                strokeWidth={width}
                strokeLinecap="butt"
              />
            ))}
          </svg>
        ))}
      </div>
    </div>
  );
}
