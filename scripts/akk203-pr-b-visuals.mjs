// PR-B topology follows the approved 05 visual specs; no ranking of approaches is implied.
const card = (title, items = []) => ({ title, subtitle: '', items, takeaway: '' });
export const comparisonIds = ['V-TM01-02', 'V-TM04-03', 'V-TM04-06', 'V-TM05-02'];
export const prBModels = {
  'V-TM04-01': {
    rows: [['Pusat: RPJP', 'Daerah: RPJPD'], ['RPJM / Renstra-KL', 'RPJMD / Renstra-SKPD'], ['RKP / Renja-KL', 'RKPD / Renja-SKPD'], ['RKA-KL', 'KUA / PPAS'], ['APBN', 'RKA-SKPD'], ['Pelaksanaan (pusat)', 'APBD'], ['Evaluasi (pusat)', 'Pelaksanaan (daerah)'], ['Rencana berikutnya (pusat)', 'Evaluasi (daerah)'], ['Rencana berikutnya (daerah)']],
    edges: [[0,2],[2,4],[4,6],[6,8],[8,10],[10,12],[12,14],[14,0,'Umpan balik'],[1,3],[3,5],[5,7],[7,9],[9,11],[11,13],[13,15],[15,16],[16,1,'Umpan balik'],[0,1,'Integrasi sasaran',false]],
  },
  'V-TM04-02': {
    rows: [['APBN / APBD'], ['Otorisasi: dasar pelaksanaan', 'Perencanaan: pedoman kegiatan'], ['Pengawasan: kesesuaian', 'Alokasi: sumber daya perekonomian'], ['Distribusi: keadilan dan kepatutan', 'Stabilisasi: keseimbangan ekonomi']],
    edges: Array.from({length:6},(_,i)=>[0,i+1,'',false]),
    tableCards: true,
  },
  'V-TM04-04': {
    rows: [['Menilai rancangan anggaran'], ['Tujuan: untuk apa?', 'Karakteristik: seperti apa?', 'Batas hukum: sesuai ketentuan?'], ['Fiskal/koordinasi; efisiensi/keadilan; prioritas strategis; transparansi/pertanggungjawaban', 'Masa depan; kuantitatif; periode; sumber-penggunaan; pelaksanaan-pengendalian; target-komitmen', 'Tahunan; legislatif; dana-dasar hukum; bruto; kinerja; transparansi']],
    edges: [[0,1,'',false],[0,2,'',false],[0,3,'',false],[1,4,'',false],[2,5,'',false],[3,6,'',false]],
    cards: [card('Tujuan: untuk apa?', ['Fiskal dan koordinasi', 'Efisiensi dan keadilan', 'Prioritas strategis', 'Transparansi dan pertanggungjawaban']), card('Karakteristik: seperti apa?', ['Masa depan', 'Kuantitatif', 'Periode', 'Sumber dan penggunaan dana', 'Pelaksanaan dan pengendalian', 'Target dan komitmen']), card('Batas hukum', ['Tahunan', 'Persetujuan legislatif', 'Dana dan dasar hukum', 'Bruto', 'Kinerja', 'Transparansi'])],
  },
  'V-TM04-05': {
    rows: [['Anggaran: Konsep buku ASP'], ['Otorisasi legislatif', 'Komprehensif'], ['Unity: kesatuan dokumen ≠ satu rekening fisik', 'Nondiscretionary appropriation: sesuai tujuan dan 3E ≠ habiskan 100% / tanpa diskresi'], ['Periodik', 'Akurat dan rasional'], ['Clarity: jelas', 'Diketahui publik']],
    edges: Array.from({length:8},(_,i)=>[0,i+1,'',false]),
  },
  'V-TM04-08': {
    rows: [['RKPD'], ['KUA / PPAS: kepala daerah–DPRD'], ['RKA: kepala SKPD'], ['Verifikasi TAPD melalui PPKD'], ['Perbaikan kepala SKPD', 'Rancangan APBD oleh PPKD'], ['Kepala daerah mengajukan kepada DPRD'], ['Pembahasan / anggaran ditetapkan'], ['Pelaksanaan'], ['Evaluasi'], ['Rencana berikutnya']],
    edges: [[0,1],[1,2],[2,3],[3,4,'Tidak sesuai'],[4,3,'Perbaikan'],[3,5,'Sesuai'],[5,6],[6,7],[7,8],[8,9],[9,10],[10,0,'Umpan balik']],
  },
  'V-TM04-07': {
    rows: [['Uang / sumber daya: dana Ilustrasi A'], ['Input bermutu: ekonomi pada perolehan input'], ['Keluaran layanan: kunjungan; efisiensi input–keluaran'], ['Hasil sesuai tujuan: akses baca; efektivitas hasil–tujuan'], ['Mutu sebagai syarat pembanding'], ['Target ≠ realisasi: perlu dana aktual, kunjungan aktual, kualitas dan perubahan akses']],
    edges: [[0,1],[1,2],[2,3],[4,1,'Mutu',false],[4,2,'Mutu',false],[5,2,'Data',false],[5,3,'Data',false]],
  },
  'V-TM05-01': {
    rows: [['Kebutuhan layanan'], ['Line item: pos penerimaan dan pengeluaran', 'Incremental: dasar tahun lalu'], ['PPBS: rencana dan program', 'Performance: biaya dan hasil kerja'], ['ZBB: justifikasi setiap kegiatan'], ['Target pelayanan publik: penguji alokasi daerah']],
    edges: [[0,1,'',false],[0,2,'',false],[0,3,'',false],[0,4,'',false],[0,5,'',false],[6,1,'Penguji',false],[6,2,'Penguji',false],[6,3,'Penguji',false],[6,4,'Penguji',false],[6,5,'Penguji',false]],
  },
  'V-TM05-03': {
    rows: [['Anggaran layanan A'], ['Bahan layanan', 'Jasa pelaksanaan', 'Perjalanan'], ['Target layanan: informasi tambahan, bukan hasil otomatis penjumlahan pos']],
    edges: [[0,1,'',false],[0,2,'',false],[0,3,'',false]],
  },
  'V-TM05-04': {
    rows: [['Dasar tahun lalu'], ['Perubahan kebutuhan dan biaya'], ['Penyesuaian'], ['Usulan'], ['Evaluasi dasar', 'Target layanan']],
    edges: [[0,2],[1,2],[2,3],[4,3,'Penguji',false],[5,3,'Penguji',false]],
  },
  'V-TM05-05': {
    rows: [['Tujuan'], ['Alternatif program'], ['Implikasi beberapa tahun'], ['Pilihan program'], ['Anggaran tahunan'], ['Evaluasi']],
    edges: [[0,1],[1,3],[2,3,'Penguji'],[3,4],[4,5],[5,0,'Umpan balik'],[5,3,'Evaluasi pilihan']],
  },
  'V-TM05-06': {
    rows: [['Dana dan petugas: input'], ['Proses layanan'], ['Dokumen selesai: output'], ['Dokumen tepat waktu: outcome'], ['Mutu', 'Target dan realisasi']],
    edges: [[0,1],[1,2],[2,3],[4,2,'Penguji',false],[5,2,'Bandingkan',false],[5,3,'Bandingkan',false]],
  },
  'V-TM05-07': {
    rows: [['Decision unit'], ['Decision package'], ['Minimum level', 'Current level', 'Enhanced level'], ['Ranking'], ['Alokasi sesuai prioritas'], ['Kewajiban pelayanan: penguji setiap paket']],
    edges: [[0,1],[1,2],[1,3],[1,4],[2,5],[3,5],[4,5],[5,6],[7,1,'Penguji',false]],
  },
  'V-TM05-08': {
    rows: [['Target pelayanan'], ['Prioritas kewenangan'], ['Kebutuhan kegiatan'], ['Standar harga', 'Analisis standar belanja'], ['Alokasi'], ['Penilaian hasil']],
    edges: [[0,1],[1,2],[2,5],[3,5,'Penguji biaya'],[4,5,'Penguji biaya'],[5,6],[6,0,'Evaluasi berikutnya']],
  },
  'V-TM05-09': {
    rows: [['Penetapan tujuan program'], ['Analisis alternatif'], ['Pengelompokan dinas'], ['Alokasi anggaran'], ['Evaluasi dampak program'], ['Catatan kuliah, belum dicek ke sumber resmi; bukan prosedur hukum universal']],
    edges: [[0,1],[1,2],[2,3],[3,4]],
  },
};

export function prBComparisonCards(id, table) {
  if (id === 'V-TM04-03') return [
    card('Enam fungsi hukum', ['UU 17 Ps.3(4); PP 12 Ps.23(3)', 'Otorisasi', 'Perencanaan', 'Pengawasan', 'Alokasi', 'Distribusi', 'Stabilisasi']),
    card('Delapan fungsi buku: Konsep buku ASP', ['Perencanaan', 'Pengendalian', 'Kebijakan fiskal', 'Politik', 'Koordinasi dan komunikasi', 'Penilaian kinerja', 'Motivasi', 'Ruang publik (public sphere)']),
  ];
  if (id === 'V-TM04-06') return ['Klasik', 'Baru'].map((group)=>card(group, table.rows.filter((row)=>row[0]===group).map((row)=>`${row[1]}: ${row[2]}`)));
  return undefined;
}
