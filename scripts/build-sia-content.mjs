// scripts/build-sia-content.mjs
// Generator modul lengkap Sistem Informasi Akuntansi (AKS301) TM 1-14.
import fs from 'node:fs';
import path from 'node:path';

const siaFilePath = path.join(process.cwd(), 'src/data/sia/siaReadings.ts');
const existingSource = fs.readFileSync(siaFilePath, 'utf8');

// Ambil definisi TM 1 yang sudah ada
const tm1Match = existingSource.match(/1:\s*\{[\s\S]*?\n\s*\},?\n\s*\};/);
if (!tm1Match) {
  console.error('TM1 block not found in siaReadings.ts');
  process.exit(1);
}

// Ekstrak bagian TM 1
const tm1Block = tm1Match[0].replace(/\n\s*\};$/, '');

const NEW_SIA_MODULES = [
  {
    tm: 2,
    title: 'Akuntan sebagai Analis Bisnis & Pemodelan Proses Bisnis (BPMN)',
    ref: 'Richardson et al. AIS 4e · Ch. 2',
    intro: 'Pemodelan proses bisnis menggunakan Business Process Model and Notation (BPMN 2.0). Memahami cara mendokumentasikan, menganalisis, dan merancang ulang alur kerja akuntansi dengan pools, lanes, gateways, dan data objects.',
    objectives: [
      'Menjelaskan pentingnya dokumentasi proses bisnis bagi kepatuhan SOX dan audit sistem.',
      'Menguasai simbol standar BPMN: Events (Start, Intermediate, End), Activities, Gateways, dan Sequence Flows.',
      'Menggunakan Pools dan Swimlanes untuk merepresentasikan departemen dan batas organisasi.',
      'Membedakan Sequence Flow (alur dalam satu pool) vs Message Flow (komunikasi antar pool).',
      'Menerapkan BPMN untuk mengidentifikasi inefisiensi, redundansi, dan kelemahan pengendalian.'
    ],
    sections: [
      {
        heading: 'Pentingnya Pemodelan Proses Bisnis',
        paragraphs: [
          'Dokumentasi proses bisnis bukan sekadar bagan alir formalitas. Di era Sarbanes-Oxley Act (SOX Section 404), dokumentasi proses menjadi bukti hukum bahwa manajemen telah merancang dan menguji pengendalian internal atas pelaporan keuangan.',
          'Model proses bisnis memungkinkan akuntan mengidentifikasi bottleneck (penghambat), duplikasi entri data, keterlambatan otorisasi, dan celah pemisahan tugas (segregation of duties).'
        ]
      },
      {
        heading: 'Simbol Standar BPMN 2.0',
        paragraphs: [
          'BPMN 2.0 adalah standar global yang dipahami oleh analis bisnis, manajer operasional, dan pengembang perangkat lunak.',
          'Pools merepresentasikan organisasi atau entitas bisnis (misal: Pelanggan vs Perusahaan). Swimlanes di dalam pool merepresentasikan departemen atau fungsi peran (misal: Penjualan, Gudang, Akuntansi).'
        ],
        table: {
          caption: 'Tabel 2.1: Elemen Utama Notasi BPMN 2.0',
          headers: ['Elemen', 'Simbol', 'Fungsi & Makna'],
          rows: [
            ['Start Event', 'Lingkaran garis tipis hijau', 'Menandakan titik awal dimulainya suatu proses bisnis.'],
            ['End Event', 'Lingkaran garis tebal merah', 'Menandakan selesainya suatu proses atau tercapainya hasil akhir.'],
            ['Activity / Task', 'Persegi panjang bersudut tumpul', 'Langkah kerja atau aktivitas spesifik yang dilakukan individu atau sistem.'],
            ['Exclusive Gateway (XOR)', 'Belah ketupat dengan tanda silang', 'Titik percabangan keputusan di mana hanya SATU jalur keluar yang dipilih.'],
            ['Parallel Gateway (AND)', 'Belah ketupat dengan tanda tambah (+)', 'Titik percabangan di mana SEMUA jalur paralel dikerjakan serentak.'],
            ['Message Flow', 'Garis putus-putus berpanah terbuka', 'Pertukaran pesan/dokumen antar dua Pool yang berbeda (eksternal).']
          ]
        }
      }
    ]
  },
  {
    tm: 3,
    title: 'Pemodelan Data & Kerangka Kerja REA (Resources, Events, Agents)',
    ref: 'Richardson et al. AIS 4e · Ch. 3',
    intro: 'Pemodelan data konseptual menggunakan Diagram Kelas UML dan kerangka kerja REA (McCarthy) untuk menstrukturkan entitas akuntansi sebelum diimplementasikan ke dalam basis data relasional.',
    objectives: [
      'Menjelaskan perbedaan pemodelan proses (dinamis) vs pemodelan data (statis).',
      'Mendefinisikan komponen kerangka REA: Resources (Sumber Daya), Events (Peristiwa), dan Agents (Pelaku).',
      'Memahami pola Duality (Pertukaran Ekonomi): setiap peristiwa kenaikan sumber daya berpasangan dengan peristiwa penurunan sumber daya.',
      'Menentukan multiplisitas / kardinalitas minimum dan maksimum (1..1, 1..*, 0..1, 0..*) pada relasi entitas.'
    ],
    sections: [
      {
        heading: 'Kerangka Kerja REA dalam SIA',
        paragraphs: [
          'Kerangka kerja REA yang digagas William McCarthy (1982) meredefinisi arsitektur akuntansi. Alih-alih mencatat debit/kredit tradisional yang terisolasi, REA memodelkan fenomena ekonomi riil bisnis.',
          'Resources adalah aset bernilai ekonomi (Kas, Persediaan, Peralatan). Events adalah transaksi atau aktivitas bisnis (Pesanan Penjualan, Pengiriman Barang, Penerimaan Kas). Agents adalah individu atau organisasi internal/eksternal yang terlibat (Pelanggan, Kasir, Manajer Penjualan).'
        ]
      },
      {
        heading: 'Prinsip Duality (Dualitas Pertukaran Ekonomi)',
        paragraphs: [
          'Dalam bisnis, tidak ada sumber daya yang bertambah tanpa adanya sumber daya lain yang dikorbankan. Dalam siklus pendapatan: Penyerahan Persediaan (Economic Decrement Event) berpasangan dengan Penerimaan Kas (Economic Increment Event). Hubungan kausal ini disebut Duality Relationship.'
        ]
      }
    ]
  },
  {
    tm: 4,
    title: 'Basis Data Relasional & Sistem Perusahaan (ERP)',
    ref: 'Richardson et al. AIS 4e · Ch. 4',
    intro: 'Implementasi model data ke dalam struktur database relasional: integritas referensial, aturan normalisasi (1NF, 2NF, 3NF), dan integrasi modul dalam sistem Enterprise Resource Planning (ERP).',
    objectives: [
      'Membedakan Primary Key, Foreign Key, dan Composite Key dalam tabel relasional.',
      'Memahami tiga integritas relasional: Entity Integrity, Referential Integrity, dan Domain Integrity.',
      'Menerapkan aturan normalisasi (1NF bebas repeat group, 2NF bebas partial dependency, 3NF bebas transitive dependency).',
      'Menjelaskan arsitektur modul ERP (SAP, Oracle, NetSuite) dan manfaat shared database terpusat.'
    ],
    sections: [
      {
        heading: 'Integritas Basis Data Relasional',
        paragraphs: [
          'Entity Integrity mensyaratkan Primary Key tidak boleh bernilai NULL dan harus unik untuk setiap baris data.',
          'Referential Integrity mensyaratkan nilai Foreign Key pada tabel anak harus merujuk pada Primary Key yang valid di tabel induk, atau bernilai NULL (jika opsional). Ini mencegah timbulnya transaksi piutang kepada pelanggan fiktif.'
        ]
      },
      {
        heading: 'Tiga Tahap Normalisasi Database Akuntansi',
        paragraphs: [
          '1NF (Bentuk Normal Pertama): Setiap kolom bernilai atomik (tunggal) dan tidak ada repeating groups (kolom berulang).',
          '2NF (Bentuk Normal Kedua): Sudah 1NF dan semua atribut non-kunci bergantung penuh pada Primary Key (tidak ada ketergantungan parsial pada composite key).',
          '3NF (Bentuk Normal Ketiga): Sudah 2NF dan tidak ada ketergantungan transitif (atribut non-kunci bergantung pada atribut non-kunci lainnya).'
        ]
      }
    ]
  },
  {
    tm: 5,
    title: 'Siklus Pendapatan: Proses Penjualan & Penerimaan Kas (Order-to-Cash)',
    ref: 'Richardson et al. AIS 4e · Ch. 5',
    intro: 'Analisis komprehensif siklus pendapatan (Order-to-Cash / O2C): mulai dari penerimaan pesanan penjualan, persetujuan kredit, pengeluaran barang gudang, pengiriman, penagihan (invoicing), hingga penerimaan pelunasan kas dan rekonsiliasi piutang.',
    objectives: [
      'Memetakan dokumen sumber siklus pendapatan: Sales Order, Picking Ticket, Packing Slip, Bill of Lading, Sales Invoice, Remittance Advice.',
      'Mengidentifikasi risiko utama: pengiriman barang tanpa otorisasi kredit, pencurian persediaan, salah saji faktur, dan lapping kas.',
      'Menerapkan pengendalian internal COSO pada siklus pendapatan (Pemisahan Tugas: Otorisasi Kredit vs Penjualan vs Kustodi Kas vs Pencatatan Piutang).',
      'Memahami pemanfaatan Electronic Data Interchange (EDI), portal e-commerce, dan sistem point-of-sale (POS).'
    ],
    sections: [
      {
        heading: 'Alur Dokumen Siklus Pendapatan',
        paragraphs: [
          '1. Customer Order diterima dan diverifikasi limit kreditnya sebelum dibuatkan Sales Order yang sah.',
          '2. Picking List diterbitkan untuk staf gudang mengambil barang fisik; Packing Slip disertakan saat barang dikemas.',
          '3. Bill of Lading (BoL) ditandatangani oleh kurir pengangkut sebagai kontrak legal pengiriman.',
          '4. Sales Invoice dikirim ke pelanggan saat konfirmasi pengiriman diterima, memicu pencatatan Piutang Usaha dan Pendapatan Penjualan.',
          '5. Pembayaran kas diterima beserta Remittance Advice untuk pelunasan akun piutang spesifik.'
        ]
      }
    ]
  },
  {
    tm: 6,
    title: 'Siklus Pengeluaran: Proses Pembelian & Pengeluaran Kas (Procure-to-Pay)',
    ref: 'Richardson et al. AIS 4e · Ch. 6',
    intro: 'Analisis siklus pengeluaran (Procure-to-Pay / P2P): permintaan pembelian (purchase requisition), pesanan pembelian resmi, penerimaan barang, pencocokan 3 arah (Three-Way Match), dan pengeluaran kas.',
    objectives: [
      'Memahami alur dokumen siklus pembelian: Purchase Requisition, Purchase Order, Blind Receiving Report, Vendor Invoice, Disbursement Voucher.',
      'Menerapkan mekanisme Three-Way Matching (PO + Receiving Report + Vendor Invoice) sebelum menyetujui pembayaran utang.',
      'Mengidentifikasi risiko: kickback/suap vendor, pembayaran ganda (duplicate payment), penerimaan barang rusak, dan pencurian cek/kas.',
      'Menerapkan sistem Evaluated Receipt Settlement (ERS) dan Automated Clearing House (ACH).'
    ],
    sections: [
      {
        heading: 'Pentingnya Three-Way Matching',
        paragraphs: [
          'Three-Way Matching adalah pengendalian preventif paling penting dalam siklus pengeluaran. Bagian Utang Usaha (Accounts Payable) membandingkan:',
          '1. Purchase Order: memverifikasi barang memang resmi dipesan dengan harga yang disepakati.',
          '2. Receiving Report: memverifikasi barang benar-benar telah diterima secara fisik dalam kondisi baik.',
          '3. Vendor Invoice: memverifikasi tagihan pemasok sesuai dengan kuantitas yang diterima dan harga pada PO.'
        ]
      }
    ]
  },
  {
    tm: 7,
    title: 'Siklus Konversi: Proses Produksi & Review Kasus UTS',
    ref: 'Richardson et al. AIS 4e · Ch. 7 & Review Ch. 1-6',
    intro: 'Siklus konversi/manufaktur: perencanaan produksi, Bill of Materials (BOM), perintah kerja (production order), pemindahan bahan baku, pencatatan biaya persediaan (Job Order vs Process Costing), serta review integrasi Pra-UTS.',
    objectives: [
      'Mendokumentasikan alur siklus konversi: MPS, BOM, Route Sheet, Work Order, Materials Requisition.',
      'Mengintegrasikan sistem akuntansi biaya dengan Enterprise Resource Planning (ERP).',
      'Mengidentifikasi pengendalian internal dalam pengamanan persediaan barang dalam proses (WIP) dan aset tetap pabrik.',
      'Menyelesaikan studi kasus terintegrasi siklus transaksi bisnis untuk persiapan UTS.'
    ],
    sections: [
      {
        heading: 'Dokumen Inti Siklus Konversi',
        paragraphs: [
          'Bill of Materials (BOM) menentukan daftar spesifikasi dan kuantitas seluruh bahan baku yang dibutuhkan untuk memproduksi satu unit produk.',
          'Route Sheet merinci urutan operasi mesin dan stasiun kerja yang harus dilalui bahan baku.',
          'Materials Requisition Form menjadi bukti otorisasi gudang untuk menyerahkan bahan baku ke lantai produksi.'
        ]
      }
    ]
  },
  {
    tm: 8,
    title: 'Pengendalian Internal & Kerangka Kerja COSO (Integrated Framework)',
    ref: 'Richardson et al. AIS 4e · Ch. 9',
    intro: 'Membuka paruh kedua perkuliahan dengan fondasi pengendalian internal modern. Membedah kerangka kerja COSO Internal Control (5 Komponen, 17 Prinsip) dan implikasi regulasi Sarbanes-Oxley Act (SOX Section 404).',
    objectives: [
      'Mendefinisikan Pengendalian Internal menurut COSO dan membedakan 3 kategori tujuan (Operasi, Pelaporan, Kepatuhan).',
      'Menguraikan 5 komponen COSO: Control Environment, Risk Assessment, Control Activities, Information & Communication, Monitoring.',
      'Membedakan tipe pengendalian: Preventif (mencegah), Detektif (mendeteksi), dan Korektif (memperbaiki).',
      'Memahami kewajiban manajemen dan auditor independen berdasarkan SOX Section 404.'
    ],
    sections: [
      {
        heading: 'Lima Komponen Pengendalian Internal COSO',
        paragraphs: [
          '1. Control Environment (Lingkungan Pengendalian): Nada dari pimpinan (tone at the top), integritas, nilai etika, dan struktur organisasi.',
          '2. Risk Assessment (Penilaian Risiko): Identifikasi dan analisis risiko operasional dan kecurangan dalam pencapaian tujuan entitas.',
          '3. Control Activities (Aktivitas Pengendalian): Kebijakan dan prosedur pencegahan/deteksi (pemisahan tugas, otorisasi, pengamanan fisik).',
          '4. Information & Communication: Pertukaran data berkualitas tinggi yang tepat waktu di seluruh lapisan organisasi.',
          '5. Monitoring Activities (Pemantauan): Evaluasi berkelanjutan oleh audit internal atas efektivitas operasional pengendalian.'
        ]
      }
    ]
  },
  {
    tm: 9,
    title: 'Keamanan Informasi, Ancaman Siber & Computer Fraud',
    ref: 'Richardson et al. AIS 4e · Ch. 10',
    intro: 'Keamanan sistem informasi akuntansi: CIA Triad, analisis ancaman siber (ransomware, social engineering, denial of service), enkripsi data, dan Business Continuity Planning (BCP).',
    objectives: [
      'Memahami pilar keamanan informasi CIA Triad: Confidentiality, Integrity, dan Availability.',
      'Mengidentifikasi teknik computer fraud: Phishing, Spoofing, Salami Technique, Trojan Horse, Ransomware.',
      'Membedakan Enkripsi Simetris (Shared Key) vs Asimetris (Public-Private Key) dan peran Tanda Tangan Digital (Digital Signature).',
      'Menjelaskan strategi pemulihan bencana: Hot Site, Warm Site, Cold Site, RTO (Recovery Time Objective), dan RPO (Recovery Point Objective).'
    ],
    sections: [
      {
        heading: 'Enkripsi Asimetris dan Tanda Tangan Digital',
        paragraphs: [
          'Enkripsi Asimetris menggunakan sepasang kunci: Public Key (disebarkan ke publik untuk mengenkripsi pesan) dan Private Key (dirahasiakan pemilik untuk mendekripsi pesan).',
          'Tanda Tangan Digital (Digital Signature) menjamin Non-repudiation (penyangkalan tidak dimungkinkan) dan Integritas data: pengirim mengenkripsi hash dokumen dengan Private Key-nya, sehingga penerima dapat memverifikasi keaslian dokumen menggunakan Public Key pengirim.'
        ]
      }
    ]
  },
  {
    tm: 10,
    title: 'Audit Sistem Informasi, CAATs & Tata Kelola TI (COBIT)',
    ref: 'Richardson et al. AIS 4e · Ch. 11',
    intro: 'Metodologi audit sistem informasi: audit sekitar komputer vs melalui komputer, pemanfaatan Computer-Assisted Audit Techniques (CAATs/IDEA/ACL), pengujian General IT Controls (GITC) vs Application Controls, dan kerangka kerja COBIT 2019.',
    objectives: [
      'Membedakan Auditing AROUND the Computer vs Auditing THROUGH the Computer.',
      'Menguasai teknik pengujian sistem: Test Data Approach, Integrated Test Facility (ITF), Parallel Simulation, Embedded Audit Module.',
      'Membedakan General IT Controls (GITC) dan Application Controls (Input, Processing, Output controls).',
      'Memahami peran tata kelola TI perusahaan berbasis kerangka kerja COBIT 2019.'
    ],
    sections: [
      {
        heading: 'GITC vs Application Controls',
        paragraphs: [
          'General IT Controls (GITC) melindungi lingkungan TI secara menyeluruh: keamanan akses fisik dan logis, manajemen perubahan program (change management), operasi pusat data, dan backup data.',
          'Application Controls tertanam langsung di dalam aplikasi software transaksi: validasi input (field check, limit check, range check, validity check), processing controls (run-to-run totals), dan output controls (rekonsiliasi laporan).'
        ]
      }
    ]
  },
  {
    tm: 11,
    title: 'Analitika Data Akuntansi (Data Analytics) & Big Data',
    ref: 'Richardson et al. AIS 4e · Ch. 12',
    intro: 'Pemanfaatan data science dalam akuntansi dan audit: karakteristik Big Data (5V), model IMPACT, 4 jenis pertanyaan analitika (Deskriptif, Diagnostik, Prediktif, Preskriptif), dan audit berbasis populasi penuh (100% testing).',
    objectives: [
      'Menjelaskan karakteristik Big Data: Volume, Velocity, Variety, Veracity, dan Value.',
      'Menerapkan model analitika IMPACT (Identify questions, Master data, Perform test, Address results, Communicate, Track).',
      'Mengklasifikasikan 4 jenis analisis: Deskriptif (apa yang terjadi), Diagnostik (mengapa terjadi), Prediktif (apa yang mungkin terjadi), Preskriptif (tindakan apa yang harus diambil).',
      'Menerapkan Audit Data Analytics (ADA) untuk mendeteksi transaksi anomali pada populasi jurnal buku besar.'
    ],
    sections: [
      {
        heading: 'Transformasi dari Uji Sampel ke Uji Populasi Penuh',
        paragraphs: [
          'Audit tradisional bergantung pada pengambilan sampel acak (statistical sampling) karena keterbatasan waktu dan biaya pemrosesan manual.',
          'Dengan Data Analytics dan alat bantu seperti Python/SQL/PowerBI, auditor dapat menguji 100% populasi transaksi (jutaan baris jurnal) secara otomatis dalam hitungan detik, mendeteksi outlier, transaksi di akhir pekan, atau pemisahan nilai transaksi di bawah ambang otorisasi (structuring).'
        ]
      }
    ]
  },
  {
    tm: 12,
    title: 'Robotic Process Automation (RPA) & Kecerdasan Buatan dalam Akuntansi',
    ref: 'Richardson et al. AIS 4e · Ch. 13',
    intro: 'Otomatisasi proses bisnis akuntansi: penerapan Robotic Process Automation (RPA) pada tugas rutin berulang, pemrosesan dokumen cerdas (OCR & NLP), serta integrasi Machine Learning dalam deteksi anomali finansial.',
    objectives: [
      'Mendefinisikan Robotic Process Automation (RPA) dan kriteria proses yang cocok diotomatisasi.',
      'Menjelaskan penerapan RPA pada rekonsiliasi bank otomatis, input faktur pemasok, dan verifikasi faktur pajak.',
      'Memahami peran Machine Learning (Supervised vs Unsupervised) dalam memprediksi credit scoring dan deteksi kecurangan.',
      'Menganalisis tata kelola dan risiko pengendalian atas bot otomatisasi (Bot Governance & Maintenance).'
    ],
    sections: [
      {
        heading: 'Penerapan RPA dalam Fungsi Akuntansi',
        paragraphs: [
          'RPA adalah perangkat lunak bot yang meniru tindakan manusia dalam mengeksekusi tugas digital terstruktur berbasis aturan (rule-based).',
          'Contoh implementasi: bot mengunduh rekening koran harian dari portal internet banking, mencocokkan mutasi kas dengan buku besar kas perusahaan di ERP, menandai selisih, dan menyusun draf laporan rekonsiliasi bank tanpa campur tangan manusia.'
        ]
      }
    ]
  },
  {
    tm: 13,
    title: 'Blockchain, Smart Contracts & Cloud Accounting',
    ref: 'Richardson et al. AIS 4e · Ch. 14',
    intro: 'Teknologi buku besar terdistribusi (Distributed Ledger Technology / DLT): kriptografi hashing, mekanisme konsensus, konsep Triple-Entry Accounting, smart contracts, dan tata kelola cloud computing bagi sistem akuntansi.',
    objectives: [
      'Menjelaskan arsitektur blockchain: block, hash SHA-256, nonce, dan rantai blok yang tidak dapat diubah (immutable).',
      'Membandingkan Public Permissionless Blockchain vs Private Permissioned Consortium Blockchain.',
      'Memahami konsep Triple-Entry Accounting: pencatatan transaksi yang diverifikasi secara kriptografis pada shared ledger publik.',
      'Menganalisis dampak Smart Contracts dalam otomatisasi pembayaran bersyarat tanpa pihak ketiga.'
    ],
    sections: [
      {
        heading: 'Revolusi Triple-Entry Accounting',
        paragraphs: [
          'Dalam akuntansi double-entry tradisional (Pacioli 1494), kedua pihak transaksi mencatat buku masing-masing (Book A dan Book B), lalu auditor memverifikasi kecocokannya.',
          'Dalam Triple-Entry Accounting, setiap transaksi ditandatangani secara kriptografis dan dicatat serentak pada buku besar bersama (shared distributed ledger) yang terdistribusi dan tidak dapat dimanipulasi (immutable). Ini menghilangkan kebutuhan rekonsiliasi antar pihak dan memungkinkan audit seketika (real-time continuous auditing).'
        ]
      }
    ]
  },
  {
    tm: 14,
    title: 'Review Komprehensif Siklus SIA & Simulasi Kasus UAS',
    ref: 'Richardson et al. AIS 4e · Kompilasi TM 1-13',
    intro: 'Pemantapan materi terintegrasi seluruh siklus SIA (Pendapatan, Pengeluaran, Konversi), pengendalian internal COSO, keamanan siber, audit sistem informasi, hingga teknologi masa depan (RPA, Analytics, Blockchain) untuk persiapan Ujian Akhir Semester (UAS).',
    objectives: [
      'Menghubungkan alur transaksi end-to-end dari pesanan pelanggan hingga laporan keuangan audited.',
      'Mendiagnosis kelemahan pengendalian internal pada studi kasus naratif perusahaan dan merancang solusinya.',
      'Mengevaluasi risiko keamanan informasi dan kesiapan tata kelola TI menghadapi ancaman modern.',
      'Menyelesaikan simulasi soal ujian komprehensif UAS Sistem Informasi Akuntansi.'
    ],
    sections: [
      {
        heading: 'Checklist Pemantapan UAS SIA',
        paragraphs: [
          'UAS SIA menitikberatkan pada kemampuan analitis mahasiswa dalam mengidentifikasi titik lemah sistem (SPOF - Single Point of Failure, ketiadaan pemisahan tugas, kelemahan three-way matching) dan memberikan rekomendasi pengendalian berbasis COSO dan COBIT.',
          'Pahami fungsi masing-masing dokumen transaksi dan bagaimana teknologi analitika data, RPA, serta blockchain mengubah praktik audit masa kini.'
        ]
      }
    ]
  }
];

// Susun teks akhir siaReadings.ts
let outputContent = `// =============================================================
// src/data/sia/siaReadings.ts
// Rangkuman komprehensif materi Sistem Informasi Akuntansi (AKS301).
// Sumber: Accounting Information Systems (4th ISE ed.) —
//         Vernon J. Richardson, C. Janie Chang, Rod E. Smith (McGraw-Hill).
// =============================================================
import type { Reading, ContentBlock } from '../../types';

export const AKS301_READINGS: Record<number, Reading> = {
  ${tm1Block},
`;

NEW_SIA_MODULES.forEach((mod) => {
  const blocks = [];
  mod.sections.forEach((sec) => {
    blocks.push({ kind: 'h2', text: sec.heading });
    sec.paragraphs.forEach((p) => {
      blocks.push({ kind: 'p', text: p });
    });
    if (sec.table) {
      blocks.push({
        kind: 'table',
        caption: sec.table.caption,
        headers: sec.table.headers,
        rows: sec.table.rows
      });
    }
  });

  blocks.push({
    kind: 'callout',
    variant: 'tip',
    title: 'Wawasan Praktik Profesional',
    text: 'Dalam dunia kerja akuntansi dan audit modern, penguasaan sistem informasi, data analytics, dan tata kelola TI menjadi pembeda utama antara akuntan konvensional dengan konsultan bisnis strategis berlisensi (CISA, CIA, CPA).'
  });

  outputContent += `  ${mod.tm}: {
    tm: ${mod.tm},
    title: ${JSON.stringify(mod.title)},
    ref: ${JSON.stringify(mod.ref)},
    intro: ${JSON.stringify(mod.intro)},
    objectives: ${JSON.stringify(mod.objectives, null, 2)},
    blocks: ${JSON.stringify(blocks, null, 2)}
  },
`;
});

outputContent += `};
`;

fs.writeFileSync(siaFilePath, outputContent, 'utf8');
console.log('Successfully updated siaReadings.ts with TM 1-14 full coverage!');
