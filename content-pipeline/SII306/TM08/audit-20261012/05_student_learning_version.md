# Conversion Business Process: Produksi, Biaya, dan Model Data

Conversion mengubah bahan menjadi barang jadi sekaligus mengumpulkan biaya per pekerjaan. Ikuti alur fisik, dokumen, pencatatan, BPMN, pengendalian dan model data agar dapat menjelaskan dari mana biaya produksi berasal serta bagaimana kebenarannya diuji.

Bahan dibeli belum berarti barang sudah selesai

Percetakan membeli kain, memakai sebagian untuk pesanan, membayar pekerja, lalu memeriksa hasil. Sebagian pesanan belum selesai pada akhir bulan. Kalau semua biaya langsung dianggap HPP, persediaan dan laba akan keliru. SIA harus melacak **bahan, pekerjaan dalam proses, barang jadi, dan barang terjual** secara terpisah.

1. Alur barang dan alur biaya

Conversion business process mencakup pemeliharaan bahan/barang jadi, produksi, pencatatan tenaga kerja langsung, biaya langsung lain, serta alokasi overhead. Proses bisa berbeda antarperusahaan, tetapi kebutuhan informasinya serupa: apa diproduksi, berapa input dipakai, siapa mengerjakan, kapan selesai, dan berapa biaya hasilnya. Richardson pp.352–353.

Empat posisi biaya yang berbeda

Peta buatan untuk sistem perpetual. COGM (harga pokok produksi selesai) berbeda dari COGS/HPP barang terjual.

1. Raw materials: Bahan tersedia untuk produksi. Belum dipakai: tetap persediaan.

2. Work-in-process: Bahan dipakai + tenaga kerja + OH. Biaya pekerjaan yang belum selesai.

3. Finished goods: Biaya produk yang sudah selesai. Transfer dari WIP = COGM.

4. Cost of goods sold: Biaya barang yang sudah dijual. Transfer dari finished goods.

Dokumen dan informasi proses

Dokumen / catatan | Fungsi | Kontrol

Production authorization | Menyetujui produk/kuantitas yang akan dibuat dan jadwalnya. | Petugas berwenang; perubahan terotorisasi.

Bill of materials (BOM) | Rencana jenis dan kuantitas bahan untuk produk. | Versi dan perubahan standar dikendalikan.

Material issue | Mencatat bahan aktual dikeluarkan ke pekerjaan. | Tautkan ke otorisasi, petugas dan kuantitas.

Labor operations / time records | Mencatat pekerjaan, pelaku, jam, dan tarif aktual. | Validasi waktu/tarif, approval independen.

Inspection dan completion | Mencatat mutu, hasil diterima, serta tanggal selesai aktual. | Pisahkan inspeksi dari pelaksana, batasi jumlah selesai.

Tujuan produksi, pemicu, dan hubungan antarsiklus

Purchases menyediakan material, conversion mengolahnya, lalu sales menyerahkan produk. Persediaan yang dipakai bersama harus konsisten agar pembelian tidak dihitung lagi sebagai pemakaian dan produk selesai tidak langsung dianggap terjual. Tujuan conversion mencakup ketersediaan produk, mutu, efisiensi sumber daya, serta informasi biaya yang andal. Produksi dapat dipicu pengisian stok minimum atau kebutuhan pesanan sesuai kebijakan; contoh Sunset memakai kebutuhan barang jadi. Otorisasi menyetujui rencana, belum membuktikan penyelesaian.

**Labor plan** menyimpan rencana operasi atau waktu standar; **labor operations** mencatat pekerjaan aktual. Bandingkan keduanya untuk menilai produktivitas dan telusuri selisih sebelum menyimpulkan pemborosan. Standar pada BOM, labor plan, dan kategori produk dibedakan dari kuantitas, jam, tarif, serta biaya aktual setiap pekerjaan. Model boleh disesuaikan jika perusahaan tidak memakai labor plan formal. Richardson Ch.9 pp.352–353, 358–362.

2. Contoh bertahap: dari biaya masuk sampai HPP

Asumsi latihan biaya per bulan

Seluruh angka Rp juta, sistem perpetual. WIP awal 10; bahan langsung digunakan 30; tenaga kerja langsung 20; overhead dibebankan 10; WIP akhir 14. Barang jadi awal 8 dan akhir 12. Tidak ada spoilage abnormal, retur, atau penyesuaian overhead dalam hitungan ini.

Biaya ditambahkan ke produksi = 30 + 20 + 10 = 60.

Biaya yang harus dipertanggungjawabkan di WIP = awal 10 + tambahan 60 = 70.

COGM = 70 − WIP akhir 14 = 56. Sebanyak 56 ditransfer ke barang jadi.

Barang jadi tersedia = awal 8 + COGM 56 = 64.

COGS = 64 − barang jadi akhir 12 = 52.

Periksa: 10 + 30 + 20 + 10 = 14 + 56 dan 8 + 56 = 12 + 52.

\mathrm{COGM}=\mathrm{WIP}_{awal}+\mathrm{DM}+\mathrm{DL}+\mathrm{OH}_{dibebankan}-\mathrm{WIP}_{akhir}

DM: direct materials used; DL: direct labor; OH: manufacturing overhead. Semua satuan dan periode harus sama.

Bahan digunakan

Rp juta, sesuai contoh.

Work-in-Process: debit 30; credit –

Raw Materials: debit –; credit 30

Tenaga kerja langsung

Rp juta; asumsi belum dibayar.

Work-in-Process: debit 20; credit –

Wages Payable: debit –; credit 20

Overhead dibebankan

Rp juta; akun overhead control mencatat pembebanan.

Work-in-Process: debit 10; credit –

Manufacturing Overhead: debit –; credit 10

Produksi selesai

Rp juta; hanya biaya produk selesai.

Finished Goods: debit 56; credit –

Work-in-Process: debit –; credit 56

Biaya barang terjual

Rp juta; jurnal pendapatan terpisah dan harga jual tidak diberikan.

Cost of Goods Sold: debit 52; credit –

Finished Goods: debit –; credit 52

Biaya standar dan aktual

Overhead yang dibebankan tidak selalu sama dengan overhead aktual. Tarif, cost driver dan selisih harus ditelusuri menurut sistem biaya. Jangan menjumlahkan biaya yang sama dua kali dari tarif overhead dan tagihan aktual. Contoh di atas mengasumsikan tidak ada selisih yang perlu disesuaikan.

3. Model aktivitas BPMN dan exception produksi

Sunset memulai produksi saat perlu mengisi barang jadi. Otorisasi diikuti pengeluaran bahan serta pekerjaan, kemudian inspeksi dan penyelesaian. Batch dapat berulang sampai kebutuhan selesai. Model dasar dapat diperinci dengan lane untuk menunjukkan fungsi dan subproses untuk mengelola kerumitan; pilih detail yang membantu menjelaskan tanggung jawab.

BPMN sederhana: produksi, inspeksi, dan penggantian barang cacat

Diagram adaptasi buatan dari uraian Sunset Graphics, Richardson Ch.9 pp.354–357. Ini model satu pool dengan sequence flow, bukan collaboration antarpihak; jalur barang cacat mengikuti asumsi discard dan penggantian.

Satu pool perusahaan: seluruh aktivitas internal dihubungkan sequence flow.

Start → Authorize production → Issue materials → Perform work → Inspect work.

Exclusive gateway mutu: satu jalur dipilih. Tidak lulus → Discard defects → produksi pengganti; lulus → Complete production → End.

Model ini menyederhanakan batch dan inspeksi; subproses/loop batch serta lane dapat ditambahkan sesuai kebutuhan.

Pada BPMN, sequence flow menghubungkan aktivitas di dalam pool. Message flow dipakai antar-pool peserta berbeda; memisahkan fungsi internal menjadi lane tidak otomatis memerlukan message flow. Exclusive gateway memilih jalur sesuai kondisi. Loop menggambarkan pekerjaan berulang, sedangkan parallel gateway menunjukkan cabang yang berjalan bersamaan dan harus disinkronkan sesuai desain.

Barang cacat: periksa aturan sebelum menggambar

Pada uraian Sunset, barang yang gagal mutu dibuang dan dibuat penggantinya. Jika perusahaan lain mengizinkan rework, diagram perlu cabang rework, inspeksi ulang, dan catatan biaya terkait. Jangan menggambar semua kegagalan mutu langsung masuk barang jadi. Aturan bisnis menentukan cabang proses serta informasi yang perlu disimpan.

Membaca data objects, batch, dan subprocess

Pada model dasar satu pool mewakili proses internal; lane membedakan Inventory Manager, Conversion Employees dan pemeriksa mutu sesuai organisasi. **Data objects** memperlihatkan otorisasi, material issue dan catatan pekerjaan yang dibuat atau digunakan aktivitas. Pada batch berulang, collapsed subprocess merangkum pekerjaan; expanded subprocess menunjukkan persiapan, bahan, pengerjaan dan inspeksi. Gateway menguji apakah batch maupun seluruh kuantitas telah selesai. Sequence flow tetap berada dalam pool; loop tidak berarti setiap barang cacat boleh diterima. Richardson pp.353–357.

4. Business rules, akses, dan kontrol aplikasi

Adaptasi kontrol Exhibit 9.6

Langkah | Pemisahan / akses | Kontrol aplikasi dan bukti

Authorize production | Pengotorisasi tidak bebas mengubah catatan persediaan. | Nomor otorisasi, batas kuantitas/nilai, approval sesuai wewenang.

Issue materials | Penerbit bahan berbeda dari pengotorisasi; tidak bebas mengubah BOM. | Tautkan ke job dan BOM, cek rentang jumlah, catat tanggal/petugas.

Perform work | Pencatat jam tidak mengubah otorisasi produksi tanpa izin. | Nomor operasi, cek jam/tarif, identitas pekerja dan supervisor.

Inspect work | Inspektur berbeda dari pelaksana pekerjaan yang diperiksa. | Jumlah diterima/cacat dan hasil inspeksi terdokumentasi.

Complete production | Pemindah hasil tidak mengambil alih otorisasi produksi. | Jumlah selesai dibatasi otorisasi, tanggal aktual, stok diperbarui.

Buku memakai contoh batas supervisor untuk otorisasi >$5.000. Itu aturan kasus Sunset, bukan batas universal seluruh perusahaan. Default tanggal hari ini mengurangi salah input, tetapi tidak boleh menyembunyikan tanggal kejadian sebenarnya atau cutoff. Nilai default tetap perlu validasi dan jejak koreksi. Richardson p.358 (PDF 383).

5. Struktur REA/UML dan perhitungan WIP

Resources, events, agents dan rencana

Peta REA konseptual buatan, bukan UML dengan multiplicity. Tabel berikut menjelaskan hubungan yang diterapkan.

1. Resources: Bahan dan produk jadi. Equipment bila diperlukan.

2. Events: Authorization, issue, labor. Rekam aktual dan status selesai.

3. Agents: Pengotorisasi, gudang, pekerja. Simpan peran pada setiap event.

4. Plans / type images: BOM, kategori dan rencana kerja. Bandingkan standar dengan aktual.

Pada model generik buku, WIP tidak harus menjadi kelas resource tersendiri karena nilainya dapat dihitung dari biaya material issues, labor operations dan alokasi overhead yang belum ditransfer ke barang jadi. Ini keputusan model data, bukan berarti akun atau saldo WIP hilang dari akuntansi. Production authorization menyimpan rencana dan kemudian diperbarui dengan hasil/tanggal aktual. Richardson pp.358–362.

Hubungan dan implementasi tabel

Hubungan | Aturan / multiplicity | Implementasi

Authorization–Material issue | Satu authorization dapat mempunyai beberapa issue; satu issue merujuk satu authorization. | Prod_auth_number FK pada Material_Issue.

Material issue–Materials | Satu issue memuat beberapa bahan; satu bahan dapat dikeluarkan pada banyak issue. | Link Material_Issue_Materials dengan PK gabungan dan Qty_issued.

Labor operations–Employees | Satu operasi dapat melibatkan beberapa pegawai; satu pegawai bekerja pada banyak operasi. | Link Labor_Operations_Employees menyimpan jam dan tarif aktual.

Products–Materials | Bahan dapat dipakai banyak produk dan produk memerlukan banyak bahan. | BOM dengan identitas serta kuantitas standar; Sunset memodelkannya sebagai type image.

Nama tabel dan atribut pada contoh Sunset

Exhibit 9.9 menyebut tblBill_of_Material, tblLabor_Operations, tblLabor_Operations_Employees, tblMaterial_Issue, tblMaterial_Issue_Materials, tblMaterials, tblEmployees, tblProduct_Category, tblProduction_Authorizations, dan tblProducts. Tabel penghubung mencegah daftar banyak nilai disimpan pada satu field.

Production authorizations membedakan Prod_auth_date, Scheduled_completion_date dan Actual_completion_date, selain Scheduled_qty_to_produce dan Actual_qty_produced. Jangan menyamakan tanggal otorisasi dengan tanggal selesai. Database juga memerlukan PK, tipe data, FK serta referential integrity setelah tabel dibentuk. Richardson pp.361–363 (PDF 386–388).

Pengembangan model dan pemeriksaan database produksi

Model conversion dasar memakai agent internal: Employees berperan sebagai pemberi otorisasi, penerbit material dan pekerja; external agent tidak wajib ditambahkan untuk aktivitas internal. Satu authorization dapat mempunyai banyak material issues dan labor operations; minimum keterlibatannya mengikuti status dan aturan bisnis. Hubungan produk–material adalah many-to-many. Type images seperti BOM dan Product Category menyimpan standar/kategori, dan BOM dapat diperinci menjadi kelas bila atribut serta kebijakannya memerlukan itu.

Jika perusahaan perlu melacak pemakaian mesin, tambahkan **Equipment** sebagai resource serta **Equipment Operations** sebagai event dengan waktu dan dasar biaya. Hubungan konsumsi material/tenaga kerja dengan hasil produksi membantu menelusuri pertukaran sumber daya; jangan memaksakan pola penjualan–penerimaan kas pada konversi internal. WIP yang dihitung dari biaya pekerjaan belum selesai tetap dapat menjadi saldo akuntansi walaupun tidak menjadi kelas resource tersendiri.

Saat implementasi, pilih PK, tipe data dan FK; enforce referential integrity, lalu simpan kuantitas/biaya pada event atau baris penghubung yang tepat. Query manajemen dapat menjumlah kebutuhan material menurut BOM, membandingkan standar dengan aktual, menghitung biaya per job, dan memisahkan job selesai dari WIP. Uji satu job sampai dokumen asal: FK valid saja belum membuktikan kuantitas atau tarifnya benar. Richardson pp.358–365.

6. Uji pemahaman

Dengan data contoh, WIP akhir sebenarnya 18. Berapa COGM dan COGS jika FG akhir tetap 12?

Biaya tersedia di WIP tetap 70. COGM = 70 − 18 = 52. Barang jadi tersedia = 8 + 52 = 60; COGS = 60 − 12 = 48. WIP lebih tinggi berarti lebih sedikit biaya ditransfer, bukan biaya tambahan otomatis.

BOM dan material issue terlihat berbeda. Mengapa ini belum otomatis fraud?

BOM menunjukkan rencana, issue menunjukkan aktual. Perbedaan bisa berasal dari perubahan spesifikasi, kehilangan, pemborosan, atau kesalahan pencatatan. Periksa versi BOM, approval, jumlah hasil, retur bahan, dan bukti fisik sebelum menyimpulkan penyebab.

Pola jawaban

Alur fisik → dokumen/event → dampak biaya → kontrol → hubungan data → bukti. Bedakan rencana dan aktual, COGM dan COGS, serta akun WIP dan kelas pada model.

Sumber dan batas pembahasan

RPS-SIA minggu 8; Richardson Ch.9 pp.350–365 (PDF 375–390), terutama Exhibit 9.1, 9.6, 9.7–9.10. Angka biaya adalah latihan buatan, sedangkan nama tabel dan pembedaan tanggal mengikuti Exhibit 9.9. Angka, perusahaan, diagram, dan skenario latihan di halaman ini adalah ilustrasi buatan kecuali dinyatakan lain. Urutan materi inti mengikuti RPS-SIA, Pembagian Mengajar Gasal 2025/2026, halaman 1; pendalaman di luar bab terjadwal diberi label pelengkap.

## Latihan

Saat bahan langsung dikeluarkan untuk produksi dalam sistem perpetual, jurnal yang tepat adalah...

Biaya berpindah dari bahan ke WIP; belum otomatis menjadi barang jadi atau HPP. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390).

WIP awal 10, DM 30, DL 20, OH dibebankan 10 dan WIP akhir 14 (Rp juta). COGM adalah...

COGM = 10 + 30 + 20 + 10 − 14 = 56. WIP akhir belum ditransfer ke barang jadi. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390).

Dalam model generik conversion, mengapa WIP tidak harus menjadi kelas resource terpisah?

Model data dapat menghitung WIP dari biaya material, labor dan overhead pada pekerjaan terbuka. Ini tidak menghapus saldo akuntansi WIP. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390).

Satu material issue memuat beberapa bahan, dan satu bahan muncul pada banyak issue. Implementasi relasionalnya adalah...

Hubungan many-to-many diterapkan melalui linking table; identitas issue dan bahan menjadi referensi yang valid. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390).

Pada model Sunset, barang gagal inspeksi dibuang lalu dibuat penggantinya. Model aktivitas harus menunjukkan...

Gateway mengarahkan hasil mutu; loop/exception mengikuti aturan perusahaan. Sequence flow digunakan di dalam pool. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390).

## Flashcard

Alur biaya conversion

Raw materials → WIP → finished goods → COGS; COGM adalah transfer produk selesai, COGS biaya produk terjual. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390).

Rumus COGM

WIP awal + bahan langsung terpakai + tenaga kerja langsung + overhead dibebankan − WIP akhir. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390).

BOM versus material issue

BOM memuat rencana bahan; material issue mencatat pemakaian aktual. Selisih perlu investigasi dan approval. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390).

Model WIP

WIP dapat dihitung dari biaya event pekerjaan belum selesai; tidak harus menjadi kelas resource tersendiri pada model generik. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390).

Linking table conversion

Hubungan banyak material issue–bahan dan labor operations–pegawai memakai tabel penghubung dengan data jumlah/jam. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390).

Tanggal production authorization

Bedakan tanggal otorisasi, tanggal selesai terjadwal, dan tanggal selesai aktual; jangan menyamakannya. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390).
