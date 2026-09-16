// =============================================================
// src/data/sia/siaReadings.ts
// Rangkuman komprehensif materi Sistem Informasi Akuntansi (AKS301).
// Sumber: Accounting Information Systems (4th ISE ed.) —
//         Vernon J. Richardson, C. Janie Chang, Rod E. Smith (McGraw-Hill).
// =============================================================
import type { Reading } from '../../types';
import { SIA_TM1 } from './modules/tm1';
import { SIA_TM2 } from './modules/tm2';
import { SIA_TM3 } from './modules/tm3';
import { SIA_TM4 } from './modules/tm4';
import { SIA_TM5 } from './modules/tm5';
import { SIA_TM6 } from './modules/tm6';
import { SIA_TM7 } from './modules/tm7';

export const AKS301_READINGS: Record<number, Reading> = {
  1: SIA_TM1,
  2: SIA_TM2,
  3: SIA_TM3,
  4: SIA_TM4,
  5: SIA_TM5,
  6: SIA_TM6,
  7: SIA_TM7,
  8: {
  "tm": 8,
  "title": "Kerangka Pengendalian Internal: COSO Internal Control & COSO ERM",
  "ref": "Richardson et al. AIS 4e · Ch. 9",
  "intro": "Membahas secara mendalam kerangka kerja COSO Internal Control Integrated Framework (17 Prinsip) dan COSO Enterprise Risk Management (ERM). Memahami taksonomi pengendalian preventif, detektif, dan korektif serta kriteria defisiensi pengendalian menurut standar audit.",
  "objectives": [
    "Menguraikan 5 komponen COSO Internal Control Framework beserta 17 prinsip turunannya.",
    "Membedakan fungsi pengendalian preventif (preventive), detektif (detective), dan korektif (corrective).",
    "Memahami evolusi COSO ERM (Governance, Strategy, Performance, Review, Information).",
    "Mengklasifikasikan tingkat kelemahan audit: Control Deficiency, Significant Deficiency, dan Material Weakness.",
    "Menerapkan kerangka COSO untuk mengevaluasi lingkungan pengendalian sistem teknologi informasi."
  ],
  "blocks": [
      {
        "kind": "figure",
        "caption": "Gambar 8.1: Kerangka Kerja Pengendalian Internal COSO: 5 Komponen dan 17 Prinsip Pengendalian.",
        "svg": "<svg class=\"course-diagram-svg\" viewBox=\"0 0 680 250\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif\">\n  <rect class=\"svg-bg\" x=\"10\" y=\"10\" width=\"660\" height=\"230\" rx=\"12\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect class=\"svg-header\" x=\"10\" y=\"10\" width=\"660\" height=\"38\" rx=\"12\" fill=\"#1e293b\" fill-opacity=\"0.6\"/>\n  <line class=\"svg-divider\" x1=\"10\" y1=\"48\" x2=\"670\" y2=\"48\" stroke=\"#334155\" stroke-width=\"1\"/>\n  <text class=\"svg-title text-accent-red\" x=\"340\" y=\"34\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">KERANGKA KERJA PENGENDALIAN INTERNAL: COSO 5 KOMPONEN &amp; 17 PRINSIP</text>\n\n  <!-- 5 Horizontal Bars of COSO -->\n  <rect class=\"svg-card\" x=\"30\" y=\"56\" width=\"410\" height=\"32\" rx=\"4\" fill=\"#1e293b\" stroke=\"#38bdf8\"/>\n  <text class=\"text-accent-blue\" x=\"42\" y=\"76\" fill=\"#38bdf8\" font-size=\"9\" font-weight=\"700\">1. CONTROL ENVIRONMENT (Prinsip 1-5)</text>\n  <text class=\"svg-muted\" x=\"270\" y=\"76\" fill=\"#94a3b8\" font-size=\"8\">Integritas, Tone at the Top, Dewan Komisaris, Struktur</text>\n\n  <rect class=\"svg-card\" x=\"30\" y=\"91\" width=\"410\" height=\"32\" rx=\"4\" fill=\"#1e293b\" stroke=\"#34d399\"/>\n  <text class=\"text-accent-green\" x=\"42\" y=\"111\" fill=\"#34d399\" font-size=\"9\" font-weight=\"700\">2. RISK ASSESSMENT (Prinsip 6-9)</text>\n  <text class=\"svg-muted\" x=\"270\" y=\"111\" fill=\"#94a3b8\" font-size=\"8\">Identifikasi Risiko, Analisis Dampak, Fraud Risk, Perubahan</text>\n\n  <rect class=\"svg-card\" x=\"30\" y=\"126\" width=\"410\" height=\"32\" rx=\"4\" fill=\"#1e293b\" stroke=\"#f59e0b\"/>\n  <text class=\"text-accent-amber\" x=\"42\" y=\"146\" fill=\"#fbbf24\" font-size=\"9\" font-weight=\"700\">3. CONTROL ACTIVITIES (Prinsip 10-12)</text>\n  <text class=\"svg-muted\" x=\"270\" y=\"146\" fill=\"#94a3b8\" font-size=\"8\">Otorisasi, SoD, General IT Controls (GITC), Kebijakan</text>\n\n  <rect class=\"svg-card\" x=\"30\" y=\"161\" width=\"410\" height=\"32\" rx=\"4\" fill=\"#1e293b\" stroke=\"#a855f7\"/>\n  <text class=\"text-accent-purple\" x=\"42\" y=\"181\" fill=\"#a78bfa\" font-size=\"9\" font-weight=\"700\">4. INFORMATION &amp; COMM. (Prinsip 13-15)</text>\n  <text class=\"svg-muted\" x=\"270\" y=\"181\" fill=\"#94a3b8\" font-size=\"8\">Kualitas Informasi Akuntansi, Komunikasi Internal &amp; Eksternal</text>\n\n  <rect class=\"svg-card\" x=\"30\" y=\"196\" width=\"410\" height=\"32\" rx=\"4\" fill=\"#1e293b\" stroke=\"#f43f5e\"/>\n  <text class=\"text-accent-red\" x=\"42\" y=\"216\" fill=\"#f87171\" font-size=\"9\" font-weight=\"700\">5. MONITORING ACTIVITIES (Prinsip 16-17)</text>\n  <text class=\"svg-muted\" x=\"270\" y=\"216\" fill=\"#94a3b8\" font-size=\"8\">Evaluasi Berkelanjutan, Audit Internal, Pelaporan Defisiensi</text>\n\n  <!-- Right: 3 Objectives of COSO -->\n  <rect class=\"svg-card\" x=\"460\" y=\"56\" width=\"190\" height=\"172\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f43f5e\" stroke-width=\"1.5\"/>\n  <text class=\"text-accent-red\" x=\"555\" y=\"78\" fill=\"#f43f5e\" font-size=\"10.5\" font-weight=\"700\" text-anchor=\"middle\">3 TUJUAN UTAMA COSO</text>\n  <line class=\"svg-divider\" x1=\"470\" y1=\"88\" x2=\"640\" y2=\"88\" stroke=\"#334155\"/>\n\n  <rect class=\"svg-subcard\" x=\"475\" y=\"96\" width=\"160\" height=\"38\" rx=\"4\" fill=\"#0f172a\" stroke=\"#38bdf8\"/>\n  <text class=\"text-accent-blue\" x=\"555\" y=\"112\" fill=\"#38bdf8\" font-size=\"8.5\" font-weight=\"700\" text-anchor=\"middle\">OPERATIONS</text>\n  <text class=\"svg-muted\" x=\"555\" y=\"126\" fill=\"#94a3b8\" font-size=\"7.5\" text-anchor=\"middle\">Efektivitas &amp; Efisiensi Aset</text>\n\n  <rect class=\"svg-subcard\" x=\"475\" y=\"140\" width=\"160\" height=\"38\" rx=\"4\" fill=\"#0f172a\" stroke=\"#34d399\"/>\n  <text class=\"text-accent-green\" x=\"555\" y=\"156\" fill=\"#34d399\" font-size=\"8.5\" font-weight=\"700\" text-anchor=\"middle\">REPORTING (ICFR)</text>\n  <text class=\"svg-muted\" x=\"555\" y=\"170\" fill=\"#94a3b8\" font-size=\"7.5\" text-anchor=\"middle\">Keandalan Laporan Keuangan</text>\n\n  <rect class=\"svg-subcard\" x=\"475\" y=\"184\" width=\"160\" height=\"38\" rx=\"4\" fill=\"#0f172a\" stroke=\"#f59e0b\"/>\n  <text class=\"text-accent-amber\" x=\"555\" y=\"200\" fill=\"#fbbf24\" font-size=\"8.5\" font-weight=\"700\" text-anchor=\"middle\">COMPLIANCE</text>\n  <text class=\"svg-muted\" x=\"555\" y=\"214\" fill=\"#94a3b8\" font-size=\"7.5\" text-anchor=\"middle\">Kepatuhan Hukum &amp; Regulasi</text>\n</svg>"
},
    {
      "kind": "h2",
      "text": "Lima Komponen COSO Internal Control Framework"
    },
    {
      "kind": "p",
      "text": "COSO (Committee of Sponsoring Organizations of the Treadway Commission) mendefinisikan pengendalian internal sebagai proses yang dipengaruhi oleh dewan direksi, manajemen, dan personel lain, yang dirancang untuk memberikan keyakinan memadai terkait pencapaian tujuan operasi, pelaporan, dan kepatuhan."
    },
    {
      "kind": "table",
      "caption": "Tabel 8.1: Lima Komponen COSO dan Inti Prinsipnya",
      "headers": [
        "Komponen COSO",
        "Fokus Utama",
        "Contoh Implementasi Praktis"
      ],
      "rows": [
        [
          "1. Control Environment (Lingkungan Pengendalian)",
          "Fondasi organisasi, integritas, nilai etika, struktur pelaporan, dan komitmen terhadap kompetensi ('Tone at the Top').",
          "Penerbitan Kode Etik Karyawan, Whistleblowing System independen, Komite Audit yang aktif."
        ],
        [
          "2. Risk Assessment (Penilaian Risiko)",
          "Proses dinamis untuk mengidentifikasi dan menilai risiko ketercapaian tujuan, termasuk risiko fraud dan perubahan teknologi.",
          "Penyusunan Risk Register tahunan, analisis kerentanan sistem siber, evaluasi risiko kecurangan pelaporan keuangan."
        ],
        [
          "3. Control Activities (Aktivitas Pengendalian)",
          "Tindakan yang ditetapkan melalui kebijakan dan prosedur untuk memitigasi risiko hingga tingkat yang dapat diterima.",
          "Pemisahan tugas (SoD), otorisasi ganda transaksi di atas Rp 100 juta, pembatasan akses fisik ruang server."
        ],
        [
          "4. Information & Communication",
          "Penyediaan informasi berkualitas yang relevan dan tepat waktu, serta saluran komunikasi dua arah (internal dan eksternal).",
          "Sistem pelaporan manajerial real-time, manual kebijakan akuntansi yang terdistribusi, pengaduan konsumen."
        ],
        [
          "5. Monitoring Activities (Pemantauan)",
          "Evaluasi berkala dan berkelanjutan untuk memastikan kelima komponen pengendalian berfungsi efektif.",
          "Audit internal rutin, audit penetration testing berkala, tindak lanjut atas temuan auditor eksternal."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Taksonomi Pengendalian: Preventif, Detektif, dan Korektif"
    },
    {
      "kind": "ul",
      "items": [
        "Pengendalian Preventif (Mencegah): Mencegah kesalahan atau kecurangan sebelum terjadi. Paling efektif dan ekonomis. Contoh: Password kompleks, pemisahan tugas, validasi input format angka, otorisasi transaksi.",
        "Pengendalian Detektif (Mendeteksi): Menemukan kesalahan atau kecurangan yang lolos dari pencegahan segera setelah peristiwa terjadi. Contoh: Rekonsiliasi bank bulanan, stock opname fisik gudang, review anggaran vs realisasi bulanan, audit trail.",
        "Pengendalian Korektif (Memperbaiki): Mengoreksi masalah yang terdeteksi dan memulihkan kondisi sistem. Contoh: Backup data harian, klaim asuransi kerugian, prosedur pemulihan bencana (disaster recovery plan)."
      ]
    },
    {
      "kind": "h2",
      "text": "Klasifikasi Tingkat Defisiensi Pengendalian Menurut Standar Audit"
    },
    {
      "kind": "p",
      "text": "Auditor eksternal dan komite audit mengelompokkan kelemahan pengendalian internal ke dalam tiga kategori berdasarkan tingkat keparahannya:"
    },
    {
      "kind": "table",
      "caption": "Tabel 8.2: Tingkat Defisiensi Pengendalian Internal",
      "headers": [
        "Klasifikasi",
        "Ambang Batas Keparahan",
        "Kewajiban Pelaporan"
      ],
      "rows": [
        [
          "Control Deficiency (Defisiensi Pengendalian)",
          "Rancangan atau operasi pengendalian tidak memungkinkan personel mencegah atau mendeteksi salah saji tepat waktu dalam kegiatan normal.",
          "Dilaporkan ke manajemen operasional dalam Management Letter."
        ],
        [
          "Significant Deficiency (Defisiensi Signifikan)",
          "Defisiensi yang cukup penting untuk mendapatkan perhatian dari pihak yang bertanggung jawab atas tata kelola (Komite Audit/Dewan Komisaris), namun tidak berpotensi salah saji material.",
          "Wajib dilaporkan secara tertulis kepada Komite Audit dan Dewan Direksi."
        ],
        [
          "Material Weakness (Kelemahan Material)",
          "Tingkat defisiensi paling parah di mana terdapat kemungkinan masuk akal (reasonable possibility) bahwa salah saji material pada laporan keuangan tidak dapat dicegah atau dideteksi tepat waktu.",
          "Wajib dipublikasikan dalam opini audit publik SOX 404 dan menyebabkan Opini Tidak Wajar (Adverse Opinion) atas ICFR."
        ]
      ]
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Prinsip Evaluasi Risiko",
      "text": "Residual Risk (Risiko Sisa) = Inherent Risk (Risiko Bawaan) dikurangi Efektivitas Pengendalian Internal. Manajemen tidak mungkin mengeliminasi risiko hingga 0%, melainkan menekannya hingga berada di bawah Risk Appetite organisasi."
    }
  ]
},
  9: {
  "tm": 9,
  "title": "Keamanan Informasi, Ancaman Siber & Manajemen Kelangsungan Bisnis (BCP/DRP)",
  "ref": "Richardson et al. AIS 4e · Ch. 10 & 11",
  "intro": "Menganalisis prinsip CIA Triad (Confidentiality, Integrity, Availability) dalam sistem akuntansi. Membedakan kriptografi simetris vs asimetris, teknik mitigasi serangan siber seperti ransomware dan phishing, serta perancangan Business Continuity Plan (BCP) dan Disaster Recovery Plan (DRP).",
  "objectives": [
    "Menjelaskan prinsip CIA Triad sebagai fondasi keamanan sistem akuntansi.",
    "Membedakan mekanisme enkripsi simetris (AES) vs asimetris (RSA/Public-Private Key) dan fungsi tanda tangan digital (Digital Signature).",
    "Mengidentifikasi vektor ancaman siber: Ransomware, Social Engineering (Phishing), Man-in-the-Middle, dan SQL Injection.",
    "Merumuskan metrik pemulihan bencana: Recovery Point Objective (RPO) dan Recovery Time Objective (RTO).",
    "Membandingkan kelebihan dan kelemahan situs pemulihan bencana (Hot Site, Warm Site, Cold Site)."
  ],
  "blocks": [
      {
        "kind": "figure",
        "caption": "Gambar 9.1: Prinsip Keamanan Informasi CIA Triad dan Skema Tanda Tangan Digital Kriptografi Asimetris.",
        "svg": "<svg class=\"course-diagram-svg\" viewBox=\"0 0 680 250\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif\">\n  <rect class=\"svg-bg\" x=\"10\" y=\"10\" width=\"660\" height=\"230\" rx=\"12\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect class=\"svg-header\" x=\"10\" y=\"10\" width=\"660\" height=\"38\" rx=\"12\" fill=\"#1e293b\" fill-opacity=\"0.6\"/>\n  <line class=\"svg-divider\" x1=\"10\" y1=\"48\" x2=\"670\" y2=\"48\" stroke=\"#334155\" stroke-width=\"1\"/>\n  <text class=\"svg-title text-accent-blue\" x=\"340\" y=\"34\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">KEAMANAN INFORMASI AKUNTANSI: CIA TRIAD &amp; KRIPTOGRAFI ASIMETRIS</text>\n\n  <!-- Left: CIA Triad -->\n  <rect class=\"svg-card\" x=\"30\" y=\"58\" width=\"210\" height=\"170\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n  <text class=\"text-accent-blue\" x=\"135\" y=\"78\" fill=\"#38bdf8\" font-size=\"10.5\" font-weight=\"700\" text-anchor=\"middle\">PRINSIP CIA TRIAD</text>\n  <line class=\"svg-divider\" x1=\"40\" y1=\"88\" x2=\"230\" y2=\"88\" stroke=\"#334155\"/>\n\n  <rect class=\"svg-subcard\" x=\"40\" y=\"96\" width=\"190\" height=\"36\" rx=\"4\" fill=\"#0f172a\" stroke=\"#0284c7\"/>\n  <text class=\"text-accent-blue\" x=\"135\" y=\"112\" fill=\"#38bdf8\" font-size=\"8.5\" font-weight=\"700\" text-anchor=\"middle\">Confidentiality (Kerahasiaan)</text>\n  <text class=\"svg-muted\" x=\"135\" y=\"124\" fill=\"#94a3b8\" font-size=\"7.5\" text-anchor=\"middle\">Akses Terbatas: Enkripsi &amp; Role-Based Access</text>\n\n  <rect class=\"svg-subcard\" x=\"40\" y=\"138\" width=\"190\" height=\"36\" rx=\"4\" fill=\"#0f172a\" stroke=\"#34d399\"/>\n  <text class=\"text-accent-green\" x=\"135\" y=\"154\" fill=\"#34d399\" font-size=\"8.5\" font-weight=\"700\" text-anchor=\"middle\">Integrity (Keutuhan Data)</text>\n  <text class=\"svg-muted\" x=\"135\" y=\"166\" fill=\"#94a3b8\" font-size=\"7.5\" text-anchor=\"middle\">Cegah Modifikasi Ilegal: Hash &amp; Checksum</text>\n\n  <rect class=\"svg-subcard\" x=\"40\" y=\"180\" width=\"190\" height=\"36\" rx=\"4\" fill=\"#0f172a\" stroke=\"#f59e0b\"/>\n  <text class=\"text-accent-amber\" x=\"135\" y=\"196\" fill=\"#fbbf24\" font-size=\"8.5\" font-weight=\"700\" text-anchor=\"middle\">Availability (Ketersediaan)</text>\n  <text class=\"svg-muted\" x=\"135\" y=\"208\" fill=\"#94a3b8\" font-size=\"7.5\" text-anchor=\"middle\">Sistem Selalu Siap: Backup, DRP, Redundansi</text>\n\n  <!-- Right: Public-Key Cryptography Flow -->\n  <rect class=\"svg-card\" x=\"260\" y=\"58\" width=\"390\" height=\"170\" rx=\"8\" fill=\"#1e293b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/>\n  <text class=\"text-accent-purple\" x=\"455\" y=\"78\" fill=\"#a78bfa\" font-size=\"10.5\" font-weight=\"700\" text-anchor=\"middle\">ENKRIPSI KUNCI PUBLIK &amp; TANDA TANGAN DIGITAL (DIGITAL SIGNATURE)</text>\n  <line class=\"svg-divider\" x1=\"270\" y1=\"88\" x2=\"640\" y2=\"88\" stroke=\"#334155\"/>\n\n  <!-- Pengirim -->\n  <rect class=\"svg-subcard\" x=\"275\" y=\"98\" width=\"105\" height=\"52\" rx=\"4\" fill=\"#0f172a\" stroke=\"#a855f7\"/>\n  <text class=\"text-accent-purple\" x=\"327\" y=\"114\" fill=\"#a78bfa\" font-size=\"8\" font-weight=\"700\" text-anchor=\"middle\">Dokumen Jurnal</text>\n  <text class=\"svg-text\" x=\"327\" y=\"126\" fill=\"#cbd5e1\" font-size=\"7\" text-anchor=\"middle\">+ Private Key Pengirim</text>\n  <text class=\"text-accent-purple\" x=\"327\" y=\"140\" fill=\"#a78bfa\" font-size=\"7.5\" font-weight=\"600\" text-anchor=\"middle\">&#8594; Digital Signature</text>\n\n  <!-- Arrow -->\n  <line x1=\"385\" y1=\"124\" x2=\"415\" y2=\"124\" stroke=\"#a855f7\" stroke-width=\"2\"/>\n  <text class=\"svg-muted\" x=\"400\" y=\"118\" fill=\"#94a3b8\" font-size=\"7\" text-anchor=\"middle\">Kirim</text>\n\n  <!-- Penerima -->\n  <rect class=\"svg-subcard\" x=\"420\" y=\"98\" width=\"110\" height=\"52\" rx=\"4\" fill=\"#0f172a\" stroke=\"#34d399\"/>\n  <text class=\"text-accent-green\" x=\"475\" y=\"114\" fill=\"#34d399\" font-size=\"8\" font-weight=\"700\" text-anchor=\"middle\">Verifikasi Penerima</text>\n  <text class=\"svg-text\" x=\"475\" y=\"126\" fill=\"#cbd5e1\" font-size=\"7\" text-anchor=\"middle\">Pakai Public Key Pengirim</text>\n  <text class=\"text-accent-green\" x=\"475\" y=\"140\" fill=\"#34d399\" font-size=\"7.5\" font-weight=\"600\" text-anchor=\"middle\">&#10003; Sah &amp; Asli</text>\n\n  <!-- Key takeaways -->\n  <rect class=\"svg-subcard\" x=\"275\" y=\"158\" width=\"365\" height=\"58\" rx=\"4\" fill=\"#0f172a\" stroke=\"#38bdf8\"/>\n  <text class=\"text-accent-blue\" x=\"457\" y=\"174\" fill=\"#38bdf8\" font-size=\"8\" font-weight=\"700\" text-anchor=\"middle\">3 FUNGSI UTAMA DIGITAL SIGNATURE PADA SIA:</text>\n  <text class=\"svg-text\" x=\"457\" y=\"188\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">1. Autentikasi Sumber Transaksi &#8226; 2. Integritas Data (Bebas Modifikasi)</text>\n  <text class=\"text-accent-green\" x=\"457\" y=\"202\" fill=\"#34d399\" font-size=\"7.5\" font-weight=\"600\" text-anchor=\"middle\">3. Non-Repudiation: Pengirim Tidak Bisa Menyangkal Otorisasi Transaksi</text>\n</svg>"
},
    {
      "kind": "h2",
      "text": "Prinsip CIA Triad dalam Sistem Akuntansi"
    },
    {
      "kind": "ul",
      "items": [
        "Confidentiality (Kerahasiaan): Informasi sensitif (seperti data gaji direksi, nomor rekening bank, dan daftar harga negosiasi) terlindung dari akses pihak tidak berwenang. Diimplementasikan dengan enkripsi data dan Role-Based Access Control (RBAC).",
        "Integrity (Integritas): Data transaksi dan laporan keuangan akurat, lengkap, dan terlindung dari modifikasi tidak sah (tamper-proof). Diimplementasikan dengan hash functions (SHA-256) dan write-once logs.",
        "Availability (Ketersediaan): Sistem akuntansi dan data keuangan dapat diakses oleh personil yang berwenang kapan pun dibutuhkan untuk operasional atau audit. Diimplementasikan dengan server redundancy, UPS, dan backup data."
      ]
    },
    {
      "kind": "h2",
      "text": "Kriptografi & Tanda Tangan Digital (Digital Signatures)"
    },
    {
      "kind": "table",
      "caption": "Tabel 9.1: Perbandingan Kriptografi Simetris vs Asimetris",
      "headers": [
        "Karakteristik",
        "Kriptografi Simetris (Secret Key)",
        "Kriptografi Asimetris (Public-Private Key)"
      ],
      "rows": [
        [
          "Kunci Enkripsi & Dekripsi",
          "Menggunakan SATU kunci rahasia yang sama untuk enkripsi dan dekripsi.",
          "Menggunakan SEPASANG kunci: Public Key (dibagikan bebas) dan Private Key (disimpan rahasia)."
        ],
        [
          "Kecepatan Komputasi",
          "Sangat cepat, cocok untuk mengenkripsi database bervolume gigabyte/terabyte.",
          "Lebih lambat (sekitar 1.000x lebih lambat dari simetris), hanya efisien untuk data kecil."
        ],
        [
          "Masalah Utama",
          "Distribusi kunci: bagaimana membagikan kunci rahasia secara aman kepada pihak kedua tanpa disadap?",
          "Distribusi kunci mudah melalui Public Key, namun membutuhkan infrastruktur sertifikat digital (PKI)."
        ],
        [
          "Penerapan Akuntansi",
          "Enkripsi seluruh database ERP yang sedang tersimpan (Data at Rest) menggunakan standar AES-256.",
          "Tanda tangan digital (Digital Signature) untuk otorisasi transfer kawat dan validasi faktur elektronik pajak."
        ]
      ]
    },
    {
      "kind": "p",
      "text": "Mekanisme Tanda Tangan Digital (Digital Signature): Pengirim membuat ringkasan hash dari dokumen, lalu mengenkripsi hash tersebut menggunakan Private Key miliknya. Penerima mendeskripsi tanda tangan menggunakan Public Key pengirim dan mencocokkan nilai hash. Ini menjamin dua hal kritis: Non-repudiation (pengirim tidak bisa menyangkal telah menyetujui transaksi) dan Data Integrity (dokumen terbukti tidak mengalami perubahan 1 byte pun selama transmisi)."
    },
    {
      "kind": "h2",
      "text": "Perencanaan Kelangsungan Bisnis: RPO, RTO, dan Situs Pemulihan"
    },
    {
      "kind": "table",
      "caption": "Tabel 9.2: Metrik Pemulihan Bencana dan Perbandingan Fasilitas Alternatif",
      "headers": [
        "Parameter",
        "Hot Site",
        "Warm Site",
        "Cold Site"
      ],
      "rows": [
        [
          "Biaya Investasi",
          "Sangat Mahal (operasi 24/7 paralel).",
          "Moderat (perangkat keras siap, data dipulihkan terjadwal).",
          "Paling Ekonomis (hanya sewa gedung kosong)."
        ],
        [
          "Recovery Time Objective (RTO) — Berapa lama sistem boleh mati?",
          "Hitungan menit hingga detik (hampir instan).",
          "Hitungan beberapa jam hingga 1 hari.",
          "Hitungan hari hingga minggu."
        ],
        [
          "Recovery Point Objective (RPO) — Berapa jam transaksi yang boleh hilang?",
          "Mendekati 0 detik (data direplikasi secara sinkron real-time).",
          "Maksimal data backup hari sebelumnya (misal 24 jam).",
          "Seluruh data sejak backup tape fisik terakhir."
        ],
        [
          "Kelayakan Penggunaan",
          "Bank, bursa efek, sistem pembayaran nasional.",
          "Perusahaan manufaktur dan distribusi skala menengah.",
          "Organisasi dengan operasional non-kritis."
        ]
      ]
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Protokol Backup 3-2-1",
      "text": "Untuk mencegah kehancuran data akibat serangan ransomware, terapkan aturan 3-2-1: Simpan 3 salinan data, pada 2 media penyimpanan berbeda (misal SSD server lokal dan cloud storage), dengan 1 salinan disimpan di lokasi offsite yang terputus jaringan (air-gapped immutable backup)."
    }
  ]
},
  10: {
  "tm": 10,
  "title": "Tata Kelola TI, Kerangka COBIT & Audit Sistem Informasi",
  "ref": "Richardson et al. AIS 4e · Ch. 12",
  "intro": "Mendalami kerangka tata kelola teknologi informasi COBIT 2019, pemisahan tugas dalam departemen TI, serta metodologi audit sistem informasi: Audit Around the Computer vs Audit Through the Computer dan Computer-Assisted Audit Techniques (CAATs).",
  "objectives": [
    "Memahami struktur tata kelola TI berdasarkan kerangka kerja COBIT 2019 (EDM vs APO, BAI, DSS, MEA).",
    "Membedakan General IT Controls (GITC) vs Application Controls.",
    "Menganalisis pemisahan tugas fungsional internal di dalam Departemen Teknologi Informasi.",
    "Membandingkan teknik audit 'Around the Computer' vs 'Through the Computer'.",
    "Menerapkan teknik CAATs modern: Test Data Approach, Integrated Test Facility (ITF), dan Parallel Simulation."
  ],
  "blocks": [
      {
        "kind": "figure",
        "caption": "Gambar 10.1: Domain Tata Kelola TI COBIT 2019 dan Metodologi Audit Sistem Informasi (CAATs).",
        "svg": "<svg class=\"course-diagram-svg\" viewBox=\"0 0 680 250\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif\">\n  <rect class=\"svg-bg\" x=\"10\" y=\"10\" width=\"660\" height=\"230\" rx=\"12\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect class=\"svg-header\" x=\"10\" y=\"10\" width=\"660\" height=\"38\" rx=\"12\" fill=\"#1e293b\" fill-opacity=\"0.6\"/>\n  <line class=\"svg-divider\" x1=\"10\" y1=\"48\" x2=\"670\" y2=\"48\" stroke=\"#334155\" stroke-width=\"1\"/>\n  <text class=\"svg-title text-accent-purple\" x=\"340\" y=\"34\" fill=\"#a855f7\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">TATA KELOLA TI (COBIT 2019) &amp; METODOLOGI AUDIT SISTEM INFORMASI</text>\n\n  <!-- COBIT Governance vs Management -->\n  <rect class=\"svg-card\" x=\"30\" y=\"58\" width=\"315\" height=\"170\" rx=\"8\" fill=\"#1e293b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/>\n  <text class=\"text-accent-purple\" x=\"187\" y=\"78\" fill=\"#a855f7\" font-size=\"10.5\" font-weight=\"700\" text-anchor=\"middle\">KERANGKA DOMAIN COBIT 2019</text>\n  <line class=\"svg-divider\" x1=\"40\" y1=\"88\" x2=\"335\" y2=\"88\" stroke=\"#334155\"/>\n\n  <rect class=\"svg-subcard\" x=\"40\" y=\"96\" width=\"295\" height=\"34\" rx=\"4\" fill=\"#0f172a\" stroke=\"#a855f7\"/>\n  <text class=\"text-accent-purple\" x=\"187\" y=\"112\" fill=\"#a78bfa\" font-size=\"8.5\" font-weight=\"700\" text-anchor=\"middle\">GOVERNANCE DOMAIN: EDM</text>\n  <text class=\"svg-muted\" x=\"187\" y=\"124\" fill=\"#94a3b8\" font-size=\"7.5\" text-anchor=\"middle\">Evaluate, Direct, and Monitor (Tanggung Jawab Dewan Direksi)</text>\n\n  <rect class=\"svg-subcard\" x=\"40\" y=\"136\" width=\"295\" height=\"82\" rx=\"4\" fill=\"#0f172a\" stroke=\"#0284c7\"/>\n  <text class=\"text-accent-blue\" x=\"187\" y=\"152\" fill=\"#38bdf8\" font-size=\"8.5\" font-weight=\"700\" text-anchor=\"middle\">MANAGEMENT DOMAINS (Eksekutif &amp; Tim TI):</text>\n  <text class=\"svg-text\" x=\"187\" y=\"166\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">&#8226; APO: Align, Plan, and Organize (Strategi &amp; Arsitektur)</text>\n  <text class=\"svg-text\" x=\"187\" y=\"180\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">&#8226; BAI: Build, Acquire, and Implement (Pengadaan Sistem)</text>\n  <text class=\"svg-text\" x=\"187\" y=\"194\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">&#8226; DSS: Deliver, Service, and Support (Operasional Harian)</text>\n  <text class=\"svg-text\" x=\"187\" y=\"208\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">&#8226; MEA: Monitor, Evaluate, and Assess (Kinerja &amp; Kepatuhan)</text>\n\n  <!-- IT Audit Methodology -->\n  <rect class=\"svg-card\" x=\"360\" y=\"58\" width=\"290\" height=\"170\" rx=\"8\" fill=\"#1e293b\" stroke=\"#34d399\" stroke-width=\"1.5\"/>\n  <text class=\"text-accent-green\" x=\"505\" y=\"78\" fill=\"#34d399\" font-size=\"10.5\" font-weight=\"700\" text-anchor=\"middle\">METODOLOGI AUDIT SISTEM INFORMASI</text>\n  <line class=\"svg-divider\" x1=\"370\" y1=\"88\" x2=\"640\" y2=\"88\" stroke=\"#334155\"/>\n\n  <rect class=\"svg-subcard\" x=\"375\" y=\"96\" width=\"260\" height=\"38\" rx=\"4\" fill=\"#0f172a\" stroke=\"#f43f5e\"/>\n  <text class=\"text-accent-red\" x=\"505\" y=\"112\" fill=\"#f87171\" font-size=\"8\" font-weight=\"700\" text-anchor=\"middle\">Audit Around the Computer (Black-Box)</text>\n  <text class=\"svg-muted\" x=\"505\" y=\"126\" fill=\"#94a3b8\" font-size=\"7.5\" text-anchor=\"middle\">Cek input vs output tanpa menguji logika program internal</text>\n\n  <rect class=\"svg-subcard\" x=\"375\" y=\"140\" width=\"260\" height=\"78\" rx=\"4\" fill=\"#0f172a\" stroke=\"#10b981\"/>\n  <text class=\"text-accent-green\" x=\"505\" y=\"156\" fill=\"#34d399\" font-size=\"8\" font-weight=\"700\" text-anchor=\"middle\">Audit Through the Computer (White-Box / CAATs)</text>\n  <text class=\"svg-text\" x=\"505\" y=\"170\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">&#8226; Test Data Method: Uji data dummy ke software live</text>\n  <text class=\"svg-text\" x=\"505\" y=\"184\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">&#8226; Integrated Test Facility (ITF): Uji modul fiktif terisolasi</text>\n  <text class=\"svg-text\" x=\"505\" y=\"198\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">&#8226; Embedded Audit Module (EAM): Audit real-time kontinyu</text>\n  <text class=\"text-accent-green\" x=\"505\" y=\"212\" fill=\"#34d399\" font-size=\"7\" font-weight=\"600\" text-anchor=\"middle\">&#10003; Menilai Integritas Kontrol Logika Software Langsung</text>\n</svg>"
},
    {
      "kind": "h2",
      "text": "General IT Controls (GITC) vs Application Controls"
    },
    {
      "kind": "p",
      "text": "Dalam audit sistem informasi, pengendalian TI dibagi menjadi dua tingkatan hierarki yang saling melengkapi:"
    },
    {
      "kind": "ul",
      "items": [
        "General IT Controls (GITC): Pengendalian menyeluruh yang berlaku untuk seluruh lingkungan sistem informasi perusahaan. Jika GITC lemah, auditor TIDAK DAPAT mengandalkan Application Controls apa pun. GITC mencakup: Manajemen Akses Pengguna (User Access), Manajemen Perubahan Program (Change Management), Operasi Komputer & Backup, dan Tata Kelola Keamanan Siber.",
        "Application Controls: Pengendalian otomatis yang tertanam di dalam modul aplikasi perangkat lunak tertentu untuk memastikan integritas pemrosesan transaksi. Terdiri dari: Input Controls (misal: Field Check, Validity Check, Range Check, Limit Check), Processing Controls (misal: Run-to-Run Totals), dan Output Controls (misal: Spooling Reconciliation)."
      ]
    },
    {
      "kind": "table",
      "caption": "Tabel 10.1: Jenis Pengendalian Masukan Aplikasi (Input Controls) dalam SIA",
      "headers": [
        "Nama Pengendalian",
        "Aturan Logika",
        "Contoh Kasus Kesalahan yang Dicegah"
      ],
      "rows": [
        [
          "Field Check / Type Check",
          "Memastikan karakter yang dimasukkan memiliki tipe data yang benar.",
          "Mencegah entri huruf pada kolom 'Jumlah Pembayaran'."
        ],
        [
          "Sign Check",
          "Memeriksa tanda aritmatika (positif/negatif) apakah logis.",
          "Mencegah entri kuantitas jam kerja bernilai negatif."
        ],
        [
          "Limit Check & Range Check",
          "Memastikan nilai berada di bawah batas tertentu atau dalam rentang yang wajar.",
          "Menolak entri jam lembur > 20 jam per minggu atau nilai gaji < UMR."
        ],
        [
          "Completeness Check",
          "Memastikan tidak ada field wajib yang dibiarkan kosong.",
          "Menolak menyimpan faktur jika nomor NPWP pelanggan belum diisi."
        ],
        [
          "Validity Check",
          "Mencocokkan nilai input dengan data master yang valid.",
          "Menolak entri transaksi untuk Kode Akun yang tidak terdaftar di Bagan Akun (COA)."
        ],
        [
          "Check Digit Verification",
          "Menghitung angka penguji matematis pada digit terakhir nomor identifikasi.",
          "Mencegah salah ketik nomor rekening bank atau nomor kartu kredit."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Metodologi Audit SI: Around the Computer vs Through the Computer"
    },
    {
      "kind": "table",
      "caption": "Tabel 10.2: Perbandingan Pendekatan Audit Sistem Informasi",
      "headers": [
        "Dimensi",
        "Audit Around the Computer (Black Box)",
        "Audit Through the Computer (White Box)"
      ],
      "rows": [
        [
          "Fokus Audit",
          "Mencocokkan input fisik (dokumen sumber) langsung dengan output laporan tanpa menguji logika program.",
          "Menguji integritas logika program, algoritma penghitungan, dan pengendalian otomatis di dalam software."
        ],
        [
          "Kapan Digunakan?",
          "Sistem sederhana, volume transaksi rendah, jejak audit (audit trail) fisik tersedia lengkap.",
          "Sistem kompleks, transaksi real-time tanpa kertas (paperless), pemrosesan cloud ERP berskala besar."
        ],
        [
          "Risiko Utama",
          "Tidak mendeteksi kecurangan logika program yang disisipkan programmer (misal: Salami Fraud yang memotong sisa desimal sen).",
          "Membutuhkan keahlian teknis auditor yang tinggi dan perangkat lunak audit khusus (CAATs)."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Teknik Audit Berbantuan Komputer (CAATs)"
    },
    {
      "kind": "ul",
      "items": [
        "Test Data Approach: Auditor memasukkan data dummy (termasuk data salah seperti limit kredit minus) ke dalam sistem klien untuk melihat apakah sistem bereaksi menolak transaksi tersebut.",
        "Integrated Test Facility (ITF): Auditor membuat 'entitas/divisi fiktif' di dalam sistem operasional nyata klien dan memproses transaksi uji bersamaan dengan transaksi nyata tanpa mengganggu laporan konsolidasi.",
        "Parallel Simulation: Auditor menulis program independen yang meniru logika perhitungan klien, lalu memasukkan data transaksi nyata klien ke kedua program untuk membandingkan apakah hasilnya 100% identik."
      ]
    },
    {
      "kind": "callout",
      "variant": "tip",
      "title": "Pemisahan Tugas Wajib di Departemen TI",
      "text": "Programmer/Developer DILARANG KERAS memiliki akses ke lingkungan produksi (Live System). Program yang dibuat oleh Developer harus diuji oleh tim QA independen, disetujui oleh Manajemen Bisnis, dan dideploy ke server produksi HANYA oleh Operator/System Administrator."
    }
  ]
},
  11: {
  "tm": 11,
  "title": "Analitika Data Akuntansi (Accounting Data Analytics) & Visualisasi Bisnis",
  "ref": "Richardson et al. AIS 4e · Ch. 13",
  "intro": "Mempelajari integrasi Big Data dalam akuntansi melalui IMPACT Model. Membedakan empat tingkat analitika data (Deskriptif, Diagnostik, Prediktif, Preskriptif) dan teknik Audit Data Analytics (ADA) untuk pengujian 100% populasi buku besar.",
  "objectives": [
    "Menjelaskan karakteristik Big Data dalam konteks akuntansi (Volume, Velocity, Variety, Veracity, Value).",
    "Menguasai siklus pemecahan masalah IMPACT Model dalam proyek analitika data akuntansi.",
    "Mengklasifikasikan empat tingkatan analitika: Descriptive, Diagnostic, Predictive, dan Prescriptive.",
    "Menerapkan teknik Audit Data Analytics (ADA) untuk mendeteksi transaksi janggal, Benford's Law, dan outlier.",
    "Merancang dashboard visualisasi keuangan yang efektif (PowerBI/Tableau) sesuai prinsip integritas visual."
  ],
  "blocks": [
      {
        "kind": "figure",
        "caption": "Gambar 11.1: Siklus Analitika Data Akuntansi Model IMPACT dari Identifikasi Masalah hingga Tracking.",
        "svg": "<svg class=\"course-diagram-svg\" viewBox=\"0 0 680 250\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif\">\n  <rect class=\"svg-bg\" x=\"10\" y=\"10\" width=\"660\" height=\"230\" rx=\"12\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect class=\"svg-header\" x=\"10\" y=\"10\" width=\"660\" height=\"38\" rx=\"12\" fill=\"#1e293b\" fill-opacity=\"0.6\"/>\n  <line class=\"svg-divider\" x1=\"10\" y1=\"48\" x2=\"670\" y2=\"48\" stroke=\"#334155\" stroke-width=\"1\"/>\n  <text class=\"svg-title text-accent-blue\" x=\"340\" y=\"34\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">ANALITIKA DATA AKUNTANSI: SIKLUS KERANGKA KERJA IMPACT</text>\n\n  <!-- 6 Steps of IMPACT horizontally -->\n  <!-- I -->\n  <rect class=\"svg-card\" x=\"25\" y=\"58\" width=\"95\" height=\"170\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n  <text class=\"text-accent-blue\" x=\"72\" y=\"78\" fill=\"#38bdf8\" font-size=\"9.5\" font-weight=\"800\" text-anchor=\"middle\">1. IDENTIFY</text>\n  <line class=\"svg-divider\" x1=\"35\" y1=\"88\" x2=\"110\" y2=\"88\" stroke=\"#334155\"/>\n  <text class=\"svg-text\" x=\"72\" y=\"106\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">Identifikasi Masalah</text>\n  <text class=\"svg-text\" x=\"72\" y=\"120\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">&amp; Pertanyaan</text>\n  <text class=\"svg-text\" x=\"72\" y=\"134\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">Bisnis Strategis</text>\n  <rect class=\"svg-subcard\" x=\"32\" y=\"150\" width=\"81\" height=\"66\" rx=\"4\" fill=\"#0f172a\" stroke=\"#0284c7\"/>\n  <text class=\"text-accent-blue\" x=\"72\" y=\"170\" fill=\"#38bdf8\" font-size=\"7\" font-weight=\"700\" text-anchor=\"middle\">Contoh:</text>\n  <text class=\"svg-muted\" x=\"72\" y=\"186\" fill=\"#94a3b8\" font-size=\"6.5\" text-anchor=\"middle\">Kenapa piutang</text>\n  <text class=\"svg-muted\" x=\"72\" y=\"198\" fill=\"#94a3b8\" font-size=\"6.5\" text-anchor=\"middle\">macet melonjak?</text>\n\n  <!-- M -->\n  <rect class=\"svg-card\" x=\"130\" y=\"58\" width=\"95\" height=\"170\" rx=\"6\" fill=\"#1e293b\" stroke=\"#34d399\" stroke-width=\"1.5\"/>\n  <text class=\"text-accent-green\" x=\"177\" y=\"78\" fill=\"#34d399\" font-size=\"9.5\" font-weight=\"800\" text-anchor=\"middle\">2. MASTER</text>\n  <line class=\"svg-divider\" x1=\"140\" y1=\"88\" x2=\"215\" y2=\"88\" stroke=\"#334155\"/>\n  <text class=\"svg-text\" x=\"177\" y=\"106\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">Penguasaan Data</text>\n  <text class=\"svg-text\" x=\"177\" y=\"120\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">(Extract, Transform,</text>\n  <text class=\"svg-text\" x=\"177\" y=\"134\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">Load / ETL)</text>\n  <rect class=\"svg-subcard\" x=\"137\" y=\"150\" width=\"81\" height=\"66\" rx=\"4\" fill=\"#0f172a\" stroke=\"#10b981\"/>\n  <text class=\"text-accent-green\" x=\"177\" y=\"170\" fill=\"#34d399\" font-size=\"7\" font-weight=\"700\" text-anchor=\"middle\">Contoh:</text>\n  <text class=\"svg-muted\" x=\"177\" y=\"186\" fill=\"#94a3b8\" font-size=\"6.5\" text-anchor=\"middle\">Ekstrak tabel ERP</text>\n  <text class=\"svg-muted\" x=\"177\" y=\"198\" fill=\"#94a3b8\" font-size=\"6.5\" text-anchor=\"middle\">Pembersihan data</text>\n\n  <!-- P -->\n  <rect class=\"svg-card\" x=\"235\" y=\"58\" width=\"95\" height=\"170\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n  <text class=\"text-accent-amber\" x=\"282\" y=\"78\" fill=\"#fbbf24\" font-size=\"9.5\" font-weight=\"800\" text-anchor=\"middle\">3. PERFORM</text>\n  <line class=\"svg-divider\" x1=\"245\" y1=\"88\" x2=\"320\" y2=\"88\" stroke=\"#334155\"/>\n  <text class=\"svg-text\" x=\"282\" y=\"106\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">Eksekusi Uji &amp;</text>\n  <text class=\"svg-text\" x=\"282\" y=\"120\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">Model Analitika</text>\n  <text class=\"svg-text\" x=\"282\" y=\"134\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">(4 Tingkatan Data)</text>\n  <rect class=\"svg-subcard\" x=\"242\" y=\"150\" width=\"81\" height=\"66\" rx=\"4\" fill=\"#0f172a\" stroke=\"#d97706\"/>\n  <text class=\"text-accent-amber\" x=\"282\" y=\"170\" fill=\"#fbbf24\" font-size=\"7\" font-weight=\"700\" text-anchor=\"middle\">Model:</text>\n  <text class=\"svg-muted\" x=\"282\" y=\"186\" fill=\"#94a3b8\" font-size=\"6.5\" text-anchor=\"middle\">Deskriptif &#8594; Prediktif</text>\n  <text class=\"svg-muted\" x=\"282\" y=\"198\" fill=\"#94a3b8\" font-size=\"6.5\" text-anchor=\"middle\">Regresi &amp; Klastering</text>\n\n  <!-- A -->\n  <rect class=\"svg-card\" x=\"340\" y=\"58\" width=\"95\" height=\"170\" rx=\"6\" fill=\"#1e293b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/>\n  <text class=\"text-accent-purple\" x=\"387\" y=\"78\" fill=\"#a78bfa\" font-size=\"9.5\" font-weight=\"800\" text-anchor=\"middle\">4. ADDRESS</text>\n  <line class=\"svg-divider\" x1=\"350\" y1=\"88\" x2=\"425\" y2=\"88\" stroke=\"#334155\"/>\n  <text class=\"svg-text\" x=\"387\" y=\"106\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">Interpretasi Hasil</text>\n  <text class=\"svg-text\" x=\"387\" y=\"120\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">&amp; Evaluasi Anomali</text>\n  <text class=\"svg-text\" x=\"387\" y=\"134\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">Temuan Data</text>\n  <rect class=\"svg-subcard\" x=\"347\" y=\"150\" width=\"81\" height=\"66\" rx=\"4\" fill=\"#0f172a\" stroke=\"#7c3aed\"/>\n  <text class=\"text-accent-purple\" x=\"387\" y=\"170\" fill=\"#a78bfa\" font-size=\"7\" font-weight=\"700\" text-anchor=\"middle\">Fokus:</text>\n  <text class=\"svg-muted\" x=\"387\" y=\"186\" fill=\"#94a3b8\" font-size=\"6.5\" text-anchor=\"middle\">Hukum Benford</text>\n  <text class=\"svg-muted\" x=\"387\" y=\"198\" fill=\"#94a3b8\" font-size=\"6.5\" text-anchor=\"middle\">Deteksi Outlier Fraud</text>\n\n  <!-- C -->\n  <rect class=\"svg-card\" x=\"445\" y=\"58\" width=\"105\" height=\"170\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n  <text class=\"text-accent-blue\" x=\"497\" y=\"78\" fill=\"#38bdf8\" font-size=\"9.5\" font-weight=\"800\" text-anchor=\"middle\">5. COMMUNICATE</text>\n  <line class=\"svg-divider\" x1=\"455\" y1=\"88\" x2=\"540\" y2=\"88\" stroke=\"#334155\"/>\n  <text class=\"svg-text\" x=\"497\" y=\"106\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">Visualisasi Data</text>\n  <text class=\"svg-text\" x=\"497\" y=\"120\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">&amp; Dashboard</text>\n  <text class=\"svg-text\" x=\"497\" y=\"134\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">Keputusan Manajemen</text>\n  <rect class=\"svg-subcard\" x=\"452\" y=\"150\" width=\"91\" height=\"66\" rx=\"4\" fill=\"#0f172a\" stroke=\"#0284c7\"/>\n  <text class=\"text-accent-blue\" x=\"497\" y=\"170\" fill=\"#38bdf8\" font-size=\"7\" font-weight=\"700\" text-anchor=\"middle\">Media:</text>\n  <text class=\"svg-muted\" x=\"497\" y=\"186\" fill=\"#94a3b8\" font-size=\"6.5\" text-anchor=\"middle\">Power BI / Tableau</text>\n  <text class=\"svg-muted\" x=\"497\" y=\"198\" fill=\"#94a3b8\" font-size=\"6.5\" text-anchor=\"middle\">Grafik Interaktif</text>\n\n  <!-- T -->\n  <rect class=\"svg-card\" x=\"560\" y=\"58\" width=\"95\" height=\"170\" rx=\"6\" fill=\"#1e293b\" stroke=\"#34d399\" stroke-width=\"1.5\"/>\n  <text class=\"text-accent-green\" x=\"607\" y=\"78\" fill=\"#34d399\" font-size=\"9.5\" font-weight=\"800\" text-anchor=\"middle\">6. TRACK</text>\n  <line class=\"svg-divider\" x1=\"570\" y1=\"88\" x2=\"645\" y2=\"88\" stroke=\"#334155\"/>\n  <text class=\"svg-text\" x=\"607\" y=\"106\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">Pemantauan KPI</text>\n  <text class=\"svg-text\" x=\"607\" y=\"120\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">Berkelanjutan</text>\n  <text class=\"svg-text\" x=\"607\" y=\"134\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">&amp; Model Drift</text>\n  <rect class=\"svg-subcard\" x=\"567\" y=\"150\" width=\"81\" height=\"66\" rx=\"4\" fill=\"#0f172a\" stroke=\"#10b981\"/>\n  <text class=\"text-accent-green\" x=\"607\" y=\"170\" fill=\"#34d399\" font-size=\"7\" font-weight=\"700\" text-anchor=\"middle\">Output:</text>\n  <text class=\"svg-muted\" x=\"607\" y=\"186\" fill=\"#94a3b8\" font-size=\"6.5\" text-anchor=\"middle\">Continuous Audit</text>\n  <text class=\"svg-muted\" x=\"607\" y=\"198\" fill=\"#94a3b8\" font-size=\"6.5\" text-anchor=\"middle\">Pembaruan Algoritma</text>\n</svg>"
},
    {
      "kind": "h2",
      "text": "Model Analitika Data: Kerangka Kerja IMPACT"
    },
    {
      "kind": "p",
      "text": "IMPACT Model adalah metodologi standar industri untuk menjalankan proyek analitika data akuntansi dan audit:"
    },
    {
      "kind": "ul",
      "items": [
        "I - Identify the questions: Rumuskan pertanyaan bisnis yang jelas (misal: 'Faktur vendor mana yang dibayar dua kali dalam setahun terakhir?').",
        "M - Master the data: Ekstrak, bersihkan, dan validasi data (ETL - Extract, Transform, Load) dari berbagai database.",
        "P - Perform the test plan: Terapkan model analisis yang sesuai (clustering, regresi, deteksi anomali).",
        "A - Address and refine results: Evaluasi hasil temuan, singkirkan false positive, dan pertajam analisis.",
        "C - Communicate insights: Sajikan temuan dalam bentuk visualisasi interaktif (dashboard) yang mudah dipahami direksi.",
        "T - Track outcomes: Pantau efektivitas rekomendasi dan otomatisasi pemantauan transaksi berkelanjutan (Continuous Monitoring)."
      ]
    },
    {
      "kind": "h2",
      "text": "Empat Tingkatan Analitika Data Akuntansi"
    },
    {
      "kind": "table",
      "caption": "Tabel 11.1: Taksonomi Analitika Data Akuntansi",
      "headers": [
        "Tingkatan Analitika",
        "Pertanyaan Inti",
        "Contoh Kasus Akuntansi Manajemen",
        "Contoh Kasus Audit"
      ],
      "rows": [
        [
          "Descriptive Analytics",
          "Apa yang telah terjadi? (What happened?)",
          "Laporan ringkasan penjualan per wilayah, analisis rasio likuiditas historis.",
          "Tabel profil umur piutang (Aging Schedule), total pengeluaran kas tahun berjalan."
        ],
        [
          "Diagnostic Analytics",
          "Mengapa hal itu terjadi? (Why did it happen?)",
          "Analisis varians biaya bahan baku aktual vs standar, drill-down penyebab lonjakan retur.",
          "Deteksi transaksi akhir pekan/hari libur, pemindaian nomor cek yang melompat (gap detection)."
        ],
        [
          "Predictive Analytics",
          "Apa yang kemungkinan akan terjadi? (What is likely to happen?)",
          "Peramalan arus kas 6 bulan ke depan menggunakan time-series, estimasi probabilitas kebangkrutan (Altman Z-Score).",
          "Model klasifikasi machine learning untuk memprediksi risiko kegagalan bayar debitur."
        ],
        [
          "Prescriptive Analytics",
          "Tindakan apa yang sebaiknya diambil? (What should we do?)",
          "Optimasi rute distribusi logistik untuk meminimalkan biaya bahan bakar, penetapan harga dinamis (dynamic pricing).",
          "Sistem rekomendasi otomatis untuk membekukan akun vendor yang memiliki anomali skor risiko tinggi."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Teknik Audit Data Analytics (ADA): Hukum Benford & Deteksi Anomali"
    },
    {
      "kind": "p",
      "text": "Dalam audit tradisional, auditor hanya memeriksa sampel 25-50 transaksi. Dengan ADA, auditor menguji 100% populasi transaksi buku besar (General Ledger) menggunakan query otomatis:"
    },
    {
      "kind": "ul",
      "items": [
        "Hukum Benford (Benford's Law): Teori probabilitas yang menyatakan bahwa dalam data angka alami, digit pertama angka 1 muncul sebesar 30.1%, angka 2 sebesar 17.6%, hingga angka 9 hanya 4.6%. Jika distribusi digit pertama pada faktur klaim pengeluaran staf menyimpang drastis dari kurva Benford, ini indikator kuat manipulasi angka atau pemalsuan kuitansi.",
        "Pencarian Angka Bulat (Round Number Bias): Menemukan konsentrasi transaksi pengeluaran kas dengan angka bulat mencurigakan (misal: Rp 49.999.000) tepat di bawah batas plafon otorisasi Rp 50.000.000 (threshold-skimming).",
        "Pencocokan Duplikasi Fuzzy (Fuzzy Matching): Mendeteksi pembayaran ganda ke vendor yang sama di mana nama vendor diketik sedikit berbeda (misal: 'PT Sumber Makmur' vs 'PT. Sumber Makmur TBK')."
      ]
    },
    {
      "kind": "callout",
      "variant": "tip",
      "title": "Prinsip Visualisasi Data",
      "text": "Hindari penggunaan 3D Pie Chart yang mendistorsi persepsi proporsi pembaca. Gunakan Bar Chart horizontal untuk membandingkan kategori, Line Chart untuk tren waktu, dan Scatter Plot untuk melihat korelasi dan outlier."
    }
  ]
},
  12: {
  "tm": 12,
  "title": "Otomasi Proses Robotik (RPA) & Kecerdasan Buatan (AI) dalam Akuntansi",
  "ref": "Richardson et al. AIS 4e · Ch. 14",
  "intro": "Mempelajari pemanfaatan Robotic Process Automation (RPA) dan Artificial Intelligence (Machine Learning, NLP, Generative AI) dalam mengotomatisasi pekerjaan akuntansi repetitif seperti rekonsiliasi bank, pemrosesan faktur OCR, dan deteksi anomali jurnal.",
  "objectives": [
    "Mengidentifikasi kriteria proses bisnis akuntansi yang cocok diotomatisasi dengan RPA.",
    "Menganalisis arsitektur bot RPA dan integrasinya dengan aplikasi ERP tanpa mengubah kode backend.",
    "Menjelaskan pemanfaatan Optical Character Recognition (OCR) dan Natural Language Processing (NLP) pada dokumen keuangan.",
    "Memahami tata kelola bot (Bot Governance), pemisahan tugas identitas bot, dan audit trail otomasi.",
    "Mengevaluasi etika dan dampak kecerdasan buatan terhadap masa depan profesi akuntan."
  ],
  "blocks": [
      {
        "kind": "figure",
        "caption": "Gambar 12.1: Transformasi Efisiensi Akuntansi melalui Robotic Process Automation (RPA) dan Artificial Intelligence.",
        "svg": "<svg class=\"course-diagram-svg\" viewBox=\"0 0 680 250\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif\">\n  <rect class=\"svg-bg\" x=\"10\" y=\"10\" width=\"660\" height=\"230\" rx=\"12\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect class=\"svg-header\" x=\"10\" y=\"10\" width=\"660\" height=\"38\" rx=\"12\" fill=\"#1e293b\" fill-opacity=\"0.6\"/>\n  <line class=\"svg-divider\" x1=\"10\" y1=\"48\" x2=\"670\" y2=\"48\" stroke=\"#334155\" stroke-width=\"1\"/>\n  <text class=\"svg-title text-accent-green\" x=\"340\" y=\"34\" fill=\"#34d399\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">OTOMASI PROSES ROBOTIK (RPA) &amp; KECERDASAN BUATAN (AI) AKUNTANSI</text>\n\n  <!-- Left: Manual Bottleneck -->\n  <rect class=\"svg-card\" x=\"30\" y=\"58\" width=\"180\" height=\"170\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f43f5e\" stroke-width=\"1.5\"/>\n  <text class=\"text-accent-red\" x=\"120\" y=\"78\" fill=\"#f87171\" font-size=\"10\" font-weight=\"700\" text-anchor=\"middle\">PROSES MANUAL LAMA</text>\n  <line class=\"svg-divider\" x1=\"40\" y1=\"88\" x2=\"200\" y2=\"88\" stroke=\"#334155\"/>\n  <text class=\"svg-text\" x=\"120\" y=\"108\" fill=\"#cbd5e1\" font-size=\"8\" text-anchor=\"middle\">&#10007; Entri data berulang (Rekeying)</text>\n  <text class=\"svg-text\" x=\"120\" y=\"124\" fill=\"#cbd5e1\" font-size=\"8\" text-anchor=\"middle\">&#10007; Rentan salah ketik (Typo error)</text>\n  <text class=\"svg-text\" x=\"120\" y=\"140\" fill=\"#cbd5e1\" font-size=\"8\" text-anchor=\"middle\">&#10007; Waktu tutup buku bulanan lama</text>\n  <text class=\"svg-text\" x=\"120\" y=\"156\" fill=\"#cbd5e1\" font-size=\"8\" text-anchor=\"middle\">&#10007; Biaya lembur staf akuntansi</text>\n  <rect class=\"svg-subcard\" x=\"40\" y=\"172\" width=\"160\" height=\"42\" rx=\"4\" fill=\"#0f172a\" stroke=\"#f43f5e\"/>\n  <text class=\"text-accent-red\" x=\"120\" y=\"190\" fill=\"#f87171\" font-size=\"8\" font-weight=\"700\" text-anchor=\"middle\">Titik Lemah Efisiensi:</text>\n  <text class=\"svg-muted\" x=\"120\" y=\"204\" fill=\"#94a3b8\" font-size=\"7.5\" text-anchor=\"middle\">Karyawan terjebak pekerjaan klerikal</text>\n\n  <!-- Arrow -->\n  <text class=\"text-accent-green\" x=\"230\" y=\"145\" fill=\"#34d399\" font-size=\"20\" font-weight=\"800\" text-anchor=\"middle\">&#8594;</text>\n\n  <!-- Middle: RPA Engine -->\n  <rect class=\"svg-card\" x=\"250\" y=\"58\" width=\"220\" height=\"170\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n  <text class=\"text-accent-blue\" x=\"360\" y=\"78\" fill=\"#38bdf8\" font-size=\"10.5\" font-weight=\"700\" text-anchor=\"middle\">RPA BOT (RULE-BASED)</text>\n  <line class=\"svg-divider\" x1=\"260\" y1=\"88\" x2=\"460\" y2=\"88\" stroke=\"#334155\"/>\n  <text class=\"svg-text\" x=\"360\" y=\"108\" fill=\"#cbd5e1\" font-size=\"8\" text-anchor=\"middle\">&#10003; Baca e-statement bank via API</text>\n  <text class=\"svg-text\" x=\"360\" y=\"124\" fill=\"#cbd5e1\" font-size=\"8\" text-anchor=\"middle\">&#10003; Cocokkan mutasi vs buku besar</text>\n  <text class=\"svg-text\" x=\"360\" y=\"140\" fill=\"#cbd5e1\" font-size=\"8\" text-anchor=\"middle\">&#10003; Posting jurnal kliring otomatis</text>\n  <text class=\"svg-text\" x=\"360\" y=\"156\" fill=\"#cbd5e1\" font-size=\"8\" text-anchor=\"middle\">&#10003; Bekerja 24/7 dengan 0% human error</text>\n  <rect class=\"svg-subcard\" x=\"260\" y=\"172\" width=\"200\" height=\"42\" rx=\"4\" fill=\"#0f172a\" stroke=\"#0284c7\"/>\n  <text class=\"text-accent-blue\" x=\"360\" y=\"190\" fill=\"#38bdf8\" font-size=\"8\" font-weight=\"700\" text-anchor=\"middle\">Karakteristik RPA:</text>\n  <text class=\"svg-muted\" x=\"360\" y=\"204\" fill=\"#94a3b8\" font-size=\"7.5\" text-anchor=\"middle\">Struktur data jelas, aturan pasti (if-then)</text>\n\n  <!-- Arrow -->\n  <text class=\"text-accent-purple\" x=\"490\" y=\"145\" fill=\"#a855f7\" font-size=\"20\" font-weight=\"800\" text-anchor=\"middle\">&#8594;</text>\n\n  <!-- Right: Cognitive AI -->\n  <rect class=\"svg-card\" x=\"510\" y=\"58\" width=\"140\" height=\"170\" rx=\"8\" fill=\"#1e293b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/>\n  <text class=\"text-accent-purple\" x=\"580\" y=\"78\" fill=\"#a78bfa\" font-size=\"10\" font-weight=\"700\" text-anchor=\"middle\">AI &amp; MACHINE LEARNING</text>\n  <line class=\"svg-divider\" x1=\"520\" y1=\"88\" x2=\"640\" y2=\"88\" stroke=\"#334155\"/>\n  <text class=\"svg-text\" x=\"580\" y=\"108\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">OCR Ekstrak Faktur</text>\n  <text class=\"svg-text\" x=\"580\" y=\"124\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">Prediksi Piutang Macet</text>\n  <text class=\"svg-text\" x=\"580\" y=\"140\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">Deteksi Fraud Anomali</text>\n  <text class=\"svg-text\" x=\"580\" y=\"156\" fill=\"#cbd5e1\" font-size=\"7.5\" text-anchor=\"middle\">Analisis Tren Strategis</text>\n  <rect class=\"svg-subcard\" x=\"520\" y=\"172\" width=\"120\" height=\"42\" rx=\"4\" fill=\"#0f172a\" stroke=\"#7c3aed\"/>\n  <text class=\"text-accent-purple\" x=\"580\" y=\"190\" fill=\"#a78bfa\" font-size=\"7.5\" font-weight=\"700\" text-anchor=\"middle\">Peran Baru Akuntan:</text>\n  <text class=\"text-accent-green\" x=\"580\" y=\"204\" fill=\"#34d399\" font-size=\"7\" font-weight=\"600\" text-anchor=\"middle\">Analis Bisnis &amp; Advisor</text>\n</svg>"
},
    {
      "kind": "h2",
      "text": "Kriteria Kelayakan Otomasi Menggunakan RPA"
    },
    {
      "kind": "p",
      "text": "Robotic Process Automation (RPA) adalah perangkat lunak 'bot' yang meniru tindakan manusia dalam berinteraksi dengan antarmuka pengguna (UI) komputer untuk menyelesaikan pekerjaan bervolume tinggi. Tidak semua proses akuntansi cocok untuk RPA. Proses ideal wajib memenuhi lima syarat berikut:"
    },
    {
      "kind": "ul",
      "items": [
        "1. Rule-based (Berbasis Aturan Baku): Logika keputusan transparan dan tidak membutuhkan pertimbangan subjektif manusia (judgment). Contoh: 'Jika nomor akun cocok dan nominal sama, tandai cocok'.",
        "2. High Volume & Repetitive: Tugas dikerjakan berulang kali dalam frekuensi tinggi (ratusan hingga ribuan kali per hari).",
        "3. Digital & Structured Input: Data masukan berupa format digital terstruktur (seperti spreadsheet Excel, database SQL, atau file CSV/XML).",
        "4. Low Exception Rate: Tingkat pengecualian (kejadian aneh di luar SOP) rendah (< 5%).",
        "5. Stable Process: Prosedur operasional dan tata letak aplikasi stabil dan tidak sering berubah."
      ]
    },
    {
      "kind": "h2",
      "text": "Studi Kasus RPA: Rekonsiliasi Bank Otomatis di PT Mitra Logistik"
    },
    {
      "kind": "p",
      "text": "Sebelum Otomasi: Tiga staf akuntansi menghabiskan 4 jam setiap pagi untuk mengunduh rekening koran dari internet banking, membuka file buku besar bank, dan mencocokkan nomor referensi secara manual satu per satu."
    },
    {
      "kind": "p",
      "text": "Alur Kerja Bot RPA Terotomatisasi:"
    },
    {
      "kind": "ul",
      "items": [
        "Pukul 02.00: Bot login otomatis ke portal internet banking menggunakan kredensial aman (Credential Vault), mengunduh mutasi rekening dalam format CSV.",
        "Pukul 02.15: Bot mengekstrak data jurnal penerimaan dan pengeluaran kas dari modul SAP FI.",
        "Pukul 02.30: Bot mencocokkan transaksi berdasarkan kombinasi: Nomor Referensi + Tanggal (+/- 2 hari) + Nilai Nominal Persis.",
        "Pukul 02.45: Untuk transaksi yang 100% cocok (match), bot langsung menjurnal clearing di SAP.",
        "Pukul 03.00: Untuk transaksi selisih (unmatched exceptions), bot menyusun laporan pengecualian (Exception Report) dan mengirimkannya via email kepada Manajer Akuntansi untuk ditindaklanjuti manusia pada pukul 08.00 pagi."
      ]
    },
    {
      "kind": "table",
      "caption": "Tabel 12.1: Perbandingan Peran Akuntan: Tradisional vs Era AI/RPA",
      "headers": [
        "Aktivitas Akuntansi",
        "Metode Konvensional",
        "Era AI & Otomasi"
      ],
      "rows": [
        [
          "Input Faktur Vendor",
          "Mengetik manual nomor faktur, tanggal, dan nominal item per item.",
          "Intelligent Document Processing (IDP/OCR) memindai PDF faktur dan mengisi field ERP otomatis."
        ],
        [
          "Rekonsiliasi Bank",
          "Pencocokan manual manual baris demi baris menggunakan pulpen stabilo.",
          "Bot RPA mencocokkan 95% transaksi otomatis; manusia hanya menangani 5% sisa pengecualian."
        ],
        [
          "Pendeteksian Fraud",
          "Pemeriksaan acak berdasarkan sampel audit tahunan.",
          "Machine learning memantau 100% aliran transaksi real-time dan memberikan peringatan fraud seketika."
        ],
        [
          "Fokus Nilai Tambah",
          "Pencatatan data klerikal (Data Processing).",
          "Interpretasi wawasan strategis, penilaian risiko, dan pengambilan keputusan (Decision Support)."
        ]
      ]
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Tata Kelola Bot (Bot Governance)",
      "text": "Bot RPA harus memiliki Identitas Pengguna (User ID) unik yang terpisah dari akun manusia. Dilarang keras menggunakan akun karyawan untuk menjalankan bot! Setiap tindakan bot wajib tercatat di audit trail sistem untuk akuntabilitas hukum."
    }
  ]
},
  13: {
  "tm": 13,
  "title": "Teknologi Blockchain, Smart Contracts & Akuntansi Tiga Entri (Triple-Entry Accounting)",
  "ref": "Richardson et al. AIS 4e · Ch. 15",
  "intro": "Membahas disrupsi teknologi Distributed Ledger Technology (DLT) dan Blockchain terhadap sistem akuntansi. Memahami arsitektur blok, kriptografi hash, konsensus, Smart Contracts, evolusi menuju Triple-Entry Accounting, serta audit atas aset digital.",
  "objectives": [
    "Menjelaskan karakteristik dasar Blockchain: Desentralisasi, Immutability, Transparansi, dan Kriptografi Hash.",
    "Membedakan jaringan Public Blockchain (Permissionless) vs Private/Consortium Blockchain (Permissioned).",
    "Memahami konsep Triple-Entry Accounting dan dampaknya terhadap otomatisasi verifikasi audit.",
    "Menganalisis mekanisme kerja Smart Contracts dalam otomatisasi siklus pendapatan dan pengeluaran.",
    "Mengevaluasi tantangan audit aset kripto dan kepatuhan standar akuntansi (PSAK/IFRS terkait aset takberwujud)."
  ],
  "blocks": [
      {
        "kind": "figure",
        "caption": "Gambar 13.1: Struktur Rantai Blok (Blockchain) dan Paradigma Akuntansi Tiga Entri (Triple-Entry Accounting).",
        "svg": "<svg class=\"course-diagram-svg\" viewBox=\"0 0 680 250\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif\">\n  <rect class=\"svg-bg\" x=\"10\" y=\"10\" width=\"660\" height=\"230\" rx=\"12\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect class=\"svg-header\" x=\"10\" y=\"10\" width=\"660\" height=\"38\" rx=\"12\" fill=\"#1e293b\" fill-opacity=\"0.6\"/>\n  <line class=\"svg-divider\" x1=\"10\" y1=\"48\" x2=\"670\" y2=\"48\" stroke=\"#334155\" stroke-width=\"1\"/>\n  <text class=\"svg-title text-accent-amber\" x=\"340\" y=\"34\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">TEKNOLOGI BLOCKCHAIN &amp; PARADIGMA TRIPLE-ENTRY ACCOUNTING</text>\n\n  <!-- Evolution of Bookkeeping Box -->\n  <rect class=\"svg-card\" x=\"25\" y=\"58\" width=\"180\" height=\"170\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n  <text class=\"text-accent-blue\" x=\"115\" y=\"78\" fill=\"#38bdf8\" font-size=\"10\" font-weight=\"700\" text-anchor=\"middle\">EVOLUSI TATA BUKU</text>\n  <line class=\"svg-divider\" x1=\"35\" y1=\"88\" x2=\"195\" y2=\"88\" stroke=\"#334155\"/>\n  \n  <rect class=\"svg-subcard\" x=\"35\" y=\"96\" width=\"160\" height=\"34\" rx=\"4\" fill=\"#0f172a\" stroke=\"#334155\"/>\n  <text class=\"svg-muted\" x=\"115\" y=\"110\" fill=\"#94a3b8\" font-size=\"7.5\" text-anchor=\"middle\">Abad Pertengahan: Single-Entry</text>\n  <text class=\"svg-text\" x=\"115\" y=\"122\" fill=\"#cbd5e1\" font-size=\"7\" text-anchor=\"middle\">Catatan kas masuk &amp; keluar tunggal</text>\n\n  <rect class=\"svg-subcard\" x=\"35\" y=\"136\" width=\"160\" height=\"38\" rx=\"4\" fill=\"#0f172a\" stroke=\"#38bdf8\"/>\n  <text class=\"text-accent-blue\" x=\"115\" y=\"150\" fill=\"#38bdf8\" font-size=\"7.5\" font-weight=\"700\" text-anchor=\"middle\">1494: Double-Entry (Pacioli)</text>\n  <text class=\"svg-muted\" x=\"115\" y=\"162\" fill=\"#94a3b8\" font-size=\"7\" text-anchor=\"middle\">Debit = Kredit | Buku Besar Mandiri</text>\n  <text class=\"text-accent-red\" x=\"115\" y=\"172\" fill=\"#f87171\" font-size=\"6.5\" text-anchor=\"middle\">&#10007; Perlu Rekonsiliasi Eksternal</text>\n\n  <rect class=\"svg-subcard\" x=\"35\" y=\"180\" width=\"160\" height=\"38\" rx=\"4\" fill=\"#0f172a\" stroke=\"#10b981\"/>\n  <text class=\"text-accent-green\" x=\"115\" y=\"194\" fill=\"#34d399\" font-size=\"7.5\" font-weight=\"800\" text-anchor=\"middle\">Modern: Triple-Entry</text>\n  <text class=\"svg-muted\" x=\"115\" y=\"206\" fill=\"#94a3b8\" font-size=\"7\" text-anchor=\"middle\">Debit + Kredit + Kriptografis Ledger</text>\n\n  <!-- Blockchain Chain Diagram -->\n  <rect class=\"svg-card\" x=\"220\" y=\"58\" width=\"430\" height=\"170\" rx=\"8\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n  <text class=\"text-accent-amber\" x=\"435\" y=\"78\" fill=\"#fbbf24\" font-size=\"10.5\" font-weight=\"700\" text-anchor=\"middle\">STRUKTUR BLOK TERDISTRIBUSI &amp; KONSENSUS IMMUTABLE</text>\n  <line class=\"svg-divider\" x1=\"230\" y1=\"88\" x2=\"640\" y2=\"88\" stroke=\"#334155\"/>\n\n  <!-- Block N-1 -->\n  <rect class=\"svg-subcard\" x=\"235\" y=\"96\" width=\"115\" height=\"120\" rx=\"6\" fill=\"#0f172a\" stroke=\"#334155\"/>\n  <text class=\"text-accent-amber\" x=\"292\" y=\"112\" fill=\"#fbbf24\" font-size=\"8.5\" font-weight=\"700\" text-anchor=\"middle\">BLOK #1042</text>\n  <line class=\"svg-divider\" x1=\"245\" y1=\"118\" x2=\"340\" y2=\"118\" stroke=\"#334155\"/>\n  <text class=\"svg-muted\" x=\"292\" y=\"132\" fill=\"#94a3b8\" font-size=\"7\" text-anchor=\"middle\">Prev Hash: 000ab7...</text>\n  <text class=\"text-accent-green\" x=\"292\" y=\"146\" fill=\"#34d399\" font-size=\"7.5\" font-weight=\"600\" text-anchor=\"middle\">Merkle Root Tx:</text>\n  <text class=\"svg-text\" x=\"292\" y=\"158\" fill=\"#cbd5e1\" font-size=\"6.5\" text-anchor=\"middle\">PT A &#8594; PT B: Rp 500 jt</text>\n  <text class=\"svg-muted\" x=\"292\" y=\"170\" fill=\"#94a3b8\" font-size=\"7\" text-anchor=\"middle\">Timestamp &amp; Nonce</text>\n  <rect class=\"svg-subcard\" x=\"245\" y=\"180\" width=\"95\" height=\"28\" rx=\"2\" fill=\"#0f172a\" stroke=\"#fbbf24\"/>\n  <text class=\"text-accent-amber\" x=\"292\" y=\"196\" fill=\"#fbbf24\" font-size=\"7\" font-weight=\"700\" text-anchor=\"middle\">Hash: e83f91...</text>\n\n  <!-- Hash Link Arrow -->\n  <line x1=\"350\" y1=\"156\" x2=\"375\" y2=\"156\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n  <polygon points=\"375,152 385,156 375,160\" fill=\"#fbbf24\"/>\n\n  <!-- Block N -->\n  <rect class=\"svg-subcard\" x=\"385\" y=\"96\" width=\"115\" height=\"120\" rx=\"6\" fill=\"#0f172a\" stroke=\"#10b981\"/>\n  <text class=\"text-accent-green\" x=\"442\" y=\"112\" fill=\"#34d399\" font-size=\"8.5\" font-weight=\"700\" text-anchor=\"middle\">BLOK #1043</text>\n  <line class=\"svg-divider\" x1=\"395\" y1=\"118\" x2=\"490\" y2=\"118\" stroke=\"#334155\"/>\n  <text class=\"text-accent-amber\" x=\"442\" y=\"132\" fill=\"#fbbf24\" font-size=\"7\" font-weight=\"600\" text-anchor=\"middle\">Prev: e83f91...</text>\n  <text class=\"text-accent-green\" x=\"442\" y=\"146\" fill=\"#34d399\" font-size=\"7.5\" font-weight=\"600\" text-anchor=\"middle\">Merkle Root Tx:</text>\n  <text class=\"svg-text\" x=\"442\" y=\"158\" fill=\"#cbd5e1\" font-size=\"6.5\" text-anchor=\"middle\">PT B &#8594; PT C: Rp 120 jt</text>\n  <text class=\"svg-muted\" x=\"442\" y=\"170\" fill=\"#94a3b8\" font-size=\"7\" text-anchor=\"middle\">Smart Contract Auto</text>\n  <rect class=\"svg-subcard\" x=\"395\" y=\"180\" width=\"95\" height=\"28\" rx=\"2\" fill=\"#0f172a\" stroke=\"#10b981\"/>\n  <text class=\"text-accent-green\" x=\"442\" y=\"196\" fill=\"#34d399\" font-size=\"7\" font-weight=\"700\" text-anchor=\"middle\">Hash: a194bc...</text>\n\n  <!-- Right: Audit impact -->\n  <rect class=\"svg-subcard\" x=\"515\" y=\"96\" width=\"125\" height=\"120\" rx=\"6\" fill=\"#0f172a\" stroke=\"#38bdf8\"/>\n  <text class=\"text-accent-blue\" x=\"577\" y=\"112\" fill=\"#38bdf8\" font-size=\"8\" font-weight=\"700\" text-anchor=\"middle\">DAMPAK AUDIT:</text>\n  <text class=\"svg-text\" x=\"577\" y=\"128\" fill=\"#cbd5e1\" font-size=\"7\" text-anchor=\"middle\">&#10003; Tidak Bisa Diubah</text>\n  <text class=\"svg-muted\" x=\"577\" y=\"138\" fill=\"#94a3b8\" font-size=\"6.5\" text-anchor=\"middle\">(Immutable Ledger)</text>\n  <text class=\"svg-text\" x=\"577\" y=\"152\" fill=\"#cbd5e1\" font-size=\"7\" text-anchor=\"middle\">&#10003; Nol Rekonsiliasi</text>\n  <text class=\"svg-muted\" x=\"577\" y=\"162\" fill=\"#94a3b8\" font-size=\"6.5\" text-anchor=\"middle\">(Single Source of Truth)</text>\n  <text class=\"svg-text\" x=\"577\" y=\"176\" fill=\"#cbd5e1\" font-size=\"7\" text-anchor=\"middle\">&#10003; Real-Time Audit</text>\n  <text class=\"text-accent-green\" x=\"577\" y=\"196\" fill=\"#34d399\" font-size=\"7\" font-weight=\"700\" text-anchor=\"middle\">Auditor Otomatis</text>\n</svg>"
},
    {
      "kind": "h2",
      "text": "Arsitektur Blockchain & Mekanisme Kriptografi"
    },
    {
      "kind": "p",
      "text": "Blockchain adalah buku besar digital terdistribusi (Distributed Ledger Technology / DLT) yang mencatat transaksi secara kronologis dalam rangkaian 'blok' yang saling terhubung menggunakan fungsi hash kriptografi (seperti SHA-256). Setiap blok memuat tiga komponen utama:"
    },
    {
      "kind": "ul",
      "items": [
        "Data Transaksi: Catatan peristiwa ekonomi (misal: 'PT A mentransfer 100 token komoditas ke PT B').",
        "Hash Blok Ini: Sidik jari digital unik yang dihasilkan dari komputasi seluruh isi blok saat ini.",
        "Previous Hash (Hash Blok Sebelumnya): Tautan kriptografis ke blok sebelumnya yang menciptakan rantai (chain) yang tidak dapat diputus."
      ]
    },
    {
      "kind": "p",
      "text": "Sifat Immutability (Kekekalan Data): Jika seorang peretas mencoba mengubah data transaksi pada blok masa lalu (misal mengubah nominal dari Rp 10 juta menjadi Rp 100 juta), nilai hash blok tersebut akan berubah total seketika. Akibatnya, hubungan rantai ke seluruh blok berikutnya menjadi tidak valid dan ditolak oleh konsensus mayoritas node jaringan."
    },
    {
      "kind": "h2",
      "text": "Revolusi Triple-Entry Accounting"
    },
    {
      "kind": "table",
      "caption": "Tabel 13.1: Evolusi Paradigma Sistem Pembukuan Akuntansi",
      "headers": [
        "Era Akuntansi",
        "Mekanisme Pembukuan",
        "Kelemahan & Kebutuhan Audit",
        "Pihak yang Memverifikasi"
      ],
      "rows": [
        [
          "Single-Entry (Pra-1494)",
          "Hanya mencatat penambahan atau pengurangan kas dalam satu daftar.",
          "Tidak ada mekanisme kontrol internal keseimbangan; mudah terjadi kehilangan catatan.",
          "Pencatat itu sendiri (sangat subjektif)."
        ],
        [
          "Double-Entry (Luca Pacioli 1494)",
          "Setiap transaksi dicatat sebagai Debit dan Kredit pada dua buku terpisah milik masing-masing entitas.",
          "Masing-masing pihak (penjual dan pembeli) memegang buku sendiri; rawan perbedaan saldo dan memerlukan konfirmasi audit eksternal.",
          "Auditor eksternal independen melakukan audit sampling atas dokumen kertas."
        ],
        [
          "Triple-Entry (Era Blockchain)",
          "Selain debit pada pembeli dan kredit pada penjual, entri KETIGA dicatat secara kriptografis pada Shared Distributed Ledger publik.",
          "Data diverifikasi otomatis oleh jaringan komputer; tidak ada perselisihan saldo antar pihak; biaya audit rekonsiliasi terpangkas drastis.",
          "Konsensus kriptografi matematis jaringan (Trustless Network)."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Penerapan Smart Contracts dalam Rantai Pasok (Supply Chain)"
    },
    {
      "kind": "p",
      "text": "Smart Contract adalah program komputer yang disimpan di dalam blockchain yang mengeksekusi tindakan secara otomatis jika kondisi tertentu yang telah disepakati terpenuhi ('If/Then Statement')."
    },
    {
      "kind": "p",
      "text": "Contoh Siklus Pengadaan Terotomatisasi Smart Contract:"
    },
    {
      "kind": "ul",
      "items": [
        "Syarat: 'JIKA sensor IoT pada kontainer mengonfirmasi barang telah tiba di pelabuhan Tanjung Perak dengan suhu terjaga di bawah -18°C DAN bea cukai terverifikasi lolos...'",
        "Eksekusi Otomatis: '...MAKA smart contract seketika melepaskan pembayaran dana dari rekening escrow pembeli ke rekening vendor dan menerbitkan bukti pelunasan digital tanpa menunggu persetujuan faktur kertas selama 30 hari.'"
      ]
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Perlakuan Akuntansi Aset Kripto",
      "text": "Berdasarkan IFRIC Interpretation (dan PSAK terkait), aset kripto umumnya TIDAK diklasifikasikan sebagai Kas atau Setara Kas (karena volatilitas ekstrem) dan bukan Aset Keuangan. Jika dimiliki untuk dijual dalam kegiatan usaha normal, diklasifikasikan sebagai Persediaan (PSAK 14). Jika dimiliki untuk investasi jangka panjang, diklasifikasikan sebagai Aset Takberwujud (PSAK 19)."
    }
  ]
},
  14: {
  "tm": 14,
  "title": "Integrasi Sistem Perusahaan & Simulasi Kasus Komprehensif Pra-UAS",
  "ref": "Richardson et al. AIS 4e · Sintesis Keseluruhan",
  "intro": "Tatap muka penutup yang mengintegrasikan seluruh materi SIA: siklus transaksi, arsitektur ERP terpusat, tata kelola COSO/COBIT, keamanan siber, analitika data, dan teknologi masa depan. Dilengkapi dengan metodologi diagnostik kasus komprehensif persiapan Ujian Akhir Semester (UAS).",
  "objectives": [
    "Mengintegrasikan aliran data dan kontrol antar seluruh siklus transaksi bisnis (O2C, P2P, Konversi, Penggajian, Pelaporan Keuangan).",
    "Mendiagnosis kegagalan sistem terintegrasi dan kelemahan pengendalian internal material dalam studi kasus perusahaan nyata.",
    "Menyusun matriks mitigasi risiko berbasis COSO Internal Control dan IT General Controls (GITC).",
    "Mengevaluasi kesiapan menghadapi evaluasi kompetensi Ujian Akhir Semester (UAS).",
    "Merumuskan strategi transformasi digital sistem akuntansi yang aman dan efisien."
  ],
  "blocks": [
      {
        "kind": "figure",
        "caption": "Gambar 14.1: Peta Arsitektur Integrasi ERP Terpusat dan Simulasi Komprehensif Siklus Bisnis Pra-UAS.",
        "svg": "<svg class=\"course-diagram-svg\" viewBox=\"0 0 680 250\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif\">\n  <rect class=\"svg-bg\" x=\"10\" y=\"10\" width=\"660\" height=\"230\" rx=\"12\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect class=\"svg-header\" x=\"10\" y=\"10\" width=\"660\" height=\"38\" rx=\"12\" fill=\"#1e293b\" fill-opacity=\"0.6\"/>\n  <line class=\"svg-divider\" x1=\"10\" y1=\"48\" x2=\"670\" y2=\"48\" stroke=\"#334155\" stroke-width=\"1\"/>\n  <text class=\"svg-title text-accent-blue\" x=\"340\" y=\"34\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">PETA INTEGRASI SISTEM ERP &amp; SIMULASI SIKLUS BISNIS LENGKAP (UAS)</text>\n\n  <!-- Central Hub: Centralized ERP Database -->\n  <rect class=\"svg-subcard\" x=\"255\" y=\"90\" width=\"170\" height=\"85\" rx=\"8\" fill=\"#0f172a\" stroke=\"#10b981\" stroke-width=\"2\"/>\n  <text class=\"text-accent-green\" x=\"340\" y=\"112\" fill=\"#34d399\" font-size=\"10\" font-weight=\"800\" text-anchor=\"middle\">&#9881; CENTRAL DATABASE ERP</text>\n  <line class=\"svg-divider\" x1=\"265\" y1=\"120\" x2=\"415\" y2=\"120\" stroke=\"#334155\"/>\n  <text class=\"svg-text\" x=\"340\" y=\"135\" fill=\"#cbd5e1\" font-size=\"8\" text-anchor=\"middle\">Single Source of Truth</text>\n  <text class=\"svg-muted\" x=\"340\" y=\"148\" fill=\"#94a3b8\" font-size=\"7.5\" text-anchor=\"middle\">SAP S/4HANA / Oracle Cloud</text>\n  <text class=\"text-accent-green\" x=\"340\" y=\"162\" fill=\"#34d399\" font-size=\"7.5\" font-weight=\"600\" text-anchor=\"middle\">Integrasi Real-Time Transaksi</text>\n\n  <!-- Top Left: Sales (SD) -->\n  <rect class=\"svg-card\" x=\"30\" y=\"58\" width=\"180\" height=\"52\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n  <text class=\"text-accent-blue\" x=\"120\" y=\"76\" fill=\"#38bdf8\" font-size=\"9.5\" font-weight=\"700\" text-anchor=\"middle\">1. SALES &amp; DISTRIBUTION (O2C)</text>\n  <text class=\"svg-muted\" x=\"120\" y=\"92\" fill=\"#94a3b8\" font-size=\"8\" text-anchor=\"middle\">Pesanan &#8594; Kirim &#8594; Faktur &#8594; Kas Masuk</text>\n  <line x1=\"210\" y1=\"84\" x2=\"255\" y2=\"110\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n\n  <!-- Top Right: Purchasing (MM) -->\n  <rect class=\"svg-card\" x=\"470\" y=\"58\" width=\"180\" height=\"52\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n  <text class=\"text-accent-amber\" x=\"560\" y=\"76\" fill=\"#fbbf24\" font-size=\"9.5\" font-weight=\"700\" text-anchor=\"middle\">2. MATERIALS MGMT (P2P)</text>\n  <text class=\"svg-muted\" x=\"560\" y=\"92\" fill=\"#94a3b8\" font-size=\"8\" text-anchor=\"middle\">PR &#8594; PO &#8594; LPB &#8594; 3-Way Match &#8594; Bayar</text>\n  <line x1=\"470\" y1=\"84\" x2=\"425\" y2=\"110\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n\n  <!-- Bottom Left: Production (PP) -->\n  <rect class=\"svg-card\" x=\"30\" y=\"155\" width=\"180\" height=\"52\" rx=\"6\" fill=\"#1e293b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/>\n  <text class=\"text-accent-purple\" x=\"120\" y=\"173\" fill=\"#a78bfa\" font-size=\"9.5\" font-weight=\"700\" text-anchor=\"middle\">3. PRODUCTION PLANNING (PP)</text>\n  <text class=\"svg-muted\" x=\"120\" y=\"189\" fill=\"#94a3b8\" font-size=\"8\" text-anchor=\"middle\">BOM &#8594; Work Order &#8594; WIP &#8594; Barang Jadi</text>\n  <line x1=\"210\" y1=\"181\" x2=\"255\" y2=\"155\" stroke=\"#a855f7\" stroke-width=\"1.5\"/>\n\n  <!-- Bottom Right: Financial & Controlling (FI/CO) -->\n  <rect class=\"svg-card\" x=\"470\" y=\"155\" width=\"180\" height=\"52\" rx=\"6\" fill=\"#1e293b\" stroke=\"#34d399\" stroke-width=\"1.5\"/>\n  <text class=\"text-accent-green\" x=\"560\" y=\"173\" fill=\"#34d399\" font-size=\"9.5\" font-weight=\"700\" text-anchor=\"middle\">4. FINANCIAL &amp; CONTROLLING (FI/CO)</text>\n  <text class=\"svg-muted\" x=\"560\" y=\"189\" fill=\"#94a3b8\" font-size=\"8\" text-anchor=\"middle\">Posting GL Otomatis &#8594; Laporan L/R &amp; Neraca</text>\n  <line x1=\"470\" y1=\"181\" x2=\"425\" y2=\"155\" stroke=\"#34d399\" stroke-width=\"1.5\"/>\n\n  <!-- Bottom Banner: Governance & Audit Trail -->\n  <rect class=\"svg-subcard\" x=\"150\" y=\"195\" width=\"380\" height=\"34\" rx=\"4\" fill=\"#0f172a\" stroke=\"#38bdf8\"/>\n  <text class=\"text-accent-blue\" x=\"340\" y=\"210\" fill=\"#38bdf8\" font-size=\"8\" font-weight=\"700\" text-anchor=\"middle\">KONTROL TERPADU: COSO &amp; COBIT 2019 COMPLIANCE</text>\n  <text class=\"svg-muted\" x=\"340\" y=\"222\" fill=\"#94a3b8\" font-size=\"7.5\" text-anchor=\"middle\">SoD Terintegrasi &#8226; Log Jejak Audit Tak Terhapus &#8226; Proteksi Keamanan Siber</text>\n</svg>"
},
    {
      "kind": "h2",
      "text": "Peta Integrasi Arsitektur Sistem Informasi Akuntansi Terintegrasi"
    },
    {
      "kind": "p",
      "text": "Sistem informasi akuntansi modern bukan sekumpulan modul terpisah, melainkan ekosistem terpadu di mana peristiwa operasional di hulu (upstream) secara otomatis memicu pembaruan laporan keuangan di hilir (downstream):"
    },
    {
      "kind": "table",
      "caption": "Tabel 14.1: Integrasi Lintas Siklus Transaksi ke Buku Besar Umum (General Ledger / GL)",
      "headers": [
        "Siklus Asal",
        "Pemicu Transaksi (Trigger)",
        "Jurnal Otomatis yang Terbentuk",
        "Modul ERP Terkait"
      ],
      "rows": [
        [
          "Siklus Pendapatan (O2C)",
          "Konfirmasi Bill of Lading pengiriman barang dagang ke pelanggan.",
          "Debit: Piutang Usaha / Kas; Kredit: Pendapatan Penjualan. Debit: Beban Pokok Penjualan; Kredit: Persediaan Barang Jadi.",
          "SD (Sales & Distribution) -> FI (Financial Accounting) & MM (Materials Management)."
        ],
        [
          "Siklus Pengeluaran (P2P)",
          "Three-Way Match disetujui (PO + RR + Vendor Invoice).",
          "Debit: Persediaan Bahan Baku / Beban Operasional; Kredit: Utang Usaha.",
          "MM (Materials Management) -> FI (Accounts Payable)."
        ],
        [
          "Siklus Konversi",
          "Laporan penyelesaian batch produksi dari stasiun perakitan.",
          "Debit: Persediaan Barang Jadi; Kredit: Barang Dalam Proses (WIP).",
          "PP (Production Planning) -> CO (Controlling) & FI."
        ],
        [
          "Siklus Penggajian (Payroll)",
          "Otorisasi rekapitulasi jam kerja biometrik bulanan.",
          "Debit: Beban Gaji & Upah; Kredit: Utang PPh 21, Utang BPJS, dan Kas/Utang Gaji.",
          "HR/HCM (Human Capital) -> FI."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Simulasi Kasus UAS: Diagnosa Kegagalan Sistem PT Global Distribusi Utama"
    },
    {
      "kind": "p",
      "text": "Konteks Kasus: PT Global Distribusi Utama mengalami kerugian Rp 3.2 miliar dalam satu tahun buku. Hasil investigasi komite audit menemukan temuan-temuan berikut:"
    },
    {
      "kind": "ul",
      "items": [
        "Temuan 1: Database ERP sering down selama 6 jam saat penutupan buku bulanan karena server kelebihan beban.",
        "Temuan 2: Staf pembelian merangkap sebagai admin yang memiliki hak akses menambah vendor baru dan menyetujui Purchase Order.",
        "Temuan 3: Perusahaan membayar Rp 850 juta ke vendor bernama 'CV Maju Lancar' yang beralamat sama dengan rumah pribadi Manajer Logistik.",
        "Temuan 4: Terjadi kebocoran data rahasia harga pokok produksi ke kompetitor melalui USB flashdisk staf magang IT."
      ]
    },
    {
      "kind": "h2",
      "text": "Solusi Matriks Rekomendasi Audit (Standar Jawaban UAS)"
    },
    {
      "kind": "table",
      "caption": "Tabel 14.2: Matriks Diagnosa & Rekomendasi Komprehensif UAS",
      "headers": [
        "Kasus",
        "Kelemahan Pengendalian",
        "Kategori COSO / GITC",
        "Solusi & Pengendalian Perbaikan"
      ],
      "rows": [
        [
          "Temuan 1",
          "Ketiadaan perencanaan kapasitas server dan tidak adanya High Availability / Hot Site.",
          "GITC (Computer Operations & Availability)",
          "Migrasikan database ke arsitektur Cloud ERP yang memiliki auto-scaling; siapkan server replikasi aktif."
        ],
        [
          "Temuan 2",
          "Pelanggaran serius pemisahan tugas (SoD) antara pendaftaran vendor dan pemesanan.",
          "Control Activities (Segregation of Duties)",
          "Cabut hak akses otorisasi PO dari staf pendaftaran vendor; terapkan matriks SoD di konfigurasi modul ERP."
        ],
        [
          "Temuan 3",
          "Fraud Vendor Fiktif (Shell Company) dan transaksi dengan pihak berelasi tanpa deklarasi.",
          "Risk Assessment & Control Environment",
          "Wajibkan verifikasi fisik dan legalitas NPWP/NIB vendor oleh Bagian Legal; terapkan audit data matching alamat vendor vs karyawan."
        ],
        [
          "Temuan 4",
          "Ketiadaan Data Loss Prevention (DLP) dan akses fisik port USB yang terbuka bebas.",
          "Information Security (GITC - Logical Access)",
          "Nonaktifkan seluruh port USB di komputer kantor melalui Group Policy Windows; enkripsi harddisk laptop dengan BitLocker; terapkan perjanjian kerahasiaan (NDA)."
        ]
      ]
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Strategi Sukses Menghadapi UAS SIA",
      "text": "Gunakan pendekatan multidisipliner: hubungkan aspek bisnis, hukum, standar akuntansi, dan teknologi informasi. Jawaban yang menggabungkan prinsip akuntansi (pengakuan jurnal) dengan pengendalian TI (GITC & Application Controls) selalu mendapatkan nilai tertinggi dari dosen penguji."
    }
  ]
},
};
