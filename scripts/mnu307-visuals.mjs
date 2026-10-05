import { figurePR3, svgIdsPR3 } from './mnu307-pr3-visuals.mjs';
import { figurePR2, svgIdsPR2 } from './mnu307-pr2-visuals.mjs';
const escape = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const card = (title, ...items) => ({ title, subtitle: '', items, takeaway: '' });
export const svgIds = ['V-TM01-01','V-TM01-02','V-TM01-03','V-TM01-04','V-TM01-05','V-TM01-07','V-TM01-11','V-TM02-01','V-TM02-04','V-TM02-05','V-TM02-06','V-TM02-07','V-TM02-08','V-TM02-13','V-TM02-15','V-TM02-16','V-TM02-17','V-TM02-18','V-TM02-20', ...svgIdsPR2, ...svgIdsPR3];
const cards2 = {
  1: [card('External environment','General environment','Competitive environment','Opportunities / Threats'),card('Internal environment','Value chain','Resources and capabilities','Intellectual assets','Strengths / Weaknesses'),card('SWOT','Kesesuaian strategi: sintesis pengajaran'),card('Performance'),card('Dynamic capabilities')],
  2: [card('Environmental scanning'),card('Environmental monitoring'),card('Competitive intelligence'),card('Forecasts'),card('Scenario analysis','PPG: moderate/stable energy + fast/strong growth → pursue opportunities','PPG: high energy + weak/slow growth → change strategic direction','PPG: volatile energy + high growth → efficient processes','PPG: moderate/stable energy + weak/slow growth → new products/capture market share')],
  3: [card('Demographic','aging population/public benefits ↔ Economic'),card('Sociocultural'),card('Political/legal'),card('Technological','IT/productivity ↔ Economic','Digital economy: perubahan teknologi'),card('Economic'),card('Global'),card('Firm strategy and performance')],
  4: [card('Strengths','Internal · mendukung'),card('Weaknesses','Internal · menghambat'),card('Opportunities','External · mendukung'),card('Threats','External · menghambat')],
  5: [card('Potential entrants','Threat of new entrants'),card('Suppliers','Bargaining power of suppliers'),card('Industry competitors','Rivalry among existing firms'),card('Buyers','Bargaining power of buyers'),card('Substitutes','Threat of substitute products or services')],
  6: [card('Customers'),card('Substitutors'),card('The company'),card('Complementors'),card('Suppliers')],
  7: [card('Price','Low–High · sumbu Y'),card('Breadth of Product Line','Low–High · sumbu X'),card('Ferrari/Lamborghini/Porsche','Harga tinggi, lini sempit'),card('Mercedes/BMW/Audi','Harga tinggi, lini lebih luas'),card('Toyota/Ford/General Motors/Chrysler/Honda/Nissan','Kelompok besar, kanan tengah'),card('Hyundai/Kia','Kelompok terpisah, kiri-bawah kelompok besar'),card('Chery/Geely/Tata Motors','Kiri bawah')],
  8: [card('Support Activities','General administration','Human resource management','Technology development','Procurement'),...['Inbound logistics','Operations','Outbound logistics','Marketing and sales','Service'].map(s => card(s,'Primary Activities'))],
  9: [card('Suppliers'),card('Firm value-chain activities','Operations ↔ Marketing and sales ↔ Service'),card('Customers'),card('Alliance partners'),card('Information/technology/people')],
  10: [card('Recognize a customer need'),card('Request a desired option'),card('Respond','create a customized customer experience'),card('Repeat')],
  11: [card('Retail','Partnering with vendors → Purchasing goods → Managing and distributing inventory → Operating stores → Marketing and selling'),card('Engineering services','Research and development → Engineering → Designs and solutions → Marketing and sales → Service')],
  12: [card('Firm resources and capabilities'),card('Tangible resources','Financial','Physical','Technological','Organizational'),card('Intangible resources','Human','Innovation and creativity','Reputation'),card('Organizational capabilities','Kemampuan menggabungkan sumber daya')],
  13: [card('Valuable?'),card('Rare?'),card('Difficult to imitate?'),card('Without substitutes?'),card('Competitive disadvantage','No pada valuable'),card('Competitive parity','Yes / No'),card('Temporary competitive advantage','Yes / Yes / No / No'),card('Sustainable competitive advantage','Yes / Yes / Yes / Yes')],
  14: [card('Analytical models'),card('Improved products and services'),card('Greater demand and sales'),card('More data'),card('Path dependence dan social complexity','Menunjuk keseluruhan sistem; setiap penerapan AI perlu diuji')],
  15: [card('ROS (%) · Year','Ilustrasi arah, bukan transkripsi nilai presisi'),card('2012–2021','2012 tinggi; 2013 turun; 2014 turun lagi; 2015 naik; 2016 naik; 2017 puncak; 2018 turun; 2019 turun; 2020 hampir sama dengan 2019; 2021 naik'),card('Lima garis trend','Years 1,2,3: menurun','Years 4,5,6: meningkat','Years 6,7,8: menurun','Years 8,9,10: meningkat','Years 6,7,8,9,10: menurun','Years 1–10 = 2012–2021')],
  16: [card('Customer','How do customers see us?'),card('Internal business','What must we excel at?'),card('Innovation and learning','Can we continue to improve and create value?'),card('Financial','How do we look to shareholders?')],
  17: [card('Attracting human capital'),card('Developing human capital'),card('Retaining human capital')],
  18: [card('Mary','Terhubung ke Crystal, Frank, Jorge, Susan','Bridge antarkelompok'),card('Crystal','Lima anggota tanpa nama'),card('Frank','Enam anggota tanpa nama'),card('Jorge','Empat anggota tanpa nama'),card('Susan','Lima anggota tanpa nama'),card('Fred','Isolate: tanpa hubungan')],
  19: [card('Human capital'),card('Social capital'),card('Technology','Mendukung Virtual teams'),card('Virtual teams','Identification → Combination → Coordinated response'),card('Codified knowledge','Pengalaman yang dapat didokumentasikan → Codified knowledge → reuse','Tacit knowledge tidak seluruhnya dapat langsung didokumentasikan')],
  20: [card('Sensing'),card('Seizing'),card('Transforming/shifting'),card('Renewed capabilities')],
};
const footer = {
  'V-TM01-01': 'LO1-1 sampai LO1-6 adalah urutan baca. Ensuring Coherence in Strategic Direction terhubung ke strategy analysis: Analyzing Organizational Goals and Objectives [hal. 12].',
  'V-TM01-02': 'Setiap pasangan chapter dalam masing-masing kelompok saling terkait. Chapter 2 ↔ Chapter 6; Chapter 3 ↔ Chapter 11; Chapter 8 ↔ Chapter 12. Case Analysis berdiri sendiri.',
  'V-TM01-03': 'Analyses ↔ Decisions ↔ Actions; Analyses ↔ Actions. Ketiganya menuju create and sustain competitive advantages.',
  'V-TM01-04': 'Empat atribut terhubung ke Strategic Management; semuanya berlaku bersama tanpa urutan.',
  'V-TM01-05': 'Intended Strategy → Realized Strategy melalui Deliberate Strategy. Intended Strategy bercabang ke Unrealized Strategy; Emergent Strategy masuk ke Realized Strategy.',
  'V-TM01-06': 'Either/or choices: tiga tegangan yang berbeda. Ambidexterity similar to innovation paradox saja.',
  'V-TM01-07': 'Management, Shareholders, dan Board of Directors saling berhubungan tanpa urutan.',
  'V-TM01-08': 'Zero sum dan Symbiosis adalah dua pandangan sejajar. Contoh Symbiosis: P&G laundry detergent compaction.',
  'V-TM01-09': 'Ketiga theater sejajar; nomor theater tidak menunjukkan peringkat.',
  'V-TM01-10': 'Financial performance, Social performance, dan Environmental performance bersama-sama menilai Triple Bottom Line.',
  'V-TM01-11': 'Ke atas: General dan Long Time Horizon. Ke bawah: Specific dan Short Time Horizon.',
  'V-TM02-01': 'External environment → Opportunities/Threats; Internal environment → Strengths/Weaknesses. SWOT mempertemukan keduanya; Performance menilai hasil; Dynamic capabilities memperbarui kemampuan. Kesesuaian strategi adalah sintesis pengajaran.',
  'V-TM02-02': 'Scanning, monitoring, dan intelligence masing-masing memasok Forecasts. Scenario analysis memperluas kemungkinan, tanpa urutan wajib sesudah forecast atau probabilitas.',
  'V-TM02-03': 'Enam segmen memengaruhi Firm strategy and performance; demographic/economic serta technological/economic juga saling terkait.',
  'V-TM02-04': 'Strengths membantu memanfaatkan Opportunities; Weaknesses diperbaiki; Threats dihadapi. Kolom mendukung/menghambat adalah penataan pengajaran.',
  'V-TM02-05': 'Empat tekanan menuju Industry competitors; Rivalry among existing firms ada di pusat. Panah menunjukkan tekanan laba industri.',
  'V-TM02-06': 'Customers ↔ The company ↔ Suppliers: transactions between players. Substitutors ↔ The company ↔ Complementors: interactions between players.',
  'V-TM02-07': 'Lima kelompok pada harga dan lebar lini relatif. Hyundai/Kia adalah kelompok tersendiri.',
  'V-TM02-08': 'Lima Primary Activities berurutan menciptakan nilai. Empat Support Activities menopang seluruh rangkaian.',
  'V-TM02-09': 'Suppliers ↔ Firm value-chain activities ↔ Customers; Alliance partners ↔ Firm. Information/technology/people menghubungkan kegiatan di dalam dan lintas perusahaan.',
  'V-TM02-10': 'Recognize → Request → Respond → Repeat → Recognize: kebutuhan dan pengalaman pelanggan terus diperbarui.',
  'V-TM02-11': 'Dua rangkaian paralel: retail dan engineering services. Keduanya mempunyai lima kegiatan sesuai industrinya.',
  'V-TM02-12': 'Firm resources and capabilities mencakup tangible resources, intangible resources, dan organizational capabilities; capabilities menggabungkan resources.',
  'V-TM02-13': 'Empat profil Exhibit 3.7 diperiksa lengkap. Kombinasi lain belum mendapat hasil otomatis dari tabel tersebut.',
  'V-TM02-14': 'Analytical models → Improved products and services → Greater demand and sales → More data → Analytical models.',
  'V-TM02-15': 'Ilustrasi arah, bukan transkripsi nilai presisi. Lima rentang trend dapat menghasilkan kesimpulan berbeda.',
  'V-TM02-16': 'Empat perspektif saling terkait untuk menilai kinerja; hubungan ini berasal dari uraian buku, tanpa panah sebab wajib.',
  'V-TM02-17': 'Attracting ↔ Developing ↔ Retaining; Attracting ↔ Retaining. Ketiga kegiatan saling bergantung.',
  'V-TM02-18': 'Hubungan tanpa arah. Mary menjembatani empat cluster; Fred terpisah. Closure terjadi dalam cluster; bridges menghubungkan kelompok.',
  'V-TM02-19': 'Technology mendukung Human capital dan Social capital. Virtual teams perlu identification, combination, dan coordinated response; codification memungkinkan reuse.',
  'V-TM02-20': 'Sensing → Seizing → Transforming/shifting → Renewed capabilities → Sensing. Siklus ini merupakan sintesis pengajaran tentang pembaruan berkelanjutan.',
};

function cards1(spec) {
  const lines = spec.isi.split('\n').slice(1);
  if (spec.id === 'V-TM01-02') return lines.map(line => card(line.split(':')[0], ...[...line.matchAll(/"([^"]+)"/g)].map(m => m[1])));
  return lines.map(line => {
    const labels = [...line.matchAll(/"([^"]+)"/g)].map(m => m[1]);
    const result = spec.id === 'V-TM01-03' && /^(Analyses|Decisions|Actions):/.test(line) ? card(line.split(':')[0], ...labels) : card(labels[0], ...labels.slice(1));
    const lo = line.match(/LO1-\d/); if (lo) result.subtitle = lo[0];
    if (spec.id === 'V-TM01-01' && lo?.[0] === 'LO1-2') result.subtitle += ' · ' + result.items.shift();
    return result;
  });
}
function wrap(s, width) {
  const lines = [''];
  for (const word of s.replaceAll('/', '/ ').split(/\s+/)) {
    if ((lines.at(-1) + ' ' + word).trim().length > width && lines.at(-1)) lines.push(word);
    else lines[lines.length - 1] = (lines.at(-1) + ' ' + word).trim();
  }
  return lines;
}
function special(spec) {
  const start = `<svg class="course-diagram-svg mnu307-diagram" viewBox="0 0 1200 960" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif"><title>${escape(spec.judul)}</title><desc>${escape(spec['alt text'])}</desc><rect class="svg-bg" width="1200" height="960" rx="16"/>`;
  if(spec.id==='V-TM02-18') {
    const positions={Mary:[580,440],Crystal:[250,210],Frank:[900,210],Jorge:[280,700],Susan:[900,700],Fred:[1130,500],C1:[160,105],C2:[115,195],C3:[200,305],C4:[330,290],C5:[365,135],F1:[790,100],F2:[900,50],F3:[1025,105],F4:[1020,295],F5:[900,360],F6:[790,295],J1:[150,630],J2:[270,565],J3:[400,620],J4:[405,785],S1:[795,590],S2:[1010,590],S3:[1030,770],S4:[900,860],S5:[780,795]};
    const edges=[...['Crystal','Frank','Jorge','Susan'].map(name=>['Mary',name]),...Object.entries({Crystal:5,Frank:6,Jorge:4,Susan:5}).flatMap(([name,count])=>Array.from({length:count},(_,i)=>[name,`${name[0]}${i+1}`])),...['C1 C2','C1 C3','C2 C3','C3 C4','C4 C5','F1 F6','F6 F5','F2 F3','J1 J2','S1 S2','S4 S5'].map(s=>s.split(' '))];
    const names=['Mary','Crystal','Frank','Jorge','Susan','Fred'];
    return start+edges.map(([a,b])=>`<path data-network-edge="${a}-${b}" d="M${positions[a].join(' ')} L${positions[b].join(' ')}" stroke="currentColor" stroke-width="2" fill="none"/>`).join('')+Object.entries(positions).map(([name,[x,y]])=>`<circle class="svg-card" data-network-node="${name}" cx="${x}" cy="${y}" r="${names.includes(name)?35:13}"/>${names.includes(name)?`<text class="svg-muted" x="${x}" y="${y-47}" font-size="22" text-anchor="middle">${name}</text>`:''}`).join('')+`<text class="svg-muted" x="600" y="920" font-size="20" text-anchor="middle">Mary: bridge · Fred: isolate · anggota tanpa nama pada empat cluster</text></svg>`;
  }
  if(spec.id==='V-TM02-15') {
    const heights=[410,320,235,330,395,510,365,240,235,315];
    const bars=heights.map((h,i)=>`<rect class="svg-card" x="${125+i*100}" y="${720-h}" width="60" height="${h}"/><text class="svg-muted" x="${155+i*100}" y="750" font-size="17" text-anchor="middle">${2012+i}</text>`).join('');
    const trends=[[0,2,'Years 1,2,3: menurun',65],[3,5,'Years 4,5,6: meningkat',105],[5,7,'Years 6,7,8: menurun',145],[7,9,'Years 8,9,10: meningkat',185],[5,9,'Years 6,7,8,9,10: menurun',225]];
    return start+`<path d="M90 270 V720 H1140" stroke="currentColor" stroke-width="2" fill="none"/><text class="svg-muted" x="70" y="260" font-size="20">ROS (%)</text><text class="svg-muted" x="600" y="800" font-size="20" text-anchor="middle">Year</text>`+bars+trends.map(([a,b,label,y],i)=>`<path data-ros-trend="${i+1}" d="M${155+a*100} ${720-heights[a]} L${155+b*100} ${720-heights[b]}" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="${6+i*3} 6"/><text class="svg-muted" x="600" y="${y}" font-size="20" text-anchor="middle">${label}</text>`).join('')+`<text class="svg-muted" x="600" y="860" font-size="20" text-anchor="middle">Ilustrasi arah, bukan transkripsi nilai presisi.</text><text class="svg-muted" x="600" y="900" font-size="18" text-anchor="middle">Years 1–10 = 2012–2021 · tanpa nilai numerik tiap batang</text></svg>`;
  }
}
function scene(spec, cards) {
  if(['V-TM02-15','V-TM02-18'].includes(spec.id))return special(spec);
  const nodes = [], edges = [], notes = [];
  let width = 1200, height = 900;
  function node(c, x, y, w = 300, h) {
    const lines = wrap([c.subtitle, c.title, ...c.items].filter(Boolean).join(' · '), Math.floor((w - 38) / 9));
    const n = { c, x, y, w, h: h ?? Math.max(85, lines.length * 24 + 34), lines }; nodes.push(n); return nodes.length - 1;
  }
  const edge = (a, b, type = 'forward', label = '', route) => edges.push({ a, b, type, label, route });
  const note = (text, x, y, size = 17) => notes.push({ text, x, y, size });
  const id = spec.id;
  if (id === 'V-TM01-01') {
    width = 1400; height = 940;
    cards.forEach((c,i) => node(c, 110 + (i % 2) * 650, 80 + Math.floor(i / 2) * 280, 530, 210));
    edge(5,1,'dashed','', 'M1290 745 H1360 V185 H1290');
    note('Strategic Management: Creating Competitive Advantages',700,40,23);
    note('Analyzing Organizational Goals and Objectives',700,920,18);
  } else if (id === 'V-TM01-02') {
    width = 1440; height = 1190;
    for(let group = 0; group < 3; group++) {
      note(cards[group].title, 240 + group * 480, 40, 22);
      cards[group].items.forEach((s,i) => node(card(s), 65 + group * 480, 85 + i * 245, 345, 135));
      for(let a = 0; a < 4; a++) for(let b = a + 1; b < 4; b++) {
        const x = 425 + group * 480 + (b - a) * 12;
        edge(group*4+a,group*4+b,'both','',`M${410+group*480} ${152+a*245} H${x} V${152+b*245} H${410+group*480}`);
      }
    }
    edge(1,5,'both'); edge(2,10,'both','', 'M237 710 V735 H1197 V710'); edge(7,11,'both');
    node(cards[3], 440, 1080, 560, 85);
  } else if (id === 'V-TM01-03') {
    height = 660;
    node(cards[3],450,50); node(cards[0],70,260,320,260);node(cards[1],460,260,320,260);node(cards[2],850,260,300,260);
    edge(1,2,'both');edge(2,3,'both');edge(1,3,'both','','M230 520 V610 H1000 V520');
    for(const a of [1,2,3]) edge(a,0);
  } else if (id === 'V-TM01-04') {
    height = 720;node(cards[0],450,300);node(cards[1],450,70);node(cards[2],30,300);node(cards[3],860,300);node(cards[4],450,540);
    [1,2,3,4].forEach(i=>edge(0,i,'none'));
  } else if (id === 'V-TM01-05') {
    height=660;node(cards[4],450,70);node(cards[0],450,480);node(cards[2],60,480);node(cards[3],850,270);
    edge(1,0,'forward','Deliberate Strategy');edge(1,2);edge(3,0,'forward','','M850 312 Q760 112 750 112');
  } else if (id === 'V-TM01-07' || id === 'V-TM02-17') {
    height=640;
    if(id==='V-TM01-07'){node(cards[0],440,70,320);node(cards[1],60,390,360);node(cards[2],780,390,360);}
    else {node(cards[0],70,70,400);node(cards[1],730,70,400);node(cards[2],400,400,400);}
    edge(0,1,id==='V-TM01-07'?'none':'both');edge(1,2,id==='V-TM01-07'?'none':'both');edge(2,0,id==='V-TM01-07'?'none':'both');
  } else if (id === 'V-TM01-11') {
    height=700;
    node(cards[0],410,70,380,140);node(cards[1],300,210,600,140);node(cards[2],190,350,820,140);
    nodes[0].polygon='600,70 790,210 410,210';nodes[1].polygon='410,210 790,210 900,350 300,350';nodes[2].polygon='300,350 900,350 1010,490 190,490';
    note('General',110,100);note('Specific',110,570);note('Long Time Horizon',1010,100);note('Short Time Horizon',1010,570);
    notes.push({path:'M110 145 V515',both:true},{path:'M1090 145 V515',both:true});
  } else if (id === 'V-TM02-01') {
    height=1130;
    node(cards[0],70,70,440,220);node(cards[1],690,70,440,220);node(cards[2],400,430,400,100);node(cards[3],400,700,400,90);node(cards[4],400,920,400,90);
    edge(0,2,'forward','Opportunities / Threats');edge(1,2,'forward','Strengths / Weaknesses');edge(2,3,'forward','Kesesuaian strategi');edge(3,4);edge(4,1,'dashed','Pembaruan','M800 965 H1160 V180 H1130');
  } else if (id === 'V-TM02-04') {
    height=580;note('Mendukung',400,55);note('Menghambat',860,55);note('Internal',80,190);note('External',80,420);
    cards.forEach((c,i)=>node(c,220+(i%2)*470,110+Math.floor(i/2)*230,380,170));
  } else if (['V-TM02-05','V-TM02-06','V-TM02-16'].includes(id)) {
    height=900;
    if(id==='V-TM02-16') {
      node(card('Penilaian kinerja'),440,370,320,100);node(cards[0],440,70,320,155);node(cards[1],20,340,330,200);node(cards[2],850,340,330,200);node(cards[3],440,660,320,155);
      [1,2,3,4].forEach(i=>edge(0,i,'none'));
    } else {
      node(cards[0],440,50,320,155);node(cards[1],20,350,310,180);node(cards[2],440,380,320,125);node(cards[3],870,350,310,180);node(cards[4],440,690,320,155);
      [0,1,3,4].forEach(i=>edge(i,2,id==='V-TM02-06'?'both':'forward'));
      if(id==='V-TM02-06'){note('transactions between players',600,280);note('interactions between players',600,585);}
    }
  } else if (id === 'V-TM02-07') {
    width=1400;height=850;
    // Relative placement only: no invented numerical prices or breadth coordinates.
    const positions=[[270,120,300,140],[650,190,300,140],[950,410,560,240],[530,580,250,110],[245,675,330,130]];
    cards.slice(2).forEach((c,i)=>{const [cx,cy,w,h]=positions[i];const n=node(card(c.title),cx-w/2,cy-h/2,w,h);nodes[n].ellipse=true;});
    notes.push({path:'M70 55 V760 H1280'});note('Price',70,30);note('High',35,75);note('Low',35,740);note('Breadth of Product Line',720,815);note('Low',130,795);note('High',1250,795);
  } else if (id === 'V-TM02-08') {
    width=1500;height=650;
    node(cards[0],70,60,1360,220);note('Primary Activities',750,340,23);
    cards.slice(1).forEach((c,i)=>node(card(c.title),45+i*300,390,260,160));
    for(let i=1;i<5;i++)edge(i,i+1);note('Support Activities menopang seluruh Primary Activities',750,605);
  } else if (id === 'V-TM02-13') {
    height=1150;
    cards.slice(0,4).forEach((c,i)=>node(card(c.title),100,70+i*250,400,100));
    cards.slice(4).forEach((c,i)=>node(c,720,70+i*250,400,125));
    edge(0,1,'forward','Yes');edge(1,2,'forward','Yes');edge(2,3,'forward','Yes');edge(0,4,'forward','No');edge(1,5,'forward','No');edge(2,6,'forward','No + No substitutes');edge(3,7,'forward','Yes');
    note('Yes / Yes / No / No: profil lengkap Exhibit 3.7',600,1060);note('Kombinasi lain belum mendapat hasil otomatis.',600,1090);
  } else if (id === 'V-TM02-20') {
    height=650;cards.forEach((c,i)=>node(c,100+(i%2)*700,70+Math.floor(i/2)*360,300,130));
    edge(0,1);edge(1,3);edge(3,2);edge(2,0);
    // Visual order follows the actual cycle, even though cards read vertically on phones.
    [nodes[2].c,nodes[3].c]=[nodes[3].c,nodes[2].c];[nodes[2].lines,nodes[3].lines]=[nodes[3].lines,nodes[2].lines];
  } else throw Error(`Missing SVG scene ${id}`);
  height=Math.max(height,...nodes.map(n=>n.y+n.h+40));
  const arrow=`${id}-arrow`;
  function edgePath(e) {
    if(e.route)return e.route;
    const a=nodes[e.a],b=nodes[e.b],ax=a.x+a.w/2,ay=a.y+a.h/2,bx=b.x+b.w/2,by=b.y+b.h/2;
    if(Math.abs(bx-ax)>Math.abs(by-ay)*1.4)return `M${bx>ax?a.x+a.w:a.x} ${ay} L${bx>ax?b.x:b.x+b.w} ${by}`;
    return `M${ax} ${by>ay?a.y+a.h:a.y} L${bx} ${by>ay?b.y:b.y+b.h}`;
  }
  const paths=edges.map(e=>{
    const a=nodes[e.a],b=nodes[e.b],x=(a.x+a.w/2+b.x+b.w/2)/2,y=(a.y+a.h/2+b.y+b.h/2)/2;
    return `<path d="${edgePath(e)}" fill="none" stroke="currentColor" stroke-width="2" ${e.type==='dashed'?'stroke-dasharray="7 6"':''} ${e.type!=='none'?`marker-end="url(#${arrow})"`:''} ${e.type==='both'?`marker-start="url(#${arrow})"`:''}/>${e.label?`<text class="svg-muted" x="${x}" y="${y-14}" text-anchor="middle" font-size="15">${escape(e.label)}</text>`:''}`;
  }).join('');
  const shapes=nodes.map(n=>`${n.polygon?`<polygon class="svg-card" points="${n.polygon}"/>`:n.ellipse?`<ellipse class="svg-card" cx="${n.x+n.w/2}" cy="${n.y+n.h/2}" rx="${n.w/2}" ry="${n.h/2}"/>`:`<rect class="svg-card" x="${n.x}" y="${n.y}" width="${n.w}" height="${n.h}" rx="12"/>`}<text class="svg-text" x="${n.x+n.w/2}" y="${n.y+(n.h-n.lines.length*24)/2+19}" text-anchor="middle" font-size="17">${n.lines.map((s,i)=>`<tspan x="${n.x+n.w/2}" dy="${i?24:0}">${escape(s)}</tspan>`).join('')}</text>`).join('');
  return `<svg class="course-diagram-svg mnu307-diagram" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif"><title>${escape(spec.judul)}</title><desc>${escape(spec['alt text'])}</desc><defs><marker id="${arrow}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="currentColor"/></marker></defs><rect class="svg-bg" width="${width}" height="${height}" rx="16"/>${paths}${shapes}${notes.map(n=>n.path?`<path d="${n.path}" stroke="currentColor" stroke-width="2" fill="none" ${n.both?`marker-start="url(#${arrow})" marker-end="url(#${arrow})"`:''}/>`:`<text class="svg-muted" x="${n.x}" y="${n.y}" text-anchor="middle" font-size="${n.size}">${escape(n.text)}</text>`).join('')}</svg>`;
}

export function figure(spec) {
  const tm=Number(spec.id.slice(4,6)),index=Number(spec.id.slice(-2));
  if (tm >= 5) return figurePR3(spec);
  if (tm >= 3) return figurePR2(spec);
  const cards=tm===1?cards1(spec):cards2[index];
  if(!cards?.length||!footer[spec.id])throw Error(`Incomplete figure ${spec.id}`);
  return {kind:'figure',title:spec.judul,...(svgIds.includes(spec.id)?{svg:scene(spec,cards)}:{}),overview:{heading:tm===1&&index===1?'Strategic Management: Creating Competitive Advantages':spec.judul,cards,footer:footer[spec.id]},caption:`${spec['pesan utama']} ${spec.sumber}${spec.id==='V-TM02-15'?' · Ilustrasi arah, bukan transkripsi nilai presisi.':''}`,altText:spec['alt text']};
}
