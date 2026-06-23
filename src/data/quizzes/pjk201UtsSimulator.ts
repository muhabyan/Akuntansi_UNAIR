import type { QuizQuestion } from '../../types';

/**
 * Simulasi UTS Perpajakan I TM 1-7.
 * 70 soal objektif tanpa esai: pilihan, pilih banyak, pencocokan, dan isian angka.
 * Mayoritas menguji teori; soal hitungan dipakai untuk PPh, PPN, PTKP, PPh Final, bunga, dan tax ratio.
 */
export const PJK201_QUIZ_UTS_SIMULATOR: QuizQuestion[] = [
  {
    "topic": "TM1 · Kebijakan Fiskal",
    "skill": "Membedakan kebijakan ekspansif dan kontraktif",
    "difficulty": "basic",
    "q": "Perekonomian mengalami resesi dan pengangguran tinggi. Kebijakan fiskal yang paling sesuai adalah...",
    "options": [
      "Mengurangi belanja pemerintah dan menaikkan pajak",
      "Meningkatkan belanja pemerintah atau menurunkan pajak",
      "Menaikkan pajak serta menurunkan transfer sosial",
      "Membekukan seluruh penerimaan dan pengeluaran negara"
    ],
    "answer": 1,
    "explanation": "Kebijakan fiskal ekspansif mendorong permintaan agregat melalui kenaikan belanja atau penurunan pajak."
  },
  {
    "topic": "TM1 · Kebijakan Fiskal",
    "skill": "Mengidentifikasi fungsi pajak",
    "difficulty": "basic",
    "q": "Penggunaan penerimaan pajak untuk membangun jalan umum dan sekolah terutama menunjukkan fungsi...",
    "options": [
      "Alokasi",
      "Distribusi",
      "Stabilisasi",
      "Yuridis"
    ],
    "answer": 0,
    "explanation": "Fungsi alokasi membiayai barang dan layanan publik yang tidak selalu disediakan pasar secara efisien."
  },
  {
    "topic": "TM1 · Kebijakan Fiskal",
    "skill": "Mengidentifikasi fungsi distribusi",
    "difficulty": "basic",
    "q": "Pajak progresif yang membiayai bantuan sosial terutama menjalankan fungsi...",
    "options": [
      "Budgetair saja",
      "Distribusi",
      "Administratif",
      "Stelsel nyata"
    ],
    "answer": 1,
    "explanation": "Fungsi distribusi mengurangi ketimpangan melalui pemungutan dan belanja yang redistributif."
  },
  {
    "topic": "TM1 · Definisi Pajak",
    "skill": "Membedakan pajak dan retribusi",
    "difficulty": "basic",
    "q": "Benar atau salah: pajak selalu memberikan kontraprestasi langsung yang nilainya setara kepada setiap pembayar.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answer": 1,
    "explanation": "Salah. Pajak tidak memberikan kontraprestasi langsung; manfaatnya diterima secara kolektif."
  },
  {
    "topic": "TM1 · Hukum Pajak",
    "skill": "Membedakan hukum materiil dan formal",
    "difficulty": "medium",
    "q": "Ketentuan mengenai subjek, objek, dan tarif PPh termasuk hukum pajak...",
    "options": [
      "Formal",
      "Materiil",
      "Pidana umum",
      "Perdata"
    ],
    "answer": 1,
    "explanation": "Hukum pajak materiil mengatur siapa dan apa yang dikenai pajak, dasar pengenaan, tarif, serta timbul-hapusnya utang pajak."
  },
  {
    "topic": "TM1 · Sejarah Pajak",
    "skill": "Mengenali reformasi pajak 1983",
    "difficulty": "medium",
    "q": "Perubahan penting dalam reformasi perpajakan Indonesia tahun 1983 adalah...",
    "options": [
      "Penghapusan seluruh pajak pusat",
      "Peralihan menuju self assessment melalui paket UU KUP, PPh, dan PPN",
      "Pembentukan Pengadilan Pajak",
      "Penerapan Coretax"
    ],
    "answer": 1,
    "explanation": "Paket undang-undang 1983 menjadi fondasi sistem perpajakan modern dan self assessment."
  },
  {
    "topic": "TM1 · Dasar Konstitusional",
    "skill": "Mengenali dasar konstitusional pajak",
    "difficulty": "basic",
    "q": "Pernyataan “pajak dan pungutan lain yang bersifat memaksa untuk keperluan negara diatur dengan undang-undang” terdapat dalam...",
    "options": [
      "Pasal 23A UUD 1945",
      "Pasal 1 UU PPh",
      "Pasal 17 UU KUP",
      "Pasal 4 UU PPN"
    ],
    "answer": 0,
    "explanation": "Pasal 23A UUD 1945 menjadi dasar konstitusional pemungutan pajak yang bersifat memaksa."
  },
  {
    "kind": "multi-select",
    "topic": "TM1 · Unsur Pajak",
    "skill": "Mengidentifikasi unsur pajak",
    "difficulty": "medium",
    "q": "Pilih semua unsur yang merupakan karakter dasar pajak.",
    "options": [
      "Dipungut berdasarkan undang-undang",
      "Memberikan kontraprestasi langsung yang setara kepada setiap pembayar",
      "Dapat dipaksakan",
      "Digunakan untuk membiayai keperluan negara",
      "Hanya dapat dipungut perusahaan swasta"
    ],
    "answers": [
      0,
      2,
      3
    ],
    "explanation": "Pajak berlandaskan undang-undang, dapat dipaksakan, tidak memberi kontraprestasi langsung, dan digunakan untuk keperluan negara."
  },
  {
    "kind": "multi-select",
    "topic": "TM1 · Hukum Pajak Formal",
    "skill": "Mengidentifikasi ruang lingkup hukum formal",
    "difficulty": "medium",
    "q": "Pilih semua hal yang terutama diatur oleh hukum pajak formal.",
    "options": [
      "Tata cara penyampaian SPT",
      "Prosedur keberatan dan banding",
      "Tarif PPh orang pribadi",
      "Pemeriksaan dan penagihan pajak",
      "Penentuan objek PPN"
    ],
    "answers": [
      0,
      1,
      3
    ],
    "explanation": "Hukum formal mengatur prosedur pelaksanaan hak dan kewajiban, termasuk SPT, pemeriksaan, penagihan, dan sengketa."
  },
  {
    "kind": "account-match",
    "topic": "TM1 · Fungsi Pajak",
    "skill": "Memadankan fungsi pajak dengan contoh",
    "difficulty": "medium",
    "q": "Pasangkan fungsi pajak dengan contoh penerapannya.",
    "instruction": "Pilih fungsi yang paling tepat.",
    "choices": [
      "Budgetair",
      "Alokasi",
      "Distribusi",
      "Stabilisasi"
    ],
    "pairs": [
      {
        "prompt": "Penerimaan pajak menjadi sumber utama pembiayaan APBN",
        "answer": "Budgetair"
      },
      {
        "prompt": "Pajak membiayai jalan, pertahanan, dan pendidikan publik",
        "answer": "Alokasi"
      },
      {
        "prompt": "Pajak progresif membiayai program bantuan sosial",
        "answer": "Distribusi"
      },
      {
        "prompt": "Tarif atau belanja disesuaikan untuk meredam resesi atau inflasi",
        "answer": "Stabilisasi"
      }
    ],
    "explanation": "Keempat fungsi memiliki fokus berbeda: penerimaan, penyediaan barang publik, pemerataan, dan stabilisasi ekonomi."
  },
  {
    "topic": "TM2 · Asas Adam Smith",
    "skill": "Mengenali asas certainty",
    "difficulty": "basic",
    "q": "Asas Adam Smith yang menuntut kepastian mengenai subjek, objek, tarif, dan waktu pembayaran adalah...",
    "options": [
      "Equality",
      "Certainty",
      "Convenience of Payment",
      "Efficiency"
    ],
    "answer": 1,
    "explanation": "Certainty menuntut aturan pemungutan yang jelas agar tidak terjadi kesewenang-wenangan."
  },
  {
    "topic": "TM2 · Teori Pemungutan",
    "skill": "Menghubungkan teori daya pikul dengan PTKP",
    "difficulty": "basic",
    "q": "PTKP paling tepat dipahami sebagai penerapan teori...",
    "options": [
      "Asuransi",
      "Kepentingan",
      "Daya pikul",
      "Bakti"
    ],
    "answer": 2,
    "explanation": "Teori daya pikul menyesuaikan beban pajak dengan kemampuan ekonomis wajib pajak."
  },
  {
    "topic": "TM2 · Sistem Pemungutan",
    "skill": "Membedakan sistem pemungutan",
    "difficulty": "basic",
    "q": "Perusahaan memotong PPh Pasal 21 dari gaji pegawai. Mekanisme ini merupakan...",
    "options": [
      "Official assessment",
      "Self assessment",
      "Withholding system",
      "Stelsel fiktif"
    ],
    "answer": 2,
    "explanation": "Withholding system melibatkan pihak ketiga yang memotong atau memungut pajak."
  },
  {
    "topic": "TM2 · Stelsel Pajak",
    "skill": "Membedakan stelsel nyata dan fiktif",
    "difficulty": "medium",
    "q": "Benar atau salah: stelsel nyata menghitung pajak berdasarkan penghasilan yang benar-benar terjadi.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answer": 0,
    "explanation": "Benar. Stelsel nyata menggunakan keadaan penghasilan yang benar-benar terjadi."
  },
  {
    "topic": "TM2 · Jenis Tarif",
    "skill": "Mengidentifikasi tarif progresif",
    "difficulty": "medium",
    "q": "Tarif pajak disebut progresif apabila...",
    "options": [
      "Persentase tarif menurun ketika dasar pengenaan meningkat",
      "Persentase tarif tetap untuk semua dasar pengenaan",
      "Persentase tarif meningkat ketika dasar pengenaan meningkat",
      "Jumlah pajak selalu sama tanpa melihat dasar pengenaan"
    ],
    "answer": 2,
    "explanation": "Dalam tarif progresif, persentase tarif meningkat seiring kenaikan dasar pengenaan pajak."
  },
  {
    "kind": "multi-select",
    "topic": "TM2 · Asas Adam Smith",
    "skill": "Mengidentifikasi four canons",
    "difficulty": "basic",
    "q": "Pilih semua asas pemungutan pajak menurut Adam Smith.",
    "options": [
      "Equality",
      "Certainty",
      "Convenience of Payment",
      "Efficiency",
      "Nationality"
    ],
    "answers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Empat asas Adam Smith adalah equality, certainty, convenience of payment, dan efficiency."
  },
  {
    "kind": "multi-select",
    "topic": "TM2 · Asas Pengenaan",
    "skill": "Membedakan asas domisili dan sumber",
    "difficulty": "medium",
    "q": "Pilih semua pernyataan yang benar mengenai asas pengenaan pajak.",
    "options": [
      "Asas domisili mengaitkan pemajakan dengan tempat tinggal atau kedudukan",
      "Asas sumber mengaitkan pemajakan dengan tempat penghasilan berasal",
      "Asas sumber hanya berlaku bagi warga negara Indonesia",
      "Kewarganegaraan bukan satu-satunya penentu status subjek pajak dalam PPh Indonesia"
    ],
    "answers": [
      0,
      1,
      3
    ],
    "explanation": "Domisili dan sumber merupakan nexus utama. Status pajak tidak ditentukan oleh kewarganegaraan semata."
  },
  {
    "kind": "account-match",
    "topic": "TM2 · Sistem Pemungutan",
    "skill": "Memadankan sistem dengan pelaku utama",
    "difficulty": "medium",
    "q": "Pasangkan sistem pemungutan dengan pihak yang menentukan atau memotong pajak.",
    "instruction": "Pilih pasangan yang sesuai.",
    "choices": [
      "Fiskus menentukan pajak",
      "Wajib pajak menghitung sendiri",
      "Pihak ketiga memotong atau memungut"
    ],
    "pairs": [
      {
        "prompt": "Official assessment",
        "answer": "Fiskus menentukan pajak"
      },
      {
        "prompt": "Self assessment",
        "answer": "Wajib pajak menghitung sendiri"
      },
      {
        "prompt": "Withholding system",
        "answer": "Pihak ketiga memotong atau memungut"
      }
    ],
    "explanation": "Perbedaan utama ketiga sistem terletak pada pihak yang aktif menentukan atau memungut pajak."
  },
  {
    "kind": "account-match",
    "topic": "TM2 · Stelsel Pajak",
    "skill": "Memadankan stelsel dengan dasar penghitungan",
    "difficulty": "medium",
    "q": "Pasangkan setiap stelsel dengan karakter utamanya.",
    "instruction": "Gunakan karakter yang paling tepat.",
    "choices": [
      "Penghasilan sebenarnya pada akhir periode",
      "Perkiraan atau anggapan pada awal periode",
      "Perkiraan awal lalu disesuaikan dengan keadaan nyata"
    ],
    "pairs": [
      {
        "prompt": "Stelsel nyata",
        "answer": "Penghasilan sebenarnya pada akhir periode"
      },
      {
        "prompt": "Stelsel fiktif",
        "answer": "Perkiraan atau anggapan pada awal periode"
      },
      {
        "prompt": "Stelsel campuran",
        "answer": "Perkiraan awal lalu disesuaikan dengan keadaan nyata"
      }
    ],
    "explanation": "Stelsel campuran menggabungkan kemudahan pemungutan awal dengan koreksi berdasarkan keadaan nyata."
  },
  {
    "kind": "report-fill",
    "topic": "TM2 · Tarif PPh OP",
    "skill": "Menghitung PPh orang pribadi progresif",
    "difficulty": "advanced",
    "q": "Seorang WP memiliki Penghasilan Kena Pajak setahun sebesar Rp100.000.000. Hitung PPh terutang berdasarkan lapisan 5% sampai Rp60 juta dan 15% untuk bagian di atas Rp60 juta sampai Rp250 juta.",
    "instruction": "Isi angka tanpa pemisah atau gunakan format rupiah biasa.",
    "data": [
      "PKP Rp100.000.000",
      "Lapisan pertama Rp60.000.000 × 5%",
      "Sisa Rp40.000.000 × 15%"
    ],
    "blanks": [
      {
        "id": "pph",
        "label": "PPh terutang",
        "answer": 9000000,
        "prefix": "Rp",
        "tolerance": 0
      }
    ],
    "explanation": "PPh = 5% × Rp60 juta + 15% × Rp40 juta = Rp3 juta + Rp6 juta = Rp9 juta."
  },
  {
    "topic": "TM3 · Pajak Internasional",
    "skill": "Memahami tujuan P3B",
    "difficulty": "basic",
    "q": "Tujuan utama Persetujuan Penghindaran Pajak Berganda atau P3B adalah...",
    "options": [
      "Menghapus seluruh pajak atas transaksi lintas negara",
      "Mengalokasikan hak pemajakan dan mencegah pajak berganda",
      "Menetapkan tarif PPN domestik",
      "Menggantikan seluruh undang-undang pajak nasional"
    ],
    "answer": 1,
    "explanation": "P3B membagi hak pemajakan antaryurisdiksi serta menyediakan mekanisme penghindaran pajak berganda."
  },
  {
    "topic": "TM3 · Pajak Berganda",
    "skill": "Membedakan pajak berganda yuridis",
    "difficulty": "medium",
    "q": "Satu orang yang sama dikenai pajak oleh dua negara atas penghasilan yang sama mengalami pajak berganda...",
    "options": [
      "Ekonomis",
      "Yuridis",
      "Domestik",
      "Final"
    ],
    "answer": 1,
    "explanation": "Pajak berganda yuridis terjadi pada subjek yang sama atas objek dan periode yang sama oleh dua yurisdiksi."
  },
  {
    "topic": "TM3 · Pajak Berganda",
    "skill": "Membedakan pajak berganda ekonomis",
    "difficulty": "medium",
    "q": "Laba perusahaan dikenai PPh Badan, lalu dividen yang dibagikan dapat dikenai pajak pada pemegang saham. Situasi ini menggambarkan pajak berganda...",
    "options": [
      "Yuridis",
      "Ekonomis",
      "Formal",
      "Teritorial"
    ],
    "answer": 1,
    "explanation": "Pajak berganda ekonomis mengenai penghasilan ekonomis yang sama pada dua subjek berbeda."
  },
  {
    "topic": "TM3 · Metode Penghindaran",
    "skill": "Mengenali metode kredit pajak",
    "difficulty": "medium",
    "q": "Metode penghindaran pajak berganda yang mengurangkan pajak luar negeri dari pajak yang terutang di negara domisili disebut...",
    "options": [
      "Exemption method",
      "Credit method",
      "Gross-up method",
      "Withholding method"
    ],
    "answer": 1,
    "explanation": "Credit method memberikan kredit atas pajak yang telah dibayar di luar negeri sesuai batasan yang berlaku."
  },
  {
    "topic": "TM3 · SPDN dan SPLN",
    "skill": "Menerapkan kriteria status subjek",
    "difficulty": "medium",
    "q": "Benar atau salah: kewarganegaraan merupakan satu-satunya penentu apakah orang pribadi berstatus subjek pajak dalam negeri.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answer": 1,
    "explanation": "Salah. Status ditentukan antara lain oleh tempat tinggal, keberadaan, dan niat bertempat tinggal, bukan kewarganegaraan semata."
  },
  {
    "topic": "TM3 · Asas Sumber",
    "skill": "Menerapkan asas sumber",
    "difficulty": "basic",
    "q": "Indonesia memajaki penghasilan yang bersumber dari Indonesia milik subjek pajak luar negeri. Prinsip ini terutama mencerminkan asas...",
    "options": [
      "Domisili",
      "Sumber",
      "Kebangsaan",
      "Convenience"
    ],
    "answer": 1,
    "explanation": "Asas sumber memberi hak pemajakan kepada negara tempat penghasilan berasal."
  },
  {
    "topic": "TM3 · Organisasi Internasional",
    "skill": "Mengenali peran OECD",
    "difficulty": "basic",
    "q": "Dalam perpajakan internasional, OECD banyak berperan melalui...",
    "options": [
      "Penerbitan Model Tax Convention dan pedoman perpajakan internasional",
      "Penetapan APBN Indonesia",
      "Penerbitan NPWP bagi warga asing",
      "Penetapan tarif pajak daerah Indonesia"
    ],
    "answer": 0,
    "explanation": "OECD mengembangkan model konvensi, pedoman transfer pricing, dan berbagai standar kerja sama pajak internasional."
  },
  {
    "kind": "multi-select",
    "topic": "TM3 · P3B",
    "skill": "Mengidentifikasi fungsi P3B",
    "difficulty": "medium",
    "q": "Pilih semua fungsi yang lazim dijalankan P3B.",
    "options": [
      "Mengalokasikan hak pemajakan antarnegara",
      "Mengurangi atau membatasi tarif pajak tertentu sesuai perjanjian",
      "Menyediakan mekanisme penyelesaian sengketa antaryurisdiksi",
      "Menghapus kewajiban pajak domestik untuk semua transaksi",
      "Mendukung pertukaran informasi"
    ],
    "answers": [
      0,
      1,
      2,
      4
    ],
    "explanation": "P3B tidak menghapus seluruh pajak, tetapi mengatur pembagian hak, pembatasan tertentu, kerja sama, dan penyelesaian masalah pajak berganda."
  },
  {
    "kind": "account-match",
    "topic": "TM3 · Metode Penghindaran",
    "skill": "Memadankan metode dengan mekanisme",
    "difficulty": "medium",
    "q": "Pasangkan metode penghindaran pajak berganda dengan cara kerjanya.",
    "instruction": "Pilih mekanisme yang tepat.",
    "choices": [
      "Penghasilan luar negeri dikecualikan dari dasar pajak negara domisili",
      "Pajak luar negeri dikreditkan terhadap pajak negara domisili"
    ],
    "pairs": [
      {
        "prompt": "Exemption method",
        "answer": "Penghasilan luar negeri dikecualikan dari dasar pajak negara domisili"
      },
      {
        "prompt": "Credit method",
        "answer": "Pajak luar negeri dikreditkan terhadap pajak negara domisili"
      }
    ],
    "explanation": "Exemption mengeluarkan penghasilan dari basis pajak, sedangkan credit mengurangkan pajak luar negeri dari kewajiban domestik."
  },
  {
    "kind": "account-match",
    "topic": "TM3 · Jenis Pajak Berganda",
    "skill": "Memadankan jenis pajak berganda dengan contoh",
    "difficulty": "medium",
    "q": "Pasangkan jenis pajak berganda dengan contoh kasusnya.",
    "instruction": "Pilih jenis yang paling tepat.",
    "choices": [
      "Pajak berganda yuridis",
      "Pajak berganda ekonomis"
    ],
    "pairs": [
      {
        "prompt": "WP yang sama dipajaki dua negara atas penghasilan yang sama",
        "answer": "Pajak berganda yuridis"
      },
      {
        "prompt": "Laba perusahaan dipajaki pada badan dan kembali pada pemegang saham",
        "answer": "Pajak berganda ekonomis"
      }
    ],
    "explanation": "Yuridis menyangkut subjek yang sama, sedangkan ekonomis menyangkut penghasilan ekonomis yang sama pada subjek berbeda."
  },
  {
    "topic": "TM4 · KUP",
    "skill": "Memahami fungsi UU KUP",
    "difficulty": "basic",
    "q": "UU KUP terutama berfungsi sebagai...",
    "options": [
      "Hukum pajak formal yang mengatur tata cara pelaksanaan hak dan kewajiban",
      "Undang-undang yang hanya menentukan tarif PPh",
      "Peraturan khusus pajak daerah",
      "Perjanjian pajak internasional"
    ],
    "answer": 0,
    "explanation": "UU KUP terutama mengatur prosedur administrasi, hak, kewajiban, penetapan, pemeriksaan, penagihan, dan penegakan hukum."
  },
  {
    "topic": "TM4 · NPWP",
    "skill": "Memahami fungsi NPWP",
    "difficulty": "basic",
    "q": "Fungsi utama NPWP adalah...",
    "options": [
      "Sebagai identitas wajib pajak dalam administrasi perpajakan",
      "Sebagai izin usaha seluruh perusahaan",
      "Sebagai bukti pasti bahwa seluruh pajak telah lunas",
      "Sebagai pengganti SPT Tahunan"
    ],
    "answer": 0,
    "explanation": "NPWP merupakan identitas administrasi perpajakan, bukan izin usaha atau bukti pelunasan semua pajak."
  },
  {
    "topic": "TM4 · PKP",
    "skill": "Menerapkan batas pengusaha kecil",
    "difficulty": "medium",
    "q": "Pengusaha dengan omzet setahun melebihi Rp4,8 miliar pada prinsipnya wajib...",
    "options": [
      "Menghapus NPWP",
      "Melaporkan usaha untuk dikukuhkan sebagai PKP sesuai ketentuan",
      "Berhenti memungut PPN",
      "Menggunakan pencatatan sederhana tanpa syarat"
    ],
    "answer": 1,
    "explanation": "Batas pengusaha kecil PPN adalah Rp4,8 miliar. Pengusaha yang melampaui batas wajib melaporkan usaha untuk pengukuhan PKP sesuai jadwal PMK 164/2023."
  },
  {
    "topic": "TM4 · Subjek Pajak",
    "skill": "Membedakan subjek dan wajib pajak",
    "difficulty": "medium",
    "q": "Benar atau salah: setiap orang yang memiliki NPWP otomatis berstatus Pengusaha Kena Pajak.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answer": 1,
    "explanation": "Salah. NPWP dan status PKP berbeda; pemilik NPWP tidak otomatis dikukuhkan sebagai PKP."
  },
  {
    "topic": "TM4 · PPh",
    "skill": "Mengidentifikasi bukan objek PPh",
    "difficulty": "medium",
    "q": "Di antara pilihan berikut, yang pada prinsipnya termasuk bukan objek PPh adalah...",
    "options": [
      "Gaji bulanan",
      "Penghasilan usaha",
      "Warisan",
      "Honorarium"
    ],
    "answer": 2,
    "explanation": "Warisan termasuk bukan objek PPh. Perlakuan bantuan, hibah, dividen, natura, dan beasiswa bergantung pada syarat ketentuan masing-masing."
  },
  {
    "kind": "multi-select",
    "topic": "TM4 · Administrasi Pajak",
    "skill": "Mengidentifikasi pernyataan NPWP dan PKP",
    "difficulty": "medium",
    "q": "Pilih semua pernyataan yang benar.",
    "options": [
      "NPWP merupakan identitas administrasi perpajakan",
      "Pengusaha kecil dapat memilih menjadi PKP meskipun omzet belum melewati Rp4,8 miliar",
      "Semua pemilik NPWP otomatis merupakan PKP",
      "PKP berkewajiban menjalankan administrasi PPN sesuai ketentuan",
      "Kepemilikan NPWP saja selalu membuktikan adanya pajak terutang"
    ],
    "answers": [
      0,
      1,
      3
    ],
    "explanation": "NPWP dan PKP adalah status berbeda. Pengusaha kecil dapat memilih dikukuhkan, sedangkan pemilik NPWP tidak otomatis PKP atau selalu mempunyai pajak terutang."
  },
  {
    "kind": "account-match",
    "topic": "TM4 · Produk Administrasi",
    "skill": "Memadankan istilah dengan fungsi",
    "difficulty": "medium",
    "q": "Pasangkan istilah administrasi dengan fungsi utamanya.",
    "instruction": "Pilih fungsi yang tepat.",
    "choices": [
      "Identitas wajib pajak",
      "Status pengusaha yang memungut dan melaporkan PPN",
      "Surat untuk melaporkan penghitungan atau pembayaran pajak"
    ],
    "pairs": [
      {
        "prompt": "NPWP",
        "answer": "Identitas wajib pajak"
      },
      {
        "prompt": "PKP",
        "answer": "Status pengusaha yang memungut dan melaporkan PPN"
      },
      {
        "prompt": "SPT",
        "answer": "Surat untuk melaporkan penghitungan atau pembayaran pajak"
      }
    ],
    "explanation": "NPWP, PKP, dan SPT memiliki fungsi administrasi yang berbeda dan tidak dapat dipertukarkan."
  },
  {
    "kind": "report-fill",
    "topic": "TM4 · PPh OP",
    "skill": "Menghitung PKP berdasarkan PTKP",
    "difficulty": "medium",
    "q": "WP orang pribadi berstatus K/1 memiliki penghasilan neto setahun Rp120.000.000. Gunakan PTKP Rp54.000.000 untuk diri sendiri, tambahan kawin Rp4.500.000, dan satu tanggungan Rp4.500.000. Hitung Penghasilan Kena Pajak sebelum pembulatan fiskal.",
    "instruction": "Isi nilai PTKP dan PKP.",
    "data": [
      "Penghasilan neto Rp120.000.000",
      "Status K/1",
      "PTKP K/1 = Rp54.000.000 + Rp4.500.000 + Rp4.500.000"
    ],
    "blanks": [
      {
        "id": "ptkp",
        "label": "PTKP K/1",
        "answer": 63000000,
        "prefix": "Rp"
      },
      {
        "id": "pkp",
        "label": "Penghasilan Kena Pajak",
        "answer": 57000000,
        "prefix": "Rp"
      }
    ],
    "explanation": "PTKP K/1 = Rp63 juta. PKP = Rp120 juta − Rp63 juta = Rp57 juta."
  },
  {
    "kind": "report-fill",
    "topic": "TM4 · PPN",
    "skill": "Menghitung PPN barang nonmewah",
    "difficulty": "medium",
    "q": "Harga jual BKP nonmewah Rp120.000.000. Gunakan mekanisme 12% × 11/12 × harga jual. Hitung PPN terutang.",
    "instruction": "Isi hasil akhir PPN.",
    "data": [
      "Harga jual Rp120.000.000",
      "DPP nilai lain 11/12 dari harga jual",
      "Tarif PPN 12%"
    ],
    "blanks": [
      {
        "id": "ppn",
        "label": "PPN terutang",
        "answer": 13200000,
        "prefix": "Rp"
      }
    ],
    "explanation": "12% × 11/12 × Rp120 juta = 11% × Rp120 juta = Rp13,2 juta."
  },
  {
    "kind": "report-fill",
    "topic": "TM4 · PPN",
    "skill": "Menghitung dan membedakan PPN nonmewah dan mewah",
    "difficulty": "medium",
    "q": "Dua barang masing-masing berharga Rp100.000.000. Barang A merupakan BKP nonmewah dengan DPP 11/12, sedangkan Barang B termasuk barang mewah yang dikenai tarif penuh 12%. Hitung PPN masing-masing.",
    "instruction": "Isi PPN Barang A dan Barang B.",
    "data": [
      "Barang A: 12% × 11/12 × Rp100.000.000",
      "Barang B: 12% × Rp100.000.000"
    ],
    "blanks": [
      {
        "id": "a",
        "label": "PPN Barang A",
        "answer": 11000000,
        "prefix": "Rp"
      },
      {
        "id": "b",
        "label": "PPN Barang B",
        "answer": 12000000,
        "prefix": "Rp"
      }
    ],
    "explanation": "Barang nonmewah efektif 11%, sedangkan barang mewah dalam skenario dikenai tarif penuh 12%."
  },
  {
    "topic": "TM5 · SPT",
    "skill": "Memahami fungsi SPT",
    "difficulty": "basic",
    "q": "SPT digunakan wajib pajak untuk melaporkan...",
    "options": [
      "Penghitungan atau pembayaran pajak serta data perpajakan terkait",
      "Hanya permohonan izin usaha",
      "Hanya perubahan alamat rumah",
      "Putusan banding Pengadilan Pajak"
    ],
    "answer": 0,
    "explanation": "SPT memuat penghitungan/pembayaran pajak, objek dan bukan objek, serta harta dan kewajiban sesuai jenis SPT."
  },
  {
    "topic": "TM5 · Batas Lapor",
    "skill": "Mengenali batas SPT Tahunan",
    "difficulty": "basic",
    "q": "Batas normal penyampaian SPT Tahunan WP Badan dengan tahun pajak kalender adalah...",
    "options": [
      "31 Januari",
      "28 Februari",
      "31 Maret",
      "30 April"
    ],
    "answer": 3,
    "explanation": "SPT Tahunan badan disampaikan paling lama empat bulan setelah akhir tahun pajak, yaitu 30 April untuk tahun kalender."
  },
  {
    "topic": "TM5 · Batas Lapor",
    "skill": "Mengenali batas SPT Tahunan OP",
    "difficulty": "basic",
    "q": "Batas normal penyampaian SPT Tahunan WP Orang Pribadi dengan tahun pajak kalender adalah...",
    "options": [
      "31 Maret",
      "30 April",
      "31 Mei",
      "30 Juni"
    ],
    "answer": 0,
    "explanation": "SPT Tahunan orang pribadi disampaikan paling lama tiga bulan setelah akhir tahun pajak, yaitu 31 Maret."
  },
  {
    "topic": "TM5 · Pembetulan SPT",
    "skill": "Membedakan pembetulan dan pengungkapan",
    "difficulty": "medium",
    "q": "Benar atau salah: pembetulan SPT sukarela dan pengungkapan ketidakbenaran saat pemeriksaan merupakan mekanisme yang sama.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answer": 1,
    "explanation": "Salah. Keduanya berbeda dari sisi waktu, prosedur, dan konsekuensi sanksinya."
  },
  {
    "topic": "TM5 · Perpanjangan SPT",
    "skill": "Memahami perpanjangan pelaporan",
    "difficulty": "medium",
    "q": "Pemberitahuan perpanjangan penyampaian SPT Tahunan dapat memberikan tambahan waktu paling lama...",
    "options": [
      "14 hari",
      "1 bulan",
      "2 bulan",
      "6 bulan"
    ],
    "answer": 2,
    "explanation": "Perpanjangan penyampaian SPT Tahunan dapat diberikan paling lama dua bulan dengan memenuhi prosedur yang ditentukan."
  },
  {
    "topic": "TM5 · Formulir SPT",
    "skill": "Mengenali formulir SPT badan",
    "difficulty": "basic",
    "q": "Formulir SPT Tahunan PPh untuk wajib pajak badan adalah...",
    "options": [
      "1770",
      "1770 S",
      "1770 SS",
      "1771"
    ],
    "answer": 3,
    "explanation": "SPT 1771 digunakan untuk pelaporan tahunan PPh badan."
  },
  {
    "kind": "multi-select",
    "topic": "TM5 · Isi SPT",
    "skill": "Mengidentifikasi informasi dalam SPT",
    "difficulty": "medium",
    "q": "Pilih semua informasi yang dapat dilaporkan dalam SPT sesuai jenisnya.",
    "options": [
      "Penghitungan dan pembayaran pajak",
      "Objek dan bukan objek pajak",
      "Harta dan kewajiban",
      "Putusan pidana umum yang tidak terkait pajak",
      "Pemotongan atau pemungutan pajak"
    ],
    "answers": [
      0,
      1,
      2,
      4
    ],
    "explanation": "SPT memuat data perpajakan yang relevan, termasuk penghitungan, pembayaran, objek, bukan objek, harta, kewajiban, serta pemotongan/pemungutan."
  },
  {
    "kind": "account-match",
    "topic": "TM5 · Jenis SPT",
    "skill": "Memadankan jenis SPT dengan periode",
    "difficulty": "basic",
    "q": "Pasangkan jenis SPT dengan fungsi periodiknya.",
    "instruction": "Pilih periode pelaporan yang tepat.",
    "choices": [
      "Pelaporan untuk satu Masa Pajak",
      "Pelaporan untuk satu Tahun Pajak atau Bagian Tahun Pajak"
    ],
    "pairs": [
      {
        "prompt": "SPT Masa",
        "answer": "Pelaporan untuk satu Masa Pajak"
      },
      {
        "prompt": "SPT Tahunan",
        "answer": "Pelaporan untuk satu Tahun Pajak atau Bagian Tahun Pajak"
      }
    ],
    "explanation": "SPT Masa bersifat periodik per masa, sedangkan SPT Tahunan merangkum satu tahun pajak."
  },
  {
    "kind": "report-fill",
    "topic": "TM5 · Sanksi Bunga",
    "skill": "Menghitung bunga berdasarkan tarif yang diberikan",
    "difficulty": "medium",
    "q": "Hasil penelitian menunjukkan kurang bayar Rp1.000.000. Tarif bunga yang berlaku dalam soal adalah 0,95% per bulan selama 2 bulan. Hitung bunga dan total tagihan.",
    "instruction": "Gunakan tarif yang diberikan dalam soal, bukan tarif lama 2% flat.",
    "data": [
      "Pokok kurang bayar Rp1.000.000",
      "Tarif 0,95% per bulan",
      "Masa 2 bulan"
    ],
    "blanks": [
      {
        "id": "bunga",
        "label": "Bunga",
        "answer": 19000,
        "prefix": "Rp"
      },
      {
        "id": "total",
        "label": "Total tagihan",
        "answer": 1019000,
        "prefix": "Rp"
      }
    ],
    "explanation": "Bunga = 0,95% × Rp1.000.000 × 2 = Rp19.000. Total = Rp1.019.000."
  },
  {
    "kind": "report-fill",
    "topic": "TM5 · PPh Final UMKM",
    "skill": "Menghitung PPh Final omzet tertentu",
    "difficulty": "advanced",
    "q": "WP orang pribadi UMKM memiliki omzet setahun Rp800.000.000 dan memenuhi syarat skema PPh Final 0,5%. Bagian omzet sampai Rp500.000.000 tidak dikenai PPh Final. Hitung dasar omzet yang dikenai dan PPh Final setahun.",
    "instruction": "Isi dua angka.",
    "data": [
      "Omzet setahun Rp800.000.000",
      "Bagian tidak dikenai Rp500.000.000",
      "Tarif 0,5%"
    ],
    "blanks": [
      {
        "id": "dasar",
        "label": "Omzet yang dikenai",
        "answer": 300000000,
        "prefix": "Rp"
      },
      {
        "id": "pph",
        "label": "PPh Final",
        "answer": 1500000,
        "prefix": "Rp"
      }
    ],
    "explanation": "Dasar yang dikenai = Rp800 juta − Rp500 juta = Rp300 juta. PPh Final = 0,5% × Rp300 juta = Rp1,5 juta."
  },
  {
    "topic": "TM6 · Kepatuhan Pajak",
    "skill": "Membedakan kepatuhan formal dan material",
    "difficulty": "medium",
    "q": "Wajib pajak menyampaikan SPT tepat waktu, tetapi sengaja mengurangi penghasilan yang dilaporkan. Kondisi ini menunjukkan...",
    "options": [
      "Kepatuhan formal dan material terpenuhi",
      "Kepatuhan formal terpenuhi, tetapi kepatuhan material tidak terpenuhi",
      "Kepatuhan material terpenuhi, tetapi formal tidak terpenuhi",
      "Tidak ada kaitan dengan kepatuhan pajak"
    ],
    "answer": 1,
    "explanation": "Ketepatan waktu merupakan aspek formal, sedangkan kebenaran isi dan jumlah pajak merupakan aspek material."
  },
  {
    "topic": "TM6 · Coretax",
    "skill": "Memahami tujuan digitalisasi",
    "difficulty": "basic",
    "q": "Benar atau salah: implementasi Coretax menghapus kewajiban wajib pajak untuk menghitung, membayar, dan melaporkan pajak.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answer": 1,
    "explanation": "Salah. Coretax mengintegrasikan administrasi, bukan menghapus kewajiban perpajakan."
  },
  {
    "topic": "TM6 · Tax Ratio",
    "skill": "Memahami makna tax ratio",
    "difficulty": "basic",
    "q": "Tax ratio menunjukkan perbandingan antara...",
    "options": [
      "Belanja negara dan jumlah penduduk",
      "Penerimaan pajak dan PDB",
      "Utang pemerintah dan ekspor",
      "PPh dan PPN saja"
    ],
    "answer": 1,
    "explanation": "Tax ratio = total penerimaan pajak dibagi PDB, dengan metodologi yang harus konsisten saat membandingkan negara."
  },
  {
    "topic": "TM6 · Penelitian",
    "skill": "Membedakan penelitian dan pemeriksaan",
    "difficulty": "medium",
    "q": "Penelitian SPT terutama menilai...",
    "options": [
      "Kelengkapan, kebenaran penulisan, dan perhitungan SPT",
      "Seluruh pembukuan secara mendalam dalam setiap kasus",
      "Bukti pidana untuk menemukan tersangka",
      "Putusan sengketa pada Pengadilan Pajak"
    ],
    "answer": 0,
    "explanation": "Penelitian bersifat administratif dan berfokus pada kelengkapan serta kebenaran formal/tulis-hitung SPT."
  },
  {
    "topic": "TM6 · Pemeriksaan",
    "skill": "Mengenali tipe pemeriksaan PMK 15/2025",
    "difficulty": "medium",
    "q": "Urutan jangka waktu pengujian untuk Pemeriksaan Lengkap, Terfokus, dan Spesifik adalah...",
    "options": [
      "5 bulan, 3 bulan, 1 bulan",
      "6 bulan, 4 bulan, 2 bulan",
      "12 bulan, 6 bulan, 3 bulan",
      "3 bulan, 2 bulan, 10 hari"
    ],
    "answer": 0,
    "explanation": "PMK 15/2025 menetapkan pengujian Lengkap 5 bulan, Terfokus 3 bulan, dan Spesifik 1 bulan, dengan ketentuan khusus data konkret tertentu."
  },
  {
    "topic": "TM6 · Penyidikan",
    "skill": "Membedakan Pasal 44A dan 44B",
    "difficulty": "advanced",
    "q": "Pernyataan yang tepat mengenai penghentian penyidikan demi penerimaan negara berdasarkan Pasal 44B adalah...",
    "options": [
      "Dilakukan otomatis oleh WP tanpa pelunasan",
      "Dilakukan Jaksa Agung atas permintaan Menteri Keuangan setelah syarat pelunasan dipenuhi",
      "Dilakukan Pengadilan Pajak pada tahap keberatan",
      "Hanya berlaku sebelum pemeriksaan dimulai"
    ],
    "answer": 1,
    "explanation": "Pasal 44B melibatkan Jaksa Agung atas permintaan Menteri Keuangan dan mensyaratkan pelunasan kerugian serta denda sesuai jenis perbuatan."
  },
  {
    "kind": "multi-select",
    "topic": "TM6 · Pemeriksaan",
    "skill": "Mengidentifikasi tahapan pemeriksaan",
    "difficulty": "medium",
    "q": "Pilih semua tahapan yang termasuk dalam proses pemeriksaan pajak.",
    "options": [
      "Penyampaian pemberitahuan pemeriksaan",
      "Pengumpulan dan pengujian data",
      "Penyampaian SPHP",
      "Pembahasan akhir hasil pemeriksaan",
      "Putusan kasasi Pengadilan Pajak"
    ],
    "answers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Pemeriksaan meliputi pemberitahuan, pengujian, SPHP, pembahasan akhir, dan LHP. Putusan kasasi bukan tahap pemeriksaan pajak."
  },
  {
    "kind": "multi-select",
    "topic": "TM6 · Produk Pemeriksaan",
    "skill": "Membedakan produk ketetapan",
    "difficulty": "medium",
    "q": "Pilih semua yang termasuk jenis Surat Ketetapan Pajak.",
    "options": [
      "SKPKB",
      "SKPKBT",
      "SKPLB",
      "SKPN",
      "SP2DK"
    ],
    "answers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "SKP mencakup SKPKB, SKPKBT, SKPLB, dan SKPN. SP2DK bukan surat ketetapan pajak."
  },
  {
    "kind": "account-match",
    "topic": "TM6 · Jenis Pemeriksaan",
    "skill": "Memadankan tipe pemeriksaan dan cakupan",
    "difficulty": "medium",
    "q": "Pasangkan tipe pemeriksaan dengan cakupan utamanya.",
    "instruction": "Pilih deskripsi yang sesuai.",
    "choices": [
      "Seluruh pos secara mendalam",
      "Satu atau beberapa pos secara mendalam",
      "Pos, data, atau kewajiban tertentu secara sederhana"
    ],
    "pairs": [
      {
        "prompt": "Pemeriksaan Lengkap",
        "answer": "Seluruh pos secara mendalam"
      },
      {
        "prompt": "Pemeriksaan Terfokus",
        "answer": "Satu atau beberapa pos secara mendalam"
      },
      {
        "prompt": "Pemeriksaan Spesifik",
        "answer": "Pos, data, atau kewajiban tertentu secara sederhana"
      }
    ],
    "explanation": "PMK 15/2025 membedakan tipe pemeriksaan berdasarkan kedalaman dan cakupan pengujian."
  },
  {
    "kind": "report-fill",
    "topic": "TM6 · Tax Ratio",
    "skill": "Menghitung tax ratio",
    "difficulty": "medium",
    "q": "Total penerimaan pajak suatu negara Rp1.800 triliun dan PDB Rp15.000 triliun. Hitung tax ratio.",
    "instruction": "Masukkan angka persentase tanpa tanda persen atau dengan tanda persen.",
    "data": [
      "Penerimaan pajak Rp1.800 triliun",
      "PDB Rp15.000 triliun",
      "Rumus: penerimaan pajak ÷ PDB × 100%"
    ],
    "blanks": [
      {
        "id": "ratio",
        "label": "Tax ratio",
        "answer": 12,
        "suffix": "%",
        "tolerance": 0.01
      }
    ],
    "explanation": "Rp1.800 ÷ Rp15.000 × 100% = 12%."
  },
  {
    "topic": "TM7 · Pembukuan",
    "skill": "Membedakan pembukuan dan pencatatan",
    "difficulty": "basic",
    "q": "Ciri utama pembukuan dibanding pencatatan adalah...",
    "options": [
      "Hanya mencatat omzet tanpa laporan keuangan",
      "Mengumpulkan data keuangan secara teratur dan ditutup dengan neraca serta laba rugi",
      "Tidak memerlukan dokumen pendukung",
      "Hanya boleh digunakan WP orang pribadi"
    ],
    "answer": 1,
    "explanation": "Pembukuan merupakan proses akuntansi yang menghasilkan laporan keuangan, sedangkan pencatatan lebih sederhana."
  },
  {
    "topic": "TM7 · Kewajiban Pembukuan",
    "skill": "Menentukan pihak wajib pembukuan",
    "difficulty": "basic",
    "q": "Pihak yang pada prinsipnya wajib menyelenggarakan pembukuan adalah...",
    "options": [
      "Semua WP badan",
      "Hanya WP orang pribadi tanpa usaha",
      "Semua pembayar retribusi",
      "Hanya subjek pajak luar negeri tanpa BUT"
    ],
    "answer": 0,
    "explanation": "WP badan wajib pembukuan. WP orang pribadi usaha/pekerjaan bebas dapat menggunakan pencatatan jika memenuhi syarat NPPN."
  },
  {
    "topic": "TM7 · NPPN",
    "skill": "Menerapkan syarat pencatatan",
    "difficulty": "medium",
    "q": "Benar atau salah: semua wajib pajak orang pribadi boleh memilih pencatatan tanpa memenuhi syarat NPPN.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answer": 1,
    "explanation": "Salah. Pencatatan melalui NPPN hanya tersedia bagi WP orang pribadi yang memenuhi syarat dan kewajiban pemberitahuan."
  },
  {
    "topic": "TM7 · Penyimpanan Dokumen",
    "skill": "Mengenali jangka waktu penyimpanan",
    "difficulty": "basic",
    "q": "Dokumen pembukuan dan pencatatan wajib disimpan di Indonesia selama...",
    "options": [
      "2 tahun",
      "5 tahun",
      "10 tahun",
      "Selamanya"
    ],
    "answer": 2,
    "explanation": "Pasal 28 UU KUP mewajibkan penyimpanan dokumen selama 10 tahun."
  },
  {
    "topic": "TM7 · Bahasa dan Mata Uang",
    "skill": "Menerapkan ketentuan pembukuan asing",
    "difficulty": "medium",
    "q": "Pernyataan yang tepat mengenai pembukuan dalam bahasa Inggris dan USD adalah...",
    "options": [
      "Dapat digunakan semua WP tanpa prosedur",
      "Dapat digunakan WP tertentu melalui pemberitahuan atau izin sesuai ketentuan",
      "Hanya boleh menggunakan CNY",
      "Menghapus kewajiban laporan keuangan"
    ],
    "answer": 1,
    "explanation": "WP tertentu dapat menggunakan bahasa Inggris dan USD melalui prosedur yang ditentukan. Bukan kebebasan umum tanpa syarat."
  },
  {
    "topic": "TM7 · Sanksi Pembukuan",
    "skill": "Membedakan administrasi dan pidana",
    "difficulty": "advanced",
    "q": "WP sengaja menyembunyikan dan memalsukan pembukuan sehingga pajak kurang dibayar. Risiko utamanya adalah...",
    "options": [
      "Hanya teguran lisan",
      "Sanksi pidana di bidang perpajakan sesuai unsur Pasal 39",
      "Penghapusan NPWP otomatis tanpa proses",
      "Tidak ada konsekuensi jika dokumen disimpan 10 tahun"
    ],
    "answer": 1,
    "explanation": "Kesengajaan memalsukan atau menyembunyikan pembukuan dapat memenuhi unsur tindak pidana perpajakan."
  },
  {
    "kind": "multi-select",
    "topic": "TM7 · Ketentuan Pembukuan",
    "skill": "Mengidentifikasi prinsip pembukuan",
    "difficulty": "medium",
    "q": "Pilih semua prinsip penyelenggaraan pembukuan yang benar.",
    "options": [
      "Dilakukan dengan itikad baik",
      "Mencerminkan keadaan usaha sebenarnya",
      "Menggunakan huruf Latin dan angka Arab",
      "Boleh diubah sesuka hati tanpa jejak",
      "Diselenggarakan di Indonesia sesuai ketentuan"
    ],
    "answers": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Pembukuan harus teratur, beritikad baik, mencerminkan keadaan sebenarnya, dan mengikuti ketentuan bahasa, angka, mata uang, serta lokasi."
  },
  {
    "kind": "account-match",
    "topic": "TM7 · Pembukuan vs Pencatatan",
    "skill": "Memadankan karakter administrasi",
    "difficulty": "medium",
    "q": "Pasangkan karakter dengan sistem administrasi yang tepat.",
    "instruction": "Pilih Pembukuan atau Pencatatan.",
    "choices": [
      "Pembukuan",
      "Pencatatan"
    ],
    "pairs": [
      {
        "prompt": "Menghasilkan neraca dan laporan laba rugi",
        "answer": "Pembukuan"
      },
      {
        "prompt": "Berfokus pada peredaran atau penghasilan bruto secara teratur",
        "answer": "Pencatatan"
      },
      {
        "prompt": "Wajib bagi WP badan",
        "answer": "Pembukuan"
      },
      {
        "prompt": "Dapat digunakan WP OP tertentu dengan NPPN",
        "answer": "Pencatatan"
      }
    ],
    "explanation": "Pembukuan bersifat akuntansi penuh, sedangkan pencatatan lebih sederhana dan hanya tersedia bagi WP OP tertentu."
  },
  {
    "kind": "account-match",
    "topic": "TM7 · Jenis Sanksi",
    "skill": "Memadankan kondisi dan konsekuensi",
    "difficulty": "advanced",
    "q": "Pasangkan kondisi dengan jenis konsekuensi yang paling tepat.",
    "instruction": "Pilih kategori konsekuensi.",
    "choices": [
      "Administratif",
      "Pidana"
    ],
    "pairs": [
      {
        "prompt": "Pembukuan tidak lengkap karena kelalaian dan pajak dihitung berdasarkan data yang tersedia",
        "answer": "Administratif"
      },
      {
        "prompt": "Sengaja memalsukan atau menghilangkan dokumen untuk mengurangi pajak",
        "answer": "Pidana"
      }
    ],
    "explanation": "Kelalaian dapat menimbulkan koreksi dan sanksi administrasi, sedangkan kesengajaan tertentu dapat masuk ranah pidana."
  },
  {
    "kind": "report-fill",
    "topic": "TM7 · PPh OP",
    "skill": "Menghitung PPh progresif beberapa lapisan",
    "difficulty": "advanced",
    "q": "WP memiliki Penghasilan Kena Pajak Rp600.000.000. Hitung PPh terutang menggunakan tarif: 5% sampai Rp60 juta; 15% untuk Rp60–250 juta; 25% untuk Rp250–500 juta; dan 30% untuk bagian Rp500 juta–Rp5 miliar.",
    "instruction": "Isi PPh total.",
    "data": [
      "5% × Rp60.000.000 = Rp3.000.000",
      "15% × Rp190.000.000 = Rp28.500.000",
      "25% × Rp250.000.000 = Rp62.500.000",
      "30% × Rp100.000.000 = Rp30.000.000"
    ],
    "blanks": [
      {
        "id": "pph",
        "label": "PPh terutang",
        "answer": 124000000,
        "prefix": "Rp"
      }
    ],
    "explanation": "Total PPh = Rp3 juta + Rp28,5 juta + Rp62,5 juta + Rp30 juta = Rp124 juta."
  }
];
