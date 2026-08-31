import type { Reading } from '../../../types';
import { CASE_NONPROFIT_ISAK35 } from '../aspPracticeCases';

const SVG_ISAK35_STRUCTURE = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">STRUKTUR LAPORAN KEUANGAN ENTITAS NONLABA (ISAK 35)</text>
  
  <rect x="30" y="55" width="185" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="122" y="80" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. Posisi Keuangan</text>
  <text x="122" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Neraca Nonlaba)</text>
  <line x1="40" y1="110" x2="205" y2="110" stroke="#334155"/>
  <text x="122" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Aset Lancar &amp; Tdk Lancar</text>
  <text x="122" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Liabilitas</text>
  <text x="122" y="168" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">• Aset Neto (Net Assets):</text>
  <text x="122" y="185" fill="#94a3b8" font-size="9" text-anchor="middle">  Terikat vs Tidak Terikat</text>

  <rect x="245" y="55" width="185" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="337" y="80" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">2. Penghasilan Komprehensif</text>
  <text x="337" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Laporan Aktivitas)</text>
  <line x1="255" y1="110" x2="420" y2="110" stroke="#334155"/>
  <text x="337" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Pendapatan Sumbangan</text>
  <text x="337" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Beban Program &amp; Layanan</text>
  <text x="337" y="168" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Reklasifikasi Aset Neto</text>
  <text x="337" y="188" fill="#34d399" font-size="9.5" font-weight="700" text-anchor="middle">Kenaikan/Penurunan Neto</text>

  <rect x="460" y="55" width="185" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="552" y="80" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="middle">3. Laporan Pendukung</text>
  <text x="552" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Arus Kas &amp; Catatan)</text>
  <line x1="470" y1="110" x2="635" y2="110" stroke="#334155"/>
  <text x="552" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Laporan Arus Kas</text>
  <text x="552" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">  (Operasi, Investasi, Dana)</text>
  <text x="552" y="168" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Catatan atas Lapkeu (CaLK)</text>
  <text x="552" y="188" fill="#fbbf24" font-size="9.5" text-anchor="middle">Pengungkapan Restriksi</text>
</svg>`;

export const TM2_READING: Reading = {
  tm: 2,
  title: 'Regulasi & Standar Organisasi Sektor Publik Non-Pemerintahan (ISAK 35)',
  ref: 'ISAK 35 | PSAK Terkait Organisasi Nonlaba | UU Yayasan & Ormas',
  intro: 'Modul Pembelajaran Mendalam Akuntansi Sektor Publik TM 2: Menguasai kerangka regulasi dan pelaporan keuangan entitas nonlaba non-pemerintah (Yayasan, Lembaga Swadaya Masyarakat / LSM, Lembaga Keagamaan, Rumah Sakit Swasta Non-Profit) berdasarkan ISAK 35 (menggantikan PSAK 45), klasifikasi Aset Neto Tanpa Pembatasan vs Dengan Pembatasan, serta penyusunan 4 komponen laporan keuangan nonlaba.',
  objectives: [
    'Memahami karakteristik entitas nonlaba: memperoleh sumber daya dari penyumbang yang tidak mengharapkan imbalan finansial.',
    'Menerapkan interpretasi ISAK 35 tentang Penyajian Laporan Keuangan Entitas Berorientasi Nonlaba.',
    'Membedakan 2 klasifikasi Aset Neto: Aset Neto Tanpa Pembatasan dari Pemberi Sumber Daya (*Without Donor Restrictions*) vs Aset Neto Dengan Pembatasan (*With Donor Restrictions*).',
    'Menyusun Laporan Posisi Keuangan, Laporan Penghasilan Komprehensif, Laporan Perubahan Aset Neto, dan Laporan Arus Kas Entitas Nonlaba.',
    'Memahami regulasi hukum UU Yayasan (UU No. 16/2001 jo. UU No. 28/2004) dan kewajiban audit publik.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Struktur Komponen Laporan Keuangan Entitas Nonlaba menurut ISAK 35',
      svg: SVG_ISAK35_STRUCTURE,
      caption: 'Gambar 2.1: Klasifikasi aset neto dan penyajian laporan keuangan nonlaba berbasis SAK.'
    },

    { kind: 'h2', text: '1. Transformasi PSAK 45 ke ISAK 35' },
    {
      kind: 'p',
      text: 'Sejak berlakunya **ISAK 35**, entitas berorientasi nonlaba menyajikan laporan keuangan dengan menggunakan kerangka SAK Umum atau SAK EMKM, dengan penyesuaian istilah pos-pos laporan keuangan untuk mencerminkan karakteristik nonlaba:'
    },
    {
      kind: 'table',
      headers: ['Istilah Entitas Bisnis Komersial', 'Padanan Istilah Entitas Nonlaba (ISAK 35)'],
      rows: [
        ['Neraca (Balance Sheet)', '**Laporan Posisi Keuangan (Statement of Financial Position)**'],
        ['Ekuitas Pemilik / Modal Saham', '**Aset Neto (Net Assets)**'],
        ['Laporan Laba Rugi', '**Laporan Penghasilan Komprehensif / Laporan Aktivitas**'],
        ['Laba Bersih Tahun Berjalan', '**Surplus / (Defisit) atau Kenaikan / (Penurunan) Aset Neto**']
      ],
      caption: 'Tabel 2.1: Penyesuaian nomenklatur laporan keuangan nonlaba.'
    },

    { kind: 'h2', text: '2. Dua Kategori Klasifikasi Aset Neto' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Klasifikasi Aset Neto Berdasarkan Pembatasan Donor (Donor Restrictions)',
      text: '1. **Aset Neto Tanpa Pembatasan (Without Donor Restrictions)**: Sumber daya yang penggunaannya tidak dibatasi oleh donor untuk tujuan atau periode waktu tertentu (bebas digunakan untuk operasional rutin yayasan).\n2. **Aset Neto Dengan Pembatasan (With Donor Restrictions)**: Sumber daya yang penggunaannya dibatasi oleh donor, mencakup pembatasan waktu (*Time Restrictions* - misal dana hanya boleh dibelanjakan tahun depan) atau pembatasan tujuan (*Purpose Restrictions* - misal dana riset kanker/beasiswa), serta pembatasan permanen (*Endowment Fund*).'
    },

    CASE_NONPROFIT_ISAK35,

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 2' },
    {
      kind: 'ul',
      items: [
        '**ISAK 35**: Tidak membuat standar akuntansi baru, melainkan memberikan pedoman penyesuaian judul laporan dan klasifikasi ekuitas menjadi Aset Neto.',
        '**Pelepasan Pembatasan**: Ketika syarat donor terpenuhi (misal beasiswa telah disalurkan), terjadi reklasifikasi dari Aset Neto Terikat ke Aset Neto Tidak Terikat.',
        '**Audit Yayasan**: Yayasan yang menerima sumbangan negara/masyarakat Rp 500jt atau aset > Rp 20 Miliar wajib diaudit akuntan publik dan diumumkan di koran.'
      ]
    }
  ]
};