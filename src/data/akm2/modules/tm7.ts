import type { Reading } from '../../../types';
import { CASE_WARRANTY_PROVISION } from '../akm2PracticeCases';

const SVG_PROVISION_DECISION = `
<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="230" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MATRIKS KEPUTUSAN PROVISI VS KONTINJENSI (PSAK 57)</text>
  
  <!-- Level 1: Probable -->
  <rect x="30" y="55" width="190" height="170" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="125" y="80" fill="#10b981" font-size="12" font-weight="700" text-anchor="middle">PROBABLE (&gt; 50%)</text>
  <text x="125" y="102" fill="#f8fafc" font-size="10.5" font-weight="600" text-anchor="middle">Kemungkinan Besar Terjadi</text>
  <line x1="45" y1="115" x2="205" y2="115" stroke="#334155"/>
  <text x="125" y="135" fill="#cbd5e1" font-size="10" text-anchor="middle">• Estimasi Andal: **AKUI**</text>
  <text x="125" y="152" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">PROVISI DI NERACA</text>
  <text x="125" y="172" fill="#cbd5e1" font-size="10" text-anchor="middle">• Estimasi Tdk Andal:</text>
  <text x="125" y="190" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Ungkapkan di Catatan (CALK)</text>

  <!-- Level 2: Possible -->
  <rect x="245" y="55" width="190" height="170" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="340" y="80" fill="#f59e0b" font-size="12" font-weight="700" text-anchor="middle">POSSIBLE (10% - 50%)</text>
  <text x="340" y="102" fill="#f8fafc" font-size="10.5" font-weight="600" text-anchor="middle">Mungkin Terjadi</text>
  <line x1="260" y1="115" x2="420" y2="115" stroke="#334155"/>
  <text x="340" y="135" fill="#cbd5e1" font-size="10" text-anchor="middle">TIDAK DIAKUI DI NERACA</text>
  <text x="340" y="155" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">UNGKAPKAN DI CALK</text>
  <text x="340" y="175" fill="#94a3b8" font-size="9.5" text-anchor="middle">(Deskripsi perkara, estimasi</text>
  <text x="340" y="192" fill="#94a3b8" font-size="9.5" text-anchor="middle">dampak finansial &amp; risiko)</text>

  <!-- Level 3: Remote -->
  <rect x="460" y="55" width="190" height="170" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
  <text x="555" y="80" fill="#94a3b8" font-size="12" font-weight="700" text-anchor="middle">REMOTE (&lt; 10%)</text>
  <text x="555" y="102" fill="#f8fafc" font-size="10.5" font-weight="600" text-anchor="middle">Kemungkinan Kecil Sekali</text>
  <line x1="475" y1="115" x2="635" y2="115" stroke="#334155"/>
  <text x="555" y="145" fill="#cbd5e1" font-size="10.5" text-anchor="middle">TIDAK DIAKUI</text>
  <text x="555" y="165" fill="#cbd5e1" font-size="10.5" text-anchor="middle">TIDAK DIUNGKAPKAN</text>
  <text x="555" y="188" fill="#64748b" font-size="10" text-anchor="middle">(Diabaikan)</text>
</svg>`;

export const TM7_READING: Reading = {
  tm: 7,
  title: 'Provisi, Kontinjensi, dan Peristiwa Setelah Tanggal Pelaporan',
  ref: 'Kieso IFRS 5e Ch. 13 | PSAK 57, PSAK 8',
  intro: 'Modul Pembelajaran Mendalam AKM II TM 7: Menguasai kriteria pengakuan Provisi vs Liabilitas Kontinjensi vs Aset Kontinjensi (PSAK 57), akuntansi Garansi Produk (Assurance vs Service Warranty), Kontrak Memberatkan (Onerous Contracts), Provisi Restrukturisasi, serta pembedaan Peristiwa Penyesuai vs Non-Penyesuai Pasca Tanggal Neraca (PSAK 8).',
  objectives: [
    'Membedakan 3 pilar PSAK 57: Provisi (Diakui di Laporan), Liabilitas Kontinjensi (Diungkapkan di Catatan), dan Remote (Diabaikan).',
    'Menguasai 3 syarat wajib pengakuan Provisi: Kewajiban Kini, Kemungkinan Besar Arus Keluar (Probable >50%), dan Estimasi Andal.',
    'Membedakan perlakuan akuntansi Garansi Assurance (PSAK 57) vs Garansi Service (PSAK 72).',
    'Menghitung dan menjurnal Provisi Restrukturisasi serta memahami larangan memasukkan biaya retraining staf.',
    'Memahami akuntansi Kontrak Memberatkan (Onerous Contracts) dan Provisi Perkara Pengadilan (Litigation).',
    'Mengklasifikasikan Peristiwa Setelah Periode Pelaporan (Adjusting Events vs Non-Adjusting Events sesuai PSAK 8).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Matriks Keputusan Pengakuan Provisi, Pengungkapan Kontinjensi, dan Remote',
      svg: SVG_PROVISION_DECISION,
      caption: 'Gambar 7.1: Alur keputusan perlakuan kewajiban berdasarkan tingkat probabilitas dan keandalan estimasi.'
    },

    { kind: 'h2', text: '1. Kerangka Dasar Pengakuan Provisi (PSAK 57)' },
    {
      kind: 'p',
      text: '**Provisi** adalah liabilitas yang waktu atau jumlahnya belum pasti. Entitas **WAJIB** mengakui provisi jika dan hanya jika memenuhi ketiga kondisi berikut secara kumulatif:'
    },
    {
      kind: 'ol',
      items: [
        'Entitas memiliki **kewajiban kini** (*present obligation*) sebagai akibat peristiwa masa lalu (baik kewajiban hukum maupun kewajiban konstruktif);',
        'Besar kemungkinan (**probable**, yaitu peluang terjadinya > 50%) bahwa penyelesaian kewajiban tersebut mengakibatkan **arus keluar sumber daya** yang mengandung manfaat ekonomik; DAN',
        'Estimasi yang **andal** dapat dibuat mengenai jumlah kewajiban tersebut.'
      ]
    },

    { kind: 'h2', text: '2. Akuntansi Garansi Produk: Assurance-Type vs Service-Type' },
    {
      kind: 'table',
      headers: ['Kategori Garansi', 'Konsep Standar Akuntansi', 'Mekanisme Penjurnalan'],
      rows: [
        ['1. Assurance-Type Warranty (PSAK 57)', 'Garansi bawaan pabrikan bahwa produk bebas cacat saat penyerahan. Bukan merupakan item penjualan terpisah.', 'Beban Garansi diakui penuh pada periode penjualan (Matching Principle) dengan mengkredit akun **Provisi Garansi**.'],
        ['2. Service-Type Warranty (PSAK 72)', 'Garansi tambahan berbayar yang memberikan layanan servis melebihi jaminan standar (diperpanjang 3-5 tahun).', 'Merupakan kewajiban pelaksanaan terpisah. Kas dicatat sebagai **Pendapatan Garansi Tangguhan** dan diakui bertahap sepanjang masa servis.']
      ],
      caption: 'Tabel 7.1: Perbandingan akuntansi garansi tipe asuransi vs tipe jasa.'
    },

    CASE_WARRANTY_PROVISION,

    { kind: 'h2', text: '3. Kasus Provisi Khusus: Restrukturisasi & Kontrak Memberatkan' },
    {
      kind: 'table',
      headers: ['Situasi Provisi', 'Syarat Pengakuan', 'Komponen Biaya yang BOLEH & TIDAK BOLEH Masuk'],
      rows: [
        ['Provisi Restrukturisasi', 'Wajib ada rencana formal rinci yang disetujui dan telah menimbulkan ekspektasi valid bagi pihak terdampak (diumumkan ke publik sebelum tanggal neraca).', '• **BOLEH**: Pesangon PHK karyawan, biaya pembatalan sewa gudang.\n• **TIDAK BOLEH**: Biaya pelatihan staf baru, biaya pemasaran produk baru.'],
        ['Kontrak Memberatkan (Onerous Contracts)', 'Kontrak di mana biaya tak terhindarkan untuk memenuhi kewajiban melebihi manfaat ekonomik yang akan diterima.', 'Diakui sebesar nilai yang **LEBIH RENDAH** antara biaya pemenuhan kontrak vs denda/penalti pembatalan kontrak.']
      ],
      caption: 'Tabel 7.2: Ketentuan provisi restrukturisasi dan kontrak memberatkan.'
    },

    { kind: 'h2', text: '4. Peristiwa Setelah Periode Pelaporan (PSAK 8)' },
    {
      kind: 'table',
      headers: ['Jenis Peristiwa Pasca Neraca', 'Definisi Kondisi', 'Perlakuan Akuntansi'],
      rows: [
        ['Peristiwa Penyesuai (Adjusting Events)', 'Peristiwa yang memberikan bukti atas kondisi yang **SUDAH ADA pada tanggal akhir periode pelaporan** (misal: putusan pengadilan awal Januari atas sengketa tahun lalu, kepailitan pelanggan yang piutangnya tercatat per 31 Des).', '**SESUAIKAN ANGKA** pada Laporan Keuangan (buat jurnal penyesuaian).'],
        ['Peristiwa Non-Penyesuai (Non-Adjusting Events)', 'Peristiwa yang mengindikasikan kondisi yang **BARU TIMBUL setelah tanggal pelaporan** (misal: kebakaran pabrik pada 15 Januari, penerbitan saham baru di Februari, penurunan nilai pasar investasi saham).', '**JANGAN RUBAH ANGKA LAPORAN**, cukup **UNGKAPKAN DI CATATAN (CALK)** jika material.']
      ],
      caption: 'Tabel 7.3: Perbedaan Peristiwa Penyesuai vs Non-Penyesuai menurut PSAK 8.'
    },

    { kind: 'h2', text: '5. Rangkuman & Kunci Penguasaan Ujian TM 7 (Pra-UTS)' },
    {
      kind: 'ul',
      items: [
        '**Provisi**: Diakui di neraca jika Probable (>50%) & Estimasi Andal.',
        '**Liabilitas Kontinjensi**: Cukup diungkapkan di CALK jika Possible (10-50%).',
        '**Aset Kontinjensi**: Hanya boleh diungkapkan jika Probable (>50%), dan baru dicatat di neraca jika **Virtually Certain (100%)**.',
        '**Garansi Assurance**: Debit Beban Garansi & Kredit Provisi Garansi saat periode penjualan barang.',
        '**Adjusting Events**: Menyesuaikan angka laporan jika kondisinya sudah berakar sebelum 31 Desember.'
      ]
    }
  ]
};