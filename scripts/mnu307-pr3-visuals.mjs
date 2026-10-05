const escape = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export const svgIdsPR3 = [1,2,3,4,6,7,8,9,10,11,17].map(n=>'V-TM05-'+String(n).padStart(2,'0')).concat([1,2,4,5,6,10,11,13,14,15,17,18].map(n=>'V-TM06-'+String(n).padStart(2,'0')));
function scene(spec){
  let width=1600,height=1000;
  const nodes=[],edges=[],notes=[];
  const node=(label,x,y,w=400,h=120)=>{
    const lines=[];let line='';const max=Math.floor((w-45)/15);
    for(const word of label.split(/\s+/)){if(line.length+word.length+1>max&&line){lines.push(line);line=word;}else line+=(line?' ':'')+word;}
    if(line)lines.push(line);h=Math.max(h,lines.length*38+45);nodes.push({label,x,y,w,h,lines});return nodes.length-1;
  };
  const edge=(a,b,both=false,route='',dashed=false,thick=false)=>edges.push({a,b,both,route,dashed,thick});
  const note=(text,x,y,size=22)=>notes.push({text,x,y,size});
  const id=spec.id;
  if(id==='V-TM05-01'){
    height=1420;
    node('Strategic Control',90,60,620);node('Organizational Design',890,60,620);
    node('Informational Control',90,320,620);node('Behavioral Control',90,580,620);
    node('Culture · Rewards · Boundaries',90,840,620);node('Corporate Governance',90,1100,620);
    edge(0,1,true);edge(0,2);edge(0,3,false,'M90 120 H45 V640 H90');edge(3,4);edge(5,0,false,'M710 1160 H775 V120 H710');
    ['Traditional Structures','International Structures','Boundaryless Designs','Ambidextrous Designs'].forEach((s,i)=>{const n=node(s,890,320+i*280,620);edge(1,n,false,'M1510 120 H1560 V'+(380+i*280)+' H1510');});
    note('Control ↔ Organizational Design',800,1380);
  }else if(['V-TM05-02','V-TM05-03','V-TM05-04'].includes(id)){
    height=950;
    const labels=id==='V-TM05-04'?['Boundaries','Culture','Rewards']:['Formulate Strategies','Implement Strategies','Strategic Control'];
    node(labels[0],570,70,460);node(labels[1],70,620,460);node(labels[2],1070,620,460);
    edge(0,1,id!=='V-TM05-02');edge(1,2,id!=='V-TM05-02');edge(2,0,id!=='V-TM05-02');
    if(id==='V-TM05-03'){note('Informational Control',1210,330);note('Behavioral Control',800,820);}
    if(id==='V-TM05-02')note('Feedback: Control → Formulate',800,890);
  }else if(id==='V-TM05-06'){
    height=1170;node('Shareholders',70,60,420);node('Board of Directors',590,60,420);node('Management led by CEO',1110,60,420);edge(0,1);edge(1,2);
    note('memilih',540,45,19);note('mengawasi',1060,45,19);
    node('Internal Mechanisms: Involved Board · Shareholder Activism · Managerial Incentives',80,440,650,250);
    node('External Mechanisms: Corporate Control Market · Auditors · Banks/Analysts · Regulators · Media/Public Activists',870,440,650,290);
    note('Management mengelola korporasi bagi pemilik',800,950);
    note('Mekanisme internal dan eksternal saling melengkapi',800,1090);
  }else if(id==='V-TM05-07'){
    height=1110;note('Principal–Agent Conflicts',400,60,26);note('Principal–Principal Conflicts',1200,60,26);
    node('Minority Shareholders',130,190,540);node('Professional Managers',130,780,540);edge(0,1,true);
    node('Minority Shareholders',930,190,540);node('Family Managers',930,780,540);edge(2,3,true);
    node('Controlling Shareholders',930,460,540);edge(4,3,true,'',true);note('penunjukan oleh pengendali',1200,720,20);
  }else if(id==='V-TM05-08'){
    width=2400;height=1540;
    [['Simple Structure',980,50],['Functional Structure (growth)',980,310],['Holding Company Structure',100,650],['Divisional Structure',980,950],['Functional Structure (vertical integration)',1860,650],['Worldwide Holding Company Structure',100,1200],['Worldwide Functional Structure',1860,1200],['International Structures',980,1340]].forEach(([s,x,y])=>node(s,x,y,440,150));
    edge(0,1,false,'',false,true);edge(1,2);edge(1,3,false,'M980 385 H870 V1025 H980');edge(1,4,false,'',false,true);
    edge(2,3);edge(2,5);edge(4,3,false,'',false,true);edge(4,6);edge(3,7,false,'',false,true);edge(5,7);edge(6,7);
    note('growth in revenues/employees',1200,270,20);note('unrelated diversification',400,540,20);note('related products/markets',640,875,20);note('vertical integration',1950,540,20);
    note('increase relatedness',380,860,20);note('related diversification',1850,890,20);
    note('international expansion',320,1120,20);note('international expansion',2080,1120,20);note('international expansion',1460,1270,20);
    note('increase relatedness',580,1460,20);note('related diversification',1820,1460,20);
  }else if(id==='V-TM05-09'){
    width=2400;height=1330;
    note('Simple · sintesis body',1200,45,26);node('Owner-Manager',950,80,500);node('Staff',950,340,500);edge(0,1);
    note('Functional · Exhibit 10.2',1200,560,26);node('Chief Executive Officer or President',850,600,700);
    ['Production','Engineering','Marketing','R&D','Personnel','Accounting'].forEach((s,i)=>{const n=node('Manager '+s,45+i*395,860,340,150);edge(2,n,false,'M1200 720 V790 H'+(215+i*395)+' V860');const low=node('Lower-level Managers, Specialists, and Operating Personnel',45+i*395,1100,340,180);edge(n,low);});
  }else if(id==='V-TM05-10'){
    width=2400;height=1650;node('Chief Executive Officer or President',850,50,700);node('Corporate Staff',1750,260,580);edge(0,1,false,'M1200 170 V320 H1750');
    ['A','B','C'].forEach((s,i)=>{const n=node('Division '+s+' General Manager',80+i*800,500,640);edge(0,n,false,'M1200 170 V420 H'+(400+i*800)+' V500');});
    ['Production','Engineering','Marketing','R&D','Personnel','Accounting'].forEach((s,i)=>{const n=node('Manager '+s,45+i*395,800,340,150);edge(2,n,false,'M400 620 V710 H'+(215+i*395)+' V800');const low=node('Lower-level Managers, Specialists, and Operating Personnel',45+i*395,1050,340,180);edge(n,low);});
    note('B/C Organized Similarly to Division A',1600,690,23);
    node('SBU · divisi serupa dikelompokkan',80,1380,1000,160);node('Holding Company · autonomy bisnis sedikit berkaitan',1320,1380,1000,160);note('Panel konsep tambahan · sintesis body',1200,1320,24);
  }else if(id==='V-TM05-11'){
    width=2500;height=1830;node('Chief Executive Officer or President',850,50,800);node('Corporate Staff',1810,270,600);edge(0,1,false,'M1250 170 V330 H1810');
    ['Administration and Human Resources','Projects','Manufacturing','Engineering','Marketing','Public Relations'].forEach((s,i)=>{const n=node('Manager '+s,40+i*415,510,365,180);edge(0,n,false,'M1250 170 V430 H'+(222.5+i*415)+' V510');});
    for(let r=0;r<4;r++){
      const y=860+r*250;const project=node('Project '+String.fromCharCode(65+r),455,y,365,120);
      edge(3,project,false,'M637.5 690 V'+y);
      for(let c=0;c<4;c++){const n=node('functional participants',870+c*415,y,365,120);edge(4+c,n,false,'M'+(1052.5+c*415)+' 690 V'+y);edge(project,n,false,'M820 '+(y+60)+' H'+(870+c*415),true);}
    }
    note('Solid: functional reporting · Dashed: project reporting',1250,1770,26);
  }else if(id==='V-TM05-17'){
    height=1190;node('Integrated Senior Management Team',450,60,700);
    node('Existing Business / Exploitation',70,500,650,160);node('New Venture / Exploration',880,500,650,160);edge(0,1,true);edge(0,2,true);
    node('Distinct Processes, Structures, Cultures',70,820,650,160);node('Distinct Processes, Structures, Cultures',880,820,650,160);edge(1,3);edge(2,4);
    note('Shared Cash, Talent, Expertise ↔',800,380);note('Overall Company Goals',800,1120);
  }else if(id==='V-TM06-01'){
    height=1570;node('Leadership Activities',90,60,620);node('Innovation',890,60,620);edge(0,1,true);
    ['Barriers and Power','Emotional Intelligence','Learning Organization','Ethical Organization'].forEach((s,i)=>{const n=node(s,90,340+i*290,620);edge(0,n,false,'M90 120 H40 V'+(400+i*290)+' H90');});
    ['Corporate Entrepreneurship','Real Options','Entrepreneurial Orientation'].forEach((s,i)=>{const n=node(s,890,340+i*390,620);edge(1,n,false,'M1510 120 H1560 V'+(400+i*390)+' H1510');});
    note('Direction · Organization · Culture ↔ Innovation',800,1500,25);
  }else if(id==='V-TM06-02'){
    height=980;node('Setting a Direction',70,70,650);node('Designing the Organization',880,70,650);node('Nurturing a Culture Dedicated to Excellence and Ethical Behavior',450,650,700,180);edge(0,1,true);edge(1,2,true);edge(2,0,true);
  }else if(id==='V-TM06-04'){
    width=2400;height=1080;node('Bases of Power',950,60,500);node('Organizational',650,400,700);node('Personal',1810,400,500);edge(0,1);edge(0,2);
    ['Legitimate Power','Reward Power','Coercive Power','Information Power'].forEach((s,i)=>{const n=node(s,40+i*440,800,400,150);edge(1,n,false,'M1000 520 V670 H'+(240+i*440)+' V800');});
    ['Referent Power','Expert Power'].forEach((s,i)=>{const n=node(s,1830+i*280,800,260,150);edge(2,n,false,'M2060 520 V670 H'+(1960+i*280)+' V800');});
  }else if(['V-TM06-05','V-TM06-06','V-TM06-18'].includes(id)){
    width=2000;height=id==='V-TM06-18'?1800:1530;
    const labels=id==='V-TM06-05'?['Emotional Intelligence','Self-Awareness','Self-Regulation','Motivation','Empathy','Social Skill']:id==='V-TM06-06'?['Learning Organization','Inspiring and Motivating with Mission/Purpose','Empowering All Levels','Accumulating/Sharing Internal Knowledge','Gathering/Integrating External Information','Challenging Status Quo/Enabling Creativity']:['Entrepreneurial Orientation','Autonomy','Innovativeness','Proactiveness','Competitive Aggressiveness','Risk Taking'];
    node(labels[0],720,560,560,160);
    [[720,80],[50,480],[1390,480],[50,1040],[1390,1040]].forEach(([x,y],i)=>edge(0,node(labels[i+1],x,y,560,210)));
    if(id==='V-TM06-06'){note('Competitive benchmarking · Functional benchmarking',480,1320,22);note('Eksperimen · dissent',1650,1320,22);note('Setiap unsur necessary but not sufficient',1000,1460,24);}
    if(id==='V-TM06-18'){['Business Risk','Financial Risk','Personal Risk'].forEach((s,i)=>edge(5,node(s,1080+i*300,1510,270,150),false,'M1670 1250 V1400 H'+(1215+i*300)+' V1510'));note('Antisipasi demand ≠ tantangan langsung kepada rival',1000,1760,23);}
  }else if(id==='V-TM06-10'){
    width=2700;height=1120;
    node('Radical Innovation',50,30,650);node('Incremental Innovation',2000,30,650);
    const labels=['Laparoscopic “keyhole” surgery','Fiber-optic cable','Speech recognition software','Internet browser','Polyester','Online auction exchanges','Enterprise resource planning (ERP)','Bubble wrap','Frozen yogurt'];
    // Ordinal spacing only; no quantitative axis or scores.
    for(let i=0;i<labels.length;i++){
      const n=node(labels[i],40+i*295,i%2?270:740,270,210);const x=175+i*295;
      notes.push({path:'M'+x+' 625 V'+(i%2?480:740)});
      if(i<8)notes.push({path:'M'+x+' 625 H'+(x+295)});
      void n;
    }
    note('Radical → Incremental · posisi relatif tanpa nilai numerik',1350,1060,26);
  }else if(id==='V-TM06-11'){
    height=1120;node('Associating',550,470,500,160);
    [['Questioning',70,70],['Observing',1030,70],['Experimenting',70,840],['Networking',1030,840]].forEach(([s,x,y])=>edge(node(s,x,y,500,160),0));
  }else if(id==='V-TM06-13'){
    width=2000;height=1480;note('Eggers · lima pedoman setara',510,55,27);
    ['Avoid Overcommitting','Do Not Let Shame/Despair End Participation','Pivot Quickly','Transfer Knowledge','Beware Being Right at Outset'].forEach((s,i)=>node(s,70,130+i*255,880,150));
    note('Birkinshaw · tiga langkah belajar',1510,55,27);
    ['Study Failed Projects','Crystallize/Share Insights','Corporate Reviews'].forEach((s,i)=>node(s,1110,220+i*430,790,170));edge(5,6);edge(6,7);edge(7,5,false,'M1900 1165 H1960 V305 H1900',true);
    note('Feedback review → study · sintesis',1510,1410,23);
  }else if(id==='V-TM06-14'){
    width=2000;height=1640;
    ['Redefine Technology/Competency Generally','Identify New Applications','Select Most Promising Applications','Choose Best Entry Mode'].forEach((s,i)=>node(s,500,50+i*320,1000,150));for(let i=0;i<3;i++)edge(i,i+1);
    note('Advantage over current products · Practicality/challenges',1000,900,25);
    ['Own entry','Strategic alliance','Licensing'].forEach((s,i)=>edge(3,node(s,60+i*660,1350,560,160),false,'M1000 1160 V1260 H'+(340+i*660)+' V1350'));
    note('Entry mode sesuai resource assessment',1000,1590,24);
  }else if(id==='V-TM06-15'){
    width=2000;height=1370;node('Focused',80,50,840);node('Dispersed',1080,50,840);
    ['New Venture Groups','Business Incubators'].forEach((s,i)=>edge(0,node(s,80,340+i*250,840,140),false,'M80 110 H30 V'+(410+i*250)+' H80'));
    ['Entrepreneurial Culture','Resource Allotments','Product Champions'].forEach((s,i)=>edge(1,node(s,1080,300+i*230,840,140),false,'M1920 110 H1970 V'+(370+i*230)+' H1920'));
    node('Project Definition',180,1060,660,170);node('Project Impetus',1160,1060,660,170);edge(7,8);note('Product champion: resources · interest customers',1000,1330,23);
  }else if(id==='V-TM06-17'){
    width=2400;height=1720;
    ['Small Initial Investment','Learn about Outcomes','Tollgate'].forEach((s,i)=>node(s,900,50+i*320,600,150));edge(0,1);edge(1,2);
    ['Grow/Accelerate','Delay/Learn More','Shrink','Abandon'].forEach((s,i)=>edge(2,node(s,50+i*600,1090,500,150),false,'M1200 840 V970 H'+(300+i*600)+' V1090'));
    node('Subsequent Investment',50,1470,500,150);edge(3,7);edge(4,1,false,'M800 1090 V445 H900',true);
    note('Follow-on investment hanya bila dipilih',1100,1520,25);note('Shrink: kurangi skala · Abandon: hentikan',1550,1630,25);
  }else throw Error('Missing PR-3 SVG '+id);
  height=Math.max(height,...nodes.map(n=>n.y+n.h+40));
  const arrow=id+'-arrow';
  const paths=edges.map(e=>{const a=nodes[e.a],b=nodes[e.b],ax=a.x+a.w/2,ay=a.y+a.h/2,bx=b.x+b.w/2,by=b.y+b.h/2;
    const d=e.route||(Math.abs(bx-ax)>Math.abs(by-ay)*1.4?'M'+(bx>ax?a.x+a.w:a.x)+' '+ay+' L'+(bx>ax?b.x:b.x+b.w)+' '+by:'M'+ax+' '+(by>ay?a.y+a.h:a.y)+' L'+bx+' '+(by>ay?b.y:b.y+b.h));
    return '<path data-edge="'+escape(a.label+' → '+b.label)+'" d="'+d+'" fill="none" stroke="currentColor" stroke-width="'+(e.thick?5:2)+'" marker-end="url(#'+arrow+')" '+(e.both?'marker-start="url(#'+arrow+')"':'')+' '+(e.dashed?'stroke-dasharray="8 6"':'')+'/>';
  }).join('');
  const shapes=nodes.map(n=>'<rect class="svg-card" data-node="'+escape(n.label)+'" x="'+n.x+'" y="'+n.y+'" width="'+n.w+'" height="'+n.h+'" rx="12"/><text class="svg-text" x="'+(n.x+n.w/2)+'" y="'+(n.y+(n.h-n.lines.length*38)/2+21)+'" text-anchor="middle" font-size="28">'+n.lines.map((s,i)=>'<tspan x="'+(n.x+n.w/2)+'" dy="'+(i?38:0)+'">'+escape(s)+'</tspan>').join('')+'</text>').join('');
  return '<svg class="course-diagram-svg mnu307-diagram" viewBox="0 0 '+width+' '+height+'" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif"><title>'+escape(spec.judul)+'</title><desc>'+escape(spec['alt text'])+'</desc><defs><marker id="'+arrow+'" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="currentColor"/></marker></defs><rect class="svg-bg" width="'+width+'" height="'+height+'" rx="16"/>'+paths+shapes+notes.map(n=>n.path?'<path d="'+n.path+'" fill="none" stroke="currentColor" stroke-width="3"/>':'<text class="svg-muted" x="'+n.x+'" y="'+n.y+'" text-anchor="middle" font-size="'+n.size+'">'+escape(n.text)+'</text>').join('')+'</svg>';
}
export function figurePR3(spec){
  const cards=spec.isi.split(';').map(s=>s.trim()).filter(Boolean).map(text=>({title:text,subtitle:'',items:[],takeaway:''}));
  return {kind:'figure',title:spec.judul,...(svgIdsPR3.includes(spec.id)?{svg:scene(spec)}:{}),overview:{heading:spec.judul,cards,footer:spec.hubungan.replace(/Tidak menggambar[^.]*\./g,'').replace(/Tidak menambah finance director[^;]*; /,'').replace(/; kedua Functional harus menjadi node berbeda\./,'; Functional growth dan Functional vertical integration berbeda.').replace(/Garis dashed tetap dua arah sesuai gambar; tidak menambah garis hubungan konflik langsung yang tidak digambar\./,'Garis dashed menunjukkan hubungan dua arah penunjukan oleh pengendali.').replace(/Label bergantian bawah\/atas seperti gambar\. /,'').replace(/Tidak membuat skor peluang numerik\./,'').replace(/Tidak membuat enam langkah wajib linear\./,'Praktik ini saling mendukung tanpa urutan wajib.').replace(/Administration\/HR tidak diberi empat sel proyek yang tidak ada pada gambar\./,'Administration/HR berada di luar grid proyek.').trim()},caption:spec['pesan utama']+' '+spec.sumber,altText:spec['alt text']};
}
