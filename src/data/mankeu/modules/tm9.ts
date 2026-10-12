import type { Reading } from '../../../types';
export const TM9_READING: Reading = {
  "tm": 9,
  "title": "Struktur Modal dan Leverage",
  "ref": "Brigham & Houston, FFM 16e (2022), Bab 14, hal. cetak 478-517 (PDF 520-559)",
  "intro": "Menggunakan kontrak, buku lokal dan sumber yang disebutkan untuk menyelesaikan keputusan struktur modal dan leverage secara bertahap.",
  "objectives": [
    "Menjelaskan konsep dan asumsi struktur modal dan leverage.",
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
      "text": "TM9 mengikuti Kontrak MK2026 Sheet 1 baris 26. Fokus: Struktur Modal dan Leverage. Buku kontrak edisi 15 dipetakan ke buku lokal edisi 16 berdasarkan topik, dengan nomor halaman cetak dan PDF yang dapat ditelusuri. Angka latihan adalah skenario hipotetis, bukan harga pasar atau ketentuan pajak terbaru. Rujukan utama: Brigham & Houston, FFM16e (2022), Bab 14, hal. cetak 478-517 (PDF 520-559)."
    },
    {
      "kind": "p",
      "text": "Paket TM ini mempunyai 12 kuis, enam flashcard, dan dua kasus bank soal. Dugaan prioritas ujian berasal dari kontrak dan contoh pembahasan lokal; tidak ada arsip ujian untuk memastikan bentuk soal. Kerjakan dengan rumus, langkah antara, satuan, periode bunga, pembulatan akhir dan alasan keputusan."
    },
    {
      "kind": "h2",
      "text": "1. Pisahkan risiko operasi dari risiko pendanaan"
    },
    {
      "kind": "p",
      "text": "Capital structure adalah bauran utang dan ekuitas yang mendanai perusahaan. Risiko bisnis berasal dari ketidakpastian penjualan, harga input, teknologi, persaingan, dan biaya tetap operasi. Risiko itu tetap ada pada perusahaan tanpa utang. Financial risk adalah tambahan risiko bagi pemegang saham karena bunga dan pembayaran utang harus dipenuhi sebelum sisa kas tersedia bagi ekuitas. Dua perusahaan dengan operasi sama dapat mempunyai risiko bisnis sama dan risiko ekuitas berbeda. [hal. cetak 483-494; PDF 525-536]"
    },
    {
      "kind": "p",
      "text": "Operating leverage, pengungkit operasi, membuat EBIT atau laba sebelum bunga dan pajak peka terhadap penjualan. Rumus DOL menggunakan margin kontribusi dibagi EBIT pada tingkat penjualan tertentu. Jika EBIT mendekati nol, DOL dapat sangat besar; jika EBIT nol, rasionya tidak terdefinisi. Perubahan DOL tidak boleh ditafsirkan sebagai probabilitas bangkrut. Financial leverage, pengungkit keuangan, menambahkan kepekaan laba bersih melalui bunga. ROIC memakai laba operasi setelah pajak dan modal operasi, sedangkan ROE memakai laba bersih dan ekuitas. [hal. cetak 484-493; PDF 526-535]"
    },
    {
      "kind": "formula",
      "text": "\\operatorname{DOL}=\\frac{S-VC}{EBIT}\\qquad ROIC=\\frac{EBIT(1-T)}{IC}\\qquad ROE=\\frac{(EBIT-I)(1-T)}{E}",
      "note": "S penjualan; VC biaya variabel; IC modal operasi; I bunga; E ekuitas. DOL tanpa satuan, ROIC dan ROE dalam persen per periode. Rujukan: hal. cetak 484-493 (PDF 526-535); W9 Case Study, PDF 9-18."
    },
    {
      "kind": "h2",
      "text": "2. Cari nilai maksimum, lalu periksa EPS"
    },
    {
      "kind": "p",
      "text": "Struktur optimal mendukung nilai perusahaan atau harga saham maksimum. Dengan arus kas operasi tetap, bauran itu juga menghasilkan WACC minimum. EPS, laba per saham, dapat meningkat ketika utang dipakai membeli kembali saham, tetapi bunga dan risiko ekuitas naik. Jangan memilih utang tertinggi hanya karena EPS tertinggi. Tabel alternatif perlu menyajikan bobot pasar, bunga utang, biaya ekuitas, WACC, kapasitas pembayaran dan nilai. [hal. cetak 494-498; PDF 536-540]"
    },
    {
      "kind": "formula",
      "text": "\\beta_L=\\beta_U\\left[1+(1-T)\\frac{D}{E}\\right]\\qquad r_s=r_{RF}+\\beta_L RP_M",
      "note": "Hamada memakai D/E. Beta tanpa satuan; rRF dan premi risiko pasar dalam periode yang sama. Rujukan: hal. cetak 495-497 (PDF 537-539)."
    },
    {
      "kind": "formula",
      "text": "WACC=w_Dr_D(1-T)+w_Er_E\\qquad w_D+w_E=1",
      "note": "Gunakan bobot nilai pasar target. Perisai pajak hanya pada biaya utang jika manfaat pajak dapat digunakan. Rujukan: hal. cetak 494-498 (PDF 536-540)."
    },
    {
      "kind": "table",
      "headers": [
        "Kesalahan",
        "Perbaikan"
      ],
      "rows": [
        [
          "Memasukkan bobot utang 40% langsung ke Hamada",
          "Ubah menjadi D/E = 40/60 = 0,6667."
        ],
        [
          "Mengalikan seluruh WACC dengan (1-T)",
          "Pajak model diterapkan pada bunga utang, bukan biaya ekuitas."
        ],
        [
          "Menganggap EPS naik berarti harga pasti naik",
          "Nilai juga mencerminkan risiko dan kas masa depan."
        ],
        [
          "Menganggap ROIC berubah hanya karena buyback",
          "Pisahkan operasi dari perubahan pendanaan."
        ]
      ],
      "caption": "Rujukan: hal. cetak 480-498, PDF 522-540."
    },
    {
      "kind": "h2",
      "text": "3. MM, biaya distress, informasi dan fleksibilitas"
    },
    {
      "kind": "p",
      "text": "MM tanpa pajak memakai pasar ideal: cara membagi klaim pendanaan tidak mengubah nilai operasi. Dalam model sederhana dengan pajak perusahaan dan utang permanen, nilai sekarang perisai bunga dapat ditulis TD. Hasil ini memerlukan bunga yang dapat mengurangi pajak dan manfaat yang benar-benar dapat digunakan. Trade-off memasukkan biaya kesulitan keuangan: biaya legal, gangguan pemasok, hilangnya pelanggan dan keputusan investasi yang terganggu. Kesimpulan model pajak sederhana tidak menjadi anjuran utang 100% pada perusahaan nyata. [hal. cetak 500-505; PDF 542-547]"
    },
    {
      "kind": "p",
      "text": "Signaling menjelaskan bagaimana emisi saham atau pilihan utang dapat ditafsirkan pasar ketika informasi manajemen dan investor berbeda. Pecking order adalah kecenderungan memakai dana internal, lalu utang, lalu ekuitas baru ketika informasi dan biaya emisi berperan. Fleksibilitas mempertahankan kemampuan memperoleh dana saat peluang atau guncangan muncul. Target struktur modal perlu mempertimbangkan stabilitas kas, jaminan, kendali, keadaan pasar, serta kemampuan membayar pada skenario buruk. [hal. cetak 503-510; PDF 545-552]"
    },
    {
      "kind": "formula",
      "text": "V_L=V_U+TD",
      "note": "Hanya untuk model MM dengan utang permanen dan tanpa biaya distress. TD adalah nilai sekarang, sedangkan TrDD adalah manfaat bunga setahun. Rujukan: hal. cetak 500-503 (PDF 542-545)."
    },
    {
      "kind": "h2",
      "text": "4. Kerangka pengerjaan kasus"
    },
    {
      "kind": "ul",
      "items": [
        "Susun EBIT dan NOPAT dengan unit mata uang yang konsisten.",
        "Hitung saham dibeli, saham tersisa, bunga, laba bersih dan EPS.",
        "Ubah rasio total modal menjadi D/E sebelum menghitung beta.",
        "Bandingkan WACC serta nilai pada arus kas yang dinyatakan.",
        "Uji penurunan EBIT, kenaikan bunga dan keterbatasan manfaat pajak. Semua tarif adalah asumsi kasus."
      ]
    },
    {
      "kind": "h2",
      "text": "Latihan kasus 1: Rekapitalisasi dan risiko: evaluasi angka serta keputusan"
    },
    {
      "kind": "ul",
      "items": [
        "Penjualan USD1.100.000; biaya variabel 60%; biaya tetap USD40.000.",
        "Saham 80.000; harga buyback tetap USD25; utang baru USD400.000 berbunga 10%; pajak model 25%.",
        "Beta U=1,25; rRF=7,5%; premi pasar=6%; nilai pasar ekuitas sebelum pendanaan USD2.000.000. Setelah buyback diasumsikan USD1.600.000 untuk perhitungan bobot."
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "Langkah dan keputusan",
      "prompt": "Hitung EBIT, DOL, ROIC, laba bersih dan EPS sebelum/sesudah utang. Hitung D/E, beta L, biaya ekuitas dan WACC menggunakan bobot yang diberikan. Jelaskan mengapa kenaikan EPS tidak cukup membuktikan struktur optimal; uji EBIT turun 20%. Nyatakan asumsi, konsistensi satuan/tenor, dan keterbatasan keputusan yang diambil.",
      "blocks": [
        {
          "kind": "p",
          "text": "Langkah 1. EBIT = 1.100.000 - 660.000 - 40.000 = USD400.000; DOL=440.000/400.000=1,10. NOPAT=300.000; ROIC=300.000/2.000.000=15%."
        },
        {
          "kind": "p",
          "text": "Langkah 2. Tanpa utang NI=300.000; EPS=300.000/80.000=USD3,75. Saham dibeli=400.000/25=16.000; tersisa 64.000. Bunga=40.000; NI=(400.000-40.000)×75%=270.000; EPS=USD4,21875 atau 4,22."
        },
        {
          "kind": "p",
          "text": "Langkah 3. D/E=400.000/1.600.000=0,25; beta L=1,25[1+0,75×0,25]=1,484375. rs=7,5%+1,484375×6%=16,40625%. WACC=0,20×10%×75%+0,80×16,40625%=14,625%. Bobot model menahan ekuitas pada angka asumsi, sehingga belum menyelesaikan harga pasar endogen."
        },
        {
          "kind": "p",
          "text": "Langkah 4. EBIT turun 20% menjadi 320.000. NI tanpa utang 240.000; EPS3,00. NI berutang 210.000; EPS3,28125. EPS berutang turun 22,2222% dari 4,21875, lebih peka daripada EPS tanpa utang yang turun 20%. Manfaat pajak disertai sensitivitas laba, risiko pembiayaan ulang, serta biaya ekuitas. Penilaian alternatif perlu kas operasi dan biaya modal yang konsisten, bukan sekadar EPS tertinggi."
        },
        {
          "kind": "p",
          "text": "Pembulatan: pertahankan presisi pada langkah antara; persentase dan uang per lembar dibulatkan dua desimal, beta/skor empat atau tiga desimal sesuai kebutuhan. Unit uang mengikuti data; tidak ada konversi tersembunyi. Keputusan berlaku pada asumsi kasus, dengan risiko kas dan biaya yang masih perlu diuji."
        },
        {
          "kind": "p",
          "text": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 484-498 (PDF 526-540). Rujukan lokal: W9_Case_Study_Kelompok_7.pdf, halaman PDF 7-18."
        }
      ]
    },
    {
      "kind": "h2",
      "text": "Latihan kasus 2: Memilih bauran pendanaan ketika risiko dan biaya utang berubah"
    },
    {
      "kind": "ul",
      "items": [
        "Model A: bobot utang 0%; rd 0%; rs 12%; EPS Rp 4.",
        "B: utang 40%; rd 9%; rs 14%; EPS Rp 4,50. C: utang 60%; rd 13%; rs 18%; EPS Rp 5.",
        "Pajak model 25%; FCF operasi tetap Rp 12 miliar/tahun tanpa pertumbuhan; nilai=FCF/WACC."
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "Langkah dan keputusan",
      "prompt": "Hitung WACC ketiga alternatif memakai biaya utang setelah pajak. Hitung nilai operasi dan pilih bauran berdasarkan nilai. Bandingkan dengan pilihan berdasarkan EPS; jelaskan sensitivitas jika FCF C turun menjadi Rp 10 miliar. Nyatakan asumsi, konsistensi satuan/tenor, dan keterbatasan keputusan yang diambil.",
      "blocks": [
        {
          "kind": "p",
          "text": "A: WACC=12%; nilai 12/0,12=Rp 100 miliar. B:0,40×9%×75%+0,60×14%=11,10%; nilai 12/0,111=Rp 108,108108 miliar. C:0,60×13%×75%+0,40×18%=13,05%; nilai 12/0,1305=Rp 91,954023 miliar. B memaksimalkan nilai meski EPS C tertinggi. Asumsi kas tetap membuat perbandingan diskonto jelas; biaya ekuitas dan utang sudah mencerminkan peningkatan risiko. Jika FCF C menjadi 10, nilainya 10/0,1305=Rp 76,628352 miliar. Model perpetuitas tidak mempunyai pertumbuhan dan memerlukan WACC positif. Bobot adalah nilai pasar target dan biaya modal harus cocok dengan risiko masing-masing. Perisai pajak hanya dikenakan pada biaya utang; mengalikan seluruh WACC dengan 75% akan menurunkan nilai biaya modal secara keliru."
        },
        {
          "kind": "p",
          "text": "Pembulatan: pertahankan presisi pada langkah antara; persentase dan uang per lembar dibulatkan dua desimal, beta/skor empat atau tiga desimal sesuai kebutuhan. Unit uang mengikuti data; tidak ada konversi tersembunyi. Keputusan berlaku pada asumsi kasus, dengan risiko kas dan biaya yang masih perlu diuji."
        },
        {
          "kind": "p",
          "text": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 494-503 (PDF 536-545)."
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
        "DOL: kepekaan EBIT: DOL = (penjualan - biaya variabel)/EBIT. Contoh USD440.000/USD400.000 = 1,10 kali. Berlaku pada struktur harga dan biaya yang diasumsikan tetap. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 478-517 (PDF 520-559).",
        "ROIC dibanding ROE: ROIC = EBIT(1-T)/modal operasi; ROE = laba bersih/ekuitas. Bunga memengaruhi ROE, sedangkan ROIC memisahkan operasi dari pendanaan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 478-517 (PDF 520-559).",
        "D/total modal menjadi D/E: Jika bobot utang 40% dan ekuitas 60%, D/E = 0,40/0,60 = 0,6667. Bobot WACC memakai total modal; Hamada memakai ekuitas sebagai penyebut. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 478-517 (PDF 520-559).",
        "Hamada dan CAPM: Beta L = beta U[1+(1-T)D/E]; rs = rRF + beta L × premi pasar. Beta 1,45, rRF 5%, premi 6% memberi rs 13,70% per tahun. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 478-517 (PDF 520-559).",
        "EPS maksimum dan struktur optimal: EPS dapat naik karena saham berkurang, bersama kenaikan risiko. Dengan arus kas tetap, pilih nilai maksimum/WACC minimum; EPS maksimum sendiri tidak cukup. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 478-517 (PDF 520-559).",
        "MM dengan pajak: VL = VU + TD mengasumsikan manfaat pajak utang permanen dapat dipakai dan biaya distress diabaikan. TD merupakan PV, sedangkan TrdD merupakan perisai pajak satu tahun. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 478-517 (PDF 520-559)."
      ]
    }
  ]
};
