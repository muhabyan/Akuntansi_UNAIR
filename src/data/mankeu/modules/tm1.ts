import type { Reading } from '../../../types';

const SVG_FINANCIAL_GOAL = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">TUJUAN UTAMA MANAJEMEN KEUANGAN PERUSAHAAN (BRIGHAM CH. 1)</text>
  
  <rect x="40" y="55" width="280" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="180" y="80" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">1. Nilai Intrinsik Saham</text>
  <text x="180" y="100" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">INTRINSIC VALUE MAXIMIZATION</text>
  <line x1="60" y1="112" x2="300" y2="112" stroke="#334155"/>
  <text x="180" y="132" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Fokus jangka panjang fundamental</text>
  <text x="180" y="150" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Present Value Arus Kas Bebas (FCF)</text>
  <text x="180" y="168" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Nilai wajar sesungguhnya perusahaan</text>
  <text x="180" y="188" fill="#7dd3fc" font-size="10" font-weight="700" text-anchor="middle">(Tujuan Utama Manajemen)</text>

  <rect x="360" y="55" width="280" height="150" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="500" y="80" fill="#f43f5e" font-size="12" font-weight="700" text-anchor="middle">2. Konflik Keagenan (Agency)</text>
  <text x="500" y="100" fill="#fca5a5" font-size="11" font-weight="700" text-anchor="middle">STOCKHOLDERS VS MANAGERS</text>
  <line x1="380" y1="112" x2="620" y2="112" stroke="#334155"/>
  <text x="500" y="132" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Manajer mendahulukan kepentingan diri</text>
  <text x="500" y="150" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Mitigasi: Opsi saham &amp; kompensasi</text>
  <text x="500" y="168" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Pengawasan Dewan Komisaris &amp; RUPS</text>
  <text x="500" y="188" fill="#fca5a5" font-size="10" font-weight="700" text-anchor="middle">• Ancaman Pengambilalihan Paksa</text>
</svg>`;

export const TM1_READING: Reading = {
  tm: 1,
  title: 'An Overview of Financial Management & Corporate Goals',
  ref: 'Brigham & Houston Ch. 1',
  intro: 'Modul Pembelajaran Mendalam Manajemen Keuangan TM 1: Memahami hakikat manajemen keuangan, tujuan utama pemaksimalan nilai intrinsik saham jangka panjang, perbandingan bentuk entitas bisnis (Proprietorship, Partnership, Corporation), Teori Keagenan (Agency Conflict: Pemegang Saham vs Manajer vs Kreditor), dan etika bisnis keuangan.',
  objectives: [
    'Mendefinisikan ruang lingkup dan fungsi utama Manajemen Keuangan.',
    'Menjelaskan tujuan normatif perusahaan: Memaksimalkan Nilai Intrinsik Saham (Stockholders\' Wealth Maximization).',
    'Membedakan Nilai Intrinsik (Fundamental Value) vs Harga Pasar Saham Aktual (Market Price).',
    'Menganalisis 3 bentuk organisasi bisnis dengan kelebihan dan kelemahannya.',
    'Mengevaluasi Konflik Keagenan (Agency Problem) antara manajer dan pemegang saham serta mekanisme peredamannya.',
    'Memahami konflik antara Pemegang Saham dan Pemegang Obligasi (Bondholders).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Fokus Nilai Intrinsik vs Manajemen Konflik Keagenan',
      svg: SVG_FINANCIAL_GOAL,
      caption: 'Gambar 1.1: Tujuan fundamental manajemen keuangan korporasi modern.'
    },

    { kind: 'h2', text: '1. Tujuan Utama Manajemen Keuangan' },
    {
      kind: 'p',
      text: 'Tujuan utama manajer keuangan bukanlah semata-mata memaksimalkan laba akuntansi jangka pendek (*short-term profit maximization*), melainkan **memaksimalkan kekayaan pemegang saham jangka panjang**, yang tercermin dari **pemaksimalan Nilai Intrinsik Saham Perusahaan (Intrinsic Stock Value)**.'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Nilai Intrinsik vs Harga Pasar Saham',
      text: '• **Nilai Intrinsik (Intrinsic Value)**: Estimasi nilai wajar saham yang dihitung oleh analis berdasarkan pemahaman mendalam atas risiko dan arus kas masa depan perusahaan yang sesungguhnya.\n• **Harga Pasar (Market Price)**: Harga saham aktual di bursa efek berdasarkan persepsi investor marjinal.\n• **Ekuilibrium Pasar**: Tercapai ketika Harga Pasar tepat sama dengan Nilai Intrinsik.'
    },

    { kind: 'h2', text: '2. Tiga Bentuk Utama Organisasi Bisnis' },
    {
      kind: 'table',
      headers: ['Bentuk Badan Usaha', 'Kelebihan Utama', 'Kelemahan Utama'],
      rows: [
        ['1. Perusahaan Perseorangan (Sole Proprietorship)', 'Mudah dan murah dibentuk, sedikit regulasi pemerintah, pajak penghasilan individu.', 'Tanggung jawab pribadi tanpa batas (unlimited liability), sulit menghimpun modal besar, umur bisnis terbatas.'],
        ['2. Persekutuan (Partnership)', 'Mudah dibentuk, modal lebih besar dari perseorangan, pajak individu.', 'Tanggung jawab bersama tanpa batas (unlimited liability), potensi konflik antar sekutu.'],
        ['3. Perseroan Terbatas / Korporasi (Corporation)', 'Tanggung jawab terbatas (limited liability) sebatas modal disetor, kepemilikan mudah dialihkan lewat saham, akses modal pasar modal sangat besar, kelangsungan hidup abadi (*perpetual*).', 'Pajak berganda (*double taxation*: pajak penghasilan badan dan pajak dividen pemegang saham), regulasi dan biaya pendirian ketat.']
      ],
      caption: 'Tabel 1.1: Komparasi karakteristik tiga bentuk badan usaha komersial.'
    },

    { kind: 'h2', text: '3. Masalah Keagenan (Agency Problem) & Tata Kelola' },
    {
      kind: 'p',
      text: 'Hubungan keagenan timbul saat prinsipal (pemegang saham) mempekerjakan agen (manajer eksekutif) untuk mengelola perusahaan. Manajer mungkin tergoda untuk mengejar kenyamanan fasilitas pribadi (*perquisites*), memperbesar ukuran perusahaan tanpa nilai tambah (*empire building*), atau menghindari proyek berisiko bernilai tinggi.'
    },
    {
      kind: 'ul',
      items: [
        '**Kompensasi Berbasis Kinerja**: Memberikan opsi saham (*stock options*) atau bonus berbasis laba jangka panjang agar kepentingan manajer selaras dengan pemegang saham.',
        '**Intervensi Pemegang Saham**: Pemegang saham institusional besar (dana pensiun, reksadana) aktif mengawasi dewan direksi.',
        '**Ancaman Pemecatan (Threat of Firing)**: Rapat Umum Pemegang Saham (RUPS) memiliki wewenang mengganti direksi yang berkinerja buruk.',
        '**Ancaman Pengambilalihan Paksa (Hostile Takeover)**: Jika harga saham jatuh akibat inefisiensi, perusahaan lain akan membeli saham di pasar dan memecat manajemen lama.'
      ]
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 1' },
    {
      kind: 'ul',
      items: [
        '**Tujuan Finansial**: Memaksimalkan nilai intrinsik saham jangka panjang.',
        '**Agency Conflict**: Diminimalisasi melalui kompensasi saham, pengawasan komisaris, dan mekanisme pasar modal.',
        '**Bondholder vs Stockholder**: Pemegang saham menyukai proyek berisiko tinggi (*high return*), sedangkan pemegang obligasi mengutamakan keamanan pembayaran pokok dan bunga melalui perjanjian utang (*debt covenants*).'
      ]
    }
  ]
};