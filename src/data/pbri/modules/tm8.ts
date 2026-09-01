import type { Reading } from '../../../types';
import { CASE_UTS_REVIEW_INTEGRATED } from '../pbriPracticeCases';

export const TM8_READING: Reading = {
  tm: 8,
  title: 'Pemantapan Materi & Strategi Sukses Ujian Tengah Semester (UTS) PBR I',
  ref: 'Kompilasi Standar Audit TM 1 s/d TM 7 | SA 200, 210, 220, 230, 240, 250, 300, 315, 320, 450, 500, 505, 520, 700, 705, 706',
  intro: 'TM 8 adalah sesi review komprehensif integrasi materi Pra-UTS Pengauditan Berbasis Risiko I: sintesis keterkaitan antara Kode Etik & Independensi, Tanggung Jawab & Asersi Manajemen, Laporan Auditor Independen, Bukti Audit & KKP, Penetapan Materialitas 3 Tingkat, serta Prosedur Analitis Substantif.',
  objectives: [
    'Mengintegrasikan siklus audit pra-perikatan hingga perumusan opini dalam satu kerangka utuh.',
    'Menguasai strategi penyelesaian soal kasus penalaran etika profesi, modifikasi opini, dan perhitungan materialitas.',
    'Menghindari 10 jebakan umum ujian tengah semester PBR I.',
    'Mencapai target nilai maksimal A pada Ujian Tengah Semester PBR I.'
  ],
  blocks: [
    {
      kind: 'h2',
      text: 'Peta Integrasi 6 Pilar Pra-UTS PBR I'
    },
    {
      kind: 'table',
      headers: ['Pilar Topik UTS', 'Standar Audit Terkait', 'Fokus Pengujian Dosen', 'Kunci Jawaban Tepat'],
      rows: [
        ['1. Jasa Asurans vs Non-Asurans', 'SA 200 / ISRS 4400', 'Pembedaan tingkat keyakinan dan produk akhir.', 'Audit = Wajar (Memadai); Reviu = Negatif (Terbatas); AUP = Faktual (Tanpa Keyakinan).'],
        ['2. Etika & Independensi', 'Kode Etik IAPI / IESBA', 'Identifikasi 5 ancaman dan safeguards mandatori.', 'Divestasi saham, rotasi partner 7 thn, larangan fee kontinjensi & larangan rangkap jasa pembukuan.'],
        ['3. Asersi & Arah Pengujian', 'SA 315 / SA 500', 'Tracing vs Vouching dan pemetaan asersi ke prosedur.', 'Tracing = Kelengkapan (Understatement); Vouching = Keterjadian (Overstatement).'],
        ['4. Penentuan Opini Audit', 'SA 700 / SA 705 / SA 706', 'Matriks Materialitas vs Sifat Pervasif.', 'Material tdk pervasif = WDP; Salah saji pervasif = Tidak Wajar; Batasan pervasif = Disclaimer.'],
        ['5. Bukti Audit & Dokumentasi', 'SA 500 / SA 230 / SA 505', 'Hierarki keandalan bukti dan konfirmasi.', 'Pihak ketiga > Internal; Konfirmasi non-respons wajib prosedur alternatif; Retensi KKP 5 thn.'],
        ['6. Materialitas & Prosedur Analitis', 'SA 320 / SA 450 / SA 520', 'Perhitungan OM, PM, Clearly Trivial, dan Proof in Total.', 'OM = 5% PBT; PM = 50-75% OM; Clearly Trivial = 5% OM; Analitis wajib di Perencanaan & Reviu Akhir.']
      ],
      caption: 'Tabel 8.1: Peta sintesis integrasi 6 pilar materi persiapan UTS PBR I.'
    },
    {
      kind: 'h2',
      text: 'Checklist 10 Jebakan Terpopuler UTS PBR I'
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Daftar 10 Jebakan Fatal Ujian',
      text: '1. Auditor TIDAK PERNAH memberikan Absolute Assurance (Keyakinan Mutlak).\n2. Laporan keuangan adalah tanggung jawab MANAJEMEN, bukan tanggung jawab auditor.\n3. Fee kontinjensi DILARANG MUTLAK dalam audit laporan keuangan.\n4. Vouching menguji Keterjadian (Occurrence), Tracing menguji Kelengkapan (Completeness).\n5. Asersi Occurrence untuk transaksi laba rugi; Asersi Existence untuk saldo neraca.\n6. Opini Disclaimer diterbitkan jika pembatasan lingkup bersifat material DAN pervasif.\n7. Konfirmasi negatif HANYA boleh jika risiko rendah, saldo kecil banyak, dan kontrol kuat.\n8. Kertas Kerja Pemeriksaan (KKP) adalah milik KAP, bukan milik klien.\n9. Performance Materiality (PM) bernilai LEBIH KECIL dari Overall Materiality (OM).\n10. Prosedur Analitis WAJIB pada tahap Perencanaan dan Reviu Akhir, tetapi OPSIONAL saat Pengujian Substantif.'
    },
    CASE_UTS_REVIEW_INTEGRATED,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Sebutkan Nomor Standar Audit**: Mengutip standar resmi (seperti \"Sesuai SA 240 / SA 320 / SA 705\") memberikan poin justifikasi akademik maksimal.',
        '**Tuliskan Arah Pengujian Eksplisit**: Saat ditanya prosedur pengujian piutang/penjualan, selalu sebutkan dokumen asal dan dokumen tujuan (misal: \"Vouching dari Jurnal Penjualan ke Surat Jalan...\").',
        '**Kombinasi Bukti**: Soal kasus yang menanyakan keandalan bukti selalu menuntut bukti koraboratif independen.'
      ]
    }
  ]
};
