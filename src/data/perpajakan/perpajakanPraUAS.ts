// =============================================================
// src/data/perpajakan/perpajakanPraUAS.ts
// Perpajakan I Pra-UAS TM8-14.
// Sumber utama: Materi_Perpajakan_I_TM8-14_Kompilasi (2).md
// Batch 2: sinkronisasi konten reading dari source markdown terbaru.
// =============================================================

export interface PjkBlock {
  k: 'h' | 'p' | 'list' | 'pre';
  text?: string;
  items?: string[];
}

export interface PjkPage {
  chunkId: string;
  page: number;
  blocks: PjkBlock[];
}

export interface PjkUasModule {
  tm: number;
  title: string;
  sourcePdf: string;
  sourceFile: string;
  lawBasis?: string;
  body_markdown: string;
  pages: PjkPage[];
}

export type PjkModule = PjkUasModule;

export interface PjkData {
  course: string;
  sourceFile: string;
  dateBasis: string;
  scope: string;
  modules: PjkUasModule[];
}

export const perpajakanPraUAS: PjkData = {
  "course": "Perpajakan I - Pra UAS",
  "sourceFile": "Materi_Perpajakan_I_TM8-14_Kompilasi (2).md",
  "dateBasis": "Juni 2026",
  "scope": "TM 8-14: Penelitian/Pemeriksaan/Penyidikan, Ketetapan & Restitusi, Sengketa Pajak, Penagihan, Bea Meterai, Pajak Daerah & Retribusi Daerah",
  "modules": [
    {
      "tm": 8,
      "title": "TM 8 — Penelitian, Pemeriksaan, dan Penyidikan Pajak",
      "sourcePdf": "Materi_Perpajakan_I_TM8-14_Kompilasi (2).md",
      "sourceFile": "Materi_Perpajakan_I_TM8-14_Kompilasi (2).md",
      "lawBasis": "UU KUP (UU No. 6/1983 sebagaimana terakhir diubah dengan UU No. 6/2023; perubahan substantif melalui UU HPP No. 7/2021) · PMK 15/2025 (Pemeriksaan) · PMK 81/2024 sebagaimana diubah terakhir dengan PMK 1/2026 (Coretax)",
      "body_markdown": "## TM 8 — Penelitian, Pemeriksaan, dan Penyidikan Pajak\n\n**Mata Kuliah:** Perpajakan I\n**Dasar Hukum Utama:** UU KUP (UU No. 6/1983 sebagaimana terakhir diubah dengan UU No. 6/2023; perubahan substantif melalui UU HPP No. 7/2021) · PMK 15/2025 (Pemeriksaan) · PMK 81/2024 sebagaimana diubah terakhir dengan PMK 1/2026 (Coretax)\n**Diperbarui mengikuti regulasi s.d.:** Juni 2026\n\n> **Catatan baca:** Materi ini sudah disesuaikan dengan aturan terbaru. Beberapa angka pasal dan jenis pemeriksaan di slide lama (era PMK 17/2013) **sudah tidak berlaku** dan sudah dikoreksi di sini. Lihat bagian *Catatan Koreksi* di akhir.\n\n---\n\n### 0. Peta Konsep: Eskalasi Pengawasan Pajak\n\nIndonesia menganut **self-assessment** (WP menghitung, menyetor, dan melaporkan pajaknya sendiri). Karena itu DJP melakukan pengawasan secara berjenjang, dari yang paling ringan (administratif) sampai yang paling berat (pidana):\n\n```\nPENELITIAN  →  PEMERIKSAAN  →  PEMERIKSAAN BUKTI PERMULAAN  →  PENYIDIKAN\n(administratif)  (menguji kepatuhan)   (cari indikasi pidana)      (ranah pidana)\n```\n\n| Aspek | Penelitian | Pemeriksaan | Penyidikan |\n|---|---|---|---|\n| Sifat | Administratif | Administratif (uji kepatuhan) | Pidana (penegakan hukum) |\n| Dasar | Pasal 1 angka 30 UU KUP | Pasal 1 angka 25 UU KUP | Pasal 1 angka 31 UU KUP |\n| Pelaksana | Petugas/AR DJP | Tim Pemeriksa Pajak | Penyidik Pegawai Negeri Sipil (PPNS) DJP |\n| Produk utama | STP, SKPPKP; SP2DK = instrumen pengawasan kepatuhan awal | SKP (SKPKB/SKPKBT/SKPLB/SKPN), STP | Berkas perkara → penuntutan/pidana |\n\n---\n\n### 1. PENELITIAN\n\n#### 1.1 Definisi\nBerdasarkan **Pasal 1 angka 30 UU KUP**, penelitian adalah *serangkaian kegiatan yang dilakukan untuk menilai kelengkapan pengisian Surat Pemberitahuan (SPT) dan lampiran-lampirannya, termasuk penilaian tentang kebenaran penulisan dan perhitungannya.*\n\n#### 1.2 Karakteristik\n- Bersifat **administratif** — tidak perlu Surat Perintah Pemeriksaan dan tidak masuk ke pembukuan WP secara mendalam.\n- Fokus pada uji **formal**: apakah SPT sudah **benar, lengkap, dan jelas** sebagaimana disyaratkan Pasal 3 UU KUP.\n- Dalam praktik, DJP menyandingkan isi SPT dengan data dari pihak ketiga (kementerian/lembaga, otoritas negara lain).\n\n#### 1.3 Produk Hukum yang Dapat Terbit dari Penelitian\n- **Surat Tagihan Pajak (STP)** — Pasal 14 UU KUP, definisi STP ada di **Pasal 1 angka 20 UU KUP**: surat untuk melakukan tagihan pajak dan/atau sanksi administrasi berupa bunga dan/atau denda.\n- **SKPPKP** (Surat Keputusan Pengembalian Pendahuluan Kelebihan Pajak) — bila penelitian dilakukan dalam rangka **restitusi pendahuluan** (dibahas di TM 9).\n\n> **Catatan posisi SP2DK (jangan keliru):** **SP2DK** (Surat Permintaan Penjelasan atas Data dan/atau Keterangan) **bukan** produk dari penelitian SPT, melainkan instrumen **pengawasan kepatuhan** yang berada di tahap paling awal. Awalnya hanya diatur internal lewat **SE-05/PJ/2022**, kini diberi dasar hukum lebih kuat melalui **PMK No. 111 Tahun 2025**, yang menegaskan SP2DK **berbeda** dari pemeriksaan maupun pemeriksaan bukti permulaan. SP2DK adalah sarana klarifikasi sebelum eskalasi ke pemeriksaan.\n\n---\n\n### 2. PEMERIKSAAN\n\n#### 2.1 Definisi\nBerdasarkan **Pasal 1 angka 25 UU KUP**, pemeriksaan adalah *serangkaian kegiatan menghimpun dan mengolah data, keterangan, dan/atau bukti yang dilaksanakan secara objektif dan profesional berdasarkan suatu standar pemeriksaan untuk menguji kepatuhan pemenuhan kewajiban perpajakan dan/atau untuk tujuan lain dalam rangka melaksanakan ketentuan peraturan perundang-undangan perpajakan.*\n\n#### 2.2 Dasar Pelaksana Terbaru — PMK 15/2025\n> ⚠️ **PENTING (perubahan besar 2025):** Tata cara pemeriksaan kini diatur **PMK No. 15 Tahun 2025**, ditetapkan **10 Februari 2025**, diundangkan dan mulai berlaku **14 Februari 2025**. PMK ini **menyederhanakan dan menggantikan** rezim lama (a.l. PMK 17/2013 dan perubahannya). Materi pemeriksaan yang masih menyebut \"Pemeriksaan Lapangan vs Pemeriksaan Kantor\" sebagai jenis utama **sudah usang**.\n\n#### 2.3 Tujuan Pemeriksaan (Pasal 2 PMK 15/2025)\n1. **Menguji kepatuhan** pemenuhan kewajiban perpajakan; dan/atau\n2. **Tujuan lain** dalam rangka melaksanakan ketentuan peraturan perpajakan, misalnya:\n   - Penerbitan/penghapusan NPWP atau pengukuhan/pencabutan PKP secara jabatan;\n   - Penentuan saat produksi dimulai / WP di daerah terpencil / besarnya biaya tahap eksplorasi;\n   - Penagihan pajak; penyelesaian keberatan; pengumpulan bahan penyusunan Norma Penghitungan Penghasilan Neto.\n\n#### 2.4 Jenis Pemeriksaan & Jangka Waktu — **(BERUBAH, PMK 15/2025)**\n\nPMK 15/2025 mengganti pembagian lama (Lapangan/Kantor) menjadi **tiga tipe** berdasarkan kedalaman pengujian (Pasal 2) dengan jangka waktu di **Pasal 6**:\n\n| Jenis | Cakupan | Jangka Waktu Pengujian |\n|---|---|---|\n| **Pemeriksaan Lengkap** | Seluruh pos dalam SPT dan/atau SPOP secara mendalam | **5 bulan** |\n| **Pemeriksaan Terfokus** | Satu/beberapa pos dalam SPT/SPOP secara mendalam | **3 bulan** |\n| **Pemeriksaan Spesifik** | Satu/beberapa pos / data / kewajiban tertentu secara sederhana | **1 bulan** |\n| Pemeriksaan Spesifik atas **data konkret** (pajak belum/kurang dibayar) | — | **10 hari kerja** |\n\n**Catatan jangka waktu:**\n- Jangka waktu dihitung **sejak Surat Pemberitahuan Pemeriksaan disampaikan** sampai **Surat Pemberitahuan Hasil Pemeriksaan (SPHP)** disampaikan.\n- Setelah SPHP, DJP punya maksimal **30 hari kerja** untuk menerbitkan **Laporan Hasil Pemeriksaan (LHP)**.\n- WP wajib memenuhi permintaan data **maksimal 1 bulan** (Pasal 12); dokumen yang diserahkan lewat batas dianggap tidak diberikan.\n\n##### Tabel Perbandingan Regulasi (WAJIB dipahami untuk ujian)\n\n| Aspek | Aturan Lama (PMK 17/2013 dkk) | Aturan Baru (PMK 15/2025) |\n|---|---|---|\n| Jenis pemeriksaan | Pemeriksaan **Lapangan** & **Kantor** | Pemeriksaan **Lengkap, Terfokus, Spesifik** |\n| Dasar pembedaan | Tempat pelaksanaan | Kedalaman & cakupan pos yang diuji |\n| Jangka waktu | Bervariasi (mis. lapangan 6 bln, kantor 4 bln) | 5 / 3 / 1 bulan (+10 hari kerja untuk data konkret) |\n| Batas pemenuhan data WP | Lebih longgar | Tegas: maksimal **1 bulan** |\n\n#### 2.5 Standar Pemeriksaan\nPMK 15/2025 mempertahankan tiga kelompok standar:\n\n**a. Standar Umum** (menyangkut pribadi & mutu pemeriksa):\n- Telah mendapat pendidikan/pelatihan teknis cukup dan terampil; menggunakan keterampilannya secara cermat dan seksama;\n- Jujur, bersih dari tindakan tercela, mengutamakan kepentingan negara;\n- Taat pada ketentuan perundang-undangan termasuk batas waktu;\n- Bila perlu, pemeriksaan dapat dibantu **tenaga ahli** dari luar DJP yang ditunjuk DJP (mis. penerjemah, ahli TI, pengacara).\n\n**b. Standar Pelaksanaan:**\n- Didahului persiapan yang baik, sesuai tujuan, dengan pengawasan seksama;\n- Luas pemeriksaan (*audit scope*) dikembangkan lewat pencocokan data, pengamatan, permintaan keterangan, konfirmasi, dan teknik sampling;\n- Temuan harus didasarkan pada **bukti kompeten yang cukup**;\n- Dilakukan oleh **tim** (supervisor, ketua tim, anggota); didokumentasikan dalam **Kertas Kerja Pemeriksaan (KKP)**;\n- Dapat dilaksanakan di kantor DJP, tempat usaha/tinggal WP, atau tempat lain; pada jam kerja, dapat dilanjutkan di luar jam kerja.\n\n**c. Standar Pelaporan:**\n- LHP disusun ringkas dan jelas, memuat ruang lingkup sesuai tujuan, kesimpulan yang didukung temuan kuat, dan pengungkapan informasi lain yang terkait;\n- LHP menjadi **dasar penerbitan SKP dan/atau STP** (Pasal 20 PMK 15/2025).\n\n#### 2.6 Tahapan Pemeriksaan\n1. **Penyampaian Surat Pemberitahuan Pemeriksaan** kepada WP.\n2. **Pengujian** (pengumpulan & pengolahan data, peminjaman dokumen).\n3. **SPHP** — hasil pemeriksaan diberitahukan ke WP.\n4. **Pembahasan Akhir Hasil Pemeriksaan** (*closing conference*) — WP berhak menanggapi.\n5. **LHP** → dasar penerbitan **SKP** (SKPKB/SKPKBT/SKPLB/SKPN) dan/atau **STP**.\n\n#### 2.7 Hak & Kewajiban WP dalam Pemeriksaan (PMK 15/2025)\n\n**Hak WP:**\n- Meminta Pemeriksa memperlihatkan **tanda pengenal** dan **Surat Perintah Pemeriksaan**;\n- Meminta penjelasan tentang **alasan dan tujuan** pemeriksaan;\n- Menerima **SPHP** dan menghadiri **Pembahasan Akhir Hasil Pemeriksaan**;\n- Mengajukan permohonan **pembahasan dengan Tim Quality Assurance** bila terdapat perbedaan pendapat dengan pemeriksa;\n- Memberikan tanggapan tertulis atas SPHP.\n\n**Kewajiban WP:**\n- Memperlihatkan/meminjamkan **buku, catatan, dan dokumen** yang menjadi dasar pembukuan serta dokumen lain yang berhubungan;\n- Memberi kesempatan **memasuki tempat/ruang** yang dipandang perlu;\n- Memberi **bantuan/keterangan** yang diperlukan secara lisan/tertulis;\n- Memenuhi permintaan data **maksimal 1 bulan** (lewat batas → dianggap tidak diberikan).\n\n---\n\n### 3. PEMERIKSAAN BUKTI PERMULAAN (Bukper)\n\nMerupakan **jembatan** antara ranah administratif dan ranah pidana.\n- **Bukti Permulaan** = keadaan/perbuatan/bukti (termasuk keterangan, tulisan, benda) yang memberi petunjuk adanya **dugaan kuat** tindak pidana di bidang perpajakan.\n- **Pemeriksaan Bukti Permulaan** = pemeriksaan untuk mendapatkan bukti permulaan tersebut.\n- Bila ditemukan bukti permulaan yang cukup → ditindaklanjuti dengan **Penyidikan**.\n- Sebelum penyidikan dimulai, WP masih dapat memanfaatkan **Pasal 8 ayat (3) jo. Pasal 44A UU KUP** (pengungkapan ketidakbenaran perbuatan) — lihat butir 4.4.\n\n---\n\n### 4. PENYIDIKAN TINDAK PIDANA DI BIDANG PERPAJAKAN\n\n#### 4.1 Definisi & Tujuan\nBerdasarkan **Pasal 1 angka 31 UU KUP**, penyidikan adalah *serangkaian tindakan yang dilakukan penyidik untuk mencari serta mengumpulkan bukti yang dengan bukti itu membuat terang tindak pidana di bidang perpajakan yang terjadi serta menemukan tersangkanya.*\n\n**Penyidik:** Pejabat PNS (PPNS) tertentu di lingkungan DJP yang diberi wewenang khusus (**Pasal 44 UU KUP**).\n\n#### 4.2 Tata Cara Penyidikan\n1. **Dasar penyidikan (bukti permulaan)** — dari Pemeriksaan Bukti Permulaan atau Laporan Kejadian.\n2. **Dimulainya penyidikan** — penyidik memberitahukan dimulainya penyidikan kepada Jaksa Penuntut Umum melalui Penyidik Pejabat POLRI dengan **Surat Pemberitahuan Dimulainya Penyidikan (SPDP)**.\n3. **Pelaksanaan tindakan penyidikan** — pemanggilan, penggeledahan, penyitaan, permintaan keterangan ahli, dll.\n4. Hasil → **berkas perkara** untuk penuntutan.\n\n#### 4.3 Asas *Ultimum Remedium*\nPidana adalah upaya **terakhir**; pemulihan kerugian negara diutamakan. UU KUP menyediakan dua \"pintu keluar\":\n\n#### 4.4 Pasal 44A — Pengungkapan Ketidakbenaran Perbuatan\nWP dapat mengungkapkan ketidakbenaran perbuatannya (Pasal 8 ayat (3)) **sepanjang SPDP belum dikirim ke Kejaksaan**, disertai pelunasan kekurangan pajak + sanksi. Konsekuensi: tidak dilakukan penyidikan.\n\n#### 4.5 Pasal 44B — Penghentian Penyidikan demi Penerimaan Negara **(VERSI UU HPP)**\n*Untuk kepentingan penerimaan negara, atas permintaan Menteri Keuangan, Jaksa Agung dapat menghentikan penyidikan tindak pidana di bidang perpajakan paling lama dalam jangka waktu 6 bulan sejak tanggal surat permintaan* (Pasal 44B ayat (1)).\n\nPenghentian baru dilakukan setelah WP/tersangka **melunasi kerugian pada pendapatan negara + sanksi denda berjenjang**:\n\n| Jenis perbuatan | Dasar | Sanksi denda |\n|---|---|---|\n| **Kealpaan** | Pasal 38 UU KUP | **1×** kerugian pada pendapatan negara |\n| **Kesengajaan** | Pasal 39 UU KUP | **3×** kerugian pada pendapatan negara |\n| **Faktur/bukti pajak fiktif** | Pasal 39A UU KUP | **4×** jumlah pajak dalam faktur/bukti pungut/potong/setor |\n\n##### Tabel Perbandingan Regulasi — Pasal 44B\n\n| Aspek | Sebelum UU HPP | Sesudah UU HPP (UU 7/2021) |\n|---|---|---|\n| Besaran denda | **4×** pokok pajak (flat) | **Berjenjang**: 1× (kealpaan) / 3× (sengaja) / 4× (faktur fiktif) |\n| Filosofi | Seragam | Proporsional dengan tingkat kesalahan |\n| Tahap pembayaran | Sampai pelimpahan | Pembayaran pada tahap penyidikan s.d. persidangan tetap diperhitungkan (Pasal 44B ayat (2a)) |\n\n> **Hak WP (versi disederhanakan dari slide lama):** WP dapat meminta penghentian penyidikan dengan (1) melunasi pokok pajak yang tidak/kurang dibayar; (2) membayar sanksi denda (berjenjang sesuai tabel di atas); dan (3) atas permintaan Menteri Keuangan, Jaksa Agung dapat menghentikan penyidikan.\n\n#### 4.6 Unsur Tindak Pidana & Wewenang Penyidik\n\n**Empat unsur tindak pidana** di bidang perpajakan:\n1. **Unsur subjek** — pelaku (WP, wakil, kuasa, pegawai, atau pihak lain — Pasal 43);\n2. **Unsur perbuatan** — tindakan/kelalaian yang dilarang UU;\n3. **Unsur akibat** — menimbulkan kerugian pada pendapatan negara;\n4. **Unsur kesalahan** — kealpaan (Pasal 38) atau kesengajaan (Pasal 39/39A).\n\n**Ruang lingkup tindak pidana perpajakan** bersumber pada UU KUP dan undang-undang pajak terkait. **PMK 17 Tahun 2025** mengatur tata cara penyidikan tindak pidana di bidang perpajakan, termasuk pelaksanaan kewenangan penyidik dan administrasi penyidikan.\n\n**Wewenang Penyidik (Pasal 44 ayat (2) UU KUP)**, antara lain: menerima/meneliti laporan; meneliti & mencari keterangan atas tindak pidana; meminta keterangan/bahan bukti; memeriksa pembukuan/catatan/dokumen; melakukan penggeledahan & penyitaan; meminta bantuan tenaga ahli; menyuruh berhenti/melarang seseorang meninggalkan ruangan saat pemeriksaan; memotret tersangka; memanggil orang untuk didengar keterangannya; menghentikan penyidikan; serta tindakan lain menurut hukum.\n\n#### 4.7 📊 Simulasi — Eskalasi Pemeriksaan, Pengungkapan & Sanksi\n\n**Kasus.** PT Sentosa diperiksa melalui **Pemeriksaan Lengkap** (jangka waktu pengujian 5 bulan, PMK 15/2025). Ditemukan SPT PPh Badan tidak benar yang **diduga disengaja**, dengan potensi kerugian pada pendapatan negara **Rp1.000.000.000**. Sebelum penyidikan dimulai (SPDP belum dikirim ke Penuntut Umum), WP mempertimbangkan dua jalur:\n\n| Jalur | Dasar | Yang dibayar | Total beban | Akibat |\n|---|---|---|---|---|\n| **A — Mengungkap lebih awal** | Pasal 8 ayat (3)/(3a) jo. 44A | Pokok Rp1.000.000.000 + **denda 100%** Rp1.000.000.000 | **Rp2.000.000.000** | Tidak dilakukan penyidikan |\n| **B — Lanjut, lalu hentikan di penyidikan** | Pasal 44B (untuk Pasal 39) | Kerugian Rp1.000.000.000 + **denda 3×** Rp3.000.000.000 | **Rp4.000.000.000** | Penyidikan dihentikan demi penerimaan negara |\n\n**Pelajaran:** konsisten dengan asas **ultimum remedium** — makin awal WP mengungkap (Jalur A), makin ringan bebannya (Rp2 M vs Rp4 M) dan terhindar dari risiko pidana badan. Bila WP tidak menempuh keduanya dan kasus berlanjut ke pengadilan, ancaman **Pasal 39 ayat (1)** setelah UU No. 1 Tahun 2026: pidana penjara paling lama 6 tahun dan/atau pidana denda paling banyak 4× jumlah pajak terutang yang tidak atau kurang dibayar.\n\n---\n\n### 5. Catatan Koreksi atas Materi/Slide Lama\n\n| Di slide lama tertulis | Yang benar |\n|---|---|\n| Penelitian = \"Pasal 1 ayat 39 UU KUP\" | **Pasal 1 angka 30 UU KUP** |\n| Jenis pemeriksaan dibedakan utama atas Lapangan & Kantor | Sejak **PMK 15/2025**: Lengkap, Terfokus, Spesifik |\n| Penghentian penyidikan Pasal 44B implisit denda lama | Versi UU HPP: denda **berjenjang 1×/3×/4×** |\n\n---\n\n### 6. Dasar Hukum Lengkap (Daftar Rujukan)\n\n1. **UU No. 6 Tahun 1983** tentang KUP sebagaimana telah beberapa kali diubah terakhir dengan **UU No. 6 Tahun 2023**; **UU No. 7 Tahun 2021 (HPP)** tetap merupakan perubahan substantif utama:\n   - Pasal 1 angka 20 (STP); angka 25 (Pemeriksaan); angka 30 (Penelitian); angka 31 (Penyidikan)\n   - Pasal 3 (kewajiban SPT benar, lengkap, jelas); Pasal 14 (STP)\n   - Pasal 38 (kealpaan); Pasal 39 (kesengajaan); Pasal 39A (faktur fiktif)\n   - Pasal 44 (penyidik); Pasal 44A (pengungkapan ketidakbenaran); Pasal 44B (penghentian penyidikan)\n2. **PMK No. 15 Tahun 2025** tentang Pemeriksaan Pajak (berlaku 14 Februari 2025) — Pasal 2 (jenis & tujuan), Pasal 6 (jangka waktu), Pasal 12 (batas data), Pasal 20 (LHP → SKP/STP).\n3. **PMK No. 81 Tahun 2024** tentang Ketentuan Perpajakan dalam rangka Pelaksanaan Coretax (berlaku 1 Januari 2025) — penerbitan SKP/STP/surat teguran secara elektronik.\n4. **PMK No. 111 Tahun 2025** (berlaku 1 Januari 2026) — dasar hukum SP2DK sebagai instrumen pengawasan kepatuhan (menggantikan pengaturan internal SE-05/PJ/2022).\n5. **PMK No. 17 Tahun 2025** — tata cara penyidikan tindak pidana di bidang perpajakan.\n\n*Sumber verifikasi: pajak.go.id (DJP), jdih.kemenkeu.go.id, DDTCNews, IKPI, Pajak.com, Ortax.*\n\n[↑ Kembali ke Daftar Isi](#daftar-isi)\n\n---",
      "pages": [
        {
          "chunkId": "TM08-P01",
          "page": 1,
          "blocks": [
            {
              "k": "h",
              "text": "TM 8 — Penelitian, Pemeriksaan, dan Penyidikan Pajak"
            },
            {
              "k": "p",
              "text": "**Mata Kuliah:** Perpajakan I\n**Dasar Hukum Utama:** UU KUP (UU No. 6/1983 sebagaimana terakhir diubah dengan UU No. 6/2023; perubahan substantif melalui UU HPP No. 7/2021) · PMK 15/2025 (Pemeriksaan) · PMK 81/2024 sebagaimana diubah terakhir dengan PMK 1/2026 (Coretax)\n**Diperbarui mengikuti regulasi s.d.:** Juni 2026"
            },
            {
              "k": "p",
              "text": "**Catatan baca:** Materi ini sudah disesuaikan dengan aturan terbaru. Beberapa angka pasal dan jenis pemeriksaan di slide lama (era PMK 17/2013) **sudah tidak berlaku** dan sudah dikoreksi di sini. Lihat bagian *Catatan Koreksi* di akhir."
            }
          ]
        },
        {
          "chunkId": "TM08-P02",
          "page": 2,
          "blocks": [
            {
              "k": "h",
              "text": "0. Peta Konsep: Eskalasi Pengawasan Pajak"
            },
            {
              "k": "p",
              "text": "Indonesia menganut **self-assessment** (WP menghitung, menyetor, dan melaporkan pajaknya sendiri). Karena itu DJP melakukan pengawasan secara berjenjang, dari yang paling ringan (administratif) sampai yang paling berat (pidana):"
            },
            {
              "k": "pre",
              "text": "PENELITIAN  →  PEMERIKSAAN  →  PEMERIKSAAN BUKTI PERMULAAN  →  PENYIDIKAN\n(administratif)  (menguji kepatuhan)   (cari indikasi pidana)      (ranah pidana)"
            },
            {
              "k": "pre",
              "text": "| Aspek | Penelitian | Pemeriksaan | Penyidikan |\n|---|---|---|---|\n| Sifat | Administratif | Administratif (uji kepatuhan) | Pidana (penegakan hukum) |\n| Dasar | Pasal 1 angka 30 UU KUP | Pasal 1 angka 25 UU KUP | Pasal 1 angka 31 UU KUP |\n| Pelaksana | Petugas/AR DJP | Tim Pemeriksa Pajak | Penyidik Pegawai Negeri Sipil (PPNS) DJP |\n| Produk utama | STP, SKPPKP; SP2DK = instrumen pengawasan kepatuhan awal | SKP (SKPKB/SKPKBT/SKPLB/SKPN), STP | Berkas perkara → penuntutan/pidana |"
            }
          ]
        },
        {
          "chunkId": "TM08-P03",
          "page": 3,
          "blocks": [
            {
              "k": "h",
              "text": "1. PENELITIAN"
            },
            {
              "k": "h",
              "text": "1.1 Definisi"
            },
            {
              "k": "p",
              "text": "Berdasarkan **Pasal 1 angka 30 UU KUP**, penelitian adalah *serangkaian kegiatan yang dilakukan untuk menilai kelengkapan pengisian Surat Pemberitahuan (SPT) dan lampiran-lampirannya, termasuk penilaian tentang kebenaran penulisan dan perhitungannya.*"
            },
            {
              "k": "h",
              "text": "1.2 Karakteristik"
            },
            {
              "k": "list",
              "items": [
                "Bersifat **administratif** — tidak perlu Surat Perintah Pemeriksaan dan tidak masuk ke pembukuan WP secara mendalam.",
                "Fokus pada uji **formal**: apakah SPT sudah **benar, lengkap, dan jelas** sebagaimana disyaratkan Pasal 3 UU KUP.",
                "Dalam praktik, DJP menyandingkan isi SPT dengan data dari pihak ketiga (kementerian/lembaga, otoritas negara lain)."
              ]
            },
            {
              "k": "h",
              "text": "1.3 Produk Hukum yang Dapat Terbit dari Penelitian"
            },
            {
              "k": "list",
              "items": [
                "**Surat Tagihan Pajak (STP)** — Pasal 14 UU KUP, definisi STP ada di **Pasal 1 angka 20 UU KUP**: surat untuk melakukan tagihan pajak dan/atau sanksi administrasi berupa bunga dan/atau denda.",
                "**SKPPKP** (Surat Keputusan Pengembalian Pendahuluan Kelebihan Pajak) — bila penelitian dilakukan dalam rangka **restitusi pendahuluan** (dibahas di TM 9)."
              ]
            },
            {
              "k": "p",
              "text": "**Catatan posisi SP2DK (jangan keliru):** **SP2DK** (Surat Permintaan Penjelasan atas Data dan/atau Keterangan) **bukan** produk dari penelitian SPT, melainkan instrumen **pengawasan kepatuhan** yang berada di tahap paling awal. Awalnya hanya diatur internal lewat **SE-05/PJ/2022**, kini diberi dasar hukum lebih kuat melalui **PMK No. 111 Tahun 2025**, yang menegaskan SP2DK **berbeda** dari pemeriksaan maupun pemeriksaan bukti permulaan. SP2DK adalah sarana klarifikasi sebelum eskalasi ke pemeriksaan."
            }
          ]
        },
        {
          "chunkId": "TM08-P04",
          "page": 4,
          "blocks": [
            {
              "k": "h",
              "text": "2. PEMERIKSAAN"
            },
            {
              "k": "h",
              "text": "2.1 Definisi"
            },
            {
              "k": "p",
              "text": "Berdasarkan **Pasal 1 angka 25 UU KUP**, pemeriksaan adalah *serangkaian kegiatan menghimpun dan mengolah data, keterangan, dan/atau bukti yang dilaksanakan secara objektif dan profesional berdasarkan suatu standar pemeriksaan untuk menguji kepatuhan pemenuhan kewajiban perpajakan dan/atau untuk tujuan lain dalam rangka melaksanakan ketentuan peraturan perundang-undangan perpajakan.*"
            },
            {
              "k": "h",
              "text": "2.2 Dasar Pelaksana Terbaru — PMK 15/2025"
            },
            {
              "k": "p",
              "text": "⚠️ **PENTING (perubahan besar 2025):** Tata cara pemeriksaan kini diatur **PMK No. 15 Tahun 2025**, ditetapkan **10 Februari 2025**, diundangkan dan mulai berlaku **14 Februari 2025**. PMK ini **menyederhanakan dan menggantikan** rezim lama (a.l. PMK 17/2013 dan perubahannya). Materi pemeriksaan yang masih menyebut \"Pemeriksaan Lapangan vs Pemeriksaan Kantor\" sebagai jenis utama **sudah usang**."
            },
            {
              "k": "h",
              "text": "2.3 Tujuan Pemeriksaan (Pasal 2 PMK 15/2025)"
            },
            {
              "k": "list",
              "items": [
                "**Menguji kepatuhan** pemenuhan kewajiban perpajakan; dan/atau",
                "**Tujuan lain** dalam rangka melaksanakan ketentuan peraturan perpajakan, misalnya:",
                "Penerbitan/penghapusan NPWP atau pengukuhan/pencabutan PKP secara jabatan;",
                "Penentuan saat produksi dimulai / WP di daerah terpencil / besarnya biaya tahap eksplorasi;",
                "Penagihan pajak; penyelesaian keberatan; pengumpulan bahan penyusunan Norma Penghitungan Penghasilan Neto."
              ]
            },
            {
              "k": "h",
              "text": "2.4 Jenis Pemeriksaan & Jangka Waktu — **(BERUBAH, PMK 15/2025)**"
            },
            {
              "k": "p",
              "text": "PMK 15/2025 mengganti pembagian lama (Lapangan/Kantor) menjadi **tiga tipe** berdasarkan kedalaman pengujian (Pasal 2) dengan jangka waktu di **Pasal 6**:"
            },
            {
              "k": "pre",
              "text": "| Jenis | Cakupan | Jangka Waktu Pengujian |\n|---|---|---|\n| **Pemeriksaan Lengkap** | Seluruh pos dalam SPT dan/atau SPOP secara mendalam | **5 bulan** |\n| **Pemeriksaan Terfokus** | Satu/beberapa pos dalam SPT/SPOP secara mendalam | **3 bulan** |\n| **Pemeriksaan Spesifik** | Satu/beberapa pos / data / kewajiban tertentu secara sederhana | **1 bulan** |\n| Pemeriksaan Spesifik atas **data konkret** (pajak belum/kurang dibayar) | — | **10 hari kerja** |"
            },
            {
              "k": "p",
              "text": "**Catatan jangka waktu:**\n- Jangka waktu dihitung **sejak Surat Pemberitahuan Pemeriksaan disampaikan** sampai **Surat Pemberitahuan Hasil Pemeriksaan (SPHP)** disampaikan.\n- Setelah SPHP, DJP punya maksimal **30 hari kerja** untuk menerbitkan **Laporan Hasil Pemeriksaan (LHP)**.\n- WP wajib memenuhi permintaan data **maksimal 1 bulan** (Pasal 12); dokumen yang diserahkan lewat batas dianggap tidak diberikan."
            },
            {
              "k": "h",
              "text": "Tabel Perbandingan Regulasi (WAJIB dipahami untuk ujian)"
            },
            {
              "k": "pre",
              "text": "| Aspek | Aturan Lama (PMK 17/2013 dkk) | Aturan Baru (PMK 15/2025) |\n|---|---|---|\n| Jenis pemeriksaan | Pemeriksaan **Lapangan** & **Kantor** | Pemeriksaan **Lengkap, Terfokus, Spesifik** |\n| Dasar pembedaan | Tempat pelaksanaan | Kedalaman & cakupan pos yang diuji |\n| Jangka waktu | Bervariasi (mis. lapangan 6 bln, kantor 4 bln) | 5 / 3 / 1 bulan (+10 hari kerja untuk data konkret) |\n| Batas pemenuhan data WP | Lebih longgar | Tegas: maksimal **1 bulan** |"
            },
            {
              "k": "h",
              "text": "2.5 Standar Pemeriksaan"
            },
            {
              "k": "p",
              "text": "PMK 15/2025 mempertahankan tiga kelompok standar:"
            },
            {
              "k": "p",
              "text": "**a. Standar Umum** (menyangkut pribadi & mutu pemeriksa):\n- Telah mendapat pendidikan/pelatihan teknis cukup dan terampil; menggunakan keterampilannya secara cermat dan seksama;\n- Jujur, bersih dari tindakan tercela, mengutamakan kepentingan negara;\n- Taat pada ketentuan perundang-undangan termasuk batas waktu;\n- Bila perlu, pemeriksaan dapat dibantu **tenaga ahli** dari luar DJP yang ditunjuk DJP (mis. penerjemah, ahli TI, pengacara)."
            },
            {
              "k": "p",
              "text": "**b. Standar Pelaksanaan:**\n- Didahului persiapan yang baik, sesuai tujuan, dengan pengawasan seksama;\n- Luas pemeriksaan (*audit scope*) dikembangkan lewat pencocokan data, pengamatan, permintaan keterangan, konfirmasi, dan teknik sampling;\n- Temuan harus didasarkan pada **bukti kompeten yang cukup**;\n- Dilakukan oleh **tim** (supervisor, ketua tim, anggota); didokumentasikan dalam **Kertas Kerja Pemeriksaan (KKP)**;\n- Dapat dilaksanakan di kantor DJP, tempat usaha/tinggal WP, atau tempat lain; pada jam kerja, dapat dilanjutkan di luar jam kerja."
            },
            {
              "k": "p",
              "text": "**c. Standar Pelaporan:**\n- LHP disusun ringkas dan jelas, memuat ruang lingkup sesuai tujuan, kesimpulan yang didukung temuan kuat, dan pengungkapan informasi lain yang terkait;\n- LHP menjadi **dasar penerbitan SKP dan/atau STP** (Pasal 20 PMK 15/2025)."
            },
            {
              "k": "h",
              "text": "2.6 Tahapan Pemeriksaan"
            },
            {
              "k": "list",
              "items": [
                "**Penyampaian Surat Pemberitahuan Pemeriksaan** kepada WP.",
                "**Pengujian** (pengumpulan & pengolahan data, peminjaman dokumen).",
                "**SPHP** — hasil pemeriksaan diberitahukan ke WP.",
                "**Pembahasan Akhir Hasil Pemeriksaan** (*closing conference*) — WP berhak menanggapi.",
                "**LHP** → dasar penerbitan **SKP** (SKPKB/SKPKBT/SKPLB/SKPN) dan/atau **STP**."
              ]
            },
            {
              "k": "h",
              "text": "2.7 Hak & Kewajiban WP dalam Pemeriksaan (PMK 15/2025)"
            },
            {
              "k": "p",
              "text": "**Hak WP:**\n- Meminta Pemeriksa memperlihatkan **tanda pengenal** dan **Surat Perintah Pemeriksaan**;\n- Meminta penjelasan tentang **alasan dan tujuan** pemeriksaan;\n- Menerima **SPHP** dan menghadiri **Pembahasan Akhir Hasil Pemeriksaan**;\n- Mengajukan permohonan **pembahasan dengan Tim Quality Assurance** bila terdapat perbedaan pendapat dengan pemeriksa;\n- Memberikan tanggapan tertulis atas SPHP."
            },
            {
              "k": "p",
              "text": "**Kewajiban WP:**\n- Memperlihatkan/meminjamkan **buku, catatan, dan dokumen** yang menjadi dasar pembukuan serta dokumen lain yang berhubungan;\n- Memberi kesempatan **memasuki tempat/ruang** yang dipandang perlu;\n- Memberi **bantuan/keterangan** yang diperlukan secara lisan/tertulis;\n- Memenuhi permintaan data **maksimal 1 bulan** (lewat batas → dianggap tidak diberikan)."
            }
          ]
        },
        {
          "chunkId": "TM08-P05",
          "page": 5,
          "blocks": [
            {
              "k": "h",
              "text": "3. PEMERIKSAAN BUKTI PERMULAAN (Bukper)"
            },
            {
              "k": "p",
              "text": "Merupakan **jembatan** antara ranah administratif dan ranah pidana.\n- **Bukti Permulaan** = keadaan/perbuatan/bukti (termasuk keterangan, tulisan, benda) yang memberi petunjuk adanya **dugaan kuat** tindak pidana di bidang perpajakan.\n- **Pemeriksaan Bukti Permulaan** = pemeriksaan untuk mendapatkan bukti permulaan tersebut.\n- Bila ditemukan bukti permulaan yang cukup → ditindaklanjuti dengan **Penyidikan**.\n- Sebelum penyidikan dimulai, WP masih dapat memanfaatkan **Pasal 8 ayat (3) jo. Pasal 44A UU KUP** (pengungkapan ketidakbenaran perbuatan) — lihat butir 4.4."
            }
          ]
        },
        {
          "chunkId": "TM08-P06",
          "page": 6,
          "blocks": [
            {
              "k": "h",
              "text": "4. PENYIDIKAN TINDAK PIDANA DI BIDANG PERPAJAKAN"
            },
            {
              "k": "h",
              "text": "4.1 Definisi & Tujuan"
            },
            {
              "k": "p",
              "text": "Berdasarkan **Pasal 1 angka 31 UU KUP**, penyidikan adalah *serangkaian tindakan yang dilakukan penyidik untuk mencari serta mengumpulkan bukti yang dengan bukti itu membuat terang tindak pidana di bidang perpajakan yang terjadi serta menemukan tersangkanya.*"
            },
            {
              "k": "p",
              "text": "**Penyidik:** Pejabat PNS (PPNS) tertentu di lingkungan DJP yang diberi wewenang khusus (**Pasal 44 UU KUP**)."
            },
            {
              "k": "h",
              "text": "4.2 Tata Cara Penyidikan"
            },
            {
              "k": "list",
              "items": [
                "**Dasar penyidikan (bukti permulaan)** — dari Pemeriksaan Bukti Permulaan atau Laporan Kejadian.",
                "**Dimulainya penyidikan** — penyidik memberitahukan dimulainya penyidikan kepada Jaksa Penuntut Umum melalui Penyidik Pejabat POLRI dengan **Surat Pemberitahuan Dimulainya Penyidikan (SPDP)**.",
                "**Pelaksanaan tindakan penyidikan** — pemanggilan, penggeledahan, penyitaan, permintaan keterangan ahli, dll.",
                "Hasil → **berkas perkara** untuk penuntutan."
              ]
            },
            {
              "k": "h",
              "text": "4.3 Asas *Ultimum Remedium*"
            },
            {
              "k": "p",
              "text": "Pidana adalah upaya **terakhir**; pemulihan kerugian negara diutamakan. UU KUP menyediakan dua \"pintu keluar\":"
            },
            {
              "k": "h",
              "text": "4.4 Pasal 44A — Pengungkapan Ketidakbenaran Perbuatan"
            },
            {
              "k": "p",
              "text": "WP dapat mengungkapkan ketidakbenaran perbuatannya (Pasal 8 ayat (3)) **sepanjang SPDP belum dikirim ke Kejaksaan**, disertai pelunasan kekurangan pajak + sanksi. Konsekuensi: tidak dilakukan penyidikan."
            },
            {
              "k": "h",
              "text": "4.5 Pasal 44B — Penghentian Penyidikan demi Penerimaan Negara **(VERSI UU HPP)**"
            },
            {
              "k": "p",
              "text": "*Untuk kepentingan penerimaan negara, atas permintaan Menteri Keuangan, Jaksa Agung dapat menghentikan penyidikan tindak pidana di bidang perpajakan paling lama dalam jangka waktu 6 bulan sejak tanggal surat permintaan* (Pasal 44B ayat (1))."
            },
            {
              "k": "p",
              "text": "Penghentian baru dilakukan setelah WP/tersangka **melunasi kerugian pada pendapatan negara + sanksi denda berjenjang**:"
            },
            {
              "k": "pre",
              "text": "| Jenis perbuatan | Dasar | Sanksi denda |\n|---|---|---|\n| **Kealpaan** | Pasal 38 UU KUP | **1×** kerugian pada pendapatan negara |\n| **Kesengajaan** | Pasal 39 UU KUP | **3×** kerugian pada pendapatan negara |\n| **Faktur/bukti pajak fiktif** | Pasal 39A UU KUP | **4×** jumlah pajak dalam faktur/bukti pungut/potong/setor |"
            },
            {
              "k": "h",
              "text": "Tabel Perbandingan Regulasi — Pasal 44B"
            },
            {
              "k": "pre",
              "text": "| Aspek | Sebelum UU HPP | Sesudah UU HPP (UU 7/2021) |\n|---|---|---|\n| Besaran denda | **4×** pokok pajak (flat) | **Berjenjang**: 1× (kealpaan) / 3× (sengaja) / 4× (faktur fiktif) |\n| Filosofi | Seragam | Proporsional dengan tingkat kesalahan |\n| Tahap pembayaran | Sampai pelimpahan | Pembayaran pada tahap penyidikan s.d. persidangan tetap diperhitungkan (Pasal 44B ayat (2a)) |"
            },
            {
              "k": "p",
              "text": "**Hak WP (versi disederhanakan dari slide lama):** WP dapat meminta penghentian penyidikan dengan (1) melunasi pokok pajak yang tidak/kurang dibayar; (2) membayar sanksi denda (berjenjang sesuai tabel di atas); dan (3) atas permintaan Menteri Keuangan, Jaksa Agung dapat menghentikan penyidikan."
            },
            {
              "k": "h",
              "text": "4.6 Unsur Tindak Pidana & Wewenang Penyidik"
            },
            {
              "k": "p",
              "text": "**Empat unsur tindak pidana** di bidang perpajakan:\n1. **Unsur subjek** — pelaku (WP, wakil, kuasa, pegawai, atau pihak lain — Pasal 43);\n2. **Unsur perbuatan** — tindakan/kelalaian yang dilarang UU;\n3. **Unsur akibat** — menimbulkan kerugian pada pendapatan negara;\n4. **Unsur kesalahan** — kealpaan (Pasal 38) atau kesengajaan (Pasal 39/39A)."
            },
            {
              "k": "p",
              "text": "**Ruang lingkup tindak pidana perpajakan** bersumber pada UU KUP dan undang-undang pajak terkait. **PMK 17 Tahun 2025** mengatur tata cara penyidikan tindak pidana di bidang perpajakan, termasuk pelaksanaan kewenangan penyidik dan administrasi penyidikan."
            },
            {
              "k": "p",
              "text": "**Wewenang Penyidik (Pasal 44 ayat (2) UU KUP)**, antara lain: menerima/meneliti laporan; meneliti & mencari keterangan atas tindak pidana; meminta keterangan/bahan bukti; memeriksa pembukuan/catatan/dokumen; melakukan penggeledahan & penyitaan; meminta bantuan tenaga ahli; menyuruh berhenti/melarang seseorang meninggalkan ruangan saat pemeriksaan; memotret tersangka; memanggil orang untuk didengar keterangannya; menghentikan penyidikan; serta tindakan lain menurut hukum."
            },
            {
              "k": "h",
              "text": "4.7 📊 Simulasi — Eskalasi Pemeriksaan, Pengungkapan & Sanksi"
            },
            {
              "k": "p",
              "text": "**Kasus.** PT Sentosa diperiksa melalui **Pemeriksaan Lengkap** (jangka waktu pengujian 5 bulan, PMK 15/2025). Ditemukan SPT PPh Badan tidak benar yang **diduga disengaja**, dengan potensi kerugian pada pendapatan negara **Rp1.000.000.000**. Sebelum penyidikan dimulai (SPDP belum dikirim ke Penuntut Umum), WP mempertimbangkan dua jalur:"
            },
            {
              "k": "pre",
              "text": "| Jalur | Dasar | Yang dibayar | Total beban | Akibat |\n|---|---|---|---|---|\n| **A — Mengungkap lebih awal** | Pasal 8 ayat (3)/(3a) jo. 44A | Pokok Rp1.000.000.000 + **denda 100%** Rp1.000.000.000 | **Rp2.000.000.000** | Tidak dilakukan penyidikan |\n| **B — Lanjut, lalu hentikan di penyidikan** | Pasal 44B (untuk Pasal 39) | Kerugian Rp1.000.000.000 + **denda 3×** Rp3.000.000.000 | **Rp4.000.000.000** | Penyidikan dihentikan demi penerimaan negara |"
            },
            {
              "k": "p",
              "text": "**Pelajaran:** konsisten dengan asas **ultimum remedium** — makin awal WP mengungkap (Jalur A), makin ringan bebannya (Rp2 M vs Rp4 M) dan terhindar dari risiko pidana badan. Bila WP tidak menempuh keduanya dan kasus berlanjut ke pengadilan, ancaman **Pasal 39 ayat (1)** setelah UU No. 1 Tahun 2026: pidana penjara paling lama 6 tahun dan/atau pidana denda paling banyak 4× jumlah pajak terutang yang tidak atau kurang dibayar."
            }
          ]
        },
        {
          "chunkId": "TM08-P07",
          "page": 7,
          "blocks": [
            {
              "k": "h",
              "text": "5. Catatan Koreksi atas Materi/Slide Lama"
            },
            {
              "k": "pre",
              "text": "| Di slide lama tertulis | Yang benar |\n|---|---|\n| Penelitian = \"Pasal 1 ayat 39 UU KUP\" | **Pasal 1 angka 30 UU KUP** |\n| Jenis pemeriksaan dibedakan utama atas Lapangan & Kantor | Sejak **PMK 15/2025**: Lengkap, Terfokus, Spesifik |\n| Penghentian penyidikan Pasal 44B implisit denda lama | Versi UU HPP: denda **berjenjang 1×/3×/4×** |"
            }
          ]
        },
        {
          "chunkId": "TM08-P08",
          "page": 8,
          "blocks": [
            {
              "k": "h",
              "text": "6. Dasar Hukum Lengkap (Daftar Rujukan)"
            },
            {
              "k": "list",
              "items": [
                "**UU No. 6 Tahun 1983** tentang KUP sebagaimana telah beberapa kali diubah terakhir dengan **UU No. 6 Tahun 2023**; **UU No. 7 Tahun 2021 (HPP)** tetap merupakan perubahan substantif utama:",
                "Pasal 1 angka 20 (STP); angka 25 (Pemeriksaan); angka 30 (Penelitian); angka 31 (Penyidikan)",
                "Pasal 3 (kewajiban SPT benar, lengkap, jelas); Pasal 14 (STP)",
                "Pasal 38 (kealpaan); Pasal 39 (kesengajaan); Pasal 39A (faktur fiktif)",
                "Pasal 44 (penyidik); Pasal 44A (pengungkapan ketidakbenaran); Pasal 44B (penghentian penyidikan)",
                "**PMK No. 15 Tahun 2025** tentang Pemeriksaan Pajak (berlaku 14 Februari 2025) — Pasal 2 (jenis & tujuan), Pasal 6 (jangka waktu), Pasal 12 (batas data), Pasal 20 (LHP → SKP/STP).",
                "**PMK No. 81 Tahun 2024** tentang Ketentuan Perpajakan dalam rangka Pelaksanaan Coretax (berlaku 1 Januari 2025) — penerbitan SKP/STP/surat teguran secara elektronik.",
                "**PMK No. 111 Tahun 2025** (berlaku 1 Januari 2026) — dasar hukum SP2DK sebagai instrumen pengawasan kepatuhan (menggantikan pengaturan internal SE-05/PJ/2022).",
                "**PMK No. 17 Tahun 2025** — tata cara penyidikan tindak pidana di bidang perpajakan."
              ]
            },
            {
              "k": "p",
              "text": "*Sumber verifikasi: pajak.go.id (DJP), jdih.kemenkeu.go.id, DDTCNews, IKPI, Pajak.com, Ortax.*"
            },
            {
              "k": "p",
              "text": "[↑ Kembali ke Daftar Isi](#daftar-isi)"
            }
          ]
        }
      ]
    },
    {
      "tm": 9,
      "title": "TM 9 — Penetapan & Ketetapan Pajak, Restitusi Pajak",
      "sourcePdf": "Materi_Perpajakan_I_TM8-14_Kompilasi (2).md",
      "sourceFile": "Materi_Perpajakan_I_TM8-14_Kompilasi (2).md",
      "lawBasis": "UU KUP (UU No. 6/1983 sebagaimana terakhir diubah dengan UU No. 6/2023; perubahan substantif melalui UU HPP No. 7/2021) · PMK 81/2024 sebagaimana diubah terakhir dengan PMK 1/2026 (Coretax) · PMK 28/2026 (pengembalian pendahuluan) · KMK tarif bunga bulanan",
      "body_markdown": "## TM 9 — Penetapan & Ketetapan Pajak, Restitusi Pajak\n\n**Mata Kuliah:** Perpajakan I\n**Dasar Hukum Utama:** UU KUP (UU No. 6/1983 sebagaimana terakhir diubah dengan UU No. 6/2023; perubahan substantif melalui UU HPP No. 7/2021) · PMK 81/2024 sebagaimana diubah terakhir dengan PMK 1/2026 (Coretax) · PMK 28/2026 (pengembalian pendahuluan) · KMK tarif bunga (bulanan)\n**Diperbarui mengikuti regulasi s.d.:** Juni 2026\n\n---\n\n### 0. Konsep Dasar: Penetapan vs Ketetapan\n\n- **Penetapan pajak** = proses menentukan besarnya pajak terutang.\n- **Ketetapan pajak** = produk hukum (surat) hasil dari proses tersebut.\n\nIndonesia menganut **self-assessment**: pajak terutang pada dasarnya ditetapkan sendiri oleh WP melalui SPT. DJP **baru menerbitkan surat ketetapan** apabila, berdasarkan **penelitian** atau **pemeriksaan**, ditemukan ketidaksesuaian (kurang bayar, lebih bayar, atau nihil). Inilah unsur *official assessment* yang bersifat **korektif**.\n\n```\nSPT (self-assessment)  →  Penelitian / Pemeriksaan  →  STP / SKP (official assessment, korektif)\n```\n\n---\n\n### 1. SURAT TAGIHAN PAJAK (STP)\n\n#### 1.1 Definisi & Kekuatan Hukum\n**Pasal 1 angka 20 UU KUP**: STP adalah surat untuk melakukan tagihan pajak dan/atau sanksi administrasi berupa bunga dan/atau denda. Diatur dalam **Pasal 14 UU KUP**.\n> STP memiliki **kekuatan hukum yang sama dengan SKP**, sehingga penagihannya dapat dilakukan dengan Surat Paksa.\n\n#### 1.2 Sebab Diterbitkannya STP (Pasal 14 ayat (1) UU KUP), antara lain:\n- PPh dalam tahun berjalan tidak/kurang dibayar;\n- Hasil penelitian SPT terdapat kekurangan bayar akibat **salah tulis dan/atau salah hitung**;\n- WP dikenai sanksi administrasi berupa **bunga dan/atau denda**;\n- Pengusaha yang wajib dikukuhkan sebagai PKP tetapi tidak melakukannya, atau membuat faktur pajak tidak lengkap/tidak tepat waktu.\n\n---\n\n### 2. SURAT KETETAPAN PAJAK (SKP)\n\n**Pasal 1 angka 15 UU KUP**: SKP meliputi **SKPKB, SKPKBT, SKPN, dan SKPLB**. SKP diterbitkan berdasarkan **LHP** (Pasal 20 PMK 15/2025).\n\n#### 2.1 SKPKB — Surat Ketetapan Pajak Kurang Bayar\n- **Dasar:** Pasal 1 angka 16 & **Pasal 13 UU KUP**.\n- **Isi:** menentukan pokok pajak, kredit pajak, kekurangan pokok pajak, **sanksi administrasi**, dan jumlah yang masih harus dibayar.\n- **Terbit bila** (Pasal 13 ayat (1)): berdasarkan pemeriksaan/keterangan lain pajak kurang/tidak dibayar; SPT tidak disampaikan setelah ditegur tertulis; PKP tidak seharusnya diberi restitusi/kompensasi; tidak menyelenggarakan pembukuan; dsb.\n- **Sanksi:**\n  - **Bunga Pasal 13 ayat (2)** — untuk kurang bayar hasil pemeriksaan (Pasal 13(1) huruf a & e): tarif `(suku bunga acuan + 15%)/12`, maks 24 bulan (lihat §4).\n  - **Pasal 13 ayat (3)** — untuk pelanggaran Pasal 13(1) huruf b, c, d (mis. SPT tidak disampaikan setelah ditegur; tidak menyelenggarakan pembukuan). Sejak UU HPP sanksinya **campuran**, bukan kenaikan semata:\n    - **Bunga** `(suku bunga acuan + 20%)/12` (Pasal 13(3c)) untuk PPh yang dibayar sendiri serta PPh yang tidak/kurang dipotong/dipungut;\n    - **Kenaikan 75%** untuk PPh yang dipotong/dipungut tetapi tidak/kurang disetor, serta PPN & PPnBM.\n  - *Catatan UU HPP:* sanksi Pasal 13(3) **diturunkan** dari ketentuan lama (dulu kenaikan 50% PPh sendiri / 100% PPh potput / 100% PPN-PPnBM).\n- **Daluwarsa penerbitan:** **5 tahun** sejak saat terutangnya pajak / berakhirnya Masa, Bagian Tahun, atau Tahun Pajak.\n\n#### 2.2 SKPKBT — Surat Ketetapan Pajak Kurang Bayar Tambahan\n- **Dasar:** Pasal 1 angka 17 & **Pasal 15 UU KUP**.\n- **Terbit bila** ditemukan **data baru** (*novum*) yang mengakibatkan penambahan pajak terutang, setelah penerbitan SKPKB (umumnya melalui **pemeriksaan ulang** — Pasal 25 ayat (2) PMK 15/2025).\n- **Sanksi:** kenaikan **100%** dari jumlah kekurangan pajak (Pasal 15 ayat (2)), kecuali SKPKBT terbit atas keterangan tertulis WP atas kehendak sendiri (sepanjang belum dilakukan tindakan pemeriksaan).\n- **Daluwarsa:** **5 tahun**.\n\n#### 2.3 SKPLB — Surat Ketetapan Pajak Lebih Bayar\n- **Dasar:** Pasal 1 angka 18 & **Pasal 17 / 17B UU KUP**.\n- **Terbit bila** jumlah kredit pajak atau pajak yang dibayar **lebih besar** daripada pajak terutang (kelebihan pembayaran).\n- Menjadi dasar bagi WP untuk memperoleh **restitusi** (§5).\n\n#### 2.4 SKPN — Surat Ketetapan Pajak Nihil\n- **Dasar:** **Pasal 17A UU KUP**.\n- **Terbit bila** jumlah kredit pajak / pajak dibayar **sama dengan** pajak terutang, atau pajak tidak terutang dan tidak ada kredit pajak.\n\n##### Ringkasan Jenis SKP\n\n| Jenis | Kondisi | Dasar Hukum | Sanksi khas |\n|---|---|---|---|\n| **SKPKB** | Pajak kurang dibayar | Pasal 13 | Bunga Pasal 13(2) / Kenaikan Pasal 13(3) |\n| **SKPKBT** | Ada data baru → tambahan pajak | Pasal 15 | Kenaikan **100%** |\n| **SKPLB** | Pajak lebih dibayar | Pasal 17 / 17B | — (memicu restitusi) |\n| **SKPN** | Pajak terutang = kredit pajak | Pasal 17A | — |\n\n#### 2.5 Pasal 13A — Kealpaan Pertama Kali (Sanksi Pengganti Pidana)\nSebagai wujud *ultimum remedium*, WP yang **karena kealpaan** tidak menyampaikan SPT atau menyampaikan SPT yang isinya tidak benar/tidak lengkap sehingga merugikan pendapatan negara, **untuk pertama kali tidak dikenai sanksi pidana**, melainkan **sanksi administrasi berupa kenaikan 200%** dari jumlah pajak yang kurang dibayar (ditagih melalui SKPKB). Dasar: **Pasal 13A UU KUP**.\n\n---\n\n### 3. Era Coretax — PMK 81/2024 sebagaimana diubah terakhir dengan PMK 1/2026 (konteks prosedural terbaru)\n\n- **PMK No. 81 Tahun 2024 sebagaimana diubah terakhir dengan PMK No. 1 Tahun 2026** (PMK 81/2024 ditetapkan 14 Oktober 2024 dan berlaku **1 Januari 2025**) mengatur ketentuan perpajakan dalam rangka **Coretax** dan berdampak pada 42 peraturan.\n- **STP, SKP, dan surat teguran kini dapat diterbitkan secara elektronik** melalui sistem Coretax (dengan tanda tangan digital), tetap ada opsi manual via pos bila kendala teknis.\n- **Jatuh tempo penyetoran pajak diseragamkan** menjadi **tanggal 15 bulan berikutnya** setelah Masa Pajak berakhir.\n- Permohonan **restitusi** kini diajukan melalui Coretax; hasil pemeriksaan dituangkan dalam SKPLB (lih. Pasal 137 PMK 81/2024 sebagaimana diubah terakhir dengan PMK 1/2026).\n\n---\n\n### 4. SANKSI ADMINISTRASI — **(BERUBAH TOTAL sejak UU Cipta Kerja & UU HPP)**\n\n> ⚠️ **Konsep paling sering keliru.** Sanksi bunga **bukan lagi flat 2% per bulan**. Sejak UU Cipta Kerja (2020) dan ditegaskan UU HPP, **tarif bunga bersifat dinamis** dan ditetapkan **Menteri Keuangan via KMK setiap bulan**.\n\n#### 4.1 Formula Tarif Bunga\n```\nTarif bunga per bulan = (Suku Bunga Acuan + Uplift Factor) ÷ 12\n```\n- **Suku bunga acuan** mengacu pada kondisi pasar (mengikuti suku bunga acuan/yield SBN; ditetapkan KMK bulanan).\n- **Uplift factor** berbeda per pasal (makin berat pelanggaran, makin tinggi uplift).\n- **Jumlah bulan maksimal: 24 bulan**. Bagian dari bulan dihitung penuh **1 bulan**.\n\n#### 4.2 Tingkat Uplift per Pasal\n\n| Pasal UU KUP | Jenis sanksi | Uplift |\n|---|---|---|\n| Pasal 19 (1)(2)(3) | Bunga penagihan / angsuran / penundaan | **0%** |\n| Pasal 8(2), 8(2a), 9(2a), 9(2b), 14(3) | Pembetulan SPT / terlambat setor / salah tulis-hitung | **+5%** |\n| Pasal 8(5) | Pengungkapan ketidakbenaran pengisian SPT | **+10%** |\n| Pasal 13(2) & 13(2a) | Kurang bayar berdasarkan pemeriksaan (SKPKB) | **+15%** |\n| Pasal 13(3) huruf a & b dan 13(3b) → tarif via 13(3c) | Bunga atas PPh sendiri / PPh tak dipotong-dipungut & pelanggaran tertentu | **+20%** |\n\n> Catatan: untuk pelanggaran Pasal 13(1) huruf b/c/d, selain bunga di atas terdapat pula sanksi **kenaikan 75%** (PPh dipotong/dipungut tak disetor, serta PPN/PPnBM) — bukan dihitung dengan formula uplift. Lihat §2.1.\n\n> Tarif berubah tiap bulan. **Contoh** (Maret 2025, KMK terkait): Pasal 19 = 0,57%; Pasal 9(2a)/(2b) & 14(3) = 0,99%; Pasal 8(5) = 1,41%; Pasal 13(2)/(2a) = 1,82%; Pasal 13(3b) = 2,24% per bulan. *Selalu cek KMK bulan berjalan untuk angka aktual.*\n\n##### Tabel Perbandingan Regulasi — Sanksi Bunga\n\n| Aspek | Aturan Lama (pra-UU Cipta Kerja) | Aturan Baru (UU CK & UU HPP) |\n|---|---|---|\n| Tarif bunga | **Flat 2%** per bulan | **(Suku bunga acuan + uplift) ÷ 12**, dinamis bulanan |\n| Penetapan | Tetap di UU | KMK setiap bulan |\n| Batas waktu | Maks 24 bulan | Maks 24 bulan |\n| Keadilan | Seragam | Proporsional dengan jenis pelanggaran |\n\n#### 4.3 📊 Simulasi Numerik — Sanksi Bunga SKPKB (Pasal 13 ayat (2))\n\n**Diketahui:**\n- PT Maju diperiksa atas SPT Tahunan PPh Badan 2023; ditemukan **kurang bayar Rp200.000.000**.\n- SKPKB terbit dengan keterlambatan dihitung **10 bulan** dari saat terutangnya pajak.\n- Asumsi tarif bunga Pasal 13(2) saat penerbitan = **1,82%** per bulan (contoh Maret 2025).\n\n**Proses Penghitungan:**\n1. Sanksi bunga = 1,82% × 10 bulan × Rp200.000.000 = **Rp36.400.000**\n2. Total yang harus dibayar = Pokok Rp200.000.000 + Bunga Rp36.400.000 = **Rp236.400.000**\n\n**Kesimpulan:** WP membayar pokok + bunga Rp236.400.000. Andai keterlambatan > 24 bulan, jumlah bulan sanksi tetap **dibatasi 24 bulan**.\n**Dasar Hukum:** Pasal 13 ayat (2) UU KUP jo. UU HPP; tarif per KMK bulan berjalan.\n\n---\n\n### 5. RESTITUSI PAJAK (Pengembalian Kelebihan Pembayaran Pajak)\n\n#### 5.1 Definisi\nRestitusi adalah pengembalian kelebihan pembayaran pajak kepada WP karena pajak yang dibayar/kredit pajak **lebih besar** daripada pajak terutang, atau karena pembayaran pajak yang **seharusnya tidak terutang**. Dasar: **Pasal 17, 17 ayat (2), dan 11 UU KUP**.\n\n#### 5.2 Dua Jalur Restitusi\n\n##### Jalur A — Restitusi Biasa (melalui **Pemeriksaan**) — Pasal 17B UU KUP\n- Dapat diajukan oleh **setiap WP** yang status SPT-nya lebih bayar dan memilih direstitusi.\n- DJP melakukan **pemeriksaan** → terbit **SKPLB**.\n- **Jangka waktu: paling lama 12 bulan** sejak permohonan diterima lengkap (Pasal 17B ayat (1)).\n- Jika lewat 12 bulan DJP belum memberi keputusan → permohonan **dianggap dikabulkan** dan SKPLB diterbitkan.\n\n##### Jalur B — Pengembalian Pendahuluan (melalui **Penelitian**, tanpa pemeriksaan) → terbit **SKPPKP**\nHanya untuk WP tertentu; lebih cepat:\n\n| Subjek | Dasar | Keterangan |\n|---|---|---|\n| **WP Kriteria Tertentu** (\"WP Patuh\") | Pasal 17C UU KUP | PPh: maks **3 bulan**; PPN: maks **1 bulan** |\n| **WP Persyaratan Tertentu** | Pasal 17D UU KUP | Batas nominal lebih bayar tertentu |\n| **PKP Berisiko Rendah** | Pasal 9 ayat (4c) UU PPN | Mis. emiten bursa, BUMN/BUMD, Mitra Utama Kepabeanan |\n\n**Syarat WP Kriteria Tertentu (Pasal 17C)**, a.l.:\n- Tepat waktu menyampaikan SPT;\n- Tidak punya tunggakan pajak (kecuali yang diizinkan diangsur/ditunda);\n- Laporan keuangan diaudit Akuntan Publik dengan opini **Wajar Tanpa Pengecualian (WTP)** selama **3 tahun** berturut-turut;\n- Tidak pernah dipidana di bidang perpajakan dalam **5 tahun** terakhir.\n\n**Catatan batas nominal terbaru (peraturan pelaksana):**\n- **WP orang pribadi persyaratan tertentu** dengan lebih bayar s.d. **Rp100 juta** → keputusan paling lama **15 hari kerja** berdasarkan PMK 28/2026.\n- **WP badan persyaratan tertentu**: peredaran usaha s.d. Rp50 miliar dan lebih bayar s.d. Rp1 miliar; keputusan paling lama 1 bulan. **PKP persyaratan tertentu**: penyerahan s.d. Rp4,2 miliar dan lebih bayar PPN s.d. Rp1 miliar per Masa Pajak; keputusan paling lama 1 bulan.\n- Sejak 1 Mei 2026, dasar pelaksana pengembalian pendahuluan adalah **PMK 28 Tahun 2026**, yang mencabut PMK 39/2018, PMK 117/2019, PMK 209/2021, dan PMK 119/2024.\n\n##### Tabel Perbandingan — Restitusi Biasa vs Pendahuluan\n\n| Aspek | Restitusi Biasa (Pasal 17B) | Pengembalian Pendahuluan (17C/17D/9(4c) PPN) |\n|---|---|---|\n| Mekanisme | **Pemeriksaan** | **Penelitian** |\n| Produk hukum | **SKPLB** | **SKPPKP** |\n| Subjek | Semua WP lebih bayar | WP tertentu (Patuh / Persyaratan Tertentu / PKP Risiko Rendah) |\n| Kecepatan | Maks 12 bulan | 15 hari kerja s.d. 3 bulan |\n\n#### 5.3 Imbalan Bunga\nBila DJP **terlambat** menerbitkan keputusan restitusi/SKPLB, WP berhak atas **imbalan bunga** (Pasal 11 ayat (3), Pasal 17B ayat (3) & (4), Pasal 27B UU KUP).\n- Tarif imbalan = **Suku bunga acuan ÷ 12** (**tanpa uplift**), maksimal **24 bulan**.\n\n#### 5.4 Konsekuensi Pengembalian Pendahuluan (post-audit)\nKarena pendahuluan diberikan **tanpa pemeriksaan**, DJP tetap **berhak memeriksa** kemudian. Bila hasil pemeriksaan menunjukkan kekurangan → terbit **SKPKB**. Besaran sanksinya **berbeda** tergantung jalur — ini sering disalahpahami:\n\n| Jalur pendahuluan | Sanksi atas SKPKB post-audit | Dasar |\n|---|---|---|\n| **PPh — WP Kriteria Tertentu (17C)** | Kenaikan **100%** (Pasal 17C ayat (5)) | Pasal 17C(5) UU KUP |\n| **PPh — WP Persyaratan Tertentu (17D)** | Kenaikan **100%** (Pasal 17D ayat (5)); untuk **WP OP s.d. Rp100 juta** dikurangi (via Pasal 36(1)(a) jo. Per-05/PJ/2023) sehingga **setara bunga Pasal 13(2)** | Pasal 17D(5); Per-05/PJ/2023 |\n| **PPN — PKP Berisiko Rendah (9 ayat 4c)** | **Bunga Pasal 13(2)** — kenaikan 100% **tidak** diterapkan | Pasal 9 ayat (4f) UU PPN jo. UU HPP |\n\n> 💡 **Inti yang benar:** Kenaikan **100% masih berlaku** untuk jalur PPh (17C/17D) di tingkat undang-undang. Yang murni berubah menjadi **bunga Pasal 13(2)** lewat UU HPP adalah jalur **PPN PKP Berisiko Rendah** (Pasal 9 ayat (4f) UU PPN). Untuk **WP OP kecil (≤ Rp100 juta)**, kenaikan 100% pada Pasal 17D(5) memang ada, tetapi diberi **pengurangan** sehingga efektifnya setara bunga Pasal 13(2).\n\n#### 5.5 📊 Simulasi Numerik — Restitusi PPN (Jalur Biasa)\n**Diketahui:** PT Sejahtera (bukan PKP berisiko rendah) melaporkan SPT Masa PPN lebih bayar **Rp300.000.000** dan memilih direstitusi.\n**Proses:**\n1. Permohonan diajukan via Coretax → DJP melakukan **pemeriksaan** (Pasal 17B).\n2. Pemeriksaan harus selesai **maks 12 bulan**; bila lebih bayar terbukti → terbit **SKPLB Rp300.000.000**.\n3. Bila DJP melewati 12 bulan tanpa keputusan → permohonan **dianggap dikabulkan**, SKPLB terbit, dan dapat timbul **imbalan bunga**.\n**Dasar Hukum:** Pasal 17B UU KUP; PMK 81/2024 sebagaimana diubah terakhir dengan PMK 1/2026.\n\n---\n\n### 6. Pembetulan SPT, Pengangsuran & Penundaan Pembayaran\n\n#### 6.1 Pembetulan SPT & Pengungkapan Ketidakbenaran (Pasal 8 UU KUP)\nTiga mekanisme yang sering tertukar — bedakan dari **kapan** dilakukan dan **sanksinya**:\n\n| Mekanisme | Kapan | Dasar | Sanksi |\n|---|---|---|---|\n| **Pembetulan SPT** (kemauan sendiri) | **Sebelum** pemeriksaan; untuk SPT rugi/lebih bayar maks **2 tahun** sebelum daluwarsa | Pasal 8 ayat (1), (1a), (2) | Bunga (uplift **+5%**, Pasal 8(2)/(2a)) |\n| **Pengungkapan ketidakbenaran PENGISIAN SPT** | Saat **pemeriksaan**, sebelum SPHP | Pasal 8 ayat (4) | Bunga (uplift **+10%**, Pasal 8(5)) |\n| **Pengungkapan ketidakbenaran PERBUATAN** | Saat **pemeriksaan bukti permulaan**, sebelum SPDP ke Penuntut Umum | Pasal 8 ayat (3)/(3a) | **Denda 100%** (turun dari 150%) → tidak dilakukan penyidikan (lih. TM 8 §4.4) |\n\n#### 6.2 Pengangsuran & Penundaan Pembayaran Pajak (Pasal 9 ayat (4) & Pasal 19)\nWP yang mengalami **kesulitan likuiditas** atau **keadaan di luar kekuasaannya** dapat mengajukan permohonan **mengangsur** atau **menunda** pembayaran pajak.\n- **Dasar:** Pasal 9 ayat (4) UU KUP; administrasi permohonan mengikuti **PMK 81/2024 sebagaimana diubah terakhir dengan PMK 1/2026**.\n- **Jangka waktu:** paling lama **24 bulan** sejak diterbitkan keputusan persetujuan (sebelumnya 12 bulan).\n- **Frekuensi angsuran:** paling banyak **1 (satu) kali dalam 1 bulan**. *(Catatan: pernyataan \"2 kali sebulan\" yang muncul di sebagian soal latihan adalah keliru.)*\n- **Sanksi:** bunga **Pasal 19 ayat (2)** (tarif bunga MK per bulan, **uplift 0%**, maks 24 bulan) untuk pajak selain PBB; untuk PBB (SPPT/SKP PBB/STP PBB) berupa denda **2% per bulan** (Pasal 11(2) UU PBB). Angsuran/penundaan atas **STP tidak dikenai bunga**.\n\n#### 6.3 Kompensasi & Pencairan Restitusi (sekilas)\n- Kelebihan pembayaran pajak dapat **dikompensasikan** ke utang pajak lainnya atau ke masa/tahun pajak berikutnya — alternatif dari restitusi.\n- Setelah **SKPLB/SKPPKP** terbit, pencairan dana dilakukan melalui **SKPKPP** (Surat Keputusan Pengembalian Kelebihan Pembayaran Pajak) dan **SPMKP** (Surat Perintah Membayar Kelebihan Pajak).\n\n---\n\n### 7. Dasar Hukum Lengkap (Daftar Rujukan)\n\n1. **UU No. 6 Tahun 1983** tentang KUP sebagaimana telah beberapa kali diubah terakhir dengan **UU No. 6 Tahun 2023**; UU HPP No. 7 Tahun 2021 tetap merupakan perubahan substantif utama:\n   - Pasal 1 angka 15 (SKP), angka 16 (SKPKB), angka 17 (SKPKBT), angka 20 (STP)\n   - Pasal 8 (pembetulan SPT & pengungkapan ketidakbenaran: ayat (1)/(1a)/(2) pembetulan, (3)/(3a) pengungkapan perbuatan denda 100%, (4)/(5) pengungkapan pengisian); Pasal 9 ayat (4) (pengangsuran/penundaan); Pasal 11 & 17 ayat (2) (pengembalian); Pasal 13 (SKPKB + sanksi); Pasal 13A (kealpaan pertama, kenaikan 200%); Pasal 14 (STP); Pasal 15 (SKPKBT); Pasal 19 (bunga angsuran/penundaan)\n   - Pasal 17, 17A (SKPN), 17B (restitusi/SKPLB), 17C (WP Kriteria Tertentu, termasuk ayat (5) kenaikan 100%), 17D (WP Persyaratan Tertentu, termasuk ayat (5) kenaikan 100%)\n   - Pasal 8, 9, 19, 27B (sanksi/imbalan bunga); Pasal 36 ayat (1) huruf a (pengurangan sanksi)\n2. **UU PPN** — Pasal 9 ayat (4c) (PKP Berisiko Rendah) dan **Pasal 9 ayat (4f)** (SKPKB post-audit PKP risiko rendah dikenai bunga Pasal 13(2), bukan kenaikan 100%).\n3. **PMK No. 81 Tahun 2024 sebagaimana diubah terakhir dengan PMK No. 1 Tahun 2026** — administrasi Coretax, penerbitan dokumen elektronik, restitusi, dan penyeragaman jatuh tempo.\n4. **PMK No. 28 Tahun 2026** — pengembalian pendahuluan; berlaku 1 Mei 2026 dan mencabut rezim PMK 39/2018 beserta perubahannya.\n5. **Per-05/PJ/2023** — pengembalian pendahuluan WP OP s.d. Rp100 juta (15 hari kerja).\n6. **PMK No. 81 Tahun 2024 sebagaimana diubah terakhir dengan PMK No. 1 Tahun 2026** — administrasi pembayaran, penyetoran, pengangsuran, penundaan, dan layanan Coretax; PMK 242/2014 telah dicabut.\n7. **KMK tarif bunga** — ditetapkan **bulanan** (cek edisi bulan berjalan untuk angka aktual).\n8. **PMK No. 15 Tahun 2025** — pemeriksaan sebagai dasar penerbitan SKP/STP (Pasal 20).\n\n*Sumber verifikasi: pajak.go.id (DJP), jdih.kemenkeu.go.id, DDTCNews, IKPI, MUC Consulting, Pajakku, Ortax, Klikpajak.*\n\n[↑ Kembali ke Daftar Isi](#daftar-isi)\n\n---",
      "pages": [
        {
          "chunkId": "TM09-P01",
          "page": 1,
          "blocks": [
            {
              "k": "h",
              "text": "TM 9 — Penetapan & Ketetapan Pajak, Restitusi Pajak"
            },
            {
              "k": "p",
              "text": "**Mata Kuliah:** Perpajakan I\n**Dasar Hukum Utama:** UU KUP (UU No. 6/1983 sebagaimana terakhir diubah dengan UU No. 6/2023; perubahan substantif melalui UU HPP No. 7/2021) · PMK 81/2024 sebagaimana diubah terakhir dengan PMK 1/2026 (Coretax) · PMK 28/2026 (pengembalian pendahuluan) · KMK tarif bunga (bulanan)\n**Diperbarui mengikuti regulasi s.d.:** Juni 2026"
            }
          ]
        },
        {
          "chunkId": "TM09-P02",
          "page": 2,
          "blocks": [
            {
              "k": "h",
              "text": "0. Konsep Dasar: Penetapan vs Ketetapan"
            },
            {
              "k": "list",
              "items": [
                "**Penetapan pajak** = proses menentukan besarnya pajak terutang.",
                "**Ketetapan pajak** = produk hukum (surat) hasil dari proses tersebut."
              ]
            },
            {
              "k": "p",
              "text": "Indonesia menganut **self-assessment**: pajak terutang pada dasarnya ditetapkan sendiri oleh WP melalui SPT. DJP **baru menerbitkan surat ketetapan** apabila, berdasarkan **penelitian** atau **pemeriksaan**, ditemukan ketidaksesuaian (kurang bayar, lebih bayar, atau nihil). Inilah unsur *official assessment* yang bersifat **korektif**."
            },
            {
              "k": "pre",
              "text": "SPT (self-assessment)  →  Penelitian / Pemeriksaan  →  STP / SKP (official assessment, korektif)"
            }
          ]
        },
        {
          "chunkId": "TM09-P03",
          "page": 3,
          "blocks": [
            {
              "k": "h",
              "text": "1. SURAT TAGIHAN PAJAK (STP)"
            },
            {
              "k": "h",
              "text": "1.1 Definisi & Kekuatan Hukum"
            },
            {
              "k": "p",
              "text": "**Pasal 1 angka 20 UU KUP**: STP adalah surat untuk melakukan tagihan pajak dan/atau sanksi administrasi berupa bunga dan/atau denda. Diatur dalam **Pasal 14 UU KUP**.\nSTP memiliki **kekuatan hukum yang sama dengan SKP**, sehingga penagihannya dapat dilakukan dengan Surat Paksa."
            },
            {
              "k": "h",
              "text": "1.2 Sebab Diterbitkannya STP (Pasal 14 ayat (1) UU KUP), antara lain:"
            },
            {
              "k": "list",
              "items": [
                "PPh dalam tahun berjalan tidak/kurang dibayar;",
                "Hasil penelitian SPT terdapat kekurangan bayar akibat **salah tulis dan/atau salah hitung**;",
                "WP dikenai sanksi administrasi berupa **bunga dan/atau denda**;",
                "Pengusaha yang wajib dikukuhkan sebagai PKP tetapi tidak melakukannya, atau membuat faktur pajak tidak lengkap/tidak tepat waktu."
              ]
            }
          ]
        },
        {
          "chunkId": "TM09-P04",
          "page": 4,
          "blocks": [
            {
              "k": "h",
              "text": "2. SURAT KETETAPAN PAJAK (SKP)"
            },
            {
              "k": "p",
              "text": "**Pasal 1 angka 15 UU KUP**: SKP meliputi **SKPKB, SKPKBT, SKPN, dan SKPLB**. SKP diterbitkan berdasarkan **LHP** (Pasal 20 PMK 15/2025)."
            },
            {
              "k": "h",
              "text": "2.1 SKPKB — Surat Ketetapan Pajak Kurang Bayar"
            },
            {
              "k": "list",
              "items": [
                "**Dasar:** Pasal 1 angka 16 & **Pasal 13 UU KUP**.",
                "**Isi:** menentukan pokok pajak, kredit pajak, kekurangan pokok pajak, **sanksi administrasi**, dan jumlah yang masih harus dibayar.",
                "**Terbit bila** (Pasal 13 ayat (1)): berdasarkan pemeriksaan/keterangan lain pajak kurang/tidak dibayar; SPT tidak disampaikan setelah ditegur tertulis; PKP tidak seharusnya diberi restitusi/kompensasi; tidak menyelenggarakan pembukuan; dsb.",
                "**Sanksi:**",
                "**Bunga Pasal 13 ayat (2)** — untuk kurang bayar hasil pemeriksaan (Pasal 13(1) huruf a & e): tarif `(suku bunga acuan + 15%)/12`, maks 24 bulan (lihat §4).",
                "**Pasal 13 ayat (3)** — untuk pelanggaran Pasal 13(1) huruf b, c, d (mis. SPT tidak disampaikan setelah ditegur; tidak menyelenggarakan pembukuan). Sejak UU HPP sanksinya **campuran**, bukan kenaikan semata:",
                "**Bunga** `(suku bunga acuan + 20%)/12` (Pasal 13(3c)) untuk PPh yang dibayar sendiri serta PPh yang tidak/kurang dipotong/dipungut;",
                "**Kenaikan 75%** untuk PPh yang dipotong/dipungut tetapi tidak/kurang disetor, serta PPN & PPnBM.",
                "*Catatan UU HPP:* sanksi Pasal 13(3) **diturunkan** dari ketentuan lama (dulu kenaikan 50% PPh sendiri / 100% PPh potput / 100% PPN-PPnBM).",
                "**Daluwarsa penerbitan:** **5 tahun** sejak saat terutangnya pajak / berakhirnya Masa, Bagian Tahun, atau Tahun Pajak."
              ]
            },
            {
              "k": "h",
              "text": "2.2 SKPKBT — Surat Ketetapan Pajak Kurang Bayar Tambahan"
            },
            {
              "k": "list",
              "items": [
                "**Dasar:** Pasal 1 angka 17 & **Pasal 15 UU KUP**.",
                "**Terbit bila** ditemukan **data baru** (*novum*) yang mengakibatkan penambahan pajak terutang, setelah penerbitan SKPKB (umumnya melalui **pemeriksaan ulang** — Pasal 25 ayat (2) PMK 15/2025).",
                "**Sanksi:** kenaikan **100%** dari jumlah kekurangan pajak (Pasal 15 ayat (2)), kecuali SKPKBT terbit atas keterangan tertulis WP atas kehendak sendiri (sepanjang belum dilakukan tindakan pemeriksaan).",
                "**Daluwarsa:** **5 tahun**."
              ]
            },
            {
              "k": "h",
              "text": "2.3 SKPLB — Surat Ketetapan Pajak Lebih Bayar"
            },
            {
              "k": "list",
              "items": [
                "**Dasar:** Pasal 1 angka 18 & **Pasal 17 / 17B UU KUP**.",
                "**Terbit bila** jumlah kredit pajak atau pajak yang dibayar **lebih besar** daripada pajak terutang (kelebihan pembayaran).",
                "Menjadi dasar bagi WP untuk memperoleh **restitusi** (§5)."
              ]
            },
            {
              "k": "h",
              "text": "2.4 SKPN — Surat Ketetapan Pajak Nihil"
            },
            {
              "k": "list",
              "items": [
                "**Dasar:** **Pasal 17A UU KUP**.",
                "**Terbit bila** jumlah kredit pajak / pajak dibayar **sama dengan** pajak terutang, atau pajak tidak terutang dan tidak ada kredit pajak."
              ]
            },
            {
              "k": "h",
              "text": "Ringkasan Jenis SKP"
            },
            {
              "k": "pre",
              "text": "| Jenis | Kondisi | Dasar Hukum | Sanksi khas |\n|---|---|---|---|\n| **SKPKB** | Pajak kurang dibayar | Pasal 13 | Bunga Pasal 13(2) / Kenaikan Pasal 13(3) |\n| **SKPKBT** | Ada data baru → tambahan pajak | Pasal 15 | Kenaikan **100%** |\n| **SKPLB** | Pajak lebih dibayar | Pasal 17 / 17B | — (memicu restitusi) |\n| **SKPN** | Pajak terutang = kredit pajak | Pasal 17A | — |"
            },
            {
              "k": "h",
              "text": "2.5 Pasal 13A — Kealpaan Pertama Kali (Sanksi Pengganti Pidana)"
            },
            {
              "k": "p",
              "text": "Sebagai wujud *ultimum remedium*, WP yang **karena kealpaan** tidak menyampaikan SPT atau menyampaikan SPT yang isinya tidak benar/tidak lengkap sehingga merugikan pendapatan negara, **untuk pertama kali tidak dikenai sanksi pidana**, melainkan **sanksi administrasi berupa kenaikan 200%** dari jumlah pajak yang kurang dibayar (ditagih melalui SKPKB). Dasar: **Pasal 13A UU KUP**."
            }
          ]
        },
        {
          "chunkId": "TM09-P05",
          "page": 5,
          "blocks": [
            {
              "k": "h",
              "text": "3. Era Coretax — PMK 81/2024 sebagaimana diubah terakhir dengan PMK 1/2026 (konteks prosedural terbaru)"
            },
            {
              "k": "list",
              "items": [
                "**PMK No. 81 Tahun 2024 sebagaimana diubah terakhir dengan PMK No. 1 Tahun 2026** (PMK 81/2024 ditetapkan 14 Oktober 2024 dan berlaku **1 Januari 2025**) mengatur ketentuan perpajakan dalam rangka **Coretax** dan berdampak pada 42 peraturan.",
                "**STP, SKP, dan surat teguran kini dapat diterbitkan secara elektronik** melalui sistem Coretax (dengan tanda tangan digital), tetap ada opsi manual via pos bila kendala teknis.",
                "**Jatuh tempo penyetoran pajak diseragamkan** menjadi **tanggal 15 bulan berikutnya** setelah Masa Pajak berakhir.",
                "Permohonan **restitusi** kini diajukan melalui Coretax; hasil pemeriksaan dituangkan dalam SKPLB (lih. Pasal 137 PMK 81/2024 sebagaimana diubah terakhir dengan PMK 1/2026)."
              ]
            }
          ]
        },
        {
          "chunkId": "TM09-P06",
          "page": 6,
          "blocks": [
            {
              "k": "h",
              "text": "4. SANKSI ADMINISTRASI — **(BERUBAH TOTAL sejak UU Cipta Kerja & UU HPP)**"
            },
            {
              "k": "p",
              "text": "⚠️ **Konsep paling sering keliru.** Sanksi bunga **bukan lagi flat 2% per bulan**. Sejak UU Cipta Kerja (2020) dan ditegaskan UU HPP, **tarif bunga bersifat dinamis** dan ditetapkan **Menteri Keuangan via KMK setiap bulan**."
            },
            {
              "k": "h",
              "text": "4.1 Formula Tarif Bunga"
            },
            {
              "k": "pre",
              "text": "Tarif bunga per bulan = (Suku Bunga Acuan + Uplift Factor) ÷ 12"
            },
            {
              "k": "list",
              "items": [
                "**Suku bunga acuan** mengacu pada kondisi pasar (mengikuti suku bunga acuan/yield SBN; ditetapkan KMK bulanan).",
                "**Uplift factor** berbeda per pasal (makin berat pelanggaran, makin tinggi uplift).",
                "**Jumlah bulan maksimal: 24 bulan**. Bagian dari bulan dihitung penuh **1 bulan**."
              ]
            },
            {
              "k": "h",
              "text": "4.2 Tingkat Uplift per Pasal"
            },
            {
              "k": "pre",
              "text": "| Pasal UU KUP | Jenis sanksi | Uplift |\n|---|---|---|\n| Pasal 19 (1)(2)(3) | Bunga penagihan / angsuran / penundaan | **0%** |\n| Pasal 8(2), 8(2a), 9(2a), 9(2b), 14(3) | Pembetulan SPT / terlambat setor / salah tulis-hitung | **+5%** |\n| Pasal 8(5) | Pengungkapan ketidakbenaran pengisian SPT | **+10%** |\n| Pasal 13(2) & 13(2a) | Kurang bayar berdasarkan pemeriksaan (SKPKB) | **+15%** |\n| Pasal 13(3) huruf a & b dan 13(3b) → tarif via 13(3c) | Bunga atas PPh sendiri / PPh tak dipotong-dipungut & pelanggaran tertentu | **+20%** |"
            },
            {
              "k": "p",
              "text": "Catatan: untuk pelanggaran Pasal 13(1) huruf b/c/d, selain bunga di atas terdapat pula sanksi **kenaikan 75%** (PPh dipotong/dipungut tak disetor, serta PPN/PPnBM) — bukan dihitung dengan formula uplift. Lihat §2.1."
            },
            {
              "k": "p",
              "text": "Tarif berubah tiap bulan. **Contoh** (Maret 2025, KMK terkait): Pasal 19 = 0,57%; Pasal 9(2a)/(2b) & 14(3) = 0,99%; Pasal 8(5) = 1,41%; Pasal 13(2)/(2a) = 1,82%; Pasal 13(3b) = 2,24% per bulan. *Selalu cek KMK bulan berjalan untuk angka aktual.*"
            },
            {
              "k": "h",
              "text": "Tabel Perbandingan Regulasi — Sanksi Bunga"
            },
            {
              "k": "pre",
              "text": "| Aspek | Aturan Lama (pra-UU Cipta Kerja) | Aturan Baru (UU CK & UU HPP) |\n|---|---|---|\n| Tarif bunga | **Flat 2%** per bulan | **(Suku bunga acuan + uplift) ÷ 12**, dinamis bulanan |\n| Penetapan | Tetap di UU | KMK setiap bulan |\n| Batas waktu | Maks 24 bulan | Maks 24 bulan |\n| Keadilan | Seragam | Proporsional dengan jenis pelanggaran |"
            },
            {
              "k": "h",
              "text": "4.3 📊 Simulasi Numerik — Sanksi Bunga SKPKB (Pasal 13 ayat (2))"
            },
            {
              "k": "p",
              "text": "**Diketahui:**\n- PT Maju diperiksa atas SPT Tahunan PPh Badan 2023; ditemukan **kurang bayar Rp200.000.000**.\n- SKPKB terbit dengan keterlambatan dihitung **10 bulan** dari saat terutangnya pajak.\n- Asumsi tarif bunga Pasal 13(2) saat penerbitan = **1,82%** per bulan (contoh Maret 2025)."
            },
            {
              "k": "p",
              "text": "**Proses Penghitungan:**\n1. Sanksi bunga = 1,82% × 10 bulan × Rp200.000.000 = **Rp36.400.000**\n2. Total yang harus dibayar = Pokok Rp200.000.000 + Bunga Rp36.400.000 = **Rp236.400.000**"
            },
            {
              "k": "p",
              "text": "**Kesimpulan:** WP membayar pokok + bunga Rp236.400.000. Andai keterlambatan > 24 bulan, jumlah bulan sanksi tetap **dibatasi 24 bulan**.\n**Dasar Hukum:** Pasal 13 ayat (2) UU KUP jo. UU HPP; tarif per KMK bulan berjalan."
            }
          ]
        },
        {
          "chunkId": "TM09-P07",
          "page": 7,
          "blocks": [
            {
              "k": "h",
              "text": "5. RESTITUSI PAJAK (Pengembalian Kelebihan Pembayaran Pajak)"
            },
            {
              "k": "h",
              "text": "5.1 Definisi"
            },
            {
              "k": "p",
              "text": "Restitusi adalah pengembalian kelebihan pembayaran pajak kepada WP karena pajak yang dibayar/kredit pajak **lebih besar** daripada pajak terutang, atau karena pembayaran pajak yang **seharusnya tidak terutang**. Dasar: **Pasal 17, 17 ayat (2), dan 11 UU KUP**."
            },
            {
              "k": "h",
              "text": "5.2 Dua Jalur Restitusi"
            },
            {
              "k": "h",
              "text": "Jalur A — Restitusi Biasa (melalui **Pemeriksaan**) — Pasal 17B UU KUP"
            },
            {
              "k": "list",
              "items": [
                "Dapat diajukan oleh **setiap WP** yang status SPT-nya lebih bayar dan memilih direstitusi.",
                "DJP melakukan **pemeriksaan** → terbit **SKPLB**.",
                "**Jangka waktu: paling lama 12 bulan** sejak permohonan diterima lengkap (Pasal 17B ayat (1)).",
                "Jika lewat 12 bulan DJP belum memberi keputusan → permohonan **dianggap dikabulkan** dan SKPLB diterbitkan."
              ]
            },
            {
              "k": "h",
              "text": "Jalur B — Pengembalian Pendahuluan (melalui **Penelitian**, tanpa pemeriksaan) → terbit **SKPPKP**"
            },
            {
              "k": "p",
              "text": "Hanya untuk WP tertentu; lebih cepat:"
            },
            {
              "k": "pre",
              "text": "| Subjek | Dasar | Keterangan |\n|---|---|---|\n| **WP Kriteria Tertentu** (\"WP Patuh\") | Pasal 17C UU KUP | PPh: maks **3 bulan**; PPN: maks **1 bulan** |\n| **WP Persyaratan Tertentu** | Pasal 17D UU KUP | Batas nominal lebih bayar tertentu |\n| **PKP Berisiko Rendah** | Pasal 9 ayat (4c) UU PPN | Mis. emiten bursa, BUMN/BUMD, Mitra Utama Kepabeanan |"
            },
            {
              "k": "p",
              "text": "**Syarat WP Kriteria Tertentu (Pasal 17C)**, a.l.:\n- Tepat waktu menyampaikan SPT;\n- Tidak punya tunggakan pajak (kecuali yang diizinkan diangsur/ditunda);\n- Laporan keuangan diaudit Akuntan Publik dengan opini **Wajar Tanpa Pengecualian (WTP)** selama **3 tahun** berturut-turut;\n- Tidak pernah dipidana di bidang perpajakan dalam **5 tahun** terakhir."
            },
            {
              "k": "p",
              "text": "**Catatan batas nominal terbaru (peraturan pelaksana):**\n- **WP orang pribadi persyaratan tertentu** dengan lebih bayar s.d. **Rp100 juta** → keputusan paling lama **15 hari kerja** berdasarkan PMK 28/2026.\n- **WP badan persyaratan tertentu**: peredaran usaha s.d. Rp50 miliar dan lebih bayar s.d. Rp1 miliar; keputusan paling lama 1 bulan. **PKP persyaratan tertentu**: penyerahan s.d. Rp4,2 miliar dan lebih bayar PPN s.d. Rp1 miliar per Masa Pajak; keputusan paling lama 1 bulan.\n- Sejak 1 Mei 2026, dasar pelaksana pengembalian pendahuluan adalah **PMK 28 Tahun 2026**, yang mencabut PMK 39/2018, PMK 117/2019, PMK 209/2021, dan PMK 119/2024."
            },
            {
              "k": "h",
              "text": "Tabel Perbandingan — Restitusi Biasa vs Pendahuluan"
            },
            {
              "k": "pre",
              "text": "| Aspek | Restitusi Biasa (Pasal 17B) | Pengembalian Pendahuluan (17C/17D/9(4c) PPN) |\n|---|---|---|\n| Mekanisme | **Pemeriksaan** | **Penelitian** |\n| Produk hukum | **SKPLB** | **SKPPKP** |\n| Subjek | Semua WP lebih bayar | WP tertentu (Patuh / Persyaratan Tertentu / PKP Risiko Rendah) |\n| Kecepatan | Maks 12 bulan | 15 hari kerja s.d. 3 bulan |"
            },
            {
              "k": "h",
              "text": "5.3 Imbalan Bunga"
            },
            {
              "k": "p",
              "text": "Bila DJP **terlambat** menerbitkan keputusan restitusi/SKPLB, WP berhak atas **imbalan bunga** (Pasal 11 ayat (3), Pasal 17B ayat (3) & (4), Pasal 27B UU KUP).\n- Tarif imbalan = **Suku bunga acuan ÷ 12** (**tanpa uplift**), maksimal **24 bulan**."
            },
            {
              "k": "h",
              "text": "5.4 Konsekuensi Pengembalian Pendahuluan (post-audit)"
            },
            {
              "k": "p",
              "text": "Karena pendahuluan diberikan **tanpa pemeriksaan**, DJP tetap **berhak memeriksa** kemudian. Bila hasil pemeriksaan menunjukkan kekurangan → terbit **SKPKB**. Besaran sanksinya **berbeda** tergantung jalur — ini sering disalahpahami:"
            },
            {
              "k": "pre",
              "text": "| Jalur pendahuluan | Sanksi atas SKPKB post-audit | Dasar |\n|---|---|---|\n| **PPh — WP Kriteria Tertentu (17C)** | Kenaikan **100%** (Pasal 17C ayat (5)) | Pasal 17C(5) UU KUP |\n| **PPh — WP Persyaratan Tertentu (17D)** | Kenaikan **100%** (Pasal 17D ayat (5)); untuk **WP OP s.d. Rp100 juta** dikurangi (via Pasal 36(1)(a) jo. Per-05/PJ/2023) sehingga **setara bunga Pasal 13(2)** | Pasal 17D(5); Per-05/PJ/2023 |\n| **PPN — PKP Berisiko Rendah (9 ayat 4c)** | **Bunga Pasal 13(2)** — kenaikan 100% **tidak** diterapkan | Pasal 9 ayat (4f) UU PPN jo. UU HPP |"
            },
            {
              "k": "p",
              "text": "💡 **Inti yang benar:** Kenaikan **100% masih berlaku** untuk jalur PPh (17C/17D) di tingkat undang-undang. Yang murni berubah menjadi **bunga Pasal 13(2)** lewat UU HPP adalah jalur **PPN PKP Berisiko Rendah** (Pasal 9 ayat (4f) UU PPN). Untuk **WP OP kecil (≤ Rp100 juta)**, kenaikan 100% pada Pasal 17D(5) memang ada, tetapi diberi **pengurangan** sehingga efektifnya setara bunga Pasal 13(2)."
            },
            {
              "k": "h",
              "text": "5.5 📊 Simulasi Numerik — Restitusi PPN (Jalur Biasa)"
            },
            {
              "k": "p",
              "text": "**Diketahui:** PT Sejahtera (bukan PKP berisiko rendah) melaporkan SPT Masa PPN lebih bayar **Rp300.000.000** dan memilih direstitusi.\n**Proses:**\n1. Permohonan diajukan via Coretax → DJP melakukan **pemeriksaan** (Pasal 17B).\n2. Pemeriksaan harus selesai **maks 12 bulan**; bila lebih bayar terbukti → terbit **SKPLB Rp300.000.000**.\n3. Bila DJP melewati 12 bulan tanpa keputusan → permohonan **dianggap dikabulkan**, SKPLB terbit, dan dapat timbul **imbalan bunga**.\n**Dasar Hukum:** Pasal 17B UU KUP; PMK 81/2024 sebagaimana diubah terakhir dengan PMK 1/2026."
            }
          ]
        },
        {
          "chunkId": "TM09-P08",
          "page": 8,
          "blocks": [
            {
              "k": "h",
              "text": "6. Pembetulan SPT, Pengangsuran & Penundaan Pembayaran"
            },
            {
              "k": "h",
              "text": "6.1 Pembetulan SPT & Pengungkapan Ketidakbenaran (Pasal 8 UU KUP)"
            },
            {
              "k": "p",
              "text": "Tiga mekanisme yang sering tertukar — bedakan dari **kapan** dilakukan dan **sanksinya**:"
            },
            {
              "k": "pre",
              "text": "| Mekanisme | Kapan | Dasar | Sanksi |\n|---|---|---|---|\n| **Pembetulan SPT** (kemauan sendiri) | **Sebelum** pemeriksaan; untuk SPT rugi/lebih bayar maks **2 tahun** sebelum daluwarsa | Pasal 8 ayat (1), (1a), (2) | Bunga (uplift **+5%**, Pasal 8(2)/(2a)) |\n| **Pengungkapan ketidakbenaran PENGISIAN SPT** | Saat **pemeriksaan**, sebelum SPHP | Pasal 8 ayat (4) | Bunga (uplift **+10%**, Pasal 8(5)) |\n| **Pengungkapan ketidakbenaran PERBUATAN** | Saat **pemeriksaan bukti permulaan**, sebelum SPDP ke Penuntut Umum | Pasal 8 ayat (3)/(3a) | **Denda 100%** (turun dari 150%) → tidak dilakukan penyidikan (lih. TM 8 §4.4) |"
            },
            {
              "k": "h",
              "text": "6.2 Pengangsuran & Penundaan Pembayaran Pajak (Pasal 9 ayat (4) & Pasal 19)"
            },
            {
              "k": "p",
              "text": "WP yang mengalami **kesulitan likuiditas** atau **keadaan di luar kekuasaannya** dapat mengajukan permohonan **mengangsur** atau **menunda** pembayaran pajak.\n- **Dasar:** Pasal 9 ayat (4) UU KUP; administrasi permohonan mengikuti **PMK 81/2024 sebagaimana diubah terakhir dengan PMK 1/2026**.\n- **Jangka waktu:** paling lama **24 bulan** sejak diterbitkan keputusan persetujuan (sebelumnya 12 bulan).\n- **Frekuensi angsuran:** paling banyak **1 (satu) kali dalam 1 bulan**. *(Catatan: pernyataan \"2 kali sebulan\" yang muncul di sebagian soal latihan adalah keliru.)*\n- **Sanksi:** bunga **Pasal 19 ayat (2)** (tarif bunga MK per bulan, **uplift 0%**, maks 24 bulan) untuk pajak selain PBB; untuk PBB (SPPT/SKP PBB/STP PBB) berupa denda **2% per bulan** (Pasal 11(2) UU PBB). Angsuran/penundaan atas **STP tidak dikenai bunga**."
            },
            {
              "k": "h",
              "text": "6.3 Kompensasi & Pencairan Restitusi (sekilas)"
            },
            {
              "k": "list",
              "items": [
                "Kelebihan pembayaran pajak dapat **dikompensasikan** ke utang pajak lainnya atau ke masa/tahun pajak berikutnya — alternatif dari restitusi.",
                "Setelah **SKPLB/SKPPKP** terbit, pencairan dana dilakukan melalui **SKPKPP** (Surat Keputusan Pengembalian Kelebihan Pembayaran Pajak) dan **SPMKP** (Surat Perintah Membayar Kelebihan Pajak)."
              ]
            }
          ]
        },
        {
          "chunkId": "TM09-P09",
          "page": 9,
          "blocks": [
            {
              "k": "h",
              "text": "7. Dasar Hukum Lengkap (Daftar Rujukan)"
            },
            {
              "k": "list",
              "items": [
                "**UU No. 6 Tahun 1983** tentang KUP sebagaimana telah beberapa kali diubah terakhir dengan **UU No. 6 Tahun 2023**; UU HPP No. 7 Tahun 2021 tetap merupakan perubahan substantif utama:",
                "Pasal 1 angka 15 (SKP), angka 16 (SKPKB), angka 17 (SKPKBT), angka 20 (STP)",
                "Pasal 8 (pembetulan SPT & pengungkapan ketidakbenaran: ayat (1)/(1a)/(2) pembetulan, (3)/(3a) pengungkapan perbuatan denda 100%, (4)/(5) pengungkapan pengisian); Pasal 9 ayat (4) (pengangsuran/penundaan); Pasal 11 & 17 ayat (2) (pengembalian); Pasal 13 (SKPKB + sanksi); Pasal 13A (kealpaan pertama, kenaikan 200%); Pasal 14 (STP); Pasal 15 (SKPKBT); Pasal 19 (bunga angsuran/penundaan)",
                "Pasal 17, 17A (SKPN), 17B (restitusi/SKPLB), 17C (WP Kriteria Tertentu, termasuk ayat (5) kenaikan 100%), 17D (WP Persyaratan Tertentu, termasuk ayat (5) kenaikan 100%)",
                "Pasal 8, 9, 19, 27B (sanksi/imbalan bunga); Pasal 36 ayat (1) huruf a (pengurangan sanksi)",
                "**UU PPN** — Pasal 9 ayat (4c) (PKP Berisiko Rendah) dan **Pasal 9 ayat (4f)** (SKPKB post-audit PKP risiko rendah dikenai bunga Pasal 13(2), bukan kenaikan 100%).",
                "**PMK No. 81 Tahun 2024 sebagaimana diubah terakhir dengan PMK No. 1 Tahun 2026** — administrasi Coretax, penerbitan dokumen elektronik, restitusi, dan penyeragaman jatuh tempo.",
                "**PMK No. 28 Tahun 2026** — pengembalian pendahuluan; berlaku 1 Mei 2026 dan mencabut rezim PMK 39/2018 beserta perubahannya.",
                "**Per-05/PJ/2023** — pengembalian pendahuluan WP OP s.d. Rp100 juta (15 hari kerja).",
                "**PMK No. 81 Tahun 2024 sebagaimana diubah terakhir dengan PMK No. 1 Tahun 2026** — administrasi pembayaran, penyetoran, pengangsuran, penundaan, dan layanan Coretax; PMK 242/2014 telah dicabut.",
                "**KMK tarif bunga** — ditetapkan **bulanan** (cek edisi bulan berjalan untuk angka aktual).",
                "**PMK No. 15 Tahun 2025** — pemeriksaan sebagai dasar penerbitan SKP/STP (Pasal 20)."
              ]
            },
            {
              "k": "p",
              "text": "*Sumber verifikasi: pajak.go.id (DJP), jdih.kemenkeu.go.id, DDTCNews, IKPI, MUC Consulting, Pajakku, Ortax, Klikpajak.*"
            },
            {
              "k": "p",
              "text": "[↑ Kembali ke Daftar Isi](#daftar-isi)"
            }
          ]
        }
      ]
    },
    {
      "tm": 10,
      "title": "TM 10 — Penyelesaian Sengketa Pajak: Keberatan, Banding, Gugatan & Peninjauan Kembali",
      "sourcePdf": "Materi_Perpajakan_I_TM8-14_Kompilasi (2).md",
      "sourceFile": "Materi_Perpajakan_I_TM8-14_Kompilasi (2).md",
      "lawBasis": "UU KUP (UU No. 6/1983 sebagaimana terakhir diubah dengan UU No. 6/2023; perubahan substantif melalui UU HPP No. 7/2021) · UU No. 14/2002 (Pengadilan Pajak) · PP No. 50/2022 · Putusan MK No. 26/PUU-XXI/2023 · SEMA No. 2/2024",
      "body_markdown": "## TM 10 — Penyelesaian Sengketa Pajak: Keberatan, Banding, Gugatan & Peninjauan Kembali\n\n**Mata Kuliah:** Perpajakan I\n**Dasar Hukum Utama:** UU KUP (UU No. 6/1983 sebagaimana terakhir diubah dengan UU No. 6/2023; perubahan substantif melalui UU HPP No. 7/2021) · UU No. 14/2002 (Pengadilan Pajak) · PP No. 50/2022 · Putusan MK No. 26/PUU-XXI/2023 · SEMA No. 2/2024\n**Diperbarui mengikuti regulasi s.d.:** Juni 2026\n\n---\n\n### 0. Peta Upaya Hukum WP\n\nBila WP tidak setuju dengan ketetapan/tindakan DJP, tersedia jalur berjenjang. **Dua jalur utama** dibedakan dari objeknya:\n\n```\n                       ┌─ Sengketa MATERI (besarnya pajak) ─┐\nSKP/Pemotongan  →  KEBERATAN (ke DJP)  →  BANDING (Pengadilan Pajak)  →  PENINJAUAN KEMBALI (MA)\n                       └────────────────────────────────────┘\n\nPelaksanaan penagihan / keputusan prosedural  →  GUGATAN (Pengadilan Pajak)\n```\n\n| Upaya Hukum | Diajukan ke | Sifat | Dasar |\n|---|---|---|---|\n| **Keberatan** | Dirjen Pajak (DJP) | Materi | Pasal 25–26A UU KUP |\n| **Banding** | Pengadilan Pajak | Materi | Pasal 27 UU KUP jo. UU 14/2002 |\n| **Gugatan** | Pengadilan Pajak | Formal/prosedural | Pasal 23 UU KUP jo. UU PPSP |\n| **Peninjauan Kembali** | Mahkamah Agung (via Pengadilan Pajak) | Luar biasa | UU 14/2002 jo. Pasal 27 UU KUP |\n\n---\n\n### 1. KEBERATAN\n\n#### 1.1 Dasar & Objek\nDiatur **Pasal 25, 26, 26A UU KUP**, pelaksana **PP 50/2022** dan secara teknis **PMK No. 118 Tahun 2024** (Tata Cara Pembetulan, Keberatan, Pengurangan, Penghapusan, dan Pembatalan di Bidang Perpajakan). WP dapat mengajukan keberatan **hanya kepada Dirjen Pajak** atas:\n- SKPKB, SKPKBT, SKPN, SKPLB; atau\n- Pemotongan/pemungutan pajak oleh pihak ketiga.\n\n#### 1.2 Syarat Formal (Pasal 25 ayat (2)–(4))\n- Diajukan tertulis dalam Bahasa Indonesia dengan alasan jelas;\n- **Satu keberatan untuk satu** SKP/pemotongan;\n- Ditandatangani WP (bila bukan WP, lampirkan surat kuasa khusus — Pasal 32 ayat (3));\n- **Wajib melunasi pajak yang telah disetujui** dalam Pembahasan Akhir Hasil Pemeriksaan sebelum mengajukan keberatan (Pasal 25 ayat (3a));\n- WP belum mengajukan permohonan Pasal 36.\n\n#### 1.3 Jangka Waktu\n- **WP mengajukan:** paling lama **3 bulan** sejak tanggal SKP dikirim / pemotongan-pemungutan (kecuali force majeure).\n- **DJP memutus:** paling lama **12 bulan** sejak surat keberatan diterima. **Lewat 12 bulan tanpa keputusan → keberatan dianggap dikabulkan** (Pasal 26 ayat (1) & (5)).\n- Selama proses keberatan, jatuh tempo pelunasan atas jumlah yang **belum disetujui tertangguh** sampai 1 bulan sejak SK Keberatan terbit, dan **penagihan ditangguhkan** (Pasal 25 ayat (7)).\n\n#### 1.4 Sanksi — **(BERUBAH, UU HPP)**\nBila keberatan **ditolak/dikabulkan sebagian** dan WP **tidak mengajukan banding**: denda **30%** dari jumlah pajak dalam SK Keberatan dikurangi pajak yang telah dibayar sebelum keberatan (**Pasal 25 ayat (9)**).\n> Bila WP **mengajukan banding**, denda 30% **tidak dikenakan** (Pasal 25 ayat (10)).\n\n| Aspek | Sebelum UU HPP | Sesudah UU HPP |\n|---|---|---|\n| Denda keberatan ditolak/sebagian | **50%** | **30%** |\n\n> **Jika keberatan dikabulkan** sebagian/seluruhnya sehingga timbul kelebihan bayar, WP dapat memperoleh **imbalan bunga** (Pasal 27B) — lihat catatan imbalan bunga di §2.3.\n\n#### 1.5 Hak WP & Konsekuensi Pencabutan Keberatan\n- **Hak meminta keterangan (Pasal 25 ayat (6)):** sebelum mengajukan keberatan, WP berhak meminta secara tertulis dasar pengenaan pajak, penghitungan rugi, atau pemotongan/pemungutan, dan DJP wajib memberikannya.\n- **Perbaikan surat keberatan:** bila syarat formal belum lengkap, WP dapat memperbaiki dan menyampaikan kembali **sebelum jangka waktu 3 bulan terlampaui**.\n- **Konsekuensi pencabutan keberatan:** WP yang **mencabut** keberatan **kehilangan hak** mengajukan **pengurangan/pembatalan SKP yang tidak benar (Pasal 36)** atas SKP tersebut (Pasal 38 ayat (5) PP 50/2022). Jalur Pasal 36 bersifat **alternatif** — tidak dapat dipakai bila atas SKP yang sama keberatan sudah diajukan/diputus.\n\n---\n\n### 2. BANDING\n\n#### 2.1 Dasar & Karakter\nDiatur **Pasal 27 UU KUP jo. UU No. 14/2002 tentang Pengadilan Pajak**. Banding diajukan **hanya kepada Pengadilan Pajak** atas **SK Keberatan**. Bersifat **materi**. Putusan Pengadilan Pajak **bukan** Keputusan Tata Usaha Negara, bersifat **final dan mengikat (inkracht)** — **tidak ada upaya kasasi**, langsung ke PK.\n\n#### 2.2 Syarat & Jangka Waktu\n- Tertulis dalam Bahasa Indonesia, alasan jelas, dilampiri salinan SK Keberatan;\n- **Satu SK Keberatan = satu Surat Banding**;\n- Diajukan paling lama **3 bulan** sejak SK Keberatan diterima;\n- Jatuh tempo pelunasan atas pajak yang belum dibayar saat keberatan **tertangguh sampai 1 bulan sejak Putusan Banding** terbit.\n\n#### 2.3 Sanksi — **(BERUBAH, UU HPP)**\nBila banding **ditolak/dikabulkan sebagian**: denda **60%** dari jumlah pajak dalam Putusan Banding dikurangi pajak yang dibayar sebelum keberatan (**Pasal 27 ayat (5d)**).\n\n| Aspek | Sebelum UU HPP | Sesudah UU HPP |\n|---|---|---|\n| Denda banding ditolak/sebagian | **100%** | **60%** |\n\n> **Imbalan bunga (Pasal 27B).** Bila **keberatan, banding, atau PK dikabulkan** sebagian/seluruhnya sehingga timbul kelebihan bayar, WP berhak imbalan bunga: tarif `suku bunga acuan ÷ 12` (tanpa uplift), maks 24 bulan. **Catatan penting pasca-UU HPP:** imbalan bunga ini pada dasarnya hanya diberikan atas SPT yang semula menyatakan **lebih bayar**, dan jumlahnya **dibatasi paling banyak sebesar lebih bayar yang disetujui WP** dalam Pembahasan Akhir Hasil Pemeriksaan — jadi tidak otomatis diberikan pada setiap kemenangan sengketa.\n\n#### 2.4 Pihak yang Berhak, Pencabutan & Proses Persidangan\n- **Pihak yang dapat mengajukan banding:** WP, ahli warisnya, seorang pengurus, atau **kuasa hukum** (kuasa hukum di Pengadilan Pajak harus memenuhi syarat/izin kuasa hukum). → Jadi pernyataan \"kuasa hukum tidak bisa mengajukan banding\" adalah **keliru**.\n- **Pencabutan banding:** banding yang dicabut dihapus dari daftar sengketa, dan WP **tidak dapat mengajukan banding ulang** atas sengketa yang sama (*ne bis in idem*, Pasal 39 ayat (3) UU 14/2002); SK Keberatan menjadi **inkracht** dan utang wajib dilunasi.\n- **Proses persidangan (UU 14/2002):**\n  - *Pemeriksaan acara biasa* — diperiksa oleh **Majelis** (3 hakim); untuk banding & gugatan pada umumnya.\n  - *Pemeriksaan acara cepat* — oleh **Hakim Tunggal/Majelis** untuk sengketa tertentu (mis. kesalahan tulis/hitung, sengketa di luar wewenang Pengadilan Pajak, atau bila jangka waktu penyelesaian tidak dipenuhi).\n\n---\n\n### 3. GUGATAN\n\n#### 3.1 Dasar & Objek (bersifat FORMAL/prosedural)\nDiatur **Pasal 23 UU KUP jo. Pasal 37 UU PPSP**, diajukan ke **Pengadilan Pajak**. Objek gugatan **bukan** besarnya pajak, melainkan:\n1. Pelaksanaan **Surat Paksa, SPMP (Surat Perintah Melaksanakan Penyitaan), atau Pengumuman Lelang**;\n2. Keputusan **pencegahan** dalam rangka penagihan;\n3. Keputusan yang berkaitan dengan pelaksanaan keputusan perpajakan **selain** yang ditetapkan Pasal 25 ayat (1) & Pasal 26;\n4. Penerbitan SKP atau SK Keberatan yang **prosedur penerbitannya tidak sesuai** ketentuan.\n\n#### 3.2 Jangka Waktu\n- Terhadap **pelaksanaan penagihan**: **14 hari** sejak pelaksanaan penagihan;\n- Terhadap **keputusan lain**: **30 hari** sejak keputusan diterima.\n\n#### 3.3 Karakter\n- Gugatan **tidak menunda/menghalangi** penagihan pajak;\n- **Tidak ada sanksi denda** bila gugatan ditolak/dikabulkan sebagian.\n\n> **Perkembangan — SEMA No. 2 Tahun 2024:** Mahkamah Agung menegaskan sengketa **materi** harus ditempuh lewat **banding**, bukan gugatan. Gugatan dibatasi pada aspek formal/prosedural agar tidak mengaburkan fungsi keberatan & banding.\n\n---\n\n### 4. PENINJAUAN KEMBALI (PK)\n\n#### 4.1 Dasar & Karakter\nUpaya hukum **luar biasa** ke **Mahkamah Agung** melalui Pengadilan Pajak. Diatur **UU 14/2002 jo. Pasal 27 UU KUP**. Hanya dapat diajukan **1 (satu) kali**.\n\n#### 4.2 Alasan PK (terbatas — Pasal 91 UU 14/2002), a.l.:\n- Putusan didasarkan kebohongan/tipu muslihat pihak lawan, atau bukti palsu;\n- Terdapat **bukti tertulis baru (novum)** yang menentukan;\n- Dikabulkan suatu hal yang tidak dituntut / melebihi tuntutan;\n- Ada bagian tuntutan yang belum diputus tanpa pertimbangan;\n- Putusan nyata tidak sesuai ketentuan perundang-undangan.\n\n#### 4.3 Jangka Waktu & Akibat\n- Diajukan paling lama **3 bulan** (dihitung sesuai jenis alasan — mis. sejak diketahui kebohongan, sejak novum ditemukan, atau sejak putusan banding dikirim);\n- **PK tidak menangguhkan/menghentikan** pelaksanaan Putusan Pengadilan Pajak (**Pasal 27 ayat (5e)**).\n\n#### 4.4 Sanksi\nBila **Putusan PK menyebabkan pajak bertambah**: denda **60%** dari jumlah pajak dalam Putusan PK dikurangi pajak yang dibayar sebelum keberatan (**Pasal 27 ayat (5f)**). STP atas sanksi ini diterbitkan paling lama **2 tahun** sejak Putusan PK diterima DJP (Pasal 27 ayat (5g)).\n> Bila PK dikabulkan sehingga timbul kelebihan bayar → WP berhak **imbalan bunga** (Pasal 27B), dengan ketentuan & batasan yang sama seperti diuraikan di §2.3.\n\n---\n\n### 5. Upaya Hukum Administratif Lain (Pasal 16 & 36 UU KUP)\n\nSelain keberatan/banding/gugatan/PK, WP punya jalur **administratif** ke DJP (bukan ke pengadilan). Diatur teknis dalam **PMK 118/2024**.\n\n| Jalur | Dasar | Untuk apa |\n|---|---|---|\n| **Pembetulan** | Pasal 16 UU KUP | Membetulkan SKP/STP/keputusan yang terdapat **salah tulis, salah hitung, atau kekeliruan penerapan** ketentuan tertentu (bukan sengketa materi) |\n| **Pengurangan/penghapusan sanksi administrasi** | Pasal 36 ayat (1) huruf a | Sanksi dikenakan karena kekhilafan WP atau bukan kesalahannya |\n| **Pengurangan/pembatalan SKP yang tidak benar** | Pasal 36 ayat (1) huruf b | SKP yang nyata-nyata tidak benar |\n| **Pengurangan/pembatalan STP yang tidak benar** | Pasal 36 ayat (1) huruf c | STP yang tidak benar |\n| **Pembatalan hasil pemeriksaan/SKP** tanpa SPHP atau tanpa pembahasan akhir | Pasal 36 ayat (1) huruf d | Cacat prosedur pemeriksaan |\n\nPermohonan Pasal 36 dapat diajukan **paling banyak 2 kali**. Bila WP sudah menempuh Pasal 36, ia tidak dapat lagi mengajukan keberatan atas objek yang sama.\n\n---\n\n### 6. Perkembangan Terbaru — Putusan MK No. 26/PUU-XXI/2023\n\n> ⚠️ **Penting & terkini.** MK menyatakan **Pasal 5 ayat (2) UU 14/2002** (yang menempatkan pembinaan **organisasi, administrasi, dan keuangan** Pengadilan Pajak di bawah **Kementerian Keuangan**) **bertentangan dengan UUD 1945**. Akibatnya, pembinaan Pengadilan Pajak dialihkan **sepenuhnya ke Mahkamah Agung** (selama ini hanya pembinaan teknis yang di MA). Transisi paling lambat **31 Desember 2026**. Tujuannya memperkuat independensi peradilan pajak dari cabang eksekutif.\n\n---\n\n### 7. Tabel Ringkas Perbandingan Upaya Hukum\n\n| Aspek | Keberatan | Banding | Gugatan | PK |\n|---|---|---|---|---|\n| Lembaga | DJP | Pengadilan Pajak | Pengadilan Pajak | Mahkamah Agung |\n| Sifat | Materi | Materi | Formal | Luar biasa |\n| Batas ajukan | 3 bulan | 3 bulan | 14 / 30 hari | 3 bulan |\n| Batas putus | 12 bulan | 12 bulan (umumnya) | 6 bulan | 6 bulan |\n| Sanksi bila kalah | 30% | 60% | — | 60% |\n| Menunda penagihan? | Ya (yang belum disetujui) | Ya (s.d. 1 bln stlh putusan) | Tidak | Tidak |\n\n##### Tabel Perubahan Sanksi UU HPP\n\n| Tahap | Sebelum HPP | Sesudah HPP | Dasar |\n|---|---|---|---|\n| Keberatan ditolak/sebagian | 50% | **30%** | Pasal 25(9) |\n| Banding ditolak/sebagian | 100% | **60%** | Pasal 27(5d) |\n| PK menambah pajak | (belum diatur khusus) | **60%** | Pasal 27(5f) |\n\n---\n\n### 8. 📊 Simulasi — Eskalasi Sanksi\n\n**Diketahui:** SKPKB PT X = Rp1.000.000.000. Saat Pembahasan Akhir, PT X **tidak menyetujui seluruhnya** (membayar Rp0).\n\n| Skenario | Hasil | Sanksi | Total utang baru |\n|---|---|---|---|\n| Keberatan ditolak, tidak banding | SKP tetap Rp1 M | 30% × Rp1 M = **Rp300 jt** | Rp1,3 M |\n| Lanjut banding, banding ditolak | Putusan Rp1 M | 60% × Rp1 M = **Rp600 jt** (denda 30% keberatan gugur) | Rp1,6 M |\n| Lanjut PK, PK menambah pajak | Putusan PK menambah | 60% atas tambahan | bertambah |\n\n**Kesimpulan:** semakin tinggi tingkat upaya hukum, semakin besar risiko denda bila kalah → keputusan melanjutkan sengketa harus mempertimbangkan peluang menang.\n**Dasar Hukum:** Pasal 25(9), 27(5d), 27(5f) UU KUP.\n\n---\n\n### 9. Dasar Hukum Lengkap\n\n1. **UU KUP** (UU No. 6 Tahun 1983 sebagaimana telah beberapa kali diubah terakhir dengan UU No. 6 Tahun 2023; UU HPP No. 7 Tahun 2021 sebagai perubahan substantif utama):\n   - Pasal 16 (pembetulan); Pasal 23 (gugatan); Pasal 25, 26, 26A (keberatan); Pasal 27 (banding & PK) — termasuk ayat (5d) banding 60%, (5e) PK tidak menangguhkan, (5f) PK 60%, (5g) STP 2 tahun; Pasal 27B (imbalan bunga); Pasal 32 ayat (3) (kuasa); Pasal 36 (pengurangan/pembatalan).\n2. **UU No. 14 Tahun 2002** tentang Pengadilan Pajak — banding, gugatan, PK, alasan PK (Pasal 91), pembinaan (Pasal 5).\n3. **UU PPSP** (UU 19/1997 jo. UU 19/2000) — Pasal 37 (gugatan atas penagihan).\n4. **PP No. 50 Tahun 2022** — tata cara pelaksanaan hak & pemenuhan kewajiban (a.l. keberatan, Pasal 34).\n5. **PMK No. 118 Tahun 2024** — tata cara pembetulan, keberatan, pengurangan, penghapusan, dan pembatalan (pelaksana teknis Pasal 16, 25, 36).\n6. **Putusan MK No. 26/PUU-XXI/2023** — pembinaan Pengadilan Pajak dialihkan ke MA (transisi s.d. 31 Desember 2026).\n7. **SEMA No. 2 Tahun 2024** — pembatasan sengketa materi pada jalur banding (bukan gugatan).\n\n*Sumber verifikasi: pajak.go.id (DJP), DDTCNews, IKPI, KLC Kemenkeu, mkri.id, jdih.mahkamahagung.go.id.*\n\n[↑ Kembali ke Daftar Isi](#daftar-isi)\n\n---",
      "pages": [
        {
          "chunkId": "TM10-P01",
          "page": 1,
          "blocks": [
            {
              "k": "h",
              "text": "TM 10 — Penyelesaian Sengketa Pajak: Keberatan, Banding, Gugatan & Peninjauan Kembali"
            },
            {
              "k": "p",
              "text": "**Mata Kuliah:** Perpajakan I\n**Dasar Hukum Utama:** UU KUP (UU No. 6/1983 sebagaimana terakhir diubah dengan UU No. 6/2023; perubahan substantif melalui UU HPP No. 7/2021) · UU No. 14/2002 (Pengadilan Pajak) · PP No. 50/2022 · Putusan MK No. 26/PUU-XXI/2023 · SEMA No. 2/2024\n**Diperbarui mengikuti regulasi s.d.:** Juni 2026"
            }
          ]
        },
        {
          "chunkId": "TM10-P02",
          "page": 2,
          "blocks": [
            {
              "k": "h",
              "text": "0. Peta Upaya Hukum WP"
            },
            {
              "k": "p",
              "text": "Bila WP tidak setuju dengan ketetapan/tindakan DJP, tersedia jalur berjenjang. **Dua jalur utama** dibedakan dari objeknya:"
            },
            {
              "k": "pre",
              "text": "┌─ Sengketa MATERI (besarnya pajak) ─┐\nSKP/Pemotongan  →  KEBERATAN (ke DJP)  →  BANDING (Pengadilan Pajak)  →  PENINJAUAN KEMBALI (MA)\n                       └────────────────────────────────────┘\n\nPelaksanaan penagihan / keputusan prosedural  →  GUGATAN (Pengadilan Pajak)"
            },
            {
              "k": "pre",
              "text": "| Upaya Hukum | Diajukan ke | Sifat | Dasar |\n|---|---|---|---|\n| **Keberatan** | Dirjen Pajak (DJP) | Materi | Pasal 25–26A UU KUP |\n| **Banding** | Pengadilan Pajak | Materi | Pasal 27 UU KUP jo. UU 14/2002 |\n| **Gugatan** | Pengadilan Pajak | Formal/prosedural | Pasal 23 UU KUP jo. UU PPSP |\n| **Peninjauan Kembali** | Mahkamah Agung (via Pengadilan Pajak) | Luar biasa | UU 14/2002 jo. Pasal 27 UU KUP |"
            }
          ]
        },
        {
          "chunkId": "TM10-P03",
          "page": 3,
          "blocks": [
            {
              "k": "h",
              "text": "1. KEBERATAN"
            },
            {
              "k": "h",
              "text": "1.1 Dasar & Objek"
            },
            {
              "k": "p",
              "text": "Diatur **Pasal 25, 26, 26A UU KUP**, pelaksana **PP 50/2022** dan secara teknis **PMK No. 118 Tahun 2024** (Tata Cara Pembetulan, Keberatan, Pengurangan, Penghapusan, dan Pembatalan di Bidang Perpajakan). WP dapat mengajukan keberatan **hanya kepada Dirjen Pajak** atas:\n- SKPKB, SKPKBT, SKPN, SKPLB; atau\n- Pemotongan/pemungutan pajak oleh pihak ketiga."
            },
            {
              "k": "h",
              "text": "1.2 Syarat Formal (Pasal 25 ayat (2)–(4))"
            },
            {
              "k": "list",
              "items": [
                "Diajukan tertulis dalam Bahasa Indonesia dengan alasan jelas;",
                "**Satu keberatan untuk satu** SKP/pemotongan;",
                "Ditandatangani WP (bila bukan WP, lampirkan surat kuasa khusus — Pasal 32 ayat (3));",
                "**Wajib melunasi pajak yang telah disetujui** dalam Pembahasan Akhir Hasil Pemeriksaan sebelum mengajukan keberatan (Pasal 25 ayat (3a));",
                "WP belum mengajukan permohonan Pasal 36."
              ]
            },
            {
              "k": "h",
              "text": "1.3 Jangka Waktu"
            },
            {
              "k": "list",
              "items": [
                "**WP mengajukan:** paling lama **3 bulan** sejak tanggal SKP dikirim / pemotongan-pemungutan (kecuali force majeure).",
                "**DJP memutus:** paling lama **12 bulan** sejak surat keberatan diterima. **Lewat 12 bulan tanpa keputusan → keberatan dianggap dikabulkan** (Pasal 26 ayat (1) & (5)).",
                "Selama proses keberatan, jatuh tempo pelunasan atas jumlah yang **belum disetujui tertangguh** sampai 1 bulan sejak SK Keberatan terbit, dan **penagihan ditangguhkan** (Pasal 25 ayat (7))."
              ]
            },
            {
              "k": "h",
              "text": "1.4 Sanksi — **(BERUBAH, UU HPP)**"
            },
            {
              "k": "p",
              "text": "Bila keberatan **ditolak/dikabulkan sebagian** dan WP **tidak mengajukan banding**: denda **30%** dari jumlah pajak dalam SK Keberatan dikurangi pajak yang telah dibayar sebelum keberatan (**Pasal 25 ayat (9)**).\nBila WP **mengajukan banding**, denda 30% **tidak dikenakan** (Pasal 25 ayat (10))."
            },
            {
              "k": "pre",
              "text": "| Aspek | Sebelum UU HPP | Sesudah UU HPP |\n|---|---|---|\n| Denda keberatan ditolak/sebagian | **50%** | **30%** |"
            },
            {
              "k": "p",
              "text": "**Jika keberatan dikabulkan** sebagian/seluruhnya sehingga timbul kelebihan bayar, WP dapat memperoleh **imbalan bunga** (Pasal 27B) — lihat catatan imbalan bunga di §2.3."
            },
            {
              "k": "h",
              "text": "1.5 Hak WP & Konsekuensi Pencabutan Keberatan"
            },
            {
              "k": "list",
              "items": [
                "**Hak meminta keterangan (Pasal 25 ayat (6)):** sebelum mengajukan keberatan, WP berhak meminta secara tertulis dasar pengenaan pajak, penghitungan rugi, atau pemotongan/pemungutan, dan DJP wajib memberikannya.",
                "**Perbaikan surat keberatan:** bila syarat formal belum lengkap, WP dapat memperbaiki dan menyampaikan kembali **sebelum jangka waktu 3 bulan terlampaui**.",
                "**Konsekuensi pencabutan keberatan:** WP yang **mencabut** keberatan **kehilangan hak** mengajukan **pengurangan/pembatalan SKP yang tidak benar (Pasal 36)** atas SKP tersebut (Pasal 38 ayat (5) PP 50/2022). Jalur Pasal 36 bersifat **alternatif** — tidak dapat dipakai bila atas SKP yang sama keberatan sudah diajukan/diputus."
              ]
            }
          ]
        },
        {
          "chunkId": "TM10-P04",
          "page": 4,
          "blocks": [
            {
              "k": "h",
              "text": "2. BANDING"
            },
            {
              "k": "h",
              "text": "2.1 Dasar & Karakter"
            },
            {
              "k": "p",
              "text": "Diatur **Pasal 27 UU KUP jo. UU No. 14/2002 tentang Pengadilan Pajak**. Banding diajukan **hanya kepada Pengadilan Pajak** atas **SK Keberatan**. Bersifat **materi**. Putusan Pengadilan Pajak **bukan** Keputusan Tata Usaha Negara, bersifat **final dan mengikat (inkracht)** — **tidak ada upaya kasasi**, langsung ke PK."
            },
            {
              "k": "h",
              "text": "2.2 Syarat & Jangka Waktu"
            },
            {
              "k": "list",
              "items": [
                "Tertulis dalam Bahasa Indonesia, alasan jelas, dilampiri salinan SK Keberatan;",
                "**Satu SK Keberatan = satu Surat Banding**;",
                "Diajukan paling lama **3 bulan** sejak SK Keberatan diterima;",
                "Jatuh tempo pelunasan atas pajak yang belum dibayar saat keberatan **tertangguh sampai 1 bulan sejak Putusan Banding** terbit."
              ]
            },
            {
              "k": "h",
              "text": "2.3 Sanksi — **(BERUBAH, UU HPP)**"
            },
            {
              "k": "p",
              "text": "Bila banding **ditolak/dikabulkan sebagian**: denda **60%** dari jumlah pajak dalam Putusan Banding dikurangi pajak yang dibayar sebelum keberatan (**Pasal 27 ayat (5d)**)."
            },
            {
              "k": "pre",
              "text": "| Aspek | Sebelum UU HPP | Sesudah UU HPP |\n|---|---|---|\n| Denda banding ditolak/sebagian | **100%** | **60%** |"
            },
            {
              "k": "p",
              "text": "**Imbalan bunga (Pasal 27B).** Bila **keberatan, banding, atau PK dikabulkan** sebagian/seluruhnya sehingga timbul kelebihan bayar, WP berhak imbalan bunga: tarif `suku bunga acuan ÷ 12` (tanpa uplift), maks 24 bulan. **Catatan penting pasca-UU HPP:** imbalan bunga ini pada dasarnya hanya diberikan atas SPT yang semula menyatakan **lebih bayar**, dan jumlahnya **dibatasi paling banyak sebesar lebih bayar yang disetujui WP** dalam Pembahasan Akhir Hasil Pemeriksaan — jadi tidak otomatis diberikan pada setiap kemenangan sengketa."
            },
            {
              "k": "h",
              "text": "2.4 Pihak yang Berhak, Pencabutan & Proses Persidangan"
            },
            {
              "k": "list",
              "items": [
                "**Pihak yang dapat mengajukan banding:** WP, ahli warisnya, seorang pengurus, atau **kuasa hukum** (kuasa hukum di Pengadilan Pajak harus memenuhi syarat/izin kuasa hukum). → Jadi pernyataan \"kuasa hukum tidak bisa mengajukan banding\" adalah **keliru**.",
                "**Pencabutan banding:** banding yang dicabut dihapus dari daftar sengketa, dan WP **tidak dapat mengajukan banding ulang** atas sengketa yang sama (*ne bis in idem*, Pasal 39 ayat (3) UU 14/2002); SK Keberatan menjadi **inkracht** dan utang wajib dilunasi.",
                "**Proses persidangan (UU 14/2002):**",
                "*Pemeriksaan acara biasa* — diperiksa oleh **Majelis** (3 hakim); untuk banding & gugatan pada umumnya.",
                "*Pemeriksaan acara cepat* — oleh **Hakim Tunggal/Majelis** untuk sengketa tertentu (mis. kesalahan tulis/hitung, sengketa di luar wewenang Pengadilan Pajak, atau bila jangka waktu penyelesaian tidak dipenuhi)."
              ]
            }
          ]
        },
        {
          "chunkId": "TM10-P05",
          "page": 5,
          "blocks": [
            {
              "k": "h",
              "text": "3. GUGATAN"
            },
            {
              "k": "h",
              "text": "3.1 Dasar & Objek (bersifat FORMAL/prosedural)"
            },
            {
              "k": "p",
              "text": "Diatur **Pasal 23 UU KUP jo. Pasal 37 UU PPSP**, diajukan ke **Pengadilan Pajak**. Objek gugatan **bukan** besarnya pajak, melainkan:\n1. Pelaksanaan **Surat Paksa, SPMP (Surat Perintah Melaksanakan Penyitaan), atau Pengumuman Lelang**;\n2. Keputusan **pencegahan** dalam rangka penagihan;\n3. Keputusan yang berkaitan dengan pelaksanaan keputusan perpajakan **selain** yang ditetapkan Pasal 25 ayat (1) & Pasal 26;\n4. Penerbitan SKP atau SK Keberatan yang **prosedur penerbitannya tidak sesuai** ketentuan."
            },
            {
              "k": "h",
              "text": "3.2 Jangka Waktu"
            },
            {
              "k": "list",
              "items": [
                "Terhadap **pelaksanaan penagihan**: **14 hari** sejak pelaksanaan penagihan;",
                "Terhadap **keputusan lain**: **30 hari** sejak keputusan diterima."
              ]
            },
            {
              "k": "h",
              "text": "3.3 Karakter"
            },
            {
              "k": "list",
              "items": [
                "Gugatan **tidak menunda/menghalangi** penagihan pajak;",
                "**Tidak ada sanksi denda** bila gugatan ditolak/dikabulkan sebagian."
              ]
            },
            {
              "k": "p",
              "text": "**Perkembangan — SEMA No. 2 Tahun 2024:** Mahkamah Agung menegaskan sengketa **materi** harus ditempuh lewat **banding**, bukan gugatan. Gugatan dibatasi pada aspek formal/prosedural agar tidak mengaburkan fungsi keberatan & banding."
            }
          ]
        },
        {
          "chunkId": "TM10-P06",
          "page": 6,
          "blocks": [
            {
              "k": "h",
              "text": "4. PENINJAUAN KEMBALI (PK)"
            },
            {
              "k": "h",
              "text": "4.1 Dasar & Karakter"
            },
            {
              "k": "p",
              "text": "Upaya hukum **luar biasa** ke **Mahkamah Agung** melalui Pengadilan Pajak. Diatur **UU 14/2002 jo. Pasal 27 UU KUP**. Hanya dapat diajukan **1 (satu) kali**."
            },
            {
              "k": "h",
              "text": "4.2 Alasan PK (terbatas — Pasal 91 UU 14/2002), a.l.:"
            },
            {
              "k": "list",
              "items": [
                "Putusan didasarkan kebohongan/tipu muslihat pihak lawan, atau bukti palsu;",
                "Terdapat **bukti tertulis baru (novum)** yang menentukan;",
                "Dikabulkan suatu hal yang tidak dituntut / melebihi tuntutan;",
                "Ada bagian tuntutan yang belum diputus tanpa pertimbangan;",
                "Putusan nyata tidak sesuai ketentuan perundang-undangan."
              ]
            },
            {
              "k": "h",
              "text": "4.3 Jangka Waktu & Akibat"
            },
            {
              "k": "list",
              "items": [
                "Diajukan paling lama **3 bulan** (dihitung sesuai jenis alasan — mis. sejak diketahui kebohongan, sejak novum ditemukan, atau sejak putusan banding dikirim);",
                "**PK tidak menangguhkan/menghentikan** pelaksanaan Putusan Pengadilan Pajak (**Pasal 27 ayat (5e)**)."
              ]
            },
            {
              "k": "h",
              "text": "4.4 Sanksi"
            },
            {
              "k": "p",
              "text": "Bila **Putusan PK menyebabkan pajak bertambah**: denda **60%** dari jumlah pajak dalam Putusan PK dikurangi pajak yang dibayar sebelum keberatan (**Pasal 27 ayat (5f)**). STP atas sanksi ini diterbitkan paling lama **2 tahun** sejak Putusan PK diterima DJP (Pasal 27 ayat (5g)).\nBila PK dikabulkan sehingga timbul kelebihan bayar → WP berhak **imbalan bunga** (Pasal 27B), dengan ketentuan & batasan yang sama seperti diuraikan di §2.3."
            }
          ]
        },
        {
          "chunkId": "TM10-P07",
          "page": 7,
          "blocks": [
            {
              "k": "h",
              "text": "5. Upaya Hukum Administratif Lain (Pasal 16 & 36 UU KUP)"
            },
            {
              "k": "p",
              "text": "Selain keberatan/banding/gugatan/PK, WP punya jalur **administratif** ke DJP (bukan ke pengadilan). Diatur teknis dalam **PMK 118/2024**."
            },
            {
              "k": "pre",
              "text": "| Jalur | Dasar | Untuk apa |\n|---|---|---|\n| **Pembetulan** | Pasal 16 UU KUP | Membetulkan SKP/STP/keputusan yang terdapat **salah tulis, salah hitung, atau kekeliruan penerapan** ketentuan tertentu (bukan sengketa materi) |\n| **Pengurangan/penghapusan sanksi administrasi** | Pasal 36 ayat (1) huruf a | Sanksi dikenakan karena kekhilafan WP atau bukan kesalahannya |\n| **Pengurangan/pembatalan SKP yang tidak benar** | Pasal 36 ayat (1) huruf b | SKP yang nyata-nyata tidak benar |\n| **Pengurangan/pembatalan STP yang tidak benar** | Pasal 36 ayat (1) huruf c | STP yang tidak benar |\n| **Pembatalan hasil pemeriksaan/SKP** tanpa SPHP atau tanpa pembahasan akhir | Pasal 36 ayat (1) huruf d | Cacat prosedur pemeriksaan |"
            },
            {
              "k": "p",
              "text": "Permohonan Pasal 36 dapat diajukan **paling banyak 2 kali**. Bila WP sudah menempuh Pasal 36, ia tidak dapat lagi mengajukan keberatan atas objek yang sama."
            }
          ]
        },
        {
          "chunkId": "TM10-P08",
          "page": 8,
          "blocks": [
            {
              "k": "h",
              "text": "6. Perkembangan Terbaru — Putusan MK No. 26/PUU-XXI/2023"
            },
            {
              "k": "p",
              "text": "⚠️ **Penting & terkini.** MK menyatakan **Pasal 5 ayat (2) UU 14/2002** (yang menempatkan pembinaan **organisasi, administrasi, dan keuangan** Pengadilan Pajak di bawah **Kementerian Keuangan**) **bertentangan dengan UUD 1945**. Akibatnya, pembinaan Pengadilan Pajak dialihkan **sepenuhnya ke Mahkamah Agung** (selama ini hanya pembinaan teknis yang di MA). Transisi paling lambat **31 Desember 2026**. Tujuannya memperkuat independensi peradilan pajak dari cabang eksekutif."
            }
          ]
        },
        {
          "chunkId": "TM10-P09",
          "page": 9,
          "blocks": [
            {
              "k": "h",
              "text": "7. Tabel Ringkas Perbandingan Upaya Hukum"
            },
            {
              "k": "pre",
              "text": "| Aspek | Keberatan | Banding | Gugatan | PK |\n|---|---|---|---|---|\n| Lembaga | DJP | Pengadilan Pajak | Pengadilan Pajak | Mahkamah Agung |\n| Sifat | Materi | Materi | Formal | Luar biasa |\n| Batas ajukan | 3 bulan | 3 bulan | 14 / 30 hari | 3 bulan |\n| Batas putus | 12 bulan | 12 bulan (umumnya) | 6 bulan | 6 bulan |\n| Sanksi bila kalah | 30% | 60% | — | 60% |\n| Menunda penagihan? | Ya (yang belum disetujui) | Ya (s.d. 1 bln stlh putusan) | Tidak | Tidak |"
            },
            {
              "k": "h",
              "text": "Tabel Perubahan Sanksi UU HPP"
            },
            {
              "k": "pre",
              "text": "| Tahap | Sebelum HPP | Sesudah HPP | Dasar |\n|---|---|---|---|\n| Keberatan ditolak/sebagian | 50% | **30%** | Pasal 25(9) |\n| Banding ditolak/sebagian | 100% | **60%** | Pasal 27(5d) |\n| PK menambah pajak | (belum diatur khusus) | **60%** | Pasal 27(5f) |"
            }
          ]
        },
        {
          "chunkId": "TM10-P10",
          "page": 10,
          "blocks": [
            {
              "k": "h",
              "text": "8. 📊 Simulasi — Eskalasi Sanksi"
            },
            {
              "k": "p",
              "text": "**Diketahui:** SKPKB PT X = Rp1.000.000.000. Saat Pembahasan Akhir, PT X **tidak menyetujui seluruhnya** (membayar Rp0)."
            },
            {
              "k": "pre",
              "text": "| Skenario | Hasil | Sanksi | Total utang baru |\n|---|---|---|---|\n| Keberatan ditolak, tidak banding | SKP tetap Rp1 M | 30% × Rp1 M = **Rp300 jt** | Rp1,3 M |\n| Lanjut banding, banding ditolak | Putusan Rp1 M | 60% × Rp1 M = **Rp600 jt** (denda 30% keberatan gugur) | Rp1,6 M |\n| Lanjut PK, PK menambah pajak | Putusan PK menambah | 60% atas tambahan | bertambah |"
            },
            {
              "k": "p",
              "text": "**Kesimpulan:** semakin tinggi tingkat upaya hukum, semakin besar risiko denda bila kalah → keputusan melanjutkan sengketa harus mempertimbangkan peluang menang.\n**Dasar Hukum:** Pasal 25(9), 27(5d), 27(5f) UU KUP."
            }
          ]
        },
        {
          "chunkId": "TM10-P11",
          "page": 11,
          "blocks": [
            {
              "k": "h",
              "text": "9. Dasar Hukum Lengkap"
            },
            {
              "k": "list",
              "items": [
                "**UU KUP** (UU No. 6 Tahun 1983 sebagaimana telah beberapa kali diubah terakhir dengan UU No. 6 Tahun 2023; UU HPP No. 7 Tahun 2021 sebagai perubahan substantif utama):",
                "Pasal 16 (pembetulan); Pasal 23 (gugatan); Pasal 25, 26, 26A (keberatan); Pasal 27 (banding & PK) — termasuk ayat (5d) banding 60%, (5e) PK tidak menangguhkan, (5f) PK 60%, (5g) STP 2 tahun; Pasal 27B (imbalan bunga); Pasal 32 ayat (3) (kuasa); Pasal 36 (pengurangan/pembatalan).",
                "**UU No. 14 Tahun 2002** tentang Pengadilan Pajak — banding, gugatan, PK, alasan PK (Pasal 91), pembinaan (Pasal 5).",
                "**UU PPSP** (UU 19/1997 jo. UU 19/2000) — Pasal 37 (gugatan atas penagihan).",
                "**PP No. 50 Tahun 2022** — tata cara pelaksanaan hak & pemenuhan kewajiban (a.l. keberatan, Pasal 34).",
                "**PMK No. 118 Tahun 2024** — tata cara pembetulan, keberatan, pengurangan, penghapusan, dan pembatalan (pelaksana teknis Pasal 16, 25, 36).",
                "**Putusan MK No. 26/PUU-XXI/2023** — pembinaan Pengadilan Pajak dialihkan ke MA (transisi s.d. 31 Desember 2026).",
                "**SEMA No. 2 Tahun 2024** — pembatasan sengketa materi pada jalur banding (bukan gugatan)."
              ]
            },
            {
              "k": "p",
              "text": "*Sumber verifikasi: pajak.go.id (DJP), DDTCNews, IKPI, KLC Kemenkeu, mkri.id, jdih.mahkamahagung.go.id.*"
            },
            {
              "k": "p",
              "text": "[↑ Kembali ke Daftar Isi](#daftar-isi)"
            }
          ]
        }
      ]
    },
    {
      "tm": 11,
      "title": "TM 11 — Penagihan Pajak, Surat Paksa, Hak Mendahulu & Tindak Pidana Fiskal",
      "sourcePdf": "Materi_Perpajakan_I_TM8-14_Kompilasi (2).md",
      "sourceFile": "Materi_Perpajakan_I_TM8-14_Kompilasi (2).md",
      "lawBasis": "UU KUP (UU No. 6/1983 sebagaimana terakhir diubah dengan UU No. 6/2023; perubahan substantif melalui UU HPP No. 7/2021) · UU PPSP (UU No. 19/1997 jo. UU No. 19/2000) · PMK No. 61/2023 · PMK No. 81/2024 sebagaimana diubah terakhir dengan PMK No. 1/2026 (Coretax)",
      "body_markdown": "## TM 11 — Penagihan Pajak, Surat Paksa, Hak Mendahulu & Tindak Pidana Fiskal\n\n**Mata Kuliah:** Perpajakan I\n**Dasar Hukum Utama:** UU KUP (UU No. 6/1983 sebagaimana terakhir diubah dengan UU No. 6/2023; perubahan substantif melalui UU HPP No. 7/2021) · UU PPSP (UU No. 19/1997 jo. UU No. 19/2000) · PMK No. 61/2023 · PMK No. 81/2024 sebagaimana diubah terakhir dengan PMK No. 1/2026 (Coretax)\n**Diperbarui mengikuti regulasi s.d.:** Juni 2026\n\n---\n\n### 0. Konsep Penagihan Pajak\n\n**Penagihan pajak** (Pasal 1 angka 9 UU PPSP) = serangkaian tindakan agar **Penanggung Pajak** melunasi utang pajak dan biaya penagihan. Dua bentuk:\n\n- **Penagihan pasif** — DJP hanya menerbitkan **dasar penagihan** (STP/SKP dll.) dan menunggu pelunasan sampai jatuh tempo.\n- **Penagihan aktif** — Jurusita Pajak melakukan tindakan nyata (teguran, surat paksa, sita, lelang) bila utang tidak dilunasi.\n\n> **Dasar pelaksana terbaru:** **PMK No. 61 Tahun 2023** (ditetapkan 9 Juni 2023, diundangkan dan mulai berlaku 12 Juni 2023), menggantikan PMK 189/2020. Pada era Coretax, dokumen penagihan diadministrasikan melalui sistem sesuai **PMK 81/2024 sebagaimana diubah terakhir dengan PMK 1/2026**.\n\n#### 0.1 Dasar Penagihan Pajak (Pasal 18 UU KUP)\nSTP, SKPKB, SKPKBT, SK Pembetulan, SK Keberatan, Putusan Banding, dan Putusan PK — sepanjang **menyebabkan jumlah pajak yang masih harus dibayar bertambah**.\n\n#### 0.2 Penanggung Pajak & Jurusita\n- **Penanggung Pajak** (Pasal 1 angka 28 UU KUP / Pasal 1 angka 3 UU PPSP): orang/badan yang bertanggung jawab atas pembayaran pajak, **termasuk** wakil, dan untuk badan mencakup pengurus, **komisaris, pemegang saham/pemilik modal**.\n- **Jurusita Pajak**: pelaksana tindakan penagihan, dengan **4 tugas** (Pasal 5 UU PPSP): (1) melaksanakan **Surat Perintah Penagihan Seketika dan Sekaligus**; (2) memberitahukan **Surat Paksa**; (3) melaksanakan **penyitaan** atas barang Penanggung Pajak; dan (4) melaksanakan **penyanderaan**. Jurusita berwenang memasuki & memeriksa ruangan tempat barang Penanggung Pajak disimpan.\n\n---\n\n### 1. PENAGIHAN PROSEDURAL (Penagihan Aktif) — Tahapan & Jangka Waktu\n\n```\nJatuh tempo (1 bulan, tidak dilunasi)\n   │  + 7 hari\n   ▼\nSURAT TEGURAN\n   │  + 21 hari\n   ▼\nSURAT PAKSA  ── kekuatan eksekutorial\n   │  + 2 × 24 jam\n   ▼\nPENYITAAN (SPMP)\n   │  + 14 hari\n   ▼\nPENGUMUMAN LELANG\n   │  + 14 hari\n   ▼\nLELANG\n```\n\n| Tahap | Diterbitkan/dilaksanakan | Catatan |\n|---|---|---|\n| **Surat Teguran** | Setelah **7 hari** sejak jatuh tempo pelunasan | Peringatan awal |\n| **Surat Paksa** | Setelah **21 hari** sejak Surat Teguran | Lihat §2 |\n| **SPMP / Penyitaan** | Setelah **2 × 24 jam** sejak Surat Paksa diberitahukan | Barang dijadikan jaminan |\n| **Pengumuman Lelang** | Setelah **14 hari** sejak penyitaan | — |\n| **Lelang** | Setelah **14 hari** sejak Pengumuman Lelang | Hasil untuk lunasi utang + biaya |\n\n#### 📊 Simulasi — Timeline Penagihan Aktif\nSKPKB PT Maju jatuh tempo **31 Januari 2026** dan tidak dilunasi. Tahapan (tanggal indikatif; hari libur dapat menggeser ke hari kerja berikutnya):\n\n| Peristiwa | Pemicu | Tanggal indikatif |\n|---|---|---|\n| Surat Teguran | 7 hari sejak jatuh tempo | ± 7 Februari 2026 |\n| Surat Paksa | 21 hari sejak Surat Teguran | ± 28 Februari 2026 |\n| SPMP / Penyitaan | 2 × 24 jam sejak Surat Paksa | ± 2 Maret 2026 |\n| Pengumuman Lelang | 14 hari sejak penyitaan | ± 16 Maret 2026 |\n| Lelang | 14 hari sejak pengumuman | ± 30 Maret 2026 |\n\n> **Catatan jebakan:** penyitaan dilakukan **2 × 24 jam** setelah Surat Paksa — bukan \"7 hari\". Pada tiap tahap WP masih dapat melunasi untuk menghentikan proses.\n\n---\n\n### 2. SURAT PAKSA\n\n- **Definisi:** surat perintah membayar utang pajak dan biaya penagihan pajak.\n- **Kekuatan eksekutorial:** berkepala **\"DEMI KEADILAN BERDASARKAN KETUHANAN YANG MAHA ESA\"** — mempunyai kekuatan hukum yang **sama dengan putusan pengadilan yang telah inkracht**, sehingga dapat langsung dieksekusi.\n- Diterbitkan setelah lewat **21 hari** sejak Surat Teguran, disampaikan **langsung** oleh Jurusita Pajak (dibacakan dan diserahkan salinannya).\n\n---\n\n### 3. PENAGIHAN SEKETIKA DAN SEKALIGUS\n\n**Dasar:** Pasal 20 UU KUP jo. Pasal 6 UU PPSP; kondisi dirinci di **Pasal 12 PMK 61/2023**.\nPenagihan oleh Jurusita **tanpa menunggu jatuh tempo**, meliputi **seluruh utang pajak** dari semua jenis/masa/tahun pajak — dan **dapat dilakukan tanpa Surat Teguran maupun Surat Paksa terlebih dahulu** (diterbitkan Surat Perintah Penagihan Seketika dan Sekaligus).\n\n**Kondisi (a.l.):**\n1. Penanggung Pajak akan **meninggalkan Indonesia** selama-lamanya / berniat demikian;\n2. **Memindahtangankan** barang untuk menghentikan/mengecilkan kegiatan usaha di Indonesia;\n3. Terdapat tanda-tanda **badan akan dibubarkan**, digabung, dimekarkan, dipindahtangankan, atau diubah bentuknya;\n4. Badan akan dibubarkan oleh negara; atau penyitaan oleh pihak ketiga / tanda kepailitan.\n\n---\n\n### 4. PENCEGAHAN & PENYANDERAAN (Upaya Paksa Badan)\n\nDiatur dalam **UU PPSP** (bukan UU KUP). Merupakan upaya **terakhir** terhadap Penanggung Pajak yang tidak kooperatif.\n\n| Aspek | Pencegahan | Penyanderaan (*gijzeling*) |\n|---|---|---|\n| Bentuk | Larangan **keluar** wilayah RI sementara | Pengekangan **kebebasan** sementara di tempat tertentu |\n| Syarat | Utang pajak **≥ Rp100 juta** & diragukan itikad baik | Utang pajak **≥ Rp100 juta** & diragukan itikad baik |\n| Jangka waktu | **6 bulan**, dapat diperpanjang **6 bulan** (Pasal 56(4) PMK 61/2023) | **6 bulan**, dapat diperpanjang **6 bulan** (Pasal 66(3) PMK 61/2023) |\n| Izin | Keputusan Menteri Keuangan | Izin Menteri Keuangan |\n| Dasar | UU PPSP | UU PPSP (Pasal 33 dst.) |\n\n> Penyanderaan dapat dilaksanakan terhadap Penanggung Pajak yang **telah/sedang dicegah**. Penanggung Pajak yang disandera tetap berhak dikunjungi keluarga/pengacara/rohaniawan (dengan izin) dan dilepas bila utang + biaya penagihan dilunasi.\n\n> Gugatan atas pelaksanaan **Surat Paksa/SPMP/Pengumuman Lelang** diajukan ke **Pengadilan Pajak**; sedangkan gugatan atas **penyanderaan** diajukan ke **Pengadilan Negeri**.\n\n---\n\n### 5. HAK MENDAHULU (Pasal 21 UU KUP)\n\nNegara mempunyai **hak mendahulu** atas utang pajak terhadap barang-barang milik Penanggung Pajak → negara berkedudukan sebagai **kreditur preferen** (didahulukan pelunasannya dibanding kreditur lain saat barang dilelang), sejalan dengan hak istimewa dalam Pasal 1134 KUH Perdata.\n- Hak mendahulu meliputi pokok pajak, sanksi (bunga, denda, kenaikan), dan biaya penagihan.\n- Pengecualian: tidak berlaku atas biaya perkara penjualan barang, biaya penyelamatan barang, dan biaya hukum lelang.\n- **Batas waktu (Pasal 21 ayat (4)):** hak mendahulu **hilang setelah 5 tahun** sejak penerbitan dasar penagihan, kecuali tertangguh (mis. diterbitkan Surat Paksa atau ada penundaan pembayaran).\n\n---\n\n### 6. DALUWARSA PENAGIHAN (Pasal 22 UU KUP)\n\n- Hak menagih pajak (termasuk bunga, kenaikan, biaya penagihan) **daluwarsa setelah 5 tahun** sejak penerbitan dasar penagihan.\n- Daluwarsa **tertangguh** apabila, a.l.: diterbitkan Surat Paksa; ada pengakuan utang pajak dari WP (langsung/tidak langsung); diterbitkan SKPKB/SKPKBT; atau dilakukan penyidikan tindak pidana perpajakan.\n\n---\n\n### 7. TINDAK PIDANA FISKAL (Ketentuan Pidana UU KUP setelah UU 1/2026)\n\n> **Overlay wajib sejak 2 Januari 2026:** ancaman pidana dalam UU KUP dibaca bersama **UU No. 1 Tahun 2026 tentang Penyesuaian Pidana**. Rumusan minimum khusus dan pola kumulatif lama tidak lagi dipakai sebagai ancaman aktif.\n\nPidana adalah **ultimum remedium**. **Empat unsur tindak pidana** perpajakan: (1) **subjek**, (2) **perbuatan**, (3) **akibat** (kerugian pendapatan negara), dan (4) **kesalahan** (kealpaan/kesengajaan). Subjek \"setiap orang\" diperluas oleh **Pasal 43 UU KUP** mencakup wakil, kuasa, pegawai WP, atau **pihak lain yang menyuruh, turut serta, menganjurkan, atau membantu** tindak pidana.\n\n| Pasal | Perbuatan | Ancaman setelah UU 1/2026 |\n|---|---|---|\n| **Pasal 38** | **Kealpaan** menyampaikan SPT atau menyampaikan SPT tidak benar/tidak lengkap sehingga merugikan pendapatan negara | **Denda paling banyak 2×** jumlah pajak terutang yang tidak atau kurang dibayar |\n| **Pasal 39 ayat (1)** | **Kesengajaan**, misalnya tidak mendaftar, tidak menyampaikan SPT, pembukuan palsu, atau tidak menyetor pajak yang telah dipotong/dipungut | Penjara **paling lama 6 tahun dan/atau** denda **paling banyak 4×** pajak terutang yang tidak atau kurang dibayar |\n| **Pasal 39 ayat (2)** | Pengulangan sebelum lewat 1 tahun sejak selesai menjalani pidana | Ketentuan pemberatan tetap harus dibaca bersama penyesuaian pidana 2026 |\n| **Pasal 39 ayat (3)** | Percobaan penyalahgunaan NPWP/PKP atau SPT palsu untuk restitusi, kompensasi, atau pengkreditan | Penjara **paling lama 2 tahun dan/atau** denda **paling banyak 4×** jumlah restitusi/kompensasi/pengkreditan |\n| **Pasal 39A** | Faktur pajak atau bukti potong/pungut/setor tidak berdasarkan transaksi sebenarnya | Penjara **paling lama 6 tahun dan/atau** denda **paling banyak 6×** jumlah pajak dalam dokumen tersebut |\n| **Pasal 41 ayat (1)** | Pejabat karena kealpaan membocorkan rahasia Wajib Pajak | Denda paling banyak **kategori III (Rp50 juta)** |\n| **Pasal 41 ayat (2)** | Pejabat dengan sengaja membocorkan rahasia Wajib Pajak | Penjara **paling lama 2 tahun dan/atau** denda paling banyak **kategori III (Rp50 juta)** |\n| **Pasal 41A** | Sengaja tidak memberikan keterangan atau bukti yang diminta | Denda paling banyak **kategori III (Rp50 juta)** |\n| **Pasal 41B** | Sengaja menghalangi atau mempersulit penyidikan | Penjara **paling lama 3 tahun dan/atau** denda paling banyak **kategori III (Rp50 juta)** |\n| **Pasal 41C ayat (1)–(4)** | Pelanggaran kewajiban data/informasi pihak ketiga | Denda paling banyak **kategori III (Rp50 juta)** |\n\n> **Pasal 44C UU HPP (baru):** pidana **denda** dalam Pasal 39 & 39A **tidak dapat digantikan dengan pidana kurungan** — harus tetap dibayar. Ini memperkuat orientasi pemulihan kerugian negara.\n\n> **Pasal 44D UU HPP (baru):** persidangan tindak pidana perpajakan dapat dilakukan **secara in absentia** (tanpa kehadiran terdakwa) apabila terdakwa telah dipanggil secara sah tetapi tidak hadir.\n\n#### 7.1 Daluwarsa Penuntutan (Pasal 40 UU KUP)\nTindak pidana di bidang perpajakan **tidak dapat dituntut setelah lampau 10 tahun** sejak saat terutangnya pajak / berakhirnya Masa, Bagian Tahun, atau Tahun Pajak.\n\n#### 7.2 Pintu Keluar (kaitan dengan TM 8)\n- **Pasal 8 ayat (3) jo. Pasal 44A** — pengungkapan ketidakbenaran perbuatan sebelum SPDP dikirim;\n- **Pasal 44B** — penghentian penyidikan demi penerimaan negara (denda berjenjang 1×/3×/4×).\n\n#### 7.3 📊 Simulasi — Sanksi Pidana\n**Kasus.** Tuan D dengan sengaja tidak menyetorkan PPN yang telah dipungut sebesar **Rp500.000.000** (memenuhi unsur Pasal 39).\n- **Pidana penjara:** paling lama 6 tahun.\n- **Pidana denda:** paling banyak 4× jumlah pajak yang tidak/kurang dibayar → maksimum **Rp2.000.000.000**.\n- Setelah UU 1/2026, rumusannya menjadi penjara **dan/atau** denda; batas minimum lama tidak lagi dipakai sebagai rumusan aktif.\n\nBila perbuatannya berupa **menerbitkan faktur pajak fiktif** senilai pajak Rp500.000.000 (Pasal 39A), ancaman setelah UU No. 1 Tahun 2026 adalah pidana penjara **paling lama 6 tahun dan/atau** pidana denda **paling banyak 6×** jumlah pajak dalam dokumen tersebut → denda maksimum **Rp3.000.000.000**.\n\n> Berdasarkan **Pasal 44C UU HPP**, pidana **denda** pada Pasal 39 & 39A **tidak dapat diganti dengan kurungan** — tetap wajib dibayar.\n\n---\n\n### 8. Dasar Hukum Lengkap\n\n1. **UU KUP** (UU No. 6 Tahun 1983 sebagaimana telah beberapa kali diubah terakhir dengan UU No. 6 Tahun 2023; UU HPP No. 7 Tahun 2021 sebagai perubahan substantif utama), **dibaca bersama UU No. 1 Tahun 2026 tentang Penyesuaian Pidana**:\n   - Pasal 18 (dasar penagihan); Pasal 20 (penagihan seketika & sekaligus); Pasal 21 (hak mendahulu); Pasal 22 (daluwarsa penagihan);\n   - Pasal 38, 39, 39A, 41, 41A, 41B, 41C, 43 (ketentuan pidana); Pasal 40 (daluwarsa penuntutan); Pasal 44A, 44B, 44C, 44D.\n2. **UU PPSP** (UU No. 19/1997 jo. UU No. 19/2000) — surat paksa, penyitaan, lelang, pencegahan, penyanderaan, gugatan penagihan.\n3. **PMK No. 61 Tahun 2023** — tata cara penagihan pajak (pengganti PMK 189/2020): tahapan, jangka waktu, kondisi penagihan seketika & sekaligus (Pasal 12).\n4. **PMK No. 81 Tahun 2024 sebagaimana diubah terakhir dengan PMK No. 1 Tahun 2026** (Coretax) — administrasi dokumen penagihan secara elektronik dan penyeragaman jatuh tempo.\n\n*Sumber verifikasi: pajak.go.id (DJP), DDTCNews, Ortax, Pajakku, Klikpajak, marinews.mahkamahagung.go.id, hukumonline.*\n\n[↑ Kembali ke Daftar Isi](#daftar-isi)\n\n---",
      "pages": [
        {
          "chunkId": "TM11-P01",
          "page": 1,
          "blocks": [
            {
              "k": "h",
              "text": "TM 11 — Penagihan Pajak, Surat Paksa, Hak Mendahulu & Tindak Pidana Fiskal"
            },
            {
              "k": "p",
              "text": "**Mata Kuliah:** Perpajakan I\n**Dasar Hukum Utama:** UU KUP (UU No. 6/1983 sebagaimana terakhir diubah dengan UU No. 6/2023; perubahan substantif melalui UU HPP No. 7/2021) · UU PPSP (UU No. 19/1997 jo. UU No. 19/2000) · PMK No. 61/2023 · PMK No. 81/2024 sebagaimana diubah terakhir dengan PMK No. 1/2026 (Coretax)\n**Diperbarui mengikuti regulasi s.d.:** Juni 2026"
            }
          ]
        },
        {
          "chunkId": "TM11-P02",
          "page": 2,
          "blocks": [
            {
              "k": "h",
              "text": "0. Konsep Penagihan Pajak"
            },
            {
              "k": "p",
              "text": "**Penagihan pajak** (Pasal 1 angka 9 UU PPSP) = serangkaian tindakan agar **Penanggung Pajak** melunasi utang pajak dan biaya penagihan. Dua bentuk:"
            },
            {
              "k": "list",
              "items": [
                "**Penagihan pasif** — DJP hanya menerbitkan **dasar penagihan** (STP/SKP dll.) dan menunggu pelunasan sampai jatuh tempo.",
                "**Penagihan aktif** — Jurusita Pajak melakukan tindakan nyata (teguran, surat paksa, sita, lelang) bila utang tidak dilunasi."
              ]
            },
            {
              "k": "p",
              "text": "**Dasar pelaksana terbaru:** **PMK No. 61 Tahun 2023** (ditetapkan 9 Juni 2023, diundangkan dan mulai berlaku 12 Juni 2023), menggantikan PMK 189/2020. Pada era Coretax, dokumen penagihan diadministrasikan melalui sistem sesuai **PMK 81/2024 sebagaimana diubah terakhir dengan PMK 1/2026**."
            },
            {
              "k": "h",
              "text": "0.1 Dasar Penagihan Pajak (Pasal 18 UU KUP)"
            },
            {
              "k": "p",
              "text": "STP, SKPKB, SKPKBT, SK Pembetulan, SK Keberatan, Putusan Banding, dan Putusan PK — sepanjang **menyebabkan jumlah pajak yang masih harus dibayar bertambah**."
            },
            {
              "k": "h",
              "text": "0.2 Penanggung Pajak & Jurusita"
            },
            {
              "k": "list",
              "items": [
                "**Penanggung Pajak** (Pasal 1 angka 28 UU KUP / Pasal 1 angka 3 UU PPSP): orang/badan yang bertanggung jawab atas pembayaran pajak, **termasuk** wakil, dan untuk badan mencakup pengurus, **komisaris, pemegang saham/pemilik modal**.",
                "**Jurusita Pajak**: pelaksana tindakan penagihan, dengan **4 tugas** (Pasal 5 UU PPSP): (1) melaksanakan **Surat Perintah Penagihan Seketika dan Sekaligus**; (2) memberitahukan **Surat Paksa**; (3) melaksanakan **penyitaan** atas barang Penanggung Pajak; dan (4) melaksanakan **penyanderaan**. Jurusita berwenang memasuki & memeriksa ruangan tempat barang Penanggung Pajak disimpan."
              ]
            }
          ]
        },
        {
          "chunkId": "TM11-P03",
          "page": 3,
          "blocks": [
            {
              "k": "h",
              "text": "1. PENAGIHAN PROSEDURAL (Penagihan Aktif) — Tahapan & Jangka Waktu"
            },
            {
              "k": "pre",
              "text": "Jatuh tempo (1 bulan, tidak dilunasi)\n   │  + 7 hari\n   ▼\nSURAT TEGURAN\n   │  + 21 hari\n   ▼\nSURAT PAKSA  ── kekuatan eksekutorial\n   │  + 2 × 24 jam\n   ▼\nPENYITAAN (SPMP)\n   │  + 14 hari\n   ▼\nPENGUMUMAN LELANG\n   │  + 14 hari\n   ▼\nLELANG"
            },
            {
              "k": "pre",
              "text": "| Tahap | Diterbitkan/dilaksanakan | Catatan |\n|---|---|---|\n| **Surat Teguran** | Setelah **7 hari** sejak jatuh tempo pelunasan | Peringatan awal |\n| **Surat Paksa** | Setelah **21 hari** sejak Surat Teguran | Lihat §2 |\n| **SPMP / Penyitaan** | Setelah **2 × 24 jam** sejak Surat Paksa diberitahukan | Barang dijadikan jaminan |\n| **Pengumuman Lelang** | Setelah **14 hari** sejak penyitaan | — |\n| **Lelang** | Setelah **14 hari** sejak Pengumuman Lelang | Hasil untuk lunasi utang + biaya |"
            },
            {
              "k": "h",
              "text": "📊 Simulasi — Timeline Penagihan Aktif"
            },
            {
              "k": "p",
              "text": "SKPKB PT Maju jatuh tempo **31 Januari 2026** dan tidak dilunasi. Tahapan (tanggal indikatif; hari libur dapat menggeser ke hari kerja berikutnya):"
            },
            {
              "k": "pre",
              "text": "| Peristiwa | Pemicu | Tanggal indikatif |\n|---|---|---|\n| Surat Teguran | 7 hari sejak jatuh tempo | ± 7 Februari 2026 |\n| Surat Paksa | 21 hari sejak Surat Teguran | ± 28 Februari 2026 |\n| SPMP / Penyitaan | 2 × 24 jam sejak Surat Paksa | ± 2 Maret 2026 |\n| Pengumuman Lelang | 14 hari sejak penyitaan | ± 16 Maret 2026 |\n| Lelang | 14 hari sejak pengumuman | ± 30 Maret 2026 |"
            },
            {
              "k": "p",
              "text": "**Catatan jebakan:** penyitaan dilakukan **2 × 24 jam** setelah Surat Paksa — bukan \"7 hari\". Pada tiap tahap WP masih dapat melunasi untuk menghentikan proses."
            }
          ]
        },
        {
          "chunkId": "TM11-P04",
          "page": 4,
          "blocks": [
            {
              "k": "h",
              "text": "2. SURAT PAKSA"
            },
            {
              "k": "list",
              "items": [
                "**Definisi:** surat perintah membayar utang pajak dan biaya penagihan pajak.",
                "**Kekuatan eksekutorial:** berkepala **\"DEMI KEADILAN BERDASARKAN KETUHANAN YANG MAHA ESA\"** — mempunyai kekuatan hukum yang **sama dengan putusan pengadilan yang telah inkracht**, sehingga dapat langsung dieksekusi.",
                "Diterbitkan setelah lewat **21 hari** sejak Surat Teguran, disampaikan **langsung** oleh Jurusita Pajak (dibacakan dan diserahkan salinannya)."
              ]
            }
          ]
        },
        {
          "chunkId": "TM11-P05",
          "page": 5,
          "blocks": [
            {
              "k": "h",
              "text": "3. PENAGIHAN SEKETIKA DAN SEKALIGUS"
            },
            {
              "k": "p",
              "text": "**Dasar:** Pasal 20 UU KUP jo. Pasal 6 UU PPSP; kondisi dirinci di **Pasal 12 PMK 61/2023**.\nPenagihan oleh Jurusita **tanpa menunggu jatuh tempo**, meliputi **seluruh utang pajak** dari semua jenis/masa/tahun pajak — dan **dapat dilakukan tanpa Surat Teguran maupun Surat Paksa terlebih dahulu** (diterbitkan Surat Perintah Penagihan Seketika dan Sekaligus)."
            },
            {
              "k": "p",
              "text": "**Kondisi (a.l.):**\n1. Penanggung Pajak akan **meninggalkan Indonesia** selama-lamanya / berniat demikian;\n2. **Memindahtangankan** barang untuk menghentikan/mengecilkan kegiatan usaha di Indonesia;\n3. Terdapat tanda-tanda **badan akan dibubarkan**, digabung, dimekarkan, dipindahtangankan, atau diubah bentuknya;\n4. Badan akan dibubarkan oleh negara; atau penyitaan oleh pihak ketiga / tanda kepailitan."
            }
          ]
        },
        {
          "chunkId": "TM11-P06",
          "page": 6,
          "blocks": [
            {
              "k": "h",
              "text": "4. PENCEGAHAN & PENYANDERAAN (Upaya Paksa Badan)"
            },
            {
              "k": "p",
              "text": "Diatur dalam **UU PPSP** (bukan UU KUP). Merupakan upaya **terakhir** terhadap Penanggung Pajak yang tidak kooperatif."
            },
            {
              "k": "pre",
              "text": "| Aspek | Pencegahan | Penyanderaan (*gijzeling*) |\n|---|---|---|\n| Bentuk | Larangan **keluar** wilayah RI sementara | Pengekangan **kebebasan** sementara di tempat tertentu |\n| Syarat | Utang pajak **≥ Rp100 juta** & diragukan itikad baik | Utang pajak **≥ Rp100 juta** & diragukan itikad baik |\n| Jangka waktu | **6 bulan**, dapat diperpanjang **6 bulan** (Pasal 56(4) PMK 61/2023) | **6 bulan**, dapat diperpanjang **6 bulan** (Pasal 66(3) PMK 61/2023) |\n| Izin | Keputusan Menteri Keuangan | Izin Menteri Keuangan |\n| Dasar | UU PPSP | UU PPSP (Pasal 33 dst.) |"
            },
            {
              "k": "p",
              "text": "Penyanderaan dapat dilaksanakan terhadap Penanggung Pajak yang **telah/sedang dicegah**. Penanggung Pajak yang disandera tetap berhak dikunjungi keluarga/pengacara/rohaniawan (dengan izin) dan dilepas bila utang + biaya penagihan dilunasi."
            },
            {
              "k": "p",
              "text": "Gugatan atas pelaksanaan **Surat Paksa/SPMP/Pengumuman Lelang** diajukan ke **Pengadilan Pajak**; sedangkan gugatan atas **penyanderaan** diajukan ke **Pengadilan Negeri**."
            }
          ]
        },
        {
          "chunkId": "TM11-P07",
          "page": 7,
          "blocks": [
            {
              "k": "h",
              "text": "5. HAK MENDAHULU (Pasal 21 UU KUP)"
            },
            {
              "k": "p",
              "text": "Negara mempunyai **hak mendahulu** atas utang pajak terhadap barang-barang milik Penanggung Pajak → negara berkedudukan sebagai **kreditur preferen** (didahulukan pelunasannya dibanding kreditur lain saat barang dilelang), sejalan dengan hak istimewa dalam Pasal 1134 KUH Perdata.\n- Hak mendahulu meliputi pokok pajak, sanksi (bunga, denda, kenaikan), dan biaya penagihan.\n- Pengecualian: tidak berlaku atas biaya perkara penjualan barang, biaya penyelamatan barang, dan biaya hukum lelang.\n- **Batas waktu (Pasal 21 ayat (4)):** hak mendahulu **hilang setelah 5 tahun** sejak penerbitan dasar penagihan, kecuali tertangguh (mis. diterbitkan Surat Paksa atau ada penundaan pembayaran)."
            }
          ]
        },
        {
          "chunkId": "TM11-P08",
          "page": 8,
          "blocks": [
            {
              "k": "h",
              "text": "6. DALUWARSA PENAGIHAN (Pasal 22 UU KUP)"
            },
            {
              "k": "list",
              "items": [
                "Hak menagih pajak (termasuk bunga, kenaikan, biaya penagihan) **daluwarsa setelah 5 tahun** sejak penerbitan dasar penagihan.",
                "Daluwarsa **tertangguh** apabila, a.l.: diterbitkan Surat Paksa; ada pengakuan utang pajak dari WP (langsung/tidak langsung); diterbitkan SKPKB/SKPKBT; atau dilakukan penyidikan tindak pidana perpajakan."
              ]
            }
          ]
        },
        {
          "chunkId": "TM11-P09",
          "page": 9,
          "blocks": [
            {
              "k": "h",
              "text": "7. TINDAK PIDANA FISKAL (Ketentuan Pidana UU KUP)"
            },
            {
              "k": "p",
              "text": "Pidana adalah **ultimum remedium**. **Empat unsur tindak pidana** perpajakan: (1) **subjek**, (2) **perbuatan**, (3) **akibat** (kerugian pendapatan negara), dan (4) **kesalahan** (kealpaan/kesengajaan). Subjek \"setiap orang\" diperluas oleh **Pasal 43 UU KUP** mencakup wakil, kuasa, pegawai WP, atau **pihak lain yang menyuruh, turut serta, menganjurkan, atau membantu** tindak pidana."
            },
            {
              "k": "pre",
              "text": "| Pasal | Perbuatan | Ancaman setelah UU 1/2026 |\n|---|---|---|\n| **Pasal 38** | **Kealpaan** menyampaikan SPT atau menyampaikan SPT tidak benar/tidak lengkap sehingga merugikan pendapatan negara | **Denda paling banyak 2×** jumlah pajak terutang yang tidak atau kurang dibayar |\n| **Pasal 39 ayat (1)** | **Kesengajaan**, misalnya tidak mendaftar, tidak menyampaikan SPT, pembukuan palsu, atau tidak menyetor pajak yang telah dipotong/dipungut | Penjara **paling lama 6 tahun dan/atau** denda **paling banyak 4×** pajak terutang yang tidak atau kurang dibayar |\n| **Pasal 39 ayat (2)** | Pengulangan sebelum lewat 1 tahun sejak selesai menjalani pidana | Ketentuan pemberatan tetap harus dibaca bersama penyesuaian pidana 2026 |\n| **Pasal 39 ayat (3)** | Percobaan penyalahgunaan NPWP/PKP atau SPT palsu untuk restitusi, kompensasi, atau pengkreditan | Penjara **paling lama 2 tahun dan/atau** denda **paling banyak 4×** jumlah restitusi/kompensasi/pengkreditan |\n| **Pasal 39A** | Faktur pajak atau bukti potong/pungut/setor tidak berdasarkan transaksi sebenarnya | Penjara **paling lama 6 tahun dan/atau** denda **paling banyak 6×** jumlah pajak dalam dokumen tersebut |\n| **Pasal 41 ayat (1)** | Pejabat karena kealpaan membocorkan rahasia Wajib Pajak | Denda paling banyak **kategori III (Rp50 juta)** |\n| **Pasal 41 ayat (2)** | Pejabat dengan sengaja membocorkan rahasia Wajib Pajak | Penjara **paling lama 2 tahun dan/atau** denda paling banyak **kategori III (Rp50 juta)** |\n| **Pasal 41A** | Sengaja tidak memberikan keterangan atau bukti yang diminta | Denda paling banyak **kategori III (Rp50 juta)** |\n| **Pasal 41B** | Sengaja menghalangi atau mempersulit penyidikan | Penjara **paling lama 3 tahun dan/atau** denda paling banyak **kategori III (Rp50 juta)** |\n| **Pasal 41C ayat (1)–(4)** | Pelanggaran kewajiban data/informasi pihak ketiga | Denda paling banyak **kategori III (Rp50 juta)** |"
            },
            {
              "k": "p",
              "text": "**Pasal 44C UU HPP (baru):** pidana **denda** dalam Pasal 39 & 39A **tidak dapat digantikan dengan pidana kurungan** — harus tetap dibayar. Ini memperkuat orientasi pemulihan kerugian negara."
            },
            {
              "k": "p",
              "text": "**Pasal 44D UU HPP (baru):** persidangan tindak pidana perpajakan dapat dilakukan **secara in absentia** (tanpa kehadiran terdakwa) apabila terdakwa telah dipanggil secara sah tetapi tidak hadir."
            },
            {
              "k": "h",
              "text": "7.1 Daluwarsa Penuntutan (Pasal 40 UU KUP)"
            },
            {
              "k": "p",
              "text": "Tindak pidana di bidang perpajakan **tidak dapat dituntut setelah lampau 10 tahun** sejak saat terutangnya pajak / berakhirnya Masa, Bagian Tahun, atau Tahun Pajak."
            },
            {
              "k": "h",
              "text": "7.2 Pintu Keluar (kaitan dengan TM 8)"
            },
            {
              "k": "list",
              "items": [
                "**Pasal 8 ayat (3) jo. Pasal 44A** — pengungkapan ketidakbenaran perbuatan sebelum SPDP dikirim;",
                "**Pasal 44B** — penghentian penyidikan demi penerimaan negara (denda berjenjang 1×/3×/4×)."
              ]
            },
            {
              "k": "h",
              "text": "7.3 📊 Simulasi — Sanksi Pidana"
            },
            {
              "k": "p",
              "text": "**Kasus.** Tuan D dengan sengaja tidak menyetorkan PPN yang telah dipungut sebesar **Rp500.000.000** (memenuhi unsur Pasal 39).\n- **Pidana penjara:** paling lama 6 tahun.\n- **Pidana denda:** paling banyak 4× jumlah pajak yang tidak/kurang dibayar → maksimum **Rp2.000.000.000**.\n- Setelah UU 1/2026, rumusannya menjadi penjara **dan/atau** denda; batas minimum lama tidak lagi dipakai sebagai rumusan aktif."
            },
            {
              "k": "p",
              "text": "Bila perbuatannya berupa **menerbitkan faktur pajak fiktif** senilai pajak Rp500.000.000 (Pasal 39A), ancaman setelah UU No. 1 Tahun 2026 adalah pidana penjara **paling lama 6 tahun dan/atau** pidana denda **paling banyak 6×** jumlah pajak dalam dokumen tersebut → denda maksimum **Rp3.000.000.000**."
            },
            {
              "k": "p",
              "text": "Berdasarkan **Pasal 44C UU HPP**, pidana **denda** pada Pasal 39 & 39A **tidak dapat diganti dengan kurungan** — tetap wajib dibayar."
            }
          ]
        },
        {
          "chunkId": "TM11-P10",
          "page": 10,
          "blocks": [
            {
              "k": "h",
              "text": "8. Dasar Hukum Lengkap"
            },
            {
              "k": "list",
              "items": [
                "**UU KUP** (UU No. 6 Tahun 1983 sebagaimana telah beberapa kali diubah terakhir dengan UU No. 6 Tahun 2023; UU HPP No. 7 Tahun 2021 sebagai perubahan substantif utama), **dibaca bersama UU No. 1 Tahun 2026 tentang Penyesuaian Pidana**:",
                "Pasal 18 (dasar penagihan); Pasal 20 (penagihan seketika & sekaligus); Pasal 21 (hak mendahulu); Pasal 22 (daluwarsa penagihan);",
                "Pasal 38, 39, 39A, 41, 41A, 41B, 41C, 43 (ketentuan pidana); Pasal 40 (daluwarsa penuntutan); Pasal 44A, 44B, 44C, 44D.",
                "**UU PPSP** (UU No. 19/1997 jo. UU No. 19/2000) — surat paksa, penyitaan, lelang, pencegahan, penyanderaan, gugatan penagihan.",
                "**PMK No. 61 Tahun 2023** — tata cara penagihan pajak (pengganti PMK 189/2020): tahapan, jangka waktu, kondisi penagihan seketika & sekaligus (Pasal 12).",
                "**PMK No. 81 Tahun 2024 sebagaimana diubah terakhir dengan PMK No. 1 Tahun 2026** (Coretax) — administrasi dokumen penagihan secara elektronik dan penyeragaman jatuh tempo."
              ]
            },
            {
              "k": "p",
              "text": "*Sumber verifikasi: pajak.go.id (DJP), DDTCNews, Ortax, Pajakku, Klikpajak, marinews.mahkamahagung.go.id, hukumonline.*"
            },
            {
              "k": "p",
              "text": "[↑ Kembali ke Daftar Isi](#daftar-isi)"
            }
          ]
        }
      ]
    },
    {
      "tm": 12,
      "title": "TM 12 — Bea Meterai",
      "sourcePdf": "Materi_Perpajakan_I_TM8-14_Kompilasi (2).md",
      "sourceFile": "Materi_Perpajakan_I_TM8-14_Kompilasi (2).md",
      "lawBasis": "UU No. 10 Tahun 2020 tentang Bea Meterai · PMK No. 78 Tahun 2024 · PMK 81/2024 sebagaimana diubah terakhir dengan PMK 1/2026",
      "body_markdown": "## TM 12 — Bea Meterai\n\n**Mata Kuliah:** Perpajakan I\n**Dasar Hukum Utama:** UU No. 10 Tahun 2020 tentang Bea Meterai · PMK No. 78 Tahun 2024 · PMK 81/2024 sebagaimana diubah terakhir dengan PMK 1/2026\n**Diperbarui mengikuti regulasi s.d.:** Juni 2026\n\n---\n\n### 0. Gambaran Umum\n\n**Bea Meterai** adalah **pajak atas dokumen**. Diatur dalam **UU No. 10 Tahun 2020**, disahkan 26 Oktober 2020 dan **berlaku 1 Januari 2021**, menggantikan **UU No. 13 Tahun 1985**.\n\nPerubahan paling mendasar: **tarif tunggal Rp10.000** menggantikan dua tarif lama (Rp3.000 dan Rp6.000).\n\n| Aspek | UU 13/1985 (lama) | UU 10/2020 (berlaku) |\n|---|---|---|\n| Tarif | Rp3.000 & Rp6.000 | **Tarif tunggal Rp10.000** |\n| Bentuk meterai | Tempel & SSP | Tempel, **elektronik (e-meterai)**, & bentuk lain |\n| Objek | Dokumen tertentu | Dokumen perdata & alat bukti pengadilan (definisi diperluas, termasuk **dokumen elektronik**) |\n\n---\n\n### 1. Objek Bea Meterai (Pasal 3)\n\nBea Meterai dikenakan atas **dua kelompok dokumen**:\n1. Dokumen yang dibuat sebagai alat untuk **menerangkan suatu kejadian yang bersifat perdata**; dan\n2. Dokumen yang **digunakan sebagai alat bukti di pengadilan**.\n\n**Dokumen perdata** (Pasal 3 ayat (2)) meliputi: surat perjanjian/keterangan/pernyataan/sejenisnya beserta rangkapnya; akta notaris beserta grosse, salinan, dan kutipannya; akta PPAT beserta salinan dan kutipannya; surat berharga dengan nama dan bentuk apa pun; dokumen transaksi surat berharga (termasuk kontrak berjangka); dokumen lelang; **dokumen yang menyatakan jumlah uang dengan nilai nominal > Rp5.000.000** yang menyebutkan penerimaan uang atau pelunasan/perhitungan utang; dan dokumen lain yang ditetapkan dengan PP.\n\n> ⚠️ **Penting:** batas nilai **Rp5.000.000 hanya berlaku untuk dokumen yang \"menyatakan jumlah uang\"** (mis. kuitansi). Surat perjanjian, akta, dan surat berharga tetap terutang Bea Meterai **tanpa memandang nilai**.\n\n**Prinsip:** Bea Meterai dikenakan **1 (satu) kali** untuk setiap dokumen (Pasal 4).\n\n---\n\n### 2. Tarif & Saat Terutang\n\n#### 2.1 Tarif (Pasal 5)\nTarif tetap **Rp10.000** per dokumen. Berdasarkan Pasal 6, tarif ini **dapat dinaikkan/diturunkan** sesuai kondisi perekonomian nasional (lewat PP) — sampai Juni 2026 tetap Rp10.000.\n\n#### 2.2 Saat Terutang (Pasal 8)\n| Jenis dokumen | Saat terutang |\n|---|---|\n| Surat perjanjian, akta notaris, akta PPAT | Saat **dibubuhi tanda tangan** |\n| Surat berharga; dokumen transaksi surat berharga | Saat dokumen **selesai dibuat** |\n| Surat keterangan/pernyataan/sejenisnya | Saat **diserahkan** kepada pihak untuknya dibuat |\n| Dokumen alat bukti di pengadilan | Saat **diajukan ke pengadilan** |\n| Dokumen perdata dibuat di luar negeri | Saat **digunakan di Indonesia** |\n\n#### 2.3 Pihak yang Terutang (Pasal 9)\n| Situasi | Pihak terutang |\n|---|---|\n| Dokumen dibuat sepihak | Pihak **penerima** dokumen |\n| Dokumen dibuat 2 pihak atau lebih | **Masing-masing pihak** atas dokumen yang diterimanya |\n| Surat berharga | Pihak yang **menerbitkan** |\n| Alat bukti di pengadilan | Pihak yang **mengajukan** |\n| Dokumen dibuat di LN, digunakan di Indonesia | Pihak yang **menerima manfaat** |\n\n---\n\n### 3. Bukan Objek Bea Meterai (Pasal 7)\n\nAntara lain:\n- Dokumen lalu lintas orang/barang (konosemen, surat angkutan penumpang & barang, bukti pengiriman/penerimaan barang, dll.);\n- Segala bentuk **ijazah**;\n- Tanda terima **gaji, uang tunggu, pensiun, tunjangan**, dan pembayaran terkait hubungan kerja;\n- Tanda bukti **penerimaan uang negara** dari kas negara/daerah;\n- **Kuitansi pajak** dan penerimaan negara lainnya;\n- Tanda penerimaan uang untuk keperluan **intern organisasi**;\n- Dokumen yang menyebutkan simpanan/giro di bank/koperasi;\n- Dokumen pembagian keuntungan/bunga dari surat berharga; serta surat berharga negara dan dokumen Bank Indonesia (kebijakan moneter).\n\n---\n\n### 4. Cara Pelunasan & Pemeteraian Kemudian\n\n#### 4.1 Cara Pelunasan\n- **Meterai tempel**, **meterai elektronik (e-meterai)**, atau **meterai dalam bentuk lain** (mesin teraan digital, dll.);\n- **SSP (Surat Setoran Pajak)** untuk dokumen dalam jumlah besar.\n\n#### 4.2 Pemeteraian Kemudian (Pasal 17–18)\nMekanisme pelunasan Bea Meterai yang dilakukan **belakangan**, untuk:\n1. Dokumen yang akan **digunakan sebagai alat bukti di pengadilan**;\n2. Dokumen yang Bea Meterainya **tidak/kurang dibayar** sebagaimana mestinya;\n3. Dokumen yang dibuat di luar negeri yang akan digunakan di Indonesia.\n\n> Untuk butir (2), terdapat **sanksi administratif 100%** dari Bea Meterai yang terutang (lihat §5).\n\n#### 4.3 Pemungut Bea Meterai (Pasal 10 UU 10/2020)\nUntuk dokumen tertentu yang diterbitkan dalam jumlah besar, pemungutan dilakukan oleh **Pemungut Bea Meterai** — pihak yang ditetapkan DJP dan wajib **memungut, menyetor, dan melaporkan** Bea Meterai.\n- **Penetapan Pemungut Bea Meterai (PMK 78/2024):** dilakukan oleh DJP terhadap pihak yang menerbitkan atau memfasilitasi dokumen tertentu dengan mempertimbangkan jenis dan jumlah dokumen. Angka **1.000 dokumen bukan threshold universal otomatis** untuk menjadi Pemungut Bea Meterai.\n- **Kewajiban:** setor dan lapor **SPT Masa Bea Meterai** paling lambat **tanggal 15** bulan berikutnya sesuai PMK 78/2024.\n- **Meterai elektronik (e-meterai):** dibubuhkan pada dokumen elektronik; memiliki kode unik & keterangan tertentu sebagai pengaman.\n> **PMK 78/2024** merupakan aturan pelaksanaan terkonsolidasi dan mencabut PMK 133/2021, PMK 134/2021, serta PMK 151/2021. Administrasi elektronik mengikuti PMK 81/2024 sebagaimana diubah terakhir dengan PMK 1/2026.\n\n#### 4.4 📊 Simulasi — Penghitungan Bea Meterai\n\n**Kasus 1 — dokumen mana yang terutang.** Dalam satu transaksi, Tuan B membuat/menerima:\n\n| Dokumen | Terutang? | Bea Meterai |\n|---|---|---|\n| Surat perjanjian jual beli | Ya (dokumen perdata, tanpa batas nilai) | Rp10.000 |\n| Kuitansi senilai **Rp8.000.000** | Ya (menyatakan jumlah uang **> Rp5 juta**) | Rp10.000 |\n| Kuitansi senilai **Rp3.000.000** | **Tidak** (≤ Rp5 juta) | Rp0 |\n| Fotokopi perjanjian (tidak dipakai sebagai alat bukti) | **Tidak** | Rp0 |\n| **Total** | | **Rp20.000** |\n\n**Kasus 2 — pemeteraian kemudian.** Sebuah surat perjanjian yang **belum dibubuhi meterai** akan dijadikan **alat bukti di pengadilan**. WP harus melakukan pemeteraian kemudian:\n- Bea Meterai terutang Rp10.000 + **sanksi administratif 100%** Rp10.000 = **Rp20.000** per dokumen.\n\n---\n\n### 5. Sanksi\n\n#### 5.1 Sanksi Administratif\n- **Pemungut** Bea Meterai yang tidak/kurang memungut atau menyetor → diterbitkan SKP + **sanksi 100%** dari Bea Meterai yang tidak/kurang dipungut/disetor (Pasal 11);\n- Dokumen yang Bea Meterainya tidak/kurang dibayar → pemeteraian kemudian + **sanksi 100%** dari Bea Meterai terutang (Pasal 18).\n\n#### 5.2 Sanksi Pidana (Pasal 24–26)\nSetelah UU 1/2026: **Pasal 24 dan Pasal 25** diancam penjara **paling lama 7 tahun dan/atau** denda paling banyak **kategori V (Rp500.000.000)**. **Pasal 26** diancam penjara **paling lama 3 tahun atau** denda paling banyak **kategori III (Rp50.000.000)**.\n\n#### 5.3 Daluwarsa\nBea Meterai yang terutang menjadi **daluwarsa setelah 5 tahun** sejak saat terutang.\n\n---\n\n### 6. Dasar Hukum Lengkap\n\n1. **UU No. 10 Tahun 2020** tentang Bea Meterai — Pasal 3 (objek), 4 (sekali per dokumen), 5 (tarif), 6 (penyesuaian tarif), 7 (bukan objek), 8 (saat terutang), 9 (pihak terutang), 11 (sanksi pemungut), 17–18 (pemeteraian kemudian & sanksi 100%), 24–26 (pidana), **dibaca bersama UU No. 1 Tahun 2026 tentang Penyesuaian Pidana**. UU ini juga mengatur fasilitas pembebasan Bea Meterai (mis. untuk bencana alam, kegiatan keagamaan/non-komersial, program pemerintah, dan perjanjian internasional timbal balik).\n2. **PMK No. 78 Tahun 2024** — aturan pelaksanaan Bea Meterai terkonsolidasi: pembayaran, meterai tempel/elektronik/bentuk lain, pemeteraian kemudian, dan Pemungut Bea Meterai.\n3. **PMK No. 81 Tahun 2024 sebagaimana diubah terakhir dengan PMK No. 1 Tahun 2026** — administrasi perpajakan melalui Coretax, termasuk pelaporan yang relevan.\n\n*Sumber verifikasi: pajak.go.id (DJP), djpb.kemenkeu.go.id, DDTCNews, Ortax, Pajakku, MUC.*\n\n[↑ Kembali ke Daftar Isi](#daftar-isi)\n\n---",
      "pages": [
        {
          "chunkId": "TM12-P01",
          "page": 1,
          "blocks": [
            {
              "k": "h",
              "text": "TM 12 — Bea Meterai"
            },
            {
              "k": "p",
              "text": "**Mata Kuliah:** Perpajakan I\n**Dasar Hukum Utama:** UU No. 10 Tahun 2020 tentang Bea Meterai · PMK No. 78 Tahun 2024 · PMK 81/2024 sebagaimana diubah terakhir dengan PMK 1/2026\n**Diperbarui mengikuti regulasi s.d.:** Juni 2026"
            }
          ]
        },
        {
          "chunkId": "TM12-P02",
          "page": 2,
          "blocks": [
            {
              "k": "h",
              "text": "0. Gambaran Umum"
            },
            {
              "k": "p",
              "text": "**Bea Meterai** adalah **pajak atas dokumen**. Diatur dalam **UU No. 10 Tahun 2020**, disahkan 26 Oktober 2020 dan **berlaku 1 Januari 2021**, menggantikan **UU No. 13 Tahun 1985**."
            },
            {
              "k": "p",
              "text": "Perubahan paling mendasar: **tarif tunggal Rp10.000** menggantikan dua tarif lama (Rp3.000 dan Rp6.000)."
            },
            {
              "k": "pre",
              "text": "| Aspek | UU 13/1985 (lama) | UU 10/2020 (berlaku) |\n|---|---|---|\n| Tarif | Rp3.000 & Rp6.000 | **Tarif tunggal Rp10.000** |\n| Bentuk meterai | Tempel & SSP | Tempel, **elektronik (e-meterai)**, & bentuk lain |\n| Objek | Dokumen tertentu | Dokumen perdata & alat bukti pengadilan (definisi diperluas, termasuk **dokumen elektronik**) |"
            }
          ]
        },
        {
          "chunkId": "TM12-P03",
          "page": 3,
          "blocks": [
            {
              "k": "h",
              "text": "1. Objek Bea Meterai (Pasal 3)"
            },
            {
              "k": "p",
              "text": "Bea Meterai dikenakan atas **dua kelompok dokumen**:\n1. Dokumen yang dibuat sebagai alat untuk **menerangkan suatu kejadian yang bersifat perdata**; dan\n2. Dokumen yang **digunakan sebagai alat bukti di pengadilan**."
            },
            {
              "k": "p",
              "text": "**Dokumen perdata** (Pasal 3 ayat (2)) meliputi: surat perjanjian/keterangan/pernyataan/sejenisnya beserta rangkapnya; akta notaris beserta grosse, salinan, dan kutipannya; akta PPAT beserta salinan dan kutipannya; surat berharga dengan nama dan bentuk apa pun; dokumen transaksi surat berharga (termasuk kontrak berjangka); dokumen lelang; **dokumen yang menyatakan jumlah uang dengan nilai nominal > Rp5.000.000** yang menyebutkan penerimaan uang atau pelunasan/perhitungan utang; dan dokumen lain yang ditetapkan dengan PP."
            },
            {
              "k": "p",
              "text": "⚠️ **Penting:** batas nilai **Rp5.000.000 hanya berlaku untuk dokumen yang \"menyatakan jumlah uang\"** (mis. kuitansi). Surat perjanjian, akta, dan surat berharga tetap terutang Bea Meterai **tanpa memandang nilai**."
            },
            {
              "k": "p",
              "text": "**Prinsip:** Bea Meterai dikenakan **1 (satu) kali** untuk setiap dokumen (Pasal 4)."
            }
          ]
        },
        {
          "chunkId": "TM12-P04",
          "page": 4,
          "blocks": [
            {
              "k": "h",
              "text": "2. Tarif & Saat Terutang"
            },
            {
              "k": "h",
              "text": "2.1 Tarif (Pasal 5)"
            },
            {
              "k": "p",
              "text": "Tarif tetap **Rp10.000** per dokumen. Berdasarkan Pasal 6, tarif ini **dapat dinaikkan/diturunkan** sesuai kondisi perekonomian nasional (lewat PP) — sampai Juni 2026 tetap Rp10.000."
            },
            {
              "k": "pre",
              "text": "#### 2.2 Saat Terutang (Pasal 8)\n| Jenis dokumen | Saat terutang |\n|---|---|\n| Surat perjanjian, akta notaris, akta PPAT | Saat **dibubuhi tanda tangan** |\n| Surat berharga; dokumen transaksi surat berharga | Saat dokumen **selesai dibuat** |\n| Surat keterangan/pernyataan/sejenisnya | Saat **diserahkan** kepada pihak untuknya dibuat |\n| Dokumen alat bukti di pengadilan | Saat **diajukan ke pengadilan** |\n| Dokumen perdata dibuat di luar negeri | Saat **digunakan di Indonesia** |"
            },
            {
              "k": "pre",
              "text": "#### 2.3 Pihak yang Terutang (Pasal 9)\n| Situasi | Pihak terutang |\n|---|---|\n| Dokumen dibuat sepihak | Pihak **penerima** dokumen |\n| Dokumen dibuat 2 pihak atau lebih | **Masing-masing pihak** atas dokumen yang diterimanya |\n| Surat berharga | Pihak yang **menerbitkan** |\n| Alat bukti di pengadilan | Pihak yang **mengajukan** |\n| Dokumen dibuat di LN, digunakan di Indonesia | Pihak yang **menerima manfaat** |"
            }
          ]
        },
        {
          "chunkId": "TM12-P05",
          "page": 5,
          "blocks": [
            {
              "k": "h",
              "text": "3. Bukan Objek Bea Meterai (Pasal 7)"
            },
            {
              "k": "p",
              "text": "Antara lain:\n- Dokumen lalu lintas orang/barang (konosemen, surat angkutan penumpang & barang, bukti pengiriman/penerimaan barang, dll.);\n- Segala bentuk **ijazah**;\n- Tanda terima **gaji, uang tunggu, pensiun, tunjangan**, dan pembayaran terkait hubungan kerja;\n- Tanda bukti **penerimaan uang negara** dari kas negara/daerah;\n- **Kuitansi pajak** dan penerimaan negara lainnya;\n- Tanda penerimaan uang untuk keperluan **intern organisasi**;\n- Dokumen yang menyebutkan simpanan/giro di bank/koperasi;\n- Dokumen pembagian keuntungan/bunga dari surat berharga; serta surat berharga negara dan dokumen Bank Indonesia (kebijakan moneter)."
            }
          ]
        },
        {
          "chunkId": "TM12-P06",
          "page": 6,
          "blocks": [
            {
              "k": "h",
              "text": "4. Cara Pelunasan & Pemeteraian Kemudian"
            },
            {
              "k": "h",
              "text": "4.1 Cara Pelunasan"
            },
            {
              "k": "list",
              "items": [
                "**Meterai tempel**, **meterai elektronik (e-meterai)**, atau **meterai dalam bentuk lain** (mesin teraan digital, dll.);",
                "**SSP (Surat Setoran Pajak)** untuk dokumen dalam jumlah besar."
              ]
            },
            {
              "k": "h",
              "text": "4.2 Pemeteraian Kemudian (Pasal 17–18)"
            },
            {
              "k": "p",
              "text": "Mekanisme pelunasan Bea Meterai yang dilakukan **belakangan**, untuk:\n1. Dokumen yang akan **digunakan sebagai alat bukti di pengadilan**;\n2. Dokumen yang Bea Meterainya **tidak/kurang dibayar** sebagaimana mestinya;\n3. Dokumen yang dibuat di luar negeri yang akan digunakan di Indonesia."
            },
            {
              "k": "p",
              "text": "Untuk butir (2), terdapat **sanksi administratif 100%** dari Bea Meterai yang terutang (lihat §5)."
            },
            {
              "k": "h",
              "text": "4.3 Pemungut Bea Meterai (Pasal 10 UU 10/2020)"
            },
            {
              "k": "p",
              "text": "Untuk dokumen tertentu yang diterbitkan dalam jumlah besar, pemungutan dilakukan oleh **Pemungut Bea Meterai** — pihak yang ditetapkan DJP dan wajib **memungut, menyetor, dan melaporkan** Bea Meterai.\n- **Penetapan Pemungut Bea Meterai (PMK 78/2024):** dilakukan oleh DJP terhadap pihak yang menerbitkan atau memfasilitasi dokumen tertentu dengan mempertimbangkan jenis dan jumlah dokumen. Angka **1.000 dokumen bukan threshold universal otomatis** untuk menjadi Pemungut Bea Meterai.\n- **Kewajiban:** setor dan lapor **SPT Masa Bea Meterai** paling lambat **tanggal 15** bulan berikutnya sesuai PMK 78/2024.\n- **Meterai elektronik (e-meterai):** dibubuhkan pada dokumen elektronik; memiliki kode unik & keterangan tertentu sebagai pengaman.\n**PMK 78/2024** merupakan aturan pelaksanaan terkonsolidasi dan mencabut PMK 133/2021, PMK 134/2021, serta PMK 151/2021. Administrasi elektronik mengikuti PMK 81/2024 sebagaimana diubah terakhir dengan PMK 1/2026."
            },
            {
              "k": "h",
              "text": "4.4 📊 Simulasi — Penghitungan Bea Meterai"
            },
            {
              "k": "p",
              "text": "**Kasus 1 — dokumen mana yang terutang.** Dalam satu transaksi, Tuan B membuat/menerima:"
            },
            {
              "k": "pre",
              "text": "| Dokumen | Terutang? | Bea Meterai |\n|---|---|---|\n| Surat perjanjian jual beli | Ya (dokumen perdata, tanpa batas nilai) | Rp10.000 |\n| Kuitansi senilai **Rp8.000.000** | Ya (menyatakan jumlah uang **> Rp5 juta**) | Rp10.000 |\n| Kuitansi senilai **Rp3.000.000** | **Tidak** (≤ Rp5 juta) | Rp0 |\n| Fotokopi perjanjian (tidak dipakai sebagai alat bukti) | **Tidak** | Rp0 |\n| **Total** | | **Rp20.000** |"
            },
            {
              "k": "p",
              "text": "**Kasus 2 — pemeteraian kemudian.** Sebuah surat perjanjian yang **belum dibubuhi meterai** akan dijadikan **alat bukti di pengadilan**. WP harus melakukan pemeteraian kemudian:\n- Bea Meterai terutang Rp10.000 + **sanksi administratif 100%** Rp10.000 = **Rp20.000** per dokumen."
            }
          ]
        },
        {
          "chunkId": "TM12-P07",
          "page": 7,
          "blocks": [
            {
              "k": "h",
              "text": "5. Sanksi"
            },
            {
              "k": "h",
              "text": "5.1 Sanksi Administratif"
            },
            {
              "k": "list",
              "items": [
                "**Pemungut** Bea Meterai yang tidak/kurang memungut atau menyetor → diterbitkan SKP + **sanksi 100%** dari Bea Meterai yang tidak/kurang dipungut/disetor (Pasal 11);",
                "Dokumen yang Bea Meterainya tidak/kurang dibayar → pemeteraian kemudian + **sanksi 100%** dari Bea Meterai terutang (Pasal 18)."
              ]
            },
            {
              "k": "h",
              "text": "5.2 Sanksi Pidana (Pasal 24–26)"
            },
            {
              "k": "p",
              "text": "Setelah UU 1/2026: **Pasal 24 dan Pasal 25** diancam penjara **paling lama 7 tahun dan/atau** denda paling banyak **kategori V (Rp500.000.000)**. **Pasal 26** diancam penjara **paling lama 3 tahun atau** denda paling banyak **kategori III (Rp50.000.000)**."
            },
            {
              "k": "h",
              "text": "5.3 Daluwarsa"
            },
            {
              "k": "p",
              "text": "Bea Meterai yang terutang menjadi **daluwarsa setelah 5 tahun** sejak saat terutang."
            }
          ]
        },
        {
          "chunkId": "TM12-P08",
          "page": 8,
          "blocks": [
            {
              "k": "h",
              "text": "6. Dasar Hukum Lengkap"
            },
            {
              "k": "list",
              "items": [
                "**UU No. 10 Tahun 2020** tentang Bea Meterai — Pasal 3 (objek), 4 (sekali per dokumen), 5 (tarif), 6 (penyesuaian tarif), 7 (bukan objek), 8 (saat terutang), 9 (pihak terutang), 11 (sanksi pemungut), 17–18 (pemeteraian kemudian & sanksi 100%), 24–26 (pidana), **dibaca bersama UU No. 1 Tahun 2026 tentang Penyesuaian Pidana**. UU ini juga mengatur fasilitas pembebasan Bea Meterai (mis. untuk bencana alam, kegiatan keagamaan/non-komersial, program pemerintah, dan perjanjian internasional timbal balik).",
                "**PMK No. 78 Tahun 2024** — aturan pelaksanaan Bea Meterai terkonsolidasi: pembayaran, meterai tempel/elektronik/bentuk lain, pemeteraian kemudian, dan Pemungut Bea Meterai.",
                "**PMK No. 81 Tahun 2024 sebagaimana diubah terakhir dengan PMK No. 1 Tahun 2026** — administrasi perpajakan melalui Coretax, termasuk pelaporan yang relevan."
              ]
            },
            {
              "k": "p",
              "text": "*Sumber verifikasi: pajak.go.id (DJP), djpb.kemenkeu.go.id, DDTCNews, Ortax, Pajakku, MUC.*"
            },
            {
              "k": "p",
              "text": "[↑ Kembali ke Daftar Isi](#daftar-isi)"
            }
          ]
        }
      ]
    },
    {
      "tm": 13,
      "title": "TM 13 — Pajak Daerah & Retribusi Daerah (1): Pajak Daerah Provinsi",
      "sourcePdf": "Materi_Perpajakan_I_TM8-14_Kompilasi (2).md",
      "sourceFile": "Materi_Perpajakan_I_TM8-14_Kompilasi (2).md",
      "lawBasis": "UU No. 1 Tahun 2022 tentang Hubungan Keuangan antara Pemerintah Pusat dan Pemerintahan Daerah (UU HKPD) · PP No. 35 Tahun 2023",
      "body_markdown": "## TM 13 — Pajak Daerah & Retribusi Daerah (1): Pajak Daerah Provinsi\n\n**Mata Kuliah:** Perpajakan I\n**Dasar Hukum Utama:** UU No. 1 Tahun 2022 tentang Hubungan Keuangan antara Pemerintah Pusat dan Pemerintahan Daerah (UU HKPD) · PP No. 35 Tahun 2023\n**Diperbarui mengikuti regulasi s.d.:** Juni 2026\n\n---\n\n### 0. Perubahan Besar: dari UU PDRD ke UU HKPD\n\n> ⚠️ **Penting.** Pajak daerah kini diatur **UU No. 1 Tahun 2022 (HKPD)**, disahkan **5 Januari 2022**, yang **mencabut UU No. 28 Tahun 2009 (PDRD)**. UU HKPD merombak struktur pajak daerah: menyederhanakan jenis pajak, menurunkan tarif PKB/BBNKB, memperkenalkan **opsen pajak**, dan menggabungkan beberapa pajak kabupaten/kota menjadi **PBJT**. Pelaksana: **PP No. 35 Tahun 2023**.\n\n#### Pembagian Pajak Daerah (Pasal 4 UU HKPD)\n\n| Pajak Provinsi | Pajak Kabupaten/Kota (TM 14) |\n|---|---|\n| 1. Pajak Kendaraan Bermotor (PKB) | 1. PBB-P2 |\n| 2. Bea Balik Nama Kendaraan Bermotor (BBNKB) | 2. BPHTB |\n| 3. Pajak Alat Berat (PAB) | 3. Pajak Barang dan Jasa Tertentu (PBJT) |\n| 4. Pajak Bahan Bakar Kendaraan Bermotor (PBBKB) | 4. Pajak Reklame |\n| 5. Pajak Air Permukaan (PAP) | 5. Pajak Air Tanah (PAT) |\n| 6. Pajak Rokok | 6. Pajak MBLB |\n| 7. **Opsen** Pajak MBLB | 7. Pajak Sarang Burung Walet |\n| | 8. **Opsen** PKB & 9. **Opsen** BBNKB |\n\n---\n\n### 1. Jenis Pajak Provinsi & Tarif Maksimal\n\n> Catatan: UU HKPD hanya menetapkan **batas tarif tertinggi**. Tarif riil ditetapkan **Peraturan Daerah (Perda)** masing-masing provinsi.\n\n#### 1.1 Pajak Kendaraan Bermotor (PKB)\n- **Objek (Pasal 7):** kepemilikan dan/atau penguasaan kendaraan bermotor.\n- **DPP:** Nilai Jual Kendaraan Bermotor (NJKB) × koefisien bobot.\n- **Tarif maksimal (Pasal 10):** kepemilikan pertama **paling tinggi 1,2%**; progresif (kepemilikan kedua dst.) **paling tinggi 6%**.\n- **Khusus DKI Jakarta** (provinsi tidak terbagi kab/kota otonom): pertama **paling tinggi 2%**, progresif **paling tinggi 10%**.\n- Dikecualikan, a.l.: kereta api; kendaraan untuk hankam; kendaraan kedutaan/konsulat/organisasi internasional.\n\n#### 1.2 Bea Balik Nama Kendaraan Bermotor (BBNKB)\n- **Objek:** **penyerahan pertama** hak milik kendaraan bermotor (jual beli, tukar-menukar, hibah, warisan, pemasukan ke badan usaha).\n- **Tarif maksimal:** **paling tinggi 12%**; khusus DKI **paling tinggi 20%** (Pasal 15 ayat (2)).\n- > **Perubahan penting:** kendaraan **bekas (penyerahan kedua dan seterusnya) BUKAN objek BBNKB** lagi di UU HKPD. Tarif lama UU PDRD: penyerahan pertama 20%.\n\n#### 1.3 Pajak Alat Berat (PAB)\n- **Nomenklatur baru** di UU HKPD (dipisah dari PKB). **Objek:** kepemilikan dan/atau penguasaan alat berat, misalnya ekskavator dan buldoser. Karakter penggunaan alat berat dapat dijelaskan dalam definisi teknis, tetapi bukan syarat tunggal objek PAB.\n- **Tarif maksimal: 0,2%**.\n\n#### 1.4 Pajak Bahan Bakar Kendaraan Bermotor (PBBKB)\n- **Objek:** penyerahan bahan bakar kendaraan bermotor & alat berat oleh penyedia kepada konsumen.\n- **Tarif maksimal: 10%**; untuk **kendaraan umum** dapat ditetapkan paling tinggi **50% dari tarif kendaraan pribadi**.\n- 70% penerimaan PBBKB dibagihasilkan ke kab/kota; 30% bagian provinsi (Pasal 85 ayat (1)).\n\n#### 1.5 Pajak Air Permukaan (PAP)\n- **Objek:** pengambilan dan/atau pemanfaatan air permukaan (semua air di permukaan tanah, **tidak termasuk air laut**). Pengecualian objek diatur **Pasal 28 ayat (2)**, subjek pada **Pasal 29 ayat (1)**.\n- **Tarif maksimal: 10%**. Bagi hasil ke kab/kota 50% : provinsi 50% (Pasal 85 ayat (2)).\n\n#### 1.6 Pajak Rokok\n- **Objek:** konsumsi rokok (dipungut bersamaan dengan **cukai** oleh Pemerintah Pusat, lalu disetor ke provinsi).\n- **Tarif: 10% dari cukai rokok**.\n\n#### 1.7 Dasar Pengenaan Pajak (DPP) — Ringkasan\nRumus umum: **Pokok pajak = DPP × tarif**.\n\n| Pajak | Dasar Pengenaan (DPP) |\n|---|---|\n| **PKB** | **NJKB × bobot** (koefisien tingkat kerusakan jalan/pencemaran). NJKB = harga pasaran umum |\n| **BBNKB** | Nilai jual kendaraan bermotor (NJKB) |\n| **PAB** | Nilai jual alat berat |\n| **PBBKB** | Nilai jual BBKB **sebelum PPN** |\n| **PAP** | Nilai Perolehan Air Permukaan (volume × harga dasar air) |\n| **Pajak Rokok** | Cukai rokok yang ditetapkan Pemerintah |\n\n#### 1.8 Earmarking (Alokasi Penggunaan Wajib) — Pasal 86 UU HKPD\nSebagian penerimaan pajak tertentu **wajib dialokasikan** untuk tujuan khusus (Pasal 86 UU HKPD jo. Pasal 25 PP 35/2023):\n- **PKB & Opsen PKB:** paling sedikit **10%** untuk pembangunan/pemeliharaan jalan serta peningkatan moda & sarana transportasi umum;\n- **Pajak Rokok:** paling sedikit **50%** untuk mendanai pelayanan kesehatan masyarakat & penegakan hukum.\n*(Untuk pajak kab/kota — PBJT tenaga listrik & PAT — lihat TM 14.)*\n\n---\n\n### 2. OPSEN PAJAK — Inovasi Utama UU HKPD\n\n**Opsen** (Pasal 1 angka 61) = **pungutan tambahan pajak menurut persentase tertentu** (*piggyback tax*). Tujuannya **menggantikan mekanisme bagi hasil** PKB/BBNKB dari provinsi ke kabupaten/kota — kini penerimaan **langsung terbagi** saat dipungut. **Berlaku 5 Januari 2025.**\n\n| Jenis Opsen | Dipungut oleh | Atas pokok pajak | Tarif (Pasal 83) |\n|---|---|---|---|\n| **Opsen PKB** | Kabupaten/Kota | PKB (provinsi) | **66%** |\n| **Opsen BBNKB** | Kabupaten/Kota | BBNKB (provinsi) | **66%** |\n| **Opsen Pajak MBLB** | Provinsi | Pajak MBLB (kab/kota) | **25%** |\n\n**Kunci yang sering disalahpahami:** opsen **bukan beban baru**. Karena tarif dasar PKB/BBNKB **diturunkan** lebih dulu (PKB 2%→1,2%; BBNKB 20%→12%), total beban WP relatif setara dengan rezim lama. Opsen dipungut **bersamaan** dengan pajak induknya.\n\n> **DKI Jakarta dikecualikan dari Opsen PKB & BBNKB** karena tidak terbagi dalam kabupaten/kota otonom (status Daerah Khusus, UU No. 2/2024). Itulah sebabnya tarif dasar PKB/BBNKB DKI dipatok lebih tinggi (2% / 20%).\n\n#### 📊 Simulasi Opsen PKB\nSebuah mobil di Provinsi B punya NJKB × bobot menghasilkan dasar Rp200.000.000. Perda provinsi menetapkan tarif PKB kepemilikan pertama 1,1%.\n1. **PKB terutang** (untuk provinsi) = 1,1% × Rp200.000.000 = **Rp2.200.000**\n2. **Opsen PKB** (untuk kab/kota) = 66% × Rp2.200.000 = **Rp1.452.000**\n3. **Total dibayar WP** = Rp2.200.000 + Rp1.452.000 = **Rp3.652.000**\n\nKeduanya dibayar **sekaligus** oleh WP, lalu otomatis terbagi antara provinsi dan kabupaten/kota.\n\n---\n\n### 3. Retribusi Daerah (Sekilas)\n\nSelain pajak, daerah memungut **Retribusi Daerah** = pungutan atas **jasa/izin tertentu** yang disediakan pemerintah daerah (ada kontraprestasi langsung — berbeda dari pajak; definisi Pasal 1 angka 22 UU HKPD). UU HKPD **merasionalisasi** objek retribusi (dipangkas dari **32 menjadi 18 objek**) dan menggolongkannya menjadi **3 jenis**:\n1. **Retribusi Jasa Umum** — pelayanan kesehatan, kebersihan, parkir di tepi jalan umum, pasar, dan pengendalian lalu lintas;\n2. **Retribusi Jasa Usaha** — antara lain penyediaan tempat kegiatan usaha berupa pasar grosir, pertokoan, dan tempat kegiatan usaha lainnya; tempat pelelangan; tempat khusus parkir; penginapan; rumah pemotongan hewan; jasa kepelabuhanan; tempat rekreasi; penyeberangan di air; penjualan hasil produksi usaha Pemerintah Daerah; dan pemanfaatan aset Daerah;\n3. **Retribusi Perizinan Tertentu** — persetujuan bangunan gedung (PBG), penggunaan tenaga kerja asing, dan pengelolaan pertambangan rakyat.\n\n> Sejak UU HKPD, **pajak daerah dan retribusi daerah ditetapkan dalam satu Perda** (Pasal 94) sebagai dasar pemungutan.\n\n---\n\n### 4. Ketentuan Peralihan (Pasal 187)\n\nKarena UU HKPD mengganti UU PDRD, ada masa transisi Perda:\n- Perda pajak/retribusi yang disusun berdasarkan UU 28/2009 **masih berlaku paling lama 2 tahun** sejak UU HKPD diundangkan (2022);\n- **Khusus** ketentuan PKB, BBNKB, Pajak MBLB, serta bagi hasil PKB & BBNKB dalam Perda lama **tetap berlaku sampai 3 tahun** — sejalan dengan dimulainya **opsen pada 5 Januari 2025**.\n\n---\n\n### 5. Dasar Hukum Lengkap\n\n1. **UU No. 1 Tahun 2022** tentang HKPD (mencabut UU No. 28/2009 PDRD). Pasal-pasal yang **terkonfirmasi lewat cek silang**:\n   - Pasal 1 angka 21 (definisi pajak daerah), angka 22 (retribusi), angka 29 (BBNKB), angka 40 (PBBKB), angka 52 (PAP), angka 61 (opsen);\n   - Pasal 4 (jenis pajak daerah); **Pasal 7** (objek PKB); **Pasal 10** (tarif PKB 1,2%/6%; DKI 2%/10%); **Pasal 15 ayat (2)** (tarif BBNKB DKI 20%); **Pasal 28 ayat (2)** & **29** (objek/subjek PAP);\n   - **Pasal 83** (tarif opsen PKB 66%, BBNKB 66%, MBLB 25%); **Pasal 85** (bagi hasil PBBKB 70/30 & PAP 50/50); **Pasal 94** (satu Perda); **Pasal 181 & 183** (ketentuan pidana pajak daerah); **Pasal 187** (ketentuan peralihan).\n   - *Catatan kejujuran:* seluruh **tarif** terverifikasi (PKB 1,2%, BBNKB 12%, PAB 0,2%, PBBKB 10%, PAP 10%, Pajak Rokok 10% cukai). **Nomor pasal tarif khusus PAB, PBBKB, PAP, dan Pajak Rokok belum saya verifikasi eksak** ke naskah UU (tersusun berurutan di kisaran Pasal 16–36) dan sengaja tidak dicantumkan agar tidak keliru.\n2. **PP No. 35 Tahun 2023** tentang Ketentuan Umum Pajak Daerah dan Retribusi Daerah — pelaksana UU HKPD.\n3. **UU No. 2 Tahun 2024** tentang Provinsi Daerah Khusus Jakarta — dasar pengecualian opsen di DKI.\n\n*Sumber verifikasi utama: UU No. 1 Tahun 2022, PP No. 35 Tahun 2023, PMK No. 85 Tahun 2024, serta JDIH dan Perda daerah terkait.*\n\n[↑ Kembali ke Daftar Isi](#daftar-isi)\n\n---",
      "pages": [
        {
          "chunkId": "TM13-P01",
          "page": 1,
          "blocks": [
            {
              "k": "h",
              "text": "TM 13 — Pajak Daerah & Retribusi Daerah (1): Pajak Daerah Provinsi"
            },
            {
              "k": "p",
              "text": "**Mata Kuliah:** Perpajakan I\n**Dasar Hukum Utama:** UU No. 1 Tahun 2022 tentang Hubungan Keuangan antara Pemerintah Pusat dan Pemerintahan Daerah (UU HKPD) · PP No. 35 Tahun 2023\n**Diperbarui mengikuti regulasi s.d.:** Juni 2026"
            }
          ]
        },
        {
          "chunkId": "TM13-P02",
          "page": 2,
          "blocks": [
            {
              "k": "h",
              "text": "0. Perubahan Besar: dari UU PDRD ke UU HKPD"
            },
            {
              "k": "p",
              "text": "⚠️ **Penting.** Pajak daerah kini diatur **UU No. 1 Tahun 2022 (HKPD)**, disahkan **5 Januari 2022**, yang **mencabut UU No. 28 Tahun 2009 (PDRD)**. UU HKPD merombak struktur pajak daerah: menyederhanakan jenis pajak, menurunkan tarif PKB/BBNKB, memperkenalkan **opsen pajak**, dan menggabungkan beberapa pajak kabupaten/kota menjadi **PBJT**. Pelaksana: **PP No. 35 Tahun 2023**."
            },
            {
              "k": "h",
              "text": "Pembagian Pajak Daerah (Pasal 4 UU HKPD)"
            },
            {
              "k": "pre",
              "text": "| Pajak Provinsi | Pajak Kabupaten/Kota (TM 14) |\n|---|---|\n| 1. Pajak Kendaraan Bermotor (PKB) | 1. PBB-P2 |\n| 2. Bea Balik Nama Kendaraan Bermotor (BBNKB) | 2. BPHTB |\n| 3. Pajak Alat Berat (PAB) | 3. Pajak Barang dan Jasa Tertentu (PBJT) |\n| 4. Pajak Bahan Bakar Kendaraan Bermotor (PBBKB) | 4. Pajak Reklame |\n| 5. Pajak Air Permukaan (PAP) | 5. Pajak Air Tanah (PAT) |\n| 6. Pajak Rokok | 6. Pajak MBLB |\n| 7. **Opsen** Pajak MBLB | 7. Pajak Sarang Burung Walet |\n| | 8. **Opsen** PKB & 9. **Opsen** BBNKB |"
            }
          ]
        },
        {
          "chunkId": "TM13-P03",
          "page": 3,
          "blocks": [
            {
              "k": "h",
              "text": "1. Jenis Pajak Provinsi & Tarif Maksimal"
            },
            {
              "k": "p",
              "text": "Catatan: UU HKPD hanya menetapkan **batas tarif tertinggi**. Tarif riil ditetapkan **Peraturan Daerah (Perda)** masing-masing provinsi."
            },
            {
              "k": "h",
              "text": "1.1 Pajak Kendaraan Bermotor (PKB)"
            },
            {
              "k": "list",
              "items": [
                "**Objek (Pasal 7):** kepemilikan dan/atau penguasaan kendaraan bermotor.",
                "**DPP:** Nilai Jual Kendaraan Bermotor (NJKB) × koefisien bobot.",
                "**Tarif maksimal (Pasal 10):** kepemilikan pertama **paling tinggi 1,2%**; progresif (kepemilikan kedua dst.) **paling tinggi 6%**.",
                "**Khusus DKI Jakarta** (provinsi tidak terbagi kab/kota otonom): pertama **paling tinggi 2%**, progresif **paling tinggi 10%**.",
                "Dikecualikan, a.l.: kereta api; kendaraan untuk hankam; kendaraan kedutaan/konsulat/organisasi internasional."
              ]
            },
            {
              "k": "h",
              "text": "1.2 Bea Balik Nama Kendaraan Bermotor (BBNKB)"
            },
            {
              "k": "list",
              "items": [
                "**Objek:** **penyerahan pertama** hak milik kendaraan bermotor (jual beli, tukar-menukar, hibah, warisan, pemasukan ke badan usaha).",
                "**Tarif maksimal:** **paling tinggi 12%**; khusus DKI **paling tinggi 20%** (Pasal 15 ayat (2)).",
                "> **Perubahan penting:** kendaraan **bekas (penyerahan kedua dan seterusnya) BUKAN objek BBNKB** lagi di UU HKPD. Tarif lama UU PDRD: penyerahan pertama 20%."
              ]
            },
            {
              "k": "h",
              "text": "1.3 Pajak Alat Berat (PAB)"
            },
            {
              "k": "list",
              "items": [
                "**Nomenklatur baru** di UU HKPD (dipisah dari PKB). **Objek:** kepemilikan dan/atau penguasaan alat berat, misalnya ekskavator dan buldoser. Karakter penggunaan alat berat dapat dijelaskan dalam definisi teknis, tetapi bukan syarat tunggal objek PAB.",
                "**Tarif maksimal: 0,2%**."
              ]
            },
            {
              "k": "h",
              "text": "1.4 Pajak Bahan Bakar Kendaraan Bermotor (PBBKB)"
            },
            {
              "k": "list",
              "items": [
                "**Objek:** penyerahan bahan bakar kendaraan bermotor & alat berat oleh penyedia kepada konsumen.",
                "**Tarif maksimal: 10%**; untuk **kendaraan umum** dapat ditetapkan paling tinggi **50% dari tarif kendaraan pribadi**.",
                "70% penerimaan PBBKB dibagihasilkan ke kab/kota; 30% bagian provinsi (Pasal 85 ayat (1))."
              ]
            },
            {
              "k": "h",
              "text": "1.5 Pajak Air Permukaan (PAP)"
            },
            {
              "k": "list",
              "items": [
                "**Objek:** pengambilan dan/atau pemanfaatan air permukaan (semua air di permukaan tanah, **tidak termasuk air laut**). Pengecualian objek diatur **Pasal 28 ayat (2)**, subjek pada **Pasal 29 ayat (1)**.",
                "**Tarif maksimal: 10%**. Bagi hasil ke kab/kota 50% : provinsi 50% (Pasal 85 ayat (2))."
              ]
            },
            {
              "k": "h",
              "text": "1.6 Pajak Rokok"
            },
            {
              "k": "list",
              "items": [
                "**Objek:** konsumsi rokok (dipungut bersamaan dengan **cukai** oleh Pemerintah Pusat, lalu disetor ke provinsi).",
                "**Tarif: 10% dari cukai rokok**."
              ]
            },
            {
              "k": "h",
              "text": "1.7 Dasar Pengenaan Pajak (DPP) — Ringkasan"
            },
            {
              "k": "p",
              "text": "Rumus umum: **Pokok pajak = DPP × tarif**."
            },
            {
              "k": "pre",
              "text": "| Pajak | Dasar Pengenaan (DPP) |\n|---|---|\n| **PKB** | **NJKB × bobot** (koefisien tingkat kerusakan jalan/pencemaran). NJKB = harga pasaran umum |\n| **BBNKB** | Nilai jual kendaraan bermotor (NJKB) |\n| **PAB** | Nilai jual alat berat |\n| **PBBKB** | Nilai jual BBKB **sebelum PPN** |\n| **PAP** | Nilai Perolehan Air Permukaan (volume × harga dasar air) |\n| **Pajak Rokok** | Cukai rokok yang ditetapkan Pemerintah |"
            },
            {
              "k": "h",
              "text": "1.8 Earmarking (Alokasi Penggunaan Wajib) — Pasal 86 UU HKPD"
            },
            {
              "k": "p",
              "text": "Sebagian penerimaan pajak tertentu **wajib dialokasikan** untuk tujuan khusus (Pasal 86 UU HKPD jo. Pasal 25 PP 35/2023):\n- **PKB & Opsen PKB:** paling sedikit **10%** untuk pembangunan/pemeliharaan jalan serta peningkatan moda & sarana transportasi umum;\n- **Pajak Rokok:** paling sedikit **50%** untuk mendanai pelayanan kesehatan masyarakat & penegakan hukum.\n*(Untuk pajak kab/kota — PBJT tenaga listrik & PAT — lihat TM 14.)*"
            }
          ]
        },
        {
          "chunkId": "TM13-P04",
          "page": 4,
          "blocks": [
            {
              "k": "h",
              "text": "2. OPSEN PAJAK — Inovasi Utama UU HKPD"
            },
            {
              "k": "p",
              "text": "**Opsen** (Pasal 1 angka 61) = **pungutan tambahan pajak menurut persentase tertentu** (*piggyback tax*). Tujuannya **menggantikan mekanisme bagi hasil** PKB/BBNKB dari provinsi ke kabupaten/kota — kini penerimaan **langsung terbagi** saat dipungut. **Berlaku 5 Januari 2025.**"
            },
            {
              "k": "pre",
              "text": "| Jenis Opsen | Dipungut oleh | Atas pokok pajak | Tarif (Pasal 83) |\n|---|---|---|---|\n| **Opsen PKB** | Kabupaten/Kota | PKB (provinsi) | **66%** |\n| **Opsen BBNKB** | Kabupaten/Kota | BBNKB (provinsi) | **66%** |\n| **Opsen Pajak MBLB** | Provinsi | Pajak MBLB (kab/kota) | **25%** |"
            },
            {
              "k": "p",
              "text": "**Kunci yang sering disalahpahami:** opsen **bukan beban baru**. Karena tarif dasar PKB/BBNKB **diturunkan** lebih dulu (PKB 2%→1,2%; BBNKB 20%→12%), total beban WP relatif setara dengan rezim lama. Opsen dipungut **bersamaan** dengan pajak induknya."
            },
            {
              "k": "p",
              "text": "**DKI Jakarta dikecualikan dari Opsen PKB & BBNKB** karena tidak terbagi dalam kabupaten/kota otonom (status Daerah Khusus, UU No. 2/2024). Itulah sebabnya tarif dasar PKB/BBNKB DKI dipatok lebih tinggi (2% / 20%)."
            },
            {
              "k": "h",
              "text": "📊 Simulasi Opsen PKB"
            },
            {
              "k": "p",
              "text": "Sebuah mobil di Provinsi B punya NJKB × bobot menghasilkan dasar Rp200.000.000. Perda provinsi menetapkan tarif PKB kepemilikan pertama 1,1%.\n1. **PKB terutang** (untuk provinsi) = 1,1% × Rp200.000.000 = **Rp2.200.000**\n2. **Opsen PKB** (untuk kab/kota) = 66% × Rp2.200.000 = **Rp1.452.000**\n3. **Total dibayar WP** = Rp2.200.000 + Rp1.452.000 = **Rp3.652.000**"
            },
            {
              "k": "p",
              "text": "Keduanya dibayar **sekaligus** oleh WP, lalu otomatis terbagi antara provinsi dan kabupaten/kota."
            }
          ]
        },
        {
          "chunkId": "TM13-P05",
          "page": 5,
          "blocks": [
            {
              "k": "h",
              "text": "3. Retribusi Daerah (Sekilas)"
            },
            {
              "k": "p",
              "text": "Selain pajak, daerah memungut **Retribusi Daerah** = pungutan atas **jasa/izin tertentu** yang disediakan pemerintah daerah (ada kontraprestasi langsung — berbeda dari pajak; definisi Pasal 1 angka 22 UU HKPD). UU HKPD **merasionalisasi** objek retribusi (dipangkas dari **32 menjadi 18 objek**) dan menggolongkannya menjadi **3 jenis**:\n1. **Retribusi Jasa Umum** — pelayanan kesehatan, kebersihan, parkir di tepi jalan umum, pasar, dan pengendalian lalu lintas;\n2. **Retribusi Jasa Usaha** — antara lain penyediaan tempat kegiatan usaha berupa pasar grosir, pertokoan, dan tempat kegiatan usaha lainnya; tempat pelelangan; tempat khusus parkir; penginapan; rumah pemotongan hewan; jasa kepelabuhanan; tempat rekreasi; penyeberangan di air; penjualan hasil produksi usaha Pemerintah Daerah; dan pemanfaatan aset Daerah;\n3. **Retribusi Perizinan Tertentu** — persetujuan bangunan gedung (PBG), penggunaan tenaga kerja asing, dan pengelolaan pertambangan rakyat."
            },
            {
              "k": "p",
              "text": "Sejak UU HKPD, **pajak daerah dan retribusi daerah ditetapkan dalam satu Perda** (Pasal 94) sebagai dasar pemungutan."
            }
          ]
        },
        {
          "chunkId": "TM13-P06",
          "page": 6,
          "blocks": [
            {
              "k": "h",
              "text": "4. Ketentuan Peralihan (Pasal 187)"
            },
            {
              "k": "p",
              "text": "Karena UU HKPD mengganti UU PDRD, ada masa transisi Perda:\n- Perda pajak/retribusi yang disusun berdasarkan UU 28/2009 **masih berlaku paling lama 2 tahun** sejak UU HKPD diundangkan (2022);\n- **Khusus** ketentuan PKB, BBNKB, Pajak MBLB, serta bagi hasil PKB & BBNKB dalam Perda lama **tetap berlaku sampai 3 tahun** — sejalan dengan dimulainya **opsen pada 5 Januari 2025**."
            }
          ]
        },
        {
          "chunkId": "TM13-P07",
          "page": 7,
          "blocks": [
            {
              "k": "h",
              "text": "5. Dasar Hukum Lengkap"
            },
            {
              "k": "list",
              "items": [
                "**UU No. 1 Tahun 2022** tentang HKPD (mencabut UU No. 28/2009 PDRD). Pasal-pasal yang **terkonfirmasi lewat cek silang**:",
                "Pasal 1 angka 21 (definisi pajak daerah), angka 22 (retribusi), angka 29 (BBNKB), angka 40 (PBBKB), angka 52 (PAP), angka 61 (opsen);",
                "Pasal 4 (jenis pajak daerah); **Pasal 7** (objek PKB); **Pasal 10** (tarif PKB 1,2%/6%; DKI 2%/10%); **Pasal 15 ayat (2)** (tarif BBNKB DKI 20%); **Pasal 28 ayat (2)** & **29** (objek/subjek PAP);",
                "**Pasal 83** (tarif opsen PKB 66%, BBNKB 66%, MBLB 25%); **Pasal 85** (bagi hasil PBBKB 70/30 & PAP 50/50); **Pasal 94** (satu Perda); **Pasal 181 & 183** (ketentuan pidana pajak daerah); **Pasal 187** (ketentuan peralihan).",
                "*Catatan kejujuran:* seluruh **tarif** terverifikasi (PKB 1,2%, BBNKB 12%, PAB 0,2%, PBBKB 10%, PAP 10%, Pajak Rokok 10% cukai). **Nomor pasal tarif khusus PAB, PBBKB, PAP, dan Pajak Rokok belum saya verifikasi eksak** ke naskah UU (tersusun berurutan di kisaran Pasal 16–36) dan sengaja tidak dicantumkan agar tidak keliru.",
                "**PP No. 35 Tahun 2023** tentang Ketentuan Umum Pajak Daerah dan Retribusi Daerah — pelaksana UU HKPD.",
                "**UU No. 2 Tahun 2024** tentang Provinsi Daerah Khusus Jakarta — dasar pengecualian opsen di DKI."
              ]
            },
            {
              "k": "p",
              "text": "*Sumber verifikasi utama: UU No. 1 Tahun 2022, PP No. 35 Tahun 2023, PMK No. 85 Tahun 2024, serta JDIH dan Perda daerah terkait.*"
            },
            {
              "k": "p",
              "text": "[↑ Kembali ke Daftar Isi](#daftar-isi)"
            }
          ]
        }
      ]
    },
    {
      "tm": 14,
      "title": "TM 14 — Pajak Daerah & Retribusi Daerah (2): PBB-P2, BPHTB & Pajak Kabupaten/Kota Lainnya",
      "sourcePdf": "Materi_Perpajakan_I_TM8-14_Kompilasi (2).md",
      "sourceFile": "Materi_Perpajakan_I_TM8-14_Kompilasi (2).md",
      "lawBasis": "UU No. 1 Tahun 2022 (UU HKPD) · PP No. 35 Tahun 2023",
      "body_markdown": "## TM 14 — Pajak Daerah & Retribusi Daerah (2): PBB-P2, BPHTB & Pajak Kabupaten/Kota Lainnya\n\n**Mata Kuliah:** Perpajakan I\n**Dasar Hukum Utama:** UU No. 1 Tahun 2022 (UU HKPD) · PP No. 35 Tahun 2023\n**Diperbarui mengikuti regulasi s.d.:** Juni 2026\n\n---\n\n### 0. Daftar Pajak Kabupaten/Kota (Pasal 4 UU HKPD)\n\nPBB-P2 · BPHTB · PBJT · Pajak Reklame · Pajak Air Tanah (PAT) · Pajak MBLB · Pajak Sarang Burung Walet · **Opsen PKB** · **Opsen BBNKB**.\n\n> Opsen PKB & BBNKB (66% atas pokok pajak provinsi) sudah dibahas di TM 13 — keduanya menjadi **sumber penerimaan kabupaten/kota**.\n\n---\n\n### 1. PBB-P2 (Pajak Bumi dan Bangunan Perdesaan & Perkotaan)\n\n#### 1.1 Definisi & Objek\nPajak atas **bumi dan/atau bangunan** yang dimiliki, dikuasai, dan/atau dimanfaatkan orang pribadi/badan, **kecuali** kawasan yang digunakan untuk perkebunan, perhutanan, dan pertambangan (sektor ini = PBB **pusat**, bukan PBB-P2).\n\n#### 1.2 Dasar Pengenaan & Tarif\n- **DPP = NJOP** (Nilai Jual Objek Pajak); besaran NJOP **ditetapkan oleh Kepala Daerah** (Pasal 40 ayat (7)), menurut keadaan objek pada **1 Januari**, umumnya **setiap 3 tahun** (objek tertentu bisa tiap tahun).\n- **Persentase dasar pengenaan PBB-P2** ditetapkan sebesar **20%–100%** dari NJOP setelah dikurangi NJOPTKP, sesuai kondisi objek dan ketentuan Perkada. Istilah “NJKP” tidak digunakan sebagai parameter nasional universal dalam rezim PBB-P2 UU HKPD.\n- **NJOPTKP** (NJOP Tidak Kena Pajak) **paling rendah Rp10.000.000** per WP, diberikan **1 kali per tahun pajak** meski punya beberapa objek.\n- **Tarif maksimal (Pasal 41): 0,5%** — naik dari 0,3% di UU PDRD. Untuk **lahan produksi pangan & ternak**, tarif ditetapkan **lebih rendah** (contoh DKI: 0,25%).\n\n**Rumus:** `PBB-P2 = Tarif × [persentase dasar pengenaan × (NJOP − NJOPTKP)]`\n\n#### 📊 Simulasi PBB-P2\nRumah di kota X: NJOP bumi + bangunan = Rp800.000.000. NJOPTKP Rp10.000.000. Perkada: tarif 0,2% dan persentase dasar pengenaan 40%.\n1. NJOP − NJOPTKP = Rp800.000.000 − Rp10.000.000 = Rp790.000.000\n2. Dasar pengenaan terpakai = 40% × Rp790.000.000 = Rp316.000.000\n3. **PBB-P2 = 0,2% × Rp316.000.000 = Rp632.000**\n\n---\n\n### 2. BPHTB (Bea Perolehan Hak atas Tanah dan Bangunan)\n\n#### 2.1 Definisi & Objek\nPajak atas **perolehan hak** atas tanah dan/atau bangunan. **Objek:** perolehan hak karena **pemindahan hak** (jual beli, tukar-menukar, hibah, hibah wasiat, waris, pemasukan ke badan usaha, dll.) dan **pemberian hak baru**.\n\n#### 2.2 Dasar Pengenaan & Tarif\n- **DPP = NPOP** (Nilai Perolehan Objek Pajak) — yaitu nilai transaksi/harga pasar; bila NPOP < NJOP PBB, yang dipakai adalah **NJOP**.\n- **NPOPTKP** untuk perolehan hak pertama ditetapkan **paling rendah Rp80.000.000** untuk setiap Wajib Pajak. Untuk perolehan karena waris atau hibah wasiat yang diterima keluarga sedarah garis lurus satu derajat ke atas/ke bawah atau suami/istri, batas minimumnya **Rp300.000.000**. Perda dapat menetapkan nilai yang lebih tinggi.\n- **Tarif maksimal: 5%** (Pasal 47 ayat (1); tidak berubah dari UU PDRD).\n\n**Rumus:** `BPHTB = Tarif × (NPOP − NPOPTKP)`\n\n#### 📊 Simulasi BPHTB\nMembeli rumah seharga Rp1.000.000.000 (NPOP). NPOPTKP Rp80.000.000 (Perda). Tarif 5%.\n1. NPOP − NPOPTKP = Rp1.000.000.000 − Rp80.000.000 = Rp920.000.000\n2. **BPHTB = 5% × Rp920.000.000 = Rp46.000.000**\n\n#### 2.3 Jenis Perolehan Hak & Saat Terutang BPHTB\n**Objek perolehan hak** terdiri atas: **pemindahan hak** (jual beli; tukar-menukar; hibah; hibah wasiat; waris; pemasukan ke badan; pemisahan hak yang mengakibatkan peralihan; penggabungan/peleburan/pemekaran usaha; hadiah; penunjukan pembeli dalam lelang) dan **pemberian hak baru** (kelanjutan pelepasan hak / di luar pelepasan hak).\n\n| Peristiwa | Saat terutang BPHTB |\n|---|---|\n| Jual beli | Tanggal dibuat & ditandatanganinya **akta** (bila ada PPJB → saat **PPJB** ditandatangani) |\n| Tukar-menukar, hibah, hibah wasiat, pemasukan ke badan, pemisahan hak, penggabungan/peleburan/pemekaran usaha, hadiah | Tanggal dibuat & ditandatanganinya **akta** |\n| Waris | Tanggal **mendaftarkan peralihan hak** ke kantor pertanahan |\n| Putusan hakim | Tanggal putusan pengadilan yang **inkracht** |\n| Pemberian hak baru | Tanggal diterbitkannya **surat keputusan pemberian hak** |\n| Lelang | Tanggal **penunjukan pemenang lelang** |\n\n> **Perubahan UU HKPD:** untuk jual beli yang memakai **PPJB**, saat terutang BPHTB dapat jatuh pada **saat PPJB** (sebelumnya: hanya saat akta jual beli/AJB).\n\n---\n\n### 3. PBJT (Pajak Barang dan Jasa Tertentu)\n\n> **Inovasi penyederhanaan UU HKPD.** PBJT **menggabungkan 5 pajak lama** menjadi satu nomenklatur: **Pajak Hotel, Pajak Restoran, Pajak Hiburan, Pajak Parkir, dan Pajak Penerangan Jalan (konsumsi listrik)**.\n\n- **Objek:** konsumsi atas — (a) **makanan dan/atau minuman**; (b) **tenaga listrik**; (c) **jasa perhotelan**; (d) **jasa parkir**; (e) **jasa kesenian dan hiburan**.\n- **Subjek:** konsumen akhir; **WP:** pihak yang menjual/menyerahkan barang/jasa.\n- **Tarif umum (Pasal 58): paling tinggi 10%.**\n- **Tarif khusus hiburan tertentu** (diskotek, karaoke, kelab malam, bar): **paling rendah 40% – paling tinggi 75%**.\n- **Catatan Putusan MK 19/PUU-XXII/2024:** frasa “dan mandi uap/spa” dalam Pasal 55 ayat (1) huruf l UU HKPD dimaknai sebagai **bagian dari jasa pelayanan kesehatan tradisional**, sehingga penyebutan spa harus dibaca dengan batasan konstitusional tersebut.\n- Tarif khusus konsumsi listrik (Pasal 58 ayat (3)): dari sumber lain oleh industri/pertambangan migas paling tinggi **3%**; yang **dihasilkan sendiri** paling tinggi **1,5%**.\n\n| Pajak lama (UU PDRD) | Menjadi (UU HKPD) |\n|---|---|\n| Pajak Hotel, Restoran, Hiburan, Parkir, Penerangan Jalan | **PBJT** (satu jenis pajak) |\n\n> **Earmarking (Pasal 86 UU HKPD):** penerimaan **PBJT atas tenaga listrik** wajib dialokasikan **paling sedikit 10%** untuk penyediaan **penerangan jalan umum (PJU)**.\n\n---\n\n### 4. Pajak Kabupaten/Kota Lainnya\n\n| Pajak | Objek | Tarif Maksimal |\n|---|---|---|\n| **Pajak Reklame** | Penyelenggaraan reklame (papan/billboard, kain, melekat, berjalan, udara, dll.) | **25%** |\n| **Pajak Air Tanah (PAT)** | Pengambilan/pemanfaatan air tanah (kecuali keperluan dasar RT, pertanian/perikanan rakyat, keagamaan) | **20%** |\n| **Pajak MBLB** | Pengambilan mineral bukan logam & batuan (mis. pasir, batu, kapur) | **20%** *(provinsi memungut Opsen MBLB 25% atas pokok ini)* |\n| **Pajak Sarang Burung Walet** | Pengambilan/pengusahaan sarang burung walet (subjek Pasal 77, DPP Pasal 78, tarif Pasal 79) | **10%** |\n\n**Dasar Pengenaan (DPP) pajak di atas:**\n- **Pajak Reklame:** Nilai Sewa Reklame (NSR);\n- **PAT:** Nilai Perolehan Air Tanah (volume × harga dasar air tanah);\n- **Pajak MBLB:** nilai jual hasil pengambilan MBLB (volume × harga patokan/standar);\n- **Pajak Walet:** nilai jual sarang burung walet (volume × harga pasaran umum).\n\n> **Earmarking (Pasal 86 UU HKPD):** penerimaan **Pajak Air Tanah** wajib dialokasikan **paling sedikit 10%** untuk pencegahan/penanggulangan/pemulihan pencemaran & kerusakan lingkungan yang berdampak pada kualitas air tanah.\n\n---\n\n### 5. Catatan Perbandingan Tarif (UU PDRD → UU HKPD)\n\n| Pajak | UU PDRD (lama) | UU HKPD (berlaku) |\n|---|---|---|\n| PBB-P2 | maks 0,3% | **maks 0,5%** |\n| BPHTB | maks 5% | **maks 5%** (tetap) |\n| Pajak Hiburan | maks 35% (tertentu s.d. 75%) | **PBJT** maks 10% (hiburan tertentu **40–75%**) |\n| Pajak Reklame | maks 25% | **maks 25%** (tetap) |\n\n---\n\n### 6. Dasar Hukum Lengkap\n\n1. **UU No. 1 Tahun 2022** tentang HKPD. Pasal-pasal yang **terkonfirmasi lewat cek silang**:\n   - Pasal 4 (jenis pajak kab/kota); **Pasal 40 ayat (7)** (NJOP ditetapkan Kepala Daerah); **Pasal 41** (tarif PBB-P2 maks 0,5%); **Pasal 47 ayat (1)** (tarif BPHTB maks 5%); **Pasal 58** (tarif PBJT 10%; hiburan tertentu 40–75%) & **Pasal 58 ayat (3)** (tarif listrik 3% / 1,5%); **Pasal 69** (tarif PAT maks 20%); **Pasal 77–80** (Pajak Sarang Burung Walet: subjek 77, DPP 78, tarif 79 maks 10%, pokok 80); **Pasal 83** (Opsen PKB/BBNKB 66%).\n   - NJOPTKP min Rp10 juta; NPOPTKP min Rp80 juta untuk perolehan pertama dan Rp300 juta untuk waris/hibah wasiat dalam hubungan keluarga tertentu (Pasal 46 UU HKPD).\n   - *Catatan kejujuran:* seluruh **tarif** terverifikasi (PBB-P2 0,5%; BPHTB 5%; PBJT 10% / hiburan tertentu 40–75%; Reklame 25%; PAT 20%; MBLB 20% — DKI 25%; Walet 10%). **Nomor pasal untuk Pajak Reklame dan Pajak MBLB belum saya verifikasi eksak** (tersusun di antara Pasal 58 dan 69) dan sengaja tidak dicantumkan agar tidak keliru.\n2. **PP No. 35 Tahun 2023** tentang Ketentuan Umum Pajak Daerah dan Retribusi Daerah.\n3. Pelaksanaan teknis: **Peraturan Daerah** masing-masing kabupaten/kota (mis. Perda DKI Jakarta No. 1 Tahun 2024; Perda Kota Bandung No. 1 Tahun 2024).\n\n*Catatan: UU HKPD hanya menetapkan batas tarif tertinggi; tarif riil ditetapkan Perda setempat. Sumber verifikasi utama: UU No. 1 Tahun 2022, PP No. 35 Tahun 2023, PMK No. 85 Tahun 2024, dan JDIH/Perda daerah terkait.*\n\n*Sumber verifikasi utama: UU No. 1 Tahun 2022, PP No. 35 Tahun 2023, serta JDIH dan Perda daerah terkait.*\n\n[↑ Kembali ke Daftar Isi](#daftar-isi)\n\n---",
      "pages": [
        {
          "chunkId": "TM14-P01",
          "page": 1,
          "blocks": [
            {
              "k": "h",
              "text": "TM 14 — Pajak Daerah & Retribusi Daerah (2): PBB-P2, BPHTB & Pajak Kabupaten/Kota Lainnya"
            },
            {
              "k": "p",
              "text": "**Mata Kuliah:** Perpajakan I\n**Dasar Hukum Utama:** UU No. 1 Tahun 2022 (UU HKPD) · PP No. 35 Tahun 2023\n**Diperbarui mengikuti regulasi s.d.:** Juni 2026"
            }
          ]
        },
        {
          "chunkId": "TM14-P02",
          "page": 2,
          "blocks": [
            {
              "k": "h",
              "text": "0. Daftar Pajak Kabupaten/Kota (Pasal 4 UU HKPD)"
            },
            {
              "k": "p",
              "text": "PBB-P2 · BPHTB · PBJT · Pajak Reklame · Pajak Air Tanah (PAT) · Pajak MBLB · Pajak Sarang Burung Walet · **Opsen PKB** · **Opsen BBNKB**."
            },
            {
              "k": "p",
              "text": "Opsen PKB & BBNKB (66% atas pokok pajak provinsi) sudah dibahas di TM 13 — keduanya menjadi **sumber penerimaan kabupaten/kota**."
            }
          ]
        },
        {
          "chunkId": "TM14-P03",
          "page": 3,
          "blocks": [
            {
              "k": "h",
              "text": "1. PBB-P2 (Pajak Bumi dan Bangunan Perdesaan & Perkotaan)"
            },
            {
              "k": "h",
              "text": "1.1 Definisi & Objek"
            },
            {
              "k": "p",
              "text": "Pajak atas **bumi dan/atau bangunan** yang dimiliki, dikuasai, dan/atau dimanfaatkan orang pribadi/badan, **kecuali** kawasan yang digunakan untuk perkebunan, perhutanan, dan pertambangan (sektor ini = PBB **pusat**, bukan PBB-P2)."
            },
            {
              "k": "h",
              "text": "1.2 Dasar Pengenaan & Tarif"
            },
            {
              "k": "list",
              "items": [
                "**DPP = NJOP** (Nilai Jual Objek Pajak); besaran NJOP **ditetapkan oleh Kepala Daerah** (Pasal 40 ayat (7)), menurut keadaan objek pada **1 Januari**, umumnya **setiap 3 tahun** (objek tertentu bisa tiap tahun).",
                "**Persentase dasar pengenaan PBB-P2** = **20%–100%** dari NJOP setelah dikurangi NJOPTKP, ditetapkan melalui Perkada sesuai kondisi objek.",
                "**NJOPTKP** (NJOP Tidak Kena Pajak) **paling rendah Rp10.000.000** per WP, diberikan **1 kali per tahun pajak** meski punya beberapa objek.",
                "**Tarif maksimal (Pasal 41): 0,5%** — naik dari 0,3% di UU PDRD. Untuk **lahan produksi pangan & ternak**, tarif ditetapkan **lebih rendah** (contoh DKI: 0,25%)."
              ]
            },
            {
              "k": "p",
              "text": "**Rumus:** `PBB-P2 = Tarif × [persentase dasar pengenaan × (NJOP − NJOPTKP)]`"
            },
            {
              "k": "h",
              "text": "📊 Simulasi PBB-P2"
            },
            {
              "k": "p",
              "text": "Rumah di kota X: NJOP bumi + bangunan = Rp800.000.000. NJOPTKP Rp10.000.000. Perkada: tarif 0,2% dan persentase dasar pengenaan 40%.\n1. NJOP − NJOPTKP = Rp800.000.000 − Rp10.000.000 = Rp790.000.000\n2. Dasar pengenaan terpakai = 40% × Rp790.000.000 = Rp316.000.000\n3. **PBB-P2 = 0,2% × Rp316.000.000 = Rp632.000**"
            }
          ]
        },
        {
          "chunkId": "TM14-P04",
          "page": 4,
          "blocks": [
            {
              "k": "h",
              "text": "2. BPHTB (Bea Perolehan Hak atas Tanah dan Bangunan)"
            },
            {
              "k": "h",
              "text": "2.1 Definisi & Objek"
            },
            {
              "k": "p",
              "text": "Pajak atas **perolehan hak** atas tanah dan/atau bangunan. **Objek:** perolehan hak karena **pemindahan hak** (jual beli, tukar-menukar, hibah, hibah wasiat, waris, pemasukan ke badan usaha, dll.) dan **pemberian hak baru**."
            },
            {
              "k": "h",
              "text": "2.2 Dasar Pengenaan & Tarif"
            },
            {
              "k": "list",
              "items": [
                "**DPP = NPOP** (Nilai Perolehan Objek Pajak) — yaitu nilai transaksi/harga pasar; bila NPOP < NJOP PBB, yang dipakai adalah **NJOP**.",
                "**NPOPTKP** untuk perolehan hak pertama ditetapkan **paling rendah Rp80.000.000** untuk setiap Wajib Pajak. Untuk perolehan karena waris atau hibah wasiat yang diterima keluarga sedarah garis lurus satu derajat ke atas/ke bawah atau suami/istri, batas minimumnya **Rp300.000.000**. Perda dapat menetapkan nilai yang lebih tinggi.",
                "**Tarif maksimal: 5%** (Pasal 47 ayat (1); tidak berubah dari UU PDRD)."
              ]
            },
            {
              "k": "p",
              "text": "**Rumus:** `BPHTB = Tarif × (NPOP − NPOPTKP)`"
            },
            {
              "k": "h",
              "text": "📊 Simulasi BPHTB"
            },
            {
              "k": "p",
              "text": "Membeli rumah seharga Rp1.000.000.000 (NPOP). NPOPTKP Rp80.000.000 (Perda). Tarif 5%.\n1. NPOP − NPOPTKP = Rp1.000.000.000 − Rp80.000.000 = Rp920.000.000\n2. **BPHTB = 5% × Rp920.000.000 = Rp46.000.000**"
            },
            {
              "k": "h",
              "text": "2.3 Jenis Perolehan Hak & Saat Terutang BPHTB"
            },
            {
              "k": "p",
              "text": "**Objek perolehan hak** terdiri atas: **pemindahan hak** (jual beli; tukar-menukar; hibah; hibah wasiat; waris; pemasukan ke badan; pemisahan hak yang mengakibatkan peralihan; penggabungan/peleburan/pemekaran usaha; hadiah; penunjukan pembeli dalam lelang) dan **pemberian hak baru** (kelanjutan pelepasan hak / di luar pelepasan hak)."
            },
            {
              "k": "pre",
              "text": "| Peristiwa | Saat terutang BPHTB |\n|---|---|\n| Jual beli | Tanggal dibuat & ditandatanganinya **akta** (bila ada PPJB → saat **PPJB** ditandatangani) |\n| Tukar-menukar, hibah, hibah wasiat, pemasukan ke badan, pemisahan hak, penggabungan/peleburan/pemekaran usaha, hadiah | Tanggal dibuat & ditandatanganinya **akta** |\n| Waris | Tanggal **mendaftarkan peralihan hak** ke kantor pertanahan |\n| Putusan hakim | Tanggal putusan pengadilan yang **inkracht** |\n| Pemberian hak baru | Tanggal diterbitkannya **surat keputusan pemberian hak** |\n| Lelang | Tanggal **penunjukan pemenang lelang** |"
            },
            {
              "k": "p",
              "text": "**Perubahan UU HKPD:** untuk jual beli yang memakai **PPJB**, saat terutang BPHTB dapat jatuh pada **saat PPJB** (sebelumnya: hanya saat akta jual beli/AJB)."
            }
          ]
        },
        {
          "chunkId": "TM14-P05",
          "page": 5,
          "blocks": [
            {
              "k": "h",
              "text": "3. PBJT (Pajak Barang dan Jasa Tertentu)"
            },
            {
              "k": "p",
              "text": "**Inovasi penyederhanaan UU HKPD.** PBJT **menggabungkan 5 pajak lama** menjadi satu nomenklatur: **Pajak Hotel, Pajak Restoran, Pajak Hiburan, Pajak Parkir, dan Pajak Penerangan Jalan (konsumsi listrik)**."
            },
            {
              "k": "list",
              "items": [
                "**Objek:** konsumsi atas — (a) **makanan dan/atau minuman**; (b) **tenaga listrik**; (c) **jasa perhotelan**; (d) **jasa parkir**; (e) **jasa kesenian dan hiburan**.",
                "**Subjek:** konsumen akhir; **WP:** pihak yang menjual/menyerahkan barang/jasa.",
                "**Tarif umum (Pasal 58): paling tinggi 10%.**",
                "**Tarif khusus hiburan tertentu** (diskotek, karaoke, kelab malam, bar): **paling rendah 40% – paling tinggi 75%**. Catatan MK 19/PUU-XXII/2024: frasa mandi uap/spa dalam Pasal 55 ayat (1) huruf l UU HKPD dimaknai sebagai bagian dari jasa pelayanan kesehatan tradisional.",
                "Tarif khusus konsumsi listrik (Pasal 58 ayat (3)): dari sumber lain oleh industri/pertambangan migas paling tinggi **3%**; yang **dihasilkan sendiri** paling tinggi **1,5%**."
              ]
            },
            {
              "k": "pre",
              "text": "| Pajak lama (UU PDRD) | Menjadi (UU HKPD) |\n|---|---|\n| Pajak Hotel, Restoran, Hiburan, Parkir, Penerangan Jalan | **PBJT** (satu jenis pajak) |"
            },
            {
              "k": "p",
              "text": "**Earmarking (Pasal 86 UU HKPD):** penerimaan **PBJT atas tenaga listrik** wajib dialokasikan **paling sedikit 10%** untuk penyediaan **penerangan jalan umum (PJU)**."
            }
          ]
        },
        {
          "chunkId": "TM14-P06",
          "page": 6,
          "blocks": [
            {
              "k": "h",
              "text": "4. Pajak Kabupaten/Kota Lainnya"
            },
            {
              "k": "pre",
              "text": "| Pajak | Objek | Tarif Maksimal |\n|---|---|---|\n| **Pajak Reklame** | Penyelenggaraan reklame (papan/billboard, kain, melekat, berjalan, udara, dll.) | **25%** |\n| **Pajak Air Tanah (PAT)** | Pengambilan/pemanfaatan air tanah (kecuali keperluan dasar RT, pertanian/perikanan rakyat, keagamaan) | **20%** |\n| **Pajak MBLB** | Pengambilan mineral bukan logam & batuan (mis. pasir, batu, kapur) | **20%** *(provinsi memungut Opsen MBLB 25% atas pokok ini)* |\n| **Pajak Sarang Burung Walet** | Pengambilan/pengusahaan sarang burung walet (subjek Pasal 77, DPP Pasal 78, tarif Pasal 79) | **10%** |"
            },
            {
              "k": "p",
              "text": "**Dasar Pengenaan (DPP) pajak di atas:**\n- **Pajak Reklame:** Nilai Sewa Reklame (NSR);\n- **PAT:** Nilai Perolehan Air Tanah (volume × harga dasar air tanah);\n- **Pajak MBLB:** nilai jual hasil pengambilan MBLB (volume × harga patokan/standar);\n- **Pajak Walet:** nilai jual sarang burung walet (volume × harga pasaran umum)."
            },
            {
              "k": "p",
              "text": "**Earmarking (Pasal 86 UU HKPD):** penerimaan **Pajak Air Tanah** wajib dialokasikan **paling sedikit 10%** untuk pencegahan/penanggulangan/pemulihan pencemaran & kerusakan lingkungan yang berdampak pada kualitas air tanah."
            }
          ]
        },
        {
          "chunkId": "TM14-P07",
          "page": 7,
          "blocks": [
            {
              "k": "h",
              "text": "5. Catatan Perbandingan Tarif (UU PDRD → UU HKPD)"
            },
            {
              "k": "pre",
              "text": "| Pajak | UU PDRD (lama) | UU HKPD (berlaku) |\n|---|---|---|\n| PBB-P2 | maks 0,3% | **maks 0,5%** |\n| BPHTB | maks 5% | **maks 5%** (tetap) |\n| Pajak Hiburan | maks 35% (tertentu s.d. 75%) | **PBJT** maks 10% (hiburan tertentu **40–75%**) |\n| Pajak Reklame | maks 25% | **maks 25%** (tetap) |"
            }
          ]
        },
        {
          "chunkId": "TM14-P08",
          "page": 8,
          "blocks": [
            {
              "k": "h",
              "text": "6. Dasar Hukum Lengkap"
            },
            {
              "k": "list",
              "items": [
                "**UU No. 1 Tahun 2022** tentang HKPD. Pasal-pasal yang **terkonfirmasi lewat cek silang**:",
                "Pasal 4 (jenis pajak kab/kota); **Pasal 40 ayat (7)** (NJOP ditetapkan Kepala Daerah); **Pasal 41** (tarif PBB-P2 maks 0,5%); **Pasal 47 ayat (1)** (tarif BPHTB maks 5%); **Pasal 58** (tarif PBJT 10%; hiburan tertentu 40–75%) & **Pasal 58 ayat (3)** (tarif listrik 3% / 1,5%); **Pasal 69** (tarif PAT maks 20%); **Pasal 77–80** (Pajak Sarang Burung Walet: subjek 77, DPP 78, tarif 79 maks 10%, pokok 80); **Pasal 83** (Opsen PKB/BBNKB 66%).",
                "NJOPTKP min Rp10 juta; NPOPTKP min Rp80 juta untuk perolehan pertama dan Rp300 juta untuk waris/hibah wasiat dalam hubungan keluarga tertentu (Pasal 46 UU HKPD).",
                "*Catatan kejujuran:* seluruh **tarif** terverifikasi (PBB-P2 0,5%; BPHTB 5%; PBJT 10% / hiburan tertentu 40–75%; Reklame 25%; PAT 20%; MBLB 20% — DKI 25%; Walet 10%). **Nomor pasal untuk Pajak Reklame dan Pajak MBLB belum saya verifikasi eksak** (tersusun di antara Pasal 58 dan 69) dan sengaja tidak dicantumkan agar tidak keliru.",
                "**PP No. 35 Tahun 2023** tentang Ketentuan Umum Pajak Daerah dan Retribusi Daerah.",
                "Pelaksanaan teknis: **Peraturan Daerah** masing-masing kabupaten/kota (mis. Perda DKI Jakarta No. 1 Tahun 2024; Perda Kota Bandung No. 1 Tahun 2024)."
              ]
            },
            {
              "k": "p",
              "text": "*Catatan: UU HKPD hanya menetapkan batas tarif tertinggi; tarif riil ditetapkan Perda setempat. Sumber verifikasi utama: UU No. 1 Tahun 2022, PP No. 35 Tahun 2023, PMK No. 85 Tahun 2024, dan JDIH/Perda daerah terkait.*"
            },
            {
              "k": "p",
              "text": "*Sumber verifikasi utama: UU No. 1 Tahun 2022, PP No. 35 Tahun 2023, serta JDIH dan Perda daerah terkait.*"
            },
            {
              "k": "p",
              "text": "[↑ Kembali ke Daftar Isi](#daftar-isi)"
            }
          ]
        }
      ]
    }
  ]
};

export default perpajakanPraUAS;
