import type { Reading } from '../../../types';
import { CASE_COMPETITIVE_ADVANTAGE_STAKEHOLDER } from '../manstratPracticeCases';

const SVG_STRATEGY_HIERARCHY = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">HIERARKI STRATEGI &amp; SIMBIOSIS PEMANGKU KEPENTINGAN (DESS ET AL.)</text>
  
  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">CORPORATE LEVEL</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">"What business to be in?":</text>
  <text x="125" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Alokasi portofolio bisnis</text>
  <text x="125" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Diversifikasi M&amp;A &amp; Aliansi</text>
  <text x="125" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Manajemen sinergi grup</text>
  <text x="125" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Direksi &amp; Pemegang Saham</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="340" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">BUSINESS LEVEL</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">"How to compete &amp; win?":</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Cost Leadership</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Diferensiasi Nilai Unik</text>
  <text x="340" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Fokus Pasar Ceruk</text>
  <text x="340" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">General Manager SBU</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="555" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">FUNCTIONAL LEVEL</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">"How to execute?":</text>
  <text x="555" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pemasaran, R&amp;D, Operasi</text>
  <text x="555" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Keuangan &amp; Manajemen SDM</text>
  <text x="555" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Integrasi rantai pasok</text>
  <text x="555" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Departemen Fungsional</text>
</svg>`;

export const TM1_READING: Reading = {
  tm: 1,
  title: 'Strategic Management: Creating Competitive Advantages, Proses Strategik, & Simbiosis Pemangku Kepentingan',
  ref: 'Gregory G. Dess, G.T. Lumpkin, Alan B. Eisner & Gerry McNamara (Strategic Management 10e/11e) Bab 1 | Michael Porter What is Strategy?',
  intro: 'TM 1 membahas definisi dan fondasi hakiki manajemen strategik: analisis, keputusan, dan tindakan yang diambil organisasi untuk menciptakan dan mempertahankan keunggulan bersaing (Sustainable Competitive Advantage), 4 atribut kunci kepemimpinan strategik, perbandingan pandangan Zero-Sum vs Simbiosis Pemangku Kepentingan (Stakeholder Symbiosis), perbedaan esensial antara Efektivitas Operasional vs Strategic Positioning (Michael Porter), serta hierarki strategi 3 tingkatan (Corporate, Business, dan Functional).',
  objectives: [
    'Mendefinisikan keunggulan bersaing berkelanjutan (Sustainable Competitive Advantage).',
    'Menjelaskan 4 atribut kunci manajemen strategik (Arah tujuan umum, multi-stakeholder, jangka panjang vs pendek, efisiensi vs efektivitas).',
    'Menganalisis konsep Simbiosis Pemangku Kepentingan (Stakeholder Symbiosis) vs Zero-Sum View.',
    'Membedakan peran manajer pada 3 tingkatan hierarki strategi: Corporate, Business, dan Functional Level.',
    'Menjelaskan mengapa Efektivitas Operasional (OE) saja tidak mencukupi untuk keunggulan bersaing menurut Michael Porter.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 1.1: Tiga Tingkatan Hierarki Strategi Organisasi dan Integrasi Arah Kepemimpinan.',
      svg: SVG_STRATEGY_HIERARCHY
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 1'
    },
    {
      kind: 'table',
      headers: ['Tingkatan Strategi', 'Pertanyaan Strategis Inti', 'Ruang Lingkup Keputusan', 'Aktor Penanggung Jawab Utama'],
      rows: [
        ['Corporate-Level Strategy', 'Bisnis apa yang seharusnya kita masuki untuk memaksimalkan nilai?', 'Portofolio industri, diversifikasi terkait/tak terkait, merger, akuisisi, aliansi, dan alokasi modal antar-SBU.', 'CEO, Dewan Direksi, dan Komite Investasi Korporasi.'],
        ['Business-Level Strategy', 'Bagaimana cara kita bersaing dan memenangkan pasar industri ini?', 'Penetapan posisi bersaing: Cost Leadership, Diferensiasi unik, atau Fokus ceruk pasar tertentu.', 'Presiden Direktur Unit Bisnis Strategis (SBU Head).'],
        ['Functional-Level Strategy', 'Bagaimana aktivitas operasional mendukung keunggulan bersaing SBU?', 'Efisiensi rantai pasok, riset produk baru, kampanye branding, dan pengelolaan modal kerja.', 'Manajer Pemasaran, Keuangan, Operasi, dan SDM.']
      ],
      caption: 'Tabel 1.0: Matriks hierarki strategi organisasi modern.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Efektivitas Operasional vs Penentuan Posisi Strategis (Michael Porter)'
    },
    {
      kind: 'table',
      headers: ['Dimensi Evaluasi', 'Efektivitas Operasional (Operational Effectiveness / OE)', 'Posisi Strategis (Strategic Positioning)'],
      rows: [
        ['Definisi Konsep', 'Melakukan aktivitas serupa dengan cara yang LEBIH BAIK daripada pesaing (contoh: Six Sigma, eliminasi cacat, TQM).', 'Melakukan aktivitas yang BERBEDA dari pesaing atau melakukan aktivitas serupa dengan CARA YANG BERBEDA.'],
        ['Sifat Keunggulan', 'Sementara dan mudah ditiru; teknologi dan perangkat lunak terbaik dapat dibeli oleh siapa saja.', 'Berkelanjutan; berakar pada konfigurasi sistem aktivitas terintegrasi yang saling memperkuat (*Activity System Fit*).'],
        ['Hasil Akhir Industri', 'Konvergensi kompetitif dan perang harga berdarah yang menghancurkan profitabilitas seluruh industri.', 'Keunggulan bersaing unik di mana masing-masing perusahaan melayani segmen kebutuhan yang berbeda dengan laba sehat.']
      ],
      caption: 'Tabel 1.1: Komparasi doktrin strategis Michael Porter.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Jebakan Zero-Sum vs Simbiosis Pemangku Kepentingan',
      prompt: 'Sebuah pabrik tekstil multinasional memutuskan memotong upah buruh sebesar 20% dan membuang limbah pewarna kimia ke sungai tanpa pengolahan demi mencapai target laba kuartalan pemegang saham. Evaluasi keputusan ini menggunakan konsep Simbiosis Pemangku Kepentingan (Stakeholder Symbiosis)!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Pola Pikir yang Digunakan**: Manajemen terjebak dalam **Zero-Sum View** (mengira memeras buruh dan merusak alam akan menambah kekayaan pemegang saham).',
            '**Konsekuensi Nyata**: Tindakan ini memicu pemogokan massal pekerja, boikot konsumen global pecinta lingkungan, dan penutupan izin pabrik oleh kementerian lingkungan hidup.',
            '**Pendekatan Simbiosis Pemangku Kepentingan**: Manajemen seharusnya mengadopsi prinsip *Creating Shared Value (CSV)*: mengolah limbah menjadi bahan daur ulang bernilai ekonomis dan memberikan upah berkeadilan yang memicu lonjakan produktivitas buruh, sehingga laba pemegang saham tumbuh sehat tanpa risiko hukum.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 1'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Konsep Keunggulan Bersaing', 'Definisi keunggulan bersaing berkelanjutan dan 4 atribut manajemen strategik.', 'Mampu mengidentifikasi orientasi strategis korporasi.'],
        ['2', 'Simbiosis Pemangku Kepentingan', 'Pembedaan zero-sum vs stakeholder symbiosis dalam penciptaan nilai bersama.', 'Mampu menganalisis benturan kepentingan pemegang saham vs masyarakat.'],
        ['3', 'OE vs Strategic Positioning', 'Kritik Michael Porter terhadap efektivitas operasional murni.', 'Mampu membedakan strategi positioning unik vs sekadar efisiensi operasional.']
      ],
      caption: 'Tabel 1.2: Peta penguasaan submateri TM 1 Manajemen Strategik.'
    },
    CASE_COMPETITIVE_ADVANTAGE_STAKEHOLDER,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Strategi Adalah Menolak Trade-Off Murahan**: Strategi sejati bukan tentang mencoba menyenangkan semua orang, melainkan tentang memilih batasan yang jelas mengenai apa yang tidak akan dilakukan perusahaan.',
        '**Fit Sistem Aktivitas**: Keunggulan bersaing yang paling sulit ditiru pesaing adalah rantai aktivitas yang saling mengunci (*interlocking activities*), di mana meniru satu bagian saja tidak akan menghasilkan efek apa-apa.',
        '**Pemangku Kepentingan Saling Menguatkan**: Perusahaan tidak beroperasi di ruang hampa; keberhasilan pemegang saham bergantung penuh pada kepuasan pelanggan, dedikasi karyawan, dan keharmonisan lingkungan komunitas.'
      ]
    }
  ]
};
