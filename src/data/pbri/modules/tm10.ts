import type { Reading } from '../../../types';
import { CASE_AUDIT_RISK_MODEL } from '../pbriPracticeCases';

const SVG_AUDIT_RISK_FORMULA = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MODEL RISIKO AUDIT (AUDIT RISK MODEL - SA 200 &amp; SA 315)</text>
  
  <!-- PDR Box -->
  <rect x="30" y="55" width="180" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="120" y="80" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">Planned Detection Risk</text>
  <text x="120" y="102" fill="#f8fafc" font-size="14" font-weight="700" text-anchor="middle">PDR = AAR / RMM</text>
  <line x1="45" y1="115" x2="195" y2="115" stroke="#334155"/>
  <text x="120" y="135" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Risiko bahwa prosedur</text>
  <text x="120" y="150" fill="#cbd5e1" font-size="9.5" text-anchor="middle">substantif auditor gagal</text>
  <text x="120" y="165" fill="#cbd5e1" font-size="9.5" text-anchor="middle">mendeteksi salah saji</text>
  <text x="120" y="188" fill="#7dd3fc" font-size="10" font-weight="700" text-anchor="middle">(Dapat Dikendalikan)</text>

  <!-- Equal sign -->
  <text x="225" y="135" fill="#94a3b8" font-size="20" font-weight="700" text-anchor="middle">=</text>

  <!-- AAR Box -->
  <rect x="245" y="55" width="125" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="307" y="80" fill="#10b981" font-size="11.5" font-weight="700" text-anchor="middle">AAR</text>
  <text x="307" y="98" fill="#cbd5e1" font-size="9" text-anchor="middle">Acceptable</text>
  <text x="307" y="112" fill="#cbd5e1" font-size="9" text-anchor="middle">Audit Risk</text>
  <line x1="255" y1="125" x2="360" y2="125" stroke="#334155"/>
  <text x="307" y="145" fill="#94a3b8" font-size="8.5" text-anchor="middle">Risiko auditor</text>
  <text x="307" y="160" fill="#94a3b8" font-size="8.5" text-anchor="middle">keliru terbitkan</text>
  <text x="307" y="175" fill="#94a3b8" font-size="8.5" text-anchor="middle">opini WTP</text>
  <text x="307" y="192" fill="#34d399" font-size="9" font-weight="700" text-anchor="middle">(Biasanya 1-5%)</text>

  <!-- Division line -->
  <text x="385" y="135" fill="#94a3b8" font-size="20" font-weight="700" text-anchor="middle">/</text>

  <!-- RMM Box (IR x CR) -->
  <rect x="405" y="55" width="245" height="150" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="527" y="80" fill="#f43f5e" font-size="11.5" font-weight="700" text-anchor="middle">RMM = Inherent (IR) &times; Control (CR)</text>
  <text x="527" y="98" fill="#cbd5e1" font-size="9" text-anchor="middle">Risk of Material Misstatement (Risiko Klien)</text>
  <line x1="420" y1="110" x2="635" y2="110" stroke="#334155"/>
  
  <rect x="415" y="120" width="105" height="75" rx="4" fill="#0f172a" stroke="#f43f5e"/>
  <text x="467" y="140" fill="#fca5a5" font-size="9.5" font-weight="700" text-anchor="middle">Inherent (IR)</text>
  <text x="467" y="158" fill="#94a3b8" font-size="8" text-anchor="middle">Kerentanan akun</text>
  <text x="467" y="172" fill="#94a3b8" font-size="8" text-anchor="middle">tanpa kontrol</text>

  <rect x="535" y="120" width="105" height="75" rx="4" fill="#0f172a" stroke="#f59e0b"/>
  <text x="587" y="140" fill="#fde68a" font-size="9.5" font-weight="700" text-anchor="middle">Control (CR)</text>
  <text x="587" y="158" fill="#94a3b8" font-size="8" text-anchor="middle">Risiko kontrol gagal</text>
  <text x="587" y="172" fill="#94a3b8" font-size="8" text-anchor="middle">cegah salah saji</text>
</svg>`;

export const TM10_READING: Reading = {
  tm: 10,
  title: 'Model Risiko Audit (Audit Risk Model) & Penilaian Risiko Signifikan',
  ref: 'Arens Ch. 9 | SA 200, SA 315 Revisi',
  intro: 'Modul Pembelajaran Mendalam PBR I TM 10: Menguasai Model Risiko Audit (Audit Risk Model), hubungan matematis dan konseptual antara Acceptable Audit Risk (AAR), Inherent Risk (IR), Control Risk (CR), dan Planned Detection Risk (PDR), serta perancangan luas bukti substantif.',
  objectives: [
    'Mendefinisikan 4 komponen Model Risiko Audit: AAR, IR, CR, dan PDR.',
    'Menjelaskan konsep Risiko Kesalahan Penyajian Material (Risk of Material Misstatement - RMM = IR × CR).',
    'Menghitung Planned Detection Risk (PDR) secara kuantitatif dan kualitatif.',
    'Menganalisis hubungan terbalik antara PDR dengan kuantitas dan kualitas bukti substantif yang harus dikumpulkan.',
    'Mengidentifikasi faktor-faktor penentu Inherent Risk (sifat bisnis, integritas manajemen, estimasi akuntansi rumit).',
    'Mengidentifikasi Risiko Signifikan (Significant Risks) yang membutuhkan pertimbangan audit khusus.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Struktur dan Hubungan Rumus Model Risiko Audit',
      svg: SVG_AUDIT_RISK_FORMULA,
      caption: 'Gambar 10.1: Penentuan Planned Detection Risk berdasarkan AAR dan RMM.'
    },

    { kind: 'h2', text: '1. Komponen Model Risiko Audit' },
    {
      kind: 'table',
      headers: ['Komponen Risiko', 'Definisi Konseptual', 'Pihak yang Mengendalikan'],
      rows: [
        ['Acceptable Audit Risk (AAR)', 'Tingkat risiko yang bersedia ditanggung auditor bahwa laporan keuangan mengandung salah saji material setelah opini WTP diterbitkan.', 'Ditetapkan secara independen oleh **Auditor** (biasanya 1% s.d 5%).'],
        ['Inherent Risk (IR)', 'Kerentanan suatu asersi terhadap salah saji material sebelum mempertimbangkan efektivitas pengendalian internal.', 'Melekat pada karakteristik bisnis **Klien** (Auditor hanya menilai).'],
        ['Control Risk (CR)', 'Risiko bahwa pengendalian internal klien gagal mencegah atau mendeteksi dan mengoreksi salah saji material secara tepat waktu.', 'Dihasilkan oleh sistem **Klien** (Auditor hanya menguji).'],
        ['Planned Detection Risk (PDR)', 'Risiko bahwa prosedur audit substantif yang dilaksanakan auditor gagal mendeteksi salah saji yang melebihi ambang materialitas pelaksanaan.', '**Dikendalikan oleh Auditor** melalui jumlah, waktu, dan jenis bukti pengujian substantif.']
      ],
      caption: 'Tabel 10.1: Empat komponen pembentuk Model Risiko Audit.'
    },

    {
      kind: 'formula',
      text: 'PDR = \\frac{AAR}{IR \\times CR} = \\frac{AAR}{RMM}',
      note: 'Makin TINGGI risiko klien (IR dan CR tinggi) -> PDR menjadi makin RENDAH -> Kebutuhan BUKTI SUBSTANTIF menjadi makin BANYAK!'
    },

    CASE_AUDIT_RISK_MODEL,

    { kind: 'h2', text: '2. Risiko Signifikan (Significant Risks - SA 315)' },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Kriteria Penilaian Risiko Signifikan',
      text: 'Risiko signifikan adalah risiko kesalahan penyajian material yang teridentifikasi dan dinilai yang, menurut pertimbangan auditor, **memerlukan pertimbangan audit khusus**. Contoh mencakup:\n• Risiko kecurangan (Fraud Risk - otomatis merupakan risiko signifikan sesuai SA 240).\n• Transaksi signifikan dengan pihak berelasi di luar jalur bisnis normal.\n• Estimasi akuntansi yang memiliki ketidakpastian pengukuran sangat tinggi.\n• Transaksi kompleks yang tidak biasa atau bersifat non-rutin.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 10' },
    {
      kind: 'ul',
      items: [
        '**RMM = IR × CR**: Merupakan risiko bawaan dan pengendalian yang sepenuhnya milik klien.',
        '**PDR Rendah**: Mengharuskan auditor mengumpulkan lebih banyak bukti, memilih staf yang lebih berpengalaman, dan melakukan pengujian mendekati tanggal neraca.',
        '**Hubungan AAR vs Bukti**: Jika AAR diturunkan (ingin audit lebih aman), bukti audit harus ditambah.',
        '**Risiko Signifikan**: Auditor TIDAK BOLEH hanya mengandalkan pengujian pengendalian tahun lalu!'
      ]
    }
  ]
};