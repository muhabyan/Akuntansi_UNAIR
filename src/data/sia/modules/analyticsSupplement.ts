import type { Reading } from '../../../types';
import { h, p, ol, table, warn, example, check, extra, source } from '../uasBlocks';
import { conceptMap, agingChart } from '../uasVisuals';

export const SIA_ANALYTICS_SUPPLEMENT: Reading = {
  tm: 0, title: 'Analitika Data Akuntansi: AMPS, Kualitas Data, dan Visualisasi',
  ref: 'Richardson et al. AIS 4e · Ch. 2 dan 3, hal. cetak 49–60 dan 110–126 (PDF 74–85 dan 135–151)',
  intro: 'Analitika dimulai dari pertanyaan akuntansi yang jelas. Kita mengolah contoh invoice dan penerimaan kas menjadi aging piutang, memeriksa kelengkapan datanya, lalu memilih visual yang membantu keputusan. Hasil analisis merupakan petunjuk yang harus diinterpretasikan bersama bukti, bukan vonis otomatis.',
  objectives: ['Menerapkan AMPS dan membedakannya dari kerangka IMPACT pelengkap.', 'Membedakan empat jenis analitika serta 4V big data.', 'Menentukan unit observasi, primary key, ETL, dan rekonsiliasi populasi.', 'Menghitung aging, saldo dan proporsi overdue serta menafsirkannya.', 'Memilih visual yang sesuai dan menjelaskan batas Benford serta deteksi anomali.'],
  blocks: [
    example('Penjualan naik, mengapa kas belum masuk?',
      p('Manajer melihat penjualan naik dan menyimpulkan kinerja baik. Namun invoice belum tertagih. Pertanyaan yang lebih berguna: berapa saldo piutang yang sudah jatuh tempo, terkonsentrasi pada pelanggan mana, dan tindakan penagihan apa yang diperlukan? Angka total penjualan saja belum menjawabnya.')),
    h('1. AMPS: dari pertanyaan sampai cerita yang dapat ditindaklanjuti'),
    p('Buku utama memakai **AMPS: Ask the Question, Master the Data, Perform the Analysis, Share the Story**. Prosesnya berulang: analisis dapat menunjukkan data yang kurang atau membuat pertanyaan awal perlu diperbaiki. Richardson Ch. 2 pp. 50–60. Analitika bukan kegiatan membuat grafik dahulu lalu mencari cerita yang cocok.'),
    conceptMap('amps-uas', 'AMPS pada masalah penagihan', [
      { title: 'Ask the Question', lines: ['Piutang mana terlambat dibayar?', 'Tetapkan tanggal analisis dan unit.'] },
      { title: 'Master the Data', lines: ['Gabungkan invoice dan alokasi kas.', 'Uji kunci, kelengkapan, cutoff.'] },
      { title: 'Perform the Analysis', lines: ['Hitung saldo dan days past due.', 'Kelompokkan umur serta pelanggan.'] },
      { title: 'Share the Story', lines: ['Tampilkan nominal, proporsi, batas.', 'Tentukan pemilik tindak lanjut.'] },
    ], 'Ilustrasi buatan menggunakan AMPS dari buku utama. Hasil review dapat mengembalikan pekerjaan ke tahap data atau pertanyaan.'),
    table('Pertanyaan harus menentukan kebutuhan data', ['Pertanyaan', 'Unit observasi', 'Data minimum / batas'], [
      ['Invoice mana belum lunas?', 'Satu invoice pada tanggal analisis.', 'Invoice ID, nilai invoice, kredit/retur, alokasi kas hingga tanggal analisis.'],
      ['Siapa paling terlambat?', 'Pelanggan dan invoice terkait.', 'Customer ID, due date, saldo; jangan hanya memakai umur sejak invoice.'],
      ['Ada pembayaran ganda?', 'Pembayaran atau pasangan pembayaran.', 'Vendor ID, referensi, nilai, tanggal, rekening; tentukan pembatalan dan pembayaran cicilan.'],
    ]),
    extra('IMPACT sebagai kerangka pelengkap',
      p('IMPACT lazim dikenalkan dalam literatur Data Analytics for Accounting oleh Richardson, Teeter, dan Terrell: Identify questions, Master the data, Perform the test plan, Address and refine results, Communicate insights, Track outcomes. Materi lama menggunakan nama ini tanpa membedakan sumber. Untuk kesinambungan dengan TM2 dan buku AIS 4e, alur utama di sini memakai AMPS; evaluasi hasil serta pemantauan tindak lanjut tetap dijelaskan. IMPACT tidak diklaim sebagai model utama Ch. 2 AIS.')),
    h('2. Empat jenis analitika dan big data'),
    table('Jenis analitika mengikuti pertanyaan', ['Jenis', 'Pertanyaan', 'Contoh / batas'], [
      ['Descriptive', 'Apa yang terjadi?', 'Aging piutang dan tren penjualan; menggambarkan data yang tersedia.'],
      ['Diagnostic', 'Mengapa terjadi?', 'Telusuri keterlambatan menurut dispute, pelanggan atau proses; korelasi saja belum membuktikan sebab.'],
      ['Predictive', 'Apa yang mungkin terjadi?', 'Prediksi keterlambatan berdasarkan pola historis; perlu validasi dan ketidakpastian.'],
      ['Prescriptive', 'Apa tindakan terbaik dalam batas tertentu?', 'Prioritas penagihan dengan keterbatasan staf dan biaya; hasil bergantung asumsi serta tujuan.'],
    ]),
    p('**Big data** dapat dipahami melalui volume (jumlah), velocity (kecepatan), variety (ragam), dan veracity (keandalan). File invoice terstruktur, email sengketa yang tidak terstruktur, dan log ERP bisa memberi informasi berbeda. Data berukuran besar tidak otomatis lebih relevan atau bebas kesalahan. Hak akses, privasi, retensi, serta tujuan pemakaian tetap harus diperhatikan.'),
    h('3. Master the Data: ETL dan kontrol mutu'),
    ol('Extract: ambil data dari sistem sumber dengan lingkup, tanggal, parameter, dan hak yang jelas; simpan salinan sumber yang terlindungi.', 'Transform: seragamkan tipe tanggal/mata uang, tangani nilai kosong, pisahkan transaksi batal, dan dokumentasikan koreksi.', 'Load: muat data bersih ke tabel analisis dengan tipe data dan kunci yang tepat.', 'Validasi hasil: cocokkan jumlah baris dan total nilai ke sumber, uji duplikasi, serta simpan catatan perubahan dan versi query.'),
    p('Tentukan **grain** atau satuan satu baris. Tabel invoice bisa satu baris per invoice; tabel line item bisa beberapa baris per invoice. Jika invoice senilai Rp10 juta dengan dua baris barang langsung digabung dengan dua penerimaan kas, join bisa membuat empat baris dan menggandakan agregat. Agregasikan setiap sisi sesuai kunci sebelum digabung atau gunakan model alokasi yang benar.'),
    conceptMap('etl-join', 'Mencegah saldo berlipat karena join', [
      { title: 'Invoice', lines: ['Satu baris per Invoice_ID.', 'Nilai invoice tidak diulang per item.'] },
      { title: 'Alokasi penerimaan', lines: ['Banyak baris untuk satu invoice.', 'Jumlahkan kas per Invoice_ID dulu.'] },
      { title: 'Gabungkan agregat', lines: ['LEFT JOIN menjaga invoice terbuka.', 'Kas kosong diperlakukan 0.'] },
      { title: 'Rekonsiliasi', lines: ['Total saldo cocok subledger.', 'Selisih ditelusuri sebelum grafik.'] },
    ], 'Model analisis buatan: satu invoice dapat dibayar beberapa kali. Kredit/retur dan cutoff harus dimasukkan bila ada.'),
    table('Checklist kualitas data', ['Uji', 'Contoh masalah', 'Tindakan'], [
      ['Completeness', 'Sebagian cabang atau periode tidak ikut diekspor.', 'Rekonsiliasi record count dan control total ke sumber.'],
      ['Validity', 'Tanggal tidak dapat dibaca atau vendor tidak dikenal.', 'Periksa format dan master; pisahkan exception.'],
      ['Uniqueness', 'Invoice_ID duplikat pada tabel yang seharusnya unik.', 'Periksa grain dan sumber; jangan menghapus tanpa investigasi.'],
      ['Accuracy', 'Nilai/konversi mata uang salah.', 'Cocokkan ke dokumen dan aturan transformasi.'],
      ['Timeliness / cutoff', 'Pembayaran setelah tanggal analisis mengurangi saldo masa lalu.', 'Filter transaksi berdasarkan tanggal efektif yang disepakati.'],
    ]),
    h('4. Contoh bertahap: aging piutang yang dapat direkonsiliasi'),
    example('Asumsi latihan per satu tanggal analisis',
      p('Seluruh nilai dalam Rp juta, tanpa saldo awal, retur, pajak, write-off, atau valuta asing. Penerimaan kas sudah dialokasikan ke invoice yang benar dan hanya sampai tanggal analisis.'),
      table('Data invoice setelah agregasi kas', ['Invoice', 'Nilai', 'Kas dialokasikan', 'Saldo', 'Hari lewat jatuh tempo'], [
        ['I-01', '50', '10', '40', '−5 (belum jatuh tempo)'],
        ['I-02', '45', '15', '30', '20'],
        ['I-03', '30', '10', '20', '45'],
        ['I-04', '20', '10', '10', '75'],
        ['Total', '145', '45', '100', 'Satu tanggal analisis'],
      ]),
      ol('Saldo per invoice = nilai invoice − kredit/retur yang relevan − kas teralokasi. I-02: 45 − 15 = Rp30 juta.', 'Days past due = tanggal analisis − due date. Nilai negatif berarti belum jatuh tempo. Dalam asumsi ini nilai 0 masih jatuh tempo hari ini; overdue dimulai >0.', 'Kelompokkan: belum jatuh tempo/hari ini 40; 1–30 hari 30; 31–60 hari 20; >60 hari 10.', 'Uji total: 145 − 45 = 100, sama dengan 40 + 30 + 20 + 10.', 'Saldo overdue = 30 + 20 + 10 = 60. Proporsi overdue = 60 ÷ 100 × 100% = 60%.', 'Prioritaskan investigasi saldo tua dan sengketa, tetapi jangan otomatis menyimpulkan semua overdue menjadi kerugian kredit.')),
    agingChart,
    { kind: 'code', language: 'sql', caption: 'Query ilustratif; nama tabel adalah model latihan, bukan skema Sunset Graphics. DATE_DIFF bergantung pada DBMS.', text: `WITH Paid AS (
  SELECT Invoice_ID, SUM(Allocated_Amount) AS Paid_Amount
  FROM Receipt_Allocations
  WHERE Receipt_Date <= :analysis_date
  GROUP BY Invoice_ID
)
SELECT i.Invoice_ID, i.Due_Date,
       i.Invoice_Amount - COALESCE(p.Paid_Amount, 0) AS Balance
FROM Invoices i
LEFT JOIN Paid p ON p.Invoice_ID = i.Invoice_ID
WHERE i.Invoice_Date <= :analysis_date;` },
    h('5. Anomali, threshold, dan batas Benford'),
    p('Contoh analisis audit: bandingkan Entered_By dan Approved_By untuk mencari self-approval; cari nomor invoice vendor yang sama; kelompokkan pembayaran kecil berulang mendekati batas approval; telusuri jurnal di luar jam normal. Semua hasil ini adalah **exception untuk ditelusuri**. Pembayaran cicilan, proses batch malam, atau pengguna layanan dapat memberi penjelasan sah.'),
    example('Dua invoice Rp49 juta dan batas approval Rp50 juta',
      p('Dua pembayaran ke vendor sama dalam satu hari menghasilkan total Rp98 juta. Ini alasan memeriksa kemungkinan pemecahan transaksi. Periksa apakah keduanya berasal dari satu pembelian, siapa pembuat/penyetuju, dokumen penerimaan, dan hubungan pihak terkait. Nilai individual di bawah batas belum membuktikan niat menghindari kontrol.')),
    extra('Benford: rumus, contoh, dan kapan tidak layak',
      { kind: 'formula', text: 'P(D_1=d)=\\log_{10}\\left(1+\\frac{1}{d}\\right),\\quad d=1,\\ldots,9', note: 'D₁ adalah digit pertama bukan nol. P(1) ≈30,1%; P(9) ≈4,6%. Ini pola teoritis untuk populasi yang sesuai, bukan hukum yang berlaku pada setiap kolom angka.' },
      p('Benford dapat berguna untuk populasi numerik alami dengan rentang yang cukup lebar. Nomor identitas, nomor cek berurutan, harga yang ditetapkan, dan populasi yang sengaja dibatasi dekat threshold bisa tidak cocok. Pada 1.000 observasi yang layak, jumlah teoritis berawalan 1 sekitar 301; selisih aktual tetap perlu analisis statistik, konteks, dan bukti transaksi. Pengujian berulang juga dapat menambah false positive.'),
      warn('Batas sumber Benford', 'Ini perluasan analitika audit, bukan pengganti AMPS atau inti bab AIS yang dirujuk. Deviasi statistik tidak membuktikan fabrikasi, materialitas, atau siapa pelakunya. Pada populasi yang tidak layak, jangan menafsirkan deviasi sebagai temuan fraud.')),
    h('6. Memilih dan membaca visual'),
    table('Pertanyaan menentukan grafik', ['Tujuan', 'Pilihan', 'Hal yang diperiksa'], [
      ['Bandingkan kategori', 'Bar chart', 'Skala nol, unit, urutan, label; hindari efek 3D.'],
      ['Lihat tren waktu', 'Line chart', 'Interval waktu konsisten, perubahan metode, data hilang.'],
      ['Lihat distribusi', 'Histogram / box plot', 'Lebar bin, outlier, dan jumlah observasi.'],
      ['Lihat hubungan dua variabel', 'Scatter plot', 'Skala, outlier, kelompok; hubungan belum membuktikan sebab.'],
      ['Tunjukkan bagian dari total', 'Stacked bar / pie sederhana', 'Kategori menjumlah ke total yang jelas; kategori banyak sulit dibandingkan.'],
    ]),
    p('Pada grafik aging, panjang batang menunjukkan nominal pada unit yang sama. Angka 60% harus menyebut penyebut Rp100 juta dan tanggal analisis. Warna membantu menandai overdue, tetapi label dan urutan tetap membawa makna untuk pembaca yang tidak membedakan warna. Cerita akhir harus menyebut temuan, batas data, tindakan, penanggung jawab, serta kapan hasilnya ditinjau.'),
    h('7. Uji pemahaman'),
    check('Setelah join line item dan penerimaan, total invoice naik dua kali lipat. Apakah penjualan sebenarnya naik?',
      p('Belum dapat disimpulkan. Periksa grain dan multiplicity join. Bandingkan count serta total sebelum/sesudah, agregasikan kas pada tingkat invoice, dan pastikan setiap invoice hanya dihitung sesuai model.')),
    check('Digit 9 ditemukan sangat banyak pada jurnal Rp90–99 juta. Apakah ini bukti fraud?',
      p('Tidak. Rentang yang sengaja dibatasi itu memang membuat digit 9 dominan sehingga pembandingan Benford bisa tidak layak. Investigasi threshold avoidance dengan dokumen, hubungan transaksi, akses, dan approval.')),
    source('Richardson Ch. 2 pp. 49–60 (AMPS, data, jenis analitika) dan Ch. 3 pp. 110–126 (pemilihan dan pembacaan visual). Query, aging dan threshold adalah perluasan latihan. IMPACT dan Benford ditandai sebagai pelengkap agar tidak diatribusikan keliru ke bab buku utama.'),
  ],
};
