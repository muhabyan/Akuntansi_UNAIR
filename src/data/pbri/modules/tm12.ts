import type { Reading } from '../../../types';
import { CASE_AUDIT_TESTING_MIX } from '../pbriPracticeCases';

const SVG_AUDIT_TESTING_MIX = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">5 JENIS PENGUJIAN AUDIT (AUDIT TESTING MIX - SA 330 &amp; SA 500)</text>
  
  <rect x="25" y="55" width="118" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="84" y="78" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">1. RISK ASSESS</text>
  <text x="84" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Penilaian Risiko:</text>
  <text x="84" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Wawancara klien</text>
  <text x="84" y="134" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Observasi pabrik</text>
  <text x="84" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pahami kontrol</text>
  <text x="84" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">(Biaya: Sangat Rendah)</text>

  <rect x="153" y="55" width="118" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="212" y="78" fill="#4ade80" font-size="10" font-weight="700" text-anchor="middle">2. TOC</text>
  <text x="212" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Uji Pengendalian:</text>
  <text x="212" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Cek paraf otorisasi</text>
  <text x="212" y="134" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Reperformance</text>
  <text x="212" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Uji efektivitas IC</text>
  <text x="212" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">(Biaya: Rendah)</text>

  <rect x="281" y="55" width="118" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="340" y="78" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">3. STOT</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Substantif Transaksi:</text>
  <text x="340" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Vouching faktur</text>
  <text x="340" y="134" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Tracing surat jalan</text>
  <text x="340" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Akurasi rupiah</text>
  <text x="340" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">(Biaya: Sedang)</text>

  <rect x="409" y="55" width="118" height="145" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="468" y="78" fill="#a78bfa" font-size="10" font-weight="700" text-anchor="middle">4. SAP</text>
  <text x="468" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Analitis Substantif:</text>
  <text x="468" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Proof in Total</text>
  <text x="468" y="134" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Rasio komparatif</text>
  <text x="468" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Analisis tren</text>
  <text x="468" y="175" fill="#a78bfa" font-size="9" font-weight="700" text-anchor="middle">(Biaya: Sedang)</text>

  <rect x="537" y="55" width="118" height="145" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
  <text x="596" y="78" fill="#f87171" font-size="10" font-weight="700" text-anchor="middle">5. TOD</text>
  <text x="596" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Uji Rinci Saldo:</text>
  <text x="596" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Konfirmasi bank</text>
  <text x="596" y="134" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Stock opname</text>
  <text x="596" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Uji pisah batas</text>
  <text x="596" y="175" fill="#f87171" font-size="9" font-weight="700" text-anchor="middle">(Biaya: Paling Tinggi)</text>
</svg>`;

export const TM12_READING: Reading = {
  tm: 12,
  title: 'Pengujian Pengendalian (TOC), Uji Substantif Transaksi (STOT), & Uji Rinci Saldo (TOD)',
  ref: 'Arens 16e Ch. 13 | SA 330, SA 500 | 5 Types of Audit Tests',
  intro: 'TM 12 membahas integrasi 5 jenis pengujian audit (Audit Testing Mix): Prosedur Penilaian Risiko, Pengujian Pengendalian (TOC), Pengujian Substantif Transaksi (STOT), Prosedur Analitis Substantif (SAP), dan Pengujian Rinci Saldo (TOD). Serta strategi efisiensi biaya audit melalui pengandalan kontrol internal yang efektif.',
  objectives: [
    'Membedakan tujuan, prosedur pelaksanaan, dan biaya relatif dari 5 jenis pengujian audit.',
    'Menjelaskan trade-off antara Pengujian Pengendalian (TOC) dan Pengujian Rinci Saldo (TOD).',
    'Menentukan saat yang tepat untuk melaksanakan pengujian interim (Interim Testing) vs akhir tahun (Year-End Testing).',
    'Merancang bauran pengujian audit optimal berbasis risiko dan tingkat efisiensi anggaran perikatan.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 12.1: Bauran 5 Jenis Pengujian Audit (SA 330 & SA 500).',
      svg: SVG_AUDIT_TESTING_MIX
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 12'
    },
    {
      kind: 'table',
      headers: ['Jenis Pengujian Audit', 'Fokus yang Diuji', 'Bukti yang Dihasilkan', 'Dampak Hasil Pengujian'],
      rows: [
        ['Test of Controls (TOC)', 'Efektivitas operasi kontrol (apakah prosedur otorisasi dijalankan konsisten).', 'Paraf otorisasi, log akses IT, hasil reperformance.', 'Jika TOC efektif -> Control Risk Dinilai Rendah -> Ukuran sampel TOD dapat ditekan signifikan!'],
        ['Substantive Test of Transactions (STOT)', 'Akurasi moneter pencatatan transaksi individual.', 'Faktur, voucher kas, dokumen pengiriman.', 'Menguji apakah rupiah transaksi laba rugi dicatat benar.'],
        ['Substantive Analytical Procedures (SAP)', 'Kewajaran menyeluruh saldo akun melalui hubungan logis data.', 'Hasil perhitungan Proof in Total dan rasio industri.', 'Jika SAP tidak menemukan anomali -> Keyakinan substantif meningkat tanpa uji dokumen manual banyak.'],
        ['Test of Details of Balances (TOD)', 'Kewajaran moneter saldo akhir akun neraca per 31 Desember.', 'Konfirmasi bank/piutang, hasil stock opname fisik, rekening koran subsequent.', 'Memberikan bukti paling meyakinkan (Direct Evidence), namun biayanya paling mahal.']
      ],
      caption: 'Tabel 12.0: Perbandingan 4 pengujian audit respon risiko.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Trade-Off Biaya & Bukti Audit'
    },
    {
      kind: 'formula',
      text: `\\text{Efisiensi Bauran Audit}:
\\text{TOC Efektif (Kontrol Kuat)} \\Longrightarrow \\text{Control Risk (CR) Rendah} \\Longrightarrow \\text{Planned Detection Risk (PDR) Tinggi}
\\Longrightarrow \\mathbf{\\text{Pengujian Rinci Saldo (TOD) Minimal (Hemat Waktu & Biaya!)}}`,
      note: 'Jika hasil TOC menunjukkan kontrol klien gagal/tidak efektif, auditor WAJIB membatalkan pengandalan kontrol dan memperluas sampel TOD hingga 100% populasi saldo akun material.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Strategi Pengujian Akun Piutang Usaha',
      prompt: 'Klien e-commerce memiliki 500.000 transaksi penjualan per bulan yang diproses otomatis oleh sistem ERP. Bagaimana auditor merancang bauran pengujian (TOC vs TOD) yang paling efektif dan efisien?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Fokus Utama pada Automated TOC**: Karena volume transaksi masif (500.000/bulan), memeriksa dokumen satu per satu (TOD manual) sangat tidak efisien. Auditor menguji efektivitas Automated Application Controls (validasi limit kredit dan matching otomatis faktur dengan gateway pembayaran).',
            '**Dampak terhadap TOD**: Jika Automated TOC terbukti beroperasi konsisten sepanjang tahun, auditor cukup mengirim sampel konfirmasi piutang dalam jumlah moderat dan melakukan prosedur analitis substantif atas penerimaan kas.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 12'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', '5 Jenis Pengujian Audit', 'Diferensiasi Risk Assessment, TOC, STOT, SAP, dan TOD.', 'Mampu mengelompokkan prosedur audit spesifik ke dalam 5 jenis pengujian.'],
        ['2', 'Trade-off TOC vs TOD', 'Analisis hubungan efisiensi biaya dan pengandalan kontrol.', 'Mampu merancang bauran pengujian berbasis kondisi kontrol internal klien.'],
        ['3', 'Interim vs Year-End Testing', 'Penentuan waktu pengujian pengendalian dan substantif.', 'Menguasai risiko roll-forward periode interim ke tanggal neraca.']
      ],
      caption: 'Tabel 12.2: Peta penguasaan submateri TM 12 PBR I.'
    },
    CASE_AUDIT_TESTING_MIX,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**TOC Tidak Menghasilkan Rupiah Salah Saji**: TOC hanya menguji apakah kontrol berjalan efektif, sedangkan salah saji moneter hanya diukur oleh STOT, SAP, dan TOD.',
        '**Pengujian Ganda (Dual-Purpose Test)**: Satu prosedur audit dapat berfungsi ganda sebagai TOC sekaligus STOT (contoh: memeriksa faktur penjualan untuk melihat paraf otorisasi sekaligus mencocokkan harga).',
        '**Roll-Forward Period**: Jika TOC dilakukan pada bulan Oktober (interim), auditor wajib melakukan pengujian tambahan atas sisa 2 bulan (November-Desember) untuk memastikan kontrol tidak berubah.'
      ]
    }
  ]
};
