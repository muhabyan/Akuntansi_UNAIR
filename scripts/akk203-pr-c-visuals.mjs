// Relationships from approved 05 visual specs; source prose/amounts live in fixtures.
export const prCComparisonIds = ['V-TM06-07', 'V-TM07-07'];
const card = (title, items, subtitle = '') => ({ title, subtitle, items, takeaway: '' });
export const prCModels = {
  'V-TM06-01': {
    rows: [['Basis: kapan?', 'Fokus: apa?'], ['Pencatatan finansial: hak, konsumsi, kewajiban'], ['Laporan'], ['Dana: tujuan', 'Anggaran: rencana / realisasi', 'Komitmen: pesanan']],
    edges: [[0,2],[1,2],[2,3],[4,2,'Kendali',false],[5,2,'Kendali',false],[6,2,'Kendali',false]],
    cards: [card('Basis', ['Menentukan kapan dicatat.']),card('Fokus', ['Menentukan sumber daya yang diukur.']),card('Dana', ['Menentukan tujuan dan batas dana.']),card('Anggaran', ['Membandingkan rencana dengan realisasi.']),card('Komitmen', ['Mengendalikan pesanan sebelum pembayaran.']),card('Finansial', ['Mencatat hak, konsumsi, dan kewajiban.']),card('Laporan', ['Merangkum hasil pencatatan sesuai basis dan cakupannya.'])],
  },
  'V-TM06-02': {
    rows: [['Basis: waktu pengakuan', 'Fokus: cakupan sumber daya'], ['Kas / kas modifikasian', 'Current financial resources'], ['Akrual modifikasian / akrual', 'Economic resources'], ['CTA Indonesia: konteks historis tersendiri']],
    edges: [[0,2,'Pilihan',false],[0,4,'Pilihan',false],[1,3,'Pilihan',false],[1,5,'Pilihan',false],[4,3,'Teori AS: akrual modifikasian',false],[4,5,'Teori AS: akrual',false],[6,0,'Historis',false]],
    cards: [card('Basis: kapan?', ['Kas; kas modifikasian; akrual modifikasian; akrual.']),card('Fokus: apa?', ['Current financial resources: sumber daya keuangan kini.', 'Economic resources: sumber daya ekonomi.']),card('CTA historis Indonesia', ['Dibaca sebagai konteks historis tersendiri; jangan disamakan dengan basis/fokus pembanding AS.'])],
  },
  'V-TM06-03': {
    rows: [['AS: tujuan dana'], ['Governmental funds', 'Proprietary funds', 'Fiduciary funds'], ['SAP Indonesia: pengendalian kelompok dana; pembanding terpisah']],
    edges: [[0,1],[0,2],[0,3],[4,0,'Bandingkan; bukan padanan otomatis',false]],
    cards: [card('Governmental funds', ['Kelompok dana pemerintahan dalam pembanding AS.']),card('Proprietary funds', ['Kelompok dana kegiatan usaha dalam pembanding AS.']),card('Fiduciary funds', ['Kelompok dana yang dititipkan dalam pembanding AS.']),card('SAP Indonesia', ['Tidak memetakan ketiga kelompok AS secara otomatis ke akun SAP.'])],
  },
  'V-TM06-04': {
    rows: [['DPA / anggaran', 'Dokumen transaksi'], ['Estimasi pendapatan; apropriasi; estimasi perubahan SAL', 'Realisasi pendapatan, belanja, pembiayaan'], ['LRA: anggaran versus realisasi']],
    edges: [[0,2],[1,3],[2,4],[3,4]],
    cards: [card('Anggaran', ['DPA → estimasi pendapatan, apropriasi, estimasi perubahan SAL.']),card('Realisasi', ['Dokumen transaksi → realisasi pendapatan, belanja, pembiayaan.']),card('LRA', ['Bandingkan kedua lajur. DPA bukan pemicu beban-LO.'])],
  },
  'V-TM06-05': {
    rows: [['Tahap', 'AS: pembanding', 'SAP Indonesia'], ['DPA / anggaran', 'Otorisasi anggaran', 'Lajur anggaran'], ['PO / kontrak', 'Encumbrance', 'Kendali komitmen'], ['Penerimaan', 'Balik encumbrance; catat kewajiban', 'Aset / beban dan utang'], ['Pembayaran', 'Lunasi kewajiban', 'Kas / RK; realisasi sesuai pemicu'], ['Akhir periode', 'Penyesuaian sesuai model', 'Persediaan / penyusutan']],
    edges: [[3,6],[6,9],[9,12],[12,15],[4,7],[7,10],[10,13],[13,16],[5,8],[8,11],[11,14],[14,17]],
    cards: [card('1. Anggaran', ['AS: otorisasi anggaran.', 'SAP: pencatatan lajur anggaran.']),card('2. Pesanan / kontrak', ['AS: encumbrance.', 'SAP: kendali komitmen; belum otomatis beban atau belanja-LRA.']),card('3. Penerimaan', ['AS: balik encumbrance dan catat kewajiban.', 'SAP: aset/beban serta utang sesuai objek.']),card('4. Pembayaran', ['AS: pelunasan kewajiban.', 'SAP: kas/RK dan realisasi menurut pemicu.']),card('5. Akhir periode', ['Penyesuaian persediaan dan penyusutan sesuai model masing-masing.'])],
  },
  'V-TM06-06': {
    rows: [['Persediaan awal + pembelian − persediaan akhir', 'Biaya aset dan kebijakan penyusutan'], ['Pemakaian / beban persediaan', 'Beban penyusutan dan akumulasi'], ['LO: konsumsi persediaan', 'LO: beban; Neraca: akumulasi']],
    edges: [[0,2],[2,4],[1,3],[3,5]],
    cards: [card('Persediaan', ['8.450.000 + 42.750.000 − 11.650.000 = 39.550.000 beban.']),card('Penyusutan', ['24.060.000 + 19.270.000 = 43.330.000 beban.', 'Akumulasi akhir: 72.180.000 + 43.330.000 = 115.510.000.', 'Nilai tercatat akhir: 336.950.000 − 115.510.000 = 221.440.000.'])],
  },
  'V-TM06-08': {
    rows: [['LO: surplus 23.120.000', 'LRA: SiLPA 1.450.000', 'LAK: perubahan kas'], ['LPE: awal 268.620.000 + surplus', 'LPSAL: awal 105.400.000 − penggunaan 54.200.000 + SiLPA', 'Kas awal 125.750.000 − penurunan 52.750.000'], ['Ekuitas akhir 291.740.000', 'SAL akhir 52.650.000', 'Kas akhir 73.000.000'], ['CaLK: PFK 20.350.000 menjelaskan selisih kas / SAL pada dataset']],
    edges: [[0,3],[3,6],[1,4],[4,7],[2,5],[5,8],[9,7,'Menjelaskan',false],[9,8,'Menjelaskan',false]],
    cards: [card('LO → LPE → ekuitas Neraca', ['268.620.000 + 23.120.000 = 291.740.000.']),card('LRA → LPSAL → SAL', ['105.400.000 − 54.200.000 + 1.450.000 = 52.650.000.']),card('LAK → kas Neraca', ['125.750.000 − 52.750.000 = 73.000.000.']),card('CaLK: batas dataset', ['Kas − SAL = PFK 20.350.000 sesuai asumsi soal; bukan rumus universal.'])],
  },
  'V-TM06-09': {
    rows: [['CTA: historis', 'SAP akrual: kini'], ['Belanja + jurnal pendamping', 'Terima aset dan kewajiban'], ['Dr Peralatan dan Mesin; Cr Diinvestasikan dalam Aset Tetap', 'Lunasi utang; catat realisasi sesuai pemicu']],
    edges: [[0,2],[2,4],[1,3],[3,5]],
    cards: [card('CTA historis', ['Belanja dan jurnal pendamping: debit Peralatan, kredit Diinvestasikan dalam Aset Tetap.']),card('SAP akrual', ['Penerimaan aset → aset dan kewajiban.', 'Pembayaran → pelunasan utang; lajur realisasi terpisah.'])],
  },
  'V-TM07-01': {
    rows: [['Pelaksanaan anggaran', 'Finansial'], ['LRA: realisasi versus anggaran', 'LO: hak dan beban'], ['LPSAL: perubahan SAL', 'LPE: perubahan ekuitas'], ['CaLK: kebijakan dan penjelasan', 'Neraca: aset, kewajiban, ekuitas'], ['LAK: penerimaan dan pengeluaran kas']],
    edges: [[0,2,'Kelompok',false],[0,4,'Kelompok',false],[1,3,'Kelompok',false],[1,5,'Kelompok',false],[1,7,'Kelompok',false],[1,8,'Kelompok',false],[6,2,'Menjelaskan',false],[6,4,'Menjelaskan',false],[6,3,'Menjelaskan',false],[6,5,'Menjelaskan',false],[6,7,'Menjelaskan',false],[6,8,'Menjelaskan',false]],
    cards: [card('LRA', ['Realisasi versus anggaran.'],'Pelaksanaan anggaran'),card('LPSAL',['Perubahan SAL.'],'Pelaksanaan anggaran'),card('LO',['Hak pendapatan dan beban.'],'Finansial'),card('LPE',['Perubahan ekuitas.'],'Finansial'),card('Neraca',['Aset, kewajiban, dan ekuitas.'],'Finansial'),card('LAK',['Penerimaan dan pengeluaran kas.'],'Finansial'),card('CaLK',['Kebijakan dan penjelasan untuk keenam laporan.'])],
  },
  'V-TM07-02': {
    rows: [['Pendapatan-LRA − belanja − transfer keluar', 'Penerimaan − pengeluaran pembiayaan'], ['Surplus / defisit-LRA', 'Pembiayaan neto'], ['SiLPA / SiKPA = surplus / defisit + pembiayaan neto'], ['SAL awal − penggunaan SAL + SiLPA / SiKPA ± koreksi ± lain-lain'], ['SAL akhir']],
    edges: [[0,2],[1,3],[2,4],[3,4],[4,5],[5,6]],
    cards: [card('1. Hitung SiLPA / SiKPA', ['Pendapatan − belanja − transfer keluar = surplus/defisit-LRA.', 'Penerimaan − pengeluaran pembiayaan = pembiayaan neto.', 'Jumlahkan keduanya: SiLPA/SiKPA.']),card('2. Hitung SAL akhir', ['SAL awal − penggunaan SAL + SiLPA/SiKPA ± koreksi ± lain-lain.', 'Dataset: 105.400.000 − 54.200.000 + 1.450.000 = 52.650.000.'])],
  },
  'V-TM07-03': {
    rows: [['Pendapatan-LO − beban'], ['Surplus / defisit operasi'], ['+ hasil nonoperasional + pos luar biasa'], ['Surplus / defisit-LO final'], ['Ekuitas awal + hasil LO final ± koreksi ekuitas'], ['Ekuitas akhir LPE'], ['Ekuitas Neraca']],
    edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]],
    cards: [card('LO', ['Pendapatan − beban → hasil operasi.', 'Tambah hasil nonoperasional dan pos luar biasa → hasil LO final.']),card('LPE', ['Ekuitas awal + hasil LO final ± koreksi → ekuitas akhir.', 'Dataset: 268.620.000 + 23.120.000 = 291.740.000.']),card('Neraca', ['Ekuitas 291.740.000 dicocokkan dengan ekuitas akhir LPE.'])],
  },
  'V-TM07-04': {
    rows: [['Aset lancar + aset nonlancar', 'Kewajiban pendek + panjang + ekuitas'], ['Total aset', 'Total kewajiban dan ekuitas'], ['Aset = kewajiban + ekuitas']],
    edges: [[0,2],[1,3],[2,4],[3,4]],
    cards: [card('Aset', ['Lancar 97.500.000 + tetap neto 221.440.000 = total 318.940.000.']),card('Kewajiban dan ekuitas', ['Kewajiban 27.200.000 + ekuitas 291.740.000 = total 318.940.000.'])],
  },
  'V-TM07-05': {
    rows: [['Operasi: layanan', 'Investasi: aset / investasi'], ['Pendanaan: pinjaman', 'Transitoris: pihak lain'], ['Jumlah empat arus bersih = perubahan kas'], ['Kas awal + perubahan kas = kas akhir'], ['Kas Neraca terkait', 'Nonkas → CaLK']],
    edges: [[0,4],[1,4],[2,4],[3,4],[4,5],[5,6,'Rekonsiliasi',false]],
    cards: [card('Operasi',['Retribusi, pembayaran persediaan dan jasa.']),card('Investasi',['Peralatan dan investasi di luar setara kas.']),card('Pendanaan',['Pinjaman/piutang jangka panjang.']),card('Transitoris',['Kas untuk pihak lain; PFK.']),card('Perubahan → saldo → rekonsiliasi',['Jumlah empat arus → perubahan kas.', 'Tambah kas awal → kas akhir 73.000.000.', 'Cocokkan dengan kas terkait pada Neraca; nonkas dijelaskan dalam CaLK.'])],
  },
  'V-TM07-06': {
    rows: [['LRA: SiLPA', 'LO: hasil final', 'LAK: kas akhir'], ['LPSAL: SAL akhir', 'LPE: ekuitas akhir', 'Neraca: kas terkait'], ['CaLK: alasan dan kebijakan', 'Neraca: ekuitas', 'CaLK: rekonsiliasi kas']],
    edges: [[0,3],[1,4],[4,7],[2,5,'Rekonsiliasi',false],[6,3,'Menjelaskan',false],[6,7,'Menjelaskan',false],[8,5,'Menjelaskan',false]],
    cards: [card('LRA → LPSAL',['SiLPA 1.450.000 dipindahkan; SAL akhir 52.650.000.']),card('LO → LPE → Neraca',['Hasil LO 23.120.000; ekuitas akhir 291.740.000.']),card('LAK ↔ Neraca',['Kas terkait 73.000.000; rekonsiliasi komponen kas.']),card('CaLK',['Menjelaskan tiga jalur. SAL, ekuitas, dan kas tidak harus sama.'])],
  },
  'V-TM07-08': {
    rows: [['LKPP 2025: audited', 'Berau 2025: audited'], ['SAL awal − penggunaan + SiLPA', 'SAL awal − penggunaan + SiLPA'], ['+ penyesuaian neto 1.473.228.957.326', '+ koreksi 3.193.499,80'], ['SAL akhir 438.265.568.897.532', 'SAL akhir 272.644.534.292,08'], ['CaLK C.1–C.6; berbeda dari SiLPA', 'CaLK 5.2.1–5.2.5; kebetulan sama dengan SiLPA']],
    edges: [[0,2],[2,4],[4,6],[6,8],[1,3],[3,5],[5,7],[7,9]],
    cards: [card('LKPP 2025 · PDF 47 / cetak 4',['SAL awal 457.543.275.049.219 − penggunaan 93.146.980.793.000 + SiLPA 72.396.045.683.987.', 'Pra-penyesuaian 436.792.339.940.206 + penyesuaian neto 1.473.228.957.326 = SAL akhir 438.265.568.897.532.', 'CaLK C.1–C.6; SAL akhir berbeda dari SiLPA.']),card('Berau 2025 · PDF 19',['SAL awal 673.431.043.094,28 − penggunaan 673.434.236.594,08 = −3.193.499,80.', '+ SiLPA 272.644.534.292,08 + koreksi 3.193.499,80 = SAL akhir 272.644.534.292,08.', 'CaLK 5.2.1–5.2.5; sisa awal dan koreksi saling mengimbangi.'])],
  },
};
