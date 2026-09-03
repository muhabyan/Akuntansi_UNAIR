import type { Reading } from '../../../types';
import { CASE_NONPROFIT_ISAK35 } from '../aspPracticeCases';

const SVG_ISAK35_STRUCTURE = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgAsp2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="unresGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="resGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgAsp2)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">KLASIFIKASI ASET NETO ENTITAS NONLABA BERDASARKAN ISAK 35 (PENGGANTI PSAK 45)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">ISAK 35 STRUCTURE</text>

  <!-- Left: Aset Neto Tanpa Pembatasan -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#unresGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="16" y="20" fill="#34d399" font-size="10.5" font-weight="800">1. ASET NETO TANPA PEMBATASAN (WITHOUT RESTRICTIONS)</text>
    
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">• Sumber: Pendapatan operasional rutin (SPP sekolah, biaya rawat RS, donasi umum)</text>
    <text class="svg-text" x="14" y="72" fill="#cbd5e1" font-size="8">• Penggunaan: Bebas digunakan oleh pengurus yayasan untuk operasional harian</text>
    <text class="svg-text" x="14" y="92" fill="#cbd5e1" font-size="8">• Tidak ada restriksi khusus dari donor pihak luar</text>
    <text class="svg-text" x="14" y="112" fill="#cbd5e1" font-size="8">• Menampung reklasifikasi dari aset neto dengan pembatasan yang telah terpenuhi</text>
    <text class="svg-text" x="14" y="132" fill="#cbd5e1" font-size="8">• Menanggung seluruh beban operasional yayasan/lembaga nirlaba</text>
    
    <rect class="svg-badge-green" x="14" y="175" width="367" height="30" rx="6" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="197" y="194" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Fleksibilitas Penuh Alokasi Manajemen Pengurus</text>
  </g>

  <!-- Right: Aset Neto Dengan Pembatasan -->
  <g transform="translate(470, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#resGrad)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="16" y="20" fill="#a78bfa" font-size="10.5" font-weight="800">2. ASET NETO DENGAN PEMBATASAN (WITH RESTRICTIONS)</text>
    
    <text class="text-accent-amber" x="14" y="50" fill="#fbbf24" font-size="8.5" font-weight="700">A. Pembatasan Waktu &amp; Tujuan Tertentu (Temporer):</text>
    <text class="svg-text" x="14" y="64" fill="#cbd5e1" font-size="7.5">• Donasi dana khusus beasiswa mahasiswa berprestasi tahun 2025</text>
    <text class="svg-text" x="14" y="78" fill="#cbd5e1" font-size="7.5">• Bantuan dana donor luar negeri khusus riset penanggulangan malaria</text>
    <text class="svg-text" x="14" y="92" fill="#cbd5e1" font-size="7.5">• Direklasifikasi ke "Tanpa Pembatasan" saat beasiswa dicairkan</text>

    <text class="text-accent-purple" x="14" y="116" fill="#a78bfa" font-size="8.5" font-weight="700">B. Pembatasan Abadi / Permanen (Endowment Fund / Dana Abadi):</text>
    <text class="svg-text" x="14" y="130" fill="#cbd5e1" font-size="7.5">• Pokok dana hibah abadi (Endowment) wajib dipertahankan utuh selamanya</text>
    <text class="svg-text" x="14" y="144" fill="#cbd5e1" font-size="7.5">• Hanya hasil imbal hasil investasi (Bunga/Kupon) yang boleh dibelanjakan</text>

    <rect class="svg-badge-purple" x="14" y="175" width="367" height="30" rx="6" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="197" y="194" fill="#a78bfa" font-size="8" font-weight="700" text-anchor="middle">Wajib Dilaporkan Terpisah Sesuai Amanah Pemberi Donor</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">ISAK 35 menyederhanakan klasifikasi PSAK 45 menjadi 2 pilar: Aset Neto Tanpa Pembatasan vs Aset Neto Dengan Pembatasan.</text>
</svg>`;

export const TM2_READING: Reading = {
  tm: 2,
  title: 'Regulasi & Standar Akuntansi Organisasi Nirlaba Non-Pemerintah (ISAK 35)',
  ref: 'ISAK 35 (Efektif 2020 menggantikan PSAK 45) | DSAK IAI | Format 4 Laporan Keuangan Nirlaba',
  intro: 'TM 2 membahas pelaporan keuangan entitas nonlaba non-pemerintahan (Yayasan, LSM, Organisasi Keagamaan, Rumah Sakit Swasta): implementasi ISAK 35 sebagai penyempurnaan atas PSAK 45, penyederhanaan klasifikasi aset neto menjadi dua kelompok (Dengan Pembatasan vs Tanpa Pembatasan), mekanisme reklasifikasi pembebasan aset neto, serta susunan 4 laporan keuangan utama.',
  objectives: [
    'Memahami latar belakang pergantian PSAK 45 menjadi ISAK 35 oleh Ikatan Akuntan Indonesia (IAI).',
    'Mengklasifikasikan aset neto: Tanpa Pembatasan dari Pemberi Sumber Daya vs Dengan Pembatasan.',
    'Mencatat jurnal reklasifikasi pembebasan pembatasan aset neto saat persyaratan program terpenuhi.',
    'Menyusun Laporan Posisi Keuangan, Laporan Penghasilan Komprehensif, Laporan Perubahan Aset Neto, dan Laporan Arus Kas nirlaba.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 2.1: Klasifikasi Aset Neto menurut Interpretasi Standar Akuntansi Keuangan (ISAK 35).',
      svg: SVG_ISAK35_STRUCTURE
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 2'
    },
    {
      kind: 'table',
      headers: ['Laporan Keuangan ISAK 35', 'Komponen Pokok Penyajian', 'Karakteristik Unik Nirlaba', 'Padanan di Sektor Komersial'],
      rows: [
        ['Laporan Posisi Keuangan', 'Aset Lancar & Tidak Lancar, Liabilitas, Aset Neto (Tanpa & Dengan Pembatasan).', 'Pos Ekuitas digantikan oleh Aset Neto (Net Assets).', 'Neraca (Balance Sheet).'],
        ['Laporan Penghasilan Komprehensif', 'Pendapatan Donasi, Pendapatan Layanan, Beban Program, Beban Administrasi.', 'Menyajikan baris Reklasifikasi Pembebasan Aset Neto.', 'Laporan Laba Rugi Komprehensif.'],
        ['Laporan Perubahan Aset Neto', 'Kenaikan/penurunan saldo aset neto terikat dan tidak terikat selama periode.', 'Memperlihatkan pergerakan pemenuhan janji donasi.', 'Laporan Perubahan Ekuitas.'],
        ['Laporan Arus Kas', 'Arus Kas Aktivitas Operasi, Investasi, dan Pendanaan.', 'Sumbangan kas untuk aset tetap/dana abadi masuk aktivitas pendanaan.', 'Laporan Arus Kas Komersial.']
      ],
      caption: 'Tabel 2.0: Matriks 4 laporan keuangan organisasi nirlaba menurut ISAK 35.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Mekanisme Reklasifikasi ISAK 35'
    },
    {
      kind: 'formula',
      text: `\\text{Aset Neto Total} = \\text{Aset Neto Tanpa Pembatasan} + \\text{Aset Neto Dengan Pembatasan}
\\text{Jurnal Pembebasan Pembatasan (Saat Biaya Program Terpenuhi)}:
\\text{Debit: Beban Program / Proyek} \\quad \\text{Kredit: Kas} \\quad \\text{(Mengurangi Aset Neto Tanpa Pembatasan)}
\\text{Jurnal Reklasifikasi: Debit Aset Neto Dengan Pembatasan} \\quad \\text{Kredit Aset Neto Tanpa Pembatasan}`,
      note: 'Seluruh beban operasional yayasan HANYA boleh disajikan mengurangi Aset Neto Tanpa Pembatasan; beban tidak pernah mengurangi Aset Neto Dengan Pembatasan secara langsung.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Perlakuan Hibah Pembelian Ambulans',
      prompt: 'Yayasan menerima donasi tunai Rp 600.000.000 dari perusahaan yang disyaratkan HANYA boleh dipakai untuk membeli mobil ambulans. Tiga bulan kemudian, mobil ambulans dibeli seharga Rp 600.000.000. Bagaimana jurnal dan penyajiannya menurut ISAK 35?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Saat Menerima Kas**: Diakui sebagai Kas (Debit) dan Pendapatan Donasi Dengan Pembatasan (Kredit) sebesar Rp 600.000.000.',
            '**2. Saat Ambulans Dibeli**: Mobil ambulans dikapitalisasi sebagai Aset Tetap Ambulans (Debit) dan Kas berkurang (Kredit) sebesar Rp 600.000.000.',
            '**3. Reklasifikasi Aset Neto**: Terjadi reklasifikasi dari Aset Neto Dengan Pembatasan ke Aset Neto Tanpa Pembatasan sebesar Rp 600.000.000 karena syarat pembelian donor telah dipenuhi.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 2'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Transisi PSAK 45 ke ISAK 35', 'Penyederhanaan dari 3 kategori (Permanen, Temporer, Tidak Terikat) ke 2 kategori.', 'Mampu mengidentifikasi perubahan terminologi standar nirlaba.'],
        ['2', 'Klasifikasi Donasi & Pembatasan', 'Kriteria donasi terikat waktu, terikat tujuan, dan dana abadi.', 'Mampu menggolongkan donasi ke pos aset neto yang tepat.'],
        ['3', 'Laporan Keuangan Lengkap Nirlaba', 'Penyusunan format 4 laporan keuangan sesuai ISAK 35.', 'Mampu menyusun laporan posisi keuangan dan komprehensif nirlaba.']
      ],
      caption: 'Tabel 2.2: Peta penguasaan submateri TM 2 Akuntansi Sektor Publik.'
    },
    CASE_NONPROFIT_ISAK35,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Aset Neto Bukan Ekuitas**: Organisasi nirlaba tidak memiliki modal saham dan tidak membagikan dividen; hak residualnya diklasifikasikan sebagai Aset Neto.',
        '**ISAK 35 Berlaku Luas**: Berlaku untuk seluruh entitas yang tidak berorientasi laba tanpa memandang bentuk badan hukum (yayasan, perkumpulan, ormas, partai politik).',
        '**Jasa Relawan (Contributed Services)**: Jasa tenaga sukarela hanya boleh dicatat sebagai aset/beban dan pendapatan jika jasa tersebut membutuhkan keahlian khusus dan wajar dibayar (contoh: jasa hukum pengacara atau dokter).'
      ]
    }
  ]
};
