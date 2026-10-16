import type { Reading } from '../../../types';
import { h, p, table, note, warn, example, check, extra, source } from '../uasBlocks';
import { SIA_ANALYTICS_SUPPLEMENT } from './analyticsSupplement';
import { conceptMap } from '../uasVisuals';

export const SIA_TM9: Reading = {
  tm: 9, title: 'Integrated Project: Proses, Database, dan Laporan',
  ref: 'Richardson et al. AIS 4e · Ch. 10, Integrated Project, hal. cetak 376–385 (PDF 401–410)',
  intro: 'Gabungkan proses bisnis, model data, pencatatan, kontrol, dan bukti audit dalam satu kasus. Kita menelusuri pembelian, penjualan, penerimaan, serta pembayaran hingga saldo akhir, lalu memeriksa bagaimana kegagalan akses atau data dapat merusak hasil yang terlihat seimbang.',
  objectives: ['Menjelaskan langkah integrated project: kebutuhan, BPMN, UML/REA, database dan query.', 'Menentukan PK, FK, linking table, serta referential integrity dalam model latihan.', 'Menghitung saldo dan menyusun jurnal yang saling terhubung dengan asumsi jelas.', 'Menghubungkan risiko kasus dengan kontrol, bukti audit, analitika dan pemulihan.', 'Mengerjakan latihan komprehensif dengan urutan alasan yang dapat ditelusuri.'],
  blocks: [
    example('Seimbang belum tentu lengkap',
      p('Sistem membukukan setiap jurnal secara seimbang, tetapi satu penerimaan barang tidak pernah dimasukkan. Neraca saldo tetap seimbang karena debit dan kredit transaksi itu sama-sama tidak tercatat. Integrasi SIA membutuhkan kontrol **kelengkapan peristiwa**, keterkaitan data, dan rekonsiliasi ke bukti sumber.')),
    h('1. Integrated project: satu proses analisis yang utuh'),
    p('Ch. 10 menghubungkan perencanaan proyek, kebutuhan bisnis, pemodelan proses, model data terpadu, implementasi database, dan query laporan. Ini bukan sekadar menggambar kotak modul ERP. Model proses menjelaskan kegiatan dan tanggung jawab; model data menjelaskan apa yang harus dicatat serta hubungannya. Richardson pp. 376–385.'),
    conceptMap('integrated-project', 'Dari kebutuhan sampai laporan', [
      { title: 'Kebutuhan + proses', lines: ['Tujuan, lingkup, dokumen, pelaku.', 'BPMN: aktivitas dan pesan.'] },
      { title: 'UML / REA terpadu', lines: ['Resources, Events, Agents.', 'Tentukan hubungan dan multiplicity.'] },
      { title: 'Database relasional', lines: ['PK, tipe data, FK, linking table.', 'Bersihkan dan validasi data impor.'] },
      { title: 'Query + validasi', lines: ['Saldo, laba dan informasi bisnis.', 'Rekonsiliasi hasil ke peristiwa.'] },
    ], 'Alur pedagogis buatan mengikuti Ch. 10. Kebutuhan dan model dapat direvisi setelah validasi.'),
    table('Hubungan siklus bisnis dan laporan', ['Siklus', 'Resource / event / agent', 'Dampak'], [
      ['Sales and collections', 'Inventory dan Cash; Sales dan Cash Receipts; Customer dan Employee.', 'Penjualan, HPP, piutang serta kas bergantung peristiwa dan alokasi.'],
      ['Purchases and payments', 'Inventory dan Cash; Purchases dan Cash Disbursements; Vendor dan Employee.', 'Persediaan, utang dan kas; pembelian barang belum otomatis menjadi HPP.'],
      ['Payroll', 'Jasa/waktu kerja dan Cash; Timecards serta Payroll; Employees dalam peran berbeda.', 'Beban, kewajiban dan kas sesuai akrual serta pembayaran.'],
    ]),
    p('Model terpadu berbagi master data seperti Employees, Inventory, dan Cash. Satu pegawai dapat muncul sebagai pekerja, supervisor, atau petugas pembayaran. Alias tabel pada perangkat database dapat mewakili peran berbeda tanpa berarti perusahaan harus menduplikasi orang yang sama. Exhibit 10.8–10.9, pp. 383–384.'),
    h('2. Dari multiplicity ke PK dan FK'),
    table('Skema latihan yang mendukung pembayaran parsial', ['Tabel', 'Kunci / hubungan', 'Tujuan'], [
      ['Customers', 'Customer_ID sebagai PK.', 'Satu pelanggan dapat memiliki banyak invoice.'],
      ['Invoices', 'Invoice_ID PK; Customer_ID FK.', 'Header invoice pada satu pelanggan.'],
      ['Invoice_Lines', '(Invoice_ID, Line_No) PK; Product_ID FK.', 'Banyak item per invoice; menghubungkan invoice dan barang.'],
      ['Cash_Receipts', 'Receipt_ID PK; tanggal dan nilai penerimaan.', 'Catat satu kejadian penerimaan kas.'],
      ['Receipt_Allocations', '(Receipt_ID, Invoice_ID) PK dalam asumsi satu alokasi per pasangan.', 'Hubungkan banyak penerimaan dengan banyak invoice.'],
      ['Products', 'Product_ID PK.', 'Master barang yang dipakai oleh penjualan/pembelian.'],
    ]),
    p('Dalam asumsi model ini, invoice bisa belum dibayar sehingga memiliki 0..* alokasi. Penerimaan kas bisa dialokasikan ke beberapa invoice; kebijakan uang muka perlu dimodelkan bila diizinkan. **Referential integrity** menolak FK yang merujuk header/master yang tidak ada. Kontrol itu tidak otomatis memastikan barang benar diterima atau nilai alokasi tidak melebihi saldo; aturan tambahan diperlukan.'),
    conceptMap('integrated-data', 'Menautkan invoice dan pembayaran', [
      { title: 'Invoice I-01', lines: ['Customer C-01 · nilai Rp90 juta.', 'Invoice_ID unik pada header.'] },
      { title: 'Penerimaan R-01', lines: ['Kas diterima Rp60 juta.', 'Receipt_ID unik pada kejadian.'] },
      { title: 'Alokasi R-01 / I-01', lines: ['Nilai yang dialokasikan Rp60 juta.', 'FK harus mengarah ke data valid.'] },
      { title: 'Saldo invoice', lines: ['90 − 60 = Rp30 juta.', 'Cocokkan dengan subledger.'] },
    ], 'Skema latihan, bukan salinan persis skema buku. Hubungan many-to-many diterapkan melalui tabel alokasi.'),
    h('3. Kasus angka: satu bulan PT Global Distribusi Utama'),
    example('Baca asumsi sebelum menghitung',
      p('Satuan seluruh angka adalah Rp juta. Saldo awal: Kas 100, Persediaan 40, Modal 140; piutang dan utang awal nol. Persediaan perpetual, tanpa PPN, diskon, retur, depresiasi, pajak, dan biaya lain. Barang diterima/diterima baik serta penyerahan penjualan memenuhi asumsi pengakuan kasus. Tidak ada transaksi selain yang disebutkan.'),
      table('Lima peristiwa dalam periode', ['Peristiwa', 'Nilai', 'Bukti / kontrol'], [
        ['Beli barang kredit dan terima', '50', 'PO disetujui, laporan penerimaan dan invoice cocok.'],
        ['Jual kredit, penyerahan terpenuhi', 'Harga 90; HPP 55', 'Delivery, invoice, pelanggan, dan biaya barang dapat ditelusuri.'],
        ['Terima pembayaran sebagian', '60', 'Penerimaan kas dialokasikan ke invoice penjualan.'],
        ['Bayar sebagian utang', '35', 'Pembayaran dialokasikan ke pembelian yang disetujui.'],
        ['Bayar gaji periode berjalan', '10', 'Timecard dan payroll disetujui secara terpisah.'],
      ])),
    h('4. Pembahasan langsung: jurnal dan saldo akhir'),
    p('Langkah pertama adalah membedakan pesanan dan peristiwa yang telah memenuhi pengakuan. Purchase order saja tidak menghasilkan jurnal dalam kasus ini. Saat barang diterima, persediaan dan utang bertambah. Saat penjualan terpenuhi, piutang serta pendapatan bertambah, dan biaya barang keluar menjadi HPP.'),
    { kind: 'journal', title: '1 · Penerimaan pembelian kredit', caption: 'Rp juta; tidak ada jurnal saat PO saja diterbitkan.', lines: [
      { account: 'Persediaan', debit: '50' }, { account: 'Utang Usaha', credit: '50', isCredit: true },
    ] },
    { kind: 'journal', title: '2a · Penjualan kredit', caption: 'Rp juta; penyerahan memenuhi asumsi pengakuan.', lines: [
      { account: 'Piutang Usaha', debit: '90' }, { account: 'Penjualan', credit: '90', isCredit: true },
    ] },
    { kind: 'journal', title: '2b · Biaya barang yang dijual', caption: 'Rp juta; perpetual.', lines: [
      { account: 'Harga Pokok Penjualan', debit: '55' }, { account: 'Persediaan', credit: '55', isCredit: true },
    ] },
    { kind: 'journal', title: '3 · Penerimaan sebagian piutang', caption: 'Rp juta; pembayaran bukan penjualan baru.', lines: [
      { account: 'Kas', debit: '60' }, { account: 'Piutang Usaha', credit: '60', isCredit: true },
    ] },
    { kind: 'journal', title: '4 · Pembayaran sebagian utang', caption: 'Rp juta; bukan HPP kedua kali.', lines: [
      { account: 'Utang Usaha', debit: '35' }, { account: 'Kas', credit: '35', isCredit: true },
    ] },
    { kind: 'journal', title: '5 · Pembayaran gaji periode berjalan', caption: 'Rp juta; dalam kasus tidak ada utang gaji awal atau potongan.', lines: [
      { account: 'Beban Gaji', debit: '10' }, { account: 'Kas', credit: '10', isCredit: true },
    ] },
    table('Rekonsiliasi saldo akhir', ['Pos', 'Perhitungan Rp juta', 'Hasil'], [
      ['Kas', '100 + 60 − 35 − 10', '115'],
      ['Piutang', '0 + 90 − 60', '30'],
      ['Persediaan', '40 + 50 − 55', '35'],
      ['Utang usaha', '0 + 50 − 35', '15'],
      ['Laba periode', '90 − 55 − 10', '25'],
      ['Ekuitas akhir', '140 + 25', '165'],
      ['Persamaan akuntansi', 'Aset 115 + 30 + 35 = 180; utang 15 + ekuitas 165 = 180.', 'Seimbang'],
    ]),
    conceptMap('integrated-balance', 'Angka yang harus saling cocok', [
      { title: 'Laba 25', lines: ['Penjualan 90 − HPP 55 − gaji 10.', 'Pembelian 50 tidak langsung HPP.'] },
      { title: 'Kas akhir 115', lines: ['Kas awal 100 + penerimaan 60.', 'Kurangi bayar utang 35 dan gaji 10.'] },
      { title: 'Piutang 30; utang 15', lines: ['Jual 90 − kas terkait 60.', 'Beli 50 − bayar terkait 35.'] },
      { title: 'Aset = utang + ekuitas', lines: ['115 + 30 + 35 = 180.', '15 + (140 + 25) = 180.'] },
    ], 'Semua angka Rp juta dan berdasarkan asumsi kasus. Seimbang membantu validasi aritmetika, tetapi tidak membuktikan kelengkapan atau keabsahan.'),
    warn('Jangan mengambil satu bullet buku sebagai aturan umum', 'Ch. 10 merangkum hubungan event dan laporan secara singkat. Dalam sistem perpetual umum, pembelian menambah persediaan, sedangkan HPP muncul dari biaya barang yang dijual. Saldo awal, alokasi, retur, diskon, write-off, dan cutoff mengubah formula sederhana piutang/utang. Contoh di sini sengaja menyatakan unsur yang diabaikan.'),
    h('5. Audit trail dan query laporan'),
    p('Jejak audit menghubungkan penerimaan kas → alokasi → invoice → pengiriman → pesanan pelanggan, dengan pelaku, waktu, dan bukti pada tiap tahap. Penelusuran hingga pembelian bahan baku memerlukan data batch/lot, produksi, atau costing yang memang tersedia; tidak otomatis ada satu rantai klik langsung. Keberhasilan posting otomatis bergantung pada konfigurasi dan pengendalian sistem.'),
    { kind: 'code', language: 'sql', caption: 'Query ilustratif saldo per invoice. Total alokasi perlu cutoff serta validasi terpisah.', text: `WITH Allocated AS (
  SELECT Invoice_ID, SUM(Allocated_Amount) AS Total_Paid
  FROM Receipt_Allocations
  GROUP BY Invoice_ID
)
SELECT i.Invoice_ID,
       i.Invoice_Amount - COALESCE(a.Total_Paid, 0) AS Outstanding
FROM Invoices i
LEFT JOIN Allocated a ON a.Invoice_ID = i.Invoice_ID;` },
    p('Gunakan LEFT JOIN agar invoice tanpa pembayaran tetap masuk. Nilai Outstanding negatif perlu diperiksa sebagai kemungkinan kelebihan alokasi, kredit, atau salah data. Uji keunikan PK, tipe tanggal/angka, FK, dan control total setelah impor sebelum mengandalkan laporan. Richardson pp. 383–384 (PDF 408–409).'),
    h('6. Kasus pengendalian: diagnosis sampai bukti audit'),
    example('Empat temuan dan tindak lanjut',
      table('Matriks jawaban yang dapat diuji', ['Kondisi → risiko', 'Kontrol dan pemilik', 'Bukti / prosedur audit'], [
        ['Staf membuat vendor sekaligus membayar → vendor fiktif dan kas hilang.', 'Pisahkan master vendor, approval dan treasury; supervisor meninjau perubahan rekening.', 'Periksa role, uji akun yang konflik, telusuri perubahan vendor ke konfirmasi.'],
        ['Developer bebas mengubah produksi → logika komisi dapat disusupi.', 'Change management, release independen, akses darurat terbatas dan direview.', 'Bandingkan daftar perubahan ke log; reperformance komisi dengan aturan resmi.'],
        ['Jurnal malam dekat threshold → potensi override/pemecahan.', 'Approval kumulatif berbasis kebijakan dan review exception oleh pihak independen.', 'Validasi populasi, kelompokkan transaksi terkait, inspeksi dokumen; anomali belum bukti fraud.'],
        ['Backup hanya di server yang sama → gangguan bisa merusak semua salinan.', 'Pemilik TI menyediakan salinan terlindungi dan uji restore sesuai target bisnis.', 'Inspeksi hasil backup/restore, durasi dan data yang pulih; nilai RPO/RTO.'],
      ])),
    p('Tambahkan risiko sisa pada setiap rekomendasi. Pemisahan tugas tidak mencegah seluruh kolusi; log tidak membantu jika tidak ditinjau; blockchain tidak memperbaiki input fisik yang palsu; bot tidak menyelesaikan sengketa otomatis. Menghubungkan batas ini menunjukkan pemahaman sistem secara utuh.'),
    h('7. Latihan mandiri komprehensif'),
    check('Dengan data kasus yang sama, penerimaan pelanggan ternyata 50, bukan 60. Hitung perubahan kas, piutang, laba, dan persamaan akuntansi.',
      p('Kas akhir = 100 + 50 − 35 − 10 = 105. Piutang = 90 − 50 = 40. Persediaan 35, utang 15, laba 25, ekuitas 165 tetap. Aset = 105 + 40 + 35 = 180. Perubahan penerimaan kas menukar komposisi aset; tidak menciptakan penjualan atau laba baru.')),
    check('Satu invoice pembelian dan penerimaan barang Rp8 juta terlewat dari data impor. Mengapa laporan masih seimbang, dan bagaimana mendeteksinya?',
      p('Persediaan dan utang sama-sama kurang Rp8 juta sehingga persamaan tetap seimbang. Cocokkan receiving report dan urutan dokumen ke catatan pembelian, rekonsiliasi subledger, serta periksa invoice pemasok yang belum tercatat. Uji dari dokumen sumber ke catatan membantu menilai kelengkapan.')),
    note('Peta belajar pra-UAS', 'TM8: conversion. TM9: integrated project. TM10: internal controls. TM11: cybersecurity. TM12: reporting/XBRL. TM13: blockchain dan AI automation. TM14: justifikasi investasi dan manajemen proyek TI.'),
    extra('Pelengkap: AMPS, aging, dan kualitas data untuk query (Ch. 2–3)', ...SIA_ANALYTICS_SUPPLEMENT.blocks),
    source('Richardson Ch. 10 pp. 376–385 (PDF 401–410); Exhibit 10.8–10.9 pp. 383–384 untuk integrasi, PK/FK, dan query. Kasus angka, model alokasi pembayaran, matriks audit dan jurnal adalah latihan buatan yang menghubungkan topik TM1–TM13; bukan simulasi resmi soal dosen.'),
  ],
};
