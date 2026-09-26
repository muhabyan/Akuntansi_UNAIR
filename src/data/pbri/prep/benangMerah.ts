// AKA201 shared/benang_merah_TM01-07.md, converted by C:\Users\Lenovo\aka201-converter\convert-aka201.mjs.
// The text is verbatim from the content package; change the package and re-run the converter instead of editing here.
import type { Reading } from '../../../types';

export const BENANG_MERAH_READING: Reading = {
  "tm": 92,
  "title": "Benang Merah TM01–TM07: Satu Alur, Bukan Tujuh Topik",
  "intro": "**Untuk apa dokumen ini?** Ketujuh TM sebelum UTS sebenarnya menjawab satu rangkaian pertanyaan tentang audit. Kalau kamu bisa menceritakan alur di bawah ini dengan kata-katamu sendiri, fondasimu sudah kuat. Setiap langkah merujuk ke TM dan sumbernya, jadi kamu bisa kembali ke bacaan lengkap atau ke halaman buku.",
  "objectives": [],
  "layout": "layered",
  "badge": "Persiapan UTS",
  "blocks": [
    {
      "kind": "section",
      "title": "Alurnya dalam delapan langkah",
      "layer": "main",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "#",
            "Pertanyaan",
            "Jawaban singkat",
            "TM"
          ],
          "rows": [
            [
              "1",
              "**Kenapa audit ada?**",
              "Pengambil keputusan tidak bisa memeriksa sendiri informasi yang mereka pakai (information risk), dan manajer yang menyajikan informasi punya kepentingan yang bisa berbeda dengan pemilik atau kreditor (agency theory).",
              "TM01"
            ],
            [
              "2",
              "**Audit itu apa?**",
              "Mengumpulkan dan menilai bukti untuk menentukan dan melaporkan seberapa jauh asersi atas suatu informasi sesuai dengan kriteria, oleh orang yang kompeten dan independen. Berlaku untuk informasi apa pun, tidak hanya laporan keuangan.",
              "TM01"
            ],
            [
              "3",
              "**Siapa yang boleh, dan dengan standar apa?**",
              "Di Indonesia, jasa asurans hanya oleh Akuntan Publik berizin, melalui KAP, mengikuti SPAP (Standar Audit mengadopsi ISA), dengan sistem manajemen mutu di tingkat KAP.",
              "TM02"
            ],
            [
              "4",
              "**Syarat perilakunya apa?**",
              "Etika dan independensi, dalam pikiran dan penampilan. Tanpa itu keyakinan yang diberikan tidak bernilai.",
              "TM03"
            ],
            [
              "5",
              "**Siapa bertanggung jawab atas apa?**",
              "Manajemen membuat dan mengoreksi laporan; TCWG mengawasi; auditor menguji dengan skeptisisme dan pertimbangan profesional, dan hanya memberi keyakinan memadai.",
              "TM04"
            ],
            [
              "6",
              "**Apa persisnya yang diuji?**",
              "Asersi, yaitu klaim manajemen per akun dan golongan transaksi, dikelompokkan per siklus. Asersi menunjukkan salah saji apa yang mungkin terjadi.",
              "TM05"
            ],
            [
              "7",
              "**Seberapa salah yang penting?**",
              "Materialitas, diukur dari apakah keputusan pengguna akan berubah. Materialitas pelaksanaan memberi ruang aman atas salah saji kecil yang menumpuk.",
              "TM07"
            ],
            [
              "8",
              "**Apa hasil akhirnya?**",
              "Opini: tanpa modifikasian, wajar dengan pengecualian, tidak wajar, atau tidak menyatakan pendapat, ditentukan oleh jenis masalah dan luas dampaknya.",
              "TM06"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "callout",
          "variant": "note",
          "text": "**Catatan urutan.** Dalam RPS, TM06 (opini) datang sebelum TM07 (materialitas). Secara logika, materialitas dipakai lebih dulu (untuk merencanakan dan mengevaluasi), dan opini adalah hasil akhirnya. `(ARENS p.200, Figure 6-6)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "Satu contoh yang menyambungkan semuanya",
      "layer": "main",
      "blocks": [
        {
          "kind": "p",
          "text": "Ini contoh buatan penulis untuk melatih cara berpikir. Setiap langkahnya bersumber dari TM yang disebut."
        },
        {
          "kind": "p",
          "text": "**PT Sinar Cahaya**, perusahaan manufaktur, meminjam dana besar dari bank. Pemiliknya tidak ikut mengelola."
        },
        {
          "kind": "ol",
          "items": [
            "**Kenapa perlu audit?** Bank dan pemilik tidak bisa memeriksa sendiri pembukuan perusahaan (remoteness), sedangkan manajer punya motif agar laporannya terlihat baik (biases and motives). Dari sisi agency theory, pemilik dan bank adalah prinsipal, manajer adalah agen, dan audit adalah bentuk monitoring. *(TM01: ARENS pp.7–9; Jensen & Meckling 1976, pp.308, 323)*",
            "**Apa yang diaudit?** Informasinya laporan keuangan; kriterianya kerangka pelaporan keuangan yang berlaku. Bank juga bisa meminta audit kepatuhan atas covenant pinjaman, dengan kriteria ketentuan perjanjian. *(TM01: ARENS pp.4, 10–11)*",
            "**Siapa auditornya?** Akuntan Publik berizin, melalui KAP. KAP harus punya sistem manajemen mutu, dan partner perikatan bertanggung jawab atas mutu audit ini. *(TM02: UUAP Pasal 3, 25; ISA220 para. 13)*",
            "**Etika.** Menjelang fieldwork, CFO menawarkan makan malam mahal kepada tim. Tim menolak karena tidak trivial. *(TM03: KEPAP P420.3)*",
            "**Tanggung jawab dan sikap.** Manajer keuangan menjelaskan sebuah jurnal besar di akhir tahun dengan lancar. Auditor tetap meminta dokumen sumber, karena jawaban wawancara pun harus dinilai secara kritis. *(TM04: ISA200 paras. A21, A25)*",
            "**Asersi.** Karena bonus direksi berbasis laba, auditor menilai occurrence dan cutoff penjualan sebagai asersi yang relevan. *(TM05: ARENS pp.105–107)*",
            "**Materialitas.** Auditor memilih laba sebelum pajak sebagai tolok ukur, menetapkan materialitas keseluruhan dan materialitas pelaksanaan yang lebih rendah karena ada faktor risiko fraud. *(TM07: ARENS pp.202–207)*",
            "**Opini.** Auditor menemukan penjualan Januari yang dicatat di Desember dalam jumlah material, tetapi dampaknya terbatas pada penjualan, piutang, dan persediaan. Manajemen menolak mengoreksi. Opininya wajar dengan pengecualian, dan hal ini dikomunikasikan kepada komite audit. *(TM06: ISA705 para. 7; ARENS pp.635–636)*"
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "Sepuluh pertanyaan fondasi",
      "layer": "main",
      "blocks": [
        {
          "kind": "p",
          "text": "Kalau kamu bisa menjawab semuanya tanpa catatan dan dengan kata-katamu sendiri, kamu tidak akan kesulitan menjawab pertanyaan \"apa itu audit\" di depan kelas."
        },
        {
          "kind": "ol",
          "items": [
            "Apa itu audit, tanpa menyebut laporan keuangan? *(TM01)*",
            "Beri dua contoh audit selain audit laporan keuangan, dengan informasi dan kriterianya. *(TM01)*",
            "Kenapa audit menurunkan bunga pinjaman tetapi tidak menurunkan risiko bisnis? *(TM01)*",
            "Apa hubungan agency theory dengan kebutuhan audit? *(TM01)*",
            "Kenapa jasa asurans hanya boleh diberikan Akuntan Publik berizin, dan siapa yang memberi izinnya? *(TM02)*",
            "Kenapa auditor yang jujur tetap harus terlihat independen? *(TM03)*",
            "Kenapa auditor tidak boleh membuat sendiri jurnal koreksi untuk klien? *(TM04)*",
            "Apa itu asersi, dan kenapa auditor memecah laporan menjadi asersi? *(TM05)*",
            "Kenapa salah saji kecil bisa material? *(TM07)*",
            "Apa beda opini tidak wajar dan opini tidak menyatakan pendapat? *(TM06)*"
          ]
        },
        {
          "kind": "p",
          "text": "Contoh jawaban setiap pertanyaan ada di bagian **Uji pemahaman** pada bacaan TM yang disebut. Setelah itu, lanjutkan ke `latihan_skenario_UTS.md` untuk berlatih menerapkannya pada skenario kasus, dengan cara menjawab dari `panduan_menjawab_kasus.md`."
        }
      ]
    },
    {
      "kind": "section",
      "title": "Sumber",
      "layer": "main",
      "blocks": [
        {
          "kind": "ul",
          "items": [
            "Arens, Elder, Beasley, Hogan, Jones, *Auditing: The Art and Science of Assurance Engagements*, 15th Canadian ed.",
            "IAASB 2025 Handbook Vol. 1 (ISA 200, 220, 315, 320, 701, 705, 706; ISQM 1).",
            "IAPI, Kode Etik Profesi Akuntan Publik 2025.",
            "UU No. 5 Tahun 2011 tentang Akuntan Publik; PP No. 20 Tahun 2015 tentang Praktik Akuntan Publik.",
            "Jensen, M. C. dan Meckling, W. H. (1976), \"Theory of the Firm: Managerial Behavior, Agency Costs and Ownership Structure\", *Journal of Financial Economics* 3(4), 305–360."
          ]
        },
        {
          "kind": "p",
          "text": "Contoh PT Sinar Cahaya adalah susunan penulis (Interpretasi) untuk latihan berpikir."
        }
      ]
    }
  ]
};
