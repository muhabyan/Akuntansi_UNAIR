const fs = require('fs');

const raw = [
  // TM 1: Akuntansi Keuangan & Standar Akuntansi
  [1, 'Definisi', 'Akuntansi Keuangan', 'Proses pengidentifikasian, pengukuran, pencatatan, dan pelaporan informasi ekonomi entitas untuk pengambilan keputusan pengguna eksternal (investor & kreditor).'],
  [1, 'Standar', 'IFRS (International Financial Reporting Standards)', 'Standar akuntansi global yang diterbitkan oleh IASB (International Accounting Standards Board) berpusat di London.'],
  [1, 'Standar', 'PSAK (Pernyataan Standar Akuntansi Keuangan)', 'Standar akuntansi yang berlaku di Indonesia yang diterbitkan oleh DSAK IAI, sebagian besar telah konvergen dengan IFRS.'],
  [1, 'Perbandingan', 'IFRS vs US GAAP', 'IFRS cenderung principle-based (berbasis prinsip, lebih banyak penilaian profesional). US GAAP cenderung rules-based (berbasis aturan rinci).'],
  [1, 'Konsep', 'Objective of Financial Reporting', 'Menyediakan informasi keuangan tentang entitas pelapor yang berguna bagi investor, pemberi pinjaman, dan kreditor lain yang ada dan potensial.'],
  [1, 'Miskonsepsi', 'Manajemen Tidak Mengatur Standar', 'Manajemen perusahaan tidak menentukan standar akuntansi; standar ditetapkan oleh badan independen seperti IASB untuk mencegah bias.'],
  // TM 2: Kerangka Konseptual
  [2, 'Definisi', 'Kerangka Konseptual (Conceptual Framework)', 'Fondasi teoretis yang koheren yang menjadi dasar penyusunan standar akuntansi. Bukan merupakan standar akuntansi itu sendiri.'],
  [2, 'Konsep', 'Karakteristik Kualitatif Fundamental', 'Informasi harus memiliki dua karakteristik utama agar berguna: Relevansi (Relevance) dan Representasi Tepat (Faithful Representation).'],
  [2, 'Standar', 'Komponen Relevansi', 'Informasi relevan jika memiliki: Nilai Prediktif (Predictive Value), Nilai Konfirmatori (Confirmatory Value), dan Materialitas (Materiality).'],
  [2, 'Standar', 'Komponen Faithful Representation', 'Informasi harus: Lengkap (Complete), Netral (Neutral), dan Bebas dari Kesalahan (Free from error).'],
  [2, 'Konsep', 'Karakteristik Kualitatif Peningkat (Enhancing)', 'Keterbandingan (Comparability), Keterverifikasian (Verifiability), Ketepatwaktuan (Timeliness), dan Keterpahaman (Understandability).'],
  [2, 'Asumsi', 'Going Concern Assumption', 'Asumsi dasar bahwa perusahaan akan terus beroperasi dalam jangka waktu yang dapat diramalkan (tidak akan dilikuidasi dalam waktu dekat).'],
  // TM 3: Sistem Informasi Akuntansi (Jurnal, Buku Besar)
  [3, 'Definisi', 'Double-Entry Accounting', 'Sistem pencatatan di mana setiap transaksi dicatat setidaknya pada dua akun, dengan total debit selalu sama dengan total kredit.'],
  [3, 'Jurnal', 'Jurnal Penyesuaian (Adjusting Entries)', 'Jurnal yang dibuat pada akhir periode akuntansi untuk memutakhirkan saldo akun beban dan pendapatan agar sesuai dengan basis akrual.'],
  [3, 'Konsep', 'Accrual Basis vs Cash Basis', 'Accrual mengakui pendapatan saat diperoleh dan beban saat terjadi (meski kas belum pindah tangan). Cash basis hanya saat kas diterima/dibayar.'],
  [3, 'Jurnal', 'Prepaid Expenses (Beban Dibayar Dimuka)', 'Pembayaran tunai sebelum beban terjadi. Penyesuaiannya: Debit Beban (Expense), Kredit Aset (Prepaid).'],
  [3, 'Jurnal', 'Unearned Revenues (Pendapatan Diterima Dimuka)', 'Penerimaan tunai sebelum jasa/barang diserahkan. Penyesuaiannya: Debit Liabilitas (Unearned Rev), Kredit Pendapatan (Revenue).'],
  [3, 'Mekanisme', 'Closing Entries (Jurnal Penutup)', 'Proses menihilkan saldo akun nominal (Pendapatan, Beban, Dividen) ke akun Retained Earnings pada akhir periode.'],
  // TM 4: Laporan Laba Rugi & OCI
  [4, 'Definisi', 'Laporan Laba Rugi (Income Statement)', 'Laporan yang mengukur kinerja keuangan (profitabilitas) perusahaan selama periode waktu tertentu.'],
  [4, 'Konsep', 'Kualitas Laba (Earnings Management)', 'Tindakan mengatur waktu pengakuan pendapatan atau beban secara artifisial untuk mencapai target laba; mengurangi kualitas pelaporan keuangan.'],
  [4, 'Standar', 'Discontinued Operations (Operasi Dihentikan)', 'Dilaporkan terpisah (net of tax) di bawah laba dari operasi berjalan jika suatu komponen bisnis atau lini produk utama dihentikan atau dijual.'],
  [4, 'Definisi', 'Other Comprehensive Income (OCI)', 'Keuntungan dan kerugian yang belum direalisasi yang secara standar dilarang masuk ke Laba Bersih (Net Income), misalnya keuntungan revaluasi aset atau penjabaran valas.'],
  [4, 'Konsep', 'Comprehensive Income', 'Laba komprehensif = Laba Bersih (Net Income) + OCI (Other Comprehensive Income). Bisa disajikan dalam 1 laporan atau 2 laporan terpisah.'],
  [4, 'Rumus', 'Earnings Per Share (EPS)', 'Laba Bersih dikurangi Dividen Saham Preferen, dibagi dengan Rata-rata Tertimbang Jumlah Saham Biasa Beredar.'],
  // TM 5: Laporan Posisi Keuangan & Arus Kas
  [5, 'Definisi', 'Laporan Posisi Keuangan (Statement of Financial Position)', 'Sering disebut Neraca (Balance Sheet). Melaporkan Aset, Liabilitas, dan Ekuitas pada satu tanggal atau titik waktu tertentu.'],
  [5, 'Konsep', 'Likuiditas', 'Urutan penyajian aset di Neraca (terutama US GAAP) didasarkan pada seberapa cepat aset dapat dikonversi menjadi kas (yang paling likuid di atas).'],
  [5, 'Perbandingan', 'Current vs Non-Current Assets', 'Current: diharapkan direalisasi/dikonsumsi dalam 1 tahun atau 1 siklus operasi. Non-current: lebih dari 1 tahun (mis. Property, Plant, Equipment).'],
  [5, 'Definisi', 'Laporan Arus Kas (Statement of Cash Flows)', 'Laporan yang menyajikan penerimaan dan pengeluaran kas selama suatu periode, diklasifikasikan ke aktivitas Operasi, Investasi, dan Pendanaan.'],
  [5, 'Perbandingan', 'Aktivitas Investasi vs Pendanaan', 'Investasi: pembelian/penjualan aset jangka panjang. Pendanaan (Financing): transaksi dengan kreditor jangka panjang & pemegang saham (jual saham, bayar dividen).'],
  [5, 'Mekanisme', 'Metode Tidak Langsung (Indirect Method)', 'Menghitung arus kas operasi dimulai dari Laba Bersih, lalu disesuaikan dengan depresiasi dan perubahan modal kerja (piutang, persediaan, utang dagang).'],
  // TM 6: Kas & Piutang
  [6, 'Definisi', 'Cash Equivalents (Setara Kas)', 'Investasi jangka pendek sangat likuid (jatuh tempo <= 3 bulan sejak pembelian) yang mudah dicairkan dengan risiko perubahan nilai sangat kecil.'],
  [6, 'Konsep', 'Restricted Cash (Kas Terikat)', 'Kas yang dibatasi penggunaannya (misal untuk pelunasan obligasi masa depan) harus diklasifikasikan terpisah dari Kas biasa, mungkin sebagai aset tidak lancar.'],
  [6, 'Jurnal', 'Bad Debt Expense (Allowance Method)', 'Pencatatan estimasi piutang tak tertagih di akhir periode: Debit Bad Debt Expense, Kredit Allowance for Doubtful Accounts (AFDA).'],
  [6, 'Perbandingan', 'Direct Write-Off vs Allowance Method', 'Direct: mencatat beban saat piutang benar-benar macet (tidak sesuai prinsip matching). Allowance: mengestimasi kerugian di periode penjualan.'],
  [6, 'Mekanisme', 'Factoring (Anjak Piutang)', 'Penjualan piutang usaha kepada pihak ketiga (factor) untuk segera mendapatkan kas dengan dipotong fee.'],
  [6, 'Konsep', 'Notes Receivable (Wesel Tagih)', 'Janji tertulis formal untuk menerima sejumlah uang pada tanggal tertentu, umumnya dikenakan bunga.'],
  // TM 7: Penilaian Persediaan (Cost Basis)
  [7, 'Definisi', 'Inventory (Persediaan)', 'Barang yang ditahan untuk dijual dalam kegiatan operasi normal, atau bahan yang akan digunakan dalam proses produksi.'],
  [7, 'Perbandingan', 'FOB Shipping Point vs FOB Destination', 'Shipping Point: hak milik pindah saat barang diangkut kurir (pembeli menanggung ongkir). Destination: hak milik pindah saat barang tiba (penjual menanggung ongkir).'],
  [7, 'Konsep', 'Konsinyasi (Consigned Goods)', 'Penitipan barang. Barang konsinyasi tetap menjadi persediaan penitip (consignor), BUKAN persediaan pihak yang menerima titipan (consignee).'],
  [7, 'Mekanisme', 'Sistem Perpetual vs Periodik', 'Perpetual: mutasi persediaan dicatat real-time setiap transaksi. Periodik: mutasi COGS hanya dihitung di akhir periode melalui stock opname fisik.'],
  [7, 'Perbandingan', 'FIFO vs LIFO', 'FIFO (First-In, First-Out): barang masuk awal dijual awal. LIFO (Last-In, First-Out): barang masuk akhir dijual awal. LIFO dilarang dalam IFRS.'],
  [7, 'Konsep', 'Dampak FIFO saat Inflasi', 'Harga beli (cost) sedang naik. FIFO menghasilkan nilai persediaan akhir lebih tinggi (harga terkini) dan COGS lebih rendah, sehingga Laba lebih tinggi.'],
  // TM 8: Penilaian Persediaan Lanjutan (LCNRV)
  [8, 'Definisi', 'LCNRV (Lower of Cost or Net Realizable Value)', 'Standar IFRS yang mengharuskan persediaan dilaporkan pada nilai terendah antara Biaya Perolehan (Cost) atau Nilai Realisasi Neto (NRV).'],
  [8, 'Rumus', 'Net Realizable Value (NRV)', 'Estimasi Harga Jual Normal dikurangi dengan Estimasi Biaya Penyelesaian dan Estimasi Biaya Penjualan (disposal).'],
  [8, 'Jurnal', 'Penurunan Nilai Persediaan', 'Jika Cost > NRV, persediaan diturunkan. Debit Cost of Goods Sold / Loss on Inventory Write-Down, Kredit Inventory (atau Allowance).'],
  [8, 'Konsep', 'Metode Laba Kotor (Gross Profit Method)', 'Metode estimasi nilai persediaan akhir dengan menggunakan persentase laba kotor historis. Umumnya dipakai saat gudang terbakar/bencana.'],
  [8, 'Konsep', 'Retail Inventory Method', 'Metode estimasi persediaan untuk bisnis ritel (supermarket) yang melacak harga pokok (cost) dan harga eceran (retail) untuk mencari rasio Cost-to-Retail.'],
  [8, 'Miskonsepsi', 'Pemulihan Nilai (Reversal of Write-down)', 'Dalam IFRS, jika NRV persediaan naik lagi di periode berikutnya, kerugian penurunan nilai sebelumnya BOLEH dibalik (maksimal sebesar write-down aslinya).'],
  // TM 9: PPE - Perolehan & Pelepasan
  [9, 'Definisi', 'PPE (Property, Plant, and Equipment)', 'Aset berwujud yang ditahan untuk digunakan dalam produksi atau suplai barang/jasa, tidak untuk investasi/dijual kembali, umur manfaat > 1 tahun.'],
  [9, 'Konsep', 'Biaya Perolehan (Historical Cost)', 'Meliputi semua biaya wajar dan perlu untuk membawa aset ke lokasi dan kondisi siap digunakan (harga beli, ongkir, pajak, instalasi).'],
  [9, 'Jurnal', 'Biaya Pasca Perolehan (Subsequent Costs)', 'Capitalized (masuk aset) jika menambah umur manfaat, kapasitas, atau efisiensi (misal ganti mesin total). Expensed (masuk beban) jika sekadar pemeliharaan rutin.'],
  [9, 'Konsep', 'Kapitalisasi Bunga (Capitalization of Interest)', 'Bunga pinjaman selama konstruksi aset untuk digunakan sendiri boleh dikapitalisasi ke dalam nilai aset, tapi bunga setelah selesai konstruksi diakui sebagai beban.'],
  [9, 'Konsep', 'Pertukaran Aset Non-Moneter (Commercial Substance)', 'Jika pertukaran aset mengubah arus kas masa depan secara signifikan (commercial substance), maka keuntungan/kerugian diakui penuh berdasarkan nilai wajar aset.'],
  [9, 'Jurnal', 'Pelepasan Aset Tetap (Disposal)', 'Langkah: 1. Update depresiasi ke tanggal pelepasan. 2. Hapus Cost dan Akumulasi Depresiasi. 3. Catat Kas diterima. 4. Selisih = Gain/Loss.'],
  // TM 10: Penyusutan & Penurunan Nilai (Impairment)
  [10, 'Definisi', 'Penyusutan (Depreciation)', 'Alokasi sistematis jumlah yang dapat disusutkan (Depreciable Base) dari suatu aset tetap sepanjang umur manfaatnya. Bukan proses penilaian aset ke nilai wajar.'],
  [10, 'Rumus', 'Straight-Line Method', '(Biaya Perolehan - Nilai Sisa) / Umur Manfaat. Beban penyusutan selalu sama setiap tahun.'],
  [10, 'Rumus', 'Double-Declining Balance Method', 'Tarif depresiasi = 2 / Umur Manfaat. Beban = Tarif x Nilai Buku (Cost - Accumulated Depreciation) awal tahun. Tidak mengurangkan nilai sisa di awal.'],
  [10, 'Rumus', 'Units of Production Method', '(Biaya Perolehan - Nilai Sisa) / Total Estimasi Kapasitas Unit. Beban fluktuatif mengikuti jumlah produksi riil tahunan.'],
  [10, 'Definisi', 'Impairment (Penurunan Nilai)', 'Kondisi di mana Nilai Tercatat (Carrying Amount) dari aset melebihi Jumlah Terpulihkan (Recoverable Amount) sehingga harus diturunkan nilainya.'],
  [10, 'Rumus', 'Recoverable Amount', 'Nilai tertinggi antara Fair Value less costs to sell (Nilai wajar dikurangi biaya jual) DAN Value in Use (Nilai pakai, yakni present value arus kas masa depan).'],
  // TM 11: Deplesi & Revaluasi Aset Tetap
  [11, 'Definisi', 'Deplesi (Depletion)', 'Proses alokasi biaya perolehan sumber daya alam (barang tambang, minyak, hutan) sepanjang periode ekstraksi, biasanya menggunakan Units of Production.'],
  [11, 'Konsep', 'Biaya Sumber Daya Alam', 'Meliputi biaya eksplorasi, biaya penguasaan hak, biaya pengembangan berwujud maupun tak berwujud, dan biaya restorasi lingkungan (ARO).'],
  [11, 'Standar', 'Model Revaluasi IFRS', 'IFRS mengizinkan PPE dinilai menggunakan Fair Value. Jika nilai naik, masuk ke OCI (Revaluation Surplus). Jika turun di bawah cost awal, masuk Loss di Laba Rugi.'],
  [11, 'Jurnal', 'Revaluation Surplus', 'Kenaikan nilai wajar aset tidak diakui sebagai Laba Bersih, melainkan dikreditkan ke "Revaluation Surplus" (komponen OCI yang masuk ke akumulasi ekuitas).'],
  [11, 'Mekanisme', 'Pembalikan Revaluasi', 'Jika terjadi penurunan nilai wajar, kerugian pertama-tama dibebankan ke Revaluation Surplus (jika ada saldo sebelumnya) sebelum sisanya diakui sebagai Loss.'],
  [11, 'Konsep', 'Frekuensi Revaluasi', 'Aset yang fluktuasinya tinggi harus direvaluasi tahunan; aset stabil cukup direvaluasi setiap 3 atau 5 tahun.'],
  // TM 12: Aset Tak Berwujud (Intangibles)
  [12, 'Definisi', 'Intangible Assets', 'Aset non-moneter yang dapat diidentifikasi dan tidak memiliki wujud fisik (misal hak paten, hak cipta, merek dagang, lisensi).'],
  [12, 'Perbandingan', 'Amortisasi Umur Terbatas vs Tak Terbatas', 'Amortisasi (seperti depresiasi) hanya dilakukan untuk intangible berumur terbatas (finite life). Intangible umur tak terbatas (misal goodwill) TIDAK diamortisasi tapi wajib uji impairment tahunan.'],
  [12, 'Konsep', 'Goodwill', 'Selisih lebih antara harga beli suatu bisnis dengan nilai wajar aset bersih yang diakuisisi. Goodwill hanya bisa diakui dari M&A eksternal, bukan ciptaan internal.'],
  [12, 'Standar', 'Research and Development (R&D) Costs', 'Menurut IFRS, biaya Riset SELALU dibebankan (expense). Biaya Pengembangan (Development) BISA DIKAPITALISASI (jadi aset) jika memenuhi 6 kriteria kelayakan komersial.'],
  [12, 'Definisi', 'Hak Paten (Patents)', 'Hak eksklusif penemu untuk menggunakan, membuat, atau menjual penemuan selama 20 tahun. Biaya registrasi & bela hukum paten menang dikapitalisasi.'],
  [12, 'Definisi', 'Merek Dagang (Trademarks)', 'Kata, frasa, atau simbol yang membedakan perusahaan/produk. Memiliki umur tak terbatas selama terus didaftarkan ulang; tidak diamortisasi.'],
  // TM 13: Kewajiban Jangka Pendek
  [13, 'Definisi', 'Current Liabilities', 'Kewajiban yang diperkirakan akan diselesaikan dalam 12 bulan (atau 1 siklus operasi, mana yang lebih lama) dan akan dibayar menggunakan current assets.'],
  [13, 'Jurnal', 'Account Payable (Utang Usaha)', 'Utang jangka pendek yang timbul dari pembelian persediaan atau jasa. Dicatat saat hak kepemilikan barang beralih.'],
  [13, 'Konsep', 'Notes Payable (Wesel Bayar)', 'Kewajiban tertulis berbentuk surat wesel. Bisa diterbitkan berbunga (interest-bearing) atau tanpa bunga eksplisit (zero-interest-bearing).'],
  [13, 'Jurnal', 'Unearned Revenue (Pendapatan Diterima Dimuka)', 'Uang yang dibayar pelanggan namun jasanya belum diberikan. Masuk ke Liabilitas, lalu direklasifikasi jadi Pendapatan saat jasa tereksekusi.'],
  [13, 'Mekanisme', 'Pajak Pertambahan Nilai (VAT/PPN)', 'Pajak yang dipungut perusahaan atas penjualan akan dicatat sebagai Utang PPN (Sales Taxes Payable) ke negara, bukan sebagai pendapatan penjualan.'],
  [13, 'Konsep', 'Short-Term Obligation Expected to be Refinanced', 'Utang lancar bisa disajikan sebagai Utang Tidak Lancar JIKA perusahaan memiliki Niat dan Kemampuan/Perjanjian komitmen untuk membiayai kembali utang tersebut secara jangka panjang.'],
  // TM 14: Provisi & Kontinjensi
  [14, 'Definisi', 'Provisi (Provisions)', 'Liabilitas yang waktu atau jumlahnya belum pasti (estimasi). Diakui di Laporan Keuangan karena pengeluaran kas kemungkinannya "Probable".'],
  [14, 'Konsep', 'Kriteria Pengakuan Provisi', 'Ada kewajiban kini (karena peristiwa lalu), kemungkinan besar (probable) arus kas keluar, dan nilainya dapat diestimasi secara andal.'],
  [14, 'Contoh', 'Garansi (Warranty Provision)', 'Biaya perbaikan masa garansi harus diestimasi dan dicatat sebagai Provisi Garansi dan Beban Garansi pada periode penjualan produk (prinsip Matching).'],
  [14, 'Contoh', 'Restrukturisasi Organisasi', 'Biaya PHK dan penutupan pabrik dapat diakui sebagai provisi JIKA perusahaan telah memiliki rencana formal mendetail dan telah mengumumkannya (constructive obligation).'],
  [14, 'Definisi', 'Contingent Liabilities', 'Kemungkinan utang dari peristiwa masa lalu, yang keberadaannya baru akan dipastikan oleh peristiwa masa depan, ATAU utang yang jumlahnya tidak bisa diestimasi. Hanya di-disclose di Catatan Laporan Keuangan (CALK), tidak dijurnal.'],
  [14, 'Definisi', 'Contingent Assets', 'Kemungkinan aset dari peristiwa masa lalu (misal potensi menang tuntutan hukum). TIDAK BOLEH dijurnal sampai benar-benar direalisasi, untuk memegang prinsip konservatisme (prudence).']
];

const cards = [];
raw.forEach((r, i) => {
  const tm = r[0];
  const phase = tm <= 7 ? 'pra-uts' : 'pra-uas';
  cards.push(`  {
    id: "akk201-tm${tm < 10 ? '0'+tm : tm}-${i < 10 ? '0'+i : i}",
    phase: "${phase}",
    tm: ${tm},
    topic: "${r[2].replace(/"/g, '\\"')}",
    category: "${r[1]}",
    front: "${r[2].replace(/"/g, '\\"')}",
    back: "${r[3].replace(/"/g, '\\"')}"
  }`);
});

const content = `import type { AdvancedStudyCard } from '../../types';

export const AKK201_FC: AdvancedStudyCard[] = [
${cards.join(',\n')}
];
`;

fs.writeFileSync('c:/cek/src/data/flashcards/akk201.ts', content);
console.log('Generated AKK201 cards: ' + cards.length);
