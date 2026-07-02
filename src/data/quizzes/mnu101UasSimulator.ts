import type { QuizQuestion } from '../../types';

export const MNU101_UAS_SIMULATOR: QuizQuestion[] = [
  {
    q: '[TIPS PENTING] Pola & Tips Menjawab Ujian Esai Pengantar Bisnis',
    options: ['Baca Tips (Wajib sebelum ujian!)'],
    answer: 0,
    explanation: `
<div class="space-y-3 text-sm">
  <p>Ujian tahun ini lebih fokus pada <strong>analisis dan evaluasi (C3-C4)</strong> dibanding sekadar hafalan. Berikut tips suksesnya:</p>
  <ul class="list-disc pl-5 space-y-1">
    <li><strong>Definisi Singkat:</strong> Selalu buka jawaban esai/kasus dengan definisi teori yang tepat.</li>
    <li><strong>Gunakan Data Konkret:</strong> Masukkan data yang relevan (misal GDP 61%, 97% penyerapan kerja oleh UMKM, dll) untuk mendukung argumen.</li>
    <li><strong>Kutip Sumber Teori:</strong> Sebutkan referensi seperti "menurut Pride Bab X" atau "Nickels Bab Y" untuk menambah poin akademik.</li>
    <li><strong>Soal Opini 2 Sisi:</strong> Tunjukkan kelebihan (pros) dan kelemahan (cons), lalu buat kesimpulan tegas yang berlandaskan teori.</li>
    <li><strong>Soal Perbandingan:</strong> Jika memungkinkan, buat dalam format poin-poin terstruktur atau tabel agar mudah dibaca dosen.</li>
  </ul>
</div>
    `.trim(),
  },
  {
    q: '[ESAI HR] Jelaskan pengertian employee turnover dan sebutkan penyebab utamanya!',
    options: ['Lihat Pembahasan Lengkap'],
    answer: 0,
    explanation: `
<div class="space-y-3 text-sm">
  <p><strong>Employee Turnover</strong> adalah tingkat pergantian karyawan dalam suatu organisasi — berapa banyak karyawan yang keluar dan harus digantikan dalam periode tertentu. Turnover tinggi adalah sinyal masalah serius dalam organisasi.</p>
  <p class="font-semibold">Penyebab Employee Turnover:</p>
  <ul class="list-disc pl-5 space-y-1">
    <li>Kompensasi tidak kompetitif dibanding pasar</li>
    <li>Minimnya peluang pengembangan karir dan promosi</li>
    <li>Budaya kerja toxic atau manajer yang buruk (toxic leadership)</li>
    <li>Work-life balance yang tidak terjaga</li>
    <li>Kurangnya pengakuan dan apresiasi atas kontribusi</li>
    <li>Ketidaksesuaian nilai antara karyawan dan perusahaan</li>
    <li>Spesialisasi berlebihan yang menyebabkan kebosanan (job monotony)</li>
  </ul>
</div>
    `.trim(),
  },
  {
    q: '[ESAI HR] Jelaskan pengertian onboarding dan orientation — apa perbedaannya?',
    options: ['Lihat Pembahasan Lengkap'],
    answer: 0,
    explanation: `
<div class="space-y-3 text-sm">
  <p><strong>Orientation</strong> adalah proses memperkenalkan karyawan baru kepada organisasi: struktur perusahaan, kebijakan, prosedur, fasilitas, dan rekan kerja. Biasanya berlangsung pada hari-hari pertama kerja. Bersifat formal dan singkat.</p>
  <p><strong>Onboarding</strong> adalah proses yang lebih komprehensif dan jangka panjang (bisa 3-12 bulan) — membantu karyawan baru sepenuhnya beradaptasi, memahami peran mereka secara mendalam, dan menjadi produktif. Mencakup pelatihan teknis, mentoring, dan integrasi budaya perusahaan.</p>
  <div class="bg-blue-50/50 p-3 rounded-lg border border-blue-100">
    <p class="font-semibold text-blue-800 mb-1">Hubungan Keduanya:</p>
    <p>Orientation adalah <em>bagian pertama</em> dari onboarding. Onboarding adalah keseluruhan <em>journey</em> yang jauh lebih panjang dan strategis.</p>
  </div>
</div>
    `.trim(),
  },
  {
    q: '[ESAI FINANCE] Jelaskan perbedaan antara Neraca (Balance Sheet), Laporan Laba Rugi (Income Statement), dan Laporan Arus Kas (Cash Flow Statement)!',
    options: ['Lihat Pembahasan Lengkap'],
    answer: 0,
    explanation: `
<div class="space-y-4 text-sm">
  <div class="p-3 border rounded-lg bg-gray-50/50">
    <h4 class="font-bold text-gray-800">1. Balance Sheet (Neraca)</h4>
    <p><strong>Isi:</strong> Aset, Kewajiban (Liabilitas), Ekuitas Pemilik.</p>
    <p><strong>Fungsi:</strong> Menjawab "Apa yang dimiliki dan dihutangi perusahaan?" pada <em>satu titik waktu tertentu (snapshot)</em>.</p>
  </div>
  <div class="p-3 border rounded-lg bg-gray-50/50">
    <h4 class="font-bold text-gray-800">2. Income Statement (Laba Rugi)</h4>
    <p><strong>Isi:</strong> Pendapatan, Biaya, Laba/Rugi Bersih.</p>
    <p><strong>Fungsi:</strong> Menjawab "Apakah perusahaan menghasilkan profit (untung)?" <em>selama satu periode (misal: setahun)</em>.</p>
  </div>
  <div class="p-3 border rounded-lg bg-gray-50/50">
    <h4 class="font-bold text-gray-800">3. Cash Flow Statement (Arus Kas)</h4>
    <p><strong>Isi:</strong> Aliran kas aktual dari aktivitas Operasi, Investasi, dan Pendanaan.</p>
    <p><strong>Fungsi:</strong> Menjawab "Dari mana uang tunai (kas) masuk dan ke mana keluarnya?" <em>selama satu periode</em>. (Perusahaan bisa profit di laba rugi, tapi kehabisan kas di arus kas).</p>
  </div>
</div>
    `.trim(),
  },
  {
    q: '[ESAI FINANCE] Sebutkan 2 contoh sumber dana jangka pendek dan 2 sumber dana jangka panjang beserta penjelasannya!',
    options: ['Lihat Pembahasan Lengkap'],
    answer: 0,
    explanation: `
<div class="space-y-4 text-sm">
  <div>
    <h4 class="font-bold text-blue-800 mb-2">Sumber Dana Jangka Pendek (< 1 tahun)</h4>
    <ul class="list-disc pl-5 space-y-2">
      <li><strong>Trade Credit (Kredit Dagang):</strong> Kredit dari pemasok — perusahaan membeli barang sekarang dan membayarnya nanti (misal net 30 atau 60 hari). Seringkali bebas bunga jika dibayar tepat waktu.</li>
      <li><strong>Short-term Bank Loan / Line of Credit:</strong> Pinjaman bank bertenor pendek untuk memenuhi kebutuhan kas operasional harian yang fluktuatif.</li>
    </ul>
  </div>
  <div>
    <h4 class="font-bold text-green-800 mb-2">Sumber Dana Jangka Panjang (> 1 tahun)</h4>
    <ul class="list-disc pl-5 space-y-2">
      <li><strong>Long-term Bonds (Obligasi):</strong> Surat utang jangka panjang yang diterbitkan perusahaan kepada investor. Perusahaan membayar kupon (bunga) secara berkala dan mengembalikan pokok hutang pada saat jatuh tempo.</li>
      <li><strong>Equity Financing / IPO:</strong> Menghimpun dana dengan menjual kepemilikan (saham) perusahaan kepada publik di pasar modal. Dana ini tidak perlu dibayar kembali (berbeda dengan utang).</li>
    </ul>
  </div>
</div>
    `.trim(),
  },
  {
    q: '[ESAI FINANCE] Jelaskan secara singkat istilah keuangan berikut: Common Stock, IPO, Retained Earnings, Letter of Credit, dan Bond!',
    options: ['Lihat Pembahasan Lengkap'],
    answer: 0,
    explanation: `
<div class="space-y-3 text-sm">
  <div class="border-l-4 border-blue-500 pl-3">
    <strong class="text-blue-800 block">Common Stock (Saham Biasa)</strong>
    <p>Surat bukti kepemilikan dalam korporasi. Memberikan hak suara dalam RUPS dan hak atas dividen. Pemegang saham biasa adalah <em>residual claimant</em> (penerima terakhir aset jika perusahaan dilikuidasi setelah kreditor).</p>
  </div>
  <div class="border-l-4 border-blue-500 pl-3">
    <strong class="text-blue-800 block">IPO (Initial Public Offering)</strong>
    <p>Proses saat perusahaan privat pertama kali menjual sahamnya kepada publik melalui pasar modal untuk menghimpun modal ekspansi yang besar.</p>
  </div>
  <div class="border-l-4 border-blue-500 pl-3">
    <strong class="text-blue-800 block">Retained Earnings (Laba Ditahan)</strong>
    <p>Laba bersih perusahaan yang tidak dibagikan sebagai dividen, melainkan "ditahan" untuk diinvestasikan kembali ke dalam bisnis. Ini adalah sumber pendanaan internal yang paling murah.</p>
  </div>
  <div class="border-l-4 border-blue-500 pl-3">
    <strong class="text-blue-800 block">Letter of Credit (L/C)</strong>
    <p>Dokumen yang diterbitkan bank (atas permintaan importir) yang menjamin pembayaran kepada eksportir selama syarat-syarat pengiriman terpenuhi. Instrumen krusial untuk mengurangi risiko dalam bisnis global.</p>
  </div>
  <div class="border-l-4 border-blue-500 pl-3">
    <strong class="text-blue-800 block">Bond (Obligasi)</strong>
    <p>Surat utang jangka panjang. Penerbit obligasi berjanji membayar bunga (kupon) berkala dan mengembalikan pokok utang pada tanggal jatuh tempo kepada investor.</p>
  </div>
</div>
    `.trim(),
  },
  {
    q: '[ESAI GLOBAL BIZ] Apa perbedaan antara Absolute Advantage dan Comparative Advantage? Berikan contoh!',
    options: ['Lihat Pembahasan Lengkap'],
    answer: 0,
    explanation: `
<div class="space-y-4 text-sm">
  <div class="p-3 bg-gray-50 border rounded-lg">
    <h4 class="font-bold text-gray-900 mb-1">Absolute Advantage (Keunggulan Mutlak)</h4>
    <p>Kemampuan suatu negara untuk memproduksi barang tertentu dengan <strong>lebih efisien secara absolut</strong> (menggunakan sumber daya yang lebih sedikit/murah) dibandingkan negara manapun.</p>
    <p class="mt-1 text-gray-600"><em>Contoh:</em> Arab Saudi dalam produksi minyak bumi, karena biaya ekstraksi di sana secara mutlak adalah yang terendah di dunia.</p>
  </div>
  <div class="p-3 bg-gray-50 border rounded-lg">
    <h4 class="font-bold text-gray-900 mb-1">Comparative Advantage (Keunggulan Komparatif)</h4>
    <p>Kemampuan suatu negara untuk berspesialisasi memproduksi barang di mana <strong>opportunity cost-nya (biaya peluang) paling rendah</strong> dibandingkan negara lain — meskipun negara tersebut mungkin tidak memiliki keunggulan mutlak atas barang apapun.</p>
    <p class="mt-1 text-gray-600"><em>Contoh:</em> Indonesia memproduksi kerajinan batik, karena opportunity cost untuk membuat batik jauh lebih rendah dibandingkan jika harus memproduksi semikonduktor (elektronik).</p>
  </div>
  <div class="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
    <strong class="text-yellow-800">Insight Analisis:</strong>
    <p>Teori keunggulan komparatif (David Ricardo) membuktikan bahwa <strong>setiap negara tetap bisa untung dari perdagangan bebas</strong>, asalkan mereka fokus mengekspor produk yang biaya peluangnya paling rendah dan mengimpor sisanya.</p>
  </div>
</div>
    `.trim(),
  },
  {
    q: '[ESAI ORG] Jelaskan perbedaan antara Centralization dan Decentralization dalam desain organisasi!',
    options: ['Lihat Pembahasan Lengkap'],
    answer: 0,
    explanation: `
<div class="space-y-4 text-sm">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <div class="p-3 border rounded-lg bg-red-50/50 border-red-100">
      <h4 class="font-bold text-red-800 mb-2">Centralization (Sentralisasi)</h4>
      <ul class="list-disc pl-5 space-y-1">
        <li>Wewenang pengambilan keputusan terpusat di manajemen puncak (top management).</li>
        <li><strong>Keunggulan:</strong> Keputusan lebih konsisten, terkoordinasi, dan kontrol ketat dari pusat.</li>
        <li><strong>Kelemahan:</strong> Respons lambat terhadap perubahan lokal dan birokratis.</li>
        <li><strong>Cocok untuk:</strong> Keputusan strategis besar, berisiko tinggi, atau di masa krisis. (Contoh: Militer, UPS).</li>
      </ul>
    </div>
    <div class="p-3 border rounded-lg bg-green-50/50 border-green-100">
      <h4 class="font-bold text-green-800 mb-2">Decentralization (Desentralisasi)</h4>
      <ul class="list-disc pl-5 space-y-1">
        <li>Wewenang disebarkan atau didelegasikan ke berbagai tingkatan manajemen di bawah.</li>
        <li><strong>Keunggulan:</strong> Sangat responsif terhadap kebutuhan lokal, mendorong kreativitas, dan memberdayakan manajer level bawah.</li>
        <li><strong>Kelemahan:</strong> Risiko inkonsistensi antarcabang dan butuh SDM bawah yang kompeten.</li>
        <li><strong>Cocok untuk:</strong> Lingkungan bisnis yang dinamis dan inovatif. (Contoh: Zappos, Johnson & Johnson).</li>
      </ul>
    </div>
  </div>
  <p class="text-gray-600 italic mt-2">Tidak ada pendekatan yang 100% sempurna. Pilihan tergantung pada skala organisasi, kompleksitas bisnis, dan tingkat kompetensi manajer lini pertama.</p>
</div>
    `.trim(),
  }
];
