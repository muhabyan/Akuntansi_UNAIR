import React from 'react';

export default function Aks1Logo3D() {
  // Using overlapping thick strokes to create the nested yellow/blue stripes
  // Outer to inner: Yellow -> Blue -> Yellow -> Blue -> Yellow -> Blue
  
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.15] dark:opacity-[0.25]">
      {/* 
        3D Container with spin-y animation 
        We use an inline style for animation to avoid needing tailwind config changes
      */}
      <style>
        {`
          @keyframes logo-spin-y {
            from { transform: rotateY(0deg) rotateX(10deg); }
            to { transform: rotateY(360deg) rotateX(10deg); }
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
              The 'A' Triangle. 
              We use miter joints so the corners are sharp.
            */}
            <g strokeLinejoin="miter" fill="none">
              <path d="M 50 15 L 15 85 L 85 85 Z" stroke="#EAB308" strokeWidth="18" />
              <path d="M 50 15 L 15 85 L 85 85 Z" stroke="#2563EB" strokeWidth="14" />
              <path d="M 50 15 L 15 85 L 85 85 Z" stroke="#EAB308" strokeWidth="10" />
              <path d="M 50 15 L 15 85 L 85 85 Z" stroke="#2563EB" strokeWidth="7" />
              <path d="M 50 15 L 15 85 L 85 85 Z" stroke="#EAB308" strokeWidth="4" />
              <path d="M 50 15 L 15 85 L 85 85 Z" stroke="#2563EB" strokeWidth="2" />
            </g>

            {/* 
              The Crossbar.
              Same layered strokes to match the striped pattern.
            */}
            <g strokeLinecap="butt" fill="none">
              <line x1="25" y1="65" x2="75" y2="65" stroke="#EAB308" strokeWidth="18" />
              <line x1="25" y1="65" x2="75" y2="65" stroke="#2563EB" strokeWidth="14" />
              <line x1="25" y1="65" x2="75" y2="65" stroke="#EAB308" strokeWidth="10" />
              <line x1="25" y1="65" x2="75" y2="65" stroke="#2563EB" strokeWidth="7" />
              <line x1="25" y1="65" x2="75" y2="65" stroke="#EAB308" strokeWidth="4" />
              <line x1="25" y1="65" x2="75" y2="65" stroke="#2563EB" strokeWidth="2" />
            </g>
          </svg>
        ))}
      </div>
    </div>
  );
}
