import type { Reading } from '../../../types';
import { CASE_PORTER_FIVE_FORCES_GROUPS } from '../manstratPracticeCases';

const SVG_FIVE_FORCES = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="28" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MODEL 5 KEKUATAN BERSAING INDUSTRI (MICHAEL E. PORTER)</text>
  
  <rect x="235" y="42" width="210" height="38" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="340" y="58" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">ANCAMAN PENDATANG BARU</text>
  <text x="340" y="72" fill="#94a3b8" font-size="7.5" text-anchor="middle">Skala ekonomis, paten, modal masuk</text>

  <rect x="25" y="92" width="180" height="42" rx="6" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="115" y="110" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">DAYA TAWAR PEMASOK</text>
  <text x="115" y="124" fill="#94a3b8" font-size="7.5" text-anchor="middle">Dominasi vendor, biaya beralih</text>

  <rect x="225" y="90" width="230" height="46" rx="8" fill="#0f172a" stroke="#f43f5e" stroke-width="2"/>
  <text x="340" y="109" fill="#f43f5e" font-size="10" font-weight="700" text-anchor="middle">RIVALITAS ANTAR PESAING</text>
  <text x="340" y="125" fill="#fca5a5" font-size="8" text-anchor="middle">Perang harga, diferensiasi, pertumbuhan pasar</text>

  <rect x="475" y="92" width="180" height="42" rx="6" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="565" y="110" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">DAYA TAWAR PEMBELI</text>
  <text x="565" y="124" fill="#94a3b8" font-size="7.5" text-anchor="middle">Volume beli, switching cost rendah</text>

  <rect x="235" y="148" width="210" height="38" rx="6" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="340" y="164" fill="#a78bfa" font-size="9" font-weight="700" text-anchor="middle">ANCAMAN PRODUK SUBSTITUSI</text>
  <text x="340" y="178" fill="#94a3b8" font-size="7.5" text-anchor="middle">Substitusi fungsi, tren harga-kinerja</text>
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
