import React from 'react';

/**
 * AKS1 Logo 3D — HIMA Akuntansi S1 UNAIR
 *
 * The logo is a symmetric triangle (like letter A, no crossbar) whose RIGHT leg
 * extends past the apex as a "flying arm" to the UPPER-LEFT.
 *
 * Geometry (viewBox 0 0 100 100):
 *   Bottom-left   (12, 92)
 *   Bottom-right   (82, 92)
 *   Intersection   (47, 41)  — where left leg meets the right leg line
 *   Tip            (22,  5)  — end of right leg extension (upper-left)
 *
 * The right leg line runs from (82, 92) through (47, 41) to (22, 5).
 * The left leg runs from (12, 92) to (47, 41) and stops.
 *
 * Drawing order ensures the right leg visually passes OVER the left leg:
 *   1. Closed triangle path (behind)  — left leg + base + short right leg
 *   2. Full right-leg line  (in front) — overlays at the intersection
 *
 * Concentric strokes create the striped pattern:
 *   Yellow(24) → Blue(20) → Yellow(16) → Blue(12) → Yellow(8) → Blue(4)
 *   = yellow border, 3 blue stripes, 2 yellow gaps
 */
export default function Aks1Logo3D() {
  const stripes: [string, number][] = [
    ['#FACC15', 24],  // Yellow outer border
    ['#2563EB', 20],  // Blue stripe 1 (outermost)
    ['#FACC15', 16],  // Yellow gap 1
    ['#2563EB', 12],  // Blue stripe 2 (middle)
    ['#FACC15',  8],  // Yellow gap 2
    ['#2563EB',  4],  // Blue stripe 3 (innermost)
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
              Contains the LEFT leg (which stops at intersection), base, and
              the lower portion of the right leg.
              Miter joins create sharp pointed corners at both bottom vertices.
            */}
            {stripes.map(([color, width], j) => (
              <path
                key={`tri-${j}`}
                d="M 47 41 L 12 92 L 82 92 Z"
                stroke={color}
                strokeWidth={width}
                fill="none"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
              />
            ))}

            {/*
              LAYER 2 — IN FRONT
              Full RIGHT leg: bottom-right (82,92) → tip upper-left (22,5)
              This line passes through (47,41) — the intersection point.
              Drawn AFTER the triangle, so at the crossing its stripes
              overlay the left leg, creating the correct visual overlap.
              Butt linecap gives a clean perpendicular cut at the tip.
            */}
            {stripes.map(([color, width], j) => (
              <line
                key={`leg-${j}`}
                x1="82" y1="92"
                x2="22" y2="5"
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
