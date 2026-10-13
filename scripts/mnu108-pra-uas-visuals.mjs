const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
function lines(s,width,font){
  const limit=Math.max(10,Math.floor(width/(font*.59)));
  const output=[];let line='';
  for(const word of String(s).split(/\s+/)){if(line&&(line+' '+word).length>limit){output.push(line);line=word;}else line+=(line?' ':'')+word;}
  if(line)output.push(line);return output;
}
function text(s,x,y,width,font=18,cls='svg-text',anchor='start'){
  return `<text class="${cls}" x="${x}" y="${y}" font-size="${font}" text-anchor="${anchor}">${lines(s,width,font).map((line,i)=>`<tspan x="${x}" dy="${i?font*1.35:0}">${escape(line)}</tspan>`).join('')}</text>`;
}
function box(node,x,y,w,font){
  const titles=lines(node.title,w-28,font+1),body=(node.items??[]).flatMap(s=>lines(s,w-28,font));
  const h=24+titles.length*(font+1)*1.35+(body.length?14:0)+body.length*font*1.35;
  return {x,y,w,h,svg:`<rect class="svg-card" x="${x}" y="${y}" width="${w}" height="${h}" rx="10" stroke-width="1.5"/>${text(node.title,x+14,y+24,w-28,font+1,'svg-title')}${body.map((line,i)=>text(line,x+14,y+24+titles.length*(font+1)*1.35+10+i*font*1.35,w-28,font)).join('')}`};
}
const arrow=(id,x1,y1,x2,y2,dashed=false)=>`<path class="svg-title" style="fill:none" stroke="currentColor" stroke-width="2" ${dashed?'stroke-dasharray="5 4"':''} marker-end="url(#${id}-arrow)" d="M${x1} ${y1} L${x2} ${y2}"/>`;
function frame(id,title,alt,width,height,inside){
  // Existing shared SVG theme rules use !important fills. Open connectors must remain unfilled.
  const content=inside.replaceAll('style="fill:none"','style="fill:none!important"');
  return `<svg class="course-diagram-svg mnu108-post-diagram" viewBox="0 0 ${width} ${height}" width="100%" role="img" aria-labelledby="${id}-t ${id}-d" xmlns="http://www.w3.org/2000/svg"><title id="${id}-t">${escape(title)}</title><desc id="${id}-d">${escape(alt)}</desc><defs><marker id="${id}-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="svg-title" d="M0 0 L10 5 L0 10 Z"/></marker></defs><rect class="svg-bg" width="${width}" height="${height}" rx="12"/>${content}</svg>`;
}
function process(spec,width,mobile){
  const font=mobile?16:18,id=spec.id+(mobile?'-m':'-d'),margin=mobile?18:28;
  const w=width-margin*2-(spec.feedback||spec.parallel?28:0);let y=20,inside='',previous;
  const nodes=[];
  for(const node of spec.nodes){const b=box(node,margin,y,w,font);if(previous&&!spec.parallel)inside+=arrow(id,margin+w/2,previous.y+previous.h+3,margin+w/2,y-4);inside+=b.svg;nodes.push(b);previous=b;y+=b.h+34;}
  if(spec.parallel&&spec.result){const last=nodes.at(-1),right=width-13;for(const b of nodes.slice(0,-1))inside+=`<path class="svg-title" style="fill:none" stroke="currentColor" stroke-width="2" marker-end="url(#${id}-arrow)" d="M${b.x+b.w} ${b.y+b.h/2} H${right} V${last.y+last.h/2} H${last.x+last.w+2}"/>`;}
  if(spec.feedback&&nodes.length>1){const first=nodes[0],last=nodes.at(-1),right=width-13;inside+=`<path class="svg-title" style="fill:none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#${id}-arrow)" d="M${last.x+last.w} ${last.y+last.h/2} H${right} V${first.y+first.h/2} H${first.x+first.w+2}"/>`;}
  if(spec.footer){inside+=text(spec.footer,margin,y,w,font);y+=lines(spec.footer,w,font).length*font*1.35+20;}
  return frame(id,spec.title,spec.alt,width,y+4,inside);
}
function parallel(spec,width,mobile){
  if(mobile)return process({...spec,parallel:true,footer:(spec.footer??'')+' Cabang-cabang berkontribusi bersama.',nodes:[...spec.nodes,...(spec.result?[{title:spec.result,items:[]}]:[])]},width,true);
  const id=spec.id+'-d',font=18,count=spec.nodes.length,gap=18,margin=24,w=(width-margin*2-gap*(count-1))/count;
  const boxes=spec.nodes.map((node,i)=>box(node,margin+i*(w+gap),24,w,font));let inside=boxes.map(b=>b.svg).join('');const bottom=Math.max(...boxes.map(b=>b.y+b.h));
  if(spec.result){const result=box({title:spec.result,items:[]},width*.2,bottom+70,width*.6,font);for(const b of boxes)inside+=arrow(id,b.x+b.w/2,b.y+b.h+4,result.x+result.w/2,result.y-4);inside+=result.svg;return frame(id,spec.title,spec.alt,width,result.y+result.h+24,inside);}
  return frame(id,spec.title,spec.alt,width,bottom+25,inside);
}
function matrix(spec,width,mobile){
  const id=spec.id+(mobile?'-m':'-d'),font=mobile?15:18,margin=mobile?20:28,gap=14,w=(width-margin*2-gap)/2;
  let y=24,inside='';
  if(spec.axes){inside+=text(spec.axes,margin,y,width-margin*2,font,'svg-title');y+=lines(spec.axes,width-margin*2,font).length*font*1.35+20;}
  const regular=spec.centerLast?spec.nodes.slice(0,-1):spec.nodes;
  for(let i=0;i<regular.length;i+=2){const bs=regular.slice(i,i+2).map((node,j)=>box(node,margin+j*(w+gap),y,w,font));inside+=bs.map(b=>b.svg).join('');y+=Math.max(...bs.map(b=>b.h))+gap;
    if(i===0&&spec.centerLast){const middle=box(spec.nodes.at(-1),width*.18,y,width*.64,font);inside+=middle.svg;y+=middle.h+gap;}
  }
  if(spec.footer){inside+=text(spec.footer,margin,y+font,width-margin*2,font);y+=lines(spec.footer,width-margin*2,font).length*font*1.35+24;}
  return frame(id,spec.title,spec.alt,width,y+10,inside);
}
function pyramid(spec,width,mobile){
  const id=spec.id+(mobile?'-m':'-d'),font=mobile?16:18,max=width-40,min=max*.6,gap=10;let y=20,inside='';
  spec.nodes.forEach((node,i)=>{const w=min+(max-min)*i/Math.max(1,spec.nodes.length-1);const b=box(node,(width-w)/2,y,w,font);inside+=b.svg;y+=b.h+gap;});
  if(spec.footer){inside+=text(spec.footer,20,y+font,width-40,font);y+=lines(spec.footer,width-40,font).length*font*1.35+25;}
  return frame(id,spec.title,spec.alt,width,y+12,inside);
}
function curve(spec,width,mobile){
  const id=spec.id+(mobile?'-m':'-d'),font=mobile?16:18,left=50,right=width-25,top=58,bottom=240;
  let inside=text(spec.ylabel??spec.yLabel,20,25,width-40,font,'svg-title');
  inside+=`<path class="svg-title" stroke="currentColor" stroke-width="2" style="fill:none" d="M${left} ${top} V${bottom} H${right}"/>`;
  const span=right-left;inside+=`<path class="text-accent-blue" stroke="currentColor" stroke-width="3" style="fill:none" d="M${left+4} ${bottom-12} C${left+span*.2} ${bottom-55},${left+span*.3} ${top+15},${left+span*.5} ${top+25} S${right-span*.2} ${bottom-45},${right-3} ${bottom-12}"/>`;
  inside+=text('Rendah',left,bottom+25,span/3,font,'svg-text');inside+=text('Sedang',(left+right)/2,bottom+25,span/3,font,'svg-text','middle');inside+=text('Tinggi',right,bottom+25,span/3,font,'svg-text','end');
  const footer='Skematis. '+(spec.footer??'Tanpa estimasi angka atau batas universal.');
  inside+=text(spec.xlabel??spec.xLabel,20,bottom+58,width-40,font,'svg-title');inside+=text(footer,20,bottom+88,width-40,font);
  const h=bottom+100+lines(footer,width-40,font).length*font*1.35;
  return frame(id,spec.title,spec.alt,width,h,inside);
}
function bars(spec,width,mobile){
  const id=spec.id+(mobile?'-m':'-d'),font=mobile?16:18,margin=20,plotW=width-margin*2;
  let y=25,inside=text(spec.unit,margin,y,plotW,font,'svg-title');y+=36;
  if(spec.seriesLabels){inside+=text(spec.seriesLabels.join(' / '),margin,y,plotW,font);y+=lines(spec.seriesLabels.join(' / '),plotW,font).length*font*1.35+16;}
  for(const node of spec.data){inside+=text(node.label,margin,y,plotW,font);y+=lines(node.label,plotW,font).length*font*1.35+8;
    const values=[node.value,...(node.value2!==undefined?[node.value2]:[])];
    values.forEach((value,i)=>{const label=`${spec.seriesLabels?.[i]?spec.seriesLabels[i]+': ':''}${value}${spec.unit==='Persen (%)'?'%':''}`;const height=Math.max(25,lines(label,plotW-10,font).length*font*1.35+8);inside+=`<rect class="svg-subcard" x="${margin}" y="${y}" width="${plotW}" height="${height}" rx="3"/><rect class="${i?'svg-badge-green':'svg-badge-blue'}" x="${margin}" y="${y}" width="${plotW*value/spec.max}" height="${height}" rx="3"/>`;inside+=text(label,margin+5,y+18,plotW-10,font,'svg-title');y+=height+12;});y+=15;
  }
  inside+=text(`Skala batang: 0 sampai ${spec.max}. ${spec.footer??''}`,margin,y,plotW,font);y+=lines(`Skala batang: 0 sampai ${spec.max}. ${spec.footer??''}`,plotW,font).length*font*1.35+20;
  return frame(id,spec.title,spec.alt,width,y,inside);
}
function coordination(spec,width,mobile){
  const id=spec.id+(mobile?'-m':'-d'),font=mobile?16:18;
  if(mobile){
    let y=25,inside=text('Masukan dari luar organisasi',18,y,width-36,font,'svg-title');y+=38;
    for(const node of spec.external){const b=box(node,18,y,width-36,font);inside+=b.svg;y+=b.h+12;}
    inside+=arrow(id,width/2,y,width/2,y+30);y+=55;
    inside+=text('Di dalam organisasi: saling bertukar informasi',18,y,width-36,font,'svg-title');y+=65;
    for(const node of spec.internal){const b=box(node,18,y,width-36,font);inside+=b.svg;y+=b.h+15;}
    inside+=text('Research, manufacturing dan marketing saling terhubung dua arah. Kartu menguraikan peran, tanpa urutan waktu.',18,y+font,width-36,font);y+=125;
    return frame(id,spec.title,spec.alt,width,y,inside);
  }
  const positions=[[390,40],[250,230],[530,230]],insideBoxes=spec.internal.map((n,i)=>box(n,...positions[i],220,font));
  const externalPositions=[[18,30],[width-238,30],[18,420],[width-238,420]];
  const outside=spec.external.map((n,i)=>box(n,...externalPositions[i],220,font));
  let inside=`<rect class="svg-subcard" x="245" y="20" width="510" height="370" rx="20"/>`+outside.map(b=>b.svg).join('');
  const edges=[[500,insideBoxes[0].y+insideBoxes[0].h+3,360,insideBoxes[1].y-3],[500,insideBoxes[0].y+insideBoxes[0].h+3,640,insideBoxes[2].y-3],[473,290,527,290]];
  for(const [x1,y1,x2,y2] of edges)inside+=`<path class="svg-title" style="fill:none" stroke="currentColor" stroke-width="2" marker-start="url(#${id}-arrow)" marker-end="url(#${id}-arrow)" d="M${x1} ${y1} L${x2} ${y2}"/>`;
  inside+=insideBoxes.map(b=>b.svg).join('');
  inside+=arrow(id,238,100,245,140)+arrow(id,width-238,100,755,140)+arrow(id,238,460,300,390)+arrow(id,width-238,460,700,390);
  const h=Math.max(600,...outside.map(b=>b.y+b.h+30));
  return frame(id,spec.title,spec.alt,width,h,inside);
}
function networks(spec,width,mobile){
  const id=spec.id+(mobile?'-m':'-d'),font=mobile?16:18,panelW=mobile?width:width/2;let inside='';
  for(let mode=0;mode<2;mode++){
    const ox=mobile?0:mode*panelW,oy=mobile?mode*320:0,cx=ox+panelW/2,cy=oy+155,r=panelW*.31;
    inside+=text(mode?'Decentralized':'Centralized',ox+18,oy+30,panelW-36,font,'svg-title');
    const points=mode?Array.from({length:6},(_,i)=>[cx+r*Math.cos(i*Math.PI/3-Math.PI/2),cy+r*Math.sin(i*Math.PI/3-Math.PI/2)]):[[cx,cy],...Array.from({length:5},(_,i)=>[cx+r*Math.cos(i*2*Math.PI/5-Math.PI/2),cy+r*Math.sin(i*2*Math.PI/5-Math.PI/2)])];
    for(let a=0;a<points.length;a++)for(let b=a+1;b<points.length;b++)if(mode||a===0)inside+=`<path class="svg-title" style="fill:none" stroke="currentColor" stroke-width="1.4" d="M${points[a][0]} ${points[a][1]} L${points[b][0]} ${points[b][1]}"/>`;
    points.forEach(([x,y],i)=>{inside+=`<circle class="svg-card" cx="${x}" cy="${y}" r="20" stroke-width="1.5"/>`+text(mode?String(i+1):i===0?'P':String(i),x,y+font/3,40,font,'svg-title','middle');});
    inside+=text(mode?'Anggota terhubung langsung satu sama lain.':'P: pusat komunikasi bagi anggota lain.',ox+18,oy+280,panelW-36,font);
  }
  return frame(id,spec.title,spec.alt,width,mobile?650:350,inside);
}
function expectancy(spec,width,mobile){
  return process({...spec,nodes:[{title:'Effort',items:['E→P expectancy: usaha → performance']},{title:'Performance',items:['P→O expectancy: performance → outcome']},{title:'Outcomes',items:['Pay, recognition dan rewards lain','Valence: nilai outcome bagi individu']}],footer:'E→P dan P→O adalah dua hubungan yang dinilai. Valence melekat pada outcomes; tiga unsur diperlukan untuk motivation tinggi.'},width,mobile);
}
function control(spec,width,mobile){
  const id=spec.id+(mobile?'-m':'-d'),font=mobile?16:18,margin=35,w=width-70;let y=22,inside='',previous;const steps=[];
  for(const node of spec.nodes.slice(0,3)){const b=box(node,margin,y,w,font);if(previous)inside+=arrow(id,width/2,previous.y+previous.h+2,width/2,y-3);inside+=b.svg;steps.push(b);previous=b;y+=b.h+34;}
  const gap=14,bw=(w-gap)/2;
  const branches=[box({title:'Adequate',items:['4. Do nothing atau reinforcement']},margin,y,bw,font),box({title:'Inadequate',items:['4. Take corrective action']},margin+bw+gap,y,bw,font)];
  for(const b of branches){inside+=arrow(id,width/2,previous.y+previous.h+3,b.x+b.w/2,b.y-3)+b.svg;}
  const right=width-10,left=10,correction=branches[1],adequate=branches[0];
  inside+=`<path class="svg-title" style="fill:none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#${id}-arrow)" d="M${correction.x+correction.w} ${correction.y+correction.h/2} H${right} V${steps[0].y+steps[0].h/2} H${steps[0].x+steps[0].w+2}"/>`;
  inside+=`<path class="svg-title" style="fill:none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#${id}-arrow)" d="M${adequate.x} ${adequate.y+adequate.h/2} H${left} V${steps[1].y+steps[1].h/2} H${steps[1].x-2}"/>`;
  y+=Math.max(...branches.map(b=>b.h))+35;const footer=spec.footer;inside+=text(footer,20,y,width-40,font);y+=lines(footer,width-40,font).length*font*1.35+25;
  return frame(id,spec.title,spec.alt,width,y,inside);
}
function fiedler(spec,width,mobile){
  const id=spec.id+(mobile?'-m':'-d'),font=mobile?16:18,left=48,right=width-23,top=120,bottom=290,span=right-left;let inside=text('Performance (kualitatif)',18,27,width-36,font,'svg-title');
  inside+=`<path style="fill:none" stroke="rgb(var(--accent))" stroke-width="3" d="M18 53 H48"/>`+text('Task-oriented',60,58,width-78,font);
  inside+=`<path style="fill:none" stroke="rgb(var(--warning))" stroke-width="3" stroke-dasharray="7 4" d="M18 83 H48"/>`+text('Relationship-oriented',60,88,width-78,font);
  inside+=text('High',5,top+10,40,font)+text('Low',5,bottom,40,font);
  inside+=`<path class="svg-title" style="fill:none" stroke="currentColor" stroke-width="2" d="M${left} ${top-10} V${bottom} H${right}"/>`;
  const curve=(highEnds,cls)=>{
    const high=top+15,low=bottom-17,start=highEnds?high:low,mid=highEnds?low:high;
    return `<path class="${cls}" style="fill:none" stroke="rgb(var(--${highEnds?'accent':'warning'}))" ${highEnds?'':'stroke-dasharray="7 4"'} stroke-width="3" d="M${left+2} ${start} C${left+span*.25} ${start},${left+span*.24} ${mid},${left+span*.48} ${mid} S${left+span*.75} ${start},${right-2} ${start}"/>`;
  };
  inside+=curve(true,'text-accent-blue')+curve(false,'text-accent-amber');
  const roman=['I','II','III','IV','V','VI','VII','VIII'];roman.forEach((label,i)=>{const x=left+span*i/7;inside+=`<path class="svg-title" style="fill:none" stroke="currentColor" d="M${x} ${bottom} v5"/>`+text(label,x,bottom+25,30,font,'svg-text','middle');});
  let y=bottom+60;
  for(const line of ['Task-oriented: lebih sesuai pada kondisi sangat favorable / sangat unfavorable.','Relationship-oriented: lebih sesuai pada favorability intermediate.','Sumbu I–VIII: delapan kombinasi relations, task structure dan position power pada tabel.','Skematis dari Exhibit 11.7. Kurva menunjukkan kecocokan relatif; tanpa angka performance atau ambang universal.']){
    inside+=text(line,18,y,width-36,font);y+=lines(line,width-36,font).length*font*1.35+20;
  }
  return frame(id,spec.title,spec.alt,width,y+10,inside);
}
export function materializeMnu108Figure(spec){
  const render={coordination,parallel,matrix,pyramid,curve,bar:bars,process,networks,expectancy,control,fiedler}[spec.type];
  if(!render)throw new Error(`Unsupported MNU108 visual type: ${spec.type}`);
  const desktopWidth=['parallel','coordination'].includes(spec.type)?1000:700;
  return {kind:'figure',title:spec.title,svg:render(spec,desktopWidth,false),mobileSvg:render(spec,360,true),altText:spec.alt,caption:spec.source,
    overview:{heading:spec.title,cards:[],footer:spec.takeaway??spec.footer??'Baca hubungan pada visual, lalu gunakan penjelasan dan rujukan sumber.'}};
}
