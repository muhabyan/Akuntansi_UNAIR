import type { Reading } from '../../../types';
export const TM13_READING: Reading = {
  "tm": 13,
  "title": "Manajemen Keuangan Multinasional",
  "ref": "Brigham & Houston, FFM 16e (2022), Bab 18, hal. cetak 625-661 (PDF 667-703)",
  "intro": "Menggunakan kontrak, buku lokal dan sumber yang disebutkan untuk menyelesaikan keputusan manajemen keuangan multinasional secara bertahap.",
  "objectives": [
    "Menjelaskan konsep dan asumsi manajemen keuangan multinasional.",
    "Menghitung hasil dengan satuan, tenor dan pembulatan yang tepat.",
    "Menilai keputusan serta batas model dan rujukannya."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Pintu masuk: cakupan dan sumber"
    },
    {
      "kind": "p",
      "text": "TM13 mengikuti Kontrak MK2026 Sheet 1 baris 30. Fokus: Manajemen Keuangan Multinasional. Buku kontrak edisi 15 dipetakan ke buku lokal edisi 16 berdasarkan topik, dengan nomor halaman cetak dan PDF yang dapat ditelusuri. Angka latihan adalah skenario hipotetis, bukan harga pasar atau ketentuan pajak terbaru. Rujukan utama: Brigham & Houston, FFM16e (2022), Bab 18, hal. cetak 625-661 (PDF 667-703)."
    },
    {
      "kind": "p",
      "text": "Paket TM ini mempunyai 8 kuis, enam flashcard, dan dua kasus bank soal. Dugaan prioritas ujian berasal dari kontrak dan contoh pembahasan lokal; tidak ada arsip ujian untuk memastikan bentuk soal. Kerjakan dengan rumus, langkah antara, satuan, periode bunga, pembulatan akhir dan alasan keputusan."
    },
    {
      "kind": "h2",
      "text": "1. Lokasi lintas negara menambah dimensi keputusan"
    },
    {
      "kind": "p",
      "text": "Multinational financial management menangani perusahaan dengan operasi lintas negara. Di samping kas dan risiko bisnis, keputusan mencakup mata uang, perbedaan praktik hukum/pajak, hambatan pemulangan dana, risiko negara dan perubahan hubungan perdagangan. Kontrak kuliah menulis Bab 19 untuk topik ini pada edisi 15; buku lokal edisi 16 memindahkannya ke Bab 18. Bab 19 buku lokal membahas derivatif, sehingga rujukan di sini memakai nama topik dan halaman buku yang benar. [hal. cetak 625-635; PDF667-677; Kontrak MK2026 Sheet 1 B30:E30]"
    },
    {
      "kind": "h2",
      "text": "2. Arah kurs dan kurs silang"
    },
    {
      "kind": "p",
      "text": "Kuotasi IDR p er USD menyebut rupiah yang diperlukan untuk USD1. Untuk utang USD, kalikan jumlah dolar dengan IDR/USD; untuk menukar rupiah ke USD, bagi rupiah dengan kurs yang sama. Kurs silang dibuat dengan menghapus satuan mata uang perantara: (IDR/USD)/(JPY/USD)=IDR/JPY. Pada praktiknya harga beli dan jual dapat berbeda, tetapi soal harus menyatakan apakah spread dan biaya diabaikan. [hal. cetak 636-638; PDF678-680]"
    },
    {
      "kind": "formula",
      "text": "S_{IDR/JPY}=\\frac{S_{IDR/USD}}{S_{JPY/USD}}",
      "note": "16.000 IDR/USD dibagi160 JPY/USD menghasilkan100 IDR/JPY. Rujukan: hal. cetak636-638, PDF678-680."
    },
    {
      "kind": "h2",
      "text": "3. Spot, forward, dan paritas suku bunga"
    },
    {
      "kind": "p",
      "text": "Spot adalah pertukaran dengan penyelesaian sesuai mekanisme transaksi spot; forward adalah kontrak untuk pertukaran pada tanggal mendatang dengan kurs yang disepakati kini. Covered interest parity menghubungkan bunga dan forward ketika investasi lintas mata uang dilindungi dari perubahan kurs. Bunga wajib sesuai tenor. Tarif tahunan sederhana 6% dan 4% menjadi 3% dan 2% untuk enam bulan, bukan tetap 6% dan 4%. [hal. cetak 638-642; PDF680-684]"
    },
    {
      "kind": "formula",
      "text": "F_{h/f}=S_{h/f}\\frac{1+r_h}{1+r_f}",
      "note": "Kuotasi mata uang domestik per mata uang asing; rh dan rf adalah bunga setenor. Spot16.000 dan bunga6%/4% setahun memberiF16.307,69 IDR/USD. Rujukan: hal. cetak640-642, PDF682-684."
    },
    {
      "kind": "p",
      "text": "Paritas merupakan kondisi model tanpa friksi; akses bunga, spread, risiko lawan transaksi dan batas modal dapat menjelaskan perbedaan dengan penawaran bank. Forward paritas tidak sama dengan ramalan spot yang pasti terjadi. Arbitrase tertutup dalam model perlu transaksi sebanding dan fasilitas dana yang benar-benar tersedia. [hal. cetak 640-642; PDF682-684]"
    },
    {
      "kind": "h2",
      "text": "4. PPP dan inflasi sebagai model proyeksi"
    },
    {
      "kind": "formula",
      "text": "E(S_1)=S_0\\frac{1+\\pi_h}{1+\\pi_f}",
      "note": "PPP relatif dengan kuotasi domestik per asing. Inflasi8%/3% dan spot16.000 memberi16.776,70. Ini proyeksi model, bukan kurs kontrak terjamin. Rujukan: hal. cetak642-646, PDF684-688."
    },
    {
      "kind": "p",
      "text": "Purchasing power parity, paritas daya beli, memakai perbedaan inflasi dan harga barang. Hambatan perdagangan, biaya distribusi, perbedaan produk dan perubahan harga dapat membuat hubungan tidak tepat pada jangka pendek. Hubungan bunga nominal dan inflasi juga perlu mempertimbangkan bunga riil serta premi risiko. Gunakan asumsi inflasi yang dinyatakan, tanpa menyajikan angka latihan sebagai inflasi atau kurs aktual. [hal. cetak 642-647; PDF684-689]"
    },
    {
      "kind": "h2",
      "text": "5. Lindung nilai dan penilaian proyek"
    },
    {
      "kind": "p",
      "text": "Piutang valas membuat eksportir menjual valas forward; utang valas membuat importir membeli valas forward. Hedge mengunci kas sekaligus melepaskan keuntungan dari pergerakan spot yang menguntungkan. Transaction exposure adalah dampak transaksi valas tertentu, translation exposure berkaitan pelaporan/konsolidasi, dan economic exposure adalah dampak perubahan kurs pada kemampuan menghasilkan kas bisnis. Tidak semua risiko dapat dihilangkan oleh satu kontrak. [hal. cetak 638-655; PDF680-697]"
    },
    {
      "kind": "p",
      "text": "Dalam penilaian rupiah, konversikan kas valas ke IDR pada kurs asumsi tanggal kas lalu diskontokan dengan biaya modal IDR yang sesuai risiko. Alternatif penilaian dalam mata uang asing memerlukan diskonto asing yang konsisten. Proyek USD10.000 dengan kursakhir 17.000 dan diskonto IDR10% mempunyaiPV170 juta/1,10=154,545455 juta. Dengan investasi 150 juta, NPV4,545455 juta; kurs 15.000 justru memberi NPV minus 13,636364 juta. Uji pembatasan kas, risiko negara dan skenario kurs sebelum menyimpulkan kelayakan. [hal. cetak 649-655; PDF691-697]"
    },
    {
      "kind": "h2",
      "text": "Latihan kasus 1: Mata uang, tenor, dan biaya lindung nilai"
    },
    {
      "kind": "ul",
      "items": [
        "Utang importir USD100.000, jatuh tempo enam bulan. Spot IDR16.000/USD.",
        "Bunga tahunan sederhana IDR6% dan USD4%; penawaran forward enam bulan IDR16.300/USD.",
        "Skenario spot jatuh tempo IDR17.000 atau IDR15.500 per USD; tanpa biaya dan risiko gagal bayar kontrak."
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "Langkah dan keputusan",
      "prompt": "Hitung forward paritas enam bulan dan selisih terhadap penawaran. Hitung pembayaran dengan forward dan tanpa hedge pada dua skenario. Jelaskan arah hedge serta perbedaan paritas, kurs kontrak, dan proyeksi spot. Nyatakan asumsi, satuan, tenor, pembulatan dan keterbatasan model.",
      "blocks": [
        {
          "kind": "p",
          "text": "Langkah 1. Bunga enam bulan domestik 3%, asing 2%. F paritas = 16.000 × 1,03/1,02 = 16.156,862745 IDR/USD. Penawaran bank lebih tinggi 143,137255 IDR/USD; friksi dan akses bunga perlu diperiksa sebelum menyebut peluang arbitrase."
        },
        {
          "kind": "p",
          "text": "Langkah 2. Kontrak mengunci pembayaran Rp 1.630 juta. Spot 17.000 membuat pembayaran tanpa hedge Rp 1.700 juta, sehingga forward menghemat Rp 70 juta. Spot 15.500 membuat pembayaran tanpa hedge Rp 1.550 juta; forward menimbulkan biaya peluang Rp 80 juta."
        },
        {
          "kind": "p",
          "text": "Langkah 3. Importir membeli USD forward karena mempunyai kewajiban USD. Hedge mengurangi ketidakpastian kas, tanpa menjamin selalu lebih murah. Bunga wajib setenor; forward paritas adalah hubungan model tanpa friksi dan berbeda dari ramalan kurs spot yang pasti terjadi."
        },
        {
          "kind": "p",
          "text": "Pembulatan: simpan presisi langkah antara, kemudian bulatkan uang dan persentase dua desimal; beta empat desimal dan skor tiga desimal. Semua nilai mengikuti unit serta tenor data soal."
        },
        {
          "kind": "p",
          "text": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 636-646 (PDF 678-688)."
        }
      ]
    },
    {
      "kind": "h2",
      "text": "Latihan kasus 2: Kurs silang dan penilaian proyek luar negeri"
    },
    {
      "kind": "ul",
      "items": [
        "Spot IDR16.000/USD dan JPY160/USD; tanpa spread.",
        "Investasi sekarang Rp 150 juta; arus kas akhir tahun pertama USD10.000, kemudian proyek berakhir.",
        "Proyeksi kurs IDR17.000/USD atau skenario IDR15.000/USD; diskonto IDR10% sesuai risiko."
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "Langkah dan keputusan",
      "prompt": "Hitung kurs silang IDR/JPY dan nilai JPY100.000 dalam rupiah. Hitung NPV IDR dalam kedua skenario kurs. Jelaskan konsistensi mata uang, diskonto, dan risiko kas lintas negara. Nyatakan asumsi, satuan, tenor, pembulatan dan keterbatasan model.",
      "blocks": [
        {
          "kind": "p",
          "text": "Langkah 1. Kurs silang = 16.000/160 = IDR100/JPY. JPY100.000 setara Rp 10 juta; satuan USD saling menghilangkan."
        },
        {
          "kind": "p",
          "text": "Langkah 2. Kurs 17.000: kas akhir Rp 170 juta; PV = 170/1,10 = Rp 154,545455 juta; NPV = Rp 4,545455 juta. Kurs 15.000: kas Rp 150 juta; PV = Rp 136,363636 juta; NPV = minus Rp 13,636364 juta. Kelayakan berubah karena kurs yang diasumsikan."
        },
        {
          "kind": "p",
          "text": "Langkah 3. Kas sudah dikonversi ke rupiah sebelum memakai diskonto rupiah. Alternatif valuasi USD memerlukan tingkat USD yang sepadan dengan risiko. Periksa pembatasan pemulangan laba, pajak sesuai yurisdiksi, risiko negara, dan sensitivitas kurs. Kasus ini sengaja tidak menetapkan aturan pajak atau repatriasi tertentu; angka bukan kurs pasar tahun berjalan."
        },
        {
          "kind": "p",
          "text": "Pembulatan: simpan presisi langkah antara, kemudian bulatkan uang dan persentase dua desimal; beta empat desimal dan skor tiga desimal. Semua nilai mengikuti unit serta tenor data soal."
        },
        {
          "kind": "p",
          "text": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 636-638 (PDF 678-680). Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 649-655 (PDF 691-697)."
        }
      ]
    },
    {
      "kind": "h2",
      "text": "Cek pemahaman sebelum berpindah TM"
    },
    {
      "kind": "ul",
      "items": [
        "Arah kuotasi kurs: IDR16.000/USD berarti Rp 16.000 untuk USD1. Utang USD100.000 membutuhkan Rp 1,6 miliar. Selalu tulis unit pembilang dan penyebut sebelum mengalikan atau membagi. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 625-661 (PDF 667-703).",
        "Kurs silang: IDR/USD dibagi JPY/USD menghasilkan IDR/JPY. 16.000/160 = Rp 100 per JPY, dengan asumsi tanpa spread/biaya. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 625-661 (PDF 667-703).",
        "Covered interest parity: F = S(1+rh)/(1+rf) untuk kuotasi mata uang domestik per asing. Spot 16.000, bunga 6% dan 4% setahun memberi 16.307,69 IDR/USD. Tenor bunga harus cocok. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 625-661 (PDF 667-703).",
        "PPP relatif: E(S1) = S0(1+inflasi domestik)/(1+inflasi asing). Ini proyeksi model daya beli, berbeda dari kontrak forward yang dapat dikunci; biaya transaksi dan hambatan perdagangan dapat mengubah hasil. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 625-661 (PDF 667-703).",
        "Arah hedge eksportir dan importir: Piutang valas: jual valas forward. Utang valas: beli valas forward. Hedge mengurangi ketidakpastian kas tetapi dapat mengorbankan keuntungan bila spot kemudian bergerak menguntungkan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 625-661 (PDF 667-703).",
        "Mata uang arus kas dan diskonto: Konversikan kas USD ke proyeksi IDR sebelum memakai tingkat diskonto IDR. Alternatif penilaian USD memerlukan tingkat USD yang konsisten; jangan mencampur mata uang dan risiko. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 625-661 (PDF 667-703)."
      ]
    }
  ]
};
