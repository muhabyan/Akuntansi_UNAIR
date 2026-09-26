import type { Reading } from '../../../types';

// Acuan peraturan: 25 September 2026. Baca batasan sumber di tiap TM.
export const TM8_READING: Reading = {
  tm: 8,
  title: 'Review UTS Perpajakan II: Peta TM1-7 dan Latihan Terpadu',
  ref: 'RPS Perpajakan II pertemuan 1-7 | UU PPh jo. UU HPP | PP 55/2022 jo. PP 20/2026 | PMK 51/2025 | PMK 81/2024 sebagaimana diubah',
  intro: 'Gunakan review ini setelah membaca TM1-7. Tentukan lebih dahulu subjek, objek, dasar pengenaan, sifat final atau tidak final, lalu hitung pajak dan periksa apakah pemotongan dapat dikreditkan. Acuan ketentuan di sini adalah 25 September 2026; untuk angka yang hanya berasal dari slide dosen, baca catatan batasan sumber pada TM terkait.',
  objectives: [
    'Menghubungkan topik tiap pertemuan dengan dasar hukum dan jenis keputusan yang diuji.',
    'Membedakan PPh final dari kredit pajak yang dapat mengurangi PPh tahunan.',
    'Menyelesaikan hitungan UMKM dan fasilitas Pasal 31E secara bertahap.',
    'Mengenali batas sumber dan tanggal berlaku peraturan dalam jawaban kasus.'
  ],
  blocks: [
    { kind: 'h2', text: '1. Peta materi dan urutan kerja' },
    {
      kind: 'table',
      headers: ['TM', 'Topik yang perlu dikuasai', 'Pertanyaan awal saat mengerjakan soal'],
      rows: [
        ['1', 'Subjek dan objek PPh; biaya 3M dan bukan biaya; natura; zakat; tarif progresif orang pribadi', 'Apakah penghasilan ini objek, final, atau bukan objek? Apakah biaya boleh dikurangkan?'],
        ['2', 'Harga perolehan dan pengalihan harta; FIFO atau rata-rata; NPPN; rugi fiskal; nilai buku reorganisasi', 'Dasar fiskal dan metode persediaan mana yang sah? Apakah syarat NPPN atau nilai buku terpenuhi?'],
        ['3', 'Hubungan istimewa, prinsip kewajaran, metode transfer pricing, APA, dan P3B', 'Adakah hubungan istimewa dan pembanding yang tepat?'],
        ['4', 'Penyusutan, amortisasi, penarikan aset, dan revaluasi fiskal', 'Aset termasuk kelompok apa, kapan mulai disusutkan, dan metode apa yang dipilih?'],
        ['5', 'Pemungutan PPh 22, pemotongan PPh 23/26, marketplace, dan final UMKM', 'Siapa pemungut atau pemotong, berapa DPP, dan apakah pajak bersifat final?'],
        ['6', 'PPh final Pasal 4 ayat (2) dan norma khusus Pasal 15', 'Apa jenis penghasilannya dan peraturan khusus yang mengatur tarifnya?'],
        ['7', 'Kredit luar negeri PPh 24, angsuran PPh 25 dan OPPT, serta fasilitas Pasal 31A/31E', 'Berapa batas kredit, dasar angsuran, dan bagian PKP yang mendapat fasilitas?']
      ],
      caption: 'Peta ini mengikuti RPS Perpajakan II dan bacaan aktif TM1-7.'
    },
    { kind: 'h2', text: '2. Dasar hukum dan tanggal kasus' },
    {
      kind: 'ul',
      items: [
        '**TM1 dan TM5, UMKM:** PP 20/2026 mengubah PP 55/2022 sejak 22 April 2026. Batas tujuh tahun bagi orang pribadi dihapus; uji kelayakan omzet dan pengecualian pekerjaan bebas tetap wajib dilakukan.',
        '**TM2, nilai buku reorganisasi:** PMK 81/2024 perlu dibaca bersama PMK 1/2026, termasuk perubahan masa kelanjutan usaha menjadi empat tahun. Periksa aturan peralihan untuk permohonan sebelum perubahan.',
        '**TM5, PPh 22:** gunakan PMK 51/2025 yang berlaku sejak 1 Agustus 2025. Pasal 217-225 PMK 81/2024 telah dihapus oleh PMK 54/2025.',
        '**TM6, tarif dari slide:** beberapa tarif PPh final dan Pasal 15 pada slide belum dapat diverifikasi dari teks peraturan yang tersedia. Lihat kolom sumber dan batasan pada TM6 sebelum menerapkan tarif.',
        '**TM7, PPh 25:** bedakan angsuran biasa, WP orang pribadi pengusaha tertentu, dan kredit pajak akhir tahun. Angsuran yang sudah dibayar tidak dikurangkan lagi dari dasar angsuran tahun berikutnya.'
      ]
    },
    { kind: 'h2', text: '3. Rumus dan batas penerapan' },
    {
      kind: 'table',
      headers: ['Perhitungan', 'Langkah', 'Batas penting'],
      rows: [
        ['PPh orang pribadi', 'Penghasilan neto - pengurang yang sah - PTKP = PKP; kenakan tarif Pasal 17 per lapisan', 'Jangan menerapkan satu tarif tertinggi pada seluruh PKP.'],
        ['PPh final UMKM orang pribadi', '0,5% x bagian omzet usaha kumulatif setahun di atas Rp500.000.000', 'Skema hanya untuk yang memenuhi syarat; penghasilan pekerjaan bebas bukan objek skema final.'],
        ['PPh 22 impor', 'Tarif yang berlaku x nilai impor menurut PMK 51/2025', 'Tentukan API, pembebasan, bea masuk, dan kurs menurut tanggal transaksi.'],
        ['PPh 23 jasa', '2% x jumlah bruto jasa yang menjadi objek', 'Periksa pengecualian dan ketentuan identitas perpajakan penerima.'],
        ['Kredit PPh 24', 'Bandingkan pajak luar negeri yang dibayar dengan batas kredit menurut UU PPh Pasal 24', 'Hitung per negara dan jangan gabungkan rugi luar negeri dengan penghasilan dalam negeri.'],
        ['Fasilitas Pasal 31E', 'PKP fasilitas = (Rp4,8 miliar / omzet) x PKP untuk omzet di atas Rp4,8 miliar sampai Rp50 miliar', 'Tarif 50% dari tarif umum hanya atas bagian PKP yang mendapat fasilitas.']
      ],
      caption: 'Rumus ringkas; rincian subjek, pengecualian, dan contoh ada pada bacaan tiap TM.'
    },
    { kind: 'h2', text: '4. Latihan hitung dan pembahasan' },
    {
      kind: 'solution-reveal',
      title: 'Latihan A - PPh final UMKM orang pribadi',
      prompt: 'Omzet usaha kumulatif sampai Mei Rp400.000.000. Omzet Juni Rp150.000.000. Asumsikan wajib pajak orang pribadi memenuhi seluruh syarat skema final UMKM pada tahun kasus 2026. Berapa PPh final atas omzet Juni?',
      blocks: [
        { kind: 'p', text: 'Omzet sampai akhir Juni = Rp400.000.000 + Rp150.000.000 = Rp550.000.000. Bagian yang melampaui fasilitas Rp500.000.000 pada Juni = Rp50.000.000. PPh final Juni = 0,5% x Rp50.000.000 = **Rp250.000**. Jangan mengenakan 0,5% atas seluruh omzet Juni.' }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan B - fasilitas Pasal 31E',
      prompt: 'WP badan memiliki omzet Rp30.000.000.000 dan PKP Rp3.000.000.000. Dengan tarif umum badan 22%, hitung PPh terutang yang mempertimbangkan Pasal 31E.',
      blocks: [
        { kind: 'p', text: 'Bagian PKP yang mendapat fasilitas = Rp4.800.000.000 / Rp30.000.000.000 x Rp3.000.000.000 = Rp480.000.000. Sisa PKP = Rp2.520.000.000. PPh fasilitas = 11% x Rp480.000.000 = Rp52.800.000; PPh tanpa fasilitas = 22% x Rp2.520.000.000 = Rp554.400.000. **Total PPh terutang Rp607.200.000**. PPh 22/23/24 yang sah menjadi kredit terpisah saat menghitung pelunasan, sedangkan PPh final tidak.' }
      ]
    },
    { kind: 'h2', text: '5. Pemeriksaan jawaban sebelum ujian' },
    {
      kind: 'ul',
      items: [
        'Sebutkan tahun pajak dan tanggal transaksi sebelum memilih aturan. PP 20/2026 dan PMK 51/2025 memiliki tanggal mulai berlaku yang berbeda.',
        'Pisahkan penghasilan bukan objek, penghasilan final, dan penghasilan yang masuk penghitungan umum.',
        'Cantumkan dasar pengenaan dan alasan setiap koreksi atau kredit, bukan hanya angka akhir.',
        'Untuk revaluasi aset, beberapa tarif PPh final, dan Pasal 15 yang hanya disokong slide, tandai rujukan slide serta cek teks peraturan primer bila tersedia.',
        'Kembali ke TM terkait untuk pembahasan rinci, lalu kerjakan kuis, flashcard, dan bank kasus UTS dari tab masing-masing.'
      ]
    }
  ]
};
