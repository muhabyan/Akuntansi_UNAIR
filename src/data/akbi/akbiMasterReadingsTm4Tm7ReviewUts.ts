// =============================================================
// src/data/akbi/akbiMasterReadingsTm4Tm7ReviewUts.ts
// Batch 2 revision: TM 4 sampai TM 7 dan Simulasi UTS.
// Target: memperdalam materi AKBI di website utama tanpa mengubah UI/UX.
// Sumber kerja: data ZIP existing, AKBI Master Content Bagian 1,
// HTML Pra-UTS sebagai pembanding pedagogis TM 1-7, dan Carter/Cengage Ch. 5-7.
// =============================================================
import type { Reading } from '../../types';
import { applyAkbiReadingUxPolish } from './akbiReadingUxPolish';

export type AkbiMasterReading = Reading & {
  id: string;
  phase: 'pra_uts' | 'pra_uas';
  source: string;
  manualCheckCount: number;
};

export type AkbiReviewReading = Reading & {
  id: string;
  phase: 'review_uts' | 'review_uas';
  source: string;
  manualCheckCount: number;
};

export const AKBI_TM4_TM7_READINGS: Record<number, AkbiMasterReading> = {
  "4": {
    "id": "akbi-tm-4",
    "tm": 4,
    "title": "Sistem Perhitungan Biaya Berdasarkan Pesanan atau Job Order Costing",
    "ref": "Carter Cost Accounting Ch. 5 · AKBI Master Content Bagian 1 · HTML Pra-UTS sebagai pembanding TM 4",
    "source": "ZIP website utama + AKBI_Master_Content_Bagian_1_TM1-TM11.md + AKBI_v6_Complete.html sebagai pembanding TM 1-7 + Carter/Cengage Cost Accounting Ch. 5, Ch. 6, dan Ch. 7",
    "phase": "pra_uts",
    "manualCheckCount": 0,
    "intro": "Job order costing mengumpulkan biaya berdasarkan pesanan, kontrak, batch, atau proyek yang menjadi cost object. Materi ini memperdalam job cost sheet, dokumen sumber, delapan jurnal dasar, applied overhead, underapplied/overapplied overhead, dan status job dalam WIP, Finished Goods, atau Cost of Goods Sold.",
    "objectives": [
      "Menjelaskan karakteristik dan penggunaan job order costing.",
      "Membedakan job order costing dan process costing.",
      "Menyusun job cost sheet sebagai dokumen utama biaya pesanan.",
      "Menghubungkan materials requisition dan labor time ticket dengan pencatatan biaya.",
      "Mencatat delapan jurnal dasar job order costing.",
      "Menghitung predetermined overhead rate dan applied factory overhead.",
      "Menganalisis underapplied dan overapplied factory overhead.",
      "Menentukan status job sebagai Work in Process, Finished Goods, atau Cost of Goods Sold.",
      "Menjelaskan penerapan job order costing pada perusahaan jasa."
    ],
    "blocks": [
      {
        "kind": "h2",
        "text": "Orientasi TM 4"
      },
      {
        "kind": "p",
        "text": "Job order costing adalah sistem akumulasi biaya yang menempatkan setiap pesanan, kontrak, batch khusus, atau proyek sebagai **cost object**. Sistem ini dipakai ketika produk atau jasa bersifat heterogen, sehingga biaya tidak layak dirata-ratakan ke seluruh unit seperti dalam process costing."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Arah membaca TM 4",
        "text": "Ikuti alur biaya pesanan dari dokumen sumber ke akun. Bahan ditelusuri melalui materials requisition, tenaga kerja melalui labor time ticket, overhead melalui predetermined overhead rate, lalu biaya berpindah dari Work in Process ke Finished Goods dan akhirnya ke Cost of Goods Sold saat produk dijual."
      },
      {
        "kind": "h2",
        "text": "Peta Submateri TM 4"
      },
      {
        "kind": "table",
        "headers": [
          "No",
          "Submateri",
          "Fungsi Belajar"
        ],
        "rows": [
          [
            "1",
            "Karakteristik job order costing",
            "Menentukan kapan sistem biaya pesanan digunakan"
          ],
          [
            "2",
            "Job cost sheet",
            "Mengumpulkan direct materials, direct labor, dan applied factory overhead per job"
          ],
          [
            "3",
            "Source documents",
            "Menghubungkan transaksi fisik dengan pencatatan biaya"
          ],
          [
            "4",
            "Accounting for materials",
            "Membedakan bahan langsung dan bahan tidak langsung"
          ],
          [
            "5",
            "Accounting for labor",
            "Membedakan tenaga kerja langsung dan tidak langsung"
          ],
          [
            "6",
            "Accounting for factory overhead",
            "Membedakan overhead aktual dan overhead dibebankan"
          ],
          [
            "7",
            "Predetermined overhead rate",
            "Menghitung applied overhead pada normal costing"
          ],
          [
            "8",
            "Jobs completed and products sold",
            "Menentukan perpindahan biaya dari WIP, Finished Goods, sampai COGS"
          ],
          [
            "9",
            "Underapplied dan overapplied overhead",
            "Menganalisis selisih overhead aktual dan overhead dibebankan"
          ],
          [
            "10",
            "Job costing pada jasa",
            "Menerapkan cost sheet untuk proyek layanan atau klien"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Konsep Job Order Costing"
      },
      {
        "kind": "p",
        "text": "Dalam job order costing, perusahaan tidak menghitung biaya berdasarkan rata-rata seluruh unit pabrik, melainkan berdasarkan job tertentu. Job dapat berupa satu unit khusus, satu batch, satu kontrak, satu proyek konstruksi, satu pesanan percetakan, atau satu layanan profesional untuk klien tertentu."
      },
      {
        "kind": "table",
        "headers": [
          "Kondisi Produksi",
          "Sistem yang Lebih Tepat",
          "Alasan"
        ],
        "rows": [
          [
            "Produk berbeda desain, spesifikasi, bahan, atau waktu kerja",
            "Job order costing",
            "Setiap job membutuhkan biaya berbeda sehingga harus ditelusuri terpisah"
          ],
          [
            "Produk homogen dan diproduksi terus-menerus",
            "Process costing",
            "Biaya lebih tepat dikumpulkan per departemen atau proses"
          ],
          [
            "Jasa profesional per klien atau proyek",
            "Job order costing",
            "Biaya dapat ditelusuri ke klien, kasus, proyek, atau kontrak"
          ],
          [
            "Produksi massal dengan unit seragam",
            "Process costing",
            "Rata-rata biaya per unit lebih relevan"
          ]
        ]
      },
      {
        "kind": "callout",
        "variant": "key",
        "title": "Kunci konseptual",
        "text": "Job order costing berangkat dari pertanyaan: berapa biaya pesanan ini? Process costing berangkat dari pertanyaan: berapa biaya rata-rata produk yang melewati departemen ini?"
      },
      {
        "kind": "h2",
        "text": "Job Cost Sheet"
      },
      {
        "kind": "p",
        "text": "Job cost sheet adalah dokumen utama dalam job order costing. Dokumen ini berfungsi sebagai buku pembantu Work in Process untuk setiap job. Ketika bahan langsung, tenaga kerja langsung, dan overhead dibebankan ke job, seluruh informasi tersebut diringkas dalam job cost sheet."
      },
      {
        "kind": "table",
        "headers": [
          "Bagian Job Cost Sheet",
          "Isi yang Wajib Ada",
          "Fungsi"
        ],
        "rows": [
          [
            "Identitas job",
            "Nomor job, nama pelanggan, tanggal mulai, tanggal selesai, jumlah unit",
            "Membedakan satu pesanan dari pesanan lain"
          ],
          [
            "Direct materials",
            "Nomor materials requisition, tanggal, kuantitas, harga, nilai bahan",
            "Menelusuri bahan langsung ke job"
          ],
          [
            "Direct labor",
            "Nomor labor time ticket, jam kerja, tarif upah, total biaya tenaga kerja",
            "Menelusuri jam kerja langsung ke job"
          ],
          [
            "Applied factory overhead",
            "Dasar pembebanan, tarif overhead, jumlah dasar aktual, overhead dibebankan",
            "Membebankan overhead dengan normal costing"
          ],
          [
            "Cost summary",
            "Total DM, DL, FOH, total job cost, unit cost",
            "Menentukan biaya akhir job"
          ],
          [
            "Status job",
            "In process, completed, sold",
            "Menentukan akun tempat biaya disajikan"
          ]
        ]
      },
      {
        "kind": "formula",
        "text": "Total Job Cost = Direct Materials + Direct Labor + Applied Factory Overhead\nCost per Unit = Total Job Cost ÷ Jumlah Unit dalam Job",
        "note": "Rumus ini hanya menggunakan overhead dibebankan. Overhead aktual dicatat di Factory Overhead Control dan tidak langsung masuk ke job cost sheet."
      },
      {
        "kind": "h2",
        "text": "Dokumen Sumber dalam Job Order Costing"
      },
      {
        "kind": "table",
        "headers": [
          "Dokumen",
          "Biaya yang Didukung",
          "Isi Utama",
          "Dampak Akuntansi"
        ],
        "rows": [
          [
            "Purchase invoice",
            "Pembelian bahan",
            "Vendor, kuantitas, harga, syarat pembelian",
            "Mendukung pencatatan Materials Inventory"
          ],
          [
            "Receiving report",
            "Penerimaan bahan",
            "Jumlah dan kondisi bahan diterima",
            "Mendukung verifikasi pembelian bahan"
          ],
          [
            "Materials requisition",
            "Pemakaian bahan",
            "Nomor job, bahan diminta, kuantitas, harga",
            "Menentukan debit WIP untuk bahan langsung atau FOH Control untuk bahan tidak langsung"
          ],
          [
            "Clock card",
            "Kehadiran karyawan",
            "Jam masuk, jam keluar, total waktu hadir",
            "Dasar penggajian umum"
          ],
          [
            "Labor time ticket",
            "Distribusi jam kerja",
            "Nomor job, jam kerja, tarif, pekerja",
            "Menentukan debit WIP untuk TKL atau FOH Control untuk TKI"
          ],
          [
            "Vendor invoice dan utility bill",
            "Overhead aktual",
            "Tagihan listrik, sewa, jasa perbaikan, perlengkapan",
            "Mendukung debit Factory Overhead Control"
          ],
          [
            "Depreciation schedule",
            "Overhead aktual nonkas",
            "Beban depresiasi mesin dan peralatan pabrik",
            "Mendukung debit Factory Overhead Control"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Alur Biaya Pesanan"
      },
      {
        "kind": "ol",
        "items": [
          "Bahan dibeli dan dicatat ke Materials Inventory.",
          "Bahan langsung yang diminta untuk job tertentu dipindahkan dari Materials Inventory ke Work in Process.",
          "Bahan tidak langsung yang dipakai untuk produksi dicatat ke Factory Overhead Control.",
          "Gaji pabrik diakui lebih dulu sebagai Factory Payroll atau Wages Payable.",
          "Tenaga kerja langsung didistribusikan ke Work in Process berdasarkan labor time ticket.",
          "Tenaga kerja tidak langsung didistribusikan ke Factory Overhead Control.",
          "Overhead aktual dicatat ke Factory Overhead Control saat terjadi.",
          "Overhead dibebankan ke job menggunakan predetermined overhead rate dan dicatat ke Applied Factory Overhead.",
          "Job selesai dipindahkan dari Work in Process ke Finished Goods.",
          "Job yang dijual dipindahkan dari Finished Goods ke Cost of Goods Sold."
        ]
      },
      {
        "kind": "h2",
        "text": "Delapan Jurnal Dasar Job Order Costing"
      },
      {
        "kind": "journal",
        "caption": "1. Pembelian bahan",
        "lines": [
          {
            "account": "Materials Inventory",
            "debit": "jumlah sesuai data transaksi"
          },
          {
            "account": "Accounts Payable atau Cash",
            "credit": "jumlah sesuai data transaksi",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "journal",
        "caption": "2. Biaya tenaga kerja pabrik terjadi",
        "lines": [
          {
            "account": "Factory Payroll",
            "debit": "jumlah sesuai data transaksi"
          },
          {
            "account": "Wages Payable atau Cash",
            "credit": "jumlah sesuai data transaksi",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "journal",
        "caption": "3. Overhead aktual terjadi",
        "lines": [
          {
            "account": "Factory Overhead Control",
            "debit": "jumlah sesuai data transaksi"
          },
          {
            "account": "Various Accounts",
            "credit": "jumlah sesuai data transaksi",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "journal",
        "caption": "4. Bahan dipakai",
        "lines": [
          {
            "account": "Work in Process - Job terkait",
            "debit": "bahan langsung"
          },
          {
            "account": "Factory Overhead Control",
            "debit": "bahan tidak langsung"
          },
          {
            "account": "Materials Inventory",
            "credit": "total bahan dipakai",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "journal",
        "caption": "5. Tenaga kerja didistribusikan",
        "lines": [
          {
            "account": "Work in Process - Job terkait",
            "debit": "tenaga kerja langsung"
          },
          {
            "account": "Factory Overhead Control",
            "debit": "tenaga kerja tidak langsung"
          },
          {
            "account": "Factory Payroll",
            "credit": "total payroll pabrik",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "journal",
        "caption": "6. Overhead dibebankan ke job",
        "lines": [
          {
            "account": "Work in Process",
            "debit": "applied overhead"
          },
          {
            "account": "Applied Factory Overhead",
            "credit": "applied overhead",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "journal",
        "caption": "7. Job selesai",
        "lines": [
          {
            "account": "Finished Goods",
            "debit": "total cost job selesai"
          },
          {
            "account": "Work in Process",
            "credit": "total cost job selesai",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "journal",
        "caption": "8. Produk dijual - pencatatan HPP",
        "lines": [
          {
            "account": "Cost of Goods Sold",
            "debit": "cost job terjual"
          },
          {
            "account": "Finished Goods",
            "credit": "cost job terjual",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "Jangan tertukar",
        "text": "Saat produk selesai diproduksi, debitnya Finished Goods. Saat produk dijual, barulah debit Cost of Goods Sold. Kesalahan ini paling sering muncul karena mahasiswa langsung memindahkan job selesai ke HPP."
      },
      {
        "kind": "h2",
        "text": "Predetermined Overhead Rate dan Applied Overhead"
      },
      {
        "kind": "p",
        "text": "Dalam normal costing, overhead pabrik tidak menunggu angka aktual akhir periode. Perusahaan menghitung tarif overhead ditentukan di muka agar biaya job dapat dihitung saat produksi berlangsung."
      },
      {
        "kind": "formula",
        "text": "Predetermined Overhead Rate = Estimated Factory Overhead ÷ Estimated Allocation Base\nApplied Factory Overhead = Predetermined Overhead Rate × Actual Allocation Base Used by Job",
        "note": "Allocation base dapat berupa jam tenaga kerja langsung, biaya tenaga kerja langsung, jam mesin, atau dasar lain yang paling rasional."
      },
      {
        "kind": "table",
        "headers": [
          "Istilah",
          "Makna",
          "Akun"
        ],
        "rows": [
          [
            "Factory Overhead Control",
            "Overhead aktual yang benar-benar terjadi",
            "Didebit saat overhead aktual terjadi"
          ],
          [
            "Applied Factory Overhead",
            "Overhead yang dibebankan ke job dengan tarif",
            "Dikredit saat overhead dibebankan"
          ],
          [
            "Underapplied overhead",
            "Overhead aktual lebih besar daripada applied overhead",
            "Biaya produksi kurang dibebankan"
          ],
          [
            "Overapplied overhead",
            "Overhead aktual lebih kecil daripada applied overhead",
            "Biaya produksi lebih dibebankan"
          ]
        ]
      },
      {
        "kind": "formula",
        "text": "Selisih Overhead = Factory Overhead Control - Applied Factory Overhead\nJika FOH aktual > FOH dibebankan → underapplied overhead\nJika FOH aktual < FOH dibebankan → overapplied overhead"
      },
      {
        "kind": "h2",
        "text": "Format Lengkap Job Cost Sheet"
      },
      {
        "kind": "table",
        "headers": [
          "Komponen",
          "Format Isian"
        ],
        "rows": [
          [
            "Header",
            "Job No., pelanggan, produk, jumlah unit, tanggal mulai, tanggal selesai"
          ],
          [
            "Direct materials",
            "Tanggal, requisition number, jenis bahan, kuantitas, harga satuan, total"
          ],
          [
            "Direct labor",
            "Tanggal, employee/time ticket number, jam kerja, tarif per jam, total"
          ],
          [
            "Applied overhead",
            "Dasar pembebanan, jumlah dasar aktual, tarif overhead, total applied FOH"
          ],
          [
            "Rekap biaya",
            "Total DM + total DL + total applied FOH"
          ],
          [
            "Unit cost",
            "Total job cost ÷ jumlah unit"
          ],
          [
            "Status akun",
            "WIP jika belum selesai, Finished Goods jika selesai belum terjual, COGS jika sudah terjual"
          ]
        ],
        "caption": "Format ini wajib ada karena job cost sheet adalah dokumen inti untuk menelusuri biaya pesanan."
      },
      {
        "kind": "example",
        "title": "Perhitungan biaya Job dengan normal costing",
        "blocks": [
          {
            "kind": "p",
            "text": "Job 205 memakai bahan langsung Rp12.000, tenaga kerja langsung 80 jam dengan tarif Rp50 per jam. Tarif overhead ditentukan di muka Rp30 per jam tenaga kerja langsung. Job menghasilkan 20 unit dan selesai pada periode berjalan."
          },
          {
            "kind": "formula",
            "text": "Direct Materials = Rp12.000\nDirect Labor = 80 × Rp50 = Rp4.000\nApplied FOH = 80 × Rp30 = Rp2.400\nTotal Job Cost = Rp12.000 + Rp4.000 + Rp2.400 = Rp18.400\nCost per Unit = Rp18.400 ÷ 20 = Rp920"
          },
          {
            "kind": "journal",
            "caption": "Saat job selesai",
            "lines": [
              {
                "account": "Finished Goods",
                "debit": "Rp18.400"
              },
              {
                "account": "Work in Process - Job 205",
                "credit": "Rp18.400",
                "isCredit": true
              }
            ]
          }
        ]
      },
      {
        "kind": "h2",
        "text": "Job Order Costing pada Perusahaan Jasa"
      },
      {
        "kind": "p",
        "text": "Job order costing juga berlaku pada jasa karena banyak layanan dikerjakan berdasarkan proyek atau klien. Kantor akuntan publik, konsultan, bengkel, firma hukum, rumah produksi, dan perusahaan desain dapat memakai cost sheet untuk mengumpulkan jam profesional, biaya langsung proyek, dan overhead jasa."
      },
      {
        "kind": "table",
        "headers": [
          "Manufaktur",
          "Jasa"
        ],
        "rows": [
          [
            "Job berupa pesanan produk fisik",
            "Job berupa klien, kasus, proyek, atau kontrak"
          ],
          [
            "Direct materials sering material utama produk",
            "Direct materials dapat berupa dokumen, lisensi, atau biaya langsung proyek"
          ],
          [
            "Direct labor berupa operator produksi",
            "Direct labor berupa jam profesional atau teknisi"
          ],
          [
            "Finished Goods muncul saat job selesai",
            "Pada jasa, hasil selesai biasanya langsung menjadi biaya jasa yang diserahkan ke klien"
          ],
          [
            "COGS muncul saat barang dijual",
            "Cost of services muncul saat jasa diberikan"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Batch 12C - Practice Case Data Terlihat TM 4"
      },
      {
        "kind": "p",
        "text": "Latihan berikut menutup gap utama audit awal: mahasiswa tidak boleh diminta mengisi angka tanpa data kasus yang terlihat. Data job, tarif overhead, status penyelesaian, dan output yang diminta ditampilkan sebelum workspace."
      },
      {
        "kind": "table",
        "headers": ["Data Job A", "Jumlah atau Status"],
        "rows": [
          ["Bahan langsung", "Rp2.000.000"],
          ["Tenaga kerja langsung", "Rp1.500.000"],
          ["Tarif FOH dibebankan", "150% dari tenaga kerja langsung"],
          ["Status job", "Selesai diproduksi, belum terjual"]
        ],
        "caption": "Diminta: hitung FOH dibebankan, total kos Job A, dan kenaikan Finished Goods."
      },
      {
        "kind": "table-fill",
        "spec": {
          "title": "Workspace Job Order Cost Sheet - Job A",
          "instruction": "Isi angka berdasarkan data Job A. Gunakan angka rupiah tanpa titik jika perlu.",
          "currency": "Rp",
          "headers": ["Komponen", "Jawaban"],
          "rows": [
            { "id": "tm4-joba-foh", "label": "FOH dibebankan", "cells": [{ "id": "tm4-joba-foh-answer", "answer": 2250000 }] },
            { "id": "tm4-joba-total", "label": "Total kos Job A", "cells": [{ "id": "tm4-joba-total-answer", "answer": 5750000 }] },
            { "id": "tm4-joba-fg", "label": "Kenaikan Finished Goods", "cells": [{ "id": "tm4-joba-fg-answer", "answer": 5750000 }] }
          ]
        }
      },
      {
        "kind": "journal-builder",
        "spec": {
          "title": "Journal Builder - Job A Selesai",
          "instruction": "Karena Job A sudah selesai tetapi belum terjual, biaya dipindahkan dari Work in Process ke Finished Goods.",
          "currency": "Rp",
          "accountChoices": ["Finished Goods", "Work in Process", "Cost of Goods Sold", "Factory Overhead Applied"],
          "lines": [
            { "id": "tm4-joba-j1-dr", "account": "Finished Goods", "debit": 5750000 },
            { "id": "tm4-joba-j1-cr", "account": "Work in Process", "credit": 5750000 }
          ]
        }
      },
      {
        "kind": "solution-reveal",
        "title": "Pembahasan Job A",
        "prompt": "Buka setelah mengisi job cost sheet dan jurnal.",
        "blocks": [
          { "kind": "p", "text": "FOH dibebankan = 150% × Rp1.500.000 = Rp2.250.000. Total kos job = Rp2.000.000 + Rp1.500.000 + Rp2.250.000 = Rp5.750.000. Karena job selesai tetapi belum dijual, biaya masuk Finished Goods, bukan Cost of Goods Sold." }
        ]
      },
      {
        "kind": "h2",
        "text": "Batch 3 - Mini Lab Job Order Costing"
      },
      {
        "kind": "p",
        "text": "Mini lab ini merangkum cara kerja TM 4 dari dokumen sumber sampai jurnal. Fokusnya bukan menghafal nama akun, melainkan menjaga urutan biaya: bahan langsung dan tenaga kerja langsung masuk Work in Process, overhead aktual masuk Factory Overhead Control, overhead dibebankan masuk Work in Process melalui Applied Factory Overhead, lalu job selesai berpindah ke Finished Goods."
      },
      {
        "kind": "callout",
        "variant": "key",
        "title": "Formula inti batch 3",
        "text": "Applied FOH = tarif overhead ditentukan di muka × dasar pembebanan aktual. Total job cost = direct materials + direct labor + applied FOH. Selisih overhead = FOH aktual - FOH dibebankan. Jika hasilnya positif, overhead underapplied; jika negatif, overhead overapplied."
      },
      {
        "kind": "table",
        "headers": [
          "Dokumen sumber",
          "Pertanyaan yang dijawab",
          "Akun yang biasanya terdampak"
        ],
        "rows": [
          [
            "Materials requisition",
            "Bahan apa yang dipakai, untuk job mana, dan apakah bahan itu langsung atau tidak langsung?",
            "Work in Process untuk direct materials atau Factory Overhead Control untuk indirect materials"
          ],
          [
            "Labor time ticket",
            "Berapa jam kerja yang digunakan pada job tertentu dan berapa tarifnya?",
            "Work in Process untuk direct labor atau Factory Overhead Control untuk indirect labor"
          ],
          [
            "Overhead budget dan activity estimate",
            "Berapa tarif overhead yang akan dipakai selama periode?",
            "Dasar perhitungan Applied Factory Overhead"
          ],
          [
            "Job cost sheet",
            "Berapa total biaya dan biaya per unit untuk job tertentu?",
            "Subsidiary record dari Work in Process"
          ]
        ],
        "caption": "Materi ini menutup fokus Batch 3: job cost sheet, materials requisition, labor time ticket, predetermined overhead rate, applied overhead, dan jurnal."
      },
      {
        "kind": "example",
        "title": "Contoh mini komprehensif - Job 77",
        "blocks": [
          {
            "kind": "p",
            "text": "PT Rengganis memakai normal costing. Estimasi overhead tahunan Rp360.000.000 dan estimasi jam mesin 90.000 jam. Job 77 memakai bahan langsung Rp18.000.000, bahan tidak langsung Rp1.200.000, tenaga kerja langsung 300 jam dengan tarif Rp40.000 per jam, tenaga kerja tidak langsung Rp2.000.000, dan jam mesin aktual untuk job 77 sebanyak 500 jam. Pada akhir periode, overhead aktual total Rp375.000.000 dan overhead dibebankan seluruh job Rp368.000.000. Job 77 selesai tetapi belum terjual."
          },
          {
            "kind": "formula",
            "text": "Predetermined FOH Rate = Rp360.000.000 ÷ 90.000 jam mesin = Rp4.000 per jam mesin\nDirect Labor Job 77 = 300 × Rp40.000 = Rp12.000.000\nApplied FOH Job 77 = 500 × Rp4.000 = Rp2.000.000\nTotal Job Cost = Rp18.000.000 + Rp12.000.000 + Rp2.000.000 = Rp32.000.000",
            "note": "Bahan tidak langsung dan tenaga kerja tidak langsung bukan komponen langsung Job 77; keduanya masuk FOH Control sebagai overhead aktual."
          },
          {
            "kind": "journal",
            "caption": "Pemakaian bahan",
            "lines": [
              { "account": "Work in Process - Job 77", "debit": "Rp18.000.000" },
              { "account": "Factory Overhead Control", "debit": "Rp1.200.000" },
              { "account": "Materials Inventory", "credit": "Rp19.200.000", "isCredit": true }
            ]
          },
          {
            "kind": "journal",
            "caption": "Distribusi tenaga kerja",
            "lines": [
              { "account": "Work in Process - Job 77", "debit": "Rp12.000.000" },
              { "account": "Factory Overhead Control", "debit": "Rp2.000.000" },
              { "account": "Factory Payroll", "credit": "Rp14.000.000", "isCredit": true }
            ]
          },
          {
            "kind": "journal",
            "caption": "Overhead dibebankan ke Job 77",
            "lines": [
              { "account": "Work in Process - Job 77", "debit": "Rp2.000.000" },
              { "account": "Applied Factory Overhead", "credit": "Rp2.000.000", "isCredit": true }
            ]
          },
          {
            "kind": "journal",
            "caption": "Job 77 selesai tetapi belum terjual",
            "lines": [
              { "account": "Finished Goods", "debit": "Rp32.000.000" },
              { "account": "Work in Process - Job 77", "credit": "Rp32.000.000", "isCredit": true }
            ]
          },
          {
            "kind": "formula",
            "text": "Selisih Overhead Akhir Periode = Rp375.000.000 - Rp368.000.000 = Rp7.000.000 underapplied",
            "note": "Underapplied berarti overhead aktual lebih besar daripada overhead yang dibebankan ke produksi."
          }
        ]
      },
      {
        "kind": "table-fill",
        "spec": {
          "title": "Latihan Numerik Batch 3 - Job 88",
          "instruction": "PT Nara memakai tarif FOH Rp6.000 per jam mesin. Job 88 memakai bahan langsung Rp25.000.000, tenaga kerja langsung Rp16.000.000, dan 1.250 jam mesin. Job menghasilkan 100 unit dan sudah selesai, belum terjual. Isi angka kunci job cost sheet.",
          "currency": "Rp",
          "headers": ["Komponen", "Jawaban"],
          "rows": [
            { "id": "tm4-job88-applied", "label": "Applied FOH", "cells": [{ "id": "tm4-job88-applied-answer", "answer": 7500000 }] },
            { "id": "tm4-job88-total", "label": "Total job cost", "cells": [{ "id": "tm4-job88-total-answer", "answer": 48500000 }] },
            { "id": "tm4-job88-unit", "label": "Cost per unit", "cells": [{ "id": "tm4-job88-unit-answer", "answer": 485000 }] },
            { "id": "tm4-job88-fg", "label": "Debit Finished Goods saat job selesai", "cells": [{ "id": "tm4-job88-fg-answer", "answer": 48500000 }] }
          ],
          "feedback": "Applied FOH = 1.250 × 6.000 = 7.500.000. Total job cost = 25.000.000 + 16.000.000 + 7.500.000 = 48.500.000. Cost per unit = 485.000."
        }
      },
      {
        "kind": "journal-builder",
        "spec": {
          "title": "Journal Builder Batch 3 - Job 88",
          "instruction": "Susun jurnal saat Job 88 selesai tetapi belum dijual.",
          "currency": "Rp",
          "accountChoices": ["Finished Goods", "Work in Process", "Cost of Goods Sold", "Sales Revenue"],
          "lines": [
            { "id": "tm4-job88-journal-dr", "account": "Finished Goods", "debit": 48500000 },
            { "id": "tm4-job88-journal-cr", "account": "Work in Process", "credit": 48500000 }
          ],
          "feedback": "Karena job selesai tetapi belum dijual, debitnya Finished Goods dan kreditnya Work in Process. Cost of Goods Sold baru dipakai saat barang terjual."
        }
      },
      {
        "kind": "solution-reveal",
        "title": "Jebakan Ujian Batch 3",
        "prompt": "Baca setelah mengerjakan latihan Job 88.",
        "blocks": [
          {
            "kind": "ul",
            "items": [
              "Jangan memakai overhead aktual untuk menghitung biaya job. Job memakai applied overhead.",
              "Bahan tidak langsung dan tenaga kerja tidak langsung bukan direct cost job, sehingga masuk FOH Control.",
              "Job selesai belum tentu menjadi COGS. Status penjualan menentukan apakah masuk Finished Goods atau COGS.",
              "Jika soal memberi tarif FOH dan dasar aktual, hitung applied FOH lebih dulu sebelum total job cost.",
              "Underapplied/overapplied dihitung secara periodik dari total FOH aktual dibanding total FOH dibebankan, bukan dari satu dokumen bahan saja."
            ]
          }
        ]
      },
      {
        "kind": "h2",
        "text": "Kesalahan Umum TM 4"
      },
      {
        "kind": "table",
        "headers": [
          "Kesalahan",
          "Koreksi"
        ],
        "rows": [
          [
            "Menggunakan actual overhead untuk menghitung cost job",
            "Gunakan applied overhead berdasarkan predetermined overhead rate"
          ],
          [
            "Bahan tidak langsung didebit ke Work in Process",
            "Bahan tidak langsung didebit ke Factory Overhead Control"
          ],
          [
            "Tenaga kerja tidak langsung didebit ke Work in Process",
            "Tenaga kerja tidak langsung didebit ke Factory Overhead Control"
          ],
          [
            "Job selesai langsung didebit ke COGS",
            "Job selesai belum terjual masuk Finished Goods"
          ],
          [
            "Tidak menentukan cost object",
            "Setiap job harus menjadi cost object yang jelas"
          ],
          [
            "Menggabungkan semua job dalam satu sheet",
            "Setiap job harus memiliki job cost sheet sendiri"
          ],
          [
            "Mengabaikan selisih overhead",
            "Underapplied atau overapplied overhead harus dianalisis pada akhir periode"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Latihan Pemahaman TM 4"
      },
      {
        "kind": "ol",
        "items": [
          "Jelaskan mengapa job order costing cocok untuk pesanan khusus tetapi kurang tepat untuk produk homogen massal.",
          "Susun job cost sheet sederhana untuk satu pesanan dengan direct materials, direct labor, dan applied overhead.",
          "Buat jurnal bahan dipakai jika sebagian bahan merupakan direct materials dan sebagian lainnya indirect materials.",
          "Hitung applied overhead jika tarif overhead ditentukan di muka berbasis jam mesin.",
          "Tentukan apakah job masuk WIP, Finished Goods, atau COGS berdasarkan status penyelesaian dan penjualan.",
          "Jelaskan perbedaan Factory Overhead Control dan Applied Factory Overhead."
        ]
      },
      {
        "kind": "h2",
        "text": "Ringkasan TM 4"
      },
      {
        "kind": "p",
        "text": "TM 4 menempatkan job sebagai pusat akumulasi biaya. Biaya bahan langsung, tenaga kerja langsung, dan overhead dibebankan dikumpulkan dalam job cost sheet. Sistem ini menuntut dokumen sumber yang kuat, terutama materials requisition dan labor time ticket, agar biaya dapat ditelusuri dengan benar. Dalam normal costing, overhead dihitung dengan predetermined overhead rate sehingga job dapat diberi biaya sebelum overhead aktual akhir periode diketahui."
      },
      {
        "kind": "h2",
        "text": "Checklist Kelengkapan TM 4"
      },
      {
        "kind": "table",
        "headers": [
          "Komponen",
          "Status"
        ],
        "rows": [
          [
            "Konsep job order costing",
            "Masuk"
          ],
          [
            "Perbandingan job order dan process costing",
            "Masuk"
          ],
          [
            "Job cost sheet lengkap",
            "Masuk"
          ],
          [
            "Materials requisition dan labor time ticket",
            "Masuk"
          ],
          [
            "Delapan jurnal dasar",
            "Masuk"
          ],
          [
            "Predetermined overhead rate",
            "Masuk"
          ],
          [
            "Underapplied dan overapplied overhead",
            "Masuk"
          ],
          [
            "Job costing pada jasa",
            "Masuk"
          ],
          [
            "Latihan dan kesalahan umum",
            "Masuk"
          ]
        ]
      }
    ]
  },
  "5": {
    "id": "akbi-tm-5",
    "tm": 5,
    "title": "Process Costing Metode Rata-Rata atau Average Method",
    "ref": "Carter Cost Accounting Ch. 6 Appendix Average Costing · AKBI Master Content Bagian 1 · HTML Pra-UTS sebagai pembanding TM 5",
    "source": "ZIP website utama + AKBI_Master_Content_Bagian_1_TM1-TM11.md + AKBI_v6_Complete.html sebagai pembanding TM 1-7 + Carter/Cengage Cost Accounting Ch. 5, Ch. 6, dan Ch. 7",
    "phase": "pra_uts",
    "manualCheckCount": 0,
    "intro": "Process costing average method digunakan untuk produksi homogen yang melewati departemen atau cost center. Metode average menggabungkan biaya BDP awal dengan biaya periode berjalan, lalu menghitung kos per unit ekuivalen untuk membebankan biaya ke unit selesai dan BDP akhir.",
    "objectives": [
      "Menjelaskan karakteristik process costing dan cost center.",
      "Membedakan process costing dan job order costing.",
      "Menyusun Cost of Production Report dengan average method.",
      "Menghitung quantity schedule dan equivalent units of production.",
      "Menghitung cost per equivalent unit berdasarkan average method.",
      "Membebankan biaya ke unit selesai dan BDP akhir.",
      "Menjelaskan transferred-in cost pada departemen lanjutan.",
      "Membuat jurnal dasar process costing dan transfer antar departemen."
    ],
    "blocks": [
      {
        "kind": "h2",
        "text": "Orientasi TM 5"
      },
      {
        "kind": "p",
        "text": "Process costing digunakan ketika unit produk bersifat homogen, diproduksi terus-menerus, dan melewati satu atau beberapa departemen produksi. Fokusnya bukan biaya per pesanan, melainkan biaya per departemen atau cost center selama satu periode."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Arah membaca TM 5",
        "text": "Dalam metode rata-rata tertimbang atau average method, biaya BDP awal digabung dengan biaya periode berjalan. Karena itu, kos per unit ekuivalen dihitung dari total biaya gabungan, bukan hanya biaya periode berjalan."
      },
      {
        "kind": "h2",
        "text": "Peta Submateri TM 5"
      },
      {
        "kind": "table",
        "headers": [
          "No",
          "Submateri",
          "Fungsi Belajar"
        ],
        "rows": [
          [
            "1",
            "Karakteristik process costing",
            "Menentukan kapan process costing dipakai"
          ],
          [
            "2",
            "Cost center dan departemen produksi",
            "Menjelaskan tempat biaya dikumpulkan"
          ],
          [
            "3",
            "Cost of production report",
            "Menyusun laporan biaya produksi"
          ],
          [
            "4",
            "Equivalent units of production",
            "Mengukur produk selesai dan BDP akhir secara ekuivalen"
          ],
          [
            "5",
            "Average method",
            "Menggabungkan biaya BDP awal dan biaya periode berjalan"
          ],
          [
            "6",
            "Transferred-in cost",
            "Menangani biaya dari departemen sebelumnya"
          ],
          [
            "7",
            "Cost reconciliation",
            "Mencocokkan biaya yang dipertanggungjawabkan dan biaya yang dibebankan"
          ],
          [
            "8",
            "Jurnal process costing",
            "Mencatat biaya per departemen dan transfer antar departemen"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Karakteristik Process Costing"
      },
      {
        "kind": "p",
        "text": "Process costing digunakan untuk industri yang menghasilkan produk seragam melalui proses berulang, seperti makanan dan minuman, semen, tekstil, bahan kimia, minyak, kertas, atau produk massal lain. Karena unit produk relatif sama, biaya dikumpulkan per departemen lalu dirata-ratakan ke unit ekuivalen."
      },
      {
        "kind": "table",
        "headers": [
          "Aspek",
          "Process Costing",
          "Job Order Costing"
        ],
        "rows": [
          [
            "Cost object utama",
            "Departemen atau proses",
            "Job, pesanan, kontrak, atau proyek"
          ],
          [
            "Jenis produk",
            "Homogen dan massal",
            "Heterogen atau sesuai pesanan"
          ],
          [
            "Dokumen utama",
            "Cost of Production Report",
            "Job Cost Sheet"
          ],
          [
            "Akumulasi biaya",
            "Per departemen selama periode",
            "Per job"
          ],
          [
            "Kos per unit",
            "Total biaya departemen ÷ unit ekuivalen",
            "Total job cost ÷ unit dalam job"
          ],
          [
            "Contoh",
            "Minuman botol, semen, mie instan",
            "Percetakan khusus, konstruksi, jasa audit"
          ]
        ]
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "Syarat penting",
        "text": "Process costing hanya rasional jika produk dalam cost center relatif sama dalam konsumsi sumber daya. Jika produk sangat berbeda, rata-rata biaya dapat mendistorsi kos produk."
      },
      {
        "kind": "h2",
        "text": "Cost of Production Report"
      },
      {
        "kind": "p",
        "text": "Cost of Production Report adalah laporan utama process costing. Laporan ini menunjukkan jumlah unit yang dipertanggungjawabkan, unit ekuivalen, biaya yang harus dipertanggungjawabkan, kos per unit ekuivalen, dan alokasi biaya ke produk selesai serta BDP akhir."
      },
      {
        "kind": "table",
        "headers": [
          "Bagian Laporan",
          "Isi",
          "Tujuan"
        ],
        "rows": [
          [
            "1. Quantity schedule",
            "BDP awal, unit masuk proses, unit selesai, BDP akhir",
            "Memastikan arus unit seimbang"
          ],
          [
            "2. Equivalent units",
            "Unit selesai dan BDP akhir ekuivalen per elemen biaya",
            "Mengukur output yang setara dengan unit selesai"
          ],
          [
            "3. Costs to account for",
            "Biaya BDP awal dan biaya periode berjalan",
            "Menentukan total biaya yang harus dipertanggungjawabkan"
          ],
          [
            "4. Cost per EUP",
            "Total biaya per elemen ÷ EUP per elemen",
            "Menentukan kos per unit ekuivalen"
          ],
          [
            "5. Costs accounted for",
            "Biaya produk selesai dan biaya BDP akhir",
            "Merekonsiliasi biaya"
          ],
          [
            "6. Reconciliation",
            "Total costs to account for = total costs accounted for",
            "Memastikan tidak ada biaya hilang"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Equivalent Units of Production dalam Average Method"
      },
      {
        "kind": "p",
        "text": "Unit ekuivalen menunjukkan berapa unit selesai yang setara dengan pekerjaan yang sudah dilakukan. Produk selesai dihitung 100%. BDP akhir dikalikan dengan tingkat penyelesaiannya untuk setiap elemen biaya. Jika bahan ditambahkan pada awal proses, BDP akhir biasanya 100% untuk bahan; jika tenaga kerja dan overhead terjadi bertahap, BDP akhir memakai persentase konversi."
      },
      {
        "kind": "formula",
        "text": "EUP Average = Unit selesai ditransfer + (Unit BDP akhir × Persentase penyelesaian BDP akhir)",
        "note": "Rumus dihitung per elemen biaya. EUP bahan dapat berbeda dari EUP tenaga kerja dan overhead."
      },
      {
        "kind": "table",
        "headers": [
          "Elemen Biaya",
          "Contoh Tingkat Penyelesaian",
          "Dampak pada EUP"
        ],
        "rows": [
          [
            "Direct materials ditambahkan di awal proses",
            "BDP akhir 100% untuk bahan",
            "Semua unit BDP akhir masuk EUP bahan penuh"
          ],
          [
            "Direct labor terjadi sepanjang proses",
            "BDP akhir sesuai % penyelesaian konversi",
            "Hanya bagian yang sudah dikerjakan masuk EUP"
          ],
          [
            "Factory overhead mengikuti aktivitas konversi",
            "Biasanya sama dengan direct labor jika overhead berbasis proses",
            "EUP overhead sering sama dengan EUP tenaga kerja"
          ],
          [
            "Transferred-in cost dari departemen sebelumnya",
            "Biasanya 100% untuk unit yang masuk departemen lanjutan",
            "Diperlakukan sebagai elemen biaya tersendiri"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Average Method"
      },
      {
        "kind": "p",
        "text": "Average method menggabungkan biaya BDP awal dengan biaya periode berjalan. Metode ini tidak memisahkan pekerjaan yang dilakukan pada periode sebelumnya dan periode sekarang. Akibatnya, kos per unit ekuivalen mencerminkan rata-rata biaya seluruh pekerjaan yang tersedia dalam periode tersebut."
      },
      {
        "kind": "formula",
        "text": "Total Cost Average = Biaya BDP awal + Biaya periode berjalan\nCost per EUP = Total Cost Average ÷ EUP Average\nCost of Units Transferred Out = Unit selesai × Total cost per EUP\nCost of Ending WIP = EUP BDP akhir × Cost per EUP",
        "note": "Jika elemen biaya lebih dari satu, hitung cost per EUP untuk materials, labor, overhead, dan transferred-in cost secara terpisah."
      },
      {
        "kind": "h2",
        "text": "Format Lengkap Cost of Production Report - Average Method"
      },
      {
        "kind": "table",
        "headers": [
          "Bagian",
          "Baris yang Wajib Ada"
        ],
        "rows": [
          [
            "A. Quantity Schedule",
            "BDP awal + unit dimasukkan = unit selesai ditransfer + BDP akhir"
          ],
          [
            "B. Equivalent Units",
            "Unit selesai ditransfer + BDP akhir ekuivalen untuk setiap elemen biaya"
          ],
          [
            "C. Costs to Account For",
            "Biaya BDP awal + biaya periode berjalan untuk bahan, tenaga kerja, dan overhead"
          ],
          [
            "D. Cost per Equivalent Unit",
            "Total biaya setiap elemen ÷ EUP setiap elemen"
          ],
          [
            "E. Costs Accounted For",
            "Biaya unit selesai ditransfer + biaya BDP akhir"
          ],
          [
            "F. Cost Reconciliation",
            "Total biaya yang dipertanggungjawabkan harus sama dengan total biaya yang dibebankan"
          ]
        ],
        "caption": "Format ini harus selalu lengkap karena laporan biaya produksi adalah output utama process costing."
      },
      {
        "kind": "table",
        "headers": [
          "Template Quantity Schedule",
          "Unit"
        ],
        "rows": [
          [
            "BDP awal",
            "Diisi berdasarkan data soal"
          ],
          [
            "Unit masuk proses",
            "Diisi berdasarkan data soal"
          ],
          [
            "Total unit yang harus dipertanggungjawabkan",
            "BDP awal + unit masuk proses"
          ],
          [
            "Unit selesai dan ditransfer",
            "Diisi berdasarkan data soal"
          ],
          [
            "BDP akhir",
            "Total unit dipertanggungjawabkan - unit selesai"
          ],
          [
            "Total unit yang dipertanggungjawabkan",
            "Unit selesai + BDP akhir"
          ]
        ]
      },
      {
        "kind": "table",
        "headers": [
          "Template Equivalent Units Average",
          "Materials",
          "Conversion Cost"
        ],
        "rows": [
          [
            "Unit selesai ditransfer",
            "100% × unit selesai",
            "100% × unit selesai"
          ],
          [
            "BDP akhir",
            "% bahan × unit BDP akhir",
            "% konversi × unit BDP akhir"
          ],
          [
            "Total EUP",
            "Jumlah EUP bahan",
            "Jumlah EUP konversi"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Transferred-In Cost pada Departemen Lanjutan"
      },
      {
        "kind": "p",
        "text": "Jika produk melewati lebih dari satu departemen, departemen kedua menerima biaya dari departemen pertama. Biaya ini disebut transferred-in cost dan diperlakukan seperti elemen biaya tersendiri. Dalam banyak soal, transferred-in cost dianggap sudah melekat 100% pada unit yang diterima oleh departemen lanjutan."
      },
      {
        "kind": "table",
        "headers": [
          "Departemen Pertama",
          "Departemen Lanjutan"
        ],
        "rows": [
          [
            "Tidak memiliki transferred-in cost",
            "Memiliki transferred-in cost dari departemen sebelumnya"
          ],
          [
            "Menghitung materials, labor, overhead",
            "Menghitung transferred-in cost, materials tambahan jika ada, labor, overhead"
          ],
          [
            "Transfer keluar ke departemen berikutnya",
            "Menerima transfer masuk sebagai biaya awal unit"
          ],
          [
            "Jurnal: WIP Dept II / WIP Dept I",
            "Jurnal menerima biaya dari Dept I"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Jurnal Process Costing Average"
      },
      {
        "kind": "journal",
        "caption": "Bahan ditambahkan ke Departemen I",
        "lines": [
          {
            "account": "Work in Process - Departemen I",
            "debit": "jumlah sesuai data transaksi"
          },
          {
            "account": "Materials Inventory",
            "credit": "jumlah sesuai data transaksi",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "journal",
        "caption": "Tenaga kerja langsung Departemen I",
        "lines": [
          {
            "account": "Work in Process - Departemen I",
            "debit": "jumlah sesuai data transaksi"
          },
          {
            "account": "Payroll atau Wages Payable",
            "credit": "jumlah sesuai data transaksi",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "journal",
        "caption": "Overhead dibebankan ke Departemen I",
        "lines": [
          {
            "account": "Work in Process - Departemen I",
            "debit": "jumlah sesuai data transaksi"
          },
          {
            "account": "Applied Factory Overhead",
            "credit": "jumlah sesuai data transaksi",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "journal",
        "caption": "Transfer produk dari Departemen I ke Departemen II",
        "lines": [
          {
            "account": "Work in Process - Departemen II",
            "debit": "cost transferred out Dept I"
          },
          {
            "account": "Work in Process - Departemen I",
            "credit": "cost transferred out Dept I",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "journal",
        "caption": "Produk selesai dari departemen terakhir",
        "lines": [
          {
            "account": "Finished Goods",
            "debit": "cost transferred to finished goods"
          },
          {
            "account": "Work in Process - Departemen terakhir",
            "credit": "cost transferred to finished goods",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "example",
        "title": "Cost of Production Report - Average Method",
        "blocks": [
          {
            "kind": "p",
            "text": "Departemen A memiliki BDP awal 100 unit. Selama periode berjalan dimasukkan 900 unit. Unit selesai dan ditransfer 800 unit. BDP akhir 200 unit, selesai 100% untuk materials dan 50% untuk conversion cost. Biaya BDP awal: materials Rp1.000 dan conversion Rp600. Biaya periode berjalan: materials Rp9.000 dan conversion Rp7.600."
          },
          {
            "kind": "table",
            "headers": [
              "Quantity Schedule",
              "Unit"
            ],
            "rows": [
              [
                "BDP awal",
                "100"
              ],
              [
                "Unit masuk proses",
                "900"
              ],
              [
                "Total unit dipertanggungjawabkan",
                "1.000"
              ],
              [
                "Unit selesai ditransfer",
                "800"
              ],
              [
                "BDP akhir",
                "200"
              ],
              [
                "Total unit dipertanggungjawabkan",
                "1.000"
              ]
            ]
          },
          {
            "kind": "table",
            "headers": [
              "Equivalent Units - Average",
              "Materials",
              "Conversion"
            ],
            "rows": [
              [
                "Unit selesai",
                "800",
                "800"
              ],
              [
                "BDP akhir",
                "200 × 100% = 200",
                "200 × 50% = 100"
              ],
              [
                "Total EUP",
                "1.000",
                "900"
              ]
            ]
          },
          {
            "kind": "table",
            "headers": [
              "Cost per EUP",
              "Materials",
              "Conversion"
            ],
            "rows": [
              [
                "Biaya BDP awal",
                "Rp1.000",
                "Rp600"
              ],
              [
                "Biaya periode berjalan",
                "Rp9.000",
                "Rp7.600"
              ],
              [
                "Total biaya",
                "Rp10.000",
                "Rp8.200"
              ],
              [
                "Total EUP",
                "1.000",
                "900"
              ],
              [
                "Cost per EUP",
                "Rp10,00",
                "Rp9,11"
              ]
            ]
          },
          {
            "kind": "table",
            "headers": [
              "Cost Assignment",
              "Perhitungan",
              "Jumlah"
            ],
            "rows": [
              [
                "Unit selesai ditransfer",
                "800 × (Rp10,00 + Rp9,11)",
                "Rp15.288,89"
              ],
              [
                "BDP akhir materials",
                "200 × Rp10,00",
                "Rp2.000,00"
              ],
              [
                "BDP akhir conversion",
                "100 × Rp9,11",
                "Rp911,11"
              ],
              [
                "Total BDP akhir",
                "Rp2.000,00 + Rp911,11",
                "Rp2.911,11"
              ],
              [
                "Total biaya dipertanggungjawabkan",
                "Rp15.288,89 + Rp2.911,11",
                "Rp18.200,00"
              ]
            ]
          }
        ]
      },
      {
        "kind": "h2",
        "text": "Batch 12C - Practice Case Data Terlihat TM 5"
      },
      {
        "kind": "table",
        "headers": ["Data Departemen Pemotongan PT Alexandra", "Jumlah"],
        "rows": [
          ["BDP awal", "250 unit"],
          ["Unit ditambahkan periode ini", "1.250 unit"],
          ["Unit selesai dan ditransfer", "1.000 unit"],
          ["BDP akhir", "500 unit, 50% selesai"],
          ["Biaya BDP awal", "Rp1.000.000"],
          ["Biaya ditambahkan periode berjalan", "Rp6.500.000"]
        ],
        "caption": "Diminta: susun ringkasan average process costing, cost per EUP, biaya transfer out, dan biaya BDP akhir."
      },
      {
        "kind": "table-fill",
        "spec": {
          "title": "Workspace Weighted-Average Process Costing - PT Alexandra",
          "instruction": "Metode average menggabungkan biaya BDP awal dengan biaya periode berjalan.",
          "currency": "Rp",
          "headers": ["Komponen", "Jawaban"],
          "rows": [
            { "id": "tm5-ending-units", "label": "Unit BDP akhir", "cells": [{ "id": "tm5-ending-units-answer", "answer": 500 }] },
            { "id": "tm5-eup", "label": "Unit ekuivalen average", "cells": [{ "id": "tm5-eup-answer", "answer": 1250 }] },
            { "id": "tm5-cost-per-eup", "label": "Biaya per unit ekuivalen", "cells": [{ "id": "tm5-cost-per-eup-answer", "answer": 6000 }] },
            { "id": "tm5-transfer", "label": "Biaya produk ditransfer", "cells": [{ "id": "tm5-transfer-answer", "answer": 6000000 }] },
            { "id": "tm5-ending-cost", "label": "Biaya BDP akhir", "cells": [{ "id": "tm5-ending-cost-answer", "answer": 1500000 }] }
          ]
        }
      },
      {
        "kind": "solution-reveal",
        "title": "Pembahasan PT Alexandra",
        "prompt": "Buka setelah mengisi workspace average method.",
        "blocks": [
          { "kind": "p", "text": "Unit BDP akhir = 250 + 1.250 - 1.000 = 500 unit. EUP average = 1.000 + 500×50% = 1.250 unit. Total biaya = Rp1.000.000 + Rp6.500.000 = Rp7.500.000. Cost per EUP = Rp7.500.000 ÷ 1.250 = Rp6.000. Transfer out = 1.000×Rp6.000 = Rp6.000.000. BDP akhir = 250 EUP×Rp6.000 = Rp1.500.000." }
        ]
      },
      {
        "kind": "h2",
        "text": "Batch 4 Deepening - Weighted-Average dengan Materials dan Conversion"
      },
      {
        "kind": "p",
        "text": "Batch 4 memperjelas process costing dengan dua elemen biaya. Dalam soal ujian, materials dan conversion cost sering memiliki EUP berbeda. Materials bisa 100% jika ditambahkan di awal proses, sedangkan conversion cost mengikuti tingkat penyelesaian fisik BDP akhir. Karena itu, jangan memakai satu EUP untuk semua elemen kecuali soal secara eksplisit menyederhanakan biaya menjadi satu kelompok."
      },
      {
        "kind": "formula",
        "text": "EUP Materials Average = Unit selesai + (BDP akhir × % materials)\nEUP Conversion Average = Unit selesai + (BDP akhir × % conversion)\nCost per EUP Materials = (Materials BDP awal + Materials current) ÷ EUP materials\nCost per EUP Conversion = (Conversion BDP awal + Conversion current) ÷ EUP conversion",
        "note": "Weighted-average selalu menggabungkan biaya BDP awal dan biaya current. Pemisahan EUP per elemen biaya tetap harus dilakukan."
      },
      {
        "kind": "example",
        "title": "Mini Lab Average - PT Sora dengan Dua Elemen Biaya",
        "blocks": [
          {
            "kind": "p",
            "text": "Data: BDP awal 200 unit. Unit dimulai 1.000 unit. Unit selesai 900 unit. BDP akhir 300 unit, materials 100% dan conversion 40%. Biaya BDP awal: materials Rp1.000.000 dan conversion Rp600.000. Current cost: materials Rp5.000.000 dan conversion Rp4.200.000."
          },
          {
            "kind": "table",
            "headers": ["Weighted-Average EUP", "Materials", "Conversion"],
            "rows": [
              ["Unit selesai", "900", "900"],
              ["BDP akhir", "300 × 100% = 300", "300 × 40% = 120"],
              ["Total EUP", "1.200", "1.020"]
            ]
          },
          {
            "kind": "table",
            "headers": ["Cost per EUP", "Materials", "Conversion"],
            "rows": [
              ["Total biaya", "Rp6.000.000", "Rp4.800.000"],
              ["EUP", "1.200", "1.020"],
              ["Cost per EUP", "Rp5.000", "Rp4.705,88"]
            ]
          },
          {
            "kind": "table",
            "headers": ["Cost Assignment", "Perhitungan", "Jumlah"],
            "rows": [
              ["Transferred out", "900 × (Rp5.000 + Rp4.705,88)", "Rp8.735.294,12"],
              ["Ending WIP materials", "300 × Rp5.000", "Rp1.500.000,00"],
              ["Ending WIP conversion", "120 × Rp4.705,88", "Rp564.705,88"],
              ["Total ending WIP", "Rp1.500.000 + Rp564.705,88", "Rp2.064.705,88"],
              ["Total assigned", "Transferred out + ending WIP", "Rp10.800.000,00"]
            ]
          }
        ]
      },
      {
        "kind": "callout",
        "variant": "key",
        "title": "Rekonsiliasi wajib",
        "text": "Dalam setiap laporan biaya produksi, total costs to account for harus sama dengan total costs accounted for. Jika tidak sama, biasanya kesalahan ada pada EUP, pembulatan cost per EUP, atau status BDP akhir."
      },
      {
        "kind": "h2",
        "text": "Kesalahan Umum TM 5"
      },
      {
        "kind": "table",
        "headers": [
          "Kesalahan",
          "Koreksi"
        ],
        "rows": [
          [
            "Mengabaikan BDP awal",
            "Average method menggabungkan BDP awal dengan biaya periode berjalan"
          ],
          [
            "Menggunakan satu EUP untuk semua elemen biaya",
            "EUP materials dapat berbeda dari conversion cost"
          ],
          [
            "BDP akhir dihitung 100% untuk semua elemen",
            "Gunakan persentase penyelesaian masing-masing elemen"
          ],
          [
            "Transferred-in cost dilupakan di departemen lanjutan",
            "Transferred-in cost harus diperlakukan sebagai elemen biaya sendiri"
          ],
          [
            "Total biaya tidak direkonsiliasi",
            "Costs to account for harus sama dengan costs accounted for"
          ],
          [
            "Pembulatan dilakukan terlalu awal",
            "Hitung dengan angka penuh, bulatkan pada hasil akhir"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Latihan Pemahaman TM 5"
      },
      {
        "kind": "ol",
        "items": [
          "Jelaskan perbedaan job order costing dan process costing.",
          "Susun quantity schedule dari data BDP awal, unit masuk, unit selesai, dan BDP akhir.",
          "Hitung EUP materials dan conversion cost dengan average method.",
          "Hitung cost per EUP untuk bahan, tenaga kerja, dan overhead.",
          "Alokasikan biaya ke unit selesai dan BDP akhir.",
          "Buat jurnal transfer biaya dari Departemen I ke Departemen II.",
          "Jelaskan perlakuan transferred-in cost pada departemen lanjutan."
        ]
      },
      {
        "kind": "h2",
        "text": "Ringkasan TM 5"
      },
      {
        "kind": "p",
        "text": "TM 5 membahas process costing dengan average method. Sistem ini digunakan untuk produk homogen yang diproses secara berkelanjutan. Laporan utama yang harus dikuasai adalah Cost of Production Report, yang terdiri dari quantity schedule, equivalent units, costs to account for, cost per EUP, costs accounted for, dan rekonsiliasi biaya. Dalam average method, biaya BDP awal digabung dengan biaya periode berjalan."
      },
      {
        "kind": "h2",
        "text": "Checklist Kelengkapan TM 5"
      },
      {
        "kind": "table",
        "headers": [
          "Komponen",
          "Status"
        ],
        "rows": [
          [
            "Karakteristik process costing",
            "Masuk"
          ],
          [
            "Perbandingan process dan job order costing",
            "Masuk"
          ],
          [
            "Cost of Production Report lengkap",
            "Masuk"
          ],
          [
            "Equivalent units average",
            "Masuk"
          ],
          [
            "Cost per EUP",
            "Masuk"
          ],
          [
            "Transferred-in cost",
            "Masuk"
          ],
          [
            "Jurnal process costing",
            "Masuk"
          ],
          [
            "Contoh laporan average",
            "Masuk"
          ],
          [
            "Latihan dan kesalahan umum",
            "Masuk"
          ]
        ]
      }
    ]
  },
  "6": {
    "id": "akbi-tm-6",
    "tm": 6,
    "title": "Process Costing Metode FIFO",
    "ref": "Carter Cost Accounting Ch. 6 FIFO Costing · AKBI Master Content Bagian 1 · HTML Pra-UTS sebagai pembanding TM 6",
    "source": "ZIP website utama + AKBI_Master_Content_Bagian_1_TM1-TM11.md + AKBI_v6_Complete.html sebagai pembanding TM 1-7 + Carter/Cengage Cost Accounting Ch. 5, Ch. 6, dan Ch. 7",
    "phase": "pra_uts",
    "manualCheckCount": 0,
    "intro": "Process costing FIFO memisahkan pekerjaan dan biaya periode sebelumnya dari pekerjaan dan biaya periode berjalan. Fokus TM 6 adalah menghitung pekerjaan sisa BDP awal, unit started and completed, EUP FIFO, cost per EUP FIFO, transferred-in cost, dan rekonsiliasi biaya.",
    "objectives": [
      "Membedakan FIFO method dan average method dalam process costing.",
      "Menghitung unit started and completed.",
      "Menghitung pekerjaan sisa BDP awal.",
      "Menghitung equivalent units FIFO untuk setiap elemen biaya.",
      "Menghitung cost per equivalent unit FIFO dari current cost.",
      "Membebankan biaya ke BDP awal selesai, started and completed, dan BDP akhir.",
      "Menjelaskan transferred-in cost dalam departemen lanjutan.",
      "Menghubungkan unit hilang dan produk cacat dengan laporan process costing."
    ],
    "blocks": [
      {
        "kind": "h2",
        "text": "Orientasi TM 6"
      },
      {
        "kind": "p",
        "text": "TM 6 membahas process costing metode FIFO. Berbeda dari average method, FIFO memisahkan pekerjaan dan biaya periode sebelumnya dari pekerjaan dan biaya periode berjalan. Karena itu, biaya per unit ekuivalen FIFO dihitung hanya dari biaya yang ditambahkan pada periode berjalan."
      },
      {
        "kind": "callout",
        "variant": "key",
        "title": "Arah membaca FIFO",
        "text": "FIFO menjawab pertanyaan: berapa biaya yang dikeluarkan periode ini untuk menyelesaikan BDP awal, mengerjakan unit yang dimulai dan selesai, serta mengerjakan BDP akhir?"
      },
      {
        "kind": "h2",
        "text": "Peta Submateri TM 6"
      },
      {
        "kind": "table",
        "headers": [
          "No",
          "Submateri",
          "Fungsi Belajar"
        ],
        "rows": [
          [
            "1",
            "Perbedaan average dan FIFO",
            "Menentukan perlakuan BDP awal"
          ],
          [
            "2",
            "Pekerjaan sisa BDP awal",
            "Menghitung pekerjaan yang masih harus diselesaikan"
          ],
          [
            "3",
            "Unit started and completed",
            "Memisahkan unit baru yang selesai dalam periode berjalan"
          ],
          [
            "4",
            "Equivalent units FIFO",
            "Menghitung EUP periode berjalan"
          ],
          [
            "5",
            "Cost per EUP FIFO",
            "Menggunakan biaya periode berjalan saja"
          ],
          [
            "6",
            "Cost assignment FIFO",
            "Membebankan biaya ke BDP awal selesai, started and completed, dan BDP akhir"
          ],
          [
            "7",
            "Transferred-in cost dalam FIFO",
            "Menangani biaya departemen sebelumnya"
          ],
          [
            "8",
            "Unit hilang dan produk cacat sebagai pengantar",
            "Menghubungkan FIFO dengan TM 7"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Average Method vs FIFO Method"
      },
      {
        "kind": "table",
        "headers": [
          "Aspek",
          "Average Method",
          "FIFO Method"
        ],
        "rows": [
          [
            "Biaya BDP awal",
            "Digabung dengan biaya periode berjalan",
            "Dipisahkan sebagai biaya periode sebelumnya"
          ],
          [
            "Cost per EUP",
            "Total biaya BDP awal + biaya periode berjalan ÷ EUP average",
            "Biaya periode berjalan saja ÷ EUP FIFO"
          ],
          [
            "Pekerjaan BDP awal",
            "Tidak dipisahkan",
            "Dihitung hanya bagian yang belum selesai"
          ],
          [
            "Unit dimulai dan selesai",
            "Tidak perlu dipisahkan",
            "Harus dihitung"
          ],
          [
            "Tingkat ketelitian",
            "Lebih sederhana",
            "Lebih rinci"
          ],
          [
            "Cocok untuk",
            "Kondisi biaya relatif stabil",
            "Analisis periodik yang ingin memisahkan biaya lama dan baru"
          ]
        ]
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "Jebakan utama FIFO",
        "text": "Jangan memasukkan pekerjaan yang sudah dilakukan pada BDP awal ke EUP FIFO. Yang masuk EUP FIFO hanya pekerjaan sisa BDP awal, unit yang dimulai dan selesai, serta pekerjaan pada BDP akhir."
      },
      {
        "kind": "h2",
        "text": "Struktur Equivalent Units FIFO"
      },
      {
        "kind": "p",
        "text": "Equivalent units FIFO terdiri atas tiga bagian: pekerjaan yang diperlukan untuk menyelesaikan BDP awal, unit yang dimulai dan selesai dalam periode berjalan, serta BDP akhir yang sudah dikerjakan pada periode berjalan."
      },
      {
        "kind": "formula",
        "text": "Unit Started and Completed = Unit selesai ditransfer - BDP awal\nPekerjaan sisa BDP awal = Unit BDP awal × (100% - % penyelesaian awal)\nEUP FIFO = Pekerjaan sisa BDP awal + Unit started and completed + EUP BDP akhir",
        "note": "Hitung rumus ini untuk setiap elemen biaya. Bahan, tenaga kerja, overhead, dan transferred-in cost dapat memiliki EUP yang berbeda."
      },
      {
        "kind": "table",
        "headers": [
          "Komponen EUP FIFO",
          "Materials",
          "Conversion Cost"
        ],
        "rows": [
          [
            "Pekerjaan sisa BDP awal",
            "Jika bahan sudah 100% pada awal, sisa bahan = 0",
            "Unit BDP awal × sisa % konversi"
          ],
          [
            "Unit started and completed",
            "100% × unit started and completed",
            "100% × unit started and completed"
          ],
          [
            "BDP akhir",
            "Unit BDP akhir × % bahan BDP akhir",
            "Unit BDP akhir × % konversi BDP akhir"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Format Lengkap Cost of Production Report - FIFO"
      },
      {
        "kind": "table",
        "headers": [
          "Bagian",
          "Baris yang Wajib Ada"
        ],
        "rows": [
          [
            "A. Quantity Schedule",
            "BDP awal + unit masuk = unit selesai + BDP akhir"
          ],
          [
            "B. Equivalent Units FIFO",
            "Pekerjaan sisa BDP awal + started and completed + BDP akhir ekuivalen"
          ],
          [
            "C. Current Costs Added",
            "Hanya biaya periode berjalan untuk materials, labor, dan overhead"
          ],
          [
            "D. Cost per EUP FIFO",
            "Current cost ÷ EUP FIFO"
          ],
          [
            "E. Costs Accounted For",
            "BDP awal selesai, unit started and completed, dan BDP akhir"
          ],
          [
            "F. Reconciliation",
            "Biaya BDP awal + biaya periode berjalan = total biaya yang dibebankan"
          ]
        ]
      },
      {
        "kind": "table",
        "headers": [
          "Template Cost Assignment FIFO",
          "Isi"
        ],
        "rows": [
          [
            "BDP awal selesai",
            "Biaya BDP awal yang sudah ada + biaya periode berjalan untuk menyelesaikan sisa pekerjaan"
          ],
          [
            "Unit started and completed",
            "Unit started and completed × total current cost per EUP"
          ],
          [
            "Total transferred out",
            "BDP awal selesai + unit started and completed"
          ],
          [
            "BDP akhir",
            "EUP BDP akhir tiap elemen × cost per EUP tiap elemen"
          ],
          [
            "Total costs accounted for",
            "Transferred out + BDP akhir"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Cost per EUP FIFO"
      },
      {
        "kind": "p",
        "text": "Cost per EUP FIFO hanya memakai biaya yang ditambahkan selama periode berjalan. Biaya BDP awal tidak dibagi lagi ke seluruh unit karena biaya tersebut berasal dari periode sebelumnya."
      },
      {
        "kind": "formula",
        "text": "Cost per EUP FIFO = Current Cost Added during the Period ÷ EUP FIFO",
        "note": "Jika ada materials, labor, dan overhead, hitung cost per EUP masing-masing. Jika labor dan overhead digabung sebagai conversion cost, hitung satu cost per EUP konversi."
      },
      {
        "kind": "h2",
        "text": "Transferred-In Cost dalam FIFO"
      },
      {
        "kind": "p",
        "text": "Pada departemen lanjutan, biaya dari departemen sebelumnya disebut transferred-in cost. Dalam FIFO, transferred-in cost pada BDP awal diperlakukan sebagai biaya lama. Transferred-in cost yang diterima selama periode berjalan diperlakukan sebagai current cost untuk unit yang masuk dari departemen sebelumnya."
      },
      {
        "kind": "table",
        "headers": [
          "Situasi",
          "Perlakuan FIFO"
        ],
        "rows": [
          [
            "Transferred-in cost pada BDP awal",
            "Masuk biaya lama BDP awal"
          ],
          [
            "Transferred-in cost periode berjalan",
            "Masuk current cost dan dihitung cost per EUP"
          ],
          [
            "Unit masuk dari departemen sebelumnya",
            "Biasanya 100% untuk transferred-in cost"
          ],
          [
            "Bahan tambahan menyebabkan unit bertambah",
            "Quantity schedule harus menampilkan kenaikan unit jika soal menyatakan ada tambahan unit"
          ],
          [
            "Bahan ditambahkan setelah titik tertentu",
            "Persentase penyelesaian materials harus mengikuti titik penambahan bahan"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Jurnal Process Costing FIFO"
      },
      {
        "kind": "p",
        "text": "Jurnal dasar process costing tidak berubah hanya karena metode FIFO. Perbedaan average dan FIFO terletak pada perhitungan laporan biaya produksi, bukan pada nama akun jurnal."
      },
      {
        "kind": "journal",
        "caption": "Transfer produk dari Departemen I ke Departemen II",
        "lines": [
          {
            "account": "Work in Process - Departemen II",
            "debit": "cost transferred out Dept I"
          },
          {
            "account": "Work in Process - Departemen I",
            "credit": "cost transferred out Dept I",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "journal",
        "caption": "Transfer produk selesai ke Finished Goods",
        "lines": [
          {
            "account": "Finished Goods",
            "debit": "cost of completed units from final department"
          },
          {
            "account": "Work in Process - Departemen terakhir",
            "credit": "cost of completed units from final department",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "example",
        "title": "Cost of Production Report - FIFO Method",
        "blocks": [
          {
            "kind": "p",
            "text": "Gunakan data yang sama dengan contoh average: BDP awal 100 unit, selesai 100% materials dan 40% conversion. Unit masuk 900. Unit selesai dan ditransfer 800. BDP akhir 200 unit, selesai 100% materials dan 50% conversion. Biaya BDP awal total Rp1.600. Current cost: materials Rp9.000 dan conversion Rp7.600."
          },
          {
            "kind": "table",
            "headers": [
              "Quantity Schedule",
              "Unit"
            ],
            "rows": [
              [
                "BDP awal",
                "100"
              ],
              [
                "Unit masuk proses",
                "900"
              ],
              [
                "Total unit dipertanggungjawabkan",
                "1.000"
              ],
              [
                "Unit selesai ditransfer",
                "800"
              ],
              [
                "BDP akhir",
                "200"
              ],
              [
                "Total unit dipertanggungjawabkan",
                "1.000"
              ]
            ]
          },
          {
            "kind": "formula",
            "text": "Unit started and completed = 800 - 100 = 700"
          },
          {
            "kind": "table",
            "headers": [
              "Equivalent Units FIFO",
              "Materials",
              "Conversion"
            ],
            "rows": [
              [
                "Menyelesaikan BDP awal",
                "100 × 0% = 0",
                "100 × 60% = 60"
              ],
              [
                "Started and completed",
                "700",
                "700"
              ],
              [
                "BDP akhir",
                "200 × 100% = 200",
                "200 × 50% = 100"
              ],
              [
                "Total EUP FIFO",
                "900",
                "860"
              ]
            ]
          },
          {
            "kind": "table",
            "headers": [
              "Cost per EUP FIFO",
              "Materials",
              "Conversion"
            ],
            "rows": [
              [
                "Current cost",
                "Rp9.000",
                "Rp7.600"
              ],
              [
                "EUP FIFO",
                "900",
                "860"
              ],
              [
                "Cost per EUP",
                "Rp10,00",
                "Rp8,84"
              ]
            ]
          },
          {
            "kind": "table",
            "headers": [
              "Cost Assignment FIFO",
              "Perhitungan",
              "Jumlah"
            ],
            "rows": [
              [
                "Biaya lama BDP awal",
                "Diberikan dalam soal",
                "Rp1.600,00"
              ],
              [
                "Biaya menyelesaikan BDP awal",
                "60 × Rp8,84",
                "Rp530,23"
              ],
              [
                "Total BDP awal selesai",
                "Rp1.600,00 + Rp530,23",
                "Rp2.130,23"
              ],
              [
                "Unit started and completed",
                "700 × (Rp10,00 + Rp8,84)",
                "Rp13.186,05"
              ],
              [
                "Total transferred out",
                "Rp2.130,23 + Rp13.186,05",
                "Rp15.316,28"
              ],
              [
                "BDP akhir materials",
                "200 × Rp10,00",
                "Rp2.000,00"
              ],
              [
                "BDP akhir conversion",
                "100 × Rp8,84",
                "Rp883,72"
              ],
              [
                "Total BDP akhir",
                "Rp2.000,00 + Rp883,72",
                "Rp2.883,72"
              ],
              [
                "Total biaya dipertanggungjawabkan",
                "Rp15.316,28 + Rp2.883,72",
                "Rp18.200,00"
              ]
            ]
          }
        ]
      },
      {
        "kind": "h2",
        "text": "Unit Hilang dan Produk Cacat sebagai Pengantar TM 7"
      },
      {
        "kind": "p",
        "text": "Dalam process costing, unit hilang, spoilage, dan cacat produksi memengaruhi quantity schedule, equivalent units, dan cost assignment. Perlakuannya bergantung pada apakah kerugian normal atau abnormal, kapan titik inspeksi terjadi, dan berapa tingkat penyelesaian unit yang hilang atau cacat."
      },
      {
        "kind": "table",
        "headers": [
          "Jenis Kerugian",
          "Dampak Umum"
        ],
        "rows": [
          [
            "Normal loss",
            "Biayanya dapat diserap oleh unit baik dalam batas wajar"
          ],
          [
            "Abnormal loss",
            "Dipisahkan sebagai kerugian agar tidak membebani unit baik"
          ],
          [
            "Spoilage pada titik inspeksi akhir",
            "Biasanya sudah menyerap biaya 100%"
          ],
          [
            "Spoilage sebelum selesai",
            "EUP disesuaikan dengan tingkat penyelesaian saat cacat diketahui"
          ],
          [
            "Informasi titik inspeksi tidak tersedia",
            "Tandai sebagai bagian yang memerlukan pemeriksaan manual pada soal"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Batch 12C - Practice Case Data Terlihat TM 6"
      },
      {
        "kind": "table",
        "headers": ["Data FIFO Process Costing", "Jumlah"],
        "rows": [
          ["BDP awal", "200 unit, 60% selesai untuk konversi"],
          ["Unit dimulai periode ini", "800 unit"],
          ["Unit selesai dan ditransfer", "700 unit"],
          ["BDP akhir", "300 unit, 40% selesai untuk konversi"],
          ["Bahan", "Ditambahkan pada awal proses"]
        ],
        "caption": "Diminta: hitung started and completed, EUP bahan FIFO, dan EUP konversi FIFO."
      },
      {
        "kind": "table-fill",
        "spec": {
          "title": "Workspace FIFO Equivalent Units",
          "instruction": "Pisahkan pekerjaan untuk menyelesaikan BDP awal, unit dimulai dan selesai, serta BDP akhir.",
          "currency": "unit",
          "headers": ["Komponen", "Jawaban"],
          "rows": [
            { "id": "tm6-started-completed", "label": "Unit dimulai dan selesai", "cells": [{ "id": "tm6-started-completed-answer", "answer": 500 }] },
            { "id": "tm6-eup-materials", "label": "EUP bahan FIFO", "cells": [{ "id": "tm6-eup-materials-answer", "answer": 800 }] },
            { "id": "tm6-eup-conversion", "label": "EUP konversi FIFO", "cells": [{ "id": "tm6-eup-conversion-answer", "answer": 700 }] }
          ]
        }
      },
      {
        "kind": "solution-reveal",
        "title": "Pembahasan FIFO Equivalent Units",
        "prompt": "Buka setelah menghitung EUP FIFO.",
        "blocks": [
          { "kind": "p", "text": "Unit dimulai dan selesai = 700 - 200 = 500 unit. Karena bahan ditambahkan pada awal proses, EUP bahan FIFO = unit dimulai dan selesai 500 + BDP akhir 300 = 800 unit. EUP konversi FIFO = penyelesaian BDP awal 200×40% + unit dimulai dan selesai 500 + BDP akhir 300×40% = 700 unit." }
        ]
      },
      {
        "kind": "h2",
        "text": "Batch 4 Deepening - FIFO Cost Assignment"
      },
      {
        "kind": "p",
        "text": "FIFO bukan sekadar rumus EUP berbeda. Perbedaan paling pentingnya ada pada cost assignment: biaya BDP awal yang sudah ada tetap melekat pada unit BDP awal, lalu ditambah hanya biaya current untuk menyelesaikan sisa pekerjaan BDP awal. Unit started and completed memakai current cost penuh. BDP akhir hanya mendapat current cost sesuai tingkat penyelesaian."
      },
      {
        "kind": "formula",
        "text": "Cost completed beginning WIP = Biaya BDP awal + current cost untuk menyelesaikan sisa pekerjaan\nCost of started and completed = Unit started and completed × current cost per EUP total\nCost of ending WIP = EUP ending WIP tiap elemen × current cost per EUP tiap elemen",
        "note": "Biaya BDP awal tidak ikut dibagi dalam cost per EUP FIFO."
      },
      {
        "kind": "example",
        "title": "Mini Lab FIFO - PT Liora",
        "blocks": [
          {
            "kind": "p",
            "text": "Data: BDP awal 100 unit, materials 100% dan conversion 30%, biaya BDP awal Rp1.500.000. Unit dimulai 900 unit, unit selesai 800 unit, BDP akhir 200 unit, materials 100% dan conversion 50%. Current cost: materials Rp9.000.000 dan conversion Rp8.700.000."
          },
          {
            "kind": "formula",
            "text": "Started and completed = 800 - 100 = 700 unit"
          },
          {
            "kind": "table",
            "headers": ["EUP FIFO", "Materials", "Conversion"],
            "rows": [
              ["Menyelesaikan BDP awal", "0", "100 × 70% = 70"],
              ["Started and completed", "700", "700"],
              ["BDP akhir", "200 × 100% = 200", "200 × 50% = 100"],
              ["Total EUP FIFO", "900", "870"]
            ]
          },
          {
            "kind": "table",
            "headers": ["Cost per EUP FIFO", "Materials", "Conversion"],
            "rows": [
              ["Current cost", "Rp9.000.000", "Rp8.700.000"],
              ["EUP FIFO", "900", "870"],
              ["Cost per EUP", "Rp10.000", "Rp10.000"]
            ]
          },
          {
            "kind": "table",
            "headers": ["Cost Assignment FIFO", "Perhitungan", "Jumlah"],
            "rows": [
              ["Completed beginning WIP", "Rp1.500.000 + (70 × Rp10.000)", "Rp2.200.000"],
              ["Started and completed", "700 × (Rp10.000 + Rp10.000)", "Rp14.000.000"],
              ["Total transferred out", "Rp2.200.000 + Rp14.000.000", "Rp16.200.000"],
              ["Ending WIP", "200×Rp10.000 + 100×Rp10.000", "Rp3.000.000"],
              ["Total assigned", "Transferred out + ending WIP", "Rp19.200.000"]
            ]
          }
        ]
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "Trap FIFO yang paling sering muncul",
        "text": "Jangan menghitung BDP awal sebagai 100% pada EUP FIFO. Yang dihitung hanya sisa pekerjaan yang belum selesai pada awal periode. Jika BDP awal sudah 100% materials, maka EUP materials untuk menyelesaikan BDP awal adalah nol."
      },
      {
        "kind": "h2",
        "text": "Kesalahan Umum TM 6"
      },
      {
        "kind": "table",
        "headers": [
          "Kesalahan",
          "Koreksi"
        ],
        "rows": [
          [
            "Biaya BDP awal digabung seperti average",
            "FIFO memisahkan biaya BDP awal"
          ],
          [
            "Menghitung EUP BDP awal sebesar 100%",
            "Yang dihitung hanya sisa pekerjaan BDP awal"
          ],
          [
            "Tidak menghitung started and completed",
            "Started and completed = unit selesai - BDP awal"
          ],
          [
            "Cost per EUP memakai total biaya termasuk BDP awal",
            "FIFO memakai current cost saja"
          ],
          [
            "BDP akhir dihitung tanpa persentase penyelesaian",
            "BDP akhir harus dikalikan % selesai tiap elemen"
          ],
          [
            "Transferred-in cost dilupakan di departemen lanjutan",
            "Transferred-in cost adalah elemen biaya sendiri"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Latihan Pemahaman TM 6"
      },
      {
        "kind": "ol",
        "items": [
          "Jelaskan perbedaan utama average method dan FIFO method.",
          "Hitung unit started and completed jika diketahui BDP awal dan unit selesai.",
          "Hitung EUP FIFO untuk materials dan conversion cost.",
          "Hitung cost per EUP FIFO memakai current cost.",
          "Alokasikan biaya ke BDP awal selesai, started and completed, dan BDP akhir.",
          "Jelaskan mengapa biaya BDP awal tidak dibagi ulang dalam cost per EUP FIFO.",
          "Jelaskan perlakuan transferred-in cost pada departemen lanjutan."
        ]
      },
      {
        "kind": "h2",
        "text": "Ringkasan TM 6"
      },
      {
        "kind": "p",
        "text": "TM 6 memperdalam process costing dengan FIFO method. FIFO lebih rinci daripada average karena memisahkan biaya periode sebelumnya dari biaya periode berjalan. EUP FIFO terdiri atas pekerjaan sisa BDP awal, unit started and completed, dan BDP akhir. Cost per EUP FIFO dihitung hanya dari current cost, lalu biaya dialokasikan ke BDP awal selesai, unit started and completed, dan BDP akhir."
      },
      {
        "kind": "h2",
        "text": "Checklist Kelengkapan TM 6"
      },
      {
        "kind": "table",
        "headers": [
          "Komponen",
          "Status"
        ],
        "rows": [
          [
            "Perbedaan average dan FIFO",
            "Masuk"
          ],
          [
            "Started and completed",
            "Masuk"
          ],
          [
            "EUP FIFO",
            "Masuk"
          ],
          [
            "Cost per EUP FIFO",
            "Masuk"
          ],
          [
            "Cost assignment FIFO",
            "Masuk"
          ],
          [
            "Transferred-in cost",
            "Masuk"
          ],
          [
            "Pengantar unit hilang dan spoilage",
            "Masuk"
          ],
          [
            "Contoh laporan FIFO",
            "Masuk"
          ],
          [
            "Latihan dan kesalahan umum",
            "Masuk"
          ]
        ]
      }
    ]
  },
  "7": {
    "id": "akbi-tm-7",
    "tm": 7,
    "title": "Biaya Kualitas dan Akuntansi Kerugian Produksi",
    "ref": "Carter Cost Accounting Ch. 7 · AKBI Master Content Bagian 1 · HTML Pra-UTS sebagai pembanding TM 7",
    "source": "ZIP website utama + AKBI_Master_Content_Bagian_1_TM1-TM11.md + AKBI_v6_Complete.html sebagai pembanding TM 1-7 + Carter/Cengage Cost Accounting Ch. 5, Ch. 6, dan Ch. 7",
    "phase": "pra_uts",
    "manualCheckCount": 1,
    "intro": "TM 7 memperdalam biaya kualitas dan akuntansi kerugian produksi. Materi mencakup prevention cost, appraisal cost, internal failure cost, external failure cost, TQM, scrap, spoilage, rework, normal loss, abnormal loss, unit hilang, produk cacat, serta jurnal dan format laporan biaya kualitas.",
    "objectives": [
      "Menjelaskan empat kategori biaya kualitas.",
      "Menghubungkan Total Quality Management dengan continuous improvement dan pengendalian biaya kualitas.",
      "Menyusun format laporan biaya kualitas.",
      "Membedakan scrap, spoilage, rework, normal loss, abnormal loss, unit hilang, dan produk cacat.",
      "Menentukan perlakuan akuntansi scrap dalam job order costing.",
      "Menentukan perlakuan akuntansi spoilage berdasarkan penyebab dan normalitasnya.",
      "Menentukan perlakuan akuntansi rework berdasarkan penyebab dan normalitasnya.",
      "Menjelaskan dampak spoilage terhadap process costing dan equivalent units.",
      "Membuat jurnal dasar untuk scrap, spoilage, dan rework."
    ],
    "blocks": [
      {
        "kind": "h2",
        "text": "Orientasi TM 7"
      },
      {
        "kind": "p",
        "text": "TM 7 menghubungkan dua area besar: biaya kualitas dan akuntansi kerugian produksi. Biaya kualitas menjelaskan biaya untuk mencegah, mendeteksi, dan menanggung kegagalan produk. Akuntansi kerugian produksi menjelaskan perlakuan atas scrap, spoilage, rework, unit hilang, dan produk cacat baik dalam job order costing maupun process costing."
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "Arah penting TM 7",
        "text": "Jangan hanya menghafal definisi scrap, spoilage, dan rework. Fokus utama akuntansi biaya adalah siapa yang menanggung biaya kerugian, apakah kerugian normal atau abnormal, dan apakah biaya dibebankan ke job pelanggan, Factory Overhead Control, Cost of Goods Sold, atau loss account."
      },
      {
        "kind": "h2",
        "text": "Peta Submateri TM 7"
      },
      {
        "kind": "table",
        "headers": [
          "No",
          "Submateri",
          "Fungsi Belajar"
        ],
        "rows": [
          [
            "1",
            "Cost of quality",
            "Membedakan prevention, appraisal, internal failure, dan external failure"
          ],
          [
            "2",
            "Total Quality Management",
            "Menghubungkan kualitas dengan perbaikan berkelanjutan"
          ],
          [
            "3",
            "Measuring and reporting quality cost",
            "Menyusun laporan biaya kualitas"
          ],
          [
            "4",
            "Scrap",
            "Menentukan perlakuan akuntansi sisa bahan atau bagian rusak"
          ],
          [
            "5",
            "Spoilage",
            "Menentukan perlakuan produk cacat yang tidak ekonomis diperbaiki"
          ],
          [
            "6",
            "Rework",
            "Menentukan perlakuan produk cacat yang masih bisa diperbaiki"
          ],
          [
            "7",
            "Normal dan abnormal loss",
            "Membedakan kerugian wajar dan tidak wajar"
          ],
          [
            "8",
            "Process costing losses",
            "Menghubungkan spoilage dengan EUP dan cost report"
          ],
          [
            "9",
            "Jurnal kerugian produksi",
            "Mencatat scrap, spoilage, dan rework"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Biaya Kualitas"
      },
      {
        "kind": "p",
        "text": "Biaya kualitas adalah biaya yang terjadi karena perusahaan berusaha menghasilkan produk yang sesuai spesifikasi atau karena produk gagal memenuhi spesifikasi. Secara manajerial, biaya kualitas tidak hanya dilihat sebagai beban, tetapi sebagai informasi untuk memilih apakah perusahaan harus lebih banyak mencegah cacat, meningkatkan inspeksi, atau menanggung failure cost."
      },
      {
        "kind": "table",
        "headers": [
          "Kategori Biaya Kualitas",
          "Definisi",
          "Contoh",
          "Sifat Manajerial"
        ],
        "rows": [
          [
            "Prevention cost",
            "Biaya untuk mencegah produk gagal",
            "Pelatihan kualitas, evaluasi pemasok, perancangan proses, preventive maintenance",
            "Mencegah masalah sebelum terjadi"
          ],
          [
            "Appraisal cost",
            "Biaya untuk mendeteksi apakah produk memenuhi spesifikasi",
            "Inspeksi, pengujian, quality audit, testing equipment",
            "Menemukan cacat sebelum sampai ke pelanggan"
          ],
          [
            "Internal failure cost",
            "Biaya karena produk gagal sebelum dikirim ke pelanggan",
            "Scrap, spoilage, rework, downtime karena cacat, reinspeksi",
            "Kegagalan masih berada dalam perusahaan"
          ],
          [
            "External failure cost",
            "Biaya karena produk gagal setelah sampai ke pelanggan",
            "Garansi, retur, klaim, perbaikan produk, kehilangan reputasi",
            "Paling berisiko karena memengaruhi pelanggan"
          ]
        ]
      },
      {
        "kind": "callout",
        "variant": "key",
        "title": "Logika biaya kualitas",
        "text": "Peningkatan prevention cost yang tepat dapat menurunkan appraisal cost dan failure cost. Secara konseptual, kualitas yang baik tidak dicapai dengan inspeksi di akhir saja, tetapi dengan desain proses yang mencegah cacat sejak awal."
      },
      {
        "kind": "h2",
        "text": "Total Quality Management dan Continuous Improvement"
      },
      {
        "kind": "p",
        "text": "Total Quality Management atau TQM adalah pendekatan menyeluruh yang menempatkan kualitas sebagai tanggung jawab seluruh organisasi. Kualitas tidak hanya menjadi pekerjaan bagian inspeksi, tetapi menjadi bagian dari desain produk, pembelian bahan, proses produksi, pelatihan karyawan, pemeliharaan mesin, dan pelayanan pelanggan."
      },
      {
        "kind": "ul",
        "items": [
          "Perusahaan harus melayani kebutuhan pelanggan melalui produk yang andal dan sesuai spesifikasi.",
          "Manajemen puncak harus aktif memimpin peningkatan kualitas.",
          "Seluruh karyawan dilibatkan dalam identifikasi masalah dan perbaikan proses.",
          "Sistem produksi harus dirancang agar cacat dicegah, bukan hanya ditemukan di akhir.",
          "Data kualitas seperti scrap, spoilage, rework, retur, dan klaim garansi harus diukur secara periodik.",
          "Continuous improvement menganggap standar kualitas perlu terus diperbarui karena teknologi, metode, dan kebutuhan pelanggan berubah."
        ]
      },
      {
        "kind": "table",
        "headers": [
          "Pendekatan Lama",
          "Pendekatan Continuous Improvement"
        ],
        "rows": [
          [
            "Mengandalkan inspeksi akhir",
            "Mencegah cacat sejak desain dan proses"
          ],
          [
            "Kerugian produksi sering tidak dihitung rinci",
            "Scrap, spoilage, rework, dan klaim dipantau sebagai biaya kualitas"
          ],
          [
            "Kualitas dianggap tanggung jawab bagian inspeksi",
            "Kualitas menjadi tanggung jawab seluruh proses"
          ],
          [
            "Cacat dianggap konsekuensi produksi massal",
            "Cacat dianalisis penyebabnya dan dikurangi terus-menerus"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Format Laporan Biaya Kualitas"
      },
      {
        "kind": "table",
        "headers": [
          "Kategori",
          "Contoh Baris Laporan",
          "Jumlah"
        ],
        "rows": [
          [
            "Prevention cost",
            "Pelatihan kualitas; preventive maintenance; evaluasi pemasok",
            "Diisi berdasarkan data soal"
          ],
          [
            "Appraisal cost",
            "Inspeksi bahan; pengujian produk; quality audit",
            "Diisi berdasarkan data soal"
          ],
          [
            "Internal failure cost",
            "Scrap; spoilage; rework; reinspeksi internal",
            "Diisi berdasarkan data soal"
          ],
          [
            "External failure cost",
            "Garansi; retur pelanggan; klaim; perbaikan setelah penjualan",
            "Diisi berdasarkan data soal"
          ],
          [
            "Total cost of quality",
            "Jumlah seluruh kategori",
            "Total biaya kualitas"
          ],
          [
            "Persentase terhadap penjualan atau biaya produksi",
            "Total cost of quality ÷ sales atau production cost × 100%",
            "Indikator pengendalian"
          ]
        ],
        "caption": "Laporan biaya kualitas membantu manajemen melihat apakah biaya lebih banyak terjadi pada pencegahan atau justru pada kegagalan."
      },
      {
        "kind": "formula",
        "text": "Total Cost of Quality = Prevention Cost + Appraisal Cost + Internal Failure Cost + External Failure Cost\nQuality Cost Percentage = Total Cost of Quality ÷ Sales atau Production Cost × 100%"
      },
      {
        "kind": "h2",
        "text": "Batch 5 - Alur Belajar Cepat Biaya Kualitas"
      },
      {
        "kind": "table",
        "headers": [
          "Langkah",
          "Pertanyaan Kunci",
          "Output Ujian"
        ],
        "rows": [
          [
            "1. Identifikasi pos biaya",
            "Apakah biaya terjadi sebelum cacat, saat inspeksi, sebelum pengiriman, atau setelah pelanggan menerima produk?",
            "Klasifikasi prevention, appraisal, internal failure, atau external failure"
          ],
          [
            "2. Hitung total per kategori",
            "Berapa total biaya pada tiap kelompok kualitas?",
            "Laporan cost of quality"
          ],
          [
            "3. Ukur proporsi biaya",
            "Biaya kualitas setara berapa persen dari penjualan atau biaya produksi?",
            "Quality cost percentage"
          ],
          [
            "4. Analisis pola kualitas",
            "Apakah biaya lebih banyak berada pada prevention atau failure cost?",
            "Interpretasi manajerial"
          ],
          [
            "5. Tentukan tindakan",
            "Apakah perlu investasi pencegahan, inspeksi tambahan, atau perbaikan proses?",
            "Rekomendasi pengendalian biaya"
          ]
        ],
        "caption": "Batch 5 memperjelas alur membaca TM 7 agar mahasiswa tidak hanya menghafal istilah, tetapi dapat menyusun laporan biaya kualitas dan menafsirkan risiko biayanya."
      },
      {
        "kind": "callout",
        "variant": "key",
        "title": "Urutan diagnosis cepat",
        "text": "Prevention dan appraisal adalah cost of conformance: biaya agar produk sesuai spesifikasi. Internal failure dan external failure adalah cost of nonconformance: biaya karena produk gagal memenuhi spesifikasi. Dalam analisis manajerial, failure cost yang tinggi biasanya menjadi sinyal proses perlu diperbaiki, bukan sekadar biaya yang harus diterima."
      },
      {
        "kind": "h2",
        "text": "Formula Sheet Lanjutan TM 7"
      },
      {
        "kind": "formula",
        "text": "Cost of Conformance = Prevention Cost + Appraisal Cost\nCost of Nonconformance = Internal Failure Cost + External Failure Cost\nInternal Failure Ratio = Internal Failure Cost ÷ Total Cost of Quality × 100%\nExternal Failure Ratio = External Failure Cost ÷ Total Cost of Quality × 100%\nNet Scrap Effect = Gross Scrap Cost − Scrap Sales Value\nAbnormal Loss = Actual Loss − Normal Loss Allowed",
        "note": "Rasio ini membantu membaca komposisi biaya kualitas. Soal ujian biasanya meminta total kategori, persentase terhadap penjualan, atau interpretasi apakah perusahaan terlalu banyak menanggung failure cost."
      },
      {
        "kind": "example",
        "title": "Mini Lab Batch 5 - Cost of Quality PT Aruna",
        "blocks": [
          {
            "kind": "p",
            "text": "PT Aruna memiliki penjualan Rp240.000.000. Selama periode berjalan terjadi biaya berikut: pelatihan kualitas Rp6.000.000, evaluasi pemasok Rp2.000.000, inspeksi bahan Rp3.500.000, pengujian produk Rp4.500.000, scrap internal Rp5.000.000, rework Rp7.000.000, klaim garansi Rp9.000.000, dan retur pelanggan Rp3.000.000."
          },
          {
            "kind": "table",
            "headers": [
              "Kategori",
              "Perhitungan",
              "Jumlah"
            ],
            "rows": [
              [
                "Prevention cost",
                "Pelatihan kualitas + evaluasi pemasok",
                "Rp8.000.000"
              ],
              [
                "Appraisal cost",
                "Inspeksi bahan + pengujian produk",
                "Rp8.000.000"
              ],
              [
                "Internal failure cost",
                "Scrap internal + rework",
                "Rp12.000.000"
              ],
              [
                "External failure cost",
                "Klaim garansi + retur pelanggan",
                "Rp12.000.000"
              ],
              [
                "Total cost of quality",
                "8.000.000 + 8.000.000 + 12.000.000 + 12.000.000",
                "Rp40.000.000"
              ],
              [
                "Quality cost percentage",
                "40.000.000 ÷ 240.000.000 × 100%",
                "16,67%"
              ]
            ]
          },
          {
            "kind": "p",
            "text": "Interpretasi: biaya nonconformance sebesar Rp24.000.000 atau 60% dari total cost of quality. Pola ini menunjukkan perusahaan masih menanggung biaya kegagalan yang tinggi; investasi prevention dan perbaikan proses dapat lebih relevan daripada hanya menambah inspeksi akhir."
          }
        ]
      },
      {
        "kind": "table-fill",
        "spec": {
          "title": "Workspace Batch 5 - Cost of Quality PT Aruna",
          "instruction": "Isi angka laporan biaya kualitas berdasarkan data PT Aruna. Gunakan angka penuh tanpa titik ribuan.",
          "currency": "Rp",
          "headers": ["Kategori", "Jawaban"],
          "rows": [
            { "id": "b5-aruna-prevention", "label": "Prevention cost", "cells": [{ "id": "b5-aruna-prevention-answer", "answer": 8000000 }] },
            { "id": "b5-aruna-appraisal", "label": "Appraisal cost", "cells": [{ "id": "b5-aruna-appraisal-answer", "answer": 8000000 }] },
            { "id": "b5-aruna-internal", "label": "Internal failure cost", "cells": [{ "id": "b5-aruna-internal-answer", "answer": 12000000 }] },
            { "id": "b5-aruna-external", "label": "External failure cost", "cells": [{ "id": "b5-aruna-external-answer", "answer": 12000000 }] },
            { "id": "b5-aruna-total", "label": "Total cost of quality", "cells": [{ "id": "b5-aruna-total-answer", "answer": 40000000 }] },
            { "id": "b5-aruna-percentage", "label": "Quality cost percentage", "cells": [{ "id": "b5-aruna-percentage-answer", "answer": "16,67%", "answerType": "text" }] }
          ],
          "feedback": "Jika total kategori benar tetapi persentase salah, cek pembaginya: yang dipakai adalah total penjualan Rp240.000.000, bukan total biaya kualitas."
        }
      },
      {
        "kind": "h2",
        "text": "Scrap"
      },
      {
        "kind": "p",
        "text": "Scrap adalah sisa bahan, potongan, serbuk, trimming, bagian rusak, atau bahan cacat yang tidak menjadi produk utama tetapi mungkin masih memiliki nilai jual. Scrap dapat muncul karena proses normal atau karena kegagalan internal."
      },
      {
        "kind": "table",
        "headers": [
          "Perlakuan Scrap",
          "Kapan Dipakai",
          "Dampak"
        ],
        "rows": [
          [
            "Scrap sales diakui sebagai pendapatan lain-lain",
            "Scrap tidak signifikan dan tidak ditelusuri ke job tertentu",
            "Pendapatan scrap muncul terpisah"
          ],
          [
            "Scrap sales dikreditkan ke Cost of Goods Sold",
            "Scrap dianggap mengurangi biaya produk terjual periode berjalan",
            "COGS berkurang"
          ],
          [
            "Scrap sales dikreditkan ke Factory Overhead Control",
            "Scrap dianggap mengurangi overhead pabrik",
            "FOH aktual bersih berkurang"
          ],
          [
            "Scrap dikreditkan ke job tertentu",
            "Scrap dapat ditelusuri langsung ke job yang menghasilkan scrap",
            "Biaya job tertentu berkurang"
          ]
        ]
      },
      {
        "kind": "journal",
        "caption": "Penjualan scrap sebagai pendapatan lain-lain",
        "lines": [
          {
            "account": "Cash",
            "debit": "nilai jual scrap"
          },
          {
            "account": "Scrap Sales atau Other Income",
            "credit": "nilai jual scrap",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "journal",
        "caption": "Penjualan scrap sebagai pengurang overhead",
        "lines": [
          {
            "account": "Cash",
            "debit": "nilai jual scrap"
          },
          {
            "account": "Factory Overhead Control",
            "credit": "nilai jual scrap",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "h2",
        "text": "Spoilage"
      },
      {
        "kind": "p",
        "text": "Spoilage adalah unit produk yang cacat sehingga tidak dapat diperbaiki atau tidak ekonomis untuk diperbaiki. Spoiled goods bisa sebagian selesai atau selesai penuh, tetapi tidak memenuhi spesifikasi. Perlakuan akuntansinya bergantung pada penyebab dan status normalitasnya."
      },
      {
        "kind": "table",
        "headers": [
          "Jenis Spoilage",
          "Definisi",
          "Perlakuan Umum"
        ],
        "rows": [
          [
            "Spoilage normal",
            "Kerusakan wajar yang tidak dapat dihindari dalam proses efisien",
            "Biaya dapat diserap oleh unit baik atau dibebankan ke overhead"
          ],
          [
            "Spoilage abnormal",
            "Kerusakan di luar batas normal karena kesalahan, mesin rusak, atau proses tidak terkendali",
            "Dicatat sebagai kerugian abnormal agar tidak membebani unit baik"
          ],
          [
            "Spoilage karena permintaan pelanggan",
            "Terjadi karena spesifikasi pelanggan berubah atau toleransi khusus",
            "Dibebankan ke job pelanggan"
          ],
          [
            "Spoilage karena internal failure",
            "Terjadi karena kegagalan proses internal",
            "Dibebankan ke Factory Overhead Control atau loss account sesuai kebijakan"
          ]
        ]
      },
      {
        "kind": "journal",
        "caption": "Spoilage disebabkan permintaan pelanggan dalam job order costing",
        "lines": [
          {
            "account": "Work in Process - Job pelanggan",
            "debit": "biaya spoilage"
          },
          {
            "account": "Materials, Payroll, atau FOH terkait",
            "credit": "biaya spoilage",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "journal",
        "caption": "Spoilage karena internal failure umum",
        "lines": [
          {
            "account": "Factory Overhead Control",
            "debit": "biaya spoilage"
          },
          {
            "account": "Work in Process atau akun terkait",
            "credit": "biaya spoilage",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "journal",
        "caption": "Spoilage abnormal",
        "lines": [
          {
            "account": "Loss from Abnormal Spoilage",
            "debit": "biaya spoilage abnormal"
          },
          {
            "account": "Work in Process",
            "credit": "biaya spoilage abnormal",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "h2",
        "text": "Rework"
      },
      {
        "kind": "p",
        "text": "Rework adalah produk cacat yang masih dapat diperbaiki secara teknis dan ekonomis. Rework berbeda dari spoilage karena produk masih dapat dikembalikan menjadi produk baik melalui tambahan bahan, tenaga kerja, atau overhead."
      },
      {
        "kind": "table",
        "headers": [
          "Jenis Rework",
          "Penyebab",
          "Perlakuan Umum"
        ],
        "rows": [
          [
            "Rework karena permintaan pelanggan",
            "Spesifikasi pelanggan berubah atau meminta modifikasi khusus",
            "Dibebankan ke job pelanggan"
          ],
          [
            "Rework normal umum",
            "Cacat wajar yang muncul dalam proses produksi normal",
            "Dibebankan ke Factory Overhead Control"
          ],
          [
            "Rework normal untuk job tertentu",
            "Rework dapat ditelusuri ke job tertentu sebagai bagian normal job",
            "Dibebankan ke job tersebut"
          ],
          [
            "Rework abnormal",
            "Kesalahan tidak wajar atau kelalaian proses",
            "Dicatat sebagai kerugian abnormal"
          ]
        ]
      },
      {
        "kind": "journal",
        "caption": "Rework dibebankan ke job tertentu",
        "lines": [
          {
            "account": "Work in Process - Job terkait",
            "debit": "biaya rework"
          },
          {
            "account": "Materials, Payroll, dan Applied FOH",
            "credit": "biaya rework",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "journal",
        "caption": "Rework umum sebagai overhead",
        "lines": [
          {
            "account": "Factory Overhead Control",
            "debit": "biaya rework"
          },
          {
            "account": "Materials, Payroll, dan Applied FOH",
            "credit": "biaya rework",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "journal",
        "caption": "Rework abnormal",
        "lines": [
          {
            "account": "Loss from Abnormal Rework",
            "debit": "biaya rework abnormal"
          },
          {
            "account": "Materials, Payroll, dan Applied FOH",
            "credit": "biaya rework abnormal",
            "isCredit": true
          }
        ]
      },
      {
        "kind": "h2",
        "text": "Normal Loss, Abnormal Loss, Unit Hilang, dan Produk Cacat"
      },
      {
        "kind": "p",
        "text": "Normal loss adalah kehilangan atau kerusakan yang masih berada dalam batas wajar proses produksi. Abnormal loss adalah kehilangan di luar batas normal yang seharusnya dapat dicegah. Pemisahan ini penting agar biaya abnormal tidak diserap oleh produk baik dan tidak menyembunyikan inefisiensi."
      },
      {
        "kind": "table",
        "headers": [
          "Istilah",
          "Makna",
          "Dampak Akuntansi"
        ],
        "rows": [
          [
            "Normal shrinkage",
            "Susut wajar karena evaporasi, pengeringan, atau proses alamiah",
            "Biasanya diserap oleh unit baik"
          ],
          [
            "Abnormal shrinkage",
            "Susut berlebih karena kegagalan proses atau kondisi tidak normal",
            "Dipisahkan sebagai kerugian"
          ],
          [
            "Lost units",
            "Unit hilang secara fisik dalam proses",
            "Mempengaruhi quantity schedule dan EUP"
          ],
          [
            "Spoiled units",
            "Unit cacat yang tidak ekonomis diperbaiki",
            "Perlu diklasifikasi normal atau abnormal"
          ],
          [
            "Defective units yang dirework",
            "Unit cacat tetapi masih bisa diperbaiki",
            "Biaya perbaikan diperlakukan sebagai rework"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Spoilage dalam Process Costing"
      },
      {
        "kind": "p",
        "text": "Dalam process costing, spoilage harus dimasukkan ke quantity schedule dan equivalent units sesuai titik inspeksi serta tingkat penyelesaian unit cacat. Jika spoilage ditemukan pada akhir proses, unit cacat biasanya dianggap sudah menyerap biaya penuh. Jika spoilage ditemukan di tengah proses, EUP dihitung sesuai tingkat penyelesaian saat cacat terdeteksi."
      },
      {
        "kind": "table",
        "headers": [
          "Informasi Soal",
          "Perlakuan"
        ],
        "rows": [
          [
            "Titik inspeksi diketahui",
            "Gunakan tingkat penyelesaian pada titik inspeksi untuk menghitung EUP spoilage"
          ],
          [
            "Spoilage normal",
            "Biaya dapat diserap oleh unit baik atau diperlakukan sesuai kebijakan yang diminta soal"
          ],
          [
            "Spoilage abnormal",
            "Biaya dipisahkan sebagai loss dan tidak dibebankan ke unit baik"
          ],
          [
            "Tingkat penyelesaian spoilage tidak tersedia",
            "Gunakan instruksi soal; jika tidak ada, bagian ini memerlukan pemeriksaan manual"
          ],
          [
            "Metode FIFO",
            "Pisahkan spoilage terkait BDP awal, unit started and completed, dan BDP akhir jika data memungkinkan"
          ],
          [
            "Metode average",
            "Gabungkan biaya BDP awal dan periode berjalan sebelum alokasi spoilage jika soal memakai average"
          ]
        ]
      },
      {
        "kind": "callout",
        "variant": "warning",
        "title": "[Perlu pemeriksaan manual] untuk soal kerugian produksi",
        "text": "Jika soal tidak menyebut titik inspeksi, tingkat penyelesaian unit cacat, atau apakah kerugian normal/abnormal, jangan membuat asumsi angka. Tandai bagian tersebut sebagai memerlukan pemeriksaan manual."
      },
      {
        "kind": "example",
        "title": "Klasifikasi biaya kualitas dan kerugian produksi",
        "blocks": [
          {
            "kind": "table",
            "headers": [
              "Kasus",
              "Klasifikasi",
              "Alasan"
            ],
            "rows": [
              [
                "Pelatihan operator agar cacat berkurang",
                "Prevention cost",
                "Biaya dikeluarkan sebelum cacat terjadi"
              ],
              [
                "Inspeksi produk akhir",
                "Appraisal cost",
                "Biaya untuk mendeteksi cacat"
              ],
              [
                "Rework produk sebelum dikirim",
                "Internal failure cost",
                "Kegagalan terjadi sebelum produk sampai ke pelanggan"
              ],
              [
                "Klaim garansi pelanggan",
                "External failure cost",
                "Kegagalan terjadi setelah produk sampai ke pelanggan"
              ],
              [
                "Potongan bahan yang masih bisa dijual",
                "Scrap",
                "Sisa proses yang memiliki nilai jual"
              ],
              [
                "Produk cacat tidak ekonomis diperbaiki",
                "Spoilage",
                "Unit tidak dapat dipulihkan secara ekonomis"
              ],
              [
                "Produk cacat diperbaiki agar menjadi produk baik",
                "Rework",
                "Unit masih bisa diperbaiki"
              ]
            ]
          }
        ]
      },
      {
        "kind": "h2",
        "text": "Format Analisis Kerugian Produksi"
      },
      {
        "kind": "table",
        "headers": [
          "Langkah",
          "Pertanyaan Audit"
        ],
        "rows": [
          [
            "1. Identifikasi bentuk kerugian",
            "Apakah ini scrap, spoilage, rework, lost unit, atau shrinkage?"
          ],
          [
            "2. Tentukan penyebab",
            "Apakah disebabkan pelanggan, proses normal, atau kegagalan internal?"
          ],
          [
            "3. Tentukan normalitas",
            "Apakah kerugian normal atau abnormal?"
          ],
          [
            "4. Tentukan sistem biaya",
            "Apakah soal memakai job order costing atau process costing?"
          ],
          [
            "5. Tentukan akun penanggung biaya",
            "Job pelanggan, Factory Overhead Control, COGS, atau loss account?"
          ],
          [
            "6. Tentukan titik inspeksi",
            "Khusus process costing, kapan unit cacat diketahui?"
          ],
          [
            "7. Hitung EUP jika diperlukan",
            "Gunakan tingkat penyelesaian pada titik cacat atau hilang"
          ],
          [
            "8. Buat jurnal",
            "Catat sesuai perlakuan akuntansi yang diminta soal"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Batch 12C - Practice Case Data Terlihat TM 7"
      },
      {
        "kind": "table",
        "headers": ["Data Biaya Kualitas PT Mahira", "Jumlah"],
        "rows": [
          ["Pelatihan kualitas", "Rp2.400.000"],
          ["Inspeksi bahan", "Rp1.600.000"],
          ["Rework", "Rp3.500.000"],
          ["Scrap normal", "Rp900.000"],
          ["Klaim garansi", "Rp4.200.000"],
          ["Retur pelanggan", "Rp1.300.000"]
        ],
        "caption": "Diminta: klasifikasikan biaya kualitas ke prevention, appraisal, internal failure, dan external failure."
      },
      {
        "kind": "table-fill",
        "spec": {
          "title": "Workspace Cost of Quality - PT Mahira",
          "instruction": "Masukkan jumlah setiap kategori biaya kualitas.",
          "currency": "Rp",
          "headers": ["Kategori", "Jawaban"],
          "rows": [
            { "id": "tm7-prevention", "label": "Prevention cost", "cells": [{ "id": "tm7-prevention-answer", "answer": 2400000 }] },
            { "id": "tm7-appraisal", "label": "Appraisal cost", "cells": [{ "id": "tm7-appraisal-answer", "answer": 1600000 }] },
            { "id": "tm7-internal", "label": "Internal failure cost", "cells": [{ "id": "tm7-internal-answer", "answer": 4400000 }] },
            { "id": "tm7-external", "label": "External failure cost", "cells": [{ "id": "tm7-external-answer", "answer": 5500000 }] },
            { "id": "tm7-total", "label": "Total quality cost", "cells": [{ "id": "tm7-total-answer", "answer": 13900000 }] }
          ]
        }
      },
      {
        "kind": "solution-reveal",
        "title": "Pembahasan PT Mahira",
        "prompt": "Buka setelah mengisi laporan biaya kualitas.",
        "blocks": [
          { "kind": "p", "text": "Prevention cost = pelatihan kualitas Rp2.400.000. Appraisal cost = inspeksi bahan Rp1.600.000. Internal failure cost = rework Rp3.500.000 + scrap normal Rp900.000 = Rp4.400.000. External failure cost = klaim garansi Rp4.200.000 + retur pelanggan Rp1.300.000 = Rp5.500.000. Total cost of quality = Rp13.900.000." }
        ]
      },
      {
        "kind": "h2",
        "text": "Batch 5 - Journal Builder Kerugian Produksi"
      },
      {
        "kind": "p",
        "text": "Latihan ini mengunci perbedaan perlakuan scrap, spoilage, dan rework. Kuncinya bukan hanya nama kerugian, tetapi akun yang menerima beban: job pelanggan, Factory Overhead Control, atau Loss account."
      },
      {
        "kind": "journal-builder",
        "spec": {
          "title": "Journal Builder Batch 5 - Scrap, Spoilage, dan Rework",
          "instruction": "Lengkapi jurnal berdasarkan tiga transaksi. Gunakan pilihan akun yang tersedia dan jumlah penuh.",
          "currency": "Rp",
          "accountChoices": [
            "Cash",
            "Factory Overhead Control",
            "Work in Process - Job 31",
            "Loss from Abnormal Spoilage",
            "Materials Inventory",
            "Payroll",
            "Applied Factory Overhead"
          ],
          "lines": [
            { "id": "b5-journal-scrap-cash", "group": "1. Scrap umum dijual tunai Rp1.200.000 dan diperlakukan sebagai pengurang FOH", "account": "Cash", "debit": 1200000 },
            { "id": "b5-journal-scrap-foh", "group": "1. Scrap umum dijual tunai Rp1.200.000 dan diperlakukan sebagai pengurang FOH", "account": "Factory Overhead Control", "credit": 1200000 },
            { "id": "b5-journal-spoilage-loss", "group": "2. Spoilage abnormal sebesar Rp3.400.000 ditemukan pada akhir proses", "account": "Loss from Abnormal Spoilage", "debit": 3400000 },
            { "id": "b5-journal-spoilage-wip", "group": "2. Spoilage abnormal sebesar Rp3.400.000 ditemukan pada akhir proses", "account": "Work in Process - Job 31", "credit": 3400000 },
            { "id": "b5-journal-rework-wip", "group": "3. Rework khusus permintaan pelanggan Job 31: bahan Rp900.000, upah Rp700.000, FOH Rp400.000", "account": "Work in Process - Job 31", "debit": 2000000 },
            { "id": "b5-journal-rework-materials", "group": "3. Rework khusus permintaan pelanggan Job 31: bahan Rp900.000, upah Rp700.000, FOH Rp400.000", "account": "Materials Inventory", "credit": 900000 },
            { "id": "b5-journal-rework-payroll", "group": "3. Rework khusus permintaan pelanggan Job 31: bahan Rp900.000, upah Rp700.000, FOH Rp400.000", "account": "Payroll", "credit": 700000 },
            { "id": "b5-journal-rework-applied", "group": "3. Rework khusus permintaan pelanggan Job 31: bahan Rp900.000, upah Rp700.000, FOH Rp400.000", "account": "Applied Factory Overhead", "credit": 400000 }
          ],
          "feedback": "Scrap umum dapat mengurangi FOH. Spoilage abnormal dipisahkan ke loss account. Rework karena permintaan pelanggan dibebankan ke job pelanggan, bukan ke FOH umum."
        }
      },
      {
        "kind": "h2",
        "text": "Batch 5 - Trap UTS TM 7"
      },
      {
        "kind": "table",
        "headers": [
          "Trap",
          "Dampak Salah",
          "Cara Cek Cepat"
        ],
        "rows": [
          [
            "Menganggap semua rework sebagai Factory Overhead Control",
            "Job khusus pelanggan menjadi understated",
            "Cari penyebab rework: pelanggan, normal umum, atau abnormal"
          ],
          [
            "Memasukkan external failure ke internal failure",
            "Analisis biaya kualitas menjadi terlalu optimistis",
            "Tanyakan apakah produk sudah sampai ke pelanggan"
          ],
          [
            "Mengabaikan nilai jual scrap",
            "Biaya produksi atau FOH bisa overstated",
            "Cek apakah scrap dijual dan perlakuan yang diminta soal"
          ],
          [
            "Menyerap abnormal loss ke unit baik",
            "Cost per unit produk baik menjadi tidak adil dan inefisiensi tersembunyi",
            "Pisahkan actual loss dan normal loss allowed"
          ],
          [
            "Menggunakan penjualan sebagai pembagi tanpa diminta",
            "Rasio biaya kualitas salah basis",
            "Baca apakah soal meminta persentase terhadap sales atau production cost"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Kesalahan Umum TM 7"
      },
      {
        "kind": "table",
        "headers": [
          "Kesalahan",
          "Koreksi"
        ],
        "rows": [
          [
            "Scrap, spoilage, dan rework disamakan",
            "Scrap adalah sisa; spoilage tidak ekonomis diperbaiki; rework masih bisa diperbaiki"
          ],
          [
            "Semua kerugian dibebankan ke produk baik",
            "Kerugian abnormal harus dipisahkan"
          ],
          [
            "Spoilage karena pelanggan dibebankan ke overhead",
            "Jika disebabkan pelanggan, biaya dibebankan ke job pelanggan"
          ],
          [
            "Rework selalu dianggap overhead",
            "Rework bisa ke job, overhead, atau loss tergantung penyebab"
          ],
          [
            "External failure dianggap internal failure",
            "External failure terjadi setelah produk sampai ke pelanggan"
          ],
          [
            "Tidak memperhatikan titik inspeksi",
            "Dalam process costing, titik inspeksi menentukan EUP spoilage"
          ],
          [
            "Tidak membuat laporan biaya kualitas",
            "Cost of quality perlu dilaporkan per kategori agar manajemen dapat mengendalikan kualitas"
          ]
        ]
      },
      {
        "kind": "h2",
        "text": "Latihan Pemahaman TM 7"
      },
      {
        "kind": "ol",
        "items": [
          "Bedakan prevention cost, appraisal cost, internal failure cost, dan external failure cost beserta contohnya.",
          "Jelaskan hubungan TQM dengan penurunan biaya kegagalan.",
          "Susun format laporan biaya kualitas dari data prevention, appraisal, internal failure, dan external failure.",
          "Bedakan scrap, spoilage, dan rework.",
          "Buat jurnal penjualan scrap sebagai pengurang Factory Overhead Control.",
          "Tentukan perlakuan spoilage jika disebabkan permintaan pelanggan.",
          "Tentukan perlakuan rework jika merupakan kegagalan abnormal.",
          "Jelaskan dampak titik inspeksi terhadap EUP spoilage dalam process costing."
        ]
      },
      {
        "kind": "h2",
        "text": "Ringkasan TM 7"
      },
      {
        "kind": "p",
        "text": "TM 7 menunjukkan bahwa kualitas dan kerugian produksi bukan sekadar isu teknis produksi, tetapi memengaruhi pengukuran biaya dan evaluasi kinerja. Biaya kualitas dibagi menjadi prevention, appraisal, internal failure, dan external failure. Kerugian produksi dibagi menjadi scrap, spoilage, rework, normal loss, abnormal loss, unit hilang, dan produk cacat. Perlakuan akuntansi bergantung pada penyebab, normalitas, sistem biaya yang digunakan, dan titik inspeksi."
      },
      {
        "kind": "h2",
        "text": "Checklist Kelengkapan TM 7"
      },
      {
        "kind": "table",
        "headers": [
          "Komponen",
          "Status"
        ],
        "rows": [
          [
            "Cost of quality",
            "Masuk"
          ],
          [
            "Prevention, appraisal, internal failure, external failure",
            "Masuk"
          ],
          [
            "TQM dan continuous improvement",
            "Masuk"
          ],
          [
            "Format laporan biaya kualitas",
            "Masuk"
          ],
          [
            "Scrap accounting",
            "Masuk"
          ],
          [
            "Spoilage accounting",
            "Masuk"
          ],
          [
            "Rework accounting",
            "Masuk"
          ],
          [
            "Normal dan abnormal loss",
            "Masuk"
          ],
          [
            "Process costing losses",
            "Masuk"
          ],
          [
            "Jurnal kerugian produksi",
            "Masuk"
          ],
          [
            "Latihan dan kesalahan umum",
            "Masuk"
          ]
        ]
      }
    ]
  }
};

export const AKBI_REVIEW_UTS_READING: AkbiReviewReading = {
  "id": "akbi-review-uts",
  "tm": 0,
  "title": "Simulasi UTS",
  "ref": "TM 1–7 · Paket Ujian Praktik",
  "source": "Modul utama AKBI TM 1-7 + template laporan biaya produksi + pola interaksi UTS AKBI 2024 sebagai acuan bentuk latihan",
  "phase": "review_uts",
  "manualCheckCount": 0,
  "intro": "Simulasi UTS ini disusun sebagai paket ujian praktik TM 1 sampai TM 7. Mahasiswa mengisi laporan, menghitung kos, menyusun skedul, menentukan klasifikasi biaya, dan menyiapkan jurnal dasar. Bagian ini bukan ringkasan teori, melainkan ruang latihan ujian.",
  "objectives": [
    "Mengerjakan paket praktik UTS dengan alur seperti ujian langsung.",
    "Mengisi laporan harga pokok produksi dan harga pokok penjualan secara runtut.",
    "Menghitung biaya job, applied overhead, total job cost, dan cost per unit.",
    "Menyusun laporan biaya produksi dengan metode average dan FIFO.",
    "Mengklasifikasikan biaya kualitas dan kerugian produksi.",
    "Menyiapkan jurnal dasar transfer produk selesai dan penjualan produk."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Petunjuk Simulasi UTS"
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Kerjakan seperti ujian praktik",
      "text": "Isi angka pada lembar kerja yang tersedia, lalu klik Periksa. Gunakan titik atau tanpa pemisah ribuan; sistem akan membaca angka. Untuk bagian klasifikasi dan jurnal, tulis jawaban di catatan sendiri terlebih dahulu, kemudian bandingkan dengan kontrol jawaban di bagian akhir."
    },
    {
      "kind": "table",
      "headers": ["Bagian", "Materi", "Output yang harus dikerjakan", "Bobot latihan"],
      "rows": [
        ["A", "TM 1", "Klasifikasi biaya dan akun", "10"],
        ["B", "TM 2-3", "Laporan harga pokok produksi dan HPP", "20"],
        ["C", "TM 4", "Job order cost sheet dan applied overhead", "15"],
        ["D", "TM 5", "Cost of Production Report metode average", "20"],
        ["E", "TM 6", "Cost of Production Report metode FIFO", "20"],
        ["F", "TM 7", "Cost of quality dan jurnal dasar", "15"]
      ],
      "caption": "Total latihan 100 poin. Bobot ini hanya panduan belajar, bukan penilaian resmi."
    },

    {
      "kind": "h2",
      "text": "Bagian A — Klasifikasi Biaya dan Akun"
    },
    {
      "kind": "p",
      "text": "Klasifikasikan setiap pos ke dalam kategori yang tepat: direct materials, direct labor, factory overhead, selling expense, administrative expense, fixed cost, variable cost, mixed cost, committed cost, atau akun produksi yang sesuai."
    },
    {
      "kind": "interactive-match",
      "spec": {
        "title": "Worksheet Matching Klasifikasi Biaya dan Akun",
        "instruction": "Pilih kategori paling tepat untuk setiap pos. Bentuk ini menggantikan ruang jawaban manual agar latihan benar-benar dapat diperiksa langsung.",
        "choices": [
          "Direct materials",
          "Direct labor",
          "Factory overhead",
          "Selling expense / variable selling cost",
          "Factory overhead / fixed cost",
          "Mixed cost",
          "Committed fixed cost / factory overhead",
          "Finished Goods",
          "Cost of Goods Sold",
          "Administrative expense"
        ],
        "pairs": [
          { "id": "class-1", "prompt": "Bahan kayu utama untuk meja produksi", "answer": "Direct materials" },
          { "id": "class-2", "prompt": "Upah operator yang mengerjakan pesanan pelanggan", "answer": "Direct labor" },
          { "id": "class-3", "prompt": "Gaji mandor pabrik", "answer": "Factory overhead" },
          { "id": "class-4", "prompt": "Komisi salesman berdasarkan penjualan", "answer": "Selling expense / variable selling cost" },
          { "id": "class-5", "prompt": "Penyusutan mesin pabrik metode garis lurus", "answer": "Factory overhead / fixed cost" },
          { "id": "class-6", "prompt": "Biaya listrik pabrik yang terdiri dari abonemen tetap dan pemakaian", "answer": "Mixed cost" },
          { "id": "class-7", "prompt": "Premi asuransi gedung pabrik jangka panjang", "answer": "Committed fixed cost / factory overhead" },
          { "id": "class-8", "prompt": "Biaya produk selesai dipindahkan dari WIP", "answer": "Finished Goods" },
          { "id": "class-9", "prompt": "Barang jadi yang sudah dijual", "answer": "Cost of Goods Sold" },
          { "id": "class-10", "prompt": "Gaji direktur keuangan", "answer": "Administrative expense" }
        ]
      }
    },

    {
      "kind": "h2",
      "text": "Bagian B — Laporan Harga Pokok Produksi dan Harga Pokok Penjualan"
    },
    {
      "kind": "table",
      "headers": ["Data PT Shion", "Jumlah"],
      "rows": [
        ["Persediaan awal bahan baku", "Rp1.300"],
        ["Pembelian bahan baku", "Rp12.500"],
        ["Persediaan akhir bahan baku", "Rp1.600"],
        ["Tenaga kerja langsung", "Rp15.200"],
        ["Overhead pabrik", "Rp12.400"],
        ["BDP awal", "Rp3.400"],
        ["BDP akhir", "Rp3.800"],
        ["Barang jadi awal", "Rp2.400"],
        ["Barang jadi akhir", "Rp2.600"]
      ],
      "caption": "Diminta: susun laporan harga pokok produksi dan harga pokok penjualan."
    },
    {
      "kind": "builder",
      "instructions": "Isi pos yang kosong. Angka memakai satuan rupiah sesuai data soal.",
      "spec": {
        "entity": "PT Shion",
        "title": "Laporan Harga Pokok Produksi dan Harga Pokok Penjualan",
        "period": "Untuk periode UTS",
        "currency": "Rp",
        "lines": [
          { "kind": "header", "label": "Bahan baku langsung" },
          { "id": "rm_beg", "kind": "given", "label": "Persediaan awal bahan baku", "amount": 1300, "indent": 1 },
          { "id": "rm_purchase", "kind": "given", "label": "Pembelian bahan baku", "amount": 12500, "indent": 1 },
          { "id": "rm_available", "kind": "input", "label": "Bahan baku tersedia digunakan", "amount": 13800, "indent": 1, "rule": "top" },
          { "id": "rm_end", "kind": "given", "label": "Persediaan akhir bahan baku", "amount": 1600, "indent": 1, "bracket": true },
          { "id": "dm_used", "kind": "input", "label": "Bahan baku langsung digunakan", "amount": 12200, "indent": 1, "bold": true, "rule": "top" },
          { "id": "dl", "kind": "given", "label": "Tenaga kerja langsung", "amount": 15200, "indent": 1 },
          { "id": "foh", "kind": "given", "label": "Overhead pabrik", "amount": 12400, "indent": 1 },
          { "id": "tmc", "kind": "input", "label": "Total biaya manufaktur periode berjalan", "amount": 39800, "bold": true, "rule": "top" },
          { "id": "wip_beg", "kind": "given", "label": "BDP awal", "amount": 3400, "indent": 1 },
          { "id": "total_wip", "kind": "input", "label": "Total biaya dalam proses", "amount": 43200, "bold": true, "rule": "top" },
          { "id": "wip_end", "kind": "given", "label": "BDP akhir", "amount": 3800, "indent": 1, "bracket": true },
          { "id": "cogm", "kind": "input", "label": "Harga pokok produksi", "amount": 39400, "bold": true, "rule": "double" },
          { "kind": "header", "label": "Harga pokok penjualan" },
          { "id": "fg_beg", "kind": "given", "label": "Barang jadi awal", "amount": 2400, "indent": 1 },
          { "id": "goods_available", "kind": "input", "label": "Barang tersedia untuk dijual", "amount": 41800, "bold": true, "rule": "top" },
          { "id": "fg_end", "kind": "given", "label": "Barang jadi akhir", "amount": 2600, "indent": 1, "bracket": true },
          { "id": "cogs", "kind": "input", "label": "Harga pokok penjualan", "amount": 39200, "bold": true, "rule": "double" }
        ]
      }
    },

    {
      "kind": "h2",
      "text": "Bagian C — Job Order Costing"
    },
    {
      "kind": "table",
      "headers": ["Data Job 412", "Jumlah"],
      "rows": [
        ["Estimasi overhead pabrik", "Rp96.000"],
        ["Estimasi machine hours", "12.000 jam mesin"],
        ["Machine hours aktual Job 412", "1.000 jam mesin"],
        ["Direct materials Job 412", "Rp18.000"],
        ["Direct labor Job 412", "Rp12.500"],
        ["Unit dalam job", "100 unit"],
        ["Status", "Selesai diproduksi, belum terjual"]
      ],
      "caption": "Diminta: hitung tarif overhead, applied overhead, total job cost, cost per unit, dan akun persediaan akhir."
    },
    {
      "kind": "builder",
      "instructions": "Masukkan hasil perhitungan job order costing.",
      "spec": {
        "entity": "PT Koyomi",
        "title": "Job Cost Sheet — Job 412",
        "period": "Simulasi UTS",
        "currency": "Rp",
        "lines": [
          { "id": "est_foh", "kind": "given", "label": "Estimasi overhead pabrik", "amount": 96000 },
          { "id": "est_base", "kind": "given", "label": "Estimasi machine hours", "amount": 12000 },
          { "id": "rate", "kind": "input", "label": "Predetermined overhead rate per jam mesin", "amount": 8, "bold": true, "rule": "top" },
          { "id": "actual_mh", "kind": "given", "label": "Machine hours aktual Job 412", "amount": 1000 },
          { "id": "applied", "kind": "input", "label": "Applied factory overhead", "amount": 8000, "bold": true, "rule": "top" },
          { "id": "dm", "kind": "given", "label": "Direct materials", "amount": 18000 },
          { "id": "dl", "kind": "given", "label": "Direct labor", "amount": 12500 },
          { "id": "job_cost", "kind": "input", "label": "Total job cost", "amount": 38500, "bold": true, "rule": "double" },
          { "id": "units", "kind": "given", "label": "Jumlah unit", "amount": 100 },
          { "id": "unit_cost", "kind": "input", "label": "Cost per unit", "amount": 385, "bold": true, "rule": "double" }
        ]
      }
    },

    {
      "kind": "h2",
      "text": "Bagian D — Process Costing Metode Average"
    },
    {
      "kind": "table",
      "headers": ["Data Departemen Pemotongan", "Jumlah"],
      "rows": [
        ["Unit selesai dan ditransfer", "1.000 unit"],
        ["BDP akhir", "500 unit, 50% selesai"],
        ["Biaya BDP awal + biaya periode berjalan", "Rp7.500.000"],
        ["Asumsi penyelesaian", "Satu kelompok biaya gabungan untuk latihan ringkas"]
      ],
      "caption": "Diminta: hitung EUP average, cost per EUP, biaya produk selesai, dan biaya BDP akhir."
    },
    {
      "kind": "builder",
      "instructions": "Isi skedul ringkas metode average.",
      "spec": {
        "entity": "PT Alexandra",
        "title": "Cost of Production Report — Weighted Average",
        "period": "Departemen Pemotongan",
        "currency": "Rp",
        "lines": [
          { "kind": "header", "label": "Quantity dan equivalent unit" },
          { "id": "completed", "kind": "given", "label": "Unit selesai dan ditransfer", "amount": 1000, "indent": 1 },
          { "id": "ending_units", "kind": "given", "label": "Unit BDP akhir", "amount": 500, "indent": 1 },
          { "id": "ending_eup", "kind": "input", "label": "Equivalent unit BDP akhir", "amount": 250, "indent": 1 },
          { "id": "total_eup", "kind": "input", "label": "Total equivalent unit average", "amount": 1250, "bold": true, "rule": "top" },
          { "kind": "header", "label": "Cost calculation" },
          { "id": "total_cost", "kind": "given", "label": "Total biaya yang dipertanggungjawabkan", "amount": 7500000, "indent": 1 },
          { "id": "cost_per_eup", "kind": "input", "label": "Cost per equivalent unit", "amount": 6000, "bold": true, "rule": "top" },
          { "kind": "header", "label": "Cost assignment" },
          { "id": "transferred_cost", "kind": "input", "label": "Biaya produk selesai dan ditransfer", "amount": 6000000, "indent": 1 },
          { "id": "ending_cost", "kind": "input", "label": "Biaya BDP akhir", "amount": 1500000, "indent": 1 },
          { "id": "assigned_total", "kind": "input", "label": "Total biaya dialokasikan", "amount": 7500000, "bold": true, "rule": "double" }
        ]
      }
    },

    {
      "kind": "h2",
      "text": "Bagian E — Process Costing Metode FIFO"
    },
    {
      "kind": "table",
      "headers": ["Data Departemen Perakitan", "Jumlah"],
      "rows": [
        ["BDP awal", "200 unit; bahan 100%, konversi 40%; biaya awal Rp1.200.000"],
        ["Unit dimulai periode ini", "1.000 unit"],
        ["Unit selesai dan ditransfer", "900 unit"],
        ["BDP akhir", "300 unit; bahan 100%, konversi 60%"],
        ["Biaya bahan periode berjalan", "Rp5.000.000"],
        ["Biaya konversi periode berjalan", "Rp4.000.000"]
      ],
      "caption": "Diminta: susun skedul FIFO ringkas, hitung EUP, cost per EUP, dan cost assignment."
    },
    {
      "kind": "builder",
      "instructions": "Gunakan logika FIFO: pisahkan pekerjaan untuk menyelesaikan BDP awal, started and completed, dan BDP akhir.",
      "spec": {
        "entity": "PT Alicia",
        "title": "Cost of Production Report — FIFO",
        "period": "Departemen Perakitan",
        "currency": "Rp",
        "lines": [
          { "kind": "header", "label": "Quantity schedule" },
          { "id": "completed", "kind": "given", "label": "Unit selesai dan ditransfer", "amount": 900, "indent": 1 },
          { "id": "beg_wip", "kind": "given", "label": "BDP awal", "amount": 200, "indent": 1 },
          { "id": "started_completed", "kind": "input", "label": "Started and completed", "amount": 700, "indent": 1, "rule": "top" },
          { "kind": "header", "label": "Equivalent unit FIFO" },
          { "id": "mat_eup", "kind": "input", "label": "EUP bahan", "amount": 1000, "indent": 1 },
          { "id": "conv_eup", "kind": "input", "label": "EUP konversi", "amount": 1000, "indent": 1 },
          { "kind": "header", "label": "Cost per EUP" },
          { "id": "mat_rate", "kind": "input", "label": "Biaya bahan per EUP", "amount": 5000, "indent": 1 },
          { "id": "conv_rate", "kind": "input", "label": "Biaya konversi per EUP", "amount": 4000, "indent": 1 },
          { "kind": "header", "label": "Cost assignment" },
          { "id": "complete_beg", "kind": "input", "label": "Biaya menyelesaikan BDP awal", "amount": 480000, "indent": 1 },
          { "id": "beg_total", "kind": "input", "label": "Total biaya BDP awal setelah selesai", "amount": 1680000, "indent": 1 },
          { "id": "started_completed_cost", "kind": "input", "label": "Biaya started and completed", "amount": 6300000, "indent": 1 },
          { "id": "ending_cost", "kind": "input", "label": "Biaya BDP akhir", "amount": 2220000, "indent": 1 },
          { "id": "total_assigned", "kind": "input", "label": "Total biaya dialokasikan", "amount": 10200000, "bold": true, "rule": "double" }
        ]
      }
    },

    {
      "kind": "h2",
      "text": "Bagian F — Biaya Kualitas dan Jurnal Dasar"
    },
    {
      "kind": "table",
      "headers": ["Data biaya kualitas", "Jumlah"],
      "rows": [
        ["Pelatihan mutu dan perencanaan kualitas", "Rp4.000"],
        ["Inspeksi bahan dan pengujian produk", "Rp3.000"],
        ["Scrap dan rework sebelum produk dikirim", "Rp5.000"],
        ["Garansi dan keluhan pelanggan", "Rp8.000"]
      ],
      "caption": "Diminta: klasifikasikan prevention, appraisal, internal failure, external failure, lalu hitung total cost of quality."
    },
    {
      "kind": "builder",
      "instructions": "Isi laporan biaya kualitas ringkas.",
      "spec": {
        "entity": "PT Cakra Mutu",
        "title": "Cost of Quality Report",
        "period": "Simulasi UTS",
        "currency": "Rp",
        "lines": [
          { "id": "prevention", "kind": "input", "label": "Prevention cost", "amount": 4000 },
          { "id": "appraisal", "kind": "input", "label": "Appraisal cost", "amount": 3000 },
          { "id": "internal", "kind": "input", "label": "Internal failure cost", "amount": 5000 },
          { "id": "external", "kind": "input", "label": "External failure cost", "amount": 8000 },
          { "id": "total_quality", "kind": "input", "label": "Total cost of quality", "amount": 20000, "bold": true, "rule": "double" }
        ]
      }
    },
    {
      "kind": "p",
      "text": "Jurnal dasar yang perlu ditulis manual: (1) produk selesai diproduksi, (2) produk dijual dari sisi HPP, dan (3) overhead dibebankan ke produksi. Tulis jurnal dahulu sebelum melihat kontrol jawaban."
    },
    {
      "kind": "h2",
      "text": "Worksheet Jurnal Dasar"
    },
    {
      "kind": "journal-builder",
      "spec": {
        "title": "Latihan Jurnal Dasar UTS",
        "instruction": "Isi akun dan jumlah debit/kredit. Gunakan angka dari worksheet PT Shion: HPP produksi Rp39.400, HPP penjualan Rp39.200, dan FOH periode berjalan Rp12.400.",
        "currency": "Rp",
        "accountChoices": ["Work in Process", "Finished Goods", "Cost of Goods Sold", "Factory Overhead Applied"],
        "lines": [
          { "id": "j1-dr", "account": "Finished Goods", "debit": 39400 },
          { "id": "j1-cr", "account": "Work in Process", "credit": 39400 },
          { "id": "j2-dr", "account": "Cost of Goods Sold", "debit": 39200 },
          { "id": "j2-cr", "account": "Finished Goods", "credit": 39200 },
          { "id": "j3-dr", "account": "Work in Process", "debit": 12400 },
          { "id": "j3-cr", "account": "Factory Overhead Applied", "credit": 12400 }
        ]
      }
    },
    {
      "kind": "callout",
      "variant": "tip",
      "title": "Kriteria selesai",
      "text": "Simulasi dianggap siap jika semua lembar kerja angka benar, urutan laporan tidak tertukar, dan jurnal dasar dapat ditulis tanpa melihat rumus. Jika bagian FIFO masih salah, ulangi pemisahan BDP awal, started and completed, dan BDP akhir."
    }
  ]
};



// Batch 14 UX polish: navigasi baca dan checkpoint TM 4-7.
applyAkbiReadingUxPolish(AKBI_TM4_TM7_READINGS[4], {
  tm: 4,
  phase: 'pra_uts',
  focus: 'job order costing, job cost sheet, source documents, applied FOH, dan jurnal biaya pesanan',
  theory: 'Bisa menjelaskan kapan job order costing dipakai dan dokumen apa yang menjadi dasar pembebanan biaya.',
  formula: 'Bisa menghitung predetermined FOH rate, applied FOH, total job cost, dan cost per unit.',
  example: 'Bisa mengikuti satu pesanan dari bahan, tenaga kerja, overhead dibebankan, sampai barang selesai.',
  practice: 'Bisa mengisi job cost sheet dan menyusun jurnal bahan, labor, applied FOH, serta transfer ke finished goods.',
  trap: 'Tidak memakai actual FOH untuk membebankan biaya ke job selama periode berjalan.',
  sourceAlignment: 'RPS TM 4, Carter Ch. 5, dan penguatan Batch 3 Job Order Costing.',
  nextAction: 'Setelah TM 4, lanjut ke TM 5 untuk melihat sistem biaya saat produk bersifat homogen dan diproses massal.',
});

applyAkbiReadingUxPolish(AKBI_TM4_TM7_READINGS[5], {
  tm: 5,
  phase: 'pra_uts',
  focus: 'process costing average method, equivalent unit, cost per EUP, transferred-out cost, dan ending WIP',
  theory: 'Bisa menjelaskan mengapa equivalent unit diperlukan dalam produksi massal yang belum selesai seluruhnya.',
  formula: 'Bisa menghitung EUP materials, EUP conversion, cost per EUP, transferred-out, dan ending WIP dengan average method.',
  example: 'Bisa membaca production cost report weighted-average dari unit flow sampai cost reconciliation.',
  practice: 'Bisa mengisi laporan biaya produksi average method secara berurutan.',
  trap: 'Tidak memisahkan biaya BDP awal pada weighted-average karena biaya awal digabung dengan biaya periode berjalan.',
  sourceAlignment: 'RPS TM 5, Carter Ch. 6, dan penguatan Batch 4 Process Costing.',
  nextAction: 'Setelah TM 5, lanjut ke TM 6 untuk membandingkan average method dengan FIFO method.',
});

applyAkbiReadingUxPolish(AKBI_TM4_TM7_READINGS[6], {
  tm: 6,
  phase: 'pra_uts',
  focus: 'process costing FIFO, equivalent unit FIFO, biaya untuk menyelesaikan BDP awal, started and completed, dan ending WIP',
  theory: 'Bisa menjelaskan perbedaan utama FIFO dengan weighted-average pada perlakuan BDP awal.',
  formula: 'Bisa menghitung EUP FIFO untuk completed beginning WIP, started and completed, dan ending WIP.',
  example: 'Bisa merekonsiliasi biaya FIFO tanpa mencampur biaya periode lalu dengan biaya periode berjalan.',
  practice: 'Bisa mengisi laporan biaya produksi FIFO dari unit flow sampai cost assignment.',
  trap: 'Tidak membebankan ulang pekerjaan yang sudah selesai pada BDP awal periode lalu.',
  sourceAlignment: 'RPS TM 6, Carter Ch. 6, dan penguatan Batch 4 FIFO.',
  nextAction: 'Setelah TM 6, lanjut ke TM 7 untuk memahami biaya kualitas dan kerugian produksi sebelum UTS.',
});

applyAkbiReadingUxPolish(AKBI_TM4_TM7_READINGS[7], {
  tm: 7,
  phase: 'pra_uts',
  focus: 'cost of quality, spoilage, scrap, rework, normal loss, dan abnormal loss',
  theory: 'Bisa membedakan prevention, appraisal, internal failure, external failure, scrap, spoilage, dan rework.',
  formula: 'Bisa menghitung total cost of quality dan persentasenya terhadap penjualan atau biaya produksi.',
  example: 'Bisa mengklasifikasikan biaya mutu dan membaca perlakuan akuntansi kerugian produksi.',
  practice: 'Bisa membuat laporan biaya kualitas serta jurnal scrap, spoilage, dan rework.',
  trap: 'Tidak memperlakukan abnormal loss sebagai biaya produk normal.',
  sourceAlignment: 'RPS TM 7, Carter Ch. 7, dan penguatan Batch 5 Quality & Loss.',
  nextAction: 'Setelah TM 7, lakukan review UTS sebelum masuk materi UAS pada TM 8.',
});

export default AKBI_TM4_TM7_READINGS;
