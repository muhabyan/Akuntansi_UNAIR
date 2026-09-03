import type { Reading } from '../../../types';
import { CASE_AUDIT_EVIDENCE_DOCS } from '../pbriPracticeCases';

const SVG_EVIDENCE_HIERARCHY = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPb5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="ev1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="ev2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="ev3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="ev4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPb5)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">HIERARKI TINGKAT KEANDALAN BUKTI AUDIT (SA 500: SUFFICIENCY &amp; APPROPRIATENESS)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">EVIDENCE HIERARCHY</text>

  <g transform="translate(45, 70)">
    <rect class="svg-card" x="0" y="0" width="810" height="52" rx="8" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="810" height="18" rx="8" fill="url(#ev1)" fill-opacity="0.2"/>
    <text class="text-accent-green" x="14" y="14" fill="#34d399" font-size="9" font-weight="800">LEVEL 1: KEANDALAN TERTINGGI (BUKTI FISIK LANGSUNG &amp; KONFIRMASI PIHAK KETIGA)</text>
    <text class="text-accent-green" x="795" y="14" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="end">Rating: ★★★★★</text>
    <text class="svg-text" x="14" y="36" fill="#cbd5e1" font-size="8">Contoh: Inspeksi fisik stok kas/emas oleh auditor (Physical), Konfirmasi saldo rekening bank langsung dari pihak bank, Surat konfirmasi piutang debitur.</text>
  </g>

  <g transform="translate(45, 130)">
    <rect class="svg-card" x="0" y="0" width="810" height="52" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="810" height="18" rx="8" fill="url(#ev2)" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="14" y="14" fill="#38bdf8" font-size="9" font-weight="800">LEVEL 2: KEANDALAN TINGGI (DOKUMEN EKSTERNAL DARI PIHAK INDEPENDEN)</text>
    <text class="text-accent-blue" x="795" y="38" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="end">Rating: ★★★★☆</text>
    <text class="svg-text" x="14" y="36" fill="#cbd5e1" font-size="8">Contoh: Rekening koran asli cetak bank, Faktur tagihan dari vendor pihak ketiga, Sertifikat hak milik tanah BPN, Perhitungan ulang matematis (Recalculation).</text>
  </g>

  <g transform="translate(45, 190)">
    <rect class="svg-card" x="0" y="0" width="810" height="52" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="810" height="18" rx="8" fill="url(#ev3)" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="14" y="14" fill="#fbbf24" font-size="9" font-weight="800">LEVEL 3: KEANDALAN SEDANG (DOKUMEN INTERNAL DENGAN SISTEM SPI YANG EFEKTIF)</text>
    <text class="text-accent-amber" x="795" y="14" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="end">Rating: ★★★☆☆</text>
    <text class="svg-text" x="14" y="36" fill="#cbd5e1" font-size="8">Contoh: Surat Perintah Kerja (SPK) bernomor urut tercetak, Laporan penerimaan barang gudang terotorisasi, Bukti kas keluar bertanda tangan lengkap.</text>
  </g>

  <g transform="translate(45, 250)">
    <rect class="svg-card" x="0" y="0" width="810" height="52" rx="8" fill="#0f172a" stroke="#f87171" stroke-width="1.5"/>
    <rect x="0" y="0" width="810" height="18" rx="8" fill="url(#ev4)" fill-opacity="0.2"/>
    <text class="text-accent-red" x="14" y="14" fill="#f87171" font-size="9" font-weight="800">LEVEL 4: KEANDALAN TERENDAH (PERNYATAAN LISAN MANAJEMEN / INTERNAL TANPA SPI)</text>
    <text class="text-accent-red" x="795" y="14" fill="#f87171" font-size="7.5" font-weight="700" text-anchor="end">Rating: ★★☆☆☆</text>
    <text class="svg-text" x="14" y="36" fill="#cbd5e1" font-size="8">Contoh: Wawancara lisan (Inquiry) dengan direksi, Memo internal tanpa otorisasi. Catatan: Wajib dikuatkan dengan bukti dokumenter pendukung (Corroborating Evidence).</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8" font-style="italic" text-anchor="middle">Prinsip SA 500: Bukti asli lebih andal daripada salinan fotokopi; bukti yang dibuat pihak ketiga independen lebih andal daripada buatan internal klien.</text>
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
