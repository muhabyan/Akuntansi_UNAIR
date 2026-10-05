// Source-grounded routing regression for Exhibits 9.6/9.7 and 10.1.
export function auditDiagram(svg) {
  const issues=[],measurements=[];
  const number=(e,k)=>Number(e.getAttribute(k));
  const boxes=[...svg.querySelectorAll('rect[data-node]')].map(e=>({label:e.dataset.node,x:number(e,'x'),y:number(e,'y'),width:number(e,'width'),height:number(e,'height')}));
  const segments=d=>{const result=[];let p;for(const m of d.matchAll(/([MLHV])([^MLHV]*)/g)){const v=m[2].trim().split(/[ ,]+/).map(Number);const q=m[1]==='H'?[v[0],p[1]]:m[1]==='V'?[p[0],v[0]]:v;if(p&&m[1]!=='M')result.push([p,q]);p=q;}return result;};
  const paths=[...svg.querySelectorAll('path[data-edge]')].map(e=>({label:e.dataset.edge,segments:segments(e.getAttribute('d')),dashed:e.hasAttribute('stroke-dasharray'),both:e.hasAttribute('marker-start'),thick:number(e,'stroke-width')===5}));
  const distance=(p,s)=>{const [a,b]=s,dx=b[0]-a[0],dy=b[1]-a[1],t=Math.max(0,Math.min(1,((p[0]-a[0])*dx+(p[1]-a[1])*dy)/(dx*dx+dy*dy)));return Math.hypot(p[0]-a[0]-t*dx,p[1]-a[1]-t*dy);};
  const boundary=(p,b)=>p[0]>=b.x-0.01&&p[0]<=b.x+b.width+0.01&&p[1]>=b.y-0.01&&p[1]<=b.y+b.height+0.01&&(Math.abs(p[0]-b.x)<0.01||Math.abs(p[0]-b.x-b.width)<0.01||Math.abs(p[1]-b.y)<0.01||Math.abs(p[1]-b.y-b.height)<0.01);
  const intersects=(s,b)=>{let lo=0,hi=1;for(let k=0;k<2;k++){const min=(k?b.y:b.x)+0.5,max=min+(k?b.height:b.width)-1,d=s[1][k]-s[0][k];if(!d){if(s[0][k]<=min||s[0][k]>=max)return false;}else{const a=(min-s[0][k])/d,c=(max-s[0][k])/d;lo=Math.max(lo,Math.min(a,c));hi=Math.min(hi,Math.max(a,c));}}return hi>lo&&hi>0&&lo<1;};
  for(const p of paths){const start=p.segments[0][0],end=p.segments.at(-1)[1],[from,to]=p.label.split(' → ');const a=boxes.find(b=>b.label===from&&boundary(start,b)),b=boxes.find(b=>b.label===to&&boundary(end,b));if(!a||!b)issues.push('Wrong endpoint: '+p.label);for(const box of boxes)if(box!==a&&box!==b&&p.segments.some(s=>intersects(s,box)))issues.push('Route crosses unrelated box: '+p.label+' / '+box.label);}
  const overlap=(a,b)=>{const dx=a[1][0]-a[0][0],dy=a[1][1]-a[0][1],len=Math.hypot(dx,dy);if(b.some(p=>Math.abs(dx*(p[1]-a[0][1])-dy*(p[0]-a[0][0]))/len>0.1))return false;const t=b.map(p=>((p[0]-a[0][0])*dx+(p[1]-a[0][1])*dy)/len);return Math.min(len,Math.max(...t))-Math.max(0,Math.min(...t))>1;};
  for(const a of paths.filter(p=>!p.dashed))for(const b of paths.filter(p=>p.dashed))if(a.segments.some(x=>b.segments.some(y=>overlap(x,y))))issues.push('Solid/dashed overlap: '+a.label+' / '+b.label);
  const id=svg.querySelector('marker').id.replace(/-arrow$/,'');
  if(id==='V-TM05-07'){
    const expected=['Minority Shareholders → Professional Managers','Minority Shareholders → Family Managers','Controlling Shareholders → Family Managers'];
    if(paths.length!==3||paths.some(p=>!expected.includes(p.label)||!p.both||p.dashed!==p.label.startsWith('Controlling')))issues.push('PA/PP relationships differ from source');
  }else if(id==='V-TM05-08'){
    const expected=[['Simple Structure','Functional Structure (growth)','growth in revenues/employees'],['Functional Structure (growth)','Holding Company Structure','unrelated diversification'],['Functional Structure (growth)','Divisional Structure','related products/markets'],['Functional Structure (growth)','Functional Structure (vertical integration)','vertical integration'],['Holding Company Structure','Divisional Structure','increase relatedness'],['Holding Company Structure','Worldwide Holding Company Structure','international expansion'],['Functional Structure (vertical integration)','Divisional Structure','related diversification'],['Functional Structure (vertical integration)','Worldwide Functional Structure','international expansion'],['Divisional Structure','International Structures','international expansion'],['Worldwide Holding Company Structure','International Structures','increase relatedness'],['Worldwide Functional Structure','International Structures','related diversification']];
    if(paths.length!==11||boxes.length!==8)issues.push('Growth branches/nodes differ from source');
    const dominant=new Set([0,3,6,8]);const notes=[...svg.querySelectorAll('text.svg-muted')],used=new Set();
    for(const [i,[from,to,label]]of expected.entries()){
      const edge=paths.find(p=>p.label===from+' → '+to);if(!edge){issues.push('Missing source edge: '+from+' → '+to);continue;}if(edge.thick!==dominant.has(i))issues.push('Wrong dominant path: '+edge.label);
      const candidates=notes.filter(n=>n.textContent===label&&!used.has(n)).map(n=>({n,d:Math.min(...edge.segments.map(s=>distance([number(n,'x'),number(n,'y')],s)))})).sort((a,b)=>a.d-b.d);if(!candidates.length){issues.push('Missing label '+label);continue;}
      const {n,d}=candidates[0];used.add(n);const wrong=Math.min(...paths.filter(p=>p!==edge).flatMap(p=>p.segments.map(s=>distance([number(n,'x'),number(n,'y')],s))));measurements.push({edge:edge.label,label,intendedDistance:d,nearestOtherDistance:wrong});if(d>240||wrong-d<15)issues.push('Label associates with wrong/ambiguous edge: '+edge.label+' / '+label);
    }
    for(const n of notes){const size=number(n,'font-size'),w=n.textContent.length*size*0.53;const b=typeof n.getBBox==='function'?n.getBBox():{x:number(n,'x')-w/2,y:number(n,'y')-size*0.8,width:w,height:size};if(paths.some(p=>p.segments.some(s=>intersects(s,b))))issues.push('Edge passes through label: '+n.textContent);}
  }
  return {id,issues,measurements};
}
