import type { Reading } from '../../../types';
import {
  CASE_WARRANTY_PROVISION,
} from '../akm2PracticeCases';

const SVG_PROVISION_DECISION = `
<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="230" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#f59e0b" font-size="13" font-weight="700" text-anchor="middle">POHON KEPUTUSAN PENGAKUAN PROVISI &amp; KONTINJENSI (PSAK 57)</text>

  <!-- Step 1 -->
  <rect x="30" y="55" width="180" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="120" y="75" fill="#f1f5f9" font-size="10.5" font-weight="600" text-anchor="middle">Kewajiban Kini?</text>
  <text x="120" y="88" fill="#94a3b8" font-size="9" text-anchor="middle">(Hukum / Konstruktif)</text>

  <!-- Step 2 -->
  <rect x="250" y="55" width="180" height="40" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="340" y="75" fill="#f1f5f9" font-size="10.5" font-weight="600" text-anchor="middle">Arus Keluar Probable?</text>
  <text x="340" y="88" fill="#94a3b8" font-size="9" text-anchor="middle">(Kemungkinan &gt; 50%)</text>

  <!-- Step 3 -->
  <rect x="470" y="55" width="180" height="40" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="560" y="75" fill="#f1f5f9" font-size="10.5" font-weight="600" text-anchor="middle">Estimasi Andal?</text>
  <text x="560" y="88" fill="#94a3b8" font-size="9" text-anchor="middle">(Reliable Estimate)</text>

  <!-- Outcome 1: PROVISION -->
  <rect x="470" y="130" width="180" height="90" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
  <text x="560" y="155" fill="#34d399" font-size="12" font-weight="800" text-anchor="middle">AKUI PROVISI (NERACA)</text>
  <text x="560" y="175" fill="#ecfdf5" font-size="9.5" text-anchor="middle">• Jurnal Beban vs Provisi</text>
  <text x="560" y="195" fill="#ecfdf5" font-size="9.5" text-anchor="middle">• Ungkapkan rincian di CALK</text>

  <!-- Outcome 2: CONTINGENT LIABILITY -->
  <rect x="250" y="130" width="180" height="90" rx="8" fill="#451a03" stroke="#f59e0b" stroke-width="2"/>
  <text x="340" y="155" fill="#fbbf24" font-size="11.5" font-weight="800" text-anchor="middle">LIABILITAS KONTINJENSI</text>
  <text x="340" y="175" fill="#fef3c7" font-size="9.5" text-anchor="middle">• HANYA Ungkap di CALK</text>
  <text x="340" y="195" fill="#fef3c7" font-size="9.5" text-anchor="middle">• TIDAK Dijurnal di Neraca</text>

  <!-- Outcome 3: REMOTE -->
  <rect x="30" y="130" width="180" height="90" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
  <text x="120" y="155" fill="#94a3b8" font-size="11.5" font-weight="800" text-anchor="middle">KEMUNGKINAN REMOTE</text>
  <text x="120" y="175" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Kemungkinan Kecil (&lt; 5%)</text>
  <text x="120" y="195" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• TIDAK Perlu Diungkap</text>
</svg>`;

export const TM7_READING: Reading = {
  tm: 7,
  title: 'Provisi, Liabilitas Kontinjensi, Aset Kontinjensi, dan Garansi Produk',
  ref: 'Kieso IFRS 5e Ch. 13 | PSAK 57',
  intro: 'TM 7 mengupas 3 kriteria mutlak pengakuan Provisi (PSAK 57), akuntansi garansi produk (Metode Beban Jaminan vs Metode Pendapatan Jaminan Terpisah), program loyalitas kupon/premi, provisi kontrak memberatkan (Onerous Contracts), serta batas ketat pengungkapan kontinjensi.',
  objectives: [
    'Menerapkan 3 kriteria pengakuan Provisi menurut PSAK 57 (Kewajiban Kini, Arus Keluar Probable, Estimasi Andal).',
    'Membedakan perlakuan akuntansi Garansi Jaminan Kualitas (Assurance-Type Warranty) vs Garansi Jasa Tambahan (Service-Type Warranty).',
    'Menghitung dan menjurnal Provisi Premi dan Poin Hadiah Pelanggan.',
    'Memahami perlakuan Kontrak yang Memberatkan (Onerous Contracts) dan Provisi Restrukturisasi Perusahaan.',
    'Membedakan penyajian Liabilitas Kontinjensi (CALK) vs Aset Kontinjensi (hanya diungkap jika virtually certain/probable).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Pohon Keputusan Pengakuan Provisi & Kontinjensi Sesuai PSAK 57',
      svg: SVG_PROVISION_DECISION,
      caption: 'Gambar 7.1: Alur penentuan apakah suatu kewajiban dicatat di neraca, diungkap di CALK, atau diabaikan.'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat TM 7'
    },
    {
      kind: 'table',
      headers: ['Tahap', 'Fokus Analisis', 'Pertanyaan Kunci Mahasiswa', 'Output yang Dikuasai'],
      rows: [
        ['1', 'Uji 3 Kriteria PSAK 57', 'Apakah ada kewajiban kini, kemungkinan > 50%, dan dapat diukur andal?', 'Memutuskan pencatatan sebagai Provisi (neraca) vs Kontinjensi (CALK).'],
        ['2', 'Garansi Kualitas vs Jasa', 'Apakah garansi melekat pada produk (assurance) atau dibeli terpisah (service)?', 'Mendebit Beban Garansi vs menangguhkan Pendapatan Garansi Belum Dihasilkan.'],
        ['3', 'Premi & Poin Loyalitas', 'Berapa estimasi persentase kupon yang akan ditukarkan pelanggan di masa depan?', 'Mencatat Provisi Hadiah dan Liabilitas Poin Hadiah.'],
        ['4', 'Onerous Contracts', 'Apakah biaya tak terhindarkan untuk memenuhi kontrak melebihi manfaat ekonominya?', 'Mengakui provisi kontrak memberatkan sebesar nilai terendah penalti vs rugi kontrak.'],
        ['5', 'Aset Kontinjensi', 'Apakah klaim laba masa depan berstatus virtually certain atau probable?', 'Menerapkan prinsip kehati-hatian: dilarang mengakui aset kontinjensi di neraca.']
      ],
      caption: 'Tabel 7.0: Roadmap belajar provisi, kontinjensi, dan garansi.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi TM 7'
    },
    {
      kind: 'formula',
      text: 'Beban Garansi Kualitas = \\text{Total Penjualan Unit Periode Berjalan} \\times \\text{Estimasi % Biaya Perbaikan Garansi}',
      note: 'Diakui pada periode penjualan (prinsip penandingan matching principle). Saat klaim servis terjadi, mendebit Provisi Garansi dan mengkredit Kas/Persediaan Suku Cadang.'
    },
    {
      kind: 'formula',
      text: 'Nilai Provisi Terbaik (Best Estimate) = \\begin{cases} \\text{Expected Value (Probabilitas Tertimbang)}, & \\text{Populasi besar (Garansi/Premi)} \\ \\text{Titik Paling Probable / Titik Tengah Rentang}, & \\text{Kewajiban tunggal (Gugatan hukum)} \\end{cases}',
      note: 'Jika terdapat rentang nilai yang sama-sama mungkin terjadi, ambil TITIK TENGAH (Midpoint) rentang tersebut.'
    },
    {
      kind: 'example',
      title: 'Contoh Mini Numerik: Akuntansi Garansi Laptop PT Zyrex Indonesia Tbk',
      blocks: [
        {
          kind: 'p',
          text: 'PT Zyrex menjual 1.000 unit laptop selama tahun 2026 seharga Rp 8.000.000/unit (Total Penjualan: Rp 8.000.000.000). Setiap laptop bergaransi perbaikan cacat pabrik 1 tahun (Assurance-Type). Manajemen mengestimasi biaya garansi adalah 4% dari total penjualan. Sepanjang tahun 2026, biaya klaim suku cadang dan upah teknisi aktual yang dikeluarkan adalah Rp 190.000.000.'
        },
        {
          kind: `formula`,
          text: `Estimasi Total Beban Garansi 2026 = 4% × 8.000.000.000 = Rp 320.000.000
Klaim Garansi Aktual Terjadi = Rp 190.000.000
Saldo Akhir Provisi Garansi di Neraca per 31 Des 2026 = 320.000.000 - 190.000.000 = Rp 130.000.000`
        },
        {
          kind: 'callout',
          variant: 'key',
          title: `Jurnal Akuntansi PT Zyrex`,
          text: `1. Pengakuan Beban Garansi saat Penjualan:
Debit: Beban Garansi Rp 320.000.000
Kredit: Provisi Garansi (Liabilitas) Rp 320.000.000

2. Realisasi Klaim Servis Aktual:
Debit: Provisi Garansi Rp 190.000.000
Kredit: Persediaan Suku Cadang & Kas Rp 190.000.000`
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Aktif: Evaluasi Kasus Gugatan Hukum Lingkungan Hidup',
      prompt: 'PT Kimia Sejahtera digugat oleh masyarakat sekitar pabrik atas dugaan pencemaran limbah sebesar Rp 2.000.000.000. Penasihat hukum independen menyatakan bahwa kemungkinan kalah di pengadilan adalah 70% (probable), dan estimasi ganti rugi yang kemungkinan besar diputuskan hakim berada pada rentang Rp 800.000.000 s.d Rp 1.400.000.000 tanpa ada angka tunggal yang paling diunggulkan. Bagaimana perlakuan akuntansinya?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Status Kewajiban**: Wajib diakui sebagai **PROVISI DI NERACA** (karena memenuhi 3 syarat: ada peristiwa masa lalu pencemaran, kemungkinan keluar kas 70% > 50%, dan ada rentang estimasi andal).',
            `**Penentuan Angka Provisi**: Karena semua titik dalam rentang sama kemungkinannya, ambil **TITIK TENGAH (Midpoint)**: (800 jt + 1.400 jt) / 2 = **Rp 1.100.000.000**.`,
            `**Jurnal Akuntansi per 31 Desember**:
Debit: Beban Kerugian Gugatan Hukum (Laba Rugi) Rp 1.100.000.000
Kredit: Provisi Gugatan Hukum (Liabilitas) Rp 1.100.000.000`,
            '**CALK**: Mengungkapkan rincian gugatan, dasar estimasi rentang, dan potensi liabilitas kontinjensi sisa sebesar Rp 300 jt (hingga batas atas Rp 1,4 M).'
          ]
        },
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Jebakan UTS PSAK 57',
          text: 'Jika kemungkinan kalah pengadilan hanya "Possible" (misal 30-40%), DILARANG MENJURNAL PROVISI DI NERACA! Cukup diungkapkan sebagai Liabilitas Kontinjensi di Catatan atas Laporan Keuangan (CALK).'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan TM 7'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Kriteria Pengakuan Provisi PSAK 57', '3 syarat mutlak: kewajiban kini, aliran keluar probable, estimasi andal.', 'Mampu mengklasifikasikan kasus sengketa/gugatan ke provisi vs kontinjensi.'],
        ['2', 'Metode Akuntansi Garansi Produk', 'Assurance-Type (Beban Garansi) vs Service-Type (Pendapatan Garansi Tangguhan).', 'Menghitung beban garansi dan menjurnal klaim perbaikan suku cadang.'],
        ['3', 'Provisi Kupon Premi & Hadiah', 'Estimasi persentase penukaran kupon dan perhitungan liabilitas hadiah.', 'Menyusun skedul biaya promosi dan jurnal provisi hadiah.'],
        ['4', 'Kontrak Memberatkan (Onerous)', 'Kalkulasi nilai terendah antara penalti pembatalan vs kerugian pelaksanaan kontrak.', 'Menjurnal pengakuan provisi kontrak memberatkan di laba rugi.'],
        ['5', 'Aset & Liabilitas Kontinjensi', 'Prinsip asimetri pengakuan: konservatisme pada aset vs pengungkapan penuh liabilitas.', 'Menyusun paragraf pengungkapan resmi di CALK.']
      ],
      caption: 'Tabel 7.1: Matriks kompetensi komprehensif materi TM 7 AKM II.'
    },
    { kind: 'h2', text: '1. Pengakuan Provisi & Garansi Produk' },
    {
      kind: 'p',
      text: '==Provisi adalah liabilitas yang waktu atau jumlahnya belum pasti. Entitas mengakui provisi ketika terdapat kewajiban kini akibat peristiwa masa lalu, penyelesaiannya kemungkinan besar mengakibatkan arus keluar kas, dan estimasi andal dapat dibuat.=='
    },
    CASE_WARRANTY_PROVISION,
    { kind: 'h2', text: '2. Rangkuman & Kunci Penguasaan Ujian (Key Takeaways)' },
    {
      kind: 'ul',
      items: [
        '**3 Syarat Provisi**: Kewajiban kini (hukum/konstruktif) + Probable (>50%) + Estimasi andal.',
        '**Garansi Servis Terpisah**: Dicatat sebagai pendapatan tangguhan dan diakui bertahap sepanjang masa servis.',
        '**Rentang Estimasi Provisi**: Ambil nilai titik tengah (midpoint) jika semua nilai sama-sama mungkin terjadi.',
        `**Aset Kontinjensi**: TIDAK BOLEH diakui di neraca sampai realisasi kas praktis pasti (virtually certain).`
      ]
    }
  ]
};
