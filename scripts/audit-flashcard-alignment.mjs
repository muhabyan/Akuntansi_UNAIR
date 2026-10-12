import fs from 'node:fs';
import { build } from 'esbuild';
import { writePostUtsCards } from './audit-card-writer.mjs';

const plan={
  AKK201:{file:'akk201',name:'AKK201_FC',tms:{
    8:{ref:'Kieso IFRS 5e, Ch.6 dan Appendix 6A, PDF 516-518,552-557',pairs:[
      ['Apa syarat cash equivalent?','Investasi jangka pendek sangat likuid, mudah dikonversi ke jumlah kas diketahui, risiko perubahan nilai tidak signifikan; umumnya jatuh tempo asli tiga bulan atau kurang.'],
      ['Bagaimana restricted cash dilaporkan?','Pisahkan pembatasan yang material dan klasifikasikan lancar/tidak lancar menurut tujuan serta periode pembatasannya.'],
      ['Apa yang tetap pada sistem imprest?','Jumlah dana kas kecil yang ditetapkan. Pengisian kembali biasanya mencatat beban dan mengkredit Cash, tanpa mengubah Petty Cash kecuali ukuran dana diubah.'],
      ['Cek beredar masuk sisi mana?','Kurangi saldo menurut bank; perusahaan sudah mencatat cek sehingga tidak membuat jurnal kedua.'],
      ['Biaya bank yang belum dicatat masuk sisi mana?','Kurangi saldo buku dan buat jurnal beban/akun yang sesuai serta kredit Cash.'],
      ['Apa kontrol akhir rekonsiliasi Nugget?','Saldo bank dan buku disesuaikan sama, 21.044 USD. Kesamaan total belum menggantikan pemeriksaan tiap bukti dan jurnal.'],
    ]},
    9:{ref:'Kieso IFRS 5e, Ch.6, PDF 528-545; Illustration 6.6 PDF 533',pairs:[
      ['Apa cash realizable value piutang?','Saldo piutang dikurangi allowance kerugian estimasian, dengan asumsi dan pengukuran sesuai jenis piutang.'],
      ['Target allowance sama dengan beban?','Tidak selalu. Beban penyesuaian = target saldo akhir dikurangi saldo kredit awal, atau ditambah saldo debit awal.'],
      ['Berapa target allowance Wilson?','26.610 euro, jumlah hasil saldo tiap kelompok umur dikali tarif estimasian. Dengan kredit awal 800 euro, beban 25.810 euro.'],
      ['Apa dampak write-off memakai allowance?','Debit allowance dan kredit accounts receivable. Pada saat write-off, piutang neto tidak berubah karena kedua akun turun dengan jumlah sama.'],
      ['Bagaimana notes diukur dengan bunga efektif?','Nilai kini kas kontraktual pada tingkat pasar yang sesuai; beban/pendapatan bunga mengikuti nilai tercatat awal periode dikali tingkat efektif.'],
      ['Apa yang diperiksa pada transfer piutang?','Hak kas, risiko, pengendalian dan syarat recourse. Istilah penjualan dalam kontrak tidak sendirian menentukan derecognition.'],
    ]},
    10:{ref:'Kieso IFRS 5e, Ch.7, Goods Included dan Costs Included, PDF 611-622',pairs:[
      ['Apa beda periodic dan perpetual?','Perpetual memperbarui saldo persediaan/HPP sepanjang transaksi; periodic menghitung HPP akhir periode dari barang tersedia dan persediaan akhir.'],
      ['Apakah semua barang di gudang milik perusahaan?','Tidak. Barang konsinyasi dapat tetap menjadi persediaan pengirim; periksa kepemilikan dan pengendalian.'],
      ['Bagaimana barang dalam perjalanan dinilai?','Baca syarat penyerahan dan perpindahan hak/kendali. Lokasi kendaraan pengiriman tidak menjadi satu-satunya dasar.'],
      ['Biaya apa masuk persediaan?','Biaya pembelian, konversi dan biaya lain untuk membawa persediaan ke lokasi/kondisi sekarang, dengan pengecualian menurut standar.'],
      ['Mengapa biaya jual umumnya bukan inventory cost?','Biaya itu terkait penjualan kepada pelanggan, bukan membawa barang ke lokasi/kondisi siap dijual.'],
      ['Apa identitas HPP periodik?','Persediaan awal + pembelian neto dan biaya pembelian relevan - persediaan akhir. Semua angka memakai basis biaya yang sama.'],
    ]},
    11:{ref:'Kieso IFRS 5e, Ch.7, Illustration 7.7-7.10 dan Inventory Errors, PDF 623-630,638-640',pairs:[
      ['Kapan specific identification sesuai?','Unit yang dapat ditelusuri dan tidak lazim saling dipertukarkan, atau proyek khusus; biaya aktual unit mengikuti penjualan/persediaan.'],
      ['Apa asumsi FIFO?','Biaya unit yang diperoleh lebih dahulu mengalir ke HPP lebih dahulu. Ini asumsi arus biaya, bukan keharusan arus fisik.'],
      ['Apa basis weighted average periodik?','Biaya barang tersedia / jumlah unit tersedia pada periode. Call-Mart: 43.900/10.000 = 4,39 euro per unit.'],
      ['Kapan moving average dihitung ulang?','Pada pembelian dalam sistem perpetual. Penjualan memakai rata-rata yang berlaku saat transaksi.'],
      ['Apa kontrol angka Call-Mart?','HPP + persediaan akhir = 43.900 euro. Weighted average periodik memberi HPP 17.560 dan persediaan 26.340 euro.'],
      ['Apa dampak persediaan akhir terlalu tinggi?','HPP periode berjalan terlalu rendah dan laba terlalu tinggi. Pada periode berikutnya, saldo awal yang terlalu tinggi memberi arah sebaliknya jika tidak dikoreksi.'],
    ]},
    12:{ref:'Kieso IFRS 5e, Ch.8, LCNRV dan Methods of Applying, PDF 689-697',pairs:[
      ['Apa NRV?','Harga jual estimasian dalam usaha normal dikurangi estimasi biaya penyelesaian dan biaya yang diperlukan untuk menjual.'],
      ['Apa nilai inventory pada LCNRV?','Paling rendah antara biaya dan NRV pada basis pengujian yang sesuai.'],
      ['Berapa NRV Mander?','1.000 - 50 - 200 = 750 euro. Dengan biaya 950 euro, penurunan nilai 200 euro.'],
      ['Bagaimana uji item-by-item berbeda dari total?','Tiap item memakai minimum biaya/NRV sebelum dijumlah. Kenaikan nilai satu item tidak otomatis mengimbangi penurunan item lain.'],
      ['Apa batas reversal write-down?','Terbatas pada penurunan nilai sebelumnya; nilai akhir tetap minimum biaya awal dan NRV yang diperbarui.'],
      ['Apa alasan LCNRV diperlukan?','Kerusakan, keusangan, harga turun atau biaya penyelesaian/jual naik dapat mengurangi manfaat ekonomi yang diperkirakan.'],
    ]},
    13:{ref:'Kieso IFRS 5e, Ch.8, Illustration 8.13-8.19, PDF 703-712',pairs:[
      ['Apa asumsi gross profit method?','Barang tersedia dan penjualan dapat ditelusuri, margin kotor representatif, dan barang tidak terjual dianggap persediaan setelah memperhitungkan kehilangan/kondisi kasus.'],
      ['Berapa inventory estimasian Cetus?','Barang tersedia 260.000 euro; penjualan 280.000 dan gross profit 30% atas penjualan memberi HPP 196.000 dan persediaan 64.000 euro.'],
      ['Markup 40% atas biaya sama dengan margin 40%?','Tidak. Margin atas penjualan = 40/140 = 28,57%, dibulatkan dua desimal.'],
      ['Apa input retail inventory method?','Barang tersedia pada basis cost dan retail, penjualan retail, serta markup/markdown sesuai metode yang ditetapkan.'],
      ['Bagaimana markdown pada conventional retail?','Tidak masuk denominator rasio cost-to-retail, tetapi mengurangi persediaan retail akhir.'],
      ['Apakah gross profit estimate menggantikan semua stock count?','Tidak. Ini estimasi untuk keadaan yang sesuai; periksa margin, kehilangan, perubahan bauran dan kebutuhan pengukuran akhir.'],
    ]},
    14:{ref:'Kieso IFRS 5e Ch.6-8; modul tutor UAS AKM1 TM8-14 PDF 2-13',pairs:[
      ['Apa kontrol rekonsiliasi bank?','Saldo kedua sisi setelah penyesuaian sama; jurnal dibuat untuk sisi buku yang memerlukan pencatatan.'],
      ['Apa kontrol allowance?','Bedakan target saldo akhir dari beban penyesuaian serta periksa saldo awal kredit/debit.'],
      ['Apa kontrol cost flow?','HPP + persediaan akhir sama dengan barang tersedia pada basis biaya.'],
      ['Apa kontrol NRV?','Harga jual dikurangi biaya penyelesaian dan jual; reversal tidak menaikkan nilai melampaui batas biaya.'],
      ['Apa kontrol persentase laba kotor?','Pastikan denominatornya biaya atau penjualan sebelum menghitung estimasi persediaan.'],
      ['Apakah prioritas tutor memastikan soal UAS?','Tidak. Ini perkiraan dari cakupan sumber; arsip UTS atau kuis tidak menjamin bentuk/bobot UAS.'],
    ]},
  }},
  AKM201:{file:'akm201',name:'AKM201_FC',tms:{
    8:{ref:'Carter 14e Ch.8, hal.8-1 sampai 8-13, PDF 231-243',pairs:[
      ['Apa kos bersama?','Biaya proses sebelum produk dapat diidentifikasi terpisah pada split-off; dialokasikan untuk laporan biaya dan inventory.'],
      ['Apa split-off point?','Titik produk bersama mulai dapat diidentifikasi; pisahkan biaya sebelum titik itu dan biaya proses lanjut.'],
      ['Apa dasar alokasi nilai jual?','Porsi nilai jual produk pada split-off dibanding nilai jual total produk yang relevan, sesuai asumsi harga dan volume.'],
      ['Apa dasar alokasi NRV?','Nilai jual akhir dikurangi biaya terpisah dipakai sebagai pendekatan nilai pada split-off bila harga split-off tidak tersedia.'],
      ['Apakah joint cost menentukan proses lanjut?','Keputusan pada split-off memakai tambahan pendapatan dan biaya yang dapat dihindari; joint cost yang telah terjadi tidak mengubah selisih.'],
      ['Apa hasil proses lanjut produk B buku?','75.000 - 60.000 - 10.000 = tambahan kontribusi 5.000 USD, dengan asumsi biaya tambahan relevan.'],
    ]},
    9:{ref:'Carter 14e Ch.9, hal.9-5 sampai 9-13, PDF 260-268',pairs:[
      ['Apa kontrol pembelian bahan?','Cocokkan permintaan/order, bukti penerimaan dan faktur; validasi jenis, jumlah, harga serta persetujuan.'],
      ['Apa beda bahan langsung dan supplies?','Bahan langsung dapat ditelusuri ke produk; supplies pabrik biasanya dibebankan melalui overhead sesuai penggunaan.'],
      ['Apa rumus EOQ?','Akar(2DS/H): D unit/tahun, S biaya per pesanan, H biaya simpan per unit/tahun. Asumsi dasar meliputi permintaan tetap dan tanpa stockout.'],
      ['Apa biaya relevan EOQ?','Biaya yang berubah karena ukuran/frekuensi pesanan; biaya gudang tetap tidak otomatis termasuk H.'],
      ['Apa reorder point?','Kebutuhan selama lead time ditambah safety stock pada model yang sesuai; jangan menyamakan titik pesan dengan jumlah pesan.'],
      ['Apa beda weighted dan moving average?','Periodik memakai rata-rata barang tersedia periode; perpetual menghitung ulang rata-rata setiap pembelian.'],
    ]},
    10:{ref:'Carter 14e Ch.11, hal.11-1 sampai 11-7, PDF 317-323',pairs:[
      ['Apa direct labor?','Upaya tenaga kerja yang dapat ditelusuri ke produk/pesanan secara ekonomis; tenaga pendukung pabrik umumnya overhead.'],
      ['Apa fungsi clock card dan time ticket?','Clock card mencatat kehadiran; time ticket mengalokasikan waktu ke pekerjaan/pesanan. Keduanya perlu direkonsiliasi.'],
      ['Bagaimana tarif dan kos per unit berbeda?','Tarif adalah upah per jam; kos unit bergantung produktivitas. Kenaikan tarif dapat bersamaan dengan penurunan kos unit.'],
      ['Apa angka insentif dari Carter?','6 USD/jam ÷ 5 unit/jam = 1,20 USD/unit; 6,60 ÷ 6 = 1,10 USD/unit.'],
      ['Apa batas wage incentive?','Standar harus masuk akal, mudah dipahami dan sesuai pekerjaan; jaga mutu, keselamatan dan koordinasi.'],
      ['Bagaimana payroll didistribusikan?','Pisahkan biaya langsung, tenaga tak langsung, idle time/premi sesuai sebab serta kebijakan kasus sebelum menjurnal.'],
    ]},
    11:{ref:'Carter 14e Ch.12, hal.12-1 sampai 12-6 PDF 362-367; tutor FOH PDF 11-12',pairs:[
      ['Apa predetermined overhead rate?','Anggaran overhead / anggaran dasar aktivitas yang sesuai, dihitung sebelum periode.'],
      ['Apa applied overhead?','Tarif rencana dikali aktivitas aktual; tarifnya tidak dihitung ulang hanya karena overhead aktual berbeda.'],
      ['Apa actual overhead?','Biaya overhead yang benar-benar terjadi, dicatat ke akun pengendali sesuai sistem.'],
      ['Kapan underapplied?','Aktual melebihi dibebankan. Contoh tutor: 438.000 - 425.250 = Rp12.750 kurang dibebankan.'],
      ['Kapan overapplied?','Dibebankan melebihi aktual; arah penyesuaian kebalikan underapplied.'],
      ['Bagaimana basis rate dipilih?','Pilih hubungan penyebab biaya dan kapasitas sesuai kasus: jam mesin, jam tenaga kerja atau driver lain, bukan denominator yang memberi tarif terkecil.'],
    ]},
    12:{ref:'Carter 14e Ch.13, PDF 389-430; tutor departementalisasi PDF 6-10',pairs:[
      ['Apa fungsi departementalisasi?','Mengumpulkan dan membebankan overhead per pusat kegiatan agar driver dan tanggung jawab lebih sesuai.'],
      ['Apa direct departmental cost?','Overhead yang dapat ditelusuri ke departemen tertentu; direct di sini tidak selalu berarti direct labor ke produk.'],
      ['Apa batas metode langsung?','Jasa antara departemen jasa diabaikan; biaya jasa dialokasikan ke departemen produksi.'],
      ['Apa batas metode bertahap?','Sebagian jasa antardepartemen diakui; departemen yang sudah ditutup tidak menerima alokasi balik. Urutan memengaruhi hasil.'],
      ['Apa metode resiprokal?','Mengakui hubungan timbal balik dengan persamaan simultan dan mengalokasikan biaya setelah menyelesaikan persamaan.'],
      ['Kapan tarif produksi dihitung?','Setelah biaya jasa dialokasikan, total overhead departemen produksi dibagi dasar aktivitas departemen itu.'],
    ]},
    13:{ref:'Carter 14e Ch.14, hal.14-1 sampai 14-5, PDF 431-435',pairs:[
      ['Apa logika ABC?','Aktivitas menimbulkan biaya; produk mengonsumsi aktivitas. Pool dan driver perlu hubungan sebab yang didukung.'],
      ['Apa activity cost pool?','Kelompok biaya aktivitas homogen yang dialokasikan dengan driver sesuai, bukan gabungan biaya tanpa alasan.'],
      ['Apa activity rate?','Biaya pool / jumlah atau kapasitas driver menurut model kasus; unit driver dinyatakan.'],
      ['Mengapa setup bukan driver unit?','Setup adalah aktivitas tingkat batch; dua produk dengan unit sama dapat memakai jumlah setup berbeda.'],
      ['Apa contoh alokasi setup buatan?','Rp12 juta / 30 setup = Rp400 ribu/setup. Lima setup dialokasikan Rp2 juta dan 25 setup Rp10 juta; total Rp12 juta.'],
      ['Apakah lebih banyak driver selalu lebih baik?','Tidak. Pertimbangkan hubungan sebab, mutu data, biaya pengukuran dan keputusan yang hendak didukung.'],
    ]},
    14:{ref:'Carter 14e Ch.8-14; Soal Kuis Pra-UAS Akuntansi Biaya 2026 PDF 1-8',pairs:[
      ['Apa kontrol alokasi joint cost?','Jumlah alokasi semua produk harus sama dengan kos bersama yang dialokasikan; keputusan proses lanjut memakai selisih kas.'],
      ['Apa kontrol unit bahan?','Rekonsiliasi unit tersedia, pemakaian, sisa dan kehilangan pada periode yang sama.'],
      ['Apa kontrol biaya tenaga kerja?','Cocokkan jam, tarif, output dan distribusi ke pekerjaan; jangan mencampur upah per jam dan biaya per unit.'],
      ['Apa kontrol overhead?','Rekonsiliasi anggaran, aktivitas aktual, dibebankan, aktual serta perlakuan selisih.'],
      ['Apa kontrol alokasi jasa dan ABC?','Tidak ada pool yang hilang atau dihitung dua kali; driver serta urutan/persamaan dinyatakan.'],
      ['Apa dasar prioritas pra-UAS?','Cakupan silabi, buku dan arsip kuis pra-UAS; ini perkiraan, dengan arsip UAS yang belum diverifikasi tetap ditandai.'],
    ]},
  }},
  AKA103:{file:'aka103',name:'AKA103_FC',tms:{
    8:{ref:'Sia (2008) hal.702-709 PDF 2-8; Juliyani (2016) hal.66-69 PDF 4-7',pairs:[
      ['Apa beda etika dan kebiasaan moral?','Etika menguji alasan tindakan; kebiasaan sosial atau agama perlu dijelaskan dasar dan penerapannya pada dilema.'],
      ['Apa kesatuan dalam Juliyani?','Konsistensi keyakinan dan tindakan bisnis; ilustrasi akuntan adalah menjaga kejujuran saat ada tekanan.'],
      ['Apa keseimbangan?','Menilai keadilan dan hak pihak terdampak, tidak memusatkan seluruh keputusan pada manfaat satu pihak.'],
      ['Apa kehendak bebas dan tanggung jawab?','Kebebasan memilih tindakan disertai kewajiban mempertanggungjawabkan pilihan serta dampaknya.'],
      ['Apa kebajikan/ihsan?','Mengejar manfaat dengan kejujuran dan perilaku baik; bukan alasan mengabaikan hak pihak lain.'],
      ['Apakah simbol agama membuktikan integritas?','Tidak. Perilaku, bukti, pengendalian dan akuntabilitas perlu diuji. Penerapan kasus buatan dibedakan dari fakta artikel.'],
    ]},
    9:{ref:'Byars dan Stanberry, Business Ethics Ch.8 bagian 8.1-8.5; RPS EKPA PDF 5',pairs:[
      ['Apa diversity?','Keberagaman latar, pengalaman dan kemampuan; kehadiran kelompok berbeda tidak otomatis berarti mereka dilibatkan.'],
      ['Apa inclusion?','Keterlibatan dan kesempatan berpartisipasi dalam kerja serta keputusan, dengan hambatan yang dievaluasi.'],
      ['Bagaimana akomodasi keyakinan dianalisis?','Hubungkan kebutuhan, tugas, keselamatan, hak dan alternatif yang proporsional; sumber hukum yurisdiksi diuji tersendiri.'],
      ['Apa batas klaim diversity menaikkan laba?','Korelasi dalam studi tidak membuktikan sebab dan tidak memastikan hasil setiap organisasi.'],
      ['Mengapa ketimpangan pendapatan isu etika?','Dasar kompensasi, kesempatan, dampak dan keadilan perlu alasan yang dapat dipertanggungjawabkan.'],
      ['Apa kaitan hak hewan dengan bisnis?','Uji penggunaan hewan, kesejahteraan, alternatif dan kewajiban hukum; bedakan pandangan moral dari ketentuan yurisdiksi.'],
    ]},
    10:{ref:'Ngoo, Tiong dan Pok (2015), Table 1-2 PDF 3-6; RPS EKPA PDF 5-6',pairs:[
      ['Apa yang dibandingkan studi Ngoo?','Persepsi prioritas kemampuan pemberi kerja dan lulusan di Malaysia, bukan pengukuran langsung seluruh kemampuan lulusan.'],
      ['Apa beda soft skill dan technical skill?','Keterampilan kerja/relasi seperti komunikasi dan pemecahan masalah dibanding keahlian teknis akuntansi; keduanya saling mendukung.'],
      ['Apa arti ranking prioritas?','Urutan kepentingan menurut responden dalam desain survei; ranking berbeda tidak sendirian menunjukkan sebab kesenjangan.'],
      ['Mengapa konteks Malaysia disebut?','Populasi, periode dan lingkungan membatasi penerapan hasil; pasar Indonesia memerlukan bukti lokal.'],
      ['Apa yang perlu dilaporkan pada survei mahasiswa?','Populasi, sampel, cara pemilihan, instrumen, skala dan keterbatasan sebelum menyimpulkan kebutuhan industri.'],
      ['Apa beda signifikansi dan arti praktis?','Signifikansi berkaitan dengan bukti statistik dalam model; arti praktis menilai besar serta kegunaan perbedaan.'],
    ]},
    11:{ref:'Felo (2011) hal.281-296 PDF 310-325 buku Brink; RPS EKPA PDF 6',pairs:[
      ['Apa peran board dalam kode etik?','Menetapkan dan mengawasi pelaksanaan dengan bukti; keberadaan dokumen saja tidak membuktikan budaya etis.'],
      ['Apa director independence?','Hubungan yang dapat memengaruhi objektivitas perlu dinilai bersama kompetensi dan kualitas informasi, bukan sekadar label.'],
      ['Apa CEO duality?','CEO sekaligus ketua dewan; uji pemusatan wewenang, pengawasan dan konteks. Bukti dampaknya tidak seragam.'],
      ['Mengapa executive compensation penting?','Insentif dapat memengaruhi horizon, pelaporan dan risiko keputusan; evaluasi ukuran serta kontrol.'],
      ['Apa hubungan pemilihan direktur dan akuntabilitas?','Proses pemilihan memengaruhi siapa yang mengawasi dan bagaimana pemilik menilai kinerja serta konflik kepentingan.'],
      ['Apa batas auditor eksternal?','Audit memberi assurance sesuai standar, dengan bukti dan independensi; tidak menjamin semua fraud ditemukan.'],
    ]},
    12:{ref:'Oberer dan Erkollar (2018) PDF 6-7; Othman dan Rahman (2014) Table 2-3 PDF 8',pairs:[
      ['Apa dua dimensi Leadership 4.0?','Perhatian pada inovasi/teknologi dan manusia. Bekerja di perusahaan teknologi tidak otomatis menjadikan seseorang digital leader.'],
      ['Apa perilaku berorientasi manusia?','Mendukung partisipasi, pembelajaran dan kerja tim yang dapat diuji melalui tindakan.'],
      ['Apa perilaku berorientasi inovasi?','Memberi ruang eksperimen dan kreativitas dengan tujuan serta tanggung jawab yang jelas.'],
      ['Apa akuntabilitas pemimpin etis?','Menjelaskan keputusan, tanggung jawab dan konflik; contoh diri perlu sesuai tindakan yang diminta dari tim.'],
      ['Mengapa transparansi penting?','Informasi tentang keputusan dan konflik memungkinkan pengawasan; keterbukaan tetap memperhatikan kerahasiaan yang sah.'],
      ['Apakah pemimpin efektif selalu etis?','Pencapaian target tidak membuktikan tindakan adil dan berintegritas; hasil serta cara mencapainya diuji.'],
    ]},
    13:{ref:'Siriwardane, Low dan Blietz (2015) Table 2-5, hal.338-340 PDF 7-9',pairs:[
      ['Apa beda task, skill dan attribute komunikasi?','Task adalah pekerjaan komunikasi, skill kemampuan melaksanakannya, attribute kualitas komunikasi yang dihasilkan.'],
      ['Apa tugas tertulis dalam studi?','Kertas kerja dan pesan elektronik termasuk tugas sering dilakukan responden; konteks studi Singapore disebutkan.'],
      ['Apa listening responsiveness?','Merespons pesan yang diterima dengan tepat, disertai perhatian dan pemahaman; mendengar suara saja belum cukup.'],
      ['Mengapa fakta dan inferensi dipisahkan?','Penerima harus dapat membedakan bukti yang diamati dari kesimpulan/dugaan dan menilai kekuatan alasan.'],
      ['Apa audience awareness?','Menyesuaikan tingkat istilah, tujuan dan penjelasan dengan kebutuhan penerima tanpa mengubah fakta.'],
      ['Apakah tugas yang sering selalu paling penting?','Frekuensi tugas dan kepentingan keterampilan adalah ukuran berbeda pada studi; jangan menyamakan ranking keduanya.'],
    ]},
    14:{ref:'RPS EKPA PDF 7, kuliah tamu; integrasi TM8-13',pairs:[
      ['Apa bentuk TM14 pada RPS?','Kuliah tamu perspektif praktisi; catatan kuliah tamu belum ditemukan sehingga ringkasan umum tidak diklaim sebagai isi dosen tamu.'],
      ['Apa langkah awal saat melihat transaksi tidak wajar?','Tetapkan fakta dan bukti, pihak terdampak serta prinsip yang relevan sebelum menyebutnya fraud.'],
      ['Bagaimana etika dan kepemimpinan terhubung?','Pemimpin memastikan keputusan, insentif dan proses eskalasi selaras dengan nilai yang dinyatakan.'],
      ['Bagaimana komunikasi melengkapi keputusan etis?','Sampaikan fakta, inferensi, dampak dan rekomendasi dengan jelas, kepada penerima yang berwenang.'],
      ['Mengapa dokumentasi penting?','Menyimpan bukti, alasan, pihak yang dilibatkan dan tindakan sehingga keputusan dapat ditinjau.'],
      ['Apakah kerangka integrasi menjamin skor UAS?','Tidak. Ini latihan perkiraan dari sumber TM8-13 dan RPS, dengan isi kuliah praktisi serta arsip ujian masih terbatas.'],
    ]},
  }},
};

plan.MAS122={file:'mas122',name:'MAS122_FC',tms:{
  8:{ref:'Lind, Statistical Techniques in Business and Economics 17e, Ch.12, hal.394-401 PDF 421-428',pairs:[
    ['Apa hipotesis ANOVA satu arah?','H0 menyatakan semua rata-rata populasi sama; H1 menyatakan setidaknya satu berbeda, dengan kelompok independen sesuai model.'],
    ['Apa statistik F ANOVA?','Mean square antar kelompok / mean square dalam kelompok; keduanya mengukur variabilitas pada basis yang sesuai.'],
    ['Kapan H0 ditolak?','Jika F melampaui nilai kritis pada alpha dan derajat bebas yang ditetapkan, atau p-value lebih kecil dari alpha. F besar saja belum cukup.'],
    ['Apa df ANOVA?','Antar kelompok k-1; dalam kelompok N-k, dengan k kelompok dan N total observasi.'],
    ['Apa asumsi ANOVA?','Independensi observasi, residual normal dalam kelompok dan varians kelompok homogen; periksa desain serta diagnostik.'],
    ['Apakah hasil signifikan menunjukkan kelompok mana berbeda?','Tidak langsung. Gunakan perbandingan lanjut yang sesuai dan kendalikan risiko pengujian berganda.'],
  ]},
  9:{ref:'Lind 17e Ch.13, bagian Correlation Analysis dan Simple Linear Regression',pairs:[
    ['Apa yang diukur korelasi r?','Arah dan kekuatan hubungan linear dua variabel; -1 sampai 1. Hubungan nonlinier dapat kuat meski r kecil.'],
    ['Apakah korelasi membuktikan sebab?','Tidak. Confounding, arah sebab dan desain pengamatan perlu dianalisis.'],
    ['Apa slope regresi sederhana?','Perubahan nilai rata-rata Y yang diprediksi per tambahan satu unit X pada model, bukan kepastian perubahan setiap individu.'],
    ['Apa intercept?','Prediksi Y pada X=0; interpretasi substantif memerlukan X=0 berada dalam konteks/domain yang relevan.'],
    ['Apa residual?','Nilai observasi Y dikurangi prediksi Y pada X yang sama. Unitnya sama dengan Y.'],
    ['Apa tujuan OLS?','Meminimumkan jumlah kuadrat residual pada spesifikasi yang dipilih; hasil perlu pemeriksaan asumsi.'],
  ]},
  10:{ref:'Lind 17e Ch.13-14, Regression Analysis dan Multiple Regression; RPP PDF 4',pairs:[
    ['Apa arti R squared?','Proporsi variasi Y terhadap rata-rata yang dijelaskan model pada sampel; bukan ukuran sebab atau jaminan forecast.'],
    ['Apa adjusted R squared?','Ukuran yang menyesuaikan jumlah prediktor dan ukuran sampel; dapat turun ketika prediktor ditambah.'],
    ['Apa uji F regresi?','Menguji hipotesis bersama koefisien slope yang ditentukan, dengan alpha dan df sesuai spesifikasi.'],
    ['Apa uji t koefisien?','Menguji satu koefisien bersyarat pada prediktor lain dalam model; jangan menyamakan dengan korelasi sederhana.'],
    ['Apa multikolinearitas?','Prediktor sangat berkaitan sehingga estimasi individual dapat tidak stabil atau standard error besar.'],
    ['Apa risiko ekstrapolasi?','Prediksi di luar rentang data dapat mengandalkan hubungan yang belum didukung; nyatakan domain dan ketidakpastian.'],
  ]},
  11:{ref:'Lind 17e Ch.18 hal.657-660 PDF 684-687; FPP3 bagian 9.1,9.5-9.8 https://otexts.com/fpp3/arima.html',pairs:[
    ['Apa komponen seri waktu?','Trend, pola musiman, siklus dan komponen tak beraturan membantu deskripsi; pemisahan mengikuti model yang dipilih.'],
    ['Apa moving average untuk forecast berikutnya?','Gunakan observasi sebelum periode ramalan. Rata-rata yang memasukkan nilai periode t adalah pemulusan pada t, bukan forecast t sebelum nilainya diketahui.'],
    ['Apa dampak ukuran jendela?','Jendela panjang lebih halus tetapi lambat merespons perubahan; bandingkan akurasi pada periode uji.'],
    ['Apa p,d,q pada ARIMA?','p lag autoregresif, d jumlah pembedaan, q lag galat moving average. MA galat berbeda dari rata-rata observasi untuk pemulusan.'],
    ['Apa pembedaan pertama?','y_t - y_(t-1). Ilustrasi 100,110,120,130 menjadi 10,10,10; seri sangat pendek ini tidak cukup untuk memilih model.'],
    ['Apa yang diperiksa sebelum menerima model?','Pola data, kestasioneran/pembedaan, residual, akurasi periode uji dan interval prediksi; fitting yang baik saja belum cukup.'],
  ]},
  12:{ref:'Lind 17e Ch.15-16, Nonparametric Methods; RPP Statistik PDF 4',pairs:[
    ['Apa metode nonparametrik?','Metode dengan asumsi distribusi yang berbeda/lebih terbatas dari model parametrik tertentu; tetap mempunyai syarat desain dan data.'],
    ['Apa goodness-of-fit chi-square?','Membandingkan frekuensi observasi dengan frekuensi ekspektasi model kategori yang ditetapkan.'],
    ['Apa uji independence chi-square?','Menguji hubungan dua variabel kategori dalam tabel kontingensi, dengan observasi independen.'],
    ['Apa expected frequency pada tabel kontingensi?','Total baris × total kolom / total sampel, pada hipotesis independensi.'],
    ['Apa statistik chi-square?','Jumlah (observasi-ekspektasi)^2/ekspektasi pada sel; jangan memakai proporsi tanpa mengubahnya ke frekuensi sesuai model.'],
    ['Apa yang diuji jika sel ekspektasi kecil?','Periksa kecukupan pendekatan chi-square; pertimbangkan penggabungan bermakna atau uji lain yang sesuai desain.'],
  ]},
  13:{ref:'RPP Statistik PDF 4-5, perangkat lunak dan proyek akhir; metode inferensi Lind Ch.12-16',pairs:[
    ['Apa langkah pertama analisis perangkat lunak?','Tentukan pertanyaan, populasi, variabel, satuan dan desain sebelum memilih menu analisis.'],
    ['Apa kontrol data sebelum analisis?','Periksa data hilang, duplikat, tipe variabel, kode kategori dan nilai ekstrem dengan jejak keputusan.'],
    ['Mengapa output software perlu diperiksa?','Pilihan model, kelompok, alpha dan metode dapat mengubah hasil; program tidak membuktikan desain sudah benar.'],
    ['Apa yang membuat analisis dapat direproduksi?','Simpan versi data, langkah transformasi, pengaturan/model dan output sehingga orang lain dapat mengulang.'],
    ['Bagaimana membaca p-value?','Nilai berkaitan dengan data setidaknya seekstrem observasi di bawah model H0; bukan probabilitas H0 benar.'],
    ['Apa yang dilaporkan selain signifikansi?','Besar efek, unit, ketidakpastian, asumsi, diagnostik dan relevansi keputusan.'],
  ]},
  14:{ref:'RPP Statistik PDF 5, presentasi proyek akhir; integrasi metode TM8-13',pairs:[
    ['Apa urutan presentasi proyek?','Pertanyaan, data/desain, metode/asumsi, hasil, ketidakpastian dan implikasi keputusan.'],
    ['Apa isi grafik hasil?','Sumbu, satuan, kelompok, periode dan sumber; pilih bentuk yang sesuai variabel.'],
    ['Apa beda hasil dan kesimpulan?','Hasil menyatakan keluaran analisis; kesimpulan mengaitkan hasil ke pertanyaan dengan batas bukti.'],
    ['Bagaimana menjelaskan hasil tidak signifikan?','Gagal menolak H0 pada model/alpha yang dipakai; tidak membuktikan efek nol atau H0 pasti benar.'],
    ['Apa batas generalisasi?','Populasi, cara sampling, periode dan desain menentukan siapa/kondisi mana yang didukung data.'],
    ['Apakah prioritas materi sama dengan arsip UAS?','Tidak. Presentasi mengikuti RPP dan bukti proyek; arsip ujian yang tidak tersedia tidak diperlakukan sebagai kepastian.'],
  ]},
}};

for(const [code,course] of Object.entries(plan)){
  const file=`src/data/flashcards/${course.file}.ts`;
  const out=await build({entryPoints:[file],bundle:true,write:false,format:'esm',platform:'node',logLevel:'silent'});
  const old=(await import('data:text/javascript;base64,'+Buffer.from(out.outputFiles[0].text).toString('base64')))[course.name];
  const index={};
  const cards=old.map(card=>{
    if(card.phase!=='pra-uas'||!course.tms[card.tm])return card;
    const item=course.tms[card.tm];const n=index[card.tm]??0;index[card.tm]=n+1;
    const [front,back]=item.pairs[n];
    return {...card,category:'Konsep',topic:front,front,back:`${back} Rujukan: ${item.ref}`};
  });
  if(Object.values(index).some(n=>n!==6))throw new Error(`${code}: unexpected per-meeting count`);
  writePostUtsCards(file,cards);
  for(const [tm,item] of Object.entries(course.tms)){
    const dir=`content-pipeline/${code}/TM${String(tm).padStart(2,'0')}/audit-20261012`;
    fs.mkdirSync(dir,{recursive:true});
    fs.writeFileSync(`${dir}/08_flashcard_alignment.json`,JSON.stringify(cards.filter(c=>c.phase==='pra-uas'&&c.tm===+tm),null,2)+'\n');
    const studentPath=`${dir}/05_student_learning_version.md`;
    const student=fs.existsSync(studentPath)?fs.readFileSync(studentPath,'utf8').split('\n## Flashcard yang dipetakan ulang')[0]:`# ${code} TM${tm}\n`;
    fs.writeFileSync(studentPath,student+`\n## Flashcard yang dipetakan ulang\n\n${item.pairs.map(([front,back])=>`${front}\n\n${back} Rujukan: ${item.ref}`).join('\n\n')}\n`);
  }
  console.log(`${code}: 42 post-UTS cards realigned, IDs and ${cards.length} total preserved.`);
}
