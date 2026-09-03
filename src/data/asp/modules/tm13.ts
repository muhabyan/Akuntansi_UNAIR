import type { Reading } from '../../../types';
import { CASE_BLU_BLUD_FLEXIBILITY } from '../aspPracticeCases';

const SVG_BLU_STRUCTURE = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgAsp13" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="bluGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="flexGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgAsp13)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">POLA PENGELOLAAN KEUANGAN BADAN LAYANAN UMUM / DAERAH: BLU &amp; BLUD (PP 23/2005 &amp; PP 74/2012)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">BLU / BLUD</text>

  <!-- Left: Hakikat & Ciri Khas BLU -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#bluGrad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="16" y="20" fill="#38bdf8" font-size="10.5" font-weight="800">1. HAKIKAT &amp; KARAKTERISTIK BADAN LAYANAN UMUM</text>
    
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-blue" fill="#38bdf8" font-weight="700">Definisi:</tspan> Instansi pemerintah yang dibentuk untuk memberikan pelayanan barang/jasa publik tanpa mengutamakan mencari keuntungan</text>
    <text class="svg-text" x="14" y="82" fill="#cbd5e1" font-size="8">• Beroperasi dengan prinsip efisiensi dan produktivitas ala korporasi bisnis (Enterprising the Government)</text>
    <text class="svg-text" x="14" y="106" fill="#cbd5e1" font-size="8">• Contoh BLU Pusat: PTN-BLU (UGM, UI sebelum PTNBH), RSUP Nasional</text>
    <text class="svg-text" x="14" y="124" fill="#cbd5e1" font-size="8">• Contoh BLUD Daerah: RSUD Kabupaten/Kota, Puskesmas</text>
    <text class="svg-text" x="14" y="142" fill="#cbd5e1" font-size="8">• Bukan merupakan kekayaan negara yang dipisahkan (Tetap bagian K/L/Pemda)</text>
    
    <rect class="svg-badge-blue" x="14" y="175" width="367" height="30" rx="6" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="197" y="194" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Birokrasi Rasa Korporasi untuk Peningkatan Mutu Layanan</text>
  </g>

  <!-- Right: 5 Fleksibilitas Keuangan BLU -->
  <g transform="translate(470, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#flexGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="16" y="20" fill="#34d399" font-size="10.5" font-weight="800">2. 5 FLEKSIBILITAS PENGELOLAAN KEUANGAN BLU</text>
    
    <text class="text-accent-green" x="14" y="50" fill="#34d399" font-size="8" font-weight="700">• Pendapatan Langsung Digunakan:</text>
    <text class="svg-text" x="14" y="64" fill="#cbd5e1" font-size="7.5">PNBP layanan dapat dibelanjakan langsung tanpa harus disetor dulu ke Kas Negara</text>

    <text class="text-accent-green" x="14" y="82" fill="#34d399" font-size="8" font-weight="700">• Fleksibilitas Anggaran (Ambang Batas Belanja):</text>
    <text class="svg-text" x="14" y="96" fill="#cbd5e1" font-size="7.5">Belanja boleh melampaui pagu awal sepanjang pendapatan riil naik sesuai RBA</text>

    <text class="text-accent-green" x="14" y="114" fill="#34d399" font-size="8" font-weight="700">• Remunerasi Kinerja Non-PNS:</text>
    <text class="svg-text" x="14" y="128" fill="#cbd5e1" font-size="7.5">Berhak menggaji tenaga profesional non-PNS &amp; memberi insentif remunerasi</text>

    <text class="text-accent-green" x="14" y="146" fill="#34d399" font-size="8" font-weight="700">• Pengelolaan Kas &amp; Investasi Jangka Pendek:</text>
    <text class="svg-text" x="14" y="160" fill="#cbd5e1" font-size="7.5">Saldo kas idle dapat didepositokan atau dibelikan Surat Berharga Negara (SBN)</text>

    <rect class="svg-badge-green" x="14" y="175" width="367" height="30" rx="6" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="197" y="194" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Wajib Menyusun 2 Laporan: Berbasis SAP &amp; Berbasis SAK</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">BLU wajib menyusun Rencana Bisnis dan Anggaran (RBA) serta laporan keuangan ganda: SAP untuk konsolidasi dan SAK untuk kinerja.</text>
</svg>`;

export const TM13_READING: Reading = {
  tm: 13,
  title: 'Pengelolaan Keuangan Badan Layanan Umum (BLU & BLUD: Kasus RSUD & PTN-BH)',
  ref: 'PP 23/2005 jo PP 74/2012 BLU | Permendagri 79/2018 BLUD | Fleksibilitas Pengelolaan Keuangan',
  intro: 'TM 13 membahas Pola Pengelolaan Keuangan Badan Layanan Umum (PPK-BLU) di tingkat pusat dan PPK-BLUD di tingkat daerah: landasan pembentukan unit quasi-pemerintah berorientasi layanan, fleksibilitas pendapatan (Direct Spending), fleksibilitas belanja dengan ambang batas (Flexibility Budget), pengelolaan kas dan investasi jangka pendek, penyusunan Rencana Bisnis dan Anggaran (RBA), serta skema remunerasi berbasis kinerja.',
  objectives: [
    'Menjelaskan tujuan pembentukan BLU/BLUD: efisiensi pelayanan tanpa mengutamakan mencari keuntungan.',
    'Menganalisis 4 fleksibilitas utama pengelolaan keuangan yang dimiliki instansi BLU/BLUD.',
    'Menyusun Rencana Bisnis dan Anggaran (RBA) dan memahami mekanisme pengesahan DPA-BLU.',
    'Menjelaskan fungsi pembinaan Dewan Pengawas BLU dan kewajiban audit laporan keuangan oleh KAP.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 13.1: Pilar Fleksibilitas Pola Pengelolaan Keuangan Badan Layanan Umum (PPK-BLU).',
      svg: SVG_BLU_STRUCTURE
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 13'
    },
    {
      kind: 'table',
      headers: ['Aspek Pengelolaan', 'SKPD Dinas Reguler', 'Badan Layanan Umum (BLU / BLUD)'],
      rows: [
        ['Penyetoran Kas Layanan', 'Wajib disetor 100% ke Kas Umum Daerah (Kasda) hari itu juga.', 'Dapat langsung digunakan (Direct Spending) untuk operasional layanan.'],
        ['Perubahan Belanja Operasi', 'Kaku; perubahan belanja wajib menunggu Perda Perubahan APBD.', 'Fleksibel dengan sistem ambang batas (Threshold Percentage) belanja RBA.'],
        ['Pengelolaan Saldo Kas Mengendap', 'Dikelola terpusat oleh BUD; dinas dilarang membuka rekening deposito.', 'Berhak menaruh kas mengendap dalam bentuk deposito berjangka atas nama BLU.'],
        ['Pengadaan Barang & Jasa', 'Tunduk kaku pada Perpres Pengadaan Barang/Jasa Pemerintah.', 'Dapat memiliki Peraturan Direktur BLU khusus yang lebih adaptif dan cepat.'],
        ['Pemberian Kompensasi Pegawai', 'Gaji dan tunjangan ASN standar pemerintah yang seragam.', 'Skema Remunerasi berbasis kinerja medis/akademis yang ditetapkan Kemenkeu/KDH.']
      ],
      caption: 'Tabel 13.0: Matriks perbedaan tata kelola SKPD reguler vs instansi BLU/BLUD.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Ambang Batas Fleksibilitas RBA'
    },
    {
      kind: 'formula',
      text: `\\text{Maksimum Belanja Fleksibel RBA} = \\text{Pagu Anggaran RBA Awal} \\times (1 + \\text{Ambang Batas Fleksibilitas } \\%)
\\text{Surplus Defisit BLU} = \\text{Pendapatan Layanan PNBP} - \\text{Beban Operasional BLU}
\\text{Saldo Kas Akhir BLU} = \\text{Kas Awal} + \\text{Surplus Kas} \\quad \\text{(Tidak Ditarik ke Kasda, Melainkan Menjadi Kas Mengendap BLU)}`,
      note: 'Jika kenaikan realisasi belanja melampaui persentase ambang batas fleksibilitas yang telah disetujui DPRD/Kemenkeu, BLU wajib mengajukan revisi RBA formal.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Kalkulasi Ambang Batas Belanja Obat Rumah Sakit BLUD',
      prompt: 'RSUD Dr. Soetomo (BLUD Penuh) memiliki pagu belanja pengadaan obat dalam RBA sebesar Rp 50 Miliar dengan persentase ambang batas fleksibilitas belanja sebesar 15%. Jika terjadi lonjakan pasien demam berdarah sehingga kebutuhan obat membengkak menjadi Rp 56 Miliar, apakah Direktur RSUD dapat langsung mengeksekusi pembelian obat tersebut tanpa menunggu Perubahan APBD?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Perhitungan Plafon Ambang Batas Fleksibilitas**:\nPlafon Maksimum = Pagu Awal × (1 + 15%) = Rp 50 Miliar × 1,15 = **Rp 57,5 Miliar**.',
            '**Evaluasi Kebutuhan Riil**: Kebutuhan belanja obat sebesar Rp 56 Miliar masih berada di bawah batas maksimum fleksibilitas (Rp 56 M < Rp 57,5 M).',
            '**Keputusan Direktur**: Direktur RSUD **BERWENANG LANGSUNG MEMBELANJAKAN OBAT Rp 56 MILIAR** tanpa harus menunggu Perda Perubahan APBD, dengan catatan pendapatan fungsional layanan rumah sakit mencukupi untuk membiayainya.'
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
        ['1', 'Prinsip PPK-BLU / BLUD', 'Konsep efisiensi bisnis sehat dan non-profit maximization.', 'Mampu menguraikan landasan pendirian rumah sakit dan kampus BLU.'],
        ['2', 'Mekanisme Fleksibilitas Keuangan', 'Direct spending, threshold belanja, dan pengelolaan kas deposito.', 'Mampu menghitung batas fleksibilitas belanja RBA BLUD.'],
        ['3', 'Laporan Keuangan BLU', 'Kewajiban dual-reporting: SAP untuk konsolidasi dan SAK untuk audit KAP.', 'Mampu menjelaskan proses konsolidasi laporan BLU ke LKPD/LKPP.']
      ],
      caption: 'Tabel 13.2: Peta penguasaan submateri TM 13 Akuntansi Sektor Publik.'
    },
    CASE_BLU_BLUD_FLEXIBILITY,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Dual Reporting BLU**: BLU menyusun laporan keuangan berbasis Standar Akuntansi Keuangan (SAK) untuk diaudit Kantor Akuntan Publik (KAP), dan menyusun laporan berbasis SAP untuk dikonsolidasikan ke dalam LKPD/LKPP.',
        '**Aset BLU Tetap Milik Negara**: Fleksibilitas pengelolaan keuangan tidak mengubah status kepemilikan aset; seluruh aset tetap rumah sakit/kampus BLU adalah Barang Milik Negara/Daerah (BMN/BMD) yang tidak boleh dipindahtangankan tanpa izin Kemenkeu/DPRD.',
        '**Dewan Pengawas**: Instansi BLU wajib diawasi oleh Dewan Pengawas independen yang bertugas memantau kepatuhan RBA dan menyetujui usulan remunerasi pejabat pengelola.'
      ]
    }
  ]
};
