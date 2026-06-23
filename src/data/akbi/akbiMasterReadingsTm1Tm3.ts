// =============================================================
// src/data/akbi/akbiMasterReadingsTm1Tm3.ts
// Batch 2 revision: Learning Flow & Theory Foundation TM 1 sampai TM 3.
// Target: merapikan alur belajar fondasi AKBI tanpa mengubah UI/UX dan tanpa menyentuh AKK201.
// Sumber kerja: RPS/Silabus AKBI 2026, Carter Cost Accounting 14th ed., dan data AKBI existing.
// =============================================================
import type { Reading } from '../../types';
import { applyAkbiReadingUxPolish } from './akbiReadingUxPolish';

export type AkbiMasterReading = Reading & {
  id: string;
  phase: 'pra_uts' | 'pra_uas';
  source: string;
  manualCheckCount: number;
};

export const AKBI_TM1_TM3_READINGS: Record<number, AkbiMasterReading> = {
  1: {
    "id": "akbi-tm-1",
    "tm": 1,
    "title": "Pengantar Akuntansi Biaya, Sistem Akuntansi Biaya, Konsep Dasar, dan Klasifikasi Biaya",
    "ref": "RPS AKBI TM 1 · Carter Cost Accounting Ch. 1–2 · CU 1–2 / IMN 1",
    "source": "SILABI-Akuntansi Biaya-2026.doc + Carter Cost Accounting 14th Edition + data AKBI existing",
    "phase": "pra_uts",
    "manualCheckCount": 0,
    "intro": "Akuntansi biaya adalah sistem informasi internal yang mengumpulkan, mengukur, mengakumulasi, menganalisis, dan melaporkan biaya untuk perencanaan, pengendalian, penentuan harga pokok, penilaian persediaan, serta pengambilan keputusan. TM 1 memperdalam konsep cost, expense, cost object, direct-indirect cost, product-period cost, elemen biaya produksi, sistem informasi biaya, ukuran nonkeuangan, dan etika akuntan manajemen.",
    "objectives": [
      "Menjelaskan pengertian, tujuan, dan ruang lingkup akuntansi biaya.",
      "Menghubungkan akuntansi biaya dengan fungsi planning, organizing, controlling, dan decision making.",
      "Membedakan cost, expense, loss, dan asset dalam konteks manufaktur.",
      "Menentukan cost object dan membedakan direct cost serta indirect cost.",
      "Mengklasifikasikan direct materials, direct labor, factory overhead, marketing expense, dan administrative expense.",
      "Membedakan product cost dan period cost serta menjelaskan alur biaya ke persediaan dan COGS.",
      "Menjelaskan prime cost, conversion cost, manufacturing cost, dan commercial expenses.",
      "Menjelaskan peran chart of accounts, coding, source documents, cost accounts, dan responsibility reporting.",
      "Menjelaskan ukuran nonkeuangan dan etika dalam penyusunan informasi biaya."
    ],
    "blocks": [
      {
        "kind": "h2",
        "text": "Orientasi TM 1"
      },
      {
        "kind": "p",
        "text": "TM 1 menjadi fondasi seluruh Akuntansi Biaya. Fokusnya bukan hanya menghafal istilah, tetapi memahami bagaimana informasi biaya dibentuk, diklasifikasikan, ditelusuri, dan dipakai oleh manajemen untuk perencanaan, pengendalian, penentuan harga pokok, penilaian persediaan, serta pengambilan keputusan."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Arah pembacaan modul",
        "text": "Gunakan urutan berpikir berikut: tentukan objek biaya, pahami apakah biaya dapat ditelusuri langsung, bedakan biaya produk dan biaya periode, lalu hubungkan hasil klasifikasi biaya dengan laporan manufaktur dan keputusan manajerial."
      },
      {
        "kind": "h2",
        "text": "Alur Belajar Cepat TM 1"
      },
      {
        "kind": "table",
        "headers": [
          "Tahap",
          "Fokus",
          "Pertanyaan kunci",
          "Output akhir"
        ],
        "rows": [
          [
            "1",
            "Cost object",
            "Biaya ini sedang dihitung untuk produk, pesanan, departemen, aktivitas, atau pelanggan yang mana?",
            "Objek biaya sudah jelas sebelum klasifikasi dilakukan"
          ],
          [
            "2",
            "Traceability",
            "Apakah biaya dapat ditelusuri langsung ke objek biaya secara ekonomis?",
            "Biaya dipisahkan menjadi direct cost dan indirect cost"
          ],
          [
            "3",
            "Manufacturing element",
            "Jika objeknya produk manufaktur, apakah biaya masuk direct material, direct labor, atau FOH?",
            "Product cost dapat dihitung tanpa mencampur biaya nonproduksi"
          ],
          [
            "4",
            "Timing recognition",
            "Apakah biaya melekat pada persediaan atau langsung menjadi beban periode?",
            "Product cost dan period cost tidak tertukar"
          ],
          [
            "5",
            "Decision use",
            "Informasi biaya dipakai untuk pricing, control, inventory valuation, atau keputusan manajerial?",
            "Data biaya terhubung dengan tujuan manajemen"
          ]
        ],
        "caption": "Peta ini dibuat agar mahasiswa tidak membaca TM 1 sebagai daftar istilah lepas. Setiap istilah harus dipakai untuk mengklasifikasikan biaya dalam kasus manufaktur."
      },
      {
        "kind": "h2",
        "text": "Formula Sheet Fondasi TM 1"
      },
      {
        "kind": "formula",
        "text": "Product Cost = Direct Materials + Direct Labor + Factory Overhead",
        "note": "Product cost disebut juga inventoriable cost karena melekat pada persediaan sampai barang dijual."
      },
      {
        "kind": "formula",
        "text": "Period Cost = Marketing Expense + Administrative Expense + biaya nonproduksi lain",
        "note": "Period cost langsung dibebankan pada periode terjadinya dan tidak masuk persediaan produk."
      },
      {
        "kind": "formula",
        "text": "Prime Cost = Direct Materials + Direct Labor\nConversion Cost = Direct Labor + Factory Overhead",
        "note": "Prime cost menekankan biaya utama pembentuk produk. Conversion cost menekankan biaya untuk mengubah bahan menjadi barang jadi."
      },
      {
        "kind": "example",
        "title": "Contoh Mini: Mengurai Biaya Produk dan Biaya Periode",
        "blocks": [
          {
            "kind": "p",
            "text": "PT Aruna memproduksi meja. Selama satu periode terdapat bahan kayu langsung Rp120.000.000, upah tukang langsung Rp80.000.000, depresiasi mesin pabrik Rp50.000.000, iklan Rp20.000.000, dan gaji staf kantor Rp30.000.000."
          },
          {
            "kind": "formula",
            "text": "Product Cost = 120.000.000 + 80.000.000 + 50.000.000 = Rp250.000.000\nPeriod Cost = 20.000.000 + 30.000.000 = Rp50.000.000\nPrime Cost = 120.000.000 + 80.000.000 = Rp200.000.000\nConversion Cost = 80.000.000 + 50.000.000 = Rp130.000.000"
          },
          {
            "kind": "callout",
            "variant": "key",
            "title": "Inti pembacaan",
            "text": "Depresiasi mesin pabrik bukan period cost karena mesin dipakai untuk produksi. Sebaliknya, iklan dan gaji staf kantor tidak masuk product cost karena tidak melekat pada produk manufaktur."
          }
        ]
      },
      {
        "kind": "solution-reveal",
        "title": "Latihan Aktif: Klasifikasikan Lima Biaya",
        "prompt": "Klasifikasikan biaya berikut: bahan kulit untuk tas, gaji satpam pabrik, komisi sales, upah penjahit tas, dan gaji direktur keuangan.",
        "blocks": [
          {
            "kind": "ul",
            "items": [
              "Bahan kulit untuk tas: direct material, product cost.",
              "Gaji satpam pabrik: factory overhead, product cost tidak langsung.",
              "Komisi sales: selling/marketing expense, period cost.",
              "Upah penjahit tas: direct labor, product cost.",
              "Gaji direktur keuangan: administrative expense, period cost."
            ]
          },
          {
            "kind": "callout",
            "variant": "warning",
            "title": "Jebakan UTS",
            "text": "Biaya yang terjadi di area pabrik tidak otomatis menjadi direct cost. Jika tidak dapat ditelusuri langsung ke produk tertentu, biaya tersebut masuk FOH."
          }
        ]
      },
      {
        "kind": "h2",
        "text": "Peta Submateri TM 1"
      },
      {
        "kind": "table",
        "headers": [
          "No",
          "Submateri",
          "Kedalaman yang perlu dikuasai",
          "Output belajar"
        ],
        "rows": [
          [
            "1",
            "Definisi dan ruang lingkup akuntansi biaya",
            "Akuntansi biaya sebagai sistem informasi internal, bukan sekadar pencatatan biaya",
            "Mahasiswa mampu menjelaskan fungsi akuntansi biaya dalam perusahaan manufaktur"
          ],
          [
            "2",
            "Fungsi manajemen",
            "Planning, organizing, controlling, decision making, management by exception",
            "Mahasiswa memahami mengapa data biaya diperlukan untuk tindakan manajemen"
          ],
          [
            "3",
            "Cost, expense, loss, asset",
            "Perbedaan pengorbanan sumber daya, beban periode, kerugian, dan biaya yang masih memberi manfaat",
            "Mahasiswa tidak menyamakan cost dengan expense"
          ],
          [
            "4",
            "Cost object dan keterlacakan",
            "Produk, job, departemen, aktivitas, pelanggan, proyek, proses",
            "Mahasiswa mampu menentukan direct dan indirect cost berdasarkan objek biaya"
          ],
          [
            "5",
            "Klasifikasi biaya manufaktur",
            "Direct materials, direct labor, factory overhead",
            "Mahasiswa mampu membentuk product cost"
          ],
          [
            "6",
            "Product cost dan period cost",
            "Inventoriable cost vs biaya periode",
            "Mahasiswa mampu menjelaskan alur biaya ke persediaan dan laba rugi"
          ],
          [
            "7",
            "Sistem informasi biaya",
            "Chart of accounts, coding, cost accounts, responsibility reports",
            "Mahasiswa memahami struktur data biaya"
          ],
          [
            "8",
            "Etika dan ukuran nonkeuangan",
            "Kompetensi, kerahasiaan, integritas, objektivitas, kualitas, waktu, defect rate",
            "Mahasiswa mampu menghubungkan biaya dengan kinerja dan perilaku etis"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Hakikat Akuntansi Biaya"
      },
      {
        "kind": "p",
        "text": "Akuntansi biaya adalah proses mengumpulkan, mengukur, mengakumulasi, menganalisis, menyiapkan, menafsirkan, dan mengomunikasikan informasi biaya. Informasi tersebut terutama digunakan oleh pihak internal, yaitu manajemen, untuk menjalankan fungsi perencanaan dan pengendalian. Karena orientasinya internal, akuntansi biaya harus lebih rinci daripada akuntansi keuangan."
      },
      {
        "kind": "p",
        "text": "Dalam perusahaan manufaktur, akuntansi biaya menentukan bagaimana direct materials, direct labor, dan factory overhead melekat pada persediaan sampai produk dijual. Ketika produk masih berada di gudang atau dalam proses, biaya tersebut masih bersifat aset. Saat produk terjual, biaya tersebut berubah menjadi expense melalui Cost of Goods Sold."
      },
      {
        "kind": "table",
        "headers": [
          "Aspek",
          "Akuntansi Keuangan",
          "Akuntansi Manajemen dan Akuntansi Biaya"
        ],
        "rows": [
          [
            "Pengguna utama",
            "Pihak eksternal seperti investor, kreditor, pemerintah, dan pemegang saham",
            "Pihak internal seperti manajer produksi, manajer pemasaran, controller, dan pimpinan perusahaan"
          ],
          [
            "Orientasi waktu",
            "Lebih banyak historis",
            "Historis, saat ini, dan proyeksi masa depan"
          ],
          [
            "Tingkat rincian",
            "Ringkas dan agregat",
            "Sangat rinci menurut produk, pesanan, proses, departemen, aktivitas, atau pelanggan"
          ],
          [
            "Standar pelaporan",
            "Mengikuti standar akuntansi keuangan",
            "Disusun berdasarkan manfaat manajerial dan kebutuhan pengendalian internal"
          ],
          [
            "Contoh output",
            "Laporan laba rugi, laporan posisi keuangan, laporan arus kas",
            "Laporan kos produksi, laporan variance, laporan biaya departemen, laporan biaya kualitas, laporan harga pokok"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Fungsi Akuntansi Biaya dalam Manajemen"
      },
      {
        "kind": "p",
        "text": "Akuntansi biaya mendukung manajemen melalui siklus planning, organizing, controlling, dan decision making. Data biaya tidak berhenti pada pencatatan angka. Data tersebut dipakai untuk merencanakan operasi, mengarahkan penggunaan sumber daya, memantau penyimpangan, dan memilih alternatif tindakan yang paling rasional."
      },
      {
        "kind": "table",
        "headers": [
          "Fungsi",
          "Makna dalam akuntansi biaya",
          "Contoh penggunaan"
        ],
        "rows": [
          [
            "Planning",
            "Menentukan tujuan, anggaran, standar biaya, kapasitas produksi, dan kebutuhan sumber daya",
            "Menyusun anggaran bahan baku, anggaran tenaga kerja, dan tarif overhead pabrik"
          ],
          [
            "Organizing",
            "Membagi tanggung jawab biaya ke departemen, proses, atau pusat pertanggungjawaban",
            "Menentukan departemen produksi, departemen jasa, dan cost center"
          ],
          [
            "Controlling",
            "Membandingkan biaya aktual dengan anggaran atau standar, lalu menelusuri penyebab selisih",
            "Menganalisis variance bahan, tenaga kerja, dan overhead"
          ],
          [
            "Decision making",
            "Memilih alternatif tindakan berdasarkan data biaya relevan",
            "Menentukan harga pesanan khusus, make or buy, menutup atau melanjutkan lini produk"
          ],
          [
            "Management by exception",
            "Memusatkan perhatian pada penyimpangan material, bukan semua transaksi kecil",
            "Manajemen hanya menindaklanjuti variance yang signifikan"
          ]
        ]
      },
      {
        "kind": "h3",
        "text": "Controller dan Cost Department"
      },
      {
        "kind": "p",
        "text": "Dalam organisasi manufaktur, controller adalah pejabat yang bertanggung jawab atas sistem informasi akuntansi, pelaporan internal, penganggaran, analisis kinerja, dan pengendalian biaya. Cost department mendukung controller dengan mengumpulkan data biaya, menyiapkan laporan biaya, mengelola cost records, dan menyediakan informasi yang dapat ditindaklanjuti oleh manajer operasional."
      },
      {
        "kind": "table",
        "headers": [
          "Unit atau peran",
          "Tanggung jawab utama",
          "Hubungan dengan AKBI"
        ],
        "rows": [
          [
            "Controller",
            "Merancang sistem pelaporan, mengawasi anggaran, memastikan laporan biaya andal",
            "Menjaga agar informasi biaya relevan untuk keputusan dan pengendalian"
          ],
          [
            "Cost accountant",
            "Mengumpulkan dan menganalisis biaya produk, departemen, aktivitas, dan pesanan",
            "Menyusun job cost sheet, cost of production report, dan analisis overhead"
          ],
          [
            "Production manager",
            "Mengelola operasi produksi dan efisiensi pemakaian sumber daya",
            "Menggunakan laporan biaya untuk memperbaiki proses"
          ],
          [
            "Department supervisor",
            "Bertanggung jawab atas biaya pada area kerja tertentu",
            "Menjadi dasar responsibility accounting"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Cost, Expense, Loss, dan Asset"
      },
      {
        "kind": "p",
        "text": "Cost adalah pengorbanan sumber daya yang diukur dalam satuan moneter untuk memperoleh barang atau jasa yang diharapkan memberi manfaat. Expense adalah cost yang manfaatnya sudah dikonsumsi untuk menghasilkan pendapatan pada periode berjalan. Loss adalah pengorbanan yang tidak menghasilkan manfaat ekonomi normal, sedangkan asset adalah cost yang manfaatnya masih akan diterima pada masa mendatang."
      },
      {
        "kind": "formula",
        "text": "Materials Inventory → Work in Process → Finished Goods → Cost of Goods Sold",
        "note": "Alur ini menunjukkan kapan biaya masih menjadi aset persediaan dan kapan berubah menjadi expense."
      },
      {
        "kind": "table",
        "headers": [
          "Istilah",
          "Definisi operasional",
          "Contoh"
        ],
        "rows": [
          [
            "Cost",
            "Pengorbanan sumber daya untuk memperoleh manfaat ekonomi",
            "Pembelian bahan baku yang belum digunakan"
          ],
          [
            "Expense",
            "Cost yang manfaatnya sudah digunakan dalam periode berjalan",
            "Harga pokok produk yang sudah dijual"
          ],
          [
            "Loss",
            "Pengorbanan yang tidak normal atau tidak menghasilkan manfaat sesuai rencana",
            "Kerugian karena produk rusak abnormal"
          ],
          [
            "Asset",
            "Cost yang masih memiliki manfaat masa depan",
            "Persediaan bahan baku, barang dalam proses, barang jadi"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Cost Object dan Keterlacakan Biaya"
      },
      {
        "kind": "p",
        "text": "Cost object adalah objek yang ingin dihitung biayanya. Objek ini dapat berupa produk, pesanan, departemen, proses, aktivitas, pelanggan, proyek, atau saluran distribusi. Suatu biaya disebut direct cost jika dapat ditelusuri secara langsung dan ekonomis ke cost object tertentu. Biaya disebut indirect cost jika tidak dapat ditelusuri langsung secara ekonomis dan perlu dialokasikan."
      },
      {
        "kind": "table",
        "headers": [
          "Cost object",
          "Direct cost yang mungkin muncul",
          "Indirect cost yang mungkin muncul"
        ],
        "rows": [
          [
            "Unit produk",
            "Bahan utama yang masuk ke produk, upah operator langsung",
            "Gaji supervisor pabrik, depresiasi gedung pabrik"
          ],
          [
            "Job atau pesanan",
            "Bahan khusus untuk job, jam tenaga kerja job tertentu",
            "Listrik pabrik yang dipakai bersama"
          ],
          [
            "Departemen produksi",
            "Gaji supervisor departemen, depresiasi mesin departemen",
            "Asuransi gedung pabrik yang dipakai banyak departemen"
          ],
          [
            "Pelanggan",
            "Biaya pengiriman khusus pelanggan tertentu",
            "Biaya sistem layanan pelanggan umum"
          ],
          [
            "Aktivitas",
            "Biaya teknisi setup untuk aktivitas setup",
            "Biaya gedung umum yang menaungi banyak aktivitas"
          ]
        ]
      },
      {
        "kind": "callout",
        "variant": "key",
        "title": "Kunci direct vs indirect",
        "text": "Satu biaya dapat menjadi direct cost untuk satu cost object, tetapi menjadi indirect cost untuk cost object lain. Gaji supervisor dapat ditelusuri langsung ke departemen tertentu, tetapi tidak langsung ke unit produk tertentu."
      },
      {
        "kind": "h2",
        "text": "Klasifikasi Biaya Manufaktur"
      },
      {
        "kind": "p",
        "text": "Dalam perusahaan manufaktur, product cost terdiri dari direct materials, direct labor, dan factory overhead. Direct materials adalah bahan utama yang menjadi bagian produk dan dapat ditelusuri langsung. Direct labor adalah tenaga kerja yang mengubah bahan menjadi produk dan dapat ditelusuri langsung. Factory overhead mencakup semua biaya produksi selain direct materials dan direct labor."
      },
      {
        "kind": "table",
        "headers": [
          "Komponen",
          "Definisi",
          "Contoh",
          "Perlakuan"
        ],
        "rows": [
          [
            "Direct materials",
            "Bahan utama yang masuk ke produk dan dapat ditelusuri langsung",
            "Kain untuk kemeja, tepung untuk roti, kayu untuk meja",
            "Masuk Work in Process saat digunakan"
          ],
          [
            "Direct labor",
            "Upah pekerja yang secara langsung mengolah produk",
            "Upah penjahit, operator mesin produksi, assembler",
            "Masuk Work in Process"
          ],
          [
            "Factory overhead",
            "Biaya produksi selain direct materials dan direct labor",
            "Bahan penolong, tenaga kerja tidak langsung, listrik pabrik, depresiasi mesin, asuransi pabrik",
            "Dikumpulkan dalam Factory Overhead lalu dibebankan ke produksi"
          ]
        ]
      },
      {
        "kind": "h3",
        "text": "Prime Cost dan Conversion Cost"
      },
      {
        "kind": "formula",
        "text": "Prime Cost = Direct Materials + Direct Labor",
        "note": "Prime cost menunjukkan biaya utama yang dapat ditelusuri langsung ke produk."
      },
      {
        "kind": "formula",
        "text": "Conversion Cost = Direct Labor + Factory Overhead",
        "note": "Conversion cost menunjukkan biaya untuk mengubah bahan baku menjadi barang jadi."
      },
      {
        "kind": "table",
        "headers": [
          "Rumus",
          "Makna",
          "Kapan dipakai"
        ],
        "rows": [
          [
            "Manufacturing Cost = DM + DL + FOH",
            "Total biaya produksi periode berjalan",
            "Laporan harga pokok produksi"
          ],
          [
            "Prime Cost = DM + DL",
            "Biaya utama yang langsung melekat pada produk",
            "Analisis struktur biaya langsung"
          ],
          [
            "Conversion Cost = DL + FOH",
            "Biaya konversi bahan menjadi produk",
            "Process costing dan analisis efisiensi produksi"
          ],
          [
            "Commercial Expenses = Marketing + Administrative Expenses",
            "Biaya nonproduksi",
            "Laporan laba rugi"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Product Cost dan Period Cost"
      },
      {
        "kind": "p",
        "text": "Product cost adalah biaya yang melekat pada persediaan sampai produk dijual. Period cost adalah biaya yang langsung dibebankan pada periode terjadinya karena tidak melekat pada proses produksi. Kesalahan mengklasifikasikan biaya pemasaran atau administrasi sebagai product cost akan membuat harga pokok produksi terlalu tinggi dan laba periode menjadi tidak wajar."
      },
      {
        "kind": "table",
        "headers": [
          "Kategori",
          "Komponen",
          "Masuk persediaan?",
          "Masuk laba rugi kapan?"
        ],
        "rows": [
          [
            "Product cost",
            "Direct materials, direct labor, factory overhead",
            "Ya",
            "Saat produk dijual melalui COGS"
          ],
          [
            "Period cost",
            "Marketing expenses dan administrative expenses",
            "Tidak",
            "Langsung pada periode berjalan"
          ],
          [
            "Selling cost",
            "Iklan, komisi penjualan, ongkos kirim penjualan",
            "Tidak",
            "Saat terjadi"
          ],
          [
            "Administrative cost",
            "Gaji direksi, akuntansi kantor pusat, legal umum",
            "Tidak",
            "Saat terjadi"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Sistem Informasi Akuntansi Biaya"
      },
      {
        "kind": "p",
        "text": "Sistem informasi akuntansi biaya menghubungkan dokumen sumber, akun biaya, catatan pembantu, laporan tanggung jawab, dan laporan manajemen. Sistem yang baik memungkinkan biaya ditelusuri ke produk, departemen, aktivitas, dan pihak yang bertanggung jawab."
      },
      {
        "kind": "table",
        "headers": [
          "Elemen sistem",
          "Fungsi",
          "Contoh dalam AKBI"
        ],
        "rows": [
          [
            "Chart of accounts",
            "Memberi struktur akun biaya",
            "Materials Inventory, Work in Process, Finished Goods, Factory Overhead Control"
          ],
          [
            "Coding",
            "Memberi kode pada produk, job, departemen, aktivitas, dan akun",
            "Kode Job 201, Departemen Cutting, akun FOH"
          ],
          [
            "Source documents",
            "Menjadi bukti awal transaksi biaya",
            "Purchase invoice, materials requisition, labor time ticket, vendor invoice"
          ],
          [
            "Cost accounts",
            "Mencatat rincian biaya untuk pengendalian",
            "Job cost sheet, kartu bahan, laporan biaya departemen"
          ],
          [
            "Responsibility report",
            "Melaporkan biaya menurut pusat tanggung jawab",
            "Laporan biaya departemen produksi dan jasa"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Ukuran Nonkeuangan dan Kinerja Operasional"
      },
      {
        "kind": "p",
        "text": "Data biaya perlu dilengkapi ukuran nonkeuangan karena efisiensi produksi tidak selalu terlihat dari rupiah saja. Waktu tunggu, waktu inspeksi, waktu pemindahan, defect rate, rework rate, dan produktivitas tenaga kerja membantu manajemen memahami penyebab biaya."
      },
      {
        "kind": "table",
        "headers": [
          "Ukuran",
          "Makna",
          "Hubungan dengan biaya"
        ],
        "rows": [
          [
            "Processing time",
            "Waktu saat produk benar-benar diproses",
            "Semakin efisien proses, semakin rendah biaya konversi per unit"
          ],
          [
            "Waiting time",
            "Waktu menunggu sebelum diproses",
            "Waktu tunggu tinggi meningkatkan biaya kapasitas menganggur"
          ],
          [
            "Moving time",
            "Waktu pemindahan bahan atau produk",
            "Pemindahan berlebih menambah biaya handling"
          ],
          [
            "Inspection time",
            "Waktu pemeriksaan kualitas",
            "Penting untuk mutu, tetapi jika berlebihan dapat menunjukkan proses belum stabil"
          ],
          [
            "Defect rate",
            "Persentase produk cacat",
            "Defect tinggi meningkatkan scrap, spoilage, dan rework"
          ]
        ]
      },
      {
        "kind": "formula",
        "text": "Manufacturing Cycle Efficiency = Processing Time ÷ (Processing Time + Inspection Time + Moving Time + Waiting Time)",
        "note": "Rumus ini dipakai untuk melihat proporsi waktu bernilai tambah dalam siklus manufaktur."
      },
      {
        "kind": "h2",
        "text": "Etika Akuntan Manajemen"
      },
      {
        "kind": "p",
        "text": "Informasi biaya dapat memengaruhi harga, bonus, evaluasi kinerja, keputusan produksi, dan laporan laba. Karena itu, akuntan biaya harus menjaga kompetensi, kerahasiaan, integritas, dan objektivitas. Manipulasi alokasi overhead atau penyembunyian variance dapat membuat keputusan manajemen menjadi keliru."
      },
      {
        "kind": "table",
        "headers": [
          "Prinsip etika",
          "Makna",
          "Risiko jika dilanggar"
        ],
        "rows": [
          [
            "Kompetensi",
            "Menyusun informasi biaya dengan kemampuan profesional dan data yang memadai",
            "Salah hitung harga pokok dan salah interpretasi kinerja"
          ],
          [
            "Kerahasiaan",
            "Menjaga data biaya, harga, formula, dan strategi perusahaan",
            "Kebocoran informasi strategis ke pesaing"
          ],
          [
            "Integritas",
            "Tidak memanipulasi data untuk kepentingan pihak tertentu",
            "Budget slack, manipulasi variance, atau laba semu"
          ],
          [
            "Objektivitas",
            "Melaporkan data biaya secara wajar dan tidak bias",
            "Keputusan harga, produksi, dan evaluasi kinerja menjadi menyesatkan"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Materi Praktik TM 1"
      },
      {
        "kind": "example",
        "title": "Klasifikasi biaya pada perusahaan kemeja",
        "blocks": [
          {
            "kind": "p",
            "text": "Perusahaan kemeja memiliki biaya berikut: kain, benang utama, upah penjahit, gaji kepala gudang pabrik, listrik pabrik, iklan, dan gaji direktur utama."
          },
          {
            "kind": "table",
            "headers": [
              "Biaya",
              "Klasifikasi",
              "Alasan"
            ],
            "rows": [
              [
                "Kain",
                "Direct materials",
                "Bahan utama yang menjadi bagian produk dan dapat ditelusuri ke kemeja"
              ],
              [
                "Benang utama",
                "Direct materials",
                "Jika material dan dapat ditelusuri langsung ke produk, masuk bahan langsung"
              ],
              [
                "Upah penjahit",
                "Direct labor",
                "Pekerja langsung mengubah bahan menjadi kemeja"
              ],
              [
                "Gaji kepala gudang pabrik",
                "Factory overhead",
                "Mendukung produksi tetapi tidak mengerjakan unit produk secara langsung"
              ],
              [
                "Listrik pabrik",
                "Factory overhead",
                "Biaya produksi tidak langsung"
              ],
              [
                "Iklan",
                "Marketing expense",
                "Biaya penjualan, bukan biaya produksi"
              ],
              [
                "Gaji direktur utama",
                "Administrative expense",
                "Biaya administrasi umum"
              ]
            ]
          }
        ]
      },
      {
        "kind": "h2",
        "text": "Practice Case Batch 12B - Data Soal Terlihat dan Workspace Klasifikasi"
      },
      {
        "kind": "callout",
        "variant": "key",
        "title": "Standar soal AKBI Batch 12B",
        "text": "Setiap latihan numerik atau klasifikasi harus menampilkan data kasus sebelum mahasiswa mengisi jawaban. Urutannya adalah konteks, data diketahui, instruksi, workspace, kunci, dan pembahasan. Pola ini dipakai agar mahasiswa tidak diminta mengisi angka atau kategori tanpa sumber data yang terlihat."
      },
      {
        "kind": "table",
        "caption": "Data kasus memakai item biaya yang sudah muncul pada contoh TM 1. Tidak ada angka baru yang ditambahkan pada latihan klasifikasi ini.",
        "headers": [
          "No",
          "Item biaya PT Sagara Apparel",
          "Konteks singkat"
        ],
        "rows": [
          [
            "1",
            "Kain",
            "Bahan utama yang menjadi bagian kemeja"
          ],
          [
            "2",
            "Benang utama",
            "Bahan yang dapat ditelusuri langsung ke produk jika pemakaiannya material"
          ],
          [
            "3",
            "Upah penjahit",
            "Pekerja yang secara langsung mengubah bahan menjadi kemeja"
          ],
          [
            "4",
            "Gaji kepala gudang pabrik",
            "Mendukung aktivitas pabrik, tetapi tidak mengerjakan unit produk secara langsung"
          ],
          [
            "5",
            "Listrik pabrik",
            "Biaya produksi tidak langsung yang mendukung proses manufaktur"
          ],
          [
            "6",
            "Iklan",
            "Aktivitas pemasaran untuk menjual produk"
          ],
          [
            "7",
            "Gaji direktur utama",
            "Biaya administrasi umum perusahaan"
          ]
        ]
      },
      {
        "kind": "table-fill",
        "spec": {
          "title": "Workspace Klasifikasi Biaya TM 1",
          "instruction": "Gunakan data kasus di atas. Isi kategori biaya dan tentukan apakah item tersebut termasuk product cost atau period cost. Jawaban harus berbasis cost object produk kemeja.",
          "currency": "",
          "headers": [
            "Item biaya",
            "Kategori biaya",
            "Product / Period"
          ],
          "rows": [
            {
              "id": "tm1-kain",
              "label": "Kain",
              "cells": [
                { "id": "tm1-kain-category", "answer": "Direct materials", "placeholder": "contoh: Direct materials" },
                { "id": "tm1-kain-costtype", "answer": "Product cost", "placeholder": "Product cost / Period cost" }
              ]
            },
            {
              "id": "tm1-benang",
              "label": "Benang utama",
              "cells": [
                { "id": "tm1-benang-category", "answer": "Direct materials", "placeholder": "kategori biaya" },
                { "id": "tm1-benang-costtype", "answer": "Product cost", "placeholder": "Product cost / Period cost" }
              ]
            },
            {
              "id": "tm1-upah-penjahit",
              "label": "Upah penjahit",
              "cells": [
                { "id": "tm1-upah-category", "answer": "Direct labor", "placeholder": "kategori biaya" },
                { "id": "tm1-upah-costtype", "answer": "Product cost", "placeholder": "Product cost / Period cost" }
              ]
            },
            {
              "id": "tm1-gudang",
              "label": "Gaji kepala gudang pabrik",
              "cells": [
                { "id": "tm1-gudang-category", "answer": "Factory overhead", "placeholder": "kategori biaya" },
                { "id": "tm1-gudang-costtype", "answer": "Product cost", "placeholder": "Product cost / Period cost" }
              ]
            },
            {
              "id": "tm1-listrik",
              "label": "Listrik pabrik",
              "cells": [
                { "id": "tm1-listrik-category", "answer": "Factory overhead", "placeholder": "kategori biaya" },
                { "id": "tm1-listrik-costtype", "answer": "Product cost", "placeholder": "Product cost / Period cost" }
              ]
            },
            {
              "id": "tm1-iklan",
              "label": "Iklan",
              "cells": [
                { "id": "tm1-iklan-category", "answer": "Marketing expense", "placeholder": "kategori biaya" },
                { "id": "tm1-iklan-costtype", "answer": "Period cost", "placeholder": "Product cost / Period cost" }
              ]
            },
            {
              "id": "tm1-direktur",
              "label": "Gaji direktur utama",
              "cells": [
                { "id": "tm1-direktur-category", "answer": "Administrative expense", "placeholder": "kategori biaya" },
                { "id": "tm1-direktur-costtype", "answer": "Period cost", "placeholder": "Product cost / Period cost" }
              ]
            }
          ]
        }
      },
      {
        "kind": "solution-reveal",
        "title": "Pembahasan klasifikasi biaya TM 1",
        "prompt": "Buka setelah workspace klasifikasi dikerjakan.",
        "blocks": [
          {
            "kind": "p",
            "text": "Logika utama TM 1 adalah menentukan cost object terlebih dahulu. Dalam kasus ini cost object-nya adalah produk kemeja. Item yang dapat ditelusuri langsung ke produk menjadi direct materials atau direct labor. Item produksi yang tidak langsung menjadi factory overhead. Iklan dan administrasi umum tidak masuk persediaan karena merupakan period cost."
          },
          {
            "kind": "table",
            "headers": [
              "Item",
              "Jawaban",
              "Alasan ringkas"
            ],
            "rows": [
              ["Kain", "Direct materials; product cost", "Bahan utama yang melekat pada produk"],
              ["Benang utama", "Direct materials; product cost", "Dapat ditelusuri ke produk jika material dan menjadi bagian produk"],
              ["Upah penjahit", "Direct labor; product cost", "Tenaga kerja langsung mengubah bahan menjadi produk"],
              ["Gaji kepala gudang pabrik", "Factory overhead; product cost", "Mendukung produksi, tetapi tidak langsung ke unit produk"],
              ["Listrik pabrik", "Factory overhead; product cost", "Biaya produksi tidak langsung"],
              ["Iklan", "Marketing expense; period cost", "Terkait penjualan, bukan manufaktur"],
              ["Gaji direktur utama", "Administrative expense; period cost", "Administrasi umum perusahaan, bukan produksi"]
            ]
          }
        ]
      },
      {
        "kind": "h2",
        "text": "Kesalahan Umum TM 1"
      },
      {
        "kind": "table",
        "headers": [
          "Kesalahan",
          "Koreksi"
        ],
        "rows": [
          [
            "Menyamakan cost dan expense",
            "Cost belum tentu menjadi expense. Product cost menjadi expense saat produk dijual."
          ],
          [
            "Menentukan direct cost tanpa cost object",
            "Direct atau indirect harus selalu dikaitkan dengan cost object."
          ],
          [
            "Memasukkan biaya iklan ke product cost",
            "Iklan adalah marketing expense dan period cost."
          ],
          [
            "Menganggap factory overhead tidak penting karena tidak langsung",
            "FOH tetap product cost dan harus dibebankan ke produksi."
          ],
          [
            "Mengabaikan etika",
            "Data biaya dapat memengaruhi keputusan besar, sehingga objektivitas wajib dijaga."
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Latihan Pemahaman TM 1"
      },
      {
        "kind": "ol",
        "items": [
          "Jelaskan perbedaan cost, expense, loss, dan asset dengan contoh manufaktur.",
          "Tentukan cost object untuk produk, job, departemen, proses, aktivitas, pelanggan, dan proyek.",
          "Klasifikasikan biaya ke direct materials, direct labor, factory overhead, marketing expense, atau administrative expense.",
          "Hitung manufacturing cost, prime cost, dan conversion cost jika data biaya tersedia.",
          "Jelaskan hubungan chart of accounts, coding, source documents, dan cost accounts dalam sistem informasi biaya."
        ]
      },
      {
        "kind": "h2",
        "text": "Ringkasan TM 1"
      },
      {
        "kind": "p",
        "text": "TM 1 menempatkan akuntansi biaya sebagai sistem informasi internal yang mengubah data biaya menjadi dasar perencanaan, pengendalian, penentuan harga pokok, evaluasi kinerja, dan keputusan manajerial. Konsep cost object, direct-indirect cost, product-period cost, elemen biaya produksi, sistem informasi biaya, ukuran nonkeuangan, dan etika menjadi landasan bagi seluruh TM berikutnya."
      },
      {
        "kind": "h2",
        "text": "Checklist Kelengkapan TM 1"
      },
      {
        "kind": "table",
        "headers": [
          "Komponen",
          "Status"
        ],
        "rows": [
          [
            "Definisi dan ruang lingkup akuntansi biaya",
            "Sudah diperdalam"
          ],
          [
            "Fungsi planning, organizing, controlling, decision making",
            "Sudah masuk"
          ],
          [
            "Controller dan cost department",
            "Sudah masuk"
          ],
          [
            "Cost, expense, loss, asset",
            "Sudah masuk"
          ],
          [
            "Cost object dan keterlacakan biaya",
            "Sudah masuk"
          ],
          [
            "Direct materials, direct labor, factory overhead",
            "Sudah masuk"
          ],
          [
            "Product cost dan period cost",
            "Sudah masuk"
          ],
          [
            "Prime cost, conversion cost, manufacturing cost",
            "Sudah masuk"
          ],
          [
            "Sistem informasi biaya dan responsibility reporting",
            "Sudah masuk"
          ],
          [
            "Etika dan ukuran nonkeuangan",
            "Sudah masuk"
          ]
        ]
      }
    ]
  },
  2: {
    "id": "akbi-tm-2",
    "tm": 2,
    "title": "Analisis Perilaku Biaya",
    "ref": "RPS AKBI TM 2 · Carter Cost Accounting Ch. 3 · CU 3 / IMN 2",
    "source": "SILABI-Akuntansi Biaya-2026.doc + Carter Cost Accounting 14th Edition + data AKBI existing",
    "phase": "pra_uts",
    "manualCheckCount": 0,
    "intro": "Analisis perilaku biaya membahas bagaimana biaya berubah ketika aktivitas berubah. Materi ini memperdalam variable cost, fixed cost, mixed cost, relevant range, cost driver, high-low method, scattergraph, least squares regression, dan pemeriksaan data historis agar estimasi biaya dapat digunakan untuk anggaran, tarif overhead, flexible budget, CVP, dan keputusan manajerial.",
    "objectives": [
      "Menjelaskan konsep cost behavior, cost driver, dan activity base.",
      "Membedakan variable cost, fixed cost, mixed cost, committed fixed cost, discretionary fixed cost, dan step fixed cost.",
      "Menjelaskan relevant range dan dampaknya terhadap persamaan biaya.",
      "Memisahkan biaya campuran menggunakan high-low method.",
      "Menjelaskan scattergraph dan manfaat visualisasi data biaya.",
      "Membaca persamaan least squares regression secara konseptual.",
      "Menjelaskan makna constant, X coefficient, R-squared, standard error, dan residual.",
      "Mengevaluasi kelayakan data historis sebelum digunakan untuk estimasi biaya."
    ],
    "blocks": [
      {
        "kind": "h2",
        "text": "Orientasi TM 2"
      },
      {
        "kind": "p",
        "text": "TM 2 membahas perilaku biaya, yaitu cara biaya berubah ketika aktivitas berubah. Materi ini menjadi dasar untuk menyusun anggaran, menghitung tarif overhead, membuat flexible budget, melakukan cost-volume-profit analysis, menilai pesanan khusus, dan memisahkan biaya tetap serta variabel pada biaya campuran."
      },
      {
        "kind": "callout",
        "variant": "key",
        "title": "Inti akademik",
        "text": "Perilaku biaya tidak boleh dipahami hanya sebagai hafalan fixed, variable, dan mixed cost. Yang lebih penting adalah memahami hubungan antara cost driver, relevant range, struktur biaya, dan estimasi biaya untuk keputusan manajerial."
      },
      {
        "kind": "h2",
        "text": "Alur Belajar Cepat TM 2"
      },
      {
        "kind": "table",
        "headers": [
          "Tahap",
          "Yang dicek",
          "Keputusan",
          "Risiko jika salah"
        ],
        "rows": [
          [
            "1",
            "Cost driver",
            "Tentukan aktivitas yang paling menjelaskan naik-turunnya biaya",
            "Biaya diprediksi memakai dasar yang tidak relevan"
          ],
          [
            "2",
            "Relevant range",
            "Pastikan data berada dalam kapasitas normal yang sama",
            "Fixed cost terlihat berubah karena skala operasi sudah bergeser"
          ],
          [
            "3",
            "Pola total dan per unit",
            "Bedakan fixed, variable, dan mixed cost dari dua sudut sekaligus",
            "Mahasiswa sering benar pada total tetapi salah pada per unit"
          ],
          [
            "4",
            "Pemisahan mixed cost",
            "Gunakan high-low, scattergraph, atau regression sesuai kedalaman data",
            "Komponen tetap dan variabel tidak terukur"
          ],
          [
            "5",
            "Prediksi biaya",
            "Susun persamaan Y = a + bX untuk estimasi",
            "Anggaran dan tarif overhead menjadi lemah"
          ]
        ],
        "caption": "TM 2 harus dibaca sebagai teknik memprediksi biaya, bukan sekadar menghafal fixed cost dan variable cost."
      },
      {
        "kind": "h2",
        "text": "Formula Sheet Fondasi TM 2"
      },
      {
        "kind": "formula",
        "text": "Total Variable Cost = Variable Cost per Unit × Activity Level\nVariable Cost per Unit = Total Variable Cost ÷ Activity Level",
        "note": "Dalam relevant range, total variable cost berubah mengikuti aktivitas, sedangkan variable cost per unit relatif konstan."
      },
      {
        "kind": "formula",
        "text": "Fixed Cost per Unit = Total Fixed Cost ÷ Activity Level",
        "note": "Total fixed cost relatif tetap dalam relevant range, tetapi fixed cost per unit turun ketika volume naik."
      },
      {
        "kind": "formula",
        "text": "Mixed Cost: Y = a + bX\na = fixed cost\nb = variable cost per unit aktivitas\nX = activity level",
        "note": "Persamaan ini menjadi dasar estimasi biaya, flexible budget, dan tarif overhead."
      },
      {
        "kind": "formula",
        "text": "High-Low Method:\nb = (Cost at highest activity − Cost at lowest activity) ÷ (Highest activity − Lowest activity)\na = Total cost − bX",
        "note": "Titik high dan low dipilih berdasarkan tingkat aktivitas, bukan berdasarkan total biaya terbesar dan terkecil."
      },
      {
        "kind": "example",
        "title": "Contoh Mini: High-Low Method",
        "blocks": [
          {
            "kind": "p",
            "text": "PT Bima memiliki data biaya pemeliharaan: 10.000 jam mesin dengan total biaya Rp72.000.000 dan 6.000 jam mesin dengan total biaya Rp52.000.000. Estimasikan biaya pada 8.000 jam mesin."
          },
          {
            "kind": "formula",
            "text": "b = (72.000.000 − 52.000.000) ÷ (10.000 − 6.000) = Rp5.000 per jam mesin\na = 72.000.000 − (5.000 × 10.000) = Rp22.000.000\nY = 22.000.000 + 5.000X\nEstimasi pada 8.000 jam = 22.000.000 + (5.000 × 8.000) = Rp62.000.000"
          },
          {
            "kind": "callout",
            "variant": "tip",
            "title": "Cara mengecek jawaban",
            "text": "Masukkan X tertinggi dan X terendah kembali ke persamaan. Jika menghasilkan total biaya yang sama dengan data awal, persamaan high-low sudah konsisten."
          }
        ]
      },
      {
        "kind": "solution-reveal",
        "title": "Latihan Aktif: Deteksi Pola Biaya",
        "prompt": "Sewa pabrik Rp40.000.000 per bulan, bahan langsung Rp12.000 per unit, dan listrik pabrik minimum Rp3.000.000 plus Rp1.500 per jam mesin. Tentukan jenis perilaku biaya masing-masing.",
        "blocks": [
          {
            "kind": "ul",
            "items": [
              "Sewa pabrik: fixed cost dalam relevant range.",
              "Bahan langsung: variable cost karena totalnya berubah mengikuti jumlah unit.",
              "Listrik pabrik: mixed cost karena memiliki komponen tetap Rp3.000.000 dan komponen variabel Rp1.500 per jam mesin."
            ]
          },
          {
            "kind": "callout",
            "variant": "warning",
            "title": "Jebakan UTS",
            "text": "Jangan menilai perilaku biaya hanya dari nama akun. Biaya listrik dapat bersifat mixed, biaya tenaga kerja dapat tetap atau variabel tergantung sistem upah, dan depresiasi dapat berubah jika memakai basis unit produksi."
          }
        ]
      },
      {
        "kind": "h2",
        "text": "Peta Submateri TM 2"
      },
      {
        "kind": "table",
        "headers": [
          "No",
          "Submateri",
          "Fokus pembahasan",
          "Output belajar"
        ],
        "rows": [
          [
            "1",
            "Cost behavior dan cost driver",
            "Hubungan biaya dengan aktivitas pemicu biaya",
            "Mampu menentukan activity base yang relevan"
          ],
          [
            "2",
            "Variable cost",
            "Total berubah proporsional, per unit konstan dalam relevant range",
            "Mampu membaca pola biaya bahan langsung dan tenaga kerja langsung tertentu"
          ],
          [
            "3",
            "Fixed cost",
            "Total konstan dalam relevant range, per unit berubah",
            "Mampu membedakan committed dan discretionary fixed cost"
          ],
          [
            "4",
            "Mixed cost",
            "Memiliki komponen tetap dan variabel",
            "Mampu memisahkan biaya campuran"
          ],
          [
            "5",
            "Relevant range",
            "Rentang aktivitas tempat asumsi biaya masih valid",
            "Mampu membatasi penggunaan persamaan biaya"
          ],
          [
            "6",
            "High-low method",
            "Estimasi cepat dari dua titik aktivitas",
            "Mampu menyusun persamaan biaya"
          ],
          [
            "7",
            "Scattergraph",
            "Analisis visual seluruh data",
            "Mampu melihat pola dan outlier"
          ],
          [
            "8",
            "Least squares regression",
            "Estimasi statistik memakai seluruh data",
            "Mampu membaca constant, coefficient, R-squared, dan standard error secara konseptual"
          ],
          [
            "9",
            "Pemeriksaan data historis",
            "Teknologi, harga, inflasi, kapasitas, data ekstrem",
            "Mampu menilai apakah data historis masih layak dipakai"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Mengapa Perilaku Biaya Penting"
      },
      {
        "kind": "p",
        "text": "Manajemen membutuhkan prediksi biaya sebelum kegiatan terjadi. Prediksi tersebut hanya masuk akal jika manajemen memahami apakah biaya berubah karena volume, jam mesin, jam tenaga kerja, jumlah batch, jumlah inspeksi, atau faktor lain. Karena itu, perilaku biaya adalah dasar untuk budgeting, pricing, overhead rate, flexible budget, dan analisis keputusan."
      },
      {
        "kind": "table",
        "headers": [
          "Kebutuhan manajerial",
          "Mengapa perlu analisis perilaku biaya"
        ],
        "rows": [
          [
            "Budgeting",
            "Anggaran harus memisahkan biaya tetap dan variabel agar tidak keliru saat volume berubah"
          ],
          [
            "Predetermined overhead rate",
            "Tarif overhead membutuhkan estimasi biaya dan dasar aktivitas"
          ],
          [
            "Flexible budget",
            "Anggaran disesuaikan dengan aktivitas aktual, sehingga perlu biaya variabel per unit dan biaya tetap"
          ],
          [
            "CVP dan break-even",
            "Contribution margin bergantung pada pemisahan biaya variabel dan biaya tetap"
          ],
          [
            "Differential analysis",
            "Alternatif keputusan memerlukan identifikasi biaya relevan yang berubah antar alternatif"
          ],
          [
            "Short-run decision",
            "Pesanan khusus dan keputusan kapasitas bergantung pada biaya variabel dan biaya tetap yang relevan"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Cost Driver dan Activity Base"
      },
      {
        "kind": "p",
        "text": "Cost driver adalah faktor yang menyebabkan biaya berubah. Activity base adalah ukuran aktivitas yang dipakai untuk menjelaskan perubahan biaya. Pemilihan activity base harus rasional. Jika listrik pabrik terutama dipengaruhi penggunaan mesin, jam mesin atau kilowatt-hour lebih relevan daripada jumlah unit."
      },
      {
        "kind": "table",
        "headers": [
          "Biaya",
          "Activity base yang mungkin relevan",
          "Catatan"
        ],
        "rows": [
          [
            "Bahan baku langsung",
            "Jumlah unit, kilogram bahan, jumlah batch",
            "Umumnya variabel terhadap volume produksi"
          ],
          [
            "Listrik mesin",
            "Jam mesin atau kilowatt-hour",
            "Lebih tepat jika mesin menjadi pemicu utama"
          ],
          [
            "Biaya setup",
            "Jumlah setup atau setup hours",
            "Lebih dekat ke jumlah batch daripada jumlah unit"
          ],
          [
            "Biaya inspeksi",
            "Jumlah inspeksi atau inspection hours",
            "Dapat dipicu batch atau unit, tergantung proses"
          ],
          [
            "Gaji supervisor",
            "Rentang kapasitas departemen",
            "Sering fixed atau step fixed dalam relevant range"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Variable Cost"
      },
      {
        "kind": "p",
        "text": "Variable cost berubah secara total mengikuti perubahan aktivitas, tetapi biaya per unitnya tetap dalam relevant range. Contoh paling umum adalah direct materials. Jika satu unit produk memerlukan dua kilogram bahan, maka total bahan naik ketika unit produksi naik, tetapi kebutuhan bahan per unit tetap dua kilogram selama spesifikasi produk tidak berubah."
      },
      {
        "kind": "formula",
        "text": "Total Variable Cost = Variable Cost per Unit × Activity Level"
      },
      {
        "kind": "table",
        "headers": [
          "Ciri variable cost",
          "Penjelasan"
        ],
        "rows": [
          [
            "Total berubah",
            "Naik atau turun mengikuti level aktivitas"
          ],
          [
            "Per unit konstan",
            "Tetap selama berada dalam relevant range"
          ],
          [
            "Bergantung pada cost driver",
            "Perubahan biaya terjadi karena aktivitas pemicu biaya"
          ],
          [
            "Dapat bersifat engineered atau discretionary",
            "Beberapa biaya variabel ditentukan desain produk, beberapa mengikuti kebijakan operasi"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Fixed Cost"
      },
      {
        "kind": "p",
        "text": "Fixed cost tetap secara total dalam relevant range meskipun aktivitas berubah. Namun fixed cost per unit akan turun ketika volume meningkat dan naik ketika volume menurun. Karena itu, pernyataan bahwa fixed cost selalu tetap per unit adalah keliru."
      },
      {
        "kind": "formula",
        "text": "Fixed Cost per Unit = Total Fixed Cost ÷ Number of Units",
        "note": "Rumus ini menjelaskan mengapa fixed cost per unit berubah ketika volume berubah."
      },
      {
        "kind": "table",
        "headers": [
          "Jenis fixed cost",
          "Definisi",
          "Contoh",
          "Implikasi manajerial"
        ],
        "rows": [
          [
            "Committed fixed cost",
            "Biaya tetap yang terkait kapasitas jangka panjang dan sulit diubah cepat",
            "Depresiasi gedung, sewa jangka panjang, gaji manajemen pabrik",
            "Keputusan mengubahnya biasanya bersifat jangka panjang"
          ],
          [
            "Discretionary atau programmed fixed cost",
            "Biaya tetap yang muncul karena keputusan periodik manajemen",
            "Pelatihan, iklan institusional, riset, program kualitas",
            "Dapat disesuaikan melalui anggaran tahunan"
          ],
          [
            "Step fixed cost",
            "Biaya tetap dalam satu rentang, lalu melonjak ketika kapasitas melewati batas tertentu",
            "Supervisor tambahan ketika shift bertambah",
            "Relevant range harus diperhatikan"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Mixed Cost atau Semivariable Cost"
      },
      {
        "kind": "p",
        "text": "Mixed cost memiliki komponen tetap dan variabel. Bagian tetap muncul walaupun aktivitas minimum terjadi, sedangkan bagian variabel berubah mengikuti aktivitas. Contoh umum adalah tagihan listrik, biaya telepon, biaya pemeliharaan, dan biaya kendaraan produksi."
      },
      {
        "kind": "formula",
        "text": "Total Mixed Cost = Fixed Cost + (Variable Cost per Unit × Activity Level)"
      },
      {
        "kind": "table",
        "headers": [
          "Biaya campuran",
          "Komponen tetap",
          "Komponen variabel"
        ],
        "rows": [
          [
            "Tagihan listrik pabrik",
            "Biaya minimum atau beban tetap",
            "Pemakaian kWh sesuai jam mesin"
          ],
          [
            "Biaya telepon",
            "Abonemen tetap",
            "Biaya percakapan atau data tambahan"
          ],
          [
            "Pemeliharaan mesin",
            "Kontrak servis rutin",
            "Biaya perbaikan sesuai jam pakai atau kerusakan"
          ],
          [
            "Kendaraan operasional",
            "Asuransi dan pajak kendaraan",
            "Bahan bakar dan servis sesuai jarak tempuh"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Relevant Range"
      },
      {
        "kind": "p",
        "text": "Relevant range adalah rentang aktivitas di mana asumsi perilaku biaya masih valid. Di luar rentang ini, kapasitas, teknologi, harga input, jumlah supervisor, atau struktur fasilitas dapat berubah sehingga persamaan biaya lama tidak lagi layak dipakai."
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "Kesalahan yang sering terjadi",
        "text": "Persamaan TC = a + bQ tidak berlaku untuk semua level aktivitas. Jika perusahaan bergerak dari kapasitas kecil ke kapasitas besar, fixed cost dapat naik karena gedung, mesin, atau supervisor tambahan."
      },
      {
        "kind": "h2",
        "text": "Metode Pemisahan Biaya Campuran"
      },
      {
        "kind": "table",
        "headers": [
          "Metode",
          "Data yang digunakan",
          "Kelebihan",
          "Keterbatasan"
        ],
        "rows": [
          [
            "Account analysis atau managerial judgment",
            "Pengetahuan manajer terhadap akun biaya",
            "Cepat dan mudah diterapkan",
            "Subjektif dan bergantung pengalaman"
          ],
          [
            "Engineering method",
            "Studi teknis konsumsi input",
            "Berguna untuk proses baru tanpa data historis",
            "Membutuhkan data teknis dan waktu analisis"
          ],
          [
            "High-low method",
            "Dua titik aktivitas tertinggi dan terendah",
            "Sangat cepat dan mudah untuk latihan awal",
            "Rentan bias jika dua titik tidak representatif"
          ],
          [
            "Scattergraph",
            "Seluruh data historis secara visual",
            "Membantu melihat pola dan outlier",
            "Garis tren masih dapat subjektif"
          ],
          [
            "Least squares regression",
            "Seluruh data historis secara statistik",
            "Lebih objektif dan menghasilkan ukuran kecocokan",
            "Membutuhkan perhitungan statistik dan kualitas data yang baik"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "High-Low Method"
      },
      {
        "kind": "p",
        "text": "High-low method memisahkan mixed cost dengan mengambil dua titik berdasarkan aktivitas tertinggi dan aktivitas terendah, bukan berdasarkan total biaya tertinggi dan terendah. Selisih biaya dibagi selisih aktivitas menghasilkan variable cost per unit. Fixed cost dihitung dengan mengurangkan total variable cost dari total cost pada salah satu titik."
      },
      {
        "kind": "formula",
        "text": "Variable Cost per Unit = (Cost at Highest Activity − Cost at Lowest Activity) ÷ (Highest Activity − Lowest Activity)"
      },
      {
        "kind": "formula",
        "text": "Fixed Cost = Total Cost − (Variable Cost per Unit × Activity Level)"
      },
      {
        "kind": "formula",
        "text": "Cost Equation = Y = a + bX",
        "note": "a = fixed cost, b = variable cost per unit, X = activity level."
      },
      {
        "kind": "example",
        "title": "High-low method — Salman Inc.",
        "blocks": [
          {
            "kind": "p",
            "text": "Maret: 200 unit dengan total biaya Rp2.000. April: 600 unit dengan total biaya Rp5.020."
          },
          {
            "kind": "ol",
            "items": [
              "Pilih aktivitas tertinggi: 600 unit, biaya Rp5.020.",
              "Pilih aktivitas terendah: 200 unit, biaya Rp2.000.",
              "Variable cost per unit = (5.020 − 2.000) ÷ (600 − 200) = 3.020 ÷ 400 = Rp7,55.",
              "Fixed cost = 2.000 − (7,55 × 200) = 2.000 − 1.510 = Rp490.",
              "Persamaan biaya: TC = 490 + 7,55Q."
            ]
          }
        ]
      },
      {
        "kind": "h2",
        "text": "Workspace Batch 12B - High-Low Method dengan Data Terlihat"
      },
      {
        "kind": "table",
        "caption": "Data berasal dari contoh Salman Inc. pada TM 2.",
        "headers": [
          "Titik aktivitas",
          "Unit",
          "Total biaya"
        ],
        "rows": [
          ["Aktivitas rendah", "200 unit", "Rp2.000"],
          ["Aktivitas tinggi", "600 unit", "Rp5.020"]
        ]
      },
      {
        "kind": "table-fill",
        "spec": {
          "title": "Worksheet High-Low Method TM 2",
          "instruction": "Isi perubahan aktivitas, perubahan biaya, biaya variabel per unit, biaya tetap, dan persamaan biaya. Data soal sudah ditampilkan di tabel sebelum workspace.",
          "currency": "Rp",
          "headers": [
            "Langkah kerja",
            "Jawaban"
          ],
          "rows": [
            {
              "id": "tm2-change-cost",
              "label": "Perubahan biaya = Rp5.020 - Rp2.000",
              "cells": [
                { "id": "tm2-change-cost-answer", "answer": 3020, "placeholder": "isi angka" }
              ]
            },
            {
              "id": "tm2-change-activity",
              "label": "Perubahan aktivitas = 600 - 200",
              "cells": [
                { "id": "tm2-change-activity-answer", "answer": 400, "placeholder": "isi unit" }
              ]
            },
            {
              "id": "tm2-variable-cost",
              "label": "Variable cost per unit = perubahan biaya ÷ perubahan aktivitas",
              "cells": [
                { "id": "tm2-variable-cost-answer", "answer": 7.55, "tolerance": 0.01, "placeholder": "isi angka" }
              ]
            },
            {
              "id": "tm2-fixed-cost",
              "label": "Fixed cost = Rp2.000 - (Rp7,55 × 200)",
              "cells": [
                { "id": "tm2-fixed-cost-answer", "answer": 490, "placeholder": "isi angka" }
              ]
            },
            {
              "id": "tm2-equation",
              "label": "Persamaan biaya",
              "cells": [
                { "id": "tm2-equation-answer", "answer": "TC = 490 + 7,55Q", "placeholder": "TC = ..." }
              ]
            }
          ]
        }
      },
      {
        "kind": "solution-reveal",
        "title": "Pembahasan high-low method TM 2",
        "prompt": "Buka setelah worksheet high-low dikerjakan.",
        "blocks": [
          {
            "kind": "ol",
            "items": [
              "Titik dipilih berdasarkan aktivitas, bukan berdasarkan total biaya.",
              "Perubahan biaya = Rp5.020 - Rp2.000 = Rp3.020.",
              "Perubahan aktivitas = 600 - 200 = 400 unit.",
              "Biaya variabel per unit = Rp3.020 ÷ 400 = Rp7,55.",
              "Biaya tetap = Rp2.000 - (Rp7,55 × 200) = Rp490.",
              "Persamaan biaya adalah TC = 490 + 7,55Q."
            ]
          }
        ]
      },
      {
        "kind": "h2",
        "text": "Scattergraph Method"
      },
      {
        "kind": "p",
        "text": "Scattergraph method memplot setiap pasangan data aktivitas dan biaya dalam grafik. Sumbu X menunjukkan aktivitas, sedangkan sumbu Y menunjukkan total biaya. Garis tren kemudian ditarik untuk memperkirakan hubungan biaya dengan aktivitas. Metode ini lebih informatif daripada high-low karena memakai seluruh data dan memperlihatkan outlier."
      },
      {
        "kind": "ol",
        "items": [
          "Kumpulkan data historis aktivitas dan biaya.",
          "Plot aktivitas pada sumbu X dan biaya pada sumbu Y.",
          "Amati pola titik dan identifikasi outlier.",
          "Tarik garis tren yang paling mewakili pola data.",
          "Baca intercept sebagai fixed cost dan slope sebagai variable cost per unit."
        ]
      },
      {
        "kind": "h2",
        "text": "Least Squares Regression"
      },
      {
        "kind": "p",
        "text": "Least squares regression mencari garis estimasi yang meminimalkan jumlah kuadrat selisih antara biaya aktual dan biaya estimasi. Dalam output regresi sederhana, constant menunjukkan fixed cost, sedangkan X coefficient menunjukkan variable cost per unit. R-squared menunjukkan seberapa besar variasi biaya dapat dijelaskan oleh aktivitas."
      },
      {
        "kind": "formula",
        "text": "Y = a + bX",
        "note": "Y = total cost, a = intercept atau fixed cost, b = slope atau variable cost per unit, X = activity level."
      },
      {
        "kind": "table",
        "headers": [
          "Elemen output regresi",
          "Makna",
          "Cara membaca"
        ],
        "rows": [
          [
            "Constant atau intercept",
            "Estimasi fixed cost",
            "Masuk sebagai a dalam persamaan biaya"
          ],
          [
            "X coefficient atau slope",
            "Estimasi variable cost per unit",
            "Masuk sebagai b dalam persamaan biaya"
          ],
          [
            "R-squared",
            "Proporsi variasi biaya yang dijelaskan oleh aktivitas",
            "Semakin mendekati 1, hubungan aktivitas-biaya semakin kuat"
          ],
          [
            "Standard error",
            "Ukuran rata-rata kesalahan estimasi",
            "Semakin kecil, estimasi biaya semakin presisi"
          ],
          [
            "Residual",
            "Selisih antara biaya aktual dan biaya prediksi",
            "Dipakai untuk memeriksa pola error dan outlier"
          ]
        ]
      },
      {
        "kind": "example",
        "title": "Membaca output regresi",
        "blocks": [
          {
            "kind": "p",
            "text": "Misalkan output regresi menunjukkan constant Rp47.500, X coefficient Rp450, dan R-squared 0,90."
          },
          {
            "kind": "formula",
            "text": "TC = 47.500 + 450Q"
          },
          {
            "kind": "p",
            "text": "R-squared 0,90 tidak masuk ke persamaan biaya. Angka tersebut hanya menunjukkan kualitas hubungan antara aktivitas dan biaya."
          }
        ]
      },
      {
        "kind": "h2",
        "text": "Pemeriksaan Data Historis"
      },
      {
        "kind": "p",
        "text": "Data historis tidak boleh langsung dipakai tanpa evaluasi. Perubahan teknologi, desain produk, harga input, inflasi, kapasitas, musim, kebijakan produksi, dan kejadian tidak normal dapat membuat data lama tidak lagi mencerminkan perilaku biaya saat ini."
      },
      {
        "kind": "table",
        "headers": [
          "Hal yang diperiksa",
          "Pertanyaan audit data"
        ],
        "rows": [
          [
            "Teknologi",
            "Apakah mesin, proses, atau tingkat otomatisasi berubah?"
          ],
          [
            "Desain produk",
            "Apakah bahan dan waktu proses per unit berubah?"
          ],
          [
            "Harga input",
            "Apakah bahan, upah, listrik, atau sewa berubah signifikan?"
          ],
          [
            "Kapasitas",
            "Apakah aktivitas berada di luar relevant range lama?"
          ],
          [
            "Inflasi",
            "Apakah data periode lama perlu dinormalisasi?"
          ],
          [
            "Outlier",
            "Apakah ada data akibat shutdown, lembur ekstrem, kerusakan mesin, atau pesanan tidak normal?"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Materi Praktik TM 2"
      },
      {
        "kind": "example",
        "title": "Klasifikasi perilaku biaya",
        "blocks": [
          {
            "kind": "table",
            "headers": [
              "Biaya",
              "Perilaku",
              "Alasan"
            ],
            "rows": [
              [
                "Bahan baku langsung",
                "Variable cost",
                "Total berubah mengikuti jumlah unit, biaya per unit relatif tetap"
              ],
              [
                "Sewa gedung pabrik",
                "Fixed cost",
                "Total tetap dalam masa kontrak dan relevant range"
              ],
              [
                "Gaji supervisor pabrik",
                "Fixed atau step fixed",
                "Tetap dalam satu rentang, dapat bertambah ketika kapasitas naik"
              ],
              [
                "Tagihan listrik pabrik",
                "Mixed cost",
                "Ada beban minimum dan komponen pemakaian"
              ],
              [
                "Biaya setup",
                "Batch-level cost",
                "Lebih dipicu jumlah batch daripada jumlah unit"
              ]
            ]
          }
        ]
      },
      {
        "kind": "h2",
        "text": "Kesalahan Umum TM 2"
      },
      {
        "kind": "table",
        "headers": [
          "Kesalahan",
          "Koreksi"
        ],
        "rows": [
          [
            "Memilih titik high-low berdasarkan biaya tertinggi",
            "Pilih berdasarkan aktivitas tertinggi dan terendah."
          ],
          [
            "Menganggap fixed cost tetap per unit",
            "Fixed cost tetap secara total, tetapi per unit berubah."
          ],
          [
            "Menganggap variable cost tetap secara total",
            "Variable cost tetap per unit, tetapi total berubah."
          ],
          [
            "Menggunakan persamaan biaya di luar relevant range",
            "Persamaan hanya valid dalam rentang aktivitas yang relevan."
          ],
          [
            "Memasukkan R-squared ke persamaan biaya",
            "R-squared hanya ukuran kecocokan, bukan komponen biaya."
          ],
          [
            "Mengabaikan outlier dan perubahan teknologi",
            "Data historis harus diaudit sebelum dipakai."
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Latihan Pemahaman TM 2"
      },
      {
        "kind": "ol",
        "items": [
          "Bedakan variable cost, fixed cost, mixed cost, committed fixed cost, discretionary fixed cost, dan step fixed cost.",
          "Jelaskan mengapa relevant range penting dalam estimasi biaya.",
          "Hitung persamaan biaya dengan high-low method dari dua titik aktivitas.",
          "Jelaskan fungsi scattergraph dan cara membaca slope serta intercept.",
          "Baca output regresi sederhana dan tentukan persamaan biaya.",
          "Sebutkan lima faktor yang harus diperiksa sebelum memakai data historis."
        ]
      },
      {
        "kind": "h2",
        "text": "Ringkasan TM 2"
      },
      {
        "kind": "p",
        "text": "TM 2 menjelaskan bagaimana biaya berubah akibat perubahan aktivitas. Variable cost, fixed cost, mixed cost, relevant range, cost driver, high-low method, scattergraph, dan least squares regression menjadi fondasi untuk budgeting, flexible budget, overhead rate, CVP, dan keputusan manajerial. Estimasi biaya yang baik harus memakai data yang relevan, berada dalam relevant range, dan bebas dari distorsi data historis yang tidak normal."
      },
      {
        "kind": "h2",
        "text": "Checklist Kelengkapan TM 2"
      },
      {
        "kind": "table",
        "headers": [
          "Komponen",
          "Status"
        ],
        "rows": [
          [
            "Cost behavior dan cost driver",
            "Sudah masuk"
          ],
          [
            "Variable cost dan fixed cost",
            "Sudah diperdalam"
          ],
          [
            "Committed, discretionary, dan step fixed cost",
            "Sudah masuk"
          ],
          [
            "Mixed cost dan relevant range",
            "Sudah masuk"
          ],
          [
            "Account analysis, engineering, high-low, scattergraph, least squares",
            "Sudah masuk"
          ],
          [
            "R-squared, standard error, residual secara konseptual",
            "Sudah masuk"
          ],
          [
            "Audit data historis",
            "Sudah masuk"
          ],
          [
            "Contoh dan latihan",
            "Sudah masuk"
          ]
        ]
      }
    ]
  },
  3: {
    "id": "akbi-tm-3",
    "tm": 3,
    "title": "Siklus Biaya, Sistem Biaya, dan Akumulasi Biaya",
    "ref": "RPS AKBI TM 3 · Carter Cost Accounting Ch. 4–5 · CU 4–5 / IMN 3",
    "source": "SILABI-Akuntansi Biaya-2026.doc + Carter Cost Accounting 14th Edition + data AKBI existing",
    "phase": "pra_uts",
    "manualCheckCount": 0,
    "intro": "TM 3 menjelaskan bagaimana biaya manufaktur mengalir dari bahan baku ke barang dalam proses, barang jadi, dan harga pokok penjualan. Materi ini memperdalam general accounts, cost accounts, dokumen sumber, cost systems, cost accumulation systems, jurnal siklus biaya, dan laporan manufaktur lengkap seperti Schedule of Raw Materials Used, Cost of Goods Manufactured, Cost of Goods Sold, dan Income Statement.",
    "objectives": [
      "Menjelaskan alur biaya manufaktur dari Materials Inventory sampai Cost of Goods Sold.",
      "Membedakan general accounts dan cost accounts.",
      "Mengidentifikasi source documents untuk materials, labor, dan factory overhead.",
      "Membedakan actual costing, normal costing, standard costing, absorption costing, dan variable/direct costing.",
      "Membedakan job order costing, process costing, dan operation/blended costing.",
      "Menyusun jurnal dasar siklus biaya manufaktur.",
      "Menyusun Schedule of Raw Materials Used, Cost of Goods Manufactured, Cost of Goods Sold, dan Income Statement manufaktur.",
      "Menghitung materials used, total manufacturing cost, COGM, dan COGS dari data persediaan."
    ],
    "blocks": [
      {
        "kind": "h2",
        "text": "Orientasi TM 3"
      },
      {
        "kind": "p",
        "text": "TM 3 membahas siklus biaya manufaktur, sistem biaya, sistem akumulasi biaya, dokumen sumber, jurnal, dan laporan manufaktur. Materi ini menghubungkan klasifikasi biaya dari TM 1 dengan perhitungan harga pokok produksi dan harga pokok penjualan yang akan dipakai dalam job order costing dan process costing."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Arah pembacaan",
        "text": "Baca TM 3 sebagai peta aliran biaya. Biaya tidak berhenti di rumus, tetapi bergerak dari dokumen sumber, masuk ke akun persediaan, berpindah ke laporan manufaktur, lalu akhirnya muncul sebagai Cost of Goods Sold di laporan laba rugi."
      },
      {
        "kind": "h2",
        "text": "Alur Belajar Cepat TM 3"
      },
      {
        "kind": "table",
        "headers": [
          "Tahap",
          "Akun/Laporan",
          "Pertanyaan kunci",
          "Output"
        ],
        "rows": [
          [
            "1",
            "Materials Inventory",
            "Berapa bahan tersedia dan berapa bahan akhir?",
            "Direct materials used"
          ],
          [
            "2",
            "Work in Process",
            "Berapa biaya produksi periode berjalan dan BDP akhir?",
            "Cost of Goods Manufactured"
          ],
          [
            "3",
            "Finished Goods",
            "Berapa barang jadi awal, HPP produksi, dan barang jadi akhir?",
            "Cost of Goods Sold"
          ],
          [
            "4",
            "Income Statement",
            "Berapa penjualan, HPP, dan biaya periode?",
            "Gross profit dan operating income"
          ],
          [
            "5",
            "Source documents",
            "Dokumen apa yang membuktikan pemakaian bahan, jam kerja, dan overhead?",
            "Data biaya dapat diaudit dan ditelusuri"
          ]
        ],
        "caption": "TM 3 adalah jembatan dari klasifikasi biaya menuju laporan biaya manufaktur. Urutannya harus dibaca dari akun persediaan ke laporan laba rugi."
      },
      {
        "kind": "h2",
        "text": "Formula Sheet Fondasi TM 3"
      },
      {
        "kind": "formula",
        "text": "Raw Materials Used = Beginning Raw Materials + Purchases − Ending Raw Materials",
        "note": "Jika soal memisahkan bahan langsung dan bahan tidak langsung, hanya bahan langsung yang masuk direct materials used. Bahan tidak langsung masuk FOH."
      },
      {
        "kind": "formula",
        "text": "Total Manufacturing Cost = Direct Materials Used + Direct Labor + Factory Overhead",
        "note": "Total manufacturing cost adalah biaya produksi periode berjalan, belum tentu sama dengan harga pokok produksi."
      },
      {
        "kind": "formula",
        "text": "Cost of Goods Manufactured = Beginning WIP + Total Manufacturing Cost − Ending WIP",
        "note": "COGM menunjukkan biaya produk yang selesai diproduksi dan dipindahkan ke Finished Goods."
      },
      {
        "kind": "formula",
        "text": "Cost of Goods Sold = Beginning Finished Goods + Cost of Goods Manufactured − Ending Finished Goods",
        "note": "COGS menunjukkan biaya barang yang sudah terjual, bukan semua barang yang selesai diproduksi."
      },
      {
        "kind": "example",
        "title": "Contoh Mini: Alur COGM dan COGS",
        "blocks": [
          {
            "kind": "p",
            "text": "PT Cakra memiliki bahan awal Rp10.000.000, pembelian bahan Rp70.000.000, bahan akhir Rp8.000.000, tenaga kerja langsung Rp35.000.000, FOH Rp28.000.000, BDP awal Rp12.000.000, BDP akhir Rp9.000.000, barang jadi awal Rp15.000.000, dan barang jadi akhir Rp11.000.000."
          },
          {
            "kind": "formula",
            "text": "Raw Materials Used = 10.000.000 + 70.000.000 − 8.000.000 = Rp72.000.000\nTotal Manufacturing Cost = 72.000.000 + 35.000.000 + 28.000.000 = Rp135.000.000\nCOGM = 12.000.000 + 135.000.000 − 9.000.000 = Rp138.000.000\nCOGS = 15.000.000 + 138.000.000 − 11.000.000 = Rp142.000.000"
          }
        ]
      },
      {
        "kind": "solution-reveal",
        "title": "Latihan Aktif: Urutkan Alur Biaya",
        "prompt": "Jelaskan mengapa biaya produksi tidak langsung langsung masuk FOH, lalu dibebankan ke WIP, bukan langsung ke COGS.",
        "blocks": [
          {
            "kind": "p",
            "text": "FOH adalah biaya produksi tidak langsung. Karena masih berkaitan dengan barang yang sedang diproduksi, FOH harus melekat ke produk melalui WIP terlebih dahulu. Biaya baru masuk COGS setelah barang selesai, menjadi barang jadi, dan kemudian terjual."
          },
          {
            "kind": "callout",
            "variant": "warning",
            "title": "Jebakan UTS",
            "text": "Harga Pokok Produksi dan Harga Pokok Penjualan tidak sama. COGM dipengaruhi BDP awal dan akhir, sedangkan COGS dipengaruhi barang jadi awal dan akhir."
          }
        ]
      },
      {
        "kind": "h2",
        "text": "Peta Submateri TM 3"
      },
      {
        "kind": "table",
        "headers": [
          "No",
          "Submateri",
          "Fokus pembahasan",
          "Output belajar"
        ],
        "rows": [
          [
            "1",
            "Flow of manufacturing costs",
            "Materials Inventory, Work in Process, Finished Goods, COGS",
            "Mampu menjelaskan perpindahan biaya produksi"
          ],
          [
            "2",
            "General accounts dan cost accounts",
            "Akun utama dan catatan pembantu biaya",
            "Mampu membedakan laporan eksternal dan rincian internal"
          ],
          [
            "3",
            "Source documents",
            "Purchase invoice, materials requisition, labor time ticket, vendor invoice",
            "Mampu menelusuri asal data biaya"
          ],
          [
            "4",
            "Cost systems",
            "Actual, normal, standard, absorption, variable/direct costing",
            "Mampu menjelaskan dasar pengukuran biaya"
          ],
          [
            "5",
            "Cost accumulation systems",
            "Job order, process, operation/blended costing",
            "Mampu memilih sistem akumulasi sesuai karakter produksi"
          ],
          [
            "6",
            "Manufacturing statements",
            "Schedule of materials used, COGM, COGS, income statement",
            "Mampu menyusun laporan manufaktur lengkap"
          ],
          [
            "7",
            "Jurnal siklus biaya",
            "Pembelian bahan sampai produk terjual",
            "Mampu mencatat alur biaya secara akuntansi"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Alur Biaya Manufaktur"
      },
      {
        "kind": "p",
        "text": "Dalam perusahaan manufaktur, biaya produksi mengalir melalui tiga akun persediaan utama. Bahan baku yang belum dipakai disimpan dalam Materials Inventory. Ketika bahan, tenaga kerja langsung, dan overhead dibebankan ke produksi, biaya masuk ke Work in Process. Setelah produk selesai, biaya berpindah ke Finished Goods. Ketika produk dijual, biaya berpindah ke Cost of Goods Sold."
      },
      {
        "kind": "formula",
        "text": "Materials Inventory → Work in Process → Finished Goods → Cost of Goods Sold"
      },
      {
        "kind": "table",
        "headers": [
          "Akun",
          "Isi debit utama",
          "Isi kredit utama",
          "Makna"
        ],
        "rows": [
          [
            "Materials Inventory",
            "Pembelian bahan baku dan bahan penolong",
            "Bahan digunakan dalam produksi",
            "Menampung bahan yang belum dipakai"
          ],
          [
            "Work in Process",
            "Direct materials, direct labor, applied factory overhead",
            "Produk selesai ditransfer ke Finished Goods",
            "Menampung biaya produk yang belum selesai"
          ],
          [
            "Finished Goods",
            "Produk selesai dari Work in Process",
            "Produk terjual dipindahkan ke COGS",
            "Menampung produk selesai yang belum dijual"
          ],
          [
            "Cost of Goods Sold",
            "Biaya produk yang sudah dijual",
            "Penutupan atau penyesuaian jika diperlukan",
            "Expense yang masuk laporan laba rugi"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "General Accounts dan Cost Accounts"
      },
      {
        "kind": "p",
        "text": "General accounts adalah akun utama yang muncul dalam sistem akuntansi umum dan laporan keuangan. Cost accounts adalah catatan pembantu yang memberi rincian biaya untuk kebutuhan pengendalian internal. Work in Process, misalnya, dapat dirinci menurut job cost sheet dalam job order costing atau menurut cost of production report dalam process costing."
      },
      {
        "kind": "table",
        "headers": [
          "Aspek",
          "General accounts",
          "Cost accounts"
        ],
        "rows": [
          [
            "Tujuan",
            "Menyajikan saldo akun utama",
            "Memberi rincian biaya untuk analisis internal"
          ],
          [
            "Contoh",
            "Materials Inventory, WIP, Finished Goods, COGS",
            "Kartu bahan, job cost sheet, laporan biaya departemen"
          ],
          [
            "Pengguna",
            "Akuntansi keuangan dan manajemen",
            "Manajer produksi, cost accountant, controller"
          ],
          [
            "Tingkat rincian",
            "Ringkas",
            "Rinci menurut bahan, job, departemen, proses, atau aktivitas"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Dokumen Sumber Biaya"
      },
      {
        "kind": "p",
        "text": "Dokumen sumber menjadi bukti awal terjadinya biaya. Tanpa dokumen sumber, biaya sulit diverifikasi dan sulit ditelusuri ke cost object. Dokumen sumber juga menjadi dasar pengendalian internal karena menunjukkan siapa yang meminta, menyetujui, menggunakan, dan mencatat sumber daya."
      },
      {
        "kind": "table",
        "headers": [
          "Elemen biaya",
          "Dokumen sumber",
          "Fungsi"
        ],
        "rows": [
          [
            "Materials",
            "Purchase invoice",
            "Mencatat pembelian bahan dari pemasok"
          ],
          [
            "Materials",
            "Receiving report",
            "Mencatat bahan yang diterima dan hasil pemeriksaan kuantitas/kualitas"
          ],
          [
            "Materials",
            "Materials requisition",
            "Mencatat bahan yang dikeluarkan dari gudang ke produksi dan job/departemen pemakai"
          ],
          [
            "Labor",
            "Clock card",
            "Mencatat waktu hadir pekerja"
          ],
          [
            "Labor",
            "Labor time ticket",
            "Mencatat waktu kerja pekerja untuk job atau departemen tertentu"
          ],
          [
            "Factory overhead",
            "Vendor invoice, utility bill, depreciation schedule",
            "Mencatat overhead aktual seperti listrik, sewa, depresiasi, perbaikan, dan asuransi"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Sistem Biaya"
      },
      {
        "kind": "p",
        "text": "Sistem biaya dapat dibedakan berdasarkan dasar pengukuran biaya dan cara biaya manufaktur dimasukkan ke produk. Actual costing memakai biaya aktual untuk semua elemen. Normal costing memakai direct materials dan direct labor aktual, tetapi factory overhead dibebankan dengan predetermined overhead rate. Standard costing memakai standar biaya dan membandingkannya dengan biaya aktual."
      },
      {
        "kind": "table",
        "headers": [
          "Sistem",
          "Direct materials",
          "Direct labor",
          "Factory overhead",
          "Kegunaan"
        ],
        "rows": [
          [
            "Actual costing",
            "Aktual",
            "Aktual",
            "Aktual",
            "Mencerminkan biaya sebenarnya, tetapi overhead sering terlambat diketahui"
          ],
          [
            "Normal costing",
            "Aktual",
            "Aktual",
            "Dibebankan dengan predetermined rate",
            "Praktis untuk job order costing karena overhead dapat dibebankan sebelum akhir periode"
          ],
          [
            "Standard costing",
            "Standar",
            "Standar",
            "Standar",
            "Membantu pengendalian melalui variance analysis"
          ],
          [
            "Absorption costing",
            "Semua biaya manufaktur variabel dan tetap masuk produk",
            "Semua biaya manufaktur variabel dan tetap masuk produk",
            "Termasuk fixed factory overhead",
            "Dipakai untuk penilaian persediaan eksternal"
          ],
          [
            "Variable/direct costing",
            "Biaya produksi variabel masuk produk",
            "Biaya produksi variabel masuk produk",
            "Fixed factory overhead diperlakukan sebagai period cost",
            "Berguna untuk analisis internal dan contribution margin"
          ]
        ]
      },
      {
        "kind": "callout",
        "variant": "info",
        "title": "Catatan istilah",
        "text": "Beberapa sumber menyebut istilah historical cost system, standard cost system, absorption costing, direct atau variable costing, dan super-full absorption. Untuk website saat ini, istilah utama yang harus dikuasai adalah actual, normal, standard, absorption, dan variable/direct costing."
      },
      {
        "kind": "h2",
        "text": "Sistem Akumulasi Biaya"
      },
      {
        "kind": "p",
        "text": "Sistem akumulasi biaya menunjukkan bagaimana biaya dikumpulkan. Job order costing dipakai ketika produk atau jasa berbeda-beda menurut pesanan. Process costing dipakai ketika produk homogen diproduksi secara massal dan terus-menerus. Operation atau blended costing dapat muncul ketika sebagian proses bersifat homogen tetapi variasi produk tetap ada."
      },
      {
        "kind": "table",
        "headers": [
          "Sistem akumulasi",
          "Karakter produksi",
          "Cost object utama",
          "Contoh"
        ],
        "rows": [
          [
            "Job order costing",
            "Produk atau jasa heterogen, dibuat berdasarkan pesanan",
            "Job, kontrak, pesanan, proyek",
            "Percetakan khusus, konstruksi, konsultan, bengkel custom"
          ],
          [
            "Process costing",
            "Produk homogen dan diproduksi massal",
            "Departemen atau cost center",
            "Semen, minyak, gula, minuman botol, bahan kimia"
          ],
          [
            "Operation/blended costing",
            "Produk melewati proses umum tetapi memiliki variasi tertentu",
            "Operasi atau batch dengan variasi atribut",
            "Pakaian dengan proses umum tetapi ukuran/warna berbeda"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Jurnal Dasar Siklus Biaya Manufaktur"
      },
      {
        "kind": "journal",
        "lines": [
          {
            "account": "Materials Inventory",
            "debit": "Data dari soal"
          },
          {
            "account": "Accounts Payable/Cash",
            "credit": "Data dari soal",
            "isCredit": true
          }
        ],
        "caption": "Pembelian bahan."
      },
      {
        "kind": "journal",
        "lines": [
          {
            "account": "Work in Process",
            "debit": "Data dari soal"
          },
          {
            "account": "Factory Overhead Control",
            "debit": "Data dari soal"
          },
          {
            "account": "Materials Inventory",
            "credit": "Data dari soal",
            "isCredit": true
          }
        ],
        "caption": "Pemakaian bahan langsung masuk WIP; bahan tidak langsung masuk Factory Overhead Control."
      },
      {
        "kind": "journal",
        "lines": [
          {
            "account": "Factory Payroll",
            "debit": "Data dari soal"
          },
          {
            "account": "Wages Payable/Cash",
            "credit": "Data dari soal",
            "isCredit": true
          }
        ],
        "caption": "Pengakuan biaya tenaga kerja pabrik."
      },
      {
        "kind": "journal",
        "lines": [
          {
            "account": "Work in Process",
            "debit": "Data dari soal"
          },
          {
            "account": "Factory Overhead Control",
            "debit": "Data dari soal"
          },
          {
            "account": "Factory Payroll",
            "credit": "Data dari soal",
            "isCredit": true
          }
        ],
        "caption": "Distribusi tenaga kerja langsung ke WIP dan tenaga kerja tidak langsung ke FOH Control."
      },
      {
        "kind": "journal",
        "lines": [
          {
            "account": "Factory Overhead Control",
            "debit": "Data dari soal"
          },
          {
            "account": "Various Accounts",
            "credit": "Data dari soal",
            "isCredit": true
          }
        ],
        "caption": "Overhead aktual terjadi, seperti listrik, depresiasi, asuransi, perbaikan, dan sewa pabrik."
      },
      {
        "kind": "journal",
        "lines": [
          {
            "account": "Work in Process",
            "debit": "Data dari soal"
          },
          {
            "account": "Applied Factory Overhead",
            "credit": "Data dari soal",
            "isCredit": true
          }
        ],
        "caption": "Overhead dibebankan ke produksi berdasarkan tarif yang ditentukan di muka."
      },
      {
        "kind": "journal",
        "lines": [
          {
            "account": "Finished Goods",
            "debit": "Data dari soal"
          },
          {
            "account": "Work in Process",
            "credit": "Data dari soal",
            "isCredit": true
          }
        ],
        "caption": "Produk selesai diproduksi dan dipindahkan ke barang jadi."
      },
      {
        "kind": "journal",
        "lines": [
          {
            "account": "Accounts Receivable/Cash",
            "debit": "Data dari soal"
          },
          {
            "account": "Sales",
            "credit": "Data dari soal",
            "isCredit": true
          },
          {
            "account": "Cost of Goods Sold",
            "debit": "Data dari soal"
          },
          {
            "account": "Finished Goods",
            "credit": "Data dari soal",
            "isCredit": true
          }
        ],
        "caption": "Penjualan dicatat dari sisi pendapatan dan sisi harga pokok."
      },
      {
        "kind": "h2",
        "text": "Laporan Manufaktur Lengkap"
      },
      {
        "kind": "h3",
        "text": "1. Schedule of Raw Materials Used"
      },
      {
        "kind": "table",
        "headers": [
          "Komponen",
          "Nilai"
        ],
        "rows": [
          [
            "Persediaan bahan baku awal",
            "Diisi berdasarkan data soal"
          ],
          [
            "Pembelian bahan baku",
            "Diisi berdasarkan data soal"
          ],
          [
            "+ Freight-in atau kos angkut pembelian jika ada",
            "Diisi berdasarkan data soal"
          ],
          [
            "− Retur dan potongan pembelian jika ada",
            "(Diisi berdasarkan data soal)"
          ],
          [
            "= Pembelian bahan baku bersih",
            "Diisi berdasarkan data soal"
          ],
          [
            "= Bahan baku tersedia untuk digunakan",
            "Diisi berdasarkan data soal"
          ],
          [
            "− Persediaan bahan baku akhir",
            "(Diisi berdasarkan data soal)"
          ],
          [
            "= Bahan baku yang digunakan dalam produksi",
            "Diisi berdasarkan data soal"
          ]
        ]
      },
      {
        "kind": "h3",
        "text": "2. Statement of Cost of Goods Manufactured"
      },
      {
        "kind": "table",
        "headers": [
          "Komponen",
          "Nilai"
        ],
        "rows": [
          [
            "Bahan baku yang digunakan",
            "Diisi berdasarkan data soal"
          ],
          [
            "Tenaga kerja langsung",
            "Diisi berdasarkan data soal"
          ],
          [
            "Overhead pabrik",
            "Diisi berdasarkan data soal"
          ],
          [
            "= Total biaya produksi periode berjalan",
            "Diisi berdasarkan data soal"
          ],
          [
            "+ Persediaan awal barang dalam proses",
            "Diisi berdasarkan data soal"
          ],
          [
            "= Total biaya dalam proses",
            "Diisi berdasarkan data soal"
          ],
          [
            "− Persediaan akhir barang dalam proses",
            "(Diisi berdasarkan data soal)"
          ],
          [
            "= Cost of Goods Manufactured / Harga Pokok Produksi",
            "Diisi berdasarkan data soal"
          ]
        ]
      },
      {
        "kind": "h3",
        "text": "3. Statement of Cost of Goods Sold"
      },
      {
        "kind": "table",
        "headers": [
          "Komponen",
          "Nilai"
        ],
        "rows": [
          [
            "Persediaan awal barang jadi",
            "Diisi berdasarkan data soal"
          ],
          [
            "+ Cost of Goods Manufactured",
            "Diisi berdasarkan data soal"
          ],
          [
            "= Barang jadi tersedia untuk dijual",
            "Diisi berdasarkan data soal"
          ],
          [
            "− Persediaan akhir barang jadi",
            "(Diisi berdasarkan data soal)"
          ],
          [
            "= Cost of Goods Sold / Harga Pokok Penjualan",
            "Diisi berdasarkan data soal"
          ]
        ]
      },
      {
        "kind": "h3",
        "text": "4. Income Statement Manufaktur"
      },
      {
        "kind": "table",
        "headers": [
          "Komponen",
          "Nilai"
        ],
        "rows": [
          [
            "Penjualan",
            "Diisi berdasarkan data soal"
          ],
          [
            "− Cost of Goods Sold",
            "(Diisi berdasarkan data soal)"
          ],
          [
            "= Laba kotor",
            "Diisi berdasarkan data soal"
          ],
          [
            "− Selling expenses",
            "(Diisi berdasarkan data soal)"
          ],
          [
            "− Administrative expenses",
            "(Diisi berdasarkan data soal)"
          ],
          [
            "= Laba operasi",
            "Diisi berdasarkan data soal"
          ]
        ]
      },
      {
        "kind": "h3",
        "text": "5. Bagian Persediaan pada Balance Sheet"
      },
      {
        "kind": "table",
        "headers": [
          "Persediaan",
          "Makna"
        ],
        "rows": [
          [
            "Materials Inventory",
            "Bahan yang belum digunakan"
          ],
          [
            "Work in Process Inventory",
            "Produk yang sedang diproses dan belum selesai"
          ],
          [
            "Finished Goods Inventory",
            "Produk selesai yang belum dijual"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Rumus Penting TM 3"
      },
      {
        "kind": "formula",
        "text": "Materials Used = Beginning Materials Inventory + Net Purchases − Ending Materials Inventory"
      },
      {
        "kind": "formula",
        "text": "Total Manufacturing Cost = Direct Materials Used + Direct Labor + Factory Overhead"
      },
      {
        "kind": "formula",
        "text": "Cost of Goods Manufactured = Beginning WIP + Total Manufacturing Cost − Ending WIP"
      },
      {
        "kind": "formula",
        "text": "Cost of Goods Sold = Beginning Finished Goods + Cost of Goods Manufactured − Ending Finished Goods"
      },
      {
        "kind": "formula",
        "text": "Gross Profit = Sales − Cost of Goods Sold"
      },
      {
        "kind": "h2",
        "text": "Contoh Kasus Terpadu"
      },
      {
        "kind": "example",
        "title": "PT Attar Gemintang — alur HPP",
        "blocks": [
          {
            "kind": "p",
            "text": "Data: persediaan awal bahan Rp1.300, pembelian bahan Rp12.500, persediaan akhir bahan Rp1.600, upah langsung Rp15.200, overhead Rp12.400, BDP awal Rp3.400, BDP akhir Rp3.800, barang jadi awal Rp2.400, barang jadi akhir Rp2.600."
          },
          {
            "kind": "ol",
            "items": [
              "Bahan digunakan = 1.300 + 12.500 − 1.600 = Rp12.200.",
              "Total biaya produksi = 12.200 + 15.200 + 12.400 = Rp39.800.",
              "Cost of Goods Manufactured = 3.400 + 39.800 − 3.800 = Rp39.400.",
              "Cost of Goods Sold = 2.400 + 39.400 − 2.600 = Rp39.200."
            ]
          },
          {
            "kind": "formula",
            "text": "HPP = Rp39.200"
          }
        ]
      },
      {
        "kind": "h2",
        "text": "Workspace Batch 12B - Laporan Manufaktur dengan Data Lengkap"
      },
      {
        "kind": "table",
        "caption": "Data berasal dari contoh terpadu PT Attar Gemintang pada TM 3.",
        "headers": [
          "Komponen data",
          "Nilai"
        ],
        "rows": [
          ["Persediaan awal bahan", "Rp1.300"],
          ["Pembelian bahan", "Rp12.500"],
          ["Persediaan akhir bahan", "Rp1.600"],
          ["Tenaga kerja langsung", "Rp15.200"],
          ["Overhead pabrik", "Rp12.400"],
          ["BDP awal", "Rp3.400"],
          ["BDP akhir", "Rp3.800"],
          ["Barang jadi awal", "Rp2.400"],
          ["Barang jadi akhir", "Rp2.600"]
        ]
      },
      {
        "kind": "table-fill",
        "spec": {
          "title": "Worksheet COGM dan COGS TM 3",
          "instruction": "Hitung secara berurutan. Jangan langsung menghitung COGS sebelum menghitung bahan digunakan, total manufacturing cost, dan COGM.",
          "currency": "Rp",
          "headers": [
            "Langkah laporan",
            "Jawaban"
          ],
          "rows": [
            {
              "id": "tm3-materials-used",
              "label": "Materials used = 1.300 + 12.500 - 1.600",
              "cells": [
                { "id": "tm3-materials-used-answer", "answer": 12200, "placeholder": "isi angka" }
              ]
            },
            {
              "id": "tm3-total-manufacturing-cost",
              "label": "Total manufacturing cost = materials used + direct labor + factory overhead",
              "cells": [
                { "id": "tm3-total-mfg-answer", "answer": 39800, "placeholder": "isi angka" }
              ]
            },
            {
              "id": "tm3-cogm",
              "label": "COGM = BDP awal + total manufacturing cost - BDP akhir",
              "cells": [
                { "id": "tm3-cogm-answer", "answer": 39400, "placeholder": "isi angka" }
              ]
            },
            {
              "id": "tm3-goods-available",
              "label": "Barang jadi tersedia dijual = barang jadi awal + COGM",
              "cells": [
                { "id": "tm3-goods-available-answer", "answer": 41800, "placeholder": "isi angka" }
              ]
            },
            {
              "id": "tm3-cogs",
              "label": "COGS = barang jadi tersedia dijual - barang jadi akhir",
              "cells": [
                { "id": "tm3-cogs-answer", "answer": 39200, "placeholder": "isi angka" }
              ]
            }
          ]
        }
      },
      {
        "kind": "journal-builder",
        "spec": {
          "title": "Journal Builder Siklus Biaya TM 3",
          "instruction": "Gunakan angka dari contoh PT Attar Gemintang. Latihan ini menyambungkan laporan manufaktur dengan jurnal alur biaya. Untuk penyederhanaan, overhead aktual dianggap sama dengan overhead yang dibebankan.",
          "currency": "Rp",
          "accountChoices": [
            "Materials Inventory",
            "Work in Process",
            "Factory Overhead Control",
            "Applied Factory Overhead",
            "Finished Goods",
            "Cost of Goods Sold",
            "Wages Payable/Cash",
            "Various Accounts"
          ],
          "lines": [
            { "id": "tm3-j1-dr", "group": "Pemakaian bahan langsung", "account": "Work in Process", "debit": 12200 },
            { "id": "tm3-j1-cr", "account": "Materials Inventory", "credit": 12200 },
            { "id": "tm3-j2-dr", "group": "Pembebanan tenaga kerja langsung", "account": "Work in Process", "debit": 15200 },
            { "id": "tm3-j2-cr", "account": "Wages Payable/Cash", "credit": 15200 },
            { "id": "tm3-j3-dr", "group": "Overhead aktual", "account": "Factory Overhead Control", "debit": 12400 },
            { "id": "tm3-j3-cr", "account": "Various Accounts", "credit": 12400 },
            { "id": "tm3-j4-dr", "group": "Overhead dibebankan ke produksi", "account": "Work in Process", "debit": 12400 },
            { "id": "tm3-j4-cr", "account": "Applied Factory Overhead", "credit": 12400 },
            { "id": "tm3-j5-dr", "group": "Produk selesai", "account": "Finished Goods", "debit": 39400 },
            { "id": "tm3-j5-cr", "account": "Work in Process", "credit": 39400 },
            { "id": "tm3-j6-dr", "group": "Produk terjual", "account": "Cost of Goods Sold", "debit": 39200 },
            { "id": "tm3-j6-cr", "account": "Finished Goods", "credit": 39200 }
          ]
        }
      },
      {
        "kind": "solution-reveal",
        "title": "Pembahasan COGM, COGS, dan jurnal siklus biaya TM 3",
        "prompt": "Buka setelah worksheet dan journal builder dikerjakan.",
        "blocks": [
          {
            "kind": "ol",
            "items": [
              "Materials used = Rp1.300 + Rp12.500 - Rp1.600 = Rp12.200.",
              "Total manufacturing cost = Rp12.200 + Rp15.200 + Rp12.400 = Rp39.800.",
              "COGM = Rp3.400 + Rp39.800 - Rp3.800 = Rp39.400.",
              "Barang jadi tersedia dijual = Rp2.400 + Rp39.400 = Rp41.800.",
              "COGS = Rp41.800 - Rp2.600 = Rp39.200."
            ]
          },
          {
            "kind": "p",
            "text": "Jurnal mengikuti arus biaya. Direct materials dan direct labor masuk Work in Process. Overhead aktual dikumpulkan di Factory Overhead Control, sedangkan overhead yang dibebankan dikreditkan ke Applied Factory Overhead. Produk selesai dipindahkan ke Finished Goods. Produk yang terjual baru masuk Cost of Goods Sold."
          }
        ]
      },
      {
        "kind": "h2",
        "text": "Kesalahan Umum TM 3"
      },
      {
        "kind": "table",
        "headers": [
          "Kesalahan",
          "Koreksi"
        ],
        "rows": [
          [
            "Menyamakan pembelian bahan dengan bahan digunakan",
            "Bahan digunakan harus memperhitungkan persediaan awal dan akhir bahan."
          ],
          [
            "Menyamakan total biaya produksi dengan COGM",
            "COGM harus memperhitungkan BDP awal dan BDP akhir."
          ],
          [
            "Memindahkan produk selesai langsung ke COGS",
            "Produk selesai masuk Finished Goods lebih dulu sampai terjual."
          ],
          [
            "Memasukkan biaya pemasaran ke overhead pabrik",
            "Biaya pemasaran adalah period cost, bukan factory overhead."
          ],
          [
            "Melupakan jurnal sisi HPP saat penjualan",
            "Penjualan produk mencatat pendapatan dan juga COGS."
          ],
          [
            "Mengabaikan cost accounts",
            "Akun utama harus didukung rincian internal seperti kartu bahan dan job cost sheet."
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Latihan Pemahaman TM 3"
      },
      {
        "kind": "ol",
        "items": [
          "Susun alur biaya dari pembelian bahan sampai produk terjual.",
          "Bedakan Materials Inventory, Work in Process, Finished Goods, dan Cost of Goods Sold.",
          "Jelaskan perbedaan general accounts dan cost accounts.",
          "Sebutkan dokumen sumber untuk materials, labor, dan factory overhead.",
          "Hitung materials used, total manufacturing cost, COGM, dan COGS dari data yang diberikan.",
          "Tentukan sistem akumulasi biaya yang tepat untuk perusahaan konstruksi, pabrik gula, percetakan khusus, dan pabrik minuman botol."
        ]
      },
      {
        "kind": "h2",
        "text": "Ringkasan TM 3"
      },
      {
        "kind": "p",
        "text": "TM 3 menjelaskan bahwa biaya manufaktur mengalir dari Materials Inventory ke Work in Process, kemudian Finished Goods, dan akhirnya Cost of Goods Sold. Alur ini didukung dokumen sumber, general accounts, cost accounts, jurnal, dan laporan manufaktur. Mahasiswa harus mampu menyusun Schedule of Raw Materials Used, Cost of Goods Manufactured, Cost of Goods Sold, dan Income Statement manufaktur secara runtut."
      },
      {
        "kind": "h2",
        "text": "Checklist Kelengkapan TM 3"
      },
      {
        "kind": "table",
        "headers": [
          "Komponen",
          "Status"
        ],
        "rows": [
          [
            "Flow of manufacturing costs",
            "Sudah masuk"
          ],
          [
            "General accounts dan cost accounts",
            "Sudah masuk"
          ],
          [
            "Source documents materials, labor, overhead",
            "Sudah masuk"
          ],
          [
            "Actual, normal, standard, absorption, variable costing",
            "Sudah masuk"
          ],
          [
            "Job order, process, operation/blended costing",
            "Sudah masuk"
          ],
          [
            "Jurnal siklus biaya",
            "Sudah masuk"
          ],
          [
            "Schedule of raw materials used",
            "Sudah masuk"
          ],
          [
            "Statement of Cost of Goods Manufactured",
            "Sudah masuk"
          ],
          [
            "Statement of Cost of Goods Sold",
            "Sudah masuk"
          ],
          [
            "Income Statement manufaktur",
            "Sudah masuk"
          ],
          [
            "Contoh kasus dan latihan",
            "Sudah masuk"
          ]
        ]
      }
    ]
  }
};


// Batch 14 UX polish: navigasi baca dan checkpoint TM 1-3.
applyAkbiReadingUxPolish(AKBI_TM1_TM3_READINGS[1], {
  tm: 1,
  phase: 'pra_uts',
  focus: 'konsep dasar biaya, cost object, klasifikasi biaya, product cost, period cost, prime cost, dan conversion cost',
  theory: 'Bisa menjelaskan cost object, direct-indirect cost, product-period cost, dan tiga elemen biaya produksi.',
  formula: 'Bisa menulis Product Cost, Period Cost, Prime Cost, dan Conversion Cost tanpa tertukar.',
  example: 'Bisa mengklasifikasikan biaya manufaktur dan nonmanufaktur dari kasus sederhana.',
  practice: 'Bisa menentukan DM, DL, FOH, selling expense, dan administrative expense dari daftar biaya.',
  trap: 'Tidak memasukkan biaya pemasaran atau administrasi ke persediaan produk.',
  sourceAlignment: 'RPS TM 1, Carter Ch. 1-2, dan data AKBI existing.',
  nextAction: 'Setelah TM 1, lanjut ke TM 2 untuk melihat bagaimana biaya berubah ketika aktivitas produksi berubah.',
});

applyAkbiReadingUxPolish(AKBI_TM1_TM3_READINGS[2], {
  tm: 2,
  phase: 'pra_uts',
  focus: 'perilaku biaya, fixed cost, variable cost, mixed cost, relevant range, dan high-low method',
  theory: 'Bisa membedakan variable, fixed, mixed, dan step cost dalam relevant range.',
  formula: 'Bisa menghitung variable cost per unit dan fixed cost dengan high-low method.',
  example: 'Bisa membaca data aktivitas-biaya lalu memisahkan mixed cost menjadi komponen tetap dan variabel.',
  practice: 'Bisa membuat fungsi biaya Y = a + bX dari data tertinggi dan terendah.',
  trap: 'Tidak memakai data biaya tertinggi jika aktivitas tertingginya berbeda.',
  sourceAlignment: 'RPS TM 2, Carter Ch. 3, dan materi perilaku biaya AKBI.',
  nextAction: 'Setelah TM 2, lanjut ke TM 3 untuk menghubungkan perilaku biaya dengan alur akumulasi biaya manufaktur.',
});

applyAkbiReadingUxPolish(AKBI_TM1_TM3_READINGS[3], {
  tm: 3,
  phase: 'pra_uts',
  focus: 'siklus biaya, sistem biaya, akumulasi biaya, WIP, finished goods, COGM, dan COGS',
  theory: 'Bisa menjelaskan alur Materials Inventory, Work in Process, Finished Goods, dan COGS.',
  formula: 'Bisa menulis raw materials used, total manufacturing cost, COGM, dan COGS.',
  example: 'Bisa menyusun laporan manufaktur sederhana dari saldo awal, pembelian, pemakaian bahan, dan saldo akhir.',
  practice: 'Bisa menentukan sistem job order, process, atau operation costing dari karakteristik produksi.',
  trap: 'Tidak menukar COGM dengan COGS dan tidak mengabaikan saldo awal/akhir WIP.',
  sourceAlignment: 'RPS TM 3, Carter Ch. 4-5, dan materi siklus biaya AKBI.',
  nextAction: 'Setelah TM 3, lanjut ke TM 4 karena job order costing memakai seluruh alur akumulasi biaya ini pada level pesanan.',
});

export default AKBI_TM1_TM3_READINGS;
