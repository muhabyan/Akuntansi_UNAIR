# Revisi MNK102 TM11

Rujukan langsung dan perbaikan ada pada 04/05/06. SHA256 05: fb1f52771c0f32c1ea17f864ebf4b882eee9cda7c1e7c1e609c06a90ac3c394b.

## 4a. Hubungkan angka dengan keputusan kas

Rasio harian menggunakan pembagi yang sesuai arusnya. Buku menghitung inventory conversion period dengan persediaan dibagi penjualan harian, dan payables deferral period dengan utang dagang dibagi pembelian harian. Buku juga memperbolehkan COGS harian pada kedua rasio tersebut karena persediaan dan utang dicatat pada biaya. Pendekatan biaya perlu dinyatakan, terutama saat margin membuat penjualan berbeda dari biaya. [hal. 567-568; PDF 609-610]

Saldo akhir dipakai pada contoh buku sebagai pendekatan perusahaan stabil. Bila usaha musiman, saldo rata-rata yang mewakili periode lebih berguna. Jangan mengganti 365 hari dengan 360 pada satu rasio saja. CCC yang lebih pendek dapat mengurangi kebutuhan dana, tetapi menunda utang di luar kontrak dapat merusak hubungan pemasok. [hal. 567-569; PDF 609-611]


```visual
id: V-TM11-05
jenis: chart
judul: Allied Cash Budget: kebutuhan pinjaman dan surplus
sumber: Table 16.1 baris 40, hal. 571 (PDF 613), angka bulat juta USD pada buku.
isi: ["Juli minus 21: kebutuhan pinjaman", "September minus 100: kebutuhan terbesar", "Desember 102: surplus untuk investasi"]
hubungan: Sumbu, satuan, legenda dan penanda dibaca bersama asumsi pada teks
pesan utama: Dana diperlukan saat saldo kumulatif berada di bawah target; gunakan angka bulat tabel sumber.
versi HP: grafik 360 unit dengan label 16 unit; rincian desktop dapat dibuka
alt text: Allied Cash Budget: kebutuhan pinjaman dan surplus. Dana diperlukan saat saldo kumulatif berada di bawah target; gunakan angka bulat tabel sumber.
data: {"panels": [{"title": "Kas setelah target saldo minimum", "xlabel": "Bulan: 7 Juli sampai 12 Desember", "ylabel": "Surplus (+)/pinjaman (-), juta USD", "series": [{"label": "Surplus atau kebutuhan pinjaman", "points": [[7, -21], [8, -58], [9, -100], [10, -56], [11, 58], [12, 102]]}], "xmin": 7, "xmax": 12, "ymin": -120, "ymax": 120, "xticks": [7, 8, 9, 10, 11, 12], "markers": [{"x": 9, "y": -100, "label": "September: pinjaman 100 juta USD"}]}]}
```


Cara membaca: nilai negatif pada kurva Allied adalah kebutuhan pinjaman kumulatif setelah mempertahankan kas 10 juta USD. Angka September adalah minus 100 juta USD, kebutuhan terbesar pada tabel. November dan Desember berada di atas nol dan menunjukkan surplus yang tersedia setelah utang berkurang. Grafik memakai angka pembulatan Table 16.1, bukan arus kas harian. [hal. 571-573; PDF 613-615]

Aging schedule mengelompokkan piutang menurut umur. DSO yang sama dapat menyembunyikan pelanggan yang sangat terlambat bila pelanggan lain membayar lebih awal. Credit policy mencakup periode kredit, diskon, standar pelanggan dan kebijakan penagihan; perubahan salah satu unsur perlu menilai penjualan, kerugian piutang dan dana yang tertahan. [hal. 578-581; PDF 620-623]

<!-- self-check question="Apakah anggaran kas akhir bulan cukup menentukan fasilitas bank?" -->
Belum tentu. Pembayaran intrabulan dapat terjadi sebelum penerimaan pelanggan, sehingga kebutuhan puncak dapat lebih besar. Anggaran bulanan memberi dasar; jadwal arus harian perlu diperiksa untuk menetapkan fasilitas. [hal. 572-573; PDF 614-615]
<!-- self-check:end -->


Temuan lintas grafik: legenda diberi sampel garis, grafik numerik mendapat versi ponsel, skenario diskret memakai batang probabilitas, dan batas model dijelaskan. Jumlah latihan dipertahankan.
