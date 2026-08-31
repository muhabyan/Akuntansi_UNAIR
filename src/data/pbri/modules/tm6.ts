import type { Reading } from '../../../types';

const SVG_EVIDENCE_HIERARCHY = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">HIERARKI TINGKAT KEANDALAN BUKTI AUDIT (SA 500)</text>
  
  <!-- High Reliability -->
  <rect x="30" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="125" y="80" fill="#10b981" font-size="12" font-weight="700" text-anchor="middle">TINGGI (HIGH)</text>
  <text x="125" y="102" fill="#f8fafc" font-size="10.5" font-weight="600" text-anchor="middle">Pihak Independen / Langsung</text>
  <line x1="45" y1="115" x2="205" y2="115" stroke="#334155"/>
  <text x="125" y="135" fill="#cbd5e1" font-size="10" text-anchor="middle">• Pemeriksaan Fisik (Kas/Stok)</text>
  <text x="125" y="155" fill="#cbd5e1" font-size="10" text-anchor="middle">• Konfirmasi Eksternal (Bank/AR)</text>
  <text x="125" y="175" fill="#cbd5e1" font-size="10" text-anchor="middle">• Rekalkulasi Independen</text>
  <text x="125" y="195" fill="#cbd5e1" font-size="10" text-anchor="middle">• Pelaksanaan Ulang (Reperformance)</text>

  <!-- Medium Reliability -->
  <rect x="245" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="340" y="80" fill="#f59e0b" font-size="12" font-weight="700" text-anchor="middle">SEDANG (MEDIUM)</text>
  <text x="340" y="102" fill="#f8fafc" font-size="10.5" font-weight="600" text-anchor="middle">Dokumen Klien Berpengendalian</text>
  <line x1="260" y1="115" x2="420" y2="115" stroke="#334155"/>
  <text x="340" y="140" fill="#cbd5e1" font-size="10" text-anchor="middle">• Inspeksi Dokumen Eksternal</text>
  <text x="340" y="160" fill="#cbd5e1" font-size="9.5" text-anchor="middle">  (Faktur Vendor, Rekening Koran)</text>
  <text x="340" y="180" fill="#cbd5e1" font-size="10" text-anchor="middle">• Prosedur Analitis Substantif</text>

  <!-- Low Reliability -->
  <rect x="460" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="555" y="80" fill="#f43f5e" font-size="12" font-weight="700" text-anchor="middle">RENDAH (LOW)</text>
  <text x="555" y="102" fill="#f8fafc" font-size="10.5" font-weight="600" text-anchor="middle">Bukti Internal / Lisan</text>
  <line x1="475" y1="115" x2="635" y2="115" stroke="#334155"/>
  <text x="555" y="140" fill="#cbd5e1" font-size="10" text-anchor="middle">• Wawancara Lisan (Inquiry)</text>
  <text x="555" y="160" fill="#cbd5e1" font-size="10" text-anchor="middle">• Dokumen Internal Klien</text>
  <text x="555" y="178" fill="#cbd5e1" font-size="9.5" text-anchor="middle">  (Surat Jalan, Memo Internal)</text>
  <text x="555" y="195" fill="#fca5a5" font-size="9" text-anchor="middle">(Wajib dikoroborasi!)</text>
</svg>`;

export const TM6_READING: Reading = {
  tm: 6,
  title: 'Bukti Audit, 8 Jenis Prosedur Pengujian, & Kertas Kerja Audit',
  ref: 'Arens Ch. 7 | SA 500, SA 230',
  intro: 'Modul Pembelajaran Mendalam PBR I TM 6: Menguasai kriteria kecukupan (kuantitas) dan ketepatan (kualitas) bukti audit (SA 500), 8 jenis prosedur pengumpulan bukti audit, serta dokumentasi kertas kerja audit (Audit Working Papers) sesuai SA 230.',
  objectives: [
    'Menjelaskan konsep Bukti Audit yang Cukup dan Tepat (Sufficient Appropriate Audit Evidence).',
    'Membedakan dimensi Relevansi (Relevance) dan Keandalan (Reliability) bukti audit.',
    'Menguasai 8 jenis bukti audit: Pemeriksaan Fisik, Konfirmasi Eksternal, Dokumentasi/Inspeksi, Prosedur Analitis, Wawancara (Inquiry), Rekalkulasi, Pelaksanaan Ulang (Reperformance), dan Observasi.',
    'Membedakan teknik Tracing (Kelengkapan) vs Vouching (Keterjadian).',
    'Memahami tujuan, kepemilikan legal, dan periode retensi Kertas Kerja Audit (SA 230).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Hierarki Keandalan Bukti Audit Berdasarkan Sumber dan Pengendalian',
      svg: SVG_EVIDENCE_HIERARCHY,
      caption: 'Gambar 6.1: Tingkat persuasif berbagai jenis bukti audit menurut Standar Audit 500.'
    },

    { kind: 'h2', text: '1. Konsep Bukti yang Cukup & Tepat (SA 500)' },
    {
      kind: 'table',
      headers: ['Dimensi Bukti', 'Karakteristik Penilaian', 'Faktor Penentu'],
      rows: [
        ['Kecukupan (Sufficiency)', 'Ukuran **KUANTITAS** bukti audit yang dibutuhkan.', 'Dipengaruhi oleh Risiko Kesalahan Penyajian Material (makin tinggi risiko, makin banyak sampel yang dibutuhkan) dan kualitas bukti.'],
        ['Ketepatan (Appropriateness)', 'Ukuran **KUALITAS** bukti audit (Relevansi & Keandalan).', '• **Relevansi**: Memiliki hubungan logis dengan asersi yang diuji.\n• **Keandalan**: Dipengaruhi sumber (eksternal > internal), bentuk (asli > salinan), dan efektivitas pengendalian internal klien.']
      ],
      caption: 'Tabel 6.1: Dua dimensi evaluasi bukti audit.'
    },

    { kind: 'h2', text: '2. Delapan Jenis Bukti Audit (8 Audit Procedures)' },
    {
      kind: 'table',
      headers: ['Jenis Bukti Audit', 'Definisi Prosedur', 'Tingkat Keandalan', 'Asersi yang Diuji'],
      rows: [
        ['1. Pemeriksaan Fisik (Physical Examination)', 'Inspeksi atau penghitungan langsung aset berwujud (kas, emas, persediaan, aset tetap).', 'Sangat Tinggi', 'Keberadaan (Existence)'],
        ['2. Konfirmasi Eksternal (Confirmation)', 'Respons tertulis langsung dari pihak ketiga independen (bank, pelanggan, kreditor, pengacara).', 'Sangat Tinggi', 'Keberadaan, Hak & Kewajiban'],
        ['3. Dokumentasi / Inspeksi Dokumen', 'Pemeriksaan catatan transaksi (faktur, kontrak, surat jalan). Mencakup **Vouching** dan **Tracing**.', 'Sedang s.d Tinggi', 'Keterjadian, Kelengkapan, Akurasi'],
        ['4. Prosedur Analitis (Analytical Procedures)', 'Evaluasi informasi keuangan melalui analisis hubungan data keuangan dan non-keuangan.', 'Sedang', 'Kelengkapan, Penilaian'],
        ['5. Wawancara (Inquiry)', 'Pengajuan pertanyaan lisan atau tertulis kepada manajemen/personel klien.', 'Rendah (Harus dikoroborasi)', 'Pemahaman proses & niat'],
        ['6. Rekalkulasi (Recalculation)', 'Pengecekan ulang akurasi matematis atas dokumen/catatan (penjumlahan, depresiasi, amortisasi).', 'Sangat Tinggi', 'Akurasi (Accuracy)'],
        ['7. Pelaksanaan Kembali (Reperformance)', 'Pelaksanaan independen oleh auditor atas prosedur pengendalian internal klien.', 'Sangat Tinggi', 'Efektivitas Pengendalian'],
        ['8. Observasi (Observation)', 'Melihat langsung suatu proses atau prosedur yang sedang dilakukan oleh karyawan klien.', 'Sedang (Hanya berlaku saat diamati)', 'Kepatuhan Operasi']
      ],
      caption: 'Tabel 6.2: Matriks 8 jenis prosedur pengumpulan bukti audit.'
    },

    { kind: 'h2', text: '3. Dokumentasi Audit: Kertas Kerja Audit (SA 230)' },
    {
      kind: 'p',
      text: 'Kertas Kerja Audit (*Audit Working Papers*) adalah catatan catatan yang dibuat dan disimpan auditor mengenai prosedur yang dilakukan, bukti yang diperoleh, dan simpulan yang ditarik:'
    },
    {
      kind: 'ul',
      items: [
        '**Berkas Permanen (Permanent Files)**: Informasi yang berlaku untuk beberapa tahun audit (akta pendirian, bagan akun, kontrak sewa jangka panjang, bagan organisasi, riwayat pengendalian internal).',
        '**Berkas Tahun Berjalan (Current Files)**: Informasi yang relevan semata-mata untuk tahun yang diaudit (program audit, neraca saldo kerja / *Working Trial Balance*, rekonsiliasi bank, daftar penyesuaian/reklasifikasi).',
        '**Hak Kepemilikan & Kerahasiaan**: Kertas kerja adalah **milik sah KAP/Auditor**, bukan milik klien. Kertas kerja wajib dijaga kerahasiaannya dan disimpan sekurang-kurangnya **5 tahun** (atau sesuai ketentuan regulasi OJK/Kemenkeu).'
      ]
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 6' },
    {
      kind: 'ul',
      items: [
        '**Vouching**: Memeriksa dari buku besar ke faktur sumber $\\rightarrow$ Menguji **Keterjadian (Occurrence / Overstatement)**.',
        '**Tracing**: Memeriksa dari surat jalan/faktur ke buku besar $\\rightarrow$ Menguji **Kelengkapan (Completeness / Understatement)**.',
        '**Inquiry**: Tidak pernah cukup sebagai bukti audit tunggal tanpa bukti pendukung.',
        '**Kertas Kerja**: Menjadi bukti utama bahwa audit telah dilaksanakan sesuai Standar Audit (SA).'
      ]
    }
  ]
};