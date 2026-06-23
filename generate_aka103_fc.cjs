const fs = require('fs');

const raw = [
  // TM 1: Profesi Akuntan & Etika Bisnis
  [1, 'Definisi', 'Profesi Akuntan', 'Pekerjaan yang membutuhkan penguasaan bidang keahlian akuntansi dan tunduk pada standar etika dan profesional yang diakui publik.'],
  [1, 'Konsep', 'Ciri Profesi', 'Memiliki pengetahuan khusus, kewajiban melayani kepentingan publik, dan mematuhi kode etik.'],
  [1, 'Definisi', 'Etika Bisnis', 'Studi tentang prinsip dan pedoman moral yang menentukan perilaku baik dan buruk dalam dunia usaha.'],
  [1, 'Konsep', 'Utilitarianism', 'Pendekatan etika yang menilai moralitas suatu tindakan berdasarkan hasil akhirnya (memberi manfaat maksimal untuk jumlah orang terbanyak).'],
  [1, 'Konsep', 'Deontology', 'Pendekatan etika yang menekankan pada kewajiban moral (duty) terlepas dari hasil akhirnya (mis. berbohong selalu salah).'],
  [1, 'Mekanisme', 'Kepentingan Publik', 'Akuntan profesional dituntut untuk bertindak demi kepentingan publik, bukan semata-mata demi kepentingan klien atau pemberi kerja.'],
  // TM 2: Prinsip Dasar Etika Akuntan
  [2, 'Standar', 'Integritas', 'Prinsip dasar yang mengharuskan akuntan untuk berterus terang, jujur, dan adil dalam semua hubungan profesional.'],
  [2, 'Standar', 'Objektivitas', 'Prinsip yang melarang akuntan membiarkan bias, benturan kepentingan, atau pengaruh tak layak untuk mengesampingkan pertimbangan profesional.'],
  [2, 'Standar', 'Kompetensi Profesional dan Kehati-hatian', 'Prinsip memelihara pengetahuan profesional agar klien menerima layanan kompeten, dan bertindak secara hati-hati sesuai standar.'],
  [2, 'Standar', 'Kerahasiaan', 'Prinsip yang melarang pengungkapan informasi klien kepada pihak ketiga tanpa izin khusus, kecuali ada kewajiban hukum.'],
  [2, 'Standar', 'Perilaku Profesional', 'Prinsip mematuhi hukum dan peraturan yang berlaku serta menghindari tindakan yang mendiskreditkan profesi.'],
  [2, 'Miskonsepsi', 'Kerahasiaan vs Kepentingan Publik', 'Kerahasiaan tidak mutlak jika pengadilan atau hukum secara tegas mewajibkan akuntan mengungkap informasi demi kepentingan publik (mis. pencucian uang).'],
  // TM 3: Ancaman & Pencegahan
  [3, 'Definisi', 'Self-interest Threat', 'Ancaman kepentingan pribadi; misalnya, auditor memiliki saham signifikan di perusahaan klien yang diaudit.'],
  [3, 'Definisi', 'Self-review Threat', 'Ancaman telaah pribadi; misalnya, akuntan yang memeriksa atau mengaudit pekerjaan atau sistem yang dia buat sendiri.'],
  [3, 'Definisi', 'Advocacy Threat', 'Ancaman advokasi; misalnya, auditor bertindak sebagai penasihat hukum bagi klien dalam sengketa pengadilan.'],
  [3, 'Definisi', 'Familiarity Threat', 'Ancaman kedekatan; misalnya, auditor memiliki hubungan keluarga dekat dengan direktur keuangan klien yang diaudit.'],
  [3, 'Definisi', 'Intimidation Threat', 'Ancaman intimidasi; tekanan nyata atau dirasakan, misal ancaman pemecatan dari klien bila auditor tidak setuju dengan kebijakan akuntansinya.'],
  [3, 'Mekanisme', 'Safeguards (Pencegahan)', 'Tindakan untuk mengeliminasi ancaman atau menurunkannya ke tingkat yang dapat diterima (mis. rotasi partner audit).'],
  // TM 4: Independensi & Integritas
  [4, 'Konsep', 'Independence of Mind', 'Independensi dalam pemikiran: keadaan pikiran yang memungkinkan akuntan memberikan opini tanpa dipengaruhi bias atau tekanan.'],
  [4, 'Konsep', 'Independence in Appearance', 'Independensi dalam penampilan: penghindaran fakta dan keadaan yang membuat pihak ketiga yang rasional meragukan integritas atau objektivitas auditor.'],
  [4, 'Mekanisme', 'Rotasi Audit', 'Kewajiban mengganti partner audit (atau KAP) setiap beberapa tahun untuk mencegah familiarity threat dan menjaga independensi.'],
  [4, 'Konsep', 'Conflict of Interest', 'Situasi di mana akuntan melayani dua pihak yang kepentingannya saling bertentangan (mis. mewakili pembeli dan penjual perusahaan).'],
  [4, 'Mekanisme', 'Chinese Wall (Information Barrier)', 'Prosedur internal KAP untuk memisahkan tim dan informasi secara ketat guna menangani klien yang bersaing atau memiliki benturan kepentingan.'],
  [4, 'Standar', 'Jasa Non-Asurans untuk Klien Audit', 'Auditor umumnya dilarang memberikan layanan tertentu (mis. pembukuan, penilaian) kepada klien audit yang dapat memunculkan self-review threat.'],
  // TM 5: Etika dalam Akuntansi Manajemen & Pajak
  [5, 'Konsep', 'Creative Accounting', 'Pemanfaatan celah standar akuntansi untuk mengubah tampilan angka laporan keuangan tanpa menyalahi hukum secara teknis, namun seringkali melanggar semangat etika.'],
  [5, 'Konsep', 'Earnings Management', 'Manipulasi waktu pengakuan pendapatan atau beban secara artifisial agar laba tampak stabil atau sesuai target manajerial.'],
  [5, 'Perbandingan', 'Tax Evasion vs Tax Avoidance', 'Tax evasion (penggelapan pajak) bersifat ilegal dengan menyembunyikan pendapatan. Tax avoidance (penghindaran pajak) bersifat legal dengan memanfaatkan celah peraturan, namun bisa bermasalah etis.'],
  [5, 'Definisi', 'Transfer Pricing (Aggressive)', 'Penetapan harga transaksi antar perusahaan dalam grup di negara berbeda guna memindahkan laba ke negara dengan tarif pajak rendah.'],
  [5, 'Mekanisme', 'Tekanan Atasan', 'Akuntan manajemen sering menghadapi intimidasi dari manajemen senior untuk memoles angka laba. Akuntan harus memegang teguh prinsip integritas.'],
  [5, 'Konsep', 'Budgetary Slack', 'Tindakan manajer secara sengaja merendahkan estimasi pendapatan atau melebihkan estimasi biaya agar target anggaran mudah dicapai.'],
  // TM 6: Corporate Governance & Business Ethics
  [6, 'Definisi', 'Corporate Governance', 'Sistem, aturan, dan proses yang mengarahkan dan mengendalikan perusahaan demi melindungi kepentingan stakeholders.'],
  [6, 'Konsep', 'Agency Theory', 'Teori yang menjelaskan konflik kepentingan antara pemegang saham (principal) dan manajer (agent) karena pemisahan kepemilikan dan kendali.'],
  [6, 'Mekanisme', 'Dewan Komisaris / Board of Directors', 'Badan pengawas yang mewakili pemegang saham untuk memantau kinerja direksi (manajemen) dan mencegah penyalahgunaan kekuasaan.'],
  [6, 'Konsep', 'Komite Audit', 'Sub-komite dari dewan komisaris (berisi anggota independen) yang bertugas mengawasi pelaporan keuangan, pengendalian internal, dan audit eksternal.'],
  [6, 'Mekanisme', 'Remunerasi Eksekutif', 'Masalah etis muncul jika bonus eksekutif dikaitkan erat dengan laba jangka pendek, mendorong manipulasi earnings management.'],
  [6, 'Definisi', 'Tone at the Top', 'Budaya dan komitmen etis yang ditunjukkan dan dipraktikkan oleh manajemen puncak yang menjadi panutan bagi seluruh karyawan.'],
  // TM 7: Skandal Akuntansi & Whistleblowing
  [7, 'Konsep', 'Skandal Enron', 'Kasus manipulasi akuntansi raksasa (Special Purpose Entities) yang berujung pada kebangkrutan KAP Arthur Andersen dan disahkannya Sarbanes-Oxley Act.'],
  [7, 'Standar', 'Sarbanes-Oxley Act (SOX)', 'Undang-undang AS (2002) yang memperketat aturan corporate governance, independensi auditor, dan mewajibkan manajemen menjamin keandalan kontrol internal.'],
  [7, 'Definisi', 'Fraud Triangle', 'Tiga faktor penyebab kecurangan: Pressure (tekanan/motivasi), Opportunity (peluang/kelemahan kontrol), dan Rationalization (pembenaran atas tindakan salah).'],
  [7, 'Definisi', 'Whistleblowing', 'Tindakan karyawan atau akuntan melaporkan kecurangan, pelanggaran hukum, atau perilaku tidak etis organisasi kepada pihak berwenang.'],
  [7, 'Mekanisme', 'Perlindungan Whistleblower', 'Kebijakan hukum atau internal yang melindungi pelapor dari pemecatan, penurunan jabatan, atau retaliasi (pembalasan) dari pihak perusahaan.'],
  [7, 'Miskonsepsi', 'NOCLAR (Non-Compliance with Laws and Regulations)', 'Standar etika yang mewajibkan akuntan profesional mengambil tindakan (termasuk melapor ke otoritas eksternal) jika menemukan pelanggaran hukum oleh klien.'],
  // TM 8: Komunikasi Profesional
  [8, 'Definisi', 'Komunikasi Profesional', 'Pertukaran informasi di tempat kerja yang jelas, objektif, sopan, dan menggunakan format yang sesuai standar profesi.'],
  [8, 'Mekanisme', 'Active Listening', 'Mendengarkan secara penuh, memahami makna, dan merespons pembicara (mis. klien) tanpa memotong, penting untuk memahami masalah akuntansi.'],
  [8, 'Konsep', 'Hambatan Komunikasi (Barriers)', 'Jargon teknis akuntansi yang terlalu rumit bagi klien, perbedaan budaya, dan gangguan emosional yang menghalangi pemahaman pesan.'],
  [8, 'Standar', 'Kejelasan (Clarity) vs Jargon', 'Akuntan profesional harus dapat menjelaskan laporan keuangan yang kompleks kepada klien non-keuangan dengan bahasa yang mudah dipahami.'],
  [8, 'Konsep', 'Non-verbal Communication', 'Bahasa tubuh, kontak mata, dan intonasi suara. Dalam presentasi audit, hal ini sangat memengaruhi kredibilitas dan kepercayaan klien.'],
  [8, 'Mekanisme', 'Kecerdasan Emosional (EQ)', 'Kemampuan mengenali, memahami, dan mengelola emosi sendiri dan orang lain dalam lingkungan profesional (misalnya saat menghadapi klien marah).'],
  // TM 9: Keterampilan Presentasi & Menulis
  [9, 'Konsep', 'Executive Summary', 'Ringkasan di awal laporan bisnis yang merangkum temuan utama, masalah, dan rekomendasi agar pimpinan dapat memahaminya secara cepat.'],
  [9, 'Mekanisme', 'Struktur Presentasi', 'Terdiri dari Pembukaan (hook/tujuan), Isi (poin-poin utama + data pendukung), dan Penutup (kesimpulan/call to action).'],
  [9, 'Miskonsepsi', 'PowerPoint sebagai Naskah', 'Slide presentasi sebaiknya hanya berisi poin visual dan ringkasan, bukan teks panjang yang dibaca utuh oleh presenter.'],
  [9, 'Standar', 'Email Profesional', 'Harus memiliki subjek yang spesifik, salam yang sopan, isi yang langsung pada tujuan, penutup formal, dan bebas kesalahan ejaan.'],
  [9, 'Konsep', 'Tone of Writing', 'Sikap atau emosi yang terpancar dari tulisan. Akuntan harus menggunakan tone yang objektif, asertif, tidak emosional, namun tetap sopan.'],
  [9, 'Mekanisme', 'Proofreading', 'Proses membaca ulang laporan atau komunikasi tertulis untuk mencari kesalahan logika, tata bahasa, dan angka sebelum dikirim ke klien.'],
  // TM 10: Kepemimpinan Etis (Ethical Leadership)
  [10, 'Definisi', 'Ethical Leadership', 'Kepemimpinan yang diarahkan oleh penghormatan terhadap keyakinan dan martabat etis, serta perlindungan terhadap hak asasi dan kepentingan publik.'],
  [10, 'Perbandingan', 'Transactional vs Transformational Leadership', 'Transactional fokus pada reward/punishment untuk kepatuhan (kaku). Transformational menginspirasi, memotivasi, dan menumbuhkan nilai moral bawaan karyawan.'],
  [10, 'Konsep', 'Lead by Example', 'Pemimpin etis tidak hanya membuat aturan, tetapi juga menunjukkan perilaku etis dalam tindakannya sehari-hari sebagai panutan (role model).'],
  [10, 'Mekanisme', 'Pemberdayaan (Empowerment)', 'Memberikan karyawan wewenang, informasi, dan kepercayaan untuk mengambil keputusan etis yang benar, alih-alih mengawasi secara mikro (micromanage).'],
  [10, 'Konsep', 'Moral Courage', 'Keberanian pemimpin atau akuntan untuk mempertahankan prinsip moral, bahkan saat menghadapi risiko kerugian finansial atau penolakan sosial.'],
  [10, 'Miskonsepsi', 'Pemimpin Selalu Benar', 'Pemimpin etis harus terbuka terhadap kritik, mengakui kesalahan secara transparan, dan tidak menghukum bawahan yang menyampaikan berita buruk.'],
  // TM 11: Resolusi Konflik Etis
  [11, 'Definisi', 'Ethical Dilemma', 'Situasi di mana dua prinsip moral atau etika saling bertentangan (mis. kerahasiaan vs pengungkapan pelanggaran demi publik).'],
  [11, 'Mekanisme', 'Framework Resolusi Etis', '1. Identifikasi masalah, 2. Kumpulkan fakta, 3. Evaluasi ancaman terhadap prinsip etika, 4. Terapkan pencegahan (safeguard).'],
  [11, 'Konsep', 'Konsultasi Internal', 'Langkah awal dalam menghadapi konflik etis adalah berkonsultasi dengan atasan, komite audit, atau pihak independen di dalam organisasi.'],
  [11, 'Konsep', 'Eskalasi Eksternal', 'Jika konsultasi internal gagal, akuntan mungkin perlu berkonsultasi dengan penasihat hukum atau asosiasi profesi (misal IAI).'],
  [11, 'Mekanisme', 'Resignation (Pengunduran Diri)', 'Opsi terakhir dan terberat bagi akuntan profesional jika organisasi klien atau tempat kerja terus memaksa untuk melanggar kode etik dan hukum.'],
  [11, 'Konsep', 'Dokumentasi', 'Dalam menghadapi konflik etis, akuntan harus mendokumentasikan fakta, proses diskusi, dan keputusan yang diambil sebagai bukti kehati-hatian.'],
  // TM 12: Nilai Moral & Agama dalam Bisnis
  [12, 'Definisi', 'Etika Spiritual/Agama dalam Bisnis', 'Penerapan nilai-nilai agama (seperti kejujuran, keadilan, dan kasih sayang) sebagai fondasi moral dalam aktivitas ekonomi.'],
  [12, 'Konsep', 'Keadilan (Justice)', 'Prinsip yang ditekankan berbagai agama untuk memberikan hak setiap pihak secara proporsional dan tidak menzalimi stakeholders.'],
  [12, 'Perbandingan', 'Etika Sekuler vs Etika Religius', 'Sekuler mendasarkan moral pada nalar, hukum, atau manfaat sosial (utilitarian). Religius mendasarkan moral pada kepatuhan kepada Tuhan dan ajaran wahyu.'],
  [12, 'Konsep', 'Amanah (Trustworthiness)', 'Nilai agama di mana posisi manajerial dan profesi akuntan dianggap sebagai titipan yang harus dipertanggungjawabkan baik secara hukum maupun spiritual.'],
  [12, 'Mekanisme', 'Anti-Riba/Anti-Eksploitasi', 'Beberapa nilai agama sangat melarang praktik bisnis yang mengeksploitasi ketidaktahuan atau kelemahan ekonomi pihak lain (misalnya bunga berlebihan).'],
  [12, 'Konsep', 'Tanggung Jawab Sosial Berbasis Keyakinan', 'Motivasi beramal dan CSR yang bukan karena citra perusahaan, melainkan dilandasi keyakinan bahwa kekayaan memiliki fungsi sosial (zakat, persepuluhan, derma).'],
  // TM 13: Etika di Era Digital & AI
  [13, 'Konsep', 'Privasi Data (Data Privacy)', 'Kewajiban etis akuntan/perusahaan untuk melindungi data pribadi dan keuangan klien dari akses ilegal atau penyalahgunaan pihak ketiga.'],
  [13, 'Definisi', 'Algorithmic Bias', 'Risiko bahwa sistem AI (seperti AI rekrutmen atau pemberian kredit) menghasilkan keputusan diskriminatif karena dilatih menggunakan data manusia yang bias.'],
  [13, 'Konsep', 'Transparansi AI', 'Tuntutan etis agar algoritma AI yang digunakan untuk pengambilan keputusan keuangan dapat dijelaskan logikanya (explainable AI), bukan kotak hitam (black box).'],
  [13, 'Mekanisme', 'Cybersecurity Governance', 'Tanggung jawab pimpinan perusahaan (dan auditor) untuk memastikan kontrol IT memadai dalam menghadapi ancaman peretas dan ransomware.'],
  [13, 'Miskonsepsi', 'AI Menggantikan Tanggung Jawab', 'Meskipun perhitungan pajak atau audit dibantu AI, akuntan manusia tetap memegang tanggung jawab moral dan hukum atas hasil akhir opini atau pelaporannya.'],
  [13, 'Konsep', 'Hak Milik Intelektual Digital', 'Etika yang melarang pembajakan software, pencurian kode algoritma, dan penggunaan materi digital tanpa lisensi yang sah di lingkungan perusahaan.'],
  // TM 14: Review Integritas Profesional
  [14, 'Definisi', 'Skepticism Profesional', 'Sikap akuntan yang selalu mempertanyakan dan kritis terhadap bukti yang ada, tidak begitu saja percaya pada penjelasan klien tanpa verifikasi.'],
  [14, 'Konsep', 'Due Professional Care', 'Kewajiban akuntan untuk melaksanakan tugasnya dengan kompetensi, ketekunan, dan kecermatan seperti yang diharapkan dari seorang ahli yang wajar.'],
  [14, 'Standar', 'Continuing Professional Development (CPD)', 'Kewajiban menjaga dan meningkatkan kompetensi etika dan teknis secara berkelanjutan seiring perubahan standar akuntansi dan hukum.'],
  [14, 'Mekanisme', 'Sanksi Pelanggaran Kode Etik', 'Pelanggaran etika dapat berakibat teguran, pencabutan izin praktik oleh asosiasi (mis. IAI/IAPI), hingga tuntutan hukum.'],
  [14, 'Konsep', 'Public Interest Entity (PIE)', 'Entitas yang memiliki signifikansi publik (seperti bank, perusahaan terbuka). Akuntan yang mengaudit PIE dikenakan standar independensi yang jauh lebih ketat.'],
  [14, 'Konsep', 'Integritas sebagai Modal Utama', 'Bagi profesi akuntan, aset terpenting bukanlah modal finansial, melainkan reputasi dan kepercayaan publik yang dibangun dari integritas tak tergoyahkan.']
];

const cards = [];
raw.forEach((r, i) => {
  const tm = r[0];
  const phase = tm <= 7 ? 'pra-uts' : 'pra-uas';
  cards.push(`  {
    id: "aka103-tm${tm < 10 ? '0'+tm : tm}-${i < 10 ? '0'+i : i}",
    phase: "${phase}",
    tm: ${tm},
    topic: "${r[2].replace(/"/g, '\\"')}",
    category: "${r[1]}",
    front: "${r[2].replace(/"/g, '\\"')}",
    back: "${r[3].replace(/"/g, '\\"')}"
  }`);
});

const content = `import type { AdvancedStudyCard } from '../../types';

export const AKA103_FC: AdvancedStudyCard[] = [
${cards.join(',\n')}
];
`;

fs.writeFileSync('c:/cek/src/data/flashcards/aka103.ts', content);
console.log('Generated AKA103 cards: ' + cards.length);
