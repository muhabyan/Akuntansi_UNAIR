import type { Reading } from '../../../types';
import { CASE_AUDIT_EVIDENCE_DOCS } from '../pbriPracticeCases';

const SVG_EVIDENCE_HIERARCHY = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">HIERARKI KEANDALAN 8 JENIS BUKTI AUDIT (SA 500)</text>
  
  <rect x="30" y="52" width="190" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="125" y="75" fill="#4ade80" font-size="11" font-weight="700" text-anchor="middle">TINGKAT TINGGI</text>
  <text x="125" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Pemeriksaan Fisik (Aset)</text>
  <text x="125" y="118" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Konfirmasi Pihak Ke-3</text>
  <text x="125" y="138" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Perhitungan Ulang (Recalc)</text>
  <text x="125" y="158" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Pelaksanaan Ulang (Reperform)</text>
  <text x="125" y="180" fill="#4ade80" font-size="9" text-anchor="middle">Diperoleh Langsung / Luar</text>

  <rect x="245" y="52" width="190" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="340" y="75" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">TINGKAT SEDANG</text>
  <text x="340" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Dokumentasi Eksternal</text>
  <text x="340" y="118" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Prosedur Analitis (SAP)</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Dokumen Internal (IC Baik)</text>
  <text x="340" y="158" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Observasi Proses Operasional</text>
  <text x="340" y="180" fill="#fbbf24" font-size="9" text-anchor="middle">Tergantung Kontrol Internal</text>

  <rect x="460" y="52" width="190" height="145" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
  <text x="555" y="75" fill="#f87171" font-size="11" font-weight="700" text-anchor="middle">TINGKAT RENDAH</text>
  <text x="555" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Tanya Jawab (Inquiry)</text>
  <text x="555" y="118" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Dokumen Internal (IC Lemah)</text>
  <text x="555" y="138" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Estimasi Lisan Manajemen</text>
  <text x="555" y="158" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Brosur / Data Tidak Resmi</text>
  <text x="555" y="180" fill="#f87171" font-size="9" text-anchor="middle">Wajib Bukti Pendukung Lain</text>
</svg>`;

export const TM5_READING: Reading = {
  tm: 5,
  title: 'Bukti Audit, 8 Prosedur Pengumpulan Bukti, & Kertas Kerja Audit (KKP)',
  ref: 'Arens 16e Ch. 7 | SA 500, SA 230, SA 505 (Konfirmasi Eksternal)',
  intro: 'TM 5 membahas karakteristik bukti audit yang cukup dan tepat (Sufficiency & Appropriateness), evaluasi keandalan 8 jenis bukti audit, prosedur konfirmasi eksternal (SA 505), serta standar dokumentasi Kertas Kerja Pemeriksaan (KKP / Audit Documentation SA 230) mencakup Permanent File dan Current File.',
  objectives: [
    'Mengevaluasi Kecukupan (Sufficiency/Kuantitas) dan Ketepatan (Appropriateness/Kualitas: Relevansi & Keandalan) bukti audit.',
    'Menguasai 8 prosedur pengumpulan bukti audit lapangan menurut SA 500.',
    'Menerapkan prosedur konfirmasi positif vs negatif serta tindak lanjut non-respons (SA 505).',
    'Menyusun struktur Kertas Kerja Pemeriksaan (KKP) dan aturan retensi minimal 5 tahun (SA 230).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 5.1: Hierarki Keandalan 8 Jenis Bukti Audit (SA 500).',
      svg: SVG_EVIDENCE_HIERARCHY
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 5'
    },
    {
      kind: 'table',
      headers: ['Konsep Bukti Audit', 'Kriteria Standar SA 500 / 230', 'Faktor Penentu Keandalan', 'Jebakan Ujian Terpopuler'],
      rows: [
        ['Sufficiency (Kecukupan)', 'Ukuran kuantitas bukti audit yang dibutuhkan.', 'Ditentukan oleh Penilaian Risiko Salah Saji (RMM) dan Materialitas.', 'Menambah sampel banyak TIDAK BISA menggantikan bukti yang berkualitas buruk!'],
        ['Appropriateness (Ketepatan)', 'Ukuran kualitas bukti (Relevansi terhadap asersi & Keandalan sumber).', 'Bukti pihak luar independen > Bukti internal; Dokumen asli > Fotokopi.', 'Inquiry (tanya jawab lisan) TIDAK PERNAH cukup jika berdiri sendiri tanpa dokumen pendukung.'],
        ['Konfirmasi Eksternal (SA 505)', 'Permintaan respons tertulis langsung dari pihak ketiga (Bank, Debitur, Kuasa Hukum).', 'Konfirmasi Positif (Wajib balas setuju/tidak); Konfirmasi Negatif (Hanya balas jika tidak setuju).', 'Konfirmasi negatif HANYA boleh dipakai jika RMM rendah, populasi saldo kecil banyak, dan kontrol kuat.'],
        ['Dokumentasi Audit (SA 230)', 'Catatan atas prosedur yang dijalankan, bukti yang diperoleh, dan kesimpulan (KKP).', 'Permanent File (Akta, Kontrak Jangka Panjang) vs Current File (Program Audit, Working TB tahun berjalan).', 'KKP adalah milik KAP, bukan milik klien, dan wajib disimpan minimal 5 tahun (UU AP).']
      ],
      caption: 'Tabel 5.0: Matriks bukti audit dan dokumentasi KKP.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Karakteristik Bukti Audit'
    },
    {
      kind: 'formula',
      text: `\\text{Bukti Audit yang Tepat (Appropriate Evidence)} = \\text{Relevan terhadap Asersi yang Diuji} \\cap \\text{Andal (Reliable)}
\\text{Prinsip Keandalan Bukti}:
\\text{Pihak Ketiga Independen} > \\text{Internal Klien (Kontrol Efektif)} > \\text{Internal Klien (Kontrol Lemah)} > \\text{Lisan Tanpa Bukti}`,
      note: 'Dokumen elektronik yang dibuat dan disimpan dalam sistem dengan kontrol TI yang kuat memiliki keandalan setara dengan dokumen fisik asli.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Evaluasi Konfirmasi Piutang Non-Respons',
      prompt: 'Auditor mengirim 20 surat konfirmasi positif piutang usaha. 18 debitur mengonfirmasi saldo cocok, namun 2 debitur besar tidak memberikan respons setelah surat pengingat kedua dikirimkan. Apa prosedur audit alternatif yang WAJIB dilakukan auditor?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Prosedur Alternatif 1**: Memeriksa bukti penerimaan kas setelah tanggal neraca (Subsequent Cash Collections), seperti bukti transfer bank dan rekening koran Januari 2027.',
            '**Prosedur Alternatif 2**: Melakukan pemeriksaan dokumen pendukung pengiriman (Surat Jalan/Bill of Lading asli) dan Faktur Penjualan yang telah diotorisasi untuk membuktikan bahwa barang benar-benar dikirim sebelum 31 Desember 2026.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 5'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Kecukupan & Ketepatan Bukti', 'Analisis relevansi dan keandalan berbagai bukti audit.', 'Mampu memilih bukti audit paling andal untuk setiap akun neraca.'],
        ['2', 'Prosedur Konfirmasi Eksternal', 'Penerapan SA 505 untuk Kas, Piutang, dan Utang.', 'Mampu mengevaluasi selisih konfirmasi dan prosedur alternatif.'],
        ['3', 'Struktur & Retensi KKP', 'Penyusunan Permanent File vs Current File dan aturan kerahasiaan.', 'Menguasai ketentuan SA 230 dan UU AP No. 5/2011.']
      ],
      caption: 'Tabel 5.2: Peta penguasaan submateri TM 5 PBR I.'
    },
    CASE_AUDIT_EVIDENCE_DOCS,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Konfirmasi Positif vs Negatif**: Konfirmasi positif memberikan bukti audit yang jauh lebih andal karena kegagalan merespons langsung memicu prosedur audit alternatif.',
        '**Kepemilikan KKP**: KKP adalah dokumen milik KAP. Klien berhak meminta salinan laporan audit, namun tidak berhak menahan atau memiliki KKP auditor.',
        '**Batas Waktu Penyelesaian KKP**: Perikatan audit wajib menyelesaikan perakitan berkas audit final paling lambat 60 hari setelah tanggal LAI (SA 230).'
      ]
    }
  ]
};
