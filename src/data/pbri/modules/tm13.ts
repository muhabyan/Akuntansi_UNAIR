import type { Reading } from '../../../types';
import { CASE_IT_AUDIT_CAATS } from '../pbriPracticeCases';

const SVG_IT_AUDIT_CONTROLS = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">STRUKTUR AUDIT TI: GENERAL CONTROLS (ITGC) VS APPLICATION CONTROLS (ITAC)</text>
  
  <rect x="30" y="55" width="295" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="177" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">IT GENERAL CONTROLS (ITGC)</text>
  <text x="177" y="98" fill="#94a3b8" font-size="9.5" text-anchor="middle">Pengendalian Umum Seluruh Sistem:</text>
  <text x="177" y="120" fill="#cbd5e1" font-size="9" text-anchor="middle">• Access Security (Password, 2FA, Firewall)</text>
  <text x="177" y="138" fill="#cbd5e1" font-size="9" text-anchor="middle">• Program Change Management (Testing kode)</text>
  <text x="177" y="156" fill="#cbd5e1" font-size="9" text-anchor="middle">• Computer Operations &amp; Backup Disasters</text>
  <text x="177" y="180" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">Fondasi Keamanan Sistem TI</text>

  <rect x="355" y="55" width="295" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="502" y="78" fill="#4ade80" font-size="11" font-weight="700" text-anchor="middle">IT APPLICATION CONTROLS (ITAC)</text>
  <text x="502" y="98" fill="#94a3b8" font-size="9.5" text-anchor="middle">Pengendalian pada Modul Transaksi Spesifik:</text>
  <text x="502" y="120" fill="#cbd5e1" font-size="9" text-anchor="middle">• Input Controls (Field check, Limit check)</text>
  <text x="502" y="138" fill="#cbd5e1" font-size="9" text-anchor="middle">• Processing Controls (Matching PO-GR-Inv)</text>
  <text x="502" y="156" fill="#cbd5e1" font-size="9" text-anchor="middle">• Output Controls (Validasi laporan cetak)</text>
  <text x="502" y="180" fill="#4ade80" font-size="9.5" font-weight="700" text-anchor="middle">Integritas Transaksi Akuntansi</text>
</svg>`;

export const TM13_READING: Reading = {
  tm: 13,
  title: 'Audit Lingkungan Sistem Informasi, ITGC vs ITAC, & TABK / CAATs',
  ref: 'Arens 16e Ch. 12 | SA 315 Lampiran TI | TABK (CAATs) Methodology',
  intro: 'TM 13 membahas pengauditan dalam lingkungan berbasis teknologi informasi: evaluasi Pengendalian Umum TI (IT General Controls / ITGC), Pengendalian Aplikasi TI (IT Application Controls / ITAC), serta penggunaan Teknik Audit Berbantuan Komputer (TABK / Computer-Assisted Audit Techniques - CAATs) seperti Test Data, Parallel Simulation, dan Embedded Audit Module.',
  objectives: [
    'Membedakan peran fondasional IT General Controls (ITGC) terhadap keandalan IT Application Controls (ITAC).',
    'Mengidentifikasi 3 kategori IT Application Controls: Input Controls, Processing Controls, dan Output Controls.',
    'Menerapkan 3 teknik utama TABK/CAATs (Test Data Approach, Parallel Simulation, Embedded Audit Module).',
    'Mengevaluasi dampak defisiensi ITGC terhadap strategi pengujian audit substantif.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 13.1: Hubungan ITGC dan ITAC dalam Arsitektur Pengendalian TI.',
      svg: SVG_IT_AUDIT_CONTROLS
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 13'
    },
    {
      kind: 'table',
      headers: ['Komponen Audit TI', 'Ruang Lingkup & Contoh Kontrol', 'Metode Pengujian Auditor', 'Dampak Jika Kontrol Gagal'],
      rows: [
        ['IT General Controls (ITGC)', 'Keamanan akses database, pengelolaan perubahan program aplikasi, backup data dan disaster recovery.', 'Inspeksi log otorisasi perubahan kode dan uji ketahanan hak akses pengguna.', 'Jika ITGC gagal -> Seluruh aplikasi otomatis TIDAK DAPAT DIANDALKAN!'],
        ['IT Application Controls (ITAC)', 'Kontrol validasi pada perangkat lunak akuntansi: Limit Check, Check Digit, Sequence Check, Automated Matching.', 'Test Data (menginput angka minus atau huruf pada kolom rupiah) dan observasi sistem.', 'Risiko transaksi ganda, salah input angka, atau pemrosesan pesanan tanpa plafon kredit.'],
        ['Teknik Test Data (TABK)', 'Auditor memasukkan data uji (dummy) ke sistem klien untuk menguji apakah program menolak data salah.', 'Menginput data transaksi valid dan tidak valid secara terencana.', 'Menguji secara langsung apakah logika program sistem beroperasi benar.'],
        ['Parallel Simulation (TABK)', 'Auditor menggunakan software independen (ACL/IDEA/Python) untuk memproses ulang data transaksi riil klien.', 'Mencocokkan hasil perhitungan program auditor vs laporan pembukuan klien.', 'Mendeteksi 100% anomali perhitungan amortisasi atau penyusutan aset secara masif.']
      ],
      caption: 'Tabel 13.0: Matriks pengendalian TI dan teknik audit berbantuan komputer.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Ketergantungan ITAC pada ITGC'
    },
    {
      kind: 'formula',
      text: `\\text{Prinsip Dasar Ketergantungan TI}:
\\text{ITGC Efektif (Keamanan & Perubahan Program Terjaga)} \\Longrightarrow \\text{ITAC dapat Diuji & Diandalkan Sepanjang Tahun}
\\text{ITGC Lemah (Akses Bebas / Tanpa Otorisasi Perubahan)} \\Longrightarrow \\mathbf{\\text{ITAC TIDAK BISA DIANDALKAN (Wajib Uji Substantif 100\\% Manual!)}}`,
      note: 'Jika programmer dapat langsung mengubah kode di server produksi tanpa persetujuan (ITGC lemah), program otomatis yang tampak sempurna sekalipun tidak boleh diandalkan.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Pemilihan Teknik TABK yang Tepat',
      prompt: 'Klien bank memiliki 10.000.000 transaksi bunga tabungan nasabah per tahun. Auditor ingin memverifikasi apakah perhitungan beban bunga tabungan pada seluruh rekening nasabah telah akurat. Teknik TABK mana yang paling tepat digunakan?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Teknik yang Tepat**: Parallel Simulation (Simulasi Paralel).',
            '**Alasan**: Auditor dapat mengekstrak seluruh data saldo harian nasabah, lalu menjalankan formula perhitungan bunga menggunakan software audit independen (seperti ACL atau script Python) dan membandingkan total beban bunga hasil simulasi dengan angka pembukuan bank. Hal ini memungkinkan verifikasi 100% populasi tanpa mengganggu operasional sistem perbankan.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 13'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'ITGC vs ITAC', 'Hierarki dan perbedaan ruang lingkup pengendalian umum vs aplikasi.', 'Mampu mengidentifikasi kelemahan kontrol pada sistem informasi akuntansi.'],
        ['2', '3 Kategori ITAC', 'Penerapan Input Controls, Processing Controls, dan Output Controls.', 'Mampu merancang validasi otomatis sistem untuk mencegah kesalahan input.'],
        ['3', '3 Teknik Utama TABK / CAATs', 'Metodologi Test Data, Parallel Simulation, dan Embedded Audit Module.', 'Mampu memilih teknik audit berbantuan komputer yang paling efisien.']
      ],
      caption: 'Tabel 13.2: Peta penguasaan submateri TM 13 PBR I.'
    },
    CASE_IT_AUDIT_CAATS,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Auditing Around vs Through the Computer**: Auditing Through the Computer (menguji logika program & kontrol TI) wajib diterapkan pada sistem terintegrasi modern, bukan hanya memeriksa dokumen fisik luar (around).',
        '**Audit Data Analytics (ADA)**: Pemanfaatan CAATs memungkinkan auditor menguji 100% populasi transaksi (Full Population Testing), mengurangi ketergantungan pada sampling tradisional.',
        '**Pembersihan Test Data**: Pada teknik Test Data, auditor wajib memastikan seluruh data transaksi uji coba dummy dihapus tuntas dari database klien setelah pengujian selesai.'
      ]
    }
  ]
};
