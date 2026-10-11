const escape = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export const svgIdsPR5 = Array.from({length:9},(_,i)=>'V-TM09-0'+(i+1));
function scene(spec){
  let width=1600,height=1000;
  const nodes=[],edges=[],notes=[];
  const node=(label,x,y,w=400,h=120)=>{
    const lines=[];let line='';const max=Math.floor((w-45)/15);
    for(const word of label.split(/\s+/)){if(line.length+word.length+1>max&&line){lines.push(line);line=word;}else line+=(line?' ':'')+word;}
    if(line)lines.push(line);h=Math.max(h,lines.length*38+45);nodes.push({label,x,y,w,h,lines});return nodes.length-1;
  };
  const edge=(a,b,route='',dashed=false)=>edges.push({a,b,route,dashed});
  const note=(text,x,y,size=24)=>notes.push({text,x,y,size});
  // Parent-to-child elbow: leaves the bottom centre of the parent and enters the top centre of the child.
  const drop=(a,b,mid)=>{const p=nodes[a],c=nodes[b];const px=p.x+p.w/2,cx=c.x+c.w/2,y=mid??(p.y+p.h+(c.y-p.y-p.h)/2);edge(a,b,'M'+px+' '+(p.y+p.h)+' V'+y+' H'+cx+' V'+c.y);};
  const stack=(labels,x,y,w,gap,h=120)=>{const ids=[];let cy=y;for(const label of labels){const n=node(label,x,cy,w,h);ids.push(n);cy=nodes[n].y+nodes[n].h+gap;}return ids;};
  const id=spec.id;
  if(id==='V-TM09-01'){
    width=2100;height=1500;
    const left=node('Case Analysis (Chapter 13)',60,50,900,130),right=node('TheoryBridge.com (Case 3)',1140,50,900,130);
    const lc=['Differentiate, Speculate, Integrate','Five Steps','People, Opportunity, Context, Risk and Reward'].map((s,i)=>node(s,160,300+i*220,800,130));
    const rc=['Mission and Founding','Development of the Team and Processes','Products','Evolution of the Strategy and Marketing'].map((s,i)=>node(s,1240,300+i*220,800,130));
    lc.forEach((n,i)=>edge(left,n,'M60 115 H'+(i?20:20)+' V'+(365+i*220)+' H160'));
    rc.forEach((n,i)=>edge(right,n,'M2040 115 H2080 V'+(365+i*220)+' H2040'));
    const last=node('Analisis dan Rekomendasi',700,1250,700,130);
    edge(lc[2],last,'M560 '+(300+2*220+130)+' V1315 H700');edge(rc[3],last,'M1640 '+(300+3*220+130)+' V1315 H1400');
  }else if(id==='V-TM09-03'||id==='V-TM09-09'){
    width=1600;
    const labels=id==='V-TM09-03'?['Become Familiar with the Material','Identify Problems','Conduct Strategic Analyses','Propose Alternative Solutions','Make Recommendations']:["Bill's Questions (Symptom)",'Problem Statement','Alternatives','Recommendation','Conversion and Usage Data'];
    const ids=stack(labels,300,60,760,90,130);
    for(let i=0;i<4;i++)edge(ids[i],ids[i+1]);
    const from=nodes[ids[id==='V-TM09-03'?2:4]],to=nodes[ids[1]];
    edge(ids[id==='V-TM09-03'?2:4],ids[1],'M1060 '+(from.y+from.h/2)+' H1180 V'+(to.y+to.h/2)+' H1060',true);
    note(id==='V-TM09-03'?'masalah dapat berubah':'data baru dapat mengubah',1380,(from.y+to.y+to.h)/2+20,22);
    note(id==='V-TM09-03'?'setelah analisis':'rumusan masalah',1380,(from.y+to.y+to.h)/2+52,22);
  }else if(id==='V-TM09-02'||id==='V-TM09-04'){
    const four=id==='V-TM09-04';
    const labels=four?['People','Opportunity','Context','Risk and Reward']:['Differentiate','Speculate','Integrate'];
    const w=four?380:440,gap=four?50:60,total=labels.length*w+(labels.length-1)*gap;width=total+120;height=720;
    const root=node('Case Analysis',(width-500)/2,50,500,120);
    const kids=labels.map((s,i)=>node(s,60+i*(w+gap),340,w,120));
    kids.forEach(k=>drop(root,k,255));
    const text=four?[['keterampilan, pengalaman,','reputasi, kerja tim'],['akibat tindakan,','penghalang sukses'],['hal di luar kendali,','bisa dipengaruhi?'],['siapa menanggung risiko,','siapa menerima imbalan']]:[['memilah fakta, asumsi,','dan lapisan masalah'],['mengisi celah data,','membayangkan skenario'],['menyatukan semua faktor','menjadi satu rekomendasi']];
    kids.forEach((k,i)=>{note(text[i][0],nodes[k].x+w/2,540,24);note(text[i][1],nodes[k].x+w/2,576,24);});
  }else if(id==='V-TM09-05'){
    width=2000;height=1000;
    const research=node('Management Research',60,330,420,140),ktp=node('Knowledge Translation Problem',640,90,720,140),lbt=node('Lost Before Translation Problem',640,570,720,140),practice=node('Practitioners',1520,330,420,140);
    edge(research,ktp);edge(ktp,practice);edge(research,lbt);edge(lbt,practice);
    node('TheoryBridge.com',740,820,520,120);
    note('bahasa dan bentuk tidak dapat dipakai',1000,275,24);note('topik tidak dianggap penting',1000,755,24);note('jembatan di antara kedua sisi',1000,985,24);
  }else if(id==='V-TM09-06'){
    width=1800;height=1100;
    node('Dropbox 2019',100,50,650,110);const df=node('Free Users: lebih dari 600 juta',100,260,650,130),dp=node('Paid Subscribers: sekitar 14 juta (2,2%)',100,520,650,130);edge(df,dp);
    node('TheoryBridge.com',1050,50,650,110);const tf=node('Free Trial Sign-ups: sekitar 2.000 (10 sample briefs)',1050,260,650,130),tp=node('Paid Subscribers: tidak dinyatakan',1050,520,650,130);edge(tf,tp);
    node('Corporate Accounts: dua akun, jalur terpisah',1050,800,650,130);
    note('konversi',530,475,24);note('konversi belum dilaporkan',1585,475,24);
  }else if(id==='V-TM09-07'){
    width=1900;
    const ids=stack(['Senior Professor as Editor and Five MBAs as Writers','Work Never Used','Seasoned Editor and Ph.D. Faculty Writers','Executive Advisor and Two Sales Representatives','Research Briefs'],240,60,1120,90,130);
    for(let i=0;i<4;i++)edge(ids[i],ids[i+1]);
    note('tiga bulan dan modal terbuang',1640,nodes[ids[1]].y+nodes[ids[1]].h/2+8,22);
    note('proses dibalik',1640,nodes[ids[1]].y+nodes[ids[1]].h+52,22);
  }else if(id==='V-TM09-08'){
    width=2000;
    const feedback=node('700 Practitioner Feedback',650,40,700,110),dual=node('Dual Strategy',750,250,500,110);
    const ind=node('Individuals',150,470,600,110),corp=node('Corporations',1250,470,600,110);
    const trial=node('Free Trial Sign-ups: sekitar 2.000, 10 sample briefs',150,690,600,120),price=node('USD 29,95 per Month; pelanggan berbayar tidak dinyatakan',150,930,600,120);
    const pricing=node('Corporate Pricing USD 10.000–20.000 per Year',1250,690,600,120),accounts=node('Two Corporate Accounts: produsen otomotif dan perusahaan kesehatan global',1250,930,600,120);
    const bill=node('Questions from Bill: konversi dan penggunaan',650,1250,700,120);
    edge(feedback,dual);drop(dual,ind,415);drop(dual,corp,415);edge(ind,trial);edge(trial,price);edge(corp,pricing);edge(pricing,accounts);
    edge(price,bill,'M450 '+(nodes[price].y+nodes[price].h)+' V1190 H800 V1250');edge(accounts,bill,'M1550 '+(nodes[accounts].y+nodes[accounts].h)+' V1190 H1200 V1250');
  }else throw Error('Missing PR-5 SVG '+id);
  height=Math.max(height,...nodes.map(n=>n.y+n.h+60),...notes.map(n=>n.y+40));
  const arrow=id+'-arrow';
  const paths=edges.map(e=>{const a=nodes[e.a],b=nodes[e.b],ax=a.x+a.w/2,ay=a.y+a.h/2,bx=b.x+b.w/2,by=b.y+b.h/2;
    const d=e.route||(Math.abs(bx-ax)>Math.abs(by-ay)*1.4?'M'+(bx>ax?a.x+a.w:a.x)+' '+ay+' L'+(bx>ax?b.x:b.x+b.w)+' '+by:'M'+ax+' '+(by>ay?a.y+a.h:a.y)+' L'+bx+' '+(by>ay?b.y:b.y+b.h));
    return '<path data-edge="'+escape(a.label+' → '+b.label)+'" d="'+d+'" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#'+arrow+')" '+(e.dashed?'stroke-dasharray="8 6"':'')+'/>';
  }).join('');
  const shapes=nodes.map(n=>'<rect class="svg-card" data-node="'+escape(n.label)+'" x="'+n.x+'" y="'+n.y+'" width="'+n.w+'" height="'+n.h+'" rx="12"/><text class="svg-text" x="'+(n.x+n.w/2)+'" y="'+(n.y+(n.h-n.lines.length*38)/2+27)+'" text-anchor="middle" font-size="28">'+n.lines.map((s,i)=>'<tspan x="'+(n.x+n.w/2)+'" dy="'+(i?38:0)+'">'+escape(s)+'</tspan>').join('')+'</text>').join('');
  return '<svg class="course-diagram-svg mnu307-diagram" viewBox="0 0 '+width+' '+height+'" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif"><title>'+escape(spec.judul)+'</title><desc>'+escape(spec['alt text'])+'</desc><defs><marker id="'+arrow+'" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="currentColor"/></marker></defs><rect class="svg-bg" width="'+width+'" height="'+height+'" rx="16"/>'+paths+shapes+notes.map(n=>'<text class="svg-muted" x="'+n.x+'" y="'+n.y+'" text-anchor="middle" font-size="'+n.size+'">'+escape(n.text)+'</text>').join('')+'</svg>';
}
export function figurePR5(spec){
  const cards=spec.isi.split(';').map(s=>s.trim()).filter(Boolean).map(text=>({title:text,subtitle:'',items:[],takeaway:''}));
  return {kind:'figure',title:spec.judul,...(svgIdsPR5.includes(spec.id)?{svg:scene(spec)}:{}),overview:{heading:spec.judul,cards,footer:spec.hubungan.trim()},caption:spec['pesan utama']+' '+spec.sumber,altText:spec['alt text']};
}
