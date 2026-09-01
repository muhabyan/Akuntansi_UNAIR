import type { Reading } from '../../../types';
import {
  CASE_LUMP_SUM_PPE,
  CASE_BORROWING_COST,
  CASE_DECOMMISSIONING_RESTORE
} from '../akm2PracticeCases';

const SVG_PPE_CLASSIFICATION = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">KLASIFIKASI KEPEMILIKAN PROPERTI &amp; ASET BERWUJUD</text>
  
  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">ASET TETAP (PSAK 16)</text>
  <text x="125" y="98" fill="#94a3b8" font-size="10" text-anchor="middle">Tujuan Penggunaan:</text>
  <text x="125" y="115" fill="#f1f5f9" font-size="10.5" font-weight="600" text-anchor="middle">Operasi / Kantor / Pabrik</text>
  <line x1="45" y1="128" x2="205" y2="128" stroke="#334155"/>
  <text x="125" y="145" fill="#94a3b8" font-size="10" text-anchor="middle">Pengukuran Lanjutan:</text>
  <text x="125" y="162" fill="#cbd5e1" font-size="10" text-anchor="middle">Cost Model (Didepresiasi)</text>
  <text x="125" y="178" fill="#cbd5e1" font-size="10" text-anchor="middle">atau Revaluation (OCI)</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="340" y="78" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">PROPERTI INVESTASI (PSAK 13)</text>
  <text x="340" y="98" fill="#94a3b8" font-size="10" text-anchor="middle">Tujuan Penggunaan:</text>
  <text x="340" y="115" fill="#f1f5f9" font-size="10.5" font-weight="600" text-anchor="middle">Sewa Rental / Capital Gain</text>
  <line x1="260" y1="128" x2="420" y2="128" stroke="#334155"/>
  <text x="340" y="145" fill="#94a3b8" font-size="10" text-anchor="middle">Pengukuran Lanjutan:</text>
  <text x="340" y="162" fill="#cbd5e1" font-size="10" text-anchor="middle">Cost Model (Depresiasi)</text>
  <text x="340" y="178" fill="#34d399" font-size="10" font-weight="600" text-anchor="middle">atau Fair Value (Laba Rugi!)</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="555" y="78" fill="#f59e0b" font-size="11.5" font-weight="700" text-anchor="middle">PERSEDIAAN (PSAK 14)</text>
  <text x="555" y="98" fill="#94a3b8" font-size="10" text-anchor="middle">Tujuan Penggunaan:</text>
  <text x="555" y="115" fill="#f1f5f9" font-size="10.5" font-weight="600" text-anchor="middle">Dijual dlm Kegiatan Biasa</text>
  <line x1="475" y1="128" x2="635" y2="128" stroke="#334155"/>
  <text x="555" y="145" fill="#94a3b8" font-size="10" text-anchor="middle">Karakteristik Entitas:</text>
  <text x="555" y="162" fill="#cbd5e1" font-size="10" text-anchor="middle">Pengembang Real Estat /</text>
  <text x="555" y="178" fill="#cbd5e1" font-size="10" text-anchor="middle">Developer Perumahan</text>
</svg>`;

export const TM1_READING: Reading = {
  tm: 1,
  title: 'Akuntansi Aset Tetap, Properti Investasi, dan Tanah',
  ref: 'Kieso IFRS 5e Ch. 10 | PSAK 16, PSAK 13, PSAK 26, ISAK 25',
  intro: 'TM 1 adalah fondasi seluruh akuntansi aset berwujud AKM II. Fokus utama yang diuji dalam ujian: kapan suatu pengeluaran wajib dikapitalisasi ke aset tetap vs dibebankan langsung ke laba rugi? Bagaimana menghitung harga perolehan lump-sum, wesel tanpa bunga, pembongkaran gedung lama, serta perhitungan 3 tahap kapitalisasi bunga konstruksi PSAK 26.',
  objectives: [
    'Menganalisis kriteria pengakuan dan komponen biaya perolehan awal Aset Tetap (PSAK 16).',
    'Menghitung dan menjurnal perolehan aset melalui pembelian Lump-Sum, Wesel Bayar Tangguhan, dan Penerbitan Saham.',
    'Menghitung provisi pembongkaran dan restorasi lokasi (Decommissioning Provision - PSAK 57).',
    'Menguasai perhitungan 3 tahap kapitalisasi biaya pinjaman selama masa konstruksi (WAAE, Avoidable Interest, Jurnal Kapitalisasi - PSAK 26).',
    'Membedakan perlakuan akuntansi Aset Tetap (PSAK 16) vs Properti Investasi (PSAK 13) vs Persediaan Properti (PSAK 14).',
    'Memahami perlakuan akuntansi Hak Legal atas Tanah di Indonesia (Hak Milik vs HGB/HGU - ISAK 25).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Peta Klasifikasi Kepemilikan Properti & Aset Berwujud Berdasarkan Intensi Manajemen',
      svg: SVG_PPE_CLASSIFICATION,
      caption: 'Gambar 1.1: Pemisahan perlakuan standar akuntansi berdasarkan fungsi dan intensi manajemen.'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat TM 1'
    },
    {
      kind: 'table',
      headers: ['Tahap', 'Fokus Analisis', 'Pertanyaan Kunci Mahasiswa', 'Output yang Dikuasai'],
      rows: [
        ['1', 'Kriteria Kapitalisasi', 'Apakah pengeluaran membawa aset ke kondisi dan lokasi siap operasi?', 'Mampu memisahkan komponen yang dikapitalisasi vs beban periode (expense).'],
        ['2', 'Skema Perolehan Khusus', 'Bagaimana mengalokasikan harga borongan (lump-sum) atau wesel jangka panjang?', 'Alokasi nilai wajar relatif & pemisahan diskonto bunga efektif.'],
        ['3', 'Kapitalisasi Bunga PSAK 26', 'Berapa WAAE dan bunga yang dapat dihindari (Avoidable Interest)?', 'Jurnal kapitalisasi bunga konstruksi dan sisa beban bunga periode berjalan.'],
        ['4', 'Pengukuran Lanjutan', 'Apakah entitas memilih Cost Model atau Revaluation / Fair Value Model?', 'Pencatatan surplus revaluasi OCI vs keuntungan nilai wajar laba rugi.'],
        ['5', 'Klasifikasi Properti & Tanah', 'Apakah properti disewakan atau dipakai sendiri? Bagaimana status HGB?', 'Klasifikasi PSAK 16 vs PSAK 13 serta amortisasi hak atas tanah ISAK 25.']
      ],
      caption: 'Tabel 1.0: Roadmap belajar terstruktur materi Aset Tetap dan Properti Investasi.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi TM 1'
    },
    {
      kind: 'formula',
      text: '\\text{Biaya Perolehan Aset} = \\text{Harga Beli Bersih} + \\text{Biaya Atribusi Langsung} + \\text{PV Estimasi Restorasi Lokasi}',
      note: 'Harga Beli Bersih = Harga faktur dikurangi diskon niaga dan rabat, ditambah bea impor/pajak tak dapat dikreditkan.'
    },
    {
      kind: 'formula',
      text: 'Alokasi Lump-Sum = \\frac{\\text{Nilai Wajar Aset Individu}}{\\text{Total Nilai Wajar Seluruh Aset}} \\times \\text{Total Harga Beli Lump-Sum}',
      note: 'Nilai tercatat buku penjual TIDAK BOLEH digunakan sebagai dasar alokasi harga perolehan borongan.'
    },
    {
      kind: 'formula',
      text: 'WAAE = \\sum \\left( \\text{Pengeluaran Kas Konstruksi} \\times \\frac{\\text{Bulan Sisa Periode}}{12} \\right)',
      note: 'WAAE (Weighted-Average Accumulated Expenditures) adalah modal tertimbang yang mendasari perhitungan bunga terhindarkan (Avoidable Interest).'
    },
    {
      kind: 'formula',
      text: '\\text{Bunga yang Dikapitalisasi} = \\min(\\text{Avoidable Interest}, \\text{Total Bunga Aktual Seluruh Pinjaman})',
      note: 'Sesuai PSAK 26, jumlah bunga yang dikapitalisasi tidak boleh melampaui total beban bunga riil yang terjadi.'
    },
    {
      kind: 'example',
      title: 'Contoh Mini Numerik: Perolehan Mesin Pabrik PT Semen Gresik',
      blocks: [
        {
          kind: `p`,
          text: `PT Semen Gresik mengimpor mesin penggilingan semen pada 1 Maret 2026 dengan rincian pengeluaran:
• Harga faktur mesin: Rp 800.000.000 (diskon tunai 2% dimanfaatkan).
• Bea masuk pelabuhan: Rp 45.000.000.
• Ongkos angkut pelabuhan ke pabrik Tuban: Rp 25.000.000.
• Biaya pondasi beton khusus mesin: Rp 35.000.000.
• Biaya uji coba mesin (testing): Rp 15.000.000 (hasil penjualan semen uji coba laku Rp 3.000.000).
• Biaya pelatihan operator mesin: Rp 12.000.000.
• Biaya perayaan peresmian mesin baru: Rp 8.000.000.`
        },
        {
          kind: `formula`,
          text: `Harga Beli Bersih = 800.000.000 - 2% (16.000.000) = Rp 784.000.000
Biaya Atribusi = 45.000.000 + 25.000.000 + 35.000.000 + (15.000.000 - 3.000.000) = Rp 117.000.000
Total Biaya Perolehan Mesin = 784.000.000 + 117.000.000 = Rp 901.000.000`
        },
        {
          kind: 'callout',
          variant: 'key',
          title: 'Analisis Perlakuan Akuntansi',
          text: 'Biaya pelatihan staf (Rp 12 jt) dan peresmian (Rp 8 jt) adalah **Beban Operasional periode berjalan (Expense)** karena tidak melekat pada kesiapan fisik mesin, melainkan peningkatan kapasitas SDM dan seremonial.'
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Aktif: Evaluasi 4 Jenis Pengeluaran Tanah & Gedung',
      prompt: 'PT Nusantara membeli lahan yang terdapat gedung tua terbengkalai seharga Rp 1.500.000.000 dengan rencana meratakan gedung tua dan membangun gedung kantor pusat baru. Pengeluaran: (1) Biaya meratakan gedung tua Rp 80.000.000, (2) Hasil penjualan sisa puing besi Rp 15.000.000, (3) Honor arsitek gambar kantor baru Rp 60.000.000, (4) PBB selama masa pembangunan Rp 10.000.000. Tentukan alokasi ke akun Tanah vs Gedung!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Harga Beli Lahan (Rp 1.500.000.000)** → Masuk akun **Tanah**.',
            '**Biaya Bersih Pembongkaran Gedung Tua (Rp 80 jt - Rp 15 jt = Rp 65.000.000)** → Masuk akun **Tanah** (karena bertujuan menyiapkan lahan agar siap dibangun).',
            '**Honor Arsitek Gedung Baru (Rp 60.000.000)** → Masuk akun **Gedung** (atribusi langsung struktur fisik gedung).',
            '**PBB Masa Pembangunan (Rp 10.000.000)** → Masuk akun **Beban Pajak / Beban Operasional** (atau dikapitalisasi ke Gedung jika memenuhi syarat biaya pinjaman/konstruksi langsung).'
          ]
        },
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Jebakan UTS Terpopuler',
          text: 'Banyak mahasiswa mendebit biaya pembongkaran gedung lama ke akun "Gedung". Ini SALAH! Karena pembongkaran tersebut dilakukan untuk membersihkan lahan, maka biaya bersihnya menambah nilai perolehan **TANAH**.'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan TM 1'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Karakteristik & Pengakuan Aset Tetap', 'Kriteria manfaat ekonomik probable dan keterandalan pengukuran (PSAK 16).', 'Mampu memvalidasi apakah suatu aset diakui di neraca atau dibebankan.'],
        ['2', 'Komponen Biaya Perolehan Awal', '3 elemen pembentuk kos dan daftar pengeluaran yang dilarang dikapitalisasi.', 'Mampu menghitung nilai perolehan per unit aset tanpa salah memasukkan beban operasional.'],
        ['3', 'Perolehan Khusus (Lump-Sum & Wesel)', 'Metode proporsi nilai wajar relatif dan diskonto harga tunai wesel tanpa bunga.', 'Menghasilkan jurnal perolehan majemuk dan tabel amortisasi diskonto wesel.'],
        ['4', 'Provisi Pembongkaran & Restorasi', 'Perhitungan Nilai Sekarang (PV) provisi dan penyesuaian nilai aset (PSAK 57).', 'Menjurnal pengakuan awal provisi dan beban bunga unwinding diskonto.'],
        ['5', 'Kapitalisasi Bunga Konstruksi (PSAK 26)', 'Perhitungan WAAE, bunga spesifik, bunga umum, dan batasan plafon bunga aktual.', 'Menyusun skedul kapitalisasi bunga dan jurnal penyesuaian akhir tahun.'],
        ['6', 'Model Revaluasi vs Model Biaya', 'Pencatatan surplus revaluasi ke OCI dan penyesuaian akumulasi depresiasi.', 'Menjurnal eliminasi atau proporsional saat revaluasi aset dilakukan.'],
        ['7', 'Properti Investasi & Tanah Indonesia', 'Perlakuan Fair Value Model PSAK 13 vs PSAK 16 dan amortisasi HGB (ISAK 25).', 'Mampu mengklasifikasikan aset di laporan posisi keuangan dan menghitung laba nilai wajar.']
      ],
      caption: 'Tabel 1.1: Matriks kompetensi komprehensif materi TM 1 AKM II.'
    },
    { kind: 'h2', text: '1. Karakteristik & Kriteria Pengakuan Aset Tetap (PSAK 16)' },
    {
      kind: 'p',
      text: '==Aset Tetap (*Property, Plant, and Equipment* - PPE) adalah aset berwujud yang dimiliki untuk digunakan dalam produksi atau penyediaan barang/jasa, direntalkan kepada pihak lain, atau untuk tujuan administratif, dan diperkirakan digunakan lebih dari satu periode.=='
    },
    {
      kind: 'callout',
      variant: 'key',
      title: `Dua Kriteria Pengakuan Aset Tetap (Recognition Criteria)`,
      text: `Entitas mengakui biaya perolehan aset tetap jika dan hanya jika:
1. Besar kemungkinan (**probable**) bahwa manfaat ekonomik masa depan yang berkaitan dengan aset tersebut akan mengalir ke dalam entitas; dan
2. Biaya perolehan aset dapat **diukur secara andal** (reliably measured).`
    },
    { kind: 'h2', text: '2. Komponen Biaya Perolehan Awal (Initial Cost Breakdown)' },
    {
      kind: 'table',
      headers: ['Elemen Biaya', 'Rincian Komponen yang DIKAPITALISASI', 'Perlakuan Akuntansi'],
      rows: [
        ['1. Harga Pembelian', 'Harga faktur beli, bea impor/masuk, pajak pembelian yang tidak dapat dikreditkan (misal PPN Non-PKP), dikurangi diskon niaga dan rabat.', 'Mendebit Aset Tetap'],
        ['2. Biaya Atribusi Langsung', 'Biaya persiapan lokasi (site preparation), biaya penanganan & pengiriman awal (freight-in), biaya instalasi & perakitan, biaya pengujian kelayakan operasi (testing), imbalan profesional (notaris, arsitek, insinyur).', 'Mendebit Aset Tetap'],
        ['3. Estimasi Biaya Pembongkaran & Restorasi', 'Nilai sekarang (Present Value) dari kewajiban membongkar dan memindahkan aset serta merestorasi lokasi tempat aset berada pada akhir masa manfaat.', 'Mendebit Aset Tetap & Mengkredit Provisi (PSAK 57)']
      ],
      caption: 'Tabel 1.2: Komponen biaya yang wajib dikapitalisasi ke dalam aset tetap.'
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: `Jebakan Ujian: Biaya yang TIDAK Boleh Dikapitalisasi (Expense Langsung)`,
      text: `Pengeluaran berikut **HARUS dibebankan langsung ke Laba Rugi periode berjalan**:
  Biaya pembukaan fasilitas baru (opening new facility costs).
  Biaya pengenalan produk baru, termasuk biaya iklan dan promosi.
  Biaya pelatihan staf/karyawan untuk mengoperasikan aset.
  Biaya administrasi dan overhead umum.
  Biaya operasional yang terjadi setelah aset siap digunakan namun belum beroperasi penuh.`
    },
    { kind: 'h2', text: '3. Kondisi Khusus Perolehan Aset Tetap' },
    { kind: 'h3', text: 'A. Pembelian Gabungan (Lump-Sum Purchase)' },
    {
      kind: 'p',
      text: 'Jika beberapa aset dibeli bersamaan dengan satu harga tunggal (*lump-sum*), total biaya perolehan dialokasikan ke masing-masing aset berdasarkan **proporsi nilai wajar relatif (Relative Fair Value Method)** pada tanggal transaksi.'
    },
    CASE_LUMP_SUM_PPE,
    { kind: 'h3', text: 'B. Perolehan dengan Kontrak Pembayaran Ditangguhkan (Deferred Settlement)' },
    {
      kind: 'p',
      text: 'Ketika aset tetap dibeli dengan syarat kredit jangka panjang melampaui jangka waktu kredit normal (misal: wesel bayar tanpa bunga 3 tahun), biaya perolehannya adalah **setara harga tunai (Cash Price Equivalent)** pada tanggal pengakuan, yang dihitung dari **Present Value (PV)** seluruh pembayaran masa depan.'
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Logika Pemisahan Aset & Beban Bunga',
      text: 'Selisih antara nilai nominal utang wesel dengan Nilai Sekarang (PV) diakui sebagai **Beban Bunga (Interest Expense)** sepanjang masa kredit menggunakan metode suku bunga efektif, BUKAN dikapitalisasi ke nilai aset!'
    },
    { kind: 'h3', text: 'C. Provisi Pembongkaran dan Restorasi Lokasi (Decommissioning Provision)' },
    {
      kind: 'p',
      text: 'Berdasarkan PSAK 57 dan PSAK 16, jika entitas memiliki kewajiban hukum atau konstruktif untuk membongkar aset pada akhir masa manfaat (misalnya anjungan lepas pantai migas atau pabrik semen), estimasi nilai sekarang dari biaya restorasi tersebut dikapitalisasi ke nilai aset saat perolehan.'
    },
    CASE_DECOMMISSIONING_RESTORE,
    { kind: 'h2', text: '4. Kapitalisasi Biaya Pinjaman Selama Masa Konstruksi (PSAK 26 / IAS 23)' },
    {
      kind: 'p',
      text: 'Bunga yang timbul selama pembangunan aset yang memenuhi syarat (*Qualifying Asset* - aset yang memerlukan waktu substansial untuk siap digunakan) wajib **dikapitalisasi ke dalam biaya aset**, bukan dibebankan seluruhnya di laba rugi.'
    },
    {
      kind: 'table',
      headers: ['Kriteria Periode Kapitalisasi', 'Syarat Permulaan', 'Syarat Penghentian'],
      rows: [
        ['Pengeluaran Konstruksi', 'Pengeluaran untuk aset telah mulai dikeluarkan kas/utangnya.', 'Konstruksi fisik telah selesai secara substansial.'],
        ['Aktivitas Pembangunan', 'Aktivitas yang diperlukan untuk menyiapkan aset sedang berjalan.', 'Jika proyek ditunda/dihentikan sementara untuk waktu lama, kapitalisasi ditangguhkan.'],
        ['Biaya Pinjaman', 'Biaya pinjaman (bunga) telah terjadi / timbul.', 'Aset siap beroperasi sesuai intensi manajemen.']
      ],
      caption: 'Tabel 1.3: Syarat masa kapitalisasi bunga menurut PSAK 26.'
    },
    CASE_BORROWING_COST,
    { kind: 'h2', text: '5. Model Pengukuran Lanjutan: Cost Model vs Revaluation Model' },
    {
      kind: 'table',
      headers: ['Dimensi Evaluasi', 'Model Biaya (Cost Model)', 'Model Revaluasi (Revaluation Model)'],
      rows: [
        ['Dasar Nilai Tercatat', 'Biaya Perolehan Historis dikurangi Akumulasi Depresiasi & Penurunan Nilai.', 'Nilai Wajar pada tanggal revaluasi dikurangi Akumulasi Depresiasi & Penurunan Nilai setelahnya.'],
        ['Perlakuan Kenaikan Nilai', 'Tidak diakui (prinsip kos historis dan kehati-hatian).', 'Diakui di Penghasilan Komprehensif Lain (OCI) dan diakumulasikan di Ekuitas (Surplus Revaluasi).'],
        ['Perlakuan Penurunan Nilai', 'Diakui sebagai Rugi Penurunan Nilai (Impairment Loss) di Laba Rugi.', 'Mengurangi Surplus Revaluasi OCI terlebih dahulu hingga habis, sisanya dibebankan ke Laba Rugi.'],
        ['Frekuensi Penilaian', 'Tidak memerlukan appraisal berkala.', 'Wajib dinilai berkala secara reguler agar nilai tercatat tidak berbeda material dari nilai wajar.']
      ],
      caption: 'Tabel 1.4: Perbandingan Model Biaya vs Model Revaluasi PSAK 16.'
    },
    { kind: 'h2', text: '6. Properti Investasi (PSAK 13 / IAS 40) vs Tanah Indonesia (ISAK 25)' },
    {
      kind: 'table',
      headers: ['Kriteria Pokok', 'Aset Tetap (PSAK 16)', 'Properti Investasi (PSAK 13)'],
      rows: [
        ['Definisi & Tujuan', 'Properti digunakan sendiri dalam operasi bisnis atau administrasi kantor.', 'Tanah atau bangunan yang dikuasai untuk menghasilkan sewa (rental) atau kenaikan modal (capital appreciation).'],
        ['Opsi Nilai Wajar (Fair Value)', 'Kenaikan nilai wajar dicatat ke OCI (Surplus Revaluasi Ekuitas).', 'Kenaikan nilai wajar dicatat langsung ke LABA RUGI (Profit or Loss)!'],
        ['Depresiasi pada Model Nilai Wajar', 'Tetap didepresiasi sepanjang sisa umur ekonomis.', 'TIDAK DIDEPRESIASI SAMA SEKALI jika menggunakan Fair Value Model!']
      ],
      caption: 'Tabel 1.5: Perbedaan krusial perlakuan akuntansi PSAK 16 vs PSAK 13.'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: `Akuntansi Hak Legal atas Tanah di Indonesia (ISAK 25 / PSAK 16)`,
      text: `Di Indonesia, kepemilikan tanah dibedakan berdasarkan status hak hukumnya:
  **Hak Milik (Freehold)**: Memiliki masa berlaku tidak terbatas, **TIDAK DIAMORTISASI/DIDEPRESIASI**.
  **Hak Guna Bangunan (HGB), Hak Guna Usaha (HGU), & Hak Pakai**: Memiliki batas waktu legal (misal 20-30 tahun). Biaya perolehan hak legal diamortisasi sepanjang masa manfaat izin hak atau disajikan sebagai beban tangguhan / hak atas tanah.`
    },
    { kind: 'h2', text: '7. Rangkuman & Kunci Penguasaan Ujian (Key Takeaways)' },
    {
      kind: 'ul',
      items: [
        '**Kapitalisasi Awal**: Hanya biaya yang langsung berkaitan membawa aset ke lokasi & kondisi siap operasi yang boleh dikapitalisasi.',
        '**Pembelian Lump-Sum**: Alokasikan proporsional berdasarkan nilai wajar relatif dari masing-masing komponen aset.',
        '**Gedung Lama yang Dibongkar**: Jika niatnya membangun pabrik baru, harga beli gedung lama + biaya bersih pembongkaran masuk ke akun **Tanah**.',
        '**Kapitalisasi Bunga PSAK 26**: Bunga yang dikapitalisasi adalah nilai **TERENDAH** antara Avoidable Interest atas WAAE dan Total Bunga Aktual.',
        `**Properti Investasi Fair Value**: Keuntungan/kerugian nilai wajar langsung masuk ke Laba Rugi tahun berjalan, bukan OCI.`
      ]
    }
  ]
};
