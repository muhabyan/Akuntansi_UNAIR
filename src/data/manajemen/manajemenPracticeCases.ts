// =============================================================
// src/data/manajemen/manajemenPracticeCases.ts
// Kasus Praktik Interaktif Pengantar Manajemen (MNM101)
// Acuan: Richard L. Daft & Dorothy Marcic, Understanding Management 12e
// =============================================================
import type { ContentBlock } from '../../types';

// -------------------------------------------------------------
// KASUS 1: Budaya Organisasi & Lingkungan (TM 2)
// -------------------------------------------------------------
export const CASE_CULTURE_ENVIRONMENT: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 1: Transformasi Budaya Organisasi Menghadapi Disrupsi Teknologi',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Kondisi PT Telekomunikasi Nusantara',
      text: 'PT Telekomunikasi Nusantara menghadapi penurunan pendapatan tajam pada lini bisnis telepon kabel dan SMS tradisional akibat penetrasi aplikasi over-the-top (WhatsApp, Zoom). Budaya internal perusahaan sebelumnya sangat birokratis (*Consistency Culture*) dengan hierarki kaku dan pengambilan keputusan lambat. CEO baru ingin mengubah perusahaan menjadi penyedia solusi cloud dan AI yang lincah.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Analisis Tipologi Budaya Organisasi (Daft Matrix)',
      prompt: 'Pahami pergeseran dari Consistency Culture menuju Adaptability Culture:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Pemetaan 4 Tipe Budaya Organisasi'
        },
        {
          kind: 'ul',
          items: [
            '**Budaya Adaptabilitas (Adaptability Culture)**: Fokus eksternal + Fleksibilitas tinggi $\\rightarrow$ Karyawan diberi otonomi cepat merespons kebutuhan pasar dan berani bereksperimen dengan inovasi baru.',
            '**Budaya Pencapaian (Achievement Culture)**: Fokus eksternal + Stabilitas $\\rightarrow$ Menekankan pencapaian target penjualan terukur dan daya saing kompetitif agresif.',
            '**Budaya Keterlibatan / Klan (Involvement Culture)**: Fokus internal + Fleksibilitas $\\rightarrow$ Mengutamakan kebersamaan, partisipasi keluarga besar karyawan, dan kepuasan kerja.',
            '**Budaya Konsistensi (Consistency Culture)**: Fokus internal + Stabilitas $\\rightarrow$ Mengutamakan kepatuhan aturan, prosedur operasional standar (SOP), dan prediktabilitas.'
          ]
        },
        {
          kind: 'h3',
          text: '2. Rekomendasi Solusi Kepemimpinan Budaya'
        },
        {
          kind: 'p',
          text: 'CEO harus bertindak sebagai **Cultural Leader** dengan menggeser budaya menuju **Adaptability Culture**: meratakan hierarki manajemen (*bossless teams*), memberikan toleransi terhadap kegagalan eksperimen awal, serta menyelaraskan simbol, slogan, dan upacara penghargaan inovasi digital.'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 2: Pengambilan Keputusan Etis (TM 4)
// -------------------------------------------------------------
export const CASE_ETHICAL_DECISION: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 2: Evaluasi Keputusan Etis Penarikan Produk Cacat (Product Recall)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Dilema Manajer Kualitas PT Otomotif Prima',
      text: 'Tim quality control menemukan adanya potensi cacat pada sensor airbag yang memiliki probabilitas malfungsi 0,05% dalam kondisi cuaca ekstrem. Melakukan recall massal akan menelan biaya Rp 200 Miliar dan menghapus seluruh laba kuartal berjalan. Namun, mengabaikannya berisiko membahayakan nyawa pengemudi.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Analisis Pendekatan Etika Manajerial',
      prompt: 'Evaluasi dilema moral menggunakan 5 pendekatan etika bisnis:',
      blocks: [
        {
          kind: 'table',
          headers: ['Pendekatan Etika', 'Perspektif Penilaian', 'Keputusan yang Dihasilkan'],
          rows: [
            ['1. Utilitarian Approach', 'Kebaikan terbesar untuk jumlah orang terbanyak (*greatest good for greatest number*).', 'Menarik produk secara sukarela karena kerugian nyawa konsumen jauh melampaui kerugian finansial jangka pendek.'],
            ['2. Moral-Rights Approach', 'Menghormati hak-hak asasi manusia yang fundamental (hak atas keselamatan hidup dan hak mendapat informasi benar).', '**Wajib melakukan recall segera** dan mengumumkan secara transparan kepada publik.'],
            ['3. Justice Approach', 'Perlakuan adil, setara, dan tidak memihak (*fairness and impartiality*).', 'Memberikan kompensasi dan penggantian suku cadang gratis tanpa membedakan status sosial konsumen.'],
            ['4. Practical Approach', 'Keputusan dapat dipertanggungjawabkan secara terbuka di depan masyarakat luas dan media massa.', 'Apakah manajer bangga jika keputusannya dimuat di halaman depan surat kabar nasional besok pagi?']
          ],
          caption: 'Tabel Penerapan Kerangka Kerja Pengambilan Keputusan Etis.'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 3: Struktur Organisasi Adaptif (TM 7)
// -------------------------------------------------------------
export const CASE_ORG_STRUCTURE: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 3: Perancangan Struktur Organisasi Divisional vs Matriks',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Tantangan Ekspansi Global PT Consumer Goods Sejahtera',
      text: 'Perusahaan memproduksi 3 lini produk berbeda: Makanan Ringan, Minuman Kesehatan, dan Perawatan Kulit di 4 kawasan geografis (Asia Tenggara, Timur Tengah, Eropa, dan Amerika). Struktur fungsional lama mengalami sumbatan komunikasi antardepartemen dan lambat merespons selera konsumen lokal.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Rekomendasi Struktur Divisional Berbasis Produk/Geografis',
      prompt: 'Pahami kelebihan dan kekurangan transisi struktur organisasi:',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Struktur Divisional (Product / Geographic Division)**: Membentuk unit bisnis mandiri (*Strategic Business Units - SBU*) dengan fungsi pemasaran, R&D, dan keuangan sendiri di bawah pimpinan General Manager divisi.',
            '**Kelebihan**: Sangat responsif terhadap perubahan pasar spesifik, koordinasi antarfungsi dalam satu lini produk sangat cepat.',
            '**Kelemahan**: Terjadi duplikasi sumber daya (setiap divisi memiliki tim finance dan marketing sendiri) sehingga biaya overhead lebih tinggi.',
            '**Struktur Matriks (Matrix Structure)**: Menggabungkan rantai komando fungsional vertikal dan komando produk/proyek horisontal dengan *Dual Authority* (karyawan memiliki dua atasan sekaligus: Manajer Fungsional dan Manajer Produk).'
          ]
        }
      ]
    }
  ]
};