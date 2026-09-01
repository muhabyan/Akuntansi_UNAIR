import type { Reading } from '../../../types';
import { CASE_BLU_BLUD_FLEXIBILITY } from '../aspPracticeCases';

const SVG_BLU_STRUCTURE = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">POLA PENGELOLAAN KEUANGAN BADAN LAYANAN UMUM (PPK - BLU / BLUD)</text>
  
  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">1. PENDAPATAN LAYANAN</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Direct Spending):</text>
  <text x="125" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Tarif medis &amp; UKT Kampus</text>
  <text x="125" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Tidak disetor ke Kasda/BUN</text>
  <text x="125" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Langsung dipakai operasional</text>
  <text x="125" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Otonomi Pengeluaran</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="340" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">2. MANAJEMEN KAS</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Cash &amp; Investment):</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Boleh menaruh kas di deposito</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Bunga bank menjadi hak BLU</text>
  <text x="340" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Investasi jangka pendek aman</text>
  <text x="340" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Optimalisasi Kas</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="555" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">3. SKEMA REMUNERASI</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Performance-Based Pay):</text>
  <text x="555" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Gaji pokok + Insentif Medis</text>
  <text x="555" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Sistem poin kinerja individu</text>
  <text x="555" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Standar Dewan Pengawas</text>
  <text x="555" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Motivasi Profesional</text>
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
