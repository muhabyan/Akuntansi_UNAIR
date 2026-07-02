/**
 * Simplify SVG paths using Ramer-Douglas-Peucker algorithm.
 * Replaces jagged staircase segments with clean straight lines.
 */
const fs = require('fs');

// --- RDP Algorithm ---
function perpendicularDistance(point, lineStart, lineEnd) {
  const dx = lineEnd[0] - lineStart[0];
  const dy = lineEnd[1] - lineStart[1];
  const mag = Math.sqrt(dx * dx + dy * dy);
  if (mag === 0) return Math.sqrt((point[0] - lineStart[0]) ** 2 + (point[1] - lineStart[1]) ** 2);
  const u = ((point[0] - lineStart[0]) * dx + (point[1] - lineStart[1]) * dy) / (mag * mag);
  const closestX = lineStart[0] + u * dx;
  const closestY = lineStart[1] + u * dy;
  return Math.sqrt((point[0] - closestX) ** 2 + (point[1] - closestY) ** 2);
}

function rdpSimplify(points, epsilon) {
  if (points.length <= 2) return points;
  
  let maxDist = 0;
  let maxIndex = 0;
  const start = points[0];
  const end = points[points.length - 1];
  
  for (let i = 1; i < points.length - 1; i++) {
    const dist = perpendicularDistance(points[i], start, end);
    if (dist > maxDist) {
      maxDist = dist;
      maxIndex = i;
    }
  }
  
  if (maxDist > epsilon) {
    const left = rdpSimplify(points.slice(0, maxIndex + 1), epsilon);
    const right = rdpSimplify(points.slice(maxIndex), epsilon);
    return left.slice(0, -1).concat(right);
  } else {
    return [start, end];
  }
}

// --- Parse SVG path d attribute ---
function parsePathData(d) {
  // Split into subpaths by M commands
  const subpaths = [];
  let current = null;
  
  // Tokenize
  const tokens = d.match(/[MLZ]|[-]?\d+\.?\d*/g) || [];
  let i = 0;
  
  while (i < tokens.length) {
    const token = tokens[i];
    if (token === 'M') {
      if (current) subpaths.push(current);
      current = { points: [], closed: false };
      i++;
      current.points.push([parseFloat(tokens[i]), parseFloat(tokens[i + 1])]);
      i += 2;
    } else if (token === 'L') {
      i++;
      current.points.push([parseFloat(tokens[i]), parseFloat(tokens[i + 1])]);
      i += 2;
    } else if (token === 'Z') {
      if (current) current.closed = true;
      i++;
    } else {
      i++;
    }
  }
  if (current) subpaths.push(current);
  return subpaths;
}

// --- Reconstruct path d attribute ---
function buildPathData(subpaths) {
  return subpaths.map(sp => {
    const parts = sp.points.map((p, i) => {
      const cmd = i === 0 ? 'M' : 'L';
      return `${cmd} ${p[0].toFixed(2)} ${p[1].toFixed(2)}`;
    });
    if (sp.closed) parts.push('Z');
    return parts.join(' ');
  }).join(' ');
}

// --- Main ---
const svgContent = fs.readFileSync('public/aks1-logo.svg', 'utf-8');

// Extract path d attributes
const pathRegex = /<path d="([^"]+)"/g;
let match;
const paths = [];
while ((match = pathRegex.exec(svgContent)) !== null) {
  paths.push(match[1]);
}

console.log(`Found ${paths.length} paths`);

// Simplify each path
const epsilon = 2.0; // tolerance in SVG units - smooths out 1-unit staircases
let result = svgContent;

for (const pathD of paths) {
  const subpaths = parsePathData(pathD);
  console.log(`  Path has ${subpaths.length} subpaths`);
  
  let totalBefore = 0;
  let totalAfter = 0;
  
  const simplified = subpaths.map(sp => {
    totalBefore += sp.points.length;
    const newPoints = rdpSimplify(sp.points, epsilon);
    totalAfter += newPoints.length;
    return { points: newPoints, closed: sp.closed };
  });
  
  console.log(`  Points: ${totalBefore} -> ${totalAfter} (${((1 - totalAfter/totalBefore) * 100).toFixed(1)}% reduction)`);
  
  const newPathD = buildPathData(simplified);
  result = result.replace(pathD, newPathD);
}

fs.writeFileSync('public/aks1-logo.svg', result);
console.log('\nDone! Simplified SVG written to public/aks1-logo.svg');
