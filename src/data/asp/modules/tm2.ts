import type { Reading } from '../../../types';
import { CASE_NONPROFIT_ISAK35 } from '../aspPracticeCases';

const SVG_ISAK35_STRUCTURE = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">STRUKTUR KLASIFIKASI ASET NETO ORGANISASI NIRLABA (ISAK 35)</text>
  
  <rect x="35" y="55" width="285" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="177" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">TANPA PEMBATASAN DARI PEMBERI DANA</text>
  <text x="177" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Without Donor Restrictions)</text>
  <text x="177" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Donasi umum bebas pemakaian</text>
  <text x="177" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Hasil usaha nirlaba / sewa aula</text>
  <text x="177" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Menanggung seluruh beban yayasan</text>
  <text x="177" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Fleksibilitas Operasional Penuh</text>

  <rect x="355" y="55" width="285" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="497" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">DENGAN PEMBATASAN DARI PEMBERI DANA</text>
  <text x="497" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(With Donor Restrictions)</text>
  <text x="497" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pembatasan Waktu (Time restriction)</text>
  <text x="497" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pembatasan Tujuan (Purpose restriction)</text>
  <text x="497" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Dana Abadi Pokok (Endowment)</text>
  <text x="497" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Wajib Reklasifikasi Saat Terpenuhi</text>
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
