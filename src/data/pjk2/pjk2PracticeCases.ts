// src/data/pjk2/pjk2PracticeCases.ts
// Kasus review pra-UTS; contoh pasca-UTS berada di modul TM09-TM15.
// Berdasarkan Standar UU HPP No. 7/2021, PP 58/2023, PMK 168/2023, PMK 66/2023, & PMK 172/2023
import type { ContentBlock } from '../../types';

// TM 8 - Pra-UTS
export const CASE_UTS_PJK2_INTEGRATED: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 8: Integrasi Pemotongan/Pemungutan Pajak & Rekonsiliasi Fiskal Pra-UTS',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Dalam soal ujian UTS, disajikan data laba komersial sebelum pajak PT Makmur Abadi sebesar Rp 2 Miliar. Akuntan menemukan: biaya paket sembako karyawan Rp 80 Jt sebagai imbalan kerja yang terkait kegiatan usaha (3M) dan sudah dibebankan secara komersial; rugi cabang usaha luar negeri Rp 100 Jt yang sudah menurunkan laba komersial; serta penghasilan dividen dari PT Anak dalam negeri (kepemilikan 30%) Rp 250 Jt yang sudah menaikkan laba komersial. Ketiga pos belum disesuaikan secara fiskal.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Susun rekonsiliasi fiskal dan tentukan dasar hukum perlakuan dividen antar-perusahaan sesuai UU Cipta Kerja / UU HPP!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Dividen Antar-Badan Usaha (Pasal 4 ayat (3) huruf f UU PPh)**: Dividen yang diterima oleh Wajib Pajak Badan dalam negeri dari perseroan terbatas lain di Indonesia berstatus **BUKAN OBJEK PAJAK (Non-Taxable Income)** tanpa syarat persentase kepemilikan saham minimum. Dilakukan **Koreksi Fiskal Negatif sebesar Rp 250.000.000**.',
            '**2. Kerugian Usaha Cabang Luar Negeri**: Berdasarkan Pasal 24 UU PPh, kerugian yang diderita di luar negeri **TIDAK BOLEH DIGABUNGKAN** untuk mengurangi penghasilan dalam negeri (Koreksi Fiskal Positif Rp 100.000.000).',
            '**3. Evaluasi Natura PMK 66/2023 Pasal 2**: Paket sembako adalah imbalan kerja berupa natura, bukan otomatis sama dengan makanan/minuman yang disediakan di tempat kerja. Bagi pemberi kerja, biaya Rp 80.000.000 boleh dikurangkan karena dalam skenario ini terkait pekerjaan dan kegiatan 3M; tidak ada koreksi fiskal atas biaya tersebut. Status sebagai objek atau pengecualian PPh bagi pegawai perlu diuji terpisah menurut jenis, nilai, dan syarat PMK 66/2023.',
            '**4. Penghasilan Kena Pajak (dengan asumsi tidak ada koreksi lain)**: Rp 2.000.000.000 + Rp 100.000.000 - Rp 250.000.000 = **Rp 1.850.000.000**. Biaya natura tetap masuk dalam laba komersial dan fiskal.'
          ]
        }
      ]
    }
  ]
};
