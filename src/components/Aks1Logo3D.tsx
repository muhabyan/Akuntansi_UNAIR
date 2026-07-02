import React from 'react';

export default function Aks1Logo3D() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.20] dark:opacity-[0.35]">
      <style>
        {`
          @keyframes logo-spin-y {
            from { transform: rotateY(0deg) rotateX(8deg); }
            to { transform: rotateY(360deg) rotateX(8deg); }
          }
          .animate-logo-3d {
            animation: logo-spin-y 20s linear infinite;
            transform-style: preserve-3d;
          }
        `}
      </style>
      
      <div 
        className="relative w-[600px] h-[600px] flex items-center justify-center animate-logo-3d"
        style={{ perspective: '1200px' }}
      >
        {/* Layer multiple SVGs slightly separated on the Z axis to create true 3D volume */}
        {[0, 1, 2, 3, 4].map((i) => (
          <svg 
            key={i}
            viewBox="0 0 100 100" 
            className="absolute inset-0 w-full h-full"
            style={{ 
              transform: `translateZ(${i * 6}px)`,
              opacity: 1 - i * 0.15,
              filter: i === 0 ? 'drop-shadow(0 0 30px rgba(37, 99, 235, 0.6))' : 'none'
            }}
          >
            {/* 
              FLAWLESS GEOMETRY RECONSTRUCTION:
              The HIMA Akuntansi logo is a single continuous ribbon!
              Path: Starts at inner right intersection, goes to bottom-right, to bottom-left, to top-right tip.
              Because the left leg is drawn LAST, it cleanly overlays the start of the right leg,
              creating a perfect branching junction.
              No crossbar, no miter spikes (miterlimit 2 handles it), perfect perpendicular butt cap at the tip!
            */}
            <g strokeLinejoin="miter" strokeMiterlimit="2" strokeLinecap="butt" fill="none">
              {/* Yellow Outer Border */}
              <path d="M 55 40 L 80 90 L 30 90 L 70 10" stroke="#FACC15" strokeWidth="28" />
              {/* Blue Outer (Forms Stripe 1 and 3) */}
              <path d="M 55 40 L 80 90 L 30 90 L 70 10" stroke="#2563EB" strokeWidth="20" />
              {/* Yellow Middle (Forms the two yellow gaps) */}
              <path d="M 55 40 L 80 90 L 30 90 L 70 10" stroke="#FACC15" strokeWidth="12" />
              {/* Blue Inner (Forms Stripe 2 - the solid center stripe) */}
              <path d="M 55 40 L 80 90 L 30 90 L 70 10" stroke="#2563EB" strokeWidth="4" />
            </g>
          </svg>
        ))}
      </div>
    </div>
  );
}
