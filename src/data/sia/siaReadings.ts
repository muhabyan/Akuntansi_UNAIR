// =============================================================
// src/data/sia/siaReadings.ts
// Rangkuman materi Sistem Informasi Akuntansi (AKS301).
// Sumber: CHAPTER 1 SIA.pptx — Richardson, Chang et al.
//         Accounting Information Systems, 4e ISE, Chapter 1.
// =============================================================
import type { Reading } from '../../types';

export const AKS301_READINGS: Record<number, Reading> = {
  1: {
    tm: 1,
    title: 'Sistem Informasi Akuntansi & Nilai Perusahaan',
    ref: 'Richardson et al. AIS 4e ISE · Ch. 1',
    intro:
      'Bab ini memperkenalkan peran Sistem Informasi Akuntansi (SIA) dalam mengubah data menjadi keputusan bisnis yang bernilai — mulai dari peran baru akuntan sebagai analis bisnis, konsep dasar SIA, rantai nilai Porter, hingga proses bisnis internal dan eksternal perusahaan.',
    objectives: [
      'Menjelaskan peran akuntan sebagai analis bisnis di era ledakan data.',
      'Mendefinisikan Sistem Informasi Akuntansi (SIA/AIS) dan membedakan data vs informasi.',
      'Mengidentifikasi atribut informasi yang berguna: relevansi dan faithful representation.',
      'Menjelaskan empat peran akuntan dalam SIA: user, manager, designer, evaluator.',
      'Menjelaskan sertifikasi profesi terkait SIA: CISA, CITP, CIA.',
      'Menjelaskan konsep rantai nilai (value chain) Porter beserta aktivitas utama dan pendukung.',
      'Menjelaskan peran SIA dalam proses bisnis internal (ERP, FRS, HRMS) dan eksternal (supply chain, CRM).',
    ],
    blocks: [
      // ========================
      // BAGIAN 1: Akuntan sebagai Analis Bisnis
      // ========================
      { kind: 'h2', text: 'Akuntan sebagai Analis Bisnis' },
      {
        kind: 'callout',
        variant: 'key',
        title: 'Ledakan Data di Era Digital',
        text: 'Data ada di sekeliling kita dalam berbagai bentuk dan jumlah yang terus bertambah pesat:\n• **1,7 MB** data baru tercipta tiap detik untuk setiap orang di planet ini.\n• **2,5 kuintiliun byte** data tercipta setiap hari di seluruh dunia.\n• **90%** dari seluruh data dunia tercipta hanya dalam 2 tahun terakhir.',
      },
      {
        kind: 'h3',
        text: 'Jenis Data yang Dimiliki Perusahaan',
      },
      {
        kind: 'p',
        text: 'Data ini menyimpan wawasan berharga untuk mendukung pengambilan keputusan:',
      },
      {
        kind: 'ul',
        items: [
          '**Data Transaksional** — dari terminal point-of-sale, setoran bank, dan transaksi harian lainnya.',
          '**Data Perilaku Konsumen** — preferensi dan pola pembelian pelanggan dari berbagai titik kontak.',
          '**Data Produk & Biaya** — ketersediaan produk serta struktur biaya di setiap lini bisnis.',
          '**Statistik Operasional** — dihasilkan di sepanjang rantai pasok, dari pemasok hingga pelanggan.',
        ],
      },
      {
        kind: 'p',
        text: 'Dengan data ini, perusahaan dapat membandingkan hasil dengan *benchmark* yang relevan, lalu mengalokasikan sumber daya — SDM, modal (peralatan & gedung), dan anggaran (pemasaran, iklan, litbang) — secara lebih tepat.',
      },
      {
        kind: 'h3',
        text: 'Kesenjangan Informasi',
      },
      {
        kind: 'callout',
        variant: 'warning',
        title: 'Meski Data Melimpah, Kesenjangan Masih Terjadi',
        text: '• **28%** eksekutif senior keuangan merasa memiliki sedikit atau tidak ada informasi untuk memprediksi kinerja perusahaan.\n• **54%** hanya memiliki separuh dari informasi yang dibutuhkan untuk melihat gambaran kinerja perusahaan secara utuh.\n\nKarena akuntan mengakses dan memberi keyakinan atas kualitas informasi, **akuntan berada di posisi terbaik untuk menjadi *business analyst* bagi organisasi**.',
      },
      {
        kind: 'h3',
        text: 'Peran Baru: Akuntan sebagai Business Analyst',
      },
      {
        kind: 'p',
        text: 'Sebagai *business analyst*, akuntan memanfaatkan pengetahuannya atas data yang tersedia dari Accounting Information Systems (AIS) untuk memberi wawasan berbasis data kepada manajemen — melihat organisasi secara menyeluruh dan membantu mengoptimalkan kinerja perusahaan secara keseluruhan.',
      },
      {
        kind: 'ol',
        items: [
          '**Mengakses Data** — menelusuri data yang tersedia dari sistem informasi akuntansi perusahaan.',
          '**Menghasilkan Wawasan** — mengubah data mentah menjadi wawasan yang relevan bagi manajemen.',
          '**Mendukung Keputusan** — membantu manajemen mengoptimalkan kinerja perusahaan secara menyeluruh.',
        ],
      },
      {
        kind: 'h3',
        text: 'Contoh Penerapan Akuntan-Analis Bisnis',
      },
      {
        kind: 'ol',
        items: [
          '**Menilai peluang outsourcing** — misalnya, apakah perlu mengalihdayakan sebagian fungsi manufaktur ke Sri Lanka.',
          '**Memilih produk unggulan** — mempromosikan satu produk streaming dibanding lainnya berdasarkan proyeksi margin laba.',
          '**Menyusun strategi litbang & pajak** — merancang proyek R&D agar memanfaatkan insentif pajak, sekaligus meminimalkan pajak kini/mendatang.',
          '**Mendeteksi risiko pada jurnal** — mengevaluasi jurnal berdasarkan skor risiko (pencatat, nilai, otorisasi, kombinasi akun janggal) untuk menemukan kesalahan atau *fraud*.',
          '**Memprediksi persediaan usang** — memakai ulasan produk untuk memprediksi item mana yang akan/tidak laku terjual.',
          '**Memprediksi cadangan piutang tak tertagih** — mengklasifikasikan pelanggan mana yang mampu membayar berdasarkan seluruh informasi yang dimiliki perusahaan.',
          '**Mendukung evaluasi audit** — memberi auditor informasi untuk mengevaluasi saldo akun dan mengidentifikasi potensi salah saji material.',
          '**Memprediksi penurunan nilai goodwill** — memakai media sosial, kondisi makroekonomi, pers bisnis, atau kinerja akuntansi terkini.',
          '**Mengestimasi perilaku biaya** — memisahkan biaya tetap dan variabel produk untuk memprediksi titik impas penjualan.',
          '**Memprediksi retur penjualan** — memenuhi ketentuan GAAP untuk mencocokkan estimasi retur masa depan dengan penjualan periode berjalan.',
        ],
      },

      // ========================
      // BAGIAN 2: Konsep Dasar SIA
      // ========================
      { kind: 'h2', text: 'Konsep Dasar Sistem Informasi Akuntansi' },
      {
        kind: 'callout',
        variant: 'key',
        title: 'Definisi SIA (Accounting Information System / AIS)',
        text: 'Sistem Informasi Akuntansi (SIA/AIS) adalah sistem yang **mencatat, memproses, meringkas, melaporkan, dan mengomunikasikan** hasil transaksi bisnis untuk menyediakan informasi finansial maupun nonfinansial guna mendukung pengambilan keputusan — sekaligus memastikan **pengendalian internal** yang memadai untuk melindungi integritas dan privasi data.\n\nSIA berada di persimpangan dua disiplin ilmu: **sistem informasi** dan **akuntansi**. Sebagian pihak menyebutnya Sistem Pelaporan Keuangan (FRS); pandangan yang lebih luas turut mencakup data nonfinansial seperti data penjualan, aktivitas pemasaran, dan hasil investasi litbang.',
      },
      {
        kind: 'h3',
        text: 'Model Sistem Informasi Sederhana',
      },
      {
        kind: 'p',
        text: 'Setiap sistem informasi, termasuk SIA, dapat dijelaskan melalui pendekatan sistem umum:',
      },
      {
        kind: 'ol',
        items: [
          '**Input** — data mentah masuk, misalnya penjualan yang terekam di kasir/POS.',
          '**Storage** — data disimpan dalam basis data atau tabel data.',
          '**Processing** — data diproses lewat kueri (mis. SQL) untuk diolah lebih lanjut.',
          '**Output** — menghasilkan laporan yang siap dipakai manajemen.',
        ],
      },
      {
        kind: 'example',
        title: 'Contoh: Starbucks',
        blocks: [
          {
            kind: 'p',
            text: '**Kasus:** Starbucks dapat meng-kueri basis data penjualannya untuk melihat seberapa banyak kopi yang terjual menjelang Natal, guna menentukan perlunya insentif penjualan tambahan di masa depan.',
          },
        ],
      },
      {
        kind: 'h3',
        text: 'Atribut Informasi yang Berguna',
      },
      {
        kind: 'p',
        text: 'Agar berguna bagi pengambil keputusan, informasi dari SIA harus memenuhi dua kualitas fundamental:',
      },
      {
        kind: 'callout',
        variant: 'info',
        title: '1. Relevansi',
        text: '• **Nilai Konfirmatori (Feedback)** — mengoreksi atau mengonfirmasi apa yang telah diprediksi sebelumnya.\n• **Nilai Prediktif** — membantu pengambil keputusan memperkirakan apa yang akan terjadi di masa depan.\n• **Materialitas** — berada di atas ambang batas — jika informasi hilang atau salah, keputusan bisa terpengaruh.',
      },
      {
        kind: 'callout',
        variant: 'info',
        title: '2. Faithful Representation (Representasi Jujur)',
        text: '• **Lengkap (Complete)** — mencakup seluruh transaksi moneter, tidak ada yang terlewat.\n• **Netral (Neutrality)** — tidak dirancang untuk menggiring pengguna menerima atau menolak alternatif tertentu.\n• **Bebas dari Kesalahan** — tidak mengandung kekeliruan atau ketidakakuratan.\n\n*Contoh:* Jika Amazon menjual sepatu atletik seharga $300, transaksi itu harus dicatat dan dilaporkan di akun pendapatan penjualan sebesar $300 — apa adanya, bebas dari kesalahan atau bias.',
      },
      {
        kind: 'h3',
        text: 'Data versus Informasi',
      },
      {
        kind: 'p',
        text: '**Data** adalah fakta mentah yang menggambarkan karakteristik suatu kejadian — jika berdiri sendiri, hampir tidak bermakna.',
      },
      {
        kind: 'p',
        text: '**Informasi** adalah data yang telah diorganisasikan dengan cara yang bermakna bagi penggunanya — biasanya diproses (diringkas, dihitung, diurutkan) lalu digabungkan dengan konteks yang sesuai (tahun, lokasi, dsb). Data dianggap sebagai **input**, sedangkan informasi dianggap sebagai **output**.',
      },
      {
        kind: 'callout',
        variant: 'tip',
        title: 'Kutipan Penting',
        text: '"Data memang tersedia luas — yang langka justru kemampuan untuk mengekstrak kebijaksanaan darinya." — **Hal Varian, Chief Economist Google**',
      },
      {
        kind: 'example',
        title: 'Studi Kasus: Walmart Retail Link & Harga Pisang',
        blocks: [
          {
            kind: 'p',
            text: '**Kasus:** Pisang adalah produk terlaris Walmart: lebih dari 1 miliar pon terjual per tahun (32 pon setiap detik). Berikut pertanyaan bisnis yang bisa dijawab SIA:',
          },
          {
            kind: 'ol',
            items: [
              'Berapa pon pisang terjual di toko Lawrence, Kansas pada 1 Agustus tahun ini vs tahun lalu? Berapa yang harus dibuang/didonasikan?',
              'Berapa harga yang tepat untuk memaksimalkan laba, atau agar pelanggan konsisten membeli pisang dan produk lain?',
              'Bagaimana *trade-off* harga organik vs nonorganik di lokasi berbeda — apakah dipengaruhi lokasi, musim, atau besaran selisih harga?',
              'Barang apa lagi yang laku bersama pisang, dan sebaiknya diletakkan di dekatnya untuk meningkatkan peluang terjual?',
            ],
          },
        ],
      },
      {
        kind: 'h3',
        text: 'Rantai Nilai Informasi (Information Value Chain)',
      },
      {
        kind: 'p',
        text: 'Transformasi dari kebutuhan bisnis hingga keputusan akhir:',
      },
      {
        kind: 'ol',
        items: [
          '**Business Need & Event** — kebutuhan bisnis dan kejadian bisnis (mis. transaksi penjualan).',
          '**Data** — fakta mentah dari setiap transaksi yang terjadi.',
          '**Informasi** — data yang telah diproses dan diberi konteks.',
          '**Pengetahuan** — informasi yang telah dipahami dan bernilai guna.',
          '**Keputusan** — dasar pengambilan keputusan bisnis yang tepat.',
        ],
      },
      {
        kind: 'callout',
        variant: 'warning',
        title: 'Waspadai Information Overload',
        text: '*Information overload* adalah kesulitan memahami masalah dan mengambil keputusan ketika informasi yang tersedia justru terlalu banyak. SIA harus dirancang cermat agar tidak membanjiri penggunanya.',
      },
      {
        kind: 'h3',
        text: 'Informasi Diskresioner versus Mandatori',
      },
      {
        kind: 'ul',
        items: [
          '**Informasi Diskresioner** — informasi akuntansi manajerial untuk keperluan internal; tidak ada aturan hukum yang mewajibkannya. Manajemen menentukan sendiri kebutuhan informasi dan sistem pelacakannya.',
          '**Informasi Mandatori** — informasi yang wajib disediakan sesuai ketentuan hukum atau standar akuntansi yang berlaku, seperti laporan keuangan untuk pihak eksternal.',
        ],
      },
      {
        kind: 'callout',
        variant: 'tip',
        title: 'Rumus Nilai Informasi',
        text: '**Nilai informasi = manfaat yang diperoleh dari penggunaannya − biaya untuk menghasilkannya.** Untuk informasi diskresioner, manajemen harus menimbang apakah manfaatnya melebihi biayanya.\n\n*Contoh:* Manajemen Tesla mungkin menginginkan sistem Activity-Based Costing (ABC) untuk menentukan *cost driver* yang tepat dalam mengalokasikan biaya overhead ke berbagai produk (Model 3, Model X, Model S).',
      },

      // ========================
      // BAGIAN 3: Peran & Sertifikasi Akuntan dalam SIA
      // ========================
      { kind: 'h2', text: 'Peran & Sertifikasi Akuntan dalam SIA' },
      {
        kind: 'callout',
        variant: 'key',
        title: 'TI & Akuntansi: Kemitraan yang Semakin Erat',
        text: '"TI telah tumbuh (dan akan terus tumbuh) begitu pesat sehingga tidak lagi bisa dianggap disiplin di pinggiran akuntansi. Profesi akuntansi telah menyatu dan berkembang bersama TI, hingga sulit membayangkan akuntansi terlepas dari TI." — **International Federation of Accountants (IFAC)**',
      },
      {
        kind: 'h3',
        text: 'Empat Peran Akuntan dalam SIA',
      },
      {
        kind: 'p',
        text: 'AICPA & IFAC mensyaratkan setiap akuntan mahir sebagai pengguna, ditambah minimal satu peran lain:',
      },
      {
        kind: 'ol',
        items: [
          '**Pengguna (User)** — menginput jurnal, memakai spreadsheet keuangan, atau software audit seperti IDEA dan RPA (UiPath, Power Automate).',
          '**Manajer (Manager)** — merencanakan, mengoordinasikan, mengarahkan, dan mengendalikan SIA — misalnya sebagai controller atau CFO.',
          '**Perancang (Designer)** — melakukan analisis kelayakan, elisitasi kebutuhan informasi, desain berkas data, layar, dan laporan.',
          '**Evaluator** — mengevaluasi pengendalian internal (sesuai SOX), keamanan siber, dan memberi rekomendasi perbaikan.',
        ],
      },
      {
        kind: 'h3',
        text: 'Sertifikasi Profesi dalam SIA',
      },
      {
        kind: 'table',
        headers: ['Sertifikasi', 'Lembaga', 'Fokus Kompetensi'],
        rows: [
          ['CISA (Certified Information Systems Auditor)', 'ISACA', 'Audit TI untuk mengevaluasi desain dan efektivitas pengendalian internal sistem informasi akuntansi.'],
          ['CITP (Certified Information Technology Professional)', 'AICPA', 'Akuntan (CPA) dengan keahlian luas di SIA — keandalan, keamanan, aksesibilitas, dan relevansi data.'],
          ['CIA (Certified Internal Auditor)', 'IIA (Institute of Internal Auditors)', 'Satu-satunya sertifikasi yang diakui secara global untuk kompetensi auditor internal.'],
        ],
      },
      {
        kind: 'h3',
        text: 'CPA Evolution',
      },
      {
        kind: 'p',
        text: 'AICPA meluncurkan inisiatif **CPA Evolution** untuk mentransformasi ujian dan model lisensi CPA, mengakui kompetensi yang terus berubah cepat. Sistem Informasi Akuntansi terintegrasi dalam bagian inti maupun disiplin spesifik ujian CPA — termasuk **analitik data**, **blockchain**, dan **keamanan siber**.',
      },

      // ========================
      // BAGIAN 4: Rantai Nilai (Value Chain)
      // ========================
      { kind: 'h2', text: 'Rantai Nilai (Value Chain)' },
      {
        kind: 'p',
        text: '**Nilai bisnis (*business value*)** adalah seluruh hal, kejadian, dan interaksi yang menentukan kesehatan finansial dan/atau kesejahteraan perusahaan — bisa berasal dari pemasok, pelanggan, karyawan, bahkan sistem informasi. Nilai bisnis tidak selalu diukur dari harga saham atau laba bersih; misalnya, Palang Merah Internasional mengukur nilai dari jumlah nyawa yang terselamatkan.',
      },
      {
        kind: 'p',
        text: '**Proses bisnis (*business process*)** adalah serangkaian aktivitas terkoordinasi dan terstandardisasi oleh manusia dan peralatan untuk menyelesaikan tugas tertentu, seperti menagih pelanggan.',
      },
      {
        kind: 'p',
        text: '**Rantai nilai (*value chain*)** Porter adalah rangkaian proses bisnis perusahaan — produk melewati setiap aktivitas secara berurutan, dan di tiap aktivitas produk diharapkan memperoleh tambahan nilai.',
      },
      {
        kind: 'callout',
        variant: 'tip',
        title: 'Analogi Berlian',
        text: 'Memotong berlian kasar berbiaya rendah, namun aktivitas ini menambah nilai besar — berlian yang telah dipotong jauh lebih bernilai daripada berlian kasar, dan potongan yang baik menambah nilai lebih besar lagi.',
      },
      {
        kind: 'h3',
        text: 'Lima Aktivitas Utama (Primary Activities)',
      },
      {
        kind: 'p',
        text: 'Aktivitas utama memberi nilai secara langsung kepada pelanggan:',
      },
      {
        kind: 'ol',
        items: [
          '**Logistik Masuk (*Inbound Logistics*)** — menerima, menyimpan, dan mendistribusikan bahan baku ke bagian produksi sesuai kebutuhan.',
          '**Operasi (*Operations*)** — mengubah input menjadi barang dan jasa jadi — misalnya mengubah kayu menjadi mebel.',
          '**Logistik Keluar (*Outbound Logistics*)** — menyimpan barang jadi di gudang dan mendistribusikannya ke pelanggan.',
          '**Pemasaran & Penjualan** — mengidentifikasi kebutuhan dan keinginan pelanggan agar tertarik membeli produk perusahaan.',
          '**Layanan (*Service*)** — memberi dukungan purnajual — perbaikan garansi, suku cadang, dan panduan penggunaan.',
        ],
      },
      {
        kind: 'h3',
        text: 'Empat Aktivitas Pendukung (Support Activities)',
      },
      {
        kind: 'p',
        text: 'Aktivitas pendukung menopang berjalannya seluruh aktivitas utama:',
      },
      {
        kind: 'ol',
        items: [
          '**Infrastruktur Perusahaan** — mencakup CEO serta departemen keuangan, akuntansi, dan hukum.',
          '**Manajemen SDM** — rekrutmen, perekrutan, pelatihan, dan kompensasi karyawan.',
          '**Teknologi** — seluruh teknologi pendukung nilai, termasuk litbang produk baru dan efisiensi biaya.',
          '**Pengadaan (*Procurement*)** — pembelian bahan baku, perlengkapan, dan peralatan.',
        ],
      },
      {
        kind: 'callout',
        variant: 'info',
        title: 'SIA & Value Chain',
        text: 'SIA dapat menambah nilai pada setiap aktivitas utama — misalnya membantu efisiensi logistik masuk & keluar (biaya transportasi, pergudangan) atau meringkas data pelanggan kunci untuk memperkuat pemasaran dan layanan.',
      },

      // ========================
      // BAGIAN 5: SIA dalam Proses Bisnis
      // ========================
      { kind: 'h2', text: 'SIA dalam Proses Bisnis' },
      {
        kind: 'h3',
        text: 'Proses Bisnis Internal: Enterprise System (ERP)',
      },
      {
        kind: 'p',
        text: '**Enterprise System (ES) / ERP** adalah basis data terpusat yang mengumpulkan data dari seluruh perusahaan — pesanan, pelanggan, penjualan, persediaan, dan karyawan — lalu tersedia bagi seluruh pengguna: akuntansi, produksi, pemasaran, dan SDM. Manfaat utamanya adalah **kelengkapan, transparansi, dan ketepatan waktu** informasi untuk mengelola aktivitas bisnis.',
      },
      {
        kind: 'example',
        title: 'Contoh: Proses Order Fulfillment',
        blocks: [
          {
            kind: 'ol',
            items: [
              '**Terima Pesanan** — cek kredit & riwayat pelanggan dari modul keuangan.',
              '**Cek Persediaan** — lihat stok gudang dari modul persediaan.',
              '**Kirim Pesanan** — jadwalkan pengiriman dari modul logistik.',
              '**Buat Faktur** — kembali ke departemen keuangan untuk menagih pelanggan.',
            ],
          },
        ],
      },
      {
        kind: 'h3',
        text: 'FRS & HRMS: Dua Sistem Kunci Proses Internal',
      },
      {
        kind: 'ul',
        items: [
          '**Financial Reporting System (FRS)** — mengukur dan mencatat transaksi akuntansi ke buku besar serta jurnal dan subledger terkait. FRS meringkas dan mengomunikasikan hasilnya dalam laporan keuangan, catatan kaki, dan pengungkapan terkait.',
          '**Human Resource Management System (HRMS)** — mencatat dan melacak interaksi karyawan — data pegawai, penggajian, tunjangan, kehadiran, jenjang karier, dan evaluasi kinerja — untuk memastikan tenaga kerja siap menjalankan strategi perusahaan.',
        ],
      },
      {
        kind: 'h3',
        text: 'Proses Bisnis Eksternal: Supply Chain Management',
      },
      {
        kind: 'p',
        text: '**Supply chain** adalah aliran material, informasi, pembayaran, dan jasa — dari pemasok bahan baku, melalui pabrik dan gudang, hingga pelanggan akhir produk perusahaan. Supply chain juga mencakup penanganan retur produk dari pelanggan kembali ke pemasok, yang memerlukan perencanaan matang.',
      },
      {
        kind: 'ul',
        items: [
          '**Pembelian & Arus Pembayaran** — termasuk penanganan material dari pemasok.',
          '**Perencanaan Produksi** — perencanaan dan kendali proses produksi.',
          '**Logistik & Pergudangan** — termasuk kendali persediaan barang.',
          '**Distribusi, Retur & Pengiriman** — didukung software supply chain management.',
        ],
      },
      {
        kind: 'h3',
        text: 'Customer Relationship Management (CRM)',
      },
      {
        kind: 'p',
        text: '**CRM** adalah sistem untuk mengelola dan memelihara interaksi perusahaan dengan pelanggan saat ini maupun calon pelanggan — memakai *database marketing* serta TI untuk mendukung penjualan, pemasaran, dan layanan/dukungan teknis pascapenjualan.',
      },
      {
        kind: 'example',
        title: 'Contoh Penerapan CRM',
        blocks: [
          {
            kind: 'ul',
            items: [
              '**Starbucks** — memakai kartu loyalitas Starbucks Rewards dan survei untuk memahami kembali kebutuhan pelanggan setelah ekspansi cepat awal 2000-an.',
              '**Royal Bank of Canada** — "Menangkap potensi penuh basis pelanggan lewat informasi pelanggan untuk memberi solusi tepat di setiap titik kontak."',
              '**Salesforce** — "CRM membantu perusahaan memahami kebutuhan pelanggan lewat pengelolaan informasi dan interaksi yang lebih baik, dalam satu platform."',
            ],
          },
        ],
      },
      {
        kind: 'h3',
        text: 'Studi Kasus: Sistem Akuntansi Biaya (Cost Accounting System)',
      },
      {
        kind: 'p',
        text: 'Sistem Akuntansi Biaya mengagregasi, memonitor, dan melaporkan informasi pendapatan, biaya, dan profitabilitas kepada manajemen. Sistem ini mengintegrasikan data dari berbagai sumber:',
      },
      {
        kind: 'ul',
        items: [
          '**FRS** — memberi info biaya langsung & tidak langsung untuk tiap objek biaya, dari buku besar dan jurnal terkait.',
          '**HRMS** — memberi info tenaga kerja langsung dan tidak langsung sebagai komponen biaya.',
          '**Manufacturing / Supply Chain System** — memberi info bahan langsung dan tidak langsung dari proses dan pekerjaan yang diselesaikan.',
          '**CRM** — memberi info pendapatan untuk menilai profitabilitas di tingkat pelanggan, produk, dan perusahaan.',
        ],
      },

      // ========================
      // RINGKASAN BAB
      // ========================
      {
        kind: 'callout',
        variant: 'key',
        title: 'Ringkasan Bab 1',
        text: '1. **Akuntan sebagai analis bisnis** — peran akuntan makin penting di tengah ledakan data untuk mendukung keputusan bisnis.\n2. **SIA mendukung pengambilan keputusan** — mencatat, memproses, dan melaporkan informasi finansial & nonfinansial secara terkendali.\n3. **Informasi yang berguna harus relevan & jujur** — memenuhi atribut relevansi dan *faithful representation* agar dapat diandalkan.\n4. **Empat peran akuntan dalam SIA** — sebagai user, manager, designer, dan/atau evaluator — didukung sertifikasi seperti CISA, CITP, CIA.\n5. **SIA menopang rantai nilai & proses bisnis** — baik proses internal (ERP, FRS, HRMS) maupun eksternal (supply chain, CRM).',
      },

      // ========================
      // PERTANYAAN DISKUSI
      // ========================
      { kind: 'h2', text: 'Pertanyaan untuk Didiskusikan' },
      {
        kind: 'ol',
        items: [
          'Apakah seorang IT auditor berperan sebagai user, manager, evaluator, atau designer SIA kliennya?',
          'Sertifikasi apa yang paling sesuai bagi seseorang yang ingin berkarier sebagai IT auditor?',
          'Wajarkah mengharapkan lulusan akuntansi mahir TI untuk posisi *entry-level*? Bagaimana perubahan ujian CPA memengaruhi ekspektasi ini?',
          'Bagaimana *software supply chain management* dapat bekerja bagi perusahaan manufaktur seperti General Motors?',
          'Informasi apa yang bisa dikumpulkan universitas tentang mahasiswanya lewat teknik CRM untuk mendukung rekrutmen mahasiswa baru?',
        ],
      },
    ],
  },
};
