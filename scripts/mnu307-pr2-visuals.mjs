const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export const svgIdsPR2=[...[1,2,3,4,7,8,11,12,13,15].map(i=>`V-TM03-${String(i).padStart(2,'0')}`),...[1,2,4,5,6,7,9,10,11,14,15,16].map(i=>`V-TM04-${String(i).padStart(2,'0')}`)];
const footers={
  'V-TM03-01':'Business-level: cara bersaing dan mempertahankan keunggulan dalam bisnis. Corporate-level: sinergi, cara masuk bisnis, dan motif diversifikasi. Dua level keputusan berjalan bersama.',
  'V-TM03-02':'Biaya rendah di kiri, nilai unggul di kanan; target luas di atas, segmen sempit di bawah. Tiga strategi dasar menempati empat posisi karena focus mempunyai dua varian.',
  'V-TM03-03':'Dua panel memakai sembilan kegiatan yang sama. Support Activities menopang seluruh Primary Activities; kegiatan utama mengikuti urutan rantai nilai.',
  'V-TM03-04':'Lima tekanan menuju bisnis. Biaya rendah, loyalitas/keunikan, atau gabungannya membantu menghadapi tekanan; tekanan tetap ada.',
  'V-TM03-05':'Empat pendekatan sejajar dapat mendukung Low Cost dan Differentiation sekaligus. Keberhasilan perlu diuji melalui mekanisme biaya dan nilai.',
  'V-TM03-06':'Activities sepanjang Industry Value Chain memiliki Revenues dan Profits yang berbeda. Variasi diperiksa menurut pelanggan, produk, wilayah, dan kanal, tanpa angka ilustrasi.',
  'V-TM03-07':'Suppliers ↔ Platform ↔ Customers. Empat kelompok tindakan mendukung platform bersama; Sequence Business Growth mencakup wilayah dan produk. Data mendukung connections.',
  'V-TM03-08':'Time bergerak kiri ke kanan. Unit Sales memakai garis solid; Profits memakai garis putus-putus, mula-mula negatif dan turun lebih dahulu. Kurva konseptual tanpa angka. Renewal dapat mengubah lintasan.',
  'V-TM03-09':'Maturity → Reverse Positioning: kurangi atribut standar, tambah atribut terpilih, tetap pada kategori lama. Jalur Breakaway Positioning memakai kategori berbeda. Keduanya dapat membuka Renewed Growth.',
  'V-TM03-10':'External Analysis dan Internal Analysis membantu memilih tiga pendekatan yang dapat dipadukan tanpa urutan wajib.',
  'V-TM03-11':'Related terutama memakai hubungan horizontal antarunit; unrelated terutama memakai hubungan hierarkis induk–unit. Sumber manfaat dapat bertumpang tindih.',
  'V-TM03-12':'Core Competencies sebagai akar menopang Core Products, Business Units, dan End Products. Tiga kriteria menguji sinergi kemampuan lintas bisnis.',
  'V-TM03-13':'Raw Materials → Manufacturing → Distribution. Dari manufacturing: backward integration menuju hulu; forward integration menuju hilir.',
  'V-TM03-14':'Lima biaya menyusun Transaction Costs. Transaction Costs < Administrative Costs mendukung Market Transactions; lebih tinggi membuat Vertical Integration menarik. Kompetensi dan stakeholder tetap dinilai; keputusan saat sama besar tidak ditetapkan.',
  'V-TM03-15':'High share di kiri, high growth di atas. Batas 1x dan 10% mengikuti buku. Ukuran lingkaran = pendapatan relatif, tanpa data perusahaan. Cash Cows dapat mendanai Stars/Question Marks; keputusan alokasi tetap memerlukan analisis.',
  'V-TM03-16':'Tiga cara masuk bisnis sejajar. Acq-hires terkait acquisitions; Divestment berarti melepas unit dari portofolio.',
  'V-TM03-17':'Historis 2011–2020, sumbu dollars in trillions (0–6). Relatif datar 2011–2013, puncak 2015, turun 2016, naik sedikit 2017, turun/relatif datar lalu turun 2020. Tidak menyajikan nilai titik presisi.',
  'V-TM03-18':'Growth for Growth’s Sake, Egotism, dan Antitakeover Tactics adalah tiga motif. Greenmail, Golden Parachutes, dan Poison Pills berada pada cabang antitakeover. Taktik tetap perlu dinilai dalam konteks.',
  'V-TM04-01':'Cabang ekspansi: konteks nasional → motivasi/risiko → tekanan/strategi → entry modes. Cabang usaha baru: peluang, sumber daya, dan pelaksana saling terkait → entry/generic strategies → competitive dynamics. Urutan evaluasi merupakan sintesis pengajaran.',
  'V-TM04-02':'Empat determinan konsep saling terkait. India mempunyai lima node: Rivalry, U.S. Demand, Factor, dan Related saling terhubung dua arah solid. Domestic Demand terhubung dua arah dashed ke Rivalry, Factor, dan Related; dashed menunjukkan interaksi lebih lemah.',
  'V-TM04-03':'Enam manfaat dan empat risiko dinilai bersama. Political Risk dan Economic Risk tetap dua jenis risiko walaupun berada pada satu subjudul buku.',
  'V-TM04-04':'R&D → Procurement → Manufacturing → Marketing → Sales and Service. Setiap kegiatan dinilai pada dua dimensi independen: Domestic/Foreign Location dan In-house/External Provider.',
  'V-TM04-05':'Spokes menangani Routine Treatment, Follow-up, dan Diagnosis; hub menyediakan Specialized Doctors dan Sophisticated Equipment. Videoconferencing dua arah; Referral dari spoke ke hub bila diperlukan.',
  'V-TM04-06':'X = Pressures for Local Adaptation (low kiri, high kanan); Y = Pressures to Lower Costs (low bawah, high atas). International kiri bawah, Global kiri atas, Multidomestic kanan bawah, Transnational kanan atas. Tekanan berbeda dari biaya aktual; strategi dapat dicampur.',
  'V-TM04-07':'Headquarters ↔ Subsidiary A ↔ Subsidiary B ↔ Headquarters untuk knowledge transfer. Upstream cenderung terkoordinasi; downstream cenderung dekat pelanggan. Efficiency, Local Adaptation, dan Learning perlu dikelola bersama.',
  'V-TM04-08':'Regional terkonsentrasi pada kawasan asal; global tersebar pada beberapa kawasan. Distribusi Foreign Sales dinilai bersama distance dan Trading Blocs. Kriteria 20% pada tiga kawasan berasal dari studi buku.',
  'V-TM04-09':'Enam label bergerak dari kontrol/investasi/risiko rendah ke tinggi. Ini trade-off, tanpa keharusan melewati tiap mode. Empat kelompok dasar menggabungkan Licensing/Franchising dan Strategic Alliance/Joint Venture.',
  'V-TM04-10':'Opportunity ↔ Resources ↔ Entrepreneur(s) ↔ Opportunity. Ketiga unsur perlu saling cocok tanpa dominasi otomatis.',
  'V-TM04-11':'Discovery dapat berasal dari Spontaneous Insight atau Deliberate Search. Evaluation menilai Attractive, Achievable, Durable, dan Value Creating. Resources dan entrepreneurs diperiksa sebelum business plan/launch; gagasan tidak layak dihentikan.',
  'V-TM04-12':'Financial, Human, dan Social Capital mendukung usaha; Government Resources menambah dukungan sesuai sumber. Vision, Dedication and Drive, serta Commitment to Excellence bekerja bersama.',
  'V-TM04-13':'Pioneering menawarkan cara radikal; imitative memindahkan model terbukti; adaptive menyesuaikan gagasan untuk nilai baru. Tiga cara sejajar, dengan risiko penerimaan/imitasi dan kebutuhan perbaikan.',
  'V-TM04-14':'Target broad/narrow dan low cost/differentiation membentuk empat posisi. Combination Strategies dinilai bersama Simple Structure, Flexibility, dan Resource Constraints. Matriks adalah sintesis Ch5 pada Ch8.',
  'V-TM04-15':'New Competitive Action → Threat Analysis → Motivation and Capability to Respond → Types of Competitive Action → Likelihood of Competitive Reaction → New Competitive Action. Balasan dapat memulai putaran berikutnya.',
  'V-TM04-16':'Market Commonality dan Resource Similarity tinggi memperkuat threat. Risiko perang dapat menahan serangan awal; setelah diserang, kedekatan pasar dapat meningkatkan motivasi/respons. Tidak memakai skor atau nama strategi kuadran.',
  'V-TM04-17':'Dua jenis tindakan sejajar: strategic memiliki komitmen lebih besar/sulit dibalik, tactical relatif cepat. Commitment, reversibility, dan timing membantu membedakannya; contoh lengkap tersedia pada Pendalaman.',
  'V-TM04-18':'Market Dependence, Competitor Resources, dan Actor’s Reputation → Likelihood of Reaction → Act atau Forbearance. Co-opetition menggabungkan kerja sama dan persaingan; Collusion Risk menjadi batas, tanpa urutan wajib setelah forbearance.',
};

// Overview retains every approved isi label on phones. Desktop scenes include
// the additional source labels as support cards where they are not in the graph.
function overviewCards(spec){return spec.isi.replace(/\.\s+(?=[A-Z][^;]*:|(?:International|Stars|Circle Size|Government Resources|Combination Strategies)\b)/g,'; ').split(';').map(s=>s.trim()).filter(Boolean).map(text=>{
  const colon=text.indexOf(':');
  return colon>=0?{title:text.slice(0,colon+1),subtitle:'',items:[text.slice(colon+1).trim()],takeaway:''}:{title:text,subtitle:'',items:[],takeaway:''};
});}

function scene(spec){
  let width=1400,height=850;
  const nodes=[],edges=[],notes=[],extra=[];
  const node=(label,x,y,w=360,h=100)=>{const lines=[];let line='';const max=Math.floor((w-40)/10.5);for(const word of label.split(/\s+/)){if(line.length+word.length+1>max&&line){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);h=Math.max(h,lines.length*27+40);nodes.push({label,x,y,w,h,lines});return nodes.length-1;};
  const edge=(a,b,both=false,route='',dashed=false)=>edges.push({a,b,both,route,dashed});
  const note=(text,x,y,size=21)=>notes.push({text,x,y,size});
  const matrix=(columns,rows,cells)=>{
    height=750;
    node(columns[0],270,55,480,100);node(columns[1],800,55,480,100);
    node(rows[0],15,215,220,150);node(rows[1],15,475,220,150);
    cells.forEach((label,i)=>node(label,270+(i%2)*530,195+Math.floor(i/2)*260,480,210));
  };
  const id=spec.id;
  if(id==='V-TM03-01'){
    height=1070;node('Business-level strategy',90,50,540,100);node('Corporate-level strategy',770,50,540,100);
    ['Generic strategies','Combination strategies','Sustainability','Platform markets','Industry life cycle'].forEach((s,i)=>{const n=node(s,180,230+i*160,400,100);edge(0,n,false,`M90 100 H50 V${280+i*160} H180`);});
    ['Related diversification','Unrelated diversification','Means of diversification','Managerial motives'].forEach((s,i)=>{const n=node(s,870,230+i*190,430,110);edge(1,n,false,`M770 100 H715 V${285+i*190} H870`);});
  }else if(id==='V-TM03-02'){
    matrix(['Low Cost Position','Superior Perceived Value by Customer'],['Broad Target/Industrywide','Narrow Target/Particular Segment Only'],['Overall Cost Leadership','Broad Differentiation','Cost Focus','Differentiation Focus']);
  }else if(id==='V-TM03-03'){
    width=1600;height=1210;
    for(const [panel,y] of [['Biaya rendah',40],['Diferensiasi',640]]){
      note(panel,800,y+20,25);
      node('Support: Firm Infrastructure · Human Resource Management · Technology Development · Procurement',80,y+70,1440,150);
      ['Inbound Logistics','Operations','Outbound Logistics','Marketing and Sales','Service'].forEach((s,i)=>node(s,40+i*320,y+300,280,140));
      const start=nodes.length-5;for(let i=start;i<start+4;i++)edge(i,i+1);
      note('Support Activities menopang seluruh Primary Activities',800,y+500);
    }
  }else if(id==='V-TM03-04'){
    height=1180;node('Bisnis',540,340,320,120);
    [['Rivalry',540,80],['Buyer Power',960,310],['Supplier Power',60,310],['Threat of Entry',140,620],['Threat of Substitutes',900,620]].forEach(([s,x,y])=>edge(node(s,x,y,350,130),0));
    ['Overall Cost Leadership','Differentiation','Combined Advantages'].forEach((s,i)=>node(s,50+i*460,920,400,140));
    note('Sumber perlindungan terhadap tekanan',700,870);
  }else if(id==='V-TM03-07'){
    height=950;node('Suppliers',65,365,350,100);node('Platform',525,365,350,100);node('Customers',985,365,350,100);edge(0,1,true);edge(1,2,true);
    [['Draw in Users',60,60],['Create Easy and Informative Customer Interfaces',770,50],['Facilitate the Best Connections',60,690],['Sequence Business Growth',770,690]].forEach(([s,x,y])=>edge(node(s,x,y,550,150),1,false,'',true));
  }else if(id==='V-TM03-08'){
    height=930;
    ['Introduction','Growth','Maturity','Decline'].forEach((s,i)=>node(s,110+i*320,70,290,100));
    extra.push('<path d="M100 215 V770 H1370 M100 650 H1370" stroke="currentColor" fill="none" stroke-width="2"/>');
    extra.push('<path data-life-curve="sales" d="M120 645 C300 635 320 480 480 355 S850 230 1000 265 S1170 360 1350 540" fill="none" stroke="currentColor" stroke-width="5"/>');
    extra.push('<path data-life-curve="profits" d="M120 700 C280 710 320 475 470 425 S700 365 850 435 S1100 605 1350 635" fill="none" stroke="currentColor" stroke-width="4" stroke-dasharray="12 9"/>');
    note('Sales / Profits',165,210);note('Unit Sales (solid)',970,215);note('Profits (dashed)',835,520);note('Time',720,835);note('Profits awal negatif',275,745,18);
  }else if(id==='V-TM03-11'){
    height=880;node('Related Diversification',70,55,600,100);node('Unrelated Diversification',830,55,500,100);
    node('Economies of Scope · Leveraging Core Competencies · Sharing Activities',80,300,550,230);node('Market Power · Pooled Negotiating Power · Vertical Integration',80,620,550,190);
    node('Corporate Parenting and Restructuring · Portfolio Management',830,360,500,240);edge(0,2,false,'M70 105 H40 V415 H80');edge(0,3,false,'M70 105 H20 V715 H80');edge(1,4);
  }else if(id==='V-TM03-12'){
    height=1030;['End Products (leaves/flowers/fruit)','Business Units (branches)','Core Products (trunk/major limbs)','Core Competencies (roots)'].forEach((s,i)=>node(s,95,70+i*240,650,130));
    edge(3,2);edge(2,1);edge(1,0);
    node('Superior Customer Value · Difficult to Imitate/Substitute · Transferable across Businesses',930,380,400,300);note('Tiga kriteria',1130,330);
  }else if(id==='V-TM03-13'){
    height=550;node('Raw Materials / Polypropylene Fiber Production',30,240,410,180);node('Manufacturing of Final Product / Carpet Manufacturing',495,240,410,180);node('Distribution / Retail Stores',960,240,410,180);edge(0,1);edge(1,2);
    extra.push('<path d="M680 130 H170" stroke="currentColor" fill="none" stroke-width="3" marker-end="url(#ARROW)"/><path d="M720 130 H1230" stroke="currentColor" fill="none" stroke-width="3" marker-end="url(#ARROW)"/>');note('Backward integration',330,100);note('Forward integration',1080,100);
  }else if(id==='V-TM03-15'){
    height=960;matrix(['High Relative Market Share','Low Relative Market Share'],['High Industry Growth Rate','Low Industry Growth Rate'],['Stars','Question Marks','Cash Cows','Dogs']);height=960;
    extra.push('<circle data-bcg-circle="Stars" cx="510" cy="355" r="34" fill="none" stroke="currentColor" stroke-width="3"/><circle data-bcg-circle="Question Marks" cx="1040" cy="355" r="24" fill="none" stroke="currentColor" stroke-width="3"/><circle data-bcg-circle="Cash Cows" cx="510" cy="620" r="40" fill="none" stroke="currentColor" stroke-width="3"/><circle data-bcg-circle="Dogs" cx="1040" cy="620" r="20" fill="none" stroke="currentColor" stroke-width="3"/>');
    note('1x: batas Relative Market Share',780,740);note('10%: batas Industry Growth Rate',780,785);note('Circle Size = Relative Revenues of Business Unit',780,855);note('Lingkaran ilustratif tanpa data perusahaan',780,900,18);
  }else if(id==='V-TM04-01'){
    height=1150;node('International Expansion',80,50,540,100);node('Opportunities · Resources · Entrepreneurs',780,50,540,160);
    ['National Advantage','Motivations and Risks','Opposing Pressures · Four Strategies','Entry Modes'].forEach((s,i)=>{const n=node(s,80,270+i*210,540,120);if(i===0)edge(0,n);else edge(n-1,n);});
    node('Entry Strategies',780,350,540,120);node('Generic Strategies',780,620,540,120);node('Competitive Dynamics',780,890,540,120);edge(1,6);edge(6,7);edge(7,8);
  }else if(id==='V-TM04-02'){
    width=2000;height=2080;note('Diamond of National Advantage',1000,50,30);
    node('Factor Endowments',730,100,540,110);node('Demand Conditions',110,390,450,130);node('Related and Supporting Industries',1400,390,500,150);node('Firm Strategy, Structure, and Rivalry',710,690,580,150);
    for(let a=0;a<4;a++)for(let b=a+1;b<4;b++)edge(a,b,true);
    note('India’s Software Diamond',1000,970,30);
    node('U.S. Demand Conditions',730,1040,540,140);node('Domestic Rivalry',100,1360,450,150);node('Related and Supporting Industries',1300,1360,360,180);node('Factor Endowments',730,1750,540,140);node('Domestic Demand Conditions',1710,1360,265,180);
    for(let a=4;a<8;a++)for(let b=a+1;b<8;b++)edge(a,b,true);
    edge(8,5,true,'M1842 1540 V2000 H55 V1435 H100',true);edge(8,6,true,'',true);edge(8,7,true,'M1842 1540 V1930 H1000 V1890',true);
    note('Solid = hubungan; dashed = interaksi lebih lemah',1000,2040,22);
  }else if(id==='V-TM04-04'){
    width=1600;height=720;['R&D','Procurement','Manufacturing','Marketing','Sales and Service'].forEach((s,i)=>node(s,30+i*320,70,280,150));for(let i=0;i<4;i++)edge(i,i+1);
    node('Lokasi: Domestic Location / Foreign Location',80,370,650,190);node('Penyedia: In-house / External Provider',870,370,650,190);note('Dua dimensi independen pada setiap kegiatan',800,650);
  }else if(id==='V-TM04-05'){
    height=1070;node('Urban Hub · Specialized Doctors · Sophisticated Equipment',450,350,500,220);
    [['Rural Spoke Facilities · Routine Treatment · Follow-up · Diagnosis',60,50],['Rural Spoke Facilities · Routine Treatment · Follow-up · Diagnosis',800,50],['Rural Spoke Facilities · Routine Treatment · Follow-up · Diagnosis',450,810]].forEach(([s,x,y])=>{const n=node(s,x,y,530,190);edge(n,0,true);});
    note('Videoconferencing ↔',240,520);note('Referral: spoke → hub',1080,660);
  }else if(id==='V-TM04-06'){
    matrix(['Low Pressures for Local Adaptation','High Pressures for Local Adaptation'],['High Pressures to Lower Costs','Low Pressures to Lower Costs'],['Global','Transnational','International','Multidomestic']);
  }else if(id==='V-TM04-07'){
    height=1160;node('Headquarters',470,230,460,120);node('Subsidiary A',50,580,500,140);node('Subsidiary B',850,580,500,140);edge(0,1,true);edge(1,2,true);edge(2,0,true);
    node('Efficiency · Local Adaptation · Learning',150,45,1100,100);node('Optimal Activity Locations · Upstream Activities · Downstream Activities',180,925,1040,150);note('Knowledge transfer',700,790);
  }else if(id==='V-TM04-09'){
    width=1900;height=1130;
    extra.push('<path d="M80 70 V940 H1850" fill="none" stroke="currentColor" stroke-width="3"/>');
    ['Exporting','Licensing','Franchising','Strategic Alliance','Joint Venture','Wholly Owned Subsidiary'].forEach((s,i)=>node(s,110+i*290,780-i*135,250,110));
    note('Extent of Investment and Risk: Low → High',650,45);note('Degree of Ownership and Control: Low → High',950,1020);note('Trade-off; urutan setiap perusahaan dapat berbeda',950,1090,22);
  }else if(id==='V-TM04-10'){
    height=800;node('Opportunity',490,70,420,150);node('Resources',60,550,450,150);node('Entrepreneur(s)',890,550,450,150);edge(0,1,true);edge(1,2,true);edge(2,0,true);
  }else if(id==='V-TM04-11'){
    height=1100;node('Spontaneous Insight',70,50,540,110);node('Deliberate Search',790,50,540,110);node('Discovery',450,300,500,110);edge(0,2);edge(1,2);
    node('Evaluation / Feasibility Analysis · Attractive · Achievable · Durable · Value Creating',350,580,700,180);edge(2,3);
    node('Resources / Entrepreneur(s) → Business Plan',50,920,660,130);node('Discontinue bila tidak layak',880,920,460,130);edge(3,4);edge(3,5);
  }else if(id==='V-TM04-14'){
    matrix(['Advantage: Low Cost','Advantage: Differentiation'],['Competitive Scope: Broad','Competitive Scope: Narrow'],['Cost Leadership','Differentiation','Cost Focus','Differentiation Focus']);height=980;node('Combination Strategies · Simple Structure · Flexibility · Resource Constraints',270,770,1010,140);
  }else if(id==='V-TM04-15'){
    height=1440;['New Competitive Action','Threat Analysis','Motivation and Capability to Respond','Types of Competitive Action','Likelihood of Competitive Reaction'].forEach((s,i)=>node(s,310,70+i*260,800,140));
    for(let i=0;i<4;i++)edge(i,i+1);edge(4,0,false,'M1110 1180 H1270 V140 H1110');note('Balasan memicu tindakan baru',700,1410);
  }else if(id==='V-TM04-16'){
    matrix(['Low Market Commonality','High Market Commonality'],['High Resource Similarity','Low Resource Similarity'],['Resource Similarity high / Market Commonality low','Stronger Threat when Both High','Resource Similarity low / Market Commonality low','Resource Similarity low / Market Commonality high']);height=920;node('Awareness of Potential Actions · Risiko balasan dapat menahan serangan awal',270,750,1010,120);
  }else throw Error(`Missing PR-2 scene ${id}`);
  const supportingLabels={
    'V-TM03-03':['Panel biaya: overhead / training / process engineering / purchasing / handling / fleet / media / repair','Panel diferensiasi: MIS / talent / engineering / components / handling / flexibility / orders / relationships / response'],
    'V-TM03-08':['Generic Strategies','Market Growth Rate','Number of Segments','Intensity of Competition','Product Design','Process Design','Functional Areas','Overall Objective'],
    'V-TM04-02':['India factor: scientists/engineers, low but rising salaries, English ability','U.S.: strong knowledgeable market/leading-edge applications','Related: education institutions, communication infrastructure, imported computers/software/economic liberalization','Rivalry: low barriers, >800 firms, MNC development centers (versi exhibit)'],
  }[id]??[];
  height=Math.max(height,...nodes.map(n=>n.y+n.h+40));
  if(supportingLabels.length){
    const start=height+40,columns=id==='V-TM03-08'?4:2,w=(width-120)/columns;
    supportingLabels.forEach((label,i)=>node(label,40+(i%columns)*(w+15),start+Math.floor(i/columns)*240,w,190));
    height=Math.max(height,...nodes.map(n=>n.y+n.h+40));
  }
  const arrow=`${id}-arrow`;
  const paths=edges.map(e=>{const a=nodes[e.a],b=nodes[e.b],ax=a.x+a.w/2,ay=a.y+a.h/2,bx=b.x+b.w/2,by=b.y+b.h/2;
    const d=e.route||(Math.abs(bx-ax)>Math.abs(by-ay)*1.4?`M${bx>ax?a.x+a.w:a.x} ${ay} L${bx>ax?b.x:b.x+b.w} ${by}`:`M${ax} ${by>ay?a.y+a.h:a.y} L${bx} ${by>ay?b.y:b.y+b.h}`);
    return `<path d="${d}" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#${arrow})" ${e.both?`marker-start="url(#${arrow})"`:''} ${e.dashed?'stroke-dasharray="8 6"':''}/>`;
  }).join('');
  const shapes=nodes.map(n=>`<rect class="svg-card" data-node="${escape(n.label)}" x="${n.x}" y="${n.y}" width="${n.w}" height="${n.h}" rx="12"/><text class="svg-text" x="${n.x+n.w/2}" y="${n.y+(n.h-n.lines.length*27)/2+21}" text-anchor="middle" font-size="19">${n.lines.map((s,i)=>`<tspan x="${n.x+n.w/2}" dy="${i?27:0}">${escape(s)}</tspan>`).join('')}</text>`).join('');
  return `<svg class="course-diagram-svg mnu307-diagram" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif"><title>${escape(spec.judul)}</title><desc>${escape(spec['alt text'])}</desc><defs><marker id="${arrow}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="currentColor"/></marker></defs><rect class="svg-bg" width="${width}" height="${height}" rx="16"/>${paths}${shapes}${extra.join('').replaceAll('ARROW',arrow)}${notes.map(n=>`<text class="svg-muted" x="${n.x}" y="${n.y}" text-anchor="middle" font-size="${n.size}">${escape(n.text)}</text>`).join('')}</svg>`;
}
export function figurePR2(spec){
  if(!footers[spec.id])throw Error(`Missing overview relationship ${spec.id}`);
  return {kind:'figure',title:spec.judul,...(svgIdsPR2.includes(spec.id)?{svg:scene(spec)}:{}),overview:{heading:spec.judul,cards:overviewCards(spec),footer:footers[spec.id]},caption:`${spec['pesan utama']} ${spec.sumber}`,altText:spec['alt text']};
}
