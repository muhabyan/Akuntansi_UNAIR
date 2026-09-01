import type { Reading } from '../../../types';
import { CASE_AUDIT_STRATEGY_PROGRAM } from '../pbriPracticeCases';

export const TM14_READING: Reading = {
  tm: 14,
  title: 'Penyusunan Program Audit Komprehensif Berbasis Risiko & Rencana Pengujian Akhir (SA 330)',
  ref: 'Arens 16e Ch. 13 & 14 | SA 330 (Respons Auditor atas Risiko yang Dinilai) | Audit Program Design',
  intro: 'TM 14 membahas integrasi akhir seluruh tahapan pengauditan berbasis risiko: perancangan Program Audit Komprehensif (Audit Program Design) untuk siklus penjualan & penerimaan kas, siklus pembelian & pengeluaran kas, serta penentuan ukuran sampel, saat pelaksanaan, dan alokasi staf perikatan.',
  objectives: [
    'Merancang program audit 4 tahap berbasis risiko sesuai standar SA 330.',
    'Menyusun prosedur pengujian substantif rinci untuk siklus pendapatan dan siklus pengeluaran.',
    'Mengintegrasikan hasil penilaian risiko bawaan dan risiko pengendalian ke dalam format program audit siap eksekusi.',
    'Mencapai kesiapan paripurna menghadapi Ujian Akhir Semester (UAS) PBR I.'
  ],
  blocks: [
    {
      kind: 'h2',
      text: 'Struktur Program Audit 4 Tahap Berbasis Risiko (SA 330)'
    },
    {
      kind: 'table',
      headers: ['Tahap Pengujian Program Audit', 'Tujuan Prosedur Audit', 'Contoh Prosedur Siklus Penjualan', 'Contoh Prosedur Siklus Pembelian'],
      rows: [
        ['Tahap 1: Test of Controls (TOC)', 'Menguji efektivitas operasi pengendalian internal.', 'Periksa paraf otorisasi persetujuan kredit pada pesanan penjualan (Sales Order).', 'Periksa paraf otorisasi pesanan pembelian (PO) dan matching 3-way dokumen.'],
        ['Tahap 2: Substantive Test of Transactions (STOT)', 'Menguji kebenaran moneter pencatatan transaksi.', 'Vouching jurnal penjualan ke faktur & surat jalan untuk uji Keterjadian (Occurrence).', 'Tracing bukti penerimaan barang ke jurnal pembelian untuk uji Kelengkapan.'],
        ['Tahap 3: Substantive Analytical Procedures (SAP)', 'Menguji kewajaran saldo akun secara agregat.', 'Bandingkan persentase Gross Margin bulanan dan rasio perputaran piutang (DSO).', 'Bandingkan saldo utang usaha per pemasok tahun berjalan vs tahun lalu.'],
        ['Tahap 4: Test of Details of Balances (TOD)', 'Menguji salah saji moneter saldo akhir neraca.', 'Kirim surat konfirmasi positif piutang dan uji pisah batas penjualan 5 hari cut-off.', 'Uji pencarian liabilitas yang belum dicatat (Search for Unrecorded Liabilities).']
      ],
      caption: 'Tabel 14.1: Matriks perancangan program audit komprehensif siklus bisnis.'
    },
    {
      kind: 'h2',
      text: 'Checklist 8 Kunci Sukses Ujian Akhir Semester (UAS) PBR I'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Rangkuman Intisari UAS Pengauditan Berbasis Risiko I',
      text: '1. Audit Risk Model: PDR = AAR / (IR × CR). Jika IR/CR naik, PDR turun, bukti substantif WAJIB DITAMBAH.\n2. Fraud SA 240: Wajib berasumsi ada risiko kecurangan pada pendapatan; wajib laksanakan Journal Entry Testing (JET).\n3. COSO 2013: 5 Komponen (Control Env, Risk Assess, Control Act, Info & Comm, Monitoring) dan Segregasi CARP.\n4. Defisiensi SA 265: Material Weakness wajib dilaporkan tertulis ke Komite Audit / Dewan Komisaris.\n5. Bauran 5 Uji Audit: TOC menguji kontrol; STOT menguji transaksi moneter; SAP menguji hubungan logis data; TOD menguji saldo neraca.\n6. Hubungan TOC & TOD: Jika TOC efektif, sampel TOD dapat diperkecil signifikan.\n7. Audit TI: ITGC adalah fondasi keandalan ITAC; jika ITGC jebol, ITAC tidak dapat diandalkan.\n8. TABK/CAATs: Parallel Simulation memungkinkan pengujian 100% populasi data transaksi masif.'
    },
    CASE_AUDIT_STRATEGY_PROGRAM,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Program Audit adalah Peta Kerja Tim**: Seluruh anggota tim audit lapangan bekerja berdasarkan instruksi spesifik di dalam Program Audit yang telah disetujui Partner.',
        '**Fleksibilitas Program Audit**: Program audit dapat dimodifikasi di tengah penugasan jika ditemukan salah saji tak terduga atau kelemahan kontrol internal baru.',
        '**Search for Unrecorded Liabilities**: Prosedur TOD paling kritis pada siklus pembelian untuk mendeteksi utang yang sengaja disembunyikan per 31 Desember.'
      ]
    }
  ]
};
