// =============================================================
// src/data/sia/siaReadings.ts
// Rangkuman komprehensif materi Sistem Informasi Akuntansi (AKS301).
// Sumber: Accounting Information Systems (4th ISE ed.) —
//         Vernon J. Richardson, C. Janie Chang, Rod E. Smith (McGraw-Hill).
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
  2: {
  "tm": 2,
  "title": "Akuntan sebagai Analis Bisnis & Pemodelan Proses Bisnis (BPMN 2.0)",
  "ref": "Richardson et al. AIS 4e · Ch. 2",
  "intro": "Tatap Muka 2 membahas peran transformatif akuntan dari sekadar pencatat buku menjadi analis proses bisnis. Menggunakan standar Business Process Model and Notation (BPMN 2.0), mahasiswa mempelajari cara mendokumentasikan, menganalisis inefisiensi, dan merekayasa ulang (BPR) alur kerja akuntansi dan pengendalian internal.",
  "objectives": [
    "Menjelaskan peran akuntan sebagai desainer, pengguna, dan auditor proses bisnis dalam kepatuhan SOX 404.",
    "Menguasai pemodelan BPMN 2.0: Events (Start, Intermediate, End), Activities, Gateways (Exclusive, Parallel, Inclusive).",
    "Membedakan fungsi Pools (batas organisasi independen) vs Swimlanes (departemen/peran internal).",
    "Menganalisis perbedaan Sequence Flow (alur dalam pool) vs Message Flow (komunikasi antar pool).",
    "Mendeteksi kelemahan pengendalian internal dan pemisahan tugas (SoD) melalui diagram proses alur kerja."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Peran Akuntan sebagai Analis Proses Bisnis & Kepatuhan SOX"
    },
    {
      "kind": "p",
      "text": "Regulasi modern seperti Sarbanes-Oxley Act (SOX) Section 404 mewajibkan manajemen dan auditor eksternal mendokumentasikan dan mengevaluasi efektivitas pengendalian internal atas pelaporan keuangan (ICFR). Dokumentasi naratif saja sering kali menimbulkan ambiguitas. Oleh karena itu, standar visual seperti BPMN 2.0 (Object Management Group) menjadi bahasa universal yang menghubungkan akuntan, auditor, dan tim TI."
    },
    {
      "kind": "p",
      "text": "Sebagai analis bisnis, akuntan menggunakan diagram alur proses untuk mengidentifikasi bottleneck (penumpukan antrean verifikasi), redundansi (entri data berulang), keterlambatan siklus kas, serta titik-titik kerentanan fraud (misalnya otorisasi kredit dan pengiriman barang dipegang oleh personil yang sama)."
    },
    {
      "kind": "h2",
      "text": "Elemen Notasi Utama BPMN 2.0"
    },
    {
      "kind": "table",
      "caption": "Tabel 2.1: Katalog Simbol Standar BPMN 2.0 dan Karakteristik Pengendalian",
      "headers": [
        "Kategori",
        "Simbol",
        "Notasi Grafis",
        "Deskripsi & Implikasi Audit"
      ],
      "rows": [
        [
          "Start Event",
          "Lingkaran garis tunggal tipis",
          "○",
          "Pemicu dimulainya proses (misal: Pesanan Masuk, Faktur Diterima). Audit memeriksa cap waktu (timestamp) pemicu."
        ],
        [
          "Intermediate Event",
          "Lingkaran garis ganda",
          "◎",
          "Kejadian di tengah proses (misal: Menunggu Pembayaran, Pengiriman Notifikasi). Menandakan jeda waktu atau syarat eksternal."
        ],
        [
          "End Event",
          "Lingkaran garis tebal",
          "●",
          "Hasil akhir dari proses (misal: Barang Terkirim, Transaksi Dibatalkan)."
        ],
        [
          "Activity / Task",
          "Persegi panjang sudut membulat",
          "[ Tugas ]",
          "Tindakan spesifik yang dilakukan personil atau sistem (misal: 'Verifikasi Batas Kredit', 'Rekonsiliasi Bank')."
        ],
        [
          "Exclusive Gateway (XOR)",
          "Belah ketupat bertanda X",
          "◇ (X)",
          "Percabangan kondisi di mana HANYA SATU jalur yang dapat dipilih (misal: Kredit Disetujui ATAU Ditolak)."
        ],
        [
          "Parallel Gateway (AND)",
          "Belah ketupat bertanda +",
          "◇ (+)",
          "Pemisahan alur menjadi beberapa jalur yang dieksekusi SECARA BERSAMAAN tanpa syarat (misal: Kirim Pesanan DAN Terbitkan Tagihan)."
        ],
        [
          "Inclusive Gateway (OR)",
          "Belah ketupat bertanda O",
          "◇ (O)",
          "Percabangan di mana satu atau beberapa jalur dapat dipilih sekaligus berdasarkan pemenuhan syarat."
        ],
        [
          "Sequence Flow",
          "Garis solid bertanda panah",
          "───►",
          "Menunjukkan urutan eksekusi aktivitas DALAM SATU POOL. Tidak boleh menembus batas pool."
        ],
        [
          "Message Flow",
          "Garis putus-putus bertanda lingkaran & panah terbuka",
          "◌ - - - ▷",
          "Menunjukkan pertukaran pesan/informasi ANTARA DUA POOL TERPISAH (misal: Pelanggan ke Perusahaan)."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Aturan Desain Swimlanes & Pemisahan Tugas (Segregation of Duties)"
    },
    {
      "kind": "p",
      "text": "Pool menggambarkan entitas bisnis atau proses independen (misal: Perusahaan A vs Bank Mandiri vs Pelanggan). Di dalam pool organisasi, proses dibagi ke dalam Swimlanes vertikal atau horizontal yang mencerminkan pemisahan fungsi akuntansi:"
    },
    {
      "kind": "ul",
      "items": [
        "Lane Penjualan (Otorisasi Transaksi): Bertanggung jawab menerima pesanan pelanggan dan membuat Sales Order.",
        "Lane Kredit (Penilai Risiko Independen): Mengevaluasi kelayakan kredit pelanggan. Wajib terpisah dari departemen penjualan agar tidak ada konflik kepentingan omzet vs risiko kredit macet.",
        "Lane Pergudangan (Kustodi Aset): Memegang kendali fisik barang persediaan dan melakukan picking barang.",
        "Lane Pengiriman (Verifikasi Independen & Serah Terima): Memeriksa kesesuaian fisik barang dengan packing slip sebelum menyerahkan ke ekspedisi.",
        "Lane Penagihan/Piutang (Pencatatan Akuntansi): Menerbitkan faktur resmi dan mencatat jurnal piutang usaha."
      ]
    },
    {
      "kind": "h2",
      "text": "Studi Kasus BPMN: Redesain Siklus Pesanan Penjualan PT Nusantara Niaga"
    },
    {
      "kind": "p",
      "text": "Konteks: PT Nusantara Niaga mengalami kerugian piutang tak tertagih sebesar Rp 450 juta karena staf penjualan dapat langsung menerbitkan Delivery Order tanpa persetujuan Manajer Kredit jika pesanan di bawah Rp 50 juta. Akibatnya, pelanggan yang sudah macet terus diberi barang baru."
    },
    {
      "kind": "p",
      "text": "Analisis Solusi Redesain BPMN:"
    },
    {
      "kind": "ul",
      "items": [
        "Langkah 1: Tambahkan Exclusive Gateway (XOR) tepat setelah aktivitas 'Terima Sales Order'.",
        "Langkah 2: Jalur 1 memeriksa 'Plafon Kredit Cukup DAN Tidak Ada Piutang Lewat Jatuh Tempo > 30 Hari'. Jika Ya -> teruskan ke Gudang.",
        "Langkah 3: Jalur 2 jika Tidak -> alihkan ke Swimlane 'Manajer Kredit' untuk pemeriksaan jaminan atau penahanan pesanan (Credit Hold).",
        "Langkah 4: Tambahkan otomasi validasi limit kredit langsung di sistem ERP terintegrasi."
      ]
    },
    {
      "kind": "callout",
      "variant": "tip",
      "title": "Jebakan Ujian BPMN",
      "text": "Jangan pernah menghubungkan Sequence Flow (garis solid) antar Pool yang berbeda! Komunikasi antar entitas luar (seperti Vendor atau Customer) WAJIB menggunakan Message Flow (garis putus-putus berpanah terbuka)."
    }
  ]
},
  3: {
  "tm": 3,
  "title": "Pemodelan Data & Desain Database Relasional (REA Framework)",
  "ref": "Richardson et al. AIS 4e · Ch. 3 & 4",
  "intro": "Mempelajari arsitektur pemodelan data akuntansi menggunakan kerangka kerja REA (Resources, Events, Agents) dan UML Class Diagram. Kerangka ini menggantikan model pembukuan tradisional debit/kredit dengan model semantik yang mampu merekam konteks operasional transaksi bisnis secara komprehensif.",
  "objectives": [
    "Menjelaskan filosofi REA Framework dalam menangkap peristiwa ekonomi (economic duality).",
    "Mengklasifikasikan entitas bisnis ke dalam Resources (R), Events (E), dan Agents (A).",
    "Menganalisis kardinalitas relasi bisnis: minimum (0 atau 1) dan maksimum (1 atau Many).",
    "Memodelkan pola pertukaran ekonomi dasar: Siklus Penjualan (Give Goods, Get Cash) dan Siklus Pengeluaran (Give Cash, Get Goods).",
    "Mentransformasikan diagram REA menjadi tabel basis data relasional normal."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Konsep Dasar Kerangka Kerja REA (Resources, Events, Agents)"
    },
    {
      "kind": "p",
      "text": "Sistem buku besar konvensional hanya mencatat nilai moneter dari transaksi (debit/kredit), sering kali kehilangan informasi operasional penting seperti siapa staf yang melayani, dari vendor mana komponen dibeli, atau jam berapa transaksi terjadi. Model REA diperkenalkan oleh William McCarthy untuk menyimpan data operasional dan keuangan dalam satu struktur database relasional terintegrasi."
    },
    {
      "kind": "table",
      "caption": "Tabel 3.1: Klasifikasi Tiga Entitas Fundamental REA",
      "headers": [
        "Komponen REA",
        "Definisi Konseptual",
        "Contoh Siklus Pendapatan",
        "Contoh Siklus Pengeluaran"
      ],
      "rows": [
        [
          "Resources (R)",
          "Objek bernilai ekonomi yang dimiliki atau dikendalikan entitas, yang dapat bertambah atau berkurang akibat peristiwa bisnis.",
          "Persediaan Barang Dagang, Kas di Bank.",
          "Kas di Bank, Bahan Baku, Mesin/Peralatan Pabrik."
        ],
        [
          "Events (E)",
          "Aktivitas atau peristiwa operasional yang mengubah kuantitas atau nilai Resource ekonomi.",
          "Pesanan Penjualan (Commitment), Pengiriman Barang (Economic Decrement), Penerimaan Kas (Economic Increment).",
          "Purchase Order (Commitment), Penerimaan Barang (Economic Increment), Pengeluaran Kas (Economic Decrement)."
        ],
        [
          "Agents (A)",
          "Individu atau organisasi yang berpartisipasi dalam perencanaan, eksekusi, atau pengawasan Event.",
          "Pelanggan (Eksternal), Kasir (Internal), Staf Penjualan (Internal).",
          "Pemasok/Vendor (Eksternal), Staf Pembelian (Internal), Petugas Gudang (Internal)."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Dualitas Ekonomi (Economic Duality Principle)"
    },
    {
      "kind": "p",
      "text": "Prinsip fundamental REA menyatakan bahwa setiap peristiwa ekonomi yang mengurangi sumber daya (Give Event / Decrement) harus berpasangan dengan peristiwa ekonomi yang menambah sumber daya lain (Get Event / Increment). Ini adalah landasan akuntansi 'Give-to-Get' yang mendasari persamaan nilai pertukaran:"
    },
    {
      "kind": "ul",
      "items": [
        "Siklus Pendapatan: Menyerahkan Barang/Jasa (Economic Decrement) untuk Memperoleh Kas (Economic Increment).",
        "Siklus Pengeluaran: Menyerahkan Kas (Economic Decrement) untuk Memperoleh Bahan Baku/Aset (Economic Increment).",
        "Siklus Penggajian: Menyerahkan Kas/Gaji untuk Memperoleh Waktu & Tenaga Kerja Karyawan."
      ]
    },
    {
      "kind": "h2",
      "text": "Analisis Kardinalitas & Transformasi Tabel"
    },
    {
      "kind": "p",
      "text": "Kardinalitas mendefinisikan batasan jumlah instans relasi antara dua tabel. Notasi formatnya adalah (Min, Max):"
    },
    {
      "kind": "table",
      "caption": "Tabel 3.2: Aturan Penempatan Foreign Key Berdasarkan Kardinalitas Relasi",
      "headers": [
        "Tipe Relasi",
        "Aturan Desain Database",
        "Contoh Kasus Akuntansi",
        "Implementasi Tabel"
      ],
      "rows": [
        [
          "1 to 1 (1:1)",
          "Primary Key dari salah satu entitas dijadikan Foreign Key pada entitas pasangannya.",
          "Pengiriman Barang ke Faktur Penjualan (bila 1 kirim = 1 faktur).",
          "Kolom No_Pengiriman masuk ke tabel Faktur_Penjualan."
        ],
        [
          "1 to Many (1:N)",
          "Primary Key dari sisi '1' WAJIB menjadi Foreign Key di sisi 'Many' (N).",
          "Pelanggan (1) ke Pesanan Penjualan (N) — Satu pelanggan dapat melakukan banyak pesanan.",
          "Kolom ID_Pelanggan masuk ke tabel Pesanan_Penjualan."
        ],
        [
          "Many to Many (M:N)",
          "Wajib membuat TABEL RELASI PERANTARA (Junction/Bridge Table) dengan Primary Key gabungan (Composite Key).",
          "Pesanan Penjualan (M) ke Barang Persediaan (N) — Satu pesanan bisa membeli banyak barang, satu barang bisa dipesan di banyak pesanan.",
          "Tabel 'Detail_Pesanan_Penjualan' dengan PK gabungan (No_Pesanan + Kode_Barang) ditambah atribut Qty dan Harga_Satuan."
        ]
      ]
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Prinsip Emas Database REA",
      "text": "Jangan pernah menyimpan atribut turunan (calculated attribute) seperti 'Total Tagihan' atau 'Subtotal' sebagai kolom tabel database! Atribut tersebut harus dihitung dinamis menggunakan query SQL (SUM(Qty * Harga)) untuk menghindari risiko inkonsistensi data update."
    }
  ]
},
  4: {
  "tm": 4,
  "title": "Sistem Manajemen Basis Data Relasional (RDBMS), SQL & Arsitektur ERP",
  "ref": "Richardson et al. AIS 4e · Ch. 4 & 7",
  "intro": "Mendalami struktur database relasional modern, prinsip normalisasi (1NF, 2NF, 3NF), integritas data akuntansi, serta integrasi modul Enterprise Resource Planning (ERP seperti SAP S/4HANA, NetSuite, dan Odoo).",
  "objectives": [
    "Memahami aturan integritas database: Entity Integrity, Referential Integrity, dan Domain Integrity.",
    "Melakukan normalisasi bertahap dari unnormalized data hingga bentuk 3NF (Third Normal Form).",
    "Menyusun query SQL analitis dasar untuk rekonsiliasi dan deteksi anomali jurnal akuntansi.",
    "Menganalisis arsitektur sistem ERP terintegrasi: database sentral vs modul fungsional (FI, CO, SD, MM).",
    "Mengevaluasi risiko dan strategi migrasi ERP (Big Bang vs Phased Rollout)."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Tiga Pilar Integritas Database Relasional"
    },
    {
      "kind": "p",
      "text": "Sistem basis data akuntansi wajib mematuhi tiga batasan integritas untuk menjamin laporan keuangan bebas dari salah saji material dan korupsi data:"
    },
    {
      "kind": "ul",
      "items": [
        "Entity Integrity Rule: Setiap tabel wajib memiliki Primary Key yang bersifat unik dan TIDAK BOLEH bernilai NULL. Contoh: No Akun Buku Besar atau No Faktur.",
        "Referential Integrity Rule: Nilai pada kolom Foreign Key harus mencocokkan nilai Primary Key yang valid di tabel master rujukannya, atau bernilai NULL. Contoh: Faktur tidak boleh diterbitkan untuk ID Pelanggan yang tidak terdaftar di tabel Master Pelanggan.",
        "Domain Integrity Rule: Nilai dalam suatu kolom harus sesuai dengan tipe data dan batasan yang diizinkan. Contoh: Saldo Kas harus berupa nilai numerik desimal, Tanggal Jurnal harus format tanggal valid."
      ]
    },
    {
      "kind": "h2",
      "text": "Proses Normalisasi Data Akuntansi (1NF ke 3NF)"
    },
    {
      "kind": "table",
      "caption": "Tabel 4.1: Tahapan Normalisasi untuk Mengeliminasi Anomali Data",
      "headers": [
        "Tahap",
        "Persyaratan Teknis",
        "Anomali yang Diatasi",
        "Tindakan Dekomposisi"
      ],
      "rows": [
        [
          "Unnormalized (UNF)",
          "Data mengandung grup berulang (repeating groups) atau multi-value attributes.",
          "Redundansi ekstrem, pemborosan storage.",
          "Satu baris faktur memuat beberapa baris barang."
        ],
        [
          "1st Normal Form (1NF)",
          "Setiap sel tabel hanya memuat satu nilai atomik (atomic value), tidak ada repeating groups, telah ditentukan Primary Key.",
          "Mencegah kesalahan indeksasi baris.",
          "Pisahkan baris barang sehingga setiap baris hanya memuat satu kombinasi transaksi dan produk."
        ],
        [
          "2nd Normal Form (2NF)",
          "Telah 1NF DAN setiap atribut non-kunci bergantung PENUH pada SELURUH Primary Key (bebas Partial Dependency).",
          "Update Anomaly (mengubah nama produk harus mengedit ribuan baris faktur lama).",
          "Pisahkan atribut produk (Nama_Barang, Harga_Standar) ke tabel Master_Produk tersendiri."
        ],
        [
          "3rd Normal Form (3NF)",
          "Telah 2NF DAN tidak ada ketergantungan transitif (bebas Transitive Dependency; X -> Y -> Z).",
          "Deletion Anomaly (menghapus faktur terakhir seorang pelanggan menyebabkan seluruh profil pelanggan terhapus).",
          "Pisahkan profil pelanggan (Nama, Alamat, Syarat Kredit) ke tabel Master_Pelanggan tersendiri."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Arsitektur Enterprise Resource Planning (ERP)"
    },
    {
      "kind": "p",
      "text": "Sebelum era ERP, setiap departemen memiliki sistem terisolasi (silo). Departemen penjualan menggunakan software CRM sendiri, gudang menggunakan sistem inventory sendiri, dan akuntansi mencatat jurnal manual berdasarkan laporan rekap. ERP menyatukan seluruh fungsi bisnis ke dalam satu basis data terpusat (single source of truth)."
    },
    {
      "kind": "p",
      "text": "Ketika pesanan penjualan diinput di modul Sales & Distribution (SD), ERP secara otomatis memperbarui alokasi stok di modul Material Management (MM), mengecek plafon kredit di modul Financial Accounting (FI), dan mencatat estimasi margin di modul Controlling (CO) tanpa perlu intervensi entri manual ulang."
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Konsep Kunci Audit Database",
      "text": "Kegagalan implementasi Referential Integrity adalah sumber utama transaksi 'hantu' (orphan records). Dalam audit sistem informasi, auditor selalu menjalankan query pencarian Foreign Key yang tidak memiliki induk di tabel master untuk mendeteksi transaksi fiktif."
    }
  ]
},
  5: {
  "tm": 5,
  "title": "Siklus Pendapatan: Proses Penjualan, Piutang & Penerimaan Kas (Order-to-Cash / O2C)",
  "ref": "Richardson et al. AIS 4e · Ch. 5",
  "intro": "Menganalisis siklus Order-to-Cash (O2C) mulai dari penerimaan pesanan pelanggan, pemeriksaan kredit, pengeluaran barang gudang, pengiriman, penagihan faktur, hingga penerimaan kas dan rekonsiliasi bank. Membahas matriks pengendalian internal dan skema kecurangan umum seperti lapping.",
  "objectives": [
    "Menguasai urutan dokumen dan aktivitas dalam siklus Order-to-Cash (O2C).",
    "Menyusun matriks pemisahan tugas (Segregation of Duties) dalam siklus pendapatan.",
    "Menganalisis skema fraud kas masuk (misal: Lapping Scheme) dan mekanisme pencegahannya.",
    "Mengevaluasi pengendalian internal atas potongan penjualan, retur, dan penghapusan piutang.",
    "Memahami peran teknologi Lockbox, Electronic Data Interchange (EDI), dan Automated Credit Check."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Alur Transaksi Siklus Order-to-Cash (O2C)"
    },
    {
      "kind": "p",
      "text": "Siklus pendapatan mencakup empat tahap utama yang melibatkan berbagai divisi fungsional:"
    },
    {
      "kind": "ul",
      "items": [
        "Entri Pesanan Penjualan: Menerima Purchase Order dari pelanggan, memverifikasi ketersediaan stok inventaris, dan menerbitkan Sales Order.",
        "Otorisasi Kredit: Bagian Kredit independen memverifikasi apakah batas kredit pelanggan mencukupi sebelum pesanan disetujui untuk dikirim.",
        "Pengambilan & Pengiriman Barang: Gudang menerima Picking Ticket untuk mengambil barang fisik. Departemen Pengiriman mencocokkan fisik barang dengan packing slip dan menerbitkan Bill of Lading (surat jalan ekspedisi).",
        "Penagihan & Piutang: Departemen Penagihan menerbitkan Sales Invoice segera setelah konfirmasi pengiriman diterima, mencatat piutang dan mengakui pendapatan.",
        "Penerimaan Kas & Setoran: Kasir menerima pembayaran (cek/transfer), mencatat Remittance Advice, dan menyetorkan kas utuh ke bank setiap hari."
      ]
    },
    {
      "kind": "table",
      "caption": "Tabel 5.1: Matriks Risiko, Pengendalian Internal & Dokumen Kunci Siklus O2C",
      "headers": [
        "Tahap Proses",
        "Risiko Utama",
        "Pengendalian Kunci (COSO)",
        "Dokumen Terkait"
      ],
      "rows": [
        [
          "Pesanan Penjualan",
          "Menerima pesanan dari pihak fiktif atau pesanan salah ketik.",
          "Verifikasi identitas pelanggan, pesanan bernomor urut pracetak (prenumbered).",
          "Customer PO, Sales Order."
        ],
        [
          "Persetujuan Kredit",
          "Penjualan kepada pelanggan dengan risiko kredit macet tinggi.",
          "Pemisahan Bagian Kredit dari Penjualan; batas kredit diotorisasi manajemen.",
          "Credit Approval Log."
        ],
        [
          "Pengiriman Barang",
          "Pencurian barang gudang atau salah kirim kuantitas/spesifikasi.",
          "Pemeriksaan independen di dermaga pengiriman; rekonsiliasi Picking List vs Packing Slip.",
          "Picking Ticket, Packing Slip, Bill of Lading."
        ],
        [
          "Penagihan Faktur",
          "Kegagalan menagih (lupa buat faktur) atau salah harga.",
          "Sistem otomatis menerbitkan faktur saat Bill of Lading berstatus terkirim; daftar harga master resmi terkunci.",
          "Sales Invoice, Sales Journal."
        ],
        [
          "Penerimaan Kas",
          "Penggelapan uang tunai oleh staf (Theft of Cash, Lapping).",
          "Gunakan sistem Bank Lockbox; pemisahan fungsi penerima kas dari pencatat buku pembantu piutang.",
          "Remittance Advice, Deposit Slip, Bank Statement."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Analisis Kecurangan: Skema Lapping & Cara Mendeteksinya"
    },
    {
      "kind": "p",
      "text": "Lapping adalah kecurangan di mana karyawan mencuri uang tunai pembayaran dari Pelanggan A untuk kepentingan pribadi. Untuk menutupi kekurangan tersebut pada hari berikutnya, pembayaran yang masuk dari Pelanggan B dialokasikan ke akun Pelanggan A, pembayaran dari Pelanggan C dialokasikan ke Pelanggan B, dan seterusnya."
    },
    {
      "kind": "p",
      "text": "Pencegahan & Deteksi Lapping:"
    },
    {
      "kind": "ul",
      "items": [
        "Pemisahan Tugas Wajib: Orang yang menerima uang fisik atau cek dilarang keras memiliki akses edit ke buku pembantu piutang (Accounts Receivable Subsidiary Ledger).",
        "Rotasi Pekerjaan & Cuti Wajib (Mandatory Vacation): Pelaku lapping tidak pernah berani mengambil cuti karena skema ini akan terbongkar begitu ada orang pengganti yang menangani penerimaan surat dan mutasi rekening.",
        "Konfirmasi Saldo Piutang: Mengirimkan surat konfirmasi saldo positif secara berkala langsung kepada pelanggan secara independen oleh auditor internal."
      ]
    },
    {
      "kind": "callout",
      "variant": "tip",
      "title": "Rekomendasi Modern: Sistem Lockbox",
      "text": "Dalam sistem lockbox, pelanggan mengirimkan pembayaran cek langsung ke kantor pos bank. Bank membuka amplop, mengkredit rekening perusahaan seketika, dan hanya mengirimkan data elektronik remittance ke bagian akuntansi. Hal ini mengeliminasi kontak fisik karyawan perusahaan dengan uang tunai."
    }
  ]
},
  6: {
  "tm": 6,
  "title": "Siklus Pengeluaran: Pembelian, Utang Usaha & Pengeluaran Kas (Procure-to-Pay / P2P)",
  "ref": "Richardson et al. AIS 4e · Ch. 6",
  "intro": "Mempelajari siklus Procure-to-Pay (P2P) dari permintaan pembelian, pemesanan ke vendor, penerimaan fisik barang, verifikasi pencocokan tiga arah (Three-Way Match), hingga otorisasi pengeluaran kas. Menyoroti pencegahan suap vendor (kickbacks) dan faktur fiktif.",
  "objectives": [
    "Menguasai alur dokumen siklus pengeluaran: Purchase Requisition, PO, Receiving Report, dan Voucher.",
    "Memahami teknik Three-Way Matching (Pencocokan Faktur Vendor, Purchase Order, dan Receiving Report).",
    "Menerapkan konsep Blind Receiving Report untuk menjaga integritas penghitungan fisik barang gudang.",
    "Menganalisis matriks pemisahan tugas antara Purchasing, Receiving, Accounts Payable, dan Treasury.",
    "Mengidentifikasi skema Shell Company dan fraud pengadaan barang beserta mitigasinya."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Alur Operasional Siklus Procure-to-Pay (P2P)"
    },
    {
      "kind": "p",
      "text": "Siklus pengeluaran dirancang untuk memastikan bahwa perusahaan hanya membeli barang yang benar-benar dibutuhkan, dengan harga yang wajar dari vendor resmi, menerima kuantitas yang tepat, dan hanya membayar kewajiban yang sah."
    },
    {
      "kind": "ul",
      "items": [
        "1. Permintaan Pembelian (Purchase Requisition): Departemen yang membutuhkan barang mengajukan form PR yang telah disetujui kepala divisi.",
        "2. Penerbitan Pesanan Pembelian (Purchase Order): Bagian Purchasing memilih vendor resmi dari Approved Vendor List (AVL) dan menerbitkan PO legal.",
        "3. Penerimaan Barang (Receiving): Petugas dermaga penerimaan memeriksa kondisi fisik barang, menghitung jumlah secara independen, dan menerbitkan Receiving Report.",
        "4. Pengakuan Utang (Accounts Payable): Bagian Utang mencocokkan dokumen pendukung (Three-Way Match) dan menyusun Voucher Paket.",
        "5. Pembayaran Kas (Cash Disbursement): Bagian Kasir/Treasury menandatangani cek atau mengeksekusi transfer bank, lalu menandai dokumen pendukung dengan stempel 'LUNAS' (Paid)."
      ]
    },
    {
      "kind": "h2",
      "text": "Mekanisme Pengendalian: Three-Way Match & Blind Copy PO"
    },
    {
      "kind": "table",
      "caption": "Tabel 6.1: Dokumen yang Divalidasi dalam Three-Way Matching",
      "headers": [
        "Nama Dokumen",
        "Pihak Penerbit",
        "Informasi Kritis yang Diverifikasi"
      ],
      "rows": [
        [
          "Purchase Order (PO)",
          "Departemen Pembelian",
          "Kuantitas resmi yang disetujui, harga satuan kontrak, termin pembayaran, spesifikasi barang."
        ],
        [
          "Receiving Report",
          "Departemen Penerimaan",
          "Kuantitas fisik aktual yang diterima di dermaga, tanggal penerimaan, kondisi barang (rusak/baik)."
        ],
        [
          "Vendor Invoice",
          "Pemasok / Vendor Luar",
          "Jumlah tagihan kotor, diskon tunai, ongkos kirim, dan nomor rekening tujuan."
        ]
      ]
    },
    {
      "kind": "p",
      "text": "Konsep Blind Receiving Report: Saat Bagian Purchasing mengirimkan tembusan PO ke Bagian Penerimaan Gudang, kolom kuantitas sengaja dikosongkan (dibuat 'blind' atau blank). Tujuannya adalah memaksa staf penerimaan menghitung secara fisik satu per satu barang yang datang, bukan sekadar menandatangani formulir karena mengasumsikan jumlah barang sama dengan pesanan."
    },
    {
      "kind": "h2",
      "text": "Mitigasi Fraud Pengadaan: Shell Company & Suap (Kickbacks)"
    },
    {
      "kind": "p",
      "text": "Kecurangan paling merusak dalam siklus P2P adalah pembentukan Vendor Fiktif (Shell Company) oleh karyawan internal yang memiliki wewenang menyetujui faktur. Pelaku membuat perusahaan cangkang dan mengajukan faktur atas 'jasa konsultasi' fiktif."
    },
    {
      "kind": "p",
      "text": "Pengendalian Pencegahan:"
    },
    {
      "kind": "ul",
      "items": [
        "Pemisahan Fungsi: Petugas yang berwenang mendaftarkan vendor baru ke Vendor Master File dilarang keras memproses faktur atau menandatangani pembayaran.",
        "Pencocokan Alamat & Rekening: Menjalankan audit data analytics secara rutin untuk mencocokkan alamat/nomor rekening vendor dengan alamat/nomor rekening karyawan perusahaan.",
        "Evaluasi Harga Vendor: Menerapkan penawaran tender kompetitif tertutup (competitive bidding) untuk pengadaan di atas ambang batas materialitas."
      ]
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Peringatan Pengendalian Kasir",
      "text": "Semua voucher dan bukti pendukung wajib dicap atau ditandai 'LUNAS / CANCELLED' segera setelah cek ditandatangani. Hal ini mencegah voucher yang sama diajukan ulang (double payment fraud) di kemudian hari."
    }
  ]
},
  7: {
  "tm": 7,
  "title": "Siklus Konversi/Produksi & Review Komprehensif Pra-UTS",
  "ref": "Richardson et al. AIS 4e · Ch. 8",
  "intro": "Membahas integrasi siklus produksi (Conversion Cycle) dalam SIA manufaktur: Bill of Materials (BOM), Operation List, Work Order, dan pelacakan WIP. Dilengkapi dengan simulasi studi kasus integratif persiapan Ujian Tengah Semester (UTS).",
  "objectives": [
    "Menguasai alur dokumen siklus produksi: BOM, Production Order, Materials Requisition, dan Move Ticket.",
    "Menjelaskan integrasi data biaya antara siklus pengeluaran, konversi, dan persediaan dalam ERP.",
    "Menganalisis pengendalian internal atas bahan baku sisa (scrap), barang cacat (spoilage), dan persediaan barang jadi.",
    "Mengidentifikasi celah kelemahan sistem dalam simulasi studi kasus UTS gabungan (O2C, P2P, dan Konversi).",
    "Mengevaluasi kesiapan menghadapi evaluasi kompetensi Pra-UTS."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Dokumen & Arsitektur Informasi Siklus Konversi"
    },
    {
      "kind": "p",
      "text": "Siklus produksi bertugas mengubah bahan mentah menjadi barang jadi melalui kombinasi tenaga kerja langsung dan overhead pabrik. Dokumen kunci yang menggerakkan sistem informasi produksi meliputi:"
    },
    {
      "kind": "ul",
      "items": [
        "Bill of Materials (BOM): Daftar resep baku yang memuat rincian jenis dan kuantitas bahan mentah yang dibutuhkan untuk memproduksi satu unit produk jadi.",
        "Operations List (Routing Sheet): Rincian urutan stasiun kerja mesin, waktu standar pengerjaan, dan tarif upah tenaga kerja yang diperlukan.",
        "Production Order (Work Order): Dokumen otorisasi resmi bagi lantai pabrik untuk memulai proses manufaktur sejumlah batch tertentu.",
        "Materials Requisition: Bukti pengambilan bahan baku dari gudang ke lantai produksi, yang menjadi dasar penjurnalan pemindahan Biaya Bahan Baku ke Barang Dalam Proses (WIP).",
        "Move Ticket: Dokumen pelacak perpindahan fisik barang dalam proses dari satu stasiun kerja ke stasiun kerja berikutnya."
      ]
    },
    {
      "kind": "h2",
      "text": "Matriks Evaluasi Komprehensif Pra-UTS"
    },
    {
      "kind": "table",
      "caption": "Tabel 7.1: Peta Komparasi Pengendalian Tiga Siklus Transaksi Utama",
      "headers": [
        "Siklus Transaksi",
        "Peristiwa Kunci (Event)",
        "Titik Otorisasi Kritis",
        "Pemisahan Tugas Wajib (SoD)"
      ],
      "rows": [
        [
          "Siklus Pendapatan (O2C)",
          "Pengiriman Barang & Penagihan Faktur",
          "Otorisasi Kredit oleh Bagian Kredit sebelum barang dikeluarkan.",
          "Penjualan vs Kredit vs Kasir vs Pembukuan Piutang."
        ],
        [
          "Siklus Pengeluaran (P2P)",
          "Penerimaan Barang & Pengeluaran Kas",
          "Persetujuan PO oleh Purchasing; Otorisasi Voucher oleh AP.",
          "Purchasing vs Receiving vs AP vs Treasury (Kasir)."
        ],
        [
          "Siklus Konversi",
          "Pengeluaran Bahan Baku & Penyelesaian Unit",
          "Penerbitan Production Order oleh Bagian Perencanaan Produksi (PPIC).",
          "Gudang Bahan Baku vs Operator Produksi vs Akuntansi Biaya."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Panduan Sukses Studi Kasus Naratif UTS"
    },
    {
      "kind": "p",
      "text": "Dalam soal studi kasus UTS, mahasiswa sering diminta membaca sebuah narasi perusahaan dan mengidentifikasi setidaknya 4 kelemahan pengendalian internal beserta rekomendasinya. Gunakan format tabel jawaban terstruktur:"
    },
    {
      "kind": "table",
      "caption": "Tabel 7.2: Kerangka Jawaban Kasus Pengendalian Internal UTS",
      "headers": [
        "Kelemahan Pengendalian (Finding)",
        "Risiko / Potensi Kerugian (Risk)",
        "Rekomendasi Perbaikan (Remedy)"
      ],
      "rows": [
        [
          "Staf penjualan berwenang menyetujui kredit dan menghapus piutang.",
          "Piutang macet melonjak dan potensi penggelapan kas dengan menghapus piutang sepihak.",
          "Bentuk Departemen Kredit terpisah; penghapusan piutang wajib otorisasi Dewan Direksi."
        ],
        [
          "Staf penerimaan menerima salinan PO lengkap dengan kuantitas barang.",
          "Staf tidak menghitung fisik barang dan berpotensi menerima barang kurang dari vendor.",
          "Terapkan Blind Receiving Report (kolom kuantitas dikosongkan)."
        ],
        [
          "Kasir merangkap pemegang buku pembantu piutang dan rekonsiliasi bank.",
          "Risiko kecurangan Lapping dan pencurian uang kas tanpa terdeteksi.",
          "Pisahkan kasir (penerima fisik) dari pencatat piutang dan tugaskan staf independen untuk rekonsiliasi bank bulanan."
        ]
      ]
    },
    {
      "kind": "callout",
      "variant": "tip",
      "title": "Tips Ujian UTS",
      "text": "Kunci nilai maksimal pada soal kasus adalah menghubungkan secara spesifik nama jabatan yang ada di soal dengan prinsip pemisahan wewenang CAR (Custody of assets, Authorization of transactions, Recording/Accounting)."
    }
  ]
},
  8: {
  "tm": 8,
  "title": "Kerangka Pengendalian Internal: COSO Internal Control & COSO ERM",
  "ref": "Richardson et al. AIS 4e · Ch. 9",
  "intro": "Membahas secara mendalam kerangka kerja COSO Internal Control Integrated Framework (17 Prinsip) dan COSO Enterprise Risk Management (ERM). Memahami taksonomi pengendalian preventif, detektif, dan korektif serta kriteria defisiensi pengendalian menurut standar audit.",
  "objectives": [
    "Menguraikan 5 komponen COSO Internal Control Framework beserta 17 prinsip turunannya.",
    "Membedakan fungsi pengendalian preventif (preventive), detektif (detective), dan korektif (corrective).",
    "Memahami evolusi COSO ERM (Governance, Strategy, Performance, Review, Information).",
    "Mengklasifikasikan tingkat kelemahan audit: Control Deficiency, Significant Deficiency, dan Material Weakness.",
    "Menerapkan kerangka COSO untuk mengevaluasi lingkungan pengendalian sistem teknologi informasi."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Lima Komponen COSO Internal Control Framework"
    },
    {
      "kind": "p",
      "text": "COSO (Committee of Sponsoring Organizations of the Treadway Commission) mendefinisikan pengendalian internal sebagai proses yang dipengaruhi oleh dewan direksi, manajemen, dan personel lain, yang dirancang untuk memberikan keyakinan memadai terkait pencapaian tujuan operasi, pelaporan, dan kepatuhan."
    },
    {
      "kind": "table",
      "caption": "Tabel 8.1: Lima Komponen COSO dan Inti Prinsipnya",
      "headers": [
        "Komponen COSO",
        "Fokus Utama",
        "Contoh Implementasi Praktis"
      ],
      "rows": [
        [
          "1. Control Environment (Lingkungan Pengendalian)",
          "Fondasi organisasi, integritas, nilai etika, struktur pelaporan, dan komitmen terhadap kompetensi ('Tone at the Top').",
          "Penerbitan Kode Etik Karyawan, Whistleblowing System independen, Komite Audit yang aktif."
        ],
        [
          "2. Risk Assessment (Penilaian Risiko)",
          "Proses dinamis untuk mengidentifikasi dan menilai risiko ketercapaian tujuan, termasuk risiko fraud dan perubahan teknologi.",
          "Penyusunan Risk Register tahunan, analisis kerentanan sistem siber, evaluasi risiko kecurangan pelaporan keuangan."
        ],
        [
          "3. Control Activities (Aktivitas Pengendalian)",
          "Tindakan yang ditetapkan melalui kebijakan dan prosedur untuk memitigasi risiko hingga tingkat yang dapat diterima.",
          "Pemisahan tugas (SoD), otorisasi ganda transaksi di atas Rp 100 juta, pembatasan akses fisik ruang server."
        ],
        [
          "4. Information & Communication",
          "Penyediaan informasi berkualitas yang relevan dan tepat waktu, serta saluran komunikasi dua arah (internal dan eksternal).",
          "Sistem pelaporan manajerial real-time, manual kebijakan akuntansi yang terdistribusi, pengaduan konsumen."
        ],
        [
          "5. Monitoring Activities (Pemantauan)",
          "Evaluasi berkala dan berkelanjutan untuk memastikan kelima komponen pengendalian berfungsi efektif.",
          "Audit internal rutin, audit penetration testing berkala, tindak lanjut atas temuan auditor eksternal."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Taksonomi Pengendalian: Preventif, Detektif, dan Korektif"
    },
    {
      "kind": "ul",
      "items": [
        "Pengendalian Preventif (Mencegah): Mencegah kesalahan atau kecurangan sebelum terjadi. Paling efektif dan ekonomis. Contoh: Password kompleks, pemisahan tugas, validasi input format angka, otorisasi transaksi.",
        "Pengendalian Detektif (Mendeteksi): Menemukan kesalahan atau kecurangan yang lolos dari pencegahan segera setelah peristiwa terjadi. Contoh: Rekonsiliasi bank bulanan, stock opname fisik gudang, review anggaran vs realisasi bulanan, audit trail.",
        "Pengendalian Korektif (Memperbaiki): Mengoreksi masalah yang terdeteksi dan memulihkan kondisi sistem. Contoh: Backup data harian, klaim asuransi kerugian, prosedur pemulihan bencana (disaster recovery plan)."
      ]
    },
    {
      "kind": "h2",
      "text": "Klasifikasi Tingkat Defisiensi Pengendalian Menurut Standar Audit"
    },
    {
      "kind": "p",
      "text": "Auditor eksternal dan komite audit mengelompokkan kelemahan pengendalian internal ke dalam tiga kategori berdasarkan tingkat keparahannya:"
    },
    {
      "kind": "table",
      "caption": "Tabel 8.2: Tingkat Defisiensi Pengendalian Internal",
      "headers": [
        "Klasifikasi",
        "Ambang Batas Keparahan",
        "Kewajiban Pelaporan"
      ],
      "rows": [
        [
          "Control Deficiency (Defisiensi Pengendalian)",
          "Rancangan atau operasi pengendalian tidak memungkinkan personel mencegah atau mendeteksi salah saji tepat waktu dalam kegiatan normal.",
          "Dilaporkan ke manajemen operasional dalam Management Letter."
        ],
        [
          "Significant Deficiency (Defisiensi Signifikan)",
          "Defisiensi yang cukup penting untuk mendapatkan perhatian dari pihak yang bertanggung jawab atas tata kelola (Komite Audit/Dewan Komisaris), namun tidak berpotensi salah saji material.",
          "Wajib dilaporkan secara tertulis kepada Komite Audit dan Dewan Direksi."
        ],
        [
          "Material Weakness (Kelemahan Material)",
          "Tingkat defisiensi paling parah di mana terdapat kemungkinan masuk akal (reasonable possibility) bahwa salah saji material pada laporan keuangan tidak dapat dicegah atau dideteksi tepat waktu.",
          "Wajib dipublikasikan dalam opini audit publik SOX 404 dan menyebabkan Opini Tidak Wajar (Adverse Opinion) atas ICFR."
        ]
      ]
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Prinsip Evaluasi Risiko",
      "text": "Residual Risk (Risiko Sisa) = Inherent Risk (Risiko Bawaan) dikurangi Efektivitas Pengendalian Internal. Manajemen tidak mungkin mengeliminasi risiko hingga 0%, melainkan menekannya hingga berada di bawah Risk Appetite organisasi."
    }
  ]
},
  9: {
  "tm": 9,
  "title": "Keamanan Informasi, Ancaman Siber & Manajemen Kelangsungan Bisnis (BCP/DRP)",
  "ref": "Richardson et al. AIS 4e · Ch. 10 & 11",
  "intro": "Menganalisis prinsip CIA Triad (Confidentiality, Integrity, Availability) dalam sistem akuntansi. Membedakan kriptografi simetris vs asimetris, teknik mitigasi serangan siber seperti ransomware dan phishing, serta perancangan Business Continuity Plan (BCP) dan Disaster Recovery Plan (DRP).",
  "objectives": [
    "Menjelaskan prinsip CIA Triad sebagai fondasi keamanan sistem akuntansi.",
    "Membedakan mekanisme enkripsi simetris (AES) vs asimetris (RSA/Public-Private Key) dan fungsi tanda tangan digital (Digital Signature).",
    "Mengidentifikasi vektor ancaman siber: Ransomware, Social Engineering (Phishing), Man-in-the-Middle, dan SQL Injection.",
    "Merumuskan metrik pemulihan bencana: Recovery Point Objective (RPO) dan Recovery Time Objective (RTO).",
    "Membandingkan kelebihan dan kelemahan situs pemulihan bencana (Hot Site, Warm Site, Cold Site)."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Prinsip CIA Triad dalam Sistem Akuntansi"
    },
    {
      "kind": "ul",
      "items": [
        "Confidentiality (Kerahasiaan): Informasi sensitif (seperti data gaji direksi, nomor rekening bank, dan daftar harga negosiasi) terlindung dari akses pihak tidak berwenang. Diimplementasikan dengan enkripsi data dan Role-Based Access Control (RBAC).",
        "Integrity (Integritas): Data transaksi dan laporan keuangan akurat, lengkap, dan terlindung dari modifikasi tidak sah (tamper-proof). Diimplementasikan dengan hash functions (SHA-256) dan write-once logs.",
        "Availability (Ketersediaan): Sistem akuntansi dan data keuangan dapat diakses oleh personil yang berwenang kapan pun dibutuhkan untuk operasional atau audit. Diimplementasikan dengan server redundancy, UPS, dan backup data."
      ]
    },
    {
      "kind": "h2",
      "text": "Kriptografi & Tanda Tangan Digital (Digital Signatures)"
    },
    {
      "kind": "table",
      "caption": "Tabel 9.1: Perbandingan Kriptografi Simetris vs Asimetris",
      "headers": [
        "Karakteristik",
        "Kriptografi Simetris (Secret Key)",
        "Kriptografi Asimetris (Public-Private Key)"
      ],
      "rows": [
        [
          "Kunci Enkripsi & Dekripsi",
          "Menggunakan SATU kunci rahasia yang sama untuk enkripsi dan dekripsi.",
          "Menggunakan SEPASANG kunci: Public Key (dibagikan bebas) dan Private Key (disimpan rahasia)."
        ],
        [
          "Kecepatan Komputasi",
          "Sangat cepat, cocok untuk mengenkripsi database bervolume gigabyte/terabyte.",
          "Lebih lambat (sekitar 1.000x lebih lambat dari simetris), hanya efisien untuk data kecil."
        ],
        [
          "Masalah Utama",
          "Distribusi kunci: bagaimana membagikan kunci rahasia secara aman kepada pihak kedua tanpa disadap?",
          "Distribusi kunci mudah melalui Public Key, namun membutuhkan infrastruktur sertifikat digital (PKI)."
        ],
        [
          "Penerapan Akuntansi",
          "Enkripsi seluruh database ERP yang sedang tersimpan (Data at Rest) menggunakan standar AES-256.",
          "Tanda tangan digital (Digital Signature) untuk otorisasi transfer kawat dan validasi faktur elektronik pajak."
        ]
      ]
    },
    {
      "kind": "p",
      "text": "Mekanisme Tanda Tangan Digital (Digital Signature): Pengirim membuat ringkasan hash dari dokumen, lalu mengenkripsi hash tersebut menggunakan Private Key miliknya. Penerima mendeskripsi tanda tangan menggunakan Public Key pengirim dan mencocokkan nilai hash. Ini menjamin dua hal kritis: Non-repudiation (pengirim tidak bisa menyangkal telah menyetujui transaksi) dan Data Integrity (dokumen terbukti tidak mengalami perubahan 1 byte pun selama transmisi)."
    },
    {
      "kind": "h2",
      "text": "Perencanaan Kelangsungan Bisnis: RPO, RTO, dan Situs Pemulihan"
    },
    {
      "kind": "table",
      "caption": "Tabel 9.2: Metrik Pemulihan Bencana dan Perbandingan Fasilitas Alternatif",
      "headers": [
        "Parameter",
        "Hot Site",
        "Warm Site",
        "Cold Site"
      ],
      "rows": [
        [
          "Biaya Investasi",
          "Sangat Mahal (operasi 24/7 paralel).",
          "Moderat (perangkat keras siap, data dipulihkan terjadwal).",
          "Paling Ekonomis (hanya sewa gedung kosong)."
        ],
        [
          "Recovery Time Objective (RTO) — Berapa lama sistem boleh mati?",
          "Hitungan menit hingga detik (hampir instan).",
          "Hitungan beberapa jam hingga 1 hari.",
          "Hitungan hari hingga minggu."
        ],
        [
          "Recovery Point Objective (RPO) — Berapa jam transaksi yang boleh hilang?",
          "Mendekati 0 detik (data direplikasi secara sinkron real-time).",
          "Maksimal data backup hari sebelumnya (misal 24 jam).",
          "Seluruh data sejak backup tape fisik terakhir."
        ],
        [
          "Kelayakan Penggunaan",
          "Bank, bursa efek, sistem pembayaran nasional.",
          "Perusahaan manufaktur dan distribusi skala menengah.",
          "Organisasi dengan operasional non-kritis."
        ]
      ]
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Protokol Backup 3-2-1",
      "text": "Untuk mencegah kehancuran data akibat serangan ransomware, terapkan aturan 3-2-1: Simpan 3 salinan data, pada 2 media penyimpanan berbeda (misal SSD server lokal dan cloud storage), dengan 1 salinan disimpan di lokasi offsite yang terputus jaringan (air-gapped immutable backup)."
    }
  ]
},
  10: {
  "tm": 10,
  "title": "Tata Kelola TI, Kerangka COBIT & Audit Sistem Informasi",
  "ref": "Richardson et al. AIS 4e · Ch. 12",
  "intro": "Mendalami kerangka tata kelola teknologi informasi COBIT 2019, pemisahan tugas dalam departemen TI, serta metodologi audit sistem informasi: Audit Around the Computer vs Audit Through the Computer dan Computer-Assisted Audit Techniques (CAATs).",
  "objectives": [
    "Memahami struktur tata kelola TI berdasarkan kerangka kerja COBIT 2019 (EDM vs APO, BAI, DSS, MEA).",
    "Membedakan General IT Controls (GITC) vs Application Controls.",
    "Menganalisis pemisahan tugas fungsional internal di dalam Departemen Teknologi Informasi.",
    "Membandingkan teknik audit 'Around the Computer' vs 'Through the Computer'.",
    "Menerapkan teknik CAATs modern: Test Data Approach, Integrated Test Facility (ITF), dan Parallel Simulation."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "General IT Controls (GITC) vs Application Controls"
    },
    {
      "kind": "p",
      "text": "Dalam audit sistem informasi, pengendalian TI dibagi menjadi dua tingkatan hierarki yang saling melengkapi:"
    },
    {
      "kind": "ul",
      "items": [
        "General IT Controls (GITC): Pengendalian menyeluruh yang berlaku untuk seluruh lingkungan sistem informasi perusahaan. Jika GITC lemah, auditor TIDAK DAPAT mengandalkan Application Controls apa pun. GITC mencakup: Manajemen Akses Pengguna (User Access), Manajemen Perubahan Program (Change Management), Operasi Komputer & Backup, dan Tata Kelola Keamanan Siber.",
        "Application Controls: Pengendalian otomatis yang tertanam di dalam modul aplikasi perangkat lunak tertentu untuk memastikan integritas pemrosesan transaksi. Terdiri dari: Input Controls (misal: Field Check, Validity Check, Range Check, Limit Check), Processing Controls (misal: Run-to-Run Totals), dan Output Controls (misal: Spooling Reconciliation)."
      ]
    },
    {
      "kind": "table",
      "caption": "Tabel 10.1: Jenis Pengendalian Masukan Aplikasi (Input Controls) dalam SIA",
      "headers": [
        "Nama Pengendalian",
        "Aturan Logika",
        "Contoh Kasus Kesalahan yang Dicegah"
      ],
      "rows": [
        [
          "Field Check / Type Check",
          "Memastikan karakter yang dimasukkan memiliki tipe data yang benar.",
          "Mencegah entri huruf pada kolom 'Jumlah Pembayaran'."
        ],
        [
          "Sign Check",
          "Memeriksa tanda aritmatika (positif/negatif) apakah logis.",
          "Mencegah entri kuantitas jam kerja bernilai negatif."
        ],
        [
          "Limit Check & Range Check",
          "Memastikan nilai berada di bawah batas tertentu atau dalam rentang yang wajar.",
          "Menolak entri jam lembur > 20 jam per minggu atau nilai gaji < UMR."
        ],
        [
          "Completeness Check",
          "Memastikan tidak ada field wajib yang dibiarkan kosong.",
          "Menolak menyimpan faktur jika nomor NPWP pelanggan belum diisi."
        ],
        [
          "Validity Check",
          "Mencocokkan nilai input dengan data master yang valid.",
          "Menolak entri transaksi untuk Kode Akun yang tidak terdaftar di Bagan Akun (COA)."
        ],
        [
          "Check Digit Verification",
          "Menghitung angka penguji matematis pada digit terakhir nomor identifikasi.",
          "Mencegah salah ketik nomor rekening bank atau nomor kartu kredit."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Metodologi Audit SI: Around the Computer vs Through the Computer"
    },
    {
      "kind": "table",
      "caption": "Tabel 10.2: Perbandingan Pendekatan Audit Sistem Informasi",
      "headers": [
        "Dimensi",
        "Audit Around the Computer (Black Box)",
        "Audit Through the Computer (White Box)"
      ],
      "rows": [
        [
          "Fokus Audit",
          "Mencocokkan input fisik (dokumen sumber) langsung dengan output laporan tanpa menguji logika program.",
          "Menguji integritas logika program, algoritma penghitungan, dan pengendalian otomatis di dalam software."
        ],
        [
          "Kapan Digunakan?",
          "Sistem sederhana, volume transaksi rendah, jejak audit (audit trail) fisik tersedia lengkap.",
          "Sistem kompleks, transaksi real-time tanpa kertas (paperless), pemrosesan cloud ERP berskala besar."
        ],
        [
          "Risiko Utama",
          "Tidak mendeteksi kecurangan logika program yang disisipkan programmer (misal: Salami Fraud yang memotong sisa desimal sen).",
          "Membutuhkan keahlian teknis auditor yang tinggi dan perangkat lunak audit khusus (CAATs)."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Teknik Audit Berbantuan Komputer (CAATs)"
    },
    {
      "kind": "ul",
      "items": [
        "Test Data Approach: Auditor memasukkan data dummy (termasuk data salah seperti limit kredit minus) ke dalam sistem klien untuk melihat apakah sistem bereaksi menolak transaksi tersebut.",
        "Integrated Test Facility (ITF): Auditor membuat 'entitas/divisi fiktif' di dalam sistem operasional nyata klien dan memproses transaksi uji bersamaan dengan transaksi nyata tanpa mengganggu laporan konsolidasi.",
        "Parallel Simulation: Auditor menulis program independen yang meniru logika perhitungan klien, lalu memasukkan data transaksi nyata klien ke kedua program untuk membandingkan apakah hasilnya 100% identik."
      ]
    },
    {
      "kind": "callout",
      "variant": "tip",
      "title": "Pemisahan Tugas Wajib di Departemen TI",
      "text": "Programmer/Developer DILARANG KERAS memiliki akses ke lingkungan produksi (Live System). Program yang dibuat oleh Developer harus diuji oleh tim QA independen, disetujui oleh Manajemen Bisnis, dan dideploy ke server produksi HANYA oleh Operator/System Administrator."
    }
  ]
},
  11: {
  "tm": 11,
  "title": "Analitika Data Akuntansi (Accounting Data Analytics) & Visualisasi Bisnis",
  "ref": "Richardson et al. AIS 4e · Ch. 13",
  "intro": "Mempelajari integrasi Big Data dalam akuntansi melalui IMPACT Model. Membedakan empat tingkat analitika data (Deskriptif, Diagnostik, Prediktif, Preskriptif) dan teknik Audit Data Analytics (ADA) untuk pengujian 100% populasi buku besar.",
  "objectives": [
    "Menjelaskan karakteristik Big Data dalam konteks akuntansi (Volume, Velocity, Variety, Veracity, Value).",
    "Menguasai siklus pemecahan masalah IMPACT Model dalam proyek analitika data akuntansi.",
    "Mengklasifikasikan empat tingkatan analitika: Descriptive, Diagnostic, Predictive, dan Prescriptive.",
    "Menerapkan teknik Audit Data Analytics (ADA) untuk mendeteksi transaksi janggal, Benford's Law, dan outlier.",
    "Merancang dashboard visualisasi keuangan yang efektif (PowerBI/Tableau) sesuai prinsip integritas visual."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Model Analitika Data: Kerangka Kerja IMPACT"
    },
    {
      "kind": "p",
      "text": "IMPACT Model adalah metodologi standar industri untuk menjalankan proyek analitika data akuntansi dan audit:"
    },
    {
      "kind": "ul",
      "items": [
        "I - Identify the questions: Rumuskan pertanyaan bisnis yang jelas (misal: 'Faktur vendor mana yang dibayar dua kali dalam setahun terakhir?').",
        "M - Master the data: Ekstrak, bersihkan, dan validasi data (ETL - Extract, Transform, Load) dari berbagai database.",
        "P - Perform the test plan: Terapkan model analisis yang sesuai (clustering, regresi, deteksi anomali).",
        "A - Address and refine results: Evaluasi hasil temuan, singkirkan false positive, dan pertajam analisis.",
        "C - Communicate insights: Sajikan temuan dalam bentuk visualisasi interaktif (dashboard) yang mudah dipahami direksi.",
        "T - Track outcomes: Pantau efektivitas rekomendasi dan otomatisasi pemantauan transaksi berkelanjutan (Continuous Monitoring)."
      ]
    },
    {
      "kind": "h2",
      "text": "Empat Tingkatan Analitika Data Akuntansi"
    },
    {
      "kind": "table",
      "caption": "Tabel 11.1: Taksonomi Analitika Data Akuntansi",
      "headers": [
        "Tingkatan Analitika",
        "Pertanyaan Inti",
        "Contoh Kasus Akuntansi Manajemen",
        "Contoh Kasus Audit"
      ],
      "rows": [
        [
          "Descriptive Analytics",
          "Apa yang telah terjadi? (What happened?)",
          "Laporan ringkasan penjualan per wilayah, analisis rasio likuiditas historis.",
          "Tabel profil umur piutang (Aging Schedule), total pengeluaran kas tahun berjalan."
        ],
        [
          "Diagnostic Analytics",
          "Mengapa hal itu terjadi? (Why did it happen?)",
          "Analisis varians biaya bahan baku aktual vs standar, drill-down penyebab lonjakan retur.",
          "Deteksi transaksi akhir pekan/hari libur, pemindaian nomor cek yang melompat (gap detection)."
        ],
        [
          "Predictive Analytics",
          "Apa yang kemungkinan akan terjadi? (What is likely to happen?)",
          "Peramalan arus kas 6 bulan ke depan menggunakan time-series, estimasi probabilitas kebangkrutan (Altman Z-Score).",
          "Model klasifikasi machine learning untuk memprediksi risiko kegagalan bayar debitur."
        ],
        [
          "Prescriptive Analytics",
          "Tindakan apa yang sebaiknya diambil? (What should we do?)",
          "Optimasi rute distribusi logistik untuk meminimalkan biaya bahan bakar, penetapan harga dinamis (dynamic pricing).",
          "Sistem rekomendasi otomatis untuk membekukan akun vendor yang memiliki anomali skor risiko tinggi."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Teknik Audit Data Analytics (ADA): Hukum Benford & Deteksi Anomali"
    },
    {
      "kind": "p",
      "text": "Dalam audit tradisional, auditor hanya memeriksa sampel 25-50 transaksi. Dengan ADA, auditor menguji 100% populasi transaksi buku besar (General Ledger) menggunakan query otomatis:"
    },
    {
      "kind": "ul",
      "items": [
        "Hukum Benford (Benford's Law): Teori probabilitas yang menyatakan bahwa dalam data angka alami, digit pertama angka 1 muncul sebesar 30.1%, angka 2 sebesar 17.6%, hingga angka 9 hanya 4.6%. Jika distribusi digit pertama pada faktur klaim pengeluaran staf menyimpang drastis dari kurva Benford, ini indikator kuat manipulasi angka atau pemalsuan kuitansi.",
        "Pencarian Angka Bulat (Round Number Bias): Menemukan konsentrasi transaksi pengeluaran kas dengan angka bulat mencurigakan (misal: Rp 49.999.000) tepat di bawah batas plafon otorisasi Rp 50.000.000 (threshold-skimming).",
        "Pencocokan Duplikasi Fuzzy (Fuzzy Matching): Mendeteksi pembayaran ganda ke vendor yang sama di mana nama vendor diketik sedikit berbeda (misal: 'PT Sumber Makmur' vs 'PT. Sumber Makmur TBK')."
      ]
    },
    {
      "kind": "callout",
      "variant": "tip",
      "title": "Prinsip Visualisasi Data",
      "text": "Hindari penggunaan 3D Pie Chart yang mendistorsi persepsi proporsi pembaca. Gunakan Bar Chart horizontal untuk membandingkan kategori, Line Chart untuk tren waktu, dan Scatter Plot untuk melihat korelasi dan outlier."
    }
  ]
},
  12: {
  "tm": 12,
  "title": "Otomasi Proses Robotik (RPA) & Kecerdasan Buatan (AI) dalam Akuntansi",
  "ref": "Richardson et al. AIS 4e · Ch. 14",
  "intro": "Mempelajari pemanfaatan Robotic Process Automation (RPA) dan Artificial Intelligence (Machine Learning, NLP, Generative AI) dalam mengotomatisasi pekerjaan akuntansi repetitif seperti rekonsiliasi bank, pemrosesan faktur OCR, dan deteksi anomali jurnal.",
  "objectives": [
    "Mengidentifikasi kriteria proses bisnis akuntansi yang cocok diotomatisasi dengan RPA.",
    "Menganalisis arsitektur bot RPA dan integrasinya dengan aplikasi ERP tanpa mengubah kode backend.",
    "Menjelaskan pemanfaatan Optical Character Recognition (OCR) dan Natural Language Processing (NLP) pada dokumen keuangan.",
    "Memahami tata kelola bot (Bot Governance), pemisahan tugas identitas bot, dan audit trail otomasi.",
    "Mengevaluasi etika dan dampak kecerdasan buatan terhadap masa depan profesi akuntan."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Kriteria Kelayakan Otomasi Menggunakan RPA"
    },
    {
      "kind": "p",
      "text": "Robotic Process Automation (RPA) adalah perangkat lunak 'bot' yang meniru tindakan manusia dalam berinteraksi dengan antarmuka pengguna (UI) komputer untuk menyelesaikan pekerjaan bervolume tinggi. Tidak semua proses akuntansi cocok untuk RPA. Proses ideal wajib memenuhi lima syarat berikut:"
    },
    {
      "kind": "ul",
      "items": [
        "1. Rule-based (Berbasis Aturan Baku): Logika keputusan transparan dan tidak membutuhkan pertimbangan subjektif manusia (judgment). Contoh: 'Jika nomor akun cocok dan nominal sama, tandai cocok'.",
        "2. High Volume & Repetitive: Tugas dikerjakan berulang kali dalam frekuensi tinggi (ratusan hingga ribuan kali per hari).",
        "3. Digital & Structured Input: Data masukan berupa format digital terstruktur (seperti spreadsheet Excel, database SQL, atau file CSV/XML).",
        "4. Low Exception Rate: Tingkat pengecualian (kejadian aneh di luar SOP) rendah (< 5%).",
        "5. Stable Process: Prosedur operasional dan tata letak aplikasi stabil dan tidak sering berubah."
      ]
    },
    {
      "kind": "h2",
      "text": "Studi Kasus RPA: Rekonsiliasi Bank Otomatis di PT Mitra Logistik"
    },
    {
      "kind": "p",
      "text": "Sebelum Otomasi: Tiga staf akuntansi menghabiskan 4 jam setiap pagi untuk mengunduh rekening koran dari internet banking, membuka file buku besar bank, dan mencocokkan nomor referensi secara manual satu per satu."
    },
    {
      "kind": "p",
      "text": "Alur Kerja Bot RPA Terotomatisasi:"
    },
    {
      "kind": "ul",
      "items": [
        "Pukul 02.00: Bot login otomatis ke portal internet banking menggunakan kredensial aman (Credential Vault), mengunduh mutasi rekening dalam format CSV.",
        "Pukul 02.15: Bot mengekstrak data jurnal penerimaan dan pengeluaran kas dari modul SAP FI.",
        "Pukul 02.30: Bot mencocokkan transaksi berdasarkan kombinasi: Nomor Referensi + Tanggal (+/- 2 hari) + Nilai Nominal Persis.",
        "Pukul 02.45: Untuk transaksi yang 100% cocok (match), bot langsung menjurnal clearing di SAP.",
        "Pukul 03.00: Untuk transaksi selisih (unmatched exceptions), bot menyusun laporan pengecualian (Exception Report) dan mengirimkannya via email kepada Manajer Akuntansi untuk ditindaklanjuti manusia pada pukul 08.00 pagi."
      ]
    },
    {
      "kind": "table",
      "caption": "Tabel 12.1: Perbandingan Peran Akuntan: Tradisional vs Era AI/RPA",
      "headers": [
        "Aktivitas Akuntansi",
        "Metode Konvensional",
        "Era AI & Otomasi"
      ],
      "rows": [
        [
          "Input Faktur Vendor",
          "Mengetik manual nomor faktur, tanggal, dan nominal item per item.",
          "Intelligent Document Processing (IDP/OCR) memindai PDF faktur dan mengisi field ERP otomatis."
        ],
        [
          "Rekonsiliasi Bank",
          "Pencocokan manual manual baris demi baris menggunakan pulpen stabilo.",
          "Bot RPA mencocokkan 95% transaksi otomatis; manusia hanya menangani 5% sisa pengecualian."
        ],
        [
          "Pendeteksian Fraud",
          "Pemeriksaan acak berdasarkan sampel audit tahunan.",
          "Machine learning memantau 100% aliran transaksi real-time dan memberikan peringatan fraud seketika."
        ],
        [
          "Fokus Nilai Tambah",
          "Pencatatan data klerikal (Data Processing).",
          "Interpretasi wawasan strategis, penilaian risiko, dan pengambilan keputusan (Decision Support)."
        ]
      ]
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Tata Kelola Bot (Bot Governance)",
      "text": "Bot RPA harus memiliki Identitas Pengguna (User ID) unik yang terpisah dari akun manusia. Dilarang keras menggunakan akun karyawan untuk menjalankan bot! Setiap tindakan bot wajib tercatat di audit trail sistem untuk akuntabilitas hukum."
    }
  ]
},
  13: {
  "tm": 13,
  "title": "Teknologi Blockchain, Smart Contracts & Akuntansi Tiga Entri (Triple-Entry Accounting)",
  "ref": "Richardson et al. AIS 4e · Ch. 15",
  "intro": "Membahas disrupsi teknologi Distributed Ledger Technology (DLT) dan Blockchain terhadap sistem akuntansi. Memahami arsitektur blok, kriptografi hash, konsensus, Smart Contracts, evolusi menuju Triple-Entry Accounting, serta audit atas aset digital.",
  "objectives": [
    "Menjelaskan karakteristik dasar Blockchain: Desentralisasi, Immutability, Transparansi, dan Kriptografi Hash.",
    "Membedakan jaringan Public Blockchain (Permissionless) vs Private/Consortium Blockchain (Permissioned).",
    "Memahami konsep Triple-Entry Accounting dan dampaknya terhadap otomatisasi verifikasi audit.",
    "Menganalisis mekanisme kerja Smart Contracts dalam otomatisasi siklus pendapatan dan pengeluaran.",
    "Mengevaluasi tantangan audit aset kripto dan kepatuhan standar akuntansi (PSAK/IFRS terkait aset takberwujud)."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Arsitektur Blockchain & Mekanisme Kriptografi"
    },
    {
      "kind": "p",
      "text": "Blockchain adalah buku besar digital terdistribusi (Distributed Ledger Technology / DLT) yang mencatat transaksi secara kronologis dalam rangkaian 'blok' yang saling terhubung menggunakan fungsi hash kriptografi (seperti SHA-256). Setiap blok memuat tiga komponen utama:"
    },
    {
      "kind": "ul",
      "items": [
        "Data Transaksi: Catatan peristiwa ekonomi (misal: 'PT A mentransfer 100 token komoditas ke PT B').",
        "Hash Blok Ini: Sidik jari digital unik yang dihasilkan dari komputasi seluruh isi blok saat ini.",
        "Previous Hash (Hash Blok Sebelumnya): Tautan kriptografis ke blok sebelumnya yang menciptakan rantai (chain) yang tidak dapat diputus."
      ]
    },
    {
      "kind": "p",
      "text": "Sifat Immutability (Kekekalan Data): Jika seorang peretas mencoba mengubah data transaksi pada blok masa lalu (misal mengubah nominal dari Rp 10 juta menjadi Rp 100 juta), nilai hash blok tersebut akan berubah total seketika. Akibatnya, hubungan rantai ke seluruh blok berikutnya menjadi tidak valid dan ditolak oleh konsensus mayoritas node jaringan."
    },
    {
      "kind": "h2",
      "text": "Revolusi Triple-Entry Accounting"
    },
    {
      "kind": "table",
      "caption": "Tabel 13.1: Evolusi Paradigma Sistem Pembukuan Akuntansi",
      "headers": [
        "Era Akuntansi",
        "Mekanisme Pembukuan",
        "Kelemahan & Kebutuhan Audit",
        "Pihak yang Memverifikasi"
      ],
      "rows": [
        [
          "Single-Entry (Pra-1494)",
          "Hanya mencatat penambahan atau pengurangan kas dalam satu daftar.",
          "Tidak ada mekanisme kontrol internal keseimbangan; mudah terjadi kehilangan catatan.",
          "Pencatat itu sendiri (sangat subjektif)."
        ],
        [
          "Double-Entry (Luca Pacioli 1494)",
          "Setiap transaksi dicatat sebagai Debit dan Kredit pada dua buku terpisah milik masing-masing entitas.",
          "Masing-masing pihak (penjual dan pembeli) memegang buku sendiri; rawan perbedaan saldo dan memerlukan konfirmasi audit eksternal.",
          "Auditor eksternal independen melakukan audit sampling atas dokumen kertas."
        ],
        [
          "Triple-Entry (Era Blockchain)",
          "Selain debit pada pembeli dan kredit pada penjual, entri KETIGA dicatat secara kriptografis pada Shared Distributed Ledger publik.",
          "Data diverifikasi otomatis oleh jaringan komputer; tidak ada perselisihan saldo antar pihak; biaya audit rekonsiliasi terpangkas drastis.",
          "Konsensus kriptografi matematis jaringan (Trustless Network)."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Penerapan Smart Contracts dalam Rantai Pasok (Supply Chain)"
    },
    {
      "kind": "p",
      "text": "Smart Contract adalah program komputer yang disimpan di dalam blockchain yang mengeksekusi tindakan secara otomatis jika kondisi tertentu yang telah disepakati terpenuhi ('If/Then Statement')."
    },
    {
      "kind": "p",
      "text": "Contoh Siklus Pengadaan Terotomatisasi Smart Contract:"
    },
    {
      "kind": "ul",
      "items": [
        "Syarat: 'JIKA sensor IoT pada kontainer mengonfirmasi barang telah tiba di pelabuhan Tanjung Perak dengan suhu terjaga di bawah -18°C DAN bea cukai terverifikasi lolos...'",
        "Eksekusi Otomatis: '...MAKA smart contract seketika melepaskan pembayaran dana dari rekening escrow pembeli ke rekening vendor dan menerbitkan bukti pelunasan digital tanpa menunggu persetujuan faktur kertas selama 30 hari.'"
      ]
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Perlakuan Akuntansi Aset Kripto",
      "text": "Berdasarkan IFRIC Interpretation (dan PSAK terkait), aset kripto umumnya TIDAK diklasifikasikan sebagai Kas atau Setara Kas (karena volatilitas ekstrem) dan bukan Aset Keuangan. Jika dimiliki untuk dijual dalam kegiatan usaha normal, diklasifikasikan sebagai Persediaan (PSAK 14). Jika dimiliki untuk investasi jangka panjang, diklasifikasikan sebagai Aset Takberwujud (PSAK 19)."
    }
  ]
},
  14: {
  "tm": 14,
  "title": "Integrasi Sistem Perusahaan & Simulasi Kasus Komprehensif Pra-UAS",
  "ref": "Richardson et al. AIS 4e · Sintesis Keseluruhan",
  "intro": "Tatap muka penutup yang mengintegrasikan seluruh materi SIA: siklus transaksi, arsitektur ERP terpusat, tata kelola COSO/COBIT, keamanan siber, analitika data, dan teknologi masa depan. Dilengkapi dengan metodologi diagnostik kasus komprehensif persiapan Ujian Akhir Semester (UAS).",
  "objectives": [
    "Mengintegrasikan aliran data dan kontrol antar seluruh siklus transaksi bisnis (O2C, P2P, Konversi, Penggajian, Pelaporan Keuangan).",
    "Mendiagnosis kegagalan sistem terintegrasi dan kelemahan pengendalian internal material dalam studi kasus perusahaan nyata.",
    "Menyusun matriks mitigasi risiko berbasis COSO Internal Control dan IT General Controls (GITC).",
    "Mengevaluasi kesiapan menghadapi evaluasi kompetensi Ujian Akhir Semester (UAS).",
    "Merumuskan strategi transformasi digital sistem akuntansi yang aman dan efisien."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Peta Integrasi Arsitektur Sistem Informasi Akuntansi Terintegrasi"
    },
    {
      "kind": "p",
      "text": "Sistem informasi akuntansi modern bukan sekumpulan modul terpisah, melainkan ekosistem terpadu di mana peristiwa operasional di hulu (upstream) secara otomatis memicu pembaruan laporan keuangan di hilir (downstream):"
    },
    {
      "kind": "table",
      "caption": "Tabel 14.1: Integrasi Lintas Siklus Transaksi ke Buku Besar Umum (General Ledger / GL)",
      "headers": [
        "Siklus Asal",
        "Pemicu Transaksi (Trigger)",
        "Jurnal Otomatis yang Terbentuk",
        "Modul ERP Terkait"
      ],
      "rows": [
        [
          "Siklus Pendapatan (O2C)",
          "Konfirmasi Bill of Lading pengiriman barang dagang ke pelanggan.",
          "Debit: Piutang Usaha / Kas; Kredit: Pendapatan Penjualan. Debit: Beban Pokok Penjualan; Kredit: Persediaan Barang Jadi.",
          "SD (Sales & Distribution) -> FI (Financial Accounting) & MM (Materials Management)."
        ],
        [
          "Siklus Pengeluaran (P2P)",
          "Three-Way Match disetujui (PO + RR + Vendor Invoice).",
          "Debit: Persediaan Bahan Baku / Beban Operasional; Kredit: Utang Usaha.",
          "MM (Materials Management) -> FI (Accounts Payable)."
        ],
        [
          "Siklus Konversi",
          "Laporan penyelesaian batch produksi dari stasiun perakitan.",
          "Debit: Persediaan Barang Jadi; Kredit: Barang Dalam Proses (WIP).",
          "PP (Production Planning) -> CO (Controlling) & FI."
        ],
        [
          "Siklus Penggajian (Payroll)",
          "Otorisasi rekapitulasi jam kerja biometrik bulanan.",
          "Debit: Beban Gaji & Upah; Kredit: Utang PPh 21, Utang BPJS, dan Kas/Utang Gaji.",
          "HR/HCM (Human Capital) -> FI."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Simulasi Kasus UAS: Diagnosa Kegagalan Sistem PT Global Distribusi Utama"
    },
    {
      "kind": "p",
      "text": "Konteks Kasus: PT Global Distribusi Utama mengalami kerugian Rp 3.2 miliar dalam satu tahun buku. Hasil investigasi komite audit menemukan temuan-temuan berikut:"
    },
    {
      "kind": "ul",
      "items": [
        "Temuan 1: Database ERP sering down selama 6 jam saat penutupan buku bulanan karena server kelebihan beban.",
        "Temuan 2: Staf pembelian merangkap sebagai admin yang memiliki hak akses menambah vendor baru dan menyetujui Purchase Order.",
        "Temuan 3: Perusahaan membayar Rp 850 juta ke vendor bernama 'CV Maju Lancar' yang beralamat sama dengan rumah pribadi Manajer Logistik.",
        "Temuan 4: Terjadi kebocoran data rahasia harga pokok produksi ke kompetitor melalui USB flashdisk staf magang IT."
      ]
    },
    {
      "kind": "h2",
      "text": "Solusi Matriks Rekomendasi Audit (Standar Jawaban UAS)"
    },
    {
      "kind": "table",
      "caption": "Tabel 14.2: Matriks Diagnosa & Rekomendasi Komprehensif UAS",
      "headers": [
        "Kasus",
        "Kelemahan Pengendalian",
        "Kategori COSO / GITC",
        "Solusi & Pengendalian Perbaikan"
      ],
      "rows": [
        [
          "Temuan 1",
          "Ketiadaan perencanaan kapasitas server dan tidak adanya High Availability / Hot Site.",
          "GITC (Computer Operations & Availability)",
          "Migrasikan database ke arsitektur Cloud ERP yang memiliki auto-scaling; siapkan server replikasi aktif."
        ],
        [
          "Temuan 2",
          "Pelanggaran serius pemisahan tugas (SoD) antara pendaftaran vendor dan pemesanan.",
          "Control Activities (Segregation of Duties)",
          "Cabut hak akses otorisasi PO dari staf pendaftaran vendor; terapkan matriks SoD di konfigurasi modul ERP."
        ],
        [
          "Temuan 3",
          "Fraud Vendor Fiktif (Shell Company) dan transaksi dengan pihak berelasi tanpa deklarasi.",
          "Risk Assessment & Control Environment",
          "Wajibkan verifikasi fisik dan legalitas NPWP/NIB vendor oleh Bagian Legal; terapkan audit data matching alamat vendor vs karyawan."
        ],
        [
          "Temuan 4",
          "Ketiadaan Data Loss Prevention (DLP) dan akses fisik port USB yang terbuka bebas.",
          "Information Security (GITC - Logical Access)",
          "Nonaktifkan seluruh port USB di komputer kantor melalui Group Policy Windows; enkripsi harddisk laptop dengan BitLocker; terapkan perjanjian kerahasiaan (NDA)."
        ]
      ]
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Strategi Sukses Menghadapi UAS SIA",
      "text": "Gunakan pendekatan multidisipliner: hubungkan aspek bisnis, hukum, standar akuntansi, dan teknologi informasi. Jawaban yang menggabungkan prinsip akuntansi (pengakuan jurnal) dengan pengendalian TI (GITC & Application Controls) selalu mendapatkan nilai tertinggi dari dosen penguji."
    }
  ]
},
};
