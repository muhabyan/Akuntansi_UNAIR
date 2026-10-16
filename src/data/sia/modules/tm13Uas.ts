import type { Reading } from '../../../types';
import { SIA_COVERAGE } from '../coverageComplements';
import { h, p, ul, table, warn, example, check, extra, source } from '../uasBlocks';
import { SIA_AUTOMATION_SUPPLEMENT } from './automationSupplement';
import { conceptMap } from '../uasVisuals';

export const SIA_TM13: Reading = {
  tm: 13, title: 'Emerging Technologies: Blockchain dan AI Automation',
  ref: 'Richardson et al. AIS 4e · Ch. 15, hal. cetak 494–516 (PDF 519–541); cloud: Ch. 6 p. 270 (PDF 295)',
  intro: 'Pelajari blockchain, smart contract dan shared receipt, lalu hubungkan dengan AI/ML serta otomasi RPA. Contoh pembelian dan rekonsiliasi menunjukkan manfaat, batas bukti digital, risiko input, exception, pengawasan manusia dan perhitungan manfaat otomasi.',
  objectives: ['Menjelaskan transaksi, hash, blok, konsensus dan peran kunci.', 'Membedakan jaringan permissioned/permissionless dan kebutuhan database terpusat.', 'Menjelaskan smart contract beserta oracle problem dan pencegahan pembayaran ganda.', 'Membedakan shared receipt/triple-entry dari pembukuan double-entry serta kebutuhan audit.', 'Membandingkan cloud accounting dengan blockchain dan menilai pembagian tanggung jawab.', 'Menilai AI/ML, kelayakan RPA, exception, kontrol bot serta manfaat otomasi.'],
  blocks: [
    example('Catatan sama, barang tetap bisa bermasalah',
      p('Pembeli dan pemasok melihat catatan digital yang sama: “100 unit diterima baik”. Sensor yang mengirim data ternyata salah dikalibrasi, dan sebagian barang rusak. Catatan bersama membantu menelusuri siapa memasukkan informasi serta kapan, tetapi inspeksi fisik, syarat penerimaan, dan penyelesaian sengketa tetap dibutuhkan.')),
    h('1. Mengapa memakai distributed ledger?'),
    p('Blockchain merupakan salah satu bentuk distributed ledger: transaksi disimpan dalam rangkaian blok dengan keterkaitan kriptografis dan aturan validasi bersama. Peserta mempertahankan salinan sesuai desain jaringan. Ini berbeda dari database tunggal yang dikendalikan satu pengelola. Tidak semua distributed ledger memakai bentuk rantai blok, dan blockchain tidak harus memakai mata uang kripto publik.'),
    p('Pertanyaan bisnisnya: apakah beberapa pihak perlu berbagi catatan, apakah satu pengelola pusat dapat dipercaya, dan apakah biaya koordinasi serta validasi bersama sepadan? Jika data hanya dipakai satu organisasi dengan otoritas yang jelas, database terpusat dengan kontrol yang baik dapat lebih sederhana. Richardson pp. 495–498.'),
    conceptMap('blockchain-flow', 'Dari pengajuan sampai catatan bersama', [
      { title: 'Transaksi diajukan', lines: ['Identitas/kunci dan data transaksi.', 'Signature diperiksa sesuai aturan.'] },
      { title: 'Validasi jaringan', lines: ['Periksa aturan dan urutan transaksi.', 'Mekanisme konsensus bergantung desain.'] },
      { title: 'Blok terhubung', lines: ['Blok merujuk hash blok sebelumnya.', 'Perubahan meninggalkan inkonsistensi.'] },
      { title: 'Peserta membaca riwayat', lines: ['Salinan konsisten menurut protokol.', 'Koreksi lazimnya entri lanjutan.'] },
    ], 'Alur konseptual buatan; bukan diagram implementasi jaringan tertentu. Data input dunia nyata tetap harus diverifikasi.'),
    table('Komponen yang perlu dibedakan', ['Komponen', 'Peran', 'Batas'], [
      ['Hash', 'Ringkasan kriptografis yang menghubungkan dan memeriksa data.', 'Tidak membuat data rahasia atau membuktikan kondisi barang.'],
      ['Signature dan kunci', 'Mendukung autentikasi pengajuan transaksi.', 'Kunci dicuri dapat disalahgunakan; pengamanan kunci penting.'],
      ['Konsensus', 'Aturan menyepakati state/urutan yang diterima jaringan.', 'Valid menurut protokol belum tentu benar secara ekonomi.'],
      ['Replikasi', 'Mendistribusikan salinan ledger.', 'Tetap ada risiko jaringan, governance, aplikasi dan hak akses.'],
    ]),
    warn('Immutability memiliki konteks', 'Catatan dirancang tahan perubahan dan dapat memperlihatkan manipulasi, bergantung protokol, konsensus, kendali peserta, serta pengelolaan kunci. Ini bukan jaminan absolut. Transaksi koreksi dapat ditambahkan untuk memperbaiki konsekuensi bisnis tanpa menghapus riwayat.'),
    p('Jejak perkembangan singkat: Bitcoin mempertemukan mekanisme kriptografi, jaringan terdistribusi dan konsensus dalam rancangan 2008 yang mulai beroperasi 2009. Pemanfaatan berikutnya meluas ke ledger konsorsium dan smart contracts. Blockchain sebagai infrastruktur perlu dibedakan dari cryptocurrency sebagai salah satu penggunaannya. Richardson Ch.15 pp.495–504.'),
    h('2. Jenis jaringan dan governance'),
    table('Izin peserta berbeda dari siapa yang mengelola', ['Jenis', 'Karakter', 'Pertimbangan'], [
      ['Permissionless', 'Partisipasi validasi terbuka sesuai protokol.', 'Konsensus, biaya, privasi, kapasitas, dan finalitas perlu ditinjau.'],
      ['Permissioned', 'Keanggotaan/hak dibatasi kepada peserta berizin.', 'Siapa menerima anggota, mengubah aturan, dan mengawasi validator?'],
      ['Private / consortium', 'Pengelolaan oleh satu organisasi atau kelompok organisasi.', 'Pembagian kuasa, konflik, akses data, dan prosedur keluar anggota.'],
    ]),
    p('Public/private sering membahas keterbukaan atau pengelolaan, sementara permissioned/permissionless membahas izin partisipasi. Jangan menganggap istilah itu selalu sinonim. Proof of work, proof of stake, dan mekanisme lain memberi pendekatan berbeda untuk konsensus; tidak semua jaringan memakai mining atau menyimpan data secara rahasia. Richardson pp. 498–504.'),
    ...SIA_COVERAGE[13].consensus,
    h('3. Smart contract dan oracle problem'),
    p('**Smart contract** adalah program yang menjalankan aturan pada lingkungan blockchain ketika kondisi yang didefinisikan terpenuhi. Nama “contract” tidak otomatis berarti seluruh syarat hukum dan substansi kontrak bisnis sudah tercakup. Kode membutuhkan data tentang dunia luar dari **oracle**, seperti sensor, sistem gudang, atau inspektur. Kesalahan oracle dapat memicu aksi salah meskipun program berjalan sesuai kode.'),
    conceptMap('oracle', 'Gerbang bukti sebelum pembayaran', [
      { title: 'Dunia fisik', lines: ['Jumlah, mutu dan penerimaan barang.', 'Periksa dokumen dan inspeksi.'] },
      { title: 'Oracle tepercaya', lines: ['Identitas sumber, waktu, validasi.', 'Bandingkan sensor dan reviewer.'] },
      { title: 'Smart contract', lines: ['Cek syarat, hak dan status bayar.', 'Jika ragu, tahan dan eskalasi.'] },
      { title: 'Settlement + catatan', lines: ['Pembayaran hanya sekali.', 'Rekonsiliasi bank dan buku besar.'] },
    ], 'Ilustrasi buatan. Titik paling awal sering berada di luar blockchain: data fisik yang masuk harus andal.'),
    example('Asumsi latihan: penerimaan 100 unit dan diskon 2%',
      p('Nilai invoice Rp100 juta. Pembayaran Rp98 juta hanya jika kontrak bisnis memang memberi diskon 2%, seluruh syarat terpenuhi, dan transaksi belum pernah dibayar. Apabila 10 unit rusak, program menahan pembayaran untuk penyelesaian, bukan mengubah laporan menjadi “diterima baik”.'),
      { kind: 'code', language: 'text', caption: 'Pseudocode pedagogis; bukan kode siap produksi atau kontrak hukum.', text: `IF caller_is_authorized
   AND oracle_evidence_is_valid_and_current
   AND accepted_quantity == ordered_quantity
   AND quality_approval == TRUE
   AND invoice_is_approved
   AND discount_terms_are_satisfied
   AND invoice_status == "UNPAID":
       reserve_invoice_once()
       request_settlement(invoice_amount * 0.98)
       confirm_settlement_before_marking_paid()
       record_receipt_and_audit_event()
ELSE:
       hold_and_route_exception_for_review()` },
      p('Status, penguncian, dan konfirmasi settlement mencegah retry menciptakan pembayaran ganda. Jika pembayaran melalui bank di luar jaringan, event blockchain saja belum membuktikan transfer bank sukses. Rekonsiliasi tetap diperlukan.')),
    table('Risiko smart contract dan kontrol', ['Risiko', 'Kontrol', 'Bukti'], [
      ['Oracle salah atau dimanipulasi', 'Validasi sumber dan inspeksi independen; tangani data tidak konsisten.', 'Log sensor, hasil inspeksi, approval dan exception.'],
      ['Bug / aturan kontrak tidak tepat', 'Review kode, test case, approval bisnis dan pengelolaan perubahan.', 'Versi, uji kondisi batas, persetujuan dan prosedur darurat.'],
      ['Kunci dicuri', 'Penyimpanan aman, pemisahan peran dan multi-approval sesuai risiko.', 'Inventaris kunci, kebijakan akses dan log.'],
      ['Salah bayar / double payment', 'Status transaksi unik dan konfirmasi settlement.', 'Ledger status, referensi bank serta hasil rekonsiliasi.'],
    ]),
    ...SIA_COVERAGE[13].applications,
    h('4. Double-entry, shared receipt, dan triple-entry'),
    p('Double-entry tetap mencatat dua sisi setiap transaksi pada pembukuan masing-masing entitas. Pada konsep triple-entry, bukti transaksi yang ditandatangani dan dapat diverifikasi bersama menjadi lapisan bukti tambahan. “Entri ketiga” bukan sisi ketiga yang mengubah persamaan debit = kredit. Konsep shared receipt juga tidak mensyaratkan semua implementasi menggunakan blockchain.'),
    p('Sumber pelengkap primer untuk shared signed receipt: [Ian Grigg, Triple Entry Accounting (2005)](https://iang.org/papers/triple_entry.html). Konsep ini mendahului public blockchain modern.'),
    conceptMap('triple-entry', 'Pembukuan masing-masing dan bukti bersama', [
      { title: 'Pembeli', lines: ['Dr Persediaan; Cr Utang.', 'Pembukuan dan estimasi sendiri.'] },
      { title: 'Pemasok', lines: ['Dr Piutang; Cr Penjualan.', 'Biaya barang dicatat terpisah.'] },
      { title: 'Shared receipt', lines: ['Bukti transaksi terverifikasi bersama.', 'Menautkan catatan antarpihak.'] },
      { title: 'Audit dan rekonsiliasi', lines: ['Periksa hak, nilai, cutoff, sengketa.', 'Cocokkan ledger, bank, dan GL.'] },
    ], 'Ilustrasi transaksi kredit, tanpa pajak. Shared receipt membantu konsistensi bukti tetapi tidak menggantikan pembukuan entitas.', false),
    example('Apa yang masih diuji auditor?',
      ul('Keberadaan dan kondisi: apakah barang benar ada dan layak?', 'Hak dan kewajiban: apakah entitas memiliki hak atau kewajiban terkait?', 'Penilaian: apakah harga, penurunan nilai, atau estimasi lain tepat?', 'Kelengkapan dan cutoff: apakah transaksi di luar jaringan atau di akhir periode telah masuk dengan benar?', 'Kontrol: apakah kunci, oracle, perubahan program, dan akses peserta terjaga?')),
    h('5. Cloud accounting berbeda dari blockchain'),
    table('Dua pilihan arsitektur', ['Aspek', 'Cloud accounting / SaaS', 'Blockchain'], [
      ['Fokus', 'Aplikasi dan data dilayani penyedia melalui jaringan.', 'Catatan bersama dengan aturan validasi jaringan.'],
      ['Pengelolaan', 'Penyedia mengelola bagian layanan sesuai kontrak.', 'Peserta dan validator mengikuti governance protokol.'],
      ['Risiko utama', 'Akses, integrasi, outage, konfigurasi, portabilitas dan ketergantungan penyedia.', 'Kunci, konsensus, oracle, privasi, bug dan governance.'],
      ['Tanggung jawab pengguna', 'Hak akses, kualitas input, approval, monitoring penyedia, pemulihan bisnis.', 'Input, akses, validasi substansi, kontrol aplikasi dan pembukuan.'],
    ]),
    p('Keduanya bisa dipakai bersama. Cloud tidak otomatis berarti ledger terdistribusi, dan blockchain bisa dijalankan pada infrastruktur cloud. Evaluasi SLA, lokasi/retensi data, kemampuan ekspor, pemulihan, dan strategi keluar penyedia. Kontrol serta laporan SOC yang relevan dari TM11 tetap perlu diperiksa.'),
    extra('Pelengkap: batas perlakuan akuntansi cryptocurrency',
      p('Agenda decision IFRIC Juni 2019 membahas cryptocurrency dengan karakteristik tertentu, bukan seluruh token digital. IAS 2 dipakai bila dipegang untuk dijual dalam kegiatan usaha normal; bila IAS 2 tidak berlaku, IAS 38 dipakai. Jangka investasi panjang tidak menjadi syarat tunggal. Periksa hak kontraktual serta pengungkapan, dan jangan memperluas keputusan ini ke semua aset kripto. Rujukan: [IFRIC, Holdings of Cryptocurrencies, Juni 2019, PDF 1–3](https://www.ifrs.org/content/dam/ifrs/supporting-implementation/agenda-decisions/2019/holdings-of-cryptocurrencies-june-2019.pdf). Penomoran Indonesia efektif 1 Januari 2024 adalah PSAK 202 Persediaan dan PSAK 238 Aset Takberwujud, menurut dokumen IAI Perubahan Penomoran PSAK/ISAK, PDF 1–2; pemetaan nomor tidak menggantikan pemeriksaan teks standar nasional.')),
    h('6. Uji pemahaman'),
    check('Seluruh anggota konsorsium melihat penerimaan 100 unit. Apakah barang pasti diterima baik?',
      p('Tidak. Konsistensi catatan tidak membuktikan sensor, petugas, dan dokumen benar. Periksa oracle, bukti fisik, kondisi, kewenangan serta sengketa.')),
    check('Apakah transaksi koreksi bertentangan dengan konsep riwayat tahan perubahan?',
      p('Tidak selalu. Entri lanjutan dapat membatalkan atau mengoreksi konsekuensi bisnis sambil mempertahankan jejak sebelumnya. Kontrol tetap harus mengatur siapa yang berwenang dan bagaimana buku besar diperbarui.')),
    ...SIA_AUTOMATION_SUPPLEMENT.blocks.map(b => b.kind === 'h2' ? { ...b, text: b.text.replace(/^(\d+)\./, (_, n: string) => `${Number(n) + 6}.`) } : b),
    source('Richardson Ch. 15 pp. 494–508 (PDF 519–533), terutama evaluasi kebutuhan dan audit pp. 497–507; cloud sebagai penghubung Ch. 6 p. 270 (PDF 295). [NISTIR 8202](https://nvlpubs.nist.gov/nistpubs/ir/2018/NIST.IR.8202.pdf) menjadi pelengkap batas tamper-resistance dan oracle. Triple-entry dibahas sebagai konsep shared receipt, bukan standar pembukuan wajib.'),
  ],
};
