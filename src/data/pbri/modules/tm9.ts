import type { Reading } from '../../../types';
import { CASE_AUDIT_RISK_MODEL } from '../pbriPracticeCases';

const SVG_AUDIT_RISK_MODEL = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MODEL RISIKO AUDIT (AUDIT RISK MODEL - SA 315 &amp; SA 330)</text>
  
  <rect x="30" y="55" width="135" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="97" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">AAR</text>
  <text x="97" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Acceptable Audit Risk:</text>
  <text x="97" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Tingkat risiko opini</text>
  <text x="97" y="134" fill="#cbd5e1" font-size="8.5" text-anchor="middle">WTP terbit pd LK</text>
  <text x="97" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">salah saji material</text>
  <text x="97" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">(Target: 1% - 5%)</text>

  <text x="180" y="130" fill="#94a3b8" font-size="18" font-weight="700" text-anchor="middle">=</text>

  <rect x="195" y="55" width="135" height="145" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
  <text x="262" y="78" fill="#f87171" font-size="10.5" font-weight="700" text-anchor="middle">INHERENT RISK (IR)</text>
  <text x="262" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Risiko Bawaan:</text>
  <text x="262" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Kerentanan akun</text>
  <text x="262" y="134" fill="#cbd5e1" font-size="8.5" text-anchor="middle">terhadap salah saji</text>
  <text x="262" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">tanpa kontrol</text>
  <text x="262" y="175" fill="#fca5a5" font-size="9" font-weight="700" text-anchor="middle">(Di luar kendali auditor)</text>

  <text x="345" y="130" fill="#94a3b8" font-size="18" font-weight="700" text-anchor="middle">×</text>

  <rect x="360" y="55" width="135" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="427" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">CONTROL RISK (CR)</text>
  <text x="427" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Risiko Pengendalian:</text>
  <text x="427" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Risiko kontrol klien</text>
  <text x="427" y="134" fill="#cbd5e1" font-size="8.5" text-anchor="middle">gagal cegah/deteksi</text>
  <text x="427" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">salah saji material</text>
  <text x="427" y="175" fill="#fde68a" font-size="9" font-weight="700" text-anchor="middle">(Diuji lewat TOC)</text>

  <text x="510" y="130" fill="#94a3b8" font-size="18" font-weight="700" text-anchor="middle">×</text>

  <rect x="525" y="55" width="135" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="592" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">PLANNED PDR</text>
  <text x="592" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Risiko Deteksi:</text>
  <text x="592" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Risiko bukti auditor</text>
  <text x="592" y="134" fill="#cbd5e1" font-size="8.5" text-anchor="middle">gagal deteksi salah saji</text>
  <text x="592" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">PDR = AAR / (IR × CR)</text>
  <text x="592" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">(Menentukan Bukti!)</text>
</svg>`;

export const TM9_READING: Reading = {
  tm: 9,
  title: 'Penilaian Risiko Audit, Risiko Bawaan, & Audit Risk Model (SA 315 & SA 330)',
  ref: 'Arens 16e Ch. 9 | SA 315 (Revisi 2019), SA 330, SA 200 | Audit Risk Model',
  intro: 'TM 9 membahas model risiko audit kuantitatif dan kualitatif: Acceptable Audit Risk (AAR), Inherent Risk (IR), Control Risk (CR), dan Planned Detection Risk (PDR). Serta pengaruh tingkat PDR terhadap kuantitas, sifat (nature), saat (timing), dan luas (extent) pengujian substantif auditor.',
  objectives: [
    'Menghitung Planned Detection Risk (PDR) menggunakan rumus Audit Risk Model.',
    'Menganalisis hubungan berbanding terbalik (invers) antara PDR dan Jumlah Bukti Substantif yang Diperlukan.',
    'Mengidentifikasi faktor-faktor penentu Tingkat Risiko Bawaan (Inherent Risk) spesifik akun.',
    'Menghubungkan Risk of Material Misstatement (RMM = IR × CR) dengan respons auditor sesuai SA 330.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 9.1: Hubungan Komponen Model Risiko Audit (SA 315 & SA 330).',
      svg: SVG_AUDIT_RISK_MODEL
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 9'
    },
    {
      kind: 'table',
      headers: ['Komponen Model Risiko', 'Definisi & Sifat Pengendalian', 'Faktor Penentu Utama', 'Dampak terhadap Bukti Audit'],
      rows: [
        ['Acceptable Audit Risk (AAR)', 'Tingkat kesediaan auditor menerima kemungkinan laporan keuangan mengandung salah saji material setelah audit selesai.', 'Ketergantungan pengguna eksternal (emiten publik), kesehatan finansial klien, integritas manajemen.', 'AAR Rendah -> Auditor ekstra hati-hati -> Bukti audit BANYAK.'],
        ['Inherent Risk (IR)', 'Kerentanan asersi terhadap salah saji material dengan asumsi tidak ada pengendalian internal terkait.', 'Sifat bisnis, transaksi pihak berelasi, estimasi akuntansi kompleks, kerentanan aset dicuri (kas/emas).', 'IR Tinggi -> RMM Tinggi -> PDR Rendah -> Bukti audit BANYAK.'],
        ['Control Risk (CR)', 'Risiko pengendalian internal klien gagal mencegah atau mendeteksi salah saji material secara tepat waktu.', 'Efektivitas desain dan operasi pengendalian internal (diuji melalui Test of Controls).', 'CR Tinggi -> Kontrol klien buruk -> Auditor tidak bisa mengandalkan kontrol -> Bukti substantif BANYAK.'],
        ['Planned Detection Risk (PDR)', 'Risiko bukti pengujian audit gagal mendeteksi salah saji yang melampaui performance materiality.', 'Dihitung secara matematis: PDR = AAR / (IR × CR).', 'PDR Rendah -> Toleransi risiko deteksi kecil -> Sampel audit BESAR & pengujian RINCI.']
      ],
      caption: 'Tabel 9.0: Matriks komponen Audit Risk Model.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Audit Risk Model'
    },
    {
      kind: 'formula',
      text: `\\text{Audit Risk Model}: \\quad AAR = IR \\times CR \\times PDR \\quad \\Longleftrightarrow \\quad PDR = \\frac{AAR}{IR \\times CR}
\\text{Risk of Material Misstatement (RMM)} = IR \\times CR
\\text{Hubungan Kunci}: \\quad PDR \\downarrow \\quad \\Longrightarrow \\quad \\text{Jumlah Bukti Substantif (Sample Size)} \\uparrow`,
      note: 'Auditor tidak dapat mengubah IR dan CR klien (faktor independen klien), namun auditor MENGENDALIKAN PDR dengan mengatur luas bukti substantif yang dikumpulkan.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Perhitungan PDR PT Nusantara Tech',
      prompt: 'KAP menetapkan AAR = 2% untuk PT Nusantara Tech (klien IPO). Auditor menilai Inherent Risk akun Pendapatan = 80% dan Control Risk = 50%. Hitung Planned Detection Risk (PDR) dan jelaskan dampaknya terhadap pengujian saldo piutang!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Perhitungan PDR**: PDR = 2% / (80% × 50%) = 0,02 / 0,40 = **5,0% (Sangat Rendah)**.',
            '**Dampak terhadap Pengujian**: PDR yang sangat rendah (5%) mengharuskan auditor mengumpulkan bukti substantif dalam jumlah sangat besar: mengirim konfirmasi positif dengan cakupan >80% total nilai piutang, melakukan uji pisah batas ketat 10 hari sebelum & sesudah tanggal neraca, serta memeriksa bukti penerimaan kas setelah tanggal neraca.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 9'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Rumus Audit Risk Model', 'Kalkulasi matematis PDR, AAR, IR, dan CR.', 'Mampu menghitung PDR dan menganalisis dampak kenaikan/penurunan risiko.'],
        ['2', 'Faktor Penentu Inherent Risk', 'Identifikasi faktor risiko industri, kompleksitas transaksi, dan estimasi.', 'Mampu menetapkan IR tinggi vs rendah pada akun aset dan liabilitas.'],
        ['3', 'Hubungan PDR vs Bukti Audit', 'Logika hubungan berbanding terbalik PDR terhadap ukuran sampel pengujian.', 'Mampu menyusun strategi pengujian berbasis risiko sesuai SA 330.']
      ],
      caption: 'Tabel 9.2: Peta penguasaan submateri TM 9 PBR I.'
    },
    CASE_AUDIT_RISK_MODEL,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Hubungan Invers PDR & Bukti**: PDR berbanding TERBALIK dengan jumlah bukti audit. Semakin rendah PDR, semakin banyak bukti substantif yang wajib dikumpulkan.',
        '**AAR vs Planned Evidence**: Semakin rendah AAR yang diinginkan (semakin tinggi kehati-hatian auditor), semakin banyak bukti audit yang diperlukan.',
        '**RMM di Tingkat Asersi**: Penilaian IR dan CR dilakukan pada tingkat asersi spesifik untuk setiap saldo akun material (SA 315).'
      ]
    }
  ]
};
