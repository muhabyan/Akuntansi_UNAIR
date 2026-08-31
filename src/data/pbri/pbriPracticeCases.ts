// =============================================================
// src/data/pbri/pbriPracticeCases.ts
// Kasus Praktik Interaktif Pengauditan Berbasis Risiko I (AKA201)
// Acuan: Standar Audit IAPI / ISA & Arens Auditing 16th Ed.
// =============================================================
import type { ContentBlock } from '../../types';

// -------------------------------------------------------------
// KASUS 1: Dilema Etis & Ancaman Independensi KAP (TM 2)
// -------------------------------------------------------------
export const CASE_AUDIT_ETHICS_INDEPENDENCE: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 1: Evaluasi Ancaman Independensi & Kode Etik Akuntan Publik (SA 200 & IESBA)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Skenario Perikatan Audit PT Mitra Retail',
      text: 'KAP Hadi & Rekan diminta mengaudit PT Mitra Retail Tbk untuk tahun buku 2026. Berikut adalah kondisi faktual:\n1. Partner Audit (Pak Hadi) ditawari imbalan audit bersyarat (*Contingent Fee*) sebesar 1% dari laba bersih klien jika opini yang diberikan adalah Wajar Tanpa Pengecualian (WTP).\n2. Manajer Audit (Ibu Rina) adalah adik kandung dari Direktur Keuangan PT Mitra Retail.\n3. Klien meminta KAP Hadi untuk sekaligus menyusun pembukuan dan laporan keuangan yang akan diaudit.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Analisis Ancaman Independensi & Pencegahan (Safeguards)',
      prompt: 'Identifikasi 5 jenis ancaman (Self-interest, Self-review, Advocacy, Familiarity, Intimidation):',
      blocks: [
        {
          kind: 'h3',
          text: '1. Evaluasi Kasus 1: Contingent Fee (Imbalan Bersyarat Opini)'
        },
        {
          kind: 'p',
          text: '• **Jenis Ancaman**: *Self-Interest Threat* (Ancaman Kepentingan Pribadi) yang sangat masif.\n• **Aturan Kode Etik**: Kode Etik IAPI dan IESBA **MELARANG KERAS** penetapan audit fee bersyarat atas opini atau hasil audit. Penerimaan perikatan dengan contingent fee merupakan pelanggaran etika berat yang merusak integritas profesi.'
        },
        {
          kind: 'h3',
          text: '2. Evaluasi Kasus 2: Hubungan Keluarga Manajer Audit dengan Direktur Keuangan'
        },
        {
          kind: 'p',
          text: '• **Jenis Ancaman**: *Familiarity Threat* (Ancaman Kedekatan/Kekerabatan).\n• **Tindakan Pencegahan (Safeguards)**: Ibu Rina **WAJIB DIKELUARKAN** dari tim perikatan audit PT Mitra Retail dan digantikan oleh manajer audit lain yang independen.'
        },
        {
          kind: 'h3',
          text: '3. Evaluasi Kasus 3: Penyusunan Laporan Keuangan Sekaligus Mengaudit'
        },
        {
          kind: 'p',
          text: '• **Jenis Ancaman**: *Self-Review Threat* (Ancaman Telaah Pribadi).\n• **Aturan SPAP**: Untuk entitas publik (Tbk), KAP dilarang keras memberikan jasa pembukuan/akuntansi kepada klien audit karena auditor akan mengaudit pekerjaannya sendiri!'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 2: Penentuan Materialitas Audit (TM 5 - SA 320)
// -------------------------------------------------------------
export const CASE_AUDIT_MATERIALITY: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 2: Penetapan Materialitas Perencanaan, Pelaksanaan, & Ambang Batas Salah Saji (SA 320)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Keuangan PT Manufaktur Logam (Klien Audit)',
      text: 'Berikut adalah data keuangan teraudit sementara PT Manufaktur Logam per 31 Desember 2026:\n• Laba Sebelum Pajak Normal (Profit Before Tax - PBT): Rp 10.000.000.000\n• Total Pendapatan Operasi: Rp 120.000.000.000\n• Total Aset: Rp 80.000.000.000\n\nKebijakan KAP menetapkan benchmark 5% dari Laba Sebelum Pajak untuk entitas laba komersial. Materialitas Pelaksanaan (Performance Materiality) ditetapkan 75% dari Overall Materiality (karena risiko pengendalian rendah). Ambang batas salah saji sepele (Clearly Trivial) ditetapkan 5% dari Overall Materiality.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan 3 Tingkatan Materialitas Audit',
      prompt: 'Pahami hierarki Materialitas Keseluruhan, Pelaksanaan, dan Ambang Batas:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Materialitas Keseluruhan (Overall Materiality - OM)'
        },
        {
          kind: 'formula',
          text: '\\text{Overall Materiality (OM)} = 5\\% \\times \\text{Laba Sebelum Pajak} = 5\\% \\times Rp\\ 10.000.000.000 = Rp\\ 500.000.000',
          note: 'Jika akumulasi salah saji melebihi Rp 500jt dan klien menolak koreksi, auditor tidak dapat menerbitkan opini WTP tanpa modifikasi.'
        },
        {
          kind: 'h3',
          text: '2. Materialitas Pelaksanaan (Performance Materiality - PM)'
        },
        {
          kind: 'formula',
          text: '\\text{Performance Materiality (PM)} = 75\\% \\times Rp\\ 500.000.000 = Rp\\ 375.000.000',
          note: 'PM digunakan sebagai batas toleransi salah saji saat merancang luas pengujian substantif atas saldo akun individual (misal: piutang, persediaan).'
        },
        {
          kind: 'h3',
          text: '3. Ambang Batas Salah Saji Sepele (Clearly Trivial Threshold - CTT)'
        },
        {
          kind: 'formula',
          text: '\\text{Clearly Trivial Threshold (CTT)} = 5\\% \\times Rp\\ 500.000.000 = Rp\\ 25.000.000',
          note: 'Salah saji di bawah Rp 25.000.000 dianggap sepele (trivial) dan tidak perlu diakumulasikan ke dalam ringkasan salah saji yang belum dikoreksi (Summary of Unadjusted Differences).'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 3: Perumusan Opini Audit (TM 4 - SA 700, 705, 706, 701)
// -------------------------------------------------------------
export const CASE_AUDIT_OPINIONS: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 3: Matriks Penentuan Opini Audit (WTP, WDP, Tidak Wajar, Disclaimer)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Tiga Skenario Audit Akhir Tahun',
      text: 'Tentukan jenis opini auditor independen untuk 3 situasi independen berikut (Materialitas Keseluruhan = Rp 1 Miliar):\n1. **Skenario A**: Klien menolak mencatat penurunan nilai persediaan rusak sebesar Rp 1,5 Miliar (Material tetapi tidak pervasif terhadap seluruh laporan keuangan).\n2. **Skenario B**: Klien mencatat penjualan fiktif dan menggelembungkan aset sebesar Rp 30 Miliar sehingga seluruh laporan keuangan menyesatkan (Material dan Pervasif).\n3. **Skenario C**: Auditor dilarang oleh manajemen memeriksa fisik persediaan dan buku kas anak perusahaan utama luar negeri (70% total aset) dan tidak ada prosedur alternatif yang dapat dilakukan (Pembatasan Lingkup Material & Pervasif).',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Logika Penentuan Opini Berdasarkan Materialitas & Pervasiveness',
      prompt: 'Gunakan matriks keputusan SA 705:',
      blocks: [
        {
          kind: 'table',
          headers: ['Skenario Kasus', 'Sifat Masalah', 'Tingkat Keparahan', 'Jenis Opini yang Diterbitkan'],
          rows: [
            ['Skenario A', 'Salah Saji Material (Penyimpangan SAK)', 'Material, tetapi **TIDAK PERVASIF**', '**Opini Wajar Dengan Pengecualian (Qualified Opinion / WDP)** dengan frasa "...kecuali untuk dampak hal yang dijelaskan pada Basis Opini WDP..."'],
            ['Skenario B', 'Salah Saji Material (Manipulasi Masif)', 'Material dan **PERVASIF**', '**Opini Tidak Wajar (Adverse Opinion)** dengan menyatakan laporan keuangan tidak menyajikan secara wajar.'],
            ['Skenario C', 'Pembatasan Lingkup Audit (Inability to obtain evidence)', 'Material dan **PERVASIF**', '**Opini Tidak Memberikan Pendapat (Disclaimer of Opinion)** karena auditor tidak memperoleh bukti yang cukup dan tepat.']
          ],
          caption: 'Tabel Keputusan Opini Audit Modifikasian (SA 705).'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 4: Audit Risk Model & Planned Detection Risk (TM 10 - SA 315)
// -------------------------------------------------------------
export const CASE_AUDIT_RISK_MODEL: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 4: Penerapan Model Risiko Audit (Audit Risk Model & Planned Detection Risk)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Penilaian Risiko Audit Siklus Penjualan',
      text: 'Dalam mengaudit siklus penjualan dan piutang PT Distribusi Cepat, tim audit menetapkan parameter risiko kuantitatif berikut:\n• Risiko Audit yang Dapat Diterima (Acceptable Audit Risk - AAR): 5% (Rendah)\n• Risiko Inheren (Inherent Risk - IR): 80% (Tinggi, karena persaingan ketat dan tingginya volume kredit)\n• Risiko Pengendalian (Control Risk - CR): 50% (Sedang, karena segregasi tugas memadai tetapi ada beberapa kelemahan rekonsiliasi bulanan).',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan Planned Detection Risk & Strategi Bukti',
      prompt: 'Gunakan rumus Audit Risk Model:',
      blocks: [
        {
          kind: 'formula',
          text: 'PDR = \\frac{AAR}{IR \\times CR} = \\frac{0,05}{0,80 \\times 0,50} = \\frac{0,05}{0,40} = 0,125\\ (12,5\\%)'
        },
        {
          kind: 'callout',
          variant: 'key',
          title: 'Interpretasi & Implikasi Program Audit',
          text: '1. **Planned Detection Risk (PDR) = 12,5% (Rendah)**: Risiko yang bersedia ditanggung auditor bahwa pengujian substantif gagal mendeteksi salah saji hanya sebesar 12,5%.\n2. **Kebutuhan Bukti Substantif**: Karena PDR rendah, auditor **WAJIB MENGUMPULKAN BUKTI SUBSTANTIF DALAM JUMLAH BANYAK DAN BERKUALITAS TINGGI** (memperluas sampel konfirmasi piutang, melakukan vouching transaksi mendekati akhir tahun, dan memeriksa penerimaan kas setelah tanggal neraca).'
        }
      ]
    }
  ]
};