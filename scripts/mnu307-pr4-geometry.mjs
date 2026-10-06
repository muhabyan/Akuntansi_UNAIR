// Pure DOM audit also runs against the actual SVG in Chromium.
export function auditTM7(svg) {
  const issues=[], id=svg.getAttribute('data-figure');
  const nodes=[...svg.querySelectorAll('rect[data-node]')].map(r=>({key:r.getAttribute('data-node'),x:+r.getAttribute('x'),y:+r.getAttribute('y'),w:+r.getAttribute('width'),h:+r.getAttribute('height')}));
  const paths=[...svg.querySelectorAll('path[data-edge]')].map(p=>({key:p.getAttribute('data-edge'),index:p.getAttribute('data-edge-index'),points:[...p.getAttribute('d').matchAll(/[ML]([\d.]+) ([\d.]+)/g)].map(m=>[+m[1],+m[2]]),both:p.hasAttribute('marker-start'),dashed:p.hasAttribute('stroke-dasharray')}));
  const onBoundary=(p,n)=>p[0]>=n.x-1&&p[0]<=n.x+n.w+1&&p[1]>=n.y-1&&p[1]<=n.y+n.h+1&&(Math.abs(p[0]-n.x)<1||Math.abs(p[0]-n.x-n.w)<1||Math.abs(p[1]-n.y)<1||Math.abs(p[1]-n.y-n.h)<1);
  for(const edge of paths){const [from,to]=edge.key.split(' → '),a=nodes.find(n=>n.key===from),b=nodes.find(n=>n.key===to);if(!a||!b){issues.push('unknown endpoint '+edge.key);continue;}if(!onBoundary(edge.points[0],a)||!onBoundary(edge.points.at(-1),b))issues.push('incorrect endpoint '+edge.key);
    for(let s=1;s<edge.points.length;s++){const p=edge.points[s-1],q=edge.points[s];for(const n of nodes.filter(n=>n!==a&&n!==b)){for(let t=0;t<=100;t++){const x=p[0]+(q[0]-p[0])*t/100,y=p[1]+(q[1]-p[1])*t/100;if(x>n.x+1&&x<n.x+n.w-1&&y>n.y+1&&y<n.y+n.h-1){issues.push(edge.key+' crosses '+n.key);break;}}}}
  }
  // Different styles/semantics cannot hide along a common segment. Shared fork trunks with
  // the same source, label and style are allowed, because they denote the same contribution.
  const label=e=>svg.querySelector('text[data-edge-label="'+e.index+'"]')?.textContent??'';
  for(let i=0;i<paths.length;i++)for(let j=i+1;j<paths.length;j++){const a=paths[i],b=paths[j];if((a.key.split(' → ')[0]===b.key.split(' → ')[0]||a.key.split(' → ')[1]===b.key.split(' → ')[1])&&a.dashed===b.dashed&&label(a)===label(b))continue;for(let s=1;s<a.points.length;s++)for(let t=1;t<b.points.length;t++){const [p,q]=[a.points[s-1],a.points[s]],[r,u]=[b.points[t-1],b.points[t]];if(p[0]===q[0]&&r[0]===u[0]&&p[0]===r[0]&&Math.min(Math.max(p[1],q[1]),Math.max(r[1],u[1]))-Math.max(Math.min(p[1],q[1]),Math.min(r[1],u[1]))>8)issues.push('overlapping routes '+a.key+' / '+b.key);if(p[1]===q[1]&&r[1]===u[1]&&p[1]===r[1]&&Math.min(Math.max(p[0],q[0]),Math.max(r[0],u[0]))-Math.max(Math.min(p[0],q[0]),Math.min(r[0],u[0]))>8)issues.push('overlapping routes '+a.key+' / '+b.key);}}
  const view=svg.getAttribute('viewBox').split(' ').map(Number);for(const n of nodes)if(n.x<0||n.y<0||n.x+n.w>view[2]||n.y+n.h>view[3])issues.push('node outside viewBox '+n.key);
  if(typeof svg.querySelector('text')?.getBBox==='function'){
    const labels=[...svg.querySelectorAll('text')];
    for(const label of labels){const box=label.getBBox();if(box.x < -1 || box.y < -1 || box.x+box.width > view[2]+1 || box.y+box.height > view[3]+1)issues.push('label outside viewBox '+label.textContent);}
    for(const text of labels.filter(t=>!t.hasAttribute('data-edge-label')&&!t.classList.contains('svg-text'))){const b=text.getBBox();for(const edge of paths){for(let j=1;j<edge.points.length;j++){const p=edge.points[j-1],q=edge.points[j];for(let k=0;k<=50;k++){const x=p[0]+(q[0]-p[0])*k/50,y=p[1]+(q[1]-p[1])*k/50;if(x>b.x+1&&x<b.x+b.width-1&&y>b.y+1&&y<b.y+b.height-1){issues.push('edge crosses text '+text.textContent+' / '+edge.key);break;}}}}}
    const distance=(p,a,b)=>{const dx=b[0]-a[0],dy=b[1]-a[1],t=Math.max(0,Math.min(1,((p[0]-a[0])*dx+(p[1]-a[1])*dy)/(dx*dx+dy*dy)));return Math.hypot(p[0]-a[0]-t*dx,p[1]-a[1]-t*dy);};
    const pathDistance=(p,e)=>Math.min(...e.points.slice(1).map((q,i)=>distance(p,e.points[i],q)));
    for(const label of labels.filter(t=>t.hasAttribute('data-edge-label'))){const own=paths.find(p=>p.index===label.getAttribute('data-edge-label')),box=label.getBBox(),point=[box.x+box.width/2,box.y+box.height/2];if(own&&paths.some(other=>other!==own&&pathDistance(point,other)+8<pathDistance(point,own)))issues.push('label nearer wrong edge '+label.textContent);}
  }
  return {id,nodes:nodes.length,edges:paths.length,issues:[...new Set(issues)]};
}
