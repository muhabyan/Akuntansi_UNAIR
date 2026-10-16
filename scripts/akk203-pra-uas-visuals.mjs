const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
function wrap(s,w,font){const limit=Math.floor(w/(font*.62)),out=[];let line='';for(const word of s.split(/\s+/)){if(line&&(line+' '+word).length>limit){out.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)out.push(line);return out;}
function text(s,x,y,w,font=18,cls='svg-text'){return `<text class="${cls}" x="${x}" y="${y}" font-size="${font}">${wrap(s,w,font).map((t,i)=>`<tspan x="${x}" dy="${i?font*1.4:0}">${escape(t)}</tspan>`).join('')}</text>`;}
function svg(spec,mobile){
 const width=mobile?340:760,font=18,margin=24,w=width-margin*2,id=spec.id+(mobile?'-m':'-d');let y=28,inside='';
 if(spec.type==='bar'){
  inside+=text(spec.axis,margin,y,w,font,'svg-title');y+=wrap(spec.axis,w,font).length*font*1.4+26;
  const plotW=w-10;
  for(const b of spec.bars){inside+=text(`${b.label}: ${String(b.value).replace('.',',')}`,margin,y,w,font,'svg-title');y+=wrap(`${b.label}: ${b.value}`,w,font).length*font*1.4+10;
   inside+=`<rect class="svg-subcard" x="${margin}" y="${y}" width="${plotW}" height="24" rx="3"/><rect class="svg-badge-blue" x="${margin}" y="${y}" width="${plotW*b.value/spec.max}" height="24" rx="3"/>`;y+=54;
  }
  inside+=`<path class="svg-title" style="fill:none!important" stroke="currentColor" stroke-width="2" d="M${margin} ${y} H${margin+plotW}"/>`;
  for(const v of [0,spec.max/2,spec.max]){const x=margin+plotW*v/spec.max;inside+=`<path stroke="currentColor" style="fill:none!important" d="M${x} ${y} v6"/>`+text(String(v).replace('.',','),v===spec.max?x-30:x,y+24,60,font);}
  y+=65;
 }else{
  // Reading maps are sequential. Parallel conceptual branches have no arrows between them.
  const nodes=[...spec.nodes,...(spec.result?[{title:spec.result,items:[]}]:[])];let previous;
  for(const [i,n] of nodes.entries()){
   const title=wrap(n.title,w-32,font+1),body=(n.items??[]).flatMap(s=>wrap(s,w-32,font)),h=32+title.length*(font+1)*1.4+(body.length?12:0)+body.length*font*1.4;
   if(previous&&spec.type==='process')inside+=`<path class="svg-title" style="fill:none!important" stroke="currentColor" stroke-width="2" marker-end="url(#${id}-arrow)" d="M${width/2} ${previous+4} V${y-6}"/>`;
   inside+=`<rect class="svg-card" x="${margin}" y="${y}" width="${w}" height="${h}" rx="10" stroke-width="1.5"/>`+text(n.title,margin+16,y+26,w-32,font+1,'svg-title');
   body.forEach((s,j)=>inside+=text(s,margin+16,y+26+title.length*(font+1)*1.4+10+j*font*1.4,w-32,font));
   previous=y+h;y+=h+32;
   if(spec.type==='parallel'&&spec.result&&i===nodes.length-2){inside+=text('Cabang di atas → hasil gabungan di bawah',margin,y,w,font);y+=wrap('Cabang di atas → hasil gabungan di bawah',w,font).length*font*1.4+22;}
  }
 }
 inside+=text(spec.footer,margin,y,w,font);y+=wrap(spec.footer,w,font).length*font*1.4+26;
 return `<svg class="course-diagram-svg akk203-uas-diagram" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="${id}-title ${id}-desc" width="100%" viewBox="0 0 ${width} ${y}"><title id="${id}-title">${escape(spec.title)}</title><desc id="${id}-desc">${escape(spec.alt)}</desc><defs><marker id="${id}-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="svg-title" d="M0 0 L10 5 L0 10 Z"/></marker></defs><rect class="svg-bg" width="${width}" height="${y}" rx="12"/>${inside}</svg>`;
}
export function materializeAspFigure(spec){const transcript=[...spec.nodes.map(n=>[n.title,...n.items].join(': ')),...(spec.result?[spec.result]:[]),...(spec.bars??[]).map(b=>`${b.label}: ${String(b.value).replace('.',',')}`),spec.footer],accessible={...spec,alt:[spec.alt,...transcript].join(' ')};return {kind:'figure',title:spec.title,svg:svg(accessible,false),mobileSvg:svg(accessible,true),caption:spec.source,altText:accessible.alt,transcript};}
