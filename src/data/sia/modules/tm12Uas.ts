import type { Reading } from '../../../types';
import { SIA_COVERAGE } from '../coverageComplements';
import { h, p, ol, table, warn, example, check, extra, source } from '../uasBlocks';
import { conceptMap, agingChart } from '../uasVisuals';

export const SIA_TM12: Reading = {
  tm: 12, title: 'Reporting Processes dan eXtensible Business Reporting Language (XBRL)',
  ref: 'RPS-SIA minggu 12 · Richardson AIS 4e · Ch. 14, pp. 470–483 (PDF 495–508)',
  intro: 'Pelaporan mengubah data transaksi menjadi informasi bagi manajemen dan pihak luar. Ikuti perjalanan data dari ERP ke warehouse, dashboard dan XBRL; lalu pelajari mengapa angka yang terbaca mesin tetap memerlukan definisi, konteks, unit, rekonsiliasi dan pengujian.',
  objectives: ['Membedakan operational database, warehouse, mart dan lake.', 'Menghubungkan business intelligence dan dashboard dengan tujuan serta KPI.', 'Membedakan specification, taxonomy, tag, instance document dan penyajian.', 'Menentukan entity, period, unit dan precision/decimals pada fakta laporan.', 'Mengevaluasi risiko tagging serta peran XBRL GL dan assurance.'],
  blocks: [
    example('Angka 115 berarti apa?', p('Kas perusahaan ditampilkan “115” pada dashboard, file laporan, dan grafik investor. Tanpa tahu entitas, tanggal, mata uang, skala jutaan atau rupiah penuh, serta apakah angka itu konsolidasian, pembaca dapat mengambil keputusan salah. XBRL menambahkan makna terstruktur, tetapi pemetaan dan konteksnya harus benar.')),
    h('1. Dari transaksi ke informasi pelaporan'),
    p('Database operasional dioptimalkan untuk pencatatan transaksi harian. Pelaporan lintas periode dan sistem sering memakai repositori analisis terpisah. Data dipindahkan melalui ETL: extract, transform, load. Hasil transformasi harus dapat direkonsiliasi ke sistem asal; proses cepat tidak berguna bila satu cabang hilang dari ekstraksi. Richardson pp.472–474.'),
    conceptMap('report-pipeline', 'Perjalanan data pelaporan', [
      { title: 'Sumber operasional', lines: ['ERP, penjualan, bank dan payroll.', 'Tetapkan periode serta populasi.'] },
      { title: 'ETL + warehouse', lines: ['Bersihkan, gabungkan, simpan histori.', 'Uji jumlah, total dan pemetaan.'] },
      { title: 'BI + dashboard', lines: ['Analisis KPI, tren dan exception.', 'Sertakan waktu pembaruan data.'] },
      { title: 'Laporan eksternal', lines: ['Tag fakta sesuai taxonomy/konteks.', 'Validasi dan rekonsiliasi XBRL.'] },
    ], 'Alur buatan. Dashboard dan laporan eksternal dapat memiliki pengguna, detail, serta jadwal berbeda.'),
    table('Repositori untuk kebutuhan berbeda', ['Repositori', 'Karakter', 'Batas'], [
      ['Operational database', 'Transaksi berjalan; sering diperbarui saat kejadian.', 'Query analitis berat dapat mengganggu operasi.'],
      ['Data warehouse', 'Integrasi data historis untuk analisis, relatif stabil setelah dimuat.', 'Perlu ETL, definisi konsisten, kontrol histori serta rekonsiliasi.'],
      ['Data mart', 'Subset data untuk fungsi/kelompok kebutuhan tertentu.', 'Definisi antarmart harus selaras agar angka tidak saling bertentangan.'],
      ['Data lake', 'Menampung data terstruktur dan tidak terstruktur dalam ragam besar.', 'Tanpa katalog/kualitas dapat sulit ditemukan dan dianalisis.'],
    ]),
    p('Business intelligence mengumpulkan informasi, menganalisis pola, lalu mendukung keputusan. Dashboard menyajikan metrik yang kritis untuk pengguna tertentu dan memungkinkan penelusuran lebih rinci. Jangan mengukur keberhasilan dashboard dari banyaknya grafik; tanyakan keputusan apa yang menjadi lebih jelas dan siapa yang bertindak.'),
    ...SIA_COVERAGE[12].analysis,
    h('2. KPI yang bisa diartikan dan ditindaklanjuti'),
    table('Definisi KPI sebelum memilih warna', ['KPI', 'Definisi', 'Hal yang perlu dijelaskan'], [
      ['Overdue ratio', 'Piutang lewat jatuh tempo ÷ total piutang pada tanggal yang sama.', 'Due date, cutoff kas, saldo kredit, penyebut, dan tanggal refresh.'],
      ['On-time delivery', 'Pengiriman tepat waktu ÷ pengiriman yang relevan.', 'Tanggal janji, tanggal aktual, toleransi dan perlakuan pembatalan.'],
      ['Defect rate', 'Unit cacat ÷ unit diperiksa pada lingkup yang sama.', 'Metode inspeksi, rework dan apakah data mewakili seluruh produksi.'],
    ]),
    example('Contoh KPI aging piutang',
      p('Asumsi saldo Rp juta: belum jatuh tempo 40, overdue 1–30 hari 30, 31–60 hari 20, >60 hari 10. Total 100; overdue 60 sehingga overdue ratio 60%. Grafik menunjukkan nominal yang membentuk rasio itu. Angka ini menggambarkan keterlambatan, belum jumlah kerugian kredit.'), agingChart,
      p('Tindak lanjut: petugas penagihan memeriksa saldo lama dan sengketa; supervisor meninjau hasil pada jadwal yang ditentukan. Dashboard harus menampilkan tanggal data dan sumber, bukan memberi kesan real-time jika pemuatan hanya setiap malam.')),
    h('3. Komponen XBRL dan perbedaannya'),
    p('**eXtensible Business Reporting Language (XBRL)** memungkinkan pertukaran fakta bisnis dengan makna terstruktur. Buku mengenalkan XBRL berbasis XML. XBRL adalah format/standar pelaporan data, bukan standar pengakuan pendapatan atau pengganti prinsip akuntansi. Richardson pp.477–480.'),
    table('Istilah yang sering tertukar', ['Istilah', 'Fungsi', 'Analogi terbatas'], [
      ['Specification', 'Aturan teknis bagaimana dokumen/fakta XBRL disusun.', 'Tata bahasa teknis.'],
      ['Taxonomy', 'Definisi konsep data, tipe, label dan hubungan.', 'Kamus terstruktur untuk makna laporan.'],
      ['Tag / concept', 'Penanda konsep tertentu, misalnya kas atau revenue.', 'Nama bermakna; lebih dari label tampilan.'],
      ['Instance document', 'Fakta yang benar-benar dilaporkan beserta konteks/unitnya.', 'Isian laporan suatu entitas/periode.'],
      ['Style sheet / rendering', 'Menyajikan data agar dapat dibaca manusia.', 'Tampilan; tidak mengubah makna fakta yang salah.'],
    ]),
    conceptMap('xbrl-fact', 'Satu fakta harus membawa makna', [
      { title: 'Concept', lines: ['Kas dan setara kas.', 'Pilih definisi yang tepat.'] },
      { title: 'Context', lines: ['Entitas + periode + dimensi relevan.', 'Saldo memakai satu tanggal.'] },
      { title: 'Unit + nilai', lines: ['IDR · 115.000.000.', 'Jangan keliru skala jutaan.'] },
      { title: 'Validation', lines: ['Cek tag, tipe, unit dan hubungan.', 'Cocokkan dengan laporan disetujui.'] },
    ], 'Fakta ilustratif: kas Rp115 juta pada tanggal pelaporan. Nama konsep contoh tidak dinyatakan sebagai tag resmi taxonomy tertentu.', false),
    ...SIA_COVERAGE[12].exchange,
    h('4. Context, unit, dan instant versus duration'),
    p('Saldo kas adalah fakta pada satu titik waktu (**instant**), sedangkan pendapatan adalah fakta sepanjang periode (**duration**). Context mengidentifikasi entitas dan periode, serta dimensi yang relevan. Unit menunjukkan mata uang atau ukuran lain. Dua angka sama belum dapat dibandingkan jika tanggal, entitas, konsolidasi, atau unit berbeda.'),
    example('Menyiapkan dua fakta dari kasus integrasi',
      table('Asumsi latihan laporan tahun 2025', ['Fakta', 'Periode', 'Nilai dan unit'], [
        ['Kas akhir', 'Instant: 31 Desember 2025.', 'IDR 115.000.000.'],
        ['Penjualan', 'Duration: 1 Januari–31 Desember 2025.', 'IDR 90.000.000 dalam asumsi hanya ada transaksi kasus.'],
      ]),
      p('Jika tampilan laporan menggunakan “Rp juta”, nilai 115 pada tampilan perlu ditransformasikan dengan benar menjadi rupiah penuh atau diberi mekanisme skala sesuai format yang digunakan. **Decimals** menyatakan ketelitian pembulatan fakta, bukan perintah mengalikan jutaan atau sekadar jumlah digit yang terlihat di layar.')),
    { kind: 'code', language: 'text', caption: 'Notasi konsep pedagogis, bukan instance XML siap diajukan ke regulator.', text: `Concept: CashAndCashEquivalents (nama ilustratif)
Entity: PT Contoh
Period: instant 2025-12-31
Unit: IDR
Value: 115000000
Rounding accuracy: ditentukan dari data sumber
Dimensions: sesuai lingkup fakta yang dilaporkan` },
    h('5. Pemetaan, validasi, dan assurance'),
    ol('Gunakan taxonomy dan versinya yang sesuai kebutuhan pelaporan.', 'Petakan akun/pos ke concept berdasarkan definisi, bukan kemiripan nama semata.', 'Tetapkan context, unit, dimensi, tanda dan ketelitian untuk fakta.', 'Bangun instance atau format pelaporan yang disyaratkan dan jalankan validasi teknis.', 'Rekonsiliasi fakta ke laporan yang disetujui dan telusuri ke sumber transaksi.', 'Review perubahan tag, exception, approval, akses dan bukti pengiriman/penerimaan.'),
    table('Kesalahan tagging yang dapat lolos tampilan', ['Kesalahan', 'Dampak', 'Pengujian'], [
      ['Kas diberi tag revenue', 'Makna salah meskipun angka tetap 115.', 'Cocokkan concept, tipe dan definisi ke pos laporan.'],
      ['Instant dipakai untuk pendapatan', 'Periode kinerja salah.', 'Periksa period type dan tanggal awal/akhir.'],
      ['Unit USD untuk rupiah', 'Pembanding nilai keliru.', 'Cocokkan mata uang dan konversi.'],
      ['Nilai juta dikirim sebagai rupiah', 'Nilai 1.000.000 kali terlalu kecil.', 'Uji skala pada fakta, ekspor dan rendering.'],
      ['Fakta penting terlewat', 'Laporan data tidak lengkap.', 'Rekonsiliasi daftar disclosure dan laporan sumber.'],
    ]),
    warn('Valid teknis belum berarti benar secara akuntansi', 'Dokumen yang lolos aturan XML/XBRL masih bisa memakai konsep yang salah secara substansi atau bersumber dari transaksi yang tidak sah. Assurance perlu menilai tagging, kelengkapan, akurasi, konteks, kontrol proses dan lingkup penugasan. Jangan menganggap laporan yang bisa dibuka otomatis telah diaudit.'),
    h('6. XBRL GL dan perkembangan penyajian'),
    p('**XBRL GL (Global Ledger)** menyediakan kerangka data tingkat transaksi/ledger untuk pertukaran dan integrasi, sedangkan taxonomy pelaporan keuangan berfokus pada fakta laporan. XBRL GL dapat membantu standardisasi antarsistem, tetapi implementasi, mapping dan kualitas data tetap diperlukan. Richardson pp.481–483.'),
    extra('Pelengkap: taxonomy relationships dan Inline XBRL',
      p('Taxonomy dapat memuat hubungan presentation, calculation, definition, label dan reference. Hubungan perhitungan membantu pemeriksaan aritmetika tertentu, tetapi tidak membuktikan seluruh laporan benar. Inline XBRL menggabungkan data terstruktur dengan dokumen yang dapat dibaca manusia, sehingga penyajian dan data mesin tetap perlu dicocokkan. [XBRL International: XBRL Essentials](https://specifications.xbrl.org/xbrl-essentials.html).')),
    ...SIA_COVERAGE[12].ledger,
    h('7. Uji pemahaman'),
    check('Angka revenue dan kas sama-sama 115. Bolehkah memakai context yang sama?', p('Belum tentu. Kas lazimnya instant dan revenue duration. Entitas serta dimensi juga harus cocok; angka yang sama tidak menentukan konteks yang sama.')),
    check('Dashboard overdue ratio turun dari 60% ke 30%, tetapi cabang terbesar belum dimuat. Apa simpulan yang tepat?', p('Belum dapat menyimpulkan kualitas penagihan membaik. Uji kelengkapan populasi dan konsistensi penyebut, lalu hitung ulang setelah seluruh cabang serta cutoff valid.')),
    source('RPS-SIA minggu 12; Richardson Ch.14 pp.470–483 (PDF 495–508): warehouse/mart/lake, BI, dashboard, taxonomy, instance, style sheet, assurance dan XBRL GL. Context/unit/decimals diperjelas dengan [SEC XBRL Glossary](https://www.sec.gov/page/osd_xbrlglossary). Tidak ada klaim semua entitas atau regulator memakai taxonomy/versi yang sama.'),
  ],
};
