import fs from 'node:fs';
const escape = s => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
export const svgIdsPR4 = ['A', 'B'].flatMap(p => Array.from({ length: 15 }, (_, i) => 'V-TM07' + p + '-' + String(i + 1).padStart(2, '0')));
const processes = ['Operations Management Processes\nSupply · Production · Distribution · Risk Management', 'Customer Management Processes\nSelection · Acquisition · Retention · Growth', 'Innovation Processes\nOpportunity ID · R&D Portfolio · Design/Develop · Launch', 'Regulatory and Social Processes\nEnvironment · Safety and Health · Employment · Community'];
const assets = ['Human Capital\nSkills · Knowledge · Values', 'Information Capital\nSystems · Databases · Networks', 'Organization Capital\nCulture · Leadership · Alignment · Teamwork'];
const customer = 'Customer Value Proposition\nProduct/Service Attributes: Price · Quality · Availability · Selection · Functionality\nRelationship: Service · Partnership\nImage: Brand';
function scene(spec) {
  const nodes = [], edges = [], extras = [], notes = [];
  let width = 1800, height = 1000;
  const node = (label, x, y, w = 720, minH = 130, key = label.split('\n')[0]) => {
    const lines = [];
    for (const paragraph of label.split('\n')) {
      let line = '';
      for (const word of paragraph.split(/\s+/)) {
        if (line && line.length + word.length + 1 > (w - 60) / 15) { lines.push(line); line = word; }
        else line += (line ? ' ' : '') + word;
      }
      if (line) lines.push(line);
    }
    const h = Math.max(minH, lines.length * 38 + 50);
    nodes.push({ key, label, x, y, w, h, lines });
    return nodes.length - 1;
  };
  const edge = (a, b, label = '', both = false, route = null, dashed = false, labelSegment = null) => edges.push({ a, b, label, both, route, dashed, labelSegment });
  const note = (text, x, y, size = 28) => notes.push({ text, x, y, size });
  const column = (labels, x = 540, y = 80, w = 720, gap = 95) => { let last; const ids = []; for (const label of labels) { const n = node(label, x, y, w); ids.push(n); if (last !== undefined) edge(last, n); y += nodes[n].h + gap; last = n; } height = Math.max(height, y + 40); return ids; };
  const n = Number(spec.id.slice(-2)), part = spec.id.includes('07A') ? 'A' : 'B';
  if (part === 'A' && n === 1) {
    node('Value Innovation', 540, 80);
    const groups = [node('Formulation\nAnalytical Tools and Frameworks\nReconstruct Market Boundaries\nFocus on the Big Picture, Not the Numbers\nReach Beyond Existing Demand\nGet the Strategic Sequence Right', 80, 400, 750), node('Execution\nOvercome Key Organizational Hurdles\nBuild Execution into Strategy', 970, 400, 750), node('The Sustainability and Renewal of Blue Ocean Strategy', 540, 1090)];
    edge(0, groups[0], 'cakupan', false, null, true); edge(0, groups[1], 'cakupan', false, null, true); edge(groups[2], 0, 'perhatian kembali saat convergence', false, [[1260,1155],[1750,1155],[1750,145],[1260,145]],false,0); height = 1350;
  } else if (part === 'A' && n === 2) {
    height = 1160;
    extras.push('<ellipse data-field="Costs" class="svg-card" cx="900" cy="440" rx="600" ry="300"/><ellipse data-field="Buyer Value" class="svg-card" cx="900" cy="740" rx="600" ry="300"/>');
    note('Costs ↓', 900, 310, 42); note('Eliminate / Reduce', 900, 365); note('Value Innovation', 900, 600, 42); note('Buyer Value ↑', 900, 860, 42); note('Raise / Create', 900, 915); note('The Simultaneous Pursuit of Differentiation and Low Cost', 900, 1110);
  } else if (part === 'A' && n === 3) {
    width = 2100; height = 1250;
    const register = JSON.parse(fs.readFileSync('scripts/fixtures/mnu307/tm07a-canvas.json', 'utf8'));
    const x = v => 190 + (v - 80.797) / (369.458 - 80.797) * 1800, y = v => 200 + (v - 121.626) / (277.342 - 121.626) * 570;
    extras.push('<path d="M190 180 V800 H2010" fill="none" stroke="currentColor" stroke-width="3"/>');
    note('High', 90, 210); note('Low', 90, 785); note('Offering level · kualitatif', 430, 165);
    const factors = ['Price', 'Use of enological terminology and distinctions in wine communication', 'Above-the-line marketing', 'Aging quality', 'Vineyard prestige and legacy', 'Wine complexity', 'Wine range', 'Easy drinking', 'Ease of selection', 'Fun and adventure'];
    register.series.forEach((s, i) => { const points = s.points.map(([a,b]) => [x(a),y(b)]); extras.push('<polyline data-series="' + escape(s.series) + '" data-source-points="' + escape(JSON.stringify(s.points)) + '" points="' + points.map(p=>p.join(',')).join(' ') + '" fill="none" stroke="currentColor" stroke-width="5" ' + (i === 0 ? 'stroke-dasharray="8 8"' : i === 1 ? 'stroke-dasharray="24 6 5 6"' : '') + '/>'); points.forEach(([a,b]) => extras.push('<circle data-point="'+escape(s.series)+'" cx="'+a+'" cy="'+b+'" r="7" fill="currentColor"/>')); extras.push('<path data-series-key="'+escape(s.series)+'" d="M'+(310+i*590)+' 110 H'+(550+i*590)+'" stroke="currentColor" stroke-width="5" '+(i===0?'stroke-dasharray="8 8"':i===1?'stroke-dasharray="24 6 5 6"':'')+'/>');note(s.series, 430 + i * 590, 70, 30); });
    factors.forEach((f,i) => { const a = 190 + i*200,lines=[];let line='';for(const word of f.split(' ')){if(line&&line.length+word.length+1>14){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);extras.push('<text class="svg-muted" data-factor="'+escape(f)+'" x="'+a+'" y="850" text-anchor="middle" font-size="24">'+lines.map((line,j)=>'<tspan x="'+a+'" dy="'+(j?30:0)+'">'+escape(line)+'</tspan>').join('')+'</text>'); });
  } else if (part === 'A' && n === 4) {
    height = 1830;
    node('A New Value Curve', 590, 460, 620); node('Eliminate', 80, 460, 400); node('Reduce', 590, 80, 620); node('Raise', 590, 810, 620); node('Create', 1320, 460, 400);
    for (const i of [1,2,3,4]) edge(i,0);
    const gridTitle=node('ERRC Grid',540,1030);
    const grid = [node('Eliminate\nStar performers\nAnimal shows\nAisle concession sales\nMultiple show arenas',80,1250,760,130,'ERRC Eliminate'), node('Raise\nUnique venue',960,1250,760,130,'ERRC Raise'), node('Reduce\nFun and humor\nThrill and danger',80,1600,760,130,'ERRC Reduce'), node('Create\nTheme\nRefined environment\nMultiple productions\nArtistic music and dance',960,1600,760,130,'ERRC Create')];
    edge(0,gridTitle,'keputusan faktor',false,[[1210,490],[1270,490],[1270,1095],[1260,1095]]); height = 1950;
  } else if (part === 'A' && n === 5) {
    ['Focus\nFaktor mana yang diprioritaskan?', 'Divergence\nApakah kurva berbeda dari pesaing?', 'Compelling Tagline\nApakah janji menarik dan jujur?'].forEach((s,i)=>node(s,80+i*580,100,480,250)); height=450;
  } else if (part === 'A' && n === 6) {
    const pairs=[['Industry','Alternative industries'],['Strategic group','Across strategic groups'],['Buyer group','Redefine buyer group'],['Scope of product or service offering','Complementary offerings'],['Functional-emotional orientation','Rethink orientation'],['Time','Shape external trends\nDecisive · Irreversible · Clear trajectory']];
    pairs.forEach(([a,b],i)=>{const x=node(a,80,80+i*270,700);const y=node(b,1020,80+i*270,700);edge(x,y);});height=1720;
  } else if (part === 'A' && n === 7) {
    height=760;
    const tiers=[['Your Market',80,180,360,400],['First Tier\nSoon-to-be noncustomers',440,180,420,400],['Second Tier\nRefusing noncustomers',860,180,420,400],['Third Tier\nUnexplored noncustomers',1280,180,440,400]];
    tiers.forEach(([s,x,y,w,h])=>node(s,x,y,w,h));note('Area berdampingan · tingkat kedekatan dengan pasar',900,100);note('Cari commonalities; bukan alur konversi wajib',900,690);
  } else if (part === 'A' && n === 8) {
    const stages=['Buyer Utility\nIs there exceptional buyer utility in your business idea?', 'Price\nIs your price easily accessible to the mass of buyers?', 'Cost\nCan you attain your cost target to profit at your strategic price?', 'Adoption\nWhat are the adoption hurdles in actualizing your business idea? Are you addressing them up front?'];
    let y=80;let prev;
    stages.forEach((s,i)=>{const a=node(s,80,y,1000);const b=node('Rethink',1350,y+10,370,130,'Rethink '+(i+1));edge(a,b,'No');edge(b,a,'uji kembali',false,[[1535,y+10],[1535,y-35],[480,y-35],[480,y]]);if(prev!==undefined)edge(prev,a,'Yes');prev=a;y+=nodes[a].h+150;});const result=node('A Commercially Viable Blue Ocean Idea',80,y,1000);edge(prev,result,'Yes');height=y+230;
  } else if (part === 'A' && n === 9) {
    width=2200;height=1260;const stages=['Purchase','Delivery','Use','Supplements','Maintenance','Disposal'],levers=['Customer productivity','Simplicity','Convenience','Risk','Fun and image','Environmental friendliness'];
    stages.forEach((s,i)=>{const a=node(s,450+i*280,60,250,150);if(i)edge(a-1,a);});
    levers.forEach((s,r)=>{node(s,40,300+r*150,360,125);stages.forEach((_,c)=>extras.push('<rect class="svg-card" data-utility-cell="'+r+','+c+'" x="'+(450+c*280)+'" y="'+(300+r*150)+'" width="250" height="125"/>'));});
    note('Ford',1135,680);note('Ford',1695,830);note('36 ruang pemeriksaan · sel tanpa skor',1100,1230);
  } else if (part === 'A' && n === 10) {
    ['Same form','Different form, same function','Different form and function, same objective'].forEach((s,i)=>node(s,80+i*580,80,480,240));
    const a=node('Step 1: Identify the price corridor of the mass',540,500);for(let i=0;i<3;i++)edge(i,a);
    const b=node('Step 2: Specify a price level within the price corridor',540,840);edge(a,b);
    ['Upper-level pricing\nHigh degree of legal and resource protection\nDifficult to imitate','Mid-level pricing\nSome degree of legal and resource protection','Lower-level pricing\nLow degree of legal and resource protection\nEasy to imitate'].forEach((s,i)=>edge(b,node(s,80+i*580,1200,480,340)));height=1620;
  } else if (part === 'A' && n === 11) {
    const [price,profit,cost]=column(['The Strategic Price','The Target Profit','The Target Cost']);edges[0].label='dikurangi';edges[1].label='menghasilkan';
    const a=node('Streamlining and Cost Innovations',80,950,710),b=node('Partnering',1010,950,710);edge(cost,a);edge(cost,b);edge(a,b,'levers bersama',true);const p=node('Pricing Innovation',540,1280);edge(a,p);edge(b,p);note('Strategic price − target profit = target cost · basis sama',900,1560);height=1640;
  } else if (part === 'A' && n === 12) {
    const steps=['Visual Awakening','Visual Exploration','Visual Strategy Fair','Visual Communication'];column(steps,80,80,720);
    note('PMS Map',1310,90);['Today','Tomorrow'].forEach((s,i)=>note(s,1370+i*230,170));['Pioneers','Migrators','Settlers'].forEach((s,i)=>{node(s,910,240+i*270,300,170);for(let c=0;c<2;c++)extras.push('<rect class="svg-card" data-pms-cell="'+i+','+c+'" x="'+(1280+c*230)+'" y="'+(240+i*270)+'" width="180" height="170"/>');});note('Arah strategis: lebih banyak pioneers / migrators',1315,1140,24);height=1200;
  } else if (part === 'A' && n === 13) {
    const labels=['Cognitive Hurdle\nStatus quo\nRide the electric sewer · Meet disgruntled customers','Resource Hurdle\nLimited resources\nHot spots · Cold spots · Horse trading','Political Hurdle\nPowerful vested interests\nAngels · Devils · Consigliere','Motivational Hurdle\nUnmotivated staff\nKingpins · Fishbowl management · Atomization'];
    const ids=labels.map((s,i)=>node(s,i%2?1010:80,i<2?80:650,710,340));edge(ids[0],ids[1]);edge(ids[1],ids[3]);edge(ids[3],ids[2]);edge(ids[2],ids[0]);node('Conventional Wisdom\nMass of Employees',80,1250,710,200);node('Tipping Point Leadership\nExtremes',1010,1250,710,200);height=1530;
  } else if (part === 'A' && n === 14) {
    const present=['Fair Process\nEngagement · Explanation · Expectation clarity','Intellectual and Emotional Recognition','Trust and Commitment','Voluntary Cooperation in Strategy Execution','Exceeds Expectations / Self-initiated'];
    const absent=['Violation of Fair Process','Intellectual and Emotional Indignation','Distrust and Resentment','Refusal to Execute Strategy'];column(present,80,140,710);column(absent,1010,140,710);note('Hadir',430,75);note('Absen',1365,75);height=Math.max(height,1540);
  } else if (part === 'A' && n === 15) {
    const source=fs.readFileSync('scripts/fixtures/mnu307/tm07a.md','utf8'),barriers=source.slice(source.indexOf('| Imitation barrier Figure 9-1 |')).split(/\r?\n/).slice(2,10).map(line=>line.split('|')[1].trim());
    node('Imitation barriers\n'+barriers.join('\n'),80,80,1640,450);node('Monitor value curves on strategy canvas',540,650);edge(0,1);node('Focus, divergence, compelling tagline masih bertahan?',540,950);edge(1,2);node('Operational improvements and geographical expansion',80,1320,710);node('Value-innovate again',1010,1320,710);edge(2,3,'Bertahan');edge(2,4,'Convergence');node('New blue ocean',1010,1640,710);edge(4,5);edge(3,1,'pantau lagi',false,[[80,1385],[35,1385],[35,715],[540,715]],false,2);edge(5,1,'pantau lagi',false,[[1720,1705],[1765,1705],[1765,715],[1260,715]],false,2);height=1870;
  } else if (part === 'B' && n === 1) {
    const labels=['Five principles','Four perspectives','Customer value proposition','Internal processes\nOperations management · Customer management · Innovation · Regulatory and social','Intangible assets\nHuman capital · Information capital · Organization capital','Strategic readiness'];
    labels.forEach((s,i)=>node(s,80+(i%2)*840,80+Math.floor(i/2)*360,760,250));node('Measures, targets, initiatives',540,1250);
    column(['Financial outcomes','Customer value proposition','Internal processes','Intangible assets'],540,1590,720);
    for(const a of nodes.slice(-4)) a.key = 'Inset · ' + a.key; edges.forEach(e=>{const a=e.a;e.a=e.b;e.b=a;});height+=40;note('Inset kontribusi · dari bawah ke atas',900,1520);note('Readiness menilai kesiapan intangible assets',900,1165);
  } else if (part === 'B' && n === 2) {
    node('Strategy map',540,80);
    const principles=['Strategy balances contradictory forces','Strategy is based on a differentiated customer value proposition','Value is created through internal business processes','Strategy consists of simultaneous, complementary themes','Strategic alignment determines the value of intangible assets'];
    principles.forEach((s,i)=>edge(node(s,80,400+i*280,1250),0,'',false,[[1330,465+i*280],[1600+i*30,465+i*280],[1600+i*30,145],[1260,145]],true));height=1900;
  } else if (part === 'B' && [3,7].includes(n)) {
    node('Long-Term Shareholder Value',540,80);
    const productivity=node('Productivity Strategy\nImprove Cost Structure · Increase Asset Utilization',80,390,710,250),growth=node('Growth Strategy\nExpand Revenue Opportunities · Enhance Customer Value',1010,390,710,250);edge(productivity,0);edge(growth,0);
    const cvp=node(customer,80,910,1640,300);edge(cvp,productivity);edge(cvp,growth);
    const ids=processes.map((s,i)=>node(s,80+i*420,1470,380,360));ids.forEach(a=>edge(a,cvp));
    if(n===7){edge(ids[0],productivity,'',false,[[80,1650],[30,1650],[30,515],[80,515]]);edge(ids[3],0,'',false,[[1720,1650],[1770,1650],[1770,145],[1260,145]]);height=1950;}
    else {const a=node('Learning and Growth Perspective\n'+assets.join('\n'),80,2100,1640,250);ids.forEach(b=>edge(a,b));height=2500;}
    note('Financial Perspective',900,345);note('Customer Perspective',300,850);note('Internal Perspective',900,1400);
  } else if (part === 'B' && n === 4) {
    const priv=column(['The Strategy','Financial Perspective\nShareholders','Customer Perspective\nCustomers','Internal Perspective','Learning and Growth Perspective'],80,130,710);for(const e of edges){const a=e.a;e.a=e.b;e.b=a;}
    for(const a of nodes) a.key = 'Private · ' + a.key; const mission=node('The Mission',1010,130,710);const fid=node('Fiduciary Perspective\nTaxpayers or donors',1010,450,330,230),cust=node('Customer Perspective\nCustomers',1390,450,330,230),internal=node('Internal Perspective',1010,890,710),learn=node('Learning and Growth Perspective',1010,1220,710);edge(learn,internal);edge(internal,fid);edge(internal,cust);edge(fid,mission);edge(cust,mission);for(const a of nodes.slice(priv.length)) a.key = 'Public · ' + a.key;note('Private-Sector Organizations',435,65);note('Public-Sector and Nonprofit Organizations',1365,65,24);height=Math.max(height,1550);
  } else if (part === 'B' && n === 5) {
    const ids=column(['Mission\nWhy We Exist','Values\nWhat’s Important to Us','Vision\nWhat We Want to Be','Strategy\nOur Game Plan','Strategy Map\nTranslate the Strategy','Balanced Scorecard\nMeasure and Focus','Targets and Initiatives\nWhat We Need to Do','Personal Objectives\nWhat I Need to Do'],540,80,720,80);
    const y=height+60;const outcome=node('Strategic Outcomes\nSatisfied Shareholders · Delighted Customers\nEfficient and Effective Processes\nMotivated and Prepared Workforce',80,y,1640,250);edge(ids.at(-1),outcome);height=y+340;
  } else if (part === 'B' && n === 6) {
    node('Best Total Cost\nLowest-Cost Supplier\nConsistently High Quality\nSpeedy Purchase\nAppropriate Selection',80,80,710,350);node('Product Leader\nHigh-Performance Products (Speed, Size, Accuracy, Weight)\nFirst to Market\nPenetrate New Market Segments',1010,80,710,350);
    node('Complete Customer Solutions\nQuality of Solutions Provided\nNumber of Products/Services per Customer\nCustomer Retention\nCustomer Lifetime Profitability',80,650,710,380);
    node('System Lock-in\nHigh Switching Costs to End-Use Customers\nOffer Broad Selection and Convenient Access\nProvide a Widely Used Standard\nProvide Innovation on a Stable Platform',1010,650,710,400);node('System Lock-in\nAdd Value to Complementors\nProvide Large Customer Base\nOffer Easy-to-Use Platform and Standard',1010,1220,710,330,'Complementors');height=1650;
  } else if (part === 'B' && [8,13].includes(n)) {
    node('Financial Outcomes',540,80);node('Customer Value Proposition',540,350);edge(1,0);const proc=node('Critical Internal Processes\n'+processes.map(s=>s.split('\n')[0].replace(' Processes','')).join(' · '),80,660,1640,250);edge(proc,1);
    if(n===8){const bridges=['Strategic Job Families','Strategic IT Portfolio','Organization Change Agenda'];bridges.forEach((s,i)=>{const x=80+i*580,b=node(s,x,1120,480,170),a=node(assets[i],x,1630,480,310);edge(proc,b,'Creating Alignment',false,[[x+120,910],[x+120,1120]]);edge(b,a,'Creating Alignment',false,[[x+120,1290],[x+120,1630]]);edge(a,b,'Creating Readiness',false,[[x+360,1630],[x+360,1290]]);edge(b,proc,'Creating Readiness',false,[[x+360,1120],[x+360,910]]);});note('+',615,1790,40);note('+',1195,1790,40);height=2050;}
    else {const agenda=node('Organization Change Agenda',540,1120);const org=node(assets[2],540,1590,720,280);edge(proc,agenda,'Creating Alignment',false,[[700,910],[700,1120]]);edge(agenda,org,'Creating Alignment',false,[[700,1250],[700,1590]]);edge(org,agenda,'Creating Readiness',false,[[1100,1590],[1100,1250]]);edge(agenda,proc,'Creating Readiness',false,[[1100,1120],[1100,910]]);node('Human Capital + Information Capital\nAset pendukung sejajar',80,2020,1640,170);edge(5,proc,'',false,[[80,2105],[30,2105],[30,785],[80,785]]);height=2300;}
  } else if (part === 'B' && n === 9) {
    const ids=column(['Cash','Tangible Assets\nShort-Term Assets: Accounts Receivable · Inventory\nLong-Term Assets: Equipment · Property · Goodwill','Strategy','Intangible Assets\nHuman Capital · Information Capital · Organization Capital'],420,80,960,140);for(const e of edges){const a=e.a;e.a=e.b;e.b=a;}const tang=nodes[ids[1]],asset=nodes[ids[3]],strategy=nodes[ids[2]],cash=nodes[ids[0]];extras.push('<path data-side-indicator="Liquidity" d="M1500 '+(tang.y+tang.h)+' V'+cash.y+'" stroke="currentColor" fill="none" stroke-width="3" marker-end="url(#'+spec.id+'-arrow)"/>','<path data-side-indicator="Readiness" d="M1500 '+(asset.y+asset.h)+' V'+strategy.y+'" stroke="currentColor" fill="none" stroke-width="3" marker-end="url(#'+spec.id+'-arrow)"/>');note('Liquidity',1640,tang.y+tang.h/2);note('Readiness',1640,asset.y+asset.h/2);height=Math.max(height,1500);
  } else if (part === 'B' && n === 10) {
    node('Strategy\nCross-sell the Product Line',80,80,710,210);node('Strategic Job and Competencies\nFinancial Planner\nSolution selling · Relationship management\nProduct-line knowledge\nLicensed as certified financial planner',1010,80,710,340);const ready=node('Strategic Readiness\nRequired Number of Financial Planners = 100\nCertified = 40\nNoncertified = 60 (100−40)\nStrategic Job Readiness Ratio = 40%',540,700,720,350);edge(0,ready);edge(1,ready);
    extras.push('<rect class="svg-card" x="80" y="1240" width="1640" height="140"/><rect class="svg-header" data-certified="40" x="80" y="1240" width="656" height="140"/>');note('Certified · 40 / 100',408,1330);note('Noncertified · 60 / 100',1228,1330);height=1500;
  } else if (part === 'B' && n === 11) {
    node('Strategy Map',540,80);node('(1) Identify Strategic Job Families',540,370);edge(0,1);const profile=node('(2) Define Competency Profile\nKnowledge · Skills · Values',80,780,710,250),assessment=node('(3) Assess Strategic Readiness',1010,780,710,250);edge(1,profile);edge(1,assessment);const report=node('Human Capital Readiness Report',540,1260);edge(profile,report);edge(assessment,report);const program=node('(4) Human Capital Development Program',540,1590);edge(report,program,'laporan dan pengembangan',true);height=1900;
  } else if (part === 'B' && n === 12) {
    node('Information Capital Portfolio',540,80);const infra=node('Technology Infrastructure\nPhysical Infrastructure\nManagement Infrastructure',80,500,710,280),apps=node('Information Capital Applications',1010,500,710,280);edge(0,infra);edge(0,apps);
    const labels=['Transaction Processing Applications\nAutomate basic repetitive transactions','Analytic Applications\nAnalysis · Interpretation · Sharing','Transformational Applications\nChange prevailing business model\nBisa transactional atau analytic'];labels.forEach((s,i)=>{const a=node(s,80+i*580,1180,480,350);edge(apps,a,'kategori',false,[[1365,780],[1365,950],[320+i*580,950],[320+i*580,1180]]);edge(infra,a,'supports',false,[[435,780],[435,1030],[370+i*580,1030],[370+i*580,1180]]);});note('Adaptasi taksonomi dari Figure 9-2 dan teks Ch.9',900,1700);height=1800;
  } else if (part === 'B' && n === 14) {
    const top=node('Long-Term Growth in Shareholder Value',540,80);['Operations Management Processes\nShort-wave · 6–12 months','Customer Management Processes\nMid-wave · 12–24 months','Innovation Processes\nLong-wave · 24–48 months','Regulatory and Social Processes\nLong-wave · 24–48 months'].forEach((s,i)=>edge(node(s,80+i*420,500,380,350),top));
    extras.push('<path d="M190 1060 V1600 H1650" stroke="currentColor" fill="none" stroke-width="3"/>');note('Shareholder Value ($) · tanpa angka nilai',900,980);note('Time (years)',900,1770);[1,2,3,4,5].forEach((v,i)=>note(v,240+i*330,1670));
    const curves=[['Operational Effectiveness','M190 1590 C300 1300 430 1300 660 1300 H1650',1320,1270],['Customer Management','M190 1590 C450 1590 620 1590 730 1390 C850 1210 1020 1210 1200 1210 H1650',1330,1180],['Product Innovation','M190 1590 C740 1590 840 1590 1020 1390 C1120 1140 1320 1140 1450 1140 H1650',1380,1100],['Good Citizen','M190 1590 C990 1590 1110 1590 1290 1400 C1410 1020 1530 1020 1650 1020',1550,1010]];
    curves.forEach(([label,d,x,y],i)=>{extras.push('<path data-horizon-curve="'+label+'" d="'+d+'" stroke="currentColor" fill="none" stroke-width="4" '+(i?'stroke-dasharray="'+(4+i*5)+' 5"':'')+'/>');note(label,x,y,24);});note('Ilustrasi buku · bukan tenggat universal atau data empiris',900,1850);height=1920;
  } else if (part === 'B' && n === 15) {
    column(['(1) Define the Shareholder Value Gap','(2) Reconcile the Customer Value Proposition','(3) Establish the Value Time Line','(4) Identify the Value-Creating Processes (Themes)','(5) Create Strategic Asset Readiness','(6) Identify and Fund the Strategic Initiatives'],80,80,720,120);
    node('Sustained Shareholder Value',1010,80,710);const p=node('Productivity',1010,410,330),g=node('Growth',1390,410,330);edge(p,6);edge(g,6);const c=node('Customer',1010,740,710);edge(c,p);edge(c,g);const pr=node('Value-Creating Processes\nOperations Management · Customer Management\nProduct Innovation · Regulatory and Social',1010,1090,710,350);edge(pr,c);const a=node('Human Capital + Information Capital + Organization Capital',1010,1680,710,240);edge(a,pr);height=Math.max(height,2070);
  } else throw Error('Missing TM07 diagram ' + spec.id);
  // Explicit ports/orthogonal routes preserve endpoints. No cross-diagram automatic graph layout.
  const port = (a,b) => {
    const ax=a.x+a.w/2,ay=a.y+a.h/2,bx=b.x+b.w/2,by=b.y+b.h/2;
    if(Math.abs(by-ay)>Math.abs(bx-ax)*0.45) return by>ay ? [[ax,a.y+a.h],[bx,b.y]] : [[ax,a.y],[bx,b.y+b.h]];
    return bx>ax ? [[a.x+a.w,ay],[b.x,by]] : [[a.x,ay],[b.x+b.w,by]];
  };
  const arrow=spec.id+'-arrow';
  const paths=edges.map((e,i)=>{
    const points=e.route??port(nodes[e.a],nodes[e.b]);e.points=points;
    const d=points.map((p,j)=>(j?'L':'M')+p.join(' ')).join(' ');
    let label='';if(e.label){const segment=e.labelSegment??Math.floor((points.length-1)/2),p=points[segment],q=points[segment+1],x=(p[0]+q[0])/2,y=(p[1]+q[1])/2;const w=e.label.length*14+22;label='<rect class="svg-bg" data-edge-label-bg="'+i+'" x="'+(x-w/2)+'" y="'+(y-23)+'" width="'+w+'" height="42"/><text class="svg-muted" data-edge-label="'+i+'" x="'+x+'" y="'+(y+8)+'" font-size="24" text-anchor="middle">'+escape(e.label)+'</text>';}
    return '<path data-edge="'+escape(nodes[e.a].key+' → '+nodes[e.b].key)+'" data-edge-index="'+i+'" d="'+d+'" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#'+arrow+')" '+(e.both?'marker-start="url(#'+arrow+')"':'')+' '+(e.dashed?'stroke-dasharray="9 7"':'')+'/>'+label;
  }).join('');
  const shapes=nodes.map(a=>'<rect class="svg-card" data-node="'+escape(a.key)+'" x="'+a.x+'" y="'+a.y+'" width="'+a.w+'" height="'+a.h+'" rx="14"/><text class="svg-text" x="'+(a.x+a.w/2)+'" y="'+(a.y+(a.h-a.lines.length*38)/2+27)+'" text-anchor="middle" font-size="28">'+a.lines.map((line,i)=>'<tspan x="'+(a.x+a.w/2)+'" dy="'+(i?38:0)+'">'+escape(line)+'</tspan>').join('')+'</text>').join('');
  const svg='<svg class="course-diagram-svg mnu307-diagram mnu307-pr4-diagram" data-figure="'+spec.id+'" viewBox="0 0 '+width+' '+height+'" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif"><title>'+escape(spec.judul)+'</title><desc>'+escape(spec['alt text'])+'</desc><style>@media(max-width:767px){.mnu307-pr4-diagram{min-width:1260px}}</style><defs><marker id="'+arrow+'" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="currentColor"/></marker></defs><rect class="svg-bg" width="'+width+'" height="'+height+'" rx="16"/>'+extras.join('')+paths+shapes+notes.map(a=>'<text class="svg-muted" x="'+a.x+'" y="'+a.y+'" text-anchor="middle" font-size="'+a.size+'">'+escape(a.text)+'</text>').join('')+'</svg>';
  return {svg,nodes};
}
export function figurePR4(spec) {
  const {svg,nodes}=scene(spec);
  const content=spec.isi.replace(/ Geometri kurva tersedia di 06 register koordinat sumber\./,'').replace(/Titik pada figure sumber[\s\S]*$/,'');
  const cards=content.split(';').map(s=>s.trim()).filter(Boolean).map(text=>({title:text,subtitle:'',items:[],takeaway:''}));
  // Full source-bound overview wraps at 375px; detail keeps the relational geometry.
  // Named nodes additionally expose grouped membership (especially two lock-in sides).
  const card=(title,items=[])=>({title,subtitle:'',items,takeaway:''});
  let overviewCards = nodes.length ? nodes.map(a=>card(a.key,a.label.split('\n').slice(1))) : cards;
  if(spec.id==='V-TM07A-02')overviewCards=[card('Costs ↓',['Eliminate / Reduce']),card('Buyer Value ↑',['Raise / Create']),card('Value Innovation',['The Simultaneous Pursuit of Differentiation and Low Cost'])];
  if(spec.id==='V-TM07A-09')overviewCards=['Purchase','Delivery','Use','Supplements','Maintenance','Disposal'].map(stage=>card(stage,['Customer productivity','Simplicity','Convenience','Risk','Fun and image','Environmental friendliness',...(stage==='Use'?['Ford: Convenience / Use']:stage==='Maintenance'?['Ford: Risk / Maintenance']:[])]));
  if(spec.id==='V-TM07A-12')overviewCards.push(card('PMS · Today / Tomorrow',['Pioneers','Migrators','Settlers','Arah strategis ke lebih banyak migrators / pioneers; bukan perpindahan wajib tiap bisnis.']));
  if(spec.id==='V-TM07A-15'){
    const source=fs.readFileSync('scripts/fixtures/mnu307/tm07a.md','utf8');
    const table=source.slice(source.indexOf('| Imitation barrier Figure 9-1 |')).split(/\r?\n/).slice(2,10);
    overviewCards.push(...table.map(line=>{const cells=line.split('|').slice(1,-1).map(s=>s.trim());return card(cells[0],[cells[1]]);}));
  }
  if(spec.id==='V-TM07B-09')overviewCards.push(card('Readiness',['Extent to which an intangible asset meets requirements of strategy']),card('Liquidity',['Ease with which asset can be converted to cash']));
  if(spec.id==='V-TM07B-14')overviewCards.push(card('Kurva ilustratif',['Operational Effectiveness','Customer Management','Product Innovation','Good Citizen','Sumbu: Shareholder Value ($), tanpa angka nilai; Time (years), 1–5.']));
  return {kind:'figure',title:spec.judul,svg,overview:{heading:spec.judul,cards:overviewCards,footer:spec.hubungan},caption:spec['pesan utama']+' '+spec.sumber,altText:spec['alt text']};
}
