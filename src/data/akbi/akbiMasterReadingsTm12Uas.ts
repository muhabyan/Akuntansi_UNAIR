// =============================================================
// src/data/akbi/akbiMasterReadingsTm12Uas.ts
// Data master AKBI tahap 1D + Batch 4 patch: TM 12 sampai TM 14 dan Simulasi UAS.
// Sumber: AKBI_Master_Content_Bagian_2_TM12-UAS.md
// Catatan: file ini tidak mengubah UI dan tetap kompatibel dengan CourseLayout.
// =============================================================
import type { Reading } from '../../types';
import { applyAkbiReadingUxPolish } from './akbiReadingUxPolish';

export type AkbiMasterReading = Reading & {
  id: string;
  phase: 'pra_uts' | 'pra_uas';
  source: string;
  manualCheckCount: number;
};

export type AkbiReviewReading = Reading & {
  id: string;
  phase: 'review_uts' | 'review_uas';
  source: string;
  manualCheckCount: number;
};

export const AKBI_TM12_TM14_READINGS: Record<number, AkbiMasterReading> = 
{
  "12": {
    "id": "akbi-tm-12",
    "tm": 12,
    "title": "Biaya Overhead Pabrik: Departementalisasi",
    "ref": "AKBI Master Content Bagian 2 · TM 12",
    "source": "AKBI_Master_Content_Bagian_2_TM12-UAS.md",
    "phase": "pra_uas",
    "manualCheckCount": 29,
    "intro": "Departementalisasi biaya overhead pabrik adalah proses membagi pabrik ke dalam beberapa departemen agar biaya overhead dapat dikumpulkan, dialokasikan, dikendalikan, dan dibebankan secara lebih tepat. Pada TM 11, overhead dibahas dengan pendekatan umum. Perusahaan menghitung tarif overhead, membebankan overhead ke produksi, lalu membandingkannya dengan overhead aktual. Pada TM 12, proses itu dibuat lebih rinci. Overhead tidak lagi diperlakukan sebagai satu kelompok besar. Overhead dikumpulkan berdasarkan departemen.",
    "objectives": [
      "Menjelaskan konsep departementalisasi biaya overhead pabrik.",
      "Membedakan departemen produksi dan departemen jasa.",
      "Menjelaskan biaya departemen langsung dan biaya departemen tidak langsung.",
      "Menentukan dasar alokasi overhead yang sesuai untuk setiap departemen.",
      "Mengalokasikan biaya departemen jasa ke departemen produksi.",
      "Menghitung tarif overhead departemen.",
      "Membebankan overhead pabrik ke produk atau pesanan.",
      "Menghitung overhead lebih dibebankan dan kurang dibebankan.",
      "Menyelesaikan contoh alokasi departemen jasa dengan direct method dan sequential method berdasarkan data Pra-UAS.",
      "Menyusun format kerja departementalisasi overhead pabrik."
    ],
    "blocks": [

      {
        "kind": "h2",
        "text": "TM 12"
      },
      {
        "kind": "h2",
        "text": "TM 12 - Biaya Overhead Pabrik: Departementalisasi"
      },
      {
        "kind": "h3",
        "text": "1. Tujuan Pembelajaran"
      },
      {
        "kind": "p",
        "text": "Setelah mempelajari TM 12, mahasiswa diharapkan mampu:"
      },
      {
        "kind": "ol",
        "items": [
          "Menjelaskan konsep departementalisasi biaya overhead pabrik.",
          "Membedakan departemen produksi dan departemen jasa.",
          "Menjelaskan biaya departemen langsung dan biaya departemen tidak langsung.",
          "Menentukan dasar alokasi overhead yang sesuai untuk setiap departemen.",
          "Mengalokasikan biaya departemen jasa ke departemen produksi.",
          "Menghitung tarif overhead departemen.",
          "Membebankan overhead pabrik ke produk atau pesanan.",
          "Menghitung overhead lebih dibebankan dan kurang dibebankan.",
          "Menyelesaikan contoh alokasi departemen jasa dengan direct method dan sequential method berdasarkan data Pra-UAS.",
          "Menyusun format kerja departementalisasi overhead pabrik."
        ]
      },
      {
        "kind": "p",
        "text": "Dalam silabi AKBI, TM 12 ditempatkan pada pokok bahasan **Biaya Overhead Pabrik: Departementalisasi** dengan sumber CU 12 dan IMN 11. Pembahasan ini melanjutkan TM 11 tentang overhead pabrik yang direncanakan, aktual, dan dibebankan."
      },
      {
        "kind": "h3",
        "text": "2. Gambaran Umum"
      },
      {
        "kind": "p",
        "text": "Departementalisasi biaya overhead pabrik adalah proses membagi pabrik ke dalam beberapa departemen agar biaya overhead dapat dikumpulkan, dialokasikan, dikendalikan, dan dibebankan secara lebih tepat."
      },
      {
        "kind": "p",
        "text": "Pada TM 11, overhead dibahas dengan pendekatan umum. Perusahaan menghitung tarif overhead, membebankan overhead ke produksi, lalu membandingkannya dengan overhead aktual. Pada TM 12, proses itu dibuat lebih rinci. Overhead tidak lagi diperlakukan sebagai satu kelompok besar. Overhead dikumpulkan berdasarkan departemen."
      },
      {
        "kind": "p",
        "text": "Pendekatan ini penting karena setiap departemen memiliki karakter biaya yang berbeda. Departemen yang banyak memakai mesin lebih tepat menggunakan jam mesin sebagai dasar pembebanan. Departemen yang banyak memakai tenaga kerja lebih tepat menggunakan jam tenaga kerja langsung atau biaya tenaga kerja langsung. Dengan begitu, produk yang melewati departemen berbeda akan menerima pembebanan overhead sesuai sumber daya yang digunakan."
      },
      {
        "kind": "p",
        "text": "Departementalisasi juga membantu pengendalian biaya. Biaya yang terjadi pada suatu departemen dapat dikaitkan dengan kepala departemen yang bertanggung jawab. Sistem ini mendukung responsibility accounting karena biaya dapat dianalisis berdasarkan pusat tanggung jawab."
      },
      {
        "kind": "h3",
        "text": "3. Peta Submateri"
      },
      {
        "kind": "ol",
        "items": [
          "Konsep departementalisasi overhead pabrik",
          "Departemen produksi dan departemen jasa",
          "Pemilihan departemen produksi",
          "Pemilihan departemen jasa",
          "Biaya departemen langsung",
          "Biaya departemen tidak langsung",
          "Factory survey",
          "Estimasi dan alokasi biaya tidak langsung",
          "Distribusi biaya departemen jasa",
          "Direct method",
          "Step method",
          "Contoh Pra-UAS alokasi departemen jasa Pemeliharaan dan Teknik",
          "Simultaneous method",
          "Perhitungan tarif overhead departemen",
          "Penggunaan tarif overhead departemen",
          "Overhead aktual secara departemental",
          "Overhead lebih atau kurang dibebankan",
          "Multiple overhead rates",
          "Departementalisasi pada organisasi nonmanufaktur"
        ]
      },
      {
        "kind": "h3",
        "text": "4. Materi Teori"
      },
      {
        "kind": "h3",
        "text": "4.1 Konsep Departementalisasi Overhead Pabrik"
      },
      {
        "kind": "p",
        "text": "Departementalisasi overhead berarti membagi pabrik menjadi beberapa departemen. Setiap departemen menjadi tempat pengumpulan biaya overhead."
      },
      {
        "kind": "p",
        "text": "Biaya overhead pabrik adalah biaya produksi yang tidak dapat ditelusuri langsung ke produk atau pesanan tertentu, tetapi tetap terjadi dalam kegiatan produksi. Dalam materi job order costing, overhead dijelaskan sebagai biaya pabrik yang tidak ditelusuri langsung ke job, tetapi terjadi dalam proses produksi."
      },
      {
        "kind": "p",
        "text": "Secara umum, alur departementalisasi overhead adalah sebagai berikut:"
      },
      {
        "kind": "ol",
        "items": [
          "Biaya overhead dikumpulkan per departemen.",
          "Biaya departemen jasa dialokasikan ke departemen produksi.",
          "Total overhead departemen produksi dihitung.",
          "Tarif overhead departemen produksi ditentukan.",
          "Overhead dibebankan ke produk atau pesanan."
        ]
      },
      {
        "kind": "p",
        "text": "Departementalisasi membantu perusahaan menghindari pembebanan overhead yang terlalu rata. Jika hanya memakai satu tarif pabrik, produk sederhana dan produk rumit dapat menerima beban overhead yang tidak sesuai. Dengan tarif departemen, pembebanan lebih dekat dengan konsumsi sumber daya yang sebenarnya."
      },
      {
        "kind": "h3",
        "text": "4.2 Departemen Produksi"
      },
      {
        "kind": "p",
        "text": "Departemen produksi adalah departemen yang melakukan kegiatan langsung terhadap produk. Departemen ini mengubah bentuk, merakit, memotong, mencampur, menyelesaikan, atau memproses bahan menjadi produk."
      },
      {
        "kind": "p",
        "text": "Contoh departemen produksi:"
      },
      {
        "kind": "table",
        "headers": [
          "Departemen Produksi",
          "Aktivitas Utama"
        ],
        "rows": [
          [
            "Cutting",
            "Memotong bahan"
          ],
          [
            "Planing",
            "Meratakan atau membentuk bahan"
          ],
          [
            "Assembly",
            "Merakit komponen"
          ],
          [
            "Upholstery",
            "Melapisi atau menyelesaikan bagian produk"
          ],
          [
            "Finishing",
            "Menyelesaikan tampilan akhir produk"
          ],
          [
            "Machining",
            "Mengolah bahan dengan mesin"
          ],
          [
            "Mixing",
            "Mencampur bahan"
          ],
          [
            "Bottling",
            "Mengisi atau mengemas produk"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Dalam sistem biaya, departemen produksi menjadi tempat terakhir untuk mengumpulkan overhead sebelum biaya tersebut dibebankan ke produk."
      },
      {
        "kind": "h3",
        "text": "4.3 Departemen Jasa"
      },
      {
        "kind": "p",
        "text": "Departemen jasa adalah departemen yang tidak mengubah produk secara langsung, tetapi memberi dukungan kepada departemen produksi. Biaya departemen jasa pada akhirnya tetap harus masuk ke kos produk. Karena itu, biaya departemen jasa dialokasikan ke departemen produksi."
      },
      {
        "kind": "p",
        "text": "Contoh departemen jasa:"
      },
      {
        "kind": "table",
        "headers": [
          "Departemen Jasa",
          "Fungsi"
        ],
        "rows": [
          [
            "Materials Handling",
            "Memindahkan bahan"
          ],
          [
            "Inspection",
            "Memeriksa kualitas"
          ],
          [
            "Utilities",
            "Menyediakan listrik, air, bahan bakar, atau energi"
          ],
          [
            "Maintenance",
            "Memelihara mesin dan fasilitas"
          ],
          [
            "Receiving",
            "Menerima bahan"
          ],
          [
            "Purchasing",
            "Melakukan pembelian"
          ],
          [
            "Storage",
            "Menyimpan bahan"
          ],
          [
            "General Factory",
            "Menampung biaya umum pabrik"
          ],
          [
            "Security",
            "Menjaga keamanan pabrik"
          ],
          [
            "Production Control",
            "Mengatur jadwal dan alur produksi"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Departemen jasa biasanya tidak memiliki tarif overhead untuk membebankan biaya langsung ke produk. Biayanya terlebih dahulu dialokasikan ke departemen produksi, lalu departemen produksi membebankan overhead ke produk."
      },
      {
        "kind": "h3",
        "text": "4.4 Pemilihan Departemen Produksi"
      },
      {
        "kind": "p",
        "text": "Jumlah dan jenis departemen produksi harus disesuaikan dengan proses produksi perusahaan. Pemisahan departemen tidak boleh terlalu sedikit, karena perhitungan kos bisa kurang akurat. Pemisahan juga tidak boleh terlalu banyak, karena biaya administrasi dan pencatatan menjadi berat."
      },
      {
        "kind": "p",
        "text": "Faktor yang digunakan untuk menentukan departemen produksi antara lain:"
      },
      {
        "kind": "ol",
        "items": [
          "Kesamaan operasi dan mesin.",
          "Lokasi operasi dan mesin.",
          "Tanggung jawab atas produksi dan biaya.",
          "Hubungan operasi dengan aliran produk.",
          "Jumlah departemen yang masih praktis untuk dikendalikan."
        ]
      },
      {
        "kind": "p",
        "text": "Jika satu departemen memakai mesin yang sangat berbeda, perusahaan dapat membuat subdepartemen atau memakai beberapa tarif overhead. Misalnya, satu bagian memakai mesin otomatis, sedangkan bagian lain padat tenaga kerja. Keduanya dapat memakai dasar pembebanan yang berbeda."
      },
      {
        "kind": "h3",
        "text": "4.5 Pemilihan Departemen Jasa"
      },
      {
        "kind": "p",
        "text": "Departemen jasa dibuat jika fungsi jasa memberi manfaat besar bagi beberapa departemen dan perlu dikendalikan secara terpisah."
      },
      {
        "kind": "p",
        "text": "Ada tiga pilihan umum:"
      },
      {
        "kind": "table",
        "headers": [
          "Pilihan",
          "Penjelasan"
        ],
        "rows": [
          [
            "Departemen jasa terpisah",
            "Satu fungsi jasa dibuat menjadi satu departemen khusus"
          ],
          [
            "Beberapa fungsi digabung",
            "Fungsi jasa yang sejenis digabung dalam satu departemen"
          ],
          [
            "General factory cost pool",
            "Biaya jasa umum dikumpulkan dalam satu kelompok biaya pabrik umum"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Departemen jasa terpisah cocok jika biaya jasa cukup besar dan perlu diawasi. Jika biayanya kecil, perusahaan dapat menggabungkannya dalam general factory cost pool."
      },
      {
        "kind": "h3",
        "text": "4.6 Biaya Departemen Langsung"
      },
      {
        "kind": "p",
        "text": "Biaya departemen langsung adalah biaya overhead yang dapat ditelusuri langsung ke departemen tertentu. Jika biaya muncul karena aktivitas satu departemen, biaya tersebut dibebankan langsung ke departemen itu."
      },
      {
        "kind": "p",
        "text": "Contoh biaya departemen langsung:"
      },
      {
        "kind": "table",
        "headers": [
          "Jenis Biaya",
          "Contoh"
        ],
        "rows": [
          [
            "Supervisi",
            "Gaji supervisor departemen"
          ],
          [
            "Tenaga kerja tidak langsung",
            "Upah pekerja pembantu produksi"
          ],
          [
            "Premi lembur",
            "Bagian premi lembur yang menjadi overhead"
          ],
          [
            "Fringe benefits",
            "Tunjangan tenaga kerja produksi"
          ],
          [
            "Bahan tidak langsung",
            "Pelumas, bahan pembantu, perlengkapan kecil"
          ],
          [
            "Supplies",
            "Perlengkapan produksi"
          ],
          [
            "Repairs and maintenance",
            "Perbaikan mesin departemen tertentu"
          ],
          [
            "Depresiasi peralatan",
            "Penyusutan mesin departemen tertentu"
          ],
          [
            "Equipment rent",
            "Sewa peralatan departemen tertentu"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Biaya departemen langsung relatif mudah dicatat karena dapat dikaitkan dengan departemen asalnya."
      },
      {
        "kind": "h3",
        "text": "4.7 Biaya Departemen Tidak Langsung"
      },
      {
        "kind": "p",
        "text": "Biaya departemen tidak langsung adalah biaya yang memberi manfaat kepada lebih dari satu departemen. Biaya ini tidak dapat ditelusuri langsung ke satu departemen tertentu. Karena itu, biaya harus dialokasikan."
      },
      {
        "kind": "p",
        "text": "Contoh biaya departemen tidak langsung:"
      },
      {
        "kind": "table",
        "headers": [
          "Biaya Tidak Langsung",
          "Dasar Alokasi yang Umum"
        ],
        "rows": [
          [
            "Sewa gedung pabrik",
            "Luas lantai"
          ],
          [
            "Pajak properti",
            "Luas lantai"
          ],
          [
            "Depresiasi gedung",
            "Luas lantai"
          ],
          [
            "Asuransi kebakaran",
            "Luas lantai"
          ],
          [
            "Perbaikan gedung",
            "Luas lantai"
          ],
          [
            "Gas utility",
            "Jumlah karyawan atau pemakaian"
          ],
          [
            "Telepon dan telegram",
            "Jumlah karyawan atau jumlah telepon"
          ],
          [
            "Asuransi kompensasi pekerja",
            "Payroll departemen"
          ],
          [
            "Bagian tetap biaya listrik",
            "Luas lantai"
          ],
          [
            "Bagian variabel biaya listrik",
            "Kilowatt-hour"
          ]
        ]
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "[Perlu pemeriksaan manual]",
        "text": "[Perlu pemeriksaan manual] Tabel dasar alokasi di atas mengikuti sumber scan Carter. Isi utama terbaca, tetapi tabel asli perlu dicek ulang jika akan disalin sebagai tabel final akademik."
      },
      {
        "kind": "h3",
        "text": "4.8 Factory Survey"
      },
      {
        "kind": "p",
        "text": "Factory survey adalah proses pengumpulan data yang digunakan untuk mengalokasikan biaya overhead tidak langsung dan biaya departemen jasa."
      },
      {
        "kind": "p",
        "text": "Data yang biasa dikumpulkan dalam factory survey meliputi:"
      },
      {
        "kind": "table",
        "headers": [
          "Data Survey",
          "Fungsi"
        ],
        "rows": [
          [
            "Jumlah karyawan",
            "Dasar alokasi biaya umum, keamanan, atau administrasi pabrik"
          ],
          [
            "Kilowatt-hour",
            "Dasar alokasi listrik"
          ],
          [
            "Horsepower-hour",
            "Dasar alokasi tenaga mesin"
          ],
          [
            "Luas lantai",
            "Dasar alokasi gedung, sewa, pajak, dan asuransi"
          ],
          [
            "Biaya bahan yang diminta",
            "Dasar alokasi materials handling"
          ],
          [
            "Nilai aset",
            "Dasar alokasi depresiasi atau asuransi tertentu"
          ],
          [
            "Jam mesin",
            "Dasar pembebanan overhead berbasis mesin"
          ],
          [
            "Jam tenaga kerja langsung",
            "Dasar pembebanan overhead berbasis tenaga kerja"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Factory survey membantu perusahaan memilih dasar alokasi yang rasional. Dasar alokasi harus dekat dengan penyebab biaya. Jika biaya listrik banyak dipicu oleh penggunaan mesin, maka kilowatt-hour atau jam mesin lebih tepat daripada luas lantai."
      },
      {
        "kind": "h3",
        "text": "4.9 Distribusi Biaya Departemen Jasa"
      },
      {
        "kind": "p",
        "text": "Biaya departemen jasa harus didistribusikan ke departemen yang menerima manfaat. Tiga metode utama yang digunakan adalah:"
      },
      {
        "kind": "table",
        "headers": [
          "Metode",
          "Ciri Utama"
        ],
        "rows": [
          [
            "Direct method",
            "Mengalokasikan biaya departemen jasa langsung ke departemen produksi"
          ],
          [
            "Step method",
            "Mengalokasikan biaya departemen jasa secara bertahap"
          ],
          [
            "Simultaneous method",
            "Mengakui hubungan timbal balik antar departemen jasa secara penuh"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Metode yang dipilih akan memengaruhi jumlah overhead akhir setiap departemen produksi. Karena itu, metode harus digunakan secara konsisten."
      },
      {
        "kind": "h3",
        "text": "4.10 Direct Method"
      },
      {
        "kind": "p",
        "text": "Direct method adalah metode yang mengalokasikan biaya departemen jasa langsung ke departemen produksi. Jasa yang diberikan antar departemen jasa diabaikan."
      },
      {
        "kind": "p",
        "text": "Ciri direct method:"
      },
      {
        "kind": "ol",
        "items": [
          "Paling sederhana.",
          "Mudah dihitung.",
          "Urutan alokasi departemen jasa tidak berpengaruh.",
          "Tidak mengakui hubungan jasa antar departemen jasa.",
          "Cocok jika jasa antar departemen jasa tidak material."
        ]
      },
      {
        "kind": "p",
        "text": "Kelemahan direct method adalah biaya departemen jasa dapat kurang akurat karena hubungan antar departemen jasa tidak dihitung."
      },
      {
        "kind": "h3",
        "text": "4.11 Step Method"
      },
      {
        "kind": "p",
        "text": "Step method adalah metode yang mengalokasikan biaya departemen jasa secara bertahap. Departemen jasa pertama dialokasikan ke departemen lain. Setelah itu, departemen tersebut ditutup dan tidak menerima alokasi kembali."
      },
      {
        "kind": "p",
        "text": "Ciri step method:"
      },
      {
        "kind": "ol",
        "items": [
          "Lebih teliti daripada direct method.",
          "Mengakui sebagian hubungan antar departemen jasa.",
          "Memerlukan urutan alokasi.",
          "Hasil alokasi dipengaruhi urutan departemen jasa."
        ]
      },
      {
        "kind": "p",
        "text": "Urutan biasanya ditentukan berdasarkan:"
      },
      {
        "kind": "ol",
        "items": [
          "Departemen jasa yang memberi jasa paling besar kepada departemen lain.",
          "Departemen jasa yang memberi nilai jasa terbesar kepada departemen jasa lain.",
          "Kebijakan perusahaan yang konsisten."
        ]
      },
      {
        "kind": "h3",
        "text": "4.12 Simultaneous Method"
      },
      {
        "kind": "p",
        "text": "Simultaneous method disebut juga algebraic method. Metode ini mengakui hubungan timbal balik antar departemen jasa secara penuh."
      },
      {
        "kind": "p",
        "text": "Ciri simultaneous method:"
      },
      {
        "kind": "ol",
        "items": [
          "Paling lengkap secara konsep.",
          "Menggunakan persamaan aljabar.",
          "Menghitung jasa yang saling diberikan antar departemen jasa.",
          "Lebih rumit daripada direct method dan step method.",
          "Cocok jika hubungan antar departemen jasa cukup material."
        ]
      },
      {
        "kind": "p",
        "text": "Metode ini menghasilkan biaya departemen jasa yang telah direvisi. Biaya revisi tersebut kemudian dialokasikan ke departemen produksi."
      },
      {
        "kind": "h3",
        "text": "4.13 Tarif Overhead Departemen"
      },
      {
        "kind": "p",
        "text": "Tarif overhead departemen dihitung setelah biaya departemen jasa selesai dialokasikan ke departemen produksi."
      },
      {
        "kind": "p",
        "text": "Dasar pembebanan dapat berbeda antar departemen. Contohnya:"
      },
      {
        "kind": "table",
        "headers": [
          "Departemen",
          "Dasar Pembebanan yang Tepat"
        ],
        "rows": [
          [
            "Cutting",
            "Jam tenaga kerja langsung"
          ],
          [
            "Planing",
            "Jam mesin"
          ],
          [
            "Assembly",
            "Biaya tenaga kerja langsung"
          ],
          [
            "Upholstery",
            "Jam tenaga kerja langsung"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Pemilihan dasar pembebanan harus mempertimbangkan hubungan antara biaya overhead dan aktivitas departemen. Jika overhead dipicu oleh mesin, gunakan jam mesin. Jika overhead dipicu oleh tenaga kerja, gunakan jam tenaga kerja langsung atau biaya tenaga kerja langsung."
      },
      {
        "kind": "h3",
        "text": "5. Materi Praktik"
      },
      {
        "kind": "h3",
        "text": "5.1 Alur Praktik Departementalisasi Overhead"
      },
      {
        "kind": "p",
        "text": "Langkah praktik yang dapat digunakan dalam penyelesaian soal adalah:"
      },
      {
        "kind": "ol",
        "items": [
          "Identifikasi semua departemen.",
          "Pisahkan departemen produksi dan departemen jasa.",
          "Kumpulkan biaya overhead awal setiap departemen.",
          "Pisahkan biaya departemen langsung dan biaya departemen tidak langsung.",
          "Tentukan dasar alokasi untuk biaya tidak langsung.",
          "Buat factory survey.",
          "Alokasikan biaya departemen tidak langsung ke departemen terkait.",
          "Distribusikan biaya departemen jasa ke departemen produksi.",
          "Hitung total overhead akhir departemen produksi.",
          "Tentukan dasar pembebanan masing-masing departemen produksi.",
          "Hitung tarif overhead departemen.",
          "Bebankan overhead ke produk atau pesanan.",
          "Bandingkan overhead aktual dengan overhead dibebankan.",
          "Tentukan overhead lebih dibebankan atau kurang dibebankan."
        ]
      },
      {
        "kind": "h3",
        "text": "5.2 Praktik Direct Method"
      },
      {
        "kind": "p",
        "text": "Dalam direct method, semua biaya departemen jasa langsung dialokasikan ke departemen produksi. Persentase jasa ke departemen jasa lain diabaikan."
      },
      {
        "kind": "p",
        "text": "Rumus umum:"
      },
      {
        "kind": "formula",
        "text": "Overhead jasa yang dialokasikan ke departemen produksi = Biaya departemen jasa × proporsi manfaat departemen produksi"
      },
      {
        "kind": "p",
        "text": "Jika terdapat persentase jasa ke departemen jasa lain, persentase tersebut tidak dipakai. Persentase untuk departemen produksi dihitung ulang berdasarkan total manfaat yang hanya diterima departemen produksi."
      },
      {
        "kind": "h3",
        "text": "5.3 Praktik Step Method"
      },
      {
        "kind": "p",
        "text": "Dalam step method, departemen jasa dialokasikan satu per satu."
      },
      {
        "kind": "p",
        "text": "Langkahnya:"
      },
      {
        "kind": "ol",
        "items": [
          "Tentukan departemen jasa yang dialokasikan lebih dulu.",
          "Alokasikan biaya departemen jasa pertama ke departemen produksi dan departemen jasa lain yang masih terbuka.",
          "Tutup departemen jasa pertama.",
          "Tambahkan alokasi yang diterima departemen jasa kedua.",
          "Alokasikan biaya departemen jasa kedua ke departemen produksi.",
          "Hitung total overhead akhir departemen produksi."
        ]
      },
      {
        "kind": "p",
        "text": "Rumus yang digunakan:"
      },
      {
        "kind": "formula",
        "text": "Total biaya departemen jasa setelah menerima alokasi = Biaya awal departemen jasa + alokasi dari departemen jasa sebelumnya"
      },
      {
        "kind": "h3",
        "text": "5.4 Praktik Simultaneous Method"
      },
      {
        "kind": "p",
        "text": "Dalam simultaneous method, biaya akhir departemen jasa dihitung dengan persamaan."
      },
      {
        "kind": "p",
        "text": "Misalnya terdapat dua departemen jasa, Y dan Z."
      },
      {
        "kind": "formula",
        "text": "Y = biaya awal Y + persentase jasa dari Z Z = biaya awal Z + persentase jasa dari Y"
      },
      {
        "kind": "p",
        "text": "Setelah nilai Y dan Z diketahui, biaya tersebut dialokasikan ke departemen produksi sesuai persentase manfaat."
      },
      {
        "kind": "h3",
        "text": "6. Format Cost atau Laporan Biaya"
      },
      {
        "kind": "h3",
        "text": "6.1 Format Estimasi Overhead Departemen"
      },
      {
        "kind": "table",
        "headers": [
          "Akun Biaya",
          "Jenis",
          "Total",
          "Cutting",
          "Planing",
          "Assembly",
          "Upholstery",
          "Materials Handling",
          "Inspection",
          "Utilities",
          "General Factory"
        ],
        "rows": [
          [
            "Supervisi",
            "Tetap",
            "70.000",
            "9.000",
            "8.000",
            "8.000",
            "8.000",
            "10.000",
            "6.000",
            "9.000",
            "12.000"
          ],
          [
            "Tenaga kerja tidak langsung",
            "Variabel",
            "66.000",
            "9.000",
            "3.000",
            "5.000",
            "5.500",
            "11.000",
            "8.500",
            "10.000",
            "14.000"
          ],
          [
            "Fringe benefits",
            "Tetap",
            "47.000",
            "10.500",
            "11.800",
            "9.400",
            "8.200",
            "1.800",
            "1.400",
            "1.900",
            "2.000"
          ],
          [
            "Bahan tidak langsung",
            "Variabel",
            "19.000",
            "2.500",
            "2.500",
            "3.200",
            "4.800",
            "1.700",
            "800",
            "1.800",
            "1.700"
          ],
          [
            "Depresiasi peralatan",
            "Tetap",
            "13.000",
            "1.500",
            "3.500",
            "1.000",
            "3.000",
            "500",
            "200",
            "1.700",
            "600"
          ],
          [
            "Total biaya langsung departemen",
            "Diisi berdasarkan data soal",
            "250.000",
            "37.500",
            "34.300",
            "31.400",
            "35.600",
            "28.300",
            "18.600",
            "27.400",
            "36.900"
          ]
        ]
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "[Perlu pemeriksaan manual]",
        "text": "[Perlu pemeriksaan manual] Format dan angka tabel di atas mengikuti Exhibit 13-1 dari scan Carter. Beberapa bagian scan tidak sepenuhnya tajam, sehingga angka harus dicek kembali sebelum dipakai sebagai bahan final."
      },
      {
        "kind": "h3",
        "text": "6.2 Format Factory Survey"
      },
      {
        "kind": "table",
        "headers": [
          "Departemen Produksi",
          "Jumlah Karyawan",
          "% Karyawan",
          "Kilowatt-hour",
          "% Kilowatt-hour",
          "Horsepower-hour",
          "% Horsepower-hour",
          "Luas Lantai",
          "% Luas Lantai",
          "Biaya Bahan Diminta",
          "% Biaya Bahan"
        ],
        "rows": [
          ["Cutting", "8,0", "20", "12.800", "20", "200.000", "40", "5.250", "25", "180.000", "45"],
          ["Planing", "6,8", "17", "6.400", "10", "120.000", "24", "4.200", "20", "40.000", "10"],
          ["Assembly", "12,0", "30", "19.200", "30", "80.000", "16", "6.300", "30", "40.000", "10"],
          ["Upholstery", "13,2", "33", "25.600", "40", "100.000", "20", "5.250", "25", "140.000", "35"],
          ["Total", "40,0", "100", "64.000", "100", "500.000", "100", "21.000", "100", "400.000", "100"]
        ],
        "caption": "Format Factory Survey"
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "[Perlu pemeriksaan manual]",
        "text": "[Perlu pemeriksaan manual] Tabel factory survey berasal dari scan Exhibit 13-2. Angka utama terbaca, tetapi tetap perlu verifikasi manual dari file asli."
      },
      {
        "kind": "h3",
        "text": "6.3 Format Distribusi Biaya Departemen Jasa"
      },
      {
        "kind": "table",
        "headers": [
          "Keterangan",
          "Total",
          "Produksi A",
          "Produksi B",
          "Jasa Y",
          "Jasa Z"
        ],
        "rows": [
          [
            "Overhead sebelum distribusi jasa",
            "196.300",
            "60.000",
            "80.000",
            "36.300",
            "20.000"
          ],
          [
            "Distribusi Departemen Y",
            "Diisi berdasarkan data soal",
            "18.150",
            "18.150",
            "(36.300)",
            "0"
          ],
          [
            "Distribusi Departemen Z",
            "Diisi berdasarkan data soal",
            "5.714",
            "14.286",
            "0",
            "(20.000)"
          ],
          [
            "Total overhead setelah distribusi",
            "196.300",
            "83.864",
            "112.436",
            "0",
            "0"
          ]
        ]
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "[Perlu pemeriksaan manual]",
        "text": "Format di atas adalah format direct method. Angka berasal dari contoh Nickleby Company pada scan Carter. [Perlu pemeriksaan manual]"
      },
      {
        "kind": "h3",
        "text": "6.4 Format Perhitungan Tarif Overhead Departemen"
      },
      {
        "kind": "table",
        "headers": [
          "Departemen Produksi",
          "Total Overhead Setelah Alokasi",
          "Dasar Pembebanan",
          "Jumlah Dasar",
          "Tarif Overhead"
        ],
        "rows": [
          [
            "Cutting",
            "81.216",
            "Jam tenaga kerja langsung",
            "20.304 jam",
            "4,00 per jam TKL"
          ],
          [
            "Planing",
            "58.883",
            "Jam mesin",
            "9.200 jam",
            "6,40 per jam mesin"
          ],
          [
            "Assembly",
            "73.242",
            "Biaya tenaga kerja langsung",
            "122.000",
            "60% dari biaya TKL"
          ],
          [
            "Upholstery",
            "86.659",
            "Jam tenaga kerja langsung",
            "24.070 jam",
            "3,60 per jam TKL"
          ]
        ]
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "[Perlu pemeriksaan manual]",
        "text": "[Perlu pemeriksaan manual] Angka berasal dari scan Exhibit 13-3 Carter. Beberapa angka tampak kurang tajam, sehingga perlu dicek lagi jika akan digunakan dalam materi final."
      },
      {
        "kind": "h3",
        "text": "6.5 Format Pembebanan Overhead ke Barang Dalam Proses"
      },
      {
        "kind": "table",
        "headers": [
          "Departemen",
          "Dasar Aktual",
          "Tarif",
          "Overhead Dibebankan"
        ],
        "rows": [
          [
            "Cutting",
            "21.005 jam TKL",
            "4,00",
            "84.020"
          ],
          [
            "Planing",
            "8.500 jam mesin",
            "6,40",
            "54.400"
          ],
          [
            "Assembly",
            "111.700 biaya TKL",
            "60%",
            "67.020"
          ],
          [
            "Upholstery",
            "22.100 jam TKL",
            "3,60",
            "79.560"
          ],
          [
            "Total",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "285.000"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Jurnal pembebanan overhead:"
      },
      {
        "kind": "table",
        "headers": [
          "Debit",
          "Kredit"
        ],
        "rows": [
          [
            "Barang Dalam Proses",
            "285.000"
          ],
          [
            "Overhead Dibebankan - Cutting",
            "84.020"
          ],
          [
            "Overhead Dibebankan - Planing",
            "54.400"
          ],
          [
            "Overhead Dibebankan - Assembly",
            "67.020"
          ],
          [
            "Overhead Dibebankan - Upholstery",
            "79.560"
          ]
        ]
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "[Perlu pemeriksaan manual]",
        "text": "[Perlu pemeriksaan manual] Angka pembebanan overhead berasal dari scan Carter halaman penggunaan tarif overhead departemen. Angka utama terbaca, tetapi tetap perlu verifikasi manual."
      },
      {
        "kind": "h3",
        "text": "7. Rumus Penting"
      },
      {
        "kind": "h3",
        "text": "7.1 Tarif Overhead Departemen"
      },
      {
        "kind": "formula",
        "text": "Tarif overhead departemen = Total overhead departemen produksi setelah alokasi jasa ÷ Total dasar pembebanan departemen"
      },
      {
        "kind": "p",
        "text": "Contoh dasar pembebanan:"
      },
      {
        "kind": "table",
        "headers": [
          "Dasar Pembebanan",
          "Rumus"
        ],
        "rows": [
          [
            "Jam tenaga kerja langsung",
            "Total overhead departemen ÷ total jam TKL"
          ],
          [
            "Jam mesin",
            "Total overhead departemen ÷ total jam mesin"
          ],
          [
            "Biaya tenaga kerja langsung",
            "Total overhead departemen ÷ total biaya TKL × 100%"
          ],
          [
            "Biaya bahan",
            "Total overhead departemen ÷ total biaya bahan × 100%"
          ]
        ]
      },
      {
        "kind": "h3",
        "text": "7.2 Overhead Dibebankan"
      },
      {
        "kind": "formula",
        "text": "Overhead dibebankan = Tarif overhead departemen × dasar pembebanan aktual"
      },
      {
        "kind": "formula",
        "text": "Jika tarif berbentuk persentase:"
      },
      {
        "kind": "formula",
        "text": "Overhead dibebankan = Persentase tarif overhead × biaya dasar aktual"
      },
      {
        "kind": "p",
        "text": "Contoh:"
      },
      {
        "kind": "formula",
        "text": "Overhead Assembly = 60% × 111.700 = 67.020"
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "[Perlu pemeriksaan manual]",
        "text": "[Perlu pemeriksaan manual] Angka contoh mengikuti scan Carter."
      },
      {
        "kind": "h3",
        "text": "7.3 Alokasi Biaya Departemen Jasa dengan Direct Method"
      },
      {
        "kind": "formula",
        "text": "Alokasi biaya departemen jasa = Biaya departemen jasa × proporsi manfaat kepada departemen produksi"
      },
      {
        "kind": "formula",
        "text": "Jika ada jasa ke departemen jasa lain, bagian tersebut diabaikan. Proporsi dihitung ulang hanya dari departemen produksi."
      },
      {
        "kind": "h3",
        "text": "7.4 Alokasi Biaya Departemen Jasa dengan Step Method"
      },
      {
        "kind": "formula",
        "text": "Biaya departemen jasa setelah alokasi = Biaya awal departemen jasa + alokasi dari departemen jasa sebelumnya"
      },
      {
        "kind": "p",
        "text": "Setelah satu departemen jasa dialokasikan, departemen tersebut ditutup. Departemen itu tidak menerima alokasi kembali."
      },
      {
        "kind": "h3",
        "text": "7.5 Simultaneous Method"
      },
      {
        "kind": "formula",
        "text": "Jika terdapat dua departemen jasa Y dan Z:"
      },
      {
        "kind": "formula",
        "text": "Y = biaya awal Y + persentase jasa yang diterima dari Z Z = biaya awal Z + persentase jasa yang diterima dari Y"
      },
      {
        "kind": "p",
        "text": "Contoh dari scan Carter:"
      },
      {
        "kind": "formula",
        "text": "Y = 36.300 + 0,30Z Z = 20.000 + 0,20Y"
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "[Perlu pemeriksaan manual]",
        "text": "[Perlu pemeriksaan manual] Rumus dan angka mengikuti contoh scan Carter."
      },
      {
        "kind": "h3",
        "text": "7.6 Overhead Lebih atau Kurang Dibebankan"
      },
      {
        "kind": "formula",
        "text": "Selisih overhead = Overhead aktual - overhead dibebankan"
      },
      {
        "kind": "p",
        "text": "Interpretasi:"
      },
      {
        "kind": "table",
        "headers": [
          "Kondisi",
          "Arti"
        ],
        "rows": [
          [
            "Overhead aktual > overhead dibebankan",
            "Overhead kurang dibebankan"
          ],
          [
            "Overhead aktual < overhead dibebankan",
            "Overhead lebih dibebankan"
          ],
          [
            "Overhead aktual = overhead dibebankan",
            "Tidak ada selisih"
          ]
        ]
      },
      {
        "kind": "example",
        "title": "8. Contoh Kasus",
        "blocks": [
          {
            "kind": "example",
            "title": "Contoh Kasus 1 - Direct Method",
            "blocks": [
              {
                "kind": "p",
                "text": "Nickleby Company memiliki dua departemen produksi dan dua departemen jasa."
              },
              {
                "kind": "table",
                "headers": [
                  "Departemen",
                  "Overhead Sebelum Distribusi"
                ],
                "rows": [
                  [
                    "Produksi A",
                    "60.000"
                  ],
                  [
                    "Produksi B",
                    "80.000"
                  ],
                  [
                    "Jasa Y",
                    "36.300"
                  ],
                  [
                    "Jasa Z",
                    "20.000"
                  ],
                  [
                    "Total",
                    "196.300"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Data jasa yang diberikan:"
              },
              {
                "kind": "table",
                "headers": [
                  "Departemen Penerima",
                  "Jasa dari Y",
                  "Jasa dari Z"
                ],
                "rows": [
                  [
                    "Produksi A",
                    "40%",
                    "20%"
                  ],
                  [
                    "Produksi B",
                    "40%",
                    "50%"
                  ],
                  [
                    "Jasa Y",
                    "0%",
                    "30%"
                  ],
                  [
                    "Jasa Z",
                    "20%",
                    "0%"
                  ],
                  [
                    "Total",
                    "100%",
                    "100%"
                  ]
                ]
              },
              {
                "kind": "callout",
                "variant": "warning",
                "title": "[Perlu pemeriksaan manual]",
                "text": "[Perlu pemeriksaan manual] Contoh dan angka berasal dari scan Carter."
              },
              {
                "kind": "h3",
                "text": "Langkah Penyelesaian"
              },
              {
                "kind": "p",
                "text": "Langkah 1: Abaikan jasa antar departemen jasa."
              },
              {
                "kind": "p",
                "text": "Dalam direct method, jasa Y ke Z sebesar 20% diabaikan. Jasa Z ke Y sebesar 30% juga diabaikan."
              },
              {
                "kind": "p",
                "text": "Langkah 2: Alokasikan biaya Jasa Y hanya ke Produksi A dan Produksi B."
              },
              {
                "kind": "formula",
                "text": "Total persentase ke departemen produksi = 40% + 40% = 80%"
              },
              {
                "kind": "formula",
                "text": "Produksi A = 40/80 × 36.300 = 18.150 Produksi B = 40/80 × 36.300 = 18.150"
              },
              {
                "kind": "p",
                "text": "Langkah 3: Alokasikan biaya Jasa Z hanya ke Produksi A dan Produksi B."
              },
              {
                "kind": "formula",
                "text": "Total persentase ke departemen produksi = 20% + 50% = 70%"
              },
              {
                "kind": "formula",
                "text": "Produksi A = 20/70 × 20.000 = 5.714 Produksi B = 50/70 × 20.000 = 14.286"
              },
              {
                "kind": "p",
                "text": "Langkah 4: Hitung total overhead setelah distribusi."
              },
              {
                "kind": "table",
                "headers": [
                  "Departemen Produksi",
                  "Overhead Awal",
                  "Alokasi dari Y",
                  "Alokasi dari Z",
                  "Total Overhead"
                ],
                "rows": [
                  [
                    "Produksi A",
                    "60.000",
                    "18.150",
                    "5.714",
                    "83.864"
                  ],
                  [
                    "Produksi B",
                    "80.000",
                    "18.150",
                    "14.286",
                    "112.436"
                  ],
                  [
                    "Total",
                    "140.000",
                    "36.300",
                    "20.000",
                    "196.300"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Kesimpulan: dengan direct method, overhead akhir Produksi A sebesar 83.864 dan Produksi B sebesar 112.436."
              }
            ]
          },
          {
            "kind": "example",
            "title": "Contoh Kasus 2 - Step Method",
            "blocks": [
              {
                "kind": "p",
                "text": "Gunakan data Nickleby Company yang sama."
              },
              {
                "kind": "h3",
                "text": "Langkah Penyelesaian"
              },
              {
                "kind": "p",
                "text": "Langkah 1: Tentukan departemen jasa yang dialokasikan lebih dulu."
              },
              {
                "kind": "p",
                "text": "Jasa Y memberi jasa ke Z sebesar:"
              },
              {
                "kind": "formula",
                "text": "20% × 36.300 = 7.260"
              },
              {
                "kind": "p",
                "text": "Jasa Z memberi jasa ke Y sebesar:"
              },
              {
                "kind": "formula",
                "text": "30% × 20.000 = 6.000"
              },
              {
                "kind": "p",
                "text": "Karena nilai jasa Y ke Z lebih besar, Departemen Y dialokasikan lebih dulu."
              },
              {
                "kind": "p",
                "text": "Langkah 2: Alokasikan biaya Departemen Y."
              },
              {
                "kind": "formula",
                "text": "Produksi A = 40% × 36.300 = 14.520 Produksi B = 40% × 36.300 = 14.520 Jasa Z = 20% × 36.300 = 7.260"
              },
              {
                "kind": "p",
                "text": "Langkah 3: Hitung biaya Jasa Z setelah menerima alokasi."
              },
              {
                "kind": "formula",
                "text": "Biaya Jasa Z = 20.000 + 7.260 = 27.260"
              },
              {
                "kind": "p",
                "text": "Langkah 4: Alokasikan biaya Jasa Z ke Produksi A dan Produksi B."
              },
              {
                "kind": "p",
                "text": "Karena Departemen Y sudah ditutup, Jasa Z hanya dialokasikan ke Produksi A dan Produksi B."
              },
              {
                "kind": "formula",
                "text": "Total persentase ke departemen produksi = 20% + 50% = 70%"
              },
              {
                "kind": "formula",
                "text": "Produksi A = 20/70 × 27.260 = 7.789 Produksi B = 50/70 × 27.260 = 19.471"
              },
              {
                "kind": "p",
                "text": "Langkah 5: Hitung total overhead setelah distribusi."
              },
              {
                "kind": "table",
                "headers": [
                  "Departemen Produksi",
                  "Overhead Awal",
                  "Alokasi dari Y",
                  "Alokasi dari Z",
                  "Total Overhead"
                ],
                "rows": [
                  [
                    "Produksi A",
                    "60.000",
                    "14.520",
                    "7.789",
                    "82.309"
                  ],
                  [
                    "Produksi B",
                    "80.000",
                    "14.520",
                    "19.471",
                    "113.991"
                  ],
                  [
                    "Total",
                    "140.000",
                    "29.040",
                    "27.260",
                    "196.300"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Kesimpulan: dengan step method, overhead akhir Produksi A sebesar 82.309 dan Produksi B sebesar 113.991."
              },
              {
                "kind": "callout",
                "variant": "warning",
                "title": "[Perlu pemeriksaan manual]",
                "text": "[Perlu pemeriksaan manual] Angka mengikuti Exhibit 13-5 dari scan Carter."
              }
            ]
          },
          {
            "kind": "example",
            "title": "Contoh Kasus Tambahan - Pra-UAS: Direct Method dan Sequential Method",
            "blocks": [
              {
                "kind": "p",
                "text": "Kasus ini memakai data Pra-UAS tentang dua departemen jasa dan dua departemen produksi. Tujuannya bukan hanya menghitung angka akhir, tetapi juga menunjukkan format kerja alokasi biaya departemen jasa yang rapi."
              },
              {
                "kind": "table",
                "caption": "Data awal departemen sebelum alokasi",
                "headers": [
                  "Keterangan",
                  "Pemeliharaan",
                  "Teknik",
                  "Perakitan",
                  "Pengemasan"
                ],
                "rows": [
                  [
                    "Jenis departemen",
                    "Departemen jasa",
                    "Departemen jasa",
                    "Departemen produksi",
                    "Departemen produksi"
                  ],
                  [
                    "Anggaran biaya awal",
                    "Rp120.000",
                    "Rp540.000",
                    "Rp800.000",
                    "Rp900.000"
                  ],
                  [
                    "Jam kerja pemeliharaan",
                    "-",
                    "400",
                    "800",
                    "200"
                  ],
                  [
                    "Jam kerja teknik",
                    "400",
                    "-",
                    "800",
                    "400"
                  ]
                ]
              },
              {
                "kind": "callout",
                "variant": "info",
                "title": "Aturan baca kasus",
                "text": "Departemen Pemeliharaan dialokasikan menggunakan jam kerja pemeliharaan. Departemen Teknik dialokasikan menggunakan jam kerja teknik. Pada direct method, jasa antar departemen jasa diabaikan. Pada sequential method, Pemeliharaan dialokasikan lebih dahulu ke Teknik, Perakitan, dan Pengemasan, lalu Teknik dialokasikan ke departemen produksi."
              },
              {
                "kind": "h3",
                "text": "Direct Method"
              },
              {
                "kind": "p",
                "text": "Pada direct method, alokasi dari departemen jasa hanya diberikan kepada departemen produksi. Jam jasa yang mengarah ke departemen jasa lain tidak dipakai dalam rasio alokasi."
              },
              {
                "kind": "table",
                "caption": "Rasio alokasi direct method",
                "headers": [
                  "Departemen Jasa",
                  "Dasar yang Dipakai",
                  "Perakitan",
                  "Pengemasan",
                  "Total Dasar Produksi"
                ],
                "rows": [
                  [
                    "Pemeliharaan",
                    "Jam kerja pemeliharaan ke departemen produksi",
                    "800 / (800 + 200) = 80%",
                    "200 / (800 + 200) = 20%",
                    "1.000 jam"
                  ],
                  [
                    "Teknik",
                    "Jam kerja teknik ke departemen produksi",
                    "800 / (800 + 400) = 66,67%",
                    "400 / (800 + 400) = 33,33%",
                    "1.200 jam"
                  ]
                ]
              },
              {
                "kind": "table",
                "caption": "Alokasi direct method dan anggaran setelah alokasi",
                "headers": [
                  "Departemen Produksi",
                  "Anggaran Awal",
                  "Alokasi Pemeliharaan",
                  "Alokasi Teknik",
                  "Anggaran Setelah Alokasi"
                ],
                "rows": [
                  [
                    "Perakitan",
                    "Rp800.000",
                    "80% × Rp120.000 = Rp96.000",
                    "66,67% × Rp540.000 = Rp360.000",
                    "Rp1.256.000"
                  ],
                  [
                    "Pengemasan",
                    "Rp900.000",
                    "20% × Rp120.000 = Rp24.000",
                    "33,33% × Rp540.000 = Rp180.000",
                    "Rp1.104.000"
                  ],
                  [
                    "Total",
                    "Rp1.700.000",
                    "Rp120.000",
                    "Rp540.000",
                    "Rp2.360.000"
                  ]
                ]
              },
              {
                "kind": "h3",
                "text": "Sequential Method"
              },
              {
                "kind": "p",
                "text": "Pada sequential method, soal memberi asumsi bahwa Departemen Pemeliharaan dialokasikan lebih dahulu. Karena itu, biaya Pemeliharaan dialokasikan ke Teknik, Perakitan, dan Pengemasan. Setelah Pemeliharaan ditutup, Teknik tidak dialokasikan kembali ke Pemeliharaan."
              },
              {
                "kind": "table",
                "caption": "Tahap 1 - Alokasi biaya Pemeliharaan",
                "headers": [
                  "Penerima Alokasi",
                  "Rasio Jam Pemeliharaan",
                  "Alokasi Biaya Pemeliharaan"
                ],
                "rows": [
                  [
                    "Teknik",
                    "400 / (400 + 800 + 200) = 28,57%",
                    "Rp34.286"
                  ],
                  [
                    "Perakitan",
                    "800 / (400 + 800 + 200) = 57,14%",
                    "Rp68.571"
                  ],
                  [
                    "Pengemasan",
                    "200 / (400 + 800 + 200) = 14,29%",
                    "Rp17.143"
                  ],
                  [
                    "Total",
                    "1.400 jam = 100%",
                    "Rp120.000"
                  ]
                ]
              },
              {
                "kind": "formula",
                "text": "Biaya Teknik setelah menerima alokasi Pemeliharaan = Rp540.000 + Rp34.286 = Rp574.286"
              },
              {
                "kind": "table",
                "caption": "Tahap 2 - Alokasi biaya Teknik setelah Pemeliharaan ditutup",
                "headers": [
                  "Departemen Produksi",
                  "Rasio Jam Teknik",
                  "Alokasi Biaya Teknik"
                ],
                "rows": [
                  [
                    "Perakitan",
                    "800 / (800 + 400) = 66,67%",
                    "Rp382.857"
                  ],
                  [
                    "Pengemasan",
                    "400 / (800 + 400) = 33,33%",
                    "Rp191.429"
                  ],
                  [
                    "Total",
                    "1.200 jam = 100%",
                    "Rp574.286"
                  ]
                ]
              },
              {
                "kind": "table",
                "caption": "Anggaran setelah alokasi sequential method",
                "headers": [
                  "Departemen Produksi",
                  "Anggaran Awal",
                  "Alokasi Pemeliharaan",
                  "Alokasi Teknik",
                  "Anggaran Setelah Alokasi"
                ],
                "rows": [
                  [
                    "Perakitan",
                    "Rp800.000",
                    "Rp68.571",
                    "Rp382.857",
                    "Rp1.251.428"
                  ],
                  [
                    "Pengemasan",
                    "Rp900.000",
                    "Rp17.143",
                    "Rp191.429",
                    "Rp1.108.572"
                  ],
                  [
                    "Total",
                    "Rp1.700.000",
                    "Rp85.714",
                    "Rp574.286",
                    "Rp2.360.000"
                  ]
                ]
              },
              {
                "kind": "callout",
                "variant": "info",
                "title": "Kontrol jawaban",
                "text": "Total akhir direct method dan sequential method harus tetap sama dengan total anggaran awal seluruh departemen, yaitu Rp2.360.000. Yang berubah adalah distribusi antara Perakitan dan Pengemasan. Pada sequential method, angka disajikan dengan pembulatan per komponen alokasi agar total akhir tetap rekonsiliasi ke Rp2.360.000."
              }
            ]
          },
          {
            "kind": "example",
            "title": "Contoh Kasus 3 - Simultaneous Method",
            "blocks": [
              {
                "kind": "p",
                "text": "Gunakan data yang sama."
              },
              {
                "kind": "p",
                "text": "Misalkan:"
              },
              {
                "kind": "formula",
                "text": "Y = total biaya akhir Departemen Jasa Y Z = total biaya akhir Departemen Jasa Z"
              },
              {
                "kind": "p",
                "text": "Persamaan:"
              },
              {
                "kind": "formula",
                "text": "Y = 36.300 + 0,30Z Z = 20.000 + 0,20Y"
              },
              {
                "kind": "h3",
                "text": "Langkah Penyelesaian"
              },
              {
                "kind": "p",
                "text": "Langkah 1: Substitusi persamaan Z ke persamaan Y."
              },
              {
                "kind": "formula",
                "text": "Y = 36.300 + 0,30(20.000 + 0,20Y) Y = 36.300 + 6.000 + 0,06Y Y = 42.300 + 0,06Y 0,94Y = 42.300 Y = 45.000"
              },
              {
                "kind": "p",
                "text": "Langkah 2: Hitung Z."
              },
              {
                "kind": "formula",
                "text": "Z = 20.000 + 0,20(45.000) Z = 20.000 + 9.000 Z = 29.000"
              },
              {
                "kind": "p",
                "text": "Langkah 3: Alokasikan biaya Y dan Z."
              },
              {
                "kind": "p",
                "text": "Alokasi Y:"
              },
              {
                "kind": "table",
                "headers": [
                  "Penerima",
                  "Perhitungan",
                  "Alokasi"
                ],
                "rows": [
                  [
                    "Produksi A",
                    "40% × 45.000",
                    "18.000"
                  ],
                  [
                    "Produksi B",
                    "40% × 45.000",
                    "18.000"
                  ],
                  [
                    "Jasa Z",
                    "20% × 45.000",
                    "9.000"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Alokasi Z:"
              },
              {
                "kind": "table",
                "headers": [
                  "Penerima",
                  "Perhitungan",
                  "Alokasi"
                ],
                "rows": [
                  [
                    "Produksi A",
                    "20% × 29.000",
                    "5.800"
                  ],
                  [
                    "Produksi B",
                    "50% × 29.000",
                    "14.500"
                  ],
                  [
                    "Jasa Y",
                    "30% × 29.000",
                    "8.700"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Langkah 4: Hitung total overhead departemen produksi."
              },
              {
                "kind": "table",
                "headers": [
                  "Departemen Produksi",
                  "Overhead Awal",
                  "Alokasi dari Y",
                  "Alokasi dari Z",
                  "Total Overhead"
                ],
                "rows": [
                  [
                    "Produksi A",
                    "60.000",
                    "18.000",
                    "5.800",
                    "83.800"
                  ],
                  [
                    "Produksi B",
                    "80.000",
                    "18.000",
                    "14.500",
                    "112.500"
                  ],
                  [
                    "Total",
                    "140.000",
                    "36.000",
                    "20.300",
                    "196.300"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Kesimpulan: simultaneous method menghasilkan overhead akhir Produksi A sebesar 83.800 dan Produksi B sebesar 112.500."
              },
              {
                "kind": "callout",
                "variant": "warning",
                "title": "[Perlu pemeriksaan manual]",
                "text": "[Perlu pemeriksaan manual] Persamaan dan angka mengikuti Exhibit 13-6 dari scan Carter."
              }
            ]
          },
          {
            "kind": "example",
            "title": "Contoh Kasus 4 - Pembebanan Overhead Departemen ke Produksi",
            "blocks": [
              {
                "kind": "p",
                "text": "Data pembebanan overhead:"
              },
              {
                "kind": "table",
                "headers": [
                  "Departemen",
                  "Dasar Aktual",
                  "Tarif",
                  "Overhead Dibebankan"
                ],
                "rows": [
                  [
                    "Cutting",
                    "21.005 jam TKL",
                    "4,00",
                    "84.020"
                  ],
                  [
                    "Planing",
                    "8.500 jam mesin",
                    "6,40",
                    "54.400"
                  ],
                  [
                    "Assembly",
                    "111.700 biaya TKL",
                    "60%",
                    "67.020"
                  ],
                  [
                    "Upholstery",
                    "22.100 jam TKL",
                    "3,60",
                    "79.560"
                  ],
                  [
                    "Total",
                    "Diisi berdasarkan data soal",
                    "Diisi berdasarkan data soal",
                    "285.000"
                  ]
                ]
              },
              {
                "kind": "h3",
                "text": "Langkah Penyelesaian"
              },
              {
                "kind": "ol",
                "items": [
                  "Tentukan dasar aktual setiap departemen.",
                  "Kalikan dasar aktual dengan tarif overhead departemen.",
                  "Jumlahkan seluruh overhead dibebankan.",
                  "Catat ke Barang Dalam Proses."
                ]
              },
              {
                "kind": "p",
                "text": "Jurnal:"
              },
              {
                "kind": "table",
                "headers": [
                  "Akun",
                  "Debit",
                  "Kredit"
                ],
                "rows": [
                  [
                    "Barang Dalam Proses",
                    "285.000",
                    "Diisi berdasarkan data soal"
                  ],
                  [
                    "Overhead Dibebankan - Cutting",
                    "Diisi berdasarkan data soal",
                    "84.020"
                  ],
                  [
                    "Overhead Dibebankan - Planing",
                    "Diisi berdasarkan data soal",
                    "54.400"
                  ],
                  [
                    "Overhead Dibebankan - Assembly",
                    "Diisi berdasarkan data soal",
                    "67.020"
                  ],
                  [
                    "Overhead Dibebankan - Upholstery",
                    "Diisi berdasarkan data soal",
                    "79.560"
                  ]
                ]
              },
              {
                "kind": "callout",
                "variant": "warning",
                "title": "[Perlu pemeriksaan manual]",
                "text": "[Perlu pemeriksaan manual] Angka jurnal mengikuti scan Carter dan perlu diverifikasi ulang."
              }
            ]
          }
        ]
      },
      {
        "kind": "h3",
        "text": "9. Langkah Penyelesaian Umum"
      },
      {
        "kind": "h3",
        "text": "9.1 Jika Soal Meminta Direct Method"
      },
      {
        "kind": "ol",
        "items": [
          "Buat tabel departemen.",
          "Pisahkan departemen produksi dan departemen jasa.",
          "Masukkan overhead awal.",
          "Abaikan jasa antar departemen jasa.",
          "Hitung ulang persentase hanya untuk departemen produksi.",
          "Alokasikan biaya tiap departemen jasa ke departemen produksi.",
          "Jumlahkan overhead awal dan alokasi jasa.",
          "Pastikan total overhead akhir sama dengan total overhead awal seluruh departemen."
        ]
      },
      {
        "kind": "h3",
        "text": "9.2 Jika Soal Meminta Step Method"
      },
      {
        "kind": "ol",
        "items": [
          "Buat tabel overhead awal.",
          "Tentukan urutan alokasi departemen jasa.",
          "Alokasikan departemen jasa pertama ke departemen yang masih terbuka.",
          "Tutup departemen jasa pertama.",
          "Tambahkan alokasi yang diterima departemen jasa berikutnya.",
          "Alokasikan departemen jasa berikutnya ke departemen produksi.",
          "Hitung total overhead akhir setiap departemen produksi.",
          "Pastikan departemen jasa yang sudah ditutup tidak menerima alokasi kembali."
        ]
      },
      {
        "kind": "h3",
        "text": "9.3 Jika Soal Meminta Simultaneous Method"
      },
      {
        "kind": "ol",
        "items": [
          "Tentukan simbol untuk setiap departemen jasa.",
          "Buat persamaan biaya total setiap departemen jasa.",
          "Masukkan biaya awal dan persentase jasa yang diterima.",
          "Selesaikan persamaan aljabar.",
          "Gunakan biaya total hasil persamaan untuk alokasi.",
          "Alokasikan ke departemen produksi sesuai persentase manfaat.",
          "Hitung total overhead akhir departemen produksi."
        ]
      },
      {
        "kind": "h3",
        "text": "9.4 Jika Soal Meminta Tarif Overhead Departemen"
      },
      {
        "kind": "ol",
        "items": [
          "Pastikan biaya departemen jasa sudah dialokasikan.",
          "Ambil total overhead akhir setiap departemen produksi.",
          "Tentukan dasar pembebanan yang sesuai.",
          "Hitung tarif overhead departemen.",
          "Gunakan tarif untuk membebankan overhead ke produk.",
          "Bandingkan dengan overhead aktual pada akhir periode."
        ]
      },
      {
        "kind": "h3",
        "text": "9.5 Skedul Kerja Departementalisasi Overhead"
      },
      {
        "kind": "p",
        "text": "Dalam modul utama, departementalisasi overhead tidak boleh berhenti pada hafalan direct method, step method, dan simultaneous method. Jawaban yang baik harus menunjukkan urutan kerja lengkap: overhead awal dikumpulkan, biaya tidak langsung departemen dialokasikan, biaya departemen jasa didistribusikan ke departemen produksi, tarif overhead departemen dihitung, lalu overhead dibebankan ke produk atau pesanan. Skedul ini penting karena satu kesalahan pada tahap awal akan terbawa sampai tarif departemen."
      },
      {
        "kind": "table",
        "headers": [
          "Tahap",
          "Data yang Dibaca dari Soal",
          "Output yang Harus Muncul"
        ],
        "rows": [
          [
            "1. Identifikasi departemen",
            "Nama departemen, fungsi, aktivitas produksi atau jasa",
            "Daftar departemen produksi dan departemen jasa"
          ],
          [
            "2. Kumpulkan overhead awal",
            "Biaya langsung departemen dan biaya umum pabrik",
            "Overhead awal per departemen sebelum distribusi"
          ],
          [
            "3. Alokasi biaya tidak langsung departemen",
            "Luas lantai, jumlah karyawan, kilowatt-hour, nilai aset, atau dasar lain",
            "Biaya overhead tidak langsung masuk ke departemen yang menerima manfaat"
          ],
          [
            "4. Distribusi departemen jasa",
            "Persentase jasa atau ukuran manfaat antar departemen",
            "Biaya departemen jasa menjadi nol dan berpindah ke departemen produksi"
          ],
          [
            "5. Hitung total overhead produksi",
            "Overhead awal + alokasi tidak langsung + alokasi departemen jasa",
            "Total overhead akhir setiap departemen produksi"
          ],
          [
            "6. Hitung tarif overhead departemen",
            "Dasar pembebanan tiap departemen, seperti jam mesin, jam TKL, atau biaya TKL",
            "Tarif overhead departemen"
          ],
          [
            "7. Bebankan overhead ke produk",
            "Dasar aktual yang dikonsumsi produk atau job",
            "Applied overhead per departemen dan total overhead dibebankan"
          ],
          [
            "8. Evaluasi selisih overhead",
            "Overhead aktual dan overhead dibebankan",
            "Overapplied atau underapplied overhead"
          ]
        ],
        "caption": "Skedul kerja ini digunakan agar jawaban departementalisasi tidak terpotong pada tahap alokasi jasa saja."
      },
      {
        "kind": "h3",
        "text": "9.6 Pemilihan Metode Alokasi Departemen Jasa"
      },
      {
        "kind": "table",
        "headers": [
          "Metode",
          "Hubungan Jasa yang Diakui",
          "Keunggulan",
          "Keterbatasan"
        ],
        "rows": [
          [
            "Direct method",
            "Hanya jasa dari departemen jasa ke departemen produksi",
            "Paling sederhana dan cepat untuk soal dasar",
            "Mengabaikan jasa antar departemen jasa sehingga kurang akurat bila hubungan jasa material"
          ],
          [
            "Step method",
            "Sebagian jasa antar departemen jasa berdasarkan urutan alokasi",
            "Lebih realistis daripada direct method",
            "Hasil dipengaruhi urutan departemen jasa dan tidak mengakui jasa timbal balik penuh"
          ],
          [
            "Simultaneous atau reciprocal method",
            "Hubungan timbal balik antar departemen jasa diakui penuh melalui persamaan",
            "Paling kuat secara konseptual jika jasa saling memberi manfaat signifikan",
            "Lebih rumit dan memerlukan penyelesaian aljabar"
          ]
        ]
      },
      {
        "kind": "formula",
        "text": "Tarif overhead departemen = Total overhead akhir departemen produksi / Total dasar pembebanan departemen",
        "note": "Rumus ini baru digunakan setelah semua biaya departemen jasa selesai dialokasikan ke departemen produksi."
      },
      {
        "kind": "journal",
        "caption": "Jurnal pembebanan overhead departemen ke produksi setelah tarif departemen dihitung.",
        "lines": [
          {
            "account": "Work in Process",
            "debit": "Total applied overhead seluruh departemen"
          },
          {
            "account": "Applied Factory Overhead - Departemen Produksi A",
            "credit": "Applied overhead departemen A",
            "isCredit": true
          },
          {
            "account": "Applied Factory Overhead - Departemen Produksi B",
            "credit": "Applied overhead departemen B",
            "isCredit": true
          },
          {
            "account": "Applied Factory Overhead - Departemen Produksi lain",
            "credit": "Jika ada departemen tambahan",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "callout",
        "variant": "key",
        "title": "Kunci Audit TM 12",
        "text": "Satu soal departementalisasi dianggap lengkap jika jawabannya memuat pemisahan departemen produksi dan jasa, dasar alokasi, alokasi biaya jasa, total overhead akhir departemen produksi, tarif overhead departemen, dan pembebanan overhead ke produk. Jika hanya menghitung direct method atau step method tanpa tarif overhead departemen, jawaban masih belum utuh."
      },
      {
        "kind": "h2",
        "text": "9.9 Workspace Audit Batch 12E - Direct dan Sequential Method"
      },
      {
        "kind": "p",
        "text": "Workspace ini ditambahkan agar mahasiswa tidak hanya membaca contoh departementalisasi, tetapi juga mengisi angka alokasi dari data yang terlihat. Data memakai kasus Pemeliharaan, Teknik, Perakitan, dan Pengemasan yang sudah muncul pada contoh Pra-UAS."
      },
      {
        "kind": "table-fill",
        "spec": {
          "title": "Workspace TM 12 - Direct Method Service Department Allocation",
          "instruction": "Data: Pemeliharaan Rp120.000; Teknik Rp540.000; Perakitan Rp800.000; Pengemasan Rp900.000. Jam pemeliharaan ke Teknik 400, Perakitan 800, Pengemasan 200. Jam teknik ke Pemeliharaan 400, Perakitan 800, Pengemasan 400. Direct method mengabaikan jasa antar departemen jasa.",
          "currency": "Rp",
          "headers": ["Komponen", "Perakitan", "Pengemasan", "Total"],
          "rows": [
            { "id": "tm12-direct-maintenance", "label": "Alokasi Pemeliharaan", "cells": [
              { "id": "tm12-direct-maintenance-assembly", "answer": 96000, "placeholder": "800/(800+200) × 120.000" },
              { "id": "tm12-direct-maintenance-packaging", "answer": 24000, "placeholder": "200/(800+200) × 120.000" },
              { "id": "tm12-direct-maintenance-total", "answer": 120000, "placeholder": "Total alokasi Pemeliharaan" }
            ] },
            { "id": "tm12-direct-engineering", "label": "Alokasi Teknik", "cells": [
              { "id": "tm12-direct-engineering-assembly", "answer": 360000, "placeholder": "800/(800+400) × 540.000" },
              { "id": "tm12-direct-engineering-packaging", "answer": 180000, "placeholder": "400/(800+400) × 540.000" },
              { "id": "tm12-direct-engineering-total", "answer": 540000, "placeholder": "Total alokasi Teknik" }
            ] },
            { "id": "tm12-direct-final", "label": "Biaya akhir departemen produksi", "cells": [
              { "id": "tm12-direct-final-assembly", "answer": 1256000, "placeholder": "800.000 + 96.000 + 360.000" },
              { "id": "tm12-direct-final-packaging", "answer": 1104000, "placeholder": "900.000 + 24.000 + 180.000" },
              { "id": "tm12-direct-final-total", "answer": 2360000, "placeholder": "Total produksi akhir" }
            ] }
          ]
        }
      },
      {
        "kind": "table-fill",
        "spec": {
          "title": "Workspace TM 12 - Sequential Method Service Department Allocation",
          "instruction": "Gunakan data yang sama. Sequential method: Pemeliharaan dialokasikan lebih dulu ke Teknik, Perakitan, dan Pengemasan dengan rasio 400:800:200. Setelah itu Teknik dialokasikan hanya ke Perakitan dan Pengemasan dengan rasio 800:400.",
          "currency": "Rp",
          "headers": ["Komponen", "Teknik", "Perakitan", "Pengemasan", "Total"],
          "rows": [
            { "id": "tm12-seq-maintenance", "label": "Tahap 1: alokasi Pemeliharaan", "cells": [
              { "id": "tm12-seq-maintenance-engineering", "answer": 34286, "placeholder": "400/1.400 × 120.000" },
              { "id": "tm12-seq-maintenance-assembly", "answer": 68571, "placeholder": "800/1.400 × 120.000" },
              { "id": "tm12-seq-maintenance-packaging", "answer": 17143, "placeholder": "200/1.400 × 120.000" },
              { "id": "tm12-seq-maintenance-total", "answer": 120000, "placeholder": "Total alokasi Pemeliharaan" }
            ] },
            { "id": "tm12-seq-engineering", "label": "Tahap 2: alokasi Teknik setelah menerima Pemeliharaan", "cells": [
              { "id": "tm12-seq-engineering-closed", "answer": 574286, "placeholder": "540.000 + 34.286" },
              { "id": "tm12-seq-engineering-assembly", "answer": 382857, "placeholder": "800/1.200 × 574.286" },
              { "id": "tm12-seq-engineering-packaging", "answer": 191429, "placeholder": "400/1.200 × 574.286" },
              { "id": "tm12-seq-engineering-total", "answer": 574286, "placeholder": "Total alokasi Teknik" }
            ] },
            { "id": "tm12-seq-final", "label": "Biaya akhir departemen produksi", "cells": [
              { "id": "tm12-seq-final-engineering", "answer": 0, "placeholder": "Teknik ditutup" },
              { "id": "tm12-seq-final-assembly", "answer": 1251428, "placeholder": "800.000 + 68.571 + 382.857" },
              { "id": "tm12-seq-final-packaging", "answer": 1108572, "placeholder": "900.000 + 17.143 + 191.429" },
              { "id": "tm12-seq-final-total", "answer": 2360000, "placeholder": "Total produksi akhir" }
            ] }
          ]
        }
      },
      {
        "kind": "solution-reveal",
        "title": "Pembahasan Workspace TM 12",
        "prompt": "Buka setelah menyelesaikan direct method dan sequential method.",
        "blocks": [
          { "kind": "p", "text": "Direct method mengabaikan jasa antar departemen jasa. Karena itu Pemeliharaan hanya dialokasikan ke Perakitan dan Pengemasan dengan rasio 800:200, sedangkan Teknik hanya dialokasikan ke Perakitan dan Pengemasan dengan rasio 800:400." },
          { "kind": "p", "text": "Sequential method mengakui sebagian jasa antar departemen jasa sesuai urutan. Pemeliharaan dialokasikan lebih dulu, sehingga Teknik menerima Rp34.286. Biaya Teknik setelah tahap pertama menjadi Rp574.286 dan kemudian dialokasikan ke Perakitan dan Pengemasan." },
          { "kind": "p", "text": "Kontrol total penting: setelah alokasi selesai, total akhir Perakitan dan Pengemasan harus tetap Rp2.360.000, sama dengan total seluruh biaya awal departemen." }
        ]
      },
      {
        "kind": "h2",
        "text": "Batch 10 - FOH Departmentalization Lab"
      },
      {
        "kind": "callout",
        "variant": "key",
        "title": "Source alignment Batch 10",
        "text": "Pendalaman ini mengikuti RPS AKBI TM 12 tentang Biaya Overhead Pabrik: Departementalisasi serta Tutor AKBI TM 13 FOH Departmentalization. Fokusnya adalah pemisahan producing department dan service department, direct departmental cost, indirect departmental cost, direct method, step/sequential method, simultaneous/algebraic method, dan tarif overhead departemen."
      },
      {
        "kind": "h3",
        "text": "Alur Belajar Cepat Batch 10"
      },
      {
        "kind": "ol",
        "items": [
          "Baca dulu nama departemen, lalu pisahkan departemen produksi dan departemen jasa.",
          "Kumpulkan overhead awal tiap departemen sebelum alokasi jasa.",
          "Tentukan dasar alokasi: luas ruangan, jumlah karyawan, jam pemeliharaan, kWh, jam mesin, atau dasar lain yang paling mewakili konsumsi sumber daya.",
          "Pilih metode alokasi service department: direct method, step/sequential method, atau simultaneous/algebraic method.",
          "Setelah service department menjadi nol, hitung total overhead akhir departemen produksi.",
          "Hitung tarif overhead departemen produksi berdasarkan basis yang relevan.",
          "Gunakan tarif departemen untuk membebankan overhead ke job, produk, atau proses."
        ]
      },
      {
        "kind": "h3",
        "text": "Formula Sheet Batch 10"
      },
      {
        "kind": "formula",
        "text": "Direct method: alokasi service department = biaya service department × (basis produksi penerima / total basis hanya departemen produksi)"
      },
      {
        "kind": "formula",
        "text": "Step method tahap 1: biaya service department pertama dialokasikan ke departemen yang masih terbuka, termasuk service department lain yang belum ditutup"
      },
      {
        "kind": "formula",
        "text": "Step method tahap 2: biaya service department berikutnya = biaya awal + alokasi yang diterima dari service department sebelumnya"
      },
      {
        "kind": "formula",
        "text": "Tarif overhead departemen = total overhead akhir departemen produksi ÷ basis pembebanan departemen produksi"
      },
      {
        "kind": "formula",
        "text": "Applied FOH departemen = tarif overhead departemen × basis aktual yang dikonsumsi job atau produk"
      },
      {
        "kind": "h3",
        "text": "Mini Lab PT Valora - Service Department Allocation"
      },
      {
        "kind": "p",
        "text": "PT Valora memiliki dua departemen jasa dan dua departemen produksi. Maintenance dialokasikan berdasarkan jam pemeliharaan, sedangkan Power dialokasikan berdasarkan kWh. Kasus ini dipakai untuk membedakan direct method dan step method, lalu menghitung tarif overhead departemen."
      },
      {
        "kind": "table",
        "headers": ["Departemen", "Jenis", "Overhead awal", "Basis utama"],
        "rows": [
          ["Maintenance", "Service department", "Rp240.000.000", "Jam pemeliharaan"],
          ["Power", "Service department", "Rp180.000.000", "kWh"],
          ["Fabrication", "Producing department", "Rp600.000.000", "Jam mesin"],
          ["Finishing", "Producing department", "Rp420.000.000", "Jam tenaga kerja langsung"]
        ],
        "caption": "Data awal departementalisasi overhead PT Valora. Total overhead seluruh departemen Rp1.440.000.000."
      },
      {
        "kind": "table",
        "headers": ["Dasar alokasi", "Maintenance", "Power", "Fabrication", "Finishing", "Total"],
        "rows": [
          ["Jam pemeliharaan dari Maintenance", "-", "300", "900", "600", "1.800"],
          ["kWh dari Power", "20.000", "-", "50.000", "30.000", "100.000"]
        ],
        "caption": "Direct method mengabaikan basis yang mengarah ke service department lain. Step method tetap memakai basis ke service department yang belum ditutup."
      },
      {
        "kind": "table-fill",
        "spec": {
          "title": "PT Valora - Direct Method Allocation",
          "instruction": "Gunakan direct method. Abaikan jasa Maintenance ke Power dan jasa Power ke Maintenance. Alokasikan biaya service department hanya ke Fabrication dan Finishing.",
          "feedback": "Direct method selalu menghitung ulang rasio hanya untuk departemen produksi. Maintenance memakai rasio 900:600; Power memakai rasio 50.000:30.000.",
          "currency": "Rp",
          "headers": ["Komponen", "Fabrication", "Finishing", "Total"],
          "rows": [
            { "id": "b10-direct-maintenance", "label": "Alokasi Maintenance", "cells": [
              { "id": "b10-direct-maintenance-fab", "answer": 144000000, "feedback": "900/(900+600) × Rp240.000.000 = Rp144.000.000." },
              { "id": "b10-direct-maintenance-fin", "answer": 96000000, "feedback": "600/(900+600) × Rp240.000.000 = Rp96.000.000." },
              { "id": "b10-direct-maintenance-total", "answer": 240000000, "feedback": "Seluruh biaya Maintenance dialokasikan ke departemen produksi." }
            ] },
            { "id": "b10-direct-power", "label": "Alokasi Power", "cells": [
              { "id": "b10-direct-power-fab", "answer": 112500000, "feedback": "50.000/(50.000+30.000) × Rp180.000.000 = Rp112.500.000." },
              { "id": "b10-direct-power-fin", "answer": 67500000, "feedback": "30.000/(50.000+30.000) × Rp180.000.000 = Rp67.500.000." },
              { "id": "b10-direct-power-total", "answer": 180000000, "feedback": "Seluruh biaya Power dialokasikan ke departemen produksi." }
            ] },
            { "id": "b10-direct-final", "label": "Overhead akhir direct method", "cells": [
              { "id": "b10-direct-final-fab", "answer": 856500000, "feedback": "Rp600.000.000 + Rp144.000.000 + Rp112.500.000." },
              { "id": "b10-direct-final-fin", "answer": 583500000, "feedback": "Rp420.000.000 + Rp96.000.000 + Rp67.500.000." },
              { "id": "b10-direct-final-total", "answer": 1440000000, "feedback": "Total harus tetap sama dengan total overhead awal seluruh departemen." }
            ] }
          ]
        }
      },
      {
        "kind": "table-fill",
        "spec": {
          "title": "PT Valora - Step Method Allocation",
          "instruction": "Gunakan step method dengan Maintenance dialokasikan lebih dulu ke Power, Fabrication, dan Finishing. Setelah Maintenance ditutup, Power dialokasikan hanya ke Fabrication dan Finishing.",
          "feedback": "Step method mengakui sebagian jasa antar departemen jasa. Maintenance memberi alokasi Rp40.000.000 ke Power, sehingga biaya Power menjadi Rp220.000.000 sebelum dialokasikan ke departemen produksi.",
          "currency": "Rp",
          "headers": ["Komponen", "Power", "Fabrication", "Finishing", "Total"],
          "rows": [
            { "id": "b10-step-maintenance", "label": "Tahap 1: alokasi Maintenance", "cells": [
              { "id": "b10-step-maintenance-power", "answer": 40000000, "feedback": "300/1.800 × Rp240.000.000 = Rp40.000.000." },
              { "id": "b10-step-maintenance-fab", "answer": 120000000, "feedback": "900/1.800 × Rp240.000.000 = Rp120.000.000." },
              { "id": "b10-step-maintenance-fin", "answer": 80000000, "feedback": "600/1.800 × Rp240.000.000 = Rp80.000.000." },
              { "id": "b10-step-maintenance-total", "answer": 240000000, "feedback": "Maintenance selesai ditutup setelah tahap pertama." }
            ] },
            { "id": "b10-step-power", "label": "Tahap 2: alokasi Power setelah menerima Maintenance", "cells": [
              { "id": "b10-step-power-revised", "answer": 220000000, "feedback": "Biaya Power baru = Rp180.000.000 + Rp40.000.000." },
              { "id": "b10-step-power-fab", "answer": 137500000, "feedback": "50.000/(50.000+30.000) × Rp220.000.000." },
              { "id": "b10-step-power-fin", "answer": 82500000, "feedback": "30.000/(50.000+30.000) × Rp220.000.000." },
              { "id": "b10-step-power-total", "answer": 220000000, "feedback": "Seluruh biaya Power baru dialokasikan ke departemen produksi." }
            ] },
            { "id": "b10-step-final", "label": "Overhead akhir step method", "cells": [
              { "id": "b10-step-final-power", "answer": 0, "feedback": "Power ditutup setelah dialokasikan." },
              { "id": "b10-step-final-fab", "answer": 857500000, "feedback": "Rp600.000.000 + Rp120.000.000 + Rp137.500.000." },
              { "id": "b10-step-final-fin", "answer": 582500000, "feedback": "Rp420.000.000 + Rp80.000.000 + Rp82.500.000." },
              { "id": "b10-step-final-total", "answer": 1440000000, "feedback": "Total harus tetap Rp1.440.000.000." }
            ] }
          ]
        }
      },
      {
        "kind": "table-fill",
        "spec": {
          "title": "PT Valora - Departmental Overhead Rate Direct Method",
          "instruction": "Gunakan hasil direct method. Fabrication menggunakan 57.100 jam mesin; Finishing menggunakan 29.175 jam tenaga kerja langsung.",
          "feedback": "Tarif departemen baru dihitung setelah service department cost selesai dialokasikan ke departemen produksi.",
          "currency": "Rp",
          "headers": ["Departemen", "Total overhead akhir", "Basis", "Tarif"],
          "rows": [
            { "id": "b10-rate-fabrication", "label": "Fabrication", "cells": [
              { "id": "b10-rate-fabrication-foh", "answer": 856500000, "feedback": "Total overhead akhir Fabrication direct method." },
              { "id": "b10-rate-fabrication-base", "answer": 57100, "feedback": "Basis pembebanan Fabrication adalah jam mesin." },
              { "id": "b10-rate-fabrication-rate", "answer": 15000, "feedback": "Rp856.500.000 ÷ 57.100 jam mesin = Rp15.000 per jam mesin." }
            ] },
            { "id": "b10-rate-finishing", "label": "Finishing", "cells": [
              { "id": "b10-rate-finishing-foh", "answer": 583500000, "feedback": "Total overhead akhir Finishing direct method." },
              { "id": "b10-rate-finishing-base", "answer": 29175, "feedback": "Basis pembebanan Finishing adalah jam tenaga kerja langsung." },
              { "id": "b10-rate-finishing-rate", "answer": 20000, "feedback": "Rp583.500.000 ÷ 29.175 jam TKL = Rp20.000 per jam TKL." }
            ] }
          ]
        }
      },
      {
        "kind": "journal-builder",
        "spec": {
          "title": "PT Valora - Jurnal Pembebanan Overhead Departemental",
          "instruction": "Setelah tarif departemen direct method dihitung, Job V-21 memakai 120 jam mesin di Fabrication dan 40 jam TKL di Finishing. Susun jurnal applied FOH.",
          "feedback": "Applied FOH Fabrication = 120 × Rp15.000 = Rp1.800.000. Applied FOH Finishing = 40 × Rp20.000 = Rp800.000. Total applied FOH ke WIP Rp2.600.000.",
          "currency": "Rp",
          "accountChoices": ["Work in Process", "Applied Factory Overhead - Fabrication", "Applied Factory Overhead - Finishing", "Factory Overhead Control"],
          "lines": [
            { "id": "b10-journal-wip", "group": "Applied FOH Job V-21", "account": "Work in Process", "debit": 2600000, "feedback": "WIP didebit sebesar total applied FOH dua departemen." },
            { "id": "b10-journal-fab", "group": "Applied FOH Job V-21", "account": "Applied Factory Overhead - Fabrication", "credit": 1800000, "feedback": "Fabrication applied FOH = 120 jam mesin × Rp15.000." },
            { "id": "b10-journal-fin", "group": "Applied FOH Job V-21", "account": "Applied Factory Overhead - Finishing", "credit": 800000, "feedback": "Finishing applied FOH = 40 jam TKL × Rp20.000." }
          ]
        }
      },
      {
        "kind": "interactive-match",
        "spec": {
          "title": "Cocokkan Metode Alokasi Service Department",
          "instruction": "Pilih metode yang paling sesuai dengan ciri pada tiap baris.",
          "choices": ["Direct method", "Step/sequential method", "Simultaneous/algebraic method", "Departmental overhead rate", "Allocation base"],
          "pairs": [
            { "id": "b10-match-direct", "prompt": "Mengabaikan jasa antar service department dan langsung mengalokasikan biaya jasa ke producing department.", "answer": "Direct method" },
            { "id": "b10-match-step", "prompt": "Mengalokasikan service department secara berurutan dan menutup departemen yang sudah dialokasikan.", "answer": "Step/sequential method" },
            { "id": "b10-match-algebraic", "prompt": "Menggunakan persamaan untuk mengakui hubungan timbal balik antar service department secara penuh.", "answer": "Simultaneous/algebraic method" },
            { "id": "b10-match-rate", "prompt": "Tarif yang dihitung setelah semua service department cost masuk ke producing department.", "answer": "Departmental overhead rate" },
            { "id": "b10-match-base", "prompt": "Ukuran manfaat yang dipakai untuk membagi biaya, misalnya jam pemeliharaan atau kWh.", "answer": "Allocation base" }
          ]
        }
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "Trap UAS Batch 10",
        "text": "Kesalahan paling sering adalah memakai direct method tetapi tetap memasukkan jasa antar service department, menghitung tarif overhead sebelum service department cost dialokasikan, serta mencampur basis kWh, jam pemeliharaan, jam mesin, dan jam tenaga kerja langsung tanpa membaca instruksi soal."
      },
      {
        "kind": "h3",
        "text": "10. Kesalahan Umum"
      },
      {
        "kind": "ol",
        "items": [
          "Tidak memisahkan departemen produksi dan departemen jasa.",
          "Mengalokasikan biaya departemen jasa langsung ke produk.",
          "Memakai direct method tetapi tetap menghitung jasa antar departemen jasa.",
          "Memakai step method tetapi salah menentukan urutan alokasi.",
          "Mengalokasikan kembali biaya ke departemen jasa yang sudah ditutup.",
          "Tidak menghitung ulang proporsi dalam direct method.",
          "Menggunakan dasar alokasi yang tidak sesuai.",
          "Menghitung tarif overhead sebelum alokasi departemen jasa selesai.",
          "Mencampur jam mesin, jam TKL, dan biaya TKL tanpa membaca dasar tarif.",
          "Membalik arti overhead lebih dibebankan dan kurang dibebankan.",
          "Tidak mengecek total overhead sebelum dan sesudah alokasi.",
          "Menyalin angka dari scan tanpa pemeriksaan manual.",
          "Menyebut semua biaya departemen sebagai biaya langsung.",
          "Menganggap departementalisasi hanya berlaku untuk job order costing.",
          "Tidak mencatat jurnal pembebanan overhead ke Barang Dalam Proses."
        ]
      },
      {
        "kind": "example",
        "title": "11. Latihan Pemahaman",
        "blocks": [
          {
            "kind": "example",
            "title": "Latihan 1 - Konsep",
            "blocks": [
              {
                "kind": "p",
                "text": "Jelaskan perbedaan departemen produksi dan departemen jasa. Berikan masing-masing tiga contoh."
              }
            ]
          },
          {
            "kind": "example",
            "title": "Latihan 2 - Klasifikasi Biaya",
            "blocks": [
              {
                "kind": "p",
                "text": "Klasifikasikan biaya berikut sebagai biaya departemen langsung atau biaya departemen tidak langsung."
              },
              {
                "kind": "table",
                "headers": [
                  "Biaya",
                  "Klasifikasi"
                ],
                "rows": [
                  [
                    "Gaji supervisor Departemen Cutting",
                    "Diisi berdasarkan data soal"
                  ],
                  [
                    "Sewa gedung pabrik",
                    "Diisi berdasarkan data soal"
                  ],
                  [
                    "Depresiasi mesin Departemen Planing",
                    "Diisi berdasarkan data soal"
                  ],
                  [
                    "Asuransi kebakaran gedung pabrik",
                    "Diisi berdasarkan data soal"
                  ],
                  [
                    "Bahan penolong Departemen Assembly",
                    "Diisi berdasarkan data soal"
                  ],
                  [
                    "Listrik pabrik tanpa meter terpisah",
                    "Diisi berdasarkan data soal"
                  ]
                ]
              }
            ]
          },
          {
            "kind": "example",
            "title": "Latihan 3 - Direct Method",
            "blocks": [
              {
                "kind": "p",
                "text": "Data overhead awal:"
              },
              {
                "kind": "table",
                "headers": [
                  "Departemen",
                  "Overhead Awal"
                ],
                "rows": [
                  [
                    "Produksi A",
                    "60.000"
                  ],
                  [
                    "Produksi B",
                    "80.000"
                  ],
                  [
                    "Jasa Y",
                    "36.300"
                  ],
                  [
                    "Jasa Z",
                    "20.000"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Data jasa:"
              },
              {
                "kind": "table",
                "headers": [
                  "Penerima",
                  "Dari Y",
                  "Dari Z"
                ],
                "rows": [
                  [
                    "Produksi A",
                    "40%",
                    "20%"
                  ],
                  [
                    "Produksi B",
                    "40%",
                    "50%"
                  ],
                  [
                    "Jasa Y",
                    "0%",
                    "30%"
                  ],
                  [
                    "Jasa Z",
                    "20%",
                    "0%"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Diminta:"
              },
              {
                "kind": "ol",
                "items": [
                  "Alokasikan biaya jasa dengan direct method.",
                  "Hitung overhead akhir Produksi A dan Produksi B.",
                  "Jelaskan mengapa jasa antar departemen jasa diabaikan."
                ]
              },
              {
                "kind": "callout",
                "variant": "warning",
                "title": "[Perlu pemeriksaan manual]",
                "text": "[Perlu pemeriksaan manual] Data latihan mengikuti contoh scan Carter."
              }
            ]
          },
          {
            "kind": "example",
            "title": "Latihan 4 - Step Method",
            "blocks": [
              {
                "kind": "p",
                "text": "Gunakan data Latihan 3."
              },
              {
                "kind": "p",
                "text": "Diminta:"
              },
              {
                "kind": "ol",
                "items": [
                  "Tentukan departemen jasa yang dialokasikan lebih dulu.",
                  "Hitung alokasi biaya Departemen Y.",
                  "Hitung biaya Departemen Z setelah menerima alokasi.",
                  "Hitung overhead akhir Produksi A dan Produksi B."
                ]
              }
            ]
          },
          {
            "kind": "example",
            "title": "Latihan 5 - Simultaneous Method",
            "blocks": [
              {
                "kind": "p",
                "text": "Gunakan persamaan berikut:"
              },
              {
                "kind": "formula",
                "text": "Y = 36.300 + 0,30Z Z = 20.000 + 0,20Y"
              },
              {
                "kind": "p",
                "text": "Diminta:"
              },
              {
                "kind": "ol",
                "items": [
                  "Hitung nilai Y.",
                  "Hitung nilai Z.",
                  "Alokasikan Y dan Z ke Produksi A dan Produksi B.",
                  "Bandingkan hasilnya dengan direct method dan step method."
                ]
              }
            ]
          },
          {
            "kind": "example",
            "title": "Latihan 6 - Tarif Overhead Departemen",
            "blocks": [
              {
                "kind": "p",
                "text": "Data berikut digunakan untuk menghitung tarif overhead:"
              },
              {
                "kind": "table",
                "headers": [
                  "Departemen",
                  "Total Overhead",
                  "Dasar Pembebanan"
                ],
                "rows": [
                  [
                    "Cutting",
                    "81.216",
                    "20.304 jam TKL"
                  ],
                  [
                    "Planing",
                    "58.883",
                    "9.200 jam mesin"
                  ],
                  [
                    "Assembly",
                    "73.242",
                    "122.000 biaya TKL"
                  ],
                  [
                    "Upholstery",
                    "86.659",
                    "24.070 jam TKL"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Diminta:"
              },
              {
                "kind": "ol",
                "items": [
                  "Hitung tarif overhead setiap departemen.",
                  "Tentukan departemen mana yang memakai tarif berbasis jam mesin.",
                  "Tentukan departemen mana yang memakai tarif berbasis biaya tenaga kerja langsung."
                ]
              },
              {
                "kind": "callout",
                "variant": "warning",
                "title": "[Perlu pemeriksaan manual]",
                "text": "[Perlu pemeriksaan manual] Data mengikuti scan Carter."
              }
            ]
          }
        ]
      },
      {
        "kind": "h3",
        "text": "12. Ringkasan"
      },
      {
        "kind": "p",
        "text": "Departementalisasi overhead pabrik adalah proses membagi pabrik menjadi beberapa departemen agar biaya overhead dapat dihitung dan dikendalikan secara lebih tepat. Pendekatan ini membuat biaya overhead tidak hanya dikumpulkan dalam satu kelompok besar, tetapi dipisahkan berdasarkan departemen yang menikmati atau menyebabkan biaya tersebut."
      },
      {
        "kind": "p",
        "text": "Departemen dalam pabrik dibedakan menjadi departemen produksi dan departemen jasa. Departemen produksi melakukan pekerjaan langsung terhadap produk, seperti memotong, merakit, membentuk, atau menyelesaikan produk. Departemen jasa tidak mengubah produk secara langsung, tetapi memberi dukungan kepada departemen produksi, seperti maintenance, utilities, inspection, materials handling, receiving, dan general factory."
      },
      {
        "kind": "p",
        "text": "Biaya departemen terdiri atas biaya departemen langsung dan biaya departemen tidak langsung. Biaya departemen langsung dapat ditelusuri langsung ke departemen tertentu, seperti gaji supervisor, tenaga kerja tidak langsung, bahan tidak langsung, perbaikan mesin, dan depresiasi peralatan. Biaya departemen tidak langsung memberi manfaat kepada beberapa departemen sekaligus, seperti sewa gedung, pajak properti, asuransi kebakaran, listrik, dan depresiasi gedung. Biaya tidak langsung perlu dialokasikan dengan dasar yang rasional."
      },
      {
        "kind": "p",
        "text": "Factory survey digunakan untuk mengumpulkan data dasar alokasi. Data ini dapat berupa jumlah karyawan, kilowatt-hour, horsepower-hour, luas lantai, biaya bahan yang diminta, jam mesin, dan jam tenaga kerja langsung. Pemilihan dasar alokasi harus dekat dengan penyebab biaya. Jika dasar alokasi salah, biaya produk menjadi tidak akurat."
      },
      {
        "kind": "p",
        "text": "Biaya departemen jasa harus dialokasikan ke departemen produksi sebelum tarif overhead dihitung. Direct method mengabaikan jasa antar departemen jasa dan langsung mengalokasikan biaya jasa ke departemen produksi. Step method mengalokasikan biaya departemen jasa secara bertahap dan mengakui sebagian hubungan antar departemen jasa. Simultaneous method mengakui hubungan timbal balik secara penuh dengan persamaan aljabar."
      },
      {
        "kind": "p",
        "text": "Dalam format soal Pra-UAS, direct method dan sequential method harus disajikan dengan urutan kerja yang jelas: tabel data awal, rasio alokasi, tabel alokasi biaya departemen jasa, dan anggaran setelah alokasi. Total akhir harus tetap sama dengan total anggaran semua departemen sebelum alokasi."
      },
      {
        "kind": "p",
        "text": "Setelah alokasi departemen jasa selesai, perusahaan menghitung tarif overhead departemen produksi. Tarif dapat memakai dasar yang berbeda, seperti jam tenaga kerja langsung, jam mesin, atau biaya tenaga kerja langsung. Penggunaan tarif yang berbeda membuat pembebanan overhead lebih adil karena setiap departemen memiliki pola aktivitas dan sumber biaya yang tidak sama."
      },
      {
        "kind": "p",
        "text": "Pada akhir periode, overhead aktual dibandingkan dengan overhead yang dibebankan. Jika overhead aktual lebih besar dari overhead dibebankan, terjadi overhead kurang dibebankan. Jika overhead aktual lebih kecil dari overhead dibebankan, terjadi overhead lebih dibebankan. Selisih ini perlu dianalisis agar perusahaan dapat mengevaluasi ketepatan tarif dan pengendalian biaya departemen."
      },
      {
        "kind": "h3",
        "text": "13. Checklist Kelengkapan"
      },
      {
        "kind": "table",
        "headers": [
          "Komponen",
          "Status"
        ],
        "rows": [
          [
            "Tujuan pembelajaran",
            "Sudah masuk"
          ],
          [
            "Gambaran umum",
            "Sudah masuk"
          ],
          [
            "Peta submateri",
            "Sudah masuk"
          ],
          [
            "Materi teori",
            "Sudah masuk"
          ],
          [
            "Materi praktik",
            "Sudah masuk"
          ],
          [
            "Format cost atau laporan biaya",
            "Sudah masuk"
          ],
          [
            "Rumus penting",
            "Sudah masuk"
          ],
          [
            "Contoh kasus",
            "Sudah masuk"
          ],
          [
            "Contoh Pra-UAS direct method dan sequential method",
            "Sudah masuk"
          ],
          [
            "Langkah penyelesaian",
            "Sudah masuk"
          ],
          [
            "Kesalahan umum",
            "Sudah masuk"
          ],
          [
            "Latihan pemahaman",
            "Sudah masuk"
          ],
          [
            "Ringkasan",
            "Sudah masuk"
          ],
          [
            "Checklist kelengkapan",
            "Sudah masuk"
          ],
          [
            "Label [Perlu pemeriksaan manual] pada angka dan tabel dari scan",
            "Sudah masuk"
          ],
          [
            "Fokus hanya TM 12",
            "Sudah sesuai"
          ],
          [
            "TM 13, TM 14, dan Simulasi UAS",
            "Tidak ditulis"
          ]
        ]
      }
    ]
  },
  "13": {
    "id": "akbi-tm-13",
    "tm": 13,
    "title": "Perhitungan Biaya Berdasarkan Aktivitas atau Activity Based Costing",
    "ref": "AKBI Master Content Bagian 2 · TM 13",
    "source": "AKBI_Master_Content_Bagian_2_TM12-UAS.md",
    "phase": "pra_uas",
    "manualCheckCount": 21,
    "intro": "Activity Based Costing atau ABC adalah sistem penentuan kos yang membebankan biaya overhead berdasarkan aktivitas yang menyebabkan biaya terjadi. ABC tidak hanya melihat produk sebagai penyebab biaya. ABC melihat bahwa banyak biaya tidak muncul karena jumlah unit yang diproduksi saja, tetapi karena aktivitas seperti setup, pemindahan bahan, inspeksi, perubahan desain, pemrosesan pesanan, dan pelayanan pelanggan. Sistem biaya tradisional biasanya membebankan overhead dengan dasar volume. Contohnya jam tenaga kerja langsung, biaya tenaga kerja langsung, jam mesin, atau jumlah unit. Cara ini dapat bekerja baik jika struktur biaya sederhana dan produk mengonsumsi sumber daya secara relatif sama. Masalah muncul ketika perusahaan memiliki produk yang beragam, proses yang kompleks, banyak aktivitas non-volume, dan overhead yang besar.",
    "objectives": [
      "Menjelaskan konsep activity accounting, Activity Based Costing, dan Activity Based Management.",
      "Membedakan sistem biaya tradisional dengan sistem Activity Based Costing.",
      "Menjelaskan resource driver dan activity driver.",
      "Mengidentifikasi level biaya dan driver dalam ABC.",
      "Mengelompokkan biaya ke dalam unit-level, batch-level, product-level, dan plant-level.",
      "Menghitung tarif aktivitas.",
      "Membebankan biaya aktivitas ke produk.",
      "Membandingkan hasil kos produk menurut sistem tradisional dan ABC.",
      "Menyelesaikan kasus ABC berbasis setup hours, design change, dan luas area.",
      "Menjelaskan kapan ABC lebih tepat digunakan.",
      "Menjelaskan manfaat ABC untuk pengambilan keputusan harga, lini produk, pengendalian biaya, dan perbaikan proses."
    ],
    "blocks": [
      {
        "kind": "h2",
        "text": "TM 13"
      },
      {
        "kind": "h2",
        "text": "TM 13 - Perhitungan Biaya Berdasarkan Aktivitas atau Activity Based Costing"
      },
      {
        "kind": "h3",
        "text": "1. Tujuan Pembelajaran"
      },
      {
        "kind": "p",
        "text": "Setelah mempelajari TM 13, mahasiswa diharapkan mampu:"
      },
      {
        "kind": "ol",
        "items": [
          "Menjelaskan konsep activity accounting, Activity Based Costing, dan Activity Based Management.",
          "Membedakan sistem biaya tradisional dengan sistem Activity Based Costing.",
          "Menjelaskan resource driver dan activity driver.",
          "Mengidentifikasi level biaya dan driver dalam ABC.",
          "Mengelompokkan biaya ke dalam unit-level, batch-level, product-level, dan plant-level.",
          "Menghitung tarif aktivitas.",
          "Membebankan biaya aktivitas ke produk.",
          "Membandingkan hasil kos produk menurut sistem tradisional dan ABC.",
          "Menyelesaikan kasus ABC berbasis setup hours, design change, dan luas area.",
          "Menjelaskan kapan ABC lebih tepat digunakan.",
          "Menjelaskan manfaat ABC untuk pengambilan keputusan harga, lini produk, pengendalian biaya, dan perbaikan proses."
        ]
      },
      {
        "kind": "p",
        "text": "Dalam silabi AKBI, TM 13 membahas **Perhitungan Biaya Berdasarkan Aktivitas atau Activity Based Costing - ABC** dengan sumber CU 13 dan IMN 12. Pada sumber Carter yang tersedia, topik ini masuk dalam bagian **Activity Accounting: Activity-Based Costing and Activity-Based Management**."
      },
      {
        "kind": "h3",
        "text": "2. Gambaran Umum"
      },
      {
        "kind": "p",
        "text": "Activity Based Costing atau ABC adalah sistem penentuan kos yang membebankan biaya overhead berdasarkan aktivitas yang menyebabkan biaya terjadi. ABC tidak hanya melihat produk sebagai penyebab biaya. ABC melihat bahwa banyak biaya tidak muncul karena jumlah unit yang diproduksi saja, tetapi karena aktivitas seperti setup, pemindahan bahan, inspeksi, perubahan desain, pemrosesan pesanan, dan pelayanan pelanggan."
      },
      {
        "kind": "p",
        "text": "Sistem biaya tradisional biasanya membebankan overhead dengan dasar volume. Contohnya jam tenaga kerja langsung, biaya tenaga kerja langsung, jam mesin, atau jumlah unit. Cara ini dapat bekerja baik jika struktur biaya sederhana dan produk mengonsumsi sumber daya secara relatif sama. Masalah muncul ketika perusahaan memiliki produk yang beragam, proses yang kompleks, banyak aktivitas non-volume, dan overhead yang besar."
      },
      {
        "kind": "p",
        "text": "ABC memberi informasi kos produk yang lebih rinci. Biaya ditelusuri ke aktivitas terlebih dahulu. Setelah itu, biaya aktivitas dibebankan ke produk berdasarkan penggunaan aktivitas oleh masing-masing produk. Dengan cara ini, produk yang membutuhkan banyak setup, banyak perubahan desain, atau banyak inspeksi akan menerima beban overhead lebih besar daripada produk yang tidak banyak menggunakan aktivitas tersebut."
      },
      {
        "kind": "p",
        "text": "TM 13 penting karena menghubungkan perhitungan kos dengan keputusan manajerial. ABC tidak hanya dipakai untuk menghitung harga pokok produk. ABC juga membantu manajemen melihat aktivitas yang mahal, aktivitas yang tidak memberi nilai tambah, produk yang terlihat menguntungkan tetapi sebenarnya mahal, dan produk yang terlihat rugi padahal sebenarnya masih kompetitif."
      },
      {
        "kind": "h3",
        "text": "3. Peta Submateri"
      },
      {
        "kind": "ol",
        "items": [
          "Konsep activity accounting",
          "Konsep Activity Based Costing",
          "Konsep Activity Based Management",
          "Perbedaan ABC dan sistem biaya tradisional",
          "Resource driver",
          "Activity driver",
          "Final cost object",
          "Level biaya dan driver dalam ABC",
          "Unit-level cost dan unit-level driver",
          "Batch-level cost dan batch-level driver",
          "Product-level cost dan product-level driver",
          "Plant-level cost dan plant-level driver",
          "Pembentukan activity cost pool",
          "Perhitungan tarif aktivitas",
          "Pembebanan biaya aktivitas ke produk",
          "Kasus ABC berbasis setup hours, design change, dan luas area",
          "Rekonsiliasi kos produk tradisional dan ABC",
          "Distorsi biaya produk",
          "Keunggulan strategis ABC",
          "Kelebihan dan kelemahan ABC",
          "ABC untuk Activity Based Management",
          "ABC, non-value-added activities, dan Total Quality Management",
          "ABC untuk pengendalian biaya"
        ]
      },
      {
        "kind": "h3",
        "text": "4. Materi Teori"
      },
      {
        "kind": "h3",
        "text": "4.1 Activity Accounting"
      },
      {
        "kind": "p",
        "text": "Activity accounting adalah pendekatan akuntansi biaya yang melihat aktivitas sebagai pusat perhatian. Dalam pendekatan ini, manajemen tidak hanya bertanya “berapa kos produk?”, tetapi juga “aktivitas apa yang menyebabkan biaya tersebut?”."
      },
      {
        "kind": "p",
        "text": "Aktivitas adalah pekerjaan atau tindakan yang mengonsumsi sumber daya. Contohnya:"
      },
      {
        "kind": "table",
        "headers": [
          "Aktivitas",
          "Contoh Biaya yang Timbul"
        ],
        "rows": [
          [
            "Setup mesin",
            "Gaji teknisi setup, waktu mesin menganggur, bahan uji coba"
          ],
          [
            "Pemindahan bahan",
            "Upah material handler, forklift, bahan bakar"
          ],
          [
            "Inspeksi",
            "Gaji pemeriksa kualitas, alat inspeksi"
          ],
          [
            "Perubahan desain",
            "Gaji desainer, software desain, pengujian prototipe"
          ],
          [
            "Pemrosesan pesanan",
            "Biaya administrasi pesanan, dokumen, sistem informasi"
          ],
          [
            "Pengemasan",
            "Bahan kemas, tenaga kerja packing"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Activity accounting menjadi dasar bagi ABC dan ABM. ABC fokus pada perhitungan kos. ABM fokus pada penggunaan informasi aktivitas untuk memperbaiki proses dan keputusan."
      },
      {
        "kind": "h3",
        "text": "4.2 Activity Based Costing"
      },
      {
        "kind": "p",
        "text": "Activity Based Costing adalah sistem penentuan kos yang membebankan biaya overhead ke produk berdasarkan aktivitas yang dikonsumsi oleh produk tersebut."
      },
      {
        "kind": "p",
        "text": "Dalam ABC, biaya tidak langsung tidak langsung dibebankan ke produk dengan satu dasar volume. Biaya dikumpulkan lebih dulu dalam activity cost pool. Setelah itu, biaya aktivitas dibebankan ke produk memakai activity driver."
      },
      {
        "kind": "p",
        "text": "Alur ABC dapat dipahami seperti ini:"
      },
      {
        "kind": "p",
        "text": "Biaya sumber daya → Activity cost pool → Produk atau objek biaya akhir"
      },
      {
        "kind": "p",
        "text": "Contoh:"
      },
      {
        "kind": "table",
        "headers": [
          "Biaya Sumber Daya",
          "Activity Cost Pool",
          "Activity Driver",
          "Produk yang Dibebani"
        ],
        "rows": [
          [
            "Gaji teknisi setup",
            "Setup mesin",
            "Jumlah setup",
            "Produk A dan B"
          ],
          [
            "Gaji desainer",
            "Perubahan desain",
            "Jumlah perubahan desain",
            "Produk A dan B"
          ],
          [
            "Biaya forklift",
            "Pemindahan bahan",
            "Jumlah perpindahan bahan",
            "Produk A dan B"
          ],
          [
            "Biaya inspeksi",
            "Inspeksi kualitas",
            "Jumlah inspeksi",
            "Produk A dan B"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "ABC lebih teliti karena biaya overhead dibebankan berdasarkan penyebab biaya, bukan hanya berdasarkan ukuran volume."
      },
      {
        "kind": "h3",
        "text": "4.3 Activity Based Management"
      },
      {
        "kind": "p",
        "text": "Activity Based Management atau ABM adalah penggunaan informasi ABC untuk memperbaiki keputusan dan proses perusahaan."
      },
      {
        "kind": "p",
        "text": "Jika ABC menjawab pertanyaan “berapa kos setiap aktivitas dan produk?”, maka ABM menjawab pertanyaan “aktivitas apa yang perlu dikurangi, dihilangkan, dipilih, atau dibagi agar perusahaan lebih efisien?”."
      },
      {
        "kind": "p",
        "text": "ABM menggunakan informasi aktivitas untuk:"
      },
      {
        "kind": "ol",
        "items": [
          "Menentukan aktivitas yang mahal.",
          "Mengidentifikasi aktivitas yang tidak memberi nilai tambah.",
          "Memperbaiki proses produksi.",
          "Mengevaluasi lini produk.",
          "Menetapkan harga secara lebih tepat.",
          "Mengendalikan biaya berdasarkan aktivitas.",
          "Menghubungkan pengendalian biaya dengan perbaikan mutu."
        ]
      },
      {
        "kind": "h3",
        "text": "4.4 Perbedaan ABC dan Sistem Biaya Tradisional"
      },
      {
        "kind": "p",
        "text": "Sistem biaya tradisional biasanya menggunakan dasar volume. Contohnya jam tenaga kerja langsung atau jam mesin. Sistem ini menganggap bahwa semakin banyak unit diproduksi, semakin besar overhead yang dikonsumsi."
      },
      {
        "kind": "p",
        "text": "ABC memiliki pandangan yang berbeda. ABC mengakui bahwa banyak overhead tidak berubah karena jumlah unit saja. Ada biaya yang muncul karena jumlah batch, jumlah jenis produk, jumlah perubahan desain, jumlah pesanan, atau aktivitas pendukung pabrik."
      },
      {
        "kind": "table",
        "headers": [
          "Aspek",
          "Sistem Tradisional",
          "Activity Based Costing"
        ],
        "rows": [
          [
            "Fokus utama",
            "Unit produk",
            "Aktivitas yang dikonsumsi produk"
          ],
          [
            "Dasar pembebanan",
            "Biasanya volume",
            "Driver aktivitas"
          ],
          [
            "Cost pool",
            "Satu atau beberapa cost pool besar",
            "Banyak activity cost pool"
          ],
          [
            "Akurasi pada produk kompleks",
            "Lebih rentan distorsi",
            "Lebih informatif"
          ],
          [
            "Biaya non-volume",
            "Sering dibebankan dengan dasar volume",
            "Dibebankan dengan driver non-volume"
          ],
          [
            "Kegunaan manajerial",
            "Terbatas untuk kos produk",
            "Berguna untuk harga, lini produk, proses, dan pengendalian"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Sistem tradisional tidak selalu salah. Sistem tradisional masih dapat memadai jika produk homogen, proses sederhana, overhead kecil, dan aktivitas non-volume tidak material. ABC menjadi lebih penting jika struktur biaya kompleks dan produk yang diproduksi sangat beragam."
      },
      {
        "kind": "h3",
        "text": "4.5 Resource Driver"
      },
      {
        "kind": "p",
        "text": "Resource driver adalah dasar untuk membebankan biaya sumber daya ke aktivitas. Resource driver menjawab pertanyaan: sumber daya ini dipakai oleh aktivitas apa?"
      },
      {
        "kind": "p",
        "text": "Contoh:"
      },
      {
        "kind": "table",
        "headers": [
          "Sumber Daya",
          "Aktivitas",
          "Resource Driver"
        ],
        "rows": [
          [
            "Gaji teknisi",
            "Setup mesin",
            "Waktu teknisi untuk setup"
          ],
          [
            "Biaya listrik",
            "Pengoperasian mesin",
            "Kilowatt-hour"
          ],
          [
            "Biaya gedung",
            "Aktivitas produksi",
            "Luas lantai"
          ],
          [
            "Biaya tenaga administrasi",
            "Pemrosesan pesanan",
            "Waktu administrasi"
          ],
          [
            "Biaya forklift",
            "Pemindahan bahan",
            "Jam forklift"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Resource driver dipakai pada tahap pertama ABC, yaitu dari biaya sumber daya ke activity cost pool."
      },
      {
        "kind": "h3",
        "text": "4.6 Activity Driver"
      },
      {
        "kind": "p",
        "text": "Activity driver adalah dasar untuk membebankan biaya aktivitas ke produk atau objek biaya akhir. Activity driver menjawab pertanyaan: produk ini menggunakan aktivitas seberapa banyak?"
      },
      {
        "kind": "p",
        "text": "Contoh:"
      },
      {
        "kind": "table",
        "headers": [
          "Activity Cost Pool",
          "Activity Driver"
        ],
        "rows": [
          [
            "Setup mesin",
            "Jumlah setup"
          ],
          [
            "Perubahan desain",
            "Jumlah perubahan desain"
          ],
          [
            "Pemindahan bahan",
            "Jumlah perpindahan bahan"
          ],
          [
            "Inspeksi",
            "Jumlah inspeksi"
          ],
          [
            "Pemrosesan pesanan",
            "Jumlah pesanan"
          ],
          [
            "Pengemasan",
            "Jumlah unit atau jumlah paket"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Activity driver dipakai pada tahap kedua ABC, yaitu dari activity cost pool ke produk."
      },
      {
        "kind": "h3",
        "text": "4.7 Final Cost Object"
      },
      {
        "kind": "p",
        "text": "Final cost object adalah objek biaya akhir yang menerima pembebanan biaya. Dalam konteks manufaktur, final cost object biasanya berupa produk, pesanan, pelanggan, atau lini produk."
      },
      {
        "kind": "p",
        "text": "Contoh final cost object:"
      },
      {
        "kind": "table",
        "headers": [
          "Final Cost Object",
          "Contoh"
        ],
        "rows": [
          [
            "Produk",
            "Produk Common dan Special"
          ],
          [
            "Pesanan",
            "Job 101, Job 102"
          ],
          [
            "Pelanggan",
            "Pelanggan A, pelanggan B"
          ],
          [
            "Lini produk",
            "Produk standar dan produk khusus"
          ],
          [
            "Saluran distribusi",
            "Retail, grosir, marketplace"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "ABC dapat digunakan untuk menghitung kos produk, kos pelanggan, kos layanan, atau kos saluran distribusi."
      },
      {
        "kind": "h3",
        "text": "5. Level Biaya dan Driver dalam ABC"
      },
      {
        "kind": "p",
        "text": "ABC membagi biaya dan driver ke dalam beberapa level. Pembagian ini penting karena tidak semua biaya dipicu oleh jumlah unit."
      },
      {
        "kind": "h3",
        "text": "5.1 Unit-Level Cost"
      },
      {
        "kind": "p",
        "text": "Unit-level cost adalah biaya yang meningkat setiap kali satu unit produk dibuat. Biaya ini berhubungan langsung dengan jumlah unit."
      },
      {
        "kind": "p",
        "text": "Contoh unit-level activities:"
      },
      {
        "kind": "table",
        "headers": [
          "Aktivitas",
          "Contoh Biaya",
          "Driver"
        ],
        "rows": [
          [
            "Cutting",
            "Listrik mesin pemotong",
            "Unit output"
          ],
          [
            "Soldering",
            "Bahan tidak langsung",
            "Jam kerja langsung"
          ],
          [
            "Painting",
            "Cat dan tenaga painting",
            "Jam mesin"
          ],
          [
            "Assembling",
            "Tenaga perakitan",
            "Jam tenaga kerja langsung"
          ],
          [
            "Packaging",
            "Bahan kemasan",
            "Jumlah unit"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Unit-level driver selalu berhubungan dengan volume output. Contohnya jumlah unit, jam tenaga kerja langsung, jam mesin, atau berat bahan langsung."
      },
      {
        "kind": "h3",
        "text": "5.2 Batch-Level Cost"
      },
      {
        "kind": "p",
        "text": "Batch-level cost adalah biaya yang muncul setiap kali perusahaan memproduksi satu batch. Biaya ini tidak bergantung pada jumlah unit dalam batch, tetapi bergantung pada jumlah batch."
      },
      {
        "kind": "p",
        "text": "Contoh batch-level activities:"
      },
      {
        "kind": "table",
        "headers": [
          "Aktivitas",
          "Contoh Biaya",
          "Driver"
        ],
        "rows": [
          [
            "Scheduling",
            "Gaji scheduler",
            "Jumlah batch"
          ],
          [
            "Setting up",
            "Biaya setup mesin",
            "Jumlah setup"
          ],
          [
            "Blending",
            "Biaya persiapan campuran",
            "Setup hours"
          ],
          [
            "Moving",
            "Biaya pemindahan bahan",
            "Jumlah perpindahan bahan"
          ],
          [
            "Purchasing",
            "Biaya pemrosesan pembelian",
            "Jumlah purchase order"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Contoh sederhana: membuat 1 batch berisi 100 unit dan 1 batch berisi 1.000 unit tetap membutuhkan satu kali setup. Karena itu, biaya setup tidak tepat jika dibebankan hanya berdasarkan jumlah unit."
      },
      {
        "kind": "h3",
        "text": "5.3 Product-Level Cost"
      },
      {
        "kind": "p",
        "text": "Product-level cost adalah biaya yang muncul untuk mendukung keberadaan suatu jenis produk. Biaya ini tidak bergantung langsung pada jumlah unit atau jumlah batch."
      },
      {
        "kind": "p",
        "text": "Contoh product-level activities:"
      },
      {
        "kind": "table",
        "headers": [
          "Aktivitas",
          "Contoh Biaya",
          "Driver"
        ],
        "rows": [
          [
            "Designing",
            "Gaji desainer",
            "Jumlah desain produk"
          ],
          [
            "Developing",
            "Biaya pengembangan produk",
            "Jumlah perubahan desain"
          ],
          [
            "Prototyping",
            "Biaya prototipe",
            "Design hours"
          ],
          [
            "Advertising",
            "Biaya promosi produk tertentu",
            "Jumlah produk atau kampanye"
          ],
          [
            "Warehousing",
            "Biaya penyimpanan produk tertentu",
            "Jumlah jenis produk"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Product-level cost penting dalam perusahaan yang memiliki banyak variasi produk. Produk dengan volume kecil tetapi membutuhkan banyak desain khusus dapat mengonsumsi biaya besar."
      },
      {
        "kind": "h3",
        "text": "5.4 Plant-Level Cost"
      },
      {
        "kind": "p",
        "text": "Plant-level cost adalah biaya yang timbul untuk mempertahankan kapasitas pabrik secara keseluruhan. Biaya ini sulit ditelusuri ke produk tertentu."
      },
      {
        "kind": "p",
        "text": "Contoh plant-level activities:"
      },
      {
        "kind": "table",
        "headers": [
          "Aktivitas",
          "Contoh Biaya",
          "Driver yang Sering Dipakai"
        ],
        "rows": [
          [
            "Heating",
            "Biaya pemanas pabrik",
            "Luas lantai"
          ],
          [
            "Lighting",
            "Biaya penerangan",
            "Luas lantai"
          ],
          [
            "Cooling",
            "Biaya pendingin",
            "Luas lantai"
          ],
          [
            "Providing security",
            "Biaya keamanan",
            "Luas area"
          ],
          [
            "Building maintenance",
            "Biaya pemeliharaan gedung",
            "Luas lantai"
          ],
          [
            "Factory administration",
            "Biaya administrasi umum pabrik",
            "Total biaya langsung atau jam kerja"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Plant-level cost sering tetap bersifat alokasi, bahkan dalam ABC. Karena itu, ABC lebih kuat untuk biaya unit-level, batch-level, dan product-level daripada plant-level cost."
      },
      {
        "kind": "h3",
        "text": "6. Materi Praktik"
      },
      {
        "kind": "h3",
        "text": "6.1 Tahap Penerapan ABC"
      },
      {
        "kind": "p",
        "text": "Penerapan ABC dapat dilakukan melalui tahap berikut:"
      },
      {
        "kind": "ol",
        "items": [
          "Identifikasi produk atau objek biaya akhir.",
          "Identifikasi aktivitas penting yang mengonsumsi sumber daya.",
          "Kelompokkan biaya ke dalam activity cost pool.",
          "Tentukan resource driver untuk menelusuri biaya sumber daya ke aktivitas.",
          "Tentukan activity driver untuk membebankan biaya aktivitas ke produk.",
          "Hitung tarif aktivitas.",
          "Hitung penggunaan aktivitas oleh setiap produk.",
          "Bebankan biaya aktivitas ke produk.",
          "Tambahkan biaya langsung seperti bahan baku langsung dan tenaga kerja langsung.",
          "Hitung total kos produk dan kos per unit.",
          "Bandingkan hasil ABC dengan sistem tradisional.",
          "Analisis apakah ada distorsi biaya produk."
        ]
      },
      {
        "kind": "h3",
        "text": "6.2 Two-Stage Allocation dalam ABC"
      },
      {
        "kind": "p",
        "text": "ABC menggunakan dua tahap pembebanan biaya."
      },
      {
        "kind": "p",
        "text": "Tahap pertama: biaya sumber daya dibebankan ke activity cost pool."
      },
      {
        "kind": "p",
        "text": "Contoh:"
      },
      {
        "kind": "table",
        "headers": [
          "Biaya Sumber Daya",
          "Activity Cost Pool",
          "Dasar Tahap Pertama"
        ],
        "rows": [
          [
            "Gaji teknisi",
            "Setup",
            "Waktu teknisi untuk setup"
          ],
          [
            "Gaji engineer",
            "Design changes",
            "Waktu engineer untuk desain"
          ],
          [
            "Biaya gedung",
            "Other overhead",
            "Luas lantai"
          ],
          [
            "Biaya listrik",
            "Machine operation",
            "Kilowatt-hour"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Tahap kedua: biaya dalam activity cost pool dibebankan ke produk."
      },
      {
        "kind": "p",
        "text": "Contoh:"
      },
      {
        "kind": "table",
        "headers": [
          "Activity Cost Pool",
          "Activity Driver",
          "Produk yang Dibebani"
        ],
        "rows": [
          [
            "Setup",
            "Jumlah setup",
            "Common dan Special"
          ],
          [
            "Design changes",
            "Jumlah perubahan desain",
            "Common dan Special"
          ],
          [
            "Other overhead",
            "Jam tenaga kerja langsung",
            "Common dan Special"
          ]
        ]
      },
      {
        "kind": "h3",
        "text": "6.3 Kapan ABC Lebih Tepat Digunakan"
      },
      {
        "kind": "p",
        "text": "ABC lebih tepat digunakan jika perusahaan memiliki kondisi berikut:"
      },
      {
        "kind": "ol",
        "items": [
          "Overhead pabrik besar.",
          "Produk sangat beragam.",
          "Produk memiliki volume produksi yang berbeda jauh.",
          "Produk tertentu membutuhkan banyak aktivitas khusus.",
          "Banyak biaya tidak dipicu oleh jumlah unit.",
          "Proses produksi kompleks.",
          "Perusahaan sering mengambil keputusan harga, pesanan khusus, dan penghentian produk.",
          "Manajemen merasa sistem biaya tradisional memberi sinyal yang tidak masuk akal."
        ]
      },
      {
        "kind": "p",
        "text": "ABC menjadi sangat berguna ketika produk volume rendah memakai banyak aktivitas batch-level dan product-level. Dalam sistem tradisional, produk volume rendah sering terlalu rendah dibebani. Produk volume tinggi sering terlalu tinggi dibebani."
      },
      {
        "kind": "h3",
        "text": "7. Format Cost atau Laporan Biaya"
      },
      {
        "kind": "h3",
        "text": "7.1 Format Identifikasi Aktivitas"
      },
      {
        "kind": "table",
        "headers": [
          "Aktivitas",
          "Level Aktivitas",
          "Biaya yang Termasuk",
          "Driver yang Dipakai",
          "Objek Biaya"
        ],
        "rows": [
          [
            "Setup mesin",
            "Batch-level",
            "Gaji teknisi setup, bahan uji coba",
            "Jumlah setup",
            "Produk"
          ],
          [
            "Perubahan desain",
            "Product-level",
            "Gaji engineer, biaya prototipe",
            "Jumlah perubahan desain",
            "Produk"
          ],
          [
            "Operasi mesin",
            "Unit-level",
            "Listrik mesin, pemeliharaan mesin",
            "Jam mesin",
            "Produk"
          ],
          [
            "Pemindahan bahan",
            "Batch-level",
            "Forklift, material handler",
            "Jumlah perpindahan",
            "Produk"
          ],
          [
            "Inspeksi",
            "Batch-level atau unit-level",
            "Gaji inspector, alat inspeksi",
            "Jumlah inspeksi",
            "Produk"
          ],
          [
            "Dukungan pabrik umum",
            "Plant-level",
            "Keamanan, depresiasi gedung",
            "Luas lantai atau jam kerja",
            "Produk"
          ]
        ]
      },
      {
        "kind": "h3",
        "text": "7.2 Format Pembentukan Activity Cost Pool"
      },
      {
        "kind": "table",
        "headers": [
          "Departemen atau Sumber Biaya",
          "Total Overhead",
          "Setup",
          "Design Changes",
          "Other Overhead"
        ],
        "rows": [
          [
            "Production",
            "1.400.000",
            "200.000",
            "200.000",
            "1.000.000"
          ],
          [
            "Engineering",
            "900.000",
            "300.000",
            "300.000",
            "300.000"
          ],
          [
            "General Factory",
            "700.000",
            "300.000",
            "100.000",
            "300.000"
          ],
          [
            "Total",
            "3.000.000",
            "800.000",
            "600.000",
            "1.600.000"
          ]
        ]
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "[Perlu pemeriksaan manual]",
        "text": "[Perlu pemeriksaan manual] Angka pada format ini berasal dari scan contoh Dual Company. Angka utama terbaca, tetapi perlu dicek ulang sebelum dipakai sebagai materi final resmi."
      },
      {
        "kind": "h3",
        "text": "7.3 Format Perhitungan Tarif Aktivitas"
      },
      {
        "kind": "table",
        "headers": [
          "Activity Cost Pool",
          "Total Biaya Aktivitas",
          "Total Driver",
          "Tarif Aktivitas"
        ],
        "rows": [
          [
            "Setup",
            "800.000",
            "80 setup",
            "10.000 per setup"
          ],
          [
            "Design changes",
            "600.000",
            "20 perubahan desain",
            "30.000 per perubahan desain"
          ],
          [
            "Other overhead",
            "1.600.000",
            "100.000 jam TKL",
            "16 per jam TKL"
          ]
        ]
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "[Perlu pemeriksaan manual]",
        "text": "[Perlu pemeriksaan manual] Angka mengikuti scan contoh Dual Company."
      },
      {
        "kind": "h3",
        "text": "7.4 Format Pembebanan Biaya Aktivitas ke Produk"
      },
      {
        "kind": "table",
        "headers": [
          "Produk",
          "Setup",
          "Design Changes",
          "Other Overhead",
          "Total Overhead ABC"
        ],
        "rows": [
          [
            "Common",
            "400.000",
            "360.000",
            "1.568.000",
            "2.328.000"
          ],
          [
            "Special",
            "400.000",
            "240.000",
            "32.000",
            "672.000"
          ],
          [
            "Total",
            "800.000",
            "600.000",
            "1.600.000",
            "3.000.000"
          ]
        ]
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "[Perlu pemeriksaan manual]",
        "text": "[Perlu pemeriksaan manual] Angka mengikuti scan contoh Dual Company."
      },
      {
        "kind": "h3",
        "text": "7.5 Format Kos Produk dengan ABC"
      },
      {
        "kind": "table",
        "headers": [
          "Komponen Kos",
          "Common",
          "Special",
          "Total"
        ],
        "rows": [
          [
            "Direct material",
            "980.000",
            "30.000",
            "1.010.000"
          ],
          [
            "Direct labor",
            "980.000",
            "20.000",
            "1.000.000"
          ],
          [
            "Overhead ABC",
            "2.328.000",
            "672.000",
            "3.000.000"
          ],
          [
            "Total cost",
            "4.288.000",
            "722.000",
            "5.010.000"
          ],
          [
            "Units produced",
            "98.000",
            "200",
            "Diisi berdasarkan data soal"
          ],
          [
            "Cost per unit",
            "43,76",
            "3.610",
            "Diisi berdasarkan data soal"
          ]
        ]
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "[Perlu pemeriksaan manual]",
        "text": "[Perlu pemeriksaan manual] Angka mengikuti scan Exhibit 14-4 Carter. Beberapa angka dari scan perlu dicek kembali."
      },
      {
        "kind": "h3",
        "text": "7.6 Format Perbandingan Sistem Tradisional dan ABC"
      },
      {
        "kind": "table",
        "headers": [
          "Produk",
          "Kos per Unit Tradisional",
          "Kos per Unit ABC",
          "Selisih",
          "Indikasi Distorsi"
        ],
        "rows": [
          [
            "Common",
            "50",
            "43,76",
            "6,24 lebih rendah dalam ABC",
            "Sistem tradisional membebani terlalu tinggi"
          ],
          [
            "Special",
            "550",
            "3.610",
            "3.060 lebih tinggi dalam ABC",
            "Sistem tradisional membebani terlalu rendah"
          ]
        ]
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "[Perlu pemeriksaan manual]",
        "text": "[Perlu pemeriksaan manual] Angka mengikuti scan rekonsiliasi contoh Dual Company."
      },
      {
        "kind": "h3",
        "text": "7.7 Format Kasus ABC Berbasis Driver Setup, Desain, dan Luas Area"
      },
      {
        "kind": "p",
        "text": "Format ini dipakai ketika soal ABC menyediakan biaya overhead per aktivitas, driver aktivitas, serta data konsumsi driver per produk. Contohnya adalah kasus Bangtan Company pada soal Pra-UAS."
      },
      {
        "kind": "table",
        "headers": [
          "Tahap",
          "Data yang Dibutuhkan",
          "Output"
        ],
        "rows": [
          [
            "1. Klasifikasi aktivitas",
            "Jenis biaya overhead seperti setup cost, design cost, dan lighting cost",
            "Level aktivitas: batch-level, product-level, atau plant/facility-level"
          ],
          [
            "2. Pemilihan driver",
            "Setup hours, design change, luas area, atau driver lain yang diberikan soal",
            "Activity driver untuk setiap cost pool"
          ],
          [
            "3. Perhitungan tarif",
            "Estimasi biaya aktivitas dan total driver",
            "Tarif aktivitas per driver"
          ],
          [
            "4. Pembebanan overhead",
            "Konsumsi driver setiap produk",
            "FOH berdasarkan ABC per produk"
          ],
          [
            "5. Perhitungan kos produk",
            "Direct material, direct labor, dan FOH ABC",
            "Total kos produk dan kos per unit"
          ]
        ],
        "caption": "Format ini menjaga penyelesaian ABC tetap runtut: klasifikasi aktivitas → tarif aktivitas → pembebanan overhead → kos per unit."
      },
      {
        "kind": "h3",
        "text": "8. Rumus Penting"
      },
      {
        "kind": "h3",
        "text": "8.1 Tarif Aktivitas"
      },
      {
        "kind": "formula",
        "text": "Tarif aktivitas = Total biaya activity cost pool ÷ Total jumlah activity driver"
      },
      {
        "kind": "p",
        "text": "Contoh:"
      },
      {
        "kind": "formula",
        "text": "Tarif setup = Total biaya setup ÷ Jumlah setup"
      },
      {
        "kind": "formula",
        "text": "Tarif perubahan desain = Total biaya design changes ÷ Jumlah perubahan desain"
      },
      {
        "kind": "formula",
        "text": "Tarif overhead lain = Total other overhead ÷ Total jam tenaga kerja langsung"
      },
      {
        "kind": "h3",
        "text": "8.2 Biaya Aktivitas yang Dibebankan ke Produk"
      },
      {
        "kind": "formula",
        "text": "Biaya aktivitas yang dibebankan = Tarif aktivitas × Jumlah driver yang dikonsumsi produk"
      },
      {
        "kind": "p",
        "text": "Contoh:"
      },
      {
        "kind": "formula",
        "text": "Biaya setup Produk Common = Tarif setup × Jumlah setup Produk Common"
      },
      {
        "kind": "h3",
        "text": "8.3 Total Kos Produk Berdasarkan ABC"
      },
      {
        "kind": "formula",
        "text": "Total kos produk ABC = Direct material + Direct labor + Overhead yang dibebankan berdasarkan aktivitas"
      },
      {
        "kind": "h3",
        "text": "8.4 Kos per Unit Berdasarkan ABC"
      },
      {
        "kind": "formula",
        "text": "Kos per unit ABC = Total kos produk ABC ÷ Jumlah unit diproduksi"
      },
      {
        "kind": "formula",
        "text": "Tarif aktivitas kasus Pra-UAS = Estimasi kos aktivitas ÷ Total activity driver"
      },
      {
        "kind": "formula",
        "text": "FOH ABC per produk = (Setup hours × Tarif setup) + (Design change × Tarif desain) + (Luas area × Tarif lighting)"
      },
      {
        "kind": "h3",
        "text": "8.5 Tarif Overhead Tradisional"
      },
      {
        "kind": "formula",
        "text": "Tarif overhead tradisional = Total overhead ÷ Total dasar pembebanan volume"
      },
      {
        "kind": "p",
        "text": "Contoh:"
      },
      {
        "kind": "formula",
        "text": "Tarif overhead tradisional = Total overhead ÷ Total jam tenaga kerja langsung"
      },
      {
        "kind": "h3",
        "text": "8.6 Overhead Tradisional yang Dibebankan ke Produk"
      },
      {
        "kind": "formula",
        "text": "Overhead tradisional = Tarif overhead tradisional × Dasar pembebanan aktual produk"
      },
      {
        "kind": "h3",
        "text": "8.7 Selisih Kos Tradisional dan ABC"
      },
      {
        "kind": "formula",
        "text": "Selisih kos per unit = Kos per unit tradisional - Kos per unit ABC"
      },
      {
        "kind": "p",
        "text": "Interpretasi:"
      },
      {
        "kind": "table",
        "headers": [
          "Kondisi",
          "Arti"
        ],
        "rows": [
          [
            "Kos tradisional > kos ABC",
            "Produk kemungkinan terlalu tinggi dibebani oleh sistem tradisional"
          ],
          [
            "Kos tradisional < kos ABC",
            "Produk kemungkinan terlalu rendah dibebani oleh sistem tradisional"
          ],
          [
            "Kos tradisional = kos ABC",
            "Tidak ada perbedaan kos produk"
          ]
        ]
      },
      {
        "kind": "example",
        "title": "9. Contoh Kasus",
        "blocks": [
          {
            "kind": "example",
            "title": "Contoh Kasus 1 - Perbandingan Sistem Tradisional dan ABC",
            "blocks": [
              {
                "kind": "p",
                "text": "Dual Company memproduksi dua produk, yaitu Common dan Special. Data produksi dan biaya sebagai berikut."
              },
              {
                "kind": "callout",
                "variant": "warning",
                "title": "[Perlu pemeriksaan manual]",
                "text": "[Perlu pemeriksaan manual] Seluruh angka contoh ini berasal dari scan Carter. Angka utama terbaca, tetapi tetap perlu dicek ulang pada sumber asli."
              },
              {
                "kind": "table",
                "headers": [
                  "Keterangan",
                  "Common",
                  "Special",
                  "Total"
                ],
                "rows": [
                  [
                    "Unit diproduksi",
                    "98.000",
                    "200",
                    "Diisi berdasarkan data soal"
                  ],
                  [
                    "Direct material per unit",
                    "10",
                    "150",
                    "Diisi berdasarkan data soal"
                  ],
                  [
                    "Total direct material",
                    "980.000",
                    "30.000",
                    "1.010.000"
                  ],
                  [
                    "Direct labor hours per unit",
                    "1",
                    "10",
                    "Diisi berdasarkan data soal"
                  ],
                  [
                    "Total direct labor hours",
                    "98.000",
                    "2.000",
                    "100.000"
                  ],
                  [
                    "Direct labor cost",
                    "980.000",
                    "20.000",
                    "1.000.000"
                  ],
                  [
                    "Setups",
                    "40",
                    "40",
                    "80"
                  ],
                  [
                    "Design changes",
                    "12",
                    "8",
                    "20"
                  ],
                  [
                    "Total overhead",
                    "Diisi berdasarkan data soal",
                    "Diisi berdasarkan data soal",
                    "3.000.000"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Overhead dibagi menjadi tiga activity cost pool:"
              },
              {
                "kind": "table",
                "headers": [
                  "Activity Cost Pool",
                  "Total Biaya",
                  "Total Driver"
                ],
                "rows": [
                  [
                    "Setup",
                    "800.000",
                    "80 setup"
                  ],
                  [
                    "Design changes",
                    "600.000",
                    "20 perubahan desain"
                  ],
                  [
                    "Other overhead",
                    "1.600.000",
                    "100.000 jam TKL"
                  ]
                ]
              }
            ]
          },
          {
            "kind": "h3",
            "text": "9.1 Penyelesaian dengan Sistem Tradisional"
          },
          {
            "kind": "p",
            "text": "Sistem tradisional memakai satu dasar pembebanan, yaitu direct labor hours."
          },
          {
            "kind": "p",
            "text": "Langkah 1: Hitung tarif overhead tradisional."
          },
          {
            "kind": "formula",
            "text": "Tarif overhead = 3.000.000 ÷ 100.000 jam TKL = 30 per jam TKL"
          },
          {
            "kind": "p",
            "text": "Langkah 2: Hitung overhead yang dibebankan ke setiap produk."
          },
          {
            "kind": "formula",
            "text": "Common = 30 × 98.000 = 2.940.000 Special = 30 × 2.000 = 60.000"
          },
          {
            "kind": "p",
            "text": "Langkah 3: Hitung total kos produk."
          },
          {
            "kind": "table",
            "headers": [
              "Komponen Kos",
              "Common",
              "Special",
              "Total"
            ],
            "rows": [
              [
                "Direct material",
                "980.000",
                "30.000",
                "1.010.000"
              ],
              [
                "Direct labor",
                "980.000",
                "20.000",
                "1.000.000"
              ],
              [
                "Overhead tradisional",
                "2.940.000",
                "60.000",
                "3.000.000"
              ],
              [
                "Total cost",
                "4.900.000",
                "110.000",
                "5.010.000"
              ],
              [
                "Units produced",
                "98.000",
                "200",
                "Diisi berdasarkan data soal"
              ],
              [
                "Cost per unit",
                "50",
                "550",
                "Diisi berdasarkan data soal"
              ]
            ]
          },
          {
            "kind": "p",
            "text": "Hasil sistem tradisional:"
          },
          {
            "kind": "p",
            "text": "Common memiliki kos per unit 50. Special memiliki kos per unit 550."
          },
          {
            "kind": "h3",
            "text": "9.2 Penyelesaian dengan ABC"
          },
          {
            "kind": "p",
            "text": "Langkah 1: Hitung tarif aktivitas."
          },
          {
            "kind": "table",
            "headers": [
              "Activity Cost Pool",
              "Perhitungan",
              "Tarif Aktivitas"
            ],
            "rows": [
              [
                "Setup",
                "800.000 ÷ 80 setup",
                "10.000 per setup"
              ],
              [
                "Design changes",
                "600.000 ÷ 20 perubahan desain",
                "30.000 per perubahan desain"
              ],
              [
                "Other overhead",
                "1.600.000 ÷ 100.000 jam TKL",
                "16 per jam TKL"
              ]
            ]
          },
          {
            "kind": "p",
            "text": "Langkah 2: Bebankan biaya setup."
          },
          {
            "kind": "formula",
            "text": "Common = 10.000 × 40 setup = 400.000 Special = 10.000 × 40 setup = 400.000"
          },
          {
            "kind": "p",
            "text": "Langkah 3: Bebankan biaya design changes."
          },
          {
            "kind": "formula",
            "text": "Common = 30.000 × 12 perubahan desain = 360.000 Special = 30.000 × 8 perubahan desain = 240.000"
          },
          {
            "kind": "p",
            "text": "Langkah 4: Bebankan other overhead."
          },
          {
            "kind": "formula",
            "text": "Common = 16 × 98.000 jam TKL = 1.568.000 Special = 16 × 2.000 jam TKL = 32.000"
          },
          {
            "kind": "p",
            "text": "Langkah 5: Hitung total overhead ABC."
          },
          {
            "kind": "table",
            "headers": [
              "Produk",
              "Setup",
              "Design Changes",
              "Other Overhead",
              "Total Overhead ABC"
            ],
            "rows": [
              [
                "Common",
                "400.000",
                "360.000",
                "1.568.000",
                "2.328.000"
              ],
              [
                "Special",
                "400.000",
                "240.000",
                "32.000",
                "672.000"
              ],
              [
                "Total",
                "800.000",
                "600.000",
                "1.600.000",
                "3.000.000"
              ]
            ]
          },
          {
            "kind": "p",
            "text": "Langkah 6: Hitung total kos produk ABC."
          },
          {
            "kind": "table",
            "headers": [
              "Komponen Kos",
              "Common",
              "Special",
              "Total"
            ],
            "rows": [
              [
                "Direct material",
                "980.000",
                "30.000",
                "1.010.000"
              ],
              [
                "Direct labor",
                "980.000",
                "20.000",
                "1.000.000"
              ],
              [
                "Overhead ABC",
                "2.328.000",
                "672.000",
                "3.000.000"
              ],
              [
                "Total cost",
                "4.288.000",
                "722.000",
                "5.010.000"
              ],
              [
                "Units produced",
                "98.000",
                "200",
                "Diisi berdasarkan data soal"
              ],
              [
                "Cost per unit",
                "43,76",
                "3.610",
                "Diisi berdasarkan data soal"
              ]
            ]
          },
          {
            "kind": "p",
            "text": "Hasil ABC:"
          },
          {
            "kind": "p",
            "text": "Common memiliki kos per unit 43,76. Special memiliki kos per unit 3.610."
          },
          {
            "kind": "h3",
            "text": "9.3 Analisis Perbandingan"
          },
          {
            "kind": "table",
            "headers": [
              "Produk",
              "Tradisional",
              "ABC",
              "Analisis"
            ],
            "rows": [
              [
                "Common",
                "50",
                "43,76",
                "Sistem tradisional terlalu membebani Common"
              ],
              [
                "Special",
                "550",
                "3.610",
                "Sistem tradisional terlalu rendah membebani Special"
              ]
            ]
          },
          {
            "kind": "p",
            "text": "Common adalah produk volume tinggi. Sistem tradisional membebankan overhead terlalu besar ke produk ini karena dasar pembebanan memakai jam tenaga kerja langsung. Common memakai 98% jam tenaga kerja langsung, tetapi tidak memakai 98% aktivitas setup dan desain."
          },
          {
            "kind": "p",
            "text": "Special adalah produk volume rendah. Produk ini hanya memakai sedikit jam tenaga kerja langsung, tetapi memakai aktivitas setup dan desain dalam jumlah besar. Karena itu, sistem tradisional membuat Special terlihat murah. ABC menunjukkan bahwa Special sebenarnya mengonsumsi overhead jauh lebih besar."
          },
          {
            "kind": "p",
            "text": "Kesimpulan: ABC lebih baik untuk kasus ini karena produk memiliki volume dan konsumsi aktivitas yang berbeda. Sistem tradisional menimbulkan distorsi biaya produk."
          }
        ]
      },
      {
        "kind": "example",
        "title": "9.4 Contoh Kasus Pra-UAS - Bangtan Company: Activity Based Costing",
        "blocks": [
          {
            "kind": "p",
            "text": "Bangtan Company memproduksi dua produk, yaitu boneka dan bantal. Perusahaan memakai sistem Activity Based Costing untuk menghitung biaya overhead."
          },
          {
            "kind": "h3",
            "text": "Data Produk"
          },
          {
            "kind": "table",
            "headers": [
              "Keterangan",
              "Boneka",
              "Bantal",
              "Total"
            ],
            "rows": [
              [
                "Unit produksi",
                "750 unit",
                "500 unit",
                "1.250 unit"
              ],
              [
                "Direct material cost",
                "Rp22.500.000 (@Rp30.000)",
                "Rp12.500.000 (@Rp25.000)",
                "Rp35.000.000"
              ],
              [
                "Direct labor cost",
                "Rp25.000.000",
                "Rp20.000.000",
                "Rp45.000.000"
              ],
              [
                "Setup hours",
                "375",
                "250",
                "625"
              ],
              [
                "Design change",
                "150",
                "100",
                "250"
              ],
              [
                "Luas area",
                "2.000 m²",
                "2.000 m²",
                "4.000 m²"
              ]
            ]
          },
          {
            "kind": "h3",
            "text": "Data Overhead dan Driver"
          },
          {
            "kind": "table",
            "headers": [
              "Activity Cost Pool",
              "Estimasi Kos Overhead",
              "Cost Driver",
              "Total Driver"
            ],
            "rows": [
              [
                "Setup cost",
                "Rp8.000.000",
                "Setup hours",
                "625"
              ],
              [
                "Design cost",
                "Rp3.950.000",
                "Design change",
                "250"
              ],
              [
                "Lighting cost",
                "Rp3.300.000",
                "Luas area",
                "4.000 m²"
              ]
            ]
          },
          {
            "kind": "h3",
            "text": "Langkah 1 - Klasifikasi Aktivitas"
          },
          {
            "kind": "table",
            "headers": [
              "Biaya Overhead",
              "Driver",
              "Klasifikasi Aktivitas",
              "Alasan"
            ],
            "rows": [
              [
                "Setup cost",
                "Setup hours",
                "Batch-level",
                "Setup muncul setiap kali batch atau kelompok produksi disiapkan, bukan setiap unit."
              ],
              [
                "Design cost",
                "Design change",
                "Product-level",
                "Perubahan desain mendukung jenis produk tertentu."
              ],
              [
                "Lighting cost",
                "Luas area",
                "Plant/facility-level",
                "Penerangan mendukung fasilitas atau area pabrik secara umum."
              ]
            ]
          },
          {
            "kind": "h3",
            "text": "Langkah 2 - Hitung Tarif Aktivitas"
          },
          {
            "kind": "table",
            "headers": [
              "Activity Cost Pool",
              "Perhitungan",
              "Tarif Aktivitas"
            ],
            "rows": [
              [
                "Setup cost",
                "Rp8.000.000 ÷ 625 setup hours",
                "Rp12.800 per setup hour"
              ],
              [
                "Design cost",
                "Rp3.950.000 ÷ 250 design change",
                "Rp15.800 per design change"
              ],
              [
                "Lighting cost",
                "Rp3.300.000 ÷ 4.000 m²",
                "Rp825 per m²"
              ]
            ]
          },
          {
            "kind": "h3",
            "text": "Langkah 3 - Bebankan FOH Berdasarkan ABC"
          },
          {
            "kind": "table",
            "headers": [
              "Produk",
              "Setup Cost",
              "Design Cost",
              "Lighting Cost",
              "Total FOH ABC"
            ],
            "rows": [
              [
                "Boneka",
                "375 × Rp12.800 = Rp4.800.000",
                "150 × Rp15.800 = Rp2.370.000",
                "2.000 × Rp825 = Rp1.650.000",
                "Rp8.820.000"
              ],
              [
                "Bantal",
                "250 × Rp12.800 = Rp3.200.000",
                "100 × Rp15.800 = Rp1.580.000",
                "2.000 × Rp825 = Rp1.650.000",
                "Rp6.430.000"
              ],
              [
                "Total",
                "Rp8.000.000",
                "Rp3.950.000",
                "Rp3.300.000",
                "Rp15.250.000"
              ]
            ]
          },
          {
            "kind": "h3",
            "text": "Langkah 4 - Hitung Total Kos dan Kos per Unit"
          },
          {
            "kind": "table",
            "headers": [
              "Komponen Kos",
              "Boneka",
              "Bantal"
            ],
            "rows": [
              [
                "Direct material",
                "Rp22.500.000",
                "Rp12.500.000"
              ],
              [
                "Direct labor",
                "Rp25.000.000",
                "Rp20.000.000"
              ],
              [
                "FOH ABC",
                "Rp8.820.000",
                "Rp6.430.000"
              ],
              [
                "Total kos produk",
                "Rp56.320.000",
                "Rp38.930.000"
              ],
              [
                "Unit produksi",
                "750 unit",
                "500 unit"
              ],
              [
                "Kos per unit",
                "Rp56.320.000 ÷ 750 = Rp75.093,33",
                "Rp38.930.000 ÷ 500 = Rp77.860"
              ]
            ]
          },
          {
            "kind": "callout",
            "variant": "info",
            "title": "Kontrol Jawaban",
            "text": "Total FOH yang dibebankan ke Boneka dan Bantal harus sama dengan total estimasi overhead: Rp8.820.000 + Rp6.430.000 = Rp15.250.000. Jika total ini tidak sama dengan Rp8.000.000 + Rp3.950.000 + Rp3.300.000, berarti ada kesalahan tarif atau konsumsi driver."
          }
        ]
      },
      {
        "kind": "h2",
        "text": "9.8 Workspace Audit Batch 12E - ABC Bangtan Company"
      },
      {
        "kind": "p",
        "text": "Workspace ini menutup gap data soal ABC. Mahasiswa melihat seluruh data produk, driver, dan cost pool sebelum mengisi tarif aktivitas, overhead ABC, total kos, dan kos per unit."
      },
      {
        "kind": "table-fill",
        "spec": {
          "title": "Workspace TM 13 - Tarif Aktivitas ABC",
          "instruction": "Data: setup cost Rp8.000.000 dengan 625 setup hours; design cost Rp3.950.000 dengan 250 design changes; lighting cost Rp3.300.000 dengan 4.000 m².",
          "currency": "Rp",
          "headers": ["Activity Cost Pool", "Tarif Aktivitas"],
          "rows": [
            { "id": "tm13-abc-setup-rate-row", "label": "Setup cost", "cells": [{ "id": "tm13-abc-setup-rate", "answer": 12800, "placeholder": "8.000.000 ÷ 625" }] },
            { "id": "tm13-abc-design-rate-row", "label": "Design cost", "cells": [{ "id": "tm13-abc-design-rate", "answer": 15800, "placeholder": "3.950.000 ÷ 250" }] },
            { "id": "tm13-abc-lighting-rate-row", "label": "Lighting cost", "cells": [{ "id": "tm13-abc-lighting-rate", "answer": 825, "placeholder": "3.300.000 ÷ 4.000" }] }
          ]
        }
      },
      {
        "kind": "table-fill",
        "spec": {
          "title": "Workspace TM 13 - FOH ABC dan Kos per Unit Bangtan",
          "instruction": "Data produk: Boneka 750 unit, DM Rp22.500.000, DL Rp25.000.000, driver 375 setup hours, 150 design changes, 2.000 m². Bantal 500 unit, DM Rp12.500.000, DL Rp20.000.000, driver 250 setup hours, 100 design changes, 2.000 m².",
          "currency": "Rp",
          "headers": ["Komponen", "Boneka", "Bantal", "Total"],
          "rows": [
            { "id": "tm13-abc-setup-cost", "label": "Setup cost assigned", "cells": [
              { "id": "tm13-abc-setup-boneka", "answer": 4800000, "placeholder": "375 × 12.800" },
              { "id": "tm13-abc-setup-bantal", "answer": 3200000, "placeholder": "250 × 12.800" },
              { "id": "tm13-abc-setup-total", "answer": 8000000, "placeholder": "Total setup" }
            ] },
            { "id": "tm13-abc-design-cost", "label": "Design cost assigned", "cells": [
              { "id": "tm13-abc-design-boneka", "answer": 2370000, "placeholder": "150 × 15.800" },
              { "id": "tm13-abc-design-bantal", "answer": 1580000, "placeholder": "100 × 15.800" },
              { "id": "tm13-abc-design-total", "answer": 3950000, "placeholder": "Total design" }
            ] },
            { "id": "tm13-abc-lighting-cost", "label": "Lighting cost assigned", "cells": [
              { "id": "tm13-abc-lighting-boneka", "answer": 1650000, "placeholder": "2.000 × 825" },
              { "id": "tm13-abc-lighting-bantal", "answer": 1650000, "placeholder": "2.000 × 825" },
              { "id": "tm13-abc-lighting-total", "answer": 3300000, "placeholder": "Total lighting" }
            ] },
            { "id": "tm13-abc-total-foh", "label": "Total FOH ABC", "cells": [
              { "id": "tm13-abc-foh-boneka", "answer": 8820000, "placeholder": "Jumlah FOH Boneka" },
              { "id": "tm13-abc-foh-bantal", "answer": 6430000, "placeholder": "Jumlah FOH Bantal" },
              { "id": "tm13-abc-foh-total", "answer": 15250000, "placeholder": "Total FOH ABC" }
            ] },
            { "id": "tm13-abc-product-cost", "label": "Total kos produk", "cells": [
              { "id": "tm13-abc-total-cost-boneka", "answer": 56320000, "placeholder": "22.500.000 + 25.000.000 + 8.820.000" },
              { "id": "tm13-abc-total-cost-bantal", "answer": 38930000, "placeholder": "12.500.000 + 20.000.000 + 6.430.000" },
              { "id": "tm13-abc-grand-total-cost", "answer": 95250000, "placeholder": "Total kos dua produk" }
            ] },
            { "id": "tm13-abc-unit-cost", "label": "Kos per unit", "cells": [
              { "id": "tm13-abc-unit-cost-boneka", "answer": 75093.33, "tolerance": 1, "placeholder": "56.320.000 ÷ 750" },
              { "id": "tm13-abc-unit-cost-bantal", "answer": 77860, "placeholder": "38.930.000 ÷ 500" },
              { "id": "tm13-abc-empty-control", "answer": 0, "placeholder": "Tidak diisi" }
            ] }
          ]
        }
      },
      {
        "kind": "solution-reveal",
        "title": "Pembahasan Workspace TM 13",
        "prompt": "Buka setelah menghitung tarif aktivitas dan kos per unit ABC.",
        "blocks": [
          { "kind": "p", "text": "Tarif aktivitas dihitung dari biaya pool dibagi total driver. Setup rate Rp12.800, design rate Rp15.800, dan lighting rate Rp825." },
          { "kind": "p", "text": "FOH ABC Boneka adalah Rp4.800.000 + Rp2.370.000 + Rp1.650.000 = Rp8.820.000. FOH ABC Bantal adalah Rp3.200.000 + Rp1.580.000 + Rp1.650.000 = Rp6.430.000." },
          { "kind": "p", "text": "Kos per unit Boneka adalah Rp56.320.000 ÷ 750 = Rp75.093,33. Kos per unit Bantal adalah Rp38.930.000 ÷ 500 = Rp77.860. Total FOH yang dialokasikan harus sama dengan total cost pool Rp15.250.000." }
        ]
      },
      {
        "kind": "h3",
        "text": "10. Langkah Penyelesaian Umum"
      },
      {
        "kind": "h3",
        "text": "10.1 Jika Soal Meminta Perhitungan ABC"
      },
      {
        "kind": "ol",
        "items": [
          "Baca data produk.",
          "Catat jumlah unit setiap produk.",
          "Catat biaya langsung setiap produk.",
          "Identifikasi activity cost pool.",
          "Catat total biaya setiap activity cost pool.",
          "Catat total activity driver.",
          "Hitung tarif aktivitas.",
          "Catat konsumsi driver oleh setiap produk.",
          "Kalikan tarif aktivitas dengan konsumsi driver.",
          "Jumlahkan overhead ABC setiap produk.",
          "Tambahkan direct material dan direct labor.",
          "Hitung total kos produk.",
          "Hitung kos per unit.",
          "Bandingkan dengan sistem tradisional jika diminta."
        ]
      },
      {
        "kind": "h3",
        "text": "10.2 Jika Soal Meminta Perbandingan ABC dan Tradisional"
      },
      {
        "kind": "ol",
        "items": [
          "Hitung tarif overhead tradisional.",
          "Bebankan overhead tradisional ke produk.",
          "Hitung kos per unit tradisional.",
          "Hitung tarif aktivitas ABC.",
          "Bebankan overhead berdasarkan aktivitas.",
          "Hitung kos per unit ABC.",
          "Bandingkan hasil kedua sistem.",
          "Tentukan produk yang overcosted dan undercosted.",
          "Jelaskan penyebab distorsi biaya."
        ]
      },
      {
        "kind": "h3",
        "text": "10.3 Jika Soal Meminta Analisis Keputusan"
      },
      {
        "kind": "p",
        "text": "Gunakan urutan berikut:"
      },
      {
        "kind": "ol",
        "items": [
          "Lihat produk yang tampak menguntungkan menurut sistem tradisional.",
          "Bandingkan dengan kos ABC.",
          "Periksa apakah produk tersebut banyak memakai aktivitas batch-level atau product-level.",
          "Evaluasi harga jual, volume, dan konsumsi aktivitas.",
          "Hindari keputusan menghentikan produk hanya berdasarkan kos tradisional.",
          "Gunakan informasi ABC untuk keputusan harga, desain produk, proses produksi, dan lini produk."
        ]
      },
      {
        "kind": "h3",
        "text": "10.4 Skedul Audit Activity Based Costing"
      },
      {
        "kind": "p",
        "text": "ABC harus dikerjakan sebagai sistem dua tahap. Tahap pertama menelusuri biaya sumber daya ke activity cost pool, sedangkan tahap kedua membebankan biaya aktivitas ke final cost object. Jika dua tahap ini dicampur, mahasiswa biasanya salah membedakan resource driver dan activity driver."
      },
      {
        "kind": "table",
        "headers": [
          "Tahap ABC",
          "Pertanyaan Audit",
          "Output"
        ],
        "rows": [
          [
            "Identifikasi objek biaya akhir",
            "Produk, pesanan, pelanggan, lini produk, atau saluran distribusi apa yang dihitung kosnya?",
            "Final cost object"
          ],
          [
            "Identifikasi aktivitas",
            "Aktivitas apa yang mengonsumsi sumber daya?",
            "Daftar aktivitas seperti setup, inspection, moving, design changes, atau order processing"
          ],
          [
            "Bentuk activity cost pool",
            "Biaya mana yang masuk ke setiap aktivitas?",
            "Total biaya per activity cost pool"
          ],
          [
            "Pilih resource driver",
            "Dasar apa yang menelusuri biaya sumber daya ke aktivitas?",
            "Proporsi biaya sumber daya ke aktivitas"
          ],
          [
            "Pilih activity driver",
            "Dasar apa yang menunjukkan pemakaian aktivitas oleh produk?",
            "Jumlah driver per produk"
          ],
          [
            "Hitung tarif aktivitas",
            "Berapa biaya per satu driver aktivitas?",
            "Activity rate"
          ],
          [
            "Bebankan biaya aktivitas",
            "Berapa banyak driver dikonsumsi tiap produk?",
            "Overhead ABC per produk"
          ],
          [
            "Analisis distorsi",
            "Apakah sistem tradisional overcost atau undercost produk tertentu?",
            "Kesimpulan keputusan harga dan lini produk"
          ]
        ],
        "caption": "Skedul ini menjaga agar perhitungan ABC tidak berubah menjadi alokasi overhead tradisional dengan nama baru."
      },
      {
        "kind": "h3",
        "text": "10.5 Hubungan ABC dan Activity Based Management"
      },
      {
        "kind": "p",
        "text": "Activity Based Costing menghasilkan informasi biaya aktivitas, sedangkan Activity Based Management memakai informasi tersebut untuk memperbaiki proses. Dengan demikian, ABC menjawab berapa kos produk dan aktivitas, sedangkan ABM menjawab aktivitas mana yang perlu dipertahankan, dikurangi, diperbaiki, atau dihilangkan."
      },
      {
        "kind": "table",
        "headers": [
          "Jenis Aktivitas",
          "Makna Manajerial",
          "Tindakan yang Tepat"
        ],
        "rows": [
          [
            "Value-added activity",
            "Aktivitas yang menambah fungsi, kualitas, atau nilai produk bagi pelanggan",
            "Dipertahankan dan dibuat lebih efisien"
          ],
          [
            "Non-value-added activity",
            "Aktivitas yang mengonsumsi biaya tetapi tidak menambah nilai bagi pelanggan",
            "Dikurangi atau dihilangkan jika memungkinkan"
          ],
          [
            "Batch-level activity yang terlalu sering",
            "Menunjukkan terlalu banyak setup, pemindahan, atau inspeksi per batch",
            "Perbaiki desain batch, jadwal produksi, dan layout pabrik"
          ],
          [
            "Product-level activity yang tinggi",
            "Menunjukkan produk membutuhkan desain, engineering, atau dukungan khusus",
            "Evaluasi harga, kompleksitas desain, dan kelayakan lini produk"
          ],
          [
            "Plant-level cost",
            "Biaya mempertahankan fasilitas pabrik secara umum",
            "Dikelola melalui kapasitas, efisiensi fasilitas, dan pengendalian overhead umum"
          ]
        ]
      },
      {
        "kind": "formula",
        "text": "Biaya aktivitas dibebankan ke produk = Activity rate × Activity driver yang dikonsumsi produk",
        "note": "Jika produk volume rendah memakai banyak setup atau desain, biaya per unitnya dapat naik tajam dalam ABC."
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "Jebakan Konseptual ABC",
        "text": "Produk volume tinggi tidak otomatis mahal, dan produk volume rendah tidak otomatis murah. Produk volume rendah dapat menjadi mahal jika memakai banyak batch-level dan product-level activities. Inilah alasan ABC sering menghasilkan kos produk yang berbeda tajam dari sistem tradisional berbasis jam tenaga kerja langsung atau jam mesin."
      },
      {
        "kind": "h3",
        "text": "11. Kesalahan Umum"
      },
      {
        "kind": "ol",
        "items": [
          "Menganggap semua overhead dipicu oleh jumlah unit.",
          "Menyamakan ABC dengan sistem departementalisasi biasa.",
          "Menggunakan satu driver untuk semua aktivitas.",
          "Tidak membedakan resource driver dan activity driver.",
          "Mencampur unit-level, batch-level, product-level, dan plant-level.",
          "Membebankan biaya setup berdasarkan jumlah unit.",
          "Membebankan biaya desain berdasarkan jam tenaga kerja langsung.",
          "Menganggap produk volume tinggi selalu lebih mahal.",
          "Menganggap produk volume rendah selalu lebih murah.",
          "Tidak menghitung tarif aktivitas sebelum membebankan overhead.",
          "Menghitung total overhead ABC tetapi lupa menambahkan direct material dan direct labor.",
          "Membandingkan total biaya tanpa menghitung kos per unit.",
          "Menganggap plant-level cost selalu dapat ditelusuri akurat ke produk.",
          "Menggunakan ABC untuk laporan eksternal tanpa mempertimbangkan kebutuhan pelaporan keuangan.",
          "Menyalin angka dari scan tanpa pemeriksaan ulang."
        ]
      },
      {
        "kind": "example",
        "title": "12. Latihan Pemahaman",
        "blocks": [
          {
            "kind": "example",
            "title": "Latihan 1 - Konsep ABC",
            "blocks": [
              {
                "kind": "p",
                "text": "Jelaskan perbedaan sistem biaya tradisional dan Activity Based Costing. Fokuskan jawaban pada dasar pembebanan overhead dan penyebab distorsi biaya produk."
              }
            ]
          },
          {
            "kind": "example",
            "title": "Latihan 2 - Klasifikasi Level Aktivitas",
            "blocks": [
              {
                "kind": "p",
                "text": "Klasifikasikan aktivitas berikut ke dalam unit-level, batch-level, product-level, atau plant-level."
              },
              {
                "kind": "table",
                "headers": [
                  "Aktivitas",
                  "Level Aktivitas"
                ],
                "rows": [
                  [
                    "Setup mesin",
                    "Diisi berdasarkan data soal"
                  ],
                  [
                    "Pemotongan setiap unit produk",
                    "Diisi berdasarkan data soal"
                  ],
                  [
                    "Perubahan desain produk",
                    "Diisi berdasarkan data soal"
                  ],
                  [
                    "Pengamanan gedung pabrik",
                    "Diisi berdasarkan data soal"
                  ],
                  [
                    "Inspeksi setiap batch",
                    "Diisi berdasarkan data soal"
                  ],
                  [
                    "Pengembangan prototipe produk baru",
                    "Diisi berdasarkan data soal"
                  ],
                  [
                    "Pengemasan setiap unit",
                    "Diisi berdasarkan data soal"
                  ],
                  [
                    "Pemeliharaan gedung pabrik",
                    "Diisi berdasarkan data soal"
                  ]
                ]
              }
            ]
          },
          {
            "kind": "example",
            "title": "Latihan 3 - Tarif Aktivitas",
            "blocks": [
              {
                "kind": "p",
                "text": "Diketahui data activity cost pool berikut."
              },
              {
                "kind": "table",
                "headers": [
                  "Activity Cost Pool",
                  "Total Biaya",
                  "Total Driver"
                ],
                "rows": [
                  [
                    "Setup",
                    "800.000",
                    "80 setup"
                  ],
                  [
                    "Design changes",
                    "600.000",
                    "20 perubahan desain"
                  ],
                  [
                    "Other overhead",
                    "1.600.000",
                    "100.000 jam TKL"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Diminta:"
              },
              {
                "kind": "ol",
                "items": [
                  "Hitung tarif setup.",
                  "Hitung tarif design changes.",
                  "Hitung tarif other overhead.",
                  "Jelaskan mengapa setup tidak tepat dibebankan berdasarkan jumlah unit."
                ]
              },
              {
                "kind": "callout",
                "variant": "warning",
                "title": "[Perlu pemeriksaan manual]",
                "text": "[Perlu pemeriksaan manual] Data mengikuti contoh scan Carter."
              }
            ]
          },
          {
            "kind": "example",
            "title": "Latihan 4 - Pembebanan Overhead ABC",
            "blocks": [
              {
                "kind": "p",
                "text": "Gunakan data berikut."
              },
              {
                "kind": "table",
                "headers": [
                  "Produk",
                  "Jumlah Setup",
                  "Jumlah Design Changes",
                  "Jam TKL"
                ],
                "rows": [
                  [
                    "Common",
                    "40",
                    "12",
                    "98.000"
                  ],
                  [
                    "Special",
                    "40",
                    "8",
                    "2.000"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Gunakan tarif aktivitas:"
              },
              {
                "kind": "table",
                "headers": [
                  "Activity Cost Pool",
                  "Tarif"
                ],
                "rows": [
                  [
                    "Setup",
                    "10.000 per setup"
                  ],
                  [
                    "Design changes",
                    "30.000 per perubahan desain"
                  ],
                  [
                    "Other overhead",
                    "16 per jam TKL"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Diminta:"
              },
              {
                "kind": "ol",
                "items": [
                  "Hitung overhead ABC untuk Common.",
                  "Hitung overhead ABC untuk Special.",
                  "Hitung total overhead ABC.",
                  "Jelaskan produk mana yang lebih banyak mengonsumsi aktivitas non-volume."
                ]
              },
              {
                "kind": "callout",
                "variant": "warning",
                "title": "[Perlu pemeriksaan manual]",
                "text": "[Perlu pemeriksaan manual] Data mengikuti contoh scan Carter."
              }
            ]
          },
          {
            "kind": "example",
            "title": "Latihan 5 - Perbandingan Tradisional dan ABC",
            "blocks": [
              {
                "kind": "p",
                "text": "Data kos per unit:"
              },
              {
                "kind": "table",
                "headers": [
                  "Produk",
                  "Kos per Unit Tradisional",
                  "Kos per Unit ABC"
                ],
                "rows": [
                  [
                    "Common",
                    "50",
                    "43,76"
                  ],
                  [
                    "Special",
                    "550",
                    "3.610"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Diminta:"
              },
              {
                "kind": "ol",
                "items": [
                  "Produk mana yang overcosted dalam sistem tradisional?",
                  "Produk mana yang undercosted dalam sistem tradisional?",
                  "Mengapa distorsi ini terjadi?",
                  "Apa risiko keputusan jika manajemen hanya memakai sistem tradisional?"
                ]
              },
              {
                "kind": "callout",
                "variant": "warning",
                "title": "[Perlu pemeriksaan manual]",
                "text": "[Perlu pemeriksaan manual] Data mengikuti contoh scan Carter."
              }
            ]
          },
          {
            "kind": "example",
            "title": "Latihan 6 - Activity Based Management",
            "blocks": [
              {
                "kind": "p",
                "text": "Sebuah perusahaan menemukan bahwa biaya setup sangat tinggi. Setelah dianalisis, setup tidak menambah nilai langsung bagi pelanggan."
              },
              {
                "kind": "p",
                "text": "Diminta:"
              },
              {
                "kind": "ol",
                "items": [
                  "Jelaskan mengapa setup dapat disebut non-value-added activity.",
                  "Sebutkan dua cara ABM dapat mengurangi biaya setup.",
                  "Hubungkan jawaban dengan konsep Total Quality Management.",
                  "Jelaskan mengapa mengurangi aktivitas lebih baik daripada hanya menurunkan tarif overhead."
                ]
              }
            ]
          }
        ]
      },
      {
        "kind": "h3",
        "text": "13. Ringkasan"
      },
      {
        "kind": "p",
        "text": "Activity Based Costing adalah sistem penentuan kos yang membebankan overhead berdasarkan aktivitas yang dikonsumsi oleh produk. ABC muncul karena sistem biaya tradisional sering terlalu sederhana ketika perusahaan memiliki overhead besar, proses kompleks, dan produk yang beragam. Sistem tradisional biasanya membebankan overhead dengan dasar volume, seperti jam tenaga kerja langsung atau jam mesin. Cara ini dapat menimbulkan distorsi jika banyak biaya sebenarnya dipicu oleh aktivitas non-volume."
      },
      {
        "kind": "p",
        "text": "ABC memakai dua tahap pembebanan. Tahap pertama membebankan biaya sumber daya ke activity cost pool dengan resource driver. Tahap kedua membebankan biaya aktivitas ke produk dengan activity driver. Dengan pendekatan ini, biaya setup dibebankan berdasarkan jumlah setup, biaya desain dibebankan berdasarkan perubahan desain, dan biaya aktivitas lain dibebankan sesuai konsumsi aktivitas."
      },
      {
        "kind": "p",
        "text": "Dalam ABC, biaya dan driver dibagi menjadi beberapa level. Unit-level cost muncul setiap kali unit dibuat. Batch-level cost muncul setiap kali batch diproses. Product-level cost muncul untuk mendukung jenis produk tertentu. Plant-level cost muncul untuk mempertahankan fasilitas pabrik secara umum. Pembagian ini penting karena tidak semua biaya meningkat sejalan dengan jumlah unit."
      },
      {
        "kind": "p",
        "text": "ABC berbeda dari sistem tradisional karena ABC tidak menganggap unit produk sebagai satu-satunya penyebab biaya. Produk volume rendah dapat terlihat murah dalam sistem tradisional, padahal produk tersebut mungkin membutuhkan banyak setup, desain, inspeksi, dan pemrosesan khusus. Sebaliknya, produk volume tinggi dapat terlihat terlalu mahal karena sistem tradisional membebankan overhead berdasarkan ukuran volume."
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "[Perlu pemeriksaan manual]",
        "text": "Contoh Dual Company menunjukkan bahwa produk Common memiliki kos per unit 50 menurut sistem tradisional, tetapi 43,76 menurut ABC. Produk Special memiliki kos per unit 550 menurut sistem tradisional, tetapi 3.610 menurut ABC. Perbedaan ini menunjukkan distorsi besar. Produk volume rendah, yaitu Special, ternyata mengonsumsi aktivitas batch-level dan product-level lebih besar daripada yang terlihat dalam sistem tradisional. [Perlu pemeriksaan manual]"
      },
      {
        "kind": "p",
        "text": "ABC juga memiliki manfaat strategis. Informasi ABC dapat membantu manajemen menetapkan harga, mengevaluasi lini produk, menghindari penghentian produk yang sebenarnya masih layak, dan mengidentifikasi produk yang tampak menguntungkan tetapi sebenarnya mengonsumsi biaya besar. ABC memberi dasar yang lebih kuat untuk keputusan jangka panjang."
      },
      {
        "kind": "p",
        "text": "Activity Based Management menggunakan informasi ABC untuk memperbaiki proses. ABM dapat dilakukan melalui activity reduction, activity elimination, activity selection, dan activity sharing. ABM juga berkaitan dengan Total Quality Management karena keduanya menaruh perhatian pada aktivitas yang tidak memberi nilai tambah. ABC membantu menunjukkan aktivitas mana yang mahal, sehingga manajemen dapat menentukan prioritas perbaikan."
      },
      {
        "kind": "p",
        "text": "ABC tetap memiliki keterbatasan. ABC masih merupakan sistem alokasi. Plant-level cost sering tetap sulit ditelusuri secara akurat ke produk. ABC juga membutuhkan data yang lebih rinci, survei aktivitas, dan perubahan cara berpikir manajer. Karena itu, ABC tidak selalu harus menggantikan sistem tradisional. Perusahaan dapat memakai ABC untuk studi khusus, keputusan harga, analisis produk, dan perbaikan proses."
      },
      {
        "kind": "p",
        "text": "Inti TM 13 adalah memahami bahwa kos produk tidak hanya ditentukan oleh bahan, tenaga kerja, dan volume produksi. Kos juga ditentukan oleh aktivitas yang dikonsumsi produk. Semakin kompleks aktivitas yang dibutuhkan suatu produk, semakin besar kos yang seharusnya dibebankan kepada produk tersebut."
      },

      {
        "kind": "h2",
        "text": "Batch 11 - ABC Product Cost Distortion Lab"
      },
      {
        "kind": "callout",
        "variant": "key",
        "title": "Source Alignment Batch 11",
        "text": "Batch 11 menguatkan TM 13 sesuai RPS AKBI: Perhitungan Biaya Berdasarkan Aktivitas (Activity Based Costing - ABC). Fokusnya bukan menambah topik baru, melainkan membuat alur ABC lebih mudah diikuti: traditional costing → activity cost pool → activity driver → activity rate → FOH ABC → perbandingan kos produk."
      },
      {
        "kind": "h3",
        "text": "Alur Belajar Cepat Batch 11"
      },
      {
        "kind": "ol",
        "items": [
          "Mulai dari tarif tradisional agar terlihat sumber distorsi biaya.",
          "Pisahkan overhead ke activity cost pool yang jelas.",
          "Pilih activity driver yang paling menjelaskan konsumsi aktivitas.",
          "Hitung activity rate untuk setiap pool.",
          "Bebankan overhead ke produk berdasarkan driver yang dipakai masing-masing produk.",
          "Tambahkan direct material dan direct labor untuk mendapatkan total kos produk.",
          "Bandingkan kos tradisional dan ABC untuk menentukan produk yang overcosted atau undercosted."
        ]
      },
      {
        "kind": "h3",
        "text": "Formula Sheet Batch 11"
      },
      {
        "kind": "table",
        "headers": ["Konsep", "Rumus", "Catatan Ujian"],
        "rows": [
          ["Plantwide rate", "Total FOH ÷ Total dasar volume", "Biasanya memakai DLH, MH, atau unit"],
          ["Traditional applied FOH", "Plantwide rate × dasar volume produk", "Rawan distorsi jika aktivitas non-volume besar"],
          ["Activity rate", "Biaya activity cost pool ÷ total activity driver", "Hitung per pool, bukan satu tarif gabungan"],
          ["ABC applied FOH", "Σ(activity rate × driver produk)", "Jumlahkan seluruh pool yang dikonsumsi produk"],
          ["Total product cost", "DM + DL + FOH ABC", "Gunakan FOH ABC jika diminta ABC"],
          ["Unit cost", "Total product cost ÷ unit produksi", "Jangan membagi FOH saja kecuali soal hanya meminta FOH per unit"],
          ["Overcosted", "Traditional cost > ABC cost", "Produk menerima beban terlalu besar dalam sistem tradisional"],
          ["Undercosted", "Traditional cost < ABC cost", "Produk menerima beban terlalu kecil dalam sistem tradisional"]
        ]
      },
      {
        "kind": "example",
        "title": "Mini Lab Batch 11 - PT Aksara: Traditional Costing vs ABC",
        "blocks": [
          { "kind": "p", "text": "PT Aksara memproduksi dua produk: Reguler dan Custom. Selama ini perusahaan memakai satu tarif overhead berdasarkan direct labor hours. Manajemen mulai curiga karena produk Custom sering terlihat murah, padahal membutuhkan banyak setup, inspeksi, dan perubahan desain." },
          { "kind": "table", "headers": ["Data Produk", "Reguler", "Custom"], "rows": [
            ["Unit produksi", "10.000 unit", "1.000 unit"],
            ["Direct material", "Rp120.000.000", "Rp35.000.000"],
            ["Direct labor", "Rp80.000.000", "Rp25.000.000"],
            ["Direct labor hours", "8.000 jam", "2.000 jam"],
            ["Machine hours", "5.000 jam", "3.000 jam"],
            ["Jumlah setup", "20 setup", "40 setup"],
            ["Jumlah inspeksi", "30 inspeksi", "70 inspeksi"],
            ["Design changes", "5 perubahan", "15 perubahan"]
          ] },
          { "kind": "table", "headers": ["Activity Cost Pool", "Total Biaya", "Total Driver", "Activity Rate"], "rows": [
            ["Machine operation", "Rp96.000.000", "8.000 machine hours", "Rp12.000 per machine hour"],
            ["Setup", "Rp90.000.000", "60 setup", "Rp1.500.000 per setup"],
            ["Inspection", "Rp60.000.000", "100 inspeksi", "Rp600.000 per inspeksi"],
            ["Product design", "Rp80.000.000", "20 design changes", "Rp4.000.000 per design change"],
            ["Total", "Rp326.000.000", "-", "-"]
          ] },
          { "kind": "p", "text": "Tarif tradisional = Rp326.000.000 ÷ 10.000 DLH = Rp32.600 per DLH. Dengan sistem tradisional, overhead Reguler = Rp260.800.000 dan overhead Custom = Rp65.200.000." },
          { "kind": "table", "headers": ["Produk", "FOH Tradisional", "FOH ABC", "Kos per Unit Tradisional", "Kos per Unit ABC", "Kesimpulan"], "rows": [
            ["Reguler", "Rp260.800.000", "Rp128.000.000", "Rp46.080", "Rp32.800", "Overcosted dalam sistem tradisional"],
            ["Custom", "Rp65.200.000", "Rp198.000.000", "Rp125.200", "Rp258.000", "Undercosted dalam sistem tradisional"]
          ] },
          { "kind": "callout", "variant": "tip", "title": "Inti Analisis", "text": "Produk Reguler memakai banyak DLH karena volumenya besar, tetapi tidak memakai setup, inspeksi, dan desain sebanyak Custom. Produk Custom justru volume kecil tetapi aktivitasnya kompleks. Inilah kondisi klasik ketika ABC lebih informatif daripada satu plantwide rate." }
        ]
      },
      {
        "kind": "table-fill",
        "spec": {
          "title": "Workspace Batch 11 - Hitung Activity Rate PT Aksara",
          "instruction": "Gunakan data activity cost pool PT Aksara. Isi activity rate untuk setiap pool.",
          "currency": "Rp",
          "headers": ["Activity Cost Pool", "Activity Rate"],
          "rows": [
            { "id": "b11-rate-machine-row", "label": "Machine operation", "cells": [{ "id": "b11-rate-machine", "answer": 12000, "placeholder": "96.000.000 ÷ 8.000" }] },
            { "id": "b11-rate-setup-row", "label": "Setup", "cells": [{ "id": "b11-rate-setup", "answer": 1500000, "placeholder": "90.000.000 ÷ 60" }] },
            { "id": "b11-rate-inspection-row", "label": "Inspection", "cells": [{ "id": "b11-rate-inspection", "answer": 600000, "placeholder": "60.000.000 ÷ 100" }] },
            { "id": "b11-rate-design-row", "label": "Product design", "cells": [{ "id": "b11-rate-design", "answer": 4000000, "placeholder": "80.000.000 ÷ 20" }] }
          ]
        }
      },
      {
        "kind": "table-fill",
        "spec": {
          "title": "Workspace Batch 11 - FOH ABC dan Unit Cost PT Aksara",
          "instruction": "Isi pembebanan FOH ABC, total kos produk, dan kos per unit. Data direct cost: Reguler DM Rp120.000.000, DL Rp80.000.000; Custom DM Rp35.000.000, DL Rp25.000.000.",
          "currency": "Rp",
          "headers": ["Komponen", "Reguler", "Custom", "Total"],
          "rows": [
            { "id": "b11-machine-cost-row", "label": "Machine operation assigned", "cells": [
              { "id": "b11-machine-reg", "answer": 60000000, "placeholder": "5.000 × 12.000" },
              { "id": "b11-machine-custom", "answer": 36000000, "placeholder": "3.000 × 12.000" },
              { "id": "b11-machine-total", "answer": 96000000, "placeholder": "Total machine" }
            ] },
            { "id": "b11-setup-cost-row", "label": "Setup assigned", "cells": [
              { "id": "b11-setup-reg", "answer": 30000000, "placeholder": "20 × 1.500.000" },
              { "id": "b11-setup-custom", "answer": 60000000, "placeholder": "40 × 1.500.000" },
              { "id": "b11-setup-total", "answer": 90000000, "placeholder": "Total setup" }
            ] },
            { "id": "b11-inspection-cost-row", "label": "Inspection assigned", "cells": [
              { "id": "b11-inspection-reg", "answer": 18000000, "placeholder": "30 × 600.000" },
              { "id": "b11-inspection-custom", "answer": 42000000, "placeholder": "70 × 600.000" },
              { "id": "b11-inspection-total", "answer": 60000000, "placeholder": "Total inspection" }
            ] },
            { "id": "b11-design-cost-row", "label": "Product design assigned", "cells": [
              { "id": "b11-design-reg", "answer": 20000000, "placeholder": "5 × 4.000.000" },
              { "id": "b11-design-custom", "answer": 60000000, "placeholder": "15 × 4.000.000" },
              { "id": "b11-design-total", "answer": 80000000, "placeholder": "Total design" }
            ] },
            { "id": "b11-abc-foh-row", "label": "Total FOH ABC", "cells": [
              { "id": "b11-foh-reg", "answer": 128000000, "placeholder": "Jumlah FOH Reguler" },
              { "id": "b11-foh-custom", "answer": 198000000, "placeholder": "Jumlah FOH Custom" },
              { "id": "b11-foh-total", "answer": 326000000, "placeholder": "Total FOH ABC" }
            ] },
            { "id": "b11-total-cost-row", "label": "Total kos produk ABC", "cells": [
              { "id": "b11-total-cost-reg", "answer": 328000000, "placeholder": "120.000.000 + 80.000.000 + 128.000.000" },
              { "id": "b11-total-cost-custom", "answer": 258000000, "placeholder": "35.000.000 + 25.000.000 + 198.000.000" },
              { "id": "b11-grand-total-cost", "answer": 586000000, "placeholder": "Total dua produk" }
            ] },
            { "id": "b11-unit-cost-row", "label": "Kos per unit ABC", "cells": [
              { "id": "b11-unit-cost-reg", "answer": 32800, "placeholder": "328.000.000 ÷ 10.000" },
              { "id": "b11-unit-cost-custom", "answer": 258000, "placeholder": "258.000.000 ÷ 1.000" },
              { "id": "b11-unit-empty", "answer": 0, "placeholder": "Tidak diisi" }
            ] }
          ]
        }
      },
      {
        "kind": "interactive-match",
        "spec": {
          "title": "Cocokkan Konsep ABC dengan Indikatornya",
          "instruction": "Pilih konsep yang paling tepat untuk tiap pernyataan.",
          "choices": ["Unit-level", "Batch-level", "Product-level", "Facility-level", "Activity driver", "Product cost distortion"],
          "pairs": [
            { "id": "b11-match-unit", "prompt": "Biaya berubah mengikuti setiap unit, misalnya machine operation jika driver-nya machine hours per unit.", "answer": "Unit-level" },
            { "id": "b11-match-batch", "prompt": "Biaya setup muncul setiap batch, bukan setiap unit.", "answer": "Batch-level" },
            { "id": "b11-match-product", "prompt": "Biaya perubahan desain mendukung jenis produk tertentu.", "answer": "Product-level" },
            { "id": "b11-match-facility", "prompt": "Biaya keamanan atau penerangan gedung mendukung fasilitas secara umum.", "answer": "Facility-level" },
            { "id": "b11-match-driver", "prompt": "Ukuran konsumsi aktivitas yang dipakai untuk membebankan biaya ke produk.", "answer": "Activity driver" },
            { "id": "b11-match-distortion", "prompt": "Kondisi ketika sistem tradisional membuat produk tertentu terlalu mahal atau terlalu murah.", "answer": "Product cost distortion" }
          ]
        }
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "Trap UAS Batch 11",
        "text": "Jangan memakai satu tarif tradisional ketika soal secara eksplisit meminta ABC. Jangan mencampur total driver seluruh pool dengan driver satu produk. Jangan menyebut produk volume rendah selalu mahal; yang menentukan adalah konsumsi aktivitasnya. Jangan membagi total FOH ABC dengan total unit seluruh produk jika yang diminta kos per unit masing-masing produk."
      },
      {
        "kind": "h3",
        "text": "14. Checklist Kelengkapan"
      },
      {
        "kind": "table",
        "headers": [
          "Komponen",
          "Status"
        ],
        "rows": [
          [
            "Tujuan pembelajaran",
            "Sudah masuk"
          ],
          [
            "Gambaran umum",
            "Sudah masuk"
          ],
          [
            "Peta submateri",
            "Sudah masuk"
          ],
          [
            "Materi teori",
            "Sudah masuk"
          ],
          [
            "Materi praktik",
            "Sudah masuk"
          ],
          [
            "Format cost atau laporan biaya",
            "Sudah masuk"
          ],
          [
            "Rumus penting",
            "Sudah masuk"
          ],
          [
            "Contoh kasus",
            "Sudah masuk"
          ],
          [
            "Contoh kasus Pra-UAS Bangtan Company ABC",
            "Sudah masuk"
          ],
          [
            "Langkah penyelesaian",
            "Sudah masuk"
          ],
          [
            "Kesalahan umum",
            "Sudah masuk"
          ],
          [
            "Latihan pemahaman",
            "Sudah masuk"
          ],
          [
            "Ringkasan panjang",
            "Sudah masuk"
          ],
          [
            "Checklist kelengkapan",
            "Sudah masuk"
          ],
          [
            "Label [Perlu pemeriksaan manual] untuk angka dari scan",
            "Sudah masuk"
          ],
          [
            "Fokus hanya TM 13",
            "Sudah sesuai"
          ],
          [
            "TM 14 dan Simulasi UAS",
            "Tidak ditulis"
          ]
        ]
      }
    ]
  },
  "14": {
    "id": "akbi-tm-14",
    "tm": 14,
    "title": "Review Materi UAS Akuntansi Biaya",
    "ref": "AKBI Master Content Bagian 2 · TM 14",
    "source": "AKBI_Master_Content_Bagian_2_TM12-UAS.md",
    "phase": "pra_uas",
    "manualCheckCount": 10,
    "intro": "TM 14 bukan materi teori baru. TM 14 adalah sesi penguatan untuk menghadapi UAS. Fokus utamanya adalah mengulang konsep, rumus, format perhitungan, dan pola penyelesaian soal dari materi setelah UTS. Materi UAS memiliki karakter yang lebih terhubung daripada materi awal semester. TM 8 membahas produk bersama dan produk sampingan. TM 9 membahas bahan baku. TM 10 membahas tenaga kerja. TM 11 membahas overhead pabrik. TM 12 memperdalam overhead melalui departementalisasi. TM 13 memperluas pembebanan overhead melalui Activity Based Costing.",
    "objectives": [
      "Mengulang kembali konsep utama materi UAS dari TM 8 sampai TM 13.",
      "Menghubungkan teori biaya produk dengan praktik perhitungan kos.",
      "Mengidentifikasi pola soal UAS yang berkaitan dengan produk bersama, bahan baku, tenaga kerja, overhead pabrik, departementalisasi overhead, dan ABC.",
      "Menentukan rumus yang tepat untuk setiap jenis soal.",
      "Menyusun format perhitungan kos secara rapi.",
      "Mengerjakan soal bertahap mulai dari identifikasi data, perhitungan, jurnal, sampai analisis.",
      "Menghindari kesalahan umum dalam soal UAS Akuntansi Biaya.",
      "Menggunakan checklist untuk mengecek kelengkapan jawaban."
    ],
    "blocks": [
      {
        "kind": "h2",
        "text": "TM 14"
      },
      {
        "kind": "h2",
        "text": "TM 14 - Review Materi UAS Akuntansi Biaya"
      },
      {
        "kind": "h3",
        "text": "1. Tujuan Pembelajaran"
      },
      {
        "kind": "p",
        "text": "Setelah mempelajari TM 14, mahasiswa diharapkan mampu:"
      },
      {
        "kind": "ol",
        "items": [
          "Mengulang kembali konsep utama materi UAS dari TM 8 sampai TM 13.",
          "Menghubungkan teori biaya produk dengan praktik perhitungan kos.",
          "Mengidentifikasi pola soal UAS yang berkaitan dengan produk bersama, bahan baku, tenaga kerja, overhead pabrik, departementalisasi overhead, dan ABC.",
          "Menentukan rumus yang tepat untuk setiap jenis soal.",
          "Menyusun format perhitungan kos secara rapi.",
          "Mengerjakan soal bertahap mulai dari identifikasi data, perhitungan, jurnal, sampai analisis.",
          "Menghindari kesalahan umum dalam soal UAS Akuntansi Biaya.",
          "Menggunakan checklist untuk mengecek kelengkapan jawaban."
        ]
      },
      {
        "kind": "p",
        "text": "Dalam silabi AKBI, TM 14 secara khusus berisi **Review Materi UAS** setelah TM 8 sampai TM 13. Cakupan UAS sebelumnya memuat produk gabungan dan produk sampingan, bahan baku langsung, tenaga kerja langsung, overhead pabrik, departementalisasi overhead, dan Activity Based Costing."
      },
      {
        "kind": "h3",
        "text": "2. Gambaran Umum"
      },
      {
        "kind": "p",
        "text": "TM 14 bukan materi teori baru. TM 14 adalah sesi penguatan untuk menghadapi UAS. Fokus utamanya adalah mengulang konsep, rumus, format perhitungan, dan pola penyelesaian soal dari materi setelah UTS."
      },
      {
        "kind": "p",
        "text": "Materi UAS memiliki karakter yang lebih terhubung daripada materi awal semester. TM 8 membahas produk bersama dan produk sampingan. TM 9 membahas bahan baku. TM 10 membahas tenaga kerja. TM 11 membahas overhead pabrik. TM 12 memperdalam overhead melalui departementalisasi. TM 13 memperluas pembebanan overhead melalui Activity Based Costing."
      },
      {
        "kind": "p",
        "text": "Benang merah seluruh materi UAS adalah **penentuan kos produksi yang lebih akurat**. Mahasiswa tidak hanya diminta menghafal definisi, tetapi juga mampu memilih metode perhitungan yang sesuai. Kesalahan utama biasanya terjadi karena mahasiswa langsung menghitung tanpa membaca karakter soal."
      },
      {
        "kind": "p",
        "text": "Simulasi ini disusun untuk membantu mahasiswa memahami urutan berpikir. Setiap soal UAS perlu dibaca dengan pola yang sama: apa objek biayanya, biaya apa saja yang tersedia, metode apa yang diminta, dasar alokasi apa yang dipakai, dan format laporan apa yang harus dibuat."
      },
      {
        "kind": "h3",
        "text": "3. Peta Submateri Simulasi UAS"
      },
      {
        "kind": "ol",
        "items": [
          "Review TM 8: Produk bersama dan produk sampingan",
          "Review TM 9: Perencanaan, pengendalian, dan penentuan kos bahan baku langsung",
          "Review TM 10: Perencanaan dan pengendalian tenaga kerja langsung",
          "Review TM 11: Overhead pabrik direncanakan, aktual, dan dibebankan",
          "Review TM 12: Departementalisasi biaya overhead pabrik",
          "Review TM 13: Activity Based Costing",
          "Format laporan dan tabel perhitungan",
          "Rumus penting UAS",
          "Pola soal UAS",
          "Contoh kasus terpadu",
          "Contoh ABC Pra-UAS Bangtan Company",
          "Langkah penyelesaian",
          "Kesalahan umum",
          "Latihan pemahaman",
          "Ringkasan dan checklist"
        ]
      },
      {
        "kind": "h3",
        "text": "4. Materi Teori Simulasi UAS"
      },
      {
        "kind": "h3",
        "text": "4.1 Review TM 8 - Produk Bersama dan Produk Sampingan"
      },
      {
        "kind": "p",
        "text": "Produk bersama muncul ketika satu proses produksi menghasilkan lebih dari satu produk utama. Produk-produk tersebut berasal dari bahan baku dan proses yang sama sampai titik pisah atau split-off point. Setelah titik pisah, masing-masing produk dapat dijual langsung atau diproses lebih lanjut."
      },
      {
        "kind": "p",
        "text": "Dalam modul TM 8, kos produk bersama dijelaskan sebagai kos yang dikeluarkan sejak bahan baku mulai diolah sampai produk dapat dipisahkan identitasnya. Kos ini mencakup bahan baku, tenaga kerja, dan overhead pabrik."
      },
      {
        "kind": "p",
        "text": "Konsep penting TM 8:"
      },
      {
        "kind": "table",
        "headers": [
          "Konsep",
          "Inti Pemahaman"
        ],
        "rows": [
          [
            "Joint cost",
            "Kos yang terjadi sebelum titik pisah"
          ],
          [
            "Split-off point",
            "Titik saat produk dapat diidentifikasi secara terpisah"
          ],
          [
            "Joint product",
            "Produk utama yang dihasilkan dari proses bersama"
          ],
          [
            "By-product",
            "Produk sampingan dengan nilai jual relatif rendah"
          ],
          [
            "Common cost",
            "Biaya bersama yang digunakan oleh lebih dari satu objek biaya"
          ],
          [
            "Alokasi kos bersama",
            "Pembagian kos bersama ke produk yang dihasilkan"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Metode alokasi kos bersama:"
      },
      {
        "kind": "table",
        "headers": [
          "Metode",
          "Dasar Alokasi"
        ],
        "rows": [
          [
            "Nilai jual relatif",
            "Nilai jual setiap produk pada titik pisah"
          ],
          [
            "Harga jual hipotetis",
            "Nilai jual akhir dikurangi biaya proses lanjutan"
          ],
          [
            "Satuan fisik",
            "Jumlah unit, berat, volume, atau ukuran fisik"
          ],
          [
            "Rata-rata kos per satuan",
            "Total kos bersama dibagi total unit"
          ],
          [
            "Rata-rata tertimbang",
            "Unit dikalikan bobot masing-masing produk"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Produk sampingan biasanya tidak dibebani kos bersama secara rinci jika nilai jualnya relatif kecil. Perlakuan akuntansinya dapat dilakukan dengan mengakui hasil penjualan produk sampingan sebagai pendapatan lain-lain, tambahan pendapatan penjualan, pengurang HPP, atau pengurang total kos produksi."
      },
      {
        "kind": "h3",
        "text": "4.2 Review TM 9 - Bahan Baku Langsung"
      },
      {
        "kind": "p",
        "text": "TM 9 membahas proses pengadaan, pencatatan, penilaian, dan pengendalian bahan baku. Proses pengadaan bahan dimulai dari desain produk dan rencana produksi. Bagian rekayasa membuat prototype, menentukan routing produk, menyusun urutan operasi, dan membuat permintaan bahan baku. Informasi ini dipakai bagian produksi untuk membuat anggaran produksi. Setelah itu, bagian pembelian memesan bahan ke pemasok, bagian penerimaan memeriksa kuantitas dan kualitas, lalu bahan dikirim ke produksi sesuai permintaan."
      },
      {
        "kind": "p",
        "text": "Konsep penting TM 9:"
      },
      {
        "kind": "table",
        "headers": [
          "Konsep",
          "Inti Pemahaman"
        ],
        "rows": [
          [
            "Purchase requisition",
            "Permintaan pembelian bahan"
          ],
          [
            "Purchase order",
            "Dokumen pemesanan bahan ke pemasok"
          ],
          [
            "Receiving report",
            "Laporan penerimaan bahan"
          ],
          [
            "Material requisition",
            "Permintaan pemakaian bahan oleh produksi"
          ],
          [
            "Material record card",
            "Kartu catatan bahan"
          ],
          [
            "Kos bahan baku",
            "Semua kos sampai bahan siap dipakai dalam produksi"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Komponen kos bahan baku:"
      },
      {
        "kind": "table",
        "headers": [
          "Komponen",
          "Pengaruh terhadap Kos Bahan"
        ],
        "rows": [
          [
            "Harga bahan",
            "Menambah kos bahan"
          ],
          [
            "Diskon harga",
            "Mengurangi kos bahan"
          ],
          [
            "Retur pembelian",
            "Mengurangi kos bahan"
          ],
          [
            "Freight-in",
            "Menambah kos bahan"
          ],
          [
            "Kos akuisisi",
            "Dapat dialokasikan ke bahan atau diperlakukan sebagai overhead"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Metode pencatatan bahan baku:"
      },
      {
        "kind": "table",
        "headers": [
          "Metode",
          "Ciri"
        ],
        "rows": [
          [
            "Fisik",
            "Pencatatan dilakukan pada akhir periode berdasarkan perhitungan fisik"
          ],
          [
            "Perpetual",
            "Setiap mutasi bahan dicatat saat transaksi terjadi"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Metode penilaian bahan baku:"
      },
      {
        "kind": "table",
        "headers": [
          "Metode",
          "Inti"
        ],
        "rows": [
          [
            "Identifikasi khusus",
            "Kos mengikuti unit bahan tertentu"
          ],
          [
            "FIFO",
            "Bahan yang pertama masuk dianggap pertama dipakai"
          ],
          [
            "LIFO",
            "Bahan yang terakhir masuk dianggap pertama dipakai"
          ],
          [
            "Rata-rata bergerak",
            "Harga rata-rata diperbarui setiap pembelian"
          ],
          [
            "Rata-rata tertimbang",
            "Harga rata-rata dihitung dari total kos dibagi total unit tersedia"
          ]
        ]
      },
      {
        "kind": "h3",
        "text": "4.3 Review TM 10 - Tenaga Kerja Langsung"
      },
      {
        "kind": "p",
        "text": "TM 10 membahas perencanaan dan pengendalian kos tenaga kerja. Tenaga kerja dalam perusahaan dapat diklasifikasikan menjadi tenaga kerja produksi dan nonproduksi. Tenaga kerja produksi dibagi menjadi tenaga kerja langsung dan tenaga kerja tidak langsung."
      },
      {
        "kind": "p",
        "text": "Dalam materi labor, biaya tenaga kerja dipahami sebagai kontribusi manusia dalam produksi. Biaya tenaga kerja langsung masuk ke Barang Dalam Proses, sedangkan tenaga kerja tidak langsung masuk ke overhead pabrik."
      },
      {
        "kind": "p",
        "text": "Klasifikasi tenaga kerja:"
      },
      {
        "kind": "table",
        "headers": [
          "Jenis Tenaga Kerja",
          "Perlakuan Biaya"
        ],
        "rows": [
          [
            "Tenaga kerja langsung",
            "Barang Dalam Proses"
          ],
          [
            "Tenaga kerja tidak langsung",
            "Overhead pabrik"
          ],
          [
            "Tenaga kerja pemasaran",
            "Beban pemasaran"
          ],
          [
            "Tenaga kerja administrasi",
            "Beban administrasi dan umum"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Komponen biaya tenaga kerja:"
      },
      {
        "kind": "table",
        "headers": [
          "Komponen",
          "Penjelasan"
        ],
        "rows": [
          [
            "Basic pay",
            "Upah pokok berdasarkan jam atau unit"
          ],
          [
            "Overtime premium",
            "Tambahan upah karena lembur"
          ],
          [
            "Shift premium",
            "Tambahan upah karena shift tertentu"
          ],
          [
            "Bonus",
            "Tambahan kompensasi berdasarkan laba atau kinerja"
          ],
          [
            "Vacation pay",
            "Hak cuti berbayar"
          ],
          [
            "Holiday pay",
            "Pembayaran hari libur"
          ],
          [
            "Fringe benefit",
            "Tunjangan karyawan seperti asuransi dan pensiun"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Masalah akuntansi tenaga kerja biasanya terbagi menjadi tiga tahap:"
      },
      {
        "kind": "table",
        "headers": [
          "Tahap",
          "Perlakuan Jurnal"
        ],
        "rows": [
          [
            "Saat terjadinya gaji dan upah",
            "Mencatat beban gaji dan kewajiban terkait"
          ],
          [
            "Saat distribusi",
            "Membebankan gaji ke BDP, overhead, pemasaran, dan administrasi"
          ],
          [
            "Saat pembayaran",
            "Melunasi utang gaji, pajak, dan potongan lain"
          ]
        ]
      },
      {
        "kind": "h3",
        "text": "4.4 Review TM 11 - Overhead Pabrik Direncanakan, Aktual, dan Dibebankan"
      },
      {
        "kind": "p",
        "text": "Overhead pabrik adalah semua biaya produksi selain bahan baku langsung dan tenaga kerja langsung. Overhead sulit ditelusuri langsung ke produk, sehingga perlu dibebankan dengan tarif."
      },
      {
        "kind": "p",
        "text": "Konsep penting TM 11:"
      },
      {
        "kind": "table",
        "headers": [
          "Konsep",
          "Inti Pemahaman"
        ],
        "rows": [
          [
            "Overhead direncanakan",
            "Estimasi overhead untuk periode tertentu"
          ],
          [
            "Overhead aktual",
            "Overhead yang benar-benar terjadi"
          ],
          [
            "Overhead dibebankan",
            "Overhead yang dibebankan ke produk dengan tarif"
          ],
          [
            "Predetermined overhead rate",
            "Tarif overhead yang ditentukan di awal periode"
          ],
          [
            "Overapplied overhead",
            "Overhead dibebankan lebih besar dari overhead aktual"
          ],
          [
            "Underapplied overhead",
            "Overhead dibebankan lebih kecil dari overhead aktual"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Dasar pembebanan overhead dapat berupa:"
      },
      {
        "kind": "table",
        "headers": [
          "Dasar Pembebanan",
          "Cocok Digunakan Jika"
        ],
        "rows": [
          [
            "Jam tenaga kerja langsung",
            "Proses banyak memakai tenaga kerja"
          ],
          [
            "Biaya tenaga kerja langsung",
            "Upah menjadi pemicu utama overhead"
          ],
          [
            "Jam mesin",
            "Proses banyak memakai mesin"
          ],
          [
            "Unit produksi",
            "Produk relatif homogen"
          ],
          [
            "Biaya bahan baku",
            "Overhead berkaitan kuat dengan pemakaian bahan"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "TM 11 menjadi dasar penting untuk TM 12 dan TM 13. Departementalisasi dan ABC sama-sama memperbaiki cara pembebanan overhead agar lebih tepat."
      },
      {
        "kind": "h3",
        "text": "4.5 Review TM 12 - Departementalisasi Overhead Pabrik"
      },
      {
        "kind": "p",
        "text": "Departementalisasi overhead membagi pabrik menjadi beberapa departemen. Tujuannya agar overhead tidak dibebankan dengan satu tarif pabrik saja."
      },
      {
        "kind": "p",
        "text": "Departemen dibagi menjadi dua:"
      },
      {
        "kind": "table",
        "headers": [
          "Jenis Departemen",
          "Penjelasan"
        ],
        "rows": [
          [
            "Departemen produksi",
            "Departemen yang mengolah produk secara langsung"
          ],
          [
            "Departemen jasa",
            "Departemen yang memberi layanan kepada departemen produksi"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Biaya departemen jasa harus dialokasikan ke departemen produksi. Setelah itu, tarif overhead departemen produksi dihitung dan dipakai untuk membebankan overhead ke produk."
      },
      {
        "kind": "p",
        "text": "Metode alokasi departemen jasa:"
      },
      {
        "kind": "table",
        "headers": [
          "Metode",
          "Ciri"
        ],
        "rows": [
          [
            "Direct method",
            "Biaya departemen jasa langsung dialokasikan ke departemen produksi"
          ],
          [
            "Step method",
            "Biaya departemen jasa dialokasikan bertahap"
          ],
          [
            "Simultaneous method",
            "Hubungan timbal balik antar departemen jasa dihitung dengan persamaan"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Departementalisasi lebih teliti daripada tarif pabrik tunggal karena setiap departemen dapat memakai dasar pembebanan berbeda. Departemen mesin dapat memakai jam mesin. Departemen perakitan dapat memakai jam tenaga kerja langsung."
      },
      {
        "kind": "h3",
        "text": "4.6 Review TM 13 - Activity Based Costing"
      },
      {
        "kind": "p",
        "text": "Activity Based Costing atau ABC membebankan overhead berdasarkan aktivitas. ABC muncul karena banyak overhead tidak dipicu oleh jumlah unit, tetapi oleh aktivitas seperti setup, inspeksi, pemindahan bahan, perubahan desain, dan pemrosesan pesanan."
      },
      {
        "kind": "p",
        "text": "Konsep penting ABC:"
      },
      {
        "kind": "table",
        "headers": [
          "Konsep",
          "Penjelasan"
        ],
        "rows": [
          [
            "Activity",
            "Tindakan yang mengonsumsi sumber daya"
          ],
          [
            "Activity cost pool",
            "Kumpulan biaya untuk satu aktivitas"
          ],
          [
            "Resource driver",
            "Dasar membebankan sumber daya ke aktivitas"
          ],
          [
            "Activity driver",
            "Dasar membebankan biaya aktivitas ke produk"
          ],
          [
            "Final cost object",
            "Objek biaya akhir seperti produk, pelanggan, atau pesanan"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Level biaya dalam ABC:"
      },
      {
        "kind": "table",
        "headers": [
          "Level",
          "Contoh Aktivitas",
          "Driver"
        ],
        "rows": [
          [
            "Unit-level",
            "Produksi setiap unit",
            "Unit, jam mesin, jam TKL"
          ],
          [
            "Batch-level",
            "Setup, inspeksi batch",
            "Jumlah setup, jumlah batch"
          ],
          [
            "Product-level",
            "Desain produk",
            "Jumlah perubahan desain"
          ],
          [
            "Plant-level",
            "Keamanan pabrik, gedung",
            "Luas lantai, kapasitas pabrik"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "ABC membantu mengurangi distorsi biaya produk. Produk volume rendah yang sering memakai setup dan desain khusus biasanya terlihat terlalu murah dalam sistem tradisional. ABC membuat biaya produk tersebut terlihat lebih realistis."
      },
      {
        "kind": "h2",
        "text": "5. Materi Praktik Simulasi UAS"
      },
      {
        "kind": "h3",
        "text": "5.1 Pola Praktik Soal UAS"
      },
      {
        "kind": "p",
        "text": "Soal UAS AKBI biasanya menguji tiga kemampuan:"
      },
      {
        "kind": "ol",
        "items": [
          "Mengenali jenis biaya dan metode yang sesuai.",
          "Menghitung kos dengan rumus yang benar.",
          "Menyajikan jawaban dalam format laporan atau tabel yang rapi."
        ]
      },
      {
        "kind": "p",
        "text": "Pola soal yang perlu dikuasai:"
      },
      {
        "kind": "table",
        "headers": [
          "Materi",
          "Pola Soal"
        ],
        "rows": [
          [
            "Produk bersama",
            "Alokasi joint cost dan analisis split-off"
          ],
          [
            "Produk sampingan",
            "Perlakuan hasil penjualan produk sampingan"
          ],
          [
            "Bahan baku",
            "Kos bahan dipakai, metode penilaian, EOQ, reorder point"
          ],
          [
            "Tenaga kerja",
            "Distribusi gaji, lembur, shift premium, bonus"
          ],
          [
            "Overhead",
            "Tarif overhead, overhead dibebankan, selisih overhead"
          ],
          [
            "Departementalisasi overhead",
            "Direct method, step method, simultaneous method"
          ],
          [
            "ABC",
            "Tarif aktivitas, overhead ABC, perbandingan tradisional dan ABC"
          ]
        ]
      },
      {
        "kind": "h3",
        "text": "5.2 Strategi Membaca Soal"
      },
      {
        "kind": "p",
        "text": "Sebelum menghitung, lakukan lima langkah berikut:"
      },
      {
        "kind": "ol",
        "items": [
          "Tandai kata kunci soal.",
          "Tentukan topik materi.",
          "Pisahkan data yang relevan dan tidak relevan.",
          "Tentukan metode yang diminta.",
          "Buat format tabel sebelum memasukkan angka."
        ]
      },
      {
        "kind": "p",
        "text": "Contoh kata kunci:"
      },
      {
        "kind": "table",
        "headers": [
          "Kata Kunci Soal",
          "Arah Materi"
        ],
        "rows": [
          [
            "split-off, produk bersama, joint cost",
            "TM 8"
          ],
          [
            "bahan dipakai, persediaan awal, pembelian",
            "TM 9"
          ],
          [
            "lembur, shift, bonus, gaji",
            "TM 10"
          ],
          [
            "overhead aktual, overhead dibebankan",
            "TM 11"
          ],
          [
            "departemen jasa, departemen produksi",
            "TM 12"
          ],
          [
            "setup, activity driver, cost pool",
            "TM 13"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "6. Format Cost atau Laporan Biaya Simulasi UAS"
      },
      {
        "kind": "h3",
        "text": "6.1 Format Alokasi Kos Bersama"
      },
      {
        "kind": "table",
        "headers": [
          "Produk",
          "Unit",
          "Harga Jual per Unit",
          "Nilai Jual",
          "Persentase Nilai Jual",
          "Alokasi Kos Bersama",
          "Kos per Unit"
        ],
        "rows": [
          [
            "Produk A",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal"
          ],
          [
            "Produk B",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal"
          ],
          [
            "Produk C",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal"
          ],
          [
            "Total",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "100%",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Rumus inti:"
      },
      {
        "kind": "formula",
        "text": "Alokasi kos bersama = Persentase nilai jual produk × Total kos bersama"
      },
      {
        "kind": "h3",
        "text": "6.2 Format Kos Bahan Baku Dipakai"
      },
      {
        "kind": "table",
        "headers": [
          "Keterangan",
          "Jumlah"
        ],
        "rows": [
          [
            "Persediaan awal bahan baku",
            "Diisi berdasarkan data soal"
          ],
          [
            "Pembelian bahan baku",
            "Diisi berdasarkan data soal"
          ],
          [
            "Freight-in",
            "Diisi berdasarkan data soal"
          ],
          [
            "Diskon pembelian",
            "Diisi berdasarkan data soal"
          ],
          [
            "Retur pembelian",
            "Diisi berdasarkan data soal"
          ],
          [
            "Bahan tersedia untuk dipakai",
            "Diisi berdasarkan data soal"
          ],
          [
            "Persediaan akhir bahan baku",
            "Diisi berdasarkan data soal"
          ],
          [
            "Kos bahan baku dipakai",
            "Diisi berdasarkan data soal"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Rumus inti:"
      },
      {
        "kind": "formula",
        "text": "Kos bahan baku dipakai = Persediaan awal bahan baku + Pembelian bersih + Freight-in - Persediaan akhir bahan baku"
      },
      {
        "kind": "h3",
        "text": "6.3 Format Distribusi Biaya Tenaga Kerja"
      },
      {
        "kind": "table",
        "headers": [
          "Kategori Tenaga Kerja",
          "Jumlah",
          "Perlakuan"
        ],
        "rows": [
          [
            "Tenaga kerja langsung",
            "Diisi berdasarkan data soal",
            "Barang Dalam Proses"
          ],
          [
            "Tenaga kerja tidak langsung",
            "Diisi berdasarkan data soal",
            "Overhead pabrik"
          ],
          [
            "Tenaga kerja pemasaran",
            "Diisi berdasarkan data soal",
            "Beban pemasaran"
          ],
          [
            "Tenaga kerja administrasi",
            "Diisi berdasarkan data soal",
            "Beban administrasi dan umum"
          ],
          [
            "Total gaji dan upah",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Jurnal distribusi:"
      },
      {
        "kind": "table",
        "headers": [
          "Akun",
          "Debit",
          "Kredit"
        ],
        "rows": [
          [
            "Barang Dalam Proses",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal"
          ],
          [
            "Biaya Overhead Pabrik",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal"
          ],
          [
            "Biaya Pemasaran",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal"
          ],
          [
            "Biaya Administrasi dan Umum",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal"
          ],
          [
            "Gaji dan Upah",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal"
          ]
        ]
      },
      {
        "kind": "h3",
        "text": "6.4 Format Overhead Pabrik"
      },
      {
        "kind": "table",
        "headers": [
          "Keterangan",
          "Jumlah"
        ],
        "rows": [
          [
            "Estimasi overhead pabrik",
            "Diisi berdasarkan data soal"
          ],
          [
            "Estimasi dasar pembebanan",
            "Diisi berdasarkan data soal"
          ],
          [
            "Tarif overhead",
            "Diisi berdasarkan data soal"
          ],
          [
            "Dasar pembebanan aktual",
            "Diisi berdasarkan data soal"
          ],
          [
            "Overhead dibebankan",
            "Diisi berdasarkan data soal"
          ],
          [
            "Overhead aktual",
            "Diisi berdasarkan data soal"
          ],
          [
            "Selisih overhead",
            "Diisi berdasarkan data soal"
          ],
          [
            "Keterangan",
            "Lebih dibebankan / kurang dibebankan"
          ]
        ]
      },
      {
        "kind": "h3",
        "text": "6.5 Format Departementalisasi Overhead"
      },
      {
        "kind": "table",
        "headers": [
          "Keterangan",
          "Produksi A",
          "Produksi B",
          "Jasa X",
          "Jasa Y",
          "Total"
        ],
        "rows": [
          [
            "Overhead awal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal"
          ],
          [
            "Alokasi Jasa X",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal"
          ],
          [
            "Alokasi Jasa Y",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal"
          ],
          [
            "Total overhead setelah alokasi",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "0",
            "0",
            "Diisi berdasarkan data soal"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Rumus inti:"
      },
      {
        "kind": "formula",
        "text": "Tarif overhead departemen = Total overhead departemen produksi setelah alokasi ÷ Dasar pembebanan departemen"
      },
      {
        "kind": "h3",
        "text": "6.6 Format Perhitungan ABC"
      },
      {
        "kind": "table",
        "headers": [
          "Activity Cost Pool",
          "Total Biaya Aktivitas",
          "Total Driver",
          "Tarif Aktivitas"
        ],
        "rows": [
          [
            "Setup",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal"
          ],
          [
            "Inspeksi",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal"
          ],
          [
            "Material handling",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal"
          ],
          [
            "Design changes",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal"
          ],
          [
            "Other overhead",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal"
          ]
        ]
      },
      {
        "kind": "table",
        "headers": [
          "Produk",
          "Driver Setup",
          "Driver Inspeksi",
          "Driver Design",
          "Overhead ABC",
          "Unit",
          "Kos per Unit"
        ],
        "rows": [
          [
            "Produk A",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal"
          ],
          [
            "Produk B",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal",
            "Diisi berdasarkan data soal"
          ]
        ]
      },
      {
        "kind": "p",
        "text": "Rumus inti:"
      },
      {
        "kind": "p",
        "text": "Tarif aktivitas = Total biaya aktivitas ÷ Total activity driver Biaya aktivitas produk = Tarif aktivitas × Driver yang dikonsumsi produk Kos per unit ABC = Total kos produk ÷ Jumlah unit produk"
      },
      {
        "kind": "h2",
        "text": "7. Rumus Penting Simulasi UAS"
      },
      {
        "kind": "h3",
        "text": "7.1 Rumus Produk Bersama"
      },
      {
        "kind": "formula",
        "text": "Nilai jual = Unit × Harga jual per unit"
      },
      {
        "kind": "formula",
        "text": "Persentase nilai jual = Nilai jual produk ÷ Total nilai jual seluruh produk"
      },
      {
        "kind": "formula",
        "text": "Alokasi kos bersama = Persentase nilai jual × Total kos bersama"
      },
      {
        "kind": "formula",
        "text": "Nilai jual hipotetis = Nilai jual akhir - Biaya proses lanjutan"
      },
      {
        "kind": "formula",
        "text": "Persentase nilai jual hipotetis = Nilai jual hipotetis produk ÷ Total nilai jual hipotetis"
      },
      {
        "kind": "formula",
        "text": "Kos per unit produk = Alokasi kos bersama ÷ Unit produk"
      },
      {
        "kind": "h3",
        "text": "7.2 Rumus Bahan Baku"
      },
      {
        "kind": "formula",
        "text": "Pembelian bersih = Pembelian + Freight-in - Diskon pembelian - Retur pembelian"
      },
      {
        "kind": "formula",
        "text": "Bahan tersedia untuk dipakai = Persediaan awal bahan + Pembelian bersih"
      },
      {
        "kind": "formula",
        "text": "Kos bahan baku dipakai = Bahan tersedia untuk dipakai - Persediaan akhir bahan"
      },
      {
        "kind": "formula",
        "text": "EOQ = √((2 × Kebutuhan tahunan × Biaya pesan per pesanan) ÷ Biaya simpan per unit)"
      },
      {
        "kind": "formula",
        "text": "Reorder point = Lead time usage + Safety stock"
      },
      {
        "kind": "formula",
        "text": "Average inventory = EOQ ÷ 2"
      },
      {
        "kind": "formula",
        "text": "Total ordering cost = Jumlah pesanan × Biaya pesan per pesanan"
      },
      {
        "kind": "formula",
        "text": "Total carrying cost = Rata-rata persediaan × Biaya simpan per unit"
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "[Perlu pemeriksaan manual]",
        "text": "[Perlu pemeriksaan manual] Rumus EOQ dan reorder point perlu dicocokkan lagi dengan format simbol yang digunakan dosen jika modul asli memakai notasi berbeda."
      },
      {
        "kind": "h3",
        "text": "7.3 Rumus Tenaga Kerja"
      },
      {
        "kind": "formula",
        "text": "Upah reguler = Jam reguler × Tarif reguler"
      },
      {
        "kind": "formula",
        "text": "Upah lembur = Jam lembur × Tarif lembur"
      },
      {
        "kind": "formula",
        "text": "Premi lembur = Jam lembur × (Tarif lembur - Tarif reguler)"
      },
      {
        "kind": "formula",
        "text": "Total upah = Upah reguler + Upah lembur + Bonus + Tunjangan terkait"
      },
      {
        "kind": "formula",
        "text": "Bonus berbasis laba = Persentase bonus × Laba"
      },
      {
        "kind": "formula",
        "text": "Vacation pay mingguan = Hak vacation pay tahunan ÷ Jumlah minggu kerja"
      },
      {
        "kind": "h3",
        "text": "7.4 Rumus Overhead Pabrik"
      },
      {
        "kind": "formula",
        "text": "Tarif overhead ditentukan di muka = Estimasi overhead pabrik ÷ Estimasi dasar pembebanan"
      },
      {
        "kind": "formula",
        "text": "Overhead dibebankan = Tarif overhead × Dasar pembebanan aktual"
      },
      {
        "kind": "formula",
        "text": "Selisih overhead = Overhead aktual - Overhead dibebankan"
      },
      {
        "kind": "formula",
        "text": "Jika overhead aktual > overhead dibebankan, maka overhead kurang dibebankan."
      },
      {
        "kind": "formula",
        "text": "Jika overhead aktual < overhead dibebankan, maka overhead lebih dibebankan."
      },
      {
        "kind": "h3",
        "text": "7.5 Rumus Departementalisasi Overhead"
      },
      {
        "kind": "formula",
        "text": "Alokasi departemen jasa = Biaya departemen jasa × Proporsi pemakaian jasa"
      },
      {
        "kind": "formula",
        "text": "Tarif overhead departemen = Total overhead departemen produksi setelah alokasi jasa ÷ Total dasar pembebanan departemen"
      },
      {
        "kind": "formula",
        "text": "Overhead dibebankan per departemen = Tarif overhead departemen × Dasar aktual departemen"
      },
      {
        "kind": "h3",
        "text": "7.6 Rumus ABC"
      },
      {
        "kind": "formula",
        "text": "Tarif aktivitas = Total biaya activity cost pool ÷ Total activity driver"
      },
      {
        "kind": "formula",
        "text": "Biaya aktivitas yang dibebankan = Tarif aktivitas × Jumlah driver yang dipakai produk"
      },
      {
        "kind": "formula",
        "text": "Total overhead ABC produk = Jumlah seluruh biaya aktivitas yang dibebankan ke produk"
      },
      {
        "kind": "formula",
        "text": "Total kos produk ABC = Direct material + Direct labor + Overhead ABC"
      },
      {
        "kind": "formula",
        "text": "Kos per unit ABC = Total kos produk ABC ÷ Jumlah unit produk"
      },
      {
        "kind": "formula",
        "text": "Selisih kos = Kos per unit tradisional - Kos per unit ABC"
      },
      {
        "kind": "example",
        "title": "8. Contoh Kasus Simulasi UAS",
        "blocks": [
          {
            "kind": "example",
            "title": "8.1 Contoh Kasus 1 - Produk Bersama",
            "blocks": [
              {
                "kind": "p",
                "text": "PT X mengeluarkan kos bersama sebesar Rp750.000. Produk yang dihasilkan memiliki nilai jual sebagai berikut."
              },
              {
                "kind": "table",
                "headers": [
                  "Produk",
                  "Unit",
                  "Harga Jual per Unit",
                  "Nilai Jual"
                ],
                "rows": [
                  [
                    "A",
                    "10.000",
                    "Rp15",
                    "Rp150.000"
                  ],
                  [
                    "B",
                    "35.000",
                    "Rp10",
                    "Rp350.000"
                  ],
                  [
                    "C",
                    "25.000",
                    "Rp12",
                    "Rp300.000"
                  ],
                  [
                    "D",
                    "10.000",
                    "Rp20",
                    "Rp200.000"
                  ],
                  [
                    "Total",
                    "80.000",
                    "Diisi berdasarkan data soal",
                    "Rp1.000.000"
                  ]
                ]
              },
              {
                "kind": "callout",
                "variant": "warning",
                "title": "[Perlu pemeriksaan manual]",
                "text": "[Perlu pemeriksaan manual] Angka contoh mengikuti scan modul TM 8 dan perlu dicek ulang pada tabel asli sebelum digunakan sebagai bahan final."
              },
              {
                "kind": "h3",
                "text": "Langkah Penyelesaian"
              },
              {
                "kind": "ol",
                "items": [
                  "Hitung total nilai jual seluruh produk.",
                  "Hitung persentase nilai jual setiap produk.",
                  "Kalikan persentase nilai jual dengan total kos bersama.",
                  "Hitung kos per unit jika diperlukan."
                ]
              },
              {
                "kind": "table",
                "headers": [
                  "Produk",
                  "Nilai Jual",
                  "Persentase",
                  "Alokasi Kos Bersama",
                  "Kos per Unit"
                ],
                "rows": [
                  [
                    "A",
                    "Rp150.000",
                    "15%",
                    "Rp112.500",
                    "Rp11,25"
                  ],
                  [
                    "B",
                    "Rp350.000",
                    "35%",
                    "Rp262.500",
                    "Rp7,50"
                  ],
                  [
                    "C",
                    "Rp300.000",
                    "30%",
                    "Rp225.000",
                    "Rp9,00"
                  ],
                  [
                    "D",
                    "Rp200.000",
                    "20%",
                    "Rp150.000",
                    "Rp15,00"
                  ],
                  [
                    "Total",
                    "Rp1.000.000",
                    "100%",
                    "Rp750.000",
                    "Diisi berdasarkan data soal"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Kesimpulan: alokasi kos bersama mengikuti proporsi nilai jual produk pada titik pisah."
              }
            ]
          },
          {
            "kind": "example",
            "title": "8.2 Contoh Kasus 2 - Bahan Baku Dipakai",
            "blocks": [
              {
                "kind": "p",
                "text": "Data bahan baku PT Alfa:"
              },
              {
                "kind": "table",
                "headers": [
                  "Keterangan",
                  "Jumlah"
                ],
                "rows": [
                  [
                    "Persediaan awal bahan baku",
                    "Rp1.300"
                  ],
                  [
                    "Pembelian bahan baku",
                    "Rp12.500"
                  ],
                  [
                    "Persediaan akhir bahan baku",
                    "Rp1.600"
                  ]
                ]
              },
              {
                "kind": "h3",
                "text": "Langkah Penyelesaian"
              },
              {
                "kind": "formula",
                "text": "Kos bahan baku dipakai = Persediaan awal + Pembelian - Persediaan akhir"
              },
              {
                "kind": "formula",
                "text": "Kos bahan baku dipakai = Rp1.300 + Rp12.500 - Rp1.600 = Rp12.200"
              },
              {
                "kind": "p",
                "text": "Jawaban: kos bahan baku dipakai adalah Rp12.200."
              }
            ]
          },
          {
            "kind": "example",
            "title": "8.3 Contoh Kasus 3 - Tenaga Kerja Lembur",
            "blocks": [
              {
                "kind": "p",
                "text": "Seorang karyawan dibayar Rp25.000 per jam untuk 40 jam kerja reguler. Jika jam kerja melebihi 40 jam, tarif lembur adalah Rp30.000 per jam. Karyawan bekerja 45 jam dalam satu minggu."
              },
              {
                "kind": "h3",
                "text": "Langkah Penyelesaian"
              },
              {
                "kind": "formula",
                "text": "Upah reguler = 40 × Rp25.000 = Rp1.000.000 Upah lembur = 5 × Rp30.000 = Rp150.000 Total upah = Rp1.000.000 + Rp150.000 = Rp1.150.000"
              },
              {
                "kind": "p",
                "text": "Jawaban: total upah karyawan adalah Rp1.150.000."
              },
              {
                "kind": "formula",
                "text": "Jika diminta premi lembur:"
              },
              {
                "kind": "formula",
                "text": "Premi lembur = 5 × (Rp30.000 - Rp25.000) = Rp25.000"
              }
            ]
          },
          {
            "kind": "example",
            "title": "8.4 Contoh Kasus 4 - Overhead Dibebankan",
            "blocks": [
              {
                "kind": "p",
                "text": "PT Beta mengestimasi overhead pabrik sebesar Rp240.000 dan estimasi jam mesin sebesar 12.000 jam. Pada periode berjalan, jam mesin aktual adalah 10.500 jam. Overhead aktual adalah Rp218.000."
              },
              {
                "kind": "h3",
                "text": "Langkah Penyelesaian"
              },
              {
                "kind": "formula",
                "text": "Tarif overhead = Rp240.000 ÷ 12.000 = Rp20 per jam mesin"
              },
              {
                "kind": "formula",
                "text": "Overhead dibebankan = Rp20 × 10.500 = Rp210.000"
              },
              {
                "kind": "formula",
                "text": "Selisih overhead = Overhead aktual - Overhead dibebankan Selisih overhead = Rp218.000 - Rp210.000 = Rp8.000"
              },
              {
                "kind": "p",
                "text": "Karena overhead aktual lebih besar daripada overhead dibebankan, terjadi overhead kurang dibebankan sebesar Rp8.000."
              }
            ]
          },
          {
            "kind": "example",
            "title": "8.5 Contoh Kasus 5 - Departementalisasi Overhead Direct Method",
            "blocks": [
              {
                "kind": "p",
                "text": "Data overhead awal:"
              },
              {
                "kind": "table",
                "headers": [
                  "Departemen",
                  "Overhead Awal"
                ],
                "rows": [
                  [
                    "Produksi A",
                    "Rp60.000"
                  ],
                  [
                    "Produksi B",
                    "Rp80.000"
                  ],
                  [
                    "Jasa Y",
                    "Rp36.300"
                  ],
                  [
                    "Jasa Z",
                    "Rp20.000"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Data jasa:"
              },
              {
                "kind": "table",
                "headers": [
                  "Penerima",
                  "Dari Y",
                  "Dari Z"
                ],
                "rows": [
                  [
                    "Produksi A",
                    "40%",
                    "20%"
                  ],
                  [
                    "Produksi B",
                    "40%",
                    "50%"
                  ],
                  [
                    "Jasa Y",
                    "0%",
                    "30%"
                  ],
                  [
                    "Jasa Z",
                    "20%",
                    "0%"
                  ]
                ]
              },
              {
                "kind": "callout",
                "variant": "warning",
                "title": "[Perlu pemeriksaan manual]",
                "text": "[Perlu pemeriksaan manual] Angka mengikuti contoh scan Carter pada materi departementalisasi overhead."
              },
              {
                "kind": "h3",
                "text": "Langkah Penyelesaian"
              },
              {
                "kind": "p",
                "text": "Direct method mengabaikan jasa antar departemen jasa."
              },
              {
                "kind": "p",
                "text": "Alokasi Jasa Y:"
              },
              {
                "kind": "formula",
                "text": "Total proporsi produksi = 40% + 40% = 80%"
              },
              {
                "kind": "formula",
                "text": "Produksi A = 40/80 × Rp36.300 = Rp18.150 Produksi B = 40/80 × Rp36.300 = Rp18.150"
              },
              {
                "kind": "p",
                "text": "Alokasi Jasa Z:"
              },
              {
                "kind": "formula",
                "text": "Total proporsi produksi = 20% + 50% = 70%"
              },
              {
                "kind": "formula",
                "text": "Produksi A = 20/70 × Rp20.000 = Rp5.714 Produksi B = 50/70 × Rp20.000 = Rp14.286"
              },
              {
                "kind": "table",
                "headers": [
                  "Departemen Produksi",
                  "Overhead Awal",
                  "Alokasi dari Y",
                  "Alokasi dari Z",
                  "Total"
                ],
                "rows": [
                  [
                    "Produksi A",
                    "Rp60.000",
                    "Rp18.150",
                    "Rp5.714",
                    "Rp83.864"
                  ],
                  [
                    "Produksi B",
                    "Rp80.000",
                    "Rp18.150",
                    "Rp14.286",
                    "Rp112.436"
                  ]
                ]
              }
            ]
          },
          {
            "kind": "example",
            "title": "8.6 Contoh Kasus 6 - Activity Based Costing",
            "blocks": [
              {
                "kind": "p",
                "text": "Data activity cost pool:"
              },
              {
                "kind": "table",
                "headers": [
                  "Activity Cost Pool",
                  "Total Biaya",
                  "Total Driver"
                ],
                "rows": [
                  [
                    "Setup",
                    "Rp800.000",
                    "80 setup"
                  ],
                  [
                    "Design changes",
                    "Rp600.000",
                    "20 perubahan desain"
                  ],
                  [
                    "Other overhead",
                    "Rp1.600.000",
                    "100.000 jam TKL"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Data pemakaian driver:"
              },
              {
                "kind": "table",
                "headers": [
                  "Produk",
                  "Setup",
                  "Design Changes",
                  "Jam TKL"
                ],
                "rows": [
                  [
                    "Common",
                    "40",
                    "12",
                    "98.000"
                  ],
                  [
                    "Special",
                    "40",
                    "8",
                    "2.000"
                  ]
                ]
              },
              {
                "kind": "callout",
                "variant": "warning",
                "title": "[Perlu pemeriksaan manual]",
                "text": "[Perlu pemeriksaan manual] Angka mengikuti contoh scan Carter pada materi ABC."
              },
              {
                "kind": "h3",
                "text": "Langkah Penyelesaian"
              },
              {
                "kind": "formula",
                "text": "Tarif setup = Rp800.000 ÷ 80 = Rp10.000 per setup Tarif design changes = Rp600.000 ÷ 20 = Rp30.000 per perubahan desain Tarif other overhead = Rp1.600.000 ÷ 100.000 = Rp16 per jam TKL"
              },
              {
                "kind": "p",
                "text": "Pembebanan overhead ABC:"
              },
              {
                "kind": "table",
                "headers": [
                  "Produk",
                  "Setup",
                  "Design Changes",
                  "Other Overhead",
                  "Total Overhead ABC"
                ],
                "rows": [
                  [
                    "Common",
                    "Rp400.000",
                    "Rp360.000",
                    "Rp1.568.000",
                    "Rp2.328.000"
                  ],
                  [
                    "Special",
                    "Rp400.000",
                    "Rp240.000",
                    "Rp32.000",
                    "Rp672.000"
                  ],
                  [
                    "Total",
                    "Rp800.000",
                    "Rp600.000",
                    "Rp1.600.000",
                    "Rp3.000.000"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Kesimpulan: ABC menunjukkan produk Special menerima beban overhead besar dari aktivitas setup dan design changes, meskipun volume produksinya rendah."
              }
            ]
          }
        ]
      },
      {
        "kind": "example",
        "title": "8.7 Contoh Kasus 7 - ABC Pra-UAS: Bangtan Company",
        "blocks": [
          {
            "kind": "p",
            "text": "Gunakan contoh ini sebagai format cepat Simulasi UAS untuk soal ABC yang meminta klasifikasi aktivitas, tarif aktivitas, pembebanan FOH, dan kos per unit."
          },
          {
            "kind": "table",
            "headers": [
              "Activity Cost Pool",
              "Klasifikasi",
              "Driver",
              "Tarif"
            ],
            "rows": [
              [
                "Setup cost Rp8.000.000",
                "Batch-level",
                "Setup hours 625",
                "Rp12.800"
              ],
              [
                "Design cost Rp3.950.000",
                "Product-level",
                "Design change 250",
                "Rp15.800"
              ],
              [
                "Lighting cost Rp3.300.000",
                "Plant/facility-level",
                "Luas area 4.000 m²",
                "Rp825"
              ]
            ]
          },
          {
            "kind": "table",
            "headers": [
              "Produk",
              "DM",
              "DL",
              "FOH ABC",
              "Total Kos",
              "Kos per Unit"
            ],
            "rows": [
              [
                "Boneka",
                "Rp22.500.000",
                "Rp25.000.000",
                "Rp8.820.000",
                "Rp56.320.000",
                "Rp75.093,33"
              ],
              [
                "Bantal",
                "Rp12.500.000",
                "Rp20.000.000",
                "Rp6.430.000",
                "Rp38.930.000",
                "Rp77.860"
              ]
            ]
          },
          {
            "kind": "callout",
            "variant": "info",
            "title": "Pola Jawaban UAS",
            "text": "Untuk soal seperti Bangtan, jangan langsung menghitung kos per unit. Urutannya harus: klasifikasi aktivitas → tarif aktivitas → FOH per produk → total kos → kos per unit."
          }
        ]
      },
      {
        "kind": "h2",
        "text": "9. Langkah Penyelesaian Soal UAS"
      },
      {
        "kind": "h3",
        "text": "9.1 Langkah Umum"
      },
      {
        "kind": "ol",
        "items": [
          "Baca soal sampai selesai.",
          "Tandai topik utama.",
          "Tulis data dalam tabel.",
          "Pisahkan data unit, biaya, dan persentase.",
          "Tentukan rumus yang sesuai.",
          "Hitung tahap demi tahap.",
          "Buat laporan atau jurnal jika diminta.",
          "Cek total akhir.",
          "Tulis kesimpulan singkat.",
          "Tandai jika ada data yang buram atau tidak terbaca."
        ]
      },
      {
        "kind": "h3",
        "text": "9.2 Langkah Soal Produk Bersama"
      },
      {
        "kind": "ol",
        "items": [
          "Tentukan total kos bersama.",
          "Tentukan produk yang dihasilkan.",
          "Tentukan metode alokasi.",
          "Hitung dasar alokasi.",
          "Hitung persentase setiap produk.",
          "Alokasikan kos bersama.",
          "Hitung kos per unit.",
          "Jika ada proses lanjutan, gunakan nilai jual hipotetis.",
          "Jika ada produk sampingan, tentukan perlakuan akuntansinya."
        ]
      },
      {
        "kind": "h3",
        "text": "9.3 Langkah Soal Bahan Baku"
      },
      {
        "kind": "ol",
        "items": [
          "Catat persediaan awal.",
          "Catat pembelian.",
          "Sesuaikan dengan freight-in, diskon, dan retur.",
          "Hitung bahan tersedia untuk dipakai.",
          "Kurangi persediaan akhir.",
          "Tentukan kos bahan baku dipakai.",
          "Jika soal meminta penilaian, gunakan FIFO, LIFO, rata-rata, atau identifikasi khusus.",
          "Jika soal meminta pengendalian, gunakan EOQ, reorder point, safety stock, atau ABC inventory."
        ]
      },
      {
        "kind": "h3",
        "text": "9.4 Langkah Soal Tenaga Kerja"
      },
      {
        "kind": "ol",
        "items": [
          "Pisahkan jam reguler dan jam lembur.",
          "Hitung upah reguler.",
          "Hitung upah lembur.",
          "Pisahkan premi lembur jika diminta.",
          "Klasifikasikan biaya tenaga kerja.",
          "Buat jurnal saat gaji terjadi.",
          "Buat jurnal distribusi biaya.",
          "Buat jurnal pembayaran jika diminta."
        ]
      },
      {
        "kind": "h3",
        "text": "9.5 Langkah Soal Overhead"
      },
      {
        "kind": "ol",
        "items": [
          "Ambil estimasi overhead.",
          "Ambil estimasi dasar pembebanan.",
          "Hitung tarif overhead.",
          "Ambil dasar aktual.",
          "Hitung overhead dibebankan.",
          "Bandingkan dengan overhead aktual.",
          "Tentukan overapplied atau underapplied.",
          "Buat jurnal jika diminta."
        ]
      },
      {
        "kind": "h3",
        "text": "9.6 Langkah Soal Departementalisasi"
      },
      {
        "kind": "ol",
        "items": [
          "Pisahkan departemen produksi dan departemen jasa.",
          "Masukkan overhead awal.",
          "Pilih metode alokasi.",
          "Jika direct method, abaikan jasa antar departemen jasa.",
          "Jika step method, tentukan urutan alokasi.",
          "Jika simultaneous method, buat persamaan.",
          "Alokasikan biaya jasa ke departemen produksi.",
          "Hitung total overhead produksi.",
          "Hitung tarif overhead departemen.",
          "Bebankan overhead ke produk."
        ]
      },
      {
        "kind": "h3",
        "text": "9.7 Langkah Soal ABC"
      },
      {
        "kind": "ol",
        "items": [
          "Identifikasi activity cost pool.",
          "Tentukan total biaya setiap aktivitas.",
          "Tentukan total activity driver.",
          "Hitung tarif aktivitas.",
          "Hitung pemakaian driver tiap produk.",
          "Bebankan biaya aktivitas ke produk.",
          "Jumlahkan overhead ABC.",
          "Tambahkan biaya langsung.",
          "Hitung kos per unit.",
          "Bandingkan dengan sistem tradisional jika diminta."
        ]
      },
      {
        "kind": "h2",
        "text": "9.8 Checklist Format Laporan Wajib UAS"
      },
      {
        "kind": "p",
        "text": "Dalam Simulasi UAS, mahasiswa tidak cukup menghafal rumus. Banyak soal meminta format laporan atau skedul kerja. Karena itu, setiap jawaban harus dicek apakah format yang diminta sudah muncul lengkap, bukan hanya hasil akhir angka."
      },
      {
        "kind": "table",
        "headers": [
          "Materi",
          "Format atau Laporan yang Wajib Dikuasai",
          "Kesalahan yang Harus Dihindari"
        ],
        "rows": [
          [
            "TM 8 - Produk bersama dan produk sampingan",
            "Skedul alokasi joint cost, laporan laba rugi produk sampingan sebagai pendapatan penjualan, pendapatan lain-lain, pengurang HPP, dan pengurang biaya produksi",
            "Menggunakan joint cost untuk keputusan proses lanjut atau salah menempatkan by-product revenue"
          ],
          [
            "TM 9 - Bahan baku",
            "Skedul pembelian bersih, bahan tersedia untuk dipakai, bahan baku dipakai, kartu bahan, dan jurnal bahan",
            "Lupa freight-in, diskon, retur, atau salah memilih metode penilaian bahan"
          ],
          [
            "TM 10 - Tenaga kerja",
            "Payroll register, labor cost distribution, jurnal payroll, jurnal distribusi tenaga kerja, dan jurnal pembayaran gaji",
            "Mencampur direct labor, indirect labor, premi lembur, idle time, dan biaya tenaga kerja nonproduksi"
          ],
          [
            "TM 11 - Overhead pabrik",
            "Skedul tarif overhead, overhead aktual, overhead dibebankan, dan penutupan overapplied atau underapplied overhead",
            "Menggunakan data aktual untuk tarif awal atau membalik underapplied dan overapplied"
          ],
          [
            "TM 12 - Departementalisasi overhead",
            "Factory survey, alokasi biaya tidak langsung, direct method, step method, simultaneous method, tarif overhead departemen, dan jurnal applied overhead departemen",
            "Menghitung alokasi departemen jasa tetapi lupa menghitung tarif overhead departemen"
          ],
          [
            "TM 13 - ABC",
            "Activity cost pool, activity rate, pembebanan overhead ABC, cost per unit ABC, dan perbandingan tradisional vs ABC",
            "Menggunakan satu driver untuk semua aktivitas atau tidak membedakan resource driver dan activity driver"
          ]
        ],
        "caption": "Checklist ini menjadi kontrol agar jawaban UAS tidak terpotong pada rumus saja."
      },
      {
        "kind": "h2",
        "text": "9.9 Pola Jawaban Komprehensif UAS"
      },
      {
        "kind": "ol",
        "items": [
          "Tentukan TM atau topik yang sedang diuji sebelum menghitung.",
          "Tentukan objek biaya: produk, bahan, tenaga kerja, overhead, departemen, aktivitas, atau laporan laba rugi.",
          "Tandai metode yang diminta soal: joint cost method, inventory valuation, payroll distribution, predetermined overhead, service department allocation, atau ABC.",
          "Susun skedul data awal agar angka tidak langsung loncat ke hasil akhir.",
          "Hitung rumus inti dengan urutan yang benar.",
          "Buat tabel laporan atau jurnal jika diminta.",
          "Cek rekonsiliasi total agar jumlah biaya sebelum dan sesudah alokasi tetap konsisten.",
          "Tulis interpretasi singkat jika hasil memengaruhi keputusan manajerial."
        ]
      },
      {
        "kind": "callout",
        "variant": "key",
        "title": "Standar Jawaban Aman UAS",
        "text": "Jawaban aman selalu memperlihatkan metode, skedul, rumus, tabel laporan, jurnal jika diminta, dan interpretasi. Jika jawaban hanya berisi angka akhir tanpa format, risiko kehilangan poin tinggi karena Akuntansi Biaya menilai proses penelusuran kos, bukan sekadar hasil hitung."
      },
      {
        "kind": "h2",
        "text": "9.10 Checkpoint UAS Terintegrasi Batch 12E"
      },
      {
        "kind": "p",
        "text": "Checkpoint ini mengunci tiga area UAS yang paling rawan angka loncat: departementalisasi direct method, departementalisasi sequential method, dan ABC. Data soal ditampilkan sebelum workspace agar mahasiswa dapat mengerjakan tanpa membuka kunci jawaban."
      },
      {
        "kind": "table-fill",
        "spec": {
          "title": "Checkpoint TM 14 - Hasil Akhir Direct, Sequential, dan ABC",
          "instruction": "Gunakan kasus departementalisasi Pemeliharaan-Teknik dan kasus ABC Bangtan Company yang telah ditampilkan pada TM12 dan TM13. Isi angka akhir sebagai kontrol kesiapan UAS.",
          "currency": "Rp",
          "headers": ["Area Uji", "Output 1", "Output 2", "Kontrol Total"],
          "rows": [
            { "id": "tm14-direct-control", "label": "Direct method", "cells": [
              { "id": "tm14-direct-assembly", "answer": 1256000, "placeholder": "Perakitan" },
              { "id": "tm14-direct-packaging", "answer": 1104000, "placeholder": "Pengemasan" },
              { "id": "tm14-direct-total", "answer": 2360000, "placeholder": "Total produksi" }
            ] },
            { "id": "tm14-seq-control", "label": "Sequential method", "cells": [
              { "id": "tm14-seq-assembly", "answer": 1251428, "placeholder": "Perakitan" },
              { "id": "tm14-seq-packaging", "answer": 1108572, "placeholder": "Pengemasan" },
              { "id": "tm14-seq-total", "answer": 2360000, "placeholder": "Total produksi" }
            ] },
            { "id": "tm14-abc-control", "label": "ABC Bangtan", "cells": [
              { "id": "tm14-abc-foh-boneka", "answer": 8820000, "placeholder": "FOH ABC Boneka" },
              { "id": "tm14-abc-foh-bantal", "answer": 6430000, "placeholder": "FOH ABC Bantal" },
              { "id": "tm14-abc-foh-total", "answer": 15250000, "placeholder": "Total FOH ABC" }
            ] }
          ]
        }
      },
      {
        "kind": "solution-reveal",
        "title": "Pembahasan Checkpoint UAS Terintegrasi",
        "prompt": "Buka setelah mengisi checkpoint akhir TM14.",
        "blocks": [
          { "kind": "p", "text": "Direct method dan sequential method menggunakan data yang sama, tetapi perlakuan jasa antar departemen jasa berbeda. Karena itu hasil akhir Perakitan dan Pengemasan berbeda, walaupun total akhirnya tetap Rp2.360.000." },
          { "kind": "p", "text": "ABC Bangtan harus direkonsiliasi ke total cost pool Rp15.250.000. Jika FOH Boneka Rp8.820.000 dan FOH Bantal Rp6.430.000, maka total overhead yang dibebankan sudah lengkap." }
        ]
      },
      {
        "kind": "h2",
        "text": "10. Kesalahan Umum Saat UAS"
      },
      {
        "kind": "ol",
        "items": [
          "Langsung menghitung tanpa menentukan metode.",
          "Salah membedakan joint product dan by-product.",
          "Menggunakan nilai jual akhir padahal soal meminta nilai jual pada split-off point.",
          "Lupa mengurangi biaya proses lanjutan dalam metode harga jual hipotetis.",
          "Salah memasukkan produk sampingan sebagai produk utama.",
          "Salah menghitung pembelian bersih bahan baku.",
          "Lupa memasukkan freight-in sebagai penambah kos bahan.",
          "Lupa mengurangi diskon dan retur pembelian.",
          "Salah membedakan metode fisik dan perpetual.",
          "Mencampur tenaga kerja langsung dan tenaga kerja tidak langsung.",
          "Memasukkan semua lembur ke BDP tanpa melihat penyebab lembur.",
          "Salah menempatkan tenaga kerja pemasaran dan administrasi sebagai biaya produksi.",
          "Membalik jurnal overhead dibebankan.",
          "Membalik arti overhead lebih dan kurang dibebankan.",
          "Menghitung tarif overhead dengan data aktual, padahal tarif ditentukan di awal.",
          "Dalam direct method, masih menghitung jasa antar departemen jasa.",
          "Dalam step method, memberi alokasi kembali ke departemen jasa yang sudah ditutup.",
          "Dalam simultaneous method, salah membuat persamaan.",
          "Dalam ABC, memakai satu driver untuk semua aktivitas.",
          "Menganggap setup cost dipicu oleh jumlah unit.",
          "Tidak menghitung kos per unit setelah total kos produk diperoleh.",
          "Tidak mengecek apakah total biaya sebelum dan sesudah alokasi tetap sama.",
          "Menyalin angka dari scan buram tanpa memberi label [Perlu pemeriksaan manual].",
          "Menulis jawaban tanpa format tabel.",
          "Tidak memberi kesimpulan akhir."
        ]
      },
      {
        "kind": "example",
        "title": "11. Latihan Pemahaman",
        "blocks": [
          {
            "kind": "example",
            "title": "Latihan 1 - Produk Bersama",
            "blocks": [
              {
                "kind": "p",
                "text": "PT Rasa menghasilkan tiga produk dari satu proses bersama. Kos bersama sebesar Rp900.000. Data nilai jual pada titik pisah sebagai berikut."
              },
              {
                "kind": "table",
                "headers": [
                  "Produk",
                  "Unit",
                  "Harga Jual per Unit"
                ],
                "rows": [
                  [
                    "A",
                    "10.000",
                    "Rp20"
                  ],
                  [
                    "B",
                    "15.000",
                    "Rp30"
                  ],
                  [
                    "C",
                    "20.000",
                    "Rp10"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Diminta:"
              },
              {
                "kind": "ol",
                "items": [
                  "Hitung nilai jual setiap produk.",
                  "Hitung persentase nilai jual setiap produk.",
                  "Alokasikan kos bersama dengan metode nilai jual relatif.",
                  "Hitung kos per unit setiap produk."
                ]
              }
            ]
          },
          {
            "kind": "example",
            "title": "Latihan 2 - Bahan Baku",
            "blocks": [
              {
                "kind": "p",
                "text": "Data bahan baku PT Gama:"
              },
              {
                "kind": "table",
                "headers": [
                  "Keterangan",
                  "Jumlah"
                ],
                "rows": [
                  [
                    "Persediaan awal bahan baku",
                    "Rp25.000"
                  ],
                  [
                    "Pembelian",
                    "Rp120.000"
                  ],
                  [
                    "Freight-in",
                    "Rp8.000"
                  ],
                  [
                    "Retur pembelian",
                    "Rp5.000"
                  ],
                  [
                    "Diskon pembelian",
                    "Rp3.000"
                  ],
                  [
                    "Persediaan akhir bahan baku",
                    "Rp30.000"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Diminta:"
              },
              {
                "kind": "ol",
                "items": [
                  "Hitung pembelian bersih.",
                  "Hitung bahan tersedia untuk dipakai.",
                  "Hitung kos bahan baku dipakai."
                ]
              }
            ]
          },
          {
            "kind": "example",
            "title": "Latihan 3 - Tenaga Kerja",
            "blocks": [
              {
                "kind": "p",
                "text": "Seorang karyawan bekerja 48 jam dalam satu minggu. Tarif reguler Rp20.000 per jam untuk 40 jam pertama. Jam di atas 40 jam dibayar Rp30.000 per jam."
              },
              {
                "kind": "p",
                "text": "Diminta:"
              },
              {
                "kind": "ol",
                "items": [
                  "Hitung upah reguler.",
                  "Hitung upah lembur.",
                  "Hitung total upah.",
                  "Hitung premi lembur."
                ]
              }
            ]
          },
          {
            "kind": "example",
            "title": "Latihan 4 - Overhead",
            "blocks": [
              {
                "kind": "p",
                "text": "PT Delta mengestimasi overhead Rp500.000 dan estimasi jam mesin 25.000 jam. Jam mesin aktual 23.000 jam. Overhead aktual Rp470.000."
              },
              {
                "kind": "p",
                "text": "Diminta:"
              },
              {
                "kind": "ol",
                "items": [
                  "Hitung tarif overhead.",
                  "Hitung overhead dibebankan.",
                  "Hitung selisih overhead.",
                  "Tentukan apakah overhead lebih dibebankan atau kurang dibebankan."
                ]
              }
            ]
          },
          {
            "kind": "example",
            "title": "Latihan 5 - Departementalisasi",
            "blocks": [
              {
                "kind": "p",
                "text": "Data overhead awal:"
              },
              {
                "kind": "table",
                "headers": [
                  "Departemen",
                  "Overhead Awal"
                ],
                "rows": [
                  [
                    "Produksi A",
                    "Rp100.000"
                  ],
                  [
                    "Produksi B",
                    "Rp160.000"
                  ],
                  [
                    "Jasa X",
                    "Rp60.000"
                  ],
                  [
                    "Jasa Y",
                    "Rp40.000"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Jasa X digunakan oleh Produksi A 30%, Produksi B 50%, dan Jasa Y 20%. Jasa Y digunakan oleh Produksi A 40%, Produksi B 40%, dan Jasa X 20%."
              },
              {
                "kind": "p",
                "text": "Diminta:"
              },
              {
                "kind": "ol",
                "items": [
                  "Alokasikan biaya jasa dengan direct method.",
                  "Hitung overhead akhir Produksi A.",
                  "Hitung overhead akhir Produksi B.",
                  "Jelaskan mengapa jasa antar departemen jasa diabaikan dalam direct method."
                ]
              }
            ]
          },
          {
            "kind": "example",
            "title": "Latihan 6 - ABC",
            "blocks": [
              {
                "kind": "p",
                "text": "Data activity cost pool:"
              },
              {
                "kind": "table",
                "headers": [
                  "Aktivitas",
                  "Total Biaya",
                  "Total Driver"
                ],
                "rows": [
                  [
                    "Setup",
                    "Rp300.000",
                    "30 setup"
                  ],
                  [
                    "Inspeksi",
                    "Rp240.000",
                    "120 inspeksi"
                  ],
                  [
                    "Material handling",
                    "Rp180.000",
                    "90 perpindahan"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Data penggunaan aktivitas:"
              },
              {
                "kind": "table",
                "headers": [
                  "Produk",
                  "Setup",
                  "Inspeksi",
                  "Perpindahan"
                ],
                "rows": [
                  [
                    "A",
                    "10",
                    "50",
                    "30"
                  ],
                  [
                    "B",
                    "20",
                    "70",
                    "60"
                  ]
                ]
              },
              {
                "kind": "p",
                "text": "Diminta:"
              },
              {
                "kind": "ol",
                "items": [
                  "Hitung tarif setiap aktivitas.",
                  "Hitung overhead ABC Produk A.",
                  "Hitung overhead ABC Produk B.",
                  "Jelaskan produk mana yang lebih banyak memakai aktivitas."
                ]
              }
            ]
          }
        ]
      },
      {
        "kind": "h2",
        "text": "12. Ringkasan"
      },
      {
        "kind": "p",
        "text": "TM 14 berfungsi sebagai sesi review untuk menghadapi UAS Akuntansi Biaya. Materi yang direview mencakup TM 8 sampai TM 13. Fokus utamanya adalah menghubungkan teori dengan praktik perhitungan kos. Mahasiswa perlu memahami konsep, rumus, format, dan langkah penyelesaian soal."
      },
      {
        "kind": "p",
        "text": "TM 8 membahas produk bersama dan produk sampingan. Inti materinya adalah alokasi kos bersama ke beberapa produk yang muncul dari satu proses produksi. Metode utama yang perlu dikuasai adalah nilai jual relatif, harga jual hipotetis, satuan fisik, rata-rata kos per satuan, dan rata-rata tertimbang. Produk sampingan perlu dipahami secara berbeda karena nilai jualnya relatif kecil dibandingkan produk utama."
      },
      {
        "kind": "p",
        "text": "TM 9 membahas bahan baku. Materi ini menuntut pemahaman tentang alur pengadaan bahan, dokumen pembelian, pencatatan bahan, penilaian bahan, dan pengendalian sediaan. Rumus pentingnya adalah kos bahan baku dipakai, pembelian bersih, EOQ, dan reorder point. Mahasiswa juga harus mampu membedakan metode fisik dan perpetual serta memahami FIFO, LIFO, rata-rata bergerak, dan rata-rata tertimbang."
      },
      {
        "kind": "p",
        "text": "TM 10 membahas tenaga kerja langsung. Materi ini menguji kemampuan mengklasifikasikan tenaga kerja, menghitung upah reguler, lembur, premi lembur, shift premium, bonus, vacation pay, dan holiday pay. Mahasiswa juga perlu memahami jurnal saat gaji terjadi, distribusi gaji, dan pembayaran gaji. Kesalahan yang sering terjadi adalah mencampur tenaga kerja langsung, tenaga kerja tidak langsung, pemasaran, dan administrasi."
      },
      {
        "kind": "p",
        "text": "TM 11 membahas overhead pabrik yang direncanakan, aktual, dan dibebankan. Inti materinya adalah tarif overhead ditentukan di muka, overhead dibebankan, overhead aktual, dan selisih overhead. Mahasiswa harus mampu menentukan apakah terjadi overhead lebih dibebankan atau kurang dibebankan. Materi ini menjadi dasar untuk memahami departementalisasi overhead dan ABC."
      },
      {
        "kind": "p",
        "text": "TM 12 membahas departementalisasi overhead. Pendekatan ini membagi pabrik menjadi departemen produksi dan departemen jasa. Biaya departemen jasa dialokasikan ke departemen produksi dengan direct method, step method, atau simultaneous method. Setelah biaya jasa dialokasikan, tarif overhead departemen produksi dihitung dan digunakan untuk membebankan overhead ke produk."
      },
      {
        "kind": "p",
        "text": "TM 13 membahas Activity Based Costing. ABC membebankan overhead berdasarkan aktivitas, bukan hanya berdasarkan volume. Sistem ini lebih akurat ketika perusahaan memiliki produk yang beragam dan overhead yang besar. Konsep pentingnya adalah activity cost pool, resource driver, activity driver, unit-level cost, batch-level cost, product-level cost, dan plant-level cost. ABC juga berguna untuk Activity Based Management karena membantu manajemen melihat aktivitas yang mahal dan tidak memberi nilai tambah."
      },
      {
        "kind": "p",
        "text": "Secara umum, UAS Akuntansi Biaya tidak cukup dijawab dengan hafalan. Mahasiswa perlu membaca soal dengan cermat, memilih metode yang tepat, membuat tabel, menghitung bertahap, dan memberi kesimpulan. Format jawaban yang rapi sangat penting karena sebagian besar soal UAS bersifat perhitungan dan analisis."
      },
      {
        "kind": "p",
        "text": "Kunci utama TM 14 adalah memahami hubungan antar materi. Produk bersama dan bahan baku berhubungan dengan penentuan kos produksi. Tenaga kerja dan overhead berhubungan dengan pembebanan biaya produksi. Departementalisasi dan ABC berhubungan dengan peningkatan ketepatan pembebanan overhead. Jika hubungan ini dipahami, soal UAS menjadi lebih mudah dikerjakan secara sistematis."
      },
      {
        "kind": "h2",
        "text": "13. Checklist Kelengkapan TM 14"
      },
      {
        "kind": "table",
        "headers": [
          "Komponen",
          "Status"
        ],
        "rows": [
          [
            "Tujuan pembelajaran",
            "Sudah masuk"
          ],
          [
            "Gambaran umum",
            "Sudah masuk"
          ],
          [
            "Peta submateri",
            "Sudah masuk"
          ],
          [
            "Materi teori simulasi UAS",
            "Sudah masuk"
          ],
          [
            "Materi praktik",
            "Sudah masuk"
          ],
          [
            "Format cost atau laporan biaya",
            "Sudah masuk"
          ],
          [
            "Rumus penting",
            "Sudah masuk"
          ],
          [
            "Contoh kasus",
            "Sudah masuk"
          ],
          [
            "Langkah penyelesaian",
            "Sudah masuk"
          ],
          [
            "Kesalahan umum",
            "Sudah masuk"
          ],
          [
            "Latihan pemahaman",
            "Sudah masuk"
          ],
          [
            "Ringkasan panjang",
            "Sudah masuk"
          ],
          [
            "Checklist kelengkapan",
            "Sudah masuk"
          ],
          [
            "Label [Perlu pemeriksaan manual] untuk bagian scan buram",
            "Sudah masuk"
          ],
          [
            "Fokus hanya TM 14",
            "Sudah sesuai"
          ],
          [
            "TM lain ditulis sebagai review, bukan materi baru",
            "Sudah sesuai"
          ]
        ]
      }
    ]
  }
}
;

export const AKBI_REVIEW_UAS_READING: AkbiReviewReading = 
{
  "id": "akbi-review-uas",
  "tm": 15,
  "title": "Simulasi UAS",
  "ref": "TM 8–14 · Paket Ujian Praktik",
  "source": "SOAL DAN PEMBAHASAN KUIS PRA-UAS AKUNTANSI BIAYA (1).pdf; AKBI Master Content Bagian 2 · TM 8-14",
  "phase": "review_uas",
  "manualCheckCount": 21,
  "intro": "Simulasi UAS adalah paket ujian praktik untuk TM 8 sampai TM 14. Bentuknya bukan rangkuman teori, tetapi latihan mengisi laporan, jurnal, akun T, daftar gaji, skedul departementalisasi, dan tabel ABC. Kerjakan angka terlebih dahulu, lalu gunakan tombol Periksa atau Lihat kunci sebagai kontrol jawaban.",
  "objectives": [
    "Mengerjakan paket praktik UAS berbasis TM 8 sampai TM 14.",
    "Menyusun laporan laba rugi produk sampingan dengan beberapa perlakuan akuntansi.",
    "Mencatat jurnal dan akun T untuk JIT/backflush costing.",
    "Menghitung daftar gaji dan jurnal tenaga kerja berbasis standar produksi.",
    "Menghitung overhead pabrik dibebankan, aktual, dan selisih overhead.",
    "Mengalokasikan biaya departemen jasa dengan direct method dan sequential method.",
    "Menghitung activity rate, overhead ABC, total kos, dan kos per unit produk."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Paket Simulasi UAS"
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Instruksi Pengerjaan",
      "text": "Anggap bagian ini sebagai ruang latihan ujian. Jangan langsung membuka kunci. Isi angka pada worksheet, buat jurnal atau skedul sesuai instruksi, lalu periksa hasil. Angka ditulis tanpa titik ribuan, misalnya 20100000 untuk Rp20.100.000."
    },
    {
      "kind": "table",
      "headers": [
        "Bagian",
        "Cakupan",
        "Output yang Harus Dikerjakan",
        "Bobot Latihan"
      ],
      "rows": [
        [
          "A",
          "TM 8 · Produk sampingan",
          "Laporan laba rugi dengan perlakuan pendapatan produk sampingan",
          "20"
        ],
        [
          "B",
          "TM 9 · JIT dan backflush",
          "Jurnal, akun T, dan saldo COGS",
          "20"
        ],
        [
          "C",
          "TM 10 · Tenaga kerja",
          "Daftar gaji dan jurnal gaji/upah",
          "15"
        ],
        [
          "D",
          "TM 11 · FOH",
          "Tarif overhead, overhead dibebankan, dan selisih overhead",
          "10"
        ],
        [
          "E",
          "TM 12 · Departementalisasi",
          "Direct method dan sequential method",
          "15"
        ],
        [
          "F",
          "TM 13 · ABC",
          "Activity rate, FOH ABC, total kos, dan kos per unit",
          "20"
        ]
      ],
      "caption": "Total bobot latihan 100 poin. Bobot hanya untuk simulasi belajar, bukan nilai resmi."
    },
    {
      "kind": "h3",
      "text": "Bagian A — TM 8 Produk Sampingan: Laporan Laba Rugi"
    },
    {
      "kind": "p",
      "text": "PT Naranuansa memiliki persediaan awal 4.950 unit dengan kos Rp4.500 per unit, jumlah biaya produksi 10.750 unit dengan kos Rp4.500 per unit, penjualan produk utama 13.350 unit dengan harga Rp4.500 per unit, pendapatan produk sampingan Rp25.000.000, beban pemasaran dan administrasi Rp4.900.000, serta persediaan akhir 2.350 unit dengan kos Rp4.500 per unit."
    },
    {
      "kind": "builder",
      "instructions": "Perlakuan 1: pendapatan produk sampingan dicatat sebagai bagian dari pendapatan penjualan. Isi baris yang kosong seperti laporan laba rugi ujian.",
      "spec": {
        "entity": "PT Naranuansa",
        "title": "Laporan Laba Rugi",
        "period": "31 Mei 2025",
        "currency": "Rp",
        "lines": [
          {
            "id": "a-sales-main",
            "label": "Penjualan produk utama",
            "kind": "input",
            "amount": 60075000
          },
          {
            "id": "a-sales-by",
            "label": "Pendapatan penjualan produk sampingan",
            "kind": "input",
            "amount": 25000000
          },
          {
            "id": "a-net-sales",
            "label": "Penjualan bersih",
            "kind": "computed",
            "compute": [
              {
                "id": "a-sales-main"
              },
              {
                "id": "a-sales-by"
              }
            ],
            "bold": true,
            "rule": "top"
          },
          {
            "label": "Harga pokok penjualan:",
            "kind": "header"
          },
          {
            "id": "a-beg",
            "label": "Persediaan awal",
            "kind": "input",
            "amount": 22275000,
            "indent": 1
          },
          {
            "id": "a-prod",
            "label": "Total biaya pokok produksi",
            "kind": "input",
            "amount": 48375000,
            "indent": 1
          },
          {
            "id": "a-avail",
            "label": "Persediaan tersedia untuk dijual",
            "kind": "computed",
            "compute": [
              {
                "id": "a-beg"
              },
              {
                "id": "a-prod"
              }
            ],
            "indent": 1,
            "bold": true
          },
          {
            "id": "a-end",
            "label": "Persediaan akhir",
            "kind": "input",
            "amount": 10575000,
            "indent": 1
          },
          {
            "id": "a-cogs",
            "label": "Harga pokok penjualan",
            "kind": "computed",
            "compute": [
              {
                "id": "a-avail"
              },
              {
                "id": "a-end",
                "sign": -1
              }
            ],
            "bold": true,
            "rule": "top"
          },
          {
            "id": "a-gp",
            "label": "Laba kotor",
            "kind": "computed",
            "compute": [
              {
                "id": "a-net-sales"
              },
              {
                "id": "a-cogs",
                "sign": -1
              }
            ],
            "bold": true
          },
          {
            "id": "a-sga",
            "label": "Beban pemasaran dan administrasi",
            "kind": "input",
            "amount": 4900000
          },
          {
            "id": "a-op",
            "label": "Laba operasi",
            "kind": "computed",
            "compute": [
              {
                "id": "a-gp"
              },
              {
                "id": "a-sga",
                "sign": -1
              }
            ],
            "bold": true,
            "rule": "double"
          }
        ]
      }
    },
    {
      "kind": "builder",
      "instructions": "Perlakuan 2: pendapatan produk sampingan menjadi pengurang harga pokok penjualan produk utama. Isi angka laporan sampai laba operasi.",
      "spec": {
        "entity": "PT Naranuansa",
        "title": "Laporan Laba Rugi",
        "period": "31 Mei 2025",
        "currency": "Rp",
        "lines": [
          {
            "id": "b-sales",
            "label": "Penjualan produk utama",
            "kind": "input",
            "amount": 60075000
          },
          {
            "label": "Harga pokok penjualan:",
            "kind": "header"
          },
          {
            "id": "b-beg",
            "label": "Persediaan awal",
            "kind": "input",
            "amount": 22275000,
            "indent": 1
          },
          {
            "id": "b-prod",
            "label": "Total biaya pokok produksi",
            "kind": "input",
            "amount": 48375000,
            "indent": 1
          },
          {
            "id": "b-avail",
            "label": "Persediaan tersedia untuk dijual",
            "kind": "computed",
            "compute": [
              {
                "id": "b-beg"
              },
              {
                "id": "b-prod"
              }
            ],
            "indent": 1,
            "bold": true
          },
          {
            "id": "b-end",
            "label": "Persediaan akhir",
            "kind": "input",
            "amount": 10575000,
            "indent": 1
          },
          {
            "id": "b-cogs-before",
            "label": "Total harga pokok penjualan",
            "kind": "computed",
            "compute": [
              {
                "id": "b-avail"
              },
              {
                "id": "b-end",
                "sign": -1
              }
            ],
            "bold": true,
            "rule": "top"
          },
          {
            "id": "b-by",
            "label": "Dikurangi pendapatan produk sampingan",
            "kind": "input",
            "amount": 25000000,
            "indent": 1
          },
          {
            "id": "b-net-cogs",
            "label": "Harga pokok penjualan setelah pengurang",
            "kind": "computed",
            "compute": [
              {
                "id": "b-cogs-before"
              },
              {
                "id": "b-by",
                "sign": -1
              }
            ],
            "bold": true,
            "rule": "top"
          },
          {
            "id": "b-gp",
            "label": "Laba kotor",
            "kind": "computed",
            "compute": [
              {
                "id": "b-sales"
              },
              {
                "id": "b-net-cogs",
                "sign": -1
              }
            ],
            "bold": true
          },
          {
            "id": "b-sga",
            "label": "Beban pemasaran dan administrasi",
            "kind": "input",
            "amount": 4900000
          },
          {
            "id": "b-op",
            "label": "Laba operasi",
            "kind": "computed",
            "compute": [
              {
                "id": "b-gp"
              },
              {
                "id": "b-sga",
                "sign": -1
              }
            ],
            "bold": true,
            "rule": "double"
          }
        ]
      }
    },
    {
      "kind": "h3",
      "text": "Bagian B — TM 9 JIT dan Backflush Costing"
    },
    {
      "kind": "p",
      "text": "MAMAMIA Manufacturing Company menggunakan sistem JIT yang matang. Akun persediaannya adalah RIP dan Barang Jadi. Biaya konversi dibebankan ke COGS, lalu saldo persediaan disesuaikan pada akhir bulan. Tugas utama bagian ini adalah membuat jurnal, backflush bahan, dan akun T untuk RIP, FOH-Control, Finished Goods, dan COGS."
    },
    {
      "kind": "table",
      "headers": [
        "Transaksi / Saldo",
        "Angka Kunci"
      ],
      "rows": [
        [
          "Bahan baku diterima dan dibeli secara kredit",
          "Rp603.240.000"
        ],
        [
          "Bahan baku tidak langsung digunakan",
          "Rp2.000.000"
        ],
        [
          "Tenaga kerja langsung",
          "Rp534.000.000"
        ],
        [
          "Tenaga kerja tak langsung",
          "Rp680.000.000"
        ],
        [
          "Gaji pemasaran",
          "Rp580.000.000"
        ],
        [
          "Gaji administrasi",
          "Rp546.000.000"
        ],
        [
          "FOH-Control aktual yang ditutup ke COGS",
          "Rp867.400.000"
        ],
        [
          "Backflush RIP ke Finished Goods",
          "Rp421.440.000"
        ],
        [
          "Backflush Finished Goods ke COGS",
          "Rp179.440.000"
        ],
        [
          "Penyesuaian konversi kredit COGS",
          "Rp138.500.000"
        ]
      ],
      "caption": "Gunakan angka ini sebagai dasar jurnal dan akun T."
    },
    {
      "kind": "journal-builder",
      "spec": {
        "title": "Worksheet Jurnal JIT/Backflush MAMAMIA",
        "instruction": "Isi akun dan jumlah debit/kredit untuk transaksi utama. Angka mengikuti data MAMAMIA di simulasi; kosongkan kolom yang bukan debit/kredit dengan 0.",
        "currency": "Rp",
        "accountChoices": ["RIP", "Account Payable", "FOH-Control", "Indirect Material / Perlengkapan", "COGS", "Marketing Expense", "Administration Expense", "Salaries and Wages Expense / Payable", "Finished Goods"],
        "lines": [
          { "id": "mam-j1-dr", "account": "RIP", "debit": 603240000 },
          { "id": "mam-j1-cr", "account": "Account Payable", "credit": 603240000 },
          { "id": "mam-j2-dr", "account": "FOH-Control", "debit": 2000000 },
          { "id": "mam-j2-cr", "account": "Indirect Material / Perlengkapan", "credit": 2000000 },
          { "id": "mam-j3-dr1", "account": "COGS", "debit": 534000000 },
          { "id": "mam-j3-dr2", "account": "FOH-Control", "debit": 680000000 },
          { "id": "mam-j3-dr3", "account": "Marketing Expense", "debit": 580000000 },
          { "id": "mam-j3-dr4", "account": "Administration Expense", "debit": 546000000 },
          { "id": "mam-j3-cr", "account": "Salaries and Wages Expense / Payable", "credit": 2340000000 },
          { "id": "mam-j4-dr", "account": "COGS", "debit": 867400000 },
          { "id": "mam-j4-cr", "account": "FOH-Control", "credit": 867400000 },
          { "id": "mam-j5-dr", "account": "Finished Goods", "debit": 421440000 },
          { "id": "mam-j5-cr", "account": "RIP", "credit": 421440000 },
          { "id": "mam-j6-dr", "account": "COGS", "debit": 179440000 },
          { "id": "mam-j6-cr", "account": "Finished Goods", "credit": 179440000 },
          { "id": "mam-j7-dr1", "account": "RIP", "debit": 23100000 },
          { "id": "mam-j7-dr2", "account": "Finished Goods", "debit": 115400000 },
          { "id": "mam-j7-cr", "account": "COGS", "credit": 138500000 }
        ]
      }
    },
    {
      "kind": "builder",
      "instructions": "Isi akun kontrol COGS MAMAMIA. Baris total dan saldo akhir dihitung otomatis dari angka yang kamu masukkan.",
      "spec": {
        "entity": "MAMAMIA Manufacturing Company",
        "title": "COGS Control — Backflush Costing",
        "period": "Mei 2005",
        "currency": "Rp",
        "lines": [
          {
            "label": "Debit:",
            "kind": "header"
          },
          {
            "id": "cogs-dl",
            "label": "Tenaga kerja langsung dibebankan ke COGS",
            "kind": "input",
            "amount": 534000000,
            "indent": 1
          },
          {
            "id": "cogs-foh",
            "label": "FOH-Control dibebankan ke COGS",
            "kind": "input",
            "amount": 867400000,
            "indent": 1
          },
          {
            "id": "cogs-fg",
            "label": "Backflush Finished Goods ke COGS",
            "kind": "input",
            "amount": 179440000,
            "indent": 1
          },
          {
            "id": "cogs-total-debit",
            "label": "Total debit COGS sebelum penyesuaian",
            "kind": "computed",
            "compute": [
              {
                "id": "cogs-dl"
              },
              {
                "id": "cogs-foh"
              },
              {
                "id": "cogs-fg"
              }
            ],
            "bold": true,
            "rule": "top"
          },
          {
            "label": "Kredit / penyesuaian:",
            "kind": "header"
          },
          {
            "id": "cogs-adj",
            "label": "Penyesuaian konversi akhir bulan",
            "kind": "input",
            "amount": 138500000,
            "indent": 1
          },
          {
            "id": "cogs-ending",
            "label": "Saldo akhir COGS",
            "kind": "computed",
            "compute": [
              {
                "id": "cogs-total-debit"
              },
              {
                "id": "cogs-adj",
                "sign": -1
              }
            ],
            "bold": true,
            "rule": "double"
          }
        ]
      }
    }
    ,
    {
      "kind": "t-account-builder",
      "spec": {
        "title": "Worksheet Akun T MAMAMIA",
        "instruction": "Isi debit dan kredit pada akun T utama. Kolom yang tidak terpakai dibiarkan 0. Saldo akhir mengikuti data setelah penyesuaian akhir bulan.",
        "currency": "Rp",
        "accounts": [
          {
            "name": "RIP",
            "rows": [
              { "id": "rip-beg", "debitLabel": "Saldo awal", "debitAmount": 240300000, "creditLabel": "Backflush ke Finished Goods", "creditAmount": 421440000 },
              { "id": "rip-purchase", "debitLabel": "Pembelian bahan baku", "debitAmount": 603240000 },
              { "id": "rip-conv", "debitLabel": "Penyesuaian konversi", "debitAmount": 23100000 }
            ],
            "endingBalance": { "side": "debit", "amount": 445200000 }
          },
          {
            "name": "FOH-Control",
            "rows": [
              { "id": "foh-indirect", "debitLabel": "Bahan tidak langsung", "debitAmount": 2000000, "creditLabel": "Dibebankan ke COGS", "creditAmount": 867400000 },
              { "id": "foh-labor", "debitLabel": "Tenaga kerja tak langsung", "debitAmount": 680000000 },
              { "id": "foh-other", "debitLabel": "FOH aktual lainnya", "debitAmount": 185400000 }
            ]
          },
          {
            "name": "Finished Goods",
            "rows": [
              { "id": "fg-beg", "debitLabel": "Saldo awal", "debitAmount": 430600000, "creditLabel": "Backflush ke COGS", "creditAmount": 179440000 },
              { "id": "fg-rip", "debitLabel": "Backflush dari RIP", "debitAmount": 421440000 },
              { "id": "fg-conv", "debitLabel": "Penyesuaian konversi", "debitAmount": 115400000 }
            ],
            "endingBalance": { "side": "debit", "amount": 788000000 }
          },
          {
            "name": "COGS",
            "rows": [
              { "id": "cogs-dl", "debitLabel": "Tenaga kerja langsung", "debitAmount": 534000000, "creditLabel": "Penyesuaian konversi", "creditAmount": 138500000 },
              { "id": "cogs-foh", "debitLabel": "FOH dibebankan", "debitAmount": 867400000 },
              { "id": "cogs-fg", "debitLabel": "Backflush dari Finished Goods", "debitAmount": 179440000 }
            ],
            "endingBalance": { "side": "debit", "amount": 1442340000 }
          }
        ]
      }
    },

    {
      "kind": "h3",
      "text": "Bagian C — TM 10 Daftar Gaji dan Jurnal Tenaga Kerja"
    },
    {
      "kind": "p",
      "text": "Standar produksi seorang karyawan adalah 35 unit per jam dalam 6 jam sehari. Tarif upah Rp1.500 per jam. Untuk output di atas standar, insentif diberikan sebesar 70% dari tarif upah untuk ekuivalen jam kelebihan produksi."
    },
    {
      "kind": "table",
      "headers": [
        "Hari",
        "Unit Aktual",
        "Kontrol Upah"
      ],
      "rows": [
        [
          "Senin",
          "220",
          "Rp9.300"
        ],
        [
          "Selasa",
          "190",
          "Rp9.000"
        ],
        [
          "Rabu",
          "210",
          "Rp9.000"
        ],
        [
          "Kamis",
          "205",
          "Rp9.000"
        ],
        [
          "Jumat",
          "230",
          "Rp9.600"
        ]
      ],
      "caption": "Standar harian = 35 × 6 = 210 unit."
    },
    {
      "kind": "builder",
      "instructions": "Isi daftar gaji ringkas dan jurnal umum untuk mencatat gaji/upah karyawan.",
      "spec": {
        "entity": "Departemen Penyempurnaan",
        "title": "Daftar Gaji dan Jurnal Upah",
        "period": "Minggu pertama Maret",
        "currency": "Rp",
        "lines": [
          {
            "id": "pay-base",
            "label": "Upah reguler 5 hari × 6 jam × Rp1.500",
            "kind": "input",
            "amount": 45000
          },
          {
            "id": "pay-incentive",
            "label": "Insentif / premi atas kelebihan produksi",
            "kind": "input",
            "amount": 900
          },
          {
            "id": "pay-total",
            "label": "Total gaji dan upah",
            "kind": "computed",
            "compute": [
              {
                "id": "pay-base"
              },
              {
                "id": "pay-incentive"
              }
            ],
            "bold": true,
            "rule": "top"
          },
          {
            "label": "Jurnal:",
            "kind": "header"
          },
          {
            "id": "pay-dl",
            "label": "Debit Gaji dan Upah Langsung",
            "kind": "input",
            "amount": 45000,
            "indent": 1
          },
          {
            "id": "pay-foh",
            "label": "Debit Premi Lembur / FOH Control",
            "kind": "input",
            "amount": 900,
            "indent": 1
          },
          {
            "id": "pay-payable",
            "label": "Kredit Utang Gaji dan Upah",
            "kind": "input",
            "amount": 45900,
            "indent": 1,
            "rule": "double"
          }
        ]
      }
    },
    {
      "kind": "h3",
      "text": "Bagian D — TM 11 Overhead Pabrik"
    },
    {
      "kind": "p",
      "text": "Untuk menguji TM 11, gunakan data ringkas berikut. Estimasi FOH setahun Rp480.000.000 dan estimasi dasar pembebanan 24.000 jam tenaga kerja langsung. Jam aktual 25.000 jam dan FOH aktual Rp515.000.000."
    },
    {
      "kind": "builder",
      "instructions": "Hitung tarif overhead, FOH dibebankan, dan selisih overhead. Tulis angka tarif tanpa satuan rupiah per jam.",
      "spec": {
        "entity": "PT Overhead Praktik",
        "title": "Skedul FOH Dibebankan dan Aktual",
        "period": "Periode UAS",
        "currency": "Rp",
        "lines": [
          {
            "id": "foh-rate",
            "label": "Tarif overhead ditentukan di muka",
            "kind": "input",
            "amount": 20000
          },
          {
            "id": "foh-applied",
            "label": "FOH dibebankan = 25.000 jam × tarif",
            "kind": "input",
            "amount": 500000000
          },
          {
            "id": "foh-actual",
            "label": "FOH aktual",
            "kind": "input",
            "amount": 515000000
          },
          {
            "id": "foh-variance",
            "label": "Underapplied overhead",
            "kind": "computed",
            "compute": [
              {
                "id": "foh-actual"
              },
              {
                "id": "foh-applied",
                "sign": -1
              }
            ],
            "bold": true,
            "rule": "double"
          }
        ]
      }
    },
    {
      "kind": "h3",
      "text": "Bagian E — TM 12 Departementalisasi Overhead"
    },
    {
      "kind": "p",
      "text": "Perusahaan memiliki dua departemen jasa, yaitu Pemeliharaan dan Teknik, serta dua departemen produksi, yaitu Perakitan dan Pengemasan. Data anggaran biaya: Pemeliharaan Rp120.000, Teknik Rp540.000, Perakitan Rp800.000, dan Pengemasan Rp900.000. Dasar alokasi memakai jam kerja pemeliharaan dan jam kerja teknik."
    },
    {
      "kind": "table",
      "headers": [
        "Dasar Alokasi",
        "Pemeliharaan",
        "Teknik",
        "Perakitan",
        "Pengemasan"
      ],
      "rows": [
        [
          "Jam kerja pemeliharaan",
          "-",
          "400",
          "800",
          "200"
        ],
        [
          "Jam kerja teknik",
          "400",
          "-",
          "800",
          "400"
        ]
      ],
      "caption": "Untuk direct method, jasa antar-departemen jasa diabaikan. Untuk sequential method, Pemeliharaan dialokasikan ke Teknik terlebih dahulu."
    },
    {
      "kind": "table-fill",
      "spec": {
        "title": "Tabel Isian Alokasi Departemen Jasa",
        "instruction": "Isi hasil akhir biaya departemen produksi setelah alokasi. Tabel ini meniru format worksheet ringkas sebelum jawaban dilaporkan dalam skedul.",
        "currency": "Rp",
        "headers": ["Metode", "Perakitan", "Pengemasan", "Total Produksi"],
        "rows": [
          {
            "id": "direct-row",
            "label": "Direct method",
            "cells": [
              { "id": "direct-assembly-cell", "answer": 1256000, "placeholder": "Perakitan" },
              { "id": "direct-packaging-cell", "answer": 1104000, "placeholder": "Pengemasan" },
              { "id": "direct-total-cell", "answer": 2360000, "placeholder": "Total" }
            ]
          },
          {
            "id": "seq-row",
            "label": "Sequential method",
            "cells": [
              { "id": "seq-assembly-cell", "answer": 1251428, "placeholder": "Perakitan" },
              { "id": "seq-packaging-cell", "answer": 1108572, "placeholder": "Pengemasan" },
              { "id": "seq-total-cell", "answer": 2360000, "placeholder": "Total" }
            ]
          }
        ]
      }
    },
    {
      "kind": "builder",
      "instructions": "Isi anggaran departemen produksi setelah alokasi jasa. Gunakan pembulatan rupiah terdekat jika diperlukan.",
      "spec": {
        "entity": "Perusahaan Manufaktur",
        "title": "Skedul Alokasi Departemen Jasa",
        "period": "Simulasi UAS",
        "currency": "Rp",
        "lines": [
          {
            "label": "Direct method:",
            "kind": "header"
          },
          {
            "id": "direct-assembly",
            "label": "Perakitan setelah alokasi",
            "kind": "input",
            "amount": 1256000,
            "indent": 1
          },
          {
            "id": "direct-packaging",
            "label": "Pengemasan setelah alokasi",
            "kind": "input",
            "amount": 1104000,
            "indent": 1
          },
          {
            "id": "direct-total",
            "label": "Total biaya departemen produksi",
            "kind": "computed",
            "compute": [
              {
                "id": "direct-assembly"
              },
              {
                "id": "direct-packaging"
              }
            ],
            "bold": true,
            "rule": "top"
          },
          {
            "label": "Sequential method:",
            "kind": "header"
          },
          {
            "id": "seq-assembly",
            "label": "Perakitan setelah alokasi",
            "kind": "input",
            "amount": 1251428,
            "indent": 1
          },
          {
            "id": "seq-packaging",
            "label": "Pengemasan setelah alokasi",
            "kind": "input",
            "amount": 1108572,
            "indent": 1
          },
          {
            "id": "seq-total",
            "label": "Total biaya departemen produksi",
            "kind": "computed",
            "compute": [
              {
                "id": "seq-assembly"
              },
              {
                "id": "seq-packaging"
              }
            ],
            "bold": true,
            "rule": "double"
          }
        ]
      }
    },
    {
      "kind": "h3",
      "text": "Bagian F — TM 13 Activity Based Costing"
    },
    {
      "kind": "p",
      "text": "Bangtan Company memproduksi boneka dan bantal. Unit produksi boneka 750 unit dan bantal 500 unit. Direct material boneka Rp22.500.000 dan bantal Rp12.500.000. Direct labor boneka Rp25.000.000 dan bantal Rp20.000.000. Setup cost Rp8.000.000 memakai setup hours, design cost Rp3.950.000 memakai design change, dan lighting cost Rp3.300.000 memakai luas area."
    },
    {
      "kind": "table",
      "headers": [
        "Driver",
        "Boneka",
        "Bantal",
        "Total"
      ],
      "rows": [
        [
          "Setup hours",
          "375",
          "250",
          "625"
        ],
        [
          "Design change",
          "150",
          "100",
          "250"
        ],
        [
          "Luas area",
          "2.000 m²",
          "2.000 m²",
          "4.000 m²"
        ]
      ],
      "caption": "Klasifikasi aktivitas: setup = batch-level, design = product-level, lighting = plant/facility-level."
    },
    {
      "kind": "builder",
      "instructions": "Isi tarif aktivitas dan perhitungan kos ABC. Input sekarang menerima angka desimal, sehingga kos per unit Boneka dapat diisi 75093,33 atau 75093.33.",
      "spec": {
        "entity": "Bangtan Company",
        "title": "Activity Based Costing Report",
        "period": "Simulasi UAS",
        "currency": "Rp",
        "lines": [
          {
            "label": "Tarif aktivitas:",
            "kind": "header"
          },
          {
            "id": "abc-setup-rate",
            "label": "Setup rate per setup hour",
            "kind": "input",
            "amount": 12800,
            "indent": 1
          },
          {
            "id": "abc-design-rate",
            "label": "Design rate per design change",
            "kind": "input",
            "amount": 15800,
            "indent": 1
          },
          {
            "id": "abc-light-rate",
            "label": "Lighting rate per m²",
            "kind": "input",
            "amount": 825,
            "indent": 1
          },
          {
            "label": "Boneka:",
            "kind": "header"
          },
          {
            "id": "abc-boneka-foh",
            "label": "Total FOH ABC Boneka",
            "kind": "input",
            "amount": 8820000,
            "indent": 1
          },
          {
            "id": "abc-boneka-total",
            "label": "Total kos Boneka",
            "kind": "input",
            "amount": 56320000,
            "indent": 1
          },
          {
            "id": "abc-boneka-unit",
            "label": "Kos per unit Boneka",
            "kind": "input",
            "amount": 75093.33,
            "indent": 1
          },
          {
            "label": "Bantal:",
            "kind": "header"
          },
          {
            "id": "abc-bantal-foh",
            "label": "Total FOH ABC Bantal",
            "kind": "input",
            "amount": 6430000,
            "indent": 1
          },
          {
            "id": "abc-bantal-total",
            "label": "Total kos Bantal",
            "kind": "input",
            "amount": 38930000,
            "indent": 1
          },
          {
            "id": "abc-bantal-unit",
            "label": "Kos per unit Bantal",
            "kind": "input",
            "amount": 77860,
            "indent": 1,
            "rule": "double"
          }
        ]
      }
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Catatan Pemeriksaan Manual",
      "text": "Pada data MAMAMIA, narasi periode menyebut Mei 2005, tetapi salah satu kalimat transaksi menyebut April 2005. Simulasi ini menjaga substansi angka latihan dan memberi catatan agar periode dicocokkan kembali bila dipakai untuk bahan ajar final."
    }
  ]
}
;


// Batch 14 UX polish: navigasi baca dan checkpoint TM 12-14.
applyAkbiReadingUxPolish(AKBI_TM12_TM14_READINGS[12], {
  tm: 12,
  phase: 'pra_uas',
  focus: 'FOH departmentalization, producing department, service department, direct method, step method, dan departmental overhead rate',
  theory: 'Bisa membedakan production department, service department, direct departmental cost, dan indirect departmental cost.',
  formula: 'Bisa menghitung alokasi service department, total overhead departemen produksi, departmental rate, dan applied FOH departemental.',
  example: 'Bisa membandingkan direct method dan step method dari data departemen pembantu.',
  practice: 'Bisa mengisi tabel alokasi service department dan jurnal applied FOH berdasarkan tarif departemen.',
  trap: 'Tidak membebankan biaya service department langsung ke produk sebelum dialokasikan ke production department.',
  sourceAlignment: 'RPS TM 12, Tutor AKBI TM 13 FOH Departmentalization, dan Batch 10.',
  nextAction: 'Setelah TM 12, lanjut ke TM 13 untuk melihat ABC sebagai alternatif pembebanan overhead berbasis aktivitas.',
});

applyAkbiReadingUxPolish(AKBI_TM12_TM14_READINGS[13], {
  tm: 13,
  phase: 'pra_uas',
  focus: 'activity-based costing, activity cost pool, cost driver, activity rate, product cost distortion, dan ABM',
  theory: 'Bisa menjelaskan activity, cost pool, cost driver, unit-level, batch-level, product-level, dan facility-level activity.',
  formula: 'Bisa menghitung activity rate, FOH ABC per produk, total cost, unit cost, overcosted, dan undercosted.',
  example: 'Bisa membandingkan traditional costing dan ABC pada produk reguler dan custom.',
  practice: 'Bisa mengisi tabel activity rate dan pembebanan FOH ABC ke setiap produk.',
  trap: 'Tidak memilih cost driver hanya karena mudah dihitung; driver harus mencerminkan konsumsi aktivitas.',
  sourceAlignment: 'RPS TM 13, Carter Ch. 13, materi ABC existing, dan Batch 11.',
  nextAction: 'Setelah TM 13, lanjut ke TM 14 untuk review UAS dan latihan integrasi seluruh materi pasca-UTS.',
});

applyAkbiReadingUxPolish(AKBI_TM12_TM14_READINGS[14], {
  tm: 14,
  phase: 'pra_uas',
  focus: 'review UAS, integrasi TM 8-13, peta rumus, laporan praktik, dan latihan campuran',
  theory: 'Bisa menghubungkan joint cost, bahan, tenaga kerja, overhead, departmentalization, dan ABC dalam satu peta UAS.',
  formula: 'Bisa memilih formula yang tepat berdasarkan kata kunci soal, bukan menghafal urutan TM semata.',
  example: 'Bisa membaca soal integratif dan menentukan apakah kasus meminta alokasi joint cost, kontrol bahan, payroll, FOH, departementalisasi, atau ABC.',
  practice: 'Bisa mengerjakan simulasi UAS 80 soal dengan timer dan membaca pembahasan setelah submit.',
  trap: 'Tidak mencampur konsep ABC inventory control dengan Activity-Based Costing.',
  sourceAlignment: 'RPS TM 14 Review Materi UAS, source UAS tahun lalu, dan seluruh batch TM 8-13.',
  nextAction: 'Setelah TM 14, gunakan simulator UAS AKBI sebagai latihan final 90 menit dan cek ulang bank soal praktik yang masih lemah.',
});

export default AKBI_TM12_TM14_READINGS;
