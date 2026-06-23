const fs = require('fs');

const filePath = 'src/data/perpajakan/perpajakanPraUAS.ts';
let content = fs.readFileSync(filePath, 'utf8');

const startStr = '**Diperbarui mengikuti regulasi s.d.:** Juni 2026';
const endStr = '### 0. Peta Konsep: Eskalasi Pengawasan Pajak';

const startIdx = content.indexOf(startStr);
const endIdx = content.indexOf(endStr);

if (startIdx !== -1 && endIdx !== -1) {
  const replacement = `**Diperbarui mengikuti regulasi s.d.:** Juni 2026\\n\\n> **Catatan baca:** Materi ini sudah disesuaikan dengan aturan terbaru. Beberapa angka pasal dan jenis pemeriksaan di slide lama (era PMK 17/2013) **sudah tidak berlaku** dan sudah dikoreksi di sini. Lihat bagian *Catatan Koreksi* di akhir.\\n\\n> 💡 **Glosarium Istilah & Singkatan:**\\n> - **§** : Simbol Pasal atau Bagian (contoh: \\"lihat §4\\" berarti lihat Pasal/Bagian 4).\\n> - **KUP** : Ketentuan Umum dan Tata Cara Perpajakan.\\n> - **DJP** : Direktorat Jenderal Pajak.\\n> - **WP** : Wajib Pajak.\\n> - **SPT** : Surat Pemberitahuan.\\n> - **SKP** : Surat Ketetapan Pajak (SKPKB = Kurang Bayar, SKPKBT = Kurang Bayar Tambahan, SKPN = Nihil, SKPLB = Lebih Bayar).\\n> - **STP** : Surat Tagihan Pajak.\\n> - **SP2DK** : Surat Permintaan Penjelasan atas Data dan/atau Keterangan.\\n> - **PMK** : Peraturan Menteri Keuangan.\\n\\n---\\n\\n### 0. Peta Konsep: Eskalasi Pengawasan Pajak`;

  content = content.slice(0, startIdx) + replacement + content.slice(endIdx + endStr.length);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed syntax error in TS file!');
} else {
  console.log('Could not find start or end strings.');
}
