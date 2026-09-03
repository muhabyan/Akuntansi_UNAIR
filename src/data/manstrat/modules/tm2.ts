import type { Reading } from '../../../types';
import { CASE_PORTER_FIVE_FORCES_GROUPS } from '../manstratPracticeCases';

const SVG_FIVE_FORCES = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMns2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="centerGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMns2)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">MODEL 5 KEKUATAN BERSAING INDUSTRI (MICHAEL E. PORTER)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">FIVE FORCES</text>

  <!-- Force 1: Threat of New Entrants -->
  <g transform="translate(325, 68)">
    <rect class="svg-card" x="0" y="0" width="250" height="65" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text class="text-accent-blue" x="125" y="20" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">1. ANCAMAN PENDATANG BARU</text>
    <text class="svg-text" x="125" y="36" fill="#cbd5e1" font-size="8" text-anchor="middle">Skala ekonomis, hak paten,</text>
    <text class="svg-text" x="125" y="50" fill="#cbd5e1" font-size="8" text-anchor="middle">switching costs &amp; saluran distribusi</text>
    <polygon points="125,72 120,65 130,65" fill="#38bdf8"/>
  </g>

  <!-- Force 2: Bargaining Power of Suppliers -->
  <g transform="translate(35, 145)">
    <rect class="svg-card" x="0" y="0" width="245" height="95" rx="8" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <text class="text-accent-green" x="122" y="20" fill="#34d399" font-size="10" font-weight="800" text-anchor="middle">2. DAYA TAWAR PEMASOK</text>
    <text class="svg-text" x="12" y="42" fill="#cbd5e1" font-size="8">• Konsentrasi pemasok dominan</text>
    <text class="svg-text" x="12" y="58" fill="#cbd5e1" font-size="8">• Diferensiasi input bahan baku unik</text>
    <text class="svg-text" x="12" y="74" fill="#cbd5e1" font-size="8">• Ancaman integrasi ke depan (Forward)</text>
    <polygon points="255,48 248,43 248,53" fill="#34d399"/>
  </g>

  <!-- Force 3: INDUSTRY RIVALRY (Center) -->
  <g transform="translate(315, 140)">
    <rect class="svg-card" x="0" y="0" width="270" height="105" rx="12" fill="#0f172a" stroke="#f87171" stroke-width="2"/>
    <rect x="0" y="0" width="270" height="28" rx="12" fill="url(#centerGrad)" fill-opacity="0.25"/>
    <text class="text-accent-red" x="135" y="20" fill="#f87171" font-size="10.5" font-weight="800" text-anchor="middle">3. RIVALITAS ANTAR PESAING</text>
    <text class="svg-text" x="12" y="46" fill="#cbd5e1" font-size="8">• Pertumbuhan pasar lambat / perang harga</text>
    <text class="svg-text" x="12" y="62" fill="#cbd5e1" font-size="8">• Hambatan keluar (Exit Barriers) tinggi</text>
    <text class="svg-text" x="12" y="78" fill="#cbd5e1" font-size="8">• Jumlah &amp; kapasitas kompetitor seimbang</text>
    <rect x="15" y="85" width="240" height="15" rx="4" fill="#dc2626" fill-opacity="0.3"/>
    <text class="text-accent-red" x="135" y="96" fill="#f87171" font-size="7.5" font-weight="700" text-anchor="middle">Pusat Profitabilitas Industri</text>
  </g>

  <!-- Force 4: Bargaining Power of Buyers -->
  <g transform="translate(620, 145)">
    <rect class="svg-card" x="0" y="0" width="245" height="95" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <text class="text-accent-amber" x="122" y="20" fill="#fbbf24" font-size="10" font-weight="800" text-anchor="middle">4. DAYA TAWAR PEMBELI</text>
    <text class="svg-text" x="12" y="42" fill="#cbd5e1" font-size="8">• Pembelian volume besar (B2B)</text>
    <text class="svg-text" x="12" y="58" fill="#cbd5e1" font-size="8">• Produk komoditas minim diferensiasi</text>
    <text class="svg-text" x="12" y="74" fill="#cbd5e1" font-size="8">• Ancaman integrasi ke belakang (Backward)</text>
    <polygon points="-5,48 2,43 2,53" fill="#fbbf24"/>
  </g>

  <!-- Force 5: Threat of Substitutes -->
  <g transform="translate(325, 255)">
    <rect class="svg-card" x="0" y="0" width="250" height="65" rx="8" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <text class="text-accent-purple" x="125" y="20" fill="#a78bfa" font-size="10" font-weight="800" text-anchor="middle">5. ANCAMAN PRODUK SUBSTITUSI</text>
    <text class="svg-text" x="125" y="36" fill="#cbd5e1" font-size="8" text-anchor="middle">Alternatif lintas industri (misal: KA vs Pesawat),</text>
    <text class="svg-text" x="125" y="50" fill="#cbd5e1" font-size="8" text-anchor="middle">rasio harga/kinerja produk pengganti</text>
    <polygon points="125,-6 120,0 130,0" fill="#a78bfa"/>
  </g>

  <text class="svg-muted" x="150" y="325" fill="#94a3b8" font-size="8" font-style="italic">Semakin kuat akumulasi ke-5 kekuatan ini, semakin tertekan rata-rata profitabilitas (ROIC) industri.</text>
</svg>`;

export const TM2_READING: Reading = {
  tm: 2,
  title: 'Analisis Lingkungan Eksternal: PESTEL, Porters Five Forces, & Kelompok Strategis',
  ref: 'Dess et al. Bab 2 | Michael Porter Five Competitive Forces That Shape Strategy | Strategic Groups Mapping',
  intro: 'TM 2 membahas metode pemindaian lingkungan eksternal makro dan industri: kerangka kerja PESTEL (Politik, Ekonomi, Sosial-Budaya, Teknologi, Lingkungan Alami, Hukum), Model 5 Kekuatan Bersaing Michael Porter (Ancaman Pendatang Baru, Kekuatan Tawar Pemasok, Kekuatan Tawar Pembeli, Ancaman Produk Substitusi, dan Rivalitas Pesaing Sejenis), faktor pelengkap Kekuatan ke-6 (Complementors), serta teknik pemetaan Kelompok Strategis (Strategic Groups Map).',
  objectives: [
    'Menganalisis pengaruh 6 kekuatan makroeksternal menggunakan kerangka kerja PESTEL.',
    'Mendiagnosa potensi profitabilitas rata-rata industri menggunakan Model 5 Kekuatan Porter.',
    'Mengidentifikasi faktor pendorong hambatan masuk (Barriers to Entry) dan biaya beralih (Switching Costs).',
    'Menyusun Peta Kelompok Strategis (Strategic Groups Map) untuk mengidentifikasi rivalitas antar-kluster.',
    'Mengevaluasi peran produk komplementer (Complementors) dalam memperluas ukuran pasar industri.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 2.1: Model 5 Kekuatan Bersaing Michael E. Porter dalam Menentukan Profitabilitas Industri.',
      svg: SVG_FIVE_FORCES
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 2'
    },
    {
      kind: 'table',
      headers: ['Kekuatan Bersaing Porter', 'Kondisi yang Memperkuat Ancaman', 'Dampak Langsung Terhadap Laba Industri'],
      rows: [
        ['Ancaman Pendatang Baru', 'Ketiadaan skala ekonomis, kebutuhan modal rendah, akses distribusi bebas.', 'Menekan harga jual dan memaksa peningkatan investasi defensif.'],
        ['Kekuatan Tawar Pemasok', 'Pemasok terkonsolidasi monopoli, produk unik tanpa substitusi, switching cost tinggi.', 'Pemasok menaikkan harga bahan baku dan menyedot marjin laba industri.'],
        ['Kekuatan Tawar Pembeli', 'Pembeli terkonsentrasi besar, produk komoditas seragam, biaya beralih nol.', 'Konsumen menuntut diskon harga besar dan penambahan fitur gratis.'],
        ['Ancaman Produk Substitusi', 'Produk dari industri lain menawarkan trade-off harga-kinerja superior (contoh: Zoom menggantikan tiket pesawat dinas).', 'Menetapkan plafon batas atas harga (price ceiling) yang dapat dipatok industri.'],
        ['Rivalitas Pesaing Eksisting', 'Pertumbuhan industri lambat, biaya tetap pabrik tinggi, hambatan keluar tinggi.', 'Perang diskon harga brutal dan belanja promosi iklan yang membakar kas.']
      ],
      caption: 'Tabel 2.0: Matriks analisis 5 kekuatan bersaing Porter.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 7 Hambatan Masuk Pasar (Barriers to Entry)'
    },
    {
      kind: 'table',
      headers: ['Jenis Hambatan Masuk', 'Mekanisme Pertahanan Terhadap Pendatang Baru', 'Contoh Nyata Industri'],
      rows: [
        ['1. Skala Ekonomis Penawaran', 'Biaya per unit lebih murah pada volume produksi raksasa.', 'Pabrik perakitan mobil Toyota vs produsen mobil baru.'],
        ['2. Keuntungan Sisi Permintaan (Network Effects)', 'Konsumen enggan bergabung ke platform yang sepi pengguna.', 'Efek jaringan jutaan pengguna Tokopedia dan Shopee.'],
        ['3. Biaya Beralih Konsumen (Switching Costs)', 'Biaya finansial/waktu jika konsumen beralih ke merek pesaing.', 'Biaya migrasi sistem database ERP SAP ke vendor lain.'],
        ['4. Kebutuhan Modal Awal Masif', 'Tuntutan investasi belanja modal triliunan rupiah di awal.', 'Industri kilang minyak bumi dan telekomunikasi satelit.'],
        ['5. Akses Saluran Distribusi', 'Pemain petahana telah mengunci rak supermarket terbaik.', 'Produk Indofood menguasai rak minimarket di seluruh nusantara.'],
        ['6. Keunggulan Biaya Non-Skala', 'Kepemilikan paten formula rahasia dan lokasi geografis prima.', 'Formula rahasia konsentrat Coca-Cola dan tambang Grasberg Freeport.'],
        ['7. Kebijakan Regulasi Pemerintah', 'Kebutuhan izin lisensi ketat dari kementerian atau OJK.', 'Izin operasional perbankan umum dan spektrum frekuensi seluler.']
      ],
      caption: 'Tabel 2.1: Tujuh hambatan masuk industri menurut Michael Porter.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Perbedaan Produk Substitusi vs Pesaing Langsung',
      prompt: 'Apakah maskapai penerbangan Citilink merupakan produk substitusi bagi Garuda Indonesia? Dan apakah kereta api cepat Whoosh Jakarta-Bandung merupakan produk substitusi bagi penerbangan rute Jakarta-Bandung?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Pesaing Langsung (Direct Competitors)**: Citilink dan Garuda beroperasi di industri yang sama (industri penerbangan). Citilink BUKAN produk substitusi, melainkan **Pesaing Langsung** (bahkan dalam satu grup kepemilikan).',
            '**Produk Substitusi (Substitutes)**: Kereta cepat Whoosh berasal dari **INDUSTRI YANG BERBEDA** (industri transportasi perkeretaapian darat), namun memenuhi kebutuhan fungsi yang sama (mengantarkan penumpang dari Jakarta ke Bandung).',
            '**Kesimpulan**: Whoosh adalah **Produk Substitusi Sejati** yang mampu mematikan penerbangan pesawat rute Jakarta-Bandung karena waktu tempuh 45 menit yang jauh lebih efisien.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 2'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Analisis PESTEL Makro', 'Evaluasi 6 dimensi lingkungan umum dan tren disruptif.', 'Mampu mengidentifikasi peluang dan ancaman makroekonomi.'],
        ['2', 'Porter 5 Forces Model', 'Kalkulasi kekuatan tawar pembeli, pemasok, substitusi, dan hambatan masuk.', 'Mampu menentukan daya tarik dan profitabilitas industri.'],
        ['3', 'Strategic Groups Mapping', 'Plotting kelompok strategis 2 sumbu dimensi kunci.', 'Mampu memetakan posisi bersaing antar-kelompok rival.']
      ],
      caption: 'Tabel 2.2: Peta penguasaan submateri TM 2 Manajemen Strategik.'
    },
    CASE_PORTER_FIVE_FORCES_GROUPS,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Industri yang Menarik Adalah yang Kekuatannya Lemah**: Semakin lemah kelima kekuatan bersaing Porter dalam suatu industri, semakin tinggi rata-rata profitabilitas (ROI) yang dapat dinikmati seluruh perusahaan di dalamnya.',
        '**Substitusi Datang dari Luar Industri**: Waspadai produk substitusi karena sering kali datang dari industri teknologi yang sama sekali berbeda dan luput dari radar pengawasan divisi intelijen pasar konvensional.',
        '**Mobility Barriers Antar-Kelompok**: Kelompok strategis dipisahkan oleh hambatan mobilitas (*Mobility Barriers*); pemain LCC berbiaya hemat tidak bisa dengan mudah melompat menjadi maskapai mewah bintang lima.'
      ]
    }
  ]
};
