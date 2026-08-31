import type { Reading } from '../../../types';

const SVG_MANAGEMENT_ASSERTIONS = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">ASERSI MANAJEMEN SESUAI SA 315 (REVISI)</text>
  
  <!-- Golongan Transaksi -->
  <rect x="30" y="55" width="185" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="122" y="80" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">1. Golongan Transaksi</text>
  <text x="122" y="102" fill="#cbd5e1" font-size="10" text-anchor="middle">• Keterjadian (Occurrence)</text>
  <text x="122" y="122" fill="#cbd5e1" font-size="10" text-anchor="middle">• Kelengkapan (Completeness)</text>
  <text x="122" y="142" fill="#cbd5e1" font-size="10" text-anchor="middle">• Akurasi (Accuracy)</text>
  <text x="122" y="162" fill="#cbd5e1" font-size="10" text-anchor="middle">• Pisah Batas (Cutoff)</text>
  <text x="122" y="182" fill="#cbd5e1" font-size="10" text-anchor="middle">• Klasifikasi (Classification)</text>

  <!-- Saldo Akun -->
  <rect x="245" y="55" width="185" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="337" y="80" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">2. Saldo Akun Akhir</text>
  <text x="337" y="102" fill="#cbd5e1" font-size="10" text-anchor="middle">• Keberadaan (Existence)</text>
  <text x="337" y="122" fill="#cbd5e1" font-size="10" text-anchor="middle">• Hak &amp; Kewajiban (R&amp;O)</text>
  <text x="337" y="142" fill="#cbd5e1" font-size="10" text-anchor="middle">• Kelengkapan (Completeness)</text>
  <text x="337" y="162" fill="#cbd5e1" font-size="10" text-anchor="middle">• Penilaian &amp; Alokasi</text>
  <text x="337" y="182" fill="#cbd5e1" font-size="10" text-anchor="middle">  (Valuation &amp; Allocation)</text>

  <!-- Penyajian & Pengungkapan -->
  <rect x="460" y="55" width="185" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="552" y="80" fill="#f59e0b" font-size="11.5" font-weight="700" text-anchor="middle">3. Penyajian &amp; Pengungkapan</text>
  <text x="552" y="102" fill="#cbd5e1" font-size="10" text-anchor="middle">• Keterjadian &amp; Hak</text>
  <text x="552" y="122" fill="#cbd5e1" font-size="10" text-anchor="middle">• Kelengkapan (Completeness)</text>
  <text x="552" y="142" fill="#cbd5e1" font-size="10" text-anchor="middle">• Klasifikasi &amp; Keterpahaman</text>
  <text x="552" y="162" fill="#cbd5e1" font-size="10" text-anchor="middle">• Akurasi &amp; Penilaian</text>
  <text x="552" y="182" fill="#cbd5e1" font-size="10" text-anchor="middle">• Ketepatan Deskripsi</text>
</svg>`;

export const TM3_READING: Reading = {
  tm: 3,
  title: 'Tanggung Jawab Audit, Skeptisisme Profesional, & Asersi Manajemen',
  ref: 'Arens Ch. 6 | SA 200, SA 315 Revisi',
  intro: 'Modul Pembelajaran Mendalam PBR I TM 3: Menguasai pembagian tanggung jawab manajemen vs auditor independen (SA 200), sikap skeptisisme profesional dan pertimbangan profesional (*professional judgment*), asersi manajemen atas transaksi, saldo akun, serta pengungkapan (SA 315 Revisi).',
  objectives: [
    'Membedakan tanggung jawab manajemen (penyusunan laporan & pengendalian internal) vs tanggung jawab auditor (perumusan opini independen).',
    'Memahami konsep Skeptisisme Profesional (sikap selalu mempertanyakan dan waspada terhadap bukti yang saling bertentangan).',
    'Mengidentifikasi keterbatasan bawaan audit (Inherent Limitations of Audit).',
    'Menguasai asersi manajemen golongan transaksi (Keterjadian, Kelengkapan, Akurasi, Pisah Batas, Klasifikasi).',
    'Menguasai asersi manajemen saldo akun (Keberadaan, Hak & Kewajiban, Kelengkapan, Penilaian & Alokasi).',
    'Merumuskan tujuan audit khusus berdasarkan asersi manajemen.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Peta Asersi Manajemen menurut SA 315 Revisi',
      svg: SVG_MANAGEMENT_ASSERTIONS,
      caption: 'Gambar 3.1: Tiga kelompok asersi implisit dan eksplisit manajemen dalam laporan keuangan.'
    },

    { kind: 'h2', text: '1. Tanggung Jawab Manajemen vs Tanggung Jawab Auditor (SA 200)' },
    {
      kind: 'table',
      headers: ['Pihak yang Bertanggung Jawab', 'Lingkup Tanggung Jawab Utama'],
      rows: [
        ['Manajemen & TCWG (Those Charged with Governance)', '1. Menyusun laporan keuangan sesuai Standar Akuntansi Keuangan (SAK/IFRS).\n2. Merancang, mengimplementasikan, dan memelihara pengendalian internal yang relevan.\n3. Memberikan akses penuh kepada auditor atas seluruh catatan, data, dan personel entitas.'],
        ['Auditor Independen', '1. Memperoleh **Keyakinan Memadai (Reasonable Assurance)** bahwa laporan keuangan secara keseluruhan bebas dari kesalahan penyajian material (baik karena kecurangan maupun kekeliruan).\n2. Menerbitkan **Laporan Auditor Independen** yang memuat opini objektif berdasarkan bukti audit yang cukup dan tepat.']
      ],
      caption: 'Tabel 3.1: Pembagian tanggung jawab menurut SA 200.'
    },

    { kind: 'h2', text: '2. Skeptisisme Profesional (Professional Skepticism)' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Definisi & Penerapan SA 200',
      text: 'Skeptisisme profesional adalah sikap yang mencakup **pikiran yang selalu mempertanyakan (*questioning mind*)**, waspada terhadap kondisi yang dapat mengindikasikan kemungkinan salah saji karena kecurangan atau kekeliruan, dan **penilaian kritis terhadap bukti audit**.\n\n*Prinsip penting:* Auditor tidak mengasumsikan manajemen tidak jujur, tetapi juga tidak mengasumsikan kejujuran tanpa bukti yang sahih.'
    },

    { kind: 'h2', text: '3. Asersi Manajemen & Pengujian Audit' },
    {
      kind: 'table',
      headers: ['Kategori Asersi', 'Asersi Kunci', 'Makna & Risiko Salah Saji Utama'],
      rows: [
        ['Transaksi Laba Rugi', 'Keterjadian (Occurrence)', 'Transaksi yang dicatat benar-benar terjadi dan berkaitan dengan entitas. *(Risiko: Pencatatan omzet fiktif/overstatement)*.'],
        ['Transaksi Laba Rugi', 'Kelengkapan (Completeness)', 'Seluruh transaksi yang seharusnya dicatat telah dimasukkan. *(Risiko: Penyembunyian beban/understatement)*.'],
        ['Transaksi Laba Rugi', 'Pisah Batas (Cutoff)', 'Transaksi dicatat pada periode akuntansi yang tepat (tidak dicatat mendahului atau menunda tanggal faktur).'],
        ['Saldo Neraca', 'Keberadaan (Existence)', 'Aset, liabilitas, dan ekuitas yang tercatat benar-benar ada secara fisik/legal pada tanggal neraca.'],
        ['Saldo Neraca', 'Hak & Kewajiban (Rights & Obligations)', 'Entitas memiliki hak legal atas aset yang dicatat dan liabilitas merupakan kewajiban sah entitas.'],
        ['Saldo Neraca', 'Penilaian & Alokasi (Valuation & Allocation)', 'Aset dan liabilitas dicatat pada jumlah yang tepat (termasuk cadangan kerugian piutang dan depresiasi).']
      ],
      caption: 'Tabel 3.2: Hubungan asersi manajemen dengan risiko audit spesifik.'
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 3' },
    {
      kind: 'ul',
      items: [
        '**Occurrence vs Existence**: Keterjadian untuk transaksi arus kas/laba rugi; Keberadaan untuk saldo akun neraca fisik.',
        '**Completeness vs Occurrence**: Menguji Kelengkapan bergerak dari dokumen sumber (faktur) ke buku jurnal (Tracer); menguji Keterjadian bergerak dari buku jurnal ke dokumen sumber (Voucher).',
        '**Cutoff**: Memeriksa transaksi beberapa hari sebelum dan sesudah 31 Desember.'
      ]
    }
  ]
};